/* reader.js — French pronunciation reader.

   French orthography is NOT phonemic the way Spanish is, so this engine is a
   rule-based approximation with an exception lexicon, not an oracle. What it can do
   reliably is the three things that actually trip learners:

     - silent letters (final consonants, e muet)
     - nasal vowels
     - liaison between words

   Note there is deliberately no per-word stress panel: French has no lexical stress.
   Stress is phrasal, landing on the last full syllable of a rhythmic group, so a
   "which syllable is stressed" column would teach something false.

   speechSynthesis quirks handled here, as on the Spanish page: Chrome truncates
   utterances beyond roughly 15 seconds (so text is chunked by sentence), and
   `boundary` events are unreliable on remote voices (so word highlighting degrades
   to sentence highlighting).

   Exposes window.FrenchReader. */
(function () {
    'use strict';

    var VOWEL_LETTERS = 'aeiouyâàäéèêëîïôöûùüœæ';
    var isV = function (c) { return !!c && VOWEL_LETTERS.indexOf(c) >= 0; };

    /* Phones that can be a syllable nucleus. Glides (j w ɥ) are onsets, not nuclei. */
    var VOWEL_PHONES = ['ɑ̃', 'ɛ̃', 'ɔ̃', 'œ̃', 'a', 'ɑ', 'e', 'ɛ', 'ə', 'i', 'o', 'ɔ', 'u', 'y', 'ø', 'œ'];
    var isVowelPhone = function (p) { return VOWEL_PHONES.indexOf(p) >= 0; };

    var OBSTRUENT = 'pbtdkɡfv';
    var LIQUID = 'lʁ';

    /* Words whose h blocks liaison and elision (h aspiré). There is no rule for this;
       it is lexical, a residue of Germanic loanwords. */
    var H_ASPIRE = ('hache haine hall halle hamac hamburger hameau hanche handicap hangar ' +
        'hanter harceler hardi hareng haricot harpe hasard hâte haut hauteur havre ' +
        'hérisson hernie héros hêtre heurter hibou hiérarchie hisser hocher hockey ' +
        'hollande homard honte hoquet hors hotte houle housse huard huche huit hurler ' +
        'hutte').split(' ');

    /* Function words that force liaison with what follows. */
    var LIAISON_OBLIGATORY = ('les des ces mes tes ses nos vos leurs un une deux trois six dix ' +
        'aux au en on nous vous ils elles est sont ont dans chez sans sous très bien plus ' +
        'quand tout tous quels quelles mon ton son cet cette quatre neuf').split(' ');

    /* Irregular spellings. Rules cannot reach these. */
    var LEXICON = {
        'femme': 'fam', 'monsieur': 'məsjø', 'messieurs': 'mesjø', 'fils': 'fis',
        'oignon': 'ɔɲɔ̃', 'second': 'səɡɔ̃', 'seconde': 'səɡɔ̃d', 'automne': 'otɔn',
        'sept': 'sɛt', 'huit': 'ɥit', 'six': 'sis', 'dix': 'dis', 'neuf': 'nœf',
        'est': 'ɛ', 'et': 'e', 'les': 'le', 'des': 'de', 'mes': 'me', 'ces': 'se',
        'ses': 'se', 'tes': 'te', 'aux': 'o', 'eu': 'y',
        'ville': 'vil', 'mille': 'mil', 'tranquille': 'tʁɑ̃kil', 'village': 'vilaʒ',
        'tous': 'tus', 'plus': 'plys', 'os': 'ɔs', 'ours': 'uʁs',
        'mer': 'mɛʁ', 'hier': 'jɛʁ', 'fer': 'fɛʁ', 'cher': 'ʃɛʁ', 'hiver': 'ivɛʁ',
        'amer': 'amɛʁ', 'enfer': 'ɑ̃fɛʁ', 'cancer': 'kɑ̃sɛʁ', 'super': 'sypɛʁ',
        'ver': 'vɛʁ', 'ver': 'vɛʁ', 'clef': 'kle', 'nerf': 'nɛʁ',
        'le': 'lə', 'je': 'ʒə', 'ce': 'sə', 'de': 'də', 'me': 'mə', 'te': 'tə',
        'se': 'sə', 'ne': 'nə', 'que': 'kə', 'la': 'la', 'ma': 'ma',
        'oeil': 'œj', 'œil': 'œj', 'yeux': 'jø', 'gens': 'ʒɑ̃',
        'compter': 'kɔ̃te', 'sculpter': 'skylte', 'baptême': 'batɛm',
        'faisons': 'fəzɔ̃', 'monsieur': 'məsjø', 'orchestre': 'ɔʁkɛstʁ',
        'chœur': 'kœʁ', 'chorale': 'kɔʁal', 'technique': 'tɛknik',
        'pays': 'pei', 'paix': 'pɛ', 'voix': 'vwa', 'noix': 'nwa',
        'client': 'klijɑ̃', 'patient': 'pasjɑ̃', 'science': 'sjɑ̃s',
        'aujourd': 'oʒuʁ', 'hui': 'ɥi'
    };

    /* Silent by default at the end of a word. C, R, F, L are the classic exceptions
       ("CaReFuL"), though -er and -ez endings override that below. */
    var SILENT_FINAL = 'bdgmnpstxz';

    /* ------------------------------------------------------------------
       Grapheme scanner. Each entry records the letters consumed and the phones
       produced; an empty phone string marks a silent letter, which the page shows
       struck through.
       ------------------------------------------------------------------ */
    /* Final consonants that stay silent, used for the open/closed-syllable tests. */
    var SILENT_TAIL = /^[stxdpz]$/;

    /* eu is close [ø] in an open syllable, open [œ] in a closed one:
           deux, heureux, meunier  -> ø      (nothing, or a silent tail, or C + vowel)
           peur, seul, jeune, heure -> œ      (a pronounced consonant closes it)
       "heure" and "jeune" close on a mute final e, so a following e-at-word-end counts
       as a closing consonant rather than an opening vowel. */
    function euQuality(w, i) {
        var rest = w.slice(i + 2);
        if (rest === '') return 'ø';
        if (rest[0] === 'z') return 'ø';
        if (SILENT_TAIL.test(rest)) return 'ø';
        var m = rest.match(/^[bcdfgjklmnpqrstvwxz]([aeiouyéèêàâîïôöûùœ])/);
        if (m && !(m[1] === 'e' && rest.length === 2)) return 'ø';
        return 'œ';
    }

    /* o is close [o] word-finally, before /z/, and before a silent final consonant
       (gros, mot); open [ɔ] when a pronounced consonant closes the syllable (port). */
    function oQuality(w, i) {
        var rest = w.slice(i + 1);
        if (rest === '') return 'o';
        if (rest[0] === 'z') return 'o';
        if (rest[0] === 's' && isV(rest[1])) return 'o';   // chose, rose -> /z/
        if (SILENT_TAIL.test(rest)) return 'o';
        return 'ɔ';
    }

    function nasalHere(w, i, len) {
        /* a vowel + n/m is nasal unless the n/m is doubled or begins a new syllable */
        var after = w[i + len];
        return !(isV(after) || after === 'n' || after === 'm');
    }

    function scan(word, opts) {
        var w = word.toLowerCase();
        var out = [];
        var i = 0;
        var n = w.length;
        var UN = opts.unMerger ? 'ɛ̃' : 'œ̃';

        /* `g` keeps the ORIGINAL casing for display; `lg` is the lowercase form the
           rules match on. Slicing the source keeps "Bonjour" from rendering as
           "bonjour" in the spelling column. */
        function push(g, p, punct) {
            out.push({ g: word.substr(i, g.length), lg: g, p: p, punct: !!punct });
            i += g.length;
        }

        while (i < n) {
            var c = w[i], nx = w[i + 1], nn = w[i + 2];
            var s2 = w.substr(i, 2), s3 = w.substr(i, 3), s4 = w.substr(i, 4);
            var prev = out.length ? out[out.length - 1] : null;
            var prevLetter = i > 0 ? w[i - 1] : null;
            var atEnd = function (len) { return i + len === n; };

            /* -tion, -tien: /sjɔ̃/ unless a preceding s keeps the plosive (question) */
            if (s4 === 'tion') { push('tion', prevLetter === 's' ? 'tjɔ̃' : 'sjɔ̃'); continue; }

            if (s3 === 'eau') { push('eau', 'o'); continue; }
            if (s3 === 'oin' && nasalHere(w, i, 3)) { push('oin', 'wɛ̃'); continue; }
            if ((s3 === 'ain' || s3 === 'aim' || s3 === 'ein' || s3 === 'eim') && nasalHere(w, i, 3)) {
                push(s3, 'ɛ̃'); continue;
            }
            /* -ient at the end of a word is /jɑ̃/ (client, orient); a bare -ien is /jɛ̃/
               (bien, chien, rien). */
            if (s4 === 'ient' && atEnd(4)) { push('ient', 'jɑ̃'); continue; }
            if (s3 === 'ien' && nasalHere(w, i, 3)) { push('ien', 'jɛ̃'); continue; }
            if (s3 === 'oeu' || s3 === 'œu') { push(s3, atEnd(3) ? 'ø' : 'œ'); continue; }

            /* Glide endings. -ill- variants first, since "travailler" is ai + ill. */
            if (w.substr(i, 5) === 'euill') { push('euill', 'œj'); continue; }
            if (w.substr(i, 5) === 'ouill') { push('ouill', 'uj'); continue; }
            if (s4 === 'aill') { push('aill', 'aj'); continue; }
            if (s4 === 'eill') { push('eill', 'ɛj'); continue; }
            if (s4 === 'ueil' || s4 === 'œil') { push(s4, 'œj'); continue; }
            if (s4 === 'euil') { push('euil', 'œj'); continue; }
            if (s4 === 'ouil') { push('ouil', 'uj'); continue; }
            if (s3 === 'ail') { push('ail', 'aj'); continue; }
            if (s3 === 'eil') { push('eil', 'ɛj'); continue; }
            if (s3 === 'ill') {
                /* -ill- is /j/ after a vowel (travail), /ij/ after a consonant (fille) */
                push('ill', isV(prevLetter) ? 'j' : 'ij');
                continue;
            }

            if (s2 === 'ou') {
                if (isV(nn) && nn) { push('ou', 'w'); continue; }
                push('ou', 'u'); continue;
            }
            if (s2 === 'oi') { push('oi', 'wa'); continue; }
            if (s2 === 'au') { push('au', 'o'); continue; }
            if (s2 === 'eu') { push('eu', euQuality(w, i)); continue; }
            if (s2 === 'ai' || s2 === 'aî') { push(s2, atEnd(2) ? 'e' : 'ɛ'); continue; }
            if (s2 === 'ei') { push('ei', 'ɛ'); continue; }
            if ((s2 === 'an' || s2 === 'am' || s2 === 'en' || s2 === 'em') && nasalHere(w, i, 2)) {
                push(s2, 'ɑ̃'); continue;
            }
            if ((s2 === 'in' || s2 === 'im' || s2 === 'yn' || s2 === 'ym') && nasalHere(w, i, 2)) {
                push(s2, 'ɛ̃'); continue;
            }
            if ((s2 === 'on' || s2 === 'om') && nasalHere(w, i, 2)) { push(s2, 'ɔ̃'); continue; }
            if ((s2 === 'un' || s2 === 'um') && nasalHere(w, i, 2)) { push(s2, UN); continue; }

            if (s2 === 'gn') { push('gn', 'ɲ'); continue; }
            if (s2 === 'ch') { push('ch', 'ʃ'); continue; }
            if (s2 === 'ph') { push('ph', 'f'); continue; }
            if (s2 === 'th') { push('th', 't'); continue; }
            if (s2 === 'qu') { push('qu', 'k'); continue; }
            if (s2 === 'gu' && (nn === 'e' || nn === 'i' || nn === 'é' || nn === 'è')) { push('gu', 'ɡ'); continue; }
            if (s2 === 'ss') { push('ss', 's'); continue; }
            if (s2 === 'll') { push('ll', 'l'); continue; }
            if (s2 === 'mm') { push('mm', 'm'); continue; }
            if (s2 === 'nn') { push('nn', 'n'); continue; }
            if (s2 === 'tt') { push('tt', 't'); continue; }
            if (s2 === 'pp') { push('pp', 'p'); continue; }
            if (s2 === 'rr') { push('rr', 'ʁ'); continue; }
            if (s2 === 'cc') { push('cc', 'k'); continue; }
            if (s2 === 'ff') { push('ff', 'f'); continue; }

            switch (c) {
                case 'é': push('é', 'e'); continue;
                case 'è': case 'ê': case 'ë': push(c, 'ɛ'); continue;
                case 'à': case 'â': push(c, 'a'); continue;
                case 'î': case 'ï': push(c, 'i'); continue;
                case 'ô': push('ô', 'o'); continue;
                case 'û': case 'ù': push(c, c === 'û' ? 'y' : 'y'); continue;
                case 'ç': push('ç', 's'); continue;
                case 'a': push('a', 'a'); continue;
                case 'i': push('i', isV(nx) ? 'j' : 'i'); continue;
                case 'y':
                    if (isV(prevLetter) && isV(nx)) { push('y', 'j'); continue; }
                    push('y', isV(nx) ? 'j' : 'i'); continue;
                case 'o': push('o', oQuality(w, i) ); continue;
                case 'u': push('u', isV(nx) ? 'ɥ' : 'y'); continue;
                case 'e':
                    if (atEnd(1)) { push('e', ''); continue; }        // e muet, resolved below
                    push('e', 'ə'); continue;
                case 'c': push('c', (nx === 'e' || nx === 'i' || nx === 'y' || nx === 'é' || nx === 'è') ? 's' : 'k'); continue;
                case 'g': push('g', (nx === 'e' || nx === 'i' || nx === 'y' || nx === 'é' || nx === 'è') ? 'ʒ' : 'ɡ'); continue;
                case 's': push('s', (isV(prevLetter) && isV(nx)) ? 'z' : 's'); continue;
                case 'x':
                    push('x', (prevLetter === 'e' && isV(nx)) ? 'ɡz' : 'ks'); continue;
                case 'h': push('h', ''); continue;
                /* Elision: the apostrophe in m'appelle, l'ami, j'ai. Silent, but it is
                   punctuation rather than a silent letter, so it is not reported as one. */
                case "'": case '’': push(c, '', true); continue;
                case 'j': push('j', 'ʒ'); continue;
                case 'r': push('r', 'ʁ'); continue;
                case 'w': push('w', 'w'); continue;
                case 'k': push('k', 'k'); continue;
                default: push(c, c); continue;
            }
        }
        return out;
    }

    /* An unaccented e in a closed syllable is [ɛ], not [ə]: mer, bec, sept.
       Approximated as: e followed by two consonants, or by a final pronounced one. */
    var GEMINATE = ['ll', 'mm', 'nn', 'tt', 'pp', 'rr', 'ss', 'ff', 'cc'];

    function refineSchwa(gr) {
        for (var i = 0; i < gr.length; i++) {
            if (gr[i].p !== 'ə' || gr[i].lg !== 'e') continue;
            var next = gr[i + 1], after = gr[i + 2];
            if (!next) continue;
            /* A doubled consonant closes the syllable: appelle /apɛl/, elle /ɛl/. */
            if (GEMINATE.indexOf(next.lg) >= 0) { gr[i].p = 'ɛ'; continue; }
            var nextIsCons = next.p && !isVowelPhone(next.p);
            var afterIsCons = after && after.p && !isVowelPhone(after.p);
            if (nextIsCons && (!after || afterIsCons)) gr[i].p = 'ɛ';
        }
        return gr;
    }

    /* Word-final resolution: e muet, -er/-ez, silent consonants. */
    function finalise(word, gr, isVerbEnt) {
        var w = word.toLowerCase();

        /* -ent as a 3rd-person plural verb ending is entirely silent. Only context
           can tell "ils parlent" (silent) from "un client" (nasal), so the caller
           passes that in. */
        if (isVerbEnt && /ent$/.test(w)) {
            for (var k = gr.length - 1, dropped = 0; k >= 0 && dropped < w.length; k--) {
                dropped += gr[k].g.length;
                gr[k].p = '';
                if (dropped >= 3) break;
            }
            return gr;
        }

        /* Infinitives and 2nd-plural: -er, -ez -> /e/ */
        if (/[a-zà-ÿ]{2,}er$/.test(w)) {
            gr[gr.length - 2].p = 'e';
            gr[gr.length - 1].p = '';
            return gr;
        }
        if (/ez$/.test(w) && w.length > 2) {
            gr[gr.length - 2].p = 'e';
            gr[gr.length - 1].p = '';
            return gr;
        }

        var last = gr[gr.length - 1];
        if (!last) return gr;

        /* Plural -es: both letters silent, and the consonant before them stays voiced
           (roses -> /ʁoz/). Returning early keeps the cluster loop from eating it. */
        if (last.lg === 's' && gr.length > 1 && gr[gr.length - 2].lg === 'e' && w.length > 2) {
            gr[gr.length - 2].p = '';
            last.p = '';
            return gr;
        }

        /* A final mute e protects the consonant before it: chose /ʃoz/, not /ʃo/. */
        if (last.lg === 'e' && last.p === '') return gr;

        /* Otherwise silence the whole trailing consonant cluster, not just the last
           letter: temps -> /tɑ̃/ (p AND s), vingt -> /vɛ̃/ (g AND t). */
        var k = gr.length - 1;
        while (k >= 0) {
            var u = gr[k];
            if (u.p === '') { k--; continue; }                       // h, already silent
            if (u.lg.length === 1 && SILENT_FINAL.indexOf(u.lg) >= 0) { u.p = ''; k--; continue; }
            break;
        }

        /* C and G are normally pronounced word-finally (avec, bec), but fall silent
           after a nasal vowel: blanc, franc, long, sang. */
        if (k > 0 && (gr[k].lg === 'c' || gr[k].lg === 'g') && NASAL.indexOf(gr[k - 1].p) >= 0) {
            gr[k].p = '';
        }
        return gr;
    }

    /* ------------------------------------------------------------------
       Syllabification over phones
       ------------------------------------------------------------------ */
    function syllabify(phones) {
        var nuclei = [];
        phones.forEach(function (p, i) { if (isVowelPhone(p)) nuclei.push(i); });
        if (!nuclei.length) return [phones.join('')];

        var cuts = [];
        for (var k = 0; k + 1 < nuclei.length; k++) {
            var a = nuclei[k], b = nuclei[k + 1];
            var between = b - a - 1;
            if (between === 0) cuts.push(a + 1);
            else if (between === 1) cuts.push(a + 1);
            else {
                var c1 = phones[b - 2], c2 = phones[b - 1];
                var cluster = OBSTRUENT.indexOf(c1) >= 0 && LIQUID.indexOf(c2) >= 0;
                var glide = 'jwɥ'.indexOf(c2) >= 0;
                cuts.push(cluster || glide ? b - 2 : b - 1);
            }
        }
        var out = [], start = 0;
        cuts.forEach(function (cut) { out.push(phones.slice(start, cut).join('')); start = cut; });
        out.push(phones.slice(start).join(''));
        return out.filter(Boolean);
    }

    /* ------------------------------------------------------------------
       Public: analyse one word
       ------------------------------------------------------------------ */
    var NASAL = ['ɑ̃', 'ɛ̃', 'ɔ̃', 'œ̃'];

    function analyse(word, opts, prevWord) {
        opts = Object.assign({ unMerger: false }, opts || {});
        var key = word.toLowerCase();

        var gr, phones;
        if (Object.prototype.hasOwnProperty.call(LEXICON, key)) {
            phones = splitPhones(LEXICON[key]);
            gr = [{ g: word, lg: key, p: LEXICON[key], punct: false }];
        } else {
            var isVerbEnt = !!prevWord && /^(ils|elles)$/i.test(prevWord);
            gr = finalise(word, refineSchwa(scan(word, opts)), isVerbEnt);
            phones = [];
            gr.forEach(function (u) { splitPhones(u.p).forEach(function (p) { phones.push(p); }); });
        }

        /* Apostrophes are silent but are punctuation, not silent letters. */
        var silent = gr.filter(function (u) { return u.p === '' && !u.punct; })
                       .map(function (u) { return u.g; });
        var nasals = phones.filter(function (p) { return NASAL.indexOf(p) >= 0; });

        return {
            word: word,
            graphemes: gr,
            ipa: '/' + phones.join('') + '/',
            syllables: syllabify(phones),
            silent: silent,
            nasals: Array.from(new Set(nasals)),
            fromLexicon: Object.prototype.hasOwnProperty.call(LEXICON, key)
        };
    }

    /* Split an IPA string into phones, keeping combining tildes attached. */
    function splitPhones(s) {
        var out = [];
        for (var i = 0; i < s.length; i++) {
            var ch = s[i];
            if (s[i + 1] === '̃') { out.push(ch + '̃'); i++; }
            else out.push(ch);
        }
        return out.filter(function (p) { return p !== ''; });
    }

    /* ------------------------------------------------------------------
       Liaison
       ------------------------------------------------------------------ */
    var LIAISON_SOUND = { s: 'z', x: 'z', z: 'z', d: 't', t: 't', n: 'n', p: 'p', g: 'k', r: 'ʁ' };
    /* What the final letter would sound like if it WERE pronounced. Used to decide
       whether it is silent — the grapheme list is unavailable for lexicon words. */
    var FINAL_PHONE = { s: 's', x: 's', z: 'z', d: 'd', t: 't', n: 'n', p: 'p', g: 'ɡ', r: 'ʁ' };

    /* The list is stored in the singular; strip a plural -s/-x so "les haricots" and
       "les héros" are recognised too. */
    function isHAspire(word) {
        var w = word.toLowerCase();
        if (H_ASPIRE.indexOf(w) >= 0) return true;
        return H_ASPIRE.indexOf(w.replace(/[sx]$/, '')) >= 0;
    }

    function startsWithVowelSound(word) {
        var w = word.toLowerCase();
        if (isV(w[0])) return true;
        if (w[0] === 'h') return !isHAspire(w);   // h muet links, h aspiré blocks
        return false;
    }

    function finalConsonantIsSilent(word, opts) {
        var w = word.toLowerCase();
        var last = w[w.length - 1];
        var phone = FINAL_PHONE[last];
        if (!phone) return false;
        var ipa = analyse(word, opts).ipa.replace(/\//g, '');
        return ipa.slice(-phone.length) !== phone;
    }

    function liaisonBetween(a, b, opts) {
        var wa = a.toLowerCase(), wb = b.toLowerCase();
        var last = wa[wa.length - 1];
        if (!LIAISON_SOUND[last]) return null;

        /* Nothing links forward unless the consonant is silent on its own: "avec elle"
           and "bonjour ami" already pronounce their final consonant. */
        if (!finalConsonantIsSilent(a, opts)) return null;

        /* Report the blocked cases explicitly — a learner needs to know that "les
           héros" is a deliberate non-liaison, not an oversight. Checked before the
           vowel test, since h aspiré words start with a letter that looks vocalic. */
        if (wb[0] === 'h' && isHAspire(wb)) {
            return { a: a, b: b, sound: null, kind: 'forbidden', why: 'h aspiré' };
        }
        if (!startsWithVowelSound(wb)) return null;
        if (wa === 'et') return { a: a, b: b, sound: null, kind: 'forbidden', why: 'never after "et"' };

        var kind = LIAISON_OBLIGATORY.indexOf(wa) >= 0 ? 'obligatory' : 'optional';
        return { a: a, b: b, sound: LIAISON_SOUND[last], kind: kind, why: null };
    }

    /* ------------------------------------------------------------------
       Chunking (Chrome truncates utterances past ~15s)
       ------------------------------------------------------------------ */
    var MAX_CHARS = 180;

    function chunk(text) {
        var sentences = text.match(/[^\n.!?]*[.!?]+\s*|[^\n.!?]+|\n+/g) || [];
        var out = [];
        sentences.forEach(function (raw) {
            var s = raw.trim();
            if (!s) return;
            while (s.length > MAX_CHARS) {
                var cut = s.lastIndexOf(',', MAX_CHARS);
                if (cut < MAX_CHARS * 0.4) cut = s.lastIndexOf(' ', MAX_CHARS);
                if (cut <= 0) cut = MAX_CHARS;
                out.push(s.slice(0, cut + 1).trim());
                s = s.slice(cut + 1).trim();
            }
            if (s) out.push(s);
        });
        return out;
    }

    window.FrenchReader = {
        analyse: analyse,
        liaisonBetween: liaisonBetween,
        chunk: chunk,
        H_ASPIRE: H_ASPIRE
    };

    /* ------------------------------------------------------------------
       Page wiring
       ------------------------------------------------------------------ */
    var WORD_RE = /[A-Za-zÀ-ÿŒœ'’]+/g;

    function ready(fn) {
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
        else fn();
    }

    ready(function () {
        var input = document.getElementById('reader-input');
        if (!input) return;   // not the reader page

        var voiceSel = document.getElementById('reader-voice');
        var rate = document.getElementById('reader-rate');
        var rateOut = document.getElementById('reader-rate-value');
        var merger = document.getElementById('reader-merger');
        var playBtn = document.getElementById('reader-play');
        var stopBtn = document.getElementById('reader-stop');
        var display = document.getElementById('reader-display');
        var tbody = document.getElementById('reader-analysis');
        var liaisonBox = document.getElementById('reader-liaisons');
        var summary = document.getElementById('reader-summary');
        var unsupported = document.getElementById('reader-unsupported');

        var synth = window.speechSynthesis;
        var voices = [];
        var queue = [];

        if (!synth || typeof SpeechSynthesisUtterance === 'undefined') {
            unsupported.hidden = false;
            playBtn.disabled = true;
        }

        function opts() { return { unMerger: merger.checked }; }

        function loadVoices() {
            if (!synth) return;
            voices = synth.getVoices().filter(function (v) {
                return v.lang.replace('_', '-').toLowerCase().indexOf('fr') === 0;
            });
            voiceSel.innerHTML = '';
            if (!voices.length) {
                unsupported.hidden = false;
                playBtn.disabled = true;
                return;
            }
            unsupported.hidden = true;
            playBtn.disabled = false;
            voices.forEach(function (v, i) {
                var o = document.createElement('option');
                o.value = String(i);
                o.textContent = v.name + ' (' + v.lang + ')';
                voiceSel.appendChild(o);
            });
        }

        function el(tag, cls, text) {
            var n = document.createElement(tag);
            if (cls) n.className = cls;
            if (text != null) n.textContent = text;
            return n;
        }

        function render() {
            var text = input.value;
            display.innerHTML = '';
            tbody.innerHTML = '';
            liaisonBox.innerHTML = '';

            queue = chunk(text);
            queue.forEach(function (sentence, si) {
                var span = el('span', 'r-sentence');
                span.dataset.i = String(si);
                var last = 0, m;
                WORD_RE.lastIndex = 0;
                while ((m = WORD_RE.exec(sentence))) {
                    if (m.index > last) span.appendChild(document.createTextNode(sentence.slice(last, m.index)));
                    var w = el('span', 'r-word', m[0]);
                    w.dataset.start = String(m.index);
                    w.dataset.end = String(m.index + m[0].length);
                    span.appendChild(w);
                    last = m.index + m[0].length;
                }
                if (last < sentence.length) span.appendChild(document.createTextNode(sentence.slice(last)));
                display.appendChild(span);
                display.appendChild(document.createTextNode(' '));
            });

            /* Word analysis: unique words, in order of first appearance. */
            var words = text.match(WORD_RE) || [];
            var seen = Object.create(null), rows = 0;
            words.forEach(function (w, i) {
                var key = w.toLowerCase();
                if (seen[key] || rows >= 80) return;
                seen[key] = true; rows++;

                var a = analyse(w, opts(), words[i - 1]);
                var tr = document.createElement('tr');

                /* spelling, with silent letters struck through */
                var tdW = document.createElement('td');
                if (a.fromLexicon) {
                    tdW.appendChild(el('span', null, w));
                } else {
                    a.graphemes.forEach(function (g) {
                        var isSilent = g.p === '' && !g.punct;
                        tdW.appendChild(el('span', isSilent ? 'r-silent' : null, g.g));
                    });
                }
                tr.appendChild(tdW);

                var tdI = el('td', 'r-ipa', a.ipa);
                tr.appendChild(tdI);

                var tdS = el('td', null, a.syllables.join(' · '));
                tr.appendChild(tdS);

                var tdN = document.createElement('td');
                tdN.className = 'r-notes';
                if (a.nasals.length) {
                    var nb = el('span', 'r-tag r-tag-nasal', 'nasal ' + a.nasals.join(' '));
                    tdN.appendChild(nb);
                }
                if (a.silent.length) {
                    tdN.appendChild(el('span', 'r-tag r-tag-silent', 'silent ' + a.silent.join(' ')));
                }
                if (a.fromLexicon) tdN.appendChild(el('span', 'r-tag r-tag-lex', 'irregular'));
                tr.appendChild(tdN);

                tbody.appendChild(tr);
            });

            /* Liaisons, scanned across each chunk. */
            var found = 0;
            queue.forEach(function (sentence) {
                var ws = sentence.match(WORD_RE) || [];
                for (var i = 0; i + 1 < ws.length; i++) {
                    var l = liaisonBetween(ws[i], ws[i + 1], opts());
                    if (!l) continue;
                    found++;
                    var row = el('div', 'r-liaison r-liaison-' + l.kind);
                    var pair = el('span', 'r-liaison-pair');
                    pair.appendChild(el('span', null, l.a));
                    pair.appendChild(el('span', 'r-tie', l.sound ? '‿' : ' | '));
                    pair.appendChild(el('span', null, l.b));
                    row.appendChild(pair);
                    row.appendChild(el('span', 'r-tag r-tag-' + l.kind, l.kind));
                    row.appendChild(el('span', 'r-liaison-note',
                        l.sound ? 'linking sound /' + l.sound + '/' : l.why));
                    liaisonBox.appendChild(row);
                }
            });
            if (!found) liaisonBox.appendChild(el('p', 'r-empty', 'No liaisons in this text.'));

            summary.textContent = queue.length + ' chunk' + (queue.length === 1 ? '' : 's') +
                ' · ' + words.length + ' words · ' + rows + ' analysed' +
                (rows >= 80 ? ' (first 80 unique)' : '') + ' · ' + found + ' liaison' + (found === 1 ? '' : 's');
        }

        /* ---- playback ---- */
        function clearMarks() {
            Array.prototype.forEach.call(display.querySelectorAll('.speaking-word, .speaking-sentence'),
                function (e) { e.classList.remove('speaking-word', 'speaking-sentence'); });
        }

        function speakFrom(i) {
            if (i >= queue.length) { finish(); return; }
            var u = new SpeechSynthesisUtterance(queue[i]);
            var v = voices[Number(voiceSel.value)] || voices[0];
            u.voice = v; u.lang = v.lang; u.rate = Number(rate.value);

            var sEl = display.querySelector('.r-sentence[data-i="' + i + '"]');
            clearMarks();
            /* Sentence highlight is the floor; boundary events refine it to the word.
               Remote voices frequently never fire `boundary`. */
            if (sEl) sEl.classList.add('speaking-sentence');

            u.onboundary = function (e) {
                if (e.name && e.name !== 'word') return;
                if (typeof e.charIndex !== 'number' || !sEl) return;
                Array.prototype.forEach.call(sEl.querySelectorAll('.speaking-word'),
                    function (w) { w.classList.remove('speaking-word'); });
                var ws = sEl.querySelectorAll('.r-word');
                for (var k = 0; k < ws.length; k++) {
                    if (e.charIndex >= +ws[k].dataset.start && e.charIndex < +ws[k].dataset.end) {
                        ws[k].classList.add('speaking-word');
                        break;
                    }
                }
            };
            u.onend = function () { speakFrom(i + 1); };
            u.onerror = function () { finish(); };
            synth.speak(u);
        }

        function finish() {
            clearMarks();
            playBtn.textContent = '▶  Lire à voix haute';
            stopBtn.disabled = true;
        }

        playBtn.addEventListener('click', function () {
            if (!queue.length || !voices.length) return;
            synth.cancel();
            playBtn.textContent = '⏸  Lecture…';
            stopBtn.disabled = false;
            speakFrom(0);
        });
        stopBtn.addEventListener('click', function () { synth.cancel(); finish(); });

        display.addEventListener('click', function (e) {
            var w = e.target.closest('.r-word');
            if (!w || !voices.length) return;
            synth.cancel(); finish();
            var u = new SpeechSynthesisUtterance(w.textContent);
            var v = voices[Number(voiceSel.value)] || voices[0];
            u.voice = v; u.lang = v.lang; u.rate = Number(rate.value);
            synth.speak(u);
        });

        input.addEventListener('input', render);
        merger.addEventListener('change', render);
        rate.addEventListener('input', function () { rateOut.textContent = Number(rate.value).toFixed(2) + '×'; });

        if (synth) {
            loadVoices();
            synth.addEventListener('voiceschanged', loadVoices);
        }
        rateOut.textContent = Number(rate.value).toFixed(2) + '×';
        render();
    });
})();
