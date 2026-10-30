/*
 * The Quiet Gambit — v4 screens.
 * One purpose and one obvious next action per screen:
 *   Home (continue or pick a door), Search, Openings and Gambits browse,
 *   the opening page (branch tree + board, train any line), the gambit page,
 *   Lessons (categories and paths) and My study.
 * Loaded after views-library.js; these views replace the older ones.
 */
(function () {
  'use strict';

  var U = window.QGUI, Q = window.QG, A = window.QGA, C = window.QGChess, P = window.QGProgress, T = window.QGTrainer;
  var esc = U.esc, $ = U.$, $$ = U.$$;
  var main = A.main, SITE = A.SITE;
  var GROUPS = A.GROUPS;
  var SIDE_OPEN = { white: 'White openings', black: 'Black openings' };
  var SIDE_GAMBIT = { white: 'White gambits', black: 'Black gambits' };
  var GROUP_SHORT = { e4: '1.e4', d4: '1.d4', flank: 'Flank', 'vs-e4': 'vs 1.e4', 'vs-d4': 'vs 1.d4', 'vs-flank': 'vs flank' };
  var plural = A.plural;

  function page(cls, html) { return '<div class="page ' + cls + '">' + html + '</div>'; }
  function back(href, label) { return '<a class="back-link" href="' + href + '">' + U.ICON.prev + '<span>' + esc(label) + '</span></a>'; }
  function trainHref(x, which, mode) { return '#/train/' + encodeURIComponent(x.id) + '/' + encodeURIComponent(which || 'typical') + (mode === 'practice' ? '?mode=practice' : ''); }
  function sideDot(side) { return '<span class="side-dot side-dot-' + side + '" aria-hidden="true"></span>'; }
  function dueChip(keys) { return keys.some(function (k) { return T.status(k) === 'due'; }) ? '<span class="chip-due">Due</span>' : ''; }
  function entryKeys(x) { return ['typical'].concat(x.lines.map(function (l) { return l.id; })).map(function (w) { return x.id + '/' + w; }); }
  A.trainHref = trainHref;

  // ------------------------------------------------------------ next action (one place decides "Continue")
  A.nextAction = function () {
    var tl = T.last();
    if (tl && Date.now() - tl.at < 14 * 864e5) {
      var parts = tl.key.split('/'), x = Q.line(parts[0]);
      if (x) {
        var nm = parts[1] === 'typical' ? 'typical move order' : ((x.lines.filter(function (l) { return l.id === parts[1]; })[0] || {}).name || 'line');
        return { label: 'Continue training: ' + (x.kind === 'gambit' ? x.name : x.short) + ', ' + nm, why: 'You stopped at move ' + tl.ply + '.', href: trainHref(x, parts[1], tl.mode) };
      }
    }
    // A first visit (nothing trained, no lesson touched, no path chosen): start with one opening line.
    var first = Q.line('w-italian-giuoco');
    if (first && !T.count() && !Q.lessons.some(function (l) { return P.record(l.id); }) && !P.activePath() && !P.prefs()) {
      return { label: 'Train your first line: the Italian Game', why: 'Play a classic opening from move one. The board answers and explains the key moves.', href: trainHref(first, 'typical') };
    }
    var n = A.nextUp();
    if (n) return { label: (n.resume ? 'Continue: ' : 'Start: ') + n.lesson.title, why: n.why, href: A.lessonHref(n.lesson, n.path && n.path.id) };
    return { label: 'Open My study', why: 'Every lesson is complete. Review what is due.', href: '#/study' };
  };

  // ------------------------------------------------------------ search field (header and pages)
  function searchForm(id, value, big) {
    return '<form class="search' + (big ? ' search-big' : '') + '" role="search" action="#/search" data-search-form>' +
      '<label class="sr-only" for="' + id + '">Search openings, gambits and lessons</label>' +
      '<svg class="ico" viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M13 13l4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' +
      '<input id="' + id + '" type="search" name="q" autocomplete="off" placeholder="Search: Najdorf, Spanish, 1.e4 c5…" value="' + esc(value || '') + '"></form>';
  }
  A.searchForm = searchForm;
  document.addEventListener('submit', function (e) {
    var f = e.target.closest && e.target.closest('[data-search-form]');
    if (!f) return;
    e.preventDefault();
    var v = f.querySelector('input').value.trim();
    location.hash = '#/search' + A.buildQuery({ q: v });
  });

  // ------------------------------------------------------------ home
  A.views.home = function () {
    var t = A.libraryTotals(), na = A.nextAction();
    main.innerHTML = page('page-home',
      '<section class="home-hero"><div class="home-copy">' +
        '<h1 class="display" tabindex="-1">Learn openings one clear line at a time.</h1>' +
        '<p class="lede">Play each line from the first move as your side. The board answers, and key moves come with a short reason.</p>' +
        searchForm('home-q', '', true) +
        '<div class="continue-card"><p class="continue-why">' + esc(na.why) + '</p><a class="btn btn-primary btn-lg" href="' + na.href + '">' + esc(na.label) + '</a></div>' +
      '</div><figure class="home-board" aria-labelledby="home-board-cap"><div id="home-board"></div><figcaption id="home-board-cap"><a href="' + trainHref(Q.line('w-italian-giuoco'), 'typical') + '">The Italian Game after 3.Bc4</a>, the first line most players learn.</figcaption></figure></section>' +
      // White and Black as two fields of their own colour, each with the openings most players start with.
      '<section class="home-sides" aria-label="Choose a side">' + ['white', 'black'].map(function (s) {
        var fams = Q.families.filter(function (f) { return f.side === s && f.variations.length; })
          .sort(function (a, b) { return b.variations.length - a.variations.length || a.root.length - b.root.length; }).slice(0, 5);
        return '<div class="side-field side-field-' + s + '"><h2 class="h2"><a href="#/openings/' + s + '">' + SIDE_OPEN[s] + '</a></h2>' +
          '<p class="side-field-sub">' + t.families[s] + ' openings, ' + (s === 'white' ? 'by your first move' : 'by what White plays first') + '</p>' +
          '<ul class="side-field-list">' + fams.map(function (f) {
            return '<li><a href="#/family/' + encodeURIComponent(f.id) + '"><span>' + esc(f.name) + '</span><span class="notation">' + esc(f.rootMoves) + '</span></a></li>';
          }).join('') + '</ul><a class="side-field-all" href="#/openings/' + s + '">All ' + t.families[s] + ' ' + (s === 'white' ? 'White' : 'Black') + ' openings</a></div>';
      }).join('') + '</section>' +
      '<p class="home-more"><a href="#/gambits">' + Q.gambits.length + ' gambits</a>, each labelled for soundness. <a href="#/lessons">' + Q.lessons.length + ' lessons</a> on tactics, strategy and endgames, in ' + Q.categories.length + ' categories.</p>');
    // The first screen shows the subject itself: a real position from the first line to train.
    var hb = U.boardFrame($('#home-board'), { fen: 'start', label: 'Italian Game after 1.e4 e5 2.Nf3 Nc6 3.Bc4', note: '' });
    var hs = Q.stateAt(['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4']);
    if (hs) hb.board.setPosition(hs, { lastMove: 'f1c4', arrows: [['c4', 'f7']] });
    return { title: SITE + ': learn chess openings one line at a time' };
  };

  // ------------------------------------------------------------ search
  var LEVELS = ['Beginner', 'Intermediate', 'Advanced'];
  var SKILL_CATS = Q.categories.filter(function (c) { return c.group === 'Skills'; });
  var OPEN_CATS = ['white-openings', 'black-vs-e4', 'black-vs-d4', 'black-vs-flank'], GAMBIT_CATS = ['white-gambits', 'black-gambits'];
  var FIRST_OF_CAT = { 'white-openings': '', 'black-vs-e4': '1.e4', 'black-vs-d4': '1.d4', 'black-vs-flank': 'flank' };

  A.views.search = function (q) {
    q = q || {};
    function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (cur === v ? ' selected' : '') + '>' + esc(label) + '</option>'; }
    main.innerHTML = page('page-search',
      '<header class="page-head-v4"><h1 class="h1" tabindex="-1">Search</h1></header>' +
      searchForm('s-q', q.q, true) +
      '<form class="filter-row" aria-label="Filters" onsubmit="return false">' +
        '<div class="field"><label for="s-side">Side</label><select id="s-side">' + opt('', 'Any side', q.side) + opt('white', 'White', q.side) + opt('black', 'Black', q.side) + '</select></div>' +
        '<div class="field"><label for="s-first">First move</label><select id="s-first" aria-describedby="s-first-help">' + opt('', 'Any', q.first) + opt('1.e4', '1.e4', q.first) + opt('1.d4', '1.d4', q.first) + opt('flank', 'Flank openings', q.first) + '</select><span id="s-first-help" class="sr-only">For Black openings, White\'s first move</span></div>' +
        '<div class="field"><label for="s-cat">Category</label><select id="s-cat">' + opt('', 'All', q.cat) + opt('openings', 'Openings', q.cat) + opt('gambits', 'Gambits', q.cat) + SKILL_CATS.map(function (c) { return opt(c.id, c.title, q.cat); }).join('') + '</select></div>' +
        '<div class="field"><label for="s-level">Level</label><select id="s-level">' + opt('', 'Any', q.level) + LEVELS.map(function (l) { return opt(l, l, q.level); }).join('') + '</select></div>' +
      '</form>' +
      '<p class="results-count" id="s-count"></p><div id="s-results"></div>');

    var open = {};
    function firstOk(item, f) {
      if (!f) return true;
      return f === 'flank' ? (item.first && item.first !== '1.e4' && item.first !== '1.d4') : item.first === f;
    }
    function apply() {
      var f = { q: $('#s-q').value.trim(), side: $('#s-side').value, first: $('#s-first').value, cat: $('#s-cat').value, level: $('#s-level').value };
      var any = f.q || f.side || f.first || f.cat || f.level;
      A.replaceHash('#/search' + A.buildQuery(f));
      if (!any) {
        $('#s-count').textContent = '';
        $('#s-results').innerHTML = '<p class="hint-line">Type a name, another name for it, an ECO code or moves such as <span class="notation">1.e4 c5 2.c3</span>. Or browse <a href="#/openings">Openings</a>, <a href="#/gambits">Gambits</a> and <a href="#/lessons">Lessons</a>.</p>';
        return;
      }
      var skill = f.cat && f.cat !== 'openings' && f.cat !== 'gambits';
      var lib = skill ? [] : Q.search(f.q).filter(function (r) {
        var o = r.item;
        if (f.side && o.side !== f.side) return false;
        if (!firstOk(o, f.first)) return false;
        if (f.cat === 'openings' && o.area !== 'openings') return false;
        if (f.cat === 'gambits' && o.area !== 'gambits') return false;
        if (f.level && (o.type === 'family' ? !o.ref.variations.some(function (x) { return x.difficulty === f.level; }) : o.difficulty !== f.level)) return false;
        return true;
      }).sort(function (a, b) { return b.score - a.score || a.item.name.localeCompare(b.item.name); });
      var words = f.q.toLowerCase().replace(/'/g, '').split(/\s+/).filter(Boolean);
      var lessons = Q.lessons.filter(function (l) {
        if (f.side && l.side !== f.side && l.side !== 'both') return false;
        if (f.level && l.level !== f.level) return false;
        if (f.cat === 'openings' && OPEN_CATS.indexOf(l.category) < 0) return false;
        if (f.cat === 'gambits' && GAMBIT_CATS.indexOf(l.category) < 0) return false;
        if (skill && l.category !== f.cat) return false;
        if (f.first && FIRST_OF_CAT[l.category] !== undefined && FIRST_OF_CAT[l.category] && FIRST_OF_CAT[l.category] !== f.first) return false;
        if (f.first && FIRST_OF_CAT[l.category] === undefined && GAMBIT_CATS.indexOf(l.category) < 0) return false;
        if (!words.length) return true;
        var t = [l.title, l.summary, l.objective].join(' ').toLowerCase().replace(/'/g, '');
        return words.every(function (w) { return t.indexOf(w) >= 0; });
      });
      var groups = [
        ['family', 'Openings'], ['gambit', 'Gambits'], ['variation', 'Variations'], ['line', 'Lines']
      ].map(function (g) { return { key: g[0], title: g[1], items: lib.filter(function (r) { return r.item.type === g[0]; }).map(function (r) { return r.item; }) }; });
      groups.push({ key: 'lesson', title: 'Lessons', items: lessons });
      var total = groups.reduce(function (a, g) { return a + g.items.length; }, 0);
      $('#s-count').textContent = total ? plural(total, 'result') : '';
      if (A.announceSoon) A.announceSoon(total ? plural(total, 'result') : 'No results');
      if (!total) {
        $('#s-results').innerHTML = '<div class="empty"><p class="h4">Nothing matches' + (f.q ? ' “' + esc(f.q) + '”' : '') + '.</p>' +
          '<p>Try another name (Spanish for Ruy Lopez), an ECO code, or moves like <span class="notation">1.e4 c5</span>.' + (f.side || f.first || f.cat || f.level ? ' Or loosen the filters.' : '') + '</p>' +
          '<p><button type="button" class="btn btn-secondary" data-clear>Clear search and filters</button></p></div>';
        return;
      }
      $('#s-results').innerHTML = groups.filter(function (g) { return g.items.length; }).map(function (g) {
        var cap = open[g.key] ? g.items.length : 5;
        return '<section class="result-group" aria-labelledby="rg-' + g.key + '"><h2 class="h4" id="rg-' + g.key + '">' + g.title + ' <span class="count">' + g.items.length + '</span></h2><ul class="rows">' +
          g.items.slice(0, cap).map(g.key === 'lesson' ? lessonRow : libRow).join('') + '</ul>' +
          (g.items.length > cap ? '<button type="button" class="btn btn-quiet" data-more="' + g.key + '">Show all ' + g.items.length + '</button>' : '') + '</section>';
      }).join('');
    }
    function libRow(o) {
      var x = o.type === 'line' ? o.ref.entry : o.ref;
      var ctx = o.type === 'family' ? (o.side === 'white' ? 'White, ' : 'Black, ') + GROUP_SHORT[x.group] :
        o.type === 'line' ? (x.kind === 'gambit' ? x.name : x.fam.name + ', ' + x.short) :
        o.type === 'variation' ? x.fam.name : (x.side === 'white' ? 'White gambit' : 'Black gambit');
      var moves = o.type === 'family' ? x.rootMoves : o.type === 'line' ? x.moves + ' ' + o.ref.text : x.moves;
      var href = o.type === 'family' ? '#/family/' + encodeURIComponent(x.id) :
        o.type === 'gambit' ? '#/gambit/' + encodeURIComponent(x.id) :
        o.type === 'variation' ? '#/family/' + encodeURIComponent(x.familyId) + '?v=' + encodeURIComponent(x.id) :
        (x.kind === 'gambit' ? '#/gambit/' + encodeURIComponent(x.id) + '?line=' : '#/family/' + encodeURIComponent(x.familyId) + '?v=' + encodeURIComponent(x.id) + '&line=') + encodeURIComponent(o.ref.id);
      var meta = o.type === 'family' ? plural(x.variations.length, 'variation') : x.difficulty;
      var train = o.type === 'family' ? '' : '<a class="btn btn-quiet btn-sm row-train" href="' + trainHref(x, o.type === 'line' ? o.ref.id : 'typical') + '" aria-label="Train ' + esc(o.name) + '">Train</a>';
      return '<li class="row"><a class="row-main" href="' + href + '">' + sideDot(o.side) +
        '<span class="row-text"><span class="row-name">' + esc(o.name) + '</span><span class="row-ctx">' + esc(ctx) + '</span><span class="row-moves notation">' + esc(moves) + '</span></span>' +
        '<span class="row-meta">' + esc(meta) + '</span></a>' + train + '</li>';
    }
    function lessonRow(l) {
      return '<li class="row"><a class="row-main" href="' + A.lessonHref(l) + '">' + (l.side === 'both' ? '<span class="side-dot" aria-hidden="true"></span>' : sideDot(l.side)) +
        '<span class="row-text"><span class="row-name">' + esc(l.title) + '</span><span class="row-ctx">' + esc(Q.category(l.category).title) + '</span></span>' +
        '<span class="row-meta">' + (P.isDone(l.id) ? 'Done' : l.minutes + ' min') + '</span></a></li>';
    }
    var timer;
    $('#s-q').addEventListener('input', function () { window.clearTimeout(timer); timer = window.setTimeout(apply, 150); });
    $('.filter-row').addEventListener('change', apply);
    $('#s-results').addEventListener('click', function (e) {
      var m = e.target.closest('[data-more]');
      if (m) { var g = m.dataset.more; open[g] = true; apply(); var rows = $$('#rg-' + g + ' ~ .rows a.row-main'); if (rows[5]) rows[5].focus(); return; }
      if (e.target.closest('[data-clear]')) { $('#s-q').value = ''; $$('.filter-row select').forEach(function (s) { s.value = ''; }); apply(); $('#s-q').focus(); }
    });
    apply();
    window.setTimeout(function () { var i = $('#s-q'); if (i && !q.q) i.focus(); }, 0);
    return { title: 'Search · ' + SITE };
  };

  // ------------------------------------------------------------ openings and gambits browse
  function segLinks(base, side, group) {
    return '<nav class="segmented" aria-label="First move">' + [''].concat(GROUPS[side]).map(function (g) {
      return '<a href="' + base + '/' + side + (g ? '/' + g : '') + '"' + ((group || '') === g ? ' aria-current="true"' : '') + '>' + (g ? GROUP_SHORT[g] : 'All') + '</a>';
    }).join('') + '</nav>';
  }
  function famRow(f) {
    var keys = [];
    f.variations.forEach(function (x) { keys = keys.concat(entryKeys(x)); });
    return '<li class="row"><a class="row-main" href="#/family/' + encodeURIComponent(f.id) + '">' +
      '<span class="row-text"><span class="row-name">' + esc(f.name) + '</span><span class="row-moves notation">' + esc(f.rootMoves) + '</span></span>' +
      '<span class="row-meta">' + plural(f.variations.length, 'variation') + dueChip(keys) + '</span></a></li>';
  }
  function gambitRow(g) {
    return '<li class="row"><a class="row-main" href="#/gambit/' + encodeURIComponent(g.id) + '">' +
      '<span class="row-text"><span class="row-name">' + esc(g.name) + '</span><span class="row-moves notation">' + esc(g.moves) + '</span></span>' +
      '<span class="row-meta"><span class="soundness soundness-' + g.character.toLowerCase() + '">' + esc(g.character) + '</span>' + dueChip(entryKeys(g)) + '</span></a></li>';
  }
  function chooseSide(kind) {
    var isO = kind === 'openings';
    main.innerHTML = page('page-browse',
      '<header class="page-head-v4"><h1 class="h1" tabindex="-1">' + (isO ? 'Openings' : 'Gambits') + '</h1><p class="lede">' + (isO ? 'Choose the side you want to play.' : 'Pawn sacrifices for time and open lines, each labelled for how sound it is.') + '</p></header>' +
      '<nav class="doors doors-2" aria-label="Choose a side">' + ['white', 'black'].map(function (s) {
        var n = isO ? Q.families.filter(function (f) { return f.side === s && f.variations.length; }).length : Q.gambits.filter(function (g) { return g.side === s; }).length;
        return '<a class="door door-' + s + '" href="#/' + kind + '/' + s + '"><span class="door-mark" aria-hidden="true"></span><span class="door-title">' + (isO ? SIDE_OPEN[s] : SIDE_GAMBIT[s]) + '</span><span class="door-sub">' + n + (isO ? ' openings, ' + (s === 'white' ? 'by your first move' : 'by White\'s first move') : ' gambits') + '</span></a>';
      }).join('') + '</nav>' +
      (isO ? '<p class="foot-link"><a href="#/gambits">Gambits</a> are in their own section.</p>' : ''));
    return { title: (isO ? 'Openings' : 'Gambits') + ' · ' + SITE };
  }
  A.views.openings = function (side, group, q) {
    q = q || {};
    if (q.view) { location.replace('#/openings/' + (side || 'white')); return {}; }
    if (q.group && !group) { location.replace('#/openings/' + side + '/' + q.group); return {}; }
    if (!side) return chooseSide('openings');
    if (!SIDE_OPEN[side] || (group && GROUPS[side].indexOf(group) < 0)) return A.views.notFound();
    var gs = group ? [group] : GROUPS[side];
    main.innerHTML = page('page-browse',
      '<header class="page-head-v4">' + back('#/openings', 'Openings') + '<h1 class="h1" tabindex="-1">' + SIDE_OPEN[side] + '</h1>' + segLinks('#/openings', side, group) + '</header>' +
      gs.map(function (g) {
        var fams = Q.families.filter(function (f) { return f.side === side && f.group === g && f.variations.length; })
          .sort(function (a, b) { return a.root.length - b.root.length || (a.rootMoves < b.rootMoves ? -1 : 1); });
        var ng = Q.gambits.filter(function (x) { return x.side === side && A.groupOf(x) === g; }).length;
        return '<section class="browse-group" aria-labelledby="bg-' + g + '"><h2 class="h3" id="bg-' + g + '">' + A.GROUP_LABEL[g] + '</h2>' +
          '<ul class="rows">' + fams.map(famRow).join('') + '</ul>' +
          (ng ? '<p class="foot-link"><a href="#/gambits/' + side + '/' + g + '">' + plural(ng, 'gambit') + ' after ' + GROUP_SHORT[g].replace('vs ', '') + '</a></p>' : '') + '</section>';
      }).join(''));
    return { title: SIDE_OPEN[side] + ' · ' + SITE };
  };
  A.views.gambits = function (side, group, q) {
    q = q || {};
    if (q.side && !side) { location.replace('#/gambits/' + q.side); return {}; }
    if (!side) return chooseSide('gambits');
    if (!SIDE_GAMBIT[side] || (group && GROUPS[side].indexOf(group) < 0)) return A.views.notFound();
    var ORDER = { Established: 0, Playable: 1, Speculative: 2 };
    main.innerHTML = page('page-browse',
      '<header class="page-head-v4">' + back('#/gambits', 'Gambits') + '<h1 class="h1" tabindex="-1">' + SIDE_GAMBIT[side] + '</h1>' + segLinks('#/gambits', side, group) + '</header>' +
      '<details class="legend"><summary>What do the soundness labels mean?</summary><dl>' +
        '<div><dt><span class="soundness soundness-established">Established</span></dt><dd>Sound, and played at a high level.</dd></div>' +
        '<div><dt><span class="soundness soundness-playable">Playable</span></dt><dd>Respectable; holds up at club level.</dd></div>' +
        '<div><dt><span class="soundness soundness-speculative">Speculative</span></dt><dd>Objectively dubious; a practical surprise weapon.</dd></div></dl></details>' +
      (group ? [group] : GROUPS[side]).map(function (g) {
        var list = Q.gambits.filter(function (x) { return x.side === side && A.groupOf(x) === g; })
          .sort(function (a, b) { return ORDER[a.character] - ORDER[b.character] || a.name.localeCompare(b.name); });
        return list.length ? '<section class="browse-group" aria-labelledby="gg-' + g + '"><h2 class="h3" id="gg-' + g + '">' + A.GROUP_LABEL[g] + '</h2><ul class="rows">' + list.map(gambitRow).join('') + '</ul></section>' : '';
      }).join(''));
    return { title: SIDE_GAMBIT[side] + ' · ' + SITE };
  };

  // ------------------------------------------------------------ opening page: branch tree + board
  // Shared moves appear once; each variation sits under the move where it parts ways.
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
  function moverDot(ply) { return '<span class="mover mover-' + (ply % 2 === 0 ? 'w' : 'b') + '" aria-hidden="true"></span>'; }

  function studyPage(x0, f, q) {
    // x0: selected entry; f: family (null for a gambit page)
    var isG = !f;
    var sel = x0, which = q.line && sel.lines.some(function (l) { return l.id === q.line; }) ? q.line : 'typical';
    var hdrBack = isG ? back('#/gambits/' + sel.side + '/' + A.groupOf(sel), SIDE_GAMBIT[sel.side]) : back('#/openings/' + f.side + '/' + f.group, SIDE_OPEN[f.side] + ', ' + GROUP_SHORT[f.group]);
    var title = isG ? sel.name : f.name;
    var sub = isG ? '<span class="soundness soundness-' + sel.character.toLowerCase() + '">' + esc(sel.character) + '</span> <span class="notation">' + esc(sel.moves) + '</span>' : '<span class="notation">' + esc(f.rootMoves) + '</span>' + (f.aliases.length ? ' · also ' + esc(f.aliases.slice(0, 2).join(', ')) : '');

    function treeHTML() {
      if (isG) return '';
      var t = famTree(f);
      function kids(n) {
        var items = n.order.map(function (u) {
          var k = n.kids[u], seg = 1;
          while (!k.entries.length && k.order.length === 1) { k = k.kids[k.order[0]]; seg++; }
          var sans = Q.sanPath(k.path), start = k.path.length - seg;
          return { node: k, label: Q.moveText(sans.slice(start), start), start: start, key: sans.join(' ') };
        }).sort(function (a, b) { return a.key < b.key ? -1 : 1; });
        return items.map(function (it) {
          var k = it.node, sub = k.order.length ? '<ul>' + kids(k) + '</ul>' : '';
          if (k.entries.length) return k.entries.map(function (x, i) {
            return '<li><button type="button" class="tree-row' + (x === sel ? ' is-selected' : '') + '" aria-pressed="' + (x === sel) + '" data-var="' + esc(x.id) + '">' +
              '<span class="branch-move notation">' + moverDot(it.start) + esc(it.label) + '</span><span class="tree-name">' + esc(x.short) + '</span>' +
              '<span class="tree-meta">' + esc(x.difficulty) + dueChip(entryKeys(x)) + '</span></button>' + (i === k.entries.length - 1 ? sub : '') + '</li>';
          }).join('');
          return '<li><button type="button" class="tree-row tree-fork" data-path="' + esc(k.path.join(' ')) + '"><span class="branch-move notation">' + moverDot(it.start) + esc(it.label) + '</span><span class="tree-name muted"><span class="sr-only">Branch point, </span>' + k.order.length + ' ways on</span></button><ul>' + kids(k) + '</ul></li>';
        }).join('');
      }
      var rootRows = t.entries.map(function (x) {
        return '<li><button type="button" class="tree-row' + (x === sel ? ' is-selected' : '') + '" aria-pressed="' + (x === sel) + '" data-var="' + esc(x.id) + '"><span class="branch-move notation">Start</span><span class="tree-name">' + esc(x.short) + '</span><span class="tree-meta">' + esc(x.difficulty) + '</span></button></li>';
      }).join('');
      return '<ul class="tree" aria-label="Variations of the ' + esc(f.name) + '">' + rootRows + kids(t) + '</ul>';
    }

    main.innerHTML = page('page-study',
      '<header class="page-head-v4 study-head">' + hdrBack + '<h1 class="h1" tabindex="-1">' + esc(title) + '</h1><p class="study-sub">' + sub + '</p></header>' +
      '<div class="study-grid">' +
        '<div class="study-stage"><div id="st-board"></div><div id="st-stepper"></div></div>' +
        '<div class="study-side">' +
          '<section class="selected-card" id="st-selected"></section>' +
          (isG ? '' : '<details class="tree-panel" open><summary><span class="h4">Variations</span> <span class="count">' + f.variations.length + '</span></summary>' + treeHTML() + '</details>') +
          '<details class="about"><summary>About ' + (isG ? 'this gambit' : 'this opening') + '</summary><div class="about-body" id="st-about"></div></details>' +
        '</div>' +
      '</div>');

    var frame = U.boardFrame($('#st-board'), { fen: 'start', label: title + ' board', orientation: sel.side === 'black' ? 'b' : 'w', note: '' });
    var stepper = null;

    function lineMoves(x, w) {
      var s = T.build(x, w);
      return s ? { fen: 'start', moves: s.uci.map(function (u, i) { return { uci: u, note: s.notes[i] }; }) } : x.line;
    }
    function showLine(x, w, at) {
      var host = $('#st-stepper');
      host.innerHTML = '';
      stepper = U.lineStepper(host, frame, lineMoves(x, w), { startAt: at != null ? at : x.defining.length, startNote: 'Starting position.', nextArrow: true });
    }
    function selectedHTML(x) {
      var keys = entryKeys(x);
      var status = T.statusLine(x.id + '/' + which);
      return '<h2 class="h2">' + esc(isG ? x.name : x.short) + '</h2>' +
        (isG ? '' : '<p class="notation sel-moves">' + esc(x.moves) + '</p>') +
        '<p class="prose sel-sum">' + esc(x.summary) + '</p>' +
        '<div class="train-row"><a class="btn btn-primary btn-lg" href="' + trainHref(x, which) + '" aria-label="Train ' + esc(which === 'typical' ? 'the typical move order' : x.lines.filter(function (l) { return l.id === which; })[0].name) + '">Train this line</a>' +
          '<a class="btn btn-secondary" href="' + trainHref(x, which, 'practice') + '">Practise</a></div>' +
        (status ? '<p class="status-line">' + esc(status) + '</p>' : '') +
        '<h3 class="h4 lines-h">Lines</h3><ul class="line-list">' + ['typical'].concat(x.lines.map(function (l) { return l.id; })).map(function (w) {
          var ln = w === 'typical' ? null : x.lines.filter(function (l) { return l.id === w; })[0];
          var st = T.status(x.id + '/' + w);
          return '<li><button type="button" class="line-row' + (w === which ? ' is-selected' : '') + '" aria-pressed="' + (w === which) + '" data-line="' + esc(w) + '">' +
            '<span class="line-name">' + esc(ln ? ln.name : 'Typical move order') + '</span><span class="line-kind">' + esc(ln ? ln.kindLine : 'From the first move') + '</span>' +
            (st === 'due' ? '<span class="chip-due">Due</span>' : st !== 'new' ? '<span class="line-done">' + U.ICON.check + '<span class="sr-only">trained</span></span>' : '') + '</button></li>';
        }).join('') + '</ul>';
    }
    function aboutHTML(x) {
      var plans = x.plans || {};
      var lessons = x.related.lessons.map(Q.lesson).filter(Boolean);
      var gambits = isG ? [] : f.gambits;
      return (x.idea ? '<h3 class="h4">The idea</h3><p class="prose">' + esc(x.idea) + '</p>' : '') +
        (isG ? '<h3 class="h4">The offer</h3><p class="prose">' + esc(x.offer) + '</p><h3 class="h4">What you get for it</h3><p class="prose">' + esc(x.compensation) + '</p><p class="prose"><strong>Soundness.</strong> ' + esc(x.characterNote) + '</p>' : '') +
        ['white', 'black'].map(function (s) { return (plans[s] || []).length ? '<h3 class="h4">' + (s === 'white' ? 'White' : 'Black') + '\'s plans</h3><ul class="plan-list">' + plans[s].map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' : ''; }).join('') +
        (x.pitfalls.length ? '<h3 class="h4">Traps and risks</h3><ul class="plain-list pitfalls">' + x.pitfalls.map(function (p) { return '<li><strong>' + esc(p.kind) + ' (' + (p.side === 'white' ? 'White' : 'Black') + ' must beware):</strong> ' + esc(p.title) + '. ' + esc(p.text) + '</li>'; }).join('') + '</ul>' : '') +
        (!isG && f.overview ? '<h3 class="h4">About the ' + esc(f.name) + '</h3><p class="prose">' + esc(f.overview) + '</p>' + (f.choosing ? '<p class="prose">' + esc(f.choosing) + '</p>' : '') : '') +
        (x.uncertain ? '<p class="banner"><strong>Note on certainty.</strong> ' + esc(x.uncertain) + '</p>' : '') +
        (gambits.length ? '<h3 class="h4">Gambits in this opening</h3><ul class="plain-list">' + gambits.map(function (g) { return '<li><a href="#/gambit/' + encodeURIComponent(g.id) + '">' + esc(g.name) + '</a></li>'; }).join('') + '</ul>' : '') +
        (!isG && f.mirror && f.mirror.variations.length ? '<p><a href="#/family/' + encodeURIComponent(f.mirror.id) + '">The ' + esc(f.mirror.name) + ' from ' + (f.mirror.side === 'white' ? 'White' : 'Black') + '\'s side</a></p>' : '') +
        (lessons.length ? '<h3 class="h4">Lessons</h3><ul class="plain-list">' + lessons.slice(0, 6).map(function (l) { return '<li><a href="' + A.lessonHref(l) + '">' + esc(l.title) + '</a> <span class="muted">' + l.minutes + ' min</span></li>'; }).join('') + '</ul>' : '');
    }
    function select(x, w, quiet) {
      sel = x; which = w || 'typical';
      $('#st-selected').innerHTML = selectedHTML(x);
      $('#st-about').innerHTML = aboutHTML(x);
      $$('.tree-row[data-var]').forEach(function (b) { var on = b.dataset.var === x.id; b.classList.toggle('is-selected', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      showLine(x, which);
      frame.setNote(which === 'typical' ? 'Typical move order' : x.lines.filter(function (l) { return l.id === which; })[0].name);
      var href = isG ? '#/gambit/' + encodeURIComponent(x.id) + A.buildQuery({ line: which === 'typical' ? '' : which }) : '#/family/' + encodeURIComponent(f.id) + A.buildQuery({ v: x.id, line: which === 'typical' ? '' : which });
      A.replaceHash(href);
      if (!quiet) A.status((isG ? x.name : x.short) + ' selected. The board shows where it branches.');
    }
    main.addEventListener('click', onClick);
    A.teardown.push(function () { main.removeEventListener('click', onClick); });
    function onClick(e) {
      var v = e.target.closest('[data-var]');
      if (v) { select(Q.line(v.dataset.var), 'typical'); return; }
      var fk = e.target.closest('[data-path]');
      if (fk) {
        var path = fk.dataset.path.split(' ');
        var under = f.variations.filter(function (y) { return Q.startsWith(y.defining, path); })[0];
        if (under) { select(under, 'typical', true); if (stepper) stepper.go(path.length); A.status('Branch point after ' + Q.moveText(Q.sanPath(path), 0) + '. Choose a variation below it.'); }
        return;
      }
      var ln = e.target.closest('[data-line]');
      if (ln) { select(sel, ln.dataset.line, true); $('[data-line="' + ln.dataset.line + '"]').focus(); A.status('Showing ' + (ln.dataset.line === 'typical' ? 'the main line' : 'this line') + ' on the board.'); }
    }
    select(sel, which, true);
    if (q.at && stepper) stepper.go(q.at.split('.').length);
  }

  A.views.family = function (id, q) {
    q = q || {};
    var f = Q.family(id);
    if (!f || !f.variations.length) return A.views.notFound();
    var x = (q.v && Q.line(q.v) && Q.line(q.v).familyId === f.id) ? Q.line(q.v) : f.variations[0];
    if (q.at && !q.v) {
      var at = q.at.split('.');
      var best = null;
      f.variations.forEach(function (y) { if (Q.startsWith(at, y.defining) && (!best || y.defining.length > best.defining.length)) best = y; });
      if (best) x = best;
    }
    studyPage(x, f, q);
    return { title: f.name + ' · ' + SIDE_OPEN[f.side] + ' · ' + SITE };
  };
  // Gambit pages share the layout; variation pages now live inside their opening page.
  A.views.line = function (id, kind, q) {
    var x = Q.line(id);
    if (!x) return A.views.notFound();
    if (x.kind === 'opening') { location.replace('#/family/' + encodeURIComponent(x.familyId) + A.buildQuery({ v: x.id, line: (q || {}).line })); return {}; }
    studyPage(x, null, q || {});
    return { title: x.name + ' · ' + SIDE_GAMBIT[x.side] + ' · ' + SITE };
  };

  // ------------------------------------------------------------ lessons (categories and paths)
  A.views.lessons = function (q) {
    q = q || {};
    if (q.q || q.side || q.level) { location.replace('#/search' + A.buildQuery({ q: q.q, side: q.side === 'both' ? '' : q.side, level: q.level })); return {}; }
    if (q.cat && Q.category(q.cat)) { location.replace('#/category/' + q.cat); return {}; }
    var tab = q.tab === 'paths' ? 'paths' : 'categories';
    var na = A.nextAction();
    var body = tab === 'categories' ? ['Openings', 'Gambits', 'Skills'].map(function (g) {
      return '<section class="browse-group"><h2 class="h3">' + g + '</h2><ul class="rows">' + Q.categories.filter(function (c) { return c.group === g; }).map(function (c) {
        return '<li class="row"><a class="row-main" href="#/category/' + c.id + '"><span class="row-text"><span class="row-name">' + esc(c.title) + '</span><span class="row-ctx">' + esc(c.summary) + '</span></span><span class="row-meta">' + A.countDone(c.lessons) + ' of ' + c.lessons.length + '</span></a></li>';
      }).join('') + '</ul></section>';
    }).join('') : (function () {
      var by = {};
      Q.paths.forEach(function (p) { (by[p.goal] = by[p.goal] || []).push(p); });
      return Object.keys(by).map(function (g) {
        return '<section class="browse-group"><h2 class="h3">' + esc(g) + '</h2><ul class="rows">' + by[g].map(function (p) {
          var ls = p.steps.map(function (s) { return Q.lesson(s.lesson); });
          return '<li class="row"><a class="row-main" href="#/paths/' + p.id + '"><span class="row-text"><span class="row-name">' + esc(p.title) + (P.activePath() === p.id ? ' <span class="chip-due chip-on">Following</span>' : '') + '</span><span class="row-ctx">' + esc(p.summary) + '</span></span><span class="row-meta">' + A.countDone(ls) + ' of ' + ls.length + '</span></a></li>';
        }).join('') + '</ul></section>';
      }).join('');
    })();
    main.innerHTML = page('page-browse',
      '<header class="page-head-v4"><h1 class="h1" tabindex="-1">Lessons</h1>' +
        '<nav class="segmented" aria-label="Show"><a href="#/lessons"' + (tab === 'categories' ? ' aria-current="true"' : '') + '>Categories</a><a href="#/lessons?tab=paths"' + (tab === 'paths' ? ' aria-current="true"' : '') + '>Paths</a></nav></header>' +
      '<div class="continue-card continue-inline"><p class="continue-why">' + esc(na.why) + '</p><a class="btn btn-primary" href="' + na.href + '">' + esc(na.label) + '</a></div>' +
      body);
    return { title: 'Lessons · ' + SITE };
  };

  // ------------------------------------------------------------ my study
  A.views.study = function () {
    var na = A.nextAction(), prefs = P.prefs();
    var sess = prefs && A.coach ? A.coach.session(prefs) : null;
    var due = T.due().map(function (k) { var p = k.split('/'), x = Q.line(p[0]); return x ? { x: x, w: p[1], key: k } : null; }).filter(Boolean);
    var review = Q.lessons.filter(function (l) { return P.state(l.id) === 'review'; });
    var done = A.countDone(Q.lessons), trained = T.count();
    var ap = P.activePath() && Q.path(P.activePath());
    main.innerHTML = page('page-study-hub',
      '<header class="page-head-v4"><h1 class="h1" tabindex="-1">My study</h1><p class="lede">' + done + ' of ' + Q.lessons.length + ' lessons done, ' + trained + ' of ' + Q.moveLines.length + ' lines trained.</p></header>' +
      '<div class="continue-card"><p class="continue-why">' + esc(na.why) + '</p><a class="btn btn-primary btn-lg" href="' + na.href + '">' + esc(na.label) + '</a></div>' +
      (due.length ? '<section class="browse-group"><h2 class="h3">Lines due for review</h2><ul class="rows">' + due.slice(0, 6).map(function (d) {
        var nm = d.w === 'typical' ? 'Typical move order' : (d.x.lines.filter(function (l) { return l.id === d.w; })[0] || {}).name;
        return '<li class="row"><a class="row-main" href="' + trainHref(d.x, d.w, 'practice') + '"><span class="row-text"><span class="row-name">' + esc(d.x.kind === 'gambit' ? d.x.name : d.x.short) + '</span><span class="row-ctx">' + esc(nm) + '</span></span><span class="row-meta">Practise</span></a></li>';
      }).join('') + '</ul></section>' : '') +
      (sess && sess.items.length ? '<section class="browse-group"><h2 class="h3">Today\'s session, about ' + sess.minutes + ' min</h2>' + A.lessonList(sess.items.map(function (it) { return it.lesson; })) + '</section>' :
        '<section class="browse-group"><h2 class="h3">Your plan</h2><p>Answer four short questions and the coach suggests a session, paths and a starting repertoire.</p><p><a class="btn btn-secondary" href="#/coach">Set up your plan</a></p></section>') +
      (ap ? '<section class="browse-group"><h2 class="h3">Your path</h2><p><a href="#/paths/' + ap.id + '">' + esc(ap.title) + '</a>, ' + A.countDone(ap.steps.map(function (s) { return Q.lesson(s.lesson); })) + ' of ' + ap.steps.length + ' done.</p></section>' : '') +
      '<details class="about"><summary>Lessons to review (' + review.length + ')</summary><div class="about-body">' + (review.length ? A.lessonList(review) : '<p>Nothing to review. Lessons where you used Show answer or needed several tries appear here.</p>') + '</div></details>' +
      '<details class="about"><summary>Progress by category</summary><div class="about-body"><ul class="rows">' + Q.categories.map(function (c) { return '<li class="row"><a class="row-main" href="#/category/' + c.id + '"><span class="row-text"><span class="row-name">' + esc(c.title) + '</span></span><span class="row-meta">' + A.countDone(c.lessons) + ' of ' + c.lessons.length + '</span></a></li>'; }).join('') + '</ul></div></details>' +
      (prefs ? '<details class="about"><summary>Your plan and suggested repertoire</summary><div class="about-body"><p><a class="btn btn-secondary" href="#/coach">Open your plan</a></p></div></details>' : '') +
      '<details class="about"><summary>Reset</summary><div class="about-body" id="reset-area"><p>Clear all lesson progress, trainer results and your chosen path. This cannot be undone.</p><button type="button" class="btn btn-secondary" data-reset>Reset everything</button></div></details>');
    var ra = $('#reset-area');
    ra.addEventListener('click', function (e) {
      var b = e.target.closest('[data-reset]');
      if (!b) return;
      if (b.dataset.reset !== 'yes') { b.outerHTML = '<button type="button" class="btn btn-primary" data-reset="yes">Yes, reset everything</button>'; $('[data-reset="yes"]').focus(); return; }
      P.reset(); T.reset(); A.render(); A.status('Progress reset.');
    });
    return { title: 'My study · ' + SITE };
  };
})();
(function () {
  'use strict';
  var A = window.QGA, Q = window.QG;
  // The old library index: searches go to Search, lesson-filter links to their category, the rest to Openings.
  A.views.library = function (q) {
    q = q || {};
    if (q.cat && Q.category(q.cat)) { location.replace('#/category/' + q.cat); return {}; }
    if (q.q || q.side || q.first || q.level) { location.replace('#/search' + A.buildQuery({ q: q.q, side: q.side === 'both' ? '' : q.side, first: q.first, level: q.level })); return {}; }
    location.replace('#/openings'); return {};
  };
})();
