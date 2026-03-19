import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

import { env } from "@/lib/env";
import { getCollection } from "@/lib/mongodb";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { recruiterLeadSchema, type RecruiterLeadInput } from "@/lib/validators";

type LeadDocument = RecruiterLeadInput & {
  createdAt: Date;
  clientIp: string;
};

async function parseLeadPayload(request: Request): Promise<Record<string, unknown>> {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return (await request.json()) as Record<string, unknown>;
  }

  const formData = await request.formData();
  return Object.fromEntries(formData.entries());
}

/**
 * POST /api/leads
 *
 * Purpose:
 * - Validates recruiter lead input using Zod.
 * - Uses hidden honeypot field (`website`) to trap bots.
 * - Applies request rate limiting by IP to reduce spam.
 * - Persists lead in MongoDB for placement/recruitment analytics.
 *
 * Maintenance notes for Batch 2027+:
 * - If adding new fields in the modal, update `recruiterLeadSchema` first.
 * - Keep honeypot behavior intact (`website` must remain empty).
 * - Keep response shape `{ ok, handoverUrl }` stable for frontend modal logic.
 */
export async function POST(request: Request) {
  const clientIp = getClientIp(request.headers);
  const rate = checkRateLimit(
    `lead:${clientIp}`,
    env.LEADS_RATE_LIMIT_MAX_REQUESTS,
    env.LEADS_RATE_LIMIT_WINDOW_MS,
  );

  if (!rate.allowed) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again shortly." },
      {
        status: 429,
        headers: { "Retry-After": String(rate.retryAfterSeconds) },
      },
    );
  }

  const rawPayload = await parseLeadPayload(request);
  const validated = recruiterLeadSchema.safeParse(rawPayload);

  if (!validated.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid lead details provided.",
        issues: validated.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  if (validated.data.website && validated.data.website.trim().length > 0) {
    // Respond with generic success to avoid revealing bot detection details.
    return NextResponse.json({ ok: true }, { status: 202 });
  }

  try {
    const leadCollection = await getCollection<LeadDocument>("recruiter_leads");
    const insertResult = await leadCollection.insertOne({
      ...validated.data,
      workEmail: validated.data.workEmail.toLowerCase(),
      createdAt: new Date(),
      clientIp,
    });

    const handoverUrl = new URL("/api/leads/handover", request.url);
    handoverUrl.searchParams.set("leadId", insertResult.insertedId.toString());
    handoverUrl.searchParams.set("intent", validated.data.intent);

    return NextResponse.json(
      {
        ok: true,
        leadId: insertResult.insertedId.toString(),
        handoverUrl: handoverUrl.toString(),
      },
      {
        status: 201,
        headers: { "Cache-Control": "no-store" },
      },
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Service temporarily unavailable. Please try again shortly.",
      },
      { status: 503 },
    );
  }
}

/**
 * GET /api/leads?h=<leadId>
 *
 * Utility endpoint to quickly inspect if a lead exists (debug/admin only).
 * This endpoint does not expose full lead details and is safe to keep minimal.
 */
export async function GET(request: Request) {
  const leadId = new URL(request.url).searchParams.get("h");

  if (!leadId || !ObjectId.isValid(leadId)) {
    return NextResponse.json({ ok: false, exists: false }, { status: 400 });
  }

  const leadCollection = await getCollection<LeadDocument>("recruiter_leads");
  const found = await leadCollection.findOne({ _id: new ObjectId(leadId) });
  return NextResponse.json({ ok: true, exists: Boolean(found) });
}
