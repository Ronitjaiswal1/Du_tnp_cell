export function LeadershipMessages() {
  return (
    <section className="bg-antique-white py-24" id="leadership-messages">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-gold">Leadership Desk</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-maroon">Messages From Leadership</h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Vision and guidance from the Vice Chancellor and the Dean, Faculty of Technology, shaping a culture of innovation,
            integrity, and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="group rounded-2xl border border-maroon/20 bg-white p-8 shadow-sm transition-all duration-300 hover:bg-maroon hover:text-antique-white hover:shadow-lg">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-maroon/25 bg-maroon/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.du.ac.in/uploads/new-web/13092024_VC-ProfYogeshSingh-1.jpg"
                  alt="Prof. Yogesh Singh, Vice Chancellor"
                  className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
            </div>
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full bg-maroon/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-maroon transition-colors group-hover:bg-antique-white/15 group-hover:text-antique-white">
                Vice Chancellor
              </span>
              <span className="text-5xl leading-none text-gold/60">&quot;</span>
            </div>
            <p className="text-base leading-relaxed text-slate-700 transition-colors group-hover:text-antique-white/90">
              At the University of Delhi, we are committed to nurturing professionals who combine technical depth with social
              responsibility. The Faculty of Technology stands as a beacon of academic rigor and purposeful innovation,
              empowering students to build solutions for a rapidly changing world.
            </p>
            <div className="mt-8 border-t border-maroon/10 pt-5 transition-colors group-hover:border-antique-white/20">
              <p className="font-serif text-xl text-maroon transition-colors group-hover:text-gold">Prof. Yogesh Singh</p>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 transition-colors group-hover:text-antique-white/75">Vice Chancellor, University of Delhi</p>
            </div>
          </article>

          <article className="group rounded-2xl border border-maroon/20 bg-white p-8 shadow-sm transition-all duration-300 hover:bg-maroon hover:text-antique-white hover:shadow-lg">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-maroon/25 bg-maroon/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.du.ac.in/uploads/du/Faculty%20Images/sanjeev.jpg"
                  alt="Prof. Sanjeev Singh, Dean"
                  className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
            </div>
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full bg-maroon/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-maroon transition-colors group-hover:bg-antique-white/15 group-hover:text-antique-white">
                Dean
              </span>
              <span className="text-5xl leading-none text-gold/60">&quot;</span>
            </div>
            <p className="text-base leading-relaxed text-slate-700 transition-colors group-hover:text-antique-white/90">
              Our mission at the Faculty of Technology is to create an ecosystem where learning, research, and industry
              collaboration converge. We strive to produce graduates who are future-ready, ethically grounded, and capable of
              leading transformative change across engineering domains.
            </p>
            <div className="mt-8 border-t border-maroon/10 pt-5 transition-colors group-hover:border-antique-white/20">
              <p className="font-serif text-xl text-maroon transition-colors group-hover:text-gold">Prof. Sanjeev Singh</p>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 transition-colors group-hover:text-antique-white/75">Dean, Faculty of Technology</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
