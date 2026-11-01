/**
 * One-off: upload project logos (pulled from each live site) and attach them
 * to the `logo` field used by the homepage Works cards.
 * Usage: npx tsx scripts/set-project-logos.ts <dir-with-pngs>
 * Expects alubasa.png, genedora.png, gamavas.png, microstart.png in that dir.
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

const dir = process.argv[2]
if (!dir || !existsSync(dir)) {
  console.log('Pass the logo directory: npx tsx scripts/set-project-logos.ts <dir>')
  process.exit(1)
}

const logos: Record<string, string> = {
  'Alubasa Labs': 'alubasa.png',
  GENEDORA: 'genedora.png',
  Gamavas: 'gamavas.png',
  MicroStart: 'microstart.png',
}

const { getPayload } = await import('payload')
const { default: payloadConfig } = await import('../src/payload.config')
const payload = await getPayload({ config: payloadConfig })

for (const [title, file] of Object.entries(logos)) {
  const filePath = path.join(dir, file)
  if (!existsSync(filePath)) {
    console.log(`Skipped ${title}: ${file} not found`)
    continue
  }

  const found = await payload.find({
    collection: 'projects',
    where: { title: { equals: title } },
    limit: 1,
    overrideAccess: true,
  })
  const project = found.docs[0]
  if (!project) {
    console.log(`Skipped ${title}: project not found`)
    continue
  }

  const media = await payload.create({
    collection: 'media',
    data: { alt: `${title} logo` },
    filePath,
    overrideAccess: true,
  })

  await payload.update({
    collection: 'projects',
    id: project.id,
    data: { logo: media.id },
    overrideAccess: true,
  })
  console.log(`Set ${title} logo → ${media.filename}`)
}

process.exit(0)
