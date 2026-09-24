// quizzes-chem/index.js
//
// Master list of every AP Chemistry lesson. Same shape and same role as
// quizzes/index.js (AP Gov), quizzes-bio/index.js, quizzes-ush/index.js and
// quizzes-psych/index.js, but published under its OWN global --
// window.CHEM_QUIZ_LIST -- so every subject can load on the same page without
// clobbering the others. js/subjects.js joins them into window.SUBJECTS.
//
// Lesson ids are prefixed "chem-" so they never collide with another
// subject's lesson id (several subjects have a "topic-1-1"). The prefix also
// keeps per-lesson progress in localStorage separate between subjects.
//
// AP Chemistry follows the College Board CED: 9 units, 91 topics.
//
// Chemical formulas use Unicode subscripts and superscripts (H₂O, SO₄²⁻)
// rather than HTML tags -- js/quiz.js renders question text with
// textContent, so markup would show up literally on screen.
//
// Fields:
//   id    - globally unique lesson id, e.g. "chem-topic-1-1"
//   file  - data file to load, relative to the site root
//   date  - "YYYY-MM-DD", when the lesson was published (informational only)
//   topic - short human-readable topic name shown to students

window.CHEM_QUIZ_LIST = [


  { id: "chem-topic-1-1", file: "quizzes-chem/topic-1-1.js", date: "2026-09-22", topic: "Topic 1.1: Moles and Molar Mass" },
  { id: "chem-topic-1-2", file: "quizzes-chem/topic-1-2.js", date: "2026-09-22", topic: "Topic 1.2: Mass Spectra of Elements" },
  { id: "chem-topic-1-3", file: "quizzes-chem/topic-1-3.js", date: "2026-09-22", topic: "Topic 1.3: Elemental Composition of Pure Substances" },
  { id: "chem-topic-1-4", file: "quizzes-chem/topic-1-4.js", date: "2026-09-22", topic: "Topic 1.4: Composition of Mixtures" },
  { id: "chem-topic-1-5", file: "quizzes-chem/topic-1-5.js", date: "2026-09-22", topic: "Topic 1.5: Atomic Structure and Electron Configuration" },
  { id: "chem-topic-1-6", file: "quizzes-chem/topic-1-6.js", date: "2026-09-22", topic: "Topic 1.6: Photoelectron Spectroscopy" },
  { id: "chem-topic-1-7", file: "quizzes-chem/topic-1-7.js", date: "2026-09-22", topic: "Topic 1.7: Periodic Trends" },
  { id: "chem-topic-1-8", file: "quizzes-chem/topic-1-8.js", date: "2026-09-22", topic: "Topic 1.8: Valence Electrons and Ionic Compounds" },

  { id: "chem-topic-2-1", file: "quizzes-chem/topic-2-1.js", date: "2026-09-22", topic: "Topic 2.1: Types of Chemical Bonds" },
  { id: "chem-topic-2-2", file: "quizzes-chem/topic-2-2.js", date: "2026-09-22", topic: "Topic 2.2: Intramolecular Force and Potential Energy" },
  { id: "chem-topic-2-3", file: "quizzes-chem/topic-2-3.js", date: "2026-09-22", topic: "Topic 2.3: Structure of Ionic Solids" },
  { id: "chem-topic-2-4", file: "quizzes-chem/topic-2-4.js", date: "2026-09-22", topic: "Topic 2.4: Structure of Metals and Alloys" },
  { id: "chem-topic-2-5", file: "quizzes-chem/topic-2-5.js", date: "2026-09-22", topic: "Topic 2.5: Lewis Diagrams" },
  { id: "chem-topic-2-6", file: "quizzes-chem/topic-2-6.js", date: "2026-09-22", topic: "Topic 2.6: Resonance and Formal Charge" },
  { id: "chem-topic-2-7", file: "quizzes-chem/topic-2-7.js", date: "2026-09-22", topic: "Topic 2.7: VSEPR and Hybridization" },

  { id: "chem-topic-3-1", file: "quizzes-chem/topic-3-1.js", date: "2026-09-22", topic: "Topic 3.1: Intermolecular and Interparticle Forces" },
  { id: "chem-topic-3-2", file: "quizzes-chem/topic-3-2.js", date: "2026-09-22", topic: "Topic 3.2: Properties of Solids" },
  { id: "chem-topic-3-3", file: "quizzes-chem/topic-3-3.js", date: "2026-09-22", topic: "Topic 3.3: Solids, Liquids, and Gases" },
  { id: "chem-topic-3-4", file: "quizzes-chem/topic-3-4.js", date: "2026-09-22", topic: "Topic 3.4: Ideal Gas Law" },
  { id: "chem-topic-3-5", file: "quizzes-chem/topic-3-5.js", date: "2026-09-22", topic: "Topic 3.5: Kinetic Molecular Theory" },
  { id: "chem-topic-3-6", file: "quizzes-chem/topic-3-6.js", date: "2026-09-22", topic: "Topic 3.6: Deviation from Ideal Gas Law" },
  { id: "chem-topic-3-7", file: "quizzes-chem/topic-3-7.js", date: "2026-09-22", topic: "Topic 3.7: Solutions and Mixtures" },
  { id: "chem-topic-3-8", file: "quizzes-chem/topic-3-8.js", date: "2026-09-22", topic: "Topic 3.8: Representations of Solutions" },
  { id: "chem-topic-3-9", file: "quizzes-chem/topic-3-9.js", date: "2026-09-22", topic: "Topic 3.9: Separation of Solutions and Mixtures" },
  { id: "chem-topic-3-10", file: "quizzes-chem/topic-3-10.js", date: "2026-09-22", topic: "Topic 3.10: Solubility" },
  { id: "chem-topic-3-11", file: "quizzes-chem/topic-3-11.js", date: "2026-09-22", topic: "Topic 3.11: Spectroscopy and the Electromagnetic Spectrum" },
  { id: "chem-topic-3-12", file: "quizzes-chem/topic-3-12.js", date: "2026-09-22", topic: "Topic 3.12: Properties of Photons" },
  { id: "chem-topic-3-13", file: "quizzes-chem/topic-3-13.js", date: "2026-09-22", topic: "Topic 3.13: Beer-Lambert Law" },

  { id: "chem-topic-4-1", file: "quizzes-chem/topic-4-1.js", date: "2026-09-22", topic: "Topic 4.1: Introduction to Reactions" },
  { id: "chem-topic-4-2", file: "quizzes-chem/topic-4-2.js", date: "2026-09-22", topic: "Topic 4.2: Net Ionic Equations" },
  { id: "chem-topic-4-3", file: "quizzes-chem/topic-4-3.js", date: "2026-09-22", topic: "Topic 4.3: Representations of Reactions" },
  { id: "chem-topic-4-4", file: "quizzes-chem/topic-4-4.js", date: "2026-09-22", topic: "Topic 4.4: Physical and Chemical Changes" },
  { id: "chem-topic-4-5", file: "quizzes-chem/topic-4-5.js", date: "2026-09-22", topic: "Topic 4.5: Stoichiometry" },
  { id: "chem-topic-4-6", file: "quizzes-chem/topic-4-6.js", date: "2026-09-22", topic: "Topic 4.6: Introduction to Titration" },
  { id: "chem-topic-4-7", file: "quizzes-chem/topic-4-7.js", date: "2026-09-22", topic: "Topic 4.7: Types of Chemical Reactions" },
  { id: "chem-topic-4-8", file: "quizzes-chem/topic-4-8.js", date: "2026-09-22", topic: "Topic 4.8: Introduction to Acid-Base Reactions" },
  { id: "chem-topic-4-9", file: "quizzes-chem/topic-4-9.js", date: "2026-09-22", topic: "Topic 4.9: Oxidation-Reduction (Redox) Reactions" },

  { id: "chem-topic-5-1", file: "quizzes-chem/topic-5-1.js", date: "2026-09-22", topic: "Topic 5.1: Reaction Rates" },
  { id: "chem-topic-5-2", file: "quizzes-chem/topic-5-2.js", date: "2026-09-22", topic: "Topic 5.2: Introduction to Rate Law" },
  { id: "chem-topic-5-3", file: "quizzes-chem/topic-5-3.js", date: "2026-09-22", topic: "Topic 5.3: Concentration Changes Over Time" },
  { id: "chem-topic-5-4", file: "quizzes-chem/topic-5-4.js", date: "2026-09-22", topic: "Topic 5.4: Elementary Reactions" },
  { id: "chem-topic-5-5", file: "quizzes-chem/topic-5-5.js", date: "2026-09-22", topic: "Topic 5.5: Collision Model" },
  { id: "chem-topic-5-6", file: "quizzes-chem/topic-5-6.js", date: "2026-09-22", topic: "Topic 5.6: Reaction Energy Profile" },
  { id: "chem-topic-5-7", file: "quizzes-chem/topic-5-7.js", date: "2026-09-22", topic: "Topic 5.7: Introduction to Reaction Mechanisms" },
  { id: "chem-topic-5-8", file: "quizzes-chem/topic-5-8.js", date: "2026-09-22", topic: "Topic 5.8: Reaction Mechanism and Rate Law" },
  { id: "chem-topic-5-9", file: "quizzes-chem/topic-5-9.js", date: "2026-09-22", topic: "Topic 5.9: Pre-Equilibrium Approximation" },
  { id: "chem-topic-5-10", file: "quizzes-chem/topic-5-10.js", date: "2026-09-22", topic: "Topic 5.10: Multistep Reaction Energy Profile" },
  { id: "chem-topic-5-11", file: "quizzes-chem/topic-5-11.js", date: "2026-09-22", topic: "Topic 5.11: Catalysis" },

  { id: "chem-topic-6-1", file: "quizzes-chem/topic-6-1.js", date: "2026-09-22", topic: "Topic 6.1: Endothermic and Exothermic Processes" },
  { id: "chem-topic-6-2", file: "quizzes-chem/topic-6-2.js", date: "2026-09-22", topic: "Topic 6.2: Energy Diagrams" },
  { id: "chem-topic-6-3", file: "quizzes-chem/topic-6-3.js", date: "2026-09-22", topic: "Topic 6.3: Heat Transfer and Thermal Equilibrium" },
  { id: "chem-topic-6-4", file: "quizzes-chem/topic-6-4.js", date: "2026-09-22", topic: "Topic 6.4: Heat Capacity and Calorimetry" },
  { id: "chem-topic-6-5", file: "quizzes-chem/topic-6-5.js", date: "2026-09-22", topic: "Topic 6.5: Energy of Phase Changes" },
  { id: "chem-topic-6-6", file: "quizzes-chem/topic-6-6.js", date: "2026-09-22", topic: "Topic 6.6: Introduction to Enthalpy of Reaction" },
  { id: "chem-topic-6-7", file: "quizzes-chem/topic-6-7.js", date: "2026-09-22", topic: "Topic 6.7: Bond Enthalpies" },
  { id: "chem-topic-6-8", file: "quizzes-chem/topic-6-8.js", date: "2026-09-22", topic: "Topic 6.8: Enthalpy of Formation" },
  { id: "chem-topic-6-9", file: "quizzes-chem/topic-6-9.js", date: "2026-09-22", topic: "Topic 6.9: Hess's Law" },

  { id: "chem-topic-7-1", file: "quizzes-chem/topic-7-1.js", date: "2026-09-22", topic: "Topic 7.1: Introduction to Equilibrium" },
  { id: "chem-topic-7-2", file: "quizzes-chem/topic-7-2.js", date: "2026-09-22", topic: "Topic 7.2: Direction of Reversible Reactions" },
  { id: "chem-topic-7-3", file: "quizzes-chem/topic-7-3.js", date: "2026-09-22", topic: "Topic 7.3: Reaction Quotient and Equilibrium Constant" },
  { id: "chem-topic-7-4", file: "quizzes-chem/topic-7-4.js", date: "2026-09-22", topic: "Topic 7.4: Calculating the Equilibrium Constant" },
  { id: "chem-topic-7-5", file: "quizzes-chem/topic-7-5.js", date: "2026-09-22", topic: "Topic 7.5: Magnitude of the Equilibrium Constant" },
  { id: "chem-topic-7-6", file: "quizzes-chem/topic-7-6.js", date: "2026-09-22", topic: "Topic 7.6: Properties of the Equilibrium Constant" },
  { id: "chem-topic-7-7", file: "quizzes-chem/topic-7-7.js", date: "2026-09-22", topic: "Topic 7.7: Calculating Equilibrium Concentrations" },
  { id: "chem-topic-7-8", file: "quizzes-chem/topic-7-8.js", date: "2026-09-22", topic: "Topic 7.8: Representations of Equilibrium" },
  { id: "chem-topic-7-9", file: "quizzes-chem/topic-7-9.js", date: "2026-09-22", topic: "Topic 7.9: Introduction to Le Chatelier's Principle" },
  { id: "chem-topic-7-10", file: "quizzes-chem/topic-7-10.js", date: "2026-09-22", topic: "Topic 7.10: Reaction Quotient and Le Chatelier's Principle" },
  { id: "chem-topic-7-11", file: "quizzes-chem/topic-7-11.js", date: "2026-09-22", topic: "Topic 7.11: Introduction to Solubility Equilibria" },
  { id: "chem-topic-7-12", file: "quizzes-chem/topic-7-12.js", date: "2026-09-22", topic: "Topic 7.12: Common-Ion Effect" },

  { id: "chem-topic-8-1", file: "quizzes-chem/topic-8-1.js", date: "2026-09-22", topic: "Topic 8.1: Introduction to Acids and Bases" },
  { id: "chem-topic-8-2", file: "quizzes-chem/topic-8-2.js", date: "2026-09-22", topic: "Topic 8.2: pH and pOH of Strong Acids and Bases" },
  { id: "chem-topic-8-3", file: "quizzes-chem/topic-8-3.js", date: "2026-09-22", topic: "Topic 8.3: Weak Acid and Base Equilibria" },
  { id: "chem-topic-8-4", file: "quizzes-chem/topic-8-4.js", date: "2026-09-22", topic: "Topic 8.4: Acid-Base Reactions and Buffers" },
  { id: "chem-topic-8-5", file: "quizzes-chem/topic-8-5.js", date: "2026-09-22", topic: "Topic 8.5: Acid-Base Titrations" },
  { id: "chem-topic-8-6", file: "quizzes-chem/topic-8-6.js", date: "2026-09-22", topic: "Topic 8.6: Molecular Structure of Acids and Bases" },
  { id: "chem-topic-8-7", file: "quizzes-chem/topic-8-7.js", date: "2026-09-22", topic: "Topic 8.7: pH and pKa" },
  { id: "chem-topic-8-8", file: "quizzes-chem/topic-8-8.js", date: "2026-09-22", topic: "Topic 8.8: Properties of Buffers" },
  { id: "chem-topic-8-9", file: "quizzes-chem/topic-8-9.js", date: "2026-09-22", topic: "Topic 8.9: Henderson-Hasselbalch Equation" },
  { id: "chem-topic-8-10", file: "quizzes-chem/topic-8-10.js", date: "2026-09-22", topic: "Topic 8.10: Buffer Capacity" },
  { id: "chem-topic-8-11", file: "quizzes-chem/topic-8-11.js", date: "2026-09-22", topic: "Topic 8.11: pH and Solubility" },

  { id: "chem-topic-9-1", file: "quizzes-chem/topic-9-1.js", date: "2026-09-22", topic: "Topic 9.1: Introduction to Entropy" },
  { id: "chem-topic-9-2", file: "quizzes-chem/topic-9-2.js", date: "2026-09-22", topic: "Topic 9.2: Absolute Entropy and Entropy Change" },
  { id: "chem-topic-9-3", file: "quizzes-chem/topic-9-3.js", date: "2026-09-22", topic: "Topic 9.3: Gibbs Free Energy and Thermodynamic Favorability" },
  { id: "chem-topic-9-4", file: "quizzes-chem/topic-9-4.js", date: "2026-09-22", topic: "Topic 9.4: Thermodynamic and Kinetic Control" },
  { id: "chem-topic-9-5", file: "quizzes-chem/topic-9-5.js", date: "2026-09-22", topic: "Topic 9.5: Free Energy and Equilibrium" },
  { id: "chem-topic-9-6", file: "quizzes-chem/topic-9-6.js", date: "2026-09-22", topic: "Topic 9.6: Free Energy of Dissolution" },
  { id: "chem-topic-9-7", file: "quizzes-chem/topic-9-7.js", date: "2026-09-22", topic: "Topic 9.7: Coupled Reactions" },
  { id: "chem-topic-9-8", file: "quizzes-chem/topic-9-8.js", date: "2026-09-22", topic: "Topic 9.8: Galvanic (Voltaic) and Electrolytic Cells" },
  { id: "chem-topic-9-9", file: "quizzes-chem/topic-9-9.js", date: "2026-09-22", topic: "Topic 9.9: Cell Potential and Free Energy" },
  { id: "chem-topic-9-10", file: "quizzes-chem/topic-9-10.js", date: "2026-09-22", topic: "Topic 9.10: Cell Potential Under Nonstandard Conditions" },
  { id: "chem-topic-9-11", file: "quizzes-chem/topic-9-11.js", date: "2026-09-22", topic: "Topic 9.11: Electrolysis and Faraday's Law" },

];
