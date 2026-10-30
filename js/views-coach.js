/*
 * The Quiet Gambit — the coach.
 * Optional preferences (experience, goals, study time, style), saved in this browser,
 * turned into a session plan, recommended paths and a starting repertoire.
 * Recommendations are simple, explainable rules over the library's own labels.
 */
(function () {
  'use strict';

  var U = window.QGUI, Q = window.QG, A = window.QGA, P = window.QGProgress;
  var esc = U.esc, $ = U.$, $$ = U.$$;
  var main = A.main, SITE = A.SITE;

  var EXPERIENCE = [
    ['new', 'New to chess', 'You know how the pieces move and want the basics.'],
    ['beginner', 'Beginner', 'You play casual or online games and know the main principles.'],
    ['intermediate', 'Club player', 'You know some openings and tactics and play rated games.'],
    ['advanced', 'Experienced', 'You want deeper lines, structures and model plans.']
  ];
  var GOALS = [
    ['white-repertoire', 'Build a White repertoire'],
    ['black-e4', 'Answer 1.e4 as Black'],
    ['black-d4', 'Answer 1.d4 as Black'],
    ['black-flank', 'Answer 1.c4, 1.Nf3 and other flank openings'],
    ['white-gambits', 'Learn White gambits'],
    ['black-gambits', 'Learn Black gambits'],
    ['tactics', 'Sharpen tactics and calculation'],
    ['strategy', 'Plan in the middlegame'],
    ['endgames', 'Master the essential endgames'],
    ['practical', 'Prepare for tournament play']
  ];
  var TIMES = [10, 20, 30, 45];
  var STYLES = [
    ['solid', 'Solid and safe', 'Sound structures and clear plans.'],
    ['attacking', 'Attacking and sharp', 'Initiative, open lines and gambits.'],
    ['positional', 'Positional', 'Space, pawn structure and long-term pressure.'],
    ['any', 'No preference', 'A balanced mix.']
  ];
  var LEVEL_OF = { 'new': 0, beginner: 0, intermediate: 1, advanced: 2 };
  var RANK = { Beginner: 0, Intermediate: 1, Advanced: 2 };
  var STYLE_FIT = {
    solid: { Solid: 3, Positional: 2, Flexible: 2, Attacking: 0, Sharp: -1 },
    attacking: { Attacking: 3, Sharp: 3, Flexible: 1, Solid: 0, Positional: 0 },
    positional: { Positional: 3, Solid: 2, Flexible: 2, Attacking: 0, Sharp: 0 },
    any: { Solid: 1, Positional: 1, Flexible: 1, Attacking: 1, Sharp: 1 }
  };
  var STYLE_WORD = { solid: 'solid', attacking: 'attacking', positional: 'positional', any: 'balanced' };

  function level(prefs) { return LEVEL_OF[prefs.experience] != null ? LEVEL_OF[prefs.experience] : 0; }
  function diffFit(d, u) { var r = RANK[d] != null ? RANK[d] : 1; return r <= u ? 2 - (u - r) * 0.5 : -3 * (r - u); }
  function styleFit(s, prefs) { return (STYLE_FIT[prefs.style] || STYLE_FIT.any)[s] || 0; }
  function lessonsOf(p) { return p.steps.map(function (s) { return Q.lesson(s.lesson); }); }

  // ------------------------------------------------------------ recommendations
  function rankPaths(prefs) {
    var u = level(prefs), goals = prefs.goals || [];
    return Q.paths.map(function (p) {
      var score = 0, why = [];
      var gi = goals.indexOf(p.focus);
      if (gi >= 0) { score += 10 - gi * 0.5; why.push('matches your goal'); }
      if (p.style === 'Beginner-friendly' && u === 0) { score += 3; why.push('beginner-friendly'); }
      if (p.style === 'Solid' && (prefs.style === 'solid' || prefs.style === 'positional')) { score += 3; why.push('fits a ' + STYLE_WORD[prefs.style] + ' style'); }
      if (p.style === 'Attacking' && prefs.style === 'attacking') { score += 3; why.push('fits an attacking style'); }
      var pl = RANK[p.level] != null ? RANK[p.level] : 0;
      if (pl <= u) score += 2; else if (pl > u + 1) { score -= 3; why.push('starts above your level'); }
      var ls = lessonsOf(p), done = A.countDone(ls);
      if (done === ls.length) score -= 8;
      else if (done) { score += 1; why.push('already started'); }
      if (P.activePath() === p.id) { score += 4; why.unshift('your chosen path'); }
      return { path: p, score: score, why: why, done: done, total: ls.length };
    }).filter(function (r) { return r.score > 0; }).sort(function (a, b) { return b.score - a.score; });
  }

  function session(prefs) {
    var u = level(prefs), budget = prefs.time || 20, used = 0, out = [], seen = {};
    function add(l, why, path) {
      if (!l || seen[l.id]) return false;
      if (out.length && used + l.minutes > budget) return false;
      seen[l.id] = true; used += l.minutes;
      out.push({ lesson: l, why: why, path: path || null });
      return true;
    }
    var last = P.last(), lr = last && Q.lesson(last);
    if (lr && P.state(last) === 'in-progress') add(lr, 'Pick up where you left off.');
    // Reviews first, but leave most of the session for new work.
    var review = Q.lessons.filter(function (l) { return P.state(l.id) === 'review'; });
    var refresh = Q.lessons.filter(function (l) { return P.state(l.id) === 'completed' && P.daysSince(l.id) >= 14; })
      .sort(function (a, b) { return P.daysSince(b.id) - P.daysSince(a.id); });
    review.concat(refresh).forEach(function (l) {
      if (used >= budget * 0.4) return;
      add(l, P.state(l.id) === 'review' ? 'Ready for review: it gave you trouble last time.' : 'Due for a refresh: completed ' + P.daysSince(l.id) + ' days ago.');
    });
    // Then the next steps of the best-matching paths, taken in turn.
    var ranked = rankPaths(prefs).slice(0, 3).map(function (r) { return { path: r.path, i: 0 }; });
    var guard = 0;
    while (used < budget && ranked.length && guard++ < 60) {
      var progressed = false;
      ranked.forEach(function (r) {
        if (used >= budget) return;
        var steps = r.path.steps;
        while (r.i < steps.length) {
          var st = steps[r.i++], l = Q.lesson(st.lesson);
          if (!l || P.isDone(l.id) || seen[l.id]) continue;
          if (RANK[l.level] > u + 1) continue;
          if (add(l, st.why || ('Next in ' + r.path.title + '.'), r.path)) progressed = true;
          break;
        }
      });
      ranked = ranked.filter(function (r) { return r.i < r.path.steps.length; });
      if (!progressed && !ranked.length) break;
      if (!progressed) break;
    }
    return { items: out, minutes: used, budget: budget };
  }

  // A starting repertoire: for each goal, the variations that best fit level and style.
  function bestVariation(list, prefs) {
    var u = level(prefs);
    return list.slice().sort(function (a, b) {
      var sa = diffFit(a.difficulty, u) + styleFit(a.style, prefs) + (a.related.lessons.length ? 0.5 : 0);
      var sb = diffFit(b.difficulty, u) + styleFit(b.style, prefs) + (b.related.lessons.length ? 0.5 : 0);
      return sb - sa;
    })[0];
  }
  function whiteRepertoire(prefs) {
    var u = level(prefs);
    var first = prefs.style === 'positional' || (prefs.style === 'solid' && u >= 1) ? 'd4' : 'e4';
    var rows = {}, order = [];
    Q.repertoire.filter(function (x) { return x.side === 'white' && x.group === first; }).forEach(function (x) {
      var f = x.fam, key, label;
      if (f.root.length % 2 === 0) { key = f.id; label = f.name + ' (' + f.rootMoves + ')'; }
      else { key = 'reply-' + x.defining.slice(0, 2).join(''); label = 'After ' + Q.moveText(x.sans.slice(0, 2), 0); }
      if (!rows[key]) { rows[key] = { label: label, list: [], depth: key.indexOf('reply-') === 0 ? 2 : f.root.length }; order.push(key); }
      rows[key].list.push(x);
    });
    order.sort(function (a, b) { return rows[a].depth - rows[b].depth || (rows[a].label < rows[b].label ? -1 : 1); });
    return { title: 'White: start with 1.' + first, note: first === 'e4' ? 'Open, active positions where development and quick play pay off.' : 'Structured positions where plans matter more than memorised moves.',
      rows: order.map(function (k) { return { when: rows[k].label, pick: bestVariation(rows[k].list, prefs) }; }) };
  }
  function defenceFor(group, prefs) {
    var u = level(prefs);
    var fams = Q.families.filter(function (f) { return f.side === 'black' && f.group === group && f.variations.length && f.root.length % 2 === 0; });
    if (!fams.length) return null;
    function famScore(f) {
      var best = bestVariation(f.variations, prefs);
      return diffFit(best.difficulty, u) + styleFit(best.style, prefs) + Math.min(f.variations.length, 4) * 0.3 - (f.root.length > 4 ? 1.5 : 0);
    }
    var ranked = fams.slice().sort(function (a, b) { return famScore(b) - famScore(a); });
    var f = ranked[0];
    var vars = f.variations.slice().sort(function (a, b) { return (diffFit(b.difficulty, u) + styleFit(b.style, prefs)) - (diffFit(a.difficulty, u) + styleFit(a.style, prefs)); }).slice(0, 4);
    return { family: f, vars: vars, alternative: ranked[1] || null };
  }

  // ------------------------------------------------------------ view helpers
  function sessionList(s) {
    if (!s.items.length) return '<div class="empty-state"><p>Nothing is waiting: every lesson in your recommended paths is complete. Choose another goal, or browse the library for something new.</p></div>';
    return '<ol class="lesson-list">' + s.items.map(function (it) { return A.lessonRow(it.lesson, { why: it.why, path: it.path && it.path.id }); }).join('') + '</ol>';
  }
  A.coachSession = function () { var p = P.prefs(); return p ? session(p) : null; };
  A.coach = { session: session, rankPaths: rankPaths, whiteRepertoire: whiteRepertoire, defenceFor: defenceFor };

  function radio(name, value, label, sub, cur) {
    return '<label class="choice"><input type="radio" name="' + name + '" value="' + esc(value) + '"' + (String(cur) === String(value) ? ' checked' : '') + '>' +
      '<span class="choice-text"><span class="choice-label">' + esc(label) + '</span>' + (sub ? '<span class="choice-sub">' + esc(sub) + '</span>' : '') + '</span></label>';
  }
  function check(name, value, label, on) {
    return '<label class="choice choice-check"><input type="checkbox" name="' + name + '" value="' + esc(value) + '"' + (on ? ' checked' : '') + '><span class="choice-text"><span class="choice-label">' + esc(label) + '</span></span></label>';
  }

  A.views.coach = function () {
    var prefs = P.prefs();
    var cur = prefs || { experience: '', goals: [], time: 20, style: '' };
    var form = '<form class="coach-form" id="coach-form" aria-describedby="coach-help" novalidate>' +
      '<p id="coach-help" class="small muted">All four questions are optional. Your answers stay in this browser.</p>' +
      '<fieldset><legend class="h4">Your experience</legend><div class="choices">' + EXPERIENCE.map(function (e) { return radio('experience', e[0], e[1], e[2], cur.experience); }).join('') + '</div></fieldset>' +
      '<fieldset><legend class="h4">What you want to work on</legend><p class="small muted">Choose any. The coach gives each goal you tick a matching path, in the order listed here.</p><div class="choices choices-wide">' + GOALS.map(function (g) { return check('goals', g[0], g[1], (cur.goals || []).indexOf(g[0]) >= 0); }).join('') + '</div></fieldset>' +
      '<fieldset><legend class="h4">Time for one session</legend><div class="choices choices-row">' + TIMES.map(function (t) { return radio('time', t, t + ' minutes', '', cur.time); }).join('') + '</div></fieldset>' +
      '<fieldset><legend class="h4">How you like to play</legend><div class="choices">' + STYLES.map(function (s) { return radio('style', s[0], s[1], s[2], cur.style); }).join('') + '</div></fieldset>' +
      '<div class="btn-row"><button type="submit" class="btn btn-primary">' + (prefs ? 'Update my plan' : 'Show my plan') + '</button>' +
        (prefs ? '<button type="button" class="btn btn-quiet btn-sm" data-clear-prefs>Clear my preferences</button>' : '') + '</div>' +
      '<p class="small" role="status" id="coach-status"></p></form>';

    var plan = '';
    if (prefs) {
      var s = session(prefs), paths = rankPaths(prefs).slice(0, 3), goals = prefs.goals || [];
      var first = s.items[0];
      var reps = [];
      if (!goals.length || goals.indexOf('white-repertoire') >= 0) {
        var w = whiteRepertoire(prefs);
        reps.push('<div class="rep-card"><h3 class="h3">' + A.side('white', w.title) + '</h3><p class="small muted">' + esc(w.note) + '</p><table class="rep-table"><caption class="sr-only">Suggested White repertoire</caption><thead><tr><th scope="col">When the game goes</th><th scope="col">Study</th></tr></thead><tbody>' +
          w.rows.filter(function (r) { return r.pick; }).map(function (r) { return '<tr><th scope="row" class="notation">' + esc(r.when) + '</th><td><a href="' + A.href(r.pick) + '">' + esc(r.pick.name) + '</a> <span class="small muted">' + esc(r.pick.difficulty) + '</span></td></tr>'; }).join('') + '</tbody></table></div>');
      }
      [['black-e4', 'vs-e4', 'Against 1.e4'], ['black-d4', 'vs-d4', 'Against 1.d4'], ['black-flank', 'vs-flank', 'Against 1.c4 and 1.Nf3']].forEach(function (g) {
        if (goals.length && goals.indexOf(g[0]) < 0) return;
        var d = defenceFor(g[1], prefs);
        if (!d) return;
        reps.push('<div class="rep-card"><h3 class="h3">' + A.side('black', 'Black: ' + g[2]) + '</h3>' +
          '<p><a href="' + A.href(d.family) + '"><strong>' + esc(d.family.name) + '</strong></a> <span class="notation small">' + esc(d.family.rootMoves) + '</span></p>' +
          (d.family.summary ? '<p class="small muted">' + esc(d.family.summary) + '</p>' : '') +
          '<ul class="plain-list rep-vars">' + d.vars.map(function (x) { return '<li><a href="' + A.href(x) + '">' + esc(x.short) + '</a> <span class="small muted">' + esc(x.difficulty) + (x.style ? ', ' + esc(x.style.toLowerCase()) : '') + '</span></li>'; }).join('') + '</ul>' +
          (d.alternative ? '<p class="small">Another good fit: <a href="' + A.href(d.alternative) + '">' + esc(d.alternative.name) + '</a></p>' : '') + '</div>');
      });

      plan = '<section class="section section-tight" aria-labelledby="sess-h"><div class="section-head"><h2 class="h2" id="sess-h">Your next session</h2>' +
          '<p class="muted">About ' + s.minutes + ' of your ' + s.budget + ' minutes: reviews first, then the next steps of your best-matching paths.</p></div>' +
          sessionList(s) +
          (first ? '<div class="btn-row"><a class="btn btn-accent" href="' + A.lessonHref(first.lesson, first.path && first.path.id) + '">Start the session</a></div>' : '') +
        '</section>' +
        (paths.length ? '<section class="section section-tight" aria-labelledby="rp-h"><div class="section-head"><h2 class="h2" id="rp-h">Recommended paths</h2><p class="muted">Ranked by your goals, level and style. Follow one and every page shows its next step.</p></div>' +
          '<ul class="coach-paths">' + paths.map(function (r) {
            var p = r.path, active = P.activePath() === p.id;
            return '<li class="coach-path"><div><a class="h3" href="#/paths/' + esc(p.id) + '">' + esc(p.title) + '</a>' +
              '<p class="small muted">' + A.side(p.side) + ' · ' + esc(p.style) + ' · ' + esc(p.level || '') + ' · ' + r.done + ' of ' + r.total + ' done</p>' +
              '<p class="prose">' + esc(p.summary) + '</p>' + (r.why.length ? '<p class="small">Why: ' + esc(r.why.join(', ')) + '.</p>' : '') + '</div>' +
              '<button type="button" class="btn btn-secondary btn-sm" data-follow="' + esc(p.id) + '" aria-pressed="' + active + '">' + (active ? 'Your path' : 'Follow this path') + '</button></li>';
          }).join('') + '</ul></section>' : '') +
        (reps.length ? '<section class="section section-tight" aria-labelledby="rep-h"><div class="section-head"><h2 class="h2" id="rep-h">A starting repertoire</h2>' +
          '<p class="muted">Lines chosen to match your level and style, as a place to start rather than a complete repertoire. Each links to its plans, move lines and lessons.</p></div>' +
          '<div class="rep-grid">' + reps.join('') + '</div></section>' : '');
    }

    var done = A.countDone(Q.lessons);
    var reviewN = Q.lessons.filter(function (l) { return P.state(l.id) === 'review'; }).length;
    var refreshN = Q.lessons.filter(function (l) { return P.state(l.id) === 'completed' && P.daysSince(l.id) >= 14; }).length;
    var inProg = Q.lessons.filter(function (l) { return P.record(l.id) && !P.isDone(l.id); }).length;

    main.innerHTML = '<div class="container">' + A.pageHead({
        title: 'Your coach',
        lede: prefs ? 'Your plan, built from your answers below. Change them at any time.' :
          'Tell the coach how you play and how much time you have. It will suggest a session, the paths that suit you and a starting repertoire. No account needed.'
      }) +
      '<div class="coach-stats" aria-label="Your progress at a glance">' +
        '<a href="#/progress"><span class="stat-num">' + done + '</span><span>completed</span></a>' +
        '<a href="#/progress"><span class="stat-num">' + inProg + '</span><span>in progress</span></a>' +
        '<a href="#/progress"><span class="stat-num">' + reviewN + '</span><span>ready for review</span></a>' +
        '<a href="#/progress"><span class="stat-num">' + refreshN + '</span><span>due for a refresh</span></a>' +
      '</div>' +
      (prefs ? plan + '<section class="section section-tight" aria-labelledby="pref-h"><h2 class="h2" id="pref-h">Your answers</h2>' + form + '</section>'
        : '<section class="section section-tight" aria-labelledby="pref-h"><h2 class="h2" id="pref-h">Four quick questions</h2>' + form + '</section>') +
    '</div>';

    var f = $('#coach-form');
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      function val(n) { var el = f.querySelector('input[name="' + n + '"]:checked'); return el ? el.value : ''; }
      var p = {
        experience: val('experience') || 'beginner',
        goals: $$('input[name="goals"]:checked', f).map(function (i) { return i.value; }),
        time: +(val('time') || 20),
        style: val('style') || 'any',
        savedAt: Date.now()
      };
      P.setPrefs(p);
      A.render();
      var h = $('#sess-h');
      if (h) { h.setAttribute('tabindex', '-1'); h.focus(); }
      A.status('Plan updated.');
    });
    main.addEventListener('click', onClick);
    A.teardown.push(function () { main.removeEventListener('click', onClick); });
    function onClick(e) {
      var fl = e.target.closest('[data-follow]');
      if (fl) {
        var on = P.activePath() !== fl.dataset.follow;
        P.setPath(on ? fl.dataset.follow : null);
        A.render();
        var b = $('[data-follow="' + fl.dataset.follow + '"]');
        if (b) b.focus();
        A.status(on ? 'Path chosen.' : 'Path cleared.');
        return;
      }
      if (e.target.closest('[data-clear-prefs]')) {
        P.clearPrefs();
        A.render();
        $('h1', main).focus();
        A.status('Preferences cleared.');
      }
    }
    return { title: 'Your coach · ' + SITE };
  };
})();
