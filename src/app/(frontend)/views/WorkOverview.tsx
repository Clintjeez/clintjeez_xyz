import React from 'react'
import Image from 'next/image'
import type { Media } from '../../../payload-types'
import { payloadData } from '../../lib/payload'

const WorkOverview = async () => {
  const featured = await (
    await payloadData()
  ).find({
    collection: 'projects',
    where: { featured: { equals: true } },
    sort: 'featuredOrder',
    limit: 6,
    depth: 1,
  })

  return (
    <section className="mb-20">
      {/* Section Header */}
      <div className="mb-10">
        <h1 className="mb-3 font-bold text-[16px]">Work & Experience</h1>
        <h2 className="text-[16px] md:text-[20px] md:pr-[50px] font-light text-[#777778]">
          9 years of building software — from frontend interfaces to full-stack SaaS products and
          growth systems.
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 gap-3">
        {featured.docs.map((project) => {
          const logo = project.screenshot as Media | null | undefined
          return (
            <div
              key={project.id}
              className="group bg-[#1b1c21] rounded-lg p-3 border border-transparent hover:border-[#2a2a2e] transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-2">
                {logo?.url && (
                  <Image
                    src={logo.url}
                    alt={logo.alt || project.title}
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-md object-cover shrink-0"
                  />
                )}
                <div className="min-w-0">
                  <h3 className="text-[#e0e0e0] text-[11px] font-bold truncate">
                    {project.title}
                  </h3>
                  {project.role && (
                    <p className="text-[9px] text-[#edd86e] truncate">{project.role}</p>
                  )}
                </div>
              </div>
              <p className="text-[9px] text-[#777778] leading-relaxed line-clamp-2">
                {project.projectDescription}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default WorkOverview
