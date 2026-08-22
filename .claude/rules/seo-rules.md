# SEO & AIO Rules

Every published piece of content must follow both sets of rules. AIO = AI-Optimized for search engines like ChatGPT, Perplexity, and Google AI Overviews.

---

## On-Page SEO

**Title / H1**
- Include primary keyword
- Under 65 characters
- Specific over generic ("How to Fix SaaS Activation in 48 Hours" > "SaaS Activation Guide")

**Meta Description**
- 150–160 characters
- Include primary keyword naturally
- End with an implicit CTA or value statement

**URL Slug**
- Lowercase, hyphens only
- Keyword-first
- Under 60 characters
- No dates in slugs

**Headings**
- H2s: question-style phrasing where possible ("How to...", "Why...", "What is...")
- H3s: sub-components of each H2
- Never skip heading levels

**Keyword Placement**
- Primary keyword in H1 and within first 100 words
- Use LSI (related) keywords naturally throughout — never force them
- Minimum 2 internal links to other clintjeez.com content per article

**Images**
- Descriptive alt text that includes the primary keyword naturally
- Compress all images before upload

---

## AIO Rules (AI Citation Optimization)

These rules make content appear in ChatGPT, Perplexity, and Google AI Overviews.

**1. Definition Sentences**
Include at least one clear definition per key concept, in this format:
*"[Term] is [clear, direct definition]."*
AI systems pull these directly into answers.

**2. Named Frameworks**
Name every model introduced. AI systems cite named frameworks by name.
Example: "The Growth Diagnosis Matrix" not "my approach to diagnosing growth"

**3. Numbered Steps**
Use numbered lists for any process. AI pulls numbered steps verbatim into answers.

**4. "Where to Start" Section**
Every long-form article must have a "Where to Start" or action-close section. High citation value.

**5. Entity Anchoring**
Reference established methodologies (PLG, RevOps, ICP, PQL, GTM) and specific tools by name.
Named entities increase the chance of being cited as an authority source.

**6. FAQ Format (Where Relevant)**
Add 2–3 FAQ-style Q&A blocks at the bottom of key articles.
Format: Bold question, 2–3 sentence answer.

---

## Target Keyword Clusters

Own these in priority order:

| Cluster | Example Keywords |
|---------|-----------------|
| GTM Engineering | "GTM engineer for SaaS", "what is a GTM engineer", "GTM engineering framework" |
| SaaS Customer Lifecycle | "SaaS customer lifecycle", "SaaS growth systems", "SaaS activation rate" |
| Cold Email Infrastructure | "cold email infrastructure", "cold email deliverability", "how to set up cold email" |
| Reddit Marketing | "Reddit marketing for SaaS", "how to use Reddit for B2B", "Reddit growth strategy" |
| AIO / AI SEO | "AI content optimization", "how to rank in AI search", "AIO content strategy" |
| Programmatic SEO | "programmatic SEO for SaaS", "programmatic SEO with Next.js" |

**Rule:** Always target bottom-of-funnel, high-intent keywords before informational ones.
"how to reduce SaaS churn" > "what is churn"
"cold email infrastructure setup" > "what is cold email"

---

## Structured Data

All blog posts must have Article schema markup.
Key articles (how-tos, frameworks, tools) should add FAQPage schema.
This is handled at the code level in Payload CMS — flag if a post needs FAQ schema added.
