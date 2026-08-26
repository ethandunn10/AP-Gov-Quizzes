// js/homepage.js
// Renders "this week's quiz" -- the single newest entry in
// window.QUIZ_LIST (from quizzes/index.js, loaded before this script) --
// as a featured card on the homepage. Older quizzes live on
// past-quizzes.html instead (see js/past-quizzes.js).

(function () {
  const currentQuizContainer = document.getElementById("current-quiz");

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

  function renderCurrentQuiz() {
    const quizzes = (window.QUIZ_LIST || []).slice();

    if (quizzes.length === 0) {
      currentQuizContainer.innerHTML = '<p class="empty-state">No quiz posted yet -- check back soon!</p>';
      return;
    }

    // Newest first, regardless of the order they're listed in the data file.
    quizzes.sort((a, b) => (a.date < b.date ? 1 : -1));
    const current = quizzes[0];

    const link = document.createElement("a");
    link.className = "quiz-card quiz-card-featured";
    link.href = `quiz.html?week=${encodeURIComponent(current.id)}`;

    const dateEl = document.createElement("span");
    dateEl.className = "quiz-date";
    dateEl.textContent = formatDate(current.date);

    const topicEl = document.createElement("span");
    topicEl.className = "quiz-topic";
    topicEl.textContent = current.topic;

    const ctaEl = document.createElement("span");
    ctaEl.className = "quiz-cta";
    ctaEl.textContent = "Start this week's quiz →";

    link.appendChild(dateEl);
    link.appendChild(topicEl);
    link.appendChild(ctaEl);

    currentQuizContainer.innerHTML = "";
    currentQuizContainer.appendChild(link);
  }

  renderCurrentQuiz();
})();
