import React, { useState } from 'react'
import clintPhoto from '../../../../public/clinton.png'

import Image from 'next/image'
import FallingWordsCanvas from './FallingWordsCanvas'

const ProfileCard = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true })
  }

  const handleMouseLeave = () => {
    setCursor((prev) => ({ ...prev, visible: false }))
  }

  return (
    <div
      className="w-full h-[170px] glassmorphism-bg md:flex gap-5 hidden relative cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {cursor.visible && (
        <span
          className="pointer-events-none absolute z-50 rounded-full bg-[#edd86e] px-3 py-1 text-[11px] font-bold text-black whitespace-nowrap transition-opacity duration-200"
          style={{
            left: cursor.x + 12,
            top: cursor.y - 28,
          }}
        >
          click me
        </span>
      )}
      <Image src={clintPhoto} alt="clinton" className="w-[30%] shadow-xl" />
      <div></div>
      <div id="interactive__text">
        <FallingWordsCanvas />
      </div>
    </div>
  )
}

export default ProfileCard
