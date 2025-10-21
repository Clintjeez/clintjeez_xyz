import ProjectCard from '../../components/ProjectCard'
import { payloadData } from '@/app/lib/payload'

const Projects = async () => {
  const allProject = await (
    await payloadData()
  ).find({
    collection: 'projects',
    depth: 1,
  })
  return (
    <section className="px-8 pt-8 pb-28">
      <div className="mb-20 text-[#777778]">
        <h3 className="text-[18px] text-center md:text-right md:text-[25px] font-light md:pl-[460px]">
          Explore a curated collection of my latest work, experiments, and creative solutions
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {allProject.docs.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
