"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MainPage = "home" | "academics" | "students" | "events" | "recruiters";
type AcademicsSubPage = "departments" | "facilities";
type RecruitersSubPage = "contact" | "insights";
type StudentsSubPage = "directory" | "placement-team" | "achievements" | "faculty-placement-team";

type SiteNavProps = {
  activePage: MainPage;
  academicsSubPage?: AcademicsSubPage;
  recruitersSubPage?: RecruitersSubPage;
  studentsSubPage?: StudentsSubPage;
  hideOnScroll?: boolean;
};

const baseNavLink = "text-sm font-semibold transition-colors";

export function SiteNav({
  activePage,
  academicsSubPage = "departments",
  recruitersSubPage = "contact",
  studentsSubPage = "directory",
  hideOnScroll = false,
}: SiteNavProps) {
  const [search, setSearch] = useState("");
  const [hideNav, setHideNav] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!hideOnScroll) {
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      if (currentScrollY <= 80) {
        setHideNav(false);
      } else if (scrollingDown && currentScrollY - lastScrollY.current > 6) {
        setHideNav(true);
      } else if (!scrollingDown && lastScrollY.current - currentScrollY > 6) {
        setHideNav(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideOnScroll]);

  const shouldHideNav = hideOnScroll && hideNav;

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-maroon/10 bg-antique-white/85 backdrop-blur-md transition-transform duration-300 ${
        shouldHideNav ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-5">
            <div className="flex items-center gap-2 rounded-xl border border-maroon/20 bg-white/95 px-2.5 py-2.5 shadow-sm">
              <div className="h-16 w-14 overflow-hidden rounded-md bg-white">
                <Image src="/Du_logo.png" alt="Delhi University logo" width={92} height={96} className="h-full w-full object-contain" priority unoptimized />
              </div>
              <div className="h-16 w-24 overflow-hidden rounded-md bg-white">
                <Image src="/fot_logo_new.png" alt="Faculty of Technology logo" width={144} height={96} className="h-full w-full object-contain" priority unoptimized />
              </div>
            </div>
            <div className="hidden lg:block">
              <p className="font-serif text-[1.2rem] leading-tight text-maroon">
                Faculty of Technology,
              </p>
              <p className="font-serif text-[1.2rem] leading-tight text-gold italic">Delhi University</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`${baseNavLink} ${activePage === "home" ? "text-maroon font-bold border-b-2 border-maroon pb-0.5" : "text-slate-600 hover:text-maroon"}`}
            >
              Home
            </Link>
            <div className="relative group/academics">
              <button
                type="button"
                className={`${baseNavLink} inline-flex items-center gap-1 ${
                  activePage === "academics" ? "text-maroon font-bold border-b-2 border-maroon pb-0.5" : "text-slate-600 hover:text-maroon"
                }`}
              >
                Academics
                <span className="text-xs transition-transform duration-300 group-hover/academics:rotate-180">▾</span>
              </button>

              <div className="absolute left-0 top-full mt-2 min-w-60 rounded-xl border border-maroon/15 bg-white shadow-xl opacity-0 -translate-y-2 pointer-events-none max-h-0 overflow-hidden group-hover/academics:opacity-100 group-hover/academics:translate-y-0 group-hover/academics:pointer-events-auto group-hover/academics:max-h-64 group-focus-within/academics:opacity-100 group-focus-within/academics:translate-y-0 group-focus-within/academics:pointer-events-auto group-focus-within/academics:max-h-64 transition-all duration-300">
                <Link
                  href="/academics"
                  className={`block px-4 py-3 text-sm border-b border-slate-100 transition-colors ${
                    activePage === "academics" && academicsSubPage === "departments"
                      ? "bg-maroon/5 text-maroon font-semibold"
                      : "text-slate-700 hover:bg-maroon/5 hover:text-maroon"
                  }`}
                >
                  Departments
                </Link>
                <Link
                  href="/academics/facilities"
                  className={`block px-4 py-3 text-sm transition-colors ${
                    activePage === "academics" && academicsSubPage === "facilities"
                      ? "bg-maroon/5 text-maroon font-semibold"
                      : "text-slate-700 hover:bg-maroon/5 hover:text-maroon"
                  }`}
                >
                  Facilities
                </Link>
              </div>
            </div>
            <div className="relative group/students">
              <button
                type="button"
                className={`${baseNavLink} inline-flex items-center gap-1 ${
                  activePage === "students" ? "text-maroon font-bold border-b-2 border-maroon pb-0.5" : "text-slate-600 hover:text-maroon"
                }`}
              >
                Students
                <span className="text-xs transition-transform duration-300 group-hover/students:rotate-180">▾</span>
              </button>

              <div className="absolute left-0 top-full mt-2 min-w-72 rounded-xl border border-maroon/15 bg-white shadow-xl opacity-0 -translate-y-2 pointer-events-none max-h-0 overflow-hidden group-hover/students:opacity-100 group-hover/students:translate-y-0 group-hover/students:pointer-events-auto group-hover/students:max-h-80 group-focus-within/students:opacity-100 group-focus-within/students:translate-y-0 group-focus-within/students:pointer-events-auto group-focus-within/students:max-h-80 transition-all duration-300">
                <Link
                  href="/students"
                  className={`block px-4 py-3 text-sm border-b border-slate-100 transition-colors ${
                    activePage === "students" && studentsSubPage === "directory"
                      ? "bg-maroon/5 text-maroon font-semibold"
                      : "text-slate-700 hover:bg-maroon/5 hover:text-maroon"
                  }`}
                >
                  Student Excellence Hub
                </Link>
                <Link
                  href="/students/placement-team"
                  className={`block px-4 py-3 text-sm border-b border-slate-100 transition-colors ${
                    activePage === "students" && studentsSubPage === "placement-team"
                      ? "bg-maroon/5 text-maroon font-semibold"
                      : "text-slate-700 hover:bg-maroon/5 hover:text-maroon"
                  }`}
                >
                  Student Placement Leadership Team
                </Link>
                <Link
                  href="/students/achievements"
                  className={`block px-4 py-3 text-sm border-b border-slate-100 transition-colors ${
                    activePage === "students" && studentsSubPage === "achievements"
                      ? "bg-maroon/5 text-maroon font-semibold"
                      : "text-slate-700 hover:bg-maroon/5 hover:text-maroon"
                  }`}
                >
                  Student Achievements and Honors
                </Link>
                <Link
                  href="/students/faculty-placement-team"
                  className={`block px-4 py-3 text-sm transition-colors ${
                    activePage === "students" && studentsSubPage === "faculty-placement-team"
                      ? "bg-maroon/5 text-maroon font-semibold"
                      : "text-slate-700 hover:bg-maroon/5 hover:text-maroon"
                  }`}
                >
                  Faculty Placement Advisory Team
                </Link>
              </div>
            </div>
            <Link
              href="/events"
              className={`${baseNavLink} ${activePage === "events" ? "text-maroon font-bold border-b-2 border-maroon pb-0.5" : "text-slate-600 hover:text-maroon"}`}
            >
              Events
            </Link>

            <div className="relative group/recruiters">
              <button
                type="button"
                className={`${baseNavLink} inline-flex items-center gap-1 ${
                  activePage === "recruiters" ? "text-maroon font-bold border-b-2 border-maroon pb-0.5" : "text-slate-600 hover:text-maroon"
                }`}
              >
                Recruiters
                <span className="text-xs transition-transform duration-300 group-hover/recruiters:rotate-180">▾</span>
              </button>

              <div className="absolute left-0 top-full mt-2 min-w-72 rounded-xl border border-maroon/15 bg-white shadow-xl opacity-0 -translate-y-2 pointer-events-none max-h-0 overflow-hidden group-hover/recruiters:opacity-100 group-hover/recruiters:translate-y-0 group-hover/recruiters:pointer-events-auto group-hover/recruiters:max-h-64 group-focus-within/recruiters:opacity-100 group-focus-within/recruiters:translate-y-0 group-focus-within/recruiters:pointer-events-auto group-focus-within/recruiters:max-h-64 transition-all duration-300">
                <Link
                  href="/recruiters#company-contact-form"
                  className={`block px-4 py-3 text-sm border-b border-slate-100 transition-colors ${
                    activePage === "recruiters" && recruitersSubPage === "contact"
                      ? "bg-maroon/5 text-maroon font-semibold"
                      : "text-slate-700 hover:bg-maroon/5 hover:text-maroon"
                  }`}
                >
                  How Companies Can Contact Us
                </Link>
                <Link
                  href="/recruiters/insights"
                  className={`block px-4 py-3 text-sm transition-colors ${
                    activePage === "recruiters" && recruitersSubPage === "insights"
                      ? "bg-maroon/5 text-maroon font-semibold"
                      : "text-slate-700 hover:bg-maroon/5 hover:text-maroon"
                  }`}
                >
                  Recruitment Insights & Feedback
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:flex items-center bg-maroon/5 border border-maroon/20 rounded-full px-4 py-2 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-maroon/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              className="bg-transparent border-none outline-none text-sm text-maroon placeholder:text-maroon/40 w-40"
              placeholder="Search..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="hidden sm:inline-flex px-5 py-2 bg-maroon text-antique-white text-sm font-semibold rounded-lg hover:bg-black transition-all shadow-lg" type="button">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
