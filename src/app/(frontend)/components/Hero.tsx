'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import clintPhoto from '../../../../public/clinton.png'

import ProfileCard from './ProfileCard'
import Navbar from './Navbar'
import { HiOutlineEnvelope, HiOutlineCalendarDays } from 'react-icons/hi2'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const iconButton =
  'inline-flex items-center justify-center w-9 h-9 border border-[#2a2a2e] bg-[#17181d] hover:border-[#edd86e] hover:bg-[#484848] text-[#bfbfbf] hover:text-[#edd86e] rounded-md transition-all'

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX
    const y = e.clientY
    setCursorPosition({ x, y })
  }

  return (
    <main
      id="hero"
      onMouseMove={handleMouseMove}
      className={`md:w-[42%] lg:w-[42%] h-screen relative`}
      style={
        {
          '--cursor-x': cursorPosition.x + 'px',
          '--cursor-y': cursorPosition.y + 'px',
        } as React.CSSProperties
      }
    >
      <Navbar />
      <section className="p-6 h-[calc(100%-87px)] flex flex-col justify-between">
        <div className="text-left mt-10">
          <div className="flex justify-start mb-10 md:hidden">
            <Image src={clintPhoto} alt="clinton" className="w-[45%] shadow-xl rounded-xl" />
          </div>
          <h1 className="font-excalifont text-[#777778] text-left text-[15px] md:text-[22px]">
            Hey, I&apos;m{' '}
            <span className="font-bold text-[#bfbfbf] md:text-[24px]">Clinton James</span>. <br />
            AI &amp; Growth Systems Engineer
          </h1>
          <p className="text-[#777778] text-[14px] lg:text-[18px] font-normal text-left mt-4">
            I build and deploy AI systems at the intersection of product engineering and revenue
            growth. As a product generalist and systems thinker at my{' '}
            <a
              href="https://www.alubasalabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-excalifont font-bold text-[#edd86e] md:text-[24px] hover:underline hover:animate-wiggle motion-reduce:hover:animate-none"
            >
              Studio
            </a>
            , I combine technical innovation, user-centric design, and microeconomic principles to
            build and scale products that solve complex, high-value problems.
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-6">
            <a
              href="mailto:hey@clintjeez.com"
              className="inline-flex items-center gap-2 h-9 px-3 border border-[#edd86e] bg-[#17181d] hover:bg-[#484848] text-[#bfbfbf] text-[13px] md:text-[12px] font-excalifont font-normal rounded-md transition-all"
            >
              <HiOutlineEnvelope className="text-[#edd86e] text-[16px]" />
              <span>hey@clintjeez.com</span>
            </a>
            <Link
              href="/book-call"
              aria-label="Book a call"
              title="Book a call"
              className={iconButton}
            >
              <HiOutlineCalendarDays className="text-[17px]" />
            </Link>
            <a
              href="https://github.com/Clintjeez"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className={iconButton}
            >
              <FaGithub className="text-[16px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/clinton-james-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className={iconButton}
            >
              <FaLinkedin className="text-[16px]" />
            </a>
          </div>
        </div>
        <ProfileCard />
      </section>
      <div className="bg-wrapper">
        <div className="bg-tiles"></div>
      </div>
    </main>
  )
}

export default Hero
