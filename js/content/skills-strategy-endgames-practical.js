/* The Quiet Gambit - skills lessons: middlegame strategy and pawn structures (strategy-*),
 * endgames (endgames-4 onwards) and practical tournament skills (practical-*).
 * Data only: appends one part to window.QG_PARTS. Checked by tools/check-content.js. */
window.QG_PARTS = (window.QG_PARTS || []).concat([{
  source: 'skills-strategy-endgames-practical',
  lessons: [

    /* ============================================================ STRATEGY */
    {
      id: 'strategy-1',
      category: 'strategy',
      side: 'both',
      title: 'Doubled pawns',
      level: 'Beginner',
      minutes: 6,
      objective: "Recognise doubled pawns and attack them with more pieces than can defend them.",
      summary: "Two pawns on one file cannot protect each other, so pieces have to do the job.",
      prerequisites: ['middlegames-1'],
      related: { lessons: ['strategy-2', 'strategy-5'] },
      steps: [
        {
          type: 'line',
          title: 'A trade that doubles pawns',
          text: "Doubled pawns are two pawns of the same colour on one file. In the Exchange Ruy Lopez, White gives up a bishop for a knight to double Black's c-pawns. Black gets the bishop pair in return, but White's four kingside pawns against three can one day make a passed pawn, while Black's extra queenside pawn is hard to use.",
          fen: 'start',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1b5', san: 'Bb5' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5c6', san: 'Bxc6', note: "Bishop for knight, on purpose." },
            { uci: 'd7c6', san: 'dxc6', note: "Black recaptures away from the centre, but this opens the d-file and frees the c8 bishop." },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f7f6', san: 'f6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'f3d4', san: 'Nxd4', note: "Four white pawns face three on the kingside: a healthy majority." },
            { uci: 'c6c5', san: 'c5', note: "Black's doubled pawns are not weak yet, but in an ending they count for less." }
          ]
        },
        {
          type: 'read',
          title: 'Why they are a target',
          text: "In this illustrative ending, White has doubled pawns on c3 and c4. Neither pawn can protect the other, and the front pawn on c4 can only be defended by pieces. Black's plan is simple: aim more pieces at c4 than White can defend it with.",
          fen: '5k2/p4ppp/b7/2p1n3/2P5/2P5/4BPPP/4NK2 b - - 0 1',
          arrows: [],
          highlights: ['c3', 'c4']
        },
        {
          type: 'puzzle',
          title: 'Collect the pawn',
          prompt: "Black to move. White's front c-pawn is attacked twice. Win it.",
          fen: '5k2/p4ppp/b7/2p1n3/2P5/2P5/4BPPP/4NK2 b - - 0 1',
          solution: ['e5c4'],
          accept: [['e5c4'], ['a6c4']],
          hint: "Count attackers and defenders on c4.",
          explanation: "The c4 pawn is attacked by the knight and the bishop but defended only by the bishop on e2. Either capture wins it: Nxc4 Bxc4 Bxc4+, or Bxc4 Bxc4 Nxc4. Doubled pawns cannot guard each other, so they rely on pieces, and here there are not enough of them.",
          wrong: {
            'a6b7': "Bb7 takes a piece away from the target. Now c4 is attacked only once and is safe.",
            'e5d3': "Nd3? looks active, but the knight is undefended there and Bxd3 or Nxd3 wins it."
          }
        }
      ]
    },

    {
      id: 'strategy-2',
      category: 'strategy',
      side: 'both',
      title: 'Holes around the king',
      level: 'Beginner',
      minutes: 5,
      objective: "Spot squares that no pawn can defend any more and use them for your pieces.",
      summary: "A hole is a square your opponent's pawns can never guard again; pieces love to land there.",
      prerequisites: ['middlegames-1'],
      related: { lessons: ['strategy-1', 'middlegames-2'] },
      steps: [
        {
          type: 'read',
          title: 'What a hole is',
          text: "Pawns cannot move backwards, so every pawn move gives up control of some squares for good. A hole is a square that no enemy pawn can ever guard again. Here Black has played ...g6, and the dark-squared bishop that should guard f6 and h6 has been traded. Those two dark squares near the king are holes, and White's queen and bishop have moved straight in.",
          fen: 'rnb2rk1/pp1q1p1p/2p2BpQ/3p4/3P4/2N5/PPP2PPP/R4RK1 w - - 0 1',
          arrows: [],
          highlights: ['f6', 'h6']
        },
        {
          type: 'puzzle',
          title: 'Use the holes',
          prompt: "White to move: mate in one, using the dark squares Black can no longer guard.",
          fen: 'rnb2rk1/pp1q1p1p/2p2BpQ/3p4/3P4/2N5/PPP2PPP/R4RK1 w - - 0 1',
          solution: ['h6g7'],
          accept: [['h6g7']],
          hint: "Which square next to the king is attacked by both your queen and your bishop?",
          explanation: "Qg7 is checkmate. The bishop on f6 protects the queen, so the king cannot take it, and the king's own rook and pawns block every escape. With the pawn on g6 and no dark-squared bishop, no black pawn can ever cover f6 or h6 again. When you push a pawn in front of your king, ask which squares you are giving away.",
          wrong: {
            'h6h7': "Qxh7+? Kxh7. On h7 the queen is not protected by anything.",
            'h6f8': "Qxf8+? Kxf8. The rook is defended by the king, and you have given up the queen."
          }
        }
      ]
    },

    {
      id: 'strategy-3',
      category: 'strategy',
      side: 'both',
      title: 'Improve your worst piece',
      level: 'Beginner',
      minutes: 6,
      objective: "Find your least useful piece and give it a job, or trade it for a better enemy piece.",
      summary: "When there is no tactic, ask which of your pieces does least, and fix it.",
      prerequisites: ['middlegames-1'],
      related: { lessons: ['strategy-4', 'strategy-5'] },
      steps: [
        {
          type: 'read',
          title: 'Which piece does least?',
          text: "When nothing is happening tactically, a strong plan is to improve your worst piece. In the French Defence, Black's worst piece is usually the light-squared bishop on c8. Its own pawns on e6 and d5 stand on light squares and block it: a bad bishop. After ...b6, Black can bring it to a6 and offer to trade it for White's good bishop.",
          fen: 'rnb1kbnr/p1pq1ppp/1p2p3/3pP3/3P4/2P2N2/PP3PPP/RNBQKB1R b KQkq - 2 5',
          arrows: [],
          highlights: ['c8', 'e6', 'd5']
        },
        {
          type: 'puzzle',
          title: 'Swap the problem piece',
          prompt: "Black to move: which bishop move offers to trade your bad bishop for White's good one?",
          fen: 'rnb1kbnr/p1pq1ppp/1p2p3/3pP3/3P4/2P2N2/PP3PPP/RNBQKB1R b KQkq - 2 5',
          solution: ['c8a6'],
          accept: [['c8a6']],
          hint: "Find the diagonal that leads to White's undeveloped bishop on f1.",
          explanation: "...Ba6 challenges the bishop on f1 along the a6-f1 diagonal. If White exchanges with Bxa6, Black's worst piece has been swapped for White's best minor piece. If White avoids the trade, ...Bxf1 does it anyway and White's king loses the right to castle. Either way, Black's pawn chain no longer comes with a useless bishop behind it.",
          wrong: {
            'c8b7': "Bb7 develops, but the bishop stares straight at its own pawn on d5. It is still bad.",
            'b8c6': "A useful developing move, but it does nothing for the bishop on c8, the piece that needs help most."
          }
        }
      ]
    },

    {
      id: 'strategy-4',
      category: 'strategy',
      side: 'both',
      title: 'Pawn breaks: hit the base',
      level: 'Beginner',
      minutes: 6,
      objective: "Choose the pawn break that attacks the base of a pawn chain.",
      summary: "In closed positions, pawn breaks are how you open lines; aim them at the base of the chain.",
      prerequisites: ['openings-1'],
      related: { lessons: ['strategy-3', 'strategy-9'] },
      steps: [
        {
          type: 'read',
          title: 'Chains and breaks',
          text: "After 3.e5 in the French, White's d4 and e5 pawns form a chain: a diagonal line of pawns, each protecting the next. The front pawn is the head, the rear one is the base. A pawn break is a pawn move that challenges an enemy pawn to open lines. The base is the best target, because the whole chain rests on it: if d4 falls, e5 loses its support.",
          fen: 'rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3',
          arrows: [],
          highlights: ['d4', 'e5']
        },
        {
          type: 'puzzle',
          title: 'Strike at the chain',
          prompt: "Black to move: which pawn break attacks the base of White's pawn chain?",
          fen: 'rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3',
          solution: ['c7c5'],
          accept: [['c7c5']],
          hint: "The base of the chain is on d4. Which pawn can attack it?",
          explanation: "3...c5 attacks d4, the base of the chain. Black will add pressure with ...Nc6 and ...Qb6, and White has to spend moves such as c3 and Nf3 just to keep d4. The other break, ...f6, hits the head on e5 and is often played later, once the pressure on d4 is in place.",
          wrong: {
            'c7c6': "...c6 supports d5, but it attacks nothing. White keeps a free hand in the centre.",
            'f7f6': "...f6 hits the head of the chain, not its base, and so early it loosens Black's king. Start with the base."
          }
        },
        {
          type: 'line',
          title: 'Pressure on d4',
          text: "Watch how Black piles up on d4: pawn, knight and queen all aim at the base. White needs c3 and Nf3 just to hold it.",
          fen: 'start',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4e5', san: 'e5', note: "White builds the chain d4-e5." },
            { uci: 'c7c5', san: 'c5', note: "The break against the base." },
            { uci: 'c2c3', san: 'c3', note: "Supports d4 with a pawn." },
            { uci: 'b8c6', san: 'Nc6', note: "Second attacker." },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd8b6', san: 'Qb6', note: "Third attacker, and the queen also eyes b2." },
            { uci: 'a2a3', san: 'a3', note: "The main line: White prepares b4 to gain space on the queenside." }
          ]
        }
      ]
    },

    {
      id: 'strategy-5',
      category: 'strategy',
      side: 'both',
      title: 'Good knight against bad bishop',
      level: 'Intermediate',
      minutes: 7,
      objective: "Choose exchanges that leave your knight facing a bishop blocked by its own pawns.",
      summary: "Trade off the enemy's good bishop, keep the knight, and the bad bishop is left with nothing to do.",
      prerequisites: ['middlegames-1', 'strategy-3'],
      related: { lessons: ['middlegames-1', 'strategy-3', 'strategy-8'] },
      steps: [
        {
          type: 'read',
          title: 'The dream minor-piece battle',
          text: "In this illustrative position, White's knight on d5 sits on an outpost: no black pawn can attack it. Black's bishop on e7 is bad, hemmed in by its own pawns on d6 and e5, both on dark squares. The knight attacks, the bishop only defends. Positions like this rarely arrive by chance; they come from choosing the right exchanges.",
          fen: '5rk1/pp2bppp/3p4/3Np3/4P3/8/PPP2PPP/3R2K1 b - - 1 1',
          arrows: [['d5', 'e7']],
          highlights: ['d5', 'e7']
        },
        {
          type: 'puzzle',
          title: 'Pick the right trade',
          prompt: "White to move: make the exchange that leaves your knight against Black's bad bishop.",
          fen: '5rk1/p3bpp1/3p4/2p1p2p/2P1P1b1/2N5/PP2BPPP/5RK1 w - - 0 1',
          solution: ['e2g4'],
          accept: [['e2g4']],
          hint: "Black has two bishops. Which one is the good one, and can you remove it?",
          explanation: "Bxg4 hxg4 removes Black's good bishop, the one that could have fought for the light squares. What remains is Black's bishop on e7, blocked by the pawns on c5, d6 and e5, against your knight, which heads for the outpost on d5. Black's pawns cannot ever chase it away.",
          wrong: {
            'c3d5': "Nd5? Bxe2 Nxe7+ Kh7, and the e2 bishop hits your rook: after Re1 Bxc4 Black is a pawn up and has kept the good bishop.",
            'f2f3': "f3 drives the bishop away, but after ...Be6 it stays on the board and guards d5. Black keeps the good bishop."
          }
        }
      ]
    },

    {
      id: 'strategy-6',
      category: 'pawn-structures',
      side: 'both',
      title: "Playing with the isolated queen's pawn",
      level: 'Intermediate',
      minutes: 8,
      objective: "Use the space and outposts an isolated d-pawn gives you to build active piece play.",
      summary: "An isolated d-pawn is a weakness in the ending but a source of energy in the middlegame.",
      prerequisites: ['middlegames-1', 'strategy-4'],
      related: { lessons: ['strategy-7', 'middlegames-2'] },
      steps: [
        {
          type: 'read',
          title: 'Strength and weakness in one pawn',
          text: "An isolated queen's pawn (IQP) is a d-pawn with no friendly pawns on the c- or e-files. Nothing can ever defend it with a pawn, so in the ending it is a target. In the middlegame it gives space and two strong squares, e5 and c5, which Black can challenge only by weakening himself with ...f6 or ...b6. The IQP side should play actively: knight to e5, rooks to the centre, pressure on the king, and the d4-d5 break at the right moment.",
          fen: 'r1bq1rk1/pp2bppp/2n1pn2/8/3P4/2NB1N2/PP3PPP/R1BQ1RK1 w - - 0 1',
          arrows: [],
          highlights: ['c5', 'e5']
        },
        {
          type: 'puzzle',
          title: 'Use the outpost',
          prompt: "White to move: put a knight on the strong square that the d4 pawn supports.",
          fen: 'r1bq1rk1/pp1nbppp/4pn2/8/3P4/2NB1N2/PP3PPP/R1BQ1RK1 w - - 0 1',
          solution: ['f3e5'],
          accept: [['f3e5']],
          hint: "The square is protected by the d4 pawn; Black could only chase a knight from there with ...f6, which weakens e6.",
          explanation: "Ne5 plants the knight on the strong square. It eyes f7 and c6, frees the f-pawn to join in with f4, and if Black exchanges with ...Nxe5, dxe5 drives the f6 knight away from the king's defence. Active pieces are the compensation for the isolated pawn, so the IQP player keeps them on the board.",
          wrong: {
            'c3b5': "Nb5 aims at a7 and d6, but ...a6 sends it straight back. b5 is not an outpost.",
            'd4d5': "d5 is the key break, but here ...exd5 simply wins the pawn: prepare it first with more pieces."
          }
        }
      ]
    },

    {
      id: 'strategy-7',
      category: 'pawn-structures',
      side: 'both',
      title: "Playing against the isolated queen's pawn",
      level: 'Intermediate',
      minutes: 7,
      objective: "Blockade an isolated pawn with a knight and trade pieces towards an ending.",
      summary: "Stop the pawn, swap the attackers, and the isolated pawn becomes a lasting weakness.",
      prerequisites: ['strategy-6'],
      related: { lessons: ['strategy-6', 'practical-5'] },
      steps: [
        {
          type: 'read',
          title: 'Blockade, then trade',
          text: "Against an IQP, the square in front of the pawn, d5, is the key. A piece standing there blockades the pawn: it stops the d4-d5 break and cannot be chased by any white pawn. Every exchange of pieces also helps the defender, since the IQP's attacking chances shrink and its weakness grows.",
          fen: 'r1bq1rk1/pp2bppp/2n1pn2/8/3P4/2NB1N2/PP3PPP/R1BQR1K1 b - - 0 1',
          arrows: [],
          highlights: ['d4', 'd5']
        },
        {
          type: 'puzzle',
          title: 'Choose the blockader',
          prompt: "Black to move: which piece belongs on d5, in front of the isolated pawn?",
          fen: 'r1bq1rk1/pp2bppp/2n1pn2/8/3P4/2NB1N2/PP3PPP/R1BQR1K1 b - - 0 1',
          solution: ['f6d5'],
          accept: [['f6d5']],
          hint: "The best blockader is a piece that still works while it stands guard.",
          explanation: "...Nd5 puts the knight on the blockading square. From d5 it stops d4-d5, eyes c3, e3, b4 and f4, and offers a trade of knights: after Nxd5 exd5 White's attacking chances are much reduced. A queen on d5 would simply be taken by the c3 knight, and a bishop could not cover the dark squares around it.",
          wrong: {
            'd8d5': "...Qd5?? Nxd5. The queen is attacked by the knight on c3 and is lost.",
            'c6b4': "...Nb4 hits the bishop and is playable, but the other knight is the natural blockader. Put a piece on d5 first."
          }
        }
      ]
    },

    {
      id: 'strategy-8',
      category: 'strategy',
      side: 'both',
      title: 'The bishop pair',
      level: 'Intermediate',
      minutes: 7,
      objective: "Use two bishops in open positions, where together they control squares of both colours from far away.",
      summary: "Two bishops cover both colours and work from a distance; open the position and they dominate.",
      prerequisites: ['strategy-5'],
      related: { lessons: ['strategy-5', 'strategy-1'] },
      steps: [
        {
          type: 'read',
          title: 'Why two bishops are strong',
          text: "One bishop sees only half the board. Two bishops together cover both colours, and from long range, so they are usually a little stronger than bishop and knight, or two knights, once the position opens up. The side with the bishop pair likes open lines and pawns on both wings; the side against them wants closed, blocked positions and outposts for the knights. In this illustrative position the knight on h1 is on the rim, and its only exits, f2 and g3, are easy for bishops to take away.",
          fen: '8/2k5/8/p7/8/P1B5/2K3P1/3B3n w - - 0 1',
          arrows: [],
          highlights: ['c3', 'd1']
        },
        {
          type: 'puzzle',
          title: 'Take away the squares',
          prompt: "White to move: the knight on h8 has two exits. Close them both, and the knight is lost.",
          fen: '7n/8/1k6/p7/8/P7/2K3P1/3BB3 w - - 0 1',
          solution: ['d1h5'],
          accept: [['d1h5']],
          hint: "The knight can go to f7 or g6. Both squares are light, and lie on one diagonal.",
          explanation: "Bh5 covers f7 and g6, the knight's only squares. Next the other bishop comes to c3, attacking h8 along the long diagonal, and the knight cannot escape. Black's king is far too far away to help. Each bishop controls a different colour, so together they can trap a piece that one bishop alone could not.",
          wrong: {
            'e1c3': "Bc3 attacks the knight at once, but it simply jumps to f7 or g6 and escapes.",
            'c2d3': "Bringing the king closer is slow: the knight walks out via g6 or f7 before you arrive."
          }
        }
      ]
    },

    {
      id: 'strategy-9',
      category: 'strategy',
      side: 'both',
      title: 'The minority attack',
      level: 'Advanced',
      minutes: 9,
      objective: "Use two queenside pawns against three to create a lasting weakness in the Carlsbad structure.",
      summary: "In the Carlsbad structure, White pushes the b-pawn to leave Black with a weak c-pawn or d-pawn.",
      prerequisites: ['strategy-4', 'gambits-1'],
      related: { lessons: ['strategy-4', 'gambits-1', 'strategy-1'] },
      steps: [
        {
          type: 'read',
          title: 'The Carlsbad structure',
          text: "After an exchange on d5 in the Queen's Gambit Declined, White has pawns on a2, b2 and d4, Black on a7, b7, c6 and d5: the Carlsbad structure. White's plan is the minority attack: push the b-pawn to b5, attacking c6 with fewer pawns than Black has there. When pawns are exchanged on b5 or c6, Black is left with a weak pawn on c6 or an isolated pawn on d5, a target for the rest of the game.",
          fen: 'r1bqrnk1/pp2bppp/2p2n2/3p2B1/3P4/2NBPN2/PPQ2PPP/1R3RK1 b - - 10 11',
          arrows: [],
          highlights: ['b2', 'c6', 'd5']
        },
        {
          type: 'puzzle',
          title: 'Carry out the attack',
          prompt: "White to move: which pawn move carries out the minority attack against c6?",
          fen: 'r1bqr1k1/1p3ppp/p1pb1nn1/3p2B1/PP1P4/2NBPN2/2Q2PPP/1R3RK1 w - - 1 14',
          solution: ['b4b5'],
          accept: [['b4b5']],
          hint: "The a4 pawn is there to support the push, and the rook on b1 waits behind it.",
          explanation: "b5 hits c6. After ...axb5 axb5, Black must decide: ...cxb5 leaves d5 isolated and weak. Allowing bxc6 bxc6 instead leaves a backward c-pawn on a half-open file, and White's rook takes over the open b-file. Either way White has created a weakness to press against for the rest of the game.",
          wrong: {
            'a4a5': "a5 gains space, but it no longer supports b5, and the attack on c6 stalls.",
            'e3e4': "e4 is a different plan, a central break that gives Black's pieces open lines. It is not the minority attack."
          }
        }
      ]
    },

    {
      id: 'strategy-10',
      category: 'pawn-structures',
      side: 'both',
      title: 'Hanging pawns',
      level: 'Advanced',
      minutes: 8,
      objective: "Understand when hanging pawns are strong, and advance one of them at the right moment.",
      summary: "Two pawns side by side on c5 and d5 are dynamic: they are strong while they can advance.",
      prerequisites: ['strategy-6', 'strategy-7'],
      related: { lessons: ['strategy-6', 'strategy-7', 'strategy-4'] },
      steps: [
        {
          type: 'read',
          title: 'Side by side, but alone',
          text: "Hanging pawns are two pawns side by side, here on c5 and d5, with no friendly pawns on the files next to them. They control a lot of central squares and give the rooks half-open files. But neither can be defended by a pawn, so White attacks them with pieces and hopes to force one to advance. The hanging-pawn side wants the opposite: to advance one of them when it gains something.",
          fen: '2rr2k1/1b2qppp/5n2/2pp4/8/1QN1PN2/PP3PPP/2RR2K1 w - - 0 1',
          arrows: [],
          highlights: ['c5', 'd5']
        },
        {
          type: 'puzzle',
          title: 'The right moment to push',
          prompt: "Black to move: White's pieces stand on c3 and e3. Advance a hanging pawn and win material.",
          fen: '2rr2k1/1b2qppp/5n2/2pp4/Q7/2N1B3/PP3PPP/2RR2K1 b - - 0 1',
          solution: ['d5d4'],
          accept: [['d5d4']],
          hint: "A pawn on d4 would attack two squares at once.",
          explanation: "...d4 forks the knight on c3 and the bishop on e3. The pawn is protected by c5 and backed by the rook on d8, and with no white c- or e-pawn nothing can take it cheaply. White loses a piece or has to give it up for a pawn or two. Hanging pawns are at their best when one of them can advance with gain of time like this.",
          wrong: {
            'c5c4': "...c4 gains space, but it gives up control of d4 for good and leaves d5 a backward target.",
            'f6e4': "...Ne4 trades a piece, and every trade weakens hanging pawns. Push the pawn while it wins something."
          }
        }
      ]
    },

    /* ============================================================ ENDGAMES */
    {
      id: 'endgames-4',
      category: 'endgames',
      side: 'both',
      title: 'Mate with king and rook',
      level: 'Beginner',
      minutes: 7,
      objective: "Drive a lone king to the edge with king and rook, and deliver mate.",
      summary: "The rook builds a fence, the king pushes, and the mate comes on the edge.",
      prerequisites: ['endgames-3'],
      related: { lessons: ['endgames-3', 'endgames-5'] },
      steps: [
        {
          type: 'read',
          title: 'Fence and push',
          text: "A rook cannot mate alone; it needs its king. The rook builds a fence: here the rook on the third rank keeps the black king above it. White's king walks up, the rook moves the fence one rank closer whenever it safely can, and the box shrinks until the king reaches the edge. Then, with the kings facing each other, a rook check along the edge is mate. Keep the rook far from the enemy king, so it cannot be attacked.",
          fen: '8/8/8/8/3k4/R7/8/4K3 b - - 0 1',
          arrows: [['a3', 'h3']],
          highlights: ['e1', 'd4']
        },
        {
          type: 'line',
          title: 'Opposition, then mate',
          text: "The black king is in the corner. White's king steps to g6, opposite the square g8. Black's only move walks into the mate.",
          fen: '7k/8/5K2/8/8/8/8/R7 w - - 0 1',
          moves: [
            { uci: 'f6g6', san: 'Kg6', note: "Takes away g7 and h7." },
            { uci: 'h8g8', san: 'Kg8', note: "The only move: the kings now face each other." },
            { uci: 'a1a8', san: 'Ra8#', note: "The rook checks along the edge, and the white king covers the escape squares." }
          ]
        },
        {
          type: 'puzzle',
          title: 'Finish it',
          prompt: "White to move: deliver checkmate.",
          fen: '3k4/R7/3K4/8/8/8/8/8 w - - 0 1',
          solution: ['a7a8'],
          accept: [['a7a8']],
          hint: "The kings already face each other. Check along the back rank.",
          explanation: "Ra8 is mate. The rook covers the whole eighth rank, and the white king on d6 covers c7, d7 and e7. This is why you bring your king opposite the enemy king first: then a check on the edge leaves no escape.",
          wrong: {
            'a7d7': "Rd7+ is check, but the king slips out to c8 or e8. Mate was available at once.",
            'a7h7': "A calm waiting move, but there is mate on the board right now."
          }
        }
      ]
    },

    {
      id: 'endgames-5',
      category: 'endgames',
      side: 'both',
      title: "The rook's pawn draw",
      level: 'Beginner',
      minutes: 6,
      objective: "Draw against a rook's pawn by getting your king into the corner in front of it.",
      summary: "A lone a-pawn or h-pawn often cannot win, because the defending king hides in the corner.",
      prerequisites: ['endgames-1'],
      related: { lessons: ['endgames-1', 'endgames-6', 'endgames-10'] },
      steps: [
        {
          type: 'read',
          title: 'Why the corner saves you',
          text: "A rook's pawn is a pawn on the a-file or h-file. With other pawns the attacking king can step aside and let its pawn through. On the edge there is no room to step aside: if the defending king reaches the corner in front of the pawn, the best White can do is stalemate. So against an a-pawn or h-pawn, run for the corner.",
          fen: 'k7/8/1K6/P7/8/8/8/8 w - - 0 1',
          arrows: [],
          highlights: ['a8', 'b8']
        },
        {
          type: 'line',
          title: 'Stuck in the corner',
          text: "White pushes, but the black king shuffles between a8 and b8. In the end White must either let the king out or stalemate it.",
          fen: 'k7/8/1K6/P7/8/8/8/8 w - - 0 1',
          moves: [
            { uci: 'a5a6', san: 'a6' },
            { uci: 'a8b8', san: 'Kb8' },
            { uci: 'a6a7', san: 'a7+' },
            { uci: 'b8a8', san: 'Ka8', note: "Back into the corner." },
            { uci: 'b6a6', san: 'Ka6', note: "Stalemate: Black has no legal move and is not in check. A draw." }
          ]
        },
        {
          type: 'puzzle',
          title: 'Run for the corner',
          prompt: "Black to move: White's king is beside its a-pawn. Which king move holds the draw?",
          fen: '8/3k4/8/PK6/8/8/8/8 b - - 0 1',
          solution: ['d7c7'],
          accept: [['d7c7'], ['d7c8'], ['d7d8']],
          hint: "Head towards b8 and a8, not towards the centre.",
          explanation: "...Kc7 heads for the corner: the black king keeps the white king off b7 and reaches b8 or a8 in time. After that White can only shuffle or stalemate. ...Kc8 and ...Kd8 also get there. Moves away from the corner let White's king reach b7 and escort the pawn home.",
          wrong: {
            'd7d6': "...Kd6? Kb6 and the white king reaches b7 first. The pawn walks through.",
            'd7e7': "...Ke7? You run away from the corner, and the pawn queens with its king's help."
          }
        }
      ]
    },

    {
      id: 'endgames-6',
      category: 'endgames',
      side: 'both',
      title: 'Key squares',
      level: 'Beginner',
      minutes: 7,
      objective: "Find a pawn's key squares and steer your king onto one of them.",
      summary: "If the attacking king reaches a key square, the pawn wins whatever the defender does.",
      prerequisites: ['endgames-1'],
      related: { lessons: ['endgames-1', 'endgames-5', 'practical-8'] },
      steps: [
        {
          type: 'read',
          title: 'Squares that win by themselves',
          text: "Key squares are squares that win the game for the attacker as soon as his king stands on one, whoever is to move. For a pawn on its second, third or fourth rank (not a rook's pawn), the key squares are the three squares two ranks in front of it. For this e2 pawn they are d4, e4 and f4. So in king and pawn endings, think about where your king must go, not about pushing the pawn.",
          fen: '8/8/8/8/8/8/4P3/4K2k w - - 0 1',
          arrows: [],
          highlights: ['d4', 'e4', 'f4']
        },
        {
          type: 'puzzle',
          title: 'Head for a key square',
          prompt: "White to move and win. Black's king guards d4 and e4. Where does your king go?",
          fen: '8/8/8/3k4/8/8/4PK2/8 w - - 0 1',
          solution: ['f2f3'],
          accept: [['f2f3']],
          hint: "One key square is still free. Approach it so that Black cannot cover it in time.",
          explanation: "Kf3 heads for f4. If ...Ke5 covers it, Ke3! takes the opposition, and Black's king cannot guard d4, e4 and f4 at once: ...Kd5 Kf4, or ...Kf5 Kd4, and White's king stands on a key square. From there the pawn walks home. Pushing the pawn first lets Black's king block it.",
          wrong: {
            'e2e4': "e4+? Kxe4. Your king does not protect the pawn, so it is simply lost. Head for a key square first.",
            'f2g3': "Kg3? Ke4! and Black's king covers f4 as well as e3. White cannot reach a key square."
          }
        }
      ]
    },

    {
      id: 'endgames-7',
      category: 'endgames',
      side: 'both',
      title: 'The outside passed pawn',
      level: 'Intermediate',
      minutes: 8,
      objective: "Use a passed pawn far from the other pawns as a decoy that drags the enemy king away.",
      summary: "A distant passed pawn pulls the defending king to one side while your king feasts on the other.",
      prerequisites: ['endgames-1', 'endgames-6'],
      related: { lessons: ['endgames-8', 'practical-5'] },
      steps: [
        {
          type: 'read',
          title: 'A decoy on the edge',
          text: "An outside passed pawn is a passed pawn far away from the other pawns, often on the a- or h-file. The defending king must go and stop it, and that takes it away from the rest of the pawns. Meanwhile the attacking king walks to the other wing and wins the pawns there. Here White's a-pawn is the decoy, and Black's kingside pawns will be left alone.",
          fen: '8/8/3k2p1/7p/P6P/8/4K3/8 w - - 0 1',
          arrows: [['a4', 'a8']],
          highlights: ['a4', 'g6', 'h5']
        },
        {
          type: 'puzzle',
          title: 'Decoy or king march',
          prompt: "White to move and win. Either push the decoy now, or bring the king towards the kingside.",
          fen: '8/8/3k2p1/7p/P2K3P/8/8/8 w - - 0 1',
          solution: ['a4a5'],
          accept: [['a4a5'], ['d4e4'], ['d4e3'], ['d4d3']],
          hint: "Black's king can only be in one place. Do not let your own king drift to the queenside.",
          explanation: "a5 sends the decoy on its way. Black's king must go after it, and while it does, White's king marches over via e5 and f6 to collect g6 and h5. King moves towards the kingside (Ke4, Ke3, even Kd3) also win: the a-pawn waits and keeps Black's king busy. What loses the win is heading the wrong way: the decoy works only if your king is on the other wing.",
          wrong: {
            'd4c4': "Kc4? Your king joins the a-pawn, so Black's king is free to block it, and both kings end up on the same side. It is a draw.",
            'd4c3': "Kc3? The king goes the wrong way. Black blocks the a-pawn and holds."
          }
        }
      ]
    },

    {
      id: 'endgames-8',
      category: 'endgames',
      side: 'both',
      title: 'The protected passed pawn',
      level: 'Intermediate',
      minutes: 7,
      objective: "Use a protected passed pawn to tie down the enemy king while your king wins elsewhere.",
      summary: "A passed pawn guarded by another pawn cannot be won by the king, so the defender is always tied to it.",
      prerequisites: ['endgames-7'],
      related: { lessons: ['endgames-7', 'endgames-11'] },
      steps: [
        {
          type: 'read',
          title: 'A pawn the king cannot take',
          text: "A protected passed pawn is a passed pawn defended by another pawn. Here White's b5 pawn is guarded by a4. Black's king cannot capture it, and must always stay close enough to stop it from queening. White's king is free. That one extra free piece usually decides a king and pawn ending.",
          fen: '8/8/3k4/pP6/P7/8/8/6K1 w - - 0 1',
          arrows: [['a4', 'b5']],
          highlights: ['b5']
        },
        {
          type: 'puzzle',
          title: 'Which way, king?',
          prompt: "White to move and win. Black's h-pawn is a danger. Where should your king go?",
          fen: '8/8/3k4/pP5p/P2K4/8/8/8 w - - 0 1',
          solution: ['d4e4'],
          accept: [['d4e4'], ['d4e3'], ['d4d3']],
          hint: "Your b-pawn looks after itself. Who stops the h-pawn?",
          explanation: "Ke4 goes after the h-pawn (Ke3 and Kd3 are also in time). Black's king cannot help it, because it must stay near b5: if it wanders off, b6 queens. White's king catches the h-pawn, takes it, and then returns to win on the queenside. Your protected passer does its job standing still.",
          wrong: {
            'd4c4': "Kc4? Your king goes the wrong way. Black's h-pawn runs, and White's king is too far away: Black wins.",
            'b5b6': "b6? Kc6 wins the pawn, because it is no longer protected. Then the h-pawn decides for Black."
          }
        }
      ]
    },

    {
      id: 'endgames-9',
      category: 'endgames',
      side: 'both',
      title: 'The Philidor position',
      level: 'Intermediate',
      minutes: 8,
      objective: "Hold rook against rook and pawn with the Philidor set-up: third-rank rook, then checks from behind.",
      summary: "Keep the attacking king out with your rook on the third rank; when the pawn advances, check from behind.",
      prerequisites: ['endgames-2'],
      related: { lessons: ['endgames-2', 'endgames-12'] },
      steps: [
        {
          type: 'read',
          title: 'King in front, rook on the third',
          text: "Rook and pawn against rook is often a draw if the defender knows Philidor's method. The defending king stands on the queening square, or right in front of the pawn. The rook guards its own third rank, here the sixth, so the attacking king cannot step up beside its pawn. The rook stays there until the pawn advances; then it goes to the far end of the board and checks from behind.",
          fen: '3k4/7R/5r2/2KP4/8/8/8/8 w - - 0 1',
          arrows: [],
          highlights: ['d8', 'f6', 'c6', 'd6', 'e6']
        },
        {
          type: 'puzzle',
          title: 'Take up the position',
          prompt: "Black to move: White's king wants to reach the sixth rank. Where does your rook belong?",
          fen: '4k3/R7/8/3KP3/8/8/1r6/8 b - - 0 1',
          solution: ['b2b6'],
          accept: [['b2b6']],
          hint: "Stop the king before it advances: guard the rank in front of it.",
          explanation: "...Rb6 is the Philidor set-up. The rook on the sixth rank keeps White's king off d6, e6 and f6. If White pushes e6, the rook drops to b1 and checks from behind. If Black waits passively instead, the white king reaches the sixth rank, and with the pawn on e5 as a shelter, the defence usually collapses.",
          wrong: {
            'b2d2': "...Rd2+ only drives the king where it wants to go: Ke6, and now mate threats on the back rank appear.",
            'e8f8': "...Kf8? lets White's king in with Kd6 or Ke6. Rook on the third rank first."
          }
        },
        {
          type: 'line',
          title: 'The drawing method',
          text: "Black's king is on the queening square and the rook guards the sixth rank (Black's third rank), so White's king cannot advance. If White pushes e6, the pawn no longer shelters the king, and Black's rook drops to the first rank and checks from behind for ever.",
          fen: '4k3/R7/1r6/3KP3/8/8/8/8 w - - 0 1',
          moves: [
            { uci: 'e5e6', san: 'e6', note: "The only way to make progress, but it gives up the shelter." },
            { uci: 'b6b1', san: 'Rb1', note: "Now the rook goes far away, ready to check from behind." },
            { uci: 'd5d6', san: 'Kd6', note: "White threatens Ra8 mate." },
            { uci: 'b1d1', san: 'Rd1+' },
            { uci: 'd6e5', san: 'Ke5' },
            { uci: 'd1e1', san: 'Re1+' },
            { uci: 'e5d6', san: 'Kd6' },
            { uci: 'e1d1', san: 'Rd1+', note: "The king can never hide. It is a draw." }
          ]
        }
      ]
    },

    {
      id: 'endgames-10',
      category: 'endgames',
      side: 'both',
      title: 'The wrong-coloured bishop',
      level: 'Intermediate',
      minutes: 6,
      objective: "Recognise the drawn ending of bishop and rook's pawn when the bishop cannot control the queening square.",
      summary: "Bishop and rook's pawn cannot win if the bishop does not control the queening corner and the defending king gets there.",
      prerequisites: ['endgames-5'],
      related: { lessons: ['endgames-5', 'practical-9'] },
      steps: [
        {
          type: 'read',
          title: 'The wrong corner',
          text: "With a rook's pawn, the queening square decides everything. The h8 square is dark. A light-squared bishop can never control it, so if Black's king reaches h8, White cannot drive it out: every try ends in stalemate. That bishop is the wrong-coloured bishop, and bishop plus h-pawn is then a draw, even a whole piece up.",
          fen: '7k/8/8/7P/8/3B4/4K3/8 w - - 0 1',
          arrows: [],
          highlights: ['h8', 'd3']
        },
        {
          type: 'puzzle',
          title: 'Give the rook for the right piece',
          prompt: "Black to move. Your rook hits both bishops. Give it up for the right one to reach a dead draw.",
          fen: '6k1/8/8/8/7P/1r1B4/1BK5/8 b - - 0 1',
          solution: ['b3b2'],
          accept: [['b3b2']],
          hint: "Which bishop could ever control the dark h8 square?",
          explanation: "...Rxb2+ Kxb2 leaves White with the light-squared bishop and an h-pawn. Black's king heads for h8 (or simply wins the h4 pawn), and a light-squared bishop can never drive it out: a dead draw. After ...Rxd3? Kxd3 White keeps the dark-squared bishop, which controls h8 and guards the pawn from g5 or e1, and White wins.",
          wrong: {
            'b3d3': "...Rxd3? Kxd3. The dark-squared bishop controls h8 and can protect h4 (2...Kh7 3.Bc1 stops ...Kh6), so White wins."
          }
        }
      ]
    },

    {
      id: 'endgames-11',
      category: 'endgames',
      side: 'both',
      title: 'The pawn breakthrough',
      level: 'Advanced',
      minutes: 7,
      objective: "Break through a pawn wall with a sacrifice when the enemy king is too far away.",
      summary: "Three pawns against three can produce a queen by force if the defending king is out of reach.",
      prerequisites: ['endgames-1', 'endgames-7'],
      related: { lessons: ['endgames-7', 'endgames-8'] },
      steps: [
        {
          type: 'read',
          title: 'Sacrifice to open a path',
          text: "When pawns face each other with the kings far away, a pawn sacrifice can force a passed pawn. The idea: give up one pawn to deflect an enemy pawn, then give up another, so that a third pawn has a free run. It only works when the defending king is outside the square of the new passed pawn, so count before you sacrifice. Here Black's king is on g7, far from the queenside.",
          fen: '8/ppp3k1/8/PPP5/8/8/8/6K1 w - - 0 1',
          arrows: [],
          highlights: ['a5', 'b5', 'c5']
        },
        {
          type: 'puzzle',
          title: 'Find the breakthrough',
          prompt: "White to move: break through on the queenside. Which pawn goes first?",
          fen: '8/ppp3k1/8/PPP5/8/8/8/6K1 w - - 0 1',
          solution: ['b5b6'],
          accept: [['b5b6']],
          hint: "Start in the middle, so you can answer either capture with a second sacrifice.",
          explanation: "b6! attacks a7 and c7. If ...cxb6, a6! bxa6 c6 and the c-pawn queens; if ...axb6, c6! bxc6 a6 and the a-pawn queens. Black's king is too far away to catch either. The middle pawn goes first because it threatens both neighbours.",
          wrong: {
            'a5a6': "a6? bxa6! and now b6 cxb6 leaves no breakthrough. Black holds.",
            'c5c6': "c6? bxc6! Now no further sacrifice makes a passed pawn, and Black is simply a pawn up."
          }
        },
        {
          type: 'line',
          title: 'The race is over',
          text: "One way it goes: Black takes with the c-pawn, White sacrifices again, and the last pawn runs.",
          fen: '8/ppp3k1/8/PPP5/8/8/8/6K1 w - - 0 1',
          moves: [
            { uci: 'b5b6', san: 'b6' },
            { uci: 'c7b6', san: 'cxb6' },
            { uci: 'a5a6', san: 'a6', note: "The second sacrifice." },
            { uci: 'b7a6', san: 'bxa6' },
            { uci: 'c5c6', san: 'c6', note: "A passed pawn, and the black king is outside its square." },
            { uci: 'g7f7', san: 'Kf7' },
            { uci: 'c6c7', san: 'c7' },
            { uci: 'f7e7', san: 'Ke7' },
            { uci: 'c7c8q', san: 'c8=Q' }
          ]
        }
      ]
    },

    {
      id: 'endgames-12',
      category: 'endgames',
      side: 'both',
      title: 'Two goals at once: the Reti idea',
      level: 'Advanced',
      minutes: 7,
      objective: "Use the king's diagonal march to chase a pawn and support your own at the same time.",
      summary: "A king moving diagonally covers as much ground as one moving straight, and can serve two goals.",
      prerequisites: ['endgames-1', 'endgames-6'],
      related: { lessons: ['endgames-1', 'endgames-11'] },
      steps: [
        {
          type: 'read',
          title: 'Geometry of the king',
          text: "On a chessboard, the diagonal is no longer than the straight line: a king needs as many moves to go from h8 to h4 as from h8 to e4. So a king can sometimes walk towards one target while also approaching another. This famous study by Richard Reti (1921) looks hopeless for White: Black's h-pawn is far ahead and White's king is a long way off.",
          fen: '7K/8/k1P5/7p/8/8/8/8 w - - 0 1',
          arrows: [],
          highlights: ['h8', 'h5', 'c6']
        },
        {
          type: 'puzzle',
          title: 'Save the hopeless',
          prompt: "White to move and draw. Which king move keeps both ideas alive?",
          fen: '7K/8/k1P5/7p/8/8/8/8 w - - 0 1',
          solution: ['h8g7'],
          accept: [['h8g7']],
          hint: "Chase the h-pawn, but on a path that also heads towards your c-pawn.",
          explanation: "Kg7! heads for the h-pawn and towards c6 at once. After ...h4 Kf6, if Black keeps running with ...h3, Ke7 supports the c-pawn and both sides queen. If Black stops to take c6, Ke5 and Kf4 catch the h-pawn. Kh7 or Kg8 go in only one direction and lose.",
          wrong: {
            'h8h7': "Kh7? h4 Kg6 h3, and White is a tempo short on both routes: the h-pawn queens first.",
            'c6c7': "c7? Kb7 stops the pawn, and the h-pawn runs to queen."
          }
        },
        {
          type: 'line',
          title: 'Back in time',
          text: "Here Black takes the c-pawn, and White's king arrives just in time.",
          fen: '7K/8/k1P5/7p/8/8/8/8 w - - 0 1',
          moves: [
            { uci: 'h8g7', san: 'Kg7' },
            { uci: 'h5h4', san: 'h4' },
            { uci: 'g7f6', san: 'Kf6', note: "Still both ideas." },
            { uci: 'a6b6', san: 'Kb6' },
            { uci: 'f6e5', san: 'Ke5', note: "If ...h3, Kd6 and the c-pawn queens too." },
            { uci: 'b6c6', san: 'Kxc6' },
            { uci: 'e5f4', san: 'Kf4', note: "Into the square of the h-pawn: a draw." }
          ]
        }
      ]
    },

    /* =========================================================== PRACTICAL */
    {
      id: 'practical-1',
      category: 'practical',
      side: 'both',
      title: 'Checks, captures, threats',
      level: 'Beginner',
      minutes: 6,
      objective: "Run a short checklist before every move: checks, captures and threats, for both sides.",
      summary: "A thinking routine that finds tactics you would otherwise walk past.",
      prerequisites: ['tactics-1'],
      related: { lessons: ['practical-2', 'tactics-1'] },
      steps: [
        {
          type: 'read',
          title: 'The routine',
          text: "Before every move, look at forcing moves first, in this order: checks, captures, threats. Do it for your own moves, and then for your opponent's replies. Forcing moves limit the replies, so they are the easiest to calculate and the most likely to win something. Only when nothing forcing works do you look for a quiet, improving move.",
          fen: 'r5k1/p2nq1pp/1p3b2/8/8/1P3N2/P4PPP/2RQ2K1 w - - 0 1',
          arrows: [],
          highlights: []
        },
        {
          type: 'puzzle',
          title: 'Checks first',
          prompt: "White to move. Start the checklist with checks: which move wins material?",
          fen: 'r5k1/p2nq1pp/1p3b2/8/8/1P3N2/P4PPP/2RQ2K1 w - - 0 1',
          solution: ['d1d5'],
          accept: [['d1d5']],
          hint: "One queen check also looks along the long light-squared diagonal towards a8.",
          explanation: "Qd5+ checks the king and attacks the rook on a8 at the same time. Whatever Black does, a king move or a block on e6 or f7, Qxa8+ wins the rook. Checks come first in the routine because they leave the opponent the fewest choices.",
          wrong: {
            'd1d7': "Qxd7? Qxd7. The knight is defended by the queen: always count defenders before you capture.",
            'c1c7': "Rc7 hits the knight and the a7 pawn, but both are defended. Qd5+ wins a whole rook."
          }
        }
      ]
    },

    {
      id: 'practical-2',
      category: 'practical',
      side: 'both',
      title: 'The blunder check',
      level: 'Beginner',
      minutes: 5,
      objective: "Before you play the move you have chosen, check what your opponent's most forcing reply would be.",
      summary: "A last look at your opponent's checks and captures saves more points than any opening book.",
      prerequisites: ['practical-1', 'tactics-3'],
      related: { lessons: ['practical-1', 'tactics-3'] },
      steps: [
        {
          type: 'read',
          title: 'One last look',
          text: "Most lost games are not lost to deep plans but to one-move oversights. The blunder check is a habit: once you have chosen a move, imagine it on the board and ask what your opponent's checks, captures and threats are now. Pay special attention to pieces that were guarding something before they moved.",
          fen: '2r3k1/pp3pp1/7p/3n4/4P3/8/PP3PPP/3R2K1 w - - 0 1',
          arrows: [],
          highlights: ['d1', 'd5']
        },
        {
          type: 'puzzle',
          title: 'Which capture is safe?',
          prompt: "White to move. The knight on d5 is loose. Blunder-check both captures and pick the safe one.",
          fen: '2r3k1/pp3pp1/7p/3n4/4P3/8/PP3PPP/3R2K1 w - - 0 1',
          solution: ['e4d5'],
          accept: [['e4d5']],
          hint: "Which of your pieces is the only guard of your back rank?",
          explanation: "exd5 wins the knight and keeps the rook on d1, where it guards the back rank. Rxd5?? looks just as good, but after ...Rc1+ White can only block with Rd1, and ...Rxd1 is mate. Your king has no luft, so the rook was doing an important job. The blunder check is asking: what does my opponent's most forcing reply do?",
          wrong: {
            'd1d5': "Rxd5?? Rc1+ Rd1 Rxd1#. The rook was the only guard of your back rank.",
            'h2h3': "Making luft is sensible, but the knight is hanging now. Take it with the pawn first."
          }
        }
      ]
    },

    {
      id: 'practical-3',
      category: 'practical',
      side: 'both',
      title: 'Time trouble: the simple safe move',
      level: 'Beginner',
      minutes: 5,
      objective: "When the clock is low, choose the move that removes your opponent's threats, even if it is not the flashiest.",
      summary: "In time trouble, trade off attackers and kill threats; leave the brilliant ideas for when you have time.",
      prerequisites: ['practical-2'],
      related: { lessons: ['practical-2', 'practical-4', 'practical-5'] },
      steps: [
        {
          type: 'read',
          title: 'Safety first on a low clock',
          text: "With seconds left, you cannot calculate long lines, so you need moves that are safe without calculation. Good choices: trade your opponent's most active piece, cover your back rank, keep pieces protected. Here White is a rook up, but Black threatens ...Qe1+, and after Rxe1 Rxe1 it is mate. White needs a move that ends that danger for good.",
          fen: '4r1k1/5ppp/8/2Q1q3/8/8/PR3PPP/1R4K1 w - - 0 1',
          arrows: [['e5', 'e1']],
          highlights: ['e1', 'g1']
        },
        {
          type: 'puzzle',
          title: 'Fifteen seconds left',
          prompt: "White to move, with fifteen seconds on the clock. Find the safe move that kills Black's threat.",
          fen: '4r1k1/5ppp/8/2Q1q3/8/8/PR3PPP/1R4K1 w - - 0 1',
          solution: ['c5e5'],
          accept: [['c5e5']],
          hint: "Which black piece makes the threat? Can you simply take it off the board?",
          explanation: "Qxe5 trades off the only attacking piece, and it also deals with the attack on your own queen. After ...Rxe5 Black has no threats left, and White even has Rb8+ Re8 Rxe8 mate, because now Black's back rank is the weak one. Luft with h3? would stop the mate but drops the queen to ...Qxc5: with no time left, look at everything that is attacked.",
          wrong: {
            'c5c8': "Qc8?? Rxc8. In a hurry it is easy to drop a piece: check that the square is protected.",
            'b2b8': "Rb8? Rxb8! and after Rxb8+ Qxb8 your extra rook is gone (Qxe5? Rxb1+ even mates). Kill the threat first.",
            'h2h3': "h3? makes luft, but both queens are attacked and Black simply plays ...Qxc5."
          }
        }
      ]
    },

    {
      id: 'practical-4',
      category: 'practical',
      side: 'both',
      title: 'The increment and the last seconds',
      level: 'Beginner',
      minutes: 5,
      objective: "Use the increment to make safe moves in a won position, and check for stalemate before every quiet move.",
      summary: "With an increment you always get a few seconds per move: spend them on a quick safety check.",
      prerequisites: ['endgames-3', 'practical-3'],
      related: { lessons: ['endgames-3', 'practical-3'] },
      steps: [
        {
          type: 'read',
          title: 'Plan your time',
          text: "Plan your time: move quickly in lines you know, think longest at critical moments, and keep a reserve for the ending. With an increment (extra seconds added after each move), you cannot lose on time as long as each move takes less than the increment, but each move gets only those seconds. Use them for one question: after my move, does my opponent have a check, a capture, or no move at all? Here Black's king has very few squares, so stalemate is a real danger.",
          fen: 'k7/8/1K6/8/8/8/8/2Q5 w - - 0 1',
          arrows: [],
          highlights: ['a8', 'b8']
        },
        {
          type: 'puzzle',
          title: 'Five seconds per move',
          prompt: "White to move, playing on the increment. Finish the game, and do not stalemate.",
          fen: 'k7/8/1K6/8/8/8/8/2Q5 w - - 0 1',
          solution: ['c1c8'],
          accept: [['c1c8']],
          hint: "Look for a check first. Which check leaves the king no square?",
          explanation: "Qc8 is mate: the queen covers the whole eighth rank, and the king on b6 covers a7 and b7. Qc7?? looks natural but is stalemate, because Black has no legal move and is not in check. Checks first is the fastest safety check there is.",
          wrong: {
            'c1c7': "Qc7?? is stalemate: Black is not in check and has no legal move. Half a point thrown away.",
            'c1h1': "Qh1+ is check, but the king escapes to b8. Mate was there at once."
          }
        }
      ]
    },

    {
      id: 'practical-5',
      category: 'practical',
      side: 'both',
      title: 'Converting: trade pieces, not pawns',
      level: 'Intermediate',
      minutes: 7,
      objective: "Convert an extra pawn by exchanging pieces and keeping pawns on the board.",
      summary: "When you are ahead, every piece trade makes your extra material count for more.",
      prerequisites: ['endgames-7', 'practical-3'],
      related: { lessons: ['endgames-7', 'practical-6'] },
      steps: [
        {
          type: 'read',
          title: 'The rule of conversion',
          text: "When you are a pawn up, trade pieces, not pawns. With fewer pieces, your opponent has fewer chances to attack or swindle, and one extra pawn becomes decisive. Trading pawns works the other way: with fewer pawns, there is less to win with, and some endings with all pawns on one side are drawn. In king and pawn endings an extra outside pawn usually wins.",
          fen: '8/3rk3/8/7p/P7/4K2P/8/3R4 w - - 0 1',
          arrows: [],
          highlights: ['a4']
        },
        {
          type: 'puzzle',
          title: 'Simplify into a win',
          prompt: "White to move, a pawn up. Your rook is attacked. Trade into a winning pawn ending.",
          fen: '8/3rk3/8/7p/P7/4K2P/8/3R4 w - - 0 1',
          solution: ['d1d7'],
          accept: [['d1d7']],
          hint: "The rooks face each other on an open file.",
          explanation: "Rxd7+ Kxd7 leaves a king and pawn ending in which White's a-pawn is an outside passed pawn. Black's king must go after it, and White's king wins the h-pawn. With the rooks on, Black's rook could harass your pawns and king for a long time; without them, the extra pawn decides.",
          wrong: {
            'a4a5': "a5?? Rxd1. Your rook was attacked and unprotected.",
            'd1g1': "Rg1 keeps the rooks on, and Black's rook gets active with ...Rd4 or ...Ra7. The trade is far simpler."
          }
        }
      ]
    },

    {
      id: 'practical-6',
      category: 'practical',
      side: 'both',
      title: 'Opening preparation basics',
      level: 'Intermediate',
      minutes: 7,
      objective: "Prepare an opening by learning its typical traps and ideas, not just its moves.",
      summary: "Knowing the tactical trick of your opening is worth more than knowing ten more moves of theory.",
      prerequisites: ['openings-1', 'practical-1'],
      related: { lessons: ['openings-1', 'practical-7'] },
      steps: [
        {
          type: 'read',
          title: 'Prepare ideas, not lists',
          text: "Good opening preparation is short and practical: a few lines you understand, the typical plans, and the traps both sides can fall into. Before a game, check what your opponent usually plays, then refresh the ideas, not every move. In this Philidor Defence position (1.e4 e5 2.Nf3 d6 3.Bc4 Bg4 4.Nc3), White has developed quickly. Black's pin on the knight looks annoying, but a pin is only as strong as the piece behind it.",
          fen: 'rn1qkbnr/ppp2ppp/3p4/4p3/2B1P1b1/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 3 4',
          arrows: [['g4', 'd1']],
          highlights: ['f3', 'd1']
        },
        {
          type: 'puzzle',
          title: 'The trap you prepared',
          prompt: "Black has just played 4...g6?. White to move: break the pin and win material.",
          fen: 'rn1qkbnr/ppp2p1p/3p2p1/4p3/2B1P1b1/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5',
          solution: ['f3e5'],
          accept: [['f3e5']],
          hint: "The knight is pinned to the queen, not to the king.",
          explanation: "Nxe5! ignores the pin. If 5...Bxd1, then 6.Bxf7+ Ke7 7.Nd5 is mate: this is Legal's mate. If 5...dxe5, 6.Qxg4 and White has won a pawn with a good position. A player who has prepared the opening knows this pattern and plays it in seconds.",
          wrong: {
            'h2h3': "h3 asks the bishop a question, but it is slow. Black can still play ...Bxf3 or retreat, and nothing is won.",
            'c4f7': "Bxf7+? Kxf7 Ng5+ Qxg5 and you have simply lost a piece."
          }
        }
      ]
    },

    {
      id: 'practical-7',
      category: 'practical',
      side: 'both',
      title: 'Analysing your own games',
      level: 'Intermediate',
      minutes: 7,
      objective: "Review your games honestly: find the critical moments and the moves you missed.",
      summary: "The fastest way to improve is to study your own mistakes before you check them with an engine.",
      prerequisites: ['practical-1'],
      related: { lessons: ['practical-1', 'practical-6'] },
      steps: [
        {
          type: 'read',
          title: 'A simple review routine',
          text: "After a game, first go through it on your own, with no engine. Write down what you were thinking at the key moments, especially where you spent a lot of time or where the evaluation changed. Only then check with an engine, and ask why you missed what it shows. The patterns you miss in your own games are the ones you most need to learn. This position comes from such a review: White played a quiet move here.",
          fen: 'rnbq2k1/pp3ppp/2p1p3/8/8/3B1N2/PPP2PPP/3R1RK1 w - - 0 1',
          arrows: [],
          highlights: []
        },
        {
          type: 'puzzle',
          title: 'What did you miss?',
          prompt: "White to move. In the game White played a quiet move. Find the tactic that was missed.",
          fen: 'rnbq2k1/pp3ppp/2p1p3/8/8/3B1N2/PPP2PPP/3R1RK1 w - - 0 1',
          solution: ['d3h7'],
          accept: [['d3h7']],
          hint: "Your rook and the black queen are on the same file, with only your bishop between them.",
          explanation: "Bxh7+ is a discovered attack: the bishop moves with check, and the rook on d1 now attacks the queen on d8. Black must answer the check, and Rxd8 wins the queen. In your review, note the pattern (a piece in front of a rook or bishop, aimed at something valuable) so you spot it next time.",
          wrong: {
            'd3e4': "Be4 also uncovers the rook, but without check: Black just moves the queen.",
            'f3e5': "Ne5 is a decent move, but you missed winning the queen."
          }
        }
      ]
    },

    {
      id: 'practical-8',
      category: 'practical',
      side: 'both',
      title: 'Offering and accepting draws',
      level: 'Advanced',
      minutes: 6,
      objective: "Before you accept or offer a draw, check honestly whether either side still has real winning chances.",
      summary: "A draw offer is a decision about the position, not about your mood: look before you shake hands.",
      prerequisites: ['endgames-2', 'practical-1'],
      related: { lessons: ['endgames-2', 'endgames-5', 'endgames-9'] },
      steps: [
        {
          type: 'read',
          title: 'When a draw is a draw',
          text: "Some positions are dead draws, and accepting a draw there saves energy. This king against king and rook's pawn ending is one: Black's king is in the corner and can never be driven out. Other positions only look drawn. Before you accept an offer, spend a minute on two questions: can I win without risk, and can I lose? Your tournament situation matters too, but never accept without looking. To offer one: make your move, offer the draw, then press your clock.",
          fen: 'k7/8/1K6/P7/8/8/8/8 w - - 0 1',
          arrows: [],
          highlights: ['a8']
        },
        {
          type: 'puzzle',
          title: 'Look before you shake hands',
          prompt: "Black has offered a draw in this rook ending. White to move: is there a win? Find it.",
          fen: 'R7/P4k2/8/8/8/6K1/r7/8 w - - 0 1',
          solution: ['a8h8'],
          accept: [['a8h8']],
          hint: "Black's king is on f7, not on its safe squares g7 or h7. What if your rook leaves a8 with a threat?",
          explanation: "Rh8! threatens a8=Q. If ...Rxa7, Rh7+ skewers king and rook. If ...Kg7 attacks the rook, a8=Q Rxa8 Rxa8 wins, and spite checks only delay this. With the king on g7 or h7 the trick fails and it is a draw. Had you shaken hands, you would never have found out.",
          wrong: {
            'g3f4': "Kf4? Kg7! The king reaches a safe square, and the rook behind the pawn holds: a known draw.",
            'a8b8': "Rb8? Rxa7, and Rb7+ is met by ...Rxb7. Leave a8 only with a real threat."
          }
        }
      ]
    },

    {
      id: 'practical-9',
      category: 'practical',
      side: 'both',
      title: 'Swindles: resourcefulness when lost',
      level: 'Advanced',
      minutes: 6,
      objective: "When the position is lost, look for stalemate, perpetual check and other last-chance resources.",
      summary: "A lost position is not lost until the game ends: hunt for stalemate and perpetual check.",
      prerequisites: ['endgames-3', 'practical-4'],
      related: { lessons: ['endgames-5', 'endgames-10', 'practical-4'] },
      steps: [
        {
          type: 'read',
          title: 'Make it difficult',
          text: "When you are lost, set problems instead of resigning. Keep pieces on, create threats, and look for drawing tricks: perpetual check, a fortress, or stalemate. Stalemate tricks work when your king has no legal moves: then giving away your last active piece can leave you with no move at all. This is the puzzle position without Black's queen: the king on h8 is stuck, because g8 and g7 are covered and the h7 pawn is blocked.",
          fen: '7k/R6p/4Q2P/8/8/8/3B2PP/7K w - - 0 1',
          arrows: [],
          highlights: ['h8', 'g8', 'g7']
        },
        {
          type: 'puzzle',
          title: 'The last trick',
          prompt: "Black to move. You are a rook and more behind. Find the move that saves half a point.",
          fen: '7k/R6p/4Q2P/2q5/8/8/3B2PP/7K b - - 0 1',
          solution: ['c5g1'],
          accept: [['c5g1']],
          hint: "If your queen disappears, can Black move at all?",
          explanation: "...Qg1+! White's only legal move is Kxg1, and then Black has no legal move and is not in check: stalemate, a draw. Your king on h8 is boxed in and the h7 pawn is blocked, so the queen was your only piece that could move. Always ask whether your king is stalemated before you resign.",
          wrong: {
            'c5c1': "...Qc1+? Bxc1. The bishop takes, and you are simply lost.",
            'c5f8': "...Qf8 defends for a moment, but you remain hopelessly behind. Look for something drastic."
          }
        }
      ]
    }
  ],

  glossary: [
    { term: 'Key squares', definition: "Squares that win a king and pawn ending as soon as the attacking king reaches one, whoever is to move." },
    { term: 'Outside passed pawn', definition: "A passed pawn far away from the other pawns, used to pull the enemy king to one side of the board." },
    { term: 'Protected passed pawn', definition: "A passed pawn defended by another pawn, so the enemy king cannot capture it." },
    { term: 'Hanging pawns', definition: "Two pawns side by side, usually on c5 and d5 (or c4 and d4), with no friendly pawns on the files next to them." },
    { term: 'Minority attack', definition: "Advancing two pawns against three on one wing, as in the Carlsbad structure, to create a weakness in the enemy pawns." },
    { term: 'Wrong-coloured bishop', definition: "A bishop that cannot control the queening square of its own rook's pawn; with the defending king in the corner, the ending is a draw." },
    { term: 'Philidor position', definition: "A drawing set-up against rook and pawn: king on the queening square, rook on its own third rank, then checks from behind once the pawn advances." }
  ]
}]);
