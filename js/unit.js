// js/unit.js
// Drives unit.html for every unit of every subject -- this file never
// changes when a new unit, lesson, or subject is added. Reads ?unit=<id>
// from the URL and looks it up through window.AllAPSubjects
// (js/subjects.js), which searches every registered subject, then lists
// that unit's lessons (looking up each one's topic name the same way)
// plus a "whole unit" quiz option. The unit's own subject is used for the
// "back to <subject>" link and the header tagline.

(function () {
  const loadingEl = document.getElementById("loading");
  const errorEl = document.getElementById("error-state");
  const contentEl = document.getElementById("unit-content");
  const headingEl = document.getElementById("unit-heading");
  const lessonListEl = document.getElementById("lesson-list");
  const wholeUnitButtonEl = document.getElementById("whole-unit-button");

  function init() {
    const params = new URLSearchParams(window.location.search);
    const unitId = params.get("unit");
    const found = unitId ? window.AllAPSubjects.findUnit(unitId) : null;

    if (!found) {
      loadingEl.classList.add("hidden");
      errorEl.classList.remove("hidden");
      return;
    }

    const unitInfo = found.unit;
    const subject = found.subject;

    headingEl.textContent = `${subject.name} — ${unitInfo.name}`;

    // Header tagline + "Home" link follow the unit's subject, so a
    // student browsing AP Bio never gets sent back to the AP Gov list.
    const taglineEl = document.querySelector(".site-tagline");
    if (taglineEl) taglineEl.textContent = subject.tagline;
    const homeLinkEl = document.getElementById("home-link");
    if (homeLinkEl) {
      homeLinkEl.href = `index.html?subject=${encodeURIComponent(subject.id)}`;
      homeLinkEl.textContent = `← All ${subject.name} units`;
    }

    lessonListEl.innerHTML = "";
    unitInfo.lessons.forEach((lessonId) => {
      const foundLesson = window.AllAPSubjects.findLesson(lessonId);
      if (!foundLesson) return; // lesson id not yet registered in its subject's index.js
      const quizInfo = foundLesson.lesson;

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

    loadingEl.classList.add("hidden");
    contentEl.classList.remove("hidden");
  }

  init();
})();
