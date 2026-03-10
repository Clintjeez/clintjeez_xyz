'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useUnderConstruction } from './UnderConstruction'

const unavailableRoutes = ['/offers', '/work', '/about']

const navItems = [
  { href: '/offers', label: 'Offers' },
  // { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  // { href: '/about', label: 'About' },
]

const Navbar = () => {
  const pathname = usePathname()
  const { open } = useUnderConstruction()

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <nav className="px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-[11px] md:text-[13px] border-b border-[#2a2a2e]">
      <Link
        href="/"
        className={`font-semibold tracking-widest uppercase text-[12px] md:text-[14px] transition-colors duration-300 ease-out hover:text-[#edd86e] ${
          isActive('/') ? 'text-[#edd86e]' : 'text-[#bfbfbf]'
        }`}
      >
        ClintJeez.
      </Link>
      <div className="flex items-center gap-4 md:gap-7">
        {navItems.map(({ href, label }) =>
          unavailableRoutes.includes(href) ? (
            <button
              key={href}
              onClick={open}
              className="tracking-wide border-b pb-[2px] transition-all duration-300 ease-out hover:text-[#edd86e] hover:border-[#edd86e] cursor-pointer text-[#c4c4c4] border-transparent"
            >
              {label}.
            </button>
          ) : (
            <Link
              key={href}
              href={href}
              className={`tracking-wide border-b pb-[2px] transition-all duration-300 ease-out hover:text-[#edd86e] hover:border-[#edd86e] ${
                isActive(href)
                  ? 'text-[#edd86e] border-[#edd86e]'
                  : 'text-[#c4c4c4] border-transparent'
              }`}
            >
              {label}.
            </Link>
          ),
        )}
      </div>
    </nav>
  )
}

export default Navbar
