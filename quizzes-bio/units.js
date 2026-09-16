// quizzes-bio/units.js
//
// Groups AP Biology lessons (see quizzes-bio/index.js) into units. Same
// shape and same role as quizzes/units.js (AP Gov), but published under
// window.BIO_UNITS so it does not overwrite window.UNITS.
//
// Unit ids are prefixed "bio-" so they never collide with an AP Gov unit
// id (both subjects have a "unit-1").
//
// Fields:
//   id      - used in URLs, e.g. "bio-unit-1" -> unit.html?unit=bio-unit-1
//   name    - short human-readable name shown to students
//   lessons - ordered array of lesson ids from quizzes-bio/index.js

window.BIO_UNITS = [
  {
    id: "bio-unit-1",
    name: "Unit 1: Chemistry of Life",
    lessons: [
      "bio-topic-1-1", "bio-topic-1-2", "bio-topic-1-3", "bio-topic-1-4", "bio-topic-1-5",
      "bio-topic-1-6", "bio-topic-1-7",
    ],
  },
  {
    id: "bio-unit-2",
    name: "Unit 2: Cell Structure and Function",
    lessons: [
      "bio-topic-2-1", "bio-topic-2-2", "bio-topic-2-3", "bio-topic-2-4", "bio-topic-2-5",
      "bio-topic-2-6", "bio-topic-2-7", "bio-topic-2-8", "bio-topic-2-9", "bio-topic-2-10",
    ],
  },
  {
    id: "bio-unit-3",
    name: "Unit 3: Cellular Energetics",
    lessons: [
      "bio-topic-3-1", "bio-topic-3-2", "bio-topic-3-3", "bio-topic-3-4", "bio-topic-3-5",
    ],
  },
  {
    id: "bio-unit-4",
    name: "Unit 4: Cell Communication and Cell Cycle",
    lessons: [
      "bio-topic-4-1", "bio-topic-4-2", "bio-topic-4-3", "bio-topic-4-4", "bio-topic-4-5",
      "bio-topic-4-6",
    ],
  },
  {
    id: "bio-unit-5",
    name: "Unit 5: Heredity",
    lessons: [
      "bio-topic-5-1", "bio-topic-5-2", "bio-topic-5-3", "bio-topic-5-4", "bio-topic-5-5",
    ],
  },
  {
    id: "bio-unit-6",
    name: "Unit 6: Gene Expression and Regulation",
    lessons: [
      "bio-topic-6-1", "bio-topic-6-2", "bio-topic-6-3", "bio-topic-6-4", "bio-topic-6-5",
      "bio-topic-6-6", "bio-topic-6-7", "bio-topic-6-8",
    ],
  },
  {
    id: "bio-unit-7",
    name: "Unit 7: Natural Selection",
    lessons: [
      "bio-topic-7-1", "bio-topic-7-2", "bio-topic-7-3", "bio-topic-7-4", "bio-topic-7-5",
      "bio-topic-7-6", "bio-topic-7-7", "bio-topic-7-8", "bio-topic-7-9", "bio-topic-7-10",
      "bio-topic-7-11", "bio-topic-7-12",
    ],
  },
  {
    id: "bio-unit-8",
    name: "Unit 8: Ecology",
    lessons: [
      "bio-topic-8-1", "bio-topic-8-2", "bio-topic-8-3", "bio-topic-8-4", "bio-topic-8-5",
      "bio-topic-8-6", "bio-topic-8-7",
    ],
  },
];
