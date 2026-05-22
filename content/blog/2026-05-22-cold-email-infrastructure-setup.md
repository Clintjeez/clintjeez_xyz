# The Cold Email Infrastructure Setup That Lands in Primary Inboxes

*Pillar: 2 — GTM Engineering & Infrastructure | ICP: B2B founders doing outbound | Keyword: cold email infrastructure, cold email deliverability setup | Date: 2026-05-22*

**Meta description:** Most cold email advice focuses on copy. The real reason emails go to spam is infrastructure. Here's the complete technical setup that lands in primary inboxes.
**Slug:** cold-email-infrastructure-setup

---

Most cold email advice is about copy. Subject lines. Personalization. Follow-up sequences. Opening hooks.

None of that matters if your email is sitting in a spam folder.

The majority of founders doing outbound have a deliverability problem, not a copywriting problem. Their emails aren't being ignored — they're not being seen. They're landing in promotions, spam, or being silently rejected by mail servers before they ever reach an inbox.

The average cold email reply rate is 5.8%. The founders running properly engineered cold email infrastructure are seeing 15–25% reply rates on the same message quality. The gap isn't the copy. It's the infrastructure.

This article covers the complete technical setup — domains, mailboxes, warmup, sending infrastructure, enrichment, and the sequencing system — that makes cold email actually work.

---

## The Cold Email Infrastructure Stack

A cold email infrastructure is the technical system that manages how emails are sent, from which accounts, across which domains, with what warmup state, to which verified contacts — so that emails land in primary inboxes at scale.

The components are:

1. **Sending domains** — separate from your main domain
2. **Mailbox setup and warmup** — Google Workspace or Microsoft 365 accounts
3. **Lead data and enrichment** — contact sourcing and verification
4. **Sequencing platform** — the sending tool
5. **Orchestration** — connecting everything via Clay and n8n

Each component has failure modes. Most founders skip two or three of them and wonder why their reply rate is 0.8%.

**The key insight:** Cold email infrastructure is not a collection of tools. It's a system. Every component depends on the one before it. Bad domains kill good copy. Unverified lists kill good domains. Skipping warmup kills everything.

---

## Component 1: Sending Domains

Never send cold email from your primary domain. A single spam complaint on your primary domain and your entire company email reputation takes the hit.

The correct setup: buy 3–5 secondary domains per active sender. If you're running one outbound sequence yourself, you need a minimum of 3 domains. If you're running campaigns with 3 senders, you need 9–15 domains.

**Domain naming conventions that don't trigger filters:**

- `get[yourcompany].com`
- `try[yourcompany].com`
- `[yourcompany]hq.com`
- `[yourcompany]app.com`

Avoid hyphens. Avoid obvious cold email signals like "outreach" or "sales" in the domain.

**DNS records that are non-negotiable:**

Every sending domain needs all three of these configured before sending a single email:

- **SPF** (Sender Policy Framework) — tells receiving servers which IPs are authorized to send from your domain
- **DKIM** (DomainKeys Identified Mail) — cryptographic signature that proves the email wasn't tampered with in transit
- **DMARC** (Domain-based Message Authentication Reporting) — tells receiving servers what to do when SPF or DKIM fail; also generates reports on your domain's sending health

Without all three, your emails will fail authentication checks at major mail providers. Gmail and Outlook are now rejecting bulk senders who fail these checks at the connection level — your email never even reaches the spam folder.

**The key insight:** SPF, DKIM, and DMARC are not optional configuration steps. They are the authentication layer that proves to receiving servers that you are who you say you are. Skip them and you're sending anonymously, and mail servers treat anonymous senders the same way you'd treat an unsigned letter.

---

## Component 2: Mailbox Setup and Warmup

After domains, set up one or two Google Workspace mailboxes per domain. Use real-looking names — first.last@yourdomain.com, not info@ or contact@. Role-based addresses (info, contact, team) trigger spam filters.

**Warmup is not optional.** A brand new mailbox that immediately starts sending 50 cold emails per day will be flagged within 72 hours. Mail providers monitor sending velocity, complaint rates, and engagement patterns. A mailbox that goes from zero to high volume instantly looks like a compromised account.

The warmup process:

- **Days 1–7:** Send 5–10 emails per day, automatically, to other warmed mailboxes that reply to and engage with your content. Tools like Instantly's warmup network or Smartlead's warmup pool handle this automatically.
- **Days 8–14:** Ramp to 15–20 emails per day. Monitor spam placement scores.
- **Days 15–21:** Ramp to 25–30 emails per day.
- **Day 21+:** The mailbox is warmed. Cap sending at 30–40 cold emails per day per mailbox. Never exceed 50.

The math: if you want to send 300 cold emails per day, you need 8–10 warmed mailboxes across 4–5 domains. Plan for this before you start, not after you've burned your first domain.

Monitor warmup health weekly using Google Postmaster Tools (free) or Instantly's deliverability score. A sudden drop in reputation score means something is wrong — usually too many spam complaints or too-fast ramp.

---

## Component 3: Lead Data, Enrichment, and Verification

The cleanest infrastructure in the world won't save you if you're sending to bad data. A 10% hard bounce rate will tank your domain reputation faster than anything else.

**The enrichment stack:**

- **Apollo.io or LinkedIn Sales Navigator** — primary source for contact and company data
- **Clay** — the orchestration layer for enrichment. Clay pulls from 50+ data providers using waterfall logic: try source A first, if no result try source B, if no result try source C. This gets you 80–90% contact coverage vs. 40–60% from a single provider.
- **NeverBounce or ZeroBounce** — email verification before sending. Run every list through verification. Accept only "valid" results. Reject "catch-all" for cold email (catch-all domains accept all mail, so verification can't confirm deliverability).

**The enrichment workflow in Clay:**

1. Import your ICP company list (from Apollo, LinkedIn, or manual research)
2. Find contacts at those companies matching your buyer persona (title, seniority, department)
3. Waterfall enrich for email: try Apollo → Hunter → Findymail → Datagma in sequence
4. Verify all returned emails
5. Enrich company-level data: funding stage, headcount, tech stack, recent news
6. Export verified, enriched list to your sequencing tool

The company-level enrichment data becomes your personalization layer. A line like "Saw that [Company] just raised their Series A — congrats. We help [ICP descriptor] do X after a funding round" performs because it's true and specific, not because you're a good copywriter.

**The key insight:** Personalization at scale isn't about writing unique emails for each prospect. It's about enriching contact data well enough that a merge field creates genuine relevance. Clay makes this possible at the infrastructure level. Without it, you're choosing between personalization (slow, manual) and scale (generic, low reply rate). With it, you get both.

---

## Component 4: The Sequencing Platform

The sequencing tool sends the emails, manages the cadence, handles replies, and tracks performance. The two platforms that dominate the cold email infrastructure space for good reason: **Instantly** and **Smartlead**.

Both support:
- Multi-mailbox rotation (sends from different mailboxes in the same campaign to spread sending volume)
- Automatic warmup (integrated warmup pool that runs in the background)
- Deliverability monitoring
- A/B testing on subject lines and copy variants
- Reply detection and automatic sequence pause when someone replies

**Sending limits to live by:**

- Max 30–40 emails per day per mailbox
- No more than one follow-up email every 3–4 days
- Sequence length: 3 touches maximum for cold outreach (touch 1, touch 2 at day 4, touch 3 at day 8)
- Never send on Mondays before 9am or Fridays after 3pm

**The 3-touch sequence structure:**

- **Email 1:** Short, specific, personalized. One observed problem. One sentence on what you do. One CTA (reply or 15-min call).
- **Email 2 (Day 4):** Different angle on the same problem. Not a "just following up." Add a data point, a case study reference, or a specific question.
- **Email 3 (Day 8):** The close. "Didn't want to keep following up — if this isn't relevant right now, totally understand. If timing changes, I'll be here." This email gets replies from people who were interested but didn't respond.

Under 100 words per email. Always.

---

## Component 5: Orchestration with n8n

The fully engineered cold email infrastructure is not a set of tools running independently. It's a connected system orchestrated by n8n.

A working n8n orchestration for cold email:

1. **New lead enters Clay** → enrichment waterfall runs → verified contacts exported to a Google Sheet
2. **Google Sheet update** → n8n webhook triggers → contact pushed to Instantly campaign
3. **Reply detected in Instantly** → n8n webhook triggers → contact and reply pushed to HubSpot as a new deal, Slack notification fired to the inbox owner
4. **Positive reply** → n8n creates a HubSpot task for a follow-up call → Cal.com booking link sent automatically
5. **No reply after 3 touches** → contact marked "no response" in HubSpot → moved to a re-engage sequence to trigger 30 days later with a content piece

The result: a single lead goes from ICP identification → enrichment → verification → outreach → CRM → meeting booking without a single manual step.

---

## The Real-World Result: What This Infrastructure Produces

Before setting up proper infrastructure, a typical founder doing cold email manually sees:
- Open rate: 25–35% (often inflated by bot opens)
- Reply rate: 0.5–1.5%
- Meetings booked: 1–2 per month from 200 emails

After building the infrastructure outlined above:
- Open rate: 50–65% (primary inbox placement, real opens)
- Reply rate: 8–18%
- Meetings booked: 8–20 per month from the same volume

The copy didn't change. The message didn't change. The infrastructure changed — and the infrastructure is what determined whether anyone saw the message at all.

---

## Where to Start

1. **Buy 3 secondary domains** today. Register them, point DNS to Google Workspace or Microsoft 365, and configure SPF, DKIM, and DMARC records before touching anything else.
2. **Set up 2 mailboxes per domain** using real first.last format. Enable warmup immediately in Instantly or Smartlead.
3. **Let warmup run for 21 days.** Don't rush this. Use the time to build your lead list in Clay.
4. **Build your enrichment workflow in Clay.** Start with Apollo as your primary source, add one waterfall layer (Hunter or Findymail), and run all outputs through email verification.
5. **Write your 3-touch sequence.** Under 100 words per email. One problem per email. One CTA per email.
6. **Connect everything with n8n.** Start with the reply detection webhook → HubSpot deal creation. Build from there.

The infrastructure takes 3–4 days to set up and 21 days to warm. After that, it runs. The machine sends while you work on everything else. That's what cold email infrastructure is supposed to do — not require daily intervention, but compound over time as you add contacts, test copy variants, and optimize based on real reply data.

For the full technical walkthrough on building each component, see: [What Is a GTM Engineer](/blog/what-is-a-gtm-engineer)

---

*Clinton James is a Growth & GTM Engineer who builds cold email infrastructure that converts — from domain setup and warmup to Clay enrichment, n8n orchestration, and reply-to-meeting automation. If your cold email isn't landing in primary inboxes, [let's fix the infrastructure: cal.com/clintonjames/15min](https://cal.com/clintonjames/15min).*
