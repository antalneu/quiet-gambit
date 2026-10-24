# Review: js/content/black-vs-e4.js (24 entries, 9 lessons)

Checker: `0 error(s), 1 warning(s)` (cross-file `bg-two-knights`, which exists in black-gambits.js). Every replacement move below was run through `tools/check-content.js` in a scratch file and is legal, with correct SAN. The file is ASCII-clean with no US spellings. Overall the theory is sound and mainstream; there are three factual slips and a few misleading notes.

## Author's doubts: verdicts
- Winawer 7.Qg4 O-O 8.Bd3 Nbc6 9.Qh5 Ng6: genuine main theory of 7...O-O. Keep it; the `uncertain` note is fair.
- Caro-Kann Advance 5...c5 6.Be3 Nd7 7.O-O Ne7: a recognised Short System set-up (6...cxd4 and 6...Qb6 are the other main tries). It is fine; `uncertain` can stay or go.
- Accelerated Dragon 8...a5 against Bc4/Bb3: established main line (it threatens ...a4). See S1.
- Scheveningen vs the Keres (6.g4 h6 7.h4 Nc6 8.Rg1, then ...h5 or ...d5): correct.
- Lesson 8 line 7.Nb3 e6 8.O-O Be7 9.Be3 Qc7: a standard book line (10.f4 a6 11.Bd3 b5 follows). Correct.
- Grand Prix and Taimanov 6.Be2 notes: both are incomplete. See S3 and S4.
- Lesson 7 (Noah's Ark): correct. 8.d4 before c3 really does leave the b3 bishop without c2, and 10.Qxd4? c5 is the trap. Because Black's knight is on f6, 11.Qd5 is impossible (Nxd5), so the explanation is right to skip the usual 11.Qd5 Be6 12.Qc6+ version. I also checked 11.Qc3 c4 12.e5: 12...dxe5 13.Rxe5 cxb3 still wins the bishop.

## Must fix
**M1. black-vs-e4-1, step 2 (puzzle) explanation.** "6.d4 dxe5 7.dxe5 leaves material level" is false. After 7.dxe5 White is a pawn up until Black plays ...Nc6 and ...Qxe5. Replace with:
`"4...Qe7! blocks the e-file, so knight moves no longer give a discovered check. After 5.Qxe4 d6 the e5 knight is pinned and won back: 6.d4 dxe5 7.dxe5 Nc6, and the e5 pawn usually falls too (8.Nc3 Qxe5), though White keeps a lead in development and a small edge. Every other move loses material."`

**M2. b-french-rubinstein, responses[1] (6.Bg5) note.** "6...Be7 ... 7.Nxf6+ Bxf6: the bishop pair..." is false: both sides still have both bishops. Replace with:
`"6...h6 (if 7.Bxf6 Nxf6, Black has the bishop pair) or the solid 6...Be7 7.Nxf6+ Bxf6. Either way Black castles and frees the game with ...c5."`

**M3. black-vs-e4-6.** In step 1 the explanation says "the g7 bishop and the half-open b-file aim at White's king", but after 12...e5 the g7 bishop is blocked by its own pawn. The line also never mentions that 13.Bc5 attacks the f8 rook and that 13...Be6 offers the exchange.
- Step 1 explanation:
  `"9...d5! challenges e4 and opens lines. After 10.exd5 Nxd5 11.Nxc6 bxc6 12.Bd4 e5 13.Bc5 Be6 Black's pieces are active and the half-open b-file points at White's king. 13...Be6 even leaves the f8 rook attacked: 14.Bxf8 Bxf8 gives Black strong play. A central break is the classic answer to a flank attack."`
- Step 2, note on `c8e6`:
  `'Ignores the attack on the f8 rook: after 14.Bxf8 Bxf8 Black has rich compensation, so White often prefers 14.Ne4.'`

## Should fix
**S1. b-sicilian-accelerated-dragon, responses[1] note.** "Black chooses ...d6, heading for Dragon-type play" is misleading: 8...d6 9.f3 lands in the Yugoslav, which the summary says this line sidesteps. Replace the note with:
`'7...O-O 8.Bb3 (stopping the ...Nxe4 and ...d5 fork trick), and now 8...a5, threatening ...a4, is the independent main line; 8...d6 9.f3 transposes to a Yugoslav Dragon.'`
`uncertain` -> `'8...a5 is established theory, but its details keep changing; check a current source for the sharp 9.f3 d5 lines.'`

**S2. black-vs-e4-9, step 0 text.** "White's main plan is 9.Bxf6" is wrong: 9.Nd5 is at least as main (the entry itself gives both). Replace with:
`"In the Sveshnikov, Black has given up the d5 square, and White's knight on a3 is out of play. White's two main plans are 9.Nd5 and 9.Bxf6; here we look at 9.Bxf6, which removes a defender of d5 before Nd5. Black recaptures with the g-pawn, accepting doubled f-pawns but keeping the bishop pair and opening the g-file."`

**S3. b-sicilian-vs-closed, responses[1] (Grand Prix) note.** It misses White's main try against 5...e6, the pawn sacrifice 6.f5. Replace with:
`'After 5.Bc4, 5...e6 blunts the bishop, then ...Nge7 and ...d5. Watch for the pawn sacrifice 6.f5: 6...Nge7 7.fxe6 dxe6 is a sound reply. After 5.Bb5, 5...Nd4 is good.'`

**S4. b-sicilian-taimanov, responses[1] (6.Be2) note.** After 8...Bb4 White answers 9.Na4, and the note does not say what Black does next. Replace with:
`'8...Bb4 9.Na4 Be7 is the main line: Black castles and later chooses between ...d6 and ...b5. 8.Kh1 is the other main move for White.'`

**S5. black-vs-e4-2, step 2 prompt.** "break up White's pawn centre" also fits 8...Nxe4 (after 9.Nxe4 d5 the fork regains the piece). The prompt should narrow to a pawn move, which the hint already assumes:
`"Black to move: which pawn move breaks up White's centre before it can advance?"`

**S6. Jargon not defined.** The file adds no `glossary`, and these terms are not in any other file's glossary: "lever" (L9), "blockading" (L2), "backward" (L6), "bishop pair" (L9 and many entries), "fianchetto", "doubled pawns", "pawn break", "exchange sacrifice". Add:
```js
glossary: [
  { term: 'Fianchetto', definition: 'Developing a bishop on b2, g2, b7 or g7 after moving the knight pawn one square, so it controls a long diagonal.' },
  { term: 'Bishop pair', definition: 'Having both bishops when the opponent has only one or none; a long-term advantage in open positions.' },
  { term: 'Doubled pawns', definition: 'Two pawns of the same colour on one file, usually after a capture. Often weak, but they can open files.' },
  { term: 'Pawn break', definition: "A pawn move that challenges the opponent's pawns to open lines, such as ...d5 or ...f5." },
  { term: 'Lever', definition: 'A pawn that attacks an enemy pawn so that one can capture the other, opening lines; the tool of a pawn break.' },
  { term: 'Backward pawn', definition: 'A pawn that has fallen behind its neighbours and cannot safely advance, so the square in front of it is weak.' },
  { term: 'Blockade', definition: 'Placing a piece, ideally a knight, on the square directly in front of an enemy pawn to stop it.' },
  { term: 'Exchange sacrifice', definition: 'Giving a rook for a bishop or knight in return for positional or attacking compensation.' }
]
```

## Optional
- **black-vs-e4-4, step 3:** the White-to-move puzzle makes sense as "see the trap from White's side". Prompt suggestion: `'Black took on d4 twice. Play White's move to see why that is a mistake.'` Add `wrong['d3e2']`: `'The d1 queen now hits d4, but it is Black to move: 9...Qxd1+ trades queens and Black stays a pawn up.'`
- **black-vs-e4-7, step 1, note on 10.Qxd4:** `'The natural recapture, and a mistake. Playing 8.c3 first avoids the whole problem.'`
- **black-vs-e4-8, step 2:** give 9.Be3 a note: `'Hits the queen on b6.'`
- **b-scandinavian:** the line note on ...c6 ("stops Nb5 or Nd5 tricks") contradicts the 5.Bc4 note, which warns of Bd2 with Nd5. Suggest: `'Gives the queen a retreat to c7 and covers b5 and d5; still watch for Bd2 with Nd5.'`
- **b-sicilian-vs-alapin:** add the common 5.Qxd4: `{ moves: '3.e5 Nd5 4.d4 cxd4 5.Qxd4 e6', name: '5.Qxd4', note: 'Black develops ...Nc6 with tempo on the queen, then ...d6 to hit e5.' }`
- **b-e5-two-knights:** the 4.Ng5 Na5 line is also `bg-two-knights` in black-gambits.js. That is acknowledged, but make sure the two texts agree.
- Labels (difficulty and style) all look sensible. There are no duplicate entries. The transpositions checked out: Najdorf/Scheveningen, Classical to Dragon and Scheveningen, Rubinstein via 3.Nd2, and Two Knights 4.d3 Bc5. No position needs an "illustrative" label: all of them come from real lines.
