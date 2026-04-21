<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into clintjeez.xyz (Next.js 15 App Router). PostHog is initialized client-side via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), with a reverse proxy configured in `next.config.mjs` to route events through `/ingest` for better ad-blocker resilience. A server-side PostHog client was created at `src/lib/posthog-server.ts` for future API route usage. Ten events were instrumented across key conversion and engagement touchpoints.

| Event Name | Description | File |
|---|---|---|
| `lead_magnet_submitted` | User submits email to download the Growth & GTM Playbook | `src/app/(frontend)/components/LeadMagnet.tsx` |
| `book_call_cta_clicked` | User clicks "Book a call" in the Consultation CTA | `src/app/(frontend)/components/ConsultationCta.tsx` |
| `pricing_plan_clicked` | User clicks "Get started" on a pricing plan (LeadsPad or LaunchPad) | `src/app/(frontend)/components/PricingPlans.tsx` |
| `offer_learn_more_clicked` | User clicks "Learn more" on an offer card | `src/app/(frontend)/views/OffersOverview.tsx` |
| `view_all_offers_clicked` | User clicks "View all offers" | `src/app/(frontend)/views/OffersOverview.tsx` |
| `blog_post_share_clicked` | User copies a blog post URL via the share button | `src/app/(frontend)/components/ShareButton.tsx` |
| `blog_search_performed` | User searches for blog posts (debounced, fires after 800ms) | `src/app/(frontend)/components/SearchBar.tsx` |
| `blog_post_clicked` | User clicks a blog post card | `src/app/(frontend)/components/BlogCard.tsx` |
| `blog_view_more_clicked` | User clicks "View more" in the Blog Overview section | `src/app/(frontend)/components/BlogViewMoreLink.tsx` |
| `book_call_page_viewed` | User lands on the /book-call page (top of booking funnel) | `src/app/(frontend)/(mainRoute)/book-call/BookCallClient.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/203517/dashboard/1488416
- **Booking Conversion Funnel** (offer interest → CTA → book-call page): https://us.posthog.com/project/203517/insights/pzgjt7XP
- **Lead Magnet Submissions Over Time**: https://us.posthog.com/project/203517/insights/wBS26qBS
- **Pricing Plan Interest by Plan** (LeadsPad vs LaunchPad): https://us.posthog.com/project/203517/insights/s3msPN8J
- **Top Offers by Engagement** (which service gets the most interest): https://us.posthog.com/project/203517/insights/arUwMwDx
- **Blog Engagement Over Time** (post clicks + searches): https://us.posthog.com/project/203517/insights/6L8877RB

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
