// js/insights.js
// Drives insights.html: which topics are going well, which aren't, and a
// short study plan built from those two lists.
//
// The study plan is computed, not generated -- it's arithmetic over the
// scores in js/progress.js (worst topics first, weak units, untouched
// topics, questions still unanswered-correctly), phrased as advice. There
// is no model call here: this is a static site with no backend, and an
// API key shipped in browser JavaScript is a key anyone can read and
// spend. Every claim the page makes is traceable to a number it shows.
//
// Depends on the subject data files, js/subjects.js, js/tracking.js,
// js/progress.js, js/icons.js and js/attempt-labels.js.

(function () {
  const SHOW_PER_LIST = 3; // how many topics each of the two lists names
  const WEAK_UNIT_MIN = 2; // this many weak topics in one unit makes it a pattern

  const strongListEl = document.getElementById("strong-list");
  const weakListEl = document.getElementById("weak-list");
  const strongSectionEl = document.getElementById("strong-section");
  const weakSectionEl = document.getElementById("weak-section");
  const planListEl = document.getElementById("plan-list");
  const emptyEl = document.getElementById("insights-empty");
  const statsEl = document.getElementById("insights-stats");
  const contentEl = document.getElementById("insights-content");
  if (!planListEl) return;

  const labels = window.AllAPAttemptLabels;
  const progress = window.APGovProgress;

  function icon(name, className, size) {
    return window.AllAPIcons ? window.AllAPIcons.svg(name, className, size) : null;
  }

  function pct(value) {
    return `${Math.round(value * 100)}%`;
  }

  // --- Data ---------------------------------------------------------------
  // Attempted lessons, strongest first, with their display info attached.
  const ranked = progress
    .getLessonRankings()
    .map((entry) => {
      const info = labels.resolve(entry.id, "lesson");
      return info ? Object.assign({}, entry, info) : null;
    })
    .filter(Boolean);

  const attemptedIds = new Set(ranked.map((r) => r.id));

  // Every lesson the site offers, so we can tell "untouched" apart from
  // "attempted and weak" -- they need opposite advice.
  const allLessons = [];
  window.AllAPSubjects.list().forEach((subject) => {
    subject.units.forEach((unit) => {
      unit.lessons.forEach((lessonId) => {
        allLessons.push({ lessonId, unit, subject });
      });
    });
  });
  const untouched = allLessons.filter((l) => !attemptedIds.has(l.lessonId));

  // Units ordered by how many of their attempted topics came in under the
  // pass mark -- this is what turns scattered low scores into a pattern.
  const weakUnits = [];
  window.AllAPSubjects.list().forEach((subject) => {
    subject.units.forEach((unit) => {
      const scored = unit.lessons.filter((id) => attemptedIds.has(id));
      const weak = scored.filter((id) => {
        const entry = ranked.find((r) => r.id === id);
        return entry && entry.percent < 0.7;
      });
      if (weak.length >= WEAK_UNIT_MIN) {
        weakUnits.push({ unit, subject, weak: weak.length, scored: scored.length });
      }
    });
  });
  weakUnits.sort((a, b) => b.weak - a.weak);

  // --- Nothing to say yet -------------------------------------------------
  if (ranked.length === 0) {
    contentEl.classList.add("hidden");
    emptyEl.classList.remove("hidden");
    const mark = icon("chart", "empty-icon", 40);
    if (mark) emptyEl.insertBefore(mark, emptyEl.firstChild);
    return;
  }

  // --- Top stats ----------------------------------------------------------
  const mastered = ranked.filter((r) => r.mastered).length;
  const shaky = ranked.filter((r) => r.percent < 0.7).length;
  const average = ranked.reduce((sum, r) => sum + r.percent, 0) / ranked.length;

  function stat(value, label, iconName) {
    const box = document.createElement("div");
    box.className = "stat";
    const mark = icon(iconName, "stat-icon", 20);
    if (mark) box.appendChild(mark);
    const v = document.createElement("strong");
    v.className = "stat-value";
    v.textContent = value;
    const l = document.createElement("span");
    l.className = "stat-label";
    l.textContent = label;
    box.appendChild(v);
    box.appendChild(l);
    return box;
  }

  statsEl.appendChild(stat(String(ranked.length), "topics attempted", "check"));
  statsEl.appendChild(stat(pct(average), "average score", "chart"));
  statsEl.appendChild(stat(String(mastered), "at 90% or better", "award"));

  // --- The two lists ------------------------------------------------------
  // One topic row: rank badge, name, score bar, percentage.
  function topicRow(entry) {
    const row = document.createElement("a");
    row.className = `topic-row band-${labels.band(entry.percent)}`;
    row.href = entry.href;

    const body = document.createElement("div");
    body.className = "topic-body";

    const title = document.createElement("span");
    title.className = "topic-title";
    title.textContent = entry.name;
    body.appendChild(title);

    const meta = document.createElement("span");
    meta.className = "topic-meta";
    meta.textContent = [entry.subjectName, entry.detail].filter(Boolean).join(" · ");
    body.appendChild(meta);

    const track = document.createElement("span");
    track.className = "topic-bar";
    const fill = document.createElement("span");
    fill.className = "topic-bar-fill";
    fill.style.width = `${Math.round(entry.percent * 100)}%`;
    track.appendChild(fill);
    body.appendChild(track);

    row.appendChild(body);

    const score = document.createElement("span");
    score.className = "topic-score";
    score.textContent = pct(entry.percent);
    row.appendChild(score);

    return row;
  }

  // Two lists of three need six topics to stay disjoint. Below that the
  // lists are narrowed to half the attempted topics each (so 5 attempted
  // shows a top 2 and a bottom 2), and below four attempted they collapse
  // into one honest list -- a topic must never appear as both a strength
  // and a weakness.
  const perList = Math.min(SHOW_PER_LIST, Math.floor(ranked.length / 2));
  const enoughForTwoLists = perList >= 1 && ranked.length >= 4;
  const best = ranked.slice(0, perList);
  const worst = ranked.slice(-perList).reverse();

  if (enoughForTwoLists) {
    best.forEach((e) => strongListEl.appendChild(topicRow(e)));
    worst.forEach((e) => weakListEl.appendChild(topicRow(e)));
  } else {
    strongSectionEl.classList.add("hidden");
    document.getElementById("weak-heading").textContent = "Every topic you've tried";
    ranked.forEach((e) => weakListEl.appendChild(topicRow(e)));
  }

  // Section icons.
  const upMark = icon("trendUp", "section-icon", 20);
  if (upMark) strongSectionEl.querySelector("h2").prepend(upMark);
  const downMark = icon("trendDown", "section-icon", 20);
  if (downMark) weakSectionEl.querySelector("h2").prepend(downMark);

  // --- The study plan -----------------------------------------------------
  // Ordered most-useful-first, capped so it stays a plan rather than a
  // wall. Each entry names the number it came from.
  const plan = [];

  const worstEntry = ranked[ranked.length - 1];
  if (worstEntry.percent < 0.9) {
    plan.push({
      icon: "target",
      text: `Redo ${worstEntry.name} first — it's your lowest at ${pct(worstEntry.percent)}.`,
      href: worstEntry.href,
      cta: "Retake it",
    });
  }

  weakUnits.slice(0, 1).forEach((u) => {
    plan.push({
      icon: "trendDown",
      text: `${u.weak} of the ${u.scored} topics you've tried in ${u.unit.name} are under 70% — that unit is where your misses cluster, not just one topic.`,
      href: `unit.html?unit=${encodeURIComponent(u.unit.id)}`,
      cta: "Open the unit",
    });
  });

  // Questions the student has missed and not since gotten right.
  let stillMissed = 0;
  let missedUnit = null;
  window.AllAPSubjects.list().forEach((subject) => {
    subject.units.forEach((unit) => {
      const n = progress.getUnitMissedIds(unit.id).length;
      stillMissed += n;
      if (!missedUnit || n > missedUnit.n) missedUnit = { unit, n };
    });
  });
  if (missedUnit && missedUnit.n > 0) {
    plan.push({
      icon: "check",
      text: `${missedUnit.n} question${missedUnit.n === 1 ? "" : "s"} in ${missedUnit.unit.name} you've missed and haven't got right since. A whole-unit quiz weights those back in.`,
      href: `quiz.html?unit=${encodeURIComponent(missedUnit.unit.id)}&mode=unit`,
      cta: "Take the unit quiz",
    });
  }

  if (untouched.length > 0) {
    const next = untouched[0];
    const nextInfo = labels.resolve(next.lessonId, "lesson");
    plan.push({
      icon: "book",
      text: `${untouched.length} topic${untouched.length === 1 ? "" : "s"} you haven't tried yet. Untested isn't the same as solid${nextInfo ? ` — ${nextInfo.name} is next up` : ""}.`,
      href: nextInfo ? nextInfo.href : "index.html",
      cta: "Try one",
    });
  }

  if (mastered > 0 && shaky === 0) {
    plan.push({
      icon: "award",
      text: `Nothing is under 70% right now. ${mastered} topic${mastered === 1 ? " is" : "s are"} at 90% or better — those can sit while you spread out.`,
    });
  }

  plan.forEach((step) => {
    const li = document.createElement("li");
    li.className = "plan-step";

    const mark = icon(step.icon, "plan-icon", 20);
    if (mark) li.appendChild(mark);

    const body = document.createElement("div");
    body.className = "plan-body";

    const text = document.createElement("p");
    text.className = "plan-text";
    text.textContent = step.text;
    body.appendChild(text);

    if (step.href) {
      const link = document.createElement("a");
      link.className = "plan-cta";
      link.href = step.href;
      link.textContent = `${step.cta} →`;
      body.appendChild(link);
    }

    li.appendChild(body);
    planListEl.appendChild(li);
  });
})();
