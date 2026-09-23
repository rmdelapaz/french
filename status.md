# French Course — Build Status

CEFR **A1–B2 complete**: two tiers.
- **A1–A2** (site root): 28 lessons (17 topic + 11 Grammar Essentials) + 5 practice tools.
- **B1–B2** (`/intermediate/`): 26 lessons (13 B1 + 13 B2) + 5 practice tools.

See `docs/a1-a2-roadmap.md` and `intermediate/docs/b1-b2-roadmap.md` for the audits that drove each
tier and the conventions to follow.

## Infrastructure
- [x] styles/main.css (France/Canada callouts, dialect-compare grid, A1/A2 tier headers + level badges,
      grammar-lesson styling, learn-layer token aliases)
- [x] styles/learn.css (learning layer + `.practice-section` + `.lx-meta`)
- [x] site-nav.js (header, dark mode, content-wrap, quiz logic)
- [x] audio.js (French TTS, header-driven table detection, `data-speak`)
- [x] learn.js (progress bar, objectives, summary, vocabulary review + Leitner SRS, flashcards,
      auto-generated quiz, exercise checking, journal + export, mark-complete)
- [x] vocab-data.js — 529 words, 28 lessons
- [x] lesson-content.js — objectives + summaries + time + CEFR level, 28 lessons
- [x] add_footer_nav.py (LESSONS list = the canonical lesson order; re-run with `--apply --no-backup`)
- [x] build_anki.py → french_course.apkg (576 notes / 1,152 cards)
- [x] images/vocab/ — 97 web-ready WebP vocabulary illustrations (512×512, ~2.1 MB total):
      **90 reused** from the sibling courses (ESL 62 · Spanish 24 · Tagalog 4) + **7 generated
      for this course** (see "Bespoke illustrations" below). That set is slugged by
      *English concept* (`apple.webp`, `bus-stop.webp`), not by an English word form, so the art is
      language-neutral and matches French entries through their `en` gloss.
      Copied into this repo rather than referenced cross-origin, so the site stays self-contained
      and independently deployable (see the shared-image decision: share the SOURCE, not the runtime).
      Re-sync after adding vocabulary:
      `for s in $(grep -o '"img": "[^"]*"' vocab-data.js | cut -d'"' -f4 | sort -u); do
         cp ~/projects/esl/images/vocab/$s.webp images/vocab/; done`

## Lessons — A1 (1–15)
- [x] 1. french_alphabet_pronunciation — alphabet, accents, nasals, liaison, silent letters
- [x] 2. french_greetings_essentials — greetings, tu/vous, introductions, politeness
- [x] 3. french_france_vs_canada — 🇫🇷/🇨🇦 pronunciation, vocabulary, joual, sacres
- [x] 4. french_grammar_nouns_articles — gender, definite/indefinite/partitive, de-rule, plurals
- [x] 5. french_grammar_etre_avoir — pronouns, être/avoir/aller/faire, c'est vs il est, il y a
- [x] 6. french_numbers_time_dates — numbers, base-20, clock, days, months, dates
- [x] 7. french_grammar_present_tense — -er/-ir/-re, spelling changes, irregulars, two verbs
- [x] 8. french_family_descriptions — family, appearance, personality, agreement
- [x] 9. french_grammar_adjectives_adverbs — agreement, BANGS, -ment adverbs, comparatives
- [x] 10. french_grammar_negation_questions — ne…pas family, three question forms, si
- [x] 11. french_food_dining — meals, ordering, café culture, poutine vs coq au vin
- [x] 12. french_grammar_possessives_quantities — mon/ma/mes, ce/cette/ces, quantity + de
- [x] 13. french_shopping_money — stores, prices, sizes, payment, dépanneur, taxes
- [x] 14. french_home_household_routines — housing, rooms, furniture, chores, renting
- [x] 15. french_grammar_reflexives_commands — reflexives, imperative, polite conditional

## Lessons — A2 (16–28)
- [x] 16. french_directions_transportation — directions, Métro/TGV/STM, tickets
- [x] 17. french_grammar_future — aller + inf, futur simple, venir de, quand + futur
- [x] 18. french_hobbies_daily_life — hobbies, jouer à/de, routines, invitations
- [x] 19. french_grammar_passe_compose — avoir/être, participles, agreement, negation
- [x] 20. french_health_body — body, symptoms, doctor/pharmacy, emergencies
- [x] 21. french_grammar_imparfait — imparfait, PC vs imparfait, narration
- [x] 22. french_weather_seasons — weather, temperature, seasons, Canadian winter
- [x] 23. french_grammar_pronouns_linking — COD/COI, y, en, stressed, qui/que/où, connectors
- [x] 24. french_work_education — jobs, workplace, lycée/CÉGEP/grandes écoles
- [x] 25. french_technology_communication — devices, courriel vs mail, texting, social media
- [x] 26. french_emotions_relationships — emotions, relationships, la bise, chum/blonde
- [x] 27. french_travel_culture_france — airport, hotels, regions, etiquette, holidays
- [x] 28. french_travel_culture_canada — Québec, Acadia, festivals, Loi 101, expressions

## Practice tools
- [x] cando.html — 62 CEFR A1/A2 can-do descriptors, linked to lessons, progress bars
- [x] glossary.html — 519 searchable rows with audio + review-deck buttons
- [x] cheatsheet.html — 10 situations of survival phrases, print-optimised
- [x] readings.html — 6 graded pieces, 47 lines, 18 comprehension questions
- [x] french_reader.html — type-any-text pronunciation reader
- [x] french_course.apkg — Anki deck

## Vocabulary illustrations (A1/A2 only)

`learn.js` already supported this — `vocabImg()` renders `/images/vocab/<img>.webp?v=VOCAB_IMG_VER`
in the "Words You Learned" review list and on the flashcard face, and `styles/learn.css` already had
`.lx-word-img` / `.lx-flash-img` (incl. a dark-mode variant). The capability was simply dormant: no
`images/` folder and no `img` fields. Reusing the ESL art activated it with **no engine changes**.

- **109 `img` fields** across **17 of the 28 beginner lessons**, drawing on **97 distinct images**
  (some are shared — `email` ×3, `shop` ×4, `happy`, `expensive`, `bill`, `bathroom`, `angry` ×2).
- Matching is by normalised English gloss (strip articles, leading `to `, parentheticals), plus a
  small hand-checked synonym map (`soccer`→`football`, `swimming`→`swim`, `a train station`→`station`).
- **The B1–B2 tier gets none, deliberately.** Only 2 of its 520 entries matched anything, because
  intermediate vocabulary is grammar metalanguage and abstract terms (*que je sois*, *bien que*,
  *la concordance des temps*). Two illustrations in 520 entries would read as an inconsistency, not
  a feature. `intermediate/vocab-data.js` has no `img` fields.
- Two matches were rejected on review: `traverser` ("to cross") had matched **angry** through the
  British-English sense of *cross*, and `les toilettes` had matched **bathroom** — the same picture
  as *la salle de bains*, which undercuts the lesson that teaches they are separate rooms.
- `"img"` is a trailing key on the entry line, matching the Spanish course's convention. It is
  ignored by `build_anki.py` (which parses this file as JSON) and by `glossary.js`, so the Anki deck
  and glossary are unchanged.

## Reuse pool: check ALL THREE sibling courses, not just ESL

There are three existing art sets and they share **the same house style** (512×512, warm-cream
#FFF3E0), so they are freely interchangeable — but they are **slugged in different languages**, which
is why a naive filename comparison shows almost no overlap:

| course | files | slugged by | e.g. |
|---|---|---|---|
| `~/projects/esl/images/vocab/` | 154 | **English concept** | `apple.webp`, `bus-stop.webp` |
| `~/projects/spanish/images/vocab/` | 125 | Spanish word | `casa.webp`, `computadora.webp` |
| `~/projects/tagalog/images/vocab/` | 116 | Tagalog word | `bahay.webp`, `pamilya.webp` |

Translated to English concepts they form a pool of **259 distinct concepts**, of which **105 are NOT
in the ESL set**. Matching only against ESL therefore misses roughly 40% of the available art.
**Rebuild the Spanish/Tagalog filename→concept maps before any future reuse pass** — they are cheap
to write from the filename lists and are the whole trick.

Filled from Spanish/Tagalog on this pass (28 concepts → 29 entries): lunch, dinner, breakfast, tip,
family, parents, kind, good, straight-ahead, far, subway, cough, pharmacy, prescription, medicine,
sun, rain, autumn, meeting, salary, schedule, engineer, university, screen, password, video-call,
friend, double-room.

Rejected on review even though art existed: `vraiment` → *talaga*/*hindi-nga* (a thinking pose and a
shocked face — too ambiguous for "really"), `délicieux` → *masarap* (a Filipino plate, culturally
off-key in a French food lesson), and `les toilettes` → *bathroom* (already rejected: it duplicates
*la salle de bains* in a lesson that teaches they are separate rooms).

## Bespoke illustrations generated for this course (2026-09-22)

Seven images were generated with ChatGPT. **Five were genuinely absent from all three sibling
sets** (`short`, `car`, `poutine`, `sugar-shack`, `bakery`); two (`house`, `computer`) duplicated
art that already existed in Spanish/Tagalog and would have been avoided by running the
cross-course audit above FIRST. Note `small`/`pequeño`/`maliit` are the same mouse in all three
sets, so `short` really did have to be drawn and dropped into the same
`images/vocab/` folder. **Use the course's canonical prompt** — it lives in Ray's ChatGPT history
(chat "Manga Supermarket Illustration") and is the reason the whole set matches:

> Same manga style, palette, line weight and flat warm-cream (#FFF3E0) background as the previous
> image. STYLE: A clean modern anime/manga illustration, cel-shaded with bold even black outlines of
> consistent medium weight. Two-tone soft cel shading, no photorealism, no heavy gradients. Bright
> cheerful lightly-saturated colors, soft light from the top-left. Background: a single flat pastel
> warm-cream tint (#FFF3E0) with one subtle soft radial highlight behind the subject - no scene, no
> patterns, no gradient bands. Composition: one single subject, centered, fully visible, about 10%
> empty margin on all sides, square 1:1 framing, eye-level straight-on or slight 3/4 angle. No text,
> no letters, no numbers, no labels, no speech bubbles, no watermark, no border or frame. Simple,
> friendly. Output a square 1024x1024 image. SUBJECT: `<subject>`

| slug | replaces / adds | wired to |
|---|---|---|
| `short` | **replaces the mouse** (`small.webp`, deleted) | `petit(e)` — a short adult beside a tall one, so it pairs with `grand(e)`'s height comparison |
| `car` | new | `un char` 🇨🇦 + `une voiture` — the flagship 🇫🇷/🇨🇦 contrast in L3 |
| `house` | **avoidable** — Spanish `casa` / Tagalog `bahay` already existed | `la maison` (L4) + `une maison` (L14) |
| `poutine` | new | `une poutine` (L28) |
| `sugar-shack` | new | `une cabane à sucre` (L11 + L28) |
| `bakery` | new | `une boulangerie` (L13) |
| `computer` | **avoidable** — Spanish `computadora` already existed | `un ordinateur` (L25) |

Pipeline (Playwright MCP → ChatGPT, Ray's logged-in `.pw-chrome` profile): submit prompt, wait
~3–5 min, grab the LAST `img` whose `src` contains `estuary/content` with `naturalWidth >= 800`,
`fetch` it **inside the browser** (carries auth cookies) → `btoa` → save, then
`.gen_scratch/french/place_vocab.py <b64> <slug>` (square-crop → 512 → WebP q82) and
`.gen_scratch/french/set_img.py <slug> "<fr>" ...` to wire entries by exact `fr` match.

**Rules learned the hard way:** generate **one at a time** (parallel tabs cause failures); keep them
in **one chat** so "same as the previous image" anchors the style; compare the new image's `id=` to
the previous last image before fetching, or you silently re-download the earlier picture; and check
the semantics before wiring — a house image was briefly attached to `un appartement`, which is wrong.

## Design pattern notes
- Lesson page: `<h1>` → (learn.js injects objectives) → topic sections with tables →
  `.dialect-compare` 🇫🇷/🇨🇦 boxes → `.practice-section` exercises → quiz →
  (learn.js injects summary, vocabulary review, self-check, journal, mark-complete) → footer nav.
- **Never** hand-write "What You'll Learn" or "Key Takeaways" into a lesson — they come from
  `lesson-content.js`, or the page will show two of each.
- Vocabulary tables must head their first two columns `French` and `Pronunciation`, or audio.js
  will not attach 🔊 buttons.
- Exercise items need `_____` **and** an inline `(Answer: x)`, one blank per `<li>`; accent-free
  alternatives go after a `|`.

---

# Intermediate Tier (B1–B2) — `/intermediate/`

**26 lessons**, count justified in `intermediate/docs/b1-b2-roadmap.md` §4 (not the siblings' default
24: −5 because A1/A2 already closed object pronouns, commands, reflexives, the two pasts and basic
relatives; +7 for the subjunctive's three lessons, the four structures with no Spanish counterpart,
the passé simple, the register/argot split and the Québécois deep dive).

## Shared with the beginner tier (NOT copied or forked)
- `/learn.js` — already tier-aware: detects `/intermediate/`, switches to the `french-int-`
  localStorage namespace and resolves `french_lesson_N`.
- `/glossary.js` — same detection, uses `french-int-srs`.
- `/site-nav.js`, `/audio.js`, `/styles/main.css`, `/styles/learn.css`, `/favicon.png`.

## Per-tier files
- [x] `intermediate/vocab-data.js` — 520 words across 26 lessons, + titles and levels maps (no
      `slugs` map: pages are numbered, so learn.js/cando.js fall back to `french_lesson_N.html`)
- [x] `intermediate/lesson-content.js` — 156 objectives + 156 summary points, + time and CEFR level
- [x] `intermediate/index.html` — B1/B2 tier headers, 26 cards, tools grid, back-link to A1–A2
- [x] `intermediate/cando.js` + `cando.html` — 90 descriptors, own key **`french-int-cando`**
- [x] `intermediate/cheatsheet.js` + `cheatsheet.html` — 17 categories / 134 rows (grammar, not
      survival phrases)
- [x] `intermediate/readings.js` + `readings.html` — 8 pieces, 62 lines, 24 questions
- [x] `intermediate/glossary.html` — loads the **shared** `/glossary.js` with tier vocab
- [x] `intermediate/build_anki.py` → `french_intermediate.apkg` (603 notes / 1,206 cards);
      own `MODEL_ID 1758500021` / `DECK_ID 1758500022`, distinct from the beginner deck's
- [x] Footer prev/next chain is **hand-written static HTML** in each page. The root
      `add_footer_nav.py` governs the beginner tier only — its `LESSONS` list was not touched.

## Lessons — B1 (1–13)
- [x] 1. Le Plus-que-parfait — forms, PQP/PC/imparfait, si seulement, après avoir
- [x] 2. Le Futur Antérieur — forms, quand/dès que/une fois que + futur, supposition
- [x] 3. Le Conditionnel — présent & passé, advice/reproach, journalistic conditional
- [x] 4. Les Phrases avec Si — all three types, mixed, si ≠ whether
- [x] 5. Le Subjonctif Présent — ils- stem, eight irregulars, three trigger families
- [x] 6. Le Subjonctif — conjunctions, impersonals, superlatives, ne explétif
- [x] 7. Le Subjonctif Passé — mood decision procedure, dodging the subjunctive
- [x] 8. Relative Pronouns — dont, lequel/auquel/duquel, ce qui/ce que/ce dont, où
- [x] 9. Verbs + à / de / bare infinitive — three patterns, two-object verbs, y vs en
- [x] 10. Participle Agreement with avoir — preceding COD, que, reflexives, invariables
- [x] 11. The Passive, on, se faire — par vs de, pronominal passive
- [x] 12. Participe Présent, Gérondif & Adjectif Verbal — one ending, three jobs
- [x] 13. Le Discours Indirect — back-shift map, reported questions and commands

## Lessons — B2 (14–26)
- [x] 14. Le Faire Causatif — pronoun placement, fait invariable, laisser/voir/entendre
- [x] 15. Negation & Restriction — ne… que, guère/nullement, ni…ni, dropped ne
- [x] 16. The Register Ladder — soutenu/courant/familier as grammar, on vs nous, tu/vous
- [x] 17. Argot, Verlan & Screen French — verlan mechanics, core argot, SMS
- [x] 18. Reading Literary & Journalistic French — passé simple, passé antérieur, headlines
- [x] 19. Building & Decoding Vocabulary — affixes, gender from suffix, nominalisation, faux amis
- [x] 20. Idioms & Expressions Figées — body/animal/food, proverbs, register
- [x] 21. Argumentation, Opinion & Debate — thèse/antithèse/synthèse, concede-then-rebut
- [x] 22. Formal Writing — formule d'appel & de politesse, courriel, model complaint
- [x] 23. Le CV & la Lettre de Motivation — sections, action verbs, vous–moi–nous, 🇫🇷/🇨🇦
- [x] 24. Understanding Authentic Media — connected speech, news, film, source reliability
- [x] 25. Le Français Québécois — affrication, joual, lexicon, sacres, loi 101
- [x] 26. DELF B1 & B2 — four papers, note éliminatoire, strategy, study plan (capstone)

**Content:** 26 lessons, ~30,100 words, 104 exercise groups (4 per lesson), 78 quiz questions,
and a 🇫🇷/🇨🇦 `.dialect-compare` box in every lesson.

## QA (headless Chromium, `python3 -m http.server 8461` from the french folder)
All 31 intermediate pages + the 33 beginner pages load with **0 console errors**; objectives render
below the `<h1>` on all 26 lessons (exactly one objectives box and one summary box each); every
exercise group scores **N/N** on reveal-then-check; no answer-key leaks and no raw `_____` visible;
**0 broken links** across 67 internal targets; prev/next chain and `<h1>` numbering verified 1→26
(lesson 1 back to `/index.html`, lesson 26 on to `cando.html`); light, dark and 390px mobile all
clean; localStorage namespaces verified isolated (`french-*` vs `french-int-*`) in fresh contexts.

**Shared-CSS fix made during QA:** `.g-select` had no `max-width`, so a long lesson-title option in
the glossary filter forced the flex row — and the page — past the viewport (125px overflow on the
**beginner** glossary too, a pre-existing bug). Fixed in `styles/learn.css` + `.table-wrap` in
`styles/main.css`; both tiers now 0px overflow at 390px.

---

## Deployment
- Netlify: rays-french.netlify.app — static, no build step. Intermediate tier at
  `rays-french.netlify.app/intermediate/`.
- Hub entries (rayhome sites.json): A1/A2 refreshed 2026-09-22; a **second** entry for
  "French Intermediate (B1–B2)" added 2026-09-22.
