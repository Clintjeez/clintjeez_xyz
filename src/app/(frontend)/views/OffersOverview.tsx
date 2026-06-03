'use client'

import React from 'react'
import ConsultationCta from '../components/ConsultationCta'
import {
  TbSeo,
  TbMailBolt,
  TbRocket,
  TbTrendingUp,
  TbShieldCheck,
  TbChartLine,
  TbUsersGroup,
  TbArrowBackUp,
} from 'react-icons/tb'

const growthSystems = [
  {
    id: 'discovery',
    name: 'The Discovery Engine',
    stage: 'Awareness / SEO',
    description: 'Programmatic SEO + AIO so you rank in Google and AI answer engines.',
    icon: TbSeo,
  },
  {
    id: 'pipeline',
    name: 'The Pipeline Machine',
    stage: 'Lead Gen / Acquisition',
    description: 'Clay enrichment + cold email infrastructure that books qualified calls.',
    icon: TbMailBolt,
  },
  {
    id: 'activation',
    name: 'The Activation Accelerator',
    stage: 'Onboarding / Activation',
    description: 'PostHog funnels + behavioural triggers that deliver the aha moment.',
    icon: TbRocket,
  },
  {
    id: 'conversion',
    name: 'The Conversion Engine',
    stage: 'Trial-to-Paid',
    description: 'PQL scoring + automated upgrade sequences that convert without manual follow-up.',
    icon: TbTrendingUp,
  },
  {
    id: 'retention',
    name: 'The Retention Shield',
    stage: 'Churn Prevention',
    description: 'Health scoring + n8n alerts that catch at-risk accounts before they cancel.',
    icon: TbShieldCheck,
  },
  {
    id: 'revenue',
    name: 'The Revenue Architect',
    stage: 'Pricing / Monetisation',
    description: 'Usage-based triggers + expansion sequences that grow MRR from existing accounts.',
    icon: TbChartLine,
  },
  {
    id: 'referral',
    name: 'The Viral Growth Loop',
    stage: 'Referral / Advocacy',
    description: 'Automated advocacy loops that turn satisfied customers into qualified pipeline.',
    icon: TbUsersGroup,
  },
  {
    id: 'reactivation',
    name: 'The Revenue Recovery',
    stage: 'Win-back / Reactivation',
    description:
      'Behavioural win-back sequences that recover churned accounts and failed payments.',
    icon: TbArrowBackUp,
  },
]

function GrowthSystemCard({ system }: { system: (typeof growthSystems)[number] }) {
  const Icon = system.icon
  return (
    <div className="bg-[#1b1c21] rounded-lg p-4 border border-transparent hover:border-[#2a2a2e] transition-all duration-300 group">
      <div className="flex items-start gap-3 mb-2">
        <Icon className="text-[#edd86e] text-[18px] mt-[1px] shrink-0" />
        <div className="min-w-0">
          <h4 className="text-[#e0e0e0] text-[11px] font-bold leading-snug truncate">
            {system.name}
          </h4>
          <span className="text-[9px] text-[#edd86e]/70 uppercase tracking-wide">
            {system.stage}
          </span>
        </div>
      </div>
      <p className="text-[10px] text-[#777778] leading-relaxed">{system.description}</p>
    </div>
  )
}

const OffersOverview = () => {
  return (
    <section className="mb-20">
      {/* Section Header */}
      <div className="mb-10">
        <h1 className="mb-3 font-bold text-[16px]">Offers</h1>
        <h2 className="text-[16px] md:text-[20px] md:pr-[50px] font-light text-[#777778]">
          Each system targets one stage of the customer lifecycle. A sprint ships one. A build ships
          three.
        </h2>
      </div>

      {/* Growth Systems */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {growthSystems.map((system) => (
          <GrowthSystemCard key={system.id} system={system} />
        ))}
      </div>

      {/* Consultation CTA */}
      <div className="mt-10">
        <ConsultationCta />
      </div>
    </section>
  )
}

export default OffersOverview
