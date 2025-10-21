import React from 'react'
import type { Project } from '../../../payload-types'
import { FaExternalLinkAlt, FaGitAlt } from 'react-icons/fa'
import Link from 'next/link'

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-[#1b1c21]  p-8  md:hover:scale-[1.1] transition">
      <div className="md:group-hover:opacity-100">
        <div>
          <h3 className="text-[20px]">{project.title}</h3>
          <p className="mt-7 text-[12px] text-[#777778]">{project.projectDescription}</p>
        </div>
        <ul className="flex flex-wrap text-[9px] gap-2 mt-3 ">
          {project.stacks?.map((stackObj, id) => (
            <li
              key={stackObj.id ?? id}
              className="px-2 py-1 text-[#edd86e8c] border border-[#edd86e8c] rounded-md"
            >
              {stackObj.stack}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <Link
                className="text-[12px] md:text-[9px] flex items-center gap-1 hover:text-[#fff] group"
                href={project.liveUrl || '#'}
              >
                <FaExternalLinkAlt className="text-[#bfbfbf] text-[12px] md:text-[8px]" />
                <span className="text-[#777778] text-[12px] md:text-[9px] group-hover:text-[#fff] ">
                  Live
                </span>
              </Link>
            )}

            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                className="text-[12px] md:text-[9px] flex gap-1 items-center group"
              >
                <FaGitAlt className="text-[#bfbfbf] text-[10px]" />
                <span className="text-[#777778] text-[12px] md:text-[9px] group-hover:text-[#fff]">
                  Code
                </span>
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
  )
}

export default ProjectCard
