/* readings.js — graded French dialogues & reading passages that recycle
   vocabulary from across the lessons. Standalone (like glossary.js /
   cheatsheet.js): renders from the DIALOGUES data below, wires audio via
   data-speak (audio.js adds the 🔊 buttons), a hide-English comprehension
   toggle, an optional "Play all" (only when a TTS voice is installed), and
   check-your-understanding questions with a self-contained answer checker. */
(function () {
    'use strict';

    /* ---- content: each piece recycles earlier lessons' words ---- */
    var DIALOGUES = [
        {
            id: 'rencontre',
            title: 'Bonjour ! Enchanté.',
            en_title: 'Hello! Nice to Meet You.',
            kind: 'Dialogue',
            scene: 'Two people meet at a language exchange and introduce themselves.',
            recycles: [2, 5],
            lines: [
                { sp: 'Claire', fr: 'Bonjour ! Je m’appelle Claire.', en: 'Hello! My name is Claire.' },
                { sp: 'Tom', fr: 'Bonjour Claire. Moi, c’est Tom. Enchanté.', en: "Hello Claire. I'm Tom. Nice to meet you." },
                { sp: 'Claire', fr: 'Enchantée. Vous êtes d’où ?', en: 'Nice to meet you. Where are you from?' },
                { sp: 'Tom', fr: 'Je suis américain. J’habite à Las Vegas.', en: "I'm American. I live in Las Vegas." },
                { sp: 'Claire', fr: 'Ah ! Et vous parlez très bien français.', en: 'Ah! And you speak French very well.' },
                { sp: 'Tom', fr: 'Merci, mais je parle un peu seulement. J’apprends.', en: "Thanks, but I only speak a little. I'm learning." },
                { sp: 'Claire', fr: 'On peut se tutoyer, si tu veux.', en: 'We can use tu with each other, if you like.' },
                { sp: 'Tom', fr: 'Avec plaisir. Tu habites à Paris ?', en: 'With pleasure. Do you live in Paris?' }
            ],
            questions: [
                { q: 'What is the woman’s name?', a: 'claire', hint: 'She introduces herself in the first line.' },
                { q: 'Which city does Tom live in?', a: 'las vegas', hint: 'He says J’habite à…' },
                { q: 'Which French word means “nice to meet you”?', a: 'enchanté|enchantée|enchante|enchantee', hint: 'Both speakers say it.' }
            ]
        },
        {
            id: 'boulangerie',
            title: 'À la boulangerie',
            en_title: 'At the Bakery',
            kind: 'Dialogue',
            scene: 'A customer buys bread and pastries. Watch the partitive articles and the prices.',
            recycles: [4, 13, 11],
            lines: [
                { sp: 'Vendeuse', fr: 'Bonjour ! Qu’est-ce que ce sera ?', en: 'Hello! What will it be?' },
                { sp: 'Client', fr: 'Bonjour. Je voudrais une baguette, s’il vous plaît.', en: "Hello. I'd like a baguette, please." },
                { sp: 'Vendeuse', fr: 'Très bien. Et avec ceci ?', en: 'Very good. Anything else?' },
                { sp: 'Client', fr: 'Deux croissants et un peu de pain de campagne.', en: 'Two croissants and a little country bread.' },
                { sp: 'Vendeuse', fr: 'Je n’ai plus de pain de campagne, désolée.', en: "I don't have any country bread left, sorry." },
                { sp: 'Client', fr: 'Ce n’est pas grave. Ça fait combien ?', en: "That's fine. How much is it?" },
                { sp: 'Vendeuse', fr: 'Six euros quarante, s’il vous plaît.', en: 'Six euros forty, please.' },
                { sp: 'Client', fr: 'Voilà. Merci, bonne journée !', en: 'Here you are. Thanks, have a good day!' }
            ],
            questions: [
                { q: 'How much does the customer pay? (in digits)', a: '6,40|6.40|6 40|six euros quarante', hint: 'Listen for the price near the end.' },
                { q: 'Which item is sold out? (two French words)', a: 'pain de campagne|de campagne', hint: 'Je n’ai plus de…' },
                { q: 'Which word replaces “du/de la” after a negative?', a: 'de|d’', hint: 'Look at "je n’ai plus … pain".' }
            ]
        },
        {
            id: 'journee',
            title: 'Une journée ordinaire',
            en_title: 'An Ordinary Day',
            kind: 'Reading',
            scene: 'A short passage describing a daily routine. Watch the reflexive verbs and the times.',
            recycles: [15, 14, 6],
            lines: [
                { fr: 'Je me réveille à six heures et demie.', en: 'I wake up at half past six.' },
                { fr: 'Je me lève tout de suite et je prends une douche.', en: 'I get up right away and take a shower.' },
                { fr: 'Ensuite, je m’habille et je prends mon petit-déjeuner dans la cuisine.', en: 'Then I get dressed and have breakfast in the kitchen.' },
                { fr: 'Je pars au travail à huit heures, en métro.', en: 'I leave for work at eight, by metro.' },
                { fr: 'Le soir, je rentre vers dix-huit heures et je fais à manger.', en: 'In the evening I get home around six and make something to eat.' },
                { fr: 'Après le dîner, je fais la vaisselle et je range un peu.', en: 'After dinner I do the dishes and tidy up a bit.' },
                { fr: 'Je me couche vers onze heures. D’habitude, je m’endors tout de suite !', en: 'I go to bed around eleven. Usually I fall asleep right away!' }
            ],
            questions: [
                { q: 'At what time does the writer wake up? (in digits)', a: '6h30|6:30|6 30|six heures et demie', hint: 'Six heures et demie.' },
                { q: 'Which reflexive verb means “to get dressed”?', a: 's’habiller|shabiller|je m’habille|je mhabille', hint: 'It appears in the third line.' },
                { q: 'Which chore does the writer do after dinner? (two French words)', a: 'la vaisselle|faire la vaisselle', hint: 'Je fais…' }
            ]
        },
        {
            id: 'restaurant',
            title: 'Au restaurant',
            en_title: 'At the Restaurant',
            kind: 'Dialogue',
            scene: 'Two friends order lunch. Notice the polite conditional and the food vocabulary.',
            recycles: [11, 15],
            lines: [
                { sp: 'Serveur', fr: 'Bonjour messieurs-dames. Vous avez choisi ?', en: 'Hello. Have you chosen?' },
                { sp: 'Léa', fr: 'Oui. Je voudrais le menu du jour, s’il vous plaît.', en: "Yes. I'd like the set menu, please." },
                { sp: 'Serveur', fr: 'Très bien. Et comme boisson ?', en: 'Very good. And to drink?' },
                { sp: 'Léa', fr: 'Une carafe d’eau, s’il vous plaît.', en: 'A carafe of tap water, please.' },
                { sp: 'Marc', fr: 'Pour moi, le poulet. Est-ce qu’il y a des légumes ?', en: "For me, the chicken. Are there any vegetables?" },
                { sp: 'Serveur', fr: 'Oui, des haricots verts. Ça vous convient ?', en: 'Yes, green beans. Does that suit you?' },
                { sp: 'Marc', fr: 'Parfait, merci.', en: 'Perfect, thank you.' },
                { sp: 'Léa', fr: 'Et l’addition ensemble, s’il vous plaît.', en: 'And one bill together, please.' }
            ],
            questions: [
                { q: 'What does Léa order to drink? (two French words)', a: 'carafe d’eau|une carafe d’eau|carafe deau', hint: 'It is the free tap-water option.' },
                { q: 'Which polite form do both diners use for “I would like”?', a: 'je voudrais|voudrais', hint: 'It is the conditional of vouloir.' },
                { q: 'What vegetable comes with the chicken? (two French words)', a: 'haricots verts|des haricots verts', hint: 'Green ones.' }
            ]
        },
        {
            id: 'chemin',
            title: 'Pardon, je cherche la gare',
            en_title: 'Excuse Me, I’m Looking for the Station',
            kind: 'Dialogue',
            scene: 'A traveller asks for directions in Montréal. Notice the direction words and the Québécois turns of phrase.',
            recycles: [16, 3, 28],
            lines: [
                { sp: 'Touriste', fr: 'Pardon, je cherche la gare. C’est loin ?', en: "Excuse me, I'm looking for the station. Is it far?" },
                { sp: 'Passante', fr: 'Non, c’est à dix minutes à pied.', en: "No, it's ten minutes on foot." },
                { sp: 'Touriste', fr: 'Ah, parfait. C’est par où ?', en: 'Ah, perfect. Which way is it?' },
                { sp: 'Passante', fr: 'Tu continues tout droit, pis tu tournes à gauche au feu.', en: 'You keep going straight, then you turn left at the light.' },
                { sp: 'Touriste', fr: 'Tout droit, puis à gauche. Et après ?', en: 'Straight ahead, then left. And after that?' },
                { sp: 'Passante', fr: 'La gare est juste en face du parc. Tu peux pas la manquer.', en: "The station is right across from the park. You can't miss it." },
                { sp: 'Touriste', fr: 'Merci beaucoup !', en: 'Thank you very much!' },
                { sp: 'Passante', fr: 'Bienvenue !', en: "You're welcome! (Québécois)" }
            ],
            questions: [
                { q: 'How long does the walk take? (in digits)', a: '10|dix', hint: 'À dix minutes à pied.' },
                { q: 'Which direction do you turn at the traffic light?', a: 'à gauche|a gauche|gauche|left', hint: 'Tu tournes…' },
                { q: 'Which Québécois word here means “you’re welcome”?', a: 'bienvenue', hint: 'It is the last line — and a famous false friend.' }
            ]
        },
        {
            id: 'week-end',
            title: 'Qu’est-ce que tu as fait ce week-end ?',
            en_title: 'What Did You Do This Weekend?',
            kind: 'Dialogue',
            scene: 'Two colleagues catch up on Monday. Watch the passé composé and the imparfait working together.',
            recycles: [19, 21, 18],
            lines: [
                { sp: 'Sophie', fr: 'Salut ! Qu’est-ce que tu as fait ce week-end ?', en: 'Hi! What did you do this weekend?' },
                { sp: 'Karim', fr: 'Samedi, je suis allé au marché, puis j’ai vu un film.', en: 'On Saturday I went to the market, then I saw a film.' },
                { sp: 'Sophie', fr: 'Il était bien ?', en: 'Was it good?' },
                { sp: 'Karim', fr: 'Bof. L’histoire était lente, mais les acteurs étaient excellents.', en: 'Meh. The story was slow, but the actors were excellent.' },
                { sp: 'Sophie', fr: 'Et dimanche ?', en: 'And Sunday?' },
                { sp: 'Karim', fr: 'Il pleuvait, alors je suis resté à la maison et j’ai lu.', en: 'It was raining, so I stayed home and read.' },
                { sp: 'Sophie', fr: 'Moi, je me suis levée tard et je n’ai rien fait !', en: 'Me, I got up late and did nothing!' },
                { sp: 'Karim', fr: 'C’est un bon programme aussi.', en: "That's a good plan too." }
            ],
            questions: [
                { q: 'Which auxiliary does “je … allé” take?', a: 'suis|être|etre', hint: 'Aller is on the être list.' },
                { q: 'Why does Karim use “il pleuvait” rather than “il a plu”?', a: 'imparfait|background|description|it was ongoing', hint: 'It sets the scene rather than reporting an event.' },
                { q: 'Which negative means “nothing” in the last exchange?', a: 'rien|ne rien|n’ai rien', hint: 'Je n’ai … fait.' }
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
