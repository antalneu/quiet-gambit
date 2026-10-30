/*
 * The Quiet Gambit board.
 * Renders a position, lets the learner move by tap, drag or keyboard,
 * and draws arrows/highlights. Rules come from QGChess; judgement comes
 * from whoever passes `onMove`.
 */
(function () {
  'use strict';

  var C = window.QGChess;
  var GLYPH = { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' };
  var uid = 0;

  function el(tag, cls, attrs) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    return e;
  }

  function create(host, opts) {
    opts = opts || {};
    var id = 'qgb' + (++uid);
    var state = C.parseFen(opts.fen || 'start');
    var orientation = opts.orientation || 'w';
    var interactive = !!opts.interactive;
    var selected = -1, targets = [], lastMove = null, arrows = [], highlights = [], marks = {};
    var focusSq = -1;

    var wrap = el('div', 'board-wrap');
    var grid = el('div', 'board', { role: 'grid', 'aria-label': opts.label || 'Chessboard', id: id });
    var svgNS = 'http://www.w3.org/2000/svg';
    var overlay = document.createElementNS(svgNS, 'svg');
    overlay.setAttribute('class', 'board-arrows');
    overlay.setAttribute('viewBox', '0 0 8 8');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = '<defs><marker id="' + id + '-head" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="2.6" markerHeight="2.6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="arrow-head"/></marker><marker id="' + id + '-head-reply" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="2.6" markerHeight="2.6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="arrow-head arrow-head-reply"/></marker></defs><g class="arrow-layer"></g>';
    var live = el('p', 'sr-only', { 'aria-live': 'polite', id: id + '-live' });
    var ghost = el('span', 'piece piece-ghost', { 'aria-hidden': 'true' });

    var cells = [];
    for (var r = 0; r < 8; r++) {
      var row = el('div', 'board-row', { role: 'row' });
      for (var f = 0; f < 8; f++) {
        var cell = el('div', 'sq', { role: 'gridcell', tabindex: '-1' });
        row.appendChild(cell);
        cells.push(cell);
      }
      grid.appendChild(row);
    }
    wrap.appendChild(grid);
    wrap.appendChild(overlay);
    wrap.appendChild(live);
    host.appendChild(wrap);

    // Display slot (0..63, top-left first) <-> square index (0 = a8).
    function slotToSq(slot) { return orientation === 'w' ? slot : 63 - slot; }
    function sqToSlot(sq) { return orientation === 'w' ? sq : 63 - sq; }

    function announce(msg) {
      live.textContent = '';
      window.setTimeout(function () { live.textContent = msg; }, 30);
    }

    function canMoveFrom(sq) {
      return interactive && state.board[sq] && C.colorOf(state.board[sq]) === state.turn;
    }

    function render() {
      var checkSq = C.inCheck(state, state.turn) ? state.board.indexOf(state.turn === 'w' ? 'K' : 'k') : -1;
      if (focusSq < 0) focusSq = C.parseSq(orientation === 'w' ? 'a1' : 'h8');
      for (var slot = 0; slot < 64; slot++) {
        var sq = slotToSq(slot), cell = cells[slot], p = state.board[sq];
        var f = C.fileOf(sq), rk = C.rankOf(sq);
        var cls = ['sq', (f + rk) % 2 === 1 ? 'sq-dark' : 'sq-light'];
        if (sq === selected) cls.push('is-selected');
        if (targets.indexOf(sq) >= 0) cls.push(p ? 'is-target-capture' : 'is-target');
        if (lastMove && (sq === lastMove.from || sq === lastMove.to)) cls.push('is-last');
        if (highlights.indexOf(C.name(sq)) >= 0) cls.push('is-highlight');
        if (sq === checkSq) cls.push('is-check');
        if (marks[C.name(sq)]) cls.push('is-' + marks[C.name(sq)]);
        if (canMoveFrom(sq)) cls.push('is-movable');
        cell.className = cls.join(' ');
        cell.dataset.sq = sq;
        cell.setAttribute('tabindex', sq === focusSq ? '0' : '-1');
        if (sq === selected) cell.setAttribute('aria-selected', 'true'); else cell.removeAttribute('aria-selected');
        var label = C.name(sq) + (p ? ', ' + C.pieceName(p) : ', empty');
        if (sq === selected) label += ', selected';
        if (targets.indexOf(sq) >= 0) label += p ? ', capture' : ', legal move';
        if (lastMove && sq === lastMove.to) label += ', last move';
        if (sq === checkSq) label += ', in check';
        if (highlights.indexOf(C.name(sq)) >= 0) label += ', marked';
        cell.setAttribute('aria-label', label);

        var html = '';
        if (p) html += '<span class="piece piece-' + C.colorOf(p) + '" aria-hidden="true">' + GLYPH[p.toLowerCase()] + '︎</span>';
        var bottom = slot >= 56, left = slot % 8 === 0;
        if (bottom) html += '<span class="coord coord-file" aria-hidden="true">' + 'abcdefgh'[f] + '</span>';
        if (left) html += '<span class="coord coord-rank" aria-hidden="true">' + rk + '</span>';
        cell.innerHTML = html;
      }
      grid.setAttribute('aria-label', (opts.label || 'Chessboard') + ', ' + (orientation === 'w' ? 'White' : 'Black') + ' at the bottom' +
        (interactive ? '. Arrow keys move between squares; Enter picks up and places a piece.' : ''));
      grid.classList.toggle('is-interactive', interactive);
      grid.setAttribute('aria-readonly', interactive ? 'false' : 'true');
      drawArrows();
      if (opts.onRender) opts.onRender(state);
    }

    function centre(sq) {
      var slot = sqToSlot(sq);
      return { x: (slot % 8) + 0.5, y: Math.floor(slot / 8) + 0.5 };
    }

    function drawArrows() {
      var layer = overlay.querySelector('.arrow-layer');
      var out = '';
      arrows.forEach(function (a) {
        var from = centre(C.parseSq(a[0])), to = centre(C.parseSq(a[1]));
        var dx = to.x - from.x, dy = to.y - from.y, len = Math.sqrt(dx * dx + dy * dy) || 1;
        var ex = to.x - dx / len * 0.32, ey = to.y - dy / len * 0.32;
        out += '<line x1="' + from.x + '" y1="' + from.y + '" x2="' + ex + '" y2="' + ey +
          '" class="arrow' + (a[2] ? ' arrow-' + a[2] : '') + '" marker-end="url(#' + id + (a[2] === 'reply' ? '-head-reply' : '-head') + ')"/>';
      });
      layer.innerHTML = out;
    }

    function select(sq) {
      selected = sq;
      targets = C.legalMoves(state, sq).map(function (m) { return m.to; })
        .filter(function (t, i, arr) { return arr.indexOf(t) === i; });
      render();
      var n = targets.length;
      announce(C.pieceName(state.board[sq]) + ' on ' + C.name(sq) + ' selected. ' +
        (n ? n + (n === 1 ? ' legal move.' : ' legal moves.') + ' Choose a square, or press Escape to cancel.' : 'It has no legal moves.'));
    }

    function clearSelection(silent) {
      closePromo();
      selected = -1; targets = [];
      render();
      if (!silent) announce('Selection cleared.');
    }

    function tryMove(from, to) {
      if (promoBox) return;
      var legal = C.legalMoves(state, from).filter(function (m) { return m.to === to; });
      if (!legal.length) {
        var p = state.board[to];
        if (p && C.colorOf(p) === state.turn) { select(to); return; }
        clearSelection(true);
        announce('Not a legal move for that piece. Selection cleared.');
        if (opts.onIllegal) opts.onIllegal();
        return;
      }
      if (legal[0].promo) { choosePromotion(from, to, legal); return; }
      commit(legal[0], to);
    }

    function commit(move, to) {
      // The position may have changed while a promotion chooser was open: re-check.
      var still = move && C.legalMoves(state, move.from).some(function (m) { return m.to === move.to && (m.promo || '') === (move.promo || ''); });
      if (!still) { selected = -1; targets = []; render(); return; }
      var p0 = state.board[move.from];
      var san = C.san(state, move);
      var next = C.applyMove(state, move);
      selected = -1; targets = [];
      var accepted = opts.onMove ? opts.onMove({ move: move, uci: C.uci(move), san: san, before: state, after: next }) : true;
      if (accepted !== false) {
        state = next;
        lastMove = { from: move.from, to: move.to };
        focusSq = move.to;
        announce(describeMove(san, move, p0));
      }
      render();
      if (accepted === false) flash(C.name(to), 'bad');
    }

    // Promotion: a small chooser over the board. Queen first; Escape cancels.
    var PROMO = [['q', 'queen'], ['r', 'rook'], ['b', 'bishop'], ['n', 'knight']];
    var promoBox = null;
    function closePromo() { if (promoBox && promoBox.parentNode) promoBox.parentNode.removeChild(promoBox); promoBox = null; }
    function choosePromotion(from, to, legal) {
      if (promoBox) return;
      var color = C.colorOf(state.board[from]);
      var box = el('div', 'promo', { role: 'group', 'aria-label': 'Choose a piece to promote to' });
      box.innerHTML = '<p class="promo-title">Promote to</p>' + PROMO.map(function (p) {
        return '<button type="button" class="promo-btn" data-promo="' + p[0] + '" aria-label="' + p[1] + '">' +
          '<span class="piece piece-' + color + '" aria-hidden="true">' + GLYPH[p[0]] + '︎</span></button>';
      }).join('') + '<button type="button" class="promo-cancel">Cancel</button>';
      wrap.appendChild(box);
      promoBox = box;
      announce('Choose a piece to promote to: queen, rook, bishop or knight.');
      function close() { if (promoBox === box) closePromo(); }
      box.addEventListener('click', function (e) {
        var b = e.target.closest('button');
        if (!b) return;
        close();
        if (b.dataset.promo) {
          commit(legal.filter(function (m) { return m.promo === b.dataset.promo; })[0], to);
          var c = cells[sqToSlot(focusSq)]; if (c) c.focus();
        } else {
          clearSelection();
          var c2 = cells[sqToSlot(from)]; if (c2) c2.focus();
        }
      });
      box.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); box.querySelector('.promo-cancel').click(); }
      });
      box.querySelector('.promo-btn').focus();
    }

    // "White knight f3 takes e5. Check." — words, not notation.
    function describeMove(san, move, piece) {
      if (/^O-O-O/.test(san)) return (C.colorOf(piece) === 'w' ? 'White' : 'Black') + ' castles queenside.' + suffix(san);
      if (/^O-O/.test(san)) return (C.colorOf(piece) === 'w' ? 'White' : 'Black') + ' castles kingside.' + suffix(san);
      var n = C.pieceName(piece);
      n = n.charAt(0).toUpperCase() + n.slice(1);
      var verb = san.indexOf('x') >= 0 ? ' takes ' : ' to ';
      var promo = move.promo ? ', promotes to a ' + { q: 'queen', r: 'rook', b: 'bishop', n: 'knight' }[move.promo] : '';
      return n + ' ' + C.name(move.from) + verb + C.name(move.to) + promo + '.' + suffix(san);
    }
    function suffix(san) { return /#$/.test(san) ? ' Checkmate.' : /\+$/.test(san) ? ' Check.' : ''; }

    function activate(sq) {
      if (!interactive || promoBox) return;
      if (selected >= 0) {
        if (sq === selected) { clearSelection(); return; }
        tryMove(selected, sq);
      } else if (canMoveFrom(sq)) {
        select(sq);
      } else if (state.board[sq]) {
        announce(C.pieceName(state.board[sq]) + ' on ' + C.name(sq) + '. It is ' + (state.turn === 'w' ? 'White' : 'Black') + ' to move.');
      }
    }

    function flash(square, kind) {
      var cell = cells[sqToSlot(C.parseSq(square))];
      if (!cell) return;
      cell.classList.remove('flash-good', 'flash-bad');
      void cell.offsetWidth;
      cell.classList.add('flash-' + kind);
      window.setTimeout(function () { cell.classList.remove('flash-' + kind); }, 700);
    }

    // Pointer: tap-tap, or drag a movable piece. Window listeners exist only
    // while a pointer is down, so boards from earlier pages leave nothing behind.
    var drag = null;
    function listen(on) {
      var fn = on ? 'addEventListener' : 'removeEventListener';
      window[fn]('pointermove', onPointerMove);
      window[fn]('pointerup', onPointerUp);
      window[fn]('pointercancel', onPointerCancel);
    }
    function endDrag() {
      drag = null;
      listen(false);
      if (ghost.parentNode) ghost.parentNode.removeChild(ghost);
    }
    grid.addEventListener('pointerdown', function (e) {
      var cell = e.target.closest('.sq');
      if (!cell || !interactive || e.button > 0) return;
      if (drag) endDrag();
      var sq = +cell.dataset.sq;
      var fresh = canMoveFrom(sq) && selected !== sq;
      drag = { sq: sq, x: e.clientX, y: e.clientY, moved: false, pointer: e.pointerId, fresh: fresh };
      listen(true);
      if (fresh) {
        focusSq = sq;
        select(sq);
        cells[sqToSlot(sq)].focus({ preventScroll: true });
      }
    });
    function onPointerMove(e) {
      if (!drag || e.pointerId !== drag.pointer || !drag.fresh) return;
      if (!drag.moved && Math.abs(e.clientX - drag.x) + Math.abs(e.clientY - drag.y) < 6) return;
      if (!drag.moved) {
        drag.moved = true;
        var rect = grid.getBoundingClientRect();
        ghost.style.fontSize = (rect.width / 8 * 0.78) + 'px';
        ghost.className = 'piece piece-ghost piece-' + C.colorOf(state.board[drag.sq]);
        ghost.textContent = GLYPH[state.board[drag.sq].toLowerCase()] + '\uFE0E';
        document.body.appendChild(ghost);
        cells[sqToSlot(drag.sq)].classList.add('is-dragging');
      }
      ghost.style.left = e.clientX + 'px';
      ghost.style.top = e.clientY + 'px';
    }
    function onPointerUp(e) {
      if (!drag || e.pointerId !== drag.pointer) return;
      var d = drag;
      endDrag();
      if (d.moved) {
        var under = document.elementFromPoint(e.clientX, e.clientY);
        var cell = under && under.closest && under.closest('.sq');
        if (interactive && cell && grid.contains(cell) && +cell.dataset.sq !== d.sq) tryMove(d.sq, +cell.dataset.sq);
        else render();
        return;
      }
      if (!d.fresh) {
        var c2 = e.target.closest && e.target.closest('.sq');
        if (c2 && grid.contains(c2) && +c2.dataset.sq === d.sq) {
          focusSq = d.sq;
          activate(d.sq);
          var after = cells[sqToSlot(focusSq)];
          if (after && document.activeElement && grid.contains(document.activeElement)) after.focus({ preventScroll: true });
        }
      }
    }
    function onPointerCancel() {
      if (!drag) return;
      endDrag();
      render();
    }
    // Keyboard activation for assistive tech "click"
    grid.addEventListener('click', function (e) {
      if (e.detail !== 0) return; // real pointer clicks handled above
      var cell = e.target.closest('.sq');
      if (cell) { focusSq = +cell.dataset.sq; activate(focusSq); }
    });

    grid.addEventListener('keydown', function (e) {
      var cell = e.target.closest('.sq');
      if (!cell) return;
      var slot = sqToSlot(+cell.dataset.sq), r = Math.floor(slot / 8), f = slot % 8;
      var handled = true;
      switch (e.key) {
        case 'ArrowUp': r = Math.max(0, r - 1); break;
        case 'ArrowDown': r = Math.min(7, r + 1); break;
        case 'ArrowLeft': f = Math.max(0, f - 1); break;
        case 'ArrowRight': f = Math.min(7, f + 1); break;
        case 'Home': f = 0; break;
        case 'End': f = 7; break;
        case 'Enter': case ' ':
          activate(+cell.dataset.sq);
          var again = cells[sqToSlot(focusSq)];
          if (again && !wrap.querySelector(".promo")) again.focus();
          e.preventDefault();
          return;
        case 'Escape':
          if (selected >= 0) clearSelection(); else handled = false;
          break;
        default: handled = false;
      }
      if (!handled) return;
      e.preventDefault();
      if (e.key === 'Escape') return;
      focusSq = slotToSq(r * 8 + f);
      cells.forEach(function (c) { c.setAttribute('tabindex', '-1'); });
      var next = cells[r * 8 + f];
      next.setAttribute('tabindex', '0');
      next.focus();
    });

    render();

    return {
      el: wrap,
      get state() { return state; },
      setPosition: function (fenOrState, o) {
        closePromo();
        o = o || {};
        state = typeof fenOrState === 'string' ? C.parseFen(fenOrState) : fenOrState;
        lastMove = o.lastMove ? { from: C.parseSq(o.lastMove.slice(0, 2)), to: C.parseSq(o.lastMove.slice(2, 4)) } : null;
        arrows = o.arrows || [];
        highlights = o.highlights || [];
        marks = o.marks || {};
        selected = -1; targets = [];
        render();
      },
      // Play a move programmatically (opponent replies, answers, line steps).
      playMove: function (uciStr, o) {
        closePromo();
        var m = C.moveFromUci(state, uciStr);
        if (!m) return null;
        var san = C.san(state, m), p = state.board[m.from];
        state = C.applyMove(state, m);
        lastMove = { from: m.from, to: m.to };
        selected = -1; targets = [];
        if (o && o.arrows) arrows = o.arrows;
        render();
        if (!o || !o.silent) announce(describeMove(san, m, p));
        return san;
      },
      setOrientation: function (c) { closePromo(); orientation = c; focusSq = -1; render(); },
      setInteractive: function (v) { closePromo(); interactive = !!v; selected = -1; targets = []; render(); },
      setArrows: function (a) { arrows = a || []; drawArrows(); },
      setHighlights: function (h) { highlights = h || []; render(); },
      setMarks: function (m) { marks = m || {}; render(); },
      flash: flash,
      announce: announce,
      focus: function () { var c = cells[sqToSlot(focusSq)]; if (c) c.focus(); }
    };
  }

  window.QGBoard = { create: create };
})();
