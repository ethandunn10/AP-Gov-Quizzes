// quizzes-apes/units.js
//
// Groups AP Environmental Science lessons (see quizzes-apes/index.js) into units. Same shape
// and same role as quizzes-ush/units.js (APUSH), but published under
// window.APES_UNITS so it does not overwrite any other subject's units global.
//
// Unit ids are prefixed "apes-" so they never collide with another subject's
// unit id (every subject has a "unit-1").
//
// Fields:
//   id      - used in URLs, e.g. "apes-unit-1" -> unit.html?unit=apes-unit-1
//   name    - short human-readable name shown to students
//   lessons - ordered array of lesson ids from quizzes-apes/index.js

window.APES_UNITS = [
  {
    id: "apes-unit-1",
    name: "Unit 1: The Living World: Ecosystems",
    lessons: [
      "apes-topic-1-1", "apes-topic-1-2", "apes-topic-1-3", "apes-topic-1-4",
      "apes-topic-1-5", "apes-topic-1-6", "apes-topic-1-7", "apes-topic-1-8",
      "apes-topic-1-9", "apes-topic-1-10", "apes-topic-1-11",
    ],
  },
  {
    id: "apes-unit-2",
    name: "Unit 2: The Living World: Biodiversity",
    lessons: [
      "apes-topic-2-1", "apes-topic-2-2", "apes-topic-2-3", "apes-topic-2-4",
      "apes-topic-2-5", "apes-topic-2-6", "apes-topic-2-7",
    ],
  },
  {
    id: "apes-unit-3",
    name: "Unit 3: Populations",
    lessons: [
      "apes-topic-3-1", "apes-topic-3-2", "apes-topic-3-3", "apes-topic-3-4",
      "apes-topic-3-5", "apes-topic-3-6", "apes-topic-3-7", "apes-topic-3-8",
      "apes-topic-3-9",
    ],
  },
  {
    id: "apes-unit-4",
    name: "Unit 4: Earth Systems and Resources",
    lessons: [
      "apes-topic-4-1", "apes-topic-4-2", "apes-topic-4-3", "apes-topic-4-4",
      "apes-topic-4-5", "apes-topic-4-6", "apes-topic-4-7", "apes-topic-4-8",
      "apes-topic-4-9",
    ],
  },
  {
    id: "apes-unit-5",
    name: "Unit 5: Land and Water Use",
    lessons: [
      "apes-topic-5-1", "apes-topic-5-2", "apes-topic-5-3", "apes-topic-5-4",
      "apes-topic-5-5", "apes-topic-5-6", "apes-topic-5-7", "apes-topic-5-8",
      "apes-topic-5-9", "apes-topic-5-10", "apes-topic-5-11", "apes-topic-5-12",
      "apes-topic-5-13", "apes-topic-5-14", "apes-topic-5-15", "apes-topic-5-16",
      "apes-topic-5-17",
    ],
  },
  {
    id: "apes-unit-6",
    name: "Unit 6: Energy Resources and Consumption",
    lessons: [
      "apes-topic-6-1", "apes-topic-6-2", "apes-topic-6-3", "apes-topic-6-4",
      "apes-topic-6-5", "apes-topic-6-6", "apes-topic-6-7", "apes-topic-6-8",
      "apes-topic-6-9", "apes-topic-6-10", "apes-topic-6-11", "apes-topic-6-12",
      "apes-topic-6-13",
    ],
  },
  {
    id: "apes-unit-7",
    name: "Unit 7: Atmospheric Pollution",
    lessons: [
      "apes-topic-7-1", "apes-topic-7-2", "apes-topic-7-3", "apes-topic-7-4",
      "apes-topic-7-5", "apes-topic-7-6", "apes-topic-7-7", "apes-topic-7-8",
    ],
  },
  {
    id: "apes-unit-8",
    name: "Unit 8: Aquatic and Terrestrial Pollution",
    lessons: [
      "apes-topic-8-1", "apes-topic-8-2", "apes-topic-8-3", "apes-topic-8-4",
      "apes-topic-8-5", "apes-topic-8-6", "apes-topic-8-7", "apes-topic-8-8",
      "apes-topic-8-9", "apes-topic-8-10", "apes-topic-8-11", "apes-topic-8-12",
      "apes-topic-8-13", "apes-topic-8-14", "apes-topic-8-15",
    ],
  },
  {
    id: "apes-unit-9",
    name: "Unit 9: Global Change",
    lessons: [
      "apes-topic-9-1", "apes-topic-9-2", "apes-topic-9-3", "apes-topic-9-4",
      "apes-topic-9-5", "apes-topic-9-6", "apes-topic-9-7", "apes-topic-9-8",
      "apes-topic-9-9", "apes-topic-9-10",
    ],
  },
];
