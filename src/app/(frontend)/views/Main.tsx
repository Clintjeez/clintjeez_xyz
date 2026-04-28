import React from 'react'
import LeadMagnet from '../components/LeadMagnet'
import OffersOverview from './OffersOverview'
import WorkOverview from './WorkOverview'
import BlogOverview from './BlogOverview'
import Footer from '../components/Footer'

const Main = () => {
  return (
    <div id="home" className="p-8">
      <OffersOverview />
      <WorkOverview />
      <BlogOverview />
      <Footer />
    </div>
  )
}

export default Main
