/* readings.js — graded B1/B2 French dialogues, articles and narratives for
   the INTERMEDIATE tier. A copy of the beginner engine with a new DIALOGUES
   data block spliced in; each piece recycles the grammar of named lessons. Standalone (like glossary.js /
   cheatsheet.js): renders from the DIALOGUES data below, wires audio via
   data-speak (audio.js adds the 🔊 buttons), a hide-English comprehension
   toggle, an optional "Play all" (only when a TTS voice is installed), and
   check-your-understanding questions with a self-contained answer checker. */
(function () {
    'use strict';

    /* ---- content: each piece recycles earlier lessons' words ---- */
    var DIALOGUES = [
        {
            id: 'regrets',
            title: 'Si seulement j’avais su',
            en_title: 'If Only I’d Known',
            kind: 'Dialogue',
            scene: 'Two friends debrief a missed opportunity. Watch the plus-que-parfait and the conditionnel passé working together.',
            recycles: [1, 3, 4],
            lines: [
                { sp: 'Léa', fr: 'Tu savais que Marc avait déménagé à Lyon ?', en: 'Did you know Marc had moved to Lyon?' },
                { sp: 'Samir', fr: 'Quoi ? Non ! Il ne m’avait rien dit.', en: "What? No! He hadn't told me anything." },
                { sp: 'Léa', fr: 'Il est parti la veille de ton anniversaire.', en: 'He left the day before your birthday.' },
                { sp: 'Samir', fr: 'Si j’avais su, je serais allé le voir.', en: "If I'd known, I would have gone to see him." },
                { sp: 'Léa', fr: 'Tu aurais dû l’appeler, tout simplement.', en: 'You should have just called him.' },
                { sp: 'Samir', fr: 'Je sais. J’avais essayé deux fois, mais il n’avait jamais répondu.', en: "I know. I'd tried twice, but he'd never answered." },
                { sp: 'Léa', fr: 'Si seulement vous vous étiez parlé avant son départ.', en: 'If only you two had talked before he left.' },
                { sp: 'Samir', fr: 'Après avoir lu ton message, je vais lui écrire ce soir.', en: "After reading your message, I'm going to write to him tonight." }
            ],
            questions: [
                { q: 'Which tense is “avait déménagé”?', a: 'plus-que-parfait|plus que parfait|pluperfect', hint: 'Imparfait of avoir + participle.' },
                { q: 'When exactly did Marc leave? (one French word)', a: 'la veille|veille', hint: 'The day before Samir’s birthday.' },
                { q: 'Which si-clause type is “Si j’avais su, je serais allé” — 1, 2 or 3?', a: '3|trois|type 3', hint: 'Plus-que-parfait → conditionnel passé.' }
            ]
        },
        {
            id: 'demenagement',
            title: 'Il faut que tu viennes',
            en_title: 'You Really Have to Come',
            kind: 'Dialogue',
            scene: 'Organising a house move. Nearly every line carries a subjunctive — count the triggers.',
            recycles: [5, 6, 7],
            lines: [
                { sp: 'Claire', fr: 'Il faut que tu viennes samedi, j’ai besoin d’aide.', en: 'You have to come on Saturday, I need help.' },
                { sp: 'Bruno', fr: 'Je veux bien, mais je doute que je sois libre avant midi.', en: "I'd be glad to, but I doubt I'll be free before noon." },
                { sp: 'Claire', fr: 'Ce n’est pas grave, pourvu que tu sois là l’après-midi.', en: "That's fine, as long as you're there in the afternoon." },
                { sp: 'Bruno', fr: 'Bien que ce soit un peu tôt, je peux demander à Yann aussi.', en: 'Although it’s a bit soon, I can ask Yann too.' },
                { sp: 'Claire', fr: 'Parfait. J’aimerais qu’on finisse avant qu’il ne pleuve.', en: "Perfect. I'd like us to finish before it rains." },
                { sp: 'Bruno', fr: 'J’espère qu’il fera beau, justement.', en: "I hope the weather will be good, actually." },
                { sp: 'Claire', fr: 'Moi aussi. Il vaut mieux qu’on commence tôt, quand même.', en: "Me too. It's better if we start early, all the same." },
                { sp: 'Bruno', fr: 'Je suis content que tu m’aies prévenu à l’avance.', en: "I'm glad you warned me in advance." }
            ],
            questions: [
                { q: 'Why does Bruno say “j’espère qu’il fera” and not “qu’il fasse”?', a: 'espérer|esperer|espérer takes the indicative|indicative|indicatif', hint: 'One French verb of hoping refuses the subjunctive.' },
                { q: 'Which subjunctive tense is “que tu m’aies prévenu”?', a: 'passé|passe|subjonctif passé|subjonctif passe|past', hint: 'The warning already happened.' },
                { q: 'Which conjunction in the text takes a “ne explétif”?', a: 'avant que|avant qu’il|avant', hint: 'Look for a ne with no pas.' }
            ]
        },
        {
            id: 'appartement',
            title: 'L’appartement dont je t’ai parlé',
            en_title: 'The Flat I Told You About',
            kind: 'Dialogue',
            scene: 'Flat-hunting in Paris. A workout in dont, lequel and ce que.',
            recycles: [8, 9],
            lines: [
                { sp: 'Nadia', fr: 'Voici l’appartement dont je t’ai parlé hier.', en: 'Here’s the flat I told you about yesterday.' },
                { sp: 'Paul', fr: 'C’est celui dont le loyer est si bas ?', en: 'Is it the one whose rent is so low?' },
                { sp: 'Nadia', fr: 'Exactement. Et la rue dans laquelle il se trouve est très calme.', en: 'Exactly. And the street it’s on is very quiet.' },
                { sp: 'Paul', fr: 'C’est ce que je cherche depuis des mois.', en: "That's what I've been looking for for months." },
                { sp: 'Nadia', fr: 'La raison pour laquelle il est encore libre, c’est le cinquième étage sans ascenseur.', en: "The reason it's still available is the fifth floor with no lift." },
                { sp: 'Paul', fr: 'Ah. C’est justement ce dont j’avais peur.', en: "Ah. That's exactly what I was afraid of." },
                { sp: 'Nadia', fr: 'Tu t’habitueras à monter. J’ai réussi à le faire pendant trois ans.', en: "You'll get used to the climb. I managed it for three years." },
                { sp: 'Paul', fr: 'Bon. J’ai décidé de le visiter, au moins.', en: "All right. I've decided to at least go and see it." }
            ],
            questions: [
                { q: 'Which relative pronoun replaces “de + noun”?', a: 'dont', hint: 'Parler de → …' },
                { q: 'After “la rue dans …”, which form of lequel is used?', a: 'laquelle', hint: 'Rue is feminine singular.' },
                { q: 'Does “réussir” take à, de, or nothing before an infinitive?', a: 'à|a', hint: 'J’ai réussi … le faire.' }
            ]
        },
        {
            id: 'garage',
            title: 'Je me suis fait avoir',
            en_title: 'I Got Taken For a Ride',
            kind: 'Dialogue',
            scene: 'A bad experience at the garage. The causative and the passive alternatives, all in one conversation.',
            recycles: [11, 14, 10],
            lines: [
                { sp: 'Élodie', fr: 'Tu as fait réparer ta voiture, finalement ?', en: 'Did you get your car repaired in the end?' },
                { sp: 'Marc', fr: 'Oui, et je me suis fait avoir. On m’a facturé le double.', en: "Yes, and I got ripped off. They charged me double." },
                { sp: 'Élodie', fr: 'Tu avais demandé un devis ?', en: 'Had you asked for a quote?' },
                { sp: 'Marc', fr: 'Je l’avais demandé, mais le devis ne m’a jamais été envoyé.', en: "I had asked for one, but the quote was never sent to me." },
                { sp: 'Élodie', fr: 'Ça ne se fait pas. Tu devrais écrire une réclamation.', en: "That isn't done. You should write a complaint." },
                { sp: 'Marc', fr: 'Je vais la faire relire par mon frère — il est juriste.', en: "I'm going to have my brother check it — he's a lawyer." },
                { sp: 'Élodie', fr: 'Bonne idée. Les factures que tu as gardées serviront de preuve.', en: "Good idea. The invoices you kept will serve as proof." },
                { sp: 'Marc', fr: 'Heureusement que je les ai gardées, justement.', en: 'Luckily I did keep them, as it happens.' }
            ],
            questions: [
                { q: 'In “je me suis fait avoir”, does “fait” agree?', a: 'non|no|invariable|never', hint: 'The causative fait is always the same.' },
                { q: 'Why is it “les factures que tu as gardées”?', a: 'que|preceding direct object|cod|objet direct|que precedes', hint: 'Something comes before the verb.' },
                { q: 'Which two-word phrase means “that isn’t done”?', a: 'ça ne se fait pas|ca ne se fait pas|se fait pas|ça se fait pas', hint: 'A pronominal passive.' }
            ]
        },
        {
            id: 'entretien',
            title: 'L’entretien d’embauche',
            en_title: 'The Job Interview',
            kind: 'Dialogue',
            scene: 'A job interview in Montréal. Formal register, CV vocabulary, and a few Québécois turns.',
            recycles: [23, 16, 25],
            lines: [
                { sp: 'Recruteuse', fr: 'Bonjour, assoyez-vous. Parlez-moi un peu de vous.', en: 'Hello, have a seat. Tell me a little about yourself.' },
                { sp: 'Candidat', fr: 'Je vous remercie de me recevoir. J’ai une formation en communication.', en: 'Thank you for seeing me. My background is in communications.' },
                { sp: 'Recruteuse', fr: 'Et qu’est-ce que vous avez fait dans votre dernière job ?', en: 'And what did you do in your last job?' },
                { sp: 'Candidat', fr: 'J’ai encadré une équipe de quatre personnes et mis en place une stratégie de contenus.', en: 'I led a team of four and set up a content strategy.' },
                { sp: 'Recruteuse', fr: 'Présentement, vous êtes en poste ?', en: 'Are you currently employed?' },
                { sp: 'Candidat', fr: 'Non, mon contrat s’est terminé en juin. Je suis disponible immédiatement.', en: 'No, my contract ended in June. I am available immediately.' },
                { sp: 'Recruteuse', fr: 'Parfait. Auriez-vous des questions pour nous ?', en: 'Perfect. Would you have any questions for us?' },
                { sp: 'Candidat', fr: 'Oui — j’aimerais savoir comment l’équipe est organisée.', en: "Yes — I'd like to know how the team is organised." }
            ],
            questions: [
                { q: 'Which Québécois word means “currently”?', a: 'présentement|presentement', hint: 'France would say actuellement.' },
                { q: 'What gender is “job” in Québécois French?', a: 'féminin|feminin|feminine|f', hint: 'Look at the article the recruiter uses.' },
                { q: 'On a CV, what does “la formation” mean?', a: 'education|training|education and training|studies|études|etudes', hint: 'A faux ami — nothing to do with formatting.' }
            ]
        },
        {
            id: 'teletravail',
            title: 'Le télétravail : un progrès ?',
            en_title: 'Remote Work: Progress?',
            kind: 'Article',
            scene: 'A short opinion piece. Notice the argument structure, the connectors, and the passive.',
            recycles: [21, 11, 19],
            lines: [
                { fr: 'Depuis quelques années, le télétravail s’est imposé dans de nombreux secteurs.', en: 'For some years now, remote work has established itself in many sectors.' },
                { fr: 'On peut donc se demander s’il constitue un véritable progrès social.', en: 'One may therefore ask whether it represents a genuine social advance.' },
                { fr: 'D’une part, la suppression des trajets quotidiens améliore nettement la qualité de vie.', en: 'On the one hand, the elimination of daily commutes markedly improves quality of life.' },
                { fr: 'De plus, une autonomie accrue est généralement appréciée des salariés expérimentés.', en: 'Moreover, greater autonomy is generally appreciated by experienced employees.' },
                { fr: 'En revanche, l’isolement qu’il engendre pèse lourdement sur les plus jeunes.', en: 'On the other hand, the isolation it creates weighs heavily on the youngest workers.' },
                { fr: 'Certes, les outils numériques facilitent les échanges ; il n’en reste pas moins que rien ne remplace une conversation de couloir.', en: 'Admittedly, digital tools make exchanges easier; the fact remains that nothing replaces a corridor conversation.' },
                { fr: 'En définitive, tout porte à croire que la solution réside dans un modèle hybride.', en: 'Ultimately, everything suggests that the answer lies in a hybrid model.' },
                { fr: 'Encore faudrait-il que les entreprises acceptent d’en assumer le coût.', en: 'It would still require companies to agree to bear its cost.' }
            ],
            questions: [
                { q: 'Which connector introduces the counter-argument?', a: 'en revanche', hint: 'It opens the fifth sentence.' },
                { q: 'Which two-word opener concedes a point before rebutting it?', a: 'certes|certes mais', hint: 'Sixth sentence.' },
                { q: 'Which noun in sentence three is a nominalisation of a verb?', a: 'suppression|la suppression', hint: 'From supprimer.' }
            ]
        },
        {
            id: 'fait-divers',
            title: 'Un fait divers',
            en_title: 'A News in Brief',
            kind: 'Press',
            scene: 'A short news item. Every unverified claim is in the conditional — read carefully.',
            recycles: [3, 24, 18],
            lines: [
                { fr: 'Un incendie a ravagé un entrepôt du port de Marseille dans la nuit de mardi à mercredi.', en: 'A fire destroyed a warehouse at the port of Marseille during the night of Tuesday to Wednesday.' },
                { fr: 'Selon les pompiers, le sinistre aurait débuté peu après minuit.', en: 'According to firefighters, the blaze reportedly began shortly after midnight.' },
                { fr: 'Il y aurait trois blessés légers, mais ce bilan n’a pas été confirmé.', en: 'There are reportedly three people slightly injured, but this figure has not been confirmed.' },
                { fr: 'L’entrepôt avait été vidé la semaine précédente, ce qui aurait limité les dégâts.', en: 'The warehouse had been emptied the previous week, which reportedly limited the damage.' },
                { fr: 'Une enquête a été ouverte afin de déterminer l’origine du sinistre.', en: 'An investigation has been opened in order to determine the cause of the blaze.' },
                { fr: 'Le procureur a déclaré qu’aucune piste n’était écartée.', en: 'The prosecutor stated that no line of inquiry was being ruled out.' },
                { fr: 'Les riverains, interrogés sur place, disent avoir entendu une forte détonation.', en: 'Local residents, questioned at the scene, say they heard a loud explosion.' }
            ],
            questions: [
                { q: 'Is the number of injured people confirmed?', a: 'non|no|pas confirmé|pas confirme|unconfirmed', hint: 'Look at the verb form in sentence three.' },
                { q: 'Which tense marks the unverified claims here?', a: 'conditionnel|le conditionnel|conditional', hint: 'aurait débuté, il y aurait…' },
                { q: 'Which tense is “avait été vidé”?', a: 'plus-que-parfait|plus que parfait|pluperfect|plus-que-parfait passif', hint: 'A passive in the past-behind-the-past.' }
            ]
        },
        {
            id: 'quebec-cuisine',
            title: 'Chez ma tante, à Chicoutimi',
            en_title: 'At My Aunt’s, in Chicoutimi',
            kind: 'Récit',
            scene: 'A short personal narrative in Québécois register. Listen for the local vocabulary and the reductions.',
            recycles: [25, 20, 1],
            lines: [
                { fr: 'Quand j’étais jeune, on allait chez ma tante à Chicoutimi chaque fin de semaine.', en: 'When I was young, we went to my aunt’s in Chicoutimi every weekend.' },
                { fr: 'Mon père avait acheté un vieux char qui tombait en panne tous les deux mois.', en: 'My father had bought an old car that broke down every other month.' },
                { fr: 'Ma tante disait toujours : « C’est de valeur que vous restiez pas à coucher. »', en: 'My aunt always said: "It’s a shame you’re not staying the night."' },
                { fr: 'On avait de la misère à partir, parce qu’elle avait toujours préparé une tourtière.', en: 'We had trouble leaving, because she had always made a tourtière.' },
                { fr: 'Une fois, il faisait tellement frette qu’on a dû rester jusqu’au lendemain.', en: 'Once it was so freezing that we had to stay until the next day.' },
                { fr: 'Mon frère avait capoté : il n’avait jamais vu autant de neige.', en: "My brother had freaked out: he'd never seen so much snow." },
                { fr: 'Tantôt, je vais l’appeler pour qu’on en reparle.', en: "Later today, I'm going to call him so we can talk about it again." }
            ],
            questions: [
                { q: 'Which Québécois word here means “car”?', a: 'char|un char', hint: 'France would say une voiture.' },
                { q: 'What does “avoir de la misère à” mean?', a: 'to struggle|avoir du mal|to have trouble|struggle|to have difficulty|difficulty', hint: 'France says avoir du mal à.' },
                { q: 'Which Québécois phrase means “that’s a shame”?', a: 'c’est de valeur|c est de valeur|de valeur', hint: 'The aunt says it.' }
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
        var order = [/es[-_]/i, /french/i, /español/i, /^es$/i, /castellano/i];
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
                fb.textContent = ok ? '¡Correcto! (Correct!) 🎉' : 'Not quite — try again, or reveal the answer.';
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
