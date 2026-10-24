# The Quiet Gambit — UX & accessibility review of experience spec v1

Target: WCAG 2.2 AA. Ratios are WCAG 2.x relative-luminance values computed from the spec's hex tokens.

## Contrast audit (computed)
| Pair | Ratio | Verdict |
|---|---|---|
| ink `#1A1D2B` on ivory / paper | 14.22 / 15.78 | Pass AAA |
| graphite `#555968` on ivory / paper | 5.92 / 6.57 | Pass AA (body text) |
| ultramarine `#2F3BD6` on ivory / paper | 6.56 / 7.29 | Pass AA (links, focus ring) |
| white / paper on ultramarine (accent buttons) | 7.73 / 7.29 | Pass |
| success `#2E6B45` on ivory / paper | 5.40 / 5.99 | Pass AA |
| error `#A33A2A` on ivory / paper | 5.58 / 6.19 | Pass AA |
| rule `#D6CCB8` on ivory / paper | 1.35 / 1.50 | Fine for decorative hairlines; **fails** 3:1 as a control border |
| board dark `#A99D86` label on light `#ECE3D0` square (usual "opposite colour" coords) | 2.10 | **Fail** |
| board light label on dark square | 2.10 | **Fail** |
| graphite on dark square | 2.60 | **Fail** |
| ink (black piece / outline) on light / dark square | 13.12 / 6.26 | Pass |
| white piece fill `#FFFFFF` on light / dark square | 1.28 / 2.67 | Fill alone fails; legible only with an ink outline |
| ultramarine solid mark on light / dark square | 6.06 / **2.89** | Fails 3:1 on dark squares |
| ultramarine 30% tint vs light / dark square | 1.62 / 1.41 | Tint alone cannot show state |
| proposed board accent `#1F2AA8` on light / dark square | 8.42 / 4.02 | Pass (3:1 non-text) |
| proposed coord `#4A4337` on light square; ink on dark square | 7.66 / 6.26 | Pass |
| dark vs light square (pattern) | 2.10 | Acceptable (coords + labels carry identity); see P3 |

## P1 — must fix
1. **Grid semantics.** 64 buttons directly inside `role="grid"` is invalid ARIA. Use `div[role=grid][aria-label="Chessboard, White at bottom"]` > 8 × `div[role=row]` > 8 × `div[role=gridcell]` > `<button>`. Exactly one button has `tabindex="0"` (last focused, default the puzzle's piece-to-move or e1/e8); others `-1`. Order rows by visual orientation (rank 8 first when White at bottom; reverse when flipped).
2. **Keyboard model, full spec.** Arrows move visually (Up = toward top of screen, regardless of flip); Home/End = first/last file in row; Ctrl+Home/Ctrl+End = top-left/bottom-right. Enter/Space on own piece = select (`aria-pressed` not used; set `aria-selected="true"` on its gridcell); on a legal destination = move; on another own piece = switch selection; on selected piece = deselect; Esc = cancel. Focus stays on the destination square after a move; never move focus to the feedback text.
3. **Square labels (dynamic `aria-label` on the button).** Format: `"e4, white knight"`, `"e4, empty"`. While a piece is selected, append state: `"f5, empty, legal move"`, `"d5, black pawn, capture"`, `"f3, white knight, selected"`. Add `aria-describedby` pointing to a hidden `"Last move: Black knight from g8 to f6"` only on the two last-move squares.
4. **One polite live region for moves, separate from feedback.** `<div id="board-status" role="status" aria-live="polite" class="visually-hidden">`. Announce in words, not SAN: `"Knight selected on f3. 5 legal moves."`, `"White knight f3 takes e5. Check."`, then opponent reply. Feedback panel (correct/incorrect + explanation) uses its own `role="status"`; don't also put the move text in it or screen readers read it twice. Use `aria-live="assertive"` nowhere.
5. **Coordinate labels fail (2.10:1).** Preferred: draw a–h / 1–8 outside the squares in the paper frame, graphite on paper (6.57), 13px Schibsted, `aria-hidden="true"`. If kept inside squares: `#4A4337` on light squares (7.66), `#1A1D2B` on dark squares (6.26), min 11px/600 weight.
6. **Board highlights fail on dark squares.** Add token `--accent-board: #1F2AA8` (8.42 light / 4.02 dark). Selected square: 25% `#2F3BD6` tint **plus** 3px inset ring `#1F2AA8`. Legal move: solid `#1F2AA8` dot, 28% of square diameter. Capture: 4px `#1F2AA8` ring/corner marks (shape differs from dot). Last move: 20% tint only (secondary info, also in text). Arrows: `#1F2AA8` at ≥0.8 opacity, stroke ≥ 12% of square; every arrow also stated in step text ("Arrow: knight f3 to e5"). SVG overlay `aria-hidden="true"` and `pointer-events: none`.
7. **Focus vs selection collision.** Both are ultramarine in the spec. Board focus: double ring — `box-shadow: inset 0 0 0 2px #FBF8F1, inset 0 0 0 5px #1A1D2B` (ink ring 13.12 / 6.26 on squares, paper separator keeps it visible over ink pieces). Selection stays the blue ring + tint. Page-wide: `:focus-visible { outline: 3px solid #2F3BD6; outline-offset: 2px }`; offset keeps the ring on ivory when around the ink primary button (ultramarine on ink would be 2.17).
8. **White pieces need outlines.** White fill alone is 1.28 on light squares. Use SVG pieces with `fill:#FFFFFF; stroke:#1A1D2B; stroke-width:1.5` (45-unit viewBox) and black pieces `fill:#1A1D2B` with `#FBF8F1` interior detail strokes. Don't use Unicode glyphs (inconsistent fonts, no outline control).
9. **Route changes (hash routing).** On every route: set `document.title` ("Italian Game · Openings · The Quiet Gambit"), move focus to the page `<h1 tabindex="-1">`, scroll to top (instant under reduced motion), set `aria-current="page"` on the active nav link. Add a "Skip to main content" link as the first focusable element; `<html lang="en">`.
10. **Header at 320px.** Logo + 6 links + progress cannot fit. Below 760px: logo left, `<button aria-expanded aria-controls="site-nav">Menu</button>` right, nav opens as a full-width vertical list (links 48px tall); Esc closes and returns focus to the button. Progress pill moves into the menu and the Path page.
11. **Secondary controls need a visible boundary.** `rule` borders are 1.35:1. "See path" and other outline buttons: 1.5px border `#555968` (5.92) or ink. Inputs likewise.

## P2 — should fix
12. **First screen copy must answer the three questions.** Suggested: H1 "Learn chess ideas one move at a time." Para: "Twelve short lessons across openings, gambits, middlegames and endgames. You read the idea, play the move on the board, and get the why — no engine, every answer explained." Hero puzzle caption states the skill ("Find the knight fork"). H1 size `clamp(36px, 6vw + 16px, 80px)`; 80px only ≥1200px.
13. **CTA hierarchy.** One primary (ink fill, paper text 15.78) per screen. First visit: "Start lesson 1 (6 min)". Returning: "Continue: Lesson 4 — The Evans Gambit" driven by progress; "See the path" secondary. Header progress becomes a link to `#/path` with `aria-label="Progress: 3 of 12 lessons done"`; at 0 show "12 lessons" instead of "0 of 12 done".
14. **Mobile home order.** Spec's "board above text" would push the headline below the fold on home. Home at <760px: H1 → para → CTAs → board puzzle. Lessons keep board on top.
15. **Board sizing.** `--board: min(calc(100vw - 32px), calc(100svh - 220px), 560px)`, square = board/8 (36px at 320, ≥44px from 384px). Landscape phones: the svh term stops the board overflowing. Desktop lesson: two columns ≥1024px, board column `minmax(400px, 560px)` sticky `top: 24px`; step panel `max-width: 62ch`. Content max width 1200px at 1440.
16. **Touch.** `touch-action: manipulation` on the board (removes double-tap zoom delay); pointer events not hover. Tap selected piece = deselect, tap other own piece = switch, tap illegal square = deselect with no error. Optional drag only if it falls back to tap. On mobile put the feedback line immediately under the board (not the bottom of the step panel) so the result of a move is on screen; keep controls (Hint, Try again, Next) ≥44×44px.
17. **Reduced motion (not in spec).** Piece slide ≤150ms ease-out, arrow fade 120ms. `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition: none !important; animation: none !important; } html { scroll-behavior: auto; } }`. JS checks `matchMedia('(prefers-reduced-motion: reduce)')` before any `scrollIntoView({behavior:'smooth'})`.
18. **Position summary for non-visual users.** Below each board a `<details>` "Position in text": "White: king g1, queen d1, knight f3 … Black: … White to move." Exploring 64 squares to learn a position is slow.
19. **Line stepper (track explorer).** Buttons "Previous move" / "Next move" / "Start"; visible "Move 3 of 9: 3. Bc4"; a `role="status"` reading "Move 3, White bishop to c4". Arrow-key shortcuts only when focus is inside the stepper, never global (would clash with the board grid).
20. **Explorer on mobile.** Family list becomes a horizontal chip row (`role="list"`, scrollable, visible partial chip as affordance) or a `<select>` above the board; ideas/plans below the stepper.
21. **Puzzle states.** Incorrect: keep the position for 600ms then undo (instant under reduced motion), feedback "Not quite — that lets Black play …" with ✕ icon + text; Hint button always available; "Show answer" appears after 2 misses and plays the move with announcement. Correct: ✓ icon + "Correct" + explanation, then focus-safe "Next step" button. Use `aria-disabled` (not removal) for controls that become available later so focus isn't lost.
22. **Reset progress is destructive.** Inline confirm: "Reset all progress? This can't be undone." [Reset progress] [Cancel]; focus moves to Cancel. Announce "Progress reset" via status.
23. **Reading type.** Newsreader body 18px / 1.6, measure 60–68ch; UI 16px min; nothing below 13px (coords). Font stack fallbacks: `"Newsreader", Georgia, serif` / `"Schibsted Grotesk", system-ui, sans-serif`, `font-display: swap` (site may run offline from `file://`).

## P3 — nice to have
24. Typed move input ("Type a move, e.g. Nf3 or f3 to e5") as an alternative to the grid for fast keyboard/SR users.
25. Board pattern contrast is 2.10; `#958970` dark squares give 2.70 while keeping ink pieces at 4.85 — only if the visual direction allows.
26. Windows High Contrast / `forced-colors: active`: give selected square `outline: 3px solid Highlight`, legal dots `background: CanvasText`, focus `outline-color: Highlight`.
27. Optional dark theme later; current tokens are light-only, so set `color-scheme: light` explicitly to stop UA dark form controls.
28. Tracks overview "different sizes": keep DOM order = importance order so size isn't the only cue; each card states lesson count and time.
29. "How a lesson works" numbered list as a real `<ol>`; "Next up" card repeats the continue CTA target, not a third action.
