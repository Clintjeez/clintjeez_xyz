'use client'

import React from 'react'
import Link from 'next/link'
import { HiArrowLongRight } from 'react-icons/hi2'
import posthog from 'posthog-js'

const ConsultationCta = () => {
  return (
    <section className="relative rounded-xl border border-[#2a2a2e] bg-[#1b1c21] p-6 md:p-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[#222326]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/tile_bg.svg')",
            backgroundPosition: '50% 0',
            backgroundRepeat: 'repeat',
            backgroundSize: '142px 71px',
          }}
        />
      </div>
      <p className="relative text-[10px] uppercase tracking-widest text-[#edd86e] font-semibold mb-2">
        Free 48-Hour Sprint
      </p>
      <h3 className="relative text-[#e0e0e0] text-[16px] md:text-[20px] font-bold leading-snug mb-3">
        Get your first sprint free. No strings attached.
      </h3>
      <p className="relative text-[13px] text-[#777778] leading-relaxed mb-6 md:pr-10">
        I&apos;m running a limited cohort of free 48-hour sprints for early-stage SaaS founders.
        One bottleneck diagnosed. One fix built and deployed. All I ask for is a short video
        testimonial if it works.
      </p>
      <Link
        href="/book-call"
        onClick={() => posthog.capture('book_call_cta_clicked', { source: 'consultation_cta' })}
        className="relative inline-flex items-center gap-3 border border-[#edd86e] bg-[#17181d] hover:bg-[#484848] text-[#bfbfbf] text-[13px] font-bold px-5 py-2 rounded-md transition-all duration-300"
      >
        <span>Apply for a free sprint</span>
        <HiArrowLongRight className="text-[#edd86e] text-[16px]" />
      </Link>
    </section>
  )
}

export default ConsultationCta
