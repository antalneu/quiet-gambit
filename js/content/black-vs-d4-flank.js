/* The Quiet Gambit - Black repertoire against 1.d4 and against flank openings (1.c4, 1.Nf3, KIA, Bird),
 * plus the black-vs-d4 and black-vs-flank lessons. Data only: appends one part to window.QG_PARTS. */
window.QG_PARTS = (window.QG_PARTS || []).concat([{
  source: 'black-vs-d4-flank',
  repertoire: [
    {
      id: 'b-qgd-orthodox',
      side: 'black',
      group: 'vs-d4',
      family: "Queen's Gambit Declined",
      name: "Queen's Gambit Declined: Classical 4.Bg5 Be7 (Tartakower set-up)",
      eco: 'D53',
      moves: '1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Bg5 Be7',
      difficulty: 'Intermediate',
      style: 'Solid',
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
          note: "The main line: ...Bb7 and ...c5 follow. 7...Ne4, Lasker's Defence, is a simpler alternative that trades pieces."
        },
        {
          moves: '5.e3 O-O 6.Nf3 h6 7.Bxf6 Bxf6',
          name: 'Early Bxf6',
          note: 'White gives up the bishop pair to keep the position tight. Black stays solid with ...c6 or ...c5 and has no problems.'
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
        ],
        fen: 'start'
      },
      transpositions: [
        {
          to: 'b-qgd-exchange',
          note: 'If White takes on d5 early, Black recaptures ...exd5 and the Carlsbad structure appears.'
        },
        {
          to: 'b-english-nimzo',
          note: '1.c4 Nf6 2.Nc3 e6 3.d4 d5 4.Bg5 Be7 reaches the same position.'
        }
      ],
      lessons: ['black-vs-d4-1', 'black-vs-d4-6'],
      defining: ['d2d4', 'd7d5', 'c2c4', 'e7e6', 'b1c3', 'g8f6', 'c1g5', 'f8e7']
    },
    {
      id: 'b-qgd-exchange',
      side: 'black',
      group: 'vs-d4',
      family: "Queen's Gambit Declined",
      name: "Queen's Gambit Declined: Exchange Variation (Carlsbad structure)",
      eco: 'D35',
      moves: '1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.cxd5 exd5',
      difficulty: 'Intermediate',
      style: 'Positional',
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
          note: 'Black follows with ...Re8, ...Nf8 and ...Ng6 or ...Ne4; ...h6 can question the bishop first.'
        },
        {
          moves: '5.Bf4 c6 6.e3 Bf5',
          name: 'Bf4 line',
          note: "With no pin on f6, Black develops the light-squared bishop at once, the bishop that is usually Black's problem piece."
        },
        {
          moves: '5.Nf3 c6 6.Bg5 Be7',
          name: 'Nf3 set-up',
          note: 'Same structure; Black develops calmly and can aim for ...Bf5 or ...Ne4 once castled.'
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [
        {
          to: 'b-qgd-orthodox',
          note: 'Arises from the classical QGD whenever White takes on d5 and Black recaptures with the e-pawn.'
        }
      ],
      lessons: ['black-vs-d4-1'],
      defining: ['d2d4', 'd7d5', 'c2c4', 'e7e6', 'b1c3', 'g8f6', 'c4d5', 'e6d5']
    },
    {
      id: 'b-slav-main',
      side: 'black',
      group: 'vs-d4',
      family: 'Slav Defence',
      name: 'Slav Defence: Main line with ...dxc4 and ...Bf5',
      eco: 'D17',
      moves: '1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 dxc4 5.a4 Bf5',
      difficulty: 'Intermediate',
      style: 'Solid',
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
          note: 'The main line. Black castles next and answers e4 with ...Bg6, keeping a sound position.'
        },
        {
          moves: '6.Ne5 Nbd7 7.Nxc4 Qc7',
          name: 'Ne5 with Nxc4',
          note: 'White regains the pawn with the knight. Black prepares ...e5 to free the centre; this is a major main line.'
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
        ],
        fen: 'start'
      },
      transpositions: [
        {
          to: 'b-semi-slav',
          note: '4...e6 instead of 4...dxc4 leads to the Semi-Slav.'
        },
        {
          to: 'b-reti-slav',
          note: '1.Nf3 d5 2.c4 c6 3.d4 Nf6 4.Nc3 reaches this line.'
        }
      ],
      lessons: ['black-vs-d4-2'],
      defining: ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'b1c3', 'd5c4', 'a2a4', 'c8f5']
    },
    {
      id: 'b-semi-slav',
      side: 'black',
      group: 'vs-d4',
      family: 'Slav Defence',
      name: 'Semi-Slav Defence: Meran approach',
      eco: 'D45',
      moves: '1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 e6',
      difficulty: 'Advanced',
      style: 'Sharp',
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
          note: 'Black takes on c4 only after Bd3, so the bishop moves twice; then ...Bb7, ...a6 and ...c5.'
        },
        {
          moves: '5.Bg5 h6 6.Bxf6 Qxf6',
          name: 'Moscow',
          note: 'Black gets the bishop pair and a solid position; ...Nd7, ...dxc4 and ...g6 or ...Bd6 follow. 6.Bh4 dxc4 is much sharper.'
        },
        {
          moves: '5.cxd5 exd5',
          name: 'Exchange',
          note: 'A Carlsbad structure. Black develops ...Be7 or ...Bd6 and plays ...Bf5 when allowed.'
        },
        {
          moves: '5.Qb3 dxc4 6.Qxc4 b5',
          name: 'Early queen',
          note: 'Black takes on c4 and gains time on the queen with ...b5, then ...Bb7.'
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [
        {
          to: 'b-slav-main',
          note: 'Both start 1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3; the choice is 4...dxc4 or 4...e6.'
        },
        {
          to: 'b-reti-slav',
          note: '1.Nf3 d5 2.c4 c6 3.e3 Nf6 4.Nc3 e6 5.d4 transposes.'
        }
      ],
      lessons: [],
      defining: ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'b1c3', 'e7e6']
    },
    {
      id: 'b-qga',
      side: 'black',
      group: 'vs-d4',
      family: "Queen's Gambit Accepted",
      name: "Queen's Gambit Accepted: Classical with ...e6 and ...c5",
      eco: 'D27',
      moves: '1.d4 d5 2.c4 dxc4',
      difficulty: 'Intermediate',
      style: 'Positional',
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
          note: 'The main line. After 6.O-O a6 Black follows with ...b5 or ...Nc6 and ...cxd4.'
        },
        {
          moves: '3.e4 e5',
          name: 'Central 3.e4',
          note: 'The direct reply: after 4.Nf3 exd4 5.Bxc4 Nc6 Black develops quickly and pressures d4.'
        },
        {
          moves: '3.e3 e5',
          name: 'Quiet 3.e3',
          note: 'Black hits d4 at once; after 4.Bxc4 exd4 5.exd4 the position is open and level.'
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [],
      lessons: [],
      defining: ['d2d4', 'd7d5', 'c2c4', 'd5c4']
    },
    {
      id: 'b-nimzo',
      side: 'black',
      group: 'vs-d4',
      family: 'Nimzo-Indian Defence',
      name: 'Nimzo-Indian Defence',
      eco: 'E20',
      moves: '1.d4 Nf6 2.c4 e6 3.Nc3 Bb4',
      difficulty: 'Intermediate',
      style: 'Flexible',
      summary: "Pin the c3-knight to fight for e4; one of Black's most respected and flexible defences.",
      idea: 'Black fights for e4 with pieces rather than pawns. The pin on c3 restrains e4, and Black is often happy to give the bishop for the knight with ...Bxc3, leaving White doubled c-pawns that become targets after ...c5, ...b6, ...Ba6 and ...Na5. The jump ...Ne4 exploits the pinned knight.',
      plans: {
        white: [
          'Win the bishop pair (a3 or Qc2) and open the position for it',
          'Build a big centre with f3 and e4 when Black allows it'
        ],
        black: [
          'Control e4 with ...Bb4, ...Ne4, ...b6 and ...Bb7',
          'After ...Bxc3 and bxc3, attack the doubled c-pawns',
          'Strike the centre with ...c5 and ...d5 at the right moment'
        ]
      },
      responses: [
        {
          moves: '4.e3 O-O 5.Bd3 d5 6.Nf3 c5',
          name: 'Rubinstein',
          note: 'Classical central play; after 7.O-O Nc6 Black is fully developed.'
        },
        {
          moves: '4.Qc2 O-O 5.a3 Bxc3+ 6.Qxc3 b6',
          name: 'Classical',
          note: 'White avoids doubled pawns and keeps the bishop pair. Black fights for e4 with ...Bb7; 4...d5 and 4...c5 are also good.'
        },
        {
          moves: '4.a3 Bxc3+ 5.bxc3 c5',
          name: 'Samisch',
          note: 'White accepts doubled pawns for the bishops and a big centre. Black restrains with ...c5, ...Nc6 and ...b6, and targets c4.'
        },
        {
          moves: '4.f3 d5 5.a3 Bxc3+ 6.bxc3 c5',
          name: 'Kmoch',
          note: 'White prepares e4; Black hits the centre at once. 4...c5 is the other main reply.'
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [
        {
          to: 'b-bogo',
          note: 'If White plays 3.Nf3 instead of 3.Nc3, 3...Bb4+ is the Bogo-Indian; 4.Nc3 there returns to the Nimzo.'
        },
        {
          to: 'b-qid',
          note: "Against 3.Nf3, 3...b6 is the Queen's Indian, the Nimzo's usual partner."
        },
        {
          to: 'b-english-nimzo',
          note: '1.c4 Nf6 2.Nc3 e6 3.d4 Bb4 is the same position.'
        }
      ],
      lessons: ['black-vs-d4-5'],
      defining: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'b1c3', 'f8b4']
    },
    {
      id: 'b-qid',
      side: 'black',
      group: 'vs-d4',
      family: "Queen's Indian Defence",
      name: "Queen's Indian Defence",
      eco: 'E15',
      moves: '1.d4 Nf6 2.c4 e6 3.Nf3 b6',
      difficulty: 'Intermediate',
      style: 'Solid',
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
          note: "The check lures the bishop to d2, where it blocks White's pieces; ...c6 and ...d5 follow."
        },
        {
          moves: '4.g3 Bb7 5.Bg2 Be7 6.O-O O-O 7.Nc3 Ne4',
          name: 'Classical',
          note: 'Black trades the knight that defends e4 and keeps a firm grip on the light squares.'
        },
        {
          moves: '4.a3 Bb7 5.Nc3 d5',
          name: 'Petrosian',
          note: 'White stops ...Bb4. Black strikes with ...d5, and after 6.cxd5 Nxd5 has free play.'
        },
        {
          moves: '4.Nc3 Bb4',
          name: 'Nimzo-style',
          note: 'The pin fights for e4 as in the Nimzo-Indian; 4...Bb7 is also fine.'
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [
        {
          to: 'b-nimzo',
          note: '4.Nc3 Bb4 gives a Nimzo-Indian type position.'
        },
        {
          to: 'b-bogo',
          note: 'Same third move by White; 3...Bb4+ is the Bogo alternative.'
        }
      ],
      lessons: ['black-vs-d4-4'],
      defining: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'b7b6']
    },
    {
      id: 'b-bogo',
      side: 'black',
      group: 'vs-d4',
      family: 'Bogo-Indian Defence',
      name: 'Bogo-Indian Defence',
      eco: 'E11',
      moves: '1.d4 Nf6 2.c4 e6 3.Nf3 Bb4+',
      difficulty: 'Beginner',
      style: 'Solid',
      summary: 'A simple, reliable check on b4 when White avoids the Nimzo-Indian; easy development and a compact position.',
      idea: 'Black develops with tempo and usually exchanges the bishop for a white minor piece, leaving a compact position. In the 4.Bd2 Qe7 line Black plays ...Nc6, ...Bxc3 and ...Ne4, or ...d6 and ...e5, putting the pawns on dark squares where they complement the light-squared bishop.',
      plans: {
        white: [
          'Keep the bishop pair and gain space with g3, Bg2 and Nc3',
          "Push d5 to cramp Black's pieces"
        ],
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
          note: 'Black prepares ...Bxd2+ or ...Bxc3 and ...e5. 4...a5 and 4...Bxd2+ are simpler alternatives.'
        },
        {
          moves: '4.Nbd2 b6 5.a3 Bxd2+',
          name: '4.Nbd2',
          note: 'White avoids doubled pawns; Black gives the bishop and fianchettoes with ...Bb7 to control e4.'
        },
        {
          moves: '4.Nc3',
          name: 'Into the Nimzo',
          note: 'Transposes to a Nimzo-Indian with Nf3; Black can choose ...O-O, ...b6 or ...c5.'
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [
        {
          to: 'b-nimzo',
          note: '4.Nc3 turns the game into a Nimzo-Indian.'
        },
        {
          to: 'b-qid',
          note: 'Both answer 3.Nf3; Black chooses between ...Bb4+ and ...b6.'
        }
      ],
      lessons: [],
      defining: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'f8b4']
    },
    {
      id: 'b-kid-classical',
      side: 'black',
      group: 'vs-d4',
      family: "King's Indian Defence",
      name: "King's Indian Defence: Classical Variation",
      eco: 'E92',
      moves: '1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5',
      difficulty: 'Advanced',
      style: 'Sharp',
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
          note: '...Nd7 or ...Ne8 and ...f5 come next: Black attacks on the kingside, White on the queenside.'
        },
        {
          moves: '7.d5 a5',
          name: 'Petrosian',
          note: 'Black secures c5 for a knight; after 8.Bg5 h6 9.Bh4 Na6 the knight heads for c5.'
        },
        {
          moves: '7.dxe5 dxe5 8.Qxd8 Rxd8',
          name: 'Exchange',
          note: 'White hopes for a small endgame edge. Black is solid; the d4 square is a fine target for a knight.'
        },
        {
          moves: '7.Be3 Ng4 8.Bg5 f6',
          name: 'Gligoric',
          note: 'Black harasses the bishop, then continues with ...Nc6 or ...g5 and ...Nh6, keeping the usual kingside plans.'
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [
        {
          to: 'b-flank-kid',
          note: '1.Nf3 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.d4 O-O 6.Be2 e5 transposes.'
        }
      ],
      lessons: ['black-vs-d4-7'],
      defining: [
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
        'e7e5'
      ]
    },
    {
      id: 'b-grunfeld',
      side: 'black',
      group: 'vs-d4',
      family: 'Grunfeld Defence',
      name: 'Grunfeld Defence',
      eco: 'D85',
      moves: '1.d4 Nf6 2.c4 g6 3.Nc3 d5',
      difficulty: 'Advanced',
      style: 'Sharp',
      summary: 'Black invites White to build a big pawn centre, then attacks it with pieces and ...c5; dynamic and deeply analysed.',
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
          moves: '4.cxd5 Nxd5 5.e4 Nxc3 6.bxc3 Bg7',
          name: 'Exchange',
          note: 'The critical test. Black follows with ...c5, ...O-O and ...Nc6; theory after 7.Nf3 c5 8.Rb1 or 8.Be3 runs deep.'
        },
        {
          moves: '4.Nf3 Bg7 5.Qb3 dxc4 6.Qxc4 O-O',
          name: 'Russian system',
          note: 'White takes the centre with e4; Black counters with ...a6, ...Bg4 or ...Na6.'
        },
        {
          moves: '4.Bf4 Bg7 5.e3 c5',
          name: '4.Bf4',
          note: 'Black hits d4; after 6.dxc5 Qa5 7.Rc1 dxc4 8.Bxc4 O-O the pawn comes back with active play.'
        },
        {
          moves: '4.Bg5 Ne4',
          name: '4.Bg5',
          note: 'Hits the bishop at once; Black gains the bishop pair or quick central play.'
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [],
      lessons: ['black-vs-d4-8'],
      defining: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'd7d5']
    },
    {
      id: 'b-benoni',
      side: 'black',
      group: 'vs-d4',
      family: 'Benoni Defence',
      name: 'Modern Benoni',
      eco: 'A70',
      moves: '1.d4 Nf6 2.c4 c5 3.d5 e6 4.Nc3 exd5 5.cxd5 d6',
      difficulty: 'Advanced',
      style: 'Sharp',
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
          note: 'After 9.O-O Re8 Black pressures e4; ...Na6-c7 and ...b5 follow.'
        },
        {
          moves: '6.e4 g6 7.f4 Bg7 8.Bb5+',
          name: 'Taimanov Attack',
          note: 'The most dangerous line: 8...Nfd7 is the reply. Many Benoni players avoid it with the order 1.d4 Nf6 2.c4 e6 3.Nf3 c5.'
        },
        {
          moves: '6.Nf3 g6 7.g3 Bg7 8.Bg2 O-O',
          name: 'Fianchetto',
          note: 'A positional battle; Black plays ...Re8, ...Na6-c7 and ...b5.'
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [],
      lessons: ['black-vs-d4-9'],
      defining: ['d2d4', 'g8f6', 'c2c4', 'c7c5', 'd4d5', 'e7e6', 'b1c3', 'e6d5', 'c4d5', 'd7d6']
    },
    {
      id: 'b-dutch-leningrad',
      side: 'black',
      group: 'vs-d4',
      family: 'Dutch Defence',
      name: 'Dutch Defence: Leningrad Variation',
      eco: 'A87',
      moves: '1.d4 f5 2.g3 Nf6 3.Bg2 g6',
      difficulty: 'Advanced',
      style: 'Attacking',
      summary: "Combine ...f5 with a King's Indian fianchetto: an ambitious, unbalanced fight for e4 and the kingside.",
      idea: 'Black controls e4 with the f-pawn and develops ...Bg7, ...O-O and ...d6. The typical plan is ...Qe8 (or ...c6 and ...Qa5) to prepare ...e5, which frees the position and unleashes the g7-bishop. Against d4-d5 Black uses the c5 square with ...a5 and ...Na6. Black must watch the weakened e6 square and the e8-h5 diagonal.',
      plans: {
        white: [
          'Push d5 to gain space and eye the e6 square',
          "Prepare e2-e4 to open the centre against Black's king"
        ],
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
          note: '...Qe8 prepares ...e5; against 8.d5 Black plays ...a5 and ...Na6-c5.'
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
        ],
        fen: 'start'
      },
      transpositions: [],
      lessons: [],
      defining: ['d2d4', 'f7f5', 'g2g3', 'g8f6', 'f1g2', 'g7g6']
    },
    {
      id: 'b-vs-london',
      side: 'black',
      group: 'vs-d4',
      family: 'London System',
      name: 'London System: the ...c5 and ...Qb6 plan',
      eco: 'D02',
      moves: '1.d4 d5 2.Bf4 c5 3.e3 Nc6',
      difficulty: 'Beginner',
      style: 'Flexible',
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
          note: 'Queenside space with tempo. 7.Qxf5?? Qxb2 wins the a1-rook, so White plays 7.Qc1 and Black continues ...e6, ...Nf6 and ...b5.'
        },
        {
          moves: '4.Nf3 Nf6 5.c3 Qb6',
          name: 'Natural order',
          note: 'The same pressure on b2 and d4; White must spend time on b2 with Qb3, Qc2 or Qc1.'
        },
        {
          moves: '4.dxc5 e6',
          name: '4.dxc5',
          note: 'White gives up the centre; Black recaptures with ...Bxc5 and develops comfortably.'
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [],
      lessons: ['black-vs-d4-3'],
      uncertain: 'After 7.Qc1 move orders vary; the last two moves of the sample line show normal development rather than one fixed main line.',
      defining: ['d2d4', 'd7d5', 'c1f4', 'c7c5', 'e2e3', 'b8c6']
    },
    {
      id: 'b-vs-colle',
      side: 'black',
      group: 'vs-d4',
      family: 'Colle System',
      name: 'Colle System: the ...c5 and ...Bd6 set-up',
      eco: 'D05',
      moves: '1.d4 d5 2.Nf3 Nf6 3.e3 e6 4.Bd3 c5',
      difficulty: 'Beginner',
      style: 'Solid',
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
          note: 'After 8.dxc5 Bxc5 9.e4 Qc7 Black controls e5. 8.e4 is met by exchanges in the centre, leaving White an isolated d-pawn.'
        },
        {
          moves: '5.b3 Nc6 6.O-O Bd6 7.Bb2 O-O',
          name: 'Colle-Zukertort',
          note: 'White aims for Ne5 and f4. Black can mirror with ...b6 and ...Bb7, and exchanges a knight that comes to e5.'
        },
        {
          moves: '5.O-O Nc6 6.b3',
          name: 'Flexible order',
          note: 'Usually transposes; Black keeps the same development.'
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [],
      lessons: [],
      defining: ['d2d4', 'd7d5', 'g1f3', 'g8f6', 'e2e3', 'e7e6', 'f1d3', 'c7c5']
    },
    {
      id: 'b-vs-trompowsky',
      side: 'black',
      group: 'vs-d4',
      family: 'Trompowsky Attack',
      name: 'Trompowsky Attack: 2...e6',
      eco: 'A45',
      moves: '1.d4 Nf6 2.Bg5 e6',
      difficulty: 'Beginner',
      style: 'Solid',
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
          note: 'White gets the centre, Black the bishop pair. Black develops with ...d6 and ...Nc6 or ...Nd7, or pins with ...Bb4 after Nc3.'
        },
        {
          moves: '3.Nf3 h6',
          name: 'Torre-style',
          note: "If 4.Bxf6 Qxf6 the bishops are Black's; if 4.Bh4 Black can play ...c5 or ...b6 and ...Bb7."
        },
        {
          moves: '3.e3 c5',
          name: 'Quiet 3.e3',
          note: 'Black strikes at d4 and develops easily; ...Qb6 can hit b2 once the bishop has left c1.'
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [],
      lessons: [],
      uncertain: 'After 6.Qd2 Black has several established moves (...g5, ...Nc6, ...a6); the sample shows ...g5 as one typical choice, not the only main line.',
      defining: ['d2d4', 'g8f6', 'c1g5', 'e7e6']
    },
    {
      id: 'b-english-four-knights',
      side: 'black',
      group: 'vs-flank',
      family: 'English Opening',
      name: 'English: Four Knights with ...e5 (Reversed Sicilian)',
      eco: 'A28',
      moves: '1.c4 e5 2.Nc3 Nf6 3.Nf3 Nc6',
      difficulty: 'Intermediate',
      style: 'Flexible',
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
          note: "...e4 kicks the knight; after 7.Ng5 Bxc3 8.bxc3 Re8 Black's centre is well supported. 4...d5 is the Reversed Dragon alternative."
        },
        {
          moves: '4.e3 Bb4 5.Qc2 O-O',
          name: '4.e3',
          note: 'White restrains ...e4 and prepares Nd5 or d4. Black keeps e5 solid with ...Re8 and takes on c3 when it helps.'
        },
        {
          moves: '4.d4 exd4 5.Nxd4 Bb4',
          name: '4.d4',
          note: "The open line: after 6.Bg5 h6 7.Bh4 Bxc3+ 8.bxc3 Ne5 White's doubled c-pawns are targets."
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [],
      lessons: ['black-vs-flank-1', 'black-vs-flank-2', 'black-vs-flank-9'],
      defining: ['c2c4', 'e7e5', 'b1c3', 'g8f6', 'g1f3', 'b8c6']
    },
    {
      id: 'b-english-symmetrical',
      side: 'black',
      group: 'vs-flank',
      family: 'English Opening',
      name: 'English: Symmetrical Variation',
      eco: 'A36',
      moves: '1.c4 c5 2.Nc3 Nc6 3.g3 g6 4.Bg2 Bg7',
      difficulty: 'Intermediate',
      style: 'Positional',
      summary: "Answer 1.c4 with ...c5 and mirror White's fianchetto; solid and hard to crack, with chances to take over later.",
      idea: "Black copies White's set-up so every White plan meets a ready answer. The skill is breaking the symmetry at the right moment: ...e6 and ...d5, ...e5 to clamp d4, or ...a6 and ...b5 on the queenside. If White opens with d4, Black exchanges and uses the g7-bishop against c3 and b2.",
      plans: {
        white: [
          'Open the centre with d4, or set up the Botvinnik bind with e4 and d3',
          'Expand with a3, Rb1 and b4'
        ],
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
          note: 'After 8...Nxd4 9.Qxd4 d6 Black develops easily and the g7-bishop eyes the queen and c3.'
        },
        {
          moves: '5.e3 e6 6.Nge2 Nge7 7.d4 cxd4 8.exd4 d5',
          name: 'e3 and Nge2',
          note: 'Black breaks the symmetry with ...d5 at once, with equal play.'
        },
        {
          moves: '5.e4',
          name: 'Botvinnik bind',
          note: 'White grips d5. Black replies ...e6 and ...Nge7, or ...e5 and ...d6, and aims for ...f5 or ...b5 later.'
        },
        {
          moves: '5.a3',
          name: 'Queenside plan',
          note: 'Preparing Rb1 and b4. Black can copy with ...a6 and ...Rb8, or play ...e6 and ...Nge7.'
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [],
      lessons: ['black-vs-flank-5'],
      defining: ['c2c4', 'c7c5', 'b1c3', 'b8c6', 'g2g3', 'g7g6', 'f1g2', 'f8g7']
    },
    {
      id: 'b-english-nimzo',
      side: 'black',
      group: 'vs-flank',
      family: 'English Opening',
      name: 'English: ...Nf6 and ...e6 (Nimzo-English)',
      eco: 'A17',
      moves: '1.c4 Nf6 2.Nc3 e6',
      difficulty: 'Intermediate',
      style: 'Flexible',
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
          note: 'After 4.Qc2 O-O 5.a3 Bxc3 6.Qxc3 b6 Black fights for e4 with ...Bb7 and ...d6.'
        },
        {
          moves: '3.d4 Bb4',
          name: 'Into the Nimzo',
          note: 'Transposes to the Nimzo-Indian; 3...d5 gives a QGD instead.'
        },
        {
          moves: '3.e4 d5 4.e5 d4',
          name: 'Mikenas Attack',
          note: 'Black counter-attacks the knight; after 5.exf6 dxc3 6.bxc3 Qxf6 material is level and Black is well developed.'
        },
        {
          moves: '3.g3 d5',
          name: 'Catalan-style',
          note: 'Black takes the centre; ...Be7, ...O-O and ...c5 or ...dxc4 follow.'
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [
        {
          to: 'b-nimzo',
          note: '3.d4 Bb4 is a Nimzo-Indian.'
        },
        {
          to: 'b-qgd-orthodox',
          note: '3.d4 d5 4.Bg5 Be7 is the classical QGD.'
        }
      ],
      lessons: ['black-vs-flank-6'],
      uncertain: 'After 6...b6 White has several seventh moves (e3, b4, g3, e4); the sample shows one typical set-up for both sides rather than a single main line.',
      defining: ['c2c4', 'g8f6', 'b1c3', 'e7e6']
    },
    {
      id: 'b-reti-slav',
      side: 'black',
      group: 'vs-flank',
      family: 'Reti Opening',
      name: 'Reti Opening: Slav set-up with ...d5 and ...c6',
      eco: 'A11',
      moves: '1.Nf3 d5 2.c4 c6',
      difficulty: 'Beginner',
      style: 'Solid',
      summary: 'Against 1.Nf3 and 2.c4, support d5 with ...c6: a reliable Slav-style set-up that keeps the light-squared bishop free.',
      idea: 'Black holds d5 with ...c6 and develops ...Nf6, ...Bf5 or ...Bg4, ...e6 and ...Nbd7. If White plays d4 it is simply a Slav. Against the double fianchetto (b3 and g3) Black builds a compact centre with the bishop outside the pawn chain, often adding ...h6 so the bishop has a retreat on h7.',
      plans: {
        white: [
          'Press d5 from a distance with b3, g3, Bb2 and Bg2',
          "Hit b7 with Qb3 once Black's bishop has left c8"
        ],
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
          note: 'Transposes to the Slav main lines.'
        },
        {
          moves: '3.b3 Nf6 4.g3 Bf5',
          name: 'Double fianchetto',
          note: 'Black builds ...e6, ...Nbd7, ...Be7 or ...Bd6 and ...h6, keeping the bishop active.'
        },
        {
          moves: '3.e3 Nf6 4.Nc3 e6',
          name: '3.e3',
          note: 'A Semi-Slav type position, and a true Semi-Slav if White plays d4.'
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [
        {
          to: 'b-slav-main',
          note: '3.d4 Nf6 4.Nc3 dxc4 5.a4 Bf5 is the Slav main line.'
        },
        {
          to: 'b-semi-slav',
          note: '3.e3 Nf6 4.Nc3 e6 5.d4 is a Semi-Slav.'
        }
      ],
      lessons: ['black-vs-flank-7'],
      defining: ['g1f3', 'd7d5', 'c2c4', 'c7c6']
    },
    {
      id: 'b-flank-kid',
      side: 'black',
      group: 'vs-flank',
      family: "King's Indian set-up",
      name: "King's Indian set-up against 1.Nf3 and 1.c4",
      eco: 'A15',
      moves: '1.Nf3 Nf6 2.c4 g6 3.Nc3 Bg7',
      difficulty: 'Intermediate',
      style: 'Flexible',
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
          note: 'Black follows with ...Nc6, ...a5 and ...h6 or ...Nh5 and ...f5.'
        },
        {
          moves: '4.e4 d6 5.d4 O-O',
          name: "Into the King's Indian",
          note: "Transposes to the King's Indian main lines."
        },
        {
          moves: '4.d4 O-O 5.g3 d6',
          name: "Fianchetto King's Indian",
          note: 'Black plays ...Nc6 or ...Nbd7 with ...e5, or ...c5.'
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [
        {
          to: 'b-kid-classical',
          note: "4.e4 d6 5.d4 O-O 6.Be2 e5 is the Classical King's Indian."
        }
      ],
      lessons: ['black-vs-flank-8'],
      defining: ['g1f3', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'f8g7']
    },
    {
      id: 'b-vs-kia',
      side: 'black',
      group: 'vs-flank',
      family: "King's Indian Attack",
      name: "King's Indian Attack: ...d5, ...e6 and ...c5 set-up",
      eco: 'A07',
      moves: '1.Nf3 d5 2.g3 Nf6 3.Bg2 e6 4.O-O Be7 5.d3 c5',
      difficulty: 'Intermediate',
      style: 'Positional',
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
          note: 'After 8...b5 9.e5 Nd7 10.Nf1 a5 the race begins: Black on the queenside, White on the kingside.'
        },
        {
          moves: '6.e4',
          name: 'Premature e4',
          note: 'Without Nbd2 or Qe2 the e4-pawn is loose: 6...dxe4 7.dxe4 Qxd1 8.Rxd1 Nxe4 wins a pawn.'
        },
        {
          moves: '6.c4',
          name: 'Reti style',
          note: 'A Reti or Catalan type position; Black castles, plays ...Nc6 and chooses between ...d4 and ...dxc4.'
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [],
      lessons: ['black-vs-flank-3'],
      defining: ['g1f3', 'd7d5', 'g2g3', 'g8f6', 'f1g2', 'e7e6', 'e1g1', 'f8e7', 'd2d3', 'c7c5']
    },
    {
      id: 'b-vs-bird',
      side: 'black',
      group: 'vs-flank',
      family: "Bird's Opening",
      name: "Bird's Opening: ...d5, ...Nf6 and ...g6",
      eco: 'A03',
      moves: '1.f4 d5 2.Nf3 Nf6 3.e3 g6',
      difficulty: 'Beginner',
      style: 'Flexible',
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
          note: "Black takes space; White's Qe1-h4 plan is met by central play with ...Nc6 and ...d4 or ...e5."
        },
        {
          moves: '3.g3 g6 4.Bg2 Bg7 5.O-O O-O 6.d3 c5',
          name: 'Leningrad set-up',
          note: 'Black takes space with ...c5 and ...Nc6, and kicks a knight on c3 with ...d4.'
        },
        {
          moves: '4.b3 Bg7 5.Bb2 O-O',
          name: 'b3 and Bb2',
          note: "Black castles and plays ...c5 and ...Nc6; ...d4 can cut the b2-bishop's diagonal."
        }
      ],
      line: {
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
        ],
        fen: 'start'
      },
      transpositions: [],
      lessons: ['black-vs-flank-4'],
      defining: ['f2f4', 'd7d5', 'g1f3', 'g8f6', 'e2e3', 'g7g6']
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
          hint: 'Ignore the pin: what happens to White after you give up the queen?',
          explanation: '6...Nxd5! breaks the pin. If 7.Bxd8, then 7...Bb4+ forces 8.Qd2 Bxd2+ 9.Kxd2 Kxd8, and Black has won a knight for a pawn. If White does not take the queen, Black is a knight for a pawn up. The bishop check works because the d2 square is the only block.',
          wrong: {
            f8e7: 'Safe, but you have simply lost a pawn. The knight on d5 can be taken.',
            c7c6: 'Attacks the knight, but after 7.Nxf6+ Nxf6 (or 7.Nc3) you are simply a pawn down.'
          },
          accept: [['f6d5', 'g5d8', 'f8b4']]
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
        openings: ['b-slav-main', 'b-semi-slav', 'b-reti-slav'],
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
          hint: 'The queen that defended b2 has gone for a walk. What is behind b2?',
          explanation: '7...Qxb2 attacks the a1-rook, and the b1-knight is in the way of any defence. Black regains more than the bishop: after 8.Qxd5 Qxa1 or 8.Nd2 Qxa1+ Black has won a rook for the bishop. A check on c8 does not help, because the a8-rook covers c8 now that the knight has left b8.',
          wrong: {
            e7e6: 'Attacks the queen, but it simply retreats and White stays a bishop up.',
            g7g6: 'Gains a tempo, but after the queen retreats you are a piece down.'
          },
          accept: [['b6b2']]
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
        openings: ['b-qid', 'b-nimzo'],
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
          hint: 'Which white piece supports e2-e4? Put your knight where it can be traded for it.',
          explanation: "7...Ne4 is the classical answer. After 8.Qc2 Nxc3 9.Qxc3 the knight that supported e4 is gone, and Black keeps control with the b7-bishop and often ...f5. If 8.Nxe4 Bxe4, the bishop is superb. Fewer pieces also means less pressure from White's extra space.",
          wrong: {
            d7d5: "Solid, but the pawn on d5 blocks your b7-bishop's view of e4.",
            c7c5: 'A reasonable break, but it does nothing about e4 and is not what was asked.'
          },
          accept: [['f6e4']]
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
        openings: ['b-nimzo', 'b-bogo'],
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
          hint: 'Count the defenders of c3, then look at the long diagonal beyond it.',
          explanation: '9...Nxc3 10.bxc3 Bxc3+ forks the king and the a1-rook. After 11.Nd2 (or 11.Ke2) Bxa1 12.Qxa1 Black has won the exchange and a pawn. If White does not recapture on move 10, the knight retreats (usually with a discovered check from b4) and Black stays a piece up. White needed 9.Qc2 or 9.Rc1; this 6.e3 sideline is rarer than 6.d5.',
          wrong: {
            e4g3: 'Wins the bishop pair, but after hxg3 material is level. You missed more.',
            b8c6: 'Natural development, but it gives White time to guard c3 with Qc2 or Rc1. Strike first.',
            d8a5: 'Strong pressure, but 10.Nd2 unpins the knight and you win less. Take on c3 at once.'
          },
          accept: [['e4c3', 'b2c3', 'b4c3']]
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
        openings: ['b-qgd-orthodox'],
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
          hint: 'One pawn move attacks two white pawns at once.',
          explanation: '11...c5! hits b4 and d4 before White can play b5. After 12.bxc5 bxc5 13.Rb1 Bc6 Black has hanging pawns on c5 and d5: side by side they control key central squares, and the open b-file and the bishop pair give Black active play. Waiting would let White fix c7 with b5.',
          wrong: {
            c7c6: 'Solid but passive: after b5 White fixes a target on c6 or c7.',
            a7a5: 'Hits b4, but it does not challenge d4, and after 12.b5 your c-pawn can be fixed as a target.'
          },
          accept: [['c7c5']]
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
        openings: ['b-kid-classical', 'b-flank-kid'],
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
          hint: 'The knight has left f6. Which pawn can now hit e4?',
          explanation: '10...f5 is the thematic break. It attacks e4, opens the f-file for the rook and gains kingside space. If White keeps the centre closed with f3, Black continues ...f4 and ...g5-g4 with a pawn storm; White meanwhile pushes c5 on the other wing. Speed decides these races.',
          wrong: {
            c7c5: 'Closes the queenside, but it does nothing for your attack and gives White time.',
            f7f6: "Too passive: the pawn supports e5 but does not challenge White's centre."
          },
          accept: [['f7f5']]
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
          hint: 'Before saving the knight, look along the long diagonal.',
          explanation: "9...Bxc3+ forks king and rook. After 10.Bd2 Bxa1 11.Qxa1 Nd4! the knight escapes and blocks the long diagonal; after 12.Nxd4 cxd4 13.Qxd4 O-O Black is an exchange up, though White gets some play on the dark squares that Black's missing bishop leaves weak. With White's rook already on b1, ...Bxc3+ wins only a pawn; here the a1-rook is a target.",
          wrong: {
            c6a5: 'The knight is safe, but you missed the check on c3.',
            c6e5: 'A sound, popular reply, but it lets the chance to win the exchange with ...Bxc3+ go by.'
          },
          accept: [['g7c3']]
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
        openings: ['b-benoni'],
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
          hint: 'Which piece, once on d7, also guards e5?',
          explanation: '8...Nfd7 is the accepted answer. From d7 the knight guards e5, so e4-e5 is no longer easy, and the f6-square is free so the queen can come to h4 with check in some lines. 8...Nbd7 runs into 9.e5, and 8...Bd7 into 9.e5 as well; both are considered very dangerous for Black.',
          wrong: {
            b8d7: "Natural, but 9.e5! dxe5 10.fxe5 and the f6-knight is driven away; White's attack is very strong.",
            c8d7: "After 9.e5! White's central break comes with great force; this block is considered dubious."
          },
          accept: [['f6d7']]
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
          hint: 'The e2-pawn cannot move: your queen pins it to the king.',
          explanation: "6...Nf3# is mate. The knight checks the king, the e2-pawn cannot capture because it is pinned by the queen on e7, and the king is boxed in by its own pieces on d1, f1, d2 and f2. After 5.Nxe5 Qe7 White's best is 6.f4, giving the king the f2-square; knight retreats such as 6.Nf3?? or 6.Nd3?? both allow ...Nf3#.",
          wrong: {
            e7e2: 'Wins a pawn with check, but White recaptures with the bishop or the knight. You had mate.',
            d4c2: 'A fork of king and rook, but after Qxc2 you have given up the knight. Mate was available.'
          },
          accept: [['d4f3']]
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
          hint: 'Which pawn already stands next to a square that attacks f3?',
          explanation: '6...e4 attacks the knight, which must move, usually to g5 or e1. After 7.Ng5 Bxc3 8.bxc3 Re8 the e4-pawn is well supported. Note that ...Bb4 matters: it lets Black remove the c3-knight, the other piece that attacks e4. 6...Re8 is an equally good main move, but it is not the pawn advance asked for.',
          wrong: {
            f8e8: 'A good move and also main theory, but not a pawn advance: the question asks for space with tempo.',
            d7d5: 'Opens the centre: after cxd5 Nxd5 the knight can be exchanged and e5 needs care. It gains no tempo on f3.'
          },
          accept: [['e5e4']]
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
          hint: 'Your c5-pawn already supports one square in front of the d-pawn.',
          explanation: '7...d4 attacks the knight, which has no ideal square: Ne4 can be exchanged with ...Nxe4, Na4 is on the rim and Nb1 retreats. The d4-pawn, supported by c5, cramps White and eyes e3. Black follows with ...Nc6 and ...Nd5 or ...Qc7 and ...e5.',
          wrong: {
            c5c4: 'Attacks d3 rather than the knight; after 8.dxc4 dxc4 the centre is dissolved and the knight stays on c3.',
            b8c6: 'Good development, but it allows 8.e4 with central play for White.'
          },
          accept: [['d5d4']]
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
          hint: 'The e6-pawn already supports a square in front of your d-pawn.',
          explanation: "8...d5 hits c4 and prevents d4-d5. After 9.cxd5 Nxd5 10.Nxd5 exd5 both sides have an isolated d-pawn and the position is level, with Black's bishops free. Waiting with ...O-O allows 9.d5, gaining space and driving the c6-knight away.",
          wrong: {
            e8g8: 'Natural, but 9.d5 gains space and hits your c6-knight.',
            d7d6: 'Too passive: the bishop on c8 stays blocked and White can still push d4-d5.'
          },
          accept: [['d7d5']]
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
          hint: 'Before recapturing on f6, take what you attacked.',
          explanation: '5...dxc3 takes the knight back at once. After 6.bxc3 Qxf6 material is level and Black is well developed; 6.fxg7 cxd2+ 7.Bxd2 Bxg7 is also level. Recapturing on f6 first is a mistake: the c3-knight simply escapes and Black is a piece down.',
          wrong: {
            d8f6: 'The knight on c3 escapes, for example to e4 or b5, and you are a piece down for a pawn.',
            g7f6: 'Same problem: White moves the c3-knight and keeps the extra piece.'
          },
          accept: [['d4c3']]
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
          hint: "Which pawn defends d5 without standing on the bishop's diagonal?",
          explanation: '2...c6 defends d5 and keeps the c8-bishop free, the Slav idea. If White plays d4 it becomes a real Slav; against b3 and g3 Black develops ...Nf6, ...Bf5, ...e6 and ...Nbd7. 2...e6 is a fine move too, but it blocks the bishop.',
          wrong: {
            e7e6: 'Supports d5 soundly, but it blocks the c8-bishop: the QGD approach, not the one asked for.',
            d5d4: 'A respectable system, but it gives up the d5-point instead of supporting it.'
          },
          accept: [['c7c6']]
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
        openings: ['b-flank-kid'],
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
          hint: 'Which pawn can control the b4 square?',
          explanation: "8...a5 controls b4, so White must spend a move on a3 before pushing b4, and after b4 axb4 axb4 the a-file opens for Black's rook. Black then turns to the kingside with ...h6, ...Be6 or ...Nh5 and ...f5.",
          wrong: {
            h7h6: 'A useful move, but 9.b4 gains queenside space at once.',
            a7a6: 'Also prepares ...b5, but it does not control b4: 9.b4 comes immediately.'
          },
          accept: [['a7a5']]
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
          hint: 'One knight can reach a square that attacks c4 and also controls d3.',
          explanation: "8...Ne5 hits c4, controls d3 and can continue to g6 to question the h4-bishop. Black follows with ...d6, ...b6 and ...Ba6 or ...Be6 against c4. 8...Na5 also attacks c4, but a knight on the rim does little else, and 8...Nxd4 9.cxd4 repairs White's pawns.",
          wrong: {
            c6a5: 'Attacks c4 too, but from the rim; from e5 the knight is far more active.',
            c6d4: "After 9.cxd4 White's doubled pawns are undoubled and the centre is strong."
          },
          accept: [['c6e5']]
        }
      ]
    }
  ],
  glossary: []
}]);
