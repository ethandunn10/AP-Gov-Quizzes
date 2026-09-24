// quizzes-world/units.js
//
// Groups AP World History: Modern lessons (see quizzes-world/index.js) into
// units. Same shape and same role as quizzes-ush/units.js (APUSH), but
// published under window.WORLD_UNITS so it does not overwrite any other
// subject's units global.
//
// Unit ids are prefixed "world-" so they never collide with another subject's
// unit id (every subject has a "unit-1").
//
// AP World units are named for their CED theme plus the date range, since the
// same three date ranges repeat across pairs of units -- "Unit 7: Global
// Conflict" alone would not tell a student that Unit 8 covers the same years.
//
// Fields:
//   id      - used in URLs, e.g. "world-unit-1" -> unit.html?unit=world-unit-1
//   name    - short human-readable name shown to students
//   lessons - ordered array of lesson ids from quizzes-world/index.js

window.WORLD_UNITS = [
  {
    id: "world-unit-1",
    name: "Unit 1: The Global Tapestry (1200-1450)",
    lessons: [
      "world-topic-1-1", "world-topic-1-2", "world-topic-1-3", "world-topic-1-4",
      "world-topic-1-5", "world-topic-1-6", "world-topic-1-7",
    ],
  },
  {
    id: "world-unit-2",
    name: "Unit 2: Networks of Exchange (1200-1450)",
    lessons: [
      "world-topic-2-1", "world-topic-2-2", "world-topic-2-3", "world-topic-2-4",
      "world-topic-2-5", "world-topic-2-6", "world-topic-2-7",
    ],
  },
  {
    id: "world-unit-3",
    name: "Unit 3: Land-Based Empires (1450-1750)",
    lessons: [
      "world-topic-3-1", "world-topic-3-2", "world-topic-3-3", "world-topic-3-4",
    ],
  },
  {
    id: "world-unit-4",
    name: "Unit 4: Transoceanic Interconnections (1450-1750)",
    lessons: [
      "world-topic-4-1", "world-topic-4-2", "world-topic-4-3", "world-topic-4-4",
      "world-topic-4-5", "world-topic-4-6", "world-topic-4-7", "world-topic-4-8",
    ],
  },
  {
    id: "world-unit-5",
    name: "Unit 5: Revolutions (1750-1900)",
    lessons: [
      "world-topic-5-1", "world-topic-5-2", "world-topic-5-3", "world-topic-5-4",
      "world-topic-5-5", "world-topic-5-6", "world-topic-5-7", "world-topic-5-8",
      "world-topic-5-9", "world-topic-5-10",
    ],
  },
  {
    id: "world-unit-6",
    name: "Unit 6: Consequences of Industrialization (1750-1900)",
    lessons: [
      "world-topic-6-1", "world-topic-6-2", "world-topic-6-3", "world-topic-6-4",
      "world-topic-6-5", "world-topic-6-6", "world-topic-6-7", "world-topic-6-8",
    ],
  },
  {
    id: "world-unit-7",
    name: "Unit 7: Global Conflict (1900-present)",
    lessons: [
      "world-topic-7-1", "world-topic-7-2", "world-topic-7-3", "world-topic-7-4",
      "world-topic-7-5", "world-topic-7-6", "world-topic-7-7", "world-topic-7-8",
      "world-topic-7-9",
    ],
  },
  {
    id: "world-unit-8",
    name: "Unit 8: Cold War and Decolonization (1900-present)",
    lessons: [
      "world-topic-8-1", "world-topic-8-2", "world-topic-8-3", "world-topic-8-4",
      "world-topic-8-5", "world-topic-8-6", "world-topic-8-7", "world-topic-8-8",
      "world-topic-8-9",
    ],
  },
  {
    id: "world-unit-9",
    name: "Unit 9: Globalization (1900-present)",
    lessons: [
      "world-topic-9-1", "world-topic-9-2", "world-topic-9-3", "world-topic-9-4",
      "world-topic-9-5", "world-topic-9-6", "world-topic-9-7", "world-topic-9-8",
      "world-topic-9-9",
    ],
  },
];
