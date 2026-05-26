import { readFileSync, existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')

for (const name of ['.env.local', '.env']) {
  const abs = path.join(ROOT, name)
  if (!existsSync(abs)) continue
  try {
    ;(process as any).loadEnvFile(abs)
  } catch {
    readFileSync(abs, 'utf-8').split('\n').forEach((raw) => {
      const line = raw.trim()
      if (!line || line.startsWith('#')) return
      const eq = line.indexOf('=')
      if (eq === -1) return
      const key = line.slice(0, eq).trim()
      const val = line.slice(eq + 1).trim().replace(/^(["'])(.*)(\1)$/, '$2')
      if (key && !(key in process.env)) process.env[key] = val
    })
  }
  break
}

const { getPayload } = await import('payload')
const { default: payloadConfig } = await import('../src/payload.config')
const payload = await getPayload({ config: payloadConfig })

// Query without draft param so Payload returns ALL posts from the main table,
// including old posts that predate versioning and have no _posts_v record.
const result = await payload.find({
  collection: 'posts',
  limit: 1000,
  overrideAccess: true,
  where: {
    or: [
      { _status: { not_equals: 'published' } },
      { _status: { exists: false } },
    ],
  },
})

console.log(`Found ${result.totalDocs} post(s) not yet published`)

for (const post of result.docs) {
  await payload.update({
    collection: 'posts',
    id: post.id,
    data: { _status: 'published' } as any,
    draft: false,
    overrideAccess: true,
  })
  console.log(`  ✓ Published: ${post.title}`)
}

console.log('Done.')
process.exit(0)
