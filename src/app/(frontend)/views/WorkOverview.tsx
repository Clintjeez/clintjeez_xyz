import React from 'react'
import Image from 'next/image'
import { HiArrowUpRight, HiOutlineEnvelope } from 'react-icons/hi2'
import type { Media, Project } from '../../../payload-types'
import { payloadData } from '../../lib/payload'

const hostOf = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

function ProjectCard({ project }: { project: Project }) {
  const shot = project.screenshot as Media | null | undefined
  const href = project.liveUrl || project.githubUrl || undefined
  const linkLabel = project.liveUrl ? hostOf(project.liveUrl) : project.githubUrl ? 'GitHub' : null
  const Wrapper = href ? 'a' : 'div'

  return (
    <Wrapper
      {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-[#2a2a2e] bg-[#1b1c21] transition-all duration-500 hover:shadow-[0_7px_40px_6px_#000000aa]"
    >
      {/* Screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#17181d]">
        {shot?.url && (
          <Image
            src={shot.url}
            alt={shot.alt || project.title}
            fill
            sizes="(min-width: 768px) 30vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
          />
        )}

        {/* Hover summary */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/75 to-black/10 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
          <div className="translate-y-4 transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0 motion-reduce:transition-none">
            <p className="text-[10px] md:text-[11px] leading-relaxed text-[#e0e0e0] line-clamp-4">
              {project.projectDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex items-center justify-between gap-3 border-t border-[#2a2a2e] bg-[#1b1c21] px-3.5 py-3">
        <h3 className="truncate text-[11px] font-bold text-[#e0e0e0]">{project.title}</h3>
        {linkLabel && (
          <span className="inline-flex shrink-0 items-center gap-1 text-[10px] text-[#777778] transition-colors duration-300 group-hover:text-[#edd86e]">
            {linkLabel}
            <HiArrowUpRight className="text-[11px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        )}
      </div>
    </Wrapper>
  )
}

function ContactCard() {
  return (
    <a
      href="mailto:hey@clintjeez.com?subject=Let%27s%20build%20something"
      className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-lg border border-dashed border-[#edd86e]/40 bg-[#1b1c21] p-5 transition-all duration-500 hover:shadow-[0_7px_40px_6px_#000000aa]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70"
        style={{
          backgroundImage: "url('/tile_bg.svg')",
          backgroundSize: '142px 71px',
        }}
      />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(237,216,110,0.22),transparent_70%)] transition-transform duration-700 group-hover:scale-150" />

      <p className="relative text-[10px] font-semibold uppercase tracking-widest text-[#edd86e]">
        Your project next?
      </p>
      <div className="relative">
        <h3 className="mb-2 text-[16px] md:text-[18px] font-bold leading-snug text-[#e0e0e0]">
          Building something cool?
        </h3>
        <p className="mb-5 text-[11px] leading-relaxed text-[#777778]">
          Let&apos;s work on it together. Tell me what you&apos;re building and where it&apos;s
          stuck.
        </p>
        <span className="inline-flex items-center gap-2 rounded-md border border-[#edd86e] bg-[#17181d] px-3 py-2 text-[12px] font-excalifont text-[#bfbfbf] transition-colors duration-300 group-hover:bg-[#484848]">
          <HiOutlineEnvelope className="text-[15px] text-[#edd86e]" />
          hey@clintjeez.com
          <HiArrowUpRight className="text-[12px] text-[#edd86e] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  )
}

const WorkOverview = async () => {
  const featured = await (
    await payloadData()
  ).find({
    collection: 'projects',
    where: { featured: { equals: true } },
    sort: 'featuredOrder',
    limit: 3,
    depth: 1,
  })

  return (
    <section id="works" className="mb-20 scroll-mt-8">
      {/* Section Header */}
      <div className="mb-10">
        <h1 className="mb-3 font-bold text-[16px]">Works</h1>
        <h2 className="text-[16px] md:text-[20px] md:pr-[50px] font-light text-[#777778]">
          A selection of recent projects, shaped by a 9+ years journey in software engineering and
          solving the problems around me.
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featured.docs.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <ContactCard />
      </div>
    </section>
  )
}

export default WorkOverview
