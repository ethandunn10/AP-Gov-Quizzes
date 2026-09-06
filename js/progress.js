// js/progress.js
// Local, anonymous per-browser progress tracking -- no login, no backend
// schema. Keyed by the same anonymous id js/tracking.js already generates
// (so it's the one stable identifier the whole site uses), and stored in
// localStorage as a single JSON blob per anonymous id:
//
//   apgov_progress_<anonId> = {
//     lessonScores: { "week-1": { percent: 65, flagged: true } },
//     unitScores:   { "unit-1": { percent: 65, flagged: true } },
//     unitMissed:   { "unit-1": ["week-2-q4", "week-3-q9"] },
//   }
//
// lessonScores/unitScores hold only the MOST RECENT attempt's result per
// lesson/unit -- if a student retakes one and passes, the flag clears.
// Only the single worst-scoring flagged quiz overall is ever recommended
// (see getWorstFlagged) -- not every flagged one.
// unitMissed holds question ids currently considered "still shaky" on
// whole-unit quizzes; a right answer later removes a question from this
// set, a wrong answer (re-)adds it.
//
// Depends on js/tracking.js being loaded first (for getAnonId()).

(function () {
  const LESSON_FLAG_THRESHOLD = 0.7; // below this percent, flag the lesson/unit

  function storageKey() {
    const anonId = window.APGovTracking.getAnonId();
    return `apgov_progress_${anonId}`;
  }

  function load() {
    try {
      const raw = localStorage.getItem(storageKey());
      const parsed = raw ? JSON.parse(raw) : {};
      return {
        lessonScores: parsed.lessonScores || {},
        unitScores: parsed.unitScores || {},
        unitMissed: parsed.unitMissed || {},
      };
    } catch (err) {
      console.error("Reading progress data failed:", err);
      return { lessonScores: {}, unitScores: {}, unitMissed: {} };
    }
  }

  function save(data) {
    try {
      localStorage.setItem(storageKey(), JSON.stringify(data));
    } catch (err) {
      console.error("Saving progress data failed:", err);
    }
  }

  // Call after any single-lesson quiz attempt (legacy full-length or the
  // new 10-question lesson quiz) to update that lesson's flag status.
  function recordLessonScore(lessonId, score, total) {
    if (!lessonId || total === 0) return;
    const data = load();
    const percent = score / total;
    data.lessonScores[lessonId] = {
      percent,
      flagged: percent < LESSON_FLAG_THRESHOLD,
    };
    save(data);
  }

  // Call after a whole-unit quiz attempt to update that unit's flag status.
  function recordUnitScore(unitId, score, total) {
    if (!unitId || total === 0) return;
    const data = load();
    const percent = score / total;
    data.unitScores[unitId] = {
      percent,
      flagged: percent < LESSON_FLAG_THRESHOLD,
    };
    save(data);
  }

  // Returns the single flagged lesson or whole-unit quiz the student
  // scored lowest on, or null if nothing is currently flagged.
  //   { type: "lesson", id: "week-1", percent: 0.5 }
  //   { type: "unit", id: "unit-1", percent: 0.6 }
  // `scope` (optional) restricts candidates -- used by the unit page so it
  // only recommends things relevant to that unit:
  //   { lessonIds: [...], unitId: "unit-1" }
  function getWorstFlagged(scope) {
    const data = load();
    const candidates = [];

    Object.keys(data.lessonScores).forEach((lessonId) => {
      const entry = data.lessonScores[lessonId];
      if (!entry.flagged) return;
      if (scope && scope.lessonIds && !scope.lessonIds.includes(lessonId)) return;
      candidates.push({ type: "lesson", id: lessonId, percent: entry.percent });
    });

    Object.keys(data.unitScores).forEach((unitId) => {
      const entry = data.unitScores[unitId];
      if (!entry.flagged) return;
      if (scope && scope.unitId && scope.unitId !== unitId) return;
      candidates.push({ type: "unit", id: unitId, percent: entry.percent });
    });

    if (candidates.length === 0) return null;
    candidates.sort((a, b) => a.percent - b.percent);
    return candidates[0];
  }

  // Call after a whole-unit quiz attempt. `results` is
  // [{ id, correct }, ...] for every question in that attempt.
  function recordUnitAttempt(unitId, results) {
    if (!unitId) return;
    const data = load();
    const missed = new Set(data.unitMissed[unitId] || []);
    results.forEach(({ id, correct }) => {
      if (correct) {
        missed.delete(id);
      } else {
        missed.add(id);
      }
    });
    data.unitMissed[unitId] = Array.from(missed);
    save(data);
  }

  // Question ids currently considered still-missed for this unit.
  function getUnitMissedIds(unitId) {
    const data = load();
    return data.unitMissed[unitId] || [];
  }

  window.APGovProgress = {
    recordLessonScore,
    recordUnitScore,
    getWorstFlagged,
    recordUnitAttempt,
    getUnitMissedIds,
  };
})();
