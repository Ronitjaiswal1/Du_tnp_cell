import { timelineEvents } from "@/lib/second-page-data";

export function LegacyTimeline() {
  return (
    <section className="overflow-hidden bg-slate-100 py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h3 className="font-serif text-4xl font-bold text-maroon">Legacy Timeline</h3>
          <p className="mt-3 text-slate-600">Relive the milestones that shaped our engineering culture.</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-maroon/20 md:block" />
          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const isReverse = index % 2 === 1;

              return (
                <article
                  key={event.title}
                  className={[
                    "relative flex flex-col gap-5 md:items-center",
                    isReverse ? "md:flex-row-reverse" : "md:flex-row",
                  ].join(" ")}
                >
                  <div className="w-full md:w-1/2 md:px-10">
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                      <h4 className="font-serif text-2xl font-bold text-maroon">{event.title}</h4>
                      <p className="mt-2 text-sm text-slate-600">{event.description}</p>
                    </div>
                  </div>

                  <div className="z-10 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-gold text-xs font-bold text-maroon shadow-lg md:flex">
                    {index + 1}
                  </div>

                  <div className="w-full md:w-1/2 md:px-10">
                    <div className="overflow-hidden rounded-2xl border-2 border-white shadow-lg">
                      <img alt={event.title} className="h-56 w-full object-cover" src={event.image} />
                    </div>
                    <div className="relative mt-3 inline-block group/date">
                      <span className="inline-flex origin-left rounded-full border border-gold/60 bg-maroon px-3 py-1 text-xs font-black uppercase tracking-wider text-gold transition-transform duration-300 ease-out group-hover/date:scale-110 group-focus-within/date:scale-110">
                        {event.month}
                      </span>
                      <div className="pointer-events-none absolute left-0 top-full z-20 mt-3 w-72 max-w-[85vw] rounded-xl border border-maroon/20 bg-white p-4 opacity-0 shadow-xl transition-all duration-300 ease-out group-hover/date:translate-y-0 group-hover/date:opacity-100 group-focus-within/date:translate-y-0 group-focus-within/date:opacity-100 -translate-y-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gold">Milestone</p>
                        <h5 className="mt-1 font-serif text-lg font-bold text-maroon">{event.title}</h5>
                        <p className="mt-2 text-xs leading-relaxed text-slate-600">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
