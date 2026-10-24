/* The Quiet Gambit - Black's repertoire against 1.e4 and the black-vs-e4 lessons.
 * Data only: appends one part to window.QG_PARTS. Checked by tools/check-content.js. */
window.QG_PARTS = (window.QG_PARTS || []).concat([{
  source: 'black-vs-e4',
  repertoire: [
    {
      id: 'b-e5-giuoco-piano',
      side: 'black',
      group: 'vs-e4',
      family: 'Italian Game',
      name: 'Italian Game: Giuoco Piano (3...Bc5)',
      eco: 'C50',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'f8c5'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5',
      difficulty: 'Beginner',
      style: 'Solid',
      summary: "Meet the Italian by mirroring White's bishop on c5, aiming at f2, for a classical and easy-to-learn position.",
      idea: "Black develops naturally and copies White's set-up. Against the slow 4.c3 and 5.d3 plans, Black castles, plays ...d6 and ...a6, and drops the bishop to a7 so it cannot be hit by d4 or b4. Against an early d4, Black trades the bishop with ...Bb4+ and strikes back in the centre with ...d5.",
      plans: {
        white: [
          'Prepare d4 with c3, or play slowly with d3, Re1, Nbd2-f1-g3 and a4',
          'Use the c4 bishop, and later Bg5 or Ng5, against f7'
        ],
        black: [
          'Castle, then play ...d6, ...a6 and ...Ba7 to keep the bishop safe from d4 and b4',
          'Answer an early d4 with ...exd4, ...Bb4+ and ...d5, freeing the position',
          "Consider ...Be6 or ...Na5 to trade off White's strong light-squared bishop"
        ]
      },
      responses: [
        { moves: '4.c3 Nf6 5.d4 exd4 6.cxd4 Bb4+', name: 'Main line with d4', note: 'After 7.Bd2 Bxd2+ 8.Nbxd2 d5 Black is equal (see the lesson). 7.Nc3 is a sharp pawn sacrifice that needs separate study.' },
        { moves: '4.c3 Nf6 5.d3', name: 'Giuoco Pianissimo', note: 'The modern main line. Black plays ...d6, ...a6, ...Ba7, castles and often ...h6 to stop Bg5 or Ng5. A long manoeuvring game follows.' },
        { moves: '4.O-O Nf6 5.d3', name: 'Quiet castling', note: 'Similar plans: ...d6, ...O-O and ...a6. With c3 not yet played, ...Na5 can also be used to trade off the c4 bishop.' },
        { moves: '4.b4', name: 'Evans Gambit', note: 'White offers a pawn for quick development. 4...Bxb4 5.c3 Ba5 is main theory; 4...Bb6 declines safely.' }
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
      transpositions: [
        { to: 'b-e5-two-knights', note: 'The Two Knights with 4.d3 Bc5 reaches the same slow Giuoco Pianissimo positions.' }
      ],
      lessons: ['black-vs-e4-2']
    },
    {
      id: 'b-e5-two-knights',
      side: 'black',
      group: 'vs-e4',
      family: 'Italian Game',
      name: 'Italian Game: Two Knights Defence',
      eco: 'C55',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6',
      difficulty: 'Intermediate',
      style: 'Sharp',
      summary: 'Counter-attack e4 at once with 3...Nf6. Livelier than 3...Bc5, but Black must know how to meet 4.Ng5.',
      idea: 'Instead of mirroring, Black hits the e4 pawn. If White attacks f7 with 4.Ng5, Black blocks with ...d5 and, after exd5, plays ...Na5 to chase the bishop, giving a pawn for quick development and the initiative. Against quiet d3 systems, Black develops with ...Be7 or ...Bc5 and plays a normal Italian middlegame.',
      plans: {
        white: [
          'Attack f7 with Ng5 and win a pawn after 4...d5 5.exd5',
          'Or play quietly with d3, c3, O-O and Re1, steering towards a slow Italian'
        ],
        black: [
          'Against 4.Ng5: ...d5, ...Na5, ...h6 and ...e4, using the lead in development for the pawn',
          'Against d3 systems: ...Be7 or ...Bc5, ...d6 and ...O-O with a solid centre',
          'Against 4.d4: ...exd4 and, after 5.e5, hit back with ...d5'
        ]
      },
      responses: [
        { moves: '4.Ng5 d5 5.exd5 Na5', name: 'Main line', note: 'Black gives a pawn but gains time: 6.Bb5+ c6 7.dxc6 bxc6 8.Be2 h6 9.Nf3 e4 is long-established theory (see the lesson).' },
        { moves: '4.d3', name: 'Quiet Italian', note: 'Black plays 4...Be7 or 4...Bc5 with ...d6 and ...O-O. 4...Bc5 transposes to the Giuoco Pianissimo.' },
        { moves: '4.d4 exd4 5.e5 d5', name: 'Modern Attack', note: 'The counter-strike 5...d5 6.Bb5 Ne4 gives Black active pieces. Against 5.O-O, taking with 5...Nxe4 is a sound choice.' },
        { moves: '4.Nc3 Nxe4 5.Nxe4 d5', name: 'Fork trick', note: 'The pawn fork regains the piece: after 6.Bd3 dxe4 7.Bxe4 Bd6 Black has a free and comfortable game.' }
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
      transpositions: [
        { to: 'b-e5-giuoco-piano', note: '4.d3 Bc5 reaches the Giuoco Pianissimo.' }
      ],
      lessons: ['black-vs-e4-5'],
      gambits: ['bg-two-knights'],
      uncertain: 'The 4.Ng5 main line involves a pawn sacrifice by Black. It is standard Two Knights theory; the gambit library treats 5...Na5 separately as a gambit entry.'
    },
    {
      id: 'b-e5-scotch',
      side: 'black',
      group: 'vs-e4',
      family: 'Scotch Game',
      name: 'Scotch Game: 4...Nf6',
      eco: 'C45',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'd2d4', 'e5d4', 'f3d4', 'g8f6'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.Nxd4 Nf6',
      difficulty: 'Intermediate',
      style: 'Positional',
      summary: 'Meet the Scotch by attacking e4 with 4...Nf6, accepting doubled c-pawns for fast development in the Mieses lines.',
      idea: "After 4...Nf6, White's main reply 5.Nxc6 bxc6 6.e5 gains space and drives the knight, but Black's queen on e7 attacks e5 and ties White's queen to its defence, and the bishop goes to a6 to pin the c4 pawn. Black's doubled pawns support a later ...d5 or ...d6, and the half-open b-file gives long-term play.",
      plans: {
        white: [
          'Play e5 to drive away the f6 knight, then c4 to chase it again',
          'Develop with Qe2, b3 and Bb2 or g3 and Bg2, and target the doubled c-pawns later'
        ],
        black: [
          'Pressure e5 with ...Qe7, ...Nd5 and later ...d6 or ...f6',
          'Develop the bishop to a6 against c4, then castle long or fianchetto with ...g6 and ...Bg7',
          'Use the half-open b-file and the bishop pair'
        ]
      },
      responses: [
        { moves: '5.Nxc6 bxc6 6.e5 Qe7', name: 'Mieses Variation', note: "The main line: 7.Qe2 Nd5 8.c4 Ba6, and Black hits the c4 pawn while White's queen is tied to e5." },
        { moves: '5.Nc3 Bb4', name: 'Scotch Four Knights', note: 'Black pins the knight and threatens e4; after 6.Nxc6 bxc6 7.Bd3 d5 Black has a sound centre.' },
        { moves: '5.Nxc6 bxc6 6.Bd3 d5', name: 'Quiet 6.Bd3', note: 'Black strikes in the centre at once and develops freely; the doubled pawns are not a worry.' }
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
      lessons: []
    },
    {
      id: 'b-ruy-berlin',
      side: 'black',
      group: 'vs-e4',
      family: 'Ruy Lopez',
      name: 'Ruy Lopez: Berlin Defence',
      eco: 'C67',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'g8f6'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6',
      difficulty: 'Advanced',
      style: 'Solid',
      summary: 'The ultra-solid answer to the Ruy Lopez: hit e4 at once and, if White allows it, head for the famous queenless Berlin endgame.',
      idea: "Black attacks e4 instead of asking the bishop a question. After 4.O-O Nxe4 5.d4 Nd6 6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8, queens are off. Black has doubled pawns and a king that cannot castle, but owns the bishop pair and has no real weaknesses; White's kingside pawn majority is hard to turn into a win.",
      plans: {
        white: [
          'Steer for the endgame and use the kingside majority with h3, g4 and f4',
          'Avoid it with 4.d3, keeping pieces on for a slow Italian-style game'
        ],
        black: [
          'In the endgame, bring the king to e8 or c8, play ...h6 and ...Be6 or ...Be7, and use the bishop pair',
          'Against 4.d3: ...Bc5, ...d6, ...O-O and often ...Ne7-g6 or ...a6'
        ]
      },
      responses: [
        { moves: '4.O-O Nxe4 5.d4 Nd6', name: 'Berlin endgame', note: "6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8 is the main line; the bishop pair and a solid structure balance Black's damaged pawns." },
        { moves: '4.O-O Nxe4 5.Re1 Nd6', name: '5.Re1', note: '6.Nxe5 Be7 7.Bf1 Nxe5 8.Rxe5 O-O: Black has a sound, rather drawish position and develops with ...Bf6 and ...Re8.' },
        { moves: '4.d3 Bc5', name: 'Anti-Berlin 4.d3', note: 'The usual way to keep pieces on. Black plays ...d6, ...O-O and ...Ne7-g6 or ...a6, with a solid Italian-type position.' },
        { moves: '4.Nc3 Bb4', name: 'Spanish Four Knights', note: 'Symmetrical development with ...O-O and ...d6 is simple and solid; 4...Nd4 is a sharper, well-respected alternative.' }
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
      lessons: []
    },
    {
      id: 'b-ruy-closed',
      side: 'black',
      group: 'vs-e4',
      family: 'Ruy Lopez',
      name: 'Ruy Lopez: Closed Defence (Breyer and Chigorin plans)',
      eco: 'C84',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'a7a6', 'b5a4', 'g8f6', 'e1g1', 'f8e7'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7',
      difficulty: 'Advanced',
      style: 'Positional',
      summary: 'The classical main line: Black keeps a sturdy pawn on e5 and fights a long, rich manoeuvring battle.',
      idea: "Black asks the bishop a question with ...a6, develops ...Nf6 and ...Be7, then gains queenside space with ...b5 and supports e5 with ...d6. After White's c3, h3 and d4, Black regroups: the Breyer reroutes the knight ...Nb8-d7 to support e5, while the Chigorin plays ...Na5 and ...c5. Both keep the e5 strongpoint and aim for queenside play.",
      plans: {
        white: [
          'Build the ideal centre with c3, h3 and d4, then manoeuvre Nbd2-f1-g3',
          "Attack on the kingside, or play a4 to probe Black's queenside pawns"
        ],
        black: [
          'Hold e5 with ...d6, ...Re8, ...Bf8 and, in the Breyer, ...Nbd7',
          'Gain queenside space with ...b5 and ...c5, via ...Na5 (Chigorin) or ...Nb8-d7 (Breyer)',
          'If White pushes d4 before c3, look for ...Nxd4 and the ...c5-c4 trap against the b3 bishop'
        ]
      },
      responses: [
        { moves: '6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3', name: 'Main line', note: 'Now 9...Nb8 is the Breyer, 9...Na5 10.Bc2 c5 the Chigorin, and 9...Bb7 the Zaitsev. Each keeps e5 and prepares queenside play.' },
        { moves: '6.Bxc6 dxc6', name: 'Delayed Exchange', note: 'Black has the bishop pair. 7.Nxe5 Qd4 wins the pawn back; after 7.d3, ...Nd7 and ...O-O give a solid game.' },
        { moves: '6.d3 b5 7.Bb3 d6', name: 'Slow 6.d3', note: 'White avoids the main lines. Black castles and plays ...Na5 or ...Bb7, keeping the e5 pawn solid.' }
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
      lessons: ['black-vs-e4-7']
    },
    {
      id: 'b-petroff',
      side: 'black',
      group: 'vs-e4',
      family: 'Petroff Defence',
      name: 'Petroff Defence',
      eco: 'C42',
      defining: ['e2e4', 'e7e5', 'g1f3', 'g8f6'],
      moves: '1.e4 e5 2.Nf3 Nf6',
      difficulty: 'Intermediate',
      style: 'Solid',
      summary: 'Counter-attack e4 instead of defending e5. Famously solid, often symmetrical, and very hard for White to crack.',
      idea: "Black copies the knight move and accepts open, symmetrical positions. After 3.Nxe5 d6 4.Nf3 Nxe4, Black's knight sits actively in the centre, supported by ...d5. The plan is quick development: ...Be7 or ...Bd6, ...Nc6, castling, and ...Bg4 or ...Bf5 to contest the centre.",
      plans: {
        white: [
          'Use the extra tempo: c4 to undermine the e4 knight, then Re1 and Nc3',
          'In the 5.Nc3 lines, castle long and attack the king'
        ],
        black: [
          'Play 3...d6 before taking on e4: copying with 3...Nxe4 is a mistake',
          'Support the e4 knight with ...d5, then develop ...Be7, ...Nc6, ...O-O and ...Bg4',
          'Against 5.Nc3, exchange knights, castle short and keep the position compact'
        ]
      },
      responses: [
        { moves: '3.Nxe5 d6 4.Nf3 Nxe4 5.d4', name: 'Classical main line', note: "5...d5 6.Bd3 Nc6 (or 6...Bd6) 7.O-O Be7: Black's centralised knight and quick development hold the balance." },
        { moves: '3.Nxe5 d6 4.Nf3 Nxe4 5.Nc3', name: '5.Nc3', note: '5...Nxc3 6.dxc3 Be7: White often castles long and attacks. Black castles short, develops ...Nc6 or ...Nd7 and keeps things compact.' },
        { moves: '3.d4 Nxe4 4.Bd3 d5', name: 'Steinitz 3.d4', note: "Black's knight is strongly placed; after 5.Nxe5 Nd7 Black challenges the e5 knight and develops normally." },
        { moves: '3.Nc3 Nc6', name: 'Four Knights', note: "Transposes to the Four Knights Game, where Black's ...Bb4 lines are solid." }
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
      lessons: ['black-vs-e4-1']
    },
    {
      id: 'b-sicilian-najdorf',
      side: 'black',
      group: 'vs-e4',
      family: 'Sicilian Defence',
      name: 'Sicilian: Najdorf Variation',
      eco: 'B90',
      defining: ['e2e4', 'c7c5', 'g1f3', 'd7d6', 'd2d4', 'c5d4', 'f3d4', 'g8f6', 'b1c3', 'a7a6'],
      moves: '1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6',
      difficulty: 'Advanced',
      style: 'Sharp',
      summary: 'The most famous Sicilian: a small pawn move that keeps every option open and leads to rich, double-edged play.',
      idea: '5...a6 stops Nb5 and Bb5 and prepares ...e5 or ...e6 and ...b5. Against the English Attack, Black often plays ...e5, gaining space and kicking the d4 knight, then fights for the d5 square with ...Be6 and ...Nbd7. Black accepts a backward d6 pawn for active pieces and queenside counterplay along the c-file.',
      plans: {
        white: [
          'English Attack: Be3, f3, Qd2, O-O-O and a g4-g5 pawn storm',
          'Classical: Be2, O-O and f4, or the sharp 6.Bg5 followed by f4'
        ],
        black: [
          'Choose a structure: ...e5 (space and control of d5) or ...e6 (flexible, Scheveningen-type)',
          'Counter-attack with ...b5-b4, ...Rc8 and pressure on the c-file',
          'Control d5 with ...Be6 and ...Nbd7; once ...d5 can be played safely, Black is usually fine'
        ]
      },
      responses: [
        { moves: '6.Be3 e5 7.Nb3', name: 'English Attack', note: '7...Be6 8.f3 Be7 9.Qd2 O-O 10.O-O-O Nbd7: opposite-side castling and a race. 6...Ng4 and 6...e6 are good alternatives.' },
        { moves: '6.Bg5 e6', name: '6.Bg5', note: 'The sharpest test. After 7.f4, Black chooses between ...Be7, ...Qc7 and the Poisoned Pawn ...Qb6; each needs careful study.' },
        { moves: '6.Be2 e5 7.Nb3 Be7', name: 'Opocensky 6.Be2', note: 'Calm: Black castles, plays ...Be6 and fights for d5. The d6 pawn is backward but well defended.' },
        { moves: '6.Bc4 e6', name: 'Fischer-Sozin', note: '6...e6 blunts the bishop; Black follows with ...b5 or ...Nbd7-c5, and must watch for sacrifices on e6.' }
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
      transpositions: [
        { to: 'b-sicilian-scheveningen', note: '6.Be2 e6 or 6.Be3 e6 leads to Scheveningen structures with pawns on d6 and e6.' }
      ],
      lessons: []
    },
    {
      id: 'b-sicilian-classical',
      side: 'black',
      group: 'vs-e4',
      family: 'Sicilian Defence',
      name: 'Sicilian: Classical Variation (vs the Richter-Rauzer)',
      eco: 'B60',
      defining: ['e2e4', 'c7c5', 'g1f3', 'b8c6', 'd2d4', 'c5d4', 'f3d4', 'g8f6', 'b1c3', 'd7d6'],
      moves: '1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 d6',
      difficulty: 'Intermediate',
      style: 'Flexible',
      summary: 'A natural Sicilian: knights out first, then ...d6. Flexible, sound and less theory-heavy than the Najdorf.',
      idea: "Black develops ...Nc6 and ...Nf6 before deciding on a structure. The main test is the Richter-Rauzer, 6.Bg5, which threatens to double Black's pawns with Bxf6. Black answers with ...e6, ...a6 and ...Bd7, keeping the king in the centre for a while and countering with ...b5 when White castles long.",
      plans: {
        white: [
          'Richter-Rauzer: Bg5, Qd2 and O-O-O, then f4 and pressure in the centre',
          'Sozin: Bc4 aiming at e6 and f7, often with Be3, Qe2 and O-O-O'
        ],
        black: [
          'Against Bg5: ...e6, ...a6, ...Bd7 and ...b5, with ...Be7 and often ...h6 to question the bishop',
          'Against Bc4: ...Qb6 to unsettle the d4 knight, or ...e6 with ...Be7 and ...a6',
          'Exchange on d4 with ...Nxd4 at a good moment to ease the position'
        ]
      },
      responses: [
        { moves: '6.Bg5 e6 7.Qd2', name: 'Richter-Rauzer', note: '7...a6 8.O-O-O Bd7 9.f4 b5 (or 8...h6): Black accepts some risk in the centre for queenside counterplay.' },
        { moves: '6.Bc4 Qb6', name: 'Sozin', note: "The queen hits d4 and disturbs White's set-up (see the lesson). 6...e6 is the solid alternative. Avoid 6...g6?, which walks into a known trap." },
        { moves: '6.Be2 e5', name: 'Quiet 6.Be2', note: '6...e5 (the Boleslavsky), 6...e6 (a Scheveningen) and 6...g6 (a Dragon) are all good choices.' }
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
      family: 'Sicilian Defence',
      name: 'Sicilian: Dragon Variation',
      eco: 'B70',
      defining: ['e2e4', 'c7c5', 'g1f3', 'd7d6', 'd2d4', 'c5d4', 'f3d4', 'g8f6', 'b1c3', 'g7g6'],
      moves: '1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6',
      difficulty: 'Advanced',
      style: 'Sharp',
      summary: 'Fianchetto the bishop on g7, where it bites along the long diagonal. Aggressive, double-edged and theory-heavy against the Yugoslav Attack.',
      idea: "The g7 bishop rakes the long diagonal towards White's queenside. Against the Yugoslav Attack (Be3, f3, Qd2, O-O-O) the game is a race: White storms with h4-h5, while Black counter-attacks down the c-file with ...Rc8, ...Ne5-c4 and sometimes the exchange sacrifice ...Rxc3. If White castles long too early, a timely ...d5 frees Black's game.",
      plans: {
        white: [
          'Yugoslav Attack: Be3, f3, Qd2, O-O-O, then h4-h5 and Bh6 to remove the dragon bishop',
          'Quieter: Be2, O-O and f4, or a g3 fianchetto'
        ],
        black: [
          'Castle short and counter-attack on the queenside with ...Rc8, ...Ne5-c4 and ...b5',
          'Strike with ...d5 when White castles long before playing Bc4',
          "Be ready to give the exchange on c3 to break up the pawns in front of White's king"
        ]
      },
      responses: [
        { moves: '6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6 9.Bc4', name: 'Yugoslav with 9.Bc4', note: '9...Bd7 10.O-O-O Rc8 11.Bb3 Ne5: the main battleground, with races on opposite wings.' },
        { moves: '6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6 9.O-O-O d5', name: 'Yugoslav with 9.O-O-O', note: "The freeing break: after 10.exd5 Nxd5 11.Nxc6 bxc6 Black's pieces become active (see the lesson)." },
        { moves: '6.Be2 Bg7 7.O-O O-O', name: 'Classical', note: 'A calmer game: Black plays ...Nc6, ...Be6 or ...a6 and ...b5, and aims for ...d5 later.' }
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
      transpositions: [
        { to: 'b-sicilian-accelerated-dragon', note: 'The Accelerated Dragon reaches similar fianchetto structures but keeps ...d7-d5 in one move as an option.' },
        { to: 'b-sicilian-classical', note: 'The Classical with 6.Be2 g6 reaches a Dragon with ...Nc6 already played.' }
      ],
      lessons: ['black-vs-e4-6', 'black-vs-e4-8']
    },
    {
      id: 'b-sicilian-scheveningen',
      side: 'black',
      group: 'vs-e4',
      family: 'Sicilian Defence',
      name: 'Sicilian: Scheveningen Variation',
      eco: 'B80',
      defining: ['e2e4', 'c7c5', 'g1f3', 'd7d6', 'd2d4', 'c5d4', 'f3d4', 'g8f6', 'b1c3', 'e7e6'],
      moves: '1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e6',
      difficulty: 'Intermediate',
      style: 'Flexible',
      summary: 'A small, compact centre with pawns on d6 and e6. Solid but resilient, with plenty of counter-attacking chances.',
      idea: "Black's pawns on d6 and e6 control the key squares c5, d5, e5 and f5. Black develops behind them with ...Be7, ...O-O, ...a6, ...Qc7 and ...Nc6 or ...Nbd7, then counters with ...b5 on the queenside or the freeing ...e5 or ...d5. The main danger is the Keres Attack, 6.g4, which must be met precisely.",
      plans: {
        white: [
          'Keres Attack: g4-g5 to drive the f6 knight away and storm the kingside',
          'Classical set-up: Be2, O-O, f4, Kh1 and a4, then a kingside attack with Qe1-g3'
        ],
        black: [
          'Develop compactly: ...Be7, ...O-O, ...a6, ...Qc7 and ...Nc6',
          'Counter in the centre with ...e5 or ...d5 at the right moment, or on the queenside with ...b5',
          'Against 6.g4, slow the pawn with ...h6, or develop fast with ...Nc6 and ...a6'
        ]
      },
      responses: [
        { moves: '6.g4 h6', name: 'Keres Attack', note: '...h6 makes g5 harder to achieve; after 7.h4 Nc6 8.Rg1 Black chooses between ...h5 and ...d5. This is the critical test.' },
        { moves: '6.Be2 a6 7.O-O Be7 8.f4', name: 'Classical', note: 'The main line: ...O-O, ...Qc7 and ...Nc6. A slow, rich game where Black waits for the right moment for ...e5 or ...d5.' },
        { moves: '6.Be3 a6 7.f3', name: 'English Attack', note: 'Black plays ...b5, ...Bb7 and ...Nbd7, using the time White spends on f3 and g4 for queenside play.' }
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
      transpositions: [
        { to: 'b-sicilian-najdorf', note: 'Najdorf players reach this structure with 5...a6 and a later ...e6.' },
        { to: 'b-sicilian-taimanov', note: 'Taimanov lines with ...d6 and ...Nf6 often become Scheveningens.' }
      ],
      lessons: [],
      uncertain: 'The Keres Attack is summarised briefly; several replies (6...h6, 6...a6, 6...Nc6) are respected, and current theory shifts between them.'
    },
    {
      id: 'b-sicilian-taimanov',
      side: 'black',
      group: 'vs-e4',
      family: 'Sicilian Defence',
      name: 'Sicilian: Taimanov Variation',
      eco: 'B48',
      defining: ['e2e4', 'c7c5', 'g1f3', 'e7e6', 'd2d4', 'c5d4', 'f3d4', 'b8c6', 'b1c3', 'd8c7'],
      moves: '1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nc6 5.Nc3 Qc7',
      difficulty: 'Intermediate',
      style: 'Flexible',
      summary: 'A flexible Sicilian: ...e6 and ...Nc6 keep the d-pawn at home, and the queen on c7 controls e5.',
      idea: "Black delays ...d6 and ...Nf6, so the Keres Attack and many Najdorf weapons are ruled out. The queen on c7 watches e5, and the dark-squared bishop can become active on b4 or c5. Black typically plays ...a6, ...Nf6 and ...Bb4 or ...Be7, choosing ...d6 or ...d5 later depending on White's set-up.",
      plans: {
        white: [
          'English Attack: Be3, Qd2, O-O-O and f3, then a kingside pawn storm',
          'Quieter set-ups with Be2 and O-O, or g3 and Bg2'
        ],
        black: [
          'Develop with ...a6, ...Nf6 and ...Bb4 to pressure e4',
          'Use ...Ne5 and ...b5 for queenside play against long castling',
          'Switch to a Scheveningen with ...d6 and ...Be7 when convenient'
        ]
      },
      responses: [
        { moves: '6.Be3 a6 7.Qd2 Nf6 8.O-O-O Bb4', name: 'English Attack', note: 'Black pins the knight and pressures e4; after 9.f3 Ne5 10.Nb3 b5 both sides race.' },
        { moves: '6.Be2 a6 7.O-O Nf6 8.Be3', name: 'Classical 6.Be2', note: '8...Bb4 9.Na4 Be7 is the main line: Black castles and later chooses between ...d6 and ...b5. 8.Kh1 is the other main move for White.' },
        { moves: '6.g3 a6 7.Bg2 Nf6 8.O-O Nxd4 9.Qxd4 Bc5', name: 'Fianchetto', note: 'Black develops with tempo on the queen and continues ...d6 and ...h6 or ...O-O.' }
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
      transpositions: [
        { to: 'b-sicilian-scheveningen', note: 'With ...d6 and ...Nf6 the Taimanov often turns into a Scheveningen.' }
      ],
      lessons: []
    },
    {
      id: 'b-sicilian-sveshnikov',
      side: 'black',
      group: 'vs-e4',
      family: 'Sicilian Defence',
      name: 'Sicilian: Sveshnikov Variation',
      eco: 'B33',
      defining: ['e2e4', 'c7c5', 'g1f3', 'b8c6', 'd2d4', 'c5d4', 'f3d4', 'g8f6', 'b1c3', 'e7e5'],
      moves: '1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5',
      difficulty: 'Advanced',
      style: 'Sharp',
      summary: 'Black kicks the knight with ...e5 at once, accepting a hole on d5 for activity, the bishop pair and dynamic pawns.',
      idea: "After 6.Ndb5 d6 7.Bg5 a6 8.Na3 b5, Black gains space and time, and White's knight on a3 is offside. Black often accepts doubled f-pawns after Bxf6 gxf6, then plays ...f5 to break up White's centre. The d5 square is weak, but Black's bishops and active pawns give rich counterplay.",
      plans: {
        white: [
          'Occupy d5 with a knight, then play c3 and Nc2-e3 to reinforce it',
          "Open the queenside with a4 or c4 against Black's advanced pawns"
        ],
        black: [
          'Break with ...f5 to undermine e4 and open lines for the bishops',
          'Use the bishop pair: ...Bg7, ...Be6 and pressure on the long diagonal',
          'Stay active: piece play compensates for the hole on d5'
        ]
      },
      responses: [
        { moves: '6.Ndb5 d6 7.Bg5 a6 8.Na3 b5', name: 'Main line', note: 'Then 9.Bxf6 gxf6 10.Nd5 f5 or 9.Nd5 Be7 10.Bxf6 Bxf6 11.c3; both are deeply analysed, and Black is fine with accurate play.' },
        { moves: '6.Ndb5 d6 7.Nd5 Nxd5 8.exd5', name: '7.Nd5', note: "8...Nb8 (or 8...Ne7) and ...a6: White gains space, but Black's position is solid." },
        { moves: '6.Nb3', name: 'Quiet retreats', note: 'Retreats such as 6.Nb3, 6.Nf3 or 6.Nde2 are harmless: Black develops with ...Bb4 or ...Be7, castles and aims for ...d5.' }
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
      lessons: ['black-vs-e4-9']
    },
    {
      id: 'b-sicilian-accelerated-dragon',
      side: 'black',
      group: 'vs-e4',
      family: 'Sicilian Defence',
      name: 'Sicilian: Accelerated Dragon',
      eco: 'B34',
      defining: ['e2e4', 'c7c5', 'g1f3', 'b8c6', 'd2d4', 'c5d4', 'f3d4', 'g7g6'],
      moves: '1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 g6',
      difficulty: 'Intermediate',
      style: 'Positional',
      summary: 'Fianchetto before ...d6: Black sidesteps the Yugoslav main lines but must be ready for the Maroczy Bind.',
      idea: 'By delaying ...d6, Black keeps the option of ...d7-d5 in one move, which blunts the aggressive f3, Qd2 and O-O-O plan. The main test is 5.c4, the Maroczy Bind, where White grips d5. Black then plays patiently: ...Nxd4, ...Bd7-c6 or ...Be6, ...a5 and ...Qa5 or ...Qb6, aiming for the ...b5 or ...f5 breaks.',
      plans: {
        white: [
          "Maroczy Bind: pawns on c4 and e4 clamp d5 and restrict Black's breaks",
          'Classical: Nc3, Be3, Bc4 and Bb3, aiming at f7 and d5'
        ],
        black: [
          'Against the Maroczy: trade knights with ...Nxd4, develop ...Bd7-c6 or ...Be6, and prepare ...b5 or ...f5',
          'Against Bc4 systems: castle, then ...d6 and ...Bd7, reaching Dragon-type positions',
          'Keep the ...d5 break available while the d-pawn is still on d7'
        ]
      },
      responses: [
        { moves: '5.c4 Bg7 6.Be3 Nf6 7.Nc3', name: 'Maroczy Bind', note: 'A positional battle: Black castles, plays ...d6 and ...Bd7, trades a pair of knights on d4 and waits for ...b5 or ...f5.' },
        { moves: '5.Nc3 Bg7 6.Be3 Nf6 7.Bc4', name: 'Classical', note: '7...O-O 8.Bb3 (stopping the ...Nxe4 and ...d5 fork trick), and now 8...a5, threatening ...a4, is the independent main line; 8...d6 9.f3 transposes to a Yugoslav Dragon.' }
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
      transpositions: [
        { to: 'b-sicilian-dragon', note: 'After ...d6 against Nc3, Be3 and Bc4 set-ups, Dragon-type positions arise.' }
      ],
      lessons: [],
      uncertain: '8...a5 is established theory, but its details keep changing; check a current source for the sharp 9.f3 d5 lines.'
    },
    {
      id: 'b-sicilian-vs-alapin',
      side: 'black',
      group: 'vs-e4',
      family: 'Sicilian Defence',
      name: 'Sicilian: Black vs the Alapin (2.c3 Nf6)',
      eco: 'B22',
      defining: ['e2e4', 'c7c5', 'c2c3', 'g8f6'],
      moves: '1.e4 c5 2.c3 Nf6',
      difficulty: 'Intermediate',
      style: 'Flexible',
      summary: 'Answer 2.c3 by hitting e4 with 2...Nf6: the knight goes to d5 and Black gets quick, free development.',
      idea: "2.c3 prepares d4 to build a full centre. 2...Nf6 attacks e4 at once; after 3.e5 Nd5 the knight is centralised, and the pawn on c3 takes the natural square of White's queen's knight. Black exchanges on d4, plays ...e6, ...d6 and ...Nc6 to attack e5, and often reaches an isolated d-pawn position.",
      plans: {
        white: [
          'Push e5 and build a centre with d4, keeping the e5 pawn as long as possible',
          'Develop with Nf3, Bc4 and O-O; an isolated d-pawn often arises after exchanges'
        ],
        black: [
          'Exchange on d4, hit e5 with ...d6, and develop ...Nc6, ...Be7 and ...O-O',
          'Against an isolated d-pawn, blockade d5 and trade pieces'
        ]
      },
      responses: [
        { moves: '3.e5 Nd5 4.d4 cxd4 5.Nf3', name: 'Main line', note: '5...e6 6.cxd4 d6 is a solid set-up, and 5...Nc6 is also popular. Black aims to break up e5 and develop quickly.' },
        { moves: '3.e5 Nd5 4.d4 cxd4 5.cxd4', name: '5.cxd4', note: '5...d6 6.Nf3 Nc6 (or 6...e6): Black attacks e5 and develops quickly against the broad centre.' },
        { moves: '3.e5 Nd5 4.d4 cxd4 5.Qxd4 e6', name: '5.Qxd4', note: 'Black develops ...Nc6 with tempo on the queen, then ...d6 to hit e5.' },
        { moves: '3.e5 Nd5 4.Bc4 Nb6 5.Bb3 c4 6.Bc2', name: '4.Bc4', note: 'Black gains queenside space with tempo, then hits e5 with ...Qc7 or ...d6.' }
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
      lessons: []
    },
    {
      id: 'b-sicilian-vs-closed',
      side: 'black',
      group: 'vs-e4',
      family: 'Sicilian Defence',
      name: 'Sicilian: Black vs the Closed (2.Nc3 Nc6)',
      eco: 'B23',
      defining: ['e2e4', 'c7c5', 'b1c3', 'b8c6'],
      moves: '1.e4 c5 2.Nc3 Nc6',
      difficulty: 'Intermediate',
      style: 'Positional',
      summary: 'Against 2.Nc3 and the closed g3 set-up, mirror the fianchetto and expand on the queenside.',
      idea: 'White aims for a slow kingside attack with g3, Bg2, d3, f4 and Nf3 or Nge2. Black fianchettoes with ...g6 and ...Bg7, puts pawns on d6 and e6 (or e5), and expands on the queenside with ...Rb8 and ...b5-b4. Against the Grand Prix set-up with f4 and Bc4, ...e6 blunts the bishop and ...d5 follows.',
      plans: {
        white: [
          'Closed: g3, Bg2, d3, Be3, Qd2 and f4-f5, with a kingside attack',
          'Grand Prix: f4, Nf3 and Bc4 or Bb5, aiming for f5'
        ],
        black: [
          'Fianchetto with ...g6 and ...Bg7, then ...d6, ...e6 and ...Nge7',
          'Expand with ...Rb8, ...b5-b4 and ...Nd4 to gain queenside space',
          'Against Bc4, play ...e6 and ...d5 to blunt the bishop'
        ]
      },
      responses: [
        { moves: '3.g3 g6 4.Bg2 Bg7 5.d3 d6', name: 'Closed main line', note: '6.Be3 e6 (or ...e5) 7.Qd2 Rb8 8.Nge2 Nd4: Black gains queenside space while White builds up on the kingside.' },
        { moves: '3.f4 g6 4.Nf3 Bg7', name: 'Grand Prix', note: 'After 5.Bc4, 5...e6 blunts the bishop, then ...Nge7 and ...d5. Watch for the pawn sacrifice 6.f5: 6...Nge7 7.fxe6 dxe6 is a sound reply. After 5.Bb5, 5...Nd4 is good.' },
        { moves: '3.Nf3 e6 4.d4 cxd4 5.Nxd4', name: '3.Nf3', note: 'Black can steer into an open Sicilian, here a Taimanov-type position; 3...d6 or 3...g6 with 4.d4 cxd4 are also possible.' },
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
      lessons: []
    },
    {
      id: 'b-french-winawer',
      side: 'black',
      group: 'vs-e4',
      family: 'French Defence',
      name: 'French: Winawer Variation',
      eco: 'C18',
      defining: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1c3', 'f8b4'],
      moves: '1.e4 e6 2.d4 d5 3.Nc3 Bb4',
      difficulty: 'Advanced',
      style: 'Sharp',
      summary: "Pin the c3 knight and pressure e4. Unbalanced and combative: Black often gives up the dark bishop to damage White's pawns.",
      idea: "3...Bb4 pins the knight that defends e4. After 4.e5 c5 5.a3 Bxc3+ 6.bxc3, White has the bishop pair and kingside chances, while Black has the better structure and targets the doubled c-pawns with ...Qa5, ...Nbc6 and ...Bd7. Black must look after the dark squares around the king, especially g7, once White's queen comes to g4.",
      plans: {
        white: [
          'Attack the weakened dark squares with Qg4, h4-h5, or Nf3 with a4 and Ba3',
          'Use the bishop pair and open lines with dxc5 or a timely f4-f5'
        ],
        black: [
          'Hit d4 and the c3 pawn with ...c5, ...Ne7, ...Nbc6, ...Qa5 and ...Bd7',
          "Close the queenside with ...c4 to fix White's pawns, then play ...f6 or attack the a3 and c3 pawns",
          'Against Qg4, either castle and defend with ...Ng6, or give up g7 for counterplay in the Poisoned Pawn line'
        ]
      },
      responses: [
        { moves: '4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7', name: 'Main line', note: '7.Qg4, attacking g7, and 7.Nf3 are the main tries. Black answers 7.Qg4 with 7...O-O or the sharp 7...Qc7.' },
        { moves: '4.exd5 exd5', name: 'Exchange', note: 'Symmetrical and quiet. Black develops ...Nf6 or ...Ne7, castles and is comfortable.' },
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
      lessons: [],
      uncertain: 'After 7.Qg4, theory has shifted over the years between 7...O-O, 7...Qc7 and 7...Kf8; the 7...O-O line is given as one sound choice, not the only one.'
    },
    {
      id: 'b-french-rubinstein',
      side: 'black',
      group: 'vs-e4',
      family: 'French Defence',
      name: 'French: Rubinstein Variation',
      eco: 'C10',
      defining: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1c3', 'd5e4', 'c3e4', 'b8d7'],
      moves: '1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7',
      difficulty: 'Intermediate',
      style: 'Solid',
      summary: 'Give up the centre with 3...dxe4 for simple, solid development and the freeing ...c5 break.',
      idea: "Black exchanges the d5 pawn for e4, prepares ...Ngf6 with ...Nd7 so that a knight can recapture on f6, and then plays ...c5 to challenge d4. White gets more space and easier development, but Black's position has no weaknesses. The c8 bishop is developed later, often with ...b6 and ...Bb7.",
      plans: {
        white: [
          'Use the extra space: Nf3, Bd3, Qe2, Bg5 and often O-O-O',
          'After dxc5, use the queenside majority and pressure on the d-file'
        ],
        black: [
          'Play ...Nd7 and ...Ngf6 to challenge the e4 knight, then ...c5',
          'Develop the c8 bishop via b7 or d7 and castle short',
          "Trade pieces: Black's sound structure holds well in endgames"
        ]
      },
      responses: [
        { moves: '5.Nf3 Ngf6 6.Nxf6+ Nxf6', name: 'Main line', note: '7.Bd3 c5 or 7.c3 c5 (7...Be7 is also fine): Black frees the game with ...c5 and is close to equal.' },
        { moves: '5.Nf3 Ngf6 6.Bg5', name: '6.Bg5', note: '6...h6 (if 7.Bxf6 Nxf6, Black has the bishop pair) or the solid 6...Be7 7.Nxf6+ Bxf6. Either way Black castles and frees the game with ...c5.' },
        { moves: '5.Nf3 Ngf6 6.Bd3 Nxe4 7.Bxe4 Nf6', name: '6.Bd3', note: 'The bishop is hit at once; after 8.Bd3 c5 Black has a sound, active position.' }
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
      transpositions: [
        { to: 'b-french-vs-tarrasch', note: 'Against 3.Nd2, 3...dxe4 4.Nxe4 Nd7 reaches the Rubinstein too.' }
      ],
      lessons: []
    },
    {
      id: 'b-french-vs-tarrasch',
      side: 'black',
      group: 'vs-e4',
      family: 'French Defence',
      name: 'French: Black vs the Tarrasch (3...c5)',
      eco: 'C07',
      defining: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1d2', 'c7c5'],
      moves: '1.e4 e6 2.d4 d5 3.Nd2 c5',
      difficulty: 'Intermediate',
      style: 'Positional',
      summary: 'Meet 3.Nd2 by striking at d4 with 3...c5, often accepting an isolated d-pawn for free piece play.',
      idea: '3.Nd2 avoids the Winawer pin. 3...c5 hits d4 at once. After 4.exd5, Black chooses between 4...Qxd5, keeping a healthy structure and centralising the queen, and 4...exd5, accepting an isolated d-pawn for active pieces. Both are well-established.',
      plans: {
        white: [
          'Gain time on the black queen with Ngf3, Bc4 and Nb3',
          'Against an isolated d-pawn, blockade d4 and trade pieces'
        ],
        black: [
          'After 4...Qxd5, develop quickly with ...cxd4, ...Qd6, ...Nf6, ...Nc6 and ...Be7',
          'With an isolated pawn, use the open lines: ...Nc6, ...Bd6, ...Nge7 and ...O-O'
        ]
      },
      responses: [
        { moves: '4.exd5 Qxd5 5.Ngf3 cxd4 6.Bc4', name: '4...Qxd5 main line', note: "6...Qd6 7.O-O Nf6 8.Nb3 Nc6 9.Nbxd4 Nxd4 10.Nxd4 a6: a clear, symmetrical structure where Black's position is sound." },
        { moves: '4.exd5 exd5 5.Ngf3 Nc6', name: 'Isolated pawn line', note: "After 6.Bb5 Bd6 7.dxc5 Bxc5 8.O-O Nge7, Black's pieces are active and the isolated pawn is well defended." },
        { moves: '4.Ngf3 cxd4 5.exd5 Qxd5 6.Bc4', name: '4.Ngf3', note: 'Transposes to the 4...Qxd5 line.' }
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
      transpositions: [
        { to: 'b-french-rubinstein', note: '3...dxe4 against 3.Nd2 transposes to the Rubinstein.' }
      ],
      lessons: []
    },
    {
      id: 'b-french-advance',
      side: 'black',
      group: 'vs-e4',
      family: 'French Defence',
      name: 'French: Black vs the Advance (3.e5)',
      eco: 'C02',
      defining: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'e4e5', 'c7c5'],
      moves: '1.e4 e6 2.d4 d5 3.e5 c5',
      difficulty: 'Beginner',
      style: 'Positional',
      summary: "Against 3.e5, hit the base of White's pawn chain with ...c5, then pile up on d4 with ...Nc6 and ...Qb6.",
      idea: "White's chain d4-e5 cramps Black's kingside, so Black attacks its base. ...c5, ...Nc6 and ...Qb6 put pressure on d4, and a knight on f5 (via e7 or h6) adds more. Later ...f6 hits the head of the chain. Before grabbing d4, Black must check for tricks on the b5-e8 diagonal.",
      plans: {
        white: [
          'Defend d4 with c3, Nf3 and Be2 or Bd3, keeping the space-gaining e5 pawn',
          'Attack on the kingside, helped by the cramping e5 pawn'
        ],
        black: [
          'Attack d4 with ...c5, ...Nc6, ...Qb6, ...cxd4 and a knight on f5',
          'Undermine e5 later with ...f6',
          'Develop the c8 bishop with ...Bd7 and use the open c-file'
        ]
      },
      responses: [
        { moves: '4.c3 Nc6 5.Nf3 Qb6', name: 'Main line', note: '6.a3, preparing b4, is met by 6...c4 or 6...Nh6; after 6.Be2, ...cxd4 and ...Nh6-f5 keep up the pressure on d4.' },
        { moves: '4.c3 Nc6 5.Nf3 Qb6 6.Bd3 cxd4 7.cxd4 Bd7', name: 'Milner-Barry set-up', note: '7...Bd7 is the safe path: taking twice on d4 runs into the Bb5+ trick (see the lesson).' },
        { moves: '4.dxc5 Bxc5', name: '4.dxc5', note: 'Black regains the pawn with development, then attacks e5 with ...Nc6, ...Qc7 or ...f6.' }
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
      lessons: ['black-vs-e4-4']
    },
    {
      id: 'b-caro-kann-classical',
      side: 'black',
      group: 'vs-e4',
      family: 'Caro-Kann Defence',
      name: 'Caro-Kann: Classical Variation (4...Bf5)',
      eco: 'B18',
      defining: ['e2e4', 'c7c6', 'd2d4', 'd7d5', 'b1c3', 'd5e4', 'c3e4', 'c8f5'],
      moves: '1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Bf5',
      difficulty: 'Beginner',
      style: 'Solid',
      summary: 'Develop the light-squared bishop actively before ...e6. Healthy pawns and a reliable, easy-to-follow plan.',
      idea: 'Black takes on e4 and develops the bishop to f5 before closing it in with ...e6. White gains time chasing it with Ng3 and h4-h5, but the bishop survives on h7 and is exchanged on d3. Black then plays ...Nd7, ...Ngf6, ...e6 and ...Be7 or ...Qc7, often castling long, and gets a sound, slightly passive but very solid game.',
      plans: {
        white: [
          'Chase the bishop with Ng3 and h4-h5, gaining kingside space',
          'Castle long, then press in the centre with Ne5 or on the kingside'
        ],
        black: [
          'Meet h4 with ...h6, retreat ...Bh7 after h5, and trade bishops on d3',
          "Develop ...Nd7, ...Ngf6, ...e6 and ...Qc7, and castle on the side away from White's pawns",
          'Free the game later with ...c5'
        ]
      },
      responses: [
        { moves: '5.Ng3 Bg6 6.h4 h6', name: 'Main line', note: '7.Nf3 Nd7 8.h5 Bh7 9.Bd3 Bxd3 10.Qxd3 e6: Black trades the bishop and develops calmly.' },
        { moves: '5.Ng3 Bg6 6.Nf3 Nd7', name: '6.Nf3', note: 'Without an early h4, Black develops ...Ngf6 and ...e6; 7.h4 h6 8.h5 Bh7 usually transposes.' },
        { moves: '5.Ng3 Bg6 6.Bc4 e6', name: '6.Bc4', note: "6...e6 blunts the bishop's pressure on f7; Black continues ...Nf6, ...Bd6 and ...Nbd7." }
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
      lessons: ['openings-2', 'black-vs-e4-3']
    },
    {
      id: 'b-caro-kann-advance',
      side: 'black',
      group: 'vs-e4',
      family: 'Caro-Kann Defence',
      name: 'Caro-Kann: Black vs the Advance (3.e5 Bf5)',
      eco: 'B12',
      defining: ['e2e4', 'c7c6', 'd2d4', 'd7d5', 'e4e5', 'c8f5'],
      moves: '1.e4 c6 2.d4 d5 3.e5 Bf5',
      difficulty: 'Intermediate',
      style: 'Solid',
      summary: 'Against 3.e5, develop the bishop outside the pawn chain with 3...Bf5, then play ...e6 and the freeing ...c5.',
      idea: "The bishop goes to f5 before ...e6, so Black avoids the French's bad-bishop problem. Then ...e6, ...c5, ...Nc6 and ...Ne7 attack d4. White can play quietly with Nf3 and Be2 (the Short System) or sharply with Nc3, g4 and h4 to chase the bishop.",
      plans: {
        white: [
          'Short System: Nf3, Be2, O-O and c3 or c4, a quiet space advantage',
          'Sharp lines: Nc3, g4, Nge2 and h4-h5 to hound the bishop'
        ],
        black: [
          'Play ...e6, ...c5, ...Nc6 and ...Ne7, hitting d4',
          'Keep the bishop safe: ...Bg6 or ...Bh7 against g4, and answer h4 with ...h5 or ...h6'
        ]
      },
      responses: [
        { moves: '4.Nf3 e6 5.Be2', name: 'Short System', note: "5...c5 or 5...Nd7 with ...Ne7: Black completes development and attacks d4. White's space advantage is modest." },
        { moves: '4.Nc3 e6 5.g4 Bg6 6.Nge2', name: 'Bayonet', note: '6...c5 strikes back in the centre; Black must be ready for h4-h5 and Nf4 against the bishop.' },
        { moves: '4.h4 h5', name: '4.h4', note: '4...h5 (or 4...h6) gives the bishop safety; then ...e6, ...c5 and ...Ne7 as usual.' }
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
      lessons: [],
      uncertain: '6.Be3 Nd7 7.O-O Ne7 is given as a typical Short System set-up; exact move orders vary in current theory.'
    },
    {
      id: 'b-scandinavian',
      side: 'black',
      group: 'vs-e4',
      family: 'Scandinavian Defence',
      name: 'Scandinavian: 3...Qa5',
      eco: 'B01',
      defining: ['e2e4', 'd7d5', 'e4d5', 'd8d5', 'b1c3', 'd5a5'],
      moves: '1.e4 d5 2.exd5 Qxd5 3.Nc3 Qa5',
      difficulty: 'Beginner',
      style: 'Solid',
      summary: 'Challenge e4 on move one. After ...Qxd5 and ...Qa5, Black gets a sound, Caro-Kann-like set-up with active pieces.',
      idea: 'Black trades the d-pawn for e4 and accepts losing a tempo with the queen. From a5 the queen is out of the way, and once White plays d4 it pins the c3 knight. Black develops ...Nf6, ...c6, ...Bf5 or ...Bg4, and ...e6, then castles, reaching a solid structure without weaknesses.',
      plans: {
        white: [
          'Develop with gain of time: Nf3, Bc4 and Bd2, watching for Nd5 or Nb5 tricks against the queen',
          'Castle long and use the extra central space'
        ],
        black: [
          'Develop ...Nf6, ...c6, ...Bf5 (or ...Bg4) and ...e6, then castle',
          'Keep the queen safe: ...c6 gives it a retreat to c7 and stops Nb5 and Nd5'
        ]
      },
      responses: [
        { moves: '4.d4 Nf6 5.Nf3 c6', name: 'Main line', note: '6.Bc4 Bf5 7.Bd2 e6: Black develops ...Bb4 or ...Nbd7 and has a sound position.' },
        { moves: '4.d4 Nf6 5.Bc4 c6', name: '5.Bc4', note: 'Again ...c6 and ...Bf5. Watch for Bd2 combined with Nd5, which uncovers an attack on the queen.' },
        { moves: '4.Bc4 Nf6', name: '4.Bc4', note: 'Black plays ...c6 and ...Bf5 or ...Bg4 as usual; the queen stays comfortable on a5.' }
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
      lessons: []
    },
    {
      id: 'b-pirc',
      side: 'black',
      group: 'vs-e4',
      family: 'Pirc Defence',
      name: 'Pirc Defence',
      eco: 'B07',
      defining: ['e2e4', 'd7d6', 'd2d4', 'g8f6', 'b1c3', 'g7g6'],
      moves: '1.e4 d6 2.d4 Nf6 3.Nc3 g6',
      difficulty: 'Intermediate',
      style: 'Flexible',
      summary: 'Let White build a big centre, fianchetto the bishop, then strike at the centre with ...e5 or ...c5.',
      idea: "Black invites White to occupy the centre, then targets it with the g7 bishop and pawn breaks. In the Classical line Black plays ...Bg7, ...O-O and ...Bg4 or ...c6, then ...e5. Against the aggressive Austrian Attack with f4, Black must hit back quickly with ...c5 or ...e5 before White's e5 push gains too much space.",
      plans: {
        white: [
          'Austrian Attack: f4, Nf3 and e5 to gain space and attack',
          '150 Attack: Be3, Qd2, Bh6 and h4-h5 against the castled king',
          'Classical: Nf3, Be2 and O-O, keeping a solid space advantage'
        ],
        black: [
          'Strike at the centre with ...e5 (after ...Nc6 or ...Nbd7) or with ...c5',
          'Against the Be3 and Qd2 plans, play ...c6 and ...b5 for queenside counterplay',
          "Keep the g7 bishop: it is Black's best piece"
        ]
      },
      responses: [
        { moves: '4.f4 Bg7 5.Nf3 O-O', name: 'Austrian Attack', note: '6.Bd3 and 6.Be3 are main; Black prepares ...c5, often via ...Na6, to hit the centre. Against 6.e5, the knight drops back and ...c5 follows.' },
        { moves: '4.Be3 c6', name: '150 Attack', note: 'With ...c6 and ...b5 Black gains queenside space; after 5.Qd2, delaying castling makes Bh6 and h4-h5 less effective.' },
        { moves: '4.Nf3 Bg7 5.Be2 O-O 6.O-O Bg4', name: 'Classical', note: '7.Be3 Nc6 8.Qd2 e5 is the main line: Black pins the knight and challenges the centre. 6...c6 is a solid alternative.' }
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
      lessons: []
    },
    {
      id: 'b-alekhine',
      side: 'black',
      group: 'vs-e4',
      family: 'Alekhine Defence',
      name: 'Alekhine Defence',
      eco: 'B04',
      defining: ['e2e4', 'g8f6', 'e4e5', 'f6d5', 'd2d4', 'd7d6'],
      moves: '1.e4 Nf6 2.e5 Nd5 3.d4 d6',
      difficulty: 'Intermediate',
      style: 'Positional',
      summary: "Provoke White's pawns forward with 1...Nf6, then attack them. Unusual and provocative, but sound.",
      idea: "Black lures White's pawns into the centre, then undermines them with ...d6, ...Bg4, ...c5 or ...dxe5. In the Modern Variation, 4.Nf3 Bg4, Black pins the knight that defends d4 and e5, then plays ...e6, ...Be7 and ...O-O. The black knight is often chased to b6, but White's big centre can become a target.",
      plans: {
        white: [
          'Grab space with c4, e5 and d4, or play the solid Modern Variation with 4.Nf3',
          "Use the space for a kingside attack or to cramp Black's pieces"
        ],
        black: [
          'Undermine e5 with ...d6, then exchange on e5 or let White exchange on d6',
          'Pin the f3 knight with ...Bg4 and pressure d4 with ...Nc6 and ...c5 or ...d5',
          'In the Four Pawns Attack, hit the over-extended centre quickly with ...dxe5, ...Nc6 and ...Bf5'
        ]
      },
      responses: [
        { moves: '4.Nf3 Bg4 5.Be2 e6', name: 'Modern Variation', note: "6.O-O Be7 7.c4 Nb6 8.h3 Bh5 9.exd6 cxd6: Black's position is solid and d4 can become a target." },
        { moves: '4.c4 Nb6 5.f4 dxe5 6.fxe5 Nc6', name: 'Four Pawns Attack', note: "7.Be3 Bf5 8.Nc3 e6: Black develops rapidly and attacks White's big but loose centre." },
        { moves: '4.c4 Nb6 5.exd6', name: 'Exchange', note: '5...cxd6 or 5...exd6 gives a solid structure; Black pressures c4 and d4 with ...g6, ...Bg7 and ...Nc6.' }
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
      lessons: []
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
      summary: 'Why 3...d6 comes before ...Nxe4 in the Petroff, and how to limit the damage if you forget.',
      prerequisites: ['openings-1'],
      related: {
        openings: ['b-petroff'],
        gambits: [],
        lessons: []
      },
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
          wrong: { 'e4f6': '5.Nc6+ is a discovered check from the queen on e2, and the knight also attacks your queen. You lose the queen.', 'd7d5': '5.d3 attacks the knight, which cannot move without allowing a discovered check. After 5...Qe7 6.dxe4 Qxe5 7.exd5 White is a clean pawn up.', 'f8e7': 'The bishop does block the e-file, but 5.Qxe4 simply wins your knight.' },
          accept: [['d8e7']]
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
      related: {
        openings: ['b-e5-giuoco-piano'],
        gambits: [],
        lessons: []
      },
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
          wrong: { 'e8g8': 'Natural, but it lets White keep the centre: 9.d5 drives the c6 knight away and White has more space.', 'd7d6': 'Too passive. White keeps the ideal centre and can push d5 with tempo whenever it suits.' },
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
      related: {
        openings: ['b-caro-kann-classical'],
        gambits: [],
        lessons: ['openings-2']
      },
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
          wrong: { 'b8d7': '7.h5 traps the bishop: h7 is blocked by your own pawn, and f5 and e4 are covered by the g3 knight.', 'g8f6': 'After 7.h5 Be4 8.Nxe4 Nxe4 you keep the material, but you have given up the bishop you developed so carefully.' }
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
      related: {
        openings: ['b-french-advance'],
        gambits: [],
        lessons: []
      },
      steps: [
        {
          type: 'read',
          title: 'A pawn chain',
          fen: 'rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3',
          orientation: 'b',
          text: "After 3.e5, White's pawns on d4 and e5 form a pawn chain: a diagonal line of pawns, each protecting the one in front. A chain is best attacked at its base, the pawn at the back, which here is d4. If d4 falls, the e5 pawn loses its support.",
          highlights: ['d4', 'e5']
        },
        {
          type: 'puzzle',
          title: 'Find the base',
          fen: 'rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3',
          prompt: "Black to move: which pawn move attacks the base of White's pawn chain?",
          solution: ['c7c5'],
          hint: 'The base is d4. Which black pawn can reach a square that attacks it?',
          explanation: '3...c5! attacks d4 at once. Black will add ...Nc6 and ...Qb6, piling up on d4. 3...f6 attacks the front of the chain instead; that idea usually comes later, once d4 is under pressure.',
          wrong: { 'f7f6': '...f6 hits e5, the head of the chain, which White can support with Nf3 and f4. Start with the base.' },
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
          wrong: { 'd1a4': "9.Qa4+?? Qxa4: Black's queen on d4 simply takes yours along the fourth rank.", 'd3e2': 'The d1 queen now hits d4, but it is Black to move: 9...Qxd1+ trades queens and Black stays a pawn up.' },
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
      related: {
        openings: ['b-e5-two-knights'],
        gambits: [],
        lessons: []
      },
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
          wrong: { 'f6d5': "5...Nxd5?! allows 6.Nxf7 Kxf7 7.Qf3+, the Fried Liver Attack, or the even stronger 6.d4. Black's king is badly exposed.", 'b7b5': "This pawn move also hits the bishop, but after 6.Bf1 Black's compensation is less clear than in the main line." },
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
      related: {
        openings: ['b-sicilian-dragon'],
        gambits: [],
        lessons: []
      },
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
          wrong: { 'e7e5': 'This hits the knight but gives up the d5 square for good and leaves the d6 pawn backward.', 'b7b5': 'This simply drops a pawn: both white knights attack b5.' },
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
      related: {
        openings: ['b-ruy-closed'],
        gambits: [],
        lessons: []
      },
      steps: [
        {
          type: 'read',
          title: 'A bishop with few squares',
          fen: 'r1bqk2r/2p1bppp/p1np1n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w kq - 0 8',
          orientation: 'b',
          text: "In the Closed Ruy Lopez, White's bishop on b3 is a strong piece, but it has few squares. Black's pawn on b5 covers a4 and c4, and White's own pawns stand on a2 and c2. If Black can add ...c5-c4, the bishop may be trapped. This pattern is called the Noah's Ark trap, and it is why White usually plays c3 first.",
          highlights: ['b3', 'a4', 'c4']
        },
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
          wrong: { 'e8g8': 'Castling is a fine move, but it misses the chance to trap the bishop with ...c5 and ...c4.' },
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
      related: {
        openings: ['b-sicilian-classical', 'b-sicilian-dragon'],
        gambits: [],
        lessons: []
      },
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
          wrong: { 'g7g6': '6...g6? walks into a known trap: 7.Nxc6 bxc6 8.e5! and if 8...dxe5? 9.Bxf7+ Kxf7 10.Qxd8 wins the queen.' },
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
      related: {
        openings: ['b-sicilian-sveshnikov'],
        gambits: [],
        lessons: []
      },
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
          wrong: { 'c6e7': "This blocks the queen's defence of f6, and 11.Nxf6+ wins a pawn with check." },
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
    { term: 'Exchange sacrifice', definition: 'Giving a rook for a bishop or knight in return for positional or attacking compensation.' }
  ]
}]);
