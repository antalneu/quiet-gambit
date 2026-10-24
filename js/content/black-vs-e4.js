/* The Quiet Gambit - Black's repertoire against 1.e4 and the black-vs-e4 lessons.
 * Families (bf-), variations with move lines and pitfalls, and lessons.
 * Data only: appends one part to window.QG_PARTS. Checked by tools/check-content.js. */
window.QG_PARTS = (window.QG_PARTS || []).concat([{
  source: 'black-vs-e4',
  families: [
    {
      id: 'bf-italian',
      side: 'black',
      group: 'vs-e4',
      name: 'Italian Game',
      aliases: ['Giuoco Piano', 'Italian Opening'],
      eco: 'C50-C59',
      root: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4'],
      summary: "White's bishop aims at f7 from c4. Black chooses between mirroring with 3...Bc5 and counter-attacking e4 with 3...Nf6.",
      overview: "After 3.Bc4 White's bishop eyes f7, and White can play for an early d4 with c3, or build slowly with d3, c3, Re1 and Nbd2-f1-g3. Black's two main answers are 3...Bc5, the classical Giuoco Piano, and 3...Nf6, the Two Knights Defence, which hits e4 at once. Both usually lead to open, classical play around the e5 strongpoint, and the modern slow d3 lines from either move often look alike.",
      choosing: 'Choose 3...Bc5 for the simplest, most classical development and slow manoeuvring games. Choose 3...Nf6 if you are happy to meet 4.Ng5 with a pawn sacrifice and want livelier play. Many players start with 3...Bc5 and add the Two Knights later.',
      terms: ['Giuoco Pianissimo', 'Fried Liver Attack', 'Evans Gambit', 'Max Lange', 'fork trick', 'f7 weakness']
    },
    {
      id: 'bf-ruy-lopez',
      side: 'black',
      group: 'vs-e4',
      name: 'Ruy Lopez',
      aliases: ['Spanish Opening', 'Spanish Game', 'Ruy Lopez Opening'],
      eco: 'C60-C99',
      root: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5'],
      summary: 'White pressures the knight that defends e5. Black can defend with the Berlin, the Closed Morphy lines, the Open Variation or meet the Exchange.',
      overview: '3.Bb5 puts indirect pressure on e5 by attacking its defender. Black usually asks the bishop a question with 3...a6, then chooses between the Closed lines (5...Be7 and a long manoeuvring battle) and the Open Variation (5...Nxe4 with active pieces). The Berlin, 3...Nf6, aims for a solid queenless middlegame. Against the Exchange, 4.Bxc6, Black gets the bishop pair for a damaged queenside. Plans revolve around holding e5 and gaining queenside space.',
      choosing: 'For solidity and fewer forcing lines, pick the Berlin. For rich, long manoeuvring games, the Closed Defence. For active piece play and a clear structure, the Open Variation. Everyone who plays 3...a6 also needs the Exchange line.',
      terms: ['Morphy Defence', 'Berlin Wall', 'Breyer', 'Chigorin', 'Open Spanish', 'Exchange Variation', "Noah's Ark trap", 'Marshall Attack']
    },
    {
      id: 'bf-scotch',
      side: 'black',
      group: 'vs-e4',
      name: 'Scotch Game',
      aliases: ['Scotch Opening', 'Scotch'],
      eco: 'C44-C45',
      root: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'd2d4'],
      summary: 'White opens the centre at once with 3.d4. After 3...exd4 4.Nxd4 Black attacks e4 with 4...Nf6 or the d4 knight with 4...Bc5.',
      overview: '3.d4 clears the centre early: after 3...exd4 4.Nxd4 White has a central knight and free development, but has released the tension and given Black targets. Black either hits e4 with 4...Nf6, accepting doubled c-pawns after Nxc6 in the Mieses lines, or hits d4 with 4...Bc5, aiming the queen at f6 and the bishop at f2. Both lead to open games where piece activity matters more than structure.',
      choosing: 'Pick 4...Nf6 for a dynamic game with doubled pawns and the bishop pair ideas, or 4...Bc5 for straightforward piece pressure on d4 and f2 with less long-term structural commitment.',
      terms: ['Mieses Variation', 'Schmidt Variation', 'Classical Variation', 'Scotch Four Knights', 'doubled c-pawns']
    },
    {
      id: 'bf-petroff',
      side: 'black',
      group: 'vs-e4',
      name: 'Petroff Defence',
      aliases: ['Petrov Defence', 'Russian Game', 'Russian Defence'],
      eco: 'C42-C43',
      root: ['e2e4', 'e7e5', 'g1f3', 'g8f6'],
      summary: 'Counter-attack e4 instead of defending e5. Symmetrical, solid and respected at every level.',
      overview: 'Black answers 2.Nf3 with 2...Nf6 and plays for open, often symmetrical positions where White has little to bite on. Against 3.Nxe5 Black must first kick the knight with ...d6 before taking on e4. Against 3.d4 the capture on e4 is safe at once. Black aims for quick development, a central knight supported by ...d5, and a sound structure; White aims to use the extra tempo, often with c4 or long castling.',
      choosing: 'Learn the 3.Nxe5 main lines first, since they are the most common, then the 3.d4 lines. The Petroff suits players who want a reliable defence with clear plans rather than sharp counterplay.',
      terms: ['Russian Game', 'copycat trap', 'Steinitz Attack', 'Cochrane Gambit', 'symmetry']
    },
    {
      id: 'bf-sicilian',
      side: 'black',
      group: 'vs-e4',
      name: 'Sicilian Defence',
      aliases: ['Sicilian', '1...c5'],
      eco: 'B20-B99',
      root: ['e2e4', 'c7c5'],
      summary: 'The most combative answer to 1.e4. Black trades a wing pawn for a centre pawn and fights for the initiative.',
      overview: "1...c5 controls d4 without making a symmetrical centre. In the Open Sicilian, after d4 and cxd4, Black gets a central pawn majority and the half-open c-file, while White gets space and attacking chances, often with opposite-side castling. Black's choice at moves two and five (...d6, ...e6 or ...Nc6, then ...a6, ...g6, ...e6 or ...e5) decides the structure. White can also avoid the Open Sicilian with 2.c3, 2.Nc3 or 3.Bb5.",
      choosing: 'Sharp, theory-loving players choose the Najdorf, Dragon or Sveshnikov. Flexible players choose the Taimanov, Scheveningen or Classical. Positional players may like the Accelerated Dragon. Everyone needs answers to the Alapin, the Closed and the Rossolimo.',
      terms: ['Open Sicilian', 'English Attack', 'Yugoslav Attack', 'Maroczy Bind', 'Keres Attack', 'Richter-Rauzer', 'Anti-Sicilian', 'opposite-side castling']
    },
    {
      id: 'bf-french',
      side: 'black',
      group: 'vs-e4',
      name: 'French Defence',
      aliases: ['French', '1...e6'],
      eco: 'C00-C19',
      root: ['e2e4', 'e7e6'],
      summary: 'Black builds a solid pawn wall with ...e6 and ...d5, then attacks the centre with ...c5 and ...f6.',
      overview: "After 1...e6 2.d4 d5 Black challenges e4 at once. If White pushes e5, a pawn chain d4-e5 against e6-d5 arises; Black attacks its base with ...c5 and later its head with ...f6, while White attacks on the kingside. Black's light-squared bishop is often the problem piece behind the e6 pawn. In the Rubinstein and Burn lines Black releases the centre with ...dxe4 for simple, solid development.",
      choosing: 'The Winawer and Classical suit players who like unbalanced, strategic fights. The Rubinstein suits players who want a solid game with little theory. Everyone needs a plan against the Advance and the Tarrasch.',
      terms: ['pawn chain', 'bad bishop', 'Winawer', 'Steinitz Variation', 'Milner-Barry Gambit', 'Poisoned Pawn', 'isolated queen pawn']
    },
    {
      id: 'bf-caro-kann',
      side: 'black',
      group: 'vs-e4',
      name: 'Caro-Kann Defence',
      aliases: ['Caro-Kann', 'Caro Kann', '1...c6'],
      eco: 'B10-B19',
      root: ['e2e4', 'c7c6'],
      summary: 'Prepare ...d5 with ...c6 so the light-squared bishop can come out before ...e6. Solid structures and clear plans.',
      overview: "1...c6 supports ...d5 without blocking the c8 bishop. In the Classical, Black takes on e4 and develops the bishop to f5; against the Advance, the bishop comes to f5 before ...e6 and ...c5. Exchange lines give Black either an isolated-pawn fight (the Panov) or a Carlsbad-type structure. Black's aim is a healthy structure and easy development; White's is space and a lead in development.",
      choosing: 'The Classical is the most reliable start. Then learn one answer each to the Advance, the Panov-Botvinnik, the Exchange and the Two Knights, since club players use them all.',
      terms: ['Classical Caro-Kann', 'Advance Variation', 'Panov-Botvinnik', 'Carlsbad structure', 'isolated queen pawn', 'Two Knights', 'minority attack']
    },
    {
      id: 'bf-scandinavian',
      side: 'black',
      group: 'vs-e4',
      name: 'Scandinavian Defence',
      aliases: ['Centre Counter Defence', 'Scandinavian', '1...d5'],
      eco: 'B01',
      root: ['e2e4', 'd7d5'],
      summary: 'Challenge e4 on move one. Black recaptures on d5 with the queen or the knight and aims for a sound, compact set-up.',
      overview: 'After 1...d5 2.exd5 Black can recapture with the queen, accepting that White gains time on it, or delay with 2...Nf6. With the queen, the main retreats are a5 and d6; Black then develops ...Nf6, ...c6 or ...a6, and the light-squared bishop outside the pawn chain, reaching a Caro-Kann-like structure. White aims to use the tempi for development and central space.',
      choosing: 'Beginners can start with 3...Qa5 and its fixed set-up. 3...Qd6 is more flexible and popular today. 2...Nf6 avoids early queen play but allows White to try to keep the pawn with c4 or Bb5+.',
      terms: ['Centre Counter', 'Qa5 Scandinavian', 'Qd6 Scandinavian', 'Modern Variation', 'Icelandic Gambit', 'Panov transposition']
    },
    {
      id: 'bf-pirc',
      side: 'black',
      group: 'vs-e4',
      name: 'Pirc Defence',
      aliases: ['Pirc', 'Pirc-Ufimtsev Defence', 'Ufimtsev Defence'],
      eco: 'B07-B09',
      root: ['e2e4', 'd7d6', 'd2d4', 'g8f6'],
      summary: 'A hypermodern defence: let White build a centre, fianchetto the bishop on g7, then strike with ...e5 or ...c5.',
      overview: "Black plays ...d6, ...Nf6 and ...g6, inviting White to occupy the centre, and then targets it with the g7 bishop and pawn breaks. White's main systems are the Classical (Nf3 and Be2), the 150 Attack (Be3, Qd2 and Bh6) and the ambitious Austrian Attack with f4. Black must time ...e5 or ...c5 well: too slow, and White's space turns into an attack.",
      choosing: 'Learn the Classical set-up with ...Bg4 and ...e5 first, then the ...c5 ideas against the Austrian Attack, which is the sharpest test. Against the 150 Attack, ...c6 and ...b5 with delayed castling is the practical choice.',
      terms: ['Austrian Attack', '150 Attack', 'Classical Pirc', 'hypermodern', 'fianchetto']
    },
    {
      id: 'bf-alekhine',
      side: 'black',
      group: 'vs-e4',
      name: 'Alekhine Defence',
      aliases: ['Alekhine', "Alekhine's Defence", '1...Nf6'],
      eco: 'B02-B05',
      root: ['e2e4', 'g8f6'],
      summary: "Provoke White's pawns forward with 1...Nf6, then attack the over-extended centre.",
      overview: 'Black lets White chase the knight with e5, c4 and d4, gaining space, and then undermines the pawns with ...d6, ...dxe5, ...c5, ...Nc6 and piece pressure. In the Modern Variation, 4.Nf3, Black pins with ...Bg4 or fianchettoes. In the Exchange, Black gets a solid structure, and in the Four Pawns Attack Black must hit the huge centre quickly with pieces.',
      choosing: 'Start with the Modern Variation (4.Nf3 Bg4), the most common line. Then study the Four Pawns Attack carefully, since it is the most dangerous, and the Exchange set-up with ...g6.',
      terms: ['Four Pawns Attack', 'Modern Variation', 'Exchange Variation', 'hypermodern', 'over-extended centre']
    },
    {
      id: 'bf-modern',
      side: 'black',
      group: 'vs-e4',
      name: 'Modern Defence',
      aliases: ['Robatsch Defence', 'Modern', '1...g6'],
      eco: 'B06',
      root: ['e2e4', 'g7g6'],
      summary: 'Fianchetto at once and keep the knight on g8 for now. Flexible, hypermodern and close to the Pirc.',
      overview: 'Black plays ...g6 and ...Bg7 before deciding on ...d6, ...Nf6, ...c6 or ...c5. The bishop presses d4 immediately, and because the knight is not on f6, e4-e5 gains no time. White usually builds a broad centre with Nc3 and Be3, or c4. Black strikes with ...c5 or ...e5, or gains queenside space with ...a6 and ...b5. Many lines transpose to the Pirc.',
      choosing: 'Play the Modern if you like the Pirc structures but want more flexibility and fewer forced lines. It suits players comfortable with less space and patient counterplay.',
      terms: ['Robatsch', 'hypermodern', 'Pirc transposition', 'fianchetto', 'Averbakh System']
    }
  ],
  repertoire: [
    {
      id: 'b-e5-giuoco-piano',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-italian',
      family: 'Italian Game',
      name: 'Italian Game: Giuoco Piano (3...Bc5)',
      short: 'Giuoco Piano (3...Bc5)',
      aliases: ['Giuoco Piano', 'Italian Game: Classical'],
      eco: 'C50',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'f8c5'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5',
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 12,
      summary: "Meet the Italian by mirroring White's bishop on c5, aiming at f2, for a classical and easy-to-learn position.",
      idea: "Black develops naturally and copies White's set-up. Against the slow 4.c3 and 5.d3 plans, Black castles, plays ...d6 and ...a6, and drops the bishop to a7 so it cannot be hit by d4 or b4. Against an early d4, Black trades the bishop with ...Bb4+ and strikes back in the centre with ...d5.",
      plans: { white: ['Prepare d4 with c3, or play slowly with d3, Re1, Nbd2-f1-g3 and a4', 'Use the c4 bishop, and later Bg5 or Ng5, against f7'], black: ['Castle, then play ...d6, ...a6 and ...Ba7 to keep the bishop safe from d4 and b4', 'Answer an early d4 with ...exd4, ...Bb4+ and ...d5, freeing the position', "Consider ...Be6 or ...Na5 to trade off White's strong light-squared bishop"] },
      responses: [
        { moves: '4.c3 Nf6 5.d4 exd4 6.cxd4 Bb4+', name: 'Main line with d4', note: 'After 7.Bd2 Bxd2+ 8.Nbxd2 d5 Black is equal (see the lesson). 7.Nc3 is a sharp pawn sacrifice that needs separate study.', line: 'main' },
        { moves: '4.c3 Nf6 5.d3', name: 'Giuoco Pianissimo', note: 'The modern main line. Black plays ...d6, ...a6, ...Ba7, castles and often ...h6 to stop Bg5 or Ng5. A long manoeuvring game follows.', line: 'pianissimo' },
        { moves: '4.O-O Nf6 5.d3', name: 'Quiet castling', note: 'Similar plans: ...d6, ...O-O and ...a6. With c3 not yet played, ...Na5 can also be used to trade off the c4 bishop.' },
        { moves: '4.b4', name: 'Evans Gambit', note: 'White offers a pawn for quick development. 4...Bxb4 5.c3 Ba5 is main theory; 4...Bb6 declines safely.', line: 'evans' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'f1c4', san: 'Bc4' },
          { uci: 'f8c5', san: 'Bc5', note: 'Mirrors White: the bishop eyes f2.' },
          { uci: 'c2c3', san: 'c3', note: 'Prepares d4.' },
          { uci: 'g8f6', san: 'Nf6', note: 'Hits e4 at once, so White must spend time defending it.' },
          { uci: 'd2d3', san: 'd3' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'a7a6', san: 'a6', note: 'Makes room: if White plays b4 or d4, the bishop can drop to a7.' },
          { uci: 'a2a4', san: 'a4' },
          { uci: 'c5a7', san: 'Ba7', note: 'Already safe from b4 and d4 tricks.' },
          { uci: 'f1e1', san: 'Re1' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'h2h3', san: 'h3' },
          { uci: 'h7h6', san: 'h6', note: 'Stops Bg5 and Ng5. A long, balanced manoeuvring game lies ahead.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '4.c3 Nf6 5.d4',
          kind: 'Main line',
          summary: 'White builds the ideal centre, and Black breaks it with ...Bb4+, ...Bxd2+ and ...d5. Remember: trade the bishop, then hit e4 before White pushes d5 or e5.',
          moves: [
            { uci: 'c2c3', san: 'c3' },
            { uci: 'g8f6', san: 'Nf6', note: 'Hits e4, so White must decide at once.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'c5b4', san: 'Bb4+', note: 'Develops with check rather than retreating.' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'b4d2', san: 'Bxd2+' },
            { uci: 'b1d2', san: 'Nbxd2' },
            { uci: 'd7d5', san: 'd5', note: "The freeing break: White's centre is challenged before it can advance." },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'd1b3', san: 'Qb3' },
            { uci: 'c6e7', san: 'Nce7', note: 'Defends d5 a second time; after castling, d4 is isolated and Black is fully developed.' }
          ]
        },
        {
          id: 'pianissimo',
          name: '4.c3 Nf6 5.d3 (Giuoco Pianissimo)',
          kind: 'Main line',
          summary: 'The modern slow line. Black plays ...d6, ...a6 and ...Ba7, castles and can offer to trade bishops with ...Be6.',
          moves: [
            { uci: 'c2c3', san: 'c3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd2d3', san: 'd3', note: 'The Pianissimo: White keeps the centre closed for now.' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'a7a6', san: 'a6', note: 'Prepares ...Ba7 so b4 or d4 never gains time on the bishop.' },
            { uci: 'c4b3', san: 'Bb3' },
            { uci: 'c5a7', san: 'Ba7' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'c8e6', san: 'Be6', note: "Offers to trade White's best bishop." }
          ]
        },
        {
          id: 'evans',
          name: '4.b4 Evans Gambit',
          kind: 'Sharp try',
          summary: 'White gives a pawn for time. Taking and retreating to e7, then ...Na5 against the c4 bishop, is a practical way to defuse the attack.',
          moves: [
            { uci: 'b2b4', san: 'b4', note: 'The Evans Gambit: a pawn for quick development and a fast d4.' },
            { uci: 'c5b4', san: 'Bxb4' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'b4e7', san: 'Be7', note: 'A calm retreat that avoids the sharpest lines.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c6a5', san: 'Na5', note: 'Trades off or chases the dangerous c4 bishop.' },
            { uci: 'c4e2', san: 'Be2' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'd1d4', san: 'Qxd4' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'black',
          title: 'The Moller pawn sacrifice 7.Nc3',
          text: 'After 5.d4 exd4 6.cxd4 Bb4+, 7.Nc3 offers a pawn: 7...Nxe4 8.O-O leads to sharp, heavily analysed play. If you do not know it, the calmer 7...d5 is a respected way to return the tension.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'f8c5', 'c2c3', 'g8f6', 'd2d4', 'e5d4', 'c3d4', 'c5b4', 'b1c3']
        },
        { kind: 'Mistake', side: 'black', title: 'Leaving the bishop on c5 to be hit', text: 'In the slow lines, White wants b4 or d4 with gain of time on the c5 bishop. Play ...a6 early so the bishop can drop to a7 and keep its diagonal.' },
        { kind: 'Risk', side: 'black', title: 'The Bg5 pin', text: 'Without ...h6, White can pin the f6 knight with Bg5 and add Nbd2-f1-g3 pressure. A timely ...h6 (once White cannot profit from Bxh6 ideas) keeps the kingside comfortable.' }
      ],
      transpositions: [
        { to: 'b-e5-two-knights', note: 'The Two Knights with 4.d3 Bc5 reaches the same slow Giuoco Pianissimo positions.' }
      ],
      lessons: ['black-vs-e4-2'],
      uncertain: 'The Evans Gambit line 5...Be7 6.d4 Na5 is given as one practical defence; the gambit has a large theory of its own (see the Evans Gambit page).'
    },
    {
      id: 'b-e5-two-knights',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-italian',
      family: 'Italian Game',
      name: 'Italian Game: Two Knights Defence',
      short: 'Two Knights Defence (3...Nf6)',
      aliases: ['Two Knights', 'Prussian Defence'],
      eco: 'C55',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6',
      difficulty: 'Intermediate',
      style: 'Sharp',
      minutes: 16,
      summary: 'Counter-attack e4 at once with 3...Nf6. Livelier than 3...Bc5, but Black must know how to meet 4.Ng5.',
      idea: 'Instead of mirroring, Black hits the e4 pawn. If White attacks f7 with 4.Ng5, Black blocks with ...d5 and, after exd5, plays ...Na5 to chase the bishop, giving a pawn for quick development and the initiative. Against quiet d3 systems, Black develops with ...Be7 or ...Bc5 and plays a normal Italian middlegame.',
      plans: { white: ['Attack f7 with Ng5 and win a pawn after 4...d5 5.exd5', 'Or play quietly with d3, c3, O-O and Re1, steering towards a slow Italian'], black: ['Against 4.Ng5: ...d5, ...Na5, ...h6 and ...e4, using the lead in development for the pawn', 'Against d3 systems: ...Be7 or ...Bc5, ...d6 and ...O-O with a solid centre', 'Against 4.d4: ...exd4 and, after 5.e5, hit back with ...d5'] },
      responses: [
        { moves: '4.Ng5 d5 5.exd5 Na5', name: 'Main line', note: 'Black gives a pawn but gains time: 6.Bb5+ c6 7.dxc6 bxc6 8.Be2 h6 9.Nf3 e4 is long-established theory (see the lesson).', line: 'ng5' },
        { moves: '4.d3', name: 'Quiet Italian', note: 'Black plays 4...Be7 or 4...Bc5 with ...d6 and ...O-O. 4...Bc5 transposes to the Giuoco Pianissimo.', line: 'd3' },
        { moves: '4.d4 exd4 5.e5 d5', name: 'Modern Attack', note: 'The counter-strike 5...d5 6.Bb5 Ne4 gives Black active pieces. Against 5.O-O, taking with 5...Nxe4 is a sound choice.', line: 'd4' },
        { moves: '4.Nc3 Nxe4 5.Nxe4 d5', name: 'Fork trick', note: 'The pawn fork regains the piece: after 6.Bd3 dxe4 7.Bxe4 Bd6 Black has a free and comfortable game.', line: 'nc3' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'f1c4', san: 'Bc4' },
          { uci: 'g8f6', san: 'Nf6', note: 'Attacks e4 rather than copying White.' },
          { uci: 'f3g5', san: 'Ng5', note: 'Targets f7 with knight and bishop.' },
          { uci: 'd7d5', san: 'd5', note: "Blocks the bishop's diagonal." },
          { uci: 'e4d5', san: 'exd5' },
          { uci: 'c6a5', san: 'Na5', note: 'Do not recapture: 5...Nxd5 invites a sacrifice on f7. The knight chases the bishop instead.' },
          { uci: 'c4b5', san: 'Bb5+' },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'd5c6', san: 'dxc6' },
          { uci: 'b7c6', san: 'bxc6', note: 'A pawn down, but Black develops quickly and the g5 knight will be chased.' },
          { uci: 'b5e2', san: 'Be2' },
          { uci: 'h7h6', san: 'h6' },
          { uci: 'g5f3', san: 'Nf3' },
          { uci: 'e5e4', san: 'e4', note: "Gains space with tempo; Black's activity compensates for the pawn." }
        ]
      },
      lines: [
        {
          id: 'ng5',
          name: '4.Ng5 d5 5.exd5 Na5',
          kind: 'Main line',
          summary: 'Black gives a pawn, chases the c4 bishop and then the g5 knight, and gets a lasting initiative. Never recapture 5...Nxd5 without knowing the risks.',
          moves: [
            { uci: 'f3g5', san: 'Ng5' },
            { uci: 'd7d5', san: 'd5', note: "Blocks the bishop's diagonal to f7." },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'c6a5', san: 'Na5', note: 'Chases the bishop instead of recapturing; 5...Nxd5 invites Nxf7.' },
            { uci: 'c4b5', san: 'Bb5+' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd5c6', san: 'dxc6' },
            { uci: 'b7c6', san: 'bxc6' },
            { uci: 'b5e2', san: 'Be2' },
            { uci: 'h7h6', san: 'h6', note: 'Drives the knight back with tempo.' },
            { uci: 'g5f3', san: 'Nf3' },
            { uci: 'e5e4', san: 'e4' },
            { uci: 'f3e5', san: 'Ne5' },
            { uci: 'f8d6', san: 'Bd6', note: 'A pawn down, but active pieces and a lasting initiative.' }
          ]
        },
        {
          id: 'd3',
          name: '4.d3',
          kind: 'Main line',
          summary: 'The modern quiet choice. Black develops ...Be7, castles and plays ...d6, then gains queenside space with ...Na5, ...a6, ...b5 and ...c5.',
          moves: [
            { uci: 'd2d3', san: 'd3', note: 'The modern quiet choice: no early fight for f7.' },
            { uci: 'f8e7', san: 'Be7', note: 'Solid; 4...Bc5 would transpose to the Giuoco Pianissimo.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'c6a5', san: 'Na5', note: 'Chigorin-style: the knight asks the bishop to move.' },
            { uci: 'c4b5', san: 'Bb5' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5a4', san: 'Ba4' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'a4c2', san: 'Bc2' },
            { uci: 'c7c5', san: 'c5', note: 'Queenside space, a Closed Ruy Lopez type of game.' }
          ]
        },
        {
          id: 'd4',
          name: '4.d4 exd4 5.e5 d5',
          kind: 'Alternative',
          summary: 'The Modern Attack. Black hits back in the centre with ...d5 and puts the knight on e4, where it is active and safe.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'd7d5', san: 'd5', note: 'The counter-strike: the bishop on c4 is hit.' },
            { uci: 'c4b5', san: 'Bb5' },
            { uci: 'f6e4', san: 'Ne4', note: 'The knight is active and safe in the centre.' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'c8d7', san: 'Bd7' },
            { uci: 'b5c6', san: 'Bxc6' },
            { uci: 'b7c6', san: 'bxc6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e7', san: 'Be7', note: 'Black castles next with free development.' }
          ]
        },
        {
          id: 'nc3',
          name: '4.Nc3 (fork trick)',
          kind: 'Sideline',
          summary: 'Against the Italian Four Knights, the fork trick ...Nxe4 and ...d5 regains the piece and gives Black an easy game.',
          moves: [
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'f6e4', san: 'Nxe4', note: 'The fork trick: the piece comes back at once.' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'd7d5', san: 'd5', note: 'Forks the bishop and knight.' },
            { uci: 'c4d3', san: 'Bd3' },
            { uci: 'd5e4', san: 'dxe4' },
            { uci: 'd3e4', san: 'Bxe4' },
            { uci: 'f8d6', san: 'Bd6', note: 'Black has a share of the centre and easy development.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: '5...Nxd5 invites the Fried Liver',
          text: 'After 4.Ng5 d5 5.exd5, recapturing with 5...Nxd5 allows 6.Nxf7 Kxf7 7.Qf3+ or the strong 6.d4, with a dangerous attack on the exposed king. 5...Na5 is the main line.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'f3g5', 'd7d5', 'e4d5', 'f6d5', 'g5f7']
        },
        { kind: 'Risk', side: 'black', title: 'A pawn down after 5...Na5', text: 'The main line gives a pawn for development. Black must keep making threats with ...h6, ...e4 and ...Bd6; slow moves leave Black simply a pawn down.' },
        {
          kind: 'Trap',
          side: 'white',
          title: 'The fork trick against 4.Nc3',
          text: 'After 4.Nc3, 4...Nxe4! wins the piece back at once: 5.Nxe4 d5 forks the bishop and knight. Black gets a free, central game.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'b1c3', 'f6e4', 'c3e4', 'd7d5']
        }
      ],
      transpositions: [
        { to: 'b-e5-giuoco-piano', note: '4.d3 Bc5 reaches the Giuoco Pianissimo.' }
      ],
      lessons: ['black-vs-e4-5', 'black-gambits-4'],
      gambits: ['bg-two-knights'],
      uncertain: 'The 4.Ng5 main line involves a pawn sacrifice by Black. It is standard Two Knights theory; the gambit library treats 5...Na5 separately as a gambit entry.'
    },
    {
      id: 'b-e5-scotch',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-scotch',
      family: 'Scotch Game',
      name: 'Scotch Game: 4...Nf6',
      short: 'Schmidt Variation (4...Nf6)',
      aliases: ['Schmidt Variation', 'Scotch: Mieses lines'],
      eco: 'C45',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'd2d4', 'e5d4', 'f3d4', 'g8f6'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.Nxd4 Nf6',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 14,
      summary: 'Meet the Scotch by attacking e4 with 4...Nf6, accepting doubled c-pawns for fast development in the Mieses lines.',
      idea: "After 4...Nf6, White's main reply 5.Nxc6 bxc6 6.e5 gains space and drives the knight, but Black's queen on e7 attacks e5 and ties White's queen to its defence, and the bishop goes to a6 to pin the c4 pawn. Black's doubled pawns support a later ...d5 or ...d6, and the half-open b-file gives long-term play.",
      plans: { white: ['Play e5 to drive away the f6 knight, then c4 to chase it again', 'Develop with Qe2, b3 and Bb2 or g3 and Bg2, and target the doubled c-pawns later'], black: ['Pressure e5 with ...Qe7, ...Nd5 and later ...d6 or ...f6', 'Develop the bishop to a6 against c4, then castle long or fianchetto with ...g6 and ...Bg7', 'Use the half-open b-file and the bishop pair'] },
      responses: [
        { moves: '5.Nxc6 bxc6 6.e5 Qe7', name: 'Mieses Variation', note: "The main line: 7.Qe2 Nd5 8.c4 Ba6, and Black hits the c4 pawn while White's queen is tied to e5.", line: 'mieses' },
        { moves: '5.Nc3 Bb4', name: 'Scotch Four Knights', note: 'Black pins the knight and threatens e4; after 6.Nxc6 bxc6 7.Bd3 d5 Black has a sound centre.', line: 'four-knights' },
        { moves: '5.Nxc6 bxc6 6.Bd3 d5', name: 'Quiet 6.Bd3', note: 'Black strikes in the centre at once and develops freely; the doubled pawns are not a worry.', line: 'bd3' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'e5d4', san: 'exd4' },
          { uci: 'f3d4', san: 'Nxd4' },
          { uci: 'g8f6', san: 'Nf6', note: 'Develops and attacks e4.' },
          { uci: 'd4c6', san: 'Nxc6' },
          { uci: 'b7c6', san: 'bxc6', note: 'Capturing towards the centre: the c6 pawn will support ...d5.' },
          { uci: 'e4e5', san: 'e5' },
          { uci: 'd8e7', san: 'Qe7', note: 'Hits e5, so White must defend it with the queen, which blocks the f1 bishop.' },
          { uci: 'd1e2', san: 'Qe2' },
          { uci: 'f6d5', san: 'Nd5', note: 'The knight finds a central post.' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'c8a6', san: 'Ba6', note: 'Pins the c4 pawn to the queen on e2.' },
          { uci: 'b2b3', san: 'b3' },
          { uci: 'g7g6', san: 'g6', note: 'Prepares ...Bg7 to attack e5 again.' }
        ]
      },
      lines: [
        {
          id: 'mieses',
          name: '5.Nxc6 bxc6 6.e5 (Mieses)',
          kind: 'Main line',
          summary: 'White chases the knight with e5 and c4; Black pins e5 with ...Qe7 and the c4 pawn with ...Ba6, then plays ...g6 and ...Bg7.',
          moves: [
            { uci: 'd4c6', san: 'Nxc6' },
            { uci: 'b7c6', san: 'bxc6', note: 'Capture towards the centre: c6 supports a later ...d5.' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'd8e7', san: 'Qe7', note: 'Pins the e5 pawn against the king, so White must defend it.' },
            { uci: 'd1e2', san: 'Qe2' },
            { uci: 'f6d5', san: 'Nd5' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'c8a6', san: 'Ba6', note: "Pins the c4 pawn to White's queen." },
            { uci: 'b2b3', san: 'b3' },
            { uci: 'g7g6', san: 'g6', note: 'Prepares ...Bg7 to attack e5 again.' }
          ]
        },
        {
          id: 'four-knights',
          name: '5.Nc3 Bb4 (Scotch Four Knights)',
          kind: 'Alternative',
          summary: 'Black pins the knight that defends e4 and strikes with ...d5. A sound, classical game.',
          moves: [
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'f8b4', san: 'Bb4', note: 'Pins the knight that defends e4.' },
            { uci: 'd4c6', san: 'Nxc6' },
            { uci: 'b7c6', san: 'bxc6' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'd7d5', san: 'd5', note: 'Strikes in the centre at once.' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'c6d5', san: 'cxd5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'c7c6', san: 'c6', note: "Supports d5; Black's centre is sound." }
          ]
        },
        {
          id: 'bd3',
          name: '5.Nxc6 bxc6 6.Bd3',
          kind: 'Sideline',
          summary: 'Without e5, White lets Black occupy the centre with ...d5. Develop simply and castle.',
          moves: [
            { uci: 'd4c6', san: 'Nxc6' },
            { uci: 'b7c6', san: 'bxc6' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'd7d5', san: 'd5', note: 'White did not push e5, so Black takes the centre.' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'c6d5', san: 'cxd5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e7', san: 'Be7', note: 'Simple development; ...O-O and ...c6 or ...Bb7 follow.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Recapturing 5...dxc6',
          text: 'After 5.Nxc6, 5...dxc6 is playable but allows 6.Qxd8+ Kxd8, a queenless position where Black has lost the right to castle. Most players prefer 5...bxc6, which keeps queens on and supports ...d5.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'd2d4', 'e5d4', 'f3d4', 'g8f6', 'd4c6', 'd7c6', 'd1d8', 'e8d8']
        },
        { kind: 'Risk', side: 'black', title: 'The shut-in f8 bishop', text: 'With the queen on e7, the f8 bishop has no easy way out. Plan ...g6 and ...Bg7, or a queen move off the f8-a3 diagonal, before the bishop becomes a spectator.' },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Retreating the d5 knight to f6',
          text: 'In the Mieses line with queens on e7 and e2, ...Nf6? allows exf6, uncovering the queen exchange, and Black loses a piece for a pawn. The knight belongs on d5 or b6.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'd2d4', 'e5d4', 'f3d4', 'g8f6', 'd4c6', 'b7c6', 'e4e5', 'd8e7', 'd1e2', 'f6d5', 'c2c4', 'd5f6', 'e5f6']
        }
      ],
      transpositions: [
        { to: 'b-e5-scotch-classical', note: 'Both lines start with 3...exd4 4.Nxd4; 4...Bc5 instead of 4...Nf6 leads to the Classical Variation.' }
      ],
      lessons: ['black-vs-e4-15', 'white-openings-6', 'strategy-1']
    },
    {
      id: 'b-ruy-berlin',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-ruy-lopez',
      family: 'Ruy Lopez',
      name: 'Ruy Lopez: Berlin Defence',
      short: 'Berlin Defence (3...Nf6)',
      aliases: ['Berlin Wall', 'Berlin'],
      eco: 'C67',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'g8f6'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6',
      difficulty: 'Advanced',
      style: 'Solid',
      minutes: 18,
      summary: 'The ultra-solid answer to the Ruy Lopez: hit e4 at once and, if White allows it, head for the famous queenless Berlin endgame.',
      idea: "Black attacks e4 instead of asking the bishop a question. After 4.O-O Nxe4 5.d4 Nd6 6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8, queens are off. Black has doubled pawns and a king that cannot castle, but owns the bishop pair and has no real weaknesses; White's kingside pawn majority is hard to turn into a win.",
      plans: { white: ['Steer for the endgame and use the kingside majority with h3, g4 and f4', 'Avoid it with 4.d3, keeping pieces on for a slow Italian-style game'], black: ['In the endgame, bring the king to e8 or c8, play ...h6 and ...Be6 or ...Be7, and use the bishop pair', 'Against 4.d3: ...Bc5, ...d6, ...O-O and often ...Ne7-g6 or ...a6'] },
      responses: [
        { moves: '4.O-O Nxe4 5.d4 Nd6', name: 'Berlin endgame', note: "6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8 is the main line; the bishop pair and a solid structure balance Black's damaged pawns.", line: 'endgame' },
        { moves: '4.O-O Nxe4 5.Re1 Nd6', name: '5.Re1', note: '6.Nxe5 Be7 7.Bf1 Nxe5 8.Rxe5 O-O: Black has a sound, rather drawish position and develops with ...Bf6 and ...Re8.', line: 're1' },
        { moves: '4.d3 Bc5', name: 'Anti-Berlin 4.d3', note: 'The usual way to keep pieces on. Black plays ...d6, ...O-O and ...Ne7-g6 or ...a6, with a solid Italian-type position.', line: 'd3' },
        { moves: '4.Nc3 Bb4', name: 'Spanish Four Knights', note: 'Symmetrical development with ...O-O and ...d6 is simple and solid; 4...Nd4 is a sharper, well-respected alternative.', line: 'nc3' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'f1b5', san: 'Bb5' },
          { uci: 'g8f6', san: 'Nf6', note: 'Counter-attacks e4 instead of questioning the bishop.' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f6e4', san: 'Nxe4', note: "Takes the pawn: Black's knight will retreat to d6 once attacked." },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'e4d6', san: 'Nd6', note: 'Hits the bishop on b5.' },
          { uci: 'b5c6', san: 'Bxc6' },
          { uci: 'd7c6', san: 'dxc6', note: 'Recapturing towards the centre opens the c8 bishop.' },
          { uci: 'd4e5', san: 'dxe5' },
          { uci: 'd6f5', san: 'Nf5' },
          { uci: 'd1d8', san: 'Qxd8+' },
          { uci: 'e8d8', san: 'Kxd8', note: 'The Berlin endgame: no castling, but two bishops and a sturdy position.' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd8e8', san: 'Ke8', note: 'The king returns to e8, and Black will play ...h6 and develop the bishops.' }
        ]
      },
      lines: [
        {
          id: 'endgame',
          name: '4.O-O Nxe4 5.d4 Nd6 (Berlin endgame)',
          kind: 'Main line',
          summary: 'Queens come off early. Black has the bishop pair and no weaknesses, White a kingside majority. Bring the king to e8 and play ...h6.',
          moves: [
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f6e4', san: 'Nxe4' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e4d6', san: 'Nd6', note: 'Hits the b5 bishop.' },
            { uci: 'b5c6', san: 'Bxc6' },
            { uci: 'd7c6', san: 'dxc6' },
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'd6f5', san: 'Nf5' },
            { uci: 'd1d8', san: 'Qxd8+' },
            { uci: 'e8d8', san: 'Kxd8', note: 'Queens are off: no castling, but two bishops and no weaknesses.' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd8e8', san: 'Ke8' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'h7h6', san: 'h6', note: "Takes g5 from White's pieces before developing the bishops." }
          ]
        },
        {
          id: 're1',
          name: '4.O-O Nxe4 5.Re1',
          kind: 'Alternative',
          summary: 'White regains the pawn on e5. Black blocks the e-file with ...Be7, trades knights and develops with ...Bf6 and ...Re8 for a level game.',
          moves: [
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f6e4', san: 'Nxe4' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'e4d6', san: 'Nd6' },
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'f8e7', san: 'Be7', note: 'Blocks the e-file before anything else.' },
            { uci: 'b5f1', san: 'Bf1' },
            { uci: 'c6e5', san: 'Nxe5' },
            { uci: 'e1e5', san: 'Rxe5' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e7f6', san: 'Bf6', note: 'Hits the e5 rook and develops with tempo.' },
            { uci: 'e5e1', san: 'Re1' },
            { uci: 'f8e8', san: 'Re8', note: 'Level and solid.' }
          ]
        },
        {
          id: 'd3',
          name: '4.d3 (Anti-Berlin)',
          kind: 'Main line',
          summary: 'White keeps pieces on. Black develops ...Bc5, castles, plays ...d6 and reroutes the knight ...Ne7-g6.',
          moves: [
            { uci: 'd2d3', san: 'd3', note: 'The Anti-Berlin: White keeps pieces on.' },
            { uci: 'f8c5', san: 'Bc5' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'c6e7', san: 'Ne7', note: 'Heading for g6, where the knight eyes f4 and supports ...h6 or ...c6.' },
            { uci: 'd3d4', san: 'd4' },
            { uci: 'c5b6', san: 'Bb6', note: 'Keeps the bishop aimed at d4 and f2.' }
          ]
        },
        {
          id: 'nc3',
          name: '4.Nc3 Bb4 (Spanish Four Knights)',
          kind: 'Sideline',
          summary: 'Symmetrical development. Against the Bg5 pin, ...Bxc3 and ...Qe7 prepare ...Nd8-e6.',
          moves: [
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'f8b4', san: 'Bb4', note: 'Symmetrical and solid: the Spanish Four Knights.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'b4c3', san: 'Bxc3' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'd8e7', san: 'Qe7', note: 'Prepares ...Nd8-e6 to break the pin.' }
          ]
        }
      ],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'The king in the endgame', text: 'In the Berlin endgame Black cannot castle. Bring the king to e8 or c8 and play ...h6 early so White cannot gain time with Bg5 or a knight on g5.' },
        { kind: 'Risk', side: 'black', title: 'A slow kingside squeeze', text: "White's plan is h3, g4, Nf4 or Ne4 and sometimes an e6 break. If Black's bishops stay passive, the kingside majority becomes dangerous; activate them with ...Be6, ...Be7 and ...h5 or ...g6 ideas." },
        {
          kind: 'Trap',
          side: 'white',
          title: '6.Nxe5? in the Anti-Berlin',
          text: 'After 4.d3 Bc5 5.Bxc6 dxc6, the pawn grab 6.Nxe5? runs into 6...Qd4!, hitting the knight and threatening mate on f2. White loses material.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'g8f6', 'd2d3', 'f8c5', 'b5c6', 'd7c6', 'f3e5', 'd8d4']
        }
      ],
      lessons: ['strategy-8', 'strategy-1']
    },
    {
      id: 'b-ruy-closed',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-ruy-lopez',
      family: 'Ruy Lopez',
      name: 'Ruy Lopez: Closed Defence (Breyer and Chigorin plans)',
      short: 'Closed Defence (5...Be7)',
      aliases: ['Closed Ruy Lopez', 'Closed Spanish'],
      eco: 'C84',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'a7a6', 'b5a4', 'g8f6', 'e1g1', 'f8e7'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7',
      difficulty: 'Advanced',
      style: 'Positional',
      minutes: 22,
      summary: 'The classical main line: Black keeps a sturdy pawn on e5 and fights a long, rich manoeuvring battle.',
      idea: "Black asks the bishop a question with ...a6, develops ...Nf6 and ...Be7, then gains queenside space with ...b5 and supports e5 with ...d6. After White's c3, h3 and d4, Black regroups: the Breyer reroutes the knight ...Nb8-d7 to support e5, while the Chigorin plays ...Na5 and ...c5. Both keep the e5 strongpoint and aim for queenside play.",
      plans: { white: ['Build the ideal centre with c3, h3 and d4, then manoeuvre Nbd2-f1-g3', "Attack on the kingside, or play a4 to probe Black's queenside pawns"], black: ['Hold e5 with ...d6, ...Re8, ...Bf8 and, in the Breyer, ...Nbd7', 'Gain queenside space with ...b5 and ...c5, via ...Na5 (Chigorin) or ...Nb8-d7 (Breyer)', 'If White pushes d4 before c3, look for ...Nxd4 and the ...c5-c4 trap against the b3 bishop'] },
      responses: [
        { moves: '6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3', name: 'Main line', note: 'Now 9...Nb8 is the Breyer, 9...Na5 10.Bc2 c5 the Chigorin, and 9...Bb7 the Zaitsev. Each keeps e5 and prepares queenside play.', line: 'breyer' },
        { moves: '6.Bxc6 dxc6', name: 'Delayed Exchange', note: 'Black has the bishop pair. 7.Nxe5 Qd4 wins the pawn back; after 7.d3, ...Nd7 and ...O-O give a solid game.', line: 'dere' },
        { moves: '6.d3 b5 7.Bb3 d6', name: 'Slow 6.d3', note: 'White avoids the main lines. Black castles and plays ...Na5 or ...Bb7, keeping the e5 pawn solid.', line: 'd3' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'f1b5', san: 'Bb5' },
          { uci: 'a7a6', san: 'a6', note: 'Asks the bishop to decide.' },
          { uci: 'b5a4', san: 'Ba4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f8e7', san: 'Be7', note: 'Calm development: Black will castle and keep e5.' },
          { uci: 'f1e1', san: 'Re1' },
          { uci: 'b7b5', san: 'b5' },
          { uci: 'a4b3', san: 'Bb3' },
          { uci: 'd7d6', san: 'd6', note: 'Supports e5 and opens the c8 bishop.' },
          { uci: 'c2c3', san: 'c3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'h2h3', san: 'h3', note: 'Stops ...Bg4 before White plays d4.' },
          { uci: 'c6b8', san: 'Nb8', note: 'The Breyer: the knight reroutes to d7 to support e5, freeing the c-pawn and the bishop for b7.' }
        ]
      },
      lines: [
        {
          id: 'breyer',
          name: '6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 Nb8 (Breyer)',
          kind: 'Main line',
          summary: 'The Breyer reroutes the knight to d7 to support e5 and frees the c-pawn and the b7 square for the bishop.',
          moves: [
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'a4b3', san: 'Bb3' },
            { uci: 'd7d6', san: 'd6', note: 'Supports e5; 7...O-O instead allows 8.c3 d5, the Marshall Attack.' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'c6b8', san: 'Nb8', note: 'The Breyer: the knight reroutes to d7.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'c8b7', san: 'Bb7' },
            { uci: 'b3c2', san: 'Bc2' },
            { uci: 'f8e8', san: 'Re8', note: 'Next ...Bf8: e5 is firmly held and ...c5 can follow.' }
          ]
        },
        {
          id: 'chigorin',
          name: '9...Na5 (Chigorin)',
          kind: 'Alternative',
          summary: 'The knight hits the bishop, ...c5 gains queenside space, and ...Qc7 supports e5. After the exchange on d4, the knight returns to c6.',
          moves: [
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'a4b3', san: 'Bb3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'c6a5', san: 'Na5', note: 'The Chigorin: the knight hits the bishop and frees the c-pawn.' },
            { uci: 'b3c2', san: 'Bc2' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd8c7', san: 'Qc7', note: 'Supports e5 and lines up on the c-file.' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'c5d4', san: 'cxd4', note: 'Opens the c-file; after 13.cxd4 the knight returns to c6 to hit d4.' }
          ]
        },
        {
          id: 'dere',
          name: '6.Bxc6 (Delayed Exchange)',
          kind: 'Sideline',
          summary: 'White gives up the bishop pair to damage the pawns. Black holds e5 with ...Nd7 and ...f6 and keeps the bishops.',
          moves: [
            { uci: 'a4c6', san: 'Bxc6', note: 'The Delayed Exchange: White gives up the bishop for structure.' },
            { uci: 'd7c6', san: 'dxc6' },
            { uci: 'd2d3', san: 'd3', note: '7.Nxe5? Qd4 regains the pawn.' },
            { uci: 'f6d7', san: 'Nd7', note: 'Covers e5 and frees f6 for the pawn.' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd2c4', san: 'Nc4' },
            { uci: 'f7f6', san: 'f6', note: 'e5 is solid; Black has the bishop pair.' }
          ]
        },
        {
          id: 'd3',
          name: '6.d3',
          kind: 'Sideline',
          summary: 'A quiet system avoiding the main lines. Black gains space with ...b5, keeps b5 with ...Bd7 against a4, and castles.',
          moves: [
            { uci: 'd2d3', san: 'd3', note: 'A quiet system that avoids the main lines.' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'a4b3', san: 'Bb3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'a2a4', san: 'a4' },
            { uci: 'c8d7', san: 'Bd7', note: 'Holds b5 without weakening the queenside.' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'e8g8', san: 'O-O', note: 'Black is solid and can choose ...Na5 or ...h6 later.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'white',
          title: "Noah's Ark: d4 before c3",
          text: 'If White plays d4 before c3 and recaptures on d4 with the queen, ...c5 and ...c4 trap the b3 bishop. This is why White normally plays c3 first.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'a7a6', 'b5a4', 'g8f6', 'e1g1', 'f8e7', 'f1e1', 'b7b5', 'a4b3', 'd7d6', 'd2d4', 'c6d4', 'f3d4', 'e5d4', 'd1d4', 'c7c5']
        },
        { kind: 'Risk', side: 'black', title: 'Passive defence of e5', text: "If Black only holds e5 with ...Re8 and ...Bf8 and never starts queenside play, White's Nbd2-f1-g3 and Nf5 build a dangerous kingside attack. Prepare ...c5, ...b4 or ...d5 in time." },
        { kind: 'Mistake', side: 'black', title: 'The Chigorin knight left on a5', text: 'After ...Na5 and ...c5, the knight must come back into play via c6 or c4. Left on a5, it is a poor piece and White can play b3 to keep it out.' }
      ],
      lessons: ['black-vs-e4-7'],
      gambits: ['bg-marshall']
    },
    {
      id: 'b-petroff',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-petroff',
      family: 'Petroff Defence',
      name: 'Petroff Defence',
      short: 'Classical lines (3.Nxe5 and others)',
      aliases: ['Classical Petroff', 'Petrov Defence'],
      eco: 'C42',
      defining: ['e2e4', 'e7e5', 'g1f3', 'g8f6'],
      moves: '1.e4 e5 2.Nf3 Nf6',
      difficulty: 'Intermediate',
      style: 'Solid',
      minutes: 14,
      summary: 'Counter-attack e4 instead of defending e5. Famously solid, often symmetrical, and very hard for White to crack.',
      idea: "Black copies the knight move and accepts open, symmetrical positions. After 3.Nxe5 d6 4.Nf3 Nxe4, Black's knight sits actively in the centre, supported by ...d5. The plan is quick development: ...Be7 or ...Bd6, ...Nc6, castling, and ...Bg4 or ...Bf5 to contest the centre.",
      plans: { white: ['Use the extra tempo: c4 to undermine the e4 knight, then Re1 and Nc3', 'In the 5.Nc3 lines, castle long and attack the king'], black: ['Play 3...d6 before taking on e4: copying with 3...Nxe4 is a mistake', 'Support the e4 knight with ...d5, then develop ...Be7, ...Nc6, ...O-O and ...Bg4', 'Against 5.Nc3, exchange knights, castle short and keep the position compact'] },
      responses: [
        { moves: '3.Nxe5 d6 4.Nf3 Nxe4 5.d4', name: 'Classical main line', note: "5...d5 6.Bd3 Nc6 (or 6...Bd6) 7.O-O Be7: Black's centralised knight and quick development hold the balance.", line: 'classical' },
        { moves: '3.Nxe5 d6 4.Nf3 Nxe4 5.Nc3', name: '5.Nc3', note: '5...Nxc3 6.dxc3 Be7: White often castles long and attacks. Black castles short, develops ...Nc6 or ...Nd7 and keeps things compact.', line: 'nc3' },
        { moves: '3.d4 Nxe4 4.Bd3 d5', name: 'Steinitz 3.d4', note: "Black's knight is strongly placed; after 5.Nxe5 Nd7 Black challenges the e5 knight and develops normally." },
        { moves: '3.Nc3 Nc6', name: 'Four Knights', note: "Transposes to the Four Knights Game, where Black's ...Bb4 lines are solid.", line: 'three-knights' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g8f6', san: 'Nf6', note: 'Counter-attacks e4 instead of defending e5.' },
          { uci: 'f3e5', san: 'Nxe5' },
          { uci: 'd7d6', san: 'd6', note: 'First drive the knight back; taking on e4 at once is a known mistake.' },
          { uci: 'e5f3', san: 'Nf3' },
          { uci: 'f6e4', san: 'Nxe4', note: 'Now the pawn is regained safely.' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd6d5', san: 'd5', note: 'Supports the knight on its central outpost.' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'c2c4', san: 'c4', note: "Undermines the knight's support." },
          { uci: 'c6b4', san: 'Nb4', note: 'Hits the d3 bishop, so White must spend a move on it.' },
          { uci: 'd3e2', san: 'Be2' },
          { uci: 'e8g8', san: 'O-O', note: 'Main theory: Black is solid and well developed.' }
        ]
      },
      lines: [
        {
          id: 'classical',
          name: '3.Nxe5 d6 4.Nf3 Nxe4 5.d4',
          kind: 'Main line',
          summary: 'The classical main line. Black supports the e4 knight with ...d5, develops ...Bd6 or ...Be7 and ...Nc6, and meets c4 with ...c6 or ...Nb4.',
          moves: [
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'd7d6', san: 'd6', note: 'Drive the knight away first.' },
            { uci: 'e5f3', san: 'Nf3' },
            { uci: 'f6e4', san: 'Nxe4' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd6d5', san: 'd5', note: 'Supports the central knight.' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'f8d6', san: 'Bd6', note: 'The symmetrical development, aiming at h2.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'c7c6', san: 'c6', note: 'Keeps d5 firm against the c4 lever.' }
          ]
        },
        {
          id: 'nc3',
          name: '5.Nc3 Nxc3 6.dxc3',
          kind: 'Alternative',
          summary: 'White trades knights and often castles long to attack. Black keeps the position compact and chooses a safe side for the king.',
          moves: [
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e5f3', san: 'Nf3' },
            { uci: 'f6e4', san: 'Nxe4' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e4c3', san: 'Nxc3', note: 'Trades knights at once.' },
            { uci: 'd2c3', san: 'dxc3' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'c8e6', san: 'Be6' },
            { uci: 'e1c1', san: 'O-O-O' },
            { uci: 'd8d7', san: 'Qd7', note: 'White has castled long; Black keeps the position compact and chooses a side for the king later.' }
          ]
        },
        {
          id: 'qe2',
          name: '5.Qe2 Qe7',
          kind: 'Sideline',
          summary: 'White pins the knight; 5...Qe7 is the only safe reply and leads to a level, quiet ending after the queen trade.',
          moves: [
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e5f3', san: 'Nf3' },
            { uci: 'f6e4', san: 'Nxe4' },
            { uci: 'd1e2', san: 'Qe2', note: 'Pins the knight on the open e-file.' },
            { uci: 'd8e7', san: 'Qe7', note: 'The only safe reply: it blocks the pin.' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'e4f6', san: 'Nf6' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'e7e2', san: 'Qxe2+' },
            { uci: 'f1e2', san: 'Bxe2' },
            { uci: 'f8e7', san: 'Be7', note: 'A level, quiet endgame.' }
          ]
        },
        {
          id: 'three-knights',
          name: '3.Nc3 Nc6 (Four Knights)',
          kind: 'Sideline',
          summary: 'Black can enter the Four Knights Game. After 4.Bb5 Bb4 the position is the symmetrical Spanish Four Knights.',
          moves: [
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'b8c6', san: 'Nc6', note: 'Into the Four Knights Game.' },
            { uci: 'f1b5', san: 'Bb5' },
            { uci: 'f8b4', san: 'Bb4', note: 'The Spanish Four Knights, mirrored and solid.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'd7d6', san: 'd6', note: "Same position as the Berlin's 4.Nc3 line." }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: 'Copying with 3...Nxe4?',
          text: 'After 3.Nxe5, the copycat 3...Nxe4? 4.Qe2 leaves Black in trouble: the e4 knight cannot move without a discovered check, and 4...Qe7 5.Qxe4 d6 only limits the damage. Play 3...d6 first.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'g8f6', 'f3e5', 'f6e4', 'd1e2']
        },
        {
          kind: 'Trap',
          side: 'black',
          title: 'The pin after 5.Qe2',
          text: 'After 3.Nxe5 d6 4.Nf3 Nxe4 5.Qe2, the knight is pinned on the open e-file. 5...Qe7 is required; after 5...d5? 6.d3 the knight is lost for a pawn.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'g8f6', 'f3e5', 'd7d6', 'e5f3', 'f6e4', 'd1e2', 'd6d5', 'd2d3']
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'The Cochrane Gambit 4.Nxf7',
          text: 'After 3.Nxe5 d6, 4.Nxf7 Kxf7 gives White two pawns and attacking chances for the knight. It is rare and considered doubtful, but Black must develop carefully and bring the king to safety.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'g8f6', 'f3e5', 'd7d6', 'e5f7', 'e8f7']
        }
      ],
      transpositions: [
        { to: 'b-ruy-berlin', note: '3.Nc3 Nc6 4.Bb5 Bb4 5.O-O O-O 6.d3 d6 reaches the Spanish Four Knights position covered under the Berlin (4.Nc3).' },
        { to: 'b-petroff-vs-d4', note: '3.d4 is covered as its own variation: there 3...Nxe4 is played at once.' }
      ],
      lessons: ['black-vs-e4-1']
    },
    {
      id: 'b-sicilian-najdorf',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-sicilian',
      family: 'Sicilian Defence',
      name: 'Sicilian: Najdorf Variation',
      short: 'Najdorf Variation (5...a6)',
      aliases: ['Najdorf Sicilian'],
      eco: 'B90',
      defining: ['e2e4', 'c7c5', 'g1f3', 'd7d6', 'd2d4', 'c5d4', 'f3d4', 'g8f6', 'b1c3', 'a7a6'],
      moves: '1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6',
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 28,
      summary: 'The most famous Sicilian: a small pawn move that keeps every option open and leads to rich, double-edged play.',
      idea: '5...a6 stops Nb5 and Bb5 and prepares ...e5 or ...e6 and ...b5. Against the English Attack, Black often plays ...e5, gaining space and kicking the d4 knight, then fights for the d5 square with ...Be6 and ...Nbd7. Black accepts a backward d6 pawn for active pieces and queenside counterplay along the c-file.',
      plans: { white: ['English Attack: Be3, f3, Qd2, O-O-O and a g4-g5 pawn storm', 'Classical: Be2, O-O and f4, or the sharp 6.Bg5 followed by f4'], black: ['Choose a structure: ...e5 (space and control of d5) or ...e6 (flexible, Scheveningen-type)', 'Counter-attack with ...b5-b4, ...Rc8 and pressure on the c-file', 'Control d5 with ...Be6 and ...Nbd7; once ...d5 can be played safely, Black is usually fine'] },
      responses: [
        { moves: '6.Be3 e5 7.Nb3', name: 'English Attack', note: '7...Be6 8.f3 Be7 9.Qd2 O-O 10.O-O-O Nbd7: opposite-side castling and a race. 6...Ng4 and 6...e6 are good alternatives.', line: 'english' },
        { moves: '6.Bg5 e6', name: '6.Bg5', note: 'The sharpest test. After 7.f4, Black chooses between ...Be7, ...Qc7 and the Poisoned Pawn ...Qb6; each needs careful study.', line: 'bg5' },
        { moves: '6.Be2 e5 7.Nb3 Be7', name: 'Opocensky 6.Be2', note: 'Calm: Black castles, plays ...Be6 and fights for d5. The d6 pawn is backward but well defended.', line: 'be2' },
        { moves: '6.Bc4 e6', name: 'Fischer-Sozin', note: '6...e6 blunts the bishop; Black follows with ...b5 or ...Nbd7-c5, and must watch for sacrifices on e6.', line: 'bc4' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'f3d4', san: 'Nxd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'a7a6', san: 'a6', note: 'Controls b5 and keeps every option open.' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'e7e5', san: 'e5', note: 'Gains space and kicks the d4 knight; the d5 square is the price.' },
          { uci: 'd4b3', san: 'Nb3' },
          { uci: 'c8e6', san: 'Be6', note: 'Controls d5 at once.' },
          { uci: 'f2f3', san: 'f3', note: 'Supports e4 and prepares g4.' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'd1d2', san: 'Qd2' },
          { uci: 'e8g8', san: 'O-O', note: 'Black castles short; White will castle long and both sides race.' }
        ]
      },
      lines: [
        {
          id: 'english',
          name: '6.Be3 e5 (English Attack)',
          kind: 'Main line',
          summary: 'Black kicks the knight, fights for d5 with ...Be6 and ...Nbd7, castles short and races with ...b5 against g4.',
          moves: [
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'e7e5', san: 'e5', note: 'Gains space and kicks the knight; d5 is the price.' },
            { uci: 'd4b3', san: 'Nb3' },
            { uci: 'c8e6', san: 'Be6', note: 'Fights for d5 at once.' },
            { uci: 'f2f3', san: 'f3' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1c1', san: 'O-O-O' },
            { uci: 'b8d7', san: 'Nbd7', note: 'Covers c5 and supports a later ...d5.' },
            { uci: 'g2g4', san: 'g4' },
            { uci: 'b7b5', san: 'b5', note: 'Opposite-side castling: both sides race with their pawns.' }
          ]
        },
        {
          id: 'bg5',
          name: '6.Bg5 e6 7.f4',
          kind: 'Sharp try',
          summary: 'The sharpest test. The classical 7...Be7 with ...Qc7 and ...Nbd7 is solid; the Poisoned Pawn 7...Qb6 needs deep preparation.',
          moves: [
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'e7e6', san: 'e6', note: 'Prevents Nd5 and keeps the knight on f6 well protected.' },
            { uci: 'f2f4', san: 'f4' },
            { uci: 'f8e7', san: 'Be7', note: 'The classical reply; 7...Qb6 is the Poisoned Pawn.' },
            { uci: 'd1f3', san: 'Qf3' },
            { uci: 'd8c7', san: 'Qc7' },
            { uci: 'e1c1', san: 'O-O-O' },
            { uci: 'b8d7', san: 'Nbd7', note: 'Black is ready for ...b5 and ...Bb7.' }
          ]
        },
        {
          id: 'be2',
          name: '6.Be2 e5',
          kind: 'Alternative',
          summary: 'A calm system. Black kicks the knight, castles and fights for d5 with ...Be6; the backward d6 pawn is well defended.',
          moves: [
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e7e5', san: 'e5', note: 'Space and a kick for the knight.' },
            { uci: 'd4b3', san: 'Nb3' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'c8e6', san: 'Be6', note: 'Control of d5 is the key to the position.' }
          ]
        },
        {
          id: 'bc4',
          name: '6.Bc4 e6 (Fischer-Sozin)',
          kind: 'Alternative',
          summary: 'Black blunts the bishop with ...e6 and gains space with ...b5. Watch for sacrifices on e6 while the king is in the centre.',
          moves: [
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'e7e6', san: 'e6', note: "Blunts the bishop's diagonal towards f7." },
            { uci: 'c4b3', san: 'Bb3' },
            { uci: 'b7b5', san: 'b5', note: 'Gains space and threatens ...b4 against the e4 defender.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e7', san: 'Be7', note: 'Develops before committing the king; watch for sacrifices on e6.' }
          ]
        }
      ],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'Losing the race in the English Attack', text: "With kings on opposite wings, one slow move can decide the game. Count tempi: Black's ...b5-b4 and ...Rc8 must arrive before White's g4-g5 breaks through." },
        { kind: 'Risk', side: 'black', title: 'Sacrifices on e6, d5 and b5', text: 'With ...e6 played and the king in the centre, White often sacrifices on e6, d5 or b5 (Nxe6, Nd5, Nxb5) to open lines. Before each ...b5 or ...Qc7, check what these sacrifices would do.' },
        { kind: 'Mistake', side: 'black', title: 'Giving up d5 after ...e5', text: 'After ...e5 the d5 square is a hole. If Black trades the light-squared bishop carelessly or allows Bxf6 followed by Nd5, a white knight can sit on d5 for the rest of the game.' }
      ],
      transpositions: [
        { to: 'b-sicilian-scheveningen', note: '6.Be2 e6 or 6.Be3 e6 leads to Scheveningen structures with pawns on d6 and e6.' }
      ],
      lessons: ['attack-7']
    },
    {
      id: 'b-sicilian-classical',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-sicilian',
      family: 'Sicilian Defence',
      name: 'Sicilian: Classical Variation (vs the Richter-Rauzer)',
      short: 'Classical Variation (2...Nc6 and 5...d6)',
      aliases: ['Classical Sicilian'],
      eco: 'B60',
      defining: ['e2e4', 'c7c5', 'g1f3', 'b8c6', 'd2d4', 'c5d4', 'f3d4', 'g8f6', 'b1c3', 'd7d6'],
      moves: '1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 d6',
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 18,
      summary: 'A natural Sicilian: knights out first, then ...d6. Flexible, sound and less theory-heavy than the Najdorf.',
      idea: "Black develops ...Nc6 and ...Nf6 before deciding on a structure. The main test is the Richter-Rauzer, 6.Bg5, which threatens to double Black's pawns with Bxf6. Black answers with ...e6, ...a6 and ...Bd7, keeping the king in the centre for a while and countering with ...b5 when White castles long.",
      plans: { white: ['Richter-Rauzer: Bg5, Qd2 and O-O-O, then f4 and pressure in the centre', 'Sozin: Bc4 aiming at e6 and f7, often with Be3, Qe2 and O-O-O'], black: ['Against Bg5: ...e6, ...a6, ...Bd7 and ...b5, with ...Be7 and often ...h6 to question the bishop', 'Against Bc4: ...Qb6 to unsettle the d4 knight, or ...e6 with ...Be7 and ...a6', 'Exchange on d4 with ...Nxd4 at a good moment to ease the position'] },
      responses: [
        { moves: '6.Bg5 e6 7.Qd2', name: 'Richter-Rauzer', note: '7...a6 8.O-O-O Bd7 9.f4 b5 (or 8...h6): Black accepts some risk in the centre for queenside counterplay.', line: 'rauzer-a6' },
        { moves: '6.Bc4 Qb6', name: 'Sozin', note: "The queen hits d4 and disturbs White's set-up (see the lesson). 6...e6 is the solid alternative. Avoid 6...g6?, which walks into a known trap.", line: 'sozin' },
        { moves: '6.Be2 e5', name: 'Quiet 6.Be2', note: '6...e5 (the Boleslavsky), 6...e6 (a Scheveningen) and 6...g6 (a Dragon) are all good choices.', line: 'be2' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'f3d4', san: 'Nxd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd7d6', san: 'd6', note: 'Both knights out, then ...d6: the Classical Sicilian.' },
          { uci: 'c1g5', san: 'Bg5', note: "The Richter-Rauzer: threatens Bxf6, doubling Black's pawns." },
          { uci: 'e7e6', san: 'e6', note: 'Prepares ...Be7. If Bxf6, Black recaptures ...gxf6 and has the bishop pair.' },
          { uci: 'd1d2', san: 'Qd2' },
          { uci: 'a7a6', san: 'a6' },
          { uci: 'e1c1', san: 'O-O-O' },
          { uci: 'c8d7', san: 'Bd7', note: 'Connects the pieces and prepares ...b5.' },
          { uci: 'f2f4', san: 'f4' },
          { uci: 'b7b5', san: 'b5', note: "Queenside counterplay; Black's king stays in the centre for now." }
        ]
      },
      lines: [
        {
          id: 'rauzer-a6',
          name: '6.Bg5 e6 7.Qd2 a6 8.O-O-O Bd7',
          kind: 'Main line',
          summary: 'Black keeps the king in the centre, plays ...b5 against long castling and recaptures ...gxf6 if White takes on f6.',
          moves: [
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'e1c1', san: 'O-O-O' },
            { uci: 'c8d7', san: 'Bd7' },
            { uci: 'f2f4', san: 'f4' },
            { uci: 'b7b5', san: 'b5', note: 'Queenside counterplay against the long-castled king.' },
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'g7f6', san: 'gxf6', note: 'The bishop pair and a solid centre, at the cost of a less safe king.' }
          ]
        },
        {
          id: 'rauzer-oo',
          name: '7...Be7 8.O-O-O O-O',
          kind: 'Alternative',
          summary: "Black castles short and relies on piece play: ...Nxd4 and ...Qa5 bring the queen into the fight against White's king.",
          moves: [
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e1c1', san: 'O-O-O' },
            { uci: 'e8g8', san: 'O-O', note: 'Black castles short and relies on piece play.' },
            { uci: 'f2f4', san: 'f4' },
            { uci: 'c6d4', san: 'Nxd4', note: 'Trades to ease the position.' },
            { uci: 'd2d4', san: 'Qxd4' },
            { uci: 'd8a5', san: 'Qa5', note: "The queen joins in against White's king." }
          ]
        },
        {
          id: 'sozin',
          name: '6.Bc4 Qb6',
          kind: 'Alternative',
          summary: 'The queen hits d4 twice; after 7.Nb3 e6 Black blunts the bishop and develops normally.',
          moves: [
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'd8b6', san: 'Qb6', note: "Hits d4 twice and disturbs White's plans." },
            { uci: 'd4b3', san: 'Nb3' },
            { uci: 'e7e6', san: 'e6', note: 'Blunts the c4 bishop.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'b6c7', san: 'Qc7', note: 'The queen steps back; ...a6 and ...O-O follow.' }
          ]
        },
        {
          id: 'be2',
          name: '6.Be2 e5 (Boleslavsky)',
          kind: 'Sideline',
          summary: 'Against the quiet 6.Be2, ...e5 gains space and kicks the knight; Black castles and fights for d5.',
          moves: [
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e7e5', san: 'e5', note: 'The Boleslavsky: space and a kick for the knight.' },
            { uci: 'd4b3', san: 'Nb3' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'c8e6', san: 'Be6', note: 'Fights for d5.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: '6...g6? against the Sozin',
          text: 'After 6.Bc4 g6?, 7.Nxc6 bxc6 8.e5! is strong: if 8...dxe5? 9.Bxf7+ Kxf7 10.Qxd8 wins the queen. Against 6.Bc4 play 6...Qb6 or 6...e6.',
          uci: ['e2e4', 'c7c5', 'g1f3', 'b8c6', 'd2d4', 'c5d4', 'f3d4', 'g8f6', 'b1c3', 'd7d6', 'f1c4', 'g7g6', 'd4c6', 'b7c6', 'e4e5']
        },
        { kind: 'Risk', side: 'black', title: 'Bxf6 in the Richter-Rauzer', text: 'White can take on f6 at many moments. Black usually recaptures ...gxf6 and keeps the bishop pair, but the king then has fewer safe squares. Decide where the king will live before allowing it.' }
      ],
      transpositions: [
        { to: 'b-sicilian-dragon', note: '6.Be2 g6 gives a Dragon with ...Nc6 already played.' },
        { to: 'b-sicilian-scheveningen', note: '6.Be2 e6 reaches a Scheveningen structure.' }
      ],
      lessons: ['black-vs-e4-8']
    },
    {
      id: 'b-sicilian-dragon',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-sicilian',
      family: 'Sicilian Defence',
      name: 'Sicilian: Dragon Variation',
      short: 'Dragon Variation (5...g6)',
      aliases: ['Dragon Sicilian'],
      eco: 'B70',
      defining: ['e2e4', 'c7c5', 'g1f3', 'd7d6', 'd2d4', 'c5d4', 'f3d4', 'g8f6', 'b1c3', 'g7g6'],
      moves: '1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6',
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 26,
      summary: 'Fianchetto the bishop on g7, where it bites along the long diagonal. Aggressive, double-edged and theory-heavy against the Yugoslav Attack.',
      idea: "The g7 bishop rakes the long diagonal towards White's queenside. Against the Yugoslav Attack (Be3, f3, Qd2, O-O-O) the game is a race: White storms with h4-h5, while Black counter-attacks down the c-file with ...Rc8, ...Ne5-c4 and sometimes the exchange sacrifice ...Rxc3. If White castles long too early, a timely ...d5 frees Black's game.",
      plans: { white: ['Yugoslav Attack: Be3, f3, Qd2, O-O-O, then h4-h5 and Bh6 to remove the dragon bishop', 'Quieter: Be2, O-O and f4, or a g3 fianchetto'], black: ['Castle short and counter-attack on the queenside with ...Rc8, ...Ne5-c4 and ...b5', 'Strike with ...d5 when White castles long before playing Bc4', "Be ready to give the exchange on c3 to break up the pawns in front of White's king"] },
      responses: [
        { moves: '6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6 9.Bc4', name: 'Yugoslav with 9.Bc4', note: '9...Bd7 10.O-O-O Rc8 11.Bb3 Ne5: the main battleground, with races on opposite wings.', line: 'yugoslav-bc4' },
        { moves: '6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6 9.O-O-O d5', name: 'Yugoslav with 9.O-O-O', note: "The freeing break: after 10.exd5 Nxd5 11.Nxc6 bxc6 Black's pieces become active (see the lesson).", line: 'yugoslav-ooo' },
        { moves: '6.Be2 Bg7 7.O-O O-O', name: 'Classical', note: 'A calmer game: Black plays ...Nc6, ...Be6 or ...a6 and ...b5, and aims for ...d5 later.', line: 'classical' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'f3d4', san: 'Nxd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'g7g6', san: 'g6', note: 'The Dragon: the bishop is heading for g7.' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'f2f3', san: 'f3', note: 'Stops ...Ng4, which would hit the e3 bishop, and supports e4 and a later g4.' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'd1d2', san: 'Qd2' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'f1c4', san: 'Bc4', note: 'Controls d5, stopping the freeing ...d5.' },
          { uci: 'c8d7', san: 'Bd7', note: 'Prepares ...Rc8 and ...Ne5 with queenside play.' }
        ]
      },
      lines: [
        {
          id: 'yugoslav-bc4',
          name: 'Yugoslav Attack with 9.Bc4',
          kind: 'Main line',
          summary: 'White controls d5 with the bishop. Black plays ...Bd7, ...Rc8 and ...Ne5-c4 for counterplay on the c-file.',
          moves: [
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f2f3', san: 'f3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1c4', san: 'Bc4', note: 'Controls d5 and stops the freeing break.' },
            { uci: 'c8d7', san: 'Bd7' },
            { uci: 'e1c1', san: 'O-O-O' },
            { uci: 'a8c8', san: 'Rc8', note: 'The rook joins the c-file attack.' },
            { uci: 'c4b3', san: 'Bb3' },
            { uci: 'c6e5', san: 'Ne5', note: 'Heading for c4 to hit the queen and the e3 bishop.' }
          ]
        },
        {
          id: 'yugoslav-ooo',
          name: 'Yugoslav Attack with 9.O-O-O d5',
          kind: 'Sharp try',
          summary: "With d5 unguarded, Black breaks at once. After the exchanges the b-file opens towards White's king.",
          moves: [
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f2f3', san: 'f3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e1c1', san: 'O-O-O' },
            { uci: 'd6d5', san: 'd5', note: 'With d5 unguarded, Black breaks in the centre at once.' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'd4c6', san: 'Nxc6' },
            { uci: 'b7c6', san: 'bxc6', note: "The b-file opens towards White's king." }
          ]
        },
        {
          id: 'classical',
          name: '6.Be2 (Classical)',
          kind: 'Alternative',
          summary: 'A calmer game with both kings castled short. Black develops ...Nc6 and ...Be6 and prepares ...d5 or queenside play.',
          moves: [
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'f8g7', san: 'Bg7', note: 'Against quiet play the bishop is already well placed.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd4b3', san: 'Nb3' },
            { uci: 'c8e6', san: 'Be6', note: 'Calm development; ...a5 or ...d5 can follow.' }
          ]
        }
      ],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'Losing the dragon bishop', text: "If White plays Bh6 and trades the g7 bishop, the dark squares around Black's king become very weak. Black needs counterplay ready (...Rxc3, ...Nc4, ...b5) when it happens." },
        { kind: 'Mistake', side: 'black', title: '...d5 into a covered d5 square', text: '...d5 is the freeing break only when d5 is not controlled by a bishop on c4 or b3. With Bc4 played, an early ...d5 tends to lose a pawn or open lines for White.' },
        { kind: 'Risk', side: 'black', title: 'The open h-file', text: "White's h4-h5 aims to open the h-file. Know the main lines before you play ...h5 or capture on h5, because once the file opens, Qh6 and mating ideas come quickly." }
      ],
      transpositions: [
        { to: 'b-sicilian-accelerated-dragon', note: 'The Accelerated Dragon reaches similar fianchetto structures but keeps ...d7-d5 in one move as an option.' },
        { to: 'b-sicilian-classical', note: 'The Classical with 6.Be2 g6 reaches a Dragon with ...Nc6 already played.' }
      ],
      lessons: ['black-vs-e4-6', 'black-vs-e4-8', 'attack-7']
    },
    {
      id: 'b-sicilian-scheveningen',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-sicilian',
      family: 'Sicilian Defence',
      name: 'Sicilian: Scheveningen Variation',
      short: 'Scheveningen Variation (5...e6)',
      aliases: ['Scheveningen'],
      eco: 'B80',
      defining: ['e2e4', 'c7c5', 'g1f3', 'd7d6', 'd2d4', 'c5d4', 'f3d4', 'g8f6', 'b1c3', 'e7e6'],
      moves: '1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e6',
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 20,
      summary: 'A small, compact centre with pawns on d6 and e6. Solid but resilient, with plenty of counter-attacking chances.',
      idea: "Black's pawns on d6 and e6 control the key squares c5, d5, e5 and f5. Black develops behind them with ...Be7, ...O-O, ...a6, ...Qc7 and ...Nc6 or ...Nbd7, then counters with ...b5 on the queenside or the freeing ...e5 or ...d5. The main danger is the Keres Attack, 6.g4, which must be met precisely.",
      plans: { white: ['Keres Attack: g4-g5 to drive the f6 knight away and storm the kingside', 'Classical set-up: Be2, O-O, f4, Kh1 and a4, then a kingside attack with Qe1-g3'], black: ['Develop compactly: ...Be7, ...O-O, ...a6, ...Qc7 and ...Nc6', 'Counter in the centre with ...e5 or ...d5 at the right moment, or on the queenside with ...b5', 'Against 6.g4, slow the pawn with ...h6, or develop fast with ...Nc6 and ...a6'] },
      responses: [
        { moves: '6.g4 h6', name: 'Keres Attack', note: '...h6 makes g5 harder to achieve; after 7.h4 Nc6 8.Rg1 Black chooses between ...h5 and ...d5. This is the critical test.', line: 'keres' },
        { moves: '6.Be2 a6 7.O-O Be7 8.f4', name: 'Classical', note: 'The main line: ...O-O, ...Qc7 and ...Nc6. A slow, rich game where Black waits for the right moment for ...e5 or ...d5.', line: 'classical' },
        { moves: '6.Be3 a6 7.f3', name: 'English Attack', note: 'Black plays ...b5, ...Bb7 and ...Nbd7, using the time White spends on f3 and g4 for queenside play.', line: 'english' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'f3d4', san: 'Nxd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'e7e6', san: 'e6', note: 'The small centre: d6 and e6 control the central squares.' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'a7a6', san: 'a6', note: 'Stops Nb5 and prepares ...Qc7 and ...b5.' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'f2f4', san: 'f4' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'g1h1', san: 'Kh1', note: 'Steps off the g1-a7 diagonal before any central action.' },
          { uci: 'd8c7', san: 'Qc7', note: 'Covers e5 and lines up on the c-file.' }
        ]
      },
      lines: [
        {
          id: 'keres',
          name: '6.g4 (Keres Attack)',
          kind: 'Sharp try',
          summary: 'White storms with g4-g5. Black slows the pawn with ...h6 and answers the wing attack with a central counter-blow.',
          moves: [
            { uci: 'g2g4', san: 'g4', note: 'The Keres Attack: g5 will drive the f6 knight away.' },
            { uci: 'h7h6', san: 'h6', note: 'Makes g5 harder to achieve.' },
            { uci: 'h2h4', san: 'h4' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'h1g1', san: 'Rg1' },
            { uci: 'd6d5', san: 'd5', note: 'A central counter-blow, the classical answer to a wing attack.' }
          ]
        },
        {
          id: 'classical',
          name: '6.Be2 a6 7.O-O (Classical)',
          kind: 'Main line',
          summary: 'A slow, rich game. Black completes development with ...Qc7, ...Nc6 and ...Re8, waiting for the right moment for ...e5 or ...d5.',
          moves: [
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'f2f4', san: 'f4' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'g1h1', san: 'Kh1' },
            { uci: 'd8c7', san: 'Qc7', note: 'Covers e5 and the c-file.' },
            { uci: 'a2a4', san: 'a4' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'f8e8', san: 'Re8', note: 'Prepares ...Bf8, a typical Scheveningen regrouping.' }
          ]
        },
        {
          id: 'english',
          name: '6.Be3 a6 7.f3 (English Attack)',
          kind: 'Alternative',
          summary: 'Black uses the time White spends on f3 and g4 to gain queenside space with ...b5 and ...Bb7.',
          moves: [
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'f2f3', san: 'f3' },
            { uci: 'b7b5', san: 'b5', note: 'Uses the time White spends on f3 for queenside space.' },
            { uci: 'g2g4', san: 'g4' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'e1c1', san: 'O-O-O' },
            { uci: 'c8b7', san: 'Bb7', note: 'The bishop presses on e4.' }
          ]
        }
      ],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'Slow play against the Keres Attack', text: 'If Black does nothing against 6.g4, g5 drives the f6 knight away and the kingside opens. React at once with ...h6, ...Nc6 or ...a6 and a clear plan.' },
        { kind: 'Risk', side: 'black', title: 'Sacrifices on d5, e6 and f5', text: 'The d6-e6 centre invites piece sacrifices such as Nd5 or Nf5 that open the e-file against a king still on e8. Get the king to safety before opening lines.' },
        { kind: 'Mistake', side: 'black', title: 'An unprepared ...d5', text: '...d5 frees the game only when well prepared. Too early, e5 drives the f6 knight away and White gains space and attacking chances.' }
      ],
      transpositions: [
        { to: 'b-sicilian-najdorf', note: 'Najdorf players reach this structure with 5...a6 and a later ...e6.' },
        { to: 'b-sicilian-taimanov', note: 'Taimanov lines with ...d6 and ...Nf6 often become Scheveningens.' }
      ],
      lessons: ['attack-7', 'attack-10'],
      uncertain: 'The Keres Attack is summarised briefly; several replies (6...h6, 6...a6, 6...Nc6) are respected, and current theory shifts between them.'
    },
    {
      id: 'b-sicilian-taimanov',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-sicilian',
      family: 'Sicilian Defence',
      name: 'Sicilian: Taimanov Variation',
      short: 'Taimanov Variation (4...Nc6, 5...Qc7)',
      aliases: ['Paulsen-Taimanov', 'Bastrikov Variation'],
      eco: 'B48',
      defining: ['e2e4', 'c7c5', 'g1f3', 'e7e6', 'd2d4', 'c5d4', 'f3d4', 'b8c6', 'b1c3', 'd8c7'],
      moves: '1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nc6 5.Nc3 Qc7',
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 18,
      summary: 'A flexible Sicilian: ...e6 and ...Nc6 keep the d-pawn at home, and the queen on c7 controls e5.',
      idea: "Black delays ...d6 and ...Nf6, so the Keres Attack and many Najdorf weapons are ruled out. The queen on c7 watches e5, and the dark-squared bishop can become active on b4 or c5. Black typically plays ...a6, ...Nf6 and ...Bb4 or ...Be7, choosing ...d6 or ...d5 later depending on White's set-up.",
      plans: { white: ['English Attack: Be3, Qd2, O-O-O and f3, then a kingside pawn storm', 'Quieter set-ups with Be2 and O-O, or g3 and Bg2'], black: ['Develop with ...a6, ...Nf6 and ...Bb4 to pressure e4', 'Use ...Ne5 and ...b5 for queenside play against long castling', 'Switch to a Scheveningen with ...d6 and ...Be7 when convenient'] },
      responses: [
        { moves: '6.Be3 a6 7.Qd2 Nf6 8.O-O-O Bb4', name: 'English Attack', note: 'Black pins the knight and pressures e4; after 9.f3 Ne5 10.Nb3 b5 both sides race.', line: 'english' },
        { moves: '6.Be2 a6 7.O-O Nf6 8.Be3', name: 'Classical 6.Be2', note: '8...Bb4 9.Na4 Be7 is the main line: Black castles and later chooses between ...d6 and ...b5. 8.Kh1 is the other main move for White.', line: 'be2' },
        { moves: '6.g3 a6 7.Bg2 Nf6 8.O-O Nxd4 9.Qxd4 Bc5', name: 'Fianchetto', note: 'Black develops with tempo on the queen and continues ...d6 and ...h6 or ...O-O.', line: 'g3' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'f3d4', san: 'Nxd4' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd8c7', san: 'Qc7', note: 'The queen controls e5 and the c-file; ...d6 is delayed.' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'a7a6', san: 'a6', note: 'Takes b5 from the white knights.' },
          { uci: 'd1d2', san: 'Qd2' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'e1c1', san: 'O-O-O' },
          { uci: 'f8b4', san: 'Bb4', note: 'Pins the c3 knight and puts pressure on e4.' },
          { uci: 'f2f3', san: 'f3', note: 'Defends e4.' },
          { uci: 'c6e5', san: 'Ne5', note: 'Heading for c4 to hit the e3 bishop and the queen.' }
        ]
      },
      lines: [
        {
          id: 'english',
          name: '6.Be3 a6 7.Qd2 (English Attack)',
          kind: 'Main line',
          summary: 'Black pins with ...Bb4, puts the knight on e5 heading for c4 and races with ...b5.',
          moves: [
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e1c1', san: 'O-O-O' },
            { uci: 'f8b4', san: 'Bb4', note: 'Pins the knight and hits e4.' },
            { uci: 'f2f3', san: 'f3' },
            { uci: 'c6e5', san: 'Ne5', note: 'Heading for c4.' },
            { uci: 'd4b3', san: 'Nb3' },
            { uci: 'b7b5', san: 'b5', note: 'Both sides race on opposite wings.' }
          ]
        },
        {
          id: 'be2',
          name: '6.Be2 a6 7.O-O',
          kind: 'Alternative',
          summary: 'Against the classical set-up Black pins with ...Bb4; after Na4 the bishop drops to e7 and Black castles.',
          moves: [
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'f8b4', san: 'Bb4' },
            { uci: 'c3a4', san: 'Na4', note: 'Avoids the pin and eyes b6.' },
            { uci: 'b4e7', san: 'Be7', note: 'Black castles next and chooses between ...d6 and ...b5.' }
          ]
        },
        {
          id: 'g3',
          name: '6.g3 (fianchetto)',
          kind: 'Alternative',
          summary: 'Black exchanges on d4 and develops the bishop to c5 with tempo on the queen, then covers e5 with ...d6.',
          moves: [
            { uci: 'g2g3', san: 'g3' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c6d4', san: 'Nxd4' },
            { uci: 'd1d4', san: 'Qxd4' },
            { uci: 'f8c5', san: 'Bc5', note: 'Develops with tempo on the queen.' },
            { uci: 'c1f4', san: 'Bf4' },
            { uci: 'd7d6', san: 'd6', note: 'Covers e5; ...h6 and ...O-O follow.' }
          ]
        }
      ],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'Knight jumps to b5', text: 'With the queen on c7 and no ...a6, a white knight on b5 hits the queen and eyes d6. That is why ...a6 comes early in most Taimanov lines.' },
        { kind: 'Risk', side: 'black', title: 'The dark squares after ...Bxc3', text: "Giving up the dark-squared bishop on c3 damages White's pawns but leaves d6 and the kingside dark squares weaker. Do it when it wins e4 or exposes White's king." }
      ],
      transpositions: [
        { to: 'b-sicilian-scheveningen', note: 'With ...d6 and ...Nf6 the Taimanov often turns into a Scheveningen.' }
      ],
      lessons: ['attack-7']
    },
    {
      id: 'b-sicilian-sveshnikov',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-sicilian',
      family: 'Sicilian Defence',
      name: 'Sicilian: Sveshnikov Variation',
      short: 'Sveshnikov Variation (5...e5)',
      aliases: ['Lasker-Pelikan Variation', 'Pelikan Variation'],
      eco: 'B33',
      defining: ['e2e4', 'c7c5', 'g1f3', 'b8c6', 'd2d4', 'c5d4', 'f3d4', 'g8f6', 'b1c3', 'e7e5'],
      moves: '1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5',
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 24,
      summary: 'Black kicks the knight with ...e5 at once, accepting a hole on d5 for activity, the bishop pair and dynamic pawns.',
      idea: "After 6.Ndb5 d6 7.Bg5 a6 8.Na3 b5, Black gains space and time, and White's knight on a3 is offside. Black often accepts doubled f-pawns after Bxf6 gxf6, then plays ...f5 to break up White's centre. The d5 square is weak, but Black's bishops and active pawns give rich counterplay.",
      plans: { white: ['Occupy d5 with a knight, then play c3 and Nc2-e3 to reinforce it', "Open the queenside with a4 or c4 against Black's advanced pawns"], black: ['Break with ...f5 to undermine e4 and open lines for the bishops', 'Use the bishop pair: ...Bg7, ...Be6 and pressure on the long diagonal', 'Stay active: piece play compensates for the hole on d5'] },
      responses: [
        { moves: '6.Ndb5 d6 7.Bg5 a6 8.Na3 b5', name: 'Main line', note: 'Then 9.Bxf6 gxf6 10.Nd5 f5 or 9.Nd5 Be7 10.Bxf6 Bxf6 11.c3; both are deeply analysed, and Black is fine with accurate play.', line: 'bxf6' },
        { moves: '6.Ndb5 d6 7.Nd5 Nxd5 8.exd5', name: '7.Nd5', note: "8...Nb8 (or 8...Ne7) and ...a6: White gains space, but Black's position is solid.", line: 'nd5-7' },
        { moves: '6.Nb3', name: 'Quiet retreats', note: 'Retreats such as 6.Nb3, 6.Nf3 or 6.Nde2 are harmless: Black develops with ...Bb4 or ...Be7, castles and aims for ...d5.', line: 'quiet' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'f3d4', san: 'Nxd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'e7e5', san: 'e5', note: 'Kicks the knight at once, conceding the d5 square.' },
          { uci: 'd4b5', san: 'Ndb5' },
          { uci: 'd7d6', san: 'd6', note: 'Stops Nd6+ and opens the c8 bishop.' },
          { uci: 'c1g5', san: 'Bg5', note: 'Plans to take on f6 and plant a knight on d5.' },
          { uci: 'a7a6', san: 'a6' },
          { uci: 'b5a3', san: 'Na3' },
          { uci: 'b7b5', san: 'b5', note: 'Gains space and keeps the a3 knight out of play.' },
          { uci: 'c3d5', san: 'Nd5' },
          { uci: 'f8e7', san: 'Be7', note: 'Black will recapture on f6 with the bishop to keep the pawns intact.' }
        ]
      },
      lines: [
        {
          id: 'bxf6',
          name: '9.Bxf6 gxf6 10.Nd5 f5',
          kind: 'Main line',
          summary: 'Black accepts doubled pawns for the bishop pair and the g-file, and uses the front f-pawn as a lever against e4.',
          moves: [
            { uci: 'd4b5', san: 'Ndb5' },
            { uci: 'd7d6', san: 'd6', note: 'Stops Nd6+.' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5a3', san: 'Na3' },
            { uci: 'b7b5', san: 'b5', note: 'Space, and the a3 knight is out of play.' },
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'g7f6', san: 'gxf6', note: 'Doubled pawns, but the bishop pair and an open g-file.' },
            { uci: 'c3d5', san: 'Nd5' },
            { uci: 'f6f5', san: 'f5', note: 'The lever: the doubled pawn hits e4.' }
          ]
        },
        {
          id: 'nd5',
          name: '9.Nd5 Be7',
          kind: 'Main line',
          summary: 'Black recaptures on f6 with the bishop and keeps the pawn structure; White reroutes the a3 knight via c2.',
          moves: [
            { uci: 'd4b5', san: 'Ndb5' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5a3', san: 'Na3' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'c3d5', san: 'Nd5' },
            { uci: 'f8e7', san: 'Be7', note: 'Black will recapture on f6 with the bishop.' },
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'e7f6', san: 'Bxf6' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'e8g8', san: 'O-O', note: 'White reroutes the a3 knight via c2; Black prepares ...Bg5, ...a5 and ...f5.' }
          ]
        },
        {
          id: 'nd5-7',
          name: '7.Nd5',
          kind: 'Alternative',
          summary: 'White gains space with an early Nd5 and exd5. Black regroups the knight via b8 to d7 and prepares ...f5.',
          moves: [
            { uci: 'd4b5', san: 'Ndb5' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'c3d5', san: 'Nd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'c6b8', san: 'Nb8', note: 'The knight reroutes to d7; ...a6 kicks the b5 knight.' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'f8e7', san: 'Be7', note: 'Solid: Black plans ...O-O, ...a6 and ...f5.' }
          ]
        },
        {
          id: 'quiet',
          name: '6.Nb3 (quiet retreat)',
          kind: 'Sideline',
          summary: 'A harmless retreat. Black pins with ...Bb4 and gets the freeing ...d5 at once.',
          moves: [
            { uci: 'd4b3', san: 'Nb3' },
            { uci: 'f8b4', san: 'Bb4', note: 'Pins and pressures e4.' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'd7d5', san: 'd5', note: "With White's knight gone from d4, the freeing break comes at once." },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'f6d5', san: 'Nxd5', note: 'Free and active development.' }
          ]
        }
      ],
      pitfalls: [
        { kind: 'Mistake', side: 'black', title: 'Allowing Nd6+', text: "After 6.Ndb5 Black plays 6...d6. Otherwise Nd6+ trades off the dark-squared bishop and leaves the dark squares in Black's camp badly weakened." },
        { kind: 'Risk', side: 'black', title: 'An eternal knight on d5', text: 'If Black trades the light-squared bishop for anything less than the d5 knight, White may keep a knight on d5 for ever. Keep ...Be6 or ...Bb7 available to challenge it.' },
        { kind: 'Mistake', side: 'black', title: 'Forgetting ...f5 after ...gxf6', text: 'The doubled f-pawns are only good if the front one advances: ...f5 hits e4 and opens lines for the bishops. Without ...f5 they are just weak.' }
      ],
      lessons: ['black-vs-e4-9'],
      uncertain: 'The 6.Nb3 Bb4 7.Bd3 d5 sideline is given as a typical way to equalise against a quiet retreat; move orders vary.'
    },
    {
      id: 'b-sicilian-accelerated-dragon',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-sicilian',
      family: 'Sicilian Defence',
      name: 'Sicilian: Accelerated Dragon',
      short: 'Accelerated Dragon (4...g6)',
      aliases: ['Accelerated Fianchetto'],
      eco: 'B34',
      defining: ['e2e4', 'c7c5', 'g1f3', 'b8c6', 'd2d4', 'c5d4', 'f3d4', 'g7g6'],
      moves: '1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 g6',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 18,
      summary: 'Fianchetto before ...d6: Black sidesteps the Yugoslav main lines but must be ready for the Maroczy Bind.',
      idea: 'By delaying ...d6, Black keeps the option of ...d7-d5 in one move, which blunts the aggressive f3, Qd2 and O-O-O plan. The main test is 5.c4, the Maroczy Bind, where White grips d5. Black then plays patiently: ...Nxd4, ...Bd7-c6 or ...Be6, ...a5 and ...Qa5 or ...Qb6, aiming for the ...b5 or ...f5 breaks.',
      plans: { white: ["Maroczy Bind: pawns on c4 and e4 clamp d5 and restrict Black's breaks", 'Classical: Nc3, Be3, Bc4 and Bb3, aiming at f7 and d5'], black: ['Against the Maroczy: trade knights with ...Nxd4, develop ...Bd7-c6 or ...Be6, and prepare ...b5 or ...f5', 'Against Bc4 systems: castle, then ...d6 and ...Bd7, reaching Dragon-type positions', 'Keep the ...d5 break available while the d-pawn is still on d7'] },
      responses: [
        { moves: '5.c4 Bg7 6.Be3 Nf6 7.Nc3', name: 'Maroczy Bind', note: 'A positional battle: Black castles, plays ...d6 and ...Bd7, trades a pair of knights on d4 and waits for ...b5 or ...f5.', line: 'maroczy' },
        { moves: '5.Nc3 Bg7 6.Be3 Nf6 7.Bc4', name: 'Classical', note: '7...O-O 8.Bb3 (stopping the ...Nxe4 and ...d5 fork trick), and now 8...a5, threatening ...a4, is the independent main line; 8...d6 9.f3 transposes to a Yugoslav Dragon.', line: 'classical' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'f3d4', san: 'Nxd4' },
          { uci: 'g7g6', san: 'g6', note: 'Fianchetto before ...d6, keeping ...d5 in one move as an option.' },
          { uci: 'c2c4', san: 'c4', note: 'The Maroczy Bind: c4 and e4 grip d5.' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'd7d6', san: 'd6', note: 'Now the structure is set: Black plays for the ...b5 or ...f5 breaks.' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'c8d7', san: 'Bd7', note: 'Prepares ...Nxd4 and ...Bc6, pressing on e4.' }
        ]
      },
      lines: [
        {
          id: 'maroczy',
          name: '5.c4 (Maroczy Bind)',
          kind: 'Main line',
          summary: 'White grips d5. Black castles, plays ...d6 and ...Bd7, trades on d4 and waits for ...b5 or ...f5.',
          moves: [
            { uci: 'c2c4', san: 'c4', note: 'The Maroczy Bind: c4 and e4 grip d5.' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c8d7', san: 'Bd7', note: 'Prepares ...Nxd4 and ...Bc6.' }
          ]
        },
        {
          id: 'gurgenidze',
          name: '5.c4 Nf6 6.Nc3 d6 7.Be2 Nxd4',
          kind: 'Alternative',
          summary: 'An early knight trade eases the cramp; Black develops ...Be6 against c4 and prepares ...Qa5 and ...Rfc8.',
          moves: [
            { uci: 'c2c4', san: 'c4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'c6d4', san: 'Nxd4', note: 'Trading a pair of knights eases the cramp.' },
            { uci: 'd1d4', san: 'Qxd4' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd4d2', san: 'Qd2' },
            { uci: 'c8e6', san: 'Be6', note: 'Hits c4 and prepares ...Qa5 and ...Rfc8.' }
          ]
        },
        {
          id: 'classical',
          name: '5.Nc3 Bg7 6.Be3 Nf6 7.Bc4',
          kind: 'Alternative',
          summary: 'Against the classical set-up Black castles and, after Bb3, plays ...a5 and the central ...d5 in one move.',
          moves: [
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c4b3', san: 'Bb3', note: 'Stops the ...Nxe4 and ...d5 fork trick.' },
            { uci: 'a7a5', san: 'a5', note: 'Threatens ...a4 to chase the bishop.' },
            { uci: 'f2f3', san: 'f3' },
            { uci: 'd7d5', san: 'd5', note: 'The central break, played in one move.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: '8...Na5? and the f7 sacrifice',
          text: 'After 7.Bc4 O-O 8.Bb3, the tempting 8...Na5? runs into 9.e5 Ne8 10.Bxf7+! Kxf7 11.Ne6!, and 11...dxe6 12.Qxd8 wins the queen. Play 8...a5 or 8...d6.',
          uci: ['e2e4', 'c7c5', 'g1f3', 'b8c6', 'd2d4', 'c5d4', 'f3d4', 'g7g6', 'b1c3', 'f8g7', 'c1e3', 'g8f6', 'f1c4', 'e8g8', 'c4b3', 'c6a5', 'e4e5', 'f6e8', 'b3f7']
        },
        { kind: 'Risk', side: 'black', title: 'Squeezed by the Maroczy Bind', text: 'Without the ...b5 or ...f5 breaks, Black can be slowly squeezed. Trade pieces, especially a pair of knights on d4, to ease the cramp.' },
        { kind: 'Risk', side: 'black', title: 'An early ...d6 transposes', text: 'Against Nc3, Be3 and Bc4, an early ...d6 lets White play f3, Qd2 and O-O-O, reaching a Yugoslav Dragon. Make sure you know it, or keep ...d7-d5 in one move as the plan.' }
      ],
      transpositions: [
        { to: 'b-sicilian-dragon', note: 'After ...d6 against Nc3, Be3 and Bc4 set-ups, Dragon-type positions arise.' }
      ],
      lessons: ['black-vs-e4-6'],
      uncertain: '8...a5 is established theory, but its details keep changing; check a current source for the sharp 9.f3 d5 lines.'
    },
    {
      id: 'b-sicilian-vs-alapin',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-sicilian',
      family: 'Sicilian Defence',
      name: 'Sicilian: Black vs the Alapin (2.c3 Nf6)',
      short: 'vs the Alapin (2.c3 Nf6)',
      aliases: ['Alapin Variation', 'c3 Sicilian'],
      eco: 'B22',
      defining: ['e2e4', 'c7c5', 'c2c3', 'g8f6'],
      moves: '1.e4 c5 2.c3 Nf6',
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 14,
      summary: 'Answer 2.c3 by hitting e4 with 2...Nf6: the knight goes to d5 and Black gets quick, free development.',
      idea: "2.c3 prepares d4 to build a full centre. 2...Nf6 attacks e4 at once; after 3.e5 Nd5 the knight is centralised, and the pawn on c3 takes the natural square of White's queen's knight. Black exchanges on d4, plays ...e6, ...d6 and ...Nc6 to attack e5, and often reaches an isolated d-pawn position.",
      plans: { white: ['Push e5 and build a centre with d4, keeping the e5 pawn as long as possible', 'Develop with Nf3, Bc4 and O-O; an isolated d-pawn often arises after exchanges'], black: ['Exchange on d4, hit e5 with ...d6, and develop ...Nc6, ...Be7 and ...O-O', 'Against an isolated d-pawn, blockade d5 and trade pieces'] },
      responses: [
        { moves: '3.e5 Nd5 4.d4 cxd4 5.Nf3', name: 'Main line', note: '5...e6 6.cxd4 d6 is a solid set-up, and 5...Nc6 is also popular. Black aims to break up e5 and develop quickly.', line: 'nf3' },
        { moves: '3.e5 Nd5 4.d4 cxd4 5.cxd4', name: '5.cxd4', note: '5...d6 6.Nf3 Nc6 (or 6...e6): Black attacks e5 and develops quickly against the broad centre.' },
        { moves: '3.e5 Nd5 4.d4 cxd4 5.Qxd4 e6', name: '5.Qxd4', note: 'Black develops ...Nc6 with tempo on the queen, then ...d6 to hit e5.', line: 'qxd4' },
        { moves: '3.e5 Nd5 4.Bc4 Nb6 5.Bb3 c4 6.Bc2', name: '4.Bc4', note: 'Black gains queenside space with tempo, then hits e5 with ...Qc7 or ...d6.', line: 'bc4' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'c2c3', san: 'c3', note: 'Prepares d4 for a full centre.' },
          { uci: 'g8f6', san: 'Nf6', note: 'Hits e4 before d4 arrives.' },
          { uci: 'e4e5', san: 'e5' },
          { uci: 'f6d5', san: 'Nd5', note: "The knight is centralised; c3 is no longer available to White's queen's knight." },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'c3d4', san: 'cxd4' },
          { uci: 'd7d6', san: 'd6', note: 'Challenges e5 at once.' },
          { uci: 'f1c4', san: 'Bc4' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'd1e2', san: 'Qe2' },
          { uci: 'e8g8', san: 'O-O', note: 'Black is safe and developed; the fight often centres on an isolated d-pawn.' }
        ]
      },
      lines: [
        {
          id: 'nf3',
          name: '3.e5 Nd5 4.d4 cxd4 5.Nf3 e6',
          kind: 'Main line',
          summary: 'Black exchanges on d4, plays ...e6 and ...d6 to hit e5, and develops. An isolated d-pawn often follows.',
          moves: [
            { uci: 'e4e5', san: 'e5' },
            { uci: 'f6d5', san: 'Nd5' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'd7d6', san: 'd6', note: 'Challenges e5 at once.' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e7', san: 'Be7', note: 'Safe development; an isolated d-pawn often follows.' }
          ]
        },
        {
          id: 'nc6',
          name: '5.Nf3 Nc6',
          kind: 'Alternative',
          summary: 'Black develops the knight first, kicks the c4 bishop and opens the centre with ...d5.',
          moves: [
            { uci: 'e4e5', san: 'e5' },
            { uci: 'f6d5', san: 'Nd5' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'd5b6', san: 'Nb6', note: 'Hits the bishop.' },
            { uci: 'c4b3', san: 'Bb3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e5d6', san: 'exd6' },
            { uci: 'd8d6', san: 'Qxd6', note: 'Free development; ...Be6 or ...Bg4 next.' }
          ]
        },
        {
          id: 'qxd4',
          name: '5.Qxd4 e6',
          kind: 'Alternative',
          summary: 'Black gains time on the centralised queen with ...Nc6, then strikes at e5 with ...d6.',
          moves: [
            { uci: 'e4e5', san: 'e5' },
            { uci: 'f6d5', san: 'Nd5' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'd1d4', san: 'Qxd4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6', note: 'Develops with tempo on the queen.' },
            { uci: 'd4e4', san: 'Qe4' },
            { uci: 'd7d6', san: 'd6', note: 'Strikes at e5 straight away.' }
          ]
        },
        {
          id: 'bc4',
          name: '4.Bc4 Nb6',
          kind: 'Sideline',
          summary: 'Black gains queenside space with tempo by ...Nb6 and ...c4, then attacks e5.',
          moves: [
            { uci: 'e4e5', san: 'e5' },
            { uci: 'f6d5', san: 'Nd5' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'd5b6', san: 'Nb6' },
            { uci: 'c4b3', san: 'Bb3' },
            { uci: 'c5c4', san: 'c4', note: 'Gains queenside space with tempo.' },
            { uci: 'b3c2', san: 'Bc2' },
            { uci: 'd8c7', san: 'Qc7', note: 'Hits e5; ...d6 or ...g5 ideas follow.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: '3...Ne4? after 3.e5',
          text: 'The knight belongs on d5. After 3...Ne4? 4.d3 it is kicked again and Black has lost time.',
          uci: ['e2e4', 'c7c5', 'c2c3', 'g8f6', 'e4e5', 'f6e4', 'd2d3']
        },
        { kind: 'Risk', side: 'black', title: 'The cramping e5 pawn', text: "If Black never challenges e5 with ...d6, White's space grows and a kingside attack follows. Hit the pawn early." },
        { kind: 'Risk', side: 'black', title: 'Isolated pawn positions', text: 'Many lines give White an isolated d-pawn. Blockade d5, trade pieces and watch the d4-d5 break; passive play lets White attack.' }
      ],
      lessons: ['white-openings-4', 'strategy-7']
    },
    {
      id: 'b-sicilian-vs-closed',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-sicilian',
      family: 'Sicilian Defence',
      name: 'Sicilian: Black vs the Closed (2.Nc3 Nc6)',
      short: 'vs the Closed (2.Nc3 Nc6)',
      aliases: ['Closed Sicilian', 'Grand Prix Attack (3.f4)'],
      eco: 'B23',
      defining: ['e2e4', 'c7c5', 'b1c3', 'b8c6'],
      moves: '1.e4 c5 2.Nc3 Nc6',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 14,
      summary: 'Against 2.Nc3 and the closed g3 set-up, mirror the fianchetto and expand on the queenside.',
      idea: 'White aims for a slow kingside attack with g3, Bg2, d3, f4 and Nf3 or Nge2. Black fianchettoes with ...g6 and ...Bg7, puts pawns on d6 and e6 (or e5), and expands on the queenside with ...Rb8 and ...b5-b4. Against the Grand Prix set-up with f4 and Bc4, ...e6 blunts the bishop and ...d5 follows.',
      plans: { white: ['Closed: g3, Bg2, d3, Be3, Qd2 and f4-f5, with a kingside attack', 'Grand Prix: f4, Nf3 and Bc4 or Bb5, aiming for f5'], black: ['Fianchetto with ...g6 and ...Bg7, then ...d6, ...e6 and ...Nge7', 'Expand with ...Rb8, ...b5-b4 and ...Nd4 to gain queenside space', 'Against Bc4, play ...e6 and ...d5 to blunt the bishop'] },
      responses: [
        { moves: '3.g3 g6 4.Bg2 Bg7 5.d3 d6', name: 'Closed main line', note: '6.Be3 e6 (or ...e5) 7.Qd2 Rb8 8.Nge2 Nd4: Black gains queenside space while White builds up on the kingside.', line: 'closed' },
        { moves: '3.f4 g6 4.Nf3 Bg7', name: 'Grand Prix', note: 'After 5.Bc4, 5...e6 blunts the bishop, then ...Nge7 and ...d5. Watch for the pawn sacrifice 6.f5: 6...Nge7 7.fxe6 dxe6 is a sound reply. After 5.Bb5, 5...Nd4 is good.', line: 'grand-prix' },
        { moves: '3.Nf3 e6 4.d4 cxd4 5.Nxd4', name: '3.Nf3', note: 'Black can steer into an open Sicilian, here a Taimanov-type position; 3...d6 or 3...g6 with 4.d4 cxd4 are also possible.', line: 'nf3' },
        { moves: '3.Bb5 Nd4', name: '3.Bb5', note: 'The knight hits the bishop at once; Black follows with ...a6 or ...g6 and the game is calm and balanced.' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'b1c3', san: 'Nc3', note: 'Preparing the closed set-up with g3.' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'g2g3', san: 'g3' },
          { uci: 'g7g6', san: 'g6', note: "Mirrors White's fianchetto." },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'f8g7', san: 'Bg7', note: 'Contests the long dark diagonal.' },
          { uci: 'd2d3', san: 'd3' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'e7e6', san: 'e6', note: 'Controls d5 and prepares ...Nge7, keeping the f-pawn free.' },
          { uci: 'd1d2', san: 'Qd2' },
          { uci: 'a8b8', san: 'Rb8', note: 'Prepares ...b5-b4 to hit the c3 knight.' },
          { uci: 'g1e2', san: 'Nge2' },
          { uci: 'c6d4', san: 'Nd4', note: 'A strong central post; 9.Nxd4? cxd4 would hit both the c3 knight and the e3 bishop.' }
        ]
      },
      lines: [
        {
          id: 'closed',
          name: '3.g3 (Closed main line)',
          kind: 'Main line',
          summary: "Black mirrors the fianchetto, plays ...d6 and ...e6, and expands with ...Rb8 and ...Nd4 against White's kingside plans.",
          moves: [
            { uci: 'g2g3', san: 'g3' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'e7e6', san: 'e6', note: 'Controls d5 and keeps the f-pawn free.' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'a8b8', san: 'Rb8' },
            { uci: 'g1e2', san: 'Nge2' },
            { uci: 'c6d4', san: 'Nd4', note: 'A strong central post; ...b5-b4 follows.' }
          ]
        },
        {
          id: 'closed-f4',
          name: '3.g3 with 6.f4',
          kind: 'Alternative',
          summary: 'White prepares f5. Black develops ...e6 and ...Nge7, castles, and has ...Rb8, ...b5 or ...f5 ideas.',
          moves: [
            { uci: 'g2g3', san: 'g3' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'f2f4', san: 'f4' },
            { uci: 'e7e6', san: 'e6', note: 'Prepares ...Nge7, so the knight does not block the f-pawn.' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8e7', san: 'Nge7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O', note: 'Black has ...Rb8, ...b5 or ...f5 ideas.' }
          ]
        },
        {
          id: 'grand-prix',
          name: '3.f4 (Grand Prix Attack)',
          kind: 'Alternative',
          summary: 'Black blunts the c4 bishop with ...e6 and meets the f5 pawn sacrifice with ...Nge7 and ...dxe6.',
          moves: [
            { uci: 'f2f4', san: 'f4' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'e7e6', san: 'e6', note: 'Blunts the bishop.' },
            { uci: 'f4f5', san: 'f5', note: 'A pawn sacrifice to open lines.' },
            { uci: 'g8e7', san: 'Nge7' },
            { uci: 'f5e6', san: 'fxe6' },
            { uci: 'd7e6', san: 'dxe6', note: "Black's centre is solid and the d-file is open." }
          ]
        },
        {
          id: 'nf3',
          name: '3.Nf3 e6 4.d4',
          kind: 'Sideline',
          summary: 'White opens the position after all, and Black reaches a Taimanov Sicilian.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e7e6', san: 'e6', note: 'Keeps ...d5 and ...Nge7 ideas open.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'd8c7', san: 'Qc7', note: 'An Open Sicilian after all: this is the Taimanov.' }
          ]
        }
      ],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'The f4-f5 kingside storm', text: "If Black is slow on the queenside, White's f4-f5, Qd2 and Bh6 build a dangerous attack. Get ...b5-b4 and ...Nd4 going, and keep ...f5 in mind to stop f5." },
        { kind: 'Risk', side: 'black', title: 'Bc4 and f5 in the Grand Prix', text: 'In the Grand Prix, an unprepared Black can face f5 sacrifices aimed at e6 and f7. Blunt the c4 bishop with ...e6 and answer f5 calmly with ...Nge7.' }
      ],
      transpositions: [
        { to: 'b-sicilian-taimanov', note: '3.Nf3 e6 4.d4 cxd4 5.Nxd4 Qc7 reaches the Taimanov main position.' }
      ],
      lessons: ['attack-10']
    },
    {
      id: 'b-french-winawer',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-french',
      family: 'French Defence',
      name: 'French: Winawer Variation',
      short: 'Winawer Variation (3...Bb4)',
      aliases: ['Winawer', 'Nimzowitsch Variation'],
      eco: 'C18',
      defining: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1c3', 'f8b4'],
      moves: '1.e4 e6 2.d4 d5 3.Nc3 Bb4',
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 25,
      summary: "Pin the c3 knight and pressure e4. Unbalanced and combative: Black often gives up the dark bishop to damage White's pawns.",
      idea: "3...Bb4 pins the knight that defends e4. After 4.e5 c5 5.a3 Bxc3+ 6.bxc3, White has the bishop pair and kingside chances, while Black has the better structure and targets the doubled c-pawns with ...Qa5, ...Nbc6 and ...Bd7. Black must look after the dark squares around the king, especially g7, once White's queen comes to g4.",
      plans: { white: ['Attack the weakened dark squares with Qg4, h4-h5, or Nf3 with a4 and Ba3', 'Use the bishop pair and open lines with dxc5 or a timely f4-f5'], black: ['Hit d4 and the c3 pawn with ...c5, ...Ne7, ...Nbc6, ...Qa5 and ...Bd7', "Close the queenside with ...c4 to fix White's pawns, then play ...f6 or attack the a3 and c3 pawns", 'Against Qg4, either castle and defend with ...Ng6, or give up g7 for counterplay in the Poisoned Pawn line'] },
      responses: [
        { moves: '4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7', name: 'Main line', note: '7.Qg4, attacking g7, and 7.Nf3 are the main tries. Black answers 7.Qg4 with 7...O-O or the sharp 7...Qc7.', line: 'qg4' },
        { moves: '4.exd5 exd5', name: 'Exchange', note: 'Symmetrical and quiet. Black develops ...Nf6 or ...Ne7, castles and is comfortable.', line: 'exchange' },
        { moves: '4.e5 c5 5.Bd2', name: '5.Bd2', note: 'White avoids doubled pawns. Black develops with ...Ne7 and ...Nbc6, or takes on d4 and opens the c-file.' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'f8b4', san: 'Bb4', note: 'Pins the knight that defends e4.' },
          { uci: 'e4e5', san: 'e5' },
          { uci: 'c7c5', san: 'c5', note: "Strikes at the base of White's pawn chain at once." },
          { uci: 'a2a3', san: 'a3' },
          { uci: 'b4c3', san: 'Bxc3+' },
          { uci: 'b2c3', san: 'bxc3', note: 'Doubled c-pawns for White, but also the bishop pair.' },
          { uci: 'g8e7', san: 'Ne7', note: 'With f6 covered by the e5 pawn, the knight develops to e7, ready for f5 or g6.' },
          { uci: 'd1g4', san: 'Qg4', note: 'Attacks g7, which the bishop no longer defends.' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'b8c6', san: 'Nbc6' },
          { uci: 'g4h5', san: 'Qh5' },
          { uci: 'e7g6', san: 'Ng6', note: "Blocks the bishop's diagonal towards h7 and holds the kingside." }
        ]
      },
      lines: [
        {
          id: 'qg4',
          name: '7.Qg4 O-O',
          kind: 'Main line',
          summary: 'White attacks g7. Black castles and defends with ...Nbc6 and ...Ng6, then plays ...Qc7 and ...c4 or ...f5.',
          moves: [
            { uci: 'e4e5', san: 'e5' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'b4c3', san: 'Bxc3+' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'g8e7', san: 'Ne7' },
            { uci: 'd1g4', san: 'Qg4', note: 'Attacks g7.' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'b8c6', san: 'Nbc6' },
            { uci: 'g4h5', san: 'Qh5' },
            { uci: 'e7g6', san: 'Ng6', note: 'Holds the kingside; next ...Qc7 and ...c4 or ...f5.' }
          ]
        },
        {
          id: 'nf3',
          name: '7.Nf3 Qa5',
          kind: 'Main line',
          summary: 'The positional main line. Black hits c3 and a3 with the queen and develops ...Nbc6 and ...Bd7.',
          moves: [
            { uci: 'e4e5', san: 'e5' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'b4c3', san: 'Bxc3+' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'g8e7', san: 'Ne7' },
            { uci: 'g1f3', san: 'Nf3', note: 'The positional main line.' },
            { uci: 'd8a5', san: 'Qa5', note: 'Hits c3 and a3.' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'b8c6', san: 'Nbc6' },
            { uci: 'a3a4', san: 'a4' },
            { uci: 'c8d7', san: 'Bd7', note: 'Black keeps up the pressure on the queenside.' }
          ]
        },
        {
          id: 'exchange',
          name: '4.exd5 exd5',
          kind: 'Sideline',
          summary: 'A symmetrical structure. Black develops quickly and gives the bishop for the knight when White plays a3.',
          moves: [
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'b8c6', san: 'Nc6', note: 'Develops and eyes d4.' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'b4c3', san: 'Bxc3+' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'g8e7', san: 'Nge7', note: 'Symmetrical pawns and an easy game.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'black',
          title: 'The g7 pawn after Qg4',
          text: 'After ...Bxc3+ nothing defends g7 except the king. Against 7.Qg4, decide in advance between 7...O-O, 7...Qc7 and 7...Kf8; improvising often costs g7 or the kingside.',
          uci: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1c3', 'f8b4', 'e4e5', 'c7c5', 'a2a3', 'b4c3', 'b2c3', 'g8e7', 'd1g4']
        },
        { kind: 'Risk', side: 'black', title: 'Holes on the dark squares', text: 'Without the dark-squared bishop, f6, g7 and h6 can become holes. Keep a knight on g6 or e7 and do not open the kingside lightly.' },
        { kind: 'Mistake', side: 'black', title: '...c4 as a default', text: 'Closing the queenside with ...c4 removes the pressure on d4 and gives White a free hand on the kingside. It is a strategic decision, not an automatic move.' }
      ],
      lessons: ['strategy-1', 'strategy-4'],
      uncertain: 'After 7.Qg4, theory has shifted over the years between 7...O-O, 7...Qc7 and 7...Kf8; the 7...O-O line is given as one sound choice, not the only one.'
    },
    {
      id: 'b-french-rubinstein',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-french',
      family: 'French Defence',
      name: 'French: Rubinstein Variation',
      short: 'Rubinstein Variation (3...dxe4)',
      aliases: ['Rubinstein French'],
      eco: 'C10',
      defining: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1c3', 'd5e4', 'c3e4', 'b8d7'],
      moves: '1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7',
      difficulty: 'Intermediate',
      style: 'Solid',
      minutes: 12,
      summary: 'Give up the centre with 3...dxe4 for simple, solid development and the freeing ...c5 break.',
      idea: "Black exchanges the d5 pawn for e4, prepares ...Ngf6 with ...Nd7 so that a knight can recapture on f6, and then plays ...c5 to challenge d4. White gets more space and easier development, but Black's position has no weaknesses. The c8 bishop is developed later, often with ...b6 and ...Bb7.",
      plans: { white: ['Use the extra space: Nf3, Bd3, Qe2, Bg5 and often O-O-O', 'After dxc5, use the queenside majority and pressure on the d-file'], black: ['Play ...Nd7 and ...Ngf6 to challenge the e4 knight, then ...c5', 'Develop the c8 bishop via b7 or d7 and castle short', "Trade pieces: Black's sound structure holds well in endgames"] },
      responses: [
        { moves: '5.Nf3 Ngf6 6.Nxf6+ Nxf6', name: 'Main line', note: '7.Bd3 c5 or 7.c3 c5 (7...Be7 is also fine): Black frees the game with ...c5 and is close to equal.', line: 'main' },
        { moves: '5.Nf3 Ngf6 6.Bg5', name: '6.Bg5', note: '6...h6 (if 7.Bxf6 Nxf6, Black has the bishop pair) or the solid 6...Be7 7.Nxf6+ Bxf6. Either way Black castles and frees the game with ...c5.', line: 'bg5' },
        { moves: '5.Nf3 Ngf6 6.Bd3 Nxe4 7.Bxe4 Nf6', name: '6.Bd3', note: 'The bishop is hit at once; after 8.Bd3 c5 Black has a sound, active position.', line: 'bd3' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd5e4', san: 'dxe4', note: 'The Rubinstein: Black gives up the centre for simple development.' },
          { uci: 'c3e4', san: 'Nxe4' },
          { uci: 'b8d7', san: 'Nd7', note: 'Prepares ...Ngf6, so a knight can recapture on f6.' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g8f6', san: 'Ngf6' },
          { uci: 'e4f6', san: 'Nxf6+' },
          { uci: 'd7f6', san: 'Nxf6' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'c7c5', san: 'c5', note: 'The freeing break: Black challenges d4 at once.' },
          { uci: 'd4c5', san: 'dxc5' },
          { uci: 'f8c5', san: 'Bxc5' },
          { uci: 'd1e2', san: 'Qe2' },
          { uci: 'e8g8', san: 'O-O', note: 'Black is fully developed; next come ...b6 and ...Bb7.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '5.Nf3 Ngf6 6.Nxf6+ Nxf6 7.Bd3 c5',
          kind: 'Main line',
          summary: 'Black trades a pair of knights and frees the game with ...c5, then completes development with ...O-O, ...b6 and ...Bb7.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Ngf6' },
            { uci: 'e4f6', san: 'Nxf6+' },
            { uci: 'd7f6', san: 'Nxf6' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'c7c5', san: 'c5', note: 'The freeing break.' },
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'f8c5', san: 'Bxc5' },
            { uci: 'd1e2', san: 'Qe2' },
            { uci: 'e8g8', san: 'O-O', note: 'Fully developed; ...b6 and ...Bb7 come next.' }
          ]
        },
        {
          id: 'bg5',
          name: '6.Bg5 h6',
          kind: 'Alternative',
          summary: 'Black asks the bishop at once; if it takes on f6, Black has the bishop pair and plays ...c5.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Ngf6' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'h7h6', san: 'h6', note: 'Asks the bishop at once.' },
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'd7f6', san: 'Nxf6', note: 'Black has the bishop pair; ...c5 follows.' }
          ]
        },
        {
          id: 'bd3',
          name: '6.Bd3 Nxe4',
          kind: 'Alternative',
          summary: 'Black trades the active e4 knight and then breaks with ...c5.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Ngf6' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'f6e4', san: 'Nxe4', note: 'Trades the active knight.' },
            { uci: 'd3e4', san: 'Bxe4' },
            { uci: 'd7f6', san: 'Nf6' },
            { uci: 'e4d3', san: 'Bd3' },
            { uci: 'c7c5', san: 'c5', note: 'The same freeing break.' }
          ]
        }
      ],
      pitfalls: [
        { kind: 'Mistake', side: 'black', title: 'Forgetting ...c5', text: 'If ...c5 never comes, the c8 bishop stays behind the e6 pawn and Black is simply cramped. Make ...c5, then ...b6 and ...Bb7, the priority.' },
        { kind: 'Mistake', side: 'black', title: 'Breaking with ...e5 too early', text: 'An early ...e5 usually just loses a pawn to dxe5 or Nxe5, because nothing defends it. The ...c5 break is the safe one.' },
        { kind: 'Risk', side: 'black', title: "White's extra space", text: 'White has more space and easier development. Exchanging a pair of knights on f6 helps Black; avoiding exchanges usually leaves Black passive.' }
      ],
      transpositions: [
        { to: 'b-french-vs-tarrasch', note: 'Against 3.Nd2, 3...dxe4 4.Nxe4 Nd7 reaches the Rubinstein too.' }
      ],
      lessons: ['black-vs-e4-19']
    },
    {
      id: 'b-french-vs-tarrasch',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-french',
      family: 'French Defence',
      name: 'French: Black vs the Tarrasch (3...c5)',
      short: 'vs the Tarrasch (3.Nd2 c5)',
      aliases: ['Tarrasch Variation', 'French Tarrasch'],
      eco: 'C07',
      defining: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1d2', 'c7c5'],
      moves: '1.e4 e6 2.d4 d5 3.Nd2 c5',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 16,
      summary: 'Meet 3.Nd2 by striking at d4 with 3...c5, often accepting an isolated d-pawn for free piece play.',
      idea: '3.Nd2 avoids the Winawer pin. 3...c5 hits d4 at once. After 4.exd5, Black chooses between 4...Qxd5, keeping a healthy structure and centralising the queen, and 4...exd5, accepting an isolated d-pawn for active pieces. Both are well-established.',
      plans: { white: ['Gain time on the black queen with Ngf3, Bc4 and Nb3', 'Against an isolated d-pawn, blockade d4 and trade pieces'], black: ['After 4...Qxd5, develop quickly with ...cxd4, ...Qd6, ...Nf6, ...Nc6 and ...Be7', 'With an isolated pawn, use the open lines: ...Nc6, ...Bd6, ...Nge7 and ...O-O'] },
      responses: [
        { moves: '4.exd5 Qxd5 5.Ngf3 cxd4 6.Bc4', name: '4...Qxd5 main line', note: "6...Qd6 7.O-O Nf6 8.Nb3 Nc6 9.Nbxd4 Nxd4 10.Nxd4 a6: a clear, symmetrical structure where Black's position is sound.", line: 'qxd5' },
        { moves: '4.exd5 exd5 5.Ngf3 Nc6', name: 'Isolated pawn line', note: "After 6.Bb5 Bd6 7.dxc5 Bxc5 8.O-O Nge7, Black's pieces are active and the isolated pawn is well defended.", line: 'exd5' },
        { moves: '4.Ngf3 cxd4 5.exd5 Qxd5 6.Bc4', name: '4.Ngf3', note: 'Transposes to the 4...Qxd5 line.', line: 'ngf3' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'b1d2', san: 'Nd2', note: 'Avoids the Winawer pin and keeps c3 free for a pawn.' },
          { uci: 'c7c5', san: 'c5', note: 'Strikes at d4 straight away.' },
          { uci: 'e4d5', san: 'exd5' },
          { uci: 'd8d5', san: 'Qxd5', note: 'Recaptures with the queen, so Black keeps a healthy pawn structure.' },
          { uci: 'g1f3', san: 'Ngf3' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'f1c4', san: 'Bc4' },
          { uci: 'd5d6', san: 'Qd6', note: 'Drops back to a safe central square.' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'd2b3', san: 'Nb3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'b3d4', san: 'Nbxd4' },
          { uci: 'c6d4', san: 'Nxd4', note: 'Trades towards a simple, balanced middlegame.' }
        ]
      },
      lines: [
        {
          id: 'qxd5',
          name: '4.exd5 Qxd5',
          kind: 'Main line',
          summary: 'Black keeps a healthy structure; after the queen drops to d6 and the d4 pawn is exchanged, a clear, balanced position arises.',
          moves: [
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'd8d5', san: 'Qxd5', note: 'Keeps a healthy pawn structure.' },
            { uci: 'g1f3', san: 'Ngf3' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'd5d6', san: 'Qd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd2b3', san: 'Nb3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'b3d4', san: 'Nbxd4' },
            { uci: 'c6d4', san: 'Nxd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'a7a6', san: 'a6', note: 'Stops Nb5 and prepares ...Qc7 or ...b5.' }
          ]
        },
        {
          id: 'exd5',
          name: '4.exd5 exd5',
          kind: 'Alternative',
          summary: 'Black accepts an isolated d-pawn for active pieces: ...Nc6, ...Bd6 and ...Ne7 with quick castling.',
          moves: [
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'e6d5', san: 'exd5', note: 'Accepts an isolated pawn for active pieces.' },
            { uci: 'g1f3', san: 'Ngf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1b5', san: 'Bb5' },
            { uci: 'f8d6', san: 'Bd6' },
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'd6c5', san: 'Bxc5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'g8e7', san: 'Ne7' },
            { uci: 'd2b3', san: 'Nb3' },
            { uci: 'c5d6', san: 'Bd6', note: 'The isolated d-pawn is well supported by active pieces.' }
          ]
        },
        {
          id: 'ngf3',
          name: '4.Ngf3',
          kind: 'Sideline',
          summary: 'Usually transposes to the 4...Qxd5 main line.',
          moves: [
            { uci: 'g1f3', san: 'Ngf3' },
            { uci: 'c5d4', san: 'cxd4', note: 'Exchanges first; the queen recaptures next.' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'd8d5', san: 'Qxd5' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'd5d6', san: 'Qd6', note: 'Back in the 4...Qxd5 main line.' }
          ]
        }
      ],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'The isolated pawn in the ending', text: 'With 4...exd5 Black accepts an isolated d-pawn. If many pieces are traded it becomes a target, so keep the pieces active and avoid passive endgames.' },
        { kind: 'Risk', side: 'black', title: 'The queen chased after 4...Qxd5', text: 'The centralised queen can be hit by Bc4 and Nb3. Drop it to d6 (or d8) in time and do not grab material that lets White gain more tempi on it.' }
      ],
      transpositions: [
        { to: 'b-french-rubinstein', note: '3...dxe4 against 3.Nd2 transposes to the Rubinstein.' }
      ],
      lessons: ['black-vs-e4-19', 'strategy-6']
    },
    {
      id: 'b-french-advance',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-french',
      family: 'French Defence',
      name: 'French: Black vs the Advance (3.e5)',
      short: 'vs the Advance (3.e5)',
      aliases: ['Advance Variation', 'French Advance'],
      eco: 'C02',
      defining: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'e4e5', 'c7c5'],
      moves: '1.e4 e6 2.d4 d5 3.e5 c5',
      difficulty: 'Beginner',
      style: 'Positional',
      minutes: 14,
      summary: "Against 3.e5, hit the base of White's pawn chain with ...c5, then pile up on d4 with ...Nc6 and ...Qb6.",
      idea: "White's chain d4-e5 cramps Black's kingside, so Black attacks its base. ...c5, ...Nc6 and ...Qb6 put pressure on d4, and a knight on f5 (via e7 or h6) adds more. Later ...f6 hits the head of the chain. Before grabbing d4, Black must check for tricks on the b5-e8 diagonal.",
      plans: { white: ['Defend d4 with c3, Nf3 and Be2 or Bd3, keeping the space-gaining e5 pawn', 'Attack on the kingside, helped by the cramping e5 pawn'], black: ['Attack d4 with ...c5, ...Nc6, ...Qb6, ...cxd4 and a knight on f5', 'Undermine e5 later with ...f6', 'Develop the c8 bishop with ...Bd7 and use the open c-file'] },
      responses: [
        { moves: '4.c3 Nc6 5.Nf3 Qb6', name: 'Main line', note: '6.a3, preparing b4, is met by 6...c4 or 6...Nh6; after 6.Be2, ...cxd4 and ...Nh6-f5 keep up the pressure on d4.', line: 'main' },
        { moves: '4.c3 Nc6 5.Nf3 Qb6 6.Bd3 cxd4 7.cxd4 Bd7', name: 'Milner-Barry set-up', note: '7...Bd7 is the safe path: taking twice on d4 runs into the Bb5+ trick (see the lesson).', line: 'bd3' },
        { moves: '4.dxc5 Bxc5', name: '4.dxc5', note: 'Black regains the pawn with development, then attacks e5 with ...Nc6, ...Qc7 or ...f6.', line: 'dxc5' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'e4e5', san: 'e5', note: "Gains space and cramps Black's kingside." },
          { uci: 'c7c5', san: 'c5', note: 'Attacks the base of the pawn chain.' },
          { uci: 'c2c3', san: 'c3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'd8b6', san: 'Qb6', note: 'Three pieces now aim at d4.' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'c3d4', san: 'cxd4' },
          { uci: 'g8h6', san: 'Nh6', note: 'Heading for f5, where it adds pressure on d4.' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'h6f5', san: 'Nf5', note: 'Now d4 is attacked by knight, knight and queen, so White must keep defending it.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '4.c3 Nc6 5.Nf3 Qb6 6.a3',
          kind: 'Main line',
          summary: 'White prepares b4. Black closes the queenside with ...c4 and puts the knight on a5, fixing the queenside pawns.',
          moves: [
            { uci: 'c2c3', san: 'c3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd8b6', san: 'Qb6' },
            { uci: 'a2a3', san: 'a3', note: 'Prepares b4.' },
            { uci: 'c5c4', san: 'c4', note: 'Closes the queenside before b4.' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'c6a5', san: 'Na5', note: 'Heads for b3 and fixes the queenside.' }
          ]
        },
        {
          id: 'be2',
          name: '6.Be2 cxd4 7.cxd4 Nh6',
          kind: 'Alternative',
          summary: 'Black exchanges on d4 and brings the knight to f5, piling up on d4, then trades the bishop that defends it.',
          moves: [
            { uci: 'c2c3', san: 'c3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd8b6', san: 'Qb6' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'g8h6', san: 'Nh6', note: 'Heading for f5.' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'h6f5', san: 'Nf5' },
            { uci: 'c3a4', san: 'Na4' },
            { uci: 'b6a5', san: 'Qa5+', note: 'The queen keeps an eye on the queenside.' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'f8b4', san: 'Bb4', note: 'Trades the bishop that defends d4.' }
          ]
        },
        {
          id: 'bd3',
          name: '6.Bd3 (Milner-Barry)',
          kind: 'Sharp try',
          summary: 'White offers d4. With 7...Bd7 first, Black removes the Bb5+ trick and can take the pawn, then must defend accurately.',
          moves: [
            { uci: 'c2c3', san: 'c3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd8b6', san: 'Qb6' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'c8d7', san: 'Bd7', note: 'Removes the Bb5+ trick before grabbing.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c6d4', san: 'Nxd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'b6d4', san: 'Qxd4', note: 'The Milner-Barry Gambit: Black accepts a pawn and must defend.' }
          ]
        },
        {
          id: 'dxc5',
          name: '4.dxc5',
          kind: 'Sideline',
          summary: 'White gives up the base of the chain. Black regains the pawn with development and hits e5 with ...f6.',
          moves: [
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8c5', san: 'Bxc5', note: 'The pawn is back with development.' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'f7f6', san: 'f6', note: 'Hits e5, the head of the chain.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: 'Taking twice on d4: Bb5+',
          text: 'After 6.Bd3 cxd4 7.cxd4, grabbing with 7...Nxd4? 8.Nxd4 Qxd4?? loses the queen to 9.Bb5+, a discovered attack from the d1 queen. Play 7...Bd7 first.',
          uci: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'e4e5', 'c7c5', 'c2c3', 'b8c6', 'g1f3', 'd8b6', 'f1d3', 'c5d4', 'c3d4', 'c6d4', 'f3d4', 'b6d4', 'd3b5']
        },
        { kind: 'Mistake', side: 'black', title: 'Starting with ...f6', text: '...f6 hits the head of the chain, which White can support with Nf3 and f4. Attack the base with ...c5 first, and use ...f6 once d4 is under pressure.' },
        { kind: 'Risk', side: 'black', title: 'The cramped kingside', text: 'The e5 pawn takes f6 from the g8 knight. Develop it via e7 or h6 to f5, where it adds pressure to d4.' }
      ],
      lessons: ['black-vs-e4-4', 'strategy-4', 'white-gambits-3'],
      gambits: []
    },
    {
      id: 'b-caro-kann-classical',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-caro-kann',
      family: 'Caro-Kann Defence',
      name: 'Caro-Kann: Classical Variation (4...Bf5)',
      short: 'Classical Variation (4...Bf5)',
      aliases: ['Classical Caro-Kann', 'Capablanca Variation'],
      eco: 'B18',
      defining: ['e2e4', 'c7c6', 'd2d4', 'd7d5', 'b1c3', 'd5e4', 'c3e4', 'c8f5'],
      moves: '1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Bf5',
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 14,
      summary: 'Develop the light-squared bishop actively before ...e6. Healthy pawns and a reliable, easy-to-follow plan.',
      idea: 'Black takes on e4 and develops the bishop to f5 before closing it in with ...e6. White gains time chasing it with Ng3 and h4-h5, but the bishop survives on h7 and is exchanged on d3. Black then plays ...Nd7, ...Ngf6, ...e6 and ...Be7 or ...Qc7, often castling long, and gets a sound, slightly passive but very solid game.',
      plans: { white: ['Chase the bishop with Ng3 and h4-h5, gaining kingside space', 'Castle long, then press in the centre with Ne5 or on the kingside'], black: ['Meet h4 with ...h6, retreat ...Bh7 after h5, and trade bishops on d3', "Develop ...Nd7, ...Ngf6, ...e6 and ...Qc7, and castle on the side away from White's pawns", 'Free the game later with ...c5'] },
      responses: [
        { moves: '5.Ng3 Bg6 6.h4 h6', name: 'Main line', note: '7.Nf3 Nd7 8.h5 Bh7 9.Bd3 Bxd3 10.Qxd3 e6: Black trades the bishop and develops calmly.', line: 'h4' },
        { moves: '5.Ng3 Bg6 6.Nf3 Nd7', name: '6.Nf3', note: 'Without an early h4, Black develops ...Ngf6 and ...e6; 7.h4 h6 8.h5 Bh7 usually transposes.', line: 'nf3' },
        { moves: '5.Ng3 Bg6 6.Bc4 e6', name: '6.Bc4', note: "6...e6 blunts the bishop's pressure on f7; Black continues ...Nf6, ...Bd6 and ...Nbd7.", line: 'bc4' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd5e4', san: 'dxe4' },
          { uci: 'c3e4', san: 'Nxe4' },
          { uci: 'c8f5', san: 'Bf5', note: 'Develops the bishop before ...e6 shuts it in.' },
          { uci: 'e4g3', san: 'Ng3' },
          { uci: 'f5g6', san: 'Bg6' },
          { uci: 'h2h4', san: 'h4', note: 'Threatens h5, trapping the bishop.' },
          { uci: 'h7h6', san: 'h6', note: 'Gives the bishop a retreat square on h7.' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8d7', san: 'Nd7' },
          { uci: 'h4h5', san: 'h5', note: 'Gains space; the pawn on h5 may become a target later.' },
          { uci: 'g6h7', san: 'Bh7' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'h7d3', san: 'Bxd3', note: 'Trades off the bishop rather than leaving it passive on h7.' }
        ]
      },
      lines: [
        {
          id: 'h4',
          name: '5.Ng3 Bg6 6.h4 h6 (main line)',
          kind: 'Main line',
          summary: 'White gains kingside space with h4-h5. Black gives the bishop h7, trades it on d3 and develops ...e6, ...Ngf6 and ...Be7 or ...Qc7.',
          moves: [
            { uci: 'e4g3', san: 'Ng3' },
            { uci: 'f5g6', san: 'Bg6' },
            { uci: 'h2h4', san: 'h4' },
            { uci: 'h7h6', san: 'h6', note: 'Gives the bishop h7 before h5 arrives.' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8d7', san: 'Nd7' },
            { uci: 'h4h5', san: 'h5' },
            { uci: 'g6h7', san: 'Bh7' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'h7d3', san: 'Bxd3', note: 'Trades the bishop rather than leaving it passive.' },
            { uci: 'd1d3', san: 'Qxd3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'g8f6', san: 'Ngf6', note: 'Next ...Be7 or ...Qc7, often with long castling.' }
          ]
        },
        {
          id: 'nf3',
          name: '6.Nf3 Nd7',
          kind: 'Alternative',
          summary: 'Without an early h4, Black develops first; the usual h4-h5 plan later transposes to the main line.',
          moves: [
            { uci: 'e4g3', san: 'Ng3' },
            { uci: 'f5g6', san: 'Bg6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8d7', san: 'Nd7', note: 'Develops first; the h-pawn plan can wait.' },
            { uci: 'h2h4', san: 'h4' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'h4h5', san: 'h5' },
            { uci: 'g6h7', san: 'Bh7', note: 'Usually transposes to the main line.' }
          ]
        },
        {
          id: 'bc4',
          name: '6.Bc4 e6',
          kind: 'Alternative',
          summary: 'Black blunts the bishop on c4 with ...e6, develops ...Nf6 and challenges the f4 knight with ...Bd6.',
          moves: [
            { uci: 'e4g3', san: 'Ng3' },
            { uci: 'f5g6', san: 'Bg6' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'e7e6', san: 'e6', note: "Blunts the bishop's pressure on f7." },
            { uci: 'g1e2', san: 'N1e2' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e2f4', san: 'Nf4' },
            { uci: 'f8d6', san: 'Bd6', note: 'Challenges the f4 knight and prepares to castle.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: 'h4-h5 traps the g6 bishop',
          text: 'After 5.Ng3 Bg6 6.h4, a careless move such as 6...Nd7? allows 7.h5, and the bishop has no safe square: h7 is blocked and f5 and e4 are covered. Meet h4 with ...h6 or ...h5.',
          uci: ['e2e4', 'c7c6', 'd2d4', 'd7d5', 'b1c3', 'd5e4', 'c3e4', 'c8f5', 'e4g3', 'f5g6', 'h2h4', 'b8d7', 'h4h5']
        },
        { kind: 'Mistake', side: 'black', title: 'Castling short into the h-pawn', text: "With White's pawn on h5 and White often castling long, castling short can walk into a pawn storm. Black usually castles long or keeps the king in the centre for a while." },
        { kind: 'Risk', side: 'black', title: 'Passive pieces', text: 'The structure is very solid but Black has less space. Free the game in time with ...c5 or ...e5, or White builds up with Ne5 and Qe2 at leisure.' }
      ],
      lessons: ['openings-2', 'black-vs-e4-3', 'white-openings-3']
    },
    {
      id: 'b-caro-kann-advance',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-caro-kann',
      family: 'Caro-Kann Defence',
      name: 'Caro-Kann: Black vs the Advance (3.e5 Bf5)',
      short: 'vs the Advance (3.e5 Bf5)',
      aliases: ['Advance Variation', 'Caro-Kann Advance'],
      eco: 'B12',
      defining: ['e2e4', 'c7c6', 'd2d4', 'd7d5', 'e4e5', 'c8f5'],
      moves: '1.e4 c6 2.d4 d5 3.e5 Bf5',
      difficulty: 'Intermediate',
      style: 'Solid',
      minutes: 16,
      summary: 'Against 3.e5, develop the bishop outside the pawn chain with 3...Bf5, then play ...e6 and the freeing ...c5.',
      idea: "The bishop goes to f5 before ...e6, so Black avoids the French's bad-bishop problem. Then ...e6, ...c5, ...Nc6 and ...Ne7 attack d4. White can play quietly with Nf3 and Be2 (the Short System) or sharply with Nc3, g4 and h4 to chase the bishop.",
      plans: { white: ['Short System: Nf3, Be2, O-O and c3 or c4, a quiet space advantage', 'Sharp lines: Nc3, g4, Nge2 and h4-h5 to hound the bishop'], black: ['Play ...e6, ...c5, ...Nc6 and ...Ne7, hitting d4', 'Keep the bishop safe: ...Bg6 or ...Bh7 against g4, and answer h4 with ...h5 or ...h6'] },
      responses: [
        { moves: '4.Nf3 e6 5.Be2', name: 'Short System', note: "5...c5 or 5...Nd7 with ...Ne7: Black completes development and attacks d4. White's space advantage is modest.", line: 'short' },
        { moves: '4.Nc3 e6 5.g4 Bg6 6.Nge2', name: 'Bayonet', note: '6...c5 strikes back in the centre; Black must be ready for h4-h5 and Nf4 against the bishop.', line: 'bayonet' },
        { moves: '4.h4 h5', name: '4.h4', note: '4...h5 (or 4...h6) gives the bishop safety; then ...e6, ...c5 and ...Ne7 as usual.', line: 'h4' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'e4e5', san: 'e5', note: 'Gains space; ...e6 now would shut in the c8 bishop.' },
          { uci: 'c8f5', san: 'Bf5', note: 'So the bishop comes out first.' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'c6c5', san: 'c5', note: 'Strikes at the base of the pawn chain.' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'b8d7', san: 'Nd7' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'g8e7', san: 'Ne7', note: 'Ready for ...Nc6, adding pressure to d4.' }
        ]
      },
      lines: [
        {
          id: 'short',
          name: '4.Nf3 e6 5.Be2 (Short System)',
          kind: 'Main line',
          summary: 'A quiet space advantage for White. Black hits the base with ...c5 and develops ...Nd7, ...Ne7 and ...Nc6.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'c6c5', san: 'c5', note: 'Strikes at the base of the chain.' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'b8d7', san: 'Nd7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'g8e7', san: 'Ne7', note: 'Ready for ...Nc6, adding pressure to d4.' }
          ]
        },
        {
          id: 'bayonet',
          name: '4.Nc3 e6 5.g4 (Bayonet)',
          kind: 'Sharp try',
          summary: 'White hunts the bishop with g4, h4 and Nf4. Black strikes with ...c5, answers h4 with ...h5 and keeps the bishop alive on h7.',
          moves: [
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g2g4', san: 'g4' },
            { uci: 'f5g6', san: 'Bg6' },
            { uci: 'g1e2', san: 'Nge2' },
            { uci: 'c6c5', san: 'c5', note: 'Hits back in the centre while White chases the bishop.' },
            { uci: 'h2h4', san: 'h4' },
            { uci: 'h7h5', san: 'h5' },
            { uci: 'e2f4', san: 'Nf4' },
            { uci: 'g6h7', san: 'Bh7', note: 'The bishop stays alive; the position is sharp and theory-heavy.' }
          ]
        },
        {
          id: 'h4',
          name: '4.h4 h5',
          kind: 'Alternative',
          summary: 'Black stops h5 at once and keeps g6 for the bishop, then develops normally with ...e6 and ...Ne7.',
          moves: [
            { uci: 'h2h4', san: 'h4' },
            { uci: 'h7h5', san: 'h5', note: 'Stops h5 and keeps g6 for the bishop.' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g8e7', san: 'Ne7', note: 'Normal development; ...Nd7 and ...dxc4 or ...c5 follow.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: '3...e6? shuts in the bishop',
          text: 'Playing ...e6 before ...Bf5 gives a French structure where the c8 bishop is locked in. The point of the Caro-Kann Advance is 3...Bf5 first.',
          uci: ['e2e4', 'c7c6', 'd2d4', 'd7d5', 'e4e5', 'e7e6']
        },
        { kind: 'Risk', side: 'black', title: 'Bishop hunted by g4 and h4', text: 'In lines with Nc3, g4 and Nge2, White chases the bishop with h4-h5 and Nf4. Know the retreats (...Bg6, ...Bh7) and the ...h5 or ...h6 answers.' },
        { kind: 'Risk', side: 'black', title: 'Qb3 against b7', text: 'With the bishop on f5, the b7 pawn has no defender. Watch for Qb3; ...Qb6 (offering a trade) or ...Qc7 meets it.' }
      ],
      lessons: ['strategy-4'],
      uncertain: '6.Be3 Nd7 7.O-O Ne7 is given as a typical Short System set-up; exact move orders vary in current theory.'
    },
    {
      id: 'b-scandinavian',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-scandinavian',
      family: 'Scandinavian Defence',
      name: 'Scandinavian: 3...Qa5',
      short: '3...Qa5 (main line)',
      aliases: ['Mieses-Kotroc Variation'],
      eco: 'B01',
      defining: ['e2e4', 'd7d5', 'e4d5', 'd8d5', 'b1c3', 'd5a5'],
      moves: '1.e4 d5 2.exd5 Qxd5 3.Nc3 Qa5',
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 12,
      summary: 'Challenge e4 on move one. After ...Qxd5 and ...Qa5, Black gets a sound, Caro-Kann-like set-up with active pieces.',
      idea: 'Black trades the d-pawn for e4 and accepts losing a tempo with the queen. From a5 the queen is out of the way, and once White plays d4 it pins the c3 knight. Black develops ...Nf6, ...c6, ...Bf5 or ...Bg4, and ...e6, then castles, reaching a solid structure without weaknesses.',
      plans: { white: ['Develop with gain of time: Nf3, Bc4 and Bd2, watching for Nd5 or Nb5 tricks against the queen', 'Castle long and use the extra central space'], black: ['Develop ...Nf6, ...c6, ...Bf5 (or ...Bg4) and ...e6, then castle', 'Keep the queen safe: ...c6 gives it a retreat to c7 and stops Nb5 and Nd5'] },
      responses: [
        { moves: '4.d4 Nf6 5.Nf3 c6', name: 'Main line', note: '6.Bc4 Bf5 7.Bd2 e6: Black develops ...Bb4 or ...Nbd7 and has a sound position.', line: 'main' },
        { moves: '4.d4 Nf6 5.Bc4 c6', name: '5.Bc4', note: 'Again ...c6 and ...Bf5. Watch for Bd2 combined with Nd5, which uncovers an attack on the queen.', line: 'bc4-early' },
        { moves: '4.Bc4 Nf6', name: '4.Bc4', note: 'Black plays ...c6 and ...Bf5 or ...Bg4 as usual; the queen stays comfortable on a5.', line: 'bc4' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'd7d5', san: 'd5', note: 'Challenges e4 at once.' },
          { uci: 'e4d5', san: 'exd5' },
          { uci: 'd8d5', san: 'Qxd5' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd5a5', san: 'Qa5', note: "Out of the way of White's pieces." },
          { uci: 'd2d4', san: 'd4', note: 'Now the queen on a5 pins the c3 knight.' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'c7c6', san: 'c6', note: 'Gives the queen a retreat to c7 and covers b5 and d5; still watch for Bd2 with Nd5.' },
          { uci: 'f1c4', san: 'Bc4' },
          { uci: 'c8f5', san: 'Bf5', note: 'Developed outside the pawn chain, as in the Caro-Kann.' },
          { uci: 'c1d2', san: 'Bd2' },
          { uci: 'e7e6', san: 'e6', note: 'Next come ...Bb4 or ...Be7, ...Nbd7 and castling.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '4.d4 Nf6 5.Nf3 c6 6.Bc4 Bf5',
          kind: 'Main line',
          summary: 'The classical set-up. Watch for Bd2 and Nd5: the queen goes back to d8 and Black recaptures on f6 with the queen.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c7c6', san: 'c6', note: 'Gives the queen c7 and covers b5 and d5.' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'c8f5', san: 'Bf5' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'c3d5', san: 'Nd5', note: 'Uncovers the d2 bishop against the queen.' },
            { uci: 'a5d8', san: 'Qd8' },
            { uci: 'd5f6', san: 'Nxf6+' },
            { uci: 'd8f6', san: 'Qxf6', note: 'The queen returns to the game; Black is solid.' }
          ]
        },
        {
          id: 'bc4-early',
          name: '4.d4 Nf6 5.Bc4',
          kind: 'Alternative',
          summary: 'The same set-up in a different order: ...c6, ...Bf5 and ...e6. Check for Nd5 tricks before each move.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'c7c6', san: 'c6', note: 'Gives the queen c7 and covers d5.' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c8f5', san: 'Bf5' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'e7e6', san: 'e6', note: 'The same set-up; check Nd5 tricks before each move.' }
          ]
        },
        {
          id: 'bc4',
          name: '4.Bc4 Nf6',
          kind: 'Alternative',
          summary: 'Without an early d4, the queen is not pinning anything; Black develops ...c6 and pins with ...Bg4.',
          moves: [
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c8g4', san: 'Bg4', note: 'Pins the knight; ...e6 and ...Nbd7 follow.' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'g4h5', san: 'Bh5', note: 'Keeps the pin.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'black',
          title: 'Bd2 with Nd5 or Nb5',
          text: 'Once a white bishop is on d2, a knight jump uncovers an attack on the a5 queen. Before each move, check that the queen has a safe square (c7, d8 or b6).',
          uci: ['e2e4', 'd7d5', 'e4d5', 'd8d5', 'b1c3', 'd5a5', 'd2d4', 'g8f6', 'g1f3', 'c7c6', 'f1c4', 'c8f5', 'c1d2', 'e7e6', 'c3d5']
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'The f5 bishop and g4',
          text: 'With the bishop on f5 and a knight on e5, White can hunt the bishop with g4 and h4. Know the retreats, or play ...c6 and ...e6 so the bishop has squares.',
          uci: ['e2e4', 'd7d5', 'e4d5', 'd8d5', 'b1c3', 'd5a5', 'd2d4', 'g8f6', 'g1f3', 'c8f5', 'f3e5', 'c7c6', 'g2g4']
        }
      ],
      transpositions: [
        { to: 'b-scandinavian-qd6', note: 'Both start 2...Qxd5 3.Nc3; the queen retreat on move three decides the variation.' }
      ],
      lessons: ['black-vs-e4-10']
    },
    {
      id: 'b-pirc',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-pirc',
      family: 'Pirc Defence',
      name: 'Pirc Defence',
      short: 'Pirc main line (3...g6)',
      aliases: ['Pirc-Ufimtsev Defence', 'Classical Pirc'],
      eco: 'B07',
      defining: ['e2e4', 'd7d6', 'd2d4', 'g8f6', 'b1c3', 'g7g6'],
      moves: '1.e4 d6 2.d4 Nf6 3.Nc3 g6',
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 16,
      summary: 'Let White build a big centre, fianchetto the bishop, then strike at the centre with ...e5 or ...c5.',
      idea: "Black invites White to occupy the centre, then targets it with the g7 bishop and pawn breaks. In the Classical line Black plays ...Bg7, ...O-O and ...Bg4 or ...c6, then ...e5. Against the aggressive Austrian Attack with f4, Black must hit back quickly with ...c5 or ...e5 before White's e5 push gains too much space.",
      plans: { white: ['Austrian Attack: f4, Nf3 and e5 to gain space and attack', '150 Attack: Be3, Qd2, Bh6 and h4-h5 against the castled king', 'Classical: Nf3, Be2 and O-O, keeping a solid space advantage'], black: ['Strike at the centre with ...e5 (after ...Nc6 or ...Nbd7) or with ...c5', 'Against the Be3 and Qd2 plans, play ...c6 and ...b5 for queenside counterplay', "Keep the g7 bishop: it is Black's best piece"] },
      responses: [
        { moves: '4.f4 Bg7 5.Nf3 O-O', name: 'Austrian Attack', note: '6.Bd3 and 6.Be3 are main; Black prepares ...c5, often via ...Na6, to hit the centre. Against 6.e5, the knight drops back and ...c5 follows.' },
        { moves: '4.Be3 c6', name: '150 Attack', note: 'With ...c6 and ...b5 Black gains queenside space; after 5.Qd2, delaying castling makes Bh6 and h4-h5 less effective.', line: '150' },
        { moves: '4.Nf3 Bg7 5.Be2 O-O 6.O-O Bg4', name: 'Classical', note: '7.Be3 Nc6 8.Qd2 e5 is the main line: Black pins the knight and challenges the centre. 6...c6 is a solid alternative.', line: 'classical' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6', note: 'Attacks e4, so White must defend it.' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'g7g6', san: 'g6', note: 'Prepares ...Bg7 to aim at the centre.' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'c8g4', san: 'Bg4', note: 'Pins the knight that controls d4 and e5.' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'b8c6', san: 'Nc6', note: 'Adds pressure to d4 and prepares ...e5.' },
          { uci: 'd1d2', san: 'Qd2' },
          { uci: 'e7e5', san: 'e5', note: 'The central strike: Black claims a share of the centre.' },
          { uci: 'd4d5', san: 'd5' },
          { uci: 'c6e7', san: 'Ne7', note: "The centre is closed; Black's play comes with ...Nd7 and ...f5, or ...c6." }
        ]
      },
      lines: [
        {
          id: 'classical',
          name: '4.Nf3 Bg7 5.Be2 O-O 6.O-O Bg4',
          kind: 'Main line',
          summary: 'Black pins the f3 knight, adds ...Nc6 and breaks with ...e5. After d5 the centre closes and Black plays ...Nd7 and ...f5.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c8g4', san: 'Bg4', note: 'Pins the knight that controls d4 and e5.' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'e7e5', san: 'e5', note: 'The central strike.' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'c6e7', san: 'Ne7', note: 'Closed centre: Black plays ...Nd7 and ...f5.' }
          ]
        },
        {
          id: '150',
          name: '4.Be3 c6 (150 Attack)',
          kind: 'Main line',
          summary: 'Black delays castling and the bishop, gains queenside space with ...b5 and breaks with ...e5.',
          moves: [
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'c7c6', san: 'c6', note: 'Flexible: ...b5 is coming, and castling can wait.' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e7e5', san: 'e5', note: 'Black claims a share of the centre.' }
          ]
        },
        {
          id: 'c6',
          name: '6...c6 (solid Classical)',
          kind: 'Alternative',
          summary: 'Instead of pinning, Black plays ...c6 and ...a5, then brings the knight to b4 via a6; a solid, flexible set-up.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c7c6', san: 'c6', note: 'Solid and flexible: ...b5 or ...Qc7 and ...e5 can follow.' },
            { uci: 'a2a4', san: 'a4' },
            { uci: 'a7a5', san: 'a5', note: 'Stops a5 and secures b4 for a knight.' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'b8a6', san: 'Na6', note: 'Heading for b4.' }
          ]
        }
      ],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'Too slow against the centre', text: "If Black never plays ...e5 or ...c5, White's space simply grows. Choose the central break early and prepare it with ...Nc6, ...Nbd7 or ...c6." },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Bh6 against an early castle',
          text: 'Against Be3, Qd2 and Bh6 (the 150 Attack), castling early gives White a target for h4-h5. Delay ...O-O and use ...c6 and ...b5 for counterplay.',
          uci: ['e2e4', 'd7d6', 'd2d4', 'g8f6', 'b1c3', 'g7g6', 'c1e3', 'f8g7', 'd1d2', 'e8g8', 'e3h6']
        }
      ],
      transpositions: [
        { to: 'b-modern', note: '1.e4 g6 2.d4 Bg7 3.Nc3 d6 4.Nf3 Nf6 reaches Pirc positions.' }
      ],
      lessons: ['white-openings-13']
    },
    {
      id: 'b-alekhine',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-alekhine',
      family: 'Alekhine Defence',
      name: 'Alekhine Defence',
      short: 'Main line (3.d4 d6)',
      aliases: ['Alekhine Modern Variation'],
      eco: 'B04',
      defining: ['e2e4', 'g8f6', 'e4e5', 'f6d5', 'd2d4', 'd7d6'],
      moves: '1.e4 Nf6 2.e5 Nd5 3.d4 d6',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 14,
      summary: "Provoke White's pawns forward with 1...Nf6, then attack them. Unusual and provocative, but sound.",
      idea: "Black lures White's pawns into the centre, then undermines them with ...d6, ...Bg4, ...c5 or ...dxe5. In the Modern Variation, 4.Nf3 Bg4, Black pins the knight that defends d4 and e5, then plays ...e6, ...Be7 and ...O-O. The black knight is often chased to b6, but White's big centre can become a target.",
      plans: { white: ['Grab space with c4, e5 and d4, or play the solid Modern Variation with 4.Nf3', "Use the space for a kingside attack or to cramp Black's pieces"], black: ['Undermine e5 with ...d6, then exchange on e5 or let White exchange on d6', 'Pin the f3 knight with ...Bg4 and pressure d4 with ...Nc6 and ...c5 or ...d5', 'In the Four Pawns Attack, hit the over-extended centre quickly with ...dxe5, ...Nc6 and ...Bf5'] },
      responses: [
        { moves: '4.Nf3 Bg4 5.Be2 e6', name: 'Modern Variation', note: "6.O-O Be7 7.c4 Nb6 8.h3 Bh5 9.exd6 cxd6: Black's position is solid and d4 can become a target.", line: 'modern' },
        { moves: '4.c4 Nb6 5.f4 dxe5 6.fxe5 Nc6', name: 'Four Pawns Attack', note: "7.Be3 Bf5 8.Nc3 e6: Black develops rapidly and attacks White's big but loose centre." },
        { moves: '4.c4 Nb6 5.exd6', name: 'Exchange', note: '5...cxd6 or 5...exd6 gives a solid structure; Black pressures c4 and d4 with ...g6, ...Bg7 and ...Nc6.', line: 'exchange' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'g8f6', san: 'Nf6', note: 'Invites the e-pawn forward.' },
          { uci: 'e4e5', san: 'e5' },
          { uci: 'f6d5', san: 'Nd5' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d6', san: 'd6', note: 'Attacks the e5 pawn straight away.' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'c8g4', san: 'Bg4', note: 'Pins the knight that defends e5 and d4.' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'd5b6', san: 'Nb6' },
          { uci: 'h2h3', san: 'h3' },
          { uci: 'g4h5', san: 'Bh5', note: 'Keeps the pin on f3.' },
          { uci: 'e5d6', san: 'exd6' },
          { uci: 'c7d6', san: 'cxd6', note: 'Compact pawns; d4 can become a target with ...Nc6 and ...d5.' }
        ]
      },
      lines: [
        {
          id: 'modern',
          name: '4.Nf3 Bg4 (Modern Variation)',
          kind: 'Main line',
          summary: 'Black pins the knight, develops ...e6 and ...Be7, and after the exchange on d6 targets d4 with ...Nc6 and ...d5.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c8g4', san: 'Bg4', note: 'Pins the knight that defends d4 and e5.' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'd5b6', san: 'Nb6' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'g4h5', san: 'Bh5', note: 'Keeps the pin.' },
            { uci: 'e5d6', san: 'exd6' },
            { uci: 'c7d6', san: 'cxd6', note: 'Compact pawns; ...Nc6 and ...d5 can hit d4.' }
          ]
        },
        {
          id: 'dxe5',
          name: '4.Nf3 dxe5 5.Nxe5 g6',
          kind: 'Alternative',
          summary: 'Black exchanges at once and fianchettoes; ...c6 supports the d5 knight. Avoid 5...Nd7?, which allows Nxf7.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd6e5', san: 'dxe5' },
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'g7g6', san: 'g6', note: 'A fianchetto; 5...Nd7? walks into 6.Nxf7.' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'c7c6', san: 'c6', note: 'Supports the d5 knight.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'e8g8', san: 'O-O', note: 'Solid development; Black challenges the e5 knight with ...Nd7 later.' }
          ]
        },
        {
          id: 'exchange',
          name: '4.c4 Nb6 5.exd6 cxd6 (Exchange)',
          kind: 'Alternative',
          summary: 'The asymmetrical recapture keeps tension. Black fianchettoes and puts pressure on d4 and c4 with ...Nc6 and the g7 bishop.',
          moves: [
            { uci: 'c2c4', san: 'c4' },
            { uci: 'd5b6', san: 'Nb6' },
            { uci: 'e5d6', san: 'exd6' },
            { uci: 'c7d6', san: 'cxd6', note: 'The asymmetrical recapture keeps more central tension.' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'a1c1', san: 'Rc1' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'b2b3', san: 'b3' },
            { uci: 'b8c6', san: 'Nc6', note: 'Pressure on d4 from the knight and the g7 bishop.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: '5...Nd7? and the f7 sacrifice',
          text: 'After 4.Nf3 dxe5 5.Nxe5, the natural-looking 5...Nd7? allows 6.Nxf7! Kxf7 7.Qh5+ with a dangerous attack on the exposed king. Play 5...g6 or 5...c6 instead.',
          uci: ['e2e4', 'g8f6', 'e4e5', 'f6d5', 'd2d4', 'd7d6', 'g1f3', 'd6e5', 'f3e5', 'b8d7', 'e5f7']
        },
        { kind: 'Risk', side: 'black', title: 'Drifting while White keeps the space', text: 'The Alekhine only works if Black hits the centre with ...d6, ...dxe5, ...c5 or ...Bg4. Passive moves leave Black cramped with a knight on b6 doing little.' }
      ],
      transpositions: [
        { to: 'b-alekhine-four-pawns', note: '4.c4 Nb6 5.f4 dxe5 leads to the Four Pawns Attack, covered as its own variation.' }
      ],
      lessons: ['black-vs-e4-12']
    },
    {
      id: 'b-e5-scotch-classical',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-scotch',
      family: 'Scotch Game',
      name: 'Scotch Game: Classical Variation (4...Bc5)',
      short: 'Classical Variation (4...Bc5)',
      aliases: ['Scotch: 4...Bc5'],
      eco: 'C45',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'd2d4', 'e5d4', 'f3d4', 'f8c5'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.Nxd4 Bc5',
      difficulty: 'Intermediate',
      style: 'Solid',
      minutes: 12,
      summary: 'Hit the d4 knight with the bishop at once. Active piece play against d4 and f2, with less structural commitment than 4...Nf6.',
      idea: 'The bishop attacks the d4 knight, which is now hit twice. Against 5.Be3, ...Qf6 adds a third attacker and eyes f2, so White spends a tempo on c3; Black develops ...Nge7 (f6 belongs to the queen), castles and plays ...Ne5, ...Qg6 or ...d5. Against 5.Nxc6, ...Qf6 hits f2 before recapturing, and against 5.Nb3 the bishop keeps its diagonal on b6.',
      plans: { white: ['Defend d4 with Be3 and c3, then develop Bc4 or Be2 and castle', 'Chase the bishop with Nb3 and a4-a5, or trade on c6 and play for a lead in development'], black: ['Pile up on d4 with ...Bc5, ...Qf6 and ...Nge7', 'Develop ...Nge7, ...O-O and ...d6 or ...d5, keeping the bishop on the g1-a7 diagonal', 'After Nb3, keep the bishop with ...Bb6 and meet a4 with ...a6 or ...a5'] },
      responses: [
        { moves: '5.Be3 Qf6 6.c3 Nge7', name: 'Main line', note: '7.Bc4 is usual; 7...Ne5 8.Be2 Qg6 hits e4 and g2, and Black often follows with ...d5.', line: 'main' },
        { moves: '5.Nxc6 Qf6', name: '5.Nxc6', note: 'Black hits f2 before recapturing: 6.Qd2 dxc6 7.Nc3 gives Black easy development; 6.Qf3 Qxf3 is a quiet alternative.', line: 'nxc6' },
        { moves: '5.Nb3 Bb6', name: '5.Nb3', note: 'The bishop keeps its diagonal. After 6.a4 a6 (or 6...a5) and Nc3, Black develops ...Nf6, ...d6 and ...O-O.', line: 'nb3' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'e5d4', san: 'exd4' },
          { uci: 'f3d4', san: 'Nxd4' },
          { uci: 'f8c5', san: 'Bc5', note: 'Attacks the d4 knight at once.' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'd8f6', san: 'Qf6', note: 'A third attacker on d4.' },
          { uci: 'c2c3', san: 'c3', note: 'Defends d4 with a pawn.' },
          { uci: 'g8e7', san: 'Nge7', note: 'The knight goes to e7, leaving f6 to the queen.' },
          { uci: 'f1c4', san: 'Bc4' },
          { uci: 'c6e5', san: 'Ne5' },
          { uci: 'c4e2', san: 'Be2' },
          { uci: 'f6g6', san: 'Qg6', note: 'Hits e4 and g2.' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'd7d5', san: 'd5', note: 'The central break frees the game.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '5.Be3 Qf6 6.c3',
          kind: 'Main line',
          summary: 'White props up d4; Black develops ...Nge7, chases the c4 bishop with ...Ne5 and hits e4 and g2 with ...Qg6 before breaking with ...d5.',
          moves: [
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'd8f6', san: 'Qf6', note: 'A third attacker on d4, and the queen also eyes f2.' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'g8e7', san: 'Nge7', note: 'The knight goes to e7 because the queen is on f6.' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'c6e5', san: 'Ne5', note: 'Hits the c4 bishop.' },
            { uci: 'c4e2', san: 'Be2' },
            { uci: 'f6g6', san: 'Qg6', note: 'Attacks e4 and g2 at the same time.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd7d5', san: 'd5', note: "The central break frees Black's game." }
          ]
        },
        {
          id: 'nxc6',
          name: '5.Nxc6 Qf6',
          kind: 'Alternative',
          summary: 'Black threatens mate on f2 first, then recaptures on c6 with the d-pawn for an open d-file and quick development.',
          moves: [
            { uci: 'd4c6', san: 'Nxc6' },
            { uci: 'd8f6', san: 'Qf6', note: 'Threatens mate on f2 before recapturing on c6.' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'd7c6', san: 'dxc6', note: 'Opens the c8 bishop and the d-file.' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g8e7', san: 'Ne7', note: 'Black develops ...Be6 and castles, with active pieces.' }
          ]
        },
        {
          id: 'nb3',
          name: '5.Nb3 Bb6',
          kind: 'Alternative',
          summary: 'The bishop stays on its diagonal. Meet a4 with ...a6 so the bishop has a7, then develop normally.',
          moves: [
            { uci: 'd4b3', san: 'Nb3' },
            { uci: 'c5b6', san: 'Bb6', note: 'Keeps the bishop on the g1-a7 diagonal.' },
            { uci: 'a2a4', san: 'a4' },
            { uci: 'a7a6', san: 'a6', note: 'Gives the bishop a7 if a5 comes.' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g8f6', san: 'Nf6', note: 'Normal development; ...d6 and ...O-O follow.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: '5...Nf6? loses the bishop',
          text: 'After 5.Be3, the natural 5...Nf6? allows 6.Nxc6!: if 6...bxc6 7.Bxc5 the bishop is lost, and 6...Bxe3 7.Nxd8 is worse. Keep the pressure on d4 with 5...Qf6 or move the bishop.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'd2d4', 'e5d4', 'f3d4', 'f8c5', 'c1e3', 'g8f6', 'd4c6']
        },
        { kind: 'Risk', side: 'black', title: 'Watch c7 after ...Qf6', text: 'With the queen on f6 and the bishop on c5, nothing guards c7. Whenever a white knight can reach b5, check that Nxc7+ forking king and rook is not possible.' },
        { kind: 'Risk', side: 'black', title: 'a4-a5 against the b6 bishop', text: 'After 5.Nb3 Bb6 6.a4, ignoring the pawn lets a5 gain time on the bishop. Play ...a6 (giving it a7) or ...a5 in good time.' }
      ],
      transpositions: [
        { to: 'b-e5-scotch', note: 'The same 3...exd4 4.Nxd4 position; 4...Nf6 leads to the Schmidt and Mieses lines instead.' }
      ],
      lessons: ['black-vs-e4-15']
    },
    {
      id: 'b-ruy-open',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-ruy-lopez',
      family: 'Ruy Lopez',
      name: 'Ruy Lopez: Open Variation (5...Nxe4)',
      short: 'Open Variation (5...Nxe4)',
      aliases: ['Open Ruy Lopez', 'Open Spanish'],
      eco: 'C80',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'a7a6', 'b5a4', 'g8f6', 'e1g1', 'f6e4'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Nxe4',
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 20,
      summary: 'Take the e4 pawn at once and support the knight with ...b5 and ...d5. Active pieces and open lines instead of the slow Closed battle.',
      idea: "Black grabs e4 while the e-file is still closed. After 6.d4 b5 7.Bb3 d5 8.dxe5 Be6, Black has a strong knight on e4, free development and queenside space, while White has the e5 pawn and pressure against the e4 knight and the d5 pawn. Black plays ...Be7 or ...Bc5 and ...O-O, defends e4 with ...Bf5 or ...f5 or reroutes the knight to c5, and must keep the queen off the d-file opposite White's queen.",
      plans: { white: ['Undermine the e4 knight with Nbd2, Bc2 and Re1, and use the e5 pawn for space', 'Target the d5 pawn and the queenside with Qe2, Rd1, c4 or a4, or play Nd4 against c6 and e6'], black: ['Keep the e4 knight active, supporting it with ...d5 and ...Bf5 or ...f5, or reroute it with ...Nc5', 'Develop fast: ...Be6, ...Be7 or ...Bc5, ...O-O', 'Use queenside space with ...b5, ...Nc5 and the ...d4 break at the right moment'] },
      responses: [
        { moves: '6.d4 b5 7.Bb3 d5 8.dxe5 Be6 9.Nbd2', name: '9.Nbd2', note: 'White challenges the e4 knight. 9...Nc5 10.c3 d4 and 9...Be7 are the main replies.', line: 'nbd2' },
        { moves: '6.d4 b5 7.Bb3 d5 8.dxe5 Be6 9.c3', name: '9.c3', note: 'Black chooses the classical 9...Be7 or the active 9...Bc5. With a knight on d4 coming, beware ...Qd7 (the Tarrasch trap).', line: 'c3' },
        { moves: '6.d4 b5 7.Bb3 d5 8.dxe5 Be6 9.Qe2', name: '9.Qe2', note: 'White plans Rd1 and c4 against d5. 9...Be7 10.Rd1 O-O is solid.', line: 'qe2' },
        { moves: '6.Re1 Nc5 7.Bxc6 dxc6 8.Nxe5 Be7', name: '6.Re1', note: 'A simpler line: Black returns the pawn and has the bishop pair and an easy game.', line: 're1' }
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
          { uci: 'b5a4', san: 'Ba4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f6e4', san: 'Nxe4', note: 'Takes the pawn while the e-file is still closed.' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'b7b5', san: 'b5', note: 'Drives the bishop away before ...d5.' },
          { uci: 'a4b3', san: 'Bb3' },
          { uci: 'd7d5', san: 'd5', note: 'Supports the knight and opens the c8 bishop.' },
          { uci: 'd4e5', san: 'dxe5' },
          { uci: 'c8e6', san: 'Be6' },
          { uci: 'c2c3', san: 'c3' },
          { uci: 'f8e7', san: 'Be7', note: 'The classical development; ...O-O follows.' }
        ]
      },
      lines: [
        {
          id: 'nbd2',
          name: '9.Nbd2 Nc5 10.c3 d4',
          kind: 'Main line',
          summary: 'White challenges the knight; Black steps to c5 and breaks with ...d4, opening lines for the bishops. Sharp and well analysed.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'b7b5', san: 'b5', note: 'Drives the bishop away before playing ...d5.' },
            { uci: 'a4b3', san: 'Bb3' },
            { uci: 'd7d5', san: 'd5', note: 'Supports the e4 knight and opens the c8 bishop.' },
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'c8e6', san: 'Be6' },
            { uci: 'b1d2', san: 'Nbd2', note: 'Challenges the e4 knight.' },
            { uci: 'e4c5', san: 'Nc5', note: 'Steps aside and keeps an eye on the b3 bishop.' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'd5d4', san: 'd4', note: 'A typical Open Ruy break: Black gains space and opens lines for the bishops.' }
          ]
        },
        {
          id: 'c3',
          name: '9.c3 Bc5',
          kind: 'Alternative',
          summary: 'The active bishop on c5 aims at f2. When White adds Bc2, the e4 knight is attacked twice: defend it with ...Bf5 or ...f5.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'a4b3', san: 'Bb3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'c8e6', san: 'Be6' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'f8c5', san: 'Bc5', note: 'The active bishop placement, aiming at f2.' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'b3c2', san: 'Bc2', note: 'Now the e4 knight is attacked twice.' },
            { uci: 'e6f5', san: 'Bf5', note: 'Defends it a second time; 11...f5 is the other main move.' }
          ]
        },
        {
          id: 'qe2',
          name: '9.Qe2',
          kind: 'Sideline',
          summary: 'White targets d5 with Rd1 and c4. Black develops quickly and castles; after c4 the d5 pawn needs active defence.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'a4b3', san: 'Bb3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'c8e6', san: 'Be6' },
            { uci: 'd1e2', san: 'Qe2', note: 'Plans Rd1 and c4 against d5.' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'f1d1', san: 'Rd1' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'b5c4', san: 'bxc4' },
            { uci: 'b3c4', san: 'Bxc4', note: 'The d5 pawn is under fire, so Black must develop actively.' }
          ]
        },
        {
          id: 're1',
          name: '6.Re1',
          kind: 'Sideline',
          summary: 'An early Re1 wins the pawn back, but Black gets the bishop pair and an easy game after ...Nc5 and ...Be7.',
          moves: [
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'e4c5', san: 'Nc5', note: 'The knight leaves e4 before the e-file opens.' },
            { uci: 'a4c6', san: 'Bxc6' },
            { uci: 'd7c6', san: 'dxc6' },
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'f8e7', san: 'Be7', note: 'Black has returned the pawn but has the bishop pair.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c5e6', san: 'Ne6', note: 'A sound, easy position.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: 'The Tarrasch trap: ...Qd7?',
          text: 'After 9.c3 Be7 10.Re1 O-O 11.Nd4, the natural 11...Qd7? loses material: 12.Nxe6 fxe6 13.Rxe4!, because 13...dxe4 opens the d-file for 14.Qxd7. Keep the queen off the d-file while d5 guards e4.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'a7a6', 'b5a4', 'g8f6', 'e1g1', 'f6e4', 'd2d4', 'b7b5', 'a4b3', 'd7d5', 'd4e5', 'c8e6', 'c2c3', 'f8e7', 'f1e1', 'e8g8', 'f3d4', 'd8d7', 'd4e6', 'f7e6', 'e1e4']
        },
        { kind: 'Risk', side: 'black', title: 'Count the attackers on e4', text: 'Once White has Nbd2 and Bc2, the e4 knight is attacked twice and defended once. Add ...Bf5 or ...f5, or move the knight, before White wins a pawn.' },
        { kind: 'Risk', side: 'black', title: 'Queenside pawns as targets', text: 'The pawns on b5 and d5 can be attacked by a4 and c4, and after exchanges the c-pawn may be left backward on the half-open c-file. Keep the pieces active instead of defending passively.' }
      ],
      lessons: ['black-vs-e4-13', 'white-openings-9'],
      uncertain: 'The Open Variation is deeply analysed; the lines here stop at well-known positions. 9.Nbd2 Nc5 10.c3 d4 and 9.c3 Bc5 lead to sharp play that needs a current source.'
    },
    {
      id: 'b-ruy-vs-exchange',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-ruy-lopez',
      family: 'Ruy Lopez',
      name: 'Ruy Lopez: Black vs the Exchange Variation (4.Bxc6 dxc6)',
      short: 'vs the Exchange Variation (4.Bxc6)',
      aliases: ['Exchange Ruy Lopez', 'Exchange Spanish'],
      eco: 'C68',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'a7a6', 'b5c6', 'd7c6'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6',
      difficulty: 'Intermediate',
      style: 'Solid',
      minutes: 14,
      summary: "Recapture towards the centre with 4...dxc6: the bishop pair and open lines make up for White's healthier kingside majority.",
      idea: "White gives up the bishop to damage Black's structure. In a pure pawn ending White's 4-v-3 kingside majority would count, but in the middlegame Black has the bishop pair and quick development. Black protects e5 with ...f6, ...Bg4 or ...Qd6, uses the bishops and keeps pieces on. The pawn grab 5.Nxe5 does not work because of 5...Qd4.",
      plans: { white: ['Castle, play d4 to open the centre, and steer for an ending where the kingside majority counts', 'Trade queens and use the extra kingside pawn to make a passed pawn'], black: ['Hold e5 with ...f6, ...Bg4 or ...Qd6, or exchange on d4 and use the bishops', 'Keep pieces on where possible, or activate king and bishops quickly in the ending', 'Pin the f3 knight with ...Bg4 to add pressure on d4 and e5'] },
      responses: [
        { moves: '5.O-O f6 6.d4 exd4 7.Nxd4 c5', name: 'Main line 5.O-O', note: '8.Nb3 Qxd1 9.Rxd1 Bg4 10.f3 Be6 leads to a balanced ending: the bishop pair against the kingside majority. 5...Bg4 and 5...Qd6 are also respected.', line: 'main' },
        { moves: '5.O-O Bg4 6.h3 h5', name: '5...Bg4 with ...h5', note: 'A sharp idea: 7.hxg4? hxg4 opens the h-file, so White usually plays 7.d3 and Black answers ...Qf6.', line: 'bg4' },
        { moves: '5.Nxe5 Qd4', name: '5.Nxe5?', note: 'The fork wins the pawn back: 6.Nf3 Qxe4+ 7.Qe2 Qxe2+ 8.Kxe2, and Black has the bishop pair and a lead in development (see the lesson).', line: 'nxe5' },
        { moves: '5.d4 exd4 6.Qxd4 Qxd4 7.Nxd4', name: '5.d4', note: 'An early queen trade. Black plays ...Bd7 and ...O-O-O, using the bishops and the open d-file.', line: 'd4' }
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
          { uci: 'b5c6', san: 'Bxc6' },
          { uci: 'd7c6', san: 'dxc6', note: 'Recapture towards the centre: the d-file and the c8 bishop open.' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f7f6', san: 'f6', note: 'Defends e5 with a pawn.' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'e5d4', san: 'exd4' },
          { uci: 'f3d4', san: 'Nxd4' },
          { uci: 'c6c5', san: 'c5' },
          { uci: 'd4b3', san: 'Nb3' },
          { uci: 'd8d1', san: 'Qxd1' },
          { uci: 'f1d1', san: 'Rxd1' },
          { uci: 'c8g4', san: 'Bg4', note: 'Develops with tempo on the rook.' },
          { uci: 'f2f3', san: 'f3' },
          { uci: 'g4e6', san: 'Be6', note: 'Bishop pair against the kingside majority.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '5.O-O f6 6.d4',
          kind: 'Main line',
          summary: 'White opens the centre and trades queens. Black develops with tempo and keeps the bishop pair in a balanced ending.',
          moves: [
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f7f6', san: 'f6', note: 'Holds e5 with a pawn, so Nxe5 is no longer possible.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'c6c5', san: 'c5', note: 'Gains space and prepares to drive the knight away from d4.' },
            { uci: 'd4b3', san: 'Nb3' },
            { uci: 'd8d1', san: 'Qxd1' },
            { uci: 'f1d1', san: 'Rxd1' },
            { uci: 'c8g4', san: 'Bg4', note: 'Develops with tempo on the d1 rook.' },
            { uci: 'f2f3', san: 'f3' },
            { uci: 'g4e6', san: 'Be6', note: "The bishop pair against White's kingside majority: a balanced ending." }
          ]
        },
        {
          id: 'bg4',
          name: '5.O-O Bg4 6.h3 h5',
          kind: 'Alternative',
          summary: 'Black pins and, after h3, offers the bishop: taking it opens the h-file. White normally declines with d3, and Black defends e5 with ...Qf6.',
          moves: [
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c8g4', san: 'Bg4', note: 'Pins the knight that attacks e5.' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'h7h5', san: 'h5', note: "A famous idea: 7.hxg4? hxg4 opens the h-file towards White's king." },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'd8f6', san: 'Qf6', note: 'Defends e5 and keeps the bishop on g4.' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'g8e7', san: 'Ne7', note: 'Heading for g6; Black may castle long.' }
          ]
        },
        {
          id: 'nxe5',
          name: '5.Nxe5? Qd4',
          kind: 'Sideline',
          summary: 'The pawn grab fails to a queen fork. Black regains the pawn with check and is comfortable in the queenless position.',
          moves: [
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'd8d4', san: 'Qd4', note: 'Forks the knight and the e4 pawn.' },
            { uci: 'e5f3', san: 'Nf3' },
            { uci: 'd4e4', san: 'Qxe4+', note: 'The pawn is back, with check.' },
            { uci: 'd1e2', san: 'Qe2' },
            { uci: 'e4e2', san: 'Qxe2+' },
            { uci: 'e1e2', san: 'Kxe2' },
            { uci: 'c8f5', san: 'Bf5', note: 'Two bishops, a lead in development and a target on c2.' }
          ]
        },
        {
          id: 'd4',
          name: '5.d4',
          kind: 'Sideline',
          summary: 'An immediate queen trade. Black castles long and uses the bishops and the open d-file.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'd1d4', san: 'Qxd4' },
            { uci: 'd8d4', san: 'Qxd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'c8d7', san: 'Bd7', note: 'Prepares long castling, putting the king and rook on the open d-file.' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'e8c8', san: 'O-O-O', note: "Black's bishops and active rook balance the structure." }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'white',
          title: '5.Nxe5? Qd4',
          text: 'Taking on e5 at once fails: 5...Qd4 attacks the knight and e4, and after 6.Nf3 Qxe4+ the pawn is back with check. Black has the bishop pair and White has lost castling rights after the queen trade.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'a7a6', 'b5c6', 'd7c6', 'f3e5', 'd8d4']
        },
        { kind: 'Risk', side: 'black', title: 'Pawn endings favour White', text: "With all pieces traded, White's 4-v-3 kingside majority can make a passed pawn while Black's doubled c-pawns cannot. Keep pieces on, or make sure king and bishops are active before entering a pure pawn ending." },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Recapturing 4...bxc6',
          text: '4...dxc6 is the standard recapture: it opens the d-file and the c8 bishop. 4...bxc6 is playable but slower, and Black gets fewer active chances for the damaged structure.',
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'a7a6', 'b5c6', 'b7c6']
        },
        {
          kind: 'Trap',
          side: 'white',
          title: 'Opening the h-file with hxg4',
          text: "After 5.O-O Bg4 6.h3 h5, taking the bishop with 7.hxg4? hxg4 opens the h-file for Black's rook and queen; the knight on f3 is attacked too. White normally plays 7.d3.",
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'a7a6', 'b5c6', 'd7c6', 'e1g1', 'c8g4', 'h2h3', 'h7h5', 'h3g4', 'h5g4']
        }
      ],
      lessons: ['black-vs-e4-14', 'strategy-8'],
      uncertain: 'The 5...Bg4 6.h3 h5 line is described modestly: 7.hxg4 is generally considered dangerous for White, but the exact consequences are not given here.'
    },
    {
      id: 'b-petroff-vs-d4',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-petroff',
      family: 'Petroff Defence',
      name: 'Petroff Defence: Black vs 3.d4 (3...Nxe4)',
      short: 'vs the Steinitz Attack (3.d4)',
      aliases: ['Steinitz Attack', 'Modern Attack'],
      parent: 'b-petroff',
      eco: 'C43',
      defining: ['e2e4', 'e7e5', 'g1f3', 'g8f6', 'd2d4', 'f6e4'],
      moves: '1.e4 e5 2.Nf3 Nf6 3.d4 Nxe4',
      difficulty: 'Intermediate',
      style: 'Solid',
      minutes: 10,
      summary: 'Against 3.d4, take on e4 at once: with the e5 pawn still blocking the e-file, the capture that loses against 3.Nxe5 is safe here.',
      idea: "3.d4 attacks e5 and opens the centre. 3...Nxe4 is safe because Black's own e5 pawn still shields the e-file. After 4.Bd3 d5 5.Nxe5, Black either challenges the knight with 5...Nd7 or develops with 5...Bd6 and castles; after 4.dxe5 d5 the e4 knight is firmly supported. Black aims for quick development and a solid pawn on d5. (3...exd4 4.e5 Ne4 is a sound alternative not covered here.)",
      plans: { white: ['Use the open centre: Bd3, O-O, c4 and Re1 against the e4 knight', 'After 4.dxe5, use the space on e5 and develop Nbd2 to challenge the knight'], black: ['Support the knight with ...d5, then develop ...Bd6 or ...Nd7, ...O-O and ...Re8', "Challenge or exchange White's centralised knight on e5", 'Meet c4 with ...c6 to keep d5 firm'] },
      responses: [
        { moves: '4.Bd3 d5 5.Nxe5 Nd7', name: 'Main line', note: '6.Nxd7 Bxd7 7.O-O Bd6 8.c4 c6: a sound position where Black develops easily.', line: 'main' },
        { moves: '4.Bd3 d5 5.Nxe5 Bd6', name: '5...Bd6', note: '6.O-O O-O 7.c4 Bxe5 8.dxe5 Nc6: Black gives the bishop for the strong knight and hits e5.', line: 'bd6' },
        { moves: '4.dxe5 d5 5.Nbd2 Nxd2 6.Bxd2', name: '4.dxe5', note: 'Black develops ...Be7, ...O-O and ...Nc6; the e5 pawn gives White space but little else.', line: 'dxe5' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'f6e4', san: 'Nxe4', note: 'Safe here: the e5 pawn still blocks the e-file.' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'd7d5', san: 'd5', note: 'Supports the knight.' },
          { uci: 'f3e5', san: 'Nxe5' },
          { uci: 'b8d7', san: 'Nd7', note: 'Challenges the strong knight.' },
          { uci: 'e5d7', san: 'Nxd7' },
          { uci: 'c8d7', san: 'Bxd7' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f8d6', san: 'Bd6' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'c7c6', san: 'c6', note: 'Keeps d5 firm.' },
          { uci: 'c4d5', san: 'cxd5' },
          { uci: 'c6d5', san: 'cxd5' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '4.Bd3 d5 5.Nxe5 Nd7',
          kind: 'Main line',
          summary: 'Black trades off the e5 knight, develops ...Bd6 and meets c4 with ...c6. A level, easy-to-play position.',
          moves: [
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'd7d5', san: 'd5', note: 'Supports the knight at once.' },
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'b8d7', san: 'Nd7', note: "Challenges White's centralised knight." },
            { uci: 'e5d7', san: 'Nxd7' },
            { uci: 'c8d7', san: 'Bxd7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8d6', san: 'Bd6' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'c7c6', san: 'c6', note: 'Keeps d5 firm.' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'c6d5', san: 'cxd5', note: 'Level and easy to play; ...O-O and ...Nxc3 or ...Nf6 follow.' }
          ]
        },
        {
          id: 'bd6',
          name: '5...Bd6',
          kind: 'Alternative',
          summary: 'Black develops first and later gives the bishop for the e5 knight, then attacks the e5 pawn with ...Nc6.',
          moves: [
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'f8d6', san: 'Bd6', note: "Develops and lets White's knight stay for now." },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'd6e5', san: 'Bxe5', note: 'Gives the bishop to remove the strong knight.' },
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'b8c6', san: 'Nc6', note: 'Attacks e5 and develops.' }
          ]
        },
        {
          id: 'dxe5',
          name: '4.dxe5 d5',
          kind: 'Alternative',
          summary: 'White takes on e5; Black supports the knight with ...d5, trades it if challenged and develops freely.',
          moves: [
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'd7d5', san: 'd5', note: 'The knight on e4 is now firmly supported.' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'e4d2', san: 'Nxd2' },
            { uci: 'c1d2', san: 'Bxd2' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'b8c6', san: 'Nc6', note: 'Black develops freely; ...O-O and ...Bg4 or ...Be6 follow.' }
          ]
        }
      ],
      pitfalls: [
        { kind: 'Mistake', side: 'black', title: 'Mixing up the two captures on e4', text: 'Against 3.Nxe5 the immediate ...Nxe4 is a mistake; against 3.d4 it is the main move. The difference is the e5 pawn, which still blocks the e-file here. Learn which capture belongs to which move.' },
        { kind: 'Risk', side: 'black', title: 'The c4 lever', text: 'After c4, exchanges on d5 can leave the e4 knight short of support and Black with an isolated d-pawn. Answer c4 with ...c6, or with a timely ...Nf6 or ...Nxc3.' }
      ],
      lessons: ['black-vs-e4-1']
    },
    {
      id: 'b-sicilian-vs-rossolimo',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-sicilian',
      family: 'Sicilian Defence',
      name: 'Sicilian: Black vs the Rossolimo (3.Bb5 g6)',
      short: 'vs the Rossolimo (3.Bb5)',
      aliases: ['Rossolimo Variation', 'Rossolimo Attack'],
      eco: 'B31',
      defining: ['e2e4', 'c7c5', 'g1f3', 'b8c6', 'f1b5', 'g7g6'],
      moves: '1.e4 c5 2.Nf3 Nc6 3.Bb5 g6',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 14,
      summary: 'Meet 3.Bb5 with a kingside fianchetto: if White takes on c6, Black gets the bishop pair for a damaged queenside.',
      idea: "White avoids the Open Sicilian and may give up the bishop to double Black's c-pawns. Black fianchettoes, so the dark-squared bishop is strong whatever happens. After 4.Bxc6 dxc6, Black has easy development, the bishop pair and play with ...e5 and ...b6. After 4.O-O, Black develops ...Bg7 and ...Nf6 and must know how to regroup the knight after e5.",
      plans: { white: ['Take on c6, then play d3, h3, Nc3 and Be3, aiming at the c5 pawn and the doubled pawns', 'Keep the bishop with O-O, Re1 or c3, preparing e5 or d4'], black: ['After Bxc6 dxc6, develop ...Bg7, ...Nf6 and ...O-O, then ...e5 or ...b6 to support c5', 'After 4.O-O, play ...Bg7 and ...Nf6, and know the ...Nd5-c7 regrouping against e5', 'Use the bishop pair once the position opens'] },
      responses: [
        { moves: '4.Bxc6 dxc6 5.d3 Bg7 6.h3', name: 'Main line 4.Bxc6', note: '6...Nf6 7.Nc3 O-O 8.Be3 b6 (or ...e5): the bishop pair balances the doubled pawns.', line: 'bxc6' },
        { moves: '4.O-O Bg7 5.Re1 Nf6 6.e5 Nd5', name: '4.O-O and 5.Re1', note: '7.Nc3 Nc7 8.Bxc6 dxc6 9.Ne4 b6: the knight drops back and Black keeps the bishops.', line: 're1' },
        { moves: '4.O-O Bg7 5.c3 Nf6 6.e5 Nd5 7.d4', name: '4.O-O and 5.c3', note: 'White builds a centre; Black exchanges on d4, castles and hits e5 with ...d6.', line: 'c3' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'f1b5', san: 'Bb5' },
          { uci: 'g7g6', san: 'g6', note: 'The fianchetto: the bishop will be strong whatever happens on c6.' },
          { uci: 'b5c6', san: 'Bxc6' },
          { uci: 'd7c6', san: 'dxc6', note: 'Opens the d-file and the c8 bishop.' },
          { uci: 'd2d3', san: 'd3' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'h2h3', san: 'h3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'b7b6', san: 'b6', note: 'Supports c5.' },
          { uci: 'd1d2', san: 'Qd2' },
          { uci: 'e7e5', san: 'e5', note: 'Takes space and blunts the e3 bishop.' }
        ]
      },
      lines: [
        {
          id: 'bxc6',
          name: '4.Bxc6 dxc6 5.d3',
          kind: 'Main line',
          summary: 'White doubles the c-pawns and aims at c5. Black develops, supports c5 with ...b6 and takes space with ...e5.',
          moves: [
            { uci: 'b5c6', san: 'Bxc6' },
            { uci: 'd7c6', san: 'dxc6', note: 'Opens the d-file and the c8 bishop.' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'b7b6', san: 'b6', note: 'Supports the c5 pawn.' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'e7e5', san: 'e5', note: 'Takes space and blunts the e3 bishop.' }
          ]
        },
        {
          id: 're1',
          name: '4.O-O Bg7 5.Re1 Nf6 6.e5',
          kind: 'Alternative',
          summary: 'The knight is kicked and goes d5-c7, asking the bishop to decide. After Bxc6 dxc6 Black has the bishops and protects c5 with ...b6.',
          moves: [
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'f6d5', san: 'Nd5' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd5c7', san: 'Nc7', note: 'The knight drops back, asking the bishop to decide.' },
            { uci: 'b5c6', san: 'Bxc6' },
            { uci: 'd7c6', san: 'dxc6' },
            { uci: 'c3e4', san: 'Ne4' },
            { uci: 'b7b6', san: 'b6', note: 'Protects c5; Black has the bishop pair.' }
          ]
        },
        {
          id: 'c3',
          name: '4.O-O Bg7 5.c3',
          kind: 'Alternative',
          summary: 'White builds a centre with c3, e5 and d4. Black exchanges, castles and hits e5 with ...d6.',
          moves: [
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'f6d5', san: 'Nd5', note: 'The knight is centralised and hard to dislodge.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd5c3', san: 'Nxc3' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'd7d6', san: 'd6', note: 'Hits the e5 pawn at once.' }
          ]
        }
      ],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'Doubled c-pawns without the bishops', text: 'If Black trades the dark-squared bishop or lets the position close without play, the doubled c-pawns become a long-term weakness. Keep the bishops and open the position for them.' },
        { kind: 'Risk', side: 'black', title: 'e5 kicks the f6 knight', text: 'With White castled and Re1 played, ...Nf6 invites e5. Know the regrouping ...Nd5-c7 (or ...Nb6) before you play it, or prefer ...e5 or ...e6 set-ups.' },
        { kind: 'Risk', side: 'black', title: 'The c5 pawn after ...dxc6', text: 'After 4.Bxc6 dxc6, White aims Be3, Qd2 and sometimes Na4 or b4 at c5. Support it with ...b6 or ...Nd7 in time.' }
      ],
      lessons: ['strategy-1', 'strategy-8']
    },
    {
      id: 'b-french-classical',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-french',
      family: 'French Defence',
      name: 'French: Classical Variation (3...Nf6)',
      short: 'Classical Variation (3...Nf6)',
      aliases: ['Classical French'],
      eco: 'C11',
      defining: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1c3', 'g8f6'],
      moves: '1.e4 e6 2.d4 d5 3.Nc3 Nf6',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 18,
      summary: 'Develop the knight and pressure e4. Against 4.e5 and 4.Bg5 Black gets classical French pawn chains with clear ...c5 and ...f6 breaks.',
      idea: 'Instead of pinning with the Winawer, Black develops and attacks e4. After 4.e5 Nfd7 (the Steinitz), White supports the chain with f4 and Nf3, and Black hits its base with ...c5, ...Nc6 and ...cxd4 with ...Bc5. After 4.Bg5, the main 4...Be7 leads to a similar chain once the dark-squared bishops are traded; 4...dxe4 (the Burn) is solid, and 4...Bb4 (the McCutcheon) sharp.',
      plans: { white: ['Steinitz: e5, f4, Nf3 and Be3, keeping the d4-e5 chain and attacking on the kingside', 'Classical: Bg5, e5 and f4, often with Qd2 and O-O-O'], black: ['Hit the base of the chain with ...c5, ...Nc6 and ...cxd4 with ...Bc5 or ...Qb6', 'Undermine e5 later with ...f6', 'Against 4.Bg5, choose ...Be7 (main), ...dxe4 (Burn, solid) or ...Bb4 (McCutcheon, sharp)'] },
      responses: [
        { moves: '4.e5 Nfd7 5.f4 c5 6.Nf3 Nc6 7.Be3', name: 'Steinitz Variation', note: '7...cxd4 8.Nxd4 Bc5 9.Qd2 O-O, or 7...a6 with ...b5: Black presses on d4 and prepares ...f6.', line: 'steinitz' },
        { moves: '4.Bg5 Be7 5.e5 Nfd7 6.Bxe7 Qxe7 7.f4', name: 'Classical 4.Bg5', note: '7...a6 (or 7...O-O) 8.Nf3 c5: the dark-squared bishops are gone and Black attacks the chain with ...c5.', line: 'bg5' },
        { moves: '4.Bg5 dxe4 5.Nxe4 Be7 6.Bxf6 Bxf6', name: 'Burn Variation', note: 'A Rubinstein-like structure where Black has the bishop pair; ...O-O, ...Nd7 and ...c5 or ...e5 follow.', line: 'burn' },
        { moves: '4.exd5 exd5', name: 'Exchange', note: 'Symmetrical; Black develops ...Bd6, ...O-O and ...c6 with an easy game.' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'g8f6', san: 'Nf6', note: 'Develops and attacks e4.' },
          { uci: 'e4e5', san: 'e5' },
          { uci: 'f6d7', san: 'Nfd7', note: 'The Steinitz: the knight steps back towards c5 and e5.' },
          { uci: 'f2f4', san: 'f4' },
          { uci: 'c7c5', san: 'c5', note: 'Hits the base of the chain.' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'f3d4', san: 'Nxd4' },
          { uci: 'f8c5', san: 'Bc5', note: 'Pins the d4 knight against the e3 bishop.' },
          { uci: 'd1d2', san: 'Qd2' },
          { uci: 'e8g8', san: 'O-O' }
        ]
      },
      lines: [
        {
          id: 'steinitz',
          name: '4.e5 Nfd7 5.f4 (Steinitz)',
          kind: 'Main line',
          summary: 'Black hits d4 with ...c5 and ...Nc6, exchanges and pins with ...Bc5, castles and plays ...a6 and ...b5 against long castling.',
          moves: [
            { uci: 'e4e5', san: 'e5' },
            { uci: 'f6d7', san: 'Nfd7' },
            { uci: 'f2f4', san: 'f4' },
            { uci: 'c7c5', san: 'c5', note: 'Hits the base of the chain.' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'f8c5', san: 'Bc5', note: 'Pins the d4 knight against the e3 bishop.' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1c1', san: 'O-O-O' },
            { uci: 'a7a6', san: 'a6', note: 'Queenside counterplay with ...b5.' }
          ]
        },
        {
          id: 'bg5',
          name: '4.Bg5 Be7 5.e5 Nfd7',
          kind: 'Main line',
          summary: 'The dark-squared bishops are traded and Black strikes at d4 with ...c5, often after ...a6.',
          moves: [
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'f6d7', san: 'Nfd7' },
            { uci: 'g5e7', san: 'Bxe7' },
            { uci: 'd8e7', san: 'Qxe7', note: 'The dark-squared bishops are traded.' },
            { uci: 'f2f4', san: 'f4' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c7c5', san: 'c5', note: 'The usual strike at d4.' }
          ]
        },
        {
          id: 'burn',
          name: '4.Bg5 dxe4 (Burn)',
          kind: 'Alternative',
          summary: 'A solid choice: Black releases the centre, takes the bishop pair after Bxf6 and plays ...c5 or ...e5 later.',
          moves: [
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'd5e4', san: 'dxe4', note: 'The Burn: a solid Rubinstein-like choice.' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'e7f6', san: 'Bxf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e8g8', san: 'O-O', note: 'The bishop pair; ...Nd7 and ...c5 or ...e5 follow.' }
          ]
        },
        {
          id: 'mccutcheon',
          name: '4.Bg5 Bb4 (McCutcheon)',
          kind: 'Sharp try',
          summary: "A sharp counter-attack. After ...h6, ...Bxc3 and ...Ne4 the game is theory-heavy, and Black's king often stays in the centre.",
          moves: [
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'f8b4', san: 'Bb4', note: 'The McCutcheon: a sharp counter-attack.' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5d2', san: 'Bd2' },
            { uci: 'b4c3', san: 'Bxc3' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'f6e4', san: 'Ne4' },
            { uci: 'd1g4', san: 'Qg4' },
            { uci: 'g7g6', san: 'g6', note: 'Sharp and theory-heavy: the king often stays in the centre.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'black',
          title: 'The Alekhine-Chatard gambit 6.h4',
          text: 'After 4.Bg5 Be7 5.e5 Nfd7, 6.h4 offers a pawn: 6...Bxg5 7.hxg5 Qxg5 opens the h-file for White. Many players decline with 6...a6 or 6...c5.',
          uci: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1c3', 'g8f6', 'c1g5', 'f8e7', 'e4e5', 'f6d7', 'h2h4']
        },
        { kind: 'Mistake', side: 'black', title: '...f6 before ...c5', text: 'Hitting e5 with ...f6 before ...c5 and ...Nc6 have pressured d4 lets White support e5 easily with Nf3 and f4. Start with the base of the chain.' },
        { kind: 'Risk', side: 'black', title: 'The f4-f5 break', text: 'In the Steinitz, White can prepare f5 to open lines against a king castled short. Keep ...f6 or ...f5 ideas ready, and do not castle into an attack without counterplay.' }
      ],
      transpositions: [
        { to: 'b-french-rubinstein', note: 'The Burn, 4.Bg5 dxe4, reaches structures close to the Rubinstein (3...dxe4).' }
      ],
      lessons: ['black-vs-e4-4', 'strategy-4'],
      uncertain: 'Against the Alekhine-Chatard Attack (6.h4), several declines (6...a6, 6...c5, 6...f6) are played; the recommendation here is general, not a full repertoire.'
    },
    {
      id: 'b-caro-kann-vs-panov',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-caro-kann',
      family: 'Caro-Kann Defence',
      name: 'Caro-Kann: Black vs the Panov-Botvinnik Attack (4.c4)',
      short: 'vs the Panov-Botvinnik (4.c4)',
      aliases: ['Panov Attack', 'Panov-Botvinnik Attack'],
      eco: 'B13',
      defining: ['e2e4', 'c7c6', 'd2d4', 'd7d5', 'e4d5', 'c6d5', 'c2c4', 'g8f6'],
      moves: '1.e4 c6 2.d4 d5 3.exd5 cxd5 4.c4 Nf6',
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 16,
      summary: "White plays c4 and steers for an isolated queen's pawn. Black develops quickly, blockades d5 and trades pieces.",
      idea: 'After 4.c4 Nf6 5.Nc3, the usual result is an isolated d-pawn for White after cxd5 and ...Nxd5. White gets active pieces and attacking chances; Black gets a target on d4 and the d5 square for a blockading knight. Black plays ...e6 and ...Be7 (or ...Bb4), castles, blockades and trades pieces, since each exchange makes the isolated pawn weaker. The sharp 5...Nc6 lines are for well-prepared players.',
      plans: { white: ['Use the isolated pawn: active pieces, Bd3 with Qc2 or Qe2, and a kingside attack', 'Push d4-d5 when it opens lines with tempo'], black: ['Develop ...e6, ...Be7, ...O-O and ...Nc6, then pile up on d4', 'Blockade d5 with a knight and trade pieces towards an ending', 'Watch the d4-d5 break and attacks on h7; keep d5 under firm control'] },
      responses: [
        { moves: '5.Nc3 e6 6.Nf3 Be7 7.cxd5 Nxd5', name: 'Main line', note: "8.Bd3 Nc6 9.O-O O-O 10.Re1 Bf6: a classic isolated queen's pawn position. Black blockades and trades.", line: 'main' },
        { moves: '5.Nc3 e6 6.Nf3 Bb4', name: '6...Bb4', note: '7.cxd5 Nxd5 8.Bd2 or 8.Qc2: Black pins the knight and can trade it to ease the blockade.', line: 'bb4' },
        { moves: '5.Nc3 Nc6 6.Nf3 Bg4', name: '5...Nc6', note: 'A sharper choice: 7.cxd5 Nxd5 8.Qb3 Bxf3 9.gxf3 leads to forcing tactical play; know it before you use it.', line: 'nc6' }
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
          { uci: 'c2c4', san: 'c4', note: 'The Panov-Botvinnik Attack.' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'c4d5', san: 'cxd5' },
          { uci: 'f6d5', san: 'Nxd5', note: 'The knight blockades in front of the isolated pawn.' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8g8', san: 'O-O', note: 'A classic isolated queen pawn middlegame.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '5.Nc3 e6 6.Nf3 Be7',
          kind: 'Main line',
          summary: 'The classic isolated-pawn position. Black blockades on d5, adds pressure on d4 with ...Bf6 and welcomes exchanges.',
          moves: [
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'f6d5', san: 'Nxd5', note: 'The knight blockades in front of the isolated pawn.' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'e7f6', san: 'Bf6', note: 'Adds pressure to d4; each trade helps Black.' }
          ]
        },
        {
          id: 'bb4',
          name: '6...Bb4',
          kind: 'Alternative',
          summary: 'Black pins the c3 knight that fights for d5. Later the bishop returns to e7 and Black keeps a firm grip on d5.',
          moves: [
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8b4', san: 'Bb4', note: 'Pins the knight that supports d5.' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b4e7', san: 'Be7', note: 'The bishop returns; Black keeps a firm grip on d5.' }
          ]
        },
        {
          id: 'nc6',
          name: '5...Nc6 6.Nf3 Bg4',
          kind: 'Sharp try',
          summary: 'Immediate pressure on d4. After 8.Qb3 the play becomes forcing; only for well-prepared players.',
          moves: [
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c8g4', san: 'Bg4', note: 'Pressure on d4 straight away.' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'd1b3', san: 'Qb3' },
            { uci: 'g4f3', san: 'Bxf3' },
            { uci: 'g2f3', san: 'gxf3' },
            { uci: 'e7e6', san: 'e6', note: 'Sharp: 10.Qxb7 Nxd4 leads to forcing, well-analysed lines.' }
          ]
        }
      ],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'The d4-d5 break', text: "If Black's pieces stand badly, d4-d5 opens lines with tempo, often with sacrifices on d5 or e6. Keep a knight or the queen controlling d5." },
        { kind: 'Risk', side: 'black', title: 'Pressure on h7', text: 'The Bd3 and Qc2 (or Qe2) battery, Ng5 or a rook lift can hit h7. A knight on f6 or a well-timed ...g6 defends; do not leave the kingside bare.' },
        { kind: 'Mistake', side: 'black', title: 'Avoiding exchanges', text: "The isolated pawn is strongest with many pieces on the board. Black should welcome exchanges, especially of White's attacking pieces, and aim for an ending." }
      ],
      lessons: ['strategy-7', 'strategy-6'],
      uncertain: 'The 5...Nc6 6.Nf3 Bg4 line is sharp and only outlined here; check a current source before playing it.'
    },
    {
      id: 'b-caro-kann-vs-exchange',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-caro-kann',
      family: 'Caro-Kann Defence',
      name: 'Caro-Kann: Black vs the Exchange Variation (4.Bd3)',
      short: 'vs the Exchange Variation (4.Bd3)',
      aliases: ['Caro-Kann Exchange'],
      eco: 'B13',
      defining: ['e2e4', 'c7c6', 'd2d4', 'd7d5', 'e4d5', 'c6d5', 'f1d3', 'b8c6'],
      moves: '1.e4 c6 2.d4 d5 3.exd5 cxd5 4.Bd3 Nc6',
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 12,
      summary: 'A symmetrical Carlsbad-type structure. Black develops the light-squared bishop actively and can use a queenside minority attack.',
      idea: 'After 3.exd5 cxd5 4.Bd3, White hopes for a small edge with c3, Bf4 and Qb3 against b7. Black develops ...Nc6, ...Nf6 and ...Bg4 before ...e6, so the bishop is not shut in, then ...Bd6 and castles. The structure is a reversed Carlsbad: Black can push the a- and b-pawns with ...b5-b4 against the c3 pawn, a minority attack.',
      plans: { white: ['Bf4, c3, Nd2 and Ngf3, with Qb3 against b7', 'A kingside build-up with Ne5 and f4, using the d3 bishop'], black: ['Develop ...Nc6, ...Nf6 and ...Bg4 before ...e6, so the bishop is not shut in', 'Meet Qb3 with ...Qd7 or ...Qc8, then ...e6, ...Bd6 and ...O-O', 'Run the minority attack with ...Rab8 and ...b5-b4 to weaken c3'] },
      responses: [
        { moves: '5.c3 Nf6 6.Bf4 Bg4 7.Qb3 Qd7', name: 'Main line', note: '8.Nd2 e6 9.Ngf3 Bxf3 10.Nxf3 Bd6: Black trades the light-squared bishop and has a comfortable, symmetrical game.', line: 'main' },
        { moves: '5.Nf3 Bg4', name: '5.Nf3', note: 'Black pins at once and follows with ...Nf6, ...e6 and ...Bd6.', line: 'nf3' }
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
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'c2c3', san: 'c3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c1f4', san: 'Bf4' },
          { uci: 'c8g4', san: 'Bg4', note: 'Develops before ...e6 shuts the bishop in.' },
          { uci: 'd1b3', san: 'Qb3' },
          { uci: 'd8d7', san: 'Qd7', note: 'Defends b7.' },
          { uci: 'b1d2', san: 'Nd2' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'g1f3', san: 'Ngf3' },
          { uci: 'g4f3', san: 'Bxf3', note: 'Trades off a key defender of e5 and d4.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '5.c3 Nf6 6.Bf4 Bg4 7.Qb3',
          kind: 'Main line',
          summary: 'White attacks b7; Black defends with ...Qd7, trades the bishop on f3 and the dark-squared bishops, then castles and plays ...b5.',
          moves: [
            { uci: 'c2c3', san: 'c3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c1f4', san: 'Bf4' },
            { uci: 'c8g4', san: 'Bg4', note: 'Develops before ...e6 shuts the bishop in.' },
            { uci: 'd1b3', san: 'Qb3' },
            { uci: 'd8d7', san: 'Qd7', note: 'Defends b7.' },
            { uci: 'b1d2', san: 'Nd2' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1f3', san: 'Ngf3' },
            { uci: 'g4f3', san: 'Bxf3' },
            { uci: 'd2f3', san: 'Nxf3' },
            { uci: 'f8d6', san: 'Bd6', note: "Trades off White's active bishop." },
            { uci: 'f4d6', san: 'Bxd6' },
            { uci: 'd7d6', san: 'Qxd6', note: 'A level, symmetrical game; ...O-O and ...Rab8 with ...b5 next.' }
          ]
        },
        {
          id: 'nf3',
          name: '5.Nf3 Bg4',
          kind: 'Alternative',
          summary: 'Black pins at once, completes development and keeps the minority attack ...b5-b4 for later.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c8g4', san: 'Bg4', note: 'Pins at once.' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c1f4', san: 'Bf4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'f8d6', san: 'Bd6', note: 'Simple development; the minority attack ...b5-b4 can come later.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: 'Leaving b7 hanging to Qb3',
          text: 'After 6.Bf4 Bg4 7.Qb3, b7 is attacked. Defend it with 7...Qd7 or 7...Qc8 (or counter with 7...Na5); a careless move can simply lose the pawn.',
          uci: ['e2e4', 'c7c6', 'd2d4', 'd7d5', 'e4d5', 'c6d5', 'f1d3', 'b8c6', 'c2c3', 'g8f6', 'c1f4', 'c8g4', 'd1b3']
        },
        { kind: 'Mistake', side: 'black', title: 'An early ...e6', text: 'Shutting in the c8 bishop with ...e6 before ...Bg4 or ...Bf5 hands White an easy edge. Develop the bishop first.' },
        { kind: 'Risk', side: 'black', title: 'Ne5 and the kingside', text: "White's Bd3, Qc2 and Ne5 can aim at h7. Trading the f3 knight with ...Bxf3 and the dark-squared bishops with ...Bd6 takes the sting out." }
      ],
      transpositions: [
        { to: 'b-caro-kann-vs-panov', note: 'Both start 3.exd5 cxd5; with 4.c4 instead of 4.Bd3 White enters the Panov-Botvinnik.' }
      ],
      lessons: ['strategy-9']
    },
    {
      id: 'b-caro-kann-vs-two-knights',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-caro-kann',
      family: 'Caro-Kann Defence',
      name: 'Caro-Kann: Black vs the Two Knights (2.Nc3 d5 3.Nf3 Bg4)',
      short: 'vs the Two Knights (3.Nf3 Bg4)',
      aliases: ['Two Knights Variation'],
      eco: 'B11',
      defining: ['e2e4', 'c7c6', 'b1c3', 'd7d5', 'g1f3', 'c8g4'],
      moves: '1.e4 c6 2.Nc3 d5 3.Nf3 Bg4',
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 10,
      summary: 'Against 2.Nc3 and 3.Nf3, pin the knight with 3...Bg4 and give up the bishop for a sturdy light-square pawn chain.',
      idea: 'White keeps the d-pawn flexible and develops both knights. 3...Bg4 pins the f3 knight; after 4.h3 Bxf3 5.Qxf3 e6, Black has given up the bishop pair but has pawns on c6, d5 and e6 that control the light squares, and easy development with ...Nf6, ...Nbd7 and ...Bd6 or ...Bb4. White has the two bishops and often plays d3, Bd2 and long castling or g4.',
      plans: { white: ['Use the bishop pair: d3 or d4, g3 and Bg2, or Be2 and O-O', 'With d3 and Bd2, castle long and push g4-g5'], black: ['Trade on f3, then ...e6, ...Nf6, ...Nbd7 and ...Bd6 or ...Bb4', 'Keep pawns on light squares to make up for the missing bishop', 'Use the ...d4 or ...e5 breaks once developed'] },
      responses: [
        { moves: '4.h3 Bxf3 5.Qxf3 e6 6.d3 Nf6', name: 'Main line', note: '7.Bd2 Nbd7: Black develops ...Bd6 or ...Bb4 and castles; White may castle long and push g4.', line: 'main' },
        { moves: '4.h3 Bh5 5.exd5 cxd5 6.Bb5+ Nc6', name: '4...Bh5', note: '7.g4 Bg6 8.Ne5 Rc8: keeping the bishop leads to sharper play where Black must know the details.', line: 'bh5' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'c8g4', san: 'Bg4', note: 'Pins the knight.' },
          { uci: 'h2h3', san: 'h3' },
          { uci: 'g4f3', san: 'Bxf3', note: 'Gives the bishop for a sturdy pawn chain.' },
          { uci: 'd1f3', san: 'Qxf3' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'd2d3', san: 'd3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c1d2', san: 'Bd2' },
          { uci: 'b8d7', san: 'Nbd7', note: 'Next ...Bd6 or ...Bb4 and castling.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '4.h3 Bxf3 5.Qxf3 e6',
          kind: 'Main line',
          summary: 'Black gives up the bishop pair for a solid light-square chain and easy development; ...Bd6 or ...Bb4 and castling follow.',
          moves: [
            { uci: 'h2h3', san: 'h3' },
            { uci: 'g4f3', san: 'Bxf3', note: 'Gives the bishop pair for a solid light-square structure.' },
            { uci: 'd1f3', san: 'Qxf3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'b8d7', san: 'Nbd7', note: 'Next ...Bd6 or ...Bb4, castling, and central play with ...d4 or ...e5.' }
          ]
        },
        {
          id: 'bh5',
          name: '4.h3 Bh5',
          kind: 'Sharp try',
          summary: 'Keeping the bishop invites g4 and Ne5 against the pinned c6 knight; ...Rc8 defends it a second time.',
          moves: [
            { uci: 'h2h3', san: 'h3' },
            { uci: 'g4h5', san: 'Bh5', note: 'Keeps the bishop, but invites sharper play.' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'c6d5', san: 'cxd5' },
            { uci: 'f1b5', san: 'Bb5+' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g2g4', san: 'g4' },
            { uci: 'h5g6', san: 'Bg6' },
            { uci: 'f3e5', san: 'Ne5' },
            { uci: 'a8c8', san: 'Rc8', note: 'Defends the pinned c6 knight a second time.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: 'Smothered mate on d6',
          text: 'If Black chooses 3...dxe4 4.Nxe4 Nd7 instead, 5.Qe2 sets a famous trap: 5...Ngf6?? 6.Nd6# because the e7 pawn is pinned. 5...Ndf6 or 5...e6 is safe.',
          uci: ['e2e4', 'c7c6', 'b1c3', 'd7d5', 'g1f3', 'd5e4', 'c3e4', 'b8d7', 'd1e2', 'g8f6', 'e4d6']
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: '4...Bh5 without the theory',
          text: 'Keeping the bishop with 4...Bh5 invites 5.exd5 cxd5 6.Bb5+ Nc6 7.g4 Bg6 8.Ne5 against the pinned knight. 4...Bxf3 is the simple, reliable choice.',
          uci: ['e2e4', 'c7c6', 'b1c3', 'd7d5', 'g1f3', 'c8g4', 'h2h3', 'g4h5', 'e4d5', 'c6d5', 'f1b5', 'b8c6', 'g2g4', 'h5g6', 'f3e5']
        },
        { kind: 'Risk', side: 'black', title: 'The queen on f3', text: 'After 5.Qxf3, the queen eyes f7 and, if the centre opens, b7. Think twice before releasing the centre with ...dxe4 while the queen stares down the long diagonal.' }
      ],
      lessons: ['black-vs-e4-16'],
      uncertain: 'The 4...Bh5 line is summarised briefly; it is established but sharp.'
    },
    {
      id: 'b-scandinavian-qd6',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-scandinavian',
      family: 'Scandinavian Defence',
      name: 'Scandinavian: 3...Qd6',
      short: '3...Qd6',
      aliases: ['Modern Qd6 Scandinavian'],
      eco: 'B01',
      defining: ['e2e4', 'd7d5', 'e4d5', 'd8d5', 'b1c3', 'd5d6'],
      moves: '1.e4 d5 2.exd5 Qxd5 3.Nc3 Qd6',
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 12,
      summary: 'Drop the queen to d6, central and close to home. Black plans ...Nf6 with ...a6 or ...c6, but must watch Nb5 and Bf4.',
      idea: 'On d6 the queen covers the centre and the kingside and cannot be pinned against the king as easily as on a5. White gains time against it with Nb5, Bf4 or Ne4, so Black usually plays ...a6 or ...c6 early, then ...Nf6, ...Bg4 or ...Bf5, ...Nc6 or ...Nbd7 and ...e6 or ...g6. Black can choose quiet ...c6 set-ups or active ...Nc6 and ...O-O-O plans.',
      plans: { white: ['Gain time on the queen with Nb5, Bf4 or Ne4, and develop quickly', 'Use the extra central space with d4, Bd3 or Bc4, and Ne5'], black: ['Play ...a6 (or ...c6) early so Nb5 is never a threat', 'Develop ...Nf6, ...Bg4 or ...Bf5, ...Nc6 or ...Nbd7 and ...e6 or ...g6', 'Consider ...O-O-O with ...Nc6 and ...Bg4 for active piece play against d4'] },
      responses: [
        { moves: '4.d4 Nf6 5.Nf3 a6', name: 'Main line', note: 'Black stops Nb5. 6.g3, 6.Be2 and 6.Bc4 are common; ...Bg4, ...Nc6 and ...O-O-O give active play against d4.', line: 'main' },
        { moves: '4.d4 Nf6 5.Nf3 c6', name: '5...c6', note: 'The solid set-up: ...Bf5 or ...Bg4, ...e6 and ...Nbd7, close to a Caro-Kann.', line: 'c6' },
        { moves: '4.d4 Nf6 5.Bc4 a6', name: '5.Bc4', note: 'Black can gain space with ...b5 and ...Bb7, or play ...c6 and ...Bf5.', line: 'bc4' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'e4d5', san: 'exd5' },
          { uci: 'd8d5', san: 'Qxd5' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd5d6', san: 'Qd6', note: 'Central, and harder to attack than it looks.' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'a7a6', san: 'a6', note: 'Takes b5 from the knights.' },
          { uci: 'g2g3', san: 'g3' },
          { uci: 'c8g4', san: 'Bg4' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'b8c6', san: 'Nc6', note: 'Pressure on d4.' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8c8', san: 'O-O-O' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '5.Nf3 a6 6.g3',
          kind: 'Main line',
          summary: 'Black stops Nb5, pins the f3 knight and puts pressure on d4 with ...Nc6 and ...O-O-O.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'a7a6', san: 'a6', note: 'Takes b5 from the knights.' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'c8g4', san: 'Bg4' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'b8c6', san: 'Nc6', note: 'Pressure on d4.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8c8', san: 'O-O-O', note: 'Active piece play: the rook joins the attack on d4.' }
          ]
        },
        {
          id: 'c6',
          name: '5.Nf3 c6',
          kind: 'Alternative',
          summary: 'The solid, Caro-Kann-like set-up with ...Bf5, ...e6 and ...Nbd7, castling short.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c7c6', san: 'c6', note: 'The solid, Caro-Kann-like set-up.' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'c8f5', san: 'Bf5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'b8d7', san: 'Nbd7', note: 'Black develops calmly and castles next.' }
          ]
        },
        {
          id: 'bc4',
          name: '5.Bc4 a6',
          kind: 'Alternative',
          summary: 'Against the early bishop, ...a6 and ...b5 gain queenside space with tempo; the bishop on b7 then eyes the long diagonal.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b7b5', san: 'b5', note: 'Gains space with tempo on the bishop.' },
            { uci: 'c4b3', san: 'Bb3' },
            { uci: 'c8b7', san: 'Bb7', note: 'The bishop eyes the long diagonal.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Allowing Nb5',
          text: 'After 4.d4 Nf6 5.Nf3, a natural developing move such as 5...Bg4 allows 6.Nb5, hitting the queen and threatening Nxc7+. The queen must move again.',
          uci: ['e2e4', 'd7d5', 'e4d5', 'd8d5', 'b1c3', 'd5d6', 'd2d4', 'g8f6', 'g1f3', 'c8g4', 'c3b5']
        },
        { kind: 'Risk', side: 'black', title: 'Bf4 and Ne4 with tempo', text: 'Bf4 and Ne4 also hit the queen. After ...a6 and ...Nc6 or ...c6, know where the queen goes next (d8, d7, b6 or e6) so you do not drift backwards.' }
      ],
      lessons: ['black-vs-e4-17'],
      uncertain: 'Move orders in the 3...Qd6 main lines (5...a6 with 6.g3, 6.Be2 or 6.Bc4) vary in current practice; the line given is one typical active set-up.'
    },
    {
      id: 'b-scandinavian-modern',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-scandinavian',
      family: 'Scandinavian Defence',
      name: 'Scandinavian: Modern Variation (2...Nf6)',
      short: 'Modern Variation (2...Nf6)',
      aliases: ['Scandinavian 2...Nf6'],
      eco: 'B01',
      defining: ['e2e4', 'd7d5', 'e4d5', 'g8f6'],
      moves: '1.e4 d5 2.exd5 Nf6',
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 12,
      summary: 'Recapture on d5 with the knight instead of the queen. No early queen moves, but White can try to keep the pawn with c4 or Bb5+.',
      idea: "Black delays the recapture, so the queen is never chased. After 3.d4 Nxd5 the knight is centralised and Black develops ...g6 and ...Bg7 or ...Bg4 and ...e6. White's other tries aim to keep the d5 pawn: 3.c4 is met by 3...c6, which reaches a Caro-Kann Panov after 4.d4 cxd5, and 3.Bb5+ by 3...Bd7 with ...Bg4 ideas to make holding d5 awkward.",
      plans: { white: ['Take space with d4 and c4, chasing the d5 knight', 'Try to keep the extra pawn with c4 or Bb5+ and Bc4'], black: ['Recapture on d5 with the knight and develop quickly: ...g6, ...Bg7 or ...Bg4, ...e6', 'Against 3.c4, play ...c6 and steer for a Panov structure, or ...e6 for the Icelandic Gambit', 'Against a big centre, hit d4 with ...Nc6, ...Bg4 and ...e5 or ...c5'] },
      responses: [
        { moves: '3.d4 Nxd5 4.Nf3 g6', name: 'Main line 3.d4', note: '5.c4 Nb6 6.Nc3 Bg7: a Grunfeld-like set-up where Black pressures d4 with ...Nc6 and ...Bg4. 4...Bg4 is also popular.', line: 'd4' },
        { moves: '3.c4 c6 4.d4 cxd5', name: '3.c4', note: 'Transposes to the Caro-Kann Panov-Botvinnik with ...Nf6 played. 3...e6 is the Icelandic Gambit (see the gambit page).', line: 'c4' },
        { moves: '3.Bb5+ Bd7 4.Bc4 Bg4', name: '3.Bb5+', note: 'Black develops with gain of time and plans ...Nbd7-b6 or ...Nxd5 to regain the pawn.', line: 'bb5' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'e4d5', san: 'exd5' },
          { uci: 'g8f6', san: 'Nf6', note: 'The knight will recapture on d5.' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'f6d5', san: 'Nxd5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g7g6', san: 'g6' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'd5b6', san: 'Nb6', note: 'The knight retreats but keeps an eye on c4 and d5.' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'f8g7', san: 'Bg7', note: 'The bishop presses d4.' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'e8g8', san: 'O-O' }
        ]
      },
      lines: [
        {
          id: 'd4',
          name: '3.d4 Nxd5 4.Nf3 g6',
          kind: 'Main line',
          summary: 'Black fianchettoes and puts pressure on d4, as in a Grunfeld; the knight on b6 eyes c4.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'f6d5', san: 'Nxd5', note: 'The knight recaptures and centralises.' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'd5b6', san: 'Nb6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'f8g7', san: 'Bg7', note: 'The bishop presses d4.' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'e8g8', san: 'O-O', note: 'Next ...Nc6 or ...Bg4 against the centre.' }
          ]
        },
        {
          id: 'bg4',
          name: '3.d4 Nxd5 4.Nf3 Bg4',
          kind: 'Alternative',
          summary: 'Black pins the knight that defends d4 and develops solidly with ...e6, ...Be7 and ...O-O.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c8g4', san: 'Bg4', note: 'Pins the knight that defends d4.' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'd5b6', san: 'Nb6', note: 'Solid development; ...O-O and ...Nc6 follow.' }
          ]
        },
        {
          id: 'c4',
          name: '3.c4 c6',
          kind: 'Alternative',
          summary: '3...c6 hits d5 again. After 4.d4 cxd5 the game is a Caro-Kann Panov-Botvinnik.',
          moves: [
            { uci: 'c2c4', san: 'c4' },
            { uci: 'c7c6', san: 'c6', note: 'Hits d5 and invites a Caro-Kann structure.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c6d5', san: 'cxd5', note: 'This is the Panov-Botvinnik position.' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'b8c6', san: 'Nc6', note: 'Pressure on d4.' }
          ]
        },
        {
          id: 'bb5',
          name: '3.Bb5+ Bd7 4.Bc4',
          kind: 'Sharp try',
          summary: 'White tries to keep the pawn. Black develops the bishop with gain of time and aims to win d5 back later.',
          moves: [
            { uci: 'f1b5', san: 'Bb5+' },
            { uci: 'c8d7', san: 'Bd7' },
            { uci: 'b5c4', san: 'Bc4' },
            { uci: 'd7g4', san: 'Bg4', note: 'The bishop develops actively and eyes f3 and e2.' },
            { uci: 'f2f3', san: 'f3' },
            { uci: 'g4f5', san: 'Bf5', note: 'The bishop stays active; Black aims to regain d5 with ...Nbd7-b6.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'black',
          title: 'Playing a gambit after 4.dxc6',
          text: 'After 3.c4 c6, White can take 4.dxc6 Nxc6. Black is a pawn down but has quick development and pressure; be ready to play actively rather than try to win the pawn back at once.',
          uci: ['e2e4', 'd7d5', 'e4d5', 'g8f6', 'c2c4', 'c7c6', 'd5c6', 'b8c6']
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'The knight chased by c4',
          text: 'After 3.d4 Nxd5, 4.c4 kicks the knight to b6 or f6 and White gains space. Black must hit d4 quickly with ...g6, ...Bg7 and ...Nc6 or ...Bg4.',
          uci: ['e2e4', 'd7d5', 'e4d5', 'g8f6', 'd2d4', 'f6d5', 'c2c4', 'd5b6']
        },
        { kind: 'Mistake', side: 'black', title: 'Recapturing on d5 when it is defended', text: 'After 3.c4, 3...Nxd5?? simply loses the knight to 4.cxd5. Undermine the pawn first with ...c6 or ...e6.' }
      ],
      transpositions: [
        { to: 'b-caro-kann-vs-panov', note: '3.c4 c6 4.d4 cxd5 reaches the Panov-Botvinnik position after 4...Nf6.' }
      ],
      lessons: ['black-vs-e4-17'],
      gambits: ['bg-icelandic'],
      uncertain: 'The 3.Bb5+ Bd7 4.Bc4 Bg4 line is given as a typical idea; theory there is less settled than in the 3.d4 lines.'
    },
    {
      id: 'b-pirc-austrian',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-pirc',
      family: 'Pirc Defence',
      name: 'Pirc: Black vs the Austrian Attack (4.f4)',
      short: 'vs the Austrian Attack (4.f4)',
      aliases: ['Austrian Attack'],
      parent: 'b-pirc',
      eco: 'B09',
      defining: ['e2e4', 'd7d6', 'd2d4', 'g8f6', 'b1c3', 'g7g6', 'f2f4', 'f8g7'],
      moves: '1.e4 d6 2.d4 Nf6 3.Nc3 g6 4.f4 Bg7',
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 16,
      summary: 'White builds a three-pawn centre with f4. Black castles quickly and hits back with ...c5 before e5 gains too much space.',
      idea: 'With pawns on d4, e4 and f4, White threatens e5 to drive the f6 knight away. Black does not try to hold the centre but undermines it: after 5.Nf3 O-O the main ideas are ...c5 (often prepared by ...Na6 against 6.Bd3) and, against an early e5, ...Nfd7 followed by ...c5 to hit the base d4. The g7 bishop becomes strong once d4 falls.',
      plans: { white: ['Push e5 to gain space and drive the f6 knight away', 'Castle and attack the kingside with Qe1-h4, f5 and Bh6, or h4-h5'], black: ['Castle quickly, then hit d4 with ...c5 (after ...Na6 if needed)', 'Against e5, retreat ...Nfd7 and strike at the base with ...c5', 'Use the g7 bishop on the long diagonal once d4 is exchanged'] },
      responses: [
        { moves: '5.Nf3 O-O 6.e5 Nfd7 7.h4 c5', name: '6.e5', note: 'Black hits the base of the chain at once (see the lesson). 8.h5 cxd4 9.Qxd4 dxe5 breaks up the centre.', line: 'e5' },
        { moves: '5.Nf3 O-O 6.Bd3 Na6 7.O-O c5', name: '6.Bd3', note: 'After 8.d5 the game resembles a Benoni; Black plays ...Rb8 and ...b5, or ...Bg4.', line: 'bd3' },
        { moves: '5.Nf3 c5 6.dxc5 Qa5', name: '5...c5', note: 'An immediate strike: 7.Bd3 Qxc5 8.Qe2 O-O 9.Be3 Qa5, and Black has reduced the centre.', line: 'c5' }
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
          { uci: 'f2f4', san: 'f4', note: 'Three pawns abreast: the Austrian Attack.' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'e8g8', san: 'O-O', note: 'Castle first, then hit the centre.' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'b8a6', san: 'Na6', note: 'Prepares ...c5 and keeps c7 free.' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'c7c5', san: 'c5', note: 'The key strike against d4.' },
          { uci: 'd4d5', san: 'd5' },
          { uci: 'a8b8', san: 'Rb8' }
        ]
      },
      lines: [
        {
          id: 'e5',
          name: '5.Nf3 O-O 6.e5 Nfd7',
          kind: 'Main line',
          summary: 'White pushes e5 and attacks with h4-h5. Black answers at once with ...c5 against the base of the chain.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'f6d7', san: 'Nfd7' },
            { uci: 'h2h4', san: 'h4' },
            { uci: 'c7c5', san: 'c5', note: 'Hits the base of the chain at once.' },
            { uci: 'h4h5', san: 'h5' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'd1d4', san: 'Qxd4' },
            { uci: 'd6e5', san: 'dxe5', note: 'The centre is broken up and the g7 bishop wakes up.' }
          ]
        },
        {
          id: 'bd3',
          name: '5.Nf3 O-O 6.Bd3 Na6',
          kind: 'Main line',
          summary: 'Black prepares ...c5 with ...Na6. After d5 a Benoni-like structure arises and Black plays for ...b5.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'b8a6', san: 'Na6', note: 'Prepares ...c5 and keeps c7 free.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c7c5', san: 'c5', note: 'The key strike against d4.' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'a8b8', san: 'Rb8', note: 'Prepares ...b5: a Benoni-like fight.' }
          ]
        },
        {
          id: 'c5',
          name: '5.Nf3 c5',
          kind: 'Alternative',
          summary: "An immediate strike before castling. After 6.dxc5 Qa5 Black regains the pawn and reduces White's centre.",
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c7c5', san: 'c5', note: 'The immediate strike before castling.' },
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'd8a5', san: 'Qa5' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'a5c5', san: 'Qxc5', note: 'The pawn is back and the centre is reduced.' },
            { uci: 'd1e2', san: 'Qe2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'c5a5', san: 'Qa5' },
            { uci: 'e1g1', san: 'O-O' }
          ]
        }
      ],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'Slow play allows e5 and h4-h5', text: 'If Black spends moves on queenside development, e5 and h4-h5 arrive with a direct attack. The answer to the big centre is an early ...c5.' },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Hitting the head instead of the base',
          text: 'After 6.e5 Nfd7 7.h4, 7...dxe5 hits the front of the chain; White recaptures and keeps a pawn on e5 while h5 comes. 7...c5 attacks the base, d4.',
          uci: ['e2e4', 'd7d6', 'd2d4', 'g8f6', 'b1c3', 'g7g6', 'f2f4', 'f8g7', 'g1f3', 'e8g8', 'e4e5', 'f6d7', 'h2h4', 'd6e5']
        }
      ],
      lessons: ['black-vs-e4-11'],
      uncertain: 'In the 6.Bd3 Na6 7.O-O c5 8.d5 line, 8...Rb8 and 8...Bg4 are both played; the choice here is one typical plan.'
    },
    {
      id: 'b-modern',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-modern',
      family: 'Modern Defence',
      name: 'Modern Defence (1...g6 2.d4 Bg7)',
      short: 'Modern Defence (2...Bg7)',
      aliases: ['Robatsch Defence'],
      eco: 'B06',
      defining: ['e2e4', 'g7g6', 'd2d4', 'f8g7'],
      moves: '1.e4 g6 2.d4 Bg7',
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 14,
      summary: 'Fianchetto at once and delay ...Nf6. Black keeps maximum flexibility and strikes at the centre with ...c5, ...e5 or ...d5 later.',
      idea: 'Black lets White build a centre and keeps the knight off f6, so e4-e5 gains no time. The g7 bishop presses d4 at once. Black chooses the break later: ...c5 (if White takes on c5, ...Qa5+ regains the pawn), ...d6 with ...Nd7 or ...Nc6 and ...e5, or queenside space with ...a6 and ...b5. Many lines transpose to the Pirc after ...d6 and ...Nf6.',
      plans: { white: ['Build a broad centre with Nc3, Be3, Qd2 and f3 or f4', 'Use the extra space for a kingside attack with h4-h5 or Bh6'], black: ['Hit d4 with ...c5 or ...e5 once White has committed', 'Against Be3 and Qd2, gain queenside space with ...a6, ...b5 and ...Bb7', 'Transpose to a Pirc with ...d6 and ...Nf6 if that suits you'] },
      responses: [
        { moves: '3.Nc3 d6 4.Be3 a6 5.Qd2 Nd7', name: '3.Nc3 with Be3', note: 'Black follows with ...b5, ...Bb7 and later ...c5 or ...e5, keeping the knight on g8 flexible.', line: 'be3' },
        { moves: '3.Nf3 c5 4.dxc5 Qa5+', name: '3.Nf3 c5', note: '5.c3 Qxc5 regains the pawn; 4.c3 and 4.d5 are the more testing replies.', line: 'c5' },
        { moves: '3.c4 d6 4.Nc3 Nc6 5.Be3 e5', name: '3.c4', note: "White aims for a King's Indian-type centre; after 6.d5 Nd4 Black has a strong knight.", line: 'c4' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'g7g6', san: 'g6', note: 'The fianchetto comes first.' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'f8g7', san: 'Bg7', note: 'The bishop already presses d4.' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'a7a6', san: 'a6', note: 'Prepares ...b5 without committing the knights.' },
          { uci: 'd1d2', san: 'Qd2' },
          { uci: 'b8d7', san: 'Nd7' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b7b5', san: 'b5' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'c8b7', san: 'Bb7', note: 'Queenside space and pressure on e4.' }
        ]
      },
      lines: [
        {
          id: 'be3',
          name: '3.Nc3 d6 4.Be3 a6',
          kind: 'Main line',
          summary: 'Against the broad centre with Be3 and Qd2, Black gains queenside space with ...a6, ...b5 and ...Bb7 before choosing a central break.',
          moves: [
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'a7a6', san: 'a6', note: 'Prepares ...b5 without committing the knights.' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'b8d7', san: 'Nd7' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'c8b7', san: 'Bb7', note: 'Queenside space and pressure on e4; ...c5 or ...e5 can follow.' }
          ]
        },
        {
          id: 'c5',
          name: '3.Nf3 c5',
          kind: 'Alternative',
          summary: 'A second attacker on d4. If White takes on c5, ...Qa5+ regains the pawn with easy development.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c7c5', san: 'c5', note: 'A second attacker on d4.' },
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'd8a5', san: 'Qa5+', note: 'Check, and the c5 pawn is attacked.' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'a5c5', san: 'Qxc5' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd7d6', san: 'd6', note: 'Black has easy development and pressure on the dark squares.' }
          ]
        },
        {
          id: 'c4',
          name: '3.c4 d6 4.Nc3 Nc6',
          kind: 'Alternative',
          summary: 'Against c4, Black hits d4 with ...Nc6 and ...e5; after d5 the knight jumps to d4.',
          moves: [
            { uci: 'c2c4', san: 'c4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'b8c6', san: 'Nc6', note: 'Pressure on d4.' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'c6d4', san: 'Nd4', note: 'A strong knight that White must deal with before developing.' }
          ]
        }
      ],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'Fianchetto-only play', text: 'If Black only develops and never strikes at the centre, White builds f4, e5 and a kingside attack. Pick a central break (...c5, ...e5 or ...d5) in good time.' },
        {
          kind: 'Trap',
          side: 'white',
          title: '4.dxc5 does not win a pawn',
          text: 'After 3.Nf3 c5, taking 4.dxc5 is met by 4...Qa5+, checking the king and hitting c5, and Black regains the pawn.',
          uci: ['e2e4', 'g7g6', 'd2d4', 'f8g7', 'g1f3', 'c7c5', 'd4c5', 'd8a5']
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Bh6 and the dark squares',
          text: 'Against Qd2 and Bh6, the dark squares around a castled king weaken once the g7 bishop is traded. Delaying castling, as in the ...a6 and ...b5 plans, takes the sting out.',
          uci: ['e2e4', 'g7g6', 'd2d4', 'f8g7', 'b1c3', 'd7d6', 'c1e3', 'a7a6', 'd1d2', 'b8d7', 'e3h6']
        }
      ],
      transpositions: [
        { to: 'b-pirc', note: '3.Nc3 d6 4.Nf3 Nf6 (or 4.f4 Nf6) transposes to the Pirc.' }
      ],
      lessons: ['black-vs-e4-18'],
      uncertain: 'The 3.Nc3 d6 4.Be3 a6 set-up is given as one common plan; Modern Defence move orders are very flexible and other sequences are equally playable.'
    },
    {
      id: 'b-alekhine-four-pawns',
      side: 'black',
      group: 'vs-e4',
      familyId: 'bf-alekhine',
      family: 'Alekhine Defence',
      name: 'Alekhine: Black vs the Four Pawns Attack (5.f4)',
      short: 'vs the Four Pawns Attack (5.f4)',
      aliases: ['Four Pawns Attack'],
      parent: 'b-alekhine',
      eco: 'B03',
      defining: ['e2e4', 'g8f6', 'e4e5', 'f6d5', 'd2d4', 'd7d6', 'c2c4', 'd5b6', 'f2f4', 'd6e5'],
      moves: '1.e4 Nf6 2.e5 Nd5 3.d4 d6 4.c4 Nb6 5.f4 dxe5',
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 16,
      summary: 'White builds a huge centre with c4, d4, e5 and f4. Black exchanges on e5 and attacks the pawns with ...Nc6, ...Bf5 and ...e6.',
      idea: 'After 5...dxe5 6.fxe5, the white centre looks imposing but every pawn needs defending. Black develops with tempo: ...Nc6 hits d4 and e5, ...Bf5 controls e4 and b1, and ...e6 opens the f8 bishop for ...Be7 or ...Bb4. Black castles and breaks with ...f6 or ...c5; once the centre cracks, the advanced pawns become targets.',
      plans: { white: ['Hold the centre with Be3, Nc3 and Nf3, then push d5 when Black is not ready', 'Use the space for a kingside attack'], black: ['Hit the pawns with ...Nc6, ...Bf5, ...e6 and ...Be7 or ...Bb4', 'Break with ...f6 or ...c5 once developed', 'Watch the d4-d5 push, which can gain space with tempo on the c6 knight'] },
      responses: [
        { moves: '6.fxe5 Nc6 7.Be3 Bf5 8.Nc3 e6 9.Nf3', name: 'Main line', note: '9...Be7 (or 9...Bb4) 10.Be2 O-O 11.O-O f6: Black castles and hits the centre.', line: 'main' },
        { moves: '6.fxe5 c5', name: '6...c5', note: 'An immediate central strike: 7.d5 e6 8.Nc3 exd5 9.cxd5 c4 leads to sharp play.', line: 'c5' }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'e4e5', san: 'e5' },
          { uci: 'f6d5', san: 'Nd5' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'd5b6', san: 'Nb6' },
          { uci: 'f2f4', san: 'f4', note: 'Four pawns abreast.' },
          { uci: 'd6e5', san: 'dxe5', note: 'Opens the d-file for Black.' },
          { uci: 'f4e5', san: 'fxe5' },
          { uci: 'b8c6', san: 'Nc6', note: 'Hits d4 and e5.' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'c8f5', san: 'Bf5', note: 'Controls e4 and b1.' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'f8e7', san: 'Be7' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '6.fxe5 Nc6 7.Be3 Bf5',
          kind: 'Main line',
          summary: 'Black develops with tempo against the pawns, castles and then breaks with ...f6.',
          moves: [
            { uci: 'f4e5', san: 'fxe5' },
            { uci: 'b8c6', san: 'Nc6', note: 'Attacks d4 and e5 at once.' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'c8f5', san: 'Bf5', note: 'Controls e4 and b1.' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f7f6', san: 'f6', note: 'Black castles first, then hits the centre.' }
          ]
        },
        {
          id: 'c5',
          name: '6.fxe5 c5',
          kind: 'Sharp try',
          summary: 'Black strikes at d4 at once. After d5 the play is sharp: Black gives up d5 for activity and a grip on d3 with ...c4.',
          moves: [
            { uci: 'f4e5', san: 'fxe5' },
            { uci: 'c7c5', san: 'c5', note: 'An immediate central strike.' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'c5c4', san: 'c4', note: 'Sharp: Black gives the d5 square for activity and a grip on d3.' }
          ]
        }
      ],
      pitfalls: [
        { kind: 'Mistake', side: 'black', title: 'Grabbing defended pawns', text: 'After 6.fxe5, 6...Nxc4? loses the knight to 7.Bxc4, and 6...Qxd4?? loses the queen to 7.Qxd4. Develop with tempo (6...Nc6) instead.' },
        {
          kind: 'Risk',
          side: 'black',
          title: 'The d4-d5 push',
          text: 'With the knight on c6 and the bishop developed, White often pushes d5 to gain space with tempo and open lines towards e6. Check d5 before each move and have ...exd5 or ...Nb4 ready.',
          uci: ['e2e4', 'g8f6', 'e4e5', 'f6d5', 'd2d4', 'd7d6', 'c2c4', 'd5b6', 'f2f4', 'd6e5', 'f4e5', 'b8c6', 'c1e3', 'c8f5', 'b1c3', 'e7e6', 'g1f3', 'f8e7', 'd4d5']
        }
      ],
      lessons: ['black-vs-e4-12'],
      uncertain: 'The 6...c5 7.d5 e6 8.Nc3 exd5 9.cxd5 c4 line is sharp and only outlined here.'
    }
  ],
  lessons: [
    {
      id: 'black-vs-e4-1',
      category: 'black-vs-e4',
      side: 'black',
      title: 'Petroff: do not copy on move three',
      level: 'Beginner',
      minutes: 6,
      objective: 'Play the Petroff move order correctly, and find the only defence after the copycat 3...Nxe4 4.Qe2.',
      summary: 'Why 3...d6 comes before ...Nxe4 against 3.Nxe5, why 3...Nxe4 is fine against 3.d4, and how to limit the damage if you forget.',
      prerequisites: ['openings-1'],
      related: { openings: ['b-petroff', 'b-petroff-vs-d4'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'A tempting copy',
          fen: 'rnbqkb1r/pppp1ppp/5n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R b KQkq - 0 3',
          orientation: 'b',
          text: "In the Petroff Defence, Black answers 2.Nf3 by attacking e4 with 2...Nf6. After 3.Nxe5 it looks natural to copy White and take on e4. But Black's e-pawn has gone, so the e-file leads straight to the black king, and White's queen can use it. The right move is 3...d6 first, driving the knight away.",
          arrows: [['d7', 'd6']],
          highlights: ['e5', 'e4']
        },
        {
          type: 'line',
          title: 'The correct order',
          fen: 'start',
          orientation: 'b',
          text: 'Kick the knight first, then take the pawn. Now the e-file is no longer a danger.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'd7d6', san: 'd6', note: 'Drives the knight back before anything else.' },
            { uci: 'e5f3', san: 'Nf3' },
            { uci: 'f6e4', san: 'Nxe4', note: 'Now the pawn is regained safely.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd6d5', san: 'd5', note: 'The e4 knight is well supported, and Black has a sound position.' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Only one defence',
          fen: 'rnbqkb1r/pppp1ppp/8/4N3/4n3/8/PPPPQPPP/RNB1KB1R b KQkq - 1 4',
          prompt: 'Black copied with 3...Nxe4 and White played 4.Qe2. Black to move: keep material level.',
          solution: ['d8e7'],
          hint: 'If the e4 knight moves, a white knight move gives a discovered check. Put a piece on the e-file that cannot simply be taken.',
          explanation: '4...Qe7! blocks the e-file, so knight moves no longer give a discovered check. After 5.Qxe4 d6 the e5 knight is pinned and won back: 6.d4 dxe5 7.dxe5 Nc6, and the e5 pawn usually falls too (8.Nc3 Qxe5), though White keeps a lead in development and a small edge. Every other move loses material.',
          wrong: { e4f6: '5.Nc6+ is a discovered check from the queen on e2, and the knight also attacks your queen. You lose the queen.', d7d5: '5.d3 attacks the knight, which cannot move without allowing a discovered check. After 5...Qe7 6.dxe4 Qxe5 7.exd5 White is a clean pawn up.', f8e7: 'The bishop does block the e-file, but 5.Qxe4 simply wins your knight.' },
          accept: [['d8e7']]
        },
        {
          type: 'line',
          title: 'When ...Nxe4 is fine: 3.d4',
          orientation: 'b',
          text: "Against 3.d4 the capture on e4 is the main move. Black's own e5 pawn still blocks the e-file, so there is no discovered check to fear.",
          fen: 'rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'f6e4', san: 'Nxe4', note: 'Fine here: the e5 pawn still blocks the e-file.' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'b8d7', san: 'Nd7', note: 'Challenges the strong knight.' },
            { uci: 'e5d7', san: 'Nxd7' },
            { uci: 'c8d7', san: 'Bxd7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8d6', san: 'Bd6', note: 'Quick development and a sound position.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-e4-2',
      category: 'black-vs-e4',
      side: 'black',
      title: 'Giuoco Piano: strike back with ...d5',
      level: 'Beginner',
      minutes: 6,
      objective: "Meet White's big centre in the Giuoco Piano by trading bishops with ...Bb4+ and breaking with ...d5.",
      summary: "When White builds pawns on d4 and e4, the ...d5 break frees Black's game.",
      related: { openings: ['b-e5-giuoco-piano'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'The ideal centre',
          fen: 'r1bqk2r/pppp1ppp/2n2n2/2b5/2BPP3/5N2/PP3PPP/RNBQK2R b KQkq - 0 6',
          orientation: 'b',
          text: 'White has built the ideal centre with pawns on d4 and e4, and the c5 bishop is attacked. If Black stays passive, White will push e5 or d5 and gain space with tempo. Black first answers the threat with 6...Bb4+, developing with check, and then trades the bishop off.',
          arrows: [['c5', 'b4']],
          highlights: ['d4', 'e4']
        },
        {
          type: 'line',
          title: 'Check and exchange',
          fen: 'r1bqk2r/pppp1ppp/2n2n2/2b5/2BPP3/5N2/PP3PPP/RNBQK2R b KQkq - 0 6',
          orientation: 'b',
          moves: [
            { uci: 'c5b4', san: 'Bb4+', note: 'Gains time with check.' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'b4d2', san: 'Bxd2+', note: 'Trades the bishop rather than retreating it.' },
            { uci: 'b1d2', san: 'Nbxd2', note: "Now it is Black's move: what next?" }
          ]
        },
        {
          type: 'puzzle',
          title: 'Break the centre',
          fen: 'r1bqk2r/pppp1ppp/2n2n2/8/2BPP3/5N2/PP1N1PPP/R2QK2R b KQkq - 0 8',
          prompt: "Black to move: which pawn move breaks up White's centre before it can advance?",
          solution: ['d7d5'],
          hint: "Which pawn can challenge e4 directly and open lines for Black's pieces?",
          explanation: "8...d5! hits e4 at once. After 9.exd5 Nxd5 the black knight is centralised, White's d4 pawn is isolated, and Black is fully equal; a typical continuation is 10.Qb3 Nce7 11.O-O O-O. If Black delays, White pushes d5 or e5 and gains space with tempo.",
          wrong: { e8g8: 'Natural, but it lets White keep the centre: 9.d5 drives the c6 knight away and White has more space.', d7d6: 'Too passive. White keeps the ideal centre and can push d5 with tempo whenever it suits.' },
          accept: [['d7d5']]
        },
        {
          type: 'line',
          title: 'After the break',
          fen: 'r1bqk2r/ppp2ppp/2n2n2/3p4/2BPP3/5N2/PP1N1PPP/R2QK2R w KQkq d6 0 9',
          orientation: 'b',
          moves: [
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'f6d5', san: 'Nxd5', note: 'A strong central knight, blockading the isolated d4 pawn.' },
            { uci: 'd1b3', san: 'Qb3' },
            { uci: 'c6e7', san: 'Nce7', note: 'Defends d5 a second time.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O', note: 'Level, with easy development for Black.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-e4-3',
      category: 'black-vs-e4',
      side: 'black',
      title: 'Caro-Kann: a safe home for the bishop',
      level: 'Beginner',
      minutes: 5,
      objective: 'Stop h4-h5 from trapping the bishop on g6 in the Classical Caro-Kann.',
      summary: 'Why Black meets h4 with ...h6 (or ...h5), and what happens if you forget.',
      prerequisites: ['openings-2'],
      related: { openings: ['b-caro-kann-classical'], gambits: [], lessons: ['openings-2'] },
      steps: [
        {
          type: 'read',
          title: 'A hunted bishop',
          fen: 'rn1qkbnr/pp2pppp/2p3b1/8/3P4/6N1/PPP2PPP/R1BQKBNR w KQkq - 3 6',
          orientation: 'b',
          text: "In the Classical Caro-Kann, Black develops the light-squared bishop to f5 before playing ...e6. White chases it: 5.Ng3 hit the bishop and it dropped back to g6. Now White often plays h4 and h5. The bishop's escape square h7 is blocked by Black's own pawn, and the g3 knight covers f5 and e4.",
          arrows: [['h2', 'h4'], ['g3', 'f5'], ['g3', 'e4']],
          highlights: ['g6', 'h7']
        },
        {
          type: 'puzzle',
          title: 'Make room in time',
          fen: 'rn1qkbnr/pp2pppp/2p3b1/8/3P3P/6N1/PPP2PP1/R1BQKBNR b KQkq h3 0 6',
          prompt: 'Black to move. White threatens h5, trapping the g6 bishop. Stop it without giving up the bishop.',
          solution: ['h7h6'],
          accept: [['h7h6'], ['h7h5']],
          hint: 'Either give the bishop a retreat square, or stop the h-pawn in its tracks.',
          explanation: '6...h6 is the main line: after 7.h5 the bishop retreats to h7. 6...h5 is also good, stopping the pawn and freeing h7 for the bishop. Other moves risk disaster: after 6...Nd7? 7.h5 the bishop has no safe square, because h7 is blocked and f5 and e4 are covered by the g3 knight.',
          wrong: { b8d7: '7.h5 traps the bishop: h7 is blocked by your own pawn, and f5 and e4 are covered by the g3 knight.', g8f6: 'After 7.h5 Be4 8.Nxe4 Nxe4 you keep the material, but you have given up the bishop you developed so carefully.' }
        },
        {
          type: 'line',
          title: 'The main line',
          fen: 'rn1qkbnr/pp2pppp/2p3b1/8/3P3P/6N1/PPP2PP1/R1BQKBNR b KQkq h3 0 6',
          orientation: 'b',
          moves: [
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8d7', san: 'Nd7' },
            { uci: 'h4h5', san: 'h5', note: 'Chases the bishop.' },
            { uci: 'g6h7', san: 'Bh7', note: 'Safe on h7, still eyeing the long diagonal.' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'h7d3', san: 'Bxd3', note: "Trading the bishop is Black's standard reply." },
            { uci: 'd1d3', san: 'Qxd3' },
            { uci: 'e7e6', san: 'e6', note: 'Black develops calmly with ...Ngf6, ...Be7 or ...Qc7.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-e4-4',
      category: 'black-vs-e4',
      side: 'black',
      title: 'French Advance: hit the base, mind the check',
      level: 'Beginner',
      minutes: 7,
      objective: "Attack White's pawn chain at its base with ...c5, and avoid the Bb5+ trap when grabbing d4.",
      summary: "Black's ...c5 and ...Qb6 plan against 3.e5, and the trap that punishes greed on d4.",
      related: { openings: ['b-french-advance', 'b-french-classical'], gambits: [], lessons: [] },
      steps: [
        { type: 'read', title: 'A pawn chain', fen: 'rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3', orientation: 'b', text: "After 3.e5, White's pawns on d4 and e5 form a pawn chain: a diagonal line of pawns, each protecting the one in front. A chain is best attacked at its base, the pawn at the back, which here is d4. If d4 falls, the e5 pawn loses its support.", highlights: ['d4', 'e5'] },
        {
          type: 'puzzle',
          title: 'Find the base',
          fen: 'rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3',
          prompt: "Black to move: which pawn move attacks the base of White's pawn chain?",
          solution: ['c7c5'],
          hint: 'The base is d4. Which black pawn can reach a square that attacks it?',
          explanation: '3...c5! attacks d4 at once. Black will add ...Nc6 and ...Qb6, piling up on d4. 3...f6 attacks the front of the chain instead; that idea usually comes later, once d4 is under pressure.',
          wrong: { f7f6: '...f6 hits e5, the head of the chain, which White can support with Nf3 and f4. Start with the base.' },
          accept: [['c7c5']]
        },
        {
          type: 'line',
          title: 'Pressure on d4',
          fen: 'start',
          orientation: 'b',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'c2c3', san: 'c3', note: 'Supports d4.' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd8b6', san: 'Qb6', note: 'Three pieces aim at d4.' },
            { uci: 'f1d3', san: 'Bd3', note: "Develops, but the bishop now blocks the queen's defence of d4." },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'c3d4', san: 'cxd4', note: 'd4 is attacked twice and defended once. Is it really free?' }
          ]
        },
        {
          type: 'puzzle',
          title: 'The greedy grab',
          fen: 'r1b1kbnr/pp3ppp/4p3/3pP3/3q4/3B4/PP3PPP/RNBQK2R w KQkq - 0 9',
          prompt: 'Black took on d4 twice. White to move: show why that is a mistake.',
          solution: ['d3b5'],
          hint: 'Move the bishop with check, and see what it uncovers on the d-file.',
          explanation: "9.Bb5+ is a discovered attack: the bishop gives check and uncovers the d1 queen against Black's queen on d4. Black must deal with the check, then 10.Qxd4 wins the queen. Any other bishop move would let Black's queen take first. So after 7.cxd4, Black plays 7...Bd7, which takes away the check.",
          wrong: { d1a4: "9.Qa4+?? Qxa4: Black's queen on d4 simply takes yours along the fourth rank.", d3e2: 'The d1 queen now hits d4, but it is Black to move: 9...Qxd1+ trades queens and Black stays a pawn up.' },
          accept: [['d3b5']]
        }
      ]
    },
    {
      id: 'black-vs-e4-5',
      category: 'black-vs-e4',
      side: 'black',
      title: 'Two Knights: answer 5.exd5 with ...Na5',
      level: 'Intermediate',
      minutes: 7,
      objective: 'Meet 4.Ng5 in the Two Knights by chasing the c4 bishop instead of recapturing on d5.',
      summary: 'Why 5...Nxd5 invites the Fried Liver Attack, and how 5...Na5 turns the tables.',
      prerequisites: ['openings-1'],
      related: { openings: ['b-e5-two-knights'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'Pressure on f7',
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p1N1/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 5 4',
          orientation: 'b',
          text: "4.Ng5 attacks f7 twice, with knight and bishop, and f7 is defended only by the king. Black's best answer is a counter-strike: 4...d5, blocking the bishop's diagonal. After 5.exd5, though, the bishop is back on the diagonal and f7 is under fire again.",
          arrows: [['g5', 'f7'], ['c4', 'f7']],
          highlights: ['f7']
        },
        {
          type: 'puzzle',
          title: 'Chase the bishop',
          fen: 'r1bqkb1r/ppp2ppp/2n2n2/3Pp1N1/2B5/8/PPPP1PPP/RNBQK2R b KQkq - 0 5',
          prompt: 'Black to move. Recapturing on d5 is risky. Attack the c4 bishop with a piece instead.',
          solution: ['c6a5'],
          hint: 'Which knight can reach a square that attacks c4?',
          explanation: "5...Na5! hits the bishop and keeps it away from f7. After 6.Bb5+ c6 7.dxc6 bxc6 Black has given a pawn but gains time, chasing White's pieces with ...h6 and ...e4. This is the main line. After 5...Nxd5?! White has the strong 6.d4, or the Fried Liver sacrifice 6.Nxf7, with a dangerous attack.",
          wrong: { f6d5: "5...Nxd5?! allows 6.Nxf7 Kxf7 7.Qf3+, the Fried Liver Attack, or the even stronger 6.d4. Black's king is badly exposed.", b7b5: "This pawn move also hits the bishop, but after 6.Bf1 Black's compensation is less clear than in the main line." },
          accept: [['c6a5']]
        },
        {
          type: 'line',
          title: 'The main line',
          fen: 'r1bqkb1r/ppp2ppp/5n2/n2Pp1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq - 1 6',
          orientation: 'b',
          moves: [
            { uci: 'c4b5', san: 'Bb5+' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd5c6', san: 'dxc6' },
            { uci: 'b7c6', san: 'bxc6', note: "Black's pieces come out quickly." },
            { uci: 'b5e2', san: 'Be2' },
            { uci: 'h7h6', san: 'h6', note: 'Chases the knight.' },
            { uci: 'g5f3', san: 'Nf3' },
            { uci: 'e5e4', san: 'e4', note: 'Again with tempo.' },
            { uci: 'f3e5', san: 'Ne5' },
            { uci: 'f8d6', san: 'Bd6', note: 'A pawn down, but well developed, with a firm initiative.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-e4-6',
      category: 'black-vs-e4',
      side: 'black',
      title: 'Dragon: the ...d5 break against 9.O-O-O',
      level: 'Intermediate',
      minutes: 8,
      objective: 'Recognise when ...d5 frees Black in the Yugoslav Attack and know the main line that follows.',
      summary: 'If White castles long before playing Bc4, the ...d5 break hands Black active play.',
      related: { openings: ['b-sicilian-dragon', 'b-sicilian-accelerated-dragon'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'The Yugoslav set-up',
          fen: 'r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R w KQ - 3 9',
          orientation: 'b',
          text: "This is the Yugoslav Attack: White plans O-O-O, h4-h5 and Bh6 to attack Black's king. The usual move here is 9.Bc4, which controls d5. If White castles first with 9.O-O-O, nothing stops Black from breaking in the centre at once.",
          arrows: [['f1', 'c4']],
          highlights: ['d5']
        },
        {
          type: 'puzzle',
          title: 'Open the centre',
          fen: 'r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/2KR1B1R b - - 4 9',
          prompt: "Black to move: which pawn break opens the centre and frees Black's pieces?",
          solution: ['d6d5'],
          hint: 'Look at the pawn on d6 and the square in front of it.',
          explanation: "9...d5! challenges e4 and opens lines. After 10.exd5 Nxd5 11.Nxc6 bxc6 12.Bd4 e5 13.Bc5 Be6 Black's pieces are active and the half-open b-file points at White's king. 13...Be6 even leaves the f8 rook attacked: 14.Bxf8 Bxf8 gives Black strong play. A central break is the classic answer to a flank attack.",
          wrong: { e7e5: 'This hits the knight but gives up the d5 square for good and leaves the d6 pawn backward.', b7b5: 'This simply drops a pawn: both white knights attack b5.' },
          accept: [['d6d5']]
        },
        {
          type: 'line',
          title: 'The main line',
          fen: 'r1bq1rk1/pp2ppbp/2n2np1/3p4/3NP3/2N1BP2/PPPQ2PP/2KR1B1R w - - 0 10',
          orientation: 'b',
          moves: [
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'd4c6', san: 'Nxc6' },
            { uci: 'b7c6', san: 'bxc6', note: 'Recapturing towards the centre opens the b-file.' },
            { uci: 'e3d4', san: 'Bd4', note: "Offers to trade off Black's best bishop." },
            { uci: 'e7e5', san: 'e5', note: 'Gains time on the bishop.' },
            { uci: 'd4c5', san: 'Bc5' },
            { uci: 'c8e6', san: 'Be6', note: 'Ignores the attack on the f8 rook: after 14.Bxf8 Bxf8 Black has rich compensation, so White often prefers 14.Ne4.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-e4-7',
      category: 'black-vs-e4',
      side: 'black',
      title: "Closed Ruy Lopez: the Noah's Ark trap",
      level: 'Intermediate',
      minutes: 6,
      objective: "Spot the ...c5-c4 pattern that traps White's Spanish bishop on b3.",
      summary: "When White's queen recaptures on d4 too early, ...c5 and ...c4 can trap the b3 bishop.",
      related: { openings: ['b-ruy-closed'], gambits: [], lessons: [] },
      steps: [
        { type: 'read', title: 'A bishop with few squares', fen: 'r1bqk2r/2p1bppp/p1np1n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w kq - 0 8', orientation: 'b', text: "In the Closed Ruy Lopez, White's bishop on b3 is a strong piece, but it has few squares. Black's pawn on b5 covers a4 and c4, and White's own pawns stand on a2 and c2. If Black can add ...c5-c4, the bishop may be trapped. This pattern is called the Noah's Ark trap, and it is why White usually plays c3 first.", highlights: ['b3', 'a4', 'c4'] },
        {
          type: 'line',
          title: 'Pushing too soon',
          fen: 'r1bqk2r/2p1bppp/p1np1n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w kq - 0 8',
          orientation: 'b',
          moves: [
            { uci: 'd2d4', san: 'd4', note: 'Pushing before c3, so the bishop has no retreat to c2.' },
            { uci: 'c6d4', san: 'Nxd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'd1d4', san: 'Qxd4', note: 'The natural recapture, and a mistake. Playing 8.c3 first avoids the whole problem.' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Build the ark',
          fen: 'r1bqk2r/2p1bppp/p2p1n2/1p6/3QP3/1B6/PPP2PPP/RNB1R1K1 b kq - 0 10',
          prompt: 'Black to move: win material by trapping a white piece.',
          solution: ['c7c5'],
          hint: 'Attack the queen with a pawn that can then advance once more.',
          explanation: '10...c5! attacks the queen, and next ...c4 traps the b3 bishop. 11.Qd5 loses the queen to ...Nxd5; after 11.Qd3 c4 the pawn forks queen and bishop; after 11.Qd1 c4 the bishop has no square. White gets at most a pawn or two for the bishop.',
          wrong: { e8g8: 'Castling is a fine move, but it misses the chance to trap the bishop with ...c5 and ...c4.' },
          accept: [['c7c5']]
        }
      ]
    },
    {
      id: 'black-vs-e4-8',
      category: 'black-vs-e4',
      side: 'black',
      title: 'Classical Sicilian: ...Qb6 against the Sozin',
      level: 'Intermediate',
      minutes: 6,
      objective: 'Meet 6.Bc4 in the Classical Sicilian with ...Qb6, and avoid the ...g6 trap.',
      summary: "A queen move that unsettles White's d4 knight, and a famous trap for Dragon-minded players.",
      related: { openings: ['b-sicilian-classical', 'b-sicilian-dragon'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'The Sozin bishop',
          fen: 'r1bqkb1r/pp2pppp/2np1n2/8/2BNP3/2N5/PPP2PPP/R1BQK2R b KQkq - 1 6',
          orientation: 'b',
          text: "The Sozin, 6.Bc4, aims the bishop at e6 and f7, ready for Be3, Qe2 and O-O-O. The d4 knight is the hub of White's position, but only the queen defends it, while Black's c6 knight already attacks it.",
          arrows: [['c4', 'f7'], ['c6', 'd4']],
          highlights: ['d4']
        },
        {
          type: 'puzzle',
          title: 'Second attacker',
          fen: 'r1bqkb1r/pp2pppp/2np1n2/8/2BNP3/2N5/PPP2PPP/R1BQK2R b KQkq - 1 6',
          prompt: 'Black to move: which queen move adds a second attacker on d4?',
          solution: ['d8b6'],
          hint: 'Find a diagonal that leads to d4.',
          explanation: '6...Qb6! attacks d4 twice, with queen and knight, so White must react at once. 7.Nb3 is the main reply, and after ...e6, ...Be7 and ...a6 Black has a sound position. The bishop on c4 is blunted by ...e6, and the queen can later drop back to c7.',
          wrong: { g7g6: '6...g6? walks into a known trap: 7.Nxc6 bxc6 8.e5! and if 8...dxe5? 9.Bxf7+ Kxf7 10.Qxd8 wins the queen.' },
          accept: [['d8b6']]
        },
        {
          type: 'line',
          title: 'A typical continuation',
          fen: 'r1b1kb1r/pp2pppp/1qnp1n2/8/2BNP3/2N5/PPP2PPP/R1BQK2R w KQkq - 2 7',
          orientation: 'b',
          moves: [
            { uci: 'd4b3', san: 'Nb3', note: 'The main retreat.' },
            { uci: 'e7e6', san: 'e6', note: 'Blunts the c4 bishop and prepares ...Be7.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'c1e3', san: 'Be3', note: 'Hits the queen on b6.' },
            { uci: 'b6c7', san: 'Qc7', note: 'The queen steps back; with ...a6 and ...O-O to come, Black is solid.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-e4-9',
      category: 'black-vs-e4',
      side: 'black',
      title: 'Sveshnikov: the ...f5 break after Bxf6',
      level: 'Advanced',
      minutes: 8,
      objective: 'Understand why Black accepts doubled f-pawns in the Sveshnikov, and use ...f5 to turn them into a strength.',
      summary: "Black's broken pawns become an asset when ...f5 hits e4 and frees the bishops.",
      related: { openings: ['b-sicilian-sveshnikov'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'The hole on d5',
          fen: 'r1bqkb1r/5ppp/p1np1n2/1p2p1B1/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq b6 0 9',
          orientation: 'b',
          text: "In the Sveshnikov, Black has given up the d5 square, and White's knight on a3 is out of play. White's two main plans are 9.Nd5 and 9.Bxf6; here we look at 9.Bxf6, which removes a defender of d5 before Nd5. Black recaptures with the g-pawn, accepting doubled f-pawns but keeping the bishop pair and opening the g-file.",
          arrows: [['g5', 'f6'], ['c3', 'd5']],
          highlights: ['d5']
        },
        {
          type: 'line',
          title: 'The exchange on f6',
          fen: 'r1bqkb1r/5ppp/p1np1n2/1p2p1B1/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq b6 0 9',
          orientation: 'b',
          moves: [
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'g7f6', san: 'gxf6', note: 'Doubled pawns, but Black gains the bishop pair and the g-file.' },
            { uci: 'c3d5', san: 'Nd5', note: 'The knight occupies the hole.' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Use the doubled pawn',
          fen: 'r1bqkb1r/5p1p/p1np1p2/1p1Np3/4P3/N7/PPP2PPP/R2QKB1R b KQkq - 1 10',
          prompt: 'Black to move: which pawn move strikes at e4 straight away?',
          solution: ['f6f5'],
          hint: 'One of the doubled pawns can advance.',
          explanation: '10...f5! hits e4, turning the doubled pawn into a lever. Black follows with ...Bg7 and ...Be6, and can later push ...f4 to gain space. If White takes on f5, Black recaptures with the bishop and gets open lines for the bishops and rooks. This is the main line of the Sveshnikov.',
          wrong: { c6e7: "This blocks the queen's defence of f6, and 11.Nxf6+ wins a pawn with check." },
          accept: [['f6f5']]
        },
        {
          type: 'line',
          title: 'The main line',
          fen: 'r1bqkb1r/5p1p/p1np4/1p1Npp2/4P3/N7/PPP2PPP/R2QKB1R w KQkq - 0 11',
          orientation: 'b',
          moves: [
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'c8e6', san: 'Be6', note: 'Develops and eyes the d5 knight.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e6d5', san: 'Bxd5', note: 'Removes the strong knight.' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'c6e7', san: 'Ne7', note: 'Black plans ...Bg7 and central pawn advances with ...e4 or ...f4.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-e4-13',
      category: 'black-vs-e4',
      side: 'black',
      title: 'Open Ruy Lopez: count the attackers on e4',
      level: 'Advanced',
      minutes: 8,
      objective: 'Keep the e4 knight safe in the Open Ruy Lopez by counting its attackers and defenders, and avoid the Tarrasch trap.',
      summary: 'Why ...b5 and ...d5 come first, how ...Bf5 holds the knight, and why the queen stays off the d-file.',
      prerequisites: ['openings-1'],
      related: { openings: ['b-ruy-open'], gambits: [], lessons: ['white-openings-9', 'black-vs-e4-7'] },
      steps: [
        { type: 'read', title: 'A knight in the centre', orientation: 'b', text: 'In the Open Ruy Lopez Black takes on e4 at move five, drives the bishop away with ...b5 and supports the knight with ...d5. The knight on e4 is now a strong central piece, but its only pawn support is d5, and White will attack it with Nbd2, Bc2 and Re1. Black must keep counting attackers and defenders.', highlights: ['e4', 'd5'], fen: 'r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1B3N2/PPP2PPP/RNBQ1RK1 w kq - 1 9' },
        {
          type: 'line',
          title: 'The attackers gather',
          orientation: 'b',
          text: 'The main line with 9...Bc5. Watch how the pressure on e4 builds up.',
          fen: 'r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 3 5',
          moves: [
            { uci: 'f6e4', san: 'Nxe4', note: 'Takes the pawn while the e-file is still closed.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'b7b5', san: 'b5', note: 'Drives the bishop away first.' },
            { uci: 'a4b3', san: 'Bb3' },
            { uci: 'd7d5', san: 'd5', note: 'Supports the knight and frees the c8 bishop.' },
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'c8e6', san: 'Be6' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'f8c5', san: 'Bc5', note: 'The active bishop placement.' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'b3c2', san: 'Bc2', note: 'Now e4 is attacked twice: by the d2 knight and the c2 bishop.' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Add a defender',
          orientation: 'b',
          prompt: 'The e4 knight is attacked twice and defended once. Black to move: defend it with a bishop.',
          hint: 'Which bishop can reach a square that guards e4?',
          explanation: '11...Bf5! guards e4 a second time: now 12.Nxe4 dxe4 13.Bxe4? Bxe4 wins a piece for Black. The other main move is 11...f5, supporting the knight with a pawn, and 11...Nxf2!? is the sharp Dilworth sacrifice. Ignoring the threat costs a pawn after 12.Nxe4 dxe4 13.Bxe4.',
          fen: 'r2q1rk1/2p2ppp/p1n1b3/1pbpP3/4n3/2P2N2/PPBN1PPP/R1BQ1RK1 b - - 4 11',
          solution: ['e6f5'],
          wrong: { c5b6: 'This ignores the threat: 12.Nxe4 dxe4 13.Bxe4 wins a pawn and hits the c6 knight.', f8e8: 'The rook does not guard e4 through the e5 pawn: 12.Nxe4 dxe4 13.Bxe4 and White is a clean pawn up.' }
        },
        { type: 'read', title: 'Keep the queen off the d-file', orientation: 'b', text: "One more pattern, from the 9...Be7 line. With White's knight on d4, the natural 11...Qd7? loses material: 12.Nxe6 fxe6 13.Rxe4! and 13...dxe4 opens the d-file for 14.Qxd7. The d5 pawn cannot guard e4 and shield the queen at the same time. This is the Tarrasch trap.", highlights: ['d7', 'd1', 'e4'], fen: 'r2q1rk1/2p1bppp/p1n1b3/1p1pP3/3Nn3/1BP5/PP3PPP/RNBQR1K1 b - - 4 11' }
      ]
    },
    {
      id: 'black-vs-e4-14',
      category: 'black-vs-e4',
      side: 'black',
      title: 'Exchange Ruy Lopez: the ...Qd4 fork',
      level: 'Beginner',
      minutes: 6,
      objective: 'Explain why 5.Nxe5 fails in the Exchange Ruy Lopez and know how Black holds e5 after 5.O-O.',
      summary: 'After 4.Bxc6 dxc6 the e5 pawn looks loose, but a queen fork wins it back.',
      prerequisites: ['tactics-1'],
      related: { openings: ['b-ruy-vs-exchange'], gambits: [], lessons: ['strategy-8'] },
      steps: [
        { type: 'read', title: 'Doubled pawns, two bishops', orientation: 'b', text: "In the Exchange Variation White gives up the Spanish bishop to double Black's c-pawns. Black recaptures towards the centre with 4...dxc6, opening the d-file for the queen and freeing the c8 bishop. Black has the bishop pair; White hopes for an ending where the extra kingside pawn counts. But the e5 pawn has lost its defender. Can White simply take it?", highlights: ['e5', 'c6'], fen: 'r1bqkbnr/1pp2ppp/p1p5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5' },
        {
          type: 'puzzle',
          title: 'Two targets',
          orientation: 'b',
          prompt: 'White has grabbed e5. Black to move: attack the knight and the e4 pawn at once.',
          hint: 'The queen can reach a central square on the open d-file.',
          explanation: '5...Qd4! forks the e5 knight and the e4 pawn. After 6.Nf3 Qxe4+ 7.Qe2 Qxe2+ 8.Kxe2 material is level, White has lost the right to castle, and Black has the bishop pair and quicker development. That is why White normally castles first: after 5.O-O the threat to e5 is real, and Black defends it with ...f6, ...Bg4 or ...Qd6.',
          fen: 'r1bqkbnr/1pp2ppp/p1p5/4N3/4P3/8/PPPP1PPP/RNBQK2R b KQkq - 0 5',
          solution: ['d8d4'],
          wrong: { f8d6: '6.d4 defends the knight, and White simply keeps the extra pawn.' }
        },
        {
          type: 'line',
          title: 'The pawn comes back',
          orientation: 'b',
          fen: 'r1b1kbnr/1pp2ppp/p1p5/4N3/3qP3/8/PPPP1PPP/RNBQK2R w KQkq - 1 6',
          moves: [
            { uci: 'e5f3', san: 'Nf3' },
            { uci: 'd4e4', san: 'Qxe4+', note: 'The pawn is back, with check.' },
            { uci: 'd1e2', san: 'Qe2' },
            { uci: 'e4e2', san: 'Qxe2+' },
            { uci: 'e1e2', san: 'Kxe2' },
            { uci: 'c8f5', san: 'Bf5', note: 'Two bishops, quick development and pressure on c2.' }
          ]
        },
        {
          type: 'line',
          title: 'The real main line',
          orientation: 'b',
          text: 'So White castles first. Black holds e5 with ...f6 and, after the exchanges, reaches a balanced ending with the bishop pair.',
          fen: 'r1bqkbnr/1pp2ppp/p1p5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
          moves: [
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f7f6', san: 'f6', note: 'Now e5 is defended by a pawn.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'c6c5', san: 'c5' },
            { uci: 'd4b3', san: 'Nb3' },
            { uci: 'd8d1', san: 'Qxd1' },
            { uci: 'f1d1', san: 'Rxd1' },
            { uci: 'c8g4', san: 'Bg4', note: 'Develops with tempo on the rook.' },
            { uci: 'f2f3', san: 'f3' },
            { uci: 'g4e6', san: 'Be6', note: 'Bishop pair against the kingside majority.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-e4-15',
      category: 'black-vs-e4',
      side: 'black',
      title: 'Scotch: pressure on d4, then the ...Ba6 pin',
      level: 'Intermediate',
      minutes: 8,
      objective: "Pile up on White's d4 knight in the Scotch Classical, and pin the c4 pawn in the Mieses lines.",
      summary: 'Against 4...Bc5 lines add a third attacker with ...Qf6; in the 4...Nf6 Mieses lines pin c4 with ...Ba6.',
      prerequisites: ['tactics-2'],
      related: { openings: ['b-e5-scotch-classical', 'b-e5-scotch'], gambits: [], lessons: ['white-openings-6'] },
      steps: [
        {
          type: 'read',
          title: 'A knight that is also a target',
          orientation: 'b',
          text: "After 3.d4 exd4 4.Nxd4 White's knight stands in the centre, but it is also a target. 4...Bc5 attacks it a second time, together with the c6 knight. White usually defends with 5.Be3. Then Black can add a third attacker, and the same piece will also look at f2.",
          arrows: [['c5', 'd4'], ['c6', 'd4']],
          highlights: ['d4'],
          fen: 'r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5'
        },
        {
          type: 'puzzle',
          title: 'A third attacker',
          orientation: 'b',
          prompt: 'Black to move: which queen move adds a third attacker on d4?',
          hint: 'Find an open diagonal from the queen to d4.',
          explanation: '5...Qf6! attacks d4 three times (knight, bishop and queen) against two defenders, so ...Nxd4 is a real threat, and the queen also eyes f2. White normally answers 6.c3, and Black continues 6...Nge7: the knight goes to e7 because f6 now belongs to the queen.',
          fen: 'r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/4B3/PPP2PPP/RN1QKB1R b KQkq - 2 5',
          solution: ['d8f6'],
          wrong: { g8f6: '5...Nf6? 6.Nxc6! wins a piece: after 6...bxc6 7.Bxc5 the bishop is lost, and 6...Bxe3 7.Nxd8 is worse.', c5d4: "5...Bxd4 6.Bxd4 Nxd4 7.Qxd4 just trades pieces and centralises White's queen; the pressure is gone." }
        },
        {
          type: 'line',
          title: 'The main line',
          orientation: 'b',
          fen: 'r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/4B3/PPP2PPP/RN1QKB1R b KQkq - 2 5',
          moves: [
            { uci: 'd8f6', san: 'Qf6' },
            { uci: 'c2c3', san: 'c3', note: 'Defends d4 with a pawn.' },
            { uci: 'g8e7', san: 'Nge7', note: 'The knight goes to e7, leaving f6 to the queen.' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'c6e5', san: 'Ne5' },
            { uci: 'c4e2', san: 'Be2' },
            { uci: 'f6g6', san: 'Qg6', note: 'Hits e4 and g2.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd7d5', san: 'd5', note: 'The central break.' }
          ]
        },
        {
          type: 'puzzle',
          title: 'The Mieses pin',
          orientation: 'b',
          prompt: "A different Scotch line, 4...Nf6. Black to move: pin the c4 pawn to White's queen.",
          hint: 'Which bishop can line up the c4 pawn and the e2 queen?',
          explanation: "8...Ba6! pins the c4 pawn against the queen on e2, so White must keep defending it. Black follows with ...g6 and ...Bg7 to press on e5, while White's queen is tied to both e5 and c4. This is the Mieses Variation, the main line of 4...Nf6.",
          fen: 'r1b1kb1r/p1ppqppp/2p5/3nP3/2P5/8/PP2QPPP/RNB1KB1R b KQkq c3 0 8',
          solution: ['c8a6'],
          wrong: { d5f6: "8...Nf6? 9.exf6 Qxe2+ 10.Bxe2 and Black has lost a piece for a pawn: the e5 pawn was shielding White's queen, not blocking a pin." }
        }
      ]
    },
    {
      id: 'black-vs-e4-16',
      category: 'black-vs-e4',
      side: 'black',
      title: 'Caro-Kann Two Knights: pin, trade, and a mate to avoid',
      level: 'Beginner',
      minutes: 6,
      objective: 'Play the ...Bg4 plan against the Two Knights Caro-Kann and recognise the Nd6 smothered mate in the ...Nd7 lines.',
      summary: 'Trade the bishop for the f3 knight for a sound light-square chain, and know the famous mate on d6.',
      prerequisites: ['openings-2'],
      related: { openings: ['b-caro-kann-vs-two-knights'], gambits: [], lessons: ['openings-2'] },
      steps: [
        { type: 'read', title: 'Two knights first', orientation: 'b', text: "In the Two Knights Variation White develops both knights before choosing a pawn structure. Black's simplest plan is 3...Bg4: pin the f3 knight and, after h3, give up the bishop for it. Black then sets up pawns on c6, d5 and e6, all on light squares, which makes up for the missing light-squared bishop.", highlights: ['c6', 'd5', 'f3'], fen: 'rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq - 1 3' },
        {
          type: 'line',
          title: 'The ...Bg4 plan',
          orientation: 'b',
          fen: 'rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq - 1 3',
          moves: [
            { uci: 'c8g4', san: 'Bg4', note: 'Pins the f3 knight.' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'g4f3', san: 'Bxf3', note: 'Gives up the bishop for a solid light-square chain.' },
            { uci: 'd1f3', san: 'Qxf3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'b8d7', san: 'Nbd7', note: 'Next ...Bd6 or ...Bb4 and castling.' }
          ]
        },
        {
          type: 'puzzle',
          title: 'The trap after 3...dxe4',
          orientation: 'b',
          prompt: 'If Black takes on e4 instead: after 5.Qe2 Ngf6?? it is White to move. Find mate in one.',
          hint: 'Which black pawn would normally capture on d6, and why can it not?',
          explanation: '6.Nd6# is mate. The knight checks from d6, and the e7 pawn cannot take it because it is pinned against the king by the queen on e2. The king has no square: d8 holds the queen, d7 a knight and f8 a bishop. With 5...Ndf6 or 5...e6 Black avoids the trap; in the 3...Bg4 line it never arises.',
          fen: 'r1bqkb1r/pp1npppp/2p2n2/8/4N3/5N2/PPPPQPPP/R1B1KB1R w KQkq - 3 6',
          solution: ['e4d6'],
          wrong: { e4f6: 'A check, but after 6...Nxf6 Black is fine. Look for a check the e7 pawn cannot answer.' }
        }
      ]
    },
    {
      id: 'black-vs-e4-17',
      category: 'black-vs-e4',
      side: 'black',
      title: 'Scandinavian: ...a6 for the queen, ...c6 against c4',
      level: 'Intermediate',
      minutes: 7,
      objective: 'Protect the d6 queen from Nb5 in the 3...Qd6 Scandinavian, and meet 3.c4 correctly in the 2...Nf6 line.',
      summary: 'Two small pawn moves that solve the main problems of the modern Scandinavian lines.',
      prerequisites: ['black-vs-e4-10'],
      related: { openings: ['b-scandinavian-qd6', 'b-scandinavian-modern'], gambits: ['bg-icelandic'], lessons: ['black-vs-e4-10'] },
      steps: [
        { type: 'read', title: 'The queen on d6', orientation: 'b', text: 'On d6 the queen is central and safe from the Bd2 and Nd5 tricks that hit a5, but it has a new enemy: a knight on b5, which would attack the queen and threaten Nxc7+, forking king and rook. Bf4 and Ne4 can also gain time. Black usually spends one pawn move to take b5 away.', highlights: ['b5', 'c7'], fen: 'rnb1kbnr/ppp1pppp/3q4/8/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 4' },
        {
          type: 'puzzle',
          title: 'Take b5 away',
          orientation: 'b',
          prompt: 'Black to move: take b5 away from the knights without blocking the c6 square.',
          hint: 'Only one pawn controls b5 without standing on c6.',
          explanation: '5...a6! stops Nb5 for good and keeps c6 free for the knight. Black follows with ...Bg4, ...Nc6 and often ...O-O-O, putting pressure on d4. 5...c6 is the solid alternative: it also covers b5, but then the knight goes to d7 instead of c6.',
          fen: 'rnb1kb1r/ppp1pppp/3q1n2/8/3P4/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 2 5',
          solution: ['a7a6'],
          wrong: { c8g4: '5...Bg4 develops, but 6.Nb5 hits the queen and threatens Nxc7+, so the queen must move again.' }
        },
        {
          type: 'line',
          title: 'An active set-up',
          orientation: 'b',
          fen: 'rnb1kb1r/1pp1pppp/p2q1n2/8/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 6',
          moves: [
            { uci: 'g2g3', san: 'g3' },
            { uci: 'c8g4', san: 'Bg4' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'b8c6', san: 'Nc6', note: 'Pressure on d4.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8c8', san: 'O-O-O', note: 'Active pieces; the rook joins the pressure on d4.' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Meet 3.c4',
          orientation: 'b',
          prompt: '2...Nf6 3.c4: Black to move. Which pawn move hits d5 and invites a Caro-Kann Panov?',
          hint: 'Strike at d5 with a pawn from the queenside.',
          explanation: '3...c6! attacks d5 again. After 4.d4 cxd5 the position is a Caro-Kann Panov-Botvinnik. If 4.dxc6 Nxc6, Black is a pawn down but has quick development and good play for it. 3...e6, the Icelandic Gambit, is the sharper way to hit d5.',
          fen: 'rnbqkb1r/ppp1pppp/5n2/3P4/2P5/8/PP1P1PPP/RNBQKBNR b KQkq c3 0 3',
          solution: ['c7c6'],
          wrong: { f6d5: '3...Nxd5?? 4.cxd5 wins a knight: the c4 pawn guards d5.' }
        }
      ]
    },
    {
      id: 'black-vs-e4-18',
      category: 'black-vs-e4',
      side: 'black',
      title: 'Modern Defence: the ...c5 strike',
      level: 'Intermediate',
      minutes: 6,
      objective: 'Hit d4 with ...c5 in the Modern Defence and regain the pawn with ...Qa5+ if White takes on c5.',
      summary: 'The fianchettoed bishop and ...c5 together hit d4, and a queen check wins back the c5 pawn.',
      prerequisites: ['tactics-1'],
      related: { openings: ['b-modern'], gambits: [], lessons: ['black-vs-e4-11'] },
      steps: [
        {
          type: 'read',
          title: 'Bishop first',
          orientation: 'b',
          text: 'In the Modern Defence Black fianchettoes before developing the knights. The g7 bishop already looks at d4 along the long diagonal. A second attacker is ...c5, a typical strike against the centre: if White pushes d5, Black gets a Benoni-type game; if White defends with c3, Black develops calmly. And if White takes on c5?',
          arrows: [['g7', 'd4']],
          highlights: ['d4'],
          fen: 'rnbqk1nr/ppppppbp/6p1/8/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 2 3'
        },
        {
          type: 'puzzle',
          title: 'Check and win back',
          orientation: 'b',
          prompt: 'White took on c5. Black to move: win the pawn back with check.',
          hint: 'Find a queen check that also attacks c5.',
          explanation: '4...Qa5+! checks the king along the a5-e1 diagonal and attacks c5 along the fifth rank. After 5.c3 (or 5.Nc3, 5.Bd2, 5.Nbd2) 5...Qxc5 the pawn is back, and the queen and the g7 bishop press on the dark squares. That is why 4.c3 and 4.d5 are the serious replies.',
          fen: 'rnbqk1nr/pp1pppbp/6p1/2P5/4P3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 4',
          solution: ['d8a5'],
          wrong: { g7b2: '4...Bxb2? 5.Bxb2 and the bishop is lost for a pawn.', d8c7: '4...Qc7 hits c5 but without check, so White has time to defend it with Be3 or b4.' }
        },
        {
          type: 'line',
          title: 'After the check',
          orientation: 'b',
          fen: 'rnb1k1nr/pp1pppbp/6p1/q1P5/4P3/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 5',
          moves: [
            { uci: 'c2c3', san: 'c3' },
            { uci: 'a5c5', san: 'Qxc5', note: 'The pawn is back.' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd7d6', san: 'd6', note: 'Black develops freely; the g7 bishop presses on the dark squares.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-e4-19',
      category: 'black-vs-e4',
      side: 'black',
      title: 'French: free the game with ...c5',
      level: 'Beginner',
      minutes: 6,
      objective: "Use the ...c5 break to challenge d4 and free Black's pieces in the Rubinstein and Tarrasch French.",
      summary: 'When Black has given up or contested the centre, ...c5 challenges d4 and frees the pieces.',
      prerequisites: ['openings-1'],
      related: { openings: ['b-french-rubinstein', 'b-french-vs-tarrasch'], gambits: [], lessons: ['black-vs-e4-4', 'strategy-6'] },
      steps: [
        { type: 'read', title: 'Less space, no weaknesses', orientation: 'b', text: "In the Rubinstein French Black gives up the centre with 3...dxe4 for simple development. The price is space: White has a pawn on d4, and Black's c8 bishop is stuck behind e6. Black's plan is to trade a pair of knights with ...Ngf6 and then free the position with a pawn break that challenges d4.", highlights: ['d4', 'c8'], fen: 'r1bqkbnr/pppn1ppp/4p3/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 1 5' },
        {
          type: 'puzzle',
          title: 'The freeing break',
          orientation: 'b',
          prompt: 'Black to move: which pawn break challenges d4 and frees your position?',
          hint: 'Look for a pawn move that attacks d4 and is protected by one of your pieces.',
          explanation: '7...c5! hits d4 at once, and the f8 bishop defends the pawn. After 8.dxc5 Bxc5 Black is almost fully developed, castles next and plays ...b6 and ...Bb7 to bring the last piece out. The same break frees Black in the Tarrasch, where 3...c5 is played straight away.',
          fen: 'r1bqkb1r/ppp2ppp/4pn2/8/3P4/3B1N2/PPP2PPP/R1BQK2R b KQkq - 1 7',
          solution: ['c7c5'],
          wrong: { e6e5: '7...e5? simply loses a pawn to 8.dxe5 or 8.Nxe5: nothing defends e5.', b7b6: "A useful move later, but it does not challenge White's centre; White keeps a free hand with Qe2 and Bg5." }
        },
        {
          type: 'line',
          title: 'The same idea in the Tarrasch',
          orientation: 'b',
          text: 'Against 3.Nd2, Black plays ...c5 at move three.',
          fen: 'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR b KQkq - 1 3',
          moves: [
            { uci: 'c7c5', san: 'c5', note: 'The same break, played at once.' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'd8d5', san: 'Qxd5' },
            { uci: 'g1f3', san: 'Ngf3' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'd5d6', san: 'Qd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd2b3', san: 'Nb3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'b3d4', san: 'Nbxd4' },
            { uci: 'c6d4', san: 'Nxd4' },
            { uci: 'f3d4', san: 'Nxd4', note: 'A clear, balanced structure with free development.' }
          ]
        }
      ]
    }
  ],
  glossary: [
    { term: 'Fianchetto', definition: 'Developing a bishop on b2, g2, b7 or g7 after moving the knight pawn one square, so it controls a long diagonal.' },
    { term: 'Bishop pair', definition: 'Having both bishops when the opponent has only one or none; a long-term advantage in open positions.' },
    { term: 'Doubled pawns', definition: 'Two pawns of the same colour on one file, usually after a capture. Often weak, but they can open files.' },
    { term: 'Pawn break', definition: "A pawn move that challenges the opponent's pawns to open lines, such as ...d5 or ...f5." },
    { term: 'Lever', definition: 'A pawn that attacks an enemy pawn so that one can capture the other, opening lines; the tool of a pawn break.' },
    { term: 'Backward pawn', definition: 'A pawn that has fallen behind its neighbours and cannot safely advance, so the square in front of it is weak.' },
    { term: 'Blockade', definition: 'Placing a piece, ideally a knight, on the square directly in front of an enemy pawn to stop it.' },
    { term: 'Exchange sacrifice', definition: 'Giving a rook for a bishop or knight in return for positional or attacking compensation.' },
    { term: 'Pawn chain', definition: 'A diagonal line of pawns, each protecting the one in front, such as d4-e5 in the French. It is usually attacked at its base, the rear pawn.' },
    { term: 'Maroczy Bind', definition: 'White pawns on c4 and e4 against a Sicilian, gripping d5 and making the ...b5 and ...d5 breaks hard to achieve.' },
    { term: 'Carlsbad structure', definition: "The pawn structure from a Queen's Gambit or Caro-Kann exchange on d5, where a minority attack with the a- and b-pawns is the typical plan." },
    { term: 'Opposite-side castling', definition: 'Kings castled on different wings. Both sides can push pawns at the enemy king without weakening their own, so games often become races.' }
  ]
}]);
