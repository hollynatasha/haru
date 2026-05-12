type Section = { heading?: string; paragraphs: string[] };

export const GUIDE_BODIES: Record<string, Section[]> = {
  "claude-full-setup": [
    {
      paragraphs: [
        "Ini guide yang aku kirim buat kamu yang udah comment 'CLAUDE' di video.",
        "Jadi kamu udah tau Claude itu ada 4 produk berbeda. Sekarang pertanyaannya, mulai dari mana dan gimana caranya? Aku breakdown satu per satu, mulai dari yang paling gampang sampe yang paling powerful.",
      ],
    },
    {
      heading: "1. Claude Chat",
      paragraphs: [
        "Ini titik awal kamu. Claude Chat itu versi Claude yang bisa diakses gratis lewat browser di claude.ai. Ga perlu install apapun, tinggal buka, daftar pakai email, dan langsung bisa dipake.",
        "Setup (literally 2 menit): buka claude.ai → daftar pakai email atau Google account → pilih plan Free → mulai chat.",
        "Buat apa aja: summarize artikel, jurnal, atau dokumen panjang; brainstorm ide konten, bisnis, atau essay; draft email atau caption yang kamu stuck nulisinnya; jelasin konsep yang kamu ga ngerti dari Google.",
        "Cara aku pake di Haru: legal docs yang dulu butuh 2 jam baca sendiri sekarang cuma 10 menit karena aku paste ke Claude dan minta dia rangkum poin-poin utamanya plus flag bagian yang perlu aku perhatiin.",
        "Tips buat pemula: jangan terlalu singkat waktu ngetik prompt. Kasih konteks. Contohnya jangan cuma 'summarize ini' tapi 'summarize ini dan highlight 3 poin yang paling penting buat founder yang lagi fundraising.'",
      ],
    },
    {
      heading: "2. Claude Cowork",
      paragraphs: [
        "Ini versi Claude yang beneran kerjain task buat kamu, bukan cuma jawab pertanyaan. Claude Cowork itu agentic, artinya dia bisa baca file di desktop kamu, sortir folder, draft dan kirim email, sampe browsing web atas nama kamu. Ini beda banget dari Chat yang cuma teks-ke-teks.",
        "Setup: butuh Claude Pro atau Team plan (sekitar $20/bulan) → download aplikasi Claude desktop → di settings, aktifkan Computer Use atau Cowork features → grant permission ke folder atau app yang mau dia akses.",
        "Buat apa aja: sortir ratusan email berdasarkan kategori atau urgency; rapiin struktur folder project kamu; research dan compile informasi dari beberapa sumber sekaligus; otomatisin task berulang yang selama ini kamu lakuin manual.",
        "Cara aku pake di Haru: 500 email per minggu yang dulu makan 2 jam sekarang cuma 5 menit karena Cowork yang sortirin, flag yang urgent, dan draft reply template buat yang standar.",
        "Tips buat pemula: mulai dari task kecil dulu, kayak minta dia sortir satu folder atau summarize isi beberapa file. Jangan langsung kasih akses ke semua sistem kamu sebelum kamu ngerti cara kerjanya.",
      ],
    },
    {
      heading: "3. Claude Code",
      paragraphs: [
        "Ini buat kamu yang ngoding, tapi juga buat kamu yang ga ngoding sama sekali. Claude Code itu tools yang jalan di terminal dan bisa akses langsung ke codebase kamu. Dia bisa refactor kode, debug error, nulis test, dan handle Git workflow. Yang underrated, non-coder sekarang juga mulai pake ini buat hal-hal kayak bikin macro Excel atau automasi Notion.",
        "Setup buat non-coder: install Node.js di nodejs.org, buka Terminal (Mac) atau Command Prompt (Windows), ketik 'npm install -g @anthropic-ai/claude-code' terus enter, dan login dengan Claude account kamu. Kalau kamu udah ngoding, jalanin langsung dari folder project kamu dan dia bakal baca seluruh codebase-nya otomatis.",
        "Buat non-coder: minta dia bikin macro Excel buat automasi hal tertentu; bikin script sederhana buat rename file massal; setup automasi Notion atau Google Sheets tanpa coding manual.",
        "Buat yang ngoding: refactor kode lama yang messy; debug error yang udah bikin pusing berjam-jam; nulis unit test otomatis.",
        "Tips buat pemula: kalau kamu non-coder, cukup deskripsiin apa yang mau kamu automasi dalam bahasa biasa. Contohnya 'bikin script Excel yang highlight semua cell di kolom Revenue yang nilainya di bawah 5 juta jadi merah.' Dia yang handle sisanya.",
      ],
    },
    {
      heading: "4. Claude Design",
      paragraphs: [
        "Ini yang paling baru dan paling visual. Claude Design itu tool buat ngebuat mockup, slide, dan desain produk berdasarkan deskripsi teks kamu. Kamu tinggal jelasin apa yang mau kamu buat dan dia generate tampilan visualnya.",
        "Setup: butuh Claude Pro plan → buka claude.ai dan pilih menu Design → mulai dengan ngedeskripsi apa yang mau kamu buat.",
        "Buat apa aja: pitch deck untuk presentasi atau fundraising; mockup tampilan app atau website; template visual buat konten atau dokumen; wireframe produk yang mau kamu develop.",
        "Cara aku pake: pitch deck yang dulu butuh 8 jam kerja plus bayar designer external sekarang jadi 20 menit dan aku kerjain sendiri karena aku tinggal deskripsiin tone, warna, dan struktur slide-nya.",
        "Tips buat pemula: makin detail deskripsi kamu, makin bagus hasilnya. Sebutin warna, tone (minimalist, bold, corporate, dll), jumlah slide atau halaman, dan tujuan dokumennya. Jangan cuma 'bikin pitch deck' tapi 'bikin pitch deck 5 slide buat B2B SaaS startup, minimalist, warna navy dan cream, target audience investor Series A.'",
      ],
    },
    {
      heading: "Mulai dari Mana?",
      paragraphs: [
        "Kalau kamu baru pertama kali, urutannya simpel: Chat dulu. Kenali cara Claude mikir dan cara ngeprompt yang efektif. Kalau udah ngerasa terbiasa dan mau leverage lebih banyak, baru naik ke Cowork buat task otomasi. Code dan Design itu optional tergantung kebutuhan kamu, bukan wajib.",
        "Yang paling penting, kamu ga harus pake semuanya. Aku sendiri masih pake Chat buat 80 persen kerjaan harian aku. Tiga produk lainnya itu power-up, bukan requirement.",
      ],
    },
    {
      heading: "Quick Reference",
      paragraphs: [
        "Chat — akses via browser di claude.ai, tersedia gratis maupun Pro, paling cocok buat daily tasks, brainstorm, dan summarize.",
        "Cowork — desktop app, butuh Claude Pro atau Team, paling cocok buat automasi, sortir file, dan manage inbox.",
        "Code — jalan di terminal, butuh Claude Pro, paling cocok buat coding, scripting, dan automasi teknis.",
        "Design — akses via claude.ai, butuh Claude Pro, paling cocok buat mockup, slide, dan wireframe.",
      ],
    },
  ],
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
