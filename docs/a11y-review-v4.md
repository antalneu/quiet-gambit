# Accessibility review: v4 redesign ("Calm Glass", trainer, study pages)

Scope: `index.html`, `css/glass.css`, `js/trainer.js`, `js/views-v4.js`, `js/app.js` (router and chrome), with `js/board.js` and `js/ui.js` read for the board and stepper. Specs checked: `docs/v4-trainer.md` section 6 and `docs/v4-visual.md` section 2.1.
Method: code reading plus computed WCAG contrast values. I did not run a screen reader or the live site. Items marked "verify" depend on browser behaviour.
Priorities: P1 blocks or seriously breaks a task, P2 significant barrier, P3 polish. 20 findings.

## Summary

The structure is sound: a skip link, one `h1` per screen that takes focus on route change, an `aria-current` nav, a clear "next action" on each screen, and glass text kept to `--ink` / `--ink-2`.

Four things need fixing first.
1. The trainer re-renders its action buttons, move list and card with `innerHTML` on almost every event. This destroys keyboard focus and kills the single-key shortcuts.
2. The last move of a line (and its note) is never reliably announced.
3. The mobile "Moves and lines" drawer is a plain fixed panel, not a modal.
4. The learner's own move note is on screen for about 1 second, and for no time at all under reduced motion.

The tree question (item 3 in the brief) has a simple answer: **the code does not use `role=tree`/`treeitem`/`group`.** `views-v4.js:307` renders `<ul class="tree" aria-label>` with nested `<ul>` and `<button aria-pressed>`. That is already the "nested list of buttons" pattern recommended below, so do not add tree roles. See finding 12 for refinements.

Verified OK (no action):
- Skip link and `main` focus: `app.js:144`, `styles.css:67`.
- `h1` focus on route change: `app.js:600-604`.
- `document.title` is set per route.
- Removed routes still resolve:
  - `#/explorer`: `app.js:577`.
  - `#/library`: `views-v4.js:483`.
  - `#/progress`, `#/path`: `app.js:545`.
  - `#/opening/...`: `views-v4.js:413`.
  - `#/coach`: exists in `views-coach.js`.
- Header `nav` (Main) and tabbar `nav` (Sections) are never exposed together: one is `display:none` at each breakpoint (`glass.css:89,91`). The tabbar is hidden on the trainer by `body:has(.page-train)` (`glass.css:346`).
- Glass text contrast passes everywhere I could compute (see finding 15).
- Feedback is never colour-only: `.fb` uses icon, word and border style.
- The Escape / arrow conflict between board and trainer is handled (`trainer.js:477-481`).

---

## P1

### 1. Re-render destroys focus after Hint, Restart, Show move, Practise, and move-list clicks
`trainer.js:359-431` (`render()` sets `acts.innerHTML`, `card.innerHTML`, `#tr-moves` innerHTML on every call). Affected callers:
- `hint()` (`:294-305`)
- `restart()` (`:313-319`)
- `accept(true)` via Show the move (`:270-282`)
- the end-state primary action "Practise this line" / "Practise it again" (`:387-389`, `:442-443`)
- clicks on a ply in `#tr-moves` (`:446`)

Effects:
- The focused button is removed from the DOM, so focus drops to `body`.
- Screen readers lose position and do not hear the new button label ("Hint" becomes "Show the target", then "Show the move").
- `onKey` (`:476`) returns early because `!root.contains(e.target)`. **H, R, [, ], L and Esc all stop working** until the user tabs back in.
- The ArrowLeft/Right review handler (`:487`) fires once, because the list is rebuilt under the focused button. The spec's roving move list (v4-trainer.md section 4) does not exist.
- The spec says "after a hint: focus stays on the Hint button; after restart or switch: board" (v4-trainer.md section 6). The code does neither.

Fix:
- In `render()`, capture `var ae = document.activeElement`, and its key (`dataset.act`, `dataset.ply`, `dataset.rev`) if it is inside `acts`, `card` or `#tr-moves`.
- After rebuilding, re-focus the element with the same key, or `board.focus()` for restart, show and practise. If the old element is gone, fall back to `#tr-end-h` or `board.focus()`. Never leave focus on `body`.
- Attach the `keydown` listener to `document` but also accept `e.target === document.body` while the trainer route is mounted, as a safety net.
- Better: update `acts` and the move list in place rather than via `innerHTML` for the always-present Hint and Restart buttons.

### 2. The last move of a line, and its note, is lost to speech
- **Opponent plays the last ply:** `oppMove` calls `say(msg)` then `end()` (`trainer.js:257`). `end()` calls `say()` again, which clears the region at once (`:218`, `:331`). The first message is overwritten before the 40 ms timer fires, and `end()` also moves focus to `#tr-end-h` (`:330`), which interrupts speech. The user never hears "Black plays X. Note: ...".
- **Learner plays the last ply:** the board speaks the move, `say(pre + note)` runs, then `end()` runs 800 ms later (`:280`). `end()` moves focus to the heading and replaces the live text. A one- or two-sentence note takes longer than 800 ms to read, so it is cut off.

Fix:
- Build one combined message in `end()`: `(lastEvent + ' ' + 'Line complete. Score ...')`. Pass the pending message into `end(prefix)` from `oppMove` and `accept`.
- Do not call `say()` separately before it.
- Put the final note inside the end card (`<p class="tr-note">`) so it is also readable.
- Keep the heading focus. The heading text ("Line complete") then reads first, and the live message follows.

---

## P2

### 3. Mobile "Moves and lines" drawer is not modal
`trainer.js:184-186`, `:469-474`; `glass.css:337-345`.
- No `role="dialog"`, `aria-modal`, accessible name, focus trap, `inert` on the page behind, or scrim (v4-trainer.md section 4 requires all of these).
- Tab leaves the open sheet into the hidden-behind page.
- The sheet covers up to 60svh, so the board is partly hidden. Tapping a ply to review changes the board behind the sheet, and the sheet stays open.
- The close button's name "Close" is ambiguous.
- On desktop the same markup is an inline region, so it must not carry dialog semantics there.

Fix:
- In `drawer(open)` on viewports at or below 900px (check `matchMedia('(max-width:900px)')`):
  - set `role="dialog" aria-modal="true" aria-labelledby` (the drawer `h2`) on open, and remove them on close and on desktop;
  - set `inert` on `.tr-stage, .tr-side > :not(#tr-drawer), header, footer` while open;
  - trap Tab between the first element and the close button.
- Change the label to `aria-label="Close moves and lines"`.
- Close the drawer when a ply is chosen, then call `board.focus()`. The board is the point of review.
- Optionally add a scrim (`rgba(22,26,43,.32)`, per v4-visual.md) that closes on tap.

### 4. Review is not paused while the opponent is about to move, and hint marks go stale
- **Opponent override:** `oppMove` (`trainer.js:251-259`) plays the move and sets `run.cursor = run.ply`, ignoring a review in progress. A learner stepping back during the 650-1100 ms reply window is yanked back to live and hears "Black plays...". The spec says "review during OPP_PENDING pauses and resumes" (v4-trainer.md section 8).
- **Stale hint text:** `review()` (`:339`) and `retry()` (`:308`) call `board.setPosition(...)`, which clears highlights and arrows. `run.hint` stays set, so `render()` (`:425`) still says "The highlighted piece moves." or "Follow the arrow" with nothing marked.

Fix:
- Delay `oppMove` until `run.cursor === run.ply`, or re-arm the timer from `review(run.ply)` when `run.state === 'opp'`.
- After `setPosition` in `review`/`retry`, restore the marks, or reset `run.hint = 0` and say so.

### 5. Transport buttons become `disabled` while focused
`trainer.js:376-379`. Pressing Previous until the start, or Next until live, disables the focused button. Focus is lost, and the keyboard user is stranded.

Fix: copy the `ui.js:158` pattern. If `document.activeElement` is the button being disabled, move focus to the opposite transport button, or to the live button, before disabling.

### 6. The learner's own move note is on screen for about 1 second, or never
`trainer.js:247`, `:254-258`, `:384`, `:422-423`.
- After a correct move the card shows the learner's note with "Black is replying...". It is replaced on the opponent's move, which arrives after 650-1100 ms. Under `prefers-reduced-motion`, `reduce` makes the delay 0 (`:247`), so the learner's note is never visible.
- Notes are the teaching content. The spec's "stale notes dim after two plies" is not implemented. Sighted users with cognitive or reading differences, and reduced-motion users, lose the explanation.
- Note that the reduced-motion zero delay also removes the pause that screen-reader users need.

Fix:
- Keep both notes in the card: "Your move: 5.Nf3 <note>" above "Black replied: 5...d6 <note>". Dim the older one, and clear both only when the learner makes the next move.
- Under reduced motion, use about 400 ms, not 0 (or a small fixed delay), so the message order stays predictable.
- Ensure the learner's note is included in the combined spoken message (it already is, via `pre + note`).

### 7. Single-key shortcuts cannot be turned off (WCAG 2.1.4, level A)
`trainer.js:475-488`. H, R, L, `[`, `]` are active anywhere in `.page-train`, including on buttons. The spec promised a "Keyboard shortcuts" toggle in More (v4-trainer.md section 6), but none exists. Speech-input and some screen-reader users trigger these by accident. Also:
- In practice mode, H shows the move at once and records a miss (`:298`). The spec said "Press H again".
- `preventDefault` is called even when the key does nothing (`:482-486`). That is harmless but swallows browse-mode keys.

Fix:
- Add a "Keyboard shortcuts" checkbox inside the "More" disclosure, stored in `store.prefs.shortcuts`. Skip single-letter handling when it is off.
- Alternatively, only handle letter keys when focus is on `.board` or `.tr-actions`.
- Make H in practice mode a two-step: the first press says "Press H again to show the move."
- Call `preventDefault` only when an action ran.

### 8. Study page announces the whole card twice
`views-v4.js:320` (`<section id="st-selected" aria-live="polite">`), `:367` (replaces `innerHTML`), `:374` and `:389` (`A.status(...)`).
- Every variation or line selection makes the screen reader read the entire card (eyebrow, heading, moves, summary, buttons, line list) and then the status message.
- On first paint, `select(...)` writes into an existing live region, which can also be announced.

Fix: remove `aria-live` from `#st-selected`. Keep only `A.status(...)` ("Najdorf selected. The board shows where it branches.") as the single polite message.

### 9. Search: result count is not announced, and "Show all" loses focus
`views-v4.js:144` (`#s-count` is a plain `<p>`), `:151-156` and `:182-185`.
- Typing or changing a filter updates results silently. `A.announceSoon` exists (`views-library.js:33`) but is not called here.
- Clicking "Show all N" re-renders the results (`apply()`), which destroys the clicked button, so focus is lost.

Fix:
- In `apply()`, after setting `#s-count`, call `A.announceSoon($('#s-count').textContent || 'No results')`. Zero results currently announces nothing.
- For "Show all", re-focus the first newly revealed row link, or the group `h2` with `tabindex="-1"`.

### 10. Focus Not Obscured (WCAG 2.2, 2.4.11): no bottom scroll padding behind the tabbar and fixed button
`glass.css:32` sets only `scroll-padding-top: 96px`. The fixed tabbar is 64 px plus 10 px offset (`:68-69`). On phones the "Moves and lines" button is fixed bottom-right (`:396`). Tabbing to the last items (footer links, last rows) leaves them under these controls.

Fix: `html { scroll-padding-bottom: 96px; }` (add `calc(96px + env(safe-area-inset-bottom))`). Keep the trainer's `.tr-actions { padding-right: 168px }` rule (`:405`), but check 320 px width. At that width the actions column is about 128 px wide and long labels such as "Switch to Najdorf: ..." wrap into tall pills.

### 11. Focus ring invisible on the current segmented link, and in forced-colors on selected rows
- `library.css:250` sets `.segmented a[aria-current]:focus-visible { outline-color: var(--paper) }` with an inset offset (`library.css:112`, `-4px`). In v4 the current segment is white (`glass.css:134`, `#fff !important`), so a paper-coloured ring is invisible. This affects the Openings and Gambits group tabs and the Lessons Categories / Paths tabs. Specificity (0,3,1) beats the global focus rule.
- `glass.css:376` (forced-colors) sets `outline: 2px solid Highlight; outline-offset: -2px` on `.tree-row.is-selected`, `.tr-line[aria-pressed=true]`, `.line-row.is-selected`, `.movelist [aria-current]`, and others. The specificity of those rules beats `:focus-visible`, so a focused selected item looks the same as an unfocused one.

Fix:
- In glass.css, add `.segmented a[aria-current]:focus-visible { outline-color: var(--accent); outline-offset: 2px; }` (or neutralise the library.css rules).
- In the forced-colors block, add a later and more specific `:is(...):focus-visible { outline: 3px solid CanvasText; outline-offset: 3px; }`. Or show selection some other way (a `border-left`, or a visible "Selected" mark) so the outline stays free for focus.

### 12. Opening page tree: refine the nested-list-of-buttons pattern
Current markup (`views-v4.js:295-307`): `ul.tree` > `li` > `button.tree-row[aria-pressed]` with nested `ul`. This is valid and operable with Tab and Enter. A real `role="tree"` would need arrow-key navigation, roving tabindex, `aria-expanded`, and so on, none of which is implemented, so keep the plain list. Issues:
- **Fork rows** (`:301`, `data-path`, "3 ways on") have no state. Activating one silently selects the first variation beneath it (`:384`, `select(under, 'typical', true)`) and moves `.is-selected` to a different row. The only cue is an `A.status` message.
- Selection uses `aria-pressed`. That is a toggle semantic, and pressing a selected row does nothing. `aria-current="true"` fits better (the spec says `aria-current="location"`).
- The accessible name is built from several spans with no separators ("3.Bb5 Intermediate Due").
- The `ul` has `aria-label`, but there is no heading and no hint about depth.

Fix:
- Use `aria-current="true"` on the selected row and drop `aria-pressed`.
- Make fork rows non-interactive text (`<span class="tree-fork">3.Bb5, 3 ways on</span>`), or keep them as buttons named "Show where 3.Bb5 branches" with `aria-describedby`.
- Add a visually hidden separator between parts of the name, such as `<span class="sr-only">, </span>`.
- Optionally add a one-line note: "Indented items branch from the item above."

---

## P3

### 13. Spoken moves use SAN
`trainer.js:256` ("Black plays Nf6."), `:279` ("Move shown: Nf3."), `:348`, `:289-291`. Screen readers read SAN inconsistently ("Bxf7+", "O-O", "exd5"). The board already has `describeMove` words ("White knight g1 to f3."), but it is private to `board.js`.
Fix: expose `board.describe(uci)` (or the function) and use it in trainer messages. Keep SAN for the visible text only.

### 14. Landmark clutter
- Two `role="search"` forms with the same label on Home and Search (`index.html:23`, `views-v4.js:46`). Both are named "Search openings, gambits and lessons". Label them differently, or drop `role="search"` from the in-page copy.
- Segmented filters are `<nav aria-label="First move">` and `<nav aria-label="Show">` (`views-v4.js:194`, `:441`). That adds landmarks for what are page-level tabs. Use `<div role="group" aria-label>` or a `<ul>`.
- `section.tr-card` (`trainer.js:182`) has `aria-labelledby="tr-card-h"`. Its heading text changes with state ("Current move", "Feedback", "Reviewing"), and at END the id is `tr-end-h`, so the reference dangles. Drop `aria-labelledby`, or make the section a plain `div`.
- On the trainer at phone width there is no `nav` landmark at all (header nav and tabbar both hidden). This is acceptable because of the back link, but note it.

### 15. Contrast notes
Computed WCAG ratios. Glass chrome is fine:
- `--ink-2` on the weakest glass (80% white over a pure `--ink` element behind): about 7.1:1.
- `--graphite` on the glass drawer (92% fill over `--ink`): about 5.9:1.

Findings:
- `.sq-dark .coord` (`glass.css:216`): `#F4F5F9` on `#8E9AB5` is about 2.6:1. The coordinates are `aria-hidden`, but they are visible text. Use `--ink` (about 6:1).
- The drawer contains `--graphite` text (`.tr-togo`, `.muted`, `.count`, `.num`). Spec 2.1 says graphite is for opaque surfaces only. Numerically it passes, but it contradicts the stated rule. Switch these to `--ink-2` inside `.tr-drawer`.
- Current state on glass relies on a white pill with a 28%-alpha ring (about 1.9:1 against the pill) plus bold. The nav also has a 4 px accent dot. The tabbar has no dot. Add the accent dot or a 2 px accent underline to `.tabbar a[aria-current]`.
- `.tabbar a` text is 14 px (`glass.css:73`). The spec minimum is 15 px.
- `.movelist .is-missed` ring (`glass.css:318`) is overridden by the `[aria-current="step"]` `box-shadow` (`:220`). The "missed" mark disappears on the current ply. Fix: combine the two shadows.

### 16. Touch targets: several are 40 px, not 44 px
- `glass.css:119` (`.btn-sm` min-height 40) loads after the `@media (pointer: coarse)` 44 px rule (`styles.css:506`) at equal specificity, so it wins on touch devices too. This hits the stepper buttons and the "Train" links in search rows (`.row-train`).
- `.movelist button` is 40 px (`glass.css:219`), overriding `styles.css:507`. This is the trainer drawer's move list.
- The phone mode switch is 40 px (`glass.css:388`).
- Header `.nav a` is 40 px (`glass.css:56`), used between 761 and 960 px on tablets.

All of these meet the 24 px AA minimum, but the brief asks for at least 44 px. Fix: add `@media (pointer: coarse) { .btn-sm, .movelist button, .segmented :is(a,button), .nav a { min-height: 44px; } }` at the end of glass.css. Board squares are 32-38 px on a 320-375 px phone. This is acceptable because tap-tap works, and drag is optional.

Verified OK: tabbar (52 px items), `.tr-line` (44), `.tree-row` (48), `.btn-icon` (44), `.back-link` (44), `summary` (44), `.link-btn` on coarse pointers (44).

### 17. Forced-colors gaps
`glass.css:374-380` handles the main chrome and selection, but:
- The unselected `.tr-line`, `.line-row`, `.tree-row`, `.row-main` and `.door` get their edges from `box-shadow`, which forced-colors removes. They look like plain text. Add `border: 1px solid ButtonText` inside the forced-colors block.
- `.nav-dot` (accent background) disappears, so the "due" cue is lost visually. Add `forced-color-adjust: none; background: Highlight` or give it a border.
- `.soundness-playable` and `.soundness-speculative` use inset box-shadow rings. The text label survives, but the shape cue is lost. Add `border: 1px solid` there.
- Reduced-transparency and no-`backdrop-filter` fallbacks (`:363-369`) turn the glass into opaque fills correctly.

### 18. Heading and semantics details
- Drawer: "Moves and lines" is an `h2`, then "Moves" and "Lines in X" are also `h2` (`trainer.js:186-194`). The sub-sections should be `h3`.
- The "More about" body places `h3`s after the "Lines in" `h2` (`:205-206`). Inside a `details`, these read as part of that section. Use `h3` under a named region, or give the summary a heading.
- Study page: `h3`s in `#st-about` follow the selected card's `h2` (`views-v4.js:355-363`), so the hierarchy implies they belong to the selected variation.
- `.tr-done` has `aria-label="trained"` on a `<span>` (`trainer.js:198`). `aria-label` on a generic element is ignored by many screen readers. Use `<span class="sr-only">trained</span>` as `views-v4.js:348` does.
- Learner plies are marked only by an underline in the move list (`glass.css:317`). The `aria-label` says White or Black but not "you".

### 19. Small flow gaps
- Search page: `window.setTimeout(... focus())` (`views-v4.js:188`) steals focus from the `h1` and opens the mobile keyboard on arrival. Only auto-focus when arriving from the header search or a nav "Search" action; otherwise keep the `h1`.
- My study "Reset everything" (`:468-475`): the confirm state has no Cancel (the button is replaced by "Yes, reset everything"). After reset, `A.render()` leaves focus on `body`. Add Cancel and focus the `h1` after render.
- "Lines due for review" shows only 6 (`views-v4.js:458`) with no "Show all" link. Add one.
- Switching Guided/Practice mid-run restarts silently (`trainer.js:438`). Add "Restarts this line" to the button text or a confirm when `run.ply > 0`.
- Under reduced motion, `reduce` is read once per page (`trainer.js:219`), not per run as the spec says. Re-read it in `newRun`.

### 20. Wrong-move recovery details
- After a rejected move the board keeps focus on the destination square (`board.js:336-337`, `focusSq` is only updated on accept). The spec says return to the from-square. Fix: the trainer calls `board.focus()` after `retry`, but the board should restore `focusSq = from` on a rejected move.
- For "covered" and "transposes" messages (`trainer.js:289-290`), the screen-reader text says "Switch to it, or try again" but does not say where those buttons are. Append "Buttons are below the board." or move focus to the first action.
- H does nothing while a notice is showing (`:482`, `!run.notice`), with no spoken reason. Say "Try again first, then ask for a hint."
- In practice mode after a wrong move the only action is Try again (`:414-416`); "Show the move" is only offered in guided mode after 2 misses. It is reachable after retry (the Hint button becomes "Show the move"), so there is no dead end.

---

## Dead-end check (item 7)
No dead ends found in the trainer states: every state offers Try again, Restart, Back to live, or a next action (Practise this line, Practise it again, Next line, Next variation or gambit, Back). Old routes redirect, as listed in the Summary. The only link to a removed screen that still renders old content is `views-library.js:56,260` (`#/explorer` compare links), which the router redirects.

## Suggested fix order
1. Focus preservation in `render()` and the end-of-line message (findings 1, 2).
2. Drawer modality and close-on-pick (3).
3. Review pause and hint reset (4, 5), note persistence (6).
4. Quick CSS: scroll padding, segmented focus ring, coarse-pointer 44 px, forced-colors borders (10, 11, 16, 17).
5. Live-region fixes in search and study (8, 9), shortcut toggle (7), tree tweaks (12).
