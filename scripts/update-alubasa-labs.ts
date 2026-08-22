/**
 * One-off: correct the "Alubasa Labs" project entry (role + description).
 * Usage: npx tsx scripts/update-alubasa-labs.ts
 */

import { readFileSync, existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')

function loadEnv() {
  for (const name of ['.env.local', '.env']) {
    const abs = path.join(ROOT, name)
    if (!existsSync(abs)) continue
    readFileSync(abs, 'utf-8')
      .split('\n')
      .forEach((raw) => {
        const line = raw.trim()
        if (!line || line.startsWith('#')) return
        const eq = line.indexOf('=')
        if (eq === -1) return
        const key = line.slice(0, eq).trim()
        const val = line
          .slice(eq + 1)
          .trim()
          .replace(/^(["'])(.*)(\1)$/, '$2')
        if (key && !(key in process.env)) process.env[key] = val
      })
    break
  }
}
loadEnv()

const { getPayload } = await import('payload')
const { default: payloadConfig } = await import('../src/payload.config')
const payload = await getPayload({ config: payloadConfig })

const existing = await payload.find({
  collection: 'projects',
  where: { title: { equals: 'Alubasa Labs' } },
  limit: 1,
  overrideAccess: true,
})

const doc = existing.docs[0]
if (!doc) {
  console.log('No "Alubasa Labs" project found.')
  process.exit(1)
}

await payload.update({
  collection: 'projects',
  id: doc.id,
  data: {
    role: 'Founder & Lead Architect',
    projectDescription:
      'Venture studio and fractional technical partner helping African founders and non-tech businesses — real estate, legal, agriculture, finance, health — build revenue infrastructure: CRM, ERP, accounting, cybersecurity, and AI adoption',
  },
  overrideAccess: true,
})

console.log('Updated Alubasa Labs role + description.')
process.exit(0)
