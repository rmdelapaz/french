# French A1/A2 — Audit & Build Roadmap

_Written 2026-09-22 before the A1/A2 restructure. Read this before touching the beginner tier._

## 1. What the course was

16 hand-authored topic pages + a pronunciation reader tool, a flat 1–17 grid on `index.html`,
`site-nav.js` (header/dark-mode/quiz), `audio.js` (TTS), `reader.js`. Content quality is good and the
🇫🇷/🇨🇦 dialect-compare angle is a genuine differentiator that no sibling course has.

## 2. What was missing for a *proper* A1/A2

Audited against a standard CEFR A1–A2 French syllabus and against the sibling
[[spanish-course-project]] beginner tier (23 lessons + learning layer + companions).

**A. No grammar track at all.** A grep over all 16 pages found **zero** coverage of:
passé composé · imparfait · futur proche / futur simple · partitive articles (du/de la/des) ·
noun gender & article system · negation (ne…pas and friends) · question formation beyond stock
phrases · object pronouns (le/la/les, lui/leur) · y and en · possessives · demonstratives ·
comparatives/superlatives · the imperative · prepositions with places. Adjective agreement and
reflexive verbs appeared only as asides inside topic lessons. A learner finishing all 16 pages could
say memorised phrases but could not **build a sentence** — that is not A1/A2 complete.

**B. Topic gap.** No home / household / daily-routine lesson (the sibling courses all have one);
"Hobbies & Daily Life" covers leisure, not rooms, furniture, chores or housing vocabulary.

**C. No learning layer.** No vocabulary review, spaced repetition, flashcards, self-check quiz,
objectives box, lesson summary, journal, or progress tracking. Only static multiple-choice quizzes.

**D. No companions.** No glossary, cheat sheet, CEFR can-do checklist, or graded readings.

**E. No CEFR framing.** The index was a flat 1–17 list with no A1 vs A2 signalling and no
statement of what the course actually certifies you can do.

**F. Thin lessons.** Six topic pages sit under 1,000 words (technology 752, weather 815, health 870,
hobbies 944, work 958, directions 963) and **no** lesson had a written practice exercise.

## 3. Build plan (what this restructure ships)

### 3.1 New "Grammar Essentials" sub-track — 11 lessons

Count justified per [[course-size-sop]]: French A1/A2 carries a heavier grammatical load than the
Spanish sibling's 7 grammar lessons, because of three things Spanish does not have — (1) a
gender + **partitive** article system where the article changes after negation and quantity,
(2) **two** past tenses that A2 must contrast (passé composé vs imparfait) plus a split
avoir/être auxiliary, (3) the pronoun set **y** and **en** on top of direct/indirect objects.
Collapsing these into 7 would mean 4,000-word lessons; 11 keeps each at one sitting.

| # | Slug | CEFR | Covers |
|---|------|------|--------|
| G1 | `french_grammar_nouns_articles` | A1 | gender, le/la/les, un/une/des, du/de la/des, de after negation & quantity, plurals |
| G2 | `french_grammar_etre_avoir` | A1 | subject pronouns, être · avoir · aller · faire, c'est vs il est, il y a, avoir expressions |
| G3 | `french_grammar_present_tense` | A1 | -er / -ir / -re regulars, spelling-change -er verbs, top irregulars, on |
| G4 | `french_grammar_adjectives_adverbs` | A1–A2 | agreement, BANGS placement, irregular forms, adverb formation & position, comparatives & superlatives |
| G5 | `french_grammar_negation_questions` | A1 | ne…pas/jamais/plus/rien/personne, intonation vs est-ce que vs inversion, question words |
| G6 | `french_grammar_possessives_quantities` | A1 | mon/ma/mes…, ce/cet/cette/ces, beaucoup de, un peu de, trop de, counting containers |
| G7 | `french_grammar_reflexives_commands` | A1–A2 | reflexive verbs & daily routine, the imperative, je voudrais / pourriez-vous (polite conditional) |
| G8 | `french_grammar_future` | A1–A2 | aller + infinitive, futur simple, venir de + infinitive, future time markers |
| G9 | `french_grammar_passe_compose` | A2 | avoir & être auxiliaries, past participles, agreement, negation, word order |
| G10 | `french_grammar_imparfait` | A2 | imparfait forms, imparfait vs passé composé, narrating a story |
| G11 | `french_grammar_pronouns_linking` | A2 | le/la/les, lui/leur, y, en, order; stressed pronouns; qui/que/où; connectors |

### 3.2 New topic lesson

| Slug | CEFR | Covers |
|------|------|--------|
| `french_home_household_routines` | A1–A2 | housing types, rooms, furniture, chores, renting 🇫🇷/🇨🇦, daily routine in the home |

### 3.3 Learning layer (ported from the Spanish course, adapted)

- `learn.js` + `styles/learn.css` — progress bar, "What You'll Learn" objectives, "Words You Learned"
  review with audio + Leitner spaced repetition, flashcard mode, auto-generated self-check quiz,
  gap-fill exercise checking, autosaving journal + Markdown export, mark-complete + course progress.
  localStorage namespace `french-` (tier-aware, so a future B1/B2 tier can reuse the same file).
- `vocab-data.js` — `window.FRENCH_VOCAB` = titles + slugs + per-lesson `{fr, pron, en}` arrays.
- `lesson-content.js` — `window.FRENCH_LESSON_INFO` = objectives + summary per lesson.

### 3.4 Companions

`glossary.html` (auto from vocab-data, searchable) · `cheatsheet.html` (survival phrases by
situation) · `cando.html` (CEFR A1/A2 can-do checklist with progress) · `readings.html` (graded
A1→A2 passages with comprehension questions).

### 3.5 Index & navigation

`index.html` re-tiered into **A1 Foundations · A2 Building Fluency · Grammar Essentials ·
Culture & Travel · Practice Tools**, with a CEFR "what you'll be able to do" statement, and
per-lesson A1/A2 badges. Footer prev/next chain regenerated over the new order.

### 3.6 Depth pass on existing lessons

Every existing topic lesson gets a written `.practice-section` exercise block (gap-fill with
inline answer keys, checked by the learn layer) and the learn-layer script tags.

## 4. Conventions that future edits must follow

- **Exercise format** (same engine rules as Spanish): a `.practice-section` wrapping a `ul`/`ol`;
  each `<li>` carries `_____` (3+ underscores) **and** an inline `(Answer: X)`; **one blank per li**;
  alternatives with `a|b` — always include an accent-free variant so a missing accent still passes.
- **Vocab data** is the single source for glossary + review + quiz. Add words there, not in HTML.
- **Objectives/summary** come from `lesson-content.js`; do not hand-write them into the page.
- Keep the 🇫🇷/🇨🇦 `.dialect-compare` treatment in every new lesson — it is the course's signature.

---

## 5. Final state (built 2026-09-22)

**28 lessons**, re-sequenced so grammar is interleaved with the topics that use it, not bolted on
the end. A1 = lessons 1–15, A2 = lessons 16–28 (lesson 15 straddles both).

| # | Lesson | Kind | # | Lesson | Kind |
|---|--------|------|---|--------|------|
| 1 | Alphabet & Pronunciation | topic | 15 | Reflexives, Commands & Polite Requests | grammar |
| 2 | Greetings & Essential Phrases | topic | 16 | Directions & Transportation | topic |
| 3 | France vs Canadian French | topic | 17 | Talking About the Future | grammar |
| 4 | Nouns, Gender & Articles | grammar | 18 | Hobbies & Daily Life | topic |
| 5 | Être, Avoir & the Essential Verbs | grammar | 19 | The Passé Composé | grammar |
| 6 | Numbers, Time & Dates | topic | 20 | Health & the Body | topic |
| 7 | The Present Tense | grammar | 21 | The Imparfait & Past-Tense Choice | grammar |
| 8 | Family & Personal Descriptions | topic | 22 | Weather & Seasons | topic |
| 9 | Adjectives, Adverbs & Comparisons | grammar | 23 | Object Pronouns & Linking Ideas | grammar |
| 10 | Negation & Asking Questions | grammar | 24 | Work & Education | topic |
| 11 | Food & Dining | topic | 25 | Technology & Communication | topic |
| 12 | Possessives, Demonstratives & Quantities | grammar | 26 | Emotions & Relationships | topic |
| 13 | Shopping & Money | topic | 27 | Travel & Culture: France | topic |
| 14 | Home, Household & Daily Routines | topic | 28 | Travel & Culture: Québec | topic |

**Data & engine**
- `vocab-data.js` — 529 words across 28 lessons (`{fr, pron, en}`) + titles/slugs/levels maps.
- `lesson-content.js` — 168 objectives and 178 summary points, plus per-lesson time and CEFR level.
  The 16 original lessons' hand-written "What You'll Learn" and "Key Takeaways" blocks were **moved
  here verbatim**, not deleted, and the boxes are now rendered by `learn.js` on all 28 pages alike.
- `learn.js` + `styles/learn.css` — ported from the Spanish course, adapted to `fr` / `french-`.
  One local addition: the objectives box renders an `info.time` + `info.level` meta line (`.lx-meta`).
- `styles/main.css` — gained the learn-layer token aliases (`--bg-primary`, `--text-primary`,
  `--accent`, `--table-header`, …) plus `.tier-header`, `.level-badge` and `.lesson-card.grammar-lesson`.

**Companions:** `cando.html` (62 descriptors), `glossary.html` (519 rows), `cheatsheet.html`
(10 situations), `readings.html` (6 pieces, 47 lines, 18 questions), `french_course.apkg`
(576 notes / 1,152 cards, built by `build_anki.py`).

**Exercises:** every lesson has at least one `.practice-section`; 47 exercise groups course-wide.

**QA (headless Chromium, local `python3 -m http.server`):** all 34 pages load with 0 console errors;
every lesson shows 6 objectives, a summary, its vocabulary review, a generated self-check quiz and
its exercises; every exercise group scores N/N on reveal-then-check; no answer-key leaks; 0 broken
links; prev/next chain and `<h1>` numbering match the order above; light and dark both checked.

**Gotcha worth keeping:** a literal `___` in prose (a quiz stem, a hint) is harmless to the engine but
trips QA regexes — use `…` there and reserve `___` for real exercise blanks. Also: JS-only `\u{...}`
escapes in `vocab-data.js` break `build_anki.py`, which parses that file as JSON — write the character
itself instead.
