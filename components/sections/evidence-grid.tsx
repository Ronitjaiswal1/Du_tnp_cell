"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "1922",
    title: "Foundation",
    detailTitle: "University Genesis",
    desc: "The University of Delhi is established, planting the seeds for future technological advancements.",
  },
  {
    year: "1952",
    title: "Tech Initiative",
    detailTitle: "Engineering Expansion",
    desc: "Introduction of specialized engineering curricula to meet the needs of a newly independent nation.",
  },
  {
    year: "2008",
    title: "IoE Recognition",
    detailTitle: "National Prestige",
    desc: "Acknowledged as an Institution of Eminence, driving research and global collaborations.",
  },
  {
    year: "2023",
    title: "New Faculty",
    detailTitle: "Modern Faculty Launch",
    desc: "The formal establishment of the modern Faculty of Technology with cutting-edge infrastructure.",
  },
  {
    year: "2026",
    title: "Global Hub",
    detailTitle: "Future Vision",
    desc: "Projected expansion into AI-driven autonomous campuses and global exchange programs.",
  },
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
              className="group min-w-75 snap-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-serif text-7xl text-gold/20 italic mb-3 origin-left transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-gold/40">
                {event.year}
              </h3>
              <div className="rounded-lg border border-gold/20 bg-white/5 px-4 py-3 backdrop-blur-sm transition-all duration-300 group-hover:border-gold/50 group-hover:bg-white/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold/80">{event.detailTitle}</p>
                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:mt-2 group-hover:max-h-40 group-hover:opacity-100">
                  <p className="text-xl font-bold border-l-2 border-gold pl-4">{event.title}</p>
                  <p className="mt-2 text-antique-white/75">{event.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gold Standard Bento Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-150">
            {/* QS Asia Ranking Card */}
            <motion.div
              className="md:col-span-2 md:row-span-2 bg-antique-white border border-gray-100 rounded-lg p-12 flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-maroon to-maroon/80 mb-8 shadow-2xl flex items-center justify-center ring-8 ring-gold/20">
                <div className="w-36 h-36 rounded-full border-2 border-gold/60 flex flex-col items-center justify-center text-gold">
                  <span className="text-xs font-black tracking-[0.28em]">QS</span>
                  <span className="font-serif text-3xl font-black leading-none">ASIA</span>
                  <span className="mt-1 text-[10px] font-bold tracking-[0.22em]">RANKING</span>
                </div>
              </div>
              <h3 className="text-3xl font-serif text-maroon">QS Asia Ranking - DU</h3>
              <p className="text-gray-500 mt-4 max-w-xs">
                University of Delhi recognized in the QS Asia framework for academic excellence and global impact.
              </p>
            </motion.div>

            {/* NIRF Card */}
            <motion.div
              className="md:col-span-2 bg-maroon rounded-lg p-8 text-antique-white flex justify-between items-end relative overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.01 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
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
            </motion.div>

            {/* IoE Card */}
            <motion.div
              className="bg-gold/10 border border-gold/20 rounded-lg p-8 flex flex-col justify-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.12 }}
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-maroon text-gold shadow-md">
                <span className="material-symbols-outlined text-2xl">workspace_premium</span>
              </div>
              <h4 className="font-serif text-maroon text-xl font-bold">Institution of Eminence</h4>
              <p className="text-sm text-gray-600 mt-2">Special autonomy granted by the Govt. of India.</p>
            </motion.div>

            {/* Alumni Card */}
            <motion.div
              className="bg-gray-900 rounded-lg p-8 text-antique-white flex flex-col justify-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.16 }}
            >
              <h4 className="font-serif text-gold text-xl font-bold">Global Alumni</h4>
              <p className="text-3xl mt-1">10k+</p>
              <p className="text-xs text-white/50 mt-1 uppercase">Leaders across Fortune 500</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
