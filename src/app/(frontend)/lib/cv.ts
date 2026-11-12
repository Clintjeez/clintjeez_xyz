// Single source for the /cv page and its printable PDF.
// Keep in sync with the resume doc when roles or results change.

export const cvProfile = {
  name: 'Clinton James',
  title: 'Forward Deployed Engineer',
  summary:
    "Solutions-driven engineer with 9+ years of shipping software and talking to users across SaaS, fintech, Web3 and AI. Along the way, I've built multimodal AI tools and the growth systems that bring them to market. I currently run Alubasa Labs, a venture studio where we experiment with solutions to ambitious problems and support founders from day zero, from POC architecture to go-to-market. Our most recent project, Gamavas, is an indie gaming infrastructure for building, hosting and publishing web games, now with 823+ users, 153 published games, 2,000+ daily visitors and 118+ active daily players. In all of this work, I pair engineering depth with product and growth thinking.",
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
  projects?: CvProject[]
}

// Ventures built inside a studio role, shown nested under it
export type CvProject = {
  name: string
  role: string
  url?: string
  highlights: string[]
}

export const cvExperience: CvRole[] = [
  {
    title: 'AI & Machine Learning Facilitator',
    company: 'GIZ',
    period: 'Aug 2026 – Present',
    meta: 'Contract',
    highlights: [
      'Support Tech4Youth, an EU-funded program implemented by GIZ that trains and mentors 8,000+ participants across Africa in market-relevant ICT skills and digital inclusion',
      'Built a custom adaptive learning system and curriculum for applied AI and advanced machine learning, tailored to learners from entry level to advanced, including people with disabilities (PWD)',
      'Designed an inclusive training delivery model with interpreters and PWD-aligned accessibility guidelines',
    ],
  },
  {
    title: 'Founder & Lead Architect',
    company: 'Alubasa Labs',
    url: 'https://www.alubasalabs.com/',
    period: 'Mar 2024 – Present',
    meta: 'Remote',
    highlights: [
      'Embed with founders and non-technical businesses as a fractional technical partner: scope the real bottleneck with stakeholders, then design, build and deploy systems into their operations (CRM, ERP, payments, AI adoption)',
      'Shipped AI and automation POCs (n8n, Make, LLM APIs) at a 72-hour average turnaround, with an 87% POC-to-pilot conversion rate',
      'Translated technical systems into business-focused GTM blueprints, shortening B2B sales cycles by ~30%',
      'Incubate in-house ventures from research to launch, including Biodora, Microstart and Gamavas',
    ],
    projects: [
      {
        name: 'Gamavas',
        role: 'Applied AI Engineer',
        url: 'https://gamavas.fun/',
        highlights: [
          'Launchpad and discovery platform for indie games, playable in the browser, with an AI game builder that turns a plain-language prompt into a game creators can tweak, share and publish, no code needed',
          'Designed and shipped the AI game builder: a tool-calling agent harness that generates playable three.js games, running up to 48 steps per turn across Claude, GPT and Gemini (Trigger.dev, Vercel AI SDK, OpenRouter)',
          'Made the agent production-grade with per-step cost tracking, token budgets, and recovery from provider outages and rate limits without losing user work',
          'Grew the platform to 823+ users, 153 published games, 2,000+ daily visitors and 118+ active daily players',
          'Turned AI usage into revenue with subscription plans, credit packs and per-step billing',
          'Built the surrounding platform: game hosting on Cloudflare Workers and R2, a Next.js, tRPC and Postgres web app, and a Tauri (Rust) desktop launcher, released staging-first with tests',
        ],
      },
      {
        name: 'Biodora',
        role: 'Lead Researcher',
        highlights: [
          "Building frontier biotech tools on African genomic data; first product, Genedora, tackles variants of uncertain significance (VUS), genetic results that leave clinicians unable to act, such as a BRCA1 variant that can't guide whether to screen, operate or wait",
          'Fine-tuning Evo 2, a genomic foundation model trained on 9+ trillion nucleotides from 128,000+ eukaryotic and prokaryotic genomes, on African genome data to improve variant interpretation for underrepresented populations',
          "Building a benchmark to evaluate the model's VUS classification on African genomes",
        ],
      },
      {
        name: 'Microstart',
        role: 'Full Stack Engineer',
        url: 'https://www.microstart.co/',
        highlights: [
          'Architected payments and infrastructure for a marketplace to buy and sell SaaS products, from starter codebases to running businesses',
          'Built multi-vendor listings, admin moderation, offer/counter-offer negotiation and payment flows (Next.js, Node.js, TypeScript, Payload CMS)',
          'Instrumented conversion and behavioral analytics to measure and improve onboarding',
        ],
      },
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
    period: 'May 2019 – Apr 2020',
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
    detail:
      'Principles of Microeconomics (MIT), Investment Banking, Data Analytics, Bioinformatics, Computational Biology',
  },
]

export const cvCommunity: { name: string; period?: string; detail: string }[] = [
  {
    name: 'Community Lead, ThisTechThing',
    detail:
      'Launched a community for creators and engineers and organized its inaugural Lagos meetup (100+ attendees)',
  },
]
