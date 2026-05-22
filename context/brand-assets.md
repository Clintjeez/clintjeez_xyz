# Brand Assets, Media & Style Guide

*Extracted from clintjeez.xyz codebase — May 2026*
*Use this as the visual reference when generating content, writing image alt text, describing screenshots, or briefing designers.*

---

## Color System

Extracted directly from `globals.css` and component files.

### Primary Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Background Dark** | `#17181d` | Page background, body |
| **Background Card** | `#282c34` | Glassmorphism card fill |
| **Background Mid** | `#222326` | Secondary surfaces |
| **Glass Border** | `#1d1d21` | Card borders at rest |

### Text Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Text Primary** | `#ffffff` | Body text, headings |
| **Text Secondary** | `#bfbfbf` | Subtext, emphasized inline text |
| **Text Muted** | `#777778` | Supporting text, labels, captions |

### Accent / Brand Color

| Name | Hex | Usage |
|------|-----|-------|
| **Gold / Yellow** | `#edd86e` | CTA borders, arrow icons, highlights — the signature brand color |
| **Gold Glow** | `rgba(237, 216, 110, 0.16)` | Radial glow behind hero section |
| **Cursor Glow** | `rgba(255, 254, 241, 0.15)` | Interactive warm-white radial on cursor move |

### Interaction States

| State | Style |
|-------|-------|
| Card hover | `border: #ffffff44` + `box-shadow: 0 7px 50px 10px #000000aa` + `scale(1.01)` |
| Button hover | Background `#484848` |
| Active pagination | `#777778` |
| Default pagination | `#fafafa` |

### Color Usage in Content

When writing content that references the brand visually:
- **Dark** = authoritative, technical, focused. No white backgrounds.
- **Gold (`#edd86e`)** = the attention signal. Use for CTAs, highlights, key numbers.
- **Muted gray (`#777778`)** = secondary context. Never for primary claims.
- The brand palette is **dark mode only**. No light theme exists.

---

## Typography

### Fonts in Use

| Font | Type | Source | Usage |
|------|------|--------|-------|
| **Roboto Mono** | Monospace | Google Fonts | Primary body font — all body text, UI copy, code |
| **Excalifont** | Handwritten/Display | `/public/fonts/Excalifont-Regular.woff2` | Hero accent text, casual callouts, hand-drawn feel |

### Type Scale (from component usage)

| Context | Size | Weight | Color |
|---------|------|--------|-------|
| Hero name | 24px (md) | Bold | `#bfbfbf` |
| Hero subtitle | 22px (md) | Normal | `#777778` |
| Body text | 18px (lg) / 14px (mobile) | Normal | `#777778` |
| Inline emphasis | Same as parent | Italic + underline | `#bfbfbf` |
| CTA button | 14px (md: 12px) | Bold | `#bfbfbf` |

### Type Rules for Content

- **Roboto Mono = technical authority.** The monospace font signals precision and engineering — not startup fluff.
- Headings in content should feel like system labels, not magazine titles.
- Avoid decorative fonts in content. The `Excalifont` is for the site UI only.

---

## Visual Style System

### Core Aesthetic

**Dark. Technical. Precise.**

The site is a dark-mode engineering terminal, not a marketing landing page. The visual language communicates: this person ships systems, not decks.

### Glassmorphism Card Style

All cards use the `.glassmorphism-bg` pattern:
- Background: `linear-gradient(rgba(40,44,52,1) 0%, rgba(40,39,41,0.5) 80%)`
- Border: `1px solid #1d1d21` (resting) → `1px solid #ffffff44` (hover)
- Blur: `backdrop-filter: blur(7px)`
- Shadow: `0 7px 15px 5px #28282856`
- Radius: `0.7rem`
- Hover: light sweep animation (::before) + scale(1.01)

### Background Pattern

A tile SVG pattern (`/public/tile_bg.svg`) repeats at `142px × 71px` over the dark base, creating a subtle grid texture. The gold radial cursor effect sits above this.

### Motion / Animation

| Animation | Duration | Purpose |
|-----------|----------|---------|
| Marquee scroll | 25s linear infinite | Stack/logo ticker |
| Pulse dot | 1.5s ease-in-out | Status indicators |
| Card hover sweep | 0.9s | Glassmorphism light effect |
| Card transform | 0.5s | Scale + border on hover |

---

## Media Assets

### Photos

| Asset | Path | Usage |
|-------|------|-------|
| **Profile photo** | `/public/clinton.png` | Site favicon, OG image, hero section, social profile |

*Note: Same photo used as favicon and OG image at 1200×630. When describing Clinton in content: professional, technical, direct-to-camera. No stock photos.*

### Tech Stack Logos

Available as SVGs in `/public/logos/`:

`apollo.svg` · `claude.svg` · `hubspot.svg` · `javascript.svg` · `make.svg` · `n8n.svg` · `nextjs.svg` · `nodejs.svg` · `posthog.svg` · `react.svg` · `rust.svg` · `solidity.svg` · `supabase.svg` · `typescript.svg` · `web3.svg` · `zapier.svg`

Use these when referencing the tech stack in visual content (blog thumbnails, LinkedIn carousels, YouTube thumbnails).

### Assets Still Needed

- [ ] **Brand logo / wordmark** — a ClintJeez logo mark separate from the profile photo
- [ ] **LinkedIn banner** — 1584×396px, dark theme, gold accent
- [ ] **YouTube channel art** — 2560×1440px
- [ ] **YouTube thumbnail template** — 1280×720px, dark bg, bold text overlay
- [ ] **LinkedIn post image template** — branded card for data drops and framework posts
- [ ] **X/Twitter header** — 1500×500px

---

## Social Profile Meta

| Platform | Handle | Profile URL |
|----------|--------|-------------|
| Site | clintjeez.xyz | https://clintjeez.xyz |
| LinkedIn | clinton-james-9ba608b0 | linkedin.com/in/clinton-james-9ba608b0 |
| X / Twitter | @ClintJeezz | x.com/ClintJeezz |
| GitHub | Clintjeez | github.com/Clintjeez |
| YouTube | — | *[Add channel URL when launched]* |
| Medium | clintjeez | medium.com/@clintjeez |
| Cal.com | clintonjames | cal.com/clintonjames/15min |

### Open Graph / SEO Meta (from `seo.ts`)

```
Site name:     Clinton James
Default title: Clinton James | Growth & GTM Engineer
Description:   Growth & GTM Engineer with 9+ years of experience. I build technical
               infrastructure between product and revenue — SEO/AEO, Lead Gen, PLG,
               Sales Automation, CRO, and Custom Integrations for SaaS founders.
OG image:      https://clintjeez.xyz/clinton.png (1200×630)
Twitter card:  summary_large_image
Twitter:       @ClintJeezz
```

---

## Content Visual Guidelines

### Blog Post Thumbnails

When briefing or generating thumbnail concepts:
- Background: `#17181d` dark base
- Headline: white or `#bfbfbf`, Roboto Mono or bold sans
- Accent element: gold `#edd86e` line, number, or highlight
- Style: minimal, no stock photos, no clipart, data/diagram elements preferred
- Tech logo stack where relevant (pull from `/public/logos/`)

### LinkedIn Post Images

- Dark background (`#17181d` or `#222326`)
- Glassmorphism card style for data/stats
- Gold `#edd86e` for the key number or headline
- Monospace font where possible to stay on-brand
- No gradients with bright colors — stay within the dark/gold palette

### YouTube Thumbnails

- High contrast: white or bold yellow text on dark background
- Face/photo should be present on talking-head videos
- One bold claim or number — not a sentence
- Tech logos in corner when relevant
- Avoid red arrows and clickbait design patterns — the brand is technical, not hype

### Alt Text Convention

When writing alt text for site images:
- Be specific and descriptive
- Include the keyword naturally if it fits
- Never use "image of" or "photo of" — just describe what it shows
- Example: "Clinton James, Growth & GTM Engineer, at his desk" not "photo of man"

---

## Brand Do's and Don'ts

**Do:**
- Dark backgrounds always
- Gold `#edd86e` for the single most important visual element
- Monospace / technical typography
- Clean, minimal layouts — white space is intentional
- Use the tech stack logos when showing the stack in visuals

**Don't:**
- Light mode or white backgrounds
- Bright, saturated color palettes outside the brand colors
- Stock photo people
- Decorative or script fonts in content
- Cluttered layouts with many competing elements
- Blue or green CTA buttons — the brand CTA is gold-bordered on dark
