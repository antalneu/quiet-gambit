/*
 * The Quiet Gambit — library model.
 * Merges QG_CORE with every QG_PARTS file and indexes it as one library:
 *   family -> variation -> move line, plus gambits and lessons.
 * Links related entries both ways, builds the explorer tree for each side
 * (with transpositions found by comparing positions) and a search index.
 */
(function () {
  'use strict';

  var C = window.QGChess;
  var core = window.QG_CORE || { categories: [], paths: [] };
  var parts = window.QG_PARTS || [];

  var lessons = [], repertoire = [], gambits = [], families = [], glossary = [], concepts = { strategy: [], endgames: [] };
  parts.forEach(function (p) {
    (p.lessons || []).forEach(function (x) { lessons.push(x); });
    (p.repertoire || []).forEach(function (x) { x.kind = 'opening'; repertoire.push(x); });
    (p.gambits || []).forEach(function (x) { x.kind = 'gambit'; gambits.push(x); });
    (p.families || []).forEach(function (x) { x.kind = 'family'; families.push(x); });
    (p.glossary || []).forEach(function (x) { glossary.push(x); });
    (p.middlegames || []).forEach(function (x) { concepts.strategy.push(x); });
    (p.endgames || []).forEach(function (x) { concepts.endgames.push(x); });
  });

  // Glossary: first definition of a term wins; alphabetical.
  var seenTerm = {};
  glossary = glossary.filter(function (g) {
    var k = g.term.toLowerCase();
    if (seenTerm[k]) return false;
    seenTerm[k] = true;
    return true;
  }).sort(function (a, b) { return a.term.localeCompare(b.term); });

  var categories = core.categories;
  var catOrder = categories.map(function (c) { return c.id; });
  var categoryById = {};
  categories.forEach(function (c) { categoryById[c.id] = c; });

  // Lessons: category order, then file order (foundation lessons come first).
  lessons.forEach(function (l, i) { l._i = i; });
  lessons = lessons.filter(function (l) { return categoryById[l.category]; }).sort(function (a, b) {
    return catOrder.indexOf(a.category) - catOrder.indexOf(b.category) || a._i - b._i;
  });
  var lessonById = {};
  lessons.forEach(function (l) { lessonById[l.id] = l; });
  categories.forEach(function (c) {
    c.lessons = lessons.filter(function (l) { return l.category === c.id; });
    c.lessons.forEach(function (l, i) { l.number = i + 1; });
    c.minutes = c.lessons.reduce(function (a, l) { return a + (l.minutes || 0); }, 0);
  });

  // ------------------------------------------------------------ helpers
  function isPrefix(a, b) { // a is a proper prefix of b
    if (a.length >= b.length) return false;
    for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
    return true;
  }
  function startsWith(b, a) { return a.length === b.length ? a.join(' ') === b.join(' ') : isPrefix(a, b); }
  function addUnique(list, id) { if (id && list.indexOf(id) < 0) list.push(id); }
  function common(a, b) { var i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i++; return i; }
  function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

  function sanPath(uci, from) {
    var s = from || C.parseFen('start'), out = [];
    for (var i = 0; i < uci.length; i++) {
      var m = C.moveFromUci(s, uci[i]);
      if (!m) break;
      out.push(C.san(s, m));
      s = C.applyMove(s, m);
    }
    return out;
  }
  function stateAt(uci) {
    var s = C.parseFen('start');
    for (var i = 0; i < uci.length; i++) { var m = C.moveFromUci(s, uci[i]); if (!m) return null; s = C.applyMove(s, m); }
    return s;
  }
  // Position identity for transpositions: pieces, side to move and castling rights.
  function posKey(s) { var f = C.toFen(s).split(' '); return f[0] + ' ' + f[1] + ' ' + f[2]; }
  function moveText(sans, startPly) {
    var out = [];
    sans.forEach(function (s, i) {
      var ply = startPly + i, num = Math.floor(ply / 2) + 1;
      if (ply % 2 === 0) out.push(num + '.' + s);
      else out.push(i === 0 ? num + '...' + s : s);
    });
    return out.join(' ');
  }

  // ------------------------------------------------------------ lines (variations + gambits)
  var lines = repertoire.concat(gambits);
  var lineById = {};
  lines.forEach(function (x) {
    lineById[x.id] = x;
    x.defining = x.defining || [];
    x.ply = x.defining.length;
    x.sans = sanPath(x.defining);
    x.related = { openings: [], gambits: [], lessons: (x.lessons || []).slice() };
    x.aliases = x.aliases || [];
    x.pitfalls = x.pitfalls || [];
    x.minutes = x.minutes || Math.max(5, Math.min(20, Math.round(((x.line && x.line.moves.length) || 10) / 1.5)));
    if (!x.short) x.short = String(x.name).replace(/^[^:]*:\s*/, '');
  });

  // Move-order relationships: a line that starts with another line's moves is related to it,
  // and so are siblings that only part ways on the last move (Giuoco Piano and Evans Gambit).
  lines.forEach(function (a) {
    lines.forEach(function (b) {
      if (a === b || !a.defining.length || !b.defining.length) return;
      var shorter = Math.min(a.defining.length, b.defining.length);
      if (isPrefix(a.defining, b.defining) || isPrefix(b.defining, a.defining) ||
          (shorter >= 5 && common(a.defining, b.defining) >= shorter - 1)) {
        addUnique(b.kind === 'gambit' ? a.related.gambits : a.related.openings, b.id);
      }
    });
    (a.transpositions || []).forEach(function (t) {
      var b = lineById[t.to];
      if (!b) return;
      addUnique(b.kind === 'gambit' ? a.related.gambits : a.related.openings, b.id);
      addUnique(b.kind === 'gambit' ? b.related.gambits : b.related.openings, a.id);
    });
    if (a.base && lineById[a.base]) {
      addUnique(a.related.openings, a.base);
      addUnique(lineById[a.base].related.gambits, a.id);
    }
    (a.relatedOpenings || []).forEach(function (o) {
      if (!lineById[o]) return;
      addUnique(a.related.openings, o);
      addUnique(a.kind === 'gambit' ? lineById[o].related.gambits : lineById[o].related.openings, a.id);
    });
    (a.gambits || []).forEach(function (g) { if (lineById[g]) { addUnique(a.related.gambits, g); addUnique(lineById[g].related.openings, a.id); } });
  });

  // ------------------------------------------------------------ families
  // Families come from the content; variations without one get a family made from their `family` name.
  var familyById = {};
  families.forEach(function (f) { familyById[f.id] = f; });
  repertoire.forEach(function (x) {
    if (x.familyId && familyById[x.familyId]) return;
    var id = (x.side === 'white' ? 'wf-' : 'bf-') + slug(x.family || x.name);
    if (!familyById[id]) {
      var f = { id: id, kind: 'family', side: x.side, group: x.group, name: x.family || x.name, root: null, summary: '', overview: '', choosing: '', aliases: [], terms: [], synthetic: true };
      families.push(f);
      familyById[id] = f;
    }
    x.familyId = id;
  });
  families.forEach(function (f) {
    f.variations = repertoire.filter(function (x) { return x.familyId === f.id; });
    f.aliases = f.aliases || [];
    f.terms = f.terms || [];
    if (!f.root || !f.root.length) { // synthetic: the moves every variation shares
      var r = f.variations.length ? f.variations[0].defining.slice() : [];
      f.variations.forEach(function (x) { r = r.slice(0, common(r, x.defining)); });
      f.root = r.length ? r : (f.variations[0] ? f.variations[0].defining.slice(0, 1) : []);
    }
    f.rootSans = sanPath(f.root);
    f.rootMoves = moveText(f.rootSans, 0);
    f.gambits = gambits.filter(function (g) { return g.familyId === f.id; });
  });
  // Gambits without a family link: attach to the family whose root they start with, on either side.
  gambits.forEach(function (g) {
    if (g.familyId && familyById[g.familyId]) return;
    var best = null;
    families.forEach(function (f) { if (f.root.length > 1 && startsWith(g.defining, f.root) && (!best || f.root.length > best.root.length)) best = f; });
    g.familyGuess = best ? best.id : null;
  });

  // Variation hierarchy: parent, children and the position where each one branches off.
  repertoire.forEach(function (x) {
    var f = familyById[x.familyId];
    x.fam = f;
    var parent = x.parent && lineById[x.parent] && lineById[x.parent].familyId === x.familyId ? lineById[x.parent] : null;
    if (!parent) f.variations.forEach(function (y) {
      if (y !== x && isPrefix(y.defining, x.defining) && (!parent || y.defining.length > parent.defining.length)) parent = y;
    });
    x.parentRef = parent;
  });
  repertoire.forEach(function (x) {
    x.children = x.fam.variations.filter(function (y) { return y.parentRef === x; });
    var base = x.parentRef ? x.parentRef.defining : x.fam.root;
    if (!startsWith(x.defining, base)) base = x.defining.slice(0, common(base, x.defining));
    x.branch = {
      from: x.parentRef || x.fam,
      base: base.slice(),
      baseSans: x.sans.slice(0, base.length),
      moves: x.defining.slice(base.length),
      sans: x.sans.slice(base.length)
    };
    x.siblings = x.fam.variations.filter(function (y) { return y !== x && y.parentRef === x.parentRef; });
  });
  // Family order: by group, then by move order of the root; variations by tree order.
  function moveOrderCmp(a, b) {
    var sa = a.sans || a.rootSans || [], sb = b.sans || b.rootSans || [];
    var n = Math.min(sa.length, sb.length);
    for (var i = 0; i < n; i++) if (sa[i] !== sb[i]) return sa[i] < sb[i] ? -1 : 1;
    return sa.length - sb.length;
  }
  families.forEach(function (f) {
    var ordered = [];
    function walk(list) { list.slice().sort(moveOrderCmp).forEach(function (v) { ordered.push(v); walk(v.children); }); }
    walk(f.variations.filter(function (v) { return !v.parentRef; }));
    f.variations = ordered;
  });
  // The same family seen from the other side (White's Sicilian <-> Black's Sicilian).
  families.forEach(function (f) {
    f.mirror = families.filter(function (g) { return g.side !== f.side && g.name.toLowerCase() === f.name.toLowerCase(); })[0] || null;
  });

  // ------------------------------------------------------------ move lines
  var moveLines = [];
  lines.forEach(function (x) {
    var after = stateAt(x.defining);
    x.lines = (x.lines || []).map(function (ln) {
      ln.entry = x;
      ln.key = x.id + '/' + ln.id;
      ln.kindLine = ln.kind || 'Line';
      ln.uci = (ln.moves || []).map(function (m) { return m.uci; });
      ln.full = x.defining.concat(ln.uci);
      ln.sans = after ? sanPath(ln.uci, after) : [];
      ln.text = moveText(ln.sans, x.defining.length);
      // Named entries that this line runs into.
      ln.joins = lines.filter(function (y) { return y !== x && y.side === x.side && y.defining.length > x.defining.length && startsWith(ln.full, y.defining); });
      moveLines.push(ln);
      return ln;
    });
    (x.responses || []).forEach(function (r) { if (r.line) r.lineRef = x.lines.filter(function (l) { return l.id === r.line; })[0] || null; });
  });

  // Family siblings count as related too.
  repertoire.forEach(function (a) {
    a.fam.variations.forEach(function (b) { if (a !== b) addUnique(a.related.openings, b.id); });
  });

  // Lessons <-> lines, both ways.
  lessons.forEach(function (l) {
    var rel = l.related || (l.related = {});
    rel.openings = (rel.openings || []).filter(function (id) { return lineById[id]; });
    rel.gambits = (rel.gambits || []).filter(function (id) { return lineById[id]; });
    rel.lessons = (rel.lessons || []).filter(function (id) { return lessonById[id] && id !== l.id; });
    l.prerequisites = (l.prerequisites || []).filter(function (id) { return lessonById[id] && id !== l.id; });
    rel.openings.concat(rel.gambits).forEach(function (id) { addUnique(lineById[id].related.lessons, l.id); });
  });
  lines.forEach(function (x) {
    x.related.lessons = x.related.lessons.filter(function (id) { return lessonById[id]; });
    x.related.lessons.forEach(function (id) {
      var rel = lessonById[id].related;
      addUnique(x.kind === 'gambit' ? rel.gambits : rel.openings, x.id);
    });
  });
  // Lessons on closely related lines, for entries without lessons of their own.
  lines.forEach(function (x) {
    var near = [];
    x.related.openings.concat(x.related.gambits).forEach(function (id) {
      lineById[id].related.lessons.forEach(function (lid) { if (x.related.lessons.indexOf(lid) < 0) addUnique(near, lid); });
    });
    x.nearLessons = near;
  });
  families.forEach(function (f) {
    var ls = [];
    f.variations.concat(f.gambits).forEach(function (x) { x.related.lessons.forEach(function (id) { addUnique(ls, id); }); });
    f.lessons = ls;
    f.lineCount = f.variations.reduce(function (a, x) { return a + x.lines.length; }, 0);
    f.minutes = f.variations.reduce(function (a, x) { return a + x.minutes; }, 0);
    var lv = { Beginner: 0, Intermediate: 1, Advanced: 2 }, lo = 9, hi = -1;
    f.variations.forEach(function (x) { var v = lv[x.difficulty]; if (v < lo) lo = v; if (v > hi) hi = v; });
    var names = ['Beginner', 'Intermediate', 'Advanced'];
    f.levelRange = hi < 0 ? '' : lo === hi ? names[lo] : names[lo] + ' to ' + names[hi];
    var st = {};
    f.variations.forEach(function (x) { if (x.style) st[x.style] = (st[x.style] || 0) + 1; });
    f.styles = Object.keys(st).sort(function (a, b) { return st[b] - st[a]; });
  });

  // ------------------------------------------------------------ explorer tree
  // One trie per side over family roots, variation and gambit moves, move lines and sample lines.
  // Each node knows the moves that reach it, what is defined there, the notes on the move that
  // reached it, and which named entries pass through it.
  var allNodes = { white: {}, black: {} };
  var byPos = {};
  function buildTree(side) {
    var nodes = allNodes[side];
    var root = node([], [], null);
    function node(path, sans, parent) {
      var k = path.join(' ');
      if (nodes[k]) return nodes[k];
      var n = { key: k, path: path, sans: sans, parent: parent, side: side, children: [], defines: [], roots: [], lineEnds: [], via: [], notes: [] };
      nodes[k] = n;
      if (parent) parent.children.push(n);
      return n;
    }
    function insert(uci, notes, entry) {
      var n = root, s = C.parseFen('start');
      for (var i = 0; i < uci.length; i++) {
        var m = C.moveFromUci(s, uci[i]);
        if (!m) break;
        var san = C.san(s, m);
        s = C.applyMove(s, m);
        n = node(n.path.concat([uci[i]]), n.sans.concat([san]), n);
        if (!n.pos) n.pos = posKey(s);
        if (entry && n.via.indexOf(entry) < 0) n.via.push(entry);
        var note = notes && notes[i];
        if (note && !n.notes.some(function (o) { return o.text === note; })) n.notes.push({ text: note, entry: entry });
      }
      return n;
    }
    families.filter(function (f) { return f.side === side; }).forEach(function (f) { insert(f.root, null, null).roots.push(f); });
    lines.filter(function (x) { return x.side === side; }).forEach(function (x) {
      var sampleNotes = ((x.line && x.line.moves) || []).map(function (m) { return m.note || ''; });
      if (x.line && x.line.moves) insert(x.line.moves.map(function (m) { return m.uci; }), sampleNotes, x).samples = true;
      insert(x.defining, sampleNotes, x).defines.push(x);
      x.lines.forEach(function (ln) {
        var notes = x.defining.map(function () { return ''; }).concat(ln.moves.map(function (m) { return m.note || ''; }));
        insert(ln.full, notes, x).lineEnds.push(ln);
      });
    });
    // Subtree totals of named entries, for "N lines continue from here".
    function count(n) {
      var set = {};
      n.defines.forEach(function (x) { set[x.id] = x; });
      n.children.forEach(function (c) { var cs = count(c); Object.keys(cs).forEach(function (id) { set[id] = cs[id]; }); });
      n.below = set;
      n.total = Object.keys(set).length;
      n.lineTotal = n.lineEnds.length + n.children.reduce(function (a, c) { return a + c.lineTotal; }, 0);
      return set;
    }
    count(root);
    function sortKids(n) {
      n.children.sort(function (a, b) { return b.total - a.total || b.lineTotal - a.lineTotal || (a.sans[a.sans.length - 1] < b.sans[b.sans.length - 1] ? -1 : 1); });
      n.children.forEach(sortKids);
    }
    sortKids(root);
    root.pos = posKey(C.parseFen('start'));
    Object.keys(nodes).forEach(function (k) { var n = nodes[k]; (byPos[n.pos] = byPos[n.pos] || []).push(n); });
    return root;
  }
  var trees = {};
  function tree(side) {
    if (!trees.white) { trees.white = buildTree('white'); trees.black = buildTree('black'); }
    return trees[side];
  }
  function treeNode(side, path) { tree(side); return allNodes[side][(path || []).join(' ')] || null; }
  // Other move orders (in either side's tree) that reach the same position.
  function samePosition(n) {
    tree('white');
    return (byPos[n.pos] || []).filter(function (o) { return o !== n && (o.side !== n.side || o.key !== n.key); });
  }
  // Where a node sits in the library: family, variation, move line.
  function locate(n) {
    var out = { family: null, entry: null, lines: [] };
    families.forEach(function (f) { if (f.side === n.side && startsWith(n.path, f.root) && (!out.family || f.root.length > out.family.root.length)) out.family = f; });
    lines.forEach(function (x) { if (x.side === n.side && startsWith(n.path, x.defining) && (!out.entry || x.defining.length > out.entry.defining.length)) out.entry = x; });
    if (out.entry) {
      // Lines the node is on (or has run past the end of).
      out.lines = out.entry.lines.filter(function (ln) {
        return n.path.length > out.entry.defining.length && (startsWith(ln.full, n.path) || startsWith(n.path, ln.full));
      });
      if (out.entry.kind === 'opening' && (!out.family || out.family.id !== out.entry.familyId)) out.family = out.entry.fam;
    }
    return out;
  }

  // ------------------------------------------------------------ search index
  var GROUP_FIRST = { e4: '1.e4', d4: '1.d4', 'vs-e4': '1.e4', 'vs-d4': '1.d4' };
  function firstMove(uci) {
    var f = uci && uci[0];
    return { e2e4: '1.e4', d2d4: '1.d4', c2c4: '1.c4', g1f3: '1.Nf3' }[f] || (f ? 'other' : '');
  }
  function catOf(x) {
    if (x.kind === 'gambit') return x.side + '-gambits';
    var g = x.group || (x.fam && x.fam.group);
    return x.side + '-' + String(g || '').replace(/^vs-/, 'vs-');
  }
  var index = [];
  function norm(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9.+#=\s-]/g, ' '); }
  function addIndex(o) {
    o.hay = norm([o.name].concat(o.alt || []).join(' | '));
    o.body = norm(o.body || '');
    index.push(o);
  }
  families.forEach(function (f) {
    addIndex({ type: 'family', ref: f, id: f.id, side: f.side, area: 'openings', cat: f.side + '-' + f.group, first: firstMove(f.root),
      family: f.id, name: f.name, alt: f.aliases.concat(f.terms).concat([f.eco || '']), moves: f.rootSans,
      difficulty: '', style: '', minutes: f.minutes, body: [f.summary, f.overview].join(' '), order: f.rootSans });
  });
  lines.forEach(function (x) {
    var famId = x.kind === 'opening' ? x.familyId : (x.familyId || x.familyGuess || '');
    var fam = familyById[famId];
    addIndex({ type: x.kind === 'gambit' ? 'gambit' : 'variation', ref: x, id: x.id, side: x.side, area: x.kind === 'gambit' ? 'gambits' : 'openings',
      cat: catOf(x), first: firstMove(x.defining), family: famId, variation: x.kind === 'opening' ? x.id : '',
      name: x.name, alt: x.aliases.concat([x.short, x.eco || '', x.family || '']).concat(fam ? fam.aliases.concat(fam.terms).concat([fam.name]) : []),
      moves: x.sans, difficulty: x.difficulty, style: x.style || '', minutes: x.minutes,
      body: [x.summary, x.idea, x.character || '', x.offer || ''].join(' '), order: x.sans });
    x.lines.forEach(function (ln) {
      addIndex({ type: 'line', ref: ln, id: ln.key, side: x.side, area: x.kind === 'gambit' ? 'gambits' : 'openings',
        cat: catOf(x), first: firstMove(x.defining), family: famId, variation: x.kind === 'opening' ? x.id : '', gambit: x.kind === 'gambit' ? x.id : '',
        name: ln.name, alt: [x.name, x.short].concat(x.aliases), moves: x.sans.concat(ln.sans), difficulty: x.difficulty, style: x.style || '', minutes: x.minutes,
        body: [ln.summary, ln.kindLine].join(' '), order: x.sans.concat(ln.sans) });
    });
  });
  // Moves typed as "1.e4 c5 2.c3" or "e4 c5 c3" match a move sequence anywhere from the start.
  function moveTokens(q) {
    var t = String(q).replace(/\d+\.(\.\.)?/g, ' ').trim().split(/\s+/).filter(Boolean);
    var sanRe = /^(O-O(-O)?|[KQRBN][a-h]?[1-8]?x?[a-h][1-8]|[a-h](x[a-h])?[1-8](=[QRBN])?)[+#]?$/;
    return t.length && t.every(function (w) { return sanRe.test(w); }) ? t.map(function (w) { return w.replace(/[+#]$/, ''); }) : null;
  }
  function search(q) {
    var raw = String(q || '').trim();
    if (!raw) return index.map(function (o) { return { item: o, score: 0 }; });
    var mt = moveTokens(raw);
    var words = norm(raw).split(/\s+/).filter(Boolean);
    var phrase = norm(raw).trim();
    var out = [];
    index.forEach(function (o) {
      var score = 0;
      if (mt) {
        var ms = o.moves.map(function (s) { return s.replace(/[+#]$/, ''); });
        var ok = mt.every(function (w, i) { return ms[i] === w; });
        if (ok) score = 50 + (ms.length === mt.length ? 40 : 0) - Math.max(0, ms.length - mt.length);
      }
      if (!score) {
        var all = o.hay + ' ' + o.body;
        if (!words.every(function (w) { return all.indexOf(w) >= 0; })) return;
        var name = norm(o.name);
        score = 10;
        if (name === phrase) score += 60;
        else if (name.indexOf(phrase) === 0) score += 40;
        else if (name.indexOf(phrase) >= 0) score += 30;
        else if (o.hay.indexOf(phrase) >= 0) score += 25;
        else if (words.every(function (w) { return o.hay.indexOf(w) >= 0; })) score += 15;
        score += { family: 6, gambit: 5, variation: 4, line: 0 }[o.type];
      }
      out.push({ item: o, score: score });
    });
    return out;
  }

  // ------------------------------------------------------------ paths
  var paths = (core.paths || []).map(function (p) {
    p.steps = (p.steps || []).filter(function (s) { return lessonById[s.lesson]; });
    return p;
  }).filter(function (p) { return p.steps.length; });
  var pathById = {};
  paths.forEach(function (p) { pathById[p.id] = p; });

  window.QG = {
    categories: categories, category: function (id) { return categoryById[id]; },
    lessons: lessons, lesson: function (id) { return lessonById[id]; },
    repertoire: repertoire, gambits: gambits, line: function (id) { return lineById[id]; },
    families: families, family: function (id) { return familyById[id]; },
    moveLines: moveLines,
    moveLine: function (key) { var i = String(key).lastIndexOf('/'); var x = lineById[String(key).slice(0, i)]; return x ? x.lines.filter(function (l) { return l.id === String(key).slice(i + 1); })[0] || null : null; },
    glossary: glossary, concepts: concepts,
    paths: paths, path: function (id) { return pathById[id]; },
    tree: tree, node: treeNode, samePosition: samePosition, locate: locate,
    index: index, search: search, firstMove: firstMove,
    sanPath: sanPath, moveText: moveText, stateAt: stateAt, startsWith: startsWith
  };
})();
