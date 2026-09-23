/* cheatsheet.js — printable B1/B2 GRAMMAR cheat sheet for the French
   INTERMEDIATE tier. A copy of the beginner engine with a new SHEET data
   block spliced in: where the beginner sheet collects survival phrases by
   situation, this one collects the tense recipes, trigger lists, agreement
   rules and formulas the intermediate course teaches.

   A curated (not exhaustive) set of the everyday survival phrases a traveller or
   new learner reaches for first, grouped by situation. Each phrase gets an audio
   button (via audio.js `data-speak`); the layout is print-optimised so it prints
   cleanly onto a couple of pages. Data lives here so it is easy to hand-edit. */
(function () {
    'use strict';

    var SHEET = [
        { title: 'Compound tenses — one recipe', items: [
            ['j’ai mangé', 'zhay mahn-ZHAY', 'passé composé — I ate / have eaten'],
            ['j’avais mangé', 'zhah-vay mahn-ZHAY', 'plus-que-parfait — I had eaten'],
            ['j’aurai mangé', 'zho-ray mahn-ZHAY', 'futur antérieur — I will have eaten'],
            ['j’aurais mangé', 'zho-ray mahn-ZHAY', 'conditionnel passé — I would have eaten'],
            ['que j’aie mangé', 'kuh zhay mahn-ZHAY', 'subjonctif passé — that I have eaten'],
            ['je serais parti(e)', 'zhuh suh-ray par-TEE', 'être verb, conditionnel passé']
        ]},
        { title: 'The three si-clauses', items: [
            ['Si j’ai le temps, je viendrai.', 'see zhay luh tahn', 'Type 1 — real: présent → futur'],
            ['Si j’avais le temps, je viendrais.', 'see zhah-vay luh tahn', 'Type 2 — unreal present: imparfait → conditionnel'],
            ['Si j’avais eu le temps, je serais venu.', 'see zhah-vay ü luh tahn', 'Type 3 — unreal past: plus-que-parfait → cond. passé'],
            ['Si seulement j’avais su !', 'see suhl-mahn zhah-vay SÜ', 'If only I had known!'],
            ['au cas où il viendrait', 'oh kah oo eel vee-en-DRAY', 'in case he comes (+ conditionnel)'],
            ['jamais si + futur ou conditionnel', 'zhah-may see', 'never si + futur/conditionnel']
        ]},
        { title: 'Subjunctive — the eight irregulars', items: [
            ['que je sois', 'kuh zhuh SWAH', 'être'],
            ['que j’aie', 'kuh ZHAY', 'avoir'],
            ['que j’aille', 'kuh ZHIGH', 'aller'],
            ['que je fasse', 'kuh zhuh FAHS', 'faire'],
            ['que je puisse', 'kuh zhuh PWEES', 'pouvoir'],
            ['que je sache', 'kuh zhuh SAHSH', 'savoir'],
            ['que je veuille', 'kuh zhuh VUH-yuh', 'vouloir'],
            ['qu’il faille', 'keel FIGH', 'falloir']
        ]},
        { title: 'Subjunctive triggers', items: [
            ['il faut que', 'eel foh KUH', 'it is necessary that'],
            ['je veux que', 'zhuh vuh KUH', 'I want (someone) to'],
            ['je doute que', 'zhuh doot KUH', 'I doubt that'],
            ['bien que / quoique', 'bee-en KUH', 'although'],
            ['pour que / afin que', 'poor KUH', 'so that'],
            ['avant que', 'ah-vahn KUH', 'before'],
            ['jusqu’à ce que', 'zhüs-kah suh KUH', 'until'],
            ['à moins que', 'ah man KUH', 'unless'],
            ['sans que', 'sahn KUH', 'without (someone doing)'],
            ['MAIS : espérer que + indicatif', 'es-pay-ray KUH', 'espérer takes the INDICATIVE'],
            ['MAIS : après que + indicatif', 'ah-pray KUH', 'après que takes the INDICATIVE']
        ]},
        { title: 'Relative pronouns', items: [
            ['qui', 'KEE', 'subject of the clause'],
            ['que', 'KUH', 'direct object'],
            ['dont', 'DOHN', 'replaces de + noun; also "whose"'],
            ['où', 'OO', 'where — and when (le jour où)'],
            ['lequel / laquelle', 'luh-KEL / lah-KEL', 'after a preposition (things)'],
            ['auquel / duquel', 'oh-KEL / dü-KEL', 'à + lequel / de + lequel'],
            ['ce qui / ce que', 'suh KEE / suh KUH', '"what", no noun antecedent'],
            ['ce dont', 'suh DOHN', '"what" with a de-verb']
        ]},
        { title: 'Verb + à / de / rien', items: [
            ['commencer à, apprendre à', 'ko-mahn-say AH', 'à — starting, moving toward'],
            ['réussir à, hésiter à', 'ray-ü-seer AH', 'à — engaging, succeeding'],
            ['décider de, essayer de', 'day-see-day DUH', 'de — deciding, trying'],
            ['oublier de, arrêter de', 'oo-blee-ay DUH', 'de — ceasing, completing'],
            ['vouloir, pouvoir, devoir', 'voo-LWAHR', 'bare infinitive — modals'],
            ['espérer, penser, sembler', 'es-pay-RAY', 'bare infinitive — opinion, intent'],
            ['demander à qqn de faire', 'duh-mahn-day ah kel-kuhn DUH', 'person with à, action with de']
        ]},
        { title: 'Participle agreement', items: [
            ['Je les ai vues.', 'zhuh lay zay VÜ', 'COD pronoun before → agreement'],
            ['La lettre que j’ai écrite', 'lah letr kuh zhay ay-KREET', 'que before → agreement'],
            ['J’ai vu les filles.', 'zhay vü lay FEE', 'object after → NO agreement'],
            ['Je leur ai parlé.', 'zhuh luhr ay par-LAY', 'indirect object → NO agreement'],
            ['J’en ai pris deux.', 'zhahn nay pree DUH', 'en → NO agreement'],
            ['Elle s’est lavée.', 'el say lah-VAY', 'reflexive, se = direct → agreement'],
            ['Elle s’est lavé les mains.', 'el say lah-vay lay MAN', 'object follows → NO agreement'],
            ['Je les ai fait venir.', 'zhuh lay zay fay vuh-NEER', 'causatif — fait ALWAYS invariable']
        ]},
        { title: 'Passive and its alternatives', items: [
            ['Le pont a été construit par…', 'luh pohn ah ay-tay kohn-STRWEE', 'true passive, action agent = par'],
            ['Il est aimé de tous.', 'eel ay tay-may duh TOOS', 'feeling or state = de'],
            ['On m’a volé mon sac.', 'ohn mah vo-lay mohn SAHK', 'on — the everyday choice'],
            ['Ça ne se fait pas.', 'sah nuh suh fay PAH', 'pronominal passive'],
            ['Il s’est fait renverser.', 'eel say fay rahn-vair-SAY', 'se faire + infinitif'],
            ['Je fais réparer la voiture.', 'zhuh fay ray-pah-ray lah vwah-TÜR', 'faire causatif']
        ]},
        { title: 'Negation and restriction', items: [
            ['ne… que', 'nuh KUH', 'only — NOT a negation, article survives'],
            ['ne… guère', 'nuh GAIR', 'hardly (formal)'],
            ['ne… nullement', 'nuh nül-MAHN', 'not at all (formal)'],
            ['ni… ni…', 'nee nee', 'neither… nor…'],
            ['ne… plus jamais rien', 'nuh plü zhah-may ree-EN', 'negatives stack, but never with pas'],
            ['de ne pas partir', 'duh nuh pah par-TEER', 'infinitive: both words in front'],
            ['sans rien dire', 'sahn ree-en DEER', 'sans is already negative'],
            ['moi non plus', 'mwah nohn PLÜ', '"me neither" — never moi aussi']
        ]},
        { title: 'Reported speech — the back-shift', items: [
            ['présent → imparfait', 'pray-ZAHN', '« je suis » → qu’il était'],
            ['passé composé → plus-que-parfait', 'pah-say kohn-po-ZAY', '« j’ai fini » → qu’il avait fini'],
            ['futur → conditionnel présent', 'fü-TÜR', '« je viendrai » → qu’il viendrait'],
            ['impératif → de + infinitif', 'an-pay-rah-TEEF', '« pars ! » → de partir'],
            ['question oui/non → si', 'SEE', '« tu viens ? » → s’il venait'],
            ['qu’est-ce que → ce que', 'suh KUH', '« qu’est-ce que tu fais ? » → ce que je faisais'],
            ['hier → la veille', 'lah VAY', 'demain → le lendemain']
        ]},
        { title: 'Connectors for an argument', items: [
            ['tout d’abord', 'too dah-BOR', 'first of all'],
            ['d’une part… d’autre part', 'dün PAR', 'on the one hand… on the other'],
            ['de plus / en outre', 'duh PLÜ', 'moreover'],
            ['en effet', 'ahn nay-FAY', 'indeed / this is because'],
            ['en revanche / cependant', 'ahn ruh-VAHNSH', 'on the other hand / however'],
            ['néanmoins / toutefois', 'nay-ahn-MWAN', 'nevertheless'],
            ['certes… mais', 'SAIRT may', 'admittedly… but'],
            ['il n’en reste pas moins que', 'eel nahn rest pah mwan KUH', 'the fact remains that'],
            ['par conséquent', 'par kohn-say-KAHN', 'consequently'],
            ['en conclusion', 'ahn kohn-klü-ZYOHN', 'in conclusion']
        ]},
        { title: 'Formal writing formulas', items: [
            ['Madame, Monsieur,', 'mah-dahm muh-SYUH', 'Dear Sir or Madam,'],
            ['Objet :', 'ob-ZHAY', 'Subject:'],
            ['Je me permets de vous contacter', 'zhuh muh pair-may DUH', 'I am writing to you'],
            ['Je vous saurais gré de bien vouloir', 'zhuh voo soh-ray GRAY duh', 'I would be grateful if you would'],
            ['Veuillez trouver ci-joint', 'vuh-yay troo-vay see-ZHWAN', 'Please find attached'],
            ['Dans l’attente de votre réponse', 'dahn lah-tahnt duh votr ray-POHNS', 'Looking forward to your reply'],
            ['Je vous prie d’agréer, …, mes salutations distinguées.', 'zhuh voo pree dah-gray-AY', 'full closing — must repeat the greeting'],
            ['Cordialement,', 'kor-dyahl-MAHN', 'Kind regards, (email)'],
            ['Bien à vous,', 'bee-en ah VOO', 'Yours sincerely (warmer)']
        ]},
        { title: 'Register — the same idea three ways', items: [
            ['Que faites-vous ?', 'kuh fet VOO', 'soutenu — inversion'],
            ['Qu’est-ce que tu fais ?', 'kes kuh tü FAY', 'courant — est-ce que'],
            ['Tu fais quoi ?', 'tü fay KWAH', 'familier — intonation'],
            ['une voiture / une bagnole', 'ün vwah-TÜR', 'car: courant / familier'],
            ['un travail / un boulot', 'uhn trah-VIGH', 'job: courant / familier'],
            ['il convient de', 'eel kohn-vee-en DUH', 'soutenu — it is fitting to'],
            ['on (pour nous)', 'OHN', 'familier/courant for "we"']
        ]},
        { title: 'Spoken reductions to recognise', items: [
            ['chuis', 'SHWEE', 'je suis'],
            ['chais pas', 'shay PAH', 'je ne sais pas'],
            ['y’a / y’avait', 'YAH', 'il y a / il y avait'],
            ['t’as / t’es', 'TAH / TAY', 'tu as / tu es'],
            ['i’faut', 'ee-FOH', 'il faut'],
            ['j’te dis', 'shtuh DEE', 'je te dis'],
            ['C’est pas grave.', 'say pah GRAHV', 'Ce n’est pas grave.']
        ]},
        { title: 'Québécois essentials 🇨🇦', items: [
            ['un char', 'uhn SHAR', 'a car (🇫🇷 une voiture)'],
            ['une job', 'ün JOB', 'a job — feminine in Québec'],
            ['magasiner', 'mah-gah-zee-NAY', 'to shop'],
            ['présentement', 'pray-zahnt-MAHN', 'currently (🇫🇷 actuellement)'],
            ['pantoute', 'pahn-TOOT', 'not at all'],
            ['la fin de semaine', 'lah fan duh suh-MEN', 'the weekend'],
            ['un courriel', 'uhn koo-ree-EL', 'an email (🇫🇷 un mail)'],
            ['c’est de valeur', 'say duh vah-LUHR', 'that’s a shame'],
            ['avoir de la misère à', 'ah-vwahr duh lah mee-ZAIR ah', 'to struggle to'],
            ['tsu, dzire', 'TSÜ, DZEER', 'affrication of t and d before i, u']
        ]},
        { title: 'Idioms worth having', items: [
            ['coûter les yeux de la tête', 'koo-tay lay zyuh duh lah TET', 'to cost an arm and a leg'],
            ['poser un lapin', 'po-zay uhn lah-PAN', 'to stand someone up'],
            ['tomber dans les pommes', 'tohn-bay dahn lay POM', 'to faint'],
            ['en avoir marre', 'ahn nah-vwahr MAR', 'to be fed up'],
            ['avoir le cafard', 'ah-vwahr luh kah-FAR', 'to feel down'],
            ['se creuser la tête', 'suh kruh-zay lah TET', 'to rack one’s brains'],
            ['revenir à ses moutons', 'ruh-vuh-neer ah say moo-TOHN', 'to get back to the point'],
            ['mieux vaut tard que jamais', 'mee-uh voh tar kuh zhah-MAY', 'better late than never']
        ]},
        { title: 'DELF survival', items: [
            ['une épreuve', 'ün ay-PRUHV', 'an exam paper'],
            ['une consigne', 'ün kohn-SEE-nyuh', 'a task instruction'],
            ['le barème', 'luh bah-REM', 'the marking scheme'],
            ['une note éliminatoire', 'ün not ay-lee-mee-nah-TWAHR', 'a disqualifying mark (under 5/25)'],
            ['Pourriez-vous répéter ?', 'poo-ree-ay voo ray-pay-TAY', 'Could you repeat that?'],
            ['Comment dirais-je…', 'ko-mahn dee-RAY-zhuh', 'How shall I put it…'],
            ['c’est une sorte de…', 'say tün sort DUH', 'it’s a kind of… (circumlocution)'],
            ['Ce que je veux dire, c’est que…', 'suh kuh zhuh vuh DEER', 'What I mean is…']
        ]}
    ];

    function esc(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    var root = document.getElementById('cheatsheet-root');
    if (!root) return;

    root.innerHTML = SHEET.map(function (cat) {
        var rows = cat.items.map(function (it) {
            return '<div class="cs-row">' +
                '<div class="cs-tl"><span data-speak="' + esc(it[0]) + '">' + esc(it[0]) + '</span></div>' +
                '<div class="cs-pron">' + esc(it[1]) + '</div>' +
                '<div class="cs-en">' + esc(it[2]) + '</div>' +
            '</div>';
        }).join('');
        return '<section class="cs-card"><h3 class="cs-cat">' + esc(cat.title) +
            '<button type="button" class="cs-cat-practice" data-cat="' + esc(cat.title) + '" ' +
            'aria-label="Practice ' + esc(cat.title) + ' flashcards" title="Practice these">🃏</button>' +
            '</h3>' + rows + '</section>';
    }).join('');

    var total = SHEET.reduce(function (n, c) { return n + c.items.length; }, 0);
    var count = document.getElementById('cs-count');
    if (count) count.textContent = total + ' essential phrases across ' + SHEET.length + ' situations';

    /* ---------- flashcard practice ----------
       Flip through every phrase (front = French + pronunciation, back = English).
       Reuses the .lx-flash modal styles from learn.css. Browse-only: the cheat
       sheet is a quick reference, not tied to the spaced-repetition deck. */
    var DECK = [];
    SHEET.forEach(function (cat) { cat.items.forEach(function (it) { DECK.push({ fr: it[0], pron: it[1], en: it[2], cat: cat.title }); }); });

    function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

    function openFlashcards(deck, title) {
        if (!deck.length) return;
        var i = 0, flipped = false;
        var overlay = document.createElement('div');
        overlay.className = 'lx-modal';
        overlay.innerHTML =
            '<div class="lx-flash" role="dialog" aria-modal="true" aria-label="Flashcard practice">' +
                '<div class="lx-flash-head"><h3>' + esc(title) + '</h3>' +
                    '<button type="button" class="lx-flash-close" aria-label="Close">&times;</button></div>' +
                '<div class="lx-flash-card"><div class="lx-flash-face"></div>' +
                    '<div class="lx-flash-hint">Tap the card to flip</div></div>' +
                '<div class="lx-flash-controls">' +
                    '<button type="button" class="lx-btn lx-flash-prev">← Prev</button>' +
                    '<span class="lx-flash-progress"></span>' +
                    '<button type="button" class="lx-btn lx-flash-next">Next →</button>' +
                '</div>' +
            '</div>';
        document.body.appendChild(overlay);

        var faceEl = overlay.querySelector('.lx-flash-face');
        var progEl = overlay.querySelector('.lx-flash-progress');
        function render() {
            var w = deck[i];
            if (!flipped) {
                faceEl.innerHTML = '<div class="lx-flash-front"><span data-speak="' + esc(w.fr) + '">' + esc(w.fr) + '</span></div>' +
                    (w.pron ? '<div class="lx-flash-pron">' + esc(w.pron) + '</div>' : '') +
                    (w.cat ? '<div class="lx-flash-hint" style="margin-top:.3rem">' + esc(w.cat) + '</div>' : '');
            } else {
                faceEl.innerHTML = '<div class="lx-flash-back">' + esc(w.en) + '</div>';
            }
            progEl.textContent = (i + 1) + ' / ' + deck.length;
        }
        function go(d) { i = (i + d + deck.length) % deck.length; flipped = false; render(); }
        function close() { overlay.remove(); document.removeEventListener('keydown', onKey); }
        overlay.querySelector('.lx-flash-card').addEventListener('click', function () { flipped = !flipped; render(); });
        overlay.querySelector('.lx-flash-next').addEventListener('click', function () { go(1); });
        overlay.querySelector('.lx-flash-prev').addEventListener('click', function () { go(-1); });
        overlay.querySelector('.lx-flash-close').addEventListener('click', close);
        overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
        function onKey(e) {
            if (e.key === 'Escape') close();
            else if (e.key === 'ArrowRight') go(1);
            else if (e.key === 'ArrowLeft') go(-1);
            else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipped = !flipped; render(); }
        }
        document.addEventListener('keydown', onKey);
        render();
    }

    var practiceBtn = document.querySelector('.cs-practice');
    if (practiceBtn) practiceBtn.addEventListener('click', function () {
        openFlashcards(shuffle(DECK), 'Cheat sheet · ' + DECK.length + ' phrases');
    });

    // Per-category practice (delegated on the grid).
    root.addEventListener('click', function (e) {
        var b = e.target.closest('.cs-cat-practice');
        if (!b) return;
        var cat = b.getAttribute('data-cat');
        var deck = DECK.filter(function (w) { return w.cat === cat; });
        if (deck.length) openFlashcards(shuffle(deck), cat + ' · ' + deck.length + ' phrases');
    });
})();
