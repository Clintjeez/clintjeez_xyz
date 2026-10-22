export const GITHUB_USERNAME = 'Clintjeez'
const REVALIDATE_SECONDS = 3600

export type ContributionDay = { date: string; level: number; count: number }

export type GithubActivity = {
  weeks: (ContributionDay | null)[][] // columns of 7 days (Sun → Sat)
}

// GitHub serves the profile contribution calendar as public HTML (no token needed)
async function fetchCalendar(): Promise<string> {
  const res = await fetch(`https://github.com/users/${GITHUB_USERNAME}/contributions`, {
    next: { revalidate: REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(8000),
  })
  if (!res.ok) throw new Error(`GitHub contributions request failed: ${res.status}`)
  return res.text()
}

function parseCalendar(html: string) {
  const counts = new Map<string, number>()
  for (const [, id, label] of html.matchAll(
    /for="(contribution-day-component-\d+-\d+)"[^>]*>([^<]*)</g,
  )) {
    const match = label.trim().match(/^(\d+) contributions?/)
    counts.set(id, match ? Number(match[1]) : 0)
  }

  const cells: { row: number; col: number; day: ContributionDay }[] = []
  for (const [tag] of html.matchAll(/<td[^>]*data-date="[^"]+"[^>]*>/g)) {
    const date = tag.match(/data-date="([^"]+)"/)?.[1]
    const id = tag.match(/id="(contribution-day-component-(\d+)-(\d+))"/)
    const level = Number(tag.match(/data-level="(\d)"/)?.[1] ?? 0)
    if (!date || !id) continue
    cells.push({
      row: Number(id[2]),
      col: Number(id[3]),
      day: { date, level, count: counts.get(id[1]) ?? 0 },
    })
  }
  return cells
}

export async function getGithubActivity(): Promise<GithubActivity | null> {
  try {
    const cells = parseCalendar(await fetchCalendar())
    if (cells.length === 0) return null

    const columns = Math.max(...cells.map((c) => c.col)) + 1
    const weeks: (ContributionDay | null)[][] = Array.from({ length: columns }, () =>
      Array<ContributionDay | null>(7).fill(null),
    )
    for (const { row, col, day } of cells) weeks[col][row] = day

    return { weeks }
  } catch (error) {
    console.error('Failed to load GitHub activity', error)
    return null
  }
}
