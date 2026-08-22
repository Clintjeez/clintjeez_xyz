# Stage 3: If Your Churn Is Above 5% — Stop Running Ads

**Series:** Why Your SaaS Isn't Growing — Stage 3 of 4
**Target length:** 3–4 min | ~550 words spoken
**Format:** Talking head, direct to camera
**Platforms:** TikTok · YouTube Shorts · Instagram Reels
**Source article:** clintjeez.com/blog/why-your-saas-isnt-growing

---

## HOOK (0–5s)
*[Dead serious. Slow. No fluff.]*

If your monthly churn is above 5%, stop spending money on acquisition.

You are not building a business. You are running a treadmill.

---

## PROMISE (5–20s)
*[Lean in slightly.]*

Most founders find out about churn the moment a user cancels. By then you are 30 days too late.

In this video I'll show you how to see churn coming — weeks before it happens — and the system that acts on that signal automatically.

---

## THE PROBLEM (20s–1min)
*[Punch the stats.]*

Here's what most SaaS founders think churn is.

A user decides your product isn't worth it. They cancel. You lose them.

That's voluntary churn. And most people only ever try to fix that.

But there's a second type — involuntary churn. Users who leave because a payment failed and nobody caught it. No decision made. No complaint. Just a failed Stripe charge, a dunning email that went to spam, and a user who moved on because you never followed up.

Involuntary churn represents 22% of all SaaS churn on average. Almost a quarter of your churned users didn't choose to leave — they just weren't caught.

That's entirely preventable with a smart retry logic system. And most SaaS companies have never built one.

But the bigger problem — the one that's harder to fix — is that churn is almost never sudden.

---

## THE FRAMEWORK (1min–2min 30s)
*[Step by step. Clear.]*

Churn is a slow decline in engagement that shows up in your data weeks before the cancellation. The companies that win at retention build systems that act on that signal — not the cancellation event.

Here's how to build the system.

**Step 1 — Build a customer health score.**
In PostHog, define health as a composite of three signals: login frequency over the last 30 days, number of core features used, and support ticket volume. Weight them however makes sense for your product. Every user gets a score.

**Step 2 — Define your at-risk threshold.**
Look at users who churned in the last 90 days. What was their health score 30 days before they cancelled? That's your at-risk threshold. Any current user below that number is showing pre-churn behavior right now.

**Step 3 — Build the automated alert.**
In n8n, build a workflow that runs daily. Any user whose health score drops below the threshold fires a Slack notification to you — or your CS motion — with their name, their usage summary, and their account value. You get a list of at-risk users every morning before they've even thought about cancelling.

That's the early warning system. Most SaaS companies find out about churn when the user cancels. You find out 30 days earlier.

---

## INVOLUNTARY CHURN FIX (2min 30s–3min 15s)
*[Quick. Tactical.]*

And for involuntary churn — this is a two-day fix.

In Stripe, configure smart retry logic — don't just retry failed payments on a fixed schedule. Retry on weekdays, not weekends. Retry at different times of day. Send a dunning sequence that starts with "your card was declined" before it becomes "your account has been cancelled."

22% of your churn is recoverable revenue. There's no reason not to recover it.

---

## KEY TAKEAWAY (3min 15s–3min 40s)
*[One slow sentence. Eye contact.]*

Churn is almost never sudden. It's a slow decline in engagement that appears in your data weeks before the cancellation.

Build a system that sees it early. Act on the signal. Not the event.

---

## ABOUT ME (3min 40s–4min)
*[Conversational, not scripted-sounding.]*

I'm Clinton James — Growth & GTM Engineer. I've spent 9 years building retention systems, churn diagnostics, and full lifecycle infrastructure for SaaS companies. I diagnose what's breaking and ship the fix. Everything I share here is a real system — not a framework from a blog post.

---

## CTA (4min–4min 15s)
*[Fast. Point.]*

Last video in this series covers pricing and revenue expansion — the most overlooked growth lever in early-stage SaaS. Follow, you don't want to miss it.

Full article with the diagnostic framework is in the description.
