# Campaign: AI Implementation (Paid)

*Reframed October 2026: was the "48-Hour Free Growth Sprint", then the free AI Deployment Sprint. Now a paid offer for businesses and founders. See `decisions/log.md`.*

## Objective

Sell and deliver paid AI implementations for businesses and founders: one workflow diagnosed, one AI system deployed into their stack, measured before and after.
Ask (optional, never a condition of the deal): permission to publish an anonymized case study and technical write-up.

## Why This Campaign Exists

The main path is a Forward Deployed Engineer role. FDE work means embedding with a customer, diagnosing the real problem, shipping a system into their stack, and proving the result.

Each implementation is that job, done for real and paid for. The output is revenue plus portfolio proof that FDE hiring managers can verify: a real customer, a deployed system, and a measured before/after.

## ICP for This Campaign

- Small team (1–20 people): SaaS, agency, or service business
- Has a repetitive, data-heavy workflow: support tickets, lead qualification, document lookup, reporting, data entry
- Uses tools with APIs (HubSpot, Intercom, Notion, Google Workspace, Airtable, Stripe, PostHog)
- Can give access to real (or realistic) data within 24 hours

**Skip:** teams with no API-accessible tools, anyone who needs on-prem or compliance review before data access, and "just build me a chatbot" requests with no workflow behind them.

## Sprint Menu

Pick the one that fits the diagnosis. Each maps to a card on the site's "What I Deploy" section.

| Sprint | Example | Metric to Measure |
|--------|---------|-------------------|
| **AI Agent** | Support agent that drafts replies from the helpdesk + docs; sales agent that qualifies inbound leads into HubSpot | % tickets resolved/drafted, response time, qualification accuracy |
| **Knowledge Assistant (RAG)** | Q&A over internal docs, SOPs, or product knowledge | Retrieval precision@k, answer accuracy on a labeled test set |
| **Predictive Model** | Churn-risk or lead-score model from product/CRM data | Precision/recall, lift vs. current heuristic |
| **AI Workflow Automation** | n8n pipeline with an LLM step: enrichment, classification, summarization, routing | Hours saved/week, error rate vs. manual |

## Campaign Process

1. **Identify** 20 qualified teams per week from LinkedIn/X
2. **Outreach** via DM or cold email (use `cold-dm-playbook.md` + `sops/cold-email.md`)
3. **On reply:** 30-min diagnosis call. Map the workflow, pick one sprint, agree on the success metric *before* building
4. **Baseline:** capture the "before" number on day 0
5. **Build + deploy:** ship a system running in their stack, on a timeline agreed on the diagnosis call
6. **Eval:** run the system against a test set or a week of live data, then record the "after" number
7. **Handover:** 10-min handover call; ask for permission to publish an anonymized case study
8. **Document:** case study + technical write-up (format below), then post a build log on LinkedIn/X

## Prospect Tracker

| # | Name | Company | Workflow | Sprint Type | Channel | Contacted | Replied | Call Done | Deployed | Metric Before → After | Case Study OK |
|---|------|---------|----------|-------------|---------|-----------|---------|-----------|----------|----------------------|-------------|
| 1 | | | | | | | | | | | |
| 2 | | | | | | | | | | | |
| 3 | | | | | | | | | | | |
| 4 | | | | | | | | | | | |
| 5 | | | | | | | | | | | |

## Case Study Format

Save each completed case study to `content/campaigns/48hr-sprint/case-studies/CS-001-company-name.md`

**Structure:**
1. **The Team:** company (anonymized if needed), size, the workflow that was eating time
2. **The Diagnosis:** what the real bottleneck was, found in the first 30 minutes
3. **The System:** architecture in plain terms: model, retrieval/data sources, tools integrated, guardrails
4. **The Eval:** how success was measured, the test set, failure cases found and fixed
5. **The Result:** before → after on the agreed metric
6. **Their Words:** 1–2 sentence direct quote (if they offer one)
7. **Technical Write-up:** link to the public repo or blog post (sanitized, with no client data)

## Success Criteria

Campaign is complete when we have:
- [ ] 3 deployed systems with measured before/after results
- [ ] 3 published case studies + at least 1 public technical write-up
- [ ] Each case study usable as a talking point in FDE interviews (problem → diagnosis → system → result)
