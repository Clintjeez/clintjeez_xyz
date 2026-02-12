import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/offers', label: 'Offers' },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

const Navbar = () => {
  const pathname = usePathname()

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <nav className="px-8 py-6 flex items-center justify-between text-[12px] md:text-[14px] border-b border-[#2a2a2e]">
      <Link
        href="/"
        className={`font-medium tracking-wide transition-colors duration-300 hover:text-[#edd86e] ${
          isActive('/') ? 'text-[#edd86e]' : 'text-[#bfbfbf]'
        }`}
      >
        ClintJeez.
      </Link>
      <div className="flex items-center gap-3 md:gap-6">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`tracking-wide transition-all duration-300 border-b hover:text-[#edd86e] hover:border-[#edd86e] ${
              isActive(href) ? 'text-[#edd86e] border-[#edd86e]' : 'text-[#c4c4c4] border-transparent'
            }`}
          >
            {label}.
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
