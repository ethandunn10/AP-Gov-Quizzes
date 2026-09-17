// js/history.js
// Drives history.html: the last N finished quizzes, newest first, each
// with its score, a proportional bar, and when it was taken.
//
// Reads the attempt log added to js/progress.js. That log only started
// recording when it shipped, so a student with plenty of older progress
// can still land here with an empty list -- the empty state says so
// rather than implying they've never taken a quiz.
//
// Depends on the subject data files, js/subjects.js, js/tracking.js,
// js/progress.js, js/icons.js and js/attempt-labels.js.

(function () {
  const HISTORY_LIMIT = 10;

  const listEl = document.getElementById("history-list");
  const emptyEl = document.getElementById("history-empty");
  const summaryEl = document.getElementById("history-summary");
  if (!listEl) return;

  const labels = window.AllAPAttemptLabels;

  function icon(name, className, size) {
    return window.AllAPIcons ? window.AllAPIcons.svg(name, className, size) : null;
  }

  // One attempt: icon, name + when, score, and a bar sized to the score.
  function row(attempt) {
    const info = labels.resolve(attempt.id, attempt.type);
    if (!info) return null; // lesson/unit no longer in any registry

    const percent = Math.round(attempt.percent * 100);
    const bandName = labels.band(attempt.percent);

    const item = document.createElement("a");
    item.className = `history-row band-${bandName}`;
    item.href = info.href;

    const mark = icon(info.subjectId, "history-icon", 20);
    if (mark) item.appendChild(mark);

    const body = document.createElement("div");
    body.className = "history-body";

    const title = document.createElement("span");
    title.className = "history-title";
    title.textContent = info.name;
    body.appendChild(title);

    const meta = document.createElement("span");
    meta.className = "history-meta";
    // e.g. "AP Government · Topic 1.3 · Yesterday"
    meta.textContent = [info.subjectName, info.detail, labels.relativeDay(attempt.at)]
      .filter(Boolean)
      .join(" · ");
    body.appendChild(meta);

    // The bar is the visual the number can't give you: ten rows of these
    // make a shape you can scan without reading a single percentage.
    const track = document.createElement("span");
    track.className = "history-bar";
    const fill = document.createElement("span");
    fill.className = "history-bar-fill";
    fill.style.width = `${percent}%`;
    track.appendChild(fill);
    body.appendChild(track);

    item.appendChild(body);

    const score = document.createElement("span");
    score.className = "history-score";
    const pct = document.createElement("strong");
    pct.textContent = `${percent}%`;
    const frac = document.createElement("small");
    frac.textContent = `${attempt.score}/${attempt.total}`;
    score.appendChild(pct);
    score.appendChild(frac);
    item.appendChild(score);

    return item;
  }

  function render() {
    const attempts = window.APGovProgress.getRecentAttempts(HISTORY_LIMIT);
    const rows = attempts.map(row).filter(Boolean);

    if (rows.length === 0) {
      emptyEl.classList.remove("hidden");
      const mark = icon("clock", "empty-icon", 40);
      if (mark) emptyEl.insertBefore(mark, emptyEl.firstChild);
      return;
    }

    rows.forEach((r) => listEl.appendChild(r));

    // A one-line read on the run of quizzes shown, so the page opens with
    // a fact rather than just a list.
    const shown = attempts.slice(0, rows.length);
    const average =
      shown.reduce((sum, a) => sum + a.percent, 0) / shown.length;
    summaryEl.classList.remove("hidden");
    summaryEl.textContent =
      shown.length === 1
        ? "Your most recent quiz."
        : `Last ${shown.length} quizzes — ${Math.round(average * 100)}% average.`;
  }

  render();
})();
