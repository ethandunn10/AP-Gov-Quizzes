// AP Chemistry — Unit 5 (Kinetics)
// Registered in quizzes-chem/index.js as "chem-topic-5-5".
// Topic 5.5 — Collision Model

window.QUIZ_QUESTIONS = [
  {
    id: "5-5-1",
    question: "According to collision theory, a reaction occurs when particles collide with",
    options: [
      "any energy and any orientation",
      "sufficient energy and proper orientation",
      "low energy but correct orientation",
      "high energy only"
    ],
    correctIndex: 1,
    explanation: "Both conditions are necessary, which is why most collisions do not produce reaction. The fraction meeting both is often very small."
  },
  {
    id: "5-5-2",
    question: "Raising the temperature increases reaction rate primarily because",
    options: [
      "particles collide slightly more often",
      "a much larger fraction of collisions exceeds the activation energy",
      "activation energy decreases",
      "the reaction becomes exothermic"
    ],
    correctIndex: 1,
    explanation: "Collision frequency rises modestly but the energetic fraction rises exponentially. This is why a 10 °C rise can roughly double a rate."
  },
  {
    id: "5-5-3",
    question: "The activation energy of a reaction is",
    options: [
      "the energy difference between reactants and products",
      "the minimum energy required for a collision to lead to reaction",
      "the energy released by the reaction",
      "always zero for spontaneous reactions"
    ],
    correctIndex: 1,
    explanation: "It is the barrier height, independent of the overall enthalpy change. A very exothermic reaction can still have a large Ea and be slow."
  },
  {
    id: "5-5-4",
    question: "The steric factor in collision theory accounts for",
    options: [
      "the mass of the particles",
      "the requirement that colliding particles be oriented correctly",
      "the temperature",
      "the concentration"
    ],
    correctIndex: 1,
    explanation: "Complex molecules have more ways to collide incorrectly, so their steric factors are small. Simple atoms have orientation requirements close to trivial."
  },
  {
    id: "5-5-5",
    question: "In the Arrhenius equation k = Ae^(−Ea/RT), increasing Ea at constant temperature",
    options: [
      "increases k",
      "decreases k",
      "has no effect on k",
      "makes k negative"
    ],
    correctIndex: 1,
    explanation: "A larger barrier in the negative exponent shrinks the exponential term. Rate constants can never be negative."
  },
  {
    id: "5-5-6",
    question: "On a Maxwell-Boltzmann distribution, the fraction of particles able to react corresponds to",
    options: [
      "the peak of the curve",
      "the area under the curve to the right of the activation energy",
      "the total area under the curve",
      "the y-intercept"
    ],
    correctIndex: 1,
    explanation: "Only particles in the high-energy tail can surmount the barrier. Raising temperature enlarges that area dramatically."
  },
  {
    id: "5-5-7",
    question: "Increasing concentration increases reaction rate because",
    options: [
      "the activation energy is reduced",
      "collisions between reactant particles become more frequent",
      "particles move faster",
      "the temperature rises"
    ],
    correctIndex: 1,
    explanation: "More particles per volume means more encounters per second. Speed depends on temperature, not on crowding."
  },
  {
    id: "5-5-8",
    question: "Two reactions at the same temperature have activation energies of 40 kJ/mol and 80 kJ/mol. The reaction with the 40 kJ/mol barrier will generally be",
    options: [
      "slower",
      "faster",
      "the same speed",
      "nonspontaneous"
    ],
    correctIndex: 1,
    explanation: "A lower barrier lets a much larger fraction of collisions succeed. Frequency factors differ too, but the exponential term usually dominates."
  },
  {
    id: "5-5-9",
    question: "The transition state, or activated complex, is",
    options: [
      "a stable intermediate that can be isolated",
      "the highest-energy arrangement along the reaction path, existing only fleetingly",
      "the product of the reaction",
      "identical to the reactants"
    ],
    correctIndex: 1,
    explanation: "It sits at the maximum of the energy profile and cannot be isolated. An intermediate, by contrast, occupies a local minimum."
  },
  {
    id: "5-5-10",
    question: "Which change would increase the fraction of successful collisions without changing concentration?",
    options: [
      "Increasing the volume of the container",
      "Raising the temperature or adding a catalyst",
      "Removing product",
      "Decreasing the temperature"
    ],
    correctIndex: 1,
    explanation: "Heating increases the energetic fraction; a catalyst lowers the barrier so more collisions qualify. Changing volume alters concentration, which the question excludes."
  }
];
