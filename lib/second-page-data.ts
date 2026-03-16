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
  title: "Robotics Workshop 2024",
  details: "Oct 15 - Main Lab 402 - 10:00 AM",
  image:
    "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=1400&q=80",
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    title: "Guest Lecture: AI Ethics",
    date: "Oct 22",
    details:
      "Join experts from Microsoft to discuss the future of ethical AI development.",
    tag: "Lecture",
    cta: "Details",
  },
  {
    title: "Dev-Connect Meetup",
    date: "Oct 25",
    details: "Cafeteria Terrace",
    tag: "Community",
    cta: "Join",
  },
  {
    title: "Annual Hackathon",
    date: "Nov 05",
    details: "Innovation Hub",
    tag: "Competition",
    cta: "Sign Up",
  },
    {
      title: "Research Symposium",
      date: "Nov 20",
      details: "Seminar Hall A",
      tag: "Research",
      cta: "Register",
    },
];

export const timelineEvents: TimelineEvent[] = [
  {
    title: "Industrial Visit: Tech Park",
    month: "June 2023",
    description:
      "Exploring cloud infrastructure and data centers at the regional HQ.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Arduino Workshop 2023",
    month: "March 2023",
    description:
      "Hands-on micro-controller programming session for freshman batch.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Innovation Lab",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
    ratioClass: "aspect-square",
  },
  {
    title: "Project Presentation",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    ratioClass: "aspect-[3/4] md:row-span-2",
  },
  {
    title: "Inter-College Win",
    image:
      "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&w=900&q=80",
    ratioClass: "aspect-square",
  },
  {
    title: "Main Hall Lecture",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    ratioClass: "aspect-video col-span-2 md:col-span-1",
  },
  {
    title: "VLSI Research",
    image:
      "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=900&q=80",
    ratioClass: "aspect-square",
  },
  {
    title: "Coding Sprint",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    ratioClass: "aspect-square",
  },
];
