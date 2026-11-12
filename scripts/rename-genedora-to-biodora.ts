/**
 * One-off: rename the GENEDORA project to BIODORA (parent brand; GENEDORA is now its first product).
 * Usage: npx tsx scripts/rename-genedora-to-biodora.ts
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

const found = await payload.find({
  collection: 'projects',
  where: { title: { in: ['GENEDORA', 'BIODORA'] } },
  limit: 1,
  overrideAccess: true,
})

const doc = found.docs[0]
if (!doc) {
  console.log('No GENEDORA/BIODORA project found.')
  process.exit(1)
}

await payload.update({
  collection: 'projects',
  id: doc.id,
  data: {
    title: 'BIODORA',
    liveUrl: 'https://biodora.alubasalabs.com',
    projectDescription:
      'Frontier biotech tools for and with African biodata. First product, GENEDORA, interprets DNA variants of uncertain significance from the sequence itself with a DNA language model, no population databases, and ships an explainable, ACMG-aligned evidence trail with every call.',
  },
  overrideAccess: true,
})

console.log(`Renamed project ${doc.id}: ${doc.title} → BIODORA`)
process.exit(0)
