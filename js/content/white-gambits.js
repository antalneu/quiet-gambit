/* The Quiet Gambit - White gambits: fourteen gambit entries and the white-gambits lessons.
 * Data only: appends one part to window.QG_PARTS. Checked by tools/check-content.js. */
window.QG_PARTS = (window.QG_PARTS || []).concat([{
  source: 'white-gambits',
  gambits: [

    /* ------------------------------------------------------------ 1.e4 e5 */
    {
      id: 'wg-kings-gambit',
      side: 'white',
      name: "King's Gambit",
      eco: 'C33',
      defining: ['e2e4', 'e7e5', 'f2f4'],
      moves: '1.e4 e5 2.f4',
      character: 'Playable',
      characterNote: "With accurate defence Black is objectively fine, and many lines are known to be good for Black, but it still appears in strong rapid and surprise games and is a fully respectable club weapon.",
      difficulty: 'Intermediate',
      summary: "The romantic gambit: White gives the f-pawn to open the f-file and build a big centre with d4.",
      idea: "After 2...exf4 White wants d4, Bxf4 and an open f-file against f7. Black's best tries either return the pawn with ...d5 or hold it with ...g5, which White undermines at once with h4. White trades some king safety for central space and fast piece play.",
      offer: "The f-pawn on move two, which deflects Black's e-pawn from the centre.",
      compensation: "A free hand in the centre (d4 and often e5), the half-open f-file against f7, and quick development while Black spends moves holding the f4 pawn.",
      plans: {
        white: [
          "Play d4 and recapture on f4 with the bishop when it is safe, keeping two central pawns.",
          "Against ...g5, hit the chain at once with h4 and use the e5 square for a knight.",
          "Castle kingside and aim the rook and c4 bishop at f7."
        ],
        black: [
          "Return the pawn with ...d5 to free the pieces and question White's king.",
          "Hold f4 with ...g5 only if ready for h4; use the e1-h4 diagonal and the light squares around White's king.",
          "Develop quickly and exchange attacking pieces; a level endgame suits Black."
        ]
      },
      risks: [
        "The e1-h4 diagonal and the a7-g1 diagonal can expose White's king to early checks.",
        "If Black keeps the f4 pawn and completes development, White is simply a pawn down.",
        "Lines are sharp and concrete: one inaccurate move order can lose quickly."
      ],
      accepted: "2...exf4 3.Nf3 (stopping ...Qh4+) is the main line; Black chooses between ...d5, ...d6 with ...g5, or the direct 3...g5.",
      declined: "2...Bc5 (the Classical decline) or the Falkbeer 2...d5 are sensible; see the lesson on the King's Gambit for the trap after 2...Bc5 3.fxe5?",
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'f2f4', san: 'f4', note: "The offer: the f-pawn for an open f-file and the centre." },
          { uci: 'e5f4', san: 'exf4' },
          { uci: 'g1f3', san: 'Nf3', note: "Develops and stops ...Qh4+ before anything else." },
          { uci: 'g7g5', san: 'g5', note: "Black tries to hold the extra pawn with a pawn chain." },
          { uci: 'h2h4', san: 'h4', note: "Hit the chain at once, before Black can support it with ...h6 and ...Bg7." },
          { uci: 'g5g4', san: 'g4' },
          { uci: 'f3e5', san: 'Ne5', note: "The Kieseritzky: the knight takes a fine central post and eyes g4 and f7." },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'e5d3', san: 'Nd3' },
          { uci: 'f6e4', san: 'Nxe4' },
          { uci: 'c1f4', san: 'Bxf4', note: "White wins back f4 but is still a pawn down after ...Nxe4; the compensation is development, the open e-file and the weak g4 pawn." }
        ]
      },
      group: 'e4',
      style: 'Sharp',
      minutes: 20,
      pitfalls: [
        { kind: 'Trap', side: 'white', title: '3.fxe5?? against the Classical decline',
          text: "After 2...Bc5, taking on e5 loses a rook: 3...Qh4+ 4.g3 Qxe4+ forks the king and the h1 rook, and the c5 bishop stops the king from escaping via f2. Play 3.Nf3 first.",
          uci: ['e2e4', 'e7e5', 'f2f4', 'f8c5', 'f4e5', 'd8h4', 'g2g3', 'h4e4'] },
        { kind: 'Mistake', side: 'white', title: 'Forgetting to stop ...Qh4+',
          text: "After 2...exf4, moves such as 3.d4?! allow 3...Qh4+ 4.Ke2, and White's king loses the right to castle. 3.Nf3 develops and covers h4 at the same time.",
          uci: ['e2e4', 'e7e5', 'f2f4', 'e5f4', 'd2d4', 'd8h4', 'e1e2'] },
        { kind: 'Risk', side: 'black', title: 'Greedy pawn chains',
          text: "Holding f4 with ...g5 and ...g4 wins time only if Black can support the chain. Against h4 and Ne5, Black's light squares and king can become loose; returning the pawn with ...d5 is often the calmer choice." }
      ],
      lines: [
        { id: 'kieseritzky', name: '2...exf4 3.Nf3 g5 4.h4 (Kieseritzky)', kind: 'Accepted',
          summary: "Black holds the pawn with ...g5; White strikes at once with h4 and plants the knight on e5. White wins back f4 but usually remains a pawn down for development.",
          moves: [
            { uci: 'e5f4', san: 'exf4' },
            { uci: 'g1f3', san: 'Nf3', note: "Develops and stops ...Qh4+." },
            { uci: 'g7g5', san: 'g5' },
            { uci: 'h2h4', san: 'h4', note: "The lever: attack the chain before ...h6 and ...Bg7 support it." },
            { uci: 'g5g4', san: 'g4' },
            { uci: 'f3e5', san: 'Ne5', note: "A central post eyeing g4 and f7." },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e5d3', san: 'Nd3' },
            { uci: 'f6e4', san: 'Nxe4' },
            { uci: 'c1f4', san: 'Bxf4', note: "Material: White is a pawn down, with quick development and the loose g4 pawn as compensation." }
          ] },
        { id: 'modern', name: '2...exf4 3.Nf3 d5 (Modern Defence)', kind: 'Accepted',
          summary: "Black gives the pawn back at once to free the pieces. White recovers material but Black develops easily and the f4 pawn can stay a nuisance.",
          moves: [
            { uci: 'e5f4', san: 'exf4' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd7d5', san: 'd5', note: "Returning the pawn opens lines for Black's bishops." },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1b5', san: 'Bb5+', note: "One of several moves; White develops with a check." },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'd5c6', san: 'dxc6' },
            { uci: 'b8c6', san: 'Nxc6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'f8d6', san: 'Bd6', note: "Black's pieces are active and the f4 pawn is still alive; play is roughly balanced." }
          ] },
        { id: 'classical-decline', name: '2...Bc5 (Classical decline)', kind: 'Declined',
          summary: "Black develops a bishop to the a7-g1 diagonal, which stops White castling short for a while. Both sides develop calmly; White must not grab e5.",
          moves: [
            { uci: 'f8c5', san: 'Bc5', note: "The bishop eyes g1, so White cannot castle short easily." },
            { uci: 'g1f3', san: 'Nf3', note: "Not 3.fxe5?? Qh4+." },
            { uci: 'd7d6', san: 'd6', note: "Now e5 is supported and ...exf4 remains possible." },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd2d3', san: 'd3', note: "A quiet position with the f-file as White's long-term asset." }
          ] }
      ],
      lessons: ['gambits-2', 'white-gambits-5'],
      uncertain: "The Kieseritzky move order with 5...Nf6 6.d4 d6 7.Nd3 is well known, but evaluations of the Black replies after 8.Bxf4 vary between sources."
    },

    {
      id: 'wg-evans',
      side: 'white',
      name: 'Evans Gambit',
      eco: 'C51',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'f8c5', 'b2b4'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4',
      character: 'Established',
      characterNote: "Sound enough to have been used by world champions, including Kasparov against Anand in 1995; Black has reliable defences, but none that refutes it.",
      difficulty: 'Intermediate',
      summary: "White gives the b-pawn to gain time against the c5 bishop and build a centre with c3 and d4.",
      idea: "The b-pawn deflects the bishop from c5, so c3 and d4 follow with gain of time. White develops fast, often plays Ba3 to stop Black castling, and aims at f7 with Qb3 and the c4 bishop. Black usually returns material at the right moment rather than clinging to it.",
      offer: "The b-pawn on b4, taken by the c5 bishop.",
      compensation: "Tempi gained by hitting the bishop with c3 and d4, a strong pawn centre, and open lines (the a3-f8 diagonal and the b-file) for White's pieces.",
      plans: {
        white: [
          "Follow with c3 and d4 to win time and the centre.",
          "Use Ba3 to keep Black's king in the centre and Qb3 to hit f7.",
          "Castle quickly, then open the e-file with Re1 against an uncastled king."
        ],
        black: [
          "Take on b4 and retreat to a5 or e7, then give a pawn back with ...d5 or ...d6 to finish development.",
          "Castle as soon as possible; a king stuck on e8 is White's main hope.",
          "Declining with 4...Bb6 is a calm alternative that keeps a sound structure."
        ]
      },
      risks: [
        "If Black returns the pawn correctly, White may get only a modest initiative.",
        "Many lines are long and concrete, and memory slips are costly.",
        "Against the decline 4...Bb6, White has spent a pawn move that loosens the queenside."
      ],
      accepted: "4...Bxb4 5.c3 Ba5 (or 5...Be7) 6.d4 is the main road; Black can take on d4 or hold with ...d6.",
      declined: "4...Bb6 keeps the bishop on a good diagonal; White usually continues 5.a4 to gain queenside space.",
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'f1c4', san: 'Bc4' },
          { uci: 'f8c5', san: 'Bc5' },
          { uci: 'b2b4', san: 'b4', note: "The offer: the bishop is lured away from the important c5 square." },
          { uci: 'c5b4', san: 'Bxb4' },
          { uci: 'c2c3', san: 'c3', note: "Gains a tempo on the bishop and prepares d4." },
          { uci: 'b4a5', san: 'Ba5' },
          { uci: 'd2d4', san: 'd4', note: "The centre arrives with gain of time." },
          { uci: 'e5d4', san: 'exd4' },
          { uci: 'e1g1', san: 'O-O', note: "Development before material: White does not hurry to recapture." },
          { uci: 'g8e7', san: 'Nge7', note: "A reliable defence: Black prepares ...d5 to give the pawn back." },
          { uci: 'c3d4', san: 'cxd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'e4d5', san: 'exd5' },
          { uci: 'e7d5', san: 'Nxd5', note: "Now Ba3 stops Black castling: the theme of the Ba3 lesson." }
        ]
      },
      group: 'e4',
      style: 'Attacking',
      minutes: 20,
      familyId: 'wf-italian',
      relatedOpenings: ['w-italian-giuoco', 'b-e5-giuoco-piano'],
      pitfalls: [
        { kind: 'Mistake', side: 'black', title: 'Grabbing a second pawn with 7...dxc3',
          text: "In the 5...Ba5 line, 7...dxc3 (the so-called Compromised Defence) takes more material but falls further behind in development; it is generally considered very risky for Black. Returning material with ...d6 or ...Nge7 and ...d5 is the safer approach.",
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'f8c5', 'b2b4', 'c5b4', 'c2c3', 'b4a5', 'd2d4', 'e5d4', 'e1g1', 'd4c3'] },
        { kind: 'Trap', side: 'black', title: 'The king stuck after Ba3',
          text: "Once the a3-f8 diagonal opens, Ba3 stops Black castling short. If Black then plays slowly, rooks arrive on e1 and d1 against a king that has no safe home.",
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'f8c5', 'b2b4', 'c5b4', 'c2c3', 'b4a5', 'd2d4', 'e5d4', 'e1g1', 'g8e7', 'c3d4', 'd7d5', 'e4d5', 'e7d5', 'c1a3'] },
        { kind: 'Risk', side: 'white', title: 'The calm 4...Bb6 decline',
          text: "Against 4...Bb6 White has only loosened the queenside. Use the b-pawn to gain space (a4-a5) rather than expecting an attack." }
      ],
      lines: [
        { id: 'ba5', name: '4...Bxb4 5.c3 Ba5', kind: 'Accepted',
          summary: "The main road: White gains time on the bishop, builds the centre and castles. Black returns the pawn with ...Nge7 and ...d5, and Ba3 keeps Black's king in the centre.",
          moves: [
            { uci: 'c5b4', san: 'Bxb4' },
            { uci: 'c2c3', san: 'c3', note: "Hits the bishop and prepares d4." },
            { uci: 'b4a5', san: 'Ba5' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'e1g1', san: 'O-O', note: "Development before material." },
            { uci: 'g8e7', san: 'Nge7', note: "Preparing ...d5 to hand back the pawn and free the position." },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'e7d5', san: 'Nxd5' },
            { uci: 'c1a3', san: 'Ba3', note: "Now Black cannot castle short; this is the theme of the Ba3 lesson." }
          ] },
        { id: 'be7', name: '4...Bxb4 5.c3 Be7', kind: 'Accepted',
          summary: "A modern, solid defence: the bishop retreats to e7 and Black plans ...Na5 to trade White's c4 bishop. White uses space and the e5 push against Black's kingside.",
          moves: [
            { uci: 'c5b4', san: 'Bxb4' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'b4e7', san: 'Be7', note: "The bishop is safer here than on a5." },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'c6a5', san: 'Na5', note: "Hits the c4 bishop, White's best attacker." },
            { uci: 'c4e2', san: 'Be2' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'd1d4', san: 'Qxd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e4e5', san: 'e5', note: "Space and tempo: the f6 knight must move." },
            { uci: 'a5c6', san: 'Nc6' },
            { uci: 'd4h4', san: 'Qh4', note: "The queen eyes the kingside; Black must untangle carefully." },
            { uci: 'f6d5', san: 'Nd5' }
          ] },
        { id: 'bb6', name: '4...Bb6 (declined)', kind: 'Declined',
          summary: "Black keeps the bishop on its good diagonal. White uses the extra queenside space with a4 and often Nd5, but there is no forced attack.",
          moves: [
            { uci: 'c5b6', san: 'Bb6' },
            { uci: 'a2a4', san: 'a4', note: "Threatens a5, trapping the bishop's retreat." },
            { uci: 'a7a6', san: 'a6', note: "Gives the bishop a7." },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'c3d5', san: 'Nd5' },
            { uci: 'b6a7', san: 'Ba7', note: "Keeps the bishop, which still eyes f2." },
            { uci: 'd2d3', san: 'd3' }
          ] }
      ],
      lessons: ['white-gambits-6', 'white-gambits-9'],
      uncertain: "The 7...Nge7 8.cxd4 d5 line is one of several modern defences; theory after 10.Ba3 is detailed and still debated."
    },

    {
      id: 'wg-danish',
      side: 'white',
      name: 'Danish Gambit',
      eco: 'C21',
      defining: ['e2e4', 'e7e5', 'd2d4', 'e5d4', 'c2c3'],
      moves: '1.e4 e5 2.d4 exd4 3.c3',
      character: 'Speculative',
      characterNote: "Black can return material with ...d5 and reach an equal or slightly better endgame, or decline with 3...d5. Dangerous in practice, but not sound against a prepared opponent.",
      difficulty: 'Beginner',
      summary: "White offers two pawns for two raking bishops and a huge lead in development.",
      idea: "If Black takes twice, White's bishops on c4 and b2 sweep the board towards f7 and g7, and the queen and knights follow quickly. The price is two pawns, so White must attack at once. The well-known antidote is ...d5, giving material back to free Black's pieces.",
      offer: "The d-pawn, then the c-pawn, and often the b-pawn as well (up to two pawns net after Bxb2).",
      compensation: "Two bishops aimed at Black's kingside, open lines, and several tempi of development.",
      plans: {
        white: [
          "Develop with Bc4, Bxb2, Nc3 and Nf3 and castle fast.",
          "Target f7 and g7 with the bishops, the queen and a rook on the e-file.",
          "If Black hits back with ...d5, know the drawish simplifying line so you do not end up worse."
        ],
        black: [
          "Return material with ...d5 to open the position for Black's own pieces.",
          "Or decline at once with 3...d5, reaching an open position with equal chances.",
          "Do not sit back: passive defence lets White's bishops grow in strength."
        ]
      },
      risks: [
        "After 5...d5 the attack fizzles and the endgame is at best level for White.",
        "Two pawns down, any slow move leaves White simply material behind.",
        "Well-prepared opponents decline with 3...d5 and avoid the attacking lines altogether."
      ],
      accepted: "3...dxc3 4.Bc4 cxb2 5.Bxb2 is the full Danish; 5...d5! is Black's most reliable reply.",
      declined: "3...d5 4.exd5 Qxd5 5.cxd4 gives an open, level position; 3...Nf6 is also sound.",
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'e5d4', san: 'exd4' },
          { uci: 'c2c3', san: 'c3', note: "The offer: White wants open lines and fast development, not the pawn back." },
          { uci: 'd4c3', san: 'dxc3' },
          { uci: 'f1c4', san: 'Bc4', note: "A second pawn is offered for development and pressure on f7." },
          { uci: 'c3b2', san: 'cxb2' },
          { uci: 'c1b2', san: 'Bxb2', note: "Two bishops side by side, aiming at f7 and g7." },
          { uci: 'd7d5', san: 'd5', note: "The antidote: give a pawn back to open lines for Black's pieces." },
          { uci: 'c4d5', san: 'Bxd5' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'd5f7', san: 'Bxf7+', note: "White heads for simplification, because the attack has run out of fuel." },
          { uci: 'e8f7', san: 'Kxf7' },
          { uci: 'd1d8', san: 'Qxd8' },
          { uci: 'f8b4', san: 'Bb4+' },
          { uci: 'd8d2', san: 'Qd2', note: "The only move that saves the queen; 10.Nxd2 follows with level material." },
          { uci: 'b4d2', san: 'Bxd2+' }
        ]
      },
      group: 'e4',
      style: 'Attacking',
      aliases: ['Nordic Gambit'],
      minutes: 12,
      pitfalls: [
        { kind: 'Mistake', side: 'white', title: 'Blocking the wrong way on move nine',
          text: "In the simplifying line, 8...Bb4+ also uncovers the h8 rook against your queen on d8. Only 9.Qd2 keeps material level; 9.Nc3, 9.Nd2, 9.Bc3 or 9.Ke2 lose the queen to ...Rxd8.",
          uci: ['e2e4', 'e7e5', 'd2d4', 'e5d4', 'c2c3', 'd4c3', 'f1c4', 'c3b2', 'c1b2', 'd7d5', 'c4d5', 'g8f6', 'd5f7', 'e8f7', 'd1d8', 'f8b4', 'b1c3', 'h8d8'] },
        { kind: 'Risk', side: 'white', title: 'Attacking after 5...d5',
          text: "Once Black returns a pawn with ...d5, the bishops lose much of their power. Trying to keep the attack going usually leaves White simply two pawns down; take the simplifying line instead." },
        { kind: 'Mistake', side: 'black', title: 'Passive defence',
          text: "Keeping both pawns with slow moves such as ...d6 and ...Be7 lets the b2 and c4 bishops dominate f7 and g7. The ...d5 counter-strike is Black's key resource." }
      ],
      lines: [
        { id: 'double', name: '3...dxc3 4.Bc4 cxb2 5.Bxb2 d5', kind: 'Accepted',
          summary: "The full Danish: two pawns for two bishops, met by Black's antidote ...d5. White's safest path is to simplify into a level endgame.",
          moves: [
            { uci: 'd4c3', san: 'dxc3' },
            { uci: 'f1c4', san: 'Bc4', note: "A second pawn offered for development." },
            { uci: 'c3b2', san: 'cxb2' },
            { uci: 'c1b2', san: 'Bxb2', note: "Both bishops aim at Black's kingside." },
            { uci: 'd7d5', san: 'd5', note: "The antidote: one pawn back to open lines for Black." },
            { uci: 'c4d5', san: 'Bxd5' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd5f7', san: 'Bxf7+' },
            { uci: 'e8f7', san: 'Kxf7' },
            { uci: 'd1d8', san: 'Qxd8' },
            { uci: 'f8b4', san: 'Bb4+', note: "Check, and the h8 rook now sees d8." },
            { uci: 'd8d2', san: 'Qd2', note: "The only move that keeps material level." },
            { uci: 'b4d2', san: 'Bxd2+' },
            { uci: 'b1d2', san: 'Nxd2' }
          ] },
        { id: 'd5-decline', name: '3...d5 (declined)', kind: 'Declined',
          summary: "Black refuses the pawns and opens the centre at once. White gets an isolated d-pawn and free development; the position is open and roughly level.",
          moves: [
            { uci: 'd7d5', san: 'd5', note: "Strike first, before White's pieces are out." },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'd8d5', san: 'Qxd5' },
            { uci: 'c3d4', san: 'cxd4', note: "White has an isolated d-pawn but easy development." },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'c8g4', san: 'Bg4', note: "Pressure on d4 through the pin." },
            { uci: 'f1e2', san: 'Be2' }
          ] }
      ],
      lessons: ['white-gambits-8'],
      uncertain: "Sources differ on whether the endgame after 10.Nxd2 is simply equal or slightly more comfortable for Black."
    },

    {
      id: 'wg-scotch-gambit',
      side: 'white',
      name: 'Scotch Gambit',
      eco: 'C44',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'd2d4', 'e5d4', 'f1c4'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.Bc4',
      character: 'Playable',
      characterNote: "Sound and flexible; often the pawn is regained quickly or play transposes to the Two Knights or Giuoco Piano, so the risk is modest.",
      difficulty: 'Intermediate',
      summary: "White leaves the d4 pawn for a moment and develops the bishop, aiming at f7 and quick play down the e-file.",
      idea: "Instead of recapturing on d4, White develops and keeps options: e5 against ...Nf6, Ng5 against f7, or c3 to offer a second pawn. In many lines White wins d4 back with Nxd4 after Black's pieces are committed, keeping a pleasant lead in development.",
      offer: "The d4 pawn, left hanging for a few moves (sometimes the c-pawn too after c3).",
      compensation: "Fast development, pressure on f7, and the e5 push that can drive away a knight on f6.",
      plans: {
        white: [
          "Against ...Nf6, push e5 and win the d4 pawn back with Nxd4 later.",
          "Against ...Bc5, consider c3 or O-O with a quick Re1 and e5.",
          "Keep Black's king under watch: f7 is the soft spot."
        ],
        black: [
          "Strike back with ...d5 when White pushes e5, freeing the pieces.",
          "Do not cling to d4 at the cost of development.",
          "Aim for simple, active play; most lines are about equal if Black is accurate."
        ]
      },
      risks: [
        "Many lines transpose to well-mapped openings where White has no special edge.",
        "Careless knight jumps such as Ng5 can cost time if they lead to nothing.",
        "If Black keeps d4 with ...Bc5 and ...d6 safely, White must prove compensation."
      ],
      accepted: "4...Nf6 5.e5 d5 is the most common; 4...Bc5 5.c3 Nf6 transposes to a Giuoco Piano.",
      declined: "Black does not really decline; the question is how to develop while the pawn sits on d4. 4...Bb4+ and 4...Bc5 are both sound.",
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'e5d4', san: 'exd4' },
          { uci: 'f1c4', san: 'Bc4', note: "Development first: the d4 pawn will usually be won back later." },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'e4e5', san: 'e5', note: "Kicks the knight before it can take on e4." },
          { uci: 'd7d5', san: 'd5', note: "Black's best: counter-attack the bishop and free the position." },
          { uci: 'c4b5', san: 'Bb5' },
          { uci: 'f6e4', san: 'Ne4' },
          { uci: 'f3d4', san: 'Nxd4', note: "The pawn is regained; the question now is development and the e5 wedge." },
          { uci: 'c8d7', san: 'Bd7' },
          { uci: 'b5c6', san: 'Bxc6' },
          { uci: 'b7c6', san: 'bxc6' },
          { uci: 'e1g1', san: 'O-O', note: "White plans f3 to evict the e4 knight and keep space with e5." }
        ]
      },
      group: 'e4',
      style: 'Attacking',
      minutes: 15,
      familyId: 'wf-scotch',
      relatedOpenings: ['w-scotch', 'b-e5-scotch', 'b-e5-two-knights', 'w-italian-giuoco'],
      pitfalls: [
        { kind: 'Mistake', side: 'black', title: 'Defending f7 with ...Nh6',
          text: "After 4...Bc5 5.Ng5 Nh6, White can sacrifice twice on f7 and win the piece back with 8.Qh5+, forking king and the c5 bishop. Material is level again and Black's king has lost its shelter.",
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'd2d4', 'e5d4', 'f1c4', 'f8c5', 'f3g5', 'g8h6', 'g5f7', 'h6f7', 'c4f7', 'e8f7', 'd1h5'] },
        { kind: 'Risk', side: 'white', title: 'Transpositions with no edge',
          text: "Many lines run into the Two Knights or the Giuoco Piano, where White has no special advantage. Know those structures, not just the gambit moves." },
        { kind: 'Risk', side: 'white', title: 'Max Lange memory test',
          text: "The Max Lange Attack (4...Bc5 5.O-O Nf6 6.e5) is forcing and deeply analysed. Both sides must know it; one slip in move order costs material." }
      ],
      lines: [
        { id: 'nf6-e5', name: '4...Nf6 5.e5 d5', kind: 'Main line',
          summary: "Black's most common answer: the knight is kicked, Black hits back with ...d5, and White regains d4 with a space-gaining e5 pawn.",
          moves: [
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e4e5', san: 'e5', note: "Kicks the knight before it can take e4." },
            { uci: 'd7d5', san: 'd5', note: "Black's best: counter-attack the bishop." },
            { uci: 'c4b5', san: 'Bb5' },
            { uci: 'f6e4', san: 'Ne4' },
            { uci: 'f3d4', san: 'Nxd4', note: "The pawn is regained." },
            { uci: 'c8d7', san: 'Bd7' },
            { uci: 'b5c6', san: 'Bxc6' },
            { uci: 'b7c6', san: 'bxc6' },
            { uci: 'e1g1', san: 'O-O' }
          ] },
        { id: 'bc5-c3', name: '4...Bc5 5.c3 (into the Giuoco Piano)', kind: 'Alternative',
          summary: "With 5.c3 White offers a second pawn; after 5...Nf6 6.cxd4 play transposes to a Giuoco Piano main line where Black frees the game with ...d5.",
          moves: [
            { uci: 'f8c5', san: 'Bc5' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'g8f6', san: 'Nf6', note: "Counter-attacking e4 rather than taking on c3." },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'c5b4', san: 'Bb4+' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'b4d2', san: 'Bxd2+' },
            { uci: 'b1d2', san: 'Nbxd2' },
            { uci: 'd7d5', san: 'd5', note: "The freeing break: Black challenges White's centre at once." }
          ] },
        { id: 'max-lange', name: '4...Bc5 5.O-O Nf6 6.e5 (Max Lange Attack)', kind: 'Sharp try',
          summary: "The Max Lange: White pushes e5, takes on f6 and checks on e1. Both sides must know the forcing moves; the f6 pawn and the e-file are White's trumps.",
          moves: [
            { uci: 'f8c5', san: 'Bc5' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e4e5', san: 'e5', note: "The Max Lange Attack begins." },
            { uci: 'd7d5', san: 'd5', note: "Black counter-attacks instead of retreating." },
            { uci: 'e5f6', san: 'exf6' },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'f1e1', san: 'Re1+' },
            { uci: 'c8e6', san: 'Be6' },
            { uci: 'f3g5', san: 'Ng5', note: "Hits the pinned e6 bishop." },
            { uci: 'd8d5', san: 'Qd5' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd5f5', san: 'Qf5' },
            { uci: 'c3e4', san: 'Nce4', note: "A classical position: White is a pawn down, but the f6 pawn, the e-file and the active knights give strong play." }
          ] }
      ],
      lessons: ['white-gambits-4', 'white-gambits-1'],
      uncertain: "After 7.Nxd4 Black can also play 7...Bc5; the move order 7...Bd7 is common but not the only main line."
    },

    {
      id: 'wg-goring',
      side: 'white',
      name: 'Goring Gambit',
      eco: 'C44',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'd2d4', 'e5d4', 'c2c3'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.c3',
      character: 'Playable',
      characterNote: "Taking needs care from Black, but the calm 4...d5 equalises comfortably, so it is a respectable practical weapon rather than a route to an edge.",
      difficulty: 'Beginner',
      summary: "A Danish-style offer from the Scotch: White gives the c-pawn for quick development with Nxc3 and Bc4.",
      idea: "If Black takes on c3, White recaptures with the knight and develops with Bc4, O-O and Qb3 or Re1, aiming at f7 and the centre. Black's sound answers return the pawn quickly or decline with ...d5, after which White has free piece play but no real advantage.",
      offer: "The c-pawn on c3 (and possibly b2 if Black takes again).",
      compensation: "A lead in development, open c- and d-files, and active bishops aimed at f7.",
      plans: {
        white: [
          "Recapture with Nxc3, then Bc4, O-O and Qb3 or Re1.",
          "Look for tactics on f7 and on the e-file while Black's king is in the centre.",
          "Against ...d5, play actively for piece activity; do not overpress."
        ],
        black: [
          "Decline with 4...d5 or 4...Nf6 for easy equality.",
          "If accepting, develop fast and return a pawn with ...d5 at the right moment.",
          "Avoid early queen and bishop adventures that leave pieces loose."
        ]
      },
      risks: [
        "4...d5 leads to a level, open position where White's pawn offer has bought little.",
        "A pawn down with no attack is simply a pawn down.",
        "Black's pieces gain active squares too once the centre opens."
      ],
      accepted: "4...dxc3 5.Nxc3 gives White an Italian-style lead in development; 5.Bc4 cxb2 6.Bxb2 is a Danish-style double offer.",
      declined: "4...d5 5.exd5 Qxd5 6.cxd4 Bg4 is the classical antidote; 4...Nf6 5.e5 transposes to sharp but balanced lines.",
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'e5d4', san: 'exd4' },
          { uci: 'c2c3', san: 'c3', note: "The offer: if ...dxc3, Nxc3 develops with gain of time." },
          { uci: 'd7d5', san: 'd5', note: "The classical decline: Black opens the centre before White is ready." },
          { uci: 'e4d5', san: 'exd5' },
          { uci: 'd8d5', san: 'Qxd5' },
          { uci: 'c3d4', san: 'cxd4' },
          { uci: 'c8g4', san: 'Bg4', note: "Pressure on d4 through the pin on the f3 knight." },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'f8b4', san: 'Bb4+' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'g4f3', san: 'Bxf3' },
          { uci: 'e2f3', san: 'Bxf3' },
          { uci: 'd5c4', san: 'Qc4', note: "Stops White castling; play is level and White must play actively." }
        ]
      },
      group: 'e4',
      style: 'Attacking',
      aliases: ['Goering Gambit'],
      minutes: 12,
      familyId: 'wf-scotch',
      relatedOpenings: ['w-scotch', 'b-e5-scotch'],
      pitfalls: [
        { kind: 'Trap', side: 'black', title: "Legal's mate after ...Bg4 and ...Ne5",
          text: "If Black pins with ...Bg4 and then plays ...Ne5, Nxe5! breaks the pin. Taking the queen with ...Bxd1 allows Bxf7+ and Nd5 mate.",
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'd2d4', 'e5d4', 'c2c3', 'd4c3', 'b1c3', 'd7d6', 'f1c4', 'c8g4', 'e1g1', 'c6e5', 'f3e5', 'g4d1', 'c4f7', 'e8e7', 'c3d5'] },
        { kind: 'Risk', side: 'white', title: 'The 4...d5 antidote',
          text: "4...d5 opens the centre before White is ready. The position is level and open; White must play actively but should not expect an attack." }
      ],
      lines: [
        { id: 'nxc3', name: '4...dxc3 5.Nxc3', kind: 'Accepted',
          summary: "One pawn for development: the knight recaptures and White follows with Bc4 and castling. Black often gives the bishop for the c3 knight to blunt White's play.",
          moves: [
            { uci: 'd4c3', san: 'dxc3' },
            { uci: 'b1c3', san: 'Nxc3', note: "A pawn down, but the knight is in play and Bc4 and castling follow." },
            { uci: 'f8b4', san: 'Bb4', note: "Pins the c3 knight and prepares to exchange it." },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b4c3', san: 'Bxc3' },
            { uci: 'b2c3', san: 'bxc3', note: "For the pawn White has the bishop pair, a broad centre and the open b-file." }
          ] },
        { id: 'd5-decline', name: '4...d5 (declined)', kind: 'Declined',
          summary: "The classical antidote: Black opens the centre, pins the f3 knight and stops White castling with ...Qc4. Level, with chances for both sides.",
          moves: [
            { uci: 'd7d5', san: 'd5', note: "Black opens the centre before White is ready." },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'd8d5', san: 'Qxd5' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'c8g4', san: 'Bg4' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'f8b4', san: 'Bb4+' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g4f3', san: 'Bxf3' },
            { uci: 'e2f3', san: 'Bxf3' },
            { uci: 'd5c4', san: 'Qc4', note: "Stops White castling; White must find active play for the d-pawn." }
          ] }
      ],
      lessons: ['white-gambits-1', 'white-gambits-8'],
      uncertain: "The decline line is standard; the accepted lines are less well mapped and assessments vary."
    },

    {
      id: 'wg-vienna-gambit',
      side: 'white',
      name: 'Vienna Gambit',
      eco: 'C29',
      defining: ['e2e4', 'e7e5', 'b1c3', 'g8f6', 'f2f4'],
      moves: '1.e4 e5 2.Nc3 Nf6 3.f4',
      character: 'Playable',
      characterNote: "A King's Gambit with Nc3 already played. Against the main reply 3...d5 White does not actually stay a pawn down, and Black equalises with care.",
      difficulty: 'Intermediate',
      summary: "A King's Gambit idea after 2.Nc3: f4 hits e5 and aims to drive the f6 knight away with e5.",
      idea: "After 3...exf4 White pushes 4.e5 and wins space, chasing the knight. The main reply 3...d5 strikes back, and after 4.fxe5 Nxe4 White plays Nf3, d4 and Bd3, using the e5 wedge and the half-open f-file for kingside pressure.",
      offer: "The f-pawn, though in the main line White takes back on e5 at once.",
      compensation: "Space with the e5 pawn, a half-open f-file and an easy kingside attack set-up with Bd3 and O-O.",
      plans: {
        white: [
          "After 3...d5, play fxe5, Nf3, d4 and Bd3 to pressure the e4 knight and the kingside.",
          "After 3...exf4, push e5 and win the pawn back with Nf3, d4 and Bxf4 or Qe2.",
          "Castle kingside and use the f-file."
        ],
        black: [
          "Answer with 3...d5, the principled central counter.",
          "Keep the e4 knight strong or trade it for the c3 knight at a good moment.",
          "Challenge the e5 wedge with ...f6 or ...f5."
        ]
      },
      risks: [
        "The e1-h4 diagonal is weakened, as in the King's Gambit.",
        "Against 3...d5 White has no material edge, only a pleasant structure.",
        "Black's knight on e4 can become a strong piece if White hesitates."
      ],
      accepted: "3...exf4 4.e5 Ng8 (or 4...Qe7) is risky for Black; White gets space and usually regains f4.",
      declined: "3...d5 4.fxe5 Nxe4 is the main line; 3...d6 is solid but passive.",
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'f2f4', san: 'f4', note: "The offer: if ...exf4, e5 chases the knight." },
          { uci: 'd7d5', san: 'd5', note: "Black's most principled reply: counter in the centre." },
          { uci: 'f4e5', san: 'fxe5' },
          { uci: 'f6e4', san: 'Nxe4' },
          { uci: 'g1f3', san: 'Nf3', note: "Develops and protects the e5 wedge." },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'f1d3', san: 'Bd3', note: "Pressure on the e4 knight and on h7." },
          { uci: 'f7f5', san: 'f5', note: "Supports the knight; White replies by capturing en passant." },
          { uci: 'e5f6', san: 'exf6' },
          { uci: 'e7f6', san: 'Bxf6' },
          { uci: 'e1g1', san: 'O-O', note: "Material is level; White has the f-file and an easy plan." }
        ]
      },
      group: 'e4',
      style: 'Attacking',
      minutes: 12,
      familyId: 'wf-vienna',
      relatedOpenings: ['w-vienna-g3'],
      pitfalls: [
        { kind: 'Risk', side: 'white', title: 'The loosened e1-h4 diagonal',
          text: "As in the King's Gambit, f4 weakens the diagonal to White's king. In lines where the f-pawn is taken, ...Qh4+ checks must always be counted before playing slow moves." },
        { kind: 'Mistake', side: 'black', title: 'Retreating into passivity after 3...exf4',
          text: "After 3...exf4 4.e5 the f6 knight is chased, often back to g8. Black falls behind in development and White usually wins the pawn back with Nf3, d4 and Bxf4." },
        { kind: 'Risk', side: 'white', title: 'A strong knight on e4',
          text: "In the 3...d5 main line, Black's knight on e4 is well placed. If White hesitates over d3, d4 or Bd3, Black completes development and stands comfortably." }
      ],
      lines: [
        { id: 'd5', name: '3...d5 4.fxe5 Nxe4', kind: 'Declined',
          summary: "The principled reply: Black counters in the centre instead of taking f4. White gets the e5 wedge and a half-open f-file; material stays level.",
          moves: [
            { uci: 'd7d5', san: 'd5', note: "Hit the centre rather than grab the f-pawn." },
            { uci: 'f4e5', san: 'fxe5' },
            { uci: 'f6e4', san: 'Nxe4' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1d3', san: 'Bd3', note: "Pressure on the e4 knight and on h7." },
            { uci: 'f7f5', san: 'f5' },
            { uci: 'e5f6', san: 'exf6' },
            { uci: 'e7f6', san: 'Bxf6' },
            { uci: 'e1g1', san: 'O-O', note: "Level material; White has the f-file and an easy plan." }
          ] },
        { id: 'exf4', name: '3...exf4 4.e5', kind: 'Accepted',
          summary: "Taking the pawn lets White gain space with e5. White often trades queens and still wins back the f4 pawn, with the freer position.",
          moves: [
            { uci: 'e5f4', san: 'exf4' },
            { uci: 'e4e5', san: 'e5', note: "The knight is chased; g8 is its safest square." },
            { uci: 'f6g8', san: 'Ng8' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd7d6', san: 'd6', note: "Black challenges the e5 pawn at once." },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd6e5', san: 'dxe5' },
            { uci: 'd4e5', san: 'dxe5' },
            { uci: 'd8d1', san: 'Qxd1+' },
            { uci: 'c3d1', san: 'Nxd1' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'c1f4', san: 'Bxf4', note: "The pawn is back and White keeps space with e5." }
          ] }
      ],
      lessons: ['white-gambits-5'],
      uncertain: "Move orders after 4...Nxe4 5.Nf3 vary (5...Bg4, 5...Nc6 and 5...Be7 are all played); the sample line is illustrative rather than a single main line."
    },

    {
      id: 'wg-halloween',
      side: 'white',
      name: 'Halloween Gambit',
      eco: 'C47',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'b1c3', 'g8f6', 'f3e5'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Nxe5',
      character: 'Speculative',
      characterNote: "A whole knight for one pawn. Objectively unsound against accurate defence, but the pawn roller can overwhelm an unprepared opponent in fast games.",
      difficulty: 'Intermediate',
      summary: "A shock knight sacrifice in the Four Knights: White gives a piece for a pawn and chases Black's knights with central pawns.",
      idea: "After 4...Nxe5 White plays d4, and the e5 knight must move again. Then pawns roll with d5, f4 and e5, kicking knights back to the edge or the back rank. White hopes for space, a lead in development and an attack before Black untangles. If Black returns material wisely, White is simply worse.",
      offer: "The f3 knight for the e5 pawn: a full piece for a pawn.",
      compensation: "Time and space: central pawns gain tempi on Black's knights, and Black's development is pushed backwards.",
      plans: {
        white: [
          "Play d4, then d5, f4 and e5 to drive the knights back.",
          "Develop the bishops quickly (Bc4 or Bd3) and castle; speed is everything.",
          "Aim for a fast kingside attack before Black consolidates."
        ],
        black: [
          "Return some material at once to stop the pawn roller (for example ...Bb4 hitting c3, or a timely ...d6).",
          "Do not retreat passively to the back rank if a counter-attack exists.",
          "Once safe, the extra piece should decide."
        ]
      },
      risks: [
        "A piece down, White is lost if the initiative fades.",
        "Over-extended pawns become targets once Black's pieces come out.",
        "Prepared opponents know the counter-attacking replies and will not be surprised.",
        "Not a choice for serious long games: label it as a surprise weapon only."
      ],
      accepted: "4...Nxe5 5.d4 and Black chooses between ...Ng6 and ...Nc6; counter-attacking with ...Bb4 is considered best.",
      declined: "Black can ignore the knight with 4...Nxe4 or 4...Bb4, but simply taking is strongest.",
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'f3e5', san: 'Nxe5', note: "The shock: a knight for a pawn, to gain tempi with central pawns." },
          { uci: 'c6e5', san: 'Nxe5' },
          { uci: 'd2d4', san: 'd4', note: "The first tempo: the e5 knight must move." },
          { uci: 'e5c6', san: 'Nc6' },
          { uci: 'd4d5', san: 'd5', note: "Another tempo on the same knight." },
          { uci: 'c6e5', san: 'Ne5' },
          { uci: 'f2f4', san: 'f4' },
          { uci: 'e5g6', san: 'Ng6' },
          { uci: 'e4e5', san: 'e5', note: "Now the f6 knight is chased too." },
          { uci: 'f6g8', san: 'Ng8' },
          { uci: 'd5d6', san: 'd6', note: "A pawn wedge cramps Black, but Black is still a piece up." }
        ]
      },
      group: 'e4',
      style: 'Sharp',
      aliases: ['Mueller-Schulze Gambit'],
      minutes: 10,
      familyId: 'wf-four-knights',
      relatedOpenings: ['w-four-knights-scotch'],
      pitfalls: [
        { kind: 'Risk', side: 'white', title: 'A piece down for good',
          text: "If Black returns some material at the right moment, White is simply a piece for a pawn down. Do not choose this for serious long games." },
        { kind: 'Mistake', side: 'black', title: 'Only retreating',
          text: "Answering every pawn push with a knight retreat lets the pawns roll to d6 and e5 and cramps Black badly. Counter-attack instead, for example with ...Bb4 against c3 and e4." },
        { kind: 'Risk', side: 'white', title: 'Over-extended pawns',
          text: "Pawns on d5, e5 and f4 gain time, but once Black's pieces come out they become targets. White must attack before Black consolidates." }
      ],
      lines: [
        { id: 'ng6', name: '4...Nxe5 5.d4 Ng6', kind: 'Accepted',
          summary: "The knight retreats to g6 and the f6 knight is chased home by e5. White develops at speed with a pawn wedge; Black must untangle and use the extra piece.",
          moves: [
            { uci: 'c6e5', san: 'Nxe5' },
            { uci: 'd2d4', san: 'd4', note: "The first tempo on the e5 knight." },
            { uci: 'e5g6', san: 'Ng6' },
            { uci: 'e4e5', san: 'e5', note: "Now the f6 knight has only g8 as a safe square." },
            { uci: 'f6g8', san: 'Ng8' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'c7c6', san: 'c6', note: "Black prepares ...d5 to blunt the bishop." },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'd7d5', san: 'd5', note: "Black is a piece up and closes the bishop's diagonal; White's compensation is space and development." }
          ] },
        { id: 'bb4', name: '4...Nxe5 5.d4 Nc6 6.d5 Bb4', kind: 'Accepted',
          summary: "Black's counter-attack: pin the c3 knight and take on e4. Returning material this way is generally thought to leave Black clearly better.",
          moves: [
            { uci: 'c6e5', san: 'Nxe5' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e5c6', san: 'Nc6' },
            { uci: 'd4d5', san: 'd5', note: "Chasing the knight again." },
            { uci: 'f8b4', san: 'Bb4', note: "Instead of retreating, Black pins c3 and eyes e4." },
            { uci: 'd5c6', san: 'dxc6' },
            { uci: 'f6e4', san: 'Nxe4', note: "The pinned c3 knight cannot recapture." },
            { uci: 'd1d4', san: 'Qd4' },
            { uci: 'd8e7', san: 'Qe7', note: "Defends e4 and b4; Black is active and still ahead in material." }
          ] }
      ],
      lessons: ['white-gambits-13'],
      uncertain: "The lines are illustrative of the ideas; theory of this rare gambit is thin, and move orders in the 5...Ng6 line vary. The 6...Bb4 counter-attack is widely recommended for Black."
    },

    {
      id: 'wg-urusov',
      side: 'white',
      name: 'Urusov Gambit',
      eco: 'C24',
      defining: ['e2e4', 'e7e5', 'f1c4', 'g8f6', 'd2d4', 'e5d4', 'g1f3'],
      moves: '1.e4 e5 2.Bc4 Nf6 3.d4 exd4 4.Nf3',
      character: 'Playable',
      characterNote: "Black can transpose to safe Two Knights lines with 4...Nc6, and the main line holds, but White's piece play is real; a respectable club weapon.",
      difficulty: 'Intermediate',
      summary: "From the Bishop's Opening, White gives the e-pawn for rapid development, long castling and play on the e-file.",
      idea: "After 4...Nxe4 5.Qxd4 the knight must retreat and White develops with Bg5, Nc3 and O-O-O. The rook arrives on e1 or d1 while Black's king is still in the centre, and the queen often swings to h4. White gives one pawn to win several tempi.",
      offer: "The e4 pawn, taken by the f6 knight after 4...Nxe4.",
      compensation: "A big lead in development, quick queenside castling, and pressure on the e- and d-files against Black's centre.",
      plans: {
        white: [
          "Recapture with Qxd4, then Bg5, Nc3 and O-O-O.",
          "Bring a rook to e1 against a king or bishop on the e-file.",
          "Use the queen on h4 and the g5 bishop against f6."
        ],
        black: [
          "Develop calmly with ...Be7, ...O-O and ...Nc6, returning the pawn if needed.",
          "Or avoid the gambit with 4...Nc6, entering a Two Knights Defence.",
          "Trade pieces to reduce White's initiative."
        ]
      },
      risks: [
        "4...Nc6 sidesteps the gambit and leads to well-known theory.",
        "If Black castles safely, White's lead in development can evaporate.",
        "Castling long means both kings can come under fire."
      ],
      accepted: "4...Nxe4 5.Qxd4 Nf6 6.Bg5 Be7 7.Nc3 is the main line.",
      declined: "4...Nc6 transposes to the Two Knights; 4...Bc5 and 4...d5 are also played.",
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'f1c4', san: 'Bc4' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'e5d4', san: 'exd4' },
          { uci: 'g1f3', san: 'Nf3', note: "The offer: White leaves e4 hanging to develop fast." },
          { uci: 'f6e4', san: 'Nxe4' },
          { uci: 'd1d4', san: 'Qxd4', note: "The queen centralises and hits the e4 knight." },
          { uci: 'e4f6', san: 'Nf6' },
          { uci: 'c1g5', san: 'Bg5', note: "Pins the knight and prepares long castling." },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'e1c1', san: 'O-O-O', note: "Opposite-side castling: the rook already watches the d-file." },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'd4h4', san: 'Qh4', note: "The queen joins the g5 bishop against f6 and eyes h7." }
        ]
      },
      group: 'e4',
      style: 'Attacking',
      minutes: 10,
      relatedOpenings: ['b-e5-two-knights'],
      pitfalls: [
        { kind: 'Mistake', side: 'white', title: 'Recapturing with the knight',
          text: "After 4...Nxe4, 5.Nxd4 also wins back the pawn but does not hit the e4 knight. 5.Qxd4! takes the pawn and attacks the knight, gaining the tempo the gambit is about." },
        { kind: 'Risk', side: 'white', title: 'The 4...Nc6 sidestep',
          text: "4...Nc6 turns the game into a Two Knights Defence with 4.d4. Be ready for 5.O-O Nxe4 6.Re1 d5 or another familiar line." },
        { kind: 'Risk', side: 'black', title: 'King in the centre',
          text: "If Black spends moves on the queen and knight, White's long castling and a rook on e1 or d1 can hit a king still on e8. Castle early." }
      ],
      lines: [
        { id: 'accepted', name: '4...Nxe4 5.Qxd4', kind: 'Accepted',
          summary: "The queen wins back a pawn with tempo, then White pins, castles long and lines up on f6 and h7. White is a pawn down but well ahead in development.",
          moves: [
            { uci: 'f6e4', san: 'Nxe4' },
            { uci: 'd1d4', san: 'Qxd4', note: "Wins the pawn back and attacks the knight." },
            { uci: 'e4f6', san: 'Nf6' },
            { uci: 'c1g5', san: 'Bg5', note: "Pins the knight and clears the way for long castling." },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'e1c1', san: 'O-O-O' },
            { uci: 'b8c6', san: 'Nc6', note: "Develops with an attack on the queen." },
            { uci: 'd4h4', san: 'Qh4', note: "The queen joins the g5 bishop against f6 and h7." }
          ] },
        { id: 'two-knights', name: '4...Nc6 (into the Two Knights)', kind: 'Declined',
          summary: "Black transposes to the Two Knights Defence. After 5.O-O Nxe4 6.Re1 d5 Black returns material at once and play is level and well mapped.",
          moves: [
            { uci: 'b8c6', san: 'Nc6', note: "Now it is a Two Knights Defence with 4.d4." },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'f6e4', san: 'Nxe4' },
            { uci: 'f1e1', san: 'Re1', note: "Pins the knight on the e-file." },
            { uci: 'd7d5', san: 'd5', note: "Defends the pinned knight and attacks the c4 bishop." },
            { uci: 'c4d5', san: 'Bxd5' },
            { uci: 'd8d5', san: 'Qxd5' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'd5a5', san: 'Qa5' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'c8e6', san: 'Be6', note: "Material is level; both sides know this classical position well." }
          ] }
      ],
      lessons: ['white-gambits-10'],
      uncertain: "Black's 7th and 8th moves vary (7...c6, 7...Nc6 and 7...O-O are all seen); this order is illustrative."
    },

    {
      id: 'wg-milner-barry',
      side: 'white',
      name: 'Milner-Barry Gambit',
      eco: 'C02',
      defining: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'e4e5', 'c7c5', 'c2c3', 'b8c6', 'g1f3', 'd8b6', 'f1d3'],
      moves: '1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.Bd3',
      character: 'Playable',
      characterNote: "Tested at master level for decades; Black's best lines hold, but Black must know them, and many club players avoid taking.",
      difficulty: 'Intermediate',
      summary: "In the French Advance, White lets Black win the d4 pawn and uses the time for a lead in development and an attack.",
      idea: "After 6...cxd4 7.cxd4 Bd7 8.O-O Nxd4 9.Nxd4 Qxd4 10.Nc3, White has given the d-pawn and often the e5 pawn too, but Black's queen is exposed and Black is behind in development. White uses Nb5, Re1, Qg4 and the open lines against a king stuck in the centre.",
      offer: "The d4 pawn, and in many lines the e5 pawn as well.",
      compensation: "A large lead in development, open central files, and attacking chances against Black's uncastled king and loose queen.",
      plans: {
        white: [
          "Castle, play Nc3 and use Nb5 to harass Black's queen and c7.",
          "Open the e-file with Re1 and bring the queen to g4 or h5.",
          "Keep pieces on: the attack, not the material, is the point."
        ],
        black: [
          "Play ...Bd7 before taking on d4, to avoid the Bb5+ trick.",
          "If accepting, bring the queen back to safety and develop the kingside quickly.",
          "Decline sensibly with 6...Bd7 or by avoiding ...Qb6 altogether."
        ]
      },
      risks: [
        "Two pawns down, White needs a real attack or the endgame is lost.",
        "Black can decline with ...Bd7 and ...cxd4 at a moment that suits Black.",
        "The theory after 10.Nc3 Qxe5 is long and precise."
      ],
      accepted: "6...cxd4 7.cxd4 Bd7 8.O-O Nxd4 9.Nxd4 Qxd4 10.Nc3 is the main gambit line.",
      declined: "Black can keep the tension with 6...Bd7, or, after 6...cxd4 7.cxd4 Bd7 8.O-O, develop with 8...Nge7 instead of grabbing on d4 with 8...Nxd4.",
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'e4e5', san: 'e5' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'c2c3', san: 'c3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'd8b6', san: 'Qb6', note: "Black piles up on d4, the base of White's pawn chain." },
          { uci: 'f1d3', san: 'Bd3', note: "The offer: White develops instead of defending d4 with Be2 or a3." },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'c3d4', san: 'cxd4' },
          { uci: 'c8d7', san: 'Bd7', note: "Essential before ...Nxd4: it stops the Bb5+ trick." },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'c6d4', san: 'Nxd4' },
          { uci: 'f3d4', san: 'Nxd4' },
          { uci: 'b6d4', san: 'Qxd4', note: "Now 10.Nc3 develops and threatens Nb5, hitting the queen and c7." }
        ]
      },
      group: 'e4',
      style: 'Attacking',
      minutes: 15,
      familyId: 'wf-french',
      relatedOpenings: ['w-advance-french', 'b-french-advance'],
      pitfalls: [
        { kind: 'Trap', side: 'black', title: 'Taking on d4 before ...Bd7',
          text: "7...Nxd4? 8.Nxd4 Qxd4?? 9.Bb5+ uncovers the d1 queen against Black's queen on d4. Play ...Bd7 first so that b5 is covered.",
          uci: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'e4e5', 'c7c5', 'c2c3', 'b8c6', 'g1f3', 'd8b6', 'f1d3', 'c5d4', 'c3d4', 'c6d4', 'f3d4', 'b6d4', 'd3b5'] },
        { kind: 'Risk', side: 'white', title: 'Two pawns down in an endgame',
          text: "After 10...Qxe5 White is often two pawns down. If the queens come off or Black's king reaches safety, the material decides; keep pieces on and play for the attack." },
        { kind: 'Risk', side: 'black', title: 'A wandering queen',
          text: "The black queen collects pawns on d4 and e5 but is then chased by Nb5, Re1 and Bd2. Know where it is going before you take." }
      ],
      lines: [
        { id: 'accepted', name: '6...cxd4 7.cxd4 Bd7 8.O-O Nxd4', kind: 'Accepted',
          summary: "Black takes both central pawns after the precaution ...Bd7. White is two pawns down but ahead in development, with Re1 and Nb5 aimed at the queen and c7.",
          moves: [
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'c8d7', san: 'Bd7', note: "Essential before ...Nxd4: it covers b5." },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c6d4', san: 'Nxd4' },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'b6d4', san: 'Qxd4' },
            { uci: 'b1c3', san: 'Nc3', note: "Threatens Nb5, hitting the queen and c7." },
            { uci: 'd4e5', san: 'Qxe5' },
            { uci: 'f1e1', san: 'Re1', note: "The e-file opens against Black's king and queen; theory continues with 11...Qb8 or 11...Qd6." }
          ] },
        { id: 'nge7', name: '6...cxd4 7.cxd4 Bd7 8.O-O Nge7', kind: 'Declined',
          summary: "Black declines the d4 pawn, develops and keeps pressure on White's centre. The game becomes a normal French Advance where White has developed quickly.",
          moves: [
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'c8d7', san: 'Bd7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'g8e7', san: 'Nge7', note: "Development instead of material; the knight may go to g6 to hit e5." },
            { uci: 'b1c3', san: 'Nc3', note: "White completes development and keeps d4 under guard of the f3 knight and queen." }
          ] },
        { id: 'trap', name: '7...Nxd4? 8.Nxd4 Qxd4?? 9.Bb5+', kind: 'Sideline',
          summary: "The trick that every French player must know: without ...Bd7, the d3 bishop moves with check and the queen on d1 wins Black's queen.",
          moves: [
            { uci: 'c5d4', san: 'cxd4' },
            { uci: 'c3d4', san: 'cxd4' },
            { uci: 'c6d4', san: 'Nxd4', note: "Too early: b5 is not covered." },
            { uci: 'f3d4', san: 'Nxd4' },
            { uci: 'b6d4', san: 'Qxd4' },
            { uci: 'd3b5', san: 'Bb5+', note: "A discovered attack: after any reply, Qxd4 wins the queen." }
          ] }
      ],
      lessons: ['white-gambits-3'],
      uncertain: "After 10.Nc3 Qxe5 11.Re1 the main lines (11...Qb8, 11...Qd6) are long and precise; evaluations differ between sources."
    },

    /* ----------------------------------------------------------- 1.e4 c5 */
    {
      id: 'wg-smith-morra',
      side: 'white',
      name: 'Smith-Morra Gambit',
      eco: 'B21',
      defining: ['e2e4', 'c7c5', 'd2d4', 'c5d4', 'c2c3'],
      moves: '1.e4 c5 2.d4 cxd4 3.c3',
      character: 'Playable',
      characterNote: "A popular club weapon with clear plans. Strong players believe Black is fine with accurate defence, so it is rarely seen at elite level.",
      difficulty: 'Beginner',
      summary: "White gives a pawn against the Sicilian for fast development and open c- and d-files.",
      idea: "After 3...dxc3 4.Nxc3 White's pieces flow out to f3, c4 and e2, the rooks land on c1 and d1, and the e5 break is always in the air. Black's Sicilian structure gives few targets, but Black must develop carefully: the d6 pawn and the f7 square are frequent targets.",
      offer: "The d-pawn and c-pawn (one pawn net after Nxc3).",
      compensation: "A lead in development, the half-open c- and d-files for the rooks, and active knights on c3 and f3.",
      plans: {
        white: [
          "Develop with Nf3, Bc4, O-O and Qe2, then Rd1 and Rc1.",
          "Prepare the e5 break to open the d-file against d6.",
          "Use Nb5 or Nd5 jumps when Black's queen sits on c7 or the d6 pawn is weak."
        ],
        black: [
          "Develop the kingside first (...e6, ...Nf6, ...Be7) and castle.",
          "Blunt the e5 break, often with ...e5 itself, and seek counterplay with ...a6 and ...b5.",
          "Decline with 3...Nf6 or 3...d5 if you prefer an Alapin-style game."
        ]
      },
      risks: [
        "If Black castles safely and completes development, the extra pawn begins to tell.",
        "Endgames are usually bad for White: avoid trading queens without a reason.",
        "Black can decline into Alapin positions where White's preparation is less useful."
      ],
      accepted: "3...dxc3 4.Nxc3 Nc6 5.Nf3 d6 6.Bc4 e6 7.O-O Nf6 8.Qe2 Be7 9.Rd1 is the classical main line.",
      declined: "3...Nf6 4.e5 Nd5 or 3...d5 4.exd5 Qxd5 transpose to the Alapin (2.c3) Sicilian; 3...d3 is also sensible.",
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'c5d4', san: 'cxd4' },
          { uci: 'c2c3', san: 'c3', note: "The offer: White will recapture with the knight." },
          { uci: 'd4c3', san: 'dxc3' },
          { uci: 'b1c3', san: 'Nxc3', note: "A pawn down, but White's knight is already in play." },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'd7d6', san: 'd6' },
          { uci: 'f1c4', san: 'Bc4', note: "The bishop eyes f7 and supports a later e5 or Nd5." },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'e1g1', san: 'O-O' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'd1e2', san: 'Qe2', note: "Clears d1 for the rook and supports e5." },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'f1d1', san: 'Rd1', note: "The rook faces the d6 pawn and the queen behind it." },
          { uci: 'e6e5', san: 'e5', note: "Black stops e4-e5 for good, at the cost of a backward d6 pawn and a hole on d5." }
        ]
      },
      group: 'e4',
      style: 'Attacking',
      aliases: ['Morra Gambit'],
      minutes: 15,
      familyId: 'wf-sicilian',
      relatedOpenings: ['w-alapin-sicilian', 'b-sicilian-vs-alapin'],
      pitfalls: [
        { kind: 'Trap', side: 'white', title: 'The Siberian Trap',
          text: "With Black's queen on c7 and knight on g4, the natural 9.h3?? loses: 9...Nd4! hits the e2 queen, and 10.Nxd4 allows ...Qh2 mate. Against this set-up, watch h2.",
          uci: ['e2e4', 'c7c5', 'd2d4', 'c5d4', 'c2c3', 'd4c3', 'b1c3', 'b8c6', 'g1f3', 'e7e6', 'f1c4', 'd8c7', 'e1g1', 'g8f6', 'd1e2', 'f6g4', 'h2h3', 'c6d4', 'f3d4', 'c7h2'] },
        { kind: 'Trap', side: 'black', title: 'Opening the d-file carelessly',
          text: "After 6.e5, 6...dxe5?? allows 7.Bxf7+ Kxf7 8.Qxd8, winning the queen. Meet e5 with ...Nfd7 or ...Ng4.",
          uci: ['e2e4', 'c7c5', 'd2d4', 'c5d4', 'c2c3', 'd4c3', 'b1c3', 'd7d6', 'f1c4', 'g8f6', 'e4e5', 'd6e5', 'c4f7', 'e8f7', 'd1d8'] },
        { kind: 'Risk', side: 'white', title: 'Endgames favour Black',
          text: "If the queens come off, Black's extra pawn and sound structure usually tell. Keep pieces on and use the open files." }
      ],
      lines: [
        { id: 'classical', name: '3...dxc3 4.Nxc3 Nc6 5.Nf3 d6', kind: 'Accepted',
          summary: "The classical set-up: White develops with Bc4, O-O, Qe2 and Rd1, aiming at d6; Black often answers with ...e5, accepting a hole on d5.",
          moves: [
            { uci: 'd4c3', san: 'dxc3' },
            { uci: 'b1c3', san: 'Nxc3', note: "A pawn down, but the knight is already developed." },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd1e2', san: 'Qe2', note: "Clears d1 for the rook and supports e5." },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'f1d1', san: 'Rd1' },
            { uci: 'e6e5', san: 'e5', note: "Black stops e4-e5, at the cost of a backward d6 pawn and a hole on d5." }
          ] },
        { id: 'siberian', name: '3...dxc3 4.Nxc3 Nc6 5.Nf3 e6 6.Bc4 Qc7', kind: 'Accepted',
          summary: "A set-up with ...e6 and ...Qc7 that eyes h2 along the diagonal. After ...Ng4, White must check ...Nd4 tricks before playing h3.",
          moves: [
            { uci: 'd4c3', san: 'dxc3' },
            { uci: 'b1c3', san: 'Nxc3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'd8c7', san: 'Qc7', note: "The queen eyes c4 and the b8-h2 diagonal." },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd1e2', san: 'Qe2' },
            { uci: 'f6g4', san: 'Ng4', note: "Queen and knight both hit h2. 9.h3?? Nd4! is the Siberian Trap." }
          ] },
        { id: 'nf6', name: '3...Nf6 4.e5 Nd5', kind: 'Declined',
          summary: "Black declines and reaches an Alapin Sicilian (2.c3 Nf6) structure. Material is level and White has a space-gaining pawn on e5.",
          moves: [
            { uci: 'g8f6', san: 'Nf6', note: "Counter-attacks e4 instead of taking c3." },
            { uci: 'e4e5', san: 'e5' },
            { uci: 'f6d5', san: 'Nd5' },
            { uci: 'c3d4', san: 'cxd4', note: "Now it is an Alapin Sicilian position." },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'f1c4', san: 'Bc4', note: "Hits the d5 knight; a normal, balanced game." }
          ] }
      ],
      lessons: ['white-gambits-2'],
      uncertain: "Several Black set-ups (with ...a6 or ...e6 and ...Qc7) are main lines too; this is one well-known example."
    },

    {
      id: 'wg-wing-sicilian',
      side: 'white',
      name: 'Wing Gambit (against the Sicilian)',
      eco: 'B20',
      defining: ['e2e4', 'c7c5', 'b2b4'],
      moves: '1.e4 c5 2.b4',
      character: 'Speculative',
      characterNote: "Deflecting the c-pawn is a real idea, but Black gets good play with ...d5, and the b-pawn is often lost for little; a surprise weapon only.",
      difficulty: 'Intermediate',
      summary: "White gives the b-pawn to deflect Black's c-pawn and build a centre with d4.",
      idea: "The b-pawn lures the c5 pawn away from guarding d4, so White hopes for a broad centre with d4 and quick play on the a- and b-files. In practice Black strikes back with ...d5, and White must play energetically to show compensation.",
      offer: "The b-pawn on b4, taken by Black's c-pawn.",
      compensation: "Central control with d4, open a- and b-files for the rooks, and a dark-squared bishop on b2 or a3.",
      plans: {
        white: [
          "Play a3 to open the a-file, or simply build with d4 and Nf3.",
          "Use the a3-f8 diagonal and the half-open files on the queenside.",
          "Develop quickly; the gambit is about time and centre."
        ],
        black: [
          "Answer with ...d5, attacking e4 before White's centre is ready.",
          "Return the b-pawn if it buys smooth development.",
          "Watch for ...Qe5+ tricks along the long diagonal when White's b-pawn is gone."
        ]
      },
      risks: [
        "After ...d5, White's centre can collapse instead of forming.",
        "The long diagonal a1-h8 can be exposed once the b-pawn has left.",
        "Without a quick d4, White is a wing pawn down with no plan."
      ],
      accepted: "2...cxb4 3.a3 d5! 4.exd5 Qxd5 is Black's most respected reply.",
      declined: "2...b6 or 2...d5 are reasonable; taking is normally best.",
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'c7c5', san: 'c5' },
          { uci: 'b2b4', san: 'b4', note: "The offer: the c-pawn is lured away from d4." },
          { uci: 'c5b4', san: 'cxb4' },
          { uci: 'a2a3', san: 'a3', note: "Offers to open the a-file as well." },
          { uci: 'd7d5', san: 'd5', note: "The principled answer: hit e4 at once." },
          { uci: 'e4d5', san: 'exd5' },
          { uci: 'd8d5', san: 'Qxd5' },
          { uci: 'g1f3', san: 'Nf3', note: "Not 5.axb4?, when 5...Qe5+ forks the king and the a1 rook." },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'a3b4', san: 'axb4' },
          { uci: 'f8b4', san: 'Bxb4' },
          { uci: 'c2c3', san: 'c3' },
          { uci: 'b4e7', san: 'Be7' },
          { uci: 'd2d4', san: 'd4', note: "White finally gets central play, but Black is comfortable." }
        ]
      },
      group: 'e4',
      style: 'Sharp',
      aliases: ['Sicilian Wing Gambit'],
      minutes: 8,
      familyId: 'wf-sicilian',
      pitfalls: [
        { kind: 'Trap', side: 'white', title: '5.axb4?? and the queen fork',
          text: "After 3.a3 d5 4.exd5 Qxd5, recapturing on b4 at once allows 5...Qe5+, checking the king and hitting a1 down the empty diagonal. Play 5.Nf3 first.",
          uci: ['e2e4', 'c7c5', 'b2b4', 'c5b4', 'a2a3', 'd7d5', 'e4d5', 'd8d5', 'a3b4', 'd5e5', 'f1e2', 'e5a1'] },
        { kind: 'Risk', side: 'white', title: 'A collapsing centre',
          text: "The gambit is meant to give White d4 and a big centre, but after ...d5 the e4 pawn disappears instead. Without quick development, White is just a wing pawn down." }
      ],
      lines: [
        { id: 'main', name: '2...cxb4 3.a3 d5', kind: 'Accepted',
          summary: "Black takes and strikes at e4. White develops with Nf3 first, recaptures on b4 when it is safe and gets some central play, while Black is comfortable.",
          moves: [
            { uci: 'c5b4', san: 'cxb4' },
            { uci: 'a2a3', san: 'a3', note: "Offers to open the a-file as well." },
            { uci: 'd7d5', san: 'd5', note: "The principled answer: hit e4 at once." },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'd8d5', san: 'Qxd5' },
            { uci: 'g1f3', san: 'Nf3', note: "Covers e5 and d4 before taking on b4." },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'a3b4', san: 'axb4' },
            { uci: 'f8b4', san: 'Bxb4' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'b4e7', san: 'Be7' },
            { uci: 'd2d4', san: 'd4', note: "White finally gets central play." }
          ] },
        { id: 'axb4-trap', name: '5.axb4?? Qe5+', kind: 'Sideline',
          summary: "The mistake to avoid: with the a- and b-pawns gone, the queen check on e5 also attacks the a1 rook.",
          moves: [
            { uci: 'c5b4', san: 'cxb4' },
            { uci: 'a2a3', san: 'a3' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'e4d5', san: 'exd5' },
            { uci: 'd8d5', san: 'Qxd5' },
            { uci: 'a3b4', san: 'axb4', note: "Natural, but it opens the long diagonal to a1." },
            { uci: 'd5e5', san: 'Qe5+', note: "Check and an attack on the rook." },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'e5a1', san: 'Qxa1', note: "Black wins a whole rook." }
          ] }
      ],
      lessons: ['white-gambits-11'],
      uncertain: "This illustrates the main ideas; after 3.a3 d5 the move orders and assessments vary, and many sources consider Black at least equal."
    },

    /* ------------------------------------------------------------ 1.d4 */
    {
      id: 'wg-blackmar-diemer',
      side: 'white',
      name: 'Blackmar-Diemer Gambit',
      eco: 'D00',
      defining: ['d2d4', 'd7d5', 'e2e4', 'd5e4', 'b1c3', 'g8f6', 'f2f3'],
      moves: '1.d4 d5 2.e4 dxe4 3.Nc3 Nf6 4.f3',
      character: 'Speculative',
      characterNote: "Its soundness is genuinely debated: devoted players score well with it at club level, but most strong players think Black is fine or better with calm development.",
      difficulty: 'Intermediate',
      summary: "White gives the e-pawn to open the f-file and gain a lead in development against 1...d5.",
      idea: "After 4...exf3 5.Nxf3 White has a half-open f-file, quick development with Bd3, O-O and Qe1-h4, and attacking chances on the kingside. Black has an extra pawn and a sound structure, and aims to develop calmly and trade pieces.",
      offer: "The e-pawn, then the f-pawn after 4...exf3 (one pawn net).",
      compensation: "The half-open f-file, fast kingside development and attacking chances, especially if Black castles kingside early.",
      plans: {
        white: [
          "Recapture with Nxf3, develop with Bd3 or Bc4 and castle kingside.",
          "Swing the queen via e1 to h4, and use the f-file against f6 and f7.",
          "Look for Ne5 and Bg5 to pile up on the kingside."
        ],
        black: [
          "Develop calmly with ...e6 or ...Bg4 and do not hurry to castle into the attack.",
          "Exchange White's attacking pieces, especially the f3 knight with ...Bg4xf3.",
          "Or decline with 4...e5 or 4...Bf5."
        ]
      },
      risks: [
        "If the attack is parried, White is a pawn down with a weak d4 pawn.",
        "Simplification by ...Bg4xf3 often reduces White's attacking force.",
        "Many lines give Black a comfortable game; this is a weapon for those who know it well."
      ],
      accepted: "4...exf3 5.Nxf3 and Black chooses between ...Bg4 (Teichmann), ...e6 (Euwe), ...g6 (Bogoljubow) and ...Bf5 (Gunderam).",
      declined: "Black can decline the second pawn with 4...Bf5 (the Vienna Defence) or 4...e3 (the Langeheinicke), keeping the f-file closed; both are reasonable.",
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'e2e4', san: 'e4' },
          { uci: 'd5e4', san: 'dxe4' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'f2f3', san: 'f3', note: "The real offer: White opens the f-file to speed up development." },
          { uci: 'e4f3', san: 'exf3' },
          { uci: 'g1f3', san: 'Nxf3' },
          { uci: 'c8g4', san: 'Bg4', note: "The Teichmann: Black plans to trade off the f3 knight." },
          { uci: 'h2h3', san: 'h3' },
          { uci: 'g4f3', san: 'Bxf3' },
          { uci: 'd1f3', san: 'Qxf3', note: "White has the bishop pair, pressure on b7 and a half-open f-file." },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'c1e3', san: 'Be3' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'f1d3', san: 'Bd3', note: "White will castle (often long) and attack; Black is solid but a little passive." },
          { uci: 'b8d7', san: 'Nbd7' }
        ]
      },
      group: 'd4',
      style: 'Attacking',
      aliases: ['BDG'],
      minutes: 15,
      pitfalls: [
        { kind: 'Risk', side: 'white', title: 'A pawn down with a weak d4',
          text: "If Black parries the attack and trades pieces, White is a pawn down and the d4 pawn is isolated from support. The gambit must be played actively." },
        { kind: 'Mistake', side: 'black', title: 'Castling straight into the attack',
          text: "Against set-ups with Bd3 or Bc4, O-O and Qe1-h4, castling early lets White bring queen, bishop and the f-file rook against h7 and f6. Develop and trade first." },
        { kind: 'Trap', side: 'black', title: 'Rxf6 against a lone defender',
          text: "When the f6 knight is the only guard of h7, a rook sacrifice on f6 followed by Qxh7 mate is a typical Blackmar-Diemer finish (see the lesson)." }
      ],
      lines: [
        { id: 'teichmann', name: '4...exf3 5.Nxf3 Bg4 (Teichmann)', kind: 'Accepted',
          summary: "Black trades off the f3 knight and builds a solid wall with ...c6 and ...e6. White keeps the bishop pair and the f-file.",
          moves: [
            { uci: 'e4f3', san: 'exf3' },
            { uci: 'g1f3', san: 'Nxf3' },
            { uci: 'c8g4', san: 'Bg4', note: "Black plans to remove one of White's best attackers." },
            { uci: 'h2h3', san: 'h3' },
            { uci: 'g4f3', san: 'Bxf3' },
            { uci: 'd1f3', san: 'Qxf3', note: "The queen eyes b7 and the f-file; White has the two bishops." },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'c1e3', san: 'Be3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'f1d3', san: 'Bd3', note: "Aimed at h7; White often castles long and attacks." }
          ] },
        { id: 'euwe', name: '4...exf3 5.Nxf3 e6 (Euwe)', kind: 'Accepted',
          summary: "A French-style wall: Black develops quietly behind e6 and keeps the extra pawn. White pins with Bg5, castles and aims at the kingside.",
          moves: [
            { uci: 'e4f3', san: 'exf3' },
            { uci: 'g1f3', san: 'Nxf3' },
            { uci: 'e7e6', san: 'e6', note: "Solid, though the c8 bishop is shut in." },
            { uci: 'c1g5', san: 'Bg5', note: "Pins the f6 knight and adds pressure down the f-file." },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'f1d3', san: 'Bd3' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'e1g1', san: 'O-O', note: "The rook is already on the half-open f-file." }
          ] },
        { id: 'bogoljubow', name: '4...exf3 5.Nxf3 g6 (Bogoljubow)', kind: 'Accepted',
          summary: "Black fianchettoes and castles. White answers with the classic plan Qe1-h4 and Bh6 to remove the g7 bishop.",
          moves: [
            { uci: 'e4f3', san: 'exf3' },
            { uci: 'g1f3', san: 'Nxf3' },
            { uci: 'g7g6', san: 'g6' },
            { uci: 'f1c4', san: 'Bc4', note: "The bishop eyes f7 alongside the f-file." },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'd1e1', san: 'Qe1', note: "Heading for h4, with Bh6 to follow." }
          ] }
      ],
      lessons: ['white-gambits-12'],
      uncertain: "The objective assessment of the Blackmar-Diemer is disputed; treat any claim of a forced advantage for either side with caution. The Euwe and Bogoljubow lines show typical set-ups; exact move orders vary."
    },

    {
      id: 'wg-staunton',
      side: 'white',
      name: 'Staunton Gambit (against the Dutch)',
      eco: 'A82',
      defining: ['d2d4', 'f7f5', 'e2e4'],
      moves: '1.d4 f5 2.e4',
      character: 'Playable',
      characterNote: "A respected try against the Dutch, used by strong players; Black is fine with accurate play, and White often regains the pawn rather than staying a pawn down.",
      difficulty: 'Intermediate',
      summary: "A direct strike against the Dutch: White offers the e-pawn to exploit the loosened e8-h5 diagonal.",
      idea: "After 2...fxe4 3.Nc3 Nf6 4.Bg5, White develops fast, often wins the e4 pawn back, and uses the e8-h5 diagonal that ...f5 weakened. Qh5+ tricks and pressure on e4 are typical; if Black keeps the pawn, White gets open lines with f3.",
      offer: "The e-pawn on e4, taken by Black's f-pawn.",
      compensation: "Quick development, pressure on the e4 pawn, and the exposed e8-h5 diagonal near Black's king.",
      plans: {
        white: [
          "Play Nc3 and Bg5, then win e4 back with Nxe4 or open lines with f3.",
          "Look for Qh5+ when the diagonal to e8 is open.",
          "Castle and use the open f- and e-files."
        ],
        black: [
          "Develop with ...Nf6, ...e6 or ...g6 and do not cling to e4 at all costs.",
          "Close the h5-e8 diagonal with ...g6 or ...e6 before White's queen gets there.",
          "Aim for a sound position once the material is level."
        ]
      },
      risks: [
        "Once White regains the pawn, the position is often merely level.",
        "With f3 lines, White's own king can feel draughty.",
        "Exchanging the g5 bishop for a knight gives Black the bishop pair."
      ],
      accepted: "2...fxe4 3.Nc3 Nf6 4.Bg5 is the main line, with 4...Nc6, 4...e6, 4...c6 and 4...g6 all played.",
      declined: "2...d6 3.exf5 Bxf5 leads to an open position where Black has given up the Dutch structure.",
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'f7f5', san: 'f5' },
          { uci: 'e2e4', san: 'e4', note: "The offer: White targets the diagonal that ...f5 has loosened." },
          { uci: 'f5e4', san: 'fxe4' },
          { uci: 'b1c3', san: 'Nc3', note: "Attacks e4 at once." },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c1g5', san: 'Bg5', note: "Pressures the defender of e4." },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'c3e4', san: 'Nxe4', note: "The pawn is back; White has the freer game." },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'g5f6', san: 'Bxf6' },
          { uci: 'e7f6', san: 'Bxf6' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'e8g8', san: 'O-O' },
          { uci: 'f1d3', san: 'Bd3', note: "Bishop and knight aim at the kingside; play is roughly level but lively." }
        ]
      },
      group: 'd4',
      style: 'Sharp',
      minutes: 12,
      familyId: 'wf-dutch',
      relatedOpenings: ['w-dutch-fianchetto', 'b-dutch-leningrad'],
      pitfalls: [
        { kind: 'Trap', side: 'black', title: 'Clinging to e4 with ...d5',
          text: "4...d5?! 5.Bxf6 exf6 6.Qh5+ uses the open e8-h5 diagonal; after the check, Qxd5 wins back the pawn with the better game.",
          uci: ['d2d4', 'f7f5', 'e2e4', 'f5e4', 'b1c3', 'g8f6', 'c1g5', 'd7d5', 'g5f6', 'e7f6', 'd1h5'] },
        { kind: 'Risk', side: 'white', title: 'Level once the pawn is back',
          text: "White usually regains e4, after which the position is merely balanced. Exchanging the g5 bishop for a knight also hands Black the bishop pair." },
        { kind: 'Risk', side: 'white', title: 'The f3 lines',
          text: "Opening the f-file with f3 to keep the initiative also exposes White's own king; only do it with development complete." }
      ],
      lines: [
        { id: 'e6', name: '2...fxe4 3.Nc3 Nf6 4.Bg5 e6', kind: 'Accepted',
          summary: "Black closes the e8-h5 diagonal with ...e6 and White regains the pawn on e4. A lively, roughly level middlegame follows.",
          moves: [
            { uci: 'f5e4', san: 'fxe4' },
            { uci: 'b1c3', san: 'Nc3', note: "Attacks e4 at once." },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c1g5', san: 'Bg5', note: "Pressure on the defender of e4." },
            { uci: 'e7e6', san: 'e6', note: "Closes the diagonal to e8." },
            { uci: 'c3e4', san: 'Nxe4', note: "The pawn is back." },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'e7f6', san: 'Bxf6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1d3', san: 'Bd3' }
          ] },
        { id: 'nc6', name: '2...fxe4 3.Nc3 Nf6 4.Bg5 Nc6', kind: 'Accepted',
          summary: "Black develops and hits d4; after 5.d5 the knight is chased, and White regains e4 with Bxf6 and Nxe4.",
          moves: [
            { uci: 'f5e4', san: 'fxe4' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'b8c6', san: 'Nc6', note: "Counter-attacks d4." },
            { uci: 'd4d5', san: 'd5', note: "Gains space with tempo." },
            { uci: 'c6e5', san: 'Ne5' },
            { uci: 'd1d4', san: 'Qd4' },
            { uci: 'e5f7', san: 'Nf7' },
            { uci: 'g5f6', san: 'Bxf6' },
            { uci: 'e7f6', san: 'exf6' },
            { uci: 'c3e4', san: 'Nxe4', note: "Material is level; Black's structure is a little loose." }
          ] },
        { id: 'd6', name: '2...d6 (declined)', kind: 'Declined',
          summary: "Black declines and lets White take on f5. The Dutch structure is gone and the game is an open position with easy development for both sides.",
          moves: [
            { uci: 'd7d6', san: 'd6', note: "Declines, preparing ...Bxf5 if White captures." },
            { uci: 'e4f5', san: 'exf5' },
            { uci: 'c8f5', san: 'Bxf5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'f1d3', san: 'Bd3', note: "Challenging the active f5 bishop." }
          ] }
      ],
      lessons: ['white-gambits-7'],
      uncertain: "After 4...e6 5.Nxe4 Be7 6.Bxf6 Bxf6 7.Nf3, Black has several reasonable set-ups; this order is illustrative."
    },

    {
      id: 'wg-marshall-semi-slav',
      side: 'white',
      name: 'Marshall Gambit (against the Semi-Slav)',
      eco: 'D31',
      defining: ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'b1c3', 'e7e6', 'e2e4'],
      moves: '1.d4 d5 2.c4 c6 3.Nc3 e6 4.e4',
      character: 'Established',
      characterNote: "Played regularly at grandmaster level for over a century; the main lines are deeply analysed and considered sound for both sides.",
      difficulty: 'Advanced',
      summary: "White gives the d-pawn for dark-square pressure once Black's dark-squared bishop has been exchanged.",
      idea: "After 4...dxe4 5.Nxe4 Bb4+ 6.Bd2 Qxd4 7.Bxb4 Qxe4+ 8.Be2, Black has won a pawn but given up the dark-squared bishop. White's bishop rules the dark squares (d6, c5, g7), Black struggles to castle, and the queen often lands on d6.",
      offer: "The d4 pawn, taken by Black's queen after 6...Qxd4 (one pawn net).",
      compensation: "Control of the dark squares, difficulty for Black to castle kingside, and quick development with Nf3, O-O and Qd6.",
      plans: {
        white: [
          "Use the dark-squared bishop on b4, c3 or d6 to stop Black castling and hit g7.",
          "Develop with Nf3, Qd2 or Qd6 and castle long or short.",
          "Combine Qd6 with rook pressure on the d-file."
        ],
        black: [
          "Bring the queen back to safety and develop with ...Na6 or ...Nd7 and ...Ne7.",
          "Return the pawn if it allows smooth castling.",
          "Avoid a quick 4...dxe4 if you prefer a quieter game: 4...Bb4 is also played."
        ]
      },
      risks: [
        "If Black consolidates, the extra pawn and solid structure count.",
        "The theory is long; inaccurate play gives Black a safe extra pawn.",
        "Pushing for the attack can leave White's own king exposed after long castling."
      ],
      accepted: "4...dxe4 5.Nxe4 Bb4+ 6.Bd2 Qxd4 7.Bxb4 Qxe4+ 8.Be2 is the main gambit line.",
      declined: "4...Bb4 or 4...dxe4 5.Nxe4 Nd7 avoid the pawn grab; Black can also avoid the gambit altogether with move orders such as 3...Nf6 instead of 3...e6.",
      line: {
        fen: 'start',
        moves: [
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'c2c4', san: 'c4' },
          { uci: 'c7c6', san: 'c6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'e2e4', san: 'e4', note: "The offer: White opens the centre at once." },
          { uci: 'd5e4', san: 'dxe4' },
          { uci: 'c3e4', san: 'Nxe4' },
          { uci: 'f8b4', san: 'Bb4+' },
          { uci: 'c1d2', san: 'Bd2', note: "White offers the d4 pawn as well." },
          { uci: 'd8d4', san: 'Qxd4' },
          { uci: 'd2b4', san: 'Bxb4', note: "Black has lost the dark-squared bishop: the key to the gambit." },
          { uci: 'd4e4', san: 'Qxe4+' },
          { uci: 'f1e2', san: 'Be2', note: "White is a pawn down but rules the dark squares; g7 and d6 are sore spots." },
          { uci: 'b8a6', san: 'Na6', note: "Black hits the b4 bishop with gain of time; the king's knight will follow to e7." }
        ]
      },
      group: 'd4',
      style: 'Sharp',
      aliases: ['Semi-Slav Marshall Gambit'],
      minutes: 20,
      familyId: 'wf-queens-gambit',
      relatedOpenings: ['w-queens-gambit', 'b-semi-slav'],
      pitfalls: [
        { kind: 'Risk', side: 'white', title: 'A safe extra pawn for Black',
          text: "If Black consolidates, brings the queen back and castles, White is simply a pawn down against a solid structure. Every tempo counts." },
        { kind: 'Risk', side: 'black', title: 'The dark squares and the king',
          text: "Without the dark-squared bishop, d6, e7 and f8 are weak. A bishop on d6 or a queen arriving there can keep Black's king in the centre for a long time." },
        { kind: 'Mistake', side: 'black', title: 'Grabbing more pawns with the queen',
          text: "After 8.Be2 the black queen can also take on g2, but every further capture costs time while White's pieces flood the dark squares. Development usually matters more." }
      ],
      lines: [
        { id: 'main', name: '4...dxe4 5.Nxe4 Bb4+ 6.Bd2 Qxd4', kind: 'Accepted',
          summary: "Black takes the d-pawn but gives up the dark-squared bishop. White's bishop then rules the dark squares; 9.Bd6 stops Black castling short.",
          moves: [
            { uci: 'd5e4', san: 'dxe4' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'f8b4', san: 'Bb4+' },
            { uci: 'c1d2', san: 'Bd2', note: "White offers the d4 pawn as well." },
            { uci: 'd8d4', san: 'Qxd4' },
            { uci: 'd2b4', san: 'Bxb4', note: "Black has lost the dark-squared bishop: the key to the gambit." },
            { uci: 'd4e4', san: 'Qxe4+' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'b8a6', san: 'Na6', note: "Hits the bishop with gain of time." },
            { uci: 'b4d6', san: 'Bd6', note: "One of the main moves: the bishop controls f8 and e7." }
          ] },
        { id: 'nd7', name: '4...dxe4 5.Nxe4 Nd7', kind: 'Declined',
          summary: "Black avoids the pawn grab and plays a solid, Rubinstein-French-like structure. Material stays level and White has a little more space.",
          moves: [
            { uci: 'd5e4', san: 'dxe4' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'b8d7', san: 'Nd7', note: "No ...Bb4+ and no pawn grab: Black simply develops." },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Ngf6' },
            { uci: 'e4f6', san: 'Nxf6+' },
            { uci: 'd7f6', san: 'Nxf6', note: "A quiet position; Black's light-squared bishop is the long-term question." }
          ] }
      ],
      lessons: ['white-gambits-14'],
      uncertain: "After 8...Na6 White has several main moves (9.Bd6, 9.Ba5 and 9.Bc3); the theory is deep and assessments shift with new games."
    },

    /* ------------------------------------------------- 1.e4 e5: BELGRADE */
    {
      id: 'wg-belgrade',
      side: 'white',
      group: 'e4',
      style: 'Sharp',
      name: 'Belgrade Gambit',
      eco: 'C47',
      defining: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'b1c3', 'g8f6', 'd2d4', 'e5d4', 'c3d5'],
      moves: '1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nd5',
      character: 'Playable',
      characterNote: "Not unsound, but Black has several calm replies (5...Be7, 5...Nxd5, 5...Nb4) that equalise; a respectable surprise weapon in the Four Knights rather than a route to an edge.",
      difficulty: 'Intermediate',
      minutes: 12,
      familyId: 'wf-four-knights',
      relatedOpenings: ['w-four-knights-scotch'],
      summary: "In the Four Knights Scotch, White leaves d4 alone and jumps to d5, offering the e4 pawn for quick play on the e-file.",
      idea: "Instead of recapturing on d4, White plays 5.Nd5, attacking nothing yet but eyeing f6, c7 and e7. If Black grabs 5...Nxe4, 6.Qe2 pins the knight against the king on the open e-file and Black must defend with ...f5. If Black declines, White usually wins d4 back and enjoys an active knight on d5.",
      offer: "The e4 pawn (5...Nxe4), while the d4 pawn is also left for later.",
      compensation: "Fast development, an e-file pin after Qe2, and a strong knight on d5 that can hop to c7 or f6 at the right moment.",
      plans: {
        white: [
          "Against 5...Nxe4, pin the knight with 6.Qe2 or develop with 6.Bc4 and castle.",
          "Against quiet replies, win back d4 with Nxd4 and use the d5 knight.",
          "Keep the e-file open for the queen and rook while Black's king is on e8."
        ],
        black: [
          "Decline calmly with 5...Be7 and ...d6, or trade the d5 knight with 5...Nxd5.",
          "If taking on e4, meet 6.Qe2 with 6...f5 and expect very sharp play.",
          "Castle early so that the e-file pin disappears."
        ]
      },
      risks: [
        "Calm replies give Black easy equality and White has nothing special.",
        "In the 5...Nxe4 6.Qe2 f5 lines both sides need precise knowledge.",
        "If the d4 pawn is not regained, White is simply material down."
      ],
      accepted: "5...Nxe4 6.Qe2 f5 7.Ng5 is the sharpest line; 6.Bc4 with quick castling is a calmer way to play for development.",
      declined: "5...Be7 6.Bc4 (or 6.Bf4) d6 7.Nxd4 regains the pawn with a normal position; 5...Nxd5 6.exd5 and 5...Nb4 are also respected.",
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'The pinned knight after 6.Qe2',
          text: "After 5...Nxe4 6.Qe2 the e4 knight is pinned to the king. Only 6...f5 keeps it: ...Be7 or ...Ne5 leave it to be taken, and ...Qe7 or ...Qh4 lose the queen to a knight.",
          uci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'b1c3', 'g8f6', 'd2d4', 'e5d4', 'c3d5', 'f6e4', 'd1e2', 'f7f5'] },
        { kind: 'Risk', side: 'white', title: 'No edge against calm play',
          text: "After 5...Be7 or 5...Nxd5, White wins back the pawn but the position is level. Do not overpress expecting an attack that is not there." }
      ],
      lines: [
        { id: 'qe2', name: '5...Nxe4 6.Qe2 f5 7.Ng5', kind: 'Accepted',
          summary: "The critical test: White pins the knight, Black supports it with ...f5, and 7.Ng5 hits e4 again. Very sharp; both sides must know the follow-up.",
          moves: [
            { uci: 'f6e4', san: 'Nxe4' },
            { uci: 'd1e2', san: 'Qe2', note: "Pins the knight against the king on the open e-file." },
            { uci: 'f7f5', san: 'f5', note: "The only way to keep the knight without losing material." },
            { uci: 'f3g5', san: 'Ng5', note: "A second attacker on e4; Black's king is airy after ...f5." }
          ] },
        { id: 'bc4', name: '5...Nxe4 6.Bc4', kind: 'Accepted',
          summary: "White develops and castles first. After Re1 the knight must retreat and White regains material, reaching an open position with active pieces.",
          moves: [
            { uci: 'f6e4', san: 'Nxe4' },
            { uci: 'f1c4', san: 'Bc4', note: "Development before material." },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'e8g8', san: 'O-O' },
            { uci: 'f1e1', san: 'Re1', note: "Hits the e4 knight." },
            { uci: 'e4f6', san: 'Nf6' },
            { uci: 'd5e7', san: 'Nxe7+' },
            { uci: 'c6e7', san: 'Nxe7' },
            { uci: 'f3d4', san: 'Nxd4', note: "Material is level; White has the freer game and the bishop." }
          ] },
        { id: 'be7', name: '5...Be7 (declined)', kind: 'Declined',
          summary: "Black declines the e4 pawn and keeps a solid position. White regains d4 and the game is level.",
          moves: [
            { uci: 'f8e7', san: 'Be7', note: "Calm development: Black prepares to castle and leaves e4 alone." },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'f3d4', san: 'Nxd4', note: "The pawn is back." },
            { uci: 'c6d4', san: 'Nxd4' },
            { uci: 'd1d4', san: 'Qxd4' }
          ] }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e5', san: 'e5' },
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'b8c6', san: 'Nc6' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'd2d4', san: 'd4', note: "The Four Knights Scotch." },
          { uci: 'e5d4', san: 'exd4' },
          { uci: 'c3d5', san: 'Nd5', note: "The Belgrade: White does not recapture and leaves e4 hanging." },
          { uci: 'f6e4', san: 'Nxe4' },
          { uci: 'd1e2', san: 'Qe2', note: "The pin on the e-file." },
          { uci: 'f7f5', san: 'f5', note: "Black's only good way to hold the knight." },
          { uci: 'f3g5', san: 'Ng5', note: "Another attacker on e4; the position is very sharp." }
        ]
      },
      lessons: ['white-gambits-15'],
      uncertain: "Theory after 7.Ng5 (with ideas such as ...d3) is sharp and not settled; the 6.Bc4 line is shown as a sensible, illustrative way to play, not as a single main line."
    },

    /* ------------------------------------------- 1.e4 e6: ALEKHINE-CHATARD */
    {
      id: 'wg-alekhine-chatard',
      side: 'white',
      group: 'e4',
      style: 'Attacking',
      name: 'Alekhine-Chatard Attack',
      eco: 'C14',
      defining: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1c3', 'g8f6', 'c1g5', 'f8e7', 'e4e5', 'f6d7', 'h2h4'],
      moves: '1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.h4',
      aliases: ['Albin-Chatard Attack'],
      character: 'Established',
      characterNote: "A respected line of the Classical French, played by strong players for a century. Black usually declines, and both sides get a fully playable game.",
      difficulty: 'Advanced',
      minutes: 15,
      familyId: 'wf-french',
      summary: "In the Classical French, White offers the g5 bishop's protection and a pawn: if Black takes, the h-file opens towards the kingside.",
      idea: "6.h4 means that 6...Bxg5 is met by 7.hxg5, and if Black then grabs the pawn with 7...Qxg5, White develops with Nh3-f4, Qg4 and often long castling. The open h-file and Black's weak dark squares (g7, f6) are the compensation. Black's king rarely finds a safe home on the kingside.",
      offer: "The g5 pawn (after 6...Bxg5 7.hxg5 Qxg5), one pawn net.",
      compensation: "The half-open h-file for the rook, pressure on g7 and the dark squares, and quick development with Nf4 and Qg4.",
      plans: {
        white: [
          "If accepted, play Nh3-f4, Qg4 and O-O-O, with the rook already on the h-file.",
          "If declined, keep the e5 wedge and use h4-h5 or f4 for kingside space.",
          "Watch the d5 and e6 squares: Nf4 often eyes a sacrifice there."
        ],
        black: [
          "Decline with 6...c5, 6...a6 or 6...f6 if you do not want the open h-file.",
          "If accepting, keep the king flexible (often on e7 or the queenside) and hit d4 with ...c5 and ...Nc6.",
          "Avoid castling kingside while the h-file and g7 are under fire."
        ]
      },
      risks: [
        "If Black consolidates, White is a pawn down with an advanced h-pawn gone.",
        "Long castling can expose White's own king to ...c5 and ...Qb6 play.",
        "Black has several solid declines that avoid all the attacking lines."
      ],
      accepted: "6...Bxg5 7.hxg5 Qxg5 8.Nh3 Qe7 9.Nf4 is the main gambit line; White follows with Qg4 and long castling.",
      declined: "6...c5 7.Bxe7 Kxe7 and 6...a6 7.Qg4 are common ways to decline; 6...f6 hits the e5 wedge at once.",
      pitfalls: [
        { kind: 'Risk', side: 'black', title: 'Castling short into the h-file',
          text: "After the h-file opens, castling kingside invites Qg4, Nh5 or rook sacrifices on h7. In the accepted lines Black's king is usually safer in the centre or on the queenside." },
        { kind: 'Risk', side: 'white', title: 'Running out of attack',
          text: "If Black declines sensibly, h4 has spent a tempo and the g5 bishop may be exchanged. White must switch to the normal French plans of f4 and Nf3." },
        { kind: 'Mistake', side: 'black', title: 'Recapturing with the queen on e7',
          text: "After 6...c5 7.Bxe7, the usual recapture is 7...Kxe7; with the queen on e7, a knight jump to b5 can become annoying because c7 and d6 are loose." }
      ],
      lines: [
        { id: 'accepted', name: '6...Bxg5 7.hxg5 Qxg5', kind: 'Accepted',
          summary: "Black wins a pawn, but the h-file opens. White develops with tempo against the queen and attacks g7 with Qg4.",
          moves: [
            { uci: 'e7g5', san: 'Bxg5' },
            { uci: 'h4g5', san: 'hxg5', note: "The rook on h1 now has an open file." },
            { uci: 'd8g5', san: 'Qxg5' },
            { uci: 'g1h3', san: 'Nh3', note: "Develops with an attack on the queen; the knight heads for f4." },
            { uci: 'g5e7', san: 'Qe7' },
            { uci: 'h3f4', san: 'Nf4' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd1g4', san: 'Qg4', note: "Hits g7; long castling and pressure on e6 and d5 follow." }
          ] },
        { id: 'c5', name: '6...c5 7.Bxe7 Kxe7', kind: 'Declined',
          summary: "Black strikes at d4 and recaptures with the king, which is safe enough behind the closed centre. White builds with f4 and Nf3.",
          moves: [
            { uci: 'c7c5', san: 'c5', note: "The French counter-strike against d4." },
            { uci: 'g5e7', san: 'Bxe7' },
            { uci: 'e8e7', san: 'Kxe7', note: "The usual recapture; the king stands safely behind e6 and d5." },
            { uci: 'f2f4', san: 'f4', note: "Supports e5 and gains kingside space." },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'g1f3', san: 'Nf3' }
          ] },
        { id: 'a6', name: '6...a6 7.Qg4', kind: 'Declined',
          summary: "Black takes b5 from White's knight and plays ...c5 later. White attacks g7 straight away; the bishops are often exchanged on g5.",
          moves: [
            { uci: 'a7a6', san: 'a6', note: "Prevents Nb5 and prepares ...c5." },
            { uci: 'd1g4', san: 'Qg4', note: "Aims at g7." },
            { uci: 'e7g5', san: 'Bxg5' },
            { uci: 'h4g5', san: 'hxg5' },
            { uci: 'c7c5', san: 'c5' },
            { uci: 'g1f3', san: 'Nf3', note: "Material is level; the h-file is half-open for White's rook." }
          ] }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'e2e4', san: 'e4' },
          { uci: 'e7e6', san: 'e6' },
          { uci: 'd2d4', san: 'd4' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'b1c3', san: 'Nc3' },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'c1g5', san: 'Bg5', note: "The Classical French: the pin on f6." },
          { uci: 'f8e7', san: 'Be7' },
          { uci: 'e4e5', san: 'e5', note: "Drives the knight from f6, its best defensive square." },
          { uci: 'f6d7', san: 'Nfd7' },
          { uci: 'h2h4', san: 'h4', note: "The offer: if ...Bxg5, hxg5 opens the h-file." },
          { uci: 'e7g5', san: 'Bxg5' },
          { uci: 'h4g5', san: 'hxg5' },
          { uci: 'd8g5', san: 'Qxg5' },
          { uci: 'g1h3', san: 'Nh3', note: "Gains time on the queen." },
          { uci: 'g5e7', san: 'Qe7' },
          { uci: 'h3f4', san: 'Nf4', note: "Eyes e6, d5 and h5; Qg4 comes next." }
        ]
      },
      lessons: ['white-gambits-16'],
      uncertain: "The declined lines are shown for their ideas; Black's exact choices after 6...c5 and 6...a6 vary, and the warning about 7...Qxe7 is a general caution rather than a forced loss."
    },

    /* ----------------------------------------------- FLANK: TENNISON */
    {
      id: 'wg-tennison',
      side: 'white',
      group: 'flank',
      style: 'Sharp',
      name: 'Tennison Gambit',
      eco: 'A06',
      defining: ['g1f3', 'd7d5', 'e2e4'],
      moves: '1.Nf3 d5 2.e4',
      character: 'Speculative',
      characterNote: "Black can take and return the pawn with ...e5 for a comfortable game, or decline. Objectively dubious; its main value is a well-known trap against careless replies.",
      difficulty: 'Beginner',
      minutes: 8,
      relatedOpenings: ['w-reti', 'w-scandinavian'],
      summary: "After 1.Nf3 d5, White offers the e-pawn and aims the knight and bishop at f7, hoping for a quick trick.",
      idea: "After 2...dxe4 3.Ng5 White attacks e4 and eyes f7. If Black plays 3...Nf6 4.d3 exd3? 5.Bxd3, the bishop and the g5 knight both aim at f7 and g6, and the queen on d1 stares down the open d-file at d8. Careless moves such as 5...h6? allow Nxf7! and Bg6+, winning the queen.",
      offer: "The e4 pawn on move two.",
      compensation: "Mainly practical: quick development, pressure on f7 and the open d-file; against good play there is little more.",
      plans: {
        white: [
          "Play Ng5 and d3 to regain e4 or open lines for the f1 bishop.",
          "After ...exd3 Bxd3, look for Nxf7 and Bg6+ against a careless ...h6.",
          "If Black returns the pawn with ...e5, develop normally and accept equality."
        ],
        black: [
          "Answer 4.d3 with 4...e5!, giving the pawn back on your own terms.",
          "If you take on d3, check the Nxf7 and Bg6+ trick before every move.",
          "Declining with 2...e6 or 2...d4 is also perfectly sound."
        ]
      },
      risks: [
        "Black can return the pawn and get a comfortable, free position.",
        "The knight on g5 can be kicked with ...h6 and end up misplaced.",
        "Prepared opponents know the trap and will not fall for it."
      ],
      accepted: "2...dxe4 3.Ng5 Nf6 4.d3 e5! 5.dxe4 h6 6.Nf3 is Black's most reliable path: material is level and Black develops easily.",
      declined: "2...e6 (heading for French-type positions) or 2...d4 (gaining space) avoid the gambit altogether.",
      pitfalls: [
        { kind: 'Trap', side: 'black', title: '5...h6?? and the queen is lost',
          text: "After 4.d3 exd3 5.Bxd3 h6?, 6.Nxf7! Kxf7 7.Bg6+ uncovers the d1 queen against d8, and Black loses the queen. Black should prefer 4...e5.",
          uci: ['g1f3', 'd7d5', 'e2e4', 'd5e4', 'f3g5', 'g8f6', 'd2d3', 'e4d3', 'f1d3', 'h7h6', 'g5f7', 'e8f7', 'd3g6'] },
        { kind: 'Risk', side: 'white', title: 'Black gives the pawn back well',
          text: "After 4...e5, Black returns the pawn, kicks the g5 knight with ...h6 and develops freely. White has no special advantage." }
      ],
      lines: [
        { id: 'e5', name: '2...dxe4 3.Ng5 Nf6 4.d3 e5', kind: 'Accepted',
          summary: "Black's best practical answer: hand the pawn back with ...e5, kick the knight and develop. Material is level and Black has an easy game.",
          moves: [
            { uci: 'd5e4', san: 'dxe4' },
            { uci: 'f3g5', san: 'Ng5', note: "Attacks e4 and eyes f7." },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'e7e5', san: 'e5', note: "Black returns the pawn and opens lines for the f8 bishop." },
            { uci: 'd3e4', san: 'dxe4' },
            { uci: 'h7h6', san: 'h6', note: "Kicks the knight away from f7." },
            { uci: 'g5f3', san: 'Nf3' }
          ] },
        { id: 'trap', name: '4...exd3? 5.Bxd3 h6?? 6.Nxf7', kind: 'Sideline',
          summary: "The famous trap: with the d-file open, the bishop gives check on g6 and the queen on d1 wins Black's queen.",
          moves: [
            { uci: 'd5e4', san: 'dxe4' },
            { uci: 'f3g5', san: 'Ng5' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd2d3', san: 'd3' },
            { uci: 'e4d3', san: 'exd3', note: "Greedy: White's bishop recaptures with an eye on g6." },
            { uci: 'f1d3', san: 'Bxd3' },
            { uci: 'h7h6', san: 'h6', note: "The losing move." },
            { uci: 'g5f7', san: 'Nxf7', note: "The knight cannot be ignored: it forks queen and rook." },
            { uci: 'e8f7', san: 'Kxf7' },
            { uci: 'd3g6', san: 'Bg6+', note: "Discovered attack: after the king moves, Qxd8 wins the queen." }
          ] },
        { id: 'e6', name: '2...e6 (declined)', kind: 'Declined',
          summary: "Black declines into a French-type structure. White has no gambit play left and must play a normal opening.",
          moves: [
            { uci: 'e7e6', san: 'e6', note: "Supports d5 and avoids all the tricks." },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'e4e5', san: 'e5', note: "A French Advance-style position with the knight already on f3." },
            { uci: 'f6d7', san: 'Nfd7' }
          ] }
      ],
      line: {
        fen: 'start',
        moves: [
          { uci: 'g1f3', san: 'Nf3' },
          { uci: 'd7d5', san: 'd5' },
          { uci: 'e2e4', san: 'e4', note: "The offer: the e-pawn for quick piece play." },
          { uci: 'd5e4', san: 'dxe4' },
          { uci: 'f3g5', san: 'Ng5', note: "Hits e4 and eyes f7." },
          { uci: 'g8f6', san: 'Nf6' },
          { uci: 'd2d3', san: 'd3', note: "Opens the f1 bishop's diagonal." },
          { uci: 'e7e5', san: 'e5', note: "Black's calm answer: give the pawn back and develop." },
          { uci: 'd3e4', san: 'dxe4' },
          { uci: 'h7h6', san: 'h6' },
          { uci: 'g5f3', san: 'Nf3', note: "Material is level and Black is comfortable." }
        ]
      },
      lessons: ['white-gambits-17'],
      uncertain: "The Tennison can also arise from 1.e4 d5 2.Nf3; theory is thin and the lines shown are typical rather than definitive."
    },

    /* --------------------------------------------- 1.d4 d5: ANTI-MOSCOW */
    {
      id: 'wg-anti-moscow',
      side: 'white',
      group: 'd4',
      style: 'Sharp',
      name: 'Anti-Moscow Gambit',
      eco: 'D43',
      defining: ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'b1c3', 'e7e6', 'c1g5', 'h7h6', 'g5h4'],
      moves: '1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 e6 5.Bg5 h6 6.Bh4',
      aliases: ['Anti-Moscow Variation'],
      character: 'Established',
      characterNote: "A main line of the Semi-Slav at grandmaster level. White's pawn sacrifice is considered sound, though Black's resources are also well established.",
      difficulty: 'Advanced',
      minutes: 20,
      familyId: 'wf-queens-gambit',
      relatedOpenings: ['w-slav-main', 'b-semi-slav'],
      summary: "In the Semi-Slav, White keeps the pin with 6.Bh4 and lets Black take on c4, aiming for a big centre and pressure on Black's loosened kingside.",
      idea: "After 6...dxc4 7.e4 g5 8.Bg3 b5, Black has an extra pawn and a queenside majority, but has weakened the kingside with ...h6 and ...g5. White gets a strong centre, a lead in development and targets: the h-file after h4, the e5 point for a knight, and a bishop that can land on d6 to stop Black castling.",
      offer: "The c4 pawn, taken by 6...dxc4 and held with ...b5.",
      compensation: "A big centre (d4, e4, e5), quick development, the weak f5, h5 and d6 squares, and attacking chances against a king with no safe home.",
      plans: {
        white: [
          "Play e4, Be2 and O-O, then Ne5 to exchange Black's defenders.",
          "Use h4 to open the h-file against the ...g5 pawn.",
          "Look for Bd6 to stop Black castling kingside."
        ],
        black: [
          "Hold c4 with ...b5 and develop with ...Bb7, ...Nbd7 and ...Bg7.",
          "Aim for ...c5 or ...e5 to break White's centre.",
          "Keep the king flexible; long castling or a king walk is sometimes best."
        ]
      },
      risks: [
        "The theory is very long and precise; a slip leaves White a pawn down for nothing.",
        "Black's queenside pawns can become dangerous in an endgame.",
        "Opening the position too early can help Black's bishops more than White's pieces."
      ],
      accepted: "6...dxc4 7.e4 g5 8.Bg3 b5 9.Be2 Bb7 10.O-O Nbd7 11.Ne5 is the classical main line; 9.h4 is a sharper alternative.",
      declined: "Black can avoid the gambit earlier: 5...dxc4 enters the Botvinnik System and 5...Nbd7 heads for Cambridge Springs-type play. After 6.Bh4, quieter moves such as 6...Be7 are also possible.",
      pitfalls: [
        { kind: 'Risk', side: 'white', title: 'A pawn down without the attack',
          text: "If the centre becomes blocked and Black castles, White is simply a pawn down against a strong queenside majority. Keep the position dynamic." },
        { kind: 'Risk', side: 'black', title: 'A king with no home',
          text: "After ...h6 and ...g5, kingside castling is risky, and a bishop on d6 can rule out short castling altogether. Plan the king's future early." }
      ],
      lines: [
        { id: 'main', name: '6...dxc4 7.e4 g5 8.Bg3 b5 9.Be2', kind: 'Accepted',
          summary: "The classical main line: White castles, jumps into e5 and trades off a defender; the bishop then heads for d6.",
          moves: [
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'e2e4', san: 'e4', note: "The centre in return for the pawn." },
            { uci: 'g7g5', san: 'g5', note: "Breaks the pin, at the cost of kingside weaknesses." },
            { uci: 'h4g3', san: 'Bg3' },
            { uci: 'b7b5', san: 'b5', note: "Holds the extra c4 pawn." },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'c8b7', san: 'Bb7' },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'b8d7', san: 'Nbd7' },
            { uci: 'f3e5', san: 'Ne5', note: "Exchanges a key defender." },
            { uci: 'f8g7', san: 'Bg7' },
            { uci: 'e5d7', san: 'Nxd7' },
            { uci: 'f6d7', san: 'Nxd7', note: "Now Bd6 keeps Black's king in the centre." }
          ] },
        { id: 'h4', name: '6...dxc4 7.e4 g5 8.Bg3 b5 9.h4', kind: 'Sharp try',
          summary: "White attacks the g5 pawn at once to open the h-file. After ...g4, the knight jumps to e5 and the game becomes very sharp.",
          moves: [
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'g7g5', san: 'g5' },
            { uci: 'h4g3', san: 'Bg3' },
            { uci: 'b7b5', san: 'b5' },
            { uci: 'h2h4', san: 'h4', note: "Hits the g5 pawn before Black is ready." },
            { uci: 'g5g4', san: 'g4' },
            { uci: 'f3e5', san: 'Ne5', note: "A strong central post; f7 and g4 are both targets." }
          ] }
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
          { uci: 'e7e6', san: 'e6', note: "The Semi-Slav." },
          { uci: 'c1g5', san: 'Bg5' },
          { uci: 'h7h6', san: 'h6' },
          { uci: 'g5h4', san: 'Bh4', note: "Keeping the pin instead of 6.Bxf6 (the Moscow Variation)." },
          { uci: 'd5c4', san: 'dxc4', note: "Black accepts the c4 pawn." },
          { uci: 'e2e4', san: 'e4' },
          { uci: 'g7g5', san: 'g5' },
          { uci: 'h4g3', san: 'Bg3' },
          { uci: 'b7b5', san: 'b5', note: "Black holds the pawn; White has the centre and targets on the kingside." },
          { uci: 'f1e2', san: 'Be2' },
          { uci: 'c8b7', san: 'Bb7' }
        ]
      },
      lessons: ['white-gambits-18'],
      uncertain: "The declined suggestions (5...dxc4, 5...Nbd7, 6...Be7) are given as alternatives, not as fully analysed lines; theory in the main lines changes with new top-level games."
    }
  ],

  lessons: [

    /* ----------------------------------------------------------- BEGINNER */
    {
      id: 'white-gambits-1',
      category: 'white-gambits',
      side: 'white',
      title: 'Goring Gambit: the queen that is bait',
      level: 'Beginner',
      minutes: 6,
      objective: "Recognise when a pinned knight is not really pinned, and finish with Legal's mate pattern.",
      summary: "In the Goring, a greedy ...Bxd1 can walk into mate on d5.",
      prerequisites: ['openings-1'],
      related: { gambits: ['wg-goring', 'wg-scotch-gambit'], lessons: ['white-gambits-4'] },
      steps: [
        {
          type: 'read',
          title: 'The offer',
          text: "After 1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.c3, White offers the c-pawn. If Black takes with 4...dxc3, the knight recaptures on c3 and White is ready for Bc4 and castling. Black gets a pawn; White gets time, open lines and a bishop aiming at f7.",
          fen: 'r1bqkbnr/pppp1ppp/2n5/8/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq - 0 4',
          arrows: [['d4', 'c3'], ['f1', 'c4']],
          highlights: ['c3', 'f7']
        },
        {
          type: 'line',
          title: 'Black pins and attacks',
          text: "Black accepts, then pins the f3 knight with ...Bg4. A pin means the knight cannot move without exposing something more valuable behind it, here the queen. Then ...Ne5 attacks the pinned knight and the c4 bishop.",
          fen: 'start',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'c2c3', san: 'c3' },
            { uci: 'd4c3', san: 'dxc3' },
            { uci: 'b1c3', san: 'Nxc3', note: "White is a pawn down but already has both knights in play." },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'f1c4', san: 'Bc4' },
            { uci: 'c8g4', san: 'Bg4', note: "The pin: if the f3 knight moves, the d1 queen hangs." },
            { uci: 'e1g1', san: 'O-O' },
            { uci: 'c6e5', san: 'Ne5', note: "Black piles on f3 and hits c4. It looks strong, but it is a mistake." }
          ]
        },
        {
          type: 'puzzle',
          title: 'Break the pin',
          prompt: "White to move. The knight looks pinned. Win material, or mate if Black takes the queen.",
          fen: 'r2qkbnr/ppp2ppp/3p4/4n3/2B1P1b1/2N2N2/PP3PPP/R1BQ1RK1 w kq - 4 8',
          solution: ['f3e5', 'g4d1', 'c4f7', 'e8e7', 'c3d5'],
          hint: "The pin is only to the queen, not the king. What if you let the queen go?",
          explanation: "8.Nxe5! If 8...dxe5, 9.Qxg4 and White is a piece up. If Black grabs 8...Bxd1, then 9.Bxf7+ Ke7 (the only move) 10.Nd5 is mate: the knights and bishop cover every square. This is Legal's mate. A pin to the queen can be broken when the reward is bigger than the queen.",
          wrong: {
            'c4f7': "Bxf7+ Kxf7 Nxe5+ dxe5 Qxg4 wins only a pawn. Take on e5 first to win a whole piece.",
            'h2h3': "Too slow: Black simply takes on f3 or c4 and the chance is gone.",
            'c4b3': "Saving the bishop is passive; Nxe5 wins material at once."
          }
        }
      ]
    },

    {
      id: 'white-gambits-2',
      category: 'white-gambits',
      side: 'white',
      title: 'Smith-Morra: the f7 deflection',
      level: 'Beginner',
      minutes: 5,
      objective: "Use Bxf7+ to pull the king away from its queen when the d-file is open.",
      summary: "When Black opens the d-file carelessly, a bishop check on f7 wins the queen.",
      related: { gambits: ['wg-smith-morra'], lessons: ['white-gambits-1'] },
      steps: [
        {
          type: 'read',
          title: 'Why open files matter',
          text: "In the Smith-Morra (1.e4 c5 2.d4 cxd4 3.c3), White gives a pawn so that the c- and d-files open quickly. With no pawns on the d-file, White's queen on d1 can stare straight at Black's queen on d8. That only works if the queen on d8 has no protector except the king.",
          fen: 'rnbqkbnr/pp1ppppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq - 0 3',
          arrows: [['d4', 'c3']],
          highlights: ['c3', 'd4']
        },
        {
          type: 'puzzle',
          title: 'The natural capture that loses',
          prompt: "After 4.Nxc3 d6 5.Bc4 Nf6 6.e5, Black played 6...dxe5??. White to move: win the queen.",
          fen: 'rnbqkb1r/pp2pppp/5n2/4p3/2B5/2N5/PP3PPP/R1BQK1NR w KQkq - 0 7',
          solution: ['c4f7', 'e8f7', 'd1d8'],
          hint: "The queens face each other on the open d-file. Who guards d8?",
          explanation: "7.Bxf7+! The king must take: Kd7 would step into the d-file check from your queen and e7 is blocked. After 7...Kxf7 8.Qxd8, White wins the queen for a bishop. The bishop check deflected (pulled away) the only defender of d8. After 6.e5, Black should play 6...Nfd7 or 6...Ng4.",
          wrong: {
            'd1d8': "Qxd8+ Kxd8 only swaps queens, and you stay two pawns down.",
            'g1f3': "Black swaps queens with ...Qxd1+ and keeps the extra pawns."
          }
        }
      ]
    },

    {
      id: 'white-gambits-3',
      category: 'white-gambits',
      side: 'white',
      title: 'Milner-Barry: the Bb5+ trick',
      level: 'Beginner',
      minutes: 6,
      objective: "Win the queen with a discovered attack when Black grabs d4 too early in the French Advance.",
      summary: "Why Black must play ...Bd7 before taking on d4, and how to punish it if not.",
      related: { gambits: ['wg-milner-barry'], lessons: ['white-gambits-2'] },
      steps: [
        {
          type: 'read',
          title: 'Bd3: offering d4',
          text: "In the French Advance, Black often hits d4 with ...c5, ...Nc6 and ...Qb6. With 6.Bd3 White simply develops and lets Black take the pawn. But the bishop on d3 also stands in front of White's queen on the d-file. If it moves with check, the queen is suddenly attacking down the file.",
          fen: 'r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/2PB1N2/PP3PPP/RNBQK2R b KQkq - 4 6',
          arrows: [['d1', 'd4'], ['b6', 'd4']],
          highlights: ['d3', 'd4']
        },
        {
          type: 'puzzle',
          title: 'Too greedy',
          prompt: "After 6...cxd4 7.cxd4 Nxd4? 8.Nxd4 Qxd4?, White to move: win the queen.",
          fen: 'r1b1kbnr/pp3ppp/4p3/3pP3/3q4/3B4/PP3PPP/RNBQK2R w KQkq - 0 9',
          solution: ['d3b5', 'c8d7', 'd1d4'],
          hint: "Move the bishop off the d-file with check.",
          explanation: "9.Bb5+! checks the king and uncovers the queen on d1 against the queen on d4. Black must answer the check, for example 9...Bd7 or 9...Ke7, and then 10.Qxd4 wins the queen. This is a discovered attack. It is why Black plays 7...Bd7 first: then b5 is covered and the trick fails.",
          wrong: {
            'd1a4': "Qa4+ is check, but after ...Bd7 nothing is attacking the d4 queen.",
            'e1g1': "Castling is the usual gambit plan, but here you can win the queen at once.",
            'b1c3': "Nc3 develops, but Bb5+ wins the queen immediately."
          }
        }
      ]
    },

    {
      id: 'white-gambits-4',
      category: 'white-gambits',
      side: 'white',
      title: 'Scotch Gambit: regain with a fork',
      level: 'Beginner',
      minutes: 6,
      objective: "Win back sacrificed material with a queen check that also attacks a loose piece.",
      summary: "After sacrifices on f7, Qh5+ forks the king and the c5 bishop.",
      prerequisites: ['tactics-1'],
      related: { gambits: ['wg-scotch-gambit'], lessons: ['white-gambits-1'] },
      steps: [
        {
          type: 'line',
          title: 'Sacrifices on f7',
          text: "In the Scotch Gambit, White leaves the d4 pawn and develops. Here White plays an early Ng5, Black defends f7 with ...Nh6, and White gives two pieces on f7. Count carefully: White is now a bishop for a pawn down.",
          fen: 'start',
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e5', san: 'e5' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e5d4', san: 'exd4' },
            { uci: 'f1c4', san: 'Bc4', note: "The Scotch Gambit: development instead of Nxd4." },
            { uci: 'f8c5', san: 'Bc5' },
            { uci: 'f3g5', san: 'Ng5', note: "Attacks f7 twice." },
            { uci: 'g8h6', san: 'Nh6', note: "Defends f7, but the knight on the edge is a target." },
            { uci: 'g5f7', san: 'Nxf7' },
            { uci: 'h6f7', san: 'Nxf7' },
            { uci: 'c4f7', san: 'Bxf7+' },
            { uci: 'e8f7', san: 'Kxf7', note: "Black's king is exposed and the c5 bishop is unprotected." }
          ]
        },
        {
          type: 'puzzle',
          title: 'Two targets, one move',
          prompt: "White to move: win back the piece.",
          fen: 'r1bq3r/pppp1kpp/2n5/2b5/3pP3/8/PPP2PPP/RNBQK2R w KQ - 0 8',
          solution: ['d1h5'],
          hint: "Find a check that also attacks the unprotected bishop.",
          explanation: "8.Qh5+ checks the king along the diagonal and attacks the bishop on c5 along the fifth rank. After 8...g6 (or a king move), 9.Qxc5 regains the piece. Material is level again, and Black's king has lost its shelter. A fork is one piece attacking two targets at once; loose (unprotected) pieces are the usual victims.",
          wrong: {
            'd1f3': "Qf3+ is check but attacks nothing else; Black stays a piece up.",
            'e1g1': "Castling leaves you a bishop for a pawn down.",
            'd1d3': "Qd3 eyes c4 and d4 but the bishop on c5 is not attacked; there was a check that forks."
          }
        }
      ]
    },

    /* ------------------------------------------------------- INTERMEDIATE */
    {
      id: 'white-gambits-5',
      category: 'white-gambits',
      side: 'white',
      title: "King's Gambit: the h4 lever",
      level: 'Intermediate',
      minutes: 7,
      objective: "Undermine Black's ...g5 pawn chain in the King's Gambit Accepted and find the best knight square.",
      summary: "When Black holds f4 with ...g5, strike at once with h4 and plant the knight on e5.",
      prerequisites: ['gambits-2'],
      related: { gambits: ['wg-kings-gambit', 'wg-vienna-gambit'], lessons: ['gambits-2'] },
      steps: [
        {
          type: 'read',
          title: 'A chain to break',
          text: "After 1.e4 e5 2.f4 exf4 3.Nf3 g5, Black's g5 pawn guards the extra pawn on f4. A pawn chain like this is strongest when it is supported (...h6, ...Bg7). A lever is a pawn move that attacks a chain before it can be supported. White has one, and the next step asks you to find it.",
          fen: 'rnbqkbnr/pppp1p1p/8/6p1/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4',
          arrows: [['g5', 'f4']],
          highlights: ['g5', 'f4']
        },
        {
          type: 'puzzle',
          title: 'Lever, then outpost',
          prompt: "White to move: which pawn move attacks g5 now? After ...g4, find the best knight move.",
          fen: 'rnbqkbnr/pppp1p1p/8/6p1/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4',
          solution: ['h2h4', 'g5g4', 'f3e5'],
          hint: "Only one pawn can touch g5. Then find a central square for the knight that also eyes g4 and f7.",
          explanation: "4.h4 attacks the chain. After 4...g4 (the most natural reply), 5.Ne5 is the Kieseritzky Gambit: the knight takes a strong central post, eyes g4 and f7, and White later wins back f4 with d4 and Bxf4, though Black usually takes on e4 in return. The flashier 5.Ng5 (the Allgaier) sacrifices the knight after ...h6 and is considered unsound.",
          wrong: {
            'f1c4': "Bc4 is a good developing move, but it does not attack g5. The task was the lever.",
            'd2d4': "d4 is useful, but it lets Black support the chain with ...Bg7 and ...h6.",
            'g2g3': "g3 attacks f4, not g5, and loosens your king."
          }
        },
        {
          type: 'line',
          title: 'Free development',
          text: "One well-known continuation shows the idea: White wins back the f4 pawn and develops freely, although Black has taken the e4 pawn in return.",
          fen: 'rnbqkbnr/pppp1p1p/8/6p1/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4',
          moves: [
            { uci: 'h2h4', san: 'h4' },
            { uci: 'g5g4', san: 'g4' },
            { uci: 'f3e5', san: 'Ne5' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d6', san: 'd6' },
            { uci: 'e5d3', san: 'Nd3', note: "The knight retreats with an eye on f4, ready for Bxf4." },
            { uci: 'f6e4', san: 'Nxe4' },
            { uci: 'c1f4', san: 'Bxf4', note: "White wins back f4, but after ...Nxe4 White is still a pawn down. The compensation is quick development, the open e-file (Qe2 pins the e4 knight) and the loose g4 pawn." }
          ]
        }
      ]
    },

    {
      id: 'white-gambits-6',
      category: 'white-gambits',
      side: 'white',
      title: 'Evans Gambit: Ba3 keeps the king home',
      level: 'Intermediate',
      minutes: 7,
      objective: "Use the a3-f8 diagonal to stop Black from castling in the Evans Gambit.",
      summary: "The b-pawn gambit opens a diagonal; Ba3 uses it to keep Black's king in the centre.",
      prerequisites: ['openings-1'],
      related: { gambits: ['wg-evans'], lessons: ['white-gambits-9'] },
      steps: [
        {
          type: 'read',
          title: 'Why 4.b4?',
          text: "In the Italian Game, 4.b4 offers a pawn to deflect the c5 bishop. After 4...Bxb4 5.c3, White gains a tempo on the bishop and prepares d4. The b-pawn's departure also opens the c1-a3 path, so the dark-squared bishop can reach a3 and look along the long a3-f8 diagonal.",
          fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R b KQkq - 0 4',
          arrows: [['c5', 'b4'], ['c1', 'a3']],
          highlights: ['b4', 'a3']
        },
        {
          type: 'puzzle',
          title: 'Stop the castling',
          prompt: "White to move (Evans main line, move 10). Which bishop move stops Black castling kingside?",
          fen: 'r1bqk2r/ppp2ppp/2n5/b2n4/2BP4/5N2/P4PPP/RNBQ1RK1 w kq - 0 10',
          solution: ['c1a3'],
          hint: "To castle kingside the black king must pass over f8. Which diagonal reaches f8?",
          explanation: "10.Ba3 controls f8 along the open a3-f8 diagonal, so Black cannot castle short: the king may not pass through an attacked square. Black must spend time on ...Be6, ...Qd7 and long castling, or block with ...Nce7. Meanwhile White brings rooks to e1 and b1 against a king still in the centre. This is the main reason the b-pawn was given.",
          wrong: {
            'f1e1': "Re1+ is natural, but after ...Be6 Black is ready to castle next move.",
            'c1g5': "Bg5 hits the queen, but ...Qd7 or ...f6 follows and Black castles.",
            'd1b3': "Qb3 eyes d5 and f7, but Black can castle at once."
          }
        }
      ]
    },

    {
      id: 'white-gambits-7',
      category: 'white-gambits',
      side: 'white',
      title: 'Staunton Gambit: the e8-h5 diagonal',
      level: 'Intermediate',
      minutes: 7,
      objective: "Exploit the diagonal weakened by ...f5 with a Qh5+ check that wins back material.",
      summary: "The Dutch loosens e8-h5; after Bxf6 a queen check regains the gambit pawn.",
      related: { gambits: ['wg-staunton'], lessons: ['white-gambits-4'] },
      steps: [
        {
          type: 'read',
          title: 'What ...f5 gives away',
          text: "The Dutch Defence (1.d4 f5) moves the pawn that normally shields e8 from h5. The Staunton Gambit, 2.e4, aims straight at that weakness. If Black takes on e4, White develops with Nc3 and Bg5 and watches for a queen check on h5.",
          fen: 'rnbqkbnr/ppppp1pp/8/5p2/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2',
          arrows: [['d1', 'h5'], ['h5', 'e8']],
          highlights: ['e8', 'h5', 'f7']
        },
        {
          type: 'puzzle',
          title: 'Check, then collect',
          prompt: "After 3.Nc3 Nf6 4.Bg5 d5?! 5.Bxf6 exf6, White to move: win back the pawn.",
          fen: 'rnbqkb1r/ppp3pp/5p2/3p4/3Pp3/2N5/PPP2PPP/R2QKBNR w KQkq - 0 6',
          solution: ['d1h5', 'g7g6', 'h5d5'],
          hint: "The diagonal from h5 to e8 is open. After the check, look along the fifth rank.",
          explanation: "6.Qh5+ forces a reply: 6...g6 is most natural (6...Ke7 or 6...Kd7 also allow Qxd5). Then 7.Qxd5 takes the pawn, and after 7...Qxd5 8.Nxd5 the knight threatens Nc7+ and Nxf6+. Material is level, the e4 pawn is a target, and ...g6 has loosened Black's king. The exchange on f6 removed the knight that guarded h5.",
          wrong: {
            'c3d5': "Nxd5? Qxd5: the d5 pawn is protected by the queen.",
            'c3e4': "Nxe4? dxe4 simply loses the knight for a pawn.",
            'f2f3': "f3 opens lines but is slow; Qh5+ wins the pawn at once."
          }
        }
      ]
    },

    {
      id: 'white-gambits-8',
      category: 'white-gambits',
      side: 'white',
      title: 'Danish Gambit: when to bail out',
      level: 'Intermediate',
      minutes: 7,
      objective: "Recognise the ...d5 antidote to the Danish and steer into a level endgame instead of losing material.",
      summary: "Not every gambit ends in mate: know the safe exit when Black returns the pawns well.",
      prerequisites: ['white-gambits-2'],
      related: { gambits: ['wg-danish', 'wg-goring'], lessons: ['white-gambits-1'] },
      steps: [
        {
          type: 'read',
          title: 'The antidote',
          text: "After 1.e4 e5 2.d4 exd4 3.c3 dxc3 4.Bc4 cxb2 5.Bxb2, White's bishops point at f7 and g7. Black's best is 5...d5!, giving a pawn back to open lines for Black's own pieces. Attacking regardless is risky; the safest course is to simplify at once.",
          fen: 'rnbqkbnr/ppp2ppp/8/3p4/2B1P3/8/PB3PPP/RN1QK1NR w KQkq - 0 6',
          arrows: [['d5', 'c4'], ['b2', 'g7']],
          highlights: ['d5', 'f7']
        },
        {
          type: 'line',
          title: 'Simplifying',
          text: "White takes on d5 and f7 and swaps queens. Watch out for the check on b4 at the end.",
          fen: 'rnbqkbnr/ppp2ppp/8/3p4/2B1P3/8/PB3PPP/RN1QK1NR w KQkq - 0 6',
          moves: [
            { uci: 'c4d5', san: 'Bxd5' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'd5f7', san: 'Bxf7+', note: "Gives the bishop to draw the king forward and trade queens." },
            { uci: 'e8f7', san: 'Kxf7' },
            { uci: 'd1d8', san: 'Qxd8' },
            { uci: 'f8b4', san: 'Bb4+', note: "A check with a threat: the h8 rook now attacks your queen." }
          ]
        },
        {
          type: 'puzzle',
          title: 'Only one move',
          prompt: "White to move: answer the check so that material stays level.",
          fen: 'rnbQ3r/ppp2kpp/5n2/8/1b2P3/8/PB3PPP/RN2K1NR w KQ - 1 9',
          solution: ['d8d2'],
          hint: "The queen itself can block the check.",
          explanation: "9.Qd2 is the only move. The bishop on b4 checks along b4-e1, and the h8 rook now sees d8 along the empty back rank. Blocking with the queen gives it back for the bishop: 9...Bxd2+ 10.Nxd2 and material is level. The endgame is roughly equal. A good gambiteer knows when the attack is over.",
          wrong: {
            'b1c3': "Nc3 blocks the check, but ...Rxd8 wins your queen.",
            'b1d2': "Nd2 blocks the check, but ...Rxd8 wins your queen.",
            'b2c3': "Bc3 blocks the check, but ...Rxd8 wins your queen.",
            'e1e2': "Ke2 escapes the check, but ...Rxd8 wins your queen."
          }
        }
      ]
    },

    /* ----------------------------------------------------------- ADVANCED */
    {
      id: 'white-gambits-9',
      category: 'white-gambits',
      side: 'white',
      title: 'Evans Gambit: the Evergreen finish',
      level: 'Advanced',
      minutes: 9,
      objective: "Calculate a forcing finish with a queen sacrifice and a double check, as in a famous Evans Gambit game.",
      summary: "Anderssen's Evergreen game: open lines from the gambit end in a double check and mate.",
      prerequisites: ['white-gambits-6'],
      related: { gambits: ['wg-evans'], lessons: ['white-gambits-6'] },
      steps: [
        {
          type: 'read',
          title: 'The Evergreen game',
          text: "Anderssen v Dufresne, Berlin 1852, began as an Evans Gambit (with the old 7...d3). White has given pawns and a knight to open lines. Black threatens ...Qxf3 and mate on g2. Anderssen calmly played 19.Rad1, putting a rook behind the d3 bishop. Later analysis showed Black could have defended better (19...Rg4 is the usual suggestion), but the finish is a model of open lines.",
          fen: '1r2k1r1/pbppnp1p/1bn2P2/7q/Q7/B1PB1N2/P4PPP/R3R1K1 w - - 1 19',
          arrows: [['a1', 'd1'], ['h5', 'f3']],
          highlights: ['d7', 'e7', 'g2']
        },
        {
          type: 'line',
          title: 'Into the storm',
          text: "Black takes the knight with a mate threat on g2, and White starts forcing play with checks.",
          fen: '1r2k1r1/pbppnp1p/1bn2P2/7q/Q7/B1PB1N2/P4PPP/R3R1K1 w - - 1 19',
          moves: [
            { uci: 'a1d1', san: 'Rad1' },
            { uci: 'h5f3', san: 'Qxf3', note: "Black threatens ...Qxg2 mate." },
            { uci: 'e1e7', san: 'Rxe7+' },
            { uci: 'c6e7', san: 'Nxe7', note: "Now White must keep giving checks." }
          ]
        },
        {
          type: 'puzzle',
          title: 'Queen sacrifice and double check',
          prompt: "White to move. Black threatens ...Qxg2 mate. Force the win.",
          fen: '1r2k1r1/pbppnp1p/1b3P2/8/Q7/B1PB1q2/P4PPP/3R2K1 w - - 0 21',
          solution: ['a4d7', 'e8d7', 'd3f5'],
          accept: [['a4d7', 'e8f8', 'd7e7'], ['a4d7', 'e8f8', 'a3e7']],
          hint: "Remove the d7 pawn that blocks your rook, even at the cost of the queen.",
          explanation: "21.Qxd7+! Kxd7 (21...Kf8 22.Qxe7 is mate) 22.Bf5+ is a double check from the bishop and the d1 rook, so the king must move: 22...Ke8 23.Bd7+ Kf8 24.Bxe7 mate, or 22...Kc6 23.Bd7 mate. Double check cannot be blocked or answered by a capture, which is why it is so powerful.",
          wrong: {
            'd3f5': "Without first removing d7, Bf5 is not check and Black mates with ...Qxg2.",
            'a3e7': "Bxe7 wins a knight, but ...Qxg2 is mate."
          }
        }
      ]
    },

    /* ------------------------------------------------ NEW GAMBIT LESSONS */
    {
      id: 'white-gambits-13',
      category: 'white-gambits',
      side: 'white',
      title: 'Halloween Gambit: pawns that chase knights',
      level: 'Intermediate',
      minutes: 6,
      objective: "Use central pawn pushes to drive Black's knights back after the Halloween knight sacrifice, and know Black's best counter.",
      summary: "A piece for a pawn, paid back in tempi: how d4 and e5 push Black's knights home, and why it is only a surprise weapon.",
      prerequisites: ['openings-1'],
      related: { gambits: ['wg-halloween', 'wg-belgrade'] },
      steps: [
        {
          type: 'read',
          title: 'A piece for time',
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4N3/4P3/2N5/PPPP1PPP/R1BQKB1R b KQkq - 0 4',
          text: "After 1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Nxe5, White gives a whole knight for one pawn. The plan is to gain tempi: after 4...Nxe5 5.d4 the knight on e5 must move, and e5, d5 and f4 can follow, pushing Black's knights back. Be honest about it: with accurate play Black keeps a clear advantage. It is a weapon for fast games.",
          arrows: [['c6', 'e5'], ['d2', 'd4']],
          highlights: ['e5']
        },
        {
          type: 'puzzle',
          title: 'Chase the second knight',
          fen: 'r1bqkb1r/pppp1ppp/5nn1/8/3PP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 1 6',
          prompt: "After 4...Nxe5 5.d4 Ng6, White to move: which pawn move attacks the f6 knight?",
          solution: ['e4e5'],
          hint: "Only one pawn can reach a square that touches f6.",
          explanation: "6.e5 attacks the f6 knight, and it has only one safe square: d5 and e4 drop to the c3 knight, g4 and h5 to the queen. So 6...Ng8 (Black can also counter with 6...Qe7, hitting e5). Both black knights have been pushed back and White develops with Bc4 and O-O. The compensation is time and space, not material.",
          wrong: {
            'd4d5': "6.d5 gains space but attacks nothing; Black develops with ...Bc5 or ...Bb4.",
            'f2f4': "6.f4 prepares e5 but gives Black a free move, and ...Nxe4 becomes possible."
          }
        },
        {
          type: 'line',
          title: "Black's best: counter-attack",
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4N3/4P3/2N5/PPPP1PPP/R1BQKB1R b KQkq - 0 4',
          text: "Instead of retreating, Black can return the extra material on Black's own terms. Pinning the c3 knight lets Black take on e4 safely.",
          moves: [
            { uci: 'c6e5', san: 'Nxe5' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'e5c6', san: 'Nc6' },
            { uci: 'd4d5', san: 'd5', note: "Chasing the knight again." },
            { uci: 'f8b4', san: 'Bb4', note: "The counter: pin c3 and target e4." },
            { uci: 'd5c6', san: 'dxc6' },
            { uci: 'f6e4', san: 'Nxe4', note: "The pinned knight cannot recapture." },
            { uci: 'd1d4', san: 'Qd4' },
            { uci: 'd8e7', san: 'Qe7', note: "Defends e4 and b4; Black stands well." }
          ]
        }
      ]
    },

    {
      id: 'white-gambits-14',
      category: 'white-gambits',
      side: 'white',
      title: 'Marshall Gambit: owning the dark squares',
      level: 'Advanced',
      minutes: 8,
      objective: "Explain why the Semi-Slav Marshall Gambit gives White the dark squares, and finish a mating pattern with bishop on d6 and queen.",
      summary: "Black wins a pawn but loses the dark-squared bishop; a white bishop on d6 then cages Black's king.",
      prerequisites: ['middlegames-1'],
      related: { gambits: ['wg-marshall-semi-slav'], openings: ['b-semi-slav'] },
      steps: [
        {
          type: 'line',
          title: 'A pawn for a bishop',
          fen: 'start',
          text: "The main line. Black collects the d-pawn, but to do so trades the dark-squared bishop for White's.",
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'e2e4', san: 'e4', note: "The Marshall Gambit." },
            { uci: 'd5e4', san: 'dxe4' },
            { uci: 'c3e4', san: 'Nxe4' },
            { uci: 'f8b4', san: 'Bb4+' },
            { uci: 'c1d2', san: 'Bd2' },
            { uci: 'd8d4', san: 'Qxd4' },
            { uci: 'd2b4', san: 'Bxb4', note: "Black's dark-squared bishop is gone." },
            { uci: 'd4e4', san: 'Qxe4+' },
            { uci: 'f1e2', san: 'Be2' },
            { uci: 'b8a6', san: 'Na6' },
            { uci: 'b4d6', san: 'Bd6', note: "The bishop controls e7 and f8: Black cannot castle short." }
          ]
        },
        {
          type: 'read',
          title: 'Why d6 matters',
          fen: 'r1b1k1nr/pp3ppp/n1pBp3/8/2P1q3/8/PP2BPPP/R2QK1NR b KQkq - 3 9',
          text: "With no dark-squared bishop of its own, Black cannot challenge the d6 bishop. It covers e7 and f8, so the king cannot castle short, and it supports a queen on the d-file or on e7. Black's queen is active and a pawn up, but every move spent on it is a move not spent on the king.",
          arrows: [['d6', 'f8']],
          highlights: ['e7', 'f8']
        },
        {
          type: 'puzzle',
          title: 'The cage closes',
          fen: 'rnb1k1nr/pp3ppp/2p1p3/2B5/2P5/8/PP1Q1PqP/1K1R3R w - - 0 15',
          prompt: "Illustrative position. Black grabbed g2 and left the king in the centre. White to move: mate in one.",
          solution: ['d2d8'],
          hint: "The d-file is open and your rook stands behind the queen. Which squares around e8 does the c5 bishop already cover?",
          explanation: "15.Qd8 is mate. The queen is protected by the d1 rook, so the king cannot take it; the bishop on the c5-f8 diagonal covers e7 and f8; d7 is covered by the queen, and f7 is blocked by Black's own pawn. The a8 rook is shut in by its own knight. This is the dark-square cage the gambit is about.",
          wrong: {
            'd2d7': "15.Qd7+? Nxd7 or Bxd7: d7 is guarded twice.",
            'c5e7': "15.Be7 attacks nothing important and lets Black play ...Qxh1."
          }
        }
      ]
    },

    {
      id: 'white-gambits-15',
      category: 'white-gambits',
      side: 'white',
      title: 'Belgrade Gambit: the pin on the e-file',
      level: 'Intermediate',
      minutes: 6,
      objective: "Use Qe2 to pin a knight on e4 in the Belgrade Gambit, and know Black's only safe defence.",
      summary: "After 5...Nxe4 6.Qe2 the knight is pinned to the king; one natural-looking defence after another loses material.",
      prerequisites: ['tactics-2'],
      related: { gambits: ['wg-belgrade', 'wg-halloween'] },
      steps: [
        {
          type: 'read',
          title: 'The offer',
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/3N4/3pP3/5N2/PPP2PPP/R1BQKB1R b KQkq - 1 5',
          text: "1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nd5 is the Belgrade Gambit. White leaves d4 alone and offers e4. If Black takes, the e-file is open from e2 to e8: a queen on e2 pins any knight on e4 to the black king. Calm replies such as 5...Be7 give Black easy equality, so it is a surprise weapon.",
          arrows: [['f6', 'e4']],
          highlights: ['e4', 'e8']
        },
        {
          type: 'puzzle',
          title: "See it through Black's eyes",
          fen: 'r1bqkb1r/pppp1ppp/2n5/3N4/3pn3/5N2/PPP1QPPP/R1B1KB1R b KQkq - 1 6',
          prompt: "After 5...Nxe4 6.Qe2, Black to move: keep the pinned knight without losing material.",
          solution: ['f7f5'],
          hint: "The knight cannot move. Which pawn can defend it?",
          explanation: "6...f5! is the only good move: the pawn defends e4, so Qxe4 is no longer possible. The other tries fail: 6...Be7 blocks the pin but leaves the knight to 7.Qxe4; 6...Qe7 and 6...Qh4 drop the queen to Nxe7 or Nxh4. After 6...f5 7.Ng5 the game is very sharp, with Black's king a little airy.",
          wrong: {
            'f8e7': "6...Be7? unpins, but the knight is still undefended: 7.Qxe4 wins it.",
            'd8e7': "6...Qe7?? 7.Nxe7: the d5 knight covers e7.",
            'd8h4': "6...Qh4?? defends e4 along the rank, but 7.Nxh4 takes the queen."
          }
        },
        {
          type: 'line',
          title: 'The sharp main line',
          fen: 'r1bqkb1r/pppp1ppp/2n5/3N4/3pn3/5N2/PPP1QPPP/R1B1KB1R b KQkq - 1 6',
          text: "After the only move, White adds a second attacker to e4. Both sides need precise knowledge from here.",
          moves: [
            { uci: 'f7f5', san: 'f5', note: "Holds the knight." },
            { uci: 'f3g5', san: 'Ng5', note: "Attacks e4 again and eyes e6 and h7." }
          ]
        }
      ]
    },

    {
      id: 'white-gambits-16',
      category: 'white-gambits',
      side: 'white',
      title: 'Alekhine-Chatard: the open h-file',
      level: 'Advanced',
      minutes: 8,
      objective: "Recognise how 6.h4 opens the h-file in the Classical French and use it against a king that castles short.",
      summary: "If Black takes on g5, the h-file opens; castling short into it can be fatal.",
      prerequisites: ['middlegames-2'],
      related: { gambits: ['wg-alekhine-chatard', 'wg-milner-barry'] },
      steps: [
        {
          type: 'line',
          title: 'Accepting the offer',
          fen: 'start',
          text: "The gambit accepted. White gains time on Black's queen while the h1 rook gets an open file.",
          moves: [
            { uci: 'e2e4', san: 'e4' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'f8e7', san: 'Be7' },
            { uci: 'e4e5', san: 'e5', note: "The f6 knight, the best defender of h7, is driven to d7." },
            { uci: 'f6d7', san: 'Nfd7' },
            { uci: 'h2h4', san: 'h4', note: "The Alekhine-Chatard Attack." },
            { uci: 'e7g5', san: 'Bxg5' },
            { uci: 'h4g5', san: 'hxg5', note: "The h-file opens for the rook." },
            { uci: 'd8g5', san: 'Qxg5' },
            { uci: 'g1h3', san: 'Nh3', note: "Development with tempo." },
            { uci: 'g5e7', san: 'Qe7' },
            { uci: 'h3f4', san: 'Nf4' },
            { uci: 'b8c6', san: 'Nc6' },
            { uci: 'd1g4', san: 'Qg4', note: "Hits g7. Where should Black's king go?" }
          ]
        },
        {
          type: 'read',
          title: 'No knight on f6',
          fen: 'r1b1k2r/pppnqppp/2n1p3/3pP3/3P1NQ1/2N5/PPP2PP1/R3KB1R b KQkq - 5 10',
          text: "Normally the knight on f6 guards h7 and covers the kingside. Here it has been pushed to d7, the h-file is open for White's rook, the queen eyes g7 and the f4 knight can jump to h5. Castling short now walks into all of that, which is why Black's king often stays in the centre or goes long.",
          arrows: [['h1', 'h7'], ['g4', 'g7']],
          highlights: ['h7', 'g7']
        },
        {
          type: 'puzzle',
          title: 'Punish the castling',
          fen: 'r1b2rk1/pp1n1ppp/1qn1p3/2ppP2Q/3P4/2N5/PPP2PP1/1K1R3R w - - 0 15',
          prompt: "Illustrative position: Black has castled short into the open h-file. White to move: mate in one.",
          solution: ['h5h7'],
          hint: "Which black piece used to guard h7? It is no longer on f6.",
          explanation: "15.Qxh7 is mate. The h1 rook protects the queen along the open h-file, the king cannot go to f8 because its own rook is there, and no black piece can take on h7: the knight that would normally defend from f6 was driven to d7 by e5. That is the whole idea of h4 and hxg5.",
          wrong: {
            'h5f7': "15.Qxf7+? Rxf7: the rook guards f7.",
            'd1d3': "15.Rd3 prepares a rook lift, but it gives Black time for ...Nf6 or ...h6."
          }
        }
      ]
    },

    {
      id: 'white-gambits-17',
      category: 'white-gambits',
      side: 'white',
      title: 'Tennison Gambit: the trap on g6',
      level: 'Beginner',
      minutes: 5,
      objective: "Win the queen with Nxf7 and a discovered attack when Black plays carelessly in the Tennison Gambit.",
      summary: "A speculative gambit with one famous trick: after ...h6?, Nxf7 and Bg6+ uncover the queen on d1.",
      prerequisites: ['tactics-1'],
      related: { gambits: ['wg-tennison'] },
      steps: [
        {
          type: 'read',
          title: 'Bishop and queen in a line',
          fen: 'rnbqkb1r/ppp1pppp/5n2/6N1/8/3B4/PPP2PPP/RNBQK2R b KQkq - 0 5',
          text: "After 1.Nf3 d5 2.e4 dxe4 3.Ng5 Nf6 4.d3 exd3 5.Bxd3, the bishop on d3 stands in front of White's queen, and the d-file to Black's queen on d8 is open. The g5 knight and the bishop both look at f7 and g6. Black must be careful; the calm 4...e5 avoids all of this.",
          arrows: [['d1', 'd8'], ['g5', 'f7']],
          highlights: ['d3', 'd8']
        },
        {
          type: 'puzzle',
          title: 'Punish 5...h6',
          fen: 'rnbqkb1r/ppp1ppp1/5n1p/6N1/8/3B4/PPP2PPP/RNBQK2R w KQkq - 0 6',
          prompt: "Black kicked the knight with 5...h6?. White to move: win the queen.",
          solution: ['g5f7', 'e8f7', 'd3g6'],
          hint: "Take on f7 first. If the king recaptures, which bishop check also uncovers the queen on d1?",
          explanation: "6.Nxf7! forks the queen and the h8 rook. After 6...Kxf7, 7.Bg6+ gives check, and because the bishop has left d3, the d1 queen now attacks d8. Whatever the king does, 8.Qxd8 wins the queen. If Black ignores the knight, Nxh8 wins a rook. The h6 pawn cannot take on g6, which is why ...h6 lost.",
          wrong: {
            'g5e4': "6.Ne4 saves the knight but wins nothing; Black is a pawn up.",
            'd3g6': "6.Bg6? fxg6: the f7 pawn is still there to capture."
          }
        }
      ]
    },

    {
      id: 'white-gambits-18',
      category: 'white-gambits',
      side: 'white',
      title: 'Anti-Moscow Gambit: the bishop on d6',
      level: 'Advanced',
      minutes: 8,
      objective: "Understand the structure of the Anti-Moscow Gambit and use Bd6 to stop Black castling kingside.",
      summary: "White gives the c4 pawn for the centre; once the e5 knight trades off a defender, the bishop lands on d6.",
      prerequisites: ['white-gambits-6'],
      related: { gambits: ['wg-anti-moscow', 'wg-marshall-semi-slav'], openings: ['b-semi-slav'] },
      steps: [
        {
          type: 'line',
          title: 'The main line',
          fen: 'start',
          text: "White keeps the pin with 6.Bh4, Black takes on c4 and breaks the pin with ...g5.",
          moves: [
            { uci: 'd2d4', san: 'd4' },
            { uci: 'd7d5', san: 'd5' },
            { uci: 'c2c4', san: 'c4' },
            { uci: 'c7c6', san: 'c6' },
            { uci: 'g1f3', san: 'Nf3' },
            { uci: 'g8f6', san: 'Nf6' },
            { uci: 'b1c3', san: 'Nc3' },
            { uci: 'e7e6', san: 'e6' },
            { uci: 'c1g5', san: 'Bg5' },
            { uci: 'h7h6', san: 'h6' },
            { uci: 'g5h4', san: 'Bh4', note: "The Anti-Moscow: keep the pin." },
            { uci: 'd5c4', san: 'dxc4' },
            { uci: 'e2e4', san: 'e4' },
            { uci: 'g7g5', san: 'g5', note: "Breaks the pin but weakens f5, h5 and the king." },
            { uci: 'h4g3', san: 'Bg3' },
            { uci: 'b7b5', san: 'b5', note: "Black holds the extra pawn." }
          ]
        },
        {
          type: 'read',
          title: 'What White gets',
          fen: 'rnbqkb1r/p4p2/2p1pn1p/1p4p1/2pPP3/2N2NB1/PP3PPP/R2QKB1R w KQkq - 0 9',
          text: "Black is a pawn up with a queenside majority, but ...h6 and ...g5 have loosened the kingside, so short castling is no longer comfortable. White has a big centre and will castle, then play Ne5 to exchange Black's knight on d7 and open the g3 bishop's path to d6, where it covers f8 and e7.",
          arrows: [['f3', 'e5']],
          highlights: ['d6', 'f5', 'h5']
        },
        {
          type: 'puzzle',
          title: 'Keep the king in the middle',
          fen: 'r2qk2r/pb1n1pb1/2p1p2p/1p4p1/2pPP3/2N3B1/PP2BPPP/R2Q1RK1 w kq - 0 13',
          prompt: "After 9.Be2 Bb7 10.O-O Nbd7 11.Ne5 Bg7 12.Nxd7 Nxd7, White to move: which bishop move stops Black castling kingside?",
          solution: ['g3d6'],
          hint: "The king must cross f8 to castle short. Which diagonal leads there?",
          explanation: "13.Bd6 controls f8 along the d6-f8 diagonal, so Black cannot castle short, and long castling is still blocked by the queen. No black piece can challenge the bishop on the dark squares easily. Black usually answers with ...a6 and ...e5 or ...c5 to fight back, while White uses the centre and the stuck king.",
          wrong: {
            'g3c7': "13.Bc7? Qxc7: the bishop simply hangs to the queen.",
            'g3e5': "13.Be5 offers a trade of bishops with ...Bxe5 and lets Black castle.",
            'g3h4': "13.Bh4 attacks nothing useful; Black castles next move."
          }
        }
      ]
    }
  ]
}]);
