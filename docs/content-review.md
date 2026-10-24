# Content review: chess judgement and teaching quality

Scope: `content-draft.js` and `curriculum.md`. Step indices are 0-based (`steps[n]`). Every puzzle position was worked through by hand. All 18 intended answers are correct and clearly best, and every auto-played reply is forced or natural. No puzzle needs a solution change. The problems are in hints, wrong-move feedback and some descriptive text.

## Must fix (false as written)

1. **openings-2 steps[2] `hint`**: "The e7 pawn cannot move: the queen on e2 pins it to the king." This is false in the position shown. The knight on e4 blocks the e-file, so e7 is not pinned yet. The pin only appears after Nd6.
   Replace: `"Once your knight leaves e4, the queen on e2 pins the e7 pawn to the black king."`

2. **gambits-1 steps[4] (Elephant Trap) `hint`**: "Your queen is attacked, but is the white king safe?" This is false. The f6 knight blocks Bg5, so the queen is not attacked. The real idea is that Black may "allow" Bxd8.
   Replace: `"Your f6 knight is pinned to the queen. Is it really? Look at what happens to the white king if White takes on d8."`

3. **tactics-3 steps[1] `wrong['d1d7']`**: "Rd7 attacks pawns, but it misses mate and lets Black's rook become active." This understates it. 1.Rd7?? Rc1+ 2.Rd1 Rxd1 is mate against White.
   Replace: `"Rd7?? Rc1+ Rd1 Rxd1 is back-rank mate against you. Your own king has no luft either."`

4. **gambits[2] Danish Gambit `line` notes contradict the card's own `sacrifice`** ("Up to two pawns, on c3 and b2"). The notes call c3 "a second pawn" and Bc4 "a third". Replace:
   - c2c3 note: `"The Danish: instead of recapturing on d4, White offers a pawn."`
   - f1c4 note: `"And a second pawn."`
   - c1b2 note: `"Two pawns down, but both bishops rake the board."`

## Should fix (misleading, unclear or overstated)

5. **openings-1 steps[2] `explanation`**: "the king's own pieces block every escape". In fact e7 is covered by the queen.
   Replace the sentence with: `"The bishop on c4 protects the queen, so the king cannot take it; the queen also covers e7, and Black's own queen and bishop block d8 and f8."`

6. **openings-2 steps[2] `explanation`**: "Black must play ...e6 before ...Ngf6." This is overstated, because 5...Ndf6 is the usual answer to 5.Qe2.
   Replace: `"With the white queen on e2, Black should play ...Ndf6 or ...e6 before ...Ngf6."`

7. **gambits-1 steps[2] `prompt`**: it does not explain why White has no a-pawn and Black has no c-pawn.
   Replace: `"After 3.e3 b5 4.a4 c6 5.axb5 cxb5, Black has clung on to the extra pawn. White to move: win material."`

8. **gambits-2 steps[0] `text`**: "use the open f-file against f7". The file is not open: there are black pawns on f4 and f7, and step 1 correctly says "half-open". "Half-open" is never defined.
   Replace: `"...castle, recapture on f4 and use the f-file against f7."` In steps[1] `text`, add after "half-open f-file": `" (a file with no pawn of your own on it)"`.

9. **gambits[2] Danish `risks[0]`**: "the extra pawn often comes back to Black". This is garbled, because Black is the side with the extra pawn.
   Replace: `"For White: against an accurate ...d5 the attack fades, and White is often left a pawn down or in a slightly worse ending."`

10. **tactics-2 steps[1] `explanation`**: "Black can only defend it". Defending does not help.
    Replace the last two sentences with: `"Defending it does not help, and moving the king out of the pin is too slow: after fxe5 dxe5 White has won a knight for a pawn."`

11. **tactics-3 steps[2] `prompt`**: "Only Black's queen guards the back rank." The rook on d8 is the back-rank guard, and the queen guards the rook.
    Replace: `"Black's rook on d8 guards the back rank, and only the queen protects it. White to move: mate in two."`

12. **middlegames-2 steps[2] `text`**: "h7 is guarded only by the king" contradicts the next sentence, which names the knight on f6 as a defender. The position is also artificial (White has no e-pawn, g1 knight or dark-squared bishop) but is not labelled.
    Replace the opening: `"When the king has castled short, h7 is often guarded only by the king."` Replace the last sentence with: `"In this illustrative position the black knight has wandered to d7."` This also makes curriculum.md's claim that illustrative positions are labelled true here. Consider the same label in middlegames-1 steps[0].

13. **endgames-1 steps[1] `explanation`**: "White's king reaches the sixth rank beside its pawn". The pawn is on e4, so the king is ahead of it, not beside it.
    Replace: `"...White's king reaches the sixth rank ahead of its pawn, and the pawn walks home."`

14. **Passed pawn definition** (endgames-2 steps[0] `text` and glossary): "no enemy pawns in front of it or on the files beside it". Enemy pawns behind it on a neighbouring file do not stop a pawn from being passed.
    Replace with: `"A passed pawn has no enemy pawn ahead of it on its own file or on either neighbouring file."` In the glossary, use the same wording without the leading "A passed pawn has".

15. **Lucena description** (endgames-2 steps[2] `text`, and endgames `Lucena position.principle`): it leaves out the defining conditions.
    - steps[2] text, first sentence: `"In the Lucena position, White's king stands on the queening square in front of its pawn, the black king is cut off by White's rook on the c-file, and Black's rook waits to check from behind."`
    - principle: `"With the pawn on the seventh, the king on the queening square and the defending king cut off by at least one file, the attacker wins by using the rook as a shield against checks (not with a rook's pawn)."`

16. **endgames `Philidor defence`**: "Philidor Defence" is the opening 1.e4 e5 2.Nf3 d6. The rook ending is known as the Philidor position.
    Rename `name: 'Philidor position'`. In the caption, change "An illustrative Philidor" to `"An illustrative Philidor position"`. In `rule`, change "drop it to the back" to `"drop it to the far end of the board"`. In curriculum.md, change "Philidor's defence" to "the Philidor position".

17. **openings[3] London System, Bg3 note**: "Keeps the bishop rather than allowing a trade on Black's terms". This is inaccurate, because ...Bxg3 is still possible.
    Replace: `"If Black trades with ...Bxg3, hxg3 opens the h-file for White's rook."`

18. **Undefined jargon**:
    - openings-1 steps[1] uses "minor pieces". Change "minor pieces out" to `"minor pieces (knights and bishops) out"`.
    - middlegames themes `Pawn structure.cues[2]` uses "doubled" and "backward" pawns without defining them. Replace: `"Doubled pawns (two on one file) and backward pawns (left behind their neighbours and unable to advance safely) are long-term weaknesses; aim your pieces at them."`
    - gambits-1 steps[0] uses "more a lever than a real sacrifice". Replace with `"more a challenge to Black's centre than a real sacrifice"`.

## Optional

19. **endgames-1 steps[0]**: "This is a kind of zugzwang". With bare kings, moving costs nothing. Suggest: `"With pawns on the board this often creates zugzwang: a position where any move makes things worse."` Also note that kings can face each other on a rank too.
20. **Square of the pawn** (endgames-1 steps[3] and the endgames card `rule`): add the exception `"A pawn still on its starting square can move two squares, so draw its square from the next rank up."`
21. **gambits-1 steps[4] `explanation`**: add `"If White does not take the queen, Black is simply a knight up."` Also explain "poisoned": `"(a poisoned pawn is one that loses material if taken)"`.
22. **gambits-2 steps[2] `explanation`**: after ...Qxh1 the black queen can get boxed in by Nf3, Kf2 and Bg2. Consider adding `"Then bring your queen back to safety quickly."` I am fairly but not fully certain Black stays clearly winning in every line. Engine-check it if the claim matters.
23. **tactics-3 steps[0] `text`**: the example "such as h3" sits in a position where Black is the one mated. Suggest `"such as h3, or ...h6 for Black here,"`.
24. **endgames-1 steps[4] `wrong['g3g4']`**: "b8 wins the race". Use SAN `"b8=Q"`. Optionally number the race in the explanation (`"1...Kf4 2.b5 Ke5 3.b6 Kd6 4.b7 Kc7"`).
25. **Glossary `Battery`**: suggest `"Two pieces of the same side lined up on one file, rank or diagonal, such as a queen and rook, so they attack together."` Consider adding entries for Half-open file, Minor piece, Smothered mate, Doubled pawn and Backward pawn. If you do, update "18 entries" in curriculum.md.
26. **ECO codes** are correct for the starting moves (C50, C60, B18, D00, D06, C30, C21), but several lines go deeper: Italian line C54, Ruy Lopez Closed C9x, QG card shows the Declined (D6x), KG card shows the Kieseritzky (C39). Either note that the code is for the opening family, or leave as is.
27. **openings[1] Ruy Lopez `plans[0]`**: "keep the bishop on the a2-g8 diagonal". It often drops to c2 after ...Na5. Suggest `"keep the light-squared bishop on a strong diagonal (b3, later often c2)"`.
28. **openings-1 steps[1]**: the c3 note "Quietly prepares d4" is followed by d3. Suggest `"Prepares d4 later; here White first plays the slower d3."`
29. **middlegames themes `Defence.caption`**: worth adding `"Now it is White's back rank that is in danger: ...Rc1+ is threatened."` After Rd8+ Kh7, ...Rc1+ Rd1 Rxd1 is mate.
30. **openings[2] Caro-Kann `idea`**: "no weaknesses" is overstated. Use `"few weaknesses"`, which matches openings-2 steps[0].
31. **Hype and unsourced claims**:
    - tracks `tactics.summary`: "decide most games below 1400" should become `"decide many games below 1400"`.
    - endgames-1 `summary`: "behind every pawn ending" should become `"two key ideas in pawn endings"`.
    - curriculum.md: "decided before move 15 more often than at any other point" is unverified, so soften to `"are often decided in the first 15 moves"`.
    - curriculum.md: "low-theory" for the Caro-Kann is arguable.
32. **middlegames-2 steps[1] `explanation`**: "often worth as much as an extra pawn" is acceptable as a rule of thumb. `"often worth about a pawn"` reads less absolute.

## Checked and fine (no action)
- Scholar's mate, the Qf3 trap against ...b5, the Elephant Trap (8.Qd2 really is forced), the 3.fxe5?? Qh4+ trap (Ke2 Qxe4# is right), the fork trick, Ne7+, f4 against the pinned knight, Ra5+, the back-rank puzzles, Nd5 and Qxh7#.
- Opposition: Ke5 is the only winning move, and both wrong-move texts are right. Square of the pawn: Kf4 is the only move.
- The Lucena line, Qe8#, the K+Q line, and the stalemate and square-rule statements.
- British spelling is consistent. Move-number style (`1.e4`, `3...Nf6`, `...Nc6`) is consistent. Puzzle count (18) and lesson minutes (91) match curriculum.md.
