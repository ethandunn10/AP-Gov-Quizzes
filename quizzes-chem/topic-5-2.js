// AP Chemistry — Unit 5 (Kinetics)
// Registered in quizzes-chem/index.js as "chem-topic-5-2".
// Topic 5.2 — Introduction to Rate Law

window.QUIZ_QUESTIONS = [
  {
    id: "5-2-1",
    question: "The rate law for a reaction must be determined",
    options: [
      "from the equilibrium constant",
      "from the coefficients of the balanced equation",
      "experimentally",
      "from the enthalpy change"
    ],
    correctIndex: 2,
    explanation: "Only for an elementary step do coefficients give the orders. The overall balanced equation says nothing about mechanism."
  },
  {
    id: "5-2-2",
    question: "For rate = k[A]²[B], the overall reaction order is",
    options: [
      "2",
      "3",
      "0",
      "1"
    ],
    correctIndex: 1,
    explanation: "Overall order is the sum of the individual exponents, 2 + 1 = 3. The reaction is second order in A and first order in B."
  },
  {
    id: "5-2-3",
    question: "Doubling [A] in a reaction that is first order in A causes the rate to",
    options: [
      "halve",
      "stay the same",
      "double",
      "quadruple"
    ],
    correctIndex: 2,
    explanation: "Rate is directly proportional to concentration for a first-order dependence. A second-order dependence would quadruple the rate."
  },
  {
    id: "5-2-4",
    question: "In an experiment, doubling [A] quadruples the rate while [B] is held constant. The order with respect to A is",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
    correctIndex: 2,
    explanation: "2ⁿ = 4 gives n = 2. Comparing trials that change only one concentration is the core of the initial-rates method."
  },
  {
    id: "5-2-5",
    question: "If doubling [B] has no effect on the rate, the reaction is",
    options: [
      "impossible",
      "first order in B",
      "zero order in B",
      "second order in B"
    ],
    correctIndex: 2,
    explanation: "Anything raised to the zero power is 1, so [B] drops out of the rate law. This often means B is involved after the rate-determining step."
  },
  {
    id: "5-2-6",
    question: "The units of the rate constant k for a first-order reaction are",
    options: [
      "s⁻¹",
      "M⁻¹s⁻¹",
      "M⁻²s⁻¹",
      "M/s"
    ],
    correctIndex: 0,
    explanation: "Rate in M/s equals k[A] in M, so k must carry units of s⁻¹. Checking units is a quick way to confirm an assigned order."
  },
  {
    id: "5-2-7",
    question: "For a zero-order reaction, the rate is",
    options: [
      "independent of [A] and equal to k",
      "proportional to [A] squared always",
      "always zero",
      "proportional to [A]"
    ],
    correctIndex: 0,
    explanation: "A surface-catalyzed reaction with a saturated catalyst behaves this way. The rate stays constant until reactant is nearly exhausted."
  },
  {
    id: "5-2-8",
    question: "A reaction has rate = k[A][B]. Doubling both [A] and [B] changes the rate by a factor of",
    options: [
      "2",
      "4",
      "6",
      "8"
    ],
    correctIndex: 1,
    explanation: "Each doubling contributes a factor of 2, giving 2 × 2 = 4. Adding the effects instead of multiplying is a frequent mistake."
  },
  {
    id: "5-2-9",
    question: "The rate constant k depends on",
    options: [
      "the total volume of the reaction vessel used",
      "the amount of product present",
      "concentration of reactants",
      "temperature and the presence of a catalyst"
    ],
    correctIndex: 3,
    explanation: "Concentration dependence is carried by the concentration terms, not by k. The Arrhenius equation describes k's temperature dependence."
  },
  {
    id: "5-2-10",
    question: "For the reaction 2A + B → C with rate = k[A][B], what can be concluded?",
    options: [
      "A is not involved in the reaction",
      "The mechanism must therefore consist of just a single step",
      "The rate law doesn't match coefficients, so multiple steps",
      "The reaction is zero order overall"
    ],
    correctIndex: 2,
    explanation: "A single-step reaction would give rate = k[A]²[B]. A mismatch between coefficients and orders is direct evidence of a multistep mechanism."
  }
];
