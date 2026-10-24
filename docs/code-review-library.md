# Code review: library expansion (application code)

Scope: index.html, css/styles.css, css/library.css, js/board.js, ui.js, data.js, progress.js, app.js, views-openings.js, views-lesson.js, tools/check-content.js. chess.js was not reviewed (perft-verified).

How it was checked: I read all the code. In a browser tab I visited every route (home, paths, library, progress, glossary, both repertoire views in map and list, gambits, 9 paths, 12 categories, 78 openings, 30 gambits, 133 lessons) and collected errors on each one. I also ran `cscript tools\check-content.js`. Midway through, the browser tools stopped being available, so the promotion findings below come from tracing the code, not from a live run.

What passed: no route returned 404 and no console errors appeared. No page has duplicate DOM ids. Every `aria-controls`, `aria-labelledby` and `aria-describedby` points to an element that exists. Every `#/` link resolves to a real entity. All transpositions point to existing lines. Opening-tree totals match the line counts (white 46 = 32 + 14 gambits, black 62 = 46 + 16). Segment labels and move numbers are correct (`3.d4 exd4`, `3...a6 4.Bxc6`). Glossary anchor slugs are unique. Puzzle timers are cancelled when the route changes. Filter URLs survive a reload and the back button.

## High

**H1. The promotion chooser is not tied to the board state, so it can be duplicated and can commit a stale move** (js/board.js:144-156, 176-202)
- **The problem:** while the chooser is open, the board stays interactive and `selected` is still set. `tryMove` does not check for an open `.promo`. `setPosition`, `setInteractive` and `setOrientation` never remove the chooser. `commit()` does not re-check that the move is legal or that the board is interactive.
- **Failure scenario 1 (duplicate):** double-tap the promotion square, or press Enter, Shift+Tab back to the board and Enter again. Each attempt opens another chooser. The ones underneath keep their old `legal` list.
- **Failure scenario 2 (corrupted board):** in the black-gambits knight-promotion puzzle (`solution: ['f2g1n']`), drag the pawn to g1 so the chooser opens. Then click "Previous step" or a step-track button. `renderStep` destroys the puzzle, which sets `frame.onMove = null`, so `boardFrame` returns `true`. Clicking Knight in the leftover chooser then runs `applyMove(f2g1n)` on the read step's position, and an illegal position is drawn.
- **Fix:**
  - Keep a single `promoBox` per board.
  - `tryMove` and `activate` return early while it is open.
  - `setPosition`, `setInteractive`, `setOrientation` and `clearSelection` call `closePromo()`.
  - `commit` re-validates `move` with `C.legalMoves(state)`.
  - Clear the `is-dragging` class when the chooser opens. At the moment the origin square stays at 25% opacity while the chooser is up (board.js:275).

## Medium

**M1. The screen-reader announcement always says "promotes to a queen"** (js/board.js:211)
- `describeMove` ignores `move.promo`. The knight-promotion puzzle (f2g1n) is announced as a queen promotion, both when the learner plays it and when "Show answer" replays it.
- **Fix:** use `SINGLE[move.promo]`, i.e. `', promotes to a ' + name`.

**M2. Just opening a lesson marks it "In progress" and makes it `last`** (js/views-lesson.js:43, js/progress.js:250-255)
- `P.start` runs on render, before the learner does anything. Opening a lesson from a chip and leaving straight away:
  - takes it out of the library's "New" filter;
  - changes the home and progress call to action to "Resume: <that lesson>".
- Opening an already-completed lesson overwrites `last`, so a lesson that really is in progress drops out of `A.nextUp` (app.js:71-72).
- **Fix:** call `P.start` on the first step change or the first move. Only set `last` for lessons that are not completed.

**M3. "Resume" restarts the lesson at step 1** (js/views-lesson.js:37, js/progress.js:256-259)
- `P.step` saves `record.step`, but no code ever reads it. The "Resume: …" button and the "Resume lesson" button on the progress page (app.js:90, 434) always open step 1.
- **Fix:** start at `stepIndex = reached = min(record.step, steps.length - 1)` when the state is in-progress, and mark the earlier read steps as visited.

**M4. The "review" state hides completion, so the counts disagree** (js/progress.js:238-243; js/app.js:357, 425, 440-442)
- `P.state` returns `review` for a completed lesson that is flagged for review.
- **Scenario:** complete 3 lessons, using Show answer once. The progress stat shows "3 / 133". The legend shows Completed 2, Review 1. The library's Status = Completed filter lists 2.
- **Related:** marking an unstarted lesson for review makes it "Review" rather than "In progress", so `nextUp` stops offering to resume it (app.js:72).
- **Fix:** keep `review` as a flag next to the status (for example `state()` returns the base status plus `P.isReview()`). Base the filters and legends on the status, and show review as a separate badge or count.

## Low

- **Promotion chooser accessibility** (board.js:178): it has `role="dialog"` but no `aria-modal` and no focus containment. Tab moves focus out while the chooser stays open, and clicking elsewhere does not close it.
- **Filters render twice per select change.** Each select fires both `input` and `change`, and both are bound to `apply`, which re-renders up to 133 rows twice (app.js:369-370; views-openings.js:114-115, 301-302). Bind `input` only.
- **Openings list view:**
  - the search text is lower-cased into the URL and the input box after a reload (views-openings.js:91, 112);
  - the group and view links drop the list filters (views-openings.js:50);
  - `fams` is computed but never used (views-openings.js:107-108).
- **Map toggle state:** the `.tree-move` toggle buttons have no `aria-pressed="false"` until the first selection (views-openings.js:135, 166).
- **Wrong breadcrumb:** `#/lesson/x?path=p`, where p does not contain x, shows "Step 0 of N" (views-lesson.js:45-47). Ignore `path` when `pathIdx < 0`.
- **Puzzle prompt placement:** whether the prompt sits above or below the board is decided once per step with `matchMedia` (views-lesson.js:153). Resizing across 900px leaves it in the wrong slot.
- **Dead router condition:** `head !== 'gambits'` can never matter, because `REDIRECT` has no `gambits` key (app.js:521).
- **Dead pre-expansion CSS** (styles.css), none of it referenced by any JS:
  - `.track-strip*` (230-245)
  - `.explorer*` (368-401)
  - `.board-progress` (467-468)
  - `.path-track*` (469-476)
  - `.objectives` (502-504)
  - `.track-cta` (523)
  - `.status-check` (453)
  - `.detail-head` (383)
  - `.term` (102)
  - `.pip.is-done` (192) and `.lesson-row.is-done` (452): the state is now called `completed`
- **Duplicate rules with conflicting values:**
  - `.tag` at styles.css:390 vs library.css:29 (inline-block vs inline-flex, different border and colour);
  - `.mainline` at styles.css:385 vs library.css:184.
  - Delete the styles.css copies.
- **Specificity conflicts:**
  - `.detail-block h3` (styles.css:384, 0-1-1) overrides `.h4` on every `<h3 class="h4">` in the connect grid and plan columns, making them 15px graphite.
  - `.lesson-row.is-review a` (library.css:42) overrides `.lesson-row.is-next a` (styles.css:450). A path's next step that is flagged for review loses its accent marker, and its status reads "Review" instead of "Next".
- **Inline styles:** app.js:438 (`font-size:28px`), app.js:494 (`padding-bottom:48px`), ui.js:65 (`margin:0`). Move them to classes.
- **Hard-coded colours and spacing outside the tokens:**
  - colours: `#fff` (library.css:11, 13, 31, 63, 96), `#C9CBD6` (styles.css:461), the feedback text colours (styles.css:360-364);
  - spacing: library.css uses raw 6, 14 and 18px gaps instead of the `--s-*` spacing variables.
- **tools/check-content.js:**
  - `CATEGORIES` is hard-coded (61-62) and can drift from `core.js`;
  - `ref()` does not check the kind of the referenced id, so a lesson id in `related.openings` passes;
  - the `QG_CONTENT` line (75) is legacy;
  - the wrong-move check compares raw UCI strings, while the runtime uses `sameMove` with a default promotion piece of q.
  - The current run reports 6 dangling related-lesson ids in skills-strategy-endgames-practical.js (the file was being edited during the review). data.js filters these out silently.
- **Performance (not profiled):** fine at 133 lessons. The heaviest work is the library re-render on each keystroke and `updateChrome` on every `P.save`; both are O(n) with no layout thrash.
