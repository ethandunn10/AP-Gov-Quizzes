// js/quiz.js
// Drives quiz.html for every week -- this file never changes when a new
// week's quiz is added. It:
//   1. Reads ?week=<id> from the URL.
//   2. Looks up that id in window.QUIZ_LIST (from quizzes/index.js) to
//      get the topic name.
//   3. Dynamically loads quizzes/<id>.js, which defines window.QUIZ_QUESTIONS.
//   4. Shuffles the questions and each question's options.
//   5. Walks the student through one question at a time, then shows results.

(function () {
  // ---- Element references -------------------------------------------
  const loadingEl = document.getElementById("loading");
  const errorEl = document.getElementById("error-state");
  const quizAppEl = document.getElementById("quiz-app");
  const resultsEl = document.getElementById("results");

  const topicHeadingEl = document.getElementById("quiz-topic-heading");
  const progressTextEl = document.getElementById("progress-text");
  const questionTextEl = document.getElementById("question-text");
  const optionsListEl = document.getElementById("options-list");
  const feedbackBoxEl = document.getElementById("feedback-box");
  const feedbackTitleEl = document.getElementById("feedback-title");
  const feedbackExplanationEl = document.getElementById("feedback-explanation");
  const nextButtonEl = document.getElementById("next-button");

  const scorePercentEl = document.getElementById("score-percent");
  const scoreFractionEl = document.getElementById("score-fraction");
  const scoreRingFillEl = document.getElementById("score-ring-fill");
  const missedSectionEl = document.getElementById("missed-section");
  const missedItemsEl = document.getElementById("missed-items");
  const retryButtonEl = document.getElementById("retry-button");

  // Circumference of the score ring circle (2 * PI * r), matching r="52"
  // on the <circle> elements in quiz.html.
  const SCORE_RING_CIRCUMFERENCE = 2 * Math.PI * 52;
  scoreRingFillEl.style.strokeDasharray = String(SCORE_RING_CIRCUMFERENCE);

  // ---- Quiz state -------------------------------------------------------
  // `questions` holds the shuffled question set for the current attempt.
  // Each entry looks like:
  //   { question, options: [...4 shuffled strings], correctIndex, explanation }
  let questions = [];
  let currentIndex = 0;
  let score = 0;
  let missed = []; // { question, yourAnswer, correctAnswer, explanation }
  let answered = false; // true once the student has picked an option this question

  // ---- Helpers ------------------------------------------------------------
  function showOnly(elementToShow) {
    [loadingEl, errorEl, quizAppEl, resultsEl].forEach((el) => {
      el.classList.toggle("hidden", el !== elementToShow);
    });
  }

  // Fisher-Yates shuffle, returns a new array (doesn't mutate the input).
  function shuffle(array) {
    const result = array.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  // Shuffles one question's options and works out where the correct
  // answer ended up.
  function shuffleQuestion(originalQuestion) {
    const optionObjects = originalQuestion.options.map((text, i) => ({
      text,
      isCorrect: i === originalQuestion.correctIndex,
    }));
    const shuffledOptions = shuffle(optionObjects);

    return {
      question: originalQuestion.question,
      explanation: originalQuestion.explanation,
      options: shuffledOptions.map((o) => o.text),
      correctIndex: shuffledOptions.findIndex((o) => o.isCorrect),
    };
  }

  // ---- Rendering ------------------------------------------------------
  function renderQuestion() {
    answered = false;
    const q = questions[currentIndex];

    progressTextEl.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
    questionTextEl.textContent = q.question;

    feedbackBoxEl.classList.add("hidden");
    nextButtonEl.classList.add("hidden");

    optionsListEl.innerHTML = "";
    q.options.forEach((optionText, i) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-button";
      button.textContent = optionText;
      button.addEventListener("click", () => selectAnswer(i));
      li.appendChild(button);
      optionsListEl.appendChild(li);
    });
  }

  function selectAnswer(chosenIndex) {
    if (answered) return; // ignore extra clicks after the first answer
    answered = true;

    const q = questions[currentIndex];
    const isCorrect = chosenIndex === q.correctIndex;
    const optionButtons = optionsListEl.querySelectorAll(".option-button");

    optionButtons.forEach((button, i) => {
      button.disabled = true;
      if (i === q.correctIndex) {
        button.classList.add("correct");
      } else if (i === chosenIndex) {
        button.classList.add("incorrect");
      }
    });

    feedbackBoxEl.classList.remove("hidden");
    feedbackBoxEl.classList.toggle("correct", isCorrect);
    feedbackBoxEl.classList.toggle("incorrect", !isCorrect);
    feedbackTitleEl.textContent = isCorrect ? "Correct!" : "Incorrect.";
    feedbackExplanationEl.textContent = q.explanation;

    if (isCorrect) {
      score++;
    } else {
      missed.push({
        question: q.question,
        yourAnswer: q.options[chosenIndex],
        correctAnswer: q.options[q.correctIndex],
        explanation: q.explanation,
      });
    }

    nextButtonEl.textContent = currentIndex === questions.length - 1 ? "See results" : "Next question";
    nextButtonEl.classList.remove("hidden");
  }

  function goToNextQuestion() {
    currentIndex++;
    if (currentIndex >= questions.length) {
      renderResults();
    } else {
      renderQuestion();
    }
  }

  function renderResults() {
    const percent = Math.round((score / questions.length) * 100);
    scorePercentEl.textContent = `${percent}%`;
    scoreFractionEl.textContent = `${score} out of ${questions.length} correct`;
    scoreRingFillEl.style.strokeDashoffset = String(
      SCORE_RING_CIRCUMFERENCE * (1 - percent / 100)
    );

    if (missed.length === 0) {
      missedSectionEl.classList.add("hidden");
    } else {
      missedSectionEl.classList.remove("hidden");
      missedItemsEl.innerHTML = "";
      missed.forEach((item) => {
        const wrapper = document.createElement("div");
        wrapper.className = "missed-item";

        const questionEl = document.createElement("p");
        questionEl.className = "missed-question";
        questionEl.textContent = item.question;

        const yourAnswerEl = document.createElement("p");
        yourAnswerEl.className = "missed-answer-line your-answer";
        yourAnswerEl.textContent = `Your answer: ${item.yourAnswer}`;

        const correctAnswerEl = document.createElement("p");
        correctAnswerEl.className = "missed-answer-line correct-answer";
        correctAnswerEl.textContent = `Correct answer: ${item.correctAnswer}`;

        const explanationEl = document.createElement("p");
        explanationEl.className = "missed-explanation";
        explanationEl.textContent = item.explanation;

        wrapper.appendChild(questionEl);
        wrapper.appendChild(yourAnswerEl);
        wrapper.appendChild(correctAnswerEl);
        wrapper.appendChild(explanationEl);
        missedItemsEl.appendChild(wrapper);
      });
    }

    showOnly(resultsEl);
  }

  // ---- Starting / restarting the quiz ------------------------------------
  function startQuiz(rawQuestions) {
    questions = shuffle(rawQuestions).map(shuffleQuestion);
    currentIndex = 0;
    score = 0;
    missed = [];
    showOnly(quizAppEl);
    renderQuestion();
  }

  // ---- Boot: figure out which week to load, then load it -----------------
  function init() {
    const params = new URLSearchParams(window.location.search);
    const weekId = params.get("week");
    const quizInfo = (window.QUIZ_LIST || []).find((q) => q.id === weekId);

    if (!weekId || !quizInfo) {
      showOnly(errorEl);
      return;
    }

    topicHeadingEl.textContent = quizInfo.topic;

    // Load this week's question data as a plain <script> tag (rather than
    // fetch()), so the site also works when opened directly from disk
    // (file://) and not just when served over http.
    const script = document.createElement("script");
    script.src = `quizzes/${weekId}.js`;
    script.onload = () => {
      if (!window.QUIZ_QUESTIONS || window.QUIZ_QUESTIONS.length === 0) {
        showOnly(errorEl);
        return;
      }
      startQuiz(window.QUIZ_QUESTIONS);
    };
    script.onerror = () => showOnly(errorEl);
    document.body.appendChild(script);
  }

  nextButtonEl.addEventListener("click", goToNextQuestion);
  retryButtonEl.addEventListener("click", () => startQuiz(window.QUIZ_QUESTIONS));

  init();
})();
