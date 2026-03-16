"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  { year: "1922", title: "Foundation", desc: "The University of Delhi is established, planting the seeds for future technological advancements." },
  { year: "1952", title: "Tech Initiative", desc: "Introduction of specialized engineering curricula to meet the needs of a newly independent nation." },
  { year: "2008", title: "IoE Recognition", desc: "Acknowledged as an Institution of Eminence, driving research and global collaborations." },
  { year: "2023", title: "New Faculty", desc: "The formal establishment of the modern Faculty of Technology with cutting-edge infrastructure." },
  { year: "2026", title: "Global Hub", desc: "Projected expansion into AI-driven autonomous campuses and global exchange programs." },
];

const depts = [
  { icon: "💻", title: "Computer Science & Engineering", desc: "Mastering algorithms, software architecture, and the digital frontier." },
  { icon: "📡", title: "Electronics & Communication", desc: "Bridging the world through hardware innovation and telecommunications." },
  { icon: "⚡", title: "Electrical Engineering", desc: "Powering the sustainable future with smart grids and renewable energy." },
];

export function EvidenceGrid() {
  return (
    <>
      {/* Legacy Timeline */}
      <section className="py-24 bg-maroon text-antique-white overflow-hidden" id="legacy">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            A Century of <span className="text-gold">Excellence</span>
          </h2>
          <p className="text-antique-white/60 max-w-xl">
            From the historic halls of 1922 to the futuristic labs of 2026, we track a journey of innovation.
          </p>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6 space-x-12 pb-12">
          {timelineEvents.map((event, i) => (
            <motion.div
              key={event.year}
              className="min-w-75 snap-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-serif text-7xl text-gold/20 italic mb-4">{event.year}</h3>
              <p className="text-xl font-bold border-l-2 border-gold pl-4">{event.title}</p>
              <p className="mt-2 text-antique-white/70">{event.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gold Standard Bento Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-150">
            {/* Rotating NAAC Seal */}
            <div className="md:col-span-2 md:row-span-2 bg-antique-white border border-gray-100 rounded-lg p-12 flex flex-col items-center justify-center text-center hover:border-gold/50 transition-colors">
              <div className="w-48 h-48 bg-gold rounded-full flex items-center justify-center animate-spin-slow mb-8 shadow-2xl">
                <div className="w-40 h-40 border-4 border-dashed border-white rounded-full flex items-center justify-center">
                  <span className="font-serif font-black text-white text-4xl text-center leading-tight">NAAC A++</span>
                </div>
              </div>
              <h3 className="text-3xl font-serif text-maroon">The Gold Standard</h3>
              <p className="text-gray-500 mt-4 max-w-xs">
                Recognized globally for maintaining the highest standards in education and research.
              </p>
            </div>

            {/* NIRF Card */}
            <div className="md:col-span-2 bg-maroon rounded-lg p-8 text-antique-white flex justify-between items-end relative overflow-hidden">
              <div className="z-10">
                <p className="text-gold text-sm font-bold uppercase tracking-widest">NIRF Ranking</p>
                <h3 className="text-5xl font-serif mt-2">Top 10</h3>
                <p className="mt-2 text-antique-white/60">Among Engineering Faculties nationwide.</p>
              </div>
              <div className="flex items-end space-x-2 h-32 opacity-30">
                <div className="w-4 bg-gold h-[20%]" />
                <div className="w-4 bg-gold h-[40%]" />
                <div className="w-4 bg-gold h-[60%]" />
                <div className="w-4 bg-gold h-full" />
              </div>
            </div>

            {/* IoE Card */}
            <div className="bg-gold/10 border border-gold/20 rounded-lg p-8 flex flex-col justify-center">
              <h4 className="font-serif text-maroon text-xl font-bold">Institution of Eminence</h4>
              <p className="text-sm text-gray-600 mt-2">Special autonomy granted by the Govt. of India.</p>
            </div>

            {/* Alumni Card */}
            <div className="bg-gray-900 rounded-lg p-8 text-antique-white flex flex-col justify-center">
              <h4 className="font-serif text-gold text-xl font-bold">Global Alumni</h4>
              <p className="text-3xl mt-1">10k+</p>
              <p className="text-xs text-white/50 mt-1 uppercase">Leaders across Fortune 500</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Core */}
      <section className="py-24 bg-antique-white" id="departments">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
            <div>
              <h2 className="font-serif text-4xl text-maroon">Academic Departments</h2>
              <p className="text-gray-500 mt-2">Multidisciplinary approach to modern engineering.</p>
            </div>
            <div className="h-1 bg-gold w-24" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depts.map((dept, i) => (
              <motion.div
                key={dept.title}
                className="p-8 glass-dark rounded-lg border-l-4 border-maroon hover:-translate-y-2 transition-transform cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-16 h-16 mb-6 bg-white/50 rounded-lg flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {dept.icon}
                </div>
                <h3 className="text-2xl font-serif text-maroon mb-4">{dept.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{dept.desc}</p>
                <a className="text-maroon font-bold text-sm uppercase tracking-wider flex items-center" href="#">
                  View Details <span className="ml-2">→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

