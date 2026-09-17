// quizzes-bio/index.js
//
// Master list of every AP Biology lesson. Same shape and same role as
// quizzes/index.js (AP Gov), but published under a DIFFERENT global --
// window.BIO_QUIZ_LIST -- so the two subjects can be loaded on the same
// page without clobbering each other. js/subjects.js joins them into
// window.SUBJECTS, which is what unit.js / quiz.js / insights.js
// actually read.
//
// Lesson ids are prefixed "bio-" so they never collide with an AP Gov
// lesson id (both subjects have a "topic-1-1"). The prefix also keeps
// per-lesson progress in localStorage separate between subjects.
//
// Fields:
//   id    - globally unique lesson id, e.g. "bio-topic-1-1"
//   file  - data file to load, relative to the site root
//   date  - "YYYY-MM-DD", when the lesson was published (informational only)
//   topic - short human-readable topic name shown to students

window.BIO_QUIZ_LIST = [

  { id: "bio-topic-1-1", file: "quizzes-bio/topic-1-1.js", date: "2026-09-15", topic: "Topic 1.1: Structure of Water and Hydrogen Bonding" },
  { id: "bio-topic-1-2", file: "quizzes-bio/topic-1-2.js", date: "2026-09-15", topic: "Topic 1.2: Elements of Life" },
  { id: "bio-topic-1-3", file: "quizzes-bio/topic-1-3.js", date: "2026-09-15", topic: "Topic 1.3: Introduction to Biological Macromolecules" },
  { id: "bio-topic-1-4", file: "quizzes-bio/topic-1-4.js", date: "2026-09-15", topic: "Topic 1.4: Carbohydrates" },
  { id: "bio-topic-1-5", file: "quizzes-bio/topic-1-5.js", date: "2026-09-15", topic: "Topic 1.5: Lipids" },
  { id: "bio-topic-1-6", file: "quizzes-bio/topic-1-6.js", date: "2026-09-15", topic: "Topic 1.6: Nucleic Acids" },
  { id: "bio-topic-1-7", file: "quizzes-bio/topic-1-7.js", date: "2026-09-15", topic: "Topic 1.7: Proteins" },

  { id: "bio-topic-2-1", file: "quizzes-bio/topic-2-1.js", date: "2026-09-15", topic: "Topic 2.1: Cell Structure and Function" },
  { id: "bio-topic-2-2", file: "quizzes-bio/topic-2-2.js", date: "2026-09-15", topic: "Topic 2.2: Cell Size" },
  { id: "bio-topic-2-3", file: "quizzes-bio/topic-2-3.js", date: "2026-09-15", topic: "Topic 2.3: Plasma Membrane" },
  { id: "bio-topic-2-4", file: "quizzes-bio/topic-2-4.js", date: "2026-09-15", topic: "Topic 2.4: Membrane Permeability" },
  { id: "bio-topic-2-5", file: "quizzes-bio/topic-2-5.js", date: "2026-09-15", topic: "Topic 2.5: Membrane Transport" },
  { id: "bio-topic-2-6", file: "quizzes-bio/topic-2-6.js", date: "2026-09-15", topic: "Topic 2.6: Facilitated Diffusion" },
  { id: "bio-topic-2-7", file: "quizzes-bio/topic-2-7.js", date: "2026-09-15", topic: "Topic 2.7: Tonicity and Osmoregulation" },
  { id: "bio-topic-2-8", file: "quizzes-bio/topic-2-8.js", date: "2026-09-15", topic: "Topic 2.8: Mechanisms of Transport" },
  { id: "bio-topic-2-9", file: "quizzes-bio/topic-2-9.js", date: "2026-09-15", topic: "Topic 2.9: Cell Compartmentalization" },
  { id: "bio-topic-2-10", file: "quizzes-bio/topic-2-10.js", date: "2026-09-15", topic: "Topic 2.10: Origins of Cell Compartmentalization" },

  { id: "bio-topic-3-1", file: "quizzes-bio/topic-3-1.js", date: "2026-09-15", topic: "Topic 3.1: Enzymes" },
  { id: "bio-topic-3-2", file: "quizzes-bio/topic-3-2.js", date: "2026-09-15", topic: "Topic 3.2: Environmental Impacts on Enzyme Function" },
  { id: "bio-topic-3-3", file: "quizzes-bio/topic-3-3.js", date: "2026-09-15", topic: "Topic 3.3: Cellular Energy" },
  { id: "bio-topic-3-4", file: "quizzes-bio/topic-3-4.js", date: "2026-09-15", topic: "Topic 3.4: Photosynthesis" },
  { id: "bio-topic-3-5", file: "quizzes-bio/topic-3-5.js", date: "2026-09-15", topic: "Topic 3.5: Cellular Respiration" },

  { id: "bio-topic-4-1", file: "quizzes-bio/topic-4-1.js", date: "2026-09-15", topic: "Topic 4.1: Cell Communication" },
  { id: "bio-topic-4-2", file: "quizzes-bio/topic-4-2.js", date: "2026-09-15", topic: "Topic 4.2: Introduction to Signal Transduction" },
  { id: "bio-topic-4-3", file: "quizzes-bio/topic-4-3.js", date: "2026-09-15", topic: "Topic 4.3: Signal Transduction Pathways" },
  { id: "bio-topic-4-4", file: "quizzes-bio/topic-4-4.js", date: "2026-09-15", topic: "Topic 4.4: Feedback" },
  { id: "bio-topic-4-5", file: "quizzes-bio/topic-4-5.js", date: "2026-09-15", topic: "Topic 4.5: Cell Cycle" },
  { id: "bio-topic-4-6", file: "quizzes-bio/topic-4-6.js", date: "2026-09-15", topic: "Topic 4.6: Regulation of Cell Cycle" },

  { id: "bio-topic-5-1", file: "quizzes-bio/topic-5-1.js", date: "2026-09-15", topic: "Topic 5.1: Meiosis" },
  { id: "bio-topic-5-2", file: "quizzes-bio/topic-5-2.js", date: "2026-09-15", topic: "Topic 5.2: Meiosis and Genetic Diversity" },
  { id: "bio-topic-5-3", file: "quizzes-bio/topic-5-3.js", date: "2026-09-15", topic: "Topic 5.3: Mendelian Genetics" },
  { id: "bio-topic-5-4", file: "quizzes-bio/topic-5-4.js", date: "2026-09-15", topic: "Topic 5.4: Non-Mendelian Genetics" },
  { id: "bio-topic-5-5", file: "quizzes-bio/topic-5-5.js", date: "2026-09-15", topic: "Topic 5.5: Environmental Effects on Phenotype" },

  { id: "bio-topic-6-1", file: "quizzes-bio/topic-6-1.js", date: "2026-09-15", topic: "Topic 6.1: DNA and RNA Structure" },
  { id: "bio-topic-6-2", file: "quizzes-bio/topic-6-2.js", date: "2026-09-15", topic: "Topic 6.2: DNA Replication" },
  { id: "bio-topic-6-3", file: "quizzes-bio/topic-6-3.js", date: "2026-09-15", topic: "Topic 6.3: Transcription and RNA Processing" },
  { id: "bio-topic-6-4", file: "quizzes-bio/topic-6-4.js", date: "2026-09-15", topic: "Topic 6.4: Translation" },
  { id: "bio-topic-6-5", file: "quizzes-bio/topic-6-5.js", date: "2026-09-15", topic: "Topic 6.5: Regulation of Gene Expression" },
  { id: "bio-topic-6-6", file: "quizzes-bio/topic-6-6.js", date: "2026-09-15", topic: "Topic 6.6: Gene Expression and Cell Specialization" },
  { id: "bio-topic-6-7", file: "quizzes-bio/topic-6-7.js", date: "2026-09-15", topic: "Topic 6.7: Mutations" },
  { id: "bio-topic-6-8", file: "quizzes-bio/topic-6-8.js", date: "2026-09-15", topic: "Topic 6.8: Biotechnology" },

  { id: "bio-topic-7-1", file: "quizzes-bio/topic-7-1.js", date: "2026-09-15", topic: "Topic 7.1: Introduction to Natural Selection" },
  { id: "bio-topic-7-2", file: "quizzes-bio/topic-7-2.js", date: "2026-09-15", topic: "Topic 7.2: Natural Selection" },
  { id: "bio-topic-7-3", file: "quizzes-bio/topic-7-3.js", date: "2026-09-15", topic: "Topic 7.3: Artificial Selection" },
  { id: "bio-topic-7-4", file: "quizzes-bio/topic-7-4.js", date: "2026-09-15", topic: "Topic 7.4: Population Genetics" },
  { id: "bio-topic-7-5", file: "quizzes-bio/topic-7-5.js", date: "2026-09-15", topic: "Topic 7.5: Hardy-Weinberg Equilibrium" },
  { id: "bio-topic-7-6", file: "quizzes-bio/topic-7-6.js", date: "2026-09-15", topic: "Topic 7.6: Evidence of Evolution" },
  { id: "bio-topic-7-7", file: "quizzes-bio/topic-7-7.js", date: "2026-09-15", topic: "Topic 7.7: Common Ancestry" },
  { id: "bio-topic-7-8", file: "quizzes-bio/topic-7-8.js", date: "2026-09-15", topic: "Topic 7.8: Continuing Evolution" },
  { id: "bio-topic-7-9", file: "quizzes-bio/topic-7-9.js", date: "2026-09-15", topic: "Topic 7.9: Phylogeny" },
  { id: "bio-topic-7-10", file: "quizzes-bio/topic-7-10.js", date: "2026-09-15", topic: "Topic 7.10: Speciation" },
  { id: "bio-topic-7-11", file: "quizzes-bio/topic-7-11.js", date: "2026-09-15", topic: "Topic 7.11: Variations in Populations" },
  { id: "bio-topic-7-12", file: "quizzes-bio/topic-7-12.js", date: "2026-09-15", topic: "Topic 7.12: Origins of Life on Earth" },

  { id: "bio-topic-8-1", file: "quizzes-bio/topic-8-1.js", date: "2026-09-15", topic: "Topic 8.1: Responses to the Environment" },
  { id: "bio-topic-8-2", file: "quizzes-bio/topic-8-2.js", date: "2026-09-15", topic: "Topic 8.2: Energy Flow Through Ecosystems" },
  { id: "bio-topic-8-3", file: "quizzes-bio/topic-8-3.js", date: "2026-09-15", topic: "Topic 8.3: Population Ecology" },
  { id: "bio-topic-8-4", file: "quizzes-bio/topic-8-4.js", date: "2026-09-15", topic: "Topic 8.4: Effect of Density on Populations" },
  { id: "bio-topic-8-5", file: "quizzes-bio/topic-8-5.js", date: "2026-09-15", topic: "Topic 8.5: Community Ecology" },
  { id: "bio-topic-8-6", file: "quizzes-bio/topic-8-6.js", date: "2026-09-15", topic: "Topic 8.6: Biodiversity" },
  { id: "bio-topic-8-7", file: "quizzes-bio/topic-8-7.js", date: "2026-09-15", topic: "Topic 8.7: Disruptions in Ecosystems" },
];
