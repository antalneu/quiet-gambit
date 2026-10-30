# The Quiet Gambit

A static chess-learning studio built around an **opening and gambit trainer**: pick a line and play it from the first move as your side, in guided or practice mode.

- **Openings** for White and Black: opening → variation → line, shown as a branch tree on each opening page.
- **Gambits** for both sides, each labelled honestly for soundness.
- **Search** by name, other names, ECO codes or moves, with four filters.
- More than a hundred short **interactive lessons**, grouped into guided paths.
- An optional **coach** that suggests what to study next.
- **Local progress**, saved in the browser.

## Run it

There is no build step and nothing to install. Either open `index.html` in a browser, or serve the folder:

```
powershell -NoProfile -ExecutionPolicy Bypass -File serve.ps1
```

Then visit http://localhost:5173/. Fonts load from Google Fonts. Offline, the site falls back to system fonts.

## Check the content

All content is plain data. A script checks it using the site's own move generator. It runs with the Windows script host, so Node is not needed:

```
cscript //nologo tools\check-content.js
```

It verifies:

- **Positions and moves:** every FEN, and the legality and SAN of every move, including move lines and pitfall illustrations.
- **Puzzles:** answers, including any alternative mates, which must be listed.
- **Library structure:**
  - each variation belongs to a family that shares its root moves;
  - each variation's parent is a real prefix of its moves;
  - no two lines share the same defining moves.
- **Required fields:** study time, labelled pitfalls, and 2–4 move lines per entry.
- **Links:** cross-references and guided-path steps.
- **Spoilers:** a lesson's read step must not reveal its puzzle answer.

It ends with counts of families, variations, move lines, gambits and lessons. To check only some files, pass their names.

## How the site is organised

Top navigation: **Openings · Gambits · Lessons · My study**, plus search. On phones the navigation becomes a glass tab bar.

```
Openings (#/openings) → White or Black → first move (1.e4, 1.d4, flank; for Black: vs 1.e4 ...)
  Opening page (#/family/<id>?v=<variation>&line=<line>)
    board + branch tree of variations; the selected variation's lines; Train and Practise;
    plans, traps and theory behind "About this opening"
Gambits (#/gambits) → White or Black → first move → gambit page (#/gambit/<id>), same layout
Trainer (#/train/<entry>/<line>?mode=guided|practice): play the line from move one
Search (#/search?q=&side=&first=&cat=&level=)
Lessons (#/lessons, #/lessons?tab=paths) → category or path → lesson
My study (#/study): what to do next, lines due for review, progress; plan settings at #/coach
```

Old routes (`#/library`, `#/opening/<id>`, `#/explorer`, `#/progress`) redirect to their new homes.

## The trainer

- **Guided mode:**
  - You find your own moves.
  - Hint works in three steps: it highlights the piece, then shows an arrow, then plays the move.
  - Key moves get a one-line reason.
  - Plans, traps and theory sit behind "More about".
- **Practice mode:**
  - You recall the line without hints.
  - The summary scores the moves you found unaided and lists the ones to look at again.
  - Each result sets a review date. The interval grows with your streak: 1, 3, 7, 14, 30, then 60 days.
- **Other legal moves:** a move that isn't in the line is not simply marked wrong.
  - If it is another line in the library, the trainer names that line and offers to switch to it.
  - If it reaches the same position by another move order, the trainer says so.
  - Otherwise it says only that the move is not in this line. There is no engine and no evaluation.
- **Keyboard:**
  - On the board, the arrow keys move between squares.
  - `[` and `]` review the moves already played, and `L` returns to the live position.
  - `H` asks for a hint and `R` retries.
  - `Esc` closes the "Moves and lines" sheet.
- **Storage:** results are kept under `qg-trainer-v1`.

## Layout

| Path | What it is |
|---|---|
| `index.html` | Page shell: header, `<main>`, footer, script tags |
| `css/styles.css`, `css/library.css`, `css/catalogue.css`, `css/glass.css` | Base system and components; `glass.css` (loaded last) is the v4 "Calm Glass" layer: tokens, glass navigation and sheets, opaque page surface, trainer and opening page |
| `js/chess.js` | Chess rules: FEN, legal moves (castling, en passant, promotion), SAN. No engine |
| `js/board.js` | Board component: tap, drag and keyboard moves, promotion chooser, arrows, screen-reader labels |
| `js/ui.js` | Shared UI: board frame, line stepper, puzzle runner |
| `js/content/*.js` | All content as data: `core.js` holds the categories and guided paths, plus one file per area |
| `js/data.js` | Builds the library model from the content files:<br>• merges the files and links families, variations, move lines, gambits and lessons both ways;<br>• builds the explorer trees, detecting transpositions by comparing positions;<br>• builds the search index |
| `js/progress.js` | Local progress (new, in progress, completed, review) and the coach preferences |
| `js/trainer.js` | The trainer: builds a line, guided and practice modes, move classification, results store |
| `js/app.js`, `js/views-*.js` | Router and views: `views-v4.js` (home, search, browse, opening and gambit pages, lessons, my study) replaces the older screens in `views-library.js`; `views-coach.js` (plan), `views-lesson.js` |
| `docs/` | Content schema, curriculum, the v4 specs (`v4-visual.md`, `v4-trainer.md`, `v4-ia.md`) and the reviews |

## How judging works

The board accepts only legal moves. Puzzles compare your move with prepared answers, plus any checkmate when the answer is itself a mate.

There is no engine. A legal move that isn't a prepared answer gets curated or general feedback, and nothing on the site claims an engine evaluation. Lines where theory is unsettled carry a visible "note on certainty".

The trainer judges your moves only against the library's lines, as described above.

Progress is stored in `localStorage` under `qg-progress-v2`; older `qg-progress-v1` data is migrated. Coach preferences are stored under `qg-coach-v1` and trainer results under `qg-trainer-v1`. All stay in that browser.

## Adding content

See `docs/content-schema.md`. Add a file under `js/content/`, list it in `index.html`, and run the checker until it reports 0 errors.
