'use client'
import React, { useState } from 'react'

export default function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
  const [query, setQuery] = useState('')
  return (
    <input
      type="text"
      placeholder="Search blog posts..."
      value={query}
      onChange={(e) => {
        setQuery(e.target.value)
        onSearch(e.target.value)
      }}
      className="w-full mb-8 p-2 rounded border border-[#7777784d] bg-transparent text-[#fff]"
    />
  )
}
