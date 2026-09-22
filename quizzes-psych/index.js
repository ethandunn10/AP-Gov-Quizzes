// quizzes-psych/index.js
//
// Master list of every AP Psychology lesson. Same shape and same role as
// quizzes/index.js (AP Gov), quizzes-bio/index.js (AP Bio) and
// quizzes-ush/index.js (APUSH), but published under its OWN global --
// window.PSYCH_QUIZ_LIST -- so every subject can load on the same page
// without clobbering the others. js/subjects.js joins them into
// window.SUBJECTS, which is what unit.js / quiz.js / insights.js read.
//
// Lesson ids are prefixed "psych-" so they never collide with another
// subject's lesson id (every subject has a "topic-1-1"). The prefix also
// keeps per-lesson progress in localStorage separate between subjects.
//
// Follows the College Board CED revised for 2024-25 (Course Framework
// V.1, (c) 2024): 5 units, 35 topics. Research methods are not a unit of
// their own in this framework -- the science practices are assessed
// inside the content topics, so they are woven through these questions
// rather than split off.
//
// Fields:
//   id    - globally unique lesson id, e.g. "psych-topic-1-1"
//   file  - data file to load, relative to the site root
//   date  - "YYYY-MM-DD", when the lesson was published (informational only)
//   topic - short human-readable topic name shown to students

window.PSYCH_QUIZ_LIST = [

  { id: "psych-topic-1-1", file: "quizzes-psych/topic-1-1.js", date: "2026-09-21", topic: "Topic 1.1: Interaction of Heredity and Environment" },
  { id: "psych-topic-1-2", file: "quizzes-psych/topic-1-2.js", date: "2026-09-21", topic: "Topic 1.2: Overview of the Nervous System" },
  { id: "psych-topic-1-3", file: "quizzes-psych/topic-1-3.js", date: "2026-09-21", topic: "Topic 1.3: The Neuron and Neural Firing" },
  { id: "psych-topic-1-4", file: "quizzes-psych/topic-1-4.js", date: "2026-09-21", topic: "Topic 1.4: The Brain" },
  { id: "psych-topic-1-5", file: "quizzes-psych/topic-1-5.js", date: "2026-09-21", topic: "Topic 1.5: Sleep" },
  { id: "psych-topic-1-6", file: "quizzes-psych/topic-1-6.js", date: "2026-09-21", topic: "Topic 1.6: Sensation" },

  { id: "psych-topic-2-1", file: "quizzes-psych/topic-2-1.js", date: "2026-09-21", topic: "Topic 2.1: Perception" },
  { id: "psych-topic-2-2", file: "quizzes-psych/topic-2-2.js", date: "2026-09-21", topic: "Topic 2.2: Thinking, Problem-Solving, Judgments, and Decision-Making" },
  { id: "psych-topic-2-3", file: "quizzes-psych/topic-2-3.js", date: "2026-09-21", topic: "Topic 2.3: Introduction to Memory" },
  { id: "psych-topic-2-4", file: "quizzes-psych/topic-2-4.js", date: "2026-09-21", topic: "Topic 2.4: Encoding Memories" },
  { id: "psych-topic-2-5", file: "quizzes-psych/topic-2-5.js", date: "2026-09-21", topic: "Topic 2.5: Storing Memories" },
  { id: "psych-topic-2-6", file: "quizzes-psych/topic-2-6.js", date: "2026-09-21", topic: "Topic 2.6: Retrieving Memories" },
  { id: "psych-topic-2-7", file: "quizzes-psych/topic-2-7.js", date: "2026-09-21", topic: "Topic 2.7: Forgetting and Other Memory Challenges" },
  { id: "psych-topic-2-8", file: "quizzes-psych/topic-2-8.js", date: "2026-09-21", topic: "Topic 2.8: Intelligence and Achievement" },

  { id: "psych-topic-3-1", file: "quizzes-psych/topic-3-1.js", date: "2026-09-21", topic: "Topic 3.1: Themes and Methods in Developmental Psychology" },
  { id: "psych-topic-3-2", file: "quizzes-psych/topic-3-2.js", date: "2026-09-21", topic: "Topic 3.2: Physical Development Across the Lifespan" },
  { id: "psych-topic-3-3", file: "quizzes-psych/topic-3-3.js", date: "2026-09-21", topic: "Topic 3.3: Gender and Sexual Orientation" },
  { id: "psych-topic-3-4", file: "quizzes-psych/topic-3-4.js", date: "2026-09-21", topic: "Topic 3.4: Cognitive Development Across the Lifespan" },
  { id: "psych-topic-3-5", file: "quizzes-psych/topic-3-5.js", date: "2026-09-21", topic: "Topic 3.5: Communication and Language Development" },
  { id: "psych-topic-3-6", file: "quizzes-psych/topic-3-6.js", date: "2026-09-21", topic: "Topic 3.6: Social-Emotional Development Across the Lifespan" },
  { id: "psych-topic-3-7", file: "quizzes-psych/topic-3-7.js", date: "2026-09-21", topic: "Topic 3.7: Classical Conditioning" },
  { id: "psych-topic-3-8", file: "quizzes-psych/topic-3-8.js", date: "2026-09-21", topic: "Topic 3.8: Operant Conditioning" },
  { id: "psych-topic-3-9", file: "quizzes-psych/topic-3-9.js", date: "2026-09-21", topic: "Topic 3.9: Social, Cognitive, and Neurological Factors in Learning" },

  { id: "psych-topic-4-1", file: "quizzes-psych/topic-4-1.js", date: "2026-09-21", topic: "Topic 4.1: Attribution Theory and Person Perception" },
  { id: "psych-topic-4-2", file: "quizzes-psych/topic-4-2.js", date: "2026-09-21", topic: "Topic 4.2: Attitude Formation and Attitude Change" },
  { id: "psych-topic-4-3", file: "quizzes-psych/topic-4-3.js", date: "2026-09-21", topic: "Topic 4.3: Psychology of Social Situations" },
  { id: "psych-topic-4-4", file: "quizzes-psych/topic-4-4.js", date: "2026-09-21", topic: "Topic 4.4: Psychodynamic and Humanistic Theories of Personality" },
  { id: "psych-topic-4-5", file: "quizzes-psych/topic-4-5.js", date: "2026-09-21", topic: "Topic 4.5: Social-Cognitive and Trait Theories of Personality" },
  { id: "psych-topic-4-6", file: "quizzes-psych/topic-4-6.js", date: "2026-09-21", topic: "Topic 4.6: Motivation" },
  { id: "psych-topic-4-7", file: "quizzes-psych/topic-4-7.js", date: "2026-09-21", topic: "Topic 4.7: Emotion" },

  { id: "psych-topic-5-1", file: "quizzes-psych/topic-5-1.js", date: "2026-09-21", topic: "Topic 5.1: Introduction to Health Psychology" },
  { id: "psych-topic-5-2", file: "quizzes-psych/topic-5-2.js", date: "2026-09-21", topic: "Topic 5.2: Positive Psychology" },
  { id: "psych-topic-5-3", file: "quizzes-psych/topic-5-3.js", date: "2026-09-21", topic: "Topic 5.3: Explaining and Classifying Psychological Disorders" },
  { id: "psych-topic-5-4", file: "quizzes-psych/topic-5-4.js", date: "2026-09-21", topic: "Topic 5.4: Selection of Categories of Psychological Disorders" },
  { id: "psych-topic-5-5", file: "quizzes-psych/topic-5-5.js", date: "2026-09-21", topic: "Topic 5.5: Treatment of Psychological Disorders" },

];
