# Code review: The Quiet Gambit

Scope: index.html, css/styles.css, js/board.js, js/app.js, js/content.js (chess.js rules taken as verified).
Method: code reading, plus flows run in the browser at http://localhost:5173 (no console errors seen).
Content check: every line, puzzle solution, `accept` sequence and `wrong` key in content.js is legal, and every field app.js reads is present.

## High

**H1. Stale puzzle reply timer moves pieces on the next step's board and makes it interactive.** `js/app.js:322-329`
Scenario (reproduced in gambits-2, step 3): play 1...Qh4+, then press "Previous step" (or a step-track button) within 650 ms. The timer still runs. It calls `frame.board.playMove('g2g3')` on the line-replay step's board, which is shared, and then `setInteractive(true)`. The read-only line board now shows g3 and "Black to move", and you can drag pieces on it freely, because `frame.onMove` is null and so accepts every move.
Fix: give each `puzzle()` a `dead` flag (or keep its timer ids) plus a `destroy()` that clears them. Call it from `renderStep`, `complete` and route changes. Also guard every callback with `if (dead || frame.onMove !== handler) return;`.

**H2. Stale "Show answer" sequence freezes the next puzzle and marks the wrong step.** `js/app.js:345-356`, `300`, `777-781`
Scenario (reproduced in tactics-1): on step 3, click Show answer, then go to step 2 straight away. The chain finishes on step 2's new puzzle. It plays the old answer, adds a green `is-good` mark on d5 and calls `setInteractive(false)`, so step 2 can no longer be played. Its feedback stays empty and Hint stays enabled. `onSolved` then sets `stepDone[stepIndex]` for whichever step is showing now.
Fix: same cancel and guard as H1. Also pass the step index into the closure (`var myStep = stepIndex`) instead of reading the shared variable.

**H3. The skip link sends you to the Not-found view.** `index.html:17` with `js/app.js:860-864`
`href="#main"` fires `hashchange`, and the router renders route "main" as "That page is not on the board" (reproduced). This breaks the main keyboard and screen-reader shortcut on every page. The `id="term-…"` anchors in the glossary (`app.js:688`) would break the same way if anything linked to them.
Fix: in `render`, ignore hashes that do not start with `#/`. Better, handle the skip link with a click handler: `preventDefault()` and `main.focus()`.

## Medium

**M1. Board listeners on `window` are never removed (leak).** `js/board.js:216, 231, 252`
Every `QGBoard.create` adds pointermove, pointerup and pointercancel listeners to `window`. Measured: opening #/openings and clicking its 4 tabs, then #/middlegames and #/ gave 10 live pointermove handlers. Each one keeps its detached board DOM in memory, and the count keeps growing with every tab click and route change.
Fix: attach move, up and cancel only while a drag is active (add them in pointerdown, remove them in pointerup or cancel), or use `grid.setPointerCapture`. Add a `destroy()` method to the board.

**M2. During the 650 ms reply window the board stays interactive and Hint points at the opponent.** `js/app.js:319-321`, `340-344`
Measured: after 1...Qh4+ the white pieces showed `is-movable` and could be picked up (the move was then rejected with a red flash). Pressing Hint highlighted g2, a white pawn, with the text "The piece to move is marked". That highlight stays after the reply has been played. Reset is silently ignored while `busy`.
Fix: call `setInteractive(false)` when `busy` is set, since line 327 already turns it back on. Disable Hint, Show answer and Reset while busy. Hint should read `seqs[0][history.length]` only when it is the solver's turn.

**M3. "Go through it again" leaves the old progress gates in place.** `js/app.js:824`
The restart handler resets `stepDone`, but not `reached` or `revealedAny`. Measured on tactics-1: after restarting, every step-track button is enabled, so the learner can jump straight to the last step. Steps 1 and 2, including the unsolved puzzle, then show as done (`i < stepIndex` at line 724). A later finish also keeps the old `revealed: true` and overwrites the first completion's `at` (line 799).
Fix: on restart, set `reached = 0; revealedAny = false;`. Base the done pip on `stepDone[i]` instead of `i < stepIndex`.

**M4. The last-move finish has a 60 ms window where the puzzle is still open.** `js/app.js:332`
`solved` is set only when `finish` runs. Until then, Reset is accepted and moves on the board are judged. A board move counts as a wrong attempt with the message "X is not the move". A Reset is then followed by "Correct" on an empty history.
Fix: set `solved = true` (or `busy = true`) and call `setInteractive(false)` synchronously before scheduling `finish`.

**M5. Unfinished "Words you will meet" section on the path page.** `js/app.js:659`
The section has only a heading, the sentence "Short definitions of the terms used in the lessons." and a link, with no definitions under it. Also, the Tactics page asks for "Double attack" and "Discovered attack" (`app.js:611`), but neither term is in `content.js` glossary, so they are dropped without notice.
Fix: render a few glossary entries there (or remove the section and keep just the link). Add the two missing terms, or remove them from `terms`.

## Low

- **Progress parsing**, `app.js:59`: `typeof null === 'object'`, so a stored `{"completed":null}` passes the check, and `isDone` then throws, which breaks every view. Use `parsed.completed && typeof parsed.completed === 'object' && !Array.isArray(parsed.completed)`.
- **Reset progress loses focus**, `app.js:675-678`: `render()` replaces the button and focus falls to `<body>`. Focus the h1 or the stat card afterwards.
- **Mobile menu stays open**, `app.js:870` and `index.html:28`: tapping the link for the current route fires no `hashchange`, so the menu does not close. Close the menu on any nav link click.
- **Dead code and unused values**:
  - `ls` is unused at `app.js:437`.
  - `revealed` is written but never read (`app.js:252, 293, 359`).
  - The empty `if` at `app.js:784` does nothing.
  - The stepper `id` and `#…-pos` (`app.js:167, 182`) are never referenced.
  - Options that no caller passes: `startArrows`, `onStep` (`app.js:191, 207`), `onReset` (`app.js:364`), `onIllegal` (`board.js:149`).
  - Unused return values: the `lineStepper` object and `puzzle`'s `ui`.
  - Board API never used: `setArrows`, `focus`, `el`.
  - In every puzzle, `accept` is identical to `[solution]`, so `app.js:250-251` has no effect.
- **Unused CSS**: `.term` (102), `.empty-state` (478), `.arrow-alt` (344, no arrow has a 3rd element), `.flash-good` and `@keyframes flashGood` (337-339, `flash(…,'good')` is never called), and `.prose p + p` / `.prose ul` (96-98, `.prose` is only ever put on a `<p>`).
- **Cascade conflict**, `styles.css:177` vs `180`: `.btn-sm` comes later with the same specificity, so its `padding` shorthand overrides `.btn-quiet`'s 10px side padding on every `btn-quiet btn-sm` button (puzzle Show answer and Reset, Reset progress). Use `.btn-quiet.btn-sm { padding-inline: 10px }` or reorder the rules.
- **Inline styles that should be classes**: 14 in app.js:
  - `style="padding-top:24px"` on five track sections (549, 559, 590, 601, 616); use `--s-5`.
  - `margin:0` on the figure (128).
  - `display:block` on `.lesson-sum` (381).
  - The completed-lesson banner (708).
  - `.stepper-col` gets its grid and gap from JS (515-516) and has no CSS rule.
  - The glossary `padding-bottom` (688).
  - `margin-left` on pip text (409, 651).
  - `#next-why` gets its colour from JS (827).
- **Header-offset magic numbers do not agree**: `scroll-padding-top: 88px` (38), sticky `top: 92px` (371, 486), JS offset `- 90` (`app.js:793`), header height 68 or 60px. Make them one `--header-h` token.
- **Colours outside the tokens**: `#fff`, `#1F4B30`, `#5E2117`, `#1C2170`, `#C9CBD6`, `#4A4337`, `#FFFDF6` (styles.css 173, 282, 360, 362, 364, 313, 301, 415, 461, 463).
- **Headings and ARIA**:
  - The explorer panel uses `<h2>` for the opening name inside the "Opening families" `<h2>` section (`app.js:522`). Use `<h3>`.
  - The tablist declares `aria-orientation="vertical"` (`app.js:504`), but the tabs are laid out horizontally under 760px.
- **Nested panels**: the hero puzzle puts `.puzzle-panel` inside `.puzzle-panel` (`app.js:489` plus `261`). Use a different wrapper class.
- **Only queen promotion**: no current puzzle depends on promotion. `board.js:152` always promotes to a queen, and `sameMove` treats a missing promotion piece as a queen (`app.js:276`), so underpromotion puzzles cannot be authored. This needs a picker if that content is ever added.

Checked and found sound: the line stepper (bounds, disabled state, focus handoff), explorer keyboard tabs, board orientation flips (arrows and focus square recomputed), keyboard move focus, drag ghost cleanup on pointercancel, `complete()` choice of next lesson, and no duplicate ids.
