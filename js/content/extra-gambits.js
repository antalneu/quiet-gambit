/* The Quiet Gambit - extra gambit lessons: one lesson each for the Urusov, Wing (Sicilian),
 * Blackmar-Diemer, Icelandic, Latvian and Elephant gambits.
 * Data only: appends one part to window.QG_PARTS. Checked by tools/check-content.js. */
window.QG_PARTS = (window.QG_PARTS || []).concat([{
  source: 'extra-gambits',
  lessons: [

    /* ------------------------------------------------ WHITE: URUSOV */
    {
      id: 'white-gambits-10',
      category: 'white-gambits',
      side: 'white',
      title: 'Urusov Gambit: recapture with tempo',
      level: 'Beginner',
      minutes: 5,
      objective: "Recapture in the Urusov Gambit so that you win back material and gain time in the same move.",
      summary: "Why 5.Qxd4 is the key move of the Urusov, and how White follows it up.",
      prerequisites: ['openings-1'],
      related: { gambits: ['wg-urusov'] },
      steps: [
        {
          type: 'read',
          title: 'The offer',
          fen: 'rnbqkb1r/pppp1ppp/5n2/8/2BpP3/5N2/PPP2PPP/RNBQK2R b KQkq - 1 4',
          text: "After 1.e4 e5 2.Bc4 Nf6 3.d4 exd4 4.Nf3, White leaves the e4 pawn hanging. If 4...Nxe4, the knight stands on an open board in front of an uncastled king, and White plans to win back the d4 pawn with gain of time. Black can also sidestep the gambit with 4...Nc6, which leads to the Two Knights Defence.",
          arrows: [['f6', 'e4']],
          highlights: ['d4']
        },
        {
          type: 'puzzle',
          title: 'Two jobs in one move',
          fen: 'rnbqkb1r/pppp1ppp/8/8/2Bpn3/5N2/PPP2PPP/RNBQK2R w KQkq - 0 5',
          prompt: "Black took with 4...Nxe4. White to move: win back a pawn and attack the e4 knight at once.",
          solution: ['d1d4'],
          hint: "Which piece can capture on d4 and also look at e4?",
          explanation: "5.Qxd4! takes back the d4 pawn and hits the undefended knight on e4, so Black must spend another move retreating it, usually 5...Nf6. White is still a pawn down overall, but now develops with Bg5, Nc3 and long castling while Black's king is still in the centre. When ...Nc6 later attacks the queen, it goes to h4.",
          wrong: {
            'f3d4': "5.Nxd4 also wins the pawn back, but it does not touch the e4 knight, so Black gains time to consolidate.",
            'd1e2': "5.Qe2 attacks the knight but takes nothing; 5...d5 defends e4 and hits your c4 bishop."
          }
        },
        {
          type: 'line',
          title: 'The follow-up',
          fen: 'rnbqkb1r/pppp1ppp/5n2/8/2BQ4/5N2/PPP2PPP/RNB1K2R w KQkq - 1 6',
          text: "A typical continuation after 5.Qxd4 Nf6. White pins, develops and castles long, a pawn down but well ahead in development. Black's exact moves vary; 7...c6 and 7...Nc6 are also played.",
          moves: [
            { uci: 'c1g5', san: 'Bg5', note: "Pins the f6 knight and clears the way for long castling." },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1c1', san: 'O-O-O', note: "The rook arrives on d1 at once; the kings are on opposite sides." },
            { uci: 'b8c6', san: 'Nc6', note: "Develops with an attack on the queen." },
            { uci: 'd4h4', san: 'Qh4', note: "The queen joins the g5 bishop against f6 and eyes h7." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ WHITE: WING GAMBIT */
    {
      id: 'white-gambits-11',
      category: 'white-gambits',
      side: 'white',
      title: 'Wing Gambit: the early axb4 trap',
      level: 'Intermediate',
      minutes: 6,
      objective: "Recognise the queen fork that punishes an early axb4 in the Wing Gambit and choose the safe move order.",
      summary: "An objectively dubious gambit with one trap White must avoid: recapturing on b4 too soon.",
      prerequisites: ['tactics-1'],
      related: { gambits: ['wg-wing-sicilian'] },
      steps: [
        {
          type: 'read',
          title: 'A wing pawn for the centre',
          fen: 'rnbqkbnr/pp1ppppp/8/2p5/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq - 0 2',
          text: "1.e4 c5 2.b4 offers a wing pawn to drag Black's c-pawn away from d4, hoping for a big centre and open a- and b-files. Be honest about it: the Wing Gambit is objectively dubious. Black's best answer is to take and then strike with ...d5, and many sources consider Black at least equal. It is a surprise weapon, and you must know its main pitfall.",
          arrows: [['c5', 'b4']],
          highlights: ['d4']
        },
        {
          type: 'puzzle',
          title: "See it through Black's eyes",
          fen: 'rnb1kbnr/pp2pppp/8/3q4/1P6/8/2PP1PPP/RNBQKBNR b KQkq - 0 5',
          prompt: "After 2...cxb4 3.a3 d5 4.exd5 Qxd5, White grabbed 5.axb4? Black to move: punish it.",
          solution: ['d5e5'],
          hint: "With the a- and b-pawns gone, the long diagonal to a1 is empty. Look for a check that also hits a1.",
          explanation: "5...Qe5+! checks along the open e-file and attacks the a1 rook down the empty long diagonal. The king has no square, so White must block on e2, and 6...Qxa1 wins a whole rook. From White's side the lesson is simple: after 4...Qxd5, play 5.Nf3 first, covering both e5 and d4.",
          wrong: {
            'd5e4': "5...Qe4+ is also check, but it does not attack a1, so White blocks and keeps the rook.",
            'd5d4': "5...Qd4 attacks a1 but is not check; 6.c3 blocks the diagonal and hits the queen."
          }
        },
        {
          type: 'line',
          title: 'The safe move order',
          fen: 'start',
          text: "The line from the gambit page. White develops first and takes on b4 only when ...Qe5+ is no longer possible. Even so, Black is comfortable, which is why this is a surprise weapon rather than a main line.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'b2b4', san: 'b4', note: "The offer: the c-pawn is lured away from d4." },
            { uci: 'c5b4', san: 'cxb4' },
            { uci: 'a2a3', san: 'a3', note: "Offers to open the a-file as well." },
            { uci: 'd7d5', san: 'd5', note: "The principled answer: hit e4 at once." },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'd8d5', san: 'Qxd5' },
            { uci: 'g1f3', san: 'Nf3', note: "The knight covers e5 and d4, the squares the queen needs for the fork." },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'a3b4', san: 'axb4', note: "Now safe: Black's own pawn stands on e5." },
            { uci: 'f8b4', san: 'Bxb4' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'b4e7', san: 'Be7' },
            { uci: 'd2d4', san: 'd4', note: "White gets central play at last, but Black is comfortable." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ WHITE: BLACKMAR-DIEMER */
    {
      id: 'white-gambits-12',
      category: 'white-gambits',
      side: 'white',
      title: 'Blackmar-Diemer: the f-file and h7',
      level: 'Intermediate',
      minutes: 7,
      objective: "Use the half-open f-file to remove the knight that guards h7 in a typical Blackmar-Diemer attack.",
      summary: "The half-open f-file is the gambit's main asset; see how it can turn into a quick attack on h7.",
      prerequisites: ['middlegames-2'],
      related: { gambits: ['wg-blackmar-diemer'] },
      steps: [
        {
          type: 'read',
          title: 'A second pawn for an open file',
          fen: 'rnbqkb1r/ppp1pppp/5n2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR b KQkq - 0 4',
          text: "After 1.d4 d5 2.e4 dxe4 3.Nc3 Nf6 4.f3, White offers a pawn to open lines. If 4...exf3 5.Nxf3, White is a pawn down but has a half-open f-file, quick development and kingside chances. Its soundness is disputed: most strong players think Black is fine or better with calm, accurate play, so treat it as a weapon for players who know it well.",
          arrows: [['e4', 'f3']],
          highlights: ['f6']
        },
        {
          type: 'line',
          title: "Black's calm reply",
          fen: 'rnbqkb1r/ppp1pppp/5n2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR b KQkq - 0 4',
          text: "The Teichmann Defence is one of Black's sensible answers: trade off the f3 knight, then build a solid wall with ...c6 and ...e6. White keeps the bishop pair and the f-file.",
          moves: [
            { uci: 'e4f3', san: 'exf3' },
            { uci: 'g1f3', san: 'Nxf3' },
            { uci: 'c8g4', san: 'Bg4', note: "Black plans to remove one of White's best attackers." },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'g4f3', san: 'Bxf3' },
            { uci: 'd1f3', san: 'Qxf3', note: "The queen eyes b7 and the f-file; White has the two bishops." },
            { uci: 'c7c6', san: 'c6', note: "Shuts the long diagonal so b7 is safe." },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1d3', san: 'Bd3', note: "The bishop aims at h7; the f-file and this diagonal are White's main weapons." }
          ]
        },
        {
          type: 'puzzle',
          title: 'Remove the guard',
          fen: 'rn3rk1/ppq2ppp/2pbpn2/8/3P3Q/2NBB2P/PPP3P1/R4RK1 w - - 0 13',
          prompt: "Illustrative position. White to move: the f6 knight is the only guard of h7. Win.",
          solution: ['f1f6', 'g7f6', 'h4h7'],
          hint: "Your rook on the half-open f-file can take on f6. What happens to h7 if Black recaptures?",
          explanation: "13.Rxf6! removes the only defender of h7. If 13...gxf6, 14.Qxh7 is mate, because the d3 bishop supports the queen. If Black stops the mate with 13...g6 or 13...h6, White is simply a knight up (after ...h6 the rook steps back), and a check such as 13...Bh2+ 14.Kh1 changes nothing. This is an illustrative position, but the rook capture on f6 is a classic Blackmar-Diemer theme.",
          wrong: {
            'd3h7': "13.Bxh7+? Nxh7: you have given a bishop for a pawn, and the knight on h7 still shields the king.",
            'h4h7': "13.Qxh7+?? Nxh7: the f6 knight still guards h7.",
            'h4f6': "13.Qxf6?? gxf6 just loses the queen; use the rook, the cheaper piece."
          }
        }
      ]
    },

    /* ------------------------------------------------ BLACK: ICELANDIC */
    {
      id: 'black-gambits-10',
      category: 'black-gambits',
      side: 'black',
      title: 'Icelandic Gambit: the pin on c3',
      level: 'Intermediate',
      minutes: 7,
      objective: "Use the ...Bb4+ pin in the Icelandic Gambit to win material when White develops carelessly.",
      summary: "Black's lead in development creates tactics; here a pinned knight on c3 costs White the exchange (a rook for a minor piece).",
      prerequisites: ['tactics-1', 'tactics-2'],
      related: { gambits: ['bg-icelandic'] },
      steps: [
        {
          type: 'read',
          title: 'A pawn for time',
          orientation: 'b',
          fen: 'rn1qkb1r/ppp2ppp/4bn2/8/2P5/8/PP1P1PPP/RNBQKBNR w KQkq - 0 5',
          text: "After 1.e4 d5 2.exd5 Nf6 3.c4 e6 4.dxe6 Bxe6, Black is a pawn down but has two pieces out, open lines for both bishops and a target on c4. Be realistic: with careful development (Nf3, Be2, O-O) White keeps the pawn and stands better. Black's chances are practical: White's centre and king are loose, and natural moves can lose material.",
          arrows: [['e6', 'c4'], ['f8', 'b4']],
          highlights: ['c4']
        },
        {
          type: 'line',
          title: 'A natural move too many',
          orientation: 'b',
          fen: 'rn1qkb1r/ppp2ppp/4bn2/8/2P5/8/PP1P1PPP/RNBQKBNR w KQkq - 0 5',
          text: "Here White plays the natural 5.d4 and blocks the check with the knight. Watch the c3 square.",
          moves: [
            { uci: 'd2d4', san: 'd4', note: "Natural, but it leaves the e1-a5 diagonal open." },
            { uci: 'f8b4', san: 'Bb4+', note: "Check: if the knight blocks, it is pinned to the king." },
            { uci: 'b1c3', san: 'Nc3', note: "Blocking with 6.Bd2 is more careful." },
            { uci: 'f6e4', san: 'Ne4', note: "Safe, because the pinned c3 knight cannot take it. Black now threatens ...Nxc3." },
            { uci: 'g1f3', san: 'Nf3', note: "A developing move that ignores the threat." }
          ]
        },
        {
          type: 'puzzle',
          title: 'Cash in on the pin',
          fen: 'rn1qk2r/ppp2ppp/4b3/8/1bPPn3/2N2N2/PP3PPP/R1BQKB1R b KQkq - 5 7',
          prompt: "Black to move: exploit the pinned knight on c3 and win material.",
          solution: ['e4c3', 'b2c3', 'b4c3'],
          hint: "Capture on c3 with the knight first. After bxc3, what does the bishop attack from c3?",
          explanation: "7...Nxc3! 8.bxc3 (other moves leave Black a knight up, as the c3 knight also attacks the queen) 8...Bxc3+ forks the king and the a1 rook. After 9.Bd2 Bxa1 10.Qxa1 Black has won the exchange and the pawn back. At move 7 White had to deal with the threat to c3, for example with 7.Qb3 or 7.Qd3.",
          wrong: {
            'b4c3': "7...Bxc3+? gives up the pinning bishop: after 8.bxc3 Nxc3 9.Qd3 Black has merely won back the pawn, and there is no fork on a1.",
            'd8d4': "7...Qxd4?? 8.Nxd4 loses the queen: d4 is guarded by the f3 knight and the queen."
          }
        }
      ]
    },

    /* ------------------------------------------------ BLACK: LATVIAN */
    {
      id: 'black-gambits-11',
      category: 'black-gambits',
      side: 'black',
      title: 'Latvian Gambit: why 3...Qf6 comes first',
      level: 'Advanced',
      minutes: 8,
      objective: "Explain why the Latvian needs 3...Qf6 after 3.Nxe5, and how Qh5+ punishes a careless 3...fxe4.",
      summary: "An unsound but tricky gambit: one wrong recapture and Qh5+ wins material.",
      prerequisites: ['tactics-1'],
      related: { gambits: ['bg-latvian'] },
      steps: [
        {
          type: 'read',
          title: 'An open diagonal',
          orientation: 'b',
          fen: 'rnbqkbnr/pppp2pp/8/4pp2/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3',
          text: "1.e4 e5 2.Nf3 f5 is a King's Gambit with colours reversed and a move less. Be clear-eyed: it is widely regarded as unsound, and 3.Nxe5 or 3.Bc4 give White a large edge with good play. If you play it, you must know the traps, above all the check on h5: with the f-pawn gone, the e8-h5 diagonal leads straight to your king.",
          arrows: [['f5', 'e4'], ['f3', 'e5']],
          highlights: ['h5', 'e8']
        },
        {
          type: 'puzzle',
          title: "See it from White's side",
          fen: 'rnbqkbnr/pppp2pp/8/4N3/4p3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 4',
          prompt: "Play White: after 3.Nxe5, Black replied 3...fxe4?. Find the sequence that wins material.",
          solution: ['d1h5', 'g7g6', 'e5g6'],
          hint: "Check on the diagonal the f-pawn has just left. If ...g6 blocks, which piece can take on g6?",
          explanation: "4.Qh5+! g6 5.Nxg6 punishes it: the knight hits h8 and threatens a discovered check. 5...hxg6 6.Qxh8 wins the exchange and a pawn, and 5...Nf6 6.Qe5+ costs Black even more. 4...Ke7 is no better: 5.Ng6+! hxg6 6.Qxh8, and Black's king is stuck in the centre. This is why Black must play 3...Qf6 first.",
          wrong: {
            'b1c3': "4.Nc3 attacks e4, but it lets Black play ...Nf6, which guards h5, and the Qh5+ trick is gone."
          }
        },
        {
          type: 'line',
          title: 'The main line',
          orientation: 'b',
          fen: 'rnbqkbnr/pppp2pp/8/4Np2/4P3/8/PPPP1PPP/RNBQKB1R b KQkq - 0 3',
          text: "With the queen on f6 the same trick fails: after 4.Qh5+ g6 5.Nxg6 hxg6, Qxh8 is met by ...Qxh8. Even in the main line, White's lead in development and pressure on e4 give White the better game; theory beyond move six is murky. The Latvian is a weapon for blitz and surprise, not for safety.",
          moves: [
            { uci: 'd8f6', san: 'Qf6', note: "Attacks the knight and guards the long diagonal to h8." },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e5c4', san: 'Nc4' },
            { uci: 'f5e4', san: 'fxe4', note: "Only now does Black take: the e4 pawn cramps White but can become a target." },
            { uci: 'b1c3', san: 'Nc3', note: "Develops and attacks e4." },
            { uci: 'f6g6', san: 'Qg6', note: "Defends e4 and eyes g2; Black's king and development are the worries." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ BLACK: ELEPHANT */
    {
      id: 'black-gambits-12',
      category: 'black-gambits',
      side: 'black',
      title: 'Elephant Gambit: the e4 wedge and h2',
      level: 'Beginner',
      minutes: 6,
      objective: "See how ...e4 and a bishop on d6 can punish a careless set-up, while knowing White is objectively better.",
      summary: "Objectively dubious, but the ...e4 push against a knight on f3 is the trick behind it.",
      prerequisites: ['tactics-1'],
      related: { gambits: ['bg-elephant'] },
      steps: [
        {
          type: 'line',
          title: 'The main idea',
          orientation: 'b',
          fen: 'start',
          text: "Black gives the d-pawn, pushes ...e4 to kick the knight and castles quickly.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd7d5', san: 'd5', note: "The gambit: a counter-strike in the centre." },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'f8d6', san: 'Bd6', note: "Defends e5 and aims at h2." },
            { uci: 'd2d4', san: 'd4', note: "White hits the centre at once." },
            { uci: 'e5e4', san: 'e4', note: "The wedge kicks the knight and gains space." },
            { uci: 'f3e5', san: 'Ne5' },
            { uci: 'g8f6', san: 'Nf6', note: "Attacks d5 and prepares quick castling." },
            { uci: 'b1c3', san: 'Nc3', note: "Defends d5 and attacks the e4 pawn." },
            { uci: 'e8g8', san: 'O-O' }
          ]
        },
        {
          type: 'read',
          title: 'An honest assessment',
          orientation: 'b',
          fen: 'rnbq1rk1/ppp2ppp/3b1n2/3PN3/3Pp3/2N5/PPP2PPP/R1BQKB1R w KQ - 4 7',
          text: "Be honest about the result: White is a pawn up with a strong centre, and engines give White a clear edge. Black's hopes are practical. The e4 pawn cramps White, and the d6 bishop aims at h2 once the e5 knight moves. Against careless play, Black's pieces can quickly combine against White's king.",
          arrows: [['d6', 'e5'], ['f6', 'd5']],
          highlights: ['e4', 'h2']
        },
        {
          type: 'puzzle',
          title: 'Kick the guard',
          fen: 'r4rk1/pbpn1ppp/1p1b1n2/3Pp2q/2B5/5N2/PPPP1PPP/RNBQ1RK1 b - - 0 11',
          prompt: "Illustrative position. Black to move: only the f3 knight guards h2. Win material.",
          solution: ['e5e4'],
          hint: "Which pawn move attacks the f3 knight? Then ask what happens to h2 if the knight moves.",
          explanation: "11...e4! hits the f3 knight and also opens the d6 bishop's diagonal to h2. If the knight moves to most squares, 12...Qxh2 is mate. If it stays, ...exf3 wins it, and 12.Nh4 or 12.Ne5 only drop the knight. This is an illustrative position: in the real main line White plays d4 and keeps a solid extra pawn.",
          wrong: {
            'h5h2': "11...Qxh2+?? 12.Nxh2 loses the queen: the f3 knight still guards h2.",
            'f6d5': "11...Nxd5 12.Bxd5 Bxd5 only wins back the pawn; 11...e4 wins a whole piece."
          }
        }
      ]
    }

  ]
}]);
