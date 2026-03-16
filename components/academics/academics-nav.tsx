"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function AcademicsNav() {
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-maroon/10 bg-antique-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-12 w-45 overflow-hidden rounded-lg border border-maroon/20 bg-white/90 px-2 py-1 shadow-sm">
              <Image
                src="/fo_logo.png"
                alt="FoT logo"
                width={180}
                height={48}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-maroon transition-colors">
              Home
            </Link>
            <Link href="/academics" className="text-sm font-bold text-maroon border-b-2 border-maroon pb-0.5">
              Academics
            </Link>
            <Link href="/students" className="text-sm font-semibold text-slate-600 hover:text-maroon transition-colors">
              Students
            </Link>
            <Link href="/events" className="text-sm font-semibold text-slate-600 hover:text-maroon transition-colors">
              Events
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:flex items-center bg-maroon/5 border border-maroon/20 rounded-full px-4 py-2 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-maroon/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              className="bg-transparent border-none outline-none text-sm text-maroon placeholder:text-maroon/40 w-40"
              placeholder="Search departments..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
