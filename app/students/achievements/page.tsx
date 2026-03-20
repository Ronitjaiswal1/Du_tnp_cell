import { SiteNav } from "@/components/shared/site-nav";

export const metadata = {
  title: "Student Achievements and Honors | Faculty of Technology, Delhi University",
  description: "Comprehensive achievements of FoT students across placements, research, competitions, innovation, and leadership.",
};

const achievementGroups = [
  {
    category: "Placements and Career Milestones",
    items: [
      "127 students from the 2025 graduating batch received placement offers across core engineering and technology domains.",
      "Highest domestic package reached INR 34 LPA, with strong offers in software engineering, analytics, and semiconductor roles.",
      "45+ students secured internship-to-PPO conversions through national and global recruiters.",
      "Placement participation included over 70 recruiting organizations from product, consulting, and public-sector segments.",
    ],
  },
  {
    category: "National Competitions and Hackathons",
    items: [
      "FoT teams achieved top rankings in Smart India Hackathon grand finale categories on AI for social impact and governance solutions.",
      "Student robotics teams earned national finalist positions in Robocon-style autonomous systems challenges.",
      "Multiple teams won university-level innovation challenges for cybersecurity, health-tech, and mobility prototypes.",
      "Programming teams recorded podium finishes in inter-college coding marathons and algorithm contests.",
    ],
  },
  {
    category: "Research, Publications, and Technical Excellence",
    items: [
      "Students co-authored papers in peer-reviewed conferences on VLSI design, machine learning, and smart infrastructure.",
      "Final-year capstone projects were showcased in faculty research forums with industry mentor feedback.",
      "IEEE and other professional student chapters organized technical paper-writing and design-thinking workshops.",
      "Open-source contributions from FoT students were accepted in major public repositories and research toolkits.",
    ],
  },
  {
    category: "Entrepreneurship and Social Impact",
    items: [
      "Student founders from FoT incubation cohorts progressed prototypes into market-validation stages.",
      "Campus teams developed assistive and rural-access technology solutions through social innovation projects.",
      "E-Cell initiatives supported business model development, investor-pitch practice, and startup mentoring.",
      "Cross-disciplinary student groups built community-driven digital tools for education and healthcare outreach.",
    ],
  },
];

const yearlyHighlights = [
  { year: "2023", highlight: "Institutional innovation challenges expanded and student participation crossed 500 entries." },
  { year: "2024", highlight: "National-level hackathon and research recognitions increased across all core departments." },
  { year: "2025", highlight: "Record placement outcomes, strong PPO pipeline, and higher student-led project commercialization." },
];

export default function StudentsAchievementsPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-900">
      <SiteNav activePage="students" studentsSubPage="achievements" />

      <main className="mx-auto w-full max-w-7xl px-6 py-12">
        <section className="mb-10 rounded-2xl border border-maroon/10 bg-white p-8 shadow-sm md:p-10">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-gold">Students</p>
          <h1 className="font-serif text-4xl font-bold text-maroon md:text-5xl">Student Achievements and Honors</h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            FoT students continue to set high standards in placements, innovation, and research. This page highlights key outcomes that
            demonstrate their technical depth, leadership, and national-level impact.
          </p>
        </section>

        <section className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {achievementGroups.map((group) => (
            <article key={group.category} className="rounded-xl border border-maroon/10 bg-white p-6 shadow-sm md:p-7">
              <h2 className="font-serif text-2xl font-bold text-maroon">{group.category}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                {group.items.map((item) => (
                  <li key={item} className="rounded-md border border-maroon/10 bg-maroon/5 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-maroon/10 bg-white p-8 shadow-sm md:p-10">
          <h2 className="font-serif text-3xl font-bold text-maroon">Year-wise Highlights</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {yearlyHighlights.map((item) => (
              <div key={item.year} className="rounded-xl border border-gold/30 bg-gold/10 p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-maroon">{item.year}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.highlight}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
