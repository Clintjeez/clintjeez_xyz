'use client'

import Link from 'next/link'
import { HiArrowLongRight } from 'react-icons/hi2'
import posthog from 'posthog-js'

export const BlogViewMoreLink = () => {
  return (
    <Link
      href="/blog"
      onClick={() => posthog.capture('blog_view_more_clicked')}
      className="flex items-center gap-3 text-[#777778] hover:text-[#fff] text-[16px] underline"
    >
      <span>View more</span>
      <HiArrowLongRight className=" text-[20px]" />
    </Link>
  )
}
