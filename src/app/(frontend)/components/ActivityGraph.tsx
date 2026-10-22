'use client'

import React, { useEffect, useRef, useState } from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'
import type { ContributionDay, GithubActivity } from '../lib/github'

const LEVEL_COLORS = [
  '#1f2025',
  'rgba(237, 216, 110, 0.22)',
  'rgba(237, 216, 110, 0.45)',
  'rgba(237, 216, 110, 0.7)',
  '#edd86e',
]

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })

const monthOf = (week: (ContributionDay | null)[]) => {
  const first = week.find(Boolean)
  return first
    ? new Date(`${first.date}T00:00:00Z`).toLocaleDateString('en-US', {
        month: 'short',
        timeZone: 'UTC',
      })
    : null
}

type Tooltip = { day: ContributionDay; x: number; y: number }

const ActivityGraph = ({
  activity,
  profileUrl,
}: {
  activity: GithubActivity
  profileUrl: string
}) => {
  const { weeks } = activity
  const rootRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [tooltip, setTooltip] = useState<Tooltip | null>(null)

  // Reveal the graph once it scrolls into view
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Drop the stagger delays once the reveal has played, so hovers respond instantly
  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => setRevealed(true), weeks.length * 14 + 600)
    return () => clearTimeout(timer)
  }, [visible, weeks.length])

  // On narrow screens the heatmap scrolls sideways; start at the most recent weeks
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollLeft = el.scrollWidth
  }, [])

  const showTooltip = (day: ContributionDay) => (e: React.MouseEvent<HTMLSpanElement>) => {
    const root = rootRef.current?.getBoundingClientRect()
    const cell = e.currentTarget.getBoundingClientRect()
    if (!root) return
    // Keep the centered tooltip (~180px wide) inside the section
    const x = Math.min(Math.max(cell.left - root.left + cell.width / 2, 95), root.width - 95)
    setTooltip({ day, x, y: cell.top - root.top })
  }

  return (
    <div ref={rootRef} className="relative">
      {/* Heatmap */}
      <div className="bg-[#1b1c21] rounded-lg p-4 mb-3">
        <div ref={scrollRef} className="overflow-x-auto pb-1">
          <div className="inline-flex flex-col gap-1.5 min-w-max">
            <div className="flex gap-[3px] h-3">
              {weeks.map((week, col) => {
                const month = monthOf(week)
                const show = month && (col === 0 || month !== monthOf(weeks[col - 1]))
                return (
                  <span key={col} className="relative w-[10px] text-[9px] text-[#777778]">
                    {show && col < weeks.length - 2 && (
                      <span className="absolute left-0 top-0 whitespace-nowrap">{month}</span>
                    )}
                  </span>
                )
              })}
            </div>
            <div className="flex gap-[3px]" onMouseLeave={() => setTooltip(null)}>
              {weeks.map((week, col) => (
                <div key={col} className="flex flex-col gap-[3px]">
                  {week.map((day, row) =>
                    day ? (
                      <span
                        key={row}
                        onMouseEnter={showTooltip(day)}
                        className={`block w-[10px] h-[10px] rounded-[2px] transition-[opacity,transform,box-shadow] duration-500 hover:scale-150 hover:shadow-[0_0_10px_rgba(237,216,110,0.7)] hover:relative hover:z-10 motion-reduce:transition-none ${
                          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                        }`}
                        style={{
                          backgroundColor: LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0],
                          transitionDelay:
                            visible && !revealed ? `${col * 14 + row * 10}ms` : '0ms',
                        }}
                      />
                    ) : (
                      <span key={row} className="block w-[10px] h-[10px]" />
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between gap-4">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[10px] text-[#777778] hover:text-[#edd86e] transition-colors"
        >
          View on GitHub
          <HiArrowUpRight className="text-[11px]" />
        </a>
        <div className="flex items-center gap-1.5 text-[9px] text-[#777778]">
          Less
          {LEVEL_COLORS.map((color) => (
            <span
              key={color}
              className="w-[10px] h-[10px] rounded-[2px]"
              style={{ backgroundColor: color }}
            />
          ))}
          More
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full -mt-2 whitespace-nowrap rounded-md border border-[#2a2a2e] bg-[#17181d] px-2.5 py-1.5 text-[10px] text-[#bfbfbf] shadow-[0_7px_20px_#000000aa]"
          style={{ left: tooltip.x, top: tooltip.y - 6 }}
        >
          <span className="text-[#edd86e] font-bold">
            {tooltip.day.count === 0
              ? 'No contributions'
              : `${tooltip.day.count} contribution${tooltip.day.count === 1 ? '' : 's'}`}
          </span>{' '}
          · {formatDate(tooltip.day.date)}
        </div>
      )}
    </div>
  )
}

export default ActivityGraph
