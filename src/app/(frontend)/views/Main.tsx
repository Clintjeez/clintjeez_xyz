import React from 'react'
import BlogOverview from './BlogOverview'
import ProjectsOverview from './ProjectsOverview'

const Main = () => {
  return (
    <div id="home" className="p-8">
      <ProjectsOverview />
      <BlogOverview />
    </div>
  )
}

export default Main
