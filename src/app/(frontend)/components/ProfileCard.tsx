import React from 'react'
import clintPhoto from '../../../../public/clinton.png'

import Image from 'next/image'
// import clintPhoto from '/clinton.png'
import FallingWordsCanvas from './FallingWordsCanvas.tsx'
const ProfileCard = () => {
  return (
    <div className="w-full h-[170px] glassmorphism-bg md:flex gap-5 hidden">
      <Image src={clintPhoto} alt="clinton" className="w-[30%] shadow-xl" />
      <div></div>
      <div id="interactive__text">
        <FallingWordsCanvas />
      </div>
    </div>
  )
}

export default ProfileCard
