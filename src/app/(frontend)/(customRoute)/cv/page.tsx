import type { Metadata } from 'next'
import React from 'react'
import { HiArrowUpRight, HiOutlineEnvelope } from 'react-icons/hi2'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineGlobeAlt } from 'react-icons/hi2'
import CvDownloadButton from '../../components/CvDownloadButton'
import { SITE_URL } from '../../lib/seo'
import { cvCommunity, cvEducation, cvExperience, cvProfile, cvSkills } from '../../lib/cv'

export const metadata: Metadata = {
  title: 'CV',
  description:
    'CV of Clinton James, Applied AI Engineer: AI agents, LLM systems and full-stack products deployed for real users, with 9+ years of software engineering.',
  alternates: { canonical: `${SITE_URL}/cv` },
  openGraph: {
    title: 'CV | Clinton James',
    description: 'Applied AI Engineer · Forward Deployed Engineering · AI & Growth Systems',
    url: `${SITE_URL}/cv`,
  },
}

const linkIcons = [HiOutlineEnvelope, HiOutlineGlobeAlt, FaGithub, FaLinkedin]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="cv-accent mb-4 text-[10px] font-semibold uppercase tracking-widest text-[#edd86e] print:mb-2 print:text-[8pt]">
      {children}
    </h2>
  )
}

const CvPage = () => {
  return (
    <div className="cv-page mx-auto max-w-[1080px] px-6 pt-8 pb-28 md:px-8 print:max-w-none print:p-0">
      {/* Header */}
      <header className="relative mb-12 overflow-hidden rounded-xl border border-[#2a2a2e] bg-[#1b1c21] p-6 md:p-8 print:mb-4 print:rounded-none print:border-0 print:border-b print:p-0 print:pb-3">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 print:hidden"
          style={{ backgroundImage: "url('/tile_bg.svg')", backgroundSize: '71px 35.5px' }}
        />
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(237,216,110,0.16),transparent_70%)] print:hidden" />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between print:gap-2">
          <div>
            <h1 className="mb-2 text-[30px] font-bold leading-tight text-[#e0e0e0] md:text-[40px] print:mb-0.5 print:text-[20pt]">
              {cvProfile.name}
            </h1>
            <p className="cv-accent font-excalifont text-[18px] text-[#edd86e] md:text-[22px] print:font-sans print:text-[11pt] print:font-bold">
              {cvProfile.title}
              <span className="text-[#777778] print:font-normal">
                {cvProfile.focus.map((f) => ` · ${f}`).join('')}
              </span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2 print:hidden">
            <CvDownloadButton />
            <a
              href="mailto:clintjeez@gmail.com"
              className="inline-flex h-9 items-center gap-2 rounded-md border border-[#2a2a2e] bg-[#17181d] px-3 text-[12px] text-[#bfbfbf] transition-all hover:bg-[#484848]"
            >
              <HiOutlineEnvelope className="text-[15px] text-[#edd86e]" />
              Get in touch
            </a>
          </div>
        </div>

        <ul className="relative mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-[#777778] print:mt-2 print:gap-x-3 print:text-[8pt]">
          {cvProfile.links.map(({ label, href }, i) => {
            const Icon = linkIcons[i]
            return (
              <li key={href}>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[#edd86e]"
                >
                  {Icon && <Icon className="text-[13px] print:hidden" />}
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </header>

      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_300px] print:block">
        {/* Main column */}
        <main className="min-w-0">
          <section className="mb-12 print:mb-4">
            <SectionLabel>Summary</SectionLabel>
            <p className="text-[14px] leading-relaxed text-[#bfbfbf] md:text-[15px] print:text-[9pt]">
              {cvProfile.summary}
            </p>
          </section>

          <section className="print:mb-4">
            <SectionLabel>Experience</SectionLabel>
            <ol className="relative border-l border-[#2a2a2e] print:border-0">
              {cvExperience.map((role) => (
                <li
                  key={`${role.company}-${role.period}`}
                  className="relative mb-9 pl-6 last:mb-0 print:mb-3 print:break-inside-avoid print:pl-0"
                >
                  <span className="absolute -left-[4px] top-[7px] h-[7px] w-[7px] rounded-full bg-[#edd86e] shadow-[0_0_0_4px_rgba(237,216,110,0.12)] print:hidden" />
                  <div className="mb-2 flex flex-col gap-0.5 md:flex-row md:items-baseline md:justify-between md:gap-4 print:mb-1 print:flex-row print:items-baseline print:justify-between">
                    <h3 className="text-[14px] font-bold text-[#e0e0e0] print:text-[10pt]">
                      {role.title}
                      <span className="font-normal text-[#777778]"> · </span>
                      {role.url ? (
                        <a
                          href={role.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cv-accent inline-flex items-center gap-0.5 text-[#edd86e] hover:underline"
                        >
                          {role.company}
                          <HiArrowUpRight className="text-[11px] print:hidden" />
                        </a>
                      ) : (
                        <span className="text-[#bfbfbf]">{role.company}</span>
                      )}
                    </h3>
                    <p className="shrink-0 text-[11px] text-[#777778] print:text-[8pt]">
                      {role.period}
                      {role.meta && ` · ${role.meta}`}
                    </p>
                  </div>
                  <ul className="space-y-1.5 print:space-y-0.5">
                    {role.highlights.map((h) => (
                      <li
                        key={h}
                        className="relative pl-4 text-[12.5px] leading-relaxed text-[#9a9a9b] md:text-[13px] print:pl-3 print:text-[8.5pt] print:leading-snug"
                      >
                        <span className="cv-accent absolute left-0 top-0 text-[#edd86e]">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="flex flex-col gap-10 print:gap-3">
          <section className="print:break-inside-avoid">
            <SectionLabel>Skills</SectionLabel>
            <div className="flex flex-col gap-5 print:gap-1.5">
              {cvSkills.map(({ group, items }) => (
                <div key={group}>
                  <h3 className="mb-2 text-[10px] uppercase tracking-wide text-[#777778] print:mb-0.5 print:inline print:text-[8pt] print:font-bold print:normal-case print:tracking-normal">
                    {group}
                    <span className="hidden print:inline">: </span>
                  </h3>
                  <ul className="flex flex-wrap gap-1.5 print:inline">
                    {items.map((item, i) => (
                      <li
                        key={item}
                        className="rounded-md border border-[#2a2a2e] bg-[#1b1c21] px-2 py-0.5 text-[10.5px] text-[#bfbfbf] print:inline print:border-0 print:p-0 print:text-[8pt]"
                      >
                        {item}
                        {i < items.length - 1 && <span className="hidden print:inline">, </span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="print:break-inside-avoid">
            <SectionLabel>Education & Learning</SectionLabel>
            <ul className="flex flex-col gap-3 print:gap-0.5">
              {cvEducation.map(({ name, detail }) => (
                <li key={name} className="print:text-[8.5pt]">
                  <p className="text-[12.5px] font-bold text-[#e0e0e0] print:inline print:text-[8.5pt]">
                    {name}
                    <span className="hidden print:inline">: </span>
                  </p>
                  <p className="text-[11.5px] text-[#777778] print:inline print:text-[8.5pt]">
                    {detail}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="print:break-inside-avoid">
            <SectionLabel>Community</SectionLabel>
            <ul className="flex flex-col gap-3">
              {cvCommunity.map(({ name, period, detail }) => (
                <li key={name} className="print:text-[8.5pt]">
                  <p className="text-[12.5px] font-bold text-[#e0e0e0] print:inline print:text-[8.5pt]">
                    {name}
                  </p>
                  <p className="mb-1 text-[11px] text-[#777778] print:inline print:text-[8.5pt]">
                    <span className="hidden print:inline"> (</span>
                    {period}
                    <span className="hidden print:inline">): </span>
                  </p>
                  <p className="text-[11.5px] leading-relaxed text-[#9a9a9b] print:inline print:text-[8.5pt]">
                    {detail}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  )
}

export default CvPage
