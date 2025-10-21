'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import clintPhoto from '../../../../public/clinton.png'

import {
  FaGithubSquare,
  FaLinkedin,
  FaMedium,
  FaEnvelope,
  FaTelegram,
  FaRegCalendarCheck,
} from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import ProfileCard from './ProfileCard'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation'
import { HiArrowLongRight } from 'react-icons/hi2'

const Hero = () => {
  const pathname = usePathname()
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX
    const y = e.clientY
    setCursorPosition({ x, y })
  }

  type CursorStyle = {
    '--cursor-x': string
    '--cursor-y': string
  }

  const cursorAnim: CursorStyle = {
    '--cursor-x': `${cursorPosition.x}px`,
    '--cursor-y': `${cursorPosition.y}px`,
  }

  return (
    <main
      id="hero"
      onMouseMove={handleMouseMove}
      className={`md:w-[50%] lg:w-[50%] h-screen relative`}
      style={
        {
          '--cursor-x': cursorPosition.x + 'px',
          '--cursor-y': cursorPosition.y + 'px',
        } as React.CSSProperties
      }
    >
      <Navbar />
      <section className="p-8 h-[calc(100%-87px)] flex flex-col justify-between">
        <div className="text-center md:text-left mt-10">
          <div className="flex justify-start mb-10 md:hidden">
            <Image src={clintPhoto} alt="clinton" className="w-[45%] shadow-xl rounded-xl" />
          </div>
          <h1 className="text-[#777778] text-left text-[18px] md:text-[20px]">
            Hi! I&apos;m <span className="font-bold text-[#bfbfbf]">Clinton James 👋🏽</span>
          </h1>
          <p className="text-[#777778] text-[16px] lg:text-[23px] text-left mt-5">
            <span className="text-[#bfbfbf]">software engineer</span> building digital products and
            collaborating with teams to solve complex problems while exploring{' '}
            <span className="text-[#bfbfbf] underline italic">Blockchain</span>,{' '}
            <span className="text-[#bfbfbf] underline italic">Web3</span>,{' '}
            <span className="text-[#bfbfbf] underline italic">AI</span> and{' '}
            <span className="text-[#bfbfbf] underline italic">Automations</span> to create unique
            and empathic product experience.
          </p>
          {/* <!-- social --> */}
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-4 mt-8 text-[20px] text-[#c4c4c4]">
            <div className="flex gap-6">
              <Link href="https://github.com/Clintjeez" target="_blank">
                <FaGithubSquare />
              </Link>
              <Link href="https://www.linkedin.com/in/clinton-james-9ba608b0/" target="_blank">
                <FaLinkedin />
              </Link>
              <Link href="https://twitter.com/ClintJeezz" target="_blank">
                <FaSquareXTwitter />
              </Link>
              <Link href="https://medium.com/@clintjeez" target="_blank">
                <FaMedium />
              </Link>
              <Link href="mailto:clintjeez@gmail.com">
                <FaEnvelope />
              </Link>
            </div>

            <Link
              target="_blank"
              href="https://cal.com/clintonjames/15min"
              className="flex justify-between md:gap-8 items-center border border-[#edd86e] bg-[#17181d] hover:bg-[#484848] text-[#bfbfbf] text-[17px] md:text-[13px] font-bold px-3 py-1 rounded-md transition-all"
            >
              <span>Book a call</span>
              <HiArrowLongRight className=" text-[#edd86e]" />
            </Link>
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
