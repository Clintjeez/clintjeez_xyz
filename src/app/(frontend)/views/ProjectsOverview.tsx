import React from 'react'
import ProjectCard from '../components/ProjectCard'
import Link from 'next/link'
import { HiArrowLongRight } from 'react-icons/hi2'
import { payloadData } from '../../lib/payload'

const ProjectsOverview = async () => {
  const labOverviewData = await (
    await payloadData()
  ).find({
    collection: 'projects',
    limit: 4,
    depth: 1,
  })

  return (
    <section className="mb-20">
      <div className="mb-16 md:mb-10">
        <h1 className="mb-3 font-bold text-[16px]">Projects Overview</h1>
        <h2 className="text-[16px] md:text-[20px] md:pr-[50px] font-light text-[#777778]">
          Explore a curated collection of my latest work, experiments, and creative solutions.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        {labOverviewData.docs.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-end pl-3 mt-10">
        <Link
          href="/projects"
          className="flex items-center gap-3 text-[#777778] hover:text-[#fff] text-[16px] underline"
        >
          <span>View more</span>
          <HiArrowLongRight className=" text-[20px]" />
        </Link>
      </div>
    </section>
  )
}

export default ProjectsOverview
