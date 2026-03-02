import React from 'react'
import LeadMagnet from '../components/LeadMagnet'
import OffersOverview from './OffersOverview'
import WorkOverview from './WorkOverview'
import BlogOverview from './BlogOverview'

const Main = () => {
  return (
    <div id="home" className="p-8">
      <LeadMagnet />
      <OffersOverview />
      <WorkOverview />
      <BlogOverview />
    </div>
  )
}

export default Main
