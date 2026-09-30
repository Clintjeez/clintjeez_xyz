'use client'
import React from 'react'
import Link from 'next/link'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'
import posthog from 'posthog-js'

type PaginationProps = {
  currentPage: number
  totalPages: number
  basePath?: string
}

function getPageNumbers(currentPage: number, totalPages: number): (number | 'ellipsis')[] {
  const pages: (number | 'ellipsis')[] = []
  const windowSize = 1

  const addPage = (p: number) => {
    if (p >= 1 && p <= totalPages) pages.push(p)
  }

  addPage(1)
  if (currentPage - windowSize > 2) pages.push('ellipsis')
  for (let p = currentPage - windowSize; p <= currentPage + windowSize; p++) {
    if (p > 1 && p < totalPages) addPage(p)
  }
  if (currentPage + windowSize < totalPages - 1) pages.push('ellipsis')
  if (totalPages > 1) addPage(totalPages)

  return pages
}

export default function Pagination({ currentPage, totalPages, basePath = '/writings' }: PaginationProps) {
  if (totalPages <= 1) return null

  const hrefFor = (page: number) => (page <= 1 ? basePath : `${basePath}?page=${page}`)

  const track = (page: number) =>
    posthog.capture('blog_pagination_clicked', { page, from_page: currentPage })

  const pageNumbers = getPageNumbers(currentPage, totalPages)

  return (
    <nav aria-label="Writings pagination" className="mt-16 flex items-center justify-center gap-2">
      <Link
        href={hrefFor(currentPage - 1)}
        onClick={() => track(currentPage - 1)}
        aria-disabled={currentPage <= 1}
        className={`flex items-center gap-2 px-3 py-2 rounded-md text-[13px] transition ${
          currentPage <= 1
            ? 'pointer-events-none text-[#777778] opacity-40'
            : 'text-[#bfbfbf] hover:text-[#fff] hover:bg-[#1b1c21]'
        }`}
      >
        <HiArrowLongLeft className="text-[16px]" />
        <span className="hidden sm:inline">Prev</span>
      </Link>

      <ul className="flex items-center gap-1">
        {pageNumbers.map((p, idx) =>
          p === 'ellipsis' ? (
            <li key={`ellipsis-${idx}`} className="px-2 text-[#777778] text-[13px] select-none">
              …
            </li>
          ) : (
            <li key={p}>
              <Link
                href={hrefFor(p)}
                onClick={() => track(p)}
                aria-current={p === currentPage ? 'page' : undefined}
                className={`flex items-center justify-center w-9 h-9 rounded-md text-[13px] transition border ${
                  p === currentPage
                    ? 'border-[#edd86e] text-[#edd86e]'
                    : 'border-transparent text-[#bfbfbf] hover:text-[#fff] hover:bg-[#1b1c21]'
                }`}
              >
                {p}
              </Link>
            </li>
          ),
        )}
      </ul>

      <Link
        href={hrefFor(currentPage + 1)}
        onClick={() => track(currentPage + 1)}
        aria-disabled={currentPage >= totalPages}
        className={`flex items-center gap-2 px-3 py-2 rounded-md text-[13px] transition ${
          currentPage >= totalPages
            ? 'pointer-events-none text-[#777778] opacity-40'
            : 'text-[#bfbfbf] hover:text-[#fff] hover:bg-[#1b1c21]'
        }`}
      >
        <span className="hidden sm:inline">Next</span>
        <HiArrowLongRight className="text-[16px]" />
      </Link>
    </nav>
  )
}
