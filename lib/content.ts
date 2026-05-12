export const WHATSAPP = {
  raw: "+62 821-2349-8761",
  href: "https://wa.me/6282123498761?text=Hi%20Holly%2C%20I%27d%20love%20to%20talk%20about%20a%20collaboration.",
};

export const INSTAGRAM_URL = "https://instagram.com/hollynst";
export const TIKTOK_URL = "https://www.tiktok.com/@hollynst";

export const HERO = {
  name: ["HOLLY", "NATASHA"] as const,
  location: "beijing",
  tagline: "18 year old student @ tsinghua engineering",
  topics: ["AI & Tech", "SELF DEVELOPMENT", "TEDx Speaker"],
  domain: "hollynatasha.com",
};

export const VENTURES = [
  {
    name: "hanzhi.id",
    href: "https://hanzhi.id",
    logoSrc: "/ventures/hanzhi.png",
  },
  {
    name: "csca.id",
    href: "https://csca.id",
  },
  {
    name: "Haru Studio",
    href: "https://instagram.com/harustudio.idn",
    logoSrc: "/ventures/haru.png",
  },
  {
    name: "Eclipse Learns",
    href: "#",
  },
] as const;

export const ABOUT_ME = {
  fields: [
    { label: "NAME", value: "Holly Natasha" },
    { label: "AGE", value: "18" },
    { label: "LOCATION", value: "Beijing, China | Surabaya, Indonesia" },
    { label: "OCCUPATION", value: "student, speaker, content creator" },
    {
      label: "STATUS",
      value: "open to projects & internship opportunities",
      highlight: true,
    },
  ] as const,
  intro:
    "Hi! I'm Holly, an Indonesian Mechanical Engineering student at Tsinghua University. I build small AI products, make short-form video about campus life and self-development, and write about both. I'm drawn to projects that sit at the seam between engineering rigor and editorial taste.",
  technicalSkills: [
    "C++",
    "Final Cut Pro",
    "Adobe Illustrator",
    "Photoshop",
    "After Effects",
    "Premiere Pro",
    "Canva",
    "Microsoft Office",
  ] as const,
  languages: [
    "Indonesian (Native)",
    "English (IELTS 8.0)",
    "Chinese (HSK 5)",
  ] as const,
  education: [
    {
      line1: "B.S. Mechanical Engineering",
      line2: "Tsinghua University, Beijing",
      dates: "Aug 2025 – Present",
    },
    {
      line1: "Pre-college Credit Program",
      line2: "University of Pennsylvania",
      dates: "Jun – Aug 2023",
    },
    {
      line1: "Summer Immersion",
      line2: "University of California, Los Angeles",
      dates: "Jun – Jul 2022",
    },
  ] as const,
};

export const GUIDES = [
  {
    slug: "claude-memory",
    category: "NEW FEATURE",
    title: "CLAUDE'S NEW MEMORY FEATURE",
    description:
      "Anthropic just shipped memory across conversations. Here's how I'm using it for my studies and content workflow.",
    readMinutes: 6,
    publishedAt: "2026-04-22",
  },
  {
    slug: "daily-prompts",
    category: "AI TUTORIAL",
    title: "THE 5 PROMPTS I RUN DAILY",
    description:
      "My exact daily prompt stack for research, video scripts, and learning Mandarin faster.",
    readMinutes: 8,
    publishedAt: "2026-04-08",
  },
  {
    slug: "anti-sycophancy-prompt",
    category: "SAVE THIS",
    title: "THE ANTI-SYCOPHANCY PROMPT",
    description:
      "Stop Claude from agreeing with everything you say. One paragraph that fixes 90 percent of bad AI advice.",
    readMinutes: 4,
    publishedAt: "2026-03-26",
  },
  {
    slug: "study-with-ai-tsinghua",
    category: "WORKFLOW",
    title: "STUDY WITH AI: TSINGHUA EDITION",
    description:
      "How I prep for engineering exams with AI without becoming dependent on it.",
    readMinutes: 9,
    publishedAt: "2026-03-12",
  },
  {
    slug: "short-form-video-faster",
    category: "AI TUTORIAL",
    title: "MAKE SHORT-FORM VIDEO FASTER",
    description:
      "My script-to-edit pipeline using Claude, CapCut, and one secret prompt.",
    readMinutes: 7,
    publishedAt: "2026-02-28",
  },
  {
    slug: "building-with-claude-code",
    category: "NEW FEATURE",
    title: "BUILDING APPS WITH CLAUDE CODE",
    description:
      "How a non-CS student is shipping real products with AI as a co-pilot.",
    readMinutes: 10,
    publishedAt: "2026-02-10",
  },
] as const;

export type Guide = (typeof GUIDES)[number];

export const SPEAKING = {
  headline: "Talks, panels, and keynotes.",
  body: "Booked for conversations on entrepreneurship, student life, and AI & tech innovations. Comfortable on stage in English, Mandarin, and Bahasa Indonesia.",
  topics: ["Entrepreneurship", "Student life", "AI & Tech Innovations"],
  pastStages: [
    { name: "TEDx", logoSrc: "/brands/tedx.png", invert: false },
    { name: "IdeaCloud", logoSrc: "/brands/ideacloud.png", invert: true },
  ],
};

export const BRAND_KIT = {
  statsDate: "May 2026",

  hero: {
    label: "for brands",
    title: "Let's work together.",
    intro:
      "I'm Holly, a Tsinghua mech eng student making short-form video about AI, tech, self-development, and student life from Beijing. If your brand fits the audience, I'd love to talk.",
  },

  workedWith: [
    {
      name: "Western Sydney University",
      logoSrc: "/brands/western-sydney.png",
    },
    {
      name: "Gauth AI",
      logoSrc: "/brands/gauth.png",
    },
  ],

  funnel: {
    banner: "HIGH CONVERSION RATE.",
    headline: "Saves and shares > follower count.",
    body: "I optimize for content that gets passed around, not just liked. The interaction numbers below are what actually move product for sponsors, because they signal real intent and word-of-mouth reach.",
  },

  funnelStats: [
    {
      value: "487,190",
      label: "Accounts reached",
      note: "+13.6% month over month",
    },
    {
      value: "72,975",
      label: "Interactions",
      note: "likes, comments, shares, saves",
    },
    {
      value: "62,578",
      label: "Accounts engaged",
      note: "real humans, not impressions",
    },
  ],

  topStats: [
    { value: "24K", label: "Followers" },
    { value: "1.59M", label: "Views" },
    { value: "85%", label: "Reach from non-followers" },
  ],

  demographics: {
    gender: { women: 55.4, men: 44.6 },
    age: [
      { range: "13–17", pct: 7.8 },
      { range: "18–24", pct: 26.8 },
      { range: "25–34", pct: 38.4 },
      { range: "35–44", pct: 19.0 },
      { range: "45–54", pct: 6.0 },
      { range: "55–64", pct: 1.1 },
      { range: "65+", pct: 0.8 },
    ],
    countries: [
      { name: "Indonesia", pct: 80.6 },
      { name: "United States", pct: 5.2 },
      { name: "Australia", pct: 1.6 },
      { name: "China", pct: 1.6 },
    ],
    cities: [
      { name: "Surabaya", pct: 17.0 },
      { name: "Jakarta", pct: 14.7 },
      { name: "Tangerang", pct: 4.0 },
      { name: "Medan", pct: 2.6 },
      { name: "Semarang", pct: 1.6 },
    ],
  },

  videoPortfolio: [
    { tag: "GAUTH AI", href: INSTAGRAM_URL },
    { tag: "ICAN EDUCATION", href: INSTAGRAM_URL },
    { tag: "WESTERN SYDNEY UNI", href: INSTAGRAM_URL },
    { tag: "MANDARIN MASTERY CIRCLE", href: INSTAGRAM_URL },
  ],

  contentTypes: [
    {
      tag: "BRAND LIFESTYLE",
      blurb:
        "Day-in-the-life storytelling that integrates your product into a real routine.",
    },
    {
      tag: "BRAND DEMONSTRATION",
      blurb: "Honest walkthroughs and how-tos that show, not tell.",
    },
    {
      tag: "BRAND PAID AD",
      blurb:
        "Hook-first, native-feeling ads built for the FYP, not the brief deck.",
    },
    {
      tag: "TUTORIAL FEATURE",
      blurb:
        "Long-form tutorials with your product as the supporting tool, not the topic.",
    },
    {
      tag: "AI / TECH REVIEW",
      blurb:
        "Honest first-impressions of AI tools and tech products from a student-builder POV.",
    },
    {
      tag: "CAMPUS / TRAVEL FEATURE",
      blurb:
        "On-location features in Beijing, Tsinghua, or anywhere I'm filming next.",
    },
  ],

  cta: {
    headline: "Collaborate with Holly.",
    body: "Send a quick note over WhatsApp. Tell me your brand, your timeline, and the vibe you're going for. I'll reply within 48 hours.",
    buttonLabel: "Message me on WhatsApp",
  },
};

export const FOOTER = {
  tagline: "Beijing-based. Building, filming, writing.",
  contacts: [
    {
      kind: "instagram" as const,
      label: "@hollynst",
      href: INSTAGRAM_URL,
    },
    {
      kind: "tiktok" as const,
      label: "@hollynst",
      href: TIKTOK_URL,
    },
    {
      kind: "mail" as const,
      label: "hollysinq@gmail.com",
      href: "mailto:hollysinq@gmail.com",
    },
    {
      kind: "whatsapp" as const,
      label: WHATSAPP.raw,
      href: WHATSAPP.href,
    },
  ],
  links: [
    { label: "AI resources", href: "/ai-resources" },
    { label: "Work with me", href: "/work-with-me" },
  ],
  bottomLine: "© 2026 Holly Natasha. Built in Beijing.",
};
