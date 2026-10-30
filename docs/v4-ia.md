# The Quiet Gambit v4: information architecture and screen spec

Static site, vanilla JS, hash routes. All 55 families, 121 variations, 470 lines, 36 gambits, 212 lessons, 15 categories and 18 paths stay. What changes is where they sit and how many things compete on each screen.

## 0. Diagnosis (what is redundant today)
- Four doors to the same openings: Library index (11-field filter panel + browse index), Openings area, Explorer, Lessons list (7 filters). Search lives only on `#/library`.
- Two trees: family page "Variations" tree and Explorer trie; variation page has a third view (branch block, siblings, "Where it branches", "How it connects"). Explorer duplicates "Compare" (family table) and "Same position" (variation page).
- Variation page is 10+ blocks (idea, offer, plans x2, key moves, pitfalls, responses, connections, lessons, near lessons). The board only steps a line; it cannot be played.
- Coach and Progress both show counts, next session, review; Home repeats a third copy. "Up next" strip is on 6 page types plus Home hero, hero-note, coach band and lesson end.
- Nav has 8 items + a progress chip that links to the same place as "Progress". Home has 6 sections (hero, side tiles, coach band, paths, how-it-works, category index).
- Vocabulary drift: Difficulty/Level, Character/Soundness, Group/First move/Category, Move line/Line/Sample line, Family/Opening, Variation/Entry.

## 1. Sitemap and top navigation
Header: wordmark (home) | **Openings** | **Gambits** | **Lessons** | **My study** | search field (always visible; icon button on mobile). Four items plus search. No progress chip; "My study" shows a small dot when reviews are due. Footer: Glossary, About (the existing footnote), nothing else.

| Route | Screen |
|---|---|
| `#/` | Home |
| `#/search?q=&side=&first=&cat=&level=` | Search (replaces Library index) |
| `#/openings`, `#/openings/:side`, `#/openings/:side/:group` | Openings browse (side, then first move) |
| `#/gambits`, `#/gambits/:side`, `#/gambits/:side/:group` | Gambits browse |
| `#/family/:id?v=<variationId>&line=<lineId>&at=<dotted uci>` | Opening page (branch tree + board) |
| `#/gambit/:id?line=<lineId>` | Gambit page (same layout, tree is gambit -> lines) |
| `#/train/:entryId/:lineId?mode=guided\|practice&from=branch` | Trainer; `lineId` = `main` for the sample line |
| `#/lessons`, `#/lessons?tab=paths` | Lessons (Categories tab, Paths tab) |
| `#/category/:id` | Category (lesson list) |
| `#/paths/:id` | Path detail |
| `#/lesson/:id?path=` | Lesson |
| `#/study` | My study (merges Coach + Progress) |
| `#/glossary` | Glossary |

Redirects (all `location.replace`, old query preserved where it still means something):
- `#/library` -> `#/search` if any of q/side/first/cat/level present, else `#/openings`. Dropped params: type, family, variation, style, time, sort. Old lesson-style params keep today's mapping: `?cat=<lessonCat>` -> `#/category/<id>`.
- `#/opening/:id[?line=]` -> `#/family/<fam of id>?v=<id>[&line=]`.
- `#/explorer?side&at` -> resolve `Q.node(side, at)` with `Q.locate`: family found -> `#/family/<id>?at=<at>`; else `#/openings/<side>`. `a`/`b` params ignored.
- `#/coach`, `#/progress`, `#/path` -> `#/study`.
- `#/lessons?q=&side=&level=&cat=` -> `#/search?...` (cat to that category); any of `time`, `line`, `state` dropped. `#/lessons` with no query stays.
- `#/openings?view=...`, `#/openings?group=`, `#/gambits?side=` keep their current redirects. `#/tactics`, `#/middlegames`, `#/endgames` unchanged.

## 2. Screens

### Home
- Purpose: let the learner resume or pick a starting door.
- Primary action: **Continue** (one card, section 6). First-time visitor: card reads "Start here" and opens the first beginner-path lesson.
- Secondary: large search field; four doors: White openings, Black openings, Gambits, Lessons (each one line: count + "by 1.e4, 1.d4, flank" / "vs 1.e4, 1.d4, flank").
- Default content: wordmark line, search, Continue card, four doors. Nothing else.
- Behind a control: none.
- Removed: hero puzzle, "How a lesson works", coach band, path cards, 15-category index, long lede with counts, hero note, progress chip.

### Search (the library index)
- Purpose: find any opening, gambit, variation, line or lesson by name, alias, ECO or moves.
- Primary action: open a result. Secondary: Train (icon button on result rows that have a line); clear filters.
- Default: search field (focused), four filter selects in one row, result groups. With no query and no filter: a one-line hint plus links to Openings, Gambits, Lessons (no browse index, no counts).
- Behind a control: "Show N more" per group; on phones the four filters sit in a "Filters" sheet with active filters shown as removable chips.
- Removed: type/family/variation/style/time/sort filters, "Browse by category" block, counts dl, "Lessons that mention it" tail (lessons become a result group). Full spec in section 4.

### Openings (side, then first move)
- Purpose: choose which opening to study.
- Primary action: open an opening family row.
- Flow: `#/openings` shows two big choices only: **White openings** ("by your first move") and **Black openings** ("by White's first move"). `#/openings/:side` shows a segmented control `All | 1.e4 | 1.d4 | Flank` (Black labels: `vs 1.e4 | vs 1.d4 | vs flank`) and, for All, the three groups as sections of rows. `/:group` is the same page scoped to one group.
- Row: opening name, root moves in notation (`1.e4 c5`), "N variations", level range. No summary paragraph, no card art.
- Secondary: "Gambits in 1.e4" link in each group footer; search field in header.
- Removed: Explorer button, "Search the library" button, per-group blurbs, tags row, side switch on the index (side is now the first choice).

### Gambits
- Purpose: choose a gambit to study, knowing how sound it is.
- Primary action: open a gambit row. Same flow as Openings: `#/gambits` -> side -> first-move groups (`1.e4`, `1.d4`, `Flank` / `vs ...`).
- Row: name, moves, soundness tag (Established, Playable, Speculative), level. Sorted Established first within a group.
- Behind a control: soundness legend (one "What do these mean?" disclosure, three lines).
- Removed: gambit-specific search/character/difficulty form (global search covers it), cards with summaries.

### Opening page (`#/family/:id`; the gambit page is the same layout)
- Purpose: see how an opening branches and open the board at any branch.
- Primary action: **Train** the selected line (button above the tree; label "Train: Najdorf, main line"). Default selection = the family's first variation, its main line.
- Secondary: step the board (first/back/forward/last), "Continue with" move chips for the next choices at the board position, pick another branch in the tree.
- Layout desktop: board left (sticky, largest element) with a 4-button step bar and the current move text under it; right column: title (name, root moves, aliases, one-sentence summary), **Branch tree**, then one disclosure "About this opening". Layout mobile: board on top, title compact, one bar `[Branches: Najdorf >]` opens a bottom sheet holding the tree; Train button pinned below the board.
- Behind "About this opening" (collapsed): overview, how to choose, plans for both sides, traps and risks, words, "From the other side" (mirror family), "Same position, other routes", gambits and lessons for this opening (as short link lists).
- Removed: variation compare table, "Compare two variations", per-variation separate page, 5-block "How it connects", ECO/level/style tag rows (level and style appear only on tree rows), near lessons, Explorer link.
- Variation, line and gambit details (idea, plans, key moves) appear in a panel under the tree, for the selected node only (see section 3).

### Trainer (`#/train/...`)
- Purpose: play a line from move 1 as your side until you know it.
- Primary action: make the next move on the board. After a line ends: **Next line** (or "Again" if the line was missed).
- Modes (segmented toggle, remembered): **Guided** (default for first run of a line): your next move is shown as an arrow after 1 s or on "Hint"; the move note appears after each move; opponent replies auto-play with their note. **Practice**: no arrow, no notes until the line ends; wrong move = shake + "Not in this line"; second miss on a move reveals it (counted). Opponent replies auto-play.
- Layout desktop: board left; right: header (`Najdorf > Main line`, your side), move list with current ply and move note, controls (Back, Restart, Hint), mode toggle, button `Lines` (opens tree drawer to switch line or variation without leaving the trainer). Mobile: board, one note line, controls bar, `Moves and lines` bottom sheet (move list + tree).
- Side: board oriented to your side; for Black the White moves before yours auto-play.
- Behind a control: "Start from the branch" (skips auto-playing the shared moves, `from=branch`), Hint, reset line progress.
- End state: one line summary (moves, misses), one button, one link "Back to the opening".
- Removed: stepper-only replay as the main experience (the family page board still steps lines for browsing), pitfall "show on the board" buttons as separate play mode (traps appear as lines in the tree's "Traps" group, trainable).
- Needs data: line = `entry.defining + line.uci` (from `Q.line(id).lines`), or `entry.line` for `main`; notes from `moves[i].note`. New store `qg-trainer-v1` per `entryId/lineId`: `{guidedDone, bestMisses, lastPly, lastAt}`.

### Lessons (`#/lessons`)
- Purpose: pick a skill category or a guided path to learn from.
- Primary action: **Continue** only if a lesson is in progress; otherwise open a category.
- Tabs: **Categories** (default) and **Paths**. Categories tab: 15 rows in three groups (Openings 4, Gambits 2, Skills 9): title, "n of N done", one-line summary. Opening/gambit category rows carry "Also in Openings" link.
- Paths tab: 18 rows grouped by goal ("Build your openings", "Build your skills"); row: title, side, lesson count, "n of N done". No summaries, no pips.
- Removed: the flat 212-lesson list with 7 filters (the global search finds lessons; side/category/level apply), "Up next" strip, pip strips.

### Category (`#/category/:id`)
- Purpose: work through one category in order.
- Primary: **Continue / Start: <lesson>**. Secondary: for opening/gambit categories "Study these in Openings" link.
- Default: ordered lesson rows (title, minutes, done mark). Behind control: "Key ideas at a glance" (strategy and endgames concept boards) as a collapsed section.
- Removed: pip rows, level/side repeated on every row, up-next strip.

### Lesson (`#/lesson/:id`)
- Purpose: learn one idea (read, line, puzzle steps).
- Primary: the step action (Next step / Finish lesson). Existing player unchanged.
- Header: title, goal sentence, `Step n of m`. Side, level, minutes, state tag, prerequisites and "Mark for review" move into one "Details" disclosure.
- On completion: one button **Next** (next in path, else next in category), and, if the lesson relates to a line, a link "Train this line".
- Removed: always-visible Related section (moves into the completion screen and Details), crumb row beyond `Category > Lesson n`.

### Paths (`#/paths/:id`)
- Purpose: follow an ordered sequence of lessons.
- Primary: **Continue / Start: <next lesson>**. Secondary: "Follow path" toggle (this becomes My study's active path).
- Default: ordered steps; only the next step shows its "why". Removed: summary repeats, "Why this next" paragraph above the list, state tags on every row (a check mark replaces them).

### My study (`#/study`; Coach + Progress merged)
- Purpose: show what to do today and how far along the learner is.
- Primary: **Start today's session** (list of 3 to 5 items: due reviews, trainer lines to redo, next lesson; budget from the coach time answer, default 20 min).
- Default: session list; one summary line "42 of 212 lessons, 31 of 470 lines trained"; followed path with its Continue button.
- Behind controls (each a disclosure): "Review list (n)", "Progress by category" (table), "Paths" (progress per path), "Adjust my plan" (the four coach questions, opens open if no prefs yet), "Suggested repertoire" (current coach repertoire tables), "Reset progress" (existing confirm).
- Removed: separate Coach and Progress pages, stat tiles, state legend, "Four quick questions" page-length form on first visit (shown as the opened disclosure instead), duplicate next card.

## 3. Branch-tree model (opening page)
Built from `famTree(f)` (shared moves once, forks where variations part). Three node kinds, one visual row each, indentation 16 px per level, connectors drawn with a left border.
1. **Fork** (unnamed branch point): label = branch moves in notation from the previous node only, e.g. `2...d6`; sub label "3 choices". Expanded by default if it contains the selection, else collapsed.
2. **Variation**: label = branch move(s) from parent in a mono badge (`3.Bb5`, `5.Bg5`) with a mover dot (white or black square), then the short name (`Najdorf`), then a level tag. Main line of the family is the first row with badge "Start" and the root moves.
3. **Line** (leaf, only under the selected variation): name, kind tag (Main line, Trap, Sideline, Transposition), notation continuing from the variation end.
Row interaction:
- Click or Enter on a Fork/Variation row selects it: board jumps to the position after the row's defining moves (`entry.defining`), last-move highlighted, step bar updates, the moves strip under the board shows the path with the branch move bold, the detail panel under the tree fills (summary, idea, plans, key moves, pitfalls for that variation) and its lines list opens.
- Click on a Line row plays it on the board from the variation end (`lineStepper`, `startAt = defining.length`); `?line=` updates; Train button label updates.
- Switching branches: sibling rows are adjacent; Up/Down moves between visible rows, Left collapses, Right expands (ARIA tree, roving tabindex). Under the board, "Continue with: 3.Bb5 · 3.d4 · 3.Bc4" chips (children of the trie node) jump the tree selection to the matching row, or show an unnamed position when none (this replaces Explorer browsing).
- Opening the board at a branch from elsewhere: `?v=<variationId>` selects and scrolls to the row; `?at=` selects the deepest tree node on that path.
- Tree to trainer: the **Train** button (above the tree) goes to `#/train/<entry>/<line|main>?mode=guided`. Each selected row also has a small "Train" icon button. Training from a fork row trains the first variation under it.
- Gambit page: root row = the gambit (offer + moves); children = its lines and its "Accepted / Declined" responses. Same row kinds, no variations.

## 4. Search and filters
Four filters, selects, in this order, one row; values apply to all result types:
| Filter | Label | Values |
|---|---|---|
| Side | Side | Any side, White, Black |
| First move | First move | Any, 1.e4, 1.d4, Flank openings. For Black content this is White's first move; field help text: "White's first move for Black openings". |
| Category | Category | All, Openings, Gambits, then the 9 skill categories by title. "Openings" = the 4 opening lesson categories plus library openings. |
| Level | Level | Any, Beginner, Intermediate, Advanced. Family matches if any variation matches. |
Lesson results ignore First move unless the lesson is related to a line with that first move; lessons with `side: both` pass any Side value.

Search matching: existing `Q.search` (names, aliases, ECO, terms, family names, move sequences like `1.e4 c5 2.c3`, apostrophes ignored). Add lessons to the index (title, summary, related opening names). Debounced at 150 ms; header typeahead shows up to 6 mixed results, Enter opens `#/search`.

Result groups, in this order, each capped at 5 with "Show N more": **Openings** (families), **Gambits**, **Variations**, **Lines**, **Lessons**. Empty groups hidden. Order within a group: score, then name. A strong exact-name hit (score >= 100) is pulled out as a top "Best match" row above the groups.
Result row: side dot + name (bold); second line = context path in plain words (`White, 1.e4, Sicilian`; for a line: `Najdorf, Main line`); third line = notation (moves, truncated to one line); right: level tag (families: `3 variations`; lessons: `6 min`); if the match came through an alias, `Also called Spanish` replaces the context line. Icon button "Train" on variation, line and gambit rows. Click target by type: opening -> family page; variation -> `#/family/:fam?v=`; line -> `?v=&line=`; gambit -> gambit page; lesson -> lesson.
Empty state (query or filters, no result): "Nothing matches '<q>'." then, in order: removable chips for active filters ("Remove: White"), a hint line "Try another name (Spanish for Ruy Lopez), an ECO code, or moves like 1.e4 c5", and links Openings / Gambits / Lessons. No illustration.

## 5. Vocabulary (one term per concept)
| Concept | Site-wide term | Replaces |
|---|---|---|
| Opening family (Sicilian Defence) | **Opening** | family, opening family |
| Named branch (Najdorf) | **Variation** | entry, opening (as variation) |
| Move sequence inside a variation | **Line** | move line, sample line, typical move order |
| The family's or variation's first line | **Main line** | sample line |
| Gambit | **Gambit** | (unchanged) |
| Gambit soundness | **Soundness**: Established, Playable, Speculative | character |
| Fork in the tree | **Branch** | where it branches |
| Learner plays a line | **Train** (screen: Trainer); modes **Guided**, **Practice** | replay, play through, explorer |
| Study content | **Lesson**; grouped in **Category**; ordered set is a **Path** | track, learning path |
| Difficulty | **Level** | difficulty |
| White's first move grouping | **First move** | group, category (in filters) |
| Your colour | **Side**; headings "White openings", "Black openings" | repertoire, "Black Openings" capitalised |
| Resume affordance | **Continue** | Resume, Start, Up next |
| Things flagged to redo | **Review** | review list, ready for review, refresh |
| Merged coach and progress | **My study** | Coach, Progress, Your progress |
| Study duration | **min** | study time |
Sentence case everywhere; "1.e4" notation, no "vs." except in Black first-move labels (`vs 1.e4`).

## 6. Next-action logic ("Continue")
One function `nextAction()` replaces `A.nextUp`, `nextStrip`, `nextCTA`. It returns `{kind, label, why, href}`. First match wins:
1. **Unfinished item**: most recently touched of (a) trainer line with `lastAt` in the last 14 days and not complete, (b) lesson `in-progress` (`P.last()`). Label `Continue: Najdorf, main line (Guided, move 9 of 22)` or `Continue: <lesson title> (step 3 of 6)`.
2. **Followed path**: first step not completed -> that lesson; label `Continue: <lesson>`; why = the step's `why`.
3. **Coach session**: if coach prefs exist, first item of `session(prefs)` (reviews due first, then next steps of ranked paths; trainer lines flagged for redo count as reviews). Why = its reason.
4. **Default**: first lesson of the first beginner path; then first not-completed lesson. Label `Start here`.
5. **Everything done**: link to My study ("All caught up. Review n items.").
Where it appears (and nowhere else): Home card; My study "Start today's session" (the whole list, item 1 first); end of a lesson (next in path, else category) and end of a trainer line (next untrained line in this variation, else next variation in the opening, else "Back to the opening"). Gets no strip under page headings; category and path pages show their own Continue button scoped to that category or path.
Trainer line completion rule: Guided finished once counts "learned"; Practice finished with 0 misses counts "trained"; 2+ misses add the line to Review.

## 7. Build notes (for the implementer)
- New: `views-search.js`, `views-trainer.js` (reuses `U.boardFrame` with `interactive:true`, `frame.onMove` returning false for wrong moves), `views-study.js` (from coach + progress). Delete `views-explorer.js` after redirects work. Fold `views-library.js` family/line views into one `views-opening.js`.
- Shared component `QGUI.branchTree(host, family, {onSelect})` and `QGUI.sheet(button, content)` (bottom sheet, focus trap, Esc closes) used by opening page and trainer.
- Keep route redirect table in `app.js` `REDIRECT` plus a function for param-aware ones; keep old `NAV_SECTION` mapping to the four nav items (`search` highlights none).
