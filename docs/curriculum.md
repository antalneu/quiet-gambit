# The Quiet Gambit: curriculum rationale

Audience: beginners through improving club players (roughly 0-1400). The goal is
to give a learner a small set of ideas they can actually use in their next game,
in an order where each track leans on the one before it.

Content lives in `content-draft.js` (`window.QG_CONTENT`). Twelve lessons, five
tracks, about 90 minutes of guided study in total.

## The path

| # | Lesson id | Title | Track |
|---|-----------|-------|-------|
| 1 | openings-1 | Take the centre | Openings |
| 2 | openings-2 | A solid reply: the Caro-Kann | Openings |
| 3 | gambits-1 | The Queen's Gambit | Gambits |
| 4 | gambits-2 | The King's Gambit | Gambits |
| 5 | tactics-1 | The fork | Tactics |
| 6 | tactics-2 | Pins and skewers | Tactics |
| 7 | tactics-3 | Back-rank mate | Tactics |
| 8 | middlegames-1 | Outposts and bad bishops | Middlegames |
| 9 | middlegames-2 | Open lines to the king | Middlegames |
| 10 | endgames-1 | King and pawn basics | Endgames |
| 11 | endgames-2 | Rooks behind passed pawns | Endgames |
| 12 | endgames-3 | Mate with king and queen | Endgames |

## Why this order

1. **Openings first.** A beginner's games are decided before move 15 more often
   than at any other point. Three habits (centre, development, castling) fix most
   of that, and they give the learner a vocabulary (tempo, development, centre)
   used everywhere afterwards.
2. **Gambits second.** A gambit is an opening question about *time versus
   material*. It only makes sense once "development" means something. The track
   also introduces the first real traps, so the learner starts calculating short
   forcing lines in familiar opening positions.
3. **Tactics third.** By now the learner has met forks and pins inside the opening
   traps without the labels. The tactics track names the patterns and drills them
   in clean, low-piece positions. This is the track that wins the most points
   below 1400.
4. **Middlegames fourth.** Planning (outposts, bad bishops, open files, the h7
   target) is only useful once the learner reliably spots one- and two-move
   tactics; otherwise a good plan is undone by a hanging piece.
5. **Endgames last in the path, but not least.** The ideas (opposition, the square,
   the Lucena bridge) are exact and slightly abstract, and they reward a player who
   already trades pieces with purpose. The K+Q mate closes the path, because a
   learner who reaches a won ending must be able to finish it.

Learners may jump between tracks; the order is a recommendation, not a lock.

## What each track teaches

**Openings** - centre, development and castling, shown in the Italian Game; f7 as
the weak point (Scholar's-mate puzzle). For Black, the Caro-Kann as a calm, low-
theory reply to 1.e4, with the famous smothered mate on d6 as a warning about move
order. Reference families: Italian, Ruy Lopez, Caro-Kann, London System.

**Gambits** - what a gambit is and when it is sound. The Queen's Gambit shows why
2.c4 is "not a real gambit" (the pawn comes back), and two traps punish greed on
either side (Qf3 against ...b5, and the Elephant Trap). The King's Gambit shows a
genuine sacrifice and its cost: the weakened e1-h4 diagonal. Reference gambits:
Queen's, King's, Danish.

**Tactics** - forks (knight and pawn), pins and skewers, and the back-rank mate,
including removing the last defender. Every lesson ends with puzzles that have one
clear answer.

**Middlegames** - piece quality (good and bad bishops, outposts), rooks on open
files and the seventh rank, and the classic queen-and-bishop attack on h7. The
four reference themes (piece activity, pawn structure, attacking plans, defence)
each have an annotated example position.

**Endgames** - king and pawn (opposition, the square of the pawn, "king leads,
pawn follows"), rook endings (rook behind the passed pawn, the Lucena bridge, with
the Philidor position as a reference card), and the K+Q mate with the stalemate trap.

## Prerequisites

- **Before openings-1:** knows how the pieces move, castling, check and mate.
  En passant and promotion are not needed until the endgame track (promotion only).
- **Gambits:** openings-1 (development, tempo).
- **Tactics:** none strictly, but tactics-2 refers back to the pin seen in
  openings-2, and tactics-1's pawn fork comes from an opening.
- **Middlegames:** tactics-3 (back rank and luft are used in middlegames-2).
- **Endgames:** none beyond the basics; endgames-3 can be taken at any time and
  suits complete beginners.

## Design notes for the site

- Puzzles: 18 in total; 15 are single-move, 3 are move-reply-move (Elephant Trap,
  King's Gambit Declined, back-rank deflection), each with a forced or natural
  auto-played reply. Every puzzle lists tempting wrong moves with feedback.
- Jargon is defined in plain words the first time it appears in the path, and all
  key terms are collected in the glossary (18 entries).
- Positions are either real opening lines or clearly labelled illustrative
  positions with few pieces. No puzzle depends on en passant or castling.
- British spelling throughout ("centre", "defence").
- Every FEN, line and solution was replayed with a move-legality checker
  (rules engine verified by perft) before hand-off: legal moves, SAN matching UCI,
  correct check and mate marks, side to move and castling rights.
