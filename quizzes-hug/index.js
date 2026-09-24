// quizzes-hug/index.js
//
// Master list of every AP Human Geography lesson. Same shape and same role as
// quizzes-ush/index.js (APUSH), but published under its OWN global --
// window.HUG_QUIZ_LIST -- so the subjects can all be loaded on the same page
// without clobbering each other. js/subjects.js joins them into
// window.SUBJECTS, which is what unit.js / quiz.js / insights.js actually read.
//
// Lesson ids are prefixed "hug-" so they never collide with another subject's
// lesson id. The prefix also keeps per-lesson progress in localStorage separate.
//
// Follows the College Board CED: 7 units, 68 topics.
//
// Fields:
//   id    - globally unique lesson id, e.g. "hug-topic-1-1"
//   file  - data file to load, relative to the site root
//   date  - "YYYY-MM-DD", when the lesson was published (informational only)
//   topic - label shown on the unit and quiz pages

window.HUG_QUIZ_LIST = [
  // Unit 1
  { id: "hug-topic-1-1", file: "quizzes-hug/topic-1-1.js", date: "2026-09-23", topic: "Topic 1.1: Introduction to Maps" },
  { id: "hug-topic-1-2", file: "quizzes-hug/topic-1-2.js", date: "2026-09-23", topic: "Topic 1.2: Geographic Data" },
  { id: "hug-topic-1-3", file: "quizzes-hug/topic-1-3.js", date: "2026-09-23", topic: "Topic 1.3: The Power of Geographic Data" },
  { id: "hug-topic-1-4", file: "quizzes-hug/topic-1-4.js", date: "2026-09-23", topic: "Topic 1.4: Spatial Concepts" },
  { id: "hug-topic-1-5", file: "quizzes-hug/topic-1-5.js", date: "2026-09-23", topic: "Topic 1.5: Human–Environmental Interaction" },
  { id: "hug-topic-1-6", file: "quizzes-hug/topic-1-6.js", date: "2026-09-23", topic: "Topic 1.6: Scales of Analysis" },
  { id: "hug-topic-1-7", file: "quizzes-hug/topic-1-7.js", date: "2026-09-23", topic: "Topic 1.7: Regional Analysis" },

  // Unit 2
  { id: "hug-topic-2-1", file: "quizzes-hug/topic-2-1.js", date: "2026-09-23", topic: "Topic 2.1: Population Distribution" },
  { id: "hug-topic-2-2", file: "quizzes-hug/topic-2-2.js", date: "2026-09-23", topic: "Topic 2.2: Consequences of Population Distribution" },
  { id: "hug-topic-2-3", file: "quizzes-hug/topic-2-3.js", date: "2026-09-23", topic: "Topic 2.3: Population Composition" },
  { id: "hug-topic-2-4", file: "quizzes-hug/topic-2-4.js", date: "2026-09-23", topic: "Topic 2.4: Population Dynamics" },
  { id: "hug-topic-2-5", file: "quizzes-hug/topic-2-5.js", date: "2026-09-23", topic: "Topic 2.5: The Demographic Transition Model" },
  { id: "hug-topic-2-6", file: "quizzes-hug/topic-2-6.js", date: "2026-09-23", topic: "Topic 2.6: Malthusian Theory" },
  { id: "hug-topic-2-7", file: "quizzes-hug/topic-2-7.js", date: "2026-09-23", topic: "Topic 2.7: Population Policies" },
  { id: "hug-topic-2-8", file: "quizzes-hug/topic-2-8.js", date: "2026-09-23", topic: "Topic 2.8: Women and Demographic Change" },
  { id: "hug-topic-2-9", file: "quizzes-hug/topic-2-9.js", date: "2026-09-23", topic: "Topic 2.9: Aging Populations" },
  { id: "hug-topic-2-10", file: "quizzes-hug/topic-2-10.js", date: "2026-09-23", topic: "Topic 2.10: Causes of Migration" },
  { id: "hug-topic-2-11", file: "quizzes-hug/topic-2-11.js", date: "2026-09-23", topic: "Topic 2.11: Forced and Voluntary Migration" },
  { id: "hug-topic-2-12", file: "quizzes-hug/topic-2-12.js", date: "2026-09-23", topic: "Topic 2.12: Effects of Migration" },

  // Unit 3
  { id: "hug-topic-3-1", file: "quizzes-hug/topic-3-1.js", date: "2026-09-23", topic: "Topic 3.1: Introduction to Culture" },
  { id: "hug-topic-3-2", file: "quizzes-hug/topic-3-2.js", date: "2026-09-23", topic: "Topic 3.2: Cultural Landscapes" },
  { id: "hug-topic-3-3", file: "quizzes-hug/topic-3-3.js", date: "2026-09-23", topic: "Topic 3.3: Cultural Patterns" },
  { id: "hug-topic-3-4", file: "quizzes-hug/topic-3-4.js", date: "2026-09-23", topic: "Topic 3.4: Types of Diffusion" },
  { id: "hug-topic-3-5", file: "quizzes-hug/topic-3-5.js", date: "2026-09-23", topic: "Topic 3.5: Historical Causes of Diffusion" },
  { id: "hug-topic-3-6", file: "quizzes-hug/topic-3-6.js", date: "2026-09-23", topic: "Topic 3.6: Contemporary Causes of Diffusion" },
  { id: "hug-topic-3-7", file: "quizzes-hug/topic-3-7.js", date: "2026-09-23", topic: "Topic 3.7: Diffusion of Religion and Language" },
  { id: "hug-topic-3-8", file: "quizzes-hug/topic-3-8.js", date: "2026-09-23", topic: "Topic 3.8: Effects of Diffusion" },

  // Unit 4
  { id: "hug-topic-4-1", file: "quizzes-hug/topic-4-1.js", date: "2026-09-23", topic: "Topic 4.1: Introduction to Political Geography" },
  { id: "hug-topic-4-2", file: "quizzes-hug/topic-4-2.js", date: "2026-09-23", topic: "Topic 4.2: Political Processes" },
  { id: "hug-topic-4-3", file: "quizzes-hug/topic-4-3.js", date: "2026-09-23", topic: "Topic 4.3: Political Power and Territoriality" },
  { id: "hug-topic-4-4", file: "quizzes-hug/topic-4-4.js", date: "2026-09-23", topic: "Topic 4.4: Defining Political Boundaries" },
  { id: "hug-topic-4-5", file: "quizzes-hug/topic-4-5.js", date: "2026-09-23", topic: "Topic 4.5: The Function of Political Boundaries" },
  { id: "hug-topic-4-6", file: "quizzes-hug/topic-4-6.js", date: "2026-09-23", topic: "Topic 4.6: Internal Boundaries" },
  { id: "hug-topic-4-7", file: "quizzes-hug/topic-4-7.js", date: "2026-09-23", topic: "Topic 4.7: Forms of Governance" },
  { id: "hug-topic-4-8", file: "quizzes-hug/topic-4-8.js", date: "2026-09-23", topic: "Topic 4.8: Defining Devolutionary Factors" },
  { id: "hug-topic-4-9", file: "quizzes-hug/topic-4-9.js", date: "2026-09-23", topic: "Topic 4.9: Challenges to Sovereignty" },
  { id: "hug-topic-4-10", file: "quizzes-hug/topic-4-10.js", date: "2026-09-23", topic: "Topic 4.10: Consequences of Centrifugal and Centripetal Forces" },

  // Unit 5
  { id: "hug-topic-5-1", file: "quizzes-hug/topic-5-1.js", date: "2026-09-23", topic: "Topic 5.1: Introduction to Agriculture" },
  { id: "hug-topic-5-2", file: "quizzes-hug/topic-5-2.js", date: "2026-09-23", topic: "Topic 5.2: Settlement Patterns and Survey Methods" },
  { id: "hug-topic-5-3", file: "quizzes-hug/topic-5-3.js", date: "2026-09-23", topic: "Topic 5.3: Agricultural Origins and Diffusions UNIT" },
  { id: "hug-topic-5-4", file: "quizzes-hug/topic-5-4.js", date: "2026-09-23", topic: "Topic 5.4: The Second Agricultural Revolution" },
  { id: "hug-topic-5-5", file: "quizzes-hug/topic-5-5.js", date: "2026-09-23", topic: "Topic 5.5: The Green Revolution" },
  { id: "hug-topic-5-6", file: "quizzes-hug/topic-5-6.js", date: "2026-09-23", topic: "Topic 5.6: Agricultural Production Regions" },
  { id: "hug-topic-5-7", file: "quizzes-hug/topic-5-7.js", date: "2026-09-23", topic: "Topic 5.7: Spatial Organization of Agriculture" },
  { id: "hug-topic-5-8", file: "quizzes-hug/topic-5-8.js", date: "2026-09-23", topic: "Topic 5.8: Von Thünen Model" },
  { id: "hug-topic-5-9", file: "quizzes-hug/topic-5-9.js", date: "2026-09-23", topic: "Topic 5.9: The Global System of Agriculture" },
  { id: "hug-topic-5-10", file: "quizzes-hug/topic-5-10.js", date: "2026-09-23", topic: "Topic 5.10: Consequences of Agricultural Practices" },
  { id: "hug-topic-5-11", file: "quizzes-hug/topic-5-11.js", date: "2026-09-23", topic: "Topic 5.11: Challenges of Contemporary Agriculture" },
  { id: "hug-topic-5-12", file: "quizzes-hug/topic-5-12.js", date: "2026-09-23", topic: "Topic 5.12: Women in Agriculture" },

  // Unit 6
  { id: "hug-topic-6-1", file: "quizzes-hug/topic-6-1.js", date: "2026-09-23", topic: "Topic 6.1: The Origin and Influences of Urbanization" },
  { id: "hug-topic-6-2", file: "quizzes-hug/topic-6-2.js", date: "2026-09-23", topic: "Topic 6.2: Cities Across the World" },
  { id: "hug-topic-6-3", file: "quizzes-hug/topic-6-3.js", date: "2026-09-23", topic: "Topic 6.3: Cities and Globalization" },
  { id: "hug-topic-6-4", file: "quizzes-hug/topic-6-4.js", date: "2026-09-23", topic: "Topic 6.4: The Size and Distribution of Cities" },
  { id: "hug-topic-6-5", file: "quizzes-hug/topic-6-5.js", date: "2026-09-23", topic: "Topic 6.5: The Internal Structure of Cities" },
  { id: "hug-topic-6-6", file: "quizzes-hug/topic-6-6.js", date: "2026-09-23", topic: "Topic 6.6: Density and Land Use" },
  { id: "hug-topic-6-7", file: "quizzes-hug/topic-6-7.js", date: "2026-09-23", topic: "Topic 6.7: Infrastructure" },
  { id: "hug-topic-6-8", file: "quizzes-hug/topic-6-8.js", date: "2026-09-23", topic: "Topic 6.8: Urban Sustainability" },
  { id: "hug-topic-6-9", file: "quizzes-hug/topic-6-9.js", date: "2026-09-23", topic: "Topic 6.9: Urban Data" },
  { id: "hug-topic-6-10", file: "quizzes-hug/topic-6-10.js", date: "2026-09-23", topic: "Topic 6.10: Challenges of Urban Changes" },
  { id: "hug-topic-6-11", file: "quizzes-hug/topic-6-11.js", date: "2026-09-23", topic: "Topic 6.11: Challenges of Urban Sustainability" },

  // Unit 7
  { id: "hug-topic-7-1", file: "quizzes-hug/topic-7-1.js", date: "2026-09-23", topic: "Topic 7.1: The Industrial Revolution" },
  { id: "hug-topic-7-2", file: "quizzes-hug/topic-7-2.js", date: "2026-09-23", topic: "Topic 7.2: Economic Sectors and Patterns" },
  { id: "hug-topic-7-3", file: "quizzes-hug/topic-7-3.js", date: "2026-09-23", topic: "Topic 7.3: Measures of Development" },
  { id: "hug-topic-7-4", file: "quizzes-hug/topic-7-4.js", date: "2026-09-23", topic: "Topic 7.4: Women and Economic Development" },
  { id: "hug-topic-7-5", file: "quizzes-hug/topic-7-5.js", date: "2026-09-23", topic: "Topic 7.5: Theories of Development" },
  { id: "hug-topic-7-6", file: "quizzes-hug/topic-7-6.js", date: "2026-09-23", topic: "Topic 7.6: Trade and the World Economy" },
  { id: "hug-topic-7-7", file: "quizzes-hug/topic-7-7.js", date: "2026-09-23", topic: "Topic 7.7: Changes as a Result of the World Economy" },
  { id: "hug-topic-7-8", file: "quizzes-hug/topic-7-8.js", date: "2026-09-23", topic: "Topic 7.8: Sustainable Development" },

];
