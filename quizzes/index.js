// quizzes/index.js
//
// This is the master list of every lesson on the site. Each lesson is one
// AP Gov topic (1.1, 1.2, etc.), with its own 10-question quiz. To publish
// a new lesson:
//   1. Create quizzes/topic-X-Y.js with that lesson's questions (copy the
//      format used in the files below).
//   2. Add ONE entry to the QUIZ_LIST array below.
//   3. Reference that id from the relevant unit's `lessons` array in
//      quizzes/units.js.
// That's it -- unit.html, js/quiz.js, and js/recommendations.js all read
// this file, so nothing else needs to change.
//
// Fields:
//   id    - matches the data file name, e.g. "topic-1-1" -> quizzes/topic-1-1.js
//   date  - "YYYY-MM-DD", when the lesson was published (informational only)
//   topic - short human-readable topic name shown to students

window.QUIZ_LIST = [
  { id: "topic-1-1", date: "2026-09-04", topic: "Topic 1.1: Ideals of Democracy" },
  { id: "topic-1-2", date: "2026-09-04", topic: "Topic 1.2: Types of Democracy" },
  { id: "topic-1-3", date: "2026-09-04", topic: "Topic 1.3: Government Power and Individual Rights (Federalist No. 10 vs. Brutus No. 1)" },
  { id: "topic-1-4", date: "2026-09-04", topic: "Topic 1.4: Challenges of the Articles of Confederation" },
  { id: "topic-1-5", date: "2026-09-04", topic: "Topic 1.5: Ratification of the Constitution (Federalist No. 51, 70, 78)" },
  { id: "topic-1-6", date: "2026-09-04", topic: "Topic 1.6: Principles of American Government" },
  { id: "topic-1-7", date: "2026-09-04", topic: "Topic 1.7: Relationship Between States and the Federal Government" },
  { id: "topic-1-8", date: "2026-09-04", topic: "Topic 1.8: Constitutional Interpretations of Federalism (McCulloch v. Maryland)" },
  { id: "topic-1-9", date: "2026-09-04", topic: "Topic 1.9: Federalism in Action (Grants, Mandates, U.S. v. Lopez)" },
];
