export function EventsHero() {
  return (
    <section className="relative overflow-hidden bg-maroon py-20 text-center text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.9) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-5xl font-black md:text-7xl">Pioneer Engagements</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-gold md:text-xl">
          A chronicle of innovation, industry collaboration, and technical mastery.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-xl bg-gold px-8 py-3 font-bold text-maroon shadow-lg transition-transform hover:scale-105" type="button">
            View Calendar
          </button>
          <button className="rounded-xl border-2 border-white/40 px-8 py-3 font-bold text-white transition-colors hover:bg-white/10" type="button">
            Suggest Workshop
          </button>
        </div>
      </div>
    </section>
  );
}
