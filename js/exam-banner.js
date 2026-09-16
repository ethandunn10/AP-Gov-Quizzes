// js/exam-banner.js
// The countdown + weak-spot banner at the top of index.html:
//
//   "14 days until your AP Government exam (May 4, 2027) --
//    you're weakest on Unit 3: Civil Liberties and Civil Rights.
//    Practice it now ->"
//
// A thin read-only layer: the countdown comes from js/exam-dates.js, the
// weak spot from js/progress.js's getWorstFlagged() -- the SAME function
// js/recommendations.js uses, so there is only ever one definition of
// "worst flagged item" -- and display names from js/subjects.js. It never
// writes to localStorage and never touches the backend.
//
// Depends on the subject data files, js/subjects.js, js/tracking.js,
// js/progress.js and js/exam-dates.js being loaded first.

(function () {
  // The worst flagged quiz that belongs to `subject`, as
  // { href, label } -- or null if there isn't one.
  //
  // getWorstFlagged() is global across subjects (lesson/unit ids are
  // globally unique), so we resolve the winner's subject and drop it if
  // it isn't the one this banner is counting down to. We deliberately do
  // not re-rank or re-pick here: whatever progress.js calls worst is what
  // the banner shows.
  function weakSpot(subject) {
    const worst = window.APGovProgress.getWorstFlagged();
    if (!worst) return null;

    if (worst.type === "lesson") {
      const found = window.AllAPSubjects.findLesson(worst.id);
      if (!found || found.subject.id !== subject.id) return null;
      return {
        href: `quiz.html?week=${encodeURIComponent(worst.id)}&mode=lesson`,
        // Same label treatment as js/recommendations.js: the short
        // "Topic 3.2" half, not the full topic sentence.
        label: found.lesson.topic.split(":")[0],
      };
    }

    const found = window.AllAPSubjects.findUnit(worst.id);
    if (!found || found.subject.id !== subject.id) return null;
    return {
      href: `quiz.html?unit=${encodeURIComponent(worst.id)}&mode=unit`,
      label: found.unit.name,
    };
  }

  // Where to send a student with no quiz history yet: this subject's
  // first unit.
  function startingPoint(subject) {
    const firstUnit = subject.units[0];
    if (!firstUnit) return null;
    return {
      href: `unit.html?unit=${encodeURIComponent(firstUnit.id)}`,
      label: firstUnit.name,
    };
  }

  function hide(containerEl) {
    containerEl.innerHTML = "";
    containerEl.classList.add("hidden");
  }

  function render(containerEl, subject) {
    if (!containerEl || !subject) return;

    const days = window.AllAPExamDates.daysUntilExam(subject.id);
    const target = weakSpot(subject);
    const fallbackTarget = target ? null : startingPoint(subject);
    const destination = target || fallbackTarget;

    // No exam date configured for this subject AND nothing to practice --
    // an empty banner is worse than no banner.
    if (days === null && !destination) {
      hide(containerEl);
      return;
    }

    let countdownText;
    if (days === null) {
      countdownText = "";
    } else if (days > 1) {
      countdownText = `${days} days until your ${subject.name} exam (${window.AllAPExamDates.formatExamDate(subject.id)})`;
    } else if (days === 1) {
      countdownText = `1 day until your ${subject.name} exam (${window.AllAPExamDates.formatExamDate(subject.id)})`;
    } else if (days === 0) {
      countdownText = `Your ${subject.name} exam is today`;
    } else {
      // Exam has passed. Never show a negative count; keep the banner
      // useful as a practice prompt instead.
      countdownText = `This year's ${subject.name} exam has passed — keep practicing for next year`;
    }

    let spotText;
    if (target) {
      spotText = `you're weakest on ${target.label}`;
    } else if (fallbackTarget) {
      spotText = `no quiz history yet — start with ${fallbackTarget.label}`;
    } else {
      spotText = "";
    }

    containerEl.classList.remove("hidden");
    containerEl.innerHTML = "";

    const banner = document.createElement("div");
    banner.className = "exam-banner";

    const message = document.createElement("p");
    message.className = "exam-banner-text";
    const sentence = [countdownText, spotText].filter(Boolean).join(" — ");
    message.textContent = /[.!?]$/.test(sentence) ? sentence : `${sentence}.`;
    banner.appendChild(message);

    if (destination) {
      const link = document.createElement("a");
      link.className = "exam-banner-cta";
      link.href = destination.href;
      link.textContent = target ? "Practice it now →" : "Start here →";
      banner.appendChild(link);
    }

    containerEl.appendChild(banner);
  }

  window.AllAPExamBanner = { render };
})();
