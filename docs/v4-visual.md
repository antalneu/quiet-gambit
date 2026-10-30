# The Quiet Gambit v4 - Visual direction: "Calm Glass"

Scope: CSS and markup only. Routes, content and JS logic unchanged. Plain CSS, `backdrop-filter` with `@supports` fallback. Replaces tokens in `css/styles.css`; component rules replace `library.css` / `catalogue.css` equivalents. Suggested files: `tokens.css`, `glass.css`, `components.css`, `pages.css`.

## 1. Principles and layer model

1. **Glass is chrome, never content.** Glass = top nav, mobile tab bar, bottom sheets, toasts, segmented controls, buttons. Reading text, boards, cards, lists = opaque.
2. **One surface per screen holds the work.** A single opaque "sheet" carries the page; the board never sits on glass or a gradient.
3. **Contrast is guaranteed by construction, not by luck.** Glass fills are >= 78% white and glass text is only `--ink` / `--ink-2` (see 2.1). Graphite is allowed on opaque surfaces only.
4. **Depth by 3 cues only:** soft shadow, 1px light top edge, blur. No glow, no coloured shadows, no gradients on text.
5. **One purpose, one primary action per screen.** One filled `.btn-primary` per view; everything else secondary or quiet.
6. **Calm motion.** 120-320ms, ease-out, opacity/transform only. Nothing loops. No entrance animation on the board.
7. **Min 15px for all UI text, 17px for reading.** The current 12-14px labels, tags and counts go up to 15px or get deleted.
8. **Degrade silently:** reduced-transparency, no `backdrop-filter`, forced-colors all give opaque, bordered, fully legible UI.

**Identity evolution.** Keep ink, ultramarine, Newsreader (reading) and Schibsted Grotesk (UI). Change the backdrop from flat ivory to a cool mist (`#E7EBF4`..`#DCE3F1`) with two faint tinted washes. Reason: blur and edge highlights are invisible over flat warm beige; a cool, slightly deeper backdrop makes glass read as glass and makes the warm-white content sheet feel like paper laid on it. The warm paper stays for reading; the board squares go slightly cooler so they sit well on the new surface.

**Layers, back to front**

| z | Layer | Material | Examples |
|---|---|---|---|
| -1 | Backdrop | fixed mist gradient, static | `body::before` |
| 0 | Content sheet | opaque `--surface`, r28, e1 | page body, cards, board stage, lists |
| 30 | Glass chrome | glass, blur 24 | sticky nav, mobile tab bar, controller bar |
| 60 | Sheets/drawers | glass-strong (92% fill), blur 36 | Moves/tree drawer, menu |
| 80 | Toasts, popovers | glass-strong, e3 | toast, promotion picker |
| 90 | Scrim (full sheets only) | `rgba(22,26,43,.32)`, no blur | modal tree |

## 2. Tokens

```css
:root{
  color-scheme:light;
  /* ink + accent (AA verified on --surface and on every glass fill below) */
  --ink:#161A2B; --ink-2:#3A3E50; --graphite:#555968;       /* graphite: opaque surfaces only */
  --accent:#2F3BD6; --accent-hi:#3F4BE2; --accent-ink:#232DA8; --accent-wash:#E6E8FA;
  /* backdrop + surfaces */
  --mist-0:#EDF0F7; --mist-1:#DCE3F1;
  --surface:#FCFBF8; --surface-2:#F4F2EC; --surface-3:#ECE8DF;   /* sheet, well/card, pressed well */
  --hairline:rgba(22,26,43,.10); --edge-ui:rgba(22,26,43,.28); --edge-input:#6A6E7F; /* input border 5:1 */
  /* board */
  --sq-light:#EEEAE0; --sq-dark:#8E9AB5; --board-edge:rgba(22,26,43,.30);
  /* state (text colours on their washes) */
  --ok:#1F4B30; --ok-wash:#E4F0E7; --bad:#7A2417; --bad-wash:#F8E4DE;
  --hint:#1C2170; --hint-wash:#E6E8FA; --info:#161A2B; --info-wash:#EEF0F6;
  /* glass: fill alpha never below .78 */
  --glass-bg:linear-gradient(180deg,rgba(255,255,255,.92),rgba(255,255,255,.80));
  --glass-bg-strong:linear-gradient(180deg,rgba(255,255,255,.96),rgba(255,255,255,.92));
  --glass-filter:blur(24px) saturate(1.6); --glass-filter-strong:blur(36px) saturate(1.6);
  --glass-well:rgba(22,26,43,.07);                        /* segmented track, quiet hover */
  --edge-glass:inset 0 1px 0 rgba(255,255,255,.95),inset 0 -1px 0 rgba(22,26,43,.06),0 0 0 1px rgba(22,26,43,.09);
  /* elevation */
  --e1:0 1px 2px rgba(20,24,45,.06),0 2px 8px rgba(20,24,45,.05);
  --e2:0 2px 4px rgba(20,24,45,.06),0 12px 28px -8px rgba(20,24,45,.16);
  --e3:0 4px 8px rgba(20,24,45,.06),0 28px 60px -14px rgba(20,24,45,.30);
  /* radii */
  --r-xs:8px; --r-sm:12px; --r-md:16px; --r-lg:22px; --r-xl:28px; --r-pill:999px;
  /* spacing (4-based) */
  --s-1:4px; --s-2:8px; --s-3:12px; --s-4:16px; --s-5:24px; --s-6:32px; --s-7:48px; --s-8:72px; --s-9:112px;
  --gutter:clamp(12px,3vw,32px); --max:1200px; --nav-h:56px;
  /* type: UI min 15, reading min 17 */
  --font-ui:"Schibsted Grotesk","Helvetica Neue",Arial,sans-serif; --font-read:"Newsreader",Georgia,serif;
  --t-ui:15px; --t-read:19px; --t-read-min:17px; --t-h4:19px; --t-h3:22px; --t-h2:clamp(26px,3vw,34px);
  --t-h1:clamp(34px,4.4vw,52px); --t-display:clamp(40px,6vw,64px);
  /* motion */
  --dur-1:120ms; --dur-2:200ms; --dur-3:320ms;
  --ease:cubic-bezier(.2,.7,.2,1); --ease-sheet:cubic-bezier(.32,.72,0,1);
}
body{margin:0;background:var(--mist-0);color:var(--ink);font:400 var(--t-ui)/1.5 var(--font-ui)}
body::before{content:"";position:fixed;inset:0;z-index:-1;
  background:radial-gradient(60vmax 50vmax at 6% -12%,rgba(47,59,214,.15),transparent 60%),
             radial-gradient(50vmax 45vmax at 104% 106%,rgba(214,170,110,.18),transparent 60%),
             linear-gradient(180deg,var(--mist-0),var(--mist-1))}
:focus-visible{outline:3px solid var(--accent);outline-offset:3px;border-radius:var(--r-xs)}
```

### 2.1 Glass contrast rule (WCAG AA over ANY backdrop)
Worst case is a black element under a glass layer. Fill 78% white over pure black = ~`#C7C7C7`, L=0.57. `--ink` there = 12:1, `--ink-2` = 6.3:1 (both pass 4.5:1). `--graphite` = 4.1:1 (fails), so it is banned on glass. `--accent-ink` on glass-strong (92%, worst `#EBEBEB`) = 7:1. Rules: (a) any text on glass uses `--ink`, `--ink-2` or white on an accent fill; (b) never lower alpha; (c) no images or video under glass; (d) text inside a glass element is >= 15px/500.

### 2.2 Fallbacks
```css
.glass,.nav-bar,.tabbar,.sheet,.toast{ -webkit-backdrop-filter:var(--glass-filter); backdrop-filter:var(--glass-filter); }
@supports not ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))){
  :root{ --glass-bg:#F6F7FB; --glass-bg-strong:#FFFFFF; --glass-filter:none; --glass-filter-strong:none; }
}
@media (prefers-reduced-transparency:reduce){
  :root{ --glass-bg:#F6F7FB; --glass-bg-strong:#FFFFFF; --glass-filter:none; --glass-filter-strong:none; --glass-well:#E6E8EF; }
  body::before{background:var(--mist-0)}
}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}
}
@media (forced-colors:active){
  .glass,.nav-bar,.tabbar,.sheet,.toast,.btn,.segmented,.chip-f,.card{background:Canvas;border:1px solid CanvasText;box-shadow:none;backdrop-filter:none}
  .nav a[aria-current],.segmented [aria-current],.segmented [aria-pressed=true],.chip-f[aria-pressed=true],.mv[aria-current]{outline:2px solid Highlight;outline-offset:-2px;font-weight:700}
  .btn-primary{background:ButtonText;color:ButtonFace}  .btn:disabled{border-style:dashed;color:GrayText}
  body::before{display:none}
}
```
Nav and sheet: elements use `--glass-filter-strong` where specified. Optional: honour a "Solid surfaces" footer toggle by setting `html[data-solid]` and duplicating the reduced-transparency block under that selector.

### 2.3 Dark mode: **skipped in v4.** Reason: board legibility, glass contrast guarantees and the warm reading surface are tuned for one theme; a second theme doubles the contrast matrix for no learning gain. `color-scheme:light` stays. Revisit as a separate task using this token list (all colours are tokens).

## 3. Component recipes

**Page sheet** (opaque content surface)
```css
.sheet-page{background:var(--surface);max-width:var(--max);margin:var(--s-4) auto var(--s-8);border-radius:var(--r-xl);
  box-shadow:0 0 0 1px var(--hairline),var(--e1);padding:clamp(20px,4vw,56px);width:calc(100% - 2*var(--gutter))}
@media(max-width:640px){.sheet-page{border-radius:var(--r-lg);margin-bottom:96px}} /* room for tab bar */
```

**Glass top navigation** (floating pill, sticky; content scrolls under it)
```css
.nav-bar{position:sticky;top:12px;z-index:30;display:flex;align-items:center;gap:var(--s-4);height:var(--nav-h);
  width:calc(100% - 2*var(--gutter));max-width:var(--max);margin:12px auto 0;padding:0 8px 0 20px;
  background:var(--glass-bg);border-radius:var(--r-pill);box-shadow:var(--edge-glass),var(--e2)}
.nav a{display:inline-flex;align-items:center;height:40px;padding:0 16px;border-radius:var(--r-pill);
  font:500 var(--t-ui)/1 var(--font-ui);color:var(--ink-2);text-decoration:none;position:relative;
  transition:background var(--dur-1) var(--ease)}
.nav a:hover{background:var(--glass-well);color:var(--ink)}
.nav a[aria-current=page]{color:var(--ink);font-weight:600;background:#fff;box-shadow:inset 0 1px 0 #fff,0 0 0 1px var(--edge-ui),var(--e1)}
.nav a[aria-current=page]::after{content:"";position:absolute;left:50%;bottom:3px;width:4px;height:4px;margin-left:-2px;border-radius:50%;background:var(--accent)}
```
Active = raised white pill + bolder weight + dot (not colour alone). Desktop links: **Library, Openings, Lessons, Coach** + search icon button. Mobile (<=760px): nav-bar shows wordmark + search icon only; links move to `.tabbar` (below).

**Mobile tab bar** (replaces hamburger menu)
```css
.tabbar{position:fixed;z-index:30;left:12px;right:12px;bottom:calc(10px + env(safe-area-inset-bottom));display:none;height:64px;
  background:var(--glass-bg);border-radius:var(--r-xl);box-shadow:var(--edge-glass),var(--e2);padding:6px}
@media(max-width:760px){.tabbar{display:grid;grid-template-columns:repeat(4,1fr)}.nav{display:none}}
.tabbar a{display:grid;place-items:center;gap:2px;border-radius:var(--r-lg);font:500 15px/1 var(--font-ui);color:var(--ink-2);text-decoration:none}
.tabbar a[aria-current=page]{background:#fff;color:var(--ink);font-weight:600;box-shadow:0 0 0 1px var(--edge-ui),var(--e1)}
body[data-focus] .tabbar{display:none} /* trainer/lesson: controller bar replaces it */
```

**Glass segmented control** (side: White | Black; or Lines | Tree)
```css
.segmented{display:inline-flex;padding:4px;gap:2px;background:var(--glass-well);border-radius:var(--r-pill);box-shadow:inset 0 1px 2px rgba(22,26,43,.12),0 0 0 1px var(--hairline)}
.segmented :is(a,button){min-height:44px;padding:0 18px;border:0;border-radius:var(--r-pill);background:transparent;color:var(--ink-2);font:500 var(--t-ui)/1 var(--font-ui);text-decoration:none;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:background var(--dur-2) var(--ease),box-shadow var(--dur-2) var(--ease)}
.segmented :is([aria-current],[aria-pressed=true]){background:#fff;color:var(--ink);font-weight:600;box-shadow:inset 0 1px 0 #fff,0 0 0 1px var(--edge-ui),var(--e1)}
```

**Buttons** (pill; `.btn-icon` = 44x44 circle; sizes: min-height 44, never smaller)
```css
.btn{display:inline-flex;align-items:center;justify-content:center;gap:var(--s-2);min-height:44px;padding:0 22px;border:0;border-radius:var(--r-pill);
  font:600 var(--t-ui)/1 var(--font-ui);text-decoration:none;cursor:pointer;color:var(--ink);
  transition:transform var(--dur-1) var(--ease),box-shadow var(--dur-2) var(--ease),background var(--dur-2) var(--ease)}
.btn-icon{width:44px;padding:0}
.btn-primary{color:#fff;background:linear-gradient(180deg,var(--accent-hi),var(--accent) 55%,#2733C2);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 0 0 1px rgba(23,28,120,.65),var(--e1)}   /* white on #3F4BE2 = 6.3:1 */
.btn-primary:hover{box-shadow:inset 0 1px 0 rgba(255,255,255,.4),0 0 0 1px rgba(23,28,120,.65),var(--e2)}
.btn-secondary{background:var(--glass-bg-strong);box-shadow:var(--edge-glass),var(--e1)}
.btn-secondary:hover{box-shadow:var(--edge-glass),var(--e2)}
.btn-quiet{background:transparent;color:var(--ink-2)} .btn-quiet:hover{background:var(--glass-well);color:var(--ink)}
.btn:active,.btn[aria-pressed=true]{transform:scale(.97)}
.btn-secondary[aria-pressed=true],.btn-quiet[aria-pressed=true]{background:var(--accent-wash);color:var(--accent-ink);box-shadow:inset 0 2px 4px rgba(22,26,43,.16),0 0 0 1px var(--accent)}
.btn:disabled,.btn[aria-disabled=true]{opacity:.45;box-shadow:none;cursor:not-allowed;pointer-events:none}
```
Pressed toggles also swap the icon (e.g. check) so state is not colour-only. Focus-visible = global 3px accent ring, offset 3px.

**Bottom sheet / drawer** (mobile Moves + variation tree; non-modal so the board stays tappable)
```css
.sheet{position:fixed;z-index:60;left:8px;right:8px;bottom:calc(8px + env(safe-area-inset-bottom));max-height:min(46svh,420px);display:grid;grid-template-rows:auto 1fr;
  background:var(--glass-bg-strong);-webkit-backdrop-filter:var(--glass-filter-strong);backdrop-filter:var(--glass-filter-strong);
  border-radius:var(--r-xl);box-shadow:var(--edge-glass),var(--e3);
  transform:translateY(calc(100% + 24px));visibility:hidden;transition:transform var(--dur-3) var(--ease-sheet),visibility 0s linear var(--dur-3)}
.sheet[data-open=true]{transform:none;visibility:visible;transition-delay:0s}
.sheet-head{display:flex;align-items:center;justify-content:space-between;padding:8px 8px 4px 20px;font-weight:600}
.sheet-head::before{content:"";position:absolute;top:6px;left:50%;width:36px;height:5px;margin-left:-18px;border-radius:3px;background:rgba(22,26,43,.25)} /* decorative */
.sheet-body{overflow:auto;overscroll-behavior:contain;padding:4px 20px 20px}
```
Behaviour: opened by a `Moves` button (`aria-expanded`, `aria-controls`); close button 44px in head; Esc closes; focus moves to the head on open and back to the trigger on close; board stays above (page scrolls it to `top: nav-h+12` when sheet opens). `.sheet-full` variant (86svh + scrim) only for the full variation tree. Reduced motion: no translate, instant. Desktop (>=901px): same content is a static column, no sheet.

**Search field**
```css
.search{position:relative;display:block}
.search input{width:100%;height:56px;padding:0 52px 0 54px;border:1.5px solid var(--edge-input);border-radius:var(--r-pill);background:#fff;color:var(--ink);font:400 17px/1 var(--font-ui);box-shadow:var(--e1)}
.search input::placeholder{color:#5E6272} .search input:focus-visible{outline:3px solid var(--accent);outline-offset:2px;border-color:var(--accent)}
.search .ico{position:absolute;left:20px;top:18px;width:20px;height:20px;color:var(--ink-2)}
.search .clear{position:absolute;right:6px;top:6px}  /* .btn-icon.btn-quiet, shown when value non-empty */
```

**Filter chips** (toggle, with check glyph for selected; removable chips show x)
```css
.chip-f{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 16px;border:0;border-radius:var(--r-pill);background:var(--surface-2);color:var(--ink);
  font:500 var(--t-ui)/1 var(--font-ui);box-shadow:inset 0 0 0 1px var(--edge-ui);cursor:pointer;transition:background var(--dur-1) var(--ease)}
.chip-f:hover{background:var(--surface-3)}
.chip-f[aria-pressed=true]{background:var(--ink);color:#fff;box-shadow:none}
.chip-f[aria-pressed=true]::before{content:"\2713";font-weight:700}
.chip-f .count{color:inherit;opacity:.75;font-size:15px}
```

**Content card** (opaque; no left bars, no dashed borders)
```css
.card{display:grid;gap:var(--s-2);align-content:start;padding:var(--s-5);background:var(--surface-2);border-radius:var(--r-lg);box-shadow:inset 0 0 0 1px var(--hairline);color:var(--ink);text-decoration:none;
  transition:transform var(--dur-2) var(--ease),box-shadow var(--dur-2) var(--ease),background var(--dur-2) var(--ease)}
a.card:hover{background:var(--surface);box-shadow:0 0 0 1px var(--edge-ui),var(--e2);transform:translateY(-2px)}
.card h3{font:600 var(--t-h4)/1.25 var(--font-ui)} .card .meta{color:var(--graphite);font-size:15px}  /* graphite OK: opaque */
.card .moves{font:400 17px/1.4 var(--font-read);font-variant-numeric:tabular-nums lining-nums}
```
Max 3 text lines per card: name, moves or one-line summary, one meta line. One status word instead of tag zoo.

**Board stage** (opaque, framed; the visual anchor of every trainer/lesson screen)
```css
.stage{background:var(--surface);padding:clamp(10px,1.6vw,16px);border-radius:var(--r-lg);box-shadow:0 0 0 1px var(--hairline),var(--e2);width:100%}
.stage .board{border-radius:var(--r-xs);overflow:hidden;box-shadow:0 0 0 1px var(--board-edge)}
.stage-caption{display:flex;justify-content:space-between;gap:var(--s-3);padding:var(--s-3) 4px 0;font-size:15px;color:var(--graphite)}
```
Squares `--sq-light/--sq-dark`; last move = accent 22% wash + 3px inset corner bracket; target dots/rings and selected unchanged (accent-board `#1F2AA8`). **Coordinates move out of the squares** into the stage gutter: ranks in a 22px left column, files in a 22px bottom row, 15px/600 `--ink-2` on `--surface`, tabular. Pieces never overlap labels. (Needs `U.boardFrame` to render `.coord-rank` / `.coord-file` as siblings; on boards <300px hide them.) Piece stroke and fills unchanged. No hero "settle" rotate animation.

**Move list chips** (inside stage column or sheet)
```css
.mv{min-height:40px;min-width:44px;padding:0 10px;border:0;border-radius:var(--r-sm);background:transparent;color:var(--ink);font:500 18px/1 var(--font-read);font-variant-numeric:tabular-nums;cursor:pointer}
.mv:hover{background:var(--glass-well)}
.mv[aria-current=step]{background:var(--ink);color:#fff;font-weight:600;box-shadow:var(--e1)}   /* inverse + weight, not colour only */
.mv-num{color:var(--graphite);font:400 15px var(--font-ui);margin-right:2px}
.mv.is-branch::after{content:"\2442";margin-left:4px;color:var(--accent-ink)} /* fork marker where variations start */
```
Current chip auto-scrolls into view (`scrollIntoView({block:"nearest",inline:"nearest"})`, `behavior:auto` under reduced motion).

**Feedback states** (opaque washes; each = icon + word + border style; text 17px reading)
```css
.fb{display:grid;grid-template-columns:24px 1fr;gap:var(--s-3);padding:var(--s-4) var(--s-5);border-radius:var(--r-md);border:2px solid currentColor;font:400 17px/1.5 var(--font-read)}
.fb-title{font:600 var(--t-ui)/1.3 var(--font-ui)}
.fb-ok{background:var(--ok-wash);color:var(--ok);border-style:solid}      /* icon check,  title "Correct" */
.fb-bad{background:var(--bad-wash);color:var(--bad);border-style:double;border-width:4px} /* icon cross, "Not quite" */
.fb-hint{background:var(--hint-wash);color:var(--hint);border-style:dashed} /* icon bulb,  "Hint" */
.fb-info{background:var(--info-wash);color:var(--info);border-width:1px;border-color:var(--edge-ui)} /* icon i, none */
.fb :is(.fb-title,.fb-body){color:var(--ink)} .fb .icon{color:currentColor}
```
On the board: correct square = check badge in the corner (14px circle, white check on `--ok`), wrong = x badge on `--bad`, plus the same wash; badges are glyphs so colour is redundant. Live region `role=status` for ok/info/hint, `role=alert` for bad.

**Toast / inline banner**
```css
.toast{position:fixed;z-index:80;left:50%;bottom:calc(90px + env(safe-area-inset-bottom));transform:translateX(-50%);max-width:min(92vw,420px);display:flex;align-items:center;gap:var(--s-3);
  padding:10px 8px 10px 20px;background:var(--glass-bg-strong);-webkit-backdrop-filter:var(--glass-filter-strong);backdrop-filter:var(--glass-filter-strong);
  border-radius:var(--r-pill);box-shadow:var(--edge-glass),var(--e3);color:var(--ink);font:500 var(--t-ui)/1.3 var(--font-ui);animation:toast-in var(--dur-3) var(--ease-sheet) both}
@keyframes toast-in{from{opacity:0;transform:translate(-50%,12px)}}
.banner{display:flex;gap:var(--s-3);align-items:center;padding:var(--s-3) var(--s-4);background:var(--info-wash);border-radius:var(--r-md);box-shadow:inset 0 0 0 1px var(--edge-ui)} /* inline, opaque, in flow */
```
Toast: `role=status`, 5s auto-dismiss paused on hover/focus, always has a close button; used for "Saved", "Line copied" only. Errors and answer feedback are never toasts.

## 4. Page compositions
`[*]` = the one primary action. Header = glass nav pill (desktop) / tab bar (mobile). Every page is one `.sheet-page`. Breadcrumb = a single quiet "< Back" link (parent name), not a trail.

**Home** - purpose: start learning.
```
 ( Quiet Gambit  [Library][Openings][Lessons][Coach]  (search) )   <- glass
 +-- sheet ----------------------------------------------------+
 | Display: "Learn chess openings, one clear line at a time."   |
 | lede (1 sentence)                  +-------------+           |
 | [* Continue: <lesson name> ]       |  puzzle     |  stage    |
 | (or [* Start: Your first lesson])  |  board      |           |
 | quiet: Browse the Library          +-------------+           |
 | ---- Two doors (cards) ---------------------------------     |
 | [ Play as White ]   [ Play as Black ]                        |
 +--------------------------------------------------------------+
```
Hero board = same interactive puzzle, one prompt line. Below: two side cards only; Gambits/Explorer/Paths reached from Library and Openings.

**Library index** - purpose: find anything.
```
 +-- sheet --------------------------------------------------+
 | H1 Library                                                 |
 | [ (o) Search openings, gambits, lessons...        (x) ]    |  <- [*] search field, autofocus on desktop
 | (White)(Black)(Gambits)(Lessons)   <- chip filters, 1 row, scrolls horizontally on mobile
 | "42 results"                         [Filters v] (sheet)   |
 | [card][card][card]  or result rows (name, moves, 1 meta)   |
 +------------------------------------------------------------+
```
Secondary filters (level, time, opening) live behind `Filters` (inline on desktop, bottom sheet on mobile) - no counts dashboard, no "Up next" strip.

**Openings area** - purpose: choose a family. Grouped by side, then first move.
```
 < Library        H1 Openings
 [ White | Black ]                       <- segmented [*] choose side
 Black: [ vs 1.e4 | vs 1.d4 | vs flank ] <- second segmented, only for Black
 -- 1.e4 e5 ----------------------------   <- h2 = first-move group, moves in Newsreader
 [family card][family card][family card]
 -- 1.d4 d5 ----------------------------
 [family card]...
```
Family card: name, first moves, "N lines". Click = family page. No tags row, no progress pips here.

**Opening family page** - purpose: pick a branch and see it.
```
 < Openings         H1 Italian Game   1.e4 e5 2.Nf3 Nc6 3.Bc4
 +-- branch tree (left, 60%) ----+  +-- stage (right, sticky) --+
 | v Giuoco Piano     3...Bc5    |  |   board, shows selected   |
 |    > Main line   4.c3         |  |   branch position          |
 |    > Evans Gambit 4.b4        |  |  [* Train this line ]      |
 | v Two Knights     3...Nf6     |  |  quiet: Open in Explorer   |
 +-------------------------------+  +----------------------------+
```
Tree rows: 48px, hover shows the position on the stage, click selects, Enter/double-click on mobile = go to trainer. Mobile: stage first (static, 300px), tree below, `Train this line` becomes the controller bar button.

**Trainer screen** (line/variation view; `body[data-focus]`)
Desktop >= 901px:
```
 ( < Italian Game / Evans Gambit         [Line v] )   <- glass nav, links collapsed to Back + title
 +-- sheet -----------------------------------------------------+
 | +---- stage (sticky) ----+  | Evans Gambit   (1 sentence)     |
 | |        board           |  | Variation: (Main)(Compact)(Trap)|  <- segmented
 | |                        |  | 1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 ...|  <- .mv chips
 | +------------------------+  | [fb info: what this move does]  |
 |  (|<) (<) [* Next move >] (>|)  <- controller, under board     |
 +--------------------------------------------------------------+
```
Primary: `Next move` (filled, 160px, also bound to Right arrow; Left = back; Home/End). Variation selection = segmented on desktop; if >4 variations, a `.chip-f` row that wraps.
Mobile <= 900px:
```
 ( <  Evans Gambit            ( Moves ) )   <- glass bar, Moves = secondary button
 [ stage: board full width ]
 move note (fb-info, <= 3 lines)
 =====================================
 ( (|<) (<)   [* Next >]   (>|) )          <- glass controller bar, fixed, replaces tab bar
 ( Moves sheet, closed by default: move chips + variation segmented + Branches list )
```
Sheet height 46svh so the board remains visible and tappable above; selecting a chip jumps the board and keeps the sheet open; close with button, Esc or drag handle tap.

**Lesson screen** - purpose: do one step.
```
 ( < Lesson title                    step 3 of 7 )        <- glass nav, progress as text + 7 segments
 +-- sheet ---------------------------------------------+
 | +-- stage --+   Step title (h2)                       |
 | |  board    |   prompt (Newsreader 19)                |
 | +-----------+   [fb: ok|bad|hint|info]                |
 |                 [Hint] quiet      [* Continue >]       |
 +-------------------------------------------------------+
```
Primary is `Continue` (disabled until the step is solved; label changes to `Check` on questions). Step track becomes a 7-dot text-labelled progress bar in the nav (accessible name "Step 3 of 7"), not 7 buttons; move back with `Back`.

**Coach / progress** - purpose: know what to do next.
```
 +-- sheet ---------------------------------------------+
 | H1 Your plan                                          |
 | card (large, accent-wash): "Today: <lesson>"  [* Start]|
 | h2 This week  -> list of 3 rows (lesson, 10 min, state)|
 | h2 Your path  -> one path card with 7-square progress  |
 | quiet: Change your goals (opens coach form sheet)      |
 +-------------------------------------------------------+
```
Coach form (goals/level) is a modal sheet, not a page of fieldsets. Progress tables collapse into `Show all progress` disclosure.

## 5. Remove or simplify
- **"Up next" strip** (`.next-strip`) on every browse page: delete. One primary CTA per screen replaces it; continue-learning lives on Home and Coach only.
- **Stat dashboards:** `.lib-counts`, `.coach-stats` (4 tiles), `.stat-card`, `.stat-big`, progress chip in header. Show at most one text line ("12 of 80 lessons done").
- **Header nav 7 items -> 4** (Library, Openings, Lessons, Coach). Gambits, Explorer and Paths are filters/areas inside Library and Openings; routes stay. Delete `.progress-chip`, `.nav-progress`, hamburger/Menu button.
- **Breadcrumb trails -> single "< Back" link.** Drop repeated eyebrow labels ("Sample line", "Branches from", `.step-kind`, `.hero-prompt h4`, `.objective-label` pill, `.character-legend`).
- **Tag zoo:** `tag-established/playable/speculative/pitfall/trap/mistake/risk`, dashed borders, left-border accent bars (`.fam-card::before`, `.branch-block`, `.ex-where`, `.coach-band`). One quiet status word per row; warnings use `.fb-bad`/`.banner`.
- **Home:** drop `steps-3` "How it works", 4 entry tiles -> 2 side cards, `hero-note`, `.next-card` dark block, `track-index` long list.
- **Pips:** keep the board-square pip motif only in path cards and the lesson progress bar; remove from every list row and table.
- **Fonts below 15px:** 12-14px `.small`, `.tag`, `.count`, `.chip-kind`, `.tree-count`, `.result-type` uppercase micro-labels -> 15px or delete. Remove `text-transform:uppercase` micro-labels.
- **Motion:** remove `settle` rotate, hover underline animations; keep only transitions listed in 3.
- **Borders:** replace 1px rule borders around every list/panel with spacing; keep hairlines only on cards and inputs. Replace `.panel`, `.complete-card`, `.pitfall`, `.mline`, `.line-card`, `.fam-card`, `.path-card`, `.coach-path`, `.rep-card`, `.browse-col` with the single `.card`.
- **Duplicate buttons:** `btn-accent` and `btn-primary` merge into `.btn-primary`; the dark-ink filled button disappears.

## 6. Implementation order
1. `tokens.css` + backdrop + `.sheet-page`; wrap `main` content (`#main > .sheet-page`).
2. Nav pill + tab bar (index.html markup, `updateChrome`, `data-focus` on trainer and lesson routes).
3. Buttons, segmented, chips, search, card; swap class names in `views-*.js`.
4. Board stage, outside coordinates, move chips, `fb-*` states.
5. Sheet component (trainer mobile) + toast; fallbacks block; verify with Chrome devtools "Emulate prefers-reduced-transparency", forced-colors and 200% zoom.
