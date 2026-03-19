"use client";

import { SiteNav } from "@/components/shared/site-nav";
import { DigitalTwinHero } from "@/components/hero/digital-twin-hero";
import { LeadershipMessages } from "@/components/sections/leadership-messages";
import { EvidenceGrid } from "../components/sections/evidence-grid";
import { RecruiterFunnel } from "@/components/sections/recruiter-funnel";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <main>
      <SiteNav activePage="home" hideOnScroll />

      <DigitalTwinHero />
      <LeadershipMessages />
      <EvidenceGrid />
      <RecruiterFunnel />
      <SiteFooter />
    </main>
  );
}

