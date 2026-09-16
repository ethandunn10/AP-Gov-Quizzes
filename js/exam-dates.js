// js/exam-dates.js
// The one place that knows when each subject's AP exam is.
//
// To update for a new year, or to add a subject, edit ONE line below --
// nothing else in the codebase hard-codes an exam date. Keys are the
// subject ids from js/subjects.js; values are the exam date as a plain
// "YYYY-MM-DD" string, interpreted in the student's LOCAL time zone (see
// parse() -- `new Date("2027-05-04")` would parse as UTC and can land on
// the wrong local day, so we build it from parts instead).
//
// No dependencies; load this before js/exam-banner.js.

(function () {
  const EXAM_DATES = {
    "ap-gov": "2027-05-04",
    "ap-bio": "2027-05-03",
  };

  // Subject shown when the page isn't scoped to one (the subject picker).
  const DEFAULT_SUBJECT_ID = "ap-gov";

  // "YYYY-MM-DD" -> Date at local midnight, or null if unparseable.
  function parse(dateString) {
    if (typeof dateString !== "string") return null;
    const parts = dateString.split("-").map(Number);
    if (parts.length !== 3 || parts.some(isNaN)) return null;
    const [year, month, day] = parts;
    return new Date(year, month - 1, day);
  }

  function getExamDate(subjectId) {
    return parse(EXAM_DATES[subjectId]);
  }

  // Whole days from today to the exam, comparing local midnights so a
  // student loading the page at 11pm still sees the same number they saw
  // that morning. Negative once the exam has passed; null if no date.
  function daysUntilExam(subjectId, now) {
    const examDate = getExamDate(subjectId);
    if (!examDate) return null;
    const today = now ? new Date(now) : new Date();
    today.setHours(0, 0, 0, 0);
    const MS_PER_DAY = 24 * 60 * 60 * 1000;
    return Math.round((examDate - today) / MS_PER_DAY);
  }

  // "May 4, 2027" -- built from the parsed local date so it can't drift.
  function formatExamDate(subjectId) {
    const examDate = getExamDate(subjectId);
    if (!examDate) return null;
    return examDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  window.AllAPExamDates = {
    EXAM_DATES,
    DEFAULT_SUBJECT_ID,
    getExamDate,
    daysUntilExam,
    formatExamDate,
  };
})();
