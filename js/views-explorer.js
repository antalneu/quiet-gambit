/*
 * The Quiet Gambit — Opening Explorer.
 * Follow the library's opening tree move by move: see the choices covered at each
 * position, the variations that pass through it, where other move orders reach the
 * same position, and compare two variations side by side.
 */
(function () {
  'use strict';

  var U = window.QGUI, Q = window.QG, A = window.QGA, C = window.QGChess;
  var esc = U.esc, $ = U.$, $$ = U.$$;
  var main = A.main, SITE = A.SITE;

  function nameOf(x) { return x.kind === 'family' ? x.name : x.kind === 'opening' ? x.name : x.name; }
  function moveLabel(n) { return Q.moveText([n.sans[n.sans.length - 1]], n.path.length - 1); }

  // Every variation and gambit for a side, grouped for <select> menus.
  function entryOptions(side, cur) {
    var groups = A.GROUPS[side];
    var out = '';
    groups.forEach(function (g) {
      var fams = Q.families.filter(function (f) { return f.side === side && f.group === g && f.variations.length; })
        .sort(function (a, b) { return a.name.localeCompare(b.name); });
      fams.forEach(function (f) {
        out += '<optgroup label="' + esc(f.name + ' (' + A.GROUP_LABEL[g] + ')') + '">' + f.variations.map(function (x) {
          return '<option value="' + esc(x.id) + '"' + (x.id === cur ? ' selected' : '') + '>' + esc(x.short) + '</option>';
        }).join('') + '</optgroup>';
      });
    });
    var gs = Q.gambits.filter(function (g) { return g.side === side; }).sort(function (a, b) { return a.name.localeCompare(b.name); });
    if (gs.length) out += '<optgroup label="' + A.GAMBIT_LABEL[side] + '">' + gs.map(function (x) {
      return '<option value="' + esc(x.id) + '"' + (x.id === cur ? ' selected' : '') + '>' + esc(x.name) + '</option>';
    }).join('') + '</optgroup>';
    return out;
  }

  A.views.explorer = function (q) {
    q = q || {};
    var side = q.side === 'black' ? 'black' : 'white';
    var root = Q.tree(side);
    var start = (q.at || '').split('.').filter(Boolean);
    var node = Q.node(side, start) || root;
    var forward = {}; // node key -> child last visited, so Forward retraces your steps

    main.innerHTML = '<div class="container">' + A.pageHead({
        trail: [['Library', '#/library'], ['Opening Explorer']],
        title: 'Opening Explorer', next: true,
        lede: 'Follow an opening move by move. At each position you see the choices the library covers, the variations that pass through, and where another move order reaches the same position. Openings branch with the opponent\'s replies: nothing here is forced.',
        extra: '<div class="toolbar"><nav class="segmented" aria-label="Repertoire side">' +
          ['white', 'black'].map(function (s) {
            return '<a href="' + A.explorerHref(s) + '"' + (s === side ? ' aria-current="page"' : '') + '>' + A.side(s, A.OPEN_LABEL[s]) + '</a>';
          }).join('') + '</nav>' +
          '<p class="small muted">' + (side === 'white' ? 'Your moves are White\'s. Black\'s replies show what you need to be ready for.' : 'Your moves are Black\'s. White\'s moves show what you need to be ready for.') + '</p></div>'
      }) +
      '<div class="explorer" id="explorer">' +
        '<div class="ex-board"><div id="ex-board"></div>' +
          '<div class="ex-controls" role="group" aria-label="Move through the tree">' +
            '<button type="button" class="btn btn-secondary btn-sm" data-go="start" aria-label="Back to the starting position">' + U.ICON.first + '</button>' +
            '<button type="button" class="btn btn-secondary btn-sm" data-go="back" aria-label="Back one move">' + U.ICON.prev + '<span>Back</span></button>' +
            '<button type="button" class="btn btn-secondary btn-sm" data-go="fwd" aria-label="Forward one move">' + '<span>Forward</span>' + U.ICON.next + '</button>' +
          '</div>' +
          '<p class="small muted ex-help">Play a move on the board, pick one from the list, or use the arrow keys: left goes back, right goes forward.</p>' +
        '</div>' +
        '<div class="ex-panel">' +
          '<nav class="ex-path" aria-label="Moves played" id="ex-path"></nav>' +
          '<div id="ex-where" class="ex-where"></div>' +
          '<div id="ex-moves"></div>' +
          '<div id="ex-here"></div>' +
        '</div>' +
      '</div>' +
      '<section class="section" id="compare" aria-labelledby="cmp-h" tabindex="-1"><div class="section-head"><h2 class="h2" id="cmp-h">Compare two variations</h2>' +
        '<p class="muted">Pick two lines to see the moves they share, where they part, and how their plans differ.</p></div>' +
        '<form class="filters filters-compact" onsubmit="return false" aria-label="Choose variations to compare">' +
          '<div class="field"><label for="cmp-a">First</label><select id="cmp-a"><option value="">Choose a variation</option>' + entryOptions(side, q.a) + '</select></div>' +
          '<div class="field"><label for="cmp-b">Second</label><select id="cmp-b"><option value="">Choose a variation</option>' + entryOptions(side, q.b) + '</select></div>' +
          '<div class="field field-action"><button type="button" class="btn btn-secondary btn-sm" data-cmp-here>Use the lines at the current position</button></div>' +
        '</form><div id="cmp-out" aria-live="polite"></div></section>' +
    '</div>';

    var frame = U.boardFrame($('#ex-board'), { fen: 'start', interactive: true, label: 'Explorer board', orientation: side === 'black' ? 'b' : 'w', note: '' });
    frame.onMove = function (e) {
      var child = node.children.filter(function (c) { return c.path[c.path.length - 1].slice(0, 4) === e.uci.slice(0, 4); })[0];
      if (!child) {
        A.status(e.san + ' is legal, but the library does not cover it from this position. Choose one of the listed moves.');
        $('#ex-moves').querySelector('.ex-note-miss').textContent = e.san + ' is not covered here. The moves below are the ones the library explains.';
        return false;
      }
      window.setTimeout(function () { go(child, true); }, 0);
      return true;
    };

    function go(n, announce) {
      if (node && n.parent === node) forward[node.key] = n;
      node = n;
      render(announce);
      A.replaceHash('#/explorer' + A.buildQuery({ side: side, at: n.path.join('.'), a: $('#cmp-a').value, b: $('#cmp-b').value }));
    }

    function render(announce) {
      var s = Q.stateAt(node.path) || C.parseFen('start');
      frame.board.setPosition(s, { lastMove: node.path[node.path.length - 1] || null });
      frame.setNote(node.path.length ? node.path.length + (node.path.length === 1 ? ' move' : ' moves') + ' played' : 'Starting position');

      // Path: every ply is a link back to that position.
      var crumbs = [root];
      for (var p = node; p && p !== root; p = p.parent) crumbs.splice(1, 0, p);
      $('#ex-path').innerHTML = '<ol>' + crumbs.map(function (c, i) {
        var label = i === 0 ? 'Start' : moveLabel(c);
        var cur = c === node;
        return '<li><button type="button" class="ex-ply notation" data-node="' + esc(c.key) + '"' + (cur ? ' aria-current="step"' : '') + '>' + esc(label) + '</button></li>';
      }).join('') + '</ol>';

      var loc = Q.locate(node);
      var where = [];
      if (loc.family) where.push('<a href="' + A.href(loc.family) + '">' + esc(loc.family.name) + '</a>');
      if (loc.entry && (!loc.family || loc.entry.kind === 'gambit' || loc.entry.short)) where.push('<a href="' + A.href(loc.entry) + '">' + esc(loc.entry.kind === 'gambit' ? loc.entry.name : loc.entry.short) + '</a>');
      if (loc.lines.length === 1) where.push('<a href="' + A.href(loc.lines[0]) + '">' + esc(loc.lines[0].name) + '</a>');
      var notes = node.notes.slice(0, 2);
      // Families that begin further down this path, for positions before any family starts.
      var ahead = where.length ? [] : Q.families.filter(function (f) {
        return f.side === side && f.variations.length && f.root.length > node.path.length && Q.startsWith(f.root, node.path);
      });
      $('#ex-where').innerHTML = '<p class="ex-where-label">' + (node === root ? 'Starting position' : where.length || !ahead.length ? 'You are in' : 'Where this leads') + '</p>' +
        (node === root ? '<p class="prose">Choose a first move to begin.</p>' : where.length ? '<p class="ex-where-trail">' + where.join('<span aria-hidden="true"> › </span>') + '</p>' : (ahead.length ? '<p class="prose">On the way to ' + ahead.slice(0, 4).map(function (f) { return '<a href="' + A.href(f) + '">' + esc(f.name) + '</a>'; }).join(', ') + (ahead.length > 4 ? ' and ' + (ahead.length - 4) + ' more' : '') + '.</p>' : '<p class="prose muted">A position on the way to a named line.</p>')) +
        (notes.length ? '<div class="ex-why"><p class="ex-where-label">Why ' + esc(moveLabel(node)) + '</p>' + notes.map(function (n) { return '<p class="prose">' + esc(n.text) + '</p>'; }).join('') + '</div>' : '');

      // Choices from here.
      var turn = s.turn === 'w' ? 'white' : 'black';
      var mine = turn === side;
      var kids = node.children;
      $('#ex-moves').innerHTML = '<h2 class="h4">' + (kids.length ? (mine ? 'Your choices' : (turn === 'white' ? 'White' : 'Black') + '\'s replies to be ready for') + ' <span class="count">' + kids.length + '</span>' : 'End of the covered moves') + '</h2>' +
        (kids.length ? '<p class="small muted">' + (kids.length > 1 ? (mine ? 'The library covers ' + kids.length + ' moves for you here.' : 'The opening branches here: each reply leads to different plans.') : (mine ? 'The library covers one move for you here.' : 'The library covers one reply here.')) + '</p>' : '<p class="small muted">The library\'s lines stop here. Open a variation below for its plans, or go back to try another branch.</p>') +
        '<p class="small ex-note-miss" aria-live="polite"></p>' +
        (kids.length ? '<ul class="ex-kids">' + kids.map(function (c) {
          var names = Object.keys(c.below).map(function (id) { return Q.line(id); }).filter(Boolean)
            .sort(function (a, b) { return a.defining.length - b.defining.length; });
          var lineHere = c.lineEnds.length ? c.lineEnds : [];
          var label = names.slice(0, 3).map(function (x) { return x.kind === 'gambit' ? x.name : x.short; }).join(', ') + (names.length > 3 ? ' and ' + (names.length - 3) + ' more' : '');
          if (!label && lineHere.length) label = lineHere[0].name;
          if (!label && c.via.length) label = 'Part of ' + (c.via[0].kind === 'gambit' ? c.via[0].name : c.via[0].short);
          return '<li><button type="button" class="ex-kid" data-node="' + esc(c.key) + '">' +
            '<span class="ex-kid-move notation">' + esc(moveLabel(c)) + '</span>' +
            '<span class="ex-kid-names">' + esc(label) + '</span>' +
            (c.total ? '<span class="tree-count" title="Named variations and gambits after this move">' + c.total + '</span>' : '') +
          '</button></li>';
        }).join('') + '</ul>' : '');

      // What is defined here, what passes through, and other routes to the same position.
      var defined = node.defines;
      var lineEnds = node.lineEnds;
      var through = node.via.filter(function (x) { return defined.indexOf(x) < 0; }).sort(function (a, b) { return b.defining.length - a.defining.length; });
      var same = node === root ? [] : Q.samePosition(node).slice(0, 4);
      var roots = node.roots.filter(function (f) { return f.variations.length; });
      $('#ex-here').innerHTML =
        (roots.length ? '<div class="detail-block"><h2 class="h4">A family starts here</h2>' + roots.map(function (f) { return '<p><a href="' + A.href(f) + '">' + esc(f.name) + '</a> <span class="small muted">' + A.plural(f.variations.length, 'variation') + '</span></p>'; }).join('') + '</div>' : '') +
        (defined.length ? '<div class="detail-block"><h2 class="h4">Defined by this move</h2><ul class="map-list">' + defined.map(item).join('') + '</ul></div>' : '') +
        (lineEnds.length ? '<div class="detail-block"><h2 class="h4">Move lines that end here</h2><ul class="map-list">' + lineEnds.map(function (ln) {
          return '<li><a href="' + A.href(ln) + '"><span class="map-item-name">' + esc(ln.name) + '</span><span class="map-item-tags">' + A.tag(ln.kindLine, 'tag-quiet') + '<span class="small muted">' + esc(ln.entry.kind === 'gambit' ? ln.entry.name : ln.entry.short) + '</span></span></a></li>';
        }).join('') + '</ul></div>' : '') +
        (through.length ? '<div class="detail-block"><h2 class="h4">Lines through this position</h2><ul class="map-list">' + through.slice(0, 6).map(item).join('') + '</ul>' +
          (through.length > 6 ? '<p class="small muted">and ' + (through.length - 6) + ' more further down the tree.</p>' : '') + '</div>' : '') +
        (same.length ? '<div class="detail-block ex-transpose"><h2 class="h4">Transposition: the same position by another route</h2><ul class="plain-list">' + same.map(function (o) {
          var l = Q.locate(o), nm = l.entry ? (l.entry.kind === 'gambit' ? l.entry.name : l.entry.name) : l.family ? l.family.name : '';
          return '<li><a href="' + A.explorerHref(o.side, o.path) + '" class="notation">' + esc(Q.moveText(o.sans, 0)) + '</a>' +
            '<p class="small muted">' + (o.side !== side ? 'In ' + A.OPEN_LABEL[o.side] : 'Another move order') + (nm ? ': ' + esc(nm) : '') + '</p></li>';
        }).join('') + '</ul></div>' : '');

      $('[data-go="start"]').disabled = node === root;
      $('[data-go="back"]').disabled = node === root;
      $('[data-go="fwd"]').disabled = !node.children.length;
      if (announce) A.status((node === root ? 'Starting position' : Q.moveText(node.sans, 0)) + '. ' +
        (kids.length ? kids.length + (kids.length === 1 ? ' move' : ' moves') + ' covered from here.' : 'End of the covered moves.') +
        (same.length ? ' This position is also reached by another move order.' : ''));
    }
    function item(x) {
      return '<li><a href="' + A.href(x) + '"><span class="map-item-name">' + esc(x.kind === 'gambit' ? x.name : x.name) + '</span>' +
        '<span class="map-item-tags">' + (x.kind === 'gambit' ? '<span class="chip-kind">Gambit</span>' : '') + A.tag(x.difficulty) + (x.style ? A.tag(x.style) : '') + '</span></a></li>';
    }
    function byKey(k) { return Q.node(side, k ? k.split(' ') : []) || root; }

    // ---------------------------------------------------------- compare
    function compare() {
      var a = Q.line($('#cmp-a').value), b = Q.line($('#cmp-b').value);
      var out = $('#cmp-out');
      if (!a || !b) { out.innerHTML = '<p class="muted small">Choose two variations to compare them.</p>'; return; }
      if (a === b) { out.innerHTML = '<p class="muted small">Choose two different variations.</p>'; return; }
      var i = 0;
      while (i < a.defining.length && i < b.defining.length && a.defining[i] === b.defining[i]) i++;
      var shared = a.sans.slice(0, i);
      var mover = i % 2 === 0 ? 'White' : 'Black';
      function col(x, other) {
        var tail = x.sans.slice(i);
        var plans = (x.plans && x.plans[x.side]) || [];
        return '<div class="cmp-col"><div class="cmp-board" data-cmp="' + esc(x.id) + '"></div>' +
          '<h3 class="h3"><a href="' + A.href(x) + '">' + esc(x.name) + '</a></h3>' +
          '<p class="notation">' + (tail.length ? esc(Q.moveText(tail, i)) : '<span class="muted">No further moves: ' + esc(other.short || other.name) + ' continues from here</span>') + '</p>' +
          '<p class="cmp-tags">' + (x.kind === 'gambit' ? A.characterTag(x.character) : '') + A.tag(x.difficulty) + (x.style ? A.tag(x.style) : '') + '<span class="small">' + x.minutes + ' min</span></p>' +
          '<p class="prose">' + esc(x.summary) + '</p>' +
          (plans.length ? '<h4 class="h4">' + (x.side === 'white' ? 'White' : 'Black') + '\'s first plan</h4><p class="small">' + esc(plans[0]) + '</p>' : '') +
          '<p><a class="small" href="' + A.explorerHref(side, x.defining) + '" data-ex-path="' + esc(x.defining.join(' ')) + '">Follow it in the explorer</a></p></div>';
      }
      out.innerHTML = '<div class="cmp-shared"><p><strong>Shared moves:</strong> <span class="notation">' + (shared.length ? esc(Q.moveText(shared, 0)) : 'none, they differ from the first move') + '</span></p>' +
        (i < a.defining.length && i < b.defining.length ? '<p class="small muted">They part at ' + mover + '\'s move ' + (Math.floor(i / 2) + 1) + ': ' + esc(Q.moveText([a.sans[i]], i)) + ' or ' + esc(Q.moveText([b.sans[i]], i)) + '.</p>' : '<p class="small muted">One line continues the other.</p>') +
        '<button type="button" class="btn btn-quiet btn-sm" data-ex-path="' + esc(a.defining.slice(0, i).join(' ')) + '">Show the branch point</button></div>' +
        '<div class="cmp-cols">' + col(a, b) + col(b, a) + '</div>';
      $$('.cmp-board', out).forEach(function (h) {
        var x = Q.line(h.dataset.cmp);
        var f = U.boardFrame(h, { fen: 'start', label: x.name + ' position', orientation: side === 'black' ? 'b' : 'w', note: 'After ' + x.moves.split(' ').slice(-1)[0] });
        f.board.setPosition(Q.stateAt(x.defining), { lastMove: x.defining[x.defining.length - 1] });
      });
    }

    var ex = $('#explorer');
    main.addEventListener('click', onClick);
    main.addEventListener('keydown', onKey);
    A.teardown.push(function () { main.removeEventListener('click', onClick); main.removeEventListener('keydown', onKey); frame.onMove = null; });
    function onClick(e) {
      var nb = e.target.closest('[data-node]');
      if (nb) {
        var target = byKey(nb.dataset.node);
        go(target, true);
        if (nb.classList.contains('ex-kid')) { var first = $('.ex-kid') || $('[data-go="back"]'); first.focus(); }
        else { var cur = $('.ex-ply[aria-current]'); if (cur) cur.focus(); }
        return;
      }
      var g = e.target.closest('[data-go]');
      if (g) { step(g.dataset.go); return; }
      var ep = e.target.closest('[data-ex-path]');
      if (ep) { e.preventDefault(); go(byKey(ep.dataset.exPath), true); ex.scrollIntoView({ block: 'start' }); $('.ex-ply[aria-current]').focus({ preventScroll: true }); return; }
      if (e.target.closest('[data-cmp-here]')) {
        var here = node.via.concat(Object.keys(node.below).map(Q.line)).filter(function (x, k, arr) { return x && arr.indexOf(x) === k; });
        if (here.length >= 2) { $('#cmp-a').value = here[0].id; $('#cmp-b').value = here[1].id; compare(); }
        else $('#cmp-out').innerHTML = '<p class="muted small">Fewer than two named lines pass through this position. Move back towards the start, or choose from the lists.</p>';
      }
    }
    function step(dir) {
      if (dir === 'start') go(root, true);
      else if (dir === 'back' && node.parent) go(node.parent, true);
      else if (dir === 'fwd' && node.children.length) go(forward[node.key] || node.children[0], true);
    }
    function onKey(e) {
      if (!ex.contains(e.target) || /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
      if (e.target.closest('.board')) return; // the board uses arrow keys for its own squares
      if (e.key === 'ArrowLeft') { step('back'); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { step('fwd'); e.preventDefault(); }
      else if (e.key === 'Home') { step('start'); e.preventDefault(); }
    }
    $('#compare form').addEventListener('change', function () {
      compare();
      A.replaceHash('#/explorer' + A.buildQuery({ side: side, at: node.path.join('.'), a: $('#cmp-a').value, b: $('#cmp-b').value }));
    });

    render(false);
    compare();
    if (q.a && q.b) window.setTimeout(function () { var c = $('#compare'); if (c) c.scrollIntoView({ block: 'start' }); }, 0);
    return { title: 'Opening Explorer · ' + SITE };
  };
})();
