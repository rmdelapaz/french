/* cando.js — CEFR A1/A2 "can-do" self-assessment checklist. Standalone
   (like glossary.js / readings.js). Renders the CANDO data below, persists
   ticks in localStorage (french-cando), and shows live progress bars.
   Each item links to the lesson(s) that teach it. */
(function () {
    'use strict';

    var CANDO = [
        {
            level: 'A1', title: 'A1 — Breakthrough (Beginner)',
            groups: [
                {
                    name: 'Getting started', items: [
                        { id: 'a1-sounds', text: 'Pronounce French vowels, nasals and silent final consonants', ln: [[1]] },
                        { id: 'a1-spell', text: 'Spell my name aloud and ask how a word is written', ln: [[1]] },
                        { id: 'a1-greet', text: 'Greet people and take my leave at any time of day', ln: [[2]] },
                        { id: 'a1-intro', text: 'Introduce myself and ask someone their name', ln: [[2]] },
                        { id: 'a1-tuvous', text: 'Choose between tu and vous appropriately', ln: [[2], [5]] },
                        { id: 'a1-polite', text: 'Use merci, s’il vous plaît, pardon and excusez-moi correctly', ln: [[2]] },
                        { id: 'a1-repeat', text: 'Say I don’t understand and ask someone to repeat or slow down', ln: [[2]] }
                    ]
                },
                {
                    name: 'Building sentences', items: [
                        { id: 'a1-gender', text: 'Give a noun the right article: le/la/les, un/une/des', ln: [[4]] },
                        { id: 'a1-partitive', text: 'Use du, de la and des to talk about an amount of something', ln: [[4]] },
                        { id: 'a1-de-rule', text: 'Change the article to de after a negative or a quantity word', ln: [[4], [12]] },
                        { id: 'a1-etre', text: 'Conjugate être and avoir in the present', ln: [[5]] },
                        { id: 'a1-avoir-exp', text: 'Say I’m hungry, thirsty, cold and how old I am with avoir', ln: [[5]] },
                        { id: 'a1-ilya', text: 'Describe a place with il y a / il n’y a pas de', ln: [[5]] },
                        { id: 'a1-present', text: 'Conjugate regular -er, -ir and -re verbs in the present', ln: [[7]] },
                        { id: 'a1-irregular', text: 'Use vouloir, pouvoir, devoir, prendre and venir', ln: [[7]] },
                        { id: 'a1-twoverbs', text: 'Put two verbs together (je veux manger)', ln: [[7]] },
                        { id: 'a1-adj', text: 'Make adjectives agree and place them correctly', ln: [[9]] },
                        { id: 'a1-neg', text: 'Make any sentence negative with ne … pas', ln: [[10]] },
                        { id: 'a1-quest', text: 'Ask a question three ways: intonation, est-ce que, inversion', ln: [[10]] },
                        { id: 'a1-qwords', text: 'Use qui, où, quand, pourquoi, comment, combien and quel', ln: [[10]] },
                        { id: 'a1-poss', text: 'Say what belongs to whom with mon/ma/mes and de', ln: [[12]] },
                        { id: 'a1-dem', text: 'Point things out with ce, cet, cette and ces', ln: [[12]] }
                    ]
                },
                {
                    name: 'Everyday life', items: [
                        { id: 'a1-count', text: 'Count, tell the time and handle the base-20 numbers', ln: [[6]] },
                        { id: 'a1-dates', text: 'Say the days, months and dates', ln: [[6]] },
                        { id: 'a1-family', text: 'Talk about my family and describe people', ln: [[8]] },
                        { id: 'a1-order', text: 'Order food and drink and ask for the bill', ln: [[11]] },
                        { id: 'a1-shop', text: 'Ask prices, sizes and pay for things', ln: [[13]] },
                        { id: 'a1-home', text: 'Name rooms and furniture and describe my home', ln: [[14]] },
                        { id: 'a1-chores', text: 'Talk about household chores using faire', ln: [[14]] },
                        { id: 'a1-routine', text: 'Describe my daily routine with reflexive verbs', ln: [[15], [14]] },
                        { id: 'a1-commands', text: 'Give simple instructions with the imperative', ln: [[15]] },
                        { id: 'a1-polite-req', text: 'Make a polite request with je voudrais / pourriez-vous', ln: [[15]] },
                        { id: 'a1-dialects', text: 'Recognise basic differences between French and Québécois usage', ln: [[3]] }
                    ]
                }
            ]
        },
        {
            level: 'A2', title: 'A2 — Waystage (Elementary)',
            groups: [
                {
                    name: 'Past, present & future', items: [
                        { id: 'a2-futur-proche', text: 'Talk about plans with aller + infinitive', ln: [[17]] },
                        { id: 'a2-futur-simple', text: 'Form the futur simple, including its irregular stems', ln: [[17]] },
                        { id: 'a2-quand', text: 'Keep both verbs in the future after quand and dès que', ln: [[17]] },
                        { id: 'a2-venir-de', text: 'Say what I have just done with venir de', ln: [[17]] },
                        { id: 'a2-pc', text: 'Form the passé composé with avoir and with être', ln: [[19]] },
                        { id: 'a2-participles', text: 'Use the common irregular past participles', ln: [[19]] },
                        { id: 'a2-agreement', text: 'Make the participle agree after être', ln: [[19]] },
                        { id: 'a2-imparfait', text: 'Form the imparfait and use it for habits and description', ln: [[21]] },
                        { id: 'a2-choice', text: 'Choose between the passé composé and the imparfait', ln: [[21]] },
                        { id: 'a2-story', text: 'Tell a short story in the past', ln: [[21], [19]] }
                    ]
                },
                {
                    name: 'Saying more with less', items: [
                        { id: 'a2-dop', text: 'Replace a direct object with le, la or les', ln: [[23]] },
                        { id: 'a2-iop', text: 'Replace an indirect object with lui or leur', ln: [[23]] },
                        { id: 'a2-yen', text: 'Use y and en correctly', ln: [[23]] },
                        { id: 'a2-relatives', text: 'Join sentences with qui, que and où', ln: [[23]] },
                        { id: 'a2-connectors', text: 'Link ideas with parce que, donc, ensuite and par contre', ln: [[23]] },
                        { id: 'a2-compare', text: 'Compare things with plus/moins/aussi … que and superlatives', ln: [[9]] },
                        { id: 'a2-adverbs', text: 'Form adverbs in -ment and place them correctly', ln: [[9]] }
                    ]
                },
                {
                    name: 'Getting things done', items: [
                        { id: 'a2-directions', text: 'Ask for and give directions', ln: [[16]] },
                        { id: 'a2-transport', text: 'Buy a ticket and use public transport', ln: [[16]] },
                        { id: 'a2-hobbies', text: 'Talk about my hobbies and free time', ln: [[18]] },
                        { id: 'a2-invite', text: 'Suggest an activity and accept or refuse an invitation', ln: [[18]] },
                        { id: 'a2-health', text: 'Describe symptoms and get help at a doctor or pharmacy', ln: [[20]] },
                        { id: 'a2-emergency', text: 'Call for help and give the right emergency number', ln: [[20]] },
                        { id: 'a2-weather', text: 'Describe the weather and the seasons', ln: [[22]] },
                        { id: 'a2-work', text: 'Say what I do for a living and describe my studies', ln: [[24]] },
                        { id: 'a2-tech', text: 'Handle devices, email, wifi and messaging in French', ln: [[25]] },
                        { id: 'a2-feelings', text: 'Express how I feel and talk about relationships', ln: [[26]] },
                        { id: 'a2-travel-fr', text: 'Check into a hotel and get around France as a traveller', ln: [[27]] },
                        { id: 'a2-travel-ca', text: 'Navigate Québec and understand its culture and expressions', ln: [[28]] }
                    ]
                }
            ]
        }
    ];

    var KEY = 'french-cando';

    function lessonHref(n){ var s=(window.FRENCH_VOCAB&&FRENCH_VOCAB.slugs)||{}; return s[n]? s[n]+'.html' : 'french_lesson_'+n+'.html'; }

    function load() {
        try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
    }
    function save(state) {
        try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* private mode */ }
    }
    function esc(s) {
        return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function lessonLink(spec) {
        // spec is [n] for a lesson number, or ['slug','Label'] for a page
        if (typeof spec[0] === 'number') {
            return '<a class="ck-lesson" href="' + lessonHref(spec[0]) + '">L' + spec[0] + '</a>';
        }
        return '<a class="ck-lesson" href="' + esc(spec[0]) + '.html">' + esc(spec[1]) + '</a>';
    }

    function allItems() {
        var out = [];
        CANDO.forEach(function (lvl) { lvl.groups.forEach(function (g) { g.items.forEach(function (it) { out.push(it); }); }); });
        return out;
    }

    document.addEventListener('DOMContentLoaded', function () {
        var root = document.getElementById('cando-root');
        if (!root) return;
        var state = load();

        var html = '';
        CANDO.forEach(function (lvl) {
            html += '<section class="ck-level" data-level="' + esc(lvl.level) + '">';
            html += '<div class="ck-level-head"><h2>' + esc(lvl.title) + '</h2>' +
                '<div class="ck-level-meter"><div class="ck-bar"><span class="ck-bar-fill" data-level="' + esc(lvl.level) + '"></span></div>' +
                '<span class="ck-level-count" data-level="' + esc(lvl.level) + '"></span></div></div>';
            lvl.groups.forEach(function (g) {
                html += '<h3 class="ck-group">' + esc(g.name) + '</h3><ul class="ck-list">';
                g.items.forEach(function (it) {
                    var on = !!state[it.id];
                    html += '<li class="ck-item' + (on ? ' ck-on' : '') + '">' +
                        '<label><input type="checkbox" class="ck-box" data-id="' + esc(it.id) + '"' + (on ? ' checked' : '') + '> ' +
                        '<span class="ck-text">' + esc(it.text) + '</span></label> ' +
                        '<span class="ck-lessons">' + it.ln.map(lessonLink).join(' ') + '</span></li>';
                });
                html += '</ul>';
            });
            html += '</section>';
        });
        root.innerHTML = html;

        function refresh() {
            var items = allItems();
            var total = items.length, done = 0;
            items.forEach(function (it) { if (state[it.id]) done++; });
            var overall = document.getElementById('ck-overall');
            if (overall) overall.textContent = done + ' / ' + total + ' can-do statements (' + Math.round(done / total * 100) + '%)';
            var ofill = document.getElementById('ck-overall-fill');
            if (ofill) ofill.style.width = Math.round(done / total * 100) + '%';

            CANDO.forEach(function (lvl) {
                var lt = 0, ld = 0;
                lvl.groups.forEach(function (g) { g.items.forEach(function (it) { lt++; if (state[it.id]) ld++; }); });
                var pct = Math.round(ld / lt * 100);
                var fill = root.querySelector('.ck-bar-fill[data-level="' + lvl.level + '"]');
                var cnt = root.querySelector('.ck-level-count[data-level="' + lvl.level + '"]');
                if (fill) fill.style.width = pct + '%';
                if (cnt) cnt.textContent = ld + '/' + lt + ' (' + pct + '%)';
            });
        }
        refresh();

        root.addEventListener('change', function (e) {
            var box = e.target.closest('.ck-box');
            if (!box) return;
            var id = box.getAttribute('data-id');
            if (box.checked) state[id] = true; else delete state[id];
            box.closest('.ck-item').classList.toggle('ck-on', box.checked);
            save(state);
            refresh();
        });

        var resetBtn = document.getElementById('ck-reset');
        if (resetBtn) resetBtn.addEventListener('click', function () {
            if (!confirm('Clear all your ticks and start fresh?')) return;
            state = {};
            save(state);
            Array.prototype.forEach.call(root.querySelectorAll('.ck-box'), function (b) { b.checked = false; b.closest('.ck-item').classList.remove('ck-on'); });
            refresh();
        });
    });
})();
