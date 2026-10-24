/* The Quiet Gambit - White repertoire (non-gambit openings with 1.e4, 1.d4 and flank moves)
 * as a family -> variation -> move line library, plus the white-openings lessons.
 * Data only: appends one part to window.QG_PARTS. Checked by tools/check-content.js. */
window.QG_PARTS = (window.QG_PARTS || []).concat([{
  source: 'white-repertoire',
  families: [
    {
      id: 'wf-italian',
      side: 'white',
      group: 'e4',
      name: 'Italian Game',
      aliases: ['Giuoco Piano', 'Italian Opening', 'Bc4 openings'],
      eco: 'C50-C59',
      root: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4'],
      summary: "3.Bc4 aims the bishop at f7 and keeps White's options open: a slow c3-d3 build-up or, against the Two Knights, the sharp 4.Ng5.",
      overview: 'After 1.e4 e5 2.Nf3 Nc6 3.Bc4 the bishop eyes f7 and White prepares c3 and d4 or the quieter d3. Black chooses between 3...Bc5, the Giuoco Piano, and 3...Nf6, the Two Knights Defence. Modern practice favours slow manoeuvring structures with c3, d3, Re1 and Nbd2-f1-g3, where White keeps the d3-d4 break in reserve; the old open lines with an early d4 or Ng5 are sharper and more forcing.',
      choosing: 'Beginners and positional players: the Giuoco with c3 and d3, and 4.d3 against the Two Knights, which often lead to the same quiet structure. Players who like forcing, tactical play can try 4.Ng5 against the Two Knights, but must know the main line well.',
      terms: [
        'Giuoco Pianissimo',
        'Two Knights Defence',
        'Knight Attack',
        'Fried Liver',
        "Legal's mate",
        'Nbd2-f1-g3'
      ]
    },
    {
      id: 'wf-ruy-lopez',
      side: 'white',
      group: 'e4',
      name: 'Ruy Lopez',
      aliases: ['Spanish Opening', 'Spanish Game'],
      eco: 'C60-C99',
      root: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5'],
      summary: 'The Spanish: 3.Bb5 attacks the knight that guards e5. Deep, strategic and played at every level, with a choice of main line, Exchange or anti-Berlin.',
      overview: "The bishop on b5 does not threaten to win e5 at once, but it creates lasting pressure on Black's centre. White typically follows with O-O, Re1, c3 and d4 to build an ideal centre, while the bishop retreats to a4, b3 and c2 to aim at the black king. Black chooses between the Morphy Defence 3...a6, the Berlin 3...Nf6 and older lines such as 3...Bc5. Plans are long-term: space, manoeuvres and well-timed central breaks.",
      choosing: 'The Closed main line is the richest but needs the most study. The Exchange Variation gives a clear endgame-oriented plan with little theory. Against the Berlin, the 4.d3 anti-Berlin keeps queens on and steers the game into slow Spanish manoeuvring.',
      terms: [
        'Morphy Defence',
        'Closed Ruy Lopez',
        'Open Ruy Lopez',
        'Berlin Defence',
        'Anti-Berlin',
        'Marshall Attack',
        'Exchange Variation',
        "Noah's Ark trap"
      ]
    },
    {
      id: 'wf-scotch',
      side: 'white',
      group: 'e4',
      name: 'Scotch Game',
      aliases: ['Scotch Opening', '3.d4'],
      eco: 'C44-C45',
      root: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'd2d4'],
      summary: '3.d4 opens the centre at once: White trades the d-pawn for e5 and gets free piece play and a pawn on e4 against none.',
      overview: 'With 3.d4 exd4 4.Nxd4 White gives up the slow build-up of the Italian and Spanish for immediate central space. The main lines are 4...Nf6 and 4...Bc5. In the Schmidt Variation, Nxc6 and e5 cramp Black, who gets the half-open b-file and pressure against the advanced pawn. The Scotch Gambit (4.Bc4) is covered with the gambits.',
      choosing: 'One main variation covers the family. Play it if you like open positions, clear plans and less theory than the Ruy Lopez.',
      terms: ['Schmidt Variation', 'Classical Scotch', 'Mieses Variation', 'half-open b-file']
    },
    {
      id: 'wf-four-knights',
      side: 'white',
      group: 'e4',
      name: 'Four Knights Game',
      aliases: ['4.d4 Four Knights', 'Scotch Four Knights'],
      eco: 'C46-C49',
      root: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'b1c3'],
      summary: 'Develop both knights first, then open the centre with 4.d4. Healthy, logical positions with few traps for White.',
      overview: "3.Nc3 develops before committing. Against 3...Nf6, 4.d4 gives the Scotch Four Knights: after the exchange on d4 and Nxc6, White targets Black's queenside pawns and pins with Bg5. Against other third moves, such as 3...Bc5 or 3...g6, White grabs the centre at once, sometimes with the fork trick Nxe5 and d4. The Halloween Gambit (4.Nxe5) is covered with the gambits.",
      choosing: 'A single variation is enough: 4.d4 against the Four Knights and a quick d4 against the Three Knights. Good for beginners who want sound development and an open game.',
      terms: ['Scotch Four Knights', 'Three Knights', 'fork trick', 'Bg5 pin']
    },
    {
      id: 'wf-vienna',
      side: 'white',
      group: 'e4',
      name: 'Vienna Game',
      aliases: ['2.Nc3'],
      eco: 'C25-C29',
      root: ['e2e4', 'e7e5', 'b1c3'],
      summary: '2.Nc3 supports e4 and keeps f4 in reserve. The g3 and Bg2 system gives a sound, flexible game with long-diagonal pressure.',
      overview: "With 2.Nc3 White develops a knight and keeps the f-pawn free. In the positional g3 system the king's bishop goes to g2, where it presses on d5 and b7; d3, Nge2 and a later f4 give a kingside plan. If Black frees the game with ...d5, an exchange on c3 can give White the half-open b-file. The sharper Vienna Gambit (3.f4) is covered with the gambits.",
      choosing: 'The g3 system is the positional choice covered here; it suits players who like flexible fianchetto set-ups. Attacking players can switch to the Vienna Gambit.',
      terms: ['fianchetto', 'long diagonal', 'half-open b-file', 'Vienna Gambit']
    },
    {
      id: 'wf-petroff',
      side: 'white',
      group: 'e4',
      name: 'Petroff Defence',
      aliases: ['Petrov Defence', 'Russian Game'],
      eco: 'C42-C43',
      root: ['e2e4', 'e7e5', 'g1f3', 'g8f6'],
      summary: 'Black counter-attacks e4 instead of defending e5. Take on e5, retreat calmly and play 5.Nc3 for quick development and long castling.',
      overview: "The Petroff is one of Black's most solid defences. After 3.Nxe5 d6 4.Nf3 Nxe4 the position is symmetrical; White's extra tempo must be used for development. The 5.Nc3 line accepts doubled c-pawns for open lines and the plan Be3, Qd2 and O-O-O. Black must avoid copying White: 3...Nxe4? 4.Qe2 costs material. The Stafford Gambit, 3...Nc6, is a dubious Black gambit with traps.",
      choosing: 'One variation is enough for most players. The 5.Nc3 line gives clear, active play with little theory; the classical 5.d4 lines are deeper and more theoretical.',
      terms: ['Petrov', 'copycat line', 'Stafford Gambit', 'opposite-side castling']
    },
    {
      id: 'wf-sicilian',
      side: 'white',
      group: 'e4',
      name: 'Sicilian Defence',
      aliases: ['Open Sicilian', 'Anti-Sicilian systems'],
      eco: 'B20-B99',
      root: ['e2e4', 'c7c5'],
      summary: '1...c5 fights for d4 from the side and creates unbalanced games. White chooses between the Open Sicilian and quieter anti-Sicilian systems.',
      overview: "Against 1...c5 White's most ambitious plan is 2.Nf3 and 3.d4: the Open Sicilian, where White trades the d-pawn for Black's c-pawn, gains a lead in development and often attacks, while Black gets the half-open c-file and an extra central pawn. Anti-Sicilians avoid the huge theory: 3.Bb5 lines after 2.Nf3, the Alapin 2.c3, which aims for a pawn centre, and the Closed Sicilian 2.Nc3 with g3 or f4.",
      choosing: 'Ambitious players with time for theory: the Open Sicilian. For less theory: 3.Bb5 (Rossolimo against 2...Nc6, Moscow against 2...d6) after 2.Nf3, or the Alapin 2.c3. Players who like slow kingside attacks: the Closed Sicilian or Grand Prix with 2.Nc3.',
      terms: [
        'Open Sicilian',
        'English Attack',
        'Yugoslav Attack',
        'Rossolimo',
        'Moscow Variation',
        'Alapin',
        'Closed Sicilian',
        'Grand Prix Attack'
      ]
    },
    {
      id: 'wf-french',
      side: 'white',
      group: 'e4',
      name: 'French Defence',
      aliases: ['1...e6'],
      eco: 'C00-C19',
      root: ['e2e4', 'e7e6'],
      summary: 'Black supports ...d5 with ...e6 and accepts a passive c8 bishop for a solid centre. White chooses how to handle the d5 pawn on move three.',
      overview: 'After 1.e4 e6 2.d4 d5 White must decide about the attack on e4. 3.e5 (Advance) locks the centre and gains space; 3.Nd2 (Tarrasch) defends e4 and avoids the pin ...Bb4; 3.Nc3 is the most direct and meets the Winawer, Classical and Rubinstein. In many lines White gets a d4-e5 pawn chain and kingside space, while Black attacks the chain with ...c5 and ...f6 and tries to free the light-squared bishop.',
      choosing: 'For a clear plan and fewer forcing lines: the Advance. For solid, flexible play: the Tarrasch 3.Nd2. For the most testing and sharpest positions, especially against the Winawer: 3.Nc3, which needs the most study.',
      terms: [
        'pawn chain',
        'Advance Variation',
        'Tarrasch Variation',
        'Winawer',
        'Classical French',
        'Steinitz Variation',
        'Rubinstein Variation',
        'bad bishop'
      ]
    },
    {
      id: 'wf-caro-kann',
      side: 'white',
      group: 'e4',
      name: 'Caro-Kann Defence',
      aliases: ['1...c6'],
      eco: 'B10-B19',
      root: ['e2e4', 'c7c6'],
      summary: 'Black prepares ...d5 with ...c6, keeping the c8 bishop free. White chooses between the main line 3.Nc3, the space-gaining Advance and the Panov IQP attack.',
      overview: "The Caro-Kann is one of Black's most solid replies to 1.e4. After 2.d4 d5 White can defend e4 with 3.Nc3 (or 3.Nd2), when Black usually exchanges and develops with ...Bf5 or ...Nd7; advance with 3.e5, gaining space while Black's bishop comes to f5 before ...e6; or exchange with 3.exd5 cxd5 4.c4, the Panov, which often leads to an isolated queen's pawn and active piece play.",
      choosing: 'Positional players: 3.Nc3 with the h4-h5 plan. Players who like space and kingside attacks: the Advance. Players who like open, active positions and IQP play: the Panov.',
      terms: [
        'Classical Caro-Kann',
        'Advance Variation',
        'Short System',
        'Panov Attack',
        'isolated queen pawn',
        'IQP'
      ]
    },
    {
      id: 'wf-scandinavian',
      side: 'white',
      group: 'e4',
      name: 'Scandinavian Defence',
      aliases: ['Centre Counter Defence', '1...d5'],
      eco: 'B01',
      root: ['e2e4', 'd7d5'],
      summary: "Black challenges e4 at once. Take on d5, develop with gain of time against Black's queen and keep a space advantage.",
      overview: 'After 1.e4 d5 2.exd5 Black usually recaptures with the queen, which then has to move again after Nc3. White gains time, builds a centre with d4 and develops naturally, sometimes castling queenside. Black aims for a solid, Caro-Kann-like structure with ...c6, ...Bf5 and ...e6. Against 2...Nf6 White can keep the pawn for a while or build a centre with d4 and c4.',
      choosing: 'One variation covers the family: 3.Nc3 against 2...Qxd5, and d4 with Nf3 and c4 against 2...Nf6.',
      terms: ['Centre Counter', '...Qa5 line', '...Qd6 line', 'Modern Variation']
    },
    {
      id: 'wf-pirc',
      side: 'white',
      group: 'e4',
      name: 'Pirc Defence',
      aliases: ['Pirc-Ufimtsev Defence', '1...d6'],
      eco: 'B07-B09',
      root: ['e2e4', 'd7d6'],
      summary: 'Black lets White build a big centre and attacks it later. Simple, sound development with Nf3, Be2 and O-O keeps the centre safe.',
      overview: "In the Pirc Black plays ...d6, ...Nf6 and ...g6 with ...Bg7, then strikes at White's centre with ...e5 or ...c5. White can attack with f4 (Austrian) or Be3 and Qd2, but the Classical System with Nf3, Be2 and O-O gives a solid edge with little risk. The same set-up also works against the Modern Defence, 1...g6.",
      choosing: 'The Classical System covered here is the low-risk choice. Sharper players may later study the Austrian Attack with f4 or the Be3 and Qd2 plans.',
      terms: ['Classical System', 'Austrian Attack', 'Modern Defence (1...g6) often transposes', 'hypermodern']
    },
    {
      id: 'wf-alekhine',
      side: 'white',
      group: 'e4',
      name: "Alekhine's Defence",
      aliases: ['1...Nf6 against 1.e4'],
      eco: 'B02-B05',
      root: ['e2e4', 'g8f6'],
      summary: "Black provokes White's pawns forward to attack them later. Gain space with e5 and d4, then support the centre with pieces rather than more pawns.",
      overview: 'After 1.e4 Nf6 2.e5 Nd5 3.d4 d6 White has a space advantage, but advanced pawns can become targets. The Four Pawns Attack (c4 and f4) is ambitious and theoretical; the Modern Variation 4.Nf3 keeps the centre supported by pieces and castles quickly. Black pressures e5 with ...d6, ...Bg4 and ...Nc6, or fianchettoes with ...g6.',
      choosing: 'The Modern Variation is the sound, practical choice for most players and is covered here.',
      terms: ['Modern Variation', 'Four Pawns Attack', 'Exchange Variation', 'overextended centre']
    },
    {
      id: 'wf-queens-gambit',
      side: 'white',
      group: 'd4',
      name: "Queen's Gambit",
      aliases: ['1.d4 d5 2.c4', 'Queen Pawn Game with c4'],
      eco: 'D06-D69',
      root: ['d2d4', 'd7d5', 'c2c4'],
      summary: "1.d4 d5 2.c4 attacks Black's centre from the side. Black accepts, declines with ...e6 or supports d5 with ...c6, and each choice gives its own structure.",
      overview: 'The c-pawn challenges d5, aiming to win the centre or open the c-file. It is not a real sacrifice: White can nearly always regain c4. Against the Accepted White builds a free centre with e3 or e4 and Bxc4; against the Declined (...e6) White can fix the Carlsbad structure with cxd5 and start a minority attack; against the Slav (...c6) White regains c4 with a4, e3 and Bxc4, then fights for e4.',
      choosing: 'Learn the main system first, then one plan against each defence: the Exchange Variation against the QGD gives a clear plan, and the 3.Nf3 and 4.Nc3 main line handles the Slav. Players who prefer a fianchetto can steer towards the Catalan.',
      terms: [
        "Queen's Gambit Accepted",
        "Queen's Gambit Declined",
        'Slav',
        'Semi-Slav',
        'Carlsbad structure',
        'minority attack',
        'Elephant trap'
      ]
    },
    {
      id: 'wf-catalan',
      side: 'white',
      group: 'd4',
      name: 'Catalan Opening',
      aliases: ['Catalan'],
      eco: 'E01-E09',
      root: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g2g3'],
      summary: "Queen's Gambit pressure plus a fianchettoed bishop on g2. If Black takes on c4, White regains it and keeps lasting long-diagonal pressure.",
      overview: 'White combines d4 and c4 with g3 and Bg2. The bishop presses down the long diagonal against b7 and the queenside. In the Open Catalan Black takes on c4 and White usually regains the pawn with Qa4+ or Qc2, keeping queenside pressure; in the Closed Catalan Black holds d5 with ...c6 and ...Nbd7, and White plays for e4 or more queenside space.',
      choosing: 'One variation covers it. Choose the Catalan if you like long-term positional pressure and are happy to give a pawn for a while.',
      terms: ['Open Catalan', 'Closed Catalan', 'long diagonal', 'Qa4+']
    },
    {
      id: 'wf-london',
      side: 'white',
      group: 'd4',
      name: 'London System',
      aliases: ['London', 'Bf4 system'],
      eco: 'D02, A46-A48',
      root: ['d2d4', 'd7d5', 'c1f4'],
      summary: 'A system rather than a line: d4, Bf4, e3, c3, Nf3, Nbd2 and Bd3 against almost anything. Little theory and a very solid structure.',
      overview: "White develops the dark-squared bishop to f4 before e3 so it is not shut in, and builds the c3-d4-e3 pyramid. Typical plans are Ne5 with f4 and a kingside attack, or a slow central break with e4 or dxc5. Black's best-known counters are ...c5 with ...Qb6 against b2, and ...Bd6 or ...Nh5 to trade the f4 bishop.",
      choosing: 'One variation covers it, played the same way against ...d5 and ...Nf6. Good for players who want a dependable set-up and middlegame understanding over memory.',
      terms: ['pyramid c3-d4-e3', 'Qb3 against ...Qb6', 'Ne5 outpost', 'Bg3']
    },
    {
      id: 'wf-colle',
      side: 'white',
      group: 'd4',
      name: 'Colle System',
      aliases: ['Colle-Zukertort', 'Zukertort System'],
      eco: 'D04-D05',
      root: ['d2d4', 'd7d5', 'g1f3', 'g8f6', 'e2e3'],
      summary: 'd4, Nf3, e3 and Bd3, with b3 and Bb2 in the Zukertort: a quiet set-up with a hidden plan of Ne5, f4 and a kingside attack.',
      overview: "White develops modestly with e3 and Bd3. In the classical Colle White plays c3 and prepares e4; in the Colle-Zukertort the queen's bishop goes to b2 instead, and both bishops aim at the black king. A knight on e5 supported by f4 is the typical attacking set-up, and the Greek gift Bxh7+ appears often. Black fights for e4 with ...c5, ...b6 and ...Bb7.",
      choosing: 'The Zukertort is covered here; it is more active than the classical Colle and suits players who like a set plan and kingside attacks.',
      terms: ['Zukertort', 'Ne5 and f4', 'Greek gift', 'e4 break']
    },
    {
      id: 'wf-trompowsky',
      side: 'white',
      group: 'd4',
      name: 'Trompowsky Attack',
      aliases: ['Trompowsky', '2.Bg5'],
      eco: 'A45',
      root: ['d2d4', 'g8f6', 'c1g5'],
      summary: "2.Bg5 sidesteps the big Indian defences at move two. White is happy to give the bishop for a knight to damage Black's pawns or gain time for e4.",
      overview: 'The bishop threatens Bxf6 with doubled pawns. Black replies with ...Ne4, ...e6, ...d5 or ...c5, and the game often becomes original at once. White aims for e4 and a broad centre, or a solid c3-d4-e3 structure. A frequent theme is b2: once the bishop has left c1, ...c5 and ...Qb6 can hit it.',
      choosing: "One variation covers it. Good for players who want to avoid King's Indian and Nimzo-Indian theory and like imbalanced positions.",
      terms: ['Bxf6', 'doubled pawns', '...Ne4', 'b2 pawn']
    },
    {
      id: 'wf-kings-indian',
      side: 'white',
      group: 'd4',
      name: "King's Indian Defence",
      aliases: ['KID'],
      eco: 'E60-E99',
      root: ['d2d4', 'g8f6', 'c2c4', 'g7g6'],
      summary: 'Black lets White build a big centre, then hits it with ...e5 or ...c5 and often attacks on the kingside. White chooses how to build and protect the centre.',
      overview: "After ...g6, ...Bg7, ...d6 and ...O-O Black strikes with ...e5 or ...c5. When White answers ...e5 with d5, the centre locks and both sides attack on the wing where their pawn chain points: White on the queenside, Black on the kingside. White's main systems are the Classical (Nf3, Be2, O-O), the Samisch (f3, Be3, Qd2) and the Fianchetto (g3, Bg2).",
      choosing: 'The Classical is the main battleground and needs the most study. The Samisch suits players who like a solid centre and kingside pawn storms. The Fianchetto is the safest and most positional, keeping the king well protected.',
      terms: [
        'Classical Variation',
        'Bayonet Attack',
        'Samisch Variation',
        'Fianchetto Variation',
        'Panno',
        'pawn chain',
        'opposite-side castling'
      ]
    },
    {
      id: 'wf-grunfeld',
      side: 'white',
      group: 'd4',
      name: 'Grunfeld Defence',
      aliases: ['Gruenfeld Defence', 'Grunfeld'],
      eco: 'D70-D99',
      root: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'd7d5'],
      summary: 'Black invites White to build a big pawn centre and then attacks it with ...c5, ...Nc6 and the g7 bishop. White either takes the centre at once or builds it with pieces.',
      overview: "With 3...d5 Black challenges c4 and invites cxd5 and e4. In the Exchange Variation White gets a broad c3-d4-e4 centre and must defend it against ...c5, ...Nc6 and ...Bg7; in the Russian System White plays Nf3 and Qb3, forces ...dxc4 and builds the centre with e4 while the queen recaptures on c4. Black's long-diagonal bishop and quick counterplay are the main dangers.",
      choosing: 'The Exchange Variation gives the clearest structure and is the main test. The Russian System is more flexible but very theoretical; learn the main ideas against ...Bg4, ...a6 and ...Na6 first.',
      terms: ['Exchange Variation', 'Russian System', 'Qb3', 'big centre', 'long diagonal']
    },
    {
      id: 'wf-nimzo-indian',
      side: 'white',
      group: 'd4',
      name: 'Nimzo-Indian Defence',
      aliases: ['Nimzo-Indian', 'Nimzo'],
      eco: 'E20-E59',
      root: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'b1c3', 'f8b4'],
      summary: "Black pins the c3 knight to fight for e4 and may give up the bishop to double White's pawns. White chooses between calm development and avoiding the doubled pawns.",
      overview: 'The pin ...Bb4 stops White from playing e4 easily and threatens ...Bxc3+ with doubled c-pawns. With 4.e3 (Rubinstein) White develops quickly and accepts the doubled pawns for the bishop pair and a strong centre; with 4.Qc2 (Classical) White prepares to recapture on c3 with the queen, keeping a healthy structure and the bishop pair at the cost of some time.',
      choosing: 'The Rubinstein 4.e3 suits players who like quick development and a flexible centre. The Classical 4.Qc2 suits players who want the bishop pair without structural damage and are happy with slower, positional play.',
      terms: [
        'Rubinstein System',
        'Classical Variation',
        '4.Qc2',
        'bishop pair',
        'doubled c-pawns',
        'Hubner set-up'
      ]
    },
    {
      id: 'wf-dutch',
      side: 'white',
      group: 'd4',
      name: 'Dutch Defence',
      aliases: ['1...f5'],
      eco: 'A80-A99',
      root: ['d2d4', 'f7f5'],
      summary: "1...f5 fights for e4 and prepares kingside play. White's fianchetto with g3 and Bg2 aims straight at e4 and fits every Black set-up.",
      overview: "The f5 pawn controls e4 but loosens Black's king. White fianchettoes, castles, plays c4 and Nc3 and chooses a plan by Black's structure: d5 against the Leningrad (...g6), trading dark-squared bishops against the Stonewall (...d5, ...e6, ...c6) and an e4 break against the Classical (...e6 and ...Be7). The Staunton Gambit 2.e4 is covered with the gambits.",
      choosing: 'One variation covers the family: the fianchetto system, adapted to the Leningrad, Stonewall and Classical set-ups.',
      terms: ['Leningrad Dutch', 'Stonewall Dutch', 'Classical Dutch', 'e4 square', 'Staunton Gambit']
    },
    {
      id: 'wf-benoni',
      side: 'white',
      group: 'd4',
      name: 'Benoni Defence',
      aliases: ['Modern Benoni'],
      eco: 'A43-A44, A56-A79',
      root: ['d2d4', 'g8f6', 'c2c4', 'c7c5'],
      summary: "Against ...c5, advance d5 and build the classical centre with Nc3, e4, Nf3, Be2 and O-O. White's central majority and the e5 break are the main assets.",
      overview: 'After 3.d5 e6 4.Nc3 exd5 5.cxd5 d6 White has a central pawn majority (d5 and e4 against d6) and Black a queenside majority. White develops calmly, attacks d6 with a knight from c4 and prepares e4-e5. Black plays for ...b5, pressure on e4 with ...Re8 and the g7 bishop, and the e5 square. The Benko Gambit (3...b5) is a Black gambit.',
      choosing: 'The Classical System covered here is the simplest sound approach. Sharper options such as the Taimanov f4 and Bb5+ lines need more study.',
      terms: ['Modern Benoni', 'Czech Benoni', 'Benko Gambit', 'central majority', 'e5 break', 'Nd2-c4']
    },
    {
      id: 'wf-english',
      side: 'white',
      group: 'flank',
      name: 'English Opening',
      aliases: ['1.c4', 'English'],
      eco: 'A10-A39',
      root: ['c2c4'],
      summary: "1.c4 controls d5 from the flank. Flexible: White adapts to Black's set-up and can transpose to 1.d4 structures when it suits.",
      overview: "The English is a flank opening: White fights for the centre with the c-pawn, usually fianchettoes the king's bishop and plays on the queenside with Rb1, a3 and b4. Against 1...e5 it is a Sicilian with colours reversed and an extra move; against 1...c5 it is the Symmetrical English; against 1...Nf6 (the Anglo-Indian) White can keep a pure English or transpose to the Queen's Gambit, Nimzo-Indian or King's Indian.",
      choosing: 'Learn one set-up against each Black first move: g3 and Bg2 against 1...e5, fianchetto and a timely d4 against 1...c5, and 2.Nc3 with a choice of g3 or d4 against 1...Nf6.',
      terms: [
        'Reversed Sicilian',
        'Symmetrical English',
        'Anglo-Indian',
        'Botvinnik set-up',
        'Mikenas Attack',
        'fianchetto'
      ]
    },
    {
      id: 'wf-reti',
      side: 'white',
      group: 'flank',
      name: 'Reti Opening',
      aliases: ['Reti', '1.Nf3 d5 2.c4'],
      eco: 'A09',
      root: ['g1f3', 'd7d5', 'c2c4'],
      summary: "1.Nf3 and 2.c4 attack d5 from the side. Flexible: it can stay a Reti or transpose to the English, Catalan or Queen's Gambit.",
      overview: "White develops the knight first and hits d5 with c4 instead of occupying the centre. Often both bishops are fianchettoed and aim at the centre from afar. Black can hold d5 with ...e6 or ...c6, gain space with ...d4 or take on c4. White keeps d4 in reserve and picks the structure that suits Black's set-up.",
      choosing: 'One variation covers it. Choose it for flexible positional play and a wide choice of transpositions.',
      terms: ['double fianchetto', 'hypermodern', '...d4 advance', 'transposition']
    },
    {
      id: 'wf-kia',
      side: 'white',
      group: 'flank',
      name: "King's Indian Attack",
      aliases: ['KIA', 'Barcza System'],
      eco: 'A07-A08',
      root: ['g1f3'],
      summary: 'A set-up, not a sequence: Nf3, g3, Bg2, O-O, d3, Nbd2 and e4. Easy to learn and full of kingside attacking ideas.',
      overview: "White plays a King's Indian Defence with colours reversed and an extra move. After e4 and often e5 White's kingside space supports an attack with Re1, Nf1, h4, Bf4 and Ng5, while Black counters on the queenside with ...b5, ...b4 and ...a5. The same set-up can be used against French and Caro-Kann structures after 1.e4.",
      choosing: 'One variation covers it. Good for players who want one plan against almost everything.',
      terms: ["reversed King's Indian", 'e4-e5 wedge', 'Nf1-h2 manoeuvre', 'kingside attack']
    },
    {
      id: 'wf-bird',
      side: 'white',
      group: 'flank',
      name: "Bird's Opening",
      aliases: ['1.f4', 'Bird'],
      eco: 'A02-A03',
      root: ['f2f4'],
      summary: "1.f4 grabs the e5 square: a Dutch Defence with colours reversed. Kingside chances, but know the answer to From's Gambit.",
      overview: "White controls e5 with the f-pawn, often fianchettoes the queen's bishop and builds kingside play with Nf3, e3, Be2 and O-O, sometimes followed by Qe1-h4. The e1-h4 diagonal is loosened, which Black can test at once with 1...e5, From's Gambit.",
      choosing: "One variation covers it: a solid reversed-Dutch set-up, with 4.Nf3 ready against From's Gambit.",
      terms: ["From's Gambit", 'reversed Dutch', 'e5 square', 'Qe1-h4']
    }
  ],
  repertoire: [
    {
      id: 'w-italian-giuoco',
      side: 'white',
      group: 'e4',
      familyId: 'wf-italian',
      family: 'Italian Game',
      short: 'Giuoco Piano (c3 and d3)',
      name: 'Italian Game: Giuoco Piano (c3 and d3)',
      aliases: ['Giuoco Pianissimo', 'Quiet Italian'],
      eco: 'C54',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'f8c5', 'c2c3'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.c3',
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 12,
      summary: 'A classical, low-risk set-up: bishop on c4, a compact centre with c3 and d3, and slow pressure. Easy to learn, still played at the top.',
      idea: "White builds a compact centre with c3 and d3 and keeps the d3-d4 break in reserve. The bishop eyes f7, the queen's knight travels d2-f1-g3, and moves such as h3, a4 and Re1 improve the position before White strikes in the centre or on the kingside. It is a battle of manoeuvres rather than an early fight.",
      plans: {
        white: [
          'Keep the d3-d4 break ready, ideally after Re1 and Nbd2-f1-g3.',
          'Play a4 to gain queenside space and keep a retreat for the bishop on a2.',
          'Use h3 to stop ...Bg4 pinning the f3 knight.'
        ],
        black: [
          'Mirror the set-up with ...d6, ...a6 and ...Ba7 so the bishop is not hit by d4.',
          'Break with ...d5 if White is slow.',
          'Manoeuvre ...Ne7-g6 and prepare ...f5 or ...d5.'
        ]
      },
      responses: [
        {
          moves: '4...Nf6 5.d3',
          name: 'Main line',
          note: "The modern main line. Castle, then choose between a4, Re1, h3 and Nbd2 depending on Black's set-up.",
          line: 'main'
        },
        {
          moves: '4...Nf6 5.d4',
          name: 'The old main line',
          note: 'A sharper choice: 5...exd4 6.cxd4 Bb4+ 7.Bd2 Bxd2+ 8.Nbxd2 d5 gives White an isolated d-pawn and active pieces.',
          line: 'd4'
        },
        {
          moves: '4...Qe7 5.d4',
          name: 'Holding e5',
          note: 'Black keeps a pawn on e5. After 5...Bb6 White castles and gains space with a4 and h3.',
          line: 'qe7'
        },
        {
          moves: '3...Nf6 4.d3',
          name: 'Two Knights Defence',
          note: 'A different variation: see the Two Knights with 4.d3. After 4...Bc5 5.c3 it transposes here.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'f1c4', san: 'Bc4', note: 'The bishop aims at f7, the weakest point near the black king.' },
          { uci: 'f8c5', san: 'Bc5' },
          { uci: 'c2c3', san: 'c3', note: 'Prepares d4 and gives the queen a route to b3.' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'd2d3', san: 'd3', note: 'Calm: e4 is defended and d4 is kept for later.' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'f1e1', san: 'Re1' },
          { uci: 'a7a6', san: 'a6', note: 'Makes room for ...Ba7, so a later d4 will not gain time on the bishop.' },
          { uci: 'c4b3', san: 'Bb3' },
          { uci: 'c5a7', san: 'Ba7' },
          { uci: 'b1d2', san: 'Nbd2', note: 'The knight heads for f1 and g3, the typical Italian manoeuvre.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '4...Nf6 5.d3: the Giuoco Pianissimo',
          kind: 'Main line',
          summary: 'Slow and strategic: a4 gains space and gives the bishop a2, Re1 and h3 prepare the knight tour Nbd2-f1-g3 and, later, d4.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd2d3', san: 'd3', note: 'Calm: e4 is defended and d4 is kept for later.' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'a7a6', san: 'a6', note: 'Prepares ...Ba7, so a later d4 will not hit the bishop.' },
            { uci: 'a2a4', san: 'a4', note: 'Gains queenside space and keeps a2 for the bishop.' },
            { uci: 'c5a7', san: 'Ba7' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'h2h3', san: 'h3', note: 'Stops ...Bg4 and ...Ng4 before the knight leaves d2.' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'b1d2', san: 'Nbd2' }
          ]
        },
        {
          id: 'd4',
          name: '4...Nf6 5.d4: the open centre',
          kind: 'Alternative',
          summary: 'The classical main line: White builds a pawn centre at once, Black hits back with ...d5, and White gets an isolated d-pawn with free piece play.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd2d4', san: 'd4', note: 'White strikes in the centre at once.' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'c5b4', san: 'Bb4+' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'b4d2', san: 'Bxd2+' },
            { uci: 'b1d2', san: 'Nbxd2' },
            { uci: 'd7d5', san: 'd5', note: 'Black must break up the centre before e5 cramps him.' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'd1b3', san: 'Qb3', note: 'Pressure on d5 and b7; White will castle and use the isolated d-pawn for activity.' }
          ]
        },
        {
          id: 'qe7',
          name: '4...Qe7: Black holds e5',
          kind: 'Sideline',
          summary: 'Black keeps a pawn on e5 with the queen. White castles, gains space with a4 and h3 and keeps the centre tension.',
          moves: [
            { uci: 'd8e7', san: 'Qe7', note: 'The queen supports e5 so that d4 does not win the centre.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c5b6', san: 'Bb6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'h2h3', san: 'h3', note: 'Stops ...Bg4; White keeps a broad centre and an easy game.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: "Legal's mate after 3...d6",
          text: 'If Black meets 3.Bc4 with 3...d6 and pins with ...Bg4 too early, Nxe5 breaks the pin: 6...Bxd1? 7.Bxf7+ Ke7 8.Nd5 is mate. Even without the mate, White wins material.',
          uci: [
            'e2e4',
            'e7e5',
            'g1f3',
            'b8c6',
            'f1c4',
            'd7d6',
            'b1c3',
            'c8g4',
            'h2h3',
            'g4h5',
            'f3e5',
            'h5d1',
            'c4f7',
            'e8e7',
            'c3d5'
          ]
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Losing the Italian bishop to ...Na5',
          text: 'In slow lines Black often plays ...Na5 to trade the c4 bishop. Prepare a retreat in advance with a4 and Ba2, or Bb3 with the answer Bc2.'
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'Too slow allows ...d5',
          text: 'If White only shuffles, Black frees the game with ...d5 and stands at least equal. Keep the d3-d4 break ready and use it when Black loosens e5.'
        }
      ],
      transpositions: [
        {
          to: 'w-four-knights-scotch',
          note: 'After 3...Nf6 4.Nc3 the Italian can turn into a Four Knights with Bc4.'
        },
        {
          to: 'w-italian-two-knights-d3',
          note: '1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.d3 Bc5 5.c3 reaches the main line 4.c3 Nf6 5.d3.'
        }
      ],
      lessons: ['openings-1', 'white-openings-1', 'white-openings-20']
    },
    {
      id: 'w-italian-two-knights-d3',
      side: 'white',
      group: 'e4',
      familyId: 'wf-italian',
      family: 'Italian Game',
      short: 'Two Knights: 4.d3',
      name: 'Italian Game: Two Knights with 4.d3',
      aliases: ['Modern Two Knights', '4.d3 Two Knights'],
      eco: 'C55',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'd2d3'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.d3',
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 10,
      summary: 'Against the Two Knights, 4.d3 calmly defends e4 and steers the game into slow Italian structures instead of the forcing 4.Ng5 lines.',
      idea: '4.d3 protects e4 and keeps every slow Italian plan: c3, O-O, Re1, the knight tour Nbd2-f1-g3 and, at the right moment, d4. Black has more choice than in the Giuoco: ...Bc5 usually transposes to it, while ...Be7 with ...d6 and ...O-O is very solid and often comes with ...Na5 against the c4 bishop. White keeps the pieces on and plays a long middlegame.',
      plans: {
        white: [
          'Build c3, O-O, Re1 and Nbd2-f1-g3, keeping d4 in reserve.',
          'Keep the bishop: answer ...Na5 with Bb5 or Bb3, or prepare a4 and Ba2.',
          'Use h3 against ...Bg4 and ...Ng4 ideas.'
        ],
        black: [
          'Transpose to the Giuoco with ...Bc5, or choose ...Be7, ...d6 and ...O-O.',
          'Trade the c4 bishop with ...Na5.',
          'Break with ...d5 when White is slow.'
        ]
      },
      responses: [
        {
          moves: '4...Bc5 5.c3',
          name: 'Giuoco transposition',
          note: 'The game becomes the Giuoco Piano: O-O, Re1 and a4 or Bb3. See that variation for the plans.',
          line: 'bc5'
        },
        {
          moves: '4...Be7 5.O-O',
          name: '...Be7 set-up',
          note: 'Black keeps the bishop safe from d4. After ...d6 and ...O-O play c3 and Re1; meet ...Na5 with Bb5 and a regrouping to c2.',
          line: 'be7'
        },
        {
          moves: '4...h6 5.O-O',
          note: 'Black stops Ng5 and Bg5. Continue with c3, Re1 and Nbd2; ...d6, ...g6 and ...Bg7 is a typical set-up.',
          line: 'h6'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'f1c4', san: 'Bc4', note: 'The bishop aims at f7.' },
          { uci: 'g8f6', san: 'Nf6', note: 'The Two Knights Defence: Black counter-attacks e4.' },
          { uci: 'd2d3', san: 'd3', note: 'Defends e4 calmly; the sharp 4.Ng5 is a separate variation.' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'f1e1', san: 'Re1', note: 'Supports e4 and frees f1 for the knight.' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'c2c3', san: 'c3' },
          { uci: 'c6a5', san: 'Na5', note: 'Black goes after the Italian bishop.' },
          { uci: 'c4b5', san: 'Bb5', note: 'The bishop sidesteps and will drop back to a4 and c2.' },
          { uci: 'a7a6', san: 'a6' },
          { uci: 'b5a4', san: 'Ba4' },
          { uci: 'b7b5', san: 'b5' },
          { uci: 'a4c2', san: 'Bc2' }
        ]
      },
      lines: [
        {
          id: 'bc5',
          name: '4...Bc5 5.c3: into the Giuoco',
          kind: 'Main line',
          summary: 'The most common reply. After 5.c3 the position is a Giuoco Piano; a4, Re1 and h3 are the typical slow moves.',
          moves: [
            { uci: 'f8c5', san: 'Bc5' },
            { uci: 'c2c3', san: 'c3', note: 'Prepares d4 and gives the queen a route to b3; this is now a Giuoco Piano.' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'a2a4', san: 'a4', note: 'Queenside space, and a2 becomes a retreat for the bishop.' },
            { uci: 'a7a5', san: 'a5' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'h2h3', san: 'h3', note: 'Stops ...Bg4 and ...Ng4; Nbd2-f1-g3 comes next.' }
          ]
        },
        {
          id: 'be7',
          name: '4...Be7: the solid set-up',
          kind: 'Alternative',
          summary: 'Black plays ...Be7, ...d6 and ...O-O and chases the bishop with ...Na5. White regroups Bb5-a4-c2, reaching a Ruy Lopez-like structure with the pawn on d3.',
          moves: [
            { uci: 'f8e7', san: 'Be7', note: 'Solid: the bishop cannot be hit by d4 or b4.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'c6a5', san: 'Na5', note: 'Black chases the c4 bishop.' },
            { uci: 'c4b5', san: 'Bb5', note: 'Keeps the bishop; it will drop back to a4 and c2.' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5a4', san: 'Ba4' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'a4c2', san: 'Bc2' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'b1d2', san: 'Nbd2', note: 'The knight heads for f1 and g3, as in the Ruy Lopez.' }
          ]
        },
        {
          id: 'h6',
          name: '4...h6: no Ng5',
          kind: 'Sideline',
          summary: 'Black rules out Ng5 and Bg5 and often fianchettoes. White continues with the standard set-up and keeps d4 in reserve.',
          moves: [
            { uci: 'h7h6', san: 'h6', note: 'Prevents Ng5 and Bg5.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'b1d2', san: 'Nbd2', note: 'The usual knight tour: f1, then g3 or e3.' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'h2h3', san: 'h3' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Ignoring ...Na5',
          text: 'If the bishop simply stays on c4, ...Nxc4 and ...dxc4 gives Black the bishop pair and doubled pawns for White. Retreat with Bb5 or Bb3 in time, or play a4 and Ba2 beforehand.'
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'No plan means easy equality',
          text: '4.d3 does not fight for an opening advantage; the battle is in the middlegame. Without a plan, such as c3 and d4 or Nf1-g3 with a kingside build-up, Black equalises comfortably.'
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'An early Bg5 pin',
          text: 'Pinning with Bg5 before castling invites ...h6 and ...g5, and the bishop may end up shut out on g3. Castle first and use Bg5 only when ...g5 would weaken Black more than you.'
        }
      ],
      transpositions: [
        {
          to: 'w-italian-giuoco',
          note: '4...Bc5 5.c3 reaches the Giuoco Piano main line, 3...Bc5 4.c3 Nf6 5.d3.'
        }
      ],
      lessons: ['white-openings-20'],
      uncertain: 'Move orders in the ...Be7 lines vary a lot; the Bb5-a4-c2 regrouping is a common plan rather than a fixed main line.'
    },
    {
      id: 'w-italian-knight-attack',
      side: 'white',
      group: 'e4',
      familyId: 'wf-italian',
      family: 'Italian Game',
      short: 'Two Knights: Knight Attack (4.Ng5)',
      name: 'Italian Game: Two Knights, Knight Attack (4.Ng5)',
      aliases: ['Two Knights 4.Ng5'],
      eco: 'C57-C59',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'f3g5'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5',
      difficulty: 'Intermediate',
      style: 'Sharp',
      minutes: 14,
      summary: '4.Ng5 hits f7 at once. In the main line Black gives a pawn with 4...d5 5.exd5 Na5 for quick development; White must keep the pawn safely.',
      idea: 'Knight and bishop attack f7, so Black must react. After 4...d5 5.exd5 the main line is 5...Na5: Black gives a pawn to chase the c4 bishop and gain time. White keeps the extra pawn with 6.Bb5+, 7.dxc6 and 8.Be2, then untangles and castles while Black uses space and activity. Weaker replies such as 5...Nxd5? let White attack f7 directly.',
      plans: {
        white: [
          'After 5...Na5, keep the pawn with 6.Bb5+ and 8.Be2, then untangle and castle.',
          'Against 5...Nxd5?, attack f7 at once with 6.d4 or the Fried Liver 6.Nxf7.',
          'Trade pieces when a pawn up: the extra pawn counts in the endgame.'
        ],
        black: [
          'Give the pawn with 5...Na5 and use the lead in development.',
          'Chase the knight with ...h6 and ...e4, gaining space and time.',
          'Counter-attack f2 with the Traxler, 4...Bc5.'
        ]
      },
      responses: [
        {
          moves: '4...d5 5.exd5 Na5',
          name: 'Main line',
          note: '6.Bb5+ c6 7.dxc6 bxc6 8.Be2 h6 9.Nf3 e4 10.Ne5: White is a pawn up, Black has space and active pieces.',
          line: 'main'
        },
        {
          moves: '5...Nxd5 6.Nxf7',
          name: 'Fried Liver',
          note: "After 6...Kxf7 7.Qf3+ Ke6 8.Nc3 Black's king is stuck in the centre and the d5 knight is pinned. 6.d4 is a strong alternative.",
          line: 'fried'
        },
        {
          moves: '6.d3 h6 7.Nf3',
          name: 'Morphy line',
          note: 'Instead of 6.Bb5+, White can return the bishop to safety later: 7...e4 8.Qe2 Nxc4 9.dxc4 Bc5 gives Black play for the pawn.',
          line: 'morphy'
        },
        {
          moves: '4...Bc5',
          name: 'Traxler Counter-attack',
          note: 'Black ignores f7 and hits f2. Both 5.Nxf7 and 5.Bxf7+ lead to very sharp play; prepare a line before choosing 4.Ng5.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'f1c4', san: 'Bc4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'f3g5', san: 'Ng5', note: 'Knight and bishop both hit f7.' },
          { uci: 'd7d5', san: 'd5', note: 'The only good way to block the attack.' },
          { uci: 'e4d5', san: 'exd5' },
          { uci: 'c6a5', san: 'Na5', note: 'Black gives a pawn to chase the bishop.' },
          { uci: 'c4b5', san: 'Bb5+', note: 'Keeps the bishop active and the pawn on d5.' },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'd5c6', san: 'dxc6' },
          { uci: 'b7c6', san: 'bxc6' },
          { uci: 'b5e2', san: 'Be2', note: 'White is a pawn up but behind in development.' },
          { uci: 'h7h6', san: 'h6' },
          { uci: 'g5f3', san: 'Nf3' },
          { uci: 'e5e4', san: 'e4', note: 'Black gains space and time on the knight.' },
          { uci: 'f3e5', san: 'Ne5' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '5...Na5 6.Bb5+: the main line',
          kind: 'Main line',
          summary: 'White keeps the extra pawn; Black gets space with ...e4 and active pieces. Castle quickly, support the e5 knight with d4 or f4, and do not grab more.',
          moves: [
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'c6a5', san: 'Na5', note: 'The main line: a pawn for time.' },
            { uci: 'c4b5', san: 'Bb5+' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd5c6', san: 'dxc6' },
            { uci: 'b7c6', san: 'bxc6' },
            { uci: 'b5e2', san: 'Be2', note: 'The bishop retreats; the extra pawn stays.' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5f3', san: 'Nf3' },
            { uci: 'e5e4', san: 'e4', note: 'Space and time against the knight.' },
            { uci: 'f3e5', san: 'Ne5' },
            { uci: 'f8d6', san: 'Bd6', note: 'Black develops and eyes e5; White continues d4 or f4 and castles.' }
          ]
        },
        {
          id: 'fried',
          name: '5...Nxd5? 6.Nxf7: the Fried Liver',
          kind: 'Sharp try',
          summary: 'After the natural recapture 5...Nxd5? White can sacrifice on f7 and drag the king out. Black can defend, but it is hard in practice.',
          moves: [
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'f6d5', san: 'Nxd5', note: 'Natural but risky: f7 is now very weak.' },
            { uci: 'g5f7', san: 'Nxf7', note: "The Fried Liver: a knight for the king's safety." },
            { uci: 'e8f7', san: 'Kxf7' },
            { uci: 'd1f3', san: 'Qf3+' },
            { uci: 'f7e6', san: 'Ke6' },
            { uci: 'b1c3', san: 'Nc3', note: 'More pressure on the pinned d5 knight; the black king is stuck in the centre.' }
          ]
        },
        {
          id: 'morphy',
          name: '5...Na5 6.d3: the Morphy line',
          kind: 'Alternative',
          summary: 'White defends the bishop with d3 instead of checking. Black chases the knight with ...h6 and ...e4 and gets activity for the pawn.',
          moves: [
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'c6a5', san: 'Na5' },
            { uci: 'd2d3', san: 'd3', note: 'Defends c4 with a pawn instead of checking.' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5f3', san: 'Nf3' },
            { uci: 'e5e4', san: 'e4', note: 'Black hits the knight again.' },
            { uci: 'd1e2', san: 'Qe2' },
            { uci: 'a5c4', san: 'Nxc4' },
            { uci: 'd3c4', san: 'dxc4' },
            { uci: 'f8c5', san: 'Bc5', note: 'Black has the bishop pair and active pieces for the pawn.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: 'The Fried Liver after 5...Nxd5',
          text: '5...Nxd5? allows 6.Nxf7! Kxf7 7.Qf3+, or the strong 6.d4, and the black king is in great danger. Black should play 5...Na5 or one of the rarer sharp moves.',
          uci: [
            'e2e4',
            'e7e5',
            'g1f3',
            'b8c6',
            'f1c4',
            'g8f6',
            'f3g5',
            'd7d5',
            'e4d5',
            'f6d5',
            'g5f7',
            'e8f7',
            'd1f3',
            'f7e6',
            'b1c3'
          ]
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'A pawn up, but behind in development',
          text: 'After 8.Be2 h6 9.Nf3 e4 10.Ne5 the knight on e5 can be harassed and Black has space. Castle quickly, support e5 with d4 or f4, and do not grab more pawns.'
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'The Traxler counter-attack',
          text: "If Black answers 4.Ng5 with 4...Bc5, Black's attack on f2 can be more dangerous than yours on f7. Know one line, such as 5.Bxf7+, before you play 4.Ng5.",
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'f3g5', 'f8c5']
        }
      ],
      lessons: ['white-openings-21', 'attack-8'],
      uncertain: 'The Traxler (4...Bc5) is only described in outline, and the 6.d3 Morphy line is given to move 9; both are sharp and have deep theory.'
    },
    {
      id: 'w-ruy-lopez-closed',
      side: 'white',
      group: 'e4',
      familyId: 'wf-ruy-lopez',
      family: 'Ruy Lopez',
      short: 'Closed main line (Morphy Defence)',
      name: 'Ruy Lopez: Closed main line',
      aliases: ['Closed Spanish', 'Morphy Defence'],
      eco: 'C84',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bb5',
      difficulty: 'Advanced',
      style: 'Positional',
      minutes: 20,
      summary: 'The Spanish: pressure on the knight that guards e5. Rich, deep and one of the most respected openings in chess.',
      idea: "The bishop on b5 attacks the defender of e5. White does not win the pawn at once, but the lasting pressure, followed by c3 and d4, builds an ideal centre. In the closed main lines the queen's knight often travels b1-d2-f1-g3 and the bishop sits on b3 or c2, eyeing Black's kingside, while Black seeks queenside space.",
      plans: {
        white: [
          'Play c3, h3 and d4 to build a strong pawn centre.',
          "Reroute the queen's knight via d2 and f1 to g3 or e3.",
          'Keep the light-squared bishop on a long diagonal for kingside pressure.'
        ],
        black: [
          'Gain queenside space with ...a6, ...b5 and ...c5.',
          'Hold e5 firmly and look for the ...d5 or ...f5 breaks.',
          'Use ...Na5 to chase or trade the Spanish bishop.'
        ]
      },
      responses: [
        {
          moves: '3...a6 4.Ba4 Nf6 5.O-O Be7',
          name: 'Closed Ruy Lopez',
          note: 'The main line: 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3, then d4 and the knight tour Nbd2-f1-g3.',
          line: 'closed'
        },
        {
          moves: '5...Nxe4 6.d4',
          name: 'Open Ruy Lopez',
          note: 'Black grabs e4. After 6...b5 7.Bb3 d5 8.dxe5 Be6 9.c3 White has kingside space; know the Tarrasch trap.',
          line: 'open'
        },
        {
          moves: '3...Bc5 4.c3',
          name: 'Classical Defence',
          note: 'Prepares d4 with gain of time on the bishop; 4.O-O is an equally good alternative.',
          line: 'classical'
        },
        {
          moves: '3...Nf6 4.d3',
          name: 'Berlin Defence',
          note: 'The main line 4.O-O Nxe4 5.d4 leads to the Berlin endgame; to keep queens on, play 4.d3 (see the Anti-Berlin).'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'f1b5', san: 'Bb5', note: 'Attacks the knight that defends e5.' },
          { uci: 'a7a6', san: 'a6' },
          { uci: 'b5a4', san: 'Ba4', note: 'White keeps the bishop and the pressure.' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'e1g1', san: 'O-O', note: 'e4 is only indirectly defended: 5...Nxe4 6.d4 is the Open Ruy Lopez.' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'f1e1', san: 'Re1' },
          { uci: 'b7b5', san: 'b5' },
          { uci: 'a4b3', san: 'Bb3' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'c2c3', san: 'c3', note: 'Prepares d4 and keeps a retreat on c2 for the bishop.' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'h2h3', san: 'h3', note: 'Stops ...Bg4, which would pin the knight and add pressure to d4.' }
        ]
      },
      lines: [
        {
          id: 'closed',
          name: '3...a6 4.Ba4 Nf6 5.O-O Be7: the Closed',
          kind: 'Main line',
          summary: 'The classical tabiya: White builds c3, h3 and d4, the bishop retreats to c2 after ...Na5, and the knight goes Nbd2-f1-g3.',
          moves: [
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5a4', san: 'Ba4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'f1e1', san: 'Re1', note: 'Defends e4, so Bxc6 and Nxe5 becomes a real threat.' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'a4b3', san: 'Bb3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'c2c3', san: 'c3', note: 'Prepares d4 and gives the bishop the c2 square.' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'h2h3', san: 'h3', note: 'Stops ...Bg4 before d4.' },
            { uci: 'c6a5', san: 'Na5' },
            { uci: 'b3c2', san: 'Bc2', note: 'The Chigorin: the bishop keeps its diagonal and d4 comes next.' }
          ]
        },
        {
          id: 'open',
          name: '5...Nxe4: the Open',
          kind: 'Alternative',
          summary: 'Black takes e4 and supports the knight with ...d5. White regains space with dxe5, keeps the bishop with c3 and challenges the e4 knight.',
          moves: [
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5a4', san: 'Ba4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f6e4', san: 'Nxe4', note: 'The Open: Black grabs the centre pawn.' },
            { uci: 'd2d4', san: 'd4', note: 'Opens lines while the black king is still in the centre.' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'a4b3', san: 'Bb3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'c8e6', san: 'Be6' },
            { uci: 'c2c3', san: 'c3', note: 'Keeps a retreat for the bishop on c2.' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'b1d2', san: 'Nbd2', note: 'Challenges the e4 knight; Bc2 and Qe2 or Re1 follow.' }
          ]
        },
        {
          id: 'classical',
          name: '3...Bc5: the Classical Defence',
          kind: 'Sideline',
          summary: 'Black develops the bishop to c5 at once. c3 and d4 gain central space with tempo; Bg5 adds pressure on e5.',
          moves: [
            { uci: 'f8c5', san: 'Bc5', note: 'The bishop eyes f2.' },
            { uci: 'c2c3', san: 'c3', note: 'Prepares d4 with gain of time on the bishop.' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c5b6', san: 'Bb6' },
            { uci: 'c1g5', san: 'Bg5', note: 'Pins the knight and adds pressure to e5.' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5h4', san: 'Bh4' },
            { uci: 'd7d6', san: 'd6' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'white',
          title: "Noah's Ark trap",
          text: 'After ...a6, ...b5 and ...c5-c4 the bishop on b3 can be trapped. Here 8.Qxd4? c5 9.Qd5 Be6 10.Qc6+ Bd7 11.Qd5 c4 wins it. Do not grab on d4 with the queen when ...c5-c4 is possible; keep a retreat such as c2.',
          uci: [
            'e2e4',
            'e7e5',
            'g1f3',
            'b8c6',
            'f1b5',
            'a7a6',
            'b5a4',
            'd7d6',
            'd2d4',
            'b7b5',
            'a4b3',
            'c6d4',
            'f3d4',
            'e5d4',
            'd1d4',
            'c7c5',
            'd4d5',
            'c8e6',
            'd5c6',
            'e6d7',
            'c6d5',
            'c5c4'
          ]
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'The Marshall Attack after 8.c3',
          text: 'With 7...O-O, the natural 8.c3 allows 8...d5, the Marshall Attack, a deep Black gambit. If you do not want to study it, choose an anti-Marshall such as 8.h3 or 8.a4.',
          uci: [
            'e2e4',
            'e7e5',
            'g1f3',
            'b8c6',
            'f1b5',
            'a7a6',
            'b5a4',
            'g8f6',
            'e1g1',
            'f8e7',
            'f1e1',
            'b7b5',
            'a4b3',
            'e8g8',
            'c2c3',
            'd7d5'
          ]
        },
        {
          kind: 'Trap',
          side: 'black',
          title: 'The Tarrasch trap in the Open',
          text: "In the Open, 11...Qd7? puts the queen opposite White's on the d-file: 12.Nxe6 fxe6 13.Rxe4! wins a piece, because ...dxe4 would drop the queen.",
          uci: [
            'e2e4',
            'e7e5',
            'g1f3',
            'b8c6',
            'f1b5',
            'a7a6',
            'b5a4',
            'g8f6',
            'e1g1',
            'f6e4',
            'd2d4',
            'b7b5',
            'a4b3',
            'd7d5',
            'd4e5',
            'c8e6',
            'c2c3',
            'f8e7',
            'f1e1',
            'e8g8',
            'f3d4',
            'd8d7',
            'd4e6',
            'f7e6',
            'e1e4'
          ]
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Forgetting h3 before d4',
          text: 'Without h3, ...Bg4 pins the f3 knight and adds pressure on d4, and the Nbd2-f1-g3 tour becomes harder. In the Closed lines h3 usually comes before d4.'
        }
      ],
      transpositions: [
        { to: 'w-ruy-lopez-exchange', note: 'After 3...a6 White may choose 4.Bxc6 instead of 4.Ba4.' }
      ],
      lessons: ['white-openings-9', 'white-openings-20'],
      uncertain: 'Against the Classical Defence, 4.c3 with 7.Bg5 is one of several main tries; 4.O-O is equally common.'
    },
    {
      id: 'w-ruy-lopez-exchange',
      side: 'white',
      group: 'e4',
      familyId: 'wf-ruy-lopez',
      family: 'Ruy Lopez',
      short: 'Exchange Variation',
      name: 'Ruy Lopez: Exchange Variation',
      aliases: ['Spanish Exchange'],
      eco: 'C68',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'a7a6', 'b5c6'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 12,
      summary: "White gives up the bishop pair to damage Black's pawns, aiming for a kingside majority that tells in the endgame.",
      idea: "After Bxc6 dxc6 Black has doubled c-pawns. White's four-against-three kingside majority can create a passed pawn, while Black's queenside majority is crippled. Black gets the two bishops and free development in return, so White plays for d4, simplification and a good endgame rather than a quick attack.",
      plans: {
        white: [
          "Play d4 and swap the d-pawn for Black's e-pawn to fix the structure.",
          'Trade pieces, especially queens: the endgame favours the healthier majority.',
          'Create a passed e- or f-pawn with the kingside majority.'
        ],
        black: [
          'Use the bishop pair actively and avoid simplification.',
          'Hold e5 with ...f6 and develop quickly with ...Bg4, ...Bd6 or ...Qd6.',
          'Castle long in some lines and play for an attack.'
        ]
      },
      responses: [
        {
          moves: '5...f6 6.d4',
          name: 'Main line',
          note: '6...exd4 7.Nxd4 c5 8.Nb3 Qxd1 9.Rxd1 leads to the typical queenless middlegame.',
          line: 'f6'
        },
        {
          moves: '5...Bg4 6.h3 h5',
          name: 'Sharp ...h5',
          note: 'Do not take the bishop: 7.hxg4? hxg4 opens the h-file against your king. 7.d3 is the standard reply.',
          line: 'bg4'
        },
        {
          moves: '5...Qd6',
          note: 'Black prepares ...O-O-O. 6.Na3, heading for c4, and 6.d3 are common sound replies.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'f1b5', san: 'Bb5' },
          { uci: 'a7a6', san: 'a6' },
          { uci: 'b5c6', san: 'Bxc6', note: "Gives up the bishop to double Black's c-pawns." },
          { uci: 'd7c6', san: 'dxc6' },
          { uci: 'e1g1', san: 'O-O', note: 'Not 5.Nxe5? Qd4, regaining the pawn. After castling, Nxe5 becomes a real threat.' },
          { uci: 'f7f6', san: 'f6', note: 'Defends e5 solidly.' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'e5d4', san: 'exd4' },
          { uci: 'f3d4', san: 'Nxd4', note: 'Now White has four kingside pawns against three.' },
          { uci: 'c6c5', san: 'c5' },
          { uci: 'd4b3', san: 'Nb3' },
          { uci: 'd8d1', san: 'Qxd1' },
          { uci: 'f1d1', san: 'Rxd1' },
          { uci: 'c8g4', san: 'Bg4', note: 'Black develops with gain of time on the rook.' }
        ]
      },
      lines: [
        {
          id: 'f6',
          name: '5...f6 6.d4: the main line',
          kind: 'Main line',
          summary: 'White opens the centre to fix the structure, trades queens and aims for an endgame where the healthy kingside majority counts.',
          moves: [
            { uci: 'd7c6', san: 'dxc6' },
            { uci: 'e1g1', san: 'O-O', note: 'Now Nxe5 is a real threat.' },
            { uci: 'f7f6', san: 'f6', note: 'Defends e5 solidly.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'f3d4', san: 'Nxd4', note: 'Four pawns against three on the kingside.' },
            { uci: 'c6c5', san: 'c5' },
            { uci: 'd4b3', san: 'Nb3' },
            { uci: 'd8d1', san: 'Qxd1' },
            { uci: 'f1d1', san: 'Rxd1' },
            { uci: 'c8g4', san: 'Bg4' },
            { uci: 'f2f3', san: 'f3', note: 'Gains time on the bishop and supports e4.' },
            { uci: 'g4e6', san: 'Be6' },
            { uci: 'b1c3', san: 'Nc3' }
          ]
        },
        {
          id: 'bg4',
          name: '5...Bg4 6.h3 h5: decline the bishop',
          kind: 'Sharp try',
          summary: 'Black offers the bishop to open the h-file. Decline with 7.d3 and keep the king safe; taking on g4 lets Black attack.',
          moves: [
            { uci: 'd7c6', san: 'dxc6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c8g4', san: 'Bg4' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'h7h5', san: 'h5', note: 'Black offers the bishop.' },
            { uci: 'd2d3', san: 'd3', note: 'Declines: 7.hxg4? hxg4 opens the h-file against your king.' },
            { uci: 'd8f6', san: 'Qf6' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'g8e7', san: 'Ne7' },
            { uci: 'f1e1', san: 'Re1' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'white',
          title: '5.Nxe5? before castling',
          text: 'Before castling, 5.Nxe5? is met by 5...Qd4, hitting the knight and e4, and Black regains the pawn with the bishop pair and the easier game. Castle first; then Nxe5 is a real threat.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'a7a6', 'b5c6', 'd7c6', 'f3e5', 'd8d4']
        },
        {
          kind: 'Trap',
          side: 'white',
          title: 'Taking the bishop on g4',
          text: 'After 5...Bg4 6.h3 h5, 7.hxg4? hxg4 opens the h-file: the knight must move and ...Qh4 gives Black a very dangerous attack. Decline with 7.d3.',
          uci: [
            'e2e4',
            'e7e5',
            'g1f3',
            'b8c6',
            'f1b5',
            'a7a6',
            'b5c6',
            'd7c6',
            'e1g1',
            'c8g4',
            'h2h3',
            'h7h5',
            'h3g4',
            'h5g4'
          ]
        },
        {
          kind: 'Risk',
          side: 'white',
          title: "Opening the game for Black's bishops",
          text: 'Black has the bishop pair. If the position opens while many pieces remain, the bishops become strong. Aim for exchanges, especially of queens, and play for the endgame.'
        }
      ],
      transpositions: [
        { to: 'w-ruy-lopez-closed', note: 'Same first three moves; 4.Ba4 keeps the bishop instead.' }
      ],
      lessons: ['strategy-1', 'strategy-8']
    },
    {
      id: 'w-ruy-anti-berlin',
      side: 'white',
      group: 'e4',
      familyId: 'wf-ruy-lopez',
      family: 'Ruy Lopez',
      short: 'Anti-Berlin (4.d3)',
      name: 'Ruy Lopez: Anti-Berlin (4.d3)',
      aliases: ['Berlin Defence, 4.d3', 'Berlin with 4.d3'],
      eco: 'C65',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'g8f6', 'd2d3'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.d3',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 12,
      summary: 'Against the Berlin, 4.d3 defends e4 and avoids the Berlin endgame. The game becomes a slow Spanish with queens on and long-term manoeuvring.',
      idea: 'After 3...Nf6 the main line 4.O-O Nxe4 leads to the Berlin endgame, which is very hard to win. 4.d3 simply protects e4. White follows with c3, O-O, Re1 and Nbd2-f1-g3, keeps the Spanish bishop with Ba4 and Bc2 if it is chased, and prepares d3-d4 or a kingside build-up. Taking on c6 and then e5 only works when ...Qd4 is not possible.',
      plans: {
        white: [
          'Build c3, O-O, Re1, h3 and Nbd2-f1-g3, then prepare d4.',
          'Keep the bishop with Ba4 and Bc2 if Black plays ...a6 and ...b5.',
          'Take on c6 only when it wins e5 or gives a clearly better structure.'
        ],
        black: [
          'Develop actively with ...Bc5, ...d6, ...O-O, often with ...a6 and ...Ba7.',
          'Keep e5 solid with ...Ne7-g6 or ...Re8.',
          'Break with ...d5 if White is slow.'
        ]
      },
      responses: [
        {
          moves: '4...Bc5 5.c3',
          name: 'Main line',
          note: '5...O-O 6.O-O d6 7.h3, then Re1 and Nbd2. If Black plays ...a6, retreat with Ba4 and keep the bishop.',
          line: 'main'
        },
        {
          moves: '4...Bc5 5.Bxc6 dxc6 6.Nbd2',
          name: 'Exchange idea',
          note: 'Doubles the c-pawns; the knight heads for c4. Not 6.Nxe5? Qd4, hitting e5 and f2.',
          line: 'bxc6'
        },
        {
          moves: '4...d6 5.c3',
          name: '...d6 and ...g6',
          note: '5...g6 6.O-O Bg7 7.Re1 O-O 8.Nbd2: a slow Spanish where Black fianchettoes.',
          line: 'd6'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'f1b5', san: 'Bb5' },
          { uci: 'g8f6', san: 'Nf6', note: 'The Berlin Defence: Black counter-attacks e4.' },
          { uci: 'd2d3', san: 'd3', note: 'Defends e4 and avoids the Berlin endgame.' },
          { uci: 'f8c5', san: 'Bc5' },
          { uci: 'c2c3', san: 'c3', note: 'Prepares d4 and gives the bishop a retreat.' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'h2h3', san: 'h3', note: 'Stops ...Bg4 and ...Ng4.' },
          { uci: 'a7a6', san: 'a6' },
          { uci: 'b5a4', san: 'Ba4' },
          { uci: 'c5a7', san: 'Ba7' },
          { uci: 'f1e1', san: 'Re1' },
          { uci: 'c6e7', san: 'Ne7', note: 'Black reroutes the knight to g6.' },
          { uci: 'b1d2', san: 'Nbd2', note: 'The Spanish knight tour: f1 and g3 come next.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '4...Bc5 5.c3: slow Spanish',
          kind: 'Main line',
          summary: 'White builds c3, h3 and Re1, keeps the bishop with Ba4 and Bc2, and plays Nbd2-f1-g3 before thinking about d4.',
          moves: [
            { uci: 'f8c5', san: 'Bc5', note: 'The bishop eyes f2.' },
            { uci: 'c2c3', san: 'c3', note: 'Prepares d4 and gives the bishop a retreat on c2.' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'h2h3', san: 'h3', note: 'Stops ...Bg4 and ...Ng4.' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5a4', san: 'Ba4' },
            { uci: 'c5a7', san: 'Ba7' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'a4c2', san: 'Bc2', note: 'The bishop keeps its diagonal; Nbd2-f1-g3 comes next.' }
          ]
        },
        {
          id: 'bxc6',
          name: '4...Bc5 5.Bxc6: double the pawns',
          kind: 'Alternative',
          summary: "White gives the bishop to double Black's pawns and brings the knight to c4. Develop before taking on e5.",
          moves: [
            { uci: 'f8c5', san: 'Bc5' },
            { uci: 'b5c6', san: 'Bxc6', note: 'White gives up the bishop to double the c-pawns.' },
            { uci: 'd7c6', san: 'dxc6' },
            { uci: 'b1d2', san: 'Nbd2', note: 'The knight heads for c4. Not 6.Nxe5? Qd4, hitting e5 and f2.' }
          ]
        },
        {
          id: 'd6',
          name: '4...d6: fianchetto set-up',
          kind: 'Sideline',
          summary: 'Black supports e5 with ...d6 and fianchettoes. White keeps the standard Spanish set-up with c3, Re1 and Nbd2-f1.',
          moves: [
            { uci: 'd7d6', san: 'd6' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'g7g6', san: 'g6', note: "Black fianchettoes the king's bishop." },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'b1d2', san: 'Nbd2', note: 'The standard manoeuvre: Nf1 and Ng3 follow.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'white',
          title: '6.Nxe5? Qd4 after Bxc6',
          text: 'After Bxc6 dxc6 the e5 pawn looks loose, but 6.Nxe5? Qd4 hits the knight and f2 at once, and Black regains the pawn with the better game. Develop with Nbd2 or castle first.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'g8f6', 'd2d3', 'f8c5', 'b5c6', 'd7c6', 'f3e5', 'd8d4']
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'A bishop without a retreat',
          text: 'Against ...a6 and ...b5 the Spanish bishop needs a good square. Play c3 early so that Ba4-c2 is possible, or retreat to b3 and answer ...Na5 with Bc2.'
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'Slow play gives easy equality',
          text: 'With 4.d3 White does not fight for an opening edge; the fight is in the middlegame. Without a plan, such as c3 and d4 or Nf1-g3 and a kingside build-up, Black equalises comfortably.'
        }
      ],
      lessons: ['white-openings-20']
    },
    {
      id: 'w-scotch',
      side: 'white',
      group: 'e4',
      familyId: 'wf-scotch',
      family: 'Scotch Game',
      short: 'Main line (4.Nxd4)',
      name: 'Scotch Game',
      aliases: ['Scotch Opening'],
      eco: 'C45',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'd2d4', 'e5d4', 'f3d4'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.Nxd4',
      difficulty: 'Intermediate',
      style: 'Attacking',
      minutes: 12,
      summary: 'White opens the centre at once with 3.d4: clear piece play, a space advantage and less theory than the Ruy Lopez.',
      idea: "By exchanging the d-pawn for e5, White frees the position and keeps a pawn on e4 against none of Black's in the centre. In the main line White plays Nxc6 and e5, cramping Black's knight, while Black gets the half-open b-file and counterplay against the advanced pawn. Quick development and central space are White's assets.",
      plans: {
        white: [
          "Use the e5 pawn and c4 to drive Black's knights back.",
          "Develop quickly, castle and target Black's split queenside pawns.",
          'Keep the knight centralised on d4 if Black avoids exchanges.'
        ],
        black: [
          'Challenge the centre with ...d6 or ...d5.',
          'Pressure d4 and f2 with ...Bc5 and ...Qf6 in the Classical lines.',
          'Use the half-open b-file after ...bxc6.'
        ]
      },
      responses: [
        {
          moves: '4...Nf6 5.Nxc6 bxc6 6.e5',
          name: 'Schmidt Variation',
          note: '6...Qe7 7.Qe2 Nd5 8.c4 drives the knight away again; this is the main line.',
          line: 'schmidt'
        },
        {
          moves: '4...Bc5 5.Nxc6',
          name: 'Classical Variation',
          note: '5...Qf6 6.Qd2 dxc6 7.Nc3 is the main line; 5.Be3 and 5.Nb3 are good alternatives.',
          line: 'classical'
        },
        {
          moves: '4...Nxd4 5.Qxd4',
          note: "The trade brings White's queen to a strong central square. Follow with Nc3, Be3 or Bd3 and castle.",
          line: 'nxd4'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'd2d4', san: 'd4', note: 'Strikes in the centre at once.' },
          { uci: 'e5d4', san: 'exd4' },
          { uci: 'f3d4', san: 'Nxd4', note: 'White keeps a pawn on e4; Black has no central pawn.' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'd4c6', san: 'Nxc6' },
          { uci: 'b7c6', san: 'bxc6' },
          { uci: 'e4e5', san: 'e5', note: 'Gains space and chases the f6 knight.' },
          { uci: 'd8e7', san: 'Qe7', note: 'Hits e5 along the e-file.' },
          { uci: 'd1e2', san: 'Qe2' },
          { uci: 'f6d5', san: 'Nd5' },
          { uci: 'c2c4', san: 'c4', note: 'Kicks the knight again.' },
          { uci: 'c8a6', san: 'Ba6', note: 'Pins the c4 pawn against the white queen.' },
          { uci: 'b2b3', san: 'b3', note: 'Supports c4 so the pin does not hurt.' }
        ]
      },
      lines: [
        {
          id: 'schmidt',
          name: '4...Nf6 5.Nxc6: the Schmidt Variation',
          kind: 'Main line',
          summary: 'White exchanges on c6, pushes e5 and c4 to drive the knight about, and supports c4 with b3. The e5 pawn cramps Black but needs care.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd4c6', san: 'Nxc6', note: 'Before Black can develop with ...Bb4 or ...Bc5.' },
            { uci: 'b7c6', san: 'bxc6' },
            { uci: 'e4e5', san: 'e5', note: 'Gains space and chases the knight.' },
            { uci: 'd8e7', san: 'Qe7' },
            { uci: 'd1e2', san: 'Qe2' },
            { uci: 'f6d5', san: 'Nd5' },
            { uci: 'c2c4', san: 'c4', note: 'Kicks the knight again.' },
            { uci: 'c8a6', san: 'Ba6' },
            { uci: 'b2b3', san: 'b3', note: 'Supports c4 so the pin does not hurt.' }
          ]
        },
        {
          id: 'classical',
          name: '4...Bc5 5.Nxc6: the Classical',
          kind: 'Alternative',
          summary: 'Black hits d4 and f2. After 5.Nxc6 Qf6 White must cover f2 with 6.Qd2, then develop with Nc3 and gain time on the c5 bishop.',
          moves: [
            { uci: 'f8c5', san: 'Bc5', note: 'Hits the d4 knight and eyes f2.' },
            { uci: 'd4c6', san: 'Nxc6' },
            { uci: 'd8f6', san: 'Qf6', note: 'Threatens ...Qxf2+.' },
            { uci: 'd1d2', san: 'Qd2', note: 'Covers f2; the queen will go to f4 or d3 later.' },
            { uci: 'd7c6', san: 'dxc6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'c8e6', san: 'Be6' },
            { uci: 'c3a4', san: 'Na4', note: 'Gains time on the c5 bishop.' }
          ]
        },
        {
          id: 'nxd4',
          name: '4...Nxd4 5.Qxd4',
          kind: 'Sideline',
          summary: "Black trades knights and lets White's queen centralise. Develop with Nc3 and Be3 and use the extra space.",
          moves: [
            { uci: 'c6d4', san: 'Nxd4' },
            { uci: 'd1d4', san: 'Qxd4', note: 'The queen is centralised and hard to chase.' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3', note: 'Defends e4.' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1c1', san: 'O-O-O', note: 'White castles long and keeps a space edge.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Forgetting the threat on f2',
          text: 'In the Classical, 5...Qf6 threatens ...Qxf2+ with a winning attack. 6.Qd2 or 6.Qf3 is needed; a careless developing move loses at once.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'd2d4', 'e5d4', 'f3d4', 'f8c5', 'd4c6', 'd8f6']
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'The advanced e5 pawn',
          text: "In the Schmidt lines e5 cramps Black but needs support from c4, b3, Bb2 and f4. If it falls, Black's pieces flood the centre."
        }
      ],
      lessons: ['white-openings-6']
    },
    {
      id: 'w-four-knights-scotch',
      side: 'white',
      group: 'e4',
      familyId: 'wf-four-knights',
      family: 'Four Knights Game',
      short: 'Scotch Four Knights (4.d4)',
      name: 'Four Knights: Scotch Variation',
      aliases: ['Four Knights, Scotch Variation', '4.d4 Four Knights'],
      eco: 'C47',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'b1c3'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Nc3',
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 10,
      summary: 'Natural development, then 4.d4 to open the centre. Safe, logical and full of simple, healthy positions.',
      idea: "White develops both knights before choosing a plan. Against 3...Nf6, 4.d4 opens the centre while White's pieces are ready; the game becomes open, with White aiming for active pieces and pressure against Black's queenside pawns after Nxc6. If Black tries 3...Bc5, the fork trick 4.Nxe5 wins the centre.",
      plans: {
        white: [
          'Play d4 to open the centre while your pieces are already out.',
          "After Nxc6 bxc6, target Black's weakened queenside pawns.",
          'Pin the f6 knight with Bg5 and build pressure.'
        ],
        black: [
          'Pin the c3 knight with ...Bb4 and free the game with ...d5.',
          'Aim for symmetrical, level positions.',
          'Use the half-open b-file after ...bxc6.'
        ]
      },
      responses: [
        {
          moves: '3...Nf6 4.d4',
          name: 'Four Knights',
          note: '4...exd4 5.Nxd4 Bb4 6.Nxc6 bxc6 7.Bd3 d5 8.exd5 cxd5 9.O-O O-O 10.Bg5 is the main line.',
          line: 'main'
        },
        {
          moves: '3...Bc5 4.Nxe5',
          name: 'Fork trick',
          note: '4...Nxe5 5.d4 regains the piece and leaves White with a strong centre and the initiative.',
          line: 'fork'
        },
        {
          moves: '3...g6 4.d4',
          name: 'Three Knights',
          note: '4...exd4 5.Nxd4 Bg7 6.Be3 gives White easy development and central space.',
          line: 'g6'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'b1c3', san: 'Nc3', note: 'Develops before committing to a plan.' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'd2d4', san: 'd4', note: 'Opens the centre while both knights are out.' },
          { uci: 'e5d4', san: 'exd4' },
          { uci: 'f3d4', san: 'Nxd4' },
          { uci: 'f8b4', san: 'Bb4', note: 'Pins the c3 knight and eyes e4.' },
          { uci: 'd4c6', san: 'Nxc6' },
          { uci: 'b7c6', san: 'bxc6' },
          { uci: 'f1d3', san: 'Bd3', note: 'Defends e4 and points at the kingside.' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'e4d5', san: 'exd5' },
          { uci: 'c6d5', san: 'cxd5' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8g8', san: 'O-O', note: "Black's a-pawn is isolated; White's next is Bg5, pinning the f6 knight." }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '3...Nf6 4.d4: the Scotch Four Knights',
          kind: 'Main line',
          summary: "White opens the centre, exchanges on c6 and develops; after ...d5 Black's a-pawn is isolated and Bg5 pins the f6 knight.",
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd2d4', san: 'd4', note: 'Opens the centre while both knights are out.' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'f8b4', san: 'Bb4' },
            { uci: 'd4c6', san: 'Nxc6' },
            { uci: 'b7c6', san: 'bxc6' },
            { uci: 'f1d3', san: 'Bd3', note: 'Defends e4 against ...Bxc3 and ...Nxe4.' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'c6d5', san: 'cxd5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c1g5', san: 'Bg5', note: 'Pins the f6 knight; the d5 pawn is a target.' }
          ]
        },
        {
          id: 'fork',
          name: '3...Bc5 4.Nxe5: the fork trick',
          kind: 'Sideline',
          summary: 'An early ...Bc5 leaves e5 defended only by the knight. Nxe5 and d4 regains the piece and wins the centre.',
          moves: [
            { uci: 'f8c5', san: 'Bc5', note: 'Natural, but e5 is defended only by the knight.' },
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'c6e5', san: 'Nxe5' },
            { uci: 'd2d4', san: 'd4', note: 'The pawn forks bishop and knight.' },
            { uci: 'c5d6', san: 'Bd6' },
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'd6e5', san: 'Bxe5' },
            { uci: 'f1d3', san: 'Bd3', note: 'Development and central control; f4 can follow.' }
          ]
        },
        {
          id: 'g6',
          name: '3...g6: the Three Knights',
          kind: 'Alternative',
          summary: 'Black plans a kingside fianchetto. White opens the centre with d4 and develops with Be3 and Be2 for a free, comfortable game.',
          moves: [
            { uci: 'g7g6', san: 'g6', note: 'Black prepares ...Bg7.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'c1e3', san: 'Be3', note: 'Supports the d4 knight.' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1e2', san: 'Be2', note: 'Develops and covers g4 against ...Ng4.' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: 'The fork trick against 3...Bc5',
          text: 'After 3...Bc5, 4.Nxe5! Nxe5 5.d4 regains the piece with a pawn fork, and White gets the better centre.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'b1c3', 'f8c5', 'f3e5', 'c6e5', 'd2d4']
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'The pin on c3 and the e4 pawn',
          text: 'After ...Bb4 and ...Nf6 Black can take on c3 and then on e4. Keep e4 covered, for example with Bd3 in the main line, before playing Bg5.'
        }
      ],
      transpositions: [
        {
          to: 'w-italian-giuoco',
          note: '3...Nf6 4.Bc4 gives the same position as the Italian move order 3.Bc4 Nf6 4.Nc3.'
        }
      ],
      lessons: ['white-openings-5']
    },
    {
      id: 'w-vienna-g3',
      side: 'white',
      group: 'e4',
      familyId: 'wf-vienna',
      family: 'Vienna Game',
      short: 'g3 system',
      name: 'Vienna Game: g3 system',
      aliases: ['Mieses Variation', 'Vienna fianchetto'],
      eco: 'C26',
      defining: ['e2e4', 'e7e5', 'b1c3'],
      moves: '1.e4 e5 2.Nc3',
      difficulty: 'Beginner',
      style: 'Flexible',
      minutes: 10,
      summary: '2.Nc3 keeps options open; with g3 and Bg2 White gets a sound, flexible set-up. The Vienna Gambit (f4) is covered with the gambits.',
      idea: "White supports e4 with the knight, then fianchettoes the king's bishop: a fianchetto means developing a bishop on the long diagonal after g3 or b3. The g2 bishop presses on d5 and b7, while d3, Nge2 and a later f4 give a kingside plan. If Black frees the game with ...d5, the long diagonal and the half-open b-file give White play.",
      plans: {
        white: [
          'Fianchetto with g3 and Bg2 to pressure d5 and b7.',
          'Prepare f4 with d3 and Nge2 for kingside expansion.',
          'After ...d5 and exchanges on c3, use the half-open b-file.'
        ],
        black: [
          'Strike at once with ...d5 to free the game.',
          'Develop with ...Nc6, ...Bc5 and ...d6, keeping e5 firm.',
          'Meet a later f4 with ...exf4 or ...d6.'
        ]
      },
      responses: [
        {
          moves: '2...Nf6 3.g3 d5',
          name: 'Main line',
          note: '4.exd5 Nxd5 5.Bg2 Nxc3 6.bxc3 gives White the half-open b-file and a strong bishop.',
          line: 'd5'
        },
        {
          moves: '3...Bc5 4.Bg2',
          name: 'Calm development',
          note: 'd6, Nge2, O-O and d3, keeping f4 in reserve.',
          line: 'bc5'
        },
        {
          moves: '2...Nc6 3.g3',
          note: '3...Bc5 4.Bg2 d6 5.Nge2, then d3 and f4: a sound, closed set-up.',
          line: 'nc6'
        },
        {
          moves: '2...Bc5 3.Nf3',
          note: '3...d6 4.d4 exd4 5.Nxd4 gives White a free game; 3.g3 is also fine.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'b1c3', san: 'Nc3', note: 'Supports e4 and keeps f4 in reserve.' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'g2g3', san: 'g3', note: "The king's bishop will go to g2." },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'e4d5', san: 'exd5' },
          { uci: 'f6d5', san: 'Nxd5' },
          { uci: 'f1g2', san: 'Bg2', note: 'Pressure on d5 and down the long diagonal.' },
          { uci: 'd5c3', san: 'Nxc3' },
          { uci: 'b2c3', san: 'bxc3' },
          { uci: 'f8d6', san: 'Bd6' },
          { uci: 'g1f3', san: 'Nf3', note: 'Hits e5, so Black must keep defending it.' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'e1g1', san: 'O-O', note: 'Next come d4 or Rb1, using the half-open b-file.' }
        ]
      },
      lines: [
        {
          id: 'd5',
          name: '2...Nf6 3.g3 d5',
          kind: 'Main line',
          summary: 'Black frees the game at once. After the exchange on c3 White has a strong g2 bishop and the half-open b-file.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'd7d5', san: 'd5', note: 'Black frees the game at once.' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'f1g2', san: 'Bg2', note: 'Pressure on d5; Black must decide about the knight.' },
            { uci: 'd5c3', san: 'Nxc3' },
            { uci: 'b2c3', san: 'bxc3', note: 'The half-open b-file and a strong g2 bishop.' },
            { uci: 'f8d6', san: 'Bd6' },
            { uci: 'g1f3', san: 'Nf3', note: 'Hits e5, so Black must keep defending it.' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' }
          ]
        },
        {
          id: 'bc5',
          name: '2...Nf6 3.g3 Bc5',
          kind: 'Alternative',
          summary: 'A calmer development. White completes the set-up with Nge2, O-O and d3 and keeps f4 for later.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'f8c5', san: 'Bc5', note: 'A calmer development.' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'g1e2', san: 'Nge2', note: 'The knight goes to e2 so the f-pawn stays free.' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd2d3', san: 'd3', note: 'Solid; h3, Kh2 and f4 or d4 can follow.' }
          ]
        },
        {
          id: 'nc6',
          name: '2...Nc6 3.g3',
          kind: 'Alternative',
          summary: 'A closed game. White fianchettoes, plays Nge2, d3 and castles, then prepares f4 for kingside space.',
          moves: [
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'f8c5', san: 'Bc5' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'g1e2', san: 'Nge2', note: 'Keeps the f-pawn free for f4.' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O', note: 'Next come h3 and f4, or Na4 to trade the c5 bishop.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'white',
          title: '5.Nxd5? Qxd5 hits the h1 rook',
          text: 'With g3 played, the long diagonal to h1 is open. After 5.Nxd5? Qxd5 the queen attacks the h1 rook, so White must lose time with Nf3 or Qf3. Play 5.Bg2 first.',
          uci: ['e2e4', 'e7e5', 'b1c3', 'g8f6', 'g2g3', 'd7d5', 'e4d5', 'f6d5', 'c3d5', 'd8d5']
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'An early f4 before castling',
          text: "The f4 advance is White's main kingside plan, but before castling it opens the e1-h4 diagonal and the king. Castle, then prepare f4 with d3 and Nge2."
        }
      ],
      lessons: ['white-openings-26']
    },
    {
      id: 'w-petroff-nc3',
      side: 'white',
      group: 'e4',
      familyId: 'wf-petroff',
      family: 'Petroff Defence',
      short: '3.Nxe5 and 5.Nc3',
      name: 'Petroff: 3.Nxe5 and 5.Nc3',
      aliases: ['Nimzowitsch Attack (5.Nc3)'],
      eco: 'C42',
      defining: ['e2e4', 'e7e5', 'g1f3', 'g8f6', 'f3e5'],
      moves: '1.e4 e5 2.Nf3 Nf6 3.Nxe5',
      difficulty: 'Beginner',
      style: 'Flexible',
      minutes: 10,
      summary: 'Against the solid Petroff, take on e5, retreat calmly and play 5.Nc3: quick development, then Be3, Qd2 and O-O-O.',
      idea: 'Black counter-attacks e4 instead of defending e5. After 3.Nxe5 d6 4.Nf3 Nxe4 5.Nc3 Nxc3 6.dxc3, White has doubled c-pawns but open lines and easy development. The usual plan is Be3, Qd2 and long castling, sometimes with a kingside pawn advance. Black must not copy White too long: 3...Nxe4? 4.Qe2 wins material.',
      plans: {
        white: [
          'Develop fast with Be3, Qd2 and O-O-O after 5.Nc3 Nxc3 6.dxc3.',
          'Use the open d-file and, with opposite-side castling, advance the kingside pawns.',
          'Punish an early ...Nxe4 with Qe2 and the pin on the e-file.'
        ],
        black: [
          'Play ...d6 before taking on e4, then develop with ...Be7, ...Nc6 and ...Be6.',
          'Castle and keep the position symmetrical and solid.',
          'Meet a kingside advance with central counterplay, for example ...d5.'
        ]
      },
      responses: [
        {
          moves: '3...d6 4.Nf3',
          name: 'Main line',
          note: '4...Nxe4 5.Nc3 Nxc3 6.dxc3; the classical 5.d4 d5 6.Bd3 is a more theoretical alternative.',
          line: 'main'
        },
        {
          moves: '3...Nxe4 4.Qe2',
          name: 'Copycat mistake',
          note: '4...Qe7 5.Qxe4 d6 6.d4 dxe5 7.dxe5 leaves White a pawn up; 4...Nf6?? 5.Nc6+ wins the queen by discovered attack.',
          line: 'copy'
        },
        {
          moves: '3...Nc6',
          name: 'Stafford Gambit',
          note: 'A Black gambit: 4.Nxc6 dxc6 5.d3, then Be2 and O-O, keeps the extra pawn safely. Do not hurry with e5.',
          line: 'stafford'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g8f6', san: 'Nf6', note: 'The Petroff: Black counter-attacks e4.' },
          { uci: 'f3e5', san: 'Nxe5' },
          { uci: 'd7d6', san: 'd6', note: 'Black first kicks the knight; taking on e4 at once is a mistake.' },
          { uci: 'e5f3', san: 'Nf3' },
          { uci: 'f6e4', san: 'Nxe4' },
          { uci: 'b1c3', san: 'Nc3', note: "Offers a knight trade that speeds up White's development." },
          { uci: 'e4c3', san: 'Nxc3' },
          { uci: 'd2c3', san: 'dxc3', note: 'Doubled pawns, but open lines for the c1 bishop and the queen.' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'd1d2', san: 'Qd2' },
          { uci: 'c8e6', san: 'Be6' },
          { uci: 'e1c1', san: 'O-O-O', note: 'Kings on opposite sides: White can advance the kingside pawns.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '3...d6 4.Nf3 Nxe4 5.Nc3',
          kind: 'Main line',
          summary: 'White accepts doubled c-pawns for quick development, then plays Be3, Qd2 and O-O-O with kingside pawn advances.',
          moves: [
            { uci: 'd7d6', san: 'd6', note: 'Kicks the knight before taking on e4.' },
            { uci: 'e5f3', san: 'Nf3' },
            { uci: 'f6e4', san: 'Nxe4' },
            { uci: 'b1c3', san: 'Nc3', note: 'Offers a knight trade that speeds up development.' },
            { uci: 'e4c3', san: 'Nxc3' },
            { uci: 'd2c3', san: 'dxc3', note: 'Doubled pawns, but open lines for the bishop and queen.' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'c8e6', san: 'Be6' },
            { uci: 'e1c1', san: 'O-O-O', note: 'Kings on opposite sides: g4 and h4 can follow.' }
          ]
        },
        {
          id: 'copy',
          name: '3...Nxe4? 4.Qe2',
          kind: 'Sideline',
          summary: 'Copying White is a mistake: the pin on the e-file costs Black at least a pawn.',
          moves: [
            { uci: 'f6e4', san: 'Nxe4', note: 'Copying White is a mistake here.' },
            { uci: 'd1e2', san: 'Qe2', note: 'Pins the knight on the e-file.' },
            { uci: 'd8e7', san: 'Qe7' },
            { uci: 'e2e4', san: 'Qxe4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd6e5', san: 'dxe5' },
            { uci: 'd4e5', san: 'dxe5', note: 'White is a pawn up with the easier game.' }
          ]
        },
        {
          id: 'stafford',
          name: '3...Nc6: the Stafford Gambit',
          kind: 'Sharp try',
          summary: 'A dubious Black gambit full of traps. Take the pawn, cover e4 with d3, develop with Be2 and castle; avoid an early Bg5.',
          moves: [
            { uci: 'b8c6', san: 'Nc6', note: 'The Stafford Gambit: a pawn for quick development and traps.' },
            { uci: 'e5c6', san: 'Nxc6' },
            { uci: 'd7c6', san: 'dxc6' },
            { uci: 'd2d3', san: 'd3', note: 'Covers e4 calmly.' },
            { uci: 'f8c5', san: 'Bc5' },
            { uci: 'f1e2', san: 'Be2', note: 'Develops and blocks the e-file; never 6.Bg5?? Nxe4.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: 'The copycat 3...Nxe4',
          text: '3...Nxe4? 4.Qe2 pins the knight. 4...Qe7 5.Qxe4 d6 6.d4 costs Black a pawn, and 4...Nf6?? 5.Nc6+ is a discovered check that wins the queen.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'g8f6', 'f3e5', 'f6e4', 'd1e2', 'e4f6', 'e5c6']
        },
        {
          kind: 'Trap',
          side: 'white',
          title: 'Stafford trap: 6.Bg5?? Nxe4',
          text: 'In the Stafford Gambit, the pin 6.Bg5?? allows 6...Nxe4!, and 7.Bxd8 Bxf2+ 8.Ke2 Bg4 is mate. Develop with Be2 and keep e4 and f2 covered.',
          uci: [
            'e2e4',
            'e7e5',
            'g1f3',
            'g8f6',
            'f3e5',
            'b8c6',
            'e5c6',
            'd7c6',
            'd2d3',
            'f8c5',
            'c1g5',
            'f6e4',
            'g5d8',
            'c5f2',
            'e1e2',
            'c8g4'
          ]
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'A solid, symmetrical game',
          text: 'If White just develops and castles short, the Petroff often stays level and drawish. The 5.Nc3 plan with Be3, Qd2 and O-O-O gives the best chances to create play.'
        }
      ],
      lessons: ['black-vs-e4-1'],
      uncertain: 'Move orders after 6.dxc3 vary (6...Be7 with ...O-O or ...Nc6 and ...Be6); the plan with Be3, Qd2 and O-O-O is the standard one.'
    },
    {
      id: 'w-open-sicilian',
      side: 'white',
      group: 'e4',
      familyId: 'wf-sicilian',
      family: 'Sicilian Defence',
      short: 'Open Sicilian (2.Nf3 and 3.d4)',
      name: 'Open Sicilian (2.Nf3 and 3.d4)',
      aliases: ['Main-line Sicilian'],
      eco: 'B50',
      defining: ['e2e4', 'c7c5', 'g1f3'],
      moves: '1.e4 c5 2.Nf3',
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 25,
      summary: '2.Nf3 and 3.d4: the critical test of the Sicilian. White gains time and space; Black gets the half-open c-file.',
      idea: "After 3.d4 cxd4 4.Nxd4, White trades a centre pawn for Black's c-pawn and opens lines for quick development. Black keeps two central pawns and counterplay on the c-file. A popular plan is the English Attack: Be3, f3, Qd2 and O-O-O followed by a kingside pawn storm. Calmer set-ups with Be2 and O-O also exist.",
      plans: {
        white: [
          'Develop fast and use the lead in development before Black untangles.',
          'With castling on opposite sides, storm with g4, h4 and g5.',
          'Occupy the d5 square with a knight when Black has played ...e5.'
        ],
        black: [
          'Counter-attack on the queenside with ...b5, ...b4 and pressure on the c-file.',
          'Use the extra central pawn and prepare the ...d5 break.',
          'Play ...e5 to gain space and drive the d4 knight away.'
        ]
      },
      responses: [
        {
          moves: '2...d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6',
          name: 'Najdorf',
          note: '6.Be3 with f3, Qd2 and O-O-O: the English Attack. Answer 6...Ng4 with 7.Bg5.',
          line: 'najdorf'
        },
        {
          moves: '5...g6 6.Be3 Bg7 7.f3',
          name: 'Dragon',
          note: 'The Yugoslav Attack: Qd2, Bc4 and O-O-O, then h4-h5 against the black king.',
          line: 'dragon'
        },
        {
          moves: '2...Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5',
          name: 'Sveshnikov',
          note: '6.Ndb5 d6 7.Bg5 a6 8.Na3 b5: the fight is for the d5 hole. 3.Bb5, the Rossolimo, avoids this.',
          line: 'sveshnikov'
        },
        {
          moves: '2...e6 3.d4 cxd4 4.Nxd4 Nc6 5.Nc3 Qc7',
          name: 'Taimanov',
          note: '6.Be3 a6 7.Qd2 and O-O-O. Against the Kan, 4...a6, Bd3 with c4 or Nc3 is sound.',
          line: 'taimanov'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'g1f3', san: 'Nf3', note: 'Prepares d4.' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'd2d4', san: 'd4', note: 'Opens the centre.' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'f3d4', san: 'Nxd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'a7a6', san: 'a6', note: 'The Najdorf: flexible and ambitious.' },
          { uci: 'c1e3', san: 'Be3', note: 'The English Attack: Be3, f3, Qd2 and O-O-O.' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'd4b3', san: 'Nb3' },
          { uci: 'c8e6', san: 'Be6' },
          { uci: 'f2f3', san: 'f3', note: 'Stops ...Ng4 and supports a later g4.' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'd1d2', san: 'Qd2' }
        ]
      },
      lines: [
        {
          id: 'najdorf',
          name: '2...d6 and 5...a6: the Najdorf',
          kind: 'Main line',
          summary: 'The English Attack: Be3, f3, Qd2 and O-O-O, then g4 and a kingside pawn storm, while Black attacks on the queenside.',
          moves: [
            { uci: 'd7d6', san: 'd6' },
            { uci: 'd2d4', san: 'd4', note: 'Opens the centre.' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'a7a6', san: 'a6', note: 'The Najdorf: flexible and ambitious.' },
            { uci: 'c1e3', san: 'Be3', note: 'The English Attack set-up.' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'd4b3', san: 'Nb3' },
            { uci: 'c8e6', san: 'Be6' },
            { uci: 'f2f3', san: 'f3', note: 'Stops ...Ng4 and prepares g4.' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'd1d2', san: 'Qd2' }
          ]
        },
        {
          id: 'dragon',
          name: '5...g6: the Dragon',
          kind: 'Alternative',
          summary: 'The Yugoslav Attack: Be3, f3, Qd2, Bc4 and O-O-O, then h4-h5 to open the h-file against the fianchettoed king.',
          moves: [
            { uci: 'd7d6', san: 'd6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g7g6', san: 'g6', note: 'The Dragon: the bishop goes to g7.' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f2f3', san: 'f3', note: 'Stops ...Ng4 and supports g4.' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1c4', san: 'Bc4', note: 'Controls d5 before castling long, so ...d5 is harder.' }
          ]
        },
        {
          id: 'sveshnikov',
          name: '2...Nc6 and 5...e5: the Sveshnikov',
          kind: 'Alternative',
          summary: 'Black accepts a hole on d5 for activity. White plays Ndb5, Bg5 and Bxf6 to win control of d5.',
          moves: [
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'd4b5', san: 'Ndb5', note: 'Heads for d6 and d5.' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'c1g5', san: 'Bg5', note: 'Aims to remove the knight that guards d5.' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5a3', san: 'Na3' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'g5f6', san: 'Bxf6' }
          ]
        },
        {
          id: 'taimanov',
          name: '2...e6 and 4...Nc6: the Taimanov',
          kind: 'Alternative',
          summary: 'A flexible system. White uses the English Attack set-up with Be3, Qd2 and O-O-O, followed by f3 and g4.',
          moves: [
            { uci: 'e7e6', san: 'e6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd8c7', san: 'Qc7' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'd1d2', san: 'Qd2', note: 'Prepares O-O-O, then f3 and g4.' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e1c1', san: 'O-O-O' },
            { uci: 'f8b4', san: 'Bb4' },
            { uci: 'f2f3', san: 'f3', note: 'Keeps e4 solid against the pin.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'white',
          title: '6.Be3 Ng4 in the Najdorf',
          text: 'After 6.Be3 the jump 6...Ng4 hits the bishop. 7.Bg5 h6 8.Bh4 g5 9.Bg3 is the main reply; or play 6.f3 first if you want to rule it out.',
          uci: ['e2e4', 'c7c5', 'g1f3', 'd7d6', 'd2d4', 'c5d4', 'f3d4', 'g8f6', 'b1c3', 'a7a6', 'c1e3', 'f6g4']
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'Castling long too soon in the Dragon',
          text: "In the Yugoslav Attack, 9.O-O-O allows 9...d5!, freeing Black's game. 9.Bc4 first keeps d5 under control; 9.O-O-O d5 is a main line in its own right, but you must know it.",
          uci: [
            'e2e4',
            'c7c5',
            'g1f3',
            'd7d6',
            'd2d4',
            'c5d4',
            'f3d4',
            'g8f6',
            'b1c3',
            'g7g6',
            'c1e3',
            'f8g7',
            'f2f3',
            'e8g8',
            'd1d2',
            'b8c6',
            'e1c1',
            'd6d5'
          ]
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Ignoring the queenside counter-attack',
          text: "With opposite-side castling Black's ...b5, ...b4 and the half-open c-file arrive fast. Count tempi: one slow move can decide the race."
        }
      ],
      lessons: ['attack-7', 'black-vs-e4-6']
    },
    {
      id: 'w-sicilian-rossolimo',
      side: 'white',
      group: 'e4',
      familyId: 'wf-sicilian',
      family: 'Sicilian Defence',
      short: 'Rossolimo Variation (2...Nc6 3.Bb5)',
      name: 'Sicilian: Rossolimo Variation (3.Bb5)',
      aliases: ['Rossolimo Attack', '3.Bb5 Sicilian'],
      eco: 'B30-B31',
      defining: ['e2e4', 'c7c5', 'g1f3', 'b8c6', 'f1b5'],
      moves: '1.e4 c5 2.Nf3 Nc6 3.Bb5',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 12,
      summary: "Against 2...Nc6, 3.Bb5 avoids the Open Sicilian. White often gives the bishop for the c6 knight to damage Black's pawns and plays a calm positional game.",
      idea: "The bishop pins the knight and threatens to take on c6, doubling Black's pawns. White castles quickly and plays Re1 with c3 and d4, or the slower d3, h3 and Nc3, and is often happy to trade on c6. Against 3...g6 the plan Bxc6, d3, h3, Nc3, Be3 and Qd2 aims to trade Black's g7 bishop with Bh6. The theory is much lighter than in the Sveshnikov or Taimanov.",
      plans: {
        white: [
          'Take on c6 when it doubles the pawns and the bishop pair is hard for Black to use.',
          'Against ...g6, play d3, h3, Nc3, Be3 and Qd2 to trade bishops with Bh6.',
          'Against ...e6, castle, play Re1 and c3 and prepare d4.'
        ],
        black: [
          'Use the bishop pair and the open lines after Bxc6.',
          'Fianchetto with ...g6 and ...Bg7 and play ...e5 or ...b6.',
          'With ...e6 and ...Nge7, recapture on c6 with the knight.'
        ]
      },
      responses: [
        {
          moves: '3...g6 4.Bxc6 dxc6',
          name: 'Main line',
          note: '5.d3 Bg7 6.h3 Nf6 7.Nc3 O-O 8.Be3, then Qd2 and Bh6.',
          line: 'g6'
        },
        {
          moves: '3...e6 4.O-O Nge7',
          name: '...e6 and ...Nge7',
          note: '5.Re1 a6 6.Bf1: keep the bishop and prepare c3 and d4.',
          line: 'e6'
        },
        {
          moves: '3...d6 4.O-O',
          name: '...d6',
          note: '4...Bd7 5.Re1 Nf6 6.c3 a6 7.Bf1, then d4. The same position can arise from 2...d6 3.Bb5+ Nc6.',
          line: 'd6'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'f1b5', san: 'Bb5', note: 'Pins the knight and threatens to double the pawns.' },
          { uci: 'g7g6', san: 'g6' },
          { uci: 'b5c6', san: 'Bxc6', note: "Gives the bishop to damage Black's structure." },
          { uci: 'd7c6', san: 'dxc6' },
          { uci: 'd2d3', san: 'd3', note: 'Keeps the centre closed, so the bishop pair matters less.' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'h2h3', san: 'h3', note: 'Stops ...Bg4 and ...Ng4.' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'b7b6', san: 'b6' },
          { uci: 'd1d2', san: 'Qd2', note: 'Prepares Bh6 to trade the g7 bishop.' },
          { uci: 'e7e5', san: 'e5' }
        ]
      },
      lines: [
        {
          id: 'g6',
          name: '3...g6 4.Bxc6: the main line',
          kind: 'Main line',
          summary: 'White doubles the c-pawns, keeps the centre closed and aims to trade the g7 bishop with Be3, Qd2 and Bh6.',
          moves: [
            { uci: 'g7g6', san: 'g6' },
            { uci: 'b5c6', san: 'Bxc6' },
            { uci: 'd7c6', san: 'dxc6' },
            { uci: 'd2d3', san: 'd3', note: 'Keeps the centre closed so the bishop pair matters less.' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'b7b6', san: 'b6' },
            { uci: 'd1d2', san: 'Qd2', note: 'Bh6 is next, trading the g7 bishop.' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'e3h6', san: 'Bh6' }
          ]
        },
        {
          id: 'e6',
          name: '3...e6 4.O-O Nge7',
          kind: 'Alternative',
          summary: 'Black is ready to recapture on c6 with the knight. White keeps the bishop with Re1 and Bf1 and prepares c3 and d4.',
          moves: [
            { uci: 'e7e6', san: 'e6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'g8e7', san: 'Nge7', note: 'Ready to recapture on c6 with the knight.' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5f1', san: 'Bf1', note: 'Keeps the bishop; c3 and d4 follow.' }
          ]
        },
        {
          id: 'd6',
          name: '3...d6 4.O-O',
          kind: 'Sideline',
          summary: 'Black supports the centre and breaks the pin with ...Bd7. White keeps the bishop with Bf1 and prepares d4 with c3.',
          moves: [
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c8d7', san: 'Bd7', note: 'Breaks the pin.' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5f1', san: 'Bf1', note: 'Keeps the bishop; h3 and d4 follow.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'white',
          title: 'Opening the position for the bishops',
          text: 'After Bxc6 Black has the bishop pair. Keep the centre closed with d3 and avoid early exchanges of central pawns; the doubled c-pawns matter most in a slow game.'
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Losing time with the bishop',
          text: 'If White neither takes on c6 nor keeps the bishop safe, ...a6 or ...Nd4 gains time against it. Decide early: Bxc6, or Re1 and a retreat to f1.'
        }
      ],
      transpositions: [
        { to: 'w-sicilian-moscow', note: '3...d6 gives the same position as 2...d6 3.Bb5+ Nc6.' }
      ],
      lessons: ['white-openings-15']
    },
    {
      id: 'w-sicilian-moscow',
      side: 'white',
      group: 'e4',
      familyId: 'wf-sicilian',
      family: 'Sicilian Defence',
      short: 'Moscow Variation (2...d6 3.Bb5+)',
      name: 'Sicilian: Moscow Variation (3.Bb5+)',
      aliases: ['Canal-Sokolsky Attack', 'Bb5+ Sicilian'],
      eco: 'B51-B52',
      defining: ['e2e4', 'c7c5', 'g1f3', 'd7d6', 'f1b5'],
      moves: '1.e4 c5 2.Nf3 d6 3.Bb5+',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 12,
      summary: 'Against 2...d6, the check 3.Bb5+ avoids Najdorf and Dragon theory. White trades light-squared bishops and often builds a grip on d5 with c4.',
      idea: 'After 3...Bd7 4.Bxd7+ Qxd7 the light-squared bishops are gone and the game is calmer. White can play c4 for a Maroczy-style bind, with pawns on c4 and e4 controlling d5, or c3 and d4 for a broad centre. After 3...Nd7 Black keeps both bishops and White opens the centre with d4 for quick development. 3...Nc6 transposes to the Rossolimo.',
      plans: {
        white: [
          'After 3...Bd7 4.Bxd7+ Qxd7, castle and choose c4 with Nc3 or c3 with d4.',
          'Use the d5 square for a knight once Black plays ...e5 or ...e6.',
          'Against 3...Nd7, open the centre with d4 and use the lead in development.'
        ],
        black: [
          'Develop with ...Nc6, ...Nf6 and ...g6 or ...e6 and fight for d4.',
          'Break with ...b5 or ...d5 against the c4 set-up.',
          'After 3...Nd7, keep both bishops and aim for ...a6 and ...b5.'
        ]
      },
      responses: [
        {
          moves: '3...Bd7 4.Bxd7+ Qxd7 5.O-O',
          name: 'Main line',
          note: '5...Nc6 6.c3 Nf6 7.Re1 e6 8.d4 cxd4 9.cxd4 d5 10.e5: a French-like structure with more space for White.',
          line: 'bd7'
        },
        {
          moves: '5.c4',
          name: 'Maroczy-style',
          note: '5...Nc6 6.Nc3 Nf6 7.d4 cxd4 8.Nxd4 g6 9.f3: pawns on c4 and e4 clamp the d5 square.',
          line: 'c4'
        },
        {
          moves: '3...Nd7 4.d4',
          name: '3...Nd7',
          note: '4...Nf6 5.Nc3 cxd4 6.Qxd4 e5 7.Qd3: quick development; Black keeps the bishop pair but has a hole on d5.',
          line: 'nd7'
        },
        {
          moves: '3...Nc6',
          name: 'Rossolimo transposition',
          note: 'The position is the same as 2...Nc6 3.Bb5 d6; see the Rossolimo.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'f1b5', san: 'Bb5+', note: 'The check avoids the main-line Open Sicilian.' },
          { uci: 'c8d7', san: 'Bd7', note: 'The usual block.' },
          { uci: 'b5d7', san: 'Bxd7+' },
          { uci: 'd8d7', san: 'Qxd7' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'c2c3', san: 'c3', note: 'Prepares d4 so that a pawn can recapture.' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'f1e1', san: 'Re1' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'c3d4', san: 'cxd4' },
          { uci: 'd6d5', san: 'd5', note: 'Black strikes at the centre.' }
        ]
      },
      lines: [
        {
          id: 'bd7',
          name: '3...Bd7 4.Bxd7+ Qxd7 5.O-O: c3 and d4',
          kind: 'Main line',
          summary: 'White builds a classical centre with c3 and d4. After ...d5 and e5 the structure resembles an Advance French with extra space for White.',
          moves: [
            { uci: 'c8d7', san: 'Bd7', note: 'The usual block: Black offers a bishop trade.' },
            { uci: 'b5d7', san: 'Bxd7+' },
            { uci: 'd8d7', san: 'Qxd7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'd2d4', san: 'd4', note: 'A classical centre.' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'd6d5', san: 'd5' },
            { uci: 'e4e5', san: 'e5', note: 'Gains space; a French-like structure with more room for White.' }
          ]
        },
        {
          id: 'c4',
          name: '5.c4: a grip on d5',
          kind: 'Alternative',
          summary: 'Pawns on c4 and e4 control d5. White opens with d4, recaptures with the knight and holds e4 with f3, keeping a space edge.',
          moves: [
            { uci: 'c8d7', san: 'Bd7' },
            { uci: 'b5d7', san: 'Bxd7+' },
            { uci: 'd8d7', san: 'Qxd7' },
            { uci: 'c2c4', san: 'c4', note: 'Pawns on c4 and e4 control d5: a Maroczy-style grip.' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'f2f3', san: 'f3', note: 'Holds e4 solidly; Be3, Qd2 and O-O follow.' }
          ]
        },
        {
          id: 'nd7',
          name: '3...Nd7 4.d4',
          kind: 'Alternative',
          summary: 'Black keeps both bishops. White opens the centre at once and develops; the queen is safe on d4 and then d3.',
          moves: [
            { uci: 'b8d7', san: 'Nd7', note: 'Black keeps the light-squared bishop.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'd1d4', san: 'Qxd4', note: 'The queen is safe here: no black knight can hit it from c6.' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'd4d3', san: 'Qd3', note: 'White has quick development and the d5 square.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'white',
          title: 'An early queen on d4',
          text: 'After ...cxd4, Qxd4 is good only when Black cannot gain time with ...Nc6. With a black knight ready to come to c6, recapture with a piece or prepare c3.'
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'Quiet often means equal',
          text: 'The bishop trade removes much of the Sicilian imbalance. White keeps a small space edge at best, so play for a lasting bind with c4 or a broad centre with c3 and d4, not a quick attack.'
        }
      ],
      transpositions: [
        { to: 'w-sicilian-rossolimo', note: '3...Nc6 reaches the Rossolimo position 2...Nc6 3.Bb5 d6.' }
      ],
      lessons: ['white-openings-15'],
      uncertain: 'The 5.c4 move order shown is one of several ways to reach a c4-e4 grip; Black has other set-ups, and move orders vary.'
    },
    {
      id: 'w-alapin-sicilian',
      side: 'white',
      group: 'e4',
      familyId: 'wf-sicilian',
      family: 'Sicilian Defence',
      short: 'Alapin Variation (2.c3)',
      name: 'Sicilian: Alapin Variation (2.c3)',
      aliases: ['c3 Sicilian', '2.c3 Sicilian'],
      eco: 'B22',
      defining: ['e2e4', 'c7c5', 'c2c3'],
      moves: '1.e4 c5 2.c3',
      difficulty: 'Beginner',
      style: 'Positional',
      minutes: 12,
      summary: '2.c3 prepares d4 so that White can recapture with a pawn. Much less theory than the Open Sicilian and a clear central plan.',
      idea: "With c3, White aims for a full pawn centre after d4. Black usually hits e4 at once. Many positions have an isolated queen's pawn (a d-pawn with no pawns of its own colour on the c- or e-files) and free piece play. Because c3 takes the knight's natural square, Black's queen can sit on d5 for a while, but White later gains time against it with Nc3.",
      plans: {
        white: [
          'Build a pawn centre with d4 and develop with Nf3, Be2 or Bd3 and O-O.',
          'With an isolated d-pawn, use the e5 square and attack on the kingside.',
          'Gain time against an early black queen with Nc3.'
        ],
        black: [
          'Attack e4 at once with ...d5 or ...Nf6.',
          'Blockade an isolated d-pawn on d5 and trade pieces.',
          "Develop the queen's bishop to g4 to pressure d4."
        ]
      },
      responses: [
        {
          moves: '2...d5 3.exd5 Qxd5 4.d4',
          note: '4...Nf6 5.Nf3 and Be2 or Bd3. After ...cxd4 cxd4, Nc3 comes with gain of time on the queen.',
          line: 'd5'
        },
        {
          moves: '2...Nf6 3.e5 Nd5 4.d4',
          note: '4...cxd4 5.Nf3 Nc6 6.cxd4 (5.cxd4 at once is also good): White has extra space, and Bc4 is a common follow-up.',
          line: 'nf6'
        },
        {
          moves: '2...e6 3.d4 d5',
          note: 'Play 4.exd5 exd5 5.Nf3 for open play, or 4.e5 to reach an Advance French.',
          line: 'e6'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'c2c3', san: 'c3', note: 'Prepares d4 with pawn support.' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'e4d5', san: 'exd5' },
          { uci: 'd8d5', san: 'Qxd5' },
          { uci: 'd2d4', san: 'd4', note: "Black's queen is central but can be hit later." },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'c8g4', san: 'Bg4', note: 'Pressure on d4 through the f3 knight.' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'h2h3', san: 'h3' },
          { uci: 'g4h5', san: 'Bh5' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'c1e3', san: 'Be3', note: 'Holds d4. After ...cxd4 cxd4 White has an isolated d-pawn and free piece play.' }
        ]
      },
      lines: [
        {
          id: 'd5',
          name: '2...d5 3.exd5 Qxd5',
          kind: 'Main line',
          summary: "Black's queen is central for now. White builds d4, develops calmly and often gets an isolated d-pawn with free piece play.",
          moves: [
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'd8d5', san: 'Qxd5' },
            { uci: 'd2d4', san: 'd4', note: 'The queen is central but can be hit later.' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c8g4', san: 'Bg4' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'g4h5', san: 'Bh5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'c1e3', san: 'Be3', note: 'Holds d4. After ...cxd4 cxd4 White has an isolated d-pawn and free pieces.' }
          ]
        },
        {
          id: 'nf6',
          name: '2...Nf6 3.e5 Nd5',
          kind: 'Alternative',
          summary: 'White gains space with e5 and builds a broad centre with d4 and cxd4; Bc4 hits the d5 knight.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e4e5', san: 'e5', note: 'Gains space and chases the knight.' },
            { uci: 'f6d5', san: 'Nd5' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'c3d4', san: 'cxd4', note: 'White has a broad centre.' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'f1c4', san: 'Bc4', note: 'Hits the d5 knight.' },
            { uci: 'd5b6', san: 'Nb6' },
            { uci: 'c4b3', san: 'Bb3' }
          ]
        },
        {
          id: 'e6',
          name: '2...e6 3.d4 d5 4.e5',
          kind: 'Sideline',
          summary: 'After 4.e5 the game becomes an Advance French. Know the French plans: support d4 and gain space with a3 and b4.',
          moves: [
            { uci: 'e7e6', san: 'e6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4e5', san: 'e5', note: 'Now it is an Advance French.' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd8b6', san: 'Qb6' },
            { uci: 'a2a3', san: 'a3', note: 'Prepares b4, as in the Advance French main line.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Leaving d4 under-defended',
          text: 'In the 2...d5 lines Black pressures d4 with ...Bg4, ...Nc6 and the queen. Keep it covered with Be2, Be3 and h3; losing d4 leaves White clearly worse.'
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'The isolated pawn in the endgame',
          text: 'After ...cxd4 cxd4 White often has an isolated d-pawn: strong in the middlegame, weak when the pieces come off. Keep pieces on and use the e5 square and kingside chances.'
        }
      ],
      transpositions: [
        { to: 'w-advance-french', note: 'After 2...e6 3.d4 d5 4.e5 the game becomes an Advance French.' }
      ],
      lessons: ['white-openings-4', 'strategy-6']
    },
    {
      id: 'w-sicilian-closed',
      side: 'white',
      group: 'e4',
      familyId: 'wf-sicilian',
      family: 'Sicilian Defence',
      short: 'Closed Sicilian (2.Nc3)',
      name: 'Sicilian: Closed Sicilian and Grand Prix (2.Nc3)',
      aliases: ['Closed Sicilian', 'Grand Prix Attack'],
      eco: 'B23-B26',
      defining: ['e2e4', 'c7c5', 'b1c3'],
      moves: '1.e4 c5 2.Nc3',
      difficulty: 'Intermediate',
      style: 'Attacking',
      minutes: 12,
      summary: '2.Nc3 keeps the centre closed. White plays g3, Bg2, d3 and f4, or the Grand Prix with f4 and Nf3, and attacks on the kingside.',
      idea: 'Instead of opening the centre with d4, White keeps it closed and plays on the kingside. In the Closed Sicilian, g3, Bg2, d3, f4, Nf3, O-O and Be3 prepare f5 or a pawn storm; in the Grand Prix, f4 and Nf3 come quickly, followed by Bb5 or Bc4 and a later f5. Black usually fianchettoes and counters on the queenside with ...Rb8 and ...b5, or in the centre with ...d5.',
      plans: {
        white: [
          'Build g3, Bg2, d3, f4 and Nf3, castle, then push f5 or play Be3 and Qd2.',
          'In the Grand Prix, play f4, Nf3 and Bb5 or Bc4, castle and attack with f5 or Qe1-h4.',
          'Keep the option of Nf3 and d4, which turns the game into an Open Sicilian.'
        ],
        black: [
          'Fianchetto with ...g6 and ...Bg7, aiming down the long diagonal.',
          'Expand on the queenside with ...Rb8, ...b5 and ...b4.',
          'Strike in the centre with ...d5 or ...e5 before White attacks.'
        ]
      },
      responses: [
        {
          moves: '2...Nc6 3.g3',
          name: 'Closed main line',
          note: '3...g6 4.Bg2 Bg7 5.d3 d6 6.f4 e6 7.Nf3 Nge7 8.O-O O-O 9.Be3: a slow kingside build-up.',
          line: 'closed'
        },
        {
          moves: '2...Nc6 3.f4',
          name: 'Grand Prix Attack',
          note: '3...g6 4.Nf3 Bg7 5.Bb5 Nd4 6.O-O: quick development and kingside chances.',
          line: 'gp'
        },
        {
          moves: '2...e6 3.g3',
          name: '...e6 and ...d5',
          note: '3...d5 4.exd5 exd5 5.Bg2 Nf6 6.d3: Black has a free centre; White plays Nge2, O-O and Bg5.',
          line: 'e6'
        },
        {
          moves: '2...d6 3.f4',
          note: 'A Grand Prix against ...d6: Nf3, Bb5+ or Bc4 and O-O. 3.Nf3 with 4.d4 is an Open Sicilian.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'b1c3', san: 'Nc3', note: 'Keeps the centre closed and develops.' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'g2g3', san: 'g3' },
          { uci: 'g7g6', san: 'g6' },
          { uci: 'f1g2', san: 'Bg2', note: 'The bishop eyes the long diagonal.' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'd2d3', san: 'd3' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'f2f4', san: 'f4', note: 'Prepares Nf3, O-O and a later f5.' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g8e7', san: 'Nge7' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'c1e3', san: 'Be3', note: 'Prepares Qd2 and, at the right moment, d4 or f5.' }
        ]
      },
      lines: [
        {
          id: 'closed',
          name: '2...Nc6 3.g3: the Closed main line',
          kind: 'Main line',
          summary: 'Both sides fianchetto. White adds d3, f4, Nf3, O-O and Be3 and plays for f5 or a kingside storm; Black plays on the queenside.',
          moves: [
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'f2f4', san: 'f4', note: 'Prepares Nf3, O-O and f5.' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8e7', san: 'Nge7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c1e3', san: 'Be3', note: 'Supports d4 and prepares Qd2.' }
          ]
        },
        {
          id: 'gp',
          name: '2...Nc6 3.f4: the Grand Prix',
          kind: 'Alternative',
          summary: 'f4 comes before Nf3. White develops the bishop to b5, castles and prepares f5 or Qe1-h4.',
          moves: [
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f2f4', san: 'f4', note: 'The Grand Prix: f4 before Nf3.' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1b5', san: 'Bb5', note: 'Pins the knight; White may take on c6 to double the pawns.' },
            { uci: 'c6d4', san: 'Nd4' },
            { uci: 'e1g1', san: 'O-O', note: 'Castle first; Nxd4 or Bd3 and a later f5 follow.' }
          ]
        },
        {
          id: 'e6',
          name: '2...e6 3.g3 d5',
          kind: 'Alternative',
          summary: 'Black strikes in the centre at once. White exchanges, fianchettoes and puts pressure on d5 with Nge2, O-O and Bg5.',
          moves: [
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'd7d5', san: 'd5', note: 'Black challenges the centre at once.' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd2d3', san: 'd3', note: 'Solid: Nge2, O-O and Bg5 put pressure on d5.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'white',
          title: "Black's queenside play comes first",
          text: 'The Closed Sicilian is slow. If White shuffles, ...Rb8, ...b5 and ...b4 arrive before the kingside attack. Choose a clear plan, such as f4-f5 or Be3, Qd2 and Bh6, and carry it out.'
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Leaving the king in the centre',
          text: "In the Grand Prix, a well-timed ...d5 opens the centre while White's king is still on e1. Develop with Nf3, a bishop and O-O before pushing f5."
        }
      ],
      transpositions: [
        {
          to: 'w-open-sicilian',
          note: '2.Nc3 followed by Nf3 and d4, for example 2...d6 3.Nf3 and 4.d4, reaches the Open Sicilian.'
        }
      ],
      lessons: ['white-openings-16']
    },
    {
      id: 'w-advance-french',
      side: 'white',
      group: 'e4',
      familyId: 'wf-french',
      family: 'French Defence',
      short: 'Advance Variation (3.e5)',
      name: 'French: Advance Variation',
      aliases: ['Advance French'],
      eco: 'C02',
      defining: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'e4e5'],
      moves: '1.e4 e6 2.d4 d5 3.e5',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 12,
      summary: '3.e5 gains space and locks the centre. White defends the base of the pawn chain on d4 and plays on the kingside.',
      idea: "White's pawn chain d4-e5 (pawns defending each other on a diagonal) cramps Black, especially the bishop on c8. Black attacks the base of the chain with ...c5, ...Nc6 and ...Qb6, and sometimes the head with ...f6. White supports d4 with c3 and Nf3, gains queenside space with a3 and b4 where possible, and uses the extra kingside space for an attack.",
      plans: {
        white: [
          'Support d4 with c3, Nf3 and, when needed, Be2 or Be3.',
          'Gain queenside space with a3 and b4 in the ...Qb6 lines.',
          'Use the space given by the e5 pawn for a kingside attack.'
        ],
        black: [
          'Hit the base of the chain with ...c5, ...Nc6 and ...Qb6.',
          'Undermine e5 with ...f6.',
          'Trade the passive light-squared bishop with ...Bd7-b5 or ...b6 and ...Ba6.'
        ]
      },
      responses: [
        {
          moves: '3...c5 4.c3 Nc6 5.Nf3 Qb6 6.a3',
          name: 'Main line',
          note: 'Prepares b4 and keeps d4 solid. After 6...c4 7.Nbd2 the centre stays closed and both sides manoeuvre.',
          line: 'main'
        },
        {
          moves: '5...Bd7 6.Be2',
          note: 'Simple and solid: castle, keep d4 and choose a plan once Black commits. 6.a3 is also popular.',
          line: 'bd7'
        },
        {
          moves: '3...b6',
          note: 'Black wants ...Ba6 to trade the passive bishop. 4.c3 and Nf3 are natural; after a trade on a6 the black knight stands offside.',
          line: 'b6'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'e4e5', san: 'e5', note: "Gains space and blocks the c8 bishop's diagonal." },
          { uci: 'c7c5', san: 'c5', note: 'Black attacks the base of the d4-e5 chain.' },
          { uci: 'c2c3', san: 'c3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'd8b6', san: 'Qb6', note: 'Queen, knight and c5 pawn all hit d4.' },
          { uci: 'a2a3', san: 'a3', note: 'Prepares b4 to gain queenside space.' },
          { uci: 'c5c4', san: 'c4', note: "Gains queenside space and takes d3 from White's bishop; a b4 push can now be met by ...cxb3 en passant." },
          { uci: 'b1d2', san: 'Nbd2', note: 'Covers b3 against ...Na5-b3 and prepares Rb1 with b3 or b4 to challenge c4; the centre stays closed.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '3...c5 4.c3 Nc6 5.Nf3 Qb6 6.a3',
          kind: 'Main line',
          summary: 'Black hits d4 three times; White holds it and prepares b4. After ...c4 the centre is closed and both sides manoeuvre.',
          moves: [
            { uci: 'c7c5', san: 'c5', note: 'Black attacks the base of the d4-e5 chain.' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd8b6', san: 'Qb6', note: 'Queen, knight and c5 pawn all hit d4.' },
            { uci: 'a2a3', san: 'a3', note: 'Prepares b4 to gain queenside space.' },
            { uci: 'c5c4', san: 'c4' },
            { uci: 'b1d2', san: 'Nbd2', note: 'Covers b3 and prepares Rb1 with b3 or b4.' }
          ]
        },
        {
          id: 'bd7',
          name: '5...Bd7 6.Be2',
          kind: 'Alternative',
          summary: 'A flexible set-up for Black. White develops, brings the knight to c2 via a3 to guard d4, and keeps the space edge.',
          moves: [
            { uci: 'c7c5', san: 'c5' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c8d7', san: 'Bd7' },
            { uci: 'f1e2', san: 'Be2', note: 'Simple: castle and keep d4.' },
            { uci: 'g8e7', san: 'Nge7' },
            { uci: 'b1a3', san: 'Na3', note: 'Heading for c2 to support d4.' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'e7f5', san: 'Nf5' },
            { uci: 'a3c2', san: 'Nc2' }
          ]
        },
        {
          id: 'b6',
          name: '3...b6: trading the bad bishop',
          kind: 'Sideline',
          summary: "Black prepares ...Ba6 to swap the problem bishop. After the trade Black's knight stands offside on a6 and White keeps space.",
          moves: [
            { uci: 'b7b6', san: 'b6', note: 'Black wants ...Ba6 to trade the bad bishop.' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'd8d7', san: 'Qd7' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c8a6', san: 'Ba6' },
            { uci: 'f1a6', san: 'Bxa6' },
            { uci: 'b8a6', san: 'Nxa6' },
            { uci: 'e1g1', san: 'O-O', note: "Black's knight on a6 is offside; White keeps space." }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: 'Grabbing d4 when Bb5+ is possible',
          text: 'With the bishop on d3, 7...Nxd4? 8.Nxd4 Qxd4 9.Bb5+ uncovers an attack on the queen from d1. Black must prepare with 7...Bd7.',
          uci: [
            'e2e4',
            'e7e6',
            'd2d4',
            'd7d5',
            'e4e5',
            'c7c5',
            'c2c3',
            'b8c6',
            'g1f3',
            'd8b6',
            'f1d3',
            'c5d4',
            'c3d4',
            'c6d4',
            'f3d4',
            'b6d4',
            'd3b5'
          ]
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'The ...f6 break against e5',
          text: 'Black often hits the head of the chain with ...f6. Keep e5 supported by Nf3 and, if needed, Re1 or f4, and exchange on f6 only when it suits you.'
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'b4 at the wrong moment',
          text: 'After ...c4, b4 can be met by ...cxb3 en passant, and against ...Qb6 an early b4 can leave c3 or d4 loose. Prepare queenside play with Nbd2, Rb1 and b3.'
        }
      ],
      transpositions: [
        {
          to: 'w-alapin-sicilian',
          note: '1.e4 c5 2.c3 e6 3.d4 d5 4.e5 reaches the same Advance French structure.'
        }
      ],
      lessons: ['strategy-4', 'black-vs-e4-4'],
      uncertain: 'The 3...b6 4.c3 Qd7 set-up is less common than 3...c5; move orders vary.'
    },
    {
      id: 'w-tarrasch-french',
      side: 'white',
      group: 'e4',
      familyId: 'wf-french',
      family: 'French Defence',
      short: 'Tarrasch Variation (3.Nd2)',
      name: 'French: Tarrasch Variation (3.Nd2)',
      aliases: ['Tarrasch French'],
      eco: 'C03',
      defining: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1d2'],
      moves: '1.e4 e6 2.d4 d5 3.Nd2',
      difficulty: 'Intermediate',
      style: 'Solid',
      minutes: 14,
      summary: '3.Nd2 keeps the c-pawn free and avoids the pin ...Bb4. Solid, flexible play against every French set-up.',
      idea: 'With the knight on d2 rather than c3, White can support d4 with c3 and cannot be pinned by ...Bb4. Against 3...Nf6 White gains space with e5 and builds the c3-d4-e5 centre; against 3...c5 the game often opens and Black may get an isolated d-pawn. The drawback is that the d2 knight blocks the c1 bishop for a while.',
      plans: {
        white: [
          'Build the c3-d4-e5 chain and develop with Bd3, Ne2 and Nf3.',
          'Against an isolated d5 pawn, blockade it on d4 and trade pieces.',
          'Aim the d3 bishop and other pieces at the black kingside.'
        ],
        black: [
          'Hit the centre with ...c5, at once or after ...Nf6-d7.',
          'Break with ...f6 to open the f-file.',
          'In the open lines, use quick development to make up for an isolated pawn.'
        ]
      },
      responses: [
        {
          moves: '3...Nf6 4.e5 Nfd7 5.Bd3',
          name: 'Closed Tarrasch',
          note: '5...c5 6.c3 Nc6 7.Ne2 cxd4 8.cxd4 f6 9.exf6 Nxf6 10.Nf3: Black has free play, White targets e6 and the e5 square.',
          line: 'closed'
        },
        {
          moves: '3...c5 4.exd5 Qxd5 5.Ngf3',
          name: 'Open Tarrasch',
          note: '5...cxd4 6.Bc4 Qd6 7.O-O Nf6 8.Nb3 Nc6 9.Nbxd4: White regains the pawn with a lead in development.',
          line: 'open'
        },
        {
          moves: '3...Be7 4.Ngf3',
          note: '4...Nf6 5.e5 Nfd7 6.Bd3 c5 7.c3 Nc6 8.O-O: a familiar closed structure. Keep d4 and use the space on the kingside.'
        },
        {
          moves: '3...dxe4 4.Nxe4',
          name: 'Rubinstein',
          note: 'Black gives up the centre for safe development. Nf3, Bd3 or c3 and O-O give White a small, lasting space edge.',
          line: 'rubinstein'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'b1d2', san: 'Nd2', note: 'Avoids the pin ...Bb4 and keeps c3 free for a pawn.' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'e4e5', san: 'e5', note: 'Gains space and drives the knight back.' },
          { uci: 'f6d7', san: 'Nfd7' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'c2c3', san: 'c3', note: 'Supports d4 with a pawn.' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'g1e2', san: 'Ne2', note: 'Leaves f3 for the other knight and keeps d4 well protected.' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'c3d4', san: 'cxd4' },
          { uci: 'f7f6', san: 'f6', note: 'Black attacks the head of the chain.' },
          { uci: 'e5f6', san: 'exf6' },
          { uci: 'd7f6', san: 'Nxf6', note: 'Black has active pieces; White aims at the backward e6 pawn and the e5 square.' }
        ]
      },
      lines: [
        {
          id: 'closed',
          name: '3...Nf6 4.e5: the Closed Tarrasch',
          kind: 'Main line',
          summary: 'White builds c3-d4-e5 and develops with Bd3 and Ne2. After ...f6 and exf6 White targets e6 and the e5 square.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'f6d7', san: 'Nfd7' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'c2c3', san: 'c3', note: 'Supports d4 with a pawn.' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1e2', san: 'Ne2' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'f7f6', san: 'f6', note: 'Black attacks the head of the chain.' },
            { uci: 'e5f6', san: 'exf6' },
            { uci: 'd7f6', san: 'Nxf6' },
            { uci: 'd2f3', san: 'Nf3', note: 'Aims at e5 and the backward e6 pawn.' }
          ]
        },
        {
          id: 'open',
          name: '3...c5 4.exd5 Qxd5',
          kind: 'Alternative',
          summary: 'Black recaptures with the queen. White gains time with Bc4 and regains the d4 pawn with a lead in development.',
          moves: [
            { uci: 'c7c5', san: 'c5' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'd8d5', san: 'Qxd5' },
            { uci: 'g1f3', san: 'Ngf3' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'f1c4', san: 'Bc4', note: 'Gains time on the queen.' },
            { uci: 'd5d6', san: 'Qd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd2b3', san: 'Nb3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'b3d4', san: 'Nbxd4', note: 'White regains the pawn with a lead in development.' }
          ]
        },
        {
          id: 'iqp',
          name: '3...c5 4.exd5 exd5',
          kind: 'Alternative',
          summary: 'Black accepts an isolated d-pawn for free piece play. White blockades on d4, trades pieces and plays against the pawn.',
          moves: [
            { uci: 'c7c5', san: 'c5' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'e6d5', san: 'exd5', note: 'Black accepts an isolated d-pawn.' },
            { uci: 'g1f3', san: 'Ngf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1b5', san: 'Bb5', note: 'Pins the knight and prepares dxc5.' },
            { uci: 'f8d6', san: 'Bd6' },
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'd6c5', san: 'Bxc5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'g8e7', san: 'Ne7' },
            { uci: 'd2b3', san: 'Nb3', note: 'Blockade on d4 and play against the isolated pawn.' }
          ]
        },
        {
          id: 'rubinstein',
          name: '3...dxe4: the Rubinstein',
          kind: 'Sideline',
          summary: 'Black gives up the centre for safe development. White develops, castles and keeps a small, lasting space edge.',
          moves: [
            { uci: 'd5e4', san: 'dxe4', note: 'Black gives up the centre.' },
            { uci: 'd2e4', san: 'Nxe4' },
            { uci: 'b8d7', san: 'Nd7' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Ngf6' },
            { uci: 'e4f6', san: 'Nxf6+' },
            { uci: 'd7f6', san: 'Nxf6' },
            { uci: 'f1d3', san: 'Bd3', note: 'Develop, castle and keep the small space edge.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'white',
          title: "Black's free pieces in the IQP lines",
          text: 'After 3...c5 4.exd5 exd5 Black has an isolated d-pawn but very active pieces. Blockade on d4, trade pieces and avoid early attacks: the pawn grows weaker as the board empties.'
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Allowing ...e5 in the closed lines',
          text: 'After ...f6 and exf6, Black wants ...e5 to free the game. Control e5 with Nf3, Bf4 or Qe2 and keep the backward e6 pawn fixed.'
        }
      ],
      transpositions: [
        { to: 'w-french-nc3', note: '3...dxe4 4.Nxe4 is the same Rubinstein position as 3.Nc3 dxe4 4.Nxe4.' }
      ],
      lessons: ['strategy-7']
    },
    {
      id: 'w-french-nc3',
      side: 'white',
      group: 'e4',
      familyId: 'wf-french',
      family: 'French Defence',
      short: '3.Nc3 (Winawer, Classical, Rubinstein)',
      name: 'French: 3.Nc3 main line',
      aliases: ['Paulsen Variation', 'Main-line French'],
      eco: 'C10-C19',
      defining: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1c3'],
      moves: '1.e4 e6 2.d4 d5 3.Nc3',
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 18,
      summary: '3.Nc3 defends e4 with a piece and keeps the c1 bishop free. It meets the Winawer, the Classical and the Rubinstein head-on and leads to sharp, rich play.',
      idea: 'The knight defends e4 and develops, but it can be pinned. Against the Winawer, 3...Bb4, 4.e5 locks the centre; after ...Bxc3+ and bxc3 White has the bishop pair and chances on the dark squares, often starting with Qg4. Against the Classical, 3...Nf6, the Steinitz 4.e5 Nfd7 5.f4 builds a big centre. Against the Rubinstein, 3...dxe4, White keeps a small, lasting space edge.',
      plans: {
        white: [
          'Against the Winawer, play e5 and a3, and after ...Bxc3+ bxc3 attack the dark squares with Qg4.',
          'Against the Classical, support e5 with f4, Nf3 and Be3, often castling long.',
          'Against the Rubinstein, develop quickly and use the extra space.'
        ],
        black: [
          'Pin with ...Bb4 and attack the centre with ...c5.',
          'Undermine the chain with ...c5 and ...f6.',
          'Release the centre with ...dxe4 for safe, solid development.'
        ]
      },
      responses: [
        {
          moves: '3...Bb4 4.e5 c5 5.a3',
          name: 'Winawer',
          note: '5...Bxc3+ 6.bxc3 Ne7 7.Qg4: White attacks g7 and the dark squares; Black counters against c3 and on the queenside.',
          line: 'winawer'
        },
        {
          moves: '3...Nf6 4.e5 Nfd7 5.f4',
          name: 'Classical: Steinitz',
          note: '5...c5 6.Nf3 Nc6 7.Be3: a big centre; Black hits d4 with ...cxd4 and ...Bc5. 4.Bg5 is the other main move.',
          line: 'steinitz'
        },
        {
          moves: '3...dxe4 4.Nxe4',
          name: 'Rubinstein',
          note: '4...Nd7 5.Nf3 Ngf6 6.Nxf6+ Nxf6 7.Bd3: solid for Black; White keeps a small space edge.',
          line: 'rubinstein'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'b1c3', san: 'Nc3', note: 'Defends e4 and develops.' },
          { uci: 'f8b4', san: 'Bb4', note: 'The Winawer: Black pins the knight.' },
          { uci: 'e4e5', san: 'e5', note: 'Gains space and locks the centre.' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'a2a3', san: 'a3', note: 'Asks the bishop at once.' },
          { uci: 'b4c3', san: 'Bxc3+' },
          { uci: 'b2c3', san: 'bxc3', note: 'Doubled pawns, but the bishop pair and a strong centre.' },
          { uci: 'g8e7', san: 'Ne7' },
          { uci: 'd1g4', san: 'Qg4', note: 'Hits g7, which the black bishop no longer guards.' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'b8c6', san: 'Nbc6' },
          { uci: 'g4h5', san: 'Qh5' }
        ]
      },
      lines: [
        {
          id: 'winawer',
          name: '3...Bb4: the Winawer Poisoned Pawn',
          kind: 'Main line',
          summary: "White takes on g7 and h7; Black gets central play against c3 and d4. Very sharp: White's kingside pawns against Black's activity.",
          moves: [
            { uci: 'f8b4', san: 'Bb4' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'b4c3', san: 'Bxc3+' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'g8e7', san: 'Ne7' },
            { uci: 'd1g4', san: 'Qg4', note: 'Hits g7.' },
            { uci: 'd8c7', san: 'Qc7' },
            { uci: 'g4g7', san: 'Qxg7' },
            { uci: 'h8g8', san: 'Rg8' },
            { uci: 'g7h7', san: 'Qxh7' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'g1e2', san: 'Ne2', note: 'The Poisoned Pawn: White has the h-pawn and passed-pawn chances, Black central play.' }
          ]
        },
        {
          id: 'steinitz',
          name: '3...Nf6 4.e5: the Steinitz',
          kind: 'Alternative',
          summary: 'White supports e5 with f4, develops with Nf3 and Be3 and often castles long; Black attacks d4 with ...c5, ...Nc6 and ...Bc5.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e4e5', san: 'e5', note: 'The Steinitz Variation.' },
            { uci: 'f6d7', san: 'Nfd7' },
            { uci: 'f2f4', san: 'f4' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'c1e3', san: 'Be3', note: 'Supports d4; Qd2 and O-O-O often follow.' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'f8c5', san: 'Bc5' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1c1', san: 'O-O-O' }
          ]
        },
        {
          id: 'rubinstein',
          name: '3...dxe4: the Rubinstein',
          kind: 'Sideline',
          summary: 'Black gives up the centre for safe development. White develops, trades on f6 and keeps a small space advantage.',
          moves: [
            { uci: 'd5e4', san: 'dxe4', note: 'Black gives up the centre for safe development.' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'b8d7', san: 'Nd7' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Ngf6' },
            { uci: 'e4f6', san: 'Nxf6+' },
            { uci: 'd7f6', san: 'Nxf6' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'f8c5', san: 'Bxc5' },
            { uci: 'd1e2', san: 'Qe2', note: 'Prepares Bg5 and O-O-O, or O-O with a small edge.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'white',
          title: 'The c3 pawn and the queenside',
          text: 'In the Winawer, Black often attacks c3 with ...Qa5 and ...Nbc6 while White is busy on the kingside. Keep c3 protected with Bd2 or Ne2 and do not let the attack on g7 cost the centre.'
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Letting the centre collapse in the Steinitz',
          text: 'The d4-e5 chain with f4 needs constant support from Nf3, Be3 and sometimes Ne2. If Black wins d4 or e5, the centre collapses. Secure it before pushing f5 or g4.'
        }
      ],
      transpositions: [
        {
          to: 'w-tarrasch-french',
          note: '3...dxe4 4.Nxe4 also arises from 3.Nd2 dxe4 4.Nxe4: the Rubinstein is the same against both.'
        }
      ],
      lessons: ['white-openings-17'],
      uncertain: 'The Winawer Poisoned Pawn is given only to move 11 and the sample line only to move 9; both are deep, sharp theory.'
    },
    {
      id: 'w-caro-classical',
      side: 'white',
      group: 'e4',
      familyId: 'wf-caro-kann',
      family: 'Caro-Kann Defence',
      short: 'Main line 3.Nc3 (Classical and Karpov)',
      name: 'Caro-Kann: Main line with 3.Nc3',
      aliases: ['Classical Caro-Kann', 'Main-line Caro-Kann'],
      eco: 'B18',
      defining: ['e2e4', 'c7c6', 'd2d4', 'd7d5', 'b1c3'],
      moves: '1.e4 c6 2.d4 d5 3.Nc3',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 14,
      summary: '3.Nc3 meets the Caro-Kann head-on. Against the Classical ...Bf5, White gains kingside space with h4-h5 and often castles long.',
      idea: "After 3...dxe4 4.Nxe4 Bf5 5.Ng3 the knight hits the bishop. White's h4-h5 grabs space and drives the bishop to h7; then White trades it with Bd3 and often castles queenside. White keeps a small space advantage and the d4 pawn, while Black is solid but slightly cramped.",
      plans: {
        white: [
          'Push h4-h5 to gain space and harass the bishop.',
          'Trade light-squared bishops with Bd3 and castle queenside.',
          'Use the extra space and the e5 square, for example with Ne5 or Ne4.'
        ],
        black: [
          'Develop with ...Nd7, ...Ngf6 and ...e6, keeping a sound structure.',
          'Break with ...c5 once development is complete.',
          'Trade pieces to ease the slight lack of space.'
        ]
      },
      responses: [
        {
          moves: '4...Bf5 5.Ng3',
          name: 'Classical',
          note: '5...Bg6 6.h4 h6 7.Nf3 Nd7 8.h5 Bh7 9.Bd3 Bxd3 10.Qxd3 is the main line.',
          line: 'classical'
        },
        {
          moves: '4...Nd7 5.Nf3',
          name: 'Karpov Variation',
          note: '5...Ngf6 6.Ng3 or 6.Nxf6+ gives a calm space edge. The sharper 5.Ng5 is a well-known alternative.',
          line: 'karpov'
        },
        {
          moves: '4...Nf6 5.Nxf6+',
          note: 'Black must accept damaged pawns: 5...exf6 gives easy development, 5...gxf6 an unbalanced game. Continue with c3, Bd3 or Bc4, Nf3 and O-O.',
          line: 'nf6'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'b1c3', san: 'Nc3', note: 'Defends e4 with a piece.' },
          { uci: 'd5e4', san: 'dxe4' },
          { uci: 'c3e4', san: 'Nxe4' },
          { uci: 'c8f5', san: 'Bf5', note: 'The Classical: the bishop comes out before ...e6.' },
          { uci: 'e4g3', san: 'Ng3', note: 'Attacks the bishop at once.' },
          { uci: 'f5g6', san: 'Bg6' },
          { uci: 'h2h4', san: 'h4', note: 'Threatens h5, which would trap the bishop.' },
          { uci: 'h7h6', san: 'h6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8d7', san: 'Nd7' },
          { uci: 'h4h5', san: 'h5', note: 'Gains space; the bishop must go to h7.' },
          { uci: 'g6h7', san: 'Bh7' },
          { uci: 'f1d3', san: 'Bd3', note: "Offers to trade Black's best minor piece." }
        ]
      },
      lines: [
        {
          id: 'classical',
          name: '4...Bf5 5.Ng3: the Classical',
          kind: 'Main line',
          summary: 'White chases the bishop with Ng3, gains space with h4-h5 and trades bishops with Bd3, often castling long afterwards.',
          moves: [
            { uci: 'd5e4', san: 'dxe4' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'c8f5', san: 'Bf5', note: 'The bishop comes out before ...e6.' },
            { uci: 'e4g3', san: 'Ng3' },
            { uci: 'f5g6', san: 'Bg6' },
            { uci: 'h2h4', san: 'h4', note: 'Threatens h5, driving the bishop to h7 where it is shut out of play.' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8d7', san: 'Nd7' },
            { uci: 'h4h5', san: 'h5' },
            { uci: 'g6h7', san: 'Bh7' },
            { uci: 'f1d3', san: 'Bd3', note: "Offers to trade Black's best minor piece." },
            { uci: 'h7d3', san: 'Bxd3' },
            { uci: 'd1d3', san: 'Qxd3' }
          ]
        },
        {
          id: 'karpov',
          name: '4...Nd7: the Karpov',
          kind: 'Alternative',
          summary: 'Black prepares ...Ngf6 so that a trade on f6 does not damage the pawns. White keeps a small space edge and often the bishop pair.',
          moves: [
            { uci: 'd5e4', san: 'dxe4' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'b8d7', san: 'Nd7', note: 'Black prepares ...Ngf6 without allowing doubled pawns.' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Ngf6' },
            { uci: 'e4f6', san: 'Nxf6+' },
            { uci: 'd7f6', san: 'Nxf6' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'c8g4', san: 'Bg4' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'g4f3', san: 'Bxf3' },
            { uci: 'd1f3', san: 'Qxf3', note: 'White has the bishop pair and a small edge.' }
          ]
        },
        {
          id: 'nf6',
          name: '4...Nf6 5.Nxf6+',
          kind: 'Sideline',
          summary: 'Black accepts damaged pawns. After 5...exf6 Black develops easily, but the kingside majority is crippled for the endgame.',
          moves: [
            { uci: 'd5e4', san: 'dxe4' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e4f6', san: 'Nxf6+' },
            { uci: 'e7f6', san: 'exf6', note: 'Easy development, but a crippled kingside majority.' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'f8d6', san: 'Bd6' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd1c2', san: 'Qc2' },
            { uci: 'f8e8', san: 'Re8+' },
            { uci: 'g1e2', san: 'Ne2', note: 'Castle next; the queenside majority favours White in the endgame.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: 'Smothered mate after 5.Qe2',
          text: 'In the Karpov move order, 5.Qe2 sets a famous trap: 5...Ngf6?? 6.Nd6 is mate, because the e7 pawn is pinned. 5.Nf3 is the usual move, but know the trap.',
          uci: ['e2e4', 'c7c6', 'd2d4', 'd7d5', 'b1c3', 'd5e4', 'c3e4', 'b8d7', 'd1e2', 'g8f6', 'e4d6']
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'The advanced h-pawn',
          text: 'The h4-h5 plan gains space, but in an endgame the h5 pawn can become a target. Use the space while the pieces are on, for example with O-O-O and a kingside initiative.'
        }
      ],
      lessons: ['white-openings-3']
    },
    {
      id: 'w-caro-advance',
      side: 'white',
      group: 'e4',
      familyId: 'wf-caro-kann',
      family: 'Caro-Kann Defence',
      short: 'Advance Variation (3.e5)',
      name: 'Caro-Kann: Advance Variation',
      aliases: ['Advance Caro-Kann'],
      eco: 'B12',
      defining: ['e2e4', 'c7c6', 'd2d4', 'd7d5', 'e4e5'],
      moves: '1.e4 c6 2.d4 d5 3.e5',
      difficulty: 'Intermediate',
      style: 'Attacking',
      minutes: 14,
      summary: '3.e5 gains space and keeps the centre closed. Black develops the bishop to f5 before ...e6; White builds calmly with Nf3 and Be2 or hunts the bishop with g4.',
      idea: "After 3.e5 Bf5 Black's bishop is outside the pawn chain, and much of White's play revolves around it. In the Short System (Nf3, Be2, O-O and Be3 or c3) White develops quietly and may hunt the bishop with Nh4. In the sharper lines with Nc3 and g4, White chases it with pawns. Black's main counter is ...c5, attacking d4, often supported by ...Nc6 and ...Qb6.",
      plans: {
        white: [
          'Develop with Nf3, Be2, O-O and Be3 or c3, keeping d4 and e5 solid.',
          'Hunt the f5 bishop with Nh4, or with g4 and h4, to win the bishop pair or gain space.',
          'Meet ...c5 with dxc5 or Be3, and keep control of the d4 square.'
        ],
        black: [
          'Develop with ...Bf5, ...e6, ...Nd7 and ...Ne7 or ...c5.',
          'Hit d4 with ...c5, ...Nc6 and ...Qb6.',
          'Keep an escape square for the bishop, for example with ...h6.'
        ]
      },
      responses: [
        {
          moves: '3...Bf5 4.Nf3 e6 5.Be2',
          name: 'Short System',
          note: '5...c5 6.Be3 cxd4 7.Nxd4 Ne7 8.c4: White keeps space and a flexible centre.',
          line: 'short'
        },
        {
          moves: '5...Nd7 6.O-O Ne7',
          name: 'Bishop hunt',
          note: '7.Nh4 attacks the bishop; after 7...Bg6 8.Nxg6 White has the bishop pair. This is why Black often plays ...h6.',
          line: 'nh4'
        },
        {
          moves: '4.Nc3 e6 5.g4',
          name: 'Sharp g4 line',
          note: '5...Bg6 6.Nge2 c5 7.h4 h5 8.Nf4 Bh7 9.Nxh5: White chases the bishop with pawns. Very sharp.',
          line: 'g4'
        },
        {
          moves: '3...c5 4.dxc5',
          name: '3...c5',
          note: '4...e6 5.Nf3 Bxc5 6.Bd3: a French-type structure in which White keeps the e5 wedge and quick development.',
          line: 'c5'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'e4e5', san: 'e5', note: "Gains space; Black's knight cannot use f6." },
          { uci: 'c8f5', san: 'Bf5', note: 'The bishop comes out before ...e6.' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'f1e2', san: 'Be2', note: 'The Short System: quiet development.' },
          { uci: 'c6c5', san: 'c5' },
          { uci: 'c1e3', san: 'Be3', note: 'Supports d4 and makes ...Qb6 less effective.' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'f3d4', san: 'Nxd4' },
          { uci: 'g8e7', san: 'Ne7' },
          { uci: 'c2c4', san: 'c4', note: 'Hits d5 and gains space.' }
        ]
      },
      lines: [
        {
          id: 'short',
          name: '3...Bf5 4.Nf3: the Short System',
          kind: 'Main line',
          summary: 'Quiet development with Nf3, Be2 and Be3. When Black plays ...c5 and exchanges on d4, White recaptures with the knight and hits d5 with c4.',
          moves: [
            { uci: 'c8f5', san: 'Bf5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'c6c5', san: 'c5' },
            { uci: 'c1e3', san: 'Be3', note: 'Supports d4.' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'g8e7', san: 'Ne7' },
            { uci: 'c2c4', san: 'c4', note: 'Hits d5 and gains space.' }
          ]
        },
        {
          id: 'nh4',
          name: '...Nd7 and ...Ne7: Nh4 hunts the bishop',
          kind: 'Alternative',
          summary: 'If Black develops without ...h6, Nh4 attacks the f5 bishop and wins the bishop pair.',
          moves: [
            { uci: 'c8f5', san: 'Bf5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'b8d7', san: 'Nd7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'g8e7', san: 'Ne7' },
            { uci: 'f3h4', san: 'Nh4', note: 'Attacks the bishop; after ...Bg6, Nxg6 wins the bishop pair.' },
            { uci: 'f5g6', san: 'Bg6' },
            { uci: 'h4g6', san: 'Nxg6' },
            { uci: 'h7g6', san: 'hxg6', note: 'White has the bishop pair; Black has the half-open h-file.' }
          ]
        },
        {
          id: 'g4',
          name: '4.Nc3 e6 5.g4: the sharp line',
          kind: 'Sharp try',
          summary: 'White chases the bishop with g4 and h4 and may win the h-pawn; Black counters at once with ...c5 against the centre.',
          moves: [
            { uci: 'c8f5', san: 'Bf5' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g2g4', san: 'g4' },
            { uci: 'f5g6', san: 'Bg6' },
            { uci: 'g1e2', san: 'Nge2' },
            { uci: 'c6c5', san: 'c5' },
            { uci: 'h2h4', san: 'h4', note: 'Threatens h5, driving the bishop to h7 where it is shut out of play.' },
            { uci: 'h7h5', san: 'h5' },
            { uci: 'e2f4', san: 'Nf4' },
            { uci: 'g6h7', san: 'Bh7' },
            { uci: 'f4h5', san: 'Nxh5', note: 'White wins a pawn; Black has central counterplay with ...cxd4 and ...Nc6.' }
          ]
        },
        {
          id: 'c5',
          name: '3...c5 4.dxc5',
          kind: 'Sideline',
          summary: 'Black hits d4 at once. White takes on c5, develops quickly and keeps the e5 wedge in a French-type structure.',
          moves: [
            { uci: 'c6c5', san: 'c5', note: 'Black hits d4 at once.' },
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8c5', san: 'Bxc5' },
            { uci: 'f1d3', san: 'Bd3', note: 'Quick development; the e5 wedge remains.' },
            { uci: 'g8e7', san: 'Ne7' },
            { uci: 'e1g1', san: 'O-O' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'white',
          title: 'g4 without support',
          text: 'Chasing the bishop with g4 weakens the kingside. If Black hits back with ...c5 and ...Nc6 before White is developed, the advanced pawns become targets. Play g4 only with Nc3, Nge2 and h4 ready.'
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'd4 and b2 under fire',
          text: 'Black often attacks d4 with ...c5, ...Nc6 and ...Qb6, and b2 can hang once the c1 bishop leaves. Be3 or c3 keeps d4 solid; count attackers before developing the bishop.'
        },
        {
          kind: 'Trap',
          side: 'black',
          title: 'A bishop with no retreat',
          text: 'If Black lets the f5 bishop be hunted without ...h6 or ...h5, Nh4, or g4 with h4-h5, can win the bishop pair or even trap it. White should look for these chances every move.'
        }
      ],
      lessons: ['white-openings-18'],
      uncertain: 'The 4.Nc3 e6 5.g4 line is very sharp and is given only to move 9.'
    },
    {
      id: 'w-caro-panov',
      side: 'white',
      group: 'e4',
      familyId: 'wf-caro-kann',
      family: 'Caro-Kann Defence',
      short: 'Panov Attack (4.c4)',
      name: 'Caro-Kann: Panov Attack',
      aliases: ['Panov-Botvinnik Attack'],
      eco: 'B13-B14',
      defining: ['e2e4', 'c7c6', 'd2d4', 'd7d5', 'e4d5', 'c6d5', 'c2c4'],
      moves: '1.e4 c6 2.d4 d5 3.exd5 cxd5 4.c4',
      difficulty: 'Intermediate',
      style: 'Attacking',
      minutes: 14,
      summary: "3.exd5 cxd5 4.c4 hits d5 at once. White often gets an isolated queen's pawn and active pieces, with attacking chances on the kingside.",
      idea: "By exchanging on d5 and playing c4, White turns the Caro-Kann into an open game. After ...Nf6, Nc3 and cxd5 the typical result is an isolated queen's pawn on d4: a weakness in the endgame, but in the middlegame it gives White space, the e5 square for a knight and open lines for a kingside attack. White also has sharp tries such as Qb3 against d5 and b7.",
      plans: {
        white: [
          'Develop fast with Nc3, Nf3, Bd3 and O-O, then use the e5 square and the isolated pawn for activity.',
          'Attack on the kingside with Re1, Bc2 and Qd3 or a rook lift.',
          'Hit d5 and b7 with Qb3 when Black develops the bishop early.'
        ],
        black: [
          'Blockade the isolated pawn on d5 with a knight and trade pieces.',
          'Develop with ...e6, ...Be7 and ...Nc6, or fianchetto with ...g6.',
          'Pressure d4 with ...Nc6, ...Bg4 and a rook on d8.'
        ]
      },
      responses: [
        {
          moves: '4...Nf6 5.Nc3 e6',
          name: 'Main line',
          note: '6.Nf3 Be7 7.cxd5 Nxd5 8.Bd3 Nc6 9.O-O O-O 10.Re1: the classic isolated pawn position.',
          line: 'e6'
        },
        {
          moves: '5...Nc6 6.Nf3 Bg4',
          name: '...Nc6 and ...Bg4',
          note: '7.cxd5 Nxd5 8.Qb3 hits d5 and b7; 8...Bxf3 9.gxf3 e6 10.Qxb7 leads to sharp play.',
          line: 'nc6'
        },
        {
          moves: '5...g6 6.Qb3',
          name: 'Fianchetto',
          note: '6...Bg7 7.cxd5 O-O: Black regains d5 later; White develops with Be2 and Bf3 to hold it.',
          line: 'g6'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'e4d5', san: 'exd5' },
          { uci: 'c6d5', san: 'cxd5' },
          { uci: 'c2c4', san: 'c4', note: 'The Panov: d5 is hit at once.' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'c4d5', san: 'cxd5', note: 'Fixes the isolated-pawn structure.' },
          { uci: 'f6d5', san: 'Nxd5' },
          { uci: 'f1d3', san: 'Bd3', note: 'Aims at h7.' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8g8', san: 'O-O' }
        ]
      },
      lines: [
        {
          id: 'e6',
          name: '5...e6: the isolated pawn main line',
          kind: 'Main line',
          summary: 'The classical IQP position: White develops, puts a rook on e1 and plays for the e5 square and the kingside; Black blockades on d5.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'c4d5', san: 'cxd5', note: 'Creates the isolated d-pawn.' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e1', san: 'Re1', note: 'The rook supports d4-d5 ideas and kingside play.' },
            { uci: 'e7f6', san: 'Bf6' },
            { uci: 'd3e4', san: 'Be4' }
          ]
        },
        {
          id: 'nc6',
          name: '5...Nc6 6.Nf3 Bg4: the Qb3 double attack',
          kind: 'Sharp try',
          summary: 'With the bishop on g4, b7 is loose. 8.Qb3 hits d5 and b7 and leads to sharp, forcing play where both kings are exposed.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c8g4', san: 'Bg4' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'd1b3', san: 'Qb3', note: 'Hits d5 and b7 at the same time.' },
            { uci: 'g4f3', san: 'Bxf3' },
            { uci: 'g2f3', san: 'gxf3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'b3b7', san: 'Qxb7' },
            { uci: 'c6d4', san: 'Nxd4' },
            { uci: 'f1b5', san: 'Bb5+', note: 'Very sharp: both kings are exposed.' }
          ]
        },
        {
          id: 'g6',
          name: '5...g6 6.Qb3',
          kind: 'Alternative',
          summary: 'Black fianchettoes and plans to regain d5 later. White grabs the pawn for now and develops with Be2 and Bf3.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g7g6', san: 'g6', note: 'Black fianchettoes and plans to regain d5 later.' },
            { uci: 'd1b3', san: 'Qb3', note: 'Pressure on d5 and b7.' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e2', san: 'Be2', note: 'Bf3 will defend the extra pawn for now.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: '...Bg4 and the Qb3 double attack',
          text: 'With the bishop on g4, nothing guards b7: 8.Qb3 hits b7 and d5 at once, and Black must enter sharp lines to avoid losing material.',
          uci: [
            'e2e4',
            'c7c6',
            'd2d4',
            'd7d5',
            'e4d5',
            'c6d5',
            'c2c4',
            'g8f6',
            'b1c3',
            'b8c6',
            'g1f3',
            'c8g4',
            'c4d5',
            'f6d5',
            'd1b3'
          ]
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'The isolated pawn in the endgame',
          text: 'Every trade makes the d4 pawn weaker. Avoid aimless exchanges, keep pieces for the attack and use the e5 square and the c-file.'
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Allowing a firm blockade on d5',
          text: 'If Black settles a knight on d5 and trades the attacking pieces, White is left with a weak pawn. Use d4-d5 at the right moment, or keep up the pressure with Bc2 and Qd3.'
        }
      ],
      lessons: ['white-openings-19', 'strategy-6'],
      uncertain: 'The 8.Qb3 line is sharp theory and is given only to move 11; the 5...g6 6.Qb3 line is given in outline.'
    },
    {
      id: 'w-scandinavian',
      side: 'white',
      group: 'e4',
      familyId: 'wf-scandinavian',
      family: 'Scandinavian Defence',
      short: 'Main line with 3.Nc3',
      name: 'Scandinavian: main line with 3.Nc3',
      aliases: ['Centre Counter'],
      eco: 'B01',
      defining: ['e2e4', 'd7d5', 'e4d5'],
      moves: '1.e4 d5 2.exd5',
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 10,
      summary: "Take on d5 and develop with gain of time against Black's queen. A simple, sound way to meet 1...d5.",
      idea: "After 2...Qxd5 3.Nc3 the queen must move again, so White gains a tempo, a move's worth of time. White builds a centre with d4, develops with Nf3, Bc4 and Bd2, and often castles queenside. A black queen on a5 or d6 can become a target for Nd5, Nb5 or Bd2 tricks.",
      plans: {
        white: [
          'Develop with gain of time against the black queen.',
          'Keep the d4 pawn and use the extra space.',
          'Castle queenside and use the d-file in the ...Qa5 lines.'
        ],
        black: [
          'Play ...c6 and ...Bf5 or ...Bg4 for solid development.',
          'Keep the queen safe on a5, d6 or d8.',
          'Aim for a Caro-Kann-like structure with ...e6 and ...Nbd7.'
        ]
      },
      responses: [
        {
          moves: '3...Qa5 4.d4',
          name: 'Main line',
          note: '4...Nf6 5.Nf3 c6 6.Bc4 Bf5 7.Bd2 e6: the bishop on d2 sets up Nd5 tricks against the queen on a5.',
          line: 'qa5'
        },
        {
          moves: '3...Qd6 4.d4',
          note: '4...Nf6 5.Nf3 a6 (stopping Nb5) 6.g3 or 6.Be2: keep developing and look for Bf4 or Ne4 to gain more time on the queen.',
          line: 'qd6'
        },
        {
          moves: '3...Qd8 4.d4',
          note: 'The queen goes home. Develop with Nf3, Bc4 and O-O for a free position with more space.',
          line: 'qd8'
        },
        {
          moves: '2...Nf6 3.d4',
          name: 'Modern Variation',
          note: '3...Nxd5 4.Nf3 and c4 gives White a pawn centre. 3.Bb5+ and 3.c4 are other good tries.',
          line: 'modern'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'e4d5', san: 'exd5', note: 'Accepts the pawn; Black usually recaptures with the queen.' },
          { uci: 'd8d5', san: 'Qxd5' },
          { uci: 'b1c3', san: 'Nc3', note: 'Develops with gain of time on the queen.' },
          { uci: 'd5a5', san: 'Qa5' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'f1c4', san: 'Bc4' },
          { uci: 'c8f5', san: 'Bf5' },
          { uci: 'c1d2', san: 'Bd2', note: 'Breaks the pin on the c3 knight; Nd5 ideas now hit the queen.' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'd1e2', san: 'Qe2', note: 'Prepares O-O-O; the queen also eyes e6 for a later d4-d5 break.' }
        ]
      },
      lines: [
        {
          id: 'qa5',
          name: '2...Qxd5 3.Nc3 Qa5',
          kind: 'Main line',
          summary: 'White builds d4, develops with Nf3, Bc4 and Bd2, and sets up Nd5 tricks against the queen on a5.',
          moves: [
            { uci: 'd8d5', san: 'Qxd5' },
            { uci: 'b1c3', san: 'Nc3', note: 'Develops with gain of time on the queen.' },
            { uci: 'd5a5', san: 'Qa5' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'c8f5', san: 'Bf5' },
            { uci: 'c1d2', san: 'Bd2', note: 'Breaks the pin; Nd5 ideas now hit the queen.' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'd1e2', san: 'Qe2' }
          ]
        },
        {
          id: 'qd6',
          name: '3...Qd6',
          kind: 'Alternative',
          summary: 'The queen is safer on d6 but can be hit by Nb5, Bf4 or Ne4. Black usually spends a move on ...a6.',
          moves: [
            { uci: 'd8d5', san: 'Qxd5' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd5d6', san: 'Qd6', note: 'Safer than a5, but Nb5 and Bf4 can hit it.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'a7a6', san: 'a6', note: 'Stops Nb5.' },
            { uci: 'g2g3', san: 'g3', note: 'The bishop goes to g2; Bf4 or Ne4 can gain more time.' }
          ]
        },
        {
          id: 'qd8',
          name: '3...Qd8',
          kind: 'Sideline',
          summary: 'The queen goes home. White has easy development and more space; asking the bishop with h3 is typical.',
          moves: [
            { uci: 'd8d5', san: 'Qxd5' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd5d8', san: 'Qd8', note: 'The queen goes home.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c8g4', san: 'Bg4' },
            { uci: 'h2h3', san: 'h3', note: 'Asks the bishop; White has easy development and more space.' }
          ]
        },
        {
          id: 'modern',
          name: '2...Nf6: the Modern Variation',
          kind: 'Alternative',
          summary: 'Black regains d5 with the knight. White builds a centre with d4, Nf3 and c4, driving the knight back.',
          moves: [
            { uci: 'g8f6', san: 'Nf6', note: 'Black regains d5 with the knight.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'c2c4', san: 'c4', note: 'Drives the knight back and builds a centre.' },
            { uci: 'd5b6', san: 'Nb6' },
            { uci: 'b1c3', san: 'Nc3' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: 'Nd5 tricks against the a5 queen',
          text: 'With the bishop on d2, the c3 knight can jump to d5 or b5 and uncover an attack on the queen on a5. Black must watch c7 and the queen; White should look for the trick every move.'
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'Chasing the queen instead of developing',
          text: 'Gaining time on the queen is good only if the moves also develop. Nb5, Bf4 or Ne4 ideas work when the pieces are ready; otherwise castle and use the space.'
        }
      ],
      lessons: ['white-openings-12']
    },
    {
      id: 'w-pirc-classical',
      side: 'white',
      group: 'e4',
      familyId: 'wf-pirc',
      family: 'Pirc Defence',
      short: 'Classical System (4.Nf3)',
      name: 'Pirc: Classical System (4.Nf3)',
      aliases: ['Pirc Classical'],
      eco: 'B08',
      defining: ['e2e4', 'd7d6', 'd2d4', 'g8f6', 'b1c3', 'g7g6', 'g1f3'],
      moves: '1.e4 d6 2.d4 Nf6 3.Nc3 g6 4.Nf3',
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 10,
      summary: 'Against the Pirc, simple development with Nf3, Be2 and O-O gives White a sound centre and easy play.',
      idea: 'Black lets White build a big centre and plans to undermine it with ...e5 or ...c5. In the Classical System White does not overextend: pieces support e4 and d4, and White castles short. If Black plays ...e5, d5 often gains space; if ...Bg4, Be3 and Qd2 keep d4 safe. The same set-up works against the Modern Defence, 1...g6.',
      plans: {
        white: [
          'Keep the e4-d4 centre supported by pieces rather than extra pawn moves.',
          'Answer ...e5 with d5 or dxe5, depending on piece placement.',
          'Use Be3, Qd2 and a timely h3 to handle the ...Bg4 pin.'
        ],
        black: [
          'Fianchetto the bishop on g7 and strike with ...e5 or ...c5.',
          'Pin the f3 knight with ...Bg4 to pressure d4.',
          'Use ...c6, ...b5 and ...a5 for queenside space.'
        ]
      },
      responses: [
        {
          moves: '4...Bg7 5.Be2',
          name: 'Main line',
          note: '5...O-O 6.O-O. Against 6...Bg4 play 7.Be3; against 6...c6, 7.a4 or 7.h3 is a sound choice.',
          line: 'main'
        },
        {
          moves: '4...Bg4 5.Be3',
          note: 'Keep d4 solid: Be3, Be2 and Qd2, with h3 when the moment is right.',
          line: 'bg4'
        },
        {
          moves: '1...g6 2.d4 Bg7 3.Nc3',
          name: 'Modern Defence',
          note: '3...d6 4.Nf3 reaches the same set-up; 4.Be3 with Qd2 is a more aggressive choice.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'g7g6', san: 'g6' },
          { uci: 'g1f3', san: 'Nf3', note: 'The Classical System: calm, sound development.' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'e1g1', san: 'O-O', note: "White's king is safe and the centre is solid." },
          { uci: 'c8g4', san: 'Bg4', note: 'Pins the knight and adds pressure to d4.' },
          { uci: 'c1e3', san: 'Be3', note: 'Defends d4 again.' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'd1d2', san: 'Qd2' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'd4d5', san: 'd5', note: 'Gains space and drives the knight back.' },
          { uci: 'c6e7', san: 'Ne7' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '4...Bg7 5.Be2 O-O 6.O-O Bg4',
          kind: 'Main line',
          summary: 'Black pins and prepares ...e5. White defends d4 with Be3 and Qd2 and meets ...e5 with d5, gaining space.',
          moves: [
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c8g4', san: 'Bg4', note: 'Pins the knight and adds pressure to d4.' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'd4d5', san: 'd5', note: 'Gains space and drives the knight back.' },
            { uci: 'c6e7', san: 'Ne7' },
            { uci: 'a1d1', san: 'Rad1' }
          ]
        },
        {
          id: 'c6',
          name: '6...c6: queenside play',
          kind: 'Alternative',
          summary: 'Black prepares ...b5 or ...e5. White stops ...b5 with a4 and rules out ...Bg4 with h3, keeping a comfortable space edge.',
          moves: [
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c7c6', san: 'c6', note: 'Prepares ...b5 or ...Qc7 and ...e5.' },
            { uci: 'a2a4', san: 'a4', note: 'Stops ...b5.' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'h2h3', san: 'h3', note: 'Rules out ...Bg4 and ...Ng4.' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'c1e3', san: 'Be3' }
          ]
        },
        {
          id: 'bg4',
          name: '4...Bg4: an early pin',
          kind: 'Sideline',
          summary: 'Black pins at once. White defends d4 with Be3, develops and asks the bishop with h3, often winning the bishop pair.',
          moves: [
            { uci: 'c8g4', san: 'Bg4', note: 'Pins the knight at once.' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'h2h3', san: 'h3', note: 'Asks the bishop.' },
            { uci: 'g4f3', san: 'Bxf3' },
            { uci: 'e2f3', san: 'Bxf3', note: 'White has the bishop pair.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Be3 allowing ...Ng4',
          text: 'With the bishop on e3 and no h3 or Be2, ...Ng4 can hit it and win the bishop pair. Play Be2 first, or h3 before Be3 when ...Ng4 is possible.'
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'An early e5',
          text: 'Pushing e5 before the pieces are ready lets Black exchange and attack the advanced pawn, or simplify with ...dxe5 dxe5 and a queen trade. Keep the centre solid and push only for a clear gain.'
        }
      ],
      lessons: ['white-openings-13']
    },
    {
      id: 'w-alekhine-modern',
      side: 'white',
      group: 'e4',
      familyId: 'wf-alekhine',
      family: "Alekhine's Defence",
      short: 'Modern Variation (4.Nf3)',
      name: "Alekhine's Defence: Modern Variation (4.Nf3)",
      aliases: ['Alekhine Modern'],
      eco: 'B05',
      defining: ['e2e4', 'g8f6', 'e4e5'],
      moves: '1.e4 Nf6 2.e5',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 12,
      summary: 'Gain space with e5 and d4, but keep it sound: the Modern Variation with 4.Nf3 gives White a lasting space edge without overreaching.',
      idea: "Black invites White's pawns forward and then attacks them. Rather than pushing every pawn, White develops with Nf3, Be2 and O-O, adds c4 when the knight on d5 can be kicked, and keeps the e5 pawn as a cramping wedge. Black aims at e5 with ...d6, ...Bg4 or ...g6, and ...Nc6.",
      plans: {
        white: [
          'Keep e5 and d4 supported by pieces: Nf3, Be2, O-O and later Nc3.',
          'Play c4 to drive the knight to b6, then Be3 and Nc3.',
          'Answer ...dxe5 with a piece recapture that keeps central control.'
        ],
        black: [
          'Pressure e5 with ...d6, ...Nc6 and ...Bg4 against the f3 knight.',
          'Fianchetto with ...g6 and ...Bg7 to aim at the centre.',
          'Exchange on e5 and use the d-file.'
        ]
      },
      responses: [
        {
          moves: '2...Nd5 3.d4 d6 4.Nf3',
          name: 'Modern Variation',
          note: 'Against 4...Bg4 play 5.Be2 e6 6.O-O Be7 7.h3 Bh5 8.c4 Nb6 9.Nc3; against 4...dxe5, 5.Nxe5 keeps a central knight.',
          line: 'bg4'
        },
        {
          moves: '4...g6 5.Bc4',
          note: "5...Nb6 6.Bb3 Bg7, then Qe2 or a4: the b3 bishop stares at f7 and Black's centre remains under pressure.",
          line: 'g6'
        },
        {
          moves: '2...Ng8',
          note: 'Rare: the knight goes home. Develop with d4, Nf3, Bd3 and c4, and enjoy the extra space.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'g8f6', san: 'Nf6', note: 'Black attacks e4 and invites the pawn forward.' },
          { uci: 'e4e5', san: 'e5' },
          { uci: 'f6d5', san: 'Nd5' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d6', san: 'd6', note: 'Black challenges e5 at once.' },
          { uci: 'g1f3', san: 'Nf3', note: 'The Modern Variation: e5 is supported by a piece, not a pawn.' },
          { uci: 'c8g4', san: 'Bg4', note: 'Pressure on the f3 knight, a defender of e5.' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'h2h3', san: 'h3' },
          { uci: 'g4h5', san: 'Bh5' },
          { uci: 'c2c4', san: 'c4', note: 'Drives the knight from the centre.' },
          { uci: 'd5b6', san: 'Nb6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'e8g8', san: 'O-O', note: 'White has more space; Nc3, Be3 and b3 or exd6 come next.' }
        ]
      },
      lines: [
        {
          id: 'bg4',
          name: '4...Bg4: the main line',
          kind: 'Main line',
          summary: 'Black pins the knight that defends e5. White develops with Be2 and O-O, plays c4 to drive the knight to b6 and keeps a space edge.',
          moves: [
            { uci: 'f6d5', san: 'Nd5' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'g1f3', san: 'Nf3', note: 'Supports e5 with a piece.' },
            { uci: 'c8g4', san: 'Bg4' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'c2c4', san: 'c4', note: 'Drives the knight from the centre.' },
            { uci: 'd5b6', san: 'Nb6' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'g4h5', san: 'Bh5' },
            { uci: 'b1c3', san: 'Nc3' }
          ]
        },
        {
          id: 'g6',
          name: '4...g6 5.Bc4',
          kind: 'Alternative',
          summary: 'Black fianchettoes. The bishop on c4 and then b3 presses on d5 and f7; Qe2 supports e5.',
          moves: [
            { uci: 'f6d5', san: 'Nd5' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'f1c4', san: 'Bc4', note: 'Pressure on d5 and f7.' },
            { uci: 'd5b6', san: 'Nb6' },
            { uci: 'c4b3', san: 'Bb3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'd1e2', san: 'Qe2', note: 'Supports e5; a4 can follow to harass the b6 knight.' }
          ]
        },
        {
          id: 'dxe5',
          name: '4...dxe5 5.Nxe5',
          kind: 'Sideline',
          summary: 'Black exchanges at once. White keeps a strong knight on e5 and develops quickly with Be2, O-O and c4.',
          moves: [
            { uci: 'f6d5', san: 'Nd5' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd6e5', san: 'dxe5' },
            { uci: 'f3e5', san: 'Nxe5', note: 'A strong central knight.' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'c8f5', san: 'Bf5' },
            { uci: 'e1g1', san: 'O-O', note: 'White develops; c4 and Nc3 come next.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: '5...Nd7? 6.Nxf7',
          text: 'After 4...dxe5 5.Nxe5, the natural 5...Nd7? allows 6.Nxf7! Kxf7 7.Qh5+ with a dangerous attack on the exposed king. Black should prefer 5...g6 or 5...c6.',
          uci: ['e2e4', 'g8f6', 'e4e5', 'f6d5', 'd2d4', 'd7d6', 'g1f3', 'd6e5', 'f3e5', 'b8d7', 'e5f7']
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'Too many pawn moves',
          text: 'With c4, d4 and e5 all advanced, the pawns can become targets for ...d6, ...Nc6 and ...Bg4. Add c4 when your pieces are ready to support the centre.'
        }
      ],
      lessons: ['white-openings-27']
    },
    {
      id: 'w-queens-gambit',
      side: 'white',
      group: 'd4',
      familyId: 'wf-queens-gambit',
      family: "Queen's Gambit",
      short: 'The system and the Accepted',
      name: "Queen's Gambit: the system and the Accepted",
      aliases: ["Queen's Gambit Accepted", 'QGA'],
      eco: 'D20',
      defining: ['d2d4', 'd7d5', 'c2c4'],
      moves: '1.d4 d5 2.c4',
      difficulty: 'Beginner',
      style: 'Positional',
      minutes: 14,
      summary: "1.d4 d5 2.c4 challenges Black's centre at once. One move order, then a clear answer to each main defence.",
      idea: 'The c-pawn attacks d5 to win the centre or open the c-file. White can nearly always regain the pawn if Black takes, so it is not a true sacrifice. Against the Accepted, e3 and Bxc4 give a free centre; against the Declined, Nc3, cxd5 and the minority attack; against the Slav, Nf3, Nc3 and a4. Knowing the typical structures matters more than memorising moves.',
      plans: {
        white: [
          'Win the battle for the centre: play e4 when Black allows it, or keep pressure on d5.',
          'If Black accepts, regain the c4 pawn with e3 and Bxc4.',
          'Use the half-open c-file and queenside space in many structures.'
        ],
        black: [
          'Accept with ...dxc4 and hit back with ...c5 and ...e6.',
          'Decline with ...e6 or ...c6 to keep a pawn on d5.',
          'Free the game with the ...c5 or ...e5 breaks.'
        ]
      },
      responses: [
        {
          moves: '2...dxc4 3.Nf3',
          name: "Queen's Gambit Accepted",
          note: '3...Nf6 4.e3 e6 5.Bxc4 c5 6.O-O a6: White regains the pawn and keeps a free game. 3.e4 is a more ambitious alternative.',
          line: 'qga'
        },
        {
          moves: '2...e6 3.Nc3',
          name: "Queen's Gambit Declined",
          note: '3...Nf6 4.cxd5 exd5 5.Bg5 is the Exchange Variation, with the clear minority-attack plan.'
        },
        {
          moves: '2...c6 3.Nf3',
          name: 'Slav Defence',
          note: '3...Nf6 4.Nc3 dxc4 5.a4 Bf5 6.e3: regain c4 and fight for e4.'
        },
        {
          moves: '2...Nc6 3.Nf3',
          name: 'Chigorin Defence',
          note: '3...Bg4 4.cxd5 Bxf3 5.gxf3 Qxd5 6.e3: White has the bishop pair and a good centre.',
          line: 'chigorin'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'c2c4', san: 'c4', note: 'Attacks d5 at once.' },
          { uci: 'd5c4', san: 'dxc4' },
          { uci: 'g1f3', san: 'Nf3', note: 'Stops ...e5 and prepares e3.' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'f1c4', san: 'Bxc4', note: 'Pawn regained, bishop developed.' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'a7a6', san: 'a6' },
          { uci: 'd1e2', san: 'Qe2', note: 'Prepares Rd1 and a later e4 or d5.' },
          { uci: 'b7b5', san: 'b5' },
          { uci: 'c4b3', san: 'Bb3' },
          { uci: 'c8b7', san: 'Bb7' },
          { uci: 'f1d1', san: 'Rd1', note: 'The rook backs up d4 against ...cxd4.' }
        ]
      },
      lines: [
        {
          id: 'qga',
          name: '2...dxc4 3.Nf3: the Accepted',
          kind: 'Main line',
          summary: 'White regains the pawn with e3 and Bxc4, castles and prepares Rd1 with e4 or d5. Black counters with ...c5, ...a6 and ...b5.',
          moves: [
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'g1f3', san: 'Nf3', note: 'Stops ...e5 and prepares e3.' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1c4', san: 'Bxc4', note: 'Pawn regained, bishop developed.' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'd1e2', san: 'Qe2' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'c4b3', san: 'Bb3' },
            { uci: 'c8b7', san: 'Bb7' },
            { uci: 'f1d1', san: 'Rd1', note: 'The rook backs up d4 against ...cxd4.' }
          ]
        },
        {
          id: 'e4',
          name: '2...dxc4 3.e4: the big centre',
          kind: 'Alternative',
          summary: 'The most ambitious reply: a full pawn centre at once. Black hits back with ...e5, and White develops quickly with Bxc4 and Qb3.',
          moves: [
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'e2e4', san: 'e4', note: 'A full pawn centre at once.' },
            { uci: 'e7e5', san: 'e5', note: 'Black hits back in the centre.' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'f1c4', san: 'Bxc4' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c8e6', san: 'Be6' },
            { uci: 'c4e6', san: 'Bxe6' },
            { uci: 'f7e6', san: 'fxe6' },
            { uci: 'd1b3', san: 'Qb3', note: 'Hits b7 and e6; White regains d4 later with good play.' }
          ]
        },
        {
          id: 'chigorin',
          name: '2...Nc6: the Chigorin',
          kind: 'Sideline',
          summary: 'Black develops the knight in front of the c-pawn and gives up the bishop pair for quick piece play. White keeps a sound centre.',
          moves: [
            { uci: 'b8c6', san: 'Nc6', note: 'The Chigorin: a knight in front of the c-pawn.' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c8g4', san: 'Bg4' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'g4f3', san: 'Bxf3' },
            { uci: 'g2f3', san: 'gxf3' },
            { uci: 'd8d5', san: 'Qxd5' },
            { uci: 'e2e3', san: 'e3', note: 'White has the bishop pair and a sound centre.' }
          ]
        },
        {
          id: 'albin',
          name: '2...e5: the Albin Countergambit',
          kind: 'Sharp try',
          summary: 'A Black gambit: the d4 pawn cramps White. Develop with Nf3, g3 and Nbd2 and keep the extra pawn; avoid 4.e3?, the Lasker trap.',
          moves: [
            { uci: 'e7e5', san: 'e5', note: 'The Albin Countergambit.' },
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'd5d4', san: 'd4' },
            { uci: 'g1f3', san: 'Nf3', note: 'Develops and keeps the extra pawn; 4.e3? walks into the Lasker trap.' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g2g3', san: 'g3', note: 'The bishop goes to g2 and the king will be safe.' },
            { uci: 'c8e6', san: 'Be6' },
            { uci: 'b1d2', san: 'Nbd2' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: 'Holding c4 with ...b5',
          text: 'Keeping the gambit pawn rarely works: 3.e3 b5? 4.a4 c6 5.axb5 cxb5 6.Qf3 hits the a8 rook along the long diagonal and wins material.',
          uci: ['d2d4', 'd7d5', 'c2c4', 'd5c4', 'e2e3', 'b7b5', 'a2a4', 'c7c6', 'a4b5', 'c6b5', 'd1f3']
        },
        {
          kind: 'Trap',
          side: 'white',
          title: 'The Lasker trap in the Albin',
          text: 'Against the Albin Countergambit, 4.e3? Bb4+ 5.Bd2 dxe3! 6.Bxb4?? exf2+ 7.Ke2 fxg1=N+ wins for Black. Play 4.Nf3 and later g3.',
          uci: [
            'd2d4',
            'd7d5',
            'c2c4',
            'e7e5',
            'd4e5',
            'd5d4',
            'e2e3',
            'f8b4',
            'c1d2',
            'd4e3',
            'd2b4',
            'e3f2',
            'e1e2',
            'f2g1n'
          ]
        }
      ],
      transpositions: [
        { to: 'w-qgd-exchange', note: "2...e6 3.Nc3 leads to the Queen's Gambit Declined." },
        { to: 'w-slav-main', note: '2...c6 3.Nf3 leads to the Slav.' },
        {
          to: 'w-reti',
          note: "1.Nf3 d5 2.c4 e6 3.d4 reaches the Queen's Gambit Declined by another move order."
        }
      ],
      lessons: ['gambits-1', 'white-openings-7'],
      uncertain: 'In the Albin line, 6...Be6 is one of several Black sixth moves; the plan with g3 and Nbd2 is standard.'
    },
    {
      id: 'w-qgd-exchange',
      side: 'white',
      group: 'd4',
      familyId: 'wf-queens-gambit',
      family: "Queen's Gambit",
      short: 'QGD: Exchange Variation',
      name: "Queen's Gambit Declined: Exchange Variation",
      aliases: ["Queen's Gambit Declined, Exchange", 'Carlsbad Variation'],
      eco: 'D35',
      parent: 'w-queens-gambit',
      defining: ['d2d4', 'd7d5', 'c2c4', 'e7e6', 'b1c3'],
      moves: '1.d4 d5 2.c4 e6 3.Nc3',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 14,
      summary: 'Against 2...e6, White exchanges on d5 to fix the Carlsbad pawn structure and starts the classic minority attack.',
      idea: "After cxd5 exd5 the pawn structure is fixed: the Carlsbad structure, with White's pawns on d4 and e3 against Black's on d5 and c6. White's plan is the minority attack: two queenside pawns advance against three with b4-b5 to leave Black a weak c-pawn. Black looks for kingside play with ...Ne4 or ...Nf8-g6.",
      plans: {
        white: [
          'Minority attack: Rb1, b4 and b5 to create a weak black c-pawn.',
          'Alternatively, play Nge2 and f3 for a central e4 break.',
          "Pin the f6 knight with Bg5 to reduce Black's control of e4."
        ],
        black: [
          'Build kingside play with ...Ne4, ...Nf8-g6 and sometimes ...f5.',
          'Meet b5 with ...cxb5 or ...c5 to avoid a backward c-pawn.',
          'Develop the c8 bishop actively, ideally to f5.'
        ]
      },
      responses: [
        {
          moves: '3...Nf6 4.cxd5 exd5 5.Bg5',
          name: 'Exchange main line',
          note: '5...c6 6.e3 Be7 7.Bd3 Nbd7 8.Qc2 O-O 9.Nf3 Re8 10.O-O, then Rab1 and b4.',
          line: 'exchange'
        },
        {
          moves: '3...Be7 4.Nf3',
          name: 'Avoiding Bg5',
          note: 'This move order makes the Exchange with Bg5 less effective. Play 4.Nf3 Nf6 5.Bg5 or 5.Bf4, or 4.cxd5 exd5 5.Bf4.',
          line: 'be7'
        },
        {
          moves: '3...c5 4.cxd5 exd5 5.Nf3',
          name: 'Tarrasch Defence',
          note: "5...Nc6 6.g3 Nf6 7.Bg2 Be7 8.O-O O-O: the g2 bishop presses on Black's isolated d-pawn.",
          line: 'tarrasch'
        },
        {
          moves: '3...c6 4.e3',
          name: 'Semi-Slav move order',
          note: '4...Nf6 5.Nf3 reaches the Semi-Slav; 4.Nf3 is equally good.',
          line: 'semislav'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c4d5', san: 'cxd5', note: 'Fixes the pawn structure.' },
          { uci: 'e6d5', san: 'exd5' },
          { uci: 'c1g5', san: 'Bg5', note: 'Pins the knight against the queen.' },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'b8d7', san: 'Nbd7' },
          { uci: 'd1c2', san: 'Qc2', note: "Stops ...Bf5, which would trade Black's problem bishop." },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'f8e8', san: 'Re8', note: 'Next for White: O-O, Rab1 and b4, the minority attack.' }
        ]
      },
      lines: [
        {
          id: 'exchange',
          name: '3...Nf6 4.cxd5 exd5 5.Bg5',
          kind: 'Main line',
          summary: 'The Carlsbad structure: White develops, stops ...Bf5 with Qc2, castles and prepares the minority attack with Rab1 and b4.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c4d5', san: 'cxd5', note: 'Fixes the pawn structure.' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'd1c2', san: 'Qc2', note: "Stops ...Bf5, which would trade Black's problem bishop." },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8e8', san: 'Re8' },
            { uci: 'e1g1', san: 'O-O' }
          ]
        },
        {
          id: 'be7',
          name: '3...Be7: avoiding Bg5',
          kind: 'Alternative',
          summary: 'Black delays ...Nf6 to make Bg5 less effective. White exchanges on d5 and develops the bishop to f4 instead.',
          moves: [
            { uci: 'f8e7', san: 'Be7', note: 'Black avoids an early Bg5 pin.' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'c1f4', san: 'Bf4', note: 'The bishop goes to f4, where ...h6 does not hit it.' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'c8f5', san: 'Bf5' },
            { uci: 'g2g4', san: 'g4', note: 'A sharp try: space with gain of time on the bishop.' }
          ]
        },
        {
          id: 'tarrasch',
          name: '3...c5: the Tarrasch Defence',
          kind: 'Alternative',
          summary: 'Black accepts an isolated d-pawn for free play. The fianchetto with g3 and Bg2 puts lasting pressure on d5.',
          moves: [
            { uci: 'c7c5', san: 'c5', note: 'The Tarrasch Defence.' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g2g3', san: 'g3', note: 'The g2 bishop will press on the isolated d-pawn.' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c1g5', san: 'Bg5' }
          ]
        },
        {
          id: 'semislav',
          name: '3...c6: the Semi-Slav move order',
          kind: 'Sideline',
          summary: 'Black heads for the Semi-Slav. A calm system with e3, Nf3 and Qc2 avoids the sharpest theory.',
          moves: [
            { uci: 'c7c6', san: 'c6' },
            { uci: 'e2e3', san: 'e3', note: 'Calm; 4.e4 would be the Marshall Gambit.' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'd1c2', san: 'Qc2', note: 'A quiet system against the Semi-Slav.' },
            { uci: 'f8d6', san: 'Bd6' },
            { uci: 'f1d3', san: 'Bd3' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'white',
          title: 'The Elephant trap',
          text: 'With a knight on d7, the f6 knight is not really pinned: 6.Nxd5? Nxd5! 7.Bxd8 Bb4+ 8.Qd2 Bxd2+ 9.Kxd2 Kxd8 leaves Black a piece up.',
          uci: [
            'd2d4',
            'd7d5',
            'c2c4',
            'e7e6',
            'b1c3',
            'g8f6',
            'c1g5',
            'b8d7',
            'c4d5',
            'e6d5',
            'c3d5',
            'f6d5',
            'g5d8',
            'f8b4',
            'd1d2',
            'b4d2',
            'e1d2',
            'e8d8'
          ]
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Allowing ...Bf5',
          text: "Black's light-squared bishop is the problem piece in the Carlsbad structure. Qc2 (with Bd3) stops ...Bf5; if Black trades it, the minority attack loses much of its bite."
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'Forgetting the kingside',
          text: 'While White pushes b4-b5, Black plays ...Ne4, ...Nf8-g6 and sometimes ...f5. Keep a knight on f3 and a bishop ready to defend the king.'
        }
      ],
      transpositions: [
        { to: 'w-queens-gambit', note: "Arises from the Queen's Gambit after 2...e6." },
        {
          to: 'w-nimzo-rubinstein',
          note: '1.d4 Nf6 2.c4 e6 3.Nc3 d5 reaches this line from the Nimzo-Indian move order.'
        }
      ],
      lessons: ['white-openings-7', 'strategy-9']
    },
    {
      id: 'w-slav-main',
      side: 'white',
      group: 'd4',
      familyId: 'wf-queens-gambit',
      family: "Queen's Gambit",
      short: 'Slav: 3.Nf3 and 4.Nc3',
      name: "Queen's Gambit vs the Slav",
      aliases: ['Main-line Slav'],
      eco: 'D17',
      parent: 'w-queens-gambit',
      defining: ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3'],
      moves: '1.d4 d5 2.c4 c6 3.Nf3',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 14,
      summary: 'Against the solid Slav, White develops with Nf3 and Nc3, then regains c4 with a4 and e3 and prepares e4.',
      idea: 'With ...c6 Black keeps d5 and frees the c8 bishop. If Black takes on c4 and tries to hold the pawn with ...b5, a4 undermines it. In the main line White regains the pawn with e3 and Bxc4, then plays for e4 to win the centre. Black aims for ...c5 or ...e5 to free the position.',
      plans: {
        white: [
          'Play a4 to stop ...b5 holding the c4 pawn.',
          'Regain the pawn with e3 and Bxc4, then prepare e4 with Qe2 and Rd1.',
          'Against the Semi-Slav, choose e3 with Bd3 or Qc2 for safe, flexible play.'
        ],
        black: [
          'Develop the light-squared bishop to f5 or g4 before ...e6.',
          'Pin with ...Bb4 and prepare ...c5 or ...e5.',
          'Keep a solid pawn on d5 if not taking on c4.'
        ]
      },
      responses: [
        {
          moves: '3...Nf6 4.Nc3 dxc4 5.a4',
          name: 'Main line',
          note: '5...Bf5 6.e3 e6 7.Bxc4 Bb4 8.O-O O-O 9.Qe2, with e4 next.',
          line: 'main'
        },
        {
          moves: '4...e6 5.e3',
          name: 'Semi-Slav',
          note: '5...Nbd7 6.Bd3 dxc4 7.Bxc4 b5 is the Meran; 6.Qc2 is a calmer choice. 5.Bg5 is far sharper.',
          line: 'semislav'
        },
        {
          moves: '3...dxc4 4.e3',
          note: '4...b5 5.a4 hits the b5 pawn; White regains c4 later with Bxc4 or b3.',
          line: 'dxc4'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'c7c6', san: 'c6', note: 'The Slav: d5 is supported by a pawn.' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd5c4', san: 'dxc4' },
          { uci: 'a2a4', san: 'a4', note: 'Stops ...b5, which would hold the c4 pawn.' },
          { uci: 'c8f5', san: 'Bf5', note: 'The bishop develops before ...e6 shuts it in.' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'f1c4', san: 'Bxc4', note: 'Pawn regained.' },
          { uci: 'f8b4', san: 'Bb4' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'd1e2', san: 'Qe2', note: 'Prepares e4 to win the centre.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '4...dxc4 5.a4: the main line',
          kind: 'Main line',
          summary: 'a4 stops ...b5, e3 and Bxc4 regain the pawn, and Qe2 with Rd1 prepares e4.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'a2a4', san: 'a4', note: 'Stops ...b5, which would hold the c4 pawn.' },
            { uci: 'c8f5', san: 'Bf5', note: 'The bishop develops before ...e6.' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1c4', san: 'Bxc4' },
            { uci: 'f8b4', san: 'Bb4' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd1e2', san: 'Qe2', note: 'Prepares e4 to win the centre.' }
          ]
        },
        {
          id: 'semislav',
          name: '4...e6: the Semi-Slav',
          kind: 'Alternative',
          summary: 'Black keeps d5 and plays ...Nbd7. In the Meran Black takes on c4 and expands with ...b5; White plays for e4.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e7e6', san: 'e6', note: 'The Semi-Slav.' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'd3c4', san: 'Bxc4' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'c4d3', san: 'Bd3', note: 'The Meran: White prepares e4 or a4.' }
          ]
        },
        {
          id: 'dxc4',
          name: '3...dxc4 4.e3',
          kind: 'Sideline',
          summary: 'Black takes at once and tries to hold the pawn with ...b5. a4 undermines it and White regains material.',
          moves: [
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'a2a4', san: 'a4', note: 'Undermines the b5 pawn.' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'a4b5', san: 'axb5' },
            { uci: 'c6b5', san: 'cxb5' },
            { uci: 'b2b3', san: 'b3', note: 'Breaks up the c4 and b5 pawns.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'white',
          title: '5.e3 lets Black hold c4 with ...b5',
          text: 'Without a4, Black can support c4 with ...b5. White can still fight for the pawn with a4, but the play is sharper; 5.a4 first is the main line.',
          uci: ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'b1c3', 'd5c4', 'e2e3', 'b7b5']
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'No plan for e4',
          text: 'In the main line Black develops harmoniously with ...Bf5, ...e6, ...Bb4 and ...Nbd7. Prepare e4 with Qe2 and Rd1, or Nh4 against the f5 bishop; otherwise Black equalises easily.'
        }
      ],
      transpositions: [
        { to: 'w-queens-gambit', note: "Arises from the Queen's Gambit after 2...c6." }
      ],
      lessons: ['black-vs-d4-2', 'gambits-1']
    },
    {
      id: 'w-catalan',
      side: 'white',
      group: 'd4',
      familyId: 'wf-catalan',
      family: 'Catalan Opening',
      short: 'Catalan (Open and Closed)',
      name: 'Catalan Opening',
      aliases: ['Open Catalan', 'Closed Catalan'],
      eco: 'E06',
      defining: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g2g3'],
      moves: '1.d4 Nf6 2.c4 e6 3.g3',
      difficulty: 'Advanced',
      style: 'Positional',
      minutes: 14,
      summary: "Queen's Gambit pressure plus a fianchettoed bishop on g2. A refined positional weapon used at every level.",
      idea: 'White combines d4 and c4 with Bg2, which bears down the long diagonal on d5 and b7. If Black takes on c4, White usually regains the pawn with Qc2 or Qa4+ and keeps lasting queenside pressure. In the Closed Catalan Black holds d5 with ...c6, and White plays for e4 or more queenside space.',
      plans: {
        white: [
          "Use the g2 bishop's pressure on the long diagonal against b7 and the queenside.",
          'Regain a c4 pawn with Qc2 or Qa4+ and Qxc4.',
          'Prepare e4 to open the centre when Black is passive.'
        ],
        black: [
          'Take on c4 and develop the queenside with ...a6, ...b5 and ...Bb7.',
          'Hold d5 with ...c6 and break with ...c5 or ...e5.',
          'Neutralise the long diagonal by contesting it with ...Bb7.'
        ]
      },
      responses: [
        {
          moves: '3...d5 4.Bg2 dxc4',
          name: 'Open Catalan',
          note: '5.Nf3, then castle and regain the pawn with Qc2 or Qa4+; the g2 bishop keeps the pressure.',
          line: 'open'
        },
        {
          moves: '4...Be7 5.Nf3',
          name: 'Closed or Open Catalan',
          note: '5...O-O 6.O-O, and now 6...dxc4 7.Qc2 or 6...c6 7.Qc2 Nbd7 with Nbd2 or Bf4 next.',
          line: 'closed'
        },
        {
          moves: '3...Bb4+ 4.Bd2',
          name: 'Bishop check',
          note: '4...Be7 or 4...Qe7 5.Bg2: keep developing; the bishop on d2 is useful.',
          line: 'bb4'
        },
        {
          moves: '3...c5 4.d5',
          note: '4...exd5 5.cxd5 gives a Benoni structure with the bishop on g2; 4.Nf3 is a calmer option.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'g2g3', san: 'g3', note: 'Prepares Bg2 on the long diagonal.' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'd5c4', san: 'dxc4', note: 'The Open Catalan: Black takes the pawn.' },
          { uci: 'd1c2', san: 'Qc2', note: 'Regains c4 next move.' },
          { uci: 'a7a6', san: 'a6' },
          { uci: 'c2c4', san: 'Qxc4' },
          { uci: 'b7b5', san: 'b5', note: 'Gains time on the queen and expands on the queenside.' },
          { uci: 'c4c2', san: 'Qc2' },
          { uci: 'c8b7', san: 'Bb7', note: 'Contests the long diagonal.' }
        ]
      },
      lines: [
        {
          id: 'open',
          name: '3...d5 4.Bg2 dxc4: the Open Catalan',
          kind: 'Main line',
          summary: 'Black takes on c4. 5.Qa4+ regains the pawn quickly, after which the g2 bishop keeps pressing on the queenside.',
          moves: [
            { uci: 'd7d5', san: 'd5' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'd1a4', san: 'Qa4+', note: 'Checks and prepares to regain c4.' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'a4c4', san: 'Qxc4' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'c4c2', san: 'Qc2' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'g1f3', san: 'Nf3', note: 'Develops; castling and Rd1 or a4 follow.' }
          ]
        },
        {
          id: 'closed',
          name: '...c6 and ...Nbd7: the Closed Catalan',
          kind: 'Alternative',
          summary: 'Black holds d5 and develops solidly. White prepares e4 with Qc2 and Nbd2, keeping the long-diagonal pressure.',
          moves: [
            { uci: 'd7d5', san: 'd5' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c7c6', san: 'c6', note: 'The Closed Catalan: Black holds d5.' },
            { uci: 'd1c2', san: 'Qc2' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'b1d2', san: 'Nbd2', note: 'Prepares e4.' },
            { uci: 'b7b6', san: 'b6' },
            { uci: 'e2e4', san: 'e4' }
          ]
        },
        {
          id: 'bb4',
          name: '3...Bb4+ 4.Bd2',
          kind: 'Sideline',
          summary: 'Black develops with check. White blocks with Bd2, and the game usually returns to Catalan structures.',
          moves: [
            { uci: 'f8b4', san: 'Bb4+', note: 'Black develops with check.' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'b4e7', san: 'Be7' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O', note: 'A Catalan in which the bishop on d2 is useful.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'white',
          title: 'Getting the pawn back in time',
          text: 'In the Open Catalan White is a pawn down for a while. If Black holds c4 with ...b5 and ...Bb7 unopposed, White is simply a pawn down; use Qa4+, a4 or Ne5 in time.'
        },
        {
          kind: 'Trap',
          side: 'black',
          title: 'Holding c4 with ...b5',
          text: 'In the Open Catalan, ...b5 to keep the pawn weakens c6 and the long diagonal: a4 and Ne5 can hit c6 and a8. The g2 bishop makes such pawn grabs risky for Black.'
        }
      ],
      transpositions: [
        { to: 'w-reti', note: '1.Nf3 d5 2.c4 e6 3.g3 Nf6 4.Bg2 with a later d4 reaches Catalan positions.' },
        {
          to: 'w-queens-gambit',
          note: "1.d4 d5 2.c4 e6 3.Nf3 Nf6 4.g3 reaches the Catalan from a Queen's Gambit move order."
        }
      ],
      lessons: ['white-openings-25']
    },
    {
      id: 'w-london',
      side: 'white',
      group: 'd4',
      familyId: 'wf-london',
      family: 'London System',
      short: 'London System (2.Bf4)',
      name: 'London System',
      aliases: ['Bf4 system'],
      eco: 'D02',
      defining: ['d2d4', 'd7d5', 'c1f4'],
      moves: '1.d4 d5 2.Bf4',
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 10,
      summary: 'A system: d4, Bf4, e3, c3, Nf3, Nbd2 and Bd3 against almost anything. Little theory and a very solid structure.',
      idea: "White develops the dark-squared bishop to f4 before playing e3, so it is not shut in. The pyramid c3-d4-e3 is very solid, and White often plays for Ne5 and a kingside attack. Black's main counters are ...c5 with ...Qb6 against b2, and ...Bd6 to trade the strong f4 bishop.",
      plans: {
        white: [
          'Set up c3, d4, e3, Nf3, Nbd2 and Bd3 before committing.',
          'Plant a knight on e5, support it with f4 and attack on the kingside.',
          'Meet ...Bd6 with Bg3 to keep the bishop.'
        ],
        black: [
          'Play ...c5 and ...Qb6 to hit b2 and d4.',
          'Trade the f4 bishop with ...Bd6 or ...Nh5.',
          'Develop the light-squared bishop to f5 or g4 before ...e6.'
        ]
      },
      responses: [
        {
          moves: '2...c5 3.e3 Nc6 4.c3',
          note: '4...Qb6 5.Qb3 defends b2 and offers a trade; after ...Qxb3 axb3 White gets the half-open a-file. 5...c4 6.Qc2 gains queenside space for Black; White answers with Nd2 and e4.',
          line: 'c5qb6'
        },
        {
          moves: '2...Nf6 3.e3',
          note: '3...c5 4.c3 Nc6 5.Nd2 e6 6.Ngf3 Bd6 7.Bg3: the standard set-up.',
          line: 'nf6'
        },
        {
          moves: '2...Bf5 3.e3',
          note: 'Black copies the bishop move. 3...e6 4.Nd2 keeps the system; 3.c4 is the most testing reply.',
          line: 'bf5'
        },
        {
          moves: '1...Nf6 2.Bf4 g6 3.Nc3',
          note: "Against a King's Indian set-up, 3.Nc3 with e4 ideas, or 3.e3 with Nf3, Be2 and O-O, both work."
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'c1f4', san: 'Bf4', note: 'The bishop comes out before e3 shuts it in.' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'c2c3', san: 'c3', note: 'The c3-d4-e3 pyramid: solid, and b2 can be guarded by Qb3.' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'b1d2', san: 'Nd2' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'g1f3', san: 'Ngf3' },
          { uci: 'f8d6', san: 'Bd6', note: 'Offers to trade the f4 bishop.' },
          { uci: 'f4g3', san: 'Bg3', note: "Keeps the bishop; after ...Bxg3 hxg3 the h-file opens for White's rook." },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'f1d3', san: 'Bd3', note: 'The standard set-up is complete.' }
        ]
      },
      lines: [
        {
          id: 'c5qb6',
          name: '2...c5 and ...Qb6',
          kind: 'Main line',
          summary: 'Black hits b2 and d4. Qb3 defends b2 and offers a trade; after ...c4 the queen drops back and White prepares e4.',
          moves: [
            { uci: 'c7c5', san: 'c5' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'd8b6', san: 'Qb6' },
            { uci: 'd1b3', san: 'Qb3', note: 'Defends b2 and offers a queen trade.' },
            { uci: 'c5c4', san: 'c4' },
            { uci: 'b3c2', san: 'Qc2' },
            { uci: 'c8f5', san: 'Bf5' },
            { uci: 'c2c1', san: 'Qc1', note: 'Keeps b2 protected; Nd2 and e4 come later.' }
          ]
        },
        {
          id: 'nf6',
          name: '2...Nf6: the standard set-up',
          kind: 'Alternative',
          summary: 'Both sides develop. White completes the pyramid c3-d4-e3, keeps the bishop with Bg3 against ...Bd6 and castles.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'c2c3', san: 'c3', note: 'The c3-d4-e3 pyramid.' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'b1d2', san: 'Nd2' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1f3', san: 'Ngf3' },
            { uci: 'f8d6', san: 'Bd6' },
            { uci: 'f4g3', san: 'Bg3', note: "Keeps the bishop; after ...Bxg3 hxg3 the h-file opens for White's rook." },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1d3', san: 'Bd3' }
          ]
        },
        {
          id: 'bf5',
          name: '2...Bf5: Black copies',
          kind: 'Alternative',
          summary: 'Black develops the bishop outside the chain. c4 and Qb3 hit d5 and b7 at once.',
          moves: [
            { uci: 'c8f5', san: 'Bf5' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'c2c4', san: 'c4', note: "The most testing: the c-pawn hits d5 while Black's bishop is away from b7." },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd1b3', san: 'Qb3', note: 'Hits b7.' },
            { uci: 'd8b6', san: 'Qb6' },
            { uci: 'c4c5', san: 'c5' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'white',
          title: 'A routine Nd2 drops b2',
          text: 'When the bishop leaves c1, b2 is loose. Against ...c5, ...Nc6 and ...Qb6, the routine 5.Nd2? lets Black take on b2. Qb3 or Qc1 defends.',
          uci: ['d2d4', 'd7d5', 'c1f4', 'c7c5', 'e2e3', 'b8c6', 'c2c3', 'd8b6', 'b1d2', 'b6b2']
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'Losing the London bishop',
          text: 'Black often tries ...Bd6 or ...Nh5 to trade the f4 bishop. Meet ...Bd6 with Bg3 and ...Nh5 with Bg5 or Be5; without the bishop the set-up loses much of its point.'
        }
      ],
      transpositions: [
        {
          to: 'w-colle-zukertort',
          note: '1.d4 d5 2.Nf3 Nf6 3.Bf4 reaches the London by the Colle move order; 3.e3 with b3 and Bb2 gives the Zukertort instead.'
        }
      ],
      lessons: ['white-openings-8'],
      uncertain: 'In the 2...c5 line, 5...c4 6.Qc2 Bf5 7.Qc1 is one of several continuations; Black can also trade on b3.'
    },
    {
      id: 'w-colle-zukertort',
      side: 'white',
      group: 'd4',
      familyId: 'wf-colle',
      family: 'Colle System',
      short: 'Colle-Zukertort (b3 and Bb2)',
      name: 'Colle-Zukertort System',
      aliases: ['Zukertort System'],
      eco: 'D05',
      defining: ['d2d4', 'd7d5', 'g1f3', 'g8f6', 'e2e3'],
      moves: '1.d4 d5 2.Nf3 Nf6 3.e3',
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 10,
      summary: 'd4, Nf3, e3, Bd3, b3 and Bb2: a quiet set-up with a hidden plan of Ne5, f4 and a kingside attack.',
      idea: "White develops with e3 and Bd3, then fianchettoes the queen's bishop with b3 and Bb2 (the Zukertort) instead of playing c3 (the classical Colle). A knight lands on e5, supported by f4, while the bishops on d3 and b2 aim at Black's king. The central break dxc5 and e4 may follow. Black fights for e4 with ...c5, ...b6 and ...Bb7.",
      plans: {
        white: [
          'Plant a knight on e5 and support it with f4.',
          'Aim both bishops at the black king and bring the queen or a rook to the kingside.',
          'Open the centre with dxc5 and e4 at the right moment.'
        ],
        black: [
          'Challenge e5 with ...Nc6 and ...Nd7, trading the strong knight.',
          'Play ...c5, ...b6 and ...Bb7 to contest e4.',
          'Develop the light-squared bishop actively before ...e6, to f5 or g4.'
        ]
      },
      responses: [
        {
          moves: '3...e6 4.Bd3',
          name: 'Main line',
          note: '4...c5 5.b3 Nc6 6.O-O Bd6 7.Bb2 O-O 8.Nbd2, then Ne5 and f4.',
          line: 'main'
        },
        {
          moves: '3...Bf5 4.Bd3',
          note: "Black develops the bishop before ...e6. 4.Bd3 offers to trade it; 4.c4 turns the game into a Queen's Gambit.",
          line: 'bf5'
        },
        {
          moves: '3...g6 4.Bd3',
          note: "4...Bg7 5.O-O O-O 6.Nbd2, then c3 (the classical Colle set-up) and e4; or play c4 for a Queen's Gambit approach.",
          line: 'g6'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'e2e3', san: 'e3', note: 'Quiet: the c1 bishop will come out via b2.' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'b2b3', san: 'b3', note: 'The Zukertort: the bishop goes to b2.' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f8d6', san: 'Bd6' },
          { uci: 'c1b2', san: 'Bb2' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'b1d2', san: 'Nbd2', note: 'Supports e4 and can replace the f3 knight once it jumps to e5. Next: Ne5 and f4.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '3...e6 4.Bd3: the Zukertort set-up',
          kind: 'Main line',
          summary: 'White plays b3, Bb2, O-O and Nbd2, then plants a knight on e5 and supports it with f4.',
          moves: [
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'b2b3', san: 'b3', note: 'The Zukertort: the bishop goes to b2.' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8d6', san: 'Bd6' },
            { uci: 'c1b2', san: 'Bb2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'b7b6', san: 'b6' },
            { uci: 'f3e5', san: 'Ne5', note: 'The key outpost; f4 supports it next.' }
          ]
        },
        {
          id: 'bf5',
          name: '3...Bf5: the bishop comes out',
          kind: 'Alternative',
          summary: 'Black develops the bishop before ...e6. Bd3 offers a trade, and White continues with the usual set-up.',
          moves: [
            { uci: 'c8f5', san: 'Bf5' },
            { uci: 'f1d3', san: 'Bd3', note: "Offers to trade Black's good bishop." },
            { uci: 'f5d3', san: 'Bxd3' },
            { uci: 'd1d3', san: 'Qxd3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'b2b3', san: 'b3', note: 'White continues with the Zukertort set-up.' }
          ]
        },
        {
          id: 'g6',
          name: "3...g6: a King's Indian set-up",
          kind: 'Sideline',
          summary: 'Against a fianchetto the e5 outpost matters less. The classical Colle with c3 and an e4 break is a good choice.',
          moves: [
            { uci: 'g7g6', san: 'g6', note: "A King's Indian set-up." },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'c2c3', san: 'c3', note: 'The classical Colle set-up: White prepares e4.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: 'The Greek gift on h7',
          text: "With the bishop on d3, a knight ready for g5 and the queen able to reach h5, Bxh7+ is a constant threat once Black's f6 knight is driven away or exchanged. Black must watch h7 every move."
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Ne5 without support',
          text: 'A knight on e5 is strong only if f4 can support it, often with Nbd2 or Qe2 ready as well. Played too early, it is simply exchanged with ...Nxe5 or ...Nd7 and White loses time.'
        }
      ],
      transpositions: [
        { to: 'w-london', note: 'Same first moves; 3.Bf4 instead of 3.e3 gives the London System.' }
      ],
      lessons: ['attack-5', 'black-vs-d4-11']
    },
    {
      id: 'w-trompowsky',
      side: 'white',
      group: 'd4',
      familyId: 'wf-trompowsky',
      family: 'Trompowsky Attack',
      short: 'Trompowsky Attack (2.Bg5)',
      name: 'Trompowsky Attack',
      aliases: ['Trompowsky Opening'],
      eco: 'A45',
      defining: ['d2d4', 'g8f6', 'c1g5'],
      moves: '1.d4 Nf6 2.Bg5',
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 10,
      summary: '2.Bg5 sidesteps the big Indian defences at once. Black must decide about the pin on move two.',
      idea: "The bishop threatens Bxf6, damaging Black's pawns. White is happy to give up the bishop for a knight if it leaves doubled pawns or gains time for e4. Against 2...Ne4 the bishop usually retreats to f4 or h4; against 2...e6 White plays e4 and builds a centre. There is little theory and many original positions.",
      plans: {
        white: [
          "Take on f6 when it doubles Black's pawns or helps achieve e4.",
          'Build a centre with e4, or use the solid c3-d4-e3 structure.',
          'Against ...Ne4, chase the knight with f3 and prepare e4.'
        ],
        black: [
          'Hit the bishop and the centre with ...Ne4 and ...c5.',
          'Play ...e6 and ...h6 to keep a healthy structure and the bishop pair.',
          'Attack b2 with ...c5 and ...Qb6 once the bishop has left c1.'
        ]
      },
      responses: [
        {
          moves: '2...Ne4 3.Bf4',
          note: '3...c5 4.f3 Qa5+ 5.c3 Nf6, then 6.d5 or 6.Nd2; 3...d5 4.e3 gives a London-style game.',
          line: 'ne4'
        },
        {
          moves: '2...e6 3.e4',
          note: '3...h6 4.Bxf6 Qxf6 5.Nc3: White has a broad centre, Black the bishop pair.',
          line: 'e6'
        },
        {
          moves: '2...d5 3.Bxf6',
          note: '3...exf6 4.e3 gives Black doubled pawns but free bishops; 3.e3 keeps more tension.',
          line: 'd5'
        },
        {
          moves: '2...c5 3.d5',
          note: 'Gains space; 3.Bxf6 gxf6 4.d5 is another well-known approach.',
          line: 'c5'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c1g5', san: 'Bg5', note: "Threatens Bxf6, doubling Black's pawns." },
          { uci: 'e7e6', san: 'e6', note: 'Now Black can recapture on f6 with the queen.' },
          { uci: 'e2e4', san: 'e4', note: 'Builds a centre with gain of time: e5 is threatened.' },
          { uci: 'h7h6', san: 'h6' },
          { uci: 'g5f6', san: 'Bxf6' },
          { uci: 'd8f6', san: 'Qxf6', note: 'Black has the bishop pair; White has the centre and quick development.' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'd1d2', san: 'Qd2', note: 'Prepares O-O-O; f4 and a kingside advance may follow.' }
        ]
      },
      lines: [
        {
          id: 'ne4',
          name: '2...Ne4 3.Bf4',
          kind: 'Main line',
          summary: 'Black hits the bishop and plays ...c5 with ...Qa5+. White chases the knight with f3 and gains space with d5, but must watch b2.',
          moves: [
            { uci: 'f6e4', san: 'Ne4', note: 'Black hits the bishop at once.' },
            { uci: 'g5f4', san: 'Bf4' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'f2f3', san: 'f3' },
            { uci: 'd8a5', san: 'Qa5+' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'e4f6', san: 'Nf6' },
            { uci: 'd4d5', san: 'd5', note: 'Gains space; b2 is now loose, so watch ...Qb6.' }
          ]
        },
        {
          id: 'e6',
          name: '2...e6 3.e4',
          kind: 'Alternative',
          summary: 'White builds a centre with tempo. After ...h6 and Bxf6 Black has the bishop pair; White has the centre and quick development.',
          moves: [
            { uci: 'e7e6', san: 'e6' },
            { uci: 'e2e4', san: 'e4', note: 'Builds a centre with gain of time.' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'd8f6', san: 'Qxf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'd1d2', san: 'Qd2', note: 'Prepares O-O-O; f4 and a kingside advance may follow.' }
          ]
        },
        {
          id: 'd5',
          name: '2...d5 3.Bxf6',
          kind: 'Alternative',
          summary: "White doubles Black's pawns at once. Black gets two bishops and the open e-file; White plays c4 for central pressure.",
          moves: [
            { uci: 'd7d5', san: 'd5' },
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'e7f6', san: 'exf6' },
            { uci: 'e2e3', san: 'e3', note: 'Black has doubled pawns but free bishops.' },
            { uci: 'f8d6', san: 'Bd6' },
            { uci: 'c2c4', san: 'c4', note: 'Hits d5 so that the black bishops do not get the centre for free.' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'f1c4', san: 'Bxc4' }
          ]
        },
        {
          id: 'c5',
          name: '2...c5 3.Bxf6',
          kind: 'Sideline',
          summary: 'Black hits d4 at once. White takes on f6, gains space with d5 and defends b2 calmly against ...Qb6.',
          moves: [
            { uci: 'c7c5', san: 'c5' },
            { uci: 'g5f6', san: 'Bxf6', note: 'Doubles the pawns at once.' },
            { uci: 'g7f6', san: 'gxf6' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'd8b6', san: 'Qb6' },
            { uci: 'd1c1', san: 'Qc1', note: 'Defends b2 calmly.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Forgetting b2',
          text: 'Once the bishop has left c1, ...c5 and ...Qb6 hit b2. Defend with Qc1 or Nd2, or give the pawn only as a conscious gambit.',
          uci: ['d2d4', 'g8f6', 'c1g5', 'c7c5', 'g5f6', 'g7f6', 'd4d5', 'd8b6']
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'Giving the bishop pair for nothing',
          text: 'Bxf6 hands Black the bishop pair. It is worth it when the pawns are damaged or e4 comes with tempo; otherwise keep the bishop with Bf4 or Bh4.'
        }
      ],
      lessons: ['white-openings-14']
    },
    {
      id: 'w-kid-classical',
      side: 'white',
      group: 'd4',
      familyId: 'wf-kings-indian',
      family: "King's Indian Defence",
      short: 'Classical Variation (Nf3 and Be2)',
      name: "King's Indian: Classical Variation",
      aliases: ['Classical KID', "Main-line King's Indian"],
      eco: 'E97',
      defining: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'f8g7', 'e2e4', 'd7d6', 'g1f3'],
      moves: '1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3',
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 20,
      summary: 'Take the full centre with e4 and develop classically with Nf3, Be2 and O-O. White plays on the queenside, Black on the kingside.',
      idea: 'White builds a broad centre. Black hits it with ...e5; after d5 the centre locks and the game becomes a race. White attacks on the queenside with b4 and c5 to open the c-file, while Black storms the kingside with ...f5, ...f4 and ...g5. Timing matters more than individual moves.',
      plans: {
        white: [
          'Close the centre with d5 and play on the queenside with b4, c5 and Nd2 or Ne1.',
          'Meet ...f5 with f3 or exf5 and keep the e4 square under control.',
          'In the ...exd4 lines, use the extra space and target the d6 pawn.'
        ],
        black: [
          'Strike the centre with ...e5 or ...c5.',
          'After d5, attack with ...Nh5 or ...Ne8, ...f5, ...f4 and ...g5.',
          'In the ...exd4 lines, pressure e4 with ...Re8 and the g7 bishop.'
        ]
      },
      responses: [
        {
          moves: '6...e5 7.O-O Nc6 8.d5 Ne7 9.b4',
          name: 'Bayonet Attack',
          note: 'Black usually replies 9...Nh5 10.Re1. White plays c5 to open the c-file; Black aims for ...f5.',
          line: 'bayonet'
        },
        {
          moves: '7...exd4 8.Nxd4',
          note: "8...Re8 9.f3: the e4 pawn is solid, and Black's d6 pawn can become a target.",
          line: 'exd4'
        },
        {
          moves: '6...c5 7.O-O',
          note: '7...cxd4 8.Nxd4 gives a Maroczy-type grip on d5 (pawns on c4 and e4 controlling d5); 7.d5 instead leads to a Benoni structure.',
          line: 'c5'
        },
        {
          moves: '6...Na6 7.O-O',
          note: 'The knight supports ...e5 and ...c5. Keep developing; 7.Be3 is a popular alternative.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'g7g6', san: 'g6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'e2e4', san: 'e4', note: 'White takes the full centre.' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'e7e5', san: 'e5', note: 'Black strikes at d4.' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'd4d5', san: 'd5', note: 'Closes the centre and gains space with gain of time.' },
          { uci: 'c6e7', san: 'Ne7', note: 'The knight heads for the kingside to support ...f5.' },
          { uci: 'b2b4', san: 'b4', note: 'The Bayonet: White starts the queenside attack at once.' }
        ]
      },
      lines: [
        {
          id: 'bayonet',
          name: '6...e5 7.O-O Nc6 8.d5 Ne7 9.b4',
          kind: 'Main line',
          summary: 'The Bayonet Attack: White starts queenside play at once with b4 and c5, while Black prepares ...f5 with ...Nh5.',
          moves: [
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd4d5', san: 'd5', note: 'Closes the centre with gain of time.' },
            { uci: 'c6e7', san: 'Ne7' },
            { uci: 'b2b4', san: 'b4', note: 'The Bayonet: queenside play at once.' },
            { uci: 'f6h5', san: 'Nh5' },
            { uci: 'f1e1', san: 'Re1' }
          ]
        },
        {
          id: 'ne1',
          name: '9.Ne1: the classical regrouping',
          kind: 'Alternative',
          summary: 'White frees the f-pawn for f3 and brings the knight towards d3, supporting c5. Black plays ...f5 and ...f4.',
          moves: [
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'c6e7', san: 'Ne7' },
            { uci: 'f3e1', san: 'Ne1', note: 'Frees the f-pawn for f3 and heads for d3.' },
            { uci: 'f6d7', san: 'Nd7' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'f7f5', san: 'f5' },
            { uci: 'f2f3', san: 'f3', note: 'Holds e4; c5 comes next.' }
          ]
        },
        {
          id: 'exd4',
          name: '7...exd4 8.Nxd4',
          kind: 'Alternative',
          summary: 'Black releases the centre for piece play against e4. White keeps e4 solid with f3 and targets the backward d6 pawn.',
          moves: [
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'f8e8', san: 'Re8' },
            { uci: 'f2f3', san: 'f3', note: 'e4 is solid; the d6 pawn can become a target.' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'g1h1', san: 'Kh1', note: 'Prophylaxis: the king steps off the g1-a7 diagonal.' }
          ]
        },
        {
          id: 'c5',
          name: '6...c5 7.O-O cxd4',
          kind: 'Sideline',
          summary: 'Black exchanges on d4. White recaptures with the knight and has a Maroczy-type grip on d5.',
          moves: [
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'f3d4', san: 'Nxd4', note: 'Pawns on c4 and e4 grip d5.' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'c1e3', san: 'Be3', note: 'Supports the d4 knight.' },
            { uci: 'c8d7', san: 'Bd7' },
            { uci: 'd1d2', san: 'Qd2' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'white',
          title: 'c5 before it is supported',
          text: 'In the closed centre, 9.c5? dxc5 simply loses a pawn. Prepare c5 with b4, Nd2 or Ne1, and Be3.',
          uci: [
            'd2d4',
            'g8f6',
            'c2c4',
            'g7g6',
            'b1c3',
            'f8g7',
            'e2e4',
            'd7d6',
            'g1f3',
            'e8g8',
            'f1e2',
            'e7e5',
            'e1g1',
            'b8c6',
            'd4d5',
            'c6e7',
            'c4c5',
            'd6c5'
          ]
        },
        {
          kind: 'Risk',
          side: 'white',
          title: "Black's kingside storm",
          text: 'After d5 Black attacks with ...f5, ...f4, ...g5 and ...g4. Keep defenders near the king (f3, Bf2, Kh1, Rf2) and make sure your queenside play is fast enough.'
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'The Exchange Variation gives little',
          text: '7.dxe5 dxe5 8.Qxd8 Rxd8 is safe but usually level and quiet. Choose it as a deliberate decision, not as a way to avoid thinking.'
        }
      ],
      transpositions: [
        {
          to: 'w-grunfeld-exchange',
          note: "After 3.Nc3 Black chooses between 3...Bg7 (King's Indian) and 3...d5 (Grunfeld)."
        },
        {
          to: 'w-benoni-classical',
          note: '6...c5 7.d5 e6 8.O-O exd5 9.cxd5 reaches the Modern Benoni Classical System.'
        }
      ],
      lessons: ['white-openings-10']
    },
    {
      id: 'w-kid-samisch',
      side: 'white',
      group: 'd4',
      familyId: 'wf-kings-indian',
      family: "King's Indian Defence",
      short: 'Samisch Variation (5.f3)',
      name: "King's Indian: Samisch Variation",
      aliases: ['Saemisch Variation'],
      eco: 'E80-E89',
      defining: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'f8g7', 'e2e4', 'd7d6', 'f2f3'],
      moves: '1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3',
      difficulty: 'Advanced',
      style: 'Attacking',
      minutes: 15,
      summary: '5.f3 protects e4 with a pawn and prepares Be3, Qd2 and often O-O-O with a kingside pawn storm. Black counters with ...e5, ...c5 or queenside play.',
      idea: "The f3 pawn defends e4 and takes g4 from Black's pieces, so a bishop on e3 is not harassed by ...Ng4. White plays Be3 and Qd2, often castles long and attacks with g4, h4 and Bh6 to trade Black's key bishop. Black strikes at the centre with ...e5 or ...c5, sometimes as a pawn sacrifice, or plays on the queenside with ...c6, ...a6 and ...b5. The cost is that the g1 knight has no f3 square and goes to e2.",
      plans: {
        white: [
          'Play Be3, Qd2 and Nge2, then choose between O-O-O with g4 and h4, or a central plan.',
          'Trade the g7 bishop with Bh6 when the queen is on d2.',
          'After ...e5, close the centre with d5 and play where you are stronger.'
        ],
        black: [
          'Strike in the centre with ...e5 or ...c5, sometimes as a pawn sacrifice.',
          "Play ...c6, ...a6 and ...b5 against White's queenside.",
          'Use ...Nc6, ...a6 and ...Rb8 (the Panno) for queenside counterplay.'
        ]
      },
      responses: [
        {
          moves: '5...O-O 6.Be3 e5 7.d5',
          name: 'Closed centre',
          note: "7...c6 8.Qd2 cxd5 9.cxd5: a King's Indian structure with the c-file open; White plays Bd3, Nge2 and often g4.",
          line: 'e5'
        },
        {
          moves: '6...c5',
          name: 'Samisch Gambit',
          note: '7.dxc5 dxc5 8.Qxd8 Rxd8 9.Bxc5 Nc6: Black gives a pawn for active pieces and dark-square play. 7.Nge2 declines it.',
          line: 'c5'
        },
        {
          moves: '6...Nc6 7.Nge2 a6',
          name: 'Panno',
          note: 'Black prepares ...Rb8 and ...b5. White plays Qd2 and Nc1-b3, or a3 and b4, to restrain the queenside.',
          line: 'panno'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'g7g6', san: 'g6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'e2e4', san: 'e4' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'f2f3', san: 'f3', note: 'The Samisch: e4 is defended by a pawn.' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'c1e3', san: 'Be3', note: 'With f3 played, ...Ng4 cannot hit this bishop.' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'd4d5', san: 'd5', note: 'Closes the centre.' },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'd1d2', san: 'Qd2', note: 'Prepares O-O-O or Bh6.' },
          { uci: 'c6d5', san: 'cxd5' },
          { uci: 'c4d5', san: 'cxd5' },
          { uci: 'a7a6', san: 'a6' }
        ]
      },
      lines: [
        {
          id: 'e5',
          name: '6...e5 7.d5: the closed centre',
          kind: 'Main line',
          summary: "After d5 and ...c6 the c-file opens in a King's Indian structure (d5 and e4 against d6 and e5). White develops with Bd3 and Nge2 and chooses a wing to attack.",
          moves: [
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'd4d5', san: 'd5', note: 'Closes the centre.' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'c6d5', san: 'cxd5' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'f1d3', san: 'Bd3', note: 'Develops; Nge2 and g4 or O-O follow.' }
          ]
        },
        {
          id: 'c5',
          name: '6...c5: the Samisch Gambit',
          kind: 'Sharp try',
          summary: 'Black offers a pawn for activity. In the queenless position after 9.Bxc5 Nc6 Black has strong pieces and dark-square pressure.',
          moves: [
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'c7c5', san: 'c5', note: 'The Samisch Gambit idea: Black offers a pawn.' },
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'd6c5', san: 'dxc5' },
            { uci: 'd1d8', san: 'Qxd8' },
            { uci: 'f8d8', san: 'Rxd8' },
            { uci: 'e3c5', san: 'Bxc5' },
            { uci: 'b8c6', san: 'Nc6', note: 'Active pieces and dark-square pressure for the pawn.' }
          ]
        },
        {
          id: 'panno',
          name: '6...Nc6: the Panno',
          kind: 'Alternative',
          summary: 'Black prepares ...Rb8 and ...b5 to open the queenside. White develops with Nge2 and Qd2 and brings the knight to b3 via c1.',
          moves: [
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1e2', san: 'Nge2' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'a8b8', san: 'Rb8', note: 'The Panno: ...b5 comes next.' },
            { uci: 'e2c1', san: 'Nc1', note: 'Heading for b3; the knight helps hold the queenside.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'white',
          title: 'The king stuck in the centre',
          text: "With f3 and Nge2 White develops slowly. If Black opens the centre quickly with ...c5 or ...e5 and ...exd4, White's king can be caught in the middle. Decide early where it goes."
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Castling long into ...b5',
          text: "Opposite-side castling is White's main idea, but against ...c6, ...a6 and ...b5 the king on c1 can come under fire first. Check whether Black's queenside play is faster before castling long."
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'Dark squares after f3',
          text: "f3 weakens the dark squares around White's king. After ...c5 or ...e5 the g7 bishop can become very strong; Bh6 to trade it is often the answer."
        }
      ],
      lessons: ['white-openings-22', 'attack-7'],
      uncertain: 'The Panno line is given only to move 9; several ninth moves are played there.'
    },
    {
      id: 'w-kid-fianchetto',
      side: 'white',
      group: 'd4',
      familyId: 'wf-kings-indian',
      family: "King's Indian Defence",
      short: 'Fianchetto Variation (g3)',
      name: "King's Indian: Fianchetto Variation",
      aliases: ['Fianchetto KID'],
      eco: 'E60-E69',
      defining: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'g1f3', 'f8g7', 'g2g3'],
      moves: '1.d4 Nf6 2.c4 g6 3.Nf3 Bg7 4.g3',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 14,
      summary: "White fianchettoes the king's bishop to protect the king and press on the long diagonal. The safest way to meet the King's Indian, with slow, positional play.",
      idea: "With g3 and Bg2 White's king is well protected, so Black's usual kingside attack has little effect. White castles, plays Nc3 and, against ...e5, often e4 with h3 to stop ...Ng4 and ...Bg4. Against the Panno (...Nc6 and ...a6) and the Yugoslav (...c5) White uses d5 to gain space, and the g2 bishop presses on Black's queenside.",
      plans: {
        white: [
          "Castle behind the fianchetto, then play Nc3 and e4 or d5 depending on Black's set-up.",
          'Use h3 to stop ...Ng4 and ...Bg4 before playing Be3.',
          'Gain space with d5 against ...Nc6 or ...c5 and press on the queenside with the g2 bishop.'
        ],
        black: [
          'Prepare ...e5 with ...Nbd7 and ...c6, or play ...Nc6 and ...a6 (the Panno).',
          'Use ...c5 (the Yugoslav) to fight on the queenside.',
          'Play ...exd4 and pressure e4 with ...Re8.'
        ]
      },
      responses: [
        {
          moves: '4...O-O 5.Bg2 d6 6.O-O Nbd7 7.Nc3 e5',
          name: 'Classical set-up',
          note: '8.e4 c6 9.h3: White prevents ...Ng4 and keeps a solid centre.',
          line: 'classical'
        },
        {
          moves: '6...Nc6 7.Nc3 a6',
          name: 'Panno',
          note: '8.d5 Na5 9.Nd2 c5 10.Qc2: White gains space and covers c4; Black plays ...Rb8 and ...b5.',
          line: 'panno'
        },
        {
          moves: '4...d5 5.cxd5 Nxd5',
          name: 'Grunfeld set-up',
          note: '6.Bg2 O-O 7.O-O Nb6 8.Nc3 Nc6 9.e3: a Fianchetto Grunfeld; White keeps a solid centre.',
          line: 'grunfeld'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'g7g6', san: 'g6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'g2g3', san: 'g3', note: 'The fianchetto protects the king.' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'b8d7', san: 'Nbd7' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'e2e4', san: 'e4', note: 'Claims the centre.' },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'h2h3', san: 'h3', note: 'Stops ...Ng4 and ...Bg4 before Be3.' }
        ]
      },
      lines: [
        {
          id: 'classical',
          name: '...Nbd7 and ...e5: the classical set-up',
          kind: 'Main line',
          summary: 'Black prepares ...e5 with ...Nbd7. White plays e4 and h3, then Be3, keeping a solid centre and a safe king.',
          moves: [
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'e2e4', san: 'e4', note: 'Claims the centre.' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'h2h3', san: 'h3', note: 'Stops ...Ng4 and ...Bg4, preparing Be3.' }
          ]
        },
        {
          id: 'panno',
          name: '...Nc6 and ...a6: the Panno',
          kind: 'Alternative',
          summary: 'Black prepares ...Rb8 and ...b5. White gains space with d5, chases the knight to a5 and covers c4 with Nd2 and Qc2.',
          moves: [
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'a7a6', san: 'a6', note: 'The Panno: ...Rb8 and ...b5 next.' },
            { uci: 'd4d5', san: 'd5', note: 'Gains space with tempo.' },
            { uci: 'c6a5', san: 'Na5' },
            { uci: 'f3d2', san: 'Nd2', note: 'Covers c4 and b3.' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'd1c2', san: 'Qc2' }
          ]
        },
        {
          id: 'grunfeld',
          name: '4...d5: a Grunfeld set-up',
          kind: 'Sideline',
          summary: 'Black chooses a Fianchetto Grunfeld. White exchanges on d5, castles and keeps d4 solid with e3.',
          moves: [
            { uci: 'd7d5', san: 'd5', note: 'Black chooses a Grunfeld set-up.' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd5b6', san: 'Nb6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e2e3', san: 'e3', note: 'Solid: d4 is safe and the g2 bishop presses on the queenside.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Be3 before h3',
          text: 'In the classical set-up, Be3 without h3 can be met by ...Ng4, hitting the bishop and winning time or the bishop pair. Play h3 first, then Be3.'
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'Too passive in the centre',
          text: "The fianchetto is safe, but if White never plays e4 or d5, Black frees the game with ...e5 and ...exd4 or ...c5. Choose the central plan that fits Black's set-up."
        }
      ],
      lessons: ['white-openings-24']
    },
    {
      id: 'w-grunfeld-exchange',
      side: 'white',
      group: 'd4',
      familyId: 'wf-grunfeld',
      family: 'Grunfeld Defence',
      short: 'Exchange Variation (4.cxd5)',
      name: 'Grunfeld: Exchange Variation',
      aliases: ['Grunfeld Exchange'],
      eco: 'D85',
      defining: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'd7d5', 'c4d5'],
      moves: '1.d4 Nf6 2.c4 g6 3.Nc3 d5 4.cxd5',
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 16,
      summary: "Accept Black's invitation: take on d5, build a big centre with e4 and defend it against the Grunfeld's pressure.",
      idea: 'After 4...Nxd5 5.e4 Nxc3 6.bxc3 White has a broad pawn centre on c3, d4 and e4. Black attacks it with ...Bg7, ...c5, ...Nc6 and ...Qa5 or ...Bg4. White supports the centre with pieces (Bc4, Ne2, Be3), castles and may push d5. If the centre holds, White is better; if it collapses, Black is.',
      plans: {
        white: [
          'Defend d4 with Be3, Ne2 and a rook on c1 or d1.',
          'Push d5 at the right moment to gain space and attack.',
          'Use the c4 bishop against f7 and consider a later f4-f5.'
        ],
        black: [
          'Attack d4 with ...c5, ...Nc6, ...Bg7 and ...Qa5 or ...Bg4.',
          "Trade the c-pawn for d4 and target White's loosened pawns.",
          'Use the queenside pawn majority in the endgame.'
        ]
      },
      responses: [
        {
          moves: '7.Bc4 c5 8.Ne2',
          name: 'Classical Exchange',
          note: '8...Nc6 9.Be3 O-O 10.O-O: the knight on e2 supports d4 and avoids a pin with ...Bg4.',
          line: 'classical'
        },
        {
          moves: '7.Nf3 c5 8.Rb1',
          name: 'Modern Exchange',
          note: '8...O-O 9.Be2 cxd4 10.cxd4 Qa5+ 11.Bd2: the rook leaves the long diagonal; Black can grab a2 at some risk.',
          line: 'modern'
        },
        { moves: '7...O-O 8.Ne2', note: '8...c5 9.Be3 Nc6 10.O-O transposes to the Classical main line.' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'g7g6', san: 'g6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd7d5', san: 'd5', note: 'The Grunfeld: Black invites White to take the centre.' },
          { uci: 'c4d5', san: 'cxd5' },
          { uci: 'f6d5', san: 'Nxd5' },
          { uci: 'e2e4', san: 'e4', note: 'Gains time on the knight and builds the centre.' },
          { uci: 'd5c3', san: 'Nxc3' },
          { uci: 'b2c3', san: 'bxc3' },
          { uci: 'f8g7', san: 'Bg7', note: 'The bishop pressures c3 and d4.' },
          { uci: 'f1c4', san: 'Bc4', note: 'Classical development, eyeing f7.' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'g1e2', san: 'Ne2', note: 'Supports d4 and avoids a pin with ...Bg4.' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'c1e3', san: 'Be3' }
        ]
      },
      lines: [
        {
          id: 'classical',
          name: '7.Bc4: the Classical Exchange',
          kind: 'Main line',
          summary: 'White develops the bishop to c4, the knight to e2 and the other bishop to e3, defending d4 against ...c5, ...Nc6 and ...Bg7.',
          moves: [
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'd5c3', san: 'Nxc3' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1c4', san: 'Bc4', note: 'Classical development, eyeing f7.' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'g1e2', san: 'Ne2', note: 'Supports d4 and avoids a pin with ...Bg4.' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' }
          ]
        },
        {
          id: 'modern',
          name: '7.Nf3 and 8.Rb1: the Modern Exchange',
          kind: 'Alternative',
          summary: 'The knight goes to f3 and the rook to b1, off the long diagonal. Black may grab a2; White gets activity for it.',
          moves: [
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'd5c3', san: 'Nxc3' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'g1f3', san: 'Nf3', note: 'The Modern Exchange: the knight goes to f3.' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'a1b1', san: 'Rb1', note: 'Takes the rook off the long diagonal and eyes b7.' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'd8a5', san: 'Qa5+' },
            { uci: 'c1d2', san: 'Bd2' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'white',
          title: 'd5 with c3 unprotected',
          text: 'Pushing d5 while c3 is loose allows ...Bxc3+, forking king and rook. Prepare d5 with Rb1, Bd2 or Rc1.',
          uci: [
            'd2d4',
            'g8f6',
            'c2c4',
            'g7g6',
            'b1c3',
            'd7d5',
            'c4d5',
            'f6d5',
            'e2e4',
            'd5c3',
            'b2c3',
            'f8g7',
            'g1f3',
            'c7c5',
            'd4d5',
            'g7c3'
          ]
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'The centre under fire',
          text: 'Black attacks d4 with ...c5, ...Nc6, ...Bg7 and ...Qa5 or ...Bg4. Every piece must help defend it; if d4 falls, c3 and the long diagonal follow.'
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Allowing an awkward ...Bg4 pin',
          text: 'With the knight on f3, ...Bg4 adds pressure on d4. In the Bc4 lines Ne2 avoids the pin; with Nf3, have Be2 and Rb1 ready.'
        }
      ],
      transpositions: [
        { to: 'w-kid-classical', note: "Same first three moves; 3...Bg7 4.e4 is the King's Indian." }
      ],
      lessons: ['black-vs-d4-8']
    },
    {
      id: 'w-grunfeld-russian',
      side: 'white',
      group: 'd4',
      familyId: 'wf-grunfeld',
      family: 'Grunfeld Defence',
      short: 'Russian System (Nf3 and Qb3)',
      name: 'Grunfeld: Russian System (5.Qb3)',
      aliases: ['Grunfeld, Russian Variation'],
      eco: 'D96-D99',
      defining: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'd7d5', 'g1f3', 'f8g7', 'd1b3'],
      moves: '1.d4 Nf6 2.c4 g6 3.Nc3 d5 4.Nf3 Bg7 5.Qb3',
      difficulty: 'Advanced',
      style: 'Positional',
      minutes: 16,
      summary: 'White develops with Nf3 and hits d5 with Qb3, forcing ...dxc4. After Qxc4 and e4 White has a broad centre supported by pieces.',
      idea: 'Instead of exchanging on d5, White adds pressure with Qb3, which also eyes b7. Black usually takes on c4, and after Qxc4 and e4 White has the ideal pawn centre on d4 and e4. Black then challenges it with piece play: ...Bg4 (Smyslov), ...a6 and ...b5 (Hungarian) or ...Na6 and ...c5 (Prins). White develops with Be2 and Be3, castles and keeps the queen out of trouble.',
      plans: {
        white: [
          'After ...dxc4 Qxc4 O-O, build the centre with e4 and develop with Be2 and Be3.',
          'Keep the queen safe from ...Be6, ...b5 and ...Nb6; b3 and d3 are typical retreats.',
          'Use Rd1 and d5 to gain space when Black hits the centre.'
        ],
        black: [
          'Take on c4 and gain time against the queen.',
          'Pressure d4 with ...Bg4, ...Nfd7-b6 and ...Nc6.',
          'Hit the centre with ...c5 or ...e5 at the right moment.'
        ]
      },
      responses: [
        {
          moves: '5...dxc4 6.Qxc4 O-O 7.e4 Bg4',
          name: 'Smyslov',
          note: '8.Be3 Nfd7 9.Qb3 Nb6 10.Rd1: White holds d4 and completes development with Be2 and O-O.',
          line: 'smyslov'
        },
        {
          moves: '7...a6',
          name: 'Hungarian',
          note: '8.Be2 b5 9.Qb3 c5 10.dxc5 Bb7: Black gets quick queenside play; White keeps the centre.',
          line: 'hungarian'
        },
        {
          moves: '7...Na6',
          name: 'Prins',
          note: '8.Be2 c5 9.d5 e6 10.O-O exd5 11.exd5: White has a space edge with the d5 pawn.',
          line: 'prins'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'g7g6', san: 'g6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'd1b3', san: 'Qb3', note: 'Hits d5 and eyes b7.' },
          { uci: 'd5c4', san: 'dxc4' },
          { uci: 'b3c4', san: 'Qxc4', note: 'The queen recaptures.' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'e2e4', san: 'e4', note: 'The ideal centre.' },
          { uci: 'c8g4', san: 'Bg4' },
          { uci: 'c1e3', san: 'Be3', note: 'Defends d4.' },
          { uci: 'f6d7', san: 'Nfd7' },
          { uci: 'c4b3', san: 'Qb3', note: 'Steps out of the way of ...Nb6.' },
          { uci: 'd7b6', san: 'Nb6' }
        ]
      },
      lines: [
        {
          id: 'smyslov',
          name: '7...Bg4: the Smyslov',
          kind: 'Main line',
          summary: 'Black pressures d4 through the f3 knight and regroups ...Nfd7-b6. White holds d4 with Be3, Qb3 and Rd1.',
          moves: [
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'b3c4', san: 'Qxc4' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e2e4', san: 'e4', note: 'The ideal centre.' },
            { uci: 'c8g4', san: 'Bg4', note: 'The Smyslov: pressure on d4 through the f3 knight.' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'f6d7', san: 'Nfd7' },
            { uci: 'c4b3', san: 'Qb3' },
            { uci: 'd7b6', san: 'Nb6' },
            { uci: 'a1d1', san: 'Rd1', note: 'Holds d4; Be2 and O-O follow.' }
          ]
        },
        {
          id: 'hungarian',
          name: '7...a6: the Hungarian',
          kind: 'Alternative',
          summary: 'Black gains queenside space with tempo against the queen and opens the long diagonal. White keeps the centre and develops.',
          moves: [
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'b3c4', san: 'Qxc4' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'a7a6', san: 'a6', note: 'The Hungarian: ...b5 with tempo next.' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'c4b3', san: 'Qb3' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'c8b7', san: 'Bb7', note: 'Black has quick queenside play for the pawn.' }
          ]
        },
        {
          id: 'prins',
          name: '7...Na6: the Prins',
          kind: 'Alternative',
          summary: 'The knight supports ...c5. White answers with d5 and, after the exchange on d5, keeps a space advantage.',
          moves: [
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'b3c4', san: 'Qxc4' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'b8a6', san: 'Na6', note: 'The Prins: the knight supports ...c5.' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'e4d5', san: 'exd5', note: 'White has a space edge with the d5 pawn.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'white',
          title: 'The queen as a target',
          text: 'After Qxc4 the queen can be hit by ...Be6, ...b5, ...Nb6 or ...Na6-b4. Each tempo helps Black attack the centre; put it on a good square early, usually b3 or d3.'
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Leaving the pawns to defend themselves',
          text: 'The d4 and e4 pawns need piece support: Be3, Rd1 and Be2. Left alone, they become targets for ...c5, ...Bg4 and ...Nc6.'
        }
      ],
      lessons: ['white-openings-23'],
      uncertain: 'The Hungarian (7...a6) line is given in outline only; theory there is extensive and the evaluation depends on later details.'
    },
    {
      id: 'w-nimzo-rubinstein',
      side: 'white',
      group: 'd4',
      familyId: 'wf-nimzo-indian',
      family: 'Nimzo-Indian Defence',
      short: 'Rubinstein System (4.e3)',
      name: 'Nimzo-Indian: Rubinstein System (4.e3)',
      aliases: ['Rubinstein Variation'],
      eco: 'E54',
      defining: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'b1c3', 'f8b4', 'e2e3'],
      moves: '1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 4.e3',
      difficulty: 'Intermediate',
      style: 'Solid',
      minutes: 14,
      summary: 'Against the Nimzo-Indian, 4.e3 develops calmly, keeps the structure flexible and leads to rich middlegames.',
      idea: "Black pins the c3 knight and may give up the bishop to double White's c-pawns. With 4.e3 White develops quickly with Bd3, Nf3 or Ne2 and O-O, and accepts a3 and bxc3 when it brings the bishop pair and a strong centre. Plans revolve around the e4 advance, while Black blockades and targets the c-pawns.",
      plans: {
        white: [
          'Develop with Bd3, Nf3 and O-O, then decide about a3.',
          'With the bishop pair and doubled c-pawns, open the centre with e4.',
          'Use the Ne2 move order to recapture on c3 with a knight and avoid doubled pawns.'
        ],
        black: [
          "Double White's pawns with ...Bxc3 and blockade with ...c5, ...d6 and ...e5.",
          'Strike with ...d5 and ...c5 for open, active play.',
          'Fianchetto with ...b6 and ...Bb7 to fight for e4.'
        ]
      },
      responses: [
        {
          moves: '4...O-O 5.Bd3',
          name: 'Main line',
          note: '5...d5 6.Nf3 c5 7.O-O Nc6 8.a3 Bxc3 9.bxc3 dxc4 10.Bxc4 Qc7: White aims for e4.',
          line: 'main'
        },
        {
          moves: '4...c5 5.Bd3',
          name: 'Hubner set-up',
          note: '5...Nc6 6.Nf3 Bxc3+ 7.bxc3 d6 8.e4: Black blockades with ...e5. 5.Ne2 is a good alternative.',
          line: 'hubner'
        },
        {
          moves: '4...b6 5.Bd3',
          note: '5...Bb7 6.Nf3 O-O 7.O-O: fight for e4. 5.Ne2 aims for a3 without doubled pawns.',
          line: 'b6'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'f8b4', san: 'Bb4', note: 'The Nimzo-Indian: the pin fights for e4.' },
          { uci: 'e2e3', san: 'e3', note: 'Calm development; the f1 bishop can come out.' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'a2a3', san: 'a3', note: 'Asks the bishop to decide.' },
          { uci: 'b4c3', san: 'Bxc3' },
          { uci: 'b2c3', san: 'bxc3', note: 'Doubled pawns, but a strong centre and the bishop pair.' },
          { uci: 'd5c4', san: 'dxc4', note: 'Black releases the centre; after 10.Bxc4 Qc7 Black prepares ...e5.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '4...O-O 5.Bd3 d5',
          kind: 'Main line',
          summary: 'Both sides develop; a3 forces the bishop to decide. After ...Bxc3 bxc3 and ...dxc4 White has the bishop pair and prepares e4.',
          moves: [
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'a2a3', san: 'a3', note: 'Asks the bishop to decide.' },
            { uci: 'b4c3', san: 'Bxc3' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'd3c4', san: 'Bxc4' },
            { uci: 'd8c7', san: 'Qc7' },
            { uci: 'c4d3', san: 'Bd3', note: 'Prepares e4.' }
          ]
        },
        {
          id: 'hubner',
          name: '4...c5 and ...d6: the Hubner set-up',
          kind: 'Alternative',
          summary: 'Black doubles the c-pawns and blockades with ...d6 and ...e5. White plays e4 and d5 and tries to open lines for the bishops.',
          moves: [
            { uci: 'c7c5', san: 'c5' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b4c3', san: 'Bxc3+' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e3e4', san: 'e4', note: 'Black blockades with ...e5 next.' },
            { uci: 'e6e5', san: 'e5' },
            { uci: 'd4d5', san: 'd5', note: 'The centre closes; White will aim for f4 or a kingside build-up.' }
          ]
        },
        {
          id: 'b6',
          name: '4...b6: the fianchetto',
          kind: 'Sideline',
          summary: 'Black fights for e4 with ...Bb7. White develops and decides about cxd5 and a3 depending on where Black puts the pieces.',
          moves: [
            { uci: 'b7b6', san: 'b6', note: 'Black fights for e4 with the bishop.' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'c8b7', san: 'Bb7' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'a2a3', san: 'a3', note: 'Asks the b4 bishop to decide.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'white',
          title: 'Doubled c-pawns as targets',
          text: 'After ...Bxc3+ bxc3, Black blockades with ...c5, ...d6 and ...e5 and attacks c4 with ...b6, ...Ba6 and ...Na5. Open the position with e4, or f3 and e4, before the pawns become fixed weaknesses.'
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Passive bishops',
          text: "The bishop pair pays off only in an open position. If White keeps the centre closed and waits, Black's knights find good squares. Prepare e4 actively."
        }
      ],
      transpositions: [
        {
          to: 'w-qgd-exchange',
          note: "3...d5 instead of 3...Bb4 transposes to the Queen's Gambit Declined."
        }
      ],
      lessons: ['white-openings-11']
    },
    {
      id: 'w-nimzo-classical',
      side: 'white',
      group: 'd4',
      familyId: 'wf-nimzo-indian',
      family: 'Nimzo-Indian Defence',
      short: 'Classical Variation (4.Qc2)',
      name: 'Nimzo-Indian: Classical Variation (4.Qc2)',
      aliases: ['Capablanca Variation'],
      eco: 'E32-E39',
      defining: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'b1c3', 'f8b4', 'd1c2'],
      moves: '1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 4.Qc2',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 14,
      summary: '4.Qc2 prepares to recapture on c3 with the queen, so White keeps a healthy pawn structure and often wins the bishop pair, at the cost of some development.',
      idea: "The queen guards c3 and e4. If Black gives up the bishop with ...Bxc3+, Qxc3 keeps White's pawns intact and leaves White with the bishop pair, and a3 often forces the issue. The drawback is time: the queen moves early and the kingside is undeveloped, so Black aims for quick central play with ...d5 or ...c5, or ...b6 with ...Bb7 and ...Ne4.",
      plans: {
        white: [
          'Play a3 to force ...Bxc3+ and recapture with the queen, keeping the bishop pair.',
          'Develop with Bg5, e3 or f3 and Nf3, and later open the position for the bishops.',
          'Hold e4 against ...Ne4 and ...Bb7.'
        ],
        black: [
          'Strike quickly with ...d5 or ...c5 while White is behind in development.',
          'Fianchetto with ...b6 and ...Bb7 to fight for e4.',
          'Use ...Ne4 to hit the queen and the c3 square.'
        ]
      },
      responses: [
        {
          moves: '4...O-O 5.a3 Bxc3+ 6.Qxc3',
          name: 'Main line',
          note: '6...b6 7.Bg5 Bb7 8.f3 h6 9.Bh4 d5 10.e3: White has the bishop pair; Black has active pieces.',
          line: 'main'
        },
        {
          moves: '4...d5 5.cxd5 exd5',
          name: '...d5',
          note: '6.Bg5 h6 7.Bxf6 Qxf6 8.a3 Bxc3+ 9.Qxc3: a Carlsbad-type structure in which White can plan a minority attack.',
          line: 'd5'
        },
        {
          moves: '4...c5 5.dxc5',
          name: '...c5',
          note: '5...O-O 6.a3 Bxc5 7.Nf3 b6 8.Bg5: White gains time on the bishop and develops.',
          line: 'c5'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'f8b4', san: 'Bb4' },
          { uci: 'd1c2', san: 'Qc2', note: 'The queen guards c3.' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'a2a3', san: 'a3', note: 'Forces the bishop to decide.' },
          { uci: 'b4c3', san: 'Bxc3+' },
          { uci: 'c2c3', san: 'Qxc3', note: 'Healthy pawns and the bishop pair.' },
          { uci: 'b7b6', san: 'b6' },
          { uci: 'c1g5', san: 'Bg5' },
          { uci: 'c8b7', san: 'Bb7' },
          { uci: 'f2f3', san: 'f3', note: 'Controls e4.' },
          { uci: 'h7h6', san: 'h6' },
          { uci: 'g5h4', san: 'Bh4' },
          { uci: 'd7d5', san: 'd5' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '4...O-O 5.a3: the main line',
          kind: 'Main line',
          summary: "White forces the trade on c3 and recaptures with the queen. f3 controls e4 against ...Ne4 and ...Bb7, and the bishop pair is White's trump.",
          moves: [
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'b4c3', san: 'Bxc3+' },
            { uci: 'c2c3', san: 'Qxc3', note: 'Healthy pawns and the bishop pair.' },
            { uci: 'b7b6', san: 'b6' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'c8b7', san: 'Bb7' },
            { uci: 'f2f3', san: 'f3', note: 'Controls e4 against ...Ne4.' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5h4', san: 'Bh4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e2e3', san: 'e3' }
          ]
        },
        {
          id: 'd5',
          name: '4...d5 5.cxd5 exd5',
          kind: 'Alternative',
          summary: 'Black strikes in the centre. After the trades on f6 and c3 the structure is a Carlsbad, and White can plan a minority attack.',
          moves: [
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c4d5', san: 'cxd5', note: 'Fixes the structure.' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'd8f6', san: 'Qxf6' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'b4c3', san: 'Bxc3+' },
            { uci: 'c2c3', san: 'Qxc3', note: 'A Carlsbad-type structure; e3, Nf3 and a minority attack can follow.' }
          ]
        },
        {
          id: 'c5',
          name: '4...c5 5.dxc5',
          kind: 'Sideline',
          summary: 'Black hits d4 at once. White takes, gains time on the bishop with a3 and develops with Nf3 and Bg5.',
          moves: [
            { uci: 'c7c5', san: 'c5', note: 'Black hits d4 at once.' },
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'b4c5', san: 'Bxc5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b7b6', san: 'b6' },
            { uci: 'c1g5', san: 'Bg5', note: 'Development with pressure on f6.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'white',
          title: 'Behind in development',
          text: 'The queen has moved and the kingside is still at home. If Black opens the centre quickly with ...d5 and ...c5, White must finish development before grabbing anything.'
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Ignoring ...Ne4',
          text: 'With the queen on c2 or c3, ...Ne4 can hit it and the c3 square. Keep f3 or e3 and Nf3 ready so the knight can be challenged or exchanged on good terms.'
        }
      ],
      lessons: ['white-openings-23', 'white-openings-11']
    },
    {
      id: 'w-dutch-fianchetto',
      side: 'white',
      group: 'd4',
      familyId: 'wf-dutch',
      family: 'Dutch Defence',
      short: 'Fianchetto system (2.g3)',
      name: 'Dutch Defence: fianchetto system (2.g3)',
      aliases: ['Dutch fianchetto'],
      eco: 'A87',
      defining: ['d2d4', 'f7f5', 'g2g3'],
      moves: '1.d4 f5 2.g3',
      difficulty: 'Beginner',
      style: 'Positional',
      minutes: 12,
      summary: "Against the Dutch, fianchetto the king's bishop: g3, Bg2, Nf3, O-O and c4 fit every Black set-up and keep White's king safe.",
      idea: "The f5 pawn fights for e4 and loosens Black's kingside. The g2 bishop is ideal against it, pressing on e4 and the long diagonal. White castles, plays c4 and Nc3, and decides on a plan by Black's set-up: d5 against the Leningrad, trading dark-squared bishops against the Stonewall, and an e4 break against the Classical. The Staunton Gambit 2.e4 is covered with the gambits.",
      plans: {
        white: [
          'Fianchetto, castle and play c4 and Nc3 to fight for e4.',
          'Against the Leningrad (...g6), gain space with d5 and use the e6 and c6 squares.',
          'Against the Stonewall (...d5, ...e6, ...c6), trade dark-squared bishops with b3 and Ba3 or with Bf4, then use e5.'
        ],
        black: [
          'Control e4 with ...f5, ...Nf6 and sometimes ...d5.',
          'Attack on the kingside with ...Qe8-h5, ...g5 or ...f4.',
          'Break with ...e5 in the Leningrad lines.'
        ]
      },
      responses: [
        {
          moves: '2...Nf6 3.Bg2 g6',
          name: 'Leningrad',
          note: '4.Nf3 Bg7 5.O-O O-O 6.c4 d6 7.Nc3; against 7...Qe8, 8.d5 gains space and blunts the g7 bishop.',
          line: 'leningrad'
        },
        {
          moves: '3...e6 4.Nf3 d5',
          name: 'Stonewall',
          note: "5.O-O Bd6 6.c4 c6, then b3 with Ba3 or Bf4 to trade Black's good bishop; the e5 square is a target.",
          line: 'stonewall'
        },
        {
          moves: '4...Be7 5.O-O',
          name: 'Classical Dutch',
          note: '5...O-O 6.c4 d6 7.Nc3, then Qc2 or Re1 to prepare e4.',
          line: 'classical'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'f7f5', san: 'f5', note: 'The Dutch: Black fights for e4 from the side.' },
          { uci: 'g2g3', san: 'g3', note: 'The bishop will go to g2, aiming at e4.' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'g7g6', san: 'g6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'c2c4', san: 'c4', note: 'Gains space and supports a later d5.' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd8e8', san: 'Qe8', note: 'Prepares ...e5 and, later, ...Qh5.' },
          { uci: 'd4d5', san: 'd5', note: 'Gains space, blunts the g7 bishop and makes ...e5 less attractive.' }
        ]
      },
      lines: [
        {
          id: 'leningrad',
          name: '...g6: the Leningrad',
          kind: 'Main line',
          summary: 'Black fianchettoes too and prepares ...e5 with ...Qe8. White answers with d5, gaining space and blunting the g7 bishop.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd8e8', san: 'Qe8', note: 'Prepares ...e5.' },
            { uci: 'd4d5', san: 'd5', note: 'Gains space and blunts the g7 bishop.' }
          ]
        },
        {
          id: 'stonewall',
          name: '...e6 and ...d5: the Stonewall',
          kind: 'Alternative',
          summary: "Black builds the d5-e6-f5 wall. White plays c4 and b3 and aims to trade Black's good dark-squared bishop, then uses e5.",
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd7d5', san: 'd5', note: 'The Stonewall: pawns on d5, e6 and f5.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8d6', san: 'Bd6' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'b2b3', san: 'b3', note: "Prepares Ba3 to trade Black's good bishop." }
          ]
        },
        {
          id: 'classical',
          name: '...e6 and ...Be7: the Classical',
          kind: 'Alternative',
          summary: 'A flexible set-up. White castles, plays c4 and Nc3 and prepares the e4 break with Qc2 or Re1.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8e7', san: 'Be7', note: 'The Classical Dutch.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'b1c3', san: 'Nc3', note: 'Qc2 or Re1 prepares e4 next.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'white',
          title: 'The e4 outpost in the Stonewall',
          text: 'Against the Stonewall, a black knight on e4 can be very strong. Control e4 with Nbd2 or Nc3 and f3 ideas, and trade the dark-squared bishops to leave Black with the bad one.'
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Allowing ...e5 for free',
          text: 'In the Leningrad Black prepares ...e5 with ...Qe8 or ...Nc6. If White ignores it, Black frees the game. d5 or a well-timed e4 keeps the initiative.'
        }
      ],
      lessons: ['black-vs-d4-10']
    },
    {
      id: 'w-benoni-classical',
      side: 'white',
      group: 'd4',
      familyId: 'wf-benoni',
      family: 'Benoni Defence',
      short: 'Classical System',
      name: 'Modern Benoni: Classical System',
      aliases: ['Modern Benoni, Classical'],
      eco: 'A70',
      defining: ['d2d4', 'g8f6', 'c2c4', 'c7c5', 'd4d5'],
      moves: '1.d4 Nf6 2.c4 c5 3.d5',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 14,
      summary: 'Against ...c5, advance d5 and build the classical centre: Nc3, e4, Nf3, Be2 and O-O. Simple development and a clear e5 break.',
      idea: 'After 3...e6 4.Nc3 exd5 5.cxd5 d6, White has a central majority (d5 and e4 against d6) and Black a queenside majority. White develops with e4, Nf3, Be2 and O-O, regroups with Nd2-c4 to hit d6, and prepares the e4-e5 break. Black plays for ...b5, ...Re8 and pressure on e4.',
      plans: {
        white: [
          'Develop classically with e4, Nf3, Be2 and O-O, keeping e4 well protected.',
          'Bring a knight to c4 via d2 to attack the d6 pawn.',
          'Prepare the e5 break with f4 or Re1 and Bf4.'
        ],
        black: [
          'Expand on the queenside with ...a6, ...b5 and ...c4.',
          'Pressure e4 with ...Re8, the g7 bishop and knights.',
          'Use the e5 square for a knight.'
        ]
      },
      responses: [
        {
          moves: '3...e6 4.Nc3',
          name: 'Modern Benoni',
          note: '4...exd5 5.cxd5 d6 6.e4 g6 7.Nf3 Bg7 8.Be2 O-O 9.O-O Re8 10.Nd2: the Classical main line.',
          line: 'classical'
        },
        {
          moves: '3...b5 4.cxb5',
          name: 'Benko Gambit',
          note: 'Accepting: 4...a6 5.bxa6 Bxa6 6.Nc3 d6 7.e4 Bxf1 8.Kxf1: White keeps the pawn, Black gets long-term queenside pressure. 4.Nf3 declines calmly.',
          line: 'benko'
        },
        {
          moves: '3...e5 4.Nc3',
          name: 'Czech Benoni',
          note: '4...d6 5.e4: the centre is closed. Develop with Bd3 or Be2, Nge2 or Nf3 and h3, then prepare f4 or b4.',
          line: 'czech'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'd4d5', san: 'd5', note: 'Gains space instead of allowing exchanges.' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'e6d5', san: 'exd5' },
          { uci: 'c4d5', san: 'cxd5' },
          { uci: 'd7d6', san: 'd6', note: "The Benoni structure: White's central majority against Black's queenside one." },
          { uci: 'e2e4', san: 'e4' },
          { uci: 'g7g6', san: 'g6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'e1g1', san: 'O-O', note: 'Simple development; Nd2-c4 to hit d6 is a common follow-up.' },
          { uci: 'f8e8', san: 'Re8', note: 'Pressure on e4.' }
        ]
      },
      lines: [
        {
          id: 'classical',
          name: '3...e6: the Classical main line',
          kind: 'Main line',
          summary: 'White develops with e4, Nf3, Be2 and O-O, protects e4 and brings the knight to c4 via d2 to hit d6.',
          moves: [
            { uci: 'e7e6', san: 'e6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'd7d6', san: 'd6', note: "The Benoni structure: White's central majority against Black's queenside one." },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e8', san: 'Re8' },
            { uci: 'f3d2', san: 'Nd2', note: 'Heads for c4 to hit d6, and protects e4.' }
          ]
        },
        {
          id: 'benko',
          name: '3...b5 4.cxb5: the Benko accepted',
          kind: 'Sharp try',
          summary: 'White takes the pawn and gives up castling rights after ...Bxf1. Black gets lasting pressure on the a- and b-files.',
          moves: [
            { uci: 'b7b5', san: 'b5', note: 'The Benko Gambit.' },
            { uci: 'c4b5', san: 'cxb5' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5a6', san: 'bxa6' },
            { uci: 'c8a6', san: 'Bxa6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'a6f1', san: 'Bxf1' },
            { uci: 'e1f1', san: 'Kxf1', note: 'White keeps the extra pawn; g3 and Kg2 come next.' }
          ]
        },
        {
          id: 'czech',
          name: '3...e5: the Czech Benoni',
          kind: 'Alternative',
          summary: 'The centre is closed at once. White develops calmly, keeps f4 possible with Nge2 and plays on the side Black neglects.',
          moves: [
            { uci: 'e7e5', san: 'e5', note: 'The Czech Benoni: the centre is closed.' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'g1e2', san: 'Nge2', note: 'The knight goes to e2 so f4 stays possible.' },
            { uci: 'f6e8', san: 'Ne8' },
            { uci: 'e1g1', san: 'O-O' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Leaving e4 loose',
          text: 'In the Benoni Black pressures e4 with ...Re8, the g7 bishop and the knights, and tactics with ...Nxe4 appear when it is under-defended. Keep it covered with Nd2, f3 or Qc2.'
        },
        {
          kind: 'Risk',
          side: 'white',
          title: "Black's queenside majority",
          text: 'Black wants ...a6, ...b5 and ...c4. If White allows it without a fight, the queenside majority becomes dangerous. a4 and Nc4 are the usual brakes.'
        }
      ],
      transpositions: [
        {
          to: 'w-kid-classical',
          note: "The King's Indian 5.Nf3 O-O 6.Be2 c5 7.d5 e6 8.O-O exd5 9.cxd5 reaches this Classical Benoni position."
        }
      ],
      lessons: ['black-vs-d4-9']
    },
    {
      id: 'w-english-four-knights',
      side: 'white',
      group: 'flank',
      familyId: 'wf-english',
      family: 'English Opening',
      short: 'vs 1...e5 (Reversed Sicilian)',
      name: 'English Opening: vs 1...e5 (Reversed Sicilian)',
      aliases: ['Reversed Sicilian', 'English Four Knights'],
      eco: 'A28',
      defining: ['c2c4', 'e7e5', 'b1c3'],
      moves: '1.c4 e5 2.Nc3',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 12,
      summary: '1.c4 e5 is a Sicilian with colours reversed and an extra move for White. The g3 and Bg2 set-up fits almost every Black plan.',
      idea: "White controls d5 from the flank, fianchettoes the king's bishop to press down the long diagonal, and plays on the queenside with Rb1, a3 and b4, or with d3 and a central break. Because White has an extra move compared with Black in a Sicilian, the sharp lines are easier to handle and the quiet ones give lasting pressure.",
      plans: {
        white: [
          'Fianchetto with g3 and Bg2 to control d5 and the long diagonal.',
          'Expand on the queenside with a3, b4 and Rb1.',
          'Use the half-open c-file after an exchange on d5.'
        ],
        black: [
          'Build a strong centre with ...e5, ...Nc6 and ...d6 or ...d5.',
          'Pin the c3 knight with ...Bb4 and push ...e4 to gain space.',
          'Attack on the kingside with ...f5 in the closed lines.'
        ]
      },
      responses: [
        {
          moves: '2...Nf6 3.Nf3 Nc6 4.g3',
          name: 'Four Knights',
          note: '4...d5 5.cxd5 Nxd5 6.Bg2 Nb6 7.O-O Be7 8.d3 O-O 9.a3: a reversed Sicilian Dragon with an extra move.',
          line: 'd5'
        },
        {
          moves: '4...Bb4 5.Bg2',
          note: '5...O-O 6.O-O e4 7.Ng5 Bxc3 8.bxc3 Re8 9.f3: White undermines the e4 pawn.',
          line: 'bb4'
        },
        {
          moves: '2...Nc6 3.g3',
          name: 'Closed English',
          note: '3...g6 4.Bg2 Bg7 5.d3 d6: play on the queenside with Rb1, a3 and b4.',
          line: 'closed'
        },
        { moves: '2...Bb4 3.Nd5', note: 'Hits the bishop and gains time; 3.g3 is also good.' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'c2c4', san: 'c4', note: 'Controls d5 from the side.' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'g2g3', san: 'g3', note: 'The bishop will go to g2.' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'c4d5', san: 'cxd5' },
          { uci: 'f6d5', san: 'Nxd5' },
          { uci: 'f1g2', san: 'Bg2', note: 'Pressure on the d5 knight and down the long diagonal.' },
          { uci: 'd5b6', san: 'Nb6', note: "The knight steps away from the bishop's pressure." },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'd2d3', san: 'd3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'a2a3', san: 'a3', note: 'Prepares b4 to gain queenside space.' }
        ]
      },
      lines: [
        {
          id: 'd5',
          name: '2...Nf6 3.Nf3 Nc6 4.g3 d5',
          kind: 'Main line',
          summary: 'A reversed Dragon with an extra move for White. The g2 bishop presses on the long diagonal, and a3 with b4 gains queenside space.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'f1g2', san: 'Bg2', note: 'Pressure on the d5 knight and the long diagonal.' },
            { uci: 'd5b6', san: 'Nb6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'a2a3', san: 'a3', note: 'Prepares b4 to gain queenside space.' }
          ]
        },
        {
          id: 'bb4',
          name: '4...Bb4: the ...e4 push',
          kind: 'Alternative',
          summary: 'Black pins and gains space with ...e4. White hits the pawn with Ng5 and undermines it with f3 after taking the bishop pair.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'f8b4', san: 'Bb4' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e5e4', san: 'e4', note: 'Black gains space and kicks the f3 knight.' },
            { uci: 'f3g5', san: 'Ng5' },
            { uci: 'b4c3', san: 'Bxc3' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'f8e8', san: 'Re8' },
            { uci: 'f2f3', san: 'f3', note: 'Undermines the e4 pawn.' }
          ]
        },
        {
          id: 'closed',
          name: '2...Nc6 3.g3: the Closed English',
          kind: 'Alternative',
          summary: 'Both sides fianchetto and keep the centre closed. White plays on the queenside with Rb1, a3 and b4.',
          moves: [
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'a1b1', san: 'Rb1', note: 'Prepares b4.' },
            { uci: 'a7a5', san: 'a5' },
            { uci: 'a2a3', san: 'a3', note: 'Prepares b4 anyway.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'white',
          title: 'The ...Nd4 trap',
          text: 'After 4...Nd4, grabbing with 5.Nxe5? Qe7 is risky: 6.Nd3?? Nf3 is mate, because the e2 pawn is pinned. If you take, 6.f4 is needed; 5.Bg2 is simpler.',
          uci: ['c2c4', 'e7e5', 'b1c3', 'g8f6', 'g1f3', 'b8c6', 'g2g3', 'c6d4', 'f3e5', 'd8e7', 'e5d3', 'd4f3']
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'The ...e4 advance',
          text: 'Black often gains space with ...e4, kicking the f3 knight. Have an answer ready, such as Ng5 with d3 or f3 to undermine the pawn.'
        }
      ],
      lessons: ['black-vs-flank-1', 'black-vs-flank-2']
    },
    {
      id: 'w-english-symmetrical',
      side: 'white',
      group: 'flank',
      familyId: 'wf-english',
      family: 'English Opening',
      short: 'Symmetrical Variation (1...c5)',
      name: 'English Opening: Symmetrical Variation',
      aliases: ['Symmetrical English'],
      eco: 'A38',
      defining: ['c2c4', 'c7c5', 'b1c3'],
      moves: '1.c4 c5 2.Nc3',
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 12,
      summary: 'Against 1...c5, the g3, Bg2, Nf3 set-up with a well-timed d4 gives White a flexible, healthy game.',
      idea: "Both sides control the centre from the flank. White usually fianchettoes, castles and then opens the position with d4, or chooses the Botvinnik set-up with e4. After d4 cxd4 Nxd4 the game resembles an Open Sicilian in which White's c4 pawn adds a grip on d5. The same positions often arise from 1.Nf3 c5 2.c4.",
      plans: {
        white: [
          'Fianchetto, castle and open the centre with d4.',
          'Use the long diagonal against b7 and the queenside.',
          "Play for b4 or a knight on d5, depending on Black's set-up."
        ],
        black: [
          "Mirror White's set-up and stay solid.",
          'Prepare ...d5 or ...e5 to gain central space.',
          'Use ...a6, ...Rb8 and ...b5 for queenside play.'
        ]
      },
      responses: [
        {
          moves: '2...Nc6 3.g3 g6 4.Bg2 Bg7',
          name: 'Symmetrical',
          note: '5.Nf3 Nf6 6.O-O O-O 7.d4 opens the centre; 5.e4, the Botvinnik set-up, is a solid alternative.',
          line: 'sym'
        },
        {
          moves: '2...Nf6 3.Nf3',
          note: '3...d5 4.cxd5 Nxd5 5.g3 Nc6 6.Bg2, with pressure along the long diagonal.',
          line: 'nf6'
        },
        { moves: '2...g6 3.g3', note: '3...Bg7 4.Bg2 Nc6 transposes to the main line.', line: 'g6' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'c2c4', san: 'c4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'g2g3', san: 'g3', note: 'Fianchetto, aiming at the long diagonal.' },
          { uci: 'g7g6', san: 'g6' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'd2d4', san: 'd4', note: 'Opens the centre once the king is safe.' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'f3d4', san: 'Nxd4' },
          { uci: 'c6d4', san: 'Nxd4' },
          { uci: 'd1d4', san: 'Qxd4', note: 'The queen is strong in the centre.' },
          { uci: 'd7d6', san: 'd6', note: "Frees the c8 bishop; White's queen usually drops back to d3." }
        ]
      },
      lines: [
        {
          id: 'sym',
          name: '2...Nc6: the double fianchetto',
          kind: 'Main line',
          summary: 'Both sides fianchetto and castle. White opens the centre with d4 and gets an active queen and pressure on the long diagonal.',
          moves: [
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd2d4', san: 'd4', note: 'Opens the centre once the king is safe.' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'c6d4', san: 'Nxd4' },
            { uci: 'd1d4', san: 'Qxd4', note: 'The queen is strong in the centre.' }
          ]
        },
        {
          id: 'nf6',
          name: '2...Nf6 3.Nf3 d5',
          kind: 'Alternative',
          summary: 'Black strikes in the centre. After the exchange on d5 White fianchettoes and presses on the knight and b7.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'g2g3', san: 'g3', note: 'The bishop goes to g2, pressing on d5 and b7.' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'd5c7', san: 'Nc7', note: 'The knight retreats and covers e6 and d5.' },
            { uci: 'e1g1', san: 'O-O' }
          ]
        },
        {
          id: 'g6',
          name: '2...g6 3.g3',
          kind: 'Sideline',
          summary: 'A flexible set-up with e3 and Nge2 prepares d4 with a pawn recapture.',
          moves: [
            { uci: 'g7g6', san: 'g6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e2e3', san: 'e3', note: 'A flexible set-up: Nge2 and d4 next.' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1e2', san: 'Nge2' },
            { uci: 'g8e7', san: 'Nge7' },
            { uci: 'd2d4', san: 'd4', note: 'Opens the centre; Black should answer with ...cxd4 and ...d5.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'white',
          title: 'd4 with nothing behind it',
          text: "Opening the centre with d4 is White's main plan, but if Black is ready with ...d5 the symmetry breaks in Black's favour. Play d4 when your pieces are developed and the recapture keeps control of d5."
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'Symmetry and a drawish game',
          text: 'Copying moves leads to level positions. Look for an asymmetric plan: d4, the Botvinnik set-up with e4, or queenside play with a3, Rb1 and b4.'
        }
      ],
      lessons: ['black-vs-flank-5']
    },
    {
      id: 'w-english-anglo-indian',
      side: 'white',
      group: 'flank',
      familyId: 'wf-english',
      family: 'English Opening',
      short: 'Anglo-Indian (1...Nf6 2.Nc3)',
      name: 'English Opening: Anglo-Indian (1...Nf6 2.Nc3)',
      aliases: ['Anglo-Indian Defence', 'English vs 1...Nf6'],
      eco: 'A15-A19',
      defining: ['c2c4', 'g8f6', 'b1c3'],
      moves: '1.c4 Nf6 2.Nc3',
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 12,
      summary: 'Against 1...Nf6, 2.Nc3 keeps every option: a pure English with g3 against ...g6, the sharp Mikenas with e4 against ...e6, or a transposition to 1.d4 openings.',
      idea: "1...Nf6 waits to see White's plan. After 2.Nc3 Black chooses between ...e6, ...g6, ...c5 and ...e5. Against ...g6 the fianchetto with g3, Bg2, e4 and Nge2 gives space with a safe king; against ...e6 White can play 3.e4, the Mikenas Attack, or Nf3 and d4 for a Queen's Gambit. ...e5 and ...c5 transpose to the other English lines.",
      plans: {
        white: [
          'Against ...g6, fianchetto and build e4 with Nge2 for a solid, space-gaining set-up.',
          "Against ...e6, choose 3.e4 (the Mikenas) for sharp play, or 3.Nf3 and d4 for a Queen's Gambit.",
          'Use transpositions: ...e5 gives the Reversed Sicilian, ...c5 the Symmetrical English.'
        ],
        black: [
          "Choose a set-up that suits Black: King's Indian, Queen's Gambit or Nimzo-type play.",
          'Against the Mikenas, counter at once with ...d5 or ...c5.',
          'Pin with ...Bb4 when White plays Nf3 and Qc2.'
        ]
      },
      responses: [
        {
          moves: '2...g6 3.g3',
          name: "King's Indian set-up",
          note: "3...Bg7 4.Bg2 O-O 5.e4 d6 6.Nge2: a solid space-gaining set-up; 3.e4 d6 4.d4 is a King's Indian instead.",
          line: 'g6'
        },
        {
          moves: '2...e6 3.e4',
          name: 'Mikenas Attack',
          note: '3...d5 4.e5 d4 5.exf6 dxc3 6.bxc3 Qxf6 7.d4: sharp and roughly level; 3.Nf3 with d4 is the quieter way.',
          line: 'mikenas'
        },
        {
          moves: '2...e6 3.Nf3 d5 4.d4',
          name: "Queen's Gambit transposition",
          note: "The game becomes a Queen's Gambit Declined. 3...Bb4 4.Qc2 gives a Nimzo-English.",
          line: 'qgd'
        },
        {
          moves: '2...e5',
          name: 'Reversed Sicilian',
          note: '3.Nf3 Nc6 transposes to the English against 1...e5.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'c2c4', san: 'c4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3', note: 'Keeps every option open.' },
          { uci: 'g7g6', san: 'g6' },
          { uci: 'g2g3', san: 'g3', note: "A fianchetto against Black's fianchetto." },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'e2e4', san: 'e4', note: 'Grabs space in the centre.' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'g1e2', san: 'Nge2', note: 'The knight goes to e2 so that f4 stays possible.' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'd2d3', san: 'd3' }
        ]
      },
      lines: [
        {
          id: 'g6',
          name: "2...g6 3.g3: against a King's Indian set-up",
          kind: 'Main line',
          summary: 'White fianchettoes, plays e4 and Nge2 and keeps d4 in reserve. The king is safe and f4 remains possible.',
          moves: [
            { uci: 'g7g6', san: 'g6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e2e4', san: 'e4', note: 'Grabs space; d4 is not committed yet.' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'g1e2', san: 'Nge2' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd2d3', san: 'd3', note: 'Solid; f4 or a queenside advance can follow.' }
          ]
        },
        {
          id: 'mikenas',
          name: '2...e6 3.e4: the Mikenas Attack',
          kind: 'Sharp try',
          summary: 'White gains space at once. After the forcing sequence to 7.d4 White has the centre and Black quick development.',
          moves: [
            { uci: 'e7e6', san: 'e6' },
            { uci: 'e2e4', san: 'e4', note: 'The Mikenas Attack.' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'd5d4', san: 'd4' },
            { uci: 'e5f6', san: 'exf6' },
            { uci: 'd4c3', san: 'dxc3' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'd8f6', san: 'Qxf6' },
            { uci: 'd2d4', san: 'd4', note: 'White has the centre, Black quick development.' }
          ]
        },
        {
          id: 'qgd',
          name: "2...e6 3.Nf3 d5 4.d4: into the Queen's Gambit",
          kind: 'Alternative',
          summary: "White transposes to a Queen's Gambit Declined; the QGD plans (Bg5, e3, Qc2 and the minority attack) apply.",
          moves: [
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'd2d4', san: 'd4', note: "Now it is a Queen's Gambit Declined." },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'c1g5', san: 'Bg5', note: 'Pins the knight; e3 and Qc2 follow.' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e2e3', san: 'e3' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'white',
          title: 'Know your transpositions',
          text: "1...Nf6 can lead to a King's Indian, a Nimzo-Indian, a Queen's Gambit or the other English lines. Decide in advance which structures you want, and pick the move order that allows them."
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'The Mikenas is forcing',
          text: 'After 3.e4 d5 4.e5 d4 5.exf6 dxc3 the play is forcing; know the main reply 6.bxc3 Qxf6 7.d4 (6.fxg7 is the other try) before you choose 3.e4.'
        }
      ],
      transpositions: [
        {
          to: 'w-english-four-knights',
          note: '2...e5 3.Nf3 Nc6 reaches the Four Knights English, 1.c4 e5 2.Nc3 Nf6 3.Nf3 Nc6.'
        },
        { to: 'w-english-symmetrical', note: '2...c5 gives the Symmetrical English, 1.c4 c5 2.Nc3 Nf6.' },
        {
          to: 'w-qgd-exchange',
          note: "2...e6 3.Nf3 d5 4.d4 reaches the Queen's Gambit Declined (1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Nf3)."
        },
        {
          to: 'w-nimzo-rubinstein',
          note: '2...e6 3.d4 Bb4 is a Nimzo-Indian; 4.e3 gives the Rubinstein System.'
        }
      ],
      lessons: ['white-openings-24', 'black-vs-flank-6']
    },
    {
      id: 'w-reti',
      side: 'white',
      group: 'flank',
      familyId: 'wf-reti',
      family: 'Reti Opening',
      short: 'Reti (1.Nf3 d5 2.c4)',
      name: 'Reti Opening',
      aliases: ['Reti System'],
      eco: 'A13',
      defining: ['g1f3', 'd7d5', 'c2c4'],
      moves: '1.Nf3 d5 2.c4',
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 10,
      summary: "1.Nf3 and 2.c4 attack d5 from the side. Flexible: it can stay a Reti or transpose to the English, Catalan or Queen's Gambit.",
      idea: "White develops the knight first and hits the d5 pawn with c4 instead of occupying the centre. Often both bishops are fianchettoed (b3, Bb2, g3, Bg2) and aim at the centre from afar. White keeps the option of d4 to transpose to Queen's Gambit or Catalan positions, choosing the structure that suits Black's set-up.",
      plans: {
        white: [
          'Fianchetto one or both bishops to control the centre from afar.',
          'Pressure d5 with c4 and the g2 bishop, and take on d5 when it helps.',
          "Transpose to a Catalan or Queen's Gambit with d4 when favourable."
        ],
        black: [
          'Hold the centre with ...e6 and ...c6, or ...c6 with ...Bf5 or ...Bg4.',
          'Grab space with ...d4.',
          'Take on c4 and return the pawn on good terms.'
        ]
      },
      responses: [
        {
          moves: '2...e6 3.g3',
          note: '3...Nf6 4.Bg2 Be7 5.O-O O-O 6.b3: the double fianchetto. 6.d4 transposes to a Catalan.',
          line: 'e6'
        },
        {
          moves: '2...c6 3.b3',
          note: "3...Nf6 4.Bb2 and g3 against Black's solid Slav-like set-up; 3.e3 and 3.g3 are fine too.",
          line: 'c6'
        },
        {
          moves: '2...d4 3.e3',
          note: 'Undermines the advanced pawn at once; 3.g3 and 3.b4 are also played.',
          line: 'd4'
        },
        {
          moves: '2...dxc4 3.e3',
          note: '3.e3 or 3.Qa4+ regains the pawn with easy development.',
          line: 'dxc4'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'g1f3', san: 'Nf3', note: 'Develops and stops ...e5.' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'c2c4', san: 'c4', note: 'Attacks d5 from the side.' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'g2g3', san: 'g3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'b2b3', san: 'b3', note: 'The second fianchetto: both bishops will aim at the centre.' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'c1b2', san: 'Bb2' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'e2e3', san: 'e3', note: 'Keeps d4 under control; d4 or cxd5 can follow later.' }
        ]
      },
      lines: [
        {
          id: 'e6',
          name: '2...e6 3.g3: the double fianchetto',
          kind: 'Main line',
          summary: 'White fianchettoes both bishops and keeps d4 in reserve. Both bishops aim at the centre from a distance.',
          moves: [
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'b2b3', san: 'b3', note: 'The double fianchetto.' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'c1b2', san: 'Bb2' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e2e3', san: 'e3', note: 'Keeps d4 under control; d4 or cxd5 can follow.' }
          ]
        },
        {
          id: 'c6',
          name: '2...c6: a Slav set-up',
          kind: 'Alternative',
          summary: 'Black supports d5 and develops the bishop to f5 or g4. White fianchettoes and plays for a slow central break.',
          moves: [
            { uci: 'c7c6', san: 'c6', note: 'A Slav set-up: d5 is supported.' },
            { uci: 'b2b3', san: 'b3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c1b2', san: 'Bb2' },
            { uci: 'c8f5', san: 'Bf5' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1g2', san: 'Bg2', note: 'Both bishops aim at the centre; d3 and O-O follow.' }
          ]
        },
        {
          id: 'd4',
          name: '2...d4: the space grab',
          kind: 'Alternative',
          summary: 'Black advances to cramp White. e3 hits the pawn at once and White aims to open the e-file and use the c4 pawn.',
          moves: [
            { uci: 'd5d4', san: 'd4', note: 'Black grabs space.' },
            { uci: 'e2e3', san: 'e3', note: 'Undermines the advanced pawn at once.' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e3d4', san: 'exd4' },
            { uci: 'c6d4', san: 'Nxd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'd8d4', san: 'Qxd4' },
            { uci: 'b1c3', san: 'Nc3', note: 'Gains time on the queen.' }
          ]
        },
        {
          id: 'dxc4',
          name: '2...dxc4 3.e3',
          kind: 'Sideline',
          summary: "Black takes the pawn; White regains it with e3 and Bxc4 and reaches a Queen's Gambit Accepted type of position.",
          moves: [
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'e2e3', san: 'e3', note: 'Regains the pawn with Bxc4.' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1c4', san: 'Bxc4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'd2d4', san: 'd4', note: "A Queen's Gambit Accepted structure." }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'white',
          title: 'The ...d4 space grab',
          text: 'If White allows ...d4 without a plan, Black gets a cramping pawn. Hit it at once with e3 or b4, or prepare e3 before Nc3.'
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Not regaining c4',
          text: 'After 2...dxc4, play e3 and Bxc4, or Qa4+; trying other plans first can leave White simply a pawn down.'
        }
      ],
      transpositions: [
        { to: 'w-catalan', note: 'With d4 instead of b3, the Reti becomes a Catalan.' },
        { to: 'w-queens-gambit', note: "1.Nf3 d5 2.c4 e6 3.d4 reaches the Queen's Gambit Declined." },
        {
          to: 'w-kings-indian-attack',
          note: "1.Nf3 d5 2.g3 keeps c4 back and heads for the King's Indian Attack."
        }
      ],
      lessons: ['black-vs-flank-7']
    },
    {
      id: 'w-kings-indian-attack',
      side: 'white',
      group: 'flank',
      familyId: 'wf-kia',
      family: "King's Indian Attack",
      short: "King's Indian Attack set-up",
      name: "King's Indian Attack",
      aliases: ['KIA', 'Barcza System'],
      eco: 'A07',
      defining: ['g1f3', 'd7d5', 'g2g3'],
      moves: '1.Nf3 d5 2.g3',
      difficulty: 'Beginner',
      style: 'Flexible',
      minutes: 10,
      summary: 'A set-up, not a sequence: Nf3, g3, Bg2, O-O, d3, Nbd2 and e4. Easy to learn and full of kingside attacking ideas.',
      idea: "White plays a King's Indian Defence with an extra move. After e4 and often e5, White's kingside space supports an attack with Nf1, h4, Bf4 and Ng5, while Black counters on the queenside with ...b5, ...b4 and ...a5. Fischer used it with great success against French-style set-ups.",
      plans: {
        white: [
          'Build the set-up, then push e4 and often e5 to gain kingside space.',
          'Attack with Nf1, h4, Bf4 and Ng5, aiming at h7.',
          'Keep the centre closed so that the kingside attack decides.'
        ],
        black: [
          'Expand on the queenside with ...c5, ...b5 and ...b4.',
          'Keep the centre flexible, or open it with ...dxe4 or ...e5.',
          'Place pieces early to defend h7 and f7.'
        ]
      },
      responses: [
        {
          moves: '2...Nf6 3.Bg2 e6 4.O-O Be7 5.d3',
          name: 'French set-up',
          note: "5...O-O 6.Nbd2 c5 7.e4 Nc6 8.Re1: the classical King's Indian Attack, with e5 next.",
          line: 'french'
        },
        {
          moves: '2...c6 3.Bg2',
          note: '3...Bg4 4.O-O Nd7 5.d3 and e4; the bishop on g4 can be asked with h3.',
          line: 'c6'
        },
        {
          moves: '2...g6 3.Bg2 Bg7 4.O-O',
          note: 'A symmetrical set-up; d3 and e4, or c4 and d4, both give White a flexible game.',
          line: 'g6'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'g2g3', san: 'g3', note: 'Prepares Bg2.' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'd2d3', san: 'd3', note: 'The set-up: d3, Nbd2 and e4.' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'b1d2', san: 'Nbd2' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'e2e4', san: 'e4', note: 'Fights for the centre.' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'f1e1', san: 'Re1', note: 'Supports e4 and prepares e5.' },
          { uci: 'b7b5', san: 'b5', note: 'Black starts queenside play at once.' },
          { uci: 'e4e5', san: 'e5', note: 'Gains space and drives the knight from f6.' },
          { uci: 'f6d7', san: 'Nd7' }
        ]
      },
      lines: [
        {
          id: 'french',
          name: '...e6 and ...c5: the French set-up',
          kind: 'Main line',
          summary: 'The classical KIA: White plays e4 and e5, then attacks on the kingside; Black expands with ...b5.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'e2e4', san: 'e4', note: 'Prepared by Nbd2, so ...dxe4 does not win a pawn.' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'e4e5', san: 'e5', note: 'Gains space; Nf1, h4 and Bf4 follow.' }
          ]
        },
        {
          id: 'c6',
          name: '...c6 and ...Bg4',
          kind: 'Alternative',
          summary: 'Black develops the bishop to g4 before ...e6. White completes the set-up and plays e4; h3 can ask the bishop.',
          moves: [
            { uci: 'c7c6', san: 'c6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'c8g4', san: 'Bg4', note: 'The bishop comes out before ...e6.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8d7', san: 'Nd7' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'g8f6', san: 'Ngf6' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'e2e4', san: 'e4', note: 'The KIA break; h3 can ask the bishop.' }
          ]
        },
        {
          id: 'g6',
          name: '...g6: the symmetrical set-up',
          kind: 'Sideline',
          summary: 'Black fianchettoes too. White keeps the KIA plan with Nbd2 and e4, or switches to c4 and d4.',
          moves: [
            { uci: 'g7g6', san: 'g6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'b1d2', san: 'Nbd2', note: 'Supports e4.' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'e2e4', san: 'e4', note: 'White fights for the centre.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'white',
          title: 'e4 before Nbd2 or Qe2',
          text: 'If e4 comes before it is supported, ...dxe4 dxe4 Qxd1 Rxd1 Nxe4 wins a pawn. Prepare e4 with Nbd2 or Qe2.',
          uci: [
            'g1f3',
            'd7d5',
            'g2g3',
            'g8f6',
            'f1g2',
            'e7e6',
            'e1g1',
            'f8e7',
            'd2d3',
            'c7c5',
            'e2e4',
            'd5e4',
            'd3e4',
            'd8d1',
            'f1d1',
            'f6e4'
          ]
        },
        {
          kind: 'Risk',
          side: 'white',
          title: "Black's queenside attack",
          text: 'While White prepares e5 and a kingside attack, Black pushes ...b5, ...b4 and ...a5. The attack must be fast; a3 or c3 can slow Black down.'
        }
      ],
      transpositions: [
        { to: 'w-reti', note: 'Same first move; 2.c4 instead of 2.g3 is the Reti.' }
      ],
      lessons: ['black-vs-flank-3']
    },
    {
      id: 'w-bird',
      side: 'white',
      group: 'flank',
      familyId: 'wf-bird',
      family: "Bird's Opening",
      short: "Bird's Opening (1.f4)",
      name: "Bird's Opening",
      aliases: ['Reversed Dutch'],
      eco: 'A03',
      defining: ['f2f4'],
      moves: '1.f4',
      difficulty: 'Intermediate',
      style: 'Attacking',
      minutes: 10,
      summary: "1.f4 grabs the e5 square: a Dutch Defence with colours reversed. Kingside chances, but know the answer to From's Gambit.",
      idea: "White controls e5 with the f-pawn, often fianchettoes the queen's bishop with b3 and Bb2, and builds kingside play with Nf3, e3, Be2 and O-O, sometimes followed by Qe1-h4. The drawback is a slightly loosened king position along the e1-h4 diagonal, which Black can test at once with 1...e5, From's Gambit.",
      plans: {
        white: [
          'Control e5 with f4, Nf3 and Bb2; sometimes post a knight there.',
          'Attack on the kingside with Qe1-h4 or a later g4.',
          'Keep the e1-h4 diagonal covered, above all with Nf3.'
        ],
        black: [
          'Hit the loosened diagonal with ...e5 or ...Qh4+ ideas.',
          'Fianchetto with ...g6 and ...Bg7 to oppose the b2 bishop.',
          'Gain central space with ...e5 or ...d4.'
        ]
      },
      responses: [
        {
          moves: '1...d5 2.Nf3',
          name: 'Main line',
          note: '2...Nf6 3.e3 g6 4.b3 Bg7 5.Bb2 O-O 6.Be2: a solid reversed Dutch set-up.',
          line: 'main'
        },
        {
          moves: '1...e5 2.fxe5',
          name: "From's Gambit",
          note: "2...d6 3.exd6 Bxd6 4.Nf3 is essential, covering h4; 4...g5 is Black's main try. 2.e4 instead would enter a King's Gambit.",
          line: 'froms'
        },
        {
          moves: '1...Nf6 2.Nf3',
          note: '2...g6 3.g3 Bg7 4.Bg2: a Leningrad Dutch with colours reversed.',
          line: 'leningrad'
        },
        {
          moves: '1...c5 2.Nf3',
          note: 'Black takes control of d4. Continue with e3, b3, Bb2 and Be2, or g3 and Bg2.',
          line: 'c5'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'f2f4', san: 'f4', note: 'Controls e5, like a Dutch Defence with colours reversed.' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'g1f3', san: 'Nf3', note: 'Develops and covers the h4 square.' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'g7g6', san: 'g6' },
          { uci: 'b2b3', san: 'b3' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'c1b2', san: 'Bb2', note: 'The bishop supports the grip on e5.' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'b8c6', san: 'Nc6', note: 'Both sides are developed; White can consider Qe1-h4 or Ne5.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '1...d5 2.Nf3',
          kind: 'Main line',
          summary: 'A solid reversed-Dutch set-up: Nf3, e3, b3, Bb2, Be2 and O-O, with a grip on e5.',
          moves: [
            { uci: 'd7d5', san: 'd5' },
            { uci: 'g1f3', san: 'Nf3', note: 'Develops and covers h4.' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'b2b3', san: 'b3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'c1b2', san: 'Bb2', note: 'Supports the grip on e5.' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'e1g1', san: 'O-O' }
          ]
        },
        {
          id: 'froms',
          name: "1...e5: From's Gambit",
          kind: 'Sharp try',
          summary: 'Black gives a pawn to open the e1-h4 diagonal. 4.Nf3 covers h4; after ...g5 White plays d4 and Ne5.',
          moves: [
            { uci: 'e7e5', san: 'e5', note: "From's Gambit." },
            { uci: 'f4e5', san: 'fxe5' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e5d6', san: 'exd6' },
            { uci: 'f8d6', san: 'Bxd6' },
            { uci: 'g1f3', san: 'Nf3', note: 'Covers h4: the safe way.' },
            { uci: 'g7g5', san: 'g5' },
            { uci: 'd2d4', san: 'd4', note: 'Opens the c1 bishop and supports a later Ne5.' },
            { uci: 'g5g4', san: 'g4' },
            { uci: 'f3e5', san: 'Ne5' }
          ]
        },
        {
          id: 'leningrad',
          name: '1...Nf6 and ...g6',
          kind: 'Alternative',
          summary: 'Both sides fianchetto: a Leningrad Dutch with colours reversed. White plays d3 and prepares e4.',
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'g2g3', san: 'g3', note: 'White fianchettoes too.' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'd2d3', san: 'd3', note: 'A Leningrad Dutch with colours reversed; e4 or Qe1 follow.' }
          ]
        },
        {
          id: 'c5',
          name: '1...c5',
          kind: 'Sideline',
          summary: 'Black takes control of d4. White develops with e3, b3 and Bb2 and fights for the long diagonal.',
          moves: [
            { uci: 'c7c5', san: 'c5', note: 'Black takes control of d4.' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'b2b3', san: 'b3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'c1b2', san: 'Bb2', note: 'The bishops fight for the long diagonal.' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1e2', san: 'Be2' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'white',
          title: "From's Gambit: the mate on g3",
          text: 'After 3...Bxd6 the e1-h4 diagonal is open. 4.Nc3?? Qh4+ 5.g3 Qxg3+ 6.hxg3 Bxg3 is mate; 4.Nf3 covers h4.',
          uci: ['f2f4', 'e7e5', 'f4e5', 'd7d6', 'e5d6', 'f8d6', 'b1c3', 'd8h4', 'g2g3', 'h4g3', 'h2g3', 'd6g3']
        },
        {
          kind: 'Risk',
          side: 'white',
          title: 'Kicked by ...d4',
          text: 'With pawns on c5 and d5, Black can push ...d4 to gain space and make e3 weak, especially after Nc3. Prefer set-ups where the knight is not hit with tempo.'
        }
      ],
      lessons: ['white-openings-2', 'black-vs-flank-4'],
      uncertain: 'Move orders in the Bird vary a lot; the sample line shows a common set-up rather than one fixed main line.'
    }
  ],
  lessons: [
    {
      id: 'white-openings-1',
      category: 'white-openings',
      side: 'white',
      title: "Legal's mate in the Italian",
      level: 'Beginner',
      minutes: 6,
      objective: "Recognise when a pin against the queen can be broken with Nxe5, and finish with Legal's mate if Black grabs the queen.",
      summary: 'An early ...Bg4 pin looks annoying, but with Bc4 and Nc3 in place White can break it and win material.',
      prerequisites: ['openings-1'],
      related: { openings: ['w-italian-giuoco'], gambits: [], lessons: ['openings-1'] },
      steps: [
        {
          type: 'line',
          title: 'A pin that is not what it seems',
          fen: 'start',
          text: "A pin means a piece cannot move without exposing a more valuable piece behind it. Here Black pins White's f3 knight against the queen with ...Bg4. But it is only a relative pin: the knight may still move if the reward is big enough. Watch how the position arises.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'b1c3', san: 'Nc3', note: 'Develops and controls d5.' },
            { uci: 'c8g4', san: 'Bg4' },
            { uci: 'h2h3', san: 'h3', note: 'Asks the bishop to decide.' },
            { uci: 'g4h5', san: 'Bh5' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Break the pin',
          fen: 'r2qkbnr/ppp2ppp/2np4/4p2b/2B1P3/2N2N1P/PPPP1PP1/R1BQK2R w KQkq - 1 6',
          prompt: 'White to move: break the pin and win material.',
          solution: ['f3e5'],
          accept: [['f3e5']],
          hint: 'The knight is pinned to your queen, not your king. What happens if Black takes the queen?',
          explanation: '6.Nxe5! If 6...Bxd1, 7.Bxf7+ Ke7 8.Nd5 is mate. If 6...Nxe5, 7.Qxh5 Nxc4 8.Qb5+ and Qxc4 leaves White a pawn up. If 6...dxe5, 7.Qxh5 wins a clean pawn. Whatever Black does, White comes out at least a pawn ahead.',
          wrong: {
            g2g4: 'g4 breaks the pin by force, but after ...Bg6 Black is fine and your kingside is weakened. Nxe5 wins material at once.',
            c4f7: 'Bxf7+ Kxf7 gives up a bishop for a pawn. The f7 idea only works after Nxe5 and ...Bxd1.'
          }
        },
        {
          type: 'line',
          title: "Legal's mate",
          fen: 'r2qkbnr/ppp2ppp/2np4/4p2b/2B1P3/2N2N1P/PPPP1PP1/R1BQK2R w KQkq - 1 6',
          text: "If Black takes the queen, three minor pieces deliver mate. This pattern is called Legal's mate, after the 18th-century French player Legal.",
          moves: [
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'h5d1', san: 'Bxd1', note: 'Black grabs the queen.' },
            { uci: 'c4f7', san: 'Bxf7+', note: 'The bishop checks and covers e6 and e8.' },
            { uci: 'e8e7', san: 'Ke7' },
            { uci: 'c3d5', san: 'Nd5#', note: 'The knights cover d7, f6 and f7, and the d5 knight gives mate.' }
          ]
        }
      ]
    },
    {
      id: 'white-openings-2',
      category: 'white-openings',
      side: 'white',
      title: "Bird's Opening: meeting From's Gambit",
      level: 'Beginner',
      minutes: 5,
      objective: "Answer From's Gambit with 4.Nf3 and avoid the quick mate on g3.",
      summary: 'After 1.f4 e5 the e1-h4 diagonal is the danger zone. One developing move stops the attack.',
      prerequisites: ['openings-1'],
      related: { openings: ['w-bird'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'The weakened diagonal',
          fen: 'rnbqk1nr/ppp2ppp/3b4/8/8/8/PPPPP1PP/RNBQKBNR w KQkq - 0 4',
          text: "After 1.f4 e5, From's Gambit, Black gives a pawn to open lines towards White's king. With the f-pawn gone, the diagonal from h4 to e1 is open, and the bishop on d6 aims at g3. Black threatens ...Qh4+, and after g3 the bishop or queen can crash in on g3.",
          arrows: [['d8', 'h4'], ['d6', 'g3']],
          highlights: ['h4', 'g3']
        },
        {
          type: 'puzzle',
          title: 'Close the door',
          fen: 'rnbqk1nr/ppp2ppp/3b4/8/8/8/PPPPP1PP/RNBQKBNR w KQkq - 0 4',
          prompt: 'White to move: which developing move stops ...Qh4+?',
          solution: ['g1f3'],
          accept: [['g1f3']],
          hint: 'Which piece can cover the h4 square from its natural square?',
          explanation: "4.Nf3 develops and covers h4, so ...Qh4+ is impossible. Black's main try is 4...g5, hitting the knight; then 5.d4 or 5.g3 keeps everything under control, and White keeps the extra pawn for now. In this gambit, always check what ...Qh4+ would do before you move.",
          wrong: {
            b1c3: '4.Nc3?? Qh4+ 5.g3 Qxg3+ 6.hxg3 Bxg3 is mate.',
            g2g3: 'g3 stops the check, but ...h5 and ...h4 then give Black a dangerous attack on your loosened kingside.'
          }
        },
        {
          type: 'line',
          title: 'The trap to avoid',
          fen: 'rnbqk1nr/ppp2ppp/3b4/8/8/8/PPPPP1PP/RNBQKBNR w KQkq - 0 4',
          text: 'Here is what happens after the natural-looking 4.Nc3.',
          moves: [
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd8h4', san: 'Qh4+' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'h4g3', san: 'Qxg3+', note: 'The bishop on d6 supports the queen.' },
            { uci: 'h2g3', san: 'hxg3' },
            { uci: 'd6g3', san: 'Bxg3#', note: 'The king has no square: f2 is covered by the bishop.' }
          ]
        }
      ]
    },
    {
      id: 'white-openings-3',
      category: 'white-openings',
      side: 'white',
      title: 'Caro-Kann: h4 hunts the bishop',
      level: 'Beginner',
      minutes: 5,
      objective: "Use the h-pawn to gain space and harass Black's light-squared bishop in the Classical Caro-Kann.",
      summary: 'In the Classical Caro-Kann, the bishop on g6 can be trapped by h4-h5 unless Black reacts.',
      prerequisites: ['openings-2'],
      related: { openings: ['w-caro-classical'], gambits: [], lessons: ['openings-2'] },
      steps: [
        {
          type: 'line',
          title: 'The bishop comes out early',
          fen: 'start',
          text: "In the Classical Caro-Kann, Black develops the light-squared bishop before playing ...e6. White's knight on g3 chases it at once, and the bishop retreats to g6.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd5e4', san: 'dxe4' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'c8f5', san: 'Bf5' },
            { uci: 'e4g3', san: 'Ng3', note: 'Attacks the bishop.' },
            { uci: 'f5g6', san: 'Bg6' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Threaten to trap it',
          fen: 'rn1qkbnr/pp2pppp/2p3b1/8/3P4/6N1/PPP2PPP/R1BQKBNR w KQkq - 3 6',
          prompt: 'White to move: one h-pawn move threatens to trap the bishop on g6. Which?',
          solution: ['h2h4'],
          accept: [['h2h4']],
          hint: "Count the bishop's escape squares if a white pawn arrives on h5.",
          explanation: "6.h4 threatens 7.h5, after which the bishop has no safe square: the g3 knight covers h5, f5 and e4, your pieces cover d3, and f7 and h7 hold Black's own pawns. Black answers 6...h6 or 6...h5, and after 6...h6 7.Nf3 Nd7 8.h5 Bh7 White has won kingside space.",
          wrong: {
            h2h3: 'h3 threatens nothing: Black continues ...Nd7 and ...e6 in peace.',
            f2f4: 'f4 eyes f5, but ...e6 covers that square, and your centre and king are loosened. The h-pawn advance costs nothing.'
          }
        },
        {
          type: 'read',
          title: 'Space gained',
          fen: 'r2qkbnr/pp1npppb/2p4p/7P/3P4/5NN1/PPP2PP1/R1BQKB1R w KQkq - 1 9',
          text: "After 8.h5 the bishop sits on h7, and the pawn on h5 fixes Black's kingside and takes the g6 square away. White continues with Bd3 to trade the bishop, then often castles queenside.",
          arrows: [['f1', 'd3']],
          highlights: ['h5', 'h7']
        }
      ]
    },
    {
      id: 'white-openings-4',
      category: 'white-openings',
      side: 'white',
      title: 'Alapin: develop with gain of time',
      level: 'Beginner',
      minutes: 6,
      objective: "Use the freed c3 square to develop the knight while attacking Black's queen.",
      summary: "Black's queen on d5 is fine at first, but once the c-pawns are exchanged, Nc3 comes with gain of time.",
      prerequisites: ['openings-1'],
      related: { openings: ['w-alapin-sicilian'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'Why 2.c3?',
          fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq - 0 2',
          text: "With 2.c3 White prepares d4, so that a pawn can recapture if Black takes. The cost is that the queen's knight cannot go to c3 for now. That is why Black often answers 2...d5 3.exd5 Qxd5: the queen is safe in the centre while c3 is occupied.",
          arrows: [['d2', 'd4']],
          highlights: ['c3']
        },
        {
          type: 'line',
          title: 'The main line',
          fen: 'start',
          text: 'Both sides develop calmly. Black exchanges on d4, and White recaptures with the c-pawn, keeping a pawn in the centre.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'd8d5', san: 'Qxd5' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c8g4', san: 'Bg4' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'g4h5', san: 'Bh5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'c1e3', san: 'Be3', note: 'Holds d4.' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'c3d4', san: 'cxd4', note: 'White has an isolated d-pawn.' },
            { uci: 'f8e7', san: 'Be7' }
          ]
        },
        {
          type: 'puzzle',
          title: 'With gain of time',
          fen: 'r3k2r/pp2bppp/2n1pn2/3q3b/3P4/4BN1P/PP2BPP1/RN1Q1RK1 w kq - 1 11',
          prompt: 'White to move: develop a piece and gain time against the black queen.',
          solution: ['b1c3'],
          accept: [['b1c3']],
          hint: "Which square has just become available for your queen's knight?",
          explanation: "11.Nc3 develops the last minor piece and hits the queen, so Black must spend another move on it, for example 11...Qd6 or 11...Qa5. Gaining time like this is the reward for c3 and d4. White's isolated d-pawn is balanced by free, active pieces.",
          wrong: {
            b1d2: "Nbd2 develops, but it attacks nothing and blocks the queen's defence of d4. From c3 the knight hits the queen.",
            d1b3: 'Qb3 offers a queen trade that only helps Black. Develop the knight first.'
          }
        }
      ]
    },
    {
      id: 'white-openings-5',
      category: 'white-openings',
      side: 'white',
      title: 'The fork trick in the Three Knights',
      level: 'Intermediate',
      minutes: 6,
      objective: 'Use the fork trick, Nxe5 followed by d4, to win the centre when Black plays an early ...Bc5.',
      summary: 'Give a piece for a moment, then win it back with a pawn fork and keep the centre.',
      prerequisites: ['tactics-1'],
      related: { openings: ['w-four-knights-scotch'], gambits: [], lessons: ['tactics-1'] },
      steps: [
        {
          type: 'read',
          title: 'A natural move with a flaw',
          fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 4 4',
          text: "After 3.Nc3, Black's 3...Bc5 looks natural, but the e5 pawn is defended only by the c6 knight. A fork is an attack on two pieces at once. Keep that idea in mind and look at where Black's pieces stand.",
          highlights: ['e5', 'c5']
        },
        {
          type: 'puzzle',
          title: 'Find the fork trick',
          fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 4 4',
          prompt: 'White to move: win the centre with a temporary sacrifice.',
          solution: ['f3e5', 'c6e5', 'd2d4'],
          accept: [['f3e5', 'c6e5', 'd2d4']],
          hint: 'Take a pawn, and if Black takes back, look for a pawn move that hits two pieces.',
          explanation: '4.Nxe5! Nxe5 5.d4 forks bishop and knight, and White regains the piece. After 5...Bd6 6.dxe5 Bxe5 White has more central control and easier development. If 4...Bxf2+ 5.Kxf2 Nxe5 6.d4, White has the centre and the bishop pair, and the king soon finds safety.',
          wrong: {
            f1c4: 'Bc4 is a normal developing move, but it misses the chance to grab the centre with the fork trick.',
            f1b5: "Bb5 is playable, but 4.Nxe5 is stronger: Black's early bishop move has left e5 loose."
          }
        },
        {
          type: 'line',
          title: 'How it continues',
          fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 4 4',
          text: "A typical continuation: White has a pawn on e4 against none of Black's in the centre, and will follow with f4 or O-O.",
          moves: [
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'c6e5', san: 'Nxe5' },
            { uci: 'd2d4', san: 'd4', note: 'The fork.' },
            { uci: 'c5d6', san: 'Bd6' },
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'd6e5', san: 'Bxe5' },
            { uci: 'f1d3', san: 'Bd3', note: 'Development and central control; f4 can follow.' }
          ]
        }
      ]
    },
    {
      id: 'white-openings-6',
      category: 'white-openings',
      side: 'white',
      title: 'Scotch: chase the knight with e5 and c4',
      level: 'Intermediate',
      minutes: 6,
      objective: "Use central pawn advances to gain space and drive Black's knight around in the Scotch Game.",
      summary: 'In the main-line Scotch, e5 and c4 gain space with gain of time against the black knight.',
      prerequisites: ['openings-1'],
      related: { openings: ['w-scotch'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'line',
          title: 'Space with tempo',
          fen: 'start',
          text: "After the exchange on c6, White pushes e5 to drive the knight away from f6. Black's queen attacks e5 along the e-file, and White defends with the queen. The knight has landed on d5, a fine central square, for now.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd4c6', san: 'Nxc6' },
            { uci: 'b7c6', san: 'bxc6' },
            { uci: 'e4e5', san: 'e5', note: 'Drives the knight from f6.' },
            { uci: 'd8e7', san: 'Qe7' },
            { uci: 'd1e2', san: 'Qe2', note: 'Defends e5.' },
            { uci: 'f6d5', san: 'Nd5' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Kick it again',
          fen: 'r1b1kb1r/p1ppqppp/2p5/3nP3/8/8/PPP1QPPP/RNB1KB1R w KQkq - 3 8',
          prompt: 'White to move: which pawn move drives the d5 knight away and gains more space?',
          solution: ['c2c4'],
          accept: [['c2c4']],
          hint: 'Which pawn can attack d5?',
          explanation: "8.c4 hits the knight again and takes the d5 square for good. Black replies 8...Nb6, retreating, or 8...Ba6, pinning the c4 pawn against your queen so that the knight can stay for the moment; then 9.b3 supports c4. Either way White has gained space and Black's pieces are less comfortable.",
          wrong: {
            f2f4: 'f4 supports e5 but leaves the knight on its strong central square.',
            b1c3: "Nc3 offers to trade the knight that you want to chase; ...Nxc3 eases Black's game."
          }
        },
        {
          type: 'read',
          title: 'The main line',
          fen: 'r3kb1r/p1ppqppp/b1p5/3nP3/2P5/1P6/P3QPPP/RNB1KB1R b KQkq - 0 9',
          text: "After 8...Ba6 9.b3 the c4 pawn is supported, so ...Bxc4 would cost Black a piece for a pawn. White's plan is Bb2, Nd2 and castling, while the e5 pawn keeps Black cramped.",
          arrows: [['a6', 'c4'], ['b3', 'c4']],
          highlights: ['c4', 'e5']
        }
      ]
    },
    {
      id: 'white-openings-7',
      category: 'white-openings',
      side: 'white',
      title: 'QGD Exchange: the minority attack',
      level: 'Intermediate',
      minutes: 8,
      objective: 'Start the minority attack with b4 and b5 in the Carlsbad structure, and know what it aims at.',
      summary: 'Two queenside pawns against three: b4-b5 creates a weak black pawn on c6 or d5.',
      prerequisites: ['gambits-1'],
      related: { openings: ['w-qgd-exchange', 'w-queens-gambit'], gambits: [], lessons: ['gambits-1'] },
      steps: [
        {
          type: 'read',
          title: 'The Carlsbad structure',
          fen: 'rnbqkb1r/ppp2ppp/5n2/3p4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 5',
          text: "After 4.cxd5 exd5 the pawns form the Carlsbad structure. White has two pawns on the queenside (a and b) against Black's three (a, b and c). Advancing the smaller group, the minority attack, aims to exchange b5 for c6 and leave Black with a weak, isolated or backward pawn on c6 or d5.",
          highlights: ['c6', 'd5']
        },
        {
          type: 'line',
          title: 'Setting it up',
          fen: 'start',
          text: 'A classical move order. White develops, stops ...Bf5 with Qc2, castles and puts a rook on b1 behind the b-pawn. This is a typical position from the main line.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'd1c2', san: 'Qc2', note: "Stops ...Bf5, which would trade Black's problem bishop." },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8e8', san: 'Re8' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd7f8', san: 'Nf8' },
            { uci: 'a1b1', san: 'Rab1', note: 'The rook supports the coming b4.' },
            { uci: 'f8g6', san: 'Ng6' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Launch the attack',
          fen: 'r1bqr1k1/pp2bppp/2p2nn1/3p2B1/3P4/2NBPN2/PPQ2PPP/1R3RK1 w - - 11 12',
          prompt: 'White to move: which pawn advance begins the minority attack?',
          solution: ['b2b4'],
          accept: [['b2b4']],
          hint: 'The rook on b1 is already behind it.',
          explanation: "12.b4, supported by the rook, prepares b5. After b5 and bxc6 (or ...cxb5), Black is left with a weak c6 or d5 pawn that White's pieces can attack on the half-open c-file. Black's usual answers are ...a6 to slow b5, then White prepares it with a4, or counterplay on the kingside with ...Ne4.",
          wrong: {
            a2a3: 'a3 prepares b4, but the rook on b1 already supports b4, so it only costs a tempo.',
            e3e4: "e4 is a different plan, a central break, and here it simply opens the position for Black's pieces. The question asks for the minority attack."
          }
        }
      ]
    },
    {
      id: 'white-openings-8',
      category: 'white-openings',
      side: 'white',
      title: 'London: meet ...Qb6 with Qb3',
      level: 'Intermediate',
      minutes: 5,
      objective: 'Defend b2 against the ...c5 and ...Qb6 plan in the London System with the active Qb3.',
      summary: "When the London bishop leaves c1, b2 is loose. Qb3 defends it and challenges Black's queen.",
      prerequisites: ['openings-1'],
      related: { openings: ['w-london'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'line',
          title: 'The b2 pawn',
          fen: 'start',
          text: "Once the dark-squared bishop has gone to f4, nothing guards b2. Black's best-known plan against the London is ...c5, ...Nc6 and ...Qb6, hitting b2 and adding pressure to d4.",
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c1f4', san: 'Bf4', note: 'The bishop leaves c1, so b2 loses a defender.' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'c2c3', san: 'c3', note: 'The pyramid c3-d4-e3.' },
            { uci: 'd8b6', san: 'Qb6' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Defend and challenge',
          fen: 'r1b1kbnr/pp2pppp/1qn5/2pp4/3P1B2/2P1P3/PP3PPP/RN1QKBNR w KQkq - 1 5',
          prompt: 'White to move: defend b2 and offer a queen trade.',
          solution: ['d1b3'],
          accept: [['d1b3']],
          hint: "Put your queen on the same file as Black's queen.",
          explanation: "5.Qb3 guards b2 and challenges the black queen. If 5...Qxb3 6.axb3, White's rook gets the half-open a-file and the doubled b-pawns control a4 and c4. If 5...c4, the queen drops back to c2 and White aims for e4 later. Either way b2 is safe.",
          wrong: {
            d1c1: 'Qc1 defends b2, but the queen becomes passive and blocks the rook. Qb3 defends actively.',
            b1d2: 'Nd2 is a normal move in the London, but here it leaves b2 hanging: ...Qxb2 wins a pawn.'
          }
        }
      ]
    },
    {
      id: 'white-openings-9',
      category: 'white-openings',
      side: 'white',
      title: 'Open Ruy Lopez: the Tarrasch trap',
      level: 'Advanced',
      minutes: 8,
      objective: 'Spot the d-file trick in the Open Ruy Lopez: remove a defender, then capture on e4 because the d5 pawn cannot take back.',
      summary: "When Black's queen and White's queen face each other on the d-file, the d5 pawn becomes a poor defender.",
      prerequisites: ['tactics-2'],
      related: { openings: ['w-ruy-lopez-closed'], gambits: [], lessons: ['tactics-2'] },
      steps: [
        {
          type: 'line',
          title: 'The Open Ruy Lopez',
          fen: 'start',
          text: 'In the Open variation Black takes on e4 and supports the knight with ...d5. White regains space with dxe5 and c3, and puts pressure on e4 with the rook on e1. The knight on e4 is defended only by the d5 pawn.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1b5', san: 'Bb5' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5a4', san: 'Ba4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f6e4', san: 'Nxe4' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'a4b3', san: 'Bb3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'd4e5', san: 'dxe5', note: 'Pawn regained.' },
            { uci: 'c8e6', san: 'Be6' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f3d4', san: 'Nd4', note: 'Eyes the e6 bishop and c6.' },
            { uci: 'd8d7', san: 'Qd7' }
          ]
        },
        {
          type: 'puzzle',
          title: 'The Tarrasch trap',
          fen: 'r4rk1/2pqbppp/p1n1b3/1p1pP3/3Nn3/1BP5/PP3PPP/RNBQR1K1 w - - 5 12',
          prompt: 'White to move: win a piece with a two-move combination.',
          solution: ['d4e6', 'f7e6', 'e1e4'],
          accept: [['d4e6', 'f7e6', 'e1e4']],
          hint: 'Look at the d-file: what stands between the two queens?',
          explanation: "12.Nxe6 fxe6 13.Rxe4! wins a piece. The knight on e4 was defended only by the d5 pawn, and 13...dxe4 would open the d-file: 14.Qxd7. Black's queen on d7, facing your queen on d1, was the real mistake. If 12...Qxe6 instead, the d5 pawn is pinned against the queen by your b3 bishop, and 13.Rxe4 still wins material.",
          wrong: {
            d4c6: '12.Nxc6 Qxc6 is a harmless exchange. First remove the e6 bishop, which also guards d5.',
            f2f3: 'f3 attacks the knight, but it simply retreats with ...Nc5 and Black is fine.'
          }
        }
      ]
    },
    {
      id: 'white-openings-10',
      category: 'white-openings',
      side: 'white',
      title: "King's Indian: the Bayonet b4",
      level: 'Advanced',
      minutes: 7,
      objective: "Recognise the race in the closed King's Indian and start White's queenside play with b4.",
      summary: 'When the centre locks after d5, White attacks on the queenside and Black on the kingside. Speed decides.',
      prerequisites: ['middlegames-2'],
      related: { openings: ['w-kid-classical'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'line',
          title: 'The centre locks',
          fen: 'start',
          text: "In the Classical King's Indian, Black strikes with ...e5, and after d5 the centre is closed. Pawn chains point the way: White's chain e4-d5 points to the queenside, Black's chain e5-d6 points to the kingside. Each side attacks where its chain points.",
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd4d5', san: 'd5', note: 'Closes the centre with gain of time on the knight.' },
            { uci: 'c6e7', san: 'Ne7' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Start the race',
          fen: 'r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQ1RK1 w - - 1 9',
          prompt: 'White to move: which pawn advance starts the queenside attack at once?',
          solution: ['b2b4'],
          accept: [['b2b4']],
          hint: 'Prepare c5 so that it is supported by another pawn.',
          explanation: '9.b4, the Bayonet Attack, gains queenside space and prepares c5 to open the c-file against d6 and c7. Black usually replies 9...Nh5, preparing ...f5, and the race begins. Playing c5 at once would simply lose a pawn.',
          wrong: {
            c4c5: '9.c5? dxc5 loses a pawn: nothing supports c5 yet. b4 prepares it.',
            a2a4: 'a4 is slower and does not support c5. b4 gains space and prepares c5 in one go.'
          }
        },
        {
          type: 'read',
          title: "Black's answer",
          fen: 'r1bq1rk1/ppp1npbp/3p2p1/3Pp2n/1PP1P3/2N2N2/P3BPPP/R1BQR1K1 b - - 2 10',
          text: "After 9...Nh5 Black prepares ...f5 and eyes f4. White's 10.Re1 frees f1 for the bishop, so ...Nf4 will not hit it with gain of time, and the rook backs up e4 once the bishop moves. Both sides now push on their own wing; the side that opens lines first usually wins the race.",
          arrows: [['c4', 'c5'], ['f7', 'f5']],
          highlights: ['c5', 'f5']
        }
      ]
    },
    {
      id: 'white-openings-11',
      category: 'white-openings',
      side: 'white',
      title: 'Nimzo-Indian: a3 asks the question',
      level: 'Intermediate',
      minutes: 6,
      objective: 'Use a3 in the Rubinstein Nimzo-Indian to win the bishop pair and decide the pawn structure.',
      summary: "Black's pinning bishop on b4 must decide: take on c3 and give up the bishop pair, or retreat.",
      prerequisites: ['openings-1'],
      related: { openings: ['w-nimzo-rubinstein', 'w-nimzo-classical'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'line',
          title: 'The Rubinstein set-up',
          fen: 'start',
          text: "With 4.e3 White develops calmly: Bd3, Nf3 and castling. Black's bishop on b4 pins the c3 knight, and Black has struck back with ...d5 and ...c5.",
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'f8b4', san: 'Bb4' },
            { uci: 'e2e3', san: 'e3', note: 'Calm development.' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8c6', san: 'Nc6' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Ask the bishop',
          fen: 'r1bq1rk1/pp3ppp/2n1pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 2 8',
          prompt: 'White to move: which pawn move forces Black to decide about the b4 bishop?',
          solution: ['a2a3'],
          accept: [['a2a3']],
          hint: 'Attack the bishop with a pawn.',
          explanation: '8.a3 attacks the bishop. Black usually takes, 8...Bxc3 9.bxc3, giving White the bishop pair and an extra pawn to support d4; after 9...dxc4 10.Bxc4 White prepares e4. Retreating with ...Ba5 is possible, but then the bishop is far from the kingside.',
          wrong: {
            d1c2: 'Qc2 is a decent move, but it does not make the bishop decide. a3 asks the question at once.',
            c4d5: 'cxd5 is playable, but it is a different plan, not a pawn move against the bishop.'
          }
        }
      ]
    },
    {
      id: 'white-openings-15',
      category: 'white-openings',
      side: 'white',
      title: 'Sicilian 3.Bb5: double the pawns, trade the bishop',
      level: 'Intermediate',
      minutes: 7,
      objective: 'Use 3.Bb5 against 2...Nc6 and 2...d6, and carry out the Be3, Qd2 and Bh6 plan against a fianchetto.',
      summary: 'The Rossolimo and Moscow lines avoid Open Sicilian theory; against ...g6, Bh6 trades the key defender.',
      prerequisites: ['openings-1'],
      related: { openings: ['w-sicilian-rossolimo', 'w-sicilian-moscow'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'line',
          title: 'The Rossolimo main line',
          fen: 'start',
          text: "Against 2...Nc6, 3.Bb5 threatens to double Black's pawns. In the main line White takes at once, keeps the centre closed with d3 and lines up Be3 and Qd2.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1b5', san: 'Bb5', note: 'Pins the knight.' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'b5c6', san: 'Bxc6', note: "Doubles Black's c-pawns." },
            { uci: 'd7c6', san: 'dxc6' },
            { uci: 'd2d3', san: 'd3', note: 'Keeps the centre closed, so the bishop pair matters less.' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'b7b6', san: 'b6' },
            { uci: 'd1d2', san: 'Qd2', note: 'The queen and bishop share a diagonal.' },
            { uci: 'e7e5', san: 'e5' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Trade the defender',
          fen: 'r1bq1rk1/p4pbp/1pp2np1/2p1p3/4P3/2NPBN1P/PPPQ1PP1/R3K2R w KQ e6 0 10',
          prompt: "White to move: which bishop move offers to trade Black's g7 bishop?",
          solution: ['e3h6'],
          accept: [['e3h6']],
          hint: 'Your queen on d2 supports a bishop on the same diagonal.',
          explanation: "10.Bh6 offers to trade the g7 bishop, Black's best defender of the dark squares around the king. After 10...Bxh6 11.Qxh6 the queen is active and the doubled c-pawns remain a long-term target. This Be3, Qd2 and Bh6 plan is the standard idea against ...g6 in the Rossolimo.",
          wrong: {
            f3e5: 'Nxe5? Nxe4! and Black regains the pawn while the g7 bishop wakes up.',
            e3g5: 'Bg5 pins the knight, but it does not trade the g7 bishop, and ...h6 gains time against it.'
          }
        },
        {
          type: 'read',
          title: 'The same idea with a check',
          fen: 'rn2kbnr/pp1qpppp/3p4/2p5/2P1P3/5N2/PP1P1PPP/RNBQK2R b KQkq c3 0 5',
          text: 'Against 2...d6 the check 3.Bb5+ (the Moscow Variation) leads to a bishop trade after 3...Bd7 4.Bxd7+ Qxd7. Here 5.c4 clamps d5 with pawns on c4 and e4. After 3...Nc6 instead, the position is the same as a Rossolimo with ...d6.',
          arrows: [['c4', 'd5'], ['e4', 'd5']],
          highlights: ['d5']
        }
      ]
    },
    {
      id: 'white-openings-16',
      category: 'white-openings',
      side: 'white',
      title: 'Closed Sicilian: the f-pawn first',
      level: 'Beginner',
      minutes: 6,
      objective: 'Set up the Closed Sicilian with g3, Bg2 and d3, and push f4 before the knight goes to f3.',
      summary: 'In the Closed Sicilian the kingside plan starts with f4; Nf3 comes after the pawn has moved.',
      prerequisites: ['openings-1'],
      related: { openings: ['w-sicilian-closed'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'A closed centre',
          fen: 'r1bqk1nr/pp2ppbp/2np2p1/2p5/4P3/2NP2P1/PPP2PBP/R1BQK1NR w KQkq - 0 6',
          text: "In the Closed Sicilian White does not open the centre with d4. Both sides fianchetto, and White's plan is on the kingside: a pawn advance, then Nf3, O-O and later f5. The order matters, because a knight on f3 would block the f-pawn.",
          highlights: ['f5']
        },
        {
          type: 'puzzle',
          title: 'Start the kingside plan',
          fen: 'r1bqk1nr/pp2ppbp/2np2p1/2p5/4P3/2NP2P1/PPP2PBP/R1BQK1NR w KQkq - 0 6',
          prompt: 'White to move: which pawn move prepares the kingside plan before the knight goes to f3?',
          solution: ['f2f4'],
          accept: [['f2f4']],
          hint: 'The knight on g1 would block this pawn if it went to f3 first.',
          explanation: '6.f4 claims e5 and prepares Nf3, O-O and a later f5. With the knight still on g1 the f-pawn is free; after Nf3 it would be blocked. Black usually answers ...e6 and ...Nge7, or ...e5, and both sides then build up. 6.Be3 is the other main move, but it is a piece move.',
          wrong: {
            g1f3: 'Nf3 is a fine square later, but now it blocks the f-pawn, and f4-f5 is your main plan.',
            h2h4: 'h4 can join an attack later, but it does nothing for the centre; f4 comes first.'
          }
        },
        {
          type: 'line',
          title: 'Both sides build up',
          fen: 'r1bqk1nr/pp2ppbp/2np2p1/2p5/4P3/2NP2P1/PPP2PBP/R1BQK1NR w KQkq - 0 6',
          text: 'A typical continuation. White castles and prepares Qd2 and f5; Black prepares queenside play with ...Rb8 and ...b5.',
          moves: [
            { uci: 'f2f4', san: 'f4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8e7', san: 'Nge7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O', note: 'Both kings are safe; now the plans begin.' },
            { uci: 'c1e3', san: 'Be3', note: 'Prepares Qd2 and, at the right moment, f5 or d4.' },
            { uci: 'a8b8', san: 'Rb8', note: 'Black prepares ...b5 on the queenside.' }
          ]
        }
      ]
    },
    {
      id: 'white-openings-17',
      category: 'white-openings',
      side: 'white',
      title: 'French 3.Nc3: Qg4 after the Winawer trade',
      level: 'Intermediate',
      minutes: 7,
      objective: 'Attack the weakened g7 pawn with Qg4 in the Winawer, and know the different plan against the Steinitz.',
      summary: 'When Black gives up the dark-squared bishop with ...Bxc3+, g7 loses its best defender.',
      prerequisites: ['openings-1'],
      related: { openings: ['w-french-nc3'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'line',
          title: 'The Winawer trade',
          fen: 'start',
          text: "In the Winawer Black pins the c3 knight and, after a3, gives up the dark-squared bishop. White's c-pawns are doubled, but Black's kingside dark squares, especially g7, have lost their best defender.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'f8b4', san: 'Bb4', note: 'The Winawer.' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'b4c3', san: 'Bxc3+' },
            { uci: 'b2c3', san: 'bxc3', note: 'Doubled pawns, but the bishop pair.' },
            { uci: 'g8e7', san: 'Ne7' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Hit the dark squares',
          fen: 'rnbqk2r/pp2nppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR w KQkq - 1 7',
          prompt: 'White to move: which queen move attacks the weakened g7 pawn?',
          solution: ['d1g4'],
          accept: [['d1g4']],
          hint: 'The bishop that guarded g7 has gone; put the queen on the g-file.',
          explanation: '7.Qg4 hits g7, and Black must choose: 7...O-O lets White attack the castled king with Bd3, 7...Kf8 gives up castling, and 7...Qc7 8.Qxg7 Rg8 9.Qxh7 cxd4 is the sharp Poisoned Pawn. In each case White uses the dark squares Black gave up with ...Bxc3+.',
          wrong: {
            f1d3: 'Bd3 develops, but Black castles in peace. Qg4 first makes castling risky.',
            g1f3: 'Nf3 is a respectable positional choice, but it does not attack g7; the question asks for the immediate pressure.'
          }
        },
        {
          type: 'read',
          title: 'Against 3...Nf6: the Steinitz',
          fen: 'r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P1P2/2N1BN2/PPP3PP/R2QKB1R b KQkq - 3 7',
          text: 'Against 3...Nf6 the plan is different. 4.e5 Nfd7 5.f4 builds a big centre, and White supports it with Nf3 and Be3, often castling long. White attacks only once d4 and e5 are safe from ...cxd4, ...Qb6 and ...f6.',
          arrows: [['f4', 'e5'], ['e3', 'd4']]
        }
      ]
    },
    {
      id: 'white-openings-18',
      category: 'white-openings',
      side: 'white',
      title: 'Caro-Kann Advance: Nh4 hunts the bishop',
      level: 'Intermediate',
      minutes: 6,
      objective: 'Recognise when the f5 bishop has no retreat and win the bishop pair with Nh4.',
      summary: 'If Black develops without ...h6, the knight jump to h4 wins the bishop pair.',
      prerequisites: ['openings-2'],
      related: { openings: ['w-caro-advance'], gambits: [], lessons: ['openings-2'] },
      steps: [
        {
          type: 'line',
          title: 'A bishop outside the chain',
          fen: 'start',
          text: "In the Advance Caro-Kann Black's bishop comes to f5 before ...e6, outside the pawn chain. That is good for the bishop, but it can become a target. Here Black has developed without ...h6, so the bishop has no retreat on h7.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'c8f5', san: 'Bf5', note: 'The bishop comes out before ...e6.' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'b8d7', san: 'Nd7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'g8e7', san: 'Ne7' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Win the bishop pair',
          fen: 'r2qkb1r/pp1nnppp/2p1p3/3pPb2/3P4/5N2/PPP1BPPP/RNBQ1RK1 w kq - 4 7',
          prompt: 'White to move: which knight move attacks the bishop so you can win the bishop pair?',
          solution: ['f3h4'],
          accept: [['f3h4']],
          hint: 'Which square lets the f3 knight attack f5?',
          explanation: '7.Nh4 hits the f5 bishop. After 7...Bg6 8.Nxg6 White has the bishop pair; if 7...Be4, f3 and Nxg6 follow. This is why Black often plays ...h6 early, so that the bishop can drop back to h7.',
          wrong: {
            g2g4: 'g4 also chases the bishop, but after ...Bg6 your kingside is loosened for nothing; Nh4 wins the bishop pair cleanly.',
            c2c4: 'c4 is a reasonable plan, but it leaves the bishop in peace.'
          }
        },
        {
          type: 'read',
          title: 'After the trade',
          fen: 'r2qkb1r/pp1nnpp1/2p1p1p1/3pP3/3P4/8/PPP1BPPP/RNBQ1RK1 w kq - 0 9',
          text: 'White has the bishop pair and a space edge; Black has the half-open h-file. White continues with c3 or c4, Nd2 and f4 or Bd3, and keeps the kingside safe from ...Qh4 ideas.',
          highlights: ['h8', 'h2']
        }
      ]
    },
    {
      id: 'white-openings-19',
      category: 'white-openings',
      side: 'white',
      title: 'Panov: the Qb3 double attack',
      level: 'Intermediate',
      minutes: 7,
      objective: 'Understand the isolated-pawn structure of the Panov and punish an early ...Bg4 with Qb3.',
      summary: "When Black's bishop leaves c8 early, b7 and d5 can be attacked at once.",
      prerequisites: ['strategy-6'],
      related: { openings: ['w-caro-panov'], gambits: [], lessons: ['strategy-6'] },
      steps: [
        {
          type: 'read',
          title: 'The isolated pawn',
          fen: 'r1bq1rk1/pp2bppp/2n1p3/3n4/3P4/2NB1N2/PP3PPP/R1BQ1RK1 w - - 4 10',
          text: "The Panov often leads to an isolated queen's pawn on d4. White has space, the e5 square for a knight and open lines towards Black's king. Black aims to blockade on d5 and trade pieces.",
          highlights: ['d4', 'e5', 'd5']
        },
        {
          type: 'line',
          title: 'An early bishop',
          fen: 'start',
          text: 'Black can also develop the bishop to g4 before ...e6, pinning the f3 knight. But once the bishop has left c8, nothing defends b7.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'c6d5', san: 'cxd5' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c8g4', san: 'Bg4', note: 'Pins the knight.' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'f6d5', san: 'Nxd5' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Two targets',
          fen: 'r2qkb1r/pp2pppp/2n5/3n4/3P2b1/2N2N2/PP3PPP/R1BQKB1R w KQkq - 0 8',
          prompt: 'White to move: find the queen move that attacks d5 and b7 at once.',
          solution: ['d1b3'],
          accept: [['d1b3']],
          hint: 'Look for a square on the b-file that also sees d5.',
          explanation: '8.Qb3! hits b7 along the b-file and the d5 knight along the diagonal. Black cannot simply cover both; the main reply 8...Bxf3 9.gxf3 e6 10.Qxb7 Nxd4 11.Bb5+ leads to a sharp position that White players study in detail.',
          wrong: {
            c3d5: 'Nxd5 Qxd5 brings the black queen to the centre, and Black is comfortable.',
            f1b5: 'Bb5 pins the knight, but ...e6 or ...Rc8 holds everything; Qb3 creates two threats at once.'
          }
        }
      ]
    },
    {
      id: 'white-openings-20',
      category: 'white-openings',
      side: 'white',
      title: 'Slow Italian and Spanish: the knight tour',
      level: 'Beginner',
      minutes: 6,
      objective: "Bring the queen's knight from d2 via f1 to g3 in slow Italian and Spanish set-ups.",
      summary: 'With c3 and d3 the knight cannot use c3, so it travels d2-f1-g3 instead.',
      prerequisites: ['openings-1'],
      related: {
        openings: ['w-ruy-anti-berlin', 'w-italian-two-knights-d3', 'w-italian-giuoco', 'w-ruy-lopez-closed'],
        gambits: [],
        lessons: []
      },
      steps: [
        {
          type: 'line',
          title: 'A slow set-up',
          fen: 'start',
          text: "In slow Italian and Spanish set-ups White plays c3, d3, O-O, h3 and Re1. Because c3 is taken by a pawn, the queen's knight uses an unusual route: d2, then f1, then g3 or e3, where it supports the kingside and the d3-d4 break.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1b5', san: 'Bb5' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd2d3', san: 'd3', note: 'The Anti-Berlin.' },
            { uci: 'f8c5', san: 'Bc5' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5a4', san: 'Ba4' },
            { uci: 'c5a7', san: 'Ba7' },
            { uci: 'f1e1', san: 'Re1', note: 'The rook supports e4 and frees f1.' },
            { uci: 'c6e7', san: 'Ne7' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'e7g6', san: 'Ng6' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Continue the tour',
          fen: 'r1bq1rk1/bpp2ppp/p2p1nn1/4p3/B3P3/2PP1N1P/PP1N1PP1/R1BQR1K1 w - - 6 11',
          prompt: 'White to move: which knight move continues the tour towards g3?',
          solution: ['d2f1'],
          accept: [['d2f1']],
          hint: 'Re1 has just made a square free for the knight.',
          explanation: '11.Nf1 frees d2 for the c1 bishop and heads for g3, where the knight covers f5 and h5 and supports a later d4 or Nf5. Notice why Re1 came first: it vacated f1. In the Italian the same tour appears after c3, d3 and Re1.',
          wrong: {
            d2c4: 'Nc4 is active, but there the knight does nothing for the kingside and can be hit by ...b5.',
            d2b3: 'Nb3 heads for the queenside and blocks the b-pawn; the knight is needed on the kingside.'
          }
        },
        {
          type: 'read',
          title: 'Arrived',
          fen: 'r1bq1rk1/bpp2pp1/p2p1nnp/4p3/B3P3/2PP1NNP/PP3PP1/R1BQR1K1 b - - 1 12',
          text: 'With the knight on g3 White can prepare d4, or play Nf5 or Nh4 against the black king. Black has mirrored the plan with ...Ne7-g6. In slow openings this kind of regrouping matters more than move-order details.',
          arrows: [['g3', 'f5']]
        }
      ]
    },
    {
      id: 'white-openings-21',
      category: 'white-openings',
      side: 'white',
      title: 'Two Knights 4.Ng5: keep the pawn with Bb5+',
      level: 'Intermediate',
      minutes: 7,
      objective: 'Meet the main line 4...d5 5.exd5 Na5 with 6.Bb5+ and understand the position that follows.',
      summary: 'After 5...Na5 the check on b5 saves the bishop with gain of time and keeps the extra pawn.',
      prerequisites: ['attack-8'],
      related: { openings: ['w-italian-knight-attack'], gambits: [], lessons: ['attack-8'] },
      steps: [
        {
          type: 'line',
          title: 'Attack on f7',
          fen: 'start',
          text: '4.Ng5 attacks f7 with knight and bishop. Black blocks with 4...d5, and after 5.exd5 the main line is 5...Na5: Black gives up a pawn to chase the c4 bishop and win time.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f3g5', san: 'Ng5', note: 'Knight and bishop hit f7.' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'c6a5', san: 'Na5', note: 'The main line: a pawn for time.' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Save the bishop with tempo',
          fen: 'r1bqkb1r/ppp2ppp/5n2/n2Pp1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq - 1 6',
          prompt: 'White to move: which check keeps the extra pawn and the bishop active?',
          solution: ['c4b5'],
          accept: [['c4b5']],
          hint: 'The bishop is attacked; can it move with check?',
          explanation: '6.Bb5+ c6 7.dxc6 bxc6 8.Be2: the bishop escapes with gain of time and White keeps the extra pawn. Black gets space and quick development with ...h6 and ...e4, so White must untangle carefully. 6.d3, the Morphy line, is the main alternative.',
          wrong: {
            g5f7: '6.Nxf7? Nxc4 (or ...Kxf7) wins back more than the pawn: the bishop on c4 is hanging.',
            c4e2: '6.Be2 retreats at once, but without the check Black need not spend ...c6, and the d5 pawn can soon be regained, for example with ...Qxd5.'
          }
        },
        {
          type: 'read',
          title: 'The main position',
          fen: 'r1bqkb1r/p4pp1/2p2n1p/n3N3/4p3/8/PPPPBPPP/RNBQK2R b KQkq - 1 10',
          text: "White is a pawn up; Black has space and active pieces and will play ...Bd6 or ...Bc5. White's plan is d4 or f4 to support the e5 knight, castling, and slowly using the extra pawn.",
          highlights: ['e5', 'e4']
        }
      ]
    },
    {
      id: 'white-openings-22',
      category: 'white-openings',
      side: 'white',
      title: 'Samisch: Be3, Qd2 and Bh6',
      level: 'Advanced',
      minutes: 7,
      objective: "Set up the Samisch with f3, Be3 and Qd2, and trade Black's King's Indian bishop with Bh6.",
      summary: "The g7 bishop is Black's best piece; in the Samisch White often trades it off.",
      prerequisites: ['attack-7'],
      related: { openings: ['w-kid-samisch'], gambits: [], lessons: ['attack-7'] },
      steps: [
        {
          type: 'line',
          title: 'The Samisch set-up',
          fen: 'start',
          text: "In the Samisch, 5.f3 defends e4 with a pawn and takes g4 away from Black's knight, so a bishop on e3 cannot be harassed by ...Ng4. White's typical set-up is Be3, Qd2, often O-O-O and a kingside pawn storm.",
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'f2f3', san: 'f3', note: 'The Samisch.' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c1e3', san: 'Be3', note: 'Safe from ...Ng4.' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'a7a6', san: 'a6', note: 'Black prepares ...b5.' }
          ]
        },
        {
          type: 'puzzle',
          title: "Trade the King's Indian bishop",
          fen: 'rnbq1rk1/1p2ppbp/p1pp1np1/8/2PPP3/2N1BP2/PP1Q2PP/R3KBNR w KQ - 0 8',
          prompt: "White to move: which bishop move offers to trade Black's g7 bishop?",
          solution: ['e3h6'],
          accept: [['e3h6']],
          hint: 'The queen on d2 supports a bishop on the same diagonal.',
          explanation: "8.Bh6 offers to swap the g7 bishop, Black's best defender and the piece behind ...e5 and ...c5. After 8...Bxh6 9.Qxh6 the queen eyes the king and h4-h5 can follow. Black often avoids the trade with ...Bh8, or counters fast with ...b5.",
          wrong: {
            g2g4: 'g4 starts the storm, but it is slow and leaves the g7 bishop on the board; trading it first makes the attack stronger.',
            e1c1: 'Castling long is a normal idea, but against ...c6, ...a6 and ...b5 the king may walk into the attack; and the g7 bishop is still there.'
          }
        },
        {
          type: 'read',
          title: 'After the trade',
          fen: 'rnbq1rk1/1p2pp1p/p1pp1npQ/8/2PPP3/2N2P2/PP4PP/R3KBNR b KQ - 0 9',
          text: 'With the queen on h6 and the dark-squared bishops gone, White plans h4-h5 to open the h-file. Black must react quickly in the centre or on the queenside, for example with ...b5 or ...e5.',
          arrows: [['h2', 'h4']]
        }
      ]
    },
    {
      id: 'white-openings-23',
      category: 'white-openings',
      side: 'white',
      title: 'Early queen moves with a purpose: 4.Qc2 and 5.Qb3',
      level: 'Intermediate',
      minutes: 8,
      objective: 'Explain why the queen comes out early in the Nimzo-Indian Classical and the Grunfeld Russian System, and follow up correctly.',
      summary: 'An early queen move is fine when it guards the structure or forces the centre open.',
      prerequisites: ['openings-1'],
      related: { openings: ['w-nimzo-classical', 'w-grunfeld-russian'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'Why 4.Qc2?',
          fen: 'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PPQ1PPPP/R1B1KBNR b KQkq - 3 4',
          text: "In the Nimzo-Indian Black pins the c3 knight and threatens ...Bxc3+, doubling White's pawns. 4.Qc2 guards c3 with the queen, so White can recapture without damaging the structure, and it also covers e4.",
          highlights: ['c3', 'e4']
        },
        {
          type: 'puzzle',
          title: 'The healthy recapture',
          fen: 'rnbq1rk1/pppp1ppp/4pn2/8/2PP4/P1b5/1PQ1PPPP/R1B1KBNR w KQ - 0 6',
          prompt: 'White to move: recapture on c3 so that your pawn structure stays healthy.',
          solution: ['c2c3'],
          accept: [['c2c3']],
          hint: 'Why did White play 4.Qc2 in the first place?',
          explanation: '6.Qxc3 keeps the pawns intact and leaves White with the bishop pair. The price is time: the queen has moved twice and the kingside is undeveloped, so Black plays ...b6, ...Bb7 and ...d5 or ...Ne4 quickly.',
          wrong: { b2c3: 'bxc3 is playable, but it doubles your pawns: the very thing 4.Qc2 was meant to avoid.' }
        },
        {
          type: 'line',
          title: 'The Grunfeld Russian System',
          fen: 'start',
          text: 'In the Grunfeld Russian System the queen comes out for a similar reason: Qb3 pressures d5 and b7 and forces ...dxc4. After Qxc4 White can build the ideal centre.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'd1b3', san: 'Qb3', note: 'Hits d5 and eyes b7.' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'b3c4', san: 'Qxc4' },
            { uci: 'e8g8', san: 'O-O' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Build the centre',
          fen: 'rnbq1rk1/ppp1ppbp/5np1/8/2QP4/2N2N2/PP2PPPP/R1B1KB1R w KQ - 1 7',
          prompt: 'White to move: which pawn move builds the full centre?',
          solution: ['e2e4'],
          accept: [['e2e4']],
          hint: 'The point of Qxc4 was to make this pawn move possible.',
          explanation: '7.e4 gives White pawns on d4 and e4 supported by pieces. Black now attacks them with ...Bg4, ...a6 and ...b5, or ...Na6 and ...c5, and White develops with Be3 or Be2 and keeps the queen safe.',
          wrong: {
            e2e3: 'e3 is solid but passive: the point of Qxc4 is to play e4 with pawns on d4 and e4.',
            c1g5: 'Bg5 develops, but ...c5 or ...Be6 hits your queen and centre before e4 arrives.'
          }
        }
      ]
    },
    {
      id: 'white-openings-24',
      category: 'white-openings',
      side: 'white',
      title: "Fianchetto against the King's Indian: h3 first",
      level: 'Intermediate',
      minutes: 6,
      objective: "Handle the classical set-up of the Fianchetto King's Indian with e4 and h3, and use the same fianchetto idea in the English.",
      summary: "Before Be3, h3 takes g4 away from Black's knight and bishop.",
      prerequisites: ['openings-1'],
      related: { openings: ['w-kid-fianchetto', 'w-english-anglo-indian'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'line',
          title: 'A safe king',
          fen: 'start',
          text: "Against the King's Indian, the fianchetto keeps White's king very safe. After ...e5 White usually plays e4 and develops the bishop to e3, but first one small pawn move is needed.",
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'g2g3', san: 'g3', note: 'The fianchetto.' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'e2e4', san: 'e4', note: 'Claims the centre.' },
            { uci: 'c7c6', san: 'c6' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Prepare Be3',
          fen: 'r1bq1rk1/pp1n1pbp/2pp1np1/4p3/2PPP3/2N2NP1/PP3PBP/R1BQ1RK1 w - - 0 9',
          prompt: 'White to move: which pawn move stops ...Ng4 and ...Bg4 before you play Be3?',
          solution: ['h2h3'],
          accept: [['h2h3']],
          hint: 'Which square do the black knight and bishop both want?',
          explanation: "9.h3 takes g4 from Black's knight and bishop, so Be3 can follow without being chased. White keeps a solid centre and a safe king; typical next moves are Be3, Qc2 and Rd1, while Black often plays ...Qb6 or ...exd4.",
          wrong: {
            c1e3: 'Be3 at once allows ...Ng4, hitting the bishop and winning time or the bishop pair.',
            d4d5: 'd5 closes the centre early and releases the tension; Black gets ...cxd5 and play on the c-file.'
          }
        },
        {
          type: 'read',
          title: 'The same idea in the English',
          fen: 'rnbq1rk1/ppp1ppbp/3p1np1/8/2P1P3/2N3P1/PP1PNPBP/R1BQK2R b KQ - 1 6',
          text: 'The fianchetto works in the English too: against 1...Nf6 and ...g6, White plays g3, Bg2 and e4 with Nge2. The knight goes to e2 so that the f-pawn can still advance, and the g2 bishop guards the king.',
          highlights: ['e2', 'g2']
        }
      ]
    },
    {
      id: 'white-openings-25',
      category: 'white-openings',
      side: 'white',
      title: 'Catalan: win back c4 with Qa4+',
      level: 'Intermediate',
      minutes: 6,
      objective: 'Regain the c4 pawn in the Open Catalan with Qa4+ and keep the long-diagonal pressure.',
      summary: 'If Black takes on c4, a queen check prepares to win the pawn back at once.',
      prerequisites: ['gambits-1'],
      related: { openings: ['w-catalan'], gambits: [], lessons: ['gambits-1'] },
      steps: [
        {
          type: 'read',
          title: 'The long diagonal',
          fen: 'rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq - 1 4',
          text: "In the Catalan the bishop on g2 looks down the long diagonal at b7 and the queenside. If Black takes on c4, White is a pawn down for a while, but the bishop's pressure usually helps to win it back.",
          arrows: [['g2', 'b7']]
        },
        {
          type: 'puzzle',
          title: 'Check first',
          fen: 'rnbqkb1r/ppp2ppp/4pn2/8/2pP4/6P1/PP2PPBP/RNBQK1NR w KQkq - 0 5',
          prompt: 'White to move: which check prepares to win back the c4 pawn?',
          solution: ['d1a4'],
          accept: [['d1a4']],
          hint: 'The queen can reach the a4-e8 diagonal.',
          explanation: '5.Qa4+ forces Black to block, for example 5...Bd7 or 5...Nbd7, and then 6.Qxc4 regains the pawn. With material level, the g2 bishop keeps pressing on the queenside. 5.Nf3, castling first and regaining the pawn later, is the other main way.',
          wrong: {
            b2b3: 'b3 offers a second pawn: after ...cxb3 axb3 White has the a-file, but there is no need for a gambit.',
            e2e4: 'e4 builds a centre, but the c4 pawn stays lost for now and your own pawn blocks the g2 bishop.'
          }
        },
        {
          type: 'line',
          title: 'A typical continuation',
          fen: 'rnbqkb1r/ppp2ppp/4pn2/8/2pP4/6P1/PP2PPBP/RNBQK1NR w KQkq - 0 5',
          text: 'After regaining the pawn the queen steps back to c2, and White castles with lasting pressure on the queenside.',
          moves: [
            { uci: 'd1a4', san: 'Qa4+' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'a4c4', san: 'Qxc4', note: 'Pawn regained.' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'c4c2', san: 'Qc2' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'g1f3', san: 'Nf3', note: 'Castling and Rd1 or a4 follow.' }
          ]
        }
      ]
    },
    {
      id: 'white-openings-26',
      category: 'white-openings',
      side: 'white',
      title: 'Vienna g3: recapture towards the b-file',
      level: 'Beginner',
      minutes: 5,
      objective: 'Recapture correctly on c3 in the Vienna g3 system and use the g2 bishop with the half-open b-file.',
      summary: 'bxc3 opens the b-file and keeps the d-pawn for the centre.',
      prerequisites: ['openings-1'],
      related: { openings: ['w-vienna-g3'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'line',
          title: 'Black frees the game',
          fen: 'start',
          text: 'In the Vienna g3 system Black often frees the game with ...d5. After the exchanges on d5 the g2 bishop presses on the long diagonal. Now Black has taken on c3, and White must choose how to recapture.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g2g3', san: 'g3', note: 'The bishop will go to g2.' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'f1g2', san: 'Bg2', note: 'Pressure on the d5 knight.' },
            { uci: 'd5c3', san: 'Nxc3' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Which pawn takes?',
          fen: 'rnbqkb1r/ppp2ppp/8/4p3/8/2n3P1/PPPP1PBP/R1BQK1NR w KQkq - 0 6',
          prompt: 'White to move: recapture on c3 so that your rook gets a half-open file and d2-d4 stays possible.',
          solution: ['b2c3'],
          accept: [['b2c3']],
          hint: 'Which recapture opens a file on the queenside?',
          explanation: '6.bxc3 opens the b-file for a rook on b1, keeps the d-pawn for a later d4 and strengthens the centre. Together with the g2 bishop this gives White pressure on b7 and the queenside. After 6.dxc3 Qxd1+ 7.Kxd1 White would also lose the right to castle.',
          wrong: {
            d2c3: 'dxc3 opens the d-file for a queen trade (6...Qxd1+), gives up the d4 advance and leaves the b-file closed.'
          }
        },
        {
          type: 'read',
          title: 'The typical position',
          fen: 'rnbq1rk1/ppp2ppp/3b4/4p3/8/2P2NP1/P1PP1PBP/R1BQ1RK1 b - - 4 8',
          text: 'White plays Rb1, d3 or d4 and Re1; the g2 bishop and the rook on the b-file combine against b7, while Nf3 keeps e5 under pressure.',
          arrows: [['g2', 'b7']]
        }
      ]
    },
    {
      id: 'white-openings-27',
      category: 'white-openings',
      side: 'white',
      title: 'Alekhine Modern: c5 gains space with tempo',
      level: 'Intermediate',
      minutes: 6,
      objective: 'In the Modern Variation of the Alekhine, answer ...d5 with c5, gaining queenside space with tempo on the b6 knight.',
      summary: 'When Black closes the centre with ...d5, the c-pawn advance kicks the b6 knight.',
      prerequisites: ['openings-1'],
      related: { openings: ['w-alekhine-modern'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'line',
          title: 'Pieces support the centre',
          fen: 'start',
          text: 'In the Modern Variation White supports e5 with pieces, castles and then plays c4 to drive the knight to b6. Black often answers Be3 with ...d5, attacking c4 and offering to close the centre.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'f6d5', san: 'Nd5' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'g1f3', san: 'Nf3', note: 'The Modern Variation.' },
            { uci: 'c8g4', san: 'Bg4' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'd5b6', san: 'Nb6' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'g4h5', san: 'Bh5' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'd6d5', san: 'd5', note: 'Black hits c4.' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Space with tempo',
          fen: 'rn1q1rk1/ppp1bppp/1n2p3/3pP2b/2PP4/2N1BN1P/PP2BPP1/R2Q1RK1 w - - 0 11',
          prompt: 'White to move: which pawn advance gains queenside space with tempo on the b6 knight?',
          solution: ['c4c5'],
          accept: [['c4c5']],
          hint: 'The c4 pawn is attacked, but it can move forward.',
          explanation: "11.c5 hits the b6 knight and fixes Black's queenside. Black usually replies 11...Bxf3 12.Bxf3 Nc4, and White challenges the knight with b3 or Qe2, keeping a clear space advantage on the queenside and the e5 wedge.",
          wrong: {
            c4d5: "cxd5 releases the tension: after ...exd5 Black's pieces get free squares and the b6 knight is no longer harassed.",
            b2b3: 'b3 defends c4, but it lets Black decide the structure with ...dxc4; c5 keeps the initiative.'
          }
        },
        {
          type: 'read',
          title: 'The knight finds c4',
          fen: 'rn1q1rk1/ppp1bppp/4p3/2PpP3/2nP4/2N1BB1P/PP3PP1/R2Q1RK1 w - - 1 13',
          text: "The knight has found c4, but White can challenge it with b3 or Qe2. White's queenside space and the e5 wedge give a lasting edge; Black aims for ...b6 or ...f6 to free the position.",
          highlights: ['c4', 'e5']
        }
      ]
    }
  ]
}]);
