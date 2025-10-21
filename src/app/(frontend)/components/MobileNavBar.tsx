import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { IoCloseOutline } from 'react-icons/io5'

const MobileNavBar = () => {
  const pathname = usePathname()
  const [openNav, setOpenNav] = useState(false)
  return (
    <div className="block md:hidden">
      {openNav && (
        <div className="absolute w-[50%] right-[30px] top-[57px] border glassmorphism-bg transition duration-700 ease-in-out ">
          <nav className="flex flex-col items-end gap-5 p-5">
            <Link href="projects" className={pathname === '/projects' ? 'text-[#edd86e]' : ''}>
              Projects
            </Link>

            <Link href="blog" className={pathname === '/blog' ? 'text-[#edd86e]' : ''}>
              Blog
            </Link>
          </nav>
          <div
            className="w-[40px] p-1 text-[20px] border border-[#ffffff59] rounded-[10px]"
            onClick={() => setOpenNav(false)}
          >
            <IoCloseOutline />
          </div>
        </div>
      )}
      <button onClick={() => setOpenNav(!openNav)}>
        <HiBars3BottomRight className="text-[25px]" />
      </button>
    </div>
  )
}

export default MobileNavBar
