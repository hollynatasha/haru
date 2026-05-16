type GuideImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type GuideIcon =
  | "file-text"
  | "edit"
  | "search"
  | "languages"
  | "user-check"
  | "refresh"
  | "alert"
  | "shield"
  | "check"
  | "sparkles"
  | "trending-up"
  | "book"
  | "help"
  | "clock"
  | "users"
  | "zap"
  | "brain"
  | "arrow-right"
  | "message";

type GuideCta = {
  label: string;
  href: string;
  note?: string;
};

type Section = {
  heading?: string;
  icon?: GuideIcon;
  paragraphs: string[];
  code?: string[];
  images?: GuideImage[];
  cta?: GuideCta;
};

export const GUIDE_BODIES: Record<string, Section[]> = {
  "ai-5-levels": [
    {
      paragraphs: [
        "Ini guide buat kamu yang udah comment di video 5 level AI.",
      ],
      images: [
        {
          src: "/blog/ai-5-levels/hero.png",
          alt: "5 levels of AI — from LLM to super intelligence",
          caption: "5 level AI — dari yang udah bisa kamu pake hari ini sampe yang masih research territory.",
        },
      ],
    },
    {
      heading: "Quick reality check",
      icon: "alert",
      paragraphs: [
        "Kalo kamu cuma pake ChatGPT atau Claude buat tanya-jawab, kamu baru kenal 1 dari 5 level AI yang ada sekarang. Dan ga apa-apa, kebanyakan orang masih di situ. Tapi gap antara level 1 dan level 2 itu yang bikin beberapa founder dan student bisa 10x produktivitas mereka dalam 6 bulan terakhir.",
        "Aku breakdown 5 level-nya satu per satu, plus aku kasih copy-paste prompt di akhir biar kamu bisa langsung level up dari Stage 1 ke Stage 2.",
      ],
    },
    {
      heading: "Level 1: Large Language Model (LLM)",
      icon: "message",
      paragraphs: [
        "Status: ini level paling familiar. Mayoritas orang ada di sini.",
        "LLM itu kayak ChatGPT, Claude, Gemini, semua chatbot di HP kamu. Kamu tanya, dia jawab. Tools-nya teks ke teks, satu turn satu jawaban. Useful banget tapi terbatas karena dia cuma respond ke kamu, ga ada inisiatif buat kerjain sesuatu.",
        "Yang kamu bisa lakuin di level ini: summarize artikel atau dokumen panjang, brainstorm ide, draft email atau caption, tanya konsep yang kamu ga ngerti.",
        "Limit-nya: setiap kali kamu butuh sesuatu, kamu harus prompt manual. AI ga otomatis kerjain task buat kamu. Kamu yang masih jadi operator.",
      ],
    },
    {
      heading: "Level 2: Agentic AI (di sini kita sekarang)",
      icon: "arrow-right",
      paragraphs: [
        "Status: lagi dibangun aktif sekarang, dan kamu bisa mulai pake.",
        "Agentic AI itu AI yang bisa kamu kasih 'kerjaan' bukan cuma pertanyaan. Bedanya simple tapi besar. Di Stage 1 kamu bilang 'explain this contract.' Di Stage 2 kamu bilang 'baca semua contract di folder ini, flag yang punya unfair clause, draft email reject buat yang ga lulus, dan kasih aku summary akhir.'",
        "Tools kayak Claude Cowork, ChatGPT Agents, Manus, sama Devin udah masuk di tahap ini. Dia bisa baca file di desktop kamu, sortir folder, kirim email otomatis, dan browsing web atas nama kamu.",
        "Yang aku pake di Haru: sortir 500 email per minggu yang dulu makan 2 jam sekarang cuma 5 menit. Aku ga manually buka satu-satu, AI yang lakuin sambil aku kerja yang lain.",
      ],
    },
    {
      heading: "Level 3: Multi-Agent Systems",
      icon: "users",
      paragraphs: [
        "Status: infrastructure-nya lagi dibangun, belum mainstream.",
        "Bayangin bukan satu AI yang kerja, tapi 20 AI yang delegate ke satu sama lain. Yang satu research, yang satu nulis, yang satu approve, yang satu publish. Tanpa ada manusia di tengah. Mereka komunikasi langsung satu sama lain dan koordinasi kayak tim beneran.",
        "Ini yang lagi dibangun di lab kayak Anthropic dan OpenAI lewat protocol kayak MCP (Model Context Protocol) dan A2A (Agent to Agent). Buat sekarang masih experimental, tapi 1-2 tahun lagi ini bakal jadi standar.",
      ],
    },
    {
      heading: "Level 4: AGI (Artificial General Intelligence)",
      icon: "brain",
      paragraphs: [
        "Status: disputed. Expert pun masih debat.",
        "AGI itu AI yang bisa match atau exceed kemampuan kognitif manusia di semua bidang. Bisa diagnose kayak dokter senior, debate kayak lawyer, code kayak engineer, semua dalam satu sistem. Dan yang paling penting, dia belajar sendiri bukan di-train manual.",
        "Yang menariknya, ga ada konsensus apakah kita udah sampai sini atau belum. Beberapa peneliti Google DeepMind dan OpenAI bilang kita udah hampir, beberapa peneliti lain bilang masih jauh. Definisi AGI sendiri masih debatable.",
      ],
    },
    {
      heading: "Level 5: Super Intelligence",
      icon: "zap",
      paragraphs: [
        "Status: hipotetis tapi udah ada research aktif.",
        "Super intelligence itu AI yang lebih pintar dari semua manusia gabungan. Dia ga butuh input kita, ga butuh bantuan kita, dan bisa solve problem yang manusia udah stuck berabad-abad. Disease, krisis iklim, fisika quantum yang Einstein pun stuck.",
        "Pertanyaan besarnya bukan 'kapan' tapi 'apakah ini bakal jadi hal terbaik yang pernah terjadi ke manusia, atau yang paling destructive.' Ini debate filosofis yang lagi rame di kalangan researcher AI safety.",
      ],
    },
    {
      heading: "Realisticnya, kamu harus fokus ke mana?",
      icon: "check",
      paragraphs: [
        "Realisticnya, Stage 1 ke Stage 2 itu jarak yang bisa kamu jembatani sekarang. Stage 3, 4, 5 itu masih research territory dan ga affect daily life kamu langsung. Tapi kalo kamu masih stuck di Stage 1, kamu basically pake AI dengan tangan diiket di belakang.",
        "Buat naik dari Stage 1 ke Stage 2, kamu ga harus pake tools baru. Kamu cuma harus ubah cara kamu ngeprompt. Stop nanya, mulai delegate.",
      ],
    },
    {
      heading: "Copy paste prompt: level up dari Stage 1 ke Stage 2",
      icon: "shield",
      paragraphs: [
        "Prompt ini yang aku pake setiap kali aku punya task multi-step yang biasanya aku kerjain manual. Paste prompt ini di Claude atau ChatGPT, ganti bagian [task kamu] sama task konkret yang lagi kamu hadapi.",
      ],
      code: [
        `Aku mau kamu jadi agentic AI buat aku, bukan cuma chatbot yang jawab
satu pertanyaan. Artinya kamu harus treat task aku sebagai project
yang harus diselesaikan, bukan pertanyaan yang harus dijawab.

Task aku: [tulis task lengkap kamu di sini, contoh: "review 10 cold
email yang mau aku kirim ke investor minggu ini, flag yang weak,
rewrite yang ga work, dan kasih aku versi final yang ready dikirim"]

Aturan kerja kamu:
1. Sebelum mulai, pecah task ini jadi sub-task yang lebih kecil dan
   logical. Kasih aku list sub-task itu dulu sebelum kamu mulai.
2. Konfirmasi sama aku kalo ada assumption yang kamu butuh sebelum
   mulai. Jangan langsung jalan kalo ada hal yang ambiguous.
3. Kerjain sub-task satu per satu secara berurutan. Setiap selesai
   satu sub-task, kasih update singkat ke aku.
4. Kalo kamu butuh info tambahan dari aku di tengah jalan, tanya
   langsung jangan tunggu sampe selesai.
5. Di akhir, kasih aku 3 hal: hasil final, ringkasan apa yang kamu
   kerjain, dan rekomendasi 2-3 langkah follow up yang aku harus
   lakuin sendiri.
6. Kalo ada bagian dari task yang kamu ga bisa kerjain (misal butuh
   akses ke sistem yang ga kamu punya), kasih tau di awal jangan
   skip diam-diam.

Konfirmasi dulu kamu ngerti aturan ini, baru aku approve kamu mulai.`,
      ],
    },
    {
      paragraphs: [
        "Cara pakenya: paste prompt di atas ke chat baru di Claude atau ChatGPT. Tunggu AI konfirmasi dia ngerti aturannya. Setelah konfirmasi, dia bakal kasih kamu list sub-task dulu. Kamu review, approve, atau adjust list-nya. Setelah approve, dia jalanin task-nya step by step.",
        "Beda banget feel-nya dari pertanyaan biasa. Kamu basically jadiin Claude project manager, bukan answer machine.",
      ],
    },
    {
      heading: "Contoh real di workflow aku",
      icon: "refresh",
      paragraphs: [
        "Stage 1 way (yang dulu aku lakuin): aku tanya 'tolong summarize legal contract ini.' Claude kasih summary. Aku tanya lagi 'apa yang concerning?' Claude list red flags. Aku tanya lagi 'tolong draft email negotiate.' Claude draft email. Total 3 prompt, 3 turn, masih harus manual.",
        "Stage 2 way (sekarang): aku paste prompt di atas plus task: 'review legal contract Haru ini, flag red flag, draft email negotiate, kasih aku 3 langkah follow up.' Claude kasih sub-task list, aku approve. Claude jalanin semuanya sekaligus, kasih aku output final. Total 1 prompt, 1 turn, hasil komplit.",
        "Selisihnya ga cuma waktu, tapi mental load. Stage 2 thinking itu yang bikin kamu pake AI as leverage, bukan as crutch.",
      ],
    },
    {
      heading: "Mau lebih?",
      icon: "sparkles",
      paragraphs: [],
      cta: {
        label: "Follow @hollynst on Instagram",
        href: "https://instagram.com/hollynst",
        note: "Aku post breakdown AI, workflow, dan Tsinghua life tiap minggu. Kalo guide ini useful, ikutin biar dapet yang berikutnya duluan.",
      },
    },
  ],
  "resume-ats-prompts": [
    {
      paragraphs: [
        "Ini guide buat kamu yang udah comment 'RESUME' di video.",
      ],
    },
    {
      heading: "Real talk soal CV",
      icon: "trending-up",
      paragraphs: [
        "75 persen CV ke-reject sama ATS sebelum manusia pernah liat. ATS itu Applicant Tracking System, robot yang scan CV kamu dan decide apakah kamu lanjut ke tahap interview atau langsung dibuang. Jadi sebelum recruiter manusia ngeliat kamu, robot ini yang jadi gerbang pertama.",
        "Aku belajar ini dari dua sisi. Sisi pertama waktu aku apply ke Tsinghua dan harus tweak CV aku berkali-kali biar lolos. Sisi kedua waktu aku rebuild careers page Haru dan review 200 lebih CV kandidat. Yang aku liat konsisten: kebanyakan orang nulis CV pake bahasa yang terlalu generic dan ga ada angka.",
        "4 prompt Claude di bawah ini yang aku pake buat fix masalah itu. Pake satu per satu di chat Claude kamu.",
      ],
    },
    {
      heading: "Sample resume buat contoh",
      icon: "file-text",
      paragraphs: [
        "Buat semua prompt di bawah, aku pake format Harvard Resume sebagai contoh. Format Harvard itu standar emas yang dipake students Harvard Business School dan kebanyakan top universities. Strukturnya simpel: single column, no tables, no graphics, action verb di tiap bullet, angka di mana mungkin.",
        "Aku bakal pake CV fiktif 'Sarah, freshgrad Marketing dari UI' sebagai contoh di semua prompt di bawah biar kamu bisa liat langsung gimana hasilnya.",
      ],
      images: [
        {
          src: "/blog/resume-ats/harvard-template.png",
          alt: "Harvard College resume sample template",
          caption:
            "Resume Sample dari Mignone Center for Career Success. Source: careerservices.fas.harvard.edu",
        },
      ],
    },
    {
      heading: "Prompt 1: The Rewriter",
      icon: "edit",
      paragraphs: [
        "Buat apa: ubah pengalaman generic kamu jadi bullet yang punya angka dan dampak, pake Google XYZ formula (Accomplished X, as measured by Y, by doing Z).",
        "Copy paste prompt ini ke Claude:",
      ],
      code: [
        `Aku punya bullet point pengalaman kerja di CV aku yang masih generic.
Tolong rewrite pake Google XYZ formula: "Accomplished X, as measured by Y,
by doing Z."

Aturan:
1. Setiap bullet harus punya minimal 1 angka konkret (persentase, jumlah,
   durasi, atau dollar amount).
2. Mulai dengan kata kerja kuat (Launched, Increased, Built, Reduced, dll),
   bukan "Responsible for" atau "Helped with".
3. Kalo aku belum punya angka, kasih aku 3 cara konkret buat estimate atau
   measure achievement aku.
4. Tetep dalam 2 baris per bullet biar muat di format Harvard Resume.

Bullet aku yang sekarang:
[paste bullet kamu di sini]`,
      ],
    },
    {
      paragraphs: [
        "Contoh hasil di CV Sarah.",
        "Sebelum: Membantu tim marketing mencapai target campaign tahunan.",
        "Setelah pake Rewriter: Increased Q3 campaign ROI 40% (Rp 120M revenue) by launching 3 user-generated content campaigns and optimizing paid social spend across Meta and TikTok.",
        "Beda banget kan? Yang kedua punya angka, ada action verb, dan jelas impact-nya.",
      ],
    },
    {
      heading: "Prompt 2: The Diagnoser",
      icon: "search",
      paragraphs: [
        "Buat apa: scan CV kamu kayak ATS beneran dan flag bagian yang bakal bikin kamu ke-reject.",
        "Copy paste prompt ini ke Claude:",
      ],
      code: [
        `Anggap kamu adalah ATS (Applicant Tracking System) yang lagi scan CV ini
buat posisi [tulis posisi kamu di sini, contoh: "Marketing Associate at
B2B SaaS company"].

Tolong analisis CV aku dan flag:
1. Keyword yang missing atau understuffed dibanding job description tipikal
   buat posisi ini.
2. Format yang ga ATS-friendly (tabel, kolom multiple, header weird, font
   yang ga standar, tanggal yang inconsistent).
3. Bullet yang terlalu generic atau ga ada angka.
4. Section yang harusnya ada tapi ga ada (atau sebaliknya, ada section yang
   harusnya ga ada).

Buat setiap flag, kasih:
- Lokasi spesifik (section + baris)
- Kenapa itu masalah
- Fix konkret yang bisa aku langsung apply

CV aku:
[paste CV kamu di sini, atau upload file-nya]`,
      ],
    },
    {
      paragraphs: [
        "Contoh hasil di CV Sarah. Claude bakal balikin sesuatu kayak gini:",
      ],
      code: [
        `FLAG 1: EDUCATION section — tanggal kamu nulis "2020 - sekarang" tapi
di bagian Experience nulis "Aug 2023 - Present". Inconsistent format.
Fix: pake satu format konsisten, contoh "Aug 2020 - May 2024".

FLAG 2: EXPERIENCE bullet 2 — "Bertanggung jawab atas social media
campaigns" terlalu pasif dan ga ada angka. Fix: ubah ke "Managed 5
social media campaigns yang generate 2M impressions dalam 6 bulan."

FLAG 3: SKILLS section — kamu nulis "Microsoft Office" tapi ga sebut
"Excel pivot tables" atau "PowerPoint" specifically. ATS biasanya
match keyword yang lebih spesifik.

FLAG 4: Missing keyword umum buat Marketing Associate posisi B2B SaaS —
"CRM", "lead generation", "marketing automation", "Hubspot". Kalo kamu
beneran punya pengalaman ini, masukin ke bullet relevant.`,
      ],
    },
    {
      paragraphs: [
        "Pakai output ini sebagai checklist langsung buat revise CV kamu.",
      ],
    },
    {
      heading: "Prompt 3: The Translator",
      icon: "languages",
      paragraphs: [
        "Buat apa: buat kamu yang mau career pivot dari satu industri ke industri lain. Skill kamu di industri lama kemungkinan transferable, tapi kamu butuh bahasa industri barunya.",
        "Copy paste prompt ini ke Claude:",
      ],
      code: [
        `Aku mau career pivot dari [industri/role A] ke [industri/role B].

Aku kasih kamu 2 hal:
1. Pengalaman aku yang sekarang (bullet dari CV aku)
2. Job description buat posisi yang aku target di industri baru

Tolong translate pengalaman aku jadi bahasa industri baru. Caranya:
1. Identify skill underlying dari setiap bullet aku (apa skill sebenernya
   yang aku pake, di-strip dari konteks industri).
2. Rephrase bullet pake terminology, keyword, dan framing yang relevant
   di industri baru.
3. Pertahankan angka dan fakta konkret (jangan ngarang prestasi yang
   ga ada).
4. Flag mana skill aku yang beneran transferable vs mana yang ga relevant
   sama sekali.

Pengalaman aku sekarang:
[paste bullet CV kamu]

Job description target:
[paste job desc lengkap]`,
      ],
    },
    {
      paragraphs: [
        "Contoh hasil di CV Sarah (pivot dari Marketing agency ke Tech B2B).",
        "Sebelum (bahasa marketing agency): Launched 12 brand campaigns for FMCG clients, generating 4.2M social media impressions.",
        "Setelah Translator (bahasa B2B tech): Led 12 go-to-market initiatives across multiple verticals, driving 4.2M qualified audience touchpoints through full-funnel content distribution.",
        "Skill underlying-nya sama (kampanye + reach), tapi bahasanya udah ke-tune buat audience B2B tech.",
      ],
    },
    {
      heading: "Prompt 4: The Hiring Manager",
      icon: "user-check",
      paragraphs: [
        "Buat apa: simulasi interview beneran sebelum kamu beneran interview. Claude jadi hiring manager yang nanyain pertanyaan tough dan rate jawaban kamu.",
        "Copy paste prompt ini ke Claude:",
      ],
      code: [
        `Aku mau practice interview buat posisi [tulis posisi + company-nya].
Tolong jadi hiring manager beneran yang interview aku.

Aturan:
1. Tanya 5 pertanyaan, mulai dari behavioral question (STAR format),
   technical buat role-nya, sampe pertanyaan curveball yang biasanya
   bikin kandidat stumble.
2. Tanya satu per satu, tunggu aku jawab, baru tanya yang berikutnya.
3. Setelah aku jawab tiap pertanyaan, kasih rating 1-10 plus feedback:
   - Apa yang strong dari jawaban aku
   - Apa yang weak atau missing
   - Versi jawaban yang lebih kuat (1 paragraf contoh)
4. Setelah 5 pertanyaan selesai, kasih overall assessment + 3 hal yang
   aku harus improve sebelum interview real.

Context CV aku:
[paste CV kamu]

Job description:
[paste job desc]

Mulai dari pertanyaan pertama.`,
      ],
    },
    {
      paragraphs: [
        "Tips: jangan langsung baca semua pertanyaannya. Jawab satu per satu kayak interview beneran biar feedback Claude akurat.",
      ],
    },
    {
      heading: "Loop yang aku pake",
      icon: "refresh",
      paragraphs: [
        "Urutan idealnya: Diagnoser dulu buat tau apa yang salah di CV kamu sekarang. Rewriter buat fix bullet yang generic jadi pake XYZ formula. Translator kalo kamu lagi pivot industri. Hiring Manager seminggu sebelum interview beneran.",
        "Pake loop ini setiap kamu apply ke posisi baru. Tweak CV kamu sesuai job description-nya.",
      ],
    },
    {
      heading: "Yang harus kamu hindari",
      icon: "alert",
      paragraphs: [
        "Jangan langsung trust output Claude 100 persen. Selalu review apakah angka yang dia suggest masuk akal sama pengalaman kamu yang asli. Jangan ngarang prestasi.",
        "Jangan pake CV yang udah diformat tabel atau multiple columns. ATS susah baca. Pake format Harvard yang simple single-column.",
        "Jangan stuff keyword secara obvious. ATS sekarang udah pinter dan recruiter manusia bakal langsung notice.",
      ],
    },
  ],
  "anti-hallucination-prompt": [
    {
      paragraphs: [
        "Ini cerita yang aku ceritain di video, plus 1 prompt yang aku pake biar AI ga ngarang.",
      ],
      images: [
        {
          src: "/blog/anti-hallucination/hero.png",
          alt: "27 percent — the rate AI hallucinates",
          caption:
            "Riset bilang AI bisa hallucinate sampai 27% of the time pas dipake buat research.",
        },
      ],
    },
    {
      heading: "Cerita singkat",
      icon: "book",
      paragraphs: [
        "Bulan lalu aku hampir submit skripsi dengan paper akademik yang Claude bikin-bikin sendiri. Author, tahun, judul, jurnal, halaman, semuanya keliatan legit banget. Aku coba google paper-nya buat double check dan ternyata paper-nya beneran ga ada di Google Scholar, ga ada di mana-mana. Claude full confidence ngarang sendiri dan aku hampir submit ke supervisor.",
        "Ini yang namanya AI hallucination dan riset bilang AI bisa hallucinate sampai 27 persen of the time. Artinya kalo kamu pake AI buat hal serius kayak research, fakta, angka, atau citation, kamu harus punya cara buat verify.",
      ],
    },
    {
      heading: "Kenapa AI hallucinate?",
      icon: "help",
      paragraphs: [
        "AI kayak Claude itu sebenernya predicting kata berikutnya yang paling mungkin, bukan retrieving fakta dari database verified. Jadi kalo dia ga tau jawabannya, dia tetep bisa generate kalimat yang sounds confident karena pattern-nya match. Bukan dia jahat atau sengaja bohong, dia cuma ga punya filter built-in buat tau mana yang real dan mana yang dia ngarang.",
        "Solusinya bukan stop pake AI, tapi kasih dia filter manual lewat cara kamu ngeprompt.",
      ],
    },
    {
      heading: "Prompt anti-hallucination yang bisa kamu copy-paste",
      icon: "shield",
      paragraphs: [
        "Ini prompt yang aku paste di awal chat setiap kali aku pake Claude buat research atau hal serius. Copy paste apa adanya, ganti bagian [topik kamu] sama topik yang lagi kamu kerjain.",
      ],
      code: [
        `Sebelum jawab pertanyaan aku soal [topik kamu], aku mau kamu follow 4 aturan ini:

1. Kalo kamu ga punya source yang bisa di-verify buat satu klaim, bilang aja
   "aku ga punya source yang reliable buat klaim ini." Jangan ngarang nama
   paper, author, tahun, atau statistik. Lebih baik kamu jujur ga tau
   daripada bikin sesuatu yang keliatan legit.

2. Buat setiap fakta atau angka yang kamu kasih, sebutkan sumbernya secara
   spesifik. Kalo sumbernya cuma "general knowledge" atau "pattern dari
   training data", bilang gitu juga, jangan dibikin sounds authoritative.

3. Di akhir jawaban kamu, kasih confidence rating dari 1 sampe 10 buat
   keseluruhan jawaban. Jelasin bagian mana yang kamu yakin dan bagian mana
   yang kamu kurang yakin. Default "I'm sure" ga boleh dipake.

4. Kasih aku 2 sampe 3 cara konkret buat aku verify jawaban kamu sendiri,
   misalnya keyword spesifik buat di-google, nama database yang relevant,
   atau cara ngecek manual.

Setelah kamu confirm kamu ngerti 4 aturan ini, baru aku kasih pertanyaan
sebenernya.`,
      ],
    },
    {
      paragraphs: [
        "Cara pakenya: paste prompt ini dulu di awal chat. Tunggu Claude konfirmasi dia ngerti. Baru kamu kasih pertanyaan kamu yang sebenernya. Setiap kali Claude jawab, dia bakal otomatis follow 4 aturan tadi.",
      ],
    },
    {
      heading: "Kenapa prompt ini works",
      icon: "check",
      paragraphs: [
        "Empat aturan di prompt itu cover empat tipe hallucination yang berbeda.",
        "Aturan 1 force Claude jujur kalo dia ga punya source. Ini paling penting karena tipe hallucination paling berbahaya itu yang sounds confident.",
        "Aturan 2 bikin kamu bisa langsung lihat mana klaim yang verifiable dan mana yang cuma pattern matching.",
        "Aturan 3 kasih kamu signal kapan harus extra cek. Kalo Claude bilang dia 6 dari 10, jangan langsung percaya.",
        "Aturan 4 balikin ownership ke kamu. Kamu yang verify, bukan blindly trust.",
        "Stack empat aturan ini di satu prompt, hampir ga ada hallucination yang lolos.",
      ],
    },
    {
      heading: "Kapan kamu ga perlu pake prompt ini",
      icon: "clock",
      paragraphs: [
        "Kamu ga harus pake prompt ini buat semua chat. Kalo kamu lagi creative brainstorm, draft caption, bikin nama produk, atau cuma main-main, ga usah. Pake prompt ini cuma buat hal yang stakes-nya tinggi: research akademik atau citation, fakta historis atau angka statistik, klaim medical, legal, atau financial, apapun yang kalau salah bakal ada konsekuensi real.",
        "Buat sisanya, biarin Claude flow biar idenya lebih liar.",
      ],
    },
    {
      heading: "Cara aku pake sehari-hari",
      icon: "sparkles",
      paragraphs: [
        "Buat skripsi dan research Haru, aku selalu paste prompt ini di awal. Buat brainstorm konten atau ngedraft caption, ga aku pake karena justru bikin output-nya terlalu kaku. Intinya, kamu yang tau konteksnya, jadi kamu yang decide kapan butuh filter dan kapan ga.",
        "Yang penting kamu ga blindly trust AI cuma karena jawabannya sounds confident. Sebagus apapun AI, dia masih predicting, bukan knowing.",
      ],
    },
  ],
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
      images: [
        {
          src: "/blog/claude-setup/cowork.jpg",
          alt: "Claude Cowork desktop interface",
          caption: "Claude Cowork — the desktop agent. Source: anthropic.com",
        },
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
      images: [
        {
          src: "/blog/claude-setup/code.jpg",
          alt: "Claude Code running in a terminal",
          caption: "Claude Code — agentic coding from the terminal. Source: anthropic.com",
        },
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
      images: [
        {
          src: "/blog/claude-setup/design.jpg",
          alt: "Claude Design interface",
          caption: "Claude Design — prompt-to-mockup. Source: anthropic.com",
        },
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
