import React from 'react'
import Image from 'next/image'
import ConsultationCta from '../components/ConsultationCta'
import HarnessLayer from '../components/HarnessLayer'
import { TbRobot, TbDatabaseSearch, TbBrain, TbAutomation } from 'react-icons/tb'

const services = [
  {
    id: 'agents',
    name: 'AI Agents',
    tag: 'Support / Sales',
    description:
      'Agents wired into your CRM or helpdesk with tool calls, guardrails, and an eval suite.',
    icon: TbRobot,
  },
  {
    id: 'rag',
    name: 'Knowledge Assistants',
    tag: 'RAG / Internal Docs',
    description: 'Answers grounded in your docs and data, with retrieval accuracy you can measure.',
    icon: TbDatabaseSearch,
  },
  {
    id: 'predictive',
    name: 'Predictive Models',
    tag: 'Churn / Lead Scoring',
    description:
      'ML models trained on your product data that flag risk and intent before you miss it.',
    icon: TbBrain,
  },
  {
    id: 'automation',
    name: 'AI Workflow Automation',
    tag: 'GTM / Operations',
    description: 'n8n pipelines with an LLM layer that remove manual work from growth and ops.',
    icon: TbAutomation,
  },
]

const values = [
  {
    name: 'Diagnose before building',
    description: 'I find the real bottleneck before writing a line of code. Fix before automating.',
  },
  {
    name: 'Ship end to end',
    description:
      'Product, infrastructure, data, and AI in one pair of hands, from first commit to production.',
  },
  {
    name: 'Measure what matters',
    description: 'Systems are judged by adoption, retention, and revenue, not by output.',
  },
  {
    name: 'Customer-facing by default',
    description: '9 years of scoping and delivering directly with founders and operators.',
  },
  {
    name: 'Think in systems',
    description:
      'Inputs, processes, outputs, feedback loops. I design for compounding, not one-off wins.',
  },
  {
    name: 'Chase ambitious problems',
    description: 'Drawn to hard, high-value problems where engineering and economics meet.',
  },
]

const skills = [
  'AI Engineering',
  'LLM Agents',
  'RAG & Evals',
  'Full-Stack Engineering',
  'Product Strategy',
  'Design Thinking',
  'Systems Thinking',
  'Growth Engineering',
  'GTM Engineering',
  'Data & Analytics',
  'Workflow Automation',
  'Customer Discovery',
]

type Tool = { label: string; logo?: string }

const stack: { domain: string; tools: Tool[] }[] = [
  {
    domain: 'Languages',
    tools: [
      { label: 'Python' },
      { label: 'TypeScript', logo: '/logos/typescript.svg' },
      { label: 'JavaScript', logo: '/logos/javascript.svg' },
      { label: 'Rust', logo: '/logos/rust.svg' },
      { label: 'Go' },
    ],
  },
  {
    domain: 'AI & ML',
    tools: [
      { label: 'PyTorch' },
      { label: 'Hugging Face' },
      { label: 'Transformers' },
      { label: 'HF Datasets' },
      { label: 'Pandas' },
      { label: 'NumPy' },
      { label: 'Jupyter' },
      { label: 'Kaggle' },
      { label: 'Gradio' },
      { label: 'GPU / CUDA' },
      { label: 'ML Pipelines' },
    ],
  },
  {
    domain: 'LLMs & Agents',
    tools: [
      { label: 'Claude', logo: '/logos/claude.svg' },
      { label: 'Claude Code' },
      { label: 'Cursor' },
      { label: 'Groq API' },
      { label: 'Ollama' },
      { label: 'AI Agents' },
    ],
  },
  {
    domain: 'Product',
    tools: [
      { label: 'React', logo: '/logos/react.svg' },
      { label: 'Next.js', logo: '/logos/nextjs.svg' },
      { label: 'Node.js', logo: '/logos/nodejs.svg' },
      { label: 'Prisma' },
      { label: 'REST APIs' },
      { label: 'Payload CMS' },
      { label: 'PostgreSQL' },
    ],
  },
  {
    domain: 'Infrastructure',
    tools: [
      { label: 'AWS' },
      { label: 'Docker' },
      { label: 'Cloudflare Workers' },
      { label: 'Cloudflare R2' },
      { label: 'Supabase', logo: '/logos/supabase.svg' },
    ],
  },
  {
    domain: 'Data & GTM',
    tools: [
      { label: 'PostHog', logo: '/logos/posthog.svg' },
      { label: 'HubSpot', logo: '/logos/hubspot.svg' },
      { label: 'Clay' },
      { label: 'Apollo', logo: '/logos/apollo.svg' },
      { label: 'Instantly' },
      { label: 'Stripe' },
    ],
  },
  {
    domain: 'Automation',
    tools: [
      { label: 'n8n', logo: '/logos/n8n.svg' },
      { label: 'Make', logo: '/logos/make.svg' },
      { label: 'Zapier', logo: '/logos/zapier.svg' },
      { label: 'Playwright' },
    ],
  },
  {
    domain: 'Web3',
    tools: [
      { label: 'Solidity', logo: '/logos/solidity.svg' },
      { label: 'Web3', logo: '/logos/web3.svg' },
    ],
  },
]

const coursework = [
  { name: 'BSc Computer Science', source: 'Degree' },
  { name: 'Principles of Microeconomics', source: 'MIT' },
  { name: 'Investment Banking', source: 'Online course' },
  { name: 'Data Analytics', source: 'Online course' },
]

const knowledge = [
  'Microeconomics',
  'Corporate Finance',
  'Investment Banking',
  'Pricing Strategy',
  'Product Analytics',
  'Customer Lifecycle',
  'Go-to-Market',
  'Product-Led Growth',
  'RevOps',
  'SEO & AIO',
  'SaaS',
  'Web3 & Crypto',
]

const card =
  'bg-[#1b1c21] rounded-lg p-4 border border-transparent hover:border-[#2a2a2e] transition-all duration-300'
const chip =
  'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1b1c21] border border-[#2a2a2e] text-[10px] md:text-[11px] text-[#bfbfbf]'

function SubLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[10px] uppercase tracking-wide text-[#777778] mb-3">{children}</p>
}

const HarnessOverview = () => {
  return (
    <section id="harness" className="mb-20 scroll-mt-8">
      {/* Section Header */}
      <div className="mb-10">
        <h1 className="mb-3 font-bold text-[16px]">Harness</h1>
        <h2 className="text-[16px] md:text-[20px] md:pr-[50px] font-light text-[#777778]">
          The harness I wrap around every problem: what goes in, what runs, what ships, and the
          guardrails that keep it honest.
        </h2>
      </div>

      <div className="flex flex-col gap-12">
        {/* 01 Inputs */}
        <HarnessLayer
          index="01"
          name="Inputs"
          caption="Education, coursework, research, and client work"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {coursework.map(({ name, source }) => (
              <div key={name} className={card}>
                <h4 className="text-[#e0e0e0] text-[11px] font-bold leading-snug mb-1">{name}</h4>
                <span className="text-[9px] text-[#edd86e]/70 uppercase tracking-wide">
                  {source}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {knowledge.map((item) => (
              <span key={item} className={chip}>
                {item}
              </span>
            ))}
          </div>
        </HarnessLayer>

        {/* 02 Runtime */}
        <HarnessLayer index="02" name="Runtime" caption="The skills and stack that do the work">
          <SubLabel>Skills</SubLabel>
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill) => (
              <span key={skill} className={chip}>
                {skill}
              </span>
            ))}
          </div>
          <SubLabel>Stack</SubLabel>
          <div className="flex flex-col gap-3">
            {stack.map(({ domain, tools }) => (
              <div key={domain} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                <span className="text-[10px] uppercase tracking-wide text-[#777778] md:w-[110px] md:pt-[6px] shrink-0">
                  {domain}
                </span>
                <div className="flex flex-wrap gap-2">
                  {tools.map(({ label, logo }) => (
                    <span key={label} className={chip}>
                      {logo && <Image src={logo} alt="" width={12} height={12} />}
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </HarnessLayer>

        {/* 03 Outputs */}
        <HarnessLayer index="03" name="Outputs" caption="What I deploy, measured before and after">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map(({ id, name, tag, description, icon: Icon }) => (
              <div key={id} className={card}>
                <div className="flex items-start gap-3 mb-2">
                  <Icon className="text-[#edd86e] text-[18px] mt-[1px] shrink-0" />
                  <div className="min-w-0">
                    <h4 className="text-[#e0e0e0] text-[11px] font-bold leading-snug truncate">
                      {name}
                    </h4>
                    <span className="text-[9px] text-[#edd86e]/70 uppercase tracking-wide">
                      {tag}
                    </span>
                  </div>
                </div>
                <p className="text-[10px] text-[#777778] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </HarnessLayer>

        {/* 04 Guardrails */}
        <HarnessLayer index="04" name="Guardrails" caption="How I work, and what I bring to a team">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {values.map(({ name, description }) => (
              <div key={name} className={card}>
                <h4 className="text-[#e0e0e0] text-[11px] font-bold leading-snug mb-1">{name}</h4>
                <p className="text-[10px] text-[#777778] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </HarnessLayer>
      </div>

      {/* Consultation CTA */}
      <div className="mt-12">
        <ConsultationCta />
      </div>
    </section>
  )
}

export default HarnessOverview
