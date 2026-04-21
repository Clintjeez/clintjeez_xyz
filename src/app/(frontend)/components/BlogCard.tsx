'use client'
import React from 'react'
import Link from 'next/link'
import { FaTags } from 'react-icons/fa'
import posthog from 'posthog-js'

type BlogTag = { id?: string; tag: string }
type BlogPost = {
  id: string
  slug: string
  title: string
  postDescription: string
  tags: BlogTag[]
}

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      onClick={() =>
        posthog.capture('blog_post_clicked', { post_slug: post.slug, post_title: post.title })
      }
      className="block w-full md:hover:scale-[1.1] transition"
    >
      <div className="bg-[#1b1c21] md:min-h-[250px] h-auto p-5 sm:p-8 md:group-hover:opacity-100 rounded-md overflow-hidden">
        <h3 className="text-[16px] sm:text-[20px] break-words">{post.title}</h3>
        <p className="text-[#777778] text-[11px] sm:text-[12px] font-light my-4 break-words">
          {post.postDescription}
        </p>
        <div className="flex justify-end mt-6 sm:mt-10">
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
              <FaTags className="text-[#bfbfbf] text-[11px] shrink-0" />
              <ul className="text-[#777778] text-[10px] flex gap-2 flex-wrap">
                {post.tags.map((tagObj: { id?: string; tag: string }, id: number) => (
                  <li key={tagObj.id ?? id}>{tagObj.tag}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
