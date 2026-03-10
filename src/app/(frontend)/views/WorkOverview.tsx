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
    description:
      'Platform helping founders launch Micro SaaS with validated source code and GTM setup',
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
    summary:
      'Rebuilt onboarding flow with behavioral triggers and progressive disclosure, lifting activation from 12% to 38%.',
  },
  {
    id: 'case-2',
    title: 'Cold Email Infrastructure',
    metric: '47% open rate',
    category: 'Lead Generation',
    summary:
      'Architected a Clay + Apollo + Instantly stack with AI personalization, booking 22 qualified calls in 30 days.',
  },
  {
    id: 'case-3',
    title: 'Programmatic SEO Engine',
    metric: '10x organic traffic',
    category: 'SEO & AEO',
    summary:
      'Built 2,400 programmatic pages with Next.js and structured data, ranking for 850+ long-tail keywords in 90 days.',
  },
  {
    id: 'case-4',
    title: 'Revenue Dashboard & Alerts',
    metric: '68% churn reduction',
    category: 'Retention',
    summary:
      'Implemented health scoring with PostHog and automated N8N alerts, catching at-risk accounts before cancellation.',
  },
  {
    id: 'case-5',
    title: 'Pricing Page Optimization',
    metric: '24% revenue lift',
    category: 'CRO & A/B Testing',
    summary:
      'Ran 14 pricing experiments over 8 weeks, optimizing value metrics, plan structure, and checkout UX.',
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
          9 years of building software — from frontend interfaces to full-stack SaaS products and
          growth systems.
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
    </section>
  )
}

export default WorkOverview
