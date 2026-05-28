import { getPayload } from 'payload'
import config from '../src/payload.config'

async function main() {
  const payload = await getPayload({ config })

  const all = await payload.find({
    collection: 'posts',
    limit: 50,
    depth: 0,
    overrideAccess: true,
    draft: false,
  })

  console.log(`\nTotal docs: ${all.totalDocs}\n`)
  for (const post of all.docs) {
    const p = post as any
    console.log(`[${p._status}] ${p.title} | publishedDate: ${p.publishedDate || 'null'} | slug: ${p.slug}`)
  }

  process.exit(0)
}

main().catch((e) => { console.error(e); process.exit(1) })
