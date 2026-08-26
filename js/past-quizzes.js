// js/past-quizzes.js
// Renders past-quizzes.html: every quiz EXCEPT the current (newest) one,
// which lives on the homepage instead. Reads window.QUIZ_LIST from
// quizzes/index.js, loaded before this script.

(function () {
  const listContainer = document.getElementById("past-quiz-list");

  // Parse "YYYY-MM-DD" ourselves (instead of `new Date("YYYY-MM-DD")`)
  // so the displayed date can't shift by a day due to timezone handling.
  function formatDate(isoDate) {
    const [year, month, day] = isoDate.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  function renderPastQuizzes() {
    const quizzes = (window.QUIZ_LIST || []).slice();
    quizzes.sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first

    // The newest quiz is "this week's quiz" on the homepage, so it's
    // left out of this archive list.
    const pastQuizzes = quizzes.slice(1);

    if (pastQuizzes.length === 0) {
      listContainer.innerHTML =
        '<p class="empty-state">No past quizzes yet -- once next week\'s quiz goes up, this week\'s will move here.</p>';
      return;
    }

    listContainer.innerHTML = "";
    pastQuizzes.forEach((quiz) => {
      const link = document.createElement("a");
      link.className = "quiz-card";
      link.href = `quiz.html?week=${encodeURIComponent(quiz.id)}`;

      const dateEl = document.createElement("span");
      dateEl.className = "quiz-date";
      dateEl.textContent = formatDate(quiz.date);

      const topicEl = document.createElement("span");
      topicEl.className = "quiz-topic";
      topicEl.textContent = quiz.topic;

      const ctaEl = document.createElement("span");
      ctaEl.className = "quiz-cta";
      ctaEl.textContent = "Start quiz →";

      link.appendChild(dateEl);
      link.appendChild(topicEl);
      link.appendChild(ctaEl);
      listContainer.appendChild(link);
    });
  }

  renderPastQuizzes();
})();
