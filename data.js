/* ==========================================================================
   data.js (Updated with English Article)
   ========================================================================== */

const SITE_DATA = {

  /* ---------------- হিরো সেকশন ---------------- */
  hero: {
    photo: "https://masumcpex.github.io/cpex/1000004949.jpg",
    name: "Masum Billah",
    role: "Writer • Learner • Builder",
    tagline: "Learning never stops. Build something meaningful every day.",
    ctaText: "আমার বইসমূহ দেখুন",
    ctaLink: "#library"
  },

  /* ---------------- About সেকশন ---------------- */
  about: {
    title: "আমি মাসুম",
    photo: "https://masumcpex.github.io/cpex/masum.png",
    paragraphs: [
      "আমি মাসুম। বই লিখতে ভালোবাসি, অনুভূতি ও জীবনের ছোট ছোট শিক্ষা ছড়িয়ে দিতে পছন্দ করি — একই সাথে স্মার্ট ওয়েব টুলস তৈরি করি।",
      "লেখালেখি আমার কাছে অনুভূতি প্রকাশের একটি অন্যতম মাধ্যম। পাশাপাশি প্রোডাক্টিভ কোডিং সリューション তৈরি করে জীবনকে সহজ করতে আমি পছন্দ করি।"
    ],
    stats: [
      { number: "৬টি", label: "সংরক্ষিত ই-বুক" },
      { number: "১টি", label: "কাজের ঘণ্টা ট্র্যাকার" },
      { number: "১০০%", label: "স্মার্ট ডিজাইন" }
    ]
  },

  /* ---------------- Library ---------------- */
  books: [
    {
      id: "book1",
      cover: "https://masumcpex.github.io/cpex/book1.png",
      title: "যার জন্যে কাঁদি সে কাঁদার যোগ্য নয়",
      category: "অনুপ্রেরণা ও জীবন",
      description: "হৃদয়ের গল্প ও আত্মোপলব্ধির সাবলীল সমন্বয়।",
      readingTime: "৩৫ মিনিট",
      pdfUrl: "https://drive.google.com/file/d/1ciB-tX7PDKU8ytY1Ja22iqE5_gydopoE/view?usp=drivesdk",
      readMoreUrl: "https://drive.google.com/file/d/1ciB-tX7PDKU8ytY1Ja22iqE5_gydopoE/view?usp=drivesdk",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1ciB-tX7PDKU8ytY1Ja22iqE5_gydopoE",
      locked: false
    },
    {
      id: "book2",
      cover: "https://masumcpex.github.io/cpex/eka.jpg",
      title: "একাকিত্বের নোটবুক",
      category: "ভাবনা ও ডায়েরি",
      description: "নিঃসঙ্গতার প্রহরে ডায়েরির পাতায় আঁকা কিছু অনুভূতি।",
      readingTime: "২৫ মিনিট",
      pdfUrl: "https://drive.google.com/file/d/10q4PqYsGaV97mrpzry8J0h4mw94kcdlF/view?usp=drivesdk",
      readMoreUrl: "https://drive.google.com/file/d/10q4PqYsGaV97mrpzry8J0h4mw94kcdlF/view?usp=drivesdk",
      downloadUrl: "https://drive.google.com/uc?export=download&id=10q4PqYsGaV97mrpzry8J0h4mw94kcdlF",
      locked: false
    },
    {
      id: "book3",
      cover: "https://masumcpex.github.io/cpex/book3.png",
      title: "ইংলিশ শেখার সহজ রোডম্যাপ",
      category: "শিক্ষা ও ক্যারিয়ার",
      description: "সহজ গাইডলাইনে ইংরেজি শেখার সম্পূর্ণ পথ রেখা।",
      readingTime: "৪০ মিনিট",
      pdfUrl: "https://drive.google.com/file/d/1R3BcEq1E3dPNwdVMxgIpnYkqWNMHRncv/view?usp=drivesdk",
      readMoreUrl: "https://drive.google.com/file/d/1R3BcEq1E3dPNwdVMxgIpnYkqWNMHRncv/view?usp=drivesdk",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1R3BcEq1E3dPNwdVMxgIpnYkqWNMHRncv",
      locked: false
    },
    {
      id: "book4",
      cover: "https://masumcpex.github.io/cpex/enhlishsmart.png",
      title: "Smart Spoken English",
      category: "ভাষা ও স্কিল",
      description: "স্মার্টলি ও অনর্গল ইংরেজি বলার প্র্যাক্টিক্যাল বই।",
      readingTime: "৩০ মিনিট",
      pdfUrl: "https://drive.google.com/file/d/1jCStUE4-T6l50Y1jKDI0_tAzqX-f8JZE/view?usp=drivesdk",
      readMoreUrl: "https://drive.google.com/file/d/1jCStUE4-T6l50Y1jKDI0_tAzqX-f8JZE/view?usp=drivesdk",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1jCStUE4-T6l50Y1jKDI0_tAzqX-f8JZE",
      locked: false
    },
    {
      id: "book5",
      cover: "https://masumcpex.github.io/cpex/bookb.png",
      title: "Easy English Mastery",
      category: "ভাষা ও স্কিল",
      description: "সহজ নিয়মে ইংরেজি গ্রামার ও স্পোকেন আয়ত্ত করার গাইড।",
      readingTime: "৩২ মিনিট",
      pdfUrl: "https://drive.google.com/file/d/1BydwswVhKcKPrW7EPScfCyUEs6LXakN-/view?usp=drivesdk",
      readMoreUrl: "https://drive.google.com/file/d/1BydwswVhKcKPrW7EPScfCyUEs6LXakN-/view?usp=drivesdk",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1BydwswVhKcKPrW7EPScfCyUEs6LXakN-",
      locked: false
    },
    {
      id: "book6",
      cover: "https://masumcpex.github.io/cpex/cpex.png",
      title: "চলার পথে আমার গল্প",
      category: "সিক্রেট / পার্সোনাল",
      description: "এই বইটি সবার জন্য উন্মুক্ত নয়। এটি একটি বিশেষ ব্যক্তিগত সংস্করণ।",
      readingTime: "—",
      pdfUrl: "#",
      readMoreUrl: "#",
      downloadUrl: "#",
      locked: true
    }
  ],

  /* ---------------- Journal ---------------- */
  journalCategories: ["সব", "ব্যক্তিগত গল্প", "অনুভূতি", "Daily Notes", "শেখার জার্নাল", "Life Lessons", "ভ্রমণ"],

  journal: [
    {
      id: "j1",
      title: "আজকের একটি সাধারণ বিকেল",
      category: "Daily Notes",
      date: "২০২৬-০৭-১০",
      image: "",
      excerpt: "কিছু বিকেল থাকে যা বিশেষ কিছু না করেই মনে থেকে যায়...",
      content: "কিছু বিকেল থাকে যা বিশেষ কিছু না করেই মনে থেকে যায়। চা, জানালার পাশে বসে থাকা, আর কিছু এলোমেলো চিন্তা।"
    },
    {
      id: "j2",
      title: "একটি শেখার মুহূর্ত",
      category: "শেখার জার্নাল",
      date: "২০২৬-০৭-০৫",
      image: "",
      excerpt: "নতুন কিছু শেখার সময় যে ছোট ছোট ভুল হয়, সেগুলোই আসলে শিক্ষক...",
      content: "সহজ ভাষায়, কঠিন পরিস্থিতির পরেও ভেঙে না পড়ে নতুন উদ্যমে এগিয়ে যাওয়ার সক্ষমতাই মেন্টাল রেজিলিয়েন্স।"
    }
  ],

  /* ---------------- Articles ---------------- */
  articleCategories: ["সব", "বাংলাদেশের শিক্ষাব্যবস্থা", "ইংরেজি শেখা", "AI", "Programming", "Construction", "Productivity"],

  articles: [
    {
      id: "a1",
      title: "বাংলাদেশের শিক্ষাব্যবস্থা: মূল সমস্যা কোথায়? সমাধান কী হতে পারে?",
      category: "বাংলাদেশের শিক্ষাব্যবস্থা",
      date: "২০২৬-০৭-১২",
      image: "education-banner.jpg",
      excerpt: "শিক্ষা একটি দেশের উন্নয়নের ভিত্তি। ভালো ফলাফল ও জিপিএর প্রতিযোগিতার বাইরে বাস্তব জীবনের জন্য কতটা প্রস্তুত হচ্ছে শিক্ষার্থীরা।",
      content: "শিক্ষা একটি দেশের উন্নয়নের ভিত্তি। মুখস্থবিদ্যার পরিবর্তে সমস্যা সমাধানভিত্তিক শিক্ষা এবং বাস্তব দক্ষতা অর্জনই বর্তমান যুগের আসল প্রয়োজন।"
    },
    {
      id: "a2",
      title: "সহজে ও স্মার্টলি ইংরেজি শেখার ৫টি সেরা উপায়",
      category: "ইংরেজি শেখা",
      date: "২০২৬-০৭-১৮",
      image: "",
      excerpt: "ভীতি কাটিয়ে কীভাবে সহজে ইংরেজি বলা এবং লেখার দক্ষতা বাড়ানো যায়, তার প্র্যাক্টিক্যাল টিপস।",
      content: "ইংরেজি শেখার মূল চাবিকাঠি হলো নিয়মিত চর্চা। প্রতিদিন নতুন নতুন শব্দ শেখা এবং বন্ধুবান্ধব বা আয়নার সামনে দাঁড়িয়ে অন্তত ১০ মিনিট কথা বলার মাধ্যমে জড়তা দূর করা সম্ভব।"
    },
    {
      id: "a3",
      title: "AI যুগে প্রোগ্রামিং শেখার সঠিক পথ",
      category: "Programming",
      date: "২০২৬-০৭-১৮",
      image: "",
      excerpt: "AI কোড লিখে দিচ্ছে ঠিকই — কিন্তু যে বোঝে না কী লেখা হচ্ছে, সে-ই সবচেয়ে বেশি ঝুঁকিতে থাকে।",
      content: "প্রোগ্রামিং শেখার জন্য লজিক বিল্ডিং এবং বেসিক ক্লিয়ার করা সবচেয়ে গুরুত্বপূর্ণ।"
    }
  ],

  /* ---------------- Projects ---------------- */
  projects: [
    {
      id: "p0",
      title: "Knowledge Hub",
      icon: "🗂️",
      description: "টিমের দৈনিক হাজিরা ও কাজের ঘণ্টা লিখে রাখার ডিজিটাল খাতা।",
      status: "লাইভ",
      url: "knowledge-hub.html"
    },
    {
      id: "p2",
      title: "Work Log",
      icon: "⚡",
      description: "কর্মীদের কাজের দৈনিক ঘণ্টা হিসাব ও উপস্থিতি ট্র্যাকিং খাতা।",
      status: "লাইভ",
      url: "https://masumcpex.github.io/cpex/worklog.html"
    }
  ],

  /* ---------------- Mystery ---------------- */
  mystery: {
    title: "⚠️ CICADA 3301 MYSTERY PUZZLE ⚠️",
    notice: "[SYSTEM NOTICE]: একটি অত্যন্ত জটিল ধাঁধা আপনার জন্য অপেক্ষা করছে।",
    qrImage: "",
    buttonText: "মিশনে প্রবেশ করুন",
    buttonUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeUXTUT5i4McPtrl27yQj3L3BYl_wGWjVKEDpnMpLnD8Sn3YQ/viewform"
  },

  /* ---------------- Contact ---------------- */
  contact: {
    phone: "01133192963",
    emails: ["masumcpex@gmail.com"],
    socials: [
      { name: "Facebook", url: "https://www.facebook.com/share/1HM1rZJg3a/" },
      { name: "Instagram", url: "https://www.instagram.com/masum.171" },
      { name: "Telegram", url: "https://t.me/masum171" }
    ]
  }
};
