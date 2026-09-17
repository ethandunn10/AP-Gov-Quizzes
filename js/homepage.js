// js/homepage.js
// Renders index.html in one of two states, based on ?subject=<id>:
//
//   no ?subject=      the subject picker -- one card per subject
//                     registered in js/subjects.js (AP Gov, AP Bio).
//   ?subject=ap-bio   that subject's units -- one card per entry in the
//                     subject's units list, linking to unit.html.
//
// Adding a third subject needs no changes here: js/subjects.js builds the
// list, this file just renders whatever is in it.
//
// Depends on the subject data files, js/subjects.js, js/progress.js and
// js/icons.js being loaded first.

(function () {
  const unitsListContainer = document.getElementById("units-list");
  const introEl = document.getElementById("intro");
  const listHeadingEl = document.getElementById("list-heading");
  const backLinkEl = document.getElementById("back-link");
  const taglineEl = document.querySelector(".site-tagline");

  // Subject cards carry that subject's mark from js/icons.js, keyed by the
  // subject ids in js/subjects.js. A subject with no icon there simply
  // renders without one.
  function iconSvg(subjectId) {
    if (!window.AllAPIcons) return null;
    return window.AllAPIcons.svg(subjectId, "card-icon", 24);
  }

  // One card, used for both subjects and units. `subjectId` is optional --
  // pass it to get that subject's icon, omit it (unit cards) for the plain
  // text-only card the existing .quiz-card styles already cover.
  function card(href, title, cta, subjectId) {
    const link = document.createElement("a");
    link.className = "quiz-card quiz-card-featured";
    link.href = href;

    const topicEl = document.createElement("span");
    topicEl.className = "quiz-topic";
    topicEl.textContent = title;

    const ctaEl = document.createElement("span");
    ctaEl.className = "quiz-cta";
    ctaEl.textContent = cta;

    const icon = subjectId ? iconSvg(subjectId) : null;
    if (icon) {
      // Icon + text sit side by side, so the text needs its own column.
      link.classList.add("has-icon");
      const body = document.createElement("span");
      body.className = "card-body";
      body.appendChild(topicEl);
      body.appendChild(ctaEl);
      link.appendChild(icon);
      link.appendChild(body);
    } else {
      link.appendChild(topicEl);
      link.appendChild(ctaEl);
    }
    return link;
  }

  function renderSubjectPicker(subjects) {
    if (taglineEl) taglineEl.textContent = "AP Practice Quizzes";
    if (introEl) introEl.textContent = "Pick a subject to start quizzing.";
    if (listHeadingEl) listHeadingEl.textContent = "Subjects";
    if (backLinkEl) backLinkEl.classList.add("hidden");

    unitsListContainer.innerHTML = "";
    subjects.forEach((subject) => {
      const unitCount = subject.units.length;
      const lessonCount = subject.units.reduce((n, u) => n + u.lessons.length, 0);
      unitsListContainer.appendChild(
        card(
          `index.html?subject=${encodeURIComponent(subject.id)}`,
          subject.name,
          `${unitCount} units · ${lessonCount} topics →`,
          subject.id
        )
      );
    });
  }

  function renderUnits(subject) {
    if (taglineEl) taglineEl.textContent = subject.tagline;
    if (introEl) introEl.textContent = `${subject.name} — pick a unit below, then a lesson.`;
    if (listHeadingEl) listHeadingEl.textContent = "Units";
    if (backLinkEl) {
      backLinkEl.classList.remove("hidden");
      backLinkEl.href = "index.html";
      backLinkEl.textContent = "← All subjects";
    }

    unitsListContainer.innerHTML = "";
    if (subject.units.length === 0) {
      unitsListContainer.innerHTML =
        '<p class="empty-state">No units posted yet -- check back soon!</p>';
      return;
    }

    subject.units.forEach((unit) => {
      unitsListContainer.appendChild(
        card(`unit.html?unit=${encodeURIComponent(unit.id)}`, unit.name, "View lessons →")
      );
    });
  }

  const subjects = window.AllAPSubjects.list();
  const params = new URLSearchParams(window.location.search);
  const subject = window.AllAPSubjects.get(params.get("subject"));

  if (subjects.length === 0) {
    unitsListContainer.innerHTML =
      '<p class="empty-state">No subjects posted yet -- check back soon!</p>';
  } else if (subject) {
    renderUnits(subject);
  } else {
    // No ?subject= (or an id we don't recognise) -- show the picker.
    renderSubjectPicker(subjects);
  }
})();
