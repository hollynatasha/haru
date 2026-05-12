type Section = { heading?: string; paragraphs: string[] };

export const GUIDE_BODIES: Record<string, Section[]> = {
  "claude-memory": [
    {
      paragraphs: [
        "Anthropic shipped memory across conversations and it changed my daily Claude workflow more than any feature this year. The short version: Claude can now remember preferences, ongoing projects, and context you've shared, without you re-explaining yourself every chat.",
        "I have separate projects for HANZHI.ID, my videos, and my coursework. Memory means Claude knows my tone, the people on my team, and the boring constraints I would otherwise paste in every prompt.",
      ],
    },
    {
      heading: "How I actually use it",
      paragraphs: [
        "First, I let Claude save the things I tell it more than twice. If I'm correcting tone, citing a teammate, or pinning a constraint, that goes into memory. The rest stays in the conversation.",
        "Second, I treat memory like a small CRM. Names, context, what I'm working on, what I dropped. I read it weekly and prune anything that's no longer true.",
      ],
    },
    {
      heading: "What I'd avoid",
      paragraphs: [
        "Don't dump your whole life into memory on day one. Let it grow from real use. The signal-to-noise ratio matters more than coverage.",
      ],
    },
  ],
  "daily-prompts": [
    {
      paragraphs: [
        "Most days I run five prompts before lunch. None of them are clever. They just compound.",
      ],
    },
    {
      heading: "1. The morning brain dump",
      paragraphs: [
        "I paste every loose thought into Claude and ask it to cluster them by topic and tag urgency. Takes 30 seconds, saves an hour of context-switching.",
      ],
    },
    {
      heading: "2. The Mandarin drill",
      paragraphs: [
        "Five sentences in English, translate to Mandarin, then back-translate to check meaning shifted. HSK 5 grind has been faster this way than anki alone.",
      ],
    },
    {
      heading: "3. The video hook stack",
      paragraphs: [
        "Drop a topic. Ask for 20 hooks across four formats (POV, contrarian, list, story). Keep the two I'd actually film, throw the rest.",
      ],
    },
  ],
  "anti-sycophancy-prompt": [
    {
      paragraphs: [
        "If Claude is agreeing with everything you say, you're not getting real feedback. You're getting a mirror with extra steps.",
        "This is the paragraph I paste into project instructions for anything where I want honest pushback:",
      ],
    },
    {
      heading: "The prompt",
      paragraphs: [
        "\"Push back hard on weak reasoning. If my argument has a hole, name it before agreeing. If I'm wrong on a fact, say so directly. If I ask for an opinion, give yours, not a balanced list. Brevity beats hedging. If I phrase something as a question and you suspect I want validation, give your actual read, not the read you think I want.\"",
      ],
    },
    {
      heading: "Why it works",
      paragraphs: [
        "It removes the social cost Claude assumes you want to pay. Most sycophancy is the model trying to be polite. Tell it politeness is not what you're optimizing for and it switches modes.",
      ],
    },
  ],
  "study-with-ai-tsinghua": [
    {
      paragraphs: [
        "Engineering at Tsinghua is dense. AI is the only reason I keep up without burning out. Here's the rule I follow: AI explains, I solve. Never the other way around.",
      ],
    },
    {
      heading: "Before the lecture",
      paragraphs: [
        "I read the chapter once, fast, then ask Claude to quiz me on the core ideas. Wrong answers tell me what to focus on in lecture.",
      ],
    },
    {
      heading: "During problem sets",
      paragraphs: [
        "If I'm stuck, I ask for a hint, never the answer. Specifically: 'what's the first concept I should re-check?' This keeps me thinking.",
      ],
    },
    {
      heading: "The trap to avoid",
      paragraphs: [
        "Asking AI for full solutions on practice problems. You'll pass the homework and fail the exam. The point of homework is the struggle, not the answer.",
      ],
    },
  ],
  "short-form-video-faster": [
    {
      paragraphs: [
        "Script-to-publish in under 2 hours, every time. The pipeline:",
      ],
    },
    {
      heading: "Step 1: 10-minute script",
      paragraphs: [
        "Topic in, three drafts out. I pick the one that sounds most like me, edit for spoken rhythm, done.",
      ],
    },
    {
      heading: "Step 2: B-roll list",
      paragraphs: [
        "Ask Claude to read my script and list every visual that should appear. I shoot from the list, no improvising.",
      ],
    },
    {
      heading: "Step 3: The secret prompt",
      paragraphs: [
        "'Cut my script down by 30 percent without losing the hook or the closing line.' This is what makes the final piece feel tight instead of bloated.",
      ],
    },
  ],
  "building-with-claude-code": [
    {
      paragraphs: [
        "I'm a Mechanical Engineering student. I've shipped three production products this year using Claude Code as my co-pilot. Here's what changed.",
      ],
    },
    {
      heading: "What Claude Code actually does",
      paragraphs: [
        "It reads my repo, makes edits, runs commands, and writes commits. I describe what I want in plain English. It implements, tests, and explains.",
        "The skill is in the asking, not in the typing. The clearer my spec, the better the result.",
      ],
    },
    {
      heading: "What I still do myself",
      paragraphs: [
        "Architecture decisions. Tradeoffs. Anything where the wrong choice would cost real money or real users. I treat Claude Code like a fast intern, not a tech lead.",
      ],
    },
    {
      heading: "What's next",
      paragraphs: [
        "Probably more agentic stuff. Less typing. More reviewing. We're early, but the shape of the future is clear.",
      ],
    },
  ],
};
