/*
 * The Quiet Gambit — lesson player.
 * Steps (read, line, puzzle), progress states, review flag, prerequisites,
 * related lines, and "what next" that follows the learner's path.
 */
(function () {
  'use strict';

  var U = window.QGUI, Q = window.QG, A = window.QGA, P = window.QGProgress;
  var esc = U.esc, frag = U.frag, $ = U.$, ICON = U.ICON;
  var main = A.main, SITE = A.SITE;
  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var KIND = { read: 'Idea', line: 'Line to replay', puzzle: 'Your move' };
  var STRUGGLE_MISSES = 3;

  // Where to go after this lesson, and why.
  function nextAfter(l, pathId) {
    var p = pathId && Q.path(pathId);
    if (p) {
      var n = A.pathNext(p);
      if (n && n.step.lesson !== l.id) return { lesson: Q.lesson(n.step.lesson), why: n.step.why || 'Next in ' + p.title + '.', path: p };
      if (!n) return { done: p };
    }
    var cat = Q.category(l.category).lessons;
    var later = cat.slice(cat.indexOf(l) + 1).filter(function (x) { return !P.isDone(x.id); })[0] ||
      cat.filter(function (x) { return !P.isDone(x.id) && x !== l; })[0];
    if (later) return { lesson: later, why: 'The next lesson in ' + Q.category(l.category).title + ' you have not completed.' };
    var any = A.nextUp();
    return any && any.lesson !== l ? any : null;
  }

  A.views.lesson = function (id, q) {
    var l = Q.lesson(id);
    if (!l) return A.views.notFound();
    q = q || {};
    var cat = Q.category(l.category), path = q.path && Q.path(q.path);
    var stepIndex = 0, reached = 0, finished = false, revealedAny = false, missesTotal = 0;
    var stepDone = l.steps.map(function (s) { return s.type !== 'puzzle'; });
    var visited = l.steps.map(function () { return false; });
    var current = null; // the active puzzle, destroyed whenever the step changes
    A.teardown.push(function () { if (current) current.destroy(); });
    var stateBefore = P.state(l.id);
    var rec = P.record(l.id);
    var resumeAt = rec && rec.status !== 'completed' && rec.step > 0 && rec.step < l.steps.length ? rec.step : 0;
    if (resumeAt) {
      stepIndex = reached = resumeAt;
      for (var j = 0; j < resumeAt; j++) { visited[j] = true; stepDone[j] = true; }
    }
    var started = !!rec && rec.status !== 'completed';
    function markStarted() { if (!started) { started = true; P.start(l.id); } }
    if (rec && rec.status !== 'completed') P.start(l.id);

    var pathIdx = path ? path.steps.map(function (s) { return s.lesson; }).indexOf(l.id) : -1;
    if (pathIdx < 0) path = null; // a ?path= that does not contain this lesson is ignored
    var crumbs = A.trail(path
      ? [['Paths', '#/paths'], [path.title, '#/paths/' + encodeURIComponent(path.id)], ['Step ' + (pathIdx + 1) + ' of ' + path.steps.length]]
      : [['Lessons', '#/lessons'], [cat.title, '#/category/' + encodeURIComponent(cat.id)], ['Lesson ' + l.number + ' of ' + cat.lessons.length]]);
    var prereq = l.prerequisites.map(Q.lesson).filter(Boolean);
    var openPrereq = prereq.filter(function (p) { return !P.isDone(p.id); });
    var rel = l.related || {};

    main.innerHTML = '<article class="container lesson">' +
      '<header class="lesson-head">' +
        crumbs +
        '<h1 class="h1" tabindex="-1">' + esc(l.title) + '</h1>' +
        '<div class="head-meta">' + A.side(l.side) + '<span>' + esc(l.level) + '</span><span>' + l.minutes + ' min</span>' +
          '<span id="lesson-state">' + A.stateTag(stateBefore) + '</span></div>' +
        '<p class="objective"><span class="objective-label">Goal</span>' + esc(l.objective) + '</p>' +
        (prereq.length ? '<p class="prereq small">' + (openPrereq.length ? 'Helpful first: ' : 'Builds on: ') +
          prereq.map(function (p) { return '<a href="' + A.lessonHref(p) + '">' + esc(p.title) + '</a>' + (P.isDone(p.id) ? ' (completed)' : ''); }).join(', ') + '</p>' : '') +
        '<div class="btn-row"><button type="button" class="btn btn-quiet btn-sm" id="review-toggle" aria-pressed="false"></button></div>' +
        (resumeAt ? '<p class="small muted resume-note">Picked up at step ' + (resumeAt + 1) + ' of ' + l.steps.length + ', where you left off. <button type="button" class="link-btn" id="restart-lesson">Start from step 1</button></p>' : '') +
      '</header>' +
      '<div class="lesson-grid">' +
        '<div class="lesson-board" id="lesson-board">' +
          '<div class="board-slot board-slot-top" id="slot-top"></div><div id="board-host"></div><div class="board-slot board-slot-bottom" id="slot-bottom"></div>' +
        '</div>' +
        '<div class="lesson-panel">' +
          '<nav aria-label="Lesson steps"><ol class="step-track" id="step-track"></ol></nav>' +
          '<div class="step-body" id="step-body"></div>' +
          '<div class="step-nav" id="step-nav"></div>' +
        '</div>' +
      '</div>' +
      ((rel.openings || []).length || (rel.gambits || []).length || (rel.lessons || []).length ?
        '<section class="section related" aria-labelledby="rel-h"><h2 class="h3" id="rel-h">Related</h2><div class="connect-grid">' +
          ((rel.openings || []).length ? '<div class="detail-block"><h3 class="h4">Openings</h3>' + A.chips(rel.openings, Q.line) + '</div>' : '') +
          ((rel.gambits || []).length ? '<div class="detail-block"><h3 class="h4">Gambits</h3>' + A.chips(rel.gambits, Q.line) + '</div>' : '') +
          ((rel.lessons || []).length ? '<div class="detail-block"><h3 class="h4">Lessons</h3>' + A.chips(rel.lessons, Q.lesson) + '</div>' : '') +
        '</div></section>' : '') +
      '</article>';

    var frame = U.boardFrame($('#board-host'), { fen: 'start', label: 'Lesson board' });
    var body = $('#step-body'), navEl = $('#step-nav'), trackEl = $('#step-track');
    var slotTop = $('#slot-top'), slotBottom = $('#slot-bottom');
    var reviewBtn = $('#review-toggle');

    function syncState() {
      var st = P.state(l.id);
      $('#lesson-state').innerHTML = A.stateTag(st);
      var on = st === 'review';
      reviewBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
      reviewBtn.innerHTML = on ? ICON.check + 'In your review list' : 'Mark for review';
    }
    reviewBtn.addEventListener('click', function () {
      var on = P.state(l.id) !== 'review';
      P.setReview(l.id, on);
      syncState();
      A.status(on ? 'Added to your review list.' : 'Removed from your review list.');
    });
    syncState();

    function renderTrack() {
      trackEl.innerHTML = l.steps.map(function (s, i) {
        var done = visited[i] && stepDone[i];
        var st = finished ? 'completed' : i === stepIndex ? 'next' : done ? 'completed' : 'new';
        var cur = i === stepIndex && !finished ? ' aria-current="step"' : '';
        var dis = i > reached ? ' disabled' : '';
        return '<li><button type="button" data-step="' + i + '"' + cur + dis + ' aria-label="Step ' + (i + 1) + ' of ' + l.steps.length + ': ' + esc(s.title || KIND[s.type]) + (done && i !== stepIndex ? ', done' : '') + '">' +
          A.pip(st) + (i + 1) + '</button></li>';
      }).join('');
    }

    function renderNav() {
      var last = stepIndex === l.steps.length - 1;
      var canNext = stepDone[stepIndex];
      var prev = stepIndex > 0 ? '<button type="button" class="btn btn-quiet" data-nav="prev">' + ICON.prev + 'Previous step</button>' : '<span></span>';
      var next = '<button type="button" class="btn btn-primary" data-nav="next"' + (canNext ? '' : ' aria-disabled="true" aria-describedby="next-why"') + '>' + (last ? 'Finish lesson' : 'Next step') + (last ? '' : ICON.next) + '</button>';
      var why = canNext ? '' : '<p class="small muted next-why-inline" id="next-why">Solve the position, or use Show answer, to continue.</p>';
      navEl.innerHTML = prev + next + why;
    }

    function renderStep(focusTitle) {
      var s = l.steps[stepIndex];
      if (current) { current.destroy(); current = null; }
      visited[stepIndex] = true;
      if (stepIndex > 0) { markStarted(); P.step(l.id, stepIndex); }
      frame.board.setMarks({});
      frame.board.setInteractive(false);
      frame.setNote('');
      body.innerHTML = '';
      slotTop.innerHTML = ''; slotBottom.innerHTML = '';
      body.appendChild(frag('<p class="step-kind">Step ' + (stepIndex + 1) + ' of ' + l.steps.length + ': ' + KIND[s.type] + '</p>' +
        '<h2 class="step-title" tabindex="-1">' + esc(s.title || KIND[s.type]) + '</h2>'));

      if (s.type === 'read') {
        frame.board.setOrientation(s.orientation || (l.side === 'black' ? 'b' : 'w'));
        frame.board.setPosition(s.fen, { arrows: s.arrows || [], highlights: s.highlights || [] });
        frame.setNote(s.fen === 'start' ? 'Starting position' : 'Example position');
        body.appendChild(frag('<p class="prose">' + esc(s.text) + '</p>'));
        if ((s.arrows && s.arrows.length) || (s.highlights && s.highlights.length)) {
          body.appendChild(frag('<p class="small muted">On the board: ' +
            (s.arrows || []).map(function (a) { return 'arrow ' + a[0] + ' to ' + a[1]; }).concat(
              s.highlights && s.highlights.length ? ['marked squares ' + s.highlights.join(', ')] : []).join('; ') + '.</p>'));
        }
      } else if (s.type === 'line') {
        frame.board.setOrientation(s.orientation || (l.side === 'black' ? 'b' : 'w'));
        if (s.text) body.appendChild(frag('<p class="prose">' + esc(s.text) + '</p>'));
        frame.setNote('Sample line');
        U.lineStepper(body, frame, { fen: s.fen, moves: s.moves }, { startNote: 'Press Next move, or use the arrow keys, to step through.' });
      } else if (s.type === 'puzzle') {
        frame.setNote('Exercise');
        // On phones the prompt sits above the board and the feedback right under it.
        var narrow = window.matchMedia('(max-width: 900px)').matches;
        (narrow ? slotTop : body).appendChild(frag('<p class="puzzle-prompt">' + esc(s.prompt) + '</p>'));
        body.appendChild(frag('<p class="small muted">Tap or drag a piece. With a keyboard, use the arrow keys on the board and Enter to pick up and place.</p>'));
        var idx = stepIndex;
        current = U.puzzle(frame, narrow ? slotBottom : body, s, {
          focusAfter: function () { return $('[data-nav="next"]', navEl); },
          onSolved: function (r) {
            stepDone[idx] = true;
            markStarted();
            if (r.revealed) revealedAny = true;
            missesTotal += r.misses || 0;
            reached = Math.max(reached, Math.min(idx + 1, l.steps.length - 1));
            if (idx === stepIndex && !finished) { renderNav(); renderTrack(); }
          }
        });
      }
      if (s.type !== 'puzzle') reached = Math.max(reached, Math.min(stepIndex + 1, l.steps.length - 1));
      renderTrack();
      renderNav();
      if (focusTitle) { var h = $('.step-title', body); if (h) h.focus({ preventScroll: true }); scrollToLesson(); }
    }

    function scrollToLesson() {
      var top = $('.lesson-grid').getBoundingClientRect().top + window.scrollY - $('.site-header').offsetHeight - 16;
      if (window.scrollY > top || window.innerWidth < 900) window.scrollTo({ top: Math.max(0, top), behavior: REDUCED ? 'auto' : 'smooth' });
    }

    function complete() {
      finished = true;
      if (current) { current.destroy(); current = null; }
      slotTop.innerHTML = ''; slotBottom.innerHTML = '';
      var struggled = revealedAny || missesTotal >= STRUGGLE_MISSES;
      P.complete(l.id, struggled);
      syncState();
      var nx = nextAfter(l, path && path.id);
      frame.board.setInteractive(false);
      var reason = revealedAny ? 'you used Show answer' : 'it took several tries';
      body.innerHTML = '<div class="complete-card">' +
        '<svg class="big-check" viewBox="0 0 44 44" aria-hidden="true"><rect x="1" y="1" width="42" height="42" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 23l7 7 14-15" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"/></svg>' +
        '<h2 class="step-title" tabindex="-1">Lesson complete</h2>' +
        '<p class="prose">' + esc(l.objective) + '</p>' +
        (struggled ? '<p class="review-note">' + A.stateTag('review') + 'Saved to your review list because ' + reason + '. Replay it later; a clean run clears it.</p>' : '') +
        (nx && nx.lesson ? '<div class="next-up"><p class="small muted">Up next</p><p class="h4">' + esc(nx.lesson.title) + '</p><p class="small muted">' + esc(nx.why) + '</p></div>' : '') +
        (nx && nx.done ? '<p class="prose">That was the last lesson in ' + esc(nx.done.title) + '. Well done.</p>' : '') +
        '<div class="btn-row">' +
          (nx && nx.lesson ? '<a class="btn btn-primary" href="' + A.lessonHref(nx.lesson, nx.path && nx.path.id) + '">Next lesson</a>' : '<a class="btn btn-primary" href="#/progress">See your progress</a>') +
          (path ? '<a class="btn btn-secondary" href="#/paths/' + esc(path.id) + '">Back to the path</a>' : '<a class="btn btn-secondary" href="#/category/' + esc(cat.id) + '">Back to ' + esc(cat.title) + '</a>') +
        '</div>' +
      '</div>';
      navEl.innerHTML = '<button type="button" class="btn btn-quiet" data-nav="restart">' + ICON.reset + 'Go through it again</button>';
      renderTrack();
      $('.step-title', body).focus({ preventScroll: true });
      scrollToLesson();
    }

    navEl.addEventListener('click', function (e) {
      var b = e.target.closest('[data-nav]');
      if (!b) return;
      if (b.dataset.nav === 'prev') { stepIndex--; renderStep(true); }
      else if (b.dataset.nav === 'restart') {
        finished = false; stepIndex = 0; reached = 0; revealedAny = false; missesTotal = 0;
        stepDone = l.steps.map(function (s) { return s.type !== 'puzzle'; });
        visited = l.steps.map(function () { return false; });
        renderStep(true);
      } else if (b.dataset.nav === 'next') {
        if (b.getAttribute('aria-disabled') === 'true') { var why = $('#next-why'); if (why) why.classList.add('is-alert'); return; }
        if (stepIndex === l.steps.length - 1) complete();
        else { stepIndex++; renderStep(true); }
      }
    });
    trackEl.addEventListener('click', function (e) {
      var b = e.target.closest('[data-step]');
      if (!b || b.disabled) return;
      finished = false;
      stepIndex = +b.dataset.step;
      renderStep(true);
    });

    var restartBtn = $('#restart-lesson');
    if (restartBtn) restartBtn.addEventListener('click', function () {
      restartBtn.parentNode.parentNode.removeChild(restartBtn.parentNode);
      stepIndex = 0;
      renderStep(true);
    });
    renderStep(false);
    return { title: l.title + ' · ' + cat.title + ' · ' + SITE };
  };
})();
