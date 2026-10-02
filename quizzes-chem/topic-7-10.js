// AP Chemistry — Unit 7 (Equilibrium)
// Registered in quizzes-chem/index.js as "chem-topic-7-10".
// Topic 7.10 — Reaction Quotient and Le Chatelier's Principle

window.QUIZ_QUESTIONS = [
  {
    id: "7-10-1",
    question: "Immediately after adding more reactant to a system at equilibrium, Q is",
    options: [
      "undefined",
      "greater than K",
      "less than K",
      "equal to K"
    ],
    correctIndex: 2,
    explanation: "A larger denominator makes Q smaller than K. The system responds by shifting forward until Q rises back to K."
  },
  {
    id: "7-10-2",
    question: "Using Q provides a quantitative basis for Le Chatelier's principle because",
    options: [
      "Q depends on the temperature of the system and nothing else",
      "Q predicts the rate of reaction",
      "comparing Q with K shows which way the system must move",
      "Q equals the activation energy"
    ],
    correctIndex: 2,
    explanation: "Le Chatelier gives a qualitative rule; Q versus K explains why it works. The two approaches always agree."
  },
  {
    id: "7-10-3",
    question: "After removing some product from an equilibrium mixture, Q",
    options: [
      "decreases below K, shifting forward",
      "stays equal to K",
      "becomes zero",
      "increases above K, shifting reverse"
    ],
    correctIndex: 0,
    explanation: "A smaller numerator lowers Q. The forward reaction then replaces some of what was removed."
  },
  {
    id: "7-10-4",
    question: "For a gaseous equilibrium, halving the volume changes Q because",
    options: [
      "the temperature necessarily changes as a direct result",
      "the reaction stops",
      "K changes",
      "all concentrations double, changing Q in most cases"
    ],
    correctIndex: 3,
    explanation: "Whether Q rises or falls depends on the exponents in the expression. When Δn is zero, the factors cancel and no shift occurs."
  },
  {
    id: "7-10-5",
    question: "A system has Q = 15 and K = 5. The system will",
    options: [
      "change K to 15",
      "shift forward",
      "shift in reverse to consume products",
      "remain exactly where it is at equilibrium"
    ],
    correctIndex: 2,
    explanation: "Too much product relative to equilibrium drives the reverse reaction. Q falls toward K as products are consumed."
  },
  {
    id: "7-10-6",
    question: "Which action changes K rather than Q?",
    options: [
      "Changing temperature",
      "Removing product",
      "Compressing the container",
      "Adding reactant"
    ],
    correctIndex: 0,
    explanation: "Every other listed action moves Q away from a fixed K. Temperature changes the target itself."
  },
  {
    id: "7-10-7",
    question: "For an exothermic reaction, raising the temperature causes",
    options: [
      "no change",
      "K to increase, so the system shifts forward instead",
      "K to decrease, so the system shifts in reverse",
      "Q to change but not K"
    ],
    correctIndex: 2,
    explanation: "With K reduced, the existing Q now exceeds it. The system consumes product until Q matches the new K."
  },
  {
    id: "7-10-8",
    question: "Adding a solid to a heterogeneous equilibrium does not change Q because",
    options: [
      "the temperature changes",
      "solids react slowly",
      "pure solids do not appear in the Q expression",
      "solids always have a concentration of exactly zero"
    ],
    correctIndex: 2,
    explanation: "Their activities are fixed at 1 regardless of amount. Only the amounts of gaseous and aqueous species matter."
  },
  {
    id: "7-10-9",
    question: "In the Haber process, ammonia is continuously removed from the reaction mixture in order to",
    options: [
      "act as a catalyst",
      "increase K",
      "keep Q below K so the forward reaction continues",
      "decrease the overall temperature of the reaction mixture"
    ],
    correctIndex: 2,
    explanation: "Removing product prevents the system from settling at equilibrium. This is a direct industrial application of the Q versus K comparison."
  },
  {
    id: "7-10-10",
    question: "A system initially has Q = 0 because no products are present. This means",
    options: [
      "the system is already sitting precisely at equilibrium",
      "the reaction cannot occur",
      "the reaction must proceed forward, since Q is below K",
      "K is zero"
    ],
    correctIndex: 2,
    explanation: "Any positive K exceeds zero, so the forward direction is guaranteed. Starting from pure reactants always means an initial forward shift."
  }
];
