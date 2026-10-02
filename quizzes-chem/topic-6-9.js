// AP Chemistry — Unit 6 (Thermochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-6-9".
// Topic 6.9 — Hess's Law

window.QUIZ_QUESTIONS = [
  {
    id: "6-9-1",
    question: "Hess's law states that the enthalpy change for a reaction",
    options: [
      "depends entirely on which catalyst happens to be chosen",
      "depends on the path taken",
      "is the same whether it occurs in one step or several",
      "is always negative"
    ],
    correctIndex: 2,
    explanation: "This follows from enthalpy being a state function. It lets chemists compute ΔH for reactions that are difficult to measure directly."
  },
  {
    id: "6-9-2",
    question: "Given A → B with ΔH = −50 kJ and B → C with ΔH = +20 kJ, ΔH for A → C is",
    options: [
      "+70 kJ",
      "−70 kJ",
      "−30 kJ",
      "+30 kJ"
    ],
    correctIndex: 2,
    explanation: "Adding the steps adds their enthalpies: −50 + 20 = −30 kJ. The intermediate B cancels."
  },
  {
    id: "6-9-3",
    question: "When a step is reversed in a Hess's law calculation, its ΔH must be",
    options: [
      "set to zero",
      "left entirely unchanged",
      "multiplied by −1",
      "doubled"
    ],
    correctIndex: 2,
    explanation: "Running a process backward reverses the direction of energy flow. Forgetting this sign change is the most common Hess's law error."
  },
  {
    id: "6-9-4",
    question: "When a step is multiplied by a factor of 2, its ΔH must be",
    options: [
      "left entirely unchanged",
      "multiplied by 2",
      "divided by 2",
      "squared"
    ],
    correctIndex: 1,
    explanation: "Enthalpy is extensive, scaling with the amount of substance. Coefficients and ΔH must be scaled together."
  },
  {
    id: "6-9-5",
    question: "Why is Hess's law useful for determining the enthalpy of formation of CO(g)?",
    options: [
      "burning carbon always makes some CO₂ as well",
      "CO has no enthalpy",
      "The reaction proceeds far too quickly to be measured",
      "CO is impossible to make"
    ],
    correctIndex: 0,
    explanation: "Combining the known combustion enthalpies of C and CO gives the answer indirectly. This is the textbook illustration of the law's usefulness."
  },
  {
    id: "6-9-6",
    question: "In a Hess's law problem, species that appear on both sides of the summed equations",
    options: [
      "invalidate the calculation",
      "double the enthalpy",
      "are added together",
      "cancel out"
    ],
    correctIndex: 3,
    explanation: "Cancellation is what leaves the target equation. If a species does not cancel, a step has been manipulated incorrectly."
  },
  {
    id: "6-9-7",
    question: "Hess's law works because enthalpy is",
    options: [
      "always conserved as zero",
      "entirely independent of all the substances involved",
      "a path function",
      "a state function, set by initial and final states"
    ],
    correctIndex: 3,
    explanation: "Heat and work are path functions and do not behave this way. State functions are what make thermochemical bookkeeping possible."
  },
  {
    id: "6-9-8",
    question: "Given: C + O₂ → CO₂, ΔH = −393 kJ; CO + ½O₂ → CO₂, ΔH = −283 kJ. ΔH for C + ½O₂ → CO is",
    options: [
      "−676 kJ",
      "−110 kJ",
      "+110 kJ",
      "−283 kJ"
    ],
    correctIndex: 1,
    explanation: "Reverse the second equation (+283) and add to the first: −393 + 283 = −110 kJ. CO₂ cancels, leaving the target reaction."
  },
  {
    id: "6-9-9",
    question: "A student sums three manipulated equations and finds that the result is not the target equation. The best next step is to",
    options: [
      "average the enthalpies",
      "use the bond enthalpy values instead of these ones",
      "report the answer anyway",
      "recheck which equations were reversed or scaled"
    ],
    correctIndex: 3,
    explanation: "The summed equation must match the target exactly for the enthalpy to be valid. Cancellation serves as a built-in check on the work."
  },
  {
    id: "6-9-10",
    question: "The relationship between Hess's law and enthalpies of formation is that",
    options: [
      "the formation-enthalpy formula applies Hess's law",
      "Hess's law replaces formation enthalpies",
      "formation enthalpies are more accurate only for gases",
      "they are unrelated methods"
    ],
    correctIndex: 0,
    explanation: "The products-minus-reactants expression amounts to decomposing reactants into elements and reassembling them as products. Both rest on enthalpy being a state function."
  }
];
