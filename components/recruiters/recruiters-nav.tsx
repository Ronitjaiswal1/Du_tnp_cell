"use client";

import { SiteNav } from "@/components/shared/site-nav";

type RecruitersNavProps = {
  activePage?: "contact" | "insights";
};

export function RecruitersNav({ activePage = "contact" }: RecruitersNavProps) {
  return <SiteNav activePage="recruiters" recruitersSubPage={activePage} />;
}
