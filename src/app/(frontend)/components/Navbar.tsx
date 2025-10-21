import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="p-8 flex gap-2 justify-between">
      <Link href="/" className={`text-[14px] ${pathname === '/' ? 'text-[#edd86e]' : ''}`}>
        ClintJeez.
      </Link>
      <div className="flex justify-between gap-4 md:gap-5 text-[14px]">
        <Link
          href="/projects"
          className={`hover:text-[#edd86e] ${pathname === '/projects' ? 'text-[#edd86e]' : ''}`}
        >
          Projects.
        </Link>
        <Link
          href="/blog"
          className={`hover:text-[#edd86e] ${pathname === '/blog' ? 'text-[#edd86e]' : ''}`}
        >
          Blog.
        </Link>
        {/* <Link href="/lab" className={`${pathname === '/lab' ? 'text-[#edd86e]' : ''}`}>
          Courses.
        </Link>

        <Link href="/resources" className={`${pathname === '/resources' ? 'text-[#edd86e]' : ''}`}>
          Resources.
        </Link> */}
      </div>
      {/* <MobileNavBar /> */}
    </nav>
  )
}

export default Navbar
