// quizzes-chem/units.js
//
// Groups AP Chemistry lessons (see quizzes-chem/index.js) into units. Same
// shape and same role as the other subjects' units.js files, but published
// under window.CHEM_UNITS so it does not overwrite another subject's units.
//
// Unit ids are prefixed "chem-" so they never collide with another subject's
// unit id (every subject has a "unit-1").
//
// The nine units and their order follow the College Board CED.
//
// Fields:
//   id      - used in URLs, e.g. "chem-unit-1" -> unit.html?unit=chem-unit-1
//   name    - short human-readable name shown to students
//   lessons - ordered array of lesson ids from quizzes-chem/index.js

window.CHEM_UNITS = [
  {
    id: "chem-unit-1",
    name: "Unit 1: Atomic Structure and Properties",
    lessons: [
      "chem-topic-1-1", "chem-topic-1-2", "chem-topic-1-3", "chem-topic-1-4",
      "chem-topic-1-5", "chem-topic-1-6", "chem-topic-1-7", "chem-topic-1-8",
    ],
  },
  {
    id: "chem-unit-2",
    name: "Unit 2: Compound Structure and Properties",
    lessons: [
      "chem-topic-2-1", "chem-topic-2-2", "chem-topic-2-3", "chem-topic-2-4",
      "chem-topic-2-5", "chem-topic-2-6", "chem-topic-2-7",
    ],
  },
  {
    id: "chem-unit-3",
    name: "Unit 3: Properties of Substances and Mixtures",
    lessons: [
      "chem-topic-3-1", "chem-topic-3-2", "chem-topic-3-3", "chem-topic-3-4",
      "chem-topic-3-5", "chem-topic-3-6", "chem-topic-3-7", "chem-topic-3-8",
      "chem-topic-3-9", "chem-topic-3-10", "chem-topic-3-11", "chem-topic-3-12",
      "chem-topic-3-13",
    ],
  },
  {
    id: "chem-unit-4",
    name: "Unit 4: Chemical Reactions",
    lessons: [
      "chem-topic-4-1", "chem-topic-4-2", "chem-topic-4-3", "chem-topic-4-4",
      "chem-topic-4-5", "chem-topic-4-6", "chem-topic-4-7", "chem-topic-4-8",
      "chem-topic-4-9",
    ],
  },
  {
    id: "chem-unit-5",
    name: "Unit 5: Kinetics",
    lessons: [
      "chem-topic-5-1", "chem-topic-5-2", "chem-topic-5-3", "chem-topic-5-4",
      "chem-topic-5-5", "chem-topic-5-6", "chem-topic-5-7", "chem-topic-5-8",
      "chem-topic-5-9", "chem-topic-5-10", "chem-topic-5-11",
    ],
  },
  {
    id: "chem-unit-6",
    name: "Unit 6: Thermochemistry",
    lessons: [
      "chem-topic-6-1", "chem-topic-6-2", "chem-topic-6-3", "chem-topic-6-4",
      "chem-topic-6-5", "chem-topic-6-6", "chem-topic-6-7", "chem-topic-6-8",
      "chem-topic-6-9",
    ],
  },
  {
    id: "chem-unit-7",
    name: "Unit 7: Equilibrium",
    lessons: [
      "chem-topic-7-1", "chem-topic-7-2", "chem-topic-7-3", "chem-topic-7-4",
      "chem-topic-7-5", "chem-topic-7-6", "chem-topic-7-7", "chem-topic-7-8",
      "chem-topic-7-9", "chem-topic-7-10", "chem-topic-7-11", "chem-topic-7-12",
    ],
  },
  {
    id: "chem-unit-8",
    name: "Unit 8: Acids and Bases",
    lessons: [
      "chem-topic-8-1", "chem-topic-8-2", "chem-topic-8-3", "chem-topic-8-4",
      "chem-topic-8-5", "chem-topic-8-6", "chem-topic-8-7", "chem-topic-8-8",
      "chem-topic-8-9", "chem-topic-8-10", "chem-topic-8-11",
    ],
  },
  {
    id: "chem-unit-9",
    name: "Unit 9: Thermodynamics and Electrochemistry",
    lessons: [
      "chem-topic-9-1", "chem-topic-9-2", "chem-topic-9-3", "chem-topic-9-4",
      "chem-topic-9-5", "chem-topic-9-6", "chem-topic-9-7", "chem-topic-9-8",
      "chem-topic-9-9", "chem-topic-9-10", "chem-topic-9-11",
    ],
  },
];
