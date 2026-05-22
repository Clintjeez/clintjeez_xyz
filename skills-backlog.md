# Skills Backlog

Skills are built organically as recurring workflows emerge.
When a workflow gets used 3+ times, it graduates into `.claude/skills/skill-name/SKILL.md`.

---

## Queue (Priority Order)

### 1. `blog-writer`
Research + write a full SEO/AIO-optimized blog article in Clinton's voice.
**Inputs:** Topic or target keyword, content pillar, target ICP
**Output:** Complete article ready to publish, saved to `content/blog/`

### 2. `linkedin-post-generator`
Generate 3 LinkedIn posts (rotating types) from a topic or source article.
**Inputs:** Source article or topic, desired post types
**Output:** 3 ready-to-publish posts with hooks, body, and CTA

### 3. `x-post-generator`
Generate 3 X posts or threads from a topic or source article.
**Inputs:** Source article or topic
**Output:** 3 posts (mix of single tweet and thread formats)

### 4. `repurpose-engine`
Take one blog article and produce all 6 derivative content pieces.
**Inputs:** Published blog article
**Output:** 3 LinkedIn posts + 3 X posts, ready to schedule

### 5. `weekly-calendar`
Plan the full week's content calendar given 2 topic inputs.
**Inputs:** 2 primary topics for the week, current content pillar rotation
**Output:** Day-by-day content plan with article titles, post angles, and scheduling slots

### 6. `competitor-monitor`
Research what competitors posted this week, identify gaps and angles Clinton should own.
**Inputs:** List of competitor handles, timeframe
**Output:** Summary of competitor content + 3 gap angles Clinton can publish on

### 7. `icp-research`
Deep-profile a specific company or founder as a potential client.
**Inputs:** Company name / URL / LinkedIn profile
**Output:** ICP profile with diagnosis of likely growth bottleneck + cold email angle

### 8. `youtube-script`
Write a full YouTube script (any type) from a topic or blog article.
**Inputs:** Topic or source article, video type (tutorial / framework / audit / case study)
**Output:** Full script with hook, promise, core content, takeaway, and CTA

### 9. `cold-email-writer`
Write a personalized cold email + 3-touch follow-up sequence for a specific prospect.
**Inputs:** Prospect name, company, role, diagnosed pain point
**Output:** 3-email sequence (day 1, day 4, day 8) ready to send

### 10. `landing-page-copy`
Write conversion copy for any of Clinton's 3 service tiers.
**Inputs:** Tier (Sprint / Build / Retainer), target ICP, key pain point to lead with
**Output:** Full landing page copy: headline, subhead, problem, solution, deliverables, CTA

### 11. `reddit-content`
Find relevant subreddits + craft value-first posts that build authority without being spammy.
**Inputs:** Topic or content pillar, target subreddits (optional)
**Output:** 2–3 Reddit post drafts with context on which subreddits to post in and timing

### 12. `client-proposal`
Generate a full client proposal for any service tier from a discovery call summary.
**Inputs:** Client name, company, call notes, tier (Sprint / Build / Retainer)
**Output:** Complete proposal document ready to send

---

## How to Graduate a Skill

1. Use the workflow manually 3+ times
2. Note what inputs are always needed and what the output always looks like
3. Create `.claude/skills/skill-name/SKILL.md` with the documented pattern
4. Reference in CLAUDE.md if it becomes a core daily workflow
