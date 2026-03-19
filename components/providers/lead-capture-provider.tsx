"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

import { LeadCaptureModal } from "@/components/providers/lead-capture-modal";

export type LeadIntent = "register_to_hire" | "download_brochure" | "event_registration" | "proposal_submission";

type LeadCaptureOpenOptions = {
  intent: LeadIntent;
  source: string;
};

type LeadCaptureContextValue = {
  openLeadCapture: (options: LeadCaptureOpenOptions) => void;
};

const LeadCaptureContext = createContext<LeadCaptureContextValue | null>(null);

export function LeadCaptureProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<LeadIntent>("register_to_hire");
  const [source, setSource] = useState("homepage");

  const contextValue = useMemo<LeadCaptureContextValue>(
    () => ({
      openLeadCapture: (options) => {
        setIntent(options.intent);
        setSource(options.source);
        setIsOpen(true);
      },
    }),
    [],
  );

  return (
    <LeadCaptureContext.Provider value={contextValue}>
      {children}
      <LeadCaptureModal
        intent={intent}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        source={source}
      />
    </LeadCaptureContext.Provider>
  );
}

export function useLeadCapture() {
  const context = useContext(LeadCaptureContext);
  if (!context) {
    throw new Error("useLeadCapture must be used inside LeadCaptureProvider");
  }

  return context;
}
