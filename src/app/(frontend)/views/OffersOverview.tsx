'use client'

import React from 'react'
import ConsultationCta from '../components/ConsultationCta'
import { TbRobot, TbDatabaseSearch, TbBrain, TbAutomation } from 'react-icons/tb'

const deployments = [
  {
    id: 'agents',
    name: 'AI Agents',
    stage: 'Support / Sales',
    description:
      'Agents wired into your CRM or helpdesk with tool calls, guardrails, and an eval suite.',
    icon: TbRobot,
  },
  {
    id: 'rag',
    name: 'Knowledge Assistants',
    stage: 'RAG / Internal Docs',
    description: 'Answers grounded in your docs and data, with retrieval accuracy you can measure.',
    icon: TbDatabaseSearch,
  },
  {
    id: 'predictive',
    name: 'Predictive Models',
    stage: 'Churn / Lead Scoring',
    description:
      'ML models trained on your product data that flag risk and intent before you miss it.',
    icon: TbBrain,
  },
  {
    id: 'automation',
    name: 'AI Workflow Automation',
    stage: 'GTM / Operations',
    description: 'n8n pipelines with an LLM layer that remove manual work from growth and ops.',
    icon: TbAutomation,
  },
]

function DeploymentCard({ system }: { system: (typeof deployments)[number] }) {
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
        <h1 className="mb-3 font-bold text-[16px]">What I Deploy</h1>
        <h2 className="text-[16px] md:text-[20px] md:pr-[50px] font-light text-[#777778]">
          Each one starts with a diagnosis and ends with a measured result.
        </h2>
      </div>

      {/* Deployments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {deployments.map((system) => (
          <DeploymentCard key={system.id} system={system} />
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
