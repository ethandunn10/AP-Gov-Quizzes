// js/homepage.js
// Renders the "Units" section on the homepage: one button per entry in
// window.UNITS (from quizzes/units.js, loaded before this script), plus
// any "you might want to review X again" recommendations.

(function () {
  const unitsListContainer = document.getElementById("units-list");
  const recommendationsContainer = document.getElementById("recommendations");

  function renderUnits() {
    const units = window.UNITS || [];

    if (units.length === 0) {
      unitsListContainer.innerHTML = '<p class="empty-state">No units posted yet -- check back soon!</p>';
      return;
    }

    unitsListContainer.innerHTML = "";
    units.forEach((unit) => {
      const link = document.createElement("a");
      link.className = "quiz-card quiz-card-featured";
      link.href = `unit.html?unit=${encodeURIComponent(unit.id)}`;

      const topicEl = document.createElement("span");
      topicEl.className = "quiz-topic";
      topicEl.textContent = unit.name;

      const ctaEl = document.createElement("span");
      ctaEl.className = "quiz-cta";
      ctaEl.textContent = "View lessons →";

      link.appendChild(topicEl);
      link.appendChild(ctaEl);
      unitsListContainer.appendChild(link);
    });
  }

  renderUnits();
  if (window.APGovRecommendations) {
    window.APGovRecommendations.render(recommendationsContainer);
  }
})();
