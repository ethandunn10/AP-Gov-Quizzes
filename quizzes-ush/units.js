// quizzes-ush/units.js
//
// Groups AP U.S. History lessons (see quizzes-ush/index.js) into units. Same
// shape and same role as quizzes/units.js (AP Gov), but published under
// window.USH_UNITS so it does not overwrite window.UNITS or window.BIO_UNITS.
//
// Unit ids are prefixed "ush-" so they never collide with an AP Gov or AP Bio
// unit id (all three subjects have a "unit-1").
//
// APUSH units map to the CED's nine historical periods, so a unit's name is
// just its date range -- "Unit 1: 1491-1607" rather than repeating "Period 1",
// which the "Unit 1" already says. All nine units are published.
//
// Fields:
//   id      - used in URLs, e.g. "ush-unit-1" -> unit.html?unit=ush-unit-1
//   name    - short human-readable name shown to students
//   lessons - ordered array of lesson ids from quizzes-ush/index.js

window.USH_UNITS = [
  {
    id: "ush-unit-1",
    name: "Unit 1: 1491-1607",
    lessons: [
      "ush-topic-1-1", "ush-topic-1-2", "ush-topic-1-3", "ush-topic-1-4",
      "ush-topic-1-5", "ush-topic-1-6", "ush-topic-1-7",
    ],
  },
  {
    id: "ush-unit-2",
    name: "Unit 2: 1607-1754",
    lessons: [
      "ush-topic-2-1", "ush-topic-2-2", "ush-topic-2-3", "ush-topic-2-4",
      "ush-topic-2-5", "ush-topic-2-6", "ush-topic-2-7", "ush-topic-2-8",
    ],
  },
  {
    id: "ush-unit-3",
    name: "Unit 3: 1754-1800",
    lessons: [
      "ush-topic-3-1", "ush-topic-3-2", "ush-topic-3-3", "ush-topic-3-4",
      "ush-topic-3-5", "ush-topic-3-6", "ush-topic-3-7", "ush-topic-3-8",
      "ush-topic-3-9", "ush-topic-3-10", "ush-topic-3-11", "ush-topic-3-12",
      "ush-topic-3-13",
    ],
  },
  {
    id: "ush-unit-4",
    name: "Unit 4: 1800-1848",
    lessons: [
      "ush-topic-4-1", "ush-topic-4-2", "ush-topic-4-3", "ush-topic-4-4",
      "ush-topic-4-5", "ush-topic-4-6", "ush-topic-4-7", "ush-topic-4-8",
      "ush-topic-4-9", "ush-topic-4-10", "ush-topic-4-11", "ush-topic-4-12",
      "ush-topic-4-13", "ush-topic-4-14",
    ],
  },
  {
    id: "ush-unit-5",
    name: "Unit 5: 1844-1877",
    lessons: [
      "ush-topic-5-1", "ush-topic-5-2", "ush-topic-5-3", "ush-topic-5-4",
      "ush-topic-5-5", "ush-topic-5-6", "ush-topic-5-7", "ush-topic-5-8",
      "ush-topic-5-9", "ush-topic-5-10", "ush-topic-5-11", "ush-topic-5-12",
    ],
  },
  {
    id: "ush-unit-6",
    name: "Unit 6: 1865-1898",
    lessons: [
      "ush-topic-6-1", "ush-topic-6-2", "ush-topic-6-3", "ush-topic-6-4",
      "ush-topic-6-5", "ush-topic-6-6", "ush-topic-6-7", "ush-topic-6-8",
      "ush-topic-6-9", "ush-topic-6-10", "ush-topic-6-11", "ush-topic-6-12",
      "ush-topic-6-13", "ush-topic-6-14",
    ],
  },
  {
    id: "ush-unit-7",
    name: "Unit 7: 1890-1945",
    lessons: [
      "ush-topic-7-1", "ush-topic-7-2", "ush-topic-7-3", "ush-topic-7-4",
      "ush-topic-7-5", "ush-topic-7-6", "ush-topic-7-7", "ush-topic-7-8",
      "ush-topic-7-9", "ush-topic-7-10", "ush-topic-7-11", "ush-topic-7-12",
      "ush-topic-7-13", "ush-topic-7-14", "ush-topic-7-15",
    ],
  },
  {
    id: "ush-unit-8",
    name: "Unit 8: 1945-1980",
    lessons: [
      "ush-topic-8-1", "ush-topic-8-2", "ush-topic-8-3", "ush-topic-8-4",
      "ush-topic-8-5", "ush-topic-8-6", "ush-topic-8-7", "ush-topic-8-8",
      "ush-topic-8-9", "ush-topic-8-10", "ush-topic-8-11", "ush-topic-8-12",
      "ush-topic-8-13", "ush-topic-8-14", "ush-topic-8-15",
    ],
  },
  {
    id: "ush-unit-9",
    name: "Unit 9: 1980-present",
    lessons: [
      "ush-topic-9-1", "ush-topic-9-2", "ush-topic-9-3", "ush-topic-9-4",
      "ush-topic-9-5", "ush-topic-9-6", "ush-topic-9-7",
    ],
  },
];
