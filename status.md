# French Course — Build Status

## Infrastructure
- [x] styles/main.css (with France/Canada callout card styles + dialect-compare grid)
- [x] site-nav.js (16-lesson nav, dark mode, quiz logic, footer)
- [x] index.html (course homepage with 16-lesson grid)
- [x] favicon.png
- [x] favicon.ico

## Lessons (16 total)
- [x] 1. french_alphabet_pronunciation.html — Alphabet, accents, vowels, nasals, consonants, liaison
- [x] 2. french_france_vs_canada.html — Pronunciation, vocab, grammar, slang, tu/vous, sacres
- [x] 3. french_greetings_essentials.html — Bonjour, tu/vous, introductions, polite expressions, la bise
- [x] 4. french_numbers_time_dates.html — 0-1M+, base-20 quirks, time, days, months, dates
- [x] 5. french_family_descriptions.html — Family, possessives, appearance, personality, adjective agreement/BANGS
- [x] 6. french_food_dining.html — Meals, cuisine, restaurants, café culture, poutine vs coq au vin
- [x] 7. french_shopping_money.html — Stores, prices, colors, sizes, payment, dépanneur, tax differences
- [x] 8. french_directions_transportation.html — Directions, landmarks, Métro/TGV/STM, taxis, cycling
- [x] 9. french_health_body.html — Body parts, symptoms, doctor/pharmacy, emergencies, healthcare systems
- [x] 10. french_hobbies_daily_life.html — Hobbies, reflexive verbs, daily routine, jouer à/de, leisure
- [x] 11. french_work_education.html — Jobs, workplace, education systems, CÉGEP, Grandes écoles, false friends
- [x] 12. french_technology_communication.html — Tech vocab, SMS abbreviations, social media, phone, portable ambiguity
- [x] 13. french_weather_seasons.html — Weather expressions, temperature, seasons, Canadian winter vocab, tuque
- [x] 14. french_emotions_relationships.html — Emotions (être/avoir), relationships, love, breakups, friendship, life events, chum/blonde
- [x] 15. french_travel_culture_france.html — Airport, hotels, TGV, regions, dining etiquette, social rules, sightseeing, survival phrases
- [x] 16. french_travel_culture_canada.html — Francophone regions, Montréal/Québec City, Québécois food, festivals, expressions, Loi 101, identity, seasonal tips

## Design Pattern Notes
- Each lesson: h1 title → card-info objectives → topic sections with tables → dialect-compare boxes → exercises → quiz → card-accent summary
- France/Canada callout: .card-france (blue, 🇫🇷) and .card-canada (red, 🇨🇦) throughout
- .dialect-compare grid for side-by-side comparisons
- Follows Korean/Russian site structure (site-nav.js injects header, nav, footer)

## Deployment
- Site hosted on Netlify at rays-french.netlify.app
- All files are static HTML — no build step needed
