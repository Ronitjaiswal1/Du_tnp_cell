# Collaborator Guide

This file defines the expected workflow for anyone contributing to this repository.

## Scope

This project is a Next.js Training and Placement website for Faculty of Technology, University of Delhi, with API routes for leads, recruiter contact, events, and counters.

## Local Setup

1. Install dependencies:
   npm install
2. Start development server:
   npm run dev
3. Build production output:
   npm run build
4. Run production server:
   npm run start

## Environment

Create .env.local in project root and provide values for:

1. MONGODB_URI
2. MONGODB_DB_NAME (optional)
3. SAMARTH_REDIRECT_URL (optional)
4. BROCHURE_PUBLIC_PATH (optional)
5. LEADS_RATE_LIMIT_WINDOW_MS (optional)
6. LEADS_RATE_LIMIT_MAX_REQUESTS (optional)

## Collaboration Workflow

1. Pull latest master before starting work.
2. Make focused changes for one task at a time.
3. Keep commits scoped and descriptive.
4. Do not include unrelated file changes in a commit.
5. Open PR with clear summary, testing notes, and impacted routes/pages.

## Commit Message Format

Use a concise conventional style, for example:

1. feat: add recruiter counters API integration
2. fix: validate recruiter contact payload
3. docs: update readme setup section

## Code Quality Rules

1. Keep API request/response shapes stable when possible.
2. Validate input with Zod before persistence.
3. Preserve fallback behavior for read endpoints.
4. Avoid hardcoding secrets in source files.
5. Keep UI branding consistent in shared header and footer.

## Data and API Notes

1. Leads are handled through /api/leads and /api/leads/handover.
2. Recruiter contact requests are handled through /api/recruiter-contact.
3. Events and counters should continue to return static fallbacks when DB is unavailable.

## Pre-PR Checklist

1. Verify affected pages load without runtime errors.
2. Verify API routes return expected status codes and payloads.
3. Verify forms show clear success and error feedback.
4. Run npm run lint before opening a PR.
5. Ensure references or unrelated files are not accidentally committed.

## Ownership Notes

1. Keep this guide updated when workflow or architecture changes.
2. Update README when adding new setup steps or endpoints.
