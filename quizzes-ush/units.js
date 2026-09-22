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
// which the "Unit 1" already says. Only Unit 1 is published; add the rest here
// as their topic files are written.
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
];
