/* The Quiet Gambit - skills library: Tactics (two calculation lessons), Attacking Play, Defence and Prophylaxis.
 * Data only: appends one part to window.QG_PARTS. Checked by tools/check-content.js. */
window.QG_PARTS = (window.QG_PARTS || []).concat([{
  source: 'skills-tactics-attack-defence',
  lessons: [

    /* ============================================================ TACTICS */
    {
      id: 'tactics-4',
      category: 'tactics',
      side: 'both',
      title: 'The double attack',
      level: 'Beginner',
      minutes: 5,
      objective: "Find queen moves that create two threats at once, especially a check plus an attack on a loose piece.",
      summary: "A queen check that also hits an undefended piece wins material, because the check must be answered first.",
      prerequisites: ['tactics-1'],
      related: { lessons: ['tactics-1', 'tactics-8'] },
      steps: [
        {
          type: 'read',
          title: 'Loose pieces drop off',
          text: "A double attack is one move that makes two threats. The fork is one kind; the queen is the best double attacker because she moves in eight directions. The easiest targets are loose pieces: pieces that nothing defends. In this illustrative position Black has just won a knight, but the knight on h5 is loose and the black king on g8 has an open diagonal towards d5.",
          fen: 'rq4k1/pp4pp/5p2/7n/8/7P/PP1Q1PP1/R5K1 w - - 0 1',
          arrows: [['d5', 'g8'], ['d5', 'h5']],
          highlights: ['h5', 'g8']
        },
        {
          type: 'puzzle',
          title: 'Check and collect',
          fen: 'rq4k1/pp4pp/5p2/7n/8/7P/PP1Q1PP1/R5K1 w - - 0 1',
          prompt: "White to move: win back the piece with a double attack.",
          solution: ['d2d5'],
          hint: "Look for a queen check that also lands on the fifth rank.",
          explanation: "Qd5+ checks the king along the diagonal and attacks the knight on h5 along the rank. Black must deal with the check (Kh8 or Kf8), and then Qxh5 restores material equality. Loose pieces and an exposed king are the two ingredients of almost every double attack.",
          wrong: {
            'd2e2': "Qe2 attacks the knight, but it simply moves away. Without the check there is only one threat.",
            'd2d8': "Qd8+?? Qxd8. The black queen on b8 guards the back rank."
          }
        }
      ]
    },

    {
      id: 'tactics-5',
      category: 'tactics',
      side: 'both',
      title: 'Discovered attacks and checks',
      level: 'Beginner',
      minutes: 6,
      objective: "Use a piece that moves out of a line to unleash an attack, especially a discovered check.",
      summary: "When the front piece of a line moves, the piece behind it attacks; if the front piece also threatens something, the opponent cannot meet both.",
      prerequisites: ['tactics-2'],
      related: { lessons: ['tactics-2', 'tactics-4'] },
      steps: [
        {
          type: 'read',
          title: 'Two pieces, one move',
          text: "In a discovered attack, one piece stands in front of another on a line. When the front piece moves, the back piece suddenly attacks. If the back piece gives check, it is a discovered check, and the front piece may go almost anywhere, because the opponent must answer the check first. Here the rook on e1 waits behind the knight on e5, aimed at the black king.",
          fen: 'r1b1kb1r/pp3ppp/3p1n2/q1p1N3/2P5/2N5/PP3PPP/R1BQR1K1 w kq - 0 1',
          arrows: [['e1', 'e8']],
          highlights: ['e5', 'e8']
        },
        {
          type: 'puzzle',
          title: 'The knight jumps, the rook checks',
          fen: 'r1b1kb1r/pp3ppp/3p1n2/q1p1N3/2P5/2N5/PP3PPP/R1BQR1K1 w kq - 0 1',
          prompt: "White to move: win the black queen with a discovered check.",
          solution: ['e5c6'],
          hint: "Which knight move attacks a5 and is not next to the black king?",
          explanation: "Nc6+ uncovers check from the rook on e1, and the knight attacks the queen on a5. Taking the knight with ...bxc6 is illegal while the king is in check, so Black must block or move the king, and Nxa5 follows. Keep the knight away from the king: on d7 or f7 the king could simply take it.",
          wrong: {
            'e5d7': "Nd7+ attacks nothing important and the king captures it: Kxd7 answers the check.",
            'e5g6': "Ng6+ wins the rook on h8, which is good, but Nc6+ wins the queen."
          }
        }
      ]
    },

    {
      id: 'tactics-6',
      category: 'tactics',
      side: 'both',
      title: 'Removing the defender',
      level: 'Beginner',
      minutes: 6,
      objective: "Identify the one piece holding a position together and capture or chase it away.",
      summary: "If a square or piece has only one guard, take the guard and the target falls.",
      prerequisites: ['tactics-3'],
      related: { lessons: ['middlegames-2', 'tactics-9', 'attack-7'] },
      steps: [
        {
          type: 'read',
          title: 'Count the guards',
          text: "Before attacking a target, count its defenders. In this illustrative position White's queen and bishop on c2 line up against h7, and Qxh7 would be mate. Only one black piece stops it: the knight on f6. When a single piece does all the defending, removing the defender, by capturing it or driving it away, makes the threat real.",
          fen: 'r2q1rk1/pb2bppp/1pn1pn2/3p2B1/3P4/2PQ1N2/PPBN1PPP/R3R1K1 w - - 0 1',
          arrows: [['d3', 'h7']],
          highlights: ['f6', 'h7']
        },
        {
          type: 'puzzle',
          title: 'Take the guard',
          fen: 'r2q1rk1/pb2bppp/1pn1pn2/3p2B1/3P4/2PQ1N2/PPBN1PPP/R3R1K1 w - - 0 1',
          prompt: "White to move: remove the defender of h7.",
          solution: ['g5f6'],
          hint: "Which black piece guards h7, and which of your pieces can capture it?",
          explanation: "Bxf6 captures the only guard of h7. If Black recaptures with the bishop, the queen or the g-pawn, Qxh7 is mate. To stop the mate Black must play ...g6 (moving the f8 rook fails to Qxh7+ Kf8 Qh8#), and White is simply a piece up.",
          wrong: {
            'd3h7': "Qxh7+?? Nxh7. The knight is still there to take your queen.",
            'g5h4': "Keeping the pin is too slow: Black can break it with ...g6 or ...h6."
          }
        }
      ]
    },

    {
      id: 'tactics-7',
      category: 'tactics',
      side: 'both',
      title: 'Trapped pieces',
      level: 'Beginner',
      minutes: 5,
      objective: "Spot a piece with no safe retreat squares and win it by attacking it.",
      summary: "A piece is only as safe as its escape squares; take them away and it is lost.",
      prerequisites: ['tactics-1'],
      related: { lessons: ['tactics-6', 'defence-1'] },
      steps: [
        {
          type: 'read',
          title: 'Count the exits',
          text: "A trapped piece is attacked, or about to be, and has nowhere safe to go. Knights on the edge are classic victims: 'a knight on the rim is dim'. Here Black's knight on h5 has four exits. The e5 pawn covers f6, the bishop on d2 covers f4, the f2 pawn covers g3, and Black's own pawn sits on g7. Now look for a way to attack it.",
          fen: 'r2q1rk1/pp1bbppp/2n1p3/2ppP2n/3P4/2P2N1P/PP1BBPP1/RN1Q1RK1 w - - 0 1',
          arrows: [['e5', 'f6'], ['d2', 'f4'], ['f2', 'g3']],
          highlights: ['h5', 'f6', 'f4', 'g3']
        },
        {
          type: 'puzzle',
          title: 'Close the net',
          fen: 'r2q1rk1/pp1bbppp/2n1p3/2ppP2n/3P4/2P2N1P/PP1BBPP1/RN1Q1RK1 w - - 0 1',
          prompt: "White to move: win the knight on h5.",
          solution: ['g2g4'],
          hint: "Attack the knight with a pawn, protected by another pawn.",
          explanation: "g4 attacks the knight, and the h3 pawn defends g4. Every escape square is covered: Nf4 runs into Bxf4, Nf6 into exf6, Ng3 into fxg3. Black loses a piece for at most a pawn. Before you attack a piece, check whether it can escape; when it cannot, take your time and trap it.",
          wrong: {
            'g2g3': "g3 takes away f4 but does not attack the knight, which stays where it is.",
            'd4c5': "dxc5 wins a pawn, but the knight escapes with ...Nf4 while you are busy."
          }
        }
      ]
    },

    {
      id: 'tactics-8',
      category: 'calculation',
      side: 'both',
      title: 'Checks, captures and threats',
      level: 'Intermediate',
      minutes: 7,
      objective: "Scan every position in a fixed order: checks first, then captures, then threats.",
      summary: "A simple scanning habit that finds most tactics: look at every forcing move before any quiet one.",
      prerequisites: ['tactics-4', 'tactics-5'],
      related: { lessons: ['tactics-15', 'defence-1'] },
      steps: [
        {
          type: 'read',
          title: 'Forcing moves first',
          text: "Forcing moves limit your opponent's replies, so they are the easiest to calculate. Train yourself to list them in order: every check, then every capture, then every move that threatens something big. Do this for your opponent too. Here White's bishop on d3 and rook on d1 share a line; ask what happens if the bishop moves with check.",
          fen: 'r1b2rk1/pp2nppp/2pqp3/8/2P5/3B1N2/PP2QPPP/R2R2K1 w - - 0 1',
          arrows: [['d1', 'd6']],
          highlights: ['h7', 'd6']
        },
        {
          type: 'puzzle',
          title: 'The check that wins',
          fen: 'r1b2rk1/pp2nppp/2pqp3/8/2P5/3B1N2/PP2QPPP/R2R2K1 w - - 0 1',
          prompt: "White to move: start with a check and win the queen.",
          solution: ['d3h7', 'g8h7', 'd1d6'],
          hint: "The only check is a capture on h7. What does it uncover?",
          explanation: "Bxh7+ is a check and a capture, and it uncovers the rook on d1 against the undefended queen on d6. Black must answer the check, so after Kxh7 (or Kh8) White plays Rxd6. A bishop for a queen and a pawn: the scan found it because checks come first.",
          wrong: {
            'c4c5': "c5 is a threat, but a slow one: the queen simply steps away. Check the checks first.",
            'f3g5': "Ng5 aims at h7, but Black has time for ...Nf5 or ...h6."
          }
        }
      ]
    },

    {
      id: 'tactics-9',
      category: 'tactics',
      side: 'both',
      title: 'Deflection',
      level: 'Intermediate',
      minutes: 6,
      objective: "Force a defender away from the square or line it must guard.",
      summary: "Attack or offer something to the defender so that it has to leave its post.",
      prerequisites: ['tactics-6'],
      related: { lessons: ['tactics-10', 'tactics-11', 'defence-7'] },
      steps: [
        {
          type: 'read',
          title: 'Pull the guard away',
          text: "Deflection means forcing a defender to leave its job. Unlike removing the defender, you do not take it: you give it a reason to go somewhere else. Here Black's rook on b8 has one job, stopping the b7 pawn from promoting. The bishop on f3 guards the pawn, so the rook can never take it. Can White give the rook a second problem?",
          fen: '1r6/1P3pk1/6p1/7p/8/5BPP/b4PK1/2R5 w - - 0 1',
          arrows: [['f3', 'b7'], ['b7', 'b8']],
          highlights: ['b8']
        },
        {
          type: 'puzzle',
          title: 'Offer the rook',
          fen: '1r6/1P3pk1/6p1/7p/8/5BPP/b4PK1/2R5 w - - 0 1',
          prompt: "White to move: deflect the rook and promote the pawn.",
          solution: ['c1c8'],
          hint: "Attack the rook on b8 from the side.",
          explanation: "Rc8 attacks the rook, which cannot afford to move or be taken. After ...Rxc8, bxc8=Q wins the rook back with interest. After ...Ra8, b8=Q Rxb8 Rxb8 leaves White a whole rook up. ...Rxb7 is impossible because of Bxb7.",
          wrong: {
            'c1c7': "Rc7 supports the pawn, but the black rook simply stays on b8 and holds.",
            'f3c6': "Bc6 guards b7 a second time but creates no new problem for the rook."
          }
        }
      ]
    },

    {
      id: 'tactics-10',
      category: 'tactics',
      side: 'both',
      title: 'Decoy',
      level: 'Intermediate',
      minutes: 6,
      objective: "Lure an enemy piece, often the king, onto a square where it can be forked, pinned or mated.",
      summary: "A sacrifice that drags a piece onto a fatal square.",
      prerequisites: ['tactics-1', 'tactics-9'],
      related: { lessons: ['tactics-9', 'attack-3'] },
      steps: [
        {
          type: 'read',
          title: 'Choose the square for your opponent',
          text: "A decoy forces an enemy piece onto a particular square, usually with a capture or a check that must be answered. Deflection asks 'where must this piece stop guarding?'; decoy asks 'where would I like this piece to stand?'. Here a knight on d7 would fork f8 and b6. If only the black king stood on f8...",
          fen: '5rk1/1b2n1pp/pq2p3/1p1pN3/3P4/2P1B3/PP2Q1PP/5RK1 w - - 0 1',
          arrows: [['e5', 'd7'], ['d7', 'f8'], ['d7', 'b6']],
          highlights: ['f8', 'b6']
        },
        {
          type: 'puzzle',
          title: 'Bring the king to f8',
          fen: '5rk1/1b2n1pp/pq2p3/1p1pN3/3P4/2P1B3/PP2Q1PP/5RK1 w - - 0 1',
          prompt: "White to move: decoy the king and fork it.",
          solution: ['f1f8', 'g8f8', 'e5d7'],
          hint: "Trade on f8 so that the only recapture is with the king.",
          explanation: "Rxf8+ forces Kxf8, as no other black piece guards f8. Now Nd7+ forks the king and the queen on b6, and Nxb6 wins the queen for nothing. The rook trade was the decoy: it put the king on the square the knight was waiting for.",
          wrong: {
            'e5d7': "Nd7 at once forks queen and rook, but ...Rxf1+ comes with check, then the queen escapes and you have won nothing.",
            'e2h5': "Qh5 looks aggressive, but Black's knight covers g6 and the king is safe."
          }
        }
      ]
    },

    {
      id: 'tactics-11',
      category: 'tactics',
      side: 'both',
      title: 'Overloading',
      level: 'Intermediate',
      minutes: 6,
      objective: "Recognise a defender with two jobs and exploit it by making it choose.",
      summary: "A piece that guards two things at once can only do one of them when you strike.",
      prerequisites: ['tactics-3', 'tactics-6'],
      related: { lessons: ['tactics-9', 'tactics-3'] },
      steps: [
        {
          type: 'read',
          title: 'Too many jobs',
          text: "An overloaded piece is a defender with two duties. Capture one of the things it protects, and when it recaptures it abandons the other. Here Black's rook on d8 guards the knight on d5 and the back rank at the same time. Black's king has no luft, and White's queen is aimed straight up the open e-file.",
          fen: '2br2k1/pp3ppp/1q6/3n4/8/2P2N1P/PP2QPP1/2BR2K1 w - - 0 1',
          arrows: [['d8', 'd5'], ['e2', 'e8']],
          highlights: ['d8', 'd5', 'e8']
        },
        {
          type: 'puzzle',
          title: 'Make the rook choose',
          fen: '2br2k1/pp3ppp/1q6/3n4/8/2P2N1P/PP2QPP1/2BR2K1 w - - 0 1',
          prompt: "White to move: exploit the overloaded rook.",
          solution: ['d1d5', 'd8d5', 'e2e8'],
          hint: "Take what the rook defends, and see what it leaves behind.",
          explanation: "Rxd5 captures the knight. If ...Rxd5, the back rank is unguarded and Qe8 is mate. If Black does not recapture, White is simply a piece up. One rook could not guard d5 and e8 at once.",
          wrong: {
            'e2e8': "Qe8+? Rxe8. While the rook is still on d8 it guards the back rank.",
            'c3c4': "c4 attacks the knight, but it just moves away and the rook keeps both jobs."
          }
        }
      ]
    },

    {
      id: 'tactics-12',
      category: 'tactics',
      side: 'both',
      title: 'The in-between move',
      level: 'Advanced',
      minutes: 7,
      objective: "Before making the 'obvious' recapture, look for a forcing move that improves the trade.",
      summary: "A zwischenzug is a forcing move played before the expected reply, often a check that wins time.",
      prerequisites: ['tactics-8', 'tactics-1', 'gambits-1'],
      related: { lessons: ['tactics-8', 'gambits-1'] },
      steps: [
        {
          type: 'read',
          title: 'Not so fast',
          text: "A zwischenzug (German for 'in-between move') is a forcing move inserted before the move everyone expects, usually a recapture. It works when the recapture will still be there afterwards. You saw one in the Elephant Trap, where ...Bb4+ came before ...Kxd8. Here Black has just taken White's queen on d1. The recapture can wait one move, because the black queen cannot escape while Black answers a check.",
          fen: 'r1b1kb1r/ppp1nppp/4p3/1N6/2B2B2/8/PPP2PPP/R2q1RK1 w kq - 0 1',
          arrows: [],
          highlights: ['d1']
        },
        {
          type: 'puzzle',
          title: 'Check before you recapture',
          fen: 'r1b1kb1r/ppp1nppp/4p3/1N6/2B2B2/8/PPP2PPP/R2q1RK1 w kq - 0 1',
          prompt: "Black has just played ...Qxd1. White to move: find something better than recapturing at once.",
          solution: ['b5c7'],
          hint: "A knight check that also hits a8, protected by the bishop on f4.",
          explanation: "Nxc7+ comes first. The king must go to d7 or d8, since the bishop guards c7 and the knight on e7 blocks the other squares. Then Rxd1 takes the queen back with check, and the knight takes the rook on a8 next. Recapturing at once wins nothing extra.",
          wrong: {
            'a1d1': "Raxd1 is natural, but it lets Black defend c7 and you have won nothing.",
            'f1d1': "Rfxd1 is the same story: a fair trade, and the chance is gone."
          }
        }
      ]
    },

    {
      id: 'tactics-13',
      category: 'tactics',
      side: 'both',
      title: 'X-ray attacks',
      level: 'Intermediate',
      minutes: 6,
      objective: "Count attackers and defenders through other pieces on the same line.",
      summary: "A rook behind a queen attacks through her: when she captures, the rook takes over.",
      prerequisites: ['tactics-2', 'tactics-6'],
      related: { lessons: ['tactics-2', 'middlegames-2'] },
      steps: [
        {
          type: 'read',
          title: 'Seeing through pieces',
          text: "An x-ray is an attack or defence through another piece on the same line. Here both sides have a queen in front of a rook on the e-file. The black queen on e7 is defended once by the rook on e8. White's queen attacks it, and White's rook x-rays through its own queen. Two attackers against one defender: whoever moves first wins the exchange of blows.",
          fen: '4r1k1/pp1nqppp/2p5/8/8/1P3N2/P1P1QPPP/4R1K1 w - - 0 1',
          arrows: [['e1', 'e7'], ['e8', 'e2']],
          highlights: ['e7']
        },
        {
          type: 'puzzle',
          title: 'First on the file',
          fen: '4r1k1/pp1nqppp/2p5/8/8/1P3N2/P1P1QPPP/4R1K1 w - - 0 1',
          prompt: "White to move: win material on the e-file.",
          solution: ['e2e7', 'e8e7', 'e1e7'],
          hint: "Capture on e7 and count what is left on the file.",
          explanation: "Qxe7 Rxe7 Rxe7: the queens are traded and White's rook, x-raying through its own queen, collects the black rook. Note that Black was threatening exactly the same thing, ...Qxe2 Rxe2 Rxe2. On a contested file, the side to move often decides it.",
          wrong: {
            'f3g5': "Ng5?? Qxe2 Rxe2 Rxe2: Black's x-ray works first and you lose a rook.",
            'h2h3': "Luft is useful, but Black strikes first with ...Qxe2 and wins the rook."
          }
        }
      ]
    },

    {
      id: 'tactics-14',
      category: 'tactics',
      side: 'both',
      title: 'Mating nets',
      level: 'Advanced',
      minutes: 8,
      objective: "Build a mate with a quiet move when the king's escape squares are already covered.",
      summary: "Before giving check, take away the squares; sometimes the strongest move is not a check at all.",
      prerequisites: ['tactics-3', 'tactics-8'],
      related: { lessons: ['attack-1', 'attack-2', 'attack-3'] },
      steps: [
        {
          type: 'read',
          title: 'Squares before checks',
          text: "A mating net is a set of pieces covering every square around the king, so one final check is mate. Count the king's escape squares and cover them first. In this illustrative position the bishop on h6 already covers f8 and g7, and Black has no dark-squared bishop to defend the holes. A queen on g7 would be mate. Which quiet move gets her there?",
          fen: 'r1q2rk1/ppp2p1p/6pB/8/8/5Q1P/PP3PP1/6K1 w - - 0 1',
          arrows: [['h6', 'g7'], ['h6', 'f8']],
          highlights: ['g7', 'f8', 'h8']
        },
        {
          type: 'puzzle',
          title: 'The quiet killer',
          fen: 'r1q2rk1/ppp2p1p/6pB/8/8/5Q1P/PP3PP1/6K1 w - - 0 1',
          prompt: "White to move: mate in two. The first move is not a check.",
          solution: ['f3f6'],
          hint: "Put the queen next to g7, on a square the black king cannot use.",
          explanation: "Qf6! threatens Qg7#. The queen also covers h8, the bishop covers f8 and g7, and Black has no check and no piece that can cover g7 or capture the queen. Whatever Black plays, Qg7 is mate next move.",
          wrong: {
            'f3f7': "Qxf7+?? Rxf7. The rook on f8 guards f7.",
            'f3b7': "Qxb7?? Qxb7. The queen on c8 guards b7, and the mate has gone."
          }
        }
      ]
    },

    {
      id: 'tactics-15',
      category: 'calculation',
      side: 'both',
      title: 'Candidate moves and blunder-checks',
      level: 'Advanced',
      minutes: 8,
      objective: "List several candidate moves and check the opponent's most forcing reply to each before choosing.",
      summary: "The move that wins material is not always the right way to win it: check your opponent's best reply first.",
      prerequisites: ['tactics-8', 'tactics-3'],
      related: { lessons: ['tactics-8', 'defence-1', 'defence-2'] },
      steps: [
        {
          type: 'read',
          title: 'A routine for every move',
          text: "Strong players do not stop at the first good move. They list candidate moves, the two or three serious options, and for each one ask: what is my opponent's most forcing reply? Only then do they choose. This blunder-check takes seconds. Here Black's knight on d7 is loose and attacked twice. Two captures look identical. Are they?",
          fen: '2r3k1/pp1n1pp1/7p/4N3/8/8/PP3PPP/3R2K1 w - - 0 1',
          arrows: [['d1', 'd7'], ['c8', 'c1']],
          highlights: ['d7', 'c1']
        },
        {
          type: 'puzzle',
          title: 'Which capture?',
          fen: '2r3k1/pp1n1pp1/7p/4N3/8/8/PP3PPP/3R2K1 w - - 0 1',
          prompt: "White to move: win the knight safely.",
          solution: ['e5d7'],
          hint: "After each capture, look at Black's checks.",
          explanation: "Nxd7 wins the knight and keeps the rook on d1 guarding the back rank. Rxd7?? fails to ...Rc1+, when the rook must come back with Rd1 and Black mates with ...Rxd1. White's king has no luft, and the blunder-check spots it.",
          wrong: {
            'd1d7': "Rxd7?? Rc1+ Rd1 Rxd1#. Your rook has left the back rank.",
            'e5f7': "Nxf7 Kxf7 Rxd7+ nets only a pawn, and your rook has left the back rank. Nxd7 wins a whole piece."
          }
        }
      ]
    },

    /* ============================================================= ATTACK */
    {
      id: 'attack-1',
      category: 'attack',
      side: 'both',
      title: 'Count attackers and defenders',
      level: 'Beginner',
      minutes: 5,
      objective: "Compare the number of attackers and defenders near the king before starting an attack.",
      summary: "An attack works when more of your pieces hit a square than your opponent can defend it with.",
      prerequisites: ['middlegames-2'],
      related: { lessons: ['middlegames-2', 'tactics-6', 'attack-10'] },
      steps: [
        {
          type: 'read',
          title: 'Two against one',
          text: "Attacking the king is arithmetic before it is art. Pick a target square near the king and count: how many of your pieces attack it, and how many of your opponent's defend it? Here, find the square near the black king that White hits twice and Black defends only once. Remember that a king cannot recapture on a protected square.",
          fen: 'r1bq1rk1/pp2bppp/2np4/5N2/4P3/6Q1/PPP2PPP/R1B2RK1 w - - 0 1',
          arrows: [],
          highlights: []
        },
        {
          type: 'puzzle',
          title: 'Two beat one',
          fen: 'r1bq1rk1/pp2bppp/2np4/5N2/4P3/6Q1/PPP2PPP/R1B2RK1 w - - 0 1',
          prompt: "White to move: mate in one.",
          solution: ['g3g7'],
          hint: "The target is the square you counted.",
          explanation: "Qxg7 is mate. The queen is protected by the knight, so the king cannot take her, and the rook on f8 blocks the only flight square. Black's bishop on e7 and queen on d8 were too far away to help: in attacks, the number of pieces near the king matters more than the total on the board.",
          wrong: {
            'f5h6': "Nh6+? gxh6. A check, but it gives away one of your two attackers.",
            'f5e7': "Nxe7+ Qxe7 swaps an attacker for a defender, and the mate is gone."
          }
        }
      ]
    },

    {
      id: 'attack-2',
      category: 'attack',
      side: 'both',
      title: "The Arabian mate",
      level: 'Beginner',
      minutes: 5,
      objective: "Recognise the rook and knight mate against a king in the corner.",
      summary: "A knight on f6 guards h7 and g8, so a rook on h7 mates a king on h8.",
      prerequisites: ['attack-1'],
      related: { lessons: ['attack-3', 'tactics-14'] },
      steps: [
        {
          type: 'read',
          title: 'Rook and knight together',
          text: "The Arabian mate is one of the oldest known patterns. A knight on f6 covers g8 and h7; a rook on h7, protected by that knight, checks a king on h8 and covers g7 along the seventh rank (here Black's own g7 pawn also sits there). Knights are excellent attackers next to the king because they cannot be blocked. Here White's knight has reached f6 and the rook is ready on the h-file.",
          fen: 'r4r1k/pp3ppp/2q2N2/8/8/7R/PPP2PPP/6K1 w - - 0 1',
          arrows: [['f6', 'h7'], ['f6', 'g8']],
          highlights: ['h7', 'g8']
        },
        {
          type: 'puzzle',
          title: 'Finish the pattern',
          fen: 'r4r1k/pp3ppp/2q2N2/8/8/7R/PPP2PPP/6K1 w - - 0 1',
          prompt: "White to move: mate in one.",
          solution: ['h3h7'],
          hint: "The rook goes where the knight protects it.",
          explanation: "Rxh7 is mate. The knight protects the rook, so the king cannot capture it; g8 is covered by the knight, and g7 is blocked by Black's own pawn. Remember the shape: rook on the seventh, knight on f6, king in the corner.",
          wrong: {
            'f6h7': "Nxh7 wins a pawn, but the knight was the piece that made the mate possible.",
            'f6d7': "Nd7 attacks the rook on f8, but you have missed mate."
          }
        }
      ]
    },

    {
      id: 'attack-3',
      category: 'attack',
      side: 'both',
      title: "Anastasia's mate",
      level: 'Beginner',
      minutes: 6,
      objective: "Use a knight on e7 and a rook on the h-file to mate a king trapped on h7.",
      summary: "A knight on e7 seals g8 and g6; a queen sacrifice on h7 can drag the king into a rook check.",
      prerequisites: ['attack-2'],
      related: { lessons: ['tactics-10', 'attack-2'] },
      steps: [
        {
          type: 'read',
          title: 'The knight seals the door',
          text: "In Anastasia's mate, named after a nineteenth-century novel, a knight on e7 covers g8 and g6, the king's own pawn blocks g7, and a rook gives mate along the h-file. Often the queen is sacrificed on h7 first, a decoy that brings the king onto the fatal file. Here White's queen, rook and knight are all ready.",
          fen: '3r3k/ppq1Nppp/8/7Q/8/5R2/PP3PPP/6K1 w - - 0 1',
          arrows: [['e7', 'g8'], ['e7', 'g6']],
          highlights: ['g8', 'g6', 'h7']
        },
        {
          type: 'puzzle',
          title: 'Queen first, then the rook',
          fen: '3r3k/ppq1Nppp/8/7Q/8/5R2/PP3PPP/6K1 w - - 0 1',
          prompt: "White to move: mate in two.",
          solution: ['h5h7', 'h8h7', 'f3h3'],
          hint: "Give up the queen to bring the king to h7.",
          explanation: "Qxh7+! Kxh7 is forced, because the knight covers g8. Then Rh3 is mate: the knight covers g6 and g8, the pawn blocks g7, and nothing can block the h-file. The queen sacrifice was a decoy, and the knight did the quiet work.",
          wrong: {
            'f3h3': "Rh3? leaves your back rank: ...Qc1+ and Black mates first.",
            'e7g6': "Ng6+? fxg6 (the h7 pawn is pinned, so not ...hxg6) hits your queen and the attack is gone."
          }
        }
      ]
    },

    {
      id: 'attack-4',
      category: 'attack',
      side: 'both',
      title: "Boden's mate",
      level: 'Intermediate',
      minutes: 6,
      objective: "Recognise the criss-cross bishop mate against a king castled on the queenside.",
      summary: "Two bishops on crossing diagonals mate a king on c8 once the b7 pawn is pulled away.",
      prerequisites: ['attack-1', 'tactics-10'],
      related: { lessons: ['attack-7', 'tactics-10'] },
      steps: [
        {
          type: 'read',
          title: 'Crossing diagonals',
          text: "Boden's mate uses two bishops on crossing diagonals. The king on c8 is hemmed in by its own pieces on d7 and d8. White's bishop on f4 already covers b8 and c7. If a bishop could reach a6 with the b7 pawn gone, the king would be mated. How can White force the pawn off b7?",
          fen: '2kr3r/pp1nqppp/2n5/8/1b3B2/5Q2/PPP2PPP/RN2RBK1 w - - 0 1',
          arrows: [['f4', 'b8'], ['a6', 'c8']],
          highlights: ['c8', 'b8', 'c7']
        },
        {
          type: 'puzzle',
          title: 'The queen opens the diagonal',
          fen: '2kr3r/pp1nqppp/2n5/8/1b3B2/5Q2/PPP2PPP/RN2RBK1 w - - 0 1',
          prompt: "White to move: mate in two.",
          solution: ['f3c6', 'b7c6', 'f1a6'],
          hint: "Sacrifice the queen to pull the b-pawn off b7.",
          explanation: "Qxc6+! must be taken with the pawn, because b8 is covered and d7 and d8 are blocked. Then Ba6 is mate: the light-squared bishop checks along a6-b7-c8, the dark-squared bishop covers b8 and c7, and Black's own pieces block d7 and d8.",
          wrong: {
            'f1a6': "Ba6 first? bxa6, and the diagonal is closed for good.",
            'e1e7': "Rxe7 wins the queen for a rook, but there was a forced mate."
          }
        }
      ]
    },

    {
      id: 'attack-5',
      category: 'attack',
      side: 'both',
      title: 'The Greek gift: Bxh7+',
      level: 'Intermediate',
      minutes: 9,
      objective: "Check the conditions for the bishop sacrifice on h7 and finish the attack with knight and queen.",
      summary: "The classic sacrifice on h7, followed by Ng5+ and Qh5, and the checklist that tells you when it works.",
      prerequisites: ['middlegames-2', 'attack-1'],
      related: { lessons: ['middlegames-2', 'tactics-8', 'attack-10'] },
      steps: [
        {
          type: 'read',
          title: 'The checklist',
          text: "The Greek gift is Bxh7+ followed by Ng5+ and Qh5. These conditions make it likely to work, not certain: a bishop on the b1-h7 diagonal; a knight that can reach g5 with check; a queen that can reach h5; no black knight on f6 (the e5 pawn usually chases it away); and no black piece that can take on g5 or cover h7. In this illustrative position, the bishop on a3 also covers f8, cutting off the king's escape.",
          fen: 'r1b2rk1/ppq2ppp/2n1p3/n2pP3/3P4/BP1B1N2/P1P2PPP/R2Q1RK1 w - - 0 1',
          arrows: [['d3', 'h7'], ['f3', 'g5'], ['d1', 'h5'], ['a3', 'f8']],
          highlights: ['h7', 'g5', 'h5', 'f8']
        },
        {
          type: 'line',
          title: 'The sacrifice',
          fen: 'r1b2rk1/ppq2ppp/2n1p3/n2pP3/3P4/BP1B1N2/P1P2PPP/R2Q1RK1 w - - 0 1',
          text: "The main line. The black king must take or step aside, and then the knight check drags it into the open. The critical defences are ...Kg6 and ...Kh6: here there is no quick mate, though White keeps a strong attack and can win material with Bxf8. Always calculate them before you sacrifice.",
          moves: [
            { uci: 'd3h7', san: 'Bxh7+', note: "The gift: a bishop for a pawn and an open king." },
            { uci: 'g8h7', san: 'Kxh7' },
            { uci: 'f3g5', san: 'Ng5+', note: "Nothing can take the knight." },
            { uci: 'h7g8', san: 'Kg8', note: "After ...Kh8, Qh5+ Kg8 Qh7 is mate." }
          ]
        },
        {
          type: 'puzzle',
          title: 'The queen arrives',
          fen: 'r1b2rk1/ppq2pp1/2n1p3/n2pP1N1/3P4/BP6/P1P2PPP/R2Q1RK1 w - - 2 3',
          prompt: "After 1.Bxh7+ Kxh7 2.Ng5+ Kg8, White to move: mate in two.",
          solution: ['d1h5'],
          hint: "Bring the queen to the h-file. Ask what Black can do against Qh7.",
          explanation: "3.Qh5 threatens Qh7 mate, and there is no defence. If the rook leaves f8, the bishop on a3 still covers that square; ...f6 or ...f5 fail because the knight covers f7; Black has no knight to bring to f6 and no checks. Next move Qh7 is mate.",
          wrong: {
            'd1d3': "Qd3 also eyes h7, but ...f5 blocks the diagonal and the attack slows down.",
            'g5e6': "Nxe6? fxe6 gives up your best attacker for a pawn."
          }
        }
      ]
    },

    {
      id: 'attack-6',
      category: 'attack',
      side: 'both',
      title: 'The rook lift',
      level: 'Intermediate',
      minutes: 6,
      objective: "Bring a rook into a kingside attack along the third rank.",
      summary: "Rooks are slow to join an attack; lifting one via the third rank brings it to the g- or h-file in two moves.",
      prerequisites: ['middlegames-2', 'attack-1'],
      related: { lessons: ['middlegames-2', 'attack-3', 'attack-5'] },
      steps: [
        {
          type: 'read',
          title: 'The third-rank highway',
          text: "Rooks usually wait for files to open. A rook lift does not wait: the rook climbs to the third rank, Re1-e3 or Rf1-f3, then swings across to g3 or h3 in front of its own pawns. This brings a heavy piece to the king's side quickly. In this illustrative position Black's king on h8 has a light-square hole on g8, watched by the bishop on c4, and the h-file is open.",
          fen: '3r3k/pp4p1/5p2/q3p3/2B5/8/PPP2PPP/1Q2R1K1 w - - 0 1',
          arrows: [['e1', 'e3'], ['c4', 'g8']],
          highlights: ['g8', 'h7']
        },
        {
          type: 'puzzle',
          title: 'Swing across',
          fen: '3r3k/pp4p1/5p2/q3p3/2B5/4R3/PPP2PPP/1Q4K1 w - - 0 1',
          prompt: "White's rook has reached e3. White to move: mate in one.",
          solution: ['e3h3'],
          hint: "Use the third rank to reach the open h-file.",
          explanation: "Rh3 is mate. The rook checks along the open h-file, the bishop on c4 covers g8, and the black king's own pawn blocks g7. Nothing can interpose: the e5 pawn shuts the black queen out of h5. Two moves of the same rook, e1-e3-h3, did the job.",
          wrong: {
            'e3e5': "Rxe5 wins a pawn, but the rook belongs on the h-file.",
            'e3g3': "Rg3? The g7 pawn blocks the g-file; the open file is the h-file."
          }
        }
      ]
    },

    {
      id: 'attack-7',
      category: 'attack',
      side: 'both',
      title: 'Opposite-side castling: pawn storms',
      level: 'Intermediate',
      minutes: 8,
      objective: "Understand why, with kings on opposite wings, you throw your pawns at the enemy king and race.",
      summary: "When the kings castle on opposite sides, attacking pawns no longer weaken your own king, so speed decides.",
      prerequisites: ['attack-1', 'tactics-6'],
      related: { lessons: ['middlegames-2', 'tactics-6', 'defence-3'] },
      steps: [
        {
          type: 'read',
          title: 'A race between two attacks',
          text: "When both kings castle on the same side, pushing the pawns in front of your king is risky. With kings on opposite wings it is the plan: White's g- and h-pawns march at Black's king while their own king sits safely on b1. Each pawn advance gains space and tries to open a file. In this illustrative Dragon-style race, White has already traded Black's fianchetto bishop and planted the queen on h6.",
          fen: '2r2rk1/pp1bpp1p/3p1npQ/q2N4/3NP1P1/5P2/PPP5/1K1R3R w - - 0 1',
          arrows: [['g4', 'g5'], ['h6', 'h7']],
          highlights: ['h7']
        },
        {
          type: 'read',
          title: 'Count the tempi',
          text: "In a race, every tempo counts. A pawn move that attacks a piece, such as g4-g5 hitting a knight on f6, is ideal, because the defender must spend a move. Look for moves that force the defender's reply, so the opponent never gets time for a counter-attack. Black's counter-attack on the queenside, with ...Qa5 and ...Rc8, is one move too slow here.",
          fen: '2r2rk1/pp1bpp1p/3p1npQ/q2N4/3NP1P1/5P2/PPP5/1K1R3R w - - 0 1',
          arrows: [['a5', 'a2'], ['c8', 'c2']],
          highlights: ['b1']
        },
        {
          type: 'puzzle',
          title: 'Win the race',
          fen: '2r2rk1/pp1bpp1p/3p1npQ/q2N4/3NP1P1/5P2/PPP5/1K1R3R w - - 0 1',
          prompt: "White to move: mate in two.",
          solution: ['d5f6', 'e7f6', 'h6h7'],
          hint: "Which black piece is the last guard of h7? Remove it with check.",
          explanation: "Nxf6+ removes the only guard of h7 with check. After ...exf6 (or ...Kh8), Qxh7 is mate, protected by the rook on h1. Black's king cannot use g7, which the queen covers. In opposite-side races, a forcing finish like this beats any counter-attack.",
          wrong: {
            'h6h7': "Qxh7+?? Nxh7. The knight on f6 still guards h7.",
            'd5e7': "Nxe7+ Kh8 leaves the f6 knight guarding h7, and the attack fizzles."
          }
        }
      ]
    },

    {
      id: 'attack-8',
      category: 'attack',
      side: 'both',
      title: 'The sacrifice on f7',
      level: 'Intermediate',
      minutes: 7,
      objective: "Recognise when f7 (or f2) is weak enough for a sacrifice, as in Legal's mate.",
      summary: "Early in the game f7 is guarded only by the king, and a well-timed sacrifice there can be decisive.",
      prerequisites: ['openings-1', 'attack-1'],
      related: { lessons: ['openings-1', 'tactics-10', 'attack-9'] },
      steps: [
        {
          type: 'read',
          title: 'The weakest square',
          text: "At the start, f7 and f2 are defended only by the king. That is why so many early attacks aim there: Bc4 and Ng5 against f7, or the queen and bishop together. A sacrifice on f7 drags the king into the open. It works when your pieces can follow up at once, and when the king's own pieces block its escape. Black has just pinned White's knight with ...Bg4 and played the slow ...g6.",
          fen: 'rn1qkbnr/ppp2p1p/3p2p1/4p3/2B1P1b1/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5',
          arrows: [['c4', 'f7'], ['g4', 'd1']],
          highlights: ['f7']
        },
        {
          type: 'puzzle',
          title: "Legal's mate",
          fen: 'rn1qkbnr/ppp2p1p/3p2p1/4p3/2B1P1b1/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5',
          prompt: "White to move: the pin is only relative. Break it by offering your queen.",
          solution: ['f3e5', 'g4d1', 'c4f7', 'e8e7', 'c3d5'],
          hint: "Take on e5 and let Black have your queen.",
          explanation: "Nxe5! offers the queen. If 5...Bxd1, then 6.Bxf7+ Ke7 (the only move: e5 guards d7 and f7 is protected) and 7.Nd5 is mate. If Black declines with 5...dxe5, 6.Qxg4 simply wins a pawn. The pin on the knight was only relative: the queen behind it could be given up.",
          wrong: {
            'c4f7': "Bxf7+ first? Kxf7, and with the knight still pinned White has just lost a bishop.",
            'h2h3': "h3 asks the bishop a question, but misses the chance to win at once."
          }
        },
        {
          type: 'line',
          title: 'The whole trap',
          fen: 'start',
          text: "The opening that leads to Legal's mate. Notice how every white piece takes part in the final position.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'c8g4', san: 'Bg4', note: "Pins the knight to the queen." },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g7g6', san: 'g6', note: "Too slow: Black ignores the threats." },
            { uci: 'f3e5', san: 'Nxe5', note: "The pin is broken by offering the queen." },
            { uci: 'g4d1', san: 'Bxd1' },
            { uci: 'c4f7', san: 'Bxf7+' },
            { uci: 'e8e7', san: 'Ke7' },
            { uci: 'c3d5', san: 'Nd5#', note: "Three minor pieces deliver mate." }
          ]
        }
      ]
    },

    {
      id: 'attack-9',
      category: 'attack',
      side: 'both',
      title: 'Attack the king in the centre',
      level: 'Advanced',
      minutes: 9,
      objective: "Open lines against an uncastled king, giving up material if needed to keep it in the centre.",
      summary: "A king stuck in the middle is a target: sacrifice to open files and keep your lead in development.",
      prerequisites: ['attack-8', 'tactics-2'],
      related: { lessons: ['attack-10', 'tactics-11', 'middlegames-2'] },
      steps: [
        {
          type: 'read',
          title: 'Material for open lines',
          text: "When your opponent's king has not castled, every open central file is a highway towards it. Then it can be worth giving up material, even a piece, to rip open lines while you are ahead in development. This is the famous Opera game, Morphy against the Duke of Brunswick and Count Isouard, Paris 1858. Morphy has already sacrificed a knight on b5. Now his rook joins on the open d-file.",
          fen: '3rkb1r/p2nqppp/5n2/1B2p1B1/4P3/1Q6/PPP2PPP/2KR3R w k - 3 13',
          arrows: [['d1', 'd7'], ['b5', 'e8'], ['g5', 'f6']],
          highlights: ['e8', 'd7']
        },
        {
          type: 'line',
          title: 'More fuel on the fire',
          fen: '3rkb1r/p2nqppp/5n2/1B2p1B1/4P3/1Q6/PPP2PPP/2KR3R w k - 3 13',
          text: "Morphy gives the exchange to keep the d-file open and brings the second rook. Every Black piece is pinned or tied up.",
          moves: [
            { uci: 'd1d7', san: 'Rxd7', note: "Removes a defender; the rook is worth less than the open file." },
            { uci: 'd8d7', san: 'Rxd7' },
            { uci: 'h1d1', san: 'Rd1', note: "The second rook piles on the pinned rook." },
            { uci: 'e7e6', san: 'Qe6' },
            { uci: 'b5d7', san: 'Bxd7+' },
            { uci: 'f6d7', san: 'Nxd7' }
          ]
        },
        {
          type: 'puzzle',
          title: "Morphy's finish",
          fen: '4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 0 16',
          prompt: "White to move: mate in two.",
          solution: ['b3b8', 'd7b8', 'd1d8'],
          hint: "The only defender of d8 is the knight on d7. Deflect it.",
          explanation: "16.Qb8+!! Nxb8 is forced, and 17.Rd8 is mate: the bishop on g5 guards e7 and d8, and Black's own bishop on f8 and pawn on f7 block the king. Morphy gave a knight, the exchange and finally the queen, because open lines and active pieces were worth more than material.",
          wrong: {
            'd1d7': "Rxd7? Qxd7, and Black's queen now guards d8; the attack is over."
          }
        }
      ]
    },

    {
      id: 'attack-10',
      category: 'attack',
      side: 'both',
      title: 'Centre first: when not to attack',
      level: 'Advanced',
      minutes: 7,
      objective: "Check the centre before launching a wing attack, and punish a flank attack with a central strike.",
      summary: "A wing attack only works when the centre is closed or under control; otherwise a central break refutes it.",
      prerequisites: ['attack-1', 'tactics-1'],
      related: { lessons: ['attack-9', 'defence-4', 'openings-1'] },
      steps: [
        {
          type: 'read',
          title: 'The classical rule',
          text: "The classical rule is: meet an attack on the wing with a counter-strike in the centre. A flank attack takes time and loosens your own position; if the centre is open, the defender's pieces arrive faster and the attacker's king is exposed. So before attacking, ask: is my centre stable, is my development finished, and is my own king safe? If not, do not attack yet.",
          fen: 'rnb1k2r/ppppqpp1/3bpn2/8/3PP2p/2NB1N1P/PPP2PP1/R1BQ1RK1 w kq - 0 1',
          arrows: [['h7', 'h4']],
          highlights: ['e8', 'h4']
        },
        {
          type: 'puzzle',
          title: 'Strike in the centre',
          fen: 'rnb1k2r/ppppqpp1/3bpn2/8/3PP2p/2NB1N1P/PPP2PP1/R1BQ1RK1 w kq - 0 1',
          prompt: "Black has pushed the h-pawn instead of castling. White to move: punish it in the centre.",
          solution: ['e4e5'],
          hint: "One pawn move attacks two black pieces.",
          explanation: "e5 forks the knight on f6 and the bishop on d6, and the pawn is protected by d4. Black loses a piece. Black's ...h5-h4 cost two tempi and left the king in the centre with pieces on clumsy squares; the central break exposed all of it.",
          wrong: {
            'f3h4': "Nxh4 wins a pawn, but the central fork wins a piece.",
            'c3b5': "Nb5 hits the bishop, which simply retreats. Look for two targets at once."
          }
        }
      ]
    },

    /* ============================================================ DEFENCE */
    {
      id: 'defence-1',
      category: 'defence',
      side: 'both',
      title: 'What does my opponent want?',
      level: 'Beginner',
      minutes: 5,
      objective: "Ask after every enemy move what it threatens, and find a defence before chasing your own plans.",
      summary: "Most lost games are lost to a threat nobody looked for. Make the question a habit.",
      prerequisites: ['tactics-3'],
      related: { lessons: ['tactics-8', 'tactics-15', 'defence-2'] },
      steps: [
        {
          type: 'read',
          title: 'The most important question',
          text: "Before you choose a move, ask: what does my opponent want? Look at the last move. What does the moved piece attack now, and which lines did it open? Here Black has just played ...Qh4. Together with the knight on g4, the queen threatens ...Qxh2, which would be mate. Your own plans, such as grabbing the b7 pawn, can wait.",
          fen: 'r1b2rk1/ppp2ppp/2n1p3/3p4/3P2nq/1QP5/PP1N1PPP/R1B2RK1 w - - 0 1',
          arrows: [['h4', 'h2'], ['g4', 'h2']],
          highlights: ['h2']
        },
        {
          type: 'puzzle',
          title: 'Stop the threat',
          fen: 'r1b2rk1/ppp2ppp/2n1p3/3p4/3P2nq/1QP5/PP1N1PPP/R1B2RK1 w - - 0 1',
          prompt: "White to move: Black threatens mate on h2. Stop it.",
          solution: ['d2f3'],
          accept: [['d2f3'], ['h2h3']],
          hint: "Guard h2 with a piece, or block the queen's path to it.",
          explanation: "Nf3 guards h2 and attacks the queen, the cleanest defence. h3 also works: it blocks the h-file and attacks the knight. Every other move gets mated or loses heavily, for example Qxb7?? Qxh2 mate. Spot the threat first, then choose between the defences.",
          wrong: {
            'b3b7': "Qxb7?? Qxh2#. Greed before safety.",
            'f2f4': "f4?? does not touch h2: ...Qxh2 is mate, and the knight covers f2."
          }
        }
      ]
    },

    {
      id: 'defence-2',
      category: 'defence',
      side: 'both',
      title: 'Luft and well-timed pawn moves',
      level: 'Beginner',
      minutes: 6,
      objective: "Recognise when a small pawn move such as h3 or a3 is worth a tempo, and pick the one that is safe.",
      summary: "Prophylactic pawn moves cost time, so play them when they stop a real threat, and choose the square carefully.",
      prerequisites: ['defence-1', 'tactics-3'],
      related: { lessons: ['tactics-3', 'tactics-15', 'defence-1'] },
      steps: [
        {
          type: 'read',
          title: 'Prophylaxis',
          text: "Prophylaxis means preventing your opponent's idea before it happens. Classic examples are h3, which stops ...Bg4 or ...Ng4, a3, which stops ...Bb4 or ...Nb4, and luft for the king. Each costs a tempo and creates a small hole, so play them when they meet a real threat. Here Black threatens ...Rd1, mate on the back rank. Which flight squares are really safe?",
          fen: '3r2k1/pbR2pp1/1p5p/2b5/N7/B1P5/P4PPP/6K1 w - - 0 1',
          arrows: [['d8', 'd1'], ['b7', 'g2'], ['c5', 'g1']],
          highlights: ['d1', 'g2', 'f2']
        },
        {
          type: 'puzzle',
          title: 'Air for the king',
          fen: '3r2k1/pbR2pp1/1p5p/2b5/N7/B1P5/P4PPP/6K1 w - - 0 1',
          prompt: "White to move: Black threatens ...Rd1 mate. Make luft on the right square.",
          solution: ['h2h3'],
          accept: [['h2h3'], ['h2h4']],
          hint: "The bishop on b7 watches g2, and moving the f-pawn would expose the king to the bishop on c5.",
          explanation: "h3 gives the king h2, a square no black piece controls (h4 does the same). g3 fails because ...Rd1+ Kg2 is impossible with the bishop on b7, and f3 or f4 are illegal, as they open the c5-g1 diagonal. Grabbing material with Rxb7, Nxc5 or Bxc5 loses to ...Rd1 mate.",
          wrong: {
            'c7b7': "Rxb7?? Rd1#. Spot the threat before you take.",
            'g2g3': "g3? Rd1+ and the king cannot use g2, which the bishop on b7 covers: mate.",
            'a4c5': "Nxc5?? Rd1#. The bishop was bait."
          }
        }
      ]
    },

    {
      id: 'defence-3',
      category: 'defence',
      side: 'both',
      title: 'Trade off the attackers',
      level: 'Beginner',
      minutes: 5,
      objective: "Defend against an attack by exchanging the most dangerous attacking piece.",
      summary: "Every exchange of an attacker for a defender, or for a passive piece, weakens the attack.",
      prerequisites: ['defence-1', 'middlegames-2'],
      related: { lessons: ['middlegames-2', 'attack-1', 'defence-9'] },
      steps: [
        {
          type: 'read',
          title: 'Fewer attackers, less danger',
          text: "An attack needs pieces. If you trade off the most dangerous attacker, often the bishop or knight aimed at your king, the attack loses its power, and your pawn shield stays intact. Pawn moves such as ...g6 or ...h6 also defend, but they create new weaknesses. Here White's queen and bishop combine against h7, threatening mate. Which white piece is the queen's partner?",
          fen: 'rn1q1rk1/pp2bppp/2p1p3/1b5Q/3P4/2PBPN2/PP3PPP/R1BR2K1 b - - 0 1',
          arrows: [['h5', 'h7']],
          highlights: ['h7']
        },
        {
          type: 'puzzle',
          title: 'Swap the partner',
          fen: 'rn1q1rk1/pp2bppp/2p1p3/1b5Q/3P4/2PBPN2/PP3PPP/R1BR2K1 b - - 0 1',
          prompt: "Black to move: stop the mate threat by trading off an attacker.",
          solution: ['b5d3'],
          hint: "Your light-squared bishop can meet its opposite number.",
          explanation: "...Bxd3 removes the bishop that supports Qxh7. After Rxd3 the queen is alone on h5 and h7 is safely guarded by the king. Black has also traded off a passive bishop and kept the kingside pawns unmoved. Blocking with ...g6 holds too, but it weakens the dark squares around the king for good.",
          wrong: {
            'b8d7': "...Nd7?? Qxh7#. The knight does not guard h7 from d7.",
            'h7h6': "...h6 stops the mate, but the queen and bishop stay aimed at your king and the pawn on h6 becomes a target."
          }
        }
      ]
    },

    {
      id: 'defence-4',
      category: 'defence',
      side: 'both',
      title: 'Defending by counter-attack',
      level: 'Intermediate',
      minutes: 7,
      objective: "When passive defence is not enough, look for a stronger threat or forcing line of your own.",
      summary: "Sometimes the best answer to a threat is a bigger threat, especially one that comes with check.",
      prerequisites: ['defence-1', 'tactics-8'],
      related: { lessons: ['tactics-8', 'tactics-12', 'attack-10'] },
      steps: [
        {
          type: 'read',
          title: 'Threat against threat',
          text: "Defending does not always mean retreating. If your opponent's attack leaves their own king short of defenders, a counter-attack may come first, and checks always come first. Here White threatens Qxh7 mate. Black could defend with ...Nf6, but look at White's king: boxed in on h1 by its own pawns and rook.",
          fen: 'r1b2rk1/ppp2ppp/8/2b4Q/3q2n1/2NB4/PPP3PP/R1B2R1K b - - 0 1',
          arrows: [['h5', 'h7']],
          highlights: ['h1', 'g1', 'f2']
        },
        {
          type: 'puzzle',
          title: 'Checks come first',
          fen: 'r1b2rk1/ppp2ppp/8/2b4Q/3q2n1/2NB4/PPP3PP/R1B2R1K b - - 0 1',
          prompt: "Black to move: White threatens mate. Mate first, in two.",
          solution: ['d4g1', 'f1g1', 'g4f2'],
          hint: "Offer the queen on g1. The king cannot take it.",
          explanation: "...Qg1+!! The bishop on c5 protects the queen, so the king cannot take, and White must play Rxg1. Then ...Nf2 is a smothered mate: the king is boxed in by its own rook and pawns. This is the finish of the pattern known as Philidor's legacy. The quiet ...Nf6 would have defended, but why defend when you can mate?",
          wrong: {
            'g4f6': "...Nf6 is a reasonable defence, but you had a forced mate.",
            'g4f2': "...Nf2+? Rxf2 Qxf2, and White mates first with Qxh7."
          }
        }
      ]
    },

    {
      id: 'defence-5',
      category: 'defence',
      side: 'both',
      title: 'Perpetual check',
      level: 'Intermediate',
      minutes: 6,
      objective: "Save a lost position by giving checks the opponent's king can never escape.",
      summary: "If you can check for ever, the game is a draw, however much material you are down.",
      prerequisites: ['defence-1', 'tactics-3'],
      related: { lessons: ['defence-6', 'defence-4'] },
      steps: [
        {
          type: 'read',
          title: 'A draw from nowhere',
          text: "Perpetual check means checking the enemy king again and again, with no way for it to escape. The game is then drawn by repetition. It is the defender's best friend: a lost position can be saved if the opponent's king is short of shelter. Here Black is a bishop and a pawn down and White threatens Qg7 mate. But White's king on h2 has only a few squares.",
          fen: '6k1/q6p/p5pQ/8/8/1P4PP/PB5K/8 b - - 0 1',
          arrows: [['b2', 'g7']],
          highlights: ['h2', 'h1', 'g1', 'g2']
        },
        {
          type: 'puzzle',
          title: 'Check, check, check',
          fen: '6k1/q6p/p5pQ/8/8/1P4PP/PB5K/8 b - - 0 1',
          prompt: "Black to move: White threatens mate. Save the game.",
          solution: ['a7f2', 'h2h1', 'f2f1'],
          hint: "Find a check that leaves the king only one square, then another.",
          explanation: "...Qf2+ leaves the king only h1, and ...Qf1+ drives it back to h2. Then ...Qf2+ again, and the position repeats: a draw. White cannot block on g1 or g2, and the queen on h6 and bishop are too far away. Most other moves lose to Qg7 mate, and ...Qf7 or ...Qg7 only reach a lost endgame a bishop down.",
          wrong: {
            'a7g7': "...Qg7 stops the mate, but after Qxg7+ Kxg7 the extra bishop wins easily.",
            'a7a8': "...Qa8?? does not stop Qg7 mate."
          }
        }
      ]
    },

    {
      id: 'defence-6',
      category: 'defence',
      side: 'both',
      title: 'Stalemate tricks',
      level: 'Intermediate',
      minutes: 6,
      objective: "When your king has no moves, try to give away your last active pieces to force stalemate.",
      summary: "A king with no legal moves is a resource: get rid of your other pieces and it may be stalemate.",
      prerequisites: ['endgames-3', 'defence-5'],
      related: { lessons: ['endgames-3', 'defence-5'] },
      steps: [
        {
          type: 'read',
          title: 'Nothing left to move',
          text: "Stalemate happens when the side to move has no legal move and is not in check. When you are losing and your king is boxed in, count your other legal moves. If you can force your opponent to capture your last mobile piece, stalemate may follow. Here Black's king on h8 has no squares, and the h7 pawn is blocked. Only the rook can move.",
          fen: '7k/5Q1p/6rP/8/8/8/5P1P/7K b - - 0 1',
          arrows: [],
          highlights: ['h8', 'g8', 'g7']
        },
        {
          type: 'puzzle',
          title: 'The desperado rook',
          fen: '7k/5Q1p/6rP/8/8/8/5P1P/7K b - - 0 1',
          prompt: "Black to move: a queen down, find the draw.",
          solution: ['g6g1'],
          hint: "Give a check that the king must answer by taking your rook.",
          explanation: "...Rg1+! The king cannot go to g2, which the rook covers, and h2 holds its own pawn, so Kxg1 is forced. Now Black has no legal move and is not in check: stalemate. A rook that sacrifices itself like this, with nothing to lose, is called a desperado.",
          wrong: {
            'g6h6': "...Rxh6?? Qf8#. The rook can no longer reach g8 to block."
          }
        }
      ]
    },

    {
      id: 'defence-7',
      category: 'defence',
      side: 'both',
      title: 'Blockade the passed pawn',
      level: 'Intermediate',
      minutes: 7,
      objective: "Stop a passed pawn by placing a piece, ideally a knight, on the square directly in front of it.",
      summary: "A blockader on the square in front of a passed pawn freezes it and cannot be shifted easily.",
      prerequisites: ['endgames-2', 'middlegames-1'],
      related: { lessons: ['middlegames-1', 'tactics-9'] },
      steps: [
        {
          type: 'read',
          title: 'Nimzowitsch and the blockade',
          text: "Aron Nimzowitsch called passed pawns criminals that should be kept under lock and key. The key is a blockade: a piece on the square directly in front of the pawn. The knight is the ideal blockader, because it keeps all its power while standing still. Here White's d5 pawn is passed, and the bishop on b3 supports it. Which square is the key?",
          fen: '2r1n1k1/pp3ppp/8/3P4/8/1B6/PP3PPP/3R2K1 b - - 0 1',
          arrows: [['d5', 'd6']],
          highlights: ['d6']
        },
        {
          type: 'puzzle',
          title: 'Lock the door',
          fen: '2r1n1k1/pp3ppp/8/3P4/8/1B6/PP3PPP/3R2K1 b - - 0 1',
          prompt: "Black to move: blockade the passed pawn with your knight.",
          solution: ['e8d6'],
          hint: "The blockade square is directly in front of the pawn.",
          explanation: "...Nd6 stops the pawn dead. From d6 the knight also eyes b5, c4, e4 and f5, and White's light-squared bishop can never challenge it on a dark square. Behind the blockade Black can bring the king to e7 and play on the c-file. A blockader that is also active is the defender's dream.",
          wrong: {
            'e8f6': "...Nf6 attacks the pawn, but d5 is defended twice and the pawn is free to advance with d6.",
            'e8c7': "...Nc7 watches d5 from the side, but the pawn simply walks past with d6."
          }
        }
      ]
    },

    {
      id: 'defence-8',
      category: 'defence',
      side: 'both',
      title: 'Fortress basics: the wrong bishop',
      level: 'Advanced',
      minutes: 7,
      objective: "Recognise the rook's pawn and wrong-coloured bishop fortress and reach the corner in time.",
      summary: "King, bishop and rook's pawn cannot win if the bishop does not control the promotion square and the defending king reaches the corner.",
      prerequisites: ['endgames-1', 'defence-6'],
      related: { lessons: ['endgames-1', 'defence-6'] },
      steps: [
        {
          type: 'read',
          title: 'A fortress',
          text: "A fortress is a defensive set-up that the stronger side cannot break, even with extra material. The best-known: a rook's pawn plus a bishop that does not control the promotion square, the 'wrong' bishop. If the defending king reaches the corner, it can never be driven out, and the game is drawn. Here h8 is a dark square and White's bishop is light-squared.",
          fen: '4k3/8/6BP/8/8/8/8/K7 b - - 0 1',
          arrows: [],
          highlights: ['h8', 'g7']
        },
        {
          type: 'puzzle',
          title: 'Race to the corner',
          fen: '4k3/8/6BP/8/8/8/8/K7 b - - 0 1',
          prompt: "Black to move: you are in check. Find the only drawing move.",
          solution: ['e8f8'],
          hint: "Head for the dark squares near h8. The bishop can never touch them.",
          explanation: "...Kf8! After h7 Kg7 the king controls h8, and it can shuttle between g7, h8 and g8 when free. White's light-squared bishop can never cover h8, so the pawn cannot promote: a fortress. Ke7, Kd7 and Kd8 are one step too slow, and f7 is covered by the bishop.",
          wrong: {
            'e8e7': "...Ke7? h7 and h8=Q next. The king is one move too slow.",
            'e8d8': "...Kd8? runs the wrong way, and the pawn promotes."
          }
        }
      ]
    },

    {
      id: 'defence-9',
      category: 'defence',
      side: 'both',
      title: 'Giving back material',
      level: 'Advanced',
      minutes: 7,
      objective: "Return extra material at the right moment to kill an attack and reach a safe position.",
      summary: "Material is only useful if you survive: give some back to remove the most dangerous attacker.",
      prerequisites: ['defence-1', 'defence-4', 'tactics-6'],
      related: { lessons: ['defence-3', 'tactics-6', 'attack-1'] },
      steps: [
        {
          type: 'read',
          title: 'Survive first',
          text: "When you have won material, your opponent usually has activity in return. Hanging on to everything can be fatal. The skilled defender knows when to give some back, ideally by capturing the most dangerous attacker. Here Black is the exchange up, but White's queen and knight threaten Qxg7 mate. Which white piece is doing the most work?",
          fen: '5rk1/ppq2ppp/8/3r1N2/6Q1/8/PP3PPP/4R1K1 b - - 0 1',
          arrows: [['g4', 'g7'], ['f5', 'g7']],
          highlights: ['g7', 'f5']
        },
        {
          type: 'puzzle',
          title: 'Return the exchange',
          fen: '5rk1/ppq2ppp/8/3r1N2/6Q1/8/PP3PPP/4R1K1 b - - 0 1',
          prompt: "Black to move: stop the attack for good.",
          solution: ['d5f5'],
          hint: "Which white piece makes the mate threat work? Capture it.",
          explanation: "...Rxf5! gives back the exchange and removes the knight. After Qxf5 material is level, the mate threat is gone and Black's position is perfectly safe. Pawn moves such as ...g6 or ...f6 keep the extra material for a moment, but they loosen the king and White's attack goes on, with material soon lost.",
          wrong: {
            'g7g6': "...g6 blocks the queen for now, but Nh6+ keeps the attack going and Black soon loses material.",
            'c7h2': "...Qxh2+? Kxh2, and the mate threat on g7 is still there."
          }
        }
      ]
    }
  ],

  glossary: [
    { term: 'Loose piece', definition: "A piece that nothing defends. Loose pieces are the favourite targets of double attacks." },
    { term: 'Removing the defender', definition: "Capturing or chasing away the piece that protects a key square or piece." },
    { term: 'Deflection', definition: "Forcing a defending piece to leave the square or line it is guarding." },
    { term: 'Decoy', definition: "A sacrifice that lures an enemy piece, often the king, onto a square where it can be attacked." },
    { term: 'Overloading', definition: "Exploiting a piece that has to defend two things at once." },
    { term: 'Zwischenzug', definition: "German for 'in-between move': a forcing move played before the expected reply, such as a recapture." },
    { term: 'X-ray', definition: "An attack or defence through another piece standing on the same line." },
    { term: 'Mating net', definition: "A set of pieces covering every escape square of the king, so that the final check is mate." },
    { term: 'Candidate moves', definition: "The few serious options you choose to calculate before deciding on a move." },
    { term: 'Blunder-check', definition: "A last look at the opponent's most forcing replies before you play your move." },
    { term: 'Trapped piece', definition: "A piece that is attacked, or about to be, and has no safe square to go to." }
  ]
}]);
