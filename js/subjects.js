// js/subjects.js
// The one place that knows the site has more than one subject.
//
// Each subject keeps its OWN registry globals so the two data sets never
// clobber each other:
//   AP Gov  quizzes/index.js      -> window.QUIZ_LIST
//           quizzes/units.js      -> window.UNITS
//   AP Bio  quizzes-bio/index.js  -> window.BIO_QUIZ_LIST
//           quizzes-bio/units.js  -> window.BIO_UNITS
//
// This file joins them into one subject-keyed object (window.SUBJECTS)
// and exposes lookups that take a bare lesson/unit id and work out which
// subject it belongs to. js/homepage.js, js/unit.js, js/quiz.js and
// js/recommendations.js go through here instead of reading QUIZ_LIST /
// UNITS directly, so adding a third subject later means adding one entry
// below and two data files -- no changes to the page scripts.
//
// Lesson and unit ids are globally unique (AP Bio's are all "bio-"
// prefixed), which is what lets a single id identify its own subject and
// what keeps per-lesson progress in js/progress.js from mixing subjects.
//
// Depends on the subject data files being loaded first.

(function () {
  // `dir` is the fallback folder for a lesson's data file, used when a
  // lesson entry doesn't carry its own `file` (AP Gov's entries don't).
  const DEFINITIONS = [
    {
      id: "ap-gov",
      name: "AP Government",
      tagline: "AP Gov Practice Quizzes",
      dir: "quizzes",
      lessonsGlobal: "QUIZ_LIST",
      unitsGlobal: "UNITS",
    },
    {
      id: "ap-bio",
      name: "AP Biology",
      tagline: "AP Bio Practice Quizzes",
      dir: "quizzes-bio",
      lessonsGlobal: "BIO_QUIZ_LIST",
      unitsGlobal: "BIO_UNITS",
    },
  ];

  // Only subjects whose data files actually loaded show up -- a page that
  // includes just one subject's registry still works.
  const subjects = DEFINITIONS.map((def) => ({
    id: def.id,
    name: def.name,
    tagline: def.tagline,
    dir: def.dir,
    lessons: window[def.lessonsGlobal] || [],
    units: window[def.unitsGlobal] || [],
  })).filter((s) => s.units.length > 0);

  function list() {
    return subjects;
  }

  function get(subjectId) {
    return subjects.find((s) => s.id === subjectId) || null;
  }

  // Returns { subject, lesson } for a lesson id, or null.
  function findLesson(lessonId) {
    for (const subject of subjects) {
      const lesson = subject.lessons.find((l) => l.id === lessonId);
      if (lesson) return { subject, lesson };
    }
    return null;
  }

  // Returns { subject, unit } for a unit id, or null.
  function findUnit(unitId) {
    for (const subject of subjects) {
      const unit = subject.units.find((u) => u.id === unitId);
      if (unit) return { subject, unit };
    }
    return null;
  }

  // Path of the data file that defines window.QUIZ_QUESTIONS for a
  // lesson. Uses the lesson's own `file` when it has one, otherwise
  // "<subject dir>/<lesson id>.js" (the original AP Gov convention).
  function lessonFile(lessonId) {
    const found = findLesson(lessonId);
    if (!found) return null;
    return found.lesson.file || `${found.subject.dir}/${lessonId}.js`;
  }

  window.AllAPSubjects = { list, get, findLesson, findUnit, lessonFile };
  window.SUBJECTS = subjects;
})();
