# Upwork Application — Customer.io Lifecycle Specialist (AU Recruitment/Workforce Tech)

## Cover Note

You've already done the hard part — mapping the full client lifecycle (onboarding, first-booking conversion, repeat bookings, retention, reactivation, high-intent behavior, long-term development). That's the piece most teams skip, and it's exactly why I want in: you need someone who can translate a mapped lifecycle into working automation, not someone who needs the lifecycle explained to them.

I'm a Growth & GTM Engineer — I build the technical infrastructure between product/service and revenue: event tracking, behavioral triggers, segmentation logic, and the automation platform that ties it together. My hands-on build experience is in HubSpot workflows and n8n orchestration rather than Customer.io specifically, but the underlying logic is the same system: events → attributes → segments → branching campaigns → exit conditions. I'd expect to be productive in Customer.io within the first week, and I'd rather tell you that directly than overstate it.

**Answers below.**

---

### 1. How much hands-on experience do you have with Customer.io?

Direct hands-on time in Customer.io itself is limited — my deep automation-building experience is in HubSpot (workflow builder, lead scoring, lifecycle stages) and n8n (event-driven orchestration connecting product/behavioral data to CRM and email actions). The concepts transfer directly: Customer.io's event/attribute model, segment-based branching, and exit conditions map almost 1:1 to what I've built in HubSpot + n8n. I'm not going to claim years of Customer.io-specific tenure I don't have — but if you need someone who understands *why* a journey is structured the way it is (not just how to click the builder), that's the actual gap you're trying to fill, and it's not tool-specific.

If a short paid trial task is useful to de-risk this for you, I'm open to that before any ongoing commitment.

### 2. Most sophisticated automated journey you've built — triggers, branching, behavioral logic

**SaaS onboarding activation system** (HubSpot + n8n + PostHog):

The problem: a SaaS client's activation rate was 12% — most signups never reached their "aha moment" and went cold within 48 hours.

**Instrumentation:** Used PostHog to define and track the specific in-product event marking activation (not signup, not login — the actual value moment), plus supporting events for the 3 steps leading up to it.

**Trigger logic:** n8n watched for a "signed up, no [key action] within 24 hours" condition and pushed the contact + behavioral state into HubSpot with the missing-step data attached as a property.

**Branching:** HubSpot workflow branched on *which* step the user stalled at — three different behavioral segments, each getting a different email: a stalled-at-step-1 user got a "here's the 2-minute setup" nudge, a stalled-at-step-2 user got a use-case-specific walkthrough, a stalled-at-step-3 user (closest to activation) got direct outreach flagged to the founder for a personal touch.

**Exit conditions:** Any user who fired the activation event mid-sequence was pulled out immediately and rolled into a separate "welcome, here's what's next" flow — no one kept getting nudged toward something they'd already done.

**Result:** Activation went from 12% to 38% over the engagement.

The pattern is the same one I'd bring to your lifecycle: instrument the real behavioral signal first, trigger on inaction as much as action, branch on *why* someone's stuck rather than treating the whole segment the same, and build exit logic so people don't get messaged for things they've already done. For a recruitment/workforce business, that likely means branching win-back and repeat-booking sequences on booking history and role/skill-category behavior rather than generic time-since-last-activity — happy to get specific once I see your event data.

---

*Reminder: verify the case-study numbers above (12% → 38% activation) against the actual client engagement before submitting — pull the real source if it's documented elsewhere, since this pulled from the published case-study summary on clintjeez.com.*
