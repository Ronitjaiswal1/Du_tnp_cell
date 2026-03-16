import Image from "next/image";
import { secondPageNavLinks } from "@/lib/second-page-data";

export function EventsNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-maroon/10 bg-antique-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-14 w-[220px] overflow-hidden rounded-lg border border-maroon/20 bg-white px-2 py-1 shadow-sm">
            <Image src="/fo_logo.png" alt="FoT complete logo" width={220} height={56} className="h-full w-full object-contain" />
          </div>
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {secondPageNavLinks.map((link) => (
            <a
              key={link.label}
              className={[
                "border-b-2 border-transparent pb-1 text-sm font-medium transition-colors",
                link.active ? "border-maroon text-maroon" : "text-slate-700 hover:text-maroon",
              ].join(" ")}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-maroon/5 text-sm font-semibold text-maroon sm:flex">
          RP
        </div>
      </div>
    </header>
  );
}
