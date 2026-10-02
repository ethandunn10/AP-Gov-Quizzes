// AP Chemistry — Unit 7 (Equilibrium)
// Registered in quizzes-chem/index.js as "chem-topic-7-2".
// Topic 7.2 — Direction of Reversible Reactions

window.QUIZ_QUESTIONS = [
  {
    id: "7-2-1",
    question: "A reversible reaction is one that",
    options: [
      "goes only in the forward direction always",
      "can proceed both forward and in reverse",
      "requires a catalyst",
      "always has K = 1"
    ],
    correctIndex: 1,
    explanation: "The double arrow signals this two-way character. Essentially all reactions are reversible in principle, though many lie far to one side."
  },
  {
    id: "7-2-2",
    question: "As a reaction proceeds toward equilibrium from pure reactants, the forward rate",
    options: [
      "becomes zero",
      "increases while the reverse rate steadily decreases",
      "decreases while the reverse increases, until equal",
      "stays constant"
    ],
    correctIndex: 2,
    explanation: "Falling reactant concentration slows the forward reaction as rising product concentration speeds the reverse. They converge at equilibrium."
  },
  {
    id: "7-2-3",
    question: "The relationship between the equilibrium constants of a forward and reverse reaction is",
    options: [
      "K_reverse = 1/K_forward",
      "K_reverse equals −K_forward",
      "they are unrelated",
      "they are equal"
    ],
    correctIndex: 0,
    explanation: "The expression inverts when products and reactants swap roles. A large forward K implies a very small reverse K."
  },
  {
    id: "7-2-4",
    question: "If K for a reaction is 1 × 10⁻⁸ at a given temperature, at equilibrium",
    options: [
      "the reaction is at completion",
      "products strongly predominate",
      "reactants strongly predominate",
      "reactants and products are present in equal amounts"
    ],
    correctIndex: 2,
    explanation: "A small K places the equilibrium far to the left. Some product is always present, just in tiny amounts."
  },
  {
    id: "7-2-5",
    question: "When a reaction is multiplied by a factor of 2, the new equilibrium constant is",
    options: [
      "unchanged",
      "2K",
      "K²",
      "K/2"
    ],
    correctIndex: 2,
    explanation: "Doubling the coefficients squares each concentration term. This contrasts with ΔH, which simply doubles."
  },
  {
    id: "7-2-6",
    question: "If reaction 1 has K₁ and reaction 2 has K₂, the equilibrium constant for their sum is",
    options: [
      "K₁ + K₂",
      "K₁ × K₂",
      "K₁ − K₂",
      "K₁ / K₂"
    ],
    correctIndex: 1,
    explanation: "Adding reactions multiplies their constants, the equilibrium analogue of Hess's law. Note the contrast with enthalpies, which add."
  },
  {
    id: "7-2-7",
    question: "A reaction with a very large K value, such as 1 × 10¹⁵, is best described as",
    options: [
      "barely proceeding",
      "already at equilibrium from the start",
      "impossible",
      "essentially going to completion"
    ],
    correctIndex: 3,
    explanation: "Only trace amounts of reactant remain at equilibrium. K says nothing about how quickly that state is reached."
  },
  {
    id: "7-2-8",
    question: "The magnitude of K is affected by",
    options: [
      "the presence of a catalyst",
      "the volume of the container",
      "the initial concentrations",
      "temperature"
    ],
    correctIndex: 3,
    explanation: "Only temperature changes K for a given reaction. The other factors change how or how fast equilibrium is reached, not where it lies."
  },
  {
    id: "7-2-9",
    question: "Two experiments with different starting concentrations of the same reaction at the same temperature will",
    options: [
      "give completely identical equilibrium concentrations",
      "not reach equilibrium",
      "give different equilibrium constants",
      "the same K but different equilibrium concentrations"
    ],
    correctIndex: 3,
    explanation: "K is a constant at a given temperature regardless of the starting point. The specific concentrations that satisfy it will differ."
  },
  {
    id: "7-2-10",
    question: "For the reaction H₂ + I₂ ⇌ 2HI with K = 50, starting with only HI, the reaction will",
    options: [
      "have the value of K change over to 1/50 instead",
      "not proceed",
      "proceed in reverse to form H₂ and I₂",
      "proceed forward"
    ],
    correctIndex: 2,
    explanation: "With no reactants present, only the reverse reaction can occur initially. K itself is unchanged; only the direction of approach differs."
  }
];
