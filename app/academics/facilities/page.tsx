import { AcademicsNav } from "@/components/academics/academics-nav";
import { SiteFooter } from "@/components/sections/site-footer";

export const metadata = {
  title: "Facilities | Faculty of Technology, University of Delhi",
  description: "Explore labs, workshops, and the Central Science Library across CSE, ECE, and Electrical Engineering at Faculty of Technology, University of Delhi.",
};

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-slate-900">
      <AcademicsNav subPage="facilities" />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-12">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-gold">Academics</p>
          <h1 className="mt-3 font-serif text-5xl text-maroon">Facilities</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Add and showcase photos from labs, workshops, and the Central Science Library across Computer Science Engineering, Electronic and
            Communication Engineering, and Electrical Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-maroon/20 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-3xl text-maroon">Labs</h2>
              <span className="rounded-full bg-maroon/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-maroon">
                Add Photos
              </span>
            </div>
            <p className="mb-6 text-sm text-slate-600">
              Replace each image slot with photos from your CSE, ECE, and EE labs.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`lab-slot-${index + 1}`}
                  className="h-40 rounded-xl border-2 border-dashed border-maroon/30 bg-maroon/5 flex items-center justify-center px-3"
                >
                  <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-maroon/80">
                    Lab Image Slot {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-maroon/20 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-3xl text-maroon">Workshops</h2>
              <span className="rounded-full bg-maroon/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-maroon">
                Add Photos
              </span>
            </div>
            <p className="mb-6 text-sm text-slate-600">
              Replace each image slot with photos from hands-on departmental workshops.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`workshop-slot-${index + 1}`}
                  className="h-40 rounded-xl border-2 border-dashed border-maroon/30 bg-maroon/5 flex items-center justify-center px-3"
                >
                  <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-maroon/80">
                    Workshop Image Slot {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-maroon/20 bg-white p-8 shadow-sm lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-3xl text-maroon">Central Science Library</h2>
              <span className="rounded-full bg-maroon/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-maroon">
                Add Photos
              </span>
            </div>
            <p className="mb-6 text-sm text-slate-600">
              Replace each image slot with photos of reading halls, digital resources, and library study spaces.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`library-slot-${index + 1}`}
                  className="h-40 rounded-xl border-2 border-dashed border-maroon/30 bg-maroon/5 flex items-center justify-center px-3"
                >
                  <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-maroon/80">
                    Library Image Slot {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
