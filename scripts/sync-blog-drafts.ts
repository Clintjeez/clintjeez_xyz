/**
 * Syncs content/blog/*.md files to Payload CMS.
 *
 * Strategy:
 *   On startup  — scan all .md files.
 *                 Create posts that don't exist yet (by slug).
 *                 Update content of posts that already exist (re-sync Lexical nodes).
 *   Watch mode  — watch for new/changed .md files and sync immediately.
 *
 * Usage: pnpm sync-drafts
 */

import { readFileSync, readdirSync, existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { markdownToLexical } from './md-to-lexical'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')
const BLOG_DIR = path.join(ROOT, 'content', 'blog')

// ─── Env loading ─────────────────────────────────────────────────────────────

function loadEnv() {
  for (const name of ['.env.local', '.env']) {
    const abs = path.join(ROOT, name)
    if (!existsSync(abs)) continue
    try {
      ;(process as NodeJS.Process & { loadEnvFile: (p: string) => void }).loadEnvFile(abs)
      console.log(`Loaded env from ${name}`)
    } catch {
      readFileSync(abs, 'utf-8')
        .split('\n')
        .forEach((raw) => {
          const line = raw.trim()
          if (!line || line.startsWith('#')) return
          const eq = line.indexOf('=')
          if (eq === -1) return
          const key = line.slice(0, eq).trim()
          const val = line.slice(eq + 1).trim().replace(/^(["'])(.*)(\1)$/, '$2')
          if (key && !(key in process.env)) process.env[key] = val
        })
      console.log(`Loaded env from ${name} (manual parse)`)
    }
    break
  }

  if (!process.env.POSTGRES_URL) {
    console.error('❌  POSTGRES_URL not set. Add it to .env.local and retry.')
    process.exit(1)
  }
}

loadEnv()

// ─── Payload init ─────────────────────────────────────────────────────────────

console.log('Initialising Payload …')

let payload: Awaited<ReturnType<typeof import('payload').getPayload>>

try {
  const { getPayload } = await import('payload')
  const { default: payloadConfig } = await import('../src/payload.config')
  payload = await getPayload({ config: payloadConfig })
  console.log('Payload ready.\n')
} catch (err: any) {
  console.error('❌  Payload init failed:', err?.message ?? err)
  process.exit(1)
}

// ─── Parser ───────────────────────────────────────────────────────────────────

interface ParsedPost {
  title: string
  slug: string
  postDescription: string
  publishedDate: string
  tags: Array<{ tag: string }>
  content: object
  meta: { metaTitle: string; metaDescription: string }
}

function parseMarkdownFile(filePath: string): ParsedPost | null {
  let raw: string
  try {
    raw = readFileSync(filePath, 'utf-8')
  } catch {
    return null
  }

  const lines = raw.split('\n')

  const h1 = lines.find((l) => l.startsWith('# '))
  const title = h1?.slice(2).trim() || path.basename(filePath, '.md')

  const slugLine = lines.find((l) => /^\*\*Slug:\*\*/.test(l))
  const fileSlug = path.basename(filePath, '.md').replace(/^\d{4}-\d{2}-\d{2}-/, '')
  const slug = slugLine?.replace(/^\*\*Slug:\*\*\s*/, '').trim() || fileSlug

  const metaLine = lines.find((l) => /^\*\*Meta description:\*\*/.test(l))
  const postDescription = metaLine?.replace(/^\*\*Meta description:\*\*\s*/, '').trim() || title

  const dateMatch = path.basename(filePath).match(/^(\d{4}-\d{2}-\d{2})/)
  const publishedDate = dateMatch
    ? new Date(dateMatch[1]).toISOString()
    : new Date().toISOString()

  const metaInfoLine = lines.find((l) => /^\*Pillar:/.test(l))
  const keywordMatch = metaInfoLine?.match(/Keyword:\s*([^|*]+)/)
  const tags: Array<{ tag: string }> = keywordMatch
    ? keywordMatch[1]
        .split(',')
        .map((k) => ({ tag: k.trim() }))
        .filter((t) => t.tag.length > 0)
    : []

  const content = markdownToLexical(raw)

  return {
    title,
    slug,
    postDescription,
    publishedDate,
    tags,
    content,
    meta: { metaTitle: title, metaDescription: postDescription },
  }
}

// ─── Sync logic ───────────────────────────────────────────────────────────────

async function syncFile(filePath: string, existingSlugMap: Map<string, number>): Promise<void> {
  const filename = path.basename(filePath)
  if (filename.startsWith('_') || !filename.endsWith('.md')) return

  const parsed = parseMarkdownFile(filePath)
  if (!parsed) return

  process.stdout.write(`  → ${filename} … `)

  try {
    const existingId = existingSlugMap.get(parsed.slug)

    if (existingId) {
      // Only update content — never touch _status (publish/draft is managed in admin)
      await payload.update({
        collection: 'posts',
        id: existingId,
        data: { content: parsed.content } as any,
        overrideAccess: true,
      })
      console.log(`updated — "${parsed.title}"`)
    } else {
      // New posts start as draft — publish manually in admin when ready
      const created = await payload.create({
        collection: 'posts',
        data: { ...parsed, _status: 'draft' } as any,
        draft: true,
        overrideAccess: true,
      })
      existingSlugMap.set(parsed.slug, created.id as number)
      console.log(`created — "${parsed.title}"`)
    }
  } catch (err: any) {
    console.log(`FAILED — ${err?.message ?? err}`)
    if (err?.data) console.log('  detail:', JSON.stringify(err.data, null, 2))
  }
}

// ─── Initial scan ─────────────────────────────────────────────────────────────

async function initialScan(): Promise<Map<string, number>> {
  console.log('Checking Payload for existing posts …')

  const result = await payload.find({
    collection: 'posts',
    limit: 1000,
    overrideAccess: true,
    draft: true,
  })

  const slugMap = new Map<string, number>(
    result.docs.map((d) => [d.slug as string, d.id as number]),
  )
  console.log(`Found ${slugMap.size} existing post(s) in Payload.`)

  const files = readdirSync(BLOG_DIR).filter(
    (f) => f.endsWith('.md') && !f.startsWith('_'),
  )

  console.log(`Syncing ${files.length} markdown file(s) …`)
  for (const f of files) {
    await syncFile(path.join(BLOG_DIR, f), slugMap)
  }
  console.log()

  return slugMap
}

// ─── Watch for changes ────────────────────────────────────────────────────────

const slugMap = await initialScan()

const { watch } = await import('chokidar')

const watcher = watch(path.join(BLOG_DIR, '*.md'), {
  ignoreInitial: true,
  awaitWriteFinish: { stabilityThreshold: 600, pollInterval: 100 },
})

console.log('👀  Watching content/blog/ for new/changed articles …\n')

watcher.on('add', async (fp: string) => {
  await syncFile(fp, slugMap).catch(console.error)
})

watcher.on('change', async (fp: string) => {
  await syncFile(fp, slugMap).catch(console.error)
})

process.on('SIGINT', () => {
  watcher.close()
  process.exit(0)
})
