import Image from "next/image";

export function EventsFooter() {
  return (
    <footer className="border-t border-maroon/10 bg-antique-white py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-lg border border-maroon/20 bg-white px-2 py-2 shadow-sm">
                <div className="h-14 w-11 overflow-hidden rounded-md bg-white">
                  <Image src="/Du_logo.png" alt="Delhi University logo" width={72} height={84} className="h-full w-full object-contain" unoptimized />
                </div>
                <div className="h-14 w-20 overflow-hidden rounded-md bg-white">
                  <Image src="/fot_logo_new.png" alt="Faculty of Technology logo" width={120} height={84} className="h-full w-full object-contain" unoptimized />
                </div>
              </div>
            </div>
            <p className="max-w-sm text-slate-600">
              The official student-faculty engagement hub of the Faculty of Technology, University of Delhi.
            </p>
          </div>

          <div>
            <h5 className="mb-6 font-bold text-maroon">Quick Links</h5>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a className="hover:text-maroon" href="#">Event Calendar</a></li>
              <li><a className="hover:text-maroon" href="#">Past Lectures</a></li>
              <li><a className="hover:text-maroon" href="#">Faculty Directory</a></li>
              <li><a className="hover:text-maroon" href="#">Research Labs</a></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-6 font-bold text-maroon">Contact</h5>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>Faculty of Technology, North Campus, DU</li>
              <li>events@fot.du.ac.in</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-maroon/10 pt-8 text-center text-sm text-slate-500">
          Copyright 2026 Faculty of Technology, University of Delhi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
