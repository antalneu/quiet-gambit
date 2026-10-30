# v4 Spec: the Opening and Gambit Trainer

Status: implementable spec. Vanilla JS, no build, ES5 style like the rest of `js/`. The trainer becomes the primary action on every opening and gambit page ("Train this line"); the existing stepper stays as "Watch it" (read-only replay).

## 0. Files, route, small changes to existing code
- New: `js/trainer-model.js` (pure, no DOM: sequence building, move classification), `js/trainer-store.js` (localStorage), `js/views-trainer.js` (`A.views.train`), `css/trainer.css`. Register scripts in `index.html` after `views-library.js`.
- Route: `#/train/<entryId>?line=<lineId|sample>&mode=guided|practice` (entryId = `QG.line(id)`, opening or gambit). Router: `head === 'train'`, `NAV_SECTION.train = 'library'`. Line switches use `A.replaceHash`.
- `data.js`: add two exports only: `QG.posKey(state)` (existing `posKey`) and `QG.nodesAt(posKey)` (= `byPos[key] || []`, after `tree('white')`). Everything else needed already exists (`QG.node`, `QG.tree`, `QG.moveLines`, `QG.samePosition`, `QG.locate`).
- `board.js`: no change required. The trainer uses `create({interactive, onMove})`, `setPosition(state,{lastMove,arrows,highlights,marks})`, `playMove(uci,{silent:true})`, `setInteractive`, `setOrientation`, `flash`, `focus`, `announce` (not used by the trainer for its own text; see section 6). `onMove` returning `false` makes the board snap back and flash `bad`.
- `views-library.js`: line page gets a primary `Train this line` button (links `#/train/<id>?line=<current>`) next to the stepper, and each move-line row gets a small `Train` link. Status text per section 4.

## 1. Data the trainer consumes

`QGTrainerModel.build(x, which)` returns a **Sequence** (or `null` if fewer than 2 plies are legal):
```js
{ key,            // 'x.id/sample' | ln.key ('x.id/lnId')
  entry: x, line: ln|null, side: x.side, learner: 'w'|'b',   // x.side 'white' -> 'w'
  name, kindLabel,            // 'Typical move order'/'Sample line' or ln.name/ln.kindLine
  uci[], san[], notes[], states[] (n+1 QGChess states, states[0] = start),
  imp[]: null | { reasons: ['note'|'defining'|'branch'|'mate'], text },   // per ply
  definingLen, branchLen,     // ply index where the variation branches from its parent (x.branch.base.length), 0 for gambits
  hash }                      // short hash of uci.join(' '), used by the store
```
Build (mirrors `lineMoves` in views-library.js; move it into the model and have both use it):
- **Typical move order** (`which === 'sample'`): `x.line.moves` (already from the start; its first `definingLen` plies normally equal `x.defining`). If `x.line` is missing: `x.defining` only. Notes = `moves[i].note`.
- **Move line**: `x.defining.map((u,i) => ({uci:u, note: sample[i] && sample[i].uci === u ? sample[i].note : ''}))` concat `ln.moves` (so `ln.full` is the sequence). Notes after `definingLen` come from `ln.moves[k].note`.
- Replay every uci from the start with `moveFromUci`; on the first illegal move truncate and `console.warn` (as `lineStepper` does). SAN from `C.san`. `learner` is the entry's side; a ply `i` is the learner's iff `(i % 2 === 0) === (learner === 'w')`.

**Important plies** (get a spoken/visible explanation): any ply with a note; ply `definingLen-1` (the defining move; generic text "This move defines the <x.short>." if it has no note); the first branching ply: `branchLen` for variations when `branchLen < definingLen` (generic "The <family> branches here."), and ply `definingLen` for move lines (generic "Here the line branches: <ln.name>."); any checkmating ply. Generic texts are flagged `generic: true` and left out of "Full notes". Cap: never auto-show more than one note per ply; one or two sentences (content already obeys this).

**Learner move that is not the expected move.** Let `P` = uci path played so far, `m` = the learner's legal move, `Q = QG.node(side, P.concat(m))`. Classify in this order (function `classify(seq, ply, uci, stateAfter)`):
1. `expected`: `sameMove(uci, seq.uci[ply])` (4-char squares equal; promotion defaults to `q`, as `ui.js` does). Correct.
2. `covered`: `Q` exists and some library entry continues that way. Candidates = `QG.moveLines` where `entry.side === side` and `startsWith(ln.full, P+m)`, plus entries whose `defining` starts with `P+m` (target = that entry's sample line). Rank: same entry first, then `Main line`/`Accepted` kinds, then shorter `full`; keep 2. Outcome: not a mistake. Message names it: "That is another line in the library: <entry.short> / <ln.name>." Buttons: `Switch to it` (per candidate), `Try the line I chose` (the move is undone). If `Q` only has a family root (no entry): "That move belongs to <family.name>, but no variation here goes that way."
3. `transposes`: `Q` has no entry but `QG.nodesAt(posKey(stateAfter))` has nodes with `defines`/`lineEnds`/`via` entries (same side to move): "That move order reaches the same position as <entry.name> (<move text of that route>). Transposition: the position matches, the order does not." Buttons: `Train <entry.short>` (restarts there from move 1), `Try again`.
4. `unknown` (legal, not in the library): "<san> is legal, but it is not one of the lines in this library at this point. The trainer cannot say whether it is good or bad. Try again." No engine claims, no evaluation words, never reveals the expected move.
A wrong or alternative move is never applied to the board: `onMove` returns `false` (the board flashes and snaps back); the trainer records it and shows the message. Opponent deviations do not exist (the opponent plays the line).

## 2. State machine

Run object: `{seq, mode:'guided'|'practice', live, cursor, hintLevel, wrong:{ply->count}, hints:{ply->max level}, assisted:{ply->true}, alts, state, timer, startedAt}`. `live` = plies played (0..n). `cursor` = displayed ply (`cursor === live` means live). All timers carry a token; any restart, switch, mode change, route change (A.teardown) or `visibilitychange` hidden cancels them.

| State | Meaning | Board |
|---|---|---|
| `INTRO` | Run created, name/line shown, nothing played | start position, non-interactive for 0 ms (immediately resolves) |
| `OPP_PENDING` | Opponent move scheduled | non-interactive |
| `LEARNER_TURN` | Waiting for the learner (sub-state: `hintLevel` 0-3, `notice` none/wrong/covered/transposes/unknown) | interactive |
| `REVIEW` | `cursor < live` (overlay on any state; the underlying state is frozen) | non-interactive |
| `END` | `live === n` | non-interactive, summary |

| Event | From | Guard | To / actions |
|---|---|---|---|
| `start` (route load, restart, switch) | any | learner is white | `LEARNER_TURN`; focus board |
| `start` | any | learner is black | `OPP_PENDING` (first opponent move after 450 ms; board oriented black) |
| `learnerMove(uci)` | `LEARNER_TURN` | `expected` | `live++`; flash `good`; show note if important (guided; practice reveals it now, after the move); clear hint; if `live===n` -> `END`, else `OPP_PENDING` |
| `learnerMove(uci)` | `LEARNER_TURN` | `unknown`/`transposes` | `onMove` returns false; `wrong[ply]++` (practice: ply no longer clean); notice shown; stay in `LEARNER_TURN`; after 3 wrong on one ply the `Show move` button is promoted to primary |
| `learnerMove(uci)` | `LEARNER_TURN` | `covered` | not a mistake, no count; notice with switch buttons; stay |
| `oppTimeout` | `OPP_PENDING` | - | `playMove(uci,{silent:true})`; `live++`; note shown if important; if `live===n` -> `END` else `LEARNER_TURN`; announce (section 6) |
| `hint` | `LEARNER_TURN` | guided | `hintLevel = min(3, level+1)`; level 1: highlight the from-square, text "Move your <piece>."; level 2: arrow from -> to, text "<piece> from <sq> to <sq>." (promotion piece named); level 3: play the move for the learner (`assisted[ply]=true`), then as a correct move. Each press escalates; `hints[ply]` records the max |
| `hint` | `LEARNER_TURN` | practice | no graduated hints. Only `Peek` (= level 3): ply is marked missed, move is played, run continues |
| `showMove` / `continueAnyway` | `LEARNER_TURN` | guided | same as hint level 3 |
| `retry` | `LEARNER_TURN` with a notice | - | clear notice, clear highlights, focus the from-square (board `focus()`); same position |
| `retry` | `END` | - | `Retry this line`: restart same mode |
| `back/forward/clickMove(k)` | any except pending switch | - | `cursor = clamp(k,0,live)`; if `cursor<live` -> `REVIEW`: pause timer (store remaining state), `setPosition(states[cursor],{lastMove})`, no arrows, `setInteractive(false)`. In practice, review shows only plies already played |
| `live` (or cursor reaches `live`) | `REVIEW` | - | restore position, `setInteractive(true)` if `LEARNER_TURN`; if the pending state was `OPP_PENDING`, resume with 300 ms |
| `switchLine(which)` | any | same entry | guided: keep the common prefix `c = commonPrefix(played, newSeq.uci)`; if the whole played path is a prefix, keep position; else rewind to ply `c`; message "Both lines share the first <c> moves". Practice: discard the run, restart at ply 0. If triggered from a `covered` notice, the alternative move is accepted as ply `live` and play continues in the new line |
| `switchEntry(id)` | any | other variation/gambit | navigate to `#/train/<id>`; old run is discarded (no save) |
| `modeToggle` | practice -> guided | - | keep position; run flagged `assisted`, never saved as a practice result |
| `modeToggle` | guided -> practice | - | restart at ply 0 (practice must recall from move 1) |
| `restart` | any | - | cancel timers, run reset, `start` |
| `endReached` | - | - | build summary, save (section 3), focus summary heading |

**End of line.** Summary card: guided: "Line complete: <name>. <k> of <n> moves needed help." with the full move list. Practice: score `clean / learnerPlies` ("9/10"), list of plies to review (wrong or peeked; each is a button that jumps to `REVIEW` at that ply with the note now visible), "Best 10/10" if applicable. Next actions in order: primary `Practise this line` (after guided) or `Practise again` (after practice if score < 100 percent, label becomes `Try the missed moves again` which restarts practice - whole line, missed plies marked in the move list); then `Next line in this variation` (next in `x.lines` order after the current; for sample -> first line; hidden at the last line); `Train the next variation` (next sibling in `x.fam.variations` order, wrapping hidden at the last; gambits: next gambit in the same `group`); `Back to the opening page`.

A ply is **clean** (practice) iff solved on the first legal try with no `wrong`, no peek. `covered` notices do not spoil cleanliness.

## 3. Persistence: `qg-trainer-v1`
```js
{ v: 1,
  lines: { 'x.id/ln.id': {
      hash: 'a1b2c3',          // of the sequence; mismatch drops mist/streak/due (content changed), keeps counts
      n: 7,                    // finished runs (guided + practice)
      g: 3, p: 4,              // guided completions / practice runs
      best: { s: 9, of: 10 },  // best practice score
      last: { s: 8, of: 10, at: 1730000000000, mode: 'practice' },
      lastAt: 1730000000000,   // any finished run
      mist: { '5': 2, '9': 1 },// decayed mistakes per ply index (learner plies only)
      streak: 2,               // consecutive practice runs >= 90 percent
      due: 1730600000000 | null } },
  prefs: { mode: 'guided', shortcuts: true },
  resume: { key, mode, played: ['e2e4', ...] } | null }   // one slot, cleared at END or restart
```
Rules: read with `try/catch`, validate shapes, fall back to in-memory (like `progress.js`). Only finished runs count; abandoned runs save nothing except `resume`. Practice finish: `p++, n++`, update `last/best/lastAt`; `mist[i] = floor(mist[i] / 2) + runMiss[i]` for every learner ply, delete zeros. Guided finish: `g++, n++, lastAt`; `due` stays null (not yet practised). Prune: if more than 800 lines, drop oldest `lastAt`.
**Due rule:** score >= 90 percent: `streak++`; 70-89 percent: streak unchanged; below 70: `streak = 0`. `due = lastAt + [1,3,7,14,30,60][min(streak,5)] days`. Status derived: `new` (no record) / `learned` (guided only) / `practised` (practice, not due) / `due` (`now >= due`) / `solid` (streak >= 4, not due).
**Display, without clutter:** (a) Opening page: under the Train button, one quiet line only if a record exists: "Practised 2 days ago, 9/10" (guided only: "Played through 3 days ago"; due: "Due for review"); `line-pick` buttons get a tiny trailing text only for `due` ("Due"). (b) Family and listing cards: a single "Due" chip, nothing for other states. (c) Progress page: one block "Due for review" (max 5, each with `Train` link), hidden if empty. (d) Never on the home page. Relative time: today / yesterday / N days ago / over 30 days ago. Reset: the progress-reset action also clears this key (separate confirmation line "and trainer results").

## 4. UI anatomy (`#/train/...`)
**Always visible:** (1) page head: opening/gambit name (h1), line below it as `Family > Variation > Line name` (breadcrumb, current line `aria-current`), mode switch (segmented `Guided | Practice`, `aria-pressed`); (2) the board, oriented to the learner; (3) progress: text "Move 5 of 12" (ply number of the live position; during `INTRO` "Start") plus "Your move" / "Opponent's move" and a segmented bar: one tick per ply, learner plies larger, ticks coloured clean/missed/assisted (colour plus shape: filled, ring, dot; never colour only); (4) current-move card: move as `5. Nf3` and its note (one or two sentences). Stale notes dim after two plies and are labelled with their move ("From 3.Bc4:"). In practice the card says "Recall the next move" until a move is made; (5) one primary action button whose label follows the state: `Your move` (disabled look, text only) -> `Next move` is not needed because the opponent auto-plays; in `REVIEW` it is `Back to live position`; with a notice it is `Try again`; at `END` it is the next action. Secondary row: `Hint` (guided; label shows level: `Hint`, `Hint 2`, `Show move`), `Retry`, `Restart`, `Show move` (guided only, after 2 wrong tries).
**Behind a control** (one disclosure `More about <short>` below the card, `details`): The idea (`x.idea`), Plans for both sides (`x.plans`), Traps, mistakes and risks (`x.pitfalls`, with the existing "show on the board" buttons only when not mid-run), Full notes through this ply (all non-generic notes up to `cursor`; never beyond), and "Deeper explanation" for the current ply = the note of the same ply in other lines of the entry if different. In practice mode `More` is closed and the Plans/Traps entries are disabled until `END` ("Available after the line").
**Move list:** `<ol class="movelist notation">` like `lineStepper`, one button per ply, `data-ply`; played plies only (future plies are not rendered in practice; in guided they are rendered dimmed and non-focusable until played, so the line is not a spoiler wall). Current (cursor) ply `aria-current="step"`; learner plies underlined; ply status icons (clean/missed/assisted) with `aria-label` suffix ("missed"). Clicking a played ply -> `REVIEW`. In `REVIEW` the list shows a banner "Reviewing move 3. Press L or use Back to live position." Clicking the last played ply or `L` returns to live. Transport row: first / previous / next / last, as in `lineStepper` (these act on `cursor`, never on `live`; `next` at `live` is disabled).
**Branch and variation selector:** a `Where you are` panel: (1) the line picker (`Typical move order` + `x.lines`, same buttons as the library page, `aria-pressed`, current marked, statuses per section 3); (2) the family tree: nested list from `x.fam.variations` ordered by `parentRef` depth, the current variation `aria-current="location"`, every other one a link `Train <short>`; gambits show their family root and "Arises from" instead; (3) "Branch point": text "This line branches from <parent> after <baseText>, where <mover> chose <branch sans>" from `x.branch`, plus after the opponent's branch move has been played: "Other replies covered here: 2...Nc6, 2...e6" (siblings of the played node from `QG.node(side, path-minus-last).children`, each a `Switch` button). Never shown for a position where the learner is to move (it would reveal the answer).
**Mobile (below 760 px):** board first, full width minus a 16 px gutter, height capped at `min(100vw - 32px, 56vh)` so progress, card and primary action sit under it without scrolling. Card collapses to its first line with a `More` expand. A fixed bottom bar: `Hint`, `Retry`, primary action, and `Moves and branches` (opens the sheet). The sheet (`role="dialog" aria-modal="true" aria-label="Moves and branches"`, focus trapped, `Esc` or the close button closes it, focus returns to the opener, background `inert`) has three tabs: Moves (move list + transport), Branches (line picker + family tree), Theory (the `More` content). On desktop the same three blocks sit in the right column, no sheet.

## 5. Interaction details
- Learner moves: board tap, drag or keyboard (unchanged board behaviour). Promotion goes through the board chooser; the trainer compares the full uci including the promotion piece, so choosing another piece is `unknown` ("A knight promotion is legal, but it is not the one in this line").
- Opponent timing: 450 ms for the opening move when the learner is Black; 650 ms after a learner move without a note; 1100 ms when the learner's move carried a note (time to read it). The note stays on screen. Any learner action during `OPP_PENDING` is ignored (board is non-interactive).
- Reduced motion (`matchMedia('(prefers-reduced-motion: reduce)')`, re-read each run): delays become 0 (opponent plays in the same turn via `setTimeout(0)`, to avoid re-entering `commit`), no flash animation on `good`/`bad` (use `setMarks` static marks), hint highlight static. This differs from `ui.js`, whose replies keep their pace; the trainer follows the brief.
- Colour feedback never stands alone: every flash has text in the card and in the live region.

## 6. Keyboard and screen readers
**One live region** (`role="status"`, polite, `sr-only`) owned by the trainer, plus the board's own region. To avoid double speech: opponent and "show move" plies are played with `playMove(uci,{silent:true})` and spoken once by the trainer in a combined message. The learner's own accepted move is spoken by the board (`"White pawn e2 to e4."`); the trainer adds nothing until the next event (it announces the opponent reply, which already includes "Correct." as prefix when the move was the learner's). Messages (exact, short):
- start, learner white: "<Name>. You play White. Your move."; learner black: "<Name>. You play Black. White opens with <san>. Your move." (then the move text).
- opponent move: "Correct. Black plays Nf6. Your move." (omit "Correct." after a non-learner event). With a note: "...Your move. Note: <note>." (note always last).
- learner move with note and no opponent reply (last ply): "Correct. <note>".
- wrong/unknown: "Not that move. <san> is legal but not in this line. Try again." (practice: "Not that move. Try again.")
- covered: "That is another line: <entry short>, <line name>. Switch to it, or try again."
- transposes: "Same position as <name> by another move order. Try again, or train that line."
- hint 1: "Hint 1 of 3. Move your knight." hint 2: "Hint 2 of 3. Knight from g1 to f3." hint 3: "Move shown. Knight to f3." (SAN not used for hints, piece names are).
- review: "Move 3 of 12. White plays Bc4." plus note if shown; "Back at the live position. Your move." / "...Opponent to move."
- switch: "Now training <line name>. Both lines share the first 4 moves. Your move."
- end: guided "Line complete. <k> moves needed help." ; practice "Line complete. Score 9 out of 10. Review moves 5 and 9." Then focus the summary heading.
- restart: "Restarted. Your move."
**Focus management:** after an opponent move: if focus was inside the board, `board.focus()` (square of the last opponent move so the learner hears it); if focus was on a button (Hint, Retry), leave it there. After wrong/covered/transposes: focus returns to the learner's from-square (`board.focus()`; the board keeps its own `focusSq`). After a hint: focus stays on the Hint button (repeat presses escalate). After show move: board. After a switch or restart: board. After `END`: summary `h2[tabindex=-1]`; the primary action is the next tab stop. Opening the sheet focuses its close button; closing returns focus to the opener.
**Shortcuts** (only active when focus is inside the trainer root; a `Keyboard shortcuts` toggle in `More`, stored in `prefs.shortcuts`, turns single-key ones off for WCAG 2.1.4; `?` lists them):
| Key | Action |
|---|---|
| `H` | hint (guided) / peek (practice, asks "Press H again to show the move") |
| `R` | retry (notice active) or restart (at `END`) |
| `S` | show move (guided) |
| `[` / `]` | review previous / next ply (works from anywhere, including the board) |
| `L` | return to the live position |
| `Esc` | close sheet or disclosure; in `REVIEW` returns live |
| `ArrowLeft/Right` | review previous/next ONLY when focus is on the move list or transport buttons (roving, like `lineStepper`) |
**No conflict with the board:** the board's `keydown` handles arrows, Home, End, Enter, Space and (only while a piece is picked up) Escape, and calls `preventDefault` on what it handles. The trainer listens in the bubble phase on its root and returns immediately if `e.defaultPrevented`, if the target is inside `.board` and the key is an arrow/Home/End, or if a modifier (Ctrl, Alt, Meta) is held. Hence arrows never review while a square has focus; review from the board uses `[`/`]`. Escape with a piece picked up is consumed by the board (clears the selection) before the trainer sees it. While the promotion chooser is open, trainer shortcuts are ignored (target inside `.promo`).

## 7. Edge cases
- **Learner Black:** `setOrientation('b')`; `INTRO` immediately goes to `OPP_PENDING`; progress "Start" until White's first move; "Move 1 of n" counts plies from the start (move text "1. e4" then "1... e5").
- **Last ply is the learner's:** `END` right after the correct move; summary shown after the move note's reading delay (800 ms; 0 if reduced motion). **Last ply is the opponent's:** the opponent's final move plays, then `END` ("The line ends with Black's Nc6").
- **Very short lines:** 1 learner ply: practice is allowed but the score "1/1" is not eligible to advance `streak` beyond 1 and the summary says "Short line: fast to drill, so try the other lines too." Fewer than 2 plies total: no trainer, show the stepper only.
- **Promotions in a line:** expected uci has the promotion letter; hint 2 text names the piece ("Pawn from e7 to e8, promoting to a queen"); opponent promotions are announced by the board describer text.
- **Lines start from the initial position** always (`fen: 'start'`); the trainer asserts `seq.states[0]` equals the start FEN and warns otherwise.
- **Check/mate on a ply:** spoken suffix as in `describeMove`; a mate is important; at `END` the board shows the check mark (`is-check`).
- **Same ply, two accepted moves:** not supported in v4 (one expected move per ply); alternatives only through `covered` -> switch.
- **Pitfall lines** (`x.pitfalls[i].uci`) are not trainable in v4; their "Show it on the board" stays in the stepper.
- **Storage unavailable:** the trainer works, results last for the visit; one quiet line "Results are not being saved in this browser." at `END` only.
- **Content change:** `hash` mismatch resets per-ply data only (section 3).
- **Navigation away mid-run:** `A.teardown` cancels timers; `resume` slot written on every learner move; the trainer entry shows `Continue from move <k>` as secondary action when `resume.key === seq.key`.
- **Optional guided setting:** `Start at the branch` (checkbox, guided only) auto-plays the plies before `branchLen` silently and begins at the branch; announced "Opening moves played for you: <move text>." Never available in practice.

## 8. Test checklist
Black learner with opponent first; covered alternative -> switch keeps the prefix; transposition message; practice score and review list with 2 deliberate misses; hint levels 1-3 then continue; review during `OPP_PENDING` pauses and resumes; arrows on board vs move list; Esc with picked-up piece; reduced motion has zero timers; localStorage disabled; mobile sheet focus trap; a 4-ply line ending on the learner's move; every shipped line builds a Sequence with no truncation (add a console audit over `QG.moveLines`).
