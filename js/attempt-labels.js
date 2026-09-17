// js/attempt-labels.js
// Turns a stored attempt/score id back into something displayable.
//
// js/progress.js deliberately stores only ids -- it has no idea what a
// lesson is called, and no dependency on the subject registries. Both
// js/history.js and js/insights.js need the same id -> {name, subject,
// href, icon} resolution, so it lives here once instead of twice.
//
// Depends on js/subjects.js being loaded first.

(function () {
  // Returns null when an id no longer resolves -- e.g. a lesson that was
  // removed from a registry after someone took it. Callers skip those
  // rather than rendering a broken row.
  function resolve(id, type) {
    if (type === "unit") {
      const found = window.AllAPSubjects.findUnit(id);
      if (!found) return null;
      return {
        id,
        type: "unit",
        name: found.unit.name,
        // The whole-unit quiz isn't a topic, so say so plainly.
        detail: "Whole-unit quiz",
        subjectId: found.subject.id,
        subjectName: found.subject.name,
        href: `quiz.html?unit=${encodeURIComponent(id)}&mode=unit`,
      };
    }
    const found = window.AllAPSubjects.findLesson(id);
    if (!found) return null;
    // Lesson topics are written like "Topic 1.3: Structures of Government".
    // Split so the page can show the short title big and the prefix small.
    const topic = found.lesson.topic || id;
    const colon = topic.indexOf(":");
    const prefix = colon > -1 ? topic.slice(0, colon).trim() : "";
    const title = colon > -1 ? topic.slice(colon + 1).trim() : topic;
    return {
      id,
      type: "lesson",
      name: title,
      detail: prefix,
      subjectId: found.subject.id,
      subjectName: found.subject.name,
      href: `quiz.html?week=${encodeURIComponent(id)}&mode=lesson`,
    };
  }

  // "Today", "Yesterday", then a plain date -- a full timestamp is more
  // precision than a study history needs.
  function relativeDay(iso) {
    const then = new Date(iso);
    if (isNaN(then.getTime())) return "";
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    const startOfThen = new Date(then);
    startOfThen.setHours(0, 0, 0, 0);
    const days = Math.round((startOfToday - startOfThen) / 86400000);
    if (days <= 0) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days} days ago`;
    return then.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  }

  // Shared banding, so a 72% means the same thing (and is the same color)
  // on the history list, the insights page and anywhere else.
  //   >= 90  mastered   | >= 70  solid | below  shaky
  function band(percent) {
    if (percent >= 0.9) return "mastered";
    if (percent >= 0.7) return "solid";
    return "shaky";
  }

  window.AllAPAttemptLabels = { resolve, relativeDay, band };
})();
