/* The Quiet Gambit - White repertoire (non-gambit openings with 1.e4, 1.d4 and flank moves)
 * and the white-openings lessons. Data only: appends one part to window.QG_PARTS. */
window.QG_PARTS = (window.QG_PARTS || []).concat([{
  source: 'white-repertoire',
  repertoire: [
    {
      id: 'w-italian-giuoco',
      side: 'white',
      group: 'e4',
      family: 'Italian Game',
      name: 'Italian Game: Giuoco Piano (c3 and d3)',
      eco: 'C54',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'f8c5', 'c2c3'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.c3',
      difficulty: 'Beginner',
      style: 'Solid',
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
          moves: '3...Nf6 4.d3',
          name: 'Two Knights Defence',
          note: 'Defend e4 calmly with d3 and reach the same quiet structure. The sharp 4.Ng5 is a separate, riskier choice.'
        },
        {
          moves: '4...Nf6 5.d3',
          name: 'Main line',
          note: "The usual move order. Castle, then choose between a4, Re1 and Nbd2 depending on Black's set-up."
        },
        {
          moves: '3...d6',
          name: 'Semi-Italian',
          note: "Black is passive. Play c3 and d4, or Nc3, to claim the centre, and watch for Legal's mate if Black pins with ...Bg4 too early."
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
      transpositions: [
        {
          to: 'w-four-knights-scotch',
          note: 'After 3...Nf6 4.Nc3 the Italian can turn into a Four Knights with Bc4.'
        }
      ],
      lessons: ['openings-1', 'white-openings-1']
    },
    {
      id: 'w-ruy-lopez-closed',
      side: 'white',
      group: 'e4',
      family: 'Ruy Lopez',
      name: 'Ruy Lopez: Closed main line',
      eco: 'C84',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bb5',
      difficulty: 'Advanced',
      style: 'Positional',
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
          moves: '3...a6 4.Ba4 Nf6 5.O-O',
          name: 'Morphy Defence',
          note: 'The main line. After 5...Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 you reach the Closed Ruy Lopez.'
        },
        {
          moves: '3...Nf6 4.O-O',
          name: 'Berlin Defence',
          note: '4...Nxe4 5.d4 Nd6 6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8 is the Berlin endgame. Many club players prefer the quieter 4.d3.'
        },
        {
          moves: '5...Nxe4 6.d4',
          name: 'Open Ruy Lopez',
          note: 'Black grabs e4. After 6...b5 7.Bb3 d5 8.dxe5 Be6 9.c3 White has space on the kingside; know the Tarrasch trap.'
        },
        {
          moves: '3...Bc5 4.c3',
          name: 'Classical Defence',
          note: 'Prepares d4 with gain of time on the bishop; 4...Nf6 5.O-O O-O 6.d4 Bb6 is a typical continuation.'
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
      transpositions: [
        { to: 'w-ruy-lopez-exchange', note: 'After 3...a6 White may choose 4.Bxc6 instead of 4.Ba4.' }
      ],
      lessons: ['white-openings-9']
    },
    {
      id: 'w-ruy-lopez-exchange',
      side: 'white',
      group: 'e4',
      family: 'Ruy Lopez',
      name: 'Ruy Lopez: Exchange Variation',
      eco: 'C68',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'a7a6', 'b5c6'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6',
      difficulty: 'Intermediate',
      style: 'Positional',
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
          note: '6...exd4 7.Nxd4 c5 8.Nb3 Qxd1 9.Rxd1 leads to the typical queenless middlegame.'
        },
        {
          moves: '5...Bg4 6.h3 h5',
          name: 'Sharp ...h5',
          note: 'Do not take the bishop: 7.hxg4? hxg4 opens the h-file against your king. 7.d3 is the standard reply.'
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
          {
            uci: 'e1g1',
            san: 'O-O',
            note: 'Not 5.Nxe5? Qd4, regaining the pawn. After castling, Nxe5 becomes a real threat.'
          },
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
      transpositions: [
        { to: 'w-ruy-lopez-closed', note: 'Same first three moves; 4.Ba4 keeps the bishop instead.' }
      ],
      lessons: ['white-openings-9']
    },
    {
      id: 'w-scotch',
      side: 'white',
      group: 'e4',
      family: 'Scotch Game',
      name: 'Scotch Game',
      eco: 'C45',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'd2d4', 'e5d4', 'f3d4'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.Nxd4',
      difficulty: 'Intermediate',
      style: 'Attacking',
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
          note: '6...Qe7 7.Qe2 Nd5 8.c4 drives the knight away again; this is the main line.'
        },
        {
          moves: '4...Bc5 5.Nxc6',
          name: 'Classical Variation',
          note: '5...Qf6 6.Qd2 dxc6 7.Nc3 is the main line; 5.Be3 and 5.Nb3 are good alternatives.'
        },
        {
          moves: '4...Nxd4 5.Qxd4',
          note: "The trade brings White's queen to a strong central square. Follow with Nc3, Be3 or Bd3 and castle."
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
      lessons: ['white-openings-6']
    },
    {
      id: 'w-four-knights-scotch',
      side: 'white',
      group: 'e4',
      family: 'Four Knights Game',
      name: 'Four Knights: Scotch Variation',
      eco: 'C47',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'b1c3'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Nc3',
      difficulty: 'Beginner',
      style: 'Solid',
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
          note: '4...exd4 5.Nxd4 Bb4 6.Nxc6 bxc6 7.Bd3 d5 8.exd5 cxd5 9.O-O O-O 10.Bg5 is the main line.'
        },
        {
          moves: '3...Bc5 4.Nxe5',
          name: 'Fork trick',
          note: '4...Nxe5 5.d4 regains the piece and leaves White with a strong centre and the initiative.'
        },
        {
          moves: '3...g6 4.d4',
          name: 'Three Knights',
          note: '4...exd4 5.Nxd4 Bg7 6.Be3 gives White easy development and central space.'
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
      family: 'Vienna Game',
      name: 'Vienna Game: g3 system',
      eco: 'C26',
      defining: ['e2e4', 'e7e5', 'b1c3'],
      moves: '1.e4 e5 2.Nc3',
      difficulty: 'Beginner',
      style: 'Flexible',
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
          moves: '2...Nf6 3.g3',
          name: 'Main line',
          note: '3...d5 4.exd5 Nxd5 5.Bg2 Nxc3 6.bxc3 gives White the half-open b-file and a strong bishop; 3...Bc5 4.Bg2 is calmer.'
        },
        { moves: '2...Nc6 3.g3', note: '3...Bc5 4.Bg2 d6 5.Nge2, then d3 and f4: a sound, closed set-up.' },
        { moves: '2...Bc5 3.Nf3', note: '3...d6 4.d4 exd4 5.Nxd4 gives White a free game; 3.Bc4 is also good.' }
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
      }
    },
    {
      id: 'w-open-sicilian',
      side: 'white',
      group: 'e4',
      family: 'Sicilian Defence',
      name: 'Open Sicilian (2.Nf3 and 3.d4)',
      eco: 'B50',
      defining: ['e2e4', 'c7c5', 'g1f3'],
      moves: '1.e4 c5 2.Nf3',
      difficulty: 'Advanced',
      style: 'Sharp',
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
          moves: '2...d6 3.d4',
          name: 'Najdorf, Dragon, Classical',
          note: '3...cxd4 4.Nxd4 Nf6 5.Nc3. Against 5...a6 (Najdorf) play 6.Be3 and f3; against 5...g6 (Dragon) 6.Be3 Bg7 7.f3 is the Yugoslav Attack.'
        },
        {
          moves: '2...Nc6 3.d4',
          name: 'Sveshnikov and others',
          note: '3...cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Ndb5 d6 7.Bg5 is the Sveshnikov main line; aim your pieces at the d5 hole.'
        },
        {
          moves: '2...e6 3.d4',
          name: 'Taimanov and Kan',
          note: '3...cxd4 4.Nxd4 Nc6 or 4...a6, then Nc3, Be2 or Bd3 and O-O: flexible, positional play.'
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
      }
    },
    {
      id: 'w-alapin-sicilian',
      side: 'white',
      group: 'e4',
      family: 'Sicilian Defence',
      name: 'Sicilian: Alapin Variation (2.c3)',
      eco: 'B22',
      defining: ['e2e4', 'c7c5', 'c2c3'],
      moves: '1.e4 c5 2.c3',
      difficulty: 'Beginner',
      style: 'Positional',
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
          note: '4...Nf6 5.Nf3 and Be2 or Bd3. After ...cxd4 cxd4, Nc3 comes with gain of time on the queen.'
        },
        {
          moves: '2...Nf6 3.e5 Nd5 4.d4',
          note: '4...cxd4 5.Nf3 Nc6 6.cxd4 (5.cxd4 at once is also good): White has extra space, and Bc4 is a common follow-up.'
        },
        { moves: '2...e6 3.d4 d5', note: 'Play 4.exd5 exd5 5.Nf3 for open play, or 4.e5 to reach an Advance French.' }
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
          {
            uci: 'c1e3',
            san: 'Be3',
            note: 'Holds d4. After ...cxd4 cxd4 White has an isolated d-pawn and free piece play.'
          }
        ]
      },
      transpositions: [
        { to: 'w-advance-french', note: 'After 2...e6 3.d4 d5 4.e5 the game becomes an Advance French.' }
      ],
      lessons: ['white-openings-4']
    },
    {
      id: 'w-advance-french',
      side: 'white',
      group: 'e4',
      family: 'French Defence',
      name: 'French: Advance Variation',
      eco: 'C02',
      defining: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'e4e5'],
      moves: '1.e4 e6 2.d4 d5 3.e5',
      difficulty: 'Intermediate',
      style: 'Positional',
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
          note: 'Prepares b4 and keeps d4 solid. After 6...c4 7.Nbd2 the centre stays closed and both sides manoeuvre.'
        },
        {
          moves: '5...Bd7 6.Be2',
          note: 'Simple and solid: castle, keep d4 and choose a plan once Black commits. 6.a3 is also popular.'
        },
        {
          moves: '3...b6',
          note: 'Black wants ...Ba6 to trade the passive bishop. 4.c3 and Nf3 are natural; after a trade on a6 the black knight stands offside.'
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
          {
            uci: 'c5c4',
            san: 'c4',
            note: "Gains queenside space and takes d3 from White's bishop; a b4 push can now be met by ...cxb3 en passant."
          },
          {
            uci: 'b1d2',
            san: 'Nbd2',
            note: 'Covers b3 against ...Na5-b3 and prepares Rb1 with b3 or b4 to challenge c4; the centre stays closed.'
          }
        ]
      },
      transpositions: [
        { to: 'w-alapin-sicilian', note: '1.e4 c5 2.c3 e6 3.d4 d5 4.e5 reaches the same Advance French structure.' }
      ]
    },
    {
      id: 'w-tarrasch-french',
      side: 'white',
      group: 'e4',
      family: 'French Defence',
      name: 'French: Tarrasch Variation (3.Nd2)',
      eco: 'C03',
      defining: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1d2'],
      moves: '1.e4 e6 2.d4 d5 3.Nd2',
      difficulty: 'Intermediate',
      style: 'Solid',
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
          note: '5...c5 6.c3 Nc6 7.Ne2 cxd4 8.cxd4 f6 9.exf6 Nxf6 10.Nf3: Black has free play, White targets e6 and the e5 square.'
        },
        {
          moves: '3...c5 4.exd5 Qxd5 5.Ngf3',
          name: 'Open Tarrasch',
          note: '5...cxd4 6.Bc4 Qd6 7.O-O Nf6 8.Nb3 Nc6 9.Nbxd4: White regains the pawn with a lead in development.'
        },
        {
          moves: '3...Be7 4.Ngf3',
          note: '4...Nf6 5.e5 Nfd7 6.Bd3 c5 7.c3 Nc6 8.O-O: a familiar closed structure. Keep d4 and use the space on the kingside.'
        },
        {
          moves: '3...dxe4 4.Nxe4',
          name: 'Rubinstein',
          note: 'Black gives up the centre for safe development. Nf3, Bd3 or c3 and O-O give White a small, lasting space edge.'
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
          {
            uci: 'd7f6',
            san: 'Nxf6',
            note: 'Black has active pieces; White aims at the backward e6 pawn and the e5 square.'
          }
        ]
      }
    },
    {
      id: 'w-caro-classical',
      side: 'white',
      group: 'e4',
      family: 'Caro-Kann Defence',
      name: 'Caro-Kann: Main line with 3.Nc3',
      eco: 'B18',
      defining: ['e2e4', 'c7c6', 'd2d4', 'd7d5', 'b1c3'],
      moves: '1.e4 c6 2.d4 d5 3.Nc3',
      difficulty: 'Intermediate',
      style: 'Positional',
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
          note: '5...Bg6 6.h4 h6 7.Nf3 Nd7 8.h5 Bh7 9.Bd3 Bxd3 10.Qxd3 is the main line.'
        },
        {
          moves: '4...Nd7 5.Nf3',
          name: 'Karpov Variation',
          note: '5...Ngf6 6.Ng3 or 6.Nxf6+ gives a calm space edge. The sharper 5.Ng5 is a well-known alternative.'
        },
        {
          moves: '4...Nf6 5.Nxf6+',
          note: 'Black must accept damaged pawns: 5...exf6 gives easy development, 5...gxf6 an unbalanced game. Continue with c3, Bd3 or Bc4, Nf3 and O-O.'
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
      lessons: ['white-openings-3']
    },
    {
      id: 'w-scandinavian',
      side: 'white',
      group: 'e4',
      family: 'Scandinavian Defence',
      name: 'Scandinavian: main line with 3.Nc3',
      eco: 'B01',
      defining: ['e2e4', 'd7d5', 'e4d5'],
      moves: '1.e4 d5 2.exd5',
      difficulty: 'Beginner',
      style: 'Solid',
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
          note: '4...Nf6 5.Nf3 c6 6.Bc4 Bf5 7.Bd2 e6: the bishop on d2 sets up Nd5 tricks against the queen on a5.'
        },
        {
          moves: '3...Qd6 4.d4',
          note: '4...Nf6 5.Nf3 a6 (stopping Nb5) 6.g3 or 6.Be2: keep developing and look for Bf4 or Ne4 to gain more time on the queen.'
        },
        {
          moves: '3...Qd8 4.d4',
          note: 'The queen goes home. Develop with Nf3, Bc4 and O-O for a free position with more space.'
        },
        {
          moves: '2...Nf6 3.d4',
          name: 'Modern Variation',
          note: '3...Nxd5 4.Nf3 and c4 gives White a pawn centre. 3.Bb5+ and 3.c4 are other good tries.'
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
      }
    },
    {
      id: 'w-pirc-classical',
      side: 'white',
      group: 'e4',
      family: 'Pirc Defence',
      name: 'Pirc: Classical System (4.Nf3)',
      eco: 'B08',
      defining: ['e2e4', 'd7d6', 'd2d4', 'g8f6', 'b1c3', 'g7g6', 'g1f3'],
      moves: '1.e4 d6 2.d4 Nf6 3.Nc3 g6 4.Nf3',
      difficulty: 'Beginner',
      style: 'Solid',
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
          note: '5...O-O 6.O-O. Against 6...Bg4 play 7.Be3; against 6...c6, 7.a4 or 7.h3 is a sound choice.'
        },
        { moves: '4...Bg4 5.Be3', note: 'Keep d4 solid: Be3, Be2 and Qd2, with h3 when the moment is right.' },
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
      }
    },
    {
      id: 'w-queens-gambit',
      side: 'white',
      group: 'd4',
      family: "Queen's Gambit",
      name: "Queen's Gambit: the system and the Accepted",
      eco: 'D20',
      defining: ['d2d4', 'd7d5', 'c2c4'],
      moves: '1.d4 d5 2.c4',
      difficulty: 'Beginner',
      style: 'Positional',
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
          note: '3...Nf6 4.e3 e6 5.Bxc4 c5 6.O-O a6: White regains the pawn and keeps a free game. 3.e4 is a more ambitious alternative.'
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
          note: '3...Bg4 4.cxd5 Bxf3 5.gxf3 Qxd5 6.e3: White has the bishop pair and a good centre.'
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
      transpositions: [
        { to: 'w-qgd-exchange', note: "2...e6 3.Nc3 leads to the Queen's Gambit Declined." },
        { to: 'w-slav-main', note: '2...c6 3.Nf3 leads to the Slav.' },
        { to: 'w-reti', note: "1.Nf3 d5 2.c4 e6 3.d4 reaches the Queen's Gambit Declined by another move order." }
      ],
      lessons: ['gambits-1', 'white-openings-7']
    },
    {
      id: 'w-qgd-exchange',
      side: 'white',
      group: 'd4',
      family: "Queen's Gambit",
      name: "Queen's Gambit Declined: Exchange Variation",
      eco: 'D35',
      defining: ['d2d4', 'd7d5', 'c2c4', 'e7e6', 'b1c3'],
      moves: '1.d4 d5 2.c4 e6 3.Nc3',
      difficulty: 'Intermediate',
      style: 'Positional',
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
          note: '5...c6 6.e3 Be7 7.Bd3 Nbd7 8.Qc2 O-O 9.Nf3 Re8 10.O-O, then Rab1 and b4.'
        },
        {
          moves: '3...Be7 4.Nf3',
          name: 'Avoiding Bg5',
          note: 'This move order makes the Exchange with Bg5 less effective. Play 4.Nf3 Nf6 5.Bg5 or 5.Bf4, or 4.cxd5 exd5 5.Bf4.'
        },
        {
          moves: '3...c5 4.cxd5 exd5 5.Nf3',
          name: 'Tarrasch Defence',
          note: "5...Nc6 6.g3 Nf6 7.Bg2 Be7 8.O-O O-O: the g2 bishop presses on Black's isolated d-pawn."
        },
        {
          moves: '3...c6 4.e3',
          name: 'Semi-Slav move order',
          note: '4...Nf6 5.Nf3 reaches the Semi-Slav; 4.Nf3 is equally good.'
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
      transpositions: [
        { to: 'w-queens-gambit', note: "Arises from the Queen's Gambit after 2...e6." },
        {
          to: 'w-nimzo-rubinstein',
          note: '1.d4 Nf6 2.c4 e6 3.Nc3 d5 reaches this line from the Nimzo-Indian move order.'
        }
      ],
      lessons: ['white-openings-7']
    },
    {
      id: 'w-slav-main',
      side: 'white',
      group: 'd4',
      family: "Queen's Gambit",
      name: "Queen's Gambit vs the Slav",
      eco: 'D17',
      defining: ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3'],
      moves: '1.d4 d5 2.c4 c6 3.Nf3',
      difficulty: 'Intermediate',
      style: 'Positional',
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
          note: '5...Bf5 6.e3 e6 7.Bxc4 Bb4 8.O-O O-O 9.Qe2, with e4 next.'
        },
        {
          moves: '4...e6 5.e3',
          name: 'Semi-Slav',
          note: '5...Nbd7 6.Bd3 dxc4 7.Bxc4 b5 is the Meran; 6.Qc2 is a calmer choice. 5.Bg5 is far sharper.'
        },
        { moves: '3...dxc4 4.e3', note: '4...b5 5.a4 hits the b5 pawn; White regains c4 later with Bxc4 or b3.' }
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
      transpositions: [
        { to: 'w-queens-gambit', note: "Arises from the Queen's Gambit after 2...c6." }
      ]
    },
    {
      id: 'w-catalan',
      side: 'white',
      group: 'd4',
      family: 'Catalan Opening',
      name: 'Catalan Opening',
      eco: 'E06',
      defining: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g2g3'],
      moves: '1.d4 Nf6 2.c4 e6 3.g3',
      difficulty: 'Advanced',
      style: 'Positional',
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
          note: '5.Nf3, then castle and regain the pawn with Qc2 or Qa4+; the g2 bishop keeps the pressure.'
        },
        {
          moves: '4...Be7 5.Nf3',
          name: 'Closed or Open Catalan',
          note: '5...O-O 6.O-O, and now 6...dxc4 7.Qc2 or 6...c6 7.Qc2 Nbd7 with Nbd2 or Bf4 next.'
        },
        {
          moves: '3...Bb4+ 4.Bd2',
          name: 'Bishop check',
          note: '4...Be7 or 4...Qe7 5.Bg2: keep developing; the bishop on d2 is useful.'
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
      transpositions: [
        { to: 'w-reti', note: '1.Nf3 d5 2.c4 e6 3.g3 Nf6 4.Bg2 with a later d4 reaches Catalan positions.' }
      ]
    },
    {
      id: 'w-london',
      side: 'white',
      group: 'd4',
      family: 'London System',
      name: 'London System',
      eco: 'D02',
      defining: ['d2d4', 'd7d5', 'c1f4'],
      moves: '1.d4 d5 2.Bf4',
      difficulty: 'Beginner',
      style: 'Solid',
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
          note: '4...Qb6 5.Qb3 defends b2 and offers a trade; after ...Qxb3 axb3 White gets the half-open a-file. 5...c4 6.Qc2 gains queenside space for Black; White answers with Nd2 and e4.'
        },
        { moves: '2...Nf6 3.e3', note: '3...c5 4.c3 Nc6 5.Nd2 e6 6.Ngf3 Bd6 7.Bg3: the standard set-up.' },
        {
          moves: '2...Bf5 3.e3',
          note: 'Black copies the bishop move. 3...e6 4.Nd2 keeps the system; 3.c4 is the most testing reply.'
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
      transpositions: [
        {
          to: 'w-colle-zukertort',
          note: '1.d4 d5 2.Nf3 Nf6 3.Bf4 reaches the London by the Colle move order; 3.e3 with b3 and Bb2 gives the Zukertort instead.'
        }
      ],
      lessons: ['white-openings-8']
    },
    {
      id: 'w-colle-zukertort',
      side: 'white',
      group: 'd4',
      family: 'Colle System',
      name: 'Colle-Zukertort System',
      eco: 'D05',
      defining: ['d2d4', 'd7d5', 'g1f3', 'g8f6', 'e2e3'],
      moves: '1.d4 d5 2.Nf3 Nf6 3.e3',
      difficulty: 'Beginner',
      style: 'Solid',
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
          note: '4...c5 5.b3 Nc6 6.O-O Bd6 7.Bb2 O-O 8.Nbd2, then Ne5 and f4.'
        },
        {
          moves: '3...Bf5 4.Bd3',
          note: "Black develops the bishop before ...e6. 4.Bd3 offers to trade it; 4.c4 turns the game into a Queen's Gambit."
        },
        {
          moves: '3...g6 4.Bd3',
          note: "4...Bg7 5.O-O O-O 6.Nbd2, then c3 (the classical Colle set-up) and e4; or play c4 for a Queen's Gambit approach."
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
          {
            uci: 'b1d2',
            san: 'Nbd2',
            note: 'Supports e4 and can replace the f3 knight once it jumps to e5. Next: Ne5 and f4.'
          }
        ]
      },
      transpositions: [
        { to: 'w-london', note: 'Same first moves; 3.Bf4 instead of 3.e3 gives the London System.' }
      ]
    },
    {
      id: 'w-trompowsky',
      side: 'white',
      group: 'd4',
      family: 'Trompowsky Attack',
      name: 'Trompowsky Attack',
      eco: 'A45',
      defining: ['d2d4', 'g8f6', 'c1g5'],
      moves: '1.d4 Nf6 2.Bg5',
      difficulty: 'Intermediate',
      style: 'Flexible',
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
          note: '3...c5 4.f3 Qa5+ 5.c3 Nf6, then 6.d5 or 6.Nd2; 3...d5 4.e3 gives a London-style game.'
        },
        { moves: '2...e6 3.e4', note: '3...h6 4.Bxf6 Qxf6 5.Nc3: White has a broad centre, Black the bishop pair.' },
        {
          moves: '2...d5 3.Bxf6',
          note: '3...exf6 4.e3 gives Black doubled pawns but free bishops; 3.e3 keeps more tension.'
        },
        { moves: '2...c5 3.d5', note: 'Gains space; 3.Bxf6 gxf6 4.d5 is another well-known approach.' }
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
      }
    },
    {
      id: 'w-kid-classical',
      side: 'white',
      group: 'd4',
      family: "King's Indian Defence",
      name: "King's Indian: Classical Variation",
      eco: 'E97',
      defining: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'f8g7', 'e2e4'],
      moves: '1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4',
      difficulty: 'Advanced',
      style: 'Sharp',
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
          note: 'Black usually replies 9...Nh5 10.Re1. White plays c5 to open the c-file; Black aims for ...f5.'
        },
        {
          moves: '7...exd4 8.Nxd4',
          note: "8...Re8 9.f3: the e4 pawn is solid, and Black's d6 pawn can become a target."
        },
        {
          moves: '6...c5 7.O-O',
          note: '7...cxd4 8.Nxd4 gives a Maroczy-type grip on d5 (pawns on c4 and e4 controlling d5); 7.d5 instead leads to a Benoni structure.'
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
      transpositions: [
        {
          to: 'w-grunfeld-exchange',
          note: "After 3.Nc3 Black chooses between 3...Bg7 (King's Indian) and 3...d5 (Grunfeld)."
        }
      ],
      lessons: ['white-openings-10']
    },
    {
      id: 'w-grunfeld-exchange',
      side: 'white',
      group: 'd4',
      family: 'Grunfeld Defence',
      name: 'Grunfeld: Exchange Variation',
      eco: 'D85',
      defining: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'd7d5', 'c4d5'],
      moves: '1.d4 Nf6 2.c4 g6 3.Nc3 d5 4.cxd5',
      difficulty: 'Advanced',
      style: 'Sharp',
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
          moves: '7...c5 8.Ne2',
          name: 'Classical Exchange',
          note: '8...Nc6 9.Be3 O-O 10.O-O: the knight on e2 supports d4 and avoids a pin with ...Bg4.'
        },
        { moves: '7...O-O 8.Ne2', note: '8...c5 9.Be3 Nc6 10.O-O transposes to the main line.' },
        {
          moves: '3...Bg7 4.e4',
          name: "King's Indian",
          note: "Black chooses the King's Indian instead; see the Classical King's Indian."
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
      transpositions: [
        { to: 'w-kid-classical', note: "Same first three moves; 3...Bg7 4.e4 is the King's Indian." }
      ]
    },
    {
      id: 'w-nimzo-rubinstein',
      side: 'white',
      group: 'd4',
      family: 'Nimzo-Indian Defence',
      name: 'Nimzo-Indian: Rubinstein System (4.e3)',
      eco: 'E54',
      defining: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'b1c3', 'f8b4', 'e2e3'],
      moves: '1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 4.e3',
      difficulty: 'Intermediate',
      style: 'Solid',
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
          note: '5...d5 6.Nf3 c5 7.O-O Nc6 8.a3 Bxc3 9.bxc3 dxc4 10.Bxc4 Qc7: White aims for e4.'
        },
        {
          moves: '4...c5 5.Bd3',
          name: 'Hubner set-up',
          note: '5...Nc6 6.Nf3 Bxc3+ 7.bxc3 d6 8.e4: Black blockades with ...e5. 5.Ne2 is a good alternative.'
        },
        {
          moves: '4...b6 5.Bd3',
          note: '5...Bb7 6.Nf3 O-O 7.O-O: fight for e4. 5.Ne2 aims for a3 without doubled pawns.'
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
      transpositions: [
        { to: 'w-qgd-exchange', note: "3...d5 instead of 3...Bb4 transposes to the Queen's Gambit Declined." }
      ],
      lessons: ['white-openings-11']
    },
    {
      id: 'w-english-four-knights',
      side: 'white',
      group: 'flank',
      family: 'English Opening',
      name: 'English Opening: vs 1...e5 (Reversed Sicilian)',
      eco: 'A28',
      defining: ['c2c4', 'e7e5', 'b1c3'],
      moves: '1.c4 e5 2.Nc3',
      difficulty: 'Intermediate',
      style: 'Positional',
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
          note: '4...d5 5.cxd5 Nxd5 6.Bg2 Nb6 7.O-O Be7 8.d3 O-O 9.a3: a reversed Sicilian Dragon with an extra move.'
        },
        { moves: '4...Bb4 5.Bg2', note: '5...O-O 6.O-O e4 7.Ng5 Bxc3 8.bxc3 Re8 9.f3: White undermines the e4 pawn.' },
        {
          moves: '2...Nc6 3.g3',
          name: 'Closed English',
          note: '3...g6 4.Bg2 Bg7 5.d3 d6: play on the queenside with Rb1, a3 and b4.'
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
      }
    },
    {
      id: 'w-english-symmetrical',
      side: 'white',
      group: 'flank',
      family: 'English Opening',
      name: 'English Opening: Symmetrical Variation',
      eco: 'A38',
      defining: ['c2c4', 'c7c5', 'b1c3'],
      moves: '1.c4 c5 2.Nc3',
      difficulty: 'Intermediate',
      style: 'Flexible',
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
          note: '5.Nf3 Nf6 6.O-O O-O 7.d4 opens the centre; 5.e4, the Botvinnik set-up, is a solid alternative.'
        },
        { moves: '2...Nf6 3.Nf3', note: '3...d5 4.cxd5 Nxd5 5.g3 Nc6 6.Bg2, with pressure along the long diagonal.' },
        { moves: '2...g6 3.g3', note: '3...Bg7 4.Bg2 Nc6 transposes to the main line.' }
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
      }
    },
    {
      id: 'w-reti',
      side: 'white',
      group: 'flank',
      family: 'Reti Opening',
      name: 'Reti Opening',
      eco: 'A13',
      defining: ['g1f3', 'd7d5', 'c2c4'],
      moves: '1.Nf3 d5 2.c4',
      difficulty: 'Intermediate',
      style: 'Flexible',
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
          note: '3...Nf6 4.Bg2 Be7 5.O-O O-O 6.b3: the double fianchetto. 6.d4 transposes to a Catalan.'
        },
        {
          moves: '2...c6 3.b3',
          note: "3...Nf6 4.Bb2 and g3 against Black's solid Slav-like set-up; 3.e3 and 3.g3 are fine too."
        },
        { moves: '2...d4 3.e3', note: 'Undermines the advanced pawn at once; 3.g3 and 3.b4 are also played.' },
        { moves: '2...dxc4 3.e3', note: '3.e3 or 3.Qa4+ regains the pawn with easy development.' }
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
      transpositions: [
        { to: 'w-catalan', note: 'With d4 instead of b3, the Reti becomes a Catalan.' },
        { to: 'w-queens-gambit', note: "1.Nf3 d5 2.c4 e6 3.d4 reaches the Queen's Gambit Declined." },
        { to: 'w-kings-indian-attack', note: "1.Nf3 d5 2.g3 keeps c4 back and heads for the King's Indian Attack." }
      ]
    },
    {
      id: 'w-kings-indian-attack',
      side: 'white',
      group: 'flank',
      family: "King's Indian Attack",
      name: "King's Indian Attack",
      eco: 'A07',
      defining: ['g1f3', 'd7d5', 'g2g3'],
      moves: '1.Nf3 d5 2.g3',
      difficulty: 'Beginner',
      style: 'Flexible',
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
          note: "5...O-O 6.Nbd2 c5 7.e4 Nc6 8.Re1: the classical King's Indian Attack, with e5 next."
        },
        { moves: '2...c6 3.Bg2', note: '3...Bg4 4.O-O Nd7 5.d3 and e4; the bishop on g4 can be asked with h3.' },
        {
          moves: '2...g6 3.Bg2 Bg7 4.O-O',
          note: 'A symmetrical set-up; d3 and e4, or c4 and d4, both give White a flexible game.'
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
      transpositions: [
        { to: 'w-reti', note: 'Same first move; 2.c4 instead of 2.g3 is the Reti.' }
      ]
    },
    {
      id: 'w-bird',
      side: 'white',
      group: 'flank',
      family: "Bird's Opening",
      name: "Bird's Opening",
      eco: 'A03',
      defining: ['f2f4'],
      moves: '1.f4',
      difficulty: 'Intermediate',
      style: 'Attacking',
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
          note: '2...Nf6 3.e3 g6 4.b3 Bg7 5.Bb2 O-O 6.Be2: a solid reversed Dutch set-up.'
        },
        {
          moves: '1...e5 2.fxe5',
          name: "From's Gambit",
          note: "2...d6 3.exd6 Bxd6 4.Nf3 is essential, covering h4; 4...g5 is Black's main try. 2.e4 instead would enter a King's Gambit."
        },
        { moves: '1...Nf6 2.Nf3', note: '2...g6 3.g3 Bg7 4.Bg2: a Leningrad Dutch with colours reversed.' },
        {
          moves: '1...c5 2.Nf3',
          note: 'Black takes control of d4. Continue with e3, b3, Bb2 and Be2, or g3 and Bg2.'
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
      lessons: ['white-openings-2'],
      uncertain: 'Move orders in the Bird vary a lot; the sample line shows a common set-up rather than one fixed main line.'
    },
    {
      id: 'w-petroff-nc3',
      side: 'white',
      group: 'e4',
      family: 'Petroff Defence',
      name: 'Petroff: 3.Nxe5 and 5.Nc3',
      eco: 'C42',
      defining: ['e2e4', 'e7e5', 'g1f3', 'g8f6', 'f3e5'],
      moves: '1.e4 e5 2.Nf3 Nf6 3.Nxe5',
      difficulty: 'Beginner',
      style: 'Flexible',
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
          note: '4...Nxe4 5.Nc3 Nxc3 6.dxc3; the classical 5.d4 d5 6.Bd3 is a more theoretical alternative.'
        },
        {
          moves: '3...Nxe4 4.Qe2',
          name: 'Copycat mistake',
          note: '4...Qe7 5.Qxe4 d6 6.d4 dxe5 7.dxe5 leaves White a pawn up; 4...Nf6?? 5.Nc6+ wins the queen by discovered attack.'
        },
        {
          moves: '3...Nc6',
          name: 'Stafford Gambit',
          note: 'A Black gambit: 4.Nxc6 dxc6 5.d3, then Be2 and O-O, keeps the extra pawn safely. Do not hurry with e5.'
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
      uncertain: 'Move orders after 6.dxc3 vary (6...Be7 with ...O-O or ...Nc6 and ...Be6); the plan with Be3, Qd2 and O-O-O is the standard one.'
    },
    {
      id: 'w-alekhine-modern',
      side: 'white',
      group: 'e4',
      family: "Alekhine's Defence",
      name: "Alekhine's Defence: Modern Variation (4.Nf3)",
      eco: 'B05',
      defining: ['e2e4', 'g8f6', 'e4e5'],
      moves: '1.e4 Nf6 2.e5',
      difficulty: 'Intermediate',
      style: 'Positional',
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
          note: 'Against 4...Bg4 play 5.Be2 e6 6.O-O Be7 7.h3 Bh5 8.c4 Nb6 9.Nc3; against 4...dxe5, 5.Nxe5 keeps a central knight.'
        },
        {
          moves: '4...g6 5.Bc4',
          note: "5...Nb6 6.Bb3 Bg7, then Qe2 or a4: the b3 bishop stares at f7 and Black's centre remains under pressure."
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
      }
    },
    {
      id: 'w-dutch-fianchetto',
      side: 'white',
      group: 'd4',
      family: 'Dutch Defence',
      name: 'Dutch Defence: fianchetto system (2.g3)',
      eco: 'A87',
      defining: ['d2d4', 'f7f5', 'g2g3'],
      moves: '1.d4 f5 2.g3',
      difficulty: 'Beginner',
      style: 'Positional',
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
          note: '4.Nf3 Bg7 5.O-O O-O 6.c4 d6 7.Nc3; against 7...Qe8, 8.d5 gains space and blunts the g7 bishop.'
        },
        {
          moves: '3...e6 4.Nf3 d5',
          name: 'Stonewall',
          note: "5.O-O Bd6 6.c4 c6, then b3 with Ba3 or Bf4 to trade Black's good bishop; the e5 square is a target."
        },
        {
          moves: '4...Be7 5.O-O',
          name: 'Classical Dutch',
          note: '5...O-O 6.c4 d6 7.Nc3, then Qc2 or Re1 to prepare e4.'
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
      }
    },
    {
      id: 'w-benoni-classical',
      side: 'white',
      group: 'd4',
      family: 'Benoni Defence',
      name: 'Modern Benoni: Classical System',
      eco: 'A70',
      defining: ['d2d4', 'g8f6', 'c2c4', 'c7c5', 'd4d5'],
      moves: '1.d4 Nf6 2.c4 c5 3.d5',
      difficulty: 'Intermediate',
      style: 'Positional',
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
          note: '4...exd5 5.cxd5 d6 6.e4 g6 7.Nf3 Bg7 8.Be2 O-O 9.O-O Re8 10.Nd2: the Classical main line.'
        },
        {
          moves: '3...b5 4.Nf3',
          name: 'Benko Gambit',
          note: 'A Black gambit; 4.Nf3 is a sound way to decline it. Accepting with 4.cxb5 a6 5.bxa6 is also main theory.'
        },
        {
          moves: '3...e5 4.Nc3',
          name: 'Czech Benoni',
          note: '4...d6 5.e4: the centre is closed. Develop with Bd3 or Be2, Nge2 or Nf3 and h3, then prepare f4 or b4.'
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
          {
            uci: 'd7d6',
            san: 'd6',
            note: "The Benoni structure: White's central majority against Black's queenside one."
          },
          { uci: 'e2e4', san: 'e4' },
          { uci: 'g7g6', san: 'g6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'f8g7', san: 'Bg7' },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'e1g1', san: 'O-O', note: 'Simple development; Nd2-c4 to hit d6 is a common follow-up.' },
          { uci: 'f8e8', san: 'Re8', note: 'Pressure on e4.' }
        ]
      }
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
      related: {
        openings: ['w-italian-giuoco'],
        gambits: [],
        lessons: ['openings-1']
      },
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
      related: {
        openings: ['w-bird'],
        gambits: [],
        lessons: []
      },
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
      related: {
        openings: ['w-caro-classical'],
        gambits: [],
        lessons: ['openings-2']
      },
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
      related: {
        openings: ['w-alapin-sicilian'],
        gambits: [],
        lessons: []
      },
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
      related: {
        openings: ['w-four-knights-scotch'],
        gambits: [],
        lessons: ['tactics-1']
      },
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
      related: {
        openings: ['w-scotch'],
        gambits: [],
        lessons: []
      },
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
      related: {
        openings: ['w-qgd-exchange', 'w-queens-gambit'],
        gambits: [],
        lessons: ['gambits-1']
      },
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
      related: {
        openings: ['w-london'],
        gambits: [],
        lessons: []
      },
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
      related: {
        openings: ['w-ruy-lopez-closed'],
        gambits: [],
        lessons: ['tactics-2']
      },
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
      related: {
        openings: ['w-kid-classical'],
        gambits: [],
        lessons: []
      },
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
      related: {
        openings: ['w-nimzo-rubinstein'],
        gambits: [],
        lessons: []
      },
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
    }
  ]
}]);
