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
  | "message"
  | "calendar"
  | "mic"
  | "camera"
  | "link"
  | "plug";

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
  "claude-weekly-limit": [
    {
      paragraphs: [
        "Ini guide buat kamu yang udah comment \"LIMIT\" di video.",
        "Kamu pake Claude Pro, kerja normal aja, ga ngerasa heavy user. Tapi tiap Rabu sore kena weekly limit. Atau tiap session 2-jam tiba-tiba kena rolling limit dan harus tunggu 5 jam. Kabar baiknya: fix-nya ga rumit, dan ga butuh upgrade plan.",
      ],
      images: [
        {
          src: "/blog/claude-weekly-limit/hero.png",
          alt: "Stop kena weekly limit Claude — 3 cara",
          caption: "3 hal yang diem-diem ngabisin usage kamu — dan cara stop-nya, tanpa upgrade plan.",
        },
      ],
    },
    {
      heading: "Kenapa kamu sering kena limit tanpa sadar",
      icon: "help",
      paragraphs: [
        "Most orang nyalahin \"limit Claude ketat banget.\" Padahal yang sebenernya kejadian, ada 3 hal yang diem-diem ngabisin usage kamu tanpa kamu sadar.",
        "Claude punya 2 limit sekaligus: rolling window 5 jam, sama weekly cap. Tiga kebiasaan di bawah ini yang paling sering ngebakar dua-duanya. Aku urutin dari yang paling ngefek.",
      ],
    },
    {
      heading: "Cara 1: mulai chat baru lebih sering (paling ngefek)",
      icon: "refresh",
      paragraphs: [
        "Ini yang most orang ga tau. Setiap kali kamu kirim message di chat, Claude baca ULANG seluruh percakapan dari awal sampe message kamu yang baru. Bukan baca yang baru aja.",
        "Jadi makin panjang chat-nya, makin mahal tiap message-nya. Hitungan kasarnya kira-kira gini:",
      ],
      code: [
        `Message ke-1    ->   1x cost
Message ke-25   ->   ~25x cost   (Claude baca message 1-24 dulu)
Message ke-50   ->   ~50x cost
Message ke-100  ->   ~100x cost`,
      ],
      images: [
        {
          src: "/blog/claude-weekly-limit/chat-cost.png",
          alt: "Grafik: makin panjang chat makin mahal, 1x sampai 100x",
          caption: "Message ke-100 = kamu bayar buat baca 100 message lama tiap turn.",
        },
      ],
    },
    {
      paragraphs: [
        "Chat yang panjang itu silent assassin buat usage kamu. Kamu ngerasa cuma 5 message terakhir, padahal kamu bayar buat baca 100 message lama tiap turn.",
        "Solusinya: mulai chat baru tiap kali kamu pindah ke task yang beda secara konteks. Tapi most orang takut mulai chat baru karena konteks lama ilang. Fix-nya satu — handoff doc.",
        "Sebelum tutup chat yang udah panjang, paste prompt ini:",
      ],
      code: [
        `Aku mau pindah ke chat baru biar context-nya fresh, tapi aku butuh
kamu inget gambar besar dari chat ini. Tolong bikin handoff doc dalam
format markdown yang isinya:

## Goal sesi ini
[apa yang aku coba achieve]

## Apa yang udah diselesaikan
[bullet point hasil konkret]

## Decision penting
[keputusan yang udah kita ambil, plus alasannya]

## Yang belum selesai
[task yang masih outstanding]

## Context yang harus dibawa ke chat baru
[file penting, variable name, constraint, atau apapun yang AI baru
perlu tau]

## Next prompt buat chat baru
[draft prompt yang langsung bisa aku paste]

Bikin se-concise mungkin, max 300 kata.`,
      ],
    },
    {
      paragraphs: [
        "Claude bakal generate handoff doc. Copy, mulai chat baru, paste sebagai message pertama. Kamu pindah ke chat baru dengan context window di 1-2% instead of 80%.",
      ],
    },
    {
      heading: "Cara 2: pake Projects buat apapun yang berulang",
      icon: "book",
      paragraphs: [
        "Ini fitur yang aku kira premium tapi sebenernya udah ada di Claude Pro standard. Yang most orang ga sadar: file dan dokumen yang kamu taro di Project ga ngitung ke context window kamu.",
        "Artinya kamu bisa upload reference docs 100 halaman ke Project, dan tiap chat di dalem Project itu otomatis punya access ke isinya, tanpa kamu bayar token buat baca ulang setiap kali.",
        "Cara setup-nya: buka Claude desktop atau web, klik sidebar kiri lalu + New Project, kasih nama (misal \"Mata Kuliah Statistik\" atau \"Konten Holly\"), klik + Add Files buat upload PDF/Word/.md/gambar, terus klik + New Chat di dalem Project. Tiap chat di situ punya akses ke semua file, tapi context window kamu tetep 0% di awal.",
      ],
      images: [
        {
          src: "/blog/claude-weekly-limit/projects.png",
          alt: "Diagram: file di Project dipake semua chat tanpa ngitung context window",
          caption: "Upload file sekali ke Project, kepake di semua chat — context window tetep 0% di awal.",
        },
      ],
    },
    {
      paragraphs: [
        "Strategi pakenya: bikin Project beda per area. Tiap mata kuliah kalo kamu mahasiswa (upload syllabus, reading, notes). Tiap project klien kalo kamu freelance (brief, brand guidelines, asset). Tiap area kerjaan kalo kamu founder (SOP, vendor list, contract template). Tiap butuh konsultasi soal area itu, mulai chat di Project relevan — Claude tau context tanpa kamu re-explain.",
        "Tips: update file di Project secara berkala dan hapus yang outdated. Pake heading dan struktur jelas di file Markdown yang kamu upload, biar navigasi Claude lebih akurat. Dan jangan upload file yang kegedean (>50 MB) — bikin loading Project lambat.",
      ],
    },
    {
      heading: "Cara 3: pake model yang sesuai sama task",
      icon: "brain",
      paragraphs: [
        "Banyak orang default pake Opus 4.7 buat semua chat soalnya itu \"yang paling pinter.\" Yang ga disadar: Opus itu juga yang paling boros, sekitar 5x lebih mahal usage-nya dibanding Sonnet, dan 15x dibanding Haiku.",
        "PAKE HAIKU 4.5 buat: reformatting text, translate cepet, summarize artikel pendek, brainstorm ide kasar, Q&A simpel yang ga butuh reasoning, cek typo / proofread.",
        "PAKE SONNET 4.6 buat: drafting email atau pesan, coding bantuan basic, explain konsep, outline content, research dengan source umum. Most daily tasks — default kamu harusnya Sonnet.",
        "PAKE OPUS 4.7 buat: strategic decision (pricing, hiring, positioning), complex coding, long-form writing yang butuh nuance, research yang butuh deep synthesis, negotiation prep. Intinya apapun yang outcome-nya besar.",
      ],
      images: [
        {
          src: "/blog/claude-weekly-limit/model-picker.png",
          alt: "Perbandingan model Haiku, Sonnet, Opus dengan biaya usage",
          caption: "Default kamu harusnya Sonnet — bukan Opus. Turun ke Haiku buat task ringan.",
        },
      ],
    },
    {
      paragraphs: [
        "Cara switch model: di Claude desktop/web tinggal klik dropdown di atas chat. Di Claude Code ketik /model haiku-4-5, /model sonnet-4-6, atau /model opus-4-7.",
        "Contoh workflow hemat aku sehari-hari: brainstorm ide pake Haiku (5 menit), pilih ide bagus terus switch ke Sonnet buat outline, draft scripts pake Sonnet, final review + tone refinement baru switch ke Opus (cuma 5-10 menit). Total usage Opus aku di bawah 10% dari total chat, tapi kerjaan tetep premium quality.",
      ],
      images: [
        {
          src: "/blog/claude-weekly-limit/code-terminal.jpg",
          alt: "Claude Code di terminal",
          caption: "Di Claude Code, ganti model tinggal ketik /model — jadi gampang turun ke Sonnet/Haiku pas task-nya ringan.",
        },
      ],
    },
    {
      heading: "Bonus: setting yang bantu hemat",
      icon: "zap",
      paragraphs: [
        "Matiin extended thinking buat task simpel. Extended thinking bakar 5-10x token lebih banyak. Nyalain cuma pas kamu beneran butuh reasoning deep.",
        "Matiin web search kalo ga perlu. Tiap web search jadi extra context yang dimakan. Kalo task kamu purely text-based, matiin.",
        "Spread heavy work seharian. Kalo kamu slam semua kerjaan ke 1 session 2 jam, gampang kena 5-hour limit. Spread ke pagi/siang/malam, 5-hour limit jarang ketrigger.",
      ],
    },
    {
      heading: "Quick reference",
      icon: "check",
      paragraphs: [
        "Semua yang di atas, dalam satu tabel:",
      ],
      code: [
        `ISSUE                         FIX                            EFFORT
----------------------------  -----------------------------  ------------------
Chat panjang = mahal          Handoff doc + chat baru        2 menit
File yg sering dipake         Taro di Project                10 mnt, benefit terus
Default Opus buat semua       Sonnet/Haiku buat task ringan  reflex, 1 minggu
Extended thinking selalu on   Matiin kecuali butuh banget    1 detik tiap chat
Slam kerjaan ke 1 session     Spread ke 3 window seharian    schedule habit`,
      ],
    },
    {
      heading: "Yang harus dihindari",
      icon: "alert",
      paragraphs: [
        "Jangan delete chat lama tanpa save handoff doc. Sekali kamu mulai chat baru, chat lama tetep accessible. Tapi kalo kamu delete, ilang permanent.",
        "Jangan upload file confidential ke Project yang di-share. Project di Claude Pro personal kamu itu private, tapi jangan share link Project ke orang yang ga seharusnya akses.",
        "Jangan switch model di tengah-tengah complex task. Bikin reasoning continuity break. Selesain dulu, baru switch buat task baru.",
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
  "fable-5-guide": [
    {
      paragraphs: [
        "Fable 5 itu model paling canggih sekaligus paling efisien dari Claude. Kuota gratisnya cuma sampai 7 Juli, jadi ini panduan biar kamu langsung bisa manfaatin sebelum window-nya ditutup.",
        "Semua prompt di bawah tinggal copy-paste. Aku sengaja bikin panjang dan detail, karena Fable 5 itu makin bagus kalau kamu kasih brief yang jelas. Ganti bagian [dalam kurung] sesuai kebutuhan kamu.",
      ],
      images: [
        {
          src: "/blog/fable-5-guide/01-cover.png",
          alt: "Fable 5 kebuka — 5 use case worth dicoba",
          caption: "Fable 5, 1 juta token context. Window gratisnya sampai 7 Juli.",
        },
      ],
    },
    {
      heading: "Apa itu Fable 5?",
      icon: "sparkles",
      paragraphs: [
        "Model paling canggih dari Claude, context-nya 1 juta token, jadi sekali jalan dia sanggup pegang seluruh proyek atau dokumen tebel sekaligus. Sempet ditarik paksa pemerintah AS karena kelewat jago, terus balik lagi 1 Juli dengan pengaman jauh lebih ketat.",
        "Satu hal yang harus kamu inget: sekali jalan Fable 5 makan token berkali lipat dari Opus. Jadi dia bukan buat dipake asal-asalan — simpen buat kerjaan paling berat.",
      ],
      images: [
        {
          src: "/blog/fable-5-guide/02-what-is-fable.png",
          alt: "Apa itu Fable 5 — 1 juta token context",
          caption: "1 juta token = seluruh proyek atau dokumen tebel kebaca sekali jalan.",
        },
      ],
    },
    {
      heading: "Cara aktifin (2 menit)",
      icon: "plug",
      paragraphs: [
        "Buka Claude, pilih Fable 5 sebagai model. Tersedia buat plan Pro, Max, sama Team.",
        "Inget window-nya: 50% kuota Fable 5 gratis sampai 7 Juli. Lewat itu jalan lewat usage credit (harga API-nya kira-kira 2x Opus 4.8).",
        "Catatan penting: kalau pengamannya ke-trigger pas task sensitif, dia bakal auto-pindah ke Opus 4.8 dan ngasih tau kamu. Jadi jangan kaget kalau tengah jalan modelnya ganti sendiri.",
      ],
      images: [
        {
          src: "/blog/fable-5-guide/03-pricing-window.png",
          alt: "Harga dan window gratis Fable 5",
          caption: "Gratis 50% sampai 7 Juli. Setelah itu lewat usage credit.",
        },
      ],
    },
    {
      heading: "Aturan emas: kapan pake, kapan jangan",
      icon: "alert",
      paragraphs: [
        "Karena token-nya boros, pakai Fable 5 dengan disiplin.",
        "PAKE buat: kerjaan paling berat, task besar sekali jalan, riset mendalam — yang biasanya makan kamu berhari-hari.",
        "BALIK ke Opus atau Sonnet buat: chat cepet, draft pendek, nulis fungsi kecil. Itu lebih hemat.",
        "Dan selalu mulai dari brief yang jelas. Tiap bolak-balik itu sama dengan token kebakar.",
      ],
      images: [
        {
          src: "/blog/fable-5-guide/09-golden-rule.png",
          alt: "Aturan emas Fable 5 — kapan pake kapan jangan",
          caption: "Pake buat yang berat. Task ringan balik ke Opus/Sonnet.",
        },
      ],
    },
    {
      heading: "1. Bikin app berbayar jadi versi lokal",
      icon: "zap",
      paragraphs: [
        "Arahin Fable ke app langganan (misalnya app streaming kayak Netflix), suruh dia riset arsitekturnya, terus rebuild versi kamu sendiri yang jalan lokal di device.",
        "Prompt pendek di carousel cuma gist-nya. Ini versi panjang yang aku pake — makin detail brief-nya, makin sekali jadi hasilnya.",
      ],
      code: [
        `Kamu aku posisiin sebagai senior full-stack engineer sekaligus product
architect. Aku mau kamu kerjain ini sebagai satu proyek utuh, bukan
tanya-jawab. Jalan sampe selesai, jangan berhenti di tengah buat nanya
hal kecil — kumpulin semua pertanyaan di awal aja.

TARGET: [app langganan, mis. Netflix]
TUJUAN AKHIR: aku punya versi lokal-ku sendiri yang jalan 100% di device,
tanpa langganan, tanpa server berbayar, tanpa akun.

FASE 1 — RISET ARSITEKTUR
Bedah [app target] dari sisi:
- Fitur inti (yang bikin orang mau bayar), pisahin dari fitur pinggiran.
- Data model utama: entitas apa aja, relasinya gimana (mis. User,
  Profile, Title, Episode, Watchlist, Progress).
- Flow utama end-to-end: dari buka app, browse, mulai nonton, sampe
  lanjut nonton di device lain.
- Stack yang masuk akal buat versi lokal (bukan nebak stack asli mereka).

FASE 2 — BANGUN VERSI LOKAL-KU
Pakai /goal buat set target: app yang jalan sepenuhnya di localhost.
- Frontend: [React / Next.js / pilihan kamu], responsive, dark mode.
- Backend: lokal (mis. Node + SQLite / file JSON), no cloud.
- Sample data: minimal 20 judul dummy + thumbnail placeholder, 2 profil,
  1 watchlist, progress nonton yang kesimpen.
- Fitur minimal yang harus jalan: browse by kategori, search, halaman
  detail, "lanjut nonton", tandai favorit.

YANG HARUS KAMU KASIH KE AKU
1. File structure lengkap (tree) + penjelasan singkat tiap folder.
2. Semua file code yang dibutuhin, komplit, siap jalan.
3. Cara jalaninnya di localhost step-by-step (install, seed data, run).
4. Daftar hal yang SENGAJA aku skip biar tetap ringan, plus 3 ide
   pengembangan lanjutan kalau nanti mau serius.

ATURAN
- Kalau ada assumption yang kamu butuh, tanya SEKARANG sebelum mulai.
- Jangan pura-pura punya akses ke kode asli app target. Semua berdasar
  arsitektur umum yang wajar.
- Prioritasin "bisa jalan" di atas "fitur lengkap".`,
      ],
      images: [
        {
          src: "/blog/fable-5-guide/04-usecase-01.png",
          alt: "Use case 1 — bikin app streaming versi lokal",
          caption: "Riset arsitektur dulu, terus /goal buat rebuild versi lokal kamu.",
        },
      ],
    },
    {
      heading: "2. Riset mendalam selevel dosen PhD",
      icon: "search",
      paragraphs: [
        "Fable nyebar sub-agent paralel, tiap agent ngedalemin satu sudut, terus digabung jadi satu laporan yang udah di-cross-check plus sumbernya.",
        "Kunci prompt ini: kamu minta dia PECAH dulu jadi beberapa sub-agent, baru gabung. Jangan biarin dia jawab dari satu sudut doang.",
      ],
      code: [
        `Kamu aku posisiin sebagai research lead yang mimpin tim peneliti PhD.
Aku mau riset selevel akademik beneran soal:

TOPIK: [tulis topik kamu selengkap mungkin, plus kenapa kamu butuh ini]

CARA KERJA (WAJIB)
1. Pecah topik ini jadi 4-6 sudut/angle yang beda dan saling melengkapi
   (mis. sudut historis, data/statistik, sudut kritik/kontra, sudut
   praktis/aplikasi, sudut tren terbaru). Kasih aku daftar angle-nya dulu.
2. Perlakuin tiap angle kayak dikerjain sub-agent terpisah yang fokus
   dalem, bukan permukaan. Tiap angle harus punya bukti sendiri.
3. Setelah semua angle selesai, CROSS-CHECK antar temuan: mana yang
   saling nguatin, mana yang saling bertentangan. Bahas kontradiksinya,
   jangan disembunyiin.

OUTPUT AKHIR (SATU LAPORAN)
- Ringkasan eksekutif 5 kalimat.
- 5 temuan utama. Tiap temuan WAJIB disertai angka/bukti konkret +
  sumbernya, bukan klaim umum.
- 3 argumen tandingan (counter-argument) yang paling kuat terhadap
  temuan di atas.
- 1 gap yang belum kejawab / yang masih jadi perdebatan terbuka.
- Daftar sumber lengkap di akhir.

ATURAN KEJUJURAN
- Tandain SETIAP klaim yang confidence-nya rendah dengan label
  [CONFIDENCE RENDAH] dan jelasin kenapa.
- Kalau kamu ga nemu sumber yang kredibel buat suatu klaim, bilang
  "belum ada sumber kuat" — JANGAN ngarang sumber, judul paper, atau
  angka. Ini aturan paling penting.
- Bedain jelas antara fakta yang ada datanya vs interpretasi kamu.`,
      ],
      images: [
        {
          src: "/blog/fable-5-guide/05-usecase-02.png",
          alt: "Use case 2 — riset mendalam selevel PhD",
          caption: "Sub-agent paralel, tiap agent dalemin satu sudut, terus di-cross-check.",
        },
      ],
    },
    {
      heading: "3. Bedah laporan keuangan jadi keputusan",
      icon: "trending-up",
      paragraphs: [
        "Kasih laporan tebel, suruh dia jangan cuma ambil angka. Context 1M-nya baca semua sekaligus, nemuin pola, dan nunjuk keputusan yang harus kamu ambil.",
        "Ini use case di mana 1 juta token bener-bener kepake: kamu bisa lempar laporan ratusan halaman sekali jalan.",
      ],
      code: [
        `Kamu aku posisiin sebagai CFO sekaligus analis keuangan senior. Aku
lampirin/paste laporan keuangan di bawah. Jangan cuma ekstrak angka —
baca SEMUANYA sampe habis, cari cerita di balik angkanya.

LAPORAN: [perusahaan / periode, mis. "Haru Studio, Q1-Q2 2026"]
KONTEKS AKU: [posisi kamu + keputusan apa yang lagi kamu timbang]

YANG HARUS KAMU LAKUIN
1. Baca seluruh dokumen, termasuk catatan kaki dan bagian yang
   gampang dilewatin. Sering red flag ngumpet di situ.
2. Identifikasi pola penting antar periode: apa yang naik, apa yang
   turun, dan APA PENYEBABNYA (bukan cuma "revenue naik 10%").
3. Tandai anomali / red flag: margin aneh, cash flow ga cocok sama
   profit, beban yang lonjak, piutang numpuk, dsb.
4. Kasih 3 keputusan konkret yang harus aku ambil, masing-masing
   dengan reasoning + trade-off + risiko kalau salah ambil.

FORMAT OUTPUT
- 1 tabel ringkas: metrik kunci (Revenue, Gross/Net Margin, Cash Flow,
  Burn/Runway kalau relevan) dibanding antar periode + arah tren.
- Ringkasan eksekutif tepat 5 kalimat, bahasa manusia bukan jargon.
- Bagian "3 keputusan" dalam bentuk list dengan reasoning tiap poin.

ATURAN
- Kalau ada angka yang kelihatan ga konsisten antar bagian, FLAG,
  jangan diem-diem dirata-ratain.
- Kalau ada data penting yang ga ada di laporan buat ngambil keputusan,
  bilang "butuh data X" — jangan diisi tebakan.`,
      ],
      images: [
        {
          src: "/blog/fable-5-guide/06-usecase-03.png",
          alt: "Use case 3 — bedah laporan keuangan",
          caption: "Baca semua sekaligus, tarik pola, tunjuk keputusan yang harus diambil.",
        },
      ],
    },
    {
      heading: "4. Bikin financial model lebih ngebut",
      icon: "zap",
      paragraphs: [
        "Di kerjaan spreadsheet, Fable ngalahin Opus (sekitar 25-30% lebih cepet). Kasih data mentahmu, dia bangun modelnya lengkap sama rumus, asumsi, dan skenario.",
        "Yang bikin model ini beneran kepake: minta dia nulis asumsi secara EKSPLISIT. Model tanpa asumsi yang jelas itu ga bisa dipercaya.",
      ],
      code: [
        `Kamu aku posisiin sebagai financial analyst yang biasa bangun model
buat startup. Aku kasih data mentah di bawah. Bangun financial model
lengkap yang bisa aku pertanggungjawabin ke investor.

DATA: [paste spreadsheet / angka mentah kamu di sini]
BISNIS: [jenis bisnis + periode proyeksi, mis. "12 bulan ke depan"]

YANG HARUS KAMU BANGUN
1. Semua rumus yang dipake, tulis eksplisit (jangan cuma kasih hasil
   akhir). Aku harus bisa telusuri tiap angka dari mana.
2. Daftar ASUMSI yang kepake, satu per satu, dengan nilainya (mis.
   growth rate, conversion, harga rata-rata, churn, biaya per unit).
   Kalau kamu nebak sebuah asumsi, tandain "[ASUMSI — sesuaikan]".
3. 3 skenario: PESIMIS, REALISTIS, OPTIMIS. Jelasin apa yang beda di
   asumsi tiap skenario, jangan cuma kali-kali angka.

OUTPUT PER SKENARIO
- Proyeksi bulanan/periodik: Revenue, Cost, Profit, dan Margin %.
- Ringkasan angka akhir tiap skenario dalam 1 tabel perbandingan.

ANALISIS TAMBAHAN
- Sebutin 2 variabel yang PALING ngefek ke hasil (sensitivity). Kalau
  variabel itu meleset 10%, hasilnya berubah berapa?
- 1 paragraf: risiko terbesar dari model ini dan asumsi mana yang
  paling rapuh.

ATURAN
- Konsisten satuan dan periode. Kalau data mentahku ga lengkap, list
  dulu apa yang kurang sebelum ngisi asumsi.`,
      ],
      images: [
        {
          src: "/blog/fable-5-guide/07-usecase-04.png",
          alt: "Use case 4 — financial model lebih cepat",
          caption: "Data mentah masuk, keluar model lengkap: rumus, asumsi, 3 skenario.",
        },
      ],
    },
    {
      heading: "5. Bungkus Claude Code jadi dashboard \"agentic OS\"",
      icon: "brain",
      paragraphs: [
        "Buat yang udah sering pake Claude Code — bungkus dia jadi dashboard yang bisa diklik, kerjaan harian jadi skill sekali-klik, plus metrik yang gak keliatan di terminal.",
        "Ini use case paling teknis. Fable cocok di sini karena dia bisa pegang arsitektur + code MVP sekali jalan tanpa kehilangan konteks.",
      ],
      code: [
        `Kamu aku posisiin sebagai staff engineer yang ahli developer tooling.
Aku mau bungkus Claude Code aku jadi dashboard "agentic OS" yang bisa
diklik. Rancang arsitekturnya, terus kasih code MVP-nya.

KONTEKS AKU
- Kerjaan harian berulang yang mau aku jadiin skill sekali-klik:
  [list 3-5 tugas kamu, mis. "generate caption", "review PR",
  "riset kompetitor", "bikin draft newsletter"].
- Aku mau nyambungin ke: [Notion / Obsidian / pilih salah satu].

YANG HARUS KAMU RANCANG
1. ARSITEKTUR: gambarin komponennya (UI dashboard, layer yang manggil
   Claude Code, penyimpanan skill, integrasi Notion/Obsidian). Jelasin
   alur data dari klik tombol sampe hasil balik + kesimpen.
2. SKILL SEKALI-KLIK: buat tiap tugas harianku jadi "skill" — satu
   tombol, input minimal, output langsung kepake. Kasih struktur
   gimana skill didefinisiin biar gampang nambah yang baru.
3. METRIK: tampilin hal yang ga keliatan di terminal — mis. berapa
   task jalan hari ini, waktu kehemat perkiraan, skill paling sering
   dipake, error terakhir.
4. INTEGRASI: cara nulis/baca ke [Notion/Obsidian] (hasil otomatis
   masuk ke sana).

DELIVERABLE
- Diagram arsitektur (teks/ASCII gpp) + penjelasan tiap komponen.
- Code MVP yang jalan: pilih stack yang paling simpel buat sekali orang
  ([mis. Next.js + route handler + local store]). Sertakan cara run.
- 1 skill contoh yang bener-bener kepasang end-to-end sebagai template.

ATURAN
- Utamain MVP yang JALAN di atas fitur lengkap. Yang belum kekerjain,
  taruh di bagian "next steps", jangan dipaksain masuk sekarang.
- Tandain bagian yang butuh API key / setup manual dari aku.`,
      ],
      images: [
        {
          src: "/blog/fable-5-guide/08-usecase-05.png",
          alt: "Use case 5 — dashboard agentic OS dari Claude Code",
          caption: "Kerjaan harian jadi skill sekali-klik, plus metrik yang ga keliatan di terminal.",
        },
      ],
    },
    {
      heading: "Trik hemat token",
      icon: "check",
      paragraphs: [
        "Mulai dari brief yang jelas biar nggak bolak-balik — tiap bolak-balik itu token kebakar. Prompt-prompt panjang di atas justru bikin hemat, karena sekali jalan langsung jadi.",
        "Task ringan balik ke Opus atau Sonnet. Simpen Fable 5 buat yang berat doang.",
        "Kalau task-nya besar, minta dia rencanain dulu langkah-langkahnya, baru eksekusi — biar hasilnya sekali jadi.",
      ],
    },
    {
      heading: "Mau lebih?",
      icon: "sparkles",
      paragraphs: [
        "Semua contoh hasil di panduan ini cuma ilustrasi ya — output aslinya bakal beda tergantung prompt sama data kamu.",
      ],
      cta: {
        label: "Follow @hollynst on Instagram",
        href: "https://instagram.com/hollynst",
        note: "Aku post breakdown AI, prompt, dan Tsinghua life tiap minggu. Kalo guide ini useful, ikutin biar dapet yang berikutnya duluan.",
      },
      images: [
        {
          src: "/blog/fable-5-guide/10-cta.png",
          alt: "Fable 5 — coba sebelum window ditutup",
          caption: "Window gratisnya sampai 7 Juli. Cobain use case yang paling ngena buat kamu.",
        },
      ],
    },
  ],
  "5-day-claude-setup": [
    {
      paragraphs: [
        "Ini guide buat kamu yang udah comment 'ROADMAP' di video.",
      ],
      images: [
        {
          src: "/blog/5-day-setup/hero.png",
          alt: "5-day Claude setup roadmap",
          caption: "5 hari, 15-30 menit per hari. Ga overwhelming.",
        },
      ],
    },
    {
      heading: "Kenapa most orang stuck sama Claude",
      icon: "alert",
      paragraphs: [
        "Most orang download Claude, tanya 1-2 pertanyaan, ngerasa 'yah biasa aja kayak ChatGPT', terus jarang dibuka lagi. Bukan karena Claude-nya jelek, tapi karena mereka pake default Claude yang ga tau apapun tentang mereka, dan setup foundation-nya ga pernah dibangun.",
        "Hari 1 setelah download itu basically Claude treat kamu kayak stranger. Hari 30 setelah setup proper, Claude treat kamu kayak somebody yang dia kenal 2 tahun. Gap-nya itu yang most orang ga pernah jembatani.",
        "Roadmap 5 hari ini yang aku wish ada waktu aku baru mulai. Tiap hari 15 sampe 30 menit, ga overwhelming.",
      ],
    },
    {
      heading: "Hari 1: Setup foundation (15 menit)",
      icon: "file-text",
      paragraphs: [
        "Tujuan hari ini: bikin folder yang jadi memory jangka panjang Claude.",
        "Step-by-step: download Claude dari App Store (Mac) atau Microsoft Store (Windows). Yang versi mobile juga, biar bisa pake voice command nanti. Login pake email Google atau email biasa. Di sidebar kiri, klik tab Projects atau Folders. Bikin 4 folder yang represent area utama hidup atau kerja kamu.",
        "Contoh folder aku di Haru: Operations (semua yang related ke daily ops, hiring, vendor), Content (script video, caption, blog draft), Hiring (CV screening, interview prep, offer letter), Founder Notes (jurnal pribadi, journaling, decision log).",
        "Kenapa folder penting: setiap chat yang kamu mulai di dalam folder otomatis inherit context folder itu. Jadi Claude tau kamu lagi di 'content mode' atau 'ops mode' dan tone-nya menyesuaikan.",
        "Tips beginner: mulai dari 4 folder, jangan lebih. Kamu bisa tambah nanti. Folder yang too granular justru bikin kamu lupa file mana di folder mana.",
      ],
    },
    {
      heading: "Hari 2: Ajarin Claude soal kamu (30 menit)",
      icon: "edit",
      paragraphs: [
        "Tujuan hari ini: bikin 2 file penting di setiap folder biar Claude ga treat kamu kayak orang asing.",
        "File 1: About-Me.md. Isinya basic info tentang kamu, goals kamu, dan background yang relevan. Contoh format:",
      ],
      code: [
        `# About Me

## Nama
[Holly]

## Pekerjaan
Founder di Haru (B2B SaaS untuk content workflow).
Mahasiswa Tsinghua (jurusan Business Analytics).
CEO sejak umur 15.

## Goals 2026
- Scale Haru ke ARR $1M
- Selesai semester 4 Tsinghua dengan GPA 3.7+
- Build content library untuk AI literacy di Indonesia

## Background relevan
- Indonesia-based, lahir di Jakarta
- Pengalaman: ops, content, founder, hiring
- Industri yang aku tau: SaaS, content creation, ed-tech

## Constraint penting
- Bahasa: Indonesian native, English fluent
- Timezone: GMT+7
- Working hours: Senin-Jumat, 9-18`,
      ],
    },
    {
      paragraphs: [
        "File 2: AI-Style.md. Isinya gimana kamu mau Claude ngomong sama kamu. Contoh:",
      ],
      code: [
        `# How I Want Claude to Respond

## Tone
- Direct tapi warm
- Indonesian-English mix natural (kayak chat sama temen)
- No corporate jargon
- No filler ("Great question!" "Let me think...")

## Format
- Default ke bullet kalo lebih dari 3 poin
- Code block kalo ngasih instruksi step-by-step
- Bold buat keyword penting, italic buat emphasis

## Banned (jangan pernah dipake)
- Em-dash
- Kata "menggali", "permadani", "tak ada kata lain selain"
- Generic motivational fluff
- Fragmen pendek di bawah 5 kata

## Selalu lakuin
- Jujur kalo ga tau jawaban-nya
- Sebutin sumber kalo ngasih fakta
- Tanya konteks kalo request aku ambiguous`,
      ],
    },
    {
      paragraphs: [
        "Cara bikin file-nya: buka tab Cowork di Claude (bukan Chat), terus minta Claude bikin folder dan 2 file ini. Atau bikin manual di Notion/text editor terus upload ke folder Claude kamu.",
        "Buat semua 4 folder kamu punya 2 file ini. Tone bisa berbeda per folder (contoh: tone di Founder Notes lebih reflective, tone di Operations lebih direct).",
      ],
    },
    {
      heading: "Hari 3: Pindah ke Cowork (20 menit)",
      icon: "arrow-right",
      paragraphs: [
        "Tujuan hari ini: switch dari chatbot mode ke worker mode.",
        "Bedanya Chat vs Cowork: Chat itu kamu tanya, dia jawab. Cowork itu kamu kasih task, dia kerjain. Chat stateless, ga inget action. Cowork action-oriented, bisa eksekusi. Chat cocok buat brainstorm. Cowork cocok buat automasi. Chat free di browser. Cowork butuh Claude Pro.",
        "Cara setup: buka Claude desktop app (bukan web browser). Di top navigation, klik tab Cowork. Kalo pertama kali, ada setup wizard yang guide kamu. Ikutin aja. Setelah setup, kamu bisa minta Claude kerjain task multi-step otomatis.",
        "Coba task pertama yang gampang: 'Tolong buka folder Downloads aku, list semua file PDF yang lebih lama dari 30 hari, terus pindahin ke folder Archive yang ada di Desktop. Konfirmasi sama aku sebelum delete apapun.'",
        "Claude bakal lakuin satu-satu sambil update kamu di setiap step. Ini Stage 2 AI thinking yang aku ceritain di video.",
      ],
    },
    {
      heading: "Hari 4: Connect MCP (30 menit)",
      icon: "plug",
      paragraphs: [
        "Tujuan hari ini: kasih Claude akses ke app lain kamu.",
        "MCP itu Model Context Protocol, basically protocol yang nge-connect Claude ke literally aplikasi apapun. Tanpa MCP, Claude cuma punya akses ke data dalam chat kamu. Dengan MCP, dia bisa baca Gmail kamu, Notion kamu, Slack kamu, sampe Stripe dashboard kamu.",
        "Cara setup: di Claude desktop app, klik Settings terus pilih tab Connectors atau Integrations. Ada list official connector dari Anthropic. Mulai dari yang paling relevan sama kerjaan kamu.",
        "Saran beginner — connect maksimum 3 dulu: Gmail kalo kamu sering email, Google Drive kalo file kamu di sana, Slack kalo tim kamu pake Slack.",
        "Buat advanced user (Hari 4 versi extended), explore awesome-mcp-servers di GitHub yang punya 200+ connector termasuk Stripe, Linear, Notion, Postgres, dan banyak lainnya.",
        "Tes setelah connect: 'Tolong cek email aku 24 jam terakhir, kasih aku summary 3 email paling penting yang butuh aku respond.' Kalo connector setup bener, Claude bakal baca inbox kamu beneran dan kasih summary. Kalo salah, dia bakal bilang ga punya akses.",
      ],
    },
    {
      heading: "Hari 5 (optional): Claude Code",
      icon: "zap",
      paragraphs: [
        "Tujuan hari ini: kasih Claude akses ke computer kamu langsung.",
        "Honest disclaimer: hari 5 ini optional, ga semua orang butuh. Kalo kamu non-coder dan kerjaan kamu lebih ke content atau ops, hari 4 udah cukup. Kalo kamu engineer, freelancer, atau founder yang punya sisi technical, hari 5 worth setup.",
        "Cara setup buat non-coder: buka Terminal (Mac) atau Command Prompt (Windows). Ketik 'npm install -g @anthropic-ai/claude-code'. Tekan enter. Tunggu install selesai. Login pake account Claude kamu. Buka folder mana aja di terminal dan ketik 'claude-code' buat start session.",
        "Yang bisa kamu lakuin (use case non-coder): 'Tolong scan folder Downloads aku, identify semua file yang duplicate, dan pindahin yang duplicate ke folder Trash. Konfirmasi total size yang freed up.' Atau: 'Bikin script Excel macro yang highlight semua cell di kolom Revenue yang nilainya di bawah 5 juta jadi merah.' Atau: 'Rapiin folder Photos aku berdasarkan tanggal di EXIF data, masukin ke subfolder per bulan.'",
        "Untuk yang ngoding: Claude Code juga bisa refactor codebase, debug, nulis test, dan handle Git workflow.",
      ],
    },
    {
      heading: "Copy paste prompt: hari 2 interview generator",
      icon: "shield",
      paragraphs: [
        "Ini prompt yang paling impactful di seluruh roadmap. Paste ke chat Claude di hari 2, Claude bakal interview kamu dan generate About-Me.md plus AI-Style.md kamu otomatis.",
      ],
      code: [
        `Aku mau kamu jadi setup assistant aku buat hari kedua Claude roadmap.
Tugas kamu interview aku 25 sampe 35 pertanyaan, terus generate 2 file
buat aku: About-Me.md dan AI-Style.md.

ATURAN INTERVIEW:
1. Tanya satu pertanyaan per turn, tunggu jawaban aku, baru lanjut.
2. Kategori pertanyaan:
   - 5-7 pertanyaan tentang siapa aku (nama, role, goals, background)
   - 5-7 pertanyaan tentang kerjaan dan konteks aku
   - 5-7 pertanyaan tentang cara aku komunikasi dan preferensi tone
   - 5-7 pertanyaan tentang banned words, antipattern, atau format
     yang aku ga suka
   - 3-5 pertanyaan tentang constraint (timezone, bahasa, jam kerja)
3. Kalo jawaban aku terlalu pendek atau generic, follow up dengan
   pertanyaan klarifikasi spesifik.
4. Kalo aku kasih contoh writing aku (caption, email lama, dll),
   analisa pattern dan tanya buat konfirmasi.

OUTPUT:
Setelah 25-35 pertanyaan, generate 2 file dalam format markdown:

About-Me.md harus include:
- Nama lengkap
- Pekerjaan dan role
- Goals jangka pendek (3-6 bulan) dan panjang (1-3 tahun)
- Background relevan
- Industri yang aku tau
- Constraint (bahasa, timezone, jam kerja)

AI-Style.md harus include:
- Tone preference (formal/casual/mixed, warmth level)
- Format preference (bullet vs paragraph, code block usage)
- Banned words atau phrase
- Filler phrase yang aku ga suka
- Hal yang Claude harus selalu lakuin
- Hal yang Claude harus jangan pernah lakuin

Mulai dari pertanyaan pertama. Don't generate file sebelum interview
selesai.`,
      ],
      cta: {
        label: "Follow @hollynst di Instagram",
        href: "https://instagram.com/hollynst",
        note: "Setelah Claude generate 2 file, copy paste ke setiap folder kamu. Mau breakdown AI dan workflow lainnya tiap minggu? Ikutin di sana.",
      },
    },
    {
      heading: "Yang harus kamu hindari di setup",
      icon: "alert",
      paragraphs: [
        "Jangan setup 10 folder di hari 1. 4 cukup. Folder berlebihan bikin kamu lupa file mana di folder mana.",
        "Jangan skip hari 2. Tanpa About-Me + AI-Style, semua hari setelahnya jauh kurang impactful.",
        "Jangan connect 10 MCP di hari 4 sekaligus. Connect 3 dulu, biasain pake-nya, baru tambah.",
        "Jangan paksain hari 5 kalo kamu non-coder. Hari 4 udah cukup powerful buat 90 persen use case.",
      ],
    },
  ],
  "claude-free-resources": [
    {
      paragraphs: [
        "Ini guide buat kamu yang udah comment 'LINKS' di video.",
      ],
      images: [
        {
          src: "/blog/claude-resources/hero.png",
          alt: "5 free Claude resources ranked by ROI",
          caption: "5 resource gratis, ranked dari ROI tercepat ke paling slow-burn.",
        },
      ],
    },
    {
      heading: "Kenapa urutan resource itu penting",
      icon: "trending-up",
      paragraphs: [
        "Most listicle resource Claude di TikTok urutin berdasarkan apa yang populer. Aku urutin berdasarkan apa yang langsung kepake di hari pertama kamu pake-nya. Ada perbedaan besar.",
        "Resource bagus tapi butuh 3 minggu kamu pelajarin = useless kalo kamu cuma punya 1 jam minggu ini. Resource yang langsung kasih kamu template kerja dalam 5 menit = useful walaupun namanya ga seglamour MIT free course.",
        "5 resource di bawah ini aku urutin dari yang fastest ROI, bukan dari yang paling viral.",
      ],
    },
    {
      heading: "1. anthropic-cookbook (GitHub)",
      icon: "file-text",
      paragraphs: [
        "Link: github.com/anthropics/anthropic-cookbook",
        "Kenapa di nomor 1: ini koleksi code recipe siap pakai dari Anthropic sendiri. Kamu clone repo-nya, buka folder yang relevan, edit 2-3 line, dan jalanin. 5 menit kamu udah punya template yang beneran kerja.",
        "Yang bisa kamu langsung pake: extraction/ (extract structured data dari dokumen, email, atau PDF), rag/ (bikin sistem tanya jawab pake data kamu sendiri), agents/ (workflow agent multi-step), multimodal/ (analisa gambar, audio, sama dokumen), evaluation/ (cek kualitas output AI kamu).",
        "Yang aku pake: recipe extraction buat parse legal contract Haru jadi structured JSON. Dulu manual baca 30 menit per contract, sekarang 30 detik.",
        "Beda dari course: course ngajarin kamu konsep, cookbook kasih kamu kode jadi yang tinggal modify.",
      ],
    },
    {
      heading: "2. Anthropic Skills Library (claude.ai)",
      icon: "sparkles",
      paragraphs: [
        "Link: claude.ai/customize/skills",
        "Kenapa di nomor 2: ini koleksi skill resmi dari Anthropic. Plug ke chat kamu kayak install app, dan Claude langsung jadi spesialis di task itu.",
        "Yang bisa kamu langsung pake: code-reviewer (review pull request kamu), test-writer (auto-generate unit test), doc-generator (bikin dokumentasi dari kode), performance-analyzer (cari bottleneck), security-audit (OWASP top 10 scan), refactor-pro (safe large refactor).",
        "Beda dari sub-agent community: Skills library itu official dan terjamin kualitas-nya, tapi koleksi-nya lebih kecil dan general-purpose. Sub-agent community lebih niche tapi quality vary.",
        "Yang aku pake: doc-generator buat update README repo Haru tiap kali ada major change.",
      ],
    },
    {
      heading: "3. awesome-mcp-servers (GitHub)",
      icon: "plug",
      paragraphs: [
        "Link: github.com/punkpeye/awesome-mcp-servers",
        "Kenapa di nomor 3: MCP itu Model Context Protocol, protocol yang nge-connect Claude ke literally apapun. Repo ini punya 200 lebih server siap pakai. Notion, Linear, Stripe, Slack, Drive, sampe printer di rumah kamu, semua udah ada.",
        "Yang bisa kamu langsung pake (paling populer): Notion MCP (Claude baca dan tulis ke workspace Notion kamu), Stripe MCP (Claude akses revenue, customer, transaksi), Linear MCP (Claude baca dan bikin ticket), Postgres MCP (Claude query database kamu langsung), Filesystem MCP (Claude akses folder lokal kamu).",
        "Yang aku pake: aku connect Claude ke Stripe bisnis lewat MCP. Sekarang tiap pagi dia kasih revenue summary tanpa aku login dashboard Stripe sama sekali.",
        "Beda dari Anthropic connector official: connector official di claude.ai cuma cover ~10 apps populer. MCP cover 200+ termasuk niche tools dan setup custom.",
      ],
    },
    {
      heading: "4. awesome-claude-code-subagents (GitHub)",
      icon: "users",
      paragraphs: [
        "Link: github.com/hesreallyhim/awesome-claude-code-subagents",
        "Kenapa di nomor 4: 100 lebih sub-agent yang community bikin gratis. Tiap sub-agent itu basically Claude yang udah di-training khusus buat task spesifik. Ga generic kayak default Claude, tapi laser-focused.",
        "Yang bisa kamu langsung pake: cv-screener (review dan rank CV berdasarkan job desc), security-auditor (scan codebase kamu buat vulnerability), doc-writer (generate dokumentasi dari kode), refactor-pro (refactor large codebase secara aman), test-writer (generate unit test otomatis).",
        "Yang aku pake: cv-screener buat review 50 CV per minggu di Haru. Ranked output dengan skor 1-10 plus alasan. 4 menit total vs 6 jam manual.",
        "Caveat: karena community-built, kualitasnya bervariasi. Cek star count dan last-updated date sebelum install.",
      ],
    },
    {
      heading: "5. docs.anthropic.com (paling underrated)",
      icon: "book",
      paragraphs: [
        "Link: docs.anthropic.com",
        "Kenapa di nomor 5 tapi the most underrated: bukan course panjang yang harus kamu sit through. Ini reference cepet kalo kamu butuh tau parameter spesifik, pattern terbaru, atau best practice. Free, no signup, dan paling up-to-date dari semua resource lain.",
        "Yang paling worth dibaca: Prompt Engineering page (kalo output kamu masih generic), Tool Use docs (kalo mau bikin Claude pake tools eksternal), MCP docs (kalo mau bikin integration kamu sendiri), Best Practices (antipattern yang most user ga sadar lagi lakuin), API Reference (kalo kamu beneran ngoding pake Claude API).",
        "Yang aku pake: hampir tiap minggu aku cek docs buat parameter spesifik atau pattern terbaru. Jauh lebih reliable dari YouTube tutorial yang udah outdated 6 bulan.",
      ],
    },
    {
      heading: "Copy paste prompt: cek tools mana yang kamu butuh",
      icon: "shield",
      paragraphs: [
        "Susah decide mana yang harus kamu install duluan? Paste prompt ini ke Claude buat dapet rekomendasi yang personalized.",
      ],
      code: [
        `Aku mau optimize cara aku pake Claude pake resource gratis. Tolong
recommend mana yang harus aku setup duluan berdasarkan kerjaan aku.

KONTEKS AKU:
- Role aku: [contoh: founder startup B2B SaaS / mahasiswa skripsi /
  content creator / marketer / engineer]
- 3 task yang paling sering aku kerjain di Claude:
  1. [contoh: research kompetitor]
  2. [contoh: draft email cold outreach]
  3. [contoh: analisa data customer]
- Tools utama yang aku pake sekarang: [contoh: Notion, Slack, Gmail,
  Stripe, Google Drive]
- Comfort level coding: [contoh: ga bisa coding sama sekali / bisa baca
  kode / bisa modify kode / bisa nulis kode dari nol]
- Waktu yang aku punya buat setup: [contoh: 30 menit / 2 jam / 1 minggu]

5 RESOURCE GRATIS YANG ADA:
1. anthropic-cookbook (code recipe siap pakai)
2. Anthropic Skills Library (skill official plug-and-play)
3. awesome-mcp-servers (200+ connector ke aplikasi)
4. awesome-claude-code-subagents (100+ spesialis agent)
5. docs.anthropic.com (reference)

TOLONG KASIH AKU:
1. Urutan setup yang paling masuk akal buat aku (bukan urutan default,
   tapi yang spesifik buat use case aku).
2. 2 sampe 3 item spesifik yang aku install duluan dari resource yang
   relevan (contoh: "install Stripe MCP server" bukan cuma "pake
   awesome-mcp-servers").
3. Apa yang bisa aku skip dulu dan kenapa.
4. Estimasi waktu setup buat masing-masing.

Jujur aja kalo ada resource yang ga relevan buat aku.`,
      ],
      cta: {
        label: "Follow @hollynst di Instagram",
        href: "https://instagram.com/hollynst",
        note: "Output yang kamu dapet bakal personalized berdasarkan profile kamu. Mau breakdown AI yang konkret tiap minggu? Ikutin di sana.",
      },
    },
    {
      heading: "Realistic setup order buat beginner",
      icon: "refresh",
      paragraphs: [
        "Kalo kamu bingung di mana mulai dan ga mau pake prompt di atas, ini urutan default yang aku recommend:",
        "Hari 1 (30 menit): setup 1 MCP server yang paling relevan sama tool kamu (Notion, Gmail, atau Drive).",
        "Hari 2 (45 menit): install 1 sub-agent dari awesome-claude-code-subagents yang relevan.",
        "Hari 3 (1 jam): browse anthropic-cookbook dan adapt 1 recipe buat use case kamu.",
        "Hari 4 (30 menit): install 1-2 skill dari Anthropic official library.",
        "Ongoing: bookmark docs.anthropic.com dan baca section yang relevan tiap kamu nemu pattern baru.",
        "Total 3 jam dalam 4 hari, dan kamu udah punya Claude setup yang 10x lebih powerful dari default.",
      ],
    },
  ],
  "claude-calendar": [
    {
      paragraphs: [
        "Ini guide buat kamu yang udah comment 'CALENDAR' di video.",
      ],
      images: [
        {
          src: "/blog/claude-calendar/hero.png",
          alt: "2 hours back per week after Claude handles calendar",
          caption: "2 jam per minggu balik ke aku setelah Claude handle calendar Haru.",
        },
      ],
    },
    {
      heading: "Kenapa calendar itu black hole produktivitas",
      icon: "alert",
      paragraphs: [
        "Aku ga ngitung berapa jam yang aku abis tiap minggu cuma buat ngatur calendar Haru. Bikin event, paste detail dari WhatsApp, copy lokasi, set reminder, undang attendee, ulang lagi minggu depan. Ribuan klik kecil yang individually ga kerasa tapi kalo dijumlahin makan 2 jam lebih per minggu.",
        "Setelah aku connect Claude ke calendar dan setup 3 cara di bawah ini, 2 jam itu balik ke aku. Aku ga ngarang, aku timer-in literally.",
      ],
    },
    {
      heading: "Step 0 wajib: connect calendar dulu",
      icon: "plug",
      paragraphs: [
        "Sebelum tips apapun bisa jalan, kamu wajib connect calendar kamu ke Claude.",
        "Buka claude.ai dan masuk ke akun kamu. Klik profile kamu di pojok kiri bawah, pilih Settings. Cari tab Integrations atau Connectors. Pilih Google Calendar atau Outlook Calendar, klik Connect. Login dan grant permission, pastikan kamu kasih akses Read + Write, bukan cuma Read.",
        "Tanpa permission Write, Claude cuma bisa baca calendar kamu tapi ga bisa bikin event baru. 90 persen tips di bawah ga jalan kalo step ini ke-skip.",
      ],
    },
    {
      heading: "Cara 1: voice command lewat mobile",
      icon: "mic",
      paragraphs: [
        "Ini cara yang aku pake waktu lagi commute atau lagi ga di depan laptop. Buka Claude app di HP kamu, klik icon mic, dan ngomong natural.",
        "Contoh yang aku pake: 'Jadwalin meeting sama tim ops Senin jam 10 pagi, durasi 45 menit, undang Bayu, Tania, sama Reza, taro agenda meeting di description, kasih reminder 15 menit sebelumnya.'",
        "Claude bakal parse semua detail dari kalimat itu dan langsung bikin event di calendar kamu. Kamu ga perlu klik apapun setelahnya.",
        "Tips: makin spesifik kamu, makin akurat hasilnya. Sebutin nama orangnya (bukan 'tim ops'), durasi spesifik (bukan 'sebentar'), dan apapun yang penting kayak lokasi atau link Zoom.",
      ],
    },
    {
      heading: "Cara 2: screenshot WhatsApp atau iMessage",
      icon: "camera",
      paragraphs: [
        "Ini favorit aku karena 80 persen koordinasi di Indonesia masih via WhatsApp. Daripada manual extract detail dari chat, kamu screenshot conversation-nya dan kirim ke Claude app.",
        "Contoh use case: kamu chat sama temen soal dinner Jumat malam. Mereka kirim 'OK, Senopati Lounge ya jam 7, aku book meja buat 4 orang.' Daripada manual bikin event, screenshot chat itu, kirim ke Claude, dan dia parse jadi calendar event lengkap dengan lokasi, waktu, dan jumlah orang.",
        "Bonus: kalo screenshot kamu nge-capture nomor HP atau email orang lain, Claude bisa otomatis undang mereka ke event juga.",
      ],
    },
    {
      heading: "Cara 3: kasih link website (paling hack)",
      icon: "link",
      paragraphs: [
        "Ini cara yang most underrated. Banyak event yang detail-nya ada di website tapi ga ada feed calendar yang bisa kamu subscribe. Contohnya website sekolah anak, kalender acara komunitas, atau jadwal konferensi.",
        "Cara pakenya: kirim link website-nya ke Claude app dengan instruksi: 'Tolong scrape semua event dari [URL website] dan tambahin ke calendar aku. Tag mereka pake kategori sekolah-anak.'",
        "Claude bakal buka website, baca semua event, dan populate calendar kamu sekaligus. Aku pake ini buat website sekolah temen aku dan 12 event masuk dalam 30 detik tanpa aku input satu-satu.",
      ],
    },
    {
      heading: "Copy paste prompt: setup calendar assistant",
      icon: "shield",
      paragraphs: [
        "Paste prompt ini di Custom Instructions atau di awal chat baru kamu biar Claude lebih akurat handle calendar request kamu. Ganti bagian dalam kurung sama info kamu sendiri.",
      ],
      code: [
        `Kamu adalah calendar assistant aku. Setiap kali aku minta kamu bikin,
update, atau cek event di calendar, follow aturan berikut:

KONTEKS AKU:
- Timezone aku [contoh: GMT+7 Jakarta]
- Jam kerja aku [contoh: Senin sampe Jumat, 9 pagi sampe 6 sore]
- Default reminder yang aku mau [contoh: 15 menit sebelum]
- Orang yang sering aku undang [contoh: Bayu (bayu@haru.id), Tania
  (tania@haru.id), Reza (reza@haru.id)]
- Lokasi default kalo aku ga sebut [contoh: Haru office, Senopati]

ATURAN KAMU:
1. Kalo aku ga sebut durasi, default 30 menit buat meeting internal dan
   60 menit buat external.
2. Kalo aku ga sebut waktu spesifik, suggest 3 slot kosong di calendar
   aku dan tanya aku pilih yang mana.
3. Kalo aku undang lebih dari 1 orang, check ketersediaan mereka dulu
   sebelum konfirmasi event.
4. Jangan bikin event yang overlap sama existing event tanpa kasih
   tau aku.
5. Untuk event recurring, tanya aku berapa kali dan ending date-nya.
6. Setiap kali kamu bikin event, kasih aku konfirmasi singkat: nama
   event, waktu, peserta, lokasi.

Konfirmasi kamu ngerti aturan ini, baru aku kasih request pertama.`,
      ],
    },
    {
      paragraphs: [
        "Setelah Claude konfirmasi, kamu bisa langsung request natural kayak 'jadwalin lunch sama Bayu minggu depan' dan dia bakal handle semua detail-nya.",
      ],
    },
    {
      heading: "Kapan kamu ga perlu pake Claude buat calendar",
      icon: "clock",
      paragraphs: [
        "Real talk, ga semua interaksi calendar butuh Claude. Buat event simpel kayak 'remind aku meeting jam 3 besok', ya tinggal kamu ketik sendiri di calendar app, 5 detik selesai.",
        "Pake Claude buat: event yang butuh extract info dari chat panjang, multi-attendee scheduling yang butuh cek ketersediaan, bulk event creation dari website atau dokumen, recurring event yang punya banyak detail, reschedule chain (geser meeting A bikin meeting B juga geser).",
        "Buat one-off simple event, tetep manual aja, ga usah over-engineer.",
      ],
      cta: {
        label: "Follow @hollynst di Instagram",
        href: "https://instagram.com/hollynst",
        note: "Mau breakdown workflow Haru dan AI lainnya tiap minggu? Ikutin di sana.",
      },
    },
  ],
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
        "Aku bakal pake CV fiktif 'Julia, freshgrad Marketing dari UI' sebagai contoh di semua prompt di bawah biar kamu bisa liat langsung gimana hasilnya.",
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
        "Contoh hasil di CV Julia.",
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
        "Contoh hasil di CV Julia. Claude bakal balikin sesuatu kayak gini:",
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
        "Contoh hasil di CV Julia (pivot dari Marketing agency ke Tech B2B).",
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
