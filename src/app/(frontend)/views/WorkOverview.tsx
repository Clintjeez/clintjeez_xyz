import React from 'react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { HiArrowUpRight } from 'react-icons/hi2'
import type { Media, Project } from '../../../payload-types'
import { payloadData } from '../../lib/payload'

// Full-page site screenshots (site-*.jpg) don't read at thumbnail size,
// so those projects get a monogram instead of a tiny cropped page.
const isSiteShot = (media: Media | null | undefined) =>
  Boolean(media?.filename?.startsWith('site-'))

const linkBase =
  'inline-flex items-center justify-center h-8 rounded-md border border-[#2a2a2e] text-[#777778] hover:text-[#edd86e] hover:border-[#edd86e]/50 transition-colors duration-300'

function ProjectCard({ project }: { project: Project }) {
  const logo = (project.logo || project.screenshot) as Media | null | undefined
  const hasLinks = Boolean(project.liveUrl || project.githubUrl)

  return (
    <div className="group flex flex-col bg-[#1b1c21] rounded-lg p-4 border border-transparent hover:border-[#2a2a2e] transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        {logo?.url && !isSiteShot(logo) ? (
          <Image
            src={logo.url}
            alt={logo.alt || project.title}
            width={36}
            height={36}
            className="w-9 h-9 rounded-md object-cover shrink-0"
          />
        ) : (
          <span className="w-9 h-9 rounded-md shrink-0 flex items-center justify-center bg-[#17181d] border border-[#2a2a2e] text-[14px] font-bold text-[#edd86e]">
            {project.title.charAt(0).toUpperCase()}
          </span>
        )}
        <h3 className="min-w-0 text-[#e0e0e0] text-[13px] font-bold truncate">{project.title}</h3>
      </div>
      <p className="text-[11px] text-[#777778] leading-relaxed line-clamp-3">
        {project.projectDescription}
      </p>

      {hasLinks && (
        <div className="mt-auto pt-4 flex items-center justify-end gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              title="GitHub repo"
              className={`${linkBase} w-8`}
            >
              <FaGithub className="text-[15px]" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title}`}
              className={`${linkBase} gap-1.5 px-3 text-[11px]`}
            >
              View
              <HiArrowUpRight className="text-[13px]" />
            </a>
          )}
        </div>
      )}
    </div>
  )
}

const WorkOverview = async () => {
  const projects = await (
    await payloadData()
  ).find({
    collection: 'projects',
    // Featured first (in their set order), then everything else.
    sort: ['-featured', 'featuredOrder'],
    limit: 100,
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
      <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-3">
        {projects.docs.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default WorkOverview
