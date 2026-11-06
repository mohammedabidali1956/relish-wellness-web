# AI Visibility, Analytics, and Patient Acquisition Measurement

**Website:** https://www.drhamidphysio.in/  
**Implementation review:** 6 November 2026

This document describes the website-side measurement implementation and the account-side checks still needed. The repository cannot verify live GA4, Clarity, Bing Webmaster Tools, or Cloudflare account settings. Website visits and analytics events are not proof of AI citations, sent enquiries, booked appointments, clinic attendance, or revenue.

## 1. Existing integrations found

- **GA4:** Installed directly with Google `gtag.js` from `src/lib/analytics.ts` when a production build has `VITE_GA_MEASUREMENT_ID` and the hostname is `drhamidphysio.in` or `www.drhamidphysio.in`. `.env.example` documents the variable; the production environment value and property were not available for verification. No Google Tag Manager container or second GA4 tag was found.
- **Microsoft Clarity:** One asynchronous snippet is in the shared `index.html`, using project ID `z5bw70hpn0`. It runs only on `drhamidphysio.in` and `www.drhamidphysio.in`; local and preview hosts do not load it. The production project and account settings were not available for verification.
- **Consent:** No cookie/analytics consent component or consent state was found in the application. Do not treat the code as evidence that consent or another legal basis has been resolved. The owner should confirm the applicable requirements and collection settings before relying on analytics.
- **Other:** `public/robots.txt` allows Bingbot and names the existing sitemap. The repository has a public IndexNow key file and a guarded `npm run indexnow:submit` script. `vercel.json` contains existing redirects, Google verification rewrites, and security headers. No Cloudflare configuration, Bing verification token/file/meta tag, or Cloudflare analytics integration was found.

## 2. GA4 implementation and events

The existing direct GA4 installation is reused. The script is asynchronous, only initialized once, only enabled on the production host when the environment variable exists, and configured with Google Signals and ad-personalization signals disabled. Calls are harmless if GA4 is not configured or Google’s script cannot load.

The website now disables the tag’s automatic initial page view and sends one page view on initial hydration plus one for each React Router path/query navigation. A component ref prevents React Strict Mode effect replay from sending a duplicate for the same route. The manual page view sends the page title, path without fragments, and a broad `page_category` (`home`, `service`, `blog`, `contact`, or `other`). Only standard incoming UTM and advertising click-ID parameters are retained on the initial page location for attribution; arbitrary query parameters are dropped. Referrers are reduced to their origin on initial landing and later virtual page views use the prior route path. Do not put patient, symptom, or health details in campaign tags. Custom events do not send form values, symptoms, patient identity, message text, or full links.

| Event | Trigger | Meaning and parameters |
|---|---|---|
| `appointment_cta_click` | Existing appointment links and labelled booking/consultation buttons are clicked | CTA interaction only; fixed `page_category` and `cta_location` labels |
| `appointment_form_start` | First focus inside the appointment form in a visit | First interaction only; broad `page_category` |
| `appointment_form_submit` | User attempts submission by clicking the form's submit button or submitting by keyboard, including a browser validation failure | An attempt, not proof of a valid enquiry. When validation passes, the form prepares and opens a WhatsApp enquiry; it does **not** confirm that WhatsApp was sent or that a booking exists. Fixed location/category labels only. |
| `phone_click` | A telephone link or existing call button is activated | Supporting action; fixed category/location labels |
| `whatsapp_click` | An existing WhatsApp link or form/button handoff is activated | Supporting action; fixed category/location labels |
| `directions_click` | Existing Google Maps direction link is activated | Supporting action; fixed category/location labels |

There is deliberately no `appointment_booking_success` event. The site has no response from WhatsApp proving that a message was sent, accepted, or scheduled. Do not mark `appointment_cta_click` or `appointment_form_submit` as the primary booked-appointment key event. If a real booking-confirmation integration is added later, define and validate its server-confirmed success response before creating a key event. Phone, WhatsApp, and directions remain supporting actions.

### GA4 AI referrals and landing pages

1. In GA4, open **Reports → Acquisition → Traffic acquisition** and use **Session default channel group**, **Session source / medium**, **Landing page + query string**, Sessions, Engaged sessions, Engagement rate, and the relevant event counts/key events.
2. Use the built-in **AI Assistant** default channel group first. Google documents this channel for identified referrals such as ChatGPT, Gemini, DeepSeek, Copilot, and Grok; Google maintains its default group and it cannot be edited. Claude and Perplexity classification should be checked against the property’s observed source values rather than assumed.
3. If an additional group is needed, create a **custom channel group** in GA4 Admin → Data display → Channel groups, with an `AI assistants` channel above Referral. Use **Session source matches regex** and a reviewed starting rule such as:

   ```regex
   .*(chatgpt|openai|gemini|deepseek|copilot|grok|claude|perplexity).*
   ```

   Compare the rule with actual lower-case source values in the property, tighten false positives, and retain the original source/medium dimensions. Do not rewrite or append UTMs to external AI links. Genuine incoming campaign parameters are not rewritten by the website. If the AI app launches a browser without a referrer, the visit may be reported as Direct and cannot be reliably recovered as AI traffic.
4. Because this is a health-related site, have the owner review GA4's page URL/title collection and applicable privacy requirements. The SPA page-view code omits arbitrary query values and fragments, retaining only standard UTM/click-ID values on the first landing page for campaign attribution. A user's incoming campaign/source attribution is otherwise governed by the Google tag and arriving referrer.

### Account setting needed to prevent duplicate page views

The website now sends its own SPA route page views. In GA4 Admin → Data collection and modification → Data streams → select the web stream → Enhanced measurement → Page views → Show advanced settings, turn off **Page changes based on browser history events**. In Enhanced measurement, also turn off automatic **Outbound clicks** and **Form interactions** so the website's named events stay distinct and automatic link URL/form events are not duplicated. Keep the normal page-load auto-view disabled for this implementation. Verify one page view on load and one per navigation in DebugView. The property settings cannot be changed from this repository and were not verified.

## 3. Clarity installation and privacy

- Keep the one asynchronous installation in `index.html`; do not add another script or inject route-level Clarity page views without evidence that the existing SPA recording misses route changes.
- Both the appointment request form and callback form carry `data-clarity-mask="True"`. Clarity documents that explicit masking applies to an element and its descendants; Clarity also masks input and select values by default. Do not add unmask rules to these forms or send patient data as custom tags/events.
- In the Clarity project, open **Settings → Masking**. Confirm a privacy-protective masking mode, ensure no form selector is unmasked, and inspect a test recording from a test enquiry before relying on recordings. Masking is prospective and dashboard setting changes may take time to apply; do not assume old recordings are retroactively protected.
- Check that route navigation creates the expected page visits, then filter recordings by **Channel → AIPlatform** or **PaidAIPlatform**, and inspect entry pages, navigation to service pages, appointment CTA clicks, and abandonment before the WhatsApp handoff. Clarity's known AI-source channel is based on referral patterns and does not identify every AI answer or embedded AI feature.
- Do not capture, tag, or export patient identity, phone, email, free-text messages, symptoms, or clinical details. Form masking does not replace the owner's review of dashboard settings and applicable consent requirements.

## 4. Bing Webmaster Tools checklist

Repository status: the current sitemap is `https://www.drhamidphysio.in/sitemap.xml` and is referenced in `public/robots.txt`; Bingbot is allowed. No Bing verification token, `BingSiteAuth.xml`, or `msvalidate.01` tag was found. A Google verification meta tag is present, but that alone does not establish Bing verification. An IndexNow public key file and submission script exist; no submission has been sent as part of this work.

Owner actions in Bing Webmaster Tools:

1. Add/verify the canonical domain property `https://www.drhamidphysio.in/` (or import the verified Google Search Console property if desired); use a Bing-issued DNS/meta/file credential rather than inventing one.
2. Submit the existing `https://www.drhamidphysio.in/sitemap.xml`, then confirm its processing state and URL count. Do not generate or restructure a sitemap for this setup.
3. Review **URL inspection** and **Site Explorer** for indexed, excluded, duplicate, and error URLs. Inspect the existing home, services, contact, and key service pages.
4. Review crawl errors and robots access; note that the repository allows Bingbot but cannot prove live server access.
5. Review search queries, impressions, and clicks monthly. Bing impressions are search visibility metrics, not ChatGPT citations.
6. Check IndexNow availability in Bing and review the public key file. For local validation only, after a production build, run `npm run indexnow:submit -- --all --dry-run`. A real submission requires an explicit owner decision and should only be run when intended URLs are ready; this implementation did not submit anything.

## 5. Cloudflare crawler monitoring

No Cloudflare zone, DNS, firewall, analytics, or log configuration is present in the repository. The deployment file found is `vercel.json`; this does not prove whether Cloudflare also proxies the production domain. No account logs were accessible, so no crawler requests, errors, blocks, or counts can be reported from evidence.

If the owner confirms the domain is proxied by Cloudflare and the account provides the relevant views, inspect **Security → Analytics → Bot analysis** (where available) and/or existing HTTP request logs. Use request time, path, status/edge status, and reported user agent to review these separately:

| User agent token | Class to track |
|---|---|
| `OAI-SearchBot` | OpenAI search discovery crawler |
| `GPTBot` | OpenAI model-training crawler |
| `ChatGPT-User` | User-initiated retrieval |
| `Bingbot` | Bing search crawler |
| `ClaudeBot` | Anthropic crawler |
| `PerplexityBot` | Perplexity crawler |

For each class, compare requests to important existing pages (`/`, `/services`, `/contact`, key `/services/...` pages, and useful `/blogs/...` pages); note 2xx/3xx/4xx/5xx status, blocks/challenges if visible, and repeated failures. User-agent strings alone can be spoofed; use Cloudflare's verified-bot classification where available and record uncertainty. Requests are crawler activity, **not** AI citations or patient visits. Do not change allow/block/challenge rules based on this report. Cloudflare Bot Analytics/log availability depends on account products and plan; do not buy a service for this checklist.

## 6. Repeatable AI citation and brand check

Run the same prompts monthly in ChatGPT Search, Google Gemini, Perplexity, and Microsoft Copilot. Record the prompt exactly; record what appeared without suggesting the answer. Use a consistent signed-out/private browser when practical, note the displayed location, and do not treat one answer as representative of all users or all responses.

Starter prompts:

1. `Physiotherapy clinic in Manikonda`
2. `Best physiotherapy clinic near Manikonda for back pain`
3. `Neck pain physiotherapist in Manikonda`
4. `Sciatica physiotherapy in Manikonda`
5. `Knee pain physiotherapy near Puppalguda`
6. `Home visit physiotherapy in Manikonda`
7. `Dr Mohammed Hamid Ali physiotherapist Hyderabad`

Reusable monthly record (one row per platform/prompt):

| Date | AI platform | Exact prompt | Clinic mentioned? | Recommended? | Website cited? | Exact cited URL | Other clinics named | Observations / displayed location |
|---|---|---|---|---|---|---|---|---|
| YYYY-MM-DD | ChatGPT Search / Gemini / Perplexity / Copilot |  | Yes/No | Yes/No/Unclear | Yes/No |  |  |  |

This is a manual sample only. It does not prove citation frequency, ranking, recommendation quality, or what another location/account will see. Do not promise an AI citation or recommendation.

## 7. Patient acquisition and offline outcomes

Website analytics cannot establish physical attendance, treatment start, or revenue. Use the clinic's existing appointment/operations records and record only an acquisition source category plus aggregate outcome totals. Do not add a patient database for analytics and do not send patient-level data, identifiers, health details, appointment records, or revenue rows to GA4 or Clarity.

Suggested source choices: Google Search / Maps; ChatGPT; Gemini; Perplexity; Other AI assistant; Existing patient referral; Social media; Direct / unknown; Other referral.

Monthly aggregate worksheet:

| Month | Source category | Enquiries | Appointments booked | Patients attended | Treatment initiated (if appropriate) | Aggregate revenue |
|---|---|---:|---:|---:|---:|---:|
| YYYY-MM | Google Search / Maps, ChatGPT, Gemini, Perplexity, Other AI assistant, Existing patient referral, Social media, Direct / unknown, or Other referral |  |  |  |  |  |

Ask the source at first contact using a consistent neutral question and allow `Direct / unknown`. Where someone says they first found the clinic in AI but later returned directly, retain the self-reported discovery source separately from the digital last-click source if the clinic already has a suitable workflow. Do not infer AI for every Direct visit. Reconcile totals at an aggregate level and restrict access according to clinic policy.

## 8. Limitations and interpretation

- Analytics sees identifiable referred website visits, not every AI mention, answer, citation, crawler fetch, or offline conversation.
- Referrers can be removed by apps, privacy tools, redirects, or browser hand-offs; these may become Direct/unknown.
- The built-in AI Assistant / AIPlatform groups cover recognized referral patterns and may not include embedded AI features or every assistant. Review source values over time.
- A `whatsapp_click` or `appointment_form_submit` event records an on-site action, not a message received by the clinic. No event in this implementation confirms booking, attendance, treatment, or revenue.
- Crawler user-agent strings can be spoofed, and crawler traffic is not a measure of citations or patient intent.
- GA4 page views necessarily describe page content through page path/title. Review health-related URL/title collection and lawful basis with the clinic's responsible owner.
- Consent, provider account settings, retention, privacy notices, offline records, and downstream platform processing cannot be verified from source code alone.

## 9. Account-side steps requiring owner access

- **GA4:** Confirm the production measurement ID, web stream, event arrival, AI Assistant channel data, Enhanced Measurement settings, relevant event counts, consent/legal basis, and whether any event should be a key event. Specifically disable browser-history page-change auto views before using the new manual SPA views.
- **Clarity:** Confirm the project belongs to the production domain, verify its consent setup and masking mode/selectors, inspect a test form recording, verify SPA route views and AIPlatform filtering, and confirm that no sensitive field is visible.
- **Bing:** Verify/import the property, confirm sitemap processing, review URL inspection and crawl/search reports, and decide whether/when to submit IndexNow URLs.
- **Cloudflare:** Confirm whether the domain uses Cloudflare. If yes, inspect available bot analytics or existing logs for the user-agent/path/status breakdown above. No account-level changes are part of this implementation.
- **Clinic operations/privacy:** Approve a source question, allowed aggregate outcome fields, access/retention practices, and legal notice/consent language. Keep patient-level information outside analytics tools.

## 10. Monthly review procedure

1. In GA4, compare AI Assistant and other identifiable AI source/medium sessions by landing page, engaged sessions, engagement rate, and the on-site action events. Check for Direct/unknown shifts and unexpected campaign parameters.
2. In Clarity, compare AIPlatform and PaidAIPlatform sessions; review a small sample of entry pages, service navigation, CTA clicks, mobile usability, and drop-off before handoff. Re-check masking.
3. Run the seven prompt checks across the four named assistants and save the completed citation rows with date and location context.
4. Reconcile the clinic's aggregate source/outcome worksheet. Keep source-reported AI discovery separate from analytics last click and avoid assigning unknown Direct enquiries to AI.
5. If Cloudflare is confirmed and usable, review verified crawler requests, important paths, and status/error trends. Report those separately from people and citations.
6. Review sitemap/indexing and key pages in Bing Webmaster Tools; record errors and impressions/click changes without presenting impressions as citations.
7. Log changes, limitations, account-setting differences, and follow-up owners. Do not change bot policy or mark a lead as booked based only on CTA or WhatsApp click data.

## Official setup references

- [GA4 default channel groups](https://support.google.com/analytics/answer/9756891)
- [GA4 custom channel groups](https://support.google.com/analytics/answer/13051316)
- [GA4 SPA measurement](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications)
- [GA4 manual page views and history-based duplicates](https://developers.google.com/analytics/devguides/collection/ga4/views)
- [Clarity AIPlatform channel](https://learn.microsoft.com/en-us/clarity/insights/ai-channel-group)
- [Clarity masking](https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-masking)
- [Clarity masking API](https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-api)
- [Bing site verification](https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b)
- [Bing sitemap submission](https://www.bing.com/webmasters/help/sitemaps-3b5cf6ed)
- [Cloudflare Bot Analytics](https://developers.cloudflare.com/bots/bot-analytics/)
- [Cloudflare HTTP request log fields](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/zone/http_requests/)
