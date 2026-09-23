#!/usr/bin/env python3
"""
add_footer_nav.py
-----------------
Add (or refresh) footer navigation on every French lesson page, modeled on
the same pattern used in ../python_intro, ../latin, and ../korean.

What it inserts on each lesson page (just before <script src="site-nav.js">):

    <nav class="lesson-nav" aria-label="Lesson Navigation">
        <a href="prev.html" class="prev-lesson">&larr; Previous: ...</a>
        <a href="index.html" class="home-link">&#127968; Course Home</a>
        <a href="next.html" class="next-lesson">Next: ... &rarr;</a>
    </nav>

    <footer class="site-footer">
        ... copyright + links + print button ...
    </footer>

Edge cases:
  - First lesson: prev side becomes <span></span>.
  - Last  lesson: next link is omitted.

Idempotency:
  The block is wrapped in BEGIN/END sentinel comments. Re-running the script
  REFRESHES the block in place (no duplicates), so it's safe to run again
  after editing the LESSONS table.

Prerequisite:
  site-nav.js must NOT also inject a .lesson-nav and .site-footer at runtime
  (otherwise pages will show two of each). The French site-nav.js has been
  trimmed so it only injects the header, dark-mode toggle, content-wrap,
  and quiz interactivity.

Usage:
    python3 add_footer_nav.py                # dry run (default) - prints plan
    python3 add_footer_nav.py --apply        # write changes (.bak backups)
    python3 add_footer_nav.py --apply --no-backup
    python3 add_footer_nav.py --dir .        # explicit project dir
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

# ---------------------------------------------------------------------------
# Lesson order  (taken from index.html course-grid)
# Tuple: (filename, short_title_used_in_prev/next_link)
# ---------------------------------------------------------------------------
LESSONS: list[tuple[str, str]] = [
    ("french_alphabet_pronunciation.html",                         "The French Alphabet & Pronunciation"),
    ("french_greetings_essentials.html",                           "Greetings & Essential Phrases"),
    ("french_france_vs_canada.html",                               "France vs Canadian French"),
    ("french_grammar_nouns_articles.html",                         "Nouns, Gender & Articles"),
    ("french_grammar_etre_avoir.html",                             "Être, Avoir & the Essential Verbs"),
    ("french_numbers_time_dates.html",                             "Numbers, Time & Dates"),
    ("french_grammar_present_tense.html",                          "The Present Tense"),
    ("french_family_descriptions.html",                            "Family & Personal Descriptions"),
    ("french_grammar_adjectives_adverbs.html",                     "Adjectives, Adverbs & Comparisons"),
    ("french_grammar_negation_questions.html",                     "Negation & Asking Questions"),
    ("french_food_dining.html",                                    "Food & Dining"),
    ("french_grammar_possessives_quantities.html",                 "Possessives, Demonstratives & Quantities"),
    ("french_shopping_money.html",                                 "Shopping & Money"),
    ("french_home_household_routines.html",                        "Home, Household & Daily Routines"),
    ("french_grammar_reflexives_commands.html",                    "Reflexive Verbs, Commands & Polite Requests"),
    ("french_directions_transportation.html",                      "Directions & Transportation"),
    ("french_grammar_future.html",                                 "Talking About the Future"),
    ("french_hobbies_daily_life.html",                             "Hobbies & Daily Life"),
    ("french_grammar_passe_compose.html",                          "The Passé Composé"),
    ("french_health_body.html",                                    "Health & the Body"),
    ("french_grammar_imparfait.html",                              "The Imparfait & Past-Tense Choice"),
    ("french_weather_seasons.html",                                "Weather & Seasons"),
    ("french_grammar_pronouns_linking.html",                       "Object Pronouns & Linking Ideas"),
    ("french_work_education.html",                                 "Work & Education"),
    ("french_technology_communication.html",                       "Technology & Communication"),
    ("french_emotions_relationships.html",                         "Emotions & Relationships"),
    ("french_travel_culture_france.html",                          "Travel & Culture: France"),
    ("french_travel_culture_canada.html",                          "Travel & Culture: Québec & Francophone Canada"),
]

# Idempotency sentinels
BEGIN = "<!-- BEGIN footer-nav (managed by add_footer_nav.py) -->"
END   = "<!-- END footer-nav -->"

# Where to inject if no existing block is found
INSERT_BEFORE_RE = re.compile(
    r'(?P<lead>\s*)<script\s+src=["\']site-nav\.js["\']\s*>\s*</script>',
    re.IGNORECASE,
)
FALLBACK_BODY_RE = re.compile(r'\s*</body>', re.IGNORECASE)

# Find an existing managed block (across newlines)
EXISTING_BLOCK_RE = re.compile(
    re.escape(BEGIN) + r".*?" + re.escape(END),
    flags=re.DOTALL,
)


def build_footer(prev_file: str | None, prev_title: str | None,
                 next_file: str | None, next_title: str | None) -> str:
    """Return the BEGIN..END block (sentinels included) for one lesson."""
    if prev_file:
        prev_html = (
            f'    <a href="{prev_file}" class="prev-lesson">'
            f'&larr; Previous: {prev_title}</a>'
        )
    else:
        prev_html = '    <span></span>'

    if next_file:
        next_html = (
            f'\n    <a href="{next_file}" class="next-lesson">'
            f'Next: {next_title} &rarr;</a>'
        )
    else:
        next_html = ''

    return (
        f"{BEGIN}\n"
        f'<nav class="lesson-nav" aria-label="Lesson Navigation">\n'
        f"{prev_html}\n"
        f'    <a href="index.html" class="home-link">&#127968; Course Home</a>'
        f"{next_html}\n"
        f"</nav>\n"
        f"\n"
        f'<footer class="site-footer">\n'
        f"    <p>&copy; 2026 All rights reserved.</p>\n"
        f'    <div class="footer-links">\n'
        f'        <a href="https://rays-home.netlify.app/">Ray\'s House of Fun</a>\n'
        f'        <a href="https://rays-home.netlify.app/contact">Contact</a>\n'
        f'        <a href="#" onclick="window.print(); return false;">Print Page</a>\n'
        f"    </div>\n"
        f"</footer>\n"
        f"{END}"
    )


def inject(html: str, footer: str) -> tuple[str, str]:
    """
    Insert/refresh the footer block.
    Returns (new_html, status) where status is one of:
      'refreshed' | 'added'  | 'unchanged' | 'skipped:no-anchor'
    """
    # 1. Refresh existing managed block
    m = EXISTING_BLOCK_RE.search(html)
    if m:
        new_html = html[:m.start()] + footer + html[m.end():]
        return new_html, ("refreshed" if new_html != html else "unchanged")

    # 2. Insert before <script src="site-nav.js"></script>
    m = INSERT_BEFORE_RE.search(html)
    if m:
        start = m.start()
        new_html = html[:start].rstrip() + "\n\n" + footer + "\n\n" + html[start:].lstrip("\n")
        return new_html, "added"

    # 3. Fallback: insert just before </body>
    m = FALLBACK_BODY_RE.search(html)
    if m:
        new_html = html[:m.start()].rstrip() + "\n\n" + footer + "\n" + html[m.start():].lstrip("\n")
        return new_html, "added"

    return html, "skipped:no-anchor"


def main() -> int:
    p = argparse.ArgumentParser(
        description="Add/refresh footer nav on French course lesson pages.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    p.add_argument("--apply", action="store_true",
                   help="Write changes (default: dry run only).")
    p.add_argument("--no-backup", action="store_true",
                   help="When applying, skip writing .bak files.")
    p.add_argument("--dir", default=".",
                   help="Project directory (default: current working dir).")
    args = p.parse_args()

    root = Path(args.dir).resolve()
    if not root.is_dir():
        print(f"ERROR: not a directory: {root}", file=sys.stderr)
        return 2

    mode = "APPLY (writing changes)" if args.apply else "DRY RUN (no writes)"
    print(f"Project root : {root}")
    print(f"Mode         : {mode}")
    if args.apply and not args.no_backup:
        print("Backups      : yes (.bak alongside each modified file)")
    print()

    total = len(LESSONS)
    pending = 0
    missing = []

    for i, (fname, title) in enumerate(LESSONS):
        path = root / fname
        if not path.is_file():
            missing.append(fname)
            print(f"  [missing  ] {fname}")
            continue

        prev = LESSONS[i - 1] if i > 0 else (None, None)
        nxt  = LESSONS[i + 1] if i < total - 1 else (None, None)
        footer = build_footer(prev[0], prev[1], nxt[0], nxt[1])

        original = path.read_text(encoding="utf-8")
        new_html, status = inject(original, footer)

        if status == "unchanged":
            print(f"  [ok       ] {fname}")
            continue

        print(f"  [{status:9}] {fname}")
        if new_html == original:
            continue
        pending += 1

        if args.apply:
            if not args.no_backup:
                bak = path.with_suffix(path.suffix + ".bak")
                bak.write_text(original, encoding="utf-8")
            path.write_text(new_html, encoding="utf-8")

    print()
    if missing:
        print(f"Missing files : {len(missing)}  (check LESSONS table)")
    print(f"Files needing changes : {pending} / {total}")
    if not args.apply and pending:
        print("Re-run with --apply to write changes.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
