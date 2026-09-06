// js/unit.js
// Drives unit.html for every unit -- this file never changes when a new
// unit or lesson is added. Reads ?unit=<id> from the URL, looks it up in
// window.UNITS (quizzes/units.js), and lists its lessons (looking up each
// one's topic name in window.QUIZ_LIST from quizzes/index.js) plus a
// "whole unit" quiz option.

(function () {
  const loadingEl = document.getElementById("loading");
  const errorEl = document.getElementById("error-state");
  const contentEl = document.getElementById("unit-content");
  const headingEl = document.getElementById("unit-heading");
  const recommendationsEl = document.getElementById("recommendations");
  const lessonListEl = document.getElementById("lesson-list");
  const wholeUnitButtonEl = document.getElementById("whole-unit-button");

  function init() {
    const params = new URLSearchParams(window.location.search);
    const unitId = params.get("unit");
    const unitInfo = (window.UNITS || []).find((u) => u.id === unitId);

    if (!unitId || !unitInfo) {
      loadingEl.classList.add("hidden");
      errorEl.classList.remove("hidden");
      return;
    }

    headingEl.textContent = unitInfo.name;

    lessonListEl.innerHTML = "";
    unitInfo.lessons.forEach((lessonId) => {
      const quizInfo = (window.QUIZ_LIST || []).find((q) => q.id === lessonId);
      if (!quizInfo) return; // lesson id not yet registered in quizzes/index.js

      const link = document.createElement("a");
      link.className = "quiz-card";
      link.href = `quiz.html?week=${encodeURIComponent(lessonId)}&mode=lesson`;

      const topicEl = document.createElement("span");
      topicEl.className = "quiz-topic";
      topicEl.textContent = quizInfo.topic;

      const ctaEl = document.createElement("span");
      ctaEl.className = "quiz-cta";
      ctaEl.textContent = "Take a 10-question quiz →";

      link.appendChild(topicEl);
      link.appendChild(ctaEl);
      lessonListEl.appendChild(link);
    });

    wholeUnitButtonEl.href = `quiz.html?unit=${encodeURIComponent(unitId)}&mode=unit`;

    if (window.APGovRecommendations) {
      try {
        window.APGovRecommendations.render(recommendationsEl, { lessonIds: unitInfo.lessons, unitId: unitInfo.id });
      } catch (err) {
        console.error("Rendering recommendations failed:", err);
      }
    }

    loadingEl.classList.add("hidden");
    contentEl.classList.remove("hidden");
  }

  init();
})();
