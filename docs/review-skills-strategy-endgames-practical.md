# Review: js/content/skills-strategy-endgames-practical.js (28 lessons)

Checker: 0 errors, 0 warnings. Every replacement below that contains moves or a FEN was run through `tools\check-content.js` on a scratch copy (0 errors) and through chess.js line playback. Pawn endings were solved by an exhaustive king-and-pawn search: endgames-5 (draws are exactly ...Kc7/Kc8/Kd8), endgames-6 (Kf3 the only win), endgames-7 (wins are exactly a5/Ke4/Ke3/Kd3; Kc4/Kc3 do not win), endgames-8 (every reply to Ke4 loses; Kc4 and b6 lose), endgames-11 (b6 the only win), endgames-12 (Kg7 the only draw; Kh7, Kg8 and c7 lose), practical-5 (the pawn ending after Rxd7+ is won whatever White plays), practical-8 (Ke3 the only win). So the accept lists and wrong notes in these lessons are correct, except where listed below.

## Must fix

1. **endgames-10, step 1 (puzzle): both captures draw.** "After ...Rxd3? Kxd3 White keeps the knight... usually wins" is false: 1...Rxd3 2.Kxd3 Kh6 and the h5 pawn falls (from b5 the knight cannot reach f4, f6, g3 or g7 in one move), leaving K+N v K. Replace the puzzle with a two-bishop version (the prompt still only asks which piece to take). Checked:
   - `fen: '6k1/8/8/8/7P/1r1B4/1BK5/8 b - - 0 1'`, `solution: ['b3b2']`, `accept: [['b3b2']]`
   - prompt: "Black to move. Your rook hits both bishops. Give it up for the right one to reach a dead draw."
   - hint: "Which bishop could ever control the dark h8 square?"
   - explanation: "...Rxb2+ Kxb2 leaves White with the light-squared bishop and an h-pawn. Black's king heads for h8 (or simply wins the h4 pawn), and a light-squared bishop can never drive it out: a dead draw. After ...Rxd3? Kxd3 White keeps the dark-squared bishop, which controls h8 and guards the pawn from g5 or e1, and White wins."
   - wrong: `{ 'b3d3': "...Rxd3? Kxd3. The dark-squared bishop controls h8 and can protect h4 (2...Kh7 3.Bc1 stops ...Kh6), so White wins." }`
2. **endgames-9, title:** "The Philidor defence" is the name of an opening. Use `title: 'The Philidor position'`. The rest of the lesson ("Philidor's method", "Philidor set-up") is fine. Rb6 is the only move that reaches the third rank in time, so the single answer is fair. The read step and the line are correct.
3. **endgames-12, step 0:** "as many moves to go from h8 to h4 as from h8 to e5". h8 to e5 takes only 3 moves. Replace with "as from h8 to e4".
4. **strategy-1, step 0, note on dxc6:** "Black recaptures towards the centre" is wrong: d-pawn takes on c6, so it goes away from the centre. Replace with "Black recaptures away from the centre, but this opens the d-file and frees the c8 bishop."
5. **strategy-4, step 2 (line):** the step says "White needs c3, Nf3 and a bishop to hold it" and then ends with 6.Bd3, which does not defend d4 (it is the Milner-Barry gambit). Replace the last move with `{ uci: 'a2a3', san: 'a3', note: "The main line: White prepares b4 to gain space on the queenside." }` and the text with "Watch how Black piles up on d4: pawn, knight and queen all aim at the base. White needs c3 and Nf3 just to hold it."
6. **strategy-6, step 1, wrong c3b5:** "...a6 or ...Nb6 sends it back". A knight on b6 does not attack b5. Replace with "Nb5 aims at a7 and d6, but ...a6 sends it straight back. b5 is not an outpost."
7. **practical-3, step 1, explanation:** "Luft with h3 also stops the mate". Both queens are attacked, so h3?? Qxc5 loses the queen. That answers the question about h3: it is not equally good. Replace the explanation with "Qxe5 trades off the only attacking piece, and it also deals with the attack on your own queen. After ...Rxe5 Black has no threats left, and White even has Rb8+ Re8 Rxe8 mate, because now Black's back rank is the weak one. Luft with h3? would stop the mate but drops the queen to ...Qxc5: with no time left, look at everything that is attacked." Add the wrong note `'h2h3': "h3? makes luft, but both queens are attacked and Black simply plays ...Qxc5."` (that makes 3 wrong notes).
8. **practical-1, step 1, wrong c1c7:** "Rc7 attacks the queen and knight". The queen on e7 is behind the knight. Rc7 hits d7 and a7, and both are defended. Replace with "Rc7 hits the knight and the a7 pawn, but both are defended. Qd5+ wins a whole rook."
9. **strategy-7, step 1, explanation:** "A queen on d5 would be chased away at once" contradicts the wrong note (...Qd5?? Nxd5). Replace with "A queen on d5 would simply be taken by the c3 knight".

## Should fix

1. **endgames-6, step 1, wrong e2e4:** "e4+? Ke5 and Black's king sits in front". The king on f2 does not protect e4, so 1...Kxe4 is simpler. Replace with "e4+? Kxe4. Your king does not protect the pawn, so it is simply lost. Head for a key square first."
2. **practical-3, step 1, wrong b2b8:** "Rb8? Rxb8 Rxb8+ looks forcing..." This is unclear, because after Rxb8+ Qxb8 the extra rook is gone. Replace with "Rb8? Rxb8! and after Rxb8+ Qxb8 your extra rook is gone (Qxe5? Rxb1+ even mates). Kill the threat first."
3. **strategy-5, step 1, wrong c3d5:** "Nd5? Bxe2... it is lost". White wins the piece back with 2.Nxe7+. Replace with "Nd5? Bxe2 Nxe7+ Kh7, and the e2 bishop hits your rook: after Re1 Bxc4 Black is a pawn up and has kept the good bishop." (line checked)
4. **strategy-6, outposts:** "two outposts, e5 and c5, that Black's pawns can never challenge" is false, because ...f6 and ...b6 can challenge them. The glossary defines an outpost as a square no enemy pawn can attack. Read text: "...it gives space and two strong squares, e5 and c5, which Black can challenge only by weakening himself with ...f6 or ...b6." Also fix highlights `['d4','c5']` to `['c5','e5']`. Puzzle hint "no black pawn can attack it" is also false in this FEN (f7 can go to f6): use "The square is protected by the d4 pawn; Black could only chase a knight from there with ...f6, which weakens e6." Prompt: change "outpost" to "strong square".
5. **practical-8 overlaps endgames-6.** The practical-8 puzzle is exactly the position after 1.Kf3 Ke5 in the endgames-6 explanation, with the same answer (Ke3). Replace it with the classic rook-ending trick (checked):
   - `fen: 'R7/P4k2/8/8/8/6K1/r7/8 w - - 0 1'`, `solution: ['a8h8']`, `accept: [['a8h8']]`
   - prompt: "Black has offered a draw in this rook ending. White to move: is there a win? Find it."
   - hint: "Black's king is on f7, not on its safe squares g7 or h7. What if your rook leaves a8 with a threat?"
   - explanation: "Rh8! threatens a8=Q. If ...Rxa7, Rh7+ skewers king and rook. If ...Kg7 attacks the rook, a8=Q Rxa8 Rxa8 wins, and spite checks only delay this. With the king on g7 or h7 the trick fails and it is a draw. Had you shaken hands, you would never have found out."
   - wrong: `{ 'g3f4': "Kf4? Kg7! The king reaches a safe square, and the rook behind the pawn holds: a known draw.", 'a8b8': "Rb8? Rxa7, and Rb7+ is met by ...Rxb7. Leave a8 only with a real threat." }`
   - Then set `prerequisites: ['endgames-2', 'practical-1']` and `related: { lessons: ['endgames-2', 'endgames-5', 'endgames-9'] }`. Step 0 can stay.
6. **practical-6, step 0:** "In the Philidor-style position below" should name the opening, which matters now that the endgame is "Philidor position". Use "In this Philidor Defence position (1.e4 e5 2.Nf3 d6 3.Bc4 Bg4 4.Nc3)".
7. **practical-4, step 0, time and increment advice:** "spend more in the opening phase you do not know" is unclear, and "you can never fully run out if you move quickly" overstates it. Replace the first two sentences with "Plan your time: move quickly in lines you know, think longest at critical moments, and keep a reserve for the ending. With an increment (extra seconds added after each move), you cannot lose on time as long as each move takes less than the increment, but each move gets only those seconds." Keep the rest; the step stays at about 80 words.
8. **Read steps that give the puzzle away (same FEN as the puzzle):**
   - practical-1 step 0 highlights `['a8','g8']`, which are exactly the fork targets: set `highlights: []`.
   - practical-7 step 0 highlights `['d1','d8']`, which show the discovered attack: set `highlights: []`.
9. **endgames-12, step 1, wrong h8h7:** "with no threat on the queenside" is inaccurate, because Kg6 still heads that way. Replace with "Kh7? h4 Kg6 h3, and White is a tempo short on both routes: the h-pawn queens first."
10. **strategy-2:** step 0 says "Those two dark squares next to the king", but f6 and h6 are not adjacent to g8. Use "near the king". Step 1 explanation "nothing black can ever cover f6, g7 or h6" overstates it, because pieces can. Use "no black pawn can ever cover f6 or h6 again".

## Optional

- endgames-10: after the fix, ...Rb4 or ...Rh3 (keeping the rook) are legal alternatives. The prompt already limits the choice to which piece to take, so this is fine.
- endgames-11: the prompt limits the choice to pawn moves; b6 is the only win. endgames-9: Rb6 is the only way to the sixth rank in time. No change needed.
- strategy-3/4/5/7/9: each narrowed prompt has exactly one legal answer (Ba6; c5; Bxg4; Nd5, since Qd5 hangs; b5).
- strategy-7 step 0 says "A knight is the ideal blockader" right before "which piece belongs on d5?". This is fine as a recap; to make the puzzle harder, move that sentence into the explanation.
- practical-2 step 0 arrow `['c8','c1']` hints at the refutation of Rxd5; consider `arrows: []`.
- strategy-8 step 0: add "In this illustrative position"; the c3-h8 arrow has nothing to do with the knight on h1 (its exits are f2 and g3).
- practical-9 step 0: label it "the puzzle position without Black's queen".
- practical-6 wrong c4f7: sharpen to "Bxf7+? Kxf7 Ng5+ Qxg5 and you have simply lost a piece."
- practical-8 step 0: optionally add the correct general rule "Make your move, offer the draw, then press your clock."
- strategy-9 explanation: two "while" clauses in one sentence; split the sentence.
- Glossary: this file adds none. Consider adding Key squares, Outside passed pawn, Protected passed pawn, Hanging pawns, Minority attack, Wrong-coloured bishop, Philidor position. Luft and Opposition already exist in foundations.
- Checked and fine: definitions of key squares, opposition, outside and protected passed pawns, Reti manoeuvre, IQP, hanging pawns, minority attack and bishop pair. ASCII only. British spelling. Practical lessons make no claims about specific tournament rules.
