/* readings.js — C1/C2 French register readings — press, legal,
   professional, literary, verse and francophone — for the ADVANCED tier. A copy of the beginner engine with a new DIALOGUES
   data block spliced in; each piece recycles the grammar of named lessons. Standalone (like glossary.js /
   cheatsheet.js): renders from the DIALOGUES data below, wires audio via
   data-speak (audio.js adds the 🔊 buttons), a hide-English comprehension
   toggle, an optional "Play all" (only when a TTS voice is installed), and
   check-your-understanding questions with a self-contained answer checker. */
(function () {
    'use strict';

    /* ---- content: each piece is written in a different register ---- */
    var DIALOGUES = [
        {
            id: 'parle-vite',
            title: 'Bon, du coup, on fait quoi ?',
            en_title: 'So, What Are We Doing?',
            kind: 'Oral spontané',
            scene: 'Two friends organising an evening, in the register nobody writes down. Every reduction and every particle of lesson 9 is here.',
            recycles: [9, 10, 13],
            lines: [
                { sp: 'Léa', fr: 'Bon, du coup, on fait quoi ce soir ?', en: 'So, what are we doing tonight?' },
                { sp: 'Samir', fr: 'Ben j’sais pas, moi. T’as une idée ?', en: "Well, I dunno. Have you got an idea?" },
                { sp: 'Léa', fr: 'Y’a un truc au ciné, genre un documentaire sur Abidjan.', en: "There's something on at the cinema, like a documentary about Abidjan." },
                { sp: 'Samir', fr: 'Ah ouais ? Ça commence à quelle heure ?', en: 'Oh yeah? What time does it start?' },
                { sp: 'Léa', fr: 'Vingt heures trente. Enfin, j’crois. Faut vérifier.', en: "Half eight. Well, I think so. We should check." },
                { sp: 'Samir', fr: 'Chuis crevé, hein. Mais bon, pourquoi pas.', en: "I'm shattered, mind. But then, why not." },
                { sp: 'Léa', fr: 'Toi, tu dis toujours ça, et après tu veux plus rentrer.', en: "You always say that, and then afterwards you don't want to go home." },
                { sp: 'Samir', fr: 'C’est pas faux. Bon, allez, j’prends les billets.', en: "Fair point. Right, come on, I'll get the tickets." },
                { sp: 'Léa', fr: 'Voilà. Et on mange un truc avant, du coup.', en: "There you go. And we'll eat something beforehand, then." }
            ],
            questions: [
                { q: 'Which two words is “chuis” a reduction of?', a: 'je suis|je suis fatigué', hint: 'Two words become one syllable.' },
                { q: 'What does the particle “du coup” mark here?', a: 'la conséquence|consequence|conséquence|so|therefore', hint: 'Lesson 9 — it is not filler.' },
                { q: 'Samir says “C’est pas faux.” Is that agreement or disagreement?', a: 'agreement|accord|d’accord|d accord|oui', hint: 'It is a litote — lesson 10.' }
            ]
        },
        {
            id: 'editorial',
            title: 'Éditorial : le télétravail, et après ?',
            en_title: 'Editorial: Remote Work, and Then What?',
            kind: 'Presse — éditorial',
            scene: 'An opinion column. Watch the nominal style, the connectives, and the point where the writer concedes in order to attack.',
            recycles: [3, 4, 19],
            lines: [
                { fr: 'La généralisation du télétravail était présentée, il y a cinq ans, comme une libération.', en: 'The spread of remote work was presented, five years ago, as a liberation.' },
                { fr: 'Certes, la suppression des trajets quotidiens a rendu du temps à des millions de salariés.', en: 'Admittedly, doing away with the daily commute gave time back to millions of employees.' },
                { fr: 'Or les enquêtes publiées cette semaine dessinent un tableau plus ambigu.', en: 'And yet the surveys published this week paint a more ambiguous picture.' },
                { fr: 'La disparition de la frontière entre le domicile et le bureau a produit un allongement moyen de la journée de travail.', en: 'The disappearance of the boundary between home and office has produced an average lengthening of the working day.' },
                { fr: 'Il n’en demeure pas moins que le retour au présentiel intégral ne convaincra personne.', en: 'The fact nevertheless remains that a full return to the office will convince nobody.' },
                { fr: 'Force est de constater que le débat a été confisqué par le vocabulaire des directions.', en: 'One is bound to note that the debate has been appropriated by management vocabulary.' },
                { fr: 'On parle de « flexibilité », de « dispositif hybride », d’« ajustement des modalités ».', en: 'There is talk of "flexibility", of a "hybrid arrangement", of "adjusting the arrangements".' },
                { fr: 'Autrement dit : on ne dit rien, et on le dit très bien.', en: 'In other words: nothing is being said, and it is being said extremely well.' },
                { fr: 'En définitive, la question n’est pas où l’on travaille, mais qui décide.', en: 'Ultimately, the question is not where one works, but who decides.' }
            ],
            questions: [
                { q: 'Which one-syllable connective marks the pivot to the inconvenient fact?', a: 'or', hint: 'Lesson 4 — English has no single word for it.' },
                { q: 'Nominalise this: “la journée de travail s’est allongée” → un … de la journée', a: 'allongement|un allongement', hint: 'Lesson 3 — the -ment suffix.' },
                { q: 'Why are “flexibilité” and “dispositif hybride” in quotation marks?', a: 'distance|langue de bois|ironie|irony|critique|scepticisme', hint: 'Lesson 19 — quotation marks as distance.' }
            ]
        },
        {
            id: 'bail',
            title: 'Extrait de bail — article 7',
            en_title: 'Lease Extract — Article 7',
            kind: 'Juridique',
            scene: 'Seven clauses from a residential lease. Read for what actually binds you, not for elegance.',
            recycles: [17, 3, 1],
            lines: [
                { fr: 'Article 7 — Le preneur s’engage à jouir paisiblement des lieux loués.', en: 'Article 7 — The tenant undertakes to enjoy the leased premises peaceably.' },
                { fr: 'Il est stipulé que toute sous-location est interdite sans l’accord écrit du bailleur.', en: 'It is stipulated that any subletting is forbidden without the lessor’s written consent.' },
                { fr: 'Le loyer est payable d’avance, le premier de chaque mois, à compter du 1er septembre 2026.', en: 'The rent is payable in advance, on the first of each month, with effect from 1 September 2026.' },
                { fr: 'Nonobstant les dispositions de l’article 4, les charges demeurent provisionnelles.', en: 'Notwithstanding the provisions of article 4, the service charges remain provisional.' },
                { fr: 'À défaut de paiement dans un délai de huit jours, la clause résolutoire trouvera à s’appliquer.', en: 'Failing payment within eight days, the termination clause shall apply.' },
                { fr: 'Le congé devra être donné par lettre recommandée avec accusé de réception.', en: 'Notice must be given by registered letter with acknowledgement of receipt.' },
                { fr: 'Le préavis est de trois mois, sous réserve des cas prévus par la loi.', en: 'The notice period is three months, subject to the cases provided for by law.' },
                { fr: 'Le cas échéant, un état des lieux contradictoire sera dressé à la sortie.', en: 'Where applicable, a joint inventory of condition shall be drawn up on departure.' }
            ],
            questions: [
                { q: 'Does “nonobstant l’article 4” mean this clause overrides article 4, or depends on it?', a: 'overrides|override|il prime|prime|malgré|malgre|despite', hint: 'Lesson 17 — compare sous réserve de.' },
                { q: 'How long is the notice period? (in French)', a: 'trois mois|3 mois', hint: 'Look for le préavis.' },
                { q: 'Which clause applies if the rent is not paid within eight days?', a: 'la clause résolutoire|clause résolutoire|la clause resolutoire|clause resolutoire', hint: 'The one that ends the lease automatically.' }
            ]
        },
        {
            id: 'reunion',
            title: 'Compte rendu de la réunion du 14 mars',
            en_title: 'Minutes of the Meeting of 14 March',
            kind: 'Professionnel',
            scene: 'A compte rendu in the impersonal past. Notice that the author never appears in it.',
            recycles: [18, 3, 15],
            lines: [
                { fr: 'Étaient présents : Mme Diallo (direction), M. Berthier (production), Mme Tremblay (finances).', en: 'Present were: Ms Diallo (management), Mr Berthier (production), Ms Tremblay (finance).' },
                { fr: 'L’ordre du jour portait sur le retard du projet Mistral et sur ses conséquences budgétaires.', en: 'The agenda dealt with the delay to the Mistral project and its budgetary consequences.' },
                { fr: 'Il a été rappelé que la livraison initiale était prévue pour le mois de janvier.', en: 'It was recalled that the initial delivery had been scheduled for January.' },
                { fr: 'Mme Tremblay a souligné que tout dépassement supplémentaire serait difficilement justifiable.', en: 'Ms Tremblay stressed that any further overrun would be hard to justify.' },
                { fr: 'M. Berthier a nuancé ce constat en rappelant la défaillance du sous-traitant.', en: 'Mr Berthier qualified this finding by recalling the subcontractor’s failure.' },
                { fr: 'Après discussion, les participants ont convenu de réduire le périmètre de la phase 2.', en: 'After discussion, the participants agreed to reduce the scope of phase 2.' },
                { fr: 'Décision : réduire le périmètre. Responsable : M. Berthier. Échéance : le 15 avril.', en: 'Decision: reduce the scope. Owner: Mr Berthier. Deadline: 15 April.' },
                { fr: 'Un point d’avancement sera organisé dans les meilleurs délais.', en: 'A progress review will be arranged as soon as possible.' }
            ],
            questions: [
                { q: 'Which tense and voice dominate the reporting here?', a: 'passé composé passif|le passif|passif|passive|passé composé|passe compose', hint: 'Il a été rappelé, il a été convenu…' },
                { q: 'The last two lines are not a compte rendu but a … de décisions.', a: 'relevé|releve|relevé de décisions', hint: 'Lesson 18 — decisions only, with owners and dates.' },
                { q: 'Does the author of the minutes appear in the text?', a: 'non|no|jamais|never', hint: 'That is the convention.' }
            ]
        },
        {
            id: 'flaubert',
            title: 'Page de roman : le retour',
            en_title: 'A Page of a Novel: The Return',
            kind: 'Littéraire',
            scene: 'A literary page in the passé simple, with a passage of style indirect libre. Find the point where the narrator slips into the character.',
            recycles: [20, 1, 21],
            lines: [
                { fr: 'Il descendit du train à la nuit tombante et reconnut aussitôt l’odeur du quai.', en: 'He got off the train at nightfall and at once recognised the smell of the platform.' },
                { fr: 'Rien n’avait changé ; la lanterne du chef de gare oscillait comme vingt ans plus tôt.', en: 'Nothing had changed; the stationmaster’s lantern swung as it had twenty years before.' },
                { fr: 'Il prit la rue haute, lentement, sans se presser vers la maison.', en: 'He took the upper street, slowly, without hurrying towards the house.' },
                { fr: 'Pourquoi était-il revenu ? Personne ne l’attendait. Personne ne l’avait jamais attendu.', en: 'Why had he come back? Nobody was waiting for him. Nobody had ever waited for him.' },
                { fr: 'Il fallait bien, un jour, en finir avec cette ville ou s’y résoudre.', en: 'One had, some day, either to be done with this town or to resign oneself to it.' },
                { fr: 'La grille était ouverte. Il s’arrêta, la main sur le fer froid, et n’entra pas.', en: 'The gate was open. He stopped, his hand on the cold iron, and did not go in.' },
                { fr: 'Une fenêtre s’éclaira au premier étage, puis s’éteignit.', en: 'A window lit up on the first floor, then went dark.' },
                { fr: 'Il resta là longtemps. Quand il se décida enfin, il pleuvait.', en: 'He stayed there a long time. When at last he made up his mind, it was raining.' }
            ],
            questions: [
                { q: 'Which narrative tense is “il descendit”?', a: 'passé simple|passe simple|le passé simple', hint: 'The written narrative past — B2 lesson 18.' },
                { q: 'Which line is in style indirect libre?', a: '4|ligne 4|la quatrième|quatrieme|pourquoi était-il revenu|pourquoi etait-il revenu', hint: 'A question the narrator would have no reason to ask.' },
                { q: 'Which focalisation is used throughout?', a: 'interne|focalisation interne', hint: 'We see and feel only what he does.' }
            ]
        },
        {
            id: 'poeme',
            title: 'Quatrain : le soir au village',
            en_title: 'A Quatrain: Evening in the Village',
            kind: 'Poésie',
            scene: 'Four alexandrines with crossed rhymes. Count the syllables aloud, pronouncing every e that the metre requires.',
            recycles: [21, 8, 20],
            lines: [
                { fr: 'Le soir tombe sans bruit sur les toits du village,', en: 'Evening falls noiselessly on the roofs of the village,' },
                { fr: 'Et la cloche, très loin, sonne un air oublié ;', en: 'And the bell, far off, rings out a forgotten tune;' },
                { fr: 'Un vieil homme s’attarde au seuil de son ouvrage,', en: 'An old man lingers on the threshold of his work,' },
                { fr: 'Comme si le sommeil lui semblait un péché.', en: 'As though sleep seemed to him a sin.' }
            ],
            questions: [
                { q: 'How many syllables does each line have?', a: '12|douze', hint: 'Count line 1, remembering the e of tombe.' },
                { q: 'What is this line length called?', a: 'alexandrin|un alexandrin|l’alexandrin|l alexandrin', hint: 'The noble French line.' },
                { q: 'What is the rhyme scheme? Write ABAB, AABB or ABBA.', a: 'ABAB|abab|rimes croisées|croisées|croisees', hint: 'village / oublié / ouvrage / péché.' }
            ]
        },
        {
            id: 'suisse-belge',
            title: 'Deux messages : Genève et Namur',
            en_title: 'Two Messages: Geneva and Namur',
            kind: 'Francophonie européenne',
            scene: 'A Swiss voice message and a Belgian email. Same language, different standards — and the numbers and meals shift.',
            recycles: [11, 15, 10],
            lines: [
                { fr: 'Salut ! Je t’appelle depuis Lausanne, il est septante-cinq… pardon, il est huit heures moins le quart.', en: "Hi! I'm calling you from Lausanne, it's seventy-five… sorry, it's a quarter to eight." },
                { fr: 'On mange à midi, donc on dîne ensemble si tu veux, et on soupe chez Marc ce soir.', en: "We're eating at midday, so we'll have lunch together if you like, and dinner at Marc's tonight." },
                { fr: 'Prends un cornet pour les courses, et n’oublie pas ton natel.', en: "Take a bag for the shopping, and don't forget your mobile." },
                { fr: 'Il y a une action sur le fromage au magasin, nonante centimes de moins le kilo.', en: "There's an offer on cheese at the shop, ninety centimes less a kilo." },
                { fr: 'Madame, Monsieur, je me permets de vous relancer au sujet de ma demande de kot.', en: 'Dear Sir or Madam, I am taking the liberty of following up on my application for a student room.' },
                { fr: 'Le bourgmestre m’a conseillé de passer par votre service ; ci-joint le justificatif demandé.', en: 'The mayor advised me to go through your department; please find enclosed the requested document.' },
                { fr: 'Il a drachu toute la matinée, je n’ai donc pas su venir au guichet.', en: "It poured all morning, so I couldn't come to the counter." },
                { fr: 'Je vous remercie d’avance et vous prie d’agréer mes salutations distinguées.', en: 'Thank you in advance, and please accept my best regards.' }
            ],
            questions: [
                { q: 'What number is “nonante”?', a: '90|quatre-vingt-dix|quatre vingt dix', hint: 'Lesson 11.' },
                { q: 'In Lausanne, which meal is “le dîner”?', a: 'midi|le repas de midi|déjeuner|dejeuner|lunch', hint: 'The meal names shift one step earlier.' },
                { q: 'The Belgian writer says “je n’ai pas su venir”. What does “savoir” mean here?', a: 'pouvoir|could not|ne pas pouvoir|to be able', hint: 'A belgicisme from Dutch contact.' }
            ]
        },
        {
            id: 'abidjan',
            title: 'Abidjan, samedi soir',
            en_title: 'Abidjan, Saturday Night',
            kind: 'Francophonie africaine',
            scene: 'A conversation in Abidjan, with nouchi in it. The grammar is standard French; the lexicon is not.',
            recycles: [12, 9, 13],
            lines: [
                { sp: 'Aya', fr: 'On est ensemble, hein ! Tu viens t’enjailler avec nous ce soir ?', en: "We're good, right! Are you coming out to enjoy yourself with us tonight?" },
                { sp: 'Koffi', fr: 'Ah, je suis chaud pour ça. On va où ?', en: "Oh, I'm well up for that. Where are we going?" },
                { sp: 'Aya', fr: 'Au maquis, chez Tantie Adjo. Elle a mis un nouveau son qui tue.', en: "To the maquis, at Auntie Adjo's. She's got new music on that's killer." },
                { sp: 'Koffi', fr: 'Et le prix ? La dernière fois on a payé cher, je n’ai pas calé.', en: "And the price? Last time we paid a lot, I didn't get it." },
                { sp: 'Aya', fr: 'Non non, c’est doux ce soir. Et si tu veux, on prend un taxi-brousse jusqu’à Yopougon.', en: "No, no, it's cheap tonight. And if you like, we'll take a bush taxi to Yopougon." },
                { sp: 'Koffi', fr: 'D’accord. Je passe à l’essencerie d’abord, ma moto est vide.', en: "All right. I'll stop at the petrol station first, my bike's empty." },
                { sp: 'Aya', fr: 'Fais vite, gaou ! Les go sont déjà sur place.', en: "Be quick, you fool! The girls are already there." },
                { sp: 'Koffi', fr: 'Tu me charries, mais c’est bon. On est ensemble.', en: "You're teasing me, but it's fine. See you there." }
            ],
            questions: [
                { q: 'What does “s’enjailler” mean, and which English word is it built on?', a: 'enjoy|to enjoy|s’amuser|s amuser|to have fun', hint: 'Nouchi borrowed it, then gave it French morphology.' },
                { q: 'What does “je suis chaud” mean here?', a: 'je suis motivé|motivé|motive|keen|up for it|enthusiastic|prêt|pret', hint: 'A semantic extension, not a mistake.' },
                { q: 'What is “une essencerie”?', a: 'une station-service|station-service|station service|petrol station|gas station', hint: 'Regular French derivation, coined in West Africa.' }
            ]
        }
    ];

    var TITLES = (window.FRENCH_VOCAB && window.FRENCH_VOCAB.titles) || {};

    function lessonHref(n){ var s=(window.FRENCH_VOCAB&&FRENCH_VOCAB.slugs)||{}; return s[n]? s[n]+'.html' : 'french_lesson_'+n+'.html'; }

    function esc(s) {
        return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }
    function norm(s) {
        return (s || '').trim().toLowerCase().replace(/[.!?,;:]+$/, '').replace(/\s+/g, ' ');
    }

    function chip(n) {
        var t = TITLES[n] ? ' — ' + TITLES[n] : '';
        return '<a class="rd-chip" href="' + lessonHref(n) + '" title="Lesson ' + n + esc(t) + '">Lesson ' + n + '</a>';
    }

    function lineHTML(l) {
        var sp = l.sp ? '<span class="rd-sp">' + esc(l.sp) + '</span>' : '';
        return '<div class="rd-line' + (l.sp ? '' : ' rd-line-narr') + '">' +
            sp +
            '<div class="rd-line-body">' +
            '<p class="rd-tl"><span data-speak="' + esc(l.fr) + '">' + esc(l.fr) + '</span></p>' +
            '<p class="rd-en">' + esc(l.en) + '</p>' +
            '</div></div>';
    }

    function qHTML(q, i) {
        return '<li class="rd-q" data-answer="' + esc(q.a) + '">' +
            '<p class="rd-q-text">' + esc(q.q) + '</p>' +
            '<div class="rd-q-row">' +
            '<input type="text" class="rd-q-input" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="Your answer">' +
            '<button type="button" class="lx-btn lx-btn-primary rd-q-check">Check</button>' +
            '<button type="button" class="lx-btn rd-q-reveal">Show answer</button>' +
            '</div>' +
            '<p class="rd-q-fb" role="status"></p>' +
            (q.hint ? '<p class="rd-q-hint">Hint: ' + esc(q.hint) + '</p>' : '') +
            '</li>';
    }

    function cardHTML(d) {
        return '<article class="rd-card" id="rd-' + esc(d.id) + '">' +
            '<header class="rd-head">' +
            '<span class="rd-kind">' + esc(d.kind) + '</span>' +
            '<h2 class="rd-title"><span data-speak="' + esc(d.title) + '">' + esc(d.title) + '</span>' +
            ' <span class="rd-title-en">' + esc(d.en_title) + '</span></h2>' +
            '<p class="rd-scene">' + esc(d.scene) + '</p>' +
            '<p class="rd-recycles">Recycles: ' + d.recycles.map(chip).join(' ') + '</p>' +
            '<div class="rd-controls">' +
            '<button type="button" class="lx-btn rd-toggle-en" aria-pressed="false">Hide English</button>' +
            '<button type="button" class="lx-btn rd-playall" hidden>&#9654; Play all</button>' +
            '</div>' +
            '</header>' +
            '<div class="rd-lines">' + d.lines.map(lineHTML).join('') + '</div>' +
            '<div class="rd-quiz"><h3 class="rd-quiz-title">Check your understanding</h3>' +
            '<ol class="rd-qs">' + d.questions.map(qHTML).join('') + '</ol></div>' +
            '</article>';
    }

    /* ---- self-contained "Play all" (only if a TTS voice exists) ---- */
    function pickVoice() {
        var synth = window.speechSynthesis;
        if (!synth) return null;
        var voices = synth.getVoices() || [];
        var saved;
        try { saved = localStorage.getItem('french-tts-voice'); } catch (e) { saved = null; }
        if (saved) { var m = voices.filter(function (v) { return v.voiceURI === saved; })[0]; if (m) return m; }
        var order = [/^fr([-_]|$)/i, /french/i, /français/i];
        for (var i = 0; i < order.length; i++) {
            var v = voices.filter(function (vv) { return order[i].test(vv.lang) || order[i].test(vv.name); })[0];
            if (v) return v;
        }
        return null;
    }
    function savedRate() {
        try { return parseFloat(localStorage.getItem('french-tts-rate')) || 0.9; } catch (e) { return 0.9; }
    }
    function playAll(card, btn) {
        var synth = window.speechSynthesis;
        var voice = pickVoice();
        if (!synth || !voice) return;
        synth.cancel();
        var lines = Array.prototype.map.call(card.querySelectorAll('.rd-tl [data-speak]'), function (el) { return el.getAttribute('data-speak'); });
        var rate = savedRate(), i = 0;
        btn.classList.add('rd-playing');
        function next() {
            if (i >= lines.length) { btn.classList.remove('rd-playing'); return; }
            var u = new SpeechSynthesisUtterance(lines[i++]);
            u.voice = voice; u.lang = voice.lang; u.rate = rate;
            u.onend = next; u.onerror = next;
            synth.speak(u);
        }
        next();
    }

    /* ---- boot ---- */
    document.addEventListener('DOMContentLoaded', function () {
        var root = document.getElementById('readings-root');
        if (!root) return;
        root.innerHTML = DIALOGUES.map(cardHTML).join('');

        var count = document.getElementById('rd-count');
        if (count) {
            var qs = DIALOGUES.reduce(function (n, d) { return n + d.questions.length; }, 0);
            count.textContent = DIALOGUES.length + ' passages · ' + qs + ' comprehension questions';
        }

        var audioReady = window.CourseAudio && window.CourseAudio.available && window.CourseAudio.available();
        if (audioReady) {
            Array.prototype.forEach.call(root.querySelectorAll('.rd-playall'), function (b) { b.hidden = false; });
        }

        root.addEventListener('click', function (e) {
            var t = e.target;

            var tog = t.closest('.rd-toggle-en');
            if (tog) {
                var card = tog.closest('.rd-card');
                var hidden = card.classList.toggle('rd-hide-en');
                tog.setAttribute('aria-pressed', String(hidden));
                tog.textContent = hidden ? 'Show English' : 'Hide English';
                return;
            }

            var pa = t.closest('.rd-playall');
            if (pa) { playAll(pa.closest('.rd-card'), pa); return; }

            var chk = t.closest('.rd-q-check');
            if (chk) {
                var li = chk.closest('.rd-q');
                var input = li.querySelector('.rd-q-input');
                var fb = li.querySelector('.rd-q-fb');
                var alts = li.getAttribute('data-answer').split('|').map(norm);
                var ok = alts.indexOf(norm(input.value)) >= 0;
                li.classList.toggle('rd-correct', ok);
                li.classList.toggle('rd-wrong', !ok);
                fb.textContent = ok ? 'C’est ça ! (Correct!) 🎉' : 'Not quite — try again, or reveal the answer.';
                return;
            }

            var rev = t.closest('.rd-q-reveal');
            if (rev) {
                var li2 = rev.closest('.rd-q');
                var ans = li2.getAttribute('data-answer').split('|')[0];
                var input2 = li2.querySelector('.rd-q-input');
                input2.value = ans;
                li2.classList.remove('rd-wrong');
                li2.classList.add('rd-correct');
                li2.querySelector('.rd-q-fb').textContent = 'Answer: ' + ans;
                return;
            }
        });

        root.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' && e.target.classList.contains('rd-q-input')) {
                e.preventDefault();
                var btn = e.target.closest('.rd-q').querySelector('.rd-q-check');
                if (btn) btn.click();
            }
        });
    });
})();
