/* The Quiet Gambit - skills lessons: Calculation (calculation-*), Pawn Structures (pawn-structures-*)
 * and Model Games (model-games-*).
 * Data only: appends one part to window.QG_PARTS. Checked by tools/check-content.js.
 * Model games marked "illustrative" are teaching games composed for this site, not real games. */
window.QG_PARTS = (window.QG_PARTS || []).concat([{
  source: 'skills-calculation-structures-games',
  lessons: [

    /* ========================================================= CALCULATION */
    {
      id: 'calculation-1',
      category: 'calculation',
      side: 'both',
      title: 'Candidate moves: look wide first',
      level: 'Beginner',
      minutes: 6,
      objective: "List the checks, captures and threats in a position before calculating any one of them.",
      summary: "Before you calculate deeply, make a short list of candidate moves, so the best one is on it.",
      prerequisites: ['tactics-3'],
      related: { lessons: ['tactics-8', 'tactics-15', 'calculation-3'] },
      steps: [
        {
          type: 'read',
          title: 'Make a list',
          text: "Most calculation mistakes happen before any calculation starts: the winning move was never considered. So begin wide. List your candidate moves: every check, every capture, and every move that makes a big threat. Then calculate them one by one. In this illustrative position Black's knight attacks White's queen. Retreating is the obvious idea, but first look at the checks. Notice that neither king has an escape square.",
          fen: '2r3k1/pp1q1ppp/8/4n3/2Q5/8/PP3PPP/2R3K1 w - - 0 1',
          arrows: [['e5', 'c4']],
          highlights: ['g1', 'g8']
        },
        {
          type: 'puzzle',
          title: 'Checks before retreats',
          fen: '2r3k1/pp1q1ppp/8/4n3/2Q5/8/PP3PPP/2R3K1 w - - 0 1',
          prompt: "White to move: your queen is attacked. List the checks first. Mate in two.",
          solution: ['c4c8', 'd7c8', 'c1c8'],
          hint: "There are only two checks. One of them takes a rook.",
          explanation: "Qxc8+! The candidates were Qxc8+, Qxf7+ and a retreat. Qxf7+ fails to ...Nxf7, but after Qxc8+ Black must take back with the queen (blocking on d8 or e8 only loses the queen too), and Rxc8 is mate on the back rank. A retreat such as Qb3 would also have been playable, but you only find the mate if it is on your list.",
          wrong: {
            'c4f7': "Qxf7+? Nxf7. The knight on e5 guards f7; you have lost the queen for a pawn.",
            'c4b3': "Qb3 saves the queen, but you missed mate. Checks first, then retreats.",
            'c4e2': "Qe2 is a safe retreat, but Qxc8+ mates in two."
          }
        }
      ]
    },

    {
      id: 'calculation-2',
      category: 'calculation',
      side: 'both',
      title: 'Counting captures on one square',
      level: 'Beginner',
      minutes: 6,
      objective: "Count attackers and defenders of a square and capture in the right order, cheapest piece first.",
      summary: "If you attack a target more times than it is defended, you win it; start with your least valuable piece.",
      prerequisites: ['tactics-1'],
      related: { lessons: ['calculation-1', 'tactics-13', 'strategy-7'] },
      steps: [
        {
          type: 'read',
          title: 'Count, then order',
          text: "When pieces pile up on one square, count before you capture. Here Black's d5 pawn is attacked three times: by the knight on c3, the bishop on f3 and the rook on d1. It is defended twice, by the knight on f6 and the rook on d8. Three against two means White can win it. The order matters too: capture first with the cheapest piece, so that each recapture costs your opponent more than it costs you.",
          fen: '3r2k1/pp2bppp/5n2/3p4/8/2N2B2/PP3PPP/3R2K1 w - - 0 1',
          arrows: [['d8', 'd5'], ['f6', 'd5']],
          highlights: ['d5']
        },
        {
          type: 'puzzle',
          title: 'Win the pawn',
          fen: '3r2k1/pp2bppp/5n2/3p4/8/2N2B2/PP3PPP/3R2K1 w - - 0 1',
          prompt: "White to move: win the d5 pawn. Start the captures in the right order.",
          solution: ['c3d5', 'f6d5', 'f3d5'],
          accept: [['c3d5', 'f6d5', 'f3d5'], ['f3d5', 'f6d5', 'c3d5']],
          hint: "Use a minor piece first and keep the rook for last.",
          explanation: "Nxd5 Nxd5 Bxd5 (or Bxd5 Nxd5 Nxd5) wins a clean pawn, and if Black continues with ...Rxd5, Rxd5 wins the rook as well. Count: three attackers, two defenders. Starting with the rook would be wrong, because Black can stop recapturing at the right moment.",
          wrong: {
            'd1d5': "Rxd5? Nxd5 Nxd5, and Black simply does not take back: you have given a rook for a knight and a pawn. Cheapest piece first.",
            'f3b7': "Bxb7 grabs a different pawn, but it leaves d5 alone and gives Black time. Take the pawn you have counted."
          }
        }
      ]
    },

    {
      id: 'calculation-3',
      category: 'calculation',
      side: 'both',
      title: 'Forcing moves narrow the tree',
      level: 'Intermediate',
      minutes: 7,
      objective: "Calculate a sequence of checks to the end, using the fact that each check leaves the opponent very few replies.",
      summary: "Checks are the easiest moves to calculate, because your opponent has only one or two answers.",
      prerequisites: ['calculation-1', 'tactics-5'],
      related: { lessons: ['tactics-8', 'defence-4', 'calculation-4'] },
      steps: [
        {
          type: 'read',
          title: 'Why checks are easy to calculate',
          text: "After a quiet move your opponent may have thirty replies; after a check, often only one or two. That is why calculation starts with forcing moves: the tree of variations stays small and you can see to the end. In this illustrative position White's knight has just checked from f7 and the black king has gone to g8. The knight shields the king from the queen on c4, but the knight can move away with check.",
          fen: '5rk1/ppp2Npp/1q6/8/2Q5/8/PPP2PPP/6K1 w - - 0 1',
          arrows: [['c4', 'g8']],
          highlights: ['f7', 'g8']
        },
        {
          type: 'puzzle',
          title: 'Check, check, mate',
          fen: '5rk1/ppp2Npp/1q6/8/2Q5/8/PPP2PPP/6K1 w - - 0 1',
          prompt: "White to move: mate in three, with a check on every move.",
          solution: ['f7h6', 'g8h8', 'c4g8', 'f8g8', 'h6f7'],
          hint: "A double check first, then a queen sacrifice on g8.",
          explanation: "Nh6+ is a double check (knight and queen), so the king must move: only ...Kh8 is legal. Qg8+! can only be taken by the rook, because the knight guards g8. Then Nf7 is a smothered mate: the king is boxed in by its own rook and pawns. Every Black move was forced, which is why five plies could be calculated exactly.",
          wrong: {
            'f7d8': "Nd8+ is a discovered check, but Black blocks with ...Rf7 and the attack is over.",
            'f7e5': "Ne5+ is check, but after ...Kh8 there is no double check and Black defends."
          }
        }
      ]
    },

    {
      id: 'calculation-4',
      category: 'calculation',
      side: 'both',
      title: 'Visualise the final position',
      level: 'Intermediate',
      minutes: 7,
      objective: "Picture the board at the end of a combination, including the pieces that have moved or vanished, before you play the first move.",
      summary: "At the end of a line, see the new board in your head: which lines have opened and which defenders are gone.",
      prerequisites: ['calculation-3', 'tactics-6'],
      related: { lessons: ['calculation-3', 'attack-6', 'tactics-14'] },
      steps: [
        {
          type: 'read',
          title: 'Move the pieces in your head',
          text: "Long lines go wrong when the picture in your head stops matching the board. Train it: after each move of a line, ask what has changed. Which file is now open? Which diagonal is clear? Which defender has disappeared? In this illustrative position Black's knight on f6 blocks White's bishop on b2, and Black's g7 pawn shuts the g-file. Imagine both of them gone.",
          fen: 'qr3rk1/pp3ppp/5n2/8/7Q/3R4/PB3PPP/5RK1 w - - 0 1',
          arrows: [['b2', 'f6'], ['d3', 'g3']],
          highlights: ['f6', 'g7']
        },
        {
          type: 'puzzle',
          title: 'See it before you play it',
          fen: 'qr3rk1/pp3ppp/5n2/8/7Q/3R4/PB3PPP/5RK1 w - - 0 1',
          prompt: "White to move: mate in three. Picture the board after Black recaptures.",
          solution: ['h4f6', 'g7f6', 'd3g3', 'g8h8', 'b2f6'],
          hint: "If the g7 pawn leaves its square, the g-file and the long diagonal both open.",
          explanation: "Qxf6! gxf6 (otherwise Qxg7 is mate) opens the g-file and leaves a pawn on f6 that the bishop can take. Rg3+ Kh8 is forced, and Bxf6 is mate: the bishop checks along the diagonal, the rook covers g7 and g8, and nothing can interpose. Black's queen and rooks are too far away to help.",
          wrong: {
            'b2f6': "Bxf6 wins a piece, and is good, but the queen sacrifice mates.",
            'd3g3': "Rg3 is strong too, but after ...Nh5 Black fights on. The queen sacrifice mates at once."
          }
        }
      ]
    },

    {
      id: 'calculation-5',
      category: 'calculation',
      side: 'both',
      title: 'Compare candidate lines',
      level: 'Intermediate',
      minutes: 7,
      objective: "Calculate two promising lines to the end and choose by comparing the final positions, not the first moves.",
      summary: "When two moves both look good, calculate each to its end and compare what you are left with.",
      prerequisites: ['calculation-1', 'calculation-4'],
      related: { lessons: ['calculation-6', 'attack-6', 'tactics-15'] },
      steps: [
        {
          type: 'read',
          title: 'Two good moves, one best',
          text: "Finding a winning move is not the end of the job. If you have two candidates that both win something, calculate both and compare the final positions. Here White can win Black's undefended queen on b4 at once. But look at the other side of the board: Black's king on h8, White's queen and rook nearby, the bishop on c4 watching g8, and the pawn on f5 covering g6.",
          fen: 'r4r1k/pb4pp/1n6/5P1Q/1qB5/4R3/P5PP/1R4K1 w - - 0 1',
          arrows: [['c4', 'g8'], ['f5', 'g6']],
          highlights: ['g8', 'g6', 'b4']
        },
        {
          type: 'puzzle',
          title: 'Queen or king?',
          fen: 'r4r1k/pb4pp/1n6/5P1Q/1qB5/4R3/P5PP/1R4K1 w - - 0 1',
          prompt: "White to move: compare winning the queen with attacking the king. Choose the best line.",
          solution: ['h5h7', 'h8h7', 'e3h3'],
          hint: "Sacrifice on h7, then the rook gives check on the open h-file.",
          explanation: "Line A, Rxb4, wins the queen and should win the game. Line B is even better: Qxh7+! Kxh7 (forced) Rh3 is mate. The bishop covers g8, the f5 pawn covers g6, and the black queen cannot reach the h-file because the c4 bishop blocks the fourth rank. Mate beats a queen, but you only know that if you calculate both lines.",
          wrong: {
            'b1b4': "Rxb4 wins the queen and is strong, but you had mate in two. Compare before you choose.",
            'e3h3': "Rh3 first? It leaves the back rank: ...Qxb1+ wins your rook with check."
          }
        }
      ]
    },

    {
      id: 'calculation-6',
      category: 'calculation',
      side: 'both',
      title: "Check your opponent's best reply",
      level: 'Intermediate',
      minutes: 7,
      objective: "Before playing a familiar combination, look for the defender's most awkward reply, such as a protected interposition.",
      summary: "A pattern that worked once can fail when one detail changes: always look for the best defence.",
      prerequisites: ['calculation-5'],
      related: { lessons: ['calculation-5', 'tactics-15', 'defence-4'] },
      steps: [
        {
          type: 'read',
          title: 'One detail changes everything',
          text: "Patterns are useful, but the defender gets a move too. After every forcing move in your line, ask: what is my opponent's best reply, not the one I hope for? This position looks like the previous lesson: queen and rook against the king on h8, bishop on c4, pawn on f5. But Black's queen stands on d4 and a bishop on e7. Picture the board after Qxh7+ Kxh7 Rh3+.",
          fen: 'r4r1k/pb2b1pp/1n6/5P1Q/2Bq4/4R3/P5PP/3R2K1 w - - 0 1',
          arrows: [['d4', 'h4'], ['e7', 'h4']],
          highlights: ['h4']
        },
        {
          type: 'puzzle',
          title: 'Not this time',
          fen: 'r4r1k/pb2b1pp/1n6/5P1Q/2Bq4/4R3/P5PP/3R2K1 w - - 0 1',
          prompt: "White to move: does the queen sacrifice still work? Find the best move.",
          solution: ['d1d4'],
          hint: "Black's queen is undefended. What stops you taking it?",
          explanation: "Rxd4 simply wins the queen. The sacrifice fails here: after Qxh7+? Kxh7 Rh3+, Black blocks with ...Qh4 (or ...Bh4), and the blocking piece is protected, so Rxh4+ Bxh4 leaves White a queen and rook down. One defender, the bishop on e7, changed the whole calculation.",
          wrong: {
            'h5h7': "Qxh7+? Kxh7 Rh3+ Qh4! and the interposition is protected by the bishop on e7. White has given up everything for nothing.",
            'h5e2': "Qe2? lets the black queen escape with ...Qc5, and Black stays two minor pieces up."
          }
        }
      ]
    },

    {
      id: 'calculation-7',
      category: 'calculation',
      side: 'both',
      title: 'Quiet moves in combinations',
      level: 'Advanced',
      minutes: 8,
      objective: "Find the quiet move inside a combination that sets up an unstoppable threat after the forcing moves run out.",
      summary: "Not every move of a combination is a check: often a quiet move after a sacrifice is the real point.",
      prerequisites: ['calculation-4', 'tactics-14'],
      related: { lessons: ['tactics-14', 'tactics-9', 'calculation-4'] },
      steps: [
        {
          type: 'read',
          title: 'When the checks run out',
          text: "Many players only calculate checks and captures, so they miss combinations that contain a quiet move. A quiet move does not check or capture, but it makes a threat the opponent cannot meet. In this illustrative position White's pawn on f6 has made a hole on g7: a queen there would be mate. Qh6 is the natural route, but Black's queen on d8 watches f6 and would take it.",
          fen: '3q1rk1/pp3p1p/5Pp1/8/8/4Q2P/PP3PP1/3R2K1 w - - 0 1',
          arrows: [['d8', 'f6'], ['e3', 'h6']],
          highlights: ['g7', 'f6']
        },
        {
          type: 'puzzle',
          title: 'Remove the guard, then go quiet',
          fen: '3q1rk1/pp3p1p/5Pp1/8/8/4Q2P/PP3PP1/3R2K1 w - - 0 1',
          prompt: "White to move: deflect Black's queen, then find the quiet move that forces mate.",
          solution: ['d1d8', 'f8d8', 'e3h6'],
          hint: "Trade your rook for the queen, then bring your queen next to g7.",
          explanation: "Rxd8! Rxd8 removes the only piece that could take on f6. Then the quiet Qh6! threatens Qg7 mate, and Black has nothing: ...Rd1+ Kh2 only delays it, and no black piece can cover g7. White's luft on h3 made the quiet move possible, because the king has a flight square.",
          wrong: {
            'e3h6': "Qh6 at once? ...Qxf6, and the queen guards g7. Deflect first.",
            'd1d7': "Rd7 attacks f7, but ...Qxf6 (or ...Qxd7) defends easily."
          }
        }
      ]
    },

    {
      id: 'calculation-8',
      category: 'calculation',
      side: 'both',
      title: 'Pawn races: count the moves',
      level: 'Intermediate',
      minutes: 6,
      objective: "Count the moves each pawn needs to promote and check what the new queen attacks on arrival.",
      summary: "In a pawn race, count tempi exactly, then look at the position after both sides promote.",
      prerequisites: ['endgames-1', 'calculation-4'],
      related: { lessons: ['endgames-1', 'endgames-7', 'endgames-12'] },
      steps: [
        {
          type: 'read',
          title: 'One, two, queen',
          text: "Endgame calculation is often simple counting. How many moves does each pawn need to promote? Can a king catch it (the square of the pawn)? And when both sides promote, who moves next and what does the new queen attack? In this illustrative position neither king can catch the other side's pawn. Both pawns need two moves. It is White's move.",
          fen: '8/8/P7/5k2/8/7p/2K5/8 w - - 0 1',
          arrows: [['a6', 'a8'], ['h3', 'h1']],
          highlights: ['a8', 'h1']
        },
        {
          type: 'puzzle',
          title: 'Win the race',
          fen: '8/8/P7/5k2/8/7p/2K5/8 w - - 0 1',
          prompt: "White to move and win. Count the moves, then look along the long diagonal.",
          solution: ['a6a7', 'h3h2', 'a7a8q'],
          hint: "Which square does a new queen on a8 control?",
          explanation: "a7 h2 a8=Q, and if Black promotes with ...h1=Q, Qxh1 wins the new queen: a8 and h1 lie on the same long diagonal. White promotes first and controls Black's promotion square. Any king move instead loses a tempo: after ...h2 Black queens first, and then it is Black's queen that can take on a8.",
          wrong: {
            'c2d2': "Kd2? h2, and Black queens first. After a7 h1=Q a8=Q, Black takes your queen on a8.",
            'c2b3': "Kb3? h2 a7 h1=Q a8=Q, and again Black, to move, wins the queen with ...Qxa8."
          }
        }
      ]
    },

    {
      id: 'calculation-9',
      category: 'calculation',
      side: 'both',
      title: 'Calculating defence: the only move',
      level: 'Advanced',
      minutes: 8,
      objective: "When facing a mate threat, list every defence and calculate the attacker's best reply to each until one survives.",
      summary: "Defence needs calculation too: check each candidate defence against the strongest attacking reply.",
      prerequisites: ['defence-1', 'calculation-6'],
      related: { lessons: ['defence-1', 'defence-3', 'attack-5'] },
      steps: [
        {
          type: 'read',
          title: 'List the defences',
          text: "When your opponent threatens mate, do not grab the first defence you see. List them all, then calculate the attacker's best reply to each, exactly as you would for an attack. Here White threatens Qxh7 mate, with the queen, the bishop on d3 and the knight on g5 all aimed at h7. Black has several ways to stop the immediate mate, but only one of them holds.",
          fen: 'r4rk1/ppqnbppp/4p3/6NQ/3P4/3B4/PP3PPP/R4RK1 b - - 0 1',
          arrows: [['h5', 'h7'], ['d3', 'h7'], ['g5', 'h7']],
          highlights: ['h7']
        },
        {
          type: 'puzzle',
          title: 'Only one survives',
          fen: 'r4rk1/ppqnbppp/4p3/6NQ/3P4/3B4/PP3PPP/R4RK1 b - - 0 1',
          prompt: "Black to move: White threatens Qxh7 mate. Find the only defence that holds.",
          solution: ['h7h6'],
          hint: "Attack one of the attackers, and keep a pawn on the h-file.",
          explanation: "...h6 hits the knight, and after it retreats the h-pawn is safe on h6: Black is fine. The other tries fail: ...Bxg5 or ...f5 allow Qxh7 mate, and ...Nf6 runs into Bh7+! Kh8 (...Nxh7 Qxh7 is mate) Nxf7+, winning material. Each defence had to be checked against White's best reply.",
          wrong: {
            'd7f6': "...Nf6? Bh7+! Kh8 Nxf7+ Rxf7 Qxf7, and White has won the exchange and a pawn. (...Nxh7 Qxh7 is mate.)",
            'e7g5': "...Bxg5? removes one attacker, but Qxh7 is still mate, supported by the bishop on d3.",
            'f7f5': "...f5? blocks the bishop, but the knight still supports Qxh7, and it is mate."
          }
        }
      ]
    },

    /* ===================================================== PAWN STRUCTURES */
    {
      id: 'pawn-structures-1',
      category: 'pawn-structures',
      side: 'both',
      title: 'Pawn islands: recapture without new weaknesses',
      level: 'Beginner',
      minutes: 5,
      objective: "Count pawn islands and choose recaptures that do not split your pawns into more groups.",
      summary: "A pawn island is a group of pawns with no friendly pawns beside it; fewer islands are usually easier to defend.",
      prerequisites: ['openings-1'],
      related: { lessons: ['strategy-1', 'pawn-structures-2'] },
      steps: [
        {
          type: 'line',
          title: "A Queen's Gambit capture",
          fen: 'start',
          text: "A common position from the Queen's Gambit Declined. White's bishop takes the knight on f6, and Black must decide how to recapture.",
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c1g5', san: 'Bg5', note: "The bishop pins the knight to the black queen." },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'h7h6', san: 'h6', note: "Black asks the bishop a question." },
            { uci: 'g5f6', san: 'Bxf6', note: "White gives up the bishop pair for a sound pawn structure." }
          ]
        },
        {
          type: 'read',
          title: 'Count the groups',
          text: "A pawn island is a group of pawns on neighbouring files with no friendly pawn beside it. Each island needs its own defenders, so fewer islands are usually better. Right now all eight black pawns form one island. Recapturing with the g-pawn would leave doubled f-pawns and cut the h6 pawn off from the rest: two islands instead of one.",
          fen: 'rnbq1rk1/ppp1bpp1/4pB1p/3p4/2PP4/2N1PN2/PP3PPP/R2QKB1R b KQ - 0 7',
          arrows: [],
          highlights: ['h6', 'g7', 'f7']
        },
        {
          type: 'puzzle',
          title: 'Keep one island',
          fen: 'rnbq1rk1/ppp1bpp1/4pB1p/3p4/2PP4/2N1PN2/PP3PPP/R2QKB1R b KQ - 0 7',
          prompt: "Black to move: recapture on f6 without creating a new pawn island.",
          solution: ['e7f6'],
          hint: "Recapture with a piece, not a pawn.",
          explanation: "...Bxf6 keeps all eight pawns in one island and gives Black the bishop pair. ...gxf6 would double the f-pawns, isolate the h6 pawn and open the king's position. Sometimes a pawn recapture is worth it for an open file, but here it only creates weaknesses.",
          wrong: {
            'g7f6': "...gxf6? doubles the f-pawns, leaves h6 isolated and weakens the king. Two islands where there was one."
          }
        }
      ]
    },

    {
      id: 'pawn-structures-2',
      category: 'pawn-structures',
      side: 'both',
      title: 'The French chain: hit the head too',
      level: 'Intermediate',
      minutes: 7,
      objective: "In the French Advance structure, add the ...f6 break against the head of the chain once the base is fixed.",
      summary: "Black attacks the base of White's d4-e5 chain with ...c5; when the queenside is locked, ...f6 hits the head.",
      prerequisites: ['strategy-4'],
      related: { lessons: ['strategy-4', 'strategy-3', 'black-vs-e4-4'] },
      steps: [
        {
          type: 'line',
          title: 'A locked queenside',
          fen: 'start',
          text: "A French Advance where Black locks the queenside with ...c4. The moves after 6...c4 are an illustrative sequence.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4e5', san: 'e5', note: "White builds the chain d4-e5." },
            { uci: 'c7c5', san: 'c5', note: "The first break, against the base." },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd8b6', san: 'Qb6' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'c5c4', san: 'c4', note: "Black closes the queenside and gains space; the c-file pressure is gone." },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'c6a5', san: 'Na5', note: "Heading for b3, a hole created by the c4 advance." },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'c8d7', san: 'Bd7' },
            { uci: 'e1g1', san: 'O-O' }
          ]
        },
        {
          type: 'read',
          title: 'Head and base',
          text: "A pawn chain has a base (d4) and a head (e5). The base is the classic target, but once Black has played ...c4 there is no more pressure on d4 from the c-pawn. Black's other break is against the head: ...f6. It opens the f-file for Black's rooks, challenges White's space on the kingside and frees e7 and f7 for Black's pieces.",
          fen: 'r3kbnr/pp1b1ppp/1q2p3/n2pP3/2pP4/P1P2N2/1P1NBPPP/R1BQ1RK1 b kq - 5 9',
          arrows: [],
          highlights: ['e5', 'd4']
        },
        {
          type: 'puzzle',
          title: 'Strike at the head',
          fen: 'r3kbnr/pp1b1ppp/1q2p3/n2pP3/2pP4/P1P2N2/1P1NBPPP/R1BQ1RK1 b kq - 5 9',
          prompt: "Black to move: which pawn break attacks the head of White's pawn chain?",
          solution: ['f7f6'],
          hint: "The head of the chain is on e5. Only one black pawn can attack it.",
          explanation: "...f6 attacks e5. After exf6 Nxf6 Black has the half-open f-file and can aim for ...e5 later. If White lets Black take, ...fxe5 dxe5 breaks the chain and d4 becomes a square for Black's pieces. Either way the chain is under fire from the front as well as the back.",
          wrong: {
            'f7f5': "...f5 gains space but does not touch e5: White's chain stays intact.",
            'b7b5': "...b5 supports c4, but it is not a break against the chain: White's centre stays untouched."
          }
        }
      ]
    },

    {
      id: 'pawn-structures-3',
      category: 'pawn-structures',
      side: 'both',
      title: "The King's Indian chain: play where your pawns point",
      level: 'Intermediate',
      minutes: 7,
      objective: "Recognise the closed King's Indian structure and choose the pawn break on the side your chain points to.",
      summary: "With pawns on d5-e4 against d6-e5, White attacks on the queenside with c5 and Black on the kingside with ...f5.",
      prerequisites: ['strategy-4'],
      related: { lessons: ['white-openings-10', 'black-vs-d4-7', 'strategy-4'] },
      steps: [
        {
          type: 'line',
          title: 'The centre closes',
          fen: 'start',
          text: "The Classical King's Indian with 9.b4, the Bayonet Attack.",
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
            { uci: 'd4d5', san: 'd5', note: "White closes the centre. From now on both sides play on the wings." },
            { uci: 'c6e7', san: 'Ne7' },
            { uci: 'b2b4', san: 'b4', note: "White's queenside expansion begins at once." },
            { uci: 'f6h5', san: 'Nh5', note: "Black prepares ...f5 and eyes f4." }
          ]
        },
        {
          type: 'read',
          title: 'Two races',
          text: "With the centre locked, each side attacks where its chain points. White's chain c4-d5 points to the queenside, so White plays b4 and c5 to open the c-file. Black's chain d6-e5 points to the kingside, so Black plays ...f5, ...f4 and ...g5. Each side tries to hit the base of the other's chain: c5 hits d6, ...f5 hits e4. Speed matters more than material.",
          fen: 'r1bq1rk1/ppp1npbp/3p2p1/3Pp2n/1PP1P3/2N2N2/P3BPPP/R1BQ1RK1 w - - 1 10',
          arrows: [],
          highlights: ['d6', 'e4']
        },
        {
          type: 'puzzle',
          title: "White's break",
          fen: 'r1bq1rk1/ppp1npbp/3p2p1/3Pp2n/1PP1P3/2N2N2/P3BPPP/R1BQ1RK1 w - - 1 10',
          prompt: "White to move: which pawn break attacks the base of Black's pawn chain?",
          solution: ['c4c5'],
          hint: "The base of Black's chain is on d6.",
          explanation: "c5 attacks d6, the base of Black's chain. After cxd6 White gets the open c-file, the c7 pawn becomes a target and Nb5 or Rc1 follow. It is a common choice here; g3, stopping ...Nf4, and Re1 are also played, but they are preparation, not the break.",
          wrong: {
            'b4b5': "b5 gains space, but it attacks nothing. The break that opens lines is c5.",
            'a2a4': "a4 supports a later b5, but it is not a break: Black's chain is untouched."
          }
        }
      ]
    },

    {
      id: 'pawn-structures-4',
      category: 'pawn-structures',
      side: 'both',
      title: 'The Maroczy Bind: relieve the cramp',
      level: 'Intermediate',
      minutes: 7,
      objective: "Understand White's space in the Maroczy Bind and use exchanges to ease Black's cramped position.",
      summary: "Pawns on c4 and e4 restrain ...b5 and ...d5; the side with less space should trade pieces.",
      prerequisites: ['pawn-structures-1'],
      related: { lessons: ['strategy-5', 'pawn-structures-5'] },
      steps: [
        {
          type: 'line',
          title: 'The bind',
          fen: 'start',
          text: "An Accelerated Dragon where White sets up the Maroczy Bind with c4.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'c2c4', san: 'c4', note: "The Maroczy Bind: pawns on c4 and e4 stop ...d5 and make ...b5 hard." },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c8d7', san: 'Bd7' },
            { uci: 'd1d2', san: 'Qd2' }
          ]
        },
        {
          type: 'read',
          title: 'Space and exchanges',
          text: "White's pawns on c4 and e4 control d5 and b5, so Black's usual freeing breaks are hard to achieve. White has more space. The rule for the cramped side is to exchange pieces: fewer pieces need less room. The best piece to remove is White's knight on d4, the centre of White's set-up. After the exchange Black can follow with ...Bc6, ...a5 and ...Nd7-c5.",
          fen: 'r2q1rk1/pp1bppbp/2np1np1/8/2PNP3/2N1B3/PP1QBPPP/R4RK1 b - - 3 10',
          arrows: [],
          highlights: ['c4', 'e4', 'd5']
        },
        {
          type: 'puzzle',
          title: 'Trade the centraliser',
          fen: 'r2q1rk1/pp1bppbp/2np1np1/8/2PNP3/2N1B3/PP1QBPPP/R4RK1 b - - 3 10',
          prompt: "Black to move: which exchange removes White's best-placed piece?",
          solution: ['c6d4'],
          hint: "White's knight on d4 is in the middle of everything.",
          explanation: "...Nxd4 Bxd4 (or Qxd4) swaps off the centralised knight. Black then plays ...Bc6 to pressure e4 and ...a5, ...Nd7 to bring the other knight to c5. Each exchange makes Black's lack of space matter less. ...Ng4, swapping the e3 bishop, is another way to trade, but the knight on d4 is White's key piece.",
          wrong: {
            'a7a6': "...a6 prepares ...b5, but c4 and the knight on c3 stop it, and White keeps every piece in place.",
            'e7e5': "...e5 chases the knight, but leaves a hole on d5 and a backward pawn on d6."
          }
        }
      ]
    },

    {
      id: 'pawn-structures-5',
      category: 'pawn-structures',
      side: 'both',
      title: 'The Scheveningen: meet a wing attack in the centre',
      level: 'Intermediate',
      minutes: 7,
      objective: "Use the Scheveningen's small centre (pawns on d6 and e6) to answer a kingside pawn storm with the ...d5 break.",
      summary: "Black's pawns on d6 and e6 are flexible; the ...d5 break is the answer when White pushes the kingside pawns.",
      prerequisites: ['attack-10'],
      related: { lessons: ['attack-10', 'attack-7', 'pawn-structures-6'] },
      steps: [
        {
          type: 'line',
          title: 'The Keres Attack',
          fen: 'start',
          text: "In the Keres Attack White throws the g-pawn forward before Black has castled.",
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
            { uci: 'e7e6', san: 'e6', note: "The Scheveningen set-up: a small centre on d6 and e6." },
            { uci: 'g2g4', san: 'g4', note: "The Keres Attack: g5 will chase the knight." },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'h2h4', san: 'h4' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'h1g1', san: 'Rg1', note: "White prepares g5 again." }
          ]
        },
        {
          type: 'read',
          title: 'Flexible but cramped',
          text: "The Scheveningen pawns on d6 and e6 control c5, d5, e5 and f5, and are hard to attack. Their drawback is space. Black waits for the right moment to break with ...d5 or ...e5. The classical rule says a wing attack is best met by a strike in the centre: if White's pieces and pawns rush at the kingside, the centre opening up hurts White's own king, still on e1.",
          fen: 'r1bqkb1r/pp3pp1/2nppn1p/8/3NP1PP/2N5/PPP2P2/R1BQKBR1 b Qkq - 2 8',
          arrows: [],
          highlights: ['d6', 'e6', 'e4']
        },
        {
          type: 'puzzle',
          title: 'Strike back',
          fen: 'r1bqkb1r/pp3pp1/2nppn1p/8/3NP1PP/2N5/PPP2P2/R1BQKBR1 b Qkq - 2 8',
          prompt: "Black to move: which pawn break attacks e4 and opens the centre?",
          solution: ['d6d5'],
          hint: "Use the pawn that is supported by e6.",
          explanation: "...d5 is a standard reply here. It attacks e4 at once, so White has no time for g5. After exd5 Nxd5 the centre is open and White's advanced kingside pawns become targets rather than attackers. This is the typical Scheveningen answer to a kingside storm: break in the centre while the opponent's king is still there.",
          wrong: {
            'e6e5': "...e5 is also a central move, but it does not attack e4 and it leaves d5 as a hole.",
            'h6h5': "...h5 fights on the wing. It is playable in some lines, but it does not open the centre."
          }
        }
      ]
    },

    {
      id: 'pawn-structures-6',
      category: 'pawn-structures',
      side: 'both',
      title: 'The Najdorf ...e5 structure: the fight for d5',
      level: 'Advanced',
      minutes: 8,
      objective: "Recognise d5 as the key square in the Najdorf ...e5 structure and control it with pieces.",
      summary: "After ...e5 the d6 pawn is backward and d5 is a hole; both sides' plans revolve around that square.",
      prerequisites: ['pawn-structures-5', 'middlegames-1'],
      related: { lessons: ['middlegames-1', 'black-vs-e4-9', 'model-games-7'] },
      steps: [
        {
          type: 'line',
          title: 'The Najdorf with 6.Be2 e5',
          fen: 'start',
          text: "The classical main line with 6.Be2 e5.",
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
            { uci: 'a7a6', san: 'a6', note: "The Najdorf." },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e7e5', san: 'e5', note: "Black gains space and time, but leaves d6 backward and d5 weak." },
            { uci: 'd4b3', san: 'Nb3' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c1e3', san: 'Be3' }
          ]
        },
        {
          type: 'read',
          title: 'A hole and a backward pawn',
          text: "After ...e5 Black's d6 pawn can no longer be supported by a pawn from e7 or c7: it is backward, on a half-open file. The square in front of it, d5, is a hole that White would love to occupy with a knight. Black's task is to control d5 with pieces and, ideally, to play ...d5 one day, which removes the weakness. White wants Nd5, Bxf6 or Bg5 to remove d5's defenders.",
          fen: 'rnbq1rk1/1p2bppp/p2p1n2/4p3/4P3/1NN1B3/PPP1BPPP/R2Q1RK1 b - - 5 9',
          arrows: [],
          highlights: ['d5', 'd6']
        },
        {
          type: 'puzzle',
          title: 'Guard the key square',
          fen: 'rnbq1rk1/1p2bppp/p2p1n2/4p3/4P3/1NN1B3/PPP1BPPP/R2Q1RK1 b - - 5 9',
          prompt: "Black to move: which bishop move adds a second guard to d5?",
          solution: ['c8e6'],
          hint: "The light-squared bishop has one square that sees d5.",
          explanation: "...Be6 is the main move. With the knight on f6 and the bishop on e6, d5 is guarded twice. Black follows with ...Nbd7, ...Qc7 and ...Rc8, and waits for ...d5 or ...b5. If White plays Nd5, Black can take it, and after exd5 the d6 pawn is no longer exposed on a half-open file.",
          wrong: {
            'c8g4': "...Bg4 swaps the bishop for one of White's pieces, but then nothing guards d5 except the knight.",
            'b8c6': "...Nc6 develops, but it does not touch d5, and the knight blocks the c-file."
          }
        }
      ]
    },

    {
      id: 'pawn-structures-7',
      category: 'pawn-structures',
      side: 'both',
      title: 'Doubled c-pawns in the Nimzo-Indian',
      level: 'Intermediate',
      minutes: 7,
      objective: "Target the front doubled c-pawn on c4 after ...Bxc3, while keeping the position closed against White's bishops.",
      summary: "White gets the bishop pair and a strong centre; Black gets a fixed target on c4 and attacks it with pieces.",
      prerequisites: ['strategy-1', 'strategy-8'],
      related: { lessons: ['strategy-1', 'strategy-8', 'white-openings-11', 'black-vs-d4-5'] },
      steps: [
        {
          type: 'line',
          title: 'The Saemisch idea',
          fen: 'start',
          text: "After 4.a3 Black takes on c3 and doubles White's c-pawns. The moves from 6.e3 are an illustrative set-up rather than a specific main line.",
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'f8b4', san: 'Bb4' },
            { uci: 'a2a3', san: 'a3', note: "White asks the bishop to decide at once." },
            { uci: 'b4c3', san: 'Bxc3+' },
            { uci: 'b2c3', san: 'bxc3', note: "Doubled c-pawns, but the bishop pair and an extra central pawn." },
            { uci: 'c7c5', san: 'c5', note: "Black fixes c4 by stopping c4-c5 and pressing d4." },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'b7b6', san: 'b6' },
            { uci: 'g1e2', san: 'Ne2' },
            { uci: 'c8a6', san: 'Ba6', note: "The first attacker on c4." },
            { uci: 'e1g1', san: 'O-O' }
          ]
        },
        {
          type: 'read',
          title: 'Fix it, then hit it',
          text: "White's front c-pawn on c4 cannot be protected by another pawn. Black first fixes it with ...c5 (so that c4-c5 is impossible) and then attacks it with pieces: ...Ba6, ...Na5 and ...Rc8. White's compensation is the bishop pair and central control, so Black keeps the position closed and avoids opening lines for the bishops.",
          fen: 'r2qk2r/p2p1ppp/bpn1pn2/2p5/2PP4/P1PBP3/4NPPP/R1BQ1RK1 b kq - 3 9',
          arrows: [['a6', 'c4']],
          highlights: ['c4']
        },
        {
          type: 'puzzle',
          title: 'A second attacker',
          fen: 'r2qk2r/p2p1ppp/bpn1pn2/2p5/2PP4/P1PBP3/4NPPP/R1BQ1RK1 b kq - 3 9',
          prompt: "Black to move: which knight move adds a second attacker to the c4 pawn?",
          solution: ['c6a5'],
          hint: "Knights attack from two squares away; find a square White's pawns do not control.",
          explanation: "...Na5 attacks c4 a second time. It is defended only by the bishop on d3, so White must defend again, for example with Qa4, or open the position with dxc5 to free the bishops. Every white piece tied to c4 is not doing anything else. ...Ne5 would also hit c4, but dxe5 simply wins the knight.",
          wrong: {
            'c6e5': "...Ne5? dxe5. The d4 pawn controls e5.",
            'c6b4': "...Nb4 attacks the bishop, but axb4 wins the knight, and b4 does not touch c4 anyway."
          }
        }
      ]
    },

    {
      id: 'pawn-structures-8',
      category: 'pawn-structures',
      side: 'both',
      title: 'The Stonewall: the hole on e5',
      level: 'Intermediate',
      minutes: 7,
      objective: "Recognise the dark-square holes of the Stonewall and exchange the bishop that defends them.",
      summary: "Pawns on c6, d5, e6 and f5 give Black a grip on e4 but leave e5 weak; White trades Black's good bishop.",
      prerequisites: ['middlegames-1', 'strategy-5'],
      related: { lessons: ['middlegames-1', 'strategy-5', 'black-vs-d4-10'] },
      steps: [
        {
          type: 'line',
          title: 'The Stonewall Dutch',
          fen: 'start',
          text: "Black builds the Stonewall: pawns on c6, d5, e6 and f5.",
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'f7f5', san: 'f5' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd7d5', san: 'd5', note: "With ...c6 next, the Stonewall is complete." },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8d6', san: 'Bd6', note: "Black's best minor piece: the bishop that guards e5." },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'b2b3', san: 'b3' },
            { uci: 'd8e7', san: 'Qe7', note: "The queen covers a3, so White cannot trade bishops there." }
          ]
        },
        {
          type: 'read',
          title: 'Light-square wall, dark-square holes',
          text: "Every Black pawn in the Stonewall stands on a light square. That gives Black a firm grip on e4, but the dark squares, especially e5, can never be guarded by a pawn again. Black's dark-squared bishop on d6 is therefore precious: it is the guard of e5. White's plan is to exchange it, then put a knight on e5 that no pawn can chase away.",
          fen: 'rnb1k2r/pp2q1pp/2pbpn2/3p1p2/2PP4/1P3NP1/P3PPBP/RNBQ1RK1 w kq - 1 8',
          arrows: [],
          highlights: ['e5', 'd6']
        },
        {
          type: 'puzzle',
          title: 'Trade the guard',
          fen: 'rnb1k2r/pp2q1pp/2pbpn2/3p1p2/2PP4/1P3NP1/P3PPBP/RNBQ1RK1 w kq - 1 8',
          prompt: "White to move: which bishop move offers to exchange Black's good bishop on d6, safely?",
          solution: ['c1f4'],
          hint: "Look at both diagonals your bishop can use, and at what the black queen covers.",
          explanation: "Bf4 offers the exchange of dark-squared bishops. If Black takes, the guard of e5 is gone; if not, White may take on d6 next. Ba3 is the other route, but here it loses a piece: ...Bxa3 Nxa3 Qxa3. That is exactly why Black put the queen on e7. Ne5 at once is also a typical move, but it is not a bishop exchange.",
          wrong: {
            'c1a3': "Ba3?? Bxa3 Nxa3 Qxa3: the queen on e7 covers a3, and White loses a piece.",
            'c1b2': "Bb2 develops, but it does not challenge the bishop on d6, which keeps guarding e5."
          }
        }
      ]
    },

    {
      id: 'pawn-structures-9',
      category: 'pawn-structures',
      side: 'both',
      title: 'The Benoni: the e4-e5 break',
      level: 'Advanced',
      minutes: 8,
      objective: "Understand the Benoni majorities and why White's central e4-e5 break is the key to the structure.",
      summary: "Black has a queenside majority, White a central one; White's e5 break frees the passed d-pawn.",
      prerequisites: ['pawn-structures-3'],
      related: { lessons: ['black-vs-d4-9', 'pawn-structures-3'] },
      steps: [
        {
          type: 'line',
          title: 'The Four Pawns Attack',
          fen: 'start',
          text: "A Modern Benoni where White builds a big centre with f4.",
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'd7d6', san: 'd6', note: "The Benoni structure: White's centre majority against Black's queenside majority." },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'f2f4', san: 'f4', note: "The Four Pawns Attack: White prepares e5." },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'f8e8', san: 'Re8', note: "Black pressures e4." }
          ]
        },
        {
          type: 'read',
          title: 'Two majorities',
          text: "In the Benoni White has four central pawns against three, Black three queenside pawns against two. Black's plan is ...a6, ...b5 and ...c4, using the queenside majority and the long diagonal. White's plan is e4-e5: it opens lines towards Black's king and can turn the d5 pawn into a passed pawn. Here Black has just attacked e4 with the rook, so White must act in the centre now.",
          fen: 'rnbqr1k1/pp3pbp/3p1np1/2pP4/4PP2/2N2N2/PP2B1PP/R1BQK2R w KQ - 5 10',
          arrows: [],
          highlights: ['e4', 'd5', 'd6']
        },
        {
          type: 'puzzle',
          title: 'Break in the centre',
          fen: 'rnbqr1k1/pp3pbp/3p1np1/2pP4/4PP2/2N2N2/PP2B1PP/R1BQK2R w KQ - 5 10',
          prompt: "White to move: which pawn break attacks d6 and frees the d5 pawn?",
          solution: ['e4e5'],
          hint: "A central pawn that is attacked can also move forward.",
          explanation: "e5 is a main move here: it attacks d6 and the knight on f6, and after ...dxe5 fxe5 the d5 pawn is passed and White's pieces become active. The line is sharp and well analysed in theory. The point for structure: the Benoni centre majority is meant to advance.",
          wrong: {
            'f4f5': "f5 attacks g6, not d6, and gives up the e5 square for Black's pieces.",
            'e1g1': "Castling lets Black take on e4: the pawn is attacked by the knight and the rook, and defended only by the knight on c3."
          }
        }
      ]
    },

    /* ========================================================== MODEL GAMES */
    {
      id: 'model-games-1',
      category: 'model-games',
      side: 'both',
      title: 'Reti v Tartakower: the king left in the centre',
      level: 'Beginner',
      minutes: 7,
      objective: "See how early queen moves and a king left in the centre are punished by a lead in development and open lines.",
      summary: "Vienna 1910: Black's queen roams, White castles long, and a queen sacrifice ends the game.",
      prerequisites: ['openings-1', 'openings-2'],
      related: { lessons: ['openings-2', 'attack-9', 'tactics-5'] },
      steps: [
        {
          type: 'read',
          title: 'Development beats queen moves',
          text: "Richard Reti v Savielly Tartakower, Vienna 1910, is one of the most famous short games. It began as a Caro-Kann. Black played the queen out early and took a pawn, while White developed and castled long, putting a rook on the open d-file. The transferable idea: when your opponent's king is still in the centre and you have more pieces in play, open lines and look for forcing moves.",
          fen: 'start',
          arrows: [],
          highlights: []
        },
        {
          type: 'line',
          title: 'The game',
          fen: 'start',
          text: "The game up to the decisive moment.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd5e4', san: 'dxe4' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd1d3', san: 'Qd3', note: "An unusual move, but it prepares quick queenside castling." },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'd8a5', san: 'Qa5+', note: "Black goes after the e5 pawn with the queen." },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'a5e5', san: 'Qxe5' },
            { uci: 'e1c1', san: 'O-O-O', note: "White gives up the e4 knight to bring the rook to the open d-file." },
            { uci: 'f6e4', san: 'Nxe4', note: "Black wins a piece, but the king is still on e8 and the d-file is open." }
          ]
        },
        {
          type: 'puzzle',
          title: 'The famous finish',
          fen: 'rnb1kb1r/pp3ppp/2p5/4q3/4n3/3Q4/PPPB1PPP/2KR1BNR w kq - 0 9',
          prompt: "White to move: mate in three. The d-file is open and the black king is on e8.",
          solution: ['d3d8', 'e8d8', 'd2g5', 'd8c7', 'g5d8'],
          accept: [['d3d8', 'e8d8', 'd2g5', 'd8c7', 'g5d8'], ['d3d8', 'e8d8', 'd2g5', 'd8e8', 'd1d8']],
          hint: "Give up the queen to bring the king onto the d-file, then use a double check.",
          explanation: "9.Qd8+!! Kxd8 10.Bg5+ is a double check from the bishop and the rook on d1. After 10...Kc7 11.Bd8 is mate, as in the game; 10...Ke8 11.Rd8 is mate too. Black's extra piece was useless because the king never left the centre and White's pieces were all in play.",
          wrong: {
            'd3e4': "Qxe4 regains the piece but trades into a normal position. You had mate.",
            'd3e3': "Qe3 offers a queen trade. A piece down, that is the opposite of what you want."
          }
        }
      ]
    },

    {
      id: 'model-games-2',
      category: 'model-games',
      side: 'both',
      title: 'Ed. Lasker v Thomas: the king hunt',
      level: 'Intermediate',
      minutes: 8,
      objective: "Recognise when enough pieces are aimed at the king to sacrifice the queen and drive the king into the open.",
      summary: "London 1912: a queen sacrifice on h7 drags the king all the way to g1.",
      prerequisites: ['attack-1', 'calculation-3'],
      related: { lessons: ['attack-1', 'attack-5', 'calculation-3'] },
      steps: [
        {
          type: 'read',
          title: 'Count the attackers',
          text: "Edward Lasker v George Thomas, London 1912, is the classic king hunt. White developed quickly against a Dutch-style set-up, traded the f6 knight that defends Black's king, and aimed knights, bishop and queen at h7. When every attacking piece is ready and the defenders are few, a sacrifice that pulls the king forward can be decisive, even a queen sacrifice.",
          fen: 'start',
          arrows: [],
          highlights: []
        },
        {
          type: 'line',
          title: 'The game',
          fen: 'start',
          text: "The opening and the build-up.",
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f7f5', san: 'f5' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'g5f6', san: 'Bxf6', note: "White removes the knight that defends the kingside." },
            { uci: 'e7f6', san: 'Bxf6' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'f5e4', san: 'fxe4' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'b7b6', san: 'b6' },
            { uci: 'f3e5', san: 'Ne5' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1d3', san: 'Bd3', note: "The bishop joins the knights against h7." },
            { uci: 'c8b7', san: 'Bb7' },
            { uci: 'd1h5', san: 'Qh5', note: "The queen arrives." },
            { uci: 'd8e7', san: 'Qe7' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Queen sacrifice',
          fen: 'rn3rk1/pbppq1pp/1p2pb2/4N2Q/3PN3/3B4/PPP2PPP/R3K2R w KQ - 6 11',
          prompt: "White to move: start the king hunt. The first two moves are a sacrifice and a double check.",
          solution: ['h5h7', 'g8h7', 'e4f6'],
          hint: "Take on h7, then a knight capture uncovers the bishop on d3.",
          explanation: "11.Qxh7+!! Kxh7 12.Nxf6+ is a double check (knight and bishop). After 12...Kh6 (12...Kh8 13.Ng6 is mate) the king is chased up the board: 13.Neg4+ Kg5 14.h4+ Kf4 15.g3+ Kf3 16.Be2+ Kg2 17.Rh2+ Kg1 18.Kd2 mate. Every white move from 12 to 17 was a check.",
          wrong: {
            'e4f6': "Nxf6+ first? Bxf6 or gxf6, and the queen sacrifice no longer works.",
            'e5g6': "Ng6? hxg6 hits your queen, and the attack is gone."
          }
        }
      ]
    },

    {
      id: 'model-games-3',
      category: 'model-games',
      side: 'both',
      title: 'Lasker v Bauer: the double bishop sacrifice',
      level: 'Advanced',
      minutes: 9,
      objective: "Recognise bishops aimed at both h7 and g7 as the signal for the double bishop sacrifice.",
      summary: "Amsterdam 1889: Bxh7+ and Bxg7 strip the king, and a rook lift finishes the job.",
      prerequisites: ['attack-5', 'attack-6'],
      related: { lessons: ['attack-5', 'attack-6', 'calculation-7'] },
      steps: [
        {
          type: 'read',
          title: 'Two bishops, two pawns',
          text: "Emanuel Lasker v Johann Bauer, Amsterdam 1889, is the model of the double bishop sacrifice. White's bishops on d3 and e5 point at h7 and g7, the two pawns that shelter Black's king. If both are removed, the queen and a rook can reach the king faster than Black's pieces can defend it. The transferable idea: count the pawns in front of the king and the pieces that can reach it.",
          fen: 'start',
          arrows: [],
          highlights: []
        },
        {
          type: 'line',
          title: 'The game',
          fen: 'start',
          text: "A Bird's Opening with both bishops aimed at the kingside.",
          moves: [
            { uci: 'f2f4', san: 'f4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b2b3', san: 'b3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'c1b2', san: 'Bb2' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'f1d3', san: 'Bd3', note: "Both bishops are already aimed at Black's castled position." },
            { uci: 'b7b6', san: 'b6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'c8b7', san: 'Bb7' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'c3e2', san: 'Ne2' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'e2g3', san: 'Ng3' },
            { uci: 'd8c7', san: 'Qc7' },
            { uci: 'f3e5', san: 'Ne5' },
            { uci: 'd7e5', san: 'Nxe5' },
            { uci: 'b2e5', san: 'Bxe5', note: "The bishop now stares at g7." },
            { uci: 'c7c6', san: 'Qc6' },
            { uci: 'd1e2', san: 'Qe2' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'g3h5', san: 'Nh5', note: "Offering the knight to deflect Black's last kingside defender." },
            { uci: 'f6h5', san: 'Nxh5' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Two sacrifices',
          fen: 'r4rk1/1b2bppp/ppq1p3/2ppB2n/5P2/1P1BP3/P1PPQ1PP/R4RK1 w - - 0 15',
          prompt: "White to move: remove both pawns in front of Black's king, starting with a bishop sacrifice.",
          solution: ['d3h7', 'g8h7', 'e2h5', 'h7g8', 'e5g7'],
          hint: "Bxh7+ first, take back the knight with check, then the other bishop goes too.",
          explanation: "15.Bxh7+! Kxh7 16.Qxh5+ Kg8 17.Bxg7! In the game Black took: 17...Kxg7 18.Qg4+ Kh7 19.Rf3, a quiet rook lift, 19...e5 20.Rh3+ Qh6 21.Rxh6+ Kxh6 22.Qd7, and the double attack won one of the bishops. Lasker went on to win.",
          wrong: {
            'e2h5': "Qxh5 regains the piece, but after ...g6 or ...f6 Black closes the lines and the attack is over."
          }
        }
      ]
    },

    {
      id: 'model-games-4',
      category: 'model-games',
      side: 'both',
      title: 'Illustrative game: the Yugoslav pawn storm',
      level: 'Intermediate',
      minutes: 8,
      objective: "Follow the standard plan against a fianchettoed king when castling on opposite sides: h4-h5, Bh6 and open the h-file.",
      summary: "With kings on opposite wings, White's h-pawn opens a file and the dark-squared bishop is traded off.",
      prerequisites: ['attack-7', 'black-vs-e4-6'],
      related: { lessons: ['attack-7', 'black-vs-e4-6', 'strategy-2'] },
      steps: [
        {
          type: 'read',
          title: 'Open the file, trade the bishop',
          text: "This illustrative game (composed for this lesson, not a real game) shows White's classic plan in the Yugoslav Attack against the Dragon: castle long, push the h-pawn to open the h-file, and trade Black's fianchetto bishop with Bh6. Black's counter-attack must be fast; here it is one move too slow. The plan works against any fianchettoed king when the kings are on opposite wings.",
          fen: 'start',
          arrows: [],
          highlights: []
        },
        {
          type: 'line',
          title: 'The game',
          fen: 'start',
          text: "The first eleven moves are main-line theory; after that Black's play is too slow.",
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
            { uci: 'g7g6', san: 'g6', note: "The Dragon." },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f2f3', san: 'f3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'c8d7', san: 'Bd7' },
            { uci: 'e1c1', san: 'O-O-O', note: "Kings on opposite wings: a race." },
            { uci: 'a8c8', san: 'Rc8' },
            { uci: 'c4b3', san: 'Bb3' },
            { uci: 'c6e5', san: 'Ne5' },
            { uci: 'h2h4', san: 'h4' },
            { uci: 'a7a6', san: 'a6', note: "Too slow: Black needs counterplay at once." },
            { uci: 'h4h5', san: 'h5', note: "The h-pawn hits g6." },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'h5g6', san: 'hxg6' },
            { uci: 'h7g6', san: 'hxg6', note: "This opens the h-file for White's rook." },
            { uci: 'e3h6', san: 'Bh6', note: "Swap the bishop that guards the dark squares." },
            { uci: 'e5c4', san: 'Nc4' },
            { uci: 'b3c4', san: 'Bxc4' },
            { uci: 'b5c4', san: 'bxc4' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Remove the last guard',
          fen: '2rq1rk1/3bppb1/p2p1npB/8/2pNP3/2N2P2/PPPQ2P1/2KR3R w - - 0 17',
          prompt: "White to move: trade off the bishop that defends Black's king, and set up mate on the h-file.",
          solution: ['h6g7'],
          hint: "Once the g7 bishop is gone, where can your queen go with the rook behind it?",
          explanation: "17.Bxg7! In the game Black took back: 17...Kxg7 18.Qh6+ Kg8 19.Qh8 mate, the queen protected by the rook on the open h-file. Black's best is 17...Nh5, but after 18.Qh6 White still wins material. The bishop trade on g7 is the key move in nearly every Yugoslav attack.",
          wrong: {
            'h6f8': "Bxf8 wins the exchange, but leaves Black's best defender, the bishop on g7, on the board.",
            'g2g4': "g4 is slow: Black gets time for ...Bxh6 or ...Qa5, and the attack loses its punch."
          }
        }
      ]
    },

    {
      id: 'model-games-5',
      category: 'model-games',
      side: 'both',
      title: 'Illustrative game: the minority attack',
      level: 'Advanced',
      minutes: 9,
      objective: "Carry out the minority attack in the QGD Exchange from start to finish and collect the weak c6 pawn.",
      summary: "White's b-pawn advance leaves Black with a weak c6 pawn, which falls once its last defender moves away.",
      prerequisites: ['strategy-9', 'white-openings-7'],
      related: { lessons: ['strategy-9', 'white-openings-7', 'strategy-1'] },
      steps: [
        {
          type: 'read',
          title: 'From plan to pawn',
          text: "This illustrative game (composed for this lesson) shows the whole minority attack. White pushes the b-pawn to b5 and exchanges on c6, leaving Black with a backward pawn on c6 on a half-open file. White then attacks it with queen, rooks and a knight heading for c5. The lesson for every structure: a long-term weakness is won when its defenders are overloaded or move away.",
          fen: 'start',
          arrows: [],
          highlights: []
        },
        {
          type: 'line',
          title: 'The game',
          fen: 'start',
          text: "The opening is a main line of the QGD Exchange; the middlegame is illustrative.",
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'e6d5', san: 'exd5', note: "The Carlsbad structure." },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'd1c2', san: 'Qc2' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8e8', san: 'Re8' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd7f8', san: 'Nf8' },
            { uci: 'a1b1', san: 'Rab1', note: "The rook supports the b-pawn." },
            { uci: 'f8g6', san: 'Ng6' },
            { uci: 'b2b4', san: 'b4' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'a2a4', san: 'a4' },
            { uci: 'e7d6', san: 'Bd6' },
            { uci: 'b4b5', san: 'b5', note: "The minority attack." },
            { uci: 'a6b5', san: 'axb5' },
            { uci: 'a4b5', san: 'axb5' },
            { uci: 'c8d7', san: 'Bd7' },
            { uci: 'b5c6', san: 'bxc6' },
            { uci: 'b7c6', san: 'bxc6', note: "c6 is now a backward pawn on a half-open file." },
            { uci: 'c3a4', san: 'Na4', note: "Heading for c5 and opening the c-file for the queen." },
            { uci: 'd7g4', san: 'Bg4', note: "Active-looking, but it abandons c6." }
          ]
        },
        {
          type: 'puzzle',
          title: 'Collect the weakness',
          fen: 'r2qr1k1/5ppp/2pb1nn1/3p2B1/N2P2b1/3BPN2/2Q2PPP/1R3RK1 w - - 2 18',
          prompt: "White to move: which capture wins the weak c6 pawn now?",
          solution: ['c2c6'],
          hint: "The knight has moved off the c-file. Nothing defends c6 any more.",
          explanation: "18.Qxc6 wins the pawn: the bishop has left d7, and with the knight gone from c3 the queen sees c6. Black has some activity (...Re6 hits the queen), but White is a clean pawn up with the better structure. The minority attack created the weakness ten moves ago; the win came when its last defender wandered off.",
          wrong: {
            'g5f6': "Bxf6? Qxf6, and now the queen guards c6 along the sixth rank.",
            'a4c5': "Nc5 blocks your own queen's line to c6, and the pawn is safe for now."
          }
        }
      ]
    },

    {
      id: 'model-games-6',
      category: 'model-games',
      side: 'both',
      title: 'Illustrative game: punish the early queen',
      level: 'Beginner',
      minutes: 6,
      objective: "Answer an early queen sortie by developing with gain of time and attacking the queen and the squares it left.",
      summary: "White's queen comes out on move three; Black develops with tempo and wins material.",
      prerequisites: ['openings-1', 'tactics-1'],
      related: { lessons: ['openings-1', 'tactics-4', 'model-games-1'] },
      steps: [
        {
          type: 'read',
          title: 'Develop with tempo',
          text: "This illustrative game (composed for this lesson) is the kind of game many beginners lose. White brings the queen out early to attack f7. Black defends simply and then develops pieces that attack the queen, gaining a tempo each time. The rule: do not chase the queen aimlessly, but if a developing move also attacks her, it is doubly useful.",
          fen: 'start',
          arrows: [],
          highlights: []
        },
        {
          type: 'line',
          title: 'The game',
          fen: 'start',
          text: "White aims at f7 with queen and bishop.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd1h5', san: 'Qh5', note: "Threatens Qxf7 mate." },
            { uci: 'g7g6', san: 'g6', note: "The simplest defence: it attacks the queen." },
            { uci: 'h5f3', san: 'Qf3', note: "Again threatening f7." },
            { uci: 'g8f6', san: 'Nf6', note: "Defends f7 and develops." },
            { uci: 'g2g4', san: 'g4', note: "White tries to chase the knight, but neglects development." }
          ]
        },
        {
          type: 'puzzle',
          title: 'Hit the queen again',
          fen: 'r1bqkb1r/pppp1p1p/2n2np1/4p3/2B1P1P1/5Q2/PPPP1P1P/RNB1K1NR b KQkq g3 0 5',
          prompt: "Black to move: develop with tempo and threaten something else at the same time.",
          solution: ['c6d4'],
          hint: "A knight jump attacks the queen and a pawn next to White's king.",
          explanation: "5...Nd4! attacks the queen on f3 and threatens ...Nxc2+, forking king and rook. After the queen moves, for example 6.Qd3, Black can take the g4 pawn with the f6 knight. White's early queen moves and g4 have cost time and a pawn.",
          wrong: {
            'f6g4': "...Nxg4 wins a pawn, but Qxf7 is mate! Keep f7 defended.",
            'd7d5': "...d5 is active, but ...Nd4 is stronger, hitting the queen and c2 at once."
          }
        }
      ]
    },

    {
      id: 'model-games-7',
      category: 'model-games',
      side: 'both',
      title: 'Illustrative game: the knight on d5',
      level: 'Advanced',
      minutes: 8,
      objective: "See why White gives up the bishop for a knight in the Sveshnikov to plant a knight on the d5 outpost.",
      summary: "Bxf6 removes the guard of d5, and Nd5 sets up a knight that no black pawn can chase.",
      prerequisites: ['middlegames-1', 'pawn-structures-6'],
      related: { lessons: ['black-vs-e4-9', 'middlegames-1', 'pawn-structures-6'] },
      steps: [
        {
          type: 'read',
          title: 'An outpost bought with a bishop',
          text: "This illustrative game follows a main line of the Sveshnikov Sicilian. Black's ...e5 and ...d6 leave d5 without pawn protection: an outpost. White trades the bishop for the f6 knight, the main guard of d5, and puts a knight there. Black gets the bishop pair and dynamic play with ...f5. The general idea: give up a bishop if it buys a permanent square for a knight.",
          fen: 'start',
          arrows: [],
          highlights: []
        },
        {
          type: 'line',
          title: 'The game',
          fen: 'start',
          text: "A main line of the Sveshnikov.",
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
            { uci: 'e7e5', san: 'e5', note: "The Sveshnikov: d5 becomes a hole." },
            { uci: 'd4b5', san: 'Ndb5' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5a3', san: 'Na3' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'g5f6', san: 'Bxf6', note: "The bishop removes the guard of d5." },
            { uci: 'g7f6', san: 'gxf6', note: "Black's structure is damaged, but Black gets the bishop pair." }
          ]
        },
        {
          type: 'puzzle',
          title: 'Occupy the outpost',
          fen: 'r1bqkb1r/5p1p/p1np1p2/1p2p3/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq - 0 10',
          prompt: "White to move: put a knight on the outpost that no black pawn can attack.",
          solution: ['c3d5'],
          hint: "The square in front of Black's backward d-pawn.",
          explanation: "10.Nd5 is the main line. No black pawn can ever attack d5, so the knight stays there, pressing f6 and c7 and blocking the d-pawn. Black's typical answer is ...f5, attacking e4 and freeing the position, as in the Sveshnikov lesson. A knight on an outpost like this is often worth more than a bishop.",
          wrong: {
            'c3b5': "Nxb5? axb5 Nxb5 gives a piece for two pawns, and it is not why White traded on f6.",
            'f1d3': "Bd3 develops, but it lets Black play ...f5 or ...Bb7 before the knight reaches d5."
          }
        }
      ]
    },

    {
      id: 'model-games-8',
      category: 'model-games',
      side: 'both',
      title: 'Illustrative game: the central counter-strike',
      level: 'Intermediate',
      minutes: 6,
      objective: "Meet White's f4 kingside set-up in the Grand Prix with the central ...d5 break.",
      summary: "When White plays f4 and aims at the kingside, Black strikes at e4 with ...d5 before the attack starts.",
      prerequisites: ['attack-10', 'pawn-structures-5'],
      related: { lessons: ['attack-10', 'pawn-structures-5', 'black-vs-flank-4'] },
      steps: [
        {
          type: 'read',
          title: 'Strike before the attack starts',
          text: "This illustrative game shows a common answer to the Grand Prix Attack, where White plays Nc3 and f4 against the Sicilian and aims for a kingside attack. Black does not wait: ...e6 and ...d5 challenge e4 at once. The idea works in many openings: when your opponent commits pawns to the wing, the centre is often where they are weakest.",
          fen: 'start',
          arrows: [],
          highlights: []
        },
        {
          type: 'line',
          title: 'The opening',
          fen: 'start',
          text: "White sets up the Grand Prix Attack.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f2f4', san: 'f4', note: "The Grand Prix: f4 prepares a kingside attack." },
            { uci: 'e7e6', san: 'e6', note: "Preparing ...d5." },
            { uci: 'g1f3', san: 'Nf3' }
          ]
        },
        {
          type: 'puzzle',
          title: 'Challenge e4',
          fen: 'r1bqkbnr/pp1p1ppp/2n1p3/2p5/4PP2/2N2N2/PPPP2PP/R1BQKB1R b KQkq - 1 4',
          prompt: "Black to move: which pawn move challenges e4 and frees your light-squared bishop?",
          solution: ['d7d5'],
          hint: "The pawn on e6 is ready to support it.",
          explanation: "4...d5 strikes at e4 and opens the diagonal of the c8 bishop. If White exchanges with exd5 exd5, Black has free development and an open e-file; if White pushes e5, the f4 pawn is committed and Black can play ...f6 or ...Nh6-f5. Either way the attack White planned has been delayed by a central question.",
          wrong: {
            'f7f5': "...f5 also hits e4, but it weakens e6 and the a2-g8 diagonal and does nothing for the c8 bishop.",
            'g7g6': "...g6 is a sound plan, but it is a slower kingside set-up, not a challenge to e4."
          }
        }
      ]
    },

    {
      id: 'model-games-9',
      category: 'model-games',
      side: 'both',
      title: 'Illustrative game: take the open file',
      level: 'Intermediate',
      minutes: 7,
      objective: "In a symmetrical position, be first to put a rook on the only open file, and see how it can reach the seventh rank.",
      summary: "In the Exchange Slav the c-file is the only open file; whoever controls it can invade on c7 or c2.",
      prerequisites: ['strategy-3', 'endgames-2'],
      related: { lessons: ['strategy-3', 'black-vs-d4-2', 'tactics-3'] },
      steps: [
        {
          type: 'read',
          title: 'Open files are highways',
          text: "This illustrative game follows the Exchange Slav, where the pawn structure is symmetrical and the c-file is the only open file. In such positions small advantages decide: the side that controls the open file can bring a rook to the seventh rank, where it attacks pawns and confines the king. Rooks belong on open files; get there first.",
          fen: 'start',
          arrows: [],
          highlights: []
        },
        {
          type: 'line',
          title: 'The game',
          fen: 'start',
          text: "A quiet line of the Exchange Slav.",
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'c6d5', san: 'cxd5', note: "The c-file is now the only open file." },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c1f4', san: 'Bf4' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'c8f5', san: 'Bf5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1b5', san: 'Bb5' },
            { uci: 'f8d6', san: 'Bd6' },
            { uci: 'f4d6', san: 'Bxd6' },
            { uci: 'd8d6', san: 'Qxd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' }
          ]
        },
        {
          type: 'puzzle',
          title: 'First on the file',
          fen: 'r4rk1/pp3ppp/2nqpn2/1B1p1b2/3P4/2N1PN2/PP3PPP/R2Q1RK1 w - - 2 11',
          prompt: "White to move: which rook move takes the only open file?",
          solution: ['a1c1'],
          hint: "The f1 rook is blocked by the queen on d1; the other rook is free.",
          explanation: "11.Rc1 puts a rook on the open c-file. White's bishop on b5 pins the c6 knight, so the rook already presses c6, and if the knight ever moves, the rook can head for c7. Black wants ...Rfc8 to contest the file. In symmetrical positions, the first rook on the open file often decides who is better.",
          wrong: {
            'f1e1': "Re1 prepares e4, but the e-file is closed. Black gets the c-file with ...Rac8.",
            'b5c6': "Bxc6 bxc6 changes the structure, but the c6 pawn now blocks the file you wanted."
          }
        },
        {
          type: 'line',
          title: 'How the file is used',
          fen: 'r4rk1/pp3ppp/2nqpn2/1B1p1b2/3P4/2N1PN2/PP3PPP/R2Q1RK1 w - - 2 11',
          text: "An illustrative continuation: White swaps on c6 at the right moment and plants a knight on c5, keeping the file under control.",
          moves: [
            { uci: 'a1c1', san: 'Rc1' },
            { uci: 'f8c8', san: 'Rfc8' },
            { uci: 'd1e2', san: 'Qe2', note: "Connecting the rooks." },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5c6', san: 'Bxc6' },
            { uci: 'c8c6', san: 'Rxc6' },
            { uci: 'c3a4', san: 'Na4', note: "The knight heads for c5, blocking the file in front of Black's rook." }
          ]
        }
      ]
    }
  ],

  glossary: [
    { term: 'Forcing move', definition: "A check, capture or direct threat that limits the opponent's replies." },
    { term: 'Quiet move', definition: "A move that neither checks nor captures, but sets up a threat the opponent cannot meet." },
    { term: 'Pawn island', definition: "A group of pawns on neighbouring files with no friendly pawns on the files beside it." },
    { term: 'Pawn chain', definition: "A diagonal line of pawns, each protecting the next; the rear pawn is the base and the front pawn the head." },
    { term: 'Maroczy Bind', definition: "White pawns on c4 and e4 against a Sicilian, restraining Black's ...b5 and ...d5 breaks." },
    { term: 'Stonewall', definition: "A pawn wall on c6, d5, e6 and f5 (or c3, d4, e3, f4), strong on the light squares but weak on e5 (or e4)." },
    { term: 'Backward pawn', definition: "A pawn that can no longer be protected by a neighbouring pawn and stands behind its neighbours, often on a half-open file." },
    { term: 'Model game', definition: "A game studied as an example of a plan or idea that you can use in your own games." }
  ]
}]);
