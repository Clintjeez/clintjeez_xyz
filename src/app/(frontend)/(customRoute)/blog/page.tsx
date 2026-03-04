import React from 'react'
import type { Metadata } from 'next'
import { payloadData } from '@/app/lib/payload'
import SearchableBlogList from '../../components/SearchableBlogList'
import { SITE_URL } from '../../lib/seo'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Thoughts, guides, and experiences on growth engineering, GTM strategy, SaaS automation, and building technical infrastructure between product and revenue.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'Blog | Clinton James',
    description:
      'Thoughts and guides on growth engineering, GTM strategy, and SaaS automation.',
    url: `${SITE_URL}/blog`,
  },
}

const Blog = async () => {
  const allPost = await (
    await payloadData()
  ).find({
    collection: 'posts',
    depth: 1,
  })

  return (
    <section className="px-8 pt-8 pb-28">
      <div className="mb-20 text-[#777778] flex justify-end">
        <h3 className="text-[18px] md:w-[850px] text-center md:text-right md:text-[25px] font-light ">
          &ndash; a collection of my thoughts, guides, and experiences that I find worth sharing.
          Here, you&apos;ll find practical advice, personal reflections, and explorations of ideas
          that shape my approach to building and problem-solving.
        </h3>
      </div>
      <SearchableBlogList posts={allPost.docs} />
    </section>
  )
}
export default Blog
