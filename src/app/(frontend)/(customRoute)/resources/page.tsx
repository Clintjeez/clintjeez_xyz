import type { Metadata } from 'next'
import { SITE_URL } from '../../lib/seo'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Free frameworks, templates, and tools for SaaS founders engineering growth — from activation audits to cold email infrastructure checklists.',
  alternates: {
    canonical: `${SITE_URL}/resources`,
  },
  openGraph: {
    title: 'Resources | Clinton James',
    description:
      'Free frameworks, templates, and tools for SaaS founders engineering growth.',
    url: `${SITE_URL}/resources`,
  },
}

const Resources = () => {
  return (
    <section className="px-8 pt-8 pb-28">
      <div className="mb-20 text-[#777778] flex justify-end">
        <h3 className="text-[18px] md:w-[850px] text-right md:text-[25px] font-light">
          Frameworks, templates, and tools for founders engineering growth systematically. New
          resources drop regularly — check back soon.
        </h3>
      </div>
      <div className="text-[#777778] text-[14px] md:text-[16px]">
        Nothing published here yet. In the meantime, browse the{' '}
        <a href="/writings" className="text-[#edd86e8c] hover:text-[#edd86e] underline">
          writings
        </a>{' '}
        for frameworks you can use today.
      </div>
    </section>
  )
}

export default Resources
