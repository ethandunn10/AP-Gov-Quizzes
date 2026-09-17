// js/quiz.js
// Drives quiz.html for every lesson and unit -- this file never changes
// when a new week's quiz or unit is added. Three URL shapes it handles:
//   ?week=<id>                 legacy full-length quiz, every question in
//                               that lesson (unchanged original behavior --
//                               still reachable by a direct link)
//   ?week=<id>&mode=lesson     10 random questions from just that lesson
//   ?unit=<id>&mode=unit       10 questions pooled from every lesson in
//                               that unit, weighted toward previously
//                               missed questions (see js/progress.js)
//
// In every case it:
//   1. Reads the URL params above.
//   2. Looks up topic/unit info via window.AllAPSubjects (js/subjects.js),
//      which covers every subject's registry -- AP Gov's quizzes/index.js
//      + quizzes/units.js and AP Bio's quizzes-bio/index.js +
//      quizzes-bio/units.js -- so a lesson or unit id alone is enough to
//      identify its subject.
//   3. Dynamically loads that lesson's data file (the path comes from the
//      registry, e.g. quizzes/topic-1-1.js or quizzes-bio/topic-1-1.js),
//      which defines window.QUIZ_QUESTIONS.
//   4. Shuffles the questions and each question's options.
//   5. Walks the student through one question at a time, then shows
//      results and records progress (js/progress.js) + usage tracking
//      (js/tracking.js).

(function () {
  const LESSON_QUIZ_LENGTH = 10;
  const UNIT_QUIZ_LENGTH = 10;
  const UNIT_REVIEW_SLOTS = 5; // of UNIT_QUIZ_LENGTH, at most this many are previously-missed questions

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
  //   { id, question, options: [...4 shuffled strings], correctIndex, explanation }
  let questions = [];
  let currentIndex = 0;
  let score = 0;
  let missed = []; // { question, yourAnswer, correctAnswer, explanation }
  let attemptResults = []; // { id, correct } for every question this attempt
  let answered = false; // true once the student has picked an option this question

  // Set once in init(): "legacy" (full lesson, no cap), "lesson" (10Q,
  // single lesson), or "unit" (10Q, pooled across a unit's lessons).
  let mode = "legacy";
  let currentWeekId = null; // set for "legacy" and "lesson" modes
  let currentUnitId = null; // set for "unit" mode
  let rawPool = []; // full question pool to draw this attempt's set from

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
      id: originalQuestion.id,
      question: originalQuestion.question,
      explanation: originalQuestion.explanation,
      options: shuffledOptions.map((o) => o.text),
      correctIndex: shuffledOptions.findIndex((o) => o.isCorrect),
    };
  }

  // Picks this attempt's question set out of rawPool, based on `mode`.
  // Re-run on every retake so lesson/unit quizzes draw a fresh set each
  // time, not just a fresh shuffle of a fixed set.
  function selectAttemptQuestions() {
    if (mode === "lesson") {
      return shuffle(rawPool).slice(0, Math.min(LESSON_QUIZ_LENGTH, rawPool.length));
    }

    if (mode === "unit") {
      const missedIds = new Set(window.APGovProgress.getUnitMissedIds(currentUnitId));
      const missedPool = rawPool.filter((q) => missedIds.has(q.id));
      const reviewCount = Math.min(missedPool.length, UNIT_REVIEW_SLOTS);
      const reviewPicks = shuffle(missedPool).slice(0, reviewCount);

      const reviewPickIds = new Set(reviewPicks.map((q) => q.id));
      const remainingPool = rawPool.filter((q) => !reviewPickIds.has(q.id));
      const freshCount = Math.min(UNIT_QUIZ_LENGTH - reviewPicks.length, remainingPool.length);
      const freshPicks = shuffle(remainingPool).slice(0, freshCount);

      return shuffle(reviewPicks.concat(freshPicks));
    }

    // "legacy": every question in the lesson, unchanged original behavior.
    return rawPool;
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

    attemptResults.push({ id: q.id, correct: isCorrect });

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

    // Log this completed attempt anonymously (no login) so we can count
    // real distinct users later, not just raw quiz-attempt clicks.
    if (window.APGovTracking) {
      window.APGovTracking.logAttempt(currentWeekId || currentUnitId, score, questions.length);
    }

    // Score history (per lesson, and per whole-unit quiz) drives the "you
    // might want to retake X again" guidance on insights.html -- only the single
    // lowest-scoring quiz is ever recommended. Per-question missed
    // tracking (unit mode only) separately drives which questions get
    // mixed back into future whole-unit quizzes.
    if (window.APGovProgress) {
      if (mode === "unit") {
        window.APGovProgress.recordUnitAttempt(currentUnitId, attemptResults);
        window.APGovProgress.recordUnitScore(currentUnitId, score, questions.length);
      } else {
        window.APGovProgress.recordLessonScore(currentWeekId, score, questions.length);
      }
    }

    showOnly(resultsEl);
  }

  // ---- Starting / restarting the quiz ------------------------------------
  function startQuiz() {
    questions = shuffle(selectAttemptQuestions()).map(shuffleQuestion);
    currentIndex = 0;
    score = 0;
    missed = [];
    attemptResults = [];
    showOnly(quizAppEl);
    renderQuestion();
  }

  // Loads a lesson's data file and returns its question array. The path
  // comes from js/subjects.js, so this works for any subject's folder
  // (quizzes/ for AP Gov, quizzes-bio/ for AP Bio). Uses a plain <script>
  // tag (rather than fetch()) so the site also works when opened directly
  // from disk (file://), not just when served over http.
  function loadLessonQuestions(lessonId) {
    return new Promise((resolve, reject) => {
      const src = window.AllAPSubjects.lessonFile(lessonId);
      if (!src) {
        reject(new Error(`Unknown lesson id: ${lessonId}`));
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        const loaded = window.QUIZ_QUESTIONS || [];
        resolve(loaded.slice()); // copy now -- the next script overwrites window.QUIZ_QUESTIONS
      };
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  // Points the page chrome at whichever subject this quiz belongs to, so a
  // student taking an AP Bio quiz isn't sent back to the AP Gov list.
  function applySubject(subject) {
    const taglineEl = document.querySelector(".site-tagline");
    if (taglineEl) taglineEl.textContent = subject.tagline;
    document.querySelectorAll("a.subject-home-link").forEach((el) => {
      el.href = `index.html?subject=${encodeURIComponent(subject.id)}`;
    });
  }

  // ---- Boot: figure out what to load, then load it -----------------------
  async function init() {
    const params = new URLSearchParams(window.location.search);
    const weekId = params.get("week");
    const unitId = params.get("unit");
    mode = params.get("mode") === "lesson" || params.get("mode") === "unit" ? params.get("mode") : "legacy";

    try {
      if (mode === "unit") {
        const foundUnit = window.AllAPSubjects.findUnit(unitId);
        if (!foundUnit) {
          showOnly(errorEl);
          return;
        }
        const unitInfo = foundUnit.unit;
        // Both subjects have a "Unit 1", so name the subject in the heading.
        applySubject(foundUnit.subject);
        currentUnitId = unitId;
        topicHeadingEl.textContent = `${foundUnit.subject.name} — ${unitInfo.name}: Whole Unit Quiz`;

        const pools = [];
        for (const lessonId of unitInfo.lessons) {
          pools.push(await loadLessonQuestions(lessonId));
        }
        rawPool = pools.flat();
      } else {
        const foundLesson = weekId ? window.AllAPSubjects.findLesson(weekId) : null;
        if (!foundLesson) {
          showOnly(errorEl);
          return;
        }
        const quizInfo = foundLesson.lesson;
        // Both subjects have a "Topic 1.1", so name the subject here too.
        applySubject(foundLesson.subject);
        currentWeekId = weekId;
        topicHeadingEl.textContent = `${foundLesson.subject.name} — ${quizInfo.topic}`;
        rawPool = await loadLessonQuestions(weekId);
      }

      if (rawPool.length === 0) {
        showOnly(errorEl);
        return;
      }
      startQuiz();
    } catch (err) {
      showOnly(errorEl);
    }
  }

  nextButtonEl.addEventListener("click", goToNextQuestion);
  retryButtonEl.addEventListener("click", startQuiz);

  init();
})();
