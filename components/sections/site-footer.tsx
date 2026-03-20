import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="inline-flex items-center gap-2 rounded-lg border border-maroon/20 bg-white px-2 py-2 shadow-sm">
                <div className="h-10 w-8 overflow-hidden rounded-md bg-white">
                  <Image src="/Du_logo.png" alt="Delhi University logo" width={52} height={60} className="h-full w-full object-contain" unoptimized />
                </div>
                <div className="h-10 w-14 overflow-hidden rounded-md bg-white">
                  <Image src="/fot_logo_new.png" alt="Faculty of Technology logo" width={84} height={60} className="h-full w-full object-contain" unoptimized />
                </div>
              </div>
              <span className="font-serif text-maroon font-bold text-lg">Faculty of Technology</span>
            </div>
            <p className="text-gray-500 max-w-sm">
              Dedicated to fostering a culture of technical innovation and academic rigor at the heart of
              the national capital.
            </p>
          </div>

          <div>
            <h5 className="text-sm font-bold text-maroon uppercase tracking-widest mb-6">Contact</h5>
            <p className="text-gray-600 text-sm leading-loose">
              Cavalry Lines, North Campus,<br />
              University of Delhi, Delhi – 110007<br />
              Email: dean@fot.du.ac.in
            </p>
          </div>

          <div>
            <h5 className="text-sm font-bold text-maroon uppercase tracking-widest mb-6">Follow Us</h5>
            <div className="flex space-x-4">
              <a
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-sm hover:bg-maroon hover:text-white transition-all"
                href="#"
              >
                Ln
              </a>
              <a
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-sm hover:bg-maroon hover:text-white transition-all"
                href="#"
              >
                Tw
              </a>
              <a
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-sm hover:bg-maroon hover:text-white transition-all"
                href="#"
              >
                In
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
          © 2026 University of Delhi. All Rights Reserved. Pioneer Portal Design System.
        </div>
      </div>
    </footer>
  );
}

