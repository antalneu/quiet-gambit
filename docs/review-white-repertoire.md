# Review: js/content/white-repertoire.js (White repertoire + white-openings lessons)

Checker: `cscript //nologo tools\check-content.js js\content\foundations.js js\content\white-repertoire.js` gives 0 errors, 0 warnings.
I checked every lesson FEN by hand against its line: pieces, side to move and the halfmove clock all match. The text is ASCII with British spelling throughout.
I also put two sequences through the checker in a scratch file: the Alapin line 2...Nf6 3.e5 Nd5 4.d4 cxd4 5.Nf3 Nc6 6.cxd4 d6 7.Bc4, and the French line 6...c4 7.b4 cxb3 (en passant). Both are legal.

## Must fix (false or broken)

1. **w-alapin-sicilian, responses[1].note**: "4...cxd4 5.Nf3 (or 5.cxd4) Nc6 6.cxd4". After 5.cxd4 the move 6.cxd4 is impossible, so the notation is broken.
   Replace with: "4...cxd4 5.Nf3 Nc6 6.cxd4 (5.cxd4 at once is also good): White has extra space, and Bc4 is a common follow-up."
2. **w-scandinavian, responses[1].note**: "4...Nf6 5.Nf3 a6 6.g3 or 6.Be2: keep developing and look for Nb5 or Bf4". The whole point of 5...a6 is to stop Nb5.
   Replace with: "4...Nf6 5.Nf3 a6 (stopping Nb5) 6.g3 or 6.Be2: keep developing and look for Bf4 or Ne4 to gain more time on the queen."
3. **w-english-symmetrical, transpositions[0]** `{ to: 'w-reti', note: '1.Nf3 c5 2.c4 can reach the same positions.' }`. The w-reti entry is 1.Nf3 d5 2.c4, so the move order in the note never reaches that entry. The link is false.
   Delete this transposition. If the move order is worth keeping, add it to the end of `idea`: " The same positions often arise from 1.Nf3 c5 2.c4."
4. **white-openings-10, step 0 (line) text**: "White's pawns on c4 and d5 point to the queenside". A c4-d5 chain points towards the kingside. The chain that points to the queenside is e4-d5.
   Replace that sentence with: "Pawn chains point the way: White's chain e4-d5 points to the queenside, Black's chain e5-d6 points to the kingside."
5. **white-openings-10, step 2 (read) text**: "White's 10.Re1 keeps e4 defended and gives the bishop the f1 square." The bishop on e2 blocks the e-file, so the rook does not defend e4.
   Replace with: "After 9...Nh5 Black prepares ...f5 and eyes f4. White's 10.Re1 frees f1 for the bishop, so ...Nf4 will not hit it with gain of time, and the rook backs up e4 once the bishop moves. Both sides now push on their own wing; the side that opens lines first usually wins the race."

## Should fix (misleading or unclear)

6. **w-advance-french, line ply 12 (6...c4) note**: "Locks the queenside and stops b4 for the moment." This is not accurate, because b4 is still possible and is met by ...cxb3 en passant (checked).
   Replace with: "Gains queenside space and takes d3 from White's bishop; a b4 push can now be met by ...cxb3 en passant."
   **Ply 13 (7.Nbd2) note**: change to "Covers b3 against ...Na5-b3 and prepares Rb1 with b3 or b4 to challenge c4; the centre stays closed."
7. **w-advance-french, line ply 10 (Qb6) note**: "Three black pieces now hit d4." One of the three is the c5 pawn. Replace with: "Queen, knight and c5 pawn all hit d4."
8. **w-alapin-sicilian, idea**: "(a d-pawn with no pawns on the c- or e-files)". This is false as written, because Black's e6 pawn is on the e-file. Replace with "(a d-pawn with no pawns of its own colour on the c- or e-files)".
9. **white-openings-4, puzzle wrong['b1d2']**: "it blocks the c1-h6 diagonal". The bishop is already on e3, so the real cost is that the knight cuts the queen's defence of d4.
   Replace with: "Nbd2 develops, but it attacks nothing and blocks the queen's defence of d4. From c3 the knight hits the queen."
10. **white-openings-5, step 0 (read) text**: "If White takes on e5 and Black recaptures, a pawn move can attack the bishop and the knight together." This gives away the 3-ply answer.
    Replace with: "After 3.Nc3, Black's 3...Bc5 looks natural, but the e5 pawn is defended only by the c6 knight. A fork is an attack on two pieces at once. Keep that idea in mind and look at where Black's pieces stand."
11. **white-openings-7, step 0 (read)**: the arrows `[['b2','b4'],['b4','b5']]` are the puzzle answer. The checker does not catch this because the read FEN is a different position.
    Replace the arrows with `[['b4','b5']]` or drop them. Keep the highlights on c6 and d5.
12. **white-openings-9, step 0 (line), ply 22 (11...Qd7)**: the line presents the blunder as a normal move. Add the note: "A natural-looking mistake; 11...Nxd4 is the usual move."
    **Puzzle prompt**: "win a piece in three moves". White plays only two moves. Replace with: "White to move: win a piece with a two-move combination."
13. **w-london, transpositions[0].note**: "Both start d4, Nf3 and e3; with the bishop on f4 (London) or on b2 (Zukertort)." This describes a shared set-up, but the two lines never meet as written.
    Replace with: "1.d4 d5 2.Nf3 Nf6 3.Bf4 reaches the London by the Colle move order; 3.e3 with b3 and Bb2 gives the Zukertort instead."
14. **white-openings-8, step 0 (line) text**: "nothing guards b2 except the queen's indirect help". In fact nothing guards b2 at all.
    Replace with: "Once the dark-squared bishop has gone to f4, nothing guards b2. Black's best-known plan against the London is ...c5, ...Nc6 and ...Qb6, hitting b2 and adding pressure to d4."

## Optional

15. **w-open-sicilian, transpositions[0]**: Alapin 2.c3 is an alternative to the Open Sicilian, not a transposition. The same applies to w-english-four-knights to w-english-symmetrical, and w-tarrasch-french to w-advance-french, which only share a structure.
    Drop these, or reword them as "shares the X structure", because the field is meant for lines that actually meet.
16. **w-colle-zukertort, line ply 15 (Nbd2) note**: "keeps f3 for the other knight". The f3 knight is already there. Change to: "Supports e4 and can replace the f3 knight once it jumps to e5."
    **idea**: "Black fights for e4 with ...c5 and ...Nc6" would read better as "Black fights for e4 with ...c5, ...b6 and ...Bb7".
17. **w-nimzo-rubinstein, line ply 18 (9...dxc4) note**: "to win time against the bishop" is vague. Change to: "Black releases the centre; after 10.Bxc4 Qc7 Black prepares ...e5."
18. **w-scandinavian, line ply 15 (Qe2) note**: "puts the queen behind a possible d5 break". The queen is on the e-file. Change to: "Prepares O-O-O; the queen also eyes e6 for a later d4-d5 break."
19. **w-london, responses[0].note**: add Black's main reply. Append: "5...c4 6.Qc2 gains queenside space for Black; White answers with Nd2 and e4."
20. **w-kid-classical, responses[2].note**: "Maroczy-type grip" is not defined. Add "(pawns on c4 and e4 controlling d5)".
21. **white-openings-4, step 1 (line)**: the text "the c3 square is free again" and the last note "and c3 is free" both point to the answer, as does the hint. Consider cutting one of them.
22. **w-ruy-lopez-exchange** has no `lessons` field. Optionally link `white-openings-9` as a family lesson, or leave it.
23. **Coverage**: the 28 entries are a sensible mix: open games (Italian, Scotch, Four Knights, Vienna, Open Sicilian), positional mainstays (Ruy, QGD Exchange, Catalan, Nimzo e3) and solid systems (London, Colle, KIA, Alapin). No two entries duplicate each other.
    There is no White answer yet to the Petroff, the Philidor, the Alekhine, the Dutch, or Benoni/Benko set-ups. These would be natural additions, or a one-line pointer could be added in the relevant `responses`.

## Checked and fine (no change)

- **Lines written from memory**: all of the following are real and mainstream.
  - Tarrasch trap (lesson 9): 9.c3 Be7 10.Re1 O-O 11.Nd4 Qd7 12.Nxe6 fxe6 13.Rxe4. 13...dxe4 14.Qxd7 wins, and 12...Qxe6 13.Rxe4 also wins because d5 is pinned by Bb3. No other first move works: 12.Rxe4? dxe4 13.Nxe6 Qxd1 14.Bxd1 leaves White an exchange down.
  - Trompowsky 3.Bf4 c5 4.f3 Qa5+ 5.c3 Nf6, with both 6.d5 (Qb6, Bc1) and 6.Nd2 (cxd4 Nb3); also 2...e6 3.e4 h6 4.Bxf6 Qxf6 5.Nc3 d6 6.Qd2, with O-O-O next.
  - Advance French 6.a3 c4 7.Nbd2.
  - Vienna 5...Nxc3 6.bxc3 Bd6 7.Nf3 O-O 8.O-O. This is a sound move order (7.Ne2 and 7.Rb1 are also common).
  - Pirc 6...Bg4 7.Be3 Nc6 8.Qd2 e5 9.d5 Ne7.
  - Exchange Ruy 5...Qd6 6.Na3 (heading for c4), and 5...Bg4 6.h3 h5 7.d3.
- **Other sample lines**: Italian a6/Ba7 with Nbd2, Closed Ruy to 9.h3, Scotch Mieses 9.b3, Four Knights 10.Bg5 line, Najdorf English Attack, Alapin 9.Be3, Tarrasch 3...Nf6 and 3...c5 lines, Caro 6.h4 h6 7.Nf3 Nd7 8.h5 Bh7 9.Bd3, Scandinavian 8.Qe2, QGA 9.Rd1, QGD Exchange with Qc2, Slav 9.Qe2, Catalan 9.Qc2 Bb7, Grunfeld 7.Bc4 c5 8.Ne2, KID Bayonet 9...Nh5 10.Re1, Nimzo 10.Bxc4 Qc7, English reversed Dragon 9.a3, Symmetrical 9.Qxd4 d6, double-fianchetto Reti, KIA 9.e5 Nd7, and Bird with From's Gambit 4.Nf3.
- **Puzzles 1, 2, 3, 6, 7, 8, 10 and 11**: the intended move is unique under each prompt.
  - Lesson 3: only h4 creates the h5 threat. With h7 still occupied, Ng3 covering f5, e4 and h5, and c2/Bf1/Qd1 covering d3, the bishop really would be trapped.
  - Lessons 6, 8 and 11: c4, Qb3 and a3 are the only moves that fit their narrowed prompts.
  - Lessons 7 and 10: b4 is the only pawn advance that fits.
  - Lesson 1: every Black reply to 6.Nxe5 leaves White at least a pawn up, and 8.Nd5 is mate.
  - Lesson 2: 4.Nc3?? Qh4+ 5.g3 Qxg3+ 6.hxg3 Bxg3 is mate.
  - Lesson 5: the auto-reply 4...Nxe5 is natural, and 4...Bxf2+ is covered in the explanation.
