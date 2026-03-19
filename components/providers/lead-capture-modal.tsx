"use client";

import { FormEvent, useMemo, useState } from "react";

import type { LeadIntent } from "@/components/providers/lead-capture-provider";

type LeadCaptureModalProps = {
  isOpen: boolean;
  onClose: () => void;
  intent: LeadIntent;
  source: string;
};

type LeadResponse = {
  ok: boolean;
  handoverUrl?: string;
  message?: string;
};

export function LeadCaptureModal({ isOpen, onClose, intent, source }: LeadCaptureModalProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const heading = useMemo(() => {
    if (intent === "download_brochure") {
      return "Download Placement Brochure";
    }
    if (intent === "proposal_submission") {
      return "Submit Workshop Proposal";
    }
    if (intent === "event_registration") {
      return "Register for Event";
    }
    return "Register to Hire";
  }, [intent]);

  if (!isOpen) {
    return null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          workEmail,
          website,
          intent,
          source,
        }),
      });

      const payload = (await response.json()) as LeadResponse;
      if (!response.ok || !payload.ok || !payload.handoverUrl) {
        setErrorMessage(payload.message || "Unable to process request. Please try again.");
        return;
      }

      window.location.assign(payload.handoverUrl);
    } catch {
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/55 px-4" role="dialog" aria-modal>
      <div className="w-full max-w-xl rounded-2xl border border-maroon/15 bg-antique-white p-8 shadow-2xl">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-gold">Recruiter Access</p>
            <h3 className="mt-2 font-serif text-3xl text-maroon">{heading}</h3>
          </div>
          <button
            aria-label="Close"
            className="rounded-md border border-maroon/20 px-3 py-1.5 text-sm font-semibold text-maroon hover:bg-maroon hover:text-white"
            onClick={onClose}
            type="button"
          >
            Close
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-sm font-semibold text-maroon" htmlFor="lead-name">Name</label>
            <input
              className="w-full rounded-lg border border-maroon/20 bg-white px-4 py-3 text-sm outline-none ring-maroon/30 focus:ring"
              id="lead-name"
              maxLength={120}
              onChange={(e) => setName(e.target.value)}
              required
              value={name}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-maroon" htmlFor="lead-company">Company</label>
            <input
              className="w-full rounded-lg border border-maroon/20 bg-white px-4 py-3 text-sm outline-none ring-maroon/30 focus:ring"
              id="lead-company"
              maxLength={160}
              onChange={(e) => setCompany(e.target.value)}
              required
              value={company}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-maroon" htmlFor="lead-email">Work Email</label>
            <input
              className="w-full rounded-lg border border-maroon/20 bg-white px-4 py-3 text-sm outline-none ring-maroon/30 focus:ring"
              id="lead-email"
              maxLength={160}
              onChange={(e) => setWorkEmail(e.target.value)}
              required
              type="email"
              value={workEmail}
            />
          </div>

          {/* Honeypot field: should remain empty for legitimate users. */}
          <div className="hidden" aria-hidden>
            <label htmlFor="lead-website">Website</label>
            <input
              id="lead-website"
              name="website"
              onChange={(e) => setWebsite(e.target.value)}
              tabIndex={-1}
              value={website}
            />
          </div>

          {errorMessage ? (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{errorMessage}</p>
          ) : null}

          <button
            className="w-full rounded-lg bg-maroon px-6 py-3 font-bold text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Processing..." : "Continue to Official Portal"}
          </button>
        </form>
      </div>
    </div>
  );
}
