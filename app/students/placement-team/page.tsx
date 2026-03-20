import { SiteNav } from "@/components/shared/site-nav";

export const metadata = {
  title: "Student Placement Leadership Team | Faculty of Technology, Delhi University",
  description: "Meet the student coordinators leading placement outreach, communication, and candidate support at FoT.",
};

const coreTeam = [
  {
    name: "Aarav Sharma",
    role: "Head Student Placement Coordinator",
    department: "Computer Science Engineering",
    responsibilities: "Leads student placement planning, recruiter communication support, and placement week operations.",
    email: "aarav.sharma@fot.du.ac.in",
  },
  {
    name: "Ritika Verma",
    role: "Corporate Outreach Lead",
    department: "Information Technology",
    responsibilities: "Coordinates pre-placement outreach decks, student profiles, and interaction schedules with company HR teams.",
    email: "ritika.verma@fot.du.ac.in",
  },
  {
    name: "Naman Gupta",
    role: "Assessment and Logistics Lead",
    department: "Electronics and Communication Engineering",
    responsibilities: "Manages test slots, interview logistics, panel coordination, and day-of-drive operations.",
    email: "naman.gupta@fot.du.ac.in",
  },
  {
    name: "Khushi Malhotra",
    role: "Candidate Experience Lead",
    department: "Electrical Engineering",
    responsibilities: "Supports student readiness, onboarding for drives, and communication help desk for candidates.",
    email: "khushi.malhotra@fot.du.ac.in",
  },
];

const functionalCells = [
  "Resume and Profile Verification Cell",
  "Aptitude and Interview Preparation Cell",
  "Recruiter Data and Analytics Cell",
  "Drive Operations and Venue Management Cell",
];

export default function StudentPlacementTeamPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-900">
      <SiteNav activePage="students" studentsSubPage="placement-team" />

      <main className="mx-auto w-full max-w-7xl px-6 py-12">
        <section className="mb-10 rounded-2xl border border-maroon/10 bg-white p-8 shadow-sm md:p-10">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-gold">Students</p>
          <h1 className="font-serif text-4xl font-bold text-maroon md:text-5xl">Student Placement Leadership Team</h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            This team acts as the student-facing bridge between the Placement Cell and graduating batches. Members ensure high-quality
            communication, seamless drive execution, and professional candidate support throughout the placement cycle.
          </p>
        </section>

        <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {coreTeam.map((member) => (
            <article key={member.email} className="rounded-xl border border-maroon/10 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-maroon">{member.name}</h2>
              <p className="mt-1 text-sm font-bold uppercase tracking-widest text-gold">{member.role}</p>
              <p className="mt-3 text-sm text-slate-700">{member.department}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{member.responsibilities}</p>
              <p className="mt-4 text-sm font-semibold text-maroon">{member.email}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-maroon/10 bg-white p-8 shadow-sm md:p-10">
          <h2 className="font-serif text-3xl font-bold text-maroon">Functional Cells</h2>
          <p className="mt-3 text-slate-600">
            Specialized student teams support every stage of campus recruitment to maintain transparency, speed, and quality outcomes.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {functionalCells.map((cell) => (
              <div key={cell} className="rounded-lg border border-maroon/15 bg-maroon/5 px-4 py-3 text-sm font-semibold text-maroon">
                {cell}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
