// quizzes-psych/units.js
//
// Groups AP Psychology lessons (see quizzes-psych/index.js) into units.
// Same shape and same role as quizzes/units.js (AP Gov), but published
// under window.PSYCH_UNITS so it does not overwrite another subject's
// units global.
//
// Unit ids are prefixed "psych-" so they never collide with another
// subject's unit id (every subject has a "unit-1").
//
// The five units are the CED's, revised for 2024-25. Unit names are the
// College Board's own.
//
// Fields:
//   id      - used in URLs, e.g. "psych-unit-1" -> unit.html?unit=psych-unit-1
//   name    - short human-readable name shown to students
//   lessons - ordered array of lesson ids from quizzes-psych/index.js

window.PSYCH_UNITS = [
  {
    id: "psych-unit-1",
    name: "Unit 1: Biological Bases of Behavior",
    lessons: [
      "psych-topic-1-1", "psych-topic-1-2", "psych-topic-1-3",
      "psych-topic-1-4", "psych-topic-1-5", "psych-topic-1-6",
    ],
  },
  {
    id: "psych-unit-2",
    name: "Unit 2: Cognition",
    lessons: [
      "psych-topic-2-1", "psych-topic-2-2", "psych-topic-2-3", "psych-topic-2-4",
      "psych-topic-2-5", "psych-topic-2-6", "psych-topic-2-7", "psych-topic-2-8",
    ],
  },
  {
    id: "psych-unit-3",
    name: "Unit 3: Development and Learning",
    lessons: [
      "psych-topic-3-1", "psych-topic-3-2", "psych-topic-3-3", "psych-topic-3-4",
      "psych-topic-3-5", "psych-topic-3-6", "psych-topic-3-7", "psych-topic-3-8",
      "psych-topic-3-9",
    ],
  },
  {
    id: "psych-unit-4",
    name: "Unit 4: Social Psychology and Personality",
    lessons: [
      "psych-topic-4-1", "psych-topic-4-2", "psych-topic-4-3", "psych-topic-4-4",
      "psych-topic-4-5", "psych-topic-4-6", "psych-topic-4-7",
    ],
  },
  {
    id: "psych-unit-5",
    name: "Unit 5: Mental and Physical Health",
    lessons: [
      "psych-topic-5-1", "psych-topic-5-2", "psych-topic-5-3",
      "psych-topic-5-4", "psych-topic-5-5",
    ],
  },
];
