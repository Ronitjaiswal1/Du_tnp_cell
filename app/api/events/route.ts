import { NextResponse } from "next/server";

import { getCollection } from "@/lib/mongodb";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { upcomingEvents } from "@/lib/second-page-data";
import { eventItemSchema } from "@/lib/validators";

type EventDocument = {
  title: string;
  date: string;
  details: string;
  tag: string;
  cta: string;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * GET /api/events
 *
 * Purpose:
 * - Serves events from MongoDB for dynamic updates.
 * - Falls back to static data when DB records are unavailable.
 *
 * Maintenance notes for Batch 2027+:
 * - Keep response shape stable with UI card expectations.
 * - Preserve at least 4 records to avoid grid mismatch in existing layout.
 */
export async function GET(request: Request) {
  const clientIp = getClientIp(request.headers);
  const rate = checkRateLimit(`events:${clientIp}`, 80, 60_000);

  if (!rate.allowed) {
    return NextResponse.json({ ok: false, message: "Too many requests" }, { status: 429 });
  }

  try {
    const eventCollection = await getCollection<EventDocument>("events");
    const records = await eventCollection.find().sort({ updatedAt: -1 }).limit(8).toArray();

    if (records.length === 0) {
      return NextResponse.json({ ok: true, data: upcomingEvents, source: "static-fallback" });
    }

    const validated = records
      .map((item) => eventItemSchema.safeParse(item))
      .filter((result) => result.success)
      .map((result) => result.data);

    const payload = validated.length ? validated : upcomingEvents;
    return NextResponse.json({ ok: true, data: payload, source: validated.length ? "mongodb" : "static-fallback" });
  } catch {
    return NextResponse.json({ ok: true, data: upcomingEvents, source: "static-fallback" });
  }
}
