# Brief for content agents: library v3

The Quiet Gambit is a static chess learning site (no build step, no backend) in `C:\Users\PC\Desktop\Chess`.
All chess content is plain data in `js/content/*.js`. The site and the checker use the same move generator (`js/chess.js`),
so a legal, correctly written move will be accepted everywhere.

Read first:
- `docs/content-schema.md`: the full schema. The section **Schema v3 additions** at the end is new and is what this round is about.
- Your own file(s), in full, before you change anything.

## The library this round builds
Chess Library -> Openings or Gambits -> Side and category -> Opening family -> Variation -> Move line -> Related lesson.

- **Family** (`families: [...]`): the named opening as one side meets it (White's Sicilian, Black's Sicilian are two families).
- **Variation** (a `repertoire` entry): a named branch with its own defining moves AND its own plans.
- **Move line** (`lines` inside a variation or gambit): a concrete continuation, usually one of the opponent's main choices.

Never inflate counts: no transpositions, duplicate names or trivial move-order differences as separate variations.
If two names describe the same position, use one entry and put the other name in `aliases`.

## Rules for every agent
- Edit ONLY the files your task names. Every other file is read-only for you (other agents are editing them at the same time).
- ES3-safe data only: no trailing commas, no `let`/`const`/arrow functions/template strings, no functions. ASCII only. British spelling.
- Run the checker on your own files until it reports **0 errors and 0 warnings**:
  `cscript //nologo tools\check-content.js js\content\<file>.js [more files]`
  (references to ids in files you do not own appear as warnings in partial mode; those are the only acceptable warnings,
  and only for ids listed in this brief or ones you have checked exist.)
- Chess accuracy matters more than volume. Every claim about a line must be something a strong player would sign.
  If you are not sure a line is established theory, say so in the entry's `uncertain` field, and keep the text modest.
  Do not invent games, players, years, statistics or engine evaluations. Do not claim "refutes", "wins by force" or
  "busted" unless that is well known.
- Puzzle answers must be clearly best; list every equally good answer in `accept`. Multi-ply solutions need forced or obviously natural replies.
- Every variation and gambit must link to at least one lesson (`lessons: [...]`) that genuinely teaches it, its structure or its main idea.
- When you finish, reply with: the counts you reached, the ids you added, every place you set `uncertain`, any lesson ids you would
  like added to a guided path (with a one-line reason), and anything you were unsure about.

## Lesson ids already in use (the next free number is shown)
white-openings -> next 15 · black-vs-e4 -> next 13 · black-vs-d4 -> next 13 · black-vs-flank -> next 10 ·
white-gambits -> next 13 · black-gambits -> next 13 · tactics -> next 16 · strategy -> next 11 · attack -> next 11 ·
defence -> next 10 · endgames -> next 13 · practical -> next 10. New categories (curriculum agent): calculation-1, pawn-structures-1, model-games-1.
Foundation lessons (read-only, `js/content/foundations.js`): openings-1, openings-2, gambits-1, gambits-2, tactics-1..3, middlegames-1, middlegames-2, endgames-1..3.
`js/content/extra-openings.js` and `js/content/extra-gambits.js` are read-only for opening agents; you may reference their lesson ids.

## Canonical family ids (use these exact ids; you may add new ones with the same prefix in your own file)
White families (`wf-`, owned by the White repertoire agent, in `white-repertoire.js`):
wf-italian, wf-ruy-lopez, wf-scotch, wf-four-knights, wf-vienna, wf-petroff, wf-sicilian, wf-french, wf-caro-kann,
wf-scandinavian, wf-pirc, wf-alekhine, wf-queens-gambit, wf-catalan, wf-london, wf-colle, wf-trompowsky, wf-kings-indian,
wf-grunfeld, wf-nimzo-indian, wf-dutch, wf-benoni, wf-english, wf-reti, wf-kia, wf-bird

Black families (`bf-`): vs 1.e4 families in `black-vs-e4.js`:
bf-italian, bf-ruy-lopez, bf-scotch, bf-petroff, bf-sicilian, bf-french, bf-caro-kann, bf-scandinavian, bf-pirc, bf-alekhine
vs 1.d4 and flank families in `black-vs-d4-flank.js`:
bf-qgd, bf-slav, bf-qga, bf-nimzo-indian, bf-queens-indian, bf-bogo-indian, bf-kings-indian, bf-grunfeld, bf-benoni, bf-dutch,
bf-vs-london, bf-vs-colle, bf-vs-trompowsky, bf-english, bf-reti, bf-kings-indian-setup, bf-vs-kia, bf-vs-bird

## Move lines: what good looks like
A variation page shows its typical move order (the `line` sample), then 2-4 move lines a learner can step through on a board.
Lines usually follow the opponent's main choices at the first real branch after the defining moves, so a learner sees that the
opening branches in response to the opponent and is not forced. Each line: 4-14 plies continuing from the position after
`defining`, notes on the moves that matter ("why", not just "what"), and a summary of what to remember.
Pitfalls are labelled `Trap`, `Mistake` or `Risk` and say who must beware.
