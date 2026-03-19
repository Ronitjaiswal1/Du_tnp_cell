export type NavLink = {
  label: string;
  href: string;
  active?: boolean;
};

export type UpcomingEvent = {
  title: string;
  date: string;
  details: string;
  tag: string;
  cta: string;
};

export type TimelineEvent = {
  title: string;
  month: string;
  description: string;
  image: string;
};

export type GalleryItem = {
  title: string;
  image: string;
  ratioClass: string;
};

export const secondPageNavLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Events", href: "#", active: true },
  { label: "Projects", href: "#" },
  { label: "Faculty", href: "#" },
  { label: "About", href: "#" },
];

export const featuredEvent = {
  title: "102nd Annual Convocation",
  details: "University Ceremony - February 28, 2026 - University of Delhi",
  image:
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=80",
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    title: "Lecture: Bridging Continents - Croatia and India",
    date: "Feb 20, 2026",
    details:
      "Delhi University global lecture series session hosted for students and faculty.",
    tag: "Lecture",
    cta: "View Lecture",
  },
  {
    title: "Job Mela 2026 - Dean Students' Welfare",
    date: "Mar 3, 2026",
    details: "Campus placement and recruitment opportunity drive at University of Delhi.",
    tag: "Placement",
    cta: "Apply",
  },
  {
    title: "Internal Hackathon - Smart India Hackathon",
    date: "Sep 2025",
    details: "Faculty of Technology internal selection round for Smart India Hackathon teams.",
    tag: "Competition",
    cta: "Participate",
  },
  {
    title: "DU Literature Festival",
    date: "Feb 12-14, 2026",
    details: "Multi-day literary and cultural festival across University of Delhi venues.",
    tag: "Festival",
    cta: "Explore",
  },
  {
    title: "FDP: Advanced VLSI Design and Verification",
    date: "Jan 2026",
    details: "Faculty Development Programme at FoT using Cadence EDA tools.",
    tag: "Workshop",
    cta: "Register",
  },
  {
    title: "Expert Talk: Circular Economy Success Cases",
    date: "Late 2025",
    details: "FoT expert talk focusing on sustainability and practical engineering applications.",
    tag: "Expert Talk",
    cta: "Know More",
  },
  {
    title: "Orientation Programme - B.Tech Batch 2025",
    date: "2025",
    details: "Faculty of Technology onboarding event for first-year B.Tech students.",
    tag: "Orientation",
    cta: "View Notice",
  },
  {
    title: "Six-Day Program: AI and ML in Space Exploration",
    date: "Feb 8, 2026",
    details: "Online academic program announced by Delhi University and India Space Academy.",
    tag: "Training",
    cta: "Details",
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    title: "DU Literature Festival",
    month: "February 2026",
    description:
      "A flagship university cultural and literary event conducted over three days for students and scholars.",
    image:
      "https://images.unsplash.com/photo-1515165562835-c4c9b5f9d6c1?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "102nd Annual Convocation",
    month: "February 2026",
    description:
      "University-wide convocation ceremony celebrating academic achievements across disciplines.",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "FoT Internal Smart India Hackathon",
    month: "September 2025",
    description:
      "Department-level hackathon evaluations and mentoring rounds for SIH participation.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "FoT Orientation Programme for B.Tech",
    month: "August 2025",
    description:
      "Orientation sessions introducing curriculum, labs, and student support systems to new entrants.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "DU Literature Festival",
    image:
      "https://images.unsplash.com/photo-1515165562835-c4c9b5f9d6c1?auto=format&fit=crop&w=1200&q=80",
    ratioClass: "aspect-square",
  },
  {
    title: "GeeksforGeeks Hackathon Sprint",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    ratioClass: "aspect-[3/4] md:row-span-2",
  },
  {
    title: "DU Viksit Bharat Run",
    image:
      "https://images.unsplash.com/photo-1543351611-58f69d1c1781?auto=format&fit=crop&w=1200&q=80",
    ratioClass: "aspect-square",
  },
  {
    title: "FoT Hack 4 Viksit Bharat Finale",
    image:
      "https://fot.du.ac.in/userfiles/images/slider/hack-4-viksit-bharat-finale-full.png",
    ratioClass: "aspect-video col-span-2 md:col-span-1",
  },
  {
    title: "Smart India Hackathon Internal Round",
    image:
      "https://fot.du.ac.in/userfiles/images/slider/SIH_07_09_25_white.png",
    ratioClass: "aspect-square",
  },
  {
    title: "DU Cultural and Campus Event Moments",
    image:
      "https://www.du.ac.in/uploads/images/23022026_Banner2.jpeg",
    ratioClass: "aspect-square",
  },
];
