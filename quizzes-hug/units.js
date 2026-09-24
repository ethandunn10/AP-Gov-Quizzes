// quizzes-hug/units.js
//
// Groups AP Human Geography lessons (see quizzes-hug/index.js) into units. Same shape
// and same role as quizzes-ush/units.js (APUSH), but published under
// window.HUG_UNITS so it does not overwrite any other subject's units global.
//
// Unit ids are prefixed "hug-" so they never collide with another subject's
// unit id (every subject has a "unit-1").
//
// Fields:
//   id      - used in URLs, e.g. "hug-unit-1" -> unit.html?unit=hug-unit-1
//   name    - short human-readable name shown to students
//   lessons - ordered array of lesson ids from quizzes-hug/index.js

window.HUG_UNITS = [
  {
    id: "hug-unit-1",
    name: "Unit 1: Thinking Geographically",
    lessons: [
      "hug-topic-1-1", "hug-topic-1-2", "hug-topic-1-3", "hug-topic-1-4",
      "hug-topic-1-5", "hug-topic-1-6", "hug-topic-1-7",
    ],
  },
  {
    id: "hug-unit-2",
    name: "Unit 2: Population and Migration",
    lessons: [
      "hug-topic-2-1", "hug-topic-2-2", "hug-topic-2-3", "hug-topic-2-4",
      "hug-topic-2-5", "hug-topic-2-6", "hug-topic-2-7", "hug-topic-2-8",
      "hug-topic-2-9", "hug-topic-2-10", "hug-topic-2-11", "hug-topic-2-12",
    ],
  },
  {
    id: "hug-unit-3",
    name: "Unit 3: Cultural Patterns and Processes",
    lessons: [
      "hug-topic-3-1", "hug-topic-3-2", "hug-topic-3-3", "hug-topic-3-4",
      "hug-topic-3-5", "hug-topic-3-6", "hug-topic-3-7", "hug-topic-3-8",
    ],
  },
  {
    id: "hug-unit-4",
    name: "Unit 4: Political Patterns and Processes",
    lessons: [
      "hug-topic-4-1", "hug-topic-4-2", "hug-topic-4-3", "hug-topic-4-4",
      "hug-topic-4-5", "hug-topic-4-6", "hug-topic-4-7", "hug-topic-4-8",
      "hug-topic-4-9", "hug-topic-4-10",
    ],
  },
  {
    id: "hug-unit-5",
    name: "Unit 5: Agriculture and Rural Land Use",
    lessons: [
      "hug-topic-5-1", "hug-topic-5-2", "hug-topic-5-3", "hug-topic-5-4",
      "hug-topic-5-5", "hug-topic-5-6", "hug-topic-5-7", "hug-topic-5-8",
      "hug-topic-5-9", "hug-topic-5-10", "hug-topic-5-11", "hug-topic-5-12",
    ],
  },
  {
    id: "hug-unit-6",
    name: "Unit 6: Cities and Urban Land Use",
    lessons: [
      "hug-topic-6-1", "hug-topic-6-2", "hug-topic-6-3", "hug-topic-6-4",
      "hug-topic-6-5", "hug-topic-6-6", "hug-topic-6-7", "hug-topic-6-8",
      "hug-topic-6-9", "hug-topic-6-10", "hug-topic-6-11",
    ],
  },
  {
    id: "hug-unit-7",
    name: "Unit 7: Industrial and Economic Development",
    lessons: [
      "hug-topic-7-1", "hug-topic-7-2", "hug-topic-7-3", "hug-topic-7-4",
      "hug-topic-7-5", "hug-topic-7-6", "hug-topic-7-7", "hug-topic-7-8",
    ],
  },
];
