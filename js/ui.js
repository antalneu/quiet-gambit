/*
 * The Quiet Gambit — shared UI: helpers, icons, the board frame,
 * the line stepper and the puzzle runner. Used by every view in app.js.
 */
(function () {
  'use strict';

  var C = window.QGChess;
  var B = window.QGBoard;

  // ------------------------------------------------------------------ utils
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function frag(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content;
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  // Replies and answer replays keep their pace under reduced motion: they are
  // timing for reading and listening, not animation.
  function later(fn, ms) { return window.setTimeout(fn, ms); }

  var ICON = {
    check: '<svg class="icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    cross: '<svg class="icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M5.5 5.5l9 9M14.5 5.5l-9 9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    hint: '<svg class="icon" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10 9v5M10 6.2v.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    first: '<svg class="icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M5.5 5v10M14.5 5l-6 5 6 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    prev: '<svg class="icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M12.5 5l-6 5 6 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    next: '<svg class="icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M7.5 5l6 5-6 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    last: '<svg class="icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M14.5 5v10M5.5 5l6 5-6 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    reset: '<svg class="icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M4.5 10a5.5 5.5 0 1 0 1.7-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M4 3.5v3.2h3.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };


  // ------------------------------------------------------- position helpers
  var ORDER = ['k', 'q', 'r', 'b', 'n', 'p'];
  var PLURAL = { k: 'king', q: 'queens', r: 'rooks', b: 'bishops', n: 'knights', p: 'pawns' };
  var SINGLE = { k: 'king', q: 'queen', r: 'rook', b: 'bishop', n: 'knight', p: 'pawn' };
  function describePosition(s) {
    function side(color) {
      var parts = [];
      ORDER.forEach(function (t) {
        var sqs = [];
        s.board.forEach(function (p, i) {
          if (p && p.toLowerCase() === t && C.colorOf(p) === color) sqs.push(C.name(i));
        });
        sqs.sort();
        if (sqs.length) parts.push((sqs.length > 1 ? PLURAL[t] : SINGLE[t]) + ' ' + sqs.join(', '));
      });
      return parts.join('; ');
    }
    return 'White: ' + side('w') + '. Black: ' + side('b') + '. ' + (s.turn === 'w' ? 'White' : 'Black') + ' to move.';
  }
  function sideName(c) { return c === 'w' ? 'White' : 'Black'; }

  // A board inside its paper frame, with caption and text description.
  function boardFrame(host, opts) {
    opts = opts || {};
    var root = frag(
      '<figure class="board-frame" style="margin:0">' +
        '<div class="board-host"></div>' +
        '<figcaption class="board-caption"><span class="turn"></span><span class="note"></span></figcaption>' +
        '<details class="position-text"><summary>Position in words</summary><p></p></details>' +
      '</figure>').firstChild;
    host.appendChild(root);
    var frame = { root: root, onMove: null, note: opts.note || '', showTurn: opts.showTurn !== false };
    frame.board = B.create($('.board-host', root), {
      fen: opts.fen || 'start',
      orientation: opts.orientation || 'w',
      interactive: !!opts.interactive,
      label: opts.label || 'Chessboard',
      onMove: function (e) { return frame.onMove ? frame.onMove(e) : true; },
      onRender: function (s) {
        var turn = $('.turn', root);
        turn.innerHTML = frame.showTurn ? '<span class="turn-dot is-' + s.turn + '" aria-hidden="true"></span>' + sideName(s.turn) + ' to move' : '';
        $('.note', root).textContent = frame.note;
        $('.position-text p', root).textContent = describePosition(s);
      }
    });
    frame.setNote = function (t) { frame.note = t || ''; $('.note', root).textContent = frame.note; };
    return frame;
  }

  // ---------------------------------------------------------- line stepper
  // Replays a curated line move by move. Moves are checked as they are built.
  function lineStepper(host, frame, line, opts) {
    opts = opts || {};
    var start = C.parseFen(line.fen || 'start');
    var states = [start], sans = [], notes = [], uci = [];
    for (var i = 0; i < line.moves.length; i++) {
      var mv = C.moveFromUci(states[i], line.moves[i].uci);
      if (!mv) { console.warn('Illegal move in line', line.moves[i]); break; }
      sans.push(C.san(states[i], mv));
      notes.push(line.moves[i].note || '');
      uci.push(line.moves[i].uci);
      states.push(C.applyMove(states[i], mv));
    }
    var idx = opts.startAt != null ? Math.min(opts.startAt, sans.length) : 0;
    var id = 'ls' + Math.random().toString(36).slice(2, 8);

    var items = sans.map(function (san, k) {
      var s = states[k];
      var num = s.turn === 'w' ? '<span class="num">' + s.full + '.</span>' : (k === 0 ? '<span class="num">' + s.full + '…</span>' : '');
      return '<li>' + num + '<button type="button" data-ply="' + (k + 1) + '" aria-label="Move ' + s.full + (s.turn === 'w' ? ', White ' : ', Black ') + esc(san) + '">' + esc(san) + '</button></li>';
    }).join('');

    var el = frag(
      '<div class="stepper">' +
        '<div class="stepper-controls" role="group" aria-label="Replay the line">' +
          '<button type="button" class="btn btn-secondary btn-sm" data-go="first" aria-label="Go to start">' + ICON.first + '</button>' +
          '<button type="button" class="btn btn-secondary btn-sm" data-go="prev" aria-label="Previous move">' + ICON.prev + '</button>' +
          '<button type="button" class="btn btn-primary btn-sm" data-go="next" aria-label="Next move">' + ICON.next + '<span>Next move</span></button>' +
          '<button type="button" class="btn btn-secondary btn-sm" data-go="last" aria-label="Go to end">' + ICON.last + '</button>' +
          '<span class="stepper-pos" id="' + id + '-pos"></span>' +
        '</div>' +
        '<ol class="movelist notation" aria-label="Moves">' + items + '</ol>' +
        '<p class="move-note"></p>' +
      '</div>').firstChild;
    host.appendChild(el);

    function show() {
      var lm = idx > 0 ? uci[idx - 1] : null;
      frame.board.setPosition(states[idx], { lastMove: lm, arrows: idx === 0 && opts.startArrows ? opts.startArrows : [] });
      $$('.movelist button', el).forEach(function (b) {
        if (+b.dataset.ply === idx) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
      });
      var pos = $('.stepper-pos', el);
      if (idx === 0) pos.textContent = 'Start: ' + sans.length + ' moves';
      else {
        var s = states[idx - 1];
        pos.textContent = 'Move ' + idx + ' of ' + sans.length + ': ' + s.full + (s.turn === 'w' ? '. ' : '… ') + sans[idx - 1];
      }
      var note = idx > 0 ? notes[idx - 1] : (opts.startNote || '');
      $('.move-note', el).textContent = note;
      if (announce) frame.board.announce(pos.textContent + (idx > 0 && note ? '. ' + note : ''));
      $('[data-go="first"]', el).disabled = idx === 0;
      $('[data-go="prev"]', el).disabled = idx === 0;
      $('[data-go="next"]', el).disabled = idx === sans.length;
      $('[data-go="last"]', el).disabled = idx === sans.length;
      if (opts.onStep) opts.onStep(idx, sans.length);
    }
    var announce = false; // silent on first paint, spoken once the learner steps
    el.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      announce = true;
      if (b.dataset.ply) idx = +b.dataset.ply;
      else if (b.dataset.go === 'first') idx = 0;
      else if (b.dataset.go === 'prev') idx = Math.max(0, idx - 1);
      else if (b.dataset.go === 'next') idx = Math.min(sans.length, idx + 1);
      else if (b.dataset.go === 'last') idx = sans.length;
      show();
      if (b.disabled) { var alt = $('[data-go="' + (idx === 0 ? 'next' : 'prev') + '"]', el); if (alt && !alt.disabled) alt.focus(); }
    });
    el.addEventListener('keydown', function (e) {
      announce = true;
      if (e.key === 'ArrowRight' && idx < sans.length) { idx++; show(); e.preventDefault(); }
      else if (e.key === 'ArrowLeft' && idx > 0) { idx--; show(); e.preventDefault(); }
    });
    show();
    return {
      el: el, get index() { return idx; }, total: sans.length, sans: sans, startFull: start.full, startTurn: start.turn,
      go: function (i) { announce = true; idx = Math.max(0, Math.min(sans.length, i)); show(); }
    };
  }

  function sanLine(line) {
    var s = C.parseFen(line.fen || 'start'), out = [];
    for (var i = 0; i < line.moves.length; i++) {
      var m = C.moveFromUci(s, line.moves[i].uci);
      if (!m) break;
      if (s.turn === 'w') out.push(s.full + '.' + C.san(s, m));
      else out.push((i === 0 ? s.full + '…' : '') + C.san(s, m));
      s = C.applyMove(s, m);
    }
    return out.join(' ');
  }

  // ---------------------------------------------------------------- puzzle
  function feedbackHTML(kind, title, body) {
    var icon = kind === 'correct' ? ICON.check : kind === 'wrong' ? ICON.cross : ICON.hint;
    return icon + '<div><p class="feedback-title">' + esc(title) + '</p>' + (body ? '<p class="feedback-body">' + esc(body) + '</p>' : '') + '</div>';
  }

  // Runs a curated puzzle on a frame. Answers are prepared; legality is checked.
  function puzzle(frame, panel, step, opts) {
    opts = opts || {};
    var startFen = step.fen;
    var seqs = (step.accept && step.accept.length ? step.accept : [step.solution]).slice();
    if (!seqs.some(function (s) { return s.join() === step.solution.join(); })) seqs.unshift(step.solution);
    var history = [], solved = false, attempts = 0, misses = 0, busy = false, hinted = false, alive = true, timers = [];
    var solverColor = C.parseFen(startFen).turn;
    var matesAt = seqs.map(function (seq) {
      var s = C.parseFen(startFen);
      for (var i = 0; i < seq.length; i++) { var m = C.moveFromUci(s, seq[i]); if (!m) return -1; s = C.applyMove(s, m); }
      return C.status(s) === 'checkmate' ? seq.length : -1;
    });

    var ui = frag(
      '<div class="puzzle-panel">' +
        '<div class="feedback" role="status"></div>' +
        '<div class="btn-row puzzle-actions">' +
          '<button type="button" class="btn btn-secondary btn-sm" data-act="hint">' + ICON.hint + 'Hint</button>' +
          '<button type="button" class="btn btn-quiet btn-sm" data-act="reveal">Show answer</button>' +
          '<button type="button" class="btn btn-quiet btn-sm" data-act="reset">' + ICON.reset + 'Reset position</button>' +
        '</div>' +
      '</div>').firstChild;
    panel.appendChild(ui);
    var fb = $('.feedback', ui);

    // Timers belong to this puzzle only; destroy() cancels them so a pending
    // reply or answer replay can never land on another step's board.
    function wait(fn, ms) {
      var id = later(function () { timers.splice(timers.indexOf(id), 1); if (alive) fn(); }, ms);
      timers.push(id);
    }
    function cancelTimers() { timers.forEach(window.clearTimeout); timers = []; }
    function setButtons() {
      $('[data-act="hint"]', ui).disabled = solved || busy;
      $('[data-act="reveal"]', ui).disabled = solved || busy;
    }
    function say(kind, title, body) {
      fb.className = 'feedback is-shown is-' + kind;
      fb.innerHTML = feedbackHTML(kind, title, body);
    }
    function sameMove(a, b) { return a.slice(0, 4) === b.slice(0, 4) && (a[4] || 'q') === (b[4] || 'q'); }
    function onTrack(seq) {
      for (var i = 0; i < history.length; i++) if (!sameMove(seq[i] || '', history[i])) return false;
      return true;
    }
    function matching(uci) {
      return seqs.filter(function (s) { return onTrack(s) && s[history.length] && sameMove(s[history.length], uci); });
    }

    function reset(silent) {
      cancelTimers();
      history = []; busy = false;
      frame.board.setMarks({});
      frame.board.setOrientation(solverColor);
      frame.board.setPosition(startFen, { highlights: step.highlights || [] });
      frame.board.setInteractive(!solved);
      setButtons();
      if (!silent) { fb.className = 'feedback'; fb.innerHTML = ''; frame.board.announce('Position reset. ' + sideName(solverColor) + ' to move.'); }
    }

    function finish(wasRevealed) {
      solved = true; busy = false;
      frame.board.setInteractive(false);
      var last = history[history.length - 1];
      if (last) { var m = {}; m[last.slice(2, 4)] = 'good'; frame.board.setMarks(m); }
      say(wasRevealed ? 'info' : 'correct', wasRevealed ? 'Here is the answer' : 'Correct', step.explanation);
      var lost = wasRevealed && (!document.activeElement || document.activeElement === document.body || ui.contains(document.activeElement));
      setButtons();
      if (opts.onSolved) opts.onSolved({ revealed: wasRevealed, attempts: attempts, misses: misses });
      // Show answer disables the button that had focus; hand focus somewhere useful.
      if (lost && (document.activeElement === document.body || (document.activeElement && document.activeElement.disabled))) {
        var to = (opts.focusAfter && opts.focusAfter()) || $('[data-act="reset"]', ui);
        if (to) to.focus();
      }
    }

    var handler = frame.onMove = function (e) {
      if (!alive || solved || busy) return false;
      var hits = matching(e.uci);
      // Any mate on the final move counts when the curated answer is itself a mate.
      if (!hits.length && C.status(e.after) === 'checkmate' && matesAt.indexOf(history.length + 1) >= 0) hits = [history.concat([e.uci])];
      attempts++;
      if (!hits.length) {
        misses++;
        var custom = step.wrong && Object.keys(step.wrong).filter(function (k) { return sameMove(k, e.uci); })[0];
        var body = custom ? step.wrong[custom] :
          (C.inCheck(e.after, e.after.turn) ? 'A check, but it does not solve the problem. Look for a move that wins something or forces the issue.' :
            'That move is legal, but it misses the point of this position. Read the prompt again and look for the move that does exactly what it asks.');
        say('wrong', e.san + ' is not the move', body + (hinted ? '' : ' Stuck? Try the hint.'));
        return false;
      }
      history.push(e.uci);
      var seq = hits[0];
      if (seq.length > history.length) {
        // Opponent's reply is pending: lock the board and the helpers until it lands.
        busy = true;
        frame.board.setInteractive(false);
        setButtons();
        say('hint', e.san + ' is right. Keep going', 'Watch the reply, then find the follow-up.');
        wait(function () {
          var reply = seq[history.length];
          var rsan = frame.board.playMove(reply);
          history.push(reply);
          busy = false;
          frame.board.setInteractive(true);
          setButtons();
          say('hint', 'Good. ' + sideName(solverColor === 'w' ? 'b' : 'w') + ' has replied', 'The reply, ' + rsan + ', is marked on the board. Now find the follow-up.');
        }, 650);
        return true;
      }
      finish(false);
      return true;
    };

    ui.addEventListener('click', function (e) {
      var b = e.target.closest('[data-act]');
      if (!b || b.disabled || !alive) return;
      var act = b.dataset.act;
      if (act === 'hint') {
        hinted = true;
        var line = seqs.filter(onTrack)[0] || seqs[0];
        var next = line[history.length];
        if (next) frame.board.setHighlights((step.highlights || []).concat([next.slice(0, 2)]));
        say('hint', 'Hint', (step.hint || 'Look at every check, capture and threat first.') + (next ? ' The piece to move is marked on the board.' : ''));
      } else if (act === 'reveal') {
        reset(true);
        busy = true;
        frame.board.setInteractive(false);
        setButtons();
        var seq = seqs[0], k = 0;
        (function playNext() {
          if (k >= seq.length) { history = seq.slice(); finish(true); return; }
          frame.board.playMove(seq[k], { arrows: k % 2 === 0 ? [[seq[k].slice(0, 2), seq[k].slice(2, 4)]] : [] });
          k++;
          wait(playNext, 700);
        })();
      } else if (act === 'reset') {
        solved = false;
        reset(false);
      }
    });

    reset(true);
    return {
      get solved() { return solved; },
      ui: ui,
      destroy: function () { alive = false; cancelTimers(); if (frame.onMove === handler) frame.onMove = null; }
    };
  }


  window.QGUI = {
    esc: esc, frag: frag, $: $, $$: $$, later: later, ICON: ICON,
    describePosition: describePosition, sideName: sideName,
    boardFrame: boardFrame, lineStepper: lineStepper, sanLine: sanLine, puzzle: puzzle
  };
})();
