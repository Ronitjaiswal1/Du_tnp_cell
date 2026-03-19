"use client";

import { useMemo, useState } from "react";

type Department = {
  id: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  highlights: string[];
  stats: { label: string; value: string }[];
};

const departments: Department[] = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    short: "CSE",
    tagline: "Building intelligent software systems for tomorrow.",
    description:
      "Focused on AI, systems, and software engineering with strong foundations in algorithms, architecture, and applied computing.",
    highlights: ["Artificial Intelligence", "Machine Learning", "Cloud Computing", "Cybersecurity"],
    stats: [
      { label: "Placement", value: "97%" },
      { label: "Labs", value: "12+" },
      { label: "Avg CTC", value: "12.4 LPA" },
    ],
  },
  {
    id: "ece",
    name: "Electronics & Communication",
    short: "ECE",
    tagline: "Powering connected and embedded innovations.",
    description:
      "Combines communication systems, VLSI, and embedded design to prepare graduates for semiconductor and telecom industries.",
    highlights: ["VLSI Design", "5G Communication", "Embedded Systems", "Signal Processing"],
    stats: [
      { label: "Placement", value: "98%" },
      { label: "Labs", value: "15+" },
      { label: "Avg CTC", value: "11.8 LPA" },
    ],
  },
  {
    id: "it",
    name: "Information Technology",
    short: "IT",
    tagline: "Engineering scalable digital products and platforms.",
    description:
      "Covers full-stack development, enterprise systems, and modern DevOps pipelines for industry-ready product engineering talent.",
    highlights: ["Full-Stack Development", "DevOps", "Data Engineering", "Enterprise Systems"],
    stats: [
      { label: "Placement", value: "96%" },
      { label: "Labs", value: "10+" },
      { label: "Avg CTC", value: "10.9 LPA" },
    ],
  },
  {
    id: "ee",
    name: "Electrical Engineering",
    short: "EE",
    tagline: "Designing smart, efficient and sustainable power systems.",
    description:
      "Emphasizes electrical machines, power electronics, controls, and renewable systems to build future-ready energy engineers.",
    highlights: ["Power Electronics", "Smart Grids", "Control Systems", "Renewable Energy"],
    stats: [
      { label: "Placement", value: "95%" },
      { label: "Labs", value: "11+" },
      { label: "Avg CTC", value: "9.8 LPA" },
    ],
  },
  {
    id: "me",
    name: "Mechanical Engineering",
    short: "ME",
    tagline: "Creating robust systems through design and manufacturing.",
    description:
      "Offers strong depth in mechanics, thermal engineering, CAD/CAM, and industrial design with practical lab exposure.",
    highlights: ["Thermodynamics", "Robotics", "Manufacturing", "CAD/CAM"],
    stats: [
      { label: "Placement", value: "94%" },
      { label: "Labs", value: "13+" },
      { label: "Avg CTC", value: "9.2 LPA" },
    ],
  },
];

export function DepartmentsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDepartment = departments[activeIndex];

  const progressWidth = useMemo(() => `${((activeIndex + 1) / departments.length) * 100}%`, [activeIndex]);

  return (
    <section id="departments" className="mt-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-1 w-10 bg-gold rounded-full" />
        <h2 className="font-serif text-4xl font-bold text-maroon">Departments</h2>
      </div>

      <div className="rounded-2xl border border-maroon/10 bg-white shadow-sm overflow-hidden">
        <div className="px-6 pt-6">
          <div className="overflow-x-auto hide-scrollbar">
            <div className="inline-flex min-w-full gap-2 border-b border-maroon/10 pb-3">
              {departments.map((dept, index) => (
                <button
                  key={dept.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    activeIndex === index
                      ? "bg-maroon text-antique-white"
                      : "bg-maroon/5 text-maroon hover:bg-maroon/10"
                  }`}
                >
                  {dept.short}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3 h-1 w-full rounded-full bg-maroon/10 overflow-hidden">
            <div className="h-full bg-gold transition-all duration-500" style={{ width: progressWidth }} />
          </div>
        </div>

        <div className="relative overflow-hidden p-6 md:p-8">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {departments.map((dept) => (
              <article key={dept.id} className="w-full shrink-0">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gold mb-2">Department Overview</p>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-maroon mb-3">{dept.name}</h3>
                    <p className="text-lg text-slate-700 font-semibold mb-3">{dept.tagline}</p>
                    <p className="text-slate-600 leading-relaxed mb-6">{dept.description}</p>

                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-gold mb-3">Core Tracks</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {dept.highlights.map((item) => (
                          <div key={item} className="rounded-lg border border-maroon/10 bg-maroon/5 px-3 py-2 text-sm font-semibold text-maroon">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-maroon/15 bg-antique-white p-5">
                    <p className="text-xs font-black uppercase tracking-widest text-maroon/70 mb-4">Performance Snapshot</p>
                    <div className="grid grid-cols-1 gap-3">
                      {dept.stats.map((stat) => (
                        <div key={stat.label} className="rounded-lg border border-maroon/10 bg-white px-4 py-3">
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</p>
                          <p className="text-2xl font-black text-maroon">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-maroon/10 bg-antique-white px-6 py-4">
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev === 0 ? departments.length - 1 : prev - 1))}
            className="rounded-lg border border-maroon/20 px-4 py-2 text-sm font-semibold text-maroon hover:bg-maroon/5 transition-colors"
          >
            Previous
          </button>

          <p className="text-xs font-black uppercase tracking-widest text-slate-500">
            {activeIndex + 1} / {departments.length}
          </p>

          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev === departments.length - 1 ? 0 : prev + 1))}
            className="rounded-lg bg-maroon px-4 py-2 text-sm font-semibold text-antique-white hover:bg-black transition-colors"
          >
            Next
          </button>
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-xs text-amber-800">
        Reference note: The departments reference file is currently empty in the workspace, so the exact source layout could not be mirrored yet.
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            name: "Production & Industrial Engineering",
            icon: "🏭",
            desc: "Optimization, operations research, and industrial automation for resilient manufacturing systems.",
          },
          {
            name: "Applied Sciences",
            icon: "🔬",
            desc: "Mathematics, physics, and foundational sciences powering research and interdisciplinary innovation.",
          },
        ].map((d) => (
          <div key={d.name} className="rounded-xl bg-white border border-maroon/10 p-8 hover:shadow-lg transition-all flex gap-6 items-start">
            <span className="text-4xl">{d.icon}</span>
            <div>
              <h3 className="font-serif text-xl font-bold text-maroon mb-2">{d.name}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="sr-only" aria-live="polite">
        Currently viewing {activeDepartment.name}
      </div>
    </section>
  );
}
