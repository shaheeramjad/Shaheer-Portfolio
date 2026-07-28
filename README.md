# Recruiter engagement analytics

The portfolio includes anonymous PostHog analytics for:

- active time on each portfolio section (hidden tabs and idle time are excluded)
- total active page time and maximum scroll depth
- project, article, résumé, contact, and social-link interactions
- optional campaign attribution through `ref`, `visit`, and standard `utm_*` query parameters
- optional, privacy-masked session replay (off by default)

To enable it, create a PostHog project, copy `.env.example` to `.env.local`, and add the project key and regional ingestion host. For Vercel, add the same values as project environment variables:

```text
REACT_APP_POSTHOG_KEY=phc_...
REACT_APP_POSTHOG_HOST=https://us.i.posthog.com
REACT_APP_POSTHOG_SESSION_REPLAY=false
```

Rebuild or redeploy after changing environment variables. The project key is safe for client-side use; do not use a PostHog personal API key.

Section timing does not require session replay. Only enable replay after reviewing the privacy requirements for your visitors; text inputs remain masked by the implementation.

Use a non-identifying campaign link when sending the portfolio with an application, for example:

```text
https://your-domain.example/?ref=linkedin&visit=acme-2026-07
```

In PostHog, create insights using the `portfolio_section_attention` event, break down by `section`, and sum or average `active_seconds`. Filter by `campaign_visit` or `campaign_ref` to inspect a specific application campaign.
