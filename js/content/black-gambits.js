/* The Quiet Gambit - Black gambits: gambit entries (bg-...) and the black-gambits lessons.
 * Data only: appends one part to window.QG_PARTS. Checked by tools/check-content.js. */
window.QG_PARTS = (window.QG_PARTS || []).concat([{
  source: 'black-gambits',
  gambits: [

    /* ------------------------------------------------------------ MARSHALL */
    {
      id: 'bg-marshall',
      side: 'black',
      group: 'vs-e4',
      family: 'Ruy Lopez',
      name: 'Marshall Attack',
      eco: 'C89',
      defining: ['e2e4','e7e5','g1f3','b8c6','f1b5','a7a6','b5a4','g8f6','e1g1','f8e7','f1e1','b7b5','a4b3','e8g8','c2c3','d7d5'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.c3 d5',
      character: 'Established',
      characterNote: "Played for decades by the world's best; so respected that many top players avoid it with 8.a4 or 8.h3 rather than face it.",
      difficulty: 'Advanced',
      summary: "Black gives the e-pawn in the closed Ruy Lopez for a lasting kingside attack, one of the soundest gambits in chess.",
      idea: "White's 8.c3 is slow, so Black strikes with ...d5. After the exchanges on d5 and e5 White is a pawn up, but White's queenside pieces are still at home while Black's queen, bishops and rooks swing towards the white king with ...Bd6, ...Qh4 and ...Bg4. White must defend accurately for many moves; often the best White gets is a slightly better endgame.",
      offer: "The e5 pawn, after 9.exd5 Nxd5 10.Nxe5 Nxe5 11.Rxe5.",
      compensation: "A big lead in development, the light squares around the white king (h3, g4, f3) and pressure that lasts deep into the middlegame.",
      plans: {
        white: [
          "Defend first: g3, Be3, Qd3 or Qf1 and Nd2, so that no piece is left loose.",
          "Untangle the queenside with Nd2-f3 or a4 against b5, then use the extra pawn.",
          "Trade queens when possible; most endgames favour the extra pawn."
        ],
        black: [
          "Aim everything at the king: ...Bd6, ...Qh4-h3, ...Bg4 or ...Bf5, and a rook lift with ...Rae8-e6.",
          "Keep White's queenside asleep: while ...Qh3 and ...Bg4 tie White down, the b1 knight and c1 bishop struggle to develop.",
          "Know the main lines: the Marshall rewards memory more than almost any gambit."
        ]
      },
      risks: [
        "White can avoid it entirely with 8.a4 or 8.h3, so you still need a normal Closed Ruy.",
        "The theory is long and precise; one wrong move order and the pawn is simply gone.",
        "Well-prepared opponents often reach a quiet endgame with a small but lasting edge."
      ],
      accepted: "9.exd5 Nxd5 10.Nxe5 Nxe5 11.Rxe5 c6 12.d4 Bd6 13.Re1 Qh4 14.g3 Qh3 is the main line: White's kingside is under pressure and the knight on b1 is not yet developed.",
      declined: "9.d4 or 9.d3 decline the pawn and keep material level; Black gets a comfortable Ruy Lopez. (The Anti-Marshall moves 8.a4 and 8.h3 avoid ...d5 a move earlier.)",
      line: { fen: 'start', moves: [
        { uci: 'e2e4', san: 'e4' },
        { uci: 'e7e5', san: 'e5' },
        { uci: 'g1f3', san: 'Nf3' },
        { uci: 'b8c6', san: 'Nc6' },
        { uci: 'f1b5', san: 'Bb5' },
        { uci: 'a7a6', san: 'a6' },
        { uci: 'b5a4', san: 'Ba4' },
        { uci: 'g8f6', san: 'Nf6' },
        { uci: 'e1g1', san: 'O-O' },
        { uci: 'f8e7', san: 'Be7' },
        { uci: 'f1e1', san: 'Re1' },
        { uci: 'b7b5', san: 'b5' },
        { uci: 'a4b3', san: 'Bb3' },
        { uci: 'e8g8', san: 'O-O', note: "Black castles first, so the king is safe before the sacrifice." },
        { uci: 'c2c3', san: 'c3', note: "White prepares d4, but this is a slow move and blocks the knight's best square." },
        { uci: 'd7d5', san: 'd5', note: "The gambit: Black opens the centre while White's queenside is undeveloped." },
        { uci: 'e4d5', san: 'exd5' },
        { uci: 'f6d5', san: 'Nxd5' },
        { uci: 'f3e5', san: 'Nxe5', note: "White accepts: the knight takes the pawn that the f6 knight used to guard." },
        { uci: 'c6e5', san: 'Nxe5' },
        { uci: 'e1e5', san: 'Rxe5', note: "White is a pawn up, but the rook is exposed and the queenside is still at home." },
        { uci: 'c7c6', san: 'c6', note: "Supports the knight on d5 so that Black's pieces are free to attack." },
        { uci: 'd2d4', san: 'd4' },
        { uci: 'e7d6', san: 'Bd6', note: "Hits the rook and aims at h2; ...Qh4 and ...Qh3 come next." }
      ] },
      style: 'Attacking',
      aliases: ['Marshall Gambit', 'Marshall Counterattack'],
      minutes: 25,
      familyId: 'bf-ruy-lopez',
      relatedOpenings: ['b-ruy-closed', 'w-ruy-lopez-closed'],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'The Anti-Marshall',
          text: "White can avoid the gambit with 8.a4, 8.h3 or 8.d4 before ...d5 is possible. You still need a normal Closed Ruy Lopez plan for those positions." },
        { kind: 'Trap', side: 'white', title: 'Neglecting the light squares',
          text: "After ...Qh3 and ...Bg4, a black bishop landing on f3 with the queen on h3 threatens mate on g2. White must keep Be3, Qd3 or Qf1 and Nd2 ready to cover f3, g2 and h3." },
        { kind: 'Mistake', side: 'white', title: 'Developing the queenside too late',
          text: "Grabbing the pawn and then playing slow moves leaves the b1 knight and c1 bishop at home while Black attacks. Untangle with Nd2-f3 or Be3 as soon as the king is safe." }
      ],
      lines: [
        { id: 'd4', name: '12.d4 Bd6 13.Re1 Qh4', kind: 'Accepted',
          summary: "The main line: White accepts, plays d4 and must weaken the kingside with g3. Black's queen settles on h3 and ...Bg4 follows.",
          moves: [
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'f3e5', san: 'Nxe5', note: "White accepts the pawn." },
            { uci: 'c6e5', san: 'Nxe5' },
            { uci: 'e1e5', san: 'Rxe5' },
            { uci: 'c7c6', san: 'c6', note: "Supports the d5 knight so Black's other pieces can attack." },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e7d6', san: 'Bd6', note: "Hits the rook and aims at h2." },
            { uci: 'e5e1', san: 'Re1' },
            { uci: 'd8h4', san: 'Qh4', note: "Forces g3, weakening the light squares." },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'h4h3', san: 'Qh3', note: "The queen sits next to White's king; ...Bg4 comes next." }
          ] },
        { id: 'd3', name: '12.d3 Bd6 13.Re1 Qh4', kind: 'Alternative',
          summary: "With 12.d3 White keeps the e4 square covered and plans Re4 to block the attack. The same attacking set-up follows for Black.",
          moves: [
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'c6e5', san: 'Nxe5' },
            { uci: 'e1e5', san: 'Rxe5' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd2d3', san: 'd3', note: "Covers e4 so that a rook can later block on e4." },
            { uci: 'e7d6', san: 'Bd6' },
            { uci: 'e5e1', san: 'Re1' },
            { uci: 'd8h4', san: 'Qh4' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'h4h3', san: 'Qh3', note: "Typical: Black's pressure lasts, White's extra pawn waits for the endgame." }
          ] }
      ],
      lessons: ['black-gambits-8'],
      uncertain: "Theory after 14...Qh3 is vast and still developing; the sample stops at 12...Bd6 to show the ideas."
    },

    /* --------------------------------------------------------------- BENKO */
    {
      id: 'bg-benko',
      side: 'black',
      group: 'vs-d4',
      family: 'Benko Gambit',
      name: 'Benko Gambit',
      eco: 'A57',
      defining: ['d2d4','g8f6','c2c4','c7c5','d4d5','b7b5'],
      moves: '1.d4 Nf6 2.c4 c5 3.d5 b5',
      character: 'Established',
      characterNote: "A sound positional gambit used by many grandmasters; the compensation is long-term, so it does not depend on traps or surprise.",
      difficulty: 'Intermediate',
      summary: "Black gives a queenside pawn for open a- and b-files and lasting pressure that often survives into the endgame.",
      idea: "Black offers the b-pawn, then a second pawn on a6, and recaptures with the bishop. The result: White has an extra pawn but Black owns the half-open a- and b-files, the bishop on g7 sweeps the long diagonal, and White's a- and b-pawns become targets. The pressure is slow and steady, which is why the Benko is a gambit you can play in a calm style.",
      offer: "The b-pawn with 3...b5, and after 4.cxb5 a6 5.bxa6 the a-pawn too, which Black wins back with ...Bxa6 for a net one-pawn deficit.",
      compensation: "Half-open a- and b-files for the rooks, the long diagonal for the g7 bishop, and easy, natural development.",
      plans: {
        white: [
          "Consolidate first: g3, Kg2 (after ...Bxf1), Nf3 and Re1, keeping the king safe.",
          "Prepare e4-e5 to open the centre while Black's pieces are on the queenside.",
          "Defend a2 and b2 economically and aim for a position where the extra pawn counts."
        ],
        black: [
          "Put the rooks on a8 and b8 and the queen on a5 or b6 to pile up on a2 and b2.",
          "Use the g7 bishop on the long diagonal; ...Nfd7-b6 or ...Ne5 add pressure.",
          "Do not hurry to win the pawn back; endgames with the files open are often fine for Black."
        ]
      },
      risks: [
        "If White achieves e4-e5 with the pieces well placed, Black's queenside play can be too slow.",
        "White can decline with 4.Nf3, 4.a4 or 5.e3 and avoid the structure you prepared.",
        "Played passively, you are simply a pawn down with nothing to show for it."
      ],
      accepted: "4.cxb5 a6 5.bxa6 g6 6.Nc3 Bxa6 7.e4 Bxf1 8.Kxf1: White cannot castle and must spend time on g3 and Kg2.",
      declined: "5.b6 (returning the pawn), 5.e3 or 4.Nf3 keep things calmer; Black still gets active play on the queenside.",
      line: { fen: 'start', moves: [
        { uci: 'd2d4', san: 'd4' },
        { uci: 'g8f6', san: 'Nf6' },
        { uci: 'c2c4', san: 'c4' },
        { uci: 'c7c5', san: 'c5', note: "Hits d4 at once; 3.d5 gains space." },
        { uci: 'd4d5', san: 'd5' },
        { uci: 'b7b5', san: 'b5', note: "The gambit: Black undermines White's c-pawn and prepares to open the b-file." },
        { uci: 'c4b5', san: 'cxb5' },
        { uci: 'a7a6', san: 'a6', note: "A second offer: opening the a-file as well." },
        { uci: 'b5a6', san: 'bxa6' },
        { uci: 'g7g6', san: 'g6' },
        { uci: 'b1c3', san: 'Nc3' },
        { uci: 'c8a6', san: 'Bxa6' },
        { uci: 'e2e4', san: 'e4' },
        { uci: 'a6f1', san: 'Bxf1', note: "Trading the bishops stops White from castling." },
        { uci: 'e1f1', san: 'Kxf1' },
        { uci: 'd7d6', san: 'd6' },
        { uci: 'g1f3', san: 'Nf3' },
        { uci: 'f8g7', san: 'Bg7', note: "The bishop eyes c3 and b2; rooks to a8 and b8 follow." }
      ] },
      style: 'Positional',
      aliases: ['Volga Gambit'],
      minutes: 20,
      familyId: 'bf-benoni',
      relatedOpenings: ['b-benoni', 'w-benoni-classical'],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'The e4-e5 break',
          text: "If White completes development and plays e4-e5 while Black's pieces are on the queenside, the centre opens against Black's king. Keep a knight or the queen able to watch e5." },
        { kind: 'Mistake', side: 'black', title: 'Playing it passively',
          text: "The pawn buys files and a diagonal, not a material edge. If the rooks do not reach a8 and b8 and the queen does not join on a5 or b6, Black is simply a pawn down." },
        { kind: 'Risk', side: 'white', title: 'An overworked c3 knight',
          text: "The c3 knight often guards e4, d5 and a2 at once while blocking the g7 bishop's path to b2 and a1. A knight capture on e4 or d5 can suddenly unmask the bishop (see the lesson)." }
      ],
      lines: [
        { id: 'kxf1', name: '5.bxa6 g6 6.Nc3 Bxa6 7.e4 Bxf1', kind: 'Accepted',
          summary: "The classic structure: Black trades the light-squared bishops so that White's king cannot castle and must walk to g2. Rooks to a8 and b8 follow.",
          moves: [
            { uci: 'c4b5', san: 'cxb5' },
            { uci: 'a7a6', san: 'a6', note: "A second offer opens the a-file too." },
            { uci: 'b5a6', san: 'bxa6' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'c8a6', san: 'Bxa6' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'a6f1', san: 'Bxf1', note: "White loses the right to castle." },
            { uci: 'e1f1', san: 'Kxf1' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8g7', san: 'Bg7', note: "The bishop aims down the long diagonal at c3, b2 and a1." }
          ] },
        { id: 'fianchetto', name: '5.bxa6 g6 6.Nc3 Bxa6 7.Nf3 d6 8.g3', kind: 'Accepted',
          summary: "White fianchettoes and castles normally. Black's play is the same: files on the queenside and the g7 bishop, with the pawn deficit as the price.",
          moves: [
            { uci: 'c4b5', san: 'cxb5' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5a6', san: 'bxa6' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'c8a6', san: 'Bxa6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'g2g3', san: 'g3', note: "White will castle on the kingside instead of walking the king." },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'e8g8', san: 'O-O', note: "Next come ...Nbd7, ...Qa5 and the rooks to a8 and b8." }
          ] },
        { id: 'b6', name: '4.cxb5 a6 5.b6', kind: 'Declined',
          summary: "White returns the pawn at once to keep the queenside closed. Black has easy development and no material deficit.",
          moves: [
            { uci: 'c4b5', san: 'cxb5' },
            { uci: 'a7a6', san: 'a6' },
            { uci: 'b5b6', san: 'b6', note: "Gives the pawn back rather than open the files." },
            { uci: 'd8b6', san: 'Qxb6', note: "Material is level and Black's pieces are active." },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd7d6', san: 'd6' }
          ] }
      ],
      lessons: ['black-gambits-9'],
      uncertain: "The 5.b6 decline is one of several White options (5.e3, 5.f3, 4.Nf3 and 4.a4 are also common); Black's best set-up against each varies."
    },

    /* --------------------------------------------------------- TWO KNIGHTS */
    {
      id: 'bg-two-knights',
      side: 'black',
      group: 'vs-e4',
      family: 'Two Knights Defence',
      name: 'Two Knights Defence: 5...Na5 gambit',
      eco: 'C58',
      defining: ['e2e4','e7e5','g1f3','b8c6','f1c4','g8f6','f3g5','d7d5','e4d5','c6a5'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 d5 5.exd5 Na5',
      character: 'Established',
      characterNote: "The main line against 4.Ng5 for over a century and a standard choice of strong players; Black's lead in development is widely judged sufficient compensation.",
      difficulty: 'Intermediate',
      summary: "When White's knight raids f7, Black blocks with ...d5, gives a pawn and chases White's pieces to gain time.",
      idea: "4.Ng5 attacks f7 twice. Black blocks the bishop with 4...d5, and after 5.exd5 refuses the risky recapture 5...Nxd5. Instead the knight hits the bishop on c4. White keeps a pawn, but Black gains time by kicking the bishop and the g5 knight, and gets open lines and quick development while White's pieces retreat.",
      offer: "The d-pawn: Black does not recapture on d5, and after 6.Bb5+ c6 7.dxc6 bxc6 Black is a pawn down.",
      compensation: "Several tempi gained by chasing White's bishop and knight, a space-gaining ...e4 and open lines for both bishops.",
      plans: {
        white: [
          "Retreat calmly (Be2, Nf3 then Ne5 or Nh3) and keep the extra pawn.",
          "Play d4 and O-O to finish development before Black's pressure grows.",
          "Do not try to keep every pawn; returning one for safe development is fine."
        ],
        black: [
          "Gain time: ...h6 kicks the knight, ...e4 kicks it again.",
          "Develop with ...Bd6 or ...Bc5, ...Qc7 and ...O-O, aiming pieces at the white king.",
          "Bring the a5 knight back into play via b7 or c4 when it has done its job."
        ]
      },
      risks: [
        "The knight on a5 can be stranded on the rim for a long time.",
        "If White consolidates, Black is simply a pawn down in a quieter position.",
        "Natural-looking alternatives like 5...Nxd5 run into a dangerous attack after 6.d4 or 6.Nxf7."
      ],
      accepted: "6.Bb5+ c6 7.dxc6 bxc6 8.Be2 h6 9.Nf3 e4 10.Ne5 Bd6 is the old main line: White's knight is pushed around while Black develops.",
      declined: "White cannot really decline once 4.Ng5 is played; 6.d3 is another way of keeping the pawn, in a quieter position where Black continues ...h6 and ...Nxc4 to win the bishop pair.",
      line: { fen: 'start', moves: [
        { uci: 'e2e4', san: 'e4' },
        { uci: 'e7e5', san: 'e5' },
        { uci: 'g1f3', san: 'Nf3' },
        { uci: 'b8c6', san: 'Nc6' },
        { uci: 'f1c4', san: 'Bc4' },
        { uci: 'g8f6', san: 'Nf6' },
        { uci: 'f3g5', san: 'Ng5', note: "Two attackers on f7; Black must block the bishop's line." },
        { uci: 'd7d5', san: 'd5' },
        { uci: 'e4d5', san: 'exd5' },
        { uci: 'c6a5', san: 'Na5', note: "The gambit: hit the bishop instead of recapturing into a dangerous attack." },
        { uci: 'c4b5', san: 'Bb5+' },
        { uci: 'c7c6', san: 'c6' },
        { uci: 'd5c6', san: 'dxc6' },
        { uci: 'b7c6', san: 'bxc6', note: "Black is a pawn down but opens the b-file and gains time on the bishop." },
        { uci: 'b5e2', san: 'Be2' },
        { uci: 'h7h6', san: 'h6', note: "Kicks the knight: every retreat is a tempo for Black." },
        { uci: 'g5f3', san: 'Nf3' },
        { uci: 'e5e4', san: 'e4', note: "And again. After 10.Ne5 Bd6 Black has easy development and space." }
      ] },
      style: 'Attacking',
      aliases: ['Polerio Defence'],
      minutes: 15,
      familyId: 'bf-italian',
      relatedOpenings: ['b-e5-two-knights'],
      pitfalls: [
        { kind: 'Mistake', side: 'black', title: '5...Nxd5? and the f7 sacrifice',
          text: "Recapturing with 5...Nxd5 invites 6.Nxf7 (the Fried Liver Attack) or 6.d4, with a dangerous attack on Black's king. 5...Na5 avoids it by hitting the bishop first.",
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'f3g5', 'd7d5', 'e4d5', 'f6d5', 'g5f7'] },
        { kind: 'Risk', side: 'black', title: 'The knight on the rim',
          text: "The a5 knight has done its job once the bishop is gone or chased, but it can be stranded. Bring it back via b7 or c4 when the time is right." },
        { kind: 'Risk', side: 'white', title: 'A chased knight',
          text: "Holding the extra pawn costs time: the g5 knight is kicked by ...h6 and ...e4 and can end up on h3 or e5 with little to do. Return the pawn if that buys safe development." }
      ],
      lines: [
        { id: 'nf3', name: '6.Bb5+ c6 7.dxc6 bxc6 8.Be2 h6 9.Nf3', kind: 'Main line',
          summary: "The classical main line: Black chases the knight with ...h6 and ...e4, then develops with ...Bd6 or ...Bc5 and castles.",
          moves: [
            { uci: 'c4b5', san: 'Bb5+' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd5c6', san: 'dxc6' },
            { uci: 'b7c6', san: 'bxc6', note: "A pawn down, but the bishop is hit again." },
            { uci: 'b5e2', san: 'Be2' },
            { uci: 'h7h6', san: 'h6', note: "Kicks the knight." },
            { uci: 'g5f3', san: 'Nf3' },
            { uci: 'e5e4', san: 'e4', note: "And again: every retreat costs White a tempo." },
            { uci: 'f3e5', san: 'Ne5' },
            { uci: 'f8d6', san: 'Bd6', note: "Black has space and easy development for the pawn." }
          ] },
        { id: 'nh3', name: '8.Be2 h6 9.Nh3', kind: 'Alternative',
          summary: "Steinitz's idea: the knight goes to h3 and later f4, avoiding ...e4 with tempo. Black develops quickly and aims at f2 with the c5 bishop.",
          moves: [
            { uci: 'c4b5', san: 'Bb5+' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd5c6', san: 'dxc6' },
            { uci: 'b7c6', san: 'bxc6' },
            { uci: 'b5e2', san: 'Be2' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5h3', san: 'Nh3', note: "Unusual, but it keeps the knight out of reach of ...e4." },
            { uci: 'f8c5', san: 'Bc5', note: "Black develops and eyes f2." }
          ] },
        { id: 'd3', name: '6.d3 h6 7.Nf3 e4', kind: 'Alternative',
          summary: "White keeps the bishop for a moment; Black chases the knight, then takes the bishop with ...Nxc4 and gets the bishop pair and quick development.",
          moves: [
            { uci: 'd2d3', san: 'd3' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5f3', san: 'Nf3' },
            { uci: 'e5e4', san: 'e4', note: "Hitting the knight again." },
            { uci: 'd1e2', san: 'Qe2', note: "Pins the e4 pawn and attacks it." },
            { uci: 'a5c4', san: 'Nxc4' },
            { uci: 'd3c4', san: 'dxc4' },
            { uci: 'f8c5', san: 'Bc5', note: "The bishop pair and active pieces for the pawn." }
          ] }
      ],
      lessons: ['black-gambits-4'],
      uncertain: "Modern theory also treats 9.Nh3 and 8.Bd3 as serious tries; the 9.Nf3 line shown is the classical main line."
    },

    /* ------------------------------------------------------------ BUDAPEST */
    {
      id: 'bg-budapest',
      side: 'black',
      group: 'vs-d4',
      family: 'Budapest Gambit',
      name: 'Budapest Gambit',
      eco: 'A52',
      defining: ['d2d4','g8f6','c2c4','e7e5'],
      moves: '1.d4 Nf6 2.c4 e5',
      character: 'Playable',
      characterNote: "Black usually wins the pawn back and gets active pieces, but White keeps a small edge with accurate play; a respected surprise weapon rather than a main line.",
      difficulty: 'Beginner',
      summary: "Black offers the e-pawn on move two, then usually regains it on e5 with quick, active development.",
      idea: "After 3.dxe5 Ng4 Black attacks the e5 pawn with the knight, then adds ...Nc6, ...Bb4+ and ...Qe7. White can rarely hold the pawn, so the real fight is about development: Black's pieces become active quickly, while White gets the bishop pair or a small space advantage.",
      offer: "The e5 pawn, which Black normally regains a few moves later.",
      compensation: "Fast development, the annoying ...Bb4+ check and pressure on e5 that usually wins the pawn back.",
      plans: {
        white: [
          "Defend e5 with Bf4 and Nf3 just long enough to finish development.",
          "Answer ...Bb4+ with Nbd2 and consider a3 to win the bishop pair.",
          "After the pawn is regained, use the extra space on the queenside with c4-c5 or b4."
        ],
        black: [
          "Hit e5 three times: ...Ng4, ...Nc6 and ...Qe7.",
          "Use ...Bb4+ to disturb White's development and watch for the e-file pin.",
          "After regaining the pawn, castle and bring a rook to e8; look for ...d6 and ...f5 later."
        ]
      },
      risks: [
        "If White gives the pawn back cleverly, Black can end up a little passive.",
        "Against 4.Bf4 Nc6 5.Nf3 Bb4+ 6.Nbd2 the bishop on b4 can be short of retreats.",
        "Sharp White tries such as 4.e4 aim to keep the extra pawn and need concrete knowledge."
      ],
      accepted: "3.dxe5 Ng4 4.Bf4 Nc6 5.Nf3 Bb4+ 6.Nbd2 Qe7 7.e3 Ngxe5: the pawn is back and Black is well developed.",
      declined: "3.d5 or 3.e3 avoid the gambit but give Black easy development; 3.d5 Bc5 is comfortable for Black.",
      line: { fen: 'start', moves: [
        { uci: 'd2d4', san: 'd4' },
        { uci: 'g8f6', san: 'Nf6' },
        { uci: 'c2c4', san: 'c4' },
        { uci: 'e7e5', san: 'e5', note: "The gambit: Black strikes at d4 before White has played Nc3 or Nf3." },
        { uci: 'd4e5', san: 'dxe5' },
        { uci: 'f6g4', san: 'Ng4', note: "The knight attacks e5 at once." },
        { uci: 'c1f4', san: 'Bf4' },
        { uci: 'b8c6', san: 'Nc6' },
        { uci: 'g1f3', san: 'Nf3' },
        { uci: 'f8b4', san: 'Bb4+', note: "A check that makes White block awkwardly." },
        { uci: 'b1d2', san: 'Nbd2' },
        { uci: 'd8e7', san: 'Qe7', note: "The third attacker on e5." },
        { uci: 'e2e3', san: 'e3' },
        { uci: 'g4e5', san: 'Ngxe5' },
        { uci: 'f3e5', san: 'Nxe5' },
        { uci: 'c6e5', san: 'Nxe5', note: "Material is level again and the knight on e5 is well placed." },
        { uci: 'f1e2', san: 'Be2' },
        { uci: 'e8g8', san: 'O-O' }
      ] },
      style: 'Attacking',
      minutes: 15,
      pitfalls: [
        { kind: 'Trap', side: 'white', title: 'The Kieninger Trap',
          text: "After 7.a3 Ngxe5, taking the bait with 8.axb4?? allows 8...Nd3 mate: the e2 pawn is pinned by the queen on e7. White should play 8.Nxe5 or 8.e3 instead.",
          uci: ['d2d4', 'g8f6', 'c2c4', 'e7e5', 'd4e5', 'f6g4', 'c1f4', 'b8c6', 'g1f3', 'f8b4', 'b1d2', 'd8e7', 'a2a3', 'g4e5', 'a3b4', 'e5d3'] },
        { kind: 'Risk', side: 'black', title: 'A bishop short of squares',
          text: "After ...Bb4+ and Nbd2, the bishop on b4 can be hit by a3 and may have to be exchanged for a knight, giving White the bishop pair." },
        { kind: 'Risk', side: 'black', title: 'The big-centre reply 4.e4',
          text: "With 4.e4 White returns nothing and builds a broad centre. Black regains e5 but must attack the centre at once with ...Bb4+ and ...Nc6, or be squeezed." }
      ],
      lines: [
        { id: 'bf4', name: '3.dxe5 Ng4 4.Bf4', kind: 'Accepted',
          summary: "The main line: White defends e5 with the bishop and knight, Black piles up with ...Nc6, ...Bb4+ and ...Qe7 and wins the pawn back.",
          moves: [
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'f6g4', san: 'Ng4', note: "The knight attacks e5 at once." },
            { uci: 'c1f4', san: 'Bf4' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8b4', san: 'Bb4+', note: "Makes White block awkwardly." },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'd8e7', san: 'Qe7', note: "The third attacker on e5." },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'g4e5', san: 'Ngxe5' },
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'c6e5', san: 'Nxe5', note: "Material is level and Black's pieces are active." }
          ] },
        { id: 'e4', name: '3.dxe5 Ng4 4.e4', kind: 'Alternative',
          summary: "White gives the e5 pawn back to build a big centre with e4 and f4. Black must hit it quickly with ...Bb4+ and piece play.",
          moves: [
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'f6g4', san: 'Ng4' },
            { uci: 'e2e4', san: 'e4', note: "Development of the centre rather than holding e5." },
            { uci: 'g4e5', san: 'Nxe5' },
            { uci: 'f2f4', san: 'f4', note: "Kicks the knight and grabs space." },
            { uci: 'e5c6', san: 'Nec6' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'f8b4', san: 'Bb4+', note: "Black develops with check and eyes the loosened centre." }
          ] },
        { id: 'fajarowicz', name: '3.dxe5 Ne4 (Fajarowicz Variation)', kind: 'Sideline',
          summary: "The knight goes to e4 instead of g4. Black usually stays a pawn down for longer and relies on quick development and tricks; 4.a3, taking b4 from the bishop, is a popular answer.",
          moves: [
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'f6e4', san: 'Ne4', note: "The Fajarowicz: the knight is active but does not attack e5." },
            { uci: 'a2a3', san: 'a3', note: "Stops ...Bb4+ for good." },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd7d6', san: 'd6', note: "Black opens lines for the c8 bishop, often offering more material." }
          ] }
      ],
      lessons: ['black-gambits-3'],
      uncertain: "The Fajarowicz Variation (3...Ne4) is shown as a sideline of the Budapest rather than a separate gambit; its theory is thin and the moves shown are typical rather than a single main line."
    },

    /* --------------------------------------------------------------- ALBIN */
    {
      id: 'bg-albin',
      side: 'black',
      group: 'vs-d4',
      family: "Queen's Gambit",
      name: 'Albin Countergambit',
      eco: 'D08',
      defining: ['d2d4','d7d5','c2c4','e7e5'],
      moves: '1.d4 d5 2.c4 e5',
      character: 'Playable',
      characterNote: "Objectively White keeps an edge, but the d4 wedge gives Black real play and it has been used at grandmaster level; sound enough for club and master games.",
      difficulty: 'Intermediate',
      summary: "Black meets the Queen's Gambit with a counter-offer, then drives a pawn wedge into d4 and often castles long.",
      idea: "After 3.dxe5 d4 Black's pawn cramps White: it stops Nc3 and e3 is answered sharply. Black develops with ...Nc6, ...Be6 or ...Bg4, ...Qd7 and often ...O-O-O, then attacks with ...h5-h4 or wins back the e5 pawn with ...Nge7-g6. White's main try is a fianchetto with g3 and Bg2.",
      offer: "The e5 pawn after 3.dxe5.",
      compensation: "The cramping d4 pawn, active pieces, and attacking chances if the kings castle on opposite sides.",
      plans: {
        white: [
          "Fianchetto with g3, Bg2, Nf3 and Nbd2, then castle short.",
          "Undermine d4 with e3 or b4-b5 only when well prepared.",
          "Hold on to e5 where possible, or return it for a lasting structural edge."
        ],
        black: [
          "Keep the d4 wedge and develop with ...Nc6, ...Be6 or ...Bg4, ...Qd7 and ...O-O-O.",
          "Win back e5 with ...Nge7-g6 or ...Qe7 when White's pieces cannot defend it.",
          "With opposite-side castling, push the h-pawn: ...h5-h4 to open lines."
        ]
      },
      risks: [
        "If the d4 pawn falls, Black is a pawn down with weaknesses.",
        "Castling long can backfire if White's queenside play (b4-b5, Qa4) arrives first.",
        "White's quiet fianchetto set-up takes the sting out of most tricks."
      ],
      accepted: "3.dxe5 d4 4.Nf3 Nc6 5.g3 is the main line; Black chooses between ...Be6 with ...O-O-O and ...Bg4 with ...Qd7.",
      declined: "3.e3? exd4 gives Black easy play; 3.cxd5 exd4 or 3.Nc3 are rare alternatives. The pawn is usually taken.",
      line: { fen: 'start', moves: [
        { uci: 'd2d4', san: 'd4' },
        { uci: 'd7d5', san: 'd5' },
        { uci: 'c2c4', san: 'c4' },
        { uci: 'e7e5', san: 'e5', note: "The counter-gambit: Black hits d4 instead of defending d5." },
        { uci: 'd4e5', san: 'dxe5' },
        { uci: 'd5d4', san: 'd4', note: "The wedge: it stops Nc3 and makes e3 risky." },
        { uci: 'g1f3', san: 'Nf3' },
        { uci: 'b8c6', san: 'Nc6', note: "Defends d4 and eyes e5." },
        { uci: 'g2g3', san: 'g3' },
        { uci: 'c8e6', san: 'Be6', note: "Hits the c4 pawn and prepares ...Qd7 and long castling." },
        { uci: 'b1d2', san: 'Nbd2' },
        { uci: 'd8d7', san: 'Qd7' },
        { uci: 'f1g2', san: 'Bg2' },
        { uci: 'e8c8', san: 'O-O-O', note: "Opposite-side castling ahead: once White castles short, ...h5-h4 and ...Bh3 aim at the king." }
      ] },
      style: 'Sharp',
      minutes: 15,
      familyId: 'wf-queens-gambit',
      relatedOpenings: ['w-queens-gambit'],
      pitfalls: [
        { kind: 'Trap', side: 'white', title: 'The Lasker Trap after 4.e3?',
          text: "4.e3? Bb4+ 5.Bd2 dxe3 6.Bxb4 exf2+ 7.Ke2 fxg1=N+! wins material: the underpromotion gives check. 4.Nf3 is the correct reply.",
          uci: ['d2d4', 'd7d5', 'c2c4', 'e7e5', 'd4e5', 'd5d4', 'e2e3', 'f8b4', 'c1d2', 'd4e3', 'd2b4', 'e3f2', 'e1e2', 'f2g1n'] },
        { kind: 'Risk', side: 'black', title: 'Losing the d4 pawn',
          text: "The d4 wedge is Black's main asset. If White undermines it with e3 or b4-b5 at a good moment and wins it, Black is simply a pawn down with weaknesses." },
        { kind: 'Risk', side: 'black', title: 'Long castling into a pawn storm',
          text: "Castling queenside is common, but if White's b4-b5 and Qa4 arrive before Black's ...h5-h4 attack, the black king is the one in danger." }
      ],
      lines: [
        { id: 'be6', name: '4.Nf3 Nc6 5.g3 Be6', kind: 'Main line',
          summary: "Black develops with ...Be6 and ...Qd7, castles long and plans ...Bh3 and ...h5-h4 against the fianchettoed king.",
          moves: [
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'd5d4', san: 'd4', note: "The wedge: it stops Nc3 and makes e3 risky." },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'c8e6', san: 'Be6', note: "Hits c4 and prepares ...Qd7." },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'd8d7', san: 'Qd7' },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'e8c8', san: 'O-O-O', note: "Opposite-side castling: ...Bh3 and ...h5-h4 are coming." }
          ] },
        { id: 'bg4', name: '4.Nf3 Nc6 5.g3 Bg4', kind: 'Alternative',
          summary: "The bishop goes to g4 instead, pinning the f3 knight that guards e5, with the same plan of ...Qd7 and long castling.",
          moves: [
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'd5d4', san: 'd4' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'c8g4', san: 'Bg4', note: "Pressure on the f3 knight, a defender of e5." },
            { uci: 'f1g2', san: 'Bg2' },
            { uci: 'd8d7', san: 'Qd7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8c8', san: 'O-O-O', note: "Black's rooks and queen line up on the d-file." }
          ] },
        { id: 'lasker', name: '4.e3? Bb4+ (Lasker Trap)', kind: 'Sideline',
          summary: "The famous trap: Black's pawn runs from d4 to g1 and promotes to a knight with check.",
          moves: [
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'd5d4', san: 'd4' },
            { uci: 'e2e3', san: 'e3', note: "Natural, but it opens lines while White's king is in the centre." },
            { uci: 'f8b4', san: 'Bb4+' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'd4e3', san: 'dxe3' },
            { uci: 'd2b4', san: 'Bxb4' },
            { uci: 'e3f2', san: 'exf2+' },
            { uci: 'e1e2', san: 'Ke2', note: "7.Kxf2?? Qxd1 wins the queen." },
            { uci: 'f2g1n', san: 'fxg1=N+', note: "The underpromotion: a queen would not give check." }
          ] }
      ],
      lessons: ['black-gambits-6'],
      uncertain: "After 7...O-O-O several plans (...Bh3, ...h5, ...Nge7) are played; none is clearly established as best."
    },

    /* ---------------------------------------------------------- SCHLIEMANN */
    {
      id: 'bg-schliemann',
      side: 'black',
      group: 'vs-e4',
      family: 'Ruy Lopez',
      name: 'Schliemann (Jaenisch) Gambit',
      eco: 'C63',
      defining: ['e2e4','e7e5','g1f3','b8c6','f1b5','f7f5'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bb5 f5',
      character: 'Playable',
      characterNote: "Used at elite level as an occasional weapon; theory says White keeps an edge with best play, but the lines are forcing and Black's chances are real.",
      difficulty: 'Advanced',
      summary: "Black answers the Ruy Lopez with a King's Gambit idea in reverse, hitting e4 at once and opening the f-file.",
      idea: "3...f5 attacks e4 and prepares ...fxe4 with the f-file opened for Black's rook. In the main line 4.Nc3 fxe4 5.Nxe4 d5 the play becomes very sharp: Black gives material for a direct attack with ...Qg5 or ...Qd5, often aimed at g2 and the bishop on b5. It is a weapon for players who enjoy concrete calculation.",
      offer: "Strictly the f-pawn and often more: after 4.exf5 Black gives the pawn for ...e4; in the main line pieces are traded at high speed.",
      compensation: "The open f-file, quick development and the initiative; White's king is often the target.",
      plans: {
        white: [
          "4.Nc3 and 5.Nxe4 meet the attack head-on and test Black's theory.",
          "The quiet 4.d3 keeps everything defended and plays for a small, safe edge.",
          "Castle and develop quickly; many lines turn into a race for the initiative."
        ],
        black: [
          "Open the f-file with ...fxe4 and develop with ...Nf6, ...d5 and ...Bd6 or ...Bc5.",
          "Use double attacks with the queen (...Qg5 against g2 and b5) in the main lines.",
          "Against 4.d3 play ...fxe4, ...Nf6 and ...Bc5 with a lively, normal position."
        ]
      },
      risks: [
        "The forcing main lines demand exact memory; a single slip often loses at once.",
        "Black's king is airier after ...f5, especially on the e8-h5 diagonal.",
        "Quiet replies like 4.d3 leave Black with a slightly loosened position and no attack."
      ],
      accepted: "4.Nc3 fxe4 5.Nxe4 d5 6.Nxe5 dxe4 7.Nxc6 Qg5 leads to a wild fight where both kings are exposed.",
      declined: "4.d3 fxe4 5.dxe4 Nf6 6.O-O Bc5 is calmer; Black has active pieces and a slightly loose kingside.",
      line: { fen: 'start', moves: [
        { uci: 'e2e4', san: 'e4' },
        { uci: 'e7e5', san: 'e5' },
        { uci: 'g1f3', san: 'Nf3' },
        { uci: 'b8c6', san: 'Nc6' },
        { uci: 'f1b5', san: 'Bb5' },
        { uci: 'f7f5', san: 'f5', note: "The gambit: an immediate strike at e4 with the f-pawn." },
        { uci: 'b1c3', san: 'Nc3', note: "The critical reply: White defends e4 with a developing move." },
        { uci: 'f5e4', san: 'fxe4' },
        { uci: 'c3e4', san: 'Nxe4' },
        { uci: 'd7d5', san: 'd5', note: "Hits the knight; Black is willing to give up e5." },
        { uci: 'f3e5', san: 'Nxe5' },
        { uci: 'd5e4', san: 'dxe4' },
        { uci: 'e5c6', san: 'Nxc6' },
        { uci: 'd8g5', san: 'Qg5', note: "A double attack on g2 and the bishop on b5." },
        { uci: 'd1e2', san: 'Qe2' },
        { uci: 'g8f6', san: 'Nf6' },
        { uci: 'f2f4', san: 'f4' },
        { uci: 'g5f4', san: 'Qxf4', note: "Wild play follows, usually 10.Ne5+ c6 11.d4: theory runs very deep." }
      ] },
      style: 'Sharp',
      aliases: ['Jaenisch Gambit'],
      minutes: 20,
      familyId: 'bf-ruy-lopez',
      relatedOpenings: ['w-ruy-lopez-closed', 'b-ruy-berlin'],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'Memory, not improvisation',
          text: "The 4.Nc3 main lines are forcing for many moves. A single wrong queen move or move-order slip usually costs material at once; learn the lines before using them." },
        { kind: 'Risk', side: 'black', title: 'The e8-h5 diagonal',
          text: "...f5 opens the diagonal to Black's king. Qh5+ ideas and checks on e-file must be counted, especially if Black's queen leaves d8." },
        { kind: 'Risk', side: 'black', title: 'The quiet 4.d3',
          text: "Against 4.d3 there is no attack to play for: Black gets an active but slightly loosened position and must play normal chess." }
      ],
      lines: [
        { id: 'nc3-d5', name: '4.Nc3 fxe4 5.Nxe4 d5', kind: 'Main line',
          summary: "The critical line: Black gives up e5 to gain time, and ...Qg5 hits g2 and the b5 bishop. Both kings come under fire.",
          moves: [
            { uci: 'b1c3', san: 'Nc3', note: "Defends e4 with a developing move." },
            { uci: 'f5e4', san: 'fxe4' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'd7d5', san: 'd5', note: "Hits the knight; e5 is left to its fate." },
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'd5e4', san: 'dxe4' },
            { uci: 'e5c6', san: 'Nxc6' },
            { uci: 'd8g5', san: 'Qg5', note: "Saves the queen with a double attack on g2 and b5." },
            { uci: 'd1e2', san: 'Qe2' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f2f4', san: 'f4' },
            { uci: 'g5f4', san: 'Qxf4' }
          ] },
        { id: 'nc3-nf6', name: '4.Nc3 fxe4 5.Nxe4 Nf6', kind: 'Alternative',
          summary: "A less forcing choice: Black trades a pair of knights and develops, accepting a slightly weaker structure for active pieces.",
          moves: [
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'f5e4', san: 'fxe4' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'g8f6', san: 'Nf6', note: "Develops and offers a knight trade." },
            { uci: 'e4f6', san: 'Nxf6+' },
            { uci: 'd8f6', san: 'Qxf6', note: "The queen is active, but e5 needs watching." },
            { uci: 'd1e2', san: 'Qe2', note: "Hits e5 and prepares to castle." }
          ] },
        { id: 'd3', name: '4.d3 fxe4 5.dxe4 Nf6', kind: 'Declined',
          summary: "White keeps everything defended. Black develops with ...Nf6 and ...Bc5 and has an active, normal game with a slightly loose kingside.",
          moves: [
            { uci: 'd2d3', san: 'd3', note: "Solid: e4 is defended and nothing is offered." },
            { uci: 'f5e4', san: 'fxe4' },
            { uci: 'd3e4', san: 'dxe4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8c5', san: 'Bc5', note: "Active development; the f-file is half-open for Black's rook." }
          ] }
      ],
      lessons: ['black-gambits-13'],
      uncertain: "This main line is extremely sharp and theory has shifted several times; the moves shown are standard but check a current source before relying on them."
    },

    /* ------------------------------------------------------------ FALKBEER */
    {
      id: 'bg-falkbeer',
      side: 'black',
      group: 'vs-e4',
      family: "King's Gambit",
      name: 'Falkbeer Countergambit',
      eco: 'C31',
      defining: ['e2e4','e7e5','f2f4','d7d5'],
      moves: '1.e4 e5 2.f4 d5',
      character: 'Playable',
      characterNote: "2...d5 is a fully respectable answer to the King's Gambit; the classical 3...e4 follow-up shown here is a little riskier than the modern 3...exf4, but holds up at club level.",
      difficulty: 'Intermediate',
      summary: "Black meets the King's Gambit with a counter-strike in the centre, then drives a pawn wedge to e4.",
      idea: "Instead of taking on f4, Black hits e4 at once. After 3.exd5 e4 the pawn on e4 cramps White's development (the pawn covers d3 and f3, so Nf3 and Bd3 are awkward), and Black regains the d5 pawn or gets quick development with ...Nf6, ...Bc5 and ...O-O. White's 2.f4 has also weakened the e1-h4 diagonal and the a7-g1 diagonal towards the king.",
      offer: "The d5 pawn, offered with 2...d5 and left hanging after 3.exd5 e4.",
      compensation: "The e4 wedge, open diagonals towards White's king (...Bc5, ...Qh4+ ideas) and fast development.",
      plans: {
        white: [
          "Undermine e4 at once with d3, or play Nc3 and Qe2 to pile up on it.",
          "Keep the extra d5 pawn only if it does not cost too much time.",
          "Cover the weakened diagonals: watch ...Bc5 against g1 and ...Qh4+ when e1-h4 opens."
        ],
        black: [
          "Support e4 with ...Nf6 and develop with ...Bc5 and ...O-O.",
          "Use the a7-g1 diagonal and the e-file against the uncastled white king.",
          "Regain d5 with ...Qxd5 or ...Nxd5 when it is safe."
        ]
      },
      risks: [
        "The e4 pawn can become a target after d3 and Qe2, and it may simply fall.",
        "If Black regains nothing, White's extra d-pawn cramps Black's queenside.",
        "Many King's Gambit players know the critical 4.d3 lines well."
      ],
      accepted: "3.exd5 e4 4.d3 Nf6 5.dxe4 Nxe4 6.Nf3 Bc5: the knight on e4 is strong and Black eyes f2.",
      declined: "3.Nf3 or 3.Nc3 sidestep the main line; Black can also meet 3.exd5 with 3...exf4, a King's Gambit Accepted.",
      line: { fen: 'start', moves: [
        { uci: 'e2e4', san: 'e4' },
        { uci: 'e7e5', san: 'e5' },
        { uci: 'f2f4', san: 'f4' },
        { uci: 'd7d5', san: 'd5', note: "The counter-gambit: strike in the centre rather than take on f4." },
        { uci: 'e4d5', san: 'exd5' },
        { uci: 'e5e4', san: 'e4', note: "The wedge cramps White's knight and bishop." },
        { uci: 'd2d3', san: 'd3', note: "The most testing reply: White attacks the wedge at once." },
        { uci: 'g8f6', san: 'Nf6' },
        { uci: 'd3e4', san: 'dxe4' },
        { uci: 'f6e4', san: 'Nxe4', note: "The knight lands in the centre and eyes f2." },
        { uci: 'g1f3', san: 'Nf3' },
        { uci: 'f8c5', san: 'Bc5', note: "Aims at g1 and f2: White's king cannot castle easily." },
        { uci: 'd1e2', san: 'Qe2', note: "Pins the knight against Black's king along the e-file." },
        { uci: 'c8f5', san: 'Bf5', note: "Defends the knight; Black has completed rapid development." }
      ] },
      style: 'Attacking',
      minutes: 12,
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'The e4 wedge can fall',
          text: "After 4.d3 and Qe2, White attacks the e4 pawn or knight repeatedly. If Black cannot keep it supported, the main asset of the counter-gambit disappears." },
        { kind: 'Risk', side: 'white', title: 'The weakened diagonals',
          text: "2.f4 opened the a7-g1 and e1-h4 diagonals. With a bishop on c5, ...Nf2 and ...Bf2+ tricks appear whenever White develops carelessly; Qe2 is often the necessary defence." },
        { kind: 'Mistake', side: 'white', title: 'Developing the king bishop first',
          text: "In the 4.d3 line, natural bishop moves such as 7.Bd3 or 7.Be2 ignore the pressure on f2; the knight jump to f2 is the danger (see the lesson)." }
      ],
      lines: [
        { id: 'e4-d3', name: '3.exd5 e4 4.d3', kind: 'Main line',
          summary: "The classical Falkbeer: the e4 wedge is attacked at once, Black recaptures with the knight and develops with ...Bc5 and ...Bf5.",
          moves: [
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'e5e4', san: 'e4', note: "The wedge cramps White's knight and bishop." },
            { uci: 'd2d3', san: 'd3', note: "The most testing reply." },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd3e4', san: 'dxe4' },
            { uci: 'f6e4', san: 'Nxe4', note: "A strong central knight that eyes f2." },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8c5', san: 'Bc5' },
            { uci: 'd1e2', san: 'Qe2', note: "Pins the knight against the king and defends f2." },
            { uci: 'c8f5', san: 'Bf5' }
          ] },
        { id: 'exf4', name: '3.exd5 exf4 (modern)', kind: 'Alternative',
          summary: "The modern treatment: Black simply takes on f4, reaching a King's Gambit Accepted structure where Black regains d5 or develops freely.",
          moves: [
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'e5f4', san: 'exf4', note: "Now it is a King's Gambit Accepted by transposition." },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Nf6', note: "Attacks d5." },
            { uci: 'f1b5', san: 'Bb5+' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd5c6', san: 'dxc6' },
            { uci: 'b8c6', san: 'Nxc6', note: "Black is active and the f4 pawn is still there." }
          ] }
      ],
      lessons: ['black-gambits-14'],
      uncertain: "The 7.Qe2 Bf5 position is old theory; current assessments vary between equal and a small White edge."
    },

    /* ---------------------------------------------------------- BLUMENFELD */
    {
      id: 'bg-blumenfeld',
      side: 'black',
      group: 'vs-d4',
      family: 'Blumenfeld Gambit',
      name: 'Blumenfeld Gambit',
      eco: 'E10',
      defining: ['d2d4','g8f6','c2c4','e7e6','g1f3','c7c5','d4d5','b7b5'],
      moves: '1.d4 Nf6 2.c4 e6 3.Nf3 c5 4.d5 b5',
      character: 'Playable',
      characterNote: "Rare at the very top because 5.Bg5 is thought to give White an edge, but it has never been refuted and is a respected club and master weapon.",
      difficulty: 'Advanced',
      summary: "A Benko cousin: Black gives the b-pawn to build a big central pawn mass with ...e6 and ...d5.",
      idea: "Black offers the b-pawn to deflect White's c-pawn, then rebuilds the centre with pawns on e6 and d5 (and often ...e5-e4). That central mass, supported by bishops on d6 and b7, cramps White and points at the kingside. Unlike the Benko, the play is central and dynamic rather than a slow queenside squeeze.",
      offer: "The b5 pawn, taken by cxb5 after White has exchanged on e6 or allowed ...exd5.",
      compensation: "A strong pawn centre (e6, d5, later e5-e4), open lines for the bishops and the half-open f-file after ...fxe6.",
      plans: {
        white: [
          "5.Bg5 is the critical answer: pin the f6 knight and attack the d5 point.",
          "After accepting, blockade the centre with pieces (Nc3, e3, Bd3) and attack the pawn mass.",
          "Keep the extra b-pawn as an endgame trump."
        ],
        black: [
          "Build the centre: ...fxe6, ...d5, then ...e5 and sometimes ...e4.",
          "Develop with ...Bd6, ...Bb7, ...O-O and ...Nbd7, aiming at h2.",
          "Use the half-open f-file for the rook against f2 and f3."
        ]
      },
      risks: [
        "Against 5.Bg5 Black often ends up with a worse structure.",
        "If the central pawns are blockaded, they become targets rather than strengths.",
        "Black's king can feel draughty after ...fxe6."
      ],
      accepted: "5.dxe6 fxe6 6.cxb5 d5 gives Black the ideal centre; White develops with e3, Nc3 and Be2.",
      declined: "5.Bg5 is the main way to decline or return the pawn: 5...exd5 6.cxd5 h6 7.Bxf6 Qxf6 with a double-edged game.",
      line: { fen: 'start', moves: [
        { uci: 'd2d4', san: 'd4' },
        { uci: 'g8f6', san: 'Nf6' },
        { uci: 'c2c4', san: 'c4' },
        { uci: 'e7e6', san: 'e6' },
        { uci: 'g1f3', san: 'Nf3' },
        { uci: 'c7c5', san: 'c5' },
        { uci: 'd4d5', san: 'd5' },
        { uci: 'b7b5', san: 'b5', note: "The gambit: lure the c-pawn away from the centre." },
        { uci: 'd5e6', san: 'dxe6' },
        { uci: 'f7e6', san: 'fxe6', note: "Black recaptures towards the centre and opens the f-file for the rook." },
        { uci: 'c4b5', san: 'cxb5' },
        { uci: 'd7d5', san: 'd5', note: "The dream centre: pawns on c5, d5 and e6." },
        { uci: 'e2e3', san: 'e3' },
        { uci: 'f8d6', san: 'Bd6', note: "Aims at h2; ...e5 and ...e4 may follow." },
        { uci: 'b1c3', san: 'Nc3' },
        { uci: 'e8g8', san: 'O-O' },
        { uci: 'f1e2', san: 'Be2' },
        { uci: 'c8b7', san: 'Bb7', note: "Both bishops point at the kingside; Black plans ...Nbd7 and ...e5." }
      ] },
      style: 'Sharp',
      minutes: 15,
      relatedOpenings: ['b-benoni', 'b-qid'],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'The critical 5.Bg5',
          text: "5.Bg5 pins the f6 knight and attacks the d5 point before Black's centre forms. Black often ends up with a worse structure, so know your answer before choosing the Blumenfeld." },
        { kind: 'Risk', side: 'black', title: 'Blockaded central pawns',
          text: "If White blockades the c5, d5 and e6 pawns with pieces (a knight on d4 or e4), they become targets rather than strengths. Keep them mobile with ...e5 and ...e4." },
        { kind: 'Mistake', side: 'white', title: 'Letting the pawns roll',
          text: "In the accepted lines, passive development lets Black play ...e5 and ...e4, kicking the f3 knight and opening the d6 bishop's diagonal to h2." }
      ],
      lines: [
        { id: 'accepted', name: '5.dxe6 fxe6 6.cxb5 d5', kind: 'Accepted',
          summary: "Black gets the dream centre of c5, d5 and e6 and a half-open f-file. White keeps the extra pawn and must blockade.",
          moves: [
            { uci: 'd5e6', san: 'dxe6' },
            { uci: 'f7e6', san: 'fxe6', note: "Towards the centre, opening the f-file." },
            { uci: 'c4b5', san: 'cxb5' },
            { uci: 'd7d5', san: 'd5', note: "The ideal pawn centre." },
            { uci: 'e2e3', san: 'e3' },
            { uci: 'f8d6', san: 'Bd6', note: "Aims at h2; ...e5 and ...e4 may follow." },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e8g8', san: 'O-O' }
          ] },
        { id: 'bg5', name: '5.Bg5 exd5 6.cxd5 h6', kind: 'Declined',
          summary: "White ignores the b-pawn and pins the knight. After the exchanges on d5 and f6, play is double-edged and Black's centre is less imposing.",
          moves: [
            { uci: 'c1g5', san: 'Bg5', note: "The critical reply: pin first, take later." },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'h7h6', san: 'h6', note: "Asking the bishop to decide." },
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'd8f6', san: 'Qxf6', note: "Black has the bishop pair; White has a strong d5 pawn and quick development." }
          ] }
      ],
      lessons: ['black-gambits-15'],
      uncertain: "The accepted line is shown for its typical ideas; the exact move order after 6...d5 varies between sources."
    },

    /* ----------------------------------------------------------- ICELANDIC */
    {
      id: 'bg-icelandic',
      side: 'black',
      group: 'vs-e4',
      family: 'Scandinavian Defence',
      name: 'Icelandic Gambit (Scandinavian)',
      eco: 'B01',
      defining: ['e2e4','d7d5','e4d5','g8f6','c2c4','e7e6'],
      moves: '1.e4 d5 2.exd5 Nf6 3.c4 e6',
      character: 'Speculative',
      characterNote: "White can keep the extra pawn with careful development and should stand better; Black's practical chances come from quick piece play and surprise.",
      difficulty: 'Intermediate',
      summary: "When White clings to the d5 pawn with 3.c4, Black gives a pawn for very rapid development.",
      idea: "3.c4 holds the d5 pawn but weakens d4 and delays White's development. Black strikes with 3...e6, and after 4.dxe6 Bxe6 Black is a pawn down but has three pieces ready to come out, open lines for both bishops and targets on c4 and d4. The idea is quick ...Nc6, ...Bc5 or ...Bb4+, ...Qe7 and castling, then pressure on the e-file.",
      offer: "The e-pawn, after 4.dxe6 Bxe6.",
      compensation: "A clear lead in development and pressure on the e-file and the weak d4 square.",
      plans: {
        white: [
          "Develop quickly (Nf3, Be2, O-O) and keep the extra pawn.",
          "Play d4 only when it is safe; d3 is a solid alternative.",
          "Trade pieces to blunt Black's activity."
        ],
        black: [
          "Develop fast: ...Nc6, ...Bc5 or ...Bb4+, ...Qe7 and castle, often long.",
          "Put rooks on d8 and e8 against the uncastled king and the d-pawn.",
          "Use ...Nb4 or ...Ne4 to jump into White's position."
        ]
      },
      risks: [
        "If White completes development safely, Black is simply a pawn down.",
        "Many players answer 2...Nf6 with 3.d4 or 3.Bb5+, so the gambit may never appear.",
        "Black's queen on e7 can face an awkward e-file pin."
      ],
      accepted: "4.dxe6 Bxe6 5.Nf3 Nc6 6.Be2 Bc5 7.O-O Qe7 shows Black's typical lead in development.",
      declined: "4.Nc3 or 4.d4 avoid the main line; after 4.Nc3 exd5 5.cxd5 Nxd5 6.Nxd5 Qxd5 Black has regained the pawn.",
      line: { fen: 'start', moves: [
        { uci: 'e2e4', san: 'e4' },
        { uci: 'd7d5', san: 'd5' },
        { uci: 'e4d5', san: 'exd5' },
        { uci: 'g8f6', san: 'Nf6' },
        { uci: 'c2c4', san: 'c4', note: "White hangs on to d5, but this loosens d4." },
        { uci: 'e7e6', san: 'e6', note: "The gambit: Black gives a second central pawn to open lines." },
        { uci: 'd5e6', san: 'dxe6' },
        { uci: 'c8e6', san: 'Bxe6', note: "Black is a pawn down but the bishop already hits c4." },
        { uci: 'g1f3', san: 'Nf3' },
        { uci: 'b8c6', san: 'Nc6' },
        { uci: 'f1e2', san: 'Be2' },
        { uci: 'f8c5', san: 'Bc5', note: "Aims at f2 and prevents a quick d4." },
        { uci: 'e1g1', san: 'O-O' },
        { uci: 'd8e7', san: 'Qe7', note: "Ready to castle long with rooks on d8 and e8." }
      ] },
      style: 'Attacking',
      minutes: 10,
      familyId: 'bf-scandinavian',
      relatedOpenings: ['b-scandinavian', 'w-scandinavian'],
      pitfalls: [
        { kind: 'Trap', side: 'white', title: 'The pin on c3',
          text: "After 5.d4 Bb4+ 6.Nc3 Ne4 7.Nf3?, the pinned c3 knight falls: 7...Nxc3 8.bxc3 Bxc3+ forks king and rook. 6.Bd2 is the more careful block.",
          uci: ['e2e4', 'd7d5', 'e4d5', 'g8f6', 'c2c4', 'e7e6', 'd5e6', 'c8e6', 'd2d4', 'f8b4', 'b1c3', 'f6e4', 'g1f3', 'e4c3', 'b2c3', 'b4c3'] },
        { kind: 'Risk', side: 'black', title: 'Simply a pawn down',
          text: "If White develops with Nf3, Be2 and O-O and avoids tactics, Black has little for the pawn. The gambit relies on White's loose centre and king." }
      ],
      lines: [
        { id: 'accepted', name: '4.dxe6 Bxe6 5.Nf3', kind: 'Accepted',
          summary: "White takes the second pawn and develops carefully. Black's quick development and pressure on c4 and the e-file are the compensation.",
          moves: [
            { uci: 'd5e6', san: 'dxe6' },
            { uci: 'c8e6', san: 'Bxe6', note: "A pawn down, but the bishop already hits c4." },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'f8c5', san: 'Bc5', note: "Aims at f2 and prevents a quick d4." },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd8e7', san: 'Qe7' }
          ] },
        { id: 'nc3', name: '4.Nc3 exd5 5.cxd5 Nxd5', kind: 'Declined',
          summary: "White declines the second pawn. Black recaptures on d5 and material is level, with an open, easy game.",
          moves: [
            { uci: 'b1c3', san: 'Nc3', note: "Develops instead of taking on e6." },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'c4d5', san: 'cxd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'c3d5', san: 'Nxd5' },
            { uci: 'd8d5', san: 'Qxd5', note: "The pawn is back; Black has no problems." }
          ] }
      ],
      lessons: ['black-gambits-10'],
      uncertain: "Illustrative development scheme; theory here is thin and engines favour White."
    },

    /* ------------------------------------------------------------- TRAXLER */
    {
      id: 'bg-traxler',
      side: 'black',
      group: 'vs-e4',
      family: 'Two Knights Defence',
      name: 'Traxler Counterattack',
      eco: 'C57',
      defining: ['e2e4','e7e5','g1f3','b8c6','f1c4','g8f6','f3g5','f8c5'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 Bc5',
      character: 'Speculative',
      characterNote: "Black ignores the threat to f7 entirely. Modern analysis gives White the better game with 5.Bxf7+, but the lines are so sharp that unprepared opponents often lose.",
      difficulty: 'Advanced',
      summary: "Black ignores White's attack on f7 and counter-attacks f2, inviting a wild race.",
      idea: "After 4.Ng5 Black does not defend f7. If 5.Nxf7, Black hits back with 5...Bxf2+! 6.Kxf2 Nxe4+, dragging the white king into the open where the queen and knights can attack it. The material swings back and forth; what matters is king safety and tempo.",
      offer: "The f7 pawn and the rook on h8 (after Nxf7 forks queen and rook); then the bishop with ...Bxf2+.",
      compensation: "A ferocious attack on the exposed white king after ...Bxf2+ and ...Nxe4+.",
      plans: {
        white: [
          "5.Bxf7+ Ke7 is the safest test: take a pawn and keep the king at home.",
          "After 5.Nxf7 Bxf2+ 6.Kxf2 Nxe4+, 7.Kg1 is the critical king move.",
          "Return material when needed to get the king safe."
        ],
        black: [
          "Answer 5.Nxf7 with 5...Bxf2+ and 6...Nxe4+ at once.",
          "Bring the queen to h4 and the rook to f8 to hunt the king.",
          "After 5.Bxf7+ Ke7, use the open f-file and ...Rf8 for activity."
        ]
      },
      risks: [
        "Objectively unsound against the calm 5.Bxf7+.",
        "One inaccuracy and Black is a rook or more down with no attack.",
        "Long forcing lines must be memorised; over-the-board improvisation rarely works."
      ],
      accepted: "5.Nxf7 Bxf2+ 6.Kxf2 Nxe4+ 7.Kg1 Qh4 8.g3 leads to a chaotic position; both kings are in danger.",
      declined: "5.Bxf7+ Ke7 6.Bd5 (or 6.Bb3) declines the race; Black has lost castling but has open lines.",
      line: { fen: 'start', moves: [
        { uci: 'e2e4', san: 'e4' },
        { uci: 'e7e5', san: 'e5' },
        { uci: 'g1f3', san: 'Nf3' },
        { uci: 'b8c6', san: 'Nc6' },
        { uci: 'f1c4', san: 'Bc4' },
        { uci: 'g8f6', san: 'Nf6' },
        { uci: 'f3g5', san: 'Ng5' },
        { uci: 'f8c5', san: 'Bc5', note: "The counter-attack: Black ignores f7 and aims at f2." },
        { uci: 'g5f7', san: 'Nxf7', note: "The knight forks queen and rook, but leaves f2 weak." },
        { uci: 'c5f2', san: 'Bxf2+', note: "The point: the king is dragged out." },
        { uci: 'e1f2', san: 'Kxf2' },
        { uci: 'f6e4', san: 'Nxe4+', note: "Another check; the queen will join with ...Qh4 or ...Qf6." },
        { uci: 'f2g1', san: 'Kg1', note: "The safest square, though the rook on h1 is now buried." },
        { uci: 'd8h4', san: 'Qh4', note: "Threatens ...Qf2 mate; White must find precise defence." }
      ] },
      style: 'Sharp',
      aliases: ['Wilkes-Barre Variation'],
      minutes: 15,
      familyId: 'bf-italian',
      relatedOpenings: ['b-e5-two-knights'],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'The calm 5.Bxf7+',
          text: "5.Bxf7+ Ke7 takes a pawn, avoids the race and leaves Black's king exposed on e7. Modern analysis prefers White here, so prepare an answer (6.Bb3 or 6.Bd5 Rf8)." },
        { kind: 'Mistake', side: 'black', title: 'Saving the queen after Nxf7',
          text: "After 5.Nxf7, defending with ...Qe7 or castling simply loses material: 5...Qe7 6.Nxh8 leaves Black a rook down. The counter-attack 5...Bxf2+ is the point of the line." },
        { kind: 'Risk', side: 'white', title: 'A king in the open',
          text: "After 5.Nxf7 Bxf2+ 6.Kxf2 Nxe4+, White is material up but the king is exposed and the f7 knight is far away. 7.Kg1 is the critical defence; careless king moves invite more checks from the queen and knights.",
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'f3g5', 'f8c5', 'g5f7', 'c5f2', 'e1f2', 'f6e4'] }
      ],
      lines: [
        { id: 'nxf7', name: '5.Nxf7 Bxf2+ 6.Kxf2 Nxe4+', kind: 'Accepted',
          summary: "The wild main line: Black ignores the fork, drags the king out with checks and brings the queen to h4 with a mating threat on f2.",
          moves: [
            { uci: 'g5f7', san: 'Nxf7', note: "Forks queen and rook, but leaves f2 weak." },
            { uci: 'c5f2', san: 'Bxf2+', note: "The point: the king is dragged out." },
            { uci: 'e1f2', san: 'Kxf2' },
            { uci: 'f6e4', san: 'Nxe4+' },
            { uci: 'f2g1', san: 'Kg1', note: "The safest square, though the h1 rook is buried." },
            { uci: 'd8h4', san: 'Qh4', note: "Threatens ...Qf2 mate." }
          ] },
        { id: 'bxf7', name: '5.Bxf7+ Ke7 6.Bb3', kind: 'Declined',
          summary: "White takes a pawn with check and declines the race. Black has lost castling but gets the f-file and active pieces.",
          moves: [
            { uci: 'c4f7', san: 'Bxf7+', note: "The safest test." },
            { uci: 'e8e7', san: 'Ke7' },
            { uci: 'f7b3', san: 'Bb3' },
            { uci: 'h8f8', san: 'Rf8', note: "The rook takes the open f-file at once." },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd7d6', san: 'd6', note: "White is a pawn up; Black has lost castling but has the f-file and active pieces." }
          ] }
      ],
      lessons: ['black-gambits-7'],
      uncertain: "Theory after 7...Qh4 (8.g3, 8.Qe1 and others) is unsettled; engines tend to prefer White."
    },

    /* --------------------------------------------------------------- FROM */
    {
      id: 'bg-froms',
      side: 'black',
      group: 'vs-flank',
      family: 'Bird Opening',
      name: "From's Gambit",
      eco: 'A02',
      defining: ['f2f4','e7e5'],
      moves: '1.f4 e5',
      character: 'Speculative',
      characterNote: "With 4.Nf3 White avoids the traps and should keep an edge; Bird players often know it. Still dangerous because one natural move loses at once.",
      difficulty: 'Beginner',
      summary: "Black answers the Bird with an immediate pawn offer, aiming at the weakened e1-h4 diagonal.",
      idea: "1.f4 loosens the squares around White's king. After 2.fxe5 d6 3.exd6 Bxd6 Black has an open diagonal from d6 to g3 and h2, and the queen can come to h4. If White forgets Nf3, ...Qh4+ wins at once. Against good defence Black plays ...g5-g4 to kick the knight and regains material or keeps the initiative.",
      offer: "The e-pawn, then the d-pawn too after 2.fxe5 d6 3.exd6, though ...Bxd6 takes one back: Black is a pawn down.",
      compensation: "Open lines towards White's king (the d6-h2 diagonal and the e1-h4 diagonal) and quick development.",
      plans: {
        white: [
          "Play Nf3 early to block ...Qh4+ and guard h2.",
          "Return a pawn with d4 and develop normally.",
          "Avoid g3 while the bishop and queen aim at it."
        ],
        black: [
          "Use ...Bd6 and ...Qh4+ against a careless set-up.",
          "Against 4.Nf3 play ...g5-g4 or ...Nf6 and ...Ng4, attacking h2.",
          "Regain material in the endgame lines if White forces queen trades."
        ]
      },
      risks: [
        "Most Bird players answer 2.fxe5 and 4.Nf3 correctly.",
        "White can decline with 2.e4, transposing to a King's Gambit you may not want.",
        "If the attack fails, Black is a pawn down with a loose kingside after ...g5."
      ],
      accepted: "2.fxe5 d6 3.exd6 Bxd6 4.Nf3 g5 is the sharp Lasker line; 4...Nf6 is calmer.",
      declined: "2.e4 turns the game into a King's Gambit; be ready for it or choose 1...d5 instead.",
      line: { fen: 'start', moves: [
        { uci: 'f2f4', san: 'f4' },
        { uci: 'e7e5', san: 'e5', note: "The gambit: hitting f4 and aiming at the loosened king." },
        { uci: 'f4e5', san: 'fxe5' },
        { uci: 'd7d6', san: 'd6', note: "A second pawn, to open the bishop's diagonal at once." },
        { uci: 'e5d6', san: 'exd6' },
        { uci: 'f8d6', san: 'Bxd6', note: "Now ...Qh4+ is a threat: g3 would drop to ...Bxg3." },
        { uci: 'g1f3', san: 'Nf3', note: "The only good move: it covers h4 and h2." },
        { uci: 'g7g5', san: 'g5', note: "Lasker's idea: kick the knight with ...g4." },
        { uci: 'd2d4', san: 'd4' },
        { uci: 'g5g4', san: 'g4' },
        { uci: 'f3e5', san: 'Ne5' },
        { uci: 'd6e5', san: 'Bxe5' },
        { uci: 'd4e5', san: 'dxe5' },
        { uci: 'd8d1', san: 'Qxd1+' },
        { uci: 'e1d1', san: 'Kxd1' },
        { uci: 'b8c6', san: 'Nc6', note: "Black wins back e5 next, reaching a roughly level endgame." }
      ] },
      style: 'Sharp',
      minutes: 8,
      familyId: 'bf-vs-bird',
      relatedOpenings: ['b-vs-bird', 'w-bird'],
      pitfalls: [
        { kind: 'Trap', side: 'white', title: 'Forgetting 4.Nf3',
          text: "After 2.fxe5 d6 3.exd6 Bxd6, any move other than 4.Nf3 risks 4...Qh4+ 5.g3 Qxg3+ 6.hxg3 Bxg3 mate. Nf3 covers h4 and h2.",
          uci: ['f2f4', 'e7e5', 'f4e5', 'd7d6', 'e5d6', 'f8d6', 'b1c3', 'd8h4', 'g2g3', 'h4g3', 'h2g3', 'd6g3'] },
        { kind: 'Risk', side: 'black', title: 'A loose kingside after ...g5',
          text: "The Lasker idea ...g5-g4 kicks the knight but weakens Black's own king. If it gains nothing concrete, Black is a pawn down with holes." },
        { kind: 'Risk', side: 'black', title: 'The 2.e4 transposition',
          text: "Bird players can answer with 2.e4, turning the game into a King's Gambit. Be ready for it or choose 1...d5 instead." }
      ],
      lines: [
        { id: 'lasker', name: '4.Nf3 g5 (Lasker)', kind: 'Accepted',
          summary: "The sharp main line: ...g5-g4 drives the knight away from h2, and after the queen trade Black usually wins back e5 in a roughly level endgame.",
          moves: [
            { uci: 'f4e5', san: 'fxe5' },
            { uci: 'd7d6', san: 'd6', note: "A second pawn to open the bishop's diagonal." },
            { uci: 'e5d6', san: 'exd6' },
            { uci: 'f8d6', san: 'Bxd6' },
            { uci: 'g1f3', san: 'Nf3', note: "The only good move: it covers h4 and h2." },
            { uci: 'g7g5', san: 'g5', note: "Threatens ...g4, kicking the guard of h2." },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g5g4', san: 'g4' },
            { uci: 'f3e5', san: 'Ne5' },
            { uci: 'd6e5', san: 'Bxe5' },
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'd8d1', san: 'Qxd1+' },
            { uci: 'e1d1', san: 'Kxd1' },
            { uci: 'b8c6', san: 'Nc6', note: "Black wins back e5 next." }
          ] },
        { id: 'nc3-trap', name: '4.Nc3? Qh4+', kind: 'Sideline',
          summary: "The trap every Bird player must know: without Nf3, the queen check and the bishop on d6 mate on g3.",
          moves: [
            { uci: 'f4e5', san: 'fxe5' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e5d6', san: 'exd6' },
            { uci: 'f8d6', san: 'Bxd6' },
            { uci: 'b1c3', san: 'Nc3', note: "Develops, but leaves h4 and g3 unguarded." },
            { uci: 'd8h4', san: 'Qh4+' },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'h4g3', san: 'Qxg3+' },
            { uci: 'h2g3', san: 'hxg3' },
            { uci: 'd6g3', san: 'Bxg3#', note: "Mate along the g3-e1 diagonal." }
          ] },
        { id: 'e4', name: '2.e4 (into the King\'s Gambit)', kind: 'Declined',
          summary: "White declines by transposing to a King's Gambit; Black can take on f4 and play a King's Gambit Accepted.",
          moves: [
            { uci: 'e2e4', san: 'e4', note: "Now it is a King's Gambit by transposition." },
            { uci: 'e5f4', san: 'exf4' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g7g5', san: 'g5', note: "One of Black's ways to hold the pawn; see the King's Gambit for the ideas." }
          ] }
      ],
      lessons: ['black-gambits-2'],
      uncertain: "6.Ng5 is an alternative to 6.Ne5 with sharper play; assessments of both differ between sources."
    },

    /* ------------------------------------------------------------- ENGLUND */
    {
      id: 'bg-englund',
      side: 'black',
      group: 'vs-d4',
      family: 'Englund Gambit',
      name: 'Englund Gambit',
      eco: 'A40',
      defining: ['d2d4','e7e5'],
      moves: '1.d4 e5',
      character: 'Speculative',
      characterNote: "Objectively dubious: White keeps the pawn and a clear edge with sensible play. Its value is a famous trap and the surprise factor in fast games.",
      difficulty: 'Beginner',
      summary: "A cheeky pawn offer on move one against 1.d4, best known for a queen trap and a back-rank mate.",
      idea: "After 2.dxe5 Nc6 3.Nf3 Qe7 Black attacks e5 and sets a trap: the natural 4.Bf4 allows 4...Qb4+, forking the bishop and b2. If White then chases the queen with 6.Bc3?, mate on c1 can follow. Against calm development White simply keeps the extra pawn.",
      offer: "The e5 pawn on move one.",
      compensation: "Mainly practical: quick pressure on e5 and b2, and tactical tricks against natural moves.",
      plans: {
        white: [
          "Develop simply (Nf3, Nc3, Bf4 or Bg5) and do not panic about e5.",
          "After 4.Bf4 Qb4+ 5.Bd2 Qxb2, play 6.Nc3! rather than 6.Bc3?.",
          "Give the e-pawn back if needed; a lead in development is worth more."
        ],
        black: [
          "Attack e5 with ...Nc6 and ...Qe7, and look for ...Qb4+ forks.",
          "Use the pin ...Bb4 against c3 and d2 when White's king is on e1.",
          "If the tricks fail, develop quickly and hope for activity."
        ]
      },
      risks: [
        "Against calm play Black is just a pawn down for little.",
        "The early queen sortie can lose time to Nc3 and Rb1.",
        "Stronger opponents know the trap and the refutation well."
      ],
      accepted: "2.dxe5 Nc6 3.Nf3 Qe7 4.Bf4 Qb4+ 5.Bd2 Qxb2 6.Nc3! keeps White on top; 6.Bc3? walks into the trap.",
      declined: "2.e4 transposes to a Centre Game, and 2.d5 gains space; both are fine for White.",
      line: { fen: 'start', moves: [
        { uci: 'd2d4', san: 'd4' },
        { uci: 'e7e5', san: 'e5', note: "The gambit: a pawn on move one." },
        { uci: 'd4e5', san: 'dxe5' },
        { uci: 'b8c6', san: 'Nc6' },
        { uci: 'g1f3', san: 'Nf3' },
        { uci: 'd8e7', san: 'Qe7', note: "Attacks e5 and prepares ...Qb4+." },
        { uci: 'c1f4', san: 'Bf4' },
        { uci: 'e7b4', san: 'Qb4+', note: "Forks the bishop on f4 and the pawn on b2." },
        { uci: 'f4d2', san: 'Bd2' },
        { uci: 'b4b2', san: 'Qxb2' },
        { uci: 'b1c3', san: 'Nc3', note: "The correct move: White develops, and with b1 empty the queen on d1 now guards a1." },
        { uci: 'f8b4', san: 'Bb4', note: "Hits the knight a second time; Black hopes for ...Bxc3 and ...Qxa1." },
        { uci: 'a1b1', san: 'Rb1' },
        { uci: 'b2a3', san: 'Qa3', note: "The queen escapes, but White is ahead in development." }
      ] },
      style: 'Sharp',
      minutes: 8,
      pitfalls: [
        { kind: 'Trap', side: 'white', title: '6.Bc3? and the mate on c1',
          text: "After 4.Bf4 Qb4+ 5.Bd2 Qxb2, chasing the queen with 6.Bc3? allows 6...Bb4! 7.Qd2 Bxc3 8.Qxc3 Qc1 mate. 6.Nc3 is the right move.",
          uci: ['d2d4', 'e7e5', 'd4e5', 'b8c6', 'g1f3', 'd8e7', 'c1f4', 'e7b4', 'f4d2', 'b4b2', 'd2c3', 'f8b4', 'd1d2', 'b4c3', 'd2c3', 'b2c1'] },
        { kind: 'Risk', side: 'black', title: 'Just a pawn down',
          text: "Against calm development White simply keeps the extra pawn and a lead in development. The Englund's value is practical and mostly in fast games." },
        { kind: 'Risk', side: 'black', title: 'The roaming queen',
          text: "After ...Qxb2 the queen is far from home and can be chased with Nc3, Rb1 and Nd5 or Nb5. Count the escape squares before grabbing." }
      ],
      lines: [
        { id: 'nc3', name: '4.Bf4 Qb4+ 5.Bd2 Qxb2 6.Nc3', kind: 'Main line',
          summary: "The correct handling: White gives b2 and develops. Black's queen escapes, but White is clearly ahead in development.",
          moves: [
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd8e7', san: 'Qe7', note: "Attacks e5 and prepares ...Qb4+." },
            { uci: 'c1f4', san: 'Bf4' },
            { uci: 'e7b4', san: 'Qb4+', note: "Forks the bishop and b2." },
            { uci: 'f4d2', san: 'Bd2' },
            { uci: 'b4b2', san: 'Qxb2' },
            { uci: 'b1c3', san: 'Nc3', note: "Correct: development, and a1 is covered by the queen once b1 is empty." },
            { uci: 'f8b4', san: 'Bb4' },
            { uci: 'a1b1', san: 'Rb1' },
            { uci: 'b2a3', san: 'Qa3' }
          ] },
        { id: 'bc3-trap', name: '6.Bc3? Bb4 (the Englund trap)', kind: 'Sideline',
          summary: "The famous trap: the c3 bishop is pinned and removed, and the queen mates on c1.",
          moves: [
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd8e7', san: 'Qe7' },
            { uci: 'c1f4', san: 'Bf4' },
            { uci: 'e7b4', san: 'Qb4+' },
            { uci: 'f4d2', san: 'Bd2' },
            { uci: 'b4b2', san: 'Qxb2' },
            { uci: 'd2c3', san: 'Bc3', note: "The mistake: it walks into a pin." },
            { uci: 'f8b4', san: 'Bb4' },
            { uci: 'd1d2', san: 'Qd2' },
            { uci: 'b4c3', san: 'Bxc3' },
            { uci: 'd2c3', san: 'Qxc3' },
            { uci: 'b2c1', san: 'Qc1#', note: "The queen cannot return to c1 because of its own c2 pawn." }
          ] }
      ],
      lessons: ['black-gambits-1'],
      uncertain: "After 7...Qa3 White has several good moves; the line is shown for its ideas rather than as settled theory."
    },

    /* ------------------------------------------------------------- LATVIAN */
    {
      id: 'bg-latvian',
      side: 'black',
      group: 'vs-e4',
      family: 'Latvian Gambit',
      name: 'Latvian Gambit',
      eco: 'C40',
      defining: ['e2e4','e7e5','g1f3','f7f5'],
      moves: '1.e4 e5 2.Nf3 f5',
      character: 'Speculative',
      characterNote: "Widely regarded as unsound: several White replies give a large edge. It survives in correspondence and blitz because the positions are wild and theory is obscure.",
      difficulty: 'Advanced',
      summary: "A King's Gambit with colours reversed and a move down: very sharp, very risky.",
      idea: "Black hits e4 on move two, opening the f-file and inviting chaos. After 3.Nxe5 Qf6 4.d4 d6 5.Nc4 fxe4 the black queen aims at g2 and the e4 pawn cramps White, but Black's king is exposed on the e8-h5 diagonal. Black needs concrete knowledge to survive the opening.",
      offer: "The e5 pawn after 3.Nxe5, and often more in the sharpest lines.",
      compensation: "Open f-file, a space-gaining e4 pawn and attacking chances against g2.",
      plans: {
        white: [
          "3.Nxe5 followed by d4 and Nc4 gains central control.",
          "Open the e8-h5 diagonal with Qh5+ or Be2-h5 ideas.",
          "3.Bc4 is another strong reply, aiming at the weakened g8-a2 diagonal."
        ],
        black: [
          "After 3.Nxe5 Qf6, kick the knight with ...d6 and play ...fxe4.",
          "Use the queen on g6 or f6 against g2 and the f-file for the rook.",
          "Castle long or keep the king in the centre behind the e4 pawn."
        ]
      },
      risks: [
        "Black's king is exposed early; Qh5+ tricks are a constant danger.",
        "Several White replies (3.Nxe5, 3.Bc4) are thought to give White a large edge.",
        "It is one of the most heavily refuted gambits in chess literature."
      ],
      accepted: "3.Nxe5 Qf6 4.d4 d6 5.Nc4 fxe4 6.Nc3 Qg6 is a main line; White develops quickly and targets e4.",
      declined: "3.exf5 e4 or 3.d4 are also good for White; there is no really safe way for Black to steer the game.",
      line: { fen: 'start', moves: [
        { uci: 'e2e4', san: 'e4' },
        { uci: 'e7e5', san: 'e5' },
        { uci: 'g1f3', san: 'Nf3' },
        { uci: 'f7f5', san: 'f5', note: "The gambit: an immediate strike at e4, leaving e5 and the king loose." },
        { uci: 'f3e5', san: 'Nxe5' },
        { uci: 'd8f6', san: 'Qf6', note: "Attacks the knight and supports ...fxe4." },
        { uci: 'd2d4', san: 'd4' },
        { uci: 'd7d6', san: 'd6' },
        { uci: 'e5c4', san: 'Nc4' },
        { uci: 'f5e4', san: 'fxe4', note: "The pawn on e4 cramps White, but it can become a target." },
        { uci: 'b1c3', san: 'Nc3', note: "Develops and attacks e4." },
        { uci: 'f6g6', san: 'Qg6', note: "The queen hits g2 and e4 is defended; White's lead in development is the issue." }
      ] },
      style: 'Sharp',
      aliases: ['Greco Counter-Gambit'],
      minutes: 12,
      pitfalls: [
        { kind: 'Trap', side: 'black', title: '3...fxe4? and Qh5+',
          text: "After 3.Nxe5, the natural 3...fxe4? allows 4.Qh5+ g6 5.Nxg6, winning material on h8. Black must play 3...Qf6 first.",
          uci: ['e2e4', 'e7e5', 'g1f3', 'f7f5', 'f3e5', 'f5e4', 'd1h5', 'g7g6', 'e5g6'] },
        { kind: 'Risk', side: 'black', title: 'The 3.Bc4 attack',
          text: "3.Bc4 aims at the weakened g8-a2 diagonal and f7. After 3...fxe4 4.Nxe5 Qg5 5.d4 the play is very sharp and generally thought to favour White." },
        { kind: 'Risk', side: 'black', title: 'An exposed king',
          text: "With the f-pawn gone, the e8-h5 diagonal is open all game. Every queen move must be checked against Qh5+ and Bh5+ ideas." }
      ],
      lines: [
        { id: 'qf6', name: '3.Nxe5 Qf6 4.d4 d6 5.Nc4', kind: 'Accepted',
          summary: "The main line: the queen covers h8 and hits the knight, then ...fxe4 cramps White. White develops fast and targets e4.",
          moves: [
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'd8f6', san: 'Qf6', note: "Attacks the knight and guards the long diagonal to h8." },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e5c4', san: 'Nc4' },
            { uci: 'f5e4', san: 'fxe4', note: "Only now does Black take." },
            { uci: 'b1c3', san: 'Nc3', note: "Develops and attacks e4." },
            { uci: 'f6g6', san: 'Qg6' }
          ] },
        { id: 'fxe4-trap', name: '3.Nxe5 fxe4? 4.Qh5+', kind: 'Sideline',
          summary: "The trap behind the main line: without the queen on f6, Qh5+ and Nxg6 win the h8 rook.",
          moves: [
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'f5e4', san: 'fxe4', note: "Natural, but the h5-e8 diagonal is open." },
            { uci: 'd1h5', san: 'Qh5+' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'e5g6', san: 'Nxg6', note: "The knight hits h8; ...hxg6 Qxh8 wins the exchange." }
          ] },
        { id: 'bc4', name: '3.Bc4 fxe4 4.Nxe5 Qg5', kind: 'Alternative',
          summary: "White aims straight at f7 and g8. Black counter-attacks g2, but White's d4 and Qh5+ lead to a dangerous attack.",
          moves: [
            { uci: 'f1c4', san: 'Bc4', note: "Aims at the g8-a2 diagonal." },
            { uci: 'f5e4', san: 'fxe4' },
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'd8g5', san: 'Qg5', note: "Hits the knight and g2." },
            { uci: 'd2d4', san: 'd4', note: "Ignores g2 and opens lines." },
            { uci: 'g5g2', san: 'Qxg2' },
            { uci: 'd1h5', san: 'Qh5+' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'c4f7', san: 'Bf7+' },
            { uci: 'e8d8', san: 'Kd8', note: "Both kings are in the open; this is deep, sharp theory." }
          ] }
      ],
      lessons: ['black-gambits-11'],
      uncertain: "Theory beyond 6...Qg6 is murky and much of it comes from correspondence games."
    },

    /* ------------------------------------------------------------ ELEPHANT */
    {
      id: 'bg-elephant',
      side: 'black',
      group: 'vs-e4',
      family: 'Elephant Gambit',
      name: 'Elephant Gambit',
      eco: 'C40',
      defining: ['e2e4','e7e5','g1f3','d7d5'],
      moves: '1.e4 e5 2.Nf3 d5',
      character: 'Speculative',
      characterNote: "Objectively dubious: White can keep an extra pawn or win e5 with a clear edge. It works mainly as a surprise against players who react carelessly.",
      difficulty: 'Intermediate',
      summary: "Black counter-attacks in the centre on move two, giving a pawn for quick development and a cramping ...e4.",
      idea: "2...d5 lets White take on d5 or e5. After 3.exd5 Bd6 Black plays ...e4 to kick the knight, gains space and castles quickly, hoping to win back d5 or attack on the kingside with pieces aimed at h2. The pawn on e4 is both Black's trump and a target.",
      offer: "The d-pawn after 3.exd5 Bd6; against 3.Nxe5 Black regains the pawn on e4 but stands worse.",
      compensation: "Space with ...e4, quick castling and attacking chances against White's kingside.",
      plans: {
        white: [
          "3.exd5 and 4.d4 keep the extra pawn and fight the e4 wedge.",
          "Alternatively 3.Nxe5 targets f7 and the d5 point.",
          "Develop with Nc3 and Bc4 or Be2, and attack the e4 pawn."
        ],
        black: [
          "Play ...Bd6, ...e4, ...Nf6 and ...O-O at speed.",
          "Aim pieces at h2 and regain d5 with ...Nxd5 when possible.",
          "Keep the e4 pawn supported; if it falls, the position collapses."
        ]
      },
      risks: [
        "The e4 pawn is easily attacked and may simply be lost.",
        "Against 3.Nxe5 Black can suffer on f7 and the e-file.",
        "White gets a comfortable extra pawn with natural moves."
      ],
      accepted: "3.exd5 Bd6 4.d4 e4 5.Ne5 Nf6 6.Nc3 O-O: Black is fast but White keeps the pawn and strong central control.",
      declined: "3.Nxe5 is a strong alternative: after 3...Bd6 4.d4 dxe4 5.Bc4 White hits f7 and keeps the better centre.",
      line: { fen: 'start', moves: [
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
      ] },
      style: 'Sharp',
      aliases: ['Queen\'s Pawn Counter-Gambit'],
      minutes: 8,
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'The e4 pawn as a target',
          text: "After 3.exd5 Bd6 4.d4 e4, the e4 pawn is attacked by Nc3 and often Qe2 or f3. If it falls, Black is two pawns down with nothing to show." },
        { kind: 'Risk', side: 'black', title: 'Trouble on f7 after 3.Nxe5',
          text: "3.Nxe5 Bd6 4.d4 dxe4 5.Bc4 aims at f7 with the knight and bishop; Black must defend accurately and stands worse." },
        { kind: 'Trap', side: 'white', title: 'Letting ...e4 hit a lone defender',
          text: "If White's f3 knight is the only guard of h2 while Black's bishop is on d6 and queen on h5, ...e4 can win a piece or mate (see the lesson)." }
      ],
      lines: [
        { id: 'exd5', name: '3.exd5 Bd6 4.d4 e4', kind: 'Accepted',
          summary: "White takes on d5; Black pushes ...e4 to kick the knight, develops and castles. White keeps the pawn and a strong centre.",
          moves: [
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'f8d6', san: 'Bd6', note: "Defends e5 and aims at h2." },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e5e4', san: 'e4', note: "The wedge kicks the knight." },
            { uci: 'f3e5', san: 'Ne5' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3', note: "Defends d5 and attacks e4." },
            { uci: 'e8g8', san: 'O-O' }
          ] },
        { id: 'nxe5', name: '3.Nxe5 Bd6 4.d4 dxe4 5.Bc4', kind: 'Alternative',
          summary: "White takes the e-pawn instead and aims at f7 at once. Black regains a pawn on e4 but must defend carefully.",
          moves: [
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'f8d6', san: 'Bd6', note: "Challenges the knight." },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd5e4', san: 'dxe4', note: "Material is level again." },
            { uci: 'f1c4', san: 'Bc4', note: "Knight and bishop both aim at f7." }
          ] }
      ],
      lessons: ['black-gambits-12'],
      uncertain: "Illustrative main line; theory is sparse and engines give White a clear edge."
    },

    /* ------------------------------------------------------ SCHARA-HENNIG */
    {
      id: 'bg-schara-hennig',
      side: 'black',
      group: 'vs-d4',
      family: "Queen's Gambit Declined",
      name: 'Schara-Hennig Gambit',
      eco: 'D32',
      defining: ['d2d4','d7d5','c2c4','e7e6','b1c3','c7c5','c4d5','c5d4'],
      moves: '1.d4 d5 2.c4 e6 3.Nc3 c5 4.cxd5 cxd4',
      character: 'Speculative',
      characterNote: "White keeps a healthy extra pawn with accurate play; Black's lead in development is real but generally judged insufficient at master level.",
      difficulty: 'Advanced',
      summary: "In the Tarrasch, Black gives the d-pawn for fast development and attacking chances against a queen that has wandered.",
      idea: "Instead of recapturing on d5, Black plays 4...cxd4. White wins a pawn with the queen, but the queen is chased around the board. Black develops with ...Nc6, ...Nf6, ...Bc5 and ...O-O, then puts rooks on the open central files while White still has to finish development.",
      offer: "The d-pawn: after 5.Qa4+ (or 5.Qxd4) and Qxd5, Black is a pawn down.",
      compensation: "Several tempi gained against the white queen and open lines for the bishops and rooks.",
      plans: {
        white: [
          "Collect the pawn with the queen, then retreat to d1 and develop the kingside.",
          "Play e3, Be2 and O-O before opening the position.",
          "Trade pieces to reach an endgame where the extra pawn counts."
        ],
        black: [
          "Gain tempi on the queen with ...Nc6, ...Nf6 and ...Bc5.",
          "Castle quickly and use the open c- and d-files.",
          "Aim the bishops at f2 and the kingside before White castles."
        ]
      },
      risks: [
        "White's position is solid; one or two accurate moves neutralise the initiative.",
        "If the queen escapes safely, Black is just a pawn down.",
        "Few players get this position, so the investment in study is not always repaid."
      ],
      accepted: "5.Qa4+ Bd7 6.Qxd4 exd5 7.Qxd5 Nc6 8.Nf3 Nf6 9.Qd1 Bc5 is the classical main line.",
      declined: "5.Qxd4 Nc6 6.Qd1 exd5 7.Qxd5 is similar; there is no sensible way for White to avoid taking.",
      line: { fen: 'start', moves: [
        { uci: 'd2d4', san: 'd4' },
        { uci: 'd7d5', san: 'd5' },
        { uci: 'c2c4', san: 'c4' },
        { uci: 'e7e6', san: 'e6' },
        { uci: 'b1c3', san: 'Nc3' },
        { uci: 'c7c5', san: 'c5', note: "The Tarrasch Defence: an active counter in the centre." },
        { uci: 'c4d5', san: 'cxd5' },
        { uci: 'c5d4', san: 'cxd4', note: "The gambit: Black ignores d5 and takes on d4." },
        { uci: 'd1a4', san: 'Qa4+' },
        { uci: 'c8d7', san: 'Bd7', note: "Blocks with a developing move." },
        { uci: 'a4d4', san: 'Qxd4' },
        { uci: 'e6d5', san: 'exd5' },
        { uci: 'd4d5', san: 'Qxd5', note: "White is a pawn up, but the queen has moved three times." },
        { uci: 'b8c6', san: 'Nc6' },
        { uci: 'g1f3', san: 'Nf3' },
        { uci: 'g8f6', san: 'Nf6', note: "Another tempo on the queen." },
        { uci: 'd5d1', san: 'Qd1' },
        { uci: 'f8c5', san: 'Bc5', note: "Black has three pieces out and aims at f2; White must hurry with e3." }
      ] },
      style: 'Attacking',
      aliases: ['Hennig-Schara Gambit', 'Schara Gambit'],
      minutes: 12,
      familyId: 'bf-qgd',
      relatedOpenings: ['w-qgd-exchange', 'b-qgd-orthodox'],
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'Too few tempi',
          text: "Each move that hits the white queen gains time, but once the queen sits safely on d1 and White plays e3, Be2 and O-O, Black is simply a pawn down." },
        { kind: 'Mistake', side: 'white', title: 'Leaving the king in the centre',
          text: "Grabbing the pawn and then playing slowly lets Black's rooks reach d8 and e8 and knights land on b4 or d4. Knight forks on c2 against an uncastled king are a typical danger (see the lesson)." }
      ],
      lines: [
        { id: 'qa4', name: '5.Qa4+ Bd7 6.Qxd4', kind: 'Accepted',
          summary: "The classical main line: White's queen collects the pawn and is chased with ...Nc6 and ...Nf6. Black develops fast; White must finish development with e3.",
          moves: [
            { uci: 'd1a4', san: 'Qa4+' },
            { uci: 'c8d7', san: 'Bd7', note: "Blocks with a developing move." },
            { uci: 'a4d4', san: 'Qxd4' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'd4d5', san: 'Qxd5', note: "A pawn up, but the queen has moved three times." },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Nf6', note: "Another tempo on the queen." },
            { uci: 'd5d1', san: 'Qd1' },
            { uci: 'f8c5', san: 'Bc5', note: "Aims at f2; White must hurry with e3." },
            { uci: 'e2e3', san: 'e3' }
          ] },
        { id: 'qxd4', name: '5.Qxd4 Nc6 6.Qd1', kind: 'Accepted',
          summary: "White takes on d4 at once. Black gains time with ...Nc6 and recaptures on d5, with a similar lead in development.",
          moves: [
            { uci: 'd1d4', san: 'Qxd4' },
            { uci: 'b8c6', san: 'Nc6', note: "Develops with tempo." },
            { uci: 'd4d1', san: 'Qd1' },
            { uci: 'e6d5', san: 'exd5' },
            { uci: 'd1d5', san: 'Qxd5' },
            { uci: 'c8e6', san: 'Be6', note: "Another tempo; Black's pieces are flying out." }
          ] }
      ],
      lessons: ['black-gambits-16'],
      uncertain: "Old main line; modern engines rate White clearly better here."
    },

    /* ------------------------------------------------- BLACKBURNE SHILLING */
    {
      id: 'bg-blackburne-shilling',
      side: 'black',
      group: 'vs-e4',
      family: 'Italian Game',
      name: 'Blackburne Shilling Gambit',
      eco: 'C50',
      defining: ['e2e4','e7e5','g1f3','b8c6','f1c4','c6d4'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bc4 Nd4',
      character: 'Speculative',
      characterNote: "Objectively poor: after 4.Nxd4 or 4.O-O Black is simply worse. Included because the trap is famous and every player should know how it works.",
      difficulty: 'Beginner',
      summary: "Black leaves e5 hanging and sets a trap; greedy play loses, but calm play leaves Black worse.",
      idea: "3...Nd4 breaks the opening rule of not moving a piece twice and leaves e5 en prise. If White grabs it with 4.Nxe5?, Black hits back with 4...Qg5!, attacking the knight and g2. After 5.Nxf7? Qxg2 6.Rf1 Qxe4+ 7.Be2 Nf3 is mate. The lesson cuts both ways: traps work against greed, but a sound reply leaves the trapper worse off.",
      offer: "The e5 pawn, left undefended by 3...Nd4.",
      compensation: "Only tactical: the ...Qg5 counter-attack against g2 and the knight. Against correct play there is none.",
      plans: {
        white: [
          "4.Nxd4 exd4 5.O-O or 5.c3: develop and use the lead in development.",
          "4.O-O or 4.c3 also ignore the bait.",
          "Never take on e5 and f7 without checking ...Qg5 and ...Qxg2."
        ],
        black: [
          "Hope for 4.Nxe5? Qg5! with a strong counter-attack.",
          "Against 4.Nxd4 exd4, develop quickly with ...Bc5 and ...d6.",
          "Treat it as a lesson in tactics rather than a repertoire weapon."
        ]
      },
      risks: [
        "Against 4.Nxd4 Black has lost time and has a weak d4 pawn.",
        "4.Nxe5 Qg5 5.Bxf7+! (instead of 5.Nxf7?) gives White a strong position.",
        "Relying on traps teaches bad habits; strong opponents will punish them."
      ],
      accepted: "4.Nxe5? Qg5 5.Nxf7? Qxg2 6.Rf1 Qxe4+ 7.Be2 Nf3# is the famous trap.",
      declined: "4.Nxd4 exd4 5.O-O (or 5.c3) gives White a comfortable lead in development.",
      line: { fen: 'start', moves: [
        { uci: 'e2e4', san: 'e4' },
        { uci: 'e7e5', san: 'e5' },
        { uci: 'g1f3', san: 'Nf3' },
        { uci: 'b8c6', san: 'Nc6' },
        { uci: 'f1c4', san: 'Bc4' },
        { uci: 'c6d4', san: 'Nd4', note: "The trap: e5 is left hanging." },
        { uci: 'f3d4', san: 'Nxd4', note: "The calm, strong reply: White trades and keeps development." },
        { uci: 'e5d4', san: 'exd4' },
        { uci: 'e1g1', san: 'O-O' },
        { uci: 'f8c5', san: 'Bc5' },
        { uci: 'c2c3', san: 'c3', note: "Opens lines against the d4 pawn." },
        { uci: 'd4c3', san: 'dxc3' },
        { uci: 'b1c3', san: 'Nxc3' },
        { uci: 'd7d6', san: 'd6' },
        { uci: 'd2d4', san: 'd4', note: "White has the ideal centre and a clear lead in development." },
        { uci: 'c5b6', san: 'Bb6' }
      ] },
      style: 'Sharp',
      aliases: ['Kostic Gambit'],
      minutes: 6,
      familyId: 'bf-italian',
      relatedOpenings: ['b-e5-giuoco-piano', 'w-italian-giuoco'],
      pitfalls: [
        { kind: 'Trap', side: 'white', title: '4.Nxe5? Qg5 5.Nxf7?',
          text: "Greed twice: 5...Qxg2 6.Rf1 Qxe4+ 7.Be2 Nf3 is mate. If White does take on e5, 5.Bxf7+ is much better than 5.Nxf7?.",
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'c6d4', 'f3e5', 'd8g5', 'e5f7', 'g5g2', 'h1f1', 'g2e4', 'c4e2', 'd4f3'] },
        { kind: 'Risk', side: 'black', title: 'Worse against calm play',
          text: "After 4.Nxd4 exd4 5.O-O or 4.O-O, Black has moved a knight twice and has a weak d4 pawn. This is a trap to know, not an opening to rely on." }
      ],
      lines: [
        { id: 'nxd4', name: '4.Nxd4 exd4 5.O-O', kind: 'Declined',
          summary: "The calm, strong reply: White trades the knight, castles and opens lines against the d4 pawn with c3. Black is worse.",
          moves: [
            { uci: 'f3d4', san: 'Nxd4', note: "Simple and strong." },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f8c5', san: 'Bc5' },
            { uci: 'c2c3', san: 'c3', note: "Opens lines against the d4 pawn." },
            { uci: 'd4c3', san: 'dxc3' },
            { uci: 'b1c3', san: 'Nxc3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'd2d4', san: 'd4', note: "The ideal centre and a lead in development." }
          ] },
        { id: 'trap', name: '4.Nxe5? Qg5 5.Nxf7? (the trap)', kind: 'Sideline',
          summary: "The famous trap: White grabs two pawns and a fork, and is mated by a knight on f3.",
          moves: [
            { uci: 'f3e5', san: 'Nxe5', note: "Takes the bait." },
            { uci: 'd8g5', san: 'Qg5', note: "Hits the knight and g2." },
            { uci: 'e5f7', san: 'Nxf7', note: "Forks queen and rook but ignores g2." },
            { uci: 'g5g2', san: 'Qxg2' },
            { uci: 'h1f1', san: 'Rf1' },
            { uci: 'g2e4', san: 'Qxe4+' },
            { uci: 'c4e2', san: 'Be2', note: "Blocks the check, but the bishop is now pinned." },
            { uci: 'd4f3', san: 'Nf3#' }
          ] },
        { id: 'bxf7', name: '4.Nxe5 Qg5 5.Bxf7+', kind: 'Accepted',
          summary: "If White takes on e5, the right follow-up is the check on f7. White gets two pawns for the knight and Black's king is stuck in the centre.",
          moves: [
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'd8g5', san: 'Qg5' },
            { uci: 'c4f7', san: 'Bxf7+', note: "Check first: the king must move and can no longer castle." },
            { uci: 'e8e7', san: 'Ke7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'g5e5', san: 'Qxe5' },
            { uci: 'c2c3', san: 'c3', note: "Kicks the d4 knight; Black's king on e7 is a lasting worry." }
          ] }
      ],
      lessons: ['black-gambits-5'],
      uncertain: "The sample shows a typical good set-up for White rather than one forced line. In the 5.Bxf7+ line, sources differ on White's best sixth and seventh moves (5.Ng4 is another strong reply to 4...Qg5)."
    },

    /* ----------------------------------------------------------- PORTUGUESE */
    {
      id: 'bg-portuguese',
      side: 'black',
      group: 'vs-e4',
      family: 'Scandinavian Defence',
      name: 'Portuguese Gambit (Scandinavian)',
      eco: 'B01',
      defining: ['e2e4', 'd7d5', 'e4d5', 'g8f6', 'd2d4', 'c8g4'],
      moves: '1.e4 d5 2.exd5 Nf6 3.d4 Bg4',
      aliases: ['Portuguese Variation', 'Jadoul Variation'],
      character: 'Speculative',
      characterNote: "If White keeps the pawn with 4.f3 and develops carefully, Black's compensation is generally judged insufficient; if White declines, Black simply regains the pawn. A lively practical choice.",
      difficulty: 'Intermediate',
      style: 'Attacking',
      minutes: 12,
      familyId: 'bf-scandinavian',
      relatedOpenings: ['b-scandinavian', 'w-scandinavian'],
      summary: "Black develops the bishop to g4 instead of recapturing on d5, daring White to keep the pawn with f3 at the cost of loosened squares.",
      idea: "3...Bg4 pressures d4 indirectly and threatens to regain d5 with ...Qxd5. If White plays quietly (4.Nf3 or 4.Be2), Black takes back the pawn with a comfortable Scandinavian. The gambit begins after 4.f3: Black retreats with ...Bf5, plays ...Nbd7 and ...e6 and gives the pawn for rapid development, an open e-file and the weakened e3 and e1-h4 squares around White's king.",
      offer: "The d5 pawn, if White keeps it with 4.f3 (and after ...e6 dxe6, it stays a pawn).",
      compensation: "Quick development, pressure down the e-file against White's uncastled king, and the dark squares weakened by f3.",
      plans: {
        white: [
          "Keep the pawn with 4.f3, then develop with Bb5+, c4 and Nc3.",
          "Castle quickly; the e-file and the e1-h4 diagonal are the danger zones.",
          "Or decline with 4.Nf3 or 4.Be2 and play a normal Scandinavian with an extra tempo."
        ],
        black: [
          "Against 4.f3, play ...Bf5, ...Nbd7 and ...e6 to open lines.",
          "Use ...Bb4+ and ...Qe7+ ideas while White's king is on e1.",
          "Against quiet replies, regain the pawn with ...Qxd5 and develop with ...Nc6 and ...O-O-O."
        ]
      },
      risks: [
        "With careful play White keeps a sound extra pawn.",
        "Many White players decline with 4.Nf3, so the gambit never appears.",
        "If the e-file pressure fades, Black has nothing for the pawn."
      ],
      accepted: "4.f3 Bf5 5.Bb5+ Nbd7 6.c4 e6 7.dxe6 Bxe6 8.d5 Bf5 9.Nc3 Bb4 is a typical main line; Black's pieces are active and White's king is still in the centre.",
      declined: "4.Nf3 Qxd5 or 4.Be2 Bxe2 5.Qxe2 Qxd5 regain the pawn at once, with a normal Scandinavian position.",
      pitfalls: [
        { kind: 'Risk', side: 'white', title: 'A king left on e1',
          text: "After f3 and c4, White's king has no quick shelter. Checks such as ...Bb4+ and ...Qe7+ on the open e-file can win time or material if White develops carelessly." },
        { kind: 'Risk', side: 'black', title: 'No attack, no compensation',
          text: "If White castles and keeps the d5 pawn protected, Black is simply a pawn down. The gambit needs active, concrete play from the start." },
        { kind: 'Mistake', side: 'black', title: 'Grabbing back d5 too soon',
          text: "After 4.f3 Bf5 5.Bb5+, blocking with the bishop's pawn structure intact matters: ...Nbd7 keeps development flowing, while ...c6 dxc6 simply gives White a second pawn." }
      ],
      lines: [
        { id: 'f3', name: '4.f3 Bf5 5.Bb5+ Nbd7 6.c4', kind: 'Accepted',
          summary: "White holds the pawn; Black opens the e-file with ...e6 and develops with ...Bb4, aiming at the uncastled king.",
          moves: [
            { uci: 'f2f3', san: 'f3', note: "Keeps the pawn, at the cost of loosening the king." },
            { uci: 'g4f5', san: 'Bf5' },
            { uci: 'f1b5', san: 'Bb5+' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'e7e6', san: 'e6', note: "The second offer: open the e-file." },
            { uci: 'd5e6', san: 'dxe6' },
            { uci: 'f5e6', san: 'Bxe6' },
            { uci: 'd4d5', san: 'd5' },
            { uci: 'e6f5', san: 'Bf5' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'f8b4', san: 'Bb4', note: "Pins c3; ...Qe7+ and ...O-O follow." }
          ] },
        { id: 'nf3', name: '4.Nf3 Qxd5', kind: 'Declined',
          summary: "White develops instead of holding the pawn. Black regains it at once and reaches a Scandinavian with the bishop already on g4.",
          moves: [
            { uci: 'g1f3', san: 'Nf3', note: "Solid: no weakening f3." },
            { uci: 'd8d5', san: 'Qxd5', note: "The pawn is back." },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'b8c6', san: 'Nc6', note: "Pressure on d4; ...O-O-O may follow." }
          ] },
        { id: 'be2', name: '4.Be2 Bxe2 5.Qxe2 Qxd5', kind: 'Declined',
          summary: "White challenges the bishop; Black trades it and regains the pawn. Level material and an open, simple game.",
          moves: [
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'g4e2', san: 'Bxe2' },
            { uci: 'd1e2', san: 'Qxe2' },
            { uci: 'd8d5', san: 'Qxd5', note: "Material is level." },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e7e6', san: 'e6', note: "Calm development; Black has no problems." }
          ] }
      ],
      line: { fen: 'start', moves: [
        { uci: 'e2e4', san: 'e4' },
        { uci: 'd7d5', san: 'd5' },
        { uci: 'e4d5', san: 'exd5' },
        { uci: 'g8f6', san: 'Nf6', note: "The Modern Scandinavian: Black plans to recapture with the knight." },
        { uci: 'd2d4', san: 'd4' },
        { uci: 'c8g4', san: 'Bg4', note: "The Portuguese: develop first, take on d5 later." },
        { uci: 'f2f3', san: 'f3', note: "The critical try to keep the pawn." },
        { uci: 'g4f5', san: 'Bf5' },
        { uci: 'f1b5', san: 'Bb5+' },
        { uci: 'b8d7', san: 'Nbd7' },
        { uci: 'c2c4', san: 'c4' },
        { uci: 'e7e6', san: 'e6', note: "Black gives the pawn for open lines." },
        { uci: 'd5e6', san: 'dxe6' },
        { uci: 'f5e6', san: 'Bxe6' },
        { uci: 'd4d5', san: 'd5' },
        { uci: 'e6f5', san: 'Bf5', note: "White's king is still in the centre; ...Bb4 and ...Qe7+ are coming." }
      ] },
      lessons: ['black-gambits-17'],
      uncertain: "Theory of the 4.f3 lines is unsettled and move orders vary (5.g4 and 5.c4 are also played); the main line shown is typical rather than definitive."
    },

    /* -------------------------------------------------------------- STAFFORD */
    {
      id: 'bg-stafford',
      side: 'black',
      group: 'vs-e4',
      family: 'Petroff Defence',
      name: 'Stafford Gambit',
      eco: 'C42',
      defining: ['e2e4', 'e7e5', 'g1f3', 'g8f6', 'f3e5', 'b8c6'],
      moves: '1.e4 e5 2.Nf3 Nf6 3.Nxe5 Nc6',
      character: 'Speculative',
      characterNote: "Widely regarded as unsound: with 4.Nxc6 dxc6 5.d3 or 5.Nc3 and care over h2 and f2, White keeps a clear extra pawn. Popular online because its traps are deadly.",
      difficulty: 'Beginner',
      style: 'Sharp',
      minutes: 10,
      familyId: 'bf-petroff',
      relatedOpenings: ['b-petroff', 'w-petroff-nc3'],
      summary: "In the Petroff, Black ignores the e5 pawn and develops; after 4.Nxc6 dxc6 the open lines create quick, dangerous tricks.",
      idea: "After 3...Nc6 4.Nxc6 dxc6 Black is a pawn down but has open lines for both bishops and the queen. The plan is ...Bc5, ...h5 and ...Ng4, aiming at f2 and h2, and tricks with ...Nxe4 against careless development. Against calm moves (d3, Be2, Nc3, h3 at the right moment) the tricks fail and Black is simply worse.",
      offer: "The e5 pawn, after 3.Nxe5 Nc6 4.Nxc6 dxc6.",
      compensation: "Open lines for the bishops, quick development and traps against f2 and h2; objectively not enough.",
      plans: {
        white: [
          "Take with 4.Nxc6 and play d3 or Nc3, keeping e4 protected.",
          "Develop with Be2 and stop ...Ng4 with h3 only when it is safe.",
          "Avoid Bg5 pins while ...Nxe4 tactics exist."
        ],
        black: [
          "Develop with ...Bc5, ...h5 and ...Ng4 against f2 and h2.",
          "Look for ...Nxe4 when a white piece leaves e4 or f2 undefended.",
          "If the tricks fail, accept a pawn-down position with active pieces."
        ]
      },
      risks: [
        "Objectively unsound: careful players keep a clear extra pawn.",
        "Many White players know the main traps from online play.",
        "Relying on traps teaches habits that fail against strong opponents."
      ],
      accepted: "4.Nxc6 dxc6 5.d3 Bc5 6.Be2 h5 is the main line; White must avoid castling into ...Ng4 tricks and should keep e4 and f2 well covered.",
      declined: "4.Nf3 Nxe4 5.Qe2 Qe7 6.d3 Nf6 gives back the pawn and reaches a quiet position where White is slightly better.",
      pitfalls: [
        { kind: 'Trap', side: 'white', title: '6.Bg5? Nxe4! and the queen is bait',
          text: "After 5.d3 Bc5 6.Bg5?, 6...Nxe4! 7.Bxd8 Bxf2+ 8.Ke2 Bg4 is mate; 7.dxe4 Bxf2+ wins the queen on d1. Do not pin the knight while f2 is weak.",
          uci: ['e2e4', 'e7e5', 'g1f3', 'g8f6', 'f3e5', 'b8c6', 'e5c6', 'd7c6', 'd2d3', 'f8c5', 'c1g5', 'f6e4', 'g5d8', 'c5f2', 'e1e2', 'c8g4'] },
        { kind: 'Risk', side: 'white', title: 'Castling into ...Ng4',
          text: "With Black's bishop on c5 and a pawn on h5, castling short can run into ...Ng4 and ...Qh4 against h2 and f2. Develop and consider h3 or Nc3 first." },
        { kind: 'Risk', side: 'black', title: 'A pawn down for nothing',
          text: "If White plays d3, Be2, Nc3 and keeps f2 covered, Black has no attack and a pawn less. The Stafford is a practical weapon only." }
      ],
      lines: [
        { id: 'd3', name: '4.Nxc6 dxc6 5.d3 Bc5 6.Be2 h5', kind: 'Accepted',
          summary: "The main line: White keeps e4 solid and develops; Black prepares ...Ng4 with ...h5 so that the knight cannot simply be kicked with h3.",
          moves: [
            { uci: 'e5c6', san: 'Nxc6' },
            { uci: 'd7c6', san: 'dxc6', note: "Towards the centre: both bishops are free." },
            { uci: 'd2d3', san: 'd3', note: "Protects e4." },
            { uci: 'f8c5', san: 'Bc5', note: "Aims at f2." },
            { uci: 'f1e2', san: 'Be2', note: "Covers g4 and prepares to castle." },
            { uci: 'h7h5', san: 'h5', note: "Supports ...Ng4: if h3, the h-file may open." }
          ] },
        { id: 'nc3', name: '4.Nxc6 dxc6 5.Nc3 Bc5 6.h3', kind: 'Accepted',
          summary: "White defends e4 with the knight and takes g4 away from Black's knight at once. Black has open lines but no direct tricks.",
          moves: [
            { uci: 'e5c6', san: 'Nxc6' },
            { uci: 'd7c6', san: 'dxc6' },
            { uci: 'b1c3', san: 'Nc3', note: "Defends e4 with development." },
            { uci: 'f8c5', san: 'Bc5' },
            { uci: 'h2h3', san: 'h3', note: "Stops ...Ng4 for good." }
          ] },
        { id: 'bg5-trap', name: '5.d3 Bc5 6.Bg5? Nxe4!', kind: 'Sideline',
          summary: "The best-known Stafford trap: the queen is offered on d8 and the bishops mate on f2 and g4.",
          moves: [
            { uci: 'e5c6', san: 'Nxc6' },
            { uci: 'd7c6', san: 'dxc6' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'f8c5', san: 'Bc5' },
            { uci: 'c1g5', san: 'Bg5', note: "Natural-looking, but f2 is now loose." },
            { uci: 'f6e4', san: 'Nxe4', note: "Black offers the queen." },
            { uci: 'g5d8', san: 'Bxd8' },
            { uci: 'c5f2', san: 'Bxf2+' },
            { uci: 'e1e2', san: 'Ke2', note: "The only move." },
            { uci: 'c8g4', san: 'Bg4#' }
          ] },
        { id: 'nf3', name: '4.Nf3 Nxe4 5.Qe2', kind: 'Declined',
          summary: "White retreats the knight and returns the pawn; after the queen moves, play is quiet and White is a little better.",
          moves: [
            { uci: 'e5f3', san: 'Nf3', note: "Declines the c6 knight." },
            { uci: 'f6e4', san: 'Nxe4', note: "Black regains the pawn." },
            { uci: 'd1e2', san: 'Qe2', note: "Pins the knight on the e-file." },
            { uci: 'd8e7', san: 'Qe7' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'e4f6', san: 'Nf6' }
          ] }
      ],
      line: { fen: 'start', moves: [
        { uci: 'e2e4', san: 'e4' },
        { uci: 'e7e5', san: 'e5' },
        { uci: 'g1f3', san: 'Nf3' },
        { uci: 'g8f6', san: 'Nf6', note: "The Petroff Defence." },
        { uci: 'f3e5', san: 'Nxe5' },
        { uci: 'b8c6', san: 'Nc6', note: "The Stafford: Black does not win back e5." },
        { uci: 'e5c6', san: 'Nxc6' },
        { uci: 'd7c6', san: 'dxc6', note: "Open lines for both bishops." },
        { uci: 'd2d3', san: 'd3' },
        { uci: 'f8c5', san: 'Bc5', note: "The bishop eyes f2." },
        { uci: 'f1e2', san: 'Be2' },
        { uci: 'h7h5', san: 'h5', note: "Preparing ...Ng4 with support from the h-pawn." }
      ] },
      lessons: ['black-gambits-18'],
      uncertain: "The 4.Nf3 decline and White's best set-up after 6...h5 vary between sources; assessments are consistent that White is better with care."
    }

  ],
  lessons: [

    /* ------------------------------------------------- 1. ENGLUND TRAP */
    {
      id: 'black-gambits-1',
      category: 'black-gambits',
      side: 'black',
      title: 'The Englund trap',
      level: 'Beginner',
      minutes: 6,
      objective: "Recognise the Englund Gambit's queen raid and finish it with the mate on c1.",
      summary: "How ...Qb4+ and a pin on c3 punish White's natural but careless moves.",
      prerequisites: ['tactics-2'],
      related: { gambits: ['bg-englund'], lessons: ['tactics-3'] },
      steps: [
        {
          type: 'read',
          title: 'A pawn for a plan',
          orientation: 'b',
          text: "After 1.d4 e5 2.dxe5 Nc6 3.Nf3 Qe7 Black is a pawn down, but the queen attacks e5 and eyes b4. If White develops the bishop to f4 to guard e5, the check ...Qb4+ forks the bishop and the b2 pawn. Objectively White is fine, but natural moves can be punished.",
          fen: 'r1b1kbnr/ppppqppp/2n5/4P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq - 3 4',
          arrows: [['e7', 'b4'], ['c6', 'e5']],
          highlights: ['e5', 'b2']
        },
        {
          type: 'line',
          title: 'Walking into it',
          orientation: 'b',
          text: "White grabs back time with 6.Bc3, attacking the queen. It looks strong, but ...Bb4 will pin it against White's king.",
          fen: 'start',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd8e7', san: 'Qe7' },
            { uci: 'c1f4', san: 'Bf4', note: "Natural, but it allows the fork." },
            { uci: 'e7b4', san: 'Qb4+', note: "Check, and the queen also attacks b2." },
            { uci: 'f4d2', san: 'Bd2' },
            { uci: 'b4b2', san: 'Qxb2' },
            { uci: 'd2c3', san: 'Bc3', note: "The mistake: 6.Nc3 was correct." },
            { uci: 'f8b4', san: 'Bb4', note: "Pins the bishop on c3 to White's king along the diagonal." },
            { uci: 'd1d2', san: 'Qd2', note: "White blocks and defends c3, but the c1 square is now unguarded." }
          ]
        },
        {
          type: 'puzzle',
          title: 'Finish the trap',
          prompt: "Black to move: win decisively. Look at the c1 square.",
          fen: 'r1b1k1nr/pppp1ppp/2n5/4P3/1b6/2B2N2/PqPQPPPP/RN2KB1R b KQkq - 3 7',
          solution: ['b4c3', 'd2c3', 'b2c1'],
          hint: "Remove the bishop on c3 first; then where can the queen check the king?",
          explanation: "7...Bxc3! 8.Qxc3 Qc1 is checkmate: the queen on c3 cannot get back to c1 because its own pawn on c2 is in the way, and the king is hemmed in by its own pieces. If 8.Nxc3 instead, 8...Qxa1+ wins a whole rook. This is the famous Englund trap.",
          wrong: {
            'b2a1': "7...Qxa1 is tempting, but 8.Bxa1 Bxd2+ 9.Nbxd2 only wins the exchange. Removing the bishop first gives mate.",
            'b2c1': "7...Qc1+? 8.Qxc1 simply loses the queen: c1 is still guarded."
          }
        }
      ]
    },

    /* ------------------------------------------------- 2. FROM'S TRAP */
    {
      id: 'black-gambits-2',
      category: 'black-gambits',
      side: 'black',
      title: "From's Gambit: the weak diagonal",
      level: 'Beginner',
      minutes: 5,
      objective: "Use the open e1-h4 diagonal after 1.f4 to deliver a forced mate when White forgets Nf3.",
      summary: "Why 1.f4 weakens White's king, and the three-move mate that punishes one careless move.",
      prerequisites: ['openings-1'],
      related: { gambits: ['bg-froms'], lessons: ['middlegames-2'] },
      steps: [
        {
          type: 'read',
          title: 'Two pawns for two lines',
          orientation: 'b',
          text: "After 1.f4 e5 2.fxe5 d6 3.exd6 Bxd6 Black is a pawn down, but two lines point at White's king: the bishop on d6 eyes g3 and h2, and the queen can check on h4. White must play 4.Nf3, which covers both h4 and h2. Any other move lets Black strike.",
          fen: 'rnbqk1nr/ppp2ppp/3b4/8/8/8/PPPPP1PP/RNBQKBNR w KQkq - 0 4',
          arrows: [['d8', 'h4'], ['d6', 'g3'], ['h4', 'e1']],
          highlights: ['g3', 'f2']
        },
        {
          type: 'line',
          title: 'One natural move too many',
          orientation: 'b',
          fen: 'start',
          moves: [
            { uci: 'f2f4', san: 'f4' },
            { uci: 'e7e5', san: 'e5', note: "From's Gambit." },
            { uci: 'f4e5', san: 'fxe5' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e5d6', san: 'exd6' },
            { uci: 'f8d6', san: 'Bxd6' },
            { uci: 'b1c3', san: 'Nc3', note: "Develops, but leaves h4 and g3 unguarded." }
          ]
        },
        {
          type: 'puzzle',
          title: 'Punish 4.Nc3',
          prompt: "Black to move: White forgot Nf3. Checkmate in three moves.",
          fen: 'rnbqk1nr/ppp2ppp/3b4/8/8/2N5/PPPPP1PP/R1BQKBNR b KQkq - 1 4',
          solution: ['d8h4', 'g2g3', 'h4g3', 'h2g3', 'd6g3'],
          accept: [['d8h4', 'g2g3', 'h4g3', 'h2g3', 'd6g3'], ['d8h4', 'g2g3', 'd6g3', 'h2g3', 'h4g3']],
          hint: "Start with a check on the e1-h4 diagonal. White's only block is a pawn.",
          explanation: "4...Qh4+ forces 5.g3, then 5...Qxg3+ 6.hxg3 Bxg3 is mate: the bishop checks along g3-f2-e1 and White's own pieces box the king in. Taking first with the bishop (5...Bxg3+ 6.hxg3 Qxg3#) mates too. Against 4.Nf3 none of this works, which is why the gambit is only a surprise weapon.",
          wrong: {
            'd6g3': "4...Bg3+? 5.hxg3 and the queen cannot reach g3 in time; you are simply a piece down.",
            'd6h2': "4...Bxh2 wins a pawn, but 5.Rxh2 takes the bishop. Check with the queen first."
          }
        }
      ]
    },

    /* ----------------------------------------------- 3. BUDAPEST MATE */
    {
      id: 'black-gambits-3',
      category: 'black-gambits',
      side: 'black',
      title: 'Budapest: the knight mate on d3',
      level: 'Beginner',
      minutes: 6,
      objective: "Win back the Budapest pawn with ...Ng4, ...Nc6 and ...Qe7, and spot the pin that allows ...Nd3 mate.",
      summary: "Black regains the gambit pawn by piling up on e5, and a greedy capture runs into a one-move mate.",
      related: { gambits: ['bg-budapest'], lessons: ['tactics-2'] },
      steps: [
        {
          type: 'read',
          title: 'Attack e5 three times',
          orientation: 'b',
          text: "After 1.d4 Nf6 2.c4 e5 3.dxe5 Ng4 Black's knight attacks the e5 pawn. Black adds ...Nc6 and ...Qe7, and the check ...Bb4+ makes White block awkwardly. Usually the pawn comes back within a few moves, with Black's pieces well placed.",
          fen: 'rnbqkb1r/pppp1ppp/8/4P3/2P3n1/8/PP2PPPP/RNBQKBNR w KQkq - 1 4',
          arrows: [['g4', 'e5'], ['b8', 'c6'], ['f8', 'b4']],
          highlights: ['e5']
        },
        {
          type: 'line',
          title: 'The bishop is bait',
          orientation: 'b',
          text: "White asks the bishop on b4 a question with 7.a3. Black ignores it and takes back the pawn on e5.",
          fen: 'start',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'f6g4', san: 'Ng4' },
            { uci: 'c1f4', san: 'Bf4' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8b4', san: 'Bb4+' },
            { uci: 'b1d2', san: 'Nbd2' },
            { uci: 'd8e7', san: 'Qe7', note: "The queen now looks down the e-file at e2 and e1." },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'g4e5', san: 'Ngxe5', note: "The pawn is back, and the bishop is left hanging on purpose." },
            { uci: 'a3b4', san: 'axb4', note: "White wins a piece... or does he?" }
          ]
        },
        {
          type: 'puzzle',
          title: 'Mate in one',
          prompt: "Black to move: White has just taken the bishop. Checkmate in one.",
          fen: 'r1b1k2r/ppppqppp/2n5/4n3/1PP2B2/5N2/1P1NPPPP/R2QKB1R b KQkq - 0 8',
          solution: ['e5d3'],
          hint: "Which white pawn cannot move because of your queen on e7?",
          explanation: "8...Nd3 is mate. The e2 pawn cannot take the knight because it is pinned to the king by the queen on e7, and the king has no squares: d1, d2, f1 and f2 are all occupied by White's own pieces. The bishop on b4 was bait.",
          wrong: {
            'e5f3': "8...Nxf3+ 9.gxf3 just trades knights, and you are still a piece down.",
            'e7b4': "8...Qxb4 wins a pawn back but misses mate."
          }
        }
      ]
    },

    /* --------------------------------------------- 4. TWO KNIGHTS NA5 */
    {
      id: 'black-gambits-4',
      category: 'black-gambits',
      side: 'black',
      title: 'Two Knights: keep kicking the knight',
      level: 'Beginner',
      minutes: 6,
      objective: "After 4.Ng5 d5 5.exd5 Na5, turn the gambit pawn into time by chasing White's pieces with ...h6 and ...e4.",
      summary: "Black is a pawn down in the 5...Na5 Two Knights, and pays for it with tempo after tempo against White's knight.",
      prerequisites: ['openings-1'],
      related: { gambits: ['bg-two-knights', 'bg-traxler'], lessons: ['black-vs-e4-5'] },
      steps: [
        {
          type: 'read',
          title: 'Time instead of a pawn',
          orientation: 'b',
          text: "After 1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 d5 5.exd5 Na5 Black has left the d5 pawn alone and attacks the bishop instead. White keeps an extra pawn, but every white piece that is chased costs a move. Black's compensation is counted in tempi: ...c6, ...h6 and ...e4 all gain time.",
          fen: 'r1bqkb1r/ppp2ppp/5n2/n2Pp1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq - 1 6',
          arrows: [['a5', 'c4'], ['h7', 'h6'], ['e5', 'e4']],
          highlights: ['g5', 'c4']
        },
        {
          type: 'line',
          title: 'Chasing the bishop and the knight',
          orientation: 'b',
          fen: 'start',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f3g5', san: 'Ng5' },
            { uci: 'd7d5', san: 'd5', note: "Blocks the c4 bishop's line to f7." },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'c6a5', san: 'Na5', note: "The gambit: hit the bishop rather than recapture into an attack." },
            { uci: 'c4b5', san: 'Bb5+' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd5c6', san: 'dxc6' },
            { uci: 'b7c6', san: 'bxc6', note: "A pawn down, but the bishop is attacked again." },
            { uci: 'b5e2', san: 'Be2' },
            { uci: 'h7h6', san: 'h6', note: "Kicks the knight: another tempo." },
            { uci: 'g5f3', san: 'Nf3', note: "The knight retreats. Can Black hit it again?" }
          ]
        },
        {
          type: 'puzzle',
          title: 'One more tempo',
          prompt: "Black to move (after 8.Be2 h6 9.Nf3): gain another tempo with a pawn.",
          fen: 'r1bqkb1r/p4pp1/2p2n1p/n3p3/8/5N2/PPPPBPPP/RNBQK2R b KQkq - 1 9',
          solution: ['e5e4'],
          hint: "Which pawn can attack the knight on f3?",
          explanation: "9...e4! kicks the knight a second time. After 10.Ne5 Bd6 Black is a pawn down, but has space, open lines for both bishops and easy development, while White's knight has moved four times.",
          wrong: {
            'g7g5': "9...g5? attacks nothing and loosens your king; ...e4 hits the knight at once.",
            'c6c5': "9...c5 gains space but attacks nothing; ...e4 gains the tempo."
          }
        }
      ]
    },

    /* --------------------------------------- 5. BLACKBURNE SHILLING */
    {
      id: 'black-gambits-5',
      category: 'black-gambits',
      side: 'black',
      title: 'The Blackburne Shilling trap',
      level: 'Beginner',
      minutes: 5,
      objective: "Know the Shilling trap with ...Qg5 and ...Nf3 mate, and why it is not a sound opening.",
      summary: "A famous trap that punishes greed, and an honest look at why it fails against calm play.",
      related: { gambits: ['bg-blackburne-shilling'], lessons: ['tactics-2'] },
      steps: [
        {
          type: 'read',
          title: 'Bait on e5',
          orientation: 'b',
          text: "After 1.e4 e5 2.Nf3 Nc6 3.Bc4 Nd4 Black leaves e5 undefended and breaks the rule against moving a piece twice. Against 4.Nxd4 or 4.O-O Black is simply worse. But if White grabs the pawn with 4.Nxe5?, then 4...Qg5! attacks both the knight and the g2 pawn.",
          fen: 'r1bqkbnr/pppp1ppp/8/4p3/2BnP3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
          arrows: [['d4', 'f3'], ['f3', 'e5']],
          highlights: ['e5', 'g2']
        },
        {
          type: 'line',
          title: 'Greed, then more greed',
          orientation: 'b',
          fen: 'start',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'c6d4', san: 'Nd4' },
            { uci: 'f3e5', san: 'Nxe5', note: "Takes the bait." },
            { uci: 'd8g5', san: 'Qg5', note: "Hits the knight and g2 at the same time." },
            { uci: 'e5f7', san: 'Nxf7', note: "A fork of queen and rook, but it ignores g2. 5.Bxf7+ was much better." },
            { uci: 'g5g2', san: 'Qxg2' },
            { uci: 'h1f1', san: 'Rf1' },
            { uci: 'g2e4', san: 'Qxe4+' },
            { uci: 'c4e2', san: 'Be2', note: "Blocks the check, but the bishop is now pinned." }
          ]
        },
        {
          type: 'puzzle',
          title: 'Smothered',
          prompt: "Black to move: checkmate in one.",
          fen: 'r1b1kbnr/pppp1Npp/8/8/3nq3/8/PPPPBP1P/RNBQKR2 b Qkq - 1 7',
          solution: ['d4f3'],
          hint: "The bishop on e2 is pinned to its king by your queen.",
          explanation: "7...Nf3 is checkmate. The bishop on e2 cannot take because it is pinned along the e-file, the queen on d1 is blocked by that bishop, and the king is surrounded by its own pieces. Remember the real lesson too: 4.Nxd4 or 4.O-O leaves Black worse, so this is a trap to know, not a gambit to rely on.",
          wrong: {
            'd4c2': "7...Nxc2+ forks king and rook, but you had mate.",
            'e4e2': "7...Qxe2+? 8.Qxe2: the queen on d1 guards e2."
          }
        }
      ]
    },

    /* ------------------------------------------------- 6. LASKER TRAP */
    {
      id: 'black-gambits-6',
      category: 'black-gambits',
      side: 'black',
      title: 'Albin Countergambit: the Lasker Trap',
      level: 'Intermediate',
      minutes: 7,
      objective: "Use the d4 wedge in the Albin and finish the Lasker Trap with an underpromotion to a knight.",
      summary: "The d4 pawn cramps White; if White breaks it the wrong way, a pawn marches to g1 and becomes a knight.",
      related: { gambits: ['bg-albin'] },
      steps: [
        {
          type: 'read',
          title: 'The wedge on d4',
          orientation: 'b',
          text: "After 1.d4 d5 2.c4 e5 3.dxe5 d4 Black's pawn on d4 takes c3 and e3 from White. Breaking it with an early e3 looks natural, but it opens the e-file and the a5-e1 diagonal while White's king is still in the centre.",
          fen: 'rnbqkbnr/ppp2ppp/8/4P3/2Pp4/8/PP2PPPP/RNBQKBNR w KQkq - 0 4',
          arrows: [['d4', 'e3'], ['d4', 'c3']],
          highlights: ['d4']
        },
        {
          type: 'line',
          title: '4.e3? and the pawn runs',
          orientation: 'b',
          fen: 'start',
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'd5d4', san: 'd4' },
            { uci: 'e2e3', san: 'e3', note: "Natural, but 4.Nf3 is correct." },
            { uci: 'f8b4', san: 'Bb4+' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'd4e3', san: 'dxe3', note: "Black's pawn keeps going." },
            { uci: 'd2b4', san: 'Bxb4', note: "White wins a bishop, but the pawn on e3 is about to capture with check." },
            { uci: 'e3f2', san: 'exf2+' },
            { uci: 'e1e2', san: 'Ke2', note: "Forced in practice: 7.Kxf2?? Qxd1 wins White's queen." }
          ]
        },
        {
          type: 'puzzle',
          title: 'Promote wisely',
          prompt: "Black to move: the f2 pawn can capture on g1. Choose the strongest promotion.",
          fen: 'rnbqk1nr/ppp2ppp/8/4P3/1BP5/8/PP2KpPP/RN1Q1BNR b kq - 1 7',
          solution: ['f2g1n'],
          hint: "A new queen is not check. Which piece gives check from g1?",
          explanation: "7...fxg1=N+! A knight on g1 checks the king on e2. If 8.Rxg1, 8...Bg4+ wins White's queen; 8.Kf2 or 8.Ke3 drops the d1 queen to ...Qxd1. After 8.Ke1, 8...Qh4+ keeps the attack going, and the new knight has already won back the bishop. This underpromotion is the Lasker Trap.",
          wrong: {
            'f2g1q': "7...fxg1=Q? is not check: 8.Qxd8+ Kxd8 9.Rxg1 trades queens, material is roughly level and the attack is gone.",
            'd8d1': "7...Qxd1+ 8.Kxd1 fxg1=Q 9.Rxg1 also trades everything off; the attack disappears."
          }
        }
      ]
    },

    /* --------------------------------------------------- 7. TRAXLER */
    {
      id: 'black-gambits-7',
      category: 'black-gambits',
      side: 'black',
      title: 'Traxler: answer the fork with a check',
      level: 'Intermediate',
      minutes: 7,
      objective: "Answer 5.Nxf7 in the Traxler with 5...Bxf2+ and 6...Nxe4+, and understand why the king hunt is the point.",
      summary: "When White's knight forks queen and rook, Black ignores it and drags White's king into the open.",
      prerequisites: ['black-gambits-4'],
      related: { gambits: ['bg-traxler', 'bg-two-knights'], lessons: ['middlegames-2'] },
      steps: [
        {
          type: 'read',
          title: 'Ignoring the threat',
          orientation: 'b',
          text: "In the Traxler, 1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 Bc5, Black does not defend f7 at all. The bishop on c5 aims at f2, guarded only by White's king. If the knight takes on f7 it forks queen and rook, but it also leaves White's king short of defenders.",
          fen: 'r1bqk2r/pppp1ppp/2n2n2/2b1p1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 6 5',
          arrows: [['c5', 'f2'], ['g5', 'f7']],
          highlights: ['f2', 'f7']
        },
        {
          type: 'puzzle',
          title: 'Counter-attack',
          prompt: "Black to move: White's knight forks your queen and rook. Strike back.",
          fen: 'r1bqk2r/pppp1Npp/2n2n2/2b1p3/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 0 5',
          solution: ['c5f2'],
          hint: "Check first. Which white pawn is defended only by the king?",
          explanation: "5...Bxf2+! drags the king out. After 6.Kxf2 Nxe4+ another check follows and the queen joins with ...Qh4 or ...Qf6, while White's knight on f7 is far from home. Material swings back and forth; king safety decides. Modern analysis prefers 5.Bxf7+ for White, which is why the Traxler is a speculative weapon.",
          wrong: {
            'd8e7': "5...Qe7 saves the queen, but 6.Nxh8 leaves you a rook down with no attack.",
            'e8g8': "5...O-O? 6.Nxd8 wins your queen."
          }
        },
        {
          type: 'line',
          title: 'The king walks',
          orientation: 'b',
          text: "The main line after the counter-attack. White's best is 7.Kg1, where the rook on h1 is buried; Black's queen arrives with a threat of mate on f2.",
          fen: 'r1bqk2r/pppp1Npp/2n2n2/2b1p3/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 0 5',
          moves: [
            { uci: 'c5f2', san: 'Bxf2+' },
            { uci: 'e1f2', san: 'Kxf2' },
            { uci: 'f6e4', san: 'Nxe4+', note: "A second check; the queen is ready to join with ...Qh4." },
            { uci: 'f2g1', san: 'Kg1' },
            { uci: 'd8h4', san: 'Qh4', note: "Threatens ...Qf2 mate. White must defend precisely." }
          ]
        }
      ]
    },

    /* -------------------------------------------------- 8. MARSHALL */
    {
      id: 'black-gambits-8',
      category: 'black-gambits',
      side: 'black',
      title: 'Marshall Attack: the light-square mate',
      level: 'Intermediate',
      minutes: 8,
      objective: "Understand how the Marshall's ...Qh3 and ...Bg4 target the light squares round White's king, and find the ...Bf3 mating idea.",
      summary: "Why the Marshall pawn buys a lasting attack, and the queen-and-bishop pattern that threatens mate on g2.",
      prerequisites: ['middlegames-2'],
      related: { gambits: ['bg-marshall'] },
      steps: [
        {
          type: 'line',
          title: 'From gambit to attack',
          orientation: 'b',
          text: "Starting from the Marshall position after 8.c3 d5: Black gives the e5 pawn and brings the queen to h3 within six moves, while White's knight and bishop on b1 and c1 are still at home.",
          fen: 'r1bq1rk1/2p1bppp/p1n2n2/1p1pp3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 9',
          moves: [
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'f6d5', san: 'Nxd5' },
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'c6e5', san: 'Nxe5' },
            { uci: 'e1e5', san: 'Rxe5' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e7d6', san: 'Bd6', note: "Hits the rook and aims at h2." },
            { uci: 'e5e1', san: 'Re1' },
            { uci: 'd8h4', san: 'Qh4', note: "Forces a weakening of White's kingside." },
            { uci: 'g2g3', san: 'g3' },
            { uci: 'h4h3', san: 'Qh3', note: "The queen settles on the light squares next to White's king; ...Bg4 comes next." }
          ]
        },
        {
          type: 'read',
          title: 'Holes on the light squares',
          orientation: 'b',
          text: "After g3, the squares f3 and h3 can no longer be guarded by a pawn. Black's queen sits on h3, the bishop on c8 heads for g4 and then f3, and a rook may swing to e6 and h6. If a black bishop lands on f3 supported by the queen, mate on g2 is threatened. White defends with Be3, Qd3 or Qf1 and Nd2.",
          fen: 'r1b2rk1/5ppp/p1pb4/1p1n4/3P4/1BP3Pq/PP3P1P/RNBQR1K1 w - - 1 15',
          arrows: [['c8', 'g4'], ['g4', 'f3'], ['h3', 'g2']],
          highlights: ['f3', 'g2', 'h3']
        },
        {
          type: 'puzzle',
          title: 'Mate on the light squares',
          prompt: "Black to move (illustrative Marshall position): force mate. White's queenside pieces are still asleep.",
          fen: '4rrk1/5ppp/p1pb4/1p1n4/3P2b1/1BP3Pq/PP1Q1P1P/RNB1R1K1 b - - 0 18',
          solution: ['g4f3'],
          hint: "Which square next to White's king can your queen reach with support?",
          explanation: "18...Bf3! threatens ...Qg2 mate, and nothing can stop it: no white piece can cover g2 or take the bishop, so mate follows next move. This is the Marshall's dream: queen on h3, bishop on f3, and White's queenside pieces unable to help.",
          wrong: {
            'e8e1': "18...Rxe1+? 19.Qxe1 Bf3 20.Qf1 and the queen now guards g2.",
            'h3h2': "18...Qxh2+? 19.Kxh2: the pawn on g3 blocks your bishop, so the queen was unprotected."
          }
        }
      ]
    },

    /* ----------------------------------------------------- 9. BENKO */
    {
      id: 'black-gambits-9',
      category: 'black-gambits',
      side: 'black',
      title: 'Benko Gambit: pressure on the long diagonal',
      level: 'Advanced',
      minutes: 9,
      objective: "Use the Benko's open a- and b-files and the g7 bishop to pressure White's queenside, and spot when a knight capture unleashes the bishop.",
      summary: "The Benko pawn buys open files and a long diagonal; this lesson shows the plans and the tactics they create.",
      prerequisites: ['middlegames-1'],
      related: { gambits: ['bg-benko'], lessons: ['middlegames-1'] },
      steps: [
        {
          type: 'read',
          title: 'What the pawn buys',
          orientation: 'b',
          text: "After 1.d4 Nf6 2.c4 c5 3.d5 b5 4.cxb5 a6 5.bxa6 g6 6.Nc3 Bxa6 7.e4 Bxf1 8.Kxf1 d6 9.Nf3 Bg7, White is a pawn up and cannot castle. Black's rooks will use the half-open a- and b-files against a2 and b2, the queen goes to a5 or b6, and the g7 bishop sweeps the long diagonal towards c3, b2 and a1.",
          fen: 'rn1qk2r/4ppbp/3p1np1/2pP4/4P3/2N2N2/PP3PPP/R1BQ1K1R w kq - 2 10',
          arrows: [['g7', 'b2'], ['a8', 'a2']],
          highlights: ['a2', 'b2', 'c3']
        },
        {
          type: 'read',
          title: 'The knight on c3 is overworked',
          orientation: 'b',
          text: "In Benko middlegames White's knight on c3 often has too many jobs: it guards e4, d5 and a2, and blocks the g7 bishop's path to b2 and a1. Black's knight on f6 also blocks that bishop. When the f6 knight moves with a capture, the bishop suddenly attacks c3, and the queen on a5 may add a second attacker.",
          fen: 'rr4k1/3nppbp/3p1np1/q1pP4/4P3/1PN2NP1/P1Q2PKP/R1BR4 b - - 0 18',
          arrows: [['g7', 'c3'], ['a5', 'c3'], ['c3', 'a1']],
          highlights: ['c3', 'a1']
        },
        {
          type: 'puzzle',
          title: 'Unleash the bishop',
          prompt: "Black to move (illustrative Benko position): uncover the g7 bishop and win material.",
          fen: 'rr4k1/3nppbp/3p1np1/q1pP4/4P3/1PN2NP1/P1Q2PKP/R1BR4 b - - 0 18',
          solution: ['f6e4'],
          accept: [['f6e4'], ['f6d5']],
          hint: "Capture a central pawn with the knight and look at the diagonal it opens.",
          explanation: "18...Nxe4 (or 18...Nxd5) wins back the gambit pawn and unmasks the g7 bishop. Now c3 is attacked three times, defended only by the queen, and pinned to the a1 rook. If the c3 knight recaptures, ...Bxa1 wins the exchange (after Bd2, hitting queen and bishop, ...Qxa2! keeps it). If anything else recaptures, ...Bxc3 regains the piece: Black has at least won back the gambit pawn, and the bishop dominates.",
          wrong: {
            'a5c3': "18...Qxc3? 19.Qxc3: your f6 knight still blocks the g7 bishop, so nothing recaptures and you have given your queen for a knight.",
            'b8b3': "18...Rxb3? 19.Qxb3: the queen recaptures and you have simply given a rook for a pawn.",
            'f6g4': "18...Ng4 also uncovers the bishop, but it takes nothing, and 19.Bd2 or 19.Bb2 holds c3."
          }
        }
      ]
    },

    /* --------------------------------------------- 13. SCHLIEMANN */
    {
      id: 'black-gambits-13',
      category: 'black-gambits',
      side: 'black',
      title: 'Schliemann Gambit: the double attack with ...Qg5',
      level: 'Advanced',
      minutes: 8,
      objective: "Follow the forcing 4.Nc3 main line of the Schliemann and save the queen with a double attack on g2 and b5.",
      summary: "Black gives up e5 to gain time, then the queen escapes with a double attack that keeps the balance.",
      prerequisites: ['tactics-1'],
      related: { gambits: ['bg-schliemann', 'bg-marshall'], openings: ['b-ruy-berlin'] },
      steps: [
        {
          type: 'line',
          title: 'Into the main line',
          orientation: 'b',
          fen: 'start',
          text: "Black strikes at e4 with the f-pawn, then answers Nxe4 with ...d5, ready to give up e5.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1b5', san: 'Bb5' },
            { uci: 'f7f5', san: 'f5', note: "The Schliemann: a King's Gambit idea in reverse." },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'f5e4', san: 'fxe4' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'd7d5', san: 'd5', note: "Hits the knight; e5 is left hanging." },
            { uci: 'f3e5', san: 'Nxe5' },
            { uci: 'd5e4', san: 'dxe4' },
            { uci: 'e5c6', san: 'Nxc6', note: "The knight attacks Black's queen." }
          ]
        },
        {
          type: 'puzzle',
          title: 'Save the queen with tempo',
          orientation: 'b',
          fen: 'r1bqkbnr/ppp3pp/2N5/1B6/4p3/8/PPPP1PPP/R1BQK2R b KQkq - 0 7',
          prompt: "Black to move: your queen is attacked. Move it so that it attacks both g2 and the b5 bishop.",
          solution: ['d8g5'],
          hint: "Which square on the queen's diagonals sees both g2 and b5?",
          explanation: "7...Qg5! escapes and creates a double attack: g2 along the g-file and b5 along the fifth rank. White usually answers 8.Qe2, defending both, and after 8...Nf6 9.f4 the game turns very sharp. 7...Qd5 is also played in practice, but it only attacks b5.",
          wrong: {
            'b7c6': "7...bxc6? 8.Bxc6+ hits king and the a8 rook, and Bxa8 wins the exchange.",
            'd8d5': "7...Qd5 is a real option in theory, but it attacks only b5, not g2.",
            'd8h4': "7...Qh4 attacks nothing important and lets White consolidate."
          }
        }
      ]
    },

    /* --------------------------------------------- 14. FALKBEER */
    {
      id: 'black-gambits-14',
      category: 'black-gambits',
      side: 'black',
      title: 'Falkbeer Countergambit: the holes after f4',
      level: 'Intermediate',
      minutes: 6,
      objective: "Use the squares that 2.f4 left unguarded to punish careless development in the Falkbeer Countergambit.",
      summary: "After f4, no white pawn guards e3; the e4 knight and c5 bishop make White's natural moves risky.",
      prerequisites: ['openings-1'],
      related: { gambits: ['bg-falkbeer'] },
      steps: [
        {
          type: 'line',
          title: 'The classical main line',
          orientation: 'b',
          fen: 'start',
          text: "Black meets the King's Gambit with ...d5 and the e4 wedge. After the exchanges, the knight on e4 and the bishop on c5 aim at f2 and e3.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'f2f4', san: 'f4' },
            { uci: 'd7d5', san: 'd5', note: "The counter-gambit." },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'e5e4', san: 'e4' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd3e4', san: 'dxe4' },
            { uci: 'f6e4', san: 'Nxe4' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8c5', san: 'Bc5', note: "Now White's best is 7.Qe2, pinning the knight and guarding f2." }
          ]
        },
        {
          type: 'read',
          title: 'What f4 gave away',
          orientation: 'b',
          fen: 'rnbqk2r/ppp2ppp/8/2bP4/4nP2/5N2/PPP3PP/RNBQKB1R w KQkq - 1 7',
          text: "With the f-pawn on f4, the squares e3 and g3 are no longer guarded by a pawn, and f2 is defended only by the king. Black's bishop on c5 and knight on e4 point straight at them. That is why 7.Qe2 is needed: it pins the knight to Black's king and covers f2.",
          arrows: [['c5', 'f2'], ['e4', 'f2']],
          highlights: ['e3', 'g3', 'f2']
        },
        {
          type: 'puzzle',
          title: 'Punish 7.Be3?',
          orientation: 'b',
          fen: 'rnbqk2r/ppp2ppp/8/2bP4/4nP2/4BN2/PPP3PP/RN1QKB1R b KQkq - 3 7',
          prompt: "White challenged the bishop with 7.Be3?. Black to move: win material.",
          solution: ['c5e3'],
          hint: "Which white piece can recapture on e3 now that the f-pawn has moved?",
          explanation: "7...Bxe3 simply wins a piece: no white pawn or piece guards e3. If 8.Qe2, pinning the e4 knight, 8...Bf2+! answers with check, and after 9.Kd1 the pin is gone (9.Qxf2 Nxf2 costs White the queen). The lesson for both sides: after f4, e3 is a hole.",
          wrong: {
            'c5b6': "7...Bb6 keeps the bishop but misses a free piece.",
            'e4f2': "7...Nf2? 8.Bxc5 and Black's knight is stuck in White's camp."
          }
        }
      ]
    },

    /* --------------------------------------------- 18. STAFFORD */
    {
      id: 'black-gambits-18',
      category: 'black-gambits',
      side: 'black',
      title: 'Stafford Gambit: the queen as bait',
      level: 'Beginner',
      minutes: 6,
      objective: "Recognise the Stafford's most famous trap and deliver the mate with two bishops after White grabs the queen.",
      summary: "If White pins with Bg5 too early, ...Nxe4 offers the queen and the bishops mate on f2 and g4.",
      prerequisites: ['tactics-2'],
      related: { gambits: ['bg-stafford'], openings: ['b-petroff'] },
      steps: [
        {
          type: 'read',
          title: 'An honest warning',
          orientation: 'b',
          fen: 'r1bqkb1r/ppp2ppp/2p2n2/8/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 5',
          text: "After 1.e4 e5 2.Nf3 Nf6 3.Nxe5 Nc6 4.Nxc6 dxc6, Black is a pawn down. With d3 or Nc3, Be2 and care over f2 and h2, White keeps a clear advantage. The Stafford works because its open lines create traps: the c8 and f8 bishops are free, and f2 is defended only by the king.",
          arrows: [['f8', 'c5'], ['c8', 'g4']],
          highlights: ['f2']
        },
        {
          type: 'line',
          title: 'The natural pin',
          orientation: 'b',
          fen: 'r1bqkb1r/ppp2ppp/2p2n2/8/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 5',
          text: "White protects e4 and pins the knight. It looks natural, but the pin is not real.",
          moves: [
            { uci: 'd2d3', san: 'd3' },
            { uci: 'f8c5', san: 'Bc5', note: "The bishop eyes f2." },
            { uci: 'c1g5', san: 'Bg5', note: "Pins the knight to the queen." },
            { uci: 'f6e4', san: 'Nxe4', note: "Black offers the queen." },
            { uci: 'g5d8', san: 'Bxd8', note: "White takes it." }
          ]
        },
        {
          type: 'puzzle',
          title: 'Mate with two bishops',
          orientation: 'b',
          fen: 'r1bBk2r/ppp2ppp/2p5/2b5/4n3/3P4/PPP2PPP/RN1QKB1R b KQkq - 0 7',
          prompt: "White has grabbed your queen. Black to move: checkmate in two.",
          solution: ['c5f2', 'e1e2', 'c8g4'],
          hint: "Check on f2 first: the knight on e4 protects the bishop. Where can the king go?",
          explanation: "7...Bxf2+ 8.Ke2 (the only move: the king cannot take, as e4 guards f2, and d2 is covered by the knight) 8...Bg4 is mate. The king cannot reach e1, e3, f3 or d2, the queen on d1 is in the way, and nothing can block on f3. If White had played 7.dxe4, 7...Bxf2+ 8.Kxf2 Qxd1 wins the queen instead.",
          wrong: {
            'e4f2': "7...Nxf2? 8.Bxc7 and Black is a queen down for very little.",
            'c8g4': "7...Bg4? 8.f3 and the attack is over: you are a queen down.",
            'e8d8': "7...Kxd8 takes the bishop back, but you are still a queen for a bishop down."
          }
        }
      ]
    }

  ],
  glossary: [
    { term: 'Countergambit', definition: "A gambit played by the defending side in reply to the opponent's opening, such as the Albin or Falkbeer, usually offering a pawn to seize the initiative." },
    { term: 'Underpromotion', definition: "Promoting a pawn to a rook, bishop or knight instead of a queen, usually because the lesser piece gives check or avoids stalemate." },
    { term: 'Pawn wedge', definition: "An advanced pawn, such as Black's d4 in the Albin or e4 in the Falkbeer, that cramps the opponent by taking key squares from their pieces." }
  ]
}]);
