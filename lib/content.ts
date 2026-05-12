export const WHATSAPP = {
  raw: "+62 821-2349-8761",
  href: "https://wa.me/6282123498761?text=Hi%20Holly%2C%20I%27d%20love%20to%20talk%20about%20a%20collaboration.",
};

export const HERO = {
  name: ["HOLLY", "NATASHA"] as const,
  location: "beijing",
  tagline: "18 year old student @ tsinghua engineering",
  topics: ["AI & Tech", "SELF DEVELOPMENT", "Student life"],
  domain: "hollynatasha.com",
};

export const VENTURES = [
  {
    name: "HANZHI.ID",
    tagline: "CSCA prep platform with a red panda mascot.",
    href: "https://hanzhi.id",
  },
  {
    name: "CSCA.ID",
    tagline: "Tools and resources for Chinese Scholarship Council applicants.",
    href: "https://csca.id",
  },
] as const;

export const SERVICES = [
  {
    title: "SHORT-FORM VIDEO",
    description:
      "Storytelling about Tsinghua life, AI demos, and self-development. Quick hits that actually say something.",
    keywords: ["Storytelling", "Tsinghua Life", "AI Demos", "Editing", "Hooks"],
  },
  {
    title: "SPEAKING",
    description:
      "Talks, workshops, and panels on AI, student entrepreneurship, and Chinese university life.",
    keywords: [
      "Conferences",
      "Workshops",
      "Panels",
      "Campus Events",
      "English & Mandarin",
    ],
  },
  {
    title: "AI",
    description:
      "Building with AI tools, sharing what works, teaching others to ship faster.",
    keywords: ["Prompting", "Tutorials", "Workflows", "Claude", "Automations"],
  },
] as const;

export const ABOUT_ME = {
  fields: [
    { label: "NAME", value: "Holly Natasha" },
    { label: "AGE", value: "18" },
    { label: "LOCATION", value: "Beijing, China" },
    { label: "OCCUPATION", value: "mech eng student, builder, video maker" },
  ] as const,
  intro:
    "Hi! I'm Holly, an Indonesian Mechanical Engineering student at Tsinghua University. I build small AI products, make short-form video about campus life and self-development, and write about both. I'm drawn to projects that sit at the seam between engineering rigor and editorial taste.",
  skills: [
    {
      group: "ai & tooling",
      items: ["Claude", "ChatGPT", "Cursor", "Claude Code", "n8n"],
    },
    {
      group: "video",
      items: ["CapCut", "Premiere", "Storyboarding"],
    },
    {
      group: "code",
      items: ["Next.js", "React", "TypeScript", "Python", "Tailwind"],
    },
    {
      group: "still learning",
      items: ["embodied AI", "Mandarin (HSK 5 work in progress)", "Blender"],
    },
  ] as const,
  education: [
    {
      line1: "BS in Mechanical Engineering",
      line2: "Tsinghua University, Beijing",
      dates: "2024–present",
    },
  ] as const,
  experience: [
    {
      role: "Founder",
      org: "HANZHI.ID",
      dates: "2024–present",
    },
    {
      role: "Founder",
      org: "CSCA.ID",
      dates: "2024–present",
    },
    {
      role: "Founder",
      org: "Haru Studio (self-photobooth)",
      dates: "2025–present",
    },
    {
      role: "Member",
      org: "Tsinghua Embodied AI team, Zijing College",
      dates: "2025–present",
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

export const BRAND_KIT = {
  hero: {
    label: "for brands",
    title: "Let's work together.",
    intro:
      "I'm Holly, a Tsinghua mech eng student making short-form video about AI, campus life, and self-development from Beijing. If your brand fits the audience, I'd love to talk.",
  },
  stats: [
    { value: "XXk+", label: "FOLLOWERS" },
    { value: "X.X%", label: "ENGAGEMENT RATE" },
    { value: "XXk+", label: "AVG WEEKLY VIEWS" },
    { value: "XX%", label: "AVG VIEW COMPLETION" },
    { value: "XX%", label: "WOMEN, AGES 18–29" },
    { value: "XX%", label: "AUDIENCE IN APAC" },
  ],
  notes:
    "Stats refreshed monthly. Ask for the latest one-pager with platform breakdowns and recent campaign results.",
  contentTypes: [
    {
      tag: "BRAND LIFESTYLE",
      blurb: "Day-in-the-life storytelling that integrates your product into a real routine.",
    },
    {
      tag: "BRAND DEMONSTRATION",
      blurb: "Honest walkthroughs and how-tos that show, not tell.",
    },
    {
      tag: "BRAND PAID AD",
      blurb: "Hook-first, native-feeling ads built for the FYP, not the brief deck.",
    },
    {
      tag: "TUTORIAL FEATURE",
      blurb: "Long-form tutorials with your product as the supporting tool, not the topic.",
    },
    {
      tag: "AI / TECH REVIEW",
      blurb: "Honest first-impressions of AI tools and tech products from a student-builder POV.",
    },
    {
      tag: "CAMPUS / TRAVEL FEATURE",
      blurb: "On-location features in Beijing, Tsinghua, or anywhere I'm filming next.",
    },
  ],
  audience: [
    { line: "Beijing-based, Indonesian, multilingual (EN / ID / Mandarin)." },
    { line: "Audience: students and young professionals interested in AI, tech, study, and self-development." },
    { line: "Geo skews: SEA (Indonesia, Singapore, Malaysia), Greater China, the US." },
  ],
  pastWork: [
    "Worked with Anthropic's Claude features in tutorial content.",
    "Founder of HANZHI.ID and CSCA.ID, used by Chinese scholarship applicants across SEA.",
    "Speaking engagements on AI and student entrepreneurship at Tsinghua and partner universities.",
  ],
  cta: {
    headline: "Let's work together in content creating.",
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
      href: "https://instagram.com/hollynst",
    },
    {
      kind: "tiktok" as const,
      label: "@hollynst",
      href: "https://www.tiktok.com/@hollynst",
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
