# SOP: Blog Article Production

## Inputs Required

- Topic or primary keyword
- Content pillar (1 of 5 — see `content-rules.md`)
- Target ICP (which profile is this for?)

## Steps

1. **Keyword research** — Confirm primary keyword + 3–5 LSI keywords. Verify search intent matches the article angle.
2. **Competitor gap check** — Does this article already exist? What angle is missing that Clinton can own?
3. **Draft outline** — Follow the Article Architecture from `content-rules.md` exactly.
4. **Write first draft** — In Clinton's voice. Apply all rules from `communication-style.md`.
5. **SEO pass** — H1 includes keyword, meta description written, URL slug drafted, 2+ internal links added.
6. **AIO pass** — Add definition sentence for key concept, name the framework, include numbered steps, add "Where to Start" section.
7. **Infographic** — Generate 1–3 SVG infographic images for the article's key points: the main framework, any data/benchmarks, and complex multi-step workflows. Style: dark `#17181d` background, `#edd86e` gold titles, Roboto Mono font, colored box borders (green/amber/red/purple/blue per topic). Use Python SVG generation matching the pattern in `public/infographics/`. Save SVGs to `public/infographics/articleN-description.svg`. Embed in markdown with `![Alt text describing the diagram](/infographics/filename.svg)` immediately after the relevant section header. Placement rules: framework overview after the "Frame the Model" section; data/benchmarks inline with the stat they illustrate; workflow diagrams before or after the step they depict.
8. **Action close** — Write 4–6 specific, numbered action steps. No vague advice.
9. **Bio anchor** — One-sentence positioning line. Format: *"Clinton James is a GTM Engineer who helps [ICP] [outcome]. If [problem], [CTA]."*
10. **Quality check** — Run through the checklist below.
11. **Save** — `content/blog/YYYY-MM-DD-slug.md`

## Quality Checklist

- [ ] Opens with a contrarian claim (not a statement of fact)
- [ ] Has a named framework with a memorable name
- [ ] At least one "Key insight:" callout per major section
- [ ] Ends with 4–6 numbered action steps
- [ ] Meta description written (150–160 chars, includes keyword)
- [ ] Primary keyword in H1 and first 100 words
- [ ] Minimum 2 internal links to clintjeez.com content
- [ ] Bio anchor included
- [ ] Mapped to one of the 5 content pillars
- [ ] AIO: definition sentence, named framework, numbered steps, "where to start" section
- [ ] Infographic: at least 1 SVG infographic embedded after the framework section; data/benchmark charts at relevant stats; workflow SVGs before the step they depict. All saved to `public/infographics/`

## Output Template

See `content/blog/_template.md`
