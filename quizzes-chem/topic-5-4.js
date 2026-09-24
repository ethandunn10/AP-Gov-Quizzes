// AP Chemistry — Unit 5 (Kinetics)
// Registered in quizzes-chem/index.js as "chem-topic-5-4".
// Topic 5.4 — Elementary Reactions

window.QUIZ_QUESTIONS = [
  {
    id: "5-4-1",
    question: "An elementary reaction is one that",
    options: [
      "involves only elements",
      "occurs in a single step exactly as written",
      "is the slowest step in a mechanism",
      "has no activation energy"
    ],
    correctIndex: 1,
    explanation: "Because it describes an actual molecular event, its rate law follows from its stoichiometry. Overall equations rarely meet this condition."
  },
  {
    id: "5-4-2",
    question: "For the elementary step A + B → C, the rate law is",
    options: [
      "rate = k[C]",
      "rate = k[A][B]",
      "rate = k[A]²[B]²",
      "rate = k"
    ],
    correctIndex: 1,
    explanation: "One particle of each must collide, giving first order in each. This direct reading of coefficients is valid only for elementary steps."
  },
  {
    id: "5-4-3",
    question: "The molecularity of the elementary step 2NO → N₂O₂ is",
    options: [
      "unimolecular",
      "bimolecular",
      "termolecular",
      "zero"
    ],
    correctIndex: 1,
    explanation: "Two particles must come together, making it bimolecular. Molecularity counts reacting particles in a single step."
  },
  {
    id: "5-4-4",
    question: "Termolecular elementary steps are rare because",
    options: [
      "they violate conservation of energy",
      "simultaneous three-particle collisions with correct orientation are very improbable",
      "they have no activation energy",
      "they are too fast to measure"
    ],
    correctIndex: 1,
    explanation: "Most mechanisms decompose such processes into successive bimolecular steps. Improbability, not impossibility, is the issue."
  },
  {
    id: "5-4-5",
    question: "A unimolecular elementary step has a rate law of the form",
    options: [
      "rate = k",
      "rate = k[A]",
      "rate = k[A]²",
      "rate = k[A][B]"
    ],
    correctIndex: 1,
    explanation: "A single particle decomposing or rearranging gives first-order kinetics. Isomerizations are common examples."
  },
  {
    id: "5-4-6",
    question: "An intermediate in a reaction mechanism is a species that",
    options: [
      "appears in the overall balanced equation",
      "is produced in one step and consumed in a later step",
      "is present at the start",
      "acts as a catalyst"
    ],
    correctIndex: 1,
    explanation: "Because it is both formed and used up, it cancels from the overall equation. A catalyst is consumed early and regenerated later, which is the reverse order."
  },
  {
    id: "5-4-7",
    question: "The sum of the elementary steps in a valid mechanism must equal",
    options: [
      "the rate law",
      "the overall balanced equation",
      "the activation energy",
      "the equilibrium constant"
    ],
    correctIndex: 1,
    explanation: "This is one of two criteria for a plausible mechanism, along with agreement with the observed rate law. Intermediates cancel in that sum."
  },
  {
    id: "5-4-8",
    question: "For the elementary step 2A → B, the rate law is",
    options: [
      "rate = k[A]",
      "rate = k[A]²",
      "rate = k[B]",
      "rate = 2k[A]"
    ],
    correctIndex: 1,
    explanation: "Two A particles must collide, so the dependence is second order. The coefficient becomes the exponent for elementary steps only."
  },
  {
    id: "5-4-9",
    question: "Which statement about a proposed mechanism is correct?",
    options: [
      "A mechanism that fits the data is proven correct",
      "A mechanism can be supported but never definitively proven by kinetic data alone",
      "Mechanisms are determined from the balanced equation",
      "Only one mechanism can fit any rate law"
    ],
    correctIndex: 1,
    explanation: "Different mechanisms can predict the same rate law, so kinetics can rule out but not uniquely confirm. Additional evidence like intermediate detection strengthens the case."
  },
  {
    id: "5-4-10",
    question: "In a two-step mechanism whose first step is slow, the overall rate law is generally determined by",
    options: [
      "the fast step",
      "the slow step, the rate-determining step",
      "the sum of both steps",
      "the overall equation"
    ],
    correctIndex: 1,
    explanation: "The reaction cannot proceed faster than its slowest step. If the fast step comes first, the treatment is more involved and requires a pre-equilibrium approach."
  }
];
