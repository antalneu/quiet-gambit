# Review: js/content/black-gambits.js

Scope: 16 gambit entries, 9 lessons, 3 glossary terms. The site checker reports 0 errors. Every replacement move or FEN below was replayed with `js/chess.js`, and a patched copy passes `check-content.js` with 0 errors. Puzzle claims were tested with a small mate/material search built on the site's move generator.

**Character labels:** all 16 are honest. Two Knights 5...Na5 as Established, Blumenfeld and Schliemann as Playable, and Traxler, Englund and Latvian as Speculative are all fair. Sample lines are real theory: Marshall to 12...Bd6, Benko, Budapest Rubinstein line, Schara-Hennig, Schliemann 9...Qxf4, From/Lasker 8...Nc6, Blumenfeld (Tarrasch-Alekhine 1922). Spelling is ASCII and British.

## Must fix (false or broken)

1. **black-gambits-9, steps 1 and 2 (FEN).** Black is a whole knight down. Black has no b8 knight, while White still has Nc3, Nf3 and Bc1, so this is not a Benko position. Put Black's queen's knight on d7 in both steps: `fen: 'rr4k1/3nppbp/3p1np1/q1pP4/4P3/1PN2NP1/P1Q2PKP/R1BR4 b - - 0 18'`. Keep `solution`/`accept`: both captures still work. In this position, 18...Ng4 and 18...Nh5 let White hold with 19.Bd2 or 19.Bb2.
2. **black-gambits-9 step 2, explanation.** "otherwise Black keeps a clean extra pawn" is false. Against 19.Qxe4 (or 19.exd5 / 19.Rxd5), ...Bxc3 only wins back the gambit pawn. After 19.Nxe4 Bxa1, the move 20.Bd2 hits both the queen and the a1 bishop, and Black must find 20...Qxa2. Replace with:
   `"18...Nxe4 (or 18...Nxd5) wins back the gambit pawn and unmasks the g7 bishop. Now c3 is attacked three times, defended only by the queen, and pinned to the a1 rook. If the c3 knight recaptures, ...Bxa1 wins the exchange (after Bd2, hitting queen and bishop, ...Qxa2! keeps it). If anything else recaptures, ...Bxc3 regains the piece: Black has at least won back the gambit pawn, and the bishop dominates."` (Search check: after 19.Qxe4 Bxc3, Black is level or slightly ahead on material, never "a clean pawn up" as a given.)
3. **black-gambits-9 step 2, wrong `a5c3`.** "20.Qb2 blocks the diagonal" is false: 20.Qb2?? Bxb2. Replace with:
   `"18...Qxc3? 19.Qxc3: your f6 knight still blocks the g7 bishop, so nothing recaptures and you have given your queen for a knight."`
4. **black-gambits-9 step 2, wrong `b8b3`.** "19.axb3 Qxa1" is the wrong reply, because White recaptures with the queen. Replace with:
   `"18...Rxb3? 19.Qxb3: the queen recaptures and you have simply given a rook for a pawn."`
5. **black-gambits-8 step 2, explanation.** "Checks such as Rxe8 or Bxf7+" is wrong: 19.Rxe8 is not check, and 19...Qg2 is mate. The search confirms 19.Bxf7+ is the only reply that avoids immediate mate. The FEN also leaves Black a knight down: the d5 knight has disappeared, and White still has Nb1. Recommended fix: restore the knight with `fen: '4rrk1/5ppp/p1pb4/1p1n4/3P2b1/1BP3Pq/PP1Q1P1P/RNB1R1K1 b - - 0 18'`. Then 18...Bf3 is the unique mate in 2, all 27 White replies allow ...Qg2#, and both `wrong` notes stay true (after 18...Rxe1+ 19.Qxe1 Bf3, only 20.Qf1 holds). New explanation:
   `"18...Bf3! threatens ...Qg2 mate, and nothing can stop it: no white piece can cover g2 or take the bishop, so mate follows next move. This is the Marshall's dream: queen on h3, bishop on f3, and White's queenside pieces unable to help."`
   If the old FEN stays, at minimum replace the third sentence with `"The only check, 19.Bxf7+, delays mate by a move; 19.Rxe8 is not even check."`
6. **black-gambits-1 step 1, text.** "the bishop on b4 will pin it against White's queen" is wrong: the pin is against the king on e1. Use `"...but ...Bb4 will pin it against White's king."`
7. **black-gambits-1 step 2, wrong `b2a1`.** "7...Qxa1+" is not check (the b1 knight blocks). Change it to `"7...Qxa1 is tempting, but 8.Bxa1 Bxd2+ 9.Nbxd2 only wins the exchange. Removing the bishop first gives mate."`
8. **black-gambits-2 step 0, text.** "Black is two pawns down for a moment" is wrong: after 3...Bxd6 Black is one pawn down. Use `"...Black is a pawn down, but two lines point at White's king:..."`
9. **black-gambits-6 step 1, note on `e1e2`.** "The only move" is false, because 7.Kxf2 is legal. Use `note: "Forced in practice: 7.Kxf2?? Qxd1 wins White's queen."`

## Should fix (misleading or unclear)

10. **Duplicate lesson.** black-gambits-4 repeats black-vs-e4-5 almost exactly: same read FEN, same puzzle FEN, same answer 5...Na5. Suggested new puzzle at move 9 (checker-verified). Also add `lessons: ['black-vs-e4-5']` to `related`.
    `fen: 'r1bqkb1r/p4pp1/2p2n1p/n3p3/8/5N2/PPPPBPPP/RNBQK2R b KQkq - 1 9'`, `prompt: "Black to move (after 8.Be2 h6 9.Nf3): gain another tempo with a pawn."`, `solution: ['e5e4']`, `hint: "Which pawn can attack the knight on f3?"`, `explanation: "9...e4! kicks the knight a second time. After 10.Ne5 Bd6 Black is a pawn down, but has space, open lines for both bishops and easy development, while White's knight has moved four times."`, `wrong: { 'g7g5': "9...g5? attacks nothing and loosens your king; ...e4 hits the knight at once.", 'c6c5': "9...c5 gains space but attacks nothing; ...e4 gains the tempo." }`
11. **bg-marshall `declined`.** The "Anti-Marshall ideas" label is wrong: Anti-Marshalls are 8.a4, 8.h3 and 8.d4, played before ...d5. Use `"9.d4 or 9.d3 decline the pawn and keep material level; Black gets a comfortable Ruy Lopez. (The Anti-Marshall moves 8.a4 and 8.h3 avoid ...d5 a move earlier.)"`
12. **bg-marshall `plans.black[1]`.** "...b5 restrains a4" is wrong, since a4 attacks b5. Use `"Keep White's queenside asleep: while ...Qh3 and ...Bg4 tie White down, the b1 knight and c1 bishop struggle to develop."`
13. **bg-marshall `uncertain`** is not an uncertainty. Use `"Theory after 14...Qh3 is vast and still developing; the sample stops at 12...Bd6 to show the ideas."`
14. **bg-englund `idea`.** "If White then grabs material carelessly" gets the roles wrong (Black is the one grabbing). Use `"If White then chases the queen with 6.Bc3?, mate on c1 can follow."`
15. **bg-englund `line`, notes.** `f8b4` "Pins the knight" is wrong: the d2 bishop stands behind it, not the king. Use `"Hits the knight a second time; Black hopes for ...Bxc3 and ...Qxa1."` For `b1c3`, "defends a1 indirectly" is vague. Use `"The correct move: White develops, and with b1 empty the queen on d1 now guards a1."`
16. **bg-froms `offer`.** Use `"The e-pawn, then the d-pawn too after 2.fxe5 d6 3.exd6, though ...Bxd6 takes one back: Black is a pawn down."`
17. **bg-traxler `risks[0]`.** 5.d4 (met by 5...d5) is not a refutation. Use `"Objectively unsound against the calm 5.Bxf7+."`
18. **bg-blumenfeld `line`, note on `f7e6`.** "doubled-looking pawns" is wrong: no pawns are doubled after ...fxe6. Use `"Black recaptures towards the centre and opens the f-file for the rook."`
19. **bg-icelandic `declined`.** "Panov-like structure" does not fit: 4.Nc3 exd5 5.cxd5 gives no isolated pawn. Use `"4.Nc3 or 4.d4 avoid the main line; after 4.Nc3 exd5 5.cxd5 Nxd5 6.Nxd5 Qxd5 Black has regained the pawn."` (verified)
20. **bg-falkbeer `declined`.** 3...exf4 is Black's choice, not a way for White to decline. Use `"3.Nf3 or 3.Nc3 sidestep the main line; Black can also meet 3.exd5 with 3...exf4, a King's Gambit Accepted."` In `idea`, "(no Nf3-g5 tricks, no easy d3)" should read `"(the pawn covers d3 and f3, so Nf3 and Bd3 are awkward)"`.
21. **bg-albin, final note on `e8c8`.** It says "open the g2 king", but White has not castled. Use `"Opposite-side castling ahead: once White castles short, ...h5-h4 and ...Bh3 aim at the king."`
22. **black-gambits-6 step 2, explanation.** "the only square still guarding the queen" is correct but cryptic, and "wins back the material" is muddled. Use `"7...fxg1=N+! A knight on g1 checks the king on e2. If 8.Rxg1, 8...Bg4+ wins White's queen; 8.Kf2 or 8.Ke3 drops the d1 queen to ...Qxd1. After 8.Ke1, 8...Qh4+ keeps the attack going, and the new knight has already won back the bishop. This underpromotion is the Lasker Trap."`

## Optional

23. **bg-two-knights `characterNote`.** "full compensation" overstates it; use `"widely judged sufficient compensation"`. In `declined`, 6.d3 still keeps the pawn, so it is another way of accepting rather than declining.
24. **black-gambits-8.** `middlegames-2` appears in both `prerequisites` and `related.lessons`; drop it from `related`. In step 1, "f3, g2 and h3 can no longer be guarded by White's pawns" would read better as `"f3 and h3 can no longer be guarded by a pawn"`.
25. **bg-blumenfeld `risks[0]`.** "return the pawn" does not fit 5.Bg5, where no pawn has been won yet. Use `"Against 5.Bg5 Black often ends up with a worse structure."`
