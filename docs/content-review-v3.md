# Content review v3: chess accuracy

Reviewer: chess-accuracy pass on the v3 content (families, variations, move lines, pitfalls, aliases, gambit labels, model games, calculation puzzles).
Scope: claims in text, labels and puzzle feedback. Legality and SAN were already machine-checked (`tools\check-content.js`, 0 errors) and were not re-reviewed.

Method: every claim below was checked against standard opening theory and the historical game scores. Tactical claims were tested with the site's own move generator (`js\chess.js`) and a small mate search plus alpha-beta search (material evaluation, depth 3 to 5 plies with capture extension) run under cscript. Where a finding depends on a search, the search result is quoted.

Severity: **P1** a false or misleading claim a learner would absorb; **P2** imprecise or overstated; **P3** a nit.

No content files were edited.

---

## Findings (most severe first)

### P1-1. model-games-1: "Qxe4" does not "trade into a normal position"; it loses the queen
- **File:** `js\content\skills-calculation-structures-games.js`, lesson `model-games-1`, puzzle "The famous finish", `wrong['d3e4']`
- **Claim:** "Qxe4 regains the piece but trades into a normal position. You had mate."
- **Problem:** After 9.Qxe4?? Black plays 9...Qxe4, and nothing of White's covers e4 (Bd2, Rd1, Bf1 and Ng1 do not reach it). White just loses the queen. The search confirms it: after 9.Qxe4, 9...Qxe4 is +9 for Black.
- **Fix:** "Qxe4?? takes the knight, but Black's queen on e5 simply takes yours: nothing guards e4. You had mate with Qd8+."

### P1-2. calculation-3: both wrong-move explanations are false
- **File:** `skills-calculation-structures-games.js`, `calculation-3` ("Check, check, mate"), `wrong['f7d8']` and `wrong['f7e5']`
- **Claims:** "Nd8+ is a discovered check, but Black blocks with ...Rf7 and the attack is over." / "Ne5+ is check, but after ...Kh8 there is no double check and Black defends."
- **Problem:** ...Rf7 is Black's worst reply. The rook is pinned to g8 by the c4 queen, and the search finds mate after it (Rf7 scores as mate-in-4 plies for White after both Nd8+ and Ne5+). Black's best reply to either check is ...Kh8. Even then White is not stopped: Nf7+ Kg8 repeats, and Nh6+ still gives the smothered mate. The two moves waste time; they do not let Black defend.
- **Fix (f7d8):** "Nd8+ is a discovered check, but it wastes time: after ...Kh8! the knight has to come back with Nf7+. (...Rf7? fails, because the rook is pinned and Nxf7 wins it.) The double check Nh6+ mates at once."
- **Fix (f7e5):** "Ne5+ is check, but ...Kh8! sidesteps it and you need Nf7+ to start again. The double check Nh6+ is the fast way."

### P1-3. calculation-9: the ...Nf6 refutation line is wrong
- **File:** `skills-calculation-structures-games.js`, `calculation-9` ("Only one survives"), `wrong['d7f6']`
- **Claim:** "...Nf6? Bh7+! Kh8 Nxf7+ Rxf7 Qxf7, and White has won the exchange and a pawn."
- **Problem:** At the end of that line the bishop on h7 is unprotected, and ...Kxh7 or ...Nxh7 takes it. White ends up with rook and two pawns against knight and bishop, not "the exchange and a pawn". Also, the move should be written Bxh7+, since it captures. The search scores ...Nf6 at about -2 for Black: bad, but not for the reason given. The solution itself (...h6) holds: it scores 0 at depth 4, and Bxg5, f5, Kh8 and the rook moves all lose.
- **Fix:** "...Nf6? Bxh7+! wins a pawn and keeps the attack: ...Nxh7 Qxh7 is mate, and after ...Kh8 Nxf7+ Rxf7 Qxf7 White has rook and two pawns for two minor pieces with Black's king still exposed."

### P1-4. wg-belgrade, line `bc4`: "Material is level" is false
- **File:** `js\content\white-gambits.js`, gambit `wg-belgrade`, line `bc4` (final move note on 10.Nxd4; the line summary also says "White regains material")
- **Claim:** "Material is level; White has the freer game and the bishop."
- **Problem:** After 5...Nxe4 6.Bc4 Be7 7.O-O O-O 8.Re1 Nf6 9.Nxe7+ Nxe7 10.Nxd4, White has 6 pawns and Black has 7 (material 34-35). White has won back the d-pawn, but is still a pawn down for the e4 pawn.
- **Fix (note):** "White is still a pawn down, but has the bishop pair, the open e-file and the freer game as compensation."
- **Fix (summary):** "...After Re1 the knight must retreat and White wins back one pawn, keeping active pieces for the other."

### P1-5. model-games-5: wrong reason for why Bxf6 is bad
- **File:** `skills-calculation-structures-games.js`, `model-games-5` ("Collect the weakness"), `wrong['g5f6']`
- **Claim:** "Bxf6? Qxf6, and now the queen guards c6 along the sixth rank."
- **Problem:** The bishop on d6 stands between f6 and c6, so the queen does not guard c6. Bxf6 is still bad, for a different reason: Black's queen joins the g4 bishop against f3, and the d6 bishop aims at h2. In the search, 19.Qxc6? Bxh2+! wins material for Black (about +6 at depth 3). The main answer Qxc6 is sound (about +1 for White).
- **Fix:** "Bxf6? Qxf6 gives Black's queen to the attack: f3 is hit twice and the d6 bishop aims at h2, so Qxc6 now runs into ...Bxh2+. Take the pawn first."

### P2-6. model-games-2: wrong-move text names an impossible recapture
- **File:** `skills-calculation-structures-games.js`, `model-games-2`, `wrong['e4f6']`
- **Claim:** "Nxf6+ first? Bxf6 or gxf6, and the queen sacrifice no longer works."
- **Problem:** Nxf6+ captures the bishop on f6, so "...Bxf6" cannot happen. The possible recaptures are ...gxf6, ...Rxf6 and ...Qxf6.
- **Fix:** "Nxf6+ first? After ...gxf6 (or ...Rxf6) the knight that should give the double check is gone, and Qxh7+ no longer works."

### P2-7. model-games-1: "Qe3 offers a queen trade" is false
- **File:** `skills-calculation-structures-games.js`, `model-games-1`, `wrong['d3e3']`
- **Claim:** "Qe3 offers a queen trade."
- **Problem:** The black knight on e4 stands between e3 and e5, so the queens do not face each other.
- **Fix:** "Qe3 only attacks the e4 knight. You are a piece down and you had mate with Qd8+."

### P2-8. calculation-5: wrong reason given for Rh3
- **File:** `skills-calculation-structures-games.js`, `calculation-5`, `wrong['e3h3']`
- **Claim:** "Rh3 first? It leaves the back rank: ...Qxb1+ wins your rook with check."
- **Problem:** The rook moving is the e3 rook, not a back-rank piece. The real issue is that the b1 rook was already attacked by the b4 queen and nothing defends it. Rh3 ignores that, so Black takes it with check and then has time to cover h7.
- **Fix:** "Rh3 first? It threatens mate, but your b1 rook is undefended: ...Qxb1+ takes it with check, and after Bf1 Black has time to defend h7."

### P2-9. wf-pirc alias "Modern Defence" points learners to the wrong family
- **File:** `js\content\white-repertoire.js`, family `wf-pirc` (`aliases`; also in `terms`)
- **Claim:** aliases "Modern Defence; 1...d6"
- **Problem:** The Modern Defence is 1...g6, a separate opening; Black's side has its own family `bf-modern` for it. The `wf-pirc` root is 1.e4 d6, so a learner who searches "Modern Defence" on White's side lands on a family that never shows 1...g6.
- **Fix:** Remove "Modern Defence" from `aliases` (you can keep it in `terms` with "Modern Defence (1...g6) often transposes"). Use aliases such as "Pirc-Ufimtsev Defence; 1...d6".

### P3-10. Family aliases that are really sub-variations
- **Files:** `white-repertoire.js` (`wf-italian` "Two Knights Defence"; `wf-queens-gambit` "QGD; QGA; Slav"; `wf-dutch` "Leningrad Dutch; Stonewall"; `wf-benoni` "Czech Benoni"; `wf-english` "Reversed Sicilian; Anglo-Indian"), `black-vs-e4.js` (`bf-italian` "Two Knights Defence"), `black-vs-d4-flank.js` (`bf-slav` "Semi-Slav"; `bf-qgd` "Orthodox Defence")
- **Problem:** These are branches inside the family, not other names for it. For example, the Orthodox Defence is one specific QGD line (4.Bg5 Be7 5.e3 O-O 6.Nf3 Nbd7), and the Semi-Slav is not another name for the Slav. They already appear in `terms`, which is the right place for them.
- **Fix:** Move them from `aliases` to `terms`. Keep true alternative names as aliases: "Giuoco Piano / Italian Opening", "Queen's Gambit (1.d4 d5 2.c4)", "Slav Defence", "QGD", and so on.

### P3-11. w-four-knights-scotch alias "Three Knights Game"
- **File:** `white-repertoire.js`, `w-four-knights-scotch`, `aliases`
- **Problem:** The Three Knights Game is 3.Nc3 without ...Nf6, such as 3...Bb4 or 3...g6. It is not another name for the Scotch Four Knights.
- **Fix:** aliases "Four Knights, Scotch Variation; 4.d4 Four Knights". Mention the Three Knights in the overview or `terms`.

### P3-12. w-english-anglo-indian pitfall: the Mikenas move order skips 2...e6
- **File:** `white-repertoire.js`, `w-english-anglo-indian`, pitfall "The Mikenas is forcing"
- **Claim:** "After 3.e4 d5 4.e5 d4 5.exf6 dxc3 ..."
- **Problem:** The entry starts at 1.c4 Nf6 2.Nc3. The Mikenas needs 2...e6 3.e4; written this way, it reads as if 3.e4 works against any second move. Also, 6.dxc3 is as main a try as 6.fxg7.
- **Fix:** "After 2...e6 3.e4 d5 4.e5 d4 5.exf6 dxc3 the play is forcing; know 6.bxc3 Qxf6 7.d4 (6.dxc3 and 6.fxg7 are the other tries) before you choose 3.e4."

### P3-13. w-kid-samisch, line `e5`: "resembles a Benoni"
- **File:** `white-repertoire.js`, `w-kid-samisch`, line `e5` summary
- **Claim:** "After d5 and ...c6 the c-file opens and the structure resembles a Benoni."
- **Problem:** After ...cxd5 cxd5, Black has pawns on d6 and e5 against d5 and e4. That is a King's Indian structure with an open c-file. A Benoni has ...c5 against d5.
- **Fix:** "After d5, ...c6 and the exchange on d5, the c-file opens in a King's Indian structure (d5/e4 against d6/e5)."

### P3-14. b-grunfeld-russian, line `hungarian`: queen move count
- **File:** `black-vs-d4-flank.js`, `b-grunfeld-russian`, line `hungarian`, note on 9...c5
- **Claim:** "The queen has moved four times; Black hits d4."
- **Problem:** The moves were Qb3, Qxc4 and Qb3: three queen moves.
- **Fix:** "The queen has moved three times; Black hits d4."

### P3-15. b-french-classical: "MacCutcheon" spelling
- **File:** `black-vs-e4.js`, `b-french-classical`, line `mccutcheon` (name and note)
- **Fix:** Use "McCutcheon Variation", which is the standard spelling (after John McCutcheon).

### P3-16. w-caro-advance, line `g4`: "h4 threatens h5, trapping the bishop"
- **File:** `white-repertoire.js`, `w-caro-advance`, line `g4`, note on 7.h4
- **Problem:** If h5 came, the g6 bishop would still have h7 or e4. The threat is to bury the bishop and gain space, not to trap it outright.
- **Fix:** "Threatens h5, driving the bishop to h7 where it is shut out of play."

### P3-17. Model games 7-9: "illustrative" without "composed"
- **File:** `skills-calculation-structures-games.js`, `model-games-7`, `-8`, `-9`
- **Problem:** `model-games-4`, `-5` and `-6` say "composed for this lesson", but games 7 to 9 only say "illustrative game". Game 7 also says "follows a main line of the Sveshnikov", which can read as a real game. The file header defines "illustrative" as composed, but a learner does not see the header.
- **Fix:** Add "(composed for this lesson)" after "This illustrative game" in the first read step of games 7, 8 and 9.

### P3-18. w-ruy-lopez-closed contains an Open Ruy trap
- **File:** `white-repertoire.js`, `w-ruy-lopez-closed`, pitfall "The Tarrasch trap in the Open"
- **Problem:** The trap is correct (11...Qd7? 12.Nxe6 fxe6 13.Rxe4), but it belongs to the Open Variation (5...Nxe4), which is not on the Closed main-line page. Black's `b-ruy-open` already has it.
- **Fix:** Leave it if you want White players to meet the Open from this page, but retitle it "If Black chooses the Open: the Tarrasch trap".

---

## Checked and found sound

**Named model games (`skills-calculation-structures-games.js`)**
- `model-games-1`, Reti v Tartakower, Vienna 1910: the players, place, year, Caro-Kann opening and moves 1-8 match the standard score. The finish 9.Qd8+ Kxd8 10.Bg5++ Kc7 11.Bd8#, and the alternative 10...Ke8 11.Rd8#, are correct.
- `model-games-2`, Ed. Lasker v G. Thomas, London 1912: the opening moves 1-10 match the score. The hunt 11.Qxh7+ ... 18.Kd2# and the side line 12...Kh8 13.Ng6# are correct, and "every white move from 12 to 17 was a check" is true.
- `model-games-3`, Em. Lasker v J. Bauer, Amsterdam 1889: moves 1-14 and the finish 15.Bxh7+ ... 22.Qd7 match the score, and Lasker did win.
- Composed games 4-6 are labelled "composed for this lesson" (games 7-9: see P3-17).

**Calculation and structure puzzles**
- Mates verified with the search: calculation-1 (mate in 2), calculation-3 (the solution line), calculation-4 (every Black reply to Qxf6 is mated; ...gxf6 Rg3+ Kh8 Bxf6#), calculation-5 (Qxh7+ Kxh7 Rh3#).
- Also checked: calculation-2 (capture order), calculation-6 (Rxd4 wins the queen; the Qxh7+ refutation with ...Qh4 protected by Be7 is right), calculation-7 (deflect, then the quiet Qh6), calculation-8 (both race refutations are correct), calculation-9 (...h6 holds; Bxg5 and f5 allow Qxh7#).
- Pawn-structure puzzles 1-9 and model-games-4/6/7/8/9 answers. Among them: the Ba3?? Bxa3 Nxa3 Qxa3 tactic, the Nxg4?? Qxf7# trap, and the Keres Attack ...d5 break.

**Pitfalls verified on the board (mates and the material at the end)**
Legal's mate (Italian, Goring), the Stafford 6.Bg5?? trap, From's mate on g3, the Siberian Trap (Morra), the Kieninger Trap (Budapest), the Englund ...Qc1#, Blackburne Shilling ...Nf3#, the Caro-Kann 5.Qe2 / 6.Nd6# trap (both colours), the English 4...Nd4 5.Nxe5? Qe7 6.Nd3?? Nf3# trap, the Petroff copycat 4...Nf6?? 5.Nc6+, the Tennison 5...h6?? 6.Nxf7 Bg6+, the Anti-Berlin and Berlin 6.Nxe5? Qd4 (...Qxf2 is mate, since the queen covers d2), Noah's Ark (both versions), the Elephant Trap (both colours), the Lasker Trap in the Albin, the QGA 3...b5? 6.Qf3, the Milner-Barry / Advance French 9.Bb5+ trick, the Accelerated Dragon 8...Na5? 9.e5 Ne8 10.Bxf7+, the Sozin 6...g6? 8.e5, the Scotch 5.Be3 Nf6? 6.Nxc6, the Mieses ...Nf6? exf6, the Alekhine 5...Nd7? 6.Nxf7, the Portuguese 4.Be2 Qxd5?/Nxd5? 5.Bxg4 (search confirms Black loses material; 5...Qe4+ is answered by 6.Be2), the Falkbeer 7.Be3? Bxe3 (no recapture), the Leningrad and Classical Dutch 7...e5? 10.Nxe5 (search: White simply a pawn up in both), the London 7.Qxf5?? Qxb2 (search: Black regains more than the piece), the Grunfeld d5? Bxc3+ forks, the Icelandic Bxc3+ fork, the Danish 8...Bb4+ with the discovered attack from h8, the Wing Gambit 5.axb4?? Qe5+, the King's Gambit 3.fxe5?? Qh4+, the Belgrade 6.Qe2 pin (only ...f5 keeps the knight), the Wing/Trompowsky/London b2 ideas, the Colle e4-e5 fork, and the Benoni 8.Bb5+ Nbd7? 9.e5.

**Aliases confirmed as real names**
Mieses Variation (Vienna 3.g3), Nimzowitsch Attack (Petroff 5.Nc3), Canal-Sokolsky Attack (Moscow), Paulsen Variation (French 3.Nc3), Capablanca Variation (Nimzo 4.Qc2), Panov-Botvinnik, Saemisch, Bastrikov (Taimanov 5...Qc7), Lasker-Pelikan, Mieses-Kotroc (Scandinavian 3...Qa5), Nimzowitsch Variation (Winawer), Steinitz / Modern Attack (Petroff 3.d4), Czech Variation (Slav 5...Bf5), Albin-Chatard Attack, Nordic Gambit, Goering Gambit, Mueller-Schulze Gambit, Volga Gambit, Polerio Defence, Wilkes-Barre Variation, Greco Counter-Gambit, Queen's Pawn Counter-Gambit, Kostic Gambit, Hennig-Schara, Jaenisch, Ragozin, Chebanenko, Robatsch, Pirc-Ufimtsev, Prussian Defence (the German name for the Two Knights).

**Gambit character labels and notes**
All labels are plausible, and no gambit is wrongly called refuted or winning. The new gambits:
- wg-belgrade, Playable: right; 5...Nb4, 5...Be7 and 5...Nxd5 are good answers.
- wg-alekhine-chatard, Established: right; 7...Kxe7 is correctly given as the usual recapture after 6...c5 7.Bxe7.
- wg-tennison, Speculative: right.
- wg-anti-moscow, Established: right; it is an elite main line.
- bg-portuguese, Speculative: right; 4.f3 is critical.
- bg-stafford, Speculative / "widely regarded as unsound": right.

Older labels spot-checked and agreed with: King's Gambit, Evans (Kasparov v Anand, Riga 1995, is correct), Danish, Halloween, Traxler, Latvian, Marshall, Benko and Albin.

**New variations: move lines and notes**
All move lines in the 14 new White and 29 new Black variations were read. Except for the items above, they follow established theory, and the notes and plans are accurate. Some examples:
- Two Knights: 4.d3, the 4.Ng5 Na5 main line and the Morphy 6.d3 line.
- Anti-Berlin, Rossolimo 3...g6 4.Bxc6, Moscow 3...Bd7 and 3...Nd7 4.d4.
- Closed Sicilian and Grand Prix.
- French Nc3: Winawer Poisoned Pawn, Steinitz, Rubinstein, Burn and McCutcheon.
- Caro-Kann: the Short System, the 4.Nc3 e6 5.g4 line, Panov with 5...e6, 5...Nc6 and 5...g6, the Exchange with Qb3, and the Two Knights with 4...Bh5.
- KID: Saemisch (Panno, ...c5 gambit, ...e5), Fianchetto (classical, Panno, Yugoslav, ...exd4) and Four Pawns (9...Bg4, 9...Re8 10.e5, 7.dxc5).
- Grunfeld: Russian (Smyslov, Hungarian, Prins) and 4.Bf4 (both the ...c5 and the c7-gambit lines).
- Nimzo: Classical 4.Qc2 (5.a3, 4...d5, 4...c5, 5.e4, 5.Nf3 Na6) and Saemisch (the e3/Ne8/f5 plan, 6.f3 d5).
- English: Anglo-Indian and Closed.
- Open Ruy (9.Nbd2 Nc5 10.c3 d4, 9.c3 Bc5 with ...Bf5/...f5, 9.Qe2, 6.Re1), Exchange Ruy with 5...f6 and 5...Bg4 6.h3 h5, Scotch Classical (5.Be3 Qf6 ... 9...d5, 5.Nxc6 Qf6), and Petroff 3.d4.
- QGD Lasker (9.Rc1, 9.cxd5, 9.Qc2) and Ragozin (including the transposition to the Rubinstein Nimzo).
- Slav: Exchange and Chebanenko (5.e3 b5 6.b3, 5.c5, 5.a4).
- Dutch: Stonewall (7.b3, 7.Bf4) and Classical (7...Qe8).
- Reti with ...e6 (double fianchetto with ...d4, 3.d4, the Open Catalan).
- Scandinavian: 3...Qd6 and the 2...Nf6 lines (the 3.c4 c6 transposition to the Panov is correct).
- Pirc Austrian, Modern, and the Alekhine Four Pawns (6...Nc6 7.Be3 Bf5 ... 11...f6, and 6...c5 7.d5).
