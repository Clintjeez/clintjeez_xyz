import React, { Suspense } from 'react'
import LeadMagnet from '../components/LeadMagnet'
import HarnessOverview from './HarnessOverview'
import WorkOverview from './WorkOverview'
import ActivityOverview from './ActivityOverview'
import BlogOverview from './BlogOverview'
import Footer from '../components/Footer'

const Main = () => {
  return (
    <div id="home" className="p-8">
      <Suspense fallback={null}>
        <ActivityOverview />
      </Suspense>
      <WorkOverview />
      <HarnessOverview />
      <BlogOverview />
      <Footer />
    </div>
  )
}

export default Main
