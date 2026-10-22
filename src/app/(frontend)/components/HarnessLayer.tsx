'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import { HiPlus, HiChevronDown } from 'react-icons/hi2'

const COLLAPSED_HEIGHT = 150 // preview height shown under the fade when closed

type HarnessLayerProps = {
  index: string
  name: string
  caption: string
  defaultOpen?: boolean
  children: React.ReactNode
}

const HarnessLayer = ({
  index,
  name,
  caption,
  defaultOpen = false,
  children,
}: HarnessLayerProps) => {
  const [open, setOpen] = useState(defaultOpen)
  const [fullHeight, setFullHeight] = useState<number | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const panelId = useId()

  // Track the content's natural height so the panel can animate to it
  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const measure = () => setFullHeight(el.scrollHeight)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const collapsible = fullHeight === null || fullHeight > COLLAPSED_HEIGHT + 24
  const isOpen = open || !collapsible
  const maxHeight = isOpen ? (fullHeight ?? undefined) : COLLAPSED_HEIGHT

  return (
    <div className="relative pl-5 border-l border-[#2a2a2e]">
      <span
        className={`absolute -left-[4px] top-[9px] w-[7px] h-[7px] rounded-full bg-[#edd86e] transition-shadow duration-500 ${
          isOpen ? 'shadow-[0_0_0_4px_rgba(237,216,110,0.15),0_0_14px_rgba(237,216,110,0.6)]' : ''
        }`}
      />

      <button
        type="button"
        onClick={() => collapsible && setOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={`group w-full flex items-center justify-between gap-4 mb-4 text-left ${
          collapsible ? 'cursor-pointer' : 'cursor-default'
        }`}
      >
        <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-[10px] uppercase tracking-widest text-[#edd86e] font-semibold">
            {index} · {name}
          </span>
          <span className="text-[10px] text-[#777778]">{caption}</span>
        </span>
        {collapsible && (
          <span
            className={`shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-500 ${
              isOpen
                ? 'border-[#edd86e] text-[#edd86e] bg-[#edd86e]/10'
                : 'border-[#2a2a2e] text-[#bfbfbf] group-hover:border-[#edd86e] group-hover:text-[#edd86e]'
            }`}
          >
            <HiPlus
              className={`text-[14px] transition-transform duration-500 motion-reduce:transition-none ${
                isOpen ? 'rotate-[135deg]' : 'rotate-0'
              }`}
            />
          </span>
        )}
      </button>

      <div
        id={panelId}
        className="relative overflow-hidden transition-[max-height] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none"
        style={{ maxHeight }}
      >
        <div ref={contentRef}>{children}</div>

        {collapsible && (
          <button
            type="button"
            tabIndex={isOpen ? -1 : 0}
            aria-hidden={isOpen}
            onClick={() => setOpen(true)}
            className={`absolute inset-x-0 bottom-0 h-28 flex items-end justify-center pb-1 bg-gradient-to-t from-[#17181d] via-[#17181d]/85 to-transparent transition-opacity duration-500 ${
              isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 cursor-pointer'
            }`}
          >
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#777778] hover:text-[#edd86e] transition-colors">
              Expand
              <HiChevronDown className="text-[12px] animate-bounce motion-reduce:animate-none" />
            </span>
          </button>
        )}
      </div>
    </div>
  )
}

export default HarnessLayer
