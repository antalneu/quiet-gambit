# Review: js/content/white-gambits.js (White gambits)

Checker: `cscript //nologo tools\check-content.js js\content\foundations.js js\content\white-gambits.js` gives 0 errors, 0 warnings.
All lesson FENs were rebuilt from their lines with the site's move generator and match. The Evergreen game (white-gambits-9)
was replayed from move 1, and both mates in `accept` were confirmed. All 14 character labels are honest and conservative. Every entry has an
`uncertain` note. Text is ASCII with British spelling throughout. No duplicates of the foundation lessons were found (gambits-2 covers the 2...Bc5 trap; white-gambits-5 covers h4).

## Must fix (false statements)

1. **white-gambits-5, step 2 (line), last move note**: "Material is level and White's pieces are active."
   This is false. Count the pawns after 2.f4 exf4 ... 7...Nxe4 8.Bxf4: White has lost the f- and e-pawns and won back one, so White is still a pawn down (White has 6 pawns, Black has 7).
   Replace the note with: "White wins back f4, but after ...Nxe4 White is still a pawn down. The compensation is quick development, the open e-file (Qe2 pins the e4 knight) and the loose g4 pawn."
   Replace the step text with: "One well-known continuation shows the idea: White wins back the f4 pawn and develops freely, although Black has taken the e4 pawn in return."
   Retitle the step to 'Free development'.
2. **wg-kings-gambit, line, ply 15 (8.Bxf4) note**: "The gambit pawn comes back, with free development..." This has the same error.
   Replace with: "White wins back f4 but is still a pawn down after ...Nxe4; the compensation is development, the open e-file and the weak g4 pawn."
3. **white-gambits-7, puzzle explanation**: "Material is level, and Black has doubled f-pawns and a weak e4 pawn."
   Black has only one f-pawn. The original f-pawn now stands on e4 and the original e-pawn on f6, so there are no doubled pawns.
   Replace with: "Material is level, the e4 pawn is a target, and ...g6 has loosened Black's king."
4. **wg-milner-barry, declined**: "...then ...Nge7 or ...Nf6 instead of ...Nxd4". Here ...Nf6 simply loses the knight to exf6.
   Replace the whole field with: "Black can keep the tension with 6...Bd7, or, after 6...cxd4 7.cxd4 Bd7 8.O-O, develop with 8...Nge7 instead of grabbing on d4 with 8...Nxd4."

## Should fix (misleading or unclear)

5. **white-gambits-5, puzzle explanation**: "White later regains f4 with d4 and Bxf4."
   Change to: "White later wins back f4 with d4 and Bxf4, though Black usually takes on e4 in return."
6. **white-gambits-8, puzzle prompt**: "escape the check without losing your queen." The right answer, 9.Qd2, does give up the queen (for the bishop), so the prompt contradicts its own solution.
   Replace with: "White to move: answer the check so that material stays level."
   Also add `'b2c3': "Bc3 blocks the check, but ...Rxd8 wins your queen."` to `wrong`, because it is another tempting block. The move b2c3 is legal here.
7. **wg-marshall-semi-slav, summary**: "White gives the d-pawn and e-pawn". This is wrong: the e-pawn is only exchanged (4...dxe4 5.Nxe4).
   Replace with: "White gives the d-pawn for dark-square pressure once Black's dark-squared bishop has been exchanged."
8. **wg-urusov, line, ply 17 (9.Qh4) note**: "The queen keeps the pin on f6". After 6...Be7 the f6 knight is no longer pinned.
   Replace with: "The queen joins the g5 bishop against f6 and eyes h7."
   For the same reason, the plan "Use the queen on h4 and the g5 bishop against f6." is fine and can stay.
9. **white-gambits-1, step 2, note on 5.Nxc3**: "two pieces ahead in development". In fact White has two pieces out to Black's one.
   Replace with: "White is a pawn down but already has both knights in play."
10. **wg-smith-morra, plans.black[1]**: "Blunt the e5 break, for example with ...e5 or ...a6 and ...b5". The moves ...a6 and ...b5 do nothing to stop e5.
    Replace with: "Blunt the e5 break, often with ...e5 itself, and seek counterplay with ...a6 and ...b5."
11. **wg-smith-morra, line, last ply (9...e5) note**: "Black blocks the e5 break and the d-file pressure." It does not block the d-file.
    Replace with: "Black stops e4-e5 for good, at the cost of a backward d6 pawn and a hole on d5."
12. **wg-blackmar-diemer, line, 7.Qxf3 note**: "pressure on b7 and f7". The f6 knight blocks the f-file, so f7 is not under pressure.
    Replace with: "White has the bishop pair, pressure on b7 and a half-open f-file."
13. **wg-goring, characterNote**: "Taking is risky for Black". This overstates it, since 4...dxc3 5.Nxc3 Bb4 is a well-regarded reply.
    Replace with: "Taking needs care from Black, but the calm 4...d5 equalises comfortably, so it is a respectable practical weapon rather than a route to an edge."

## Optional

14. **white-gambits-2, prompt**: "6...dxe5?". This move loses the queen, so mark it "6...dxe5??".
15. **wg-marshall-semi-slav, last note**: "prepares ...Ne7". The a6 knight is not what makes ...Ne7 possible.
    Change to: "Black hits the b4 bishop with gain of time; the king's knight will follow to e7."
16. **wg-evans, line, 7...Nge7 note**: "A modern defence". The line is old.
    Change to: "A reliable defence: Black prepares ...d5 to give the pawn back."
    In the same entry, risks[2] "weakens c3 and the queenside" would be more accurate as "loosens the queenside".
17. **wg-scotch-gambit, accepted**: "4...Bc5 5.c3 transposes to a Giuoco Piano". This is true only after 5...Nf6; 5...dxc3 is Goring-style.
    Change to: "4...Bc5 5.c3 Nf6 transposes to a Giuoco Piano".
18. **white-gambits-9, read text**: this could add one hedged sentence: "Later analysis showed Black could have defended better (19...Rg4 is the usual suggestion), but the finish is a model of open lines."
    Also, the FEN halfmove clock is `0` but the true value is `1` (the read and line FEN at move 19). This is cosmetic.
19. **white-gambits-5, hint**: "a central square it cannot be kicked from easily". The knight is in fact kicked at once by ...d6.
    Change to: "Then find a central square for the knight that also eyes g4 and f7."
20. **white-gambits-8, read text**: "the main line instead simplifies by force". White chooses to simplify; nothing forces it.
    Change to: "the safest course is to simplify at once."
21. **wg-danish, line, 3.c3 note**: "White will recapture with a piece, not a pawn". In the full Danish White does not recapture at all, but plays 4.Bc4.
    Change to: "The offer: White wants open lines and fast development, not the pawn back."

## Checked and fine (no change)

- **Sample lines**: all are real main lines or are clearly marked as illustrative. They are Kieseritzky (Berlin) 5...Nf6 6.d4 d6 7.Nd3, Evans 7...Nge7, Danish 5...d5 (Schlechter), Scotch Gambit 4...Nf6 5.e5 d5 6.Bb5 Ne4, Goring 4...d5 with 6...Bg4 and 9...Qc4 (f1 covered, so no castling), Halloween 5...Nc6 6.d5 Ne5 7.f4 Ng6 8.e5 Ng8 9.d6, Milner-Barry 10.Nc3, Smith-Morra classical, Wing 5.axb4? Qe5+ trick (verified), Teichmann, and Marshall 8...Na6.
- **Puzzles 1, 2, 3, 4, 6, 7 and 9**: each intended move is unique and best, and the wrong-move texts are accurate.
  - In puzzles 1 and 3 the auto-replies are acknowledged.
  - In puzzle 1, 8...Bxd1 9.Bxf7+ Ke7 is forced (d7 is covered by Ne5), and 10.Nd5 is mate.
  - In puzzle 9, gxf3 is illegal because the g2 pawn is pinned by Rg8. Both lines (21...Kxd7 and 21...Kf8) end in mate.
