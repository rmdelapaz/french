/* cando.js — CEFR C1/C2 "can-do" self-assessment checklist. Standalone
   (like glossary.js / readings.js). Renders the CANDO data below, persists
   ticks in localStorage (french-adv-cando), and shows live progress bars.
   Each item links to the lesson(s) that teach it. */
(function () {
    'use strict';

    var CANDO = [
        {
            level: 'C1', title: 'C1 — Effective Operational Proficiency',
            groups: [
                {
                    name: 'Mood and complex syntax', items: [
                        { id: 'c1-subj-rel', text: 'Choose the subjunctive in a relative clause to mark a sought or doubted antecedent', ln: [[1]] },
                        { id: 'c1-concess', text: 'Use the whole concessive paradigm: quoi que, quel que, où que, si… que', ln: [[1]] },
                        { id: 'c1-quoique', text: 'Tell quoique from quoi que, and quelque from quel que, every time', ln: [[1], [7]] },
                        { id: 'c1-faitque', text: 'Choose the mood after le fait que according to what you want to assert', ln: [[1], [3]] },
                        { id: 'c1-futil', text: 'Recognise fût-il and dût-il as literary concessive inversions', ln: [[1]] },
                        { id: 'c1-parse', text: 'Parse a 50-word French sentence by locating the main verb first', ln: [[2]] },
                        { id: 'c1-cleft', text: 'Foreground any element with c’est… qui / c’est… que', ln: [[2]] },
                        { id: 'c1-pseudo', text: 'Open a sentence on its own conclusion with ce que… c’est / ce dont…', ln: [[2], [3]] },
                        { id: 'c1-invers', text: 'Invert the subject after aussi, peut-être, sans doute and à peine', ln: [[2]] },
                        { id: 'c1-long', text: 'Build one long controlled sentence instead of four short ones — and know when not to', ln: [[2]] }
                    ]
                },
                {
                    name: 'Style, precision and register in writing', items: [
                        { id: 'c1-nominal', text: 'Convert a verbal clause into a nominal group and back again', ln: [[3]] },
                        { id: 'c1-abstract', text: 'Write about abstractions using constat, enjeu, portée, dispositif', ln: [[3]] },
                        { id: 'c1-enquoi', text: 'Use ce dont and en quoi to make a clause into a subject or object', ln: [[3]] },
                        { id: 'c1-or', text: 'Use or as the pivot that introduces the inconvenient fact', ln: [[4]] },
                        { id: 'c1-concede', text: 'Concede then rebut with certes… mais and il n’en demeure pas moins que', ln: [[4]] },
                        { id: 'c1-reinforce', text: 'Reinforce an argument with d’autant plus que and à plus forte raison', ln: [[4]] },
                        { id: 'c1-reformul', text: 'Reformulate precisely with autrement dit and à savoir', ln: [[4]] },
                        { id: 'c1-regladder', text: 'Match a connective to the register of the text around it', ln: [[4], [9]] },
                        { id: 'c1-collo', text: 'Produce the right light verb for a noun: prendre une décision, pousser un cri', ln: [[6]] },
                        { id: 'c1-adjprep', text: 'Store and use adjectives with their governing preposition', ln: [[6]] },
                        { id: 'c1-intens', text: 'Intensify lexically (un cruel manque de) instead of piling up très', ln: [[6]] },
                        { id: 'c1-dico', text: 'Read a dictionary entry for its construction, not just its translation', ln: [[6]] }
                    ]
                },
                {
                    name: 'Pronouns and agreement', items: [
                        { id: 'c1-order', text: 'Order two object pronouns correctly in every combination', ln: [[5]] },
                        { id: 'c1-place', text: 'Place pronouns with an infinitive, a causative and a negative imperative', ln: [[5]] },
                        { id: 'c1-neutre', text: 'Use the neuter le to refer back to a whole clause', ln: [[5]] },
                        { id: 'c1-celui', text: 'Build precise references with celui de, celle qui, ceux d’entre nous', ln: [[5]] },
                        { id: 'c1-soi', text: 'Use soi after an indefinite subject', ln: [[5]] },
                        { id: 'c1-fossil', text: 'Read fossilised y and en verbs (s’y faire, s’en vouloir) without translating them', ln: [[5]] },
                        { id: 'c1-tout', text: 'Decide whether tout is determiner, pronoun or adverb and agree it accordingly', ln: [[7]] },
                        { id: 'c1-accords', text: 'Handle même, tel, demi, nu, mi and ci-joint correctly', ln: [[7]] },
                        { id: 'c1-num', text: 'Apply the plural rules for vingt, cent and mille', ln: [[7]] },
                        { id: 'c1-couleur', text: 'Leave colour adjectives invariable when they are nouns or compounds', ln: [[7]] },
                        { id: 'c1-faitinf', text: 'Apply the agreement of fait, laissé, vu and dû before an infinitive', ln: [[7]] },
                        { id: 'c1-homoph', text: 'Separate quoique/quoi que, plutôt/plus tôt, quand/quant à, près/prêt', ln: [[7], [15]] }
                    ]
                },
                {
                    name: 'Sound, speech and social use', items: [
                        { id: 'c1-liaison', text: 'Make every obligatory liaison and avoid every forbidden one', ln: [[8]] },
                        { id: 'c1-haspire', text: 'Identify h aspiré words that block liaison and elision', ln: [[8]] },
                        { id: 'c1-ecaduc', text: 'Apply the loi des trois consonnes to the e caduc', ln: [[8], [21]] },
                        { id: 'c1-rythme', text: 'Break a sentence into rhythm groups and stress the final syllable of each', ln: [[8], [19]] },
                        { id: 'c1-insist', text: 'Use the accent d’insistance for emphasis like a native speaker', ln: [[8], [19]] },
                        { id: 'c1-reduc', text: 'Understand fast speech through its reductions: chuis, t’as, y’a, j’sais pas', ln: [[9]] },
                        { id: 'c1-insitu', text: 'Ask questions in situ, with no inversion and no est-ce que', ln: [[9]] },
                        { id: 'c1-disloc', text: 'Use dislocation to introduce and track topics in conversation', ln: [[9], [2]] },
                        { id: 'c1-particles', text: 'Read du coup, quoi, ben, hein, genre and enfin for what they actually do', ln: [[9]] },
                        { id: 'c1-twoway', text: 'Move any sentence between its spoken and written versions, both directions', ln: [[9]] },
                        { id: 'c1-hedge', text: 'Soften a claim with il me semble, je dirais que, on pourrait penser que', ln: [[10]] },
                        { id: 'c1-litote', text: 'Use and correctly interpret la litote (ce n’est pas mal)', ln: [[10]] },
                        { id: 'c1-refuse', text: 'Refuse, complain and reproach without giving offence', ln: [[10]] },
                        { id: 'c1-tuvous', text: 'Negotiate tu and vous mid-relationship, including who offers', ln: [[10]] },
                        { id: 'c1-implicit', text: 'Hear what was implied rather than said, and answer that instead', ln: [[10], [13]] }
                    ]
                },
                {
                    name: 'The francophone world, and its humour', items: [
                        { id: 'c1-nums-be', text: 'Use and understand septante, huitante and nonante', ln: [[11]] },
                        { id: 'c1-repas', text: 'Navigate the déjeuner / dîner / souper shift across four countries', ln: [[11]] },
                        { id: 'c1-belghelv', text: 'Recognise the main belgicismes and helvétismes you will actually meet', ln: [[11]] },
                        { id: 'c1-instit', text: 'Read Belgian and Swiss institutional French (bourgmestre, canton, votation)', ln: [[11]] },
                        { id: 'c1-afr', text: 'Recognise the features of West and Central African French', ln: [[12]] },
                        { id: 'c1-nouchi', text: 'Identify nouchi and camfranglais and explain how they are built', ln: [[12]] },
                        { id: 'c1-diglos', text: 'Explain Maghrebi diglossia and the code-switching it produces', ln: [[12]] },
                        { id: 'c1-creole', text: 'Tell a French-based creole from a variety of French, and read a line of it', ln: [[12]] },
                        { id: 'c1-acadie', text: 'Recognise Acadian, chiac and Louisiana French as distinct from Québécois', ln: [[12]] },
                        { id: 'c1-endog', text: 'Discuss endogenous norms and linguistic insecurity using the right terms', ln: [[12], [23]] },
                        { id: 'c1-2degre', text: 'Recognise when a French speaker is au second degré — and answer in kind', ln: [[13]] },
                        { id: 'c1-calem', text: 'Decode a calembour and spot a contrepèterie', ln: [[13]] },
                        { id: 'c1-vanne', text: 'Tease and be teased at the right register, and use self-deprecation', ln: [[13]] },
                        { id: 'c1-satire', text: 'Read French satire for its target as well as its joke', ln: [[13], [19]] }
                    ]
                }
            ]
        },
        {
            level: 'C2', title: 'C2 — Mastery',
            groups: [
                {
                    name: 'The word and the page', items: [
                        { id: 'c2-doublet', text: 'Separate the learned and popular descendants of one Latin root', ln: [[14]] },
                        { id: 'c2-predict', text: 'Predict a learned adjective from an everyday noun (eau → aquatique)', ln: [[14]] },
                        { id: 'c2-layers', text: 'Identify the Frankish, Gaulish, Arabic, Italian and English layers of the lexicon', ln: [[14]] },
                        { id: 'c2-greek', text: 'Decode an unfamiliar technical word from its Greek or Latin components', ln: [[14]] },
                        { id: 'c2-orthhist', text: 'Explain why French spelling records etymology, and read the circumflex as a lost s', ln: [[14], [15]] },
                        { id: 'c2-fauxsav', text: 'Avoid the learned false friends: actuellement, éventuellement, contrôler, réaliser', ln: [[14], [22]] },
                        { id: 'c2-1990', text: 'Apply the 1990 rectifications consistently, and know where they are not used', ln: [[15]] },
                        { id: 'c2-typo', text: 'Use the French typographic code: « », espaces insécables, dashes, ellipses', ln: [[15]] },
                        { id: 'c2-majus', text: 'Capitalise French titles, institutions and nationalities correctly', ln: [[15]] },
                        { id: 'c2-punct', text: 'Choose between comma, semicolon, colon and em dash for logical effect', ln: [[15]] },
                        { id: 'c2-relire', text: 'Proofread your own French in three separate passes', ln: [[15]] }
                    ]
                },
                {
                    name: 'Academic, legal and professional French', items: [
                        { id: 'c2-problem', text: 'Turn a topic into a problématique rather than a summary', ln: [[16]] },
                        { id: 'c2-plan', text: 'Build a plan dialectique, thématique or analytique and justify the choice', ln: [[16]] },
                        { id: 'c2-intro', text: 'Write the four-move French introduction and a conclusion that opens outward', ln: [[16]] },
                        { id: 'c2-transit', text: 'Write transitions that close one section and open the next', ln: [[16], [4]] },
                        { id: 'c2-comment', text: 'Organise a commentaire composé by axes de lecture, not line by line', ln: [[16], [20]] },
                        { id: 'c2-acadreg', text: 'Hedge, attribute and cite to French academic conventions', ln: [[16]] },
                        { id: 'c2-bail', text: 'Read a bail, a contract and a set of CGV for the clauses that bind you', ln: [[17]] },
                        { id: 'c2-legalconn', text: 'Decode nonobstant, ledit, aux fins de and sous réserve de correctly', ln: [[17]] },
                        { id: 'c2-demeure', text: 'Write a mise en demeure and a recours gracieux in the expected form', ln: [[17]] },
                        { id: 'c2-dossier', text: 'Assemble the standard French administrative dossier and name each piece', ln: [[17]] },
                        { id: 'c2-jo', text: 'Place a text in the hierarchy loi / décret / arrêté / circulaire', ln: [[17]] },
                        { id: 'c2-reunion', text: 'Chair and contribute to a French-language meeting, including interrupting politely', ln: [[18]] },
                        { id: 'c2-cr', text: 'Write a compte rendu and a relevé de décisions, and keep them distinct', ln: [[18]] },
                        { id: 'c2-rapport', text: 'Structure a rapport: contexte, constat, préconisations actionnables', ln: [[18]] },
                        { id: 'c2-nego', text: 'Negotiate in French: open, concede, trade a contrepartie and close', ln: [[18]] },
                        { id: 'c2-hierarch', text: 'Read the hierarchy of a French or Québécois workplace from its language', ln: [[18], [10]] }
                    ]
                },
                {
                    name: 'Rhetoric, literature and verse', items: [
                        { id: 'c2-figures', text: 'Name the figures you meet in speeches and press: anaphore, chiasme, prétérition', ln: [[19]] },
                        { id: 'c2-discours', text: 'Structure a short discours from exorde to péroraison', ln: [[19]] },
                        { id: 'c2-refut', text: 'Use concession-then-refutation as the engine of persuasion', ln: [[19], [4]] },
                        { id: 'c2-bois', text: 'Detect langue de bois and translate it back into plain French', ln: [[19], [3]] },
                        { id: 'c2-slant', text: 'Read a press piece for its slant: attribution verbs, the conditional, omissions', ln: [[19]] },
                        { id: 'c2-focal', text: 'Identify the focalisation of a passage and say what it hides', ln: [[20]] },
                        { id: 'c2-sil', text: 'Recognise style indirect libre and explain its effect', ln: [[20]] },
                        { id: 'c2-archaic', text: 'Read seventeenth- and nineteenth-century French past its archaisms', ln: [[20]] },
                        { id: 'c2-critvocab', text: 'Name a text’s devices using the French critical vocabulary', ln: [[20], [16]] },
                        { id: 'c2-count', text: 'Count the syllables of a French line, e caduc included', ln: [[21]] },
                        { id: 'c2-alex', text: 'Scan an alexandrine and locate its césure and hémistiches', ln: [[21]] },
                        { id: 'c2-rime', text: 'Classify a rhyme by richness and by arrangement', ln: [[21]] },
                        { id: 'c2-enjamb', text: 'Tell an enjambement from a rejet and describe the effect', ln: [[21]] },
                        { id: 'c2-aloud', text: 'Read a poem aloud with metrical rather than prose phrasing', ln: [[21], [8]] }
                    ]
                },
                {
                    name: 'Translation, identity and the exam', items: [
                        { id: 'c2-procedes', text: 'Translate using transposition, modulation and équivalence deliberately', ln: [[22]] },
                        { id: 'c2-restruct', text: 'Restructure an English verbal sentence into French nominal style, and back', ln: [[22], [3]] },
                        { id: 'c2-manner', text: 'Split an English manner verb into motion plus complement', ln: [[22]] },
                        { id: 'c2-untrans', text: 'Decide when to keep a culturally loaded word untranslated', ln: [[22]] },
                        { id: 'c2-constraint', text: 'Work within the constraints of subtitling and of sworn translation', ln: [[22]] },
                        { id: 'c2-academie', text: 'Explain what the Académie française can and cannot actually do', ln: [[23]] },
                        { id: 'c2-toubon', text: 'Summarise the loi Toubon and its practical effects', ln: [[23]] },
                        { id: 'c2-inclusive', text: 'State the écriture inclusive debate fairly, in French, from more than one side', ln: [[23]] },
                        { id: 'c2-femin', text: 'Use feminised job titles consistently with a stated rationale', ln: [[23]] },
                        { id: 'c2-norme', text: 'Choose your own norm and defend it in a discussion', ln: [[23], [11]] },
                        { id: 'c2-synthese', text: 'Produce a synthèse de documents with no opinion and no copied wording', ln: [[24]] },
                        { id: 'c2-essai', text: 'Plan and write an essai argumenté within the time and word count', ln: [[24], [16]] },
                        { id: 'c2-expose', text: 'Structure an exposé from a dossier and survive the follow-up discussion', ln: [[24]] },
                        { id: 'c2-timing', text: 'Budget your time per paper and know where the note éliminatoire lurks', ln: [[24]] },
                        { id: 'c2-maintien', text: 'Keep a weekly maintenance plan that stops the language degrading', ln: [[24]] }
                    ]
                }
            ]
        }
    ];
    var KEY = 'french-adv-cando';

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
