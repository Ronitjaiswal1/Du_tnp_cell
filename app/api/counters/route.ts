import { NextResponse } from "next/server";

import { getCollection } from "@/lib/mongodb";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { countersSchema } from "@/lib/validators";

type CounterDocument = {
  key: "placements";
  placementRate: string;
  highestPackage: string;
  averagePackage: string;
  companiesVisited: string;
  updatedAt: Date;
};

const fallbackCounters = {
  placementRate: "97%+",
  highestPackage: "Rs42 LPA",
  averagePackage: "Rs8.6 LPA",
  companiesVisited: "80+",
};

/**
 * GET /api/counters
 *
 * Purpose:
 * - Serves student placement counters from MongoDB.
 * - Gracefully falls back to static values during outages.
 *
 * Maintenance notes for Batch 2027+:
 * - Keep key name `placements` stable unless frontend mapping is updated.
 * - Update fallback values each placement cycle.
 */
export async function GET(request: Request) {
  const clientIp = getClientIp(request.headers);
  const rate = checkRateLimit(`counters:${clientIp}`, 80, 60_000);

  if (!rate.allowed) {
    return NextResponse.json({ ok: false, message: "Too many requests" }, { status: 429 });
  }

  try {
    const counterCollection = await getCollection<CounterDocument>("achievement_counters");
    const record = await counterCollection.findOne({ key: "placements" });

    if (!record) {
      return NextResponse.json({ ok: true, data: fallbackCounters, source: "static-fallback" });
    }

    const validated = countersSchema.safeParse(record);
    if (!validated.success) {
      return NextResponse.json({ ok: true, data: fallbackCounters, source: "static-fallback" });
    }

    return NextResponse.json({ ok: true, data: validated.data, source: "mongodb" });
  } catch {
    return NextResponse.json({ ok: true, data: fallbackCounters, source: "static-fallback" });
  }
}
