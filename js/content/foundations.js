/* The Quiet Gambit - foundation lessons (the original twelve) plus concept cards and core glossary.
 * Data only: appends one part to window.QG_PARTS. Checked by tools/check-content.js. */
window.QG_PARTS = (window.QG_PARTS || []).concat([{
  source: 'foundations',
  lessons: [

    /* ------------------------------------------------------------ OPENINGS */
    {
      id: 'openings-1',
      category: 'white-openings',
      side: 'white',
      level: 'Beginner',
      objective: "Use central pawns, quick development and early castling to start any game well.",
      title: 'Take the centre',
      minutes: 6,
      summary: "Why the four central squares matter, and how to bring your pieces out with a purpose.",
      objectives: [
        "Name the four central squares",
        "Develop knights and bishops before the queen",
        "Castle early and guard the f7 or f2 pawn"
      ],
      steps: [
        {
          type: 'read',
          title: 'The centre',
          text: "The four squares in the middle of the board, d4, e4, d5 and e5, are the centre. A piece placed near the centre reaches more squares, and a pawn standing on it takes space from your opponent. That is why so many games begin 1.e4 or 1.d4.",
          fen: 'start',
          arrows: [['e2', 'e4'], ['d2', 'd4']],
          highlights: ['d4', 'e4', 'd5', 'e5']
        },
        {
          type: 'line',
          title: 'Three habits, move by move',
          text: "Development means bringing knights and bishops off the back rank. Watch both sides follow three habits in the Italian Game: a pawn in the centre, minor pieces (knights and bishops) out, then castling. Neither queen moves early, because a chased queen wastes a tempo, a move's worth of time.",
          fen: 'start',
          moves: [
            { uci: 'e2e4', san: 'e4', note: "A pawn takes the centre and opens lines for the queen and bishop." },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'g1f3', san: 'Nf3', note: "Develops and attacks e5." },
            { uci: 'b8c6', san: 'Nc6', note: "Develops and defends e5." },
            { uci: 'f1c4', san: 'Bc4', note: "The bishop eyes f7, guarded only by the king." },
            { uci: 'f8c5', san: 'Bc5' },
            { uci: 'c2c3', san: 'c3', note: "Prepares d4 later; here White first plays the slower d3." },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e1g1', san: 'O-O', note: "Castling tucks the king away and brings a rook towards the centre." },
            { uci: 'e8g8', san: 'O-O' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Punish the weak point',
          prompt: "Black ignored the threat with 3...Nf6. White to move: finish the game.",
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4',
          solution: ['h5f7'],
          accept: [['h5f7']],
          hint: "Which black pawn is guarded only by the king?",
          explanation: "Qxf7 is checkmate. The bishop on c4 protects the queen, so the king cannot take it, the queen also covers e7, and Black's own queen and bishop block d8 and f8. An early queen raid like this only works when the defender forgets f7; 3...g6 or 3...Qe7 would have stopped it.",
          wrong: {
            'h5e5': "Qxe5+ wins a pawn with check, but the knight on c6 simply takes your queen.",
            'c4f7': "Bxf7+ grabs a pawn with check, but the king steps to e7 and you have missed mate."
          }
        }
      ]
    },

    {
      id: 'openings-2',
      category: 'black-vs-e4',
      side: 'black',
      level: 'Beginner',
      objective: "Meet 1.e4 with the Caro-Kann: support ...d5 with the c-pawn and develop the light-squared bishop.",
      title: 'A solid reply: the Caro-Kann',
      minutes: 7,
      summary: "A sturdy way for Black to meet 1.e4, supporting ...d5 with the c-pawn first.",
      objectives: [
        "Understand why ...c6 prepares ...d5",
        "Follow Black's main developing plan",
        "Spot the smothered mate on d6"
      ],
      steps: [
        {
          type: 'read',
          title: 'Support before you strike',
          text: "After 1.e4 c6, Black prepares ...d5 so that the pawn is supported when it challenges e4. Unlike many defences, the light-squared bishop stays free to develop to f5 or g4 before ...e6 closes it in. The result is a solid position with few weaknesses.",
          fen: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          arrows: [['c6', 'd5'], ['d7', 'd5']],
          highlights: ['d5', 'e4']
        },
        {
          type: 'line',
          title: 'The ...Nd7 main line',
          text: "Black gives up the central pawn for quick, safe development. Note the order: the queen's knight goes to d7 first, so that a knight can recapture on f6 without spoiling Black's pawns.",
          fen: 'start',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5', note: "Now the d5 pawn is supported by c6." },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd5e4', san: 'dxe4' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'b8d7', san: 'Nd7', note: "Prepares ...Ngf6, so a knight can recapture on f6." },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Ngf6' },
            { uci: 'e4f6', san: 'Nxf6+' },
            { uci: 'd7f6', san: 'Nxf6', note: "Healthy pawns and easy development for Black." }
          ]
        },
        {
          type: 'puzzle',
          title: 'A trap to remember',
          prompt: "Black played ...Ngf6 one move too soon. White to move: mate in one.",
          fen: 'r1bqkb1r/pp1npppp/2p2n2/8/3PN3/8/PPP1QPPP/R1B1KBNR w KQkq - 3 6',
          solution: ['e4d6'],
          accept: [['e4d6']],
          hint: "Once your knight leaves e4, the queen on e2 pins the e7 pawn to the black king.",
          explanation: "Nd6 is checkmate. The e7 pawn is pinned, meaning it cannot move without exposing its king to the queen, so exd6 is illegal. The king is boxed in by its own pieces. A mate like this is called a smothered mate. With the white queen on e2, Black should play ...Ndf6 or ...e6 before ...Ngf6.",
          wrong: {
            'e4f6': "Nxf6+ is a normal trade, and Black recaptures with the knight. You had mate instead."
          }
        }
      ]
    },

    /* ------------------------------------------------------------- GAMBITS */
    {
      id: 'gambits-1',
      category: 'white-gambits',
      side: 'white',
      level: 'Beginner',
      objective: "Understand why the Queen's Gambit is not a real sacrifice, and punish Black for clinging to the pawn.",
      title: "The Queen's Gambit",
      minutes: 9,
      summary: "White offers the c-pawn, but Black usually cannot keep it, which is why it is barely a gambit at all.",
      objectives: [
        "Explain why 2.c4 is not a true sacrifice",
        "Win the pawn back with e3 and Bxc4",
        "Spot two famous traps for greedy play"
      ],
      steps: [
        {
          type: 'read',
          title: 'An offer, not a gift',
          text: "A gambit is an opening where one side offers material, usually a pawn, for time or space. After 1.d4 d5 2.c4, White offers the c-pawn to lure Black's d-pawn away from the centre. If Black takes, White can nearly always win the pawn back, so the Queen's Gambit is more a challenge to Black's centre than a real sacrifice.",
          fen: 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2',
          arrows: [['d5', 'c4']],
          highlights: ['c4', 'd4']
        },
        {
          type: 'line',
          title: 'Taking, then giving back',
          text: "Black accepts on c4 and then develops calmly. White's bishop recaptures the pawn and is already active. Material is level, and White keeps a little extra space in the centre.",
          fen: 'start',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c2c4', san: 'c4', note: "The gambit." },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'e2e3', san: 'e3', note: "Opens the bishop's path: Bxc4 is coming." },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1c4', san: 'Bxc4', note: "Pawn regained, bishop developed." },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c7c5', san: 'c5', note: "Black hits back at the centre." },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'a7a6', san: 'a6' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Holding on is costly',
          prompt: "After 3.e3 b5 4.a4 c6 5.axb5 cxb5, Black is clinging on to the extra pawn. White to move: win material.",
          fen: 'rnbqkbnr/p3pppp/8/1p6/2pP4/4P3/1P3PPP/RNBQKBNR w KQkq - 0 6',
          solution: ['d1f3'],
          accept: [['d1f3']],
          hint: "Look along the long light-squared diagonal towards a8.",
          explanation: "Qf3 attacks the rook on a8 down the empty diagonal, and the rook has nowhere to go. Black can only block, and each block costs material: after ...Nc6, Qxc6+ wins the knight. Clinging to a gambit pawn often leaves holes behind.",
          wrong: {
            'f1c4': "Bxc4? bxc4. The b5 pawn guards c4, so you lose a bishop for a pawn.",
            'b2b3': "b3 attacks the pawn chain and is a decent move, but Qf3 wins much more."
          }
        },
        {
          type: 'read',
          title: 'Declining with ...e6',
          text: "Many players decline: 2...e6 keeps a pawn on d5 and opens a path for the dark-squared bishop. This is the Queen's Gambit Declined, one of the most trusted defences in chess. White usually develops with Nc3 and Bg5, but grabbing on d5 too eagerly can backfire.",
          fen: 'rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',
          arrows: [['e6', 'd5']],
          highlights: ['d5']
        },
        {
          type: 'puzzle',
          title: 'The Elephant Trap',
          prompt: "White has just grabbed a pawn with 6.Nxd5. Black to move: punish it.",
          fen: 'r1bqkb1r/pppn1ppp/5n2/3N2B1/3P4/8/PP2PPPP/R2QKBNR b KQkq - 0 6',
          solution: ['f6d5', 'g5d8', 'f8b4'],
          accept: [['f6d5', 'g5d8', 'f8b4']],
          hint: "Your f6 knight looks pinned to the queen. Is it really? Look at what happens to the white king if White takes on d8.",
          explanation: "6...Nxd5 offers the queen. After 7.Bxd8 Bb4+, White's only move is 8.Qd2, and 8...Bxd2+ 9.Kxd2 Kxd8 leaves Black a knight up for a pawn. The pawn on d5 was poisoned: taking it lost material. If White does not take the queen, Black is simply a knight up.",
          wrong: {
            'c7c6': "Natural, but White simply keeps the extra pawn, for example with Nxf6+.",
            'f8e7': "Calm development, but you stay a pawn down. Look for something forcing."
          }
        }
      ]
    },

    {
      id: 'gambits-2',
      category: 'white-gambits',
      side: 'white',
      level: 'Intermediate',
      objective: "Learn the idea behind the King's Gambit and the trap that punishes a careless capture.",
      title: "The King's Gambit",
      minutes: 8,
      summary: "White offers the f-pawn to open lines for a quick attack, at some risk to the king.",
      objectives: [
        "Understand what 2.f4 is trying to achieve",
        "See a calm, modern way for Black to reply",
        "Know the danger on the e1-h4 diagonal"
      ],
      steps: [
        {
          type: 'read',
          title: 'Opening the f-file',
          text: "With 2.f4, White offers a pawn to pull Black's e-pawn away from the centre. If Black takes, White hopes to play d4, castle, recapture on f4 and use the f-file against f7. It is bold and old-fashioned, and great fun, but it also loosens the squares around White's own king.",
          fen: 'rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2',
          arrows: [['f4', 'e5'], ['d8', 'h4']],
          highlights: ['f4', 'e1']
        },
        {
          type: 'line',
          title: 'A calm answer: ...d5',
          text: "Black accepts, then strikes back in the centre with ...d5 to free its pieces. Black keeps the extra pawn on f4 for now, while White plans Bxf4 and play along the half-open f-file (a file with no pawn of your own on it).",
          fen: 'start',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'f2f4', san: 'f4', note: "The gambit." },
            { uci: 'e5f4', san: 'exf4' },
            { uci: 'g1f3', san: 'Nf3', note: "Develops and stops ...Qh4+." },
            { uci: 'd7d5', san: 'd5', note: "Hitting back in the centre." },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'c3d5', san: 'Nxd5' },
            { uci: 'd8d5', san: 'Qxd5' },
            { uci: 'd2d4', san: 'd4', note: "White takes the centre and prepares Bxf4." }
          ]
        },
        {
          type: 'puzzle',
          title: 'When White is greedy',
          prompt: "Black declined with 2...Bc5, and White grabbed 3.fxe5. Black to move: win material.",
          fen: 'rnbqk1nr/pppp1ppp/8/2b1P3/4P3/8/PPPP2PP/RNBQKBNR b KQkq - 0 3',
          solution: ['d8h4', 'g2g3', 'h4e4'],
          accept: [['d8h4', 'g2g3', 'h4e4']],
          hint: "With the f-pawn gone, the e1-h4 diagonal is wide open.",
          explanation: "After 3...Qh4+, 4.Ke2 runs into Qxe4 mate, so White blocks with 4.g3. That opens the long diagonal to h1, and 4...Qxe4+ attacks the king and the rook together. The rook falls next move. This is the price of f4: a thinner shelter for the king.",
          wrong: {
            'c5g1': "Bxg1 Rxg1 only swaps your bishop for a knight.",
            'c5f2': "Bf2+? Kxf2. A check that simply gives away the bishop.",
            'd8e7': "Qe7 will win the e5 pawn back, but you can win a whole rook."
          }
        }
      ]
    },

    /* ------------------------------------------------------------- TACTICS */
    {
      id: 'tactics-1',
      category: 'tactics',
      side: 'both',
      level: 'Beginner',
      objective: "Spot knight forks: one piece attacking two targets at once.",
      title: 'The fork',
      minutes: 6,
      summary: "One piece attacking two targets at once: the most common way to win material.",
      objectives: [
        "Recognise a fork",
        "Look for checks that also attack a second piece",
        "Use a pawn fork to regain material"
      ],
      steps: [
        {
          type: 'read',
          title: 'Two targets, one move',
          text: "A fork is a move that attacks two or more enemy pieces at once, so your opponent can save only one. Knights are the classic forkers because their jumps are hard to see, but any piece, even a pawn, can fork. The strongest forks come with check: here the king must move and the rook on a8 is lost.",
          fen: 'r3k3/2N5/8/8/8/8/8/4K3 b - - 0 1',
          arrows: [['c7', 'e8'], ['c7', 'a8']],
          highlights: ['e8', 'a8']
        },
        {
          type: 'puzzle',
          title: 'A royal fork',
          prompt: "White to move: find the knight move that wins the black queen.",
          fen: '6k1/pp3ppp/2q5/3N4/8/1Q6/PP3PPP/6K1 w - - 0 1',
          solution: ['d5e7'],
          accept: [['d5e7']],
          hint: "Find a knight check that also attacks c6.",
          explanation: "Ne7+ checks the king and attacks the queen on c6. Black must answer the check first, and then Nxc6 wins the queen for a knight. Always look at checks first: they limit your opponent's choices.",
          wrong: {
            'd5f6': "Nf6+ is check, but gxf6 simply takes the knight.",
            'b3b7': "Qxb7?? The black queen on c6 recaptures, and you have lost your queen."
          }
        },
        {
          type: 'puzzle',
          title: 'The pawn fork',
          prompt: "After 3...Nxe4 4.Nxe4, Black is a piece down. Black to move: win it back.",
          fen: 'rnbqkb1r/pppp1ppp/8/4p3/2B1N3/8/PPPP1PPP/R1BQK1NR b KQkq - 0 4',
          solution: ['d7d5'],
          accept: [['d7d5']],
          hint: "A pawn moving two squares can attack two pieces.",
          explanation: "4...d5 attacks the bishop on c4 and the knight on e4 at the same time. White can save only one, and Black wins the piece back with a fine centre. Giving up a piece and regaining it with a pawn fork is known as the fork trick.",
          wrong: {
            'd8h4': "Qh4 attacks the knight, but White defends with d3 or Qe2 and stays a piece up.",
            'b7b5': "...b5 hits the bishop, but Bxb5 takes another pawn."
          }
        }
      ]
    },

    {
      id: 'tactics-2',
      category: 'tactics',
      side: 'both',
      level: 'Beginner',
      objective: "Use pins and skewers to win material along lines.",
      title: 'Pins and skewers',
      minutes: 7,
      summary: "Long-range pieces attacking through one target to another.",
      objectives: [
        "Tell a pin from a skewer",
        "Attack a pinned piece with a pawn",
        "Use a check to skewer the piece behind the king"
      ],
      steps: [
        {
          type: 'read',
          title: 'The pin',
          text: "A pin is an attack on a piece that cannot move without exposing something more valuable behind it. Here the bishop on b5 pins the knight on c6 to the black king, so the knight is not allowed to move at all. A pinned piece is a poor defender and an easy target.",
          fen: 'r1bqkbnr/ppp2ppp/2np4/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4',
          arrows: [['b5', 'e8']],
          highlights: ['c6', 'e8']
        },
        {
          type: 'puzzle',
          title: 'Pile on the pinned piece',
          prompt: "The knight on e5 is pinned to its king. White to move: win it.",
          fen: '2b1k2r/ppp2ppp/3p4/4n3/8/8/PPP2PPP/2B1R1K1 w - - 0 1',
          solution: ['f2f4'],
          accept: [['f2f4']],
          hint: "Attack the knight with something worth less than a knight.",
          explanation: "f4 attacks the knight with a pawn. The knight cannot move, because that would expose the king to the rook on e1. Defending it does not help, and moving the king out of the pin is too slow: after fxe5 dxe5 White has won a knight for a pawn.",
          wrong: {
            'c1f4': "Bf4 attacks the knight, but it is defended by the d6 pawn, so you only trade bishop for knight.",
            'e1e5': "Rxe5+? dxe5. You have given a rook for a knight."
          }
        },
        {
          type: 'read',
          title: 'The skewer',
          text: "A skewer is a pin in reverse. The more valuable piece stands in front, and when it steps aside, the piece behind it is captured. Here the bishop checks the king on d5; once the king moves, Bxa8 wins the rook. Skewers are strongest when they come with check.",
          fen: 'r7/8/8/3k4/8/5B2/8/6K1 b - - 0 1',
          arrows: [['f3', 'a8']],
          highlights: ['d5', 'a8']
        },
        {
          type: 'puzzle',
          title: 'Check, then collect',
          prompt: "White to move: win the black rook with a skewer.",
          fen: '8/5p2/4p3/2k4r/8/6P1/5PKP/R7 w - - 0 1',
          solution: ['a1a5'],
          accept: [['a1a5']],
          hint: "Line up a check along the fifth rank.",
          explanation: "Ra5+ checks the king along the fifth rank. The king must step off the rank, and then Rxh5 wins the rook. A check on the c-file is possible too, but nothing stands behind the king there.",
          wrong: {
            'a1c1': "Rc1+ is check, but nothing stands behind the king on the c-file.",
            'g3g4': "g4 chases the rook, but it simply moves away."
          }
        }
      ]
    },

    {
      id: 'tactics-3',
      category: 'tactics',
      side: 'both',
      level: 'Beginner',
      objective: "Recognise and deliver back-rank mate, and give your own king luft.",
      title: 'Back-rank mate',
      minutes: 7,
      summary: "Why a king hemmed in by its own pawns can be mated by a single rook or queen.",
      objectives: [
        "Spot a weak back rank",
        "Remove the only defender of the back rank",
        "Use luft to protect your own king"
      ],
      steps: [
        {
          type: 'read',
          title: 'Trapped behind the pawns',
          text: "The back rank is the row where your king starts. After castling, the pawns in front of the king are a shield, but also a wall. If no piece guards the back rank, a rook or queen landing there gives mate, as here. The cure is luft, German for air: a small pawn move such as h3 (or ...h6 for Black here) that gives the king an escape square.",
          fen: '3R2k1/5ppp/8/8/8/8/5PPP/6K1 b - - 1 1',
          arrows: [['d8', 'g8']],
          highlights: ['g8', 'f7', 'g7', 'h7']
        },
        {
          type: 'puzzle',
          title: 'The rook finishes',
          prompt: "White to move: deliver mate on the back rank.",
          fen: '6k1/p4ppp/8/8/8/8/P1r2PPP/3R2K1 w - - 0 1',
          solution: ['d1d8'],
          accept: [['d1d8']],
          hint: "Which square on the eighth rank is unguarded?",
          explanation: "Rd8 is mate. The king's own pawns block f7, g7 and h7, and Black has no piece to block or capture. Watch your own back rank too: here White's king has no luft either.",
          wrong: {
            'd1c1': "Rc1?? Rxc1 is a back-rank mate against you: your own king has no escape square.",
            'd1d7': "Rd7?? allows Rc1+ Rd1 Rxd1, back-rank mate against you. Your own king has no luft either."
          }
        },
        {
          type: 'puzzle',
          title: 'Remove the guard',
          prompt: "Black's rook on d8 guards the back rank, and only the queen protects it. White to move: mate in two.",
          fen: '3r2k1/p1q2ppp/8/8/8/3Q4/P4PPP/3R2K1 w - - 0 1',
          solution: ['d3d8', 'c7d8', 'd1d8'],
          accept: [['d3d8', 'c7d8', 'd1d8']],
          hint: "Sometimes the queen is worth giving up.",
          explanation: "Qxd8+ takes the rook with check, and Black must recapture with the queen. That pulls the last defender away, and Rxd8 is mate. Your rook was waiting behind the queen on the same file; two pieces lined up like this form a battery.",
          wrong: {
            'd3h7': "Qxh7+?? Kxh7. The king simply takes your queen."
          }
        }
      ]
    },

    /* --------------------------------------------------------- MIDDLEGAMES */
    {
      id: 'middlegames-1',
      category: 'strategy',
      side: 'both',
      level: 'Intermediate',
      objective: "Plant a knight on an outpost and recognise a bad bishop.",
      title: 'Outposts and bad bishops',
      minutes: 7,
      summary: "Why a knight on a protected central square can be stronger than a bishop.",
      objectives: [
        "Tell a good bishop from a bad one",
        "Find an outpost for a knight"
      ],
      steps: [
        {
          type: 'read',
          title: 'Good bishop, bad bishop',
          text: "A bishop is called bad when its own pawns stand on squares of its colour and block its path. Black's bishop on e7 is hemmed in by the pawns on d6 and e5, both on dark squares. It can defend, but little more. A good bishop has its pawns on the other colour.",
          fen: '5rk1/pp2bppp/3p4/4p3/4P3/2N5/PPP2PPP/3R2K1 w - - 0 1',
          arrows: [],
          highlights: ['e7', 'd6', 'e5']
        },
        {
          type: 'read',
          title: 'Holes and outposts',
          text: "Now look at d5. No black pawn can ever attack it: Black has no c-pawn, and the e-pawn has already gone past. A safe square like this, protected by your own pawn, is an outpost. Knights love outposts, because they need to stand close to the action to be useful.",
          fen: '5rk1/pp2bppp/3p4/4p3/4P3/2N5/PPP2PPP/3R2K1 w - - 0 1',
          arrows: [['e4', 'd5']],
          highlights: ['d5']
        },
        {
          type: 'puzzle',
          title: 'Plant the knight',
          prompt: "White to move: put the knight on its best square.",
          fen: '5rk1/pp2bppp/3p4/4p3/4P3/2N5/PPP2PPP/3R2K1 w - - 0 1',
          solution: ['c3d5'],
          accept: [['c3d5']],
          hint: "The square is protected by the e4 pawn and can never be attacked by a pawn.",
          explanation: "Nd5 settles the knight on its outpost, where it attacks the bishop on e7 and eyes c7 and f6. No pawn can drive it away, and Black's dark-squared bishop can never challenge it on a light square. White has the better minor piece for the rest of the game.",
          wrong: {
            'c3b5': "Nb5 eyes a7 and d6, but ...a6 drives the knight straight back.",
            'd1d6': "Rxd6? Bxd6. The pawn is defended by the bishop."
          }
        }
      ]
    },

    {
      id: 'middlegames-2',
      category: 'attack',
      side: 'both',
      level: 'Intermediate',
      objective: "Use open files and the h7 target to attack the castled king.",
      title: 'Open lines to the king',
      minutes: 8,
      summary: "Rooks need open files, and attacks need open lines towards the castled king.",
      objectives: [
        "Put rooks on open files",
        "Invade the seventh rank",
        "Recognise the h7 mating pattern"
      ],
      steps: [
        {
          type: 'read',
          title: 'Rooks and open files',
          text: "An open file is a column with no pawns on it. Rooks are long-range pieces, so they belong on open files, where they can travel into the opponent's half. The prize is often the seventh rank, where enemy pawns stand undefended. Here White's rook already stands on the open d-file, while Black's rook still sleeps on a8. Note h3: White's king has luft, so no back-rank tricks.",
          fen: 'r5k1/pp3ppp/8/8/8/7P/PP3PP1/3R2K1 w - - 0 1',
          arrows: [['d1', 'd8']],
          highlights: ['d1']
        },
        {
          type: 'puzzle',
          title: 'Onto the seventh',
          prompt: "White to move: use the open d-file to invade the seventh rank.",
          fen: 'r5k1/pp3ppp/8/8/8/7P/PP3PP1/3R2K1 w - - 0 1',
          solution: ['d1d7'],
          accept: [['d1d7']],
          hint: "Only one square on the seventh rank is reachable.",
          explanation: "Rd7 lands on the seventh rank and attacks the b7 pawn. Black's king guards f7, but b7 needs help, so Black must spend time defending while White's rook stays active. A rook on the seventh is often worth about a pawn.",
          wrong: {
            'd1d8': "Rd8+ is check, but Rxd8 simply trades the rooks and your advantage disappears.",
            'g1f1': "A sensible king move, but it gives Black time to contest the d-file with ...Rd8."
          }
        },
        {
          type: 'read',
          title: 'The h7 target',
          text: "When the king has castled short, h7 is often guarded only by the king. Black's best defender of that square, a knight on f6, is often missing or chased away. If a queen and a bishop aim at h7 together, the king may not survive. In this illustrative position the black knight has wandered to d7.",
          fen: 'r1bq1rk1/pp1n1ppp/2p1p3/3p3Q/3P4/2NB4/PPP2PPP/R4RK1 w - - 0 1',
          arrows: [],
          highlights: ['h7', 'f6']
        },
        {
          type: 'puzzle',
          title: 'Queen and bishop',
          prompt: "White to move: mate in one.",
          fen: 'r1bq1rk1/pp1n1ppp/2p1p3/3p3Q/3P4/2NB4/PPP2PPP/R4RK1 w - - 0 1',
          solution: ['h5h7'],
          accept: [['h5h7']],
          hint: "The bishop on d3 already sees h7.",
          explanation: "Qxh7 is checkmate. The bishop on d3 protects the queen, so the king cannot capture it, and the rook on f8 blocks the only flight square. With no knight on f6, h7 was defended by the king alone.",
          wrong: {
            'h5f7': "Qxf7+? Rxf7. The rook on f8 guards that pawn.",
            'd3h7': "Bxh7+ is a strong idea too, but Qxh7 mates at once."
          }
        }
      ]
    },

    /* ------------------------------------------------------------ ENDGAMES */
    {
      id: 'endgames-1',
      category: 'endgames',
      side: 'both',
      level: 'Beginner',
      objective: "Use the opposition and the square of the pawn in king and pawn endings.",
      title: 'King and pawn basics',
      minutes: 10,
      summary: "Opposition and the square of the pawn: two key ideas in pawn endings.",
      objectives: [
        "Take the opposition with your king",
        "Use the square of the pawn to see whether a king can catch it",
        "Lead with the king, not the pawn"
      ],
      steps: [
        {
          type: 'read',
          title: 'The opposition',
          text: "When two kings stand on the same file with one square between them, they are in opposition, and neither can step forward. The side that does not have to move holds the opposition; the other king must give way. With pawns on the board this often creates zugzwang: a position where any move makes things worse. Here White is to move, so Black holds it.",
          fen: '8/8/4k3/8/4K3/8/8/8 w - - 0 1',
          arrows: [],
          highlights: ['e4', 'e5', 'e6']
        },
        {
          type: 'puzzle',
          title: 'Take the opposition',
          prompt: "White to move and win. Where should the king go?",
          fen: '8/4k3/8/3K4/4P3/8/8/8 w - - 0 1',
          solution: ['d5e5'],
          accept: [['d5e5']],
          hint: "Face the black king with one square between you.",
          explanation: "Ke5 takes the opposition. Black must give way: after ...Kd7, Kf6, and after ...Kf7, Kd6. Either way White's king reaches the sixth rank ahead of its pawn, and the pawn walks home. Pushing e5 first, or stepping to the side, lets Black hold the draw.",
          wrong: {
            'e4e5': "Too early: after ...Kd7 Black takes the opposition and draws.",
            'd5c6': "Kc6? Ke6. The black king stands in front of your pawn, and it is a draw."
          }
        },
        {
          type: 'line',
          title: 'How the win unfolds',
          text: "The king leads and the pawn follows. Each time Black's king steps aside, White's king takes another square forward, until the pawn can queen.",
          fen: '8/4k3/8/3K4/4P3/8/8/8 w - - 0 1',
          moves: [
            { uci: 'd5e5', san: 'Ke5', note: "Opposition." },
            { uci: 'e7d7', san: 'Kd7' },
            { uci: 'e5f6', san: 'Kf6', note: "Outflanking: the king walks round." },
            { uci: 'd7e8', san: 'Ke8' },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'e8f8', san: 'Kf8' },
            { uci: 'e5e6', san: 'e6' },
            { uci: 'f8e8', san: 'Ke8' },
            { uci: 'e6e7', san: 'e7' },
            { uci: 'e8d7', san: 'Kd7', note: "Black's only move." },
            { uci: 'f6f7', san: 'Kf7', note: "The pawn queens next move." }
          ]
        },
        {
          type: 'read',
          title: 'The square of the pawn',
          text: "To see whether a king can catch a passed pawn, draw a square from the pawn to its promotion square. If the defending king is inside the square, or can step into it on its move, it catches the pawn. If not, the pawn queens. Here the black king on e6 is already inside the square of the a4 pawn.",
          fen: '8/8/4k3/8/P7/8/8/7K w - - 0 1',
          arrows: [],
          highlights: ['a4', 'e4', 'e8', 'a8']
        },
        {
          type: 'puzzle',
          title: 'Step into the square',
          prompt: "Black to move: catch the pawn. Which king move enters the square?",
          fen: '7K/8/8/8/1P6/6k1/8/8 b - - 0 1',
          solution: ['g3f4'],
          accept: [['g3f4']],
          hint: "The square runs from b4 to f4, and up to f8.",
          explanation: "Kf4 steps into the square of the pawn, so the king arrives in time: b5 Ke5, b6 Kd6, b7 Kc7, and the pawn falls. Kg4 and Kf3 look similar but stay outside the square, and the pawn queens.",
          wrong: {
            'g3g4': "Kg4 heads up the board but stays outside the square: b5, b6, b7 and b8=Q wins the race.",
            'g3f3': "Kf3 is one rank too low. The pawn is always a step ahead."
          }
        }
      ]
    },

    {
      id: 'endgames-2',
      category: 'endgames',
      side: 'both',
      level: 'Intermediate',
      objective: "Put rooks behind passed pawns and win the Lucena position.",
      title: 'Rooks behind passed pawns',
      minutes: 9,
      summary: "Where rooks belong in endings, and the bridge that wins the most famous rook ending.",
      objectives: [
        "Place rooks behind passed pawns",
        "Recognise the Lucena position",
        "Build a bridge to shelter your king from checks"
      ],
      steps: [
        {
          type: 'read',
          title: 'Behind, not in front',
          text: "A passed pawn has no enemy pawn ahead of it on its own file or on either neighbouring file. Rooks belong behind passed pawns. From behind, the rook supports the pawn and gains scope with every step it takes; in front, it only gets in the way. Here White's rook backs up the a-pawn, while Black's rook is tied to blocking it.",
          fen: '8/r5k1/P7/8/8/8/6K1/R7 w - - 0 1',
          arrows: [['a1', 'a6']],
          highlights: ['a6']
        },
        {
          type: 'puzzle',
          title: 'Defend from behind',
          prompt: "Black's rook is attacking a4. White to move: defend the pawn the right way.",
          fen: 'r7/5pkp/6p1/8/P7/6P1/5PKP/4R3 w - - 0 1',
          solution: ['e1a1'],
          accept: [['e1a1']],
          hint: "Put your rook behind your passed pawn.",
          explanation: "Ra1 defends the pawn from behind. As the pawn advances, the rook keeps protecting it, while Black's rook in front is forced into a passive role. Re4 also defends, but from the side; every time the pawn moves, that rook must move too.",
          wrong: {
            'a4a5': "a5?? Rxa5. The pawn was unprotected.",
            'e1e4': "Re4 holds the pawn for now, but from the side. Behind the pawn the rook keeps defending as it advances.",
            'e1e7': "Active-looking, but Black simply takes on a4."
          }
        },
        {
          type: 'read',
          title: 'The Lucena bridge',
          text: "In the Lucena position, White's king stands on the queening square in front of its pawn, the black king is cut off by White's rook, and Black's rook waits to check from the side and behind. The winning plan: check the black king one more file away with Rd1+, then lift the rook to the fourth rank. When the checks come, the rook steps in to block them, like a bridge.",
          fen: '1K6/1P1k4/8/8/8/8/r7/2R5 w - - 0 1',
          arrows: [['c1', 'd1'], ['d1', 'd4']],
          highlights: ['b8', 'b7']
        },
        {
          type: 'line',
          title: 'Building the bridge',
          text: "Follow White's plan. The king walks out, the checks run out of room, and the rook on the fourth rank blocks the last check. The pawn will promote.",
          fen: '1K6/1P1k4/8/8/8/8/r7/2R5 w - - 0 1',
          moves: [
            { uci: 'c1d1', san: 'Rd1+', note: "Drive the king a file further away." },
            { uci: 'd7e7', san: 'Ke7' },
            { uci: 'd1d4', san: 'Rd4', note: "The bridge is ready on the fourth rank." },
            { uci: 'a2a1', san: 'Ra1' },
            { uci: 'b8c7', san: 'Kc7' },
            { uci: 'a1c1', san: 'Rc1+' },
            { uci: 'c7b6', san: 'Kb6' },
            { uci: 'c1b1', san: 'Rb1+' },
            { uci: 'b6c6', san: 'Kc6' },
            { uci: 'b1c1', san: 'Rc1+' },
            { uci: 'c6b5', san: 'Kb5' },
            { uci: 'c1b1', san: 'Rb1+' },
            { uci: 'd4b4', san: 'Rb4', note: "The bridge blocks the last check." }
          ]
        }
      ]
    },

    {
      id: 'endgames-3',
      category: 'endgames',
      side: 'both',
      level: 'Beginner',
      objective: "Checkmate with king and queen against king without stalemating.",
      title: 'Mate with king and queen',
      minutes: 7,
      summary: "The first mate every player must know, and the stalemate trap to avoid.",
      objectives: [
        "Box the king in with your queen",
        "Bring your own king up to help",
        "Avoid stalemate"
      ],
      steps: [
        {
          type: 'read',
          title: 'Build the box',
          text: "A queen cannot mate on her own; she needs her king. First, shrink the enemy king's space. A queen a knight's jump away from the king builds a box it cannot leave. Here the king is fenced in by the d-file and the third rank. Keep shrinking the box, then march your own king closer.",
          fen: '8/8/8/4k3/8/3Q4/8/3K4 b - - 0 1',
          arrows: [['d3', 'd8'], ['d3', 'h3']],
          highlights: ['e5']
        },
        {
          type: 'read',
          title: 'Beware stalemate',
          text: "Stalemate is when the side to move has no legal move but is not in check. It is a draw, even with a whole queen extra. Here Black's king on a8 is not in check, yet every square around it is covered. Before each quiet queen move, ask: does the king still have a move?",
          fen: 'k7/2Q5/1K6/8/8/8/8/8 b - - 0 1',
          arrows: [],
          highlights: ['a8', 'a7', 'b7', 'b8']
        },
        {
          type: 'puzzle',
          title: 'Finish the job',
          prompt: "White to move: deliver checkmate.",
          fen: 'k7/8/1K6/8/8/8/8/4Q3 w - - 0 1',
          solution: ['e1e8'],
          accept: [['e1e8']],
          hint: "Use one long move up a file to reach the eighth rank.",
          explanation: "Qe8 is mate. The queen controls the whole eighth rank, and the white king on b6 covers a7, b7 and c7. Checks on the a-file or the long diagonal fail, because the king slips out to b8.",
          wrong: {
            'e1a5': "Qa5+ is check, but the king escapes to b8.",
            'e1e4': "Qe4+ is check, but the king escapes to b8."
          }
        },
        {
          type: 'line',
          title: 'One step, then mate',
          text: "With the king on c6, White first steps to b6. Black's only move is ...Kb8, and the queen mates on the back rank. The queen stayed far away, so stalemate was never a danger.",
          fen: 'k7/8/2K5/8/8/8/8/4Q3 w - - 0 1',
          moves: [
            { uci: 'c6b6', san: 'Kb6', note: "Takes away a7 and b7." },
            { uci: 'a8b8', san: 'Kb8', note: "The only move." },
            { uci: 'e1e8', san: 'Qe8#' }
          ]
        }
      ]
    }
  ],

  middlegames: [
    {
      name: 'Piece activity',
      definition: "An active piece controls many squares and takes part in the game; a passive one only defends.",
      cues: [
        "Ask which of your pieces does the least, and improve it first.",
        "Knights want outposts, bishops want open diagonals, rooks want open files.",
        "Trade your bad pieces for your opponent's good ones."
      ],
      example: {
        fen: '5rk1/pp2bppp/3p4/3Np3/4P3/8/PPP2PPP/3R2K1 b - - 1 1',
        caption: "An illustrative position: the knight on its d5 outpost dominates, while Black's bishop on e7 is blocked by its own pawns.",
        arrows: [['d5', 'e7'], ['d5', 'c7']],
        highlights: ['d5', 'e7']
      }
    },
    {
      name: 'Pawn structure',
      definition: "The pattern of the pawns shapes both sides' plans, because pawns can never move backwards.",
      cues: [
        "An isolated pawn has no friendly pawns on the files beside it: it brings space and activity, but can become a target.",
        "Blockade a weak pawn by putting a piece on the square in front of it.",
        "Doubled pawns (two on one file) and backward pawns (left behind their neighbours and unable to advance safely) are long-term weaknesses; aim your pieces at them."
      ],
      example: {
        fen: 'r1bq1rk1/pp2bppp/2n1pn2/8/3P4/2NB1N2/PP3PPP/R1BQ1RK1 w - - 0 1',
        caption: "An illustrative isolated queen's pawn: White's d4 pawn gives active pieces, while Black eyes d5 as a blockading square.",
        arrows: [['d4', 'd5']],
        highlights: ['d4', 'd5']
      }
    },
    {
      name: 'Attacking plans',
      definition: "Attack where you are stronger, usually on the side where your pieces point and your pawns have gained space.",
      cues: [
        "Count attackers against defenders near the enemy king.",
        "Open lines towards the king with pawn breaks or sacrifices.",
        "Remove or chase away key defenders, such as a knight on f6."
      ],
      example: {
        fen: 'r1bq1rk1/pp1n1ppp/2p1p3/3p3Q/3P4/2NB4/PPP2PPP/R4RK1 w - - 0 1',
        caption: "An illustrative position: queen and bishop aim at h7, and the knight that should defend it has left f6. Qxh7 is mate.",
        arrows: [['h5', 'h7'], ['d3', 'h7']],
        highlights: ['h7', 'f6']
      }
    },
    {
      name: 'Defence',
      definition: "Good defence means spotting threats early, keeping the king's shelter intact and trading off the most dangerous attackers.",
      cues: [
        "Before every move, ask what your opponent is threatening.",
        "Make luft in good time, so a check on the back rank is not mate.",
        "Exchange the strongest attacking piece; every trade weakens an attack."
      ],
      example: {
        fen: '6k1/p4pp1/7p/8/8/8/P1r2PPP/3R2K1 w - - 0 1',
        caption: "An illustrative position: because Black played ...h6 earlier, Rd8+ is met calmly by ...Kh7. The back rank is safe.",
        arrows: [['d1', 'd8'], ['g8', 'h7']],
        highlights: ['h7']
      }
    }
  ],

  endgames: [
    {
      name: 'Opposition',
      principle: "Kings facing each other with one square between them block each other; the side not to move holds the opposition.",
      rule: "In king and pawn endings, take the opposition in front of your pawn when attacking, and keep it when defending.",
      example: {
        fen: '8/4k3/8/4K3/4P3/8/8/8 b - - 1 1',
        caption: "White has just played Ke5 and holds the opposition. Black's king must give way, and the white king advances.",
        arrows: [],
        highlights: ['e5', 'e7']
      }
    },
    {
      name: 'Square of the pawn',
      principle: "A king can catch a passed pawn only if it stands inside the square drawn from the pawn to its promotion square.",
      rule: "If the defender is to move, it is enough to step into the square; if the pawn's side is to move, the king must already be inside.",
      example: {
        fen: '8/8/4k3/8/P7/8/8/7K w - - 0 1',
        caption: "The square of the a4 pawn runs from a4 to e4 and up to e8. Black's king is inside, so it catches the pawn.",
        arrows: [],
        highlights: ['a4', 'e4', 'e8', 'a8']
      }
    },
    {
      name: 'Lucena position',
      principle: "With the pawn on the seventh, the king on the queening square and the defending king cut off by at least one file, the attacker wins by using the rook as a shield against checks (this does not work with a rook's pawn).",
      rule: "Cut the defending king off, then build a bridge: put your rook on the fourth rank so it can block the checks.",
      example: {
        fen: '1K6/1P1k4/8/8/8/8/r7/2R5 w - - 0 1',
        caption: "The Lucena position: Rd1+ drives the king away, then Rd4 prepares the bridge for the white king to walk out.",
        arrows: [['c1', 'd1'], ['d1', 'd4']],
        highlights: ['b7', 'b8']
      }
    },
    {
      name: 'Philidor position',
      principle: "Against rook and pawn, the defender's king belongs on the queening square, with the rook guarding its third rank.",
      rule: "Keep your rook on the sixth rank (your third) until the pawn advances, then drop it to the far end of the board and check from behind.",
      example: {
        fen: '4k3/R7/1r6/3KP3/8/8/8/8 b - - 0 1',
        caption: "An illustrative Philidor position: Black's rook on b6 keeps the white king out. If e6, the rook drops to b1 and checks from behind.",
        arrows: [['b6', 'b1']],
        highlights: ['b6', 'e8']
      }
    }
  ],

  glossary: [
    { term: 'Centre', definition: "The four middle squares, d4, e4, d5 and e5, and the area around them." },
    { term: 'Development', definition: "Bringing pieces off the back rank to active squares, especially in the opening." },
    { term: 'Tempo', definition: "A single move, thought of as a unit of time. Losing a tempo means wasting a move." },
    { term: 'Gambit', definition: "An opening that offers material, usually a pawn, for time, space or attack." },
    { term: 'Fork', definition: "A move in which one piece attacks two or more enemy pieces at once." },
    { term: 'Pin', definition: "An attack on a piece that cannot move without exposing a more valuable piece behind it." },
    { term: 'Skewer', definition: "An attack on a valuable piece that must move, exposing a piece behind it to capture." },
    { term: 'Battery', definition: "Two pieces of the same side lined up on one file, rank or diagonal, such as a queen and rook, so they attack together." },
    { term: 'Back-rank mate', definition: "A mate on the first or eighth rank against a king trapped behind its own pawns." },
    { term: 'Luft', definition: "German for air: a pawn move that gives the king an escape square." },
    { term: 'Outpost', definition: "A square, usually in the opponent's half, that no enemy pawn can attack and your own pawn protects." },
    { term: 'Bad bishop', definition: "A bishop hemmed in by its own pawns standing on squares of its colour." },
    { term: 'Open file', definition: "A file with no pawns on it, ideal for rooks." },
    { term: 'Isolated pawn', definition: "A pawn with no friendly pawns on the files beside it." },
    { term: 'Passed pawn', definition: "A pawn with no enemy pawn ahead of it on its own file or on either neighbouring file." },
    { term: 'Opposition', definition: "Kings facing each other with one square between; the side not to move holds it." },
    { term: 'Zugzwang', definition: "A position where having to move is a disadvantage, because every move makes things worse." },
    { term: 'Stalemate', definition: "The side to move has no legal move and is not in check. The game is a draw." },
    { term: 'Double attack', definition: "One move that creates two threats at once. A fork is the most common kind." },
    { term: 'Discovered attack', definition: "Moving one piece out of the way so that a piece behind it attacks. If the moving piece makes its own threat too, the opponent cannot answer both." },
    { term: 'Half-open file', definition: "A file with no pawn of your own on it, but an enemy pawn still there. Rooks use it to press on that pawn." },
    { term: 'Minor piece', definition: "A knight or a bishop. Rooks and queens are the major pieces." },
    { term: 'Smothered mate', definition: "Checkmate by a knight against a king that is boxed in by its own pieces." },
    { term: 'Initiative', definition: "The power to make threats your opponent must answer, so you choose the direction of the game." }
  ]
}]);
