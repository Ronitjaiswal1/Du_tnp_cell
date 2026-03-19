import Image from "next/image";
import { SiteNav } from "@/components/shared/site-nav";

export const metadata = {
  title: "Student Excellence | Faculty of Technology",
  description:
    "A curated archive of the achievements, research, and technical breakthroughs of the pioneering students at the Faculty of Technology, University of Delhi.",
};

export default function StudentsPage() {
  return (
    <div className="bg-surface font-body text-on-surface">
      <SiteNav activePage="students" />

      <main className="pt-12 pb-20 px-6 max-w-screen-2xl mx-auto">
        <header className="mb-16 text-center lg:text-left max-w-4xl">
          <p className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-4 font-bold">Showcasing Excellence</p>
          <h1 className="font-headline text-5xl md:text-7xl text-primary-container mb-6 leading-tight">
            The Next Generation <br />of <span className="italic font-normal">Innovators</span>
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
            A curated archive of the achievements, research, and technical breakthroughs of the pioneering students at the Faculty of Technology, University of Delhi.
          </p>
        </header>

        <div className="mb-12 flex flex-wrap gap-3 items-center">
          <button className="bg-primary-container text-on-primary px-6 py-2 rounded-full text-sm font-medium transition-all">All Achievements</button>
          <button className="bg-surface-container-highest text-on-surface-variant px-6 py-2 rounded-full text-sm font-medium hover:bg-surface-container-high transition-all">Technical Wins</button>
          <button className="bg-surface-container-highest text-on-surface-variant px-6 py-2 rounded-full text-sm font-medium hover:bg-surface-container-high transition-all">Research Papers</button>
          <button className="bg-surface-container-highest text-on-surface-variant px-6 py-2 rounded-full text-sm font-medium hover:bg-surface-container-high transition-all">Entrepreneurship</button>
        </div>

        <div className="bento-grid">
          <article className="span-2 bg-surface-container-lowest rounded-xl p-8 ghost-shadow card-hover transition-all duration-500 border border-outline-variant/10 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <span className="inline-block bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider mb-6">[ Hackathon Winner ]</span>
              <h3 className="font-headline text-3xl text-primary-container mb-4">1st Prize: SIH 2024 - Smart Policing Systems</h3>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                Developed a real-time predictive analytics dashboard for emergency response optimization, reducing dispatch time by 40% using graph neural networks.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-surface-container-low px-3 py-1 rounded-lg text-[10px] font-semibold text-on-surface-variant">#TensorFlow</span>
                <span className="bg-surface-container-low px-3 py-1 rounded-lg text-[10px] font-semibold text-on-surface-variant">#Python</span>
                <span className="bg-surface-container-low px-3 py-1 rounded-lg text-[10px] font-semibold text-on-surface-variant">#GNN</span>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary-container cursor-pointer text-xl" data-icon="terminal">
                  terminal
                </span>
                <span className="material-symbols-outlined text-primary-container cursor-pointer text-xl" data-icon="work">
                  work
                </span>
              </div>
            </div>
            <div className="md:w-64 flex flex-col items-center md:items-start justify-center border-l border-outline-variant/10 md:pl-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Arjun Sharma"
                className="w-24 h-24 rounded-full object-cover mb-4 grayscale hover:grayscale-0 transition-all border-4 border-surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhSOSX_oUC5Z8Be1MkkHnOni1fuoJR6dnpzboijvOPRyHdBqh3GN1OsWIBUiBWYMBQEQZKt1cnXnZsnQDknW7eQP5G2Lek-8c6srnSRyGIOylbAd5U3gWFlAqnpCAv4fwdo1PsRrAk1RzqrnIFdkpKlZaFQvBRKX4LnYagESpTn2-peInySw0k6brBpLgZHcVZhlMjcOP9R2FvlhzE5PpvGBCNEC6cqgvoCvQ3g1a_bP4gn1PGmIzIVa1BRigEVvBBhf23ngpCxA"
              />
              <div className="text-center md:text-left">
                <h4 className="font-bold text-on-surface">Arjun Sharma</h4>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest font-medium">CSE | Class of 2025</p>
              </div>
            </div>
          </article>

          <article className="bg-surface-container-lowest rounded-xl p-8 ghost-shadow card-hover transition-all duration-500 border border-outline-variant/10 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">[ Research Published ]</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Priya Verma"
                className="w-16 h-16 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEpkLwIT6vtAbrzGurZPNoNdfbps6hX2JYBOJm6X1AH-eJfGznHxrDLOuziC5MIxbw3duwCyEIAFmG7lawBEqi4eZWW72Yigm1OkE7O0HcMhtlzge-hvZ8zUSd2kMzys8WWW-l_g50X-eYJAA9mLXtFxqYUN2gk4j9cYgvyg0nbXBUnS7ZRNVlu8AjFPW9ooIS0uBFBI2kw4viN7Uo1m9Jc6XdpNFRxlSpKjb6CBGEClxSanq3QfVVe3qpBTsrrYTUtQJgVN-YNw"
              />
            </div>
            <div className="mb-2">
              <h4 className="font-bold text-on-surface text-sm">Priya Verma</h4>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-4">ECE | Junior</p>
            </div>
            <h3 className="font-headline text-2xl text-primary-container mb-3 leading-snug">Quantum Cryptography Protocols</h3>
            <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">
              Published in IEEE Explorer: A novel approach to securing IoT nodes using lightweight quantum-resistant algorithms.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-surface-container-low px-2 py-1 rounded text-[10px] font-semibold text-on-surface-variant">#Quantum</span>
              <span className="bg-surface-container-low px-2 py-1 rounded text-[10px] font-semibold text-on-surface-variant">#IEEE</span>
            </div>
            <div className="flex gap-3 pt-4 border-t border-outline-variant/10">
              <span className="material-symbols-outlined text-primary-container/60 hover:text-primary-container cursor-pointer transition-colors" data-icon="article">
                article
              </span>
              <span className="material-symbols-outlined text-primary-container/60 hover:text-primary-container cursor-pointer transition-colors" data-icon="link">
                link
              </span>
            </div>
          </article>

          <article className="bg-surface-container-lowest rounded-xl p-8 ghost-shadow card-hover transition-all duration-500 border border-outline-variant/10 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">[ Entrepreneurship ]</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Rahul Nair"
                className="w-16 h-16 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa8YbBvv5AAzPgfCOAZ84hg3XVvazSzwm82Sqm9pMiHK6O8fZkHTxni76lkP4sgehV1ZwUAy5qx3ZbWN1HLRS2FFbzlg_TK0_wn_urPCIL_A3VzJ_qHtLg8jZQAgQ0UbfDaPVAkZUFvdxsBXULT92st39VgzdAAdoy5ztNRk6tdayWbvtq56lAoItLYJj_mM73w3e20TQm2xp5RlUcQLC45jpxk6oYX43v21or8s2-Iw9qzQX45uM9YSHoBSvQyGQT3qu16B_Krw"
              />
            </div>
            <div className="mb-2">
              <h4 className="font-bold text-on-surface text-sm">Rahul Nair</h4>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-4">EE | Final Year</p>
            </div>
            <h3 className="font-headline text-2xl text-primary-container mb-3 leading-snug">Founding EcoCharge Hub</h3>
            <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">
              Secured $10k seed funding for an AI-powered EV charging grid optimizer reducing energy waste by 15%.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-surface-container-low px-2 py-1 rounded text-[10px] font-semibold text-on-surface-variant">#CleanTech</span>
              <span className="bg-surface-container-low px-2 py-1 rounded text-[10px] font-semibold text-on-surface-variant">#Sustainability</span>
            </div>
            <div className="flex gap-3 pt-4 border-t border-outline-variant/10">
              <span className="material-symbols-outlined text-primary-container/60 hover:text-primary-container cursor-pointer transition-colors" data-icon="language">
                language
              </span>
              <span className="material-symbols-outlined text-primary-container/60 hover:text-primary-container cursor-pointer transition-colors" data-icon="trending_up">
                trending_up
              </span>
            </div>
          </article>

          <article className="span-2 bg-surface-container-lowest rounded-xl p-8 ghost-shadow card-hover transition-all duration-500 border border-outline-variant/10 flex flex-col md:flex-row-reverse gap-8">
            <div className="flex-1">
              <span className="inline-block bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider mb-6">[ Robotics Excellence ]</span>
              <h3 className="font-headline text-3xl text-primary-container mb-4">Global Finalists: RoboCup 2024</h3>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                Led the hardware design for an autonomous search-and-rescue drone fleet utilizing swarm intelligence for terrain mapping in zero-visibility conditions.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-surface-container-low px-3 py-1 rounded-lg text-[10px] font-semibold text-on-surface-variant">#ROS2</span>
                <span className="bg-surface-container-low px-3 py-1 rounded-lg text-[10px] font-semibold text-on-surface-variant">#C++</span>
                <span className="bg-surface-container-low px-3 py-1 rounded-lg text-[10px] font-semibold text-on-surface-variant">#Lidar</span>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary-container cursor-pointer text-xl" data-icon="precision_manufacturing">
                  precision_manufacturing
                </span>
                <span className="material-symbols-outlined text-primary-container cursor-pointer text-xl" data-icon="videocam">
                  videocam
                </span>
              </div>
            </div>
            <div className="md:w-64 flex flex-col items-center md:items-end justify-center border-r border-outline-variant/10 md:pr-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Meera Gupta"
                className="w-24 h-24 rounded-full object-cover mb-4 grayscale hover:grayscale-0 transition-all border-4 border-surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhiJz38PfztwLk_FUzvQ06RrVXqltDcpjM3gRzvcfK-T2cwh6gybWoTgY0siF9ejw06H87zEUklHtha0m6h0u4gDDTCOKXJBkgWOwwj23KI9xSii0FzlLFaXTo1jDnv6bbEY4bbGcRbtSeDNaNaMqWr6ZPP_Ss14w7TuTNh-XJKoPrZplm4xyYKlp9qTE4uALsCfQ6cmgB_6fDEnUHI8G1OJRExOU6wHeiZz_dgbqprIwqoR_83nuQyVyQIShpLjjDU5gmInXd1Q"
              />
              <div className="text-center md:text-right">
                <h4 className="font-bold text-on-surface">Meera Gupta</h4>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest font-medium">CSE | Class of 2026</p>
              </div>
            </div>
          </article>

          <article className="bg-surface-container-lowest rounded-xl p-8 ghost-shadow card-hover transition-all duration-500 border border-outline-variant/10 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">[ Patent Pending ]</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Siddharth Jain"
                className="w-16 h-16 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO6DUzhGAYuXGsG2m35qO18SduogbDY_E3_zQE4jzvNIGQsbAsGH05aJb37EtCbDeTqOBsmka4CA-xuEpclPnbMm96H7vXhZSo-jZ-7zilWlr2lr4lBhGQYGhFsZ2PWc2DlcRivfpxI9aoZ0Exx4_ZUcJIgFnWj4ZQ7u3uL6_uSS8AMcEjgOwSKj9ydHSnGGKvlzWR7oMDJ7K9whOWCp1aqSHv54yU3WXyMay-OChxZ_T5hI1Rv_Kh71WH5pj4ExxTZpCQbz9nrw"
              />
            </div>
            <div className="mb-2">
              <h4 className="font-bold text-on-surface text-sm">Siddharth Jain</h4>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-4">ME | Senior</p>
            </div>
            <h3 className="font-headline text-2xl text-primary-container mb-3 leading-snug">Regenerative Braking for Micromobility</h3>
            <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">
              Invented a low-cost retrofit kit for standard bicycles that stores braking energy to power LED safety lighting.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-surface-container-low px-2 py-1 rounded text-[10px] font-semibold text-on-surface-variant">#Hardware</span>
              <span className="bg-surface-container-low px-2 py-1 rounded text-[10px] font-semibold text-on-surface-variant">#CAD</span>
            </div>
            <div className="flex gap-3 pt-4 border-t border-outline-variant/10">
              <span className="material-symbols-outlined text-primary-container/60 hover:text-primary-container cursor-pointer transition-colors" data-icon="verified">
                verified
              </span>
              <span className="material-symbols-outlined text-primary-container/60 hover:text-primary-container cursor-pointer transition-colors" data-icon="description">
                description
              </span>
            </div>
          </article>
        </div>
      </main>

      <footer className="w-full mt-20 border-t border-slate-200 bg-slate-50 dark:bg-slate-950">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-6 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 overflow-hidden rounded-full border border-maroon/20 bg-white shadow-sm">
              <Image src="/du_logo.png" alt="DU logo" width={48} height={48} className="h-full w-full object-cover" />
            </div>
            <div className="leading-none">
              <p className="font-serif text-lg sm:text-2xl font-bold text-[#8f1d1d]">Faculty of Technology</p>
              <p className="mt-1 text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b06860]">University of Delhi</p>
            </div>
          </div>
          <p className="font-sans text-[10px] uppercase tracking-widest text-slate-500 text-center md:text-left">
            © 2024 University of Delhi - Faculty of Technology. Excellence in Engineering.
          </p>
          <div className="flex gap-8">
            <a className="font-sans text-[10px] uppercase tracking-widest text-slate-500 hover:text-primary transition-all" href="#">
              Privacy Policy
            </a>
            <a className="font-sans text-[10px] uppercase tracking-widest text-slate-500 hover:text-primary transition-all" href="#">
              Terms of Service
            </a>
            <a className="font-sans text-[10px] uppercase tracking-widest text-slate-500 hover:text-primary transition-all" href="#">
              University Portal
            </a>
            <a className="font-sans text-[10px] uppercase tracking-widest text-slate-500 hover:text-primary transition-all" href="#">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
