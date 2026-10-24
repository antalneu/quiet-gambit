# Review: js/content/black-vs-d4-flank.js (chess judgement and teaching)

Scope: 22 repertoire entries, 18 lessons. The checker reports 0 errors. I also replayed every numbered move sequence in the prose (responses, notes, explanations, wrong-move texts) with the site's move generator, and ran a small material search on the tactical puzzles. Every corrected line below was run through `tools\check-content.js` (0 errors).

## Lines the author quoted from memory: verdicts
- **4.g3 Nd4, 5.Nxe5 Qe7** (English Four Knights): the trap is real, and 6.Nd3?? Nf3# is right. But the explanation's advice is wrong (see M1).
- **8...Ne5 in 4.d4 exd4 5.Nxd4 Bb4 6.Bg5 h6 7.Bh4 Bxc3+ 8.bxc3**: correct, a main line (9.e3 Ng6 10.Bg3 Ne4).
- **7.Be3 Ng4 8.Bg5 f6** (KID Gligoric): correct, followed by 9.Bh4 Nc6 or 9...g5 10.Bg3 Nh6.
- **...a5 in the English fianchetto** (8.Rb1 a5 9.a3 h6 10.b4 axb4 11.axb4 Be6): correct and mainstream.
- **8...d5 in the Symmetrical English** (5.e3 e6 6.Nge2 Nge7 7.d4 cxd4 8.exd4 d5): correct, the standard break.
- **Leningrad Nimzo to 8...Ne4** (4.Bg5 h6 5.Bh4 c5 6.e3 cxd4 7.exd4 g5 8.Bg3 Ne4): it is a legal, plausible sideline, but 6.d5 is the main line. The punishment of 9.Nf3 is correct: 9...Nxc3 10.bxc3 Bxc3+ 11.Nd2/Ke2 Bxa1 12.Qxa1 wins the exchange and a pawn. If White does not recapture, Black stays a piece up. 9...Nxc3 is the clearest win (see O2).
- All other sample lines are real, mainstream theory. The Tartakower, Meran, QGA, Rubinstein Nimzo, QID 4.g3 Ba6, Bogo 8.Rc1, Grunfeld 7.Bc4, Benoni, Leningrad Qe8, London 6...Bf5, Colle, Trompowsky ...g5, Reversed Dragon, KIA and Bird lines all check out.

## Must fix (false statements)

**M1. black-vs-flank-1, step 2 (puzzle) explanation.** Quote: "After 5.Nxe5 Qe7 White must be careful, for example 6.f4 or 6.Nf3." 6.Nf3 runs into 6...Nxf3#: the e2-pawn is pinned, the g-pawn is on g3 and the king has no squares. The search confirms that 6.Nf3, 6.Nd3 and 6.Ng4 all allow mate, and that 6.f4 is the only move that keeps material. Replace the last sentence with:
`After 5.Nxe5 Qe7 White's best is 6.f4, giving the king the f2-square; knight retreats such as 6.Nf3?? or 6.Nd3?? both allow ...Nf3#.`

**M2. black-vs-d4-8, step 1 (puzzle) explanation.** It has two errors:
- "(or 10.Nd2) Bxa1 11.Qxa1" is illegal, because the c1-bishop blocks the queen.
- "leaving Black an exchange and a pawn up" is wrong: 12.Nxd4 cxd4 13.Qxd4 wins the pawn back with a hit on h8. 9.d5 Bxc3+ 10.Bd2 is also a known exchange sacrifice, not a pure blunder.

Replace with (checked through 13...O-O):
`9...Bxc3+ forks king and rook. After 10.Bd2 Bxa1 11.Qxa1 Nd4! the knight escapes and blocks the long diagonal; after 12.Nxd4 cxd4 13.Qxd4 O-O Black is an exchange up, though White gets some play on the dark squares that Black's missing bishop leaves weak. With White's rook already on b1, ...Bxc3+ wins only a pawn; here the a1-rook is a target.`

**M3. black-vs-d4-1, step 2, wrong `c7c6`.** Quote: "7.Nxf6+ gxf6". Black recaptures with the d7-knight. Replace with:
`Attacks the knight, but after 7.Nxf6+ Nxf6 (or 7.Nc3) you are simply a pawn down.`

**M4. black-vs-d4-5, step 0 (read).** Quote: "The knight on c3 is pinned to the king by ...Bb4. A knight landing on e4 attacks it again". The FEN shown has no knight on c3 and no bishop on b4 (it is after 6.Qxc3 Ne4), so the text describes a different board. Replace the text with:
`After 4.Qc2 d5 5.a3 Bxc3+ 6.Qxc3 the knight jumps to e4 with tempo on the queen, landing on the square the Nimzo fights for. The same jump is strong whenever a white knight on c3 is pinned by ...Bb4: a knight on e4 attacks c3 a second time, and if c3 is short of defenders, ...Nxc3 wins material.`

## Should fix (misleading or unclear)

**S1. black-vs-d4-8, step 1, prompt and wrong `c6e5`.** 9...Ne5 is a sound, popular main-line reply (10.Nxe5 Bxe5), so it should not be called a mistake.
- Prompt: `White has just played 9.d5, attacking your knight. Black to move: win material.`
- Wrong `c6e5`: `A sound, popular reply, but it lets the chance to win the exchange with ...Bxc3+ go by.`
- Lesson summary: change "a careless d5" to `an early d5`.

**S2. black-vs-d4-6, step 2 (line), note on 13...Bc6.** Quote: "Unpins the b-file". The b7-bishop is attacked by Rb1, not pinned. Replace with:
`Steps off the b-file, where the rook attacked it, and supports d5.`

**S3. b-slav-main, response `5.e3 b5`.** Quote: "keep the extra pawn for a while with ...b5, ...a6 and ...Bb7". ...a6 and ...Bb7 are not the plan here, and White regains the pawn. Replace the note with (checked):
`If White omits a4, 5...b5 holds the pawn for now; after 6.a4 b4 7.Na2 e6 8.Bxc4 White regains it, but Black has gained queenside space.`

**S4. black-vs-flank-9, step 0 (read).** Quote: "After 4.d4 exd4 5.Nxd4 Bb4 Black has given up the bishop on c3". The moves that actually lead to the FEN are missing. Start the text with (checked):
`After 4.d4 exd4 5.Nxd4 Bb4 6.Bg5 h6 7.Bh4 Bxc3+ 8.bxc3 Black has given up the bishop on c3, as in a Nimzo-Indian.`
The rest of the text can stay. Also, the read step uses the same FEN as the puzzle, and its arrow `['c6','e5']` shows the answer. Change to `arrows: []`, keeping the highlights.

**S5. black-vs-d4-1, step 2 explanation.** Quote: "If White does not take the queen, Black is simply a piece up." White has won a pawn, so replace with `Black is a knight for a pawn up.`

**S6. black-vs-flank-2, step 0 (read).** It uses the same FEN as the puzzle, and the arrow `['e5','e4']` gives the answer away. Use `arrows: [['b4','c3']]` and keep the highlights.

## Optional

**O1. black-vs-d4-5, step 2 explanation.** Quote: "any knight move gives a discovered check". This is not true after 10.Qd2, which blocks the diagonal. Suggested wording:
`If White does not recapture on move 10, the knight retreats (usually with a discovered check from b4) and Black stays a piece up.`

**O2. black-vs-d4-5, step 2.** 9...Qa5, adding a third attacker on c3, is also good, but 10.Nd2 unpins and limits the gain to pawns. A wrong-move entry would stop learners who find it from being left without feedback:
`d8a5: 'Strong pressure, but 10.Nd2 unpins the knight and you win less. Take on c3 at once.'`
Optionally, add to the explanation that the position arises from the 6.e3 sideline (6.d5 is the main line).

**O3. black-vs-d4-9, step 2 (line), note on 9.a4.** Quote: "Stops ...a6 and ...b5". a4 does not stop ...a6. Suggested: `Stops ...b5, so ...a6 no longer gains time on the bishop.`
Also, the prerequisite `black-vs-d4-7` (the KID ...f5 lesson) is a weak link for a Benoni lesson. Consider dropping it.

**O4. b-vs-bird idea.** Quote: "1.f4 weakens e3, e4 and the e1-h4 and a7-g1 diagonals". The f2-pawn never controlled e4. Suggested: `1.f4 weakens e3 and the e1-h4 and a7-g1 diagonals`.

**O5. black-vs-d4-8, step 0.** Quote: "the g7-bishop looks straight through d4". The d4-pawn blocks the bishop, so write `x-rays through d4`.

**O6. b-qgd-exchange, black plan 3.** Quote: "Meet b4-b5 with a well-timed exchange so that White also gets weaknesses". This is vague. Suggested: `Meet b4-b5 with ...cxb5 or by letting White take on c6, so that White's queenside pawns also become targets.`

**O7. Naming.** In b-benoni, change the response name "Taimanov attack" to `Taimanov Attack`, to match the capitalisation used elsewhere.

**O8. Level.** black-vs-flank-9 is a single, clearly narrowed knight move. `Intermediate` fits better than `Advanced`.

## Checked and fine
- **Narrowed prompts that do pin down one move:** d4-2 (Bf5 and Bg4 both accepted), d4-4 Ne4, d4-6 c5, d4-7 f5, flank-2 e4, flank-4 d4, flank-5 d5, flank-7 c6, flank-8 a5, flank-9 Ne5.
- **Mate and forced puzzles:** d4-1 Elephant Trap (7.Bxd8 Bb4+ 8.Qd2 is forced), d4-3 Qxb2 (7.Qxf5?? Qxb2), flank-1 Nf3# (the only mate) and flank-6 dxc3 are all sound. In flank-3, both Qxd1 and Nxe4 win a pawn, and both are accepted.
- **Transpositions:** all correct.
- **Duplicates:** none.
- **Spelling and characters:** British spelling and ASCII throughout.
- **Labels:** difficulty and style labels are sensible.
