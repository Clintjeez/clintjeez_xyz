# Offer Framework — The 3 Levers

Governs every piece of outreach Clinton sends: cold email, cold DM, LinkedIn, X. Use this before writing any outreach copy — it decides *what's being offered*, not just how it's worded.

Full voice/structure rules still apply from `.claude/rules/communication-style.md`. This file decides the offer; that file decides the words.

---

## The 3 Levers

| Lever | What it is | Where it's used |
|---|---|---|
| **1. Service Lead Magnet** | A free, derivative deliverable directly tied to a paid outcome — built and attached/described in the outreach itself | Cold email/DM to a specific, researched prospect |
| **2. Guarantee** | "If we don't deliver X, you get Y" — differentiated, tied to the diagnosed metric | Sales call only, great-fit prospects only |
| **3. Easy Yes** | A short, specific deliverable offered on request — lower production cost than Lever 1, lower reply rate | High-volume outreach, or as a fallback when Lever 1 gets no reply |

**Rule:** Never stack all three in one message. One lever per touch. Lever 1 or 3 opens the conversation. Lever 2 closes the sale.

---

## Lever 1: Service Lead Magnets

Not an ebook. Not "free consultation." Not "free audit" as a vague offer — it has to already be *done* or scoped to one specific thing, mapped to the exact growth system the prospect's problem signal points to.

**Rule:** Pick the ONE row that matches their visible problem. Never send more than one. Frame it as already-done work ("Built you a...", "Here's the..."), never as a future favor ("I could build you...").

| Growth System | Problem Signal to Watch For | Free Derivative | Build Time |
|---|---|---|---|
| Discovery Engine (SEO/AIO) | Not ranking, invisible in AI answer engines | 5 high-intent keywords they're missing + one AIO citation fix on their top page | 20–30 min |
| Pipeline Machine (Lead gen) | Manual/inconsistent outbound, no enrichment | Sample ICP list — 15–20 enriched leads built in Clay, ready to import | 20–30 min |
| Activation Accelerator (Onboarding) | Ghost users, no aha moment, signups don't return | 3-email onboarding sequence outline mapped to their actual product flow | 30–40 min |
| Conversion Engine (Trial-to-paid) | Trial graveyard, signups don't convert | Trial flow audit — exact drop-off point named + the one fix | 20–30 min |
| Retention Shield (Churn) | Silent churn, no early warning | 2 early-warning PostHog/Mixpanel events they should instrument, with alert thresholds | 20–30 min |
| Revenue Architect (Pricing) | Pricing guesswork, flat conversion on pricing page | Rewrite of their pricing page headline/tier framing + one CRO fix | 20–30 min |
| Viral Growth Loop (Referral) | No referral engine, growth is all outbound | One referral mechanic mapped to their specific product (trigger + incentive) | 20–30 min |
| Revenue Recovery (Win-back) | No system for churned accounts | 2-email win-back sequence for their churned segment | 20–30 min |

**Why this works:** it's the diagnostic-lens brand principle applied to outreach itself — you're proving "diagnose before prescribing" in the first message instead of claiming it. It also directly demonstrates the exact tool/skill (Clay, PostHog, copywriting) the paid tier would use at scale.

**Cost of this lever:** doesn't scale to blind list volume. Requires real research per prospect (5–15 min minimum before the 20–40 min build). Use it on a shortlist, not a spray list.

---

## Lever 2: Guarantee / Performance

Reduces decision friction at the close — not the open. Must be differentiated (never "dedicated account management" or generic satisfaction language) and tied to the specific metric already diagnosed on the call.

**Rule:** Only offered live, on the sales call, only to prospects who are clearly great-fit (matches ICP in `context/icp.md`, real problem signal confirmed, budget plausible). Never in a cold email or DM — a guarantee in the opener reads as desperation, not confidence.

| Tier | Guarantee | Why This Framing |
|---|---|---|
| **$366 Sprint** | None. | Already the lowest-risk, proof-first tier. Adding a guarantee here dilutes the guarantee's power where it's actually needed — at the tiers with real commitment. |
| **$3,500 Growth System Build** | "If the metric we diagnose on this call doesn't move within 30 days of shipping the fixes, I keep working the following month at no charge until it does." | Tied to the specific number named on the call, not vague "satisfaction." Forces the diagnosis to be sharp — you're underwriting your own accuracy. |
| **$1,333/mo Retainer** | "If I don't ship 3 tested experiments every month, that month is free." | Ties directly to the concrete monthly output already promised in `services.md` — no new promise invented, just a consequence attached to the existing one. |

**Delivery rule:** State it once, plainly, near the end of the call — after the diagnosis, before the close. Don't lead with it, don't repeat it in the follow-up email as a selling point (it can be restated as confirmation, not as a hook).

---

## Lever 3: Make It Easy to Say Yes

Lower production cost than Lever 1, lower perceived value, but far higher reply rate than generic "let's chat" outreach. Use when volume outreach makes a full Lever 1 build impractical per-lead, or as the Day 4 fallback when a Lever 1 offer gets no reply.

**The deliverable:** a 3-minute Loom reviewing one specific, visible thing — their pricing page, their signup flow, their landing page headline. Not a call. Not a report. One video, one fix named.

**Template:**
```
Want me to record a 3-min Loom on [specific page/flow] — I'll point out the
first thing I'd fix. No call, no pitch, just send it over.
```

**Why it beats "we do X" messaging:** it's a concrete, bounded, already-in-motion offer ("I'll record it") vs. an open-ended ask ("let's hop on a call"). The prospect isn't agreeing to a sales process, just to receiving a video.

**Note:** this is the same mechanic already used for testimonial capture in `content/campaigns/48hr-sprint/cold-dm-playbook.md` — same tool (Loom), same length (3–5 min), redirected from post-delivery testimonial to pre-conversation opener.

---

## Decision Tree — Which Lever, When

| Scenario | Lever to Lead With |
|---|---|
| Cold email/DM to a specific, researched prospect (low volume, high research time) | **Lever 1** — build the derivative, attach or describe it in the message |
| Cold DM/email at volume (10–20/week, limited research time per lead) | **Lever 3** — the 3-min Loom offer, no research overhead beyond finding one visible thing |
| Lever 1 sent, no reply after 4 days | Follow up with **Lever 3** instead of repeating the same ask |
| Prospect replies, gets on a call, is confirmed great-fit | **Lever 2** — guarantee stated once, near the close |
| Prospect replies but is a marginal fit | No Lever 2. Close on the $366 Sprint only — let the sprint itself be the proof, not a guarantee. |

---

## Relationship to the 48-Hour Free Sprint Campaign

`content/campaigns/48hr-sprint/` is a separate, time-boxed campaign (3–5 spots, exchanged for case studies/testimonials) — it gives away the entire Tier 1 service, not a derivative. That's intentional and distinct from Lever 1: it's a proof-layer acquisition play, not the standing outreach offer.

**Once the 5 sprint slots are filled**, all outreach reverts to this framework — Lever 1 or 3 as the opener, Lever 2 reserved for the sales call. Don't keep offering the full free sprint indefinitely; it trains prospects to expect free implementation, not just free diagnosis.

---

## Quality Checklist Before Sending Any Outreach

- [ ] Exactly one lever used in this message — not stacked
- [ ] If Lever 1: the derivative is already built/scoped, not promised as future work
- [ ] If Lever 1: it maps to a specific, named growth system — not generic
- [ ] If Lever 2: only said out loud, on a call, to a confirmed great-fit prospect — never written in cold outreach
- [ ] If Lever 3: bounded to one specific page/flow, framed as already-in-motion
- [ ] Follows `.claude/rules/communication-style.md` tone rules (direct, specific, no hedging)
