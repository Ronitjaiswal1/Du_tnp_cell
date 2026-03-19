import { NextResponse } from "next/server";

import { env } from "@/lib/env";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

/**
 * GET /api/leads/handover
 *
 * Purpose:
 * - Performs the final backend-controlled 302 redirect to DU Samarth.
 * - Keeps redirect destination centralized in environment configuration.
 *
 * Maintenance notes for Batch 2027+:
 * - Update only SAMARTH_REDIRECT_URL in env when destination changes.
 * - Keep this endpoint as a redirect boundary to avoid hardcoded client redirects.
 */
export async function GET(request: Request) {
  const clientIp = getClientIp(request.headers);
  const rate = checkRateLimit(
    `handover:${clientIp}`,
    env.LEADS_RATE_LIMIT_MAX_REQUESTS,
    env.LEADS_RATE_LIMIT_WINDOW_MS,
  );

  if (!rate.allowed) {
    return NextResponse.json(
      { ok: false, message: "Too many redirects requested." },
      {
        status: 429,
        headers: { "Retry-After": String(rate.retryAfterSeconds) },
      },
    );
  }

  const url = new URL(request.url);
  const intent = url.searchParams.get("intent") || "register_to_hire";

  const samarth = new URL(env.SAMARTH_REDIRECT_URL);
  samarth.searchParams.set("utm_source", "tnp_website");
  samarth.searchParams.set("utm_medium", "lead_handover");
  samarth.searchParams.set("intent", intent);

  return NextResponse.redirect(samarth, { status: 302 });
}
