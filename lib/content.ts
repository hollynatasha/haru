export const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PROJECTS", href: "/projects" },
  { label: "AI RESOURCES", href: "/ai-resources" },
] as const;

export const HERO = {
  name: ["HOLLY", "NATASHA"] as const,
  location: "beijing",
  bio: "Hi, I'm Holly, a Mechanical Engineering student at Tsinghua building AI products and making videos.",
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
    background: "#BEAEDB",
    description:
      "Storytelling about Tsinghua life, AI demos, and self-development. Quick hits that actually say something.",
    keywords: ["Storytelling", "Tsinghua Life", "AI Demos", "Editing", "Hooks"],
  },
  {
    title: "SPEAKING",
    background: "#C5B3D9",
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
    background: "#A98EC9",
    description:
      "Building with AI tools, sharing what works, teaching others to ship faster.",
    keywords: ["Prompting", "Tutorials", "Workflows", "Claude", "Automations"],
  },
] as const;

export const ABOUT_SECTIONS = [
  {
    heading: "Origin.",
    body: "Born in Indonesia, now based in Beijing studying Mechanical Engineering at Tsinghua University. The path here ran through a Chinese government scholarship, a lot of Mandarin practice, and a stubborn curiosity about how things are built.",
  },
  {
    heading: "What I'm into.",
    body: "AI as a daily tool (not a hype cycle), short-form video that respects the viewer, and the craft of shipping small products from a dorm room. I like things that combine engineering rigor with editorial taste.",
  },
  {
    heading: "What I'm working on.",
    body: "HANZHI.ID (a CSCA prep platform with a red panda mascot), CSCA.ID (resources for scholarship applicants), and Haru Studio (a self-photobooth business). Each one started as a side project that refused to stay small.",
  },
  {
    heading: "Outside the work.",
    body: "Anime, light gaming, late-night ramen runs in Wudaokou, and writing scripts that never quite make it past draft three. Also: weirdly into hardware.",
  },
] as const;

export const PROJECTS = [
  {
    title: "HANZHI.ID",
    category: "EDTECH",
    oneLiner: "CSCA scholarship prep platform with a red panda mascot.",
    href: "https://hanzhi.id",
  },
  {
    title: "CSCA.ID",
    category: "EDTECH",
    oneLiner: "Tools for Chinese government scholarship applicants.",
    href: "https://csca.id",
  },
  {
    title: "Haru Studio",
    category: "PHOTOGRAPHY",
    oneLiner: "Self-photobooth business with combo packages.",
    href: "#",
  },
  {
    title: "HeaRing",
    category: "HARDWARE",
    oneLiner: "BiGRU-based wearable for hearing assistance.",
    href: "#",
  },
  {
    title: "Eclipse Learns",
    category: "EDTECH",
    oneLiner: "Learning platform project.",
    href: "#",
  },
  {
    title: "Tsinghua Embodied AI",
    category: "RESEARCH",
    oneLiner: "Embodied AI team presentation at Zijing College.",
    href: "#",
  },
] as const;

export const GUIDES = [
  {
    category: "NEW FEATURE",
    title: "CLAUDE'S NEW MEMORY FEATURE",
    description:
      "Anthropic just shipped memory across conversations. Here's how I'm using it for my studies and content workflow.",
  },
  {
    category: "AI TUTORIAL",
    title: "THE 5 PROMPTS I RUN DAILY",
    description:
      "My exact daily prompt stack for research, video scripts, and learning Mandarin faster.",
  },
  {
    category: "SAVE THIS",
    title: "THE ANTI-SYCOPHANCY PROMPT",
    description:
      "Stop Claude from agreeing with everything you say. One paragraph that fixes 90 percent of bad AI advice.",
  },
  {
    category: "WORKFLOW",
    title: "STUDY WITH AI: TSINGHUA EDITION",
    description:
      "How I prep for engineering exams with AI without becoming dependent on it.",
  },
  {
    category: "AI TUTORIAL",
    title: "MAKE SHORT-FORM VIDEO FASTER",
    description:
      "My script-to-edit pipeline using Claude, CapCut, and one secret prompt.",
  },
  {
    category: "NEW FEATURE",
    title: "BUILDING APPS WITH CLAUDE CODE",
    description:
      "How a non-CS student is shipping real products with AI as a co-pilot.",
  },
] as const;

export const FOOTER = {
  tagline: "Beijing-based. Building, filming, writing.",
  contacts: [
    { label: "Instagram @hollynst", href: "https://instagram.com/hollynst" },
    { label: "TikTok @hollynst", href: "https://www.tiktok.com/@hollynst" },
    { label: "Email hollysinq@gmail.com", href: "mailto:hollysinq@gmail.com" },
  ],
  quickLinks: [
    { label: "ABOUT", href: "/about" },
    { label: "PROJECTS", href: "/projects" },
    { label: "AI RESOURCES", href: "/ai-resources" },
  ],
  bottomLine: "© 2026 Holly Natasha. Built in Beijing.",
} as const;
