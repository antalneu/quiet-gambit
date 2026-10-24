# The Quiet Gambit

A static chess-learning studio built around a searchable **Chess Library**:

- **Openings** for White and Black, organised as family → variation → move line.
- **Gambits** for both sides, each labelled honestly for soundness.
- An **Opening Explorer** that follows the library move by move.
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

## How the library is organised

```
Chess Library (#/library: search, filters, sorting, browse by category)
├── Openings (#/openings)
│   ├── White Openings: 1.e4 · 1.d4 · flank openings
│   └── Black Openings: vs 1.e4 · vs 1.d4 · vs flank openings
│       └── Family page (#/family/<id>): overview, how to choose, variation tree, comparison table
│           └── Variation page (#/opening/<id>): where it branches, move lines, plans, traps, lessons
│               └── Move line (#/opening/<id>?line=<line>): played on the board
├── Gambits (#/gambits): White Gambits · Black Gambits, by first move
│   └── Gambit page (#/gambit/<id>): offer, compensation, accepted and declined lines, risks
└── Opening Explorer (#/explorer): move-by-move tree, branch points, transpositions, compare two lines
```

- **Lessons:** `#/lessons` lists every lesson, with filters for side, category, level, opening, time and status. Guided paths are at `#/paths`.
- **Coach:** `#/coach` holds your preferences and the plan built from them. Progress is at `#/progress`.

## Layout

| Path | What it is |
|---|---|
| `index.html` | Page shell: header, `<main>`, footer, script tags |
| `css/styles.css`, `css/library.css`, `css/catalogue.css` | The visual system; the shared library components; the v3 library, explorer and coach components |
| `js/chess.js` | Chess rules: FEN, legal moves (castling, en passant, promotion), SAN. No engine |
| `js/board.js` | Board component: tap, drag and keyboard moves, promotion chooser, arrows, screen-reader labels |
| `js/ui.js` | Shared UI: board frame, line stepper, puzzle runner |
| `js/content/*.js` | All content as data: `core.js` holds the categories and guided paths, plus one file per area |
| `js/data.js` | Builds the library model from the content files:<br>• merges the files and links families, variations, move lines, gambits and lessons both ways;<br>• builds the explorer trees, detecting transpositions by comparing positions;<br>• builds the search index |
| `js/progress.js` | Local progress (new, in progress, completed, review) and the coach preferences |
| `js/app.js`, `js/views-*.js` | Router and views: `views-library.js` (index, areas, family, variation and gambit pages), `views-explorer.js`, `views-coach.js`, `views-lesson.js` |
| `docs/` | Content schema (v3 hierarchy at the end of `content-schema.md`), curriculum rationale, and the content, UX and code reviews |

## How judging works

The board accepts only legal moves. Puzzles compare your move with prepared answers, plus any checkmate when the answer is itself a mate.

There is no engine. A legal move that isn't a prepared answer gets curated or general feedback, and nothing on the site claims an engine evaluation. Lines where theory is unsettled carry a visible "note on certainty".

The explorer covers only the moves the library explains. If you play another legal move there, it tells you the move is not covered; it does not pretend to analyse it.

Progress is stored in `localStorage` under `qg-progress-v2`; older `qg-progress-v1` data is migrated. Coach preferences are stored under `qg-coach-v1`. Both stay in that browser.

## Adding content

See `docs/content-schema.md`. Add a file under `js/content/`, list it in `index.html`, and run the checker until it reports 0 errors.
