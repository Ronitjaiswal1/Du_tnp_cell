"use client";

import { useEffect, useState } from "react";
import { DigitalTwinHero } from "@/components/hero/digital-twin-hero";
import { EvidenceGrid } from "@/components/sections/evidence-grid";
import { RecruiterFunnel } from "@/components/sections/recruiter-funnel";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className="section-shell flex items-center justify-between py-6">
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-[var(--muted)]">DU FoT TnP Cell</p>
          <p className="mt-1 text-xs text-[var(--muted)]">Inaugural Batch • Elite Tech Identity</p>
        </div>
        <button
          type="button"
          className="btn-secondary"
          onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>

      <DigitalTwinHero theme={theme} />
      <EvidenceGrid />
      <RecruiterFunnel />
      <SiteFooter />
    </main>
  );
}
