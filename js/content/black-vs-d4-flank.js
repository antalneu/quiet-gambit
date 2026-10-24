/* The Quiet Gambit - Black repertoire against 1.d4 and against flank openings (1.c4, 1.Nf3, KIA, Bird),
 * organised as families -> variations -> move lines, plus the black-vs-d4 and black-vs-flank lessons.
 * Data only: appends one part to window.QG_PARTS. */
window.QG_PARTS = (window.QG_PARTS || []).concat([{
  source: 'black-vs-d4-flank',
  families: [
    {
      id: 'bf-qgd',
      side: 'black',
      group: 'vs-d4',
      name: "Queen's Gambit Declined",
      aliases: ['QGD', 'Orthodox Defence', "2...e6 against the Queen's Gambit"],
      eco: 'D30-D69',
      root: ['d2d4', 'd7d5', 'c2c4', 'e7e6'],
      summary: "Black holds d5 with ...e6: the most classical answer to the Queen's Gambit, solid and respected at every level.",
      overview: "With 2...e6 Black keeps a pawn on d5 and develops the kingside quickly, at the price of a c8-bishop that is shut in for now. White chooses between the pin with Bg5, the Exchange Variation (cxd5 and the Carlsbad structure), quieter Nf3 and Bf4 set-ups and the Catalan. Black's freeing breaks are ...c5 and ...e5, and trading pieces with ...Ne4 or ...Nd5 relieves the slight cramp.",
      choosing: "Start with the Classical 4.Bg5 Be7 and the Exchange Variation, which every QGD player meets. Add Lasker's Defence if you like simplifying, or the Tartakower if you want more tension. The Ragozin (...Bb4) suits players who also play the Nimzo-Indian.",
      terms: [
        'Carlsbad structure',
        'Minority attack',
        'Hanging pawns',
        'Tartakower',
        'Lasker Defence',
        'Ragozin',
        'Elephant Trap'
      ]
    },
    {
      id: 'bf-slav',
      side: 'black',
      group: 'vs-d4',
      name: 'Slav Defence',
      aliases: ['Slav', 'Semi-Slav'],
      eco: 'D10-D19, D43-D49',
      root: ['d2d4', 'd7d5', 'c2c4', 'c7c6'],
      summary: 'Black supports d5 with the c-pawn, keeping the c8-bishop free; solid, popular and full of choice from quiet to very sharp.',
      overview: "2...c6 defends d5 without blocking the light-squared bishop, so Black can often develop it to f5 or g4 before ...e6. The family splits early: the main Slav with ...dxc4 and ...Bf5, the Semi-Slav with ...e6 (a triangle of pawns on c6, d5 and e6), the flexible Chebanenko with ...a6, and the symmetrical Exchange Slav. Black's typical breaks are ...c5 and ...e5, and the queenside expansion ...b5.",
      choosing: 'For a solid, low-theory repertoire play the main Slav with ...Bf5 and learn the Exchange Slav. The Semi-Slav is sharper and more theoretical; the Chebanenko suits players who like keeping options open. Whatever you choose, you must have an answer to the Exchange Slav.',
      terms: ['Semi-Slav', 'Meran', 'Moscow Variation', 'Chebanenko', 'Exchange Slav', '...a6 Slav']
    },
    {
      id: 'bf-qga',
      side: 'black',
      group: 'vs-d4',
      name: "Queen's Gambit Accepted",
      aliases: ['QGA'],
      eco: 'D20-D29',
      root: ['d2d4', 'd7d5', 'c2c4', 'd5c4'],
      summary: 'Black takes the c4-pawn, gives it back in good time, and uses the moves gained for quick development and the ...c5 break.',
      overview: "In the Queen's Gambit Accepted Black gives up the centre for a moment. White normally regains the pawn with e3 and Bxc4 or builds a centre with e4. Black develops ...Nf6, ...e6 and ...c5, and often gains time with ...a6 and ...b5 against the bishop. Positions with an isolated white d-pawn are common, so knowing how to blockade it is essential.",
      choosing: 'One variation is enough to start: the Classical set-up with ...Nf6, ...e6, ...c5 and ...a6. Against the direct 3.e4, strike back with ...e5 or ...Nf6. Never try to keep the extra pawn with an early ...b5.',
      terms: ['Isolated queen pawn', 'Blockade', 'Classical QGA']
    },
    {
      id: 'bf-nimzo-indian',
      side: 'black',
      group: 'vs-d4',
      name: 'Nimzo-Indian Defence',
      aliases: ['Nimzo', 'Nimzo-Indian'],
      eco: 'E20-E59',
      root: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'b1c3', 'f8b4'],
      summary: 'Pin the c3-knight to fight for e4 with pieces; one of the most respected and flexible defences against 1.d4.',
      overview: "With 3...Bb4 Black pins the knight that supports e2-e4. Black is often ready to give the bishop for that knight with ...Bxc3, leaving White the bishop pair but doubled c-pawns that become targets after ...c5, ...b6, ...Ba6 and ...Na5. White's main choices are 4.e3 (Rubinstein), 4.Qc2 (Classical, avoiding doubled pawns), 4.a3 (Samisch), 4.f3, 4.Nf3 and 4.Bg5.",
      choosing: 'Learn the Rubinstein (4.e3) and the Classical (4.Qc2) first: they are the most common. Add the Samisch and 4.f3 plans as you meet them. If you like pawn structures and long manoeuvring games, the Nimzo is ideal.',
      terms: [
        'Doubled c-pawns',
        'Bishop pair',
        'Rubinstein',
        'Classical 4.Qc2',
        'Samisch',
        'Hubner set-up',
        '...Ne4 jump'
      ]
    },
    {
      id: 'bf-queens-indian',
      side: 'black',
      group: 'vs-d4',
      name: "Queen's Indian Defence",
      aliases: ['QID'],
      eco: 'E12-E19',
      root: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'b7b6'],
      summary: "When White avoids the Nimzo with 3.Nf3, Black fianchettoes the queen's bishop to control e4 and the light squares.",
      overview: "The Queen's Indian controls the central light squares with pieces: a bishop on b7 or a6, the f6-knight and, when it helps, ...Ne4 to exchange a defender of e4. White usually plays 4.g3, when 4...Ba6 hits c4 at once, or the Petrosian 4.a3, which stops ...Bb4. Black's breaks are ...c5 and ...d5.",
      choosing: 'Pair it with the Nimzo-Indian: 3.Nc3 Bb4, 3.Nf3 b6. One main variation (4.g3 Ba6 or 4.g3 Bb7) is enough to start; learn the 4.a3 ideas next.',
      terms: ['Fianchetto', 'Long diagonal', 'Petrosian Variation', '4.g3 Ba6']
    },
    {
      id: 'bf-bogo-indian',
      side: 'black',
      group: 'vs-d4',
      name: 'Bogo-Indian Defence',
      aliases: ['Bogo', 'Bogoljubov Defence'],
      eco: 'E11',
      root: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'f8b4'],
      summary: 'A simple developing check against 3.Nf3; compact, low on theory and easy to combine with the Nimzo-Indian.',
      overview: 'After 3...Bb4+ White blocks with Bd2 or Nbd2. Black usually exchanges the bishop for a white minor piece, then builds a compact position with pawns on dark squares (...d6 and ...e5) or fights for e4 with ...b6 and ...Bb7. The positions are solid rather than ambitious.',
      choosing: "A good partner for the Nimzo-Indian if you do not want to learn the Queen's Indian. The 4.Bd2 Qe7 line is the most common; know ...a5 and ...Bxd2+ as simpler alternatives.",
      terms: ['...Qe7 and ...e5', 'Dark-square pawn chain']
    },
    {
      id: 'bf-kings-indian',
      side: 'black',
      group: 'vs-d4',
      name: "King's Indian Defence",
      aliases: ['KID', "King's Indian"],
      eco: 'E60-E99',
      root: ['d2d4', 'g8f6', 'c2c4', 'g7g6'],
      summary: 'Black lets White build a big centre, then attacks it with ...e5 or ...c5; double-edged and full of kingside attacking chances.',
      overview: "Black fianchettoes, castles and only then strikes at the centre, usually with ...e5. When White closes it with d5, the game becomes a race: White attacks on the queenside, Black on the kingside with ...f5. White's main systems are the Classical (Nf3 and Be2), the Samisch (f3), the Fianchetto (g3), the Four Pawns Attack (f4) and the Averbakh (Be2 and Bg5).",
      choosing: 'Learn the Classical first, then a plan against each White system: ...c5 or ...Nc6 and ...a6 against the Samisch, ...Nbd7 or ...c5 against the Fianchetto, ...c5 and ...e6 against the Four Pawns. Choose it if you like sharp, unbalanced games.',
      terms: [
        'Mar del Plata',
        'Pawn storm',
        '...f5 break',
        'Samisch',
        'Fianchetto Variation',
        'Four Pawns Attack',
        'Panno'
      ]
    },
    {
      id: 'bf-grunfeld',
      side: 'black',
      group: 'vs-d4',
      name: 'Grunfeld Defence',
      aliases: ['Grunfeld', 'Gruenfeld Defence'],
      eco: 'D70-D99',
      root: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'd7d5'],
      summary: 'Black invites a big white centre and then attacks it with pieces and ...c5; dynamic, concrete and deeply analysed.',
      overview: 'With 3...d5 Black challenges the centre at once. In the Exchange Variation White gets a broad pawn centre after cxd5, e4 and bxc3, and Black attacks d4 with the g7-bishop, ...c5, ...Nc6 and ...Qa5. If White declines to build that centre, Black usually chooses between ...dxc4 (against Qb3 lines) and ...c5 (against Bf4 and e3). Concrete knowledge matters more here than in most openings.',
      choosing: 'The Exchange Variation is the critical test and must be learned first. Then add a plan against the Russian System (Qb3) and against 4.Bf4. Choose the Grunfeld if you enjoy concrete, active play and are willing to study.',
      terms: ['Exchange Variation', 'Russian System', 'Hungarian ...a6', 'Smyslov ...Bg4', 'Long diagonal', 'Pawn centre']
    },
    {
      id: 'bf-benoni',
      side: 'black',
      group: 'vs-d4',
      name: 'Benoni Defence',
      aliases: ['Modern Benoni', 'Benoni'],
      eco: 'A60-A79',
      root: ['d2d4', 'g8f6', 'c2c4', 'c7c5'],
      summary: 'Black accepts less space for a queenside majority and very active pieces; a combative, unbalanced choice.',
      overview: "After 3.d5 e6 and ...exd5, White has a central majority and Black a queenside majority. Black fianchettoes, puts a rook on e8 and expands with ...a6 and ...b5, while keeping White's e4-e5 break under control. White's sharpest tries are the f4 systems, especially the Taimanov Attack with Bb5+.",
      choosing: 'Play it only if you enjoy sharp positions and accept some theoretical risk. Know the Taimanov answer 8...Nfd7; many players reach the Benoni via 1.d4 Nf6 2.c4 e6 3.Nf3 c5 to avoid the f4 lines.',
      terms: ['Queenside majority', 'e4-e5 break', 'Taimanov Attack', 'Benoni structure']
    },
    {
      id: 'bf-dutch',
      side: 'black',
      group: 'vs-d4',
      name: 'Dutch Defence',
      aliases: ['Dutch', '1...f5'],
      eco: 'A80-A99',
      root: ['d2d4', 'f7f5'],
      summary: 'Black controls e4 with the f-pawn and plays for an unbalanced, often kingside-orientated game.',
      overview: "1...f5 fights for e4 at once and makes White's quiet systems less comfortable, at the cost of weakening e6 and the e8-h5 diagonal. Black then picks a set-up: the Leningrad (...g6 and ...Bg7), the Stonewall (...e6, ...d5 and ...c6, with a grip on e4), or the Classical (...e6, ...Be7 and ...d6, preparing ...e5). White's anti-Dutch tries include 2.Bg5, 2.Nc3 and the Staunton Gambit 2.e4.",
      choosing: 'Pick one set-up and play it against everything. The Stonewall is the easiest to learn and the most solid; the Leningrad is the most dynamic; the Classical sits in between. Have an answer to 2.e4 and 2.Bg5 ready.',
      terms: ['Leningrad', 'Stonewall', 'Classical Dutch', 'Ilyin-Zhenevsky', 'e4 outpost', 'Staunton Gambit']
    },
    {
      id: 'bf-vs-london',
      side: 'black',
      group: 'vs-d4',
      name: 'London System',
      aliases: ['London', 'Black against the London'],
      eco: 'D02',
      root: ['d2d4', 'd7d5', 'c1f4'],
      summary: "Meet the London by hitting d4 and b2 before White's set-up is complete.",
      overview: "The London develops the dark-squared bishop to f4 early and builds a c3-d4-e3 pyramid. Its weakness is b2, which loses a defender when the bishop leaves c1. Black's most direct plan is ...c5, ...Nc6 and ...Qb6; the calm follow-up is ...e6, ...Nf6 and ...Bd6 to trade the London bishop.",
      choosing: 'One reliable plan is enough: the ...c5 and ...Qb6 set-up. It works against most move orders, including 2.Nf3 and 3.Bf4.',
      terms: ['...Qb6 against b2', 'Pyramid structure']
    },
    {
      id: 'bf-vs-colle',
      side: 'black',
      group: 'vs-d4',
      name: 'Colle System',
      aliases: ['Colle', 'Colle-Koltanowski', 'Colle-Zukertort'],
      eco: 'D04-D05',
      root: ['d2d4', 'd7d5', 'g1f3', 'g8f6', 'e2e3'],
      summary: "Against the quiet Colle, strike early with ...c5 and be ready for White's e3-e4 break.",
      overview: 'The Colle builds with e3, Bd3, Nbd2 and c3 (or b3 and Bb2 in the Zukertort) and then breaks with e3-e4, with the d3-bishop aiming at h7. Black hits d4 with ...c5 and ...Nc6, develops ...Bd6 and castles, keeps the f6-knight on guard and meets e4 with exchanges in the centre.',
      choosing: 'The ...c5, ...Nc6 and ...Bd6 set-up covers both the Colle-Koltanowski and the Colle-Zukertort.',
      terms: ['e3-e4 break', 'e4-e5 fork', 'Greek gift', 'Zukertort']
    },
    {
      id: 'bf-vs-trompowsky',
      side: 'black',
      group: 'vs-d4',
      name: 'Trompowsky Attack',
      aliases: ['Trompowsky', 'Tromp', '2.Bg5'],
      eco: 'A45',
      root: ['d2d4', 'g8f6', 'c1g5'],
      summary: 'White threatens to double your pawns with Bxf6 on move two; ...e6 lets the queen recapture.',
      overview: "2.Bg5 attacks the f6-knight before White commits to c4. Black's main replies are 2...e6, 2...Ne4 and 2...d5. With 2...e6 Black can always recapture on f6 with the queen; after ...h6 White must decide at once whether to give up the bishop pair.",
      choosing: 'The 2...e6 set-up is the simplest: little theory and healthy pawns. More ambitious players can study 2...Ne4 later.',
      terms: ['Bishop pair', 'Doubled pawns', '...h6 question']
    },
    {
      id: 'bf-english',
      side: 'black',
      group: 'vs-flank',
      name: 'English Opening',
      aliases: ['English', '1.c4'],
      eco: 'A10-A39',
      root: ['c2c4'],
      summary: "Black's answers to 1.c4: the Reversed Sicilian with ...e5, the Symmetrical ...c5, and ...Nf6 with ...e6 to head for Nimzo or QGD territory.",
      overview: "1.c4 controls d5 from the side and keeps White's options open. Black can claim the centre with ...e5 (a Sicilian with colours reversed), copy with ...c5, or play ...Nf6 and ...e6 and transpose to 1.d4 openings if White plays d4. The fianchetto with g3 and Bg2 is White's most common plan, often with queenside expansion via Rb1 and b4.",
      choosing: 'If you play 1.d4 defences, ...Nf6 and ...e6 keeps your repertoire together. ...e5 gives clear, active plans; ...c5 is solid and patient. Against ...e5, know both the Four Knights and the Closed (g3) systems.',
      terms: [
        'Reversed Sicilian',
        'Four Knights English',
        'Closed English',
        'Symmetrical English',
        'Botvinnik set-up',
        'Mikenas Attack',
        'Nimzo-English'
      ]
    },
    {
      id: 'bf-reti',
      side: 'black',
      group: 'vs-flank',
      name: 'Reti Opening',
      aliases: ['Reti', '1.Nf3 d5 2.c4'],
      eco: 'A09-A14',
      root: ['g1f3', 'd7d5', 'c2c4'],
      summary: 'White hits d5 from the side with 2.c4. Black supports it with ...c6 (Slav style) or ...e6 (QGD style).',
      overview: "In the Reti White attacks the d5-pawn without occupying the centre, often adding g3, Bg2, b3 and Bb2. Black supports d5 with ...c6 or ...e6 and develops normally. If White plays d4 the game transposes to a Slav, Queen's Gambit or Catalan, so the choice should match your 1.d4 repertoire.",
      choosing: 'Slav players choose ...c6; QGD and Nimzo players choose ...e6. Both give a sound position with clear plans.',
      terms: ['Double fianchetto', 'Catalan transposition', 'Slav set-up', 'QGD set-up']
    },
    {
      id: 'bf-kings-indian-setup',
      side: 'black',
      group: 'vs-flank',
      name: "King's Indian set-up",
      aliases: ["King's Indian against 1.Nf3 and 1.c4", 'Anglo-Indian with ...g6'],
      eco: 'A15-A16',
      root: ['g1f3', 'g8f6'],
      summary: 'A universal system: ...Nf6, ...g6, ...Bg7, ...O-O and ...d6 works against almost every flank opening.',
      overview: "Black plays the same King's Indian formation whatever White does. If White adds d4 and e4, it is a normal King's Indian; if White stays in English territory with g3 and Bg2, Black chooses ...e5 with ...Nc6 (a Closed Sicilian with colours reversed) or ...c5, and slows White's b4 plan with ...a5.",
      choosing: "Ideal for King's Indian players who want one system against 1.Nf3 and 1.c4. Learn which central break suits each White set-up.",
      terms: ['Universal system', 'Reversed Closed Sicilian', '...a5 against b4']
    },
    {
      id: 'bf-vs-kia',
      side: 'black',
      group: 'vs-flank',
      name: "King's Indian Attack",
      aliases: ['KIA', "Reversed King's Indian"],
      eco: 'A07-A08',
      root: ['g1f3', 'd7d5', 'g2g3'],
      summary: "Meet the King's Indian Attack with a broad ...d5, ...e6 and ...c5 centre and quick queenside play.",
      overview: "White sets up Nf3, g3, Bg2, O-O, d3, Nbd2 and e4: a King's Indian with an extra move. Black builds a big centre with ...d5, ...c5 and ...e6 and castles. When White pushes e4-e5, the game becomes a race: White attacks on the kingside, Black on the queenside with ...b5-b4 and ...a5-a4.",
      choosing: 'One set-up is enough; know why an unprepared e4 can lose a pawn.',
      terms: ["Reversed King's Indian", 'Queenside pawn storm', 'e4-e5 wedge']
    },
    {
      id: 'bf-vs-bird',
      side: 'black',
      group: 'vs-flank',
      name: "Bird's Opening",
      aliases: ['Bird', '1.f4'],
      eco: 'A02-A03',
      root: ['f2f4'],
      summary: 'Answer 1.f4 with ...d5 and a kingside fianchetto, aiming at the dark squares White has weakened.',
      overview: '1.f4 controls e5 and plays a Dutch with colours reversed, but it weakens e3 and the a7-g1 and e1-h4 diagonals. Black controls e4 with ...d5 and ...Nf6, fianchettoes the f8-bishop, castles and strikes with ...c5, ...d4 or ...e5.',
      choosing: 'The ...d5, ...Nf6 and ...g6 set-up works against both the Classical (e3 and Be2) and the Leningrad (g3 and Bg2) Bird.',
      terms: ['Reversed Dutch', 'Leningrad Bird', 'Dark squares']
    }
  ],
  repertoire: [
    {
      id: 'b-qgd-orthodox',
      side: 'black',
      group: 'vs-d4',
      family: "Queen's Gambit Declined",
      familyId: 'bf-qgd',
      name: "Queen's Gambit Declined: Classical 4.Bg5 Be7 and the Tartakower",
      short: 'Classical 4.Bg5 Be7 (Tartakower)',
      aliases: ['Orthodox Defence', 'Tartakower Variation', 'Tartakower-Makogonov-Bondarevsky System', 'TMB System'],
      eco: 'D53',
      moves: '1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Bg5 Be7',
      defining: ['d2d4', 'd7d5', 'c2c4', 'e7e6', 'b1c3', 'g8f6', 'c1g5', 'f8e7'],
      difficulty: 'Intermediate',
      style: 'Solid',
      minutes: 15,
      summary: "Black's most classical answer to the Queen's Gambit: hold d5 with ...e6, castle quickly and free the game later with ...c5 or ...e5.",
      idea: 'Black accepts a temporarily blocked light-squared bishop in return for a rock-solid centre. After ...O-O, ...h6 and ...b6 the bishop goes to b7, and the freeing break ...c5 follows, often leaving hanging pawns on c5 and d5 that give active piece play. Exchanging pieces with ...Ne4 (Lasker) or ...Nd5 (Capablanca) is the other way to ease the position.',
      plans: {
        white: [
          'Keep the pin on f6 and build with e3, Nf3, Be2 or Bd3 and castle',
          'Exchange on d5 and f6, then use the minority attack (b4-b5) or pressure on the c-file'
        ],
        black: [
          'Castle, then ...h6 and ...b6 to develop the bishop on b7',
          'Break with ...c5 to free the position, accepting hanging pawns if needed',
          'Ease the defence by trading pieces with ...Ne4 or ...Nd5'
        ]
      },
      responses: [
        {
          moves: '5.e3 O-O 6.Nf3 h6 7.Bh4 b6',
          name: 'Tartakower',
          note: "The main line: ...Bb7 and ...c5 follow. 7...Ne4, Lasker's Defence, is a simpler alternative that trades pieces (see its own page)."
        },
        {
          moves: '5.e3 O-O 6.Nf3 h6 7.Bxf6 Bxf6',
          name: 'Early Bxf6',
          note: 'White gives up the bishop pair to keep the position tight. Black stays solid with ...c6 and ...Nd7 and frees the game with ...dxc4 and ...e5.'
        },
        {
          moves: '5.e3 O-O 6.Nf3 Nbd7 7.Rc1 c6',
          name: 'Orthodox',
          note: "The old Orthodox: after 8.Bd3 dxc4 9.Bxc4 Nd5 Black trades pieces and frees the game with ...e5 (Capablanca's manoeuvre)."
        },
        {
          moves: '5.cxd5 exd5',
          name: 'Exchange',
          note: "Recapture with the pawn: the Carlsbad structure. See the Exchange Variation entry for Black's plans."
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'e7e6', san: 'e6', note: 'Supports d5 with a pawn; the price is that the c8-bishop is blocked for now.' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c1g5', san: 'Bg5' },
          { uci: 'f8e7', san: 'Be7', note: 'Unpins calmly: if Bxf6, Black recaptures with the bishop.' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'h7h6', san: 'h6', note: 'Asks the bishop to choose: retreat or give up the bishop pair. It also gives the king air.' },
          { uci: 'g5h4', san: 'Bh4' },
          { uci: 'b7b6', san: 'b6', note: 'The Tartakower idea: the problem bishop will develop on the long diagonal.' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'c8b7', san: 'Bb7' },
          { uci: 'h4f6', san: 'Bxf6' },
          { uci: 'e7f6', san: 'Bxf6', note: 'Black has the bishop pair. After 10.cxd5 exd5 Black answers b4 with ...c5.' }
        ]
      },
      lines: [
        {
          id: 'tartakower',
          name: '7.Bh4 b6: the Tartakower',
          kind: 'Main line',
          summary: 'Black fianchettoes the problem bishop and answers b4 with ...c5. Remember: hanging pawns on c5 and d5 are a strength while Black stays active.',
          moves: [
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'h7h6', san: 'h6', note: 'Asks the bishop to choose before Black decides on a set-up.' },
            { uci: 'g5h4', san: 'Bh4' },
            { uci: 'b7b6', san: 'b6', note: 'The Tartakower: the c8-bishop goes to the long diagonal.' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'c8b7', san: 'Bb7' },
            { uci: 'h4f6', san: 'Bxf6' },
            { uci: 'e7f6', san: 'Bxf6' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'e6d5', san: 'exd5', note: 'Recapture with the pawn: the b7-bishop is blocked for now, but d5 is solid.' },
            { uci: 'b2b4', san: 'b4' },
            { uci: 'c7c5', san: 'c5', note: 'The freeing break, hitting b4 and d4 before b4-b5 fixes the c-pawn.' }
          ]
        },
        {
          id: 'bxf6',
          name: '7.Bxf6: White gives up the bishop',
          kind: 'Alternative',
          summary: 'With the bishop pair Black can afford a calm build-up: ...c6, ...Nd7, then ...dxc4 and ...e5 to open the position.',
          moves: [
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'e7f6', san: 'Bxf6', note: 'Black now owns the bishop pair.' },
            { uci: 'a1c1', san: 'Rc1' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'b8d7', san: 'Nd7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'd3c4', san: 'Bxc4' },
            { uci: 'e6e5', san: 'e5', note: 'The freeing break: the f6-bishop and the c8-bishop both come to life.' }
          ]
        },
        {
          id: 'orthodox',
          name: '6...Nbd7 7.Rc1: the Orthodox',
          kind: 'Alternative',
          summary: "Capablanca's freeing manoeuvre: ...dxc4 after Bd3, ...Nd5 to trade, then ...e5. Black waits for Bd3 so that White's bishop moves twice.",
          moves: [
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'a1c1', san: 'Rc1' },
            { uci: 'c7c6', san: 'c6', note: 'Supports d5 and prepares to meet Bd3 with ...dxc4.' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'd5c4', san: 'dxc4', note: 'Now the bishop must move a second time to recapture.' },
            { uci: 'd3c4', san: 'Bxc4' },
            { uci: 'f6d5', san: 'Nd5', note: 'Offers to trade two pairs of minor pieces.' },
            { uci: 'g5e7', san: 'Bxe7' },
            { uci: 'd8e7', san: 'Qxe7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd5c3', san: 'Nxc3', note: 'After 12.Rxc3 e5 the freeing break comes and the c8-bishop is free at last.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'white',
          title: 'The Elephant Trap',
          text: 'In the 4...Nbd7 move order, 5.cxd5 exd5 6.Nxd5?? loses a piece: 6...Nxd5 7.Bxd8 Bb4+ 8.Qd2 Bxd2+ 9.Kxd2 Kxd8. The pin on f6 is only relative.',
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
            'f8b4'
          ]
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Taking on c4 too early',
          text: 'In the Orthodox, Black waits for White to play Bd3 before ...dxc4, so the bishop has to move twice. Taking on c4 earlier hands White a free tempo for development.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Letting b4-b5 fix the c-pawn',
          text: 'After cxd5 exd5 White often pushes b4 and b5. If Black does not break with ...c5 in time, the c-pawn becomes a fixed target on a half-open file.'
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Forgetting the c8-bishop',
          text: 'The QGD is solid but slightly cramped. Every plan must free the c8-bishop: ...b6 and ...Bb7, ...dxc4 and ...e5, or ...c5. Without one of them Black drifts into passivity.'
        }
      ],
      transpositions: [
        {
          to: 'b-qgd-exchange',
          note: 'If White takes on d5 early, Black recaptures ...exd5 and the Carlsbad structure appears.'
        },
        { to: 'b-english-nimzo', note: '1.c4 Nf6 2.Nc3 e6 3.d4 d5 4.Bg5 Be7 reaches the same position.' }
      ],
      lessons: ['black-vs-d4-1', 'black-vs-d4-6', 'strategy-10', 'black-vs-d4-13']
    },
    {
      id: 'b-qgd-exchange',
      side: 'black',
      group: 'vs-d4',
      family: "Queen's Gambit Declined",
      familyId: 'bf-qgd',
      name: "Queen's Gambit Declined: Exchange Variation (Carlsbad structure)",
      short: 'Exchange Variation',
      aliases: ['QGD Exchange'],
      eco: 'D35',
      moves: '1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.cxd5 exd5',
      defining: ['d2d4', 'd7d5', 'c2c4', 'e7e6', 'b1c3', 'g8f6', 'c4d5', 'e6d5'],
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 15,
      summary: "White trades on d5 early to fix Black's centre; Black gets free development and a sound pawn chain to work with.",
      idea: "The Carlsbad structure: Black's pawns on c6 and d5 face White's d4 and e3. White's usual plan is the minority attack, pushing b4-b5 to leave Black a weak c-pawn. Black should not wait passively: develop with ...Be7, ...Nbd7, ...Re8 and ...O-O, reroute the knight via f8 to g6 or e6, use the e4 square, and look for play on the kingside.",
      plans: {
        white: [
          'Minority attack: Rb1, b4-b5 and bxc6 to leave Black a weak c-pawn',
          'Play Nge2 and f3 to prepare e3-e4 in the centre'
        ],
        black: [
          'Develop quickly, then ...Re8 and ...Nf8-g6 or -e6 to support the kingside',
          'Use the e4 outpost with ...Ne4 and trade light-squared bishops with ...Bf5 when allowed',
          "Meet b4-b5 with ...cxb5 or by letting White take on c6, so that White's queenside pawns also become targets"
        ]
      },
      responses: [
        {
          moves: '5.Bg5 c6 6.Qc2 Be7 7.e3 Nbd7 8.Bd3 O-O',
          name: 'Classical set-up',
          note: 'Black follows with ...Re8, ...Nf8 and ...Ng6 or ...Ne4; ...h6 can question the bishop first.',
          line: 'qc2'
        },
        {
          moves: '5.Bf4 c6 6.e3 Bf5',
          name: 'Bf4 line',
          note: "With no pin on f6, Black develops the light-squared bishop at once, the bishop that is usually Black's problem piece.",
          line: 'bf4'
        },
        {
          moves: '5.Nf3 c6 6.Bg5 Be7',
          name: 'Nf3 set-up',
          note: 'Same structure; Black develops calmly and can aim for ...Bf5 or ...Ne4 once castled.'
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
          { uci: 'c4d5', san: 'cxd5' },
          { uci: 'e6d5', san: 'exd5', note: "Recapture with the pawn: the c8-bishop's diagonal is now open." },
          { uci: 'c1g5', san: 'Bg5' },
          { uci: 'c7c6', san: 'c6', note: 'Supports d5 and gives the queen the a5 and b6 squares.' },
          { uci: 'd1c2', san: 'Qc2', note: 'Stops ...Bf5 for the moment, since the queen covers f5.' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'b8d7', san: 'Nbd7' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'g1e2', san: 'Nge2', note: 'The Ne2 set-up keeps f3 free for f2-f3 and a later e3-e4.' },
          { uci: 'f8e8', san: 'Re8', note: '...Nf8 comes next, heading for g6 to guard the kingside.' }
        ]
      },
      lines: [
        {
          id: 'qc2',
          name: '5.Bg5 c6 6.Qc2 and Nge2',
          kind: 'Main line',
          summary: 'White prepares f3 and e4 with the knight on e2. Black castles, plays ...Re8 and reroutes the d7-knight to f8 and g6 to guard the kingside.',
          moves: [
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd1c2', san: 'Qc2', note: 'Stops ...Bf5 for the moment, since the queen covers f5.' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'g1e2', san: 'Nge2', note: 'Keeps f3 free for f2-f3 and a later e3-e4.' },
            { uci: 'f8e8', san: 'Re8' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd7f8', san: 'Nf8', note: 'The knight heads for g6, where it guards the kingside and eyes e5 and f4.' }
          ]
        },
        {
          id: 'minority',
          name: '8.Nf3: the minority attack',
          kind: 'Alternative',
          summary: 'With Nf3 and Rab1 White prepares b4-b5 to leave Black a weak c-pawn. Black answers with ...a6 so that b5 can be met by ...axb5, and plays for the kingside.',
          moves: [
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd1c2', san: 'Qc2' },
            { uci: 'f8e8', san: 'Re8' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd7f8', san: 'Nf8', note: 'Heading for g6, where the knight guards the kingside.' },
            { uci: 'a1b1', san: 'Rab1', note: 'The rook supports b2-b4-b5, the minority attack. Black answers with ...Ng6 and ...a6, so that b5 can be met by ...axb5 without leaving a weak c6-pawn.' }
          ]
        },
        {
          id: 'bf4',
          name: '5.Bf4: no pin on f6',
          kind: 'Alternative',
          summary: "Without the pin, Black develops the light-squared bishop at once and offers to trade it for White's good bishop: the main problem of the QGD is solved.",
          moves: [
            { uci: 'c1f4', san: 'Bf4' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'c8f5', san: 'Bf5', note: 'The usual problem bishop comes out before ...e6 could block it.' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'f5d3', san: 'Bxd3', note: 'Trading light-squared bishops leaves Black with no bad bishop.' },
            { uci: 'd1d3', san: 'Qxd3' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'black',
          title: 'Passive defence against the minority attack',
          text: 'If Black only waits, b4-b5 and bxc6 leave a weak c-pawn or a backward pawn on c6. Prepare ...a6, or answer b5 with ...cxb5, and keep pieces active on the kingside.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Ignoring the f3 and e4 plan',
          text: 'With Nge2 and f3 White prepares e3-e4, gaining central space and opening lines against the king. Keep pieces ready to hit e4, for example ...Ng6, ...Bd6 and ...c5.'
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Leaving the knight on d7',
          text: 'The d7-knight blocks the c8-bishop and does little for the kingside. The standard reroute ...Re8, ...Nf8 and ...Ng6 or ...Ne6 improves both pieces.'
        }
      ],
      transpositions: [
        {
          to: 'b-qgd-orthodox',
          note: 'Arises from the classical QGD whenever White takes on d5 and Black recaptures with the e-pawn.'
        }
      ],
      lessons: ['black-vs-d4-1', 'strategy-9']
    },
    {
      id: 'b-qgd-lasker',
      side: 'black',
      group: 'vs-d4',
      family: "Queen's Gambit Declined",
      familyId: 'bf-qgd',
      name: "Queen's Gambit Declined: Lasker Defence",
      short: 'Lasker Defence',
      aliases: ["Lasker's Defence"],
      parent: 'b-qgd-orthodox',
      eco: 'D56',
      moves: '1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Bg5 Be7 5.e3 O-O 6.Nf3 h6 7.Bh4 Ne4',
      defining: [
        'd2d4',
        'd7d5',
        'c2c4',
        'e7e6',
        'b1c3',
        'g8f6',
        'c1g5',
        'f8e7',
        'e2e3',
        'e8g8',
        'g1f3',
        'h7h6',
        'g5h4',
        'f6e4'
      ],
      difficulty: 'Intermediate',
      style: 'Solid',
      minutes: 12,
      summary: 'Black trades two pairs of minor pieces with ...Ne4 to free the slightly cramped QGD position; very solid and easy to learn.',
      idea: "7...Ne4 offers exchanges: after 8.Bxe7 Qxe7 the knight trades itself on c3 and Black's position breathes. Black then frees the c8-bishop with ...dxc4 and ...e5, or with ...b6, ...Bb7 and ...c5. White keeps a small central initiative, so Black must not simply wait after the trades.",
      plans: {
        white: [
          'Keep a small space advantage with Rc1, Be2 or Bd3 and castling',
          'Exchange on d5 and press with Qb3 and c4 against the d5-pawn'
        ],
        black: [
          'Trade with ...Ne4, ...Qxe7 and ...Nxc3',
          'Free the c8-bishop with ...dxc4 and ...e5, or ...b6 and ...Bb7',
          'Finish development with ...Nd7 or ...Nc6 and use the e-file or the c-file'
        ]
      },
      responses: [
        {
          moves: '8.Bxe7 Qxe7 9.Rc1 c6',
          name: '9.Rc1',
          note: 'After 10.Be2 Nxc3 11.Rxc3 dxc4 12.Bxc4 Nd7 13.O-O b6 Black prepares ...Bb7 and ...c5.',
          line: 'rc1'
        },
        {
          moves: '8.Bxe7 Qxe7 9.cxd5 Nxc3 10.bxc3 exd5',
          name: '9.cxd5',
          note: 'White gets the half-open b-file; after 11.Qb3 Rd8 12.c4 dxc4 13.Bxc4 Nc6 Black develops freely.',
          line: 'cxd5'
        },
        {
          moves: '8.Bxe7 Qxe7 9.Qc2 Nxc3 10.Qxc3',
          name: '9.Qc2',
          note: 'Black takes on c4 and fianchettoes the c8-bishop.',
          line: 'qc2'
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
          { uci: 'c1g5', san: 'Bg5' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'h7h6', san: 'h6', note: 'First ask the bishop.' },
          { uci: 'g5h4', san: 'Bh4' },
          { uci: 'f6e4', san: 'Ne4', note: "Lasker's idea: offer to trade a bishop and a knight." },
          { uci: 'h4e7', san: 'Bxe7' },
          { uci: 'd8e7', san: 'Qxe7', note: 'The queen recaptures and keeps an eye on b4 and c5.' },
          { uci: 'a1c1', san: 'Rc1' },
          { uci: 'c7c6', san: 'c6', note: 'Supports d5 before the knight trades on c3.' }
        ]
      },
      lines: [
        {
          id: 'rc1',
          name: '9.Rc1 c6 10.Be2',
          kind: 'Main line',
          summary: 'Black trades on c3, takes on c4 and plays ...Nd7 and ...b6: the c8-bishop will come to b7 and ...c5 or ...e5 will free the game.',
          moves: [
            { uci: 'h4e7', san: 'Bxe7' },
            { uci: 'd8e7', san: 'Qxe7' },
            { uci: 'a1c1', san: 'Rc1' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e4c3', san: 'Nxc3', note: 'The second pair of minor pieces comes off.' },
            { uci: 'c1c3', san: 'Rxc3' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'e2c4', san: 'Bxc4' },
            { uci: 'b8d7', san: 'Nd7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b7b6', san: 'b6', note: 'Prepares ...Bb7 and ...c5; the cramp is gone.' }
          ]
        },
        {
          id: 'cxd5',
          name: '9.cxd5: the half-open b-file',
          kind: 'Alternative',
          summary: 'White recaptures towards the centre and uses the b-file. Black answers Qb3 with ...Rd8 and develops the c8-bishop after ...dxc4 and ...Nc6.',
          moves: [
            { uci: 'h4e7', san: 'Bxe7' },
            { uci: 'd8e7', san: 'Qxe7' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'e4c3', san: 'Nxc3' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'e6d5', san: 'exd5', note: "The c8-bishop's diagonal is open." },
            { uci: 'd1b3', san: 'Qb3' },
            { uci: 'f8d8', san: 'Rd8' },
            { uci: 'c3c4', san: 'c4' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'f1c4', san: 'Bxc4' },
            { uci: 'b8c6', san: 'Nc6', note: 'Black develops freely; ...Na5 or ...Bg4 can follow.' }
          ]
        },
        {
          id: 'qc2',
          name: '9.Qc2 Nxc3 10.Qxc3',
          kind: 'Sideline',
          summary: 'With the queen on c3, Black takes on c4 and fianchettoes the c8-bishop at once.',
          moves: [
            { uci: 'h4e7', san: 'Bxe7' },
            { uci: 'd8e7', san: 'Qxe7' },
            { uci: 'd1c2', san: 'Qc2' },
            { uci: 'e4c3', san: 'Nxc3' },
            { uci: 'c2c3', san: 'Qxc3' },
            { uci: 'd5c4', san: 'dxc4', note: "Opens the position for Black's bishop." },
            { uci: 'f1c4', san: 'Bxc4' },
            { uci: 'b7b6', san: 'b6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c8b7', san: 'Bb7', note: 'The problem bishop is now on the long diagonal.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Trading and then waiting',
          text: 'The exchanges solve only part of the problem. If Black does not follow up with ...dxc4 and ...e5, or ...b6 and ...c5, the c8-bishop stays passive and White keeps a pleasant edge.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Few winning chances',
          text: 'With many pieces exchanged, the Lasker is very solid but rarely unbalanced. If you need to win with Black, the Tartakower or Ragozin keeps more tension.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-d4-13'],
      uncertain: 'The 9.Qc2 line is shown as sensible development for both sides rather than a precise main line.'
    },
    {
      id: 'b-qgd-ragozin',
      side: 'black',
      group: 'vs-d4',
      family: "Queen's Gambit Declined",
      familyId: 'bf-qgd',
      name: "Queen's Gambit Declined: Ragozin Defence",
      short: 'Ragozin Defence',
      aliases: ['Ragozin Variation', 'Ragozin System'],
      eco: 'D38-D39',
      moves: '1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Nf3 Bb4',
      defining: ['d2d4', 'd7d5', 'c2c4', 'e7e6', 'b1c3', 'g8f6', 'g1f3', 'f8b4'],
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 15,
      summary: 'A Nimzo-Indian pin inside the QGD: ...Bb4 fights for e4 and gives Black active, flexible piece play.',
      idea: "4...Bb4 pins the c3-knight as in the Nimzo-Indian. Against 5.Bg5 Black often takes the bishop pair with ...h6 and ...Qxf6, then frees the game with ...dxc4 and ...c5. Against 5.cxd5 exd5 the Carlsbad structure appears, but with Black's bishop actively placed on b4. Quick development and the ...c5 break are Black's themes.",
      plans: {
        white: [
          'Pin with Bg5, then build with e3 and Rc1 and recapture on c4 with the bishop',
          'Exchange on d5 and play Carlsbad plans with e3, Bd3 and a minority attack or e4'
        ],
        black: [
          'Win the bishop pair with ...h6 and ...Qxf6, then castle',
          'Free the game with ...dxc4 and ...c5',
          'In the Carlsbad structure, use the b4-bishop against c3 and develop ...Bf5 or ...Be6'
        ]
      },
      responses: [
        {
          moves: '5.Bg5 h6 6.Bxf6 Qxf6 7.e3 O-O 8.Rc1 dxc4 9.Bxc4 c5',
          name: 'Main line 5.Bg5',
          note: 'Black gives up the centre for open lines and the bishop pair; 10.O-O cxd4 often leaves White with an isolated d-pawn.',
          line: 'bg5'
        },
        {
          moves: '5.cxd5 exd5 6.Bg5 h6 7.Bxf6 Qxf6 8.Qa4+ Nc6',
          name: 'Exchange 5.cxd5',
          note: 'The check picks up nothing: the c6-knight guards the b4-bishop. Black castles and develops ...Be6.',
          line: 'cxd5'
        },
        {
          moves: '5.e3 O-O 6.Bd3 c5',
          name: '5.e3',
          note: 'Transposes to the Rubinstein Nimzo-Indian main line.',
          line: 'e3'
        },
        {
          moves: '5.Qa4+ Nc6 6.e3 O-O',
          name: '5.Qa4+',
          note: 'The check provokes ...Nc6, which blocks the c-pawn; Black castles and later plays ...Bd7 or ...a6.'
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
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'f8b4', san: 'Bb4', note: 'The Nimzo pin in a QGD.' },
          { uci: 'c1g5', san: 'Bg5' },
          { uci: 'h7h6', san: 'h6', note: 'Asks the bishop to decide.' },
          { uci: 'g5f6', san: 'Bxf6' },
          { uci: 'd8f6', san: 'Qxf6', note: 'Black has the bishop pair.' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'a1c1', san: 'Rc1' },
          { uci: 'd5c4', san: 'dxc4', note: 'Gives up the centre for open lines.' },
          { uci: 'f1c4', san: 'Bxc4' },
          { uci: 'c7c5', san: 'c5', note: 'The thematic break against d4.' }
        ]
      },
      lines: [
        {
          id: 'bg5',
          name: '5.Bg5 h6 6.Bxf6 Qxf6',
          kind: 'Main line',
          summary: 'Black takes the bishop pair, castles, takes on c4 and strikes with ...c5. White often gets an isolated d-pawn in return for activity.',
          moves: [
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'd8f6', san: 'Qxf6', note: 'The queen is active on f6 and Black owns the bishop pair.' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'a1c1', san: 'Rc1' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'f1c4', san: 'Bxc4' },
            { uci: 'c7c5', san: 'c5', note: 'Hits d4 and opens the c-file.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c5d4', san: 'cxd4', note: 'After exd4 White has an isolated d-pawn and active pieces; Black blockades and develops ...Nc6 and ...Bd7.' }
          ]
        },
        {
          id: 'cxd5',
          name: '5.cxd5 exd5: Carlsbad with ...Bb4',
          kind: 'Alternative',
          summary: 'A Carlsbad structure in which the b4-bishop is active. After Qa4+ the c6-knight guards b4, and Black castles and develops ...Be6.',
          moves: [
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'd8f6', san: 'Qxf6' },
            { uci: 'd1a4', san: 'Qa4+', note: 'Checks and attacks the b4-bishop.' },
            { uci: 'b8c6', san: 'Nc6', note: 'Blocks the check and guards b4.' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e8g8', san: 'O-O', note: 'Black is fully developed next with ...Be6 and ...a6 or ...Rfe8.' }
          ]
        },
        {
          id: 'e3',
          name: '5.e3: into the Nimzo-Indian',
          kind: 'Alternative',
          summary: 'A quiet move that transposes to the Rubinstein Nimzo-Indian main line: ...Bxc3, ...dxc4 and ...Qc7 with ...e5 to follow.',
          moves: [
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'c7c5', san: 'c5', note: 'The same position as the Nimzo-Indian Rubinstein main line.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'b4c3', san: 'Bxc3' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'd3c4', san: 'Bxc4' },
            { uci: 'd8c7', san: 'Qc7', note: 'Prepares ...e5.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'A loose bishop on b4',
          text: 'The b4-bishop is often attacked by Qa4+ or Qb3. Make sure it is defended or can retreat; after Qa4+ the knight block on c6 keeps everything together.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Giving the bishop pair back',
          text: "After ...Qxf6 Black owns the bishop pair. Exchanging on c3 without a good reason hands it back and weakens the dark squares around Black's king."
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Sharp lines after 5.Bg5 dxc4',
          text: 'Taking on c4 before ...h6 invites 6.e4 and very sharp, heavily analysed positions. If you want a calmer game, play 5...h6 first.'
        }
      ],
      transpositions: [
        {
          to: 'b-nimzo',
          note: '5.e3 O-O 6.Bd3 c5 is the same position as 4.e3 O-O 5.Bd3 d5 6.Nf3 c5 in the Rubinstein Nimzo-Indian.'
        }
      ],
      lessons: ['black-vs-d4-14', 'strategy-9'],
      uncertain: 'In the 5.Bg5 main line White also has 6.Bh4 instead of 6.Bxf6; that sharper choice is not covered here.'
    },
    {
      id: 'b-slav-main',
      side: 'black',
      group: 'vs-d4',
      family: 'Slav Defence',
      familyId: 'bf-slav',
      name: 'Slav Defence: Main line with ...dxc4 and ...Bf5',
      short: 'Main line (4...dxc4 5.a4 Bf5)',
      aliases: ['Czech Variation', 'Czech Slav'],
      eco: 'D17',
      moves: '1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 dxc4 5.a4 Bf5',
      defining: ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'b1c3', 'd5c4', 'a2a4', 'c8f5'],
      difficulty: 'Intermediate',
      style: 'Solid',
      minutes: 15,
      summary: 'Support d5 with the c-pawn so the light-squared bishop can come out before ...e6; solid and very popular at every level.',
      idea: "Black takes on c4 only once the knight is on c3, and after 5.a4 (stopping ...b5) develops the bishop to f5. Then ...e6, ...Bb4 and ...O-O give a healthy position with no bad bishop. The c4 pawn is returned; Black's aim is comfortable development and a later ...c5 or ...e5 to free the centre.",
      plans: {
        white: [
          'Regain c4 with e3 and Bxc4, or with the sharper Ne5 and f3 to build e4',
          'Use the extra central space to push e4 when possible'
        ],
        black: [
          'Develop ...Bf5, ...e6, ...Bb4 and castle',
          'Use the b4 square, weakened by a4, for a bishop or knight',
          'Free the centre later with ...c5 or ...e5'
        ]
      },
      responses: [
        {
          moves: '6.e3 e6 7.Bxc4 Bb4 8.O-O Nbd7',
          name: 'Dutch Variation',
          note: 'The main line. Black castles next and answers e4 with ...Bg6, keeping a sound position.',
          line: 'dutch'
        },
        {
          moves: '6.Ne5 Nbd7 7.Nxc4 Qc7',
          name: 'Ne5 with Nxc4',
          note: 'White regains the pawn with the knight. Black prepares ...e5 to free the centre; this is a major main line.',
          line: 'ne5'
        },
        {
          moves: '5.e3 b5',
          name: 'No a4',
          note: 'If White omits a4, 5...b5 holds the pawn for now; after 6.a4 b4 7.Na2 e6 8.Bxc4 White regains it, but Black has gained queenside space.'
        },
        {
          moves: '4.e3 Bf5',
          name: 'Quiet 4.e3',
          note: 'Without Nc3, taking on c4 is less attractive. Black develops ...Bf5 and ...e6 straight away; watch b7 if White plays Qb3.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'c7c6', san: 'c6', note: 'The Slav: d5 is supported without blocking the c8-bishop.' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd5c4', san: 'dxc4', note: 'Now that the knight is on c3, Black takes and threatens ...b5 to keep the pawn.' },
          { uci: 'a2a4', san: 'a4', note: 'Stops ...b5, but weakens the b4 square.' },
          { uci: 'c8f5', san: 'Bf5', note: 'The bishop comes out before ...e6 closes its diagonal.' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'f1c4', san: 'Bxc4' },
          { uci: 'f8b4', san: 'Bb4', note: 'Uses b4: the pin restrains e4.' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'b8d7', san: 'Nbd7' },
          { uci: 'd1e2', san: 'Qe2' },
          { uci: 'e8g8', san: 'O-O', note: 'Fully developed. If e4 comes, the bishop drops back to g6, and ...c5 or ...e5 follows.' }
        ]
      },
      lines: [
        {
          id: 'dutch',
          name: '6.e3: the Dutch Variation',
          kind: 'Main line',
          summary: 'White regains c4 with the bishop; Black pins with ...Bb4, castles and retreats the bishop to g6 when e4 comes. A sound position with no bad bishop.',
          moves: [
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1c4', san: 'Bxc4' },
            { uci: 'f8b4', san: 'Bb4', note: 'Uses the b4 square that a4 weakened, and restrains e4.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'd1e2', san: 'Qe2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e3e4', san: 'e4' },
            { uci: 'f5g6', san: 'Bg6', note: 'The bishop steps back and keeps watching e4; ...Bh5, ...e5 or ...c5 can follow.' }
          ]
        },
        {
          id: 'ne5',
          name: '6.Ne5: regain c4 with the knight',
          kind: 'Alternative',
          summary: 'White wins c4 back with the knight and fianchettoes. Black must free the centre quickly with ...e5 before White builds e4.',
          moves: [
            { uci: 'f3e5', san: 'Ne5' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'e5c4', san: 'Nxc4' },
            { uci: 'd8c7', san: 'Qc7', note: 'Prepares ...e5 and covers the e5 square.' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'e7e5', san: 'e5', note: 'Black strikes before White can build e4.' },
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'd7e5', san: 'Nxe5' },
            { uci: 'c1f4', san: 'Bf4' },
            { uci: 'f6d7', san: 'Nfd7', note: 'Guards e5 again; sharp, concrete theory follows.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Forgetting b7 after ...Bf5',
          text: 'Once the bishop leaves c8, b7 is defended only by the bishop itself from far away. Watch for Qb3 or Qa4 ideas and cover b7 with ...Qb6 or ...Qc7 when needed.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Allowing e2-e4 for free',
          text: 'If Black develops slowly in the Ne5 lines, White plays f3 and e4 with a big centre, and the f5-bishop loses its best diagonal. Strike with ...e5 or ...c5 in time.'
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Clinging to c4 after a4',
          text: 'Once White has played a4, ...b5 to keep the pawn usually fails tactically. The c4-pawn is meant to be returned; use the time for development and the b4 square.'
        }
      ],
      transpositions: [
        { to: 'b-semi-slav', note: '4...e6 instead of 4...dxc4 leads to the Semi-Slav.' },
        { to: 'b-reti-slav', note: '1.Nf3 d5 2.c4 c6 3.d4 Nf6 4.Nc3 reaches this line.' }
      ],
      lessons: ['black-vs-d4-2', 'black-vs-flank-7']
    },
    {
      id: 'b-semi-slav',
      side: 'black',
      group: 'vs-d4',
      family: 'Slav Defence',
      familyId: 'bf-slav',
      name: 'Semi-Slav Defence: Meran approach',
      short: 'Semi-Slav (Meran approach)',
      aliases: ['Semi-Slav', 'Meran Variation'],
      eco: 'D45',
      moves: '1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 e6',
      defining: ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'b1c3', 'e7e6'],
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 18,
      summary: 'Black combines ...c6 and ...e6: a sturdy triangle on d5 that can turn very sharp after ...dxc4 and ...b5.',
      idea: "The Semi-Slav gives up early bishop development for a granite centre and dynamic options. In the Meran (5.e3), Black takes on c4 once White's bishop has moved, gains time with ...b5, develops ...Bb7 and breaks with ...c5. Against 5.Bg5 the solid Moscow (...h6 and ...Qxf6) gives Black the bishop pair.",
      plans: {
        white: [
          'Develop with e3 and Bd3, then push e4 in the centre',
          'Against ...b5, hit the queenside with a4 or open the centre with e4-e5'
        ],
        black: [
          'After Bd3, play ...dxc4, ...b5, ...Bb7 and break with ...c5',
          'Against Bg5, take the bishop pair with ...h6 and ...Qxf6 (Moscow Variation)',
          'Keep ...e5 in reserve as a second freeing break'
        ]
      },
      responses: [
        {
          moves: '5.e3 Nbd7 6.Bd3 dxc4 7.Bxc4 b5',
          name: 'Meran',
          note: 'Black takes on c4 only after Bd3, so the bishop moves twice; then ...Bb7, ...a6 and ...c5.',
          line: 'meran'
        },
        {
          moves: '5.Bg5 h6 6.Bxf6 Qxf6',
          name: 'Moscow',
          note: 'Black gets the bishop pair and a solid position; ...Nd7, ...dxc4 and ...g6 or ...Bd6 follow. 6.Bh4 dxc4 is much sharper.',
          line: 'moscow'
        },
        {
          moves: '5.cxd5 exd5',
          name: 'Exchange',
          note: 'A Carlsbad structure. Black develops ...Be7 or ...Bd6 and plays ...Bf5 when allowed.',
          line: 'exchange'
        },
        {
          moves: '5.Qb3 dxc4 6.Qxc4 b5',
          name: 'Early queen',
          note: 'Black takes on c4 and gains time on the queen with ...b5, then ...Bb7.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'e7e6', san: 'e6', note: 'The Semi-Slav triangle: d5 is supported twice.' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'b8d7', san: 'Nbd7' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'd5c4', san: 'dxc4', note: 'Black waits for Bd3, so the bishop needs a second move to recapture.' },
          { uci: 'd3c4', san: 'Bxc4' },
          { uci: 'b7b5', san: 'b5', note: 'Gains time on the bishop and prepares ...Bb7 and ...c5.' },
          { uci: 'c4d3', san: 'Bd3' },
          { uci: 'c8b7', san: 'Bb7' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'a7a6', san: 'a6', note: 'Prepares ...c5 and supports b5; after 10.e4 Black strikes with ...c5.' }
        ]
      },
      lines: [
        {
          id: 'meran',
          name: '5.e3: the Meran',
          kind: 'Main line',
          summary: 'Black takes on c4 only after Bd3, gains time with ...b5 and breaks with ...c5 when White pushes e4.',
          moves: [
            { uci: 'e2e3', san: 'e3' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'd5c4', san: 'dxc4', note: 'Black waits for Bd3, so the bishop must move again to recapture.' },
            { uci: 'd3c4', san: 'Bxc4' },
            { uci: 'b7b5', san: 'b5', note: 'Gains time on the bishop and prepares ...Bb7.' },
            { uci: 'c4d3', san: 'Bd3' },
            { uci: 'c8b7', san: 'Bb7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'e3e4', san: 'e4' },
            { uci: 'c6c5', san: 'c5', note: "The key break: it hits d4 and opens the b7-bishop's diagonal towards e4." }
          ]
        },
        {
          id: 'moscow',
          name: '5.Bg5 h6 6.Bxf6: the Moscow',
          kind: 'Alternative',
          summary: 'Black takes the bishop pair with ...Qxf6, then plays ...Nd7, ...dxc4 and ...g6 with ...Bg7. Solid, with long-term chances for the bishops.',
          moves: [
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'h7h6', san: 'h6', note: 'Asks the bishop at once.' },
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'd8f6', san: 'Qxf6', note: 'Black has the bishop pair; the queen is well placed on f6.' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'b8d7', san: 'Nd7' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'd3c4', san: 'Bxc4' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8g7', san: 'Bg7', note: 'The fianchetto supports a later ...e5.' }
          ]
        },
        {
          id: 'botvinnik',
          name: '5.Bg5 dxc4: the Botvinnik',
          kind: 'Sharp try',
          summary: 'One of the sharpest lines in chess: Black keeps the c4-pawn and lets White sacrifice a knight. Play it only after serious study.',
          moves: [
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'b7b5', san: 'b5', note: 'Holds the extra pawn.' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5h4', san: 'Bh4' },
            { uci: 'g7g5', san: 'g5' },
            { uci: 'f3g5', san: 'Nxg5' },
            { uci: 'h6g5', san: 'hxg5', note: 'White has sacrificed a knight for an attack.' },
            { uci: 'h4g5', san: 'Bxg5' },
            { uci: 'b8d7', san: 'Nbd7', note: 'Heavily analysed theory follows; Black is not worse with exact play.' }
          ]
        },
        {
          id: 'exchange',
          name: '5.cxd5 exd5: Carlsbad structure',
          kind: 'Sideline',
          summary: "A Carlsbad structure in which Black can develop the light-squared bishop actively and trade it for White's good bishop.",
          moves: [
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'c8f5', san: 'Bf5', note: 'Without Qc2 White cannot stop the bishop coming out.' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'f5d3', san: 'Bxd3' },
            { uci: 'd1d3', san: 'Qxd3' },
            { uci: 'b8d7', san: 'Nbd7', note: "A healthy QGD Exchange structure without Black's usual bad bishop." }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Taking on c4 before Bd3',
          text: 'In the Meran, ...dxc4 comes only after White has played Bd3, so the bishop needs two moves to recapture. Taking earlier gives White that tempo back.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Wandering into the Botvinnik',
          text: 'After 5.Bg5, 5...dxc4 leads to the Botvinnik and 5...h6 6.Bh4 dxc4 to the Anti-Moscow, both very sharp. If you have not studied them, 5...h6 6.Bxf6 Qxf6 or 5...Nbd7 are calmer.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Missing the moment for ...c5',
          text: 'After ...b5 and ...Bb7 Black depends on the ...c5 break. If White gets e4-e5 in first and Black has not struck, the queenside pawns can become targets.'
        }
      ],
      transpositions: [
        {
          to: 'b-slav-main',
          note: 'Both start 1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3; the choice is 4...dxc4 or 4...e6.'
        },
        { to: 'b-reti-slav', note: '1.Nf3 d5 2.c4 c6 3.e3 Nf6 4.Nc3 e6 5.d4 transposes.' }
      ],
      lessons: ['black-vs-d4-2', 'black-vs-d4-15'],
      uncertain: 'The Botvinnik line is shown only as an illustration of its main idea; its theory runs much deeper.'
    },
    {
      id: 'b-slav-exchange',
      side: 'black',
      group: 'vs-d4',
      family: 'Slav Defence',
      familyId: 'bf-slav',
      name: 'Slav Defence: Exchange Variation',
      short: 'Exchange Variation',
      aliases: ['Exchange Slav'],
      eco: 'D10, D13',
      moves: '1.d4 d5 2.c4 c6 3.cxd5 cxd5',
      defining: ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'c4d5', 'c6d5'],
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 12,
      summary: 'White exchanges on d5 for a symmetrical position with an open c-file; Black must develop actively and not copy White for too long.',
      idea: "The structure is symmetrical, so the side that develops first and uses the open c-file is slightly better. Black develops ...Nf6, ...Nc6 and ...Bf5 before ...e6, as in the Slav proper, then ...Bb4, ...Bd6 or ...Be7, and castles. The danger points are b7, when White's queen comes to b3 or a4, and c7, when a knight reaches b5 with a bishop on f4.",
      plans: {
        white: [
          'Develop Nc3, Bf4, e3 and Nf3, then use the c-file with Rc1',
          "Hit b7 with Qb3 or pin with Bb5 and Qa4 once Black's bishop has left c8"
        ],
        black: [
          'Develop ...Nf6, ...Nc6 and ...Bf5, then ...e6 and ...Bb4 or ...Bd6',
          'Contest the c-file with ...Rc8',
          "Use ...a6 to keep White's pieces off b5"
        ]
      },
      responses: [
        {
          moves: '4.Nc3 Nf6 5.Bf4 Nc6 6.e3 Bf5 7.Nf3 e6',
          name: 'Main line',
          note: 'After 8.Bb5 Black unpins with ...Nd7 and contests the c-file with ...Rc8.',
          line: 'main'
        },
        {
          moves: '4.Nc3 Nf6 5.Bf4 Nc6 6.e3 a6',
          name: '6...a6',
          note: "Black keeps White's pieces off b5 before developing the bishop.",
          line: 'a6'
        },
        {
          moves: '4.Bf4 Nc6 5.e3 Nf6 6.Nc3 Bf5',
          name: 'Early 4.Bf4',
          note: 'Usually transposes to the main line.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'c4d5', san: 'cxd5' },
          { uci: 'c6d5', san: 'cxd5', note: 'A symmetrical structure with an open c-file.' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c1f4', san: 'Bf4' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'c8f5', san: 'Bf5', note: 'The bishop comes out before ...e6, the Slav idea.' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'f1b5', san: 'Bb5' },
          { uci: 'f6d7', san: 'Nd7', note: 'Unpins and prepares ...Rc8 or ...Qb6.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '5.Bf4 Nc6 6.e3 Bf5 7.Nf3 e6 8.Bb5',
          kind: 'Main line',
          summary: 'White pins the c6-knight; Black unpins with ...Nd7 and fights for the c-file with ...Rc8. Equal, but Black must stay alert to Ne5 and Qa4 ideas.',
          moves: [
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c1f4', san: 'Bf4' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'c8f5', san: 'Bf5', note: 'Develops outside the pawn chain.' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1b5', san: 'Bb5' },
            { uci: 'f6d7', san: 'Nd7', note: 'Prepares ...Rc8 and keeps Ne5 under control.' },
            { uci: 'd1a4', san: 'Qa4' },
            { uci: 'a8c8', san: 'Rc8', note: 'Defends c6 a second time and contests the c-file.' }
          ]
        },
        {
          id: 'a6',
          name: '6...a6: no entry on b5',
          kind: 'Alternative',
          summary: 'Black spends a move on ...a6 so that Bb5 and Nb5 are never possible, then develops the bishop to g4.',
          moves: [
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c1f4', san: 'Bf4' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'a7a6', san: 'a6', note: "Takes b5 away from White's bishop and knight." },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c8g4', san: 'Bg4', note: 'Pins the f3-knight, which controls e5.' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e7e6', san: 'e6', note: 'Black develops ...Bd6 or ...Be7 next with a solid position.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Copying White to the end',
          text: 'In a symmetrical position White moves first. Mirroring every move can let White use checks and pins first, such as Bb5 with Qa4 or Ne5. Break the symmetry with ...a6, ...Rc8 or ...Nd7 in time.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Weak b7 and c7',
          text: 'After ...Bf5, Qb3 hits b7, and a knight on b5 with a bishop on f4 eyes c7. Check these squares every move, and use ...Qb6, ...a6 or ...Rc8 to cover them.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-d4-2'],
      uncertain: 'In the 6...a6 line, 7...Bg4 is one of several reasonable developing moves.'
    },
    {
      id: 'b-slav-chebanenko',
      side: 'black',
      group: 'vs-d4',
      family: 'Slav Defence',
      familyId: 'bf-slav',
      name: 'Slav Defence: Chebanenko Variation (4...a6)',
      short: 'Chebanenko Variation',
      aliases: ['...a6 Slav', 'Chebanenko Slav'],
      eco: 'D15',
      moves: '1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 a6',
      defining: ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'b1c3', 'a7a6'],
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 14,
      summary: 'A useful waiting move: ...a6 prepares ...b5 and keeps ...Bf5, ...Bg4, ...e6 and ...dxc4 all in reserve.',
      idea: '4...a6 commits neither the c8-bishop nor the e-pawn. Its main point is ...b5: Black gains queenside space, or takes on c4 and holds the pawn for a while. White chooses between e3 (often with b3), c5 to fix the queenside, and a4 to stop ...b5, after which Black can switch to a Semi-Slav-type set-up with b4 weakened.',
      plans: {
        white: [
          'Close the queenside with c5, then prepare e4',
          'Stop ...b5 with a4 and develop quietly',
          'Meet ...b5 with b3 or c5 to keep the queenside under control'
        ],
        black: [
          'Gain space with ...b5, then develop ...Bg4 or ...Bf5',
          'Against c5, look for central play with ...Bf5, ...Nbd7 and ...e5 or ...Ne4',
          'Against a4, play ...e6 and use the b4 square'
        ]
      },
      responses: [
        {
          moves: '5.e3 b5 6.b3 Bg4',
          name: '5.e3',
          note: 'Black develops the bishop outside the chain; ...e6 and ...Nbd7 follow.',
          line: 'e3'
        },
        {
          moves: '5.c5 Bf5',
          name: '5.c5',
          note: 'White fixes the queenside; Black develops and looks for central counterplay.',
          line: 'c5'
        },
        {
          moves: '5.a4 e6',
          name: '5.a4',
          note: 'With ...b5 ruled out, Black plays a Semi-Slav-type set-up and can use the weakened b4 square.',
          line: 'a4'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'a7a6', san: 'a6', note: 'Prepares ...b5 without committing the bishop or the e-pawn.' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'b7b5', san: 'b5', note: 'Queenside space; ...dxc4 is now also a threat.' },
          { uci: 'b2b3', san: 'b3' },
          { uci: 'c8g4', san: 'Bg4', note: 'The bishop develops before ...e6.' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'b8d7', san: 'Nbd7', note: 'A compact set-up; ...Bd6 or ...Be7 and ...O-O follow.' }
        ]
      },
      lines: [
        {
          id: 'e3',
          name: '5.e3 b5 6.b3 Bg4',
          kind: 'Main line',
          summary: 'Black gains space, develops the bishop to g4 and only then plays ...e6. The structure is solid and the c8-bishop is not a problem piece.',
          moves: [
            { uci: 'e2e3', san: 'e3' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'b2b3', san: 'b3' },
            { uci: 'c8g4', san: 'Bg4', note: 'Develops outside the pawn chain and pins the f3-knight.' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'g4h5', san: 'Bh5', note: 'Keeps the pin; ...Bd6 and ...O-O come next.' }
          ]
        },
        {
          id: 'c5',
          name: '5.c5: the queenside bind',
          kind: 'Alternative',
          summary: "With c5 White removes Black's queenside play. Black develops and looks for central counterplay with ...Ne4 or a timely ...e5.",
          moves: [
            { uci: 'c4c5', san: 'c5' },
            { uci: 'c8f5', san: 'Bf5', note: 'Develops before ...e6.' },
            { uci: 'c1f4', san: 'Bf4' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O', note: 'The queenside is closed: Black looks for ...Ne4 or ...e5, White for b4-b5.' }
          ]
        },
        {
          id: 'a4',
          name: '5.a4: no ...b5',
          kind: 'Alternative',
          summary: 'White prevents ...b5 at the cost of the b4 square. Black plays ...e6 and, against Bg5, takes the bishop pair as in the Moscow Semi-Slav.',
          moves: [
            { uci: 'a2a4', san: 'a4' },
            { uci: 'e7e6', san: 'e6', note: 'A Semi-Slav-type set-up.' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'd8f6', san: 'Qxf6' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'b8d7', san: 'Nd7', note: 'Black has the bishop pair; ...Bb4 can use the square that a4 weakened.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Clinging to the c4-pawn',
          text: 'Taking on c4 and defending it with ...b5 works only when White cannot undermine it quickly with a4 and b3 or e4. Be ready to give the pawn back for development.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'The c5 squeeze',
          text: "After 5.c5, Black's queenside play disappears. If Black does not find central counterplay, White slowly prepares e4 or b4-b5 and Black is cramped."
        }
      ],
      transpositions: [],
      lessons: ['black-vs-d4-15'],
      uncertain: 'The 5.c5 and 5.a4 lines show typical set-ups; the exact move orders are less settled than in the main Slav lines.'
    },
    {
      id: 'b-qga',
      side: 'black',
      group: 'vs-d4',
      family: "Queen's Gambit Accepted",
      familyId: 'bf-qga',
      name: "Queen's Gambit Accepted: Classical with ...e6 and ...c5",
      short: 'Classical with ...e6 and ...c5',
      aliases: ['Classical QGA'],
      eco: 'D27',
      moves: '1.d4 d5 2.c4 dxc4',
      defining: ['d2d4', 'd7d5', 'c2c4', 'd5c4'],
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 12,
      summary: 'Black takes on c4 without trying to keep the pawn and uses the time for ...Nf6, ...e6 and an early ...c5.',
      idea: 'By capturing on c4 Black gives up the centre for a while but gains free development and the ...c5 break against d4. White usually recaptures with Bxc4; if White ends up with an isolated d-pawn, Black blockades on d5 and trades pieces. Trying to hold the extra pawn with ...b5 is a classic mistake.',
      plans: {
        white: [
          'Recapture on c4 quickly and use the centre, either with e4 or with an isolated d-pawn',
          "Push d4-d5 if Black's development lags"
        ],
        black: [
          'Develop ...Nf6 and ...e6, then strike with ...c5',
          'Gain time with ...a6 and ...b5 once the bishop has returned to c4',
          'Against an isolated d-pawn, blockade d5 and trade pieces'
        ]
      },
      responses: [
        {
          moves: '3.Nf3 Nf6 4.e3 e6 5.Bxc4 c5',
          name: 'Classical',
          note: 'The main line. After 6.O-O a6 Black follows with ...b5 or ...Nc6 and ...cxd4.',
          line: 'classical'
        },
        {
          moves: '3.e4 e5',
          name: 'Central 3.e4',
          note: 'The direct reply: after 4.Nf3 exd4 5.Bxc4 Nc6 Black develops quickly and pressures d4.',
          line: 'e4'
        },
        {
          moves: '3.e3 e5',
          name: 'Quiet 3.e3',
          note: 'Black hits d4 at once; after 4.Bxc4 exd4 5.exd4 the position is open and level.',
          line: 'e3'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'd5c4', san: 'dxc4', note: 'Black takes, but will not cling to the pawn.' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g8f6', san: 'Nf6', note: 'Stops e4 for the moment.' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'f1c4', san: 'Bxc4' },
          { uci: 'c7c5', san: 'c5', note: 'The key break, attacking d4.' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'a7a6', san: 'a6', note: 'Prepares ...b5 to gain time on the bishop.' },
          { uci: 'a2a4', san: 'a4', note: 'Stops ...b5, at the cost of the b4 square.' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'd1e2', san: 'Qe2' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'f1d1', san: 'Rd1' },
          { uci: 'f8e7', san: 'Be7', note: 'After 10.exd4 O-O White has an isolated d-pawn: Black blockades it with ...Nd5 or ...Nb4-d5.' }
        ]
      },
      lines: [
        {
          id: 'classical',
          name: '3.Nf3 Nf6 4.e3: the Classical',
          kind: 'Main line',
          summary: 'Black develops, hits d4 with ...c5 and gains time on the c4-bishop with ...a6 and ...b5, then ...Bb7 and ...Nbd7.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1c4', san: 'Bxc4' },
            { uci: 'c7c5', san: 'c5', note: 'The key break against d4.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'd1e2', san: 'Qe2' },
            { uci: 'b7b5', san: 'b5', note: 'Gains time on the bishop: the point of ...a6.' },
            { uci: 'c4b3', san: 'Bb3' },
            { uci: 'c8b7', san: 'Bb7', note: 'The bishop takes the long diagonal towards f3 and g2.' },
            { uci: 'f1d1', san: 'Rd1' },
            { uci: 'b8d7', san: 'Nbd7', note: 'Guards c5 and prepares ...Bd6 or ...Qc7.' }
          ]
        },
        {
          id: 'e4',
          name: '3.e4 e5: the central counter',
          kind: 'Alternative',
          summary: 'Against the big centre Black hits back with ...e5 and develops with tempo. Black is ready to give b7 for quick development if White grabs it.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5', note: 'Strikes at d4 before White can complete development.' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'f1c4', san: 'Bxc4' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c8e6', san: 'Be6', note: 'Challenges the c4-bishop.' },
            { uci: 'c4e6', san: 'Bxe6' },
            { uci: 'f7e6', san: 'fxe6' },
            { uci: 'd1b3', san: 'Qb3' },
            { uci: 'd8d7', san: 'Qd7', note: 'Defends e6; Black accepts that b7 may be attacked in return for a lead in development.' }
          ]
        },
        {
          id: 'e3',
          name: '3.e3 e5: the quiet line',
          kind: 'Sideline',
          summary: 'Black hits the centre at once. After the exchanges White has an isolated d-pawn; Black develops and blockades it.',
          moves: [
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'f1c4', san: 'Bxc4' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'e3d4', san: 'exd4' },
            { uci: 'g8f6', san: 'Nf6', note: 'White has an isolated d-pawn: Black aims to blockade d5.' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8e7', san: 'Be7', note: 'Simple development; ...Nc6 and ...Bg4 will put pressure on d4.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: 'Holding c4 with ...b5',
          text: 'After 3.e3 b5? 4.a4 c6 5.axb5 cxb5 6.Qf3 the queen hits the a8-rook along the long diagonal and wins material. In the QGA the pawn is meant to be returned.',
          uci: ['d2d4', 'd7d5', 'c2c4', 'd5c4', 'e2e3', 'b7b5', 'a2a4', 'c7c6', 'a4b5', 'c6b5', 'd1f3']
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Passive play against the isolated pawn',
          text: 'Many QGA lines give White an isolated d-pawn. If Black does not blockade d5 and trade pieces, White gets attacking chances and the d4-d5 break.'
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Slow development after 3.e4',
          text: 'Against the big centre Black must act at once with ...e5, ...Nf6 or ...c5. Quiet moves let White play Bxc4, Nf3 and d5 with a large space advantage.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-d4-21', 'strategy-7'],
      uncertain: 'In the 3.e4 e5 line the continuation after 8...Qd7 (9.Qxb7 Rb8 10.Qa6 is one known try) is very concrete and is not covered here.'
    },
    {
      id: 'b-nimzo',
      side: 'black',
      group: 'vs-d4',
      family: 'Nimzo-Indian Defence',
      familyId: 'bf-nimzo-indian',
      name: 'Nimzo-Indian Defence: Rubinstein Variation (4.e3)',
      short: 'Rubinstein Variation (4.e3)',
      aliases: ['Rubinstein System', '4.e3 Nimzo'],
      eco: 'E40-E59',
      moves: '1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 4.e3 O-O',
      defining: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'b1c3', 'f8b4', 'e2e3', 'e8g8'],
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 18,
      summary: 'Against the calm 4.e3, Black castles and keeps ...d5, ...c5 and ...b6 in reserve; the main lines give classical central play.',
      idea: 'White develops calmly with e3, Bd3 and Nf3, or with Nge2 to recapture on c3 with a piece. Black castles first and then chooses: ...d5 and ...c5 for classical central play, often with ...Bxc3 and ...dxc4 followed by ...Qc7 and ...e5; or a Hubner-style ...c5, ...Nc6, ...Bxc3 and ...d6 with pawns on dark squares. Doubled c-pawns, when they appear, are targets.',
      plans: {
        white: [
          'Develop with Bd3 and Nf3, then use the bishop pair after a3 and bxc3',
          'Play Nge2 so that a knight recaptures on c3 and the pawns stay healthy'
        ],
        black: [
          'Strike with ...d5 and ...c5, then free the position with ...dxc4, ...Qc7 and ...e5',
          'Hubner-style: ...c5, ...Nc6, ...Bxc3 and ...d6 with ...e5, keeping the centre closed',
          'After ...Bxc3 bxc3, target the doubled c-pawns'
        ]
      },
      responses: [
        {
          moves: '5.Bd3 d5 6.Nf3 c5 7.O-O Nc6 8.a3 Bxc3 9.bxc3 dxc4 10.Bxc4 Qc7',
          name: 'Main line',
          note: 'Black prepares ...e5 to free the game; White hopes the bishop pair will tell.',
          line: 'main'
        },
        {
          moves: '5.Nge2 d5 6.a3 Be7',
          name: '5.Nge2',
          note: 'White wants to recapture on c3 with a knight; Black keeps the bishop and gets a solid QGD-type position.',
          line: 'nge2'
        },
        {
          moves: '5.Bd3 c5 6.Nf3 Nc6 7.O-O Bxc3 8.bxc3 d6',
          name: 'Hubner-style set-up',
          note: 'Black gives the bishop at once and builds a dark-square pawn chain with ...e5.',
          line: 'hubner'
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
          { uci: 'f8b4', san: 'Bb4', note: 'Pins the knight and restrains e4.' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'e8g8', san: 'O-O', note: 'King safety first, keeping ...d5, ...c5 or ...b6 in reserve.' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'a2a3', san: 'a3' },
          { uci: 'b4c3', san: 'Bxc3', note: "Black gives up the bishop pair to gain time and fix White's pawns." },
          { uci: 'b2c3', san: 'bxc3' },
          { uci: 'd5c4', san: 'dxc4', note: 'After 10.Bxc4 Qc7 Black prepares ...e5 to free the game.' }
        ]
      },
      lines: [
        {
          id: 'main',
          name: '5.Bd3 d5 6.Nf3 c5: the main line',
          kind: 'Main line',
          summary: 'Classical central play: Black gives the bishop on c3, takes on c4 and frees the game with ...Qc7 and ...e5.',
          moves: [
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'b4c3', san: 'Bxc3', note: "Black gives up the bishop pair to gain time and fix White's pawns." },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'd3c4', san: 'Bxc4' },
            { uci: 'd8c7', san: 'Qc7', note: 'Prepares ...e5, which frees the c8-bishop.' },
            { uci: 'c4d3', san: 'Bd3' },
            { uci: 'e6e5', san: 'e5', note: 'The freeing break: Black has a healthy, active position.' }
          ]
        },
        {
          id: 'nge2',
          name: '5.Nge2: avoiding doubled pawns',
          kind: 'Alternative',
          summary: 'White recaptures on c3 with a knight. Black keeps the bishop with ...Be7 and gets a solid QGD-type structure.',
          moves: [
            { uci: 'g1e2', san: 'Ne2' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'b4e7', san: 'Be7', note: 'There is no need to give the bishop when White can recapture with a knight.' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e8', san: 'Re8', note: 'A sound Carlsbad-type position; ...Nf8 and ...Bf5 or ...Bd6 follow.' }
          ]
        },
        {
          id: 'hubner',
          name: 'Hubner-style ...Bxc3 and ...d6',
          kind: 'Alternative',
          summary: "Black doubles White's pawns, then closes the centre with pawns on dark squares so that the bishop pair has little scope.",
          moves: [
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b4c3', san: 'Bxc3' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'd7d6', san: 'd6', note: "Pawns on d6 and e5 will suit Black's light-squared bishop and knights." },
            { uci: 'e3e4', san: 'e4' },
            { uci: 'e6e5', san: 'e5' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'c6e7', san: 'Ne7', note: 'The centre is closed: the c4-pawn is a long-term target, and ...Ng6 or ...Nh5 with ...f5 can follow.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Giving the bishop without a follow-up',
          text: 'Taking on c3 hands White the bishop pair. It pays only if Black then targets the doubled pawns or keeps the centre closed; otherwise White simply opens the position.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Opening the centre for the bishops',
          text: "After ...Bxc3 bxc3, central exchanges that open diagonals favour White's two bishops. Time ...e5 and ...cxd4 so that Black's pieces, not White's bishops, gain from the open lines."
        }
      ],
      transpositions: [
        { to: 'b-bogo', note: 'If White plays 3.Nf3 instead of 3.Nc3, 3...Bb4+ is the Bogo-Indian.' },
        { to: 'b-qid', note: "Against 3.Nf3, 3...b6 is the Queen's Indian, the Nimzo's usual partner." },
        { to: 'b-english-nimzo', note: '1.c4 Nf6 2.Nc3 e6 3.d4 Bb4 4.e3 reaches the same position.' },
        {
          to: 'b-qgd-ragozin',
          note: '1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Nf3 Bb4 5.e3 O-O 6.Bd3 c5 is the same as 5.Bd3 d5 6.Nf3 c5 here.'
        }
      ],
      lessons: ['black-vs-d4-5', 'black-vs-d4-16', 'black-vs-d4-4', 'black-vs-flank-9'],
      uncertain: 'The Nge2 and Hubner-style lines show typical set-ups; their exact move orders vary in practice.'
    },
    {
      id: 'b-nimzo-classical',
      side: 'black',
      group: 'vs-d4',
      family: 'Nimzo-Indian Defence',
      familyId: 'bf-nimzo-indian',
      name: 'Nimzo-Indian Defence: Classical Variation (4.Qc2)',
      short: 'Classical Variation (4.Qc2)',
      aliases: ['Capablanca Variation', '4.Qc2 Nimzo'],
      eco: 'E32-E39',
      moves: '1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 4.Qc2 O-O',
      defining: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'b1c3', 'f8b4', 'd1c2', 'e8g8'],
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 15,
      summary: 'White avoids doubled pawns by recapturing on c3 with the queen; Black castles and fights for e4 with ...b6 and ...Bb7, or strikes with ...c5 or ...d5.',
      idea: "With 4.Qc2 White keeps a healthy structure and plans a3 to win the bishop pair. The price is time: the queen moves early and White's kingside development lags. Black castles, then either fights for the light squares with ...b6, ...Bb7 and ...d5 after giving up the bishop, or uses the lead in development with ...c5 or ...d5 and ...Ne4.",
      plans: {
        white: [
          'Win the bishop pair with a3 and Qxc3, then open the position',
          'Play e4 if Black allows it, supported by f3 or Nf3'
        ],
        black: [
          'After a3 Bxc3+ Qxc3, fight for e4 with ...b6, ...Bb7 and ...d5 or ...d6',
          'Use the lead in development with ...c5 or ...d5 and ...Ne4, gaining time on the queen',
          'Keep the position closed enough that the bishop pair is not decisive'
        ]
      },
      responses: [
        {
          moves: '5.a3 Bxc3+ 6.Qxc3 b6 7.Bg5 Bb7',
          name: 'Main line 5.a3',
          note: 'Black fights for e4 on the light squares; after 8.f3 h6 9.Bh4 d5 Black challenges the centre at once.',
          line: 'a3'
        },
        {
          moves: '5.e4 d5 6.e5 Ne4',
          name: '5.e4',
          note: 'Black hits back in the centre and the knight lands on e4 with pressure on c3.',
          line: 'e4'
        },
        {
          moves: '5.Nf3 c5 6.dxc5 Na6',
          name: '5.Nf3',
          note: 'Black regains the c5-pawn with the knight; after 7.a3 Bxc3+ 8.Qxc3 Nxc5 development is easy.',
          line: 'nf3'
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
          { uci: 'd1c2', san: 'Qc2', note: 'White prepares to recapture on c3 with the queen.' },
          { uci: 'e8g8', san: 'O-O', note: 'Castles first: ...d5, ...c5 or ...b6 can follow.' },
          { uci: 'a2a3', san: 'a3' },
          { uci: 'b4c3', san: 'Bxc3+' },
          { uci: 'c2c3', san: 'Qxc3' },
          { uci: 'b7b6', san: 'b6', note: 'Fights for e4 with the bishop from b7.' },
          { uci: 'c1g5', san: 'Bg5' },
          { uci: 'c8b7', san: 'Bb7' },
          { uci: 'f2f3', san: 'f3' },
          { uci: 'h7h6', san: 'h6' },
          { uci: 'g5h4', san: 'Bh4' },
          { uci: 'd7d5', san: 'd5', note: 'Challenges the centre before White completes e4.' }
        ]
      },
      lines: [
        {
          id: 'a3',
          name: '5.a3 Bxc3+ 6.Qxc3 b6',
          kind: 'Main line',
          summary: "White has the bishop pair; Black fights for e4 with ...b6, ...Bb7 and ...d5 and develops quickly while White's king is still in the centre.",
          moves: [
            { uci: 'a2a3', san: 'a3' },
            { uci: 'b4c3', san: 'Bxc3+' },
            { uci: 'c2c3', san: 'Qxc3' },
            { uci: 'b7b6', san: 'b6' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'c8b7', san: 'Bb7', note: 'Controls e4 from afar.' },
            { uci: 'f2f3', san: 'f3' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5h4', san: 'Bh4' },
            { uci: 'd7d5', san: 'd5', note: 'Strikes before White can play e4.' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'b8d7', san: 'Nbd7', note: 'Black is well developed; the position is balanced.' }
          ]
        },
        {
          id: 'e4',
          name: '5.e4 d5 6.e5 Ne4',
          kind: 'Alternative',
          summary: 'White grabs the centre at once. Black counters with ...d5, puts the knight on e4 and strikes at d4 with ...c5.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'd7d5', san: 'd5', note: 'Challenges the centre at once.' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'f6e4', san: 'Ne4', note: 'An active outpost, adding pressure to c3.' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'c7c5', san: 'c5', note: "Hits d4 while White's kingside is undeveloped." }
          ]
        },
        {
          id: 'nf3',
          name: '5.Nf3 c5 6.dxc5 Na6',
          kind: 'Alternative',
          summary: 'Black regains the pawn with the knight and gets easy development; the knight on c5 is active.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'b8a6', san: 'Na6', note: 'Heads for c5 to regain the pawn.' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'b4c3', san: 'Bxc3+' },
            { uci: 'c2c3', san: 'Qxc3' },
            { uci: 'a6c5', san: 'Nxc5', note: "Material is level and Black's pieces are active." }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Allowing e4 for free',
          text: 'If Black plays slowly after 5.a3 Bxc3+ 6.Qxc3, White plays f3 and e4 with a big centre and the bishop pair. Control e4 with ...Bb7 and ...d5 or ...Ne4 in time.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Opening lines for the bishops',
          text: "White's long-term trump is the bishop pair. Open the position only when Black's lead in development is concrete."
        },
        {
          kind: 'Mistake',
          side: 'white',
          title: 'Moving the queen again and again',
          text: 'With the queen on c2 and later c3, White is behind in development. ...Ne4, ...c5 and ...d5 often gain time on the queen, as in the 4...d5 5.a3 Bxc3+ 6.Qxc3 Ne4 line.'
        }
      ],
      transpositions: [
        { to: 'b-english-nimzo', note: '1.c4 Nf6 2.Nc3 e6 3.d4 Bb4 4.Qc2 reaches the same position.' }
      ],
      lessons: ['black-vs-d4-5'],
      uncertain: 'In the 5.e4 line, play after 7...c5 is sharp and not covered here.'
    },
    {
      id: 'b-nimzo-samisch',
      side: 'black',
      group: 'vs-d4',
      family: 'Nimzo-Indian Defence',
      familyId: 'bf-nimzo-indian',
      name: 'Nimzo-Indian Defence: Samisch Variation (4.a3)',
      short: 'Samisch Variation',
      aliases: ['Saemisch Variation', '4.a3 Nimzo'],
      eco: 'E24-E29',
      moves: '1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 4.a3 Bxc3+ 5.bxc3 c5',
      defining: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'b1c3', 'f8b4', 'a2a3', 'b4c3', 'b2c3', 'c7c5'],
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 14,
      summary: 'White accepts doubled c-pawns at once for the bishop pair and a big centre; Black restrains with ...c5 and targets c4.',
      idea: 'After 4.a3 Bxc3+ 5.bxc3 the c4-pawn can never be defended by a pawn. Black restrains the centre with ...c5, ...Nc6 and ...b6, then attacks c4 with ...Ba6, ...Na5 and ...Rc8. White wants e4 (often with f3), then a kingside attack with the bishops and f4-f5. A classical defensive resource is ...Ne8, which sidesteps a pin by Bg5 and prepares ...f5.',
      plans: {
        white: ['Build the centre with e3, Bd3 and Ne2, or f3 and e4', 'Attack the kingside with the bishops and f4-f5'],
        black: [
          'Attack c4 with ...b6, ...Ba6, ...Na5 and ...Rc8',
          'Keep the centre closed so that the bishops have little scope',
          'Meet f4-f5 ideas with ...Ne8 and ...f5'
        ]
      },
      responses: [
        {
          moves: '6.e3 Nc6 7.Bd3 O-O 8.Ne2 b6 9.e4 Ne8',
          name: '6.e3 and Ne2',
          note: 'The knight steps back so that Bg5 pins nothing and ...f5 is possible; ...Ba6 and ...Na5 attack c4.',
          line: 'e3'
        },
        {
          moves: '6.f3 d5 7.cxd5 Nxd5 8.dxc5 Qa5',
          name: '6.f3',
          note: 'Black hits the centre at once and regains the c5-pawn with active play.',
          line: 'f3'
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
          { uci: 'a2a3', san: 'a3' },
          { uci: 'b4c3', san: 'Bxc3+', note: 'Black gives the bishop at once: the doubled pawns are the compensation.' },
          { uci: 'b2c3', san: 'bxc3' },
          { uci: 'c7c5', san: 'c5', note: 'Restrains the centre and fixes the c4-pawn.' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'g1e2', san: 'Ne2' },
          { uci: 'b7b6', san: 'b6', note: 'Prepares ...Ba6 against c4.' },
          { uci: 'e3e4', san: 'e4' },
          { uci: 'f6e8', san: 'Ne8', note: 'Sidesteps a pin by Bg5 and prepares ...f5.' }
        ]
      },
      lines: [
        {
          id: 'e3',
          name: '6.e3 Nc6 7.Bd3: the classical plan',
          kind: 'Main line',
          summary: 'White builds e4 and f4; Black attacks c4 with ...Ba6 and blocks the kingside with ...Ne8 and ...f5.',
          moves: [
            { uci: 'e2e3', san: 'e3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'g1e2', san: 'Ne2' },
            { uci: 'b7b6', san: 'b6' },
            { uci: 'e3e4', san: 'e4' },
            { uci: 'f6e8', san: 'Ne8', note: 'Avoids Bg5 and e4-e5 tricks and prepares ...f5.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c8a6', san: 'Ba6', note: 'Attacks c4.' },
            { uci: 'f2f4', san: 'f4' },
            { uci: 'f7f5', san: 'f5', note: 'Stops f4-f5 and fights for e4.' }
          ]
        },
        {
          id: 'f3',
          name: '6.f3 d5: hit the centre at once',
          kind: 'Alternative',
          summary: 'Before White can play e4, Black strikes with ...d5. After the exchanges, ...Qa5 regains the c5-pawn and pins c3.',
          moves: [
            { uci: 'f2f3', san: 'f3' },
            { uci: 'd7d5', san: 'd5', note: 'Strikes before e4.' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'd8a5', san: 'Qa5', note: 'Hits c3 and c5 at once: Black regains the pawn with active play.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Opening the centre too early',
          text: "An early ...cxd4 cxd4 undoubles White's pawns and opens lines for the bishops. Keep the tension, or exchange only when it leaves c4 weak."
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'The f4-f5 attack',
          text: "With bishops on d3 and c1, White's f4-f5 can open the kingside. ...Ne8 and ...f5 are the classical antidote; do not let both e5 and f5 come with tempo."
        }
      ],
      transpositions: [],
      lessons: ['black-vs-d4-16'],
      uncertain: 'In the 6.f3 line Black has several established eighth moves (...Qa5 and ...f5 are both played); the e3 line follows a classical pattern whose exact move order varies.'
    },
    {
      id: 'b-qid',
      side: 'black',
      group: 'vs-d4',
      family: "Queen's Indian Defence",
      familyId: 'bf-queens-indian',
      name: "Queen's Indian Defence",
      short: 'Main lines (4.g3 and 4.a3)',
      aliases: ['QID'],
      eco: 'E15',
      moves: '1.d4 Nf6 2.c4 e6 3.Nf3 b6',
      defining: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'b7b6'],
      difficulty: 'Intermediate',
      style: 'Solid',
      minutes: 15,
      summary: "When White avoids the Nimzo with 3.Nf3, Black fianchettoes the queen's bishop to fight for e4 and the light squares.",
      idea: "Black controls e4 and d5 with ...b6 and a bishop on b7 or a6, plus ...Ne4 when it trades a defender. The modern 4.g3 Ba6 hits c4 at once and provokes b3, after which ...Bb4+ and ...Be7 leaves White's bishop slightly misplaced on d2. The breaks ...c5 and ...d5 come later.",
      plans: {
        white: [
          'Fianchetto with g3 and Bg2 to contest the long diagonal',
          'Gain space with Nc3 and e4, or with d4-d5 in some lines'
        ],
        black: [
          'Control e4 with ...Bb7, ...Ne4 and sometimes ...f5',
          'Free the game with ...c5 or ...d5 once developed',
          "Trade minor pieces to blunt White's extra space"
        ]
      },
      responses: [
        {
          moves: '4.g3 Ba6 5.b3 Bb4+ 6.Bd2 Be7',
          name: 'Modern main line',
          note: "The check lures the bishop to d2, where it blocks White's pieces; ...c6 and ...d5 follow.",
          line: 'ba6'
        },
        {
          moves: '4.g3 Bb7 5.Bg2 Be7 6.O-O O-O 7.Nc3 Ne4',
          name: 'Classical',
          note: 'Black trades the knight that defends e4 and keeps a firm grip on the light squares.',
          line: 'bb7'
        },
        {
          moves: '4.a3 Bb7 5.Nc3 d5',
          name: 'Petrosian',
          note: 'White stops ...Bb4. Black strikes with ...d5, and after 6.cxd5 Nxd5 has free play.',
          line: 'petrosian'
        },
        {
          moves: '4.Nc3 Bb4',
          name: 'Nimzo-style',
          note: 'The pin fights for e4 as in the Nimzo-Indian; 4...Bb7 is also fine.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b7b6', san: 'b6', note: 'Prepares a bishop on the long diagonal or on a6.' },
          { uci: 'g2g3', san: 'g3' },
          { uci: 'c8a6', san: 'Ba6', note: 'Attacks c4 at once, before White has finished developing.' },
          { uci: 'b2b3', san: 'b3' },
          { uci: 'f8b4', san: 'Bb4+', note: "Lures the bishop to d2, where it blocks White's knight and queen." },
          { uci: 'c1d2', san: 'Bd2' },
          { uci: 'b4e7', san: 'Be7', note: 'Retreats: the bishop has done its job.' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'c7c6', san: 'c6', note: 'Prepares ...d5 and lets the a6-bishop return to b7.' },
          { uci: 'd2c3', san: 'Bc3' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'f3e5', san: 'Ne5' },
          { uci: 'f6d7', san: 'Nfd7', note: 'Challenges the strong e5-knight at once.' }
        ]
      },
      lines: [
        {
          id: 'ba6',
          name: '4.g3 Ba6: the modern main line',
          kind: 'Main line',
          summary: "The check on b4 lures White's bishop to d2; then ...c6 and ...d5 give Black a solid centre and the a6-bishop can return to b7.",
          moves: [
            { uci: 'g2g3', san: 'g3' },
            { uci: 'c8a6', san: 'Ba6', note: 'Attacks c4 before White has finished developing.' },
            { uci: 'b2b3', san: 'b3' },
            { uci: 'f8b4', san: 'Bb4+', note: 'Lures the bishop to d2, where it blocks the b1-knight.' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'b4e7', san: 'Be7' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'c7c6', san: 'c6', note: 'Prepares ...d5.' },
            { uci: 'd2c3', san: 'Bc3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'f3e5', san: 'Ne5' },
            { uci: 'f6d7', san: 'Nfd7', note: 'Challenges the strong knight at once.' },
            { uci: 'e5d7', san: 'Nxd7' },
            { uci: 'b8d7', san: 'Nxd7' }
          ]
        },
        {
          id: 'bb7',
          name: '4.g3 Bb7: the classical fight for e4',
          kind: 'Alternative',
          summary: 'Black trades the c3-knight with ...Ne4 and adds ...f5, keeping a grip on the e4 square.',
          moves: [
            { uci: 'g2g3', san: 'g3' },
            { uci: 'c8b7', san: 'Bb7' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'f6e4', san: 'Ne4', note: "Offers to trade White's main defender of e4." },
            { uci: 'd1c2', san: 'Qc2' },
            { uci: 'e4c3', san: 'Nxc3' },
            { uci: 'c2c3', san: 'Qxc3' },
            { uci: 'f7f5', san: 'f5', note: 'A pawn joins the fight for e4.' }
          ]
        },
        {
          id: 'petrosian',
          name: '4.a3: the Petrosian',
          kind: 'Alternative',
          summary: 'White stops ...Bb4 and aims for e4. Black strikes with ...d5, takes on c3 and challenges the centre with ...c5.',
          moves: [
            { uci: 'a2a3', san: 'a3' },
            { uci: 'c8b7', san: 'Bb7' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd7d5', san: 'd5', note: 'Fights for e4 with a pawn as well.' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'd1c2', san: 'Qc2' },
            { uci: 'd5c3', san: 'Nxc3' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'c7c5', san: 'c5', note: 'Black hits the big centre at once.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Blocking your own bishop with ...d5',
          text: 'With the bishop on b7, an early ...d5 can shut it out of e4. In the Bb7 lines Black often prefers ...Ne4 and ...f5, and plays ...d5 only when it fights for e4.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Allowing a free e4',
          text: 'The whole opening is about e4. If White gets e2-e4 in comfortably, for example in the Petrosian after Qc2, Black must hit the centre at once with ...c5.'
        }
      ],
      transpositions: [
        { to: 'b-nimzo', note: '4.Nc3 Bb4 gives a Nimzo-Indian type position.' },
        { to: 'b-bogo', note: 'Same third move by White; 3...Bb4+ is the Bogo alternative.' }
      ],
      lessons: ['black-vs-d4-4']
    },
    {
      id: 'b-bogo',
      side: 'black',
      group: 'vs-d4',
      family: 'Bogo-Indian Defence',
      familyId: 'bf-bogo-indian',
      name: 'Bogo-Indian Defence',
      short: 'Main lines (4.Bd2 and 4.Nbd2)',
      aliases: ['Bogoljubov Defence'],
      eco: 'E11',
      moves: '1.d4 Nf6 2.c4 e6 3.Nf3 Bb4+',
      defining: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'f8b4'],
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 10,
      summary: 'A simple, reliable check on b4 when White avoids the Nimzo-Indian; easy development and a compact position.',
      idea: 'Black develops with tempo and usually exchanges the bishop for a white minor piece, leaving a compact position. In the 4.Bd2 Qe7 line Black plays ...Nc6, ...Bxc3 and ...Ne4, or ...d6 and ...e5, putting the pawns on dark squares where they complement the light-squared bishop.',
      plans: {
        white: ['Keep the bishop pair and gain space with g3, Bg2 and Nc3', "Push d5 to cramp Black's pieces"],
        black: [
          'Play ...Qe7, ...Nc6 and ...d6 to prepare ...e5',
          'Exchange on c3 or d2 and use the e4 square with ...Ne4',
          'Keep a solid pawn structure on dark squares'
        ]
      },
      responses: [
        {
          moves: '4.Bd2 Qe7 5.g3 Nc6',
          name: 'Main line',
          note: 'Black prepares ...Bxd2+ or ...Bxc3 and ...e5. 4...a5 and 4...Bxd2+ are simpler alternatives.',
          line: 'qe7'
        },
        {
          moves: '4.Nbd2 b6 5.a3 Bxd2+',
          name: '4.Nbd2',
          note: 'White avoids doubled pawns; Black gives the bishop and fianchettoes with ...Bb7 to control e4.',
          line: 'nbd2'
        },
        {
          moves: '4.Nc3',
          name: 'Into the Nimzo',
          note: 'Transposes to a Nimzo-Indian with Nf3; Black can choose ...O-O, ...b6 or ...c5.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'f8b4', san: 'Bb4+', note: 'A developing check, since 3.Nf3 rules out the pin on c3.' },
          { uci: 'c1d2', san: 'Bd2' },
          { uci: 'd8e7', san: 'Qe7', note: 'Keeps the tension and supports a later ...e5.' },
          { uci: 'g2g3', san: 'g3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'b4c3', san: 'Bxc3', note: 'Gives the bishop rather than retreat, and prepares ...Ne4.' },
          { uci: 'd2c3', san: 'Bxc3' },
          { uci: 'f6e4', san: 'Ne4', note: 'Hits the c3-bishop: Black trades pieces and plays for ...e5.' },
          { uci: 'a1c1', san: 'Rc1' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'd7d6', san: 'd6', note: 'Prepares ...e5; after 10.d5 Nxc3 11.Rxc3 Nd8 Black is solid.' }
        ]
      },
      lines: [
        {
          id: 'qe7',
          name: '4.Bd2 Qe7',
          kind: 'Main line',
          summary: 'Black keeps the tension, gives the bishop for the c3-knight and uses e4 with ...Ne4, then prepares ...e5.',
          moves: [
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'd8e7', san: 'Qe7', note: 'Keeps the tension and supports a later ...e5.' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'b4c3', san: 'Bxc3' },
            { uci: 'd2c3', san: 'Bxc3' },
            { uci: 'f6e4', san: 'Ne4', note: 'Hits the c3-bishop: Black trades pieces.' },
            { uci: 'a1c1', san: 'Rc1' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'e4c3', san: 'Nxc3', note: 'After 11.Rxc3 Nd8 Black is solid and prepares ...e5 or ...f5.' }
          ]
        },
        {
          id: 'bxd2',
          name: '4.Bd2 Bxd2+: the simple exchange',
          kind: 'Alternative',
          summary: 'Black trades the bishops at once and builds a QGD-style centre with ...d5, ...Nbd7 and ...c6. Very solid, though White keeps a little space.',
          moves: [
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'b4d2', san: 'Bxd2+' },
            { uci: 'd1d2', san: 'Qxd2' },
            { uci: 'd7d5', san: 'd5', note: 'Takes a share of the centre.' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c7c6', san: 'c6', note: 'A compact position; ...b6 and ...Bb7 or ...dxc4 and ...e5 can free it later.' }
          ]
        },
        {
          id: 'nbd2',
          name: '4.Nbd2: keeping the structure',
          kind: 'Alternative',
          summary: "White blocks with the knight to avoid doubled pawns. Black gives the bishop and fianchettoes to control e4 in Queen's Indian style.",
          moves: [
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'b7b6', san: 'b6' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'b4d2', san: 'Bxd2+' },
            { uci: 'd1d2', san: 'Qxd2' },
            { uci: 'c8b7', san: 'Bb7', note: 'Black controls e4 with the bishop and the f6-knight.' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8d7', san: 'Nbd7', note: 'A flexible set-up: ...Ne4, ...c5 or ...e5 can follow.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'black',
          title: "White's d4-d5 clamp",
          text: 'Against ...Nc6 and ...e5 plans, White often pushes d5 to gain space and chase the knight. Black must know the regrouping (...Nd8 or ...Nb8) and the ...f5 or ...e5 follow-up.'
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Bishop pair without compensation',
          text: 'Black often gives up the dark-squared bishop. Keep the pawns on dark squares (...d6 and ...e5) and the position compact, or the bishop pair will tell in the long run.'
        }
      ],
      transpositions: [
        { to: 'b-nimzo', note: '4.Nc3 turns the game into a Nimzo-Indian.' },
        { to: 'b-qid', note: 'Both answer 3.Nf3; Black chooses between ...Bb4+ and ...b6.' }
      ],
      lessons: ['black-vs-d4-4', 'black-vs-d4-5'],
      uncertain: 'The 4.Bd2 Bxd2+ and 4.Nbd2 lines show typical, sound set-ups rather than precise main lines.'
    },
    {
      id: 'b-kid-classical',
      side: 'black',
      group: 'vs-d4',
      family: "King's Indian Defence",
      familyId: 'bf-kings-indian',
      name: "King's Indian Defence: Classical Variation",
      short: 'Classical Variation',
      aliases: ["Classical King's Indian"],
      eco: 'E92',
      moves: '1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5',
      defining: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'f8g7', 'e2e4', 'd7d6', 'g1f3', 'e8g8', 'f1e2', 'e7e5'],
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 20,
      summary: 'Black lets White build a big centre, then strikes it with ...e5; in the main lines both sides attack on opposite wings.',
      idea: "Black castles behind a fianchetto and challenges the centre with ...e5. When White closes it with d5, the game becomes a race: White attacks on the queenside with c5, while Black reroutes the knights (...Ne7, ...Nd7 or ...Ne8) and breaks with ...f5, often followed by ...f4 and a pawn storm with ...g5-g4 against White's king.",
      plans: {
        white: [
          'Close the centre with d5 and attack on the queenside with b4 and c5',
          'Restrain ...f5 and keep the kingside closed'
        ],
        black: [
          'After d5, play ...Ne7, ...Nd7 (or ...Ne8) and break with ...f5',
          'Push ...f4 and ...g5-g4 for a direct kingside attack',
          'If White exchanges on e5, use the d4 square and aim for a level endgame'
        ]
      },
      responses: [
        {
          moves: '7.O-O Nc6 8.d5 Ne7',
          name: 'Main line (Mar del Plata)',
          note: '...Nd7 or ...Ne8 and ...f5 come next: Black attacks on the kingside, White on the queenside.',
          line: 'mar-del-plata'
        },
        {
          moves: '7.d5 a5',
          name: 'Petrosian',
          note: 'Black secures c5 for a knight; after 8.Bg5 h6 9.Bh4 Na6 the knight heads for c5.',
          line: 'petrosian'
        },
        {
          moves: '7.dxe5 dxe5 8.Qxd8 Rxd8',
          name: 'Exchange',
          note: 'White hopes for a small endgame edge. Black is solid; the d4 square is a fine target for a knight.',
          line: 'exchange'
        },
        {
          moves: '7.Be3 Ng4 8.Bg5 f6',
          name: 'Gligoric',
          note: 'Black harasses the bishop, then continues with ...Nc6 or ...g5 and ...Nh6, keeping the usual kingside plans.'
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
          { uci: 'f8g7', san: 'Bg7', note: 'The fianchettoed bishop will bite on the centre from g7.' },
          { uci: 'e2e4', san: 'e4' },
          { uci: 'd7d6', san: 'd6', note: 'Black allows the big centre but prepares to strike it.' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'e7e5', san: 'e5', note: 'The key blow against d4.' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'd4d5', san: 'd5', note: 'White closes the centre and gains space on the queenside.' },
          { uci: 'c6e7', san: 'Ne7', note: 'The knight heads for the kingside to support ...f5.' },
          { uci: 'f3e1', san: 'Ne1' },
          { uci: 'f6d7', san: 'Nd7', note: 'Clears the way for the f-pawn: ...f5 is next.' }
        ]
      },
      lines: [
        {
          id: 'mar-del-plata',
          name: '7.O-O Nc6 8.d5 Ne7 9.Ne1: Mar del Plata',
          kind: 'Main line',
          summary: 'The classic race: Black plays ...f5, ...f4 and ...g5 on the kingside while White breaks with c5 on the queenside.',
          moves: [
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'c6e7', san: 'Ne7', note: 'The knight heads for the kingside.' },
            { uci: 'f3e1', san: 'Ne1' },
            { uci: 'f6d7', san: 'Nd7', note: 'Clears the way for the f-pawn.' },
            { uci: 'e1d3', san: 'Nd3' },
            { uci: 'f7f5', san: 'f5' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'd7f6', san: 'Nf6' },
            { uci: 'f2f3', san: 'f3' },
            { uci: 'f5f4', san: 'f4', note: 'Closes the kingside and gains space: ...g5-g4 is the plan.' },
            { uci: 'c4c5', san: 'c5' },
            { uci: 'g6g5', san: 'g5', note: 'Both sides attack: speed decides.' }
          ]
        },
        {
          id: 'bayonet',
          name: '9.b4: the Bayonet Attack',
          kind: 'Alternative',
          summary: 'White hurries on the queenside; Black prepares ...f5 with ...Nh5 instead of ...Nd7.',
          moves: [
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'c6e7', san: 'Ne7' },
            { uci: 'b2b4', san: 'b4', note: 'The Bayonet: queenside space at once.' },
            { uci: 'f6h5', san: 'Nh5', note: 'Prepares ...f5 while keeping d7 free.' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'f7f5', san: 'f5' },
            { uci: 'f3g5', san: 'Ng5' },
            { uci: 'h5f6', san: 'Nf6', note: 'The knight returns to cover e4; a complex fight follows.' }
          ]
        },
        {
          id: 'petrosian',
          name: '7.d5: the Petrosian',
          kind: 'Alternative',
          summary: 'White closes the centre at once and pins with Bg5. Black secures c5 with ...a5 and brings the knight there.',
          moves: [
            { uci: 'd4d5', san: 'd5' },
            { uci: 'a7a5', san: 'a5', note: 'Secures c5 for a knight by stopping b4.' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5h4', san: 'Bh4' },
            { uci: 'b8a6', san: 'Na6' },
            { uci: 'f3d2', san: 'Nd2' },
            { uci: 'd8e8', san: 'Qe8', note: 'Unpins and supports ...f5 later.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f6h7', san: 'Nh7', note: 'Breaks the pin and prepares ...f5.' }
          ]
        },
        {
          id: 'exchange',
          name: '7.dxe5: the Exchange',
          kind: 'Sideline',
          summary: 'White trades queens hoping for a small endgame edge. Black challenges a knight on d5 with ...c6 and is fine with careful play.',
          moves: [
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'd6e5', san: 'dxe5' },
            { uci: 'd1d8', san: 'Qxd8' },
            { uci: 'f8d8', san: 'Rxd8' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'd8e8', san: 'Re8', note: 'Avoids pins along the d-file.' },
            { uci: 'c3d5', san: 'Nd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'c7c6', san: 'c6', note: "Challenges the d5-pawn at once; the d4 square is a target for Black's knight." }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'black',
          title: 'Losing the race',
          text: "Once the centre is closed, both sides attack. If Black plays slowly on the kingside, White's c5 and cxd6 break crashes through first. Count tempi and push ...f5, ...f4 and ...g5 with purpose."
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Releasing the centre with ...exd4',
          text: 'Taking on d4 without a concrete reason gives White Nxd4, an easy space advantage and pressure on d6. In the Classical, Black normally keeps the pawn on e5.'
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Forgetting to reroute the knights',
          text: 'After d5, the f6-knight blocks the f-pawn. ...Ne8, ...Nd7 or ...Nh5 must come first, and the c6-knight goes to e7 to support the kingside.'
        }
      ],
      transpositions: [
        { to: 'b-flank-kid', note: '1.Nf3 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.d4 O-O 6.Be2 e5 transposes.' }
      ],
      lessons: ['black-vs-d4-7']
    },
    {
      id: 'b-kid-samisch',
      side: 'black',
      group: 'vs-d4',
      family: "King's Indian Defence",
      familyId: 'bf-kings-indian',
      name: "King's Indian Defence: Samisch Variation",
      short: 'Samisch Variation',
      aliases: ['Saemisch Variation', "5.f3 King's Indian"],
      eco: 'E80-E89',
      moves: '1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O',
      defining: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'f8g7', 'e2e4', 'd7d6', 'f2f3', 'e8g8'],
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 16,
      summary: 'White supports e4 with f3 and often castles long to storm the kingside; Black counters with the Panno, the ...c5 pawn sacrifice or the classical ...e5.',
      idea: "f3 makes e4 rock solid and prepares Be3, Qd2 and sometimes O-O-O with g4 and h4. The cost is development: the g1-knight must go to e2, and the dark squares can weaken. Black's main answers are queenside play with ...Nc6, ...a6, ...Rb8 and ...b5 (the Panno), the pawn sacrifice ...c5 that opens the long diagonal, and the classical ...e5.",
      plans: {
        white: [
          'Play Be3, Qd2 and Nge2, then castle long and push g4 and h4',
          'Close the centre with d5 and use the extra space'
        ],
        black: [
          'Panno: ...Nc6, ...a6, ...Rb8 and ...b5 to open the queenside',
          "Sacrifice a pawn with ...c5 to open the g7-bishop's diagonal",
          'Classical ...e5, then ...Nh5 and ...f5 if White closes the centre'
        ]
      },
      responses: [
        {
          moves: '6.Be3 Nc6 7.Nge2 a6 8.Qd2 Rb8',
          name: 'Panno',
          note: 'Black prepares ...b5 to open lines on the queenside, where White may castle.',
          line: 'panno'
        },
        {
          moves: '6.Be3 c5 7.dxc5 dxc5 8.Qxd8 Rxd8 9.Bxc5 Nc6',
          name: '...c5 pawn sacrifice',
          note: 'A queenless middlegame in which Black has quick development and pressure on the dark squares for the pawn.',
          line: 'c5'
        },
        {
          moves: '6.Be3 e5 7.d5 Nh5',
          name: 'Classical ...e5',
          note: 'Against the closed centre Black prepares ...f5.',
          line: 'e5'
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
          { uci: 'f2f3', san: 'f3', note: 'The Samisch: e4 is rock solid.' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'b8c6', san: 'Nc6', note: 'The Panno: queenside play rather than central.' },
          { uci: 'g1e2', san: 'Nge2' },
          { uci: 'a7a6', san: 'a6' },
          { uci: 'd1d2', san: 'Qd2' },
          { uci: 'a8b8', san: 'Rb8', note: 'Prepares ...b5.' }
        ]
      },
      lines: [
        {
          id: 'panno',
          name: '6.Be3 Nc6 7.Nge2 a6: the Panno',
          kind: 'Main line',
          summary: 'Black prepares ...b5 to open the queenside, where White often castles. A race of attacks if White goes long.',
          moves: [
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1e2', san: 'Nge2' },
            { uci: 'a7a6', san: 'a6', note: 'Prepares ...Rb8 and ...b5.' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'a8b8', san: 'Rb8', note: "Next ...b5 opens lines towards White's queenside." }
          ]
        },
        {
          id: 'c5',
          name: '6.Be3 c5: the pawn sacrifice',
          kind: 'Alternative',
          summary: 'Black gives a pawn for a lead in development and an open long diagonal. Remember: the compensation is activity, so use it quickly.',
          moves: [
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'c7c5', san: 'c5', note: "Offers a pawn to open the g7-bishop's diagonal." },
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'd6c5', san: 'dxc5' },
            { uci: 'd1d8', san: 'Qxd8' },
            { uci: 'f8d8', san: 'Rxd8' },
            { uci: 'e3c5', san: 'Bxc5' },
            { uci: 'b8c6', san: 'Nc6', note: "Black develops with ideas of ...Nd7 and ...Nd4 against White's loose dark squares." }
          ]
        },
        {
          id: 'e5',
          name: '6.Be3 e5 7.d5: the closed centre',
          kind: 'Alternative',
          summary: 'With the centre closed, Black prepares ...f5 with ...Nh5. White often castles long and attacks on the kingside.',
          moves: [
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'f6h5', san: 'Nh5', note: 'Prepares ...f5.' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'f7f5', san: 'f5' },
            { uci: 'e1c1', san: 'O-O-O' },
            { uci: 'b8d7', san: 'Nd7', note: 'Brings another piece towards the kingside and keeps ...f4 or ...Ndf6 in reserve.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'black',
          title: 'Passive defence against g4 and h4',
          text: 'If White castles long and storms with g4 and h4-h5, waiting is fatal. Black needs counterplay on the queenside (...b5, ...c5) or in the centre at the same time.'
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Wasting the ...c5 compensation',
          text: 'In the gambit line Black is a pawn down in a queenless position. Slow moves let White consolidate with Nge2 and Kf2; the knights must reach d4 and the rooks the open files quickly.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-d4-19', 'black-vs-d4-7'],
      uncertain: 'The 6...e5 7.d5 Nh5 line is one of several established set-ups; move orders there vary.'
    },
    {
      id: 'b-kid-fianchetto',
      side: 'black',
      group: 'vs-d4',
      family: "King's Indian Defence",
      familyId: 'bf-kings-indian',
      name: "King's Indian Defence: Fianchetto Variation",
      short: 'Fianchetto Variation',
      aliases: ["g3 King's Indian"],
      eco: 'E60-E69',
      moves: '1.d4 Nf6 2.c4 g6 3.Nf3 Bg7 4.g3 O-O 5.Bg2 d6',
      defining: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'g1f3', 'f8g7', 'g2g3', 'e8g8', 'f1g2', 'd7d6'],
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 15,
      summary: 'White fianchettoes and keeps the king safe; Black plays ...Nbd7 and ...e5 with ...c6 and ...Qb6, or the Yugoslav ...c5 with queenside play.',
      idea: "With g3 and Bg2 the usual King's Indian kingside attack is much harder, so Black plays in the centre and on the queenside. In the ...Nbd7 and ...e5 lines Black adds ...c6 and ...Qb6, or ...exd4 and ...Re8, to pressure d4, e4 and b2. In the Yugoslav (...c5 and ...Nc6), after d5 the knight goes to a5 and Black expands with ...a6, ...Rb8 and ...b5.",
      plans: {
        white: [
          'Keep a central space advantage and the strong g2-bishop',
          'After d5, use the space and hit the queenside pawns'
        ],
        black: [
          'Play ...Nbd7, ...e5 and ...c6, then ...Qb6 or ...exd4 with pressure on e4 and b2',
          'Yugoslav: ...c5, ...Nc6, ...Na5, ...a6, ...Rb8 and ...b5',
          "Use the g7-bishop's diagonal once the centre opens"
        ]
      },
      responses: [
        {
          moves: '6.O-O Nbd7 7.Nc3 e5 8.e4 c6 9.h3 Qb6',
          name: '...Nbd7 and ...e5',
          note: 'The queen hits d4 and b2; White must decide how to handle the tension.',
          line: 'nbd7'
        },
        {
          moves: '6.O-O c5 7.Nc3 Nc6 8.d5 Na5',
          name: 'Yugoslav',
          note: 'The knight eyes c4; ...a6, ...Rb8 and ...b5 follow.',
          line: 'yugoslav'
        },
        {
          moves: '6.O-O Nc6 7.Nc3 a6',
          name: 'Panno',
          note: 'After 8.d5 Na5 9.Nd2 c5 it transposes to the Yugoslav.'
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
          { uci: 'g2g3', san: 'g3', note: "The fianchetto keeps White's king very safe." },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'b8d7', san: 'Nbd7' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'e7e5', san: 'e5', note: 'The central strike.' },
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c6', san: 'c6', note: 'Supports ...Qb6 and a later ...exd4.' },
          { uci: 'h2h3', san: 'h3' },
          { uci: 'd8b6', san: 'Qb6', note: 'Hits d4 and b2.' }
        ]
      },
      lines: [
        {
          id: 'nbd7',
          name: '6...Nbd7 7.Nc3 e5 8.e4 c6 9.h3 Qb6',
          kind: 'Main line',
          summary: 'Black builds the classical centre and then hits d4 and b2 with the queen. White has to decide whether to keep the tension or release it.',
          moves: [
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'h2h3', san: 'h3', note: 'Stops ...Ng4 and prepares Be3.' },
            { uci: 'd8b6', san: 'Qb6', note: 'Pressure on d4 and b2 at the same time.' }
          ]
        },
        {
          id: 'yugoslav',
          name: '6...c5: the Yugoslav',
          kind: 'Alternative',
          summary: "After d5 the knight goes to a5 to hit c4, and Black expands with ...a6, ...Rb8 and ...b5 against White's queenside.",
          moves: [
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'c6a5', san: 'Na5', note: 'Attacks c4.' },
            { uci: 'f3d2', san: 'Nd2' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'd1c2', san: 'Qc2' },
            { uci: 'a8b8', san: 'Rb8' },
            { uci: 'b2b3', san: 'b3' },
            { uci: 'b7b5', san: 'b5', note: "Opens lines on the queenside, where Black's pieces are aimed." }
          ]
        },
        {
          id: 'exd4',
          name: '8...exd4: pressure on e4',
          kind: 'Alternative',
          summary: 'Black releases the centre to hit e4 with the rook and knights. Active, but the d6-pawn needs care.',
          moves: [
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e5d4', san: 'exd4', note: 'Releases the centre to hit e4.' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'f8e8', san: 'Re8', note: 'Pressure on e4; ...Nc5 and ...a5 are typical next.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Attacking the fianchetto by reflex',
          text: "Against g3 and Bg2 the usual ...f5 and kingside storm rarely works. Play in the centre and on the queenside, where Black's pieces point."
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'A weak d6-pawn',
          text: 'After ...exd4 the d6-pawn stands on a half-open file. Black must keep pieces active (...Re8, ...Nc5, ...a5) or White will besiege it.'
        }
      ],
      transpositions: [
        {
          to: 'b-flank-kid',
          note: '1.Nf3 Nf6 2.c4 g6 3.Nc3 Bg7 4.d4 O-O 5.g3 d6 6.Bg2 Nbd7 7.O-O e5 8.e4 c6 reaches the ...Nbd7 line here.'
        }
      ],
      lessons: ['black-vs-d4-18'],
      uncertain: 'After 9...Qb6 White has several established tries; the line stops at the key position.'
    },
    {
      id: 'b-kid-four-pawns',
      side: 'black',
      group: 'vs-d4',
      family: "King's Indian Defence",
      familyId: 'bf-kings-indian',
      name: "King's Indian Defence: Four Pawns Attack",
      short: 'Four Pawns Attack',
      aliases: ['Four Pawns'],
      eco: 'E76-E79',
      moves: '1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4 O-O 6.Nf3 c5',
      defining: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'f8g7', 'e2e4', 'd7d6', 'f2f4', 'e8g8', 'g1f3', 'c7c5'],
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 15,
      summary: 'White grabs the centre with four pawns; Black hits it at once with ...c5 and ...e6, aiming to prove it over-extended.',
      idea: "After 5.f4 White threatens to roll Black back with e4-e5. Black answers 6...c5: if d5, then ...e6 and ...exd5 open the e-file and give a Benoni structure in which White's e4-e5 break is the danger and Black's piece play is the reward. If White takes on c5, ...Qa5 regains the pawn with active play.",
      plans: {
        white: [
          'Push e4-e5 to drive the f6-knight away and open lines',
          'Develop with Be2 and O-O and keep the big centre'
        ],
        black: [
          'Hit d4 with ...c5, then ...e6 and ...exd5 against d5',
          'Use the e-file with ...Re8 and pin with ...Bg4',
          'Control e5 with pieces before White can push it'
        ]
      },
      responses: [
        {
          moves: '7.d5 e6 8.Be2 exd5 9.cxd5 Bg4',
          name: 'Main line 7.d5',
          note: 'Black pins the f3-knight, which supports e5, and follows with ...Nbd7 and ...Re8.',
          line: 'bg4'
        },
        {
          moves: '7.d5 e6 8.Be2 exd5 9.cxd5 Re8',
          name: '9...Re8',
          note: 'Provokes 10.e5, a very sharp line.',
          line: 're8'
        },
        {
          moves: '7.dxc5 Qa5',
          name: '7.dxc5',
          note: 'The queen pins the c3-knight and regains the pawn.',
          line: 'dxc5'
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
          { uci: 'f2f4', san: 'f4', note: 'Four pawns in the centre.' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'c7c5', san: 'c5', note: 'Strikes at once.' },
          { uci: 'd4d5', san: 'd5' },
          { uci: 'e7e6', san: 'e6', note: 'Challenges d5 and opens the e-file.' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'e6d5', san: 'exd5' },
          { uci: 'c4d5', san: 'cxd5' },
          { uci: 'c8g4', san: 'Bg4', note: 'Pins the knight that supports e5.' }
        ]
      },
      lines: [
        {
          id: 'bg4',
          name: '7.d5 e6 8.Be2 exd5 9.cxd5 Bg4',
          kind: 'Main line',
          summary: 'Black pins the f3-knight, which supports e4-e5, then develops ...Nbd7 and ...Re8 to control e5.',
          moves: [
            { uci: 'd4d5', san: 'd5' },
            { uci: 'e7e6', san: 'e6', note: 'Challenges the d5-pawn.' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'c8g4', san: 'Bg4', note: 'Pins the knight that supports e5.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8d7', san: 'Nbd7', note: 'Adds a guard to e5; ...Re8 and ...Bxf3 can follow.' }
          ]
        },
        {
          id: 're8',
          name: '9...Re8 10.e5: the sharp line',
          kind: 'Sharp try',
          summary: 'White pushes e5 at once. Black counter-attacks with ...Ng4 and ...Qb6. Very concrete: play it only after study.',
          moves: [
            { uci: 'd4d5', san: 'd5' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'f8e8', san: 'Re8', note: 'Presses e4 and invites e4-e5.' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'd6e5', san: 'dxe5' },
            { uci: 'f4e5', san: 'fxe5' },
            { uci: 'f6g4', san: 'Ng4' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'd8b6', san: 'Qb6', note: 'Counter-attack on b2 and the e5-pawn; sharp theory follows.' }
          ]
        },
        {
          id: 'dxc5',
          name: '7.dxc5 Qa5',
          kind: 'Alternative',
          summary: 'The queen pins the c3-knight and regains the pawn. Black then develops ...Nc6 with pressure on the dark squares.',
          moves: [
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'd8a5', san: 'Qa5', note: 'Pins c3 and attacks c5.' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'a5c5', san: 'Qxc5' },
            { uci: 'd1e2', san: 'Qe2' },
            { uci: 'b8c6', san: 'Nc6', note: 'Black has regained the pawn and develops actively.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Allowing e4-e5 for free',
          text: 'Slow moves let White play e4-e5, driving the f6-knight back and gaining huge space. Hit the centre with ...c5 at once and keep e5 under control with pieces.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Very concrete theory',
          text: 'The ...Re8 lines lead to forcing positions where one wrong move can lose. If you want a calmer game, prefer 9...Bg4.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-d4-19', 'black-vs-d4-9'],
      uncertain: 'The 9...Re8 line is shown only to illustrate the e5 break; its theory runs much deeper.'
    },
    {
      id: 'b-grunfeld',
      side: 'black',
      group: 'vs-d4',
      family: 'Grunfeld Defence',
      familyId: 'bf-grunfeld',
      name: 'Grunfeld Defence: Exchange Variation',
      short: 'Exchange Variation',
      aliases: ['Grunfeld Exchange'],
      eco: 'D85-D89',
      moves: '1.d4 Nf6 2.c4 g6 3.Nc3 d5 4.cxd5 Nxd5 5.e4 Nxc3 6.bxc3 Bg7',
      defining: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'd7d5', 'c4d5', 'f6d5', 'e2e4', 'd5c3', 'b2c3', 'f8g7'],
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 20,
      summary: 'White takes the big centre with cxd5, e4 and bxc3; Black attacks it with the g7-bishop, ...c5, ...Nc6 and ...Qa5. The critical test of the Grunfeld.',
      idea: 'After 4.cxd5 Nxd5 5.e4 Nxc3 6.bxc3 White has a broad centre, but the g7-bishop, the ...c5 break, ...Nc6, ...Bg4 and ...Qa5 all hit d4. Black wants the centre to become a target; if White pushes d5 at the wrong moment, the long diagonal opens for the bishop and the c3-pawn can fall with check.',
      plans: {
        white: [
          'Hold the centre with Nf3 or Ne2, Be3 and Rb1 or Rc1, and push d5 when it gains space safely',
          'Use the centre as a base for a kingside attack'
        ],
        black: [
          'Hit d4 with ...Bg7, ...c5, ...Nc6, ...Bg4 and ...Qa5',
          "Trade queens when White's centre has become a liability",
          'Use the queenside pawn majority in the endgame'
        ]
      },
      responses: [
        {
          moves: '7.Bc4 c5 8.Ne2 Nc6 9.Be3 O-O 10.O-O',
          name: 'Classical 7.Bc4',
          note: '...Bg4, ...Na5 and ...cxd4 put pressure on d4 and the c4-bishop.',
          line: 'bc4'
        },
        {
          moves: '7.Nf3 c5 8.Rb1 O-O 9.Be2 cxd4 10.cxd4 Qa5+',
          name: 'Modern 8.Rb1',
          note: 'The rook leaves the long diagonal and eyes b7. After 11.Bd2 Qxa2 White has given a pawn for activity.',
          line: 'rb1'
        },
        {
          moves: '7.Be3 c5 8.Qd2 Qa5 9.Rc1',
          name: '7.Be3 and Qd2',
          note: 'White protects c3 and d4 with pieces. Black can trade queens with ...cxd4 and ...Qxd2+ into a balanced endgame.',
          line: 'be3'
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
          { uci: 'd7d5', san: 'd5', note: 'Challenges the centre at once.' },
          { uci: 'c4d5', san: 'cxd5' },
          { uci: 'f6d5', san: 'Nxd5' },
          { uci: 'e2e4', san: 'e4' },
          { uci: 'd5c3', san: 'Nxc3', note: "White's centre grows, but it will become a target." },
          { uci: 'b2c3', san: 'bxc3' },
          { uci: 'f8g7', san: 'Bg7', note: 'Already pressing on c3 and d4.' },
          { uci: 'f1c4', san: 'Bc4' },
          { uci: 'c7c5', san: 'c5', note: 'The thematic strike at d4.' },
          { uci: 'g1e2', san: 'Ne2' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'e8g8', san: 'O-O', note: 'Next come ...Bg4 or ...cxd4 and ...Na5, hitting d4 and the c4-bishop.' }
        ]
      },
      lines: [
        {
          id: 'bc4',
          name: '7.Bc4: the Classical Exchange',
          kind: 'Main line',
          summary: 'White supports the centre with Ne2 and Be3. Black castles and hits d4 and the c4-bishop with ...Bg4, ...Na5 and ...cxd4.',
          moves: [
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'c7c5', san: 'c5', note: 'The thematic strike at d4.' },
            { uci: 'g1e2', san: 'Ne2' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c8g4', san: 'Bg4', note: 'Pins the e2-knight, a defender of d4.' },
            { uci: 'f2f3', san: 'f3' },
            { uci: 'c6a5', san: 'Na5', note: 'Hits the c4-bishop.' },
            { uci: 'c4d3', san: 'Bd3' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'g4e6', san: 'Be6', note: 'Black blockades d5 and eyes the queenside.' }
          ]
        },
        {
          id: 'rb1',
          name: '7.Nf3 c5 8.Rb1: the modern main line',
          kind: 'Main line',
          summary: 'White gives the a2-pawn for activity. Black grabs it with ...Qa5+ and ...Qxa2, then develops quickly with ...Bg4.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'a1b1', san: 'Rb1', note: 'The rook leaves the long diagonal and eyes b7.' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'd8a5', san: 'Qa5+' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'a5a2', san: 'Qxa2', note: 'Black takes the offered pawn; White has the centre and quick development.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c8g4', san: 'Bg4', note: 'Black develops and puts pressure on d4.' }
          ]
        },
        {
          id: 'be3',
          name: '7.Be3 c5 8.Qd2: the endgame line',
          kind: 'Alternative',
          summary: 'White defends c3 and d4 with pieces. Black trades queens and has a sound endgame with pressure on d4 and a queenside majority.',
          moves: [
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'd8a5', san: 'Qa5', note: 'Pins c3 and offers a queen trade.' },
            { uci: 'a1c1', san: 'Rc1' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'a5d2', san: 'Qxd2+' },
            { uci: 'e1d2', san: 'Kxd2' },
            { uci: 'e8g8', san: 'O-O', note: 'Black develops next with ...Rd8 and ...Nc6, hitting d4.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'white',
          title: 'An early d5 drops c3',
          text: 'With the rook still on a1, pushing d5 at the wrong moment lets ...Bxc3+ fork king and rook, for example 7.Nf3 c5 8.Be2 Nc6 9.d5? Bxc3+.',
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
            'f1e2',
            'b8c6',
            'd4d5',
            'g7c3'
          ]
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Letting the centre roll',
          text: 'If Black delays ...c5 and ...Nc6, White consolidates with Be3, Rc1 and d5 or e5, and the big centre becomes a battering ram instead of a target.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'The a2 pawn grab',
          text: 'In the 8.Rb1 line, ...Qxa2 is theory, but White gets the centre and attacking chances. Only take the pawn if you know the follow-up.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-d4-8'],
      uncertain: 'The 8.Rb1 line is very concrete; the moves shown are a well-known main line, but the theory continues far beyond them.'
    },
    {
      id: 'b-grunfeld-russian',
      side: 'black',
      group: 'vs-d4',
      family: 'Grunfeld Defence',
      familyId: 'bf-grunfeld',
      name: 'Grunfeld Defence: Russian System (5.Qb3)',
      short: 'Russian System',
      aliases: ['Russian Variation', '5.Qb3 Grunfeld'],
      eco: 'D96-D99',
      moves: '1.d4 Nf6 2.c4 g6 3.Nc3 d5 4.Nf3 Bg7 5.Qb3 dxc4 6.Qxc4 O-O',
      defining: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'd7d5', 'g1f3', 'f8g7', 'd1b3', 'd5c4', 'b3c4', 'e8g8'],
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 16,
      summary: 'White forces ...dxc4, recaptures with the queen and builds the centre with e4; Black gains time on the queen with ...a6 and ...b5, ...Bg4 or ...Na6.',
      idea: "After 7.e4 White has the classical centre, but the queen on c4 is exposed. Black's main plans gain time against it: the Hungarian ...a6 and ...b5 with ...c5; Smyslov's ...Bg4 and ...Nfd7-b6; or ...Na6 and ...c5. In each case Black aims at d4 rather than building a pawn centre.",
      plans: {
        white: ['Build the centre with e4, then Be2, Be3 and O-O', 'Push d5 or e5 when it gains space with tempo'],
        black: [
          'Hungarian: ...a6, ...b5 and ...c5',
          'Smyslov: ...Bg4, ...Nfd7 and ...Nb6 with ...Nc6 against d4',
          'Prophylactic: ...Na6 and ...c5'
        ]
      },
      responses: [
        {
          moves: '7.e4 a6',
          name: 'Hungarian',
          note: 'After 8.Be2 b5 9.Qb3 c5 Black hits d4 at once.',
          line: 'hungarian'
        },
        {
          moves: '7.e4 Bg4 8.Be3 Nfd7',
          name: 'Smyslov',
          note: 'The knight heads for b6, gaining time on the queen, and ...Nc6 hits d4.',
          line: 'smyslov'
        },
        {
          moves: '7.e4 Na6',
          name: 'Prophylactic ...Na6',
          note: '...c5 follows; the knight can come to c5 or b4.',
          line: 'na6'
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
          { uci: 'd1b3', san: 'Qb3', note: 'Attacks d5 and forces a decision.' },
          { uci: 'd5c4', san: 'dxc4' },
          { uci: 'b3c4', san: 'Qxc4' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'e2e4', san: 'e4', note: 'The classical centre, but the queen is exposed.' },
          { uci: 'a7a6', san: 'a6', note: 'The Hungarian: ...b5 comes with tempo.' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'b7b5', san: 'b5' },
          { uci: 'c4b3', san: 'Qb3' },
          { uci: 'c7c5', san: 'c5', note: 'Hits d4 at once.' }
        ]
      },
      lines: [
        {
          id: 'hungarian',
          name: '7.e4 a6: the Hungarian',
          kind: 'Main line',
          summary: 'Black chases the queen with ...b5 and strikes with ...c5, using the long diagonal against d4.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'b7b5', san: 'b5', note: 'Gains time on the queen and space on the queenside.' },
            { uci: 'c4b3', san: 'Qb3' },
            { uci: 'c7c5', san: 'c5', note: 'The queen has moved four times; Black hits d4.' }
          ]
        },
        {
          id: 'smyslov',
          name: '7.e4 Bg4: the Smyslov',
          kind: 'Alternative',
          summary: 'Black pins the f3-knight, reroutes the f6-knight to b6 with tempo and hits d4 with ...Nc6 and ...Ne5.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'c8g4', san: 'Bg4', note: 'Pins a defender of d4.' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'f6d7', san: 'Nfd7', note: 'Heading for b6, with tempo on the queen.' },
            { uci: 'c4b3', san: 'Qb3' },
            { uci: 'd7b6', san: 'Nb6' },
            { uci: 'a1d1', san: 'Rd1' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'c6e5', san: 'Ne5', note: 'The knight is strong on e5 and eyes f3 and c4.' }
          ]
        },
        {
          id: 'na6',
          name: '7.e4 Na6: the prophylactic line',
          kind: 'Alternative',
          summary: 'Black prepares ...c5. After d5 and ...e6, the e-file opens and the f5 square is a good post for the light-squared bishop.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'b8a6', san: 'Na6', note: 'Supports ...c5 and eyes b4 and c5.' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'c8f5', san: 'Bf5', note: 'Active development; ...Re8 and ...Ne4 can follow.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Letting White consolidate',
          text: "The queen on c4 is White's weak point. If Black plays slowly, White completes Be2, Be3 and O-O and the big centre becomes a strength. Gain time on the queen first."
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Space-gaining pawn pushes',
          text: "White's e5 and d5 pushes can come with tempo against the f6-knight or the c6-knight. Know where your knights go before White pushes."
        }
      ],
      transpositions: [],
      lessons: ['black-vs-d4-17'],
      uncertain: 'The Na6 and Smyslov lines stop at typical positions; both continue with deep theory.'
    },
    {
      id: 'b-grunfeld-bf4',
      side: 'black',
      group: 'vs-d4',
      family: 'Grunfeld Defence',
      familyId: 'bf-grunfeld',
      name: 'Grunfeld Defence: 4.Bf4 Variation',
      short: '4.Bf4 Variation',
      aliases: ['Grunfeld with 4.Bf4'],
      eco: 'D82-D83',
      moves: '1.d4 Nf6 2.c4 g6 3.Nc3 d5 4.Bf4 Bg7',
      defining: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'd7d5', 'c1f4', 'f8g7'],
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 12,
      summary: 'White develops the bishop to f4 and eyes c7; Black strikes with ...c5 or offers the c7-pawn for quick development.',
      idea: "4.Bf4 aims at c7 and supports a quiet e3 set-up. Black's most direct answer is 5.e3 c5: after 6.dxc5 Qa5 the c3-knight is pinned and Black regains the pawn with active pieces. The other main option, 5...O-O, offers the c7-pawn after 6.cxd5 Nxd5 7.Nxd5 Qxd5 8.Bxc7 for fast development and pressure on White's light squares.",
      plans: {
        white: [
          'Play e3, Nf3 and Rc1, and use the bishop against c7',
          'Take on c5 or d5 to open lines for the bishop and the rooks'
        ],
        black: [
          'Hit d4 with ...c5, then regain a pawn on c5 with ...Qa5',
          'Develop quickly with ...O-O, ...Nc6 and ...Rd8 against the uncastled king',
          'Consider the c7-pawn sacrifice for activity'
        ]
      },
      responses: [
        {
          moves: '5.e3 c5 6.dxc5 Qa5 7.Rc1 dxc4 8.Bxc4 O-O',
          name: '5...c5',
          note: 'Black regains the c5-pawn with ...Qxc5 and develops ...Nc6.',
          line: 'c5'
        },
        {
          moves: '5.e3 O-O 6.cxd5 Nxd5 7.Nxd5 Qxd5 8.Bxc7 Na6',
          name: 'The c7 gambit',
          note: 'Black offers the c-pawn for development; after 9.Bxa6 Qxg2 10.Qf3 Qxf3 11.Nxf3 bxa6 the endgame is balanced.',
          line: 'gambit'
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
          { uci: 'c1f4', san: 'Bf4', note: 'The bishop eyes c7.' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'c7c5', san: 'c5', note: 'Hits d4 at once.' },
          { uci: 'd4c5', san: 'dxc5' },
          { uci: 'd8a5', san: 'Qa5', note: 'Pins the c3-knight and prepares to regain c5.' },
          { uci: 'a1c1', san: 'Rc1' },
          { uci: 'd5c4', san: 'dxc4' },
          { uci: 'f1c4', san: 'Bxc4' },
          { uci: 'e8g8', san: 'O-O' }
        ]
      },
      lines: [
        {
          id: 'c5',
          name: '5.e3 c5 6.dxc5 Qa5',
          kind: 'Main line',
          summary: 'Black gives a pawn for a moment and regains it with ...Qxc5. The queen is active and Black develops ...Nc6 with a comfortable game.',
          moves: [
            { uci: 'e2e3', san: 'e3' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'd8a5', san: 'Qa5', note: 'Pins the knight.' },
            { uci: 'a1c1', san: 'Rc1' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'f1c4', san: 'Bxc4' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'a5c5', san: 'Qxc5', note: 'The pawn is back.' },
            { uci: 'c4b3', san: 'Bb3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c5a5', san: 'Qa5', note: 'Black has active pieces and no weaknesses.' }
          ]
        },
        {
          id: 'gambit',
          name: '5.e3 O-O: the c7 gambit',
          kind: 'Sharp try',
          summary: 'Black lets White take c7 and answers with ...Na6 and ...Qxg2. The forcing sequence ends in a balanced endgame.',
          moves: [
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'c3d5', san: 'Nxd5' },
            { uci: 'd8d5', san: 'Qxd5' },
            { uci: 'f4c7', san: 'Bxc7' },
            { uci: 'b8a6', san: 'Na6', note: 'Attacks the c7-bishop; if 9.Bxa6, nothing guards g2 any more.' },
            { uci: 'f1a6', san: 'Bxa6' },
            { uci: 'd5g2', san: 'Qxg2' },
            { uci: 'd1f3', san: 'Qf3' },
            { uci: 'g2f3', san: 'Qxf3' },
            { uci: 'g1f3', san: 'Nxf3' },
            { uci: 'b7a6', san: 'bxa6', note: 'Black has the bishop pair and active play for the weak a-pawns.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Forgetting about c7',
          text: 'With the bishop on f4, c7 is a target after an exchange on d5. If you play 5...O-O, know the ...Na6 follow-up; otherwise choose 5...c5.'
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Taking on c4 too soon',
          text: 'After 5.e3 c5 6.dxc5, 6...dxc4? 7.Qxd8+ Kxd8 trades queens and costs Black the right to castle. 6...Qa5 first keeps everything in order.',
          uci: [
            'd2d4',
            'g8f6',
            'c2c4',
            'g7g6',
            'b1c3',
            'd7d5',
            'c1f4',
            'f8g7',
            'e2e3',
            'c7c5',
            'd4c5',
            'd5c4',
            'd1d8',
            'e8d8'
          ]
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'The gambit endgame',
          text: 'After the c7 gambit Black has doubled a-pawns. The bishop pair and activity compensate, but only if Black plays actively.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-d4-17'],
      uncertain: 'Both lines are established theory; White has other moves (5.Rc1, 5.Nf3) not covered here.'
    },
    {
      id: 'b-benoni',
      side: 'black',
      group: 'vs-d4',
      family: 'Benoni Defence',
      familyId: 'bf-benoni',
      name: 'Modern Benoni',
      short: 'Modern Benoni',
      aliases: ['Modern Benoni Defence'],
      eco: 'A70',
      moves: '1.d4 Nf6 2.c4 c5 3.d5 e6 4.Nc3 exd5 5.cxd5 d6',
      defining: ['d2d4', 'g8f6', 'c2c4', 'c7c5', 'd4d5', 'e7e6', 'b1c3', 'e6d5', 'c4d5', 'd7d6'],
      difficulty: 'Advanced',
      style: 'Sharp',
      minutes: 18,
      summary: 'Black accepts less space for a queenside pawn majority and very active pieces; a combative, unbalanced choice.',
      idea: "White has a central majority and space, Black a queenside majority and the long diagonal. Black plays ...g6, ...Bg7, ...O-O, ...Re8 and ...a6, then expands with ...b5, while keeping White's e4-e5 break under control. Piece activity is everything: a passive Benoni is usually a lost Benoni.",
      plans: {
        white: [
          "Prepare e4-e5 to open lines against Black's king and the d6-pawn",
          'Restrain ...b5 with a4 and use the c4 square for a knight'
        ],
        black: [
          'Develop ...g6, ...Bg7, ...O-O, ...Re8, then push ...b5 with ...a6 and ...Rb8',
          'Use the e5 square and the long diagonal; ...Nbd7-e5 is typical',
          'Keep e4-e5 under control with pieces'
        ]
      },
      responses: [
        {
          moves: '6.e4 g6 7.Nf3 Bg7 8.Be2 O-O',
          name: 'Classical',
          note: 'After 9.O-O Re8 Black pressures e4; ...Na6-c7 and ...b5 follow.',
          line: 'classical'
        },
        {
          moves: '6.e4 g6 7.f4 Bg7 8.Bb5+',
          name: 'Taimanov Attack',
          note: 'The most dangerous line: 8...Nfd7 is the reply. Many Benoni players avoid it with the order 1.d4 Nf6 2.c4 e6 3.Nf3 c5.',
          line: 'taimanov'
        },
        {
          moves: '6.Nf3 g6 7.g3 Bg7 8.Bg2 O-O',
          name: 'Fianchetto',
          note: 'A positional battle; Black plays ...Re8, ...Na6-c7 and ...b5.',
          line: 'fianchetto'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'c7c5', san: 'c5', note: 'Provokes d5 and creates an unbalanced structure.' },
          { uci: 'd4d5', san: 'd5' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'e6d5', san: 'exd5', note: 'Opens the e-file and creates a queenside majority (a, b and c pawns against two).' },
          { uci: 'c4d5', san: 'cxd5' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'e2e4', san: 'e4' },
          { uci: 'g7g6', san: 'g6', note: 'The bishop will be superb on the long diagonal.' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f8e8', san: 'Re8', note: 'Pressure on e4: ...Na6-c7 and ...b5 come next.' }
        ]
      },
      lines: [
        {
          id: 'classical',
          name: '6.e4 g6 7.Nf3: the Classical',
          kind: 'Main line',
          summary: 'White develops normally with Be2 and O-O, then Nd2 and f3. Black puts the rook on e8, the knight on c7, and prepares ...b5.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e8', san: 'Re8', note: 'Pressure on e4.' },
            { uci: 'f3d2', san: 'Nd2' },
            { uci: 'b8a6', san: 'Na6', note: 'Heading for c7, where the knight supports ...b5.' },
            { uci: 'f2f3', san: 'f3' },
            { uci: 'a6c7', san: 'Nc7', note: 'Next ...a6, ...Rb8 and ...b5.' }
          ]
        },
        {
          id: 'taimanov',
          name: '7.f4 Bg7 8.Bb5+: the Taimanov',
          kind: 'Sharp try',
          summary: 'The most dangerous line. 8...Nfd7 is the accepted answer: the knight guards e5. Black then castles and brings the a6-knight to b4.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'f2f4', san: 'f4' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1b5', san: 'Bb5+' },
            { uci: 'f6d7', san: 'Nfd7', note: 'Guards e5, so e4-e5 is no longer easy.' },
            { uci: 'a2a4', san: 'a4' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8a6', san: 'Na6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'a6b4', san: 'Nb4', note: 'From b4 the knight eyes c2 and d3 and is hard to dislodge.' }
          ]
        },
        {
          id: 'fianchetto',
          name: '6.Nf3 g6 7.g3: the Fianchetto',
          kind: 'Alternative',
          summary: 'A slower positional fight. Black plays ...Re8, ...Na6-c7 and ...b5, or ...Nbd7 and ...Ne5.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'e8g8', san: 'O-O', note: "Both kings are safe; the fight is about ...b5 and White's e4-e5." },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e8', san: 'Re8', note: 'Watches e4 and e5.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: 'The wrong block against Bb5+',
          text: "In the Taimanov, 8...Nbd7? runs into 9.e5!, splitting Black's position. 8...Nfd7 is the accepted move because the knight guards e5.",
          uci: [
            'd2d4',
            'g8f6',
            'c2c4',
            'c7c5',
            'd4d5',
            'e7e6',
            'b1c3',
            'e6d5',
            'c4d5',
            'd7d6',
            'e2e4',
            'g7g6',
            'f2f4',
            'f8g7',
            'f1b5',
            'b8d7',
            'e4e5'
          ]
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Passive pieces',
          text: 'Black has less space. A slow, passive Benoni usually ends with White breaking through with e4-e5. Develop actively and push ...b5 when it is prepared.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: "White's e4-e5 break",
          text: 'Everything revolves around e5. Keep it under control with ...Re8, ...Nbd7 or ...Nfd7 and the g7-bishop before you start queenside play.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-d4-9'],
      uncertain: 'In the Taimanov line, 11...Nb4 is one established continuation; Black has alternatives.'
    },
    {
      id: 'b-dutch-leningrad',
      side: 'black',
      group: 'vs-d4',
      family: 'Dutch Defence',
      familyId: 'bf-dutch',
      name: 'Dutch Defence: Leningrad Variation',
      short: 'Leningrad Variation',
      aliases: ['Leningrad Dutch'],
      eco: 'A87',
      moves: '1.d4 f5 2.g3 Nf6 3.Bg2 g6',
      defining: ['d2d4', 'f7f5', 'g2g3', 'g8f6', 'f1g2', 'g7g6'],
      difficulty: 'Advanced',
      style: 'Attacking',
      minutes: 15,
      summary: "Combine ...f5 with a King's Indian fianchetto: an ambitious, unbalanced fight for e4 and the kingside.",
      idea: 'Black controls e4 with the f-pawn and develops ...Bg7, ...O-O and ...d6. The typical plan is ...Qe8 (or ...c6 and ...Qa5) to prepare ...e5, which frees the position and unleashes the g7-bishop. Against d4-d5 Black uses the c5 square with ...a5 and ...Na6. Black must watch the weakened e6 square and the e8-h5 diagonal.',
      plans: {
        white: ['Push d5 to gain space and eye the e6 square', "Prepare e2-e4 to open the centre against Black's king"],
        black: [
          'Play ...d6, ...Qe8 and ...e5, or ...a5 and ...Na6-c5 against d5',
          'Use ...Qh5, ...f4 or ...g5 for kingside play',
          'Keep e4 under control with the f5-pawn and the f6-knight'
        ]
      },
      responses: [
        {
          moves: '4.Nf3 Bg7 5.O-O O-O 6.c4 d6 7.Nc3 Qe8',
          name: 'Main line',
          note: '...Qe8 prepares ...e5; against 8.d5 Black plays ...a5 and ...Na6-c5.',
          line: 'qe8'
        },
        {
          moves: '2.Bg5',
          name: 'Anti-Dutch',
          note: 'Black can continue ...g6 and ...Bg7 with the Leningrad plan, or question the bishop with ...h6.'
        },
        {
          moves: '2.e4',
          name: 'Staunton Gambit',
          note: 'White offers a pawn for development. Black takes, 2...fxe4 3.Nc3 Nf6, and should develop rather than cling to the pawn at all costs.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'f7f5', san: 'f5', note: 'Controls e4 at once; an ambitious choice.' },
          { uci: 'g2g3', san: 'g3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'g7g6', san: 'g6', note: "The Leningrad: a King's Indian bishop, with the f-pawn already on f5." },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd8e8', san: 'Qe8', note: 'Prepares ...e5 and can swing to f7 or h5.' },
          { uci: 'd4d5', san: 'd5' },
          { uci: 'a7a5', san: 'a5', note: 'Secures the c5 square for a knight after ...Na6.' }
        ]
      },
      lines: [
        {
          id: 'qe8',
          name: '7.Nc3 Qe8 8.d5: the main line',
          kind: 'Main line',
          summary: 'Black prepares ...e5 with ...Qe8. If White closes with d5, the c5 square belongs to Black: ...a5 and ...Na6-c5.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd8e8', san: 'Qe8', note: 'Prepares ...e5 so that dxe5 dxe5 does not trade queens.' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'a7a5', san: 'a5', note: 'Stops b4, so a knight on c5 cannot be chased by a pawn.' },
            { uci: 'f3d4', san: 'Nd4' },
            { uci: 'b8a6', san: 'Na6', note: 'Heading for c5.' }
          ]
        },
        {
          id: 'c6',
          name: '7...c6: the ...Qa5 plan',
          kind: 'Alternative',
          summary: 'Black prepares ...Qa5 and ...e5 with ...c6. Against d5, ...e5 and dxe6 Bxe6 gives active pieces.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'c7c6', san: 'c6', note: 'Prepares ...Qa5 or ...Qc7 and ...e5.' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'e7e5', san: 'e5', note: 'Strikes at once.' },
            { uci: 'd5e6', san: 'dxe6' },
            { uci: 'c8e6', san: 'Bxe6', note: 'Black has free piece play; the d6-pawn needs watching.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Premature ...e5',
          text: 'After 7.Nc3, 7...e5? 8.dxe5 dxe5 9.Qxd8 Rxd8 10.Nxe5 wins a pawn, because the f6-knight blocks the g7-bishop from defending e5. Prepare the break with ...Qe8 or ...c6.',
          uci: [
            'd2d4',
            'f7f5',
            'g2g3',
            'g8f6',
            'f1g2',
            'g7g6',
            'g1f3',
            'f8g7',
            'e1g1',
            'e8g8',
            'c2c4',
            'd7d6',
            'b1c3',
            'e7e5',
            'd4e5',
            'd6e5',
            'd1d8',
            'f8d8',
            'f3e5'
          ]
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'The e6 weakness',
          text: 'After d5 White can aim a knight at e6 (Nd4-e6). Keep e6 covered, or exchange the knight before it lands there.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Anti-Dutch tries',
          text: '2.Bg5, 2.Nc3 and the Staunton Gambit 2.e4 avoid the main lines. Prepare one sound answer to each before you play the Leningrad.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-d4-10'],
      uncertain: 'In the 7...c6 line, 8.d5 e5 9.dxe6 Bxe6 is one established path; White has other eighth moves.'
    },
    {
      id: 'b-dutch-stonewall',
      side: 'black',
      group: 'vs-d4',
      family: 'Dutch Defence',
      familyId: 'bf-dutch',
      name: 'Dutch Defence: Stonewall Variation',
      short: 'Stonewall Variation',
      aliases: ['Stonewall Dutch', 'Modern Stonewall'],
      eco: 'A90-A95',
      moves: '1.d4 f5 2.g3 Nf6 3.Bg2 e6 4.Nf3 d5',
      defining: ['d2d4', 'f7f5', 'g2g3', 'g8f6', 'f1g2', 'e7e6', 'g1f3', 'd7d5'],
      difficulty: 'Intermediate',
      style: 'Solid',
      minutes: 14,
      summary: 'Black builds a wall of pawns on c6, d5, e6 and f5 to own e4; solid, easy to learn and with kingside chances.',
      idea: 'The Stonewall pawns give Black a permanent outpost on e4 and a firm grip on the light squares, at the cost of a hole on e5 and a hemmed-in c8-bishop. Black develops ...Bd6, ...O-O, ...c6 and ...Qe7, puts a knight on e4, and either reroutes the bishop via d7 and e8 to h5 or plays ...b6 and ...Bb7 or ...Ba6. White aims to trade dark-squared bishops with Bf4 and to plant a knight on e5.',
      plans: {
        white: [
          'Trade dark-squared bishops with Bf4 (or b3 and Ba3) to weaken e5',
          'Put a knight on e5 and open the queenside with cxd5 or b4-b5'
        ],
        black: [
          'Occupy e4 with a knight and keep the f5 and d5 grip',
          'Solve the c8-bishop with ...Bd7-e8-h5 or ...b6 and ...Bb7',
          'Attack on the kingside with ...Qe8-h5 or ...g5 when the centre is safe'
        ]
      },
      responses: [
        {
          moves: '5.O-O Bd6 6.c4 c6 7.b3 Qe7',
          name: 'Main set-up',
          note: 'Black covers e5 with the queen and plans ...b6 and ...Bb7.',
          line: 'b3'
        },
        {
          moves: '5.O-O Bd6 6.c4 c6 7.Bf4 Bxf4 8.gxf4',
          name: 'Bf4: trade the dark bishops',
          note: "White removes Black's good bishop; the doubled f-pawns control e5 but loosen White's king.",
          line: 'bf4'
        },
        {
          moves: '5.c4 c6 6.O-O Bd6',
          name: 'Move order',
          note: 'Usually transposes.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'f7f5', san: 'f5' },
          { uci: 'g2g3', san: 'g3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'd7d5', san: 'd5', note: 'The Stonewall: pawns on d5 and f5 control e4.' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f8d6', san: 'Bd6', note: 'The good bishop: it controls e5.' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'c7c6', san: 'c6', note: 'Completes the wall.' },
          { uci: 'b2b3', san: 'b3' },
          { uci: 'd8e7', san: 'Qe7', note: 'Covers e5 and prepares ...b6.' },
          { uci: 'c1b2', san: 'Bb2' },
          { uci: 'b7b6', san: 'b6', note: 'Prepares ...Bb7 to solve the problem bishop.' }
        ]
      },
      lines: [
        {
          id: 'b3',
          name: '7.b3 Qe7 8.Bb2 b6',
          kind: 'Main line',
          summary: 'Black covers e5, fianchettoes the problem bishop with ...b6 and ...Bb7, and castles. White aims for Ne5 and pressure on the long diagonal.',
          moves: [
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8d6', san: 'Bd6' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'b2b3', san: 'b3' },
            { uci: 'd8e7', san: 'Qe7', note: 'Covers e5.' },
            { uci: 'c1b2', san: 'Bb2' },
            { uci: 'b7b6', san: 'b6', note: 'The modern way to develop the c8-bishop.' },
            { uci: 'f3e5', san: 'Ne5' },
            { uci: 'c8b7', san: 'Bb7' },
            { uci: 'b1d2', san: 'Nd2' },
            { uci: 'e8g8', san: 'O-O', note: 'Black challenges the e5-knight next with ...Nbd7.' }
          ]
        },
        {
          id: 'bf4',
          name: '7.Bf4: trading the dark-squared bishops',
          kind: 'Alternative',
          summary: "White trades Black's good bishop. After gxf4 White controls e5 with pawns, but Black keeps a firm grip on e4 and White's king is a little exposed.",
          moves: [
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8d6', san: 'Bd6' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'c1f4', san: 'Bf4', note: "Offers to trade Black's good bishop." },
            { uci: 'd6f4', san: 'Bxf4' },
            { uci: 'g3f4', san: 'gxf4' },
            { uci: 'e8g8', san: 'O-O', note: 'Black continues with ...Nbd7, ...Ne4 and ...Qe7 or ...b6.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'black',
          title: 'The bad c8-bishop',
          text: 'With pawns on c6, d5, e6 and f5, the c8-bishop is shut in. If Black never solves it with ...b6 and ...Bb7 or ...Bd7-e8-h5, the endgame can be bad bishop against good knight.'
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Allowing a free knight on e5',
          text: "The e5 square is the Stonewall's hole. A white knight there, supported by f4 or d4, can be very strong. Challenge it with ...Nd7 or ...Nbd7 before it settles."
        }
      ],
      transpositions: [],
      lessons: ['black-vs-d4-20', 'middlegames-1'],
      uncertain: 'The move orders in the 7.b3 line vary in practice; Black can also castle before ...b6.'
    },
    {
      id: 'b-dutch-classical',
      side: 'black',
      group: 'vs-d4',
      family: 'Dutch Defence',
      familyId: 'bf-dutch',
      name: 'Dutch Defence: Classical Variation (Ilyin-Zhenevsky)',
      short: 'Classical Variation',
      aliases: ['Ilyin-Zhenevsky System', 'Classical Dutch'],
      eco: 'A96-A99',
      moves: '1.d4 f5 2.g3 Nf6 3.Bg2 e6 4.Nf3 Be7 5.O-O O-O 6.c4 d6',
      defining: ['d2d4', 'f7f5', 'g2g3', 'g8f6', 'f1g2', 'e7e6', 'g1f3', 'f8e7', 'e1g1', 'e8g8', 'c2c4', 'd7d6'],
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 14,
      summary: 'Black develops ...e6, ...Be7 and ...d6, then prepares ...e5 with ...Qe8; flexible and less committal than the Stonewall or the Leningrad.',
      idea: 'In the Ilyin-Zhenevsky Black keeps the d-pawn on d6, so e5 is controlled and the c8-bishop is not shut in for good. The main plan is ...Qe8, then ...Qg6 or ...Qh5 and the ...e5 break, which gains central space and frees the game. White usually answers with Re1 and e4, or with b3 and Ba3 to hit d6.',
      plans: {
        white: [
          'Prepare e2-e4 with Nc3 and Re1 or Qc2 to open the centre',
          'Play b3 and Ba3, or d5, to target d6 and the e6 square'
        ],
        black: [
          'Play ...Qe8 and ...Qg6 or ...Qh5, then break with ...e5',
          'Meet e4 by exchanging on e4 and using the half-open f-file',
          'Support the queenside with ...a5 and ...Na6 or ...Nc6'
        ]
      },
      responses: [
        {
          moves: '7.Nc3 Qe8 8.Re1 Qg6 9.e4 fxe4 10.Nxe4 Nxe4 11.Rxe4',
          name: 'Main line 8.Re1',
          note: 'White opens the centre; Black uses the f-file and prepares ...e5 or ...Nc6.',
          line: 're1'
        },
        {
          moves: '7.Nc3 Qe8 8.b3 a5 9.Ba3 Na6',
          name: 'b3 and Ba3',
          note: 'White eyes d6; Black supports b4 and c5 and keeps ...e5 in reserve.',
          line: 'b3'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'f7f5', san: 'f5' },
          { uci: 'g2g3', san: 'g3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'd7d6', san: 'd6', note: 'The Ilyin-Zhenevsky: d6 controls e5.' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd8e8', san: 'Qe8', note: 'Prepares ...e5 and can swing to g6 or h5.' },
          { uci: 'f1e1', san: 'Re1' },
          { uci: 'e8g6', san: 'Qg6', note: 'Eyes the kingside and supports ...e5.' },
          { uci: 'e2e4', san: 'e4' },
          { uci: 'f5e4', san: 'fxe4', note: "Opens the f-file for Black's rook." }
        ]
      },
      lines: [
        {
          id: 're1',
          name: '7.Nc3 Qe8 8.Re1: White plays e4',
          kind: 'Main line',
          summary: 'White opens the centre with e4. Black exchanges on e4, uses the half-open f-file and prepares ...Nc6 and ...e5.',
          moves: [
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd8e8', san: 'Qe8', note: 'Prepares ...e5.' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'e8g6', san: 'Qg6' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'f5e4', san: 'fxe4' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'f6e4', san: 'Nxe4' },
            { uci: 'e1e4', san: 'Rxe4', note: 'Black continues with ...Nc6 or ...Bf6 and aims for ...e5.' }
          ]
        },
        {
          id: 'b3',
          name: '7.Nc3 Qe8 8.b3: Ba3 against d6',
          kind: 'Alternative',
          summary: 'White aims the bishop at d6 from a3. Black supports the queenside with ...a5 and ...Na6 and keeps ...e5 in reserve.',
          moves: [
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd8e8', san: 'Qe8' },
            { uci: 'b2b3', san: 'b3' },
            { uci: 'a7a5', san: 'a5', note: 'Controls b4.' },
            { uci: 'c1a3', san: 'Ba3' },
            { uci: 'b8a6', san: 'Na6', note: 'Covers b4 and c5; ...c6 and ...e5 can follow.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Premature ...e5',
          text: 'After 7.Nc3, 7...e5? 8.dxe5 dxe5 9.Qxd8 Rxd8 10.Nxe5 wins a pawn: nothing defends e5. Prepare the break with ...Qe8 first.',
          uci: [
            'd2d4',
            'f7f5',
            'g2g3',
            'g8f6',
            'f1g2',
            'e7e6',
            'g1f3',
            'f8e7',
            'e1g1',
            'e8g8',
            'c2c4',
            'd7d6',
            'b1c3',
            'e6e5',
            'd4e5',
            'd6e5',
            'd1d8',
            'f8d8',
            'f3e5'
          ]
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'A weak e6-pawn after e4',
          text: 'When White opens the centre with e4, the e6-pawn can become a target on the half-open e-file. Keep it supported and use the f-file for counterplay.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-d4-10'],
      uncertain: 'The 8.b3 line shows a typical set-up; after 9.Ba3 Black has several established moves.'
    },
    {
      id: 'b-vs-london',
      side: 'black',
      group: 'vs-d4',
      family: 'London System',
      familyId: 'bf-vs-london',
      name: 'London System: the ...c5 and ...Qb6 plan',
      short: '...c5 and ...Qb6 plan',
      eco: 'D02',
      moves: '1.d4 d5 2.Bf4 c5 3.e3 Nc6',
      defining: ['d2d4', 'd7d5', 'c1f4', 'c7c5', 'e2e3', 'b8c6'],
      difficulty: 'Beginner',
      style: 'Flexible',
      minutes: 10,
      summary: "Meet the London by hitting d4 with ...c5 and b2 with ...Qb6, exploiting the bishop's early departure from c1.",
      idea: "Once White's bishop leaves c1, b2 is guarded only by the queen. Black plays ...c5, ...Nc6 and ...Qb6 to press d4 and b2 together, then chooses between ...c4 (queenside space) and ...cxd4. Calm development with ...e6, ...Nf6, ...Bd6 to trade the f4-bishop, and ...O-O is the reliable follow-up.",
      plans: {
        white: [
          'Build the c3-d4-e3 pyramid with Nd2, Ngf3 and Bd3',
          'Attack on the kingside with Ne5, Bd3, Qf3 or h4 if Black castles carelessly'
        ],
        black: [
          'Press b2 and d4 with ...c5, ...Nc6 and ...Qb6',
          'Challenge the London bishop with ...Bd6',
          'Exchange a knight that lands on e5 rather than let it lead an attack'
        ]
      },
      responses: [
        {
          moves: '4.c3 Qb6 5.Qb3 c4 6.Qc2 Bf5',
          name: 'Main line',
          note: 'Queenside space with tempo. 7.Qxf5?? Qxb2 wins the a1-rook, so White plays 7.Qc1 and Black continues ...e6, ...Nf6 and ...b5.',
          line: 'c3'
        },
        {
          moves: '4.Nf3 Nf6 5.c3 Qb6',
          name: 'Natural order',
          note: 'The same pressure on b2 and d4; White must spend time on b2 with Qb3, Qc2 or Qc1.'
        },
        {
          moves: '4.dxc5 e6',
          name: '4.dxc5',
          note: 'White gives up the centre; Black recaptures with ...Bxc5 and develops comfortably.',
          line: 'dxc5'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'c1f4', san: 'Bf4' },
          { uci: 'c7c5', san: 'c5', note: 'Strike while b2 is short of defenders.' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'c2c3', san: 'c3' },
          { uci: 'd8b6', san: 'Qb6', note: 'Hits b2 and d4 at the same time.' },
          { uci: 'd1b3', san: 'Qb3' },
          { uci: 'c5c4', san: 'c4', note: 'Gains time on the queen and space on the queenside.' },
          { uci: 'b3c2', san: 'Qc2' },
          { uci: 'c8f5', san: 'Bf5', note: 'Offers the bishop: 7.Qxf5?? Qxb2 wins the a1-rook.' },
          { uci: 'c2c1', san: 'Qc1', note: 'The safe retreat that keeps b2 defended.' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g8f6', san: 'Nf6', note: 'Black follows with ...Be7, ...O-O and a queenside advance with ...b5.' }
        ]
      },
      lines: [
        {
          id: 'c3',
          name: '4.c3 Qb6 5.Qb3 c4',
          kind: 'Main line',
          summary: 'Black gains queenside space with tempo and offers the f5-bishop as bait: Qxf5 drops the a1-rook to ...Qxb2.',
          moves: [
            { uci: 'c2c3', san: 'c3' },
            { uci: 'd8b6', san: 'Qb6', note: 'Hits b2 and d4 together.' },
            { uci: 'd1b3', san: 'Qb3' },
            { uci: 'c5c4', san: 'c4', note: 'Gains time on the queen and space on the queenside.' },
            { uci: 'b3c2', san: 'Qc2' },
            { uci: 'c8f5', san: 'Bf5', note: 'Offers the bishop: 7.Qxf5?? Qxb2 wins the a1-rook.' },
            { uci: 'c2c1', san: 'Qc1' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e8g8', san: 'O-O', note: 'Black is comfortable; ...b5 and ...b4 can follow.' }
          ]
        },
        {
          id: 'dxc5',
          name: '4.dxc5: White gives up the centre',
          kind: 'Sideline',
          summary: 'White takes on c5 but cannot keep the pawn comfortably. Black recaptures with the bishop and develops freely.',
          moves: [
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'e7e6', san: 'e6', note: 'Opens the f8-bishop, which will recapture on c5.' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8c5', san: 'Bxc5' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'e8g8', san: 'O-O', note: 'Black has a pleasant QGD-type position with the bishop active on c5.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'white',
          title: 'Taking the f5-bishop',
          text: 'After 6...Bf5 the bishop is bait: 7.Qxf5?? Qxb2 attacks the a1-rook and wins back more than the piece. White must retreat with 7.Qc1.',
          uci: [
            'd2d4',
            'd7d5',
            'c1f4',
            'c7c5',
            'e2e3',
            'b8c6',
            'c2c3',
            'd8b6',
            'd1b3',
            'c5c4',
            'b3c2',
            'c8f5',
            'c2f5',
            'b6b2'
          ]
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Grabbing b2 without checking',
          text: 'Taking on b2 is not always safe. If White can answer with Rb1, Nb5 or Nc3-b5 ideas against c7, the queen can be trapped or Black forked. Check the follow-up first.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Careless castling',
          text: 'The London has attacking ideas: Ne5, Bd3, Qf3 or h4 against a king on g8. Keep a knight on f6 and be ready to exchange a knight that lands on e5.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-d4-3'],
      uncertain: 'After 7.Qc1 move orders vary; the last two moves of the sample line show normal development rather than one fixed main line.'
    },
    {
      id: 'b-vs-colle',
      side: 'black',
      group: 'vs-d4',
      family: 'Colle System',
      familyId: 'bf-vs-colle',
      name: 'Colle System: the ...c5 and ...Bd6 set-up',
      short: '...c5 and ...Bd6 set-up',
      eco: 'D05',
      moves: '1.d4 d5 2.Nf3 Nf6 3.e3 e6 4.Bd3 c5',
      defining: ['d2d4', 'd7d5', 'g1f3', 'g8f6', 'e2e3', 'e7e6', 'f1d3', 'c7c5'],
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 10,
      summary: "Against the quiet Colle, strike early with ...c5 and develop naturally, ready for White's e3-e4 break.",
      idea: "The Colle aims for e3-e4 with pieces pointing at Black's king, especially the d3-bishop at h7. Black answers with ...c5 and ...Nc6 to press d4, castles, keeps a knight on f6 to guard h7, and makes sure that e4 can be met by exchanges in the centre. ...Qc7 controls e5 so that White cannot push e4-e5 easily.",
      plans: {
        white: [
          "Play c3, Nbd2, O-O and e3-e4 to open lines towards Black's king",
          'In the Zukertort version, b3 and Bb2 with Ne5 and f4'
        ],
        black: [
          'Develop ...c5, ...Nc6, ...Bd6 and ...O-O, keeping the f6-knight to defend h7',
          'Meet e4 with exchanges on d4 or e4 to keep the centre open',
          'Use ...Qc7 to control e5'
        ]
      },
      responses: [
        {
          moves: '5.c3 Nc6 6.Nbd2 Bd6 7.O-O O-O',
          name: 'Colle-Koltanowski',
          note: 'After 8.dxc5 Bxc5 9.e4 Qc7 Black controls e5. 8.e4 is met by exchanges in the centre, leaving White an isolated d-pawn.',
          line: 'koltanowski'
        },
        {
          moves: '5.b3 Nc6 6.O-O Bd6 7.Bb2 O-O',
          name: 'Colle-Zukertort',
          note: 'White aims for Ne5 and f4. Black can mirror with ...b6 and ...Bb7, and exchanges a knight that comes to e5.',
          line: 'zukertort'
        },
        {
          moves: '5.O-O Nc6 6.b3',
          name: 'Flexible order',
          note: 'Usually transposes; Black keeps the same development.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'f1d3', san: 'Bd3' },
          { uci: 'c7c5', san: 'c5', note: "Hit d4 before White's set-up is complete." },
          { uci: 'c2c3', san: 'c3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'b1d2', san: 'Nbd2' },
          { uci: 'f8d6', san: 'Bd6', note: 'The bishop controls e5 and eyes h2.' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'd4c5', san: 'dxc5', note: 'White frees d4 and prepares e4.' },
          { uci: 'd6c5', san: 'Bxc5' },
          { uci: 'e3e4', san: 'e4' },
          { uci: 'd8c7', san: 'Qc7', note: 'Controls e5, so e4-e5 is no longer easy, and eyes h2.' }
        ]
      },
      lines: [
        {
          id: 'koltanowski',
          name: '8.dxc5 Bxc5 9.e4: Colle-Koltanowski',
          kind: 'Main line',
          summary: 'White prepares e3-e4 by first taking on c5. Black answers e4 with ...Qc7, controlling e5 so that e4-e5 is no longer easy.',
          moves: [
            { uci: 'c2c3', san: 'c3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'f8d6', san: 'Bd6', note: 'The bishop controls e5 and eyes h2.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'd6c5', san: 'Bxc5' },
            { uci: 'e3e4', san: 'e4' },
            { uci: 'd8c7', san: 'Qc7', note: 'Controls e5 and eyes h2.' }
          ]
        },
        {
          id: 'early-e4',
          name: '8.e4: the immediate break',
          kind: 'Alternative',
          summary: 'White threatens e4-e5, forking bishop and knight. Black exchanges in the centre and White is left with an isolated d-pawn.',
          moves: [
            { uci: 'c2c3', san: 'c3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'f8d6', san: 'Bd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e3e4', san: 'e4', note: 'Threatens e5, forking the d6-bishop and the f6-knight.' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'd5e4', san: 'dxe4', note: 'With the e-pawn gone, the fork can no longer happen.' },
            { uci: 'd2e4', san: 'Nxe4' },
            { uci: 'd6e7', san: 'Be7', note: 'Keeps the f6-knight, which guards h7; Black will blockade the d-pawn on d5.' }
          ]
        },
        {
          id: 'zukertort',
          name: '5.b3: Colle-Zukertort',
          kind: 'Alternative',
          summary: 'White fianchettoes on the queenside and aims for Ne5 and f4. Black mirrors with ...b6 and ...Bb7 and is ready to exchange the e5-knight.',
          moves: [
            { uci: 'b2b3', san: 'b3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8d6', san: 'Bd6' },
            { uci: 'c1b2', san: 'Bb2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'b7b6', san: 'b6', note: 'Mirrors the queenside fianchetto.' },
            { uci: 'f3e5', san: 'Ne5' },
            { uci: 'c8b7', san: 'Bb7', note: 'Black can exchange on e5 or play ...Ne7 and ...Ne4.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'black',
          title: 'The e4-e5 fork',
          text: 'After 8.e4, a slow move such as 8...h6? allows 9.e5, attacking the d6-bishop and the f6-knight at once. Exchange on d4 or e4 first.',
          uci: [
            'd2d4',
            'd7d5',
            'g1f3',
            'g8f6',
            'e2e3',
            'e7e6',
            'f1d3',
            'c7c5',
            'c2c3',
            'b8c6',
            'b1d2',
            'f8d6',
            'e1g1',
            'e8g8',
            'e3e4',
            'h7h6',
            'e4e5'
          ]
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Removing the f6-knight',
          text: 'The f6-knight guards h7 against the d3-bishop. If it is exchanged or chased away carelessly, the Greek gift sacrifice Bxh7+ with Ng5 and Qh5 becomes a real danger.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'The Zukertort Ne5 and f4',
          text: 'In the Zukertort, a knight on e5 backed by f4 and the b2-bishop can start a kingside attack. Exchange it or undermine it with ...Nd7 or ...f6 in time.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-d4-11']
    },
    {
      id: 'b-vs-trompowsky',
      side: 'black',
      group: 'vs-d4',
      family: 'Trompowsky Attack',
      familyId: 'bf-vs-trompowsky',
      name: 'Trompowsky Attack: 2...e6',
      short: '2...e6',
      eco: 'A45',
      moves: '1.d4 Nf6 2.Bg5 e6',
      defining: ['d2d4', 'g8f6', 'c1g5', 'e7e6'],
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 8,
      summary: 'Against the Trompowsky, ...e6 lets Black recapture on f6 with the queen and keep a healthy pawn structure.',
      idea: "White's 2.Bg5 threatens to double Black's pawns with Bxf6. After 2...e6 Black can always recapture with the queen. If White plays 3.e4, Black asks the bishop with ...h6; after Bxf6 Qxf6 Black owns the bishop pair and the dark squares, and develops with ...d6, ...Nc6 or ...Nd7, sometimes adding ...g5 to stop f2-f4.",
      plans: {
        white: [
          'Build a centre with e4 and Nc3 after giving up the bishop',
          'Play quietly with Nf3, e3 and c3 or Nbd2, Torre-style'
        ],
        black: [
          'Recapture on f6 with the queen and use the bishop pair',
          'Against quiet set-ups, strike with ...c5 and ...d5 or ...b6',
          'Against 3.e4, play ...h6 so White must decide about the bishop at once'
        ]
      },
      responses: [
        {
          moves: '3.e4 h6 4.Bxf6 Qxf6',
          name: '3.e4',
          note: 'White gets the centre, Black the bishop pair. Black develops with ...d6 and ...Nc6 or ...Nd7, or pins with ...Bb4 after Nc3.',
          line: 'e4'
        },
        {
          moves: '3.Nf3 h6',
          name: 'Torre-style',
          note: "If 4.Bxf6 Qxf6 the bishops are Black's; if 4.Bh4 Black can play ...c5 or ...b6 and ...Bb7.",
          line: 'torre'
        },
        {
          moves: '3.e3 c5',
          name: 'Quiet 3.e3',
          note: 'Black strikes at d4 and develops easily; ...Qb6 can hit b2 once the bishop has left c1.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c1g5', san: 'Bg5' },
          { uci: 'e7e6', san: 'e6', note: 'Now Bxf6 can be met by ...Qxf6 with healthy pawns.' },
          { uci: 'e2e4', san: 'e4' },
          { uci: 'h7h6', san: 'h6', note: 'Makes White decide about the bishop at once.' },
          { uci: 'g5f6', san: 'Bxf6' },
          { uci: 'd8f6', san: 'Qxf6', note: 'The bishop pair and the dark squares belong to Black.' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'd1d2', san: 'Qd2' },
          { uci: 'g7g5', san: 'g5', note: 'Stops f2-f4 and gives the bishop the g7 square; a common idea here.' }
        ]
      },
      lines: [
        {
          id: 'e4',
          name: '3.e4 h6 4.Bxf6 Qxf6',
          kind: 'Main line',
          summary: 'White gets the centre, Black the bishop pair and the dark squares. Black develops with ...d6 and often ...g5 to stop f4.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'h7h6', san: 'h6', note: 'Makes White decide about the bishop at once.' },
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'd8f6', san: 'Qxf6', note: 'The bishop pair and the dark squares belong to Black.' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'g7g5', san: 'g5', note: 'Stops f2-f4 and gives the bishop the g7 square.' }
          ]
        },
        {
          id: 'bh4',
          name: '4.Bh4?: the pin breaks',
          kind: 'Sideline',
          summary: 'If White keeps the bishop with 4.Bh4, ...g5 and ...Nxe4 win the e4-pawn, because the pin on f6 has gone.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5h4', san: 'Bh4' },
            { uci: 'g7g5', san: 'g5', note: 'Breaks the pin with tempo.' },
            { uci: 'h4g3', san: 'Bg3' },
            { uci: 'f6e4', san: 'Nxe4', note: 'The knight is no longer pinned: Black wins a pawn.' }
          ]
        },
        {
          id: 'torre',
          name: '3.Nf3: Torre-style',
          kind: 'Alternative',
          summary: "White plays a quiet Torre-type set-up. Black hits d4 with ...c5 and develops the queen's bishop to b7.",
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'h7h6', san: 'h6', note: 'Asks the bishop; 4.Bxf6 Qxf6 gives Black the bishop pair.' },
            { uci: 'g5h4', san: 'Bh4' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'b7b6', san: 'b6' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'c8b7', san: 'Bb7', note: 'A flexible set-up: ...Be7, ...O-O and ...d6 or ...cxd4 follow.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Ignoring the pin with ...Nxe4',
          text: 'Before ...h6, the f6-knight is pinned to the queen: after 3.e4 Nxe4?? 4.Bxd8 White wins the queen for a bishop.',
          uci: ['d2d4', 'g8f6', 'c1g5', 'e7e6', 'e2e4', 'f6e4', 'g5d8']
        },
        {
          kind: 'Trap',
          side: 'white',
          title: 'Keeping the bishop with 4.Bh4',
          text: 'After 3.e4 h6, the retreat 4.Bh4? allows 4...g5 5.Bg3 Nxe4, winning a pawn because the pin has been broken.',
          uci: ['d2d4', 'g8f6', 'c1g5', 'e7e6', 'e2e4', 'h7h6', 'g5h4', 'g7g5', 'h4g3', 'f6e4']
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'The bishop pair is not an automatic win',
          text: 'After Bxf6 Qxf6 White has a lead in development and the centre. Black must open the position gradually and not leave the queen exposed on f6.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-d4-12'],
      uncertain: 'After 6.Qd2 in the main line Black has several established moves (...g5, ...Nc6, ...a6); the Torre-style line shows a typical set-up rather than one fixed main line.'
    },
    {
      id: 'b-english-four-knights',
      side: 'black',
      group: 'vs-flank',
      family: 'English Opening',
      familyId: 'bf-english',
      name: 'English: Four Knights with ...e5 (Reversed Sicilian)',
      short: 'Four Knights (...e5, ...Nf6, ...Nc6)',
      aliases: ['Four Knights English', 'Reversed Sicilian'],
      eco: 'A28',
      moves: '1.c4 e5 2.Nc3 Nf6 3.Nf3 Nc6',
      defining: ['c2c4', 'e7e5', 'b1c3', 'g8f6', 'g1f3', 'b8c6'],
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 15,
      summary: 'Meet 1.c4 with ...e5: a Sicilian with colours reversed, in which Black develops quickly and claims the centre.',
      idea: 'White is playing a Sicilian a tempo up, so Black aims for sound, active development rather than Sicilian-style ambition. With ...e5, ...Nf6 and ...Nc6 Black controls d4; then ...Bb4 (pressing c3 and e4) or ...d5 (a Reversed Dragon) gives a clear plan. The push ...e4 to kick the f3-knight is a recurring resource.',
      plans: {
        white: [
          'Fianchetto with g3 and Bg2, then expand on the queenside with a3 and b4',
          'Open the centre with d4, or restrain ...e4 with e3 and Qc2'
        ],
        black: [
          'Develop ...Bb4 and castle, then gain space with ...e4',
          'Or play ...d5 and ...Nb6 (Reversed Dragon) with ...Be7, ...O-O and ...Be6',
          'Use the d4 square, for example with ...Nd4'
        ]
      },
      responses: [
        {
          moves: '4.g3 Bb4 5.Bg2 O-O 6.O-O e4',
          name: 'Main line',
          note: "...e4 kicks the knight; after 7.Ng5 Bxc3 8.bxc3 Re8 Black's centre is well supported. 4...d5 is the Reversed Dragon alternative.",
          line: 'bb4'
        },
        {
          moves: '4.e3 Bb4 5.Qc2 O-O',
          name: '4.e3',
          note: 'White restrains ...e4 and prepares Nd5 or d4. Black keeps e5 solid with ...Re8 and takes on c3 when it helps.'
        },
        {
          moves: '4.d4 exd4 5.Nxd4 Bb4',
          name: '4.d4',
          note: "The open line: after 6.Bg5 h6 7.Bh4 Bxc3+ 8.bxc3 Ne5 White's doubled c-pawns are targets.",
          line: 'd4'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'c2c4', san: 'c4' },
          { uci: 'e7e5', san: 'e5', note: 'A reversed Sicilian: Black claims d4 and e4 at once.' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'g2g3', san: 'g3' },
          { uci: 'd7d5', san: 'd5', note: 'The Reversed Dragon: Black occupies the centre.' },
          { uci: 'c4d5', san: 'cxd5' },
          { uci: 'f6d5', san: 'Nxd5' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'd5b6', san: 'Nb6', note: "Steps back out of the bishop's diagonal and keeps an eye on c4 and d5." },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'd2d3', san: 'd3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'a2a3', san: 'a3' },
          { uci: 'c8e6', san: 'Be6', note: 'Solid development; if b4-b5 comes, the c6-knight jumps to d4.' }
        ]
      },
      lines: [
        {
          id: 'bb4',
          name: '4.g3 Bb4: ...e4 with tempo',
          kind: 'Main line',
          summary: 'Black pins the c3-knight, castles and pushes ...e4. After Ng5, ...Bxc3 and ...Re8 support the pawn; if White breaks with f3, Black takes the centre with ...d5.',
          moves: [
            { uci: 'g2g3', san: 'g3' },
            { uci: 'f8b4', san: 'Bb4', note: 'Eyes the c3-knight, which guards e4.' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e5e4', san: 'e4', note: 'Kicks the f3-knight and gains space.' },
            { uci: 'f3g5', san: 'Ng5' },
            { uci: 'b4c3', san: 'Bxc3', note: 'Removes the other piece that attacks e4.' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'f8e8', san: 'Re8' },
            { uci: 'f2f3', san: 'f3' },
            { uci: 'e4f3', san: 'exf3' },
            { uci: 'g5f3', san: 'Nxf3' },
            { uci: 'd7d5', san: 'd5', note: 'Black takes the centre with a comfortable position.' }
          ]
        },
        {
          id: 'd5',
          name: '4.g3 d5: the Reversed Dragon',
          kind: 'Alternative',
          summary: 'Black occupies the centre with ...d5 and retreats the knight to b6. A Dragon Sicilian with colours reversed: solid if Black keeps the e5-pawn well supported.',
          moves: [
            { uci: 'g2g3', san: 'g3' },
            { uci: 'd7d5', san: 'd5', note: 'The Reversed Dragon.' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'd5b6', san: 'Nb6', note: "Steps out of the bishop's diagonal and keeps an eye on c4 and d5." },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'c8e6', san: 'Be6', note: 'Solid development; if b4-b5 comes, the c6-knight jumps to d4.' }
          ]
        },
        {
          id: 'd4',
          name: '4.d4: the open line',
          kind: 'Alternative',
          summary: 'After ...Bxc3+ White has the bishop pair but doubled c-pawns. Black centralises with ...Ne5 and attacks c4.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'f8b4', san: 'Bb4' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5h4', san: 'Bh4' },
            { uci: 'b4c3', san: 'Bxc3+', note: "Doubles White's c-pawns, as in a Nimzo-Indian." },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'c6e5', san: 'Ne5', note: 'Hits c4 and controls d3.' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e5g6', san: 'Ng6' },
            { uci: 'h4g3', san: 'Bg3' },
            { uci: 'f6e4', san: 'Ne4', note: 'Active knights against the weakened queenside.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'white',
          title: 'Grabbing e5 after ...Nd4',
          text: 'After 4.g3 Nd4 5.Nxe5? Qe7, knight retreats such as 6.Nd3?? allow 6...Nf3#, because the e2-pawn is pinned. 6.f4 is the only way to keep the material.',
          uci: ['c2c4', 'e7e5', 'b1c3', 'g8f6', 'g1f3', 'b8c6', 'g2g3', 'c6d4', 'f3e5', 'd8e7', 'e5d3', 'd4f3']
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Giving the bishop for nothing',
          text: 'After ...Bxc3 White owns the bishop pair. It pays only if Black gains something concrete: support for ...e4, or pressure on the doubled c-pawns with ...Ne5 and ...d6.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Forgetting White is a tempo up',
          text: 'This is a Sicilian with colours reversed and an extra move for White. Over-ambitious Sicilian-style plans can backfire; aim for sound development and a firm centre.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-flank-1', 'black-vs-flank-2', 'black-vs-flank-9']
    },
    {
      id: 'b-english-symmetrical',
      side: 'black',
      group: 'vs-flank',
      family: 'English Opening',
      familyId: 'bf-english',
      name: 'English: Symmetrical Variation',
      short: 'Symmetrical Variation (...c5 and ...g6)',
      aliases: ['Symmetrical English'],
      eco: 'A36',
      moves: '1.c4 c5 2.Nc3 Nc6 3.g3 g6 4.Bg2 Bg7',
      defining: ['c2c4', 'c7c5', 'b1c3', 'b8c6', 'g2g3', 'g7g6', 'f1g2', 'f8g7'],
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 12,
      summary: "Answer 1.c4 with ...c5 and mirror White's fianchetto; solid and hard to crack, with chances to take over later.",
      idea: "Black copies White's set-up so every White plan meets a ready answer. The skill is breaking the symmetry at the right moment: ...e6 and ...d5, ...e5 to clamp d4, or ...a6 and ...b5 on the queenside. If White opens with d4, Black exchanges and uses the g7-bishop against c3 and b2.",
      plans: {
        white: ['Open the centre with d4, or set up the Botvinnik bind with e4 and d3', 'Expand with a3, Rb1 and b4'],
        black: [
          'Mirror the development, then break with ...d5 (after ...e6) or play ...e5',
          'Use the g7-bishop with ...Qa5, or ...a6, ...Rb8 and ...b5 on the queenside',
          'If White plays d4, exchange on d4 and press the c3-knight'
        ]
      },
      responses: [
        {
          moves: '5.Nf3 Nf6 6.O-O O-O 7.d4 cxd4 8.Nxd4',
          name: 'Open main line',
          note: 'After 8...Nxd4 9.Qxd4 d6 Black develops easily and the g7-bishop eyes the queen and c3.',
          line: 'open'
        },
        {
          moves: '5.e3 e6 6.Nge2 Nge7 7.d4 cxd4 8.exd4 d5',
          name: 'e3 and Nge2',
          note: 'Black breaks the symmetry with ...d5 at once, with equal play.',
          line: 'e3'
        },
        {
          moves: '5.e4',
          name: 'Botvinnik bind',
          note: 'White grips d5. Black replies ...e6 and ...Nge7, or ...e5 and ...d6, and aims for ...f5 or ...b5 later.',
          line: 'botvinnik'
        },
        {
          moves: '5.a3',
          name: 'Queenside plan',
          note: 'Preparing Rb1 and b4. Black can copy with ...a6 and ...Rb8, or play ...e6 and ...Nge7.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'c2c4', san: 'c4' },
          { uci: 'c7c5', san: 'c5', note: 'Symmetry: Black copies and waits for White to commit.' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'g2g3', san: 'g3' },
          { uci: 'g7g6', san: 'g6' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'f8g7', san: 'Bg7', note: "Matches White's bishop on the long diagonal." },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'c5d4', san: 'cxd4', note: 'Black exchanges in the centre.' },
          { uci: 'f3d4', san: 'Nxd4' },
          { uci: 'c6d4', san: 'Nxd4' },
          { uci: 'd1d4', san: 'Qxd4' },
          { uci: 'd7d6', san: 'd6', note: 'Frees the c8-bishop; ...Be6 or ...a6, ...Rb8 and ...b5 follow.' }
        ]
      },
      lines: [
        {
          id: 'open',
          name: '5.Nf3 and 7.d4: the open centre',
          kind: 'Main line',
          summary: 'White opens the centre with d4; Black exchanges on d4 and develops with ...d6, ...Be6 or ...a6 and ...Rb8, with the g7-bishop eyeing the queen.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c5d4', san: 'cxd4', note: 'Black exchanges in the centre.' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'c6d4', san: 'Nxd4' },
            { uci: 'd1d4', san: 'Qxd4' },
            { uci: 'd7d6', san: 'd6', note: 'Frees the c8-bishop; the g7-bishop eyes the queen on d4.' }
          ]
        },
        {
          id: 'e3',
          name: '5.e3 and Nge2: break with ...d5',
          kind: 'Alternative',
          summary: 'When White plays d4 and recaptures with the e-pawn, Black breaks the symmetry with ...d5 at once, before d4-d5 gains space.',
          moves: [
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1e2', san: 'Nge2' },
            { uci: 'g8e7', san: 'Nge7' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'e3d4', san: 'exd4' },
            { uci: 'd7d5', san: 'd5', note: 'The freeing break: challenges c4 and stops d4-d5.' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'e7d5', san: 'Nxd5' },
            { uci: 'c3d5', san: 'Nxd5' },
            { uci: 'e6d5', san: 'exd5', note: 'Level and fully developed.' }
          ]
        },
        {
          id: 'botvinnik',
          name: '5.e4: the Botvinnik set-up',
          kind: 'Alternative',
          summary: 'White grips d5 with c4 and e4. Black develops with ...e6 and ...Nge7, castles, and plays for ...d6, ...a6 and ...b5 or a knight on d4.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e6', san: 'e6', note: 'Covers d5 so that a knight cannot settle there easily.' },
            { uci: 'g1e2', san: 'Nge2' },
            { uci: 'g8e7', san: 'Nge7' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd7d6', san: 'd6', note: 'A flexible set-up: ...a6, ...Rb8 and ...b5, or ...Nd4, come next.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Copying for one move too long',
          text: 'In the 5.e3 line, 8...O-O? lets 9.d5 gain space and hit the c6-knight. Once White has broken with d4, Black must react in the centre with ...d5.',
          uci: [
            'c2c4',
            'c7c5',
            'b1c3',
            'b8c6',
            'g2g3',
            'g7g6',
            'f1g2',
            'f8g7',
            'e2e3',
            'e7e6',
            'g1e2',
            'g8e7',
            'd2d4',
            'c5d4',
            'e3d4',
            'e8g8',
            'd4d5'
          ]
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'The long diagonal after d4-d5',
          text: 'If White gains space with d5, the c6-knight must move and the g2-bishop may rake the long diagonal towards b7. Keep the centre in view before starting queenside play.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-flank-5'],
      uncertain: 'The Botvinnik line shows a typical set-up; move orders there are flexible.'
    },
    {
      id: 'b-english-nimzo',
      side: 'black',
      group: 'vs-flank',
      family: 'English Opening',
      familyId: 'bf-english',
      name: 'English: ...Nf6 and ...e6 (Nimzo-English)',
      short: '...Nf6 and ...e6 (Nimzo-English)',
      aliases: ['Nimzo-English'],
      eco: 'A17',
      moves: '1.c4 Nf6 2.Nc3 e6',
      defining: ['c2c4', 'g8f6', 'b1c3', 'e7e6'],
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 12,
      summary: 'Play ...Nf6 and ...e6 against 1.c4: Black can head for a Nimzo-Indian, a QGD or a Nimzo-English, depending on White.',
      idea: "This move order keeps Black's repertoire together. If White plays d4, ...Bb4 is a Nimzo-Indian and ...d5 a QGD. If White stays in the English with Nf3, ...Bb4 pins the knight and fights for e4 in Nimzo fashion. Against the sharp 3.e4, the counter ...d5 and 4.e5 d4 is the critical reply.",
      plans: {
        white: [
          'Avoid d4 and stay flexible with Nf3, g3 or Qc2',
          'Grab the centre with e4 (Mikenas Attack) when Black allows it'
        ],
        black: [
          'Pin with ...Bb4 and control e4, taking on c3 when it doubles pawns or wins time',
          'Transpose to the Nimzo-Indian or QGD if White plays d4',
          'Against 3.e4, play ...d5 and ...d4 to counter-attack the c3-knight'
        ]
      },
      responses: [
        {
          moves: '3.Nf3 Bb4',
          name: 'Nimzo-English',
          note: 'After 4.Qc2 O-O 5.a3 Bxc3 6.Qxc3 b6 Black fights for e4 with ...Bb7 and ...d6.',
          line: 'nf3'
        },
        {
          moves: '3.d4 Bb4',
          name: 'Into the Nimzo',
          note: 'Transposes to the Nimzo-Indian; 3...d5 gives a QGD instead.',
          line: 'd4'
        },
        {
          moves: '3.e4 d5 4.e5 d4',
          name: 'Mikenas Attack',
          note: 'Black counter-attacks the knight; after 5.exf6 dxc3 6.bxc3 Qxf6 material is level and Black is well developed.',
          line: 'mikenas'
        },
        {
          moves: '3.g3 d5',
          name: 'Catalan-style',
          note: 'Black takes the centre; ...Be7, ...O-O and ...c5 or ...dxc4 follow.',
          line: 'g3'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'c2c4', san: 'c4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'e7e6', san: 'e6', note: 'Flexible: Black has not yet chosen between ...Bb4 and ...d5.' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'f8b4', san: 'Bb4', note: 'The Nimzo pin, used in an English.' },
          { uci: 'd1c2', san: 'Qc2' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'a2a3', san: 'a3' },
          { uci: 'b4c3', san: 'Bxc3', note: 'Black gives the bishop pair to gain time and fight for e4.' },
          { uci: 'c2c3', san: 'Qxc3' },
          { uci: 'b7b6', san: 'b6' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'c8b7', san: 'Bb7', note: 'The bishop takes the long diagonal towards e4 and g2.' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'b8d7', san: 'Nbd7', note: 'A compact set-up; ...Ne4, ...f5 or ...c5 and ...e5 are typical follow-ups.' }
        ]
      },
      lines: [
        {
          id: 'nf3',
          name: '3.Nf3 Bb4: the Nimzo-English',
          kind: 'Main line',
          summary: 'Black pins the knight, gives the bishop for it after a3, and fights for e4 with ...b6, ...Bb7 and ...d6.',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8b4', san: 'Bb4', note: 'The Nimzo pin, used in an English.' },
            { uci: 'd1c2', san: 'Qc2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'b4c3', san: 'Bxc3' },
            { uci: 'c2c3', san: 'Qxc3' },
            { uci: 'b7b6', san: 'b6' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'c8b7', san: 'Bb7', note: 'The bishop takes the long diagonal towards e4 and g2.' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8d7', san: 'Nbd7', note: 'A compact set-up; ...Ne4, ...f5 or ...c5 and ...e5 are typical.' }
          ]
        },
        {
          id: 'd4',
          name: '3.d4 Bb4: into the Nimzo-Indian',
          kind: 'Alternative',
          summary: 'White transposes to 1.d4 territory: 3...Bb4 is a Nimzo-Indian, and 4.e3 O-O 5.Bd3 d5 reaches the Rubinstein main lines.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'f8b4', san: 'Bb4', note: 'Now it is a Nimzo-Indian.' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'd7d5', san: 'd5', note: 'The Rubinstein main line, as on the Nimzo-Indian page.' }
          ]
        },
        {
          id: 'mikenas',
          name: '3.e4 d5 4.e5 d4: the Mikenas Attack',
          kind: 'Sharp try',
          summary: 'Each side attacks a knight. Black must recapture on c3 before f6; then material is level and Black is well developed.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'd5d4', san: 'd4', note: 'Counter-attacks the c3-knight.' },
            { uci: 'e5f6', san: 'exf6' },
            { uci: 'd4c3', san: 'dxc3', note: 'Take what you attacked before recapturing on f6.' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'd8f6', san: 'Qxf6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c7c5', san: 'c5', note: 'Black hits d4 and develops quickly.' }
          ]
        },
        {
          id: 'g3',
          name: '3.g3 d5: Catalan style',
          kind: 'Alternative',
          summary: 'Black takes the centre, castles and strikes with ...c5. A Catalan-type position in which ...d4 or ...dxc4 are both possible later.',
          moves: [
            { uci: 'g2g3', san: 'g3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e8g8', san: 'O-O', note: 'Safety first, keeping ...c5 and ...dxc4 in reserve.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c7c5', san: 'c5', note: 'Takes central space; ...Nc6 and ...d4 can follow.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Recapturing on f6 first in the Mikenas',
          text: 'After 3.e4 d5 4.e5 d4 5.exf6, 5...Qxf6? lets the c3-knight escape, and Black is a piece down for a pawn. 5...dxc3 first keeps the material level.',
          uci: ['c2c4', 'g8f6', 'b1c3', 'e7e6', 'e2e4', 'd7d5', 'e4e5', 'd5d4', 'e5f6', 'd8f6']
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Being steered out of your repertoire',
          text: 'This move order relies on knowing what to do if White plays d4 (Nimzo-Indian or QGD) and if White never does (Nimzo-English). Prepare both before adopting it.'
        }
      ],
      transpositions: [
        { to: 'b-nimzo', note: '3.d4 Bb4 is a Nimzo-Indian.' },
        { to: 'b-qgd-orthodox', note: '3.d4 d5 4.Bg5 Be7 is the classical QGD.' }
      ],
      lessons: ['black-vs-flank-6'],
      uncertain: 'The 3.g3 line shows a typical Catalan-type set-up rather than one fixed main line.'
    },
    {
      id: 'b-english-closed',
      side: 'black',
      group: 'vs-flank',
      family: 'English Opening',
      familyId: 'bf-english',
      name: 'English: Closed Variation with ...Nc6 and ...g6',
      short: 'Closed Variation (...Nc6 and ...g6)',
      aliases: ['Closed English', 'Reversed Closed Sicilian'],
      eco: 'A25-A26',
      moves: '1.c4 e5 2.Nc3 Nc6 3.g3 g6 4.Bg2 Bg7',
      defining: ['c2c4', 'e7e5', 'b1c3', 'b8c6', 'g2g3', 'g7g6', 'f1g2', 'f8g7'],
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 12,
      summary: "Mirror White's fianchetto with ...Nc6, ...g6 and ...d6: a Closed Sicilian with colours reversed, with ...f5 and kingside space as Black's trumps.",
      idea: "Both sides fianchetto the king's bishop. White's usual plan is queenside expansion with Rb1, a3 and b4-b5, sometimes with the Botvinnik set-up e4 and Nge2. Black claims kingside space with ...d6, ...f5 and ...Nf6 or ...Nge7, slows b4 with ...a5, and often plays ...Be6 and ...Qd7 to exchange White's g2-bishop with ...Bh3.",
      plans: {
        white: ['Expand on the queenside with Rb1, a3, b4 and b5', 'Botvinnik set-up: e4, Nge2 and d3 to clamp d5'],
        black: [
          'Play ...d6 and ...f5, then ...Nf6 and ...O-O for kingside play',
          'Slow b4 with ...a5',
          'Trade the g2-bishop with ...Be6, ...Qd7 and ...Bh3'
        ]
      },
      responses: [
        {
          moves: '5.d3 d6 6.e3 f5 7.Nge2 Nf6',
          name: 'e3 and Nge2',
          note: 'White keeps f4 or d4 in reserve; Black castles and plays ...a5 and ...Be6.',
          line: 'e3'
        },
        {
          moves: '5.e4 d6 6.Nge2 f5',
          name: 'Botvinnik set-up',
          note: 'White grips d5; Black hits e4 with ...f5 at once.',
          line: 'botvinnik'
        },
        {
          moves: '5.Rb1 a5',
          name: 'Early Rb1',
          note: 'Black slows b4 before committing the kingside pieces.'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'c2c4', san: 'c4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'g2g3', san: 'g3' },
          { uci: 'g7g6', san: 'g6', note: 'Mirrors the fianchetto.' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'd2d3', san: 'd3' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'f7f5', san: 'f5', note: 'Kingside space and control of e4.' },
          { uci: 'g1e2', san: 'Nge2' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8g8', san: 'O-O', note: 'Black is ready for ...a5, ...Be6 and ...Qd7.' }
        ]
      },
      lines: [
        {
          id: 'e3',
          name: '5.d3 d6 6.e3: the flexible set-up',
          kind: 'Main line',
          summary: 'Black takes kingside space with ...f5, castles and slows the queenside with ...a5 before ...Be6.',
          moves: [
            { uci: 'd2d3', san: 'd3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'f7f5', san: 'f5', note: 'Claims e4 and kingside space.' },
            { uci: 'g1e2', san: 'Nge2' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'a1b1', san: 'Rb1' },
            { uci: 'a7a5', san: 'a5', note: 'Makes b4 cost an extra move.' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'c8e6', san: 'Be6', note: 'Eyes c4 and prepares ...Qd7 and ...Bh3 or ...d5.' }
          ]
        },
        {
          id: 'botvinnik',
          name: '5.e4: the Botvinnik set-up',
          kind: 'Alternative',
          summary: 'White clamps d5 with c4 and e4. Black challenges e4 with ...f5 and develops ...Nf6 and ...O-O.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'g1e2', san: 'Nge2' },
            { uci: 'f7f5', san: 'f5', note: 'Hits e4 at once.' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O', note: 'Black keeps the f-file tension; ...Nh5 and ...f4, or ...Be6, are typical.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Letting b4-b5 roll',
          text: 'Without ...a5, White plays b4 and b5 with gain of time against the c6-knight and opens the queenside. Slow the advance first.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'The d5 outpost',
          text: 'In the Botvinnik set-up a white knight on d5 can be very strong. Be ready to exchange it with ...Ne7 or ...Nf6xd5 rather than let it settle.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-flank-10', 'black-vs-flank-8'],
      uncertain: 'The Botvinnik line shows a typical set-up; move orders vary.'
    },
    {
      id: 'b-reti-slav',
      side: 'black',
      group: 'vs-flank',
      family: 'Reti Opening',
      familyId: 'bf-reti',
      name: 'Reti Opening: Slav set-up with ...d5 and ...c6',
      short: 'Slav set-up (2...c6)',
      eco: 'A11',
      moves: '1.Nf3 d5 2.c4 c6',
      defining: ['g1f3', 'd7d5', 'c2c4', 'c7c6'],
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 10,
      summary: 'Against 1.Nf3 and 2.c4, support d5 with ...c6: a reliable Slav-style set-up that keeps the light-squared bishop free.',
      idea: 'Black holds d5 with ...c6 and develops ...Nf6, ...Bf5 or ...Bg4, ...e6 and ...Nbd7. If White plays d4 it is simply a Slav. Against the double fianchetto (b3 and g3) Black builds a compact centre with the bishop outside the pawn chain, often adding ...h6 so the bishop has a retreat on h7.',
      plans: {
        white: ['Press d5 from a distance with b3, g3, Bb2 and Bg2', "Hit b7 with Qb3 once Black's bishop has left c8"],
        black: [
          'Develop the bishop to f5 or g4 before ...e6',
          'Complete development with ...Nbd7, ...Be7 or ...Bd6 and ...O-O',
          'Watch b7 after the bishop leaves c8; ...Qb6 or ...Qc7 covers it'
        ]
      },
      responses: [
        {
          moves: '3.d4 Nf6 4.Nc3',
          name: 'Into the Slav',
          note: 'Transposes to the Slav main lines.',
          line: 'd4'
        },
        {
          moves: '3.b3 Nf6 4.g3 Bf5',
          name: 'Double fianchetto',
          note: 'Black builds ...e6, ...Nbd7, ...Be7 or ...Bd6 and ...h6, keeping the bishop active.',
          line: 'double'
        },
        {
          moves: '3.e3 Nf6 4.Nc3 e6',
          name: '3.e3',
          note: 'A Semi-Slav type position, and a true Semi-Slav if White plays d4.',
          line: 'e3'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'c7c6', san: 'c6', note: "Supports d5 and keeps the c8-bishop's diagonal open." },
          { uci: 'b2b3', san: 'b3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'g2g3', san: 'g3' },
          { uci: 'c8f5', san: 'Bf5', note: 'The bishop develops outside the pawn chain before ...e6.' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'e7e6', san: 'e6', note: 'Now ...e6 is fine, since the bishop is already out.' },
          { uci: 'c1b2', san: 'Bb2' },
          { uci: 'b8d7', san: 'Nbd7' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'd2d3', san: 'd3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'b1d2', san: 'Nbd2' },
          { uci: 'h7h6', san: 'h6', note: 'Gives the bishop a retreat on h7 if a knight comes to h4.' }
        ]
      },
      lines: [
        {
          id: 'double',
          name: '3.b3: the double fianchetto',
          kind: 'Main line',
          summary: 'Black develops the bishop to f5 before ...e6 and adds ...h6 so that the bishop has a retreat on h7 if a knight comes to h4.',
          moves: [
            { uci: 'b2b3', san: 'b3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'c8f5', san: 'Bf5', note: 'The bishop develops outside the pawn chain before ...e6.' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'c1b2', san: 'Bb2' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'h7h6', san: 'h6', note: 'Gives the bishop a retreat on h7.' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'f8e7', san: 'Be7', note: 'Black castles next with a compact, sound position.' }
          ]
        },
        {
          id: 'd4',
          name: '3.d4: into the Slav',
          kind: 'Alternative',
          summary: 'White plays d4 and the game becomes a Slav. With 4.Nc3 dxc4 5.a4 Bf5 it is the main line on the Slav page.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd5c4', san: 'dxc4', note: 'The Slav main line.' },
            { uci: 'a2a4', san: 'a4' },
            { uci: 'c8f5', san: 'Bf5' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e7e6', san: 'e6', note: 'Now see the Slav main line.' }
          ]
        },
        {
          id: 'e3',
          name: '3.e3: Semi-Slav territory',
          kind: 'Alternative',
          summary: 'With e3 White keeps d4 in reserve. Black can play a Semi-Slav set-up with ...e6, ...Nbd7 and ...Bd6.',
          moves: [
            { uci: 'e2e3', san: 'e3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e7e6', san: 'e6', note: 'A true Semi-Slav if White now plays d4.' },
            { uci: 'b2b3', san: 'b3' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'c1b2', san: 'Bb2' },
            { uci: 'f8d6', san: 'Bd6', note: 'Prepares ...e5, freeing the c8-bishop.' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e8g8', san: 'O-O' }
          ]
        },
        {
          id: 'g3',
          name: '3.g3 Nf6 4.Bg2 dxc4',
          kind: 'Sideline',
          summary: 'When White fianchettoes before b3, Black can take on c4 and keep the pawn for a while with ...Nbd7-b6.',
          moves: [
            { uci: 'g2g3', san: 'g3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'd5c4', san: 'dxc4', note: "Takes the pawn while White's b-pawn is still on b2." },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'b1a3', san: 'Na3' },
            { uci: 'd7b6', san: 'Nb6', note: 'Holds c4 for now; White will regain it with Qc2 or Ne5, and Black develops meanwhile.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Forgetting b7 after ...Bf5',
          text: 'Once the c8-bishop has left, Qb3 can hit b7. Cover it with ...Qb6 or ...Qc7, or by keeping the b-pawn protected.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'The bishop hunted by Nh4',
          text: 'Against a bishop on f5 or g4, White can play Nh4 or h3 and g4 to chase it. ...h6 gives it a safe retreat on h7.'
        }
      ],
      transpositions: [
        { to: 'b-slav-main', note: '3.d4 Nf6 4.Nc3 dxc4 5.a4 Bf5 is the Slav main line.' },
        { to: 'b-semi-slav', note: '3.e3 Nf6 4.Nc3 e6 5.d4 is a Semi-Slav.' }
      ],
      lessons: ['black-vs-flank-7', 'black-vs-d4-2'],
      uncertain: 'The 3.g3 dxc4 line is shown as one sound option; White has several ways to regain the pawn.'
    },
    {
      id: 'b-reti-qgd',
      side: 'black',
      group: 'vs-flank',
      family: 'Reti Opening',
      familyId: 'bf-reti',
      name: 'Reti Opening: QGD set-up with ...e6',
      short: 'QGD set-up (2...e6)',
      aliases: ['Reti with ...e6'],
      eco: 'A13',
      moves: '1.Nf3 d5 2.c4 e6',
      defining: ['g1f3', 'd7d5', 'c2c4', 'e7e6'],
      difficulty: 'Beginner',
      style: 'Solid',
      minutes: 10,
      summary: "Support d5 with ...e6 and develop ...Nf6, ...Be7, ...O-O and ...c5: a sound QGD-style answer that becomes a Queen's Gambit or Catalan if White plays d4.",
      idea: "Against 2.c4 Black supports d5 with the e-pawn and develops quickly. If White fianchettoes and avoids d4, Black takes space with ...c5 and ...Nc6 and can push ...d4 to cut the b2-bishop's diagonal and gain central space. If White plays d4, the game becomes a Queen's Gambit Declined or a Catalan.",
      plans: {
        white: ['Double fianchetto with g3, Bg2, b3 and Bb2, pressing d5 and e5', 'Transpose to a Catalan with d4'],
        black: [
          'Develop ...Nf6, ...Be7 and ...O-O, then ...c5 and ...Nc6',
          'Push ...d4 when it gains space or hits a knight on c3',
          'Against the Catalan, know one solid system such as ...dxc4 with ...a6 and ...b5'
        ]
      },
      responses: [
        {
          moves: '3.g3 Nf6 4.Bg2 Be7 5.O-O O-O 6.b3 c5',
          name: 'Double fianchetto',
          note: 'Black takes central space; ...Nc6 and ...d4 can follow.',
          line: 'b3'
        },
        {
          moves: '3.d4 Nf6 4.Nc3 Be7',
          name: 'Into the QGD',
          note: "Transposes to a Queen's Gambit Declined; 4.g3 would be a Catalan.",
          line: 'd4'
        },
        {
          moves: '3.g3 Nf6 4.Bg2 Be7 5.O-O O-O 6.d4',
          name: 'Catalan',
          note: 'An Open Catalan arises after ...dxc4; Black gains time with ...a6 and ...b5.',
          line: 'catalan'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'e7e6', san: 'e6', note: 'Supports d5 with the e-pawn, QGD style.' },
          { uci: 'g2g3', san: 'g3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8g8', san: 'O-O', note: 'Safety first.' },
          { uci: 'b2b3', san: 'b3' },
          { uci: 'c7c5', san: 'c5', note: 'Takes central space.' },
          { uci: 'c1b2', san: 'Bb2' },
          { uci: 'b8c6', san: 'Nc6', note: 'Supports ...d4.' }
        ]
      },
      lines: [
        {
          id: 'b3',
          name: '6.b3: the double fianchetto',
          kind: 'Main line',
          summary: "Black takes space with ...c5 and ...Nc6, and answers e3 with ...d4, cutting the b2-bishop's diagonal.",
          moves: [
            { uci: 'g2g3', san: 'g3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'b2b3', san: 'b3' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'c1b2', san: 'Bb2' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'd5d4', san: 'd4', note: 'Gains space and blocks the long diagonal.' },
            { uci: 'e3d4', san: 'exd4' },
            { uci: 'c5d4', san: 'cxd4', note: 'A strong central pawn on d4; Black plays ...Bc5 or ...Re8 next.' }
          ]
        },
        {
          id: 'd4',
          name: "3.d4: into the Queen's Gambit",
          kind: 'Alternative',
          summary: "With d4 the game is a Queen's Gambit Declined. With ...Be7 first, Black reaches the Classical lines on the QGD page.",
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'f8e7', san: 'Be7', note: 'Flexible: Bg5 will not pin anything.' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'h7h6', san: 'h6', note: 'A Classical QGD; see the QGD pages.' }
          ]
        },
        {
          id: 'catalan',
          name: '6.d4: the Open Catalan',
          kind: 'Alternative',
          summary: 'Black takes on c4 and gains time on the queen with ...a6 and ...b5, then puts the bishop on b7 against the g2-bishop.',
          moves: [
            { uci: 'g2g3', san: 'g3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd5c4', san: 'dxc4', note: 'The Open Catalan.' },
            { uci: 'd1c2', san: 'Qc2' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'c2c4', san: 'Qxc4' },
            { uci: 'b7b5', san: 'b5', note: 'Gains time on the queen.' },
            { uci: 'c4c2', san: 'Qc2' },
            { uci: 'c8b7', san: 'Bb7', note: 'Contests the long diagonal.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Holding c4 at the wrong moment',
          text: 'In the Catalan, ...dxc4 is fine, but trying to keep the pawn with ...b5 when White can answer a4 or Ne5 loses time and weakens the queenside. Give it back when needed.'
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Two bishops on the long diagonals',
          text: "White's bishops on g2 and b2 aim at b7 and the kingside. Block one of them (...d4) or contest the diagonal (...Bb7) before it becomes a problem."
        }
      ],
      transpositions: [
        {
          to: 'b-qgd-orthodox',
          note: '3.d4 Nf6 4.Nc3 Be7 5.Bg5 gives the same position as the Classical QGD after 4.Bg5 Be7 5.Nf3.'
        }
      ],
      lessons: ['black-vs-flank-11', 'black-vs-d4-6'],
      uncertain: 'In the double fianchetto line, the ...d4 push is shown as one typical plan; Black can also exchange on c4 or play ...b6.'
    },
    {
      id: 'b-flank-kid',
      side: 'black',
      group: 'vs-flank',
      family: "King's Indian set-up",
      familyId: 'bf-kings-indian-setup',
      name: "King's Indian set-up against 1.Nf3 and 1.c4",
      short: "King's Indian set-up against 1.Nf3 and 1.c4",
      eco: 'A15',
      moves: '1.Nf3 Nf6 2.c4 g6 3.Nc3 Bg7',
      defining: ['g1f3', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'f8g7'],
      difficulty: 'Intermediate',
      style: 'Flexible',
      minutes: 12,
      summary: 'A universal system: ...Nf6, ...g6, ...Bg7, ...O-O and ...d6 works against almost any flank opening.',
      idea: "Black plays the same King's Indian set-up whatever White does. If White adds d4 and e4, it is a normal King's Indian. If White fianchettoes and stays in English territory, Black chooses ...e5 with ...Nc6 (a reversed Closed Sicilian) or ...c5, and meets the b2-b4 plan with ...a5.",
      plans: {
        white: [
          'Fianchetto, then expand on the queenside with Rb1, a3 and b4-b5',
          "Play d4 and e4 for a King's Indian main line"
        ],
        black: [
          'Set up ...g6, ...Bg7, ...O-O, ...d6, then ...e5 with ...Nc6, or ...c5',
          'Slow b4 with ...a5 and play on the kingside with ...Nh5 and ...f5',
          "If White builds a big centre, strike with ...e5 as in the King's Indian"
        ]
      },
      responses: [
        {
          moves: '4.g3 O-O 5.Bg2 d6 6.O-O e5',
          name: 'English fianchetto',
          note: 'Black follows with ...Nc6, ...a5 and ...h6 or ...Nh5 and ...f5.',
          line: 'fianchetto'
        },
        {
          moves: '4.e4 d6 5.d4 O-O',
          name: "Into the King's Indian",
          note: "Transposes to the King's Indian main lines.",
          line: 'e4'
        },
        {
          moves: '4.d4 O-O 5.g3 d6',
          name: "Fianchetto King's Indian",
          note: 'Black plays ...Nc6 or ...Nbd7 with ...e5, or ...c5.',
          line: 'd4-g3'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'g7g6', san: 'g6', note: "The King's Indian fianchetto, whatever White plays." },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'g2g3', san: 'g3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'd7d6', san: 'd6', note: 'Flexible: ...e5 or ...c5 can follow.' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e7e5', san: 'e5', note: 'Claims the centre: a Closed Sicilian with colours reversed.' },
          { uci: 'd2d3', san: 'd3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'a1b1', san: 'Rb1' },
          { uci: 'a7a5', san: 'a5', note: 'Makes b2-b4 harder: White needs a3 first.' }
        ]
      },
      lines: [
        {
          id: 'fianchetto',
          name: '4.g3: the English fianchetto',
          kind: 'Main line',
          summary: 'A Closed Sicilian with colours reversed. White plays Rb1 and b4; Black slows it with ...a5 and develops ...h6 and ...Be6.',
          moves: [
            { uci: 'g2g3', san: 'g3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e7e5', san: 'e5', note: 'Claims the centre.' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'a1b1', san: 'Rb1' },
            { uci: 'a7a5', san: 'a5', note: 'Makes b2-b4 cost an extra move.' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'b2b4', san: 'b4' },
            { uci: 'a5b4', san: 'axb4', note: 'After 11.axb4 Be6 the a-file is open for Black too, and ...Qd7 with ...Bh3 or ...f5 can follow.' }
          ]
        },
        {
          id: 'e4',
          name: "4.e4 d6 5.d4: into the King's Indian",
          kind: 'Alternative',
          summary: "White builds the full centre, and the game is a King's Indian. 6.Be2 e5 is the Classical Variation.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e8g8', san: 'O-O', note: "A normal King's Indian." },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e7e5', san: 'e5', note: 'The Classical Variation.' }
          ]
        },
        {
          id: 'd4-g3',
          name: '4.d4 O-O 5.g3: the Fianchetto KID',
          kind: 'Alternative',
          summary: "A Fianchetto King's Indian by another move order. Black plays ...Nbd7, ...e5 and ...c6.",
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'g2g3', san: 'g3', note: "A Fianchetto King's Indian by transposition." },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'c7c6', san: 'c6', note: 'The same position as the ...Nbd7 line of the Fianchetto Variation.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Allowing b4-b5 for free',
          text: "Without ...a5, White's b4-b5 chases the c6-knight and opens the queenside with gain of time. Slow the advance first, then turn to the kingside."
        },
        {
          kind: 'Risk',
          side: 'black',
          title: 'Not knowing the transpositions',
          text: "If White adds d4 and e4, you are in a main-line King's Indian. A universal system still needs a plan against each of White's central set-ups."
        }
      ],
      transpositions: [
        { to: 'b-kid-classical', note: "4.e4 d6 5.d4 O-O 6.Be2 e5 is the Classical King's Indian." },
        {
          to: 'b-kid-fianchetto',
          note: '4.d4 O-O 5.g3 d6 6.Bg2 Nbd7 7.O-O e5 8.e4 c6 is the same position as the ...Nbd7 line of the Fianchetto Variation.'
        }
      ],
      lessons: ['black-vs-flank-8', 'black-vs-flank-10', 'black-vs-d4-7', 'black-vs-d4-18']
    },
    {
      id: 'b-vs-kia',
      side: 'black',
      group: 'vs-flank',
      family: "King's Indian Attack",
      familyId: 'bf-vs-kia',
      name: "King's Indian Attack: ...d5, ...e6 and ...c5 set-up",
      short: '...d5, ...e6 and ...c5 set-up',
      eco: 'A07',
      moves: '1.Nf3 d5 2.g3 Nf6 3.Bg2 e6 4.O-O Be7 5.d3 c5',
      defining: ['g1f3', 'd7d5', 'g2g3', 'g8f6', 'f1g2', 'e7e6', 'e1g1', 'f8e7', 'd2d3', 'c7c5'],
      difficulty: 'Intermediate',
      style: 'Positional',
      minutes: 12,
      summary: "Meet the King's Indian Attack with a broad ...d5, ...e6, ...c5 centre and a quick queenside pawn storm.",
      idea: "White's set-up (Nf3, g3, Bg2, d3, Nbd2, e4) is a King's Indian with colours reversed. Black takes space with ...d5, ...c5 and ...e6 and castles. When White pushes e4-e5, Black attacks on the queenside with ...b5-b4 and ...a5-a4, while White aims for h4, Nf1-h2-g4 and a kingside attack.",
      plans: {
        white: [
          'Prepare e4 with Nbd2 (or Qe2), then push e5 to cramp Black',
          'Attack on the kingside with h4, Nf1-h2-g4 and Bf4'
        ],
        black: [
          'Expand on the queenside with ...b5-b4 and ...a5-a4',
          'Keep e5 under pressure with ...Nd7, ...Qc7 and sometimes ...f6',
          'Punish a premature e4 by exchanging on e4 and taking the pawn'
        ]
      },
      responses: [
        {
          moves: '6.Nbd2 Nc6 7.e4 O-O 8.Re1',
          name: 'Classical KIA',
          note: 'After 8...b5 9.e5 Nd7 10.Nf1 a5 the race begins: Black on the queenside, White on the kingside.',
          line: 'classical'
        },
        {
          moves: '6.e4',
          name: 'Premature e4',
          note: 'Without Nbd2 or Qe2 the e4-pawn is loose: 6...dxe4 7.dxe4 Qxd1 8.Rxd1 Nxe4 wins a pawn.',
          line: 'early-e4'
        },
        {
          moves: '6.c4',
          name: 'Reti style',
          note: 'A Reti or Catalan type position; Black castles, plays ...Nc6 and chooses between ...d4 and ...dxc4.',
          line: 'c4'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'g2g3', san: 'g3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'f1g2', san: 'Bg2' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'd2d3', san: 'd3' },
          { uci: 'c7c5', san: 'c5', note: 'Black takes space with a broad pawn front.' },
          { uci: 'b1d2', san: 'Nbd2' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'e2e4', san: 'e4', note: "The King's Indian Attack push, prepared by Nbd2." },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'f1e1', san: 'Re1' },
          { uci: 'b7b5', san: 'b5', note: 'Black starts the queenside expansion at once.' },
          { uci: 'e4e5', san: 'e5', note: 'Gains space and drives the knight from f6, aiming for a kingside attack.' },
          { uci: 'f6d7', san: 'Nd7', note: 'From d7 the knight presses e5; ...a5 and ...b4 follow.' }
        ]
      },
      lines: [
        {
          id: 'classical',
          name: '6.Nbd2 and 7.e4: the classical KIA',
          kind: 'Main line',
          summary: 'After e4-e5 the race begins: Black storms the queenside with ...b5-b4 and ...a5, White aims at the kingside with h4 and Nf1-h2-g4.',
          moves: [
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e1', san: 'Re1' },
            { uci: 'b7b5', san: 'b5', note: 'Black starts the queenside expansion at once.' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'f6d7', san: 'Nd7', note: 'From d7 the knight presses e5.' },
            { uci: 'd2f1', san: 'Nf1' },
            { uci: 'a7a5', san: 'a5' },
            { uci: 'h2h4', san: 'h4' },
            { uci: 'b5b4', san: 'b4', note: 'Both sides push on their own wing.' }
          ]
        },
        {
          id: 'early-e4',
          name: '6.e4?: e4 without support',
          kind: 'Sideline',
          summary: 'Without Nbd2 or Qe2, the e4-pawn has no defender after the exchanges: Black wins a clean pawn.',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'd5e4', san: 'dxe4' },
            { uci: 'd3e4', san: 'dxe4' },
            { uci: 'd8d1', san: 'Qxd1', note: 'Trades queens on the open d-file.' },
            { uci: 'f1d1', san: 'Rxd1' },
            { uci: 'f6e4', san: 'Nxe4', note: 'Nothing defends e4: Black is a pawn up.' }
          ]
        },
        {
          id: 'c4',
          name: '6.c4: Reti style',
          kind: 'Alternative',
          summary: 'White turns the game into a Reti or Catalan type position. After d4 and Nc3 the structure resembles a Tarrasch Defence, with an isolated d-pawn possible for Black.',
          moves: [
            { uci: 'c2c4', san: 'c4' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'e6d5', san: 'exd5', note: 'Black accepts a possible isolated pawn in return for free piece play.' },
            { uci: 'd3d4', san: 'd4' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'b1c3', san: 'Nc3', note: 'A Tarrasch-type structure: Black develops ...Be6 or ...Bg4 and keeps the pieces active.' }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Trap',
          side: 'white',
          title: 'An unprepared e4',
          text: 'The f3-knight blocks the g2-bishop, so after 6.e4? dxe4 7.dxe4 Qxd1 8.Rxd1 Nxe4 nothing defends the pawn. White must prepare e4 with Nbd2 or Qe2.',
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
          side: 'black',
          title: 'The kingside attack after e5',
          text: 'Once White has a pawn on e5, the h4, Nf1-h2-g4, Bf4 and Qd2 plan can become dangerous. Black must be quick on the queenside and keep a defender such as ...Nf8 or ...h6 in mind.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-flank-3'],
      uncertain: 'The 6.c4 line shows a typical transposition; Black can also answer with ...d4 or ...dxc4.'
    },
    {
      id: 'b-vs-bird',
      side: 'black',
      group: 'vs-flank',
      family: "Bird's Opening",
      familyId: 'bf-vs-bird',
      name: "Bird's Opening: ...d5, ...Nf6 and ...g6",
      short: '...d5, ...Nf6 and ...g6',
      eco: 'A03',
      moves: '1.f4 d5 2.Nf3 Nf6 3.e3 g6',
      defining: ['f2f4', 'd7d5', 'g1f3', 'g8f6', 'e2e3', 'g7g6'],
      difficulty: 'Beginner',
      style: 'Flexible',
      minutes: 10,
      summary: 'Answer 1.f4 with ...d5 and a kingside fianchetto: the g7-bishop is ideally placed against the dark squares White has weakened.',
      idea: "1.f4 weakens e3 and the e1-h4 and a7-g1 diagonals. Black controls e4 with ...d5 and ...Nf6, fianchettoes the bishop to aim at e5 and the long diagonal, castles, and plays ...c5 and ...Nc6. The breaks ...d4 and ...e5 strike at White's centre before any kingside attack can get going.",
      plans: {
        white: [
          'Build a reversed Dutch with Be2 or b3 and Bb2, O-O, d3 and Qe1-h4',
          'Push e4 or f5 for a kingside attack'
        ],
        black: [
          'Fianchetto and castle, then ...c5, ...Nc6 and ...d4 or ...e5',
          'Use the e5 and e4 squares that f4 has weakened',
          'Meet the Qe1-h4 plan with central action rather than passive defence'
        ]
      },
      responses: [
        {
          moves: '4.Be2 Bg7 5.O-O O-O 6.d3 c5',
          name: 'Classical',
          note: "Black takes space; White's Qe1-h4 plan is met by central play with ...Nc6 and ...d4 or ...e5.",
          line: 'classical'
        },
        {
          moves: '3.g3 g6 4.Bg2 Bg7 5.O-O O-O 6.d3 c5',
          name: 'Leningrad set-up',
          note: 'Black takes space with ...c5 and ...Nc6, and kicks a knight on c3 with ...d4.'
        },
        {
          moves: '4.b3 Bg7 5.Bb2 O-O',
          name: 'b3 and Bb2',
          note: "Black castles and plays ...c5 and ...Nc6; ...d4 can cut the b2-bishop's diagonal.",
          line: 'b3'
        }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'f2f4', san: 'f4' },
          { uci: 'd7d5', san: 'd5', note: 'Controls e4, the square 1.f4 tried to own.' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'e2e3', san: 'e3' },
          { uci: 'g7g6', san: 'g6', note: 'The bishop will aim at e5 and along the long diagonal.' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'e8g8', san: 'O-O', note: 'Castling before any central action.' },
          { uci: 'd2d3', san: 'd3' },
          { uci: 'c7c5', san: 'c5', note: 'Queenside space: ...Nc6 and ...d4, or ...Qc7 and ...e5, come next.' }
        ]
      },
      lines: [
        {
          id: 'classical',
          name: '4.Be2: the classical Bird',
          kind: 'Main line',
          summary: 'White castles and heads for Qe1-h4. Black answers with central play rather than passive defence: ...c5, ...Nc6, then ...d4, ...Qc7 or ...e5.',
          moves: [
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O', note: 'Castling before any central action.' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'd1e1', san: 'Qe1', note: 'The queen heads for h4.' },
            { uci: 'b8c6', san: 'Nc6', note: 'Black meets the kingside plan with central play: ...d4, ...Qc7 and ...e5 are typical.' }
          ]
        },
        {
          id: 'b3',
          name: '4.b3: the queenside fianchetto',
          kind: 'Alternative',
          summary: 'White aims the b2-bishop at e5 and g7. Black castles, plays ...c5 and ...Nc6, and can cut the long diagonal with ...d4.',
          moves: [
            { uci: 'b2b3', san: 'b3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'c1b2', san: 'Bb2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'c7c5', san: 'c5', note: 'Takes queenside space.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8c6', san: 'Nc6', note: "...d4 can now cut the b2-bishop's diagonal." }
          ]
        },
        {
          id: 'stonewall',
          name: '4.d4: the reversed Stonewall',
          kind: 'Alternative',
          summary: "With d4, e3 and f4 White builds a Stonewall. Black's plan is to trade White's good light-squared bishop, for example with ...b6 and ...Ba6.",
          moves: [
            { uci: 'd2d4', san: 'd4', note: 'White builds a Stonewall with d4, e3 and f4.' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'b7b6', san: 'b6', note: "Prepares ...Ba6 to exchange White's best minor piece; the e4 square is also weak." }
          ]
        }
      ],
      pitfalls: [
        {
          kind: 'Risk',
          side: 'black',
          title: 'The Qe1-h4 attack',
          text: 'In the classical Bird, Qe1-h4, Ng5 and f5 can build a real attack against a passive king. Strike in the centre with ...d4 or ...e5 before it gets going.'
        },
        {
          kind: 'Mistake',
          side: 'black',
          title: 'Letting White play e4 for free',
          text: '1.f4 aims to control e4. If Black gives up the fight for e4, White plays e3-e4 with a pleasant reversed Dutch. Keep ...d5 and ...Nf6 working together.'
        }
      ],
      transpositions: [],
      lessons: ['black-vs-flank-4'],
      uncertain: 'The 4.d4 line shows a typical plan against the reversed Stonewall rather than a fixed main line.'
    }
  ],
  lessons: [
    {
      id: 'black-vs-d4-1',
      category: 'black-vs-d4',
      side: 'black',
      title: 'The QGD pin that is not a pin',
      level: 'Beginner',
      minutes: 6,
      objective: 'Recognise that Bg5 does not truly pin the f6-knight in the QGD, and punish Nxd5 with the Elephant Trap.',
      summary: "Why ...Nbd7 is safe in the Queen's Gambit Declined, and how Black wins a piece if White grabs on d5.",
      related: {
        openings: ['b-qgd-orthodox', 'b-qgd-exchange'],
        gambits: [],
        lessons: []
      },
      steps: [
        {
          type: 'read',
          title: 'A relative pin',
          orientation: 'b',
          fen: 'r1bqkb1r/pppn1ppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq - 4 5',
          text: 'After 4.Bg5 the f6-knight looks pinned to the queen. But this is only a relative pin: the knight may legally move, and sometimes moving it is strong. Here 4...Nbd7 is a sound developing move, even though it seems to drop the d5-pawn. The point is a trap that has caught players for over a century.',
          arrows: [['g5', 'd8'], ['c3', 'd5']],
          highlights: ['f6', 'd5']
        },
        {
          type: 'line',
          title: 'The tempting capture',
          orientation: 'b',
          fen: 'start',
          text: 'White exchanges on d5 and then grabs the pawn, counting on the pin.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'b8d7', san: 'Nbd7', note: 'Develops and keeps the c-pawn free; d5 looks loose.' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'e6d5', san: 'exd5', note: 'Recapture with the pawn.' },
            { uci: 'c3d5', san: 'Nxd5', note: 'White wins a pawn... or so it seems.' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Spring the Elephant Trap',
          fen: 'r1bqkb1r/pppn1ppp/5n2/3N2B1/3P4/8/PP2PPPP/R2QKBNR b KQkq - 0 6',
          prompt: 'Black to move. The knight on d5 looks protected by the pin. Win material.',
          solution: ['f6d5', 'g5d8', 'f8b4'],
          accept: [['f6d5', 'g5d8', 'f8b4']],
          hint: 'Ignore the pin: what happens to White after you give up the queen?',
          explanation: '6...Nxd5! breaks the pin. If 7.Bxd8, then 7...Bb4+ forces 8.Qd2 Bxd2+ 9.Kxd2 Kxd8, and Black has won a knight for a pawn. If White does not take the queen, Black is a knight for a pawn up. The bishop check works because the d2 square is the only block.',
          wrong: {
            f8e7: 'Safe, but you have simply lost a pawn. The knight on d5 can be taken.',
            c7c6: 'Attacks the knight, but after 7.Nxf6+ Nxf6 (or 7.Nc3) you are simply a pawn down.'
          }
        }
      ]
    },
    {
      id: 'black-vs-d4-2',
      category: 'black-vs-d4',
      side: 'black',
      title: 'Slav: the bishop comes out first',
      level: 'Beginner',
      minutes: 5,
      objective: 'Develop the light-squared bishop to f5 or g4 before playing ...e6 in the Slav.',
      summary: "The whole point of ...c6: Black's problem bishop gets out before the e-pawn closes its diagonal.",
      related: {
        openings: ['b-slav-main', 'b-semi-slav', 'b-reti-slav', 'b-slav-exchange'],
        gambits: [],
        lessons: ['black-vs-d4-1']
      },
      steps: [
        {
          type: 'read',
          title: 'Why ...c6 and not ...e6',
          orientation: 'b',
          fen: 'rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',
          text: "In the Queen's Gambit Declined, ...e6 supports d5 but shuts in the c8-bishop. The Slav supports d5 with the c-pawn instead, so the c8-h3 diagonal stays open. Black's usual plan is to develop that bishop to f5 or g4 first, and only then play ...e6. The bishop that is often a problem piece becomes an active one.",
          arrows: [['c6', 'd5'], ['c8', 'f5']],
          highlights: ['d5']
        },
        {
          type: 'line',
          title: 'The main line',
          orientation: 'b',
          fen: 'start',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd5c4', san: 'dxc4', note: 'Takes once White has committed the knight to c3.' },
            { uci: 'a2a4', san: 'a4', note: 'Stops ...b5, so the pawn will be returned.' },
            { uci: 'c8f5', san: 'Bf5', note: 'The bishop is out.' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e7e6', san: 'e6', note: 'Only now does the e-pawn move: the bishop is already outside the chain.' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Bishop before pawn',
          fen: 'rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/4PN2/PP3PPP/RNBQKB1R b KQkq - 0 4',
          prompt: 'Black to move. Develop the c8-bishop before ...e6 locks it in.',
          solution: ['c8f5'],
          accept: [['c8f5'], ['c8g4']],
          hint: 'The diagonal from c8 to h3 is still open. Which squares on it are useful?',
          explanation: '4...Bf5 (or 4...Bg4, pinning the knight) puts the bishop outside the pawn chain; 5...e6 comes next with a healthy position. After ...Bf5 remember b7: if White plays Qb3, defend it with ...Qb6 or ...Qc7. 4...e6 is playable but gives a Semi-Slav type game where the bishop stays inside.',
          wrong: {
            e7e6: 'A sound move, but it shuts the c8-bishop in: you have chosen a different opening from the one asked.',
            c8e6: 'The bishop is out, but on e6 it blocks the e-pawn and can be hit by Ng5.'
          }
        }
      ]
    },
    {
      id: 'black-vs-d4-3',
      category: 'black-vs-d4',
      side: 'black',
      title: 'London: hit b2 with ...Qb6',
      level: 'Beginner',
      minutes: 6,
      objective: 'Use ...c5 and ...Qb6 against the London System and spot the trap when White takes a bishop on f5.',
      summary: "Once White's bishop leaves c1, b2 is weak: Black's queen on b6 exploits it.",
      related: {
        openings: ['b-vs-london'],
        gambits: [],
        lessons: []
      },
      steps: [
        {
          type: 'read',
          title: 'The missing defender',
          orientation: 'b',
          fen: 'r1b1kbnr/pp2pppp/1qn5/2pp4/3P1B2/2P1P3/PP3PPP/RN1QKBNR w KQkq - 1 5',
          text: "In the London, White's dark-squared bishop leaves c1 on move two. That leaves the b2-pawn defended only by the queen. Black's ...c5 hits d4, ...Nc6 adds pressure, and ...Qb6 attacks b2 and d4 together. White must spend time defending, usually with Qb3 or Qc1.",
          arrows: [['b6', 'b2'], ['c5', 'd4'], ['c6', 'd4']],
          highlights: ['b2', 'd4']
        },
        {
          type: 'line',
          title: 'Gaining space with tempo',
          orientation: 'b',
          fen: 'start',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c1f4', san: 'Bf4' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'd8b6', san: 'Qb6' },
            { uci: 'd1b3', san: 'Qb3', note: 'White offers a queen trade and defends b2.' },
            { uci: 'c5c4', san: 'c4', note: 'Gains time on the queen and space on the queenside.' },
            { uci: 'b3c2', san: 'Qc2' },
            { uci: 'c8f5', san: 'Bf5', note: 'Attacks the queen. Taking the bishop is a blunder; 7.Qc1 is correct.' }
          ]
        },
        {
          type: 'puzzle',
          title: 'White grabbed the bishop',
          fen: 'r3kbnr/pp2pppp/1qn5/3p1Q2/2pP1B2/2P1P3/PP3PPP/RN2KBNR b KQkq - 0 7',
          prompt: 'White has just taken your bishop with 7.Qxf5. Black to move: punish it.',
          solution: ['b6b2'],
          accept: [['b6b2']],
          hint: 'The queen that defended b2 has gone for a walk. What is behind b2?',
          explanation: '7...Qxb2 attacks the a1-rook, and the b1-knight is in the way of any defence. Black regains more than the bishop: after 8.Qxd5 Qxa1 or 8.Nd2 Qxa1+ Black has won a rook for the bishop. A check on c8 does not help, because the a8-rook covers c8 now that the knight has left b8.',
          wrong: {
            e7e6: 'Attacks the queen, but it simply retreats and White stays a bishop up.',
            g7g6: 'Gains a tempo, but after the queen retreats you are a piece down.'
          }
        }
      ]
    },
    {
      id: 'black-vs-d4-4',
      category: 'black-vs-d4',
      side: 'black',
      title: "Queen's Indian: the fight for e4",
      level: 'Beginner',
      minutes: 5,
      objective: "Understand why Black controls e4 in the Queen's Indian and use ...Ne4 to trade off a defender of that square.",
      summary: "Bishop on b7, knight to e4: how the Queen's Indian keeps White's centre in check.",
      related: {
        openings: ['b-qid', 'b-nimzo', 'b-bogo'],
        gambits: [],
        lessons: []
      },
      steps: [
        {
          type: 'read',
          title: 'Pieces instead of pawns',
          orientation: 'b',
          fen: 'rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w - - 5 7',
          text: "In the Queen's Indian Black does not occupy the centre with pawns. Instead the knight on f6 and the bishop on b7 watch e4, so White cannot easily play e2-e4. White's Nc3 would support e4, so Black is often happy to exchange that knight.",
          arrows: [['b7', 'e4'], ['f6', 'e4']],
          highlights: ['e4']
        },
        {
          type: 'puzzle',
          title: 'Remove a defender',
          fen: 'rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b - - 6 7',
          prompt: "Black to move. Which knight move offers to trade White's main defender of e4?",
          solution: ['f6e4'],
          accept: [['f6e4']],
          hint: 'Which white piece supports e2-e4? Put your knight where it can be traded for it.',
          explanation: "7...Ne4 is the classical answer. After 8.Qc2 Nxc3 9.Qxc3 the knight that supported e4 is gone, and Black keeps control with the b7-bishop and often ...f5. If 8.Nxe4 Bxe4, the bishop is superb. Fewer pieces also means less pressure from White's extra space.",
          wrong: {
            d7d5: "Solid, but the pawn on d5 blocks your b7-bishop's view of e4.",
            c7c5: 'A reasonable break, but it does nothing about e4 and is not what was asked.'
          }
        },
        {
          type: 'line',
          title: 'The classical continuation',
          orientation: 'b',
          fen: 'rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b - - 6 7',
          moves: [
            { uci: 'f6e4', san: 'Ne4', note: 'Offers the trade.' },
            { uci: 'd1c2', san: 'Qc2' },
            { uci: 'e4c3', san: 'Nxc3', note: 'The defender of e4 disappears.' },
            { uci: 'c2c3', san: 'Qxc3' },
            { uci: 'f7f5', san: 'f5', note: 'A pawn joins the fight for e4; ...Bf6 and ...d6 are typical next.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-d4-5',
      category: 'black-vs-d4',
      side: 'black',
      title: 'Nimzo-Indian: the ...Ne4 jump',
      level: 'Intermediate',
      minutes: 8,
      objective: 'Use ...Ne4 to attack the pinned c3-knight, and win material with ...Nxc3 and ...Bxc3+ when c3 is under-defended.',
      summary: 'A pinned knight on c3 is a target: ...Ne4 adds an attacker, and ...Bxc3+ can fork king and rook.',
      prerequisites: ['black-vs-d4-4'],
      related: {
        openings: ['b-nimzo', 'b-bogo', 'b-nimzo-classical'],
        gambits: [],
        lessons: ['black-vs-d4-4']
      },
      steps: [
        {
          type: 'read',
          title: 'Two attackers on c3',
          orientation: 'b',
          fen: 'rnbqk2r/ppp2ppp/4p3/3p4/2PPn3/P1Q5/1P2PPPP/R1B1KBNR w KQkq - 1 7',
          text: 'After 4.Qc2 d5 5.a3 Bxc3+ 6.Qxc3 the knight jumps to e4 with tempo on the queen, landing on the square the Nimzo fights for. The same jump is strong whenever a white knight on c3 is pinned by ...Bb4: a knight on e4 attacks c3 a second time, and if c3 is short of defenders, ...Nxc3 wins material.',
          arrows: [['e4', 'c3']],
          highlights: ['e4', 'c3']
        },
        {
          type: 'line',
          title: 'Gaining time with ...Ne4',
          orientation: 'b',
          fen: 'start',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'f8b4', san: 'Bb4' },
            { uci: 'd1c2', san: 'Qc2', note: 'White protects c3 and prepares to win the bishop pair.' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'b4c3', san: 'Bxc3+', note: 'Black gives the bishop, but...' },
            { uci: 'c2c3', san: 'Qxc3' },
            { uci: 'f6e4', san: 'Ne4', note: '...the knight jumps in with tempo on the queen.' },
            { uci: 'c3c2', san: 'Qc2' },
            { uci: 'c7c5', san: 'c5', note: "Black strikes the centre while White's queen has moved three times." }
          ]
        },
        {
          type: 'puzzle',
          title: 'When c3 is short of defenders',
          fen: 'rnbqk2r/pp1p1p2/4p2p/6p1/1bPPn3/2N2NB1/PP3PPP/R2QKB1R b KQkq - 3 9',
          prompt: 'White ignored your knight with 9.Nf3. Black to move: win material.',
          solution: ['e4c3', 'b2c3', 'b4c3'],
          accept: [['e4c3', 'b2c3', 'b4c3']],
          hint: 'Count the defenders of c3, then look at the long diagonal beyond it.',
          explanation: '9...Nxc3 10.bxc3 Bxc3+ forks the king and the a1-rook. After 11.Nd2 (or 11.Ke2) Bxa1 12.Qxa1 Black has won the exchange and a pawn. If White does not recapture on move 10, the knight retreats (usually with a discovered check from b4) and Black stays a piece up. White needed 9.Qc2 or 9.Rc1; this 6.e3 sideline is rarer than 6.d5.',
          wrong: {
            e4g3: 'Wins the bishop pair, but after hxg3 material is level. You missed more.',
            b8c6: 'Natural development, but it gives White time to guard c3 with Qc2 or Rc1. Strike first.',
            d8a5: 'Strong pressure, but 10.Nd2 unpins the knight and you win less. Take on c3 at once.'
          }
        }
      ]
    },
    {
      id: 'black-vs-d4-6',
      category: 'black-vs-d4',
      side: 'black',
      title: 'QGD: answer b4 with ...c5',
      level: 'Intermediate',
      minutes: 7,
      objective: 'Free the Tartakower QGD with the ...c5 break, and understand the hanging pawns that result.',
      summary: "When White pushes b4 to fix Black's queenside, the ...c5 break turns defence into activity.",
      prerequisites: ['black-vs-d4-1'],
      related: {
        openings: ['b-qgd-orthodox', 'b-reti-qgd'],
        gambits: [],
        lessons: ['black-vs-d4-1']
      },
      steps: [
        {
          type: 'read',
          title: 'The freeing break',
          orientation: 'b',
          fen: 'rn1q1rk1/pbp2pp1/1p3b1p/3p4/3P4/2N1PN2/PP2BPPP/R2QK2R w KQ - 0 11',
          text: "In the QGD Black's position is solid but slightly cramped. The pawn break ...c5 is the main way to free it: it challenges d4, opens the c-file and gives the b7-bishop more scope. White wants to stop it, for instance by pushing b4 and later b5, which would leave the c7-pawn backward on a half-open file.",
          arrows: [['c7', 'c5'], ['b2', 'b4']],
          highlights: ['c7', 'd4']
        },
        {
          type: 'puzzle',
          title: 'Meet b4 head-on',
          fen: 'rn1q1rk1/pbp2pp1/1p3b1p/3p4/1P1P4/2N1PN2/P3BPPP/R2QK2R b KQ b3 0 11',
          prompt: 'Black to move. Find the pawn break that challenges both b4 and d4.',
          solution: ['c7c5'],
          accept: [['c7c5']],
          hint: 'One pawn move attacks two white pawns at once.',
          explanation: '11...c5! hits b4 and d4 before White can play b5. After 12.bxc5 bxc5 13.Rb1 Bc6 Black has hanging pawns on c5 and d5: side by side they control key central squares, and the open b-file and the bishop pair give Black active play. Waiting would let White fix c7 with b5.',
          wrong: {
            c7c6: 'Solid but passive: after b5 White fixes a target on c6 or c7.',
            a7a5: 'Hits b4, but it does not challenge d4, and after 12.b5 your c-pawn can be fixed as a target.'
          }
        },
        {
          type: 'line',
          title: 'Hanging pawns',
          orientation: 'b',
          fen: 'rn1q1rk1/pbp2pp1/1p3b1p/3p4/1P1P4/2N1PN2/P3BPPP/R2QK2R b KQ b3 0 11',
          moves: [
            { uci: 'c7c5', san: 'c5', note: 'The break.' },
            { uci: 'b4c5', san: 'bxc5' },
            { uci: 'b6c5', san: 'bxc5', note: 'Hanging pawns: c5 and d5 stand side by side with no neighbours.' },
            { uci: 'a1b1', san: 'Rb1' },
            { uci: 'b7c6', san: 'Bc6', note: 'Steps off the b-file, where the rook attacked it, and supports d5.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8d7', san: 'Nd7', note: "Black's pieces are active; the pawns must be kept mobile, ready for ...c4 or ...d4." }
          ]
        }
      ]
    },
    {
      id: 'black-vs-d4-7',
      category: 'black-vs-d4',
      side: 'black',
      title: "King's Indian: the ...f5 break",
      level: 'Intermediate',
      minutes: 8,
      objective: "Prepare and play ...f5 in the closed King's Indian, and know the follow-up ...f4 and ...g5.",
      summary: "Once White closes the centre with d5, Black's attack begins with the f-pawn.",
      related: {
        openings: ['b-kid-classical', 'b-flank-kid', 'b-kid-samisch'],
        gambits: [],
        lessons: []
      },
      steps: [
        {
          type: 'read',
          title: 'Play where your pawns point',
          orientation: 'b',
          fen: 'r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQ1RK1 w - - 1 9',
          text: "After 8.d5 the centre is closed. A useful rule: attack on the side where your pawn chain points. White's chain (d5, e4) points to the queenside, so White plays b4 and c5. Black's chain (d6, e5) points to the kingside, so Black prepares ...f5. First the f6-knight must move out of the way.",
          arrows: [['f7', 'f5'], ['c4', 'c5']],
          highlights: ['e5', 'd6', 'd5', 'e4']
        },
        {
          type: 'puzzle',
          title: 'Start the attack',
          fen: 'r1bq1rk1/pppnnpbp/3p2p1/3Pp3/2P1P3/2NN4/PP2BPPP/R1BQ1RK1 b - - 4 10',
          prompt: 'Black to move. Which pawn break starts your kingside play?',
          solution: ['f7f5'],
          accept: [['f7f5']],
          hint: 'The knight has left f6. Which pawn can now hit e4?',
          explanation: '10...f5 is the thematic break. It attacks e4, opens the f-file for the rook and gains kingside space. If White keeps the centre closed with f3, Black continues ...f4 and ...g5-g4 with a pawn storm; White meanwhile pushes c5 on the other wing. Speed decides these races.',
          wrong: {
            c7c5: 'Closes the queenside, but it does nothing for your attack and gives White time.',
            f7f6: "Too passive: the pawn supports e5 but does not challenge White's centre."
          }
        },
        {
          type: 'line',
          title: 'The race begins',
          orientation: 'b',
          fen: 'r1bq1rk1/pppnnpbp/3p2p1/3Pp3/2P1P3/2NN4/PP2BPPP/R1BQ1RK1 b - - 4 10',
          moves: [
            { uci: 'f7f5', san: 'f5', note: 'The break.' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'd7f6', san: 'Nf6', note: 'The knight returns to support ...g5 and watch e4.' },
            { uci: 'f2f3', san: 'f3' },
            { uci: 'f5f4', san: 'f4', note: 'Closes the kingside and gains space: now ...g5-g4 is the plan.' },
            { uci: 'c4c5', san: 'c5', note: "White's attack starts on the other wing." },
            { uci: 'g6g5', san: 'g5', note: 'The pawn storm is under way.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-d4-8',
      category: 'black-vs-d4',
      side: 'black',
      title: 'Grunfeld: the long-diagonal bishop',
      level: 'Intermediate',
      minutes: 7,
      objective: "Spot when White's d4-d5 leaves the c3-pawn hanging to ...Bxc3+ with a fork of king and rook.",
      summary: 'In the Grunfeld Exchange the g7-bishop eyes c3 and a1; an early d5 lets it strike.',
      related: {
        openings: ['b-grunfeld'],
        gambits: [],
        lessons: []
      },
      steps: [
        {
          type: 'read',
          title: 'Pressure on c3 and d4',
          orientation: 'b',
          fen: 'rnbqk2r/pp2ppbp/6p1/2p5/3PP3/2P2N2/P4PPP/R1BQKB1R w KQkq c6 0 8',
          text: "After the exchange on c3 White has a big centre, but the pawn on c3 has no pawn neighbours and the g7-bishop x-rays through d4 at c3 and a1. Black adds ...c5 and ...Nc6 against d4. If White pushes d5, the bishop's diagonal opens and c3 may fall with check.",
          arrows: [['g7', 'a1'], ['c5', 'd4']],
          highlights: ['c3', 'd4']
        },
        {
          type: 'puzzle',
          title: 'Punish the early push',
          fen: 'r1bqk2r/pp2ppbp/2n3p1/2pP4/4P3/2P2N2/P3BPPP/R1BQK2R b KQkq - 0 9',
          prompt: 'White has just played 9.d5, attacking your knight. Black to move: win material.',
          solution: ['g7c3'],
          accept: [['g7c3']],
          hint: 'Before saving the knight, look along the long diagonal.',
          explanation: "9...Bxc3+ forks king and rook. After 10.Bd2 Bxa1 11.Qxa1 Nd4! the knight escapes and blocks the long diagonal; after 12.Nxd4 cxd4 13.Qxd4 O-O Black is an exchange up, though White gets some play on the dark squares that Black's missing bishop leaves weak. With White's rook already on b1, ...Bxc3+ wins only a pawn; here the a1-rook is a target.",
          wrong: {
            c6a5: 'The knight is safe, but you missed the check on c3.',
            c6e5: 'A sound, popular reply, but it lets the chance to win the exchange with ...Bxc3+ go by.'
          }
        }
      ]
    },
    {
      id: 'black-vs-d4-9',
      category: 'black-vs-d4',
      side: 'black',
      title: "Benoni: surviving Taimanov's Bb5+",
      level: 'Advanced',
      minutes: 8,
      objective: "Answer the Taimanov Attack's 8.Bb5+ correctly with ...Nfd7 and know why the other blocks fail.",
      summary: "Against f4 and Bb5+ only one interposition keeps Black's position together.",
      related: {
        openings: ['b-benoni', 'b-kid-four-pawns'],
        gambits: [],
        lessons: []
      },
      steps: [
        {
          type: 'read',
          title: 'The e5 break is the danger',
          orientation: 'b',
          fen: 'rnbqk2r/pp3pbp/3p1np1/2pP4/4PP2/2N5/PP4PP/R1BQKBNR w KQkq - 1 8',
          text: "In the Taimanov Attack White plays e4 and f4 to prepare e4-e5, splitting Black's position. The check 8.Bb5+ disrupts Black's development: the natural blocks with the bishop or the b8-knight let White push e5 at once. Black must block so that e5 stays under control.",
          arrows: [['e4', 'e5'], ['f4', 'f5']],
          highlights: ['e5', 'd6']
        },
        {
          type: 'puzzle',
          title: 'Choose the right block',
          fen: 'rnbqk2r/pp3pbp/3p1np1/1BpP4/4PP2/2N5/PP4PP/R1BQK1NR b KQkq - 2 8',
          prompt: 'Black to move. Block the check without allowing a crushing e4-e5.',
          solution: ['f6d7'],
          accept: [['f6d7']],
          hint: 'Which piece, once on d7, also guards e5?',
          explanation: '8...Nfd7 is the accepted answer. From d7 the knight guards e5, so e4-e5 is no longer easy, and the f6-square is free so the queen can come to h4 with check in some lines. 8...Nbd7 runs into 9.e5, and 8...Bd7 into 9.e5 as well; both are considered very dangerous for Black.',
          wrong: {
            b8d7: "Natural, but 9.e5! dxe5 10.fxe5 and the f6-knight is driven away; White's attack is very strong.",
            c8d7: "After 9.e5! White's central break comes with great force; this block is considered dubious."
          }
        },
        {
          type: 'line',
          title: 'The main line',
          orientation: 'b',
          fen: 'rnbqk2r/pp3pbp/3p1np1/1BpP4/4PP2/2N5/PP4PP/R1BQK1NR b KQkq - 2 8',
          moves: [
            { uci: 'f6d7', san: 'Nfd7', note: 'Guards e5.' },
            { uci: 'a2a4', san: 'a4', note: 'Stops ...b5, so ...a6 no longer gains time on the bishop.' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'g1f3', san: 'Nf3', note: 'Development first.' },
            { uci: 'b8a6', san: 'Na6', note: 'Heading for c7 or b4, where the knight challenges the b5-bishop.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-flank-1',
      category: 'black-vs-flank',
      side: 'black',
      title: 'English Four Knights: the ...Nd4 trap',
      level: 'Beginner',
      minutes: 5,
      objective: 'Play ...Nd4 against the English Four Knights and punish the pawn grab Nxe5 with ...Qe7.',
      summary: "A knight on d4 and a queen on e7 can turn White's greed into a smothered king.",
      related: {
        openings: ['b-english-four-knights'],
        gambits: [],
        lessons: []
      },
      steps: [
        {
          type: 'read',
          title: 'The d4 square',
          orientation: 'b',
          fen: 'r1bqkb1r/pppp1ppp/5n2/4p3/2Pn4/2N2NP1/PP1PPP1P/R1BQKB1R w KQkq - 1 5',
          text: "In the reversed Sicilian, d4 is Black's key square, just as d5 is White's in a Sicilian. After 4.g3 the jump 4...Nd4 is a known way to use it: Black offers to trade the f3-knight, which would take a defender away from White's kingside. It also sets a trap if White grabs the e5-pawn.",
          arrows: [['c6', 'd4'], ['d4', 'f3']],
          highlights: ['d4', 'e5']
        },
        {
          type: 'line',
          title: 'The normal continuation',
          orientation: 'b',
          fen: 'start',
          moves: [
            { uci: 'c2c4', san: 'c4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'c6d4', san: 'Nd4', note: 'Occupies d4 and challenges the f3-knight.' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'd4f3', san: 'Nxf3+', note: "Black removes the knight; White's bishop has to recapture." },
            { uci: 'g2f3', san: 'Bxf3' },
            { uci: 'f8b4', san: 'Bb4', note: 'Simple development with pressure on c3.' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Greed is punished',
          fen: 'r1b1kb1r/ppppqppp/5n2/8/2Pn4/2NN2P1/PP1PPP1P/R1BQKB1R b KQkq - 2 6',
          prompt: 'White took on e5 and then retreated with 6.Nd3. Black to move: mate in one.',
          solution: ['d4f3'],
          accept: [['d4f3']],
          hint: 'The e2-pawn cannot move: your queen pins it to the king.',
          explanation: "6...Nf3# is mate. The knight checks the king, the e2-pawn cannot capture because it is pinned by the queen on e7, and the king is boxed in by its own pieces on d1, f1, d2 and f2. After 5.Nxe5 Qe7 White's best is 6.f4, giving the king the f2-square; knight retreats such as 6.Nf3?? or 6.Nd3?? both allow ...Nf3#.",
          wrong: {
            e7e2: 'Wins a pawn with check, but White recaptures with the bishop or the knight. You had mate.',
            d4c2: 'A fork of king and rook, but after Qxc2 you have given up the knight. Mate was available.'
          }
        }
      ]
    },
    {
      id: 'black-vs-flank-2',
      category: 'black-vs-flank',
      side: 'black',
      title: '1.c4 e5: gain space with ...e4',
      level: 'Beginner',
      minutes: 5,
      objective: 'Recognise the ...e4 advance in the English Four Knights and understand what it gains.',
      summary: "Pushing the e-pawn kicks White's best defender and claims space in the centre.",
      related: {
        openings: ['b-english-four-knights'],
        gambits: [],
        lessons: ['black-vs-flank-1']
      },
      steps: [
        {
          type: 'read',
          title: 'A Sicilian in reverse',
          orientation: 'b',
          fen: 'r1bq1rk1/pppp1ppp/2n2n2/4p3/1bP5/2N2NP1/PP1PPPBP/R1BQ1RK1 b - - 4 6',
          text: "With ...e5 Black is playing White's side of a Sicilian, one move behind. The bishop on b4 pins nothing yet, but it eyes the c3-knight, which guards e4. The f3-knight is the main defender of White's kingside and controls d4 and e5. A pawn on e4 would chase it and gain central space.",
          arrows: [['b4', 'c3']],
          highlights: ['f3', 'e4']
        },
        {
          type: 'puzzle',
          title: 'Push with tempo',
          fen: 'r1bq1rk1/pppp1ppp/2n2n2/4p3/1bP5/2N2NP1/PP1PPPBP/R1BQ1RK1 b - - 4 6',
          prompt: 'Black to move. Which pawn advance gains space with tempo against the f3-knight?',
          solution: ['e5e4'],
          accept: [['e5e4']],
          hint: 'Which pawn already stands next to a square that attacks f3?',
          explanation: '6...e4 attacks the knight, which must move, usually to g5 or e1. After 7.Ng5 Bxc3 8.bxc3 Re8 the e4-pawn is well supported. Note that ...Bb4 matters: it lets Black remove the c3-knight, the other piece that attacks e4. 6...Re8 is an equally good main move, but it is not the pawn advance asked for.',
          wrong: {
            f8e8: 'A good move and also main theory, but not a pawn advance: the question asks for space with tempo.',
            d7d5: 'Opens the centre: after cxd5 Nxd5 the knight can be exchanged and e5 needs care. It gains no tempo on f3.'
          }
        },
        {
          type: 'line',
          title: 'Supporting the pawn',
          orientation: 'b',
          fen: 'r1bq1rk1/pppp1ppp/2n2n2/4p3/1bP5/2N2NP1/PP1PPPBP/R1BQ1RK1 b - - 4 6',
          moves: [
            { uci: 'e5e4', san: 'e4', note: 'Space with tempo.' },
            { uci: 'f3g5', san: 'Ng5' },
            { uci: 'b4c3', san: 'Bxc3', note: 'Removes the knight that attacks e4.' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'f8e8', san: 'Re8', note: 'Defends e4 and puts the rook on the e-file.' },
            { uci: 'f2f3', san: 'f3', note: 'White challenges the pawn at once.' },
            { uci: 'e4f3', san: 'exf3' },
            { uci: 'g5f3', san: 'Nxf3' },
            { uci: 'd7d5', san: 'd5', note: 'Black takes the centre with a comfortable position.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-flank-3',
      category: 'black-vs-flank',
      side: 'black',
      title: "King's Indian Attack: punish an early e4",
      level: 'Beginner',
      minutes: 5,
      objective: "Win a pawn when the King's Indian Attack pushes e4 before preparing it with Nbd2 or Qe2.",
      summary: 'In the KIA, e4 needs support; if it comes too soon, ...dxe4 and the open d-file can win a pawn.',
      related: {
        openings: ['b-vs-kia'],
        gambits: [],
        lessons: []
      },
      steps: [
        {
          type: 'read',
          title: 'Who defends e4?',
          orientation: 'b',
          fen: 'rnbqk2r/pp2bppp/4pn2/2pp4/8/3P1NP1/PPP1PPBP/RNBQ1RK1 w kq c6 0 6',
          text: "White's King's Indian Attack wants e2-e4, but the f3-knight blocks the g2-bishop, so after an exchange on e4 nothing would defend a pawn there. That is why White normally plays Nbd2 (or Qe2) first. If White pushes e4 straight away, Black can exchange and the queens may come off with a pawn falling.",
          arrows: [['g2', 'e4'], ['f6', 'e4']],
          highlights: ['e4', 'f3']
        },
        {
          type: 'puzzle',
          title: 'Take the loose pawn',
          fen: 'rnbqk2r/pp2bppp/4pn2/2p5/4P3/5NP1/PPP2PBP/RNBQ1RK1 b kq - 0 7',
          prompt: 'White pushed e4 too early. Black to move: win a pawn.',
          solution: ['d8d1', 'f1d1', 'f6e4'],
          accept: [['d8d1', 'f1d1', 'f6e4'], ['f6e4']],
          hint: 'The queens face each other on the open d-file, and e4 has no defender.',
          explanation: '7...Qxd1 8.Rxd1 Nxe4 wins a clean pawn; 7...Nxe4 at once also works, since 8.Qxd8+ Bxd8 leaves the same extra pawn. If White then plays Ne5 to uncover the g2-bishop on e4, simply move the knight, for example ...Nf6. Lesson: in the KIA, e4 needs Nbd2 or Qe2 first.',
          wrong: {
            e8g8: 'Natural, but 8.Qxd8 Rxd8 9.e5 or 9.Nbd2 saves the pawn: the chance is gone.',
            b8c6: 'Develops, but 8.Qxd8+ and 9.e5 or Nbd2 rescues White.'
          }
        }
      ]
    },
    {
      id: 'black-vs-flank-4',
      category: 'black-vs-flank',
      side: 'black',
      title: 'Bird: kick the knight with ...d4',
      level: 'Intermediate',
      minutes: 6,
      objective: 'Use the ...d4 advance against a Bird set-up to gain central space and drive away a knight from c3.',
      summary: 'Against 1.f4 with a kingside fianchetto, ...d4 is a key space-gaining move.',
      related: {
        openings: ['b-vs-bird'],
        gambits: [],
        lessons: []
      },
      steps: [
        {
          type: 'read',
          title: 'The Leningrad Bird',
          orientation: 'b',
          fen: 'rnbq1rk1/pp2ppbp/5np1/2pp4/5P2/3P1NP1/PPP1P1BP/RNBQ1RK1 w - c6 0 7',
          text: 'Here White plays a Leningrad Dutch with colours reversed. Black has a broad centre with pawns on c5 and d5. White wants e2-e4 to open the game. If White develops the knight to c3 to support e4, Black can push ...d4: it hits the knight, takes space and makes e3 a weak square for White.',
          arrows: [['d5', 'd4'], ['c5', 'd4']],
          highlights: ['e4', 'e3']
        },
        {
          type: 'puzzle',
          title: 'Space with tempo',
          fen: 'rnbq1rk1/pp2ppbp/5np1/2pp4/5P2/2NP1NP1/PPP1P1BP/R1BQ1RK1 b - - 1 7',
          prompt: 'Black to move. Which pawn advance drives the c3-knight away and gains central space?',
          solution: ['d5d4'],
          accept: [['d5d4']],
          hint: 'Your c5-pawn already supports one square in front of the d-pawn.',
          explanation: '7...d4 attacks the knight, which has no ideal square: Ne4 can be exchanged with ...Nxe4, Na4 is on the rim and Nb1 retreats. The d4-pawn, supported by c5, cramps White and eyes e3. Black follows with ...Nc6 and ...Nd5 or ...Qc7 and ...e5.',
          wrong: {
            c5c4: 'Attacks d3 rather than the knight; after 8.dxc4 dxc4 the centre is dissolved and the knight stays on c3.',
            b8c6: 'Good development, but it allows 8.e4 with central play for White.'
          }
        }
      ]
    },
    {
      id: 'black-vs-flank-5',
      category: 'black-vs-flank',
      side: 'black',
      title: 'Symmetrical English: break with ...d5',
      level: 'Intermediate',
      minutes: 6,
      objective: 'Break the symmetry with ...d5 when White opens the centre with d4 in the Symmetrical English.',
      summary: "Copying is fine until White commits; then the ...d5 break frees Black's game.",
      related: {
        openings: ['b-english-symmetrical'],
        gambits: [],
        lessons: []
      },
      steps: [
        {
          type: 'read',
          title: 'Symmetry, then action',
          orientation: 'b',
          fen: 'r1bqk2r/pp1pnpbp/2n1p1p1/2p5/2P5/2N1P1P1/PP1PNPBP/R1BQK2R w KQkq - 2 7',
          text: 'Both sides have identical set-ups. Symmetry is safe for Black only as long as White has nothing to break with. When White plays d4 and recaptures with the e-pawn, Black must react in the centre: ...d5 challenges c4, frees the c8-bishop and stops White from gaining space with d4-d5.',
          arrows: [['d7', 'd5'], ['d2', 'd4']],
          highlights: ['d5', 'c4']
        },
        {
          type: 'puzzle',
          title: 'The freeing break',
          fen: 'r1bqk2r/pp1pnpbp/2n1p1p1/8/2PP4/2N3P1/PP2NPBP/R1BQK2R b KQkq - 0 8',
          prompt: 'Black to move. Which pawn break challenges c4 and frees your c8-bishop?',
          solution: ['d7d5'],
          accept: [['d7d5']],
          hint: 'The e6-pawn already supports a square in front of your d-pawn.',
          explanation: "8...d5 hits c4 and prevents d4-d5. After 9.cxd5 Nxd5 10.Nxd5 exd5 both sides have an isolated d-pawn and the position is level, with Black's bishops free. Waiting with ...O-O allows 9.d5, gaining space and driving the c6-knight away.",
          wrong: {
            e8g8: 'Natural, but 9.d5 gains space and hits your c6-knight.',
            d7d6: 'Too passive: the bishop on c8 stays blocked and White can still push d4-d5.'
          }
        },
        {
          type: 'line',
          title: 'Simplifying',
          orientation: 'b',
          fen: 'r1bqk2r/pp1pnpbp/2n1p1p1/8/2PP4/2N3P1/PP2NPBP/R1BQK2R b KQkq - 0 8',
          moves: [
            { uci: 'd7d5', san: 'd5', note: 'The break.' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'e7d5', san: 'Nxd5', note: 'Recapturing with the knight keeps the long diagonal open.' },
            { uci: 'c3d5', san: 'Nxd5' },
            { uci: 'e6d5', san: 'exd5', note: 'A symmetrical structure again, but Black is fully developed and equal.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-flank-6',
      category: 'black-vs-flank',
      side: 'black',
      title: 'The Mikenas Attack: keep the balance',
      level: 'Intermediate',
      minutes: 6,
      objective: 'Meet the Mikenas Attack with ...d5 and ...d4, and recapture correctly after exf6.',
      summary: 'When White plays 1.c4 and 3.e4 against ...Nf6 and ...e6, a pawn counter-attack keeps material level.',
      related: {
        openings: ['b-english-nimzo'],
        gambits: [],
        lessons: []
      },
      steps: [
        {
          type: 'read',
          title: 'Counter-attack the knight',
          orientation: 'b',
          fen: 'rnbqkb1r/ppp2ppp/4pn2/3pP3/2P5/2N5/PP1P1PPP/R1BQKBNR b KQkq - 0 4',
          text: 'After 1.c4 Nf6 2.Nc3 e6 White can grab the centre with 3.e4. Black hits back with 3...d5, and after 4.e5 attacks the f6-knight. Retreating is possible, but the critical answer is 4...d4, a counter-attack on the c3-knight: each side now attacks a knight.',
          arrows: [['e5', 'f6'], ['d5', 'd4']],
          highlights: ['f6', 'c3']
        },
        {
          type: 'puzzle',
          title: 'Which recapture?',
          fen: 'rnbqkb1r/ppp2ppp/4pP2/8/2Pp4/2N5/PP1P1PPP/R1BQKBNR b KQkq - 0 5',
          prompt: 'White has taken your knight with 5.exf6. Black to move: keep material level.',
          solution: ['d4c3'],
          accept: [['d4c3']],
          hint: 'Before recapturing on f6, take what you attacked.',
          explanation: '5...dxc3 takes the knight back at once. After 6.bxc3 Qxf6 material is level and Black is well developed; 6.fxg7 cxd2+ 7.Bxd2 Bxg7 is also level. Recapturing on f6 first is a mistake: the c3-knight simply escapes and Black is a piece down.',
          wrong: {
            d8f6: 'The knight on c3 escapes, for example to e4 or b5, and you are a piece down for a pawn.',
            g7f6: 'Same problem: White moves the c3-knight and keeps the extra piece.'
          }
        },
        {
          type: 'line',
          title: 'The main line',
          orientation: 'b',
          fen: 'rnbqkb1r/ppp2ppp/4pP2/8/2Pp4/2N5/PP1P1PPP/R1BQKBNR b KQkq - 0 5',
          moves: [
            { uci: 'd4c3', san: 'dxc3', note: 'The counter-capture.' },
            { uci: 'b2c3', san: 'bxc3' },
            { uci: 'd8f6', san: 'Qxf6', note: 'Material is level; the queen is active on f6.' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c7c5', san: 'c5', note: 'Black hits d4 at once and develops quickly.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-flank-7',
      category: 'black-vs-flank',
      side: 'black',
      title: 'Reti: answer 2.c4 with ...c6',
      level: 'Beginner',
      minutes: 5,
      objective: "Meet 1.Nf3 d5 2.c4 with ...c6, keeping d5 and the c8-bishop's diagonal, and know the follow-up set-up.",
      summary: 'The Slav idea works against the Reti too: support d5 and develop the bishop outside the pawns.',
      related: {
        openings: ['b-reti-slav', 'b-slav-main'],
        gambits: [],
        lessons: ['black-vs-d4-2']
      },
      steps: [
        {
          type: 'read',
          title: 'Pressure on d5',
          orientation: 'b',
          fen: 'rnbqkbnr/ppp1pppp/8/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq c3 0 2',
          text: "After 1.Nf3 d5 2.c4 White attacks d5 from the side, as in a Queen's Gambit. Black can support it with ...e6 (a QGD set-up) or ...c6 (a Slav set-up). The difference: ...c6 keeps the c8-h3 diagonal open, so the bishop can come out to f5 or g4.",
          arrows: [['c4', 'd5'], ['c8', 'f5']],
          highlights: ['d5']
        },
        {
          type: 'puzzle',
          title: 'Support d5',
          fen: 'rnbqkbnr/ppp1pppp/8/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq c3 0 2',
          prompt: "Black to move. Support d5 with a pawn while keeping the c8-bishop's diagonal open.",
          solution: ['c7c6'],
          accept: [['c7c6']],
          hint: "Which pawn defends d5 without standing on the bishop's diagonal?",
          explanation: '2...c6 defends d5 and keeps the c8-bishop free, the Slav idea. If White plays d4 it becomes a real Slav; against b3 and g3 Black develops ...Nf6, ...Bf5, ...e6 and ...Nbd7. 2...e6 is a fine move too, but it blocks the bishop.',
          wrong: {
            e7e6: 'Supports d5 soundly, but it blocks the c8-bishop: the QGD approach, not the one asked for.',
            d5d4: 'A respectable system, but it gives up the d5-point instead of supporting it.'
          }
        },
        {
          type: 'line',
          title: 'The double fianchetto',
          orientation: 'b',
          fen: 'start',
          moves: [
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'c7c6', san: 'c6', note: 'Supports d5.' },
            { uci: 'b2b3', san: 'b3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'c8f5', san: 'Bf5', note: 'The bishop is out before ...e6.' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'e7e6', san: 'e6', note: 'Now ...e6 costs nothing.' },
            { uci: 'c1b2', san: 'Bb2' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'h7h6', san: 'h6', note: 'Gives the bishop a retreat on h7 if a knight comes to h4.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-flank-8',
      category: 'black-vs-flank',
      side: 'black',
      title: 'English fianchetto: stop b4 with ...a5',
      level: 'Intermediate',
      minutes: 6,
      objective: "Slow White's queenside expansion with ...a5 in King's Indian set-ups against the English.",
      summary: "When White's rook goes to b1, ...a5 makes the b2-b4 push cost an extra move.",
      related: {
        openings: ['b-flank-kid', 'b-english-closed'],
        gambits: [],
        lessons: []
      },
      steps: [
        {
          type: 'read',
          title: "White's queenside plan",
          orientation: 'b',
          fen: 'r1bq1rk1/ppp2pbp/2np1np1/4p3/2P5/2NP1NP1/PP2PPBP/R1BQ1RK1 w - - 1 8',
          text: "This is a Closed Sicilian with colours reversed. White's usual plan is Rb1, then b2-b4-b5 to chase the c6-knight and open lines on the queenside. Black plays on the kingside with ...h6, ...Be6 or ...Nh5 and ...f5, but first it is useful to slow White down.",
          arrows: [['b2', 'b4'], ['f7', 'f5']],
          highlights: ['b4', 'c6']
        },
        {
          type: 'puzzle',
          title: 'Make b4 harder',
          fen: 'r1bq1rk1/ppp2pbp/2np1np1/4p3/2P5/2NP1NP1/PP2PPBP/1RBQ1RK1 b - - 2 8',
          prompt: "White's rook now supports b2-b4. Black to move: which pawn move makes b4 harder?",
          solution: ['a7a5'],
          accept: [['a7a5']],
          hint: 'Which pawn can control the b4 square?',
          explanation: "8...a5 controls b4, so White must spend a move on a3 before pushing b4, and after b4 axb4 axb4 the a-file opens for Black's rook. Black then turns to the kingside with ...h6, ...Be6 or ...Nh5 and ...f5.",
          wrong: {
            h7h6: 'A useful move, but 9.b4 gains queenside space at once.',
            a7a6: 'Also prepares ...b5, but it does not control b4: 9.b4 comes immediately.'
          }
        },
        {
          type: 'line',
          title: 'A typical continuation',
          orientation: 'b',
          fen: 'r1bq1rk1/ppp2pbp/2np1np1/4p3/2P5/2NP1NP1/PP2PPBP/1RBQ1RK1 b - - 2 8',
          moves: [
            { uci: 'a7a5', san: 'a5', note: 'Controls b4.' },
            { uci: 'a2a3', san: 'a3', note: 'White needs this extra move.' },
            { uci: 'h7h6', san: 'h6', note: "Keeps White's pieces out of g5 and prepares ...Be6." },
            { uci: 'b2b4', san: 'b4' },
            { uci: 'a5b4', san: 'axb4' },
            { uci: 'a3b4', san: 'axb4', note: "The a-file is now open for Black's rook too." },
            { uci: 'c8e6', san: 'Be6', note: 'Black develops and eyes c4; ...Qd7 and ...Bh3 or ...f5 can follow.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-flank-9',
      category: 'black-vs-flank',
      side: 'black',
      title: 'Four Knights 4.d4: target the c4-pawn',
      level: 'Advanced',
      minutes: 8,
      objective: "After ...Bxc3+ in the English Four Knights, attack White's doubled c-pawns with a centralised knight.",
      summary: 'Giving up the bishop for doubled c-pawns pays off only if Black targets them; ...Ne5 is the key move.',
      prerequisites: ['black-vs-flank-2'],
      related: {
        openings: ['b-english-four-knights', 'b-nimzo'],
        gambits: [],
        lessons: ['black-vs-flank-2']
      },
      steps: [
        {
          type: 'read',
          title: 'Bishop for structure',
          orientation: 'b',
          fen: 'r1bqk2r/pppp1pp1/2n2n1p/8/2PN3B/2P5/P3PPPP/R2QKB1R b KQkq - 0 8',
          text: "After 4.d4 exd4 5.Nxd4 Bb4 6.Bg5 h6 7.Bh4 Bxc3+ 8.bxc3 Black has given up the bishop on c3, as in a Nimzo-Indian. White has the bishop pair, but the pawns on c3 and c4 are doubled and the c4-pawn is especially exposed. Black's compensation lies in attacking it quickly with pieces, before White can consolidate.",
          arrows: [],
          highlights: ['c4', 'c3']
        },
        {
          type: 'puzzle',
          title: 'Centralise and attack',
          fen: 'r1bqk2r/pppp1pp1/2n2n1p/8/2PN3B/2P5/P3PPPP/R2QKB1R b KQkq - 0 8',
          prompt: 'Black to move. Which knight move attacks c4 from a central square?',
          solution: ['c6e5'],
          accept: [['c6e5']],
          hint: 'One knight can reach a square that attacks c4 and also controls d3.',
          explanation: "8...Ne5 hits c4, controls d3 and can continue to g6 to question the h4-bishop. Black follows with ...d6, ...b6 and ...Ba6 or ...Be6 against c4. 8...Na5 also attacks c4, but a knight on the rim does little else, and 8...Nxd4 9.cxd4 repairs White's pawns.",
          wrong: {
            c6a5: 'Attacks c4 too, but from the rim; from e5 the knight is far more active.',
            c6d4: "After 9.cxd4 White's doubled pawns are undoubled and the centre is strong."
          }
        }
      ]
    },
    {
      id: 'black-vs-d4-13',
      category: 'black-vs-d4',
      side: 'black',
      title: "QGD: Lasker's freeing exchanges",
      level: 'Intermediate',
      minutes: 6,
      objective: "Use Lasker's ...Ne4 to trade two pairs of minor pieces and free the Queen's Gambit Declined.",
      summary: "Trading pieces is the classical cure for the QGD's slight cramp; ...Ne4 trades two pairs at once.",
      prerequisites: ['black-vs-d4-1'],
      related: {
        openings: ['b-qgd-lasker', 'b-qgd-orthodox'],
        gambits: [],
        lessons: ['black-vs-d4-1', 'black-vs-d4-6']
      },
      steps: [
        {
          type: 'read',
          title: 'A slightly cramped position',
          orientation: 'b',
          fen: 'rnbq1rk1/ppp1bpp1/4pn1p/3p4/2PP3B/2N1PN2/PP3PPP/R2QKB1R b KQ - 1 7',
          text: "The QGD is solid but slightly cramped: the c8-bishop is shut in by the e6-pawn and White's pieces have more room. One classical cure is to exchange pieces, because every trade gives Black's remaining pieces more space. Here the h4-bishop presses on f6 and the c3-knight supports a later e4.",
          arrows: [['h4', 'f6']],
          highlights: ['c8', 'd5']
        },
        {
          type: 'puzzle',
          title: 'Two trades in one move',
          fen: 'rnbq1rk1/ppp1bpp1/4pn1p/3p4/2PP3B/2N1PN2/PP3PPP/R2QKB1R b KQ - 1 7',
          prompt: 'Black to move. Find the knight jump that offers to trade a pair of bishops and a pair of knights.',
          solution: ['f6e4'],
          hint: 'Move the knight to a central square where it attacks c3 and uncovers your e7-bishop.',
          explanation: "7...Ne4 is Lasker's Defence. The knight uncovers the e7-bishop, so 8.Bxe7 Qxe7 trades bishops, and then ...Nxc3 trades knights. With two pairs gone, Black's position breathes, and ...dxc4 with ...e5, or ...b6 and ...Bb7, will free the c8-bishop.",
          wrong: {
            b8d7: 'The Orthodox Defence: sound, but it keeps all the pieces on and trades nothing.',
            b7b6: 'The Tartakower: a good move, but it is not a knight jump and trades nothing.'
          }
        },
        {
          type: 'line',
          title: 'The main line',
          orientation: 'b',
          fen: 'rnbq1rk1/ppp1bpp1/4pn1p/3p4/2PP3B/2N1PN2/PP3PPP/R2QKB1R b KQ - 1 7',
          moves: [
            { uci: 'f6e4', san: 'Ne4', note: 'Offers the trades.' },
            { uci: 'h4e7', san: 'Bxe7' },
            { uci: 'd8e7', san: 'Qxe7', note: 'The first pair is gone.' },
            { uci: 'a1c1', san: 'Rc1' },
            { uci: 'c7c6', san: 'c6', note: 'Supports d5.' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e4c3', san: 'Nxc3', note: 'The second pair is gone.' },
            { uci: 'c1c3', san: 'Rxc3' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'e2c4', san: 'Bxc4' },
            { uci: 'b8d7', san: 'Nd7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b7b6', san: 'b6', note: 'Next ...Bb7 and ...c5: the c8-bishop is free.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-d4-14',
      category: 'black-vs-d4',
      side: 'black',
      title: 'Ragozin: pin, take on c4, strike with ...c5',
      level: 'Intermediate',
      minutes: 6,
      objective: 'Play the Ragozin plan of ...Bb4, ...dxc4 and the ...c5 break against d4.',
      summary: 'A Nimzo-style pin in the QGD gives Black open lines and quick development.',
      related: {
        openings: ['b-qgd-ragozin'],
        gambits: [],
        lessons: ['black-vs-d4-5']
      },
      steps: [
        {
          type: 'read',
          title: 'A Nimzo pin in the QGD',
          orientation: 'b',
          fen: 'rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 4 5',
          text: "4...Bb4 is the Ragozin: a Nimzo-Indian pin in a Queen's Gambit. The bishop restrains e4 and is ready to give itself for the c3-knight. In the main line Black takes the bishop pair with ...h6 and ...Qxf6, gives up the centre with ...dxc4 and strikes at d4 with ...c5. Open lines and quick development replace the usual QGD cramp.",
          arrows: [['b4', 'c3']],
          highlights: ['e4']
        },
        {
          type: 'puzzle',
          title: 'The thematic break',
          fen: 'rnb2rk1/ppp2pp1/4pq1p/8/1bBP4/2N1PN2/PP3PPP/2RQK2R b K - 0 9',
          prompt: 'Black to move. Which pawn break attacks d4 and opens the c-file?',
          solution: ['c7c5'],
          hint: 'One pawn can hit d4 from the side and leave the c-file open for your rooks.',
          explanation: "9...c5 is the thematic Ragozin break. It hits d4, opens the c-file for Black's rooks and makes room for ...Nc6. After 10.O-O cxd4 White usually ends up with an isolated d-pawn and active pieces, and Black plays against it with ...Nc6, ...Bd7 and ...Rd8. Without ...c5, Black's queenside stays undeveloped.",
          wrong: {
            b7b6: 'Prepares ...Bb7, but it is slow: White castles and can prepare e4 with a strong centre.',
            b8c6: 'Develops, but it blocks your c-pawn, so the c-file stays closed and d4 is not challenged.'
          }
        },
        {
          type: 'line',
          title: 'Opening the position',
          orientation: 'b',
          fen: 'rnb2rk1/ppp2pp1/4pq1p/8/1bBP4/2N1PN2/PP3PPP/2RQK2R b K - 0 9',
          moves: [
            { uci: 'c7c5', san: 'c5', note: 'The break.' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c5d4', san: 'cxd4', note: 'The c-file is open; White will usually be left with an isolated d-pawn after exd4.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-d4-15',
      category: 'black-vs-d4',
      side: 'black',
      title: 'Meran and Chebanenko: ...b5, then ...c5',
      level: 'Intermediate',
      minutes: 7,
      objective: 'Gain queenside space with ...b5 in the Semi-Slav and the Chebanenko, and follow up with the ...c5 break.',
      summary: 'In the Meran and the ...a6 Slav, ...b5 comes first and the central break follows.',
      related: {
        openings: ['b-semi-slav', 'b-slav-chebanenko'],
        gambits: [],
        lessons: ['black-vs-d4-2']
      },
      steps: [
        {
          type: 'read',
          title: 'Space first, then the centre',
          orientation: 'b',
          fen: 'r1bqkb1r/p2n1ppp/2p1pn2/1p6/2BP4/2N1PN2/PP3PPP/R1BQK2R w KQkq b6 0 8',
          text: "In the Meran, Black gives up the centre with ...dxc4 and gains time with ...b5, hitting the c4-bishop. The plan is ...Bb7 and ...a6, then the break ...c5, which opens the b7-bishop's diagonal. The same idea, queenside space with ...b5 followed by central action, is the point of the Chebanenko's 4...a6.",
          arrows: [['b5', 'c4']],
          highlights: ['c6']
        },
        {
          type: 'puzzle',
          title: 'Meran: answer e4',
          fen: 'r2qkb1r/1b1n1ppp/p1p1pn2/1p6/3PP3/2NB1N2/PP3PPP/R1BQ1RK1 b kq - 0 10',
          prompt: "White has played 10.e4. Black to move: which pawn break hits d4 and opens your b7-bishop's diagonal?",
          solution: ['c6c5'],
          hint: 'Which pawn stands between your b7-bishop and the e4-pawn?',
          explanation: "10...c5 hits d4 and, with the c6-pawn gone, the b7-bishop bears down on e4. Play becomes sharp after 11.d5 or 11.e5, but Black's pieces are active. This is the main line of the Meran: if Black waits, White pushes e5 and gains space.",
          wrong: {
            e6e5: 'Also hits d4, but the c6-pawn still blocks your b7-bishop; ...c5 is the thematic break.',
            f8e7: 'Too slow: 11.e5 drives the f6-knight away and White gains space.'
          }
        },
        {
          type: 'puzzle',
          title: 'Chebanenko: use ...a6',
          fen: 'rnbqkb1r/1p2pppp/p1p2n2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R b KQkq - 0 5',
          prompt: 'Black to move. Which pawn move uses your ...a6 to gain queenside space?',
          solution: ['b7b5'],
          hint: '...a6 was played to support a neighbouring pawn.',
          explanation: '5...b5 is the point of the Chebanenko. It gains space, makes ...dxc4 a real option with the pawn supported, and keeps the c8-bishop free for ...Bg4 or ...Bf5. After 6.b3 Bg4 Black develops the bishop before playing ...e6.',
          wrong: {
            e7e6: 'A sound move, but it shuts in the c8-bishop and ignores the point of ...a6.',
            b7b6: 'Does not gain space: the point of ...a6 is to support ...b5.'
          }
        }
      ]
    },
    {
      id: 'black-vs-d4-16',
      category: 'black-vs-d4',
      side: 'black',
      title: 'Nimzo-Indian: target the doubled c4-pawn',
      level: 'Intermediate',
      minutes: 6,
      objective: 'After ...Bxc3+ bxc3, fix the c4-pawn with ...c5 and attack it with ...b6 and ...Ba6.',
      summary: 'Doubled c-pawns are the reason Black gives up the bishop; c4 is the pawn to attack.',
      related: {
        openings: ['b-nimzo-samisch', 'b-nimzo'],
        gambits: [],
        lessons: ['black-vs-d4-5', 'black-vs-flank-9']
      },
      steps: [
        {
          type: 'read',
          title: 'Bishop for structure',
          orientation: 'b',
          fen: 'rnbqk2r/pppp1ppp/4pn2/8/2PP4/P1P5/4PPPP/R1BQKBNR b KQkq - 0 5',
          text: 'After ...Bxc3+ bxc3 White has the bishop pair and a broad centre, but the c-pawns are doubled. The c4-pawn is the weak one: no white pawn can ever defend it. Black fixes it with ...c5, so that White cannot easily exchange it, and then attacks it with ...b6, ...Ba6, ...Na5 and ...Rc8.',
          highlights: ['c4', 'c3']
        },
        {
          type: 'puzzle',
          title: 'Attack c4',
          fen: 'r1bqnrk1/p2p1ppp/1pn1p3/2p5/2PPP3/P1PB4/4NPPP/R1BQ1RK1 b - - 2 10',
          prompt: 'Black to move. Which bishop move attacks the weak c4-pawn?',
          solution: ['c8a6'],
          hint: 'With the b-pawn on b6, the c8-bishop has a new diagonal.',
          explanation: "10...Ba6 attacks c4, which only the d3-bishop defends. Next come ...Na5 and ...Rc8, and White's pieces become tied to the pawn. If White plays 11.f4, Black answers ...f5, stopping f4-f5. The doubled pawns are the long-term reason Black gave up the bishop on c3.",
          wrong: {
            c8b7: "Points at e4, which White's pawns control; c4 is the real target.",
            d7d6: 'A useful move, but it does not attack c4 and gives White time for f4 and f5.'
          }
        },
        {
          type: 'line',
          title: 'Pressure and prophylaxis',
          orientation: 'b',
          fen: 'r1bqnrk1/p2p1ppp/1pn1p3/2p5/2PPP3/P1PB4/4NPPP/R1BQ1RK1 b - - 2 10',
          moves: [
            { uci: 'c8a6', san: 'Ba6', note: 'First attacker on c4.' },
            { uci: 'f2f4', san: 'f4', note: 'White hopes for f5 and a kingside attack.' },
            { uci: 'f7f5', san: 'f5', note: 'Stops f4-f5; ...Na5 and ...Rc8 will add to the pressure on c4.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-d4-17',
      category: 'black-vs-d4',
      side: 'black',
      title: 'Grunfeld: when White avoids the Exchange',
      level: 'Advanced',
      minutes: 8,
      objective: 'Gain time on the queen in the Russian System and regain the c5-pawn with ...Qa5 against 4.Bf4.',
      summary: 'Two Grunfeld lines without the big exchange: hit the exposed queen, or pin and regain the pawn.',
      related: {
        openings: ['b-grunfeld-russian', 'b-grunfeld-bf4'],
        gambits: [],
        lessons: ['black-vs-d4-8']
      },
      steps: [
        {
          type: 'read',
          title: 'An exposed queen',
          orientation: 'b',
          fen: 'rnbq1rk1/ppp1ppbp/5np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R b KQ e3 0 7',
          text: "In the Russian System White's queen recaptures on c4 and White builds the classical centre with e4. The centre is strong, but the queen on c4 is exposed. Black's plans all gain time on it: ...a6 and ...b5, ...Bg4 and ...Nfd7-b6, or ...Na6 and ...c5. Every tempo White spends on the queen is a tempo not spent on development.",
          arrows: [['g7', 'd4']],
          highlights: ['c4']
        },
        {
          type: 'puzzle',
          title: 'Russian System: chase the queen',
          fen: 'rnbq1rk1/1pp1ppbp/p4np1/8/2QPP3/2N2N2/PP2BPPP/R1B1K2R b KQ - 1 8',
          prompt: "Black to move. Which pawn move attacks White's queen and gains queenside space?",
          solution: ['b7b5'],
          hint: '...a6 was played to support this push.',
          explanation: '8...b5 hits the queen, which must move again, usually to b3. Then 9...c5 strikes at d4 while White is still developing, and b7 is ready for the bishop. This is the Hungarian Variation of the Russian System.',
          wrong: {
            c7c5: 'Strikes at d4, but play ...b5 first: it gains a tempo on the queen.',
            b8c6: 'Develops, but it blocks the c-pawn and lets White continue with d5 or O-O undisturbed.'
          }
        },
        {
          type: 'puzzle',
          title: '4.Bf4: pin and regain',
          fen: 'rnbqk2r/pp2ppbp/5np1/2Pp4/2P2B2/2N1P3/PP3PPP/R2QKBNR b KQkq - 0 6',
          prompt: 'Black to move. Which queen move pins the c3-knight and prepares to regain the c5-pawn?',
          solution: ['d8a5'],
          hint: "Look at the diagonal from your queen's side of the board towards White's king.",
          explanation: '6...Qa5 pins the c3-knight to the king and eyes c5. After 7.Rc1 dxc4 8.Bxc4 O-O 9.Nf3 Qxc5 Black has regained the pawn with active pieces. Taking on c4 first is a mistake: 6...dxc4? 7.Qxd8+ Kxd8 costs Black the right to castle.',
          wrong: {
            d5c4: '7.Qxd8+ Kxd8 trades queens and your king loses the right to castle.',
            d8c7: 'Hits c5 and f4, but it does not pin the knight, and 7.Nb5 harasses the queen at once.'
          }
        }
      ]
    },
    {
      id: 'black-vs-d4-18',
      category: 'black-vs-d4',
      side: 'black',
      title: "Fianchetto King's Indian: pressure with ...Qb6",
      level: 'Intermediate',
      minutes: 6,
      objective: "Against the Fianchetto King's Indian, play in the centre and hit d4 and b2 with ...Qb6.",
      summary: 'When White fianchettoes, Black plays against the centre rather than the king.',
      related: {
        openings: ['b-kid-fianchetto', 'b-flank-kid'],
        gambits: [],
        lessons: ['black-vs-d4-7']
      },
      steps: [
        {
          type: 'read',
          title: 'Not a kingside race',
          orientation: 'b',
          fen: 'r1bq1rk1/pppn1pbp/3p1np1/4p3/2PPP3/2N2NP1/PP3PBP/R1BQ1RK1 b - e3 0 8',
          text: "With g3 and Bg2 White's king is very safe, so the usual King's Indian kingside storm is not Black's plan. Instead Black builds ...e5 and ...c6 and puts pressure on the centre and the queenside. The targets are d4, which the e5-pawn already attacks, and b2, which only the c1-bishop defends.",
          arrows: [['e5', 'd4']],
          highlights: ['d4', 'b2']
        },
        {
          type: 'puzzle',
          title: 'Two targets at once',
          fen: 'r1bq1rk1/pp1n1pbp/2pp1np1/4p3/2PPP3/2N2NPP/PP3PB1/R1BQ1RK1 b - - 0 9',
          prompt: 'Black to move. Which queen move pressures both d4 and b2?',
          solution: ['d8b6'],
          hint: "The c-pawn's advance has opened a diagonal for your queen.",
          explanation: '9...Qb6 hits d4, together with the e5-pawn, and b2 at the same time. White must decide how to handle the tension in the centre, and Black can follow with ...exd4 and ...Re8 against e4. This is one of the main plans against the Fianchetto Variation.',
          wrong: {
            d8e7: 'Supports e5, but it puts no pressure on d4 or b2.',
            d8c7: 'Does not attack d4 or b2; the queen is passive on c7.'
          }
        },
        {
          type: 'line',
          title: 'How Black gets there',
          orientation: 'b',
          fen: 'start',
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
            { uci: 'e7e5', san: 'e5', note: 'The central strike.' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'c7c6', san: 'c6', note: 'Opens the d8-b6 diagonal and prepares ...exd4.' },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'd8b6', san: 'Qb6', note: 'Pressure on d4 and b2.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-d4-19',
      category: 'black-vs-d4',
      side: 'black',
      title: "King's Indian: hit the big centre with ...c5",
      level: 'Advanced',
      minutes: 9,
      objective: 'Strike at an over-extended centre with ...c5 in the Four Pawns Attack and the Samisch.',
      summary: 'A big centre is a target before it is complete; ...c5 opens the long diagonal against it.',
      related: {
        openings: ['b-kid-four-pawns', 'b-kid-samisch'],
        gambits: [],
        lessons: ['black-vs-d4-9']
      },
      steps: [
        {
          type: 'read',
          title: 'Strong or over-extended?',
          orientation: 'b',
          fen: 'rnbq1rk1/ppp1ppbp/3p1np1/8/2PPPP2/2N2N2/PP4PP/R1BQKB1R b KQ - 2 6',
          text: "In the Four Pawns Attack and the Samisch, White builds a huge pawn centre. It is strong if it can advance safely, but a target if it is attacked before White has finished developing. The King's Indian answer is to hit it from the side with ...c5, opening the long diagonal for the g7-bishop.",
          arrows: [['g7', 'd4']],
          highlights: ['c4', 'd4', 'e4', 'f4']
        },
        {
          type: 'puzzle',
          title: 'Four Pawns: undermine d5',
          fen: 'rnbq1rk1/pp2ppbp/3p1np1/2pP4/2P1PP2/2N2N2/PP4PP/R1BQKB1R b KQ - 0 7',
          prompt: 'White has pushed 7.d5. Black to move: which pawn move challenges d5 and prepares to open the e-file?',
          solution: ['e7e6'],
          hint: "Attack the head of White's pawn chain.",
          explanation: "7...e6 attacks d5. After 8.Be2 exd5 9.cxd5 the e-file is half-open for Black's rook, and the structure is a Benoni in which Black fights for e5 with ...Re8, ...Bg4 and ...Nbd7. Without ...e6, White has a free hand to prepare e4-e5.",
          wrong: {
            b7b5: 'A known gambit idea, but it does not touch d5; the main line is ...e6.',
            c8g4: "Pins the knight, but after 8.Be2 White's centre is untouched and e4-e5 is still coming."
          }
        },
        {
          type: 'puzzle',
          title: 'Samisch: open the diagonal',
          fen: 'rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N1BP2/PP4PP/R2QKBNR b KQ - 2 6',
          prompt: 'Black to move. Which pawn move offers a pawn to open the long diagonal for your g7-bishop?',
          solution: ['c7c5'],
          hint: 'Strike at d4 from the side, even though White can win the pawn.',
          explanation: "6...c5 offers a pawn: after 7.dxc5 dxc5 8.Qxd8 Rxd8 9.Bxc5 Nc6 Black has quick development, an open long diagonal and pressure on White's dark squares, while White's kingside pieces are still at home. It is a well-established gambit, not a blunder.",
          wrong: {
            e7e5: 'The classical move and perfectly good, but it closes the long diagonal rather than opening it.',
            a7a6: 'A useful Panno move, but it offers no pawn and does not open the diagonal.'
          }
        },
        {
          type: 'line',
          title: 'The gambit in action',
          orientation: 'b',
          fen: 'rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N1BP2/PP4PP/R2QKBNR b KQ - 2 6',
          moves: [
            { uci: 'c7c5', san: 'c5', note: 'The pawn offer.' },
            { uci: 'd4c5', san: 'dxc5' },
            { uci: 'd6c5', san: 'dxc5' },
            { uci: 'd1d8', san: 'Qxd8' },
            { uci: 'f8d8', san: 'Rxd8', note: 'The rook takes the open d-file.' },
            { uci: 'e3c5', san: 'Bxc5' },
            { uci: 'b8c6', san: 'Nc6', note: 'Development first: ...Nd7 and ...Nd4 or ...b6 come next, with the g7-bishop raking the long diagonal.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-d4-20',
      category: 'black-vs-d4',
      side: 'black',
      title: 'Stonewall: the e4 outpost',
      level: 'Intermediate',
      minutes: 6,
      objective: 'Use the e4 outpost in the Stonewall Dutch and know why e5 and the c8-bishop need care.',
      summary: 'The Stonewall pawns give Black a permanent knight post on e4.',
      prerequisites: ['middlegames-1'],
      related: {
        openings: ['b-dutch-stonewall'],
        gambits: [],
        lessons: ['black-vs-d4-10']
      },
      steps: [
        {
          type: 'read',
          title: 'A wall of pawns',
          orientation: 'b',
          fen: 'rnbqk2r/pp4pp/2pbpn2/3p1p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w kq - 0 7',
          text: "The Stonewall pawns on c6, d5, e6 and f5 control e4 for good: no white pawn can ever attack that square, so a black knight there is an outpost. The price is a hole on e5 and a c8-bishop shut in by its own pawns. Black's plans follow: occupy e4, watch e5, and find work for the c8-bishop.",
          highlights: ['e4', 'e5', 'c8']
        },
        {
          type: 'puzzle',
          title: 'Occupy the outpost',
          fen: 'rnb2rk1/pp2q1pp/2pbpn2/3p1p2/2PP4/1P3NP1/PB1NPPBP/R2Q1RK1 b - - 4 9',
          prompt: 'Black to move. Which knight move occupies the outpost created by your d5 and f5 pawns?',
          solution: ['f6e4'],
          hint: "The square in front of White's e-pawn can never be attacked by a white pawn.",
          explanation: "9...Ne4 puts the knight on the Stonewall's best square. No pawn can drive it away, it eyes d2, c3 and f2, and if White exchanges it with Nxe4, Black recaptures with a pawn and gains space. The knight on e4 is the heart of Black's kingside play.",
          wrong: {
            f6g4: 'Eyes e3 and h2, but no pawn supports the knight on g4 and h3 will chase it away.',
            b8d7: 'Useful development, but it is not the outpost; ...Ne4 comes first.'
          }
        },
        {
          type: 'line',
          title: 'Outpost against outpost',
          orientation: 'b',
          fen: 'rnb2rk1/pp2q1pp/2pbpn2/3p1p2/2PP4/1P3NP1/PB1NPPBP/R2Q1RK1 b - - 4 9',
          moves: [
            { uci: 'f6e4', san: 'Ne4', note: 'Black occupies e4.' },
            { uci: 'f3e5', san: 'Ne5', note: 'White occupies its own outpost on e5.' },
            { uci: 'b8d7', san: 'Nd7', note: 'Challenges the e5-knight at once; ...b6 and ...Bb7 will solve the bishop problem.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-d4-21',
      category: 'black-vs-d4',
      side: 'black',
      title: "Queen's Gambit Accepted: give it back, gain time",
      level: 'Beginner',
      minutes: 6,
      objective: 'Avoid holding the c4-pawn with an early ...b5, and use ...a6 and ...b5 to gain time once the bishop is on c4.',
      summary: 'In the QGA the pawn is returned; ...b5 is strong only when it hits a bishop.',
      related: {
        openings: ['b-qga'],
        gambits: [],
        lessons: []
      },
      steps: [
        {
          type: 'read',
          title: 'Why take on c4?',
          orientation: 'b',
          fen: 'rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',
          text: "In the Queen's Gambit Accepted Black takes on c4 but does not try to keep the pawn. White regains it with e3 and Bxc4 or builds a centre with e4. Black uses the time for ...Nf6, ...e6 and the ...c5 break, and gains more time with ...a6 and ...b5 once White's bishop has come to c4.",
          highlights: ['c4']
        },
        {
          type: 'line',
          title: 'The classic mistake',
          orientation: 'b',
          fen: 'start',
          text: 'Trying to keep the pawn with ...b5 runs into a4 and a queen check on the long diagonal.',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'b7b5', san: 'b5', note: 'Tries to hold the pawn.' },
            { uci: 'a2a4', san: 'a4' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'a4b5', san: 'axb5' },
            { uci: 'c6b5', san: 'cxb5' },
            { uci: 'd1f3', san: 'Qf3', note: 'The queen hits the a8-rook along the long diagonal, and Black loses material.' }
          ]
        },
        {
          type: 'puzzle',
          title: 'The right moment for ...b5',
          fen: 'rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP2QPPP/RNB2RK1 b kq - 1 7',
          prompt: 'Black to move. Which pawn move gains time on the c4-bishop?',
          solution: ['b7b5'],
          hint: '...a6 was played to support it.',
          explanation: '7...b5 attacks the bishop, which must retreat to b3 or d3, and prepares ...Bb7 on the long diagonal. With the bishop already on c4, ...b5 is a developing move with tempo, not an attempt to keep a pawn. After 8.Bb3 Bb7 9.Rd1 Nbd7 Black is fully mobilised.',
          wrong: {
            c5d4: 'A reasonable exchange, but it releases the tension before you have gained time with ...b5.',
            b7b6: 'Too slow: it does not attack the bishop.'
          }
        }
      ]
    },
    {
      id: 'black-vs-flank-10',
      category: 'black-vs-flank',
      side: 'black',
      title: 'Closed English: kingside space with ...f5',
      level: 'Intermediate',
      minutes: 6,
      objective: 'In the Closed English with ...g6, claim kingside space with ...f5 and slow b4 with ...a5.',
      summary: 'White plays on the queenside, Black on the kingside: ...f5 is the key advance.',
      related: {
        openings: ['b-english-closed', 'b-flank-kid'],
        gambits: [],
        lessons: ['black-vs-flank-8']
      },
      steps: [
        {
          type: 'read',
          title: 'A reversed Closed Sicilian',
          orientation: 'b',
          fen: 'r1bqk1nr/pppp1pbp/2n3p1/4p3/2P5/2N3P1/PP1PPPBP/R1BQK1NR w KQkq - 2 5',
          text: "Both sides have fianchettoed: this is a Closed Sicilian with colours reversed. White's play is usually on the queenside, with Rb1 and b4-b5. Black's natural space is on the kingside, where the e5-pawn points: ...d6, ...f5 and ...Nf6 give Black control of e4 and chances of a kingside initiative.",
          arrows: [['b2', 'b4']],
          highlights: ['e4']
        },
        {
          type: 'puzzle',
          title: 'Claim the kingside',
          fen: 'r1bqk1nr/ppp2pbp/2np2p1/4p3/2P5/2NPP1P1/PP3PBP/R1BQK1NR b KQkq - 0 6',
          prompt: 'Black to move. Which pawn advance gains kingside space and controls e4?',
          solution: ['f7f5'],
          hint: 'Your e5 and d6 pawns point towards the kingside: which pawn can join them there?',
          explanation: "6...f5 takes kingside space, controls e4 and prepares ...Nf6 and ...O-O. With White's pieces aimed at the queenside, Black's play on the other wing gives a balanced, double-edged game. Next comes ...a5 to slow b4.",
          wrong: {
            d6d5: 'Opens the centre but drops a pawn: the c4-pawn, the c3-knight and the g2-bishop all attack d5.',
            h7h5: 'Aggressive, but it weakens g5 and does nothing for e4.'
          }
        },
        {
          type: 'line',
          title: 'Both plans unfold',
          orientation: 'b',
          fen: 'r1bqk1nr/ppp2pbp/2np2p1/4p3/2P5/2NPP1P1/PP3PBP/R1BQK1NR b KQkq - 0 6',
          moves: [
            { uci: 'f7f5', san: 'f5', note: 'Kingside space.' },
            { uci: 'g1e2', san: 'Nge2' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'a1b1', san: 'Rb1', note: 'White prepares b4.' },
            { uci: 'a7a5', san: 'a5', note: 'Makes b4 cost an extra move.' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'c8e6', san: 'Be6', note: 'Eyes c4 and prepares ...Qd7 with ...Bh3 or ...d5.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-flank-11',
      category: 'black-vs-flank',
      side: 'black',
      title: 'Reti with ...e6: the ...d4 wedge',
      level: 'Intermediate',
      minutes: 6,
      objective: "Against the Reti double fianchetto, use ...d4 to gain space and block the b2-bishop's diagonal.",
      summary: "A pawn on d4, supported by c5, blunts White's long-diagonal pressure.",
      related: {
        openings: ['b-reti-qgd'],
        gambits: [],
        lessons: ['black-vs-flank-7']
      },
      steps: [
        {
          type: 'read',
          title: 'Bishops from a distance',
          orientation: 'b',
          fen: 'rnbq1rk1/pp2bppp/4pn2/2pp4/2P5/1P3NP1/PB1PPPBP/RN1Q1RK1 b - - 1 7',
          text: "In the double fianchetto, White's bishops on g2 and b2 aim at Black's centre and kingside from a distance. Black has taken space with ...d5 and ...c5. A key idea is the advance ...d4: supported by the c5-pawn, it gains space and blocks the b2-bishop's long diagonal.",
          arrows: [['b2', 'g7'], ['g2', 'd5']],
          highlights: ['c5']
        },
        {
          type: 'puzzle',
          title: 'Space with tempo',
          fen: 'r1bq1rk1/pp2bppp/2n1pn2/2pp4/2P5/1PN2NP1/PB1PPPBP/R2Q1RK1 b - - 3 8',
          prompt: "Black to move. Which pawn advance attacks the c3-knight and cuts the b2-bishop's long diagonal?",
          solution: ['d5d4'],
          hint: 'Your c5-pawn already supports one square on the long diagonal.',
          explanation: "8...d4 hits the knight and blocks the a1-h8 diagonal. After 9.Na4 the knight is on the rim, and after 9.Nb5 Black can support the pawn with ...e5. Either way Black has a firm central wedge, a structure like a Benoni with colours reversed, and White's b2-bishop has little to bite on.",
          wrong: {
            e6e5: 'Blocks the diagonal on e5, but it gains no tempo on the knight and loosens d5.',
            d5c4: "Gives up the centre: after 9.bxc4 White's pawns control d5 and the b2-bishop's diagonal stays open."
          }
        }
      ]
    }
  ],
  glossary: [
    {
      term: 'Carlsbad structure',
      definition: "The pawn structure after an exchange on d5 in the Queen's Gambit: Black pawns on c6 and d5 against White pawns on d4 and e3. White often plays the minority attack; Black plays on the kingside or uses the e4 square."
    },
    {
      term: 'Stonewall',
      definition: 'A pawn formation with pawns on c6, d5, e6 and f5 for Black (or c3, d4, e3 and f4 for White). It gives a firm grip on e4 (or e5), at the cost of a hole in front of the e-pawn and a hemmed-in light-squared bishop.'
    }
  ]
}]);
