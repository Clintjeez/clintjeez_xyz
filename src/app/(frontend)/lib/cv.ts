// Single source for the /cv page and its printable PDF.
// Keep in sync with the resume doc when roles or results change.

export const cvProfile = {
  name: 'Clinton James',
  title: 'Applied AI Engineer',
  focus: ['Forward Deployed Engineering', 'AI & Growth Systems'],
  summary:
    "Applied AI Engineer with 9+ years of shipping production software across fintech, Web3 and AI. Along the way, I've built multimodal AI tools and the growth systems that bring them to market. I currently run Alubasa Labs, a venture studio where we experiment with solutions to ambitious problems and support founders from day zero, from POC architecture to go-to-market. Our most recent project, Gamavas, is indie gaming infrastructure: a custom agentic harness that turns ideas into playable games, edge-network hosting for web games, and tools for publishing and distribution. In all of this work, I pair engineering depth with product and microeconomic thinking.",
  links: [
    { label: 'clintjeez@gmail.com', href: 'mailto:clintjeez@gmail.com' },
    { label: 'clintjeez.com', href: 'https://clintjeez.com' },
    { label: 'github.com/Clintjeez', href: 'https://github.com/Clintjeez' },
    {
      label: 'linkedin.com/in/clinton-james-dev',
      href: 'https://www.linkedin.com/in/clinton-james-dev/',
    },
  ],
}

export type CvRole = {
  title: string
  company: string
  url?: string
  period: string
  meta?: string
  highlights: string[]
}

export const cvExperience: CvRole[] = [
  {
    title: 'Applied AI Engineer',
    company: 'Gamavas',
    url: 'https://gamavas.fun/',
    period: 'Sep 2026 – Present',
    meta: 'Remote',
    highlights: [
      'Designed and shipped an AI studio that turns a prompt into a playable three.js game: a tool-calling agent running up to 48 steps per turn across Claude, GPT and Gemini (Trigger.dev, Vercel AI SDK, OpenRouter)',
      'Made the agent production-grade with per-step cost tracking, token budgets, and recovery from provider outages and rate limits without losing user work',
      'Turned AI usage into revenue with subscription plans, credit packs and per-step billing; live with real players and payments',
      'Built the surrounding platform: game hosting on Cloudflare Workers and R2, a Next.js, tRPC and Postgres web app, and a Tauri (Rust) desktop launcher, released staging-first with tests',
    ],
  },
  {
    title: 'Full Stack Engineer',
    company: 'Microstart',
    url: 'https://www.microstart.co/',
    period: 'Mar 2026 – Present',
    meta: 'Remote',
    highlights: [
      'Solo owner of product, architecture, payments and infrastructure for a marketplace to buy and sell SaaS products, from starter codebases to running businesses',
      'Built multi-vendor listings, admin moderation, offer/counter-offer negotiation and payment flows (Next.js, Node.js, TypeScript, Payload CMS)',
      'Instrumented conversion and behavioral analytics to measure and improve onboarding',
    ],
  },
  {
    title: 'Founder & Lead Architect',
    company: 'Alubasa Labs',
    url: 'https://www.alubasalabs.com/',
    period: 'Oct 2024 – Present',
    meta: 'Remote',
    highlights: [
      'Embed with founders and non-technical businesses as a fractional technical partner: scope the real bottleneck with stakeholders, then design, build and deploy systems into their operations (CRM, ERP, payments, AI adoption)',
      'Shipped AI and automation POCs (n8n, Make, LLM APIs) at a 72-hour average turnaround, with an 87% POC-to-pilot conversion rate',
      'Translated technical systems into business-focused GTM blueprints, shortening B2B sales cycles by ~30%',
      'Incubate in-house ventures from research to launch, including Microstart and Gamavas',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Neutron Gaming',
    period: 'Apr 2023 – Jan 2024',
    meta: 'Remote',
    highlights: [
      'Architected a Web3 game launcher with REST APIs and EVM smart contracts; led delivery from design to deployment with cross-functional teams',
      'Wrote and audited Solidity contracts for secure on-chain asset distribution',
    ],
  },
  {
    title: 'Senior Frontend Developer',
    company: 'Seamless Financial',
    period: 'Mar 2022 – Mar 2023',
    meta: 'Remote',
    highlights: [
      'Built a reusable React component system and merchant payment interfaces for payment links, gateways and bill pay',
      "Co-led the team's first product analytics on merchant onboarding drop-off, giving product the data behind its conversion work",
      'Integrated gRPC services with backend teams to improve transaction response times',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'AlumUnite',
    period: 'Apr 2020 – Jan 2022',
    meta: 'Remote',
    highlights: [
      'Led the migration of a legacy PHP CMS to a MERN stack, improving security, maintainability and load speed',
      'Built donor-to-CRM data pipelines that automated engagement campaigns and repeat-donation follow-ups',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Minerva Technologies',
    period: 'May 2019 – Oct 2021',
    meta: 'Remote',
    highlights: [
      'Built Splitxchange, a React digital art marketplace that processed $57,000+ in transactions',
      'Built React and TypeScript component patterns and Redux state for auctions and multi-step KYC onboarding',
    ],
  },
]

export const cvSkills: { group: string; items: string[] }[] = [
  {
    group: 'AI & LLM Systems',
    items: [
      'Agents & tool calling',
      'Multi-model orchestration',
      'OpenRouter',
      'Vercel AI SDK',
      'Trigger.dev',
      'LangChain',
      'RAG',
      'Evals',
      'Cost & token budgeting',
      'Ollama',
    ],
  },
  {
    group: 'Machine Learning & Data',
    items: [
      'PyTorch',
      'Hugging Face',
      'Transformers',
      'Datasets',
      'Pandas',
      'NumPy',
      'Jupyter',
      'Gradio',
      'GPU / CUDA',
      'PostHog',
    ],
  },
  {
    group: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Rust', 'Go', 'Solidity', 'SQL'],
  },
  {
    group: 'Product & Backend',
    items: [
      'Next.js',
      'React',
      'Node.js',
      'tRPC',
      'Hono',
      'Express',
      'GraphQL',
      'Django',
      'three.js',
    ],
  },
  {
    group: 'Cloud & Infrastructure',
    items: [
      'Cloudflare Workers & R2',
      'AWS',
      'Docker',
      'PostgreSQL',
      'Redis',
      'Drizzle',
      'Prisma',
      'GitHub Actions',
    ],
  },
  {
    group: 'Integrations & Automation',
    items: ['Stripe', 'HubSpot', 'n8n', 'Make', 'Clay', 'Apollo'],
  },
  {
    group: 'Customer Delivery',
    items: [
      'Stakeholder discovery',
      'Solution scoping',
      'POC-to-pilot delivery',
      'Technical writing',
      'Workshops',
    ],
  },
]

export const cvEducation = [
  { name: 'BSc Computer Science', detail: 'University of Benin, Benin City, Nigeria' },
  { name: 'Product Design · Product Marketing & GTM', detail: 'Product School' },
  {
    name: 'Coursework',
    detail: 'Principles of Microeconomics (MIT), Investment Banking, Data Analytics',
  },
]

export const cvCommunity = [
  {
    name: 'Community Lead, ThisTechThing',
    period: 'Jun 2024 – Present',
    detail:
      'Launched a community for creators and engineers and organized its inaugural Lagos meetup (100+ attendees)',
  },
]
