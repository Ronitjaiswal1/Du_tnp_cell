import { SiteNav } from "@/components/shared/site-nav";

type AcademicsNavProps = {
  subPage?: "departments" | "facilities";
};

export function AcademicsNav({ subPage = "departments" }: AcademicsNavProps) {
  return <SiteNav activePage="academics" academicsSubPage={subPage} />;
}
