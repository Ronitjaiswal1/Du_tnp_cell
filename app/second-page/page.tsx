import { EventsCta } from "@/components/second-page/events-cta";
import { EventsFooter } from "@/components/second-page/events-footer";
import { EventsHero } from "@/components/second-page/events-hero";
import { ExcellenceGallery } from "@/components/second-page/excellence-gallery";
import { LegacyTimeline } from "@/components/second-page/legacy-timeline";
import { UpcomingEvents } from "@/components/second-page/upcoming-events";
import { SiteNav } from "@/components/shared/site-nav";

export default function SecondPage() {
  return (
    <main className="bg-antique-white text-slate-900">
      <SiteNav activePage="events" />
      <EventsHero />
      <UpcomingEvents />
      <LegacyTimeline />
      <ExcellenceGallery />
      <EventsCta />
      <EventsFooter />
    </main>
  );
}
