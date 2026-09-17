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
// Depends on the subject data files, js/subjects.js and js/progress.js
// being loaded first.

(function () {
  const unitsListContainer = document.getElementById("units-list");
  const recommendationsContainer = document.getElementById("recommendations");
  const introEl = document.getElementById("intro");
  const listHeadingEl = document.getElementById("list-heading");
  const backLinkEl = document.getElementById("back-link");
  const taglineEl = document.querySelector(".site-tagline");

  // Flat line-art marks, one per subject, keyed by the subject ids in
  // js/subjects.js. Single-color (they inherit the card's currentColor),
  // 24px, no fills -- favicon-level simplicity on purpose, so they stay
  // legible next to the heading rather than competing with it. A subject
  // with no entry here just renders without an icon.
  const SUBJECT_ICONS = {
    // Capitol: finial, dome, entablature, three columns, steps.
    "ap-gov": [
      "M12 2.5V4",
      "M8 10a4 4 0 0 1 8 0",
      "M6 10h12",
      "M8 10v8M12 10v8M16 10v8",
      "M5 18h14",
      "M3 21h18",
    ],
    // Leaf: outline, midrib, stem.
    "ap-bio": [
      "M5 19c0-8 6-14 14-14 0 8-6 14-14 14z",
      "M5 19 19 5",
      "M5 19l-2 2",
    ],
  };

  function iconSvg(subjectId) {
    const paths = SUBJECT_ICONS[subjectId];
    if (!paths) return null;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "card-icon");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.5");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    // Decorative: the card's own text already names the subject.
    svg.setAttribute("aria-hidden", "true");
    // Built with createElementNS rather than innerHTML so the paths land in
    // the SVG namespace in every browser, not just the lenient ones.
    paths.forEach((d) => {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", d);
      svg.appendChild(path);
    });
    return svg;
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

  if (window.APGovRecommendations) {
    window.APGovRecommendations.render(recommendationsContainer);
  }
})();
