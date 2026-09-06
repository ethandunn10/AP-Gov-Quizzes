// quizzes/units.js
//
// Groups lessons (see quizzes/index.js) into units. To add a new unit,
// add ONE entry here referencing lesson ids already registered in
// quizzes/index.js -- index.html and unit.html both read this list, so
// nothing else needs to change.
//
// Fields:
//   id      - used in URLs, e.g. "unit-1" -> unit.html?unit=unit-1
//   name    - short human-readable name shown to students
//   lessons - ordered array of lesson ids from quizzes/index.js

window.UNITS = [
  {
    id: "unit-1",
    name: "Unit 1",
    lessons: [
      "topic-1-1", "topic-1-2", "topic-1-3", "topic-1-4", "topic-1-5",
      "topic-1-6", "topic-1-7", "topic-1-8", "topic-1-9",
    ],
  },
];
