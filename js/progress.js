/*
 * The Quiet Gambit — local progress.
 * One record per lesson: started, the last step reached, completed, and a
 * review flag. Lives in localStorage; migrates the v1 { completed } format.
 */
(function () {
  'use strict';

  var KEY = 'qg-progress-v2', OLD_KEY = 'qg-progress-v1';
  var data = { lessons: {}, activePath: null, last: null };
  var listeners = [];

  function read(key) {
    try { var raw = window.localStorage.getItem(key); return raw ? JSON.parse(raw) : null; }
    catch (e) { return null; }
  }
  var saved = read(KEY);
  if (saved && saved.lessons && typeof saved.lessons === 'object') {
    data.lessons = saved.lessons;
    data.activePath = saved.activePath || null;
    data.last = saved.last || null;
  } else {
    var old = read(OLD_KEY);
    if (old && old.completed && typeof old.completed === 'object') {
      Object.keys(old.completed).forEach(function (id) {
        var r = old.completed[id] || {};
        data.lessons[id] = { status: 'completed', completedAt: r.at || Date.now(), review: !!r.revealed };
      });
    }
  }

  function save() {
    try { window.localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* storage unavailable: progress lasts this visit */ }
    listeners.forEach(function (fn) { fn(); });
  }
  function rec(id) { return data.lessons[id] || null; }

  // 'new' | 'in-progress' | 'completed' | 'review'
  function state(id) {
    var r = rec(id);
    if (!r) return 'new';
    if (r.review) return 'review';
    return r.status === 'completed' ? 'completed' : 'in-progress';
  }
  function isDone(id) { var r = rec(id); return !!(r && r.status === 'completed'); }

  // Coach preferences live under their own key, so resetting progress keeps them.
  var PREFS_KEY = 'qg-coach-v1';
  var prefs = read(PREFS_KEY);
  if (!prefs || typeof prefs !== 'object') prefs = null;
  function savePrefs() {
    try { if (prefs) window.localStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); else window.localStorage.removeItem(PREFS_KEY); } catch (e) { /* storage unavailable */ }
    listeners.forEach(function (fn) { fn(); });
  }
  var DAY = 864e5;

  window.QGProgress = {
    prefs: function () { return prefs; },
    setPrefs: function (o) { prefs = o; savePrefs(); },
    clearPrefs: function () { prefs = null; savePrefs(); },
    // Days since the lesson was last completed (null if never).
    daysSince: function (id) { var r = rec(id); return r && r.status === 'completed' ? Math.floor((Date.now() - (r.lastCompletedAt || r.completedAt || Date.now())) / DAY) : null; },
    state: state,
    isDone: isDone,
    record: rec,
    start: function (id) {
      var r = rec(id);
      if (!r) data.lessons[id] = r = { status: 'started', startedAt: Date.now(), step: 0 };
      // Replaying a finished lesson should not hide one that is genuinely in progress.
      if (r.status !== 'completed') data.last = id;
      save();
    },
    step: function (id, i) {
      var r = rec(id);
      if (r && r.status !== 'completed' && i > (r.step || 0)) { r.step = i; save(); }
    },
    // struggled: answer revealed or several misses -> flag for review.
    complete: function (id, struggled) {
      var r = rec(id) || {};
      r.status = 'completed';
      r.completedAt = r.completedAt || Date.now();
      r.lastCompletedAt = Date.now();
      r.review = !!struggled;
      data.lessons[id] = r;
      data.last = id;
      save();
      return r.review;
    },
    setReview: function (id, on) {
      var r = rec(id) || (data.lessons[id] = { status: 'started', startedAt: Date.now(), step: 0 });
      r.review = !!on;
      save();
    },
    setPath: function (id) { data.activePath = id; save(); },
    activePath: function () { return data.activePath; },
    last: function () { return data.last; },
    reset: function () { data = { lessons: {}, activePath: null, last: null }; save(); },
    onChange: function (fn) { listeners.push(fn); }
  };
})();
