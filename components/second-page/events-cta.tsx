"use client";

import { useLeadCapture } from "@/components/providers/lead-capture-provider";

export function EventsCta() {
  const { openLeadCapture } = useLeadCapture();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-4xl bg-maroon p-12 text-center text-white">
        <div className="pointer-events-none absolute -right-8 -top-6 h-36 w-36 rounded-full border border-white/20" />
        <h3 className="font-serif text-4xl font-bold md:text-5xl">Ready to Lead the Next Wave?</h3>
        <p className="mx-auto mt-5 max-w-xl text-base text-gold md:text-lg">
          Register for upcoming events or propose your own technical workshop today.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            className="rounded-xl bg-white px-10 py-4 font-bold text-maroon shadow-xl transition-colors hover:bg-gold"
            onClick={() => openLeadCapture({ intent: "event_registration", source: "events_cta" })}
            type="button"
          >
            Register for Hackathon
          </button>
          <button
            className="rounded-xl border border-white/30 bg-white/10 px-10 py-4 font-bold text-white transition-colors hover:bg-white/20"
            onClick={() => openLeadCapture({ intent: "proposal_submission", source: "events_cta" })}
            type="button"
          >
            Submit Proposal
          </button>
        </div>
      </div>
    </section>
  );
}
