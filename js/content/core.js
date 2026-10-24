/* The Quiet Gambit - library structure: categories and guided paths.
 * Lessons, openings and gambits live in the other js/content/*.js parts. */
window.QG_CORE = {
  categories: [
    { id: 'white-openings', title: 'White Openings', side: 'white', group: 'Openings',
      summary: "Build a first White repertoire: open games with 1.e4, structures with 1.d4, and flexible flank systems." },
    { id: 'black-vs-e4', title: 'Black vs 1.e4', side: 'black', group: 'Openings',
      summary: "Choose and learn a reply to 1.e4, from solid ...e5 and the Caro-Kann to the fighting Sicilian." },
    { id: 'black-vs-d4', title: 'Black vs 1.d4', side: 'black', group: 'Openings',
      summary: "Classical defences with ...d5 and the Indian systems with ...Nf6, with Black's plans against the common set-ups." },
    { id: 'black-vs-flank', title: 'Black vs flank openings', side: 'black', group: 'Openings',
      summary: "Calm, reliable answers to 1.c4, 1.Nf3 and other flank starts, and how to steer them to familiar ground." },
    { id: 'white-gambits', title: 'White Gambits', side: 'white', group: 'Gambits',
      summary: "Give a pawn for time and open lines: what each offer buys, how to play it, and when it goes wrong." },
    { id: 'black-gambits', title: 'Black Gambits', side: 'black', group: 'Gambits',
      summary: "Counter-attacking sacrifices for Black, from respected main lines to honest surprise weapons." },
    { id: 'tactics', title: 'Tactics and Calculation', side: 'both', group: 'Skills',
      summary: "The forcing patterns that win material, and a method for calculating them reliably." },
    { id: 'strategy', title: 'Middlegame Strategy', side: 'both', group: 'Skills',
      summary: "Pawn structures, piece placement and plans: what to do when there is no tactic." },
    { id: 'attack', title: 'Attacking Play', side: 'both', group: 'Skills',
      summary: "When and how to attack the king: sacrifices, pawn storms and bringing pieces to the fight." },
    { id: 'defence', title: 'Defence and Prophylaxis', side: 'both', group: 'Skills',
      summary: "Spot your opponent's ideas before they happen, and hold difficult positions." },
    { id: 'endgames', title: 'Endgames', side: 'both', group: 'Skills',
      summary: "The essential endings, from king and pawn to rook endings, that decide close games." },
    { id: 'practical', title: 'Practical Chess', side: 'both', group: 'Skills',
      summary: "Thinking habits, clock handling and tournament skills that turn knowledge into points." }
  ],
  // Guided paths: ordered lessons with a reason for each step.
  // style: 'Beginner-friendly' | 'Solid' | 'Attacking' | 'Skills'
  paths: [
    {
      id: 'first-white', goal: 'Build your openings', side: 'white', style: 'Beginner-friendly',
      title: 'A first White repertoire',
      summary: "Open with 1.e4 and learn the handful of ideas that win most games at club level.",
      why: "Starts from principles, then adds one concrete idea per lesson: quick development, a trap to avoid falling into, and simple answers to Black's most common replies.",
      steps: [
        { lesson: 'openings-1', why: "The principles every other opening lesson builds on." },
        { lesson: 'white-openings-1', why: "Shows what happens when one side ignores those principles in the Italian." },
        { lesson: 'tactics-1', why: "Forks decide many opening skirmishes; you will need them in the next lessons." },
        { lesson: 'white-openings-5', why: "A practical Italian-family trick that uses a fork." },
        { lesson: 'white-openings-6', why: "The Scotch: open the centre early and chase Black's pieces." },
        { lesson: 'white-openings-4', why: "Your simple answer to the Sicilian, the most common reply to 1.e4." },
        { lesson: 'white-openings-3', why: "Your answer to the Caro-Kann, using a pawn to harass a developed piece." },
        { lesson: 'tactics-3', why: "Back-rank mates appear as soon as both sides castle." }
      ]
    },
    {
      id: 'solid-white', goal: 'Build your openings', side: 'white', style: 'Solid',
      title: 'A solid 1.d4 repertoire',
      summary: "Queen's Gambit structures, the London and long-term plans that reward patient play.",
      why: "Each opening lesson is followed by the middlegame idea it leads to, so the plans make sense as well as the moves.",
      steps: [
        { lesson: 'openings-1', why: "Central control is the whole point of 1.d4 and 2.c4." },
        { lesson: 'gambits-1', why: "Why the Queen's Gambit is not a real sacrifice." },
        { lesson: 'white-openings-8', why: "The London: a fixed set-up and the one early queen sortie to know." },
        { lesson: 'white-openings-7', why: "The minority attack: the classic plan from the QGD Exchange." },
        { lesson: 'middlegames-1', why: "Outposts and bad bishops: the judgements behind those plans." },
        { lesson: 'white-openings-11', why: "Against the Nimzo-Indian: when to ask the bishop a question." },
        { lesson: 'white-openings-10', why: "Against the King's Indian: a queenside pawn storm of your own." }
      ]
    },
    {
      id: 'attacking-white', goal: 'Build your openings', side: 'white', style: 'Attacking',
      title: 'Attacking with 1.e4 and gambits',
      summary: "Open games and sound gambits where development and initiative matter more than a pawn.",
      why: "Moves from simple traps to real gambit play, finishing with the attacking patterns those gambits create.",
      steps: [
        { lesson: 'white-openings-1', why: "A first taste of attacking f7 in the Italian." },
        { lesson: 'white-gambits-4', why: "The Scotch Gambit: regain the pawn with tempo." },
        { lesson: 'white-gambits-1', why: "The Goring: development for a pawn, and a trap for the greedy." },
        { lesson: 'white-gambits-6', why: "The Evans: the best-respected of the classical gambits." },
        { lesson: 'white-gambits-2', why: "The Smith-Morra: an anti-Sicilian gambit and its key deflection." },
        { lesson: 'gambits-2', why: "The King's Gambit: the oldest and boldest of them." },
        { lesson: 'white-gambits-5', why: "How to fight for the King's Gambit pawn with a lever." },
        { lesson: 'attack-8', why: "The f7 sacrifice that so many open games revolve around." },
        { lesson: 'white-gambits-9', why: "A famous finish that ties the whole path together." }
      ]
    },
    {
      id: 'black-e4-solid', goal: 'Build your openings', side: 'black', style: 'Solid',
      title: 'Solid answers to 1.e4',
      summary: "The Caro-Kann, 1...e5 and the French: sound structures with clear plans.",
      why: "Each lesson gives Black one dependable idea: where the pieces go, which pawn break to aim for, and which trap to avoid.",
      steps: [
        { lesson: 'openings-2', why: "The Caro-Kann basics and its most famous trap." },
        { lesson: 'black-vs-e4-3', why: "Where the light-squared bishop belongs, and how to keep it safe." },
        { lesson: 'black-vs-e4-1', why: "The Petroff: a symmetrical defence with one rule you must not break." },
        { lesson: 'black-vs-e4-2', why: "Against the Italian: free your game with ...d5." },
        { lesson: 'black-vs-e4-5', why: "The Two Knights: give a pawn back for quick development." },
        { lesson: 'black-vs-e4-4', why: "The French Advance: attack the base of White's pawn chain." },
        { lesson: 'black-vs-e4-7', why: "A Ruy Lopez trap that wins a piece if White is careless." }
      ]
    },
    {
      id: 'black-e4-sicilian', goal: 'Build your openings', side: 'black', style: 'Attacking',
      title: 'Fighting chances with the Sicilian',
      summary: "Unbalanced positions where Black plays to win: pawn breaks, counter-attack and opposite-side castling.",
      why: "Sicilian structures repeat. Learn the central breaks first, then the race when both kings are attacked.",
      steps: [
        { lesson: 'tactics-4', why: "Double attacks fuel most Sicilian counter-attacks." },
        { lesson: 'black-vs-e4-8', why: "The Classical: a queen move that hits two targets." },
        { lesson: 'black-vs-e4-6', why: "The Dragon: strike in the centre when White castles long." },
        { lesson: 'attack-7', why: "Opposite-side castling: why speed beats material in these races." },
        { lesson: 'black-vs-e4-9', why: "The Sveshnikov: the ...f5 break that defines it." }
      ]
    },
    {
      id: 'black-d4-flank', goal: 'Build your openings', side: 'black', style: 'Solid',
      title: 'Answering 1.d4 and flank openings',
      summary: "Classical ...d5 defences and Indian set-ups, plus calm answers to 1.c4, 1.Nf3 and 1.f4.",
      why: "Starts with the most common systems and the plans that recur against them, then branches into the flank openings.",
      steps: [
        { lesson: 'black-vs-d4-1', why: "The Queen's Gambit Declined: a pin that is not what it seems." },
        { lesson: 'black-vs-d4-2', why: "The Slav: develop the bishop before ...e6 shuts it in." },
        { lesson: 'black-vs-d4-3', why: "The London is everywhere at club level: punish its weak b2." },
        { lesson: 'black-vs-d4-4', why: "The Queen's Indian: control e4 with pieces." },
        { lesson: 'black-vs-d4-6', why: "QGD again: meet White's queenside expansion with a pawn break." },
        { lesson: 'black-vs-d4-5', why: "The Nimzo-Indian knight jump to e4." },
        { lesson: 'black-vs-flank-7', why: "1.Nf3 and 2.c4: steer into Slav territory you now know." },
        { lesson: 'black-vs-flank-2', why: "1.c4 e5: gain space in the centre." },
        { lesson: 'black-vs-flank-4', why: "The Bird: kick the knight and claim the centre." }
      ]
    },
    {
      id: 'gambit-study', goal: 'Build your openings', side: 'both', style: 'Attacking',
      title: 'Gambits from both sides',
      summary: "How pawn sacrifices really work: what each side gets, when to accept and when to decline.",
      why: "Alternates White and Black gambits so you see each idea from the side making the offer and the side receiving it.",
      steps: [
        { lesson: 'gambits-1', why: "Start with the gambit that is not really a gambit." },
        { lesson: 'gambits-2', why: "Then the most famous real one." },
        { lesson: 'black-gambits-4', why: "A sound Black gambit: give a pawn for time." },
        { lesson: 'white-gambits-1', why: "The Goring: development first, material later." },
        { lesson: 'black-gambits-3', why: "The Budapest: a trap that punishes routine play." },
        { lesson: 'white-gambits-6', why: "The Evans: keep the enemy king in the centre." },
        { lesson: 'black-gambits-6', why: "The Albin: how quickly a careless defender can lose." },
        { lesson: 'black-gambits-8', why: "The Marshall: a top-level gambit and its attack." },
        { lesson: 'black-gambits-9', why: "The Benko: a gambit for long-term pressure, not quick mate." }
      ]
    },
    {
      id: 'tactics-path', goal: 'Build your skills', side: 'both', style: 'Beginner-friendly',
      title: 'Tactical foundations',
      summary: "From forks to calculation: the patterns that win material, in the order they build on each other.",
      why: "Each tactic adds one idea to the last, and the path ends with a method for finding them in your own games.",
      steps: [
        { lesson: 'tactics-1', why: "The fork: the simplest double threat." },
        { lesson: 'tactics-2', why: "Pins and skewers: attacks along lines." },
        { lesson: 'tactics-3', why: "Back-rank mate: the most common tactical finish." },
        { lesson: 'tactics-4', why: "Double attacks in general, not just with knights." },
        { lesson: 'tactics-5', why: "Discovered attacks: move one piece to unleash another." },
        { lesson: 'tactics-6', why: "Removing the defender: take away what holds a target." },
        { lesson: 'tactics-8', why: "Checks, captures and threats: a routine for spotting all of the above." },
        { lesson: 'tactics-9', why: "Deflection: pull a defender away." },
        { lesson: 'tactics-10', why: "Decoy: lure a piece onto a bad square." },
        { lesson: 'tactics-11', why: "Overloading: one defender, two jobs." },
        { lesson: 'tactics-7', why: "Trapped pieces: win material without a direct attack." },
        { lesson: 'tactics-13', why: "X-ray attacks: lines that work through a piece." },
        { lesson: 'tactics-12', why: "The in-between move: the tactic that refutes many others." },
        { lesson: 'tactics-14', why: "Mating nets: when the king has no squares left." },
        { lesson: 'tactics-15', why: "Candidate moves and blunder-checks: calculation as a habit." }
      ]
    },
    {
      id: 'attack-defence', goal: 'Build your skills', side: 'both', style: 'Skills',
      title: 'Attack and defence',
      summary: "When to attack the king, how to do it, and how to hold when it happens to you.",
      why: "Pairs each attacking idea with its defence, so you learn to read the same positions from both sides.",
      steps: [
        { lesson: 'attack-1', why: "Count attackers and defenders before you commit." },
        { lesson: 'middlegames-2', why: "Open lines: how attacks reach the king." },
        { lesson: 'defence-1', why: "The defender's first question: what does my opponent want?" },
        { lesson: 'attack-5', why: "The Greek gift: the classic bishop sacrifice on h7." },
        { lesson: 'defence-2', why: "Luft and timely pawn moves that stop such attacks before they start." },
        { lesson: 'attack-6', why: "The rook lift: bring a heavy piece across." },
        { lesson: 'defence-3', why: "Trade off the attackers." },
        { lesson: 'attack-7', why: "Opposite-side castling: when both sides race." },
        { lesson: 'defence-4', why: "Defend by counter-attacking." },
        { lesson: 'attack-10', why: "Centre first: when not to attack." },
        { lesson: 'defence-5', why: "Perpetual check: save a lost game." },
        { lesson: 'defence-9', why: "Giving back material to kill an attack." }
      ]
    }
  ]
};
