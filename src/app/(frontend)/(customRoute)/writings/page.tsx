import React from 'react'
import type { Metadata } from 'next'
import { payloadData } from '@/app/lib/payload'
import SearchableBlogList from '../../components/SearchableBlogList'
import Pagination from '../../components/Pagination'
import { SITE_URL } from '../../lib/seo'

export const dynamic = 'force-dynamic'

const POSTS_PER_PAGE = 9

interface PageProps {
  searchParams: Promise<{ page?: string }>
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { page } = await searchParams
  const currentPage = Math.max(1, Number(page) || 1)
  const canonical =
    currentPage > 1 ? `${SITE_URL}/writings?page=${currentPage}` : `${SITE_URL}/writings`

  return {
    title: 'Writings',
    description:
      'Thoughts, guides, and experiences on growth engineering, GTM strategy, SaaS automation, and building technical infrastructure between product and revenue.',
    alternates: {
      canonical,
    },
    openGraph: {
      title: 'Writings | Clinton James',
      description: 'Thoughts and guides on growth engineering, GTM strategy, and SaaS automation.',
      url: canonical,
    },
  }
}

const Blog = async ({ searchParams }: PageProps) => {
  const { page } = await searchParams
  const currentPage = Math.max(1, Number(page) || 1)

  const allPost = await (
    await payloadData()
  ).find({
    collection: 'posts',
    depth: 1,
    draft: false,
    where: { _status: { equals: 'published' } },
    sort: '-publishedDate',
    limit: POSTS_PER_PAGE,
    page: currentPage,
  })

  return (
    <section className="px-8 pt-8 pb-28">
      <div className="mb-20 text-[#777778] flex justify-end">
        <h3 className="text-[18px] md:w-[850px] text-right md:text-[25px] font-light ">
          a collection of my thoughts, guides, and experiences that I find worth sharing. Here,
          you&apos;ll find practical advice, personal reflections, and explorations of ideas that
          shape my approach to building and problem-solving.
        </h3>
      </div>
      <SearchableBlogList posts={allPost.docs} />
      <Pagination currentPage={allPost.page ?? 1} totalPages={allPost.totalPages ?? 1} />
    </section>
  )
}
export default Blog
