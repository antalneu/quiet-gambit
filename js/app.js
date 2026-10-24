/*
 * The Quiet Gambit — application core.
 * Router, header chrome, shared building blocks (side badges, lesson rows,
 * state pips) and the library views. Opening and lesson views register
 * themselves from views-openings.js and views-lesson.js.
 */
(function () {
  'use strict';

  var U = window.QGUI, Q = window.QG, P = window.QGProgress;
  var esc = U.esc, frag = U.frag, $ = U.$, $$ = U.$$, ICON = U.ICON;
  var main = document.getElementById('main');
  var SITE = 'The Quiet Gambit';

  var A = window.QGA = { views: {}, teardown: [], SITE: SITE, main: main };

  // ------------------------------------------------------------ vocabulary
  var STATE_LABEL = { 'new': 'New', 'in-progress': 'In progress', completed: 'Completed', review: 'Review' };
  var SIDE_LABEL = { white: 'White', black: 'Black', both: 'Both sides' };
  var GROUP_LABEL = { e4: '1.e4', d4: '1.d4', flank: 'Flank openings', 'vs-e4': 'vs 1.e4', 'vs-d4': 'vs 1.d4', 'vs-flank': 'vs flank openings' };
  A.STATE_LABEL = STATE_LABEL; A.SIDE_LABEL = SIDE_LABEL; A.GROUP_LABEL = GROUP_LABEL;

  A.side = function (side, text) {
    return '<span class="side side-' + esc(side) + '"><span class="side-mark" aria-hidden="true"></span>' +
      esc(text || SIDE_LABEL[side] || side) + '</span>';
  };
  A.pip = function (state, extra) {
    return '<span class="pip is-' + esc(state) + (extra ? ' ' + extra : '') + '" aria-hidden="true"></span>';
  };
  // Pip for a lesson: a completed lesson that is also flagged for review keeps its fill.
  A.lessonPip = function (id) {
    var st = P.state(id);
    return A.pip(st === 'review' && P.isDone(id) ? 'review-done' : st);
  };
  A.stateTag = function (state) {
    return '<span class="state state-' + state + '">' + A.pip(state) + STATE_LABEL[state] + '</span>';
  };
  A.tag = function (text, cls) { return '<span class="tag' + (cls ? ' ' + cls : '') + '">' + esc(text) + '</span>'; };
  A.characterTag = function (c) { return '<span class="tag tag-character tag-' + esc(String(c).toLowerCase()) + '">' + esc(c) + '</span>'; };

  A.lessonHref = function (l, pathId) { return '#/lesson/' + esc(l.id) + (pathId ? '?path=' + esc(pathId) : ''); };

  // A lesson in a list: state pip, title, summary, then plain metadata.
  A.lessonRow = function (l, o) {
    o = o || {};
    var st = P.state(l.id), cat = Q.category(l.category);
    var isNext = o.nextId === l.id;
    return '<li class="lesson-row is-' + st + (isNext ? ' is-next' : '') + '"><a href="' + A.lessonHref(l, o.path) + '">' +
      '<span class="lesson-num">' + (isNext && st === 'new' ? A.pip('next') : A.lessonPip(l.id)) + '</span>' +
      '<span class="lesson-main"><span class="lesson-title">' + esc(l.title) + '</span>' +
        '<span class="lesson-sum">' + esc(o.why || l.summary) + '</span>' +
        '<span class="lesson-meta">' + A.side(l.side) +
          (o.showCategory !== false ? '<span>' + esc(cat.title) + '</span>' : '') +
          '<span>' + esc(l.level) + '</span><span>' + l.minutes + ' min</span></span>' +
      '</span>' +
      '<span class="lesson-status">' + (isNext && st === 'new' ? '<span class="state state-next">Next</span>' : A.stateTag(st)) + '</span>' +
    '</a></li>';
  };
  A.lessonList = function (list, o) {
    if (!list.length) return '';
    return '<ol class="lesson-list">' + list.map(function (l) { return A.lessonRow(l, o); }).join('') + '</ol>';
  };

  A.pipsFor = function (list) {
    return '<span class="pips" aria-hidden="true">' + list.map(function (l) { return A.lessonPip(l.id); }).join('') + '</span>';
  };
  A.countDone = function (list) { return list.filter(function (l) { return P.isDone(l.id); }).length; };

  // Paths: the next step is the first lesson not yet completed.
  A.pathNext = function (p) {
    for (var i = 0; i < p.steps.length; i++) if (!P.isDone(p.steps[i].lesson)) return { step: p.steps[i], index: i };
    return null;
  };
  // What should the learner do next, and why?
  A.nextUp = function () {
    var last = P.last(), lr = last && Q.lesson(last);
    var ap = P.activePath() && Q.path(P.activePath());
    if (lr && P.state(last) === 'in-progress') {
      var inPath = ap && ap.steps.some(function (s) { return s.lesson === last; });
      return { lesson: lr, why: 'You started this lesson and have not finished it yet.', resume: true, path: inPath ? ap : null };
    }
    if (ap) {
      var n = A.pathNext(ap);
      if (n) return { lesson: Q.lesson(n.step.lesson), why: n.step.why || ('Next in your path, ' + ap.title + '.'), path: ap };
    }
    var cs = A.coachSession && A.coachSession();
    if (cs && cs.items.length) return { lesson: cs.items[0].lesson, why: cs.items[0].why, path: cs.items[0].path };
    var first = Q.paths[0];
    if (first && !A.countDone(first.steps.map(function (s) { return Q.lesson(s.lesson); }))) {
      var fn = A.pathNext(first);
      if (fn) return { lesson: Q.lesson(fn.step.lesson), why: fn.step.why || 'The first lesson of the beginner path.', path: first };
    }
    var any = Q.lessons.filter(function (l) { return !P.isDone(l.id); })[0];
    return any ? { lesson: any, why: 'The first lesson you have not completed yet.' } : null;
  };
  A.nextCTA = function (cls) {
    var n = A.nextUp();
    if (!n) return '<a class="btn ' + (cls || 'btn-primary') + '" href="#/progress">Review your progress</a>';
    return '<a class="btn ' + (cls || 'btn-primary') + '" href="' + A.lessonHref(n.lesson, n.path && n.path.id) + '">' +
      (n.resume ? 'Resume: ' : 'Start: ') + esc(n.lesson.title) + '</a>';
  };

  // One line under a page heading: what to do next, and why.
  A.nextStrip = function () {
    var n = A.nextUp();
    if (!n) return '';
    return '<p class="next-strip"><span class="next-strip-label">Up next</span>' +
      '<a href="' + A.lessonHref(n.lesson, n.path && n.path.id) + '">' + esc(n.lesson.title) + '</a>' +
      '<span class="next-strip-why">' + esc(n.why) + '</span></p>';
  };

  A.chip = function (x) {
    if (!x) return '';
    var href = x.kind === 'gambit' ? '#/gambit/' : x.kind === 'opening' ? '#/opening/' : x.kind === 'family' ? '#/family/' : '#/lesson/';
    var cls = 'chip' + (x.kind === 'gambit' ? ' chip-gambit' : x.kind ? '' : ' chip-lesson');
    return '<a class="' + cls + '" href="' + href + esc(x.id) + '">' + (x.side ? '<span class="side-mark side-' + x.side + '-mark" aria-hidden="true"></span>' : '') +
      '<span>' + esc(x.name || x.title) + '</span>' + (x.kind === 'gambit' ? '<span class="chip-kind">Gambit</span>' : '') + '</a>';
  };
  A.chips = function (ids, getter) {
    var items = (ids || []).map(getter).filter(Boolean);
    return items.length ? '<div class="chips">' + items.map(A.chip).join('') + '</div>' : '';
  };

  A.pageHead = function (o) {
    return '<header class="page-head">' +
      (o.trail ? A.trail(o.trail) : o.crumbs ? '<p class="crumbs">' + o.crumbs + '</p>' : '') +
      '<h1 class="h1" tabindex="-1">' + esc(o.title) + '</h1>' +
      (o.meta ? '<div class="head-meta">' + o.meta + '</div>' : '') +
      (o.lede ? '<p class="lede">' + esc(o.lede) + '</p>' : '') + (o.extra || '') +
    '</header>' + (o.next ? A.nextStrip() : '');
  };

  // ------------------------------------------------------------ chrome
  function updateChrome() {
    var done = A.countDone(Q.lessons), total = Q.lessons.length;
    var review = Q.lessons.filter(function (l) { return P.state(l.id) === 'review'; }).length;
    var chip = $('[data-progress-chip]');
    var label = done === 0 ? 'Progress' : done + ' of ' + total + ' done';
    var filled = Math.round(done / total * 4);
    chip.innerHTML = '<span class="pips" aria-hidden="true">' + [0, 1, 2, 3].map(function (i) { return A.pip(i < filled ? 'completed' : 'new'); }).join('') + '</span>' +
      '<span>' + esc(label) + '</span>' + (review ? '<span class="chip-review">' + review + ' to review</span>' : '');
    chip.setAttribute('aria-label', label + (review ? ', ' + review + ' to review' : '') + ': open your progress');
    $('[data-progress-text]').textContent = 'Progress: ' + done + ' of ' + total + ' lessons done';
  }
  A.updateChrome = updateChrome;
  P.onChange(updateChrome);

  var menuBtn = $('.menu-btn'), nav = $('#site-nav');
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.textContent = open ? 'Close' : 'Menu';
  }
  menuBtn.addEventListener('click', function () { setMenu(!nav.classList.contains('is-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); }
  });
  $('.skip-link').addEventListener('click', function (e) { e.preventDefault(); main.focus(); main.scrollIntoView(); });

  // ------------------------------------------------------------ query helpers
  A.parseQuery = function (q) {
    var out = {};
    (q || '').split('&').forEach(function (pair) {
      if (!pair) return;
      var i = pair.indexOf('=');
      var k = decodeURIComponent(i < 0 ? pair : pair.slice(0, i)), v = i < 0 ? '' : decodeURIComponent(pair.slice(i + 1).replace(/\+/g, ' '));
      out[k] = v;
    });
    return out;
  };
  A.buildQuery = function (o) {
    var parts = Object.keys(o).filter(function (k) { return o[k]; }).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(o[k]); });
    return parts.length ? '?' + parts.join('&') : '';
  };
  // Update the URL for filter changes without re-rendering the view.
  A.replaceHash = function (h) { try { history.replaceState(null, '', h); } catch (e) { /* file:// may refuse */ } };

  // ------------------------------------------------------------ home
  function heroPuzzle() {
    var pick = null;
    var pool = Q.category('tactics').lessons.concat(Q.lessons);
    pool.some(function (l) {
      return l.steps.some(function (s) { if (s.type === 'puzzle' && s.solution.length === 1) { pick = { lesson: l, step: s }; return true; } return false; });
    });
    return pick;
  }

  var WORDS = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  A.numberWord = function (n) { return WORDS[n] || String(n); };

  A.views.home = function () {
    var total = Q.lessons.length;
    var t = A.libraryTotals();
    var fams = t.families.white + t.families.black, vars = t.variations.white + t.variations.black;
    var done = A.countDone(Q.lessons), n = A.nextUp();
    var pick = heroPuzzle();
    var prefs = P.prefs();

    var sideTiles = ['white', 'black'].map(function (side) {
      return '<li><a class="side-tile side-tile-' + side + '" href="#/openings/' + side + '">' +
        '<span class="side-tile-mark" aria-hidden="true"></span>' +
        '<span class="side-tile-title">' + A.OPEN_LABEL[side] + '</span>' +
        '<span class="side-tile-sub">' + t.families[side] + ' families, ' + t.variations[side] + ' variations, ' + (side === 'white' ? 'by 1.e4, 1.d4 and flank openings' : 'against 1.e4, 1.d4 and flank openings') + '</span>' +
      '</a></li>';
    }).join('') +
      '<li><a class="side-tile side-tile-gambit" href="#/gambits"><span class="side-tile-mark" aria-hidden="true"></span><span class="side-tile-title">Gambits</span>' +
        '<span class="side-tile-sub">' + t.gambits.white + ' White and ' + t.gambits.black + ' Black, each labelled for soundness</span></a></li>' +
      '<li><a class="side-tile side-tile-explorer" href="#/explorer"><span class="side-tile-mark" aria-hidden="true"></span><span class="side-tile-title">Opening Explorer</span>' +
        '<span class="side-tile-sub">Follow any line move by move and see where it branches</span></a></li>';

    var coach = '';
    var sess = A.coachSession && A.coachSession();
    if (sess) {
      coach = '<section class="section section-tight"><div class="container"><div class="coach-band">' +
        '<div><h2 class="h2">Your next session</h2><p class="muted">About ' + sess.minutes + ' minutes, from your coach.</p></div>' +
        (sess.items.length ? '<ol class="lesson-list">' + sess.items.slice(0, 3).map(function (it) { return A.lessonRow(it.lesson, { why: it.why, path: it.path && it.path.id }); }).join('') + '</ol>' : '<p>Everything in your recommended paths is complete.</p>') +
        '<p class="section-foot"><a href="#/coach">Open your coach</a></p></div></div></section>';
    } else {
      coach = '<section class="section section-tight"><div class="container"><div class="coach-band coach-band-invite">' +
        '<div><h2 class="h2">Get a plan that fits you</h2><p class="muted">Four optional questions about your level, goals, time and style. The coach suggests a session, paths and a starting repertoire. Nothing leaves this browser.</p></div>' +
        '<div class="btn-row"><a class="btn btn-secondary" href="#/coach">Set up your coach</a></div></div></div></section>';
    }

    var pathCards = Q.paths.slice(0, 6).map(pathCard).join('');

    var groups = ['Openings', 'Gambits', 'Skills'];
    var catIndex = groups.map(function (g) {
      return '<li class="cat-group"><h3 class="cat-group-title">' + g + '</h3><ul class="track-index">' +
        Q.categories.filter(function (c) { return c.group === g; }).map(function (c) {
          return '<li><a href="#/category/' + c.id + '">' +
            '<span class="track-name">' + esc(c.title) + '</span>' +
            '<span class="track-tag">' + esc(c.summary) + '</span>' +
            '<span class="track-meta">' + A.side(c.side) + '<span>' + c.lessons.length + ' lessons</span>' + A.pipsFor(c.lessons) + '</span>' +
          '</a></li>';
        }).join('') + '</ul></li>';
    }).join('');

    main.innerHTML =
      '<section class="hero"><div class="container hero-grid">' +
        '<div class="hero-copy">' +
          '<h1 class="display" tabindex="-1">Learn chess one position at a time.</h1>' +
          '<p class="lede">' + total + ' short lessons in ' + A.numberWord(Q.categories.length) + ' categories, a library of ' + fams + ' opening families with ' + vars + ' variations and ' + t.lines + ' move lines, and ' + Q.gambits.length + ' gambits explained honestly. Read the idea, play the move on the board, and see why it works.</p>' +
          '<div class="btn-row">' + A.nextCTA() + '<a class="btn btn-secondary" href="#/library">Open the Chess Library</a></div>' +
          '<p class="hero-note">' + (n ? esc(n.why) + ' ' : '') + (done ? 'You have completed ' + done + ' of ' + total + ' lessons.' : 'No account needed. Your progress is saved in this browser.') + '</p>' +
          '<div><h2 class="h4">Start in the library</h2><ul class="side-tiles side-tiles-4">' + sideTiles + '</ul></div>' +
        '</div>' +
        '<div class="hero-board" id="hero-board"></div>' +
      '</div></section>' + coach +

      (pathCards ? '<section class="section"><div class="container">' +
        '<div class="section-head"><h2 class="h2">Guided paths</h2>' +
        '<p class="lede muted">Each path is an ordered set of lessons with a reason for every step. Pick one that fits how you like to play.</p></div>' +
        '<ul class="path-cards">' + pathCards + '</ul>' +
        '<p class="section-foot"><a href="#/paths">All learning paths</a></p>' +
      '</div></section>' : '') +

      '<section class="section"><div class="container">' +
        '<div class="section-head"><h2 class="h2">How a lesson works</h2>' +
        '<p class="lede muted">Lessons take four to ten minutes and build on a real position.</p></div>' +
        '<ol class="steps-3">' +
          '<li><h3 class="h3">Read the idea</h3><p>A short explanation with arrows on the board. New terms are defined as they come up.</p></li>' +
          '<li><h3 class="h3">Play the move</h3><p>Find the move yourself, by tap, drag or keyboard. Hints are there if you need them.</p></li>' +
          '<li><h3 class="h3">Get the reason</h3><p>Every answer comes with the reason it works. Lessons you struggled with return in your review list.</p></li>' +
        '</ol>' +
      '</div></section>' +

      '<section class="section"><div class="container">' +
        '<div class="section-head"><h2 class="h2">' + A.numberWord(Q.categories.length).replace(/^./, function (c) { return c.toUpperCase(); }) + ' lesson categories</h2>' +
        '<p class="lede muted">Browse by subject, or <a href="#/lessons">search every lesson</a> by side, level, opening and time.</p></div>' +
        '<ul class="cat-groups">' + catIndex + '</ul>' +
      '</div></section>';

    if (pick) {
      var host = $('#hero-board');
      host.appendChild(frag('<div class="hero-prompt"><h2 class="h4">Try one now</h2><p class="puzzle-prompt">' + esc(pick.step.prompt) + '</p></div>'));
      var frame = U.boardFrame(host, { fen: pick.step.fen, interactive: true, label: 'Try-it board. ' + pick.step.prompt, note: pick.step.title || 'Example position' });
      var info = frag('<div class="hero-source"><p class="small muted">From the lesson <a href="#/lesson/' + esc(pick.lesson.id) + '">' + esc(pick.lesson.title) + '</a>. Tap or drag the piece, or use the arrow keys and Enter.</p></div>').firstChild;
      host.appendChild(info);
      var hp = U.puzzle(frame, info, pick.step, {});
      A.teardown.push(hp.destroy);
    }
    return { title: SITE + ': learn chess one position at a time' };
  };

  // ------------------------------------------------------------ paths
  function pathLessons(p) { return p.steps.map(function (s) { return Q.lesson(s.lesson); }); }
  function pathCard(p) {
    var ls = pathLessons(p), done = A.countDone(ls), mins = ls.reduce(function (a, l) { return a + l.minutes; }, 0);
    var active = P.activePath() === p.id;
    return '<li><a class="path-card' + (active ? ' is-active' : '') + '" href="#/paths/' + esc(p.id) + '">' +
      '<span class="path-card-top">' + A.side(p.side) + A.tag(p.style) + (active ? '<span class="tag tag-active">Your path</span>' : '') + '</span>' +
      '<span class="path-card-title">' + esc(p.title) + '</span>' +
      '<span class="path-card-sum">' + esc(p.summary) + '</span>' +
      '<span class="path-card-meta">' + A.pipsFor(ls) + '<span>' + done + ' of ' + ls.length + ' done, about ' + Math.round(mins / 5) * 5 + ' min</span></span>' +
    '</a></li>';
  }

  A.views.paths = function (id) {
    if (id) return pathDetail(id);
    var byGoal = {};
    Q.paths.forEach(function (p) { (byGoal[p.goal || 'Paths'] = byGoal[p.goal || 'Paths'] || []).push(p); });
    main.innerHTML = '<div class="container">' + A.pageHead({
        title: 'Learning paths',
        lede: 'Ordered lessons with a reason for each step. Choose one as your path and the site will always show what comes next.'
      }) +
      Object.keys(byGoal).map(function (g) {
        return '<section class="section section-tight"><h2 class="h2">' + esc(g) + '</h2><ul class="path-cards">' + byGoal[g].map(pathCard).join('') + '</ul></section>';
      }).join('') + '</div>';
    return { title: 'Learning paths · ' + SITE };
  };

  function pathDetail(id) {
    var p = Q.path(id);
    if (!p) return A.views.notFound();
    var ls = pathLessons(p), n = A.pathNext(p), active = P.activePath() === p.id;
    var done = A.countDone(ls);
    main.innerHTML = '<div class="container">' + A.pageHead({
        crumbs: '<a href="#/paths">Learning paths</a> / ' + esc(p.title),
        title: p.title,
        meta: A.side(p.side) + A.tag(p.style) + '<span>' + ls.length + ' lessons</span><span>' + done + ' completed</span>',
        lede: p.summary,
        extra: (p.why ? '<p class="prose muted">' + esc(p.why) + '</p>' : '') +
          '<div class="btn-row">' +
            (n ? '<a class="btn btn-primary" href="' + A.lessonHref(Q.lesson(n.step.lesson), p.id) + '">' + (done ? 'Continue: ' : 'Start: ') + esc(Q.lesson(n.step.lesson).title) + '</a>' : '<span class="tag tag-active">Path complete</span>') +
            '<button type="button" class="btn btn-secondary" data-set-path aria-pressed="' + active + '">' + 'Follow this path' + '</button>' +
          '</div>'
      }) +
      (n ? '<p class="next-why"><strong>Why this next:</strong> ' + esc(n.step.why || 'It is the first lesson in this path you have not completed.') + '</p>' : '') +
      '<section class="section section-tight" aria-labelledby="steps-h"><h2 class="h2" id="steps-h">Steps</h2>' +
      '<ol class="lesson-list path-steps">' + p.steps.map(function (s, i) {
        return A.lessonRow(Q.lesson(s.lesson), { path: p.id, nextId: n && n.step.lesson, why: s.why });
      }).join('') + '</ol></section></div>';
    var btn = $('[data-set-path]');
    btn.addEventListener('click', function () {
      var on = P.activePath() !== p.id;
      P.setPath(on ? p.id : null);
      btn.setAttribute('aria-pressed', on);
      A.status(on ? p.title + ' is now your path.' : 'Path cleared.');
    });
    return { title: p.title + ' · Learning paths · ' + SITE };
  }

  // ------------------------------------------------------------ library
  var TIMES = { short: 'Up to 5 min', medium: '6 to 8 min', long: '9 min or more' };
  function timeOk(l, t) {
    if (!t) return true;
    if (t === 'short') return l.minutes <= 5;
    if (t === 'medium') return l.minutes >= 6 && l.minutes <= 8;
    return l.minutes >= 9;
  }
  function norm(s) { return String(s || '').toLowerCase(); }
  // Status filter: "Completed" includes completed lessons that are also flagged for review.
  function stateMatch(id, want) {
    if (want === 'completed') return P.isDone(id);
    if (want === 'in-progress') return !!P.record(id) && !P.isDone(id);
    return P.state(id) === want;
  }
  function lessonText(l) {
    var rel = l.related || {};
    var names = (rel.openings || []).concat(rel.gambits || []).map(function (id) { var x = Q.line(id); return x ? x.name + ' ' + (x.family || '') : ''; });
    return norm([l.title, l.summary, l.objective, Q.category(l.category).title, l.level].concat(names).join(' '));
  }

  A.views.lessons = function (q) {
    q = q || {};
    var lineOpts = Q.repertoire.concat(Q.gambits).filter(function (x) { return x.related.lessons.length; })
      .sort(function (a, b) { return a.name.localeCompare(b.name); });
    function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (cur === v ? ' selected' : '') + '>' + esc(label) + '</option>'; }
    function lineGroup(label, list) { return list.length ? '<optgroup label="' + esc(label) + '">' + list.map(function (x) { return opt(x.id, x.name, q.line); }).join('') + '</optgroup>' : ''; }

    main.innerHTML = '<div class="container">' + A.pageHead({
        title: 'Lessons', next: true,
        trail: [['Lessons']],
        lede: Q.lessons.length + ' lessons across ' + A.numberWord(Q.categories.length) + ' categories, from openings to model games. Filter by side, level, opening and time, or search for an idea.'
      }) +
      '<form class="filters" role="search" aria-label="Filter lessons" onsubmit="return false">' +
        '<div class="field field-search"><label for="f-q">Search</label><input id="f-q" type="search" placeholder="Fork, Sicilian, rook ending..." value="' + esc(q.q || '') + '"></div>' +
        '<div class="field"><label for="f-side">Side</label><select id="f-side">' + opt('', 'Any side', q.side) + opt('white', 'White', q.side) + opt('black', 'Black', q.side) + opt('both', 'Both sides', q.side) + '</select></div>' +
        '<div class="field"><label for="f-cat">Category</label><select id="f-cat">' + opt('', 'All categories', q.cat) + Q.categories.map(function (c) { return opt(c.id, c.title, q.cat); }).join('') + '</select></div>' +
        '<div class="field"><label for="f-level">Level</label><select id="f-level">' + opt('', 'Any level', q.level) + ['Beginner', 'Intermediate', 'Advanced'].map(function (v) { return opt(v, v, q.level); }).join('') + '</select></div>' +
        '<div class="field"><label for="f-time">Time</label><select id="f-time">' + opt('', 'Any length', q.time) + Object.keys(TIMES).map(function (k) { return opt(k, TIMES[k], q.time); }).join('') + '</select></div>' +
        '<div class="field"><label for="f-line">Opening or gambit</label><select id="f-line">' + opt('', 'Any opening', q.line) +
          lineGroup('White Openings', lineOpts.filter(function (x) { return x.kind === 'opening' && x.side === 'white'; })) +
          lineGroup('Black Openings', lineOpts.filter(function (x) { return x.kind === 'opening' && x.side === 'black'; })) +
          lineGroup('White and Black Gambits', lineOpts.filter(function (x) { return x.kind === 'gambit'; })) + '</select></div>' +
        '<div class="field"><label for="f-state">Status</label><select id="f-state">' + opt('', 'Any status', q.state) + Object.keys(STATE_LABEL).map(function (k) { return opt(k, STATE_LABEL[k], q.state); }).join('') + '</select></div>' +
      '</form>' +
      '<div class="results-bar"><p id="results-count" role="status" class="muted"></p><button type="button" class="btn btn-quiet btn-sm" id="clear-filters">Clear filters</button></div>' +
      '<div id="results"></div></div>';

    var ids = { q: 'f-q', side: 'f-side', cat: 'f-cat', level: 'f-level', time: 'f-time', line: 'f-line', state: 'f-state' };
    function current() { var o = {}; Object.keys(ids).forEach(function (k) { o[k] = $('#' + ids[k]).value.trim(); }); return o; }
    function apply() {
      var f = current(), words = norm(f.q).split(/\s+/).filter(Boolean);
      var res = Q.lessons.filter(function (l) {
        if (f.side && l.side !== f.side) return false;
        if (f.cat && l.category !== f.cat) return false;
        if (f.level && l.level !== f.level) return false;
        if (!timeOk(l, f.time)) return false;
        if (f.state && !stateMatch(l.id, f.state)) return false;
        if (f.line) { var r = l.related || {}; if ((r.openings || []).concat(r.gambits || []).indexOf(f.line) < 0) return false; }
        if (words.length) { var t = lessonText(l); if (!words.every(function (w) { return t.indexOf(w) >= 0; })) return false; }
        return true;
      });
      $('#results-count').textContent = res.length === Q.lessons.length ? 'Showing all ' + res.length + ' lessons' : res.length + ' of ' + Q.lessons.length + ' lessons match';
      $('#clear-filters').hidden = !Object.keys(f).some(function (k) { return f[k]; });
      $('#results').innerHTML = res.length ? A.lessonList(res) :
        '<div class="empty-state"><p class="h4">No lessons match these filters.</p><p class="muted">Try a different level or category, or clear the filters to see everything.</p><button type="button" class="btn btn-secondary btn-sm" data-clear>Clear filters</button></div>';
      A.replaceHash('#/lessons' + A.buildQuery(f));
    }
    function clear() { Object.keys(ids).forEach(function (k) { $('#' + ids[k]).value = ''; }); apply(); $('#f-q').focus(); }
    $('.filters').addEventListener('input', apply);
    $('#clear-filters').addEventListener('click', clear);
    $('#results').addEventListener('click', function (e) { if (e.target.closest('[data-clear]')) clear(); });
    apply();
    return { title: 'Lessons · ' + SITE };
  };

  // ------------------------------------------------------------ category
  function conceptSection(items, prefix) {
    if (!items || !items.length) return '';
    return '<section class="section" aria-labelledby="' + prefix + '-h"><div class="section-head"><h2 class="h2" id="' + prefix + '-h">Key ideas at a glance</h2>' +
      '<p class="muted">Reference positions for this category. The lessons below practise them.</p></div><div class="themes">' +
      items.map(function (th, i) {
        return '<article class="theme" aria-labelledby="' + prefix + i + '">' +
          '<div class="theme-board" data-theme="' + i + '"></div>' +
          '<div class="theme-text"><h3 class="h2" id="' + prefix + i + '">' + esc(th.name) + '</h3>' +
            '<p class="prose">' + esc(th.definition || th.principle) + '</p>' +
            (th.rule ? '<p class="rule-box">' + esc(th.rule) + '</p>' : '') +
            (th.cues ? '<div class="detail-block"><h4 class="h4">Look for</h4><ul class="cue-list">' + th.cues.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul></div>' : '') +
            '<p class="small muted">' + esc(th.example.caption) + '</p></div></article>';
      }).join('') + '</div></section>';
  }

  A.views.category = function (id) {
    var c = Q.category(id);
    if (!c) return A.views.notFound();
    var ls = c.lessons, done = A.countDone(ls);
    var next = ls.filter(function (l) { return !P.isDone(l.id); })[0];
    var concepts = id === 'strategy' ? Q.concepts.strategy : id === 'endgames' ? Q.concepts.endgames : null;
    var lineLink = '';
    var areaFor = { 'white-openings': ['#/openings/white', 'See White Openings'], 'black-vs-e4': ['#/openings/black/vs-e4', 'See Black Openings vs 1.e4'], 'black-vs-d4': ['#/openings/black/vs-d4', 'See Black Openings vs 1.d4'], 'black-vs-flank': ['#/openings/black/vs-flank', 'See Black Openings vs flank openings'], 'white-gambits': ['#/gambits/white', 'See all White Gambits'], 'black-gambits': ['#/gambits/black', 'See all Black Gambits'] }[id];
    if (areaFor) lineLink = '<a class="btn btn-secondary" href="' + areaFor[0] + '">' + areaFor[1] + '</a>';

    main.innerHTML = '<div class="container">' + A.pageHead({
        trail: [['Lessons', '#/lessons'], [c.title]],
        title: c.title,
        meta: A.side(c.side) + '<span>' + ls.length + ' lessons</span><span>about ' + c.minutes + ' min in all</span>' + A.pipsFor(ls) + '<span>' + done + ' completed</span>',
        lede: c.summary,
        extra: '<div class="btn-row">' + (next ? '<a class="btn btn-primary" href="' + A.lessonHref(next) + '">' + (done ? 'Continue: ' : 'Start: ') + esc(next.title) + '</a>' : '<span class="tag tag-active">All lessons completed</span>') + lineLink + '</div>'
      }) +
      conceptSection(concepts, 'concept') +
      '<section class="section section-tight" aria-labelledby="cl-h"><h2 class="h2" id="cl-h">Lessons, in suggested order</h2>' +
      A.lessonList(ls, { showCategory: false, nextId: next && next.id }) + '</section></div>';

    $$('.theme-board').forEach(function (host) {
      var th = concepts[+host.dataset.theme];
      var frame = U.boardFrame(host, { fen: th.example.fen, label: th.name + ' example position', note: 'Illustrative position' });
      frame.board.setPosition(th.example.fen, { arrows: th.example.arrows || [], highlights: th.example.highlights || [] });
    });
    return { title: c.title + ' · ' + SITE };
  };

  // ------------------------------------------------------------ progress
  A.views.progress = function () {
    var total = Q.lessons.length, done = A.countDone(Q.lessons);
    var byState = { 'in-progress': [], review: [] };
    Q.lessons.forEach(function (l) { var s = P.state(l.id); if (byState[s]) byState[s].push(l); });
    var n = A.nextUp();

    var nextCard = n ?
      '<div class="next-card"><p class="muted">' + (n.resume ? 'Pick up where you left off' : 'What to do next') + '</p>' +
        '<h2 class="h2">' + esc(n.lesson.title) + '</h2>' +
        '<p class="muted">' + esc(n.why) + ' ' + esc(Q.category(n.lesson.category).title) + ', ' + n.lesson.minutes + ' min.</p>' +
        '<a class="btn btn-accent" href="' + A.lessonHref(n.lesson, n.path && n.path.id) + '">' + (n.resume ? 'Resume lesson' : 'Start lesson') + '</a></div>' :
      '<div class="next-card"><h2 class="h2">Every lesson is complete.</h2><p class="muted">Revisit the ones in your review list, or replay any lesson; puzzles reset each time.</p></div>';

    var stat = '<div class="panel stat-card">' +
      '<p class="stat-big">' + done + '<span class="muted" style="font-size:28px"> / ' + total + '</span></p>' +
      '<p>' + (done ? 'lessons completed' : 'No lessons completed yet. Most take five to eight minutes.') + '</p>' +
      '<ul class="state-legend">' + ['new', 'in-progress', 'completed', 'review'].map(function (s) {
        // Completed counts every finished lesson, including ones also flagged for review.
        var test = {
          'new': function (l) { return P.state(l.id) === 'new'; },
          'in-progress': function (l) { return P.record(l.id) && !P.isDone(l.id); },
          completed: function (l) { return P.isDone(l.id); },
          review: function (l) { return P.state(l.id) === 'review'; }
        }[s];
        var c = Q.lessons.filter(test).length;
        return '<li>' + A.stateTag(s) + '<span class="legend-count">' + c + '</span></li>';
      }).join('') + '</ul>' +
      '<p class="small muted">A lesson can be completed and in your review list at the same time.</p>' +
      '<p class="small muted">Saved in this browser only. Clearing site data resets it.</p>' +
      (done || byState['in-progress'].length || byState.review.length ? '<div class="confirm-row" id="reset-area"><button type="button" class="btn btn-quiet btn-sm" data-reset="ask">' + ICON.reset + 'Reset progress</button></div>' : '') +
    '</div>';

    var cats = '<table class="progress-table"><caption class="sr-only">Progress by category</caption><thead><tr><th scope="col">Category</th><th scope="col">Side</th><th scope="col">Lessons</th><th scope="col">Completed</th></tr></thead><tbody>' +
      Q.categories.map(function (c) {
        return '<tr><th scope="row"><a href="#/category/' + c.id + '">' + esc(c.title) + '</a></th><td>' + A.side(c.side) + '</td><td>' + A.pipsFor(c.lessons) + '</td><td class="num">' + A.countDone(c.lessons) + ' of ' + c.lessons.length + '</td></tr>';
      }).join('') + '</tbody></table>';

    var paths = Q.paths.length ? '<table class="progress-table"><caption class="sr-only">Progress by learning path</caption><thead><tr><th scope="col">Path</th><th scope="col">Side</th><th scope="col">Lessons</th><th scope="col">Completed</th></tr></thead><tbody>' +
      Q.paths.map(function (p) {
        var ls = pathLessons(p);
        return '<tr' + (P.activePath() === p.id ? ' class="is-active"' : '') + '><th scope="row"><a href="#/paths/' + p.id + '">' + esc(p.title) + '</a>' + (P.activePath() === p.id ? ' <span class="tag tag-active">Your path</span>' : '') + '</th><td>' + A.side(p.side) + '</td><td>' + A.pipsFor(ls) + '</td><td class="num">' + A.countDone(ls) + ' of ' + ls.length + '</td></tr>';
      }).join('') + '</tbody></table>' : '';

    main.innerHTML = '<div class="container">' + A.pageHead({ title: 'Your progress', lede: 'Lessons move from new to in progress to completed. Ones you struggled with, or mark yourself, wait in your review list.' }) +
      '<div class="path-summary">' + nextCard + stat + '</div>' +
      '<section class="section section-tight" aria-labelledby="rv-h"><h2 class="h2" id="rv-h">To review</h2>' +
        (byState.review.length ? '<p class="muted">Lessons where you used Show answer, needed several tries, or marked for review. Replay them until they feel easy.</p>' + A.lessonList(byState.review) :
          '<div class="empty-state"><p>Nothing to review. Lessons where you use Show answer or need several tries appear here, and you can mark any lesson for review yourself.</p></div>') + '</section>' +
      (byState['in-progress'].length ? '<section class="section section-tight" aria-labelledby="ip-h"><h2 class="h2" id="ip-h">In progress</h2>' + A.lessonList(byState['in-progress']) + '</section>' : '') +
      '<section class="section section-tight" aria-labelledby="pc-h"><h2 class="h2" id="pc-h">By category</h2>' + cats + '</section>' +
      (paths ? '<section class="section section-tight" aria-labelledby="pp-h"><h2 class="h2" id="pp-h">By learning path</h2>' + paths + '</section>' : '') +
      '</div>';

    var area = $('#reset-area');
    if (area) area.addEventListener('click', function (e) {
      var b = e.target.closest('[data-reset]');
      if (!b) return;
      if (b.dataset.reset === 'ask') {
        area.innerHTML = '<span class="small">Reset all progress, including your review list and chosen path? This cannot be undone.</span>' +
          '<button type="button" class="btn btn-primary btn-sm" data-reset="yes">Reset progress</button>' +
          '<button type="button" class="btn btn-secondary btn-sm" data-reset="no">Cancel</button>';
        $('[data-reset="no"]', area).focus();
      } else if (b.dataset.reset === 'no') {
        area.innerHTML = '<button type="button" class="btn btn-quiet btn-sm" data-reset="ask">' + ICON.reset + 'Reset progress</button>';
        $('[data-reset="ask"]', area).focus();
      } else {
        P.reset();
        render();
        $('h1', main).focus();
        A.status('Progress reset.');
      }
    });
    return { title: 'Your progress · ' + SITE };
  };

  // ------------------------------------------------------------ glossary / 404
  A.views.glossary = function () {
    main.innerHTML = '<div class="container">' + A.pageHead({ title: 'Glossary', lede: 'The chess words used across the lessons and opening notes, in plain English.' }) +
      '<dl class="glossary" style="padding-bottom:48px">' + Q.glossary.map(function (g) {
        return '<div id="term-' + esc(g.term.toLowerCase().replace(/[^a-z]+/g, '-')) + '"><dt>' + esc(g.term) + '</dt><dd>' + esc(g.definition) + '</dd></div>';
      }).join('') + '</dl></div>';
    return { title: 'Glossary · ' + SITE };
  };

  A.views.notFound = function () {
    main.innerHTML = '<div class="container not-found"><h1 class="h1" tabindex="-1">That page is not on the board</h1>' +
      '<p class="lede">The link may be out of date. The Chess Library and the lesson list cover everything.</p>' +
      '<div class="btn-row"><a class="btn btn-primary" href="#/library">Open the Chess Library</a><a class="btn btn-secondary" href="#/lessons">Browse lessons</a><a class="btn btn-secondary" href="#/">Go home</a></div></div>';
    return { title: 'Not found · ' + SITE };
  };

  // ------------------------------------------------------------ router
  var REDIRECT = { path: '#/progress', tactics: '#/category/tactics', middlegames: '#/category/strategy', endgames: '#/category/endgames' };
  var NAV_SECTION = { paths: 'paths', library: 'library', lessons: 'lessons', category: 'lessons', lesson: 'lessons', progress: 'coach', coach: 'coach',
    openings: 'openings', family: 'openings', opening: 'openings', gambits: 'gambits', gambit: 'gambits', explorer: 'explorer' };

  function route() {
    var raw = (location.hash || '#/').replace(/^#\/?/, '');
    var qi = raw.indexOf('?');
    var parts = (qi < 0 ? raw : raw.slice(0, qi)).split('/').filter(Boolean);
    return { parts: parts, query: A.parseQuery(qi < 0 ? '' : raw.slice(qi + 1)) };
  }

  function render() {
    A.teardown.splice(0).forEach(function (fn) { fn(); });
    var r = route(), p = r.parts, head = p[0] || '';
    if (REDIRECT[head] && p.length === 1) { location.replace(REDIRECT[head]); return; }
    var result, section = NAV_SECTION[head] || head;
    var id = p[1] ? decodeURIComponent(p[1]) : '';
    if (head === '') result = A.views.home();
    else if (head === 'paths') result = A.views.paths(id);
    else if (head === 'library') result = A.views.library(r.query);
    else if (head === 'lessons') result = A.views.lessons(r.query);
    else if (head === 'category') result = A.views.category(id);
    else if (head === 'progress') result = A.views.progress();
    else if (head === 'coach') result = A.views.coach();
    else if (head === 'glossary') result = A.views.glossary();
    else if (head === 'openings') result = A.views.openings(p[1] || '', p[2] || '', r.query);
    else if (head === 'family') result = A.views.family(id);
    else if (head === 'opening' || head === 'gambit') result = A.views.line(id, head, r.query);
    else if (head === 'gambits') result = A.views.gambits(p[1] || '', p[2] || '', r.query);
    else if (head === 'explorer') result = A.views.explorer(r.query);
    else if (head === 'lesson') result = A.views.lesson(id, r.query);
    else result = A.views.notFound();
    result = result || {};
    document.title = result.title || SITE;
    $$('.nav a[data-route]').forEach(function (a) {
      if (a.dataset.route === section) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    setMenu(false);
    updateChrome();
  }
  A.render = render;

  var statusEl = document.createElement('p');
  statusEl.id = 'app-status'; statusEl.className = 'sr-only'; statusEl.setAttribute('role', 'status');
  document.body.appendChild(statusEl);
  A.status = function (msg) { statusEl.textContent = ''; window.setTimeout(function () { statusEl.textContent = msg; }, 30); };

  var first = true;
  function onRoute() {
    // Only "#/..." hashes are routes; anything else (such as the skip link) is left to the browser.
    if (location.hash && location.hash.indexOf('#/') !== 0) return;
    render();
    if (!first) {
      window.scrollTo(0, 0);
      var h1 = $('h1', main);
      if (h1) h1.focus({ preventScroll: true });
    }
    first = false;
  }
  window.addEventListener('hashchange', onRoute);
  document.addEventListener('DOMContentLoaded', onRoute);
})();
