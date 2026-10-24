# Content schema (v2) — The Quiet Gambit library

All content is plain data in classic scripts under `js/content/`. Each file appends ONE part:

```js
/* <what this file holds> */
window.QG_PARTS = (window.QG_PARTS || []).concat([{
  source: 'white-repertoire',   // your file's short name
  repertoire: [ /* opening entries */ ],
  gambits: [ /* gambit entries */ ],
  lessons: [ /* lessons */ ],
  glossary: [ { term: 'Fianchetto', definition: '...' } ]   // optional extra terms
}]);
```

Rules for every file:
- **ES3-safe data only**: no trailing commas (in arrays or objects), no `let`/`const`/arrow functions/template strings, no functions at all.
- **ASCII only**: write `...` not `…`, `-` not `–`, `'` not `’`. Double-quote strings that contain apostrophes.
- British spelling (centre, defence, recognise).
- Run the checker until it reports 0 errors: `cscript //nologo tools\check-content.js js\content\<your-file>.js`
  (it uses the site's own move generator; references to ids owned by other files are warnings, that's fine).

## Moves and positions
- `fen`: full 6-field FEN, or `'start'`. Side to move must be right; castling rights only if king/rook unmoved; the side not to move must not be in check.
- `uci`: from+to (+promotion letter): `e2e4`, `e1g1` (castles), `e7e8q`.
- `san`: standard algebraic, no move numbers: `Nf3`, `exd5`, `O-O`, `Qxf7#`, `Nbd2`. Must match exactly (checks `+`, mate `#`, disambiguation) — the checker tells you the right string.
- `moves` strings (for openings/gambits): `'1.e4 c5 2.Nf3 d6 3.d4'` with move numbers, Black continuing with `3...Nf6` style if a string starts on Black's move. Must equal the SAN of `defining`.

## Repertoire entry (`repertoire: [...]`)
```js
{
  id: 'w-italian-giuoco',            // 'w-' White entries, 'b-' Black entries; lowercase-hyphen slug
  side: 'white',                     // 'white' | 'black'  (whose repertoire this is)
  group: 'e4',                       // white: 'e4' | 'd4' | 'flank'   black: 'vs-e4' | 'vs-d4' | 'vs-flank'
  family: 'Italian Game',            // family name shared by sibling entries (e.g. several 'Sicilian Defence' entries)
  name: 'Italian Game: Giuoco Piano',// distinct display name
  eco: 'C50',                        // optional; family-level code is fine
  defining: ['e2e4','e7e5','g1f3','b8c6','f1c4','f8c5'],   // UCI from the start position that DEFINE this line (used to build the opening tree)
  moves: '1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5',
  difficulty: 'Beginner',            // 'Beginner' | 'Intermediate' | 'Advanced'
  style: 'Solid',                    // 'Solid' | 'Attacking' | 'Positional' | 'Sharp' | 'Flexible'
  summary: '<= 25 words: what it is and why choose it',
  idea: '<= 70 words: the strategic idea of the line',
  plans: { white: ['...', '...'], black: ['...', '...'] },      // 2-3 each, both sides always
  responses: [                                                  // 2-4 common replies BY THE OPPONENT, with what to do
    { moves: '4.c3', name: 'Main line', note: '<= 35 words' }
  ],
  line: { fen: 'start', moves: [ { uci: 'e2e4', san: 'e4', note: 'optional <= 25 words' } ] },
                                     // sample line: 10-18 plies from the start, MUST begin with the defining moves,
                                     // notes on at least 4 key moves explaining WHY
  transpositions: [ { to: 'w-other-id', note: 'how/when the lines meet' } ],  // optional, ids in your own file
  lessons: ['white-openings-3'],     // lesson ids that teach this line (your own file or foundation lessons)
  uncertain: 'optional: anything you are not sure is established theory'
}
```
Count each line once. Sublines of a family are separate entries only when they are genuinely different lines (different defining moves AND different plans).

## Gambit entry (`gambits: [...]`)
Same fields as a repertoire entry except `group`/`style`/`responses` are optional, plus:
```js
{
  id: 'wg-evans',                    // 'wg-' White gambits, 'bg-' Black gambits
  side: 'white',
  name: 'Evans Gambit',
  defining: [...], moves: '1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4',
  character: 'Playable',             // 'Established' (sound, played at high level) | 'Playable' (respectable, holds up at club/master level)
                                     // | 'Speculative' (objectively dubious; a practical surprise weapon)
  characterNote: '<= 35 words: why this label (be honest and conservative)',
  difficulty: 'Intermediate',
  offer: 'what is sacrificed and where',
  compensation: 'what you get for it in practice',
  plans: { white: [...], black: [...] },
  risks: ['...', '...'],             // 2-4, for the gambiteer
  accepted: 'optional: main way to accept and what follows',
  declined: 'optional: sensible ways to decline',
  line: {...}, lessons: [...], base: 'optional repertoire id it arises from (only if in your file)'
}
```

## Lesson (`lessons: [...]`)
```js
{
  id: 'white-openings-1',            // <category>-<n>. NOTE existing ids: tactics-1..3 and endgames-1..3 are taken; start those at 4.
  category: 'white-openings',        // see the 12 ids below
  side: 'white',                     // 'white' | 'black' | 'both'  (whose point of view the lesson trains)
  title: 'Sentence case, short',
  level: 'Beginner',                 // 'Beginner' | 'Intermediate' | 'Advanced'
  minutes: 6,                        // 4-10 realistic minutes
  objective: 'One sentence: what the learner can do afterwards.',
  summary: 'One sentence shown in lists.',
  prerequisites: ['openings-1'],     // optional lesson ids (own file or foundation lessons)
  related: { openings: ['w-italian-giuoco'], gambits: [], lessons: [] },   // optional; ids in your own file or foundations
  steps: [                           // 2-4 steps; at least ONE puzzle (the exercise)
    { type: 'read', title: '...', fen: '...', text: '<= 80 words', arrows: [['e2','e4']], highlights: ['d5'] },
    { type: 'line', title: '...', fen: 'start', text: 'optional', moves: [ { uci, san, note } ] },
    { type: 'puzzle', title: '...', fen: '...', prompt: '<= 20 words, says whose move',
      solution: ['f3e5'],            // odd length: learner, reply, learner... (max 5 plies; prefer 1 or 3)
      accept: [['f3e5'], ['f3g5']],  // optional: ALL equally correct full sequences (include solution)
      hint: '...', explanation: '<= 70 words: the answer and WHY',
      wrong: { 'd1h5': 'why this tempting legal move fails' } }   // 1-3 tempting wrong moves
  ]
}
```
- The puzzle answer must be **clearly best** in that position. If two moves are equally good, list both in `accept`. Avoid "find the positional move" puzzles with several reasonable answers unless the prompt narrows it (e.g. "Which pawn break opens the c-file?").
- Opponent replies inside a multi-ply solution must be forced or obviously natural; say in the explanation if there are alternatives.
- Label artificial or illustrative positions as such in the text.
- Define jargon on first use (or rely on a glossary term you add).

## The 12 categories
| id | title | side |
|---|---|---|
| `white-openings` | White Openings | white |
| `black-vs-e4` | Black Openings vs 1.e4 | black |
| `black-vs-d4` | Black Openings vs 1.d4 | black |
| `black-vs-flank` | Black Openings vs flank openings | black |
| `white-gambits` | White Gambits | white |
| `black-gambits` | Black Gambits | black |
| `tactics` | Tactics and Calculation | both |
| `strategy` | Middlegame Strategy and Pawn Structures | both |
| `attack` | Attacking Play | both |
| `defence` | Defence and Prophylaxis | both |
| `endgames` | Endgames | both |
| `practical` | Practical Chess and Tournament Skills | both |

## Existing foundation lessons (in `js/content/foundations.js`, do not duplicate)
`openings-1` Take the centre (white-openings) · `openings-2` Caro-Kann basics (black-vs-e4) · `gambits-1` The Queen's Gambit (white-gambits) · `gambits-2` The King's Gambit (white-gambits) · `tactics-1` The fork · `tactics-2` Pins and skewers · `tactics-3` Back-rank mate · `middlegames-1` Outposts and bad bishops (strategy) · `middlegames-2` Open lines to the king (attack) · `endgames-1` King and pawn basics (opposition, square of the pawn) · `endgames-2` Rooks behind passed pawns, Lucena · `endgames-3` Mate with king and queen.

---

# Schema v3 additions: families, variations and move lines

The library now has three levels. Keep them distinct and never pad a count:

| Level | What it is | Where it lives | Example |
|---|---|---|---|
| **Opening family** | A named opening as one side meets it | `families: [...]` in a part | White's *Sicilian Defence* (1.e4 c5) |
| **Variation** | A named, genuinely different branch of a family (its own defining moves AND its own plans) | the existing `repertoire: [...]` entries | *Alapin Variation* (2.c3) |
| **Move line** | A concrete continuation inside a variation, usually the opponent's main choices | `lines: [...]` inside a variation or gambit | *2...Nf6 3.e5 Nd5 4.d4* |

A transposition or a trivial move-order difference is NOT a new variation: record it in `transpositions` or as a move line.

## Family (`families: [...]`, new array in a part)
```js
{
  id: 'wf-sicilian',                 // 'wf-' White families, 'bf-' Black families (see the id list in the brief)
  side: 'white',
  group: 'e4',                       // same groups as repertoire entries
  name: 'Sicilian Defence',          // canonical name; MUST equal the `family` string of its variations
  aliases: ['Anti-Sicilian systems'],// other names learners search for (0-5)
  eco: 'B20-B99',                    // optional
  root: ['e2e4', 'c7c5'],            // UCI from the start: where the family begins. EVERY variation's defining moves start with these.
  summary: '<= 30 words, shown on cards',
  overview: '<= 90 words: what defines the family, its typical structures, and what both sides want',
  choosing: '<= 60 words: how a learner should choose between its variations (by style, time, level)',
  terms: ['Open Sicilian', 'Maroczy Bind']   // 0-8 search keywords: structures, plans, nicknames
}
```

## New and changed fields on a variation (`repertoire` entry)
```js
{
  familyId: 'wf-sicilian',           // REQUIRED: id of its family (same side)
  family: 'Sicilian Defence',        // keep: must equal the family's name
  short: 'Alapin Variation',         // REQUIRED: the name within the family (cards inside a family page show this)
  aliases: ['2.c3 Sicilian', 'c3 Sicilian'],   // optional 0-5 alternative names
  parent: 'w-open-sicilian',         // optional: id of a variation in the SAME family that this one branches from.
                                     // Its defining moves must be a proper prefix of yours. Omit to branch from the family root.
  minutes: 12,                       // REQUIRED: realistic study time for the variation page, 5-30
  pitfalls: [                        // REQUIRED: 2-4, clearly labelled
    { kind: 'Trap',                  // 'Trap' (a concrete trick) | 'Mistake' (a common wrong plan or move) | 'Risk' (what can go wrong strategically)
      side: 'black',                 // who falls into it / must beware: 'white' | 'black'
      title: '<= 8 words',
      text: '<= 50 words: what happens and how to avoid or exploit it',
      uci: ['e2e4', 'c7c5', '...']   // optional: full moves FROM THE START that show it; must be legal
    }
  ],
  lines: [                           // REQUIRED: 2-4 move lines for a variation (gambits: see below)
    { id: 'main',                    // slug unique within this entry
      name: '2...Nf6 3.e5 Nd5',      // the opponent's choice, or a short descriptive name
      kind: 'Main line',             // 'Main line' | 'Alternative' | 'Sideline' | 'Sharp try'
      summary: '<= 35 words: what this line is about and what to remember',
      moves: [ { uci: 'g8f6', san: 'Nf6', note: '...' } ]   // continues FROM THE POSITION AFTER `defining`, 4-14 plies,
                                     // notes on at least 2 moves explaining WHY. Lines must differ from each other at some move.
    }
  ],
  responses: [ { moves, name, note, line: 'main' } ]   // keep; optional `line` points at a move line id that shows it on the board
}
```

## Gambit additions (`gambits` entry)
- `group` is now REQUIRED (white: `e4`/`d4`/`flank`, black: `vs-e4`/`vs-d4`/`vs-flank`) and `style` is REQUIRED.
- `aliases`, `minutes` (5-30) and `pitfalls` (2-4) as above.
- `lines`: 2-4 move lines from the position after `defining`, normally at least one **Accepted** line and one **Declined** line
  (`kind`: 'Accepted' | 'Declined' | 'Main line' | 'Alternative' | 'Sideline' | 'Sharp try').
- `familyId`: optional id of the opening family the gambit belongs to or arises from (either side), e.g. the Evans Gambit -> `wf-italian`.
- `relatedOpenings`: optional list of variation ids it is closely connected to (cross-links shown on both pages).

## Path additions (`QG_CORE.paths`)
- `focus`: one of `white-repertoire`, `black-e4`, `black-d4`, `black-flank`, `white-gambits`, `black-gambits`, `tactics`, `strategy`, `endgames`, `practical`.
- `level`: 'Beginner' | 'Intermediate' | 'Advanced' (the level the path starts at).
