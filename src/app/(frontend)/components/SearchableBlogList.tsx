'use client'
import React, { useState } from 'react'
import BlogCard from './BlogCard'
import SearchBar from './SearchBar'

export default function SearchableBlogList({ posts }: { posts: any[] }) {
  const [query, setQuery] = useState('')
  const filtered = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.postDescription.toLowerCase().includes(query.toLowerCase()),
  )
  return (
    <>
      <SearchBar onSearch={setQuery} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filtered.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}
