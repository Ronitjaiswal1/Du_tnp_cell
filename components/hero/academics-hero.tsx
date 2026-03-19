"use client";

export function AcademicsHero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center pt-20 px-6 bg-linear-to-b from-maroon/5 to-antique-white"
      id="academics-hero"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-serif mt-8 mb-6 text-maroon">
          Academic Departments
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Discover our specialized engineering tracks, state-of-the-art curriculum, and the distinguished faculty shaping the next generation of technology leaders.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            className="inline-block px-8 py-3 bg-maroon text-antique-white text-lg font-semibold rounded-lg hover:bg-black transition-all shadow-lg"
            href="#departments-content"
          >
            Explore Departments
          </a>
          <a
            className="inline-block px-8 py-3 bg-maroon/90 text-antique-white text-lg font-semibold rounded-lg hover:bg-black transition-all shadow-lg"
            href="#department-mentors"
          >
            Meet Faculty
          </a>
        </div>
      </div>
    </section>
  );
}
