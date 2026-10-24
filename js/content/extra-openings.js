/* The Quiet Gambit - extra opening lessons: one lesson each for repertoire entries that had none
 * (Scandinavian, Pirc and Trompowsky for White; Scandinavian, Pirc, Alekhine, Leningrad Dutch,
 * anti-Colle and anti-Trompowsky for Black). Data only. Checked by tools/check-content.js. */
window.QG_PARTS = (window.QG_PARTS || []).concat([{
  source: 'extra-openings',
  lessons: [

    /* ------------------------------------------------------------ WHITE */
    {
      id: 'white-openings-12',
      category: 'white-openings',
      side: 'white',
      title: 'Scandinavian: develop with tempo',
      level: 'Beginner',
      minutes: 5,
      objective: 'Answer 2...Qxd5 by developing a piece with gain of time, then set up the Bd2 and knight-jump ideas.',
      summary: "Against the Scandinavian, Nc3 develops a piece and chases Black's queen at the same time.",
      prerequisites: ['openings-1'],
      related: { openings: ['w-scandinavian'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'An early queen',
          fen: 'rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2',
          text: "In the Scandinavian Defence Black challenges e4 at once with 1...d5. The simplest reply is 2.exd5. After 2...Qxd5 Black's queen stands in the centre very early, where White's pieces can attack it. Every time it has to move again, White gains a tempo, a move's worth of time, for development.",
          arrows: [['e4', 'd5']],
          highlights: ['d5']
        },
        {
          type: 'puzzle',
          title: 'Chase the queen',
          fen: 'rnb1kbnr/ppp1pppp/8/3q4/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3',
          prompt: 'White to move: develop a piece and attack the queen at the same time.',
          solution: ['b1c3'],
          accept: [['b1c3']],
          hint: 'Look for a knight move that eyes the d5 square.',
          explanation: '3.Nc3! develops a knight and attacks the queen, so Black must spend another move on it. The main reply is 3...Qa5, while 3...Qd6 and 3...Qd8 are also played. White follows with d4 and Nf3 and is ahead in development, with a free and comfortable position.',
          wrong: {
            'f1c4': 'The bishop also attacks the queen, but nothing defends c4: 3...Qxc4 wins a piece.',
            'c2c4': 'It does hit the queen, but it develops nothing and weakens the d4 square. White would rather bring a piece out.'
          }
        },
        {
          type: 'line',
          title: 'The main line',
          fen: 'rnb1kbnr/ppp1pppp/8/3q4/8/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 3',
          text: 'Notice how every White move develops a piece or claims the centre.',
          moves: [
            { uci: 'd5a5', san: 'Qa5', note: 'The most popular retreat.' },
            { uci: 'd2d4', san: 'd4', note: 'Now the queen on a5 pins the c3 knight to the king.' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c7c6', san: 'c6', note: 'Black gives the queen a retreat on c7 and covers b5 and d5.' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'c8f5', san: 'Bf5' },
            { uci: 'c1d2', san: 'Bd2', note: 'Breaks the pin. Now a knight jump to d5 or b5 uncovers an attack on the queen.' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'd1e2', san: 'Qe2', note: 'Prepares O-O-O and the d-file; White has the freer game.' }
          ]
        }
      ]
    },
    {
      id: 'white-openings-13',
      category: 'white-openings',
      side: 'white',
      title: 'Pirc Classical: meet ...e5 with d5',
      level: 'Intermediate',
      minutes: 6,
      objective: "Handle ...Bg4 with Be3 and Qd2, and answer Black's ...e5 break by closing the centre with d5.",
      summary: 'In the Classical Pirc, calm development keeps d4 safe; when Black strikes with ...e5, d5 gains space with tempo.',
      prerequisites: ['openings-1'],
      related: { openings: ['w-pirc-classical'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'Pressure on d4',
          fen: 'rn1q1rk1/ppp1ppbp/3p1np1/8/3PP1b1/2N2N2/PPP1BPPP/R1BQ1RK1 w - - 6 7',
          text: "The Classical System: White has developed calmly with Nf3, Be2 and O-O. Black's 6...Bg4 attacks the f3 knight, one of d4's defenders; ...Bxf3 followed by ...Nc6 would put real pressure on d4. White answers with Be3 and Qd2: the bishop guards d4 a second time and the queen connects the rooks.",
          arrows: [['c1', 'e3']],
          highlights: ['d4', 'f3']
        },
        {
          type: 'line',
          title: 'Black prepares ...e5',
          fen: 'rn1q1rk1/ppp1ppbp/3p1np1/8/3PP1b1/2N2N2/PPP1BPPP/R1BQ1RK1 w - - 6 7',
          moves: [
            { uci: 'c1e3', san: 'Be3', note: 'Defends d4 again.' },
            { uci: 'b8c6', san: 'Nc6', note: 'More pressure on d4, and ...e5 is coming.' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'e7e5', san: 'e5', note: "Black's central break. How should White react?" }
          ]
        },
        {
          type: 'puzzle',
          title: 'Close the centre',
          fen: 'r2q1rk1/ppp2pbp/2np1np1/4p3/3PP1b1/2N1BN2/PPPQBPPP/R4RK1 w - e6 0 9',
          prompt: 'White to move: close the centre and gain time by attacking the c6 knight.',
          solution: ['d4d5'],
          accept: [['d4d5']],
          hint: 'Look at the pawn that Black has just attacked.',
          explanation: "9.d5! gains space and attacks the knight, which usually retreats with 9...Ne7. The centre is now closed, the g7 bishop bites on its own e5 pawn, and White keeps the extra space for the middlegame. Black's counterplay usually comes from ...Nd7 and ...f5, so White should keep an eye on the kingside.",
          wrong: {
            'd4e5': 'Playable, but it releases the tension: after 9...dxe5 the centre is open and level, and your space advantage has gone.',
            'h2h3': 'Asking the bishop is a normal idea, but here Black can reply 9...exd4, and after the recaptures your big centre has gone.'
          }
        }
      ]
    },
    {
      id: 'white-openings-14',
      category: 'white-openings',
      side: 'white',
      title: 'Trompowsky: when ...h6 asks, take on f6',
      level: 'Intermediate',
      minutes: 6,
      objective: 'Build a centre with e4 against 2...e6, and know why Bxf6 is the right answer to ...h6.',
      summary: 'Against 2...e6 White builds a centre with e4; when Black asks the bishop with ...h6, Bxf6 keeps the e4 pawn safe.',
      related: { openings: ['w-trompowsky'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'Pin and centre',
          fen: 'rnbqkb1r/pppp1ppp/4pn2/6B1/3P4/8/PPP1PPPP/RN1QKBNR w KQkq - 0 3',
          text: "After 1.d4 Nf6 2.Bg5 e6 Black is ready to recapture on f6 with the queen, so Bxf6 no longer doubles the pawns. Instead the pin makes a quick 3.e4 possible (3...Nxe4?? 4.Bxd8), and a later e5 would hit the pinned knight awkwardly. White aims for a broad centre; Black usually ends up with the bishop pair.",
          arrows: [['e2', 'e4']],
          highlights: ['f6', 'd8']
        },
        {
          type: 'line',
          title: 'Black asks the question',
          fen: 'rnbqkb1r/pppp1ppp/4pn2/6B1/3P4/8/PPP1PPPP/RN1QKBNR w KQkq - 0 3',
          moves: [
            { uci: 'e2e4', san: 'e4', note: 'Takes the centre; e5 is the next idea.' },
            { uci: 'h7h6', san: 'h6', note: 'Black makes the bishop decide at once.' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Keep e4 safe',
          fen: 'rnbqkb1r/pppp1pp1/4pn1p/6B1/3PP3/8/PPP2PPP/RN1QKBNR w KQkq - 0 4',
          prompt: 'White to move: the bishop is attacked. Which move keeps your e4 pawn safe?',
          solution: ['g5f6'],
          accept: [['g5f6']],
          hint: 'If the bishop retreats, the f6 knight is free to take on e4. Remove that knight first.',
          explanation: "4.Bxf6! Qxf6 5.Nc3 is the main line: White has a broad centre and quick development, Black has the bishop pair. The tempting retreat 4.Bh4 fails to 4...g5 5.Bg3 Nxe4, because the pin is broken and nothing defends e4, so Black has won a pawn and White's compensation is doubtful.",
          wrong: {
            'g5h4': '4...g5 5.Bg3 Nxe4: the pin is broken and Black grabs the e4 pawn.',
            'b1c3': 'Nc3 defends e4, but the bishop is still attacked: 4...hxg5 wins a piece.',
            'e4e5': '4...hxg5 5.exf6 Qxf6: the pieces are traded, but Black has won a pawn.'
          }
        }
      ]
    },

    /* ------------------------------------------------------------ BLACK VS 1.e4 */
    {
      id: 'black-vs-e4-10',
      category: 'black-vs-e4',
      side: 'black',
      title: 'Scandinavian: ...c6 keeps the queen safe',
      level: 'Beginner',
      minutes: 5,
      objective: 'Choose a safe square for the queen after 3.Nc3, and use ...c6 to stop knight jumps against it.',
      summary: "After 3...Qa5, the quiet ...c6 gives the queen a retreat and takes b5 and d5 from White's knight.",
      prerequisites: ['openings-1'],
      related: { openings: ['b-scandinavian'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'Where does the queen go?',
          fen: 'rnb1kbnr/ppp1pppp/8/3q4/8/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 3',
          orientation: 'b',
          text: "After 1.e4 d5 2.exd5 Qxd5 3.Nc3 the queen must move again. The main squares are a5, d6 and d8, away from White's knights and pawns. In this repertoire Black plays 3...Qa5: the queen stays active, and once White plays d4 it pins the c3 knight to the king.",
          arrows: [['d5', 'a5'], ['d5', 'd6'], ['d5', 'd8']]
        },
        {
          type: 'line',
          title: 'Into the main line',
          fen: 'rnb1kbnr/ppp1pppp/8/3q4/8/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 3',
          orientation: 'b',
          moves: [
            { uci: 'd5a5', san: 'Qa5', note: "Out of the way of White's pieces." },
            { uci: 'd2d4', san: 'd4', note: 'Now the c3 knight is pinned.' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'g1f3', san: 'Nf3', note: "Later, White's c3 knight would love to jump to b5 or d5." }
          ]
        },
        {
          type: 'puzzle',
          title: 'One quiet pawn move',
          fen: 'rnb1kb1r/ppp1pppp/5n2/q7/3P4/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 2 5',
          prompt: 'Black to move: which pawn move covers b5 and d5 and gives your queen a retreat?',
          solution: ['c7c6'],
          accept: [['c7c6']],
          hint: 'Which pawn, moved one square, attacks both b5 and d5?',
          explanation: '5...c6! takes b5 and d5 from the c3 knight and frees the c7 square, so the queen on a5 always has a way home. Next come ...Bf5 (or ...Bg4), ...e6 and castling: a solid, Caro-Kann-like set-up. Even so, keep watching for Bd2 combined with a knight jump, which uncovers an attack on the queen.',
          wrong: {
            'a7a6': 'This covers b5 but not d5, and the queen still has no retreat on c7.',
            'e7e6': 'Useful later, but it covers only d5, and it shuts in the c8 bishop before it has come out to f5 or g4.'
          }
        },
        {
          type: 'line',
          title: 'A solid set-up',
          fen: 'rnb1kb1r/ppp1pppp/5n2/q7/3P4/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 2 5',
          orientation: 'b',
          moves: [
            { uci: 'c7c6', san: 'c6', note: 'The safety move.' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'c8f5', san: 'Bf5', note: 'Developed outside the pawn chain, as in the Caro-Kann.' },
            { uci: 'c1d2', san: 'Bd2', note: 'Watch out: a knight jump from c3 would now uncover an attack on the queen.' },
            { uci: 'e7e6', san: 'e6', note: 'Next come ...Bb4 or ...Be7, ...Nbd7 and castling.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-e4-11',
      category: 'black-vs-e4',
      side: 'black',
      title: 'Pirc Austrian: hit the base with ...c5',
      level: 'Intermediate',
      minutes: 7,
      objective: "Recognise when the Austrian Attack's pawns have advanced, and strike at d4 with ...c5.",
      summary: "Against the Austrian Attack's e5 push, Black undermines White's pawn chain at its base.",
      related: { openings: ['b-pirc'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'Three pawns abreast',
          fen: 'rnbqkb1r/ppp1pp1p/3p1np1/8/3PPP2/2N5/PPP3PP/R1BQKBNR b KQkq f3 0 4',
          orientation: 'b',
          text: "The Austrian Attack, 4.f4, is White's most ambitious answer to the Pirc: three pawns side by side, ready to push e5 and drive the f6 knight away. Black cannot stop this, so the plan is to make the big centre a target. A pawn chain is weakest at its base, the rear pawn that holds the others up. Here that will be d4.",
          highlights: ['d4', 'e4', 'f4']
        },
        {
          type: 'line',
          title: 'White pushes e5',
          fen: 'rnbqkb1r/ppp1pp1p/3p1np1/8/3PPP2/2N5/PPP3PP/R1BQKBNR b KQkq f3 0 4',
          orientation: 'b',
          moves: [
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e4e5', san: 'e5', note: 'Gains space and kicks the knight.' },
            { uci: 'f6d7', san: 'Nfd7', note: 'The knight steps back, but it still eyes c5 and e5.' },
            { uci: 'h2h4', san: 'h4', note: 'White wants h5 to open the h-file against your king.' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Strike at the base',
          fen: 'rnbq1rk1/pppnppbp/3p2p1/4P3/3P1P1P/2N2N2/PPP3P1/R1BQKB1R b KQ h3 0 7',
          prompt: "Black to move: strike at d4, the base of White's pawn chain.",
          solution: ['c7c5'],
          accept: [['c7c5']],
          hint: 'Which of your pawns can attack d4 in one move?',
          explanation: '7...c5! attacks d4 at once. If the d-pawn goes, e5 loses its support and the long diagonal starts to open for the g7 bishop. A known continuation is 8.h5 cxd4 9.Qxd4 dxe5, when Black has broken up the centre and has real counterplay, though the position stays sharp. Slow moves would let White attack on the h-file with no central worries.',
          wrong: {
            'd6e5': 'This hits e5, not the base. White recaptures with the f- or d-pawn and keeps a strong pawn on e5, while h4-h5 continues.',
            'd7b6': 'Too slow: it does nothing against the centre, and 8.h5 opens lines towards your king.'
          }
        }
      ]
    },
    {
      id: 'black-vs-e4-12',
      category: 'black-vs-e4',
      side: 'black',
      title: 'Alekhine: attack the overextended centre',
      level: 'Intermediate',
      minutes: 6,
      objective: "Meet the Four Pawns Attack by opening the centre and hitting White's advanced pawns with your pieces.",
      summary: "White's pawns chased the knight; now Black develops with tempo against them.",
      related: { openings: ['b-alekhine'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'Chased, but not lost',
          fen: 'rnbqkb1r/ppp1pppp/1n1p4/4P3/2PP4/8/PP3PPP/RNBQKBNR w KQkq - 1 5',
          orientation: 'b',
          text: "In the Alekhine Defence Black's knight has been chased from f6 to d5 and on to b6, and White has a big centre. That is the plan, not a disaster: every pawn that advances leaves squares behind it and needs protecting. With 5.f4, the Four Pawns Attack, White grabs the most space of all, and Black's task is to attack those pawns with pieces.",
          highlights: ['c4', 'd4', 'e5']
        },
        {
          type: 'line',
          title: 'The Four Pawns Attack',
          fen: 'rnbqkb1r/ppp1pppp/1n1p4/4P3/2PP4/8/PP3PPP/RNBQKBNR w KQkq - 1 5',
          orientation: 'b',
          moves: [
            { uci: 'f2f4', san: 'f4', note: 'Four pawns abreast: impressive, but hard to keep defended.' },
            { uci: 'd6e5', san: 'dxe5', note: "Opens the d-file and clears the way for Black's pieces." },
            { uci: 'f4e5', san: 'fxe5', note: 'Black to move: which piece joins the attack?' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Two targets at once',
          fen: 'rnbqkb1r/ppp1pppp/1n6/4P3/2PP4/8/PP4PP/RNBQKBNR b KQkq - 0 6',
          prompt: "Black to move: develop a piece that attacks two of White's centre pawns at once.",
          solution: ['b8c6'],
          accept: [['b8c6']],
          hint: 'A developing move on the queenside can hit two pawns.',
          explanation: '6...Nc6! develops and attacks d4 and e5 together. The usual continuation is 7.Be3 Bf5 8.Nc3 e6: Black has developed quickly, the f5 bishop controls e4 and b1, and the white centre needs constant care. Every white move spent defending pawns is a move not spent on development.',
          wrong: {
            'b6c4': 'The c4 pawn is defended: 7.Bxc4 wins your knight for a pawn.',
            'd8d4': "The d4 pawn is defended by White's queen: 7.Qxd4 wins your queen."
          }
        }
      ]
    },

    /* ------------------------------------------------------------ BLACK VS 1.d4 */
    {
      id: 'black-vs-d4-10',
      category: 'black-vs-d4',
      side: 'black',
      title: 'Leningrad Dutch: ...Qe8 prepares ...e5',
      level: 'Advanced',
      minutes: 8,
      objective: 'Prepare the ...e5 break in the Leningrad with ...Qe8, and know the ...a5 and ...Na6 plan if White answers d5.',
      summary: "In the Leningrad, ...e5 frees Black's game, but it needs preparing so that the queens stay on.",
      related: { openings: ['b-dutch-leningrad'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'Dutch pawns, Indian bishop',
          fen: 'rnbqkb1r/ppppp2p/5np1/5p2/3P4/6P1/PPP1PPBP/RNBQK1NR w KQkq - 0 4',
          orientation: 'b',
          text: "The Leningrad Dutch combines ...f5, which controls e4, with a King's Indian fianchetto. Black follows with ...Bg7, ...O-O and ...d6. The key freeing move is ...e5: it gains central space and, once the f6 knight moves, opens the long diagonal for the g7 bishop. The price of ...f5 is a weak e6 square and an open e8-h5 diagonal, so Black must play energetically.",
          highlights: ['e4', 'e5']
        },
        {
          type: 'puzzle',
          title: 'Prepare the break',
          fen: 'rnbq1rk1/ppp1p1bp/3p1np1/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b - - 1 7',
          prompt: 'Black to move: which queen move prepares ...e5, so that dxe5 dxe5 would not trade queens?',
          solution: ['d8e8'],
          accept: [['d8e8']],
          hint: 'Support the e-pawn from behind, and get off the d-file.',
          explanation: "7...Qe8! leaves the d-file and backs up ...e5 from behind, so dxe5 dxe5 keeps the queens on and e5 defended. The queen can also swing to f7 or h5 for kingside play. ...e5 is not yet a threat to anything, so White often answers 8.d5, gaining space but giving up control of the c5 square for good.",
          wrong: {
            'e7e5': 'Too early: 8.dxe5 dxe5 9.Qxd8 Rxd8 10.Nxe5 trades queens and wins a pawn, because the f6 knight blocks the g7 bishop from defending e5. ...Ne4 tricks do not save it (11.Nxe4 fxe4 12.f4), and your attacking chances are gone.',
            'd8d7': 'The queen blocks the c8 bishop, and after ...e5, dxe5 dxe5 Qxd7 still trades queens.'
          }
        },
        {
          type: 'line',
          title: 'If White closes with d5',
          fen: 'rnbq1rk1/ppp1p1bp/3p1np1/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b - - 1 7',
          orientation: 'b',
          text: "Against d5, the c5 square becomes Black's: ...a5 stops b4, and ...Na6-c5 follows. Against quieter moves, Black is ready for ...e5.",
          moves: [
            { uci: 'd8e8', san: 'Qe8', note: 'Prepares ...e5; later the queen may go to f7 or h5.' },
            { uci: 'd4d5', san: 'd5', note: 'White gains space and eyes the weak e6 square.' },
            { uci: 'a7a5', san: 'a5', note: 'Stops b4, so a knight on c5 (after ...Na6) cannot be chased by a pawn.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-d4-11',
      category: 'black-vs-d4',
      side: 'black',
      title: 'Colle: defuse the e4-e5 fork',
      level: 'Beginner',
      minutes: 6,
      objective: "Spot the e4-e5 fork threat in the Colle and meet White's e4 with an exchange in the centre.",
      summary: 'When White plays e4 in the Colle, exchange pawns before e5 can fork your bishop and knight.',
      related: { openings: ['b-vs-colle'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: "White's one break",
          fen: 'r1bq1rk1/pp3ppp/2nbpn2/2pp4/3P4/2PBPN2/PP1N1PPP/R1BQ1RK1 w - - 5 8',
          orientation: 'b',
          text: "A typical Colle: Black has hit d4 with ...c5, developed with ...Nc6 and ...Bd6, and castled, keeping the f6 knight to guard h7 against the d3 bishop. White's whole plan is the e3-e4 break. Look at the d6 bishop and the f6 knight: a white pawn arriving on e5 would attack both at once.",
          arrows: [['e3', 'e4']],
          highlights: ['d6', 'f6', 'e5']
        },
        {
          type: 'puzzle',
          title: 'Before the fork',
          fen: 'r1bq1rk1/pp3ppp/2nbpn2/2pp4/3PP3/2PB1N2/PP1N1PPP/R1BQ1RK1 b - - 0 8',
          prompt: 'White has played 8.e4, threatening e5. Black to move: defuse it with a pawn exchange.',
          solution: ['c5d4'],
          accept: [['c5d4'], ['d5e4']],
          hint: 'Exchange a pawn so that e5 is no longer possible, or no longer dangerous.',
          explanation: 'Both central exchanges work. After 8...cxd4 9.cxd4 dxe4 10.Nxe4, White is left with an isolated d-pawn, a pawn with no neighbours on the c- or e-files, and Black has easy play against it. If instead 9.e5?, then 9...Nxe5 wins material, because the d4 pawn no longer defends e5. 8...dxe4 9.Nxe4 is a good alternative.',
          wrong: {
            'h7h6': '9.e5! attacks the d6 bishop and the f6 knight at once, and Black loses material.',
            'b7b6': 'Same problem: 9.e5 forks the bishop and the knight.'
          }
        },
        {
          type: 'line',
          title: 'The exchanges',
          fen: 'r1bq1rk1/pp3ppp/2nbpn2/2pp4/3PP3/2PB1N2/PP1N1PPP/R1BQ1RK1 b - - 0 8',
          orientation: 'b',
          moves: [
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'd5e4', san: 'dxe4', note: 'With the e-pawn gone, the e5 fork can no longer happen.' },
            { uci: 'd2e4', san: 'Nxe4', note: 'White has an isolated d-pawn.' },
            { uci: 'd6e7', san: 'Be7', note: 'Keeps the f6 knight, which guards h7. Black will aim to blockade the d-pawn on d5.' }
          ]
        }
      ]
    },
    {
      id: 'black-vs-d4-12',
      category: 'black-vs-d4',
      side: 'black',
      title: 'Trompowsky: ...h6, then recapture with the queen',
      level: 'Beginner',
      minutes: 5,
      objective: 'After 2...e6 3.e4, make White decide about the bishop with ...h6 and recapture on f6 with the queen.',
      summary: "Against the Trompowsky, ...e6 and ...h6 win the bishop pair and keep Black's pawns healthy.",
      related: { openings: ['b-vs-trompowsky'], gambits: [], lessons: [] },
      steps: [
        {
          type: 'read',
          title: 'The threat of Bxf6',
          fen: 'rnbqkb1r/pppppppp/5n2/6B1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq - 2 2',
          orientation: 'b',
          text: 'The Trompowsky, 2.Bg5, threatens Bxf6: after ...exf6 or ...gxf6 Black would have doubled pawns. The simple answer is 2...e6. Now, if the bishop takes on f6, the queen recaptures and the pawns stay healthy. The e6 pawn also opens a diagonal for the f8 bishop.',
          arrows: [['g5', 'f6']],
          highlights: ['d8']
        },
        {
          type: 'puzzle',
          title: 'Ask the bishop',
          fen: 'rnbqkb1r/pppp1ppp/4pn2/6B1/3PP3/8/PPP2PPP/RN1QKBNR b KQkq e3 0 3',
          prompt: 'White has built a centre with 3.e4. Black to move: make the bishop decide now.',
          solution: ['h7h6', 'g5f6', 'd8f6'],
          accept: [['h7h6', 'g5f6', 'd8f6']],
          hint: 'Attack the bishop with a pawn, then recapture on f6 so that your pawns stay healthy.',
          explanation: '3...h6! asks the bishop at once, and after 4.Bxf6 Qxf6 Black has the bishop pair and the dark squares, with a sound pawn structure. Retreating is worse for White: 4.Bh4? g5 5.Bg3 Nxe4 wins the e4 pawn, because the pin has been broken. Recapturing with ...gxf6 is possible, but it leaves doubled pawns.',
          wrong: {
            'f6e4': 'The knight is pinned to your queen: 4.Bxd8 wins your queen for a bishop.',
            'f8e7': 'Solid, but it does not ask the bishop anything: White keeps the choice and develops at leisure.'
          }
        },
        {
          type: 'line',
          title: 'Typical development',
          fen: 'rnb1kb1r/pppp1pp1/4pq1p/8/3PP3/8/PPP2PPP/RN1QKBNR w KQkq - 0 5',
          orientation: 'b',
          text: 'Black develops with ...d6 and ...Nc6 or ...Nd7. ...g5 is one typical idea, not the only one.',
          moves: [
            { uci: 'b1c3', san: 'Nc3', note: 'Develops and guards e4.' },
            { uci: 'd7d6', san: 'd6', note: 'Controls e5 and opens the c8 bishop.' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'g7g5', san: 'g5', note: 'Stops f2-f4 and gives the f8 bishop the g7 square.' }
          ]
        }
      ]
    }
  ]
}]);
