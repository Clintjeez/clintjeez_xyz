/**
 * One-off migration: publish the hardcoded "Work & Experience" entries
 * (formerly in views/WorkOverview.tsx) into the Payload `projects` collection,
 * merging them into the same list that powers /works.
 *
 * Idempotent: matches existing projects by title, so it's safe to re-run.
 *
 * Usage: npx tsx scripts/seed-work-experience.ts
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

interface Entry {
  title: string
  role: string
  projectDescription: string
  logoFile: string
  featuredOrder: number
}

const entries: Entry[] = [
  {
    title: 'MicroStart',
    role: 'Growth & GTM Engineer',
    projectDescription:
      'Platform helping founders launch Micro SaaS with validated source code and GTM setup',
    logoFile: 'microstart-logo.jpeg',
    featuredOrder: 1,
  },
  {
    title: 'ThisTechThing',
    role: 'Founder & Community Lead',
    projectDescription:
      'Community connecting and empowering digital creators and tech professionals',
    logoFile: 'thistechthing_logo.jpeg',
    featuredOrder: 2,
  },
  {
    title: 'AsklawLM',
    role: 'AI Engineer',
    projectDescription:
      'Legal AI workspace for document drafting, contract analysis, and case research',
    logoFile: 'asklaw-lm.jpeg',
    featuredOrder: 3,
  },
  {
    title: 'Alubasa Labs',
    role: 'Solutions Engineer',
    projectDescription:
      'AI-driven automation workflows and tailored solutions for business operations',
    logoFile: 'alubasa-labs.jpeg',
    featuredOrder: 4,
  },
  {
    title: 'Neutron Gaming',
    role: 'Senior Software Engineer',
    projectDescription:
      'Web3 game launcher with RESTful APIs and smart contracts for digital assets',
    logoFile: 'neutron-gaming.jpeg',
    featuredOrder: 5,
  },
  {
    title: 'Alumunite',
    role: 'Software Engineer',
    projectDescription:
      'Alumni crowdfunding web app with optimized scalability and maintainability',
    logoFile: 'alumunite_logo.jpeg',
    featuredOrder: 6,
  },
]

async function findOrUploadMedia(filename: string): Promise<number> {
  const existing = await payload.find({
    collection: 'media',
    where: { filename: { equals: filename } },
    limit: 1,
    overrideAccess: true,
  })
  if (existing.docs.length > 0) {
    return existing.docs[0].id as number
  }

  const filePath = path.join(ROOT, 'public', 'experience', filename)
  const buffer = readFileSync(filePath)
  const alt = path.basename(filename, path.extname(filename))

  const created = await payload.create({
    collection: 'media',
    data: { alt },
    file: {
      data: buffer,
      mimetype: 'image/jpeg',
      name: filename,
      size: buffer.length,
    },
    overrideAccess: true,
  })
  return created.id as number
}

async function main() {
  console.log('Publishing work/experience entries to Payload `projects` …\n')

  const existingProjects = await payload.find({
    collection: 'projects',
    limit: 1000,
    overrideAccess: true,
  })
  const byTitle = new Map(existingProjects.docs.map((d) => [d.title, d]))

  for (const entry of entries) {
    process.stdout.write(`  → ${entry.title} … `)
    try {
      const mediaId = await findOrUploadMedia(entry.logoFile)
      const existing = byTitle.get(entry.title)

      if (existing) {
        await payload.update({
          collection: 'projects',
          id: existing.id,
          data: {
            role: entry.role,
            featured: true,
            featuredOrder: entry.featuredOrder,
            ...(existing.screenshot ? {} : { screenshot: mediaId }),
          },
          overrideAccess: true,
        })
        console.log(`updated (kept existing description/stacks)`)
      } else {
        await payload.create({
          collection: 'projects',
          data: {
            title: entry.title,
            role: entry.role,
            projectDescription: entry.projectDescription,
            screenshot: mediaId,
            featured: true,
            featuredOrder: entry.featuredOrder,
          },
          overrideAccess: true,
        })
        console.log('created')
      }
    } catch (err: any) {
      console.log(`FAILED — ${err?.message ?? err}`)
      if (err?.data) console.log('  detail:', JSON.stringify(err.data, null, 2))
    }
  }

  console.log('\nDone.')
  process.exit(0)
}

main()
