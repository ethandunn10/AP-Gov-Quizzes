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
    name: "Unit 1: Foundations of American Democracy",
    lessons: [
      "topic-1-1", "topic-1-2", "topic-1-3", "topic-1-4", "topic-1-5",
      "topic-1-6", "topic-1-7", "topic-1-8", "topic-1-9",
    ],
  },
  {
    id: "unit-2",
    name: "Unit 2: Interactions Among Branches of Government",
    lessons: [
      "topic-2-1", "topic-2-2", "topic-2-3", "topic-2-4", "topic-2-5",
      "topic-2-6", "topic-2-7", "topic-2-8", "topic-2-9", "topic-2-10",
      "topic-2-11", "topic-2-12", "topic-2-13", "topic-2-14", "topic-2-15",
    ],
  },
  {
    id: "unit-3",
    name: "Unit 3: Civil Liberties and Civil Rights",
    lessons: [
      "topic-3-1", "topic-3-2", "topic-3-3", "topic-3-4", "topic-3-5",
      "topic-3-6", "topic-3-7", "topic-3-8", "topic-3-9", "topic-3-10",
      "topic-3-11", "topic-3-12", "topic-3-13",
    ],
  },
  {
    id: "unit-4",
    name: "Unit 4: American Political Ideologies and Beliefs",
    lessons: [
      "topic-4-1", "topic-4-2", "topic-4-3", "topic-4-4", "topic-4-5",
      "topic-4-6", "topic-4-7", "topic-4-8", "topic-4-9", "topic-4-10",
    ],
  },
  {
    id: "unit-5",
    name: "Unit 5: Political Participation",
    lessons: [
      "topic-5-1", "topic-5-2", "topic-5-3", "topic-5-4", "topic-5-5",
      "topic-5-6", "topic-5-7", "topic-5-8", "topic-5-9", "topic-5-10",
      "topic-5-11", "topic-5-12", "topic-5-13",
    ],
  },
];
