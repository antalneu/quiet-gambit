/*
 * The Quiet Gambit — the Chess Library.
 * Library -> Openings or Gambits -> side and category -> family -> variation -> move line.
 * The library index (search, filters, sorting), the openings and gambits areas,
 * family pages, and variation and gambit pages with their move lines.
 */
(function () {
  'use strict';

  var U = window.QGUI, Q = window.QG, A = window.QGA, C = window.QGChess;
  var esc = U.esc, $ = U.$, $$ = U.$$;
  var main = A.main, SITE = A.SITE;

  // ------------------------------------------------------------ vocabulary (one set of labels site-wide)
  var GROUPS = { white: ['e4', 'd4', 'flank'], black: ['vs-e4', 'vs-d4', 'vs-flank'] };
  var OPEN_LABEL = { white: 'White Openings', black: 'Black Openings' };
  var GAMBIT_LABEL = { white: 'White Gambits', black: 'Black Gambits' };
  var GROUP_SUB = {
    e4: 'Openings that start 1.e4', d4: 'Openings that start 1.d4', flank: '1.c4, 1.Nf3, 1.f4 and other first moves',
    'vs-e4': 'Defences when White opens 1.e4', 'vs-d4': 'Defences when White opens 1.d4', 'vs-flank': 'When White opens 1.c4, 1.Nf3 or another flank move'
  };
  var CAT_LABEL = {
    'white-e4': 'White Openings: 1.e4', 'white-d4': 'White Openings: 1.d4', 'white-flank': 'White Openings: flank openings',
    'black-vs-e4': 'Black Openings: vs 1.e4', 'black-vs-d4': 'Black Openings: vs 1.d4', 'black-vs-flank': 'Black Openings: vs flank openings',
    'white-gambits': 'White Gambits', 'black-gambits': 'Black Gambits'
  };
  var TYPE_LABEL = { family: 'Family', variation: 'Variation', line: 'Move line', gambit: 'Gambit' };
  var PITFALL_NOTE = { Trap: 'A concrete trick', Mistake: 'A common wrong move or plan', Risk: 'What can go wrong strategically' };
  A.GROUPS = GROUPS; A.OPEN_LABEL = OPEN_LABEL; A.GAMBIT_LABEL = GAMBIT_LABEL; A.GROUP_SUB = GROUP_SUB; A.CAT_LABEL = CAT_LABEL;

  // Result counts are announced once typing pauses, not on every keystroke.
  var announceT;
  function announceSoon(t) { window.clearTimeout(announceT); announceT = window.setTimeout(function () { A.status(t); }, 700); }
  A.announceSoon = announceSoon;

  function plural(n, w) { return n + ' ' + (n === 1 ? w : w.replace(/([^aeiou])y$/, '$1ie') + 's'); }
  A.plural = plural;

  function groupOf(x) {
    if (x.group && GROUPS[x.side] && GROUPS[x.side].indexOf(x.group) >= 0) return x.group;
    var f = (x.defining || x.root || [])[0], pre = x.side === 'black' ? 'vs-' : '';
    return pre + (f === 'e2e4' ? 'e4' : f === 'd2d4' ? 'd4' : 'flank');
  }
  A.groupOf = groupOf;

  function href(x) {
    if (!x) return '#/library';
    if (x.kind === 'family') return '#/family/' + encodeURIComponent(x.id);
    if (x.kind === 'opening') return '#/opening/' + encodeURIComponent(x.id);
    if (x.kind === 'gambit') return '#/gambit/' + encodeURIComponent(x.id);
    if (x.entry) return href(x.entry) + '?line=' + encodeURIComponent(x.id);
    return '#/lesson/' + encodeURIComponent(x.id);
  }
  A.href = href;
  A.explorerHref = function (side, path) {
    return '#/explorer' + A.buildQuery({ side: side, at: (path || []).join('.') });
  };

  // Breadcrumbs: [[label, href], ...]; the last item is the current page.
  function trail(items) {
    return '<nav class="trail" aria-label="Breadcrumb"><ol>' + items.map(function (it, i) {
      var last = i === items.length - 1;
      return '<li>' + (last || !it[1] ? '<span' + (last ? ' aria-current="page"' : '') + '>' + esc(it[0]) + '</span>' : '<a href="' + it[1] + '">' + esc(it[0]) + '</a>') + '</li>';
    }).join('') + '</ol></nav>';
  }
  A.trail = trail;
  function trailFor(x) {
    var t = [['Library', '#/library']];
    if (x.kind === 'gambit') {
      var g = groupOf(x);
      return t.concat([['Gambits', '#/gambits'], [GAMBIT_LABEL[x.side], '#/gambits/' + x.side], [A.GROUP_LABEL[g], '#/gambits/' + x.side + '/' + g], [x.name]]);
    }
    var f = x.kind === 'family' ? x : x.fam;
    t = t.concat([['Openings', '#/openings'], [OPEN_LABEL[f.side], '#/openings/' + f.side], [A.GROUP_LABEL[f.group], '#/openings/' + f.side + '/' + f.group]]);
    if (x.kind === 'family') return t.concat([[f.name]]);
    t.push([f.name, href(f)]);
    var anc = [], p = x.parentRef;
    while (p) { anc.unshift(p); p = p.parentRef; }
    anc.forEach(function (a) { t.push([a.short, href(a)]); });
    t.push([x.short]);
    return t;
  }
  A.trailFor = trailFor;

  function tags(x) {
    return (x.kind === 'gambit' ? A.characterTag(x.character) : '') + A.tag(x.difficulty) + (x.style ? A.tag(x.style) : '');
  }
  function lineCard(x) {
    var n = x.related.lessons.length;
    return '<li><a class="line-card' + (x.kind === 'gambit' ? ' is-gambit' : '') + '" href="' + href(x) + '">' +
      '<span class="line-card-top">' + A.side(x.side) + (x.kind === 'gambit' ? '<span class="chip-kind">Gambit</span>' : '') + '</span>' +
      '<span class="line-card-name">' + esc(x.name) + '</span>' +
      '<span class="line-card-moves notation">' + esc(x.moves) + '</span>' +
      '<span class="line-card-sum">' + esc(x.summary) + '</span>' +
      '<span class="line-card-tags">' + tags(x) + '<span class="line-card-lessons">' + x.minutes + ' min' + (n ? ', ' + plural(n, 'lesson') : '') + '</span></span>' +
    '</a></li>';
  }
  A.lineCard = lineCard;

  function familyCard(f) {
    return '<li><a class="fam-card" href="' + href(f) + '">' +
      '<span class="fam-card-name">' + esc(f.name) + '</span>' +
      '<span class="fam-card-moves notation">' + esc(f.rootMoves) + '</span>' +
      (f.summary ? '<span class="fam-card-sum">' + esc(f.summary) + '</span>' : '') +
      '<span class="fam-card-meta"><span>' + plural(f.variations.length, 'variation') + '</span><span>' + plural(f.lineCount, 'move line') + '</span>' +
        (f.gambits.length ? '<span>' + plural(f.gambits.length, 'gambit') + '</span>' : '') + '</span>' +
      '<span class="fam-card-tags">' + (f.levelRange ? A.tag(f.levelRange) : '') + (f.styles[0] ? A.tag(f.styles[0]) : '') + '</span>' +
    '</a></li>';
  }

  function famsIn(side, group) {
    return Q.families.filter(function (f) { return f.side === side && f.group === group && f.variations.length; })
      .sort(function (a, b) { return a.root.length - b.root.length || (a.rootMoves < b.rootMoves ? -1 : a.rootMoves > b.rootMoves ? 1 : 0) || a.name.localeCompare(b.name); });
  }
  function gambitsIn(side, group) {
    return Q.gambits.filter(function (g) { return g.side === side && (!group || groupOf(g) === group); });
  }
  function totals() {
    var t = { families: { white: 0, black: 0 }, variations: { white: 0, black: 0 }, lines: 0, gambits: { white: 0, black: 0 } };
    Q.families.forEach(function (f) { if (f.variations.length) t.families[f.side]++; });
    Q.repertoire.forEach(function (x) { t.variations[x.side]++; });
    Q.gambits.forEach(function (x) { t.gambits[x.side]++; });
    t.lines = Q.moveLines.length;
    return t;
  }
  A.libraryTotals = totals;

  function sideSwitch(base, side, labels) {
    return '<nav class="segmented" aria-label="Side">' +
      '<a href="' + base + '"' + (!side ? ' aria-current="true"' : '') + '>All</a>' +
      ['white', 'black'].map(function (s) {
        return '<a href="' + base + '/' + s + '"' + (s === side ? ' aria-current="true"' : '') + '>' + A.side(s, labels[s]) + '</a>';
      }).join('') + '</nav>';
  }

  // ------------------------------------------------------------ openings area
  A.views.openings = function (side, group, q) {
    q = q || {};
    if (q.view) { location.replace(A.explorerHref(side || 'white')); return {}; }
    if (q.group && !group) { location.replace('#/openings/' + side + '/' + q.group); return {}; }
    if (side && !OPEN_LABEL[side]) return A.views.notFound();
    if (group && GROUPS[side].indexOf(group) < 0) return A.views.notFound();
    var t = totals();
    var title = !side ? 'Openings' : group ? OPEN_LABEL[side] + ': ' + A.GROUP_LABEL[group] : OPEN_LABEL[side];
    var crumbs = [['Library', '#/library'], ['Openings', side ? '#/openings' : '']];
    if (side) crumbs.push([OPEN_LABEL[side], group ? '#/openings/' + side : '']);
    if (group) crumbs.push([A.GROUP_LABEL[group]]);
    var lede = !side
      ? (t.families.white + t.families.black) + ' opening families with ' + (t.variations.white + t.variations.black) + ' named variations and their move lines. White openings are grouped by White\'s first move; Black openings by what White played.'
      : side === 'white'
        ? t.families.white + ' families and ' + t.variations.white + ' variations for White, grouped by first move. Each family page shows how its variations branch.'
        : t.families.black + ' families and ' + t.variations.black + ' variations for Black, grouped by what White played first.';

    function groupSection(s, g, headLevel) {
      var fams = famsIn(s, g);
      var nv = fams.reduce(function (a, f) { return a + f.variations.length; }, 0);
      var ng = gambitsIn(s, g).length;
      return '<section class="area-group" aria-labelledby="ag-' + s + '-' + g + '">' +
        '<div class="area-group-head"><' + headLevel + ' class="h3" id="ag-' + s + '-' + g + '">' +
          (group ? esc(A.GROUP_LABEL[g]) : '<a href="#/openings/' + s + '/' + g + '">' + esc(A.GROUP_LABEL[g]) + '</a>') + '</' + headLevel + '>' +
          '<p class="small muted">' + esc(GROUP_SUB[g]) + '. ' + plural(fams.length, 'family')  + ', ' + plural(nv, 'variation') + '.' +
          (ng ? ' <a href="#/gambits/' + s + '/' + g + '">' + plural(ng, 'gambit') + ' in this group</a>.' : '') + '</p></div>' +
        (fams.length ? '<ul class="fam-cards">' + fams.map(familyCard).join('') + '</ul>' : '<div class="empty-state"><p>No families in this group yet.</p></div>') +
      '</section>';
    }
    var body = (side ? [side] : ['white', 'black']).map(function (s) {
      var gs = group ? [group] : GROUPS[s];
      return '<section class="area-side" ' + (side ? 'aria-label="' + OPEN_LABEL[s] + '"' : 'aria-labelledby="as-' + s + '"') + '>' +
        (side ? '' : '<div class="section-head"><h2 class="h2" id="as-' + s + '">' + A.side(s, OPEN_LABEL[s]) + '</h2></div>') +
        gs.map(function (g) { return groupSection(s, g, side ? 'h2' : 'h3'); }).join('') + '</section>';
    }).join('');

    main.innerHTML = '<div class="container">' + A.pageHead({
        trail: crumbs, title: title, next: true, lede: lede,
        extra: '<div class="toolbar">' + sideSwitch('#/openings', side, OPEN_LABEL) +
          '<div class="btn-row"><a class="btn btn-secondary btn-sm" href="' + A.explorerHref(side || 'white') + '">Open the explorer</a>' +
          '<a class="btn btn-quiet btn-sm" href="#/library">Search the library</a></div></div>'
      }) + body + '</div>';
    return { title: title + ' · ' + SITE };
  };

  // ------------------------------------------------------------ family page
  function variationRow(x, label, inner) {
    return '<li class="var-item"><a class="var-row" href="' + href(x) + '">' +
      '<span class="var-branch notation">' + esc(label) + '</span>' +
      '<span class="var-name">' + esc(x.short) + '</span>' +
      '<span class="var-sum">' + esc(x.summary) + '</span>' +
      '<span class="var-meta">' + A.tag(x.difficulty) + (x.style ? A.tag(x.style) : '') +
        '<span>' + x.minutes + ' min</span><span>' + plural(x.lines.length, 'move line') + '</span>' +
        (x.related.lessons.length ? '<span>' + plural(x.related.lessons.length, 'lesson') + '</span>' : '') + '</span>' +
    '</a>' + (inner || '') + '</li>';
  }
  // The family's variations as a tree of branch points: shared moves appear once, and
  // each variation sits under the position where it parts ways from its neighbours.
  function famTree(f) {
    var root = { kids: {}, order: [], entries: [], path: f.root.slice() };
    f.variations.forEach(function (x) {
      var n = root;
      x.defining.slice(f.root.length).forEach(function (u) {
        if (!n.kids[u]) { n.kids[u] = { kids: {}, order: [], entries: [], path: n.path.concat([u]) }; n.order.push(u); }
        n = n.kids[u];
      });
      n.entries.push(x);
    });
    return root;
  }
  function renderKids(n) {
    var items = n.order.map(function (u) {
      var k = n.kids[u], seg = 1;
      while (!k.entries.length && k.order.length === 1) { k = k.kids[k.order[0]]; seg++; }
      var sans = Q.sanPath(k.path);
      return { node: k, label: Q.moveText(sans.slice(sans.length - seg), k.path.length - seg), key: sans.join(' ') };
    }).sort(function (a, b) { return a.key < b.key ? -1 : a.key > b.key ? 1 : 0; });
    return items.map(function (it) {
      var k = it.node, inner = k.order.length ? '<ul class="var-children">' + renderKids(k) + '</ul>' : '';
      if (k.entries.length) return k.entries.map(function (x, i) { return variationRow(x, it.label, i === k.entries.length - 1 ? inner : ''); }).join('');
      return '<li class="var-item var-fork"><p class="var-fork-head"><span class="var-branch notation">' + esc(it.label) + '</span>' +
        '<span class="small muted">' + k.order.length + ' ways to continue</span></p><ul class="var-children">' + renderKids(k) + '</ul></li>';
    }).join('');
  }
  function familyTreeHTML(f) {
    var t = famTree(f);
    return t.entries.map(function (x, i) {
      return variationRow(x, 'Main line of the family', i === t.entries.length - 1 && t.order.length ? '<ul class="var-children">' + renderKids(t) + '</ul>' : '');
    }).join('') + (t.entries.length ? '' : renderKids(t));
  }

  A.views.family = function (id) {
    var f = Q.family(id);
    if (!f || !f.variations.length) return A.views.notFound();
    var related = Q.gambits.filter(function (g) { return f.gambits.indexOf(g) < 0 && g.familyGuess === f.id; });
    var lessons = f.lessons.map(Q.lesson).filter(Boolean);
    var compareRows = f.variations.map(function (x) {
      return '<tr><th scope="row"><a href="' + href(x) + '">' + esc(x.short) + '</a></th><td class="notation">' + esc(x.moves) + '</td><td>' + esc(x.difficulty) + '</td><td>' + esc(x.style || '') + '</td><td class="num">' + x.minutes + ' min</td><td class="num">' + x.lines.length + '</td></tr>';
    }).join('');

    main.innerHTML = '<article class="container">' + A.pageHead({
        trail: trailFor(f), title: f.name, next: true,
        meta: A.side(f.side, OPEN_LABEL[f.side]) + '<span>' + esc(A.GROUP_LABEL[f.group]) + '</span>' + (f.eco ? A.tag('ECO ' + f.eco, 'tag-quiet') : '') +
          '<span>' + plural(f.variations.length, 'variation') + '</span><span>' + plural(f.lineCount, 'move line') + '</span>',
        extra: '<p class="mainline">' + esc(f.rootMoves) + '</p>' +
          (f.summary ? '<p class="lede">' + esc(f.summary) + '</p>' : '') +
          (f.aliases.length ? '<p class="small muted">Also called: ' + esc(f.aliases.join(', ')) + '</p>' : '')
      }) +
      '<div class="line-grid">' +
        '<div class="line-board"><div id="fam-board"></div>' +
          '<div class="btn-row"><a class="btn btn-secondary btn-sm" href="' + A.explorerHref(f.side, f.root) + '">Explore from here, move by move</a></div></div>' +
        '<div class="line-detail">' +
          (f.overview ? '<div class="detail-block"><h2 class="h3">What defines it</h2><p class="prose">' + esc(f.overview) + '</p></div>' : '') +
          (f.choosing ? '<div class="detail-block"><h2 class="h3">How to choose a variation</h2><p class="prose">' + esc(f.choosing) + '</p></div>' : '') +
          (f.terms.length ? '<div class="detail-block"><h2 class="h4">Words you will meet</h2><p class="small">' + esc(f.terms.join(' · ')) + '</p></div>' : '') +
          (f.mirror && f.mirror.variations.length ? '<div class="detail-block"><h2 class="h4">From the other side</h2><p class="small"><a href="' + href(f.mirror) + '">' + esc(f.mirror.name) + ' in ' + OPEN_LABEL[f.mirror.side] + '</a>: ' + plural(f.mirror.variations.length, 'variation') + ' with ' + (f.mirror.side === 'white' ? 'White' : 'Black') + '\'s plans.</p></div>' : '') +
        '</div>' +
      '</div>' +
      '<section class="section" aria-labelledby="vars-h"><div class="section-head"><h2 class="h2" id="vars-h">Variations</h2>' +
        '<p class="muted">Shared moves are shown once. Each variation sits under the position where it parts ways, and the moves on the left are the ones that lead to it from there.</p></div>' +
        '<ul class="var-tree">' + familyTreeHTML(f) + '</ul></section>' +
      (f.variations.length > 1 ? '<section class="section section-tight" aria-labelledby="cmp-h"><h2 class="h2" id="cmp-h">Compare the variations</h2>' +
        '<div class="table-scroll"><table class="progress-table compare-table"><caption class="sr-only">Variations of the ' + esc(f.name) + ' compared</caption><thead><tr><th scope="col">Variation</th><th scope="col">Moves</th><th scope="col">Difficulty</th><th scope="col">Style</th><th scope="col">Study time</th><th scope="col">Move lines</th></tr></thead><tbody>' + compareRows + '</tbody></table></div>' +
        '<p class="small muted"><a href="#/explorer' + A.buildQuery({ side: f.side, at: f.root.join('.'), a: f.variations[0].id, b: f.variations[1].id }) + '">Compare two variations move by move</a> in the explorer.</p></section>' : '') +
      (f.gambits.length || related.length ? '<section class="section section-tight" aria-labelledby="fg-h"><h2 class="h2" id="fg-h">Gambits in this family</h2>' +
        '<ul class="line-cards">' + f.gambits.concat(related).map(lineCard).join('') + '</ul></section>' : '') +
      (lessons.length ? '<section class="section section-tight" aria-labelledby="fl-h"><h2 class="h2" id="fl-h">Lessons</h2>' + A.lessonList(lessons) + '</section>' : '') +
    '</article>';

    var frame = U.boardFrame($('#fam-board'), { fen: 'start', label: f.name + ' starting position', orientation: f.side === 'black' ? 'b' : 'w', note: 'Where the family begins' });
    var s = Q.stateAt(f.root);
    if (s) frame.board.setPosition(s, { lastMove: f.root[f.root.length - 1] });
    return { title: f.name + ' · ' + OPEN_LABEL[f.side] + ' · ' + SITE };
  };

  // ------------------------------------------------------------ variation and gambit pages
  function lineMoves(x, ln) {
    var sample = (x.line && x.line.moves) || [];
    var moves = x.defining.map(function (u, i) { return { uci: u, note: sample[i] && sample[i].uci === u ? sample[i].note : '' }; });
    return moves.concat(ln.moves);
  }
  function samePlaces(x) {
    var n = Q.node(x.side, x.defining);
    if (!n) return [];
    var seen = {};
    return Q.samePosition(n).map(function (o) {
      var loc = Q.locate(o), e = loc.entry && loc.entry.defining.length === o.path.length ? loc.entry : null;
      var name = e ? e.name : loc.family ? loc.family.name : '';
      var k = o.side + ':' + o.key;
      if (seen[k] || (e === x)) return null;
      seen[k] = true;
      return { node: o, entry: e, name: name, moves: Q.moveText(o.sans, 0), other: o.side !== x.side };
    }).filter(Boolean).slice(0, 5);
  }

  A.views.line = function (id, kind, q) {
    var x = Q.line(id);
    if (!x || x.kind !== kind) return A.views.notFound();
    q = q || {};
    var isG = x.kind === 'gambit';
    var own = x.side, other = own === 'white' ? 'black' : 'white';
    var plans = x.plans || {};
    function planCol(s) {
      return '<div class="plan-col"><h3 class="h4">' + A.side(s, s === 'white' ? 'White\'s plans' : 'Black\'s plans') + '</h3><ul class="plan-list">' +
        (plans[s] || []).map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul></div>';
    }
    var lessons = x.related.lessons.map(Q.lesson).filter(Boolean);
    var near = (x.nearLessons || []).map(Q.lesson).filter(Boolean).slice(0, 6);
    var fam = isG ? Q.family(x.familyId || x.familyGuess) : x.fam;

    // Where it branches.
    var branchHTML = '';
    if (!isG) {
      var b = x.branch, from = b.from;
      var fromLink = '<a href="' + href(from) + '">' + esc(from.kind === 'family' ? from.name : from.short) + '</a>';
      var baseText = b.baseSans.length ? Q.moveText(b.baseSans, 0) : 'the first move';
      var mover = b.base.length % 2 === 0 ? 'White' : 'Black';
      var alts = x.siblings.filter(function (y) { return y.branch.base.join(' ') === b.base.join(' '); });
      branchHTML = '<div class="detail-block branch-block"><h2 class="h3">Where it branches</h2>' +
        (b.moves.length
          ? '<p class="prose">From ' + fromLink + ' after <span class="notation">' + esc(baseText) + '</span>, ' + mover + ' chooses <strong class="notation">' + esc(Q.moveText(b.sans, b.base.length)) + '</strong>.</p>'
          : '<p class="prose">This is the starting point of ' + fromLink + ' itself: <span class="notation">' + esc(x.moves) + '</span>.</p>') +
        (alts.length ? '<p class="small">Other choices at the same point: ' + alts.map(function (y) { return '<a href="' + href(y) + '">' + esc(y.short) + '</a> <span class="notation muted">(' + esc(Q.moveText(y.branch.sans, y.branch.base.length)) + ')</span>'; }).join(', ') + '.</p>' : '') +
        (b.moves.length ? '<button type="button" class="btn btn-quiet btn-sm" data-branch>Show the branch position</button>' : '') +
        '</div>';
    } else if (fam) {
      branchHTML = '<div class="detail-block branch-block"><h2 class="h3">Where it comes from</h2><p class="prose">Arises from <a href="' + href(fam) + '">' + esc(fam.name) + '</a> (' + esc(OPEN_LABEL[fam.side]) + '), after <span class="notation">' + esc(fam.rootMoves) + '</span>.</p></div>';
    }

    // Key moves: the notes on the defining moves and the sample line.
    var sample = (x.line && x.line.moves) || [];
    var sampleSans = Q.sanPath(sample.map(function (m) { return m.uci; }));
    var keyMoves = sample.map(function (m, i) { return m.note ? { text: Q.moveText([sampleSans[i]], i), note: m.note } : null; }).filter(Boolean).slice(0, 6);

    var lineButtons = '<div class="line-picker" role="group" aria-label="Choose what to play through">' +
      '<button type="button" class="line-pick" data-pick="sample" aria-pressed="true"><span class="line-pick-name">Typical move order</span><span class="line-pick-kind">Sample line</span></button>' +
      x.lines.map(function (ln) {
        return '<button type="button" class="line-pick" data-pick="' + esc(ln.id) + '" aria-pressed="false"><span class="line-pick-name">' + esc(ln.name) + '</span><span class="line-pick-kind">' + esc(ln.kindLine) + '</span></button>';
      }).join('') + '</div>';

    var pitfalls = x.pitfalls.length ? '<div class="detail-block"><h2 class="h3">Traps, mistakes and risks</h2><ul class="pitfall-list">' +
      x.pitfalls.map(function (p, i) {
        return '<li class="pitfall pitfall-' + esc(String(p.kind).toLowerCase()) + '">' +
          '<p class="pitfall-head"><span class="tag tag-pitfall tag-' + esc(String(p.kind).toLowerCase()) + '" title="' + esc(PITFALL_NOTE[p.kind] || '') + '">' + esc(p.kind) + '</span>' +
            A.side(p.side, (p.side === 'white' ? 'White' : 'Black') + ' must beware') + '</p>' +
          '<p class="pitfall-title">' + esc(p.title) + '</p><p class="prose">' + esc(p.text) + '</p>' +
          (p.uci && p.uci.length ? '<button type="button" class="btn btn-quiet btn-sm" data-pitfall="' + i + '">Show it on the board</button>' : '') +
        '</li>';
      }).join('') + '</ul></div>' : '';

    var responses = x.responses && x.responses.length ? '<div class="detail-block"><h2 class="h3">' + (own === 'white' ? 'How Black usually replies' : 'What White usually tries') + '</h2><ul class="response-list">' +
      x.responses.map(function (r) {
        return '<li><span class="notation response-moves">' + esc(r.moves) + '</span>' + (r.name ? '<span class="response-name">' + esc(r.name) + '</span>' : '') + '<p>' + esc(r.note) + '</p>' +
          (r.lineRef ? '<button type="button" class="btn btn-quiet btn-sm" data-pick-line="' + esc(r.lineRef.id) + '">Play through this line</button>' : '') + '</li>';
      }).join('') + '</ul></div>' : '';

    var movesList = x.lines.length ? '<div class="detail-block"><h2 class="h3">Move lines</h2><p class="small muted">The opening branches according to the ' + (own === 'white' ? 'opponent' : 'opponent') + '\'s choices. Pick a line to play it on the board.</p><ul class="mline-list">' +
      x.lines.map(function (ln) {
        return '<li id="ml-' + esc(ln.id) + '"><button type="button" class="mline" data-pick-line="' + esc(ln.id) + '">' +
          '<span class="mline-top"><span class="mline-name">' + esc(ln.name) + '</span>' + A.tag(ln.kindLine, 'tag-quiet') + '</span>' +
          '<span class="mline-moves notation">' + esc(ln.text) + '</span>' +
          '<span class="mline-sum">' + esc(ln.summary) + '</span></button>' +
          (ln.joins.length ? '<p class="small muted">Leads into ' + ln.joins.map(function (y) { return '<a href="' + href(y) + '">' + esc(y.name) + '</a>'; }).join(', ') + '.</p>' : '') +
        '</li>';
      }).join('') + '</ul></div>' : '';

    var same = samePlaces(x);
    var anc = [], p = x.parentRef;
    while (p) { anc.unshift(p); p = p.parentRef; }
    var shown = {};
    anc.concat(x.children || []).concat(x.siblings || []).forEach(function (y) { shown[y.id] = true; });
    var relOpen = x.related.openings.filter(function (o) { return !shown[o]; });

    main.innerHTML = '<article class="container">' + A.pageHead({
        trail: trailFor(x),
        title: x.name, next: true,
        meta: A.side(x.side, isG ? GAMBIT_LABEL[x.side] : OPEN_LABEL[x.side]) + tags(x) + '<span>' + x.minutes + ' min study</span>' + (x.eco ? A.tag('ECO ' + x.eco, 'tag-quiet') : ''),
        extra: '<p class="mainline">' + esc(x.moves) + '</p><p class="lede">' + esc(x.summary) + '</p>' +
          (x.aliases.length ? '<p class="small muted">Also called: ' + esc(x.aliases.join(', ')) + '</p>' : '')
      }) +
      '<div class="line-grid">' +
        '<div class="line-board"><div id="line-board"></div><p class="line-now" id="line-now" aria-live="polite"></p><div id="line-stepper"></div>' + lineButtons +
          '<div class="btn-row"><a class="btn btn-secondary btn-sm" id="to-explorer" href="' + A.explorerHref(x.side, x.defining) + '">Open in the explorer</a></div></div>' +
        '<div class="line-detail">' +
          (isG ? '<div class="detail-block character-block">' + A.characterTag(x.character) + '<p class="prose">' + esc(x.characterNote) + '</p></div>' : '') +
          branchHTML +
          '<div class="detail-block"><h2 class="h3">The idea</h2><p class="prose">' + esc(x.idea) + '</p></div>' +
          (isG ? '<div class="detail-block"><h2 class="h3">The offer</h2><p class="prose">' + esc(x.offer) + '</p></div>' +
                 '<div class="detail-block"><h2 class="h3">Compensation in practice</h2><p class="prose">' + esc(x.compensation) + '</p></div>' : '') +
          (keyMoves.length ? '<div class="detail-block"><h2 class="h3">Why the key moves matter</h2><dl class="key-moves">' + keyMoves.map(function (k) { return '<div><dt class="notation">' + esc(k.text) + '</dt><dd>' + esc(k.note) + '</dd></div>'; }).join('') + '</dl></div>' : '') +
          '<div class="detail-block"><h2 class="h3">Plans for both sides</h2><div class="plan-cols">' + planCol(own) + planCol(other) + '</div></div>' +
        '</div>' +
      '</div>' +
      '<div class="line-columns">' +
        movesList + responses +
        (isG && (x.accepted || x.declined) ? '<div class="detail-block"><h2 class="h3">Accepted or declined</h2>' + (x.accepted ? '<p class="prose"><strong>Accepted.</strong> ' + esc(x.accepted) + '</p>' : '') + (x.declined ? '<p class="prose"><strong>Declined.</strong> ' + esc(x.declined) + '</p>' : '') + '</div>' : '') +
        pitfalls +
        (isG && x.risks ? '<div class="detail-block"><h2 class="h3">Risks for the gambiteer</h2><ul class="risk-list">' + x.risks.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul></div>' : '') +
        (x.uncertain ? '<div class="note-uncertain"><p><strong>Note on certainty.</strong> ' + esc(x.uncertain) + '</p></div>' : '') +
      '</div>' +
      '<section class="section" aria-labelledby="conn-h"><div class="section-head"><h2 class="h2" id="conn-h">How it connects</h2>' +
        '<p class="muted">Where it comes from, what branches off it, other move orders that reach it, and the lessons that practise it.</p></div>' +
        '<div class="connect-grid">' +
          (!isG ? '<div class="detail-block"><h3 class="h4">Family</h3>' + '<p class="small"><a href="' + href(x.fam) + '">' + esc(x.fam.name) + '</a>: ' + plural(x.fam.variations.length, 'variation') + '</p>' +
            (anc.length ? '<p class="small muted">Branches from</p>' + A.chips(anc.map(function (a) { return a.id; }), Q.line) : '') + '</div>' : '') +
          (x.children && x.children.length ? '<div class="detail-block"><h3 class="h4">Branches from here</h3>' + A.chips(x.children.map(function (c) { return c.id; }), Q.line) + '</div>' : '') +
          (x.transpositions && x.transpositions.length ? '<div class="detail-block"><h3 class="h4">Transpositions</h3><ul class="plain-list">' +
            x.transpositions.filter(function (t) { return Q.line(t.to); }).map(function (t) { return '<li>' + A.chip(Q.line(t.to)) + '<p class="small muted">' + esc(t.note) + '</p></li>'; }).join('') + '</ul></div>' : '') +
          (same.length ? '<div class="detail-block"><h3 class="h4">Same position, other routes</h3><ul class="plain-list">' + same.map(function (s) {
              return '<li><a class="small" href="' + A.explorerHref(s.node.side, s.node.path) + '"><span class="notation">' + esc(s.moves) + '</span></a>' +
                '<p class="small muted">' + (s.other ? 'In ' + OPEN_LABEL[s.node.side] : 'Another move order') + (s.name ? ': ' + esc(s.name) : '') + '</p></li>';
            }).join('') + '</ul></div>' : '') +
          (relOpen.length ? '<div class="detail-block"><h3 class="h4">Related openings</h3>' + A.chips(relOpen, Q.line) + '</div>' : '') +
          (x.related.gambits.length ? '<div class="detail-block"><h3 class="h4">Related gambits</h3>' + A.chips(x.related.gambits, Q.line) + '</div>' : '') +
        '</div>' +
        (lessons.length ? '<h3 class="h3 lessons-h">Lessons on this ' + (isG ? 'gambit' : 'variation') + '</h3>' + A.lessonList(lessons) : '') +
        (near.length ? '<h3 class="h3 lessons-h">' + (lessons.length ? 'Lessons on related lines' : 'Practise it through related lines') + '</h3>' +
          (lessons.length ? '' : '<p class="muted">No lesson is built on this exact line; these lessons use positions from lines that share its moves or structure.</p>') + A.lessonList(near) : '') +
      '</section></article>';

    var frame = U.boardFrame($('#line-board'), { fen: 'start', label: x.name + ' board', orientation: x.side === 'black' ? 'b' : 'w', note: 'Sample line' });
    var stepper = null, current = 'sample';
    var now = $('#line-now');
    function play(which, startAt, label) {
      var host = $('#line-stepper');
      host.innerHTML = '';
      var moves, note, path;
      if (which === 'sample') { moves = x.line; note = 'Typical move order'; path = x.defining; }
      else if (which.pitfall) { moves = { fen: 'start', moves: which.pitfall.uci.map(function (u) { return { uci: u }; }) }; note = which.pitfall.kind + ': ' + which.pitfall.title; path = which.pitfall.uci; }
      else { var ln = x.lines.filter(function (l) { return l.id === which; })[0]; if (!ln) return play('sample'); moves = { fen: 'start', moves: lineMoves(x, ln) }; note = ln.name + ' (' + ln.kindLine + ')'; path = ln.full; }
      frame.setNote(note);
      stepper = U.lineStepper(host, frame, moves, { startAt: startAt != null ? startAt : x.defining.length, startNote: 'The starting position. Step forward to play through the line.' });
      current = typeof which === 'string' ? which : 'pitfall';
      $$('.line-pick').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.pick === current ? 'true' : 'false'); });
      now.textContent = 'Now showing: ' + (label || note) + '.';
      $('#to-explorer').href = A.explorerHref(x.side, path);
      if (typeof which === 'string') A.replaceHash(href(x) + (which === 'sample' ? '' : '?line=' + encodeURIComponent(which)));
    }
    var startLine = q.line && x.lines.some(function (l) { return l.id === q.line; }) ? q.line : 'sample';
    play(startLine);

    main.addEventListener('click', onClick);
    A.teardown.push(function () { main.removeEventListener('click', onClick); });
    function onClick(e) {
      var pk = e.target.closest('[data-pick]');
      if (pk) { play(pk.dataset.pick); return; }
      var pl = e.target.closest('[data-pick-line]');
      if (pl) { play(pl.dataset.pickLine); $('#line-board').scrollIntoView({ block: 'nearest' }); var b = $('.line-pick[data-pick="' + pl.dataset.pickLine + '"]'); if (b) b.focus({ preventScroll: true }); return; }
      var pf = e.target.closest('[data-pitfall]');
      if (pf) { var pit = x.pitfalls[+pf.dataset.pitfall]; play({ pitfall: pit }, pit.uci.length, pit.kind + ': ' + pit.title); $('#line-board').scrollIntoView({ block: 'nearest' }); return; }
      if (e.target.closest('[data-branch]')) {
        if (current !== 'sample') play('sample');
        stepper.go(x.branch.base.length);
        frame.setNote('Branch position');
        now.textContent = 'Now showing: the branch position, before ' + Q.moveText(x.branch.sans.slice(0, 1), x.branch.base.length) + '.';
        $('#line-board').scrollIntoView({ block: 'nearest' });
      }
    }
    return { title: x.name + ' · ' + (isG ? GAMBIT_LABEL[x.side] : (x.fam ? x.fam.name + ' · ' : '') + OPEN_LABEL[x.side]) + ' · ' + SITE };
  };

  // ------------------------------------------------------------ gambits area
  A.views.gambits = function (side, group, q) {
    q = q || {};
    if (q.side && !side) { location.replace('#/gambits/' + q.side); return {}; }
    if (side && !GAMBIT_LABEL[side]) return A.views.notFound();
    if (group && GROUPS[side].indexOf(group) < 0) return A.views.notFound();
    function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (cur === v ? ' selected' : '') + '>' + esc(label) + '</option>'; }
    var title = !side ? 'Gambits' : group ? GAMBIT_LABEL[side] + ': ' + A.GROUP_LABEL[group] : GAMBIT_LABEL[side];
    var crumbs = [['Library', '#/library'], ['Gambits', side ? '#/gambits' : '']];
    if (side) crumbs.push([GAMBIT_LABEL[side], group ? '#/gambits/' + side : '']);
    if (group) crumbs.push([A.GROUP_LABEL[group]]);
    var base = Q.gambits.filter(function (g) { return (!side || g.side === side) && (!group || groupOf(g) === group); });
    var nw = Q.gambits.filter(function (g) { return g.side === 'white'; }).length, nb = Q.gambits.length - nw;

    main.innerHTML = '<div class="container">' + A.pageHead({
        trail: crumbs, title: title, next: true,
        lede: !side ? Q.gambits.length + ' named gambits: ' + nw + ' for White and ' + nb + ' for Black. Each says what is offered, what you get for it, how to meet it, and how sound it really is.'
          : base.length + ' ' + (side === 'white' ? 'White' : 'Black') + ' gambits' + (group ? ' ' + (side === 'white' ? 'starting ' : '') + A.GROUP_LABEL[group] : '') + ', each linked to the opening it comes from.',
        extra: '<div class="toolbar">' + sideSwitch('#/gambits', side, GAMBIT_LABEL) +
          (side ? '<nav class="filter-links" aria-label="First move">' + [''].concat(GROUPS[side]).map(function (g) {
            var n = gambitsIn(side, g).length;
            return '<a href="#/gambits/' + side + (g ? '/' + g : '') + '"' + ((group || '') === g ? ' aria-current="true"' : '') + '>' + (g ? esc(A.GROUP_LABEL[g]) : 'All') + ' <span class="count">' + n + '</span></a>';
          }).join('') + '</nav>' : '') + '</div>' +
          '<ul class="character-legend">' +
          '<li>' + A.characterTag('Established') + '<span>Sound and seen at a high level.</span></li>' +
          '<li>' + A.characterTag('Playable') + '<span>Respectable; holds up at club level.</span></li>' +
          '<li>' + A.characterTag('Speculative') + '<span>Objectively dubious; a practical surprise weapon.</span></li></ul>'
      }) +
      '<form class="filters filters-compact" aria-label="Filter gambits" onsubmit="return false">' +
        '<div class="field field-search"><label for="g-q">Search gambits</label><input id="g-q" type="search" placeholder="Name, other name or moves" value="' + esc(q.q || '') + '"></div>' +
        '<div class="field"><label for="g-char">Character</label><select id="g-char">' + opt('', 'Any character', q.character) + ['Established', 'Playable', 'Speculative'].map(function (v) { return opt(v, v, q.character); }).join('') + '</select></div>' +
        '<div class="field"><label for="g-level">Difficulty</label><select id="g-level">' + opt('', 'Any difficulty', q.level) + ['Beginner', 'Intermediate', 'Advanced'].map(function (v) { return opt(v, v, q.level); }).join('') + '</select></div>' +
      '</form><div class="results-bar"><p id="g-count" class="muted"></p><button type="button" class="btn btn-quiet btn-sm" id="g-clear">Clear filters</button></div><div id="g-results"></div></div>';

    var ORDER = { Established: 0, Playable: 1, Speculative: 2 };
    function apply() {
      var f = { q: $('#g-q').value.trim().toLowerCase(), character: $('#g-char').value, level: $('#g-level').value };
      var words = f.q.split(/\s+/).filter(Boolean);
      var res = base.filter(function (x) {
        if (f.character && x.character !== f.character) return false;
        if (f.level && x.difficulty !== f.level) return false;
        if (words.length) { var t = [x.name, x.moves, x.eco, x.summary].concat(x.aliases).join(' ').toLowerCase(); if (!words.every(function (w) { return t.indexOf(w) >= 0; })) return false; }
        return true;
      }).sort(function (a, b) { return ORDER[a.character] - ORDER[b.character] || a.name.localeCompare(b.name); });
      $('#g-count').textContent = res.length === base.length ? 'Showing all ' + plural(res.length, 'gambit') : res.length + ' of ' + plural(base.length, 'gambit') + ' match';
      announceSoon($('#g-count').textContent);
      $('#g-clear').hidden = !(f.q || f.character || f.level);
      var sides = side ? [side] : ['white', 'black'];
      $('#g-results').innerHTML = res.length ? sides.map(function (s) {
        return (group ? [group] : GROUPS[s]).map(function (g) {
          var inG = res.filter(function (x) { return x.side === s && groupOf(x) === g; });
          if (!inG.length) return '';
          return '<section class="line-group" aria-labelledby="gs-' + s + g + '"><h2 class="h3" id="gs-' + s + g + '">' + A.side(s, GAMBIT_LABEL[s] + ': ' + A.GROUP_LABEL[g]) + ' <span class="count">' + inG.length + '</span></h2><ul class="line-cards">' + inG.map(lineCard).join('') + '</ul></section>';
        }).join('');
      }).join('') : '<div class="empty-state"><p class="h4">No gambits match.</p><p class="muted">Clear the search or pick another character or difficulty.</p><button type="button" class="btn btn-secondary btn-sm" data-clear>Clear filters</button></div>';
      A.replaceHash('#/gambits' + (side ? '/' + side : '') + (group ? '/' + group : '') + A.buildQuery({ q: f.q, character: f.character, level: f.level }));
    }
    function clear() { $('#g-q').value = ''; $('#g-char').value = ''; $('#g-level').value = ''; apply(); $('#g-q').focus(); }
    $('.filters').addEventListener('input', apply);
    $('#g-clear').addEventListener('click', clear);
    $('#g-results').addEventListener('click', function (e) { if (e.target.closest('[data-clear]')) clear(); });
    apply();
    return { title: title + ' · ' + SITE };
  };

  // ------------------------------------------------------------ library index
  var FIRST_LABEL = { '1.e4': '1.e4', '1.d4': '1.d4', '1.c4': '1.c4', '1.Nf3': '1.Nf3', other: 'Other first moves' };
  var TIME_LABEL = { quick: 'Up to 10 min', standard: '11 to 15 min', deep: '16 min or more' };
  var SORT_LABEL = { best: 'Best match', moves: 'Move order', name: 'Name (A to Z)', easy: 'Easiest first', time: 'Shortest study time' };
  var LEVEL_RANK = { Beginner: 0, Intermediate: 1, Advanced: 2, '': 1 };
  var TYPE_RANK = { family: 0, variation: 1, gambit: 2, line: 3 };
  var GROUP_RANK = { 'white-e4': 0, 'white-d4': 1, 'white-flank': 2, 'black-vs-e4': 3, 'black-vs-d4': 4, 'black-vs-flank': 5, 'white-gambits': 6, 'black-gambits': 7 };
  var FILTERS = ['type', 'side', 'first', 'cat', 'family', 'variation', 'level', 'style', 'time'];
  var FILTER_NAME = { type: 'Type', side: 'Side', first: 'First move', cat: 'Category', family: 'Family', variation: 'Variation', level: 'Difficulty', style: 'Style', time: 'Study time' };

  function timeOk(m, t) { return !t || (t === 'quick' ? m <= 10 : t === 'standard' ? m > 10 && m <= 15 : m > 15); }
  function itemHref(o) { return href(o.ref); }
  function itemTrail(o) {
    var parts = [CAT_LABEL[o.cat] || ''];
    if (o.type === 'variation' || o.type === 'line') { var f = Q.family(o.family); if (f) parts.push(f.name); }
    if (o.type === 'line') parts.push(o.ref.entry.kind === 'gambit' ? o.ref.entry.name : o.ref.entry.short);
    return parts.filter(Boolean).join(' · ');
  }
  function itemMoves(o) {
    if (o.type === 'family') return o.ref.rootMoves;
    if (o.type === 'line') return o.ref.entry.moves + ' ' + o.ref.text;
    return o.ref.moves;
  }
  function filterValueLabel(k, v) {
    if (k === 'type') return TYPE_LABEL[v] + 's';
    if (k === 'side') return v === 'white' ? 'White' : 'Black';
    if (k === 'first') return FIRST_LABEL[v];
    if (k === 'cat') return CAT_LABEL[v];
    if (k === 'family') { var f = Q.family(v); return f ? f.name + ' (' + (f.side === 'white' ? 'White' : 'Black') + ')' : v; }
    if (k === 'variation') { var x = Q.line(v); return x ? x.short : v; }
    if (k === 'time') return TIME_LABEL[v];
    return v;
  }
  function resultRow(o) {
    var x = o.type === 'line' ? o.ref.entry : o.ref;
    return '<li><a class="result" href="' + itemHref(o) + '">' +
      '<span class="result-type type-' + o.type + '">' + TYPE_LABEL[o.type] + '</span>' +
      '<span class="result-main"><span class="result-name">' + (o.side ? '<span class="side-mark side-' + o.side + '-mark" aria-hidden="true"></span>' : '') + esc(o.name) + '</span>' +
        '<span class="result-trail">' + esc(itemTrail(o)) + '</span>' +
        '<span class="result-moves notation">' + esc(itemMoves(o)) + '</span></span>' +
      '<span class="result-tags">' + (o.type === 'family'
        ? '<span>' + plural(o.ref.variations.length, 'variation') + '</span>'
        : (x.kind === 'gambit' ? A.characterTag(x.character) : '') + A.tag(x.difficulty) + (x.style ? A.tag(x.style) : '') + '<span>' + x.minutes + ' min</span>') + '</span>' +
    '</a></li>';
  }

  function browseIndex() {
    var t = totals();
    function col(side, area) {
      var label = area === 'openings' ? OPEN_LABEL[side] : GAMBIT_LABEL[side];
      var base = area === 'openings' ? '#/openings/' : '#/gambits/';
      return '<div class="browse-col"><h3 class="h3"><a href="' + base + side + '">' + A.side(side, label) + '</a></h3><ul class="browse-list">' +
        GROUPS[side].map(function (g) {
          var n = area === 'openings' ? famsIn(side, g) : gambitsIn(side, g);
          var sub = area === 'openings' ? plural(n.length, 'family') + ', ' + plural(n.reduce(function (a, f) { return a + f.variations.length; }, 0), 'variation') : plural(n.length, 'gambit');
          return '<li><a href="' + base + side + '/' + g + '"><span class="browse-name">' + esc(A.GROUP_LABEL[g]) + '</span><span class="browse-sub">' + sub + '</span></a>' +
            (area === 'openings' ? '<p class="browse-fams small">' + n.slice(0, 8).map(function (f) { return '<a href="' + href(f) + '">' + esc(f.name) + '</a>'; }).join(', ') + (n.length > 8 ? ', <a href="' + base + side + '/' + g + '">and ' + (n.length - 8) + ' more</a>' : '') + '</p>' : '') +
          '</li>';
        }).join('') + '</ul></div>';
    }
    return '<section class="section section-tight" aria-labelledby="browse-h"><div class="section-head"><h2 class="h2" id="browse-h">Browse by category</h2>' +
        '<p class="muted">Openings and gambits are separate areas. Within each, White and Black are kept apart and grouped by the first move.</p></div>' +
      '<div class="browse-area"><h3 class="h4 browse-area-title"><a href="#/openings">Openings</a> <span class="count">' + (t.families.white + t.families.black) + ' families</span></h3><div class="browse-grid">' + col('white', 'openings') + col('black', 'openings') + '</div></div>' +
      '<div class="browse-area"><h3 class="h4 browse-area-title"><a href="#/gambits">Gambits</a> <span class="count">' + Q.gambits.length + ' gambits</span></h3><div class="browse-grid">' + col('white', 'gambits') + col('black', 'gambits') + '</div></div>' +
      '<p class="section-foot"><a href="' + A.explorerHref('white') + '">Opening Explorer</a> · <a href="#/lessons">All lessons</a> · <a href="#/glossary">Glossary</a></p></section>';
  }

  A.views.library = function (q) {
    q = q || {};
    // Old lesson-library links (#/library?cat=tactics...) now live at #/lessons.
    if (q.state || q.line || (q.cat && Q.category(q.cat)) || (q.time && /^(short|medium|long)$/.test(q.time)) || (q.side === 'both')) {
      location.replace('#/lessons' + A.buildQuery(q)); return {};
    }
    var t = totals();
    function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (cur === v ? ' selected' : '') + '>' + esc(label) + '</option>'; }
    function famOptions(cur, side, cat) {
      return ['white', 'black'].filter(function (s) { return !side || s === side; }).map(function (s) {
        var fams = Q.families.filter(function (f) { return f.side === s && f.variations.length && (!cat || cat === s + '-' + f.group); })
          .sort(function (a, b) { return a.name.localeCompare(b.name); });
        return fams.length ? '<optgroup label="' + OPEN_LABEL[s] + '">' + fams.map(function (f) { return opt(f.id, f.name, cur); }).join('') + '</optgroup>' : '';
      }).join('');
    }
    function varOptions(famId, cur) {
      var f = Q.family(famId);
      return f ? f.variations.map(function (x) { return opt(x.id, x.short, cur); }).join('') : '';
    }

    main.innerHTML = '<div class="container">' + A.pageHead({
        trail: [['Library']], title: 'Chess Library',
        lede: 'Every opening family, variation, move line and gambit in one index. Search by name, other names, moves or ideas, or browse by category below.',
        extra: '<dl class="lib-counts">' +
          '<div><dt>Opening families</dt><dd>' + (t.families.white + t.families.black) + '<span>' + t.families.white + ' White, ' + t.families.black + ' Black</span></dd></div>' +
          '<div><dt>Variations</dt><dd>' + (t.variations.white + t.variations.black) + '<span>' + t.variations.white + ' White, ' + t.variations.black + ' Black</span></dd></div>' +
          '<div><dt>Move lines</dt><dd>' + t.lines + '<span>inside variations and gambits</span></dd></div>' +
          '<div><dt>Gambits</dt><dd>' + Q.gambits.length + '<span>' + t.gambits.white + ' White, ' + t.gambits.black + ' Black</span></dd></div>' +
          '<div><dt>Lessons</dt><dd>' + Q.lessons.length + '<span>in ' + Q.categories.length + ' categories</span></dd></div>' +
        '</dl>'
      }) +
      '<form class="filters lib-filters" role="search" aria-label="Search the library" onsubmit="return false">' +
        '<div class="field field-search field-wide"><label for="l-q">Search the library</label><input id="l-q" type="search" autocomplete="off" placeholder="Najdorf, Spanish, 1.e4 c5 2.c3, Maroczy Bind..." value="' + esc(q.q || '') + '" aria-describedby="l-q-help"><p id="l-q-help" class="small muted">Finds names, other names, ECO codes, ideas and move sequences.</p></div>' +
        '<details class="more-filters" id="l-more"><summary>Filters and sorting</summary><div class="more-filters-grid">' + '<div class="field"><label for="l-type">Type</label><select id="l-type">' + opt('', 'Everything', q.type) + Object.keys(TYPE_LABEL).map(function (k) { return opt(k, TYPE_LABEL[k] + 's', q.type); }).join('') + '</select></div>' +
        '<div class="field"><label for="l-side">Side</label><select id="l-side">' + opt('', 'Any side', q.side) + opt('white', 'White', q.side) + opt('black', 'Black', q.side) + '</select></div>' +
        '<div class="field"><label for="l-first">First move</label><select id="l-first">' + opt('', 'Any first move', q.first) + Object.keys(FIRST_LABEL).map(function (k) { return opt(k, FIRST_LABEL[k], q.first); }).join('') + '</select></div>' +
        '<div class="field"><label for="l-cat">Category</label><select id="l-cat">' + opt('', 'All categories', q.cat) + Object.keys(CAT_LABEL).map(function (k) { return opt(k, CAT_LABEL[k], q.cat); }).join('') + '</select></div>' +
        '<div class="field"><label for="l-family">Opening family</label><select id="l-family">' + opt('', 'Any family', q.family) + famOptions(q.family, q.side, q.cat) + '</select></div>' +
        '<div class="field"><label for="l-variation">Variation</label><select id="l-variation"' + (q.family ? '' : ' disabled') + '>' + opt('', q.family ? 'Any variation' : 'Choose a family first', q.variation) + varOptions(q.family, q.variation) + '</select></div>' +
        '<div class="field"><label for="l-level">Difficulty</label><select id="l-level">' + opt('', 'Any difficulty', q.level) + ['Beginner', 'Intermediate', 'Advanced'].map(function (v) { return opt(v, v, q.level); }).join('') + '</select></div>' +
        '<div class="field"><label for="l-style">Playing style</label><select id="l-style">' + opt('', 'Any style', q.style) + ['Solid', 'Positional', 'Flexible', 'Attacking', 'Sharp'].map(function (v) { return opt(v, v, q.style); }).join('') + '</select></div>' +
        '<div class="field"><label for="l-time">Study time</label><select id="l-time">' + opt('', 'Any study time', q.time) + Object.keys(TIME_LABEL).map(function (k) { return opt(k, TIME_LABEL[k], q.time); }).join('') + '</select></div>' +
        '<div class="field"><label for="l-sort">Sort by</label><select id="l-sort">' + Object.keys(SORT_LABEL).map(function (k) { return opt(k, SORT_LABEL[k], q.sort || ''); }).join('') + '</select></div></div></details>' +
      '</form>' +
      '<div class="active-filters" id="l-active" aria-label="Active filters"></div>' +
      '<div class="results-bar"><p id="l-count" class="muted"></p></div>' +
      '<div id="l-results"></div>' +
      '<div id="l-browse">' + browseIndex() + '</div></div>';

    var ids = { q: 'l-q', type: 'l-type', side: 'l-side', first: 'l-first', cat: 'l-cat', family: 'l-family', variation: 'l-variation', level: 'l-level', style: 'l-style', time: 'l-time', sort: 'l-sort' };
    var PAGE = 30, shown = PAGE;
    function current() { var o = {}; Object.keys(ids).forEach(function (k) { o[k] = $('#' + ids[k]).value.trim(); }); return o; }
    if (!q.sort) $('#l-sort').value = q.q ? 'best' : 'moves';
    // Wide screens show every filter; phones fold them away unless one is already in use.
    if (window.matchMedia('(min-width: 761px)').matches || q.sort || FILTERS.some(function (k) { return q[k]; })) $('#l-more').open = true;

    function apply(fromField) {
      var f = current();
      if (fromField === 'l-family' || fromField === 'l-side' || fromField === 'l-cat') {
        // Keep the family and variation lists consistent with side and category.
        var famSel = $('#l-family'), keep = f.family;
        famSel.innerHTML = opt('', 'Any family', '') + famOptions(keep, f.side, f.cat);
        if (famSel.value !== keep) f.family = '';
        var vs = $('#l-variation');
        vs.innerHTML = opt('', f.family ? 'Any variation' : 'Choose a family first', '') + varOptions(f.family, '');
        vs.disabled = !f.family;
        f.variation = '';
      }
      if (fromField === 'l-q') { var s = $('#l-sort'); if (f.q && s.value === 'moves' && !s.dataset.touched) s.value = f.sort = 'best'; if (!f.q && s.value === 'best') s.value = f.sort = 'moves'; }
      if (fromField === 'l-sort') $('#l-sort').dataset.touched = '1';
      var active = FILTERS.filter(function (k) { return f[k]; });
      var searching = !!f.q || active.length > 0;
      var res = Q.search(f.q).filter(function (r) {
        var o = r.item;
        if (f.type && o.type !== f.type) return false;
        if (f.side && o.side !== f.side) return false;
        if (f.first && o.first !== f.first) return false;
        if (f.cat && o.cat !== f.cat) return false;
        if (f.family && o.family !== f.family) return false;
        if (f.variation && o.variation !== f.variation) return false;
        if (f.level && o.type !== 'family' && o.difficulty !== f.level) return false;
        if (f.style && o.type !== 'family' && o.style !== f.style) return false;
        if (f.level && o.type === 'family' && !o.ref.variations.some(function (x) { return x.difficulty === f.level; })) return false;
        if (f.style && o.type === 'family' && o.ref.styles.indexOf(f.style) < 0) return false;
        if (f.time && !timeOk(o.minutes, f.time)) return false;
        return true;
      });
      var sort = f.sort || 'moves';
      if (sort === 'best' && !f.q) sort = 'moves';
      function order(a, b) {
        var sa = a.order || [], sb = b.order || [];
        for (var i = 0; i < Math.min(sa.length, sb.length); i++) if (sa[i] !== sb[i]) return sa[i] < sb[i] ? -1 : 1;
        return sa.length - sb.length;
      }
      res.sort(function (r1, r2) {
        var a = r1.item, b = r2.item;
        if (sort === 'best') return r2.score - r1.score || TYPE_RANK[a.type] - TYPE_RANK[b.type] || a.name.localeCompare(b.name);
        if (sort === 'name') return a.name.localeCompare(b.name) || TYPE_RANK[a.type] - TYPE_RANK[b.type];
        if (sort === 'easy') return LEVEL_RANK[a.difficulty || ''] - LEVEL_RANK[b.difficulty || ''] || a.minutes - b.minutes || a.name.localeCompare(b.name);
        if (sort === 'time') return a.minutes - b.minutes || a.name.localeCompare(b.name);
        return GROUP_RANK[a.cat] - GROUP_RANK[b.cat] || order(a, b) || TYPE_RANK[a.type] - TYPE_RANK[b.type];
      });

      $('#l-active').innerHTML = active.length || f.q ? '<span class="small muted">Showing:</span>' +
        (f.q ? '<button type="button" class="filter-chip" data-remove="q">Search: ' + esc(f.q) + '<span class="sr-only">, remove</span><span aria-hidden="true" class="x">&times;</span></button>' : '') +
        active.map(function (k) { return '<button type="button" class="filter-chip" data-remove="' + k + '">' + esc(FILTER_NAME[k]) + ': ' + esc(filterValueLabel(k, f[k])) + '<span class="sr-only">, remove</span><span aria-hidden="true" class="x">&times;</span></button>'; }).join('') +
        '<button type="button" class="btn btn-quiet btn-sm" data-clear>Clear all</button>' : '';
      $('#l-browse').hidden = searching;
      if (!searching) {
        $('#l-count').textContent = 'Search above, choose a filter, or browse by category.';
        $('#l-results').innerHTML = '';
      } else {
        var lessonsHit = f.q ? Q.lessons.filter(function (l) {
          var text = [l.title, l.summary, l.objective].join(' ').toLowerCase().replace(/'/g, '');
          return f.q.toLowerCase().replace(/'/g, '').split(/\s+/).every(function (w) { return text.indexOf(w) >= 0; });
        }) : [];
        $('#l-count').textContent = res.length ? plural(res.length, 'entry') + ' found' + (lessonsHit.length ? ', and ' + plural(lessonsHit.length, 'lesson') : '') : 'No entries found';
        $('#l-results').innerHTML = (res.length ? '<ol class="results">' + res.slice(0, shown).map(function (r) { return resultRow(r.item); }).join('') + '</ol>' +
            (res.length > shown ? '<p class="more-row"><button type="button" class="btn btn-secondary btn-sm" data-more>Show ' + Math.min(PAGE, res.length - shown) + ' more of ' + (res.length - shown) + '</button></p>' : '')
          : '<div class="empty-state"><p class="h4">Nothing in the library matches.</p><p class="muted">Check the spelling, try another name for the opening (for example Spanish for Ruy Lopez), or remove a filter.</p><button type="button" class="btn btn-secondary btn-sm" data-clear>Clear search and filters</button></div>') +
          (lessonsHit.length ? '<section class="section section-tight" aria-labelledby="lh-h"><h2 class="h3" id="lh-h">Lessons that mention it</h2>' + A.lessonList(lessonsHit.slice(0, 4)) +
            (lessonsHit.length > 4 ? '<p class="section-foot"><a href="#/lessons' + A.buildQuery({ q: f.q }) + '">All ' + lessonsHit.length + ' matching lessons</a></p>' : '') + '</section>' : '');
      }
      var state = {};
      Object.keys(ids).forEach(function (k) { state[k] = f[k]; });
      if (state.sort === (f.q ? 'best' : 'moves')) state.sort = '';
      announceSoon($('#l-count').textContent);
      A.replaceHash('#/library' + A.buildQuery(state));
    }
    var form = $('.lib-filters');
    form.addEventListener('input', function (e) { shown = PAGE; apply(e.target.id); });
    main.addEventListener('click', onClick);
    A.teardown.push(function () { main.removeEventListener('click', onClick); });
    function onClick(e) {
      var rm = e.target.closest('[data-remove]');
      if (rm) {
        var k = rm.dataset.remove, el = $('#' + ids[k]);
        el.value = '';
        apply(k === 'family' ? 'l-family' : k === 'side' ? 'l-side' : k === 'cat' ? 'l-cat' : ids[k]);
        var next = $('#l-active [data-remove]') || $('#l-q');
        next.focus();
        return;
      }
      if (e.target.closest('[data-clear]')) {
        Object.keys(ids).forEach(function (k) { if (k !== 'sort') $('#' + ids[k]).value = ''; });
        $('#l-sort').value = 'moves';
        apply('l-family');
        $('#l-q').focus();
        return;
      }
      var more = e.target.closest('[data-more]');
      if (more) {
        var before = shown; shown += PAGE; apply();
        var rows = $$('#l-results .results > li a');
        if (rows[before]) rows[before].focus();
      }
    }
    apply();
    return { title: 'Chess Library · ' + SITE };
  };
})();
