# Review: js/content/skills-tactics-attack-defence.js (tactics-4..15, attack-1..10, defence-1..9)

Method: every puzzle FEN was searched with a JScript mate-search / material alpha-beta built on js/chess.js
(all root moves scored), plus square-by-square reasoning. Checker: 0 errors before; the data changes
below (attack-6 FENs, tactics-13 and attack-6 `wrong` keys) were applied to a scratch copy and re-checked: 0 errors.
Confirmed sound (answer unique and best, auto-replies forced or flagged): tactics-4,5,7,8,9,10,11,12,14;
attack-1,2,4,7,10; defence-2,3,6,7,8; mates-in-two in tactics-14, attack-3/4/5/7, defence-4 are unique.
Author's doubts: Legal's mate is correct (after 5.Nxe5 Black's best, 5...dxe5 or 5...Be6, just loses a pawn).
Defence-5: ...Qf2+ Kh1 (forced) Qf1+ Kh2 (forced) is a true perpetual and the only non-losing move.
Defence-8: ...Kf8 is the only draw (Ke7/Kd7/Kd8 lose to h7-h8; Kf7 is illegal). Defence-1 Nf3 = h3 (both
correct, nothing else holds). Defence-2 h3 = h4 (both correct; g3/g4 fail to the b7 bishop, f-pawn is pinned).
Defence-3/7 prompts are narrow enough (...Bxd3 is the only trade; ...Nd6 the only knight blockade).

## Must fix (false or broken)

1. **attack-6 step 0 (read FEN)**: in `3r3k/pp4p1/5p2/q3p3/2B5/1Q6/PPP2PPP/4R1K1 w` White has **Qh3# at once**
   (verified), so the "rook lift" example has a quicker mate than the one it teaches. Move the queen to b1 in both FENs
   (no mate in 2 in the read position; Rh3# stays the only mate in the puzzle):
   - step 0 fen: `'3r3k/pp4p1/5p2/q3p3/2B5/8/PPP2PPP/1Q2R1K1 w - - 0 1'`
   - step 1 fen: `'3r3k/pp4p1/5p2/q3p3/2B5/4R3/PPP2PPP/1Q4K1 w - - 0 1'`
   - step 1 wrong: replace `'b3b7'` with `'e3g3': "Rg3? The g7 pawn blocks the g-file; the open file is the h-file."`
2. **attack-3 step 1 wrong `f3h3`**: "Rh3 first is too slow: Black takes your knight with ...Qxe7" is false: after
   Rh3 Qxe7 White has Qxh7# (verified). The real refutation is the back rank: ...Qc1+ mates (search: Black mates).
   Replace: `"Rh3? leaves your back rank: ...Qc1+ and Black mates first."`
3. **attack-3 step 1 wrong `e7g6`**: "Ng6+? hxg6" is illegal: the h7 pawn is pinned by Qh5. Legal replies are
   ...Kg8 and ...fxg6. Replace: `"Ng6+? fxg6 (the h7 pawn is pinned, so not ...hxg6) hits your queen and the attack is gone."`
4. **tactics-13 step 1 wrong `f3d4`**: false: the knight on d4 guards e2, so ...Qxe2 Rxe2 Rxe2 Nxe2 is a level trade
   (search: Nd4 = 0). Replace key and text: `'f3g5': "Ng5?? Qxe2 Rxe2 Rxe2: Black's x-ray works first and you lose a rook."` (verified: -5).
5. **tactics-10 step 1 wrong `e5d7`**: "you win only the exchange" is false: after Nd7 Black plays ...Rxf1+ and then
   moves the queen, winning nothing for White (search: 0). Replace:
   `"Nd7 at once forks queen and rook, but ...Rxf1+ comes with check, then the queen escapes and you have won nothing."`
6. **attack-4 step 0 (read)** gives the answer away: "A queen sacrifice on c6 removes that pawn: bxc6 opens the a6-c8
   diagonal." plus arrow f1-a6. Replace the last sentence with "How can White force the pawn off b7?" and drop
   `['f1','a6']` from arrows.
7. **defence-5 step 0**: "Black is a bishop and two pawns down" - White has 4 pawns to 3: replace with "a bishop and a pawn down".
8. **tactics-6 step 1 explanation**: "Black has to play ...g6 or move the f8 rook" - moving the rook loses to
   Qxh7+ Kf8 Qh8# (Bf6 covers g7/e7; verified mate in 2); only ...g6 avoids mate. Replace the sentence:
   "To stop the mate Black must play ...g6 (moving the f8 rook fails to Qxh7+ Kf8 Qh8#), and White is simply a piece up."

## Should fix (misleading or unclear)

1. **attack-5 (Greek gift)**: the lesson covers ...Kg8 and ...Kh8 only. After 2...Kg6 or 2...Kh6 there is no forced
   mate within three moves (search), and White wins back material (e.g. Bxf8) rather than mating. The checklist
   reads as if the conditions guarantee success. Line step text, append: "The critical defences are ...Kg6 and ...Kh6:
   here there is no quick mate, though White keeps a strong attack and can win material with Bxf8. Always calculate
   them before you sacrifice." Step 0, replace "Check before you sacrifice:" with "These conditions make it likely to work, not certain:".
2. **attack-8 step 1 prompt**: "Break it and mate." overclaims: mate only follows if Black grabs the queen.
   Replace: "White to move: the pin is only relative. Break it by offering your queen."
3. **attack-7 step 1 (read 'Count the tempi')**: "Trading off the defender of h7 is the other key, and capturing with
   check is better still." names Nxf6+ before the puzzle. Replace with: "Look for moves that force the defender's
   reply, so the opponent never gets time for a counter-attack." Also drop highlight `f6` in step 0.
4. **defence-9 step 0**: "...ideally by capturing the most dangerous attacker. Here ... the knight on f5 is the key
   attacker." gives away ...Rxf5 (the only capture). Replace the last clause with "Which white piece is doing the most work?"
5. **defence-4 step 0**: "with the g1 square covered by Black's queen and bishop" plus arrow g4-f2 point straight at
   ...Qg1+/...Nf2#. Replace with "...boxed in on h1 by its own pawns and rook." and arrows `[['h5','h7']]` only.
6. **tactics-12 step 0**: arrow f4-c7 and highlights c7, a8 show Nxc7+. Use `arrows: []`, `highlights: ['d1']`.
   Also add `'gambits-1'` to prerequisites, since the text says "You saw one in the Elephant Trap".
7. **attack-1 step 0**: "Here the target is g7 ... both hit it" plus arrow f5-g7 solves the mate-in-one. Replace
   "Here the target is g7. White's queen on g3 and knight on f5 both hit it. Only the black king defends it, and..."
   with "Here, find the square near the black king that White hits twice and Black defends only once. Remember
   that..." and use `arrows: []`, `highlights: []`.
8. **tactics-15 step 1 wrong `e5f7`**: "and the d7 knight lives" is false: Nxf7 Kxf7 Rxd7+ wins it back, a pawn up
   (search: +1). Replace: `"Nxf7 Kxf7 Rxd7+ nets only a pawn, and your rook has left the back rank. Nxd7 wins a whole piece."`
9. **defence-5 step 1 explanation**: "Any quiet move loses to Qg7 mate" - ...Qe7/...Qf7/...Qg7 stop the mate.
   Replace with "Most other moves lose to Qg7 mate, and ...Qf7 or ...Qg7 only reach a lost endgame a bishop down."
10. **attack-9 step 2 explanation**: "Black's own queen and bishop block the king" - the queen on e6 is not next to
    the king. Replace with "Black's own bishop on f8 and pawn on f7 block the king".
11. **defence-1 step 1 explanation**: "Every other move loses" - Rd1 avoids mate (Qxh2+ Kf1) but loses material.
    Replace with "Every other move gets mated or loses heavily, for example Qxb7?? Qxh2 mate."
12. **tactics-9 step 1 explanation**: "Rxb7 is impossible because of Bxb7" - it is Black's move: write "...Rxb7".

## Optional

1. attack-2 step 0: in the classic Arabian mate the rook on h7 itself covers g7; write "...checks a king on h8 and
   covers g7 along the seventh rank (here Black's own g7 pawn also sits there)". Wrong `f6d7`: "forks the rook and
   nothing else" is a contradiction; use "Nd7 attacks the rook on f8, but you have missed mate."
2. defence-4 explanation: "This is the famous Philidor's legacy pattern" -> "This is the finish of the pattern known as
   Philidor's legacy" (the full legacy starts with knight checks and a double check).
3. defence-3 step 0 highlight `d3` and defence-7 "The square in front of it, d6, is the key." make easy puzzles
   easier; consider `highlights: ['h7']` and ending defence-7 with "Which square is the key?".
4. attack-8 step 0 highlight `e5` hints Nxe5; use `highlights: ['f7']`.
5. defence-3 explanation: after ...Bxd3 Rxd3 White can still try Rh3; add "(...Nd7-f6 covers h7 in time)".
6. tactics-7 explanation "for at most a pawn": true with best play (White keeps the knight trapped with cxd4 if
   ...cxd4); fine as is.
7. tactics-13: the e1 rook behind its own queen is often called a battery; the x-ray definition given is acceptable.
