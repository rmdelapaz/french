/* lesson-content.js — per-lesson objectives, summaries, time and CEFR level.

   Consumed by learn.js to render the "What You'll Learn" box at the top of every
   lesson and the "Lesson Summary" box at the end. Keyed by lesson number as a
   string. This is the single source for both boxes: do NOT hand-write them into
   the lesson HTML, or every page will show two. Safe to hand-edit. */
window.FRENCH_LESSON_INFO = {
  "1": {
    "level": "A1",
    "time": "50–60 minutes",
    "objectives": [
      "Name every letter of the French alphabet and spell your own name aloud.",
      "Recognise the five accent marks and explain what each one does to a letter.",
      "Produce the French u sound and tell it apart from ou.",
      "Pronounce the four nasal vowels without sounding the n or m.",
      "Predict which final consonants are silent, using the CaReFuL rule.",
      "Link words with liaison so your French flows instead of stopping between words."
    ],
    "summary": [
      "French uses the same 26 letters but with 5 accent marks: aigu (é), grave (è), circonflexe (ê), tréma (ë), and cédille (ç).",
      "Master the French U (/y/) — it's the most important new vowel for English speakers.",
      "French has 4 nasal vowels — the N/M aren't pronounced, they nasalize the preceding vowel.",
      "Final consonants are usually silent — remember CaReFuL (C, R, F, L) for exceptions.",
      "Liaison links words together, giving French its flowing rhythm.",
      "French stress falls on the last syllable of a phrase, not individual words."
    ]
  },

  "2": {
    "level": "A1",
    "time": "45–55 minutes",
    "objectives": [
      "Greet people correctly at any time of day and take your leave politely.",
      "Choose between tu and vous based on who you are speaking to.",
      "Introduce yourself: name, nationality, where you live and what you do.",
      "Use the core politeness formulas: merci, s'il vous plaît, excusez-moi, pardon.",
      "Ask how someone is and answer the question yourself.",
      "Say that you don't understand and ask someone to repeat or slow down."
    ],
    "summary": [
      "Always greet with Bonjour — it's the essential social rule in French culture.",
      "Tu = informal/familiar, Vous = formal/respectful/plural. When in doubt, use vous.",
      "Ça va ? is the universal casual greeting and can be both question and answer.",
      "In Québec, \"Bienvenue\" means \"you're welcome\" — a key false friend.",
      "La bise (cheek kiss greeting) is standard in France; less automatic in Canada.",
      "Master these polite essentials: merci, s'il vous plaît, excusez-moi, pardon, de rien."
    ]
  },

  "3": {
    "level": "A1",
    "time": "45–55 minutes",
    "objectives": [
      "Explain why French in France and in Canada drifted apart after 1763.",
      "Hear the Québécois affrication of t and d (tu → tsü) and other accent markers.",
      "Switch between the two meal-name systems without confusing lunch and dinner.",
      "Use the right everyday word on each side: courriel/mail, fin de semaine/week-end.",
      "Recognise Québécois expressions and sacres when you meet them.",
      "Treat both varieties as fully valid French rather than ranking one above the other."
    ],
    "summary": [
      "France and Canadian French diverged after 1763 and evolved independently for over 250 years.",
      "The biggest pronunciation difference: Québécois T/D affrication (\"tu\" → \"tsü\").",
      "Meal names are shifted: France's déjeuner/dîner = Canada's dîner/souper.",
      "Québec actively coins French alternatives to English loanwords (courriel, fin de semaine).",
      "Québécois sacres (church-derived swear words) are unique in the Francophone world.",
      "Tu/vous usage is more casual in Québec than in France.",
      "Neither dialect is \"better\" — both are fully valid French. This course teaches both!"
    ]
  },

  "4": {
    "level": "A1",
    "time": "45–55 minutes",
    "objectives": [
      "Predict a noun's gender from its ending in the most reliable cases.",
      "Choose correctly between le/la/les, un/une/des and du/de la/des.",
      "Use the partitive to talk about an unmeasured amount of something.",
      "Apply the de-rule after a negative and after any quantity word.",
      "Form regular and common irregular plurals, and hear the plural in the article.",
      "Memorise new nouns together with their article, the way natives store them."
    ],
    "summary": [
      "Every French noun is masculine or feminine, and the article is part of the word — learn la table, not table.",
      "Endings are good predictors: -tion, -té and -ette are feminine; -age, -ment and -eau are masculine.",
      "Definite articles cover both 'the' and whole categories, which is why J'aime le café means coffee in general.",
      "The partitive du/de la/de l' expresses an unmeasured amount and has no direct English equivalent.",
      "After a negative and after any quantity word, un/une/des/du/de la all collapse to plain de.",
      "The exception is être: Ce n'est pas un problème keeps its article.",
      "Final -s is silent, so the article is the only audible sign of a plural."
    ]
  },

  "5": {
    "level": "A1",
    "time": "40–50 minutes",
    "objectives": [
      "Conjugate être, avoir, aller and faire in the present tense.",
      "Use on the way French speakers actually do, with an il/elle verb form.",
      "Express states with avoir: faim, soif, froid, peur, raison, besoin, envie.",
      "Give your age correctly and avoid the je suis … ans trap.",
      "Choose between c'est and il/elle est when identifying and describing.",
      "Describe any place with il y a and its negative il n'y a pas de."
    ],
    "summary": [
      "Être, avoir, aller and faire are irregular and carry an enormous share of everyday French.",
      "On means 'we' in real speech and always takes the il/elle verb form.",
      "French uses avoir where English uses 'be' for hunger, thirst, cold, fear and age: j'ai faim, j'ai vingt ans.",
      "After être, jobs and nationalities take no article: elle est professeure.",
      "Use c'est before an article or a name, and il/elle est before a bare adjective or job.",
      "Il y a covers both 'there is' and 'there are', and negates as il n'y a pas de."
    ]
  },

  "6": {
    "level": "A1",
    "time": "50–60 minutes",
    "objectives": [
      "Count from zero into the thousands, including the base-20 numbers.",
      "Recognise septante, huitante and nonante where they are used.",
      "Tell the time in both the 12-hour and 24-hour systems.",
      "Name the days and months, and remember they are never capitalised.",
      "Write and read dates in the day/month/year order French uses.",
      "Ask for and give prices, phone numbers and dates out loud."
    ],
    "summary": [
      "Numbers 0–16 must be memorized; 17–69 follow logical tens + ones patterns.",
      "70–99 use base-20 math in France (soixante-dix, quatre-vingts, quatre-vingt-dix).",
      "Belgium, Switzerland, and some Canadian speakers use septante (70), huitante (80), nonante (90).",
      "French uses 24-hour time formally and 12-hour time casually; \"et quart/et demie/moins le quart.\"",
      "Days and months are NOT capitalized in French.",
      "Date format is DD/MM/YYYY — the opposite of American English."
    ]
  },

  "7": {
    "level": "A1",
    "time": "50–60 minutes",
    "objectives": [
      "Conjugate regular -er, -ir and -re verbs in the present tense.",
      "Hear why four of the six forms of an -er verb sound identical.",
      "Handle the small spelling shifts in manger, commencer, acheter and payer.",
      "Use the top irregular verbs: vouloir, pouvoir, devoir, prendre, venir, boire.",
      "Tell savoir from connaître when English would use only know.",
      "Put two verbs together, keeping the second one in the infinitive."
    ],
    "summary": [
      "Chop the infinitive ending to get a stem, then add the ending that matches the subject.",
      "-er verbs are about 90% of all French verbs and take almost every new verb the language coins.",
      "Four of the six -er forms sound identical, which is why the subject pronoun can never be dropped.",
      "Regular -ir verbs insert -iss- in the plural: nous finissons.",
      "Savoir is for facts and skills; connaître is for people, places and works.",
      "When two verbs meet, the first conjugates and the second stays in the infinitive."
    ]
  },

  "8": {
    "level": "A1",
    "time": "45–55 minutes",
    "objectives": [
      "Name the members of a family and talk about your own.",
      "Make adjectives agree in gender and number with the person described.",
      "Describe someone's height, build, hair and eyes.",
      "Describe personality with être plus an adjective.",
      "Use possessives to say whose relative you are talking about.",
      "Answer questions about your family in a short spoken paragraph."
    ],
    "summary": [
      "French family vocabulary distinguishes masculine/feminine for every relation.",
      "In Québec, \"chum\" = boyfriend and \"blonde\" = girlfriend — unique to Canadian French.",
      "Possessive adjectives (mon/ma/mes) agree with the thing possessed, not the owner.",
      "Adjectives agree in gender and number: add -e for feminine, -s for plural.",
      "Most adjectives go AFTER the noun — except BANGS (Beauty, Age, Number, Goodness, Size).",
      "Beau, nouveau, vieux have special forms before vowels: bel, nouvel, vieil."
    ]
  },

  "9": {
    "level": "A1–A2",
    "time": "50–60 minutes",
    "objectives": [
      "Form the feminine and plural of regular and irregular adjectives.",
      "Place an adjective correctly, using BANGS for the ones that come first.",
      "Explain how position changes the meaning of ancien, grand and propre.",
      "Build adverbs from adjectives with -ment and place them after the verb.",
      "Keep bon and bien — and mauvais and mal — in their separate lanes.",
      "Compare two things with plus/moins/aussi … que and form superlatives."
    ],
    "summary": [
      "Adjectives agree in gender and number, and the feminine -e wakes up the consonant before it.",
      "The default position is after the noun; BANGS adjectives (beauty, age, number, goodness, size) come first.",
      "A few adjectives change meaning with position: un ancien collègue vs un collègue ancien.",
      "Most adverbs are built from the feminine adjective plus -ment.",
      "Bon and mauvais are adjectives; bien and mal are adverbs — this pair causes more errors than any other.",
      "Compare with plus/moins/aussi … que, and use de (not dans) after a superlative.",
      "Bon becomes meilleur and bien becomes mieux — never plus bon or plus bien."
    ]
  },

  "10": {
    "level": "A1",
    "time": "45–55 minutes",
    "objectives": [
      "Negate any sentence with the ne … pas sandwich.",
      "Swap pas for jamais, plus, rien, personne and que to change the meaning.",
      "Apply the de-rule to articles after a negative.",
      "Ask questions three ways: intonation, est-ce que and inversion.",
      "Use the question words, including the difference between quel and qu'est-ce que.",
      "Answer a negative question with si when you want to contradict it."
    ],
    "summary": [
      "French negates with two pieces: ne before the verb, pas after it — and no helper 'do' is needed.",
      "Swapping pas for jamais, plus, rien, personne or que changes the meaning without moving ne.",
      "Spoken French routinely drops ne: je sais pas, c'est pas grave.",
      "Three question strategies exist: intonation (casual), est-ce que (neutral), inversion (formal).",
      "Inversion adds a euphonic -t- before il/elle/on: a-t-il fini ?",
      "Use quel with a noun and qu'est-ce que as the object of a verb.",
      "Si, not oui, is the way to contradict a negative question."
    ]
  },

  "11": {
    "level": "A1",
    "time": "50–60 minutes",
    "objectives": [
      "Name the meals and order confidently in a café or restaurant.",
      "Read a French menu: entrée, plat, dessert, formule and menu du jour.",
      "Ask for the bill, understand service compris and handle tipping.",
      "Use the partitive to talk about food and drink.",
      "Talk about French and Québécois specialities and say what you like.",
      "Follow the table etiquette that goes with the language."
    ],
    "summary": [
      "Meal names are shifted between France and Canada — always clarify which meal someone means!",
      "\"Entrée\" means starter/appetizer in French, NOT the main course.",
      "\"Un café\" = espresso in France; drip coffee is more common in Canada.",
      "French restaurant meals follow a course structure: entrée → plat → fromage → dessert.",
      "France has café culture (sit all day, no tipping); Canada has North American tipping culture.",
      "Iconic dishes: coq au vin and crêpes (France) vs poutine and tourtière (Québec)."
    ]
  },

  "12": {
    "level": "A1",
    "time": "40–50 minutes",
    "objectives": [
      "Use mon/ma/mes correctly by matching the noun, not the owner.",
      "Explain why mon amie is right and ma amie is not.",
      "Express possession with de, contracting de + le and de + les.",
      "Point things out with ce, cet, cette and ces, adding -ci or -là when needed.",
      "Express quantity with beaucoup de, un peu de, trop de and assez de.",
      "Buy things by the bottle, slice, packet or kilo."
    ],
    "summary": [
      "Possessives agree with the thing owned, not the owner — sa soeur can be his or her sister.",
      "Before a feminine noun starting with a vowel, use mon, ton, son: mon amie.",
      "There is no apostrophe-s: possession runs backwards with de, and de + le contracts to du.",
      "Ce, cet, cette and ces cover both 'this' and 'that'; add -ci or -là only when you must distinguish.",
      "Every quantity expression takes bare de: beaucoup de travail, un kilo de pommes.",
      "Bien des and la plupart des are the two expressions that keep the full article.",
      "Quelques counts items; un peu de measures a mass."
    ]
  },

  "13": {
    "level": "A1",
    "time": "45–55 minutes",
    "objectives": [
      "Name the shops you need and say what you are looking for.",
      "Ask prices and understand the answer, in euros and in Canadian dollars.",
      "Ask for a size or a colour and say you would like to try something on.",
      "Handle payment: card, cash, change and receipts.",
      "Know why the Canadian price on the tag is not the price at the till.",
      "Use the polite service formulas that open and close a transaction."
    ],
    "summary": [
      "France uses euros (€); Canada uses Canadian dollars ($). The \"dépanneur\" is a Québec institution.",
      "\"Librairie\" = bookstore (NOT library!), \"bibliothèque\" = library.",
      "Key phrases: \"Combien ça coûte?\", \"Je cherche...\", \"Je le prends\", \"L'addition, SVP.\"",
      "Colors agree with nouns — except marron and orange, which are invariable.",
      "France prices include tax (TTC); Canadian prices add tax at checkout (~15% in Québec).",
      "\"Magasinage\" (🇨🇦) vs \"shopping\" (🇫🇷) — both mean shopping."
    ]
  },

  "14": {
    "level": "A1",
    "time": "45–55 minutes",
    "objectives": [
      "Name housing types, rooms and the furniture in them.",
      "Navigate French floor numbering from the rez-de-chaussée up.",
      "Ask for the toilet the way locals do, not the bathroom.",
      "Describe household chores using faire.",
      "Narrate your daily routine from waking up to going to bed.",
      "Understand rental vocabulary in both France and Québec."
    ],
    "summary": [
      "Rooms, furniture and housing vocabulary are among the highest-frequency nouns at A1.",
      "The rez-de-chaussée is street level — a French premier étage is an American second floor.",
      "The toilet is usually a separate room: ask for les toilettes, not la salle de bains.",
      "Most chores are built with faire: faire le ménage, la vaisselle, la lessive, les courses.",
      "Faire les courses is the food shop; faire les magasins is browsing for clothes.",
      "France advertises flats as T2/F2; Québec says un trois et demi.",
      "Daily routine is reflexive territory: je me lève, je m'habille, je me couche."
    ]
  },

  "15": {
    "level": "A1–A2",
    "time": "45–55 minutes",
    "objectives": [
      "Conjugate reflexive verbs and place the pronoun correctly.",
      "Describe a full daily routine using reflexive verbs.",
      "Use plain articles with body parts after a reflexive verb.",
      "Give instructions with the tu, nous and vous imperative.",
      "Move the pronoun correctly between positive and negative commands.",
      "Soften requests with je voudrais, j'aimerais and pourriez-vous."
    ],
    "summary": [
      "A reflexive verb carries a pronoun that points back at the subject, and it sits right before the verb.",
      "Body parts take le/la/les after a reflexive verb, because the pronoun already shows possession.",
      "Many reflexives also exist as plain verbs: je lave la voiture vs je me lave.",
      "The imperative is the present tense minus the subject pronoun, in three persons only.",
      "-er verbs drop the final -s in the tu command, except before y or en: vas-y !",
      "Positive commands put the pronoun after with a hyphen (lève-toi); negative commands put it back in front.",
      "Je voudrais, j'aimerais and pourriez-vous are the politeness forms that service French runs on."
    ]
  },

  "16": {
    "level": "A2",
    "time": "45–55 minutes",
    "objectives": [
      "Ask for directions and understand the answer you get.",
      "Give directions with left, right, straight on and the landmark words.",
      "Buy a ticket and use the metro, bus, tram and train.",
      "Read departure boards and understand platform and stop announcements.",
      "Compare the transport systems of Paris and Montréal.",
      "Say you are lost and get help without switching to English."
    ],
    "summary": [
      "Key directions: à gauche (left), à droite (right), tout droit (straight), en face (across).",
      "Always start with \"Excusez-moi, où est...?\" when asking for directions.",
      "France: Métro, RER, TGV, SNCF. Canada: Métro (STM), autobus, VIA Rail, traversier.",
      "\"Correspondance\" = transfer. Follow the terminus name for your metro direction.",
      "\"Voiture\" = car (🇫🇷), \"char\" = car (🇨🇦 informal). \"Se garer\" (🇫🇷) vs \"stationner\" (🇨🇦) = to park."
    ]
  },

  "17": {
    "level": "A2",
    "time": "45–55 minutes",
    "objectives": [
      "Form the futur proche with aller plus an infinitive.",
      "Form the futur simple and recognise its r sound in every person.",
      "Use the dozen irregular future stems that cover most conversation.",
      "Choose between the two futures by register and distance in time.",
      "Keep both verbs in the future after quand, dès que and lorsque.",
      "Say what you have just done with venir de plus an infinitive."
    ],
    "summary": [
      "Futur proche = aller + infinitive; futur simple = infinitive stem + endings.",
      "Every futur simple form has an r before its ending — that r is your listening cue.",
      "A dozen irregular stems (ser-, aur-, ir-, fer-, viendr-, pourr-, verr-) cover most conversation.",
      "Speech prefers the futur proche; writing, forecasts and predictions prefer the futur simple.",
      "After quand, dès que and lorsque, both verbs stay in the future — unlike English.",
      "Venir de + infinitive gives you the recent past: je viens de manger.",
      "Dans une heure means an hour from now; en une heure means it takes an hour."
    ]
  },

  "18": {
    "level": "A2",
    "time": "45–55 minutes",
    "objectives": [
      "Talk about your hobbies and free time.",
      "Choose correctly between jouer à and jouer de.",
      "Use faire du/de la for sports and activities.",
      "Describe a typical day with reflexive verbs.",
      "Say how often you do something with frequency adverbs.",
      "Suggest an activity and accept or decline an invitation."
    ],
    "summary": [
      "\"Jouer à\" for sports/games; \"jouer de\" for instruments; \"faire de\" for activities.",
      "Reflexive verbs (se + verb) describe actions done to oneself: se lever, se coucher, se doucher.",
      "Reflexive pronouns: me, te, se, nous, vous, se — placed before the verb.",
      "France: long vacations, café culture, cultural leisure. Québec: outdoor sports, chalets, festivals.",
      "\"Weekend\" (🇫🇷) vs \"fin de semaine\" (🇨🇦) — same concept, different words."
    ]
  },

  "19": {
    "level": "A2",
    "time": "55–65 minutes",
    "objectives": [
      "Build past participles for regular -er, -ir and -re verbs.",
      "Recall the high-frequency irregular participles.",
      "Choose between avoir and être as the helper verb.",
      "Make the participle agree with the subject after être.",
      "Negate and question in the past, wrapping the helper verb.",
      "Tell someone what you did yesterday in connected sentences."
    ],
    "summary": [
      "The passé composé is built from avoir or être in the present plus a past participle.",
      "Participles: -er → -é, regular -ir → -i, -re → -u, plus a list of common irregulars.",
      "Most verbs take avoir; a closed list of coming-and-going verbs, plus all reflexives, take être.",
      "With être, the participle agrees with the subject: elle est allée, ils sont partis.",
      "Six verbs switch to avoir when they take a direct object, and their meaning changes.",
      "Negation wraps the helper verb: je n'ai pas mangé.",
      "One French form covers 'I ate', 'I have eaten' and 'I did eat'."
    ]
  },

  "20": {
    "level": "A2",
    "time": "45–55 minutes",
    "objectives": [
      "Name the parts of the body.",
      "Describe pain with avoir mal à plus the right article.",
      "Say how long a symptom has lasted using depuis.",
      "Manage a visit to a doctor or pharmacy.",
      "Call for help and give the right emergency number in each country.",
      "Understand how the French and Canadian health systems differ in practice."
    ],
    "summary": [
      "Use \"J'ai mal à + article + body part\" to express pain: J'ai mal à la tête, au dos, aux dents.",
      "\"Depuis\" + time = \"since/for\" (how long you've had symptoms).",
      "Emergency: 112 in France (+ 15/17/18), 911 in Canada.",
      "Paracétamol (🇫🇷) = acétaminophène (🇨🇦) = Tylenol.",
      "France: pay-and-reimburse system. Canada: free with provincial health card."
    ]
  },

  "21": {
    "level": "A2",
    "time": "50–60 minutes",
    "objectives": [
      "Form the imparfait from the nous stem, with être as the only exception.",
      "Use the imparfait for habits, description, age, time and weather.",
      "Choose between the imparfait and the passé composé with confidence.",
      "Build the interrupted-action pattern with quand.",
      "Interpret savoir, vouloir, pouvoir and connaître differently in each tense.",
      "Tell a short story that alternates background and events."
    ],
    "summary": [
      "Build the imparfait from the present nous form minus -ons; only être is irregular (ét-).",
      "The imparfait paints the background: habits, description, age, time, weather and states of mind.",
      "The passé composé reports completed events that move the story forward.",
      "The interrupted-action pattern is imparfait + quand + passé composé.",
      "Savoir, vouloir, pouvoir and connaître change meaning between the two tenses.",
      "Pendant que introduces two simultaneous background actions; quand usually introduces the interruption.",
      "Real narration alternates constantly between the two tenses."
    ]
  },

  "22": {
    "level": "A2",
    "time": "40–50 minutes",
    "objectives": [
      "Describe the weather with il fait, il y a and single-verb expressions.",
      "Give and understand temperatures in Celsius.",
      "Name the seasons and say what you do in each one.",
      "Use the right preposition with each season.",
      "Handle Canadian winter vocabulary: verglas, poudrerie, tuque, sloche.",
      "Make small talk about the weather, the way conversations really open."
    ],
    "summary": [
      "Weather uses three patterns: \"Il fait\" + adj, \"Il y a\" + noun, and verbs (il pleut, il neige).",
      "Both countries use Celsius. \"Moins 30\" (-30°C) is a reality of Canadian winters.",
      "\"Au printemps\" but \"en été / en automne / en hiver.\"",
      "Key Canadian winter vocab: poudrerie, verglas, tuque, souffleuse, banc de neige.",
      "Tuque (🇨🇦) = bonnet (🇫🇷) = winter hat. Canicule = heat wave."
    ]
  },

  "23": {
    "level": "A2",
    "time": "55–65 minutes",
    "objectives": [
      "Replace a direct object with le, la or les.",
      "Replace an indirect object with lui or leur.",
      "Use y for places and en for quantities and de-phrases.",
      "Place pronouns correctly in simple, negative, compound and command sentences.",
      "Order two pronouns when they appear together.",
      "Join sentences with qui, que and où, and connect ideas with linking words."
    ],
    "summary": [
      "French object pronouns go before the verb, the opposite of English word order.",
      "Le, la and les replace direct objects; lui and leur replace à + a person.",
      "Y replaces a place or à + a thing; en replaces de + something, including quantities.",
      "With en, the number stays: j'en ai deux, never j'ai deux.",
      "The order when two pronouns meet is me/te/nous/vous → le/la/les → lui/leur → y → en.",
      "Positive commands put the pronoun after the verb; negative commands return to normal order.",
      "Use qui when a verb follows and que when a subject follows; où covers place and time."
    ]
  },

  "24": {
    "level": "A2",
    "time": "45–55 minutes",
    "objectives": [
      "Name jobs and workplaces and say what you do for a living.",
      "Handle basic workplace language: meetings, schedules, colleagues, salary.",
      "Describe your education and qualifications.",
      "Compare the French and Québécois education systems, including the cégep.",
      "Avoid the false friends that trip up English speakers at work.",
      "Talk about your career plans using the future."
    ],
    "summary": [
      "No article with professions after être: \"Je suis médecin\" (not \"Je suis un médecin\").",
      "Québec leads in feminizing job titles: professeure, auteure, cheffe.",
      "\"Stage\" = internship (not a stage!), \"collège\" = middle school in France (not college!).",
      "\"Baccalauréat\" = high school exam (🇫🇷) vs bachelor's degree (🇨🇦).",
      "CÉGEP is unique to Québec — no equivalent in France or English Canada.",
      "France: Grandes écoles for elite education. Québec: CÉGEP → université pathway."
    ]
  },

  "25": {
    "level": "A2",
    "time": "40–50 minutes",
    "objectives": [
      "Name devices, screens and the parts of a computer.",
      "Talk about email, messaging and social media in both varieties.",
      "Ask for and give a wifi password.",
      "Read common French texting abbreviations.",
      "Describe a technical problem well enough to get help.",
      "Choose the right word when portable can mean two different devices."
    ],
    "summary": [
      "Key differences: portable (🇫🇷 = phone, 🇨🇦 = laptop), courriel (🇨🇦) vs e-mail (🇫🇷).",
      "MDR = LOL, PTDR = LMAO. French SMS: slt, bjr, stp, tkt, jsp, dsl.",
      "Québec coins French alternatives: clavarder, mot-clic, balado, pourriel.",
      "French phone numbers are read in pairs; Canadian numbers follow the US format."
    ]
  },

  "26": {
    "level": "A2",
    "time": "45–55 minutes",
    "objectives": [
      "Express how you feel with both être and avoir.",
      "Describe relationships from friendship to marriage.",
      "Talk about dating and breaking up.",
      "Congratulate, console and compliment appropriately.",
      "Navigate la bise and the tu/vous shift in a new relationship.",
      "Use Québécois relationship vocabulary such as chum and blonde."
    ],
    "summary": [
      "Emotions use \"être + adj\" (je suis triste) OR \"avoir + noun\" (j'ai peur). Don't mix them up!",
      "Avoid \"je suis excité(e)\" — use \"enthousiaste\" or \"j'ai hâte\" for excitement.",
      "\"Tu me manques\" = I miss you (reversed subject: you are missing to me).",
      "\"Copain/copine\" can mean friend or partner — context is everything.",
      "🇨🇦 \"Mon chum\" = boyfriend, \"ma blonde\" = girlfriend (regardless of hair color!).",
      "🇫🇷 PACS = civil union (very popular). 🇨🇦 Conjoint(e) de fait = common-law partner.",
      "\"Un coup de foudre\" (lightning strike) = love at first sight. Romance is built into the language!"
    ]
  },

  "27": {
    "level": "A2",
    "time": "45–55 minutes",
    "objectives": [
      "Manage an airport, a station and a hotel check-in in French.",
      "Book a room or a table and confirm the details.",
      "Talk about French regions and what each is known for.",
      "Follow French social rules for visits, meals and public behaviour.",
      "Understand public holidays and opening hours.",
      "Deploy the survival phrases that get you through any travel problem."
    ],
    "summary": [
      "Always say \"Bonjour\" when entering any establishment. It's the #1 social rule.",
      "\"Entrée\" = starter (NOT main course). \"Le plat\" = main. Don't get caught out!",
      "Ask for \"une carafe d'eau\" for free tap water. Service is included — don't over-tip.",
      "The TGV is fast, affordable (book early), and connects all major cities.",
      "Composter your paper train tickets or risk a fine from le contrôleur.",
      "France has incredible regional diversity — Brittany's Celtic coast, Provence's lavender, the Alps.",
      "August closures and Sunday closures are real. Strikes (la grève) happen — have backup plans.",
      "Default to \"vous\" with strangers. Wait for the \"On se tutoie ?\" invitation."
    ]
  },

  "28": {
    "level": "A2",
    "time": "45–55 minutes",
    "objectives": [
      "Locate the Francophone communities of Canada beyond Québec.",
      "Get around Montréal and Québec City in French.",
      "Talk about Québécois food and the sugar-shack tradition.",
      "Understand the big festivals and what they celebrate.",
      "Explain the role of Bill 101 in Québec's language landscape.",
      "Use everyday Québécois expressions with the right register."
    ],
    "summary": [
      "Québec is the heart of francophone North America (~8 million speakers). Loi 101 protects French — respect it.",
      "Montréal: bilingual, multicultural, festival capital. Québec City: historic, walled, stunning. Both are must-visits.",
      "Québécois food = comfort: poutine, tourtière, smoked meat, Montréal bagels, and MAPLE EVERYTHING.",
      "La cabane à sucre (sugar shack) in spring is a cultural pilgrimage. La tire sur la neige is magic.",
      "Key expressions: C'est l'fun, pantoute, icitte, asteure, char, magasiner, tiguidou.",
      "\"Bienvenue\" in Québec = \"you're welcome\" (not just \"welcome\").",
      "Québec has two seasons: winter and construction. The RÉSO (underground city) is your winter friend.",
      "Try speaking French — \"Je suis en train d'apprendre le français\" opens every door."
    ]
  }
};
