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

const slugs = [
  'cold-email-infrastructure-setup',
  'find-saas-activation-problem-48-hours',
  'what-is-a-gtm-engineer',
]

for (const slug of slugs) {
  const r = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    overrideAccess: true,
    limit: 1,
  })
  if (!r.docs[0]) { console.log(`not found: ${slug}`); continue }
  await payload.update({
    collection: 'posts',
    id: r.docs[0].id,
    data: { _status: 'draft' } as any,
    overrideAccess: true,
  })
  console.log(`  ✓ Draft: ${r.docs[0].title}`)
}

console.log('Done.')
process.exit(0)
