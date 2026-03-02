'use client'

import React from 'react'
import Image from 'next/image'
import { HiArrowLongRight } from 'react-icons/hi2'
import { useUnderConstruction } from '../components/UnderConstruction'

const projects = [
  {
    id: 'microstart',
    name: 'MicroStart',
    role: 'Growth & Engineer',
    description: 'Platform helping founders launch Micro SaaS with validated source code and GTM setup',
    logo: '/experience/microstart-logo.jpeg',
  },
  {
    id: 'thistechthing',
    name: 'ThisTechThing',
    role: 'Founder & Community Lead',
    description: 'Community connecting and empowering digital creators and tech professionals',
    logo: '/experience/thistechthing_logo.jpeg',
  },
  {
    id: 'asklawlm',
    name: 'AsklawLM',
    role: 'AI Engineer',
    description: 'Legal AI workspace for document drafting, contract analysis, and case research',
    logo: '/experience/asklaw-lm.jpeg',
  },
  {
    id: 'alubasa-labs',
    name: 'Alubasa Labs',
    role: 'Solutions Engineer',
    description: 'AI-driven automation workflows and tailored solutions for business operations',
    logo: '/experience/alubasa-labs.jpeg',
  },
  {
    id: 'neutron-gaming',
    name: 'Neutron Gaming',
    role: 'Senior Software Engineer',
    description: 'Web3 game launcher with RESTful APIs and smart contracts for digital assets',
    logo: '/experience/neutron-gaming.jpeg',
  },
  {
    id: 'alumunite',
    name: 'Alumunite',
    role: 'Software Engineer',
    description: 'Alumni crowdfunding web app with optimized scalability and maintainability',
    logo: '/experience/alumunite_logo.jpeg',
  },
]

const caseStudies = [
  {
    id: 'case-1',
    title: 'SaaS Onboarding Redesign',
    metric: '3.2x activation rate',
    category: 'Product-Led Growth',
    summary: 'Rebuilt onboarding flow with behavioral triggers and progressive disclosure, lifting activation from 12% to 38%.',
  },
  {
    id: 'case-2',
    title: 'Cold Email Infrastructure',
    metric: '47% open rate',
    category: 'Lead Generation',
    summary: 'Architected a Clay + Apollo + Instantly stack with AI personalization, booking 22 qualified calls in 30 days.',
  },
  {
    id: 'case-3',
    title: 'Programmatic SEO Engine',
    metric: '10x organic traffic',
    category: 'SEO & AEO',
    summary: 'Built 2,400 programmatic pages with Next.js and structured data, ranking for 850+ long-tail keywords in 90 days.',
  },
  {
    id: 'case-4',
    title: 'Revenue Dashboard & Alerts',
    metric: '68% churn reduction',
    category: 'Retention',
    summary: 'Implemented health scoring with PostHog and automated N8N alerts, catching at-risk accounts before cancellation.',
  },
  {
    id: 'case-5',
    title: 'Pricing Page Optimization',
    metric: '24% revenue lift',
    category: 'CRO & A/B Testing',
    summary: 'Ran 14 pricing experiments over 8 weeks, optimizing value metrics, plan structure, and checkout UX.',
  },
]

const WorkOverview = () => {
  const { open } = useUnderConstruction()

  return (
    <section className="mb-20">
      {/* Section Header */}
      <div className="mb-10">
        <h1 className="mb-3 font-bold text-[16px]">Work & Experience</h1>
        <h2 className="text-[16px] md:text-[20px] md:pr-[50px] font-light text-[#777778]">
          9 years of building software — from frontend interfaces to full-stack SaaS products and growth systems.
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 gap-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-[#1b1c21] rounded-lg p-3 border border-transparent hover:border-[#2a2a2e] transition-all duration-300"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <Image
                src={project.logo}
                alt={project.name}
                width={28}
                height={28}
                className="w-7 h-7 rounded-md object-cover shrink-0"
              />
              <div className="min-w-0">
                <h3 className="text-[#e0e0e0] text-[11px] font-bold truncate">{project.name}</h3>
                <p className="text-[9px] text-[#edd86e] truncate">{project.role}</p>
              </div>
            </div>
            <p className="text-[9px] text-[#777778] leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      {/* Case Studies - Horizontal Scroll */}
      <div className="mt-10">
        <h3 className="text-[13px] font-bold text-[#e0e0e0] mb-5 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#edd86e]" />
          Case Studies
        </h3>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-[#17181d] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-[#17181d] to-transparent" />

          {/* Scrolling track */}
          <div className="flex animate-marquee gap-4 w-max hover:[animation-play-state:paused]">
            {/* First set */}
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="w-[260px] shrink-0 bg-[#1b1c21] rounded-xl p-5 border border-[#2a2a2e] hover:border-[#edd86e]/30 transition-all duration-300 group/card"
              >
                <span className="text-[9px] uppercase tracking-widest text-[#edd86e] font-semibold">
                  {study.category}
                </span>
                <h4 className="text-[13px] font-bold text-[#e0e0e0] mt-2 mb-1">
                  {study.title}
                </h4>
                <p className="text-[22px] font-bold text-[#edd86e] mb-3">
                  {study.metric}
                </p>
                <p className="text-[10px] text-[#777778] leading-relaxed line-clamp-3">
                  {study.summary}
                </p>
                <button
                  onClick={open}
                  className="mt-4 flex items-center gap-1.5 text-[10px] text-[#c4c4c4] group-hover/card:text-[#edd86e] transition-colors duration-300 cursor-pointer"
                >
                  <span>Read case study</span>
                  <HiArrowLongRight className="text-[12px] transition-transform duration-300 group-hover/card:translate-x-1" />
                </button>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {caseStudies.map((study) => (
              <div
                key={`${study.id}-dup`}
                className="w-[260px] shrink-0 bg-[#1b1c21] rounded-xl p-5 border border-[#2a2a2e] hover:border-[#edd86e]/30 transition-all duration-300 group/card"
              >
                <span className="text-[9px] uppercase tracking-widest text-[#edd86e] font-semibold">
                  {study.category}
                </span>
                <h4 className="text-[13px] font-bold text-[#e0e0e0] mt-2 mb-1">
                  {study.title}
                </h4>
                <p className="text-[22px] font-bold text-[#edd86e] mb-3">
                  {study.metric}
                </p>
                <p className="text-[10px] text-[#777778] leading-relaxed line-clamp-3">
                  {study.summary}
                </p>
                <button
                  onClick={open}
                  className="mt-4 flex items-center gap-1.5 text-[10px] text-[#c4c4c4] group-hover/card:text-[#edd86e] transition-colors duration-300 cursor-pointer"
                >
                  <span>Read case study</span>
                  <HiArrowLongRight className="text-[12px] transition-transform duration-300 group-hover/card:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View all work link */}
      <div className="flex justify-end pl-3 mt-10">
        <button
          onClick={open}
          className="flex items-center gap-3 text-[#777778] hover:text-[#fff] text-[16px] underline transition-colors duration-300 cursor-pointer"
        >
          <span>View all work</span>
          <HiArrowLongRight className="text-[20px]" />
        </button>
      </div>
    </section>
  )
}

export default WorkOverview
