// AP Chemistry — Unit 9 (Thermodynamics and Electrochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-9-2".
// Topic 9.2 — Absolute Entropy and Entropy Change

window.QUIZ_QUESTIONS = [
  {
    id: "9-2-1",
    question: "ΔS° for a reaction is calculated as",
    options: [
      "Σ S°(reactants) − Σ S°(products)",
      "Σ S°(products) − Σ S°(reactants), each weighted by coefficients",
      "the sum of all S° values",
      "the average of all S° values"
    ],
    correctIndex: 1,
    explanation: "Products minus reactants, as with enthalpy. Coefficients must multiply each standard entropy."
  },
  {
    id: "9-2-2",
    question: "Unlike standard enthalpies of formation, standard molar entropies of elements are",
    options: [
      "always zero",
      "positive values, since the third law provides an absolute zero point",
      "negative",
      "undefined"
    ],
    correctIndex: 1,
    explanation: "Entropy is measured absolutely from a perfect crystal at 0 K. Enthalpy has no such absolute reference, so formation values are relative."
  },
  {
    id: "9-2-3",
    question: "For N₂(g) + 3H₂(g) → 2NH₃(g), ΔS° is expected to be",
    options: [
      "positive",
      "negative, because 4 moles of gas become 2",
      "zero",
      "equal to ΔH"
    ],
    correctIndex: 1,
    explanation: "Halving the number of gas particles reduces dispersal substantially. The reaction is nonetheless favorable at low temperature because it is exothermic."
  },
  {
    id: "9-2-4",
    question: "Which substance would have the largest standard molar entropy?",
    options: [
      "H₂O(s)",
      "H₂O(l)",
      "H₂O(g)",
      "All are equal"
    ],
    correctIndex: 2,
    explanation: "The gas phase always has the highest molar entropy for a given substance. The trend solid < liquid < gas is reliable."
  },
  {
    id: "9-2-5",
    question: "The units of standard molar entropy are typically",
    options: [
      "kJ/mol",
      "J/mol·K",
      "J/K",
      "kJ"
    ],
    correctIndex: 1,
    explanation: "The per-kelvin term distinguishes entropy from enthalpy. Mixing J and kJ units is a frequent error when computing ΔG."
  },
  {
    id: "9-2-6",
    question: "For the reaction 2H₂O₂(l) → 2H₂O(l) + O₂(g), ΔS° is",
    options: [
      "negative",
      "positive, because a gas is produced from liquids",
      "zero",
      "equal to ΔH°"
    ],
    correctIndex: 1,
    explanation: "Producing gas from condensed phases dominates the entropy change. This reaction is favorable at all temperatures since ΔH is also negative."
  },
  {
    id: "9-2-7",
    question: "Comparing diamond and graphite, graphite has the higher standard entropy because",
    options: [
      "it is harder",
      "its layered structure permits more vibrational freedom",
      "it contains more carbon",
      "it is a gas"
    ],
    correctIndex: 1,
    explanation: "Diamond's rigid three-dimensional network restricts motion severely. Structural rigidity and entropy are inversely related."
  },
  {
    id: "9-2-8",
    question: "Given S° values of 192 J/mol·K for N₂, 131 for H₂, and 193 for NH₃, ΔS° for N₂ + 3H₂ → 2NH₃ is",
    options: [
      "−199 J/K",
      "+199 J/K",
      "−130 J/K",
      "+130 J/K"
    ],
    correctIndex: 0,
    explanation: "2(193) − [192 + 3(131)] = 386 − 585 = −199 J/K. Forgetting to multiply H₂ by 3 is the usual error."
  },
  {
    id: "9-2-9",
    question: "A reaction with ΔS° near zero most likely involves",
    options: [
      "a large change in moles of gas",
      "no change in the number of gas moles and similar phases on both sides",
      "a solid becoming a gas",
      "a gas becoming a liquid"
    ],
    correctIndex: 1,
    explanation: "H₂ + I₂ ⇌ 2HI is a standard example with two gas moles on each side. Phase and gas-mole changes drive most large entropy changes."
  },
  {
    id: "9-2-10",
    question: "For the surroundings, ΔS is calculated as",
    options: [
      "−ΔH(system)/T",
      "+ΔH(system)/T",
      "ΔH(system) × T",
      "zero always"
    ],
    correctIndex: 0,
    explanation: "An exothermic reaction warms the surroundings and raises their entropy. This is why exothermic reactions tend to be spontaneous even when the system's entropy falls."
  }
];
