import { SiteNav } from "@/components/shared/site-nav";

export const metadata = {
  title: "Faculty Placement Advisory Team | Faculty of Technology, Delhi University",
  description: "Faculty members guiding strategy, industry collaboration, and quality assurance for placements at FoT.",
};

const facultyTeam = [
  {
    name: "Prof. (Dr.) Ananya Mehra",
    role: "Chief Faculty Placement Advisor",
    department: "Computer Science Engineering",
    focus: "Defines annual placement strategy, policy standards, and institutional recruiter engagement goals.",
  },
  {
    name: "Prof. Rajeev Nanda",
    role: "Industry Relations Coordinator",
    department: "Electronics and Communication Engineering",
    focus: "Leads industry partnerships, MoU alignment, and long-term recruiter relations across sectors.",
  },
  {
    name: "Prof. S. K. Batra",
    role: "Assessment and Quality Chair",
    department: "Electrical Engineering",
    focus: "Oversees recruitment process quality, evaluation fairness, and candidate readiness frameworks.",
  },
  {
    name: "Dr. Neha Bansal",
    role: "Career Development Mentor",
    department: "Information Technology",
    focus: "Guides employability workshops, communication training, and domain-specific mentoring tracks.",
  },
];

const mandates = [
  "Ensure transparent and merit-driven placement processes",
  "Strengthen long-term recruiter trust and engagement",
  "Align student preparedness with evolving industry needs",
  "Enable continuous improvement through placement analytics",
];

export default function FacultyPlacementTeamPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-900">
      <SiteNav activePage="students" studentsSubPage="faculty-placement-team" />

      <main className="mx-auto w-full max-w-7xl px-6 py-12">
        <section className="mb-10 rounded-2xl border border-maroon/10 bg-white p-8 shadow-sm md:p-10">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-gold">Students</p>
          <h1 className="font-serif text-4xl font-bold text-maroon md:text-5xl">Faculty Placement Advisory Team</h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            The Faculty Placement Advisory Team provides strategic and academic guidance for placement initiatives,
            helping align institutional priorities with industry expectations and student career outcomes.
          </p>
        </section>

        <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {facultyTeam.map((member) => (
            <article key={member.name} className="rounded-xl border border-maroon/10 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-maroon">{member.name}</h2>
              <p className="mt-1 text-sm font-bold uppercase tracking-widest text-gold">{member.role}</p>
              <p className="mt-3 text-sm text-slate-700">{member.department}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{member.focus}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-maroon/10 bg-white p-8 shadow-sm md:p-10">
          <h2 className="font-serif text-3xl font-bold text-maroon">Team Mandates</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {mandates.map((item) => (
              <div key={item} className="rounded-lg border border-maroon/15 bg-maroon/5 px-4 py-3 text-sm font-semibold text-maroon">
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
