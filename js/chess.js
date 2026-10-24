/*
 * Minimal chess rules for The Quiet Gambit.
 * Legal move generation (castling, en passant, promotion), FEN in/out and SAN.
 * No engine: this knows what is legal, not what is good.
 */
(function () {
  'use strict';

  var FILES = 'abcdefgh';
  var START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

  var KNIGHT = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
  var KING = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
  var ROOK_DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  var BISHOP_DIRS = [[1, 1], [1, -1], [-1, 1], [-1, -1]];

  // Index 0 = a8, 63 = h1 (FEN order). file 0..7 = a..h, rank 1..8.
  function fileOf(i) { return i % 8; }
  function rankOf(i) { return 8 - Math.floor(i / 8); }
  function idx(file, rank) { return (8 - rank) * 8 + file; }
  function name(i) { return FILES.charAt(fileOf(i)) + rankOf(i); }
  function parseSq(s) { return idx(FILES.indexOf(s.charAt(0)), parseInt(s.charAt(1), 10)); }
  function colorOf(p) { return p ? (p === p.toUpperCase() ? 'w' : 'b') : null; }
  function other(c) { return c === 'w' ? 'b' : 'w'; }

  function parseFen(fen) {
    if (!fen || fen === 'start') fen = START_FEN;
    var parts = fen.replace(/^\s+|\s+$/g, '').split(/\s+/);
    var rows = parts[0].split('/');
    if (rows.length !== 8) throw new Error('Bad FEN rows: ' + fen);
    var board = [];
    rows.forEach(function (row) {
      for (var k = 0; k < row.length; k++) {
        var ch = row.charAt(k);
        if (/\d/.test(ch)) { for (var n = 0; n < +ch; n++) board.push(null); }
        else if (/[pnbrqkPNBRQK]/.test(ch)) board.push(ch);
        else throw new Error('Bad FEN char: ' + fen);
      }
    });
    if (board.length !== 64) throw new Error('Bad FEN length: ' + fen);
    return {
      board: board,
      turn: parts[1] === 'b' ? 'b' : 'w',
      castling: parts[2] && parts[2] !== '-' ? parts[2] : '',
      ep: parts[3] && parts[3] !== '-' ? parseSq(parts[3]) : -1,
      half: parseInt(parts[4] || '0', 10),
      full: parseInt(parts[5] || '1', 10)
    };
  }

  function toFen(s) {
    var out = '';
    for (var r = 0; r < 8; r++) {
      var empty = 0;
      for (var f = 0; f < 8; f++) {
        var p = s.board[r * 8 + f];
        if (!p) { empty++; continue; }
        if (empty) { out += empty; empty = 0; }
        out += p;
      }
      if (empty) out += empty;
      if (r < 7) out += '/';
    }
    return [out, s.turn, s.castling || '-', s.ep >= 0 ? name(s.ep) : '-', s.half, s.full].join(' ');
  }

  function clone(s) {
    return { board: s.board.slice(), turn: s.turn, castling: s.castling, ep: s.ep, half: s.half, full: s.full };
  }

  function step(i, df, dr) {
    var f = fileOf(i) + df, r = rankOf(i) + dr;
    if (f < 0 || f > 7 || r < 1 || r > 8) return -1;
    return idx(f, r);
  }

  // Is square i attacked by colour `by`?
  function attacked(s, i, by) {
    var b = s.board, k, t, p;
    var pawnDir = by === 'w' ? -1 : 1; // look back towards the attacking pawn
    var pawn = by === 'w' ? 'P' : 'p';
    t = step(i, -1, pawnDir); if (t >= 0 && b[t] === pawn) return true;
    t = step(i, 1, pawnDir); if (t >= 0 && b[t] === pawn) return true;
    for (k = 0; k < 8; k++) {
      t = step(i, KNIGHT[k][0], KNIGHT[k][1]);
      if (t >= 0 && b[t] === (by === 'w' ? 'N' : 'n')) return true;
      t = step(i, KING[k][0], KING[k][1]);
      if (t >= 0 && b[t] === (by === 'w' ? 'K' : 'k')) return true;
    }
    function ray(dirs, pieces) {
      for (var d = 0; d < dirs.length; d++) {
        var cur = i;
        for (;;) {
          cur = step(cur, dirs[d][0], dirs[d][1]);
          if (cur < 0) break;
          p = b[cur];
          if (p) {
            if (colorOf(p) === by && pieces.indexOf(p.toUpperCase()) >= 0) return true;
            break;
          }
        }
      }
      return false;
    }
    return ray(ROOK_DIRS, 'RQ') || ray(BISHOP_DIRS, 'BQ');
  }

  function kingSquare(s, c) {
    var k = c === 'w' ? 'K' : 'k';
    return s.board.indexOf(k);
  }

  function inCheck(s, c) {
    var k = kingSquare(s, c || s.turn);
    return k >= 0 && attacked(s, k, other(c || s.turn));
  }

  function pseudoMoves(s, from) {
    var b = s.board, p = b[from], c = colorOf(p), moves = [];
    if (!p || c !== s.turn) return moves;
    var type = p.toUpperCase();
    function add(to, flags) {
      var promoRank = c === 'w' ? 8 : 1;
      if (type === 'P' && rankOf(to) === promoRank) {
        'qrbn'.split('').forEach(function (pr) { moves.push({ from: from, to: to, promo: pr, flags: flags || '' }); });
      } else {
        moves.push({ from: from, to: to, flags: flags || '' });
      }
    }
    var t, d, k;
    if (type === 'P') {
      var dir = c === 'w' ? 1 : -1, startRank = c === 'w' ? 2 : 7;
      t = step(from, 0, dir);
      if (t >= 0 && !b[t]) {
        add(t);
        var t2 = step(from, 0, 2 * dir);
        if (rankOf(from) === startRank && !b[t2]) add(t2, 'double');
      }
      [-1, 1].forEach(function (df) {
        var x = step(from, df, dir);
        if (x < 0) return;
        if (b[x] && colorOf(b[x]) !== c) add(x, 'capture');
        else if (x === s.ep) add(x, 'ep');
      });
    } else if (type === 'N' || type === 'K') {
      var offs = type === 'N' ? KNIGHT : KING;
      for (k = 0; k < 8; k++) {
        t = step(from, offs[k][0], offs[k][1]);
        if (t >= 0 && colorOf(b[t]) !== c) add(t, b[t] ? 'capture' : '');
      }
      if (type === 'K') {
        var home = c === 'w' ? idx(4, 1) : idx(4, 8), opp = other(c);
        if (from === home && !attacked(s, from, opp)) {
          var ks = c === 'w' ? 'K' : 'k', qs = c === 'w' ? 'Q' : 'q';
          var rook = c === 'w' ? 'R' : 'r';
          if (s.castling.indexOf(ks) >= 0 && b[from + 3] === rook && !b[from + 1] && !b[from + 2] &&
              !attacked(s, from + 1, opp) && !attacked(s, from + 2, opp)) add(from + 2, 'castle-k');
          if (s.castling.indexOf(qs) >= 0 && b[from - 4] === rook && !b[from - 1] && !b[from - 2] && !b[from - 3] &&
              !attacked(s, from - 1, opp) && !attacked(s, from - 2, opp)) add(from - 2, 'castle-q');
        }
      }
    } else {
      var dirs = type === 'R' ? ROOK_DIRS : type === 'B' ? BISHOP_DIRS : ROOK_DIRS.concat(BISHOP_DIRS);
      for (d = 0; d < dirs.length; d++) {
        t = from;
        for (;;) {
          t = step(t, dirs[d][0], dirs[d][1]);
          if (t < 0) break;
          if (!b[t]) { add(t); continue; }
          if (colorOf(b[t]) !== c) add(t, 'capture');
          break;
        }
      }
    }
    return moves;
  }

  function applyMove(s, m) {
    var n = clone(s), b = n.board, p = b[m.from], c = colorOf(p), type = p.toUpperCase();
    var captured = b[m.to];
    b[m.to] = m.promo ? (c === 'w' ? m.promo.toUpperCase() : m.promo) : p;
    b[m.from] = null;
    if (m.flags === 'ep') { b[step(m.to, 0, c === 'w' ? -1 : 1)] = null; captured = c === 'w' ? 'p' : 'P'; }
    if (m.flags === 'castle-k') { b[m.to - 1] = b[m.to + 1]; b[m.to + 1] = null; }
    if (m.flags === 'castle-q') { b[m.to + 1] = b[m.to - 2]; b[m.to - 2] = null; }
    // Castling rights
    var cr = n.castling;
    if (type === 'K') cr = cr.replace(c === 'w' ? /[KQ]/g : /[kq]/g, '');
    [[idx(7, 1), 'K'], [idx(0, 1), 'Q'], [idx(7, 8), 'k'], [idx(0, 8), 'q']].forEach(function (pair) {
      if (m.from === pair[0] || m.to === pair[0]) cr = cr.replace(pair[1], '');
    });
    n.castling = cr;
    n.ep = m.flags === 'double' ? step(m.from, 0, c === 'w' ? 1 : -1) : -1;
    n.half = (type === 'P' || captured) ? 0 : n.half + 1;
    if (c === 'b') n.full += 1;
    n.turn = other(c);
    return n;
  }

  function legalMoves(s, from) {
    var out = [], squares = [];
    if (typeof from === 'number') squares = [from];
    else for (var i = 0; i < 64; i++) if (colorOf(s.board[i]) === s.turn) squares.push(i);
    squares.forEach(function (sq) {
      pseudoMoves(s, sq).forEach(function (m) {
        var n = applyMove(s, m);
        if (!inCheck(n, s.turn)) out.push(m);
      });
    });
    return out;
  }

  function status(s) {
    var any = legalMoves(s).length > 0, check = inCheck(s, s.turn);
    if (!any) return check ? 'checkmate' : 'stalemate';
    return check ? 'check' : 'normal';
  }

  function san(s, m) {
    var p = s.board[m.from], type = p.toUpperCase(), out;
    if (m.flags === 'castle-k') out = 'O-O';
    else if (m.flags === 'castle-q') out = 'O-O-O';
    else {
      var capture = !!s.board[m.to] || m.flags === 'ep';
      if (type === 'P') {
        out = (capture ? FILES.charAt(fileOf(m.from)) + 'x' : '') + name(m.to);
        if (m.promo) out += '=' + m.promo.toUpperCase();
      } else {
        var rivals = legalMoves(s).filter(function (o) {
          return o.to === m.to && o.from !== m.from && s.board[o.from] === p;
        });
        var dis = '';
        if (rivals.length) {
          var sameFile = rivals.some(function (o) { return fileOf(o.from) === fileOf(m.from); });
          var sameRank = rivals.some(function (o) { return rankOf(o.from) === rankOf(m.from); });
          if (!sameFile) dis = FILES.charAt(fileOf(m.from));
          else if (!sameRank) dis = String(rankOf(m.from));
          else dis = name(m.from);
        }
        out = type + dis + (capture ? 'x' : '') + name(m.to);
      }
    }
    var st = status(applyMove(s, m));
    return out + (st === 'checkmate' ? '#' : st === 'check' ? '+' : '');
  }

  function uci(m) { return name(m.from) + name(m.to) + (m.promo || ''); }

  // Find the legal move matching a UCI string ('e2e4', 'e7e8q'); null if illegal.
  function moveFromUci(s, str) {
    if (!str || str.length < 4) return null;
    var from = parseSq(str.slice(0, 2)), to = parseSq(str.slice(2, 4)), promo = str.charAt(4) || null;
    var found = legalMoves(s, from).filter(function (m) {
      return m.to === to && (m.promo || null) === (promo || (m.promo ? 'q' : null));
    });
    return found[0] || null;
  }

  var PIECE_NAMES = { p: 'pawn', n: 'knight', b: 'bishop', r: 'rook', q: 'queen', k: 'king' };
  function pieceName(p) { return p ? (colorOf(p) === 'w' ? 'white ' : 'black ') + PIECE_NAMES[p.toLowerCase()] : ''; }

  window.QGChess = {
    START_FEN: START_FEN,
    parseFen: parseFen, toFen: toFen, legalMoves: legalMoves, applyMove: applyMove,
    inCheck: inCheck, status: status, san: san, uci: uci, moveFromUci: moveFromUci,
    name: name, parseSq: parseSq, fileOf: fileOf, rankOf: rankOf, colorOf: colorOf, pieceName: pieceName
  };
})();
