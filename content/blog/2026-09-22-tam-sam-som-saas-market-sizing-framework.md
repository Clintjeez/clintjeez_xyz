# The Market Sizing Filter Stack: TAM, SAM, SOM for SaaS

*Pillar: 1 — Systems Thinking for Growth | ICP: Early-stage SaaS founders (pre-Series A) | Keyword: SaaS market sizing framework | Date: 2026-09-22*

**Meta description:** Most SaaS TAM slides are vanity metrics. Learn the TAM, SAM, SOM market sizing framework growth engineers use to find real product-market fit before you raise.
**Slug:** tam-sam-som-saas-market-sizing-framework

---

Most founders don't have a market sizing problem. They have a data-filtering problem — and a $50B TAM slide is what happens when you skip the filter entirely.

I was grabbing coffee with a founder a few weeks back, prepping for his Series A. He flipped to slide three: a massive graphic, concentric circles, "$50B Total Addressable Market" stamped across the middle. "Even if we capture 0.1% of this," he said, "we're a $50M company."

A VC looking at that slide isn't thinking ambitious. They're thinking: this founder hasn't run a single query against his own market. And if he tries to build a growth stack to actually chase a $50B TAM on day one, he burns his runway in six months building for a market he can't reach yet.

Here's the framework that fixes it — and the retention math that tells you when you've actually found product-market fit.

---

## The Market Sizing Filter Stack

**The Market Sizing Filter Stack treats your total market like an unindexed database: TAM is the whole table, SAM is a WHERE clause, and SOM is a LIMIT on what your current stack can actually process.** Every company or user that could theoretically benefit from software like yours is a row in that table. Most founders report the row count and call it a strategy. Growth engineers run the query.

![The Market Sizing Filter Stack — TAM, SAM, and SOM shown as three sequential filters, with definitions and worked examples for each layer](/infographics/article6-market-sizing-filter-stack.svg)

**The key insight:** TAM is a directional number for a board slide. SOM is the only number that should ever touch your enrichment scripts, your ad targeting, or your outbound cadence. Confusing the two is how founders build acquisition infrastructure for a market they can't service yet.

---

## TAM: The Unfiltered Table

Total Addressable Market is the entire database before you run a single query — the total global revenue opportunity if every potential user bought your product with zero competition. Build a B2B project management tool, and your TAM is technically every business on Earth with more than two employees.

Is TAM useful? For high-level directional positioning on a board slide, sure. For execution, it's noise. You cannot write targeted ad copy, configure Clay enrichment waterfalls, or design an onboarding flow for "every business on planet Earth." TAM tells investors the ceiling exists. It tells your growth stack nothing.

**The key insight:** If TAM is the only market number in your deck, that's not ambition — it's a signal you haven't segmented your market yet.

---

## SAM: The First WHERE Clause

Serviceable Addressable Market is your first real filter. SAM is the slice of TAM your current technology, geography, compliance posture, and language capability can actually service. Software that only integrates with Shopify and only handles US sales tax has a SAM that is strictly Shopify merchants operating in North America — not "every ecommerce business."

This is where most founders should be pulling their ICP definition from, not TAM. Run the filter: what tech stack do you integrate with, what regions can you legally and operationally serve, what languages does your product support. That's your SAM, and it's usually 90%+ smaller than the TAM slide implies.

**The key insight:** SAM is the market your product can serve today, not the market you plan to serve after the next three roadmap quarters. Size it on current capability, not future ambition.

---

## SOM: The LIMIT Clause That Feeds Your Stack

Serviceable Obtainable Market is the enriched, highly targeted subset of your SAM that you can realistically capture in the next 12–18 months, given your current engineering bandwidth, sales capacity, and growth budget.

SOM is the only number I feed programmatically into outbound enrichment tools like Clay or Apollo and into paid targeting parameters. It's your hyper-focused near-term cohort — the rows that survive every WHERE clause and hit the LIMIT your team can actually process this year.

If your SOM and your SAM are the same size, you haven't filtered by capacity — you've just relabeled your SAM. Real SOM accounts for headcount, deliverability limits on cold email, sales cycle length, and how many qualified conversations your current team can actually run per month.

**The key insight:** SOM isn't a smaller version of ambition. It's the number that determines your CAC, your sales cycle assumptions, and whether your growth budget is sized correctly for the market you can actually reach this year — see [what a GTM engineer actually builds](https://clintjeez.com/writings/what-is-a-gtm-engineer) once this number is set.

---

## The Retention Flatline: Where PMF Actually Lives

The founder I was talking to asked the obvious follow-up: "Okay, so if I shrink my focus to a small SOM, how do I know when I've won?"

You don't guess. You look at your cohort retention curve.

**Product-Market Fit is the point where your cohort retention curve flattens and runs roughly parallel to the x-axis over a 30-, 60-, or 90-day window.** Too many teams measure PMF with vanity metrics — signups, website visits, total users. Growth engineers measure it as a mathematical reality in usage telemetry: instrument the product in PostHog or Mixpanel, pull a cohort, and watch what the retention line does after day 30.

![Cohort retention curve comparison — a flattening PMF curve versus a curve that decays to zero, plotted across a 90-day window](/infographics/article6-pmf-retention-curve.svg)

A curve that keeps sloping toward zero past day 60 means users are trying your product and leaving. A curve that flattens — even at 30–40% — means the users who stick, stick for good. That's the signal a $50B TAM slide can never show you, and it's the same diagnostic lens behind [finding your real SaaS activation problem in 48 hours](https://clintjeez.com/writings/find-saas-activation-problem-48-hours): you don't guess where the break is, you read the cohort data.

**The key insight:** PMF isn't a launch announcement or a press cycle. It's the day your retention curve stops sloping down and goes flat — and no amount of TAM can substitute for that flatline showing up in your data.

---

## Real-World Diagnostic

**Before:** The founder's deck led with a $50B TAM and a plan to spend the Series A on broad-spectrum paid acquisition and a generalist outbound motion — cast wide, convert whoever converts.

**The diagnosis:** Running his numbers through the Filter Stack, his real SAM (companies on his supported stack, in supported geographies, at his price point) was closer to $340M. His SOM — accounts his 2-person GTM team could realistically enrich, sequence, and close in 12 months — was $9M. Separately, his 90-day cohort retention was still sloping downward at day 60, with no flatline in sight.

**The fix:** He rebuilt his pitch around SAM and SOM instead of TAM, and paused broad acquisition spend to focus on the segment where his product had shown the strongest early retention. The team re-cut cohorts by use case instead of company size, and found one segment where the curve flattened at 45% by day 45.

**The result:** He raised on a SOM-anchored slide instead of a TAM-anchored one, and redirected 100% of the round's GTM budget into the segment with a flattening curve — the only segment with actual PMF signal underneath it.

---

## Implementation: How to Actually Do This

Run TAM, SAM, and SOM as sequential filters, not three independent estimates pulled from different reports. Each one should be a strict subset of the one before it — if your SOM isn't dramatically smaller than your SAM, you haven't applied a real capacity filter.

Two mistakes show up constantly:

- **Sizing SAM by ambition instead of current capability.** SAM is what you can serve today, not what your roadmap promises for Q3.
- **Declaring PMF from a launch spike instead of a flattened cohort curve.** A traffic spike is not retention. Only the 30/60/90-day curve tells you the truth.

The meta-lesson: market sizing isn't a storytelling exercise for investors. It's a data-filtering pipeline. Feed your growth stack noise — an unfiltered TAM — and you get noisy CAC, wasted spend, and a PMF claim nobody's retention curve backs up.

---

## Where to Start

1. Pull your TAM from a credible market report, but stop treating it as anything more than a ceiling for board slides.
2. Filter TAM into SAM using three hard constraints: your current tech stack, your supported geographies, and your compliance posture.
3. Filter SAM into SOM using your actual team capacity: sales cycle length, cold email deliverability limits, and how many qualified conversations you can run per month.
4. Feed only your SOM into Clay, Apollo, or your paid targeting parameters — never TAM or SAM.
5. Instrument a 30/60/90-day cohort retention curve in PostHog or Mixpanel, segmented by use case, before you claim PMF.
6. If your retention curve is still declining at day 60, treat that as your real bottleneck — not your TAM slide, not your ad spend.

TAM gets you a slide. SOM plus a flattened retention curve gets you a business.

---

## FAQ

**What's the difference between TAM, SAM, and SOM?**
TAM is your total theoretical market with zero constraints. SAM filters TAM by what your current tech stack, geography, and compliance can serve. SOM filters SAM further by what your actual team capacity — sales, engineering, growth budget — can realistically capture in the next 12–18 months.

**How do I know if I've reached product-market fit?**
Instrument a cohort retention curve in a tool like PostHog and track it across a 30-, 60-, or 90-day window. PMF shows up as the curve flattening and running roughly parallel to the x-axis, not as a spike in signups or press coverage.

**Should investors care about TAM or SOM?**
Both, but for different reasons. TAM shows the ceiling exists. SOM shows you've done the filtering work to know exactly who you can capture in the near term — and pairing it with a flattening retention curve is what actually signals you've found a repeatable growth motion, not just a large theoretical market.

---

*Clinton James is a Growth & GTM Engineer who helps SaaS founders build the technical infrastructure behind their revenue, from market sizing to full-funnel automation. If your TAM slide looks great but your retention curve doesn't back it up, let's talk: cal.com/clintonjames/15min.*
