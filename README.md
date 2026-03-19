# DU FoT TnP Website

Training and Placement website for Faculty of Technology, University of Delhi.

This project uses Next.js App Router with API routes for recruiter leads, recruiter contact requests, events, and placement counters.

## Current Integration Status

The frontend and backend are connected for these flows:

1. Recruiter CTA modal submits to POST /api/leads
2. Lead handover redirects via GET /api/leads/handover
3. Recruiter company contact form submits to POST /api/recruiter-contact
4. Events section reads from GET /api/events with static fallback
5. Recruiter stats section reads from GET /api/counters with static fallback

## Tech Stack

1. Next.js 16 (App Router)
2. React 19
3. Tailwind CSS 4
4. Framer Motion + Three.js stack for visual sections
5. MongoDB Node.js Driver
6. Zod for API input validation

## Project Structure

1. app: route segments and API handlers
2. components: UI modules grouped by feature
3. lib: environment config, MongoDB helpers, validators, static fallback data
4. public: static assets including placement brochure and logos

## API Endpoints

1. POST /api/leads
Purpose:
Validates lead capture form input, enforces rate limiting, stores lead, and returns controlled handover URL.

2. GET /api/leads/handover
Purpose:
Validates lead handover request and redirects to official portal.

3. GET /api/leads?h=<leadId>
Purpose:
Minimal existence check utility for lead records.

4. POST /api/recruiter-contact
Purpose:
Validates recruiter contact form input, enforces rate limiting, and stores request for admin follow-up.

5. GET /api/events
Purpose:
Returns events from MongoDB; if unavailable, returns static fallback data.

6. GET /api/counters
Purpose:
Returns placement counters from MongoDB; if unavailable, returns static fallback values.

## Environment Variables

Create a file named .env.local in project root and add the following values.

Required for database-backed behavior:

1. MONGODB_URI

Optional with defaults:

1. MONGODB_DB_NAME=tnp_website
2. SAMARTH_REDIRECT_URL=https://slc.uod.ac.in/
3. BROCHURE_PUBLIC_PATH=/Placement_Fot_2026.pdf
4. LEADS_RATE_LIMIT_WINDOW_MS=60000
5. LEADS_RATE_LIMIT_MAX_REQUESTS=15

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open:

http://localhost:3000

## Build and Production

```bash
npm run build
npm run start
```

## Validation and Safety Notes

1. Input validation is centralized in lib/validators.ts
2. Rate limiting is applied in critical write routes
3. API handlers gracefully fall back where applicable
4. Do not commit .env.local or secret connection strings

## Maintainer Notes

1. When form fields change, update Zod schemas first and keep response shape stable for frontend consumers.
2. If MongoDB is unavailable, reads from events and counters continue using fallback content.
3. Keep branding text for header and footer consistent: Faculty of Technology.

