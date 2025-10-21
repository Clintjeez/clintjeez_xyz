import React from 'react'
import type { Project, Media } from '../../../payload-types'
import { FaExternalLinkAlt, FaGitAlt } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { GoDotFill } from 'react-icons/go'

const ProjectCard = ({ project }: { project: Project }) => {
  const screenshot = project.screenshot as Media | null | undefined

  return (
    <div className="bg-[#1b1c21] overflow-hidden md:hover:scale-[1.1] transition">
      <div className="md:group-hover:opacity-100">
        {/* Screenshot Image */}
        {screenshot?.url && (
          <div className="relative w-full h-48 bg-[#0d0e12] overflow-hidden group">
            <Image
              src={screenshot.url}
              alt={screenshot.alt || project.title}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
          </div>
        )}

        <div className="p-4">
          <h3 className="text-[20px]">{project.title}</h3>
          <p className="mt-2 text-[12px] text-[#777778]">{project.projectDescription}</p>

          <ul className="flex flex-wrap text-[9px] gap-2 mt-3 ">
            {project.stacks?.map((stackObj, id) => (
              <li key={stackObj.id ?? id} className="  text-[#aaaaaa] ">
                <div className="flex items-center">
                  <GoDotFill className="text-[#edd86e8c]" />
                  {stackObj.stack}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex justify-between items-center ">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <Link
                  className="text-[12px] md:text-[9px] px-2 text-[#edd86e8c] border border-[#edd86e8c]  flex items-center gap-1 hover:text-[#777778] group "
                  href={project.liveUrl || '#'}
                  target="_blank"
                >
                  <FaExternalLinkAlt className=" text-[12px] md:text-[8px]" />
                  <span className=" text-[14px] ">Live</span>
                </Link>
              )}

              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  className="text-[12px] md:text-[9px] px-2 text-[#edd86e8c] border border-[#edd86e8c]  hover:text-[#777778] flex gap-1 items-center group"
                  target="_blank"
                >
                  <FaGitAlt className=" text-[12px] md:text-[8px]" />
                  <span className=" text-[14px]">Code</span>
                </Link>
              )}
            </div>
            {/* <Link
              href={`lab/${project.slug || '#'}`}
              className=" items-center text-[12px] md:text-[9px] text-[#777778] hover:text-[#fff] hover:border-[#fff] border-b-[1px] border-[#777778]  py-[2px] transition-all "
            >
              <span> Learn more...</span>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
