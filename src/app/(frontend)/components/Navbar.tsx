'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { id: 'works', label: 'Works' },
  { id: 'harness', label: 'Harness' },
  { id: 'writings', label: 'Writings' },
]

const SCROLL_OFFSET = 32 // breathing room above a section heading
const SCROLL_DURATION = 800
const ACTIVE_LINE = 0.35 // a section becomes active once its top passes 35% of the view

type Scroller = HTMLElement | Window

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

// The right pane scrolls on desktop; on mobile the whole window does
const getScroller = (): Scroller => {
  const pane = document.getElementById('home')?.parentElement
  if (
    pane &&
    getComputedStyle(pane).overflowY !== 'visible' &&
    pane.scrollHeight > pane.clientHeight
  ) {
    return pane
  }
  return window
}

const metrics = (s: Scroller) =>
  s instanceof Window
    ? {
        top: s.scrollY,
        viewTop: 0,
        viewHeight: s.innerHeight,
        maxTop: document.documentElement.scrollHeight - s.innerHeight,
      }
    : {
        top: s.scrollTop,
        viewTop: s.getBoundingClientRect().top,
        viewHeight: s.clientHeight,
        maxTop: s.scrollHeight - s.clientHeight,
      }

const Navbar = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [activeId, setActiveId] = useState<string | null>(null)
  const isAnimating = useRef(false)
  const animationFrame = useRef(0)

  // Highlight the section currently in view on the home page
  useEffect(() => {
    if (!isHome) return
    const scroller = getScroller()
    let frame = 0

    const update = () => {
      frame = 0
      if (isAnimating.current) return
      const { top, viewTop, viewHeight, maxTop } = metrics(scroller)
      if (top >= maxTop - 2) {
        setActiveId(navItems[navItems.length - 1].id)
        return
      }
      const line = viewTop + viewHeight * ACTIVE_LINE
      let current: string | null = null
      for (const { id } of navItems) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActiveId(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    scroller.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      scroller.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [isHome])

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    if (!isHome) return
    const target = id === 'home' ? null : document.getElementById(id)
    if (id !== 'home' && !target) return
    e.preventDefault()

    const scroller = getScroller()
    const { top: start, viewTop, maxTop } = metrics(scroller)
    const end = target
      ? Math.min(
          maxTop,
          Math.max(0, start + target.getBoundingClientRect().top - viewTop - SCROLL_OFFSET),
        )
      : 0

    window.history.replaceState(null, '', target ? `#${id}` : '/')
    setActiveId(target ? id : null)
    cancelAnimationFrame(animationFrame.current)

    const finish = () => {
      isAnimating.current = false
      window.removeEventListener('wheel', finish)
      window.removeEventListener('touchstart', finish)
      cancelAnimationFrame(animationFrame.current)
      scroller.dispatchEvent(new Event('scroll'))
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      scroller.scrollTo({ top: end, behavior: 'instant' })
      return
    }

    // Hand control back if the visitor scrolls mid-animation
    isAnimating.current = true
    window.addEventListener('wheel', finish, { passive: true, once: true })
    window.addEventListener('touchstart', finish, { passive: true, once: true })

    const startTime = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / SCROLL_DURATION, 1)
      scroller.scrollTo({
        top: start + (end - start) * easeInOutCubic(progress),
        behavior: 'instant',
      })
      if (progress < 1) animationFrame.current = requestAnimationFrame(step)
      else finish()
    }
    animationFrame.current = requestAnimationFrame(step)
  }

  return (
    <nav className="px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-[11px] md:text-[13px] border-b border-[#2a2a2e]">
      <Link
        href="/"
        onClick={scrollTo('home')}
        className={`font-semibold tracking-widest uppercase text-[12px] md:text-[14px] transition-colors duration-300 ease-out hover:text-[#edd86e] ${
          isHome && activeId === null ? 'text-[#edd86e]' : 'text-[#bfbfbf]'
        }`}
      >
        ClintJeez.
      </Link>
      <div className="flex items-center gap-4 md:gap-7">
        {navItems.map(({ id, label }) => {
          const isActive = isHome
            ? activeId === id
            : id === 'writings' && pathname.startsWith('/writings')
          return (
            <Link
              key={id}
              href={`/#${id}`}
              onClick={scrollTo(id)}
              className={`tracking-wide transition-colors duration-300 ease-out hover:text-[#edd86e] ${
                isActive ? 'text-[#edd86e]' : 'text-[#c4c4c4]'
              }`}
            >
              {label}.
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
