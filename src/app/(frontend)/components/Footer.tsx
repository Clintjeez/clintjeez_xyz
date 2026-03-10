import React from 'react'
import Link from 'next/link'
import { FaGithubSquare, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { HiArrowLongRight } from 'react-icons/hi2'

const Footer = () => {
  return (
    <footer className="mt-20 pb-4">
      {/* Morse-code style divider */}
      <div className="flex items-center gap-1.5 mb-10">
        <span className="h-px w-8 bg-[#edd86e]" />
        <span className="h-1 w-1 rounded-full bg-[#edd86e]" />
        <span className="h-px w-14 bg-[#edd86e]" />
        <span className="h-px w-14 bg-[#edd86e]" />
        <span className="h-1 w-1 rounded-full bg-[#edd86e]" />
        <span className="h-px flex-1 bg-[#2a2a2e]" />
      </div>

      {/* Closing statement + CTA */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <p className="text-[#777778] text-[13px] leading-relaxed md:max-w-md">
          Building the bridge between product and revenue.
          <br />
          <span className="text-[#bfbfbf]">
            Let&apos;s turn your growth into a system.
          </span>
        </p>

        <Link
          href="/book-call"
          className="inline-flex items-center gap-3 border border-[#edd86e] bg-[#17181d] hover:bg-[#484848] text-[#bfbfbf] text-[12px] font-bold px-4 py-2 rounded-md transition-all duration-300 shrink-0"
        >
          <span>Start a conversation</span>
          <HiArrowLongRight className="text-[#edd86e] text-[16px]" />
        </Link>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-4 text-[16px] text-[#555] mb-6">
        <Link
          href="https://github.com/Clintjeez"
          target="_blank"
          className="hover:text-[#bfbfbf] transition-colors duration-200"
        >
          <FaGithubSquare />
        </Link>
        <Link
          href="https://www.linkedin.com/in/clinton-james-9ba608b0/"
          target="_blank"
          className="hover:text-[#bfbfbf] transition-colors duration-200"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://twitter.com/ClintJeezz"
          target="_blank"
          className="hover:text-[#bfbfbf] transition-colors duration-200"
        >
          <FaSquareXTwitter />
        </Link>
        <Link
          href="https://medium.com/@clintjeez"
          target="_blank"
          className="hover:text-[#bfbfbf] transition-colors duration-200"
        >
          <FaMedium />
        </Link>
        <Link
          href="mailto:hello@clintjeez.me"
          className="hover:text-[#bfbfbf] transition-colors duration-200"
        >
          <FaEnvelope />
        </Link>
      </div>

      {/* Copyright strip */}
      <div className="flex items-center justify-between border-t border-[#1f2025] pt-5">
        <p className="text-[10px] text-[#444] tracking-wider uppercase">
          &copy; {new Date().getFullYear()} Clinton James
        </p>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
          <span className="text-[10px] text-[#555] tracking-wide">
            Available for projects
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
