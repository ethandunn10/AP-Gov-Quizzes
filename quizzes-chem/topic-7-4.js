// AP Chemistry — Unit 7 (Equilibrium)
// Registered in quizzes-chem/index.js as "chem-topic-7-4".
// Topic 7.4 — Calculating the Equilibrium Constant

window.QUIZ_QUESTIONS = [
  {
    id: "7-4-1",
    question: "At equilibrium, a 1.00 L vessel contains 0.20 mol A, 0.30 mol B, and 0.60 mol C for A + B ⇌ C. The value of K is",
    options: [
      "1.1",
      "3.0",
      "10.",
      "0.10"
    ],
    correctIndex: 2,
    explanation: "K = 0.60/[(0.20)(0.30)] = 0.60/0.060 = 10. In a 1.00 L container, moles and molarity are numerically identical."
  },
  {
    id: "7-4-2",
    question: "An ICE table is used to",
    options: [
      "calculate enthalpy",
      "determine the overall rate of the given reaction",
      "track initial, change, and equilibrium amounts",
      "measure temperature"
    ],
    correctIndex: 2,
    explanation: "Changes are related through the stoichiometric coefficients. Setting up the table correctly is most of the work in these problems."
  },
  {
    id: "7-4-3",
    question: "For H₂ + I₂ ⇌ 2HI starting with 1.00 M of each reactant, if 0.20 M of H₂ reacts, the equilibrium [HI] is",
    options: [
      "0.20 M",
      "0.40 M",
      "0.80 M",
      "1.00 M"
    ],
    correctIndex: 1,
    explanation: "The 1:2 ratio means 0.20 M H₂ consumed produces 0.40 M HI. Ignoring the coefficient halves the answer."
  },
  {
    id: "7-4-4",
    question: "In an ICE table, the change row entries are always",
    options: [
      "positive for all species",
      "zero",
      "exactly equal for every single one of the species involved",
      "in the ratio of coefficients, negative for reactants"
    ],
    correctIndex: 3,
    explanation: "This is what ties the unknowns together into one variable x. Signs distinguish what is consumed from what is formed."
  },
  {
    id: "7-4-5",
    question: "For the reaction in a 2.00 L container with 0.400 mol of product at equilibrium, the equilibrium concentration of that product is",
    options: [
      "0.400 M",
      "0.200 M",
      "0.800 M",
      "2.00 M"
    ],
    correctIndex: 1,
    explanation: "0.400 mol ÷ 2.00 L = 0.200 M. Equilibrium expressions require concentrations, not moles, unless the volume is 1 L."
  },
  {
    id: "7-4-6",
    question: "For 2SO₂ + O₂ ⇌ 2SO₃ at equilibrium with [SO₂] = 0.10, [O₂] = 0.20, [SO₃] = 0.40, K is",
    options: [
      "80.",
      "20.",
      "8.0",
      "0.0125"
    ],
    correctIndex: 0,
    explanation: "K = (0.40)²/[(0.10)²(0.20)] = 0.16/0.0020 = 80. Squaring both SO₃ and SO₂ terms is essential."
  },
  {
    id: "7-4-7",
    question: "If K is calculated as a very large number, this indicates that at equilibrium",
    options: [
      "the reaction is slow",
      "reactants predominate",
      "products predominate",
      "concentrations are equal"
    ],
    correctIndex: 2,
    explanation: "A large numerator relative to denominator means product-favored. Speed is a separate, kinetic question."
  },
  {
    id: "7-4-8",
    question: "A student calculates K using initial rather than equilibrium concentrations. The result will",
    options: [
      "be correct",
      "be incorrect, since K holds only at equilibrium",
      "equal 1",
      "be exactly the reciprocal of the true value of K"
    ],
    correctIndex: 1,
    explanation: "That calculation gives Q at the starting instant, not K. Q and K coincide only at equilibrium."
  },
  {
    id: "7-4-9",
    question: "Two students start the same reaction with different initial amounts at the same temperature. Their calculated K values should be",
    options: [
      "zero",
      "different",
      "the same within experimental error",
      "the exact reciprocals of each other"
    ],
    correctIndex: 2,
    explanation: "K depends only on temperature for a given reaction. This independence is a good check on experimental work."
  },
  {
    id: "7-4-10",
    question: "When setting up an ICE table for a gas-phase reaction, it is acceptable to use partial pressures instead of concentrations provided that",
    options: [
      "all of the species present are solids",
      "the volume is 1 L",
      "the temperature is 0 K",
      "the equilibrium constant used is Kp"
    ],
    correctIndex: 3,
    explanation: "Kp and Kc generally differ in value, so they cannot be mixed. Consistency between the table's units and the constant is essential."
  }
];
