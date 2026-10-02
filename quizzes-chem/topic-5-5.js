// AP Chemistry — Unit 5 (Kinetics)
// Registered in quizzes-chem/index.js as "chem-topic-5-5".
// Topic 5.5 — Collision Model

window.QUIZ_QUESTIONS = [
  {
    id: "5-5-1",
    question: "According to collision theory, a reaction occurs when particles collide with",
    options: [
      "high energy only",
      "any energy at all and any orientation at all",
      "sufficient energy and proper orientation",
      "low energy but correct orientation"
    ],
    correctIndex: 2,
    explanation: "Both conditions are necessary, which is why most collisions do not produce reaction. The fraction meeting both is often very small."
  },
  {
    id: "5-5-2",
    question: "Raising the temperature increases reaction rate primarily because",
    options: [
      "activation energy decreases",
      "the reaction becomes exothermic",
      "the particles collide just slightly more often than before",
      "far more collisions exceed the activation energy"
    ],
    correctIndex: 3,
    explanation: "Collision frequency rises modestly but the energetic fraction rises exponentially. This is why a 10 °C rise can roughly double a rate."
  },
  {
    id: "5-5-3",
    question: "The activation energy of a reaction is",
    options: [
      "the minimum energy a collision needs to react",
      "the energy released by the reaction",
      "always zero for spontaneous reactions",
      "the energy difference between reactants and products"
    ],
    correctIndex: 0,
    explanation: "It is the barrier height, independent of the overall enthalpy change. A very exothermic reaction can still have a large Ea and be slow."
  },
  {
    id: "5-5-4",
    question: "The steric factor in collision theory accounts for",
    options: [
      "the temperature",
      "the concentration",
      "the combined mass of all of the colliding particles",
      "the need for colliding particles to be oriented"
    ],
    correctIndex: 3,
    explanation: "Complex molecules have more ways to collide incorrectly, so their steric factors are small. Simple atoms have orientation requirements close to trivial."
  },
  {
    id: "5-5-5",
    question: "In the Arrhenius equation k = Ae^(−Ea/RT), increasing Ea at constant temperature",
    options: [
      "has no effect on k",
      "makes k negative",
      "increases k",
      "decreases k"
    ],
    correctIndex: 3,
    explanation: "A larger barrier in the negative exponent shrinks the exponential term. Rate constants can never be negative."
  },
  {
    id: "5-5-6",
    question: "On a Maxwell-Boltzmann distribution, the fraction of particles able to react corresponds to",
    options: [
      "the area under the curve right of the activation energy",
      "the total area lying underneath the entire plotted curve",
      "the y-intercept",
      "the peak of the curve"
    ],
    correctIndex: 0,
    explanation: "Only particles in the high-energy tail can surmount the barrier. Raising temperature enlarges that area dramatically."
  },
  {
    id: "5-5-7",
    question: "Increasing concentration increases reaction rate because",
    options: [
      "collisions between reactant particles become frequent",
      "particles move faster",
      "the temperature rises",
      "the required activation energy is substantially reduced"
    ],
    correctIndex: 0,
    explanation: "More particles per volume means more encounters per second. Speed depends on temperature, not on crowding."
  },
  {
    id: "5-5-8",
    question: "Two reactions at the same temperature have activation energies of 40 kJ/mol and 80 kJ/mol. The reaction with the 40 kJ/mol barrier will generally be",
    options: [
      "the same speed",
      "nonspontaneous",
      "slower",
      "faster"
    ],
    correctIndex: 3,
    explanation: "A lower barrier lets a much larger fraction of collisions succeed. Frequency factors differ too, but the exponential term usually dominates."
  },
  {
    id: "5-5-9",
    question: "The transition state, or activated complex, is",
    options: [
      "the product of the reaction",
      "identical to the reactants",
      "a stable intermediate that can readily be isolated and stored",
      "the highest-energy arrangement, existing only fleetingly"
    ],
    correctIndex: 3,
    explanation: "It sits at the maximum of the energy profile and cannot be isolated. An intermediate, by contrast, occupies a local minimum."
  },
  {
    id: "5-5-10",
    question: "Which change would increase the fraction of successful collisions without changing concentration?",
    options: [
      "Decreasing the temperature",
      "Increasing the total volume of the reaction container",
      "Raising the temperature or adding a catalyst",
      "Removing product"
    ],
    correctIndex: 2,
    explanation: "Heating increases the energetic fraction; a catalyst lowers the barrier so more collisions qualify. Changing volume alters concentration, which the question excludes."
  }
];
