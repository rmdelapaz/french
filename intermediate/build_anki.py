#!/usr/bin/env python3
"""Build an Anki .apkg study deck for the French INTERMEDIATE course (B1-B2).

Sources:
  - vocab-data.js  (window.FRENCH_VOCAB) — the per-lesson review vocabulary.
  - cheatsheet.js  (SHEET) — the survival-phrase cheat sheet.

Every unique French word/phrase becomes one note with two cards:
  1. Recognition:  French (+ pronunciation)  ->  English
  2. Production:   English                     ->  French (+ pronunciation)

Notes are deduplicated case-insensitively by the French text; lesson numbers
and categories are merged into the note's Info field and its tags.

Run:  python3 build_anki.py     (from the intermediate folder; needs `genanki`)
Output: french_intermediate.apkg

IDs are distinct from the beginner deck's so the two decks coexist in Anki
and re-imports update the right one.
"""
import json
import os
import re
import subprocess
import genanki

HERE = os.path.dirname(os.path.abspath(__file__))

# Stable IDs (random-but-fixed so re-imports update instead of duplicating).
MODEL_ID = 1758500021
DECK_ID = 1758500022


def load_vocab():
    raw = open(os.path.join(HERE, "vocab-data.js"), encoding="utf-8").read()
    s = raw.index("{", raw.index("window.FRENCH_VOCAB ="))
    e = raw.rindex("}") + 1
    # tolerate trailing commas (valid JS, not JSON)
    return json.loads(re.sub(r",(\s*[}\]])", r"\1", raw[s:e]))


def load_sheet():
    """Extract the SHEET array literal from cheatsheet.js via node (pure data)."""
    js = (
        "const fs=require('fs');let t=fs.readFileSync('%s','utf8');"
        "let i=t.indexOf('var SHEET =');let start=t.indexOf('[',i);let d=0,end=-1;"
        "for(let j=start;j<t.length;j++){if(t[j]==='[')d++;else if(t[j]===']'){d--;if(d===0){end=j;break;}}}"
        "process.stdout.write(JSON.stringify(eval(t.slice(start,end+1))));"
        % os.path.join(HERE, "cheatsheet.js").replace("\\", "\\\\")
    )
    out = subprocess.check_output(["node", "-e", js])
    return json.loads(out)


def tag(s):
    """Anki tags cannot contain spaces; make a safe token."""
    return re.sub(r"[^A-Za-z0-9]+", "_", s).strip("_")


def main():
    vocab = load_vocab()
    try:
        sheet = load_sheet()
    except Exception as ex:  # cheatsheet is a bonus source; don't fail the deck
        print("note: skipping cheatsheet (%s)" % ex)
        sheet = []

    # note key (lowercased es) -> dict(es, pron, en, lessons:set, cats:set, tags:set)
    notes = {}

    def add(es, pron, en, lesson=None, cat=None, source=None):
        key = es.lower()
        n = notes.get(key)
        if not n:
            n = {"fr": es, "pron": pron or "", "en": en or "",
                 "lessons": set(), "cats": set(), "tags": set()}
            notes[key] = n
        if not n["pron"] and pron:
            n["pron"] = pron
        if lesson:
            n["lessons"].add(int(lesson))
            n["tags"].add("lesson-%s" % lesson)
        if cat:
            n["cats"].add(cat)
            n["tags"].add("cat::" + tag(cat))
        if source:
            n["tags"].add(source)

    for k in sorted([kk for kk in vocab if kk.isdigit()], key=int):
        for w in vocab.get(k, []):
            add(w["fr"], w.get("pron"), w["en"], lesson=k, cat=w.get("cat"), source="vocabulary")
    for cat in sheet:
        for it in cat["items"]:
            add(it[0], it[1], it[2], cat=cat["title"], source="cheat-sheet")

    model = genanki.Model(
        MODEL_ID,
        "French Intermediate (French/English)",
        fields=[
            {"name": "French"},
            {"name": "Pronunciation"},
            {"name": "English"},
            {"name": "Info"},
        ],
        templates=[
            {
                "name": "Recognition (ES -> EN)",
                "qfmt": '<div class="fr">{{French}}</div>'
                        '{{#Pronunciation}}<div class="pron">{{Pronunciation}}</div>{{/Pronunciation}}',
                "afmt": '{{FrontSide}}<hr id="answer">'
                        '<div class="en">{{English}}</div>'
                        '{{#Info}}<div class="info">{{Info}}</div>{{/Info}}',
            },
            {
                "name": "Production (EN -> ES)",
                "qfmt": '<div class="en">{{English}}</div>',
                "afmt": '{{FrontSide}}<hr id="answer">'
                        '<div class="fr">{{French}}</div>'
                        '{{#Pronunciation}}<div class="pron">{{Pronunciation}}</div>{{/Pronunciation}}'
                        '{{#Info}}<div class="info">{{Info}}</div>{{/Info}}',
            },
        ],
        css="""
.card { font-family: -apple-system, 'Segoe UI', Roboto, sans-serif; font-size: 22px;
        text-align: center; color: #1a1a2e; background: #ffffff; padding: 1.2em 0.6em; }
.es   { font-size: 30px; font-weight: 700; color: #3b82f6; }
.pron { font-size: 17px; font-style: italic; color: #e17055; margin-top: .2em; }
.en   { font-size: 24px; color: #1a1a2e; }
.info { font-size: 13px; color: #6b7280; margin-top: .8em; }
hr#answer { border: none; border-top: 1px solid #e5e7eb; margin: .9em 0; }
.nightMode .card { color: #e2e8f0; background: #0f172a; }
.nightMode .es { color: #60a5fa; }
.nightMode .en { color: #e2e8f0; }
.nightMode .info { color: #94a3b8; }
""",
    )

    deck = genanki.Deck(DECK_ID, "French Course (B1-B2 Intermediate)")

    def sort_key(n):
        return (min(n["lessons"]) if n["lessons"] else 99, n["fr"].lower())

    for n in sorted(notes.values(), key=sort_key):
        info_bits = []
        if n["lessons"]:
            info_bits.append("Lesson " + ", ".join(str(x) for x in sorted(n["lessons"])))
        if n["cats"]:
            info_bits.append(" / ".join(sorted(n["cats"])))
        info = " · ".join(info_bits)
        deck.add_note(genanki.Note(
            model=model,
            fields=[n["fr"], n["pron"], n["en"], info],
            tags=sorted(n["tags"]),
        ))

    out = os.path.join(HERE, "french_intermediate.apkg")
    genanki.Package(deck).write_to_file(out)
    print("wrote %s" % out)
    print("unique notes: %d  (cards: %d)" % (len(notes), len(notes) * 2))


if __name__ == "__main__":
    main()
