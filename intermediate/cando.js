/* cando.js — CEFR A1/A2 "can-do" self-assessment checklist. Standalone
   (like glossary.js / readings.js). Renders the CANDO data below, persists
   ticks in localStorage (french-cando), and shows live progress bars.
   Each item links to the lesson(s) that teach it. */
(function () {
    'use strict';

    var CANDO = [
        {
            level: 'B1', title: 'B1 — Threshold (Independent User)',
            groups: [
                {
                    name: 'Handling the whole past', items: [
                        { id: 'b1-pqp', text: 'Place one past event before another with the plus-que-parfait', ln: [[1]] },
                        { id: 'b1-regret', text: 'Express regret about the past with si seulement', ln: [[1], [4]] },
                        { id: 'b1-apres', text: 'Compress a clause with après avoir / après être + participe', ln: [[1]] },
                        { id: 'b1-narrate3', text: 'Narrate a story using three past tenses together', ln: [[1], [13]] }
                    ]
                },
                {
                    name: 'Talking about the future and the hypothetical', items: [
                        { id: 'b1-fant', text: 'Say what will already be finished by a future point', ln: [[2]] },
                        { id: 'b1-quand-fut', text: 'Use the future after quand, dès que and une fois que', ln: [[2]] },
                        { id: 'b1-suppose', text: 'Guess about the present with the futur antérieur', ln: [[2]] },
                        { id: 'b1-cond', text: 'Form and use the conditionnel présent and passé', ln: [[3]] },
                        { id: 'b1-advice', text: 'Give advice with devrais and reproach with aurais dû', ln: [[3]] },
                        { id: 'b1-press-cond', text: 'Recognise the journalistic conditional as unverified news', ln: [[3], [24]] },
                        { id: 'b1-si1', text: 'Build a real condition: si + présent → futur', ln: [[4]] },
                        { id: 'b1-si2', text: 'Build an unreal present: si + imparfait → conditionnel', ln: [[4]] },
                        { id: 'b1-si3', text: 'Build an unreal past: si + plus-que-parfait → conditionnel passé', ln: [[4]] },
                        { id: 'b1-si-rule', text: 'Never put a futur or conditionnel after si meaning "if"', ln: [[4]] }
                    ]
                },
                {
                    name: 'The subjunctive', items: [
                        { id: 'b1-subj-form', text: 'Form the present subjunctive from the ils- stem', ln: [[5]] },
                        { id: 'b1-subj-irr', text: 'Produce the eight irregular subjunctives from memory', ln: [[5]] },
                        { id: 'b1-subj-trig', text: 'Trigger the subjunctive after will, emotion and doubt', ln: [[5]] },
                        { id: 'b1-subj-conj', text: 'Use bien que, pour que, avant que and jusqu’à ce que correctly', ln: [[6]] },
                        { id: 'b1-subj-imp', text: 'Use the subjunctive after impersonal expressions', ln: [[6]] },
                        { id: 'b1-ne-expl', text: 'Recognise the ne explétif and know it is not a negation', ln: [[6], [15]] },
                        { id: 'b1-subj-passe', text: 'Use the subjonctif passé for a completed action', ln: [[7]] },
                        { id: 'b1-mood', text: 'Choose between indicative, subjunctive and infinitive systematically', ln: [[7]] },
                        { id: 'b1-dodge', text: 'Rephrase to avoid the subjunctive when I am unsure of a form', ln: [[7]] }
                    ]
                },
                {
                    name: 'Building complex sentences', items: [
                        { id: 'b1-dont', text: 'Use dont for every verb and expression built with de', ln: [[8]] },
                        { id: 'b1-whose', text: 'Express "whose" across a relative clause', ln: [[8]] },
                        { id: 'b1-lequel', text: 'Choose the right form of lequel, auquel and duquel', ln: [[8]] },
                        { id: 'b1-cequi', text: 'Use ce qui, ce que and ce dont when there is no noun to point back to', ln: [[8]] },
                        { id: 'b1-prep-inf', text: 'Know whether a verb takes à, de or a bare infinitive', ln: [[9]] },
                        { id: 'b1-two-obj', text: 'Use demander à quelqu’un de faire quelque chose', ln: [[9]] }
                    ]
                },
                {
                    name: 'Accuracy that examiners notice', items: [
                        { id: 'b1-pp-avoir', text: 'Agree the past participle with a preceding direct object', ln: [[10]] },
                        { id: 'b1-pp-refl', text: 'Apply the agreement rules to reflexive verbs', ln: [[10]] },
                        { id: 'b1-passive', text: 'Build the passive with être and choose par or de', ln: [[11]] },
                        { id: 'b1-on-passive', text: 'Use on instead of the passive where French prefers it', ln: [[11]] },
                        { id: 'b1-se-faire', text: 'Say something happened to me with se faire + infinitif', ln: [[11], [14]] },
                        { id: 'b1-gerondif', text: 'Use the gérondif for simultaneity, means and condition', ln: [[12]] },
                        { id: 'b1-part-adj', text: 'Tell the invariable participle from the adjectif verbal', ln: [[12]] }
                    ]
                },
                {
                    name: 'Reporting and relaying', items: [
                        { id: 'b1-report', text: 'Turn direct speech into reported speech with the right tense shift', ln: [[13]] },
                        { id: 'b1-report-q', text: 'Report questions with si, ce qui and ce que', ln: [[13]] },
                        { id: 'b1-report-cmd', text: 'Report a command with de + infinitif', ln: [[13]] },
                        { id: 'b1-time-shift', text: 'Shift time markers: hier → la veille, demain → le lendemain', ln: [[13]] }
                    ]
                }
            ]
        },
        {
            level: 'B2', title: 'B2 — Vantage (Upper Intermediate)',
            groups: [
                {
                    name: 'Advanced structures', items: [
                        { id: 'b2-causatif', text: 'Say I had something done with faire + infinitif', ln: [[14]] },
                        { id: 'b2-causatif-pron', text: 'Place pronouns correctly and keep fait invariable', ln: [[14]] },
                        { id: 'b2-laisser', text: 'Handle laisser, voir and entendre + infinitif', ln: [[14]] },
                        { id: 'b2-neque', text: 'Restrict with ne… que and keep the article intact', ln: [[15]] },
                        { id: 'b2-formal-neg', text: 'Use ne… guère and ne… nullement in formal writing', ln: [[15]] },
                        { id: 'b2-neg-inf', text: 'Negate an infinitive with ne pas in front of it', ln: [[15]] }
                    ]
                },
                {
                    name: 'Register and variety', items: [
                        { id: 'b2-register', text: 'Place an utterance on the soutenu / courant / familier ladder', ln: [[16]] },
                        { id: 'b2-register-gram', text: 'Recognise register in the grammar, not just the vocabulary', ln: [[16]] },
                        { id: 'b2-on-nous', text: 'Switch between on and nous according to the situation', ln: [[16]] },
                        { id: 'b2-tutoyer', text: 'Judge tu and vous in genuinely ambiguous situations', ln: [[16]] },
                        { id: 'b2-verlan', text: 'Decode the core verlan words and explain how verlan works', ln: [[17]] },
                        { id: 'b2-argot', text: 'Understand everyday argot without misusing it', ln: [[17]] },
                        { id: 'b2-sms', text: 'Read French text messages and internet abbreviations', ln: [[17]] }
                    ]
                },
                {
                    name: 'Reading authentic French', items: [
                        { id: 'b2-ps', text: 'Recognise the passé simple of regular and irregular verbs', ln: [[18]] },
                        { id: 'b2-pa', text: 'Read the passé antérieur and the imperfect subjunctive', ln: [[18]] },
                        { id: 'b2-headline', text: 'Decode French headline syntax and read a chapeau', ln: [[18], [24]] },
                        { id: 'b2-novel', text: 'Read a French novel or long-form article without stalling', ln: [[18], [20]] }
                    ]
                },
                {
                    name: 'Vocabulary at scale', items: [
                        { id: 'b2-affix', text: 'Decode an unknown word from its prefix and suffix', ln: [[19]] },
                        { id: 'b2-gender', text: 'Predict a noun’s gender from its suffix', ln: [[19]] },
                        { id: 'b2-nominal', text: 'Nominalise a verb for formal writing', ln: [[19], [22]] },
                        { id: 'b2-fauxamis', text: 'Avoid the most damaging faux amis', ln: [[19]] },
                        { id: 'b2-nuance', text: 'Choose correctly between savoir/connaître and amener/apporter', ln: [[19]] },
                        { id: 'b2-idioms', text: 'Use everyday idioms and judge their register', ln: [[20]] },
                        { id: 'b2-proverbs', text: 'Recognise common proverbs from their opening words', ln: [[20]] },
                        { id: 'b2-guess', text: 'Guess an unfamiliar idiom from context rather than its words', ln: [[20]] }
                    ]
                },
                {
                    name: 'Arguing and writing', items: [
                        { id: 'b2-opinion', text: 'State an opinion at a calibrated level of strength', ln: [[21]] },
                        { id: 'b2-plan', text: 'Structure an argument as thèse, antithèse and synthèse', ln: [[21]] },
                        { id: 'b2-concede', text: 'Concede a point and then rebut it', ln: [[21]] },
                        { id: 'b2-connectors', text: 'Carry an argument with logical connectors', ln: [[21]] },
                        { id: 'b2-hedge', text: 'Hedge a claim so I am not committed to more than I mean', ln: [[21]] },
                        { id: 'b2-letter', text: 'Write a formal letter with the right formules d’appel and de politesse', ln: [[22]] },
                        { id: 'b2-email', text: 'Write a professional email in the right register', ln: [[22]] },
                        { id: 'b2-request', text: 'Make a formal request or complaint', ln: [[22]] },
                        { id: 'b2-cv', text: 'Lay out a French CV with the expected sections', ln: [[23]] },
                        { id: 'b2-motivation', text: 'Write a lettre de motivation on the vous–moi–nous plan', ln: [[23]] },
                        { id: 'b2-interview', text: 'Answer the common French job-interview questions', ln: [[23]] }
                    ]
                },
                {
                    name: 'Understanding the real world', items: [
                        { id: 'b2-connected', text: 'Follow fast connected speech and its reductions', ln: [[24]] },
                        { id: 'b2-news', text: 'Extract the essentials from a news bulletin', ln: [[24]] },
                        { id: 'b2-film', text: 'Watch French film and television with a strategy', ln: [[24]] },
                        { id: 'b2-source', text: 'Tell fact from opinion from rumour in a French source', ln: [[24], [3]] },
                        { id: 'b2-qc-sound', text: 'Hear and describe the Québécois sound system', ln: [[25]] },
                        { id: 'b2-qc-lex', text: 'Use everyday Québécois vocabulary correctly', ln: [[25]] },
                        { id: 'b2-qc-register', text: 'Place joual and standard Québécois on a register ladder', ln: [[25]] },
                        { id: 'b2-qc-admin', text: 'Handle administrative Québécois and understand la loi 101', ln: [[25]] },
                        { id: 'b2-both', text: 'Switch comfortably between French and Québécois norms', ln: [[25], [16]] }
                    ]
                },
                {
                    name: 'Proving it', items: [
                        { id: 'b2-delf-know', text: 'Describe the four DELF papers and how they are marked', ln: [[26]] },
                        { id: 'b2-delf-co', text: 'Attack the listening paper by reading the questions first', ln: [[26]] },
                        { id: 'b2-delf-pe', text: 'Plan, write and proofread a 250-word argued text in an hour', ln: [[26], [21]] },
                        { id: 'b2-delf-po', text: 'Deliver a monologue suivi and hold my own in the debate', ln: [[26]] },
                        { id: 'b2-circum', text: 'Circumlocute around a word I do not know', ln: [[26]] }
                    ]
                }
            ]
        }
    ];

    var KEY = 'french-int-cando';

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
