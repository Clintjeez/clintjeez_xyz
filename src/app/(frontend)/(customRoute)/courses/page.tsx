import React from 'react'
import type { Metadata } from 'next'
import { SITE_URL } from '../../lib/seo'

export const metadata: Metadata = {
  title: 'Courses',
  description:
    'Upcoming courses on growth engineering, GTM systems, and SaaS automation by Clinton James.',
  alternates: {
    canonical: `${SITE_URL}/courses`,
  },
}

const Courses = () => {
  return <div>courses</div>
}

export default Courses
