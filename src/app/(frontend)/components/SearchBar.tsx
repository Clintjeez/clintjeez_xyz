'use client'
import React, { useRef, useState } from 'react'
import posthog from 'posthog-js'

export default function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
  const [query, setQuery] = useState('')
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  return (
    <input
      type="text"
      placeholder="Search blog posts..."
      value={query}
      onChange={(e) => {
        const value = e.target.value
        setQuery(value)
        onSearch(value)
        if (debounceRef.current) clearTimeout(debounceRef.current)
        if (value.length > 2) {
          debounceRef.current = setTimeout(() => {
            posthog.capture('blog_search_performed', { query: value })
          }, 800)
        }
      }}
      className="w-full mb-8 p-2 rounded border border-[#7777784d] bg-transparent text-[#fff]"
    />
  )
}
