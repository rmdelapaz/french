/* cheatsheet.js — printable C1/C2 MASTERY cheat sheet for the French
   ADVANCED tier. A copy of the beginner engine with a new SHEET data
   block spliced in: where the intermediate sheet collects tense recipes,
   this one collects the agreement rules, liaison rules, connective inventories,
   rhetorical figures, metrics and exam formulas the advanced course teaches.

   A curated (not exhaustive) set of the everyday survival phrases a traveller or
   new learner reaches for first, grouped by situation. Each phrase gets an audio
   button (via audio.js `data-speak`); the layout is print-optimised so it prints
   cleanly onto a couple of pages. Data lives here so it is easy to hand-edit. */
(function () {
    'use strict';

    var SHEET = [
        { title: 'Subjonctif — the C1 choices', items: [
            ['quoi qu’il arrive', 'kwah keel ah-REEV', 'whatever happens — quoi que + subj.'],
            ['quoiqu’il soit tard', 'kwah-keel swah TAR', 'although it is late — quoique = bien que'],
            ['quelles que soient les raisons', 'kel kuh swah lay ray-ZOHN', 'whatever the reasons — quel agrees'],
            ['je cherche quelqu’un qui sache', 'zhuh shairsh kel-kuhn kee SAHSH', 'relative clause: the person is sought, not known'],
            ['le seul qui puisse', 'luh suhl kee PWEES', 'after a superlative or exclusive'],
            ['le fait qu’il ait démissionné', 'luh fay keel ay day-mee-syo-NAY', 'subj. holds the fact at arm’s length'],
            ['ne fût-ce que pour dix minutes', 'nuh füt-suh kuh poor dee mee-NÜT', 'if only for ten minutes'],
            ['fût-il président', 'fü-teel pray-zee-DAHN', 'even were he president — literary inversion']
        ]},
        { title: 'Mise en relief — the clefts', items: [
            ['C’est Marie qui a payé.', 'say mah-ree kee ah pay-YAY', 'highlights the subject'],
            ['C’est l’addition que Marie a payée.', 'say lah-dee-syohn kuh mah-ree ah pay-YAY', 'highlights the object — note the agreement'],
            ['Ce que je veux, c’est du calme.', 'suh kuh zhuh vuh say dü KAHLM', 'pseudo-cleft with ce que'],
            ['Ce dont j’ai besoin, c’est de temps.', 'suh dohn zhay buh-zwan say duh TAHN', 'ce dont — the verb takes de'],
            ['Ce à quoi je pense, c’est à l’avenir.', 'suh ah kwah zhuh pahns say ah lahv-NEER', 'ce à quoi — the verb takes à'],
            ['Moi, je trouve ça bizarre.', 'mwah zhuh troov sah bee-ZAHR', 'dislocation — spoken emphasis'],
            ['Aussi devons-nous agir.', 'oh-see duh-vohn noo ah-ZHEER', 'fronted aussi = therefore, with inversion'],
            ['À peine était-il sorti que…', 'ah pen ay-tay-teel sor-TEE kuh', 'hardly had he left when…']
        ]},
        { title: 'Style nominal — the conversions', items: [
            ['dès la mise en œuvre de', 'day lah meez ahn uhvr duh', 'as soon as it is implemented'],
            ['en raison de l’augmentation de', 'ahn ray-zohn duh loh-gmahn-tah-syohn duh', 'because it has increased'],
            ['malgré sa fatigue', 'mahl-gray sah fah-TEEG', 'although he was tired'],
            ['en cas de baisse des prix', 'ahn kah duh bes day PREE', 'if prices fall'],
            ['après son départ', 'ah-pray sohn day-PAR', 'after he left'],
            ['la prise en compte de', 'lah preez ahn kohnt duh', 'the taking into account of'],
            ['le recours à l’emprunt', 'luh ruh-koor ah lahn-PRUHN', 'resorting to borrowing'],
            ['la remise en question de', 'lah ruh-meez ahn kes-tyohn duh', 'the calling into question of']
        ]},
        { title: 'Connecteurs C1 — concede, pivot, close', items: [
            ['or', 'or', 'and yet — the pivot that introduces the awkward fact'],
            ['certes… mais', 'sairt may', 'admittedly… but'],
            ['il n’en demeure pas moins que', 'eel nahn duh-muhr pah mwan kuh', 'the fact nevertheless remains that'],
            ['force est de constater que', 'fors ay duh kohn-stah-tay kuh', 'one is bound to note that'],
            ['d’autant plus que', 'doh-tahn plü kuh', 'all the more so because'],
            ['en revanche', 'ahn ruh-VAHNSH', 'on the other hand'],
            ['quitte à', 'keet ah', 'even if it means'],
            ['faute de quoi', 'foht duh kwah', 'failing which'],
            ['en tout état de cause', 'ahn too tay-tah duh kohz', 'in any event'],
            ['en définitive', 'ahn day-fee-nee-TEEV', 'ultimately — not « au final »']
        ]},
        { title: 'Pronoun order and placement', items: [
            ['me / te / se → le / la / les → lui / leur → y → en', 'lordr day pro-NOHN', 'the fixed column order'],
            ['Je le lui ai dit.', 'zhuh luh lwee ay DEE', 'direct before indirect in the third person'],
            ['Il me l’a rendu.', 'eel muh lah rahn-DÜ', 'first person indirect comes first'],
            ['Je vais le lui donner.', 'zhuh vay luh lwee do-NAY', 'with an infinitive, the pronouns cling to it'],
            ['Donne-le-moi !', 'don luh MWAH', 'positive imperative: after, hyphenated, me → moi'],
            ['Ne me le donne pas !', 'nuh muh luh don PAH', 'negative imperative: normal order returns'],
            ['Je le lui fais lire.', 'zhuh luh lwee fay LEER', 'causative: pronouns attach to faire'],
            ['Elles le resteront.', 'el luh res-tuh-ROHN', 'the neuter le never agrees']
        ]},
        { title: 'Les accords difficiles', items: [
            ['toute la journée', 'toot lah zhoor-NAY', 'determiner — agrees'],
            ['elles sont tout étonnées', 'el sohn too-tay-to-NAY', 'adverb before a vowel — invariable'],
            ['elles sont toutes surprises', 'el sohn toot sür-PREEZ', 'adverb before a consonant — agrees (euphony)'],
            ['une demi-heure', 'ün duh-mee-UHR', 'demi before the noun — invariable, hyphenated'],
            ['deux heures et demie', 'duh zuhr ay duh-MEE', 'demi after — agrees in gender only'],
            ['ci-joint la facture', 'see-zhwan lah fak-TÜR', 'before the noun — invariable'],
            ['quatre-vingts ans', 'kah-truh-van ZAHN', 'vingt takes -s when multiplied and final'],
            ['quatre-vingt-deux', 'kah-truh-van DUH', 'no -s when a numeral follows'],
            ['des yeux bleu clair', 'day zyuh bluh KLAIR', 'compound colour — invariable'],
            ['je les ai fait venir', 'zhuh lay zay fay vuh-NEER', 'fait + infinitive — always invariable'],
            ['je les ai vus partir', 'zhuh lay zay vü par-TEER', 'vu + infinitive — agrees if they act']
        ]},
        { title: 'Liaison and the e caduc', items: [
            ['les amis', 'lay-zah-MEE', 'obligatory — determiner + noun, s sounds z'],
            ['un grand homme', 'uhn grahn-TOM', 'obligatory — d sounds t'],
            ['neuf heures', 'nuh-VUHR', 'obligatory — f sounds v'],
            ['et // un ami', 'ay uhn nah-MEE', 'forbidden after et'],
            ['les // haricots', 'lay ah-ree-KOH', 'forbidden — h aspiré'],
            ['un enfant // adorable', 'uhn nahn-fahn ah-do-RAHBL', 'forbidden after a singular noun'],
            ['samedi', 'sam-DEE', 'e caduc drops — only two consonants meet'],
            ['vendredi', 'vahn-druh-DEE', 'e caduc stays — drd would collide'],
            ['C’est ABsolument faux.', 'say ab-so-lü-mahn FOH', 'accent d’insistance — stress the first syllable']
        ]},
        { title: 'Le français parlé', items: [
            ['chuis fatigué', 'shwee fah-tee-GAY', 'je suis fatigué'],
            ['t’as vu ?', 'tah VÜ', 'tu as vu ?'],
            ['y’a personne', 'yah pair-SON', 'il n’y a personne'],
            ['j’sais pas', 'shay PAH', 'je ne sais pas'],
            ['tu vas où ?', 'tü vah OO', 'question in situ — the normal spoken form'],
            ['du coup', 'dü KOO', 'so, as a result'],
            ['enfin bref', 'ahn-fan BREF', 'anyway, to cut it short'],
            ['c’est compliqué, quoi', 'say kohn-plee-kay KWAH', 'clause-final quoi closes the point'],
            ['ça se peut-tu ?', 'sah suh puh TÜ', '🇨🇦 -tu as a yes/no question particle']
        ]},
        { title: 'Atténuation et politesse', items: [
            ['il me semble que', 'eel muh sahnbl kuh', 'it seems to me that'],
            ['je dirais plutôt que', 'zhuh dee-ray plü-toh kuh', 'I would rather say that'],
            ['sauf erreur de ma part', 'sohf ay-ruhr duh mah PAR', 'unless I am mistaken'],
            ['auriez-vous la gentillesse de', 'oh-ryay voo lah zhahn-tee-yes duh', 'would you be so kind as to'],
            ['je me permets de vous relancer', 'zhuh muh pair-may duh voo ruh-lahn-SAY', 'chasing a reply, politely'],
            ['je crains que ce ne soit difficile', 'zhuh kran kuh suh nuh swah dee-fee-SEEL', 'a refusal that names a constraint'],
            ['ce n’est pas mal', 'suh nay pah MAHL', 'litotes — it is rather good'],
            ['tu aurais pu me prévenir', 'tü oh-ray pü muh pray-vuh-NEER', 'reproach in the conditional past'],
            ['on peut se tutoyer ?', 'ohn puh suh tü-twah-YAY', 'proposing tu — offered by the senior party']
        ]},
        { title: 'La francophonie en un coup d’œil', items: [
            ['septante / nonante', 'sep-tahnt / no-NAHNT', '70 / 90 in 🇧🇪 🇨🇭'],
            ['huitante', 'wee-TAHNT', '80 in Vaud and Valais'],
            ['le souper', 'luh soo-PAY', 'the evening meal in 🇧🇪 🇨🇭 🇨🇦'],
            ['un bourgmestre', 'uhn boorg-MESTR', 'a mayor 🇧🇪'],
            ['une votation', 'ün vo-tah-SYOHN', 'a referendum 🇨🇭'],
            ['s’enjailler', 'sahn-zhah-YAY', 'to have a great time 🇨🇮 (nouchi)'],
            ['une essencerie', 'ün ay-sahns-REE', 'a petrol station 🇸🇳'],
            ['Mwen pa konprann.', 'mwan pah kohn-PRAHN', 'Haitian creole: I do not understand'],
            ['le chiac', 'luh SHYAK', 'Acadian French mixed with English']
        ]},
        { title: 'Orthographe et typographie', items: [
            ['Vraiment ?', 'vray-MAHN', 'thin non-breaking space before ; : ! ?'],
            ['« Bonjour »', 'bohn-ZHOOR', 'French guillemets, with a space inside each'],
            ['50 % · 20 € · 18 °C', 'sanh-kahnt poor-SAHN', 'space before the symbol'],
            ['1 250,75 €', 'meel duh sahn san-KAHNT', 'space as thousands separator, comma as decimal'],
            ['les Français / la langue française', 'lay frahn-SAY', 'noun capitalised, adjective not'],
            ['maitre / maître', 'METR', 'both correct — 1990 reform made the circumflex optional'],
            ['dû, sûr, mûr, jeûne', 'DÜ SÜR MÜR ZHUHN', 'circumflex kept — it distinguishes'],
            ['au jour d’aujourd’hui', 'oh zhoor doh-zhoor-DWEE', 'a pléonasme — avoid']
        ]},
        { title: 'Le français académique', items: [
            ['la problématique', 'lah pro-blay-mah-TEEK', 'the tension the essay must resolve'],
            ['thèse / antithèse / synthèse', 'tez ahn-tee-tez san-TEZ', 'the plan dialectique'],
            ['l’accroche', 'lah-KROSH', 'the opening hook of the introduction'],
            ['l’annonce du plan', 'lah-nohns dü PLAHN', 'the fourth move of the introduction'],
            ['un axe de lecture', 'uhn ax duh lek-TÜR', 'an interpretive angle in a commentaire'],
            ['procédé + citation + effet', 'pro-say-day see-tah-syohn ay-FAY', 'the formula for an analytical sentence'],
            ['il convient de souligner que', 'eel kohn-vyan duh soo-lee-nyay kuh', 'it should be stressed that'],
            ['tout porte à croire que', 'too port ah krwahr kuh', 'everything suggests that'],
            ['hors sujet', 'or sü-ZHAY', 'off the question — the classic failure']
        ]},
        { title: 'Juridique et administratif', items: [
            ['par la présente', 'par lah pray-ZAHNT', 'hereby'],
            ['nonobstant', 'no-nob-STAHN', 'notwithstanding — this clause overrides'],
            ['sous réserve de', 'soo ray-ZAIRV duh', 'subject to — this clause is subordinate'],
            ['ledit contrat', 'luh-dee kohn-TRAH', 'the said contract'],
            ['une mise en demeure', 'ün meez ahn duh-MUHR', 'a formal dated demand'],
            ['un préavis de trois mois', 'uhn pray-ah-vee duh trwah MWAH', 'three months’ notice'],
            ['une clause résolutoire', 'ün klohz ray-zo-lü-TWAHR', 'the clause that terminates automatically'],
            ['un justificatif de domicile', 'uhn zhüs-tee-fee-kah-teef duh do-mee-SEEL', 'proof of address'],
            ['Veuillez agréer mes salutations distinguées.', 'vuh-yay ah-gray-ay may sah-lü-tah-SYOHN', 'the fixed formal close']
        ]},
        { title: 'Réunion, compte rendu, négociation', items: [
            ['l’ordre du jour', 'lordr dü ZHOOR', 'the agenda'],
            ['je me permets de vous interrompre', 'zhuh muh pair-may duh voo zan-tay-ROHNPR', 'if I may interrupt'],
            ['je nuancerais', 'zhuh nü-ahns-RAY', 'I would qualify that'],
            ['un relevé de décisions', 'uhn ruh-luh-vay duh day-see-ZYOHN', 'decisions only, with owners and dates'],
            ['contexte / constat / préconisations', 'kohn-text kohn-stah pray-ko-nee-zah-SYOHN', 'the three movements of a rapport'],
            ['une contrepartie', 'ün kohn-truh-par-TEE', 'something in return'],
            ['je dois en référer', 'zhuh dwah zahn ray-fay-RAY', 'I need to refer it upwards'],
            ['dans les meilleurs délais', 'dahn lay may-yuhr day-LAY', 'as soon as possible (formal)']
        ]},
        { title: 'Rhétorique et langue de bois', items: [
            ['une anaphore', 'ün ah-nah-FOR', 'the same opening repeated'],
            ['un chiasme', 'uhn KYAHSM', 'an ABBA reversal'],
            ['une prétérition', 'ün pray-tay-ree-SYOHN', 'I shall not mention…'],
            ['le tricolon', 'luh tree-ko-LOHN', 'three parallel elements, the third longest'],
            ['On nous dit que… Or…', 'ohn noo dee kuh or', 'concede then pivot — the persuasive engine'],
            ['un plan de sauvegarde de l’emploi', 'uhn plahn duh sohv-gard duh lahn-PLWAH', 'euphemism for mass redundancies'],
            ['des éléments de langage', 'day zay-lay-mahn duh lahn-GAHZH', 'official talking points'],
            ['botter en touche', 'bo-tay ahn TOOSH', 'to duck the question'],
            ['le ministre a reconnu que', 'luh mee-neestr ah ruh-ko-nü kuh', 'loaded attribution — implies reluctance']
        ]},
        { title: 'Littérature : les procédés', items: [
            ['la focalisation interne', 'lah fo-kah-lee-zah-syohn an-TAIRN', 'we see through one character only'],
            ['la focalisation externe', 'lah fo-kah-lee-zah-syohn ex-TAIRN', 'only what a camera could record'],
            ['le style indirect libre', 'luh steel an-dee-rekt LEEBR', 'thought reported with no que and no attribution'],
            ['le champ lexical', 'luh shahn lex-ee-KAHL', 'the cluster of words on one theme'],
            ['une métaphore filée', 'ün may-tah-for fee-LAY', 'an extended metaphor'],
            ['une mise en abyme', 'ün meez ahn ah-BEEM', 'the work reflected inside itself'],
            ['un incipit', 'uhn an-see-PEET', 'the opening of a novel'],
            ['naguère / céans / quérir', 'nah-GAIR say-AHN kay-REER', 'archaisms: recently / here / to fetch']
        ]},
        { title: 'Versification', items: [
            ['un alexandrin', 'uhn ah-lex-ahn-DRAN', '12 syllables'],
            ['la césure', 'lah say-ZÜR', 'the break, classically after the sixth syllable'],
            ['un hémistiche', 'uhn ay-mees-TEESH', 'a half-line'],
            ['un enjambement', 'uhn ahn-zhahnb-MAHN', 'the sense runs past the line break'],
            ['un rejet', 'uhn ruh-ZHAY', 'a short spillover onto the next line'],
            ['une rime riche', 'ün reem REESH', 'three or more shared sounds'],
            ['des rimes croisées', 'day reem krwah-ZAY', 'ABAB'],
            ['des rimes embrassées', 'day reem ahn-brah-SAY', 'ABBA'],
            ['une diérèse', 'ün dyay-REZ', 'splitting a vowel group into two syllables']
        ]},
        { title: 'Traduire', items: [
            ['la transposition', 'lah trahns-po-zee-SYOHN', 'change the word class: he swims well → il est bon nageur'],
            ['la modulation', 'lah mo-dü-lah-SYOHN', 'change the viewpoint: it is not hard → c’est facile'],
            ['l’équivalence', 'lay-kee-vah-LAHNS', 'idiom for idiom: il pleut des cordes'],
            ['l’étoffement', 'lay-tof-MAHN', 'adding the words French needs'],
            ['sortir en claquant la porte', 'sor-teer ahn klah-kahn lah PORT', 'to storm out — motion plus manner'],
            ['actuellement', 'ak-tü-el-MAHN', 'currently — NOT actually'],
            ['éventuellement', 'ay-vahn-tü-el-MAHN', 'possibly — NOT eventually'],
            ['le dépaysement', 'luh day-pay-eez-MAHN', 'an untranslatable worth borrowing']
        ]},
        { title: 'DALF C1 & C2', items: [
            ['une synthèse de documents', 'ün san-tez duh do-kü-MAHN', 'no opinion, no copied wording, organised by theme'],
            ['un essai argumenté', 'uhn ay-say ar-gü-mahn-TAY', 'a position defended, about 250 words'],
            ['un exposé', 'uhn ex-po-ZAY', '8–10 minutes from a dossier, then a defence'],
            ['une note éliminatoire', 'ün not ay-lee-mee-nah-TWAHR', 'one weak paper fails you'],
            ['la reformulation', 'lah ruh-for-mü-lah-SYOHN', 'the skill the synthèse actually marks'],
            ['les documents portent sur', 'lay do-kü-mahn port sür', 'the documents deal with'],
            ['tandis que le second insiste sur', 'tahn-dee kuh luh suh-gohn an-seest sür', 'whereas the second stresses'],
            ['je structurerai mon propos en trois temps', 'zhuh strük-tü-ruh-ray mohn pro-poh ahn trwah TAHN', 'announcing the plan aloud'],
            ['vous avez raison sur ce point, mais', 'voo zah-vay ray-zohn sür suh PWAN may', 'conceding under pressure, then qualifying']
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
    if (count) count.textContent = total + ' rules and formulas across ' + SHEET.length + ' categories';

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
