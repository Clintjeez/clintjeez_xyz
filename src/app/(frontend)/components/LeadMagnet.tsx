import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'
import { FiDownload } from 'react-icons/fi'

const LeadMagnet = () => {
  return (
    <div className="relative mb-14">
      {/* Left rope — extends off-screen */}
      <div
        className="absolute w-[2px] bg-[#444] z-0"
        style={{
          top: -200,
          bottom: '50%',
          left: 40,
        }}
      />

      {/* Right rope — extends off-screen */}
      <div
        className="absolute w-[2px] bg-[#444] z-0"
        style={{
          top: -200,
          bottom: '50%',
          right: 50,
        }}
      />

      {/* Billboard card */}
      <section
        className="relative overflow-hidden rounded-xl border border-[#2a2a2e] bg-[#1b1c21] p-6 shadow-xl shadow-[#00000040]"
        style={{
          transform: 'rotate(1.8deg)',
          transformOrigin: 'top center',
        }}
      >
        {/* Subtle accent glow */}
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#edd86e] opacity-[0.04] blur-3xl" />

        <div className="flex flex-col sm:flex-row gap-5 items-start">
          {/* Book visual */}
          <div className="relative shrink-0 w-[90px] h-[110px] rounded-md bg-[#edd86e] flex items-center justify-center shadow-lg shadow-[#edd86e10]">
            <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-[#00000020]" />
            <div className="text-center z-0 px-2">
              <FiDownload className="mx-auto text-[#1b1c21] text-[18px] mb-1" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#1b1c21] leading-tight block">
                Free Playbook
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-[10px] uppercase tracking-widest text-[#edd86e] font-semibold mb-2">
              Free Resource
            </p>
            <h3 className="text-[#e0e0e0] text-[15px] md:text-[16px] font-bold leading-snug mb-2">
              The Growth &amp; GTM Playbook for SaaS
            </h3>
            <p className="text-[12px] text-[#777778] leading-relaxed mb-4">
              A tactical guide to building acquisition, activation, and retention systems that
              scale — from outbound infrastructure to AI-powered automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-md px-3 py-2 text-[12px] text-[#ddd] outline-none border border-[#2a2a2e] bg-[#17181d] placeholder-[#555] focus:border-[#edd86e] transition-colors duration-300"
              />
              <button className="group flex items-center justify-center gap-2 border border-[#edd86e] bg-[#17181d] hover:bg-[#484848] text-[#bfbfbf] text-[12px] font-bold px-5 py-2 rounded-md transition-all duration-300">
                <span>Get the Playbook</span>
                <HiArrowLongRight className="text-[14px] text-[#edd86e] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LeadMagnet
