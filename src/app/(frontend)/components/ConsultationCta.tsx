import React from 'react'
import Link from 'next/link'
import { HiArrowLongRight } from 'react-icons/hi2'

const ConsultationCta = () => {
  return (
    <section className="rounded-xl border border-[#2a2a2e] bg-[#1b1c21] p-6 md:p-8">
      <p className="text-[10px] uppercase tracking-widest text-[#edd86e] font-semibold mb-2">
        Free Consultation
      </p>
      <h3 className="text-[#e0e0e0] text-[16px] md:text-[20px] font-bold leading-snug mb-3">
        Not sure where to start? Get a free growth audit.
      </h3>
      <p className="text-[13px] text-[#777778] leading-relaxed mb-6 md:pr-10">
        Book a 15-minute call and I&apos;ll walk through your current stack, identify the
        biggest bottleneck in your growth system, and give you a clear next step — no strings attached.
      </p>
      <Link
        target="_blank"
        href="https://cal.com/clintonjames/15min"
        className="inline-flex items-center gap-3 border border-[#edd86e] bg-[#17181d] hover:bg-[#484848] text-[#bfbfbf] text-[13px] font-bold px-5 py-2 rounded-md transition-all duration-300"
      >
        <span>Book a call</span>
        <HiArrowLongRight className="text-[#edd86e] text-[16px]" />
      </Link>
    </section>
  )
}

export default ConsultationCta
