# LinkedIn Posts — "The Unit Economics Scorecard: CAC, LTV, NRR for SaaS"
*Source: clintjeez.com/writings/unit-economics-scorecard-cac-ltv-nrr-saas*
*Date: 2026-10-27 | Pillar: 1 — Systems Thinking for Growth*

---

## Post 1 — Framework
*Type: Framework | Rotate: use first*
*Image: [post-1-framework.png](assets/2026-10-27-unit-economics-scorecard/post-1-framework.png) — 4:5 portrait, 1080×1350*

Doubling ARR doesn't mean you're winning.

ARR tells you the size of the business. It tells you nothing about whether the business is solvent.

A company can go from $1M to $2M in twelve months and still run out of cash by Q3.

That's why every growth decision should run through the Unit Economics Scorecard. Four metrics, each with a threshold:

→ CAC — the fully loaded cost to acquire one paying customer. Ads, tools, commissions, salaries. All of it.
→ LTV — the total gross profit a customer generates before they churn. Target 3:1 against CAC. Below 1:1, you lose money on every customer.
→ CAC Payback Period — months until a customer repays their acquisition cost. Under 6 is elite. Over 18 is Danger Zone.
→ NRR — revenue retained from existing customers after expansion, downgrades, and churn. Under 100%, you're on a treadmill. Over 120%, you compound with zero new spend.

The Scorecard is a gate, not a report.

If any one metric sits in the Danger Zone, scaling spend doesn't grow the business. It scales the problem.

Full breakdown with formulas → clintjeez.com/writings/unit-economics-scorecard-cac-ltv-nrr-saas

#SaaS #UnitEconomics #GrowthEngineering

---

## Post 2 — Story / Diagnostic
*Type: Story | Rotate: use second*
*Image: [post-2-story.png](assets/2026-10-27-unit-economics-scorecard/post-2-story.png) — 1:1 square, 1080×1080*

The ARR chart said rocket ship. The cohort data said life support.

My co-founder Dare and I were evaluating a SaaS acquisition. ARR had doubled from $1M to $2M in twelve months.

"They're crushing it," Dare said.

Then I pulled their cohort telemetry. Five minutes later, the story changed.

→ Sales and marketing spend: roughly $3 for every $1 of recurring revenue generated
→ Average customer lifespan: four months
→ CAC Payback Period: longer than customers actually stayed

The math was simple and brutal. They were paying to acquire customers who left before paying back what they cost.

The growth wasn't compounding. It was capital being converted into a leaking cohort.

We priced the deal on the real unit economics instead of the ARR chart. The asking valuation stopped making sense, and we passed.

The lesson: revenue growth is trivially easy to manufacture. Throw enough money at ads and commissions and the top line moves.

Solvent growth is engineered. You only see the difference if you instrument the telemetry to check.

What's the first metric you look at when someone shows you a growth chart?

#SaaS #UnitEconomics #StartupFinance

---

## Post 3 — Data Drop
*Type: Data Drop | Rotate: use third*
*Image: [post-3-data.png](assets/2026-10-27-unit-economics-scorecard/post-3-data.png) — 1.91:1 landscape, 1200×628*

Two SaaS companies. Same $100K customer cohort. Zero new acquisition spend for three years.

Company A runs at 90% NRR. Company B runs at 120%.

End of year 3:
→ Company A: $72.9K
→ Company B: $172.8K

Same starting point. A 2.4x gap.

The only variable that moved was retention and expansion. That's what Net Revenue Retention measures: (Starting MRR + Expansion − Downgrades − Churn) ÷ Starting MRR.

Below 100%, existing customers shrink revenue faster than they grow it. You're forced to acquire new customers just to stay flat.

Above 100%, your existing base spends more every year. The business compounds even when marketing goes quiet.

Pushing NRR up isn't a renewal-call problem. It's an architecture problem.

Instrument usage-based pricing triggers — API calls, database rows, active seats — so revenue expands automatically as customers grow.

If your NRR is under 100%, stop scaling acquisition and fix retention first. Every new customer is water poured into a leaking bucket.

Pull your trailing 12-month NRR this week. What's the number?

#SaaS #NetRevenueRetention #GrowthEngineering

---

## Post 4 — Tactical Tip
*Type: Tactical | Rotate: use fourth*
*Image: [post-4-tactical.png](assets/2026-10-27-unit-economics-scorecard/post-4-tactical.png) — 9:16 vertical, 1080×1920*

Recalculate your CAC this week. Most founders underreport it, often by half.

Here's why: they divide ad spend by new customers and call it CAC.

That's not CAC. That's ad cost per customer.

Fully loaded CAC includes everything that exists to acquire a customer:

1. Paid ad spend across every channel
2. Sales and marketing salaries, pro-rated for time spent on acquisition
3. Sales commissions and bonuses
4. GTM software stack — HubSpot, Apollo, Clay, Instantly, whatever you run
5. Agency, contractor, and content production costs

Add it up for your last full quarter. Divide by new paying customers acquired in that quarter.

Then run the payback check: CAC ÷ (monthly ARPA × gross margin %).

A $1,200 CAC on a $100/month customer at 100% margin pays back in 12 months. Over 18 months, you're funding growth out of cash reserves.

Why it matters: an understated CAC is worse than no CAC at all. It tells you a channel is profitable when it isn't, and you scale the wrong thing.

Full Scorecard with benchmarks → clintjeez.com/writings/unit-economics-scorecard-cac-ltv-nrr-saas

#SaaS #UnitEconomics #RevOps
