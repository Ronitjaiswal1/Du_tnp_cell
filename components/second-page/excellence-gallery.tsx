import { galleryItems } from "@/lib/second-page-data";

export function ExcellenceGallery() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h3 className="font-serif text-4xl font-bold text-maroon">Moments of Excellence</h3>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Capture the spirit of the faculty, from breakthrough lab moments to podium finishes.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {galleryItems.map((item) => (
          <article key={item.title} className={`${item.ratioClass} group relative overflow-hidden rounded-2xl bg-slate-200`}>
            <img alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.image} />
            <div className="absolute inset-0 flex items-center justify-center bg-maroon/60 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="px-3 text-center text-sm font-bold text-white">{item.title}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
