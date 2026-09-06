// js/recommendations.js
// Small shared widget: "you might want to retake X again -- that's the one
// you scored lowest on." Used on both index.html (home page) and
// unit.html, so it lives in one place instead of being duplicated.
// Recommends only the single worst-scoring flagged quiz overall (lesson or
// whole-unit) -- never a list of every flagged quiz. Reads scores from
// js/progress.js and looks up display names from quizzes/index.js /
// quizzes/units.js.
//
// Depends on quizzes/index.js, quizzes/units.js, js/tracking.js, and
// js/progress.js being loaded first.

(function () {
  // `scope` (optional) restricts the recommendation to quizzes relevant to
  // one unit -- e.g. the unit page only wants its own lessons and its own
  // whole-unit quiz considered, not other units' scores.
  //   { lessonIds: [...], unitId: "unit-1" }
  function render(containerEl, scope) {
    const worst = window.APGovProgress.getWorstFlagged(scope);
    if (!worst) {
      containerEl.innerHTML = "";
      containerEl.classList.add("hidden");
      return;
    }

    let href;
    let label;
    if (worst.type === "lesson") {
      const quizInfo = (window.QUIZ_LIST || []).find((q) => q.id === worst.id);
      if (!quizInfo) {
        containerEl.innerHTML = "";
        containerEl.classList.add("hidden");
        return;
      }
      href = `quiz.html?week=${encodeURIComponent(worst.id)}&mode=lesson`;
      label = quizInfo.topic.split(":")[0];
    } else {
      const unitInfo = (window.UNITS || []).find((u) => u.id === worst.id);
      if (!unitInfo) {
        containerEl.innerHTML = "";
        containerEl.classList.add("hidden");
        return;
      }
      href = `quiz.html?unit=${encodeURIComponent(worst.id)}&mode=unit`;
      label = `the ${unitInfo.name} quiz`;
    }

    containerEl.classList.remove("hidden");
    containerEl.innerHTML = "";

    const note = document.createElement("div");
    note.className = "recommendation-note";

    const link = document.createElement("a");
    link.href = href;
    link.textContent = `You might want to retake ${label} again -- that's the one you scored lowest on.`;

    note.appendChild(link);
    containerEl.appendChild(note);
  }

  window.APGovRecommendations = { render };
})();
