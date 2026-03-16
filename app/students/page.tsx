import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Students | Faculty of Technology, University of Delhi",
  description: "Student achievements, clubs, placements, and life at Faculty of Technology, University of Delhi.",
};

const achievements = [
  {
    title: "Smart India Hackathon 2024 — Winners",
    dept: "Computer Science",
    desc: "Team ByteForge from FoT secured 1st place among 5,000+ teams nationwide, building an AI-powered disaster response management system.",
    badge: "🏆 National Winner",
    year: "2024",
  },
  {
    title: "IEEE Region 10 Best Paper Award",
    dept: "Electronics & Communication",
    desc: "Research on low-power VLSI architectures for edge computing won the Best Paper Award at IEEE TENCON 2024.",
    badge: "📄 Best Paper",
    year: "2024",
  },
  {
    title: "Google Summer of Code — 4 Selections",
    dept: "Computer Science / IT",
    desc: "Four FoT students earned prestigious GSoC 2024 slots contributing to open-source projects at CERN, Mozilla, and Chromium.",
    badge: "🌐 GSoC 2024",
    year: "2024",
  },
  {
    title: "Robocon India — Top 8 Finish",
    dept: "Electrical Engineering",
    desc: "Team Robopioneers competed at ABU Robocon 2025, finishing in the top 8 nationally with an autonomous agri-bot.",
    badge: "🤖 Robocon",
    year: "2025",
  },
  {
    title: "Microsoft Imagine Cup — Semi-Finalists",
    dept: "IT",
    desc: "FoT's HealthBridge project — an accessible telemedicine platform for rural India — reached global semi-finals.",
    badge: "💡 Imagine Cup",
    year: "2025",
  },
  {
    title: "ISRO Yuvika Programme — 3 Selections",
    dept: "Electrical / CS",
    desc: "Three FoT undergraduate students selected for ISRO's Young Scientist Programme, getting hands-on with satellite tech.",
    badge: "🚀 ISRO",
    year: "2025",
  },
];

const clubs = [
  { name: "Enigma — CS Club", desc: "Competitive programming, open-source contributions & hackathon prep.", icon: "💻", members: 180 },
  { name: "CircuitByte — ECE Club", desc: "PCB design, robotics builds, and national competition teams.", icon: "⚡", members: 120 },
  { name: "DevHub — IT Club", desc: "Full-stack projects, app development marathons, and startup pitches.", icon: "🌐", members: 210 },
  { name: "IEEE Student Branch", desc: "Research seminars, paper writing workshops, and industrial visits.", icon: "📡", members: 95 },
  { name: "E-Cell FoT", desc: "Entrepreneurship events, startup mentoring, and investor connects.", icon: "🚀", members: 150 },
  { name: "NSS Unit FoT", desc: "Community service, social campaigns, and national integration camps.", icon: "🤝", members: 200 },
];

const topRecruiters = [
  "Microsoft", "Google", "Samsung R&D", "Qualcomm", "HCL Technologies",
  "TCS", "Infosys", "Wipro", "Accenture", "NTPC", "BHEL", "ITC Infotech",
];

const placements = [
  { label: "Placement Rate", value: "97%+", icon: "📈" },
  { label: "Highest Package", value: "₹42 LPA", icon: "💰" },
  { label: "Average Package", value: "₹8.6 LPA", icon: "📊" },
  { label: "Companies Visited", value: "80+", icon: "🏢" },
];

export default function StudentsPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#FDFBF7] text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-maroon/10 bg-[#FDFBF7]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <div className="h-12 w-45 overflow-hidden rounded-lg border border-maroon/20 bg-white/90 px-2 py-1 shadow-sm">
                <Image src="/fo_logo.png" alt="FoT logo" width={180} height={48} className="h-full w-full object-contain" priority />
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-maroon transition-colors">Home</Link>
              <Link href="/academics" className="text-sm font-semibold text-slate-600 hover:text-maroon transition-colors">Academics</Link>
              <Link href="/students" className="text-sm font-bold text-maroon border-b-2 border-maroon pb-0.5">Students</Link>
              <Link href="/events" className="text-sm font-semibold text-slate-600 hover:text-maroon transition-colors">Events</Link>
            </nav>
          </div>
          <div className="hidden sm:flex items-center bg-maroon/5 border border-maroon/20 rounded-full px-4 py-2 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-maroon/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input className="bg-transparent border-none outline-none text-sm text-maroon placeholder:text-maroon/40 w-36" placeholder="Search..." type="text" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 w-full">

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          <div className="lg:col-span-8 rounded-xl bg-white border border-maroon/10 p-10 flex flex-col justify-center relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-10 opacity-5 select-none">
              <span className="text-[10rem] leading-none">🎓</span>
            </div>
            <p className="text-xs font-black uppercase tracking-widest text-gold mb-3">Student Life & Achievements</p>
            <h1 className="font-serif text-5xl md:text-6xl font-black leading-tight text-maroon mb-6">
              Our Pioneers<br /><span className="text-gold">Make History</span>
            </h1>
            <p className="max-w-xl text-lg text-slate-600 leading-relaxed mb-8">
              From national hackathon victories to global research publications — FoT students
              consistently lead in innovation, entrepreneurship, and social impact.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#achievements" className="inline-flex items-center gap-2 bg-maroon text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition-all">
                View Achievements <span>→</span>
              </a>
              <Link href="/events" className="inline-flex items-center gap-2 border-2 border-maroon text-maroon px-8 py-3 rounded-lg font-bold hover:bg-maroon hover:text-white transition-all">
                Upcoming Events
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 rounded-xl overflow-hidden h-72 lg:h-auto relative border border-maroon/10 shadow-sm">
            <Image src="/FOT.png" alt="FoT Campus" fill className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-maroon/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">Batch of 2025</p>
              <p className="font-serif text-xl font-bold">125+ Placed</p>
            </div>
          </div>
        </div>

        {/* Placement Stats */}
        <section className="mb-16">
          <div className="rounded-xl bg-maroon text-white p-8">
            <h2 className="font-serif text-2xl font-bold mb-8 text-center text-gold uppercase tracking-widest">Placement Highlights 2024–25</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {placements.map((p) => (
                <div key={p.label}>
                  <p className="text-3xl mb-1">{p.icon}</p>
                  <p className="text-4xl font-black text-gold">{p.value}</p>
                  <p className="text-xs uppercase tracking-widest font-bold mt-2 opacity-80">{p.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-10 bg-gold rounded-full" />
            <h2 className="font-serif text-4xl font-bold text-maroon">Student Achievements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((a) => (
              <div key={a.title} className="bg-white rounded-xl border border-maroon/10 p-8 hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full">
                    {a.year}
                  </span>
                  <span className="text-sm font-bold text-maroon">{a.badge}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-maroon mb-2 group-hover:text-gold transition-colors">{a.title}</h3>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">{a.dept}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Student Clubs */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-10 bg-gold rounded-full" />
            <h2 className="font-serif text-4xl font-bold text-maroon">Student Clubs & Societies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((c) => (
              <div key={c.name} className="bg-white rounded-xl border border-maroon/10 p-6 hover:shadow-lg transition-all flex gap-5 items-start">
                <span className="text-3xl">{c.icon}</span>
                <div>
                  <h3 className="font-bold text-maroon mb-1">{c.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{c.desc}</p>
                  <p className="text-xs font-black uppercase tracking-widest text-gold">{c.members} Members</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Recruiters */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-10 bg-gold rounded-full" />
            <h2 className="font-serif text-4xl font-bold text-maroon">Top Recruiters</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {topRecruiters.map((r) => (
              <span key={r} className="px-4 py-2 bg-white border border-maroon/20 rounded-full text-sm font-semibold text-maroon hover:bg-maroon hover:text-white transition-all cursor-default">
                {r}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-maroon/5 border-t border-maroon/10 py-12 px-6 mt-auto">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="h-14 w-45 overflow-hidden rounded-lg border border-maroon/20 bg-white px-2 py-1 mb-4">
              <Image src="/fo_logo.png" alt="FoT logo" width={180} height={56} className="h-full w-full object-contain" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Empowering students to innovate, lead, and make a difference since 1952.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-maroon mb-4 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/" className="hover:text-maroon transition-colors">Home</Link></li>
              <li><Link href="/academics" className="hover:text-maroon transition-colors">Academics</Link></li>
              <li><Link href="/students" className="hover:text-maroon transition-colors">Students</Link></li>
              <li><Link href="/events" className="hover:text-maroon transition-colors">Events</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-maroon mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>tnp.fot@du.ac.in</li>
              <li>+91 11 2766 7000</li>
              <li>University Enclave, North Campus, Delhi 110007</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl mt-10 pt-6 border-t border-maroon/10 text-center text-xs text-slate-400 font-bold uppercase tracking-widest">
          © 2026 Faculty of Technology, University of Delhi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
