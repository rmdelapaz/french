/* lesson-content.js — per-lesson objectives, summaries, time and CEFR level for
   the French INTERMEDIATE course (B1–B2).

   Consumed by learn.js to render the "What You'll Learn" box at the top of every
   lesson and the "Lesson Summary" box at the end. Keyed by lesson number as a
   string. This is the single source for both boxes: do NOT hand-write them into
   the lesson HTML, or every page will show two. Safe to hand-edit. */
window.FRENCH_LESSON_INFO = {
  "1": {
    "level": "B1",
    "time": "45–55 minutes",
    "objectives": [
      "Form the plus-que-parfait for any verb using the imparfait of avoir or être.",
      "Place an event before another past event without confusing your listener.",
      "Combine the plus-que-parfait with the passé composé and imparfait in one narrative.",
      "Express regret with si seulement + plus-que-parfait.",
      "Report a belief about an earlier past: je croyais qu'il était parti.",
      "Replace a heavy clause with après avoir / après être + past participle."
    ],
    "summary": [
      "The plus-que-parfait = imparfait of avoir/être + past participle: j'avais mangé, j'étais parti.",
      "It marks the past behind the past — the event that already happened when your story starts.",
      "Auxiliary choice and agreement follow exactly the same rules as the passé composé.",
      "Si seulement + plus-que-parfait expresses regret: Si seulement j'avais su !",
      "Après avoir mangé / après être parti is a lighter alternative when the subject is the same.",
      "French uses this tense far more consistently than English uses 'had done' — don't skip it."
    ]
  },

  "2": {
    "level": "B1",
    "time": "40–50 minutes",
    "objectives": [
      "Form the futur antérieur with the futur simple of avoir or être.",
      "Say that something will be finished by a given future point.",
      "Use quand, dès que, aussitôt que and une fois que with a future tense — where English uses the present.",
      "Choose between futur simple and futur antérieur in a subordinate clause.",
      "Express a supposition about the present with the futur antérieur: il aura oublié.",
      "Handle deadlines and planning vocabulary: d'ici là, une échéance, le moment venu."
    ],
    "summary": [
      "Futur antérieur = futur simple of avoir/être + past participle: j'aurai fini, je serai parti.",
      "It means 'will have done' — an action completed before another future moment.",
      "After quand, dès que, aussitôt que, une fois que and tant que, French keeps the future tense; English switches to the present.",
      "Two futures in sequence: Quand j'aurai fini, je t'appellerai.",
      "The futur antérieur also expresses a guess about the present: Elle se sera trompée — she must have made a mistake.",
      "Agreement and auxiliary choice are the passé composé rules again — they never change."
    ]
  },

  "3": {
    "level": "B1",
    "time": "50–60 minutes",
    "objectives": [
      "Build the conditionnel présent from the futur stem plus the imparfait endings.",
      "Build the conditionnel passé and use it for things that did not happen.",
      "Give advice with tu devrais and reproach with tu aurais dû.",
      "Soften a request or an opinion beyond the fixed je voudrais you already know.",
      "Recognise the journalistic conditional that marks unverified news.",
      "Use au cas où and à ta place with the right tense."
    ],
    "summary": [
      "Conditionnel présent = futur stem + imparfait endings: je ferais, tu irais, nous serions.",
      "Conditionnel passé = conditionnel of avoir/être + participle: j'aurais fait, je serais parti.",
      "Core uses: politeness, hypothesis, advice (devrais), regret and reproach (aurais dû).",
      "In the press, the conditional flags an unconfirmed claim: il y aurait des blessés — there are reportedly injuries.",
      "Au cas où takes the conditional, not the subjunctive: au cas où il viendrait.",
      "The stem is always the futur stem, so every futur irregularity carries over exactly."
    ]
  },

  "4": {
    "level": "B1",
    "time": "45–55 minutes",
    "objectives": [
      "Build all three si-clause types and match each to its meaning.",
      "Never write si + futur or si + conditionnel — the rule that trips up every learner.",
      "Mix types when the condition and the result sit in different times.",
      "Tell si meaning 'if' apart from si meaning 'whether'.",
      "Reach for à moins que, à condition que and pourvu que as alternatives to si.",
      "Express an unreal past and its present consequence in one sentence."
    ],
    "summary": [
      "Type 1 (real): si + présent → futur. Si j'ai le temps, je viendrai.",
      "Type 2 (unreal present): si + imparfait → conditionnel présent. Si j'avais le temps, je viendrais.",
      "Type 3 (unreal past): si + plus-que-parfait → conditionnel passé. Si j'avais eu le temps, je serais venu.",
      "After si meaning 'if', French never uses the futur or the conditionnel — that tense goes in the other clause.",
      "Mixed type: Si j'avais étudié, je serais médecin aujourd'hui — past cause, present result.",
      "À moins que, à condition que and pourvu que take the subjunctive; si does not."
    ]
  },

  "5": {
    "level": "B1",
    "time": "55–65 minutes",
    "objectives": [
      "Form the present subjunctive of regular verbs from the ils- stem.",
      "Produce the eight irregular subjunctives that cover most real sentences.",
      "Recognise que as the doorway that nearly always precedes a subjunctive.",
      "Trigger the subjunctive after verbs of will, emotion and doubt.",
      "Keep the indicative after verbs of certainty and after espérer.",
      "Switch to an infinitive when both clauses share a subject."
    ],
    "summary": [
      "Regular subjunctive: take the ils- form of the present, drop -ent, add -e, -es, -e, -ions, -iez, -ent.",
      "Nous and vous borrow the imparfait forms — that is why they look familiar.",
      "The eight irregulars worth memorising: être, avoir, aller, faire, pouvoir, savoir, vouloir, falloir.",
      "Triggers cluster into three families: volition (vouloir, exiger), emotion (content, avoir peur), doubt (douter, ne pas penser).",
      "Certainty keeps the indicative — and espérer que takes the indicative in French, unlike Spanish.",
      "Same subject in both clauses? Use an infinitive: Je veux partir, not Je veux que je parte."
    ]
  },

  "6": {
    "level": "B1",
    "time": "50–60 minutes",
    "objectives": [
      "Use the conjunctions that always demand the subjunctive: bien que, pour que, avant que, jusqu'à ce que, sans que.",
      "Tell subjunctive-taking conjunctions apart from their indicative twins (après que, parce que, pendant que).",
      "Trigger the subjunctive after impersonal expressions: il faut que, il est possible que, il semble que.",
      "Use the subjunctive after a superlative or after le seul / le premier.",
      "Recognise the ne explétif and know that it is not a negation.",
      "Swap a subjunctive clause for a preposition + infinitive when the subject is the same."
    ],
    "summary": [
      "Conjunction families that take the subjunctive: concession (bien que, quoique), purpose (pour que, afin que), time-before (avant que, jusqu'à ce que, en attendant que), condition (à moins que, pourvu que), and sans que.",
      "Après que historically takes the indicative — the event already happened.",
      "Impersonals of necessity, possibility and doubt take the subjunctive; impersonals of certainty do not.",
      "Superlatives and le seul / le premier / le dernier take the subjunctive: le seul qui soit ouvert.",
      "The ne explétif after avant que, à moins que and de peur que carries no negative meaning at all.",
      "Avant que + subjunctive becomes avant de + infinitive when both verbs share a subject."
    ]
  },

  "7": {
    "level": "B1",
    "time": "45–55 minutes",
    "objectives": [
      "Form the subjonctif passé and use it for an action already completed.",
      "Choose between subjonctif présent and subjonctif passé by comparing timelines.",
      "Decide between indicative, subjunctive and infinitive in a systematic way.",
      "Flip a verb into the subjunctive by negating or questioning it (penser → ne pas penser).",
      "Avoid the subjunctive gracefully when you are unsure of a form.",
      "Handle the verbs that change mood with meaning: dire, sembler, espérer, prétendre."
    ],
    "summary": [
      "Subjonctif passé = subjonctif of avoir/être + past participle: que j'aie fait, que je sois parti.",
      "Use it when the subordinate action is finished relative to the main clause: Je suis content que tu sois venu.",
      "Decision path: same subject → infinitive; different subject + certainty → indicative; different subject + will/emotion/doubt → subjunctive.",
      "Negating or questioning a verb of opinion usually flips it into the subjunctive.",
      "Espérer que keeps the indicative; souhaiter que takes the subjunctive — a pair worth memorising.",
      "When in doubt, rephrase with a noun or an infinitive — good French often dodges the subjunctive entirely."
    ]
  },

  "8": {
    "level": "B1",
    "time": "50–60 minutes",
    "objectives": [
      "Use dont for every verb and expression built with de.",
      "Express possession across a relative clause: la femme dont le fils habite ici.",
      "Choose the right form of lequel after a preposition, matching gender and number.",
      "Contract à and de with lequel: auquel, duquel, auxquels, desquelles.",
      "Use ce qui, ce que and ce dont when there is no noun to point back to.",
      "Extend où beyond place to time: le jour où, l'époque où."
    ],
    "summary": [
      "Dont replaces de + noun: parler de → le livre dont je parle.",
      "With dont, possession keeps the definite article: la femme dont le fils est médecin.",
      "After a preposition, use lequel/laquelle/lesquels/lesquelles — and de/à contract into duquel and auquel.",
      "For people after a preposition, qui is usually preferred: l'ami avec qui je travaille.",
      "Ce qui / ce que / ce dont / ce à quoi mean 'what' when the antecedent is a whole idea.",
      "Où covers time as well as place — le jour où je suis arrivé, never quand in a relative clause."
    ]
  },

  "9": {
    "level": "B1",
    "time": "45–55 minutes",
    "objectives": [
      "Sort common verbs into the three infinitive patterns: à, de, or nothing.",
      "Use the à-verbs of beginning, learning and succeeding.",
      "Use the de-verbs of deciding, trying, forgetting and refusing.",
      "Handle the two-object pattern: demander à quelqu'un de faire quelque chose.",
      "Notice how the preposition changes what a pronoun replaces (y vs en).",
      "Spot verbs whose meaning shifts with the preposition, like décider de vs se décider à."
    ],
    "summary": [
      "Three patterns: verb + à + infinitive, verb + de + infinitive, verb + bare infinitive.",
      "Bare infinitive verbs are mostly modals and verbs of perception: vouloir, pouvoir, devoir, aller, espérer, voir, entendre.",
      "À signals movement toward or engagement: commencer à, apprendre à, réussir à, hésiter à.",
      "De signals separation or completion: décider de, essayer de, finir de, oublier de, refuser de.",
      "Ask-type verbs take a person with à and the action with de: demander à Paul de venir.",
      "The preposition decides the pronoun: penser à → y, parler de → en."
    ]
  },

  "10": {
    "level": "B1",
    "time": "50–60 minutes",
    "objectives": [
      "State the avoir agreement rule: agree only with a direct object that comes first.",
      "Make the participle agree after a COD pronoun: je les ai vues.",
      "Make the participle agree after the relative pronoun que.",
      "Make the participle agree after quel and combien of a noun.",
      "Apply the reflexive rules, including the no-agreement case with a following object.",
      "Recognise the fixed expressions that never agree: se rendre compte, se parler, en."
    ],
    "summary": [
      "With avoir, the participle agrees only when the direct object precedes it.",
      "Three preceding-object triggers: a COD pronoun (le/la/les), the relative que, and an interrogative (quelle robe as-tu choisie ?).",
      "No agreement with an indirect object: je leur ai parlé, never parlés.",
      "No agreement with en: des pommes ? j'en ai pris deux.",
      "Reflexives take être but follow the avoir logic: elle s'est lavée, but elle s'est lavé les mains.",
      "Verbs whose se is indirect never agree: ils se sont parlé, elles se sont rendu compte."
    ]
  },

  "11": {
    "level": "B1",
    "time": "45–55 minutes",
    "objectives": [
      "Build the passive with être + past participle in any tense.",
      "Make the participle agree with the subject in the passive.",
      "Choose between par and de to introduce the agent.",
      "Use on as French's everyday replacement for the English passive.",
      "Use the pronominal passive: ça se dit, ça ne se fait pas.",
      "Express something happening to you with se faire + infinitive."
    ],
    "summary": [
      "Passive = être (in the tense you need) + past participle, agreeing with the subject.",
      "Only a verb with a direct object can go passive — indirect objects cannot become subjects in French.",
      "Par introduces an action agent; de introduces a state or feeling: aimé de tous, couvert de neige.",
      "French avoids the passive far more than English: On m'a volé mon sac beats Mon sac a été volé.",
      "The pronominal passive handles general truths: ce plat se mange froid.",
      "Se faire + infinitive says something happened to the subject: il s'est fait renverser."
    ]
  },

  "12": {
    "level": "B1",
    "time": "45–55 minutes",
    "objectives": [
      "Form the -ant ending from the nous- stem of the present tense.",
      "Use the gérondif (en + -ant) for simultaneity, means and condition.",
      "Use the bare participe présent to replace a qui-clause.",
      "Tell the invariable participle apart from the adjectif verbal, which agrees.",
      "Use tout en + -ant for a concession or a deliberate contrast.",
      "Handle the spelling pairs: différent/différant, précédent/précédant, provocant/provoquant."
    ],
    "summary": [
      "Take the nous- form of the present, drop -ons, add -ant: nous parlons → parlant.",
      "Three irregulars only: étant (être), ayant (avoir), sachant (savoir).",
      "The gérondif en + -ant always shares the subject of the main verb: En sortant, j'ai vu Paul.",
      "It expresses simultaneity (while), means (by) or condition (if) — never purpose.",
      "A bare participe présent is invariable and replaces a qui-clause: les gens habitant ici.",
      "The adjectif verbal agrees like any adjective and often spells differently: une histoire fatigante."
    ]
  },

  "13": {
    "level": "B1",
    "time": "50–60 minutes",
    "objectives": [
      "Turn direct speech into reported speech with que.",
      "Back-shift tenses when the reporting verb is in the past.",
      "Report yes/no questions with si and information questions with the right word.",
      "Report questions built on qu'est-ce qui and qu'est-ce que as ce qui and ce que.",
      "Report commands with de + infinitive.",
      "Shift time and place markers: hier → la veille, demain → le lendemain."
    ],
    "summary": [
      "Present reporting verb → no tense change. Past reporting verb → back-shift.",
      "Back-shift map: présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel présent, futur antérieur → conditionnel passé.",
      "Imparfait, plus-que-parfait and the conditionals do not shift — they are already 'back'.",
      "Yes/no questions become si: Il a demandé si je venais.",
      "Qu'est-ce qui → ce qui, qu'est-ce que → ce que: Il a demandé ce que je faisais.",
      "Commands become de + infinitive: Il m'a dit de partir. Time words shift too: aujourd'hui → ce jour-là."
    ]
  },

  "14": {
    "level": "B2",
    "time": "45–55 minutes",
    "objectives": [
      "Build faire + infinitive to say you had something done rather than did it.",
      "Place object pronouns in front of faire, never between faire and the infinitive.",
      "Keep the participle of faire invariable in every causative sentence.",
      "Mark the person made to act with à or par when there are two objects.",
      "Use se faire + infinitive for something done for or to yourself.",
      "Handle laisser, voir and entendre + infinitive, whose rules differ from faire."
    ],
    "summary": [
      "Faire + infinitive = to have/make something done: je fais réparer la voiture.",
      "The two verbs are welded together — pronouns go before faire: je la fais réparer.",
      "Fait is always invariable in the causative: je les ai fait venir.",
      "With two objects, the doer takes à or par: j'ai fait écrire la lettre à ma sœur.",
      "Se faire + infinitive covers both services (se faire couper les cheveux) and misfortunes (se faire voler).",
      "Laisser, voir and entendre allow the pronoun to attach to either verb, and their participles can agree."
    ]
  },

  "15": {
    "level": "B2",
    "time": "40–50 minutes",
    "objectives": [
      "Use ne… que for 'only' and place que directly before the restricted element.",
      "Tell ne… que apart from seulement and rien que.",
      "Use the formal negatives ne… guère, ne… nullement and ne… aucunement.",
      "Build double and multiple negation: ne… plus jamais rien.",
      "Negate an infinitive with ne pas placed together in front of it.",
      "Recognise and use the spoken dropping of ne without writing it that way."
    ],
    "summary": [
      "Ne… que restricts rather than negates: Je n'ai que dix euros — I have only ten euros.",
      "Que goes immediately before whatever is being restricted, which can move the meaning.",
      "Ne… guère (hardly) and ne… nullement (not at all) belong to formal writing.",
      "Ni… ni… replaces et in a negative sentence, and the articles usually drop.",
      "An infinitive is negated by a single block: je te demande de ne pas partir.",
      "In speech the ne routinely disappears — J'sais pas — but it stays in anything you write."
    ]
  },

  "16": {
    "level": "B2",
    "time": "45–55 minutes",
    "objectives": [
      "Place an utterance on the soutenu / courant / familier ladder.",
      "Recognise the grammatical markers of each register, not just the vocabulary.",
      "Produce the same question in all three registers.",
      "Use on for nous in speech and know when not to.",
      "Choose soutenu structures for formal writing: inversion, il convient de, s'avérer.",
      "Judge tu vs vous in genuinely ambiguous B2 situations."
    ],
    "summary": [
      "Register is grammar, not only vocabulary: question form, ne-dropping, on vs nous and word order all shift.",
      "Three questions, one meaning: Que faites-vous ? (soutenu) · Qu'est-ce que tu fais ? (courant) · Tu fais quoi ? (familier).",
      "Soutenu markers: inversion, the passé simple in writing, il convient de, nul, s'avérer.",
      "Familier markers: dropped ne, on for nous, truncated words (resto, ado), question by intonation.",
      "Mixing registers is the clearest sign of a non-native — pick one level and hold it.",
      "In doubt, vous and courant register are never wrong; familier used too early can be."
    ]
  },

  "17": {
    "level": "B2",
    "time": "40–50 minutes",
    "objectives": [
      "Explain how verlan is built by reversing syllables.",
      "Decode the core verlan words you will actually hear: meuf, keuf, relou, chelou, ouf.",
      "Recognise re-verlanised words such as reubeu and beur.",
      "Use everyday argot appropriately: bosser, bouffer, kiffer, un mec, un truc.",
      "Read French SMS and internet abbreviations.",
      "Judge when slang is friendly and when it is a mistake."
    ],
    "summary": [
      "Verlan reverses the syllables of a word: l'envers → verlan, femme → meuf, fou → ouf.",
      "One-syllable words get a vowel added or dropped to make the flip pronounceable.",
      "Verlan ages fast — some words have been re-verlanised twice (arabe → beur → reubeu).",
      "Core argot verbs: bosser (work), bouffer (eat), kiffer (love), se barrer (leave).",
      "Texting French drops vowels and uses numbers: bjr, slt, a+, mdr, koi29.",
      "Understand slang everywhere; produce it only with people who use it with you first."
    ]
  },

  "18": {
    "level": "B2",
    "time": "45–55 minutes",
    "objectives": [
      "Recognise the passé simple of regular verbs in all three groups.",
      "Recognise the passé simple of the high-frequency irregulars: être, avoir, faire, venir, voir.",
      "Read the passé antérieur and understand its relationship to the passé simple.",
      "Identify the imperfect subjunctive when you meet it, without producing it.",
      "Decode French headline syntax: dropped articles, nominalisation, colons.",
      "Read a news article's chapeau and lead for the essential facts."
    ],
    "summary": [
      "The passé simple is the written narrative past — you read it, you don't speak it.",
      "Regular endings: -er → -ai/-a/-èrent · -ir/-re → -is/-it/-irent.",
      "Irregulars cluster in -us and -ins: il fut, il eut, il vint, il fit, il vit.",
      "The passé antérieur (eut fini) marks a past before the passé simple, after dès que and à peine.",
      "The imperfect subjunctive (qu'il fût) is recognition-only in modern French.",
      "Headlines drop articles and verbs and prefer nouns: Hausse des prix : le gouvernement réagit."
    ]
  },

  "19": {
    "level": "B2",
    "time": "45–55 minutes",
    "objectives": [
      "Decode an unfamiliar word from its prefix and suffix.",
      "Predict a noun's gender from its suffix.",
      "Turn a verb into a noun (nominalisation) for formal writing and headlines.",
      "Avoid the most damaging faux amis in French–English.",
      "Choose correctly between nuance pairs: savoir/connaître, amener/apporter, an/année.",
      "Build word families outwards from a root you already know."
    ],
    "summary": [
      "Prefixes carry meaning: re- (again), dé- (un-), mé- (badly), in-/im- (not), sur- (over), sous- (under).",
      "Suffixes carry both meaning and gender: -tion, -té, -ure, -ette are feminine; -ment, -age, -isme are masculine.",
      "Nominalisation compresses a clause into a noun phrase — the engine of formal French and headlines.",
      "High-cost faux amis: actuellement (currently), sensible (sensitive), assister à (to attend), la monnaie (change).",
      "Savoir = to know a fact or how to; connaître = to be acquainted with a person or place.",
      "Learning one root gives you a family: travail, travailler, travailleur, travaillé, retravailler."
    ]
  },

  "20": {
    "level": "B2",
    "time": "40–50 minutes",
    "objectives": [
      "Use the body-part idioms French speakers reach for daily.",
      "Use animal and food idioms without translating word for word.",
      "Recognise proverbs and know when a half-quote is enough.",
      "Judge the register of an idiom before you use it.",
      "Guess an idiom's meaning from its context rather than its words.",
      "Replace a bland verb with a vivid fixed expression."
    ],
    "summary": [
      "Idioms are learned whole — translating the parts produces nonsense.",
      "Body idioms carry a lot of the load: avoir un poil dans la main, coûter les yeux de la tête, casser les pieds.",
      "Food and animals supply the rest: tomber dans les pommes, poser un lapin, avoir la pêche.",
      "Proverbs are usually quoted in part: L'habit ne fait pas le moine.",
      "Register varies sharply — en avoir marre is casual, il convient de noter is not.",
      "Context beats the dictionary: read the whole sentence before deciding what an idiom means."
    ]
  },

  "21": {
    "level": "B2",
    "time": "50–60 minutes",
    "objectives": [
      "State an opinion with a range of formulas beyond je pense que.",
      "Structure an argument: thesis, antithesis, synthesis.",
      "Concede a point and then rebut it with certes… mais and il n'en reste pas moins que.",
      "Use logical connectors to make an argument track from sentence to sentence.",
      "Hedge a claim so you are not committed to more than you mean.",
      "Write a short argued paragraph to DELF B2 expectations."
    ],
    "summary": [
      "Opinion formulas scale by strength: il me semble que < à mon avis < je suis convaincu que.",
      "The classic French plan is thèse / antithèse / synthèse — state, oppose, resolve.",
      "Concession then rebuttal is the core B2 move: Certes, c'est cher, mais…",
      "Connectors carry the argument: d'une part, en revanche, néanmoins, par conséquent, en conclusion.",
      "Hedging keeps you honest: il semblerait que, dans une certaine mesure, on pourrait soutenir que.",
      "Negative opinion verbs take the subjunctive — je ne pense pas que ce soit vrai."
    ]
  },

  "22": {
    "level": "B2",
    "time": "45–55 minutes",
    "objectives": [
      "Choose the right formule d'appel for a known or unknown recipient.",
      "Write the body of a formal letter in the expected order.",
      "Close with a formule de politesse that matches the opening.",
      "Write a professional email that is shorter than a letter but still correct.",
      "Make a request or a complaint in formal register.",
      "Notice where Québec correspondence differs from French correspondence."
    ],
    "summary": [
      "Madame, Monsieur, for an unknown recipient; Madame la Directrice for a named role.",
      "The full closing formula must repeat the opening: Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.",
      "Email is shorter: Cordialement or Bien à vous replaces the long formula.",
      "Formal requests use je me permets de, je vous saurais gré de, and the conditional.",
      "Objet: is a one-line subject; pièce jointe announces an attachment.",
      "Québec correspondence is noticeably shorter and warmer, and prefers courriel to mail."
    ]
  },

  "23": {
    "level": "B2",
    "time": "45–55 minutes",
    "objectives": [
      "Lay out a French CV in the expected sections and order.",
      "Describe experience with strong action verbs rather than noun lists.",
      "Write a lettre de motivation with the vous–moi–nous structure.",
      "Talk about skills and levels without over- or under-claiming.",
      "Adapt a CV between French and Québécois conventions.",
      "Answer the most common interview questions in French."
    ],
    "summary": [
      "Standard sections: état civil, formation, expérience professionnelle, compétences, langues, centres d'intérêt.",
      "French CVs are traditionally one page and reverse-chronological.",
      "Action verbs do the work: gérer, encadrer, mettre en place, assurer le suivi, développer.",
      "The lettre de motivation runs vous (their need) → moi (my fit) → nous (what we do together).",
      "Québec CVs omit the photo, age and marital status that some French CVs still carry.",
      "Language levels should be stated by CEFR band or by a plain phrase like bonne maîtrise."
    ]
  },

  "24": {
    "level": "B2",
    "time": "45–55 minutes",
    "objectives": [
      "Survive fast connected speech by predicting the reductions.",
      "Recognise the reduced forms: chuis, y'a, t'as, j'sais pas, i'faut.",
      "Extract the essentials from a news bulletin without catching every word.",
      "Read a headline, a chapeau and a lead for the facts.",
      "Watch French film and TV with a strategy rather than subtitles alone.",
      "Evaluate whether a French-language source is reliable."
    ],
    "summary": [
      "Connected speech deletes: il y a → y'a, je suis → chuis, tu as → t'as, je ne sais pas → chais pas.",
      "News bulletins are structured — the first sentence usually contains the whole story.",
      "Listen for the known, not the unknown: names, numbers, dates and connectors anchor the rest.",
      "Headlines are nominalised and article-free; the chapeau under them gives the facts in full sentences.",
      "Use French subtitles, not English ones — they train the mapping from sound to spelling.",
      "Québec and French media differ in pace, vocabulary and anglicism policy — sample both."
    ]
  },

  "25": {
    "level": "B2",
    "time": "50–60 minutes",
    "objectives": [
      "Hear and describe the Québécois sound system: affrication, diphthongs, vowel length.",
      "Place joual, courant québécois and soutenu québécois on a register ladder.",
      "Use everyday Québécois words that differ from France French.",
      "Understand sacres and know why not to use them.",
      "Explain why anglicisms are treated differently in Québec than in France.",
      "Handle administrative Québécois: RAMQ, Régie, assurance maladie."
    ],
    "summary": [
      "Québécois affricates t and d before i and u: tu becomes 'tsu', dire becomes 'dzire'.",
      "Written Québécois in formal contexts is nearly identical to French French — the difference is spoken and lexical.",
      "Everyday differences: un char (car), une job (feminine!), magasiner, présentement, tantôt, pantoute.",
      "Sacres draw on church vocabulary and are far stronger than they look — recognise, don't produce.",
      "Québec resists anglicisms officially (courriel, clavardage) while using others freely in speech.",
      "Bill 101 and the Office québécois de la langue française shape the public language you will read."
    ]
  },

  "26": {
    "level": "B2",
    "time": "50–60 minutes",
    "objectives": [
      "Describe the four papers of the DELF and how they are weighted.",
      "Budget your time paper by paper, including the note éliminatoire risk.",
      "Attack the compréhension orale with a read-the-questions-first strategy.",
      "Structure a production écrite that hits the B2 marking criteria.",
      "Prepare the production orale, including the monologue suivi and the debate.",
      "Build a realistic study plan from where you are to exam day."
    ],
    "summary": [
      "Four papers, 25 points each: CO, CE, PE, PO. You need 50/100 overall and at least 5/25 on each.",
      "Read the questions before the audio plays — the two listenings are short and you cannot pause.",
      "B1 production écrite is usually a letter or an article; B2 is an argued text with a clear plan.",
      "Markers reward structure and connectors as much as vocabulary — plan before you write.",
      "The B2 oral is a defended opinion on a short document: state, support, concede, conclude.",
      "Leave five minutes to proofread agreements, accents and verb endings — the cheapest marks on the paper."
    ]
  }
};
