/* cheatsheet.js — renders the printable "most common phrases" cheat sheet.

   A curated (not exhaustive) set of the everyday survival phrases a traveller or
   new learner reaches for first, grouped by situation. Each phrase gets an audio
   button (via audio.js `data-speak`); the layout is print-optimised so it prints
   cleanly onto a couple of pages. Data lives here so it is easy to hand-edit. */
(function () {
    'use strict';

    var SHEET = [
        { title: 'Greetings', items: [
            ['Bonjour', 'bohn-ZHOOR', 'Hello / Good day'],
            ['Bonsoir', 'bohn-SWAHR', 'Good evening'],
            ['Salut', 'sah-LÜ', 'Hi / Bye (casual)'],
            ['Ça va ?', 'sah VAH', 'How are you? / How’s it going?'],
            ['Ça va bien, merci', 'sah vah bee-EN mair-SEE', "I'm fine, thanks"],
            ['Au revoir', 'oh ruh-VWAHR', 'Goodbye'],
            ['Bonne journée', 'bun zhoor-NAY', 'Have a good day'],
            ['À bientôt', 'ah bee-en-TOH', 'See you soon']
        ]},
        { title: 'Courtesy', items: [
            ['S’il vous plaît', 'seel voo PLAY', 'Please (formal)'],
            ['Merci beaucoup', 'mair-see boh-KOO', 'Thank you very much'],
            ['De rien', 'duh ree-EN', "You're welcome"],
            ['Excusez-moi', 'ex-kü-zay MWAH', 'Excuse me'],
            ['Pardon', 'par-DOHN', 'Sorry / Pardon me'],
            ['Je suis désolé(e)', 'zhuh swee day-zo-LAY', "I'm sorry"],
            ['Oui / Non', 'wee / nohn', 'Yes / No'],
            ['D’accord', 'dah-KOR', 'Okay / Agreed']
        ]},
        { title: 'Survival', items: [
            ['Je ne comprends pas', 'zhuh nuh kohn-prahn PAH', "I don't understand"],
            ['Parlez-vous anglais ?', 'par-lay voo ahn-GLAY', 'Do you speak English?'],
            ['Je ne parle pas bien français', 'zhuh nuh parl pah bee-en frahn-SAY', "I don't speak French well"],
            ['Pouvez-vous répéter ?', 'poo-vay voo ray-pay-TAY', 'Can you repeat that?'],
            ['Plus lentement, s’il vous plaît', 'plü lahnt-MAHN', 'More slowly, please'],
            ['Comment dit-on… en français ?', 'ko-mahn dee-TOHN', 'How do you say… in French?'],
            ['Je suis perdu(e)', 'zhuh swee pair-DÜ', "I'm lost"],
            ['Au secours !', 'oh suh-KOOR', 'Help!']
        ]},
        { title: 'Questions', items: [
            ['Qui ?', 'kee', 'Who?'],
            ['Quoi ? / Qu’est-ce que… ?', 'kwah / kess kuh', 'What?'],
            ['Où ?', 'oo', 'Where?'],
            ['Quand ?', 'kahn', 'When?'],
            ['Pourquoi ?', 'poor-KWAH', 'Why?'],
            ['Comment ?', 'ko-MAHN', 'How?'],
            ['Combien ?', 'kohn-bee-EN', 'How much / how many?'],
            ['Quel âge avez-vous ?', 'kel ahzh ah-vay VOO', 'How old are you?']
        ]},
        { title: 'Meeting people', items: [
            ['Je m’appelle…', 'zhuh mah-PEL', 'My name is…'],
            ['Comment vous appelez-vous ?', 'ko-mahn voo-zah-play VOO', 'What is your name? (formal)'],
            ['Enchanté(e)', 'ahn-shahn-TAY', 'Nice to meet you'],
            ['Je suis américain(e)', 'zhuh swee-zah-may-ree-KAN', "I'm American"],
            ['J’habite à…', 'zhah-BEET ah', 'I live in…'],
            ['Je suis en vacances', 'zhuh swee-zahn vah-KAHNS', "I'm on holiday"],
            ['J’apprends le français', 'zhah-prahn luh frahn-SAY', "I'm learning French"]
        ]},
        { title: 'Eating out', items: [
            ['Une table pour deux, s’il vous plaît', 'ün tabl poor DUH', 'A table for two, please'],
            ['La carte, s’il vous plaît', 'lah KART', 'The menu, please'],
            ['Je voudrais…', 'zhuh voo-DRAY', 'I would like…'],
            ['Je prendrai le menu du jour', 'zhuh prahn-DRAY', "I'll have the set menu"],
            ['Je suis végétarien(ne)', 'zhuh swee vay-zhay-tah-ree-EN', "I'm vegetarian"],
            ['L’addition, s’il vous plaît', 'lah-dee-SYOHN', 'The bill, please'],
            ['C’était délicieux', 'say-tay day-lee-see-UH', 'It was delicious'],
            ['Bon appétit !', 'bohn-ah-pay-TEE', 'Enjoy your meal!']
        ]},
        { title: 'Shopping & money', items: [
            ['Ça coûte combien ?', 'sah koot kohn-bee-EN', 'How much does it cost?'],
            ['C’est trop cher', 'say troh SHAIR', "That's too expensive"],
            ['Je cherche…', 'zhuh SHAIRSH', "I'm looking for…"],
            ['Je regarde, merci', 'zhuh ruh-GARD', "I'm just looking, thanks"],
            ['Est-ce que je peux essayer ?', 'ess kuh zhuh puh ay-say-YAY', 'Can I try it on?'],
            ['Je paie par carte', 'zhuh pay par KART', "I'll pay by card"],
            ['Vous acceptez les cartes ?', 'voo-zak-sep-tay lay KART', 'Do you take cards?']
        ]},
        { title: 'Getting around', items: [
            ['Où est… ?', 'oo AY', 'Where is…?'],
            ['Où sont les toilettes ?', 'oo sohn lay twah-LET', 'Where are the toilets?'],
            ['C’est loin ?', 'say LWAN', 'Is it far?'],
            ['À droite / à gauche', 'ah DRWAHT / ah GOHSH', 'Right / left'],
            ['Tout droit', 'too DRWAH', 'Straight ahead'],
            ['Un billet, s’il vous plaît', 'uhn bee-YAY', 'One ticket, please'],
            ['Le train part à quelle heure ?', 'luh tran par ah kel UHR', 'What time does the train leave?']
        ]},
        { title: 'Emergencies & health', items: [
            ['J’ai besoin d’un médecin', 'zhay buh-zwan duhn mayd-SAN', 'I need a doctor'],
            ['Appelez une ambulance !', 'ah-play ün ahn-bü-LAHNS', 'Call an ambulance!'],
            ['J’ai mal ici', 'zhay mal ee-SEE', 'It hurts here'],
            ['Je suis malade', 'zhuh swee mah-LAHD', "I'm ill"],
            ['Je suis allergique à…', 'zhuh swee-zah-lair-ZHEEK ah', "I'm allergic to…"],
            ['Où est la pharmacie ?', 'oo ay lah far-mah-SEE', 'Where is the pharmacy?'],
            ['112 (🇫🇷) / 911 (🇨🇦)', 'sahn dooz / nuhf sahn ohnz', 'Emergency number']
        ]},
        { title: 'Small talk', items: [
            ['Il fait beau aujourd’hui', 'eel fay boh oh-zhoor-DWEE', "The weather's nice today"],
            ['Qu’est-ce que vous faites dans la vie ?', 'kess kuh voo FET', 'What do you do for a living?'],
            ['C’est ma première fois ici', 'say mah pruh-mee-air FWAH', "It's my first time here"],
            ['J’adore cette ville', 'zhah-dor set VEEL', 'I love this city'],
            ['Bonne chance !', 'bun SHAHNS', 'Good luck!'],
            ['Félicitations !', 'fay-lee-see-tah-SYOHN', 'Congratulations!'],
            ['Bon voyage !', 'bohn vwah-YAHZH', 'Have a good trip!']
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
