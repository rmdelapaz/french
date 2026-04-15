/* site-nav.js — Injects site header, dark mode toggle, and prev/next nav */
(function () {
  'use strict';

  /* ---- Lesson order ---- */
  const lessons = [
    { file: 'french_alphabet_pronunciation.html',       title: 'Alphabet & Pronunciation' },
    { file: 'french_france_vs_canada.html',              title: 'France vs Canadian French' },
    { file: 'french_greetings_essentials.html',          title: 'Greetings & Essentials' },
    { file: 'french_numbers_time_dates.html',            title: 'Numbers, Time & Dates' },
    { file: 'french_family_descriptions.html',           title: 'Family & Descriptions' },
    { file: 'french_food_dining.html',                   title: 'Food & Dining' },
    { file: 'french_shopping_money.html',                title: 'Shopping & Money' },
    { file: 'french_directions_transportation.html',     title: 'Directions & Transport' },
    { file: 'french_health_body.html',                   title: 'Health & Body' },
    { file: 'french_hobbies_daily_life.html',            title: 'Hobbies & Daily Life' },
    { file: 'french_work_education.html',                title: 'Work & Education' },
    { file: 'french_technology_communication.html',      title: 'Technology & Communication' },
    { file: 'french_weather_seasons.html',               title: 'Weather & Seasons' },
    { file: 'french_emotions_relationships.html',        title: 'Emotions & Relationships' },
    { file: 'french_travel_culture_france.html',         title: 'Travel & Culture: France' },
    { file: 'french_travel_culture_canada.html',         title: 'Travel & Culture: Québec' },
  ];

  /* ---- Dark mode ---- */
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon();
  }

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }

  function updateIcon() {
    const el = document.querySelector('.theme-icon');
    if (el) el.textContent = currentTheme() === 'dark' ? '☀️' : '🌙';
  }

  /* ---- Build header ---- */
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <a href="/index.html" class="site-brand">🇫🇷 French Course</a>
    <nav class="nav-links">
      <a href="/index.html">Lessons</a>
      <a href="https://rays-home.netlify.app/" target="_blank" rel="noopener">Ray's House of Fun</a>
      <a href="https://rays-home.netlify.app/contact" target="_blank" rel="noopener">Contact</a>
      <label class="theme-toggle-label">
        <span class="theme-icon icon">${currentTheme() === 'dark' ? '☀️' : '🌙'}</span>
        <button class="theme-toggle" aria-label="Toggle dark mode"></button>
      </label>
    </nav>
  `;
  document.body.prepend(header);

  header.querySelector('.theme-toggle').addEventListener('click', toggleTheme);

  /* ---- Wrap existing content ---- */
  const isIndex = /index\.html$/i.test(location.pathname) || location.pathname.endsWith('/');
  if (!isIndex) {
    const existing = Array.from(document.body.children).filter(el => el !== header);
    const wrap = document.createElement('div');
    wrap.className = 'content-wrap';
    existing.forEach(el => wrap.appendChild(el));
    document.body.appendChild(wrap);
  }

  /* ---- Prev / Next nav (lesson pages only) ---- */
  if (!isIndex) {
    const currentFile = location.pathname.split('/').pop();
    const idx = lessons.findIndex(l => l.file === currentFile);

    if (idx !== -1) {
      const nav = document.createElement('nav');
      nav.className = 'lesson-nav';

      if (idx > 0) {
        const prev = lessons[idx - 1];
        nav.innerHTML += `<a href="${prev.file}">← ${prev.title}</a>`;
      } else {
        nav.innerHTML += '<span class="spacer"></span>';
      }

      nav.innerHTML += `<a href="/index.html" style="background:var(--card-bg);color:var(--primary-color);border:1px solid var(--border-color);">All Lessons</a>`;

      if (idx < lessons.length - 1) {
        const next = lessons[idx + 1];
        nav.innerHTML += `<a href="${next.file}">${next.title} →</a>`;
      } else {
        nav.innerHTML += '<span class="spacer"></span>';
      }

      const wrap = document.querySelector('.content-wrap') || document.body;
      wrap.appendChild(nav);
    }
  }

  /* ---- Quiz interactivity ---- */
  document.querySelectorAll('.quiz-question').forEach(q => {
    const options = q.querySelectorAll('.quiz-option');
    const feedback = q.querySelector('.quiz-feedback');
    options.forEach(opt => {
      opt.addEventListener('click', () => {
        options.forEach(o => o.classList.remove('selected', 'correct', 'incorrect'));
        opt.classList.add('selected');
        const ok = opt.dataset.correct === 'true';
        opt.classList.add(ok ? 'correct' : 'incorrect');
        if (feedback) {
          feedback.textContent = ok ? ('Correct! ' + (opt.dataset.explanation || '')) : ('Try again. ' + (opt.dataset.hint || ''));
          feedback.className = 'quiz-feedback ' + (ok ? 'correct' : 'incorrect');
        }
      });
    });
  });

  /* ---- Site footer ---- */
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <p>© ${new Date().getFullYear()} <a href="https://rays-home.netlify.app/" target="_blank" rel="noopener">Ray's House of Fun</a> · 
    <a href="https://rays-home.netlify.app/contact" target="_blank" rel="noopener">Contact</a></p>
  `;
  document.body.appendChild(footer);
})();
