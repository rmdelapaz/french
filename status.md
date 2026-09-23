# French Course — Build Status

CEFR **A1–A2 complete**: 28 lessons (17 topic + 11 Grammar Essentials) + 5 practice tools.
See `docs/a1-a2-roadmap.md` for the audit that drove the restructure and the conventions to follow.

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

## Deployment
- Netlify: rays-french.netlify.app — static, no build step.
- Hub entry (rayhome sites.json) refreshed for the A1/A2 restructure on 2026-09-22.
