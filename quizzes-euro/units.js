// quizzes-euro/units.js
//
// Groups AP European History lessons (see quizzes-euro/index.js) into units. Same shape
// and same role as quizzes-ush/units.js (APUSH), but published under
// window.EURO_UNITS so it does not overwrite any other subject's units global.
//
// Unit ids are prefixed "euro-" so they never collide with another subject's
// unit id (every subject has a "unit-1").
//
// Fields:
//   id      - used in URLs, e.g. "euro-unit-1" -> unit.html?unit=euro-unit-1
//   name    - short human-readable name shown to students
//   lessons - ordered array of lesson ids from quizzes-euro/index.js

window.EURO_UNITS = [
  {
    id: "euro-unit-1",
    name: "Unit 1: Renaissance and Exploration (1450-1648)",
    lessons: [
      "euro-topic-1-1", "euro-topic-1-2", "euro-topic-1-3", "euro-topic-1-4",
      "euro-topic-1-5", "euro-topic-1-6", "euro-topic-1-7", "euro-topic-1-8",
      "euro-topic-1-9", "euro-topic-1-10", "euro-topic-1-11",
    ],
  },
  {
    id: "euro-unit-2",
    name: "Unit 2: Age of Reformation (1450-1648)",
    lessons: [
      "euro-topic-2-1", "euro-topic-2-2", "euro-topic-2-3", "euro-topic-2-4",
      "euro-topic-2-5", "euro-topic-2-6", "euro-topic-2-7", "euro-topic-2-8",
    ],
  },
  {
    id: "euro-unit-3",
    name: "Unit 3: Absolutism and Constitutionalism (1648-1815)",
    lessons: [
      "euro-topic-3-1", "euro-topic-3-2", "euro-topic-3-3", "euro-topic-3-4",
      "euro-topic-3-5", "euro-topic-3-6", "euro-topic-3-7", "euro-topic-3-8",
    ],
  },
  {
    id: "euro-unit-4",
    name: "Unit 4: Scientific, Philosophical, and Political Developments (1648-1815)",
    lessons: [
      "euro-topic-4-1", "euro-topic-4-2", "euro-topic-4-3", "euro-topic-4-4",
      "euro-topic-4-5", "euro-topic-4-6", "euro-topic-4-7",
    ],
  },
  {
    id: "euro-unit-5",
    name: "Unit 5: Conflict, Crisis, and Reaction in the Late 18th Century (1648-1815)",
    lessons: [
      "euro-topic-5-1", "euro-topic-5-2", "euro-topic-5-3", "euro-topic-5-4",
      "euro-topic-5-5", "euro-topic-5-6", "euro-topic-5-7", "euro-topic-5-8",
      "euro-topic-5-9",
    ],
  },
  {
    id: "euro-unit-6",
    name: "Unit 6: Industrialization and Its Effects (1815-1914)",
    lessons: [
      "euro-topic-6-1", "euro-topic-6-2", "euro-topic-6-3", "euro-topic-6-4",
      "euro-topic-6-5", "euro-topic-6-6", "euro-topic-6-7", "euro-topic-6-8",
      "euro-topic-6-9", "euro-topic-6-10",
    ],
  },
  {
    id: "euro-unit-7",
    name: "Unit 7: 19th-Century Perspectives and Political Developments (1815-1914)",
    lessons: [
      "euro-topic-7-1", "euro-topic-7-2", "euro-topic-7-3", "euro-topic-7-4",
      "euro-topic-7-5", "euro-topic-7-6", "euro-topic-7-7", "euro-topic-7-8",
      "euro-topic-7-9",
    ],
  },
  {
    id: "euro-unit-8",
    name: "Unit 8: 20th-Century Global Conflicts (1914-present)",
    lessons: [
      "euro-topic-8-1", "euro-topic-8-2", "euro-topic-8-3", "euro-topic-8-4",
      "euro-topic-8-5", "euro-topic-8-6", "euro-topic-8-7", "euro-topic-8-8",
      "euro-topic-8-9", "euro-topic-8-10", "euro-topic-8-11",
    ],
  },
  {
    id: "euro-unit-9",
    name: "Unit 9: Cold War and Contemporary Europe (1914-present)",
    lessons: [
      "euro-topic-9-1", "euro-topic-9-2", "euro-topic-9-3", "euro-topic-9-4",
      "euro-topic-9-5", "euro-topic-9-6", "euro-topic-9-7", "euro-topic-9-8",
      "euro-topic-9-9", "euro-topic-9-10", "euro-topic-9-11", "euro-topic-9-12",
      "euro-topic-9-13", "euro-topic-9-14", "euro-topic-9-15",
    ],
  },
];
