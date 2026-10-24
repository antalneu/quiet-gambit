# The Quiet Gambit: IA, UX and accessibility review of the Chess Library restructure (v3)

Scope: index.html, js/app.js, js/views-library.js, js/views-explorer.js, js/views-coach.js, js/views-lesson.js, js/ui.js, js/data.js, css/catalogue.css, css/library.css and css/styles.css. I read the code paths and also exercised the running site on localhost:5173 at 375x812, 1000x800 and 1280x800 (DOM measurements and computed styles only). I changed no project file. Browser state was restored (viewport reset; coach and progress storage untouched). Items marked "verified" were reproduced in the browser; the rest come from reading the code.

**What works.** None of the 15 routes I tried overflows horizontally at 375 or 1000. Each route has one h1 and no skipped heading levels. The trail (`A.trail`) is a real `nav > ol` with `aria-current="page"` on the last item. The route change moves focus to the h1 and scrolls to the top. The library state (filters, sort, query) lives in the URL via `replaceState`, so Back and reload restore it. Chips remove one filter and then hand focus on. The "Show N more" button hands focus to the first new row. The explorer board snaps back and explains an uncovered move. The coach is optional: every question is optional, the home page offers it as an invitation, and preferences are clearable. `lineStepper` re-homes focus when the pressed button becomes disabled. The previous round's fixes hold: the nav no longer wraps at 1000px, the segmented focus ring is readable, and the review pip exists.

---

## P1: broken or blocks a task

### 1. The selected "Both sides" segment is invisible (ink text on ink background) — verified
`css/library.css:109-112`. `.segmented a` sets `color: var(--ink)`; `a[aria-current="page"]` sets `background: var(--ink)`; only the `.side` child is recoloured to paper. "Both sides" (`views-library.js:125`) is plain text, so on `#/openings` and `#/gambits` the selected segment computes to `color rgb(26,29,43)` on `background rgb(26,29,43)`: the current choice has no readable label.
**Fix:** `.segmented a[aria-current="page"] { background: var(--ink); color: var(--paper); }` and keep the `.side` override. Also handle forced colours (see #19).

### 2. Two coach stat tiles lead to "That page is not on the board" — verified
`views-coach.js:233-234` links to `#/progress#ip-h` and `#/progress#rv-h`. The router (`app.js:563-566`) splits on `/` and `?` only, so the head is `progress#ip-h`, which matches no view and falls through to `notFound` (`app.js:589`). The "in progress" and "ready for review" tiles on the coach page both 404. Hash fragments cannot work in a hash router anyway.
**Fix:** link both to `#/progress?show=review` and `#/progress?show=in-progress`. Pass `r.query` into `A.views.progress(r.query)` (`app.js:580`) and, after rendering, focus the matching heading: `var h = $('#' + (q.show === 'review' ? 'rv-h' : 'ip-h')); if (h) { h.tabIndex = -1; h.focus(); }`. The `#ip-h` section only exists when something is in progress, so fall back to the h1. The "due for a refresh" tile (`:235`) points to a page that does not list refreshes; either add a "Due for a refresh" section to Progress or drop the tile.

### 3. On a phone the Library's search is below the first screen, and the results are two screens further — verified
`views-library.js:581-605`. At 375x812 the search field starts at y=833 (viewport 812) because the lede, the "Up next" strip (`next: true`, `:579`) and the 330px `lib-counts` block come first. The filter panel then runs from 833 to 1766 (11 always-open controls), so the first result row is at y=1886. When the keyboard opens, the learner types into a field and sees no result change. The "Browse by category" path is below all of that.
**Fix:**
- Drop `next: true` on this page.
- Collapse the five counts into one muted sentence, or move them below the browse index.
- Keep Search, Type and Side visible. Put First move, Category, Family, Variation, Difficulty, Style, Study time and Sort in `<details class="more-filters"><summary>More filters (N active)</summary>`, open by default at ≥900px.
- Make the active-filter chips and the count sit directly under the search field.

---

## P2: confusing or inconsistent

### 4. The family, category and side filters are not coherent on load, and contradictory combinations dead-end — partly verified
- `views-library.js:595` builds the Family list with `famOptions(q.family)`, ignoring `q.side` and `q.cat`. A reload or Back to `#/library?side=black&cat=white-e4` shows all 56 family options (verified) although the same filters changed live would show a trimmed list. The coherence code exists only in `apply(fromField)` (`:614-623`), and the first `apply()` (`:712`) passes no field.
- Category does not depend on side (`:594`): choose Black, then "White Openings: 1.e4", and you get "No entries found" with two chips and no hint (verified). With "White Gambits" the Family list is empty with no explanation (`:568`).
- Choosing a family does not set side or category, and changing side silently clears the family (`:618`).
**Fix:**
- Initial render: `famOptions(q.family, q.side, q.cat)`.
- When Side is set, hide or disable the other side's categories. When a Category is chosen, set Side to match. When a Family is chosen, set Side and Category from `f.side` and `f.group`.
- For Gambits categories, disable the Family select with the text "Gambits are not grouped into families".
- When `res.length === 0` and two filters conflict, say so: "Black has no White Openings: 1.e4 entries. Remove Side or Category." with a button for each.
- The same applies to First move: for Black the value is White's first move (`data.js:365`), so label it "White's first move" when Side is Black.

### 5. Search misses apostrophe names written without the apostrophe — verified
`data.js:375` turns every character outside `[a-z0-9.+#=\s-]` into a space. "Queen's Gambit" becomes `queen s gambit`, so the query "queens gambit" fails (15 hits against 102 for "queen's gambit"). "kings indian" finds 20 against 58 for "king's indian". The same applies to Alekhine's, Petrov's, King's, Queen's. Lower-case SAN fails too: `nf3` is not a move token (`:404`, because `n` is not `[KQRBN]`), so it only does a text match (167 hits against 183 for `Nf3`).
**Fix:** in `norm`, strip apostrophes before the replace: `.toLowerCase().replace(/['’`]/g, '')` (and `.normalize('NFD').replace(/[̀-ͯ]/g, '')` for any accented alias); apply the same function to the query. In `moveTokens`, uppercase a leading `n`, `r`, `q` or `k` when followed by a file and rank (`nf3` to `Nf3`); leave `b` alone because `b4` is a pawn move.

### 6. Result counts are announced on every keystroke
`views-library.js:603` (`#l-count role=status`) is rewritten on each `input` event (`:685`, no debounce, `:672`). Typing "sicilian" announces about 8 changing counts. The same pattern exists in Gambits (`:459`, `:471`) and Lessons (`app.js:389`, `:406`). Each keystroke also runs `Q.search` over all 682 index entries, sorts and rebuilds the list.
**Fix:** debounce the whole `apply` by ~250 ms for text input (selects stay immediate). Make the visible count a plain `<p>` and send a short message through `A.status` only after typing pauses (~800 ms): "33 entries found". Keep `role=status` on one element per page.

### 7. The count and the empty state contradict each other when only lessons match
`views-library.js:672-677`. When `res.length === 0` but lessons match, the count says "No entries found" and the body shows "Nothing in the library matches." followed by "Lessons that mention it". The lesson search (`:668-671`) also ignores the active filters and the aliases that the entry search uses.
**Fix:** when no entries match but lessons do, say "No openings or gambits match; 2 lessons mention it." and replace the big empty state with that line plus the Clear button. Search lessons with the same normaliser, and skip the lesson block when the Type filter or Side is set.

### 8. On a variation page the stepper sits 817px below the board's top, so board and "Next move" are never on screen together at 1280x800 — verified
`views-library.js:347`: board, then the line picker (161px with only 4 lines), then the stepper. The `.line-board` block is 1027px tall at 1280x800, and its parent grid is also 1027px, so `position: sticky` (`library.css:186`) has nowhere to travel. With the board visible, the "Next move" button is off-screen, and you scroll away from the board to use it. Pitfall and "Play through this line" buttons then scroll to the board and leave the controls below the fold.
**Fix:** render order board, stepper controls, picker. Make the picker a `<select>`-style disclosure when more than four lines (`<details><summary>Choose a line (6)</summary>`). Cap the sticky block with `max-height: calc(100svh - 112px); overflow: auto`.

### 9. "Move line to lesson" is the last thing on the longest page, and the page has no in-page navigation
`views-library.js:381-383`. Lessons for a variation come after seven other sections. On mobile, the Open Sicilian page is 8,974px long and the "Lessons on this variation" heading is at y=6,639 (verified). There is no "Practise this" call to action near the board and no "On this page" list. On the lesson page the matching link back is only a chip near the bottom (`views-lesson.js:84-89`).
**Fix:**
- Under the picker/stepper add a card: "Practise this line" with the first lesson from `lessons[0] || near[0]` as a button, linking to the lesson list below.
- Add `<nav aria-label="On this page">` with jump links (Idea, Plans, Move lines, Traps, How it connects, Lessons) and make `h2` targets `tabindex="-1"`, with `scroll-margin-top: 92px`.
- On narrow screens wrap Plans, Traps and Responses in `<details>` (open the first).

### 10. Explorer Back and Forward lose keyboard focus at the ends of the tree — verified
`views-explorer.js:164-166`. `data-go="back"` and `"start"` are disabled at the root and `fwd` at a leaf. Pressing Back from move 1 disables the focused button; `document.activeElement` stays on the now-disabled button (verified), which receives no key events. In browsers that blur it, focus drops to `body`. Either way the ←/→ shortcuts (handled on `main`, `:237-243`) stop working until the user tabs back in. `lineStepper` solves this (`ui.js:158`); the explorer does not.
**Fix:** use `aria-disabled="true"` and ignore the click in `step()`. Alternatively, after `render()`, if `document.activeElement` is a disabled control, focus its enabled sibling (`fwd` or `back`).

### 11. On phones the explorer's board is far above the list you tap, and the page head pushes the board down
`css/catalogue.css:164-167` (static board at ≤900px). At 375x812 with `at=e2e4` the board spans y 698-1126, the path breadcrumb 1287-1331 and the first choice 1582 (verified). Tapping a choice at y≈1600 changes a board that is more than 450px off-screen. The only visible change is the path row. The board also begins below the first screen, behind the lede and the "Up next" strip (`views-explorer.js:47-48`).
**Fix:** on ≤900px make the board a compact sticky panel (`.ex-board { position: sticky; top: 56px; z-index: 4; max-width: min(240px, 34svh) }` with the controls beside it), or return the board to view after a choice with `scrollIntoView({block:'nearest'})`. Remove `next: true` from the explorer, and fold the lede into a `<details>` on small screens.

### 12. Explorer help text promises arrow keys the board swallows, and the compare region is a noisy live region
- `views-explorer.js:62` says "use the arrow keys: left goes back, right goes forward." `onKey` returns early for anything inside `.board` (`:239`), and the board is where a player's focus usually is, so the instruction fails in the most likely place. The board arrow keys move between squares.
- `views-explorer.js:77`: `#cmp-out` is `aria-live="polite"`, and `compare()` replaces whole columns with headings, summaries, tags and links on every `change`. Each select change reads the entire compare card.
**Fix:** change the help to "Use the Back and Forward buttons. With focus on a button or a move in the list, the left and right arrow keys do the same. On the board, arrow keys move between squares." Remove `aria-live` from `#cmp-out` and call `A.status('Comparing Najdorf and Dragon. They share 5 moves and part at Black\'s move 5.')`.

### 13. `aria-current` is used for things that are not the current page — verified
- `sideSwitch` (`views-library.js:123-129`) marks the segment `aria-current="page"` by side only. On `#/openings/white/e4` both the breadcrumb "1.e4" and the segment "White Openings" announce "current page"; on `#/openings/white` there are two identical "White Openings" current pages. The Gambits group page does the same.
- `NAV_SECTION` maps `progress` to `coach` (`app.js:559`) and then sets `aria-current="page"` on Coach, so on the Progress page the Coach link claims to be the page. `lesson` and `category` mark Lessons, and `family` and `opening` mark Openings, as "page" although they are descendants. The Progress link in the nav never shows as current.
**Fix:** use `aria-current="true"` for section-level and filter-level selection. Reserve `"page"` for the exact route (`data-route === head && parts.length === 1`) and the last breadcrumb. In `sideSwitch` use `"true"` and drop it entirely when a group is selected (nothing in the control is exact). Give Progress its own nav entry state.

### 14. One concept, several labels: the vocabulary is not yet single-sourced
- **"Both sides"** means "any side" in Library, Openings, Gambits and Explorer controls (`views-library.js:125`, `:592`), but in Lessons it is a separate value beside "Any side" (`app.js:379`). Use "Any side" for every filter or switch. Keep "Both sides" only as a lesson attribute.
- **"Category"** is the Library filter (8 values like "White Openings: 1.e4", `views-library.js:22-26`), the Lessons filter (15 lesson categories such as "White Openings" and "Black vs 1.e4", `core.js:6-34`), and the section titles "Browse by category" on both Home and the Library. "White Openings" therefore names both a lesson category and a library area. Rename the Library filter and browse heading to "Section" (or "Collection"), and keep "Category" for lessons. Also rename the lesson categories at `core.js:8-12` to the library phrasing ("Black Openings: vs 1.e4") so one label matches in both places.
- **Group labels:** `GROUP_LABEL` says "vs 1.e4" (`app.js:20`), `FIRST_LABEL` says "1.e4/1.d4/1.c4/1.Nf3/Other first moves", while a "Flank openings" group covers the last three. The filter and the group nav describe the same idea in two ways.
- **Page names:** nav "Paths" and the lesson crumb "Paths" (`views-lesson.js:56`) against h1 "Learning paths"; nav "Library" against h1 "Chess Library"; "Explorer" against "Opening Explorer"; "Coach" against "Your coach". Level is "Difficulty" in Library and Gambits but "Level" in Lessons; "Study time" against "Time"; "Playing style" against "Style".
Put the strings in one table (extend `A.CAT_LABEL`/`A.GROUP_LABEL`) and use it for nav, h1, trail, chip and filter labels.

### 15. Breadcrumbs are inconsistent, and a lesson opened from a line has no way back to it
- Path detail still uses the old `<p class="crumbs">…/…</p>` (`app.js:319`): not a `nav`, no `aria-current`, "Learning paths". The lesson trail uses "Paths" (`views-lesson.js:56`).
- Library and Lessons render a one-item trail (`views-library.js:579`, `app.js:374`) that only repeats the h1. Coach, Paths, Progress and Glossary have none.
- `A.lessonHref(l, pathId)` (`app.js:41`) carries only the path. A lesson opened from a variation shows Lessons / category / "Lesson 3 of 12", with nothing leading back to the variation (the Related chips are below the player). Finishing offers "Back to the path" or "Back to the category" (`views-lesson.js:209`), never "Back to <variation>".
**Fix:**
- Build every trail with `A.trail`: Home / Learning paths / Title for paths; drop single-item trails.
- Add `from=opening/<id>` (or `gambit/`) to the lesson link from line pages and lists on them, and render Library / … / <variation> / Lesson. Offer "Back to <variation>" on the completion card.
- Add a "Practise this line" and "About this line" link in the lesson header when `rel.openings` or `rel.gambits` exist.

### 16. The top of the intended path, Library to Openings or Gambits, is not shown where people start
`views-library.js:605`: the "Browse by category" index is the last block, after counts, an 11-field form and an empty results area, and is hidden (`:663`) the moment any filter or query is set. There is no direct "Openings" or "Gambits" card pair under the h1, and the Library page's trail is itself. The home tiles do go straight to a side (`app.js:200-210`), which makes the Library page the harder way in.
**Fix:** place two entry cards (Openings: White/Black; Gambits: White/Black) directly under the h1 and above the search, link them to `#/openings/<side>` and `#/gambits/<side>`, and keep the group-level index below. Keep the browse block visible (collapsed) while searching.

### 17. Coach copy says the order you tick goals matters; it does not
`views-coach.js:175` ("The first ones you tick count most") against `:247`, where the saved goals come from `$$('input[name="goals"]:checked')`, which is DOM order. Ticking "Endgames" before "Tactics" ranks Tactics higher (`rankPaths`, `:60`). Also `val('experience') || 'beginner'` (`:246`) silently picks Beginner when the question is skipped, although the help says every question is optional.
**Fix:** change the copy to "Goals higher in this list count more", or store tick order (push on `change`, remove on uncheck). When Experience is skipped, say "No answer: we'll plan for a beginner" in the plan lede, or leave the level neutral.

### 18. A filter-style control is implemented as page navigation
`views-library.js:446-449`: the Gambits "First move" links (All / 1.e4 / 1.d4 / Flank openings) are anchors to new routes. Selecting one runs `onRoute` (`app.js:610-614`): re-render, `scrollTo(0,0)` and focus the h1. The learner loses their position and the control they just used. The same happens for the Side switch on Openings/Gambits/Explorer.
**Fix:** make First move a set of buttons with `aria-pressed` inside a `role="group"` and filter in `apply()` like Character and Difficulty (the data is already in memory), updating the URL with `replaceHash`. For the side switches, either keep navigation but return focus to the same link afterwards (`document.querySelector('.segmented a[aria-current]').focus()` after render), or apply the same in-page approach.

### 19. Forced-colors: the current segment, current filter link, current nav item and the progress pips lose their cues
`catalogue.css:222-225` covers only fam-card, line-pick, ex-ply and filter-chip. In forced-colors mode backgrounds and shadows are dropped, so:
- `.segmented a[aria-current="page"]` (background only, `library.css:111`) and `.filter-links a[aria-current="true"]` (`library.css:118`) show no selection;
- `.nav a[aria-current="page"]` (an inset `box-shadow`, `styles.css:132`, `:155`) shows none either, so you cannot see where you are;
- `.btn-secondary[aria-pressed="true"]` (the Follow-this-path toggle, `library.css:273`) and `.pip` states remain identical (`styles.css:496-500`; unchanged from the previous round).
**Fix:**
```css
@media (forced-colors: active) {
  .segmented a[aria-current], .filter-links a[aria-current], .btn-secondary[aria-pressed="true"] { background: Highlight; color: HighlightText; forced-color-adjust: none; }
  .nav a[aria-current="page"] { border-bottom: 3px solid Highlight; }
  .pip.is-completed { background: CanvasText; } .pip.is-in-progress { border-style: double; } .pip.is-review { border-style: dashed; }
}
```

---

## P3: polish

### 20. The "Study time" filter treats a family as the sum of all its variations
`data.js:265` (`f.minutes` is the sum) and `views-library.js:640`. With Type=Families and "Up to 10 min" only the 16 smallest families survive, while the family row shows variation count, not minutes (`:531-533`), so the result cannot be explained. "Easiest first" and "Shortest" sort families as Intermediate and by their total (`:654-655`).
**Fix:** compare families by their shortest variation (`min`), show "from N min" on family rows, and sort families by `levelRange` start.

### 21. Landmarks and labels: too many `nav`s, a `nav` full of buttons, and labels on elements that cannot carry them — verified
- Explorer "Moves played" is a `nav` containing `button`s (`views-explorer.js:65`). Use `<div role="group" aria-label="Moves played">`. The segmented switches and the First-move links are also `nav`s, so one page can expose seven navigation landmarks; make filter groups `role="group"`.
- `aria-label` on plain `div`s: `#l-active` (`views-library.js:602`), `.coach-stats` (`views-coach.js:231`). Give them `role="group"`, or use a `<ul>`.
- Dangling `aria-labelledby="as-white"` on `#/openings/white` and `/white/e4` (`views-library.js:163-164`): the heading is omitted when a side is selected. Verified. Use `aria-label` or output a visually hidden heading.
- The explorer's `.ex-kid` count number has only a `title` (`views-explorer.js:140`). Add `<span class="sr-only"> variations and gambits</span>`, so the button name is "1...c5, Sicilian…, 14 lines".

### 22. Toggle buttons change their label as well as `aria-pressed`
`views-coach.js:214` ("Follow this path" / "Your path") and `views-lesson.js:102` ("Mark for review" / "In your review list") both flip the text and `aria-pressed`, which reads as a double state ("Your path, pressed"). The path-detail button keeps one label (`app.js:326`), so the same action reads differently in two places. Keep one label and let `aria-pressed` carry the state. Also, when a pitfall is shown on the line page `current = 'pitfall'` (`views-library.js:398`), so every picker button reads `aria-pressed="false"` and nothing says what is on the board; add a transient fifth "Showing: Trap: ..." pressed item or restore the focus to the stepper.

### 23. Active-filter chip details
- Labels read "Category: White Openings: 1.e4" (double colon) and "Type: Families" (`views-library.js:515-523`, `:661`); use "Section is White Openings, 1.e4" or an en dash.
- After removing a chip, focus goes to the first remaining chip (`:694`), not the neighbour. Focus the chip at the same index, or the count line if none is left.
- Choosing "Move order" while searching drops `sort` from the URL (`:681`), so a reload turns it back into "Best match". Store the explicit value whenever the user touched the control.
- Chips are 36px tall without a coarse pointer (`catalogue.css:101`); fine for WCAG 2.5.8 but under the 44px target used elsewhere in the site.

### 24. Explorer smaller details
- A refused move writes the same message to `A.status` and to the `aria-live` note (`views-explorer.js:84-85`), so it is read twice, and the red note stays until the next move. Keep only the note, or only the status, and clear it on the next render.
- "Use the lines at the current position" fills the selects but does not update the URL (`:226-229`), so the compare is not shareable. Call `replaceHash` there.
- `replaceState` means browser Back leaves the explorer entirely instead of stepping back a move. Either push entries per move and handle `popstate`, or add one line to the help ("The browser's Back button leaves the explorer; use Back here").
- The path row is one tab stop per ply (19 stops at ply 19). Make it a roving tabindex group with ←/→.
- Family page "Compare two variations" always passes the first two variations (`views-library.js:229`); link the pair that most differs (e.g. first two siblings at the widest branch) or none.

### 25. Dead code and defensive gaps
- `(own === 'white' ? 'opponent' : 'opponent')` (`views-library.js:322`). Say "the opponent's choices" once.
- `#coach-status role=status` is never written (`views-coach.js:180`). Remove it; `A.status` is used.
- Unused CSS: `.var-fork-head`, `.var-fork` (`catalogue.css:226-227`), `.nav .nav-long` (`library.css:255`).
- `decodeURIComponent` throws on a malformed hash such as `#/library?q=100%` (`app.js:167`) or `#/family/%` (`:574`) and leaves the page blank. Wrap in try/catch and fall back to the raw string.
- `lessonsHit` in the Library (`views-library.js:668`) builds its own matching instead of `lessonText` in `app.js:359`, so the two lesson searches diverge.
