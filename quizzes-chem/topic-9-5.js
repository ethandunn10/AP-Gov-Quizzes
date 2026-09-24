// AP Chemistry — Unit 9 (Thermodynamics and Electrochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-9-5".
// Topic 9.5 — Free Energy and Equilibrium

window.QUIZ_QUESTIONS = [
  {
    id: "9-5-1",
    question: "The relationship between standard free energy change and the equilibrium constant is",
    options: [
      "ΔG° = RT ln K",
      "ΔG° = −RT ln K",
      "ΔG° = K/RT",
      "ΔG° = −K ln(RT)"
    ],
    correctIndex: 1,
    explanation: "The negative sign makes a large K correspond to a negative ΔG°. Temperature must be in kelvins."
  },
  {
    id: "9-5-2",
    question: "If ΔG° is negative, then K is",
    options: [
      "less than 1",
      "greater than 1",
      "equal to 1",
      "negative"
    ],
    correctIndex: 1,
    explanation: "A product-favored equilibrium corresponds to a favorable standard free energy change. Equilibrium constants are never negative."
  },
  {
    id: "9-5-3",
    question: "When ΔG° = 0, the equilibrium constant equals",
    options: [
      "0",
      "1",
      "infinity",
      "14"
    ],
    correctIndex: 1,
    explanation: "ln K = 0 gives K = 1. Neither reactants nor products are favored under standard conditions."
  },
  {
    id: "9-5-4",
    question: "The difference between ΔG and ΔG° is that ΔG",
    options: [
      "applies only at 298 K",
      "reflects the actual, nonstandard conditions of the system at a given moment",
      "is always zero",
      "is always negative"
    ],
    correctIndex: 1,
    explanation: "ΔG = ΔG° + RT ln Q connects the two. At equilibrium, ΔG is zero while ΔG° generally is not."
  },
  {
    id: "9-5-5",
    question: "At equilibrium, ΔG for the reaction equals",
    options: [
      "ΔG°",
      "zero",
      "−RT ln K",
      "the activation energy"
    ],
    correctIndex: 1,
    explanation: "No net change is favored in either direction. Confusing ΔG with ΔG° at this point is a common error."
  },
  {
    id: "9-5-6",
    question: "A reaction has K = 1 × 10⁻⁵. Its ΔG° is",
    options: [
      "large and negative",
      "positive",
      "zero",
      "equal to K"
    ],
    correctIndex: 1,
    explanation: "ln of a number below 1 is negative, and the leading minus sign makes ΔG° positive. The reaction is reactant favored under standard conditions."
  },
  {
    id: "9-5-7",
    question: "If Q < K at a given moment, then ΔG for the reaction is",
    options: [
      "negative, and the reaction proceeds forward",
      "positive",
      "zero",
      "equal to ΔG°"
    ],
    correctIndex: 0,
    explanation: "The ln Q term is small enough to keep ΔG negative. The reaction moves forward until Q rises to K and ΔG reaches zero."
  },
  {
    id: "9-5-8",
    question: "For an exothermic reaction, raising the temperature causes K to decrease. This is consistent with",
    options: [
      "ΔG° becoming more negative",
      "ΔG° becoming less negative as the −TΔS term changes",
      "K becoming negative",
      "ΔH changing sign"
    ],
    correctIndex: 1,
    explanation: "For exothermic reactions ΔS° is often negative, so raising T makes −TΔS° more positive. Le Chatelier's prediction and the thermodynamic relationship agree."
  },
  {
    id: "9-5-9",
    question: "A reaction with a very large K, such as 10²⁰, has a ΔG° that is",
    options: [
      "large and positive",
      "large and negative",
      "zero",
      "equal to 20"
    ],
    correctIndex: 1,
    explanation: "The logarithmic relationship means even enormous K values give moderate ΔG° magnitudes. At 298 K this corresponds to roughly −114 kJ/mol."
  },
  {
    id: "9-5-10",
    question: "Coupling an unfavorable reaction with a favorable one works because",
    options: [
      "ΔG values for the combined process add",
      "K values add",
      "activation energies cancel",
      "entropy is conserved"
    ],
    correctIndex: 0,
    explanation: "A sufficiently negative partner can make the sum negative. ATP hydrolysis drives many unfavorable biochemical reactions this way."
  }
];
