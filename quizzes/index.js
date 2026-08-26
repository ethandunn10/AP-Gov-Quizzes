// quizzes/index.js
//
// This is the master list of every quiz on the site. To publish a new
// week's quiz:
//   1. Create quizzes/week-N.js with that week's questions (copy the
//      format used in quizzes/week-1.js).
//   2. Add ONE entry to the QUIZ_LIST array below.
// That's it -- the homepage (this week's quiz) and the past-quizzes page
// both read this file, so nothing else needs to change.
//
// We attach this to `window` (instead of using `const` alone) so it's
// unambiguous which script provides it when it's loaded via a plain
// <script src="..."> tag on index.html, quiz.html, and past-quizzes.html.
//
// Fields:
//   id    - matches the data file name, e.g. "week-1" -> quizzes/week-1.js
//   date  - "YYYY-MM-DD", used for sorting (newest first) and display
//   topic - short human-readable topic name shown to students
//
// The single newest entry (by date) is "this week's quiz" on the
// homepage. Everything older shows up on the Past Quizzes page.

window.QUIZ_LIST = [
  {
    id: "week-1",
    date: "2026-08-25",
    topic: "Topics 1.3-1.4: Federalist No. 10, Brutus No. 1 & the Articles of Confederation",
  },
  // Add new weeks here, e.g.:
  // {
  //   id: "week-2",
  //   date: "2026-09-01",
  //   topic: "Topics 1.5-1.6: Ratification & Principles of Government",
  // },
];
