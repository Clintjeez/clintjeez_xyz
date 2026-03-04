import React from 'react'
import Main from '../views/Main'
import { SITE_URL } from '../lib/seo'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Clinton James',
  url: SITE_URL,
  image: `${SITE_URL}/clinton.png`,
  jobTitle: 'Growth & GTM Engineer',
  description:
    'Growth & GTM Engineer with 9+ years of experience building technical infrastructure between product and revenue for SaaS founders.',
  sameAs: [
    'https://github.com/Clintjeez',
    'https://www.linkedin.com/in/clinton-james-dev/',
    'https://twitter.com/ClintJeezz',
    'https://medium.com/@clintjeez',
  ],
  knowsAbout: [
    'Growth Engineering',
    'Go-to-Market Strategy',
    'SEO Automation',
    'AEO',
    'Lead Generation',
    'Product-Led Growth',
    'Sales Automation',
    'Conversion Rate Optimization',
    'SaaS Development',
  ],
}

const Home = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Main />
    </>
  )
}

export default Home
