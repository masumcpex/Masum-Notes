/* ==========================================================================
   data.js
   এখানে সাইটের সব কনটেন্ট (বই, জার্নাল, আর্টিকেল, প্রজেক্ট) থাকবে।
   ========================================================================== */

const SITE_DATA = {

  /* ---------------- হিরো সেকশন ---------------- */
  hero: {
    photo: "https://masumcpex.github.io/masumcpex/1000004949.jpg",
    name: "Masum Billah",
    role: "Writer • Learner • Builder",
    tagline: "Learning never stops. Build something meaningful every day.",
    ctaText: "আমার বইসমূহ দেখুন",
    ctaLink: "#library"
  },

  /* ---------------- About সেকশন ---------------- */
  about: {
    title: "আমি মাসুম",
    photo: "https://masumcpex.github.io/masumcpex/masum.png",
    paragraphs: [
      "আমি মাসুম। বই লিখতে ভালোবাসি, অনুভূতি ও জীবনের ছোট ছোট শিক্ষা ছড়িয়ে দিতে পছন্দ করি — একই সাথে স্মার্ট ওয়েব টুলস তৈরি করি।",
      "লেখালেখি আমার কাছে অনুভূতি প্রকাশের একটি অন্যতম মাধ্যম। পাশাপাশি প্রোডাক্টিভ কোডিং সলিউশন তৈরি করে জীবনকে সহজ করতে আমি পছন্দ করি।"
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
      cover: "https://masumcpex.github.io/masumcpex/book1.png",
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
      cover: "https://masumcpex.github.io/masumcpex/eka.jpg",
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
      cover: "https://masumcpex.github.io/masumcpex/book3.png",
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
      cover: "https://masumcpex.github.io/masumcpex/enhlishsmart.png",
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
      cover: "https://masumcpex.github.io/masumcpex/bookb.png",
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
      cover: "https://masumcpex.github.io/masumcpex/cpex.png",
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
      content: "কিছু বিকেল থাকে যা বিশেষ কিছু না করেই মনে থেকে যায়। আজকের বিকেলটাও তেমন — চা, জানালার পাশে বসে থাকা, আর কিছু এলোমেলো চিন্তা।"
    },
    {
      id: "j2",
      title: "একটি শেখার মুহূর্ত",
      category: "শেখার জার্নাল",
      date: "২০২৬-০৭-০৫",
      image: "",
      excerpt: "নতুন কিছু শেখার সময় যে ছোট ছোট ভুল হয়, সেগুলোই আসলে শিক্ষক...",
      content: `
        <p><strong>ভূমিকা:</strong> বাংলাদেশের কতজন মেধাবী শিক্ষার্থী পরীক্ষার খাতায় নয়, জীবনের বাস্তব পরীক্ষায় হেরে যায় — এই সংখ্যাটা ভাবার মতো। কারণ তাদের মেধার অভাব নয়। ভালো রেজাল্ট করা একজন ছেলে হয়তো প্রথম চাকরির ইন্টারভিউতে রিজেক্ট হয়েই ভেঙে পড়ে। সমস্যাটা মেধায় না — চাপ, ব্যর্থতা আর প্রত্যাখ্যান সামলানোর মানসিক প্রস্তুতিতে।</p>
        <p style="background: #FBF7EC; padding: 14px 18px; border-left: 4px solid #C79A3B; font-family: 'Noto Serif Bengali', serif; font-size: 1.05rem; margin: 20px 0;">"জীবনে সফল হতে শুধু মেধা নয়, প্রয়োজন কঠিন সময়েও দাঁড়িয়ে থাকার ক্ষমতা।"</p>
        <h3 style="color: #0E6E5C; margin-top: 25px;">মেন্টাল রেজিলিয়েন্স আসলে কী</h3>
        <p>সহজ ভাষায়, কঠিন পরিস্থিতির পরেও ভেঙে না পড়ে নতুন উদ্যমে এগিয়ে যাওয়ার সক্ষমতাই মেন্টাল রেজিলিয়েন্স। এটি চর্চার মাধ্যমে গড়ে তোলা সম্ভব।</p>
        <h3 style="color: #0E6E5C; margin-top: 25px;">মানসিকভাবে শক্ত মানুষরা যা করে</h3>
        <ul style="padding-left: 20px; line-height: 1.9;">
          <li><strong>ব্যর্থতাকে ফিডব্যাক হিসেবে দেখে</strong> — "আমি শেষ" না ভেবে ভাবে "কী শিখলাম?"</li>
          <li><strong>নিজের সাথে সহানুভূতিশীল ভাষায় কথা বলে</strong> — নিজের সমালোচক না হয়ে নিজের সহযোগী হয়</li>
        </ul>
        <p style="background: #1B2A45; color: #F3ECDA; padding: 18px; border-radius: 8px; font-family: 'Noto Serif Bengali', serif; text-align: center; margin: 24px 0;">"ব্যর্থতা আপনার পরিচয় নয় — ব্যর্থতা শুধু আপনার পরবর্তী উন্নতির দিকনির্দেশনা।"</p>
        <div style="text-align: center; margin-top: 30px; font-weight: bold; color: #7A6F5D; border-top: 1px solid #ECE2C9; padding-top: 15px;">লিখেছেন: মাসুম</div>
      `
    },
    {
      id: "j3",
      title: "জীবনের একটি ছোট শিক্ষা",
      category: "Life Lessons",
      date: "২০২৬-০৬-২৮",
      image: "",
      excerpt: "সবকিছু পরিকল্পনা মতো হয় না — আর সেটাই মেনে নেওয়া শেখা দরকার...",
      content: "সবকিছু পরিকল্পনা মতো হয় না — আর সেটাই মেনে নেওয়া শেখা দরকার।"
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
      readingTime: "১৮ মিনিট",
      image: "education-banner.jpg",
      excerpt: "শিক্ষা একটি দেশের উন্নয়নের ভিত্তি। ভালো ফলাফল ও জিপিএর প্রতিযোগিতার বাইরে বাস্তব জীবনের জন্য কতটা প্রস্তুত হচ্ছে শিক্ষার্থীরা—সেটিই এখন সবচেয়ে বড় আলোচনার বিষয়।",
      content: `
        <p><strong>ভূমিকা:</strong> শিক্ষা একটি দেশের উন্নয়নের ভিত্তি। একটি ভালো শিক্ষাব্যবস্থা শুধু পরীক্ষায় ভালো ফল করার জন্য নয়, বরং দক্ষ, সৃজনশীল, নৈতিক ও সমস্যা সমাধানে সক্ষম মানুষ তৈরির জন্য কাজ করে।</p>
        <h3 style="color: #2c5282; margin-top: 25px;">১. মুখস্থবিদ্যার উপর অতিরিক্ত নির্ভরতা</h3>
        <p>আমাদের শিক্ষাব্যবস্থার অন্যতম বড় সমস্যা হলো মুখস্থনির্ভর শিক্ষা। এর ফলে অনেক শিক্ষার্থী ভালো ফল করলেও বাস্তব জীবনের চ্যালেঞ্জ মোকাবিলার দক্ষতা অর্জন করতে পারে না।</p>
        <p style="background: #e2e8f0; padding: 12px; border-left: 4px solid #046a38; font-weight: bold; margin: 20px 0;">আজকের পৃথিবীতে সবচেয়ে মূল্যবান সম্পদ শুধু ডিগ্রি নয়—দক্ষতা।</p>
        <div style="text-align: center; margin-top: 40px; font-weight: bold; color: #718096; border-top: 1px solid #e2e8f0; padding-top: 15px; font-size: 1.1rem;">প্রতিবেদন তৈরি ও প্রকাশনায়: masumcpex</div>
      `
    },
    {
      id: "a2",
      title: "ইংরেজি শেখার সহজ ও কার্যকর উপায়",
      category: "ইংরেজি শেখা",
      date: "২০২৬-০৭-১৮",
      readingTime: "১৪ মিনিট",
      image: "",
      excerpt: "ব্যাকরণ মুখস্থ করেই বেশিরভাগ মানুষ ইংরেজি শেখা শুরু করেন, আর সেখানেই আটকে যান। প্র্যাকটিক্যাল ও ধারাবাহিক কিছু অভ্যাসই আসলে কথা বলার ইংরেজি তৈরি করে।",
      content: `
        <p><strong>ভূমিকা:</strong> আমাদের বেশিরভাগ মানুষ স্কুল-কলেজে বছরের পর বছর ইংরেজি ব্যাকরণ পড়েও সাবলীলভাবে কথা বলতে পারেন না। কারণ, ইংরেজি একটা ভাষা — আর ভাষা শেখা যায় ব্যবহার করে, শুধু নিয়ম মুখস্থ করে নয়।</p>
        <h3 style="color: #2c5282; margin-top: 25px;">১. আগে শোনা, তারপর বলা</h3>
        <p>ছোটবেলায় আমরা মাতৃভাষা শিখেছি প্রথমে শুনে, তারপর বলে — ব্যাকরণ শেখার আগেই। ইংরেজির ক্ষেত্রেও একই নিয়ম কাজ করে। প্রতিদিন অন্তত ১৫-২০ মিনিট ইংরেজি শোনার অভ্যাস করুন — মুভি, পডকাস্ট বা ছোট ভিডিও, যেটা ভালো লাগে।</p>
        <h3 style="color: #2c5282; margin-top: 25px;">২. ভুল বলার ভয় ঝেড়ে ফেলুন</h3>
        <p>ভুল বলা ইংরেজি শেখার একটা স্বাভাবিক ধাপ, ব্যর্থতা নয়। যারা দ্রুত শেখেন, তারা ভুল করতে করতেই শেখেন — নিখুঁত বাক্য বলার অপেক্ষায় বসে থাকেন না।</p>
        <p style="background: #e2e8f0; padding: 12px; border-left: 4px solid #046a38; font-weight: bold; margin: 20px 0;">সাবলীলতা আসে অনুশীলন থেকে, নিখুঁততা থেকে নয়।</p>
        <h3 style="color: #2c5282; margin-top: 25px;">৩. প্রতিদিন অল্প করে, কিন্তু নিয়মিত</h3>
        <p>সপ্তাহে একদিন ৩ ঘণ্টা পড়ার চেয়ে প্রতিদিন ২০-৩০ মিনিট চর্চা করা অনেক বেশি কার্যকর। ছোট ছোট নতুন শব্দ শিখুন, সেগুলো দিয়ে বাক্য বানানোর চেষ্টা করুন, আর সুযোগ পেলেই জোরে বলে অনুশীলন করুন।</p>
        <h3 style="color: #2c5282; margin-top: 25px;">৪. নিজের সাথে কথা বলুন</h3>
        <p>সঙ্গী না পেলে আয়নার সামনে দাঁড়িয়ে নিজের দিনটা ইংরেজিতে বর্ণনা করার চেষ্টা করুন। এতে চিন্তাভাবনাকে সরাসরি ইংরেজিতে রূপ দেওয়ার অভ্যাস তৈরি হয়, যা অনুবাদ করে বলার চেয়ে অনেক দ্রুত ও স্বাভাবিক।</p>
        <div style="text-align: center; margin-top: 40px; font-weight: bold; color: #718096; border-top: 1px solid #e2e8f0; padding-top: 15px; font-size: 1.1rem;">লিখেছেন: masumcpex</div>
      `
    },
    {
      id: "a3",
      title: "প্রোডাক্টিভিটি বাড়ানোর ৫টি সহজ অভ্যাস",
      category: "Productivity",
      date: "২০২৬-০৬-৩০",
      readingTime: "১০ মিনিট",
      image: "",
      excerpt: "দৈনন্দিন জীবনে ছোট কিছু পরিবর্তন কীভাবে বড় পার্থক্য তৈরি করতে পারে...",
      content: "<p>দৈনন্দিন জীবনে ছোট কিছু পরিবর্তন কীভাবে বড় পার্থক্য তৈরি করতে পারে, তার একটি তালিকা।</p>"
    },
    {
      id: "a4",
      title: "AI যুগে প্রোগ্রামিং শেখার সঠিক পথ",
      category: "Programming",
      date: "২০২৬-০৭-১৮",
      readingTime: "১৬ মিনিট",
      image: "",
      excerpt: "AI কোড লিখে দিচ্ছে ঠিকই — কিন্তু যে বোঝে না কী লেখা হচ্ছে, সে-ই সবচেয়ে বেশি ঝুঁকিতে থাকে। সম্পূর্ণ রোডম্যাপ ও প্রয়োজনীয় স্কিলসহ।",
      url: "article-ai-programming.html",
      content: ""
    }
  ],

  /* ---------------- Projects ---------------- */
  projects: [
    {
      id: "p0",
      title: "Knowledge Hub",
      icon: "🗂️",
      description: "টিমের দৈনিক হাজিরা ও কাজের ঘণ্টা লিখে রাখার ডিজিটাল খাতা — সদস্য যোগ/বাদ দেওয়া, সামারি ও রেজিস্টারসহ।",
      status: "লাইভ",
      url: "knowledge-hub.html"
    },
    {
      id: "p1",
      title: "Masum Notes",
      icon: "📝",
      description: "ব্যক্তিগত নোট রাখার এবং সাজিয়ে রাখার একটি ছোট্ট টুল।",
      status: "চলছে",
      url: "#"
    },
    {
      id: "p2",
      title: "Work Log",
      icon: "⚡",
      description: "কর্মীদের কাজের দৈনিক ঘণ্টা হিসাব, উপস্থিতি ট্র্যাকিং এবং ফাইল ও লিংক ম্যানেজমেন্টের জন্য তৈরি ডিজিটাল খাতা।",
      status: "লাইভ",
      url: "https://masumcpex.github.io/masumcpex/worklog.html"
    },
    {
      id: "p3",
      title: "Mystery Game",
      icon: "🎮",
      description: "CICADA 3301 ধাঁচের জটিল ধাঁধা ও বুদ্ধিমত্তার খেলা।",
      status: "লাইভ",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeUXTUT5i4McPtrl27yQj3L3BYl_wGWjVKEDpnMpLnD8Sn3YQ/viewform"
    },
    {
      id: "p4",
      title: "English Learning",
      icon: "🗣️",
      description: "স্মার্ট স্পোকেন ইংলিশ শেখার একটি ইন্টারঅ্যাক্টিভ প্ল্যাটফর্ম।",
      status: "পরিকল্পনায়",
      url: "#"
    },
    {
      id: "p5",
      title: "ভবিষ্যতের অ্যাপ",
      icon: "🚀",
      description: "নতুন আইডিয়া নিয়ে কাজ চলছে — শীঘ্রই আসছে।",
      status: "শীঘ্রই",
      url: "#"
    }
  ],

  /* ---------------- Mystery সেকশন ---------------- */
  mystery: {
    title: "⚠️ CICADA 3301 MYSTERY PUZZLE ⚠️",
    notice: "[SYSTEM NOTICE]: একটি অত্যন্ত জটিল ধাঁধা এবং বুদ্ধিমত্তার খেলা আপনার জন্য অপেক্ষা করছে। আপনি কি চ্যালেঞ্জটি নিতে প্রস্তুত?",
    qrImage: "",
    buttonText: "মিশনে প্রবেশ করুন",
    buttonUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeUXTUT5i4McPtrl27yQj3L3BYl_wGWjVKEDpnMpLnD8Sn3YQ/viewform"
  },

  /* ---------------- Contact সেকশন ---------------- */
  contact: {
    phone: "01133192963",
    emails: ["masumcpex@gmail.com", "masumcpex@yahoo.com"],
    socials: [
      { name: "Facebook", url: "https://www.facebook.com/share/1HM1rZJg3a/" },
      { name: "Instagram", url: "https://www.instagram.com/masum.171" },
      { name: "TikTok", url: "https://www.tiktok.com/@masum__171" },
      { name: "Telegram", url: "https://t.me/masum171" },
      { name: "Medium", url: "https://medium.com/@masumcpex" },
      { name: "Tumblr", url: "https://www.tumblr.com/masum171" },
      { name: "Blogger", url: "https://masum171.blogspot.com/" },
      { name: "Gmail", url: "mailto:masumcpex@gmail.com" }
    ]
  }
};
