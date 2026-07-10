/* audio.js — French pronunciation via the Web Speech API.

   GENERATED FILE, but standalone: the CONFIG block below is the only thing that
   differs between courses, and it is safe to edit here directly.

   French is Latin script, so target text cannot be told from the English gloss
   by character set, and no cell carries a lang attribute. Each table's target
   columns are identified from its <th> row instead. Ambiguous headers are skipped:
   speaking an English cell in a French voice is worse than no button.

   If the device has no French voice installed the entire layer hides itself.
   An English voice reading French is worse than no audio at all. */
(function () {
    'use strict';

    var CONFIG = {
        lang: 'fr',
        langName: 'French',
        addLanguageAs: 'Français',
        mode: 'header',
        /* `detect` decides whether a cell holds target text; `pattern` decides what
           gets spoken. They differ where a script's punctuation should be read for
           prosody but must never, on its own, mark a cell as target text. */
        detect: null,
        pattern: null,
        strip: null,
        /* 'header': a table column is target text when its <th> matches this. */
        header: '(français|french|québécois|liaison|france|canada)|^expressions?$|^(masculine|feminine|plural|singular)\\b',
        /* 'rules': explicit selectors, for courses whose table shapes disagree. */
        rules: null,
        rate: 0.85
    };

    var OVERRIDES = {};

    var synth = window.speechSynthesis;
    var HAS = CONFIG.detect ? new RegExp(CONFIG.detect) : null;
    var RUN = CONFIG.pattern ? new RegExp(CONFIG.pattern + '+', 'g') : null;
    var STRIP = CONFIG.strip ? new RegExp(CONFIG.strip, 'g') : null;
    var HEADER = CONFIG.header ? new RegExp(CONFIG.header, 'i') : null;
    /* A cell with no letters (an em-dash, a number, an empty spacer) is not speakable. */
    var SPEAKABLE = /[A-Za-zÀ-ɏ]/;

    var voice = null;
    var activeBtn = null;

    function findVoice() {
        var voices = synth.getVoices();
        if (!voices.length) return null;
        /* Voice.lang is 'ru-RU' on most platforms but 'ru_RU' on some Android builds. */
        var matches = voices.filter(function (v) {
            return v.lang.replace('_', '-').toLowerCase().indexOf(CONFIG.lang) === 0;
        });
        if (!matches.length) return null;
        /* Prefer a local voice: no network round-trip, works offline. */
        var local = matches.filter(function (v) { return v.localService; });
        return (local[0] || matches[0]);
    }

    /* Keep only target-script runs, so '기역 (giyeok)' speaks as '기역' and a
       transliteration column is never read aloud. Runs join with a space so
       '야채 / 채소' reads as two words. */
    function extractTarget(text) {
        if (!RUN) return text.trim();
        var runs = text.match(RUN);
        if (!runs) return '';
        var out = runs.join(' ');
        return STRIP ? out.replace(STRIP, '') : out;
    }

    function speak(text) {
        if (!voice || !text) return null;
        synth.cancel();
        var u = new SpeechSynthesisUtterance(text);
        u.voice = voice;
        u.lang = voice.lang;
        u.rate = CONFIG.rate;
        return u;
    }

    function speakPlain(text) {
        var u = speak(text);
        if (u) synth.speak(u);
    }

    function clearActive() {
        if (activeBtn) activeBtn.classList.remove('speaking');
        activeBtn = null;
    }

    function speakFromButton(btn) {
        var u = speak(btn.dataset.speak);
        if (!u) return;
        clearActive();
        activeBtn = btn;
        btn.classList.add('speaking');
        u.onend = u.onerror = clearActive;
        synth.speak(u);
    }

    function makeButton(text) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'audio-btn';
        btn.dataset.speak = text;
        btn.textContent = '🔊';
        btn.setAttribute('aria-label', 'Listen to ' + text);
        btn.title = 'Listen';
        return btn;
    }

    function attachByUnicode() {
        Array.prototype.forEach.call(document.querySelectorAll('td'), function (cell) {
            if (cell.closest('.no-audio')) return;
            if (cell.querySelector('.audio-btn')) return;
            if (!HAS.test(cell.textContent)) return;

            var raw = extractTarget(cell.textContent);
            if (!raw) return;
            cell.appendChild(makeButton(OVERRIDES[raw] || raw));
        });
    }

    function place(el, text) {
        var btn = makeButton(OVERRIDES[text] || text);
        /* Inside a cell the button trails the text; after an inline <strong> it must
           sit beside the word, not swallow the rest of the cell. */
        if (el.tagName === 'TD') el.appendChild(btn);
        else el.insertAdjacentElement('afterend', btn);
    }

    /* Map each table's target columns from its header row, then button those cells.
       Column position is not fixed: some tables pair two target/gloss columns
       side by side, and grammar tables put the target in columns 2..5. */
    function attachByHeader() {
        Array.prototype.forEach.call(document.querySelectorAll('table'), function (table) {
            var rows = table.rows;
            if (!rows.length) return;

            var head = null;
            for (var i = 0; i < rows.length; i++) {
                if (rows[i].querySelector('th')) { head = rows[i]; break; }
            }
            if (!head) return;

            var cols = [];
            Array.prototype.forEach.call(head.cells, function (cell, idx) {
                if (cell.tagName === 'TH' && HEADER.test(cell.textContent.trim())) cols.push(idx);
            });
            if (!cols.length) return;

            Array.prototype.forEach.call(rows, function (row) {
                if (row === head) return;
                cols.forEach(function (idx) {
                    var cell = row.cells[idx];
                    if (!cell || cell.tagName !== 'TD') return;
                    if (cell.closest('.no-audio') || cell.querySelector('.audio-btn')) return;
                    var text = cell.textContent.trim();
                    if (!SPEAKABLE.test(text)) return;
                    place(cell, text);
                });
            });
        });
    }

    function attachByRules() {
        CONFIG.rules.forEach(function (rule) {
            Array.prototype.forEach.call(document.querySelectorAll(rule.selector), function (el) {
                if (el.closest('.no-audio')) return;
                var host = el.tagName === 'TD' ? el : el.parentElement;
                if (!host || host.querySelector('.audio-btn')) return;
                var text = el.textContent.trim();
                if (!SPEAKABLE.test(text)) return;
                place(el, text);
            });
        });
    }

    function attachOptedIn() {
        /* Explicit data-speak markers outside tables. Interactive elements are skipped:
           a data-speak <button> (e.g. a clickable diagram) would otherwise receive a
           nested <button>, which is invalid HTML and fires the delegated handler twice. */
        Array.prototype.forEach.call(document.querySelectorAll('[data-speak]'), function (el) {
            if (el.classList.contains('audio-btn')) return;
            if (el.closest('button, a')) return;
            if (el.querySelector('.audio-btn')) return;
            el.appendChild(makeButton(el.dataset.speak));
        });
    }

    function attachButtons() {
        if (CONFIG.mode === 'unicode') attachByUnicode();
        else if (CONFIG.mode === 'header') attachByHeader();
        else if (CONFIG.mode === 'rules') attachByRules();
        attachOptedIn();
    }

    function addNotice() {
        if (document.querySelector('.audio-notice')) return;
        var wrap = document.querySelector('.content-wrap') || document.body;
        var first = wrap.querySelector('h1');
        var note = document.createElement('p');
        note.className = 'audio-notice';
        note.innerHTML = '🔇 <strong>No ' + CONFIG.langName + ' voice found on this device.</strong> ' +
            'Audio playback is hidden. To enable it, install a ' + CONFIG.langName +
            ' language pack (Windows: Settings → Time &amp; Language → Language → ' +
            'Add a language → ' + CONFIG.addLanguageAs + '), then reload.';
        if (first && first.parentNode) first.parentNode.insertBefore(note, first.nextSibling);
        else wrap.insertBefore(note, wrap.firstChild);
    }

    function init() {
        voice = findVoice();
        if (!voice) {
            document.documentElement.classList.add('no-tts-voice');
            return;
        }
        document.documentElement.classList.remove('no-tts-voice');
        attachButtons();
    }

    /* Delegated, so buttons injected later still work. site-nav.js binds one
       listener per element at load; nothing here may rely on that. */
    document.addEventListener('click', function (e) {
        var btn = e.target.closest && e.target.closest('.audio-btn');
        if (btn) speakFromButton(btn);
    });

    var api = {
        speak: speakPlain,
        available: function () { return !!voice; },
        syllableFor: function (t) { return OVERRIDES[t] || t; }
    };
    window.CourseAudio = api;
    window.CourseAudio = api;

    if (!synth || typeof SpeechSynthesisUtterance === 'undefined') {
        document.documentElement.classList.add('no-tts-voice');
        document.addEventListener('DOMContentLoaded', addNotice);
        return;
    }

    /* getVoices() is empty on first call in Chrome and fires voiceschanged once the
       list is populated. Firefox populates synchronously.

       voiceschanged can fire several times: local voices arrive first, remote ones
       later. Keep listening until a French voice actually turns up — detaching on
       the first event would permanently give up on a device whose voice is simply
       slow to register. */
    function onVoices() {
        init();
        if (voice) synth.removeEventListener('voiceschanged', onVoices);
    }

    function boot() {
        addNotice();
        init();
        if (!voice) {
            synth.addEventListener('voiceschanged', onVoices);
            setTimeout(init, 1200);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
