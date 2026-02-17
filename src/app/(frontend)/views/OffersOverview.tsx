import React from 'react'
import Link from 'next/link'
import { HiArrowLongRight } from 'react-icons/hi2'
import ConsultationCta from '../components/ConsultationCta'
import {
  TbSeo,
  TbMailBolt,
  TbChartDots3,
  TbRocket,
  TbAB2,
  TbPlugConnected,
} from 'react-icons/tb'

const offers = [
  {
    id: 'seo-aeo',
    title: 'SEO & AEO Automations',
    description:
      'Get found by humans and AI. Programmatic SEO systems and Answer Engine Optimization so your product shows up in Google, ChatGPT, and Perplexity.',
    process: [
      'Technical SEO audit & keyword mapping',
      'Programmatic page generation (Next.js)',
      'Structured data & entity markup for AI citation',
      'Automated content pipelines with AI assistance',
      'Rank tracking & organic attribution dashboards',
    ],
    icon: TbSeo,
  },
  {
    id: 'lead-gen',
    title: 'Lead Gen & Coldmail Infrastructure',
    description:
      'End-to-end outbound systems that fill your pipeline. From ICP targeting and enrichment to deliverable cold emails that book calls.',
    process: [
      'ICP definition & audience segmentation',
      'Clay enrichment & Apollo contact sourcing',
      'Instantly cold email setup with deliverability optimization',
      'HubSpot CRM with lead scoring & routing',
      'N8N orchestration connecting all tools into one pipeline',
    ],
    icon: TbMailBolt,
  },
  {
    id: 'plg-data',
    title: 'Product-Led Growth & Data Infrastructure',
    description:
      'Instrument your product to grow itself. Usage tracking, behavioral analytics, and PLG systems that turn free users into paying customers.',
    process: [
      'Mixpanel or PostHog instrumentation & event taxonomy',
      'Activation funnel mapping & drop-off analysis',
      'Behavioral cohort tracking & segmentation',
      'Product usage dashboards & health scoring',
      'Data pipelines feeding growth loops & alerts',
    ],
    icon: TbChartDots3,
  },
  {
    id: 'sales-conversion',
    title: 'Sales & Conversion Automation',
    description:
      'Automate the path from trial to paid. PQL scoring, sales triggers, and nurture sequences that convert without manual follow-up.',
    process: [
      'Product Qualified Lead (PQL) scoring setup',
      'Automated sales alerts via Slack & HubSpot',
      'Trial nurture & expiration email sequences',
      'Self-serve checkout optimization',
      'Sales-assist routing for high-ACV prospects',
    ],
    icon: TbRocket,
  },
  {
    id: 'cro-testing',
    title: 'Product CRO & A/B Testing',
    description:
      'Data-driven experiments that lift revenue. Landing page optimization, pricing tests, and onboarding experiments backed by real numbers.',
    process: [
      'Conversion audit across key user journeys',
      'A/B testing infrastructure setup',
      'Landing page & pricing page experiments',
      'Onboarding flow optimization with PostHog funnels',
      'Weekly experiment reports with statistical analysis',
    ],
    icon: TbAB2,
  },
  {
    id: 'custom-integrations',
    title: 'Custom Integrations & Automations',
    description:
      'Connect your tools into one system. Custom N8N, Make, and Zapier workflows that eliminate manual work and keep your stack in sync.',
    process: [
      'Workflow audit & automation opportunity mapping',
      'Custom N8N / Make / Zapier workflow builds',
      'API integrations between SaaS tools',
      'AI agent automations (Claude, OpenAI)',
      'Monitoring, error handling & documentation',
    ],
    icon: TbPlugConnected,
  },
]

const OffersOverview = () => {
  return (
    <section className="mb-20">
      <div className="mb-16 md:mb-10">
        <h1 className="mb-3 font-bold text-[16px]">What I Build</h1>
        <h2 className="text-[16px] md:text-[20px] md:pr-[50px] font-light text-[#777778]">
          Modular growth systems you can adopt individually or combine — each one
          engineered to unblock a specific stage of your revenue pipeline.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        {offers.map((offer) => {
          const Icon = offer.icon
          return (
            <div
              key={offer.id}
              className="bg-[#1b1c21] rounded-xl p-5 border border-transparent hover:border-[#2a2a2e] transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 mb-3">
                <Icon className="text-[#edd86e] text-[22px] mt-[2px] shrink-0" />
                <h3 className="text-[#e0e0e0] text-[14px] font-bold leading-snug">
                  {offer.title}
                </h3>
              </div>
              <p className="text-[12px] text-[#777778] leading-relaxed mb-4">
                {offer.description}
              </p>
              <ul className="space-y-2 mb-4">
                {offer.process.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-[11px] text-[#999]">
                    <span className="text-[#edd86e] mt-[2px] shrink-0">&#9679;</span>
                    {step}
                  </li>
                ))}
              </ul>
              <Link
                href={`/offers#${offer.id}`}
                className="inline-flex items-center gap-2 text-[12px] text-[#c4c4c4] hover:text-[#edd86e] transition-colors duration-300"
              >
                <span>Learn more</span>
                <HiArrowLongRight className="text-[14px] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          )
        })}
      </div>
      <div className="mt-5">
        <ConsultationCta />
      </div>
      <div className="flex justify-end pl-3 mt-10">
        <Link
          href="/offers"
          className="flex items-center gap-3 text-[#777778] hover:text-[#fff] text-[16px] underline transition-colors duration-300"
        >
          <span>View all offers</span>
          <HiArrowLongRight className="text-[20px]" />
        </Link>
      </div>
    </section>
  )
}

export default OffersOverview
