/*
 * Content checker for The Quiet Gambit.
 * Run with the Windows script host (no Node needed):
 *   cscript //nologo tools\check-content.js            -> checks every js\content\*.js file
 *   cscript //nologo tools\check-content.js FILE ...    -> checks only those files
 *                                                          (references to ids in other files become warnings)
 * It loads js\chess.js, so moves are judged by exactly the rules the site uses.
 * JScript is ES3: content files must be plain data (no trailing commas, no let/const/arrows).
 */
var fso = new ActiveXObject('Scripting.FileSystemObject');
var root = fso.GetParentFolderName(fso.GetParentFolderName(WScript.ScriptFullName));

// ---------------------------------------------------------------- ES5 shims
if (!Array.prototype.forEach) Array.prototype.forEach = function (f, t) { for (var i = 0; i < this.length; i++) if (i in this) f.call(t, this[i], i, this); };
if (!Array.prototype.map) Array.prototype.map = function (f, t) { var r = []; for (var i = 0; i < this.length; i++) r.push(f.call(t, this[i], i, this)); return r; };
if (!Array.prototype.filter) Array.prototype.filter = function (f, t) { var r = []; for (var i = 0; i < this.length; i++) if (f.call(t, this[i], i, this)) r.push(this[i]); return r; };
if (!Array.prototype.some) Array.prototype.some = function (f, t) { for (var i = 0; i < this.length; i++) if (f.call(t, this[i], i, this)) return true; return false; };
if (!Array.prototype.every) Array.prototype.every = function (f, t) { for (var i = 0; i < this.length; i++) if (!f.call(t, this[i], i, this)) return false; return true; };
if (!Array.prototype.indexOf) Array.prototype.indexOf = function (x) { for (var i = 0; i < this.length; i++) if (this[i] === x) return i; return -1; };
if (!Object.keys) Object.keys = function (o) { var r = []; for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) r.push(k); return r; };
function isArray(a) { return Object.prototype.toString.call(a) === '[object Array]'; }

var window = this;
function read(path) {
  var s = new ActiveXObject('ADODB.Stream');
  s.Type = 2; s.Charset = 'utf-8'; s.Open(); s.LoadFromFile(path);
  var t = s.ReadText(); s.Close(); return t;
}
function load(path) {
  try { eval(read(path)); return null; }
  catch (e) { return e.message || String(e); }
}

var errors = [], warnings = [];
function err(where, msg) { errors.push(where + ': ' + msg); }
function warn(where, msg) { warnings.push(where + ': ' + msg); }

var chessErr = load(root + '\\js\\chess.js');
if (chessErr) { WScript.Echo('Cannot load chess.js: ' + chessErr); WScript.Quit(2); }
var C = window.QGChess;

// ---------------------------------------------------------------- files
var args = [], i;
for (i = 0; i < WScript.Arguments.length; i++) args.push(WScript.Arguments(i));
var partial = args.length > 0;
var files = [];
if (partial) files = args.map(function (a) { return fso.GetAbsolutePathName(a); });
else {
  var en = new Enumerator(fso.GetFolder(root + '\\js\\content').Files);
  for (; !en.atEnd(); en.moveNext()) { var f = en.item().Path; if (/\.js$/i.test(f)) files.push(f); }
}
window.QG_PARTS = [];
files.forEach(function (f) {
  var before = window.QG_PARTS.length;
  var e = load(f);
  if (e) err(fso.GetFileName(f), 'does not load (syntax error?): ' + e);
  else if (window.QG_PARTS.length === before && !/core\.js$/i.test(f)) warn(fso.GetFileName(f), 'added nothing to QG_PARTS');
  for (var k = before; k < window.QG_PARTS.length; k++) window.QG_PARTS[k].__file = fso.GetFileName(f);
});

var CATEGORIES = ['white-openings', 'black-vs-e4', 'black-vs-d4', 'black-vs-flank', 'white-gambits', 'black-gambits',
  'tactics', 'strategy', 'attack', 'defence', 'endgames', 'practical'];
if (window.QG_CORE && window.QG_CORE.categories) CATEGORIES = window.QG_CORE.categories.map(function (c) { return c.id; }); // single source of truth when core.js is loaded
var LEVELS = ['Beginner', 'Intermediate', 'Advanced'];
var STYLES = ['Solid', 'Attacking', 'Positional', 'Sharp', 'Flexible'];
var CHARACTERS = ['Established', 'Playable', 'Speculative'];
var FOCUS = ['white-repertoire', 'black-e4', 'black-d4', 'black-flank', 'white-gambits', 'black-gambits', 'tactics', 'strategy', 'endgames', 'practical'];
var GROUPS = { white: ['e4', 'd4', 'flank'], black: ['vs-e4', 'vs-d4', 'vs-flank'] };

var lessons = [], repertoire = [], gambits = [], families = [], glossary = [], ids = {};
window.QG_PARTS.forEach(function (p) {
  (p.lessons || []).forEach(function (x) { x.__file = p.__file; lessons.push(x); });
  (p.repertoire || []).forEach(function (x) { x.__file = p.__file; repertoire.push(x); });
  (p.gambits || []).forEach(function (x) { x.__file = p.__file; gambits.push(x); });
  (p.families || []).forEach(function (x) { x.__file = p.__file; families.push(x); });
  (p.glossary || []).forEach(function (x) { glossary.push(x); });
});
if (window.QG_CONTENT && window.QG_CONTENT.glossary) glossary = glossary.concat(window.QG_CONTENT.glossary);
[lessons, repertoire, gambits, families].forEach(function (list) {
  list.forEach(function (x) {
    if (!x.id) { err(x.__file, 'entry without id: ' + (x.title || x.name)); return; }
    if (ids[x.id]) err(x.__file, 'duplicate id ' + x.id + ' (also in ' + ids[x.id] + ')');
    ids[x.id] = x.__file;
  });
});

// ---------------------------------------------------------------- helpers
function words(s) { return s ? String(s).split(/\s+/).length : 0; }
function nonAscii(where, s) { if (s && /[^\x09\x0A\x0D\x20-\x7E]/.test(s)) warn(where, 'non-ASCII character in "' + String(s).slice(0, 40) + '"'); }
function fen(where, f) {
  try {
    var s = C.parseFen(f || 'start');
    var wk = 0, bk = 0;
    s.board.forEach(function (p) { if (p === 'K') wk++; if (p === 'k') bk++; });
    if (wk !== 1 || bk !== 1) err(where, 'needs exactly one king each: ' + f);
    for (var sq = 0; sq < 64; sq++) {
      var p = s.board[sq];
      if ((p === 'P' || p === 'p') && (C.rankOf(sq) === 1 || C.rankOf(sq) === 8)) err(where, 'pawn on first/eighth rank: ' + f);
    }
    if (C.inCheck(s, s.turn === 'w' ? 'b' : 'w')) err(where, 'side NOT to move is in check: ' + f);
    return s;
  } catch (e) { err(where, 'bad FEN "' + f + '": ' + e.message); return null; }
}
// Replay uci list; returns final state or null. moves may be strings or {uci, san}.
function replay(where, f, moves, checkSan) {
  var s = fen(where, f);
  if (!s) return null;
  for (var k = 0; k < moves.length; k++) {
    var mv = moves[k], u = typeof mv === 'string' ? mv : mv && mv.uci;
    if (!u) { err(where, 'move ' + (k + 1) + ' has no uci'); return null; }
    var m = C.moveFromUci(s, u);
    if (!m) { err(where, 'illegal move ' + (k + 1) + ' ' + u + ' in position ' + C.toFen(s)); return null; }
    var san = C.san(s, m);
    if (checkSan && typeof mv !== 'string') {
      if (!mv.san) err(where, 'move ' + u + ' missing san (should be ' + san + ')');
      else if (mv.san.replace(/[!?]+$/, '') !== san) err(where, 'SAN mismatch at ' + u + ': "' + mv.san + '" should be "' + san + '"');
      nonAscii(where, mv.note);
    }
    s = C.applyMove(s, m);
  }
  return s;
}
function sanList(moves) {
  var s = C.parseFen('start'), out = [];
  for (var k = 0; k < moves.length; k++) {
    var m = C.moveFromUci(s, moves[k]);
    if (!m) return null;
    out.push(C.san(s, m)); s = C.applyMove(s, m);
  }
  return out;
}
function tokens(str) {
  return String(str || '').replace(/\d+\.(\.\.)?/g, ' ').replace(/[!?]/g, '').split(/\s+/).filter(function (t) { return t; });
}
function ref(where, id, kind) {
  if (!id) return;
  if (!ids[id]) (partial ? warn : err)(where, kind + ' reference "' + id + '" does not exist' + (partial ? ' (yet)' : ''));
}
function strList(where, field, arr, min) {
  if (!isArray(arr) || arr.length < min) err(where, field + ' needs at least ' + min + ' item(s)');
  else arr.forEach(function (t) { nonAscii(where, t); });
}

// ---------------------------------------------------------------- steps
function checkStep(where, st) {
  if (!st || !st.type) { err(where, 'step without type'); return; }
  nonAscii(where, st.text); nonAscii(where, st.prompt); nonAscii(where, st.explanation); nonAscii(where, st.hint); nonAscii(where, st.title);
  if (st.type === 'read') {
    if (!st.text) err(where, 'read step needs text');
    if (words(st.text) > 90) warn(where, 'read text is ' + words(st.text) + ' words (aim for <= 80)');
    fen(where, st.fen);
    (st.arrows || []).forEach(function (a) { if (!/^[a-h][1-8]$/.test(a[0]) || !/^[a-h][1-8]$/.test(a[1])) err(where, 'bad arrow ' + a); });
    (st.highlights || []).forEach(function (h) { if (!/^[a-h][1-8]$/.test(h)) err(where, 'bad highlight ' + h); });
  } else if (st.type === 'line') {
    if (!isArray(st.moves) || st.moves.length < 2) err(where, 'line step needs moves');
    else replay(where, st.fen, st.moves, true);
  } else if (st.type === 'puzzle') {
    if (!st.prompt) err(where, 'puzzle needs prompt');
    if (!st.explanation) err(where, 'puzzle needs explanation');
    if (!st.hint) warn(where, 'puzzle has no hint');
    if (words(st.explanation) > 75) warn(where, 'explanation is ' + words(st.explanation) + ' words (aim for <= 70)');
    if (!isArray(st.solution) || !st.solution.length) { err(where, 'puzzle needs solution'); return; }
    if (st.solution.length % 2 === 0) err(where, 'solution must end with the solver\'s move (odd length)');
    var start = fen(where, st.fen);
    if (!start) return;
    var end = replay(where + ' solution', st.fen, st.solution, false);
    var seqs = [st.solution];
    (st.accept || []).forEach(function (a, k) {
      if (!isArray(a)) { err(where, 'accept[' + k + '] must be an array of uci moves'); return; }
      replay(where + ' accept[' + k + ']', st.fen, a, false); seqs.push(a);
    });
    Object.keys(st.wrong || {}).forEach(function (u) {
      if (!C.moveFromUci(start, u)) err(where, 'wrong-move key ' + u + ' is not legal');
      if (seqs.some(function (s) { return s[0] === u; })) err(where, 'wrong-move key ' + u + ' is also an accepted answer');
      nonAscii(where, st.wrong[u]);
    });
    // Mate puzzles: every mating first move must be accepted.
    if (end && st.solution.length === 1 && C.status(end) === 'checkmate') {
      var mates = C.legalMoves(start).filter(function (m) { return C.status(C.applyMove(start, m)) === 'checkmate'; }).map(C.uci);
      mates.forEach(function (u) {
        if (!seqs.some(function (s) { return s.length === 1 && s[0].slice(0, 4) === u.slice(0, 4); })) err(where, 'another mate in one exists (' + u + '); add it to accept or change the position');
      });
    }
    if (end && C.status(end) === 'stalemate') err(where, 'solution ends in stalemate');
  } else err(where, 'unknown step type ' + st.type);
}

// ---------------------------------------------------------------- lessons
var byCat = {};
lessons.forEach(function (l) {
  var w = l.__file + ' lesson ' + l.id;
  if (CATEGORIES.indexOf(l.category) < 0) err(w, 'unknown category "' + l.category + '"');
  byCat[l.category] = (byCat[l.category] || 0) + 1;
  if (['white', 'black', 'both'].indexOf(l.side) < 0) err(w, 'side must be white, black or both');
  if (LEVELS.indexOf(l.level) < 0) err(w, 'level must be one of ' + LEVELS.join('/'));
  if (!(l.minutes >= 3 && l.minutes <= 15)) err(w, 'minutes should be 3-15');
  ['title', 'objective', 'summary'].forEach(function (k) { if (!l[k]) err(w, 'missing ' + k); nonAscii(w, l[k]); });
  if (words(l.objective) > 30) warn(w, 'objective is long');
  if (!isArray(l.steps) || l.steps.length < 2 || l.steps.length > 5) err(w, 'needs 2-5 steps');
  else {
    if (!l.steps.some(function (s) { return s.type === 'puzzle'; })) err(w, 'needs at least one puzzle step (the exercise)');
    l.steps.forEach(function (s, k) { checkStep(w + ' step ' + k, s); });
    // A read step that shows the puzzle's position must not point at the answer.
    l.steps.forEach(function (p, k) {
      if (p.type !== 'puzzle' || !p.solution || !p.solution[0]) return;
      var from = p.solution[0].slice(0, 2), to = p.solution[0].slice(2, 4);
      var board = String(p.fen).split(' ')[0];
      l.steps.forEach(function (r, j) {
        if (j >= k || r.type !== 'read' || String(r.fen).split(' ')[0] !== board) return;
        var arrowHit = (r.arrows || []).some(function (a) { return a[0] === from && a[1] === to; });
        var markHit = (r.highlights || []).indexOf(to) >= 0 && (r.highlights || []).indexOf(from) >= 0;
        if (arrowHit || markHit) err(w + ' step ' + j, 'read step shows the puzzle position (step ' + k + ') and marks its answer ' + p.solution[0]);
      });
    });
  }
  (l.prerequisites || []).forEach(function (r) { ref(w, r, 'prerequisite'); if (r === l.id) err(w, 'lists itself as prerequisite'); });
  var rel = l.related || {};
  (rel.openings || []).forEach(function (r) { ref(w, r, 'opening'); });
  (rel.gambits || []).forEach(function (r) { ref(w, r, 'gambit'); });
  (rel.lessons || []).forEach(function (r) { ref(w, r, 'lesson'); });
});

// ---------------------------------------------------------------- repertoire & gambits
function checkLineEntry(x, kind) {
  var w = x.__file + ' ' + kind + ' ' + x.id;
  ['name', 'moves', 'idea', 'summary'].forEach(function (k) { if (!x[k]) err(w, 'missing ' + k); nonAscii(w, x[k]); });
  if (['white', 'black'].indexOf(x.side) < 0) err(w, 'side must be white or black');
  if (LEVELS.indexOf(x.difficulty) < 0) err(w, 'difficulty must be one of ' + LEVELS.join('/'));
  if (!isArray(x.defining) || !x.defining.length) err(w, 'needs defining uci moves');
  else {
    var sans = sanList(x.defining);
    if (!sans) err(w, 'defining moves are not legal from the start position');
    else {
      var t = tokens(x.moves);
      if (t.join(' ') !== sans.join(' ')) err(w, 'moves "' + x.moves + '" do not match defining (' + sans.join(' ') + ')');
      if (x.side === 'white' && x.defining.length % 2 === 0) warn(w, 'white entry defined by a Black move (even ply count) - fine if intended');
      if (x.side === 'black' && x.defining.length % 2 === 1) warn(w, 'black entry defined by a White move (odd ply count) - fine if intended');
    }
  }
  if (!x.line || !isArray(x.line.moves) || x.line.moves.length < 6) err(w, 'needs a sample line of at least 6 plies');
  else {
    if ((x.line.fen || 'start') !== 'start') err(w, 'sample line must start from the initial position');
    replay(w + ' line', 'start', x.line.moves, true);
    if (isArray(x.defining)) for (var k = 0; k < x.defining.length; k++)
      if (!x.line.moves[k] || x.line.moves[k].uci !== x.defining[k]) { err(w, 'sample line must begin with the defining moves'); break; }
  }
  var plans = x.plans || {};
  strList(w, 'plans.white', plans.white, 2);
  strList(w, 'plans.black', plans.black, 2);
  (x.lessons || []).forEach(function (r) { ref(w, r, 'lesson'); });
  (x.gambits || []).forEach(function (r) { ref(w, r, 'gambit'); });
  (x.transpositions || []).forEach(function (t) { ref(w, t.to, 'transposition'); });
  if (x.base) ref(w, x.base, 'base opening');
  checkV3(w, x, kind);
  return w;
}

// v3: aliases, study time, labelled pitfalls and concrete move lines.
var PITFALLS = ['Trap', 'Mistake', 'Risk'];
var LINE_KINDS = ['Main line', 'Alternative', 'Sideline', 'Sharp try', 'Accepted', 'Declined'];
var moveLineCount = 0;
function checkV3(w, x, kind) {
  if (x.aliases !== undefined) {
    if (!isArray(x.aliases)) err(w, 'aliases must be an array of strings');
    else x.aliases.forEach(function (a) { nonAscii(w, a); if (typeof a !== 'string' || !a) err(w, 'empty alias'); });
  }
  if (!(x.minutes >= 5 && x.minutes <= 30)) err(w, 'minutes (study time) should be 5-30');
  if (!isArray(x.pitfalls) || x.pitfalls.length < 2 || x.pitfalls.length > 4) err(w, 'needs 2-4 pitfalls');
  else x.pitfalls.forEach(function (p, k) {
    var pw = w + ' pitfall ' + k;
    if (PITFALLS.indexOf(p.kind) < 0) err(pw, 'kind must be one of ' + PITFALLS.join('/'));
    if (['white', 'black'].indexOf(p.side) < 0) err(pw, 'side must be white or black');
    if (!p.title || !p.text) err(pw, 'needs title and text');
    if (words(p.title) > 9) warn(pw, 'title is long');
    if (words(p.text) > 60) warn(pw, 'text is ' + words(p.text) + ' words (aim for <= 50)');
    nonAscii(pw, p.title); nonAscii(pw, p.text);
    if (p.uci !== undefined) {
      if (!isArray(p.uci) || !p.uci.length) err(pw, 'uci must be a non-empty array of moves from the start');
      else replay(pw, 'start', p.uci, false);
    }
  });
  var after = isArray(x.defining) ? replay(w + ' defining', 'start', x.defining, false) : null;
  if (!isArray(x.lines) || x.lines.length < 2 || x.lines.length > 4) { err(w, 'needs 2-4 move lines'); return; }
  var seenId = {}, seenSeq = {};
  x.lines.forEach(function (ln, k) {
    var lw = w + ' line ' + (ln.id || k);
    moveLineCount++;
    if (!ln.id || !/^[a-z0-9-]+$/.test(ln.id)) err(lw, 'needs a lowercase slug id');
    else if (seenId[ln.id]) err(lw, 'duplicate line id');
    seenId[ln.id] = true;
    if (!ln.name || !ln.summary) err(lw, 'needs name and summary');
    nonAscii(lw, ln.name); nonAscii(lw, ln.summary);
    if (words(ln.summary) > 40) warn(lw, 'summary is ' + words(ln.summary) + ' words (aim for <= 35)');
    if (LINE_KINDS.indexOf(ln.kind) < 0) err(lw, 'kind must be one of ' + LINE_KINDS.join('/'));
    if (!isArray(ln.moves) || ln.moves.length < 4 || ln.moves.length > 14) { err(lw, 'needs 4-14 plies of moves'); return; }
    if (count(ln.moves, function (m) { return m && m.note; }) < 2) err(lw, 'needs notes on at least 2 moves');
    if (after) replay(lw, C.toFen(after), ln.moves, true);
    var key = ln.moves.map(function (m) { return m.uci; }).join(' ');
    if (seenSeq[key]) err(lw, 'same moves as line ' + seenSeq[key]);
    seenSeq[key] = ln.id;
  });
  (x.responses || []).forEach(function (r) { if (r.line && !seenId[r.line]) err(w, 'response "' + r.name + '" points at unknown line ' + r.line); });
}
function isPrefixOf(a, b) { if (!isArray(a) || !isArray(b) || a.length > b.length) return false; for (var k = 0; k < a.length; k++) if (a[k] !== b[k]) return false; return true; }
// ---------------------------------------------------------------- families
var familyById = {};
families.forEach(function (f) {
  var w = f.__file + ' family ' + f.id;
  familyById[f.id] = f;
  if (!/^(wf|bf)-[a-z0-9-]+$/.test(f.id || '')) err(w, "id must start with 'wf-' or 'bf-'");
  if (['white', 'black'].indexOf(f.side) < 0) err(w, 'side must be white or black');
  else {
    if ((f.side === 'white') !== /^wf-/.test(f.id)) err(w, 'id prefix does not match side');
    if (GROUPS[f.side].indexOf(f.group) < 0) err(w, 'group must be one of ' + GROUPS[f.side].join('/'));
  }
  ['name', 'summary', 'overview', 'choosing'].forEach(function (k) { if (!f[k]) err(w, 'missing ' + k); nonAscii(w, f[k]); });
  if (words(f.summary) > 35) warn(w, 'summary is long');
  if (words(f.overview) > 100) warn(w, 'overview is ' + words(f.overview) + ' words (aim for <= 90)');
  if (!isArray(f.root) || !f.root.length) err(w, 'needs root uci moves');
  else if (!sanList(f.root)) err(w, 'root moves are not legal');
  ['aliases', 'terms'].forEach(function (k) {
    if (f[k] !== undefined && !isArray(f[k])) err(w, k + ' must be an array');
    else (f[k] || []).forEach(function (t) { nonAscii(w, t); });
  });
});
var names = {};
families.forEach(function (f) {
  var k = f.side + ':' + String(f.name).toLowerCase();
  if (names[k]) err(f.__file + ' family ' + f.id, 'same name as ' + names[k]);
  names[k] = f.id;
});

var defSeen = {};
repertoire.forEach(function (x) {
  var w = checkLineEntry(x, 'opening');
  if (x.side && GROUPS[x.side] && GROUPS[x.side].indexOf(x.group) < 0) err(w, 'group must be one of ' + GROUPS[x.side].join('/'));
  if (STYLES.indexOf(x.style) < 0) err(w, 'style must be one of ' + STYLES.join('/'));
  if (!x.family) err(w, 'missing family');
  if (!isArray(x.responses) || x.responses.length < 2) err(w, 'needs at least 2 common responses');
  else x.responses.forEach(function (r) { if (!r.moves || !r.note) err(w, 'each response needs moves and note'); nonAscii(w, r.note); nonAscii(w, r.name); });
  var key = x.side + ':' + (x.defining || []).join(' ');
  if (defSeen[key]) err(w, 'same defining moves as ' + defSeen[key] + ' (duplicate line)');
  defSeen[key] = x.id;
  if (!x.short) err(w, 'missing short (the variation name inside its family)');
  nonAscii(w, x.short);
  var fam = familyById[x.familyId];
  if (!x.familyId) err(w, 'missing familyId');
  else if (!fam) ref(w, x.familyId, 'family');
  else {
    if (fam.side !== x.side) err(w, 'family ' + fam.id + ' belongs to the other side');
    if (fam.name !== x.family) err(w, 'family "' + x.family + '" should equal the family name "' + fam.name + '"');
    if (fam.group !== x.group) warn(w, 'group ' + x.group + ' differs from its family group ' + fam.group);
    if (!isPrefixOf(fam.root, x.defining)) err(w, 'defining moves do not start with the family root of ' + fam.id);
    fam.__variations = (fam.__variations || 0) + 1;
  }
  if (x.parent) {
    var par = null;
    repertoire.forEach(function (y) { if (y.id === x.parent) par = y; });
    if (!par) ref(w, x.parent, 'parent variation');
    else {
      if (par.familyId !== x.familyId) err(w, 'parent ' + x.parent + ' is in another family');
      if (!(isPrefixOf(par.defining, x.defining) && par.defining.length < x.defining.length)) err(w, 'parent ' + x.parent + ' defining moves are not a proper prefix of this line');
    }
  }
});
gambits.forEach(function (x) {
  var w = checkLineEntry(x, 'gambit');
  if (CHARACTERS.indexOf(x.character) < 0) err(w, 'character must be one of ' + CHARACTERS.join('/'));
  if (!x.characterNote) err(w, 'missing characterNote (why this label)');
  ['offer', 'compensation'].forEach(function (k) { if (!x[k]) err(w, 'missing ' + k); });
  strList(w, 'risks', x.risks, 2);
  var key = 'g:' + (x.defining || []).join(' ');
  if (defSeen[key]) err(w, 'same defining moves as ' + defSeen[key] + ' (duplicate gambit)');
  defSeen[key] = x.id;
  if (x.side && GROUPS[x.side] && GROUPS[x.side].indexOf(x.group) < 0) err(w, 'group must be one of ' + GROUPS[x.side].join('/'));
  if (STYLES.indexOf(x.style) < 0) err(w, 'style must be one of ' + STYLES.join('/'));
  if (x.familyId) { if (!familyById[x.familyId]) ref(w, x.familyId, 'family'); else familyById[x.familyId].__gambits = true; }
  (x.relatedOpenings || []).forEach(function (r) { ref(w, r, 'related opening'); });
});
if (!partial) families.forEach(function (f) {
  if (!f.__variations) err(f.__file + ' family ' + f.id, 'has no variations');
});

// ---------------------------------------------------------------- paths
if (window.QG_CORE && window.QG_CORE.paths) {
  var pathIds = {};
  window.QG_CORE.paths.forEach(function (p) {
    var w = 'core.js path ' + p.id;
    if (pathIds[p.id]) err(w, 'duplicate path id');
    pathIds[p.id] = true;
    ['title', 'summary', 'side', 'style', 'goal'].forEach(function (k) { if (!p[k]) err(w, 'missing ' + k); });
    if (FOCUS.indexOf(p.focus) < 0) err(w, 'focus must be one of ' + FOCUS.join('/'));
    if (LEVELS.indexOf(p.level) < 0) err(w, 'level must be one of ' + LEVELS.join('/'));
    var seen = {};
    (p.steps || []).forEach(function (s) {
      ref(w, s.lesson, 'path step');
      if (seen[s.lesson]) err(w, 'lesson ' + s.lesson + ' appears twice');
      seen[s.lesson] = true;
      if (!s.why) warn(w, 'step ' + s.lesson + ' has no why');
    });
  });
}

// ---------------------------------------------------------------- report
function count(list, f) { return list.filter(f).length; }
WScript.Echo('Files: ' + files.map(function (f) { return fso.GetFileName(f); }).join(', '));
WScript.Echo('Lessons: ' + lessons.length + '  ' + CATEGORIES.map(function (c) { return c + '=' + (byCat[c] || 0); }).join(' '));
WScript.Echo('Repertoire: white ' + count(repertoire, function (x) { return x.side === 'white'; }) +
  ' (e4 ' + count(repertoire, function (x) { return x.group === 'e4'; }) + ', d4 ' + count(repertoire, function (x) { return x.group === 'd4'; }) + ', flank ' + count(repertoire, function (x) { return x.group === 'flank'; }) + ')' +
  ', black ' + count(repertoire, function (x) { return x.side === 'black'; }) +
  ' (vs-e4 ' + count(repertoire, function (x) { return x.group === 'vs-e4'; }) + ', vs-d4 ' + count(repertoire, function (x) { return x.group === 'vs-d4'; }) + ', vs-flank ' + count(repertoire, function (x) { return x.group === 'vs-flank'; }) + ')');
WScript.Echo('Gambits: white ' + count(gambits, function (x) { return x.side === 'white'; }) + ', black ' + count(gambits, function (x) { return x.side === 'black'; }));
WScript.Echo('Families: white ' + count(families, function (x) { return x.side === 'white'; }) + ', black ' + count(families, function (x) { return x.side === 'black'; }) + '   Move lines: ' + moveLineCount);
WScript.Echo('');
warnings.forEach(function (w) { WScript.Echo('WARN  ' + w); });
errors.forEach(function (e) { WScript.Echo('ERROR ' + e); });
WScript.Echo('');
WScript.Echo(errors.length + ' error(s), ' + warnings.length + ' warning(s)');
WScript.Quit(errors.length ? 1 : 0);
