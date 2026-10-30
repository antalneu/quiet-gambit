/*
 * The Quiet Gambit — opening and gambit trainer.
 * Play a line from the starting position as your side. The opponent's moves
 * play themselves; you find yours. Guided mode explains and hints; practice
 * mode asks you to recall the line and scores it. Moves are checked with the
 * site's rules (chess.js); the trainer judges them only against the library's
 * lines and never claims an engine evaluation.
 */
(function () {
  'use strict';

  var U = window.QGUI, Q = window.QG, A = window.QGA, C = window.QGChess, P = window.QGProgress;
  var esc = U.esc, $ = U.$, $$ = U.$$;
  var main = A.main, SITE = A.SITE;

  // ------------------------------------------------------------ store (qg-trainer-v1)
  var KEY = 'qg-trainer-v1', DAY = 864e5, STEPS = [1, 3, 7, 14, 30, 60];
  var store = { v: 1, lines: {}, prefs: { mode: 'guided' }, last: null };
  var saveable = true;
  try {
    var raw = window.localStorage.getItem(KEY), parsed = raw && JSON.parse(raw);
    if (parsed && parsed.lines && typeof parsed.lines === 'object') {
      store.lines = parsed.lines; store.prefs = parsed.prefs || store.prefs; store.last = parsed.last || null;
    }
  } catch (e) { saveable = false; }
  function persist() { try { window.localStorage.setItem(KEY, JSON.stringify(store)); saveable = true; } catch (e) { saveable = false; } }

  function hashOf(uci) { var h = 0, s = uci.join(' '); for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }
  function rel(t) {
    var d = Math.floor((Date.now() - t) / DAY);
    return d <= 0 ? 'today' : d === 1 ? 'yesterday' : d > 30 ? 'over a month ago' : d + ' days ago';
  }
  var T = window.QGTrainer = {
    record: function (key) { return store.lines[key] || null; },
    // 'new' | 'learned' | 'practised' | 'due' | 'solid'
    status: function (key) {
      var r = store.lines[key];
      if (!r) return 'new';
      if (!r.p) return 'learned';
      if (r.due && Date.now() >= r.due) return 'due';
      return r.streak >= 4 ? 'solid' : 'practised';
    },
    statusLine: function (key) {
      var r = store.lines[key];
      if (!r) return '';
      if (T.status(key) === 'due') return 'Due for review';
      if (r.last && r.last.mode === 'practice') return 'Practised ' + rel(r.last.at) + ', ' + r.last.s + '/' + r.last.of;
      return 'Played through ' + rel(r.lastAt);
    },
    due: function () {
      return Object.keys(store.lines).filter(function (k) { return T.status(k) === 'due'; });
    },
    last: function () { return store.last; },
    count: function () { return Object.keys(store.lines).length; },
    reset: function () { store.lines = {}; store.last = null; persist(); }
  };
  function finish(seq, mode, clean, of, missed) {
    var r = store.lines[seq.key] || { n: 0, g: 0, p: 0, mist: {}, streak: 0, due: null };
    if (r.hash && r.hash !== seq.hash) { r.mist = {}; r.streak = 0; r.due = null; }
    r.hash = seq.hash; r.n++; r.lastAt = Date.now();
    if (mode === 'practice') {
      r.p++;
      r.last = { s: clean, of: of, at: r.lastAt, mode: 'practice' };
      if (!r.best || clean / of > r.best.s / r.best.of) r.best = { s: clean, of: of };
      Object.keys(r.mist).forEach(function (k) { r.mist[k] = Math.floor(r.mist[k] / 2); if (!r.mist[k]) delete r.mist[k]; });
      missed.forEach(function (i) { r.mist[i] = (r.mist[i] || 0) + 1; });
      var pct = clean / of;
      if (pct >= 0.9) r.streak = of > 1 ? r.streak + 1 : Math.max(r.streak, 1);
      else if (pct < 0.7) r.streak = 0;
      r.due = r.lastAt + STEPS[Math.min(r.streak, 5)] * DAY;
    } else {
      r.g++;
      if (!r.last) r.last = { at: r.lastAt, mode: 'guided' };
    }
    store.lines[seq.key] = r;
    store.last = null;
    persist();
    return r;
  }

  // ------------------------------------------------------------ model
  var PIECE = { p: 'pawn', n: 'knight', b: 'bishop', r: 'rook', q: 'queen', k: 'king' };
  function sameMove(a, b) { return a.slice(0, 4) === b.slice(0, 4) && (a[4] || 'q') === (b[4] || 'q'); }

  // A playable sequence for the sample line ('typical') or one of the entry's move lines.
  function build(x, which) {
    var sample = (x.line && x.line.moves) || [];
    var ln = which && which !== 'typical' ? x.lines.filter(function (l) { return l.id === which; })[0] : null;
    var moves;
    if (ln) moves = x.defining.map(function (u, i) { return { uci: u, note: sample[i] && sample[i].uci === u ? sample[i].note : '' }; }).concat(ln.moves);
    else moves = sample.length ? sample : x.defining.map(function (u) { return { uci: u }; });
    var s = C.parseFen('start'), states = [s], uci = [], san = [], notes = [];
    for (var i = 0; i < moves.length; i++) {
      var m = C.moveFromUci(s, moves[i].uci);
      if (!m) { if (window.console) console.warn('Trainer: illegal move in line', x.id, moves[i].uci); break; }
      san.push(C.san(s, m)); uci.push(moves[i].uci); notes.push(moves[i].note || '');
      s = C.applyMove(s, m); states.push(s);
    }
    if (uci.length < 2) return null;
    var learner = x.side === 'black' ? 'b' : 'w';
    var defLen = Math.min(x.defining.length, uci.length);
    var branchAt = ln ? x.defining.length : (x.branch ? x.branch.base.length : 0);
    var imp = uci.map(function (u, i) {
      if (notes[i]) return notes[i];
      if (C.status(states[i + 1]) === 'checkmate') return 'Checkmate.';
      if (i === defLen - 1) return 'This move defines the ' + (x.kind === 'gambit' ? x.name : x.short) + '.';
      if (ln && i === branchAt) return 'Here the line branches: ' + ln.name + '.';
      return '';
    });
    return {
      key: x.id + '/' + (ln ? ln.id : 'typical'), which: ln ? ln.id : 'typical', entry: x, line: ln,
      name: ln ? ln.name : 'Typical move order', kind: ln ? ln.kindLine : 'Typical move order',
      learner: learner, uci: uci, san: san, notes: notes, imp: imp, states: states,
      defLen: defLen, branchAt: branchAt, hash: hashOf(uci)
    };
  }
  function isLearnerPly(seq, i) { return (i % 2 === 0) === (seq.learner === 'w'); }
  function moveLabel(seq, i) { return Q.moveText([seq.san[i]], i); }

  // How a learner move that differs from the line relates to the library.
  function classify(seq, ply, uci, after) {
    var path = seq.uci.slice(0, ply).concat([uci]), side = seq.entry.side;
    var cands = [];
    Q.moveLines.forEach(function (ln) {
      if (ln.entry.side !== side || ln.key === seq.key || !Q.startsWith(ln.full, path)) return;
      cands.push({ entry: ln.entry, which: ln.id, label: (ln.entry.kind === 'gambit' ? ln.entry.name : ln.entry.short) + ': ' + ln.name, len: ln.full.length, same: ln.entry === seq.entry });
    });
    Q.repertoire.concat(Q.gambits).forEach(function (y) {
      if (y.side !== side) return;
      var sample = ((y.line && y.line.moves) || []).map(function (m) { return m.uci; });
      // The move heads towards this entry, or follows its main line.
      if (!Q.startsWith(y.defining, path) && !Q.startsWith(sample, path)) return;
      if (y === seq.entry && seq.which === 'typical') return;
      cands.push({ entry: y, which: 'typical', label: (y.kind === 'gambit' ? y.name : y.short) + ': typical move order', len: y.defining.length, same: y === seq.entry });
    });
    if (cands.length) {
      cands.sort(function (a, b) { return (b.same - a.same) || a.len - b.len; });
      // At most one suggestion per variation, so two buttons offer two different places to go.
      var seen = {}, uniq = cands.filter(function (c) { if (seen[c.entry.id]) return false; seen[c.entry.id] = true; return true; });
      return { kind: 'covered', cands: uniq.slice(0, 2) };
    }
    var key = Q.posKey(after);
    var same = Q.nodesAt(key).filter(function (n) { return n.side === side && n.key !== path.join(' ') && (n.defines.length || n.via.length); });
    if (same.length) {
      var e = same[0].defines[0] || same[0].via[0];
      return { kind: 'transposes', entry: e, moves: Q.moveText(same[0].sans, 0) };
    }
    return { kind: 'unknown' };
  }

  // ------------------------------------------------------------ view
  A.views.train = function (id, which, q) {
    q = q || {};
    var x = Q.line(id);
    if (!x) return A.views.notFound();
    var seq = build(x, which || q.line || 'typical');
    if (!seq) return A.views.notFound();
    var mode = q.mode === 'practice' || q.mode === 'guided' ? q.mode : (store.prefs.mode || 'guided');
    var isG = x.kind === 'gambit';
    var parent = isG ? { href: '#/gambit/' + encodeURIComponent(x.id), name: x.name } : { href: '#/family/' + encodeURIComponent(x.fam.id) + '?v=' + encodeURIComponent(x.id), name: x.fam.name };
    var title = isG ? x.name : x.short;
    var lineOpts = ['typical'].concat(x.lines.map(function (l) { return l.id; }));
    var you = seq.learner === 'w' ? 'White' : 'Black', them = seq.learner === 'w' ? 'Black' : 'White';

    main.innerHTML =
      '<div class="page page-train" data-focus>' +
        '<header class="tr-head">' +
          '<a class="back-link" href="' + parent.href + '">' + U.ICON.prev + '<span>' + esc(parent.name) + '</span></a>' +
          '<div class="tr-title"><h1 class="h1" tabindex="-1">' + esc(title) + '</h1>' +
            '<p class="tr-sub"><span class="tr-line-name">' + esc(seq.name) + '</span> · You play ' + you + '</p></div>' +
          '<div class="segmented" role="group" aria-label="Training mode">' +
            '<button type="button" data-mode="guided" aria-pressed="' + (mode === 'guided') + '">Guided</button>' +
            '<button type="button" data-mode="practice" aria-pressed="' + (mode === 'practice') + '">Practice</button>' +
          '</div>' +
        '</header>' +
        '<div class="tr-grid">' +
          '<div class="tr-stage">' +
            '<div id="tr-board"></div>' +
            '<div class="tr-progress"><p class="tr-count" id="tr-count"></p><ol class="tr-ticks" id="tr-ticks" aria-hidden="true"></ol></div>' +
          '</div>' +
          '<div class="tr-side">' +
            '<section class="tr-card" id="tr-card" aria-labelledby="tr-card-h"></section>' +
            '<div class="tr-actions" id="tr-actions"></div>' +
            '<button type="button" class="btn btn-secondary tr-drawer-btn" aria-expanded="false" aria-controls="tr-drawer">Moves and lines</button>' +
            '<div class="tr-drawer" id="tr-drawer" data-open="false">' +
              '<div class="tr-drawer-head"><h2 class="h4" tabindex="-1">Moves and lines</h2><button type="button" class="btn btn-quiet btn-icon tr-drawer-close" aria-label="Close">' + U.ICON.cross + '</button></div>' +
              '<section class="tr-block" aria-labelledby="tr-moves-h"><h2 class="h4" id="tr-moves-h">Moves</h2><ol class="movelist notation" id="tr-moves"></ol>' +
                '<div class="tr-transport" role="group" aria-label="Review moves">' +
                  '<button type="button" class="btn btn-quiet btn-icon" data-rev="first" aria-label="First position">' + U.ICON.first + '</button>' +
                  '<button type="button" class="btn btn-quiet btn-icon" data-rev="prev" aria-label="Previous move">' + U.ICON.prev + '</button>' +
                  '<button type="button" class="btn btn-quiet btn-icon" data-rev="next" aria-label="Next played move">' + U.ICON.next + '</button>' +
                  '<button type="button" class="btn btn-quiet btn-icon" data-rev="live" aria-label="Live position">' + U.ICON.last + '</button>' +
                '</div></section>' +
              '<section class="tr-block" aria-labelledby="tr-lines-h"><h2 class="h4" id="tr-lines-h">Lines in ' + esc(title) + '</h2><ul class="tr-lines">' +
                lineOpts.map(function (w) {
                  var k = x.id + '/' + w, nm = w === 'typical' ? 'Typical move order' : x.lines.filter(function (l) { return l.id === w; })[0].name;
                  var st = T.status(k);
                  return '<li><button type="button" class="tr-line" data-line="' + esc(w) + '" aria-pressed="' + (w === seq.which) + '"><span>' + esc(nm) + '</span>' + (st === 'due' ? '<span class="tr-due">Due</span>' : st !== 'new' ? '<span class="tr-done" aria-label="trained">' + U.ICON.check + '</span>' : '') + '</button></li>';
                }).join('') + '</ul>' +
                (!isG && x.fam.variations.length > 1 ? '<details class="tr-other"><summary>Other variations of the ' + esc(x.fam.name) + '</summary><ul class="plain-list">' +
                  x.fam.variations.filter(function (y) { return y !== x; }).map(function (y) { return '<li><a href="#/train/' + encodeURIComponent(y.id) + '">' + esc(y.short) + '</a> <span class="notation muted">' + esc(Q.moveText(y.branch.sans, y.branch.base.length)) + '</span></li>'; }).join('') + '</ul></details>' : '') +
              '</section>' +
              '<details class="tr-block tr-more"><summary>More about the ' + esc(title) + '</summary><div class="tr-more-body">' +
                '<p class="prose">' + esc(x.idea) + '</p>' +
                (x.plans ? ['white', 'black'].map(function (s) { return '<h3 class="h4">' + (s === 'white' ? 'White' : 'Black') + '\'s plans</h3><ul class="plan-list">' + (x.plans[s] || []).map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>'; }).join('') : '') +
                (x.pitfalls.length ? '<h3 class="h4">Traps and risks</h3><ul class="plain-list tr-pitfalls">' + x.pitfalls.map(function (p) { return '<li><strong>' + esc(p.kind) + ' for ' + (p.side === 'white' ? 'White' : 'Black') + ':</strong> ' + esc(p.title) + '. ' + esc(p.text) + '</li>'; }).join('') + '</ul>' : '') +
                (x.uncertain ? '<p class="small"><strong>Note on certainty.</strong> ' + esc(x.uncertain) + '</p>' : '') +
              '</div></details>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<p class="sr-only" role="status" id="tr-live"></p>' +
      '</div>';

    var frame = U.boardFrame($('#tr-board'), { fen: 'start', interactive: false, orientation: seq.learner, label: title + ' trainer board', note: '' });
    var board = frame.board;
    var live = $('#tr-live');
    function say(t) { live.textContent = ''; window.setTimeout(function () { live.textContent = t; }, 40); }
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Run state
    var run;
    function newRun(keepPrefix) {
      cancel();
      run = { ply: 0, cursor: 0, state: 'turn', hint: 0, notice: null, wrong: {}, assisted: {}, missed: {}, shared: keepPrefix || 0, token: 0, done: false };
      board.setPosition(seq.states[0]);
      for (var i = 0; i < run.shared; i++) { board.playMove(seq.uci[i], { silent: true }); run.ply = i + 1; }
      run.cursor = run.ply;
    }
    function cancel() { if (run) { run.token++; window.clearTimeout(run.timer); } }
    function learnerToMove() { return run.ply < seq.uci.length && isLearnerPly(seq, run.ply); }

    // ---- flow
    function next(prefixMsg) {
      if (run.ply >= seq.uci.length) return end();
      if (learnerToMove()) {
        run.state = 'turn'; run.hint = 0;
        board.setArrows([]); board.setHighlights([]);
        board.setInteractive(true);
        render();
        say((prefixMsg || '') + 'Your move.');
      } else {
        run.state = 'opp';
        board.setInteractive(false);
        render();
        var t = ++run.token;
        var delay = reduce ? 0 : (run.ply === 0 ? 450 : (seq.imp[run.ply - 1] ? 1100 : 650));
        run.timer = window.setTimeout(function () { if (t === run.token) oppMove(prefixMsg); }, delay);
      }
    }
    function oppMove(prefixMsg) {
      var i = run.ply;
      board.playMove(seq.uci[i], { silent: true });
      run.ply++; run.cursor = run.ply;
      var note = seq.imp[i];
      var msg = (prefixMsg || '') + them + ' plays ' + seq.san[i] + '.' + (note && mode === 'guided' ? ' Note: ' + note : '');
      if (run.ply >= seq.uci.length) { say(msg); return end(); }
      next(msg + ' ');
    }
    frame.onMove = function (e) {
      if (!run || run.state !== 'turn' || run.cursor !== run.ply) return false;
      var i = run.ply, exp = seq.uci[i];
      if (sameMove(e.uci, exp) && (e.uci.length === 4 || exp.length === 5 || e.uci[4] === 'q')) {
        if (exp.length === 5 && e.uci[4] !== exp[4]) return wrongMove(e);
        accept(false);
        return true;
      }
      return wrongMove(e);
    };
    function accept(assisted) {
      var i = run.ply;
      if (assisted) { run.assisted[i] = true; if (mode === 'practice') run.missed[i] = true; board.playMove(seq.uci[i], { silent: true }); }
      run.notice = null; run.hint = 0;
      board.setArrows([]); board.setHighlights([]);
      board.setInteractive(false);
      run.ply++; run.cursor = run.ply;
      store.last = { key: seq.key, ply: run.ply, at: Date.now(), mode: mode }; persist();
      var note = seq.imp[i];
      var pre = assisted ? 'Move shown: ' + seq.san[i] + '. ' : 'Correct. ';
      if (run.ply >= seq.uci.length) { render(); say(pre + (note || '')); return window.setTimeout(end, reduce ? 0 : 800); }
      next(pre + (note ? note + ' ' : ''));
    }
    function wrongMove(e) {
      var i = run.ply;
      var cls = classify(seq, i, e.uci, e.after);
      if (cls.kind !== 'covered') { run.wrong[i] = (run.wrong[i] || 0) + 1; if (mode === 'practice') run.missed[i] = true; }
      run.notice = { cls: cls, san: e.san };
      render();
      if (cls.kind === 'covered') say('That is another line: ' + cls.cands[0].label + '. Switch to it, or try again.');
      else if (cls.kind === 'transposes') say('Same position as ' + (cls.entry.kind === 'gambit' ? cls.entry.name : cls.entry.name) + ' by another move order. Try again.');
      else say(mode === 'practice' ? 'Not that move. Try again.' : 'Not that move. ' + e.san + ' is legal but not in this line. Try again.');
      return false;
    }
    function hint() {
      if (run.state !== 'turn') return;
      var i = run.ply, u = seq.uci[i], st = seq.states[i], p = st.board[C.parseSq(u.slice(0, 2))];
      var piece = PIECE[String(p).toLowerCase()] || 'piece';
      if (mode === 'practice' || run.hint >= 2) { accept(true); return; }
      run.hint++;
      run.wrong[i] = run.wrong[i] || 0;
      if (run.hint === 1) { board.setHighlights([u.slice(0, 2)]); say('Hint 1 of 3. Move your ' + piece + '.'); }
      else { board.setArrows([[u.slice(0, 2), u.slice(2, 4)]]); say('Hint 2 of 3. ' + piece.charAt(0).toUpperCase() + piece.slice(1) + ' from ' + u.slice(0, 2) + ' to ' + u.slice(2, 4) + (u[4] ? ', promoting to a ' + PIECE[u[4]] : '') + '.'); }
      if (run.hint >= 2) run.assisted[i] = true;
      render();
    }
    function retry() {
      run.notice = null;
      board.setPosition(seq.states[run.ply], { lastMove: seq.uci[run.ply - 1] || null });
      render();
      board.focus();
      say('Try again. Your move.');
    }
    function restart(newMode) {
      if (newMode) { mode = newMode; store.prefs.mode = mode; persist(); }
      newRun(0);
      $$('[data-mode]').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.mode === mode ? 'true' : 'false'); });
      A.replaceHash(hrefFor(seq.which, mode));
      next('Restarted. ');
    }
    function end() {
      run.state = 'end'; run.done = true;
      board.setInteractive(false);
      var learnerPlies = seq.uci.filter(function (u, i) { return isLearnerPly(seq, i) && i >= run.shared; }).length || 1;
      var missed = Object.keys(run.missed).map(Number);
      var helped = Object.keys(run.assisted).length;
      var clean = learnerPlies - missed.length;
      run.result = { clean: clean, of: learnerPlies, missed: missed, helped: helped };
      run.record = finish(seq, mode, clean, learnerPlies, missed);
      render();
      var h = $('#tr-end-h'); if (h) h.focus();
      say(mode === 'practice' ? 'Line complete. Score ' + clean + ' out of ' + learnerPlies + '.' + (missed.length ? ' Review move' + (missed.length > 1 ? 's ' : ' ') + missed.map(function (i) { return Math.floor(i / 2) + 1; }).join(' and ') + '.' : '') : 'Line complete. ' + helped + (helped === 1 ? ' move' : ' moves') + ' needed help.');
    }

    // ---- review (look back without disturbing the run)
    function review(k) {
      k = Math.max(0, Math.min(run.ply, k));
      run.cursor = k;
      if (k === run.ply) {
        board.setPosition(seq.states[k], { lastMove: seq.uci[k - 1] || null });
        if (run.state === 'turn') board.setInteractive(true);
        render();
        say('Back at the live position. ' + (run.state === 'turn' ? 'Your move.' : ''));
        return;
      }
      board.setInteractive(false);
      board.setPosition(seq.states[k], { lastMove: seq.uci[k - 1] || null });
      render();
      say(k ? 'Move ' + k + ' of ' + seq.uci.length + '. ' + moveLabel(seq, k - 1) + (seq.imp[k - 1] && mode === 'guided' ? '. ' + seq.imp[k - 1] : '') : 'Starting position.');
    }

    // ---- rendering
    function hrefFor(w, m) { return '#/train/' + encodeURIComponent(x.id) + '/' + encodeURIComponent(w) + (m && m !== 'guided' ? '?mode=' + m : ''); }
    function nextLine() { var i = lineOpts.indexOf(seq.which); return i >= 0 && i < lineOpts.length - 1 ? lineOpts[i + 1] : null; }
    function nextEntry() {
      var list = isG ? Q.gambits.filter(function (g) { return g.side === x.side && A.groupOf(g) === A.groupOf(x); }) : x.fam.variations;
      var i = list.indexOf(x);
      return i >= 0 && i < list.length - 1 ? list[i + 1] : null;
    }
    function render() {
      var n = seq.uci.length, reviewing = run.cursor < run.ply;
      // progress
      $('#tr-count').textContent = run.state === 'end' ? 'Line complete: ' + n + ' moves' :
        (run.ply === 0 ? 'Start' : 'Move ' + run.ply + ' of ' + n) + ' · ' + (run.state === 'turn' ? 'Your move' : them + ' to move');
      $('#tr-ticks').innerHTML = seq.uci.map(function (u, i) {
        var cls = isLearnerPly(seq, i) ? 'is-you' : 'is-them';
        if (i < run.ply) cls += run.missed[i] ? ' is-missed' : run.assisted[i] ? ' is-helped' : ' is-done';
        if (i === run.cursor - 1) cls += ' is-current';
        return '<li class="' + cls + '"></li>';
      }).join('');
      // moves played (future moves are never shown, so practice stays honest)
      $('#tr-moves').innerHTML = seq.san.slice(0, run.ply).map(function (s, i) {
        var num = i % 2 === 0 ? '<span class="num">' + (i / 2 + 1) + '.</span>' : '';
        var mark = run.missed[i] ? ' (missed)' : run.assisted[i] ? ' (with help)' : '';
        return '<li>' + num + '<button type="button" data-ply="' + (i + 1) + '" class="' + (isLearnerPly(seq, i) ? 'is-you' : '') + (run.missed[i] ? ' is-missed' : '') + '"' + (i + 1 === run.cursor ? ' aria-current="step"' : '') + ' aria-label="Move ' + (Math.floor(i / 2) + 1) + (i % 2 ? ', Black ' : ', White ') + esc(s) + mark + '">' + esc(s) + '</button></li>';
      }).join('') + (run.ply < n ? '<li class="tr-togo">' + (n - run.ply) + ' to go</li>' : '');
      $('[data-rev="prev"]').disabled = run.cursor === 0;
      $('[data-rev="first"]').disabled = run.cursor === 0;
      $('[data-rev="next"]').disabled = !reviewing;
      $('[data-rev="live"]').disabled = !reviewing;

      // card + actions
      var card = $('#tr-card'), acts = $('#tr-actions');
      var last = run.cursor - 1;
      var lastNote = last >= 0 && (mode === 'guided' || run.state === 'end' || reviewing || isLearnerPly(seq, last) || true) ? seq.imp[last] : '';
      if (run.state === 'end') {
        var r = run.result, nl = nextLine(), ne = nextEntry();
        var primary = mode === 'guided' ? '<button type="button" class="btn btn-primary" data-act="practice">Practise this line</button>' :
          r.missed.length ? '<button type="button" class="btn btn-primary" data-act="again">Practise it again</button>' :
          nl ? '<a class="btn btn-primary" href="' + hrefFor(nl, mode) + '">Next line</a>' : '<button type="button" class="btn btn-primary" data-act="again">Practise it again</button>';
        card.innerHTML = '<h2 class="h3" id="tr-end-h" tabindex="-1">Line complete</h2>' +
          (mode === 'practice' ? '<p class="tr-score"><span class="tr-score-num">' + r.clean + '/' + r.of + '</span> moves recalled without help' + (r.missed.length ? '' : '. Well done.') + '</p>' +
            (r.missed.length ? '<p>Look again at: ' + r.missed.map(function (i) { return '<button type="button" class="link-btn" data-ply="' + (i + 1) + '">' + esc(moveLabel(seq, i)) + '</button>'; }).join(', ') + '</p>' : '')
            : '<p class="prose">' + (r.helped ? r.helped + (r.helped === 1 ? ' move' : ' moves') + ' needed a hint. ' : 'You found every move. ') + 'Now try it from memory in practice mode.</p>') +
          (!saveable ? '<p class="small muted">Results are not being saved in this browser.</p>' : '');
        acts.innerHTML = primary +
          (nl && !(mode === 'practice' && !r.missed.length) ? '<a class="btn btn-secondary" href="' + hrefFor(nl, mode) + '">Next line</a>' : '') +
          (ne ? '<a class="btn btn-quiet" href="#/train/' + encodeURIComponent(ne.id) + '">Next ' + (isG ? 'gambit' : 'variation') + ': ' + esc(isG ? ne.name : ne.short) + '</a>' : '') +
          '<a class="btn btn-quiet" href="' + parent.href + '">Back to the ' + (isG ? 'gambit' : 'opening') + '</a>';
        return;
      }
      if (reviewing) {
        card.innerHTML = '<h2 class="sr-only" id="tr-card-h">Reviewing</h2><p class="tr-move notation">' + (last >= 0 ? esc(moveLabel(seq, last)) : 'Start') + '</p>' +
          (lastNote && mode === 'guided' ? '<p class="tr-note">' + esc(lastNote) + '</p>' : '') + '<p class="small muted">You are looking back at move ' + run.cursor + '. The line waits for you.</p>';
        acts.innerHTML = '<button type="button" class="btn btn-primary" data-rev="live">Back to the live position</button>';
        return;
      }
      var nt = run.notice;
      if (nt) {
        var c = nt.cls, body;
        if (c.kind === 'covered') body = '<p class="fb-title">' + esc(nt.san) + ' is another line in the library</p><p>' + esc(c.cands[0].label) + '. It is not a mistake, just a different branch.</p>';
        else if (c.kind === 'transposes') body = '<p class="fb-title">Same position, different move order</p><p>' + esc(nt.san) + ' reaches the position of ' + esc(c.entry.name) + ' (' + esc(c.moves) + '). This line goes another way.</p>';
        else body = '<p class="fb-title">Not the move in this line</p><p>' + (mode === 'practice' ? 'Try to recall the move from this line.' : esc(nt.san) + ' is legal, but it is not this line\'s move here. The trainer cannot say whether it is good or bad, only that the line continues differently.') + '</p>';
        card.innerHTML = '<h2 class="sr-only" id="tr-card-h">Feedback</h2><div class="fb ' + (c.kind === 'unknown' ? 'fb-bad' : 'fb-info') + '">' + (c.kind === 'unknown' ? U.ICON.cross : U.ICON.hint) + '<div>' + body + '</div></div>';
        acts.innerHTML = '<button type="button" class="btn btn-primary" data-act="retry">Try again</button>' +
          (c.kind === 'covered' ? c.cands.map(function (k, j) { return '<button type="button" class="btn btn-secondary" data-switch="' + j + '">Switch to ' + esc(k.label) + '</button>'; }).join('') : '') +
          (mode === 'guided' && (run.wrong[run.ply] || 0) >= 2 ? '<button type="button" class="btn btn-quiet" data-act="show">Show the move</button>' : '');
        return;
      }
      var prompt = run.state === 'turn'
        ? (mode === 'practice' ? 'Recall ' + you + '\'s move ' + (Math.floor(run.ply / 2) + 1) + '.' : 'Find ' + you + '\'s move ' + (Math.floor(run.ply / 2) + 1) + '.')
        : them + ' is replying…';
      card.innerHTML = '<h2 class="sr-only" id="tr-card-h">Current move</h2>' +
        (last >= 0 ? '<p class="tr-move notation">' + esc(moveLabel(seq, last)) + '</p>' + (lastNote ? '<p class="tr-note">' + esc(lastNote) + '</p>' : '') : '<p class="tr-note">' + esc(seq.entry.summary) + '</p>') +
        '<p class="tr-prompt">' + esc(prompt) + '</p>' +
        (run.hint ? '<p class="fb fb-hint">' + U.ICON.hint + '<span>' + (run.hint === 1 ? 'The highlighted piece moves.' : 'Follow the arrow.') + '</span></p>' : '');
      acts.innerHTML = run.state === 'turn'
        ? (mode === 'guided' ? '<button type="button" class="btn btn-secondary" data-act="hint">' + U.ICON.hint + (run.hint === 0 ? 'Hint' : run.hint === 1 ? 'Show the target' : 'Show the move') + '</button>' :
            '<button type="button" class="btn btn-secondary" data-act="hint">Show the move</button>') +
          '<button type="button" class="btn btn-quiet" data-act="restart">' + U.ICON.reset + 'Restart</button>'
        : '<button type="button" class="btn btn-quiet" data-act="restart">' + U.ICON.reset + 'Restart</button>';
    }

    // ---- events
    var root = $('.page-train');
    function onClick(e) {
      var b = e.target.closest('button, a');
      if (!b || !root.contains(b)) return;
      if (b.dataset.mode) { if (b.dataset.mode !== mode) restart(b.dataset.mode); return; }
      if (b.dataset.act === 'show') { if (run.state === 'turn') accept(true); return; }
      if (b.dataset.act === 'hint') { hint(); return; }
      if (b.dataset.act === 'retry') { retry(); return; }
      if (b.dataset.act === 'restart' || b.dataset.act === 'again') { restart(); return; }
      if (b.dataset.act === 'practice') { restart('practice'); return; }
      if (b.dataset.switch != null && run.notice) { var k = run.notice.cls.cands[+b.dataset.switch]; location.hash = '#/train/' + encodeURIComponent(k.entry.id) + '/' + encodeURIComponent(k.which) + (mode !== 'guided' ? '?mode=' + mode : ''); return; }
      if (b.dataset.line) { switchLine(b.dataset.line); return; }
      if (b.dataset.ply) { review(+b.dataset.ply); return; }
      if (b.dataset.rev) {
        var r = b.dataset.rev;
        review(r === 'first' ? 0 : r === 'prev' ? run.cursor - 1 : r === 'next' ? run.cursor + 1 : run.ply);
        if (r === 'live') board.focus();
        return;
      }
      if (b.classList.contains('tr-drawer-btn')) { drawer(true); return; }
      if (b.classList.contains('tr-drawer-close')) { drawer(false); }
    }
    function switchLine(w) {
      var nseq = build(x, w);
      if (!nseq || w === seq.which) return;
      var shared = 0;
      while (shared < run.ply && shared < nseq.uci.length - 1 && nseq.uci[shared] === seq.uci[shared]) shared++;
      seq = nseq;
      $('.tr-line-name').textContent = seq.name;
      $$('.tr-line').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.line === w ? 'true' : 'false'); });
      A.replaceHash(hrefFor(w, mode));
      newRun(mode === 'guided' ? shared : 0);
      drawer(false);
      next('Now training ' + seq.name + '.' + (shared ? ' Both lines share the first ' + shared + ' moves.' : '') + ' ');
    }
    var drawerEl = $('#tr-drawer'), drawerBtn = $('.tr-drawer-btn');
    function drawer(open) {
      drawerEl.dataset.open = open ? 'true' : 'false';
      drawerBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) $('.tr-drawer-head h2').focus(); else if (document.activeElement && drawerEl.contains(document.activeElement)) drawerBtn.focus();
    }
    function onKey(e) {
      if (e.defaultPrevented || e.ctrlKey || e.altKey || e.metaKey || !root.contains(e.target)) return;
      if (/^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName) || e.target.closest('.promo')) return;
      var onBoard = e.target.closest('.board');
      var k = e.key;
      if (k === 'Escape') { if (drawerEl.dataset.open === 'true') { drawer(false); e.preventDefault(); } else if (run.cursor < run.ply) { review(run.ply); e.preventDefault(); } return; }
      if (onBoard && /^Arrow|Home|End/.test(k)) return;
      if (k === 'h' || k === 'H') { if (run.state === 'turn' && !run.notice) hint(); e.preventDefault(); }
      else if (k === 'r' || k === 'R') { if (run.notice) retry(); else if (run.state === 'end') restart(); e.preventDefault(); }
      else if (k === '[') { review(run.cursor - 1); e.preventDefault(); }
      else if (k === ']') { review(run.cursor + 1); e.preventDefault(); }
      else if (k === 'l' || k === 'L') { review(run.ply); e.preventDefault(); }
      else if ((k === 'ArrowLeft' || k === 'ArrowRight') && e.target.closest('#tr-moves, .tr-transport')) { review(run.cursor + (k === 'ArrowLeft' ? -1 : 1)); e.preventDefault(); }
    }
    root.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    A.teardown.push(function () { cancel(); document.removeEventListener('keydown', onKey); frame.onMove = null; });

    newRun(0);
    next(title + ', ' + seq.name + '. You play ' + you + '. ' + (mode === 'practice' ? 'Practice mode. ' : ''));
    return { title: 'Train: ' + title + ' · ' + SITE };
  };
  T.build = build;
})();
