/* The Quiet Gambit - library structure: categories and guided paths.
 * Lessons, openings and gambits live in the other js/content/*.js parts.
 * Category ids are stable: lesson ids and saved progress depend on them. */
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
    { id: 'tactics', title: 'Tactics', side: 'both', group: 'Skills',
      summary: "The forcing patterns that win material or mate: forks, pins, deflections and their relatives." },
    { id: 'calculation', title: 'Calculation', side: 'both', group: 'Skills',
      summary: "A method for seeing ahead: candidate moves, forcing moves first, counting, comparing lines and checking replies." },
    { id: 'strategy', title: 'Middlegame Strategy', side: 'both', group: 'Skills',
      summary: "Piece placement, weak squares and plans: what to do when there is no tactic." },
    { id: 'pawn-structures', title: 'Pawn Structures', side: 'both', group: 'Skills',
      summary: "The common pawn structures from the openings, and the plans and pawn breaks that belong to each." },
    { id: 'attack', title: 'Attacking Play', side: 'both', group: 'Skills',
      summary: "When and how to attack the king: sacrifices, pawn storms and bringing pieces to the fight." },
    { id: 'defence', title: 'Defence and Prophylaxis', side: 'both', group: 'Skills',
      summary: "Spot your opponent's ideas before they happen, and hold difficult positions." },
    { id: 'endgames', title: 'Endgames', side: 'both', group: 'Skills',
      summary: "The essential endings, from king and pawn to rook endings, that decide close games." },
    { id: 'practical', title: 'Practical Chess', side: 'both', group: 'Skills',
      summary: "Thinking habits, clock handling and tournament skills that turn knowledge into points." },
    { id: 'model-games', title: 'Model Games', side: 'both', group: 'Skills',
      summary: "Famous and illustrative games, each studied for one idea you can use in your own games." }
  ],
  // Guided paths: ordered lessons with a reason for each step.
  // style: 'Beginner-friendly' | 'Solid' | 'Attacking' | 'Skills'
  // focus: what the path trains; level: the level it starts at.
  paths: [
    {
      id: 'first-white', goal: 'Build your openings', side: 'white', style: 'Beginner-friendly',
      focus: 'white-repertoire', level: 'Beginner',
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
        { lesson: 'white-openings-12', why: "Against the Scandinavian: develop while chasing the early queen." },
        { lesson: 'tactics-3', why: "Back-rank mates appear as soon as both sides castle." }
      ]
    },
    {
      id: 'solid-white', goal: 'Build your openings', side: 'white', style: 'Solid',
      focus: 'white-repertoire', level: 'Beginner',
      title: 'A solid 1.d4 repertoire',
      summary: "Queen's Gambit structures, the London and long-term plans that reward patient play.",
      why: "Each opening lesson is followed by the middlegame idea it leads to, so the plans make sense as well as the moves.",
      steps: [
        { lesson: 'openings-1', why: "Central control is the whole point of 1.d4 and 2.c4." },
        { lesson: 'gambits-1', why: "Why the Queen's Gambit is not a real sacrifice." },
        { lesson: 'white-openings-8', why: "The London: a fixed set-up and the one early queen sortie to know." },
        { lesson: 'white-openings-14', why: "The Trompowsky: when to give the bishop for the knight." },
        { lesson: 'white-openings-7', why: "The minority attack: the classic plan from the QGD Exchange." },
        { lesson: 'middlegames-1', why: "Outposts and bad bishops: the judgements behind those plans." },
        { lesson: 'white-openings-11', why: "Against the Nimzo-Indian: when to ask the bishop a question." },
        { lesson: 'pawn-structures-7', why: "What the doubled c-pawns that follow really mean for both sides." },
        { lesson: 'white-openings-10', why: "Against the King's Indian: a queenside pawn storm of your own." }
      ]
    },
    {
      id: 'attacking-white', goal: 'Build your openings', side: 'white', style: 'Attacking',
      focus: 'white-repertoire', level: 'Beginner',
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
      focus: 'black-e4', level: 'Beginner',
      title: 'Solid answers to 1.e4',
      summary: "The Caro-Kann, 1...e5 and the French: sound structures with clear plans.",
      why: "Each lesson gives Black one dependable idea: where the pieces go, which pawn break to aim for, and which trap to avoid.",
      steps: [
        { lesson: 'openings-2', why: "The Caro-Kann basics and its most famous trap." },
        { lesson: 'black-vs-e4-3', why: "Where the light-squared bishop belongs, and how to keep it safe." },
        { lesson: 'black-vs-e4-1', why: "The Petroff: a symmetrical defence with one rule you must not break." },
        { lesson: 'black-vs-e4-2', why: "Against the Italian: free your game with ...d5." },
        { lesson: 'black-vs-e4-10', why: "The Scandinavian: keep the queen safe with ...c6." },
        { lesson: 'black-vs-e4-4', why: "The French Advance: attack the base of White's pawn chain." },
        { lesson: 'pawn-structures-2', why: "The French chain again: the second break against the head." },
        { lesson: 'black-vs-e4-5', why: "The Two Knights: give a pawn back for quick development." },
        { lesson: 'black-vs-e4-7', why: "A Ruy Lopez trap that wins a piece if White is careless." }
      ]
    },
    {
      id: 'black-e4-sicilian', goal: 'Build your openings', side: 'black', style: 'Attacking',
      focus: 'black-e4', level: 'Intermediate',
      title: 'Fighting chances with the Sicilian',
      summary: "Unbalanced positions where Black plays to win: pawn breaks, counter-attack and opposite-side castling.",
      why: "Sicilian structures repeat. Learn the central breaks first, then the race when both kings are attacked.",
      steps: [
        { lesson: 'black-vs-e4-8', why: "The Classical: a queen move that hits two targets." },
        { lesson: 'pawn-structures-5', why: "The Scheveningen centre: answer a wing attack with ...d5." },
        { lesson: 'black-vs-e4-6', why: "The Dragon: strike in the centre when White castles long." },
        { lesson: 'attack-7', why: "Opposite-side castling: why speed beats material in these races." },
        { lesson: 'model-games-4', why: "See the Yugoslav attack from White's side, so you know what to prevent." },
        { lesson: 'pawn-structures-6', why: "The Najdorf ...e5 structure: the fight for d5." },
        { lesson: 'black-vs-e4-9', why: "The Sveshnikov: the ...f5 break that defines it." }
      ]
    },
    {
      id: 'black-d4-flank', goal: 'Build your openings', side: 'black', style: 'Solid',
      focus: 'black-d4', level: 'Beginner',
      title: 'Solid answers to 1.d4',
      summary: "Classical ...d5 defences and the Nimzo- and Queen's Indian, with plans against the London, Colle and Trompowsky.",
      why: "Starts with the most common systems at club level and the plans that recur against them, then moves to the main lines with c4.",
      steps: [
        { lesson: 'black-vs-d4-1', why: "The Queen's Gambit Declined: a pin that is not what it seems." },
        { lesson: 'black-vs-d4-2', why: "The Slav: develop the bishop before ...e6 shuts it in." },
        { lesson: 'black-vs-d4-3', why: "The London is everywhere at club level: punish its weak b2." },
        { lesson: 'black-vs-d4-11', why: "The Colle: defuse White's central e4-e5 fork." },
        { lesson: 'black-vs-d4-12', why: "The Trompowsky: meet Bg5 with ...h6 and recapture correctly." },
        { lesson: 'black-vs-d4-4', why: "The Queen's Indian: control e4 with pieces." },
        { lesson: 'black-vs-d4-6', why: "QGD again: meet White's queenside expansion with a pawn break." },
        { lesson: 'black-vs-d4-5', why: "The Nimzo-Indian knight jump to e4." },
        { lesson: 'pawn-structures-7', why: "Why ...Bxc3 is worth the bishop: targeting the doubled c-pawns." }
      ]
    },
    {
      id: 'black-d4-indian', goal: 'Build your openings', side: 'black', style: 'Attacking',
      focus: 'black-d4', level: 'Intermediate',
      title: 'Fighting answers to 1.d4',
      summary: "The King's Indian, Grunfeld, Benoni and Dutch: let White build a centre, then attack it.",
      why: "Each opening comes with the pawn structure it leads to, so you learn the breaks and races as well as the moves.",
      steps: [
        { lesson: 'black-vs-d4-7', why: "The King's Indian: the ...f5 break." },
        { lesson: 'pawn-structures-3', why: "The King's Indian chain: who attacks where, and why." },
        { lesson: 'black-vs-d4-8', why: "The Grunfeld: pressure on the centre from the long diagonal." },
        { lesson: 'black-vs-d4-9', why: "The Benoni: survive the most dangerous early check." },
        { lesson: 'pawn-structures-9', why: "The Benoni structure: White's e5 break and your queenside majority." },
        { lesson: 'pawn-structures-8', why: "The Dutch Stonewall: a light-square wall and its dark-square holes." },
        { lesson: 'black-vs-d4-10', why: "The Leningrad Dutch: prepare ...e5 with ...Qe8." },
        { lesson: 'black-gambits-9', why: "The Benko: a gambit for long-term pressure in Benoni-style structures." }
      ]
    },
    {
      id: 'black-flank', goal: 'Build your openings', side: 'black', style: 'Solid',
      focus: 'black-flank', level: 'Beginner',
      title: 'Answering flank openings',
      summary: "Calm answers to 1.c4, 1.Nf3, the King's Indian Attack and 1.f4.",
      why: "Starts with the move orders that lead back to familiar ground, then covers the English and the less common flank systems.",
      steps: [
        { lesson: 'black-vs-flank-7', why: "1.Nf3 and 2.c4: steer into Slav territory." },
        { lesson: 'black-vs-flank-1', why: "The English Four Knights: a trap to know from move one." },
        { lesson: 'black-vs-flank-2', why: "1.c4 e5: gain space in the centre." },
        { lesson: 'black-vs-flank-3', why: "The King's Indian Attack: punish an early e4." },
        { lesson: 'black-vs-flank-5', why: "The Symmetrical English: break with ...d5." },
        { lesson: 'black-vs-flank-8', why: "The fianchetto English: stop b4 with ...a5." },
        { lesson: 'black-vs-flank-6', why: "The Mikenas Attack: keep the balance when White plays sharply." },
        { lesson: 'black-vs-flank-4', why: "The Bird: kick the knight and claim the centre." },
        { lesson: 'black-vs-flank-9', why: "The English Four Knights with d4: target the c4 pawn." }
      ]
    },
    {
      id: 'gambit-study', goal: 'Build your openings', side: 'both', style: 'Attacking',
      focus: 'white-gambits', level: 'Beginner',
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
      id: 'white-gambits', goal: 'Build your openings', side: 'white', style: 'Attacking',
      focus: 'white-gambits', level: 'Beginner',
      title: 'White gambits',
      summary: "From the Scotch and Goring gambits to the Evans and the King's Gambit: pawns for time and open lines.",
      why: "Starts with gambits where the pawn usually comes back, then moves to real sacrifices that need an attack to justify them.",
      steps: [
        { lesson: 'white-gambits-4', why: "The Scotch Gambit: the pawn returns with tempo." },
        { lesson: 'white-gambits-10', why: "The Urusov: recapture with tempo and develop." },
        { lesson: 'white-gambits-1', why: "The Goring: development for a pawn." },
        { lesson: 'white-gambits-2', why: "The Smith-Morra: an anti-Sicilian gambit." },
        { lesson: 'white-gambits-3', why: "The Milner-Barry: a French gambit with a key check." },
        { lesson: 'white-gambits-6', why: "The Evans: keep the black king in the centre." },
        { lesson: 'white-gambits-11', why: "The Wing Gambit: a trap after an early capture." },
        { lesson: 'white-gambits-12', why: "The Blackmar-Diemer: the f-file and h7." },
        { lesson: 'gambits-2', why: "The King's Gambit: the classic real sacrifice." },
        { lesson: 'white-gambits-5', why: "The King's Gambit h4 lever: fighting for the pawn." },
        { lesson: 'white-gambits-7', why: "The Staunton Gambit: the e8-h5 diagonal." },
        { lesson: 'white-gambits-8', why: "The Danish: when to bail out." },
        { lesson: 'white-gambits-9', why: "The Evergreen finish: what all that open play is for." }
      ]
    },
    {
      id: 'black-gambits', goal: 'Build your openings', side: 'black', style: 'Attacking',
      focus: 'black-gambits', level: 'Beginner',
      title: 'Black gambits',
      summary: "Counter-gambits and traps for Black, from surprise weapons to the Marshall and the Benko.",
      why: "Starts with short traps that teach the danger signs, then moves to sound gambits played at the highest level.",
      steps: [
        { lesson: 'black-gambits-1', why: "The Englund trap: a first lesson in punishing greed." },
        { lesson: 'black-gambits-2', why: "From's Gambit: the weak e1-h4 diagonal." },
        { lesson: 'black-gambits-5', why: "The Blackburne Shilling trap: know it, then decide if you want it." },
        { lesson: 'black-gambits-12', why: "The Elephant Gambit: a wedge on e4 and the h2 target." },
        { lesson: 'black-gambits-4', why: "The Two Knights: a sound pawn sacrifice for time." },
        { lesson: 'black-gambits-3', why: "The Budapest: a knight mate on d3 to remember." },
        { lesson: 'black-gambits-7', why: "The Traxler: answer the fork with a check." },
        { lesson: 'black-gambits-10', why: "The Icelandic Gambit: the pin on c3." },
        { lesson: 'black-gambits-6', why: "The Albin: the Lasker Trap." },
        { lesson: 'black-gambits-11', why: "The Latvian: why move order matters in a risky gambit." },
        { lesson: 'black-gambits-8', why: "The Marshall Attack: a gambit trusted at the top." },
        { lesson: 'black-gambits-9', why: "The Benko: a pawn for lasting queenside pressure." }
      ]
    },
    {
      id: 'tactics-path', goal: 'Build your skills', side: 'both', style: 'Beginner-friendly',
      focus: 'tactics', level: 'Beginner',
      title: 'Tactical foundations',
      summary: "From forks to mating nets: the patterns that win material, in the order they build on each other.",
      why: "Each tactic adds one idea to the last; the calculation path then turns them into a method.",
      steps: [
        { lesson: 'tactics-1', why: "The fork: the simplest double threat." },
        { lesson: 'tactics-2', why: "Pins and skewers: attacks along lines." },
        { lesson: 'tactics-3', why: "Back-rank mate: the most common tactical finish." },
        { lesson: 'tactics-4', why: "Double attacks in general, not just with knights." },
        { lesson: 'tactics-5', why: "Discovered attacks: move one piece to unleash another." },
        { lesson: 'tactics-6', why: "Removing the defender: take away what holds a target." },
        { lesson: 'tactics-7', why: "Trapped pieces: win material without a direct attack." },
        { lesson: 'tactics-9', why: "Deflection: pull a defender away." },
        { lesson: 'tactics-10', why: "Decoy: lure a piece onto a bad square." },
        { lesson: 'tactics-11', why: "Overloading: one defender, two jobs." },
        { lesson: 'tactics-13', why: "X-ray attacks: lines that work through a piece." },
        { lesson: 'tactics-12', why: "The in-between move: the tactic that refutes many others." },
        { lesson: 'tactics-14', why: "Mating nets: when the king has no squares left." }
      ]
    },
    {
      id: 'calculation-path', goal: 'Build your skills', side: 'both', style: 'Skills',
      focus: 'tactics', level: 'Beginner',
      title: 'Learning to calculate',
      summary: "A method for seeing ahead: candidate moves, forcing moves, counting, comparing lines and defending.",
      why: "Each lesson adds one step of the method, from listing candidates to checking the opponent's best defence.",
      steps: [
        { lesson: 'calculation-1', why: "List the candidates before you calculate any of them." },
        { lesson: 'calculation-2', why: "Count attackers and defenders, and capture in the right order." },
        { lesson: 'tactics-8', why: "A fixed scanning order: checks, captures, threats." },
        { lesson: 'calculation-3', why: "Forcing moves keep the tree small enough to calculate to the end." },
        { lesson: 'calculation-4', why: "See the board as it will be, not as it is." },
        { lesson: 'calculation-5', why: "Two good lines: calculate both and compare the end positions." },
        { lesson: 'calculation-6', why: "Look for the defender's best reply before you sacrifice." },
        { lesson: 'tactics-15', why: "The blunder-check: one last look at the opponent's checks." },
        { lesson: 'calculation-8', why: "Counting in the endgame: pawn races." },
        { lesson: 'calculation-7', why: "Quiet moves: the part of a combination most players miss." },
        { lesson: 'calculation-9', why: "Calculation in defence: find the only move." }
      ]
    },
    {
      id: 'middlegame-plans', goal: 'Build your skills', side: 'both', style: 'Skills',
      focus: 'strategy', level: 'Beginner',
      title: 'Middlegame planning',
      summary: "Weak squares, good and bad pieces, and the pawn structures that tell you what to do.",
      why: "Starts with the basic judgements about pieces and squares, then shows how each common pawn structure suggests a plan.",
      steps: [
        { lesson: 'strategy-3', why: "The first question of planning: which piece is worst?" },
        { lesson: 'strategy-4', why: "Pawn breaks: how closed positions are opened." },
        { lesson: 'pawn-structures-1', why: "Pawn islands: why some recaptures create lasting weaknesses." },
        { lesson: 'strategy-1', why: "Doubled pawns as targets." },
        { lesson: 'strategy-2', why: "Holes near the king and how pieces use them." },
        { lesson: 'middlegames-1', why: "Outposts and bad bishops." },
        { lesson: 'strategy-5', why: "Good knight against bad bishop: choosing the right exchanges." },
        { lesson: 'strategy-8', why: "The bishop pair in open positions." },
        { lesson: 'pawn-structures-2', why: "The French chain: base and head." },
        { lesson: 'strategy-6', why: "Playing with the isolated queen's pawn." },
        { lesson: 'strategy-7', why: "Playing against it: blockade and exchanges." },
        { lesson: 'strategy-10', why: "Hanging pawns: when to advance them." },
        { lesson: 'strategy-9', why: "The minority attack in the Carlsbad structure." },
        { lesson: 'model-games-5', why: "A whole game built on the minority attack." }
      ]
    },
    {
      id: 'attack-defence', goal: 'Build your skills', side: 'both', style: 'Skills',
      focus: 'tactics', level: 'Beginner',
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
    },
    {
      id: 'endgame-path', goal: 'Build your skills', side: 'both', style: 'Skills',
      focus: 'endgames', level: 'Beginner',
      title: 'Essential endgames',
      summary: "The basic mates, king and pawn endings, and the rook-ending positions every player needs.",
      why: "Starts with mating the lone king, then builds king and pawn technique before the rook endings that occur most often.",
      steps: [
        { lesson: 'endgames-3', why: "Mate with king and queen: the first technique to master." },
        { lesson: 'endgames-4', why: "Mate with king and rook." },
        { lesson: 'endgames-1', why: "Opposition and the square of the pawn." },
        { lesson: 'endgames-6', why: "Key squares: the rule that decides most pawn endings." },
        { lesson: 'endgames-5', why: "The rook's pawn draw: when the corner saves the defender." },
        { lesson: 'endgames-7', why: "The outside passed pawn: a decoy that wins." },
        { lesson: 'calculation-8', why: "Pawn races: count the moves exactly." },
        { lesson: 'endgames-8', why: "The protected passed pawn." },
        { lesson: 'endgames-2', why: "Rooks behind passed pawns, and the Lucena position." },
        { lesson: 'endgames-9', why: "The Philidor position: the basic rook-ending draw." },
        { lesson: 'endgames-10', why: "The wrong-coloured bishop." },
        { lesson: 'defence-8', why: "Fortresses: the defender's view of the wrong bishop." },
        { lesson: 'endgames-11', why: "Pawn breakthroughs." },
        { lesson: 'endgames-12', why: "The Reti idea: a king that chases two goals at once." }
      ]
    },
    {
      id: 'practical-path', goal: 'Build your skills', side: 'both', style: 'Skills',
      focus: 'practical', level: 'Beginner',
      title: 'Practical tournament play',
      summary: "Thinking habits, the clock, converting advantages and saving bad positions.",
      why: "Starts with the routine for every move, then the clock, then the decisions that come up in real tournament games.",
      steps: [
        { lesson: 'practical-1', why: "A thinking routine for every move." },
        { lesson: 'practical-2', why: "The blunder check before you let go of the piece." },
        { lesson: 'defence-1', why: "Always ask what your opponent wants." },
        { lesson: 'practical-3', why: "Time trouble: choose the simple safe move." },
        { lesson: 'practical-4', why: "Using the increment in the last seconds." },
        { lesson: 'practical-5', why: "Converting an advantage: trade pieces, not pawns." },
        { lesson: 'practical-6', why: "Opening preparation: ideas, not lists." },
        { lesson: 'practical-7', why: "Analysing your own games after the event." },
        { lesson: 'defence-5', why: "Perpetual check: a resource to look for when worse." },
        { lesson: 'defence-6', why: "Stalemate tricks when everything else is lost." },
        { lesson: 'practical-8', why: "Offering and accepting draws." },
        { lesson: 'practical-9', why: "Swindles: making a lost position difficult." }
      ]
    },
    {
      id: 'model-games-path', goal: 'Build your skills', side: 'both', style: 'Skills',
      focus: 'strategy', level: 'Beginner',
      title: 'Learning from model games',
      summary: "Famous and illustrative games, each chosen for one idea: development, open files, pawn storms and outposts.",
      why: "Starts with short games about development and the king in the centre, then moves to plans that take a whole game to carry out.",
      steps: [
        { lesson: 'model-games-1', why: "Reti v Tartakower: development against early queen moves." },
        { lesson: 'model-games-6', why: "Punish an early queen sortie with developing moves." },
        { lesson: 'model-games-8', why: "Meet a wing set-up with a central strike." },
        { lesson: 'model-games-9', why: "Take the open file first in a symmetrical position." },
        { lesson: 'model-games-2', why: "Ed. Lasker v Thomas: the king hunt." },
        { lesson: 'model-games-4', why: "The pawn storm with kings on opposite wings." },
        { lesson: 'attack-9', why: "Morphy's Opera game: open lines against the uncastled king." },
        { lesson: 'model-games-5', why: "The minority attack from start to finish." },
        { lesson: 'model-games-7', why: "A bishop given for a permanent knight outpost." },
        { lesson: 'model-games-3', why: "Lasker v Bauer: the double bishop sacrifice." },
        { lesson: 'white-gambits-9', why: "Anderssen's Evergreen game: open lines and a double check." }
      ]
    }
  ]
};
