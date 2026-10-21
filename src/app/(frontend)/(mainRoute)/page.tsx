import React from 'react'
import Main from '../views/Main'
import { SITE_URL } from '../lib/seo'

export const dynamic = 'force-dynamic'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Clinton James',
  url: SITE_URL,
  image: `${SITE_URL}/clinton.png`,
  jobTitle: 'AI Engineer',
  description:
    'AI Engineer with 9+ years shipping production systems. Builds and deploys AI agents, LLM applications, and ML pipelines that sit between product and revenue.',
  sameAs: [
    'https://github.com/Clintjeez',
    'https://www.linkedin.com/in/clinton-james-dev/',
    'https://twitter.com/ClintJeezz',
    'https://medium.com/@clintjeez',
  ],
  knowsAbout: [
    'AI Engineering',
    'Large Language Models',
    'AI Agents',
    'Retrieval-Augmented Generation',
    'Machine Learning',
    'Forward Deployed Engineering',
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
