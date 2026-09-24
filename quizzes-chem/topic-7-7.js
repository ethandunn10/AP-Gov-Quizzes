// AP Chemistry — Unit 7 (Equilibrium)
// Registered in quizzes-chem/index.js as "chem-topic-7-7".
// Topic 7.7 — Calculating Equilibrium Concentrations

window.QUIZ_QUESTIONS = [
  {
    id: "7-7-1",
    question: "For A ⇌ B with K = 4.0, starting with 1.00 M A and no B, the equilibrium [B] is",
    options: [
      "0.20 M",
      "0.80 M",
      "0.50 M",
      "1.00 M"
    ],
    correctIndex: 1,
    explanation: "With x formed, x/(1.00 − x) = 4.0 gives x = 0.80 M. Checking that [A] = 0.20 and the ratio is 4 confirms it."
  },
  {
    id: "7-7-2",
    question: "The 'x is small' approximation is valid when",
    options: [
      "K is very large",
      "K is very small relative to the initial concentration, so x barely changes it",
      "the reaction is fast",
      "there are no products"
    ],
    correctIndex: 1,
    explanation: "A common rule of thumb accepts the approximation when x is under 5 percent of the initial concentration. Otherwise the quadratic must be solved."
  },
  {
    id: "7-7-3",
    question: "After using the 'x is small' approximation, a student should",
    options: [
      "accept the answer without checking",
      "verify that x is less than about 5% of the initial concentration",
      "always solve the quadratic anyway",
      "double the answer"
    ],
    correctIndex: 1,
    explanation: "The check is what makes the shortcut legitimate. If it fails, the quadratic formula gives the correct root."
  },
  {
    id: "7-7-4",
    question: "For a weak acid HA with Ka = 1.0 × 10⁻⁶ and initial concentration 0.10 M, [H⁺] at equilibrium is approximately",
    options: [
      "1.0 × 10⁻⁶ M",
      "3.2 × 10⁻⁴ M",
      "1.0 × 10⁻⁷ M",
      "0.10 M"
    ],
    correctIndex: 1,
    explanation: "x = √(Ka × C) = √(1.0 × 10⁻⁷) = 3.2 × 10⁻⁴ M. The approximation is valid since x is far below 0.10."
  },
  {
    id: "7-7-5",
    question: "In solving an equilibrium problem with the quadratic formula, a negative root is",
    options: [
      "the correct answer",
      "rejected as physically meaningless",
      "averaged with the positive root",
      "squared"
    ],
    correctIndex: 1,
    explanation: "Concentrations cannot be negative. Only the physically sensible root is retained."
  },
  {
    id: "7-7-6",
    question: "For the reaction 2A ⇌ B, if x mol/L of B forms, the change in [A] is",
    options: [
      "−x",
      "−2x",
      "+2x",
      "−x/2"
    ],
    correctIndex: 1,
    explanation: "The coefficient of 2 means twice as much A is consumed. Omitting it is the most common ICE table error."
  },
  {
    id: "7-7-7",
    question: "Given K = 1.0 × 10⁻¹⁰ and an initial reactant concentration of 0.50 M, the appropriate approach is",
    options: [
      "assume x is negligible compared with 0.50",
      "always use the quadratic formula",
      "assume the reaction goes to completion",
      "set x = 0.50"
    ],
    correctIndex: 0,
    explanation: "A tiny K means very little reaction occurs. The approximation saves substantial algebra with no loss of accuracy here."
  },
  {
    id: "7-7-8",
    question: "For a reaction with very large K, a useful strategy is to",
    options: [
      "assume the reaction goes essentially to completion, then let it come back slightly",
      "assume no reaction occurs",
      "set K equal to 1",
      "ignore the stoichiometry"
    ],
    correctIndex: 0,
    explanation: "Working backward from completion makes the small unknown tractable. Attempting a forward ICE table with large K produces awkward algebra."
  },
  {
    id: "7-7-9",
    question: "After solving an equilibrium problem, a good check is to",
    options: [
      "substitute the equilibrium concentrations back into the K expression",
      "verify the temperature",
      "recalculate the molar mass",
      "compare with the rate law"
    ],
    correctIndex: 0,
    explanation: "The recomputed value should match the given K. This catches algebra and sign errors reliably."
  },
  {
    id: "7-7-10",
    question: "If a problem provides initial concentrations of both reactants and products, the first step should be to",
    options: [
      "assume equilibrium has been reached",
      "calculate Q and compare it with K to determine the direction of shift",
      "use the quadratic formula immediately",
      "ignore the products"
    ],
    correctIndex: 1,
    explanation: "The direction determines the signs in the change row. Assuming a forward shift without checking can produce a negative concentration."
  }
];
