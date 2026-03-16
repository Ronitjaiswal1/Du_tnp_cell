import Image from "next/image";
import Link from "next/link";
import { DigitalTwinHero } from "@/components/hero/digital-twin-hero";
import { EvidenceGrid } from "@/components/sections/evidence-grid";
import { RecruiterFunnel } from "@/components/sections/recruiter-funnel";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <main>
      <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center glass">
        <div className="flex items-center space-x-3">
          <div className="h-14 w-55 overflow-hidden rounded-lg border border-maroon/20 bg-white/90 px-2 py-1 shadow-sm">
            <Image src="/fo_logo.png" alt="FoT complete logo" width={220} height={56} className="h-full w-full object-contain" priority />
          </div>
        </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-maroon">
            <a className="hover:text-gold transition-colors" href="#hero">Home</a>
            <Link className="hover:text-gold transition-colors" href="/academics">Academics</Link>
            <Link className="hover:text-gold transition-colors" href="/students">Students</Link>
            <Link className="hover:text-gold transition-colors" href="/events">Events</Link>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center bg-maroon/5 border border-maroon/20 rounded-full px-4 py-2 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-maroon/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input className="bg-transparent border-none outline-none text-sm text-maroon placeholder:text-maroon/40 w-32" placeholder="Search..." type="text" />
            </div>
            <button className="px-5 py-2 bg-maroon text-antique-white text-sm font-semibold rounded-lg hover:bg-black transition-all shadow-lg" type="button">
              Admissions 2026
            </button>
          </div>
      </nav>

      <DigitalTwinHero />
      <EvidenceGrid />
      <RecruiterFunnel />
      <SiteFooter />
    </main>
  );
}

