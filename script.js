/* =========================================================
   MASUM NOTE — script.js (vanilla JS, no dependencies)
   ========================================================= */
(function () {
  "use strict";

  const body = document.body;

  /* ---------------- THEME TOGGLE ---------------- */
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("masumnote-theme");
  if (savedTheme) body.setAttribute("data-theme", savedTheme);

  themeToggle.addEventListener("click", () => {
    const next = body.getAttribute("data-theme") === "light" ? "dark" : "light";
    body.setAttribute("data-theme", next);
    localStorage.setItem("masumnote-theme", next);
  });

  /* ---------------- MOBILE NAV ---------------- */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  navToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
  mainNav.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
    });
  });

  /* ---------------- STICKY HEADER SHRINK ---------------- */
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
    backToTop.classList.toggle("is-visible", window.scrollY > 480);
  }, { passive: true });

  /* ---------------- BACK TO TOP ---------------- */
  const backToTop = document.getElementById("backToTop");
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------------- SCROLL REVEAL ---------------- */
  const revealEls = document.querySelectorAll(".reveal, .entry-card");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  function observeReveal(el) { revealObserver.observe(el); }

  document.querySelectorAll(".reveal").forEach(observeReveal);

  /* ---------------- BUILD CARD GRIDS ---------------- */
  function journalCardHTML(item) {
    return `
      <article class="entry-card" data-cat="${item.cat}">
        <div class="entry-top">
          <span class="entry-num">${item.num}</span>
          <span class="entry-cat">${item.cat}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
        <div class="entry-foot"><span>${item.date}</span><span>পড়ুন →</span></div>
      </article>`;
  }

  function bookCardHTML(item) {
    return `
      <article class="entry-card">
        <div class="book-cover" aria-hidden="true"></div>
        <span class="entry-num">${item.num}</span>
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
      </article>`;
  }

  function noteCardHTML(item) {
    return `
      <article class="entry-card">
        <div class="entry-top">
          <span class="entry-num mono">${item.num}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
      </article>`;
  }

  const journalGrid = document.getElementById("journalGrid");
  const booksGrid = document.getElementById("booksGrid");
  const notesGrid = document.getElementById("notesGrid");

  journalGrid.innerHTML = SITE_DATA.journal.map(journalCardHTML).join("");
  booksGrid.innerHTML = SITE_DATA.books.map(bookCardHTML).join("");
  notesGrid.innerHTML = SITE_DATA.notes.map(noteCardHTML).join("");

  document.querySelectorAll(".entry-card").forEach(observeReveal);

  /* ---------------- JOURNAL FILTER ---------------- */
  const filterRow = document.getElementById("journalFilters");
  filterRow.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-chip");
    if (!btn) return;
    filterRow.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("is-active"));
    btn.classList.add("is-active");
    const filter = btn.dataset.filter;
    journalGrid.querySelectorAll(".entry-card").forEach(card => {
      const show = filter === "all" || card.dataset.cat === filter;
      card.style.display = show ? "" : "none";
    });
  });

  /* ---------------- SMART SEARCH ---------------- */
  const searchToggle = document.getElementById("searchToggle");
  const searchPanel = document.getElementById("searchPanel");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const searchCount = document.getElementById("searchCount");
  const searchClose = document.getElementById("searchClose");

  const searchIndex = [
    ...SITE_DATA.journal.map(i => ({ ...i, type: "জার্নাল" })),
    ...SITE_DATA.books.map(i => ({ ...i, type: "বই" })),
    ...SITE_DATA.notes.map(i => ({ ...i, type: "নোট" }))
  ];

  function openSearch() {
    searchPanel.classList.add("is-open");
    searchToggle.setAttribute("aria-expanded", "true");
    setTimeout(() => searchInput.focus(), 150);
    renderResults("");
  }
  function closeSearch() {
    searchPanel.classList.remove("is-open");
    searchToggle.setAttribute("aria-expanded", "false");
    searchInput.value = "";
  }
  searchToggle.addEventListener("click", () => {
    searchPanel.classList.contains("is-open") ? closeSearch() : openSearch();
  });
  searchClose.addEventListener("click", closeSearch);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openSearch();
    }
  });

  function renderResults(query) {
    const q = query.trim().toLowerCase();
    const matches = q === ""
      ? searchIndex
      : searchIndex.filter(item =>
          item.title.toLowerCase().includes(q) ||
          item.excerpt.toLowerCase().includes(q) ||
          (item.cat && item.cat.toLowerCase().includes(q))
        );

    searchCount.textContent = q === "" ? `${searchIndex.length} এন্ট্রি` : `${matches.length} ফলাফল`;

    if (matches.length === 0) {
      searchResults.innerHTML = `<div class="search-empty">কোনো ফলাফল পাওয়া যায়নি। অন্য শব্দ দিয়ে চেষ্টা করুন।</div>`;
      return;
    }

    searchResults.innerHTML = matches.slice(0, 30).map(item => `
      <div class="search-hit" data-type="${item.type}">
        <span class="search-hit-title">${item.title}</span>
        <span class="search-hit-cat">${item.type}${item.cat ? " · " + item.cat : ""}</span>
      </div>
    `).join("");
  }

  searchInput.addEventListener("input", (e) => renderResults(e.target.value));

  searchResults.addEventListener("click", (e) => {
    const hit = e.target.closest(".search-hit");
    if (!hit) return;
    const type = hit.dataset.type;
    const target = type === "বই" ? "#books" : type === "নোট" ? "#notes" : "#journal";
    closeSearch();
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
  });

})();
  
