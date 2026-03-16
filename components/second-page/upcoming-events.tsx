import { featuredEvent, upcomingEvents } from "@/lib/second-page-data";

export function UpcomingEvents() {
  const [mainCard, compactCard, firstMiniCard, secondMiniCard] = upcomingEvents;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
        <div>
          <h3 className="font-serif text-4xl font-bold text-maroon">Upcoming Events</h3>
          <div className="mt-2 h-1.5 w-24 rounded-full bg-gold" />
        </div>
        <a className="text-sm font-bold text-maroon hover:underline" href="#">
          See All
        </a>
      </div>

      <div className="grid h-auto grid-cols-1 gap-6 md:h-[620px] md:grid-cols-4 md:grid-rows-2">
        <article className="relative overflow-hidden rounded-xl md:col-span-2 md:row-span-2">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
            style={{ backgroundImage: `url('${featuredEvent.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/35 to-transparent" />
          <div className="absolute bottom-0 p-8 text-white">
            <span className="mb-4 inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-maroon">
              Featured
            </span>
            <h4 className="font-serif text-3xl font-bold">{featuredEvent.title}</h4>
            <p className="mt-2 text-sm text-white/85">{featuredEvent.details}</p>
            <button className="mt-5 rounded-lg bg-white px-6 py-2 text-sm font-bold text-maroon transition-colors hover:bg-gold" type="button">
              Register Now
            </button>
          </div>
        </article>

        <article className="rounded-xl border-l-4 border-gold bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-start justify-between">
            <span className="rounded-xl bg-maroon/10 px-3 py-2 text-sm font-semibold text-maroon">{compactCard.tag}</span>
            <span className="text-sm font-bold text-maroon">{compactCard.date}</span>
          </div>
          <h4 className="text-xl font-bold text-maroon">{compactCard.title}</h4>
          <p className="mt-2 text-sm text-slate-600">{compactCard.details}</p>
          <button className="mt-4 text-sm font-bold text-maroon" type="button">
            {compactCard.cta}
          </button>
        </article>

        <article className="flex flex-col justify-between rounded-xl border-l-4 border-maroon bg-maroon/5 p-6">
          <div>
            <h4 className="font-bold text-maroon">{firstMiniCard.title}</h4>
            <p className="mt-2 text-xs text-slate-600">
              {firstMiniCard.date} - {firstMiniCard.details}
            </p>
          </div>
          <button className="mt-4 w-full rounded-lg border border-maroon/20 py-2 text-sm font-bold text-maroon hover:bg-maroon/5" type="button">
            {firstMiniCard.cta}
          </button>
        </article>

        <article className="flex flex-col justify-between rounded-xl border-l-4 border-gold bg-gold/15 p-6">
          <div>
            <h4 className="font-bold text-maroon">{secondMiniCard.title}</h4>
            <p className="mt-2 text-xs text-slate-700">
              {secondMiniCard.date} - {secondMiniCard.details}
            </p>
          </div>
          <button className="mt-4 w-full rounded-lg bg-maroon py-2 text-sm font-bold text-white shadow-md" type="button">
            {secondMiniCard.cta}
          </button>
        </article>
      </div>
    </section>
  );
}
