import { AcademicsNav } from "@/components/academics/academics-nav";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Academics | Faculty of Technology, University of Delhi",
  description: "Explore departments, programs, faculty and research at the Faculty of Technology, University of Delhi.",
};

const departments = [
  {
    id: "cs",
    slug: "computer-science",
    name: "Computer Science & Engineering",
    icon: "💻",
    tagline: "Architecting intelligent systems and the software that powers modern civilization.",
    specializations: ["Artificial Intelligence", "Machine Learning", "Cloud Computing", "Cybersecurity"],
    minors: ["Data Science", "IoT"],
    placements: "97%",
    labs: "12+",
    color: "from-blue-600/10 to-indigo-600/5",
    border: "border-blue-600/30",
  },
  {
    id: "ece",
    slug: "electronics-communication",
    name: "Electronics & Communication",
    icon: "📡",
    tagline: "Innovating at the intersection of hardware, communication, and intelligent systems.",
    specializations: ["VLSI Design", "5G Communication", "Embedded Systems", "RF Engineering"],
    minors: ["IoT", "Robotics"],
    placements: "98%",
    labs: "15+",
    color: "from-emerald-600/10 to-teal-600/5",
    border: "border-emerald-600/30",
  },
  {
    id: "it",
    slug: "information-technology",
    name: "Information Technology",
    icon: "🌐",
    tagline: "Bridging the gap between software engineering and enterprise-grade information systems.",
    specializations: ["Full-Stack Development", "DevOps", "Data Engineering", "ERP Systems"],
    minors: ["UI/UX Design", "Blockchain"],
    placements: "96%",
    labs: "10+",
    color: "from-amber-600/10 to-orange-600/5",
    border: "border-amber-600/30",
  },
];

const faculty = [
  {
    name: "Prof. Ramesh Kumar",
    role: "Head of Department — CS",
    tags: ["PhD IIT Delhi", "25+ Yrs Exp"],
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Sunita Aggarwal",
    role: "AI & ML Research Lead",
    tags: ["PhD Stanford", "IEEE Fellow"],
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Prof. Anil Sharma",
    role: "Cybersecurity & Networks",
    tags: ["PhD MIT", "20+ Yrs Exp"],
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Priya Mehta",
    role: "Cloud & Distributed Systems",
    tags: ["PhD IISc", "ACM Member"],
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
];

export default function AcademicsPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#FDFBF7] text-slate-900">
      <AcademicsNav />

      <main className="mx-auto max-w-7xl px-6 py-12 w-full">
        {/* Hero Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Main Title Card */}
          <div className="lg:col-span-8 rounded-xl bg-white border border-maroon/10 p-10 flex flex-col justify-center relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-10 opacity-5 select-none">
              <span className="text-[10rem] leading-none">🎓</span>
            </div>
            <p className="text-xs font-black uppercase tracking-widest text-gold mb-3">
              Faculty of Technology · University of Delhi
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-black leading-tight text-maroon mb-6">
              Departments &amp;<br />
              <span className="text-gold">Academic Programs</span>
            </h1>
            <p className="max-w-xl text-lg text-slate-600 leading-relaxed mb-8">
              World-class engineering education across Computer Science, Electronics,
              Electrical, Mechanical, and Production disciplines — shaping innovators
              since 1952.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#departments" className="inline-flex items-center gap-2 bg-maroon text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition-all">
                Explore Departments <span>→</span>
              </a>
              <Link href="/students" className="inline-flex items-center gap-2 border-2 border-maroon text-maroon px-8 py-3 rounded-lg font-bold hover:bg-maroon hover:text-white transition-all">
                Student Achievements
              </Link>
            </div>
          </div>

          {/* Featured Image */}
          <div className="lg:col-span-4 rounded-xl overflow-hidden h-80 lg:h-auto relative border border-maroon/10 shadow-sm">
            <Image
              src="/FOT.png"
              alt="Faculty of Technology Building"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-maroon/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">Est. 1952</p>
              <p className="font-serif text-xl font-bold">Faculty of Technology</p>
            </div>
          </div>

          {/* Stat Strip */}
          <div className="lg:col-span-12 rounded-xl bg-maroon text-white p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-black text-gold">97%+</p>
                <p className="text-xs uppercase tracking-widest font-bold mt-2 opacity-80">Average Placement Rate</p>
              </div>
              <div>
                <p className="text-4xl font-black text-gold">5</p>
                <p className="text-xs uppercase tracking-widest font-bold mt-2 opacity-80">Departments</p>
              </div>
              <div>
                <p className="text-4xl font-black text-gold">40+</p>
                <p className="text-xs uppercase tracking-widest font-bold mt-2 opacity-80">Research Labs</p>
              </div>
              <div>
                <p className="text-4xl font-black text-gold">70+</p>
                <p className="text-xs uppercase tracking-widest font-bold mt-2 opacity-80">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Department Cards */}
        <section id="departments" className="mt-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-10 bg-gold rounded-full" />
            <h2 className="font-serif text-4xl font-bold text-maroon">Departments</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className={`rounded-xl bg-linear-to-br ${dept.color} border ${dept.border} p-8 hover:shadow-xl transition-all group flex flex-col`}
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="font-serif text-xl font-bold text-maroon mb-2">{dept.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{dept.tagline}</p>

                <div className="mb-4">
                  <p className="text-xs font-black uppercase tracking-widest text-gold mb-2">Specializations</p>
                  <ul className="space-y-1">
                    {dept.specializations.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold inline-block" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-black uppercase tracking-widest text-gold mb-2">Minors Available</p>
                  <div className="flex gap-2 flex-wrap">
                    {dept.minors.map((m) => (
                      <span key={m} className="px-2 py-1 bg-maroon/10 text-maroon text-xs font-bold rounded">{m}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex gap-4 text-center">
                  <div className="flex-1 bg-white/60 rounded-lg p-3 border border-maroon/10">
                    <p className="text-2xl font-black text-maroon">{dept.placements}</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Placement</p>
                  </div>
                  <div className="flex-1 bg-white/60 rounded-lg p-3 border border-maroon/10">
                    <p className="text-2xl font-black text-maroon">{dept.labs}</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Labs</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional departments */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Electrical Engineering", icon: "⚡", desc: "Power systems, renewable energy, and smart grid technologies shaping a sustainable future." },
            { name: "Mechanical Engineering", icon: "⚙️", desc: "Thermodynamics, manufacturing, robotics, and design engineering for the industry of tomorrow." },
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

        {/* Faculty Section */}
        <section className="mt-20">
          <h2 className="font-serif text-3xl font-bold text-maroon mb-2 text-center underline decoration-gold decoration-4 underline-offset-8">
            Department Mentors
          </h2>
          <p className="text-center text-slate-500 text-sm mb-10">Expert faculty guiding the next generation of engineers</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((f) => (
              <div key={f.name} className="rounded-xl bg-white border border-maroon/10 overflow-hidden group shadow-sm hover:shadow-xl transition-all">
                <div className="h-48 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.img}
                    alt={f.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-lg font-bold text-maroon">{f.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">{f.role}</p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {f.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gold/10 text-maroon text-[10px] font-bold rounded uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-maroon/5 border-t border-maroon/10 py-12 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="h-14 w-45 overflow-hidden rounded-lg border border-maroon/20 bg-white px-2 py-1 mb-4">
              <Image src="/fo_logo.png" alt="FoT logo" width={180} height={56} className="h-full w-full object-contain" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Leading engineering education and research since 1952. Empowering students
              to build the technology that powers the future.
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
              <li>academics.tech@du.ac.in</li>
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
