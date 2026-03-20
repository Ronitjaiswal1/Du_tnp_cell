# DU FoT TnP Website

Secure, scalable placement and event showcase platform built on Next.js App Router.

## Architecture

This project follows a three-tier decoupled model.

1. Presentation Layer: Next.js app pages/components (`app`, `components`)
2. Application Layer: Serverless API routes (`app/api`)
3. Data Layer: MongoDB Atlas (via `lib/mongodb.ts`)

The decoupled setup allows future batches to update UI safely without breaking lead capture and backend persistence.

## Tech Stack

1. Framework: Next.js (App Router)
2. Styling: Tailwind CSS
3. Animations: Framer Motion
4. Backend Validation: Zod
5. Database: MongoDB Atlas (`mongodb` driver)
6. Deployment: Vercel + GitHub

## Secure Lead Handover Flow

1. Recruiter clicks CTA (brochure/event/register actions)
2. Lead modal captures name, company, work email
3. Backend validates input with Zod and checks honeypot field
4. Rate limiting is applied by IP
5. Valid lead is stored in MongoDB
6. Backend handover endpoint issues HTTP 302 to official DU portal (`https://slc.uod.ac.in/`)

## API Routes

All routes include inline maintenance comments for Batch 2027+.

1. `POST /api/leads`
	1. Validates and stores recruiter leads
	2. Returns handover URL
2. `GET /api/leads/handover`
	1. Backend-controlled 302 redirect to DU portal
3. `GET /api/events`
	1. Reads dynamic events from MongoDB
	2. Falls back to static events data if DB is unavailable
4. `GET /api/counters`
	1. Reads dynamic placement counters from MongoDB
	2. Falls back to static counters if DB is unavailable

## Environment Setup

1. Copy `.env.example` to `.env.local`
2. Fill values for `MONGODB_URI` and optional overrides

Required variables:

1. `MONGODB_URI`
2. `MONGODB_DB_NAME` (optional, default `tnp_website`)
3. `SAMARTH_REDIRECT_URL` (default `https://slc.uod.ac.in/`)
4. `BROCHURE_PUBLIC_PATH` (default `/Placement_Fot_2026.pdf`)
5. `LEADS_RATE_LIMIT_WINDOW_MS`
6. `LEADS_RATE_LIMIT_MAX_REQUESTS`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Asset Notes

1. Brochure asset path: `public/Placement_Fot_2026.pdf`
2. Prefer `.webp` assets for new image additions
3. Keep file names stable to avoid breaking existing references

## Maintenance Protocol (Batch 2027+)

1. Update schemas first in `lib/validators.ts` before changing form fields
2. Preserve honeypot field behavior (`website` must stay empty)
3. Keep API response shapes stable for modal/CTA integrations
4. Update static fallbacks in `lib/site-data.ts` and `lib/second-page-data.ts` when academic cycle changes
5. Never commit `.env.local` or production secrets

