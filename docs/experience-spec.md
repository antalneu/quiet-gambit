# The Quiet Gambit — experience spec (v1)

Static site, no build step: `index.html`, `css/styles.css`, `js/*.js` (classic scripts, works from `file://`).
Hash routing: `#/` home, `#/path`, `#/openings`, `#/gambits`, `#/middlegames`, `#/endgames`, `#/lesson/<id>`.
Progress saved in `localStorage` (`qg-progress-v1`), wrapped in try/catch.

## Tokens
| Token | Hex | Role |
|---|---|---|
| ivory | `#F2ECDF` | page background |
| paper | `#FBF8F1` | raised panels, board frame |
| ink | `#1A1D2B` | text, black pieces, primary button |
| graphite | `#555968` | secondary text (≈6:1 on ivory) |
| rule | `#D6CCB8` | hairlines, borders |
| ultramarine | `#2F3BD6` | the single accent: selection, arrows, focus, "next" |
| board light / dark | `#ECE3D0` / `#A99D86` | squares |
| success / error | `#2E6B45` / `#A33A2A` | feedback text + icon (never colour alone) |

Type: **Schibsted Grotesk** (display, UI, coordinates) + **Newsreader** (reading text, explanations, move notation with tabular figures). Scale ≈ 1.25: 14 / 16 / 18 / 22 / 28 / 36 / 56 / 80 px. Sentence case throughout; no all-caps eyebrows.

Shape: buttons 6px radius, panels 10px, board square-cornered inside a paper frame. Shadows only on the board frame.
Motif: board geometry — a 2×2 checker logomark with one ultramarine square; the 8-column page grid echoes files a–h; lesson numbering only where content is a real sequence (the learning path, lesson steps).

## Layout
```
HEADER  [■□ The Quiet Gambit]   Path  Openings  Gambits  Middlegames  Endgames   [3 of 12 done]
HOME    ┌ headline + 1 para ──────────┐ ┌ live board (puzzle) ───────┐
        │ [Start lesson 1] [See path] │ │  "White to move: find the  │
        │ five-track path strip       │ │   fork" + feedback line    │
        └─────────────────────────────┘ └────────────────────────────┘
        How a lesson works: 1 Read the idea · 2 Play the move · 3 Get the why
        Tracks overview (5 links, different sizes by importance) · Next up
TRACK   title + tagline │ explorer: family list ▸ board + line stepper + idea/plans │ lessons in track
LESSON  board (sticky on desktop, top on mobile) │ step panel: step n of m, text, controls, feedback (aria-live)
PATH    vertical path grouped by track: completed ✓ / next (accent) / not started; reset progress
```
Left aligned text everywhere; mobile stacks board above text, board width = viewport − 32px.

## Board interaction
- 64 `button` squares in a `role="grid"` with roving tabindex; arrow keys move focus, Enter/Space selects piece then destination, Esc cancels.
- Touch/mouse: tap a piece, tap a highlighted destination. Legal destinations shown as dots.
- Moves are checked for legality by a small built-in move generator (incl. castling, en passant, auto-queen). No engine: puzzle answers are curated, wrong-but-legal moves get curated or generic feedback.
- Each square has an accessible label ("e4, white knight"); moves are announced in a live region.
- Arrows/highlights drawn in an SVG overlay (ultramarine, low opacity).

## States
- Lesson row: not started / next (accent bar + "Next") / completed (check + "Done").
- Puzzle: idle → selected → correct (green, explanation) / incorrect (error text, try again, hint button) → solved; "Show answer" after 2 misses.
- Empty: path with nothing done says "No lessons finished yet — lesson 1 takes about six minutes."
