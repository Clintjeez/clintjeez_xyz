import React from 'react'
import BlogCard from '../components/BlogCard'
import { BlogViewMoreLink } from '../components/BlogViewMoreLink'
import { payloadData } from '../../lib/payload'

const BlogOverview = async () => {
  const postOverview = await (
    await payloadData()
  ).find({
    collection: 'posts',
    limit: 4,
    depth: 1,
  })

  return (
    <section className="my-20 md:my-10">
      <div className="mb-16 md:mb-10">
        <h1 className="mb-3 font-bold text-[16px]">Blog Overview</h1>
        <h2 className="text-[16px] md:text-[20px] md:pr-[50px] font-light text-[#777778]">
          Explore a collection of my thoughts, guides, and experiences that I find worth sharing.
        </h2>
      </div>
      <div className="flex flex-col gap-5 mt-8">
        {postOverview.docs.map((post) => (
          <BlogCard
            key={String(post.id)}
            post={{
              ...post,
              id: String(post.id),
              tags:
                post.tags
                  ?.filter((tag: any) => tag && tag.id != null)
                  .map((tag: any) => ({
                    ...tag,
                    id: tag.id ?? undefined,
                  })) ?? [],
            }}
          />
        ))}
      </div>
      <div className="flex justify-end pl-3 mt-10">
        <BlogViewMoreLink />
      </div>
    </section>
  )
}

export default BlogOverview
