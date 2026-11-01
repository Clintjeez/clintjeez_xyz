# LinkedIn Posts — Why a Full-Stack Engineer Works on Growth
*Source: original (positioning: AI & Growth Systems Engineer, FDE path)*
*Date: 2026-10-29 | Pillar: 5 — GTM Engineering as a Discipline*

---

## Post 1 — Contrarian
*Type: Contrarian | Rotate: use first*

Growth isn't a marketing problem. It's a systems problem that shows up in revenue.

Every growth metric is a query against something an engineer built.

CAC is a data pipeline. If cost lines don't flow into it, the number lies.

Activation is an onboarding flow and an event schema.

NRR is a pricing architecture. Usage-based expansion either exists in the billing code or it doesn't.

That's why I like working on growth as a full-stack engineer. The levers aren't slogans. They're schemas, APIs, webhooks, and deploys.

Messaging matters. But it runs on infrastructure someone has to build.

Which growth metric at your company does nobody on the engineering team own?

#SoftwareEngineering #ProductEngineering #SaaS

---

## Post 2 — Story / Diagnostic
*Type: Story | Rotate: use second*

Shipped to production isn't the finish line. It's the start of the only test that matters.

Most engineering work stops at the deploy. Ticket closed, PR merged, next sprint.

The question I care about comes after: did anyone use it, and did it move revenue?

That question is why I gravitate to growth work.

It forces you to instrument what you ship. Events in PostHog, a funnel from signup to first value, a cohort you can check 30 days later.

It forces you to talk to the people using the system. The real requirements live in conversations with founders and operators, not in the ticket.

And it gives engineering a scoreboard it rarely gets: activation, conversion, retention, revenue.

Nine years of building full-stack, and that feedback loop is still the best part of the job.

What's the last thing you shipped, and do you know if it worked?

#SoftwareEngineering #ProductEngineering #BuildInPublic

---

## Post 3 — Framework
*Type: Framework | Rotate: use third*

Between the product and the revenue line sits a layer most teams never build. That's where I like to work.

Here's the Product-to-Revenue Stack. Four layers, built in order:

→ Instrument — an event taxonomy in PostHog, so usage becomes data instead of guesses
→ Model — CAC, payback, and NRR computed in Postgres or Supabase from real usage, not spreadsheets
→ Automate — webhooks and n8n workflows that route signals to CRM, billing, and Slack the moment they fire
→ Augment — AI agents and LLM workflows on top, once the data underneath is clean

Skip a layer and the one above it breaks. An AI agent on uninstrumented data just automates the guesswork.

That's the work I love: full-stack engineering measured in activation and revenue, not features shipped.

Building at this layer right now? Compare notes in the comments.

#AIEngineering #SoftwareEngineering #SaaS
