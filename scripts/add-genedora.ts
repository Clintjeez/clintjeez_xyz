/**
 * One-off: add GENEDORA to Works and feature it on the homepage at #2.
 * Re-running updates the existing entry instead of duplicating it.
 * Usage: npx tsx scripts/add-genedora.ts <path-to-screenshot.jpg>
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

const screenshotPath = process.argv[2]
if (!screenshotPath || !existsSync(screenshotPath)) {
  console.log('Pass the screenshot path: npx tsx scripts/add-genedora.ts <file.jpg>')
  process.exit(1)
}

const { getPayload } = await import('payload')
const { default: payloadConfig } = await import('../src/payload.config')
const payload = await getPayload({ config: payloadConfig })

const media = await payload.create({
  collection: 'media',
  data: { alt: 'GENEDORA homepage: AI interpretation of DNA variants, built first for African genomes' },
  filePath: screenshotPath,
  overrideAccess: true,
})

const data = {
  title: 'GENEDORA',
  screenshot: media.id,
  projectDescription:
    'AI interpretation layer for DNA variants, built first for African genomes. Scores variants of uncertain significance from the sequence itself with a DNA language model, no population databases, and ships an explainable, ACMG-aligned evidence trail with every call.',
  stacks: [
    { stack: 'Next.js' },
    { stack: 'Evo 2 (DNA language model)' },
    { stack: 'Genomics AI' },
    { stack: 'VCF / HGVS' },
  ],
  liveUrl: 'https://genedora.alubasalabs.com',
  featured: true,
  featuredOrder: 2,
}

const existing = await payload.find({
  collection: 'projects',
  where: { title: { equals: 'GENEDORA' } },
  limit: 1,
  overrideAccess: true,
})

if (existing.docs[0]) {
  await payload.update({ collection: 'projects', id: existing.docs[0].id, data, overrideAccess: true })
  console.log('Updated GENEDORA.')
} else {
  await payload.create({ collection: 'projects', data, overrideAccess: true })
  console.log('Created GENEDORA.')
}

// Homepage shows 3 featured: Alubasa Labs (1), GENEDORA (2), Gamavas (3).
// MicroStart drops off the homepage but stays on /works.
const reorder: Record<string, Partial<{ featured: boolean; featuredOrder: number }>> = {
  Gamavas: { featuredOrder: 3 },
  MicroStart: { featuredOrder: 4 },
}
for (const [title, patch] of Object.entries(reorder)) {
  const found = await payload.find({
    collection: 'projects',
    where: { title: { equals: title } },
    limit: 1,
    overrideAccess: true,
  })
  if (found.docs[0]) {
    await payload.update({ collection: 'projects', id: found.docs[0].id, data: patch, overrideAccess: true })
    console.log(`Set ${title} featuredOrder → ${patch.featuredOrder}`)
  }
}

process.exit(0)
