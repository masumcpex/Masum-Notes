/* ==========================================================================
   data.js
   এখানে সাইটের সব কনটেন্ট (বই, জার্নাল, আর্টিকেল, প্রজেক্ট) থাকবে।
   নতুন কিছু যোগ করতে চাইলে শুধু নিচের অ্যারেতে নতুন { ... } অবজেক্ট বসিয়ে দিন।
   কপি-পেস্ট করে সহজেই নতুন এন্ট্রি বানানো যায়।
   ========================================================================== */

const SITE_DATA = {

  /* ---------------- হিরো সেকশন (হোমপেজের উপরের অংশ) ---------------- */
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

  /* ---------------- Library: প্রতিটি বই একটি কার্ড হবে ---------------- */
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

  /* ---------------- Journal: Medium-এর মতো ব্যক্তিগত লেখা ---------------- */
  journalCategories: ["সব", "ব্যক্তিগত গল্প", "অনুভূতি", "Daily Notes", "শেখার জার্নাল", "Life Lessons", "ভ্রমণ"],

  journal: [
    {
      id: "j1",
      title: "আজকের একটি সাধারণ বিকেল",
      category: "Daily Notes",
      date: "২০২৬-০৭-১০",
      image: "",
      excerpt: "কিছু বিকেল থাকে যা বিশেষ কিছু না করেই মনে থেকে যায়...",
      content: "কিছু বিকেল থাকে যা বিশেষ কিছু না করেই মনে থেকে যায়। আজকের বিকেলটাও তেমন — চা, জানালার পাশে বসে থাকা, আর কিছু এলোমেলো চিন্তা। (এখানে আপনার পুরো লেখা বসিয়ে দিন — data.js ফাইলে এই content ফিল্ডটি এডিট করলেই হবে।)"
    },
    {
      id: "j2",
      title: "একটি শেখার মুহূর্ত",
      category: "শেখার জার্নাল",
      date: "২০২৬-০৭-০৫",
      image: "",
      excerpt: "নতুন কিছু শেখার সময় যে ছোট ছোট ভুল হয়, সেগুলোই আসলে শিক্ষক...",
      content: "নতুন কিছু শেখার সময় যে ছোট ছোট ভুল হয়, সেগুলোই আসলে শিক্ষক। (এই জায়গায় আসল লেখাটি বসান — data.js এর journal অ্যারেতে content ফিল্ড এডিট করুন।)"
    },
    {
      id: "j3",
      title: "জীবনের একটি ছোট শিক্ষা",
      category: "Life Lessons",
      date: "২০২৬-০৬-২৮",
      image: "",
      excerpt: "সবকিছু পরিকল্পনা মতো হয় না — আর সেটাই মেনে নেওয়া শেখা দরকার...",
      content: "সবকিছু পরিকল্পনা মতো হয় না — আর সেটাই মেনে নেওয়া শেখা দরকার। (নমুনা লেখা — আসল কনটেন্ট দিয়ে প্রতিস্থাপন করুন।)"
    }
  ],

  /* ---------------- Articles: ব্লগ পোস্ট ---------------- */
  articleCategories: ["সব", "বাংলাদেশের শিক্ষাব্যবস্থা", "ইংরেজি শেখা", "AI", "Programming", "Construction", "Productivity"],

  articles: [
    {
    id: "a1",
    title: "বাংলাদেশের শিক্ষাব্যবস্থা: মূল সমস্যা কোথায়? সমাধান কী হতে পারে?",
    category: "বাংলাদেশের শিক্ষাব্যবস্থা",
    date: "২০২৬-০৭-১২",
    image: "education-banner.jpg",
    excerpt: "শিক্ষা একটি দেশের উন্নয়নের ভিত্তি। ভালো ফলাফল ও জিপিএর প্রতিযোগিতার বাইরে বাস্তব জীবনের জন্য কতটা প্রস্তুত হচ্ছে শিক্ষার্থীরা—সেটিই এখন সবচেয়ে বড় আলোচনার বিষয়।",
    content: `
        <p><strong>ভূমিকা:</strong> শিক্ষা একটি দেশের উন্নয়নের ভিত্তি। একটি ভালো শিক্ষাব্যবস্থা শুধু পরীক্ষায় ভালো ফল করার জন্য নয়, বরং দক্ষ, সৃজনশীল, নৈতিক ও সমস্যা সমাধানে সক্ষম মানুষ তৈরির জন্য কাজ করে। কিন্তু বাংলাদেশের বর্তমান শিক্ষাব্যবস্থা নিয়ে শিক্ষার্থী, অভিভাবক ও শিক্ষকদের মধ্যে দীর্ঘদিন ধরেই নানা প্রশ্ন রয়েছে। ভালো ফলাফল ও জিপিএর প্রতিযোগিতার বাইরে বাস্তব জীবনের জন্য কতটা প্রস্তুত হচ্ছে শিক্ষার্থীরা—সেটিই এখন সবচেয়ে বড় আলোচনার বিষয়।</p>

        <!-- ১. ব্যানার ইমেজ: ভূমিকা ও মূল সমস্যার মাঝে -->
        <img src="education-banner.jpg" alt="Education Banner" style="width: 100%; max-height: 380px; object-fit: cover; border-radius: 8px; margin: 20px 0; display: block;">

        <h3 style="color: #2c5282; margin-top: 25px;">১. মুখস্থবিদ্যার উপর অতিরিক্ত নির্ভরতা</h3>
        <p>আমাদের শিক্ষাব্যবস্থার অন্যতম বড় সমস্যা হলো মুখস্থনির্ভর শিক্ষা। অধিকাংশ পরীক্ষায় সৃজনশীল চিন্তা, বিশ্লেষণ বা বাস্তব সমস্যা সমাধানের চেয়ে বইয়ের ভাষা মনে রাখা বেশি গুরুত্বপূর্ণ হয়ে দাঁড়ায়। এর ফলে অনেক শিক্ষার্থী ভালো ফল করলেও বাস্তব জীবনের চ্যালেঞ্জ মোকাবিলার দক্ষতা অর্জন করতে পারে না।</p>

        <h3 style="color: #2c5282; margin-top: 25px;">২. দক্ষ শিক্ষক ও মানসম্মত শিক্ষার ঘাটতি</h3>
        <p>দেশের অনেক স্কুল ও কলেজে এখনো পর্যাপ্ত প্রশিক্ষিত ও দক্ষ শিক্ষক নেই। কোথাও নিয়মিত ক্লাস হয় না, কোথাও আবার শিক্ষার্থীরা শ্রেণিকক্ষে পর্যাপ্ত শেখার সুযোগ পায় না। ফলে অনেক শিক্ষার্থী বাধ্য হয়ে কোচিং বা প্রাইভেট টিউশনের উপর নির্ভরশীল হয়ে পড়ে।</p>

        <h3 style="color: #2c5282; margin-top: 25px;">৩. পরীক্ষা ও জিপিএ-কেন্দ্রিক মানসিকতা</h3>
        <p>আজকের শিক্ষাব্যবস্থায় অনেক ক্ষেত্রেই সফলতার একমাত্র মানদণ্ড হিসেবে পরীক্ষার ফলাফলকে ধরা হয়। কিন্তু বাস্তবে একজন মানুষের মূল্য শুধু একটি জিপিএ দিয়ে নির্ধারণ করা যায় না। নেতৃত্ব, যোগাযোগ, সৃজনশীলতা, প্রযুক্তি ব্যবহার, দলগত কাজ ও সমস্যা সমাধানের দক্ষতাও সমান গুরুত্বপূর্ণ।</p>

        <h3 style="color: #2c5282; margin-top: 25px;">৪. বাস্তব জীবনের দক্ষতার অভাব</h3>
        <p>বিশ্ববিদ্যালয় শেষ করার পরও অনেক শিক্ষার্থী—</p>
        <ul style="padding-left: 20px; line-height: 1.8;">
            <li>একটি ভালো CV তৈরি করতে পারে না।</li>
            <li>PowerPoint প্রেজেন্টেশন বানাতে পারে না।</li>
            <li>Excel-এর মৌলিক কাজ জানে না।</li>
            <li>ইমেইল লেখার নিয়ম জানে না।</li>
            <li>ডিজিটাল টুল ব্যবহারে আত্মবিশ্বাসী নয়।</li>
        </ul>
        <p>বর্তমান চাকরির বাজারে এগুলো অত্যন্ত গুরুত্বপূর্ণ দক্ষতা।</p>

        <!-- ২. বাস্তব দক্ষতার অভাব সেকশনের নিচে ইমেজ -->
        <img src="skills-gap.jpg" alt="Skills Gap" style="width: 100%; max-height: 380px; object-fit: cover; border-radius: 8px; margin: 20px 0; display: block;">

        <h3 style="color: #2c5282; margin-top: 25px;">৫. সবার জন্য একই পথ কেন?</h3>
        <p>প্রত্যেক মানুষের আগ্রহ ও প্রতিভা এক নয়। কেউ প্রোগ্রামিং ভালোবাসে, কেউ ভিডিও এডিটিং, কেউ ডিজাইন, কেউ ব্যবসা, কেউ কৃষি, কেউ গবেষণা কিংবা শিল্পকলা। তবুও আমাদের সমাজে এখনো অনেক সময় মনে করা হয়, সবাইকে একই ধরনের শিক্ষা গ্রহণ করে একই ধরনের চাকরির পেছনে ছুটতে হবে। এই মানসিকতা পরিবর্তন হওয়া দরকার।</p>

        <h3 style="color: #2c5282; margin-top: 25px;">৬. প্রযুক্তির সাথে তাল মিলিয়ে শিক্ষা</h3>
        <p>কৃত্রিম বুদ্ধিমত্তা (AI), অটোমেশন ও ডিজিটাল প্রযুক্তি দ্রুত পৃথিবী বদলে দিচ্ছে। আগামী দিনের চাকরির বাজারে শুধু ডিগ্রি নয়, বরং নতুন প্রযুক্তি শেখার ক্ষমতা, দ্রুত শেখার মানসিকতা এবং বাস্তব দক্ষতাই মানুষকে এগিয়ে রাখবে। তাই শিক্ষাক্রমে AI, ডিজিটাল লিটারেসি, কোডিং, তথ্য বিশ্লেষণ, আর্থিক শিক্ষা ও উদ্যোক্তা দক্ষতার মতো বিষয় আরও গুরুত্ব হওয়া উচিত।</p>

        <h3 style="color: #2c5282; margin-top: 25px;">৭. শিক্ষার্থীদের মানসিক চাপ</h3>
        <p>অনেক শিক্ষার্থী ছোটবেলা থেকেই পরীক্ষা, নম্বর ও ভবিষ্যৎ নিয়ে অতিরিক্ত চাপের মধ্যে বেড়ে ওঠে। এই চাপ অনেক সময় আত্মবিশ্বাস কমিয়ে দেয় এবং সৃজনশীল চিন্তাকে বাধাগ্রস্ত করে। শিক্ষা এমন হওয়া উচিত, যেখানে শেখা আনন্দের হবে; ভয়ের নয়।</p>

        <h3 style="color: #1a365d; margin-top: 30px; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px;">সমাধান কী হতে পারে?</h3>
        <p>বাংলাদেশের শিক্ষাব্যবস্থা উন্নত করতে কয়েকটি গুরুত্বপূর্ণ পদক্ষেপ নেওয়া যেতে পারে—</p>
        <ul style="padding-left: 20px; line-height: 1.8;">
            <li>মুখস্থবিদ্যার পরিবর্তে সমস্যা সমাধানভিত্তিক শিক্ষা।</li>
            <li>শিক্ষক প্রশিক্ষণের মান উন্নয়ন।</li>
            <li>প্রযুক্তি ও AI-ভিত্তিক আধুনিক কারিকুলাম।</li>
            <li>যোগাযোগ দক্ষতা, উপস্থাপনা, লেখালেখি ও ডিজিটাল স্কিল বাধ্যতামূলক করা।</li>
            <li>শিক্ষার্থীদের আগ্রহ অনুযায়ী ক্যারিয়ার বেছে নেওয়ার সুযোগ বৃদ্ধি।</li>
            <li>উদ্যোক্তা তৈরির উপর গুরুত্ব দেওয়া।</li>
            <li>পরীক্ষার ফলাফলের পাশাপাশি বাস্তব দক্ষতার মূল্যায়ন।</li>
            <li>মানসিক স্বাস্থ্য ও ক্যারিয়ার কাউন্সেলিং চালু করা।</li>
        </ul>

        <!-- ৩. সমাধান এবং পরামর্শের মাঝে ইমেজ -->
        <img src="education-solution.jpg" alt="Education Solution" style="width: 100%; max-height: 380px; object-fit: cover; border-radius: 8px; margin: 20px 0; display: block;">

        <h3 style="color: #1a365d; margin-top: 30px;">শিক্ষার্থীদের জন্য কিছু পরামর্শ</h3>
        <ul style="padding-left: 20px; line-height: 1.8;">
            <li>শুধু বই পড়লেই হবে না। প্রতিদিন নতুন কিছু শেখার চেষ্টা করুন।</li>
            <li>একটি বাস্তব দক্ষতা শিখুন।</li>
            <li>ইংরেজি ও যোগাযোগ দক্ষতা বাড়ান।</li>
            <li>AI টুল ব্যবহার শিখুন।</li>
            <li>ছোট ছোট প্রজেক্ট তৈরি করুন।</li>
            <li>নিজের কাজ অনলাইনে প্রকাশ করুন。</li>
            <li>ভুল করতে ভয় পাবেন না।</li>
            <li>নিয়মিত অনুশীলন করুন।</li>
        </ul>
        <p style="background: #e2e8f0; padding: 12px; border-left: 4px solid #046a38; font-weight: bold; margin: 20px 0;">আজকের পৃথিবীতে সবচেয়ে মূল্যবান সম্পদ শুধু ডিগ্রি নয়—দক্ষতা।</p>

        <h3 style="color: #1a365d; margin-top: 25px;">উপসংহার</h3>
        <p>বাংলাদেশের শিক্ষাব্যবস্থায় ইতিবাচক দিক যেমন রয়েছে, তেমনি উন্নয়নেরও যথেষ্ট সুযোগ আছে। শিক্ষা যদি শুধু পরীক্ষা ও جিপিএর মধ্যে সীমাবদ্ধ থাকে, তাহলে ভবিষ্যতের বিশ্ব প্রতিযোগিতায় পিছিয়ে পড়ার ঝুঁকি থাকবে।</p>
        <p>একটি আধুনিক শিক্ষাব্যবস্থার লক্ষ্য হওয়া উচিত এমন মানুষ তৈরি করা, যারা শুধু ভালো পরীক্ষার্থী নয়; বরং সৃজনশীল, দক্ষ, নৈতিক, প্রযুক্তি-সচেতন এবং বাস্তব জীবনের সমস্যা সমাধানে সক্ষম নাগরিক। ডিগ্রি গুরুত্বপূর্ণ, কিন্তু দক্ষতা, চিন্তাশক্তি, সততা এবং শেখার আগ্রহ—এসবই একজন মানুষকে সত্যিকার অর্থে সফল করে তোলে।</p>
        
        <!-- একদম নিচে তোমার নাম -->
        <div style="text-align: center; margin-top: 40px; font-weight: bold; color: #718096; border-top: 1px solid #e2e8f0; padding-top: 15px; font-size: 1.1rem;">
            প্রতিবেদন তৈরি ও প্রকাশনায়: masumcpex
        </div>
    `
},
    {
      id: "a2",
      title: "AI যুগে প্রোগ্রামিং শেখার সঠিক পথ",
      category: "Programming",
      date: "২০২৬-০৭-০৮",
      image: "",
      excerpt: "AI টুলস থাকা সত্ত্বেও প্রোগ্রামিং শেখা কেন এখনও গুরুত্বপূর্ণ...",
      content: "AI টুলস থাকা সত্ত্বেও প্রোগ্রামিং শেখা কেন এখনও গুরুত্বপূর্ণ, তা নিয়ে বিস্তারিত। (নমুনা লেখা — আসল কনটেন্ট দিয়ে প্রতিস্থাপন করুন।)"
    },
    {
      id: "a3",
      title: "প্রোডাক্টিভিটি বাড়ানোর ৫টি সহজ অভ্যাস",
      category: "Productivity",
      date: "২০২৬-০৬-৩০",
      image: "",
      excerpt: "দৈনন্দিন জীবনে ছোট কিছু পরিবর্তন কীভাবে বড় পার্থক্য তৈরি করতে পারে...",
      content: "দৈনন্দিন জীবনে ছোট কিছু পরিবর্তন কীভাবে বড় পার্থক্য তৈরি করতে পারে, তার একটি তালিকা। (নমুনা লেখা — আসল কনটেন্ট দিয়ে প্রতিস্থাপন করুন।)"
    }
  ],

  /* ---------------- Projects ---------------- */
  projects: [
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
       
