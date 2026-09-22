// quizzes-ush/index.js
//
// Master list of every AP U.S. History lesson. Same shape and same role as
// quizzes/index.js (AP Gov) and quizzes-bio/index.js (AP Bio), but published
// under its OWN global -- window.USH_QUIZ_LIST -- so the subjects can all be
// loaded on the same page without clobbering each other. js/subjects.js joins
// them into window.SUBJECTS, which is what unit.js / quiz.js / insights.js
// actually read.
//
// Lesson ids are prefixed "ush-" so they never collide with an AP Gov or
// AP Bio lesson id (all three subjects have a "topic-1-1"). The prefix also
// keeps per-lesson progress in localStorage separate between subjects.
//
// APUSH follows the College Board CED: 9 units (Periods 1-9), 105 topics.
// Unit 1 (7 topics) is published below. Units 2-9 are not written yet.
//
// Fields:
//   id    - globally unique lesson id, e.g. "ush-topic-1-1"
//   file  - data file to load, relative to the site root
//   date  - "YYYY-MM-DD", when the lesson was published (informational only)
//   topic - short human-readable topic name shown to students

window.USH_QUIZ_LIST = [

  { id: "ush-topic-1-1", file: "quizzes-ush/topic-1-1.js", date: "2026-09-21", topic: "Topic 1.1: Contextualizing Period 1" },
  { id: "ush-topic-1-2", file: "quizzes-ush/topic-1-2.js", date: "2026-09-21", topic: "Topic 1.2: Native American Societies Before European Contact" },
  { id: "ush-topic-1-3", file: "quizzes-ush/topic-1-3.js", date: "2026-09-21", topic: "Topic 1.3: European Exploration in the Americas" },
  { id: "ush-topic-1-4", file: "quizzes-ush/topic-1-4.js", date: "2026-09-21", topic: "Topic 1.4: Columbian Exchange, Spanish Exploration, and Conquest" },
  { id: "ush-topic-1-5", file: "quizzes-ush/topic-1-5.js", date: "2026-09-21", topic: "Topic 1.5: Labor, Slavery, and Caste in the Spanish Colonial System" },
  { id: "ush-topic-1-6", file: "quizzes-ush/topic-1-6.js", date: "2026-09-21", topic: "Topic 1.6: Cultural Interactions Between Europeans, Native Americans, and Africans" },
  { id: "ush-topic-1-7", file: "quizzes-ush/topic-1-7.js", date: "2026-09-21", topic: "Topic 1.7: Causation in Period 1" },

];
