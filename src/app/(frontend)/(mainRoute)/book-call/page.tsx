import type { Metadata } from 'next'
import BookCallClient from './BookCallClient'
import { SITE_URL } from '../../lib/seo'

export const metadata: Metadata = {
  title: 'Book a Call',
  description:
    'Schedule a free 15-minute consultation with Clinton James to discuss growth engineering, GTM strategy, and SaaS automation for your business.',
  alternates: {
    canonical: `${SITE_URL}/book-call`,
  },
  openGraph: {
    title: 'Book a Call with Clinton James',
    description:
      'Schedule a free 15-minute consultation to discuss growth engineering and GTM strategy for your SaaS business.',
    url: `${SITE_URL}/book-call`,
  },
}

export default function BookCallPage() {
  return <BookCallClient />
}
