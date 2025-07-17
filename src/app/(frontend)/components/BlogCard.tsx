'use client'
import React from 'react'
import Link from 'next/link'
import { FaTags } from 'react-icons/fa'

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
    <Link href={`/blog/${post.slug}`} className="w-full md:hover:scale-[1.1] transition">
      <div className="bg-[#1b1c21] md:min-h-[250px] h-auto p-8 md:group-hover:opacity-100 rounded-md">
        <h3 className="text-[20px]">{post.title}</h3>
        <p className="text-[#777778] text-[12px] font-light my-4">{post.postDescription}</p>
        <div className="flex justify-end mt-10 gap-8">
          {post.tags && post.tags.length > 0 && (
            <div className="flex justify-end items-center gap-3">
              <FaTags className="text-[#bfbfbf] text-[11px]" />
              <ul className="text-[#777778] text-[10px] flex gap-2">
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
