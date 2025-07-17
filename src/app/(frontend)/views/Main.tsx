import React from 'react'

import ResourceCta from '../components/ResourceCta'

import BlogOverview from './BlogOverview'
import ProjectsOverview from './ProjectsOverview'

const Main = () => {
  return (
    <div id="home" className="p-8">
      <ProjectsOverview />
      <BlogOverview />
      {/* <ResourceCta /> */}
    </div>
  )
}

export default Main
