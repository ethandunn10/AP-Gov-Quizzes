// AP Chemistry — Unit 5 (Kinetics)
// Registered in quizzes-chem/index.js as "chem-topic-5-7".
// Topic 5.7 — Introduction to Reaction Mechanisms

window.QUIZ_QUESTIONS = [
  {
    id: "5-7-1",
    question: "A reaction mechanism is",
    options: [
      "the balanced overall equation",
      "the sequence of elementary steps by which a reaction actually occurs",
      "the rate law",
      "the energy released by the reaction"
    ],
    correctIndex: 1,
    explanation: "Most overall equations summarize several molecular events. The mechanism proposes what those events are."
  },
  {
    id: "5-7-2",
    question: "For a mechanism to be acceptable, it must",
    options: [
      "contain only one step",
      "sum to the overall equation and be consistent with the experimental rate law",
      "have no intermediates",
      "include a catalyst"
    ],
    correctIndex: 1,
    explanation: "Both criteria must hold, and failing either rules the mechanism out. Meeting both makes it plausible but not proven."
  },
  {
    id: "5-7-3",
    question: "In the mechanism: (1) NO₂ + NO₂ → NO₃ + NO (slow), (2) NO₃ + CO → NO₂ + CO₂ (fast), the species NO₃ is",
    options: [
      "a catalyst",
      "an intermediate",
      "a reactant",
      "a product"
    ],
    correctIndex: 1,
    explanation: "It is produced in step 1 and consumed in step 2, so it cancels overall. Intermediates never appear in the overall balanced equation."
  },
  {
    id: "5-7-4",
    question: "For the mechanism in the previous question, the predicted rate law is",
    options: [
      "rate = k[NO₂][CO]",
      "rate = k[NO₂]²",
      "rate = k[NO₃][CO]",
      "rate = k[CO]"
    ],
    correctIndex: 1,
    explanation: "The slow first step involves two NO₂ molecules and determines the rate. CO does not appear, which matches experiment for this reaction."
  },
  {
    id: "5-7-5",
    question: "A catalyst in a mechanism is a species that",
    options: [
      "is produced in an early step and consumed later",
      "is consumed in an early step and regenerated in a later step",
      "does not appear in any step",
      "is the rate-determining reactant"
    ],
    correctIndex: 1,
    explanation: "It appears on the reactant side first and returns unchanged by the end. This ordering is exactly the reverse of an intermediate's."
  },
  {
    id: "5-7-6",
    question: "If a mechanism's predicted rate law disagrees with the experimental rate law, the mechanism",
    options: [
      "is still acceptable",
      "must be rejected or revised",
      "proves the experiment wrong",
      "applies only at high temperature"
    ],
    correctIndex: 1,
    explanation: "Experiment is the arbiter in kinetics. A proposal that contradicts measured behavior cannot describe the real pathway."
  },
  {
    id: "5-7-7",
    question: "An intermediate should not appear in a final rate law because",
    options: [
      "it has no concentration",
      "its concentration is not an experimentally controlled quantity and must be expressed in terms of reactants",
      "it is a catalyst",
      "it does not exist"
    ],
    correctIndex: 1,
    explanation: "Rate laws are written in terms of species you can measure and vary. Pre-equilibrium or steady-state treatments eliminate intermediates."
  },
  {
    id: "5-7-8",
    question: "The rate-determining step in a mechanism is",
    options: [
      "the first step always",
      "the slowest step, which limits the overall rate",
      "the last step always",
      "the step with the most reactants"
    ],
    correctIndex: 1,
    explanation: "The overall process cannot outpace its slowest stage. It is often but not always the first step."
  },
  {
    id: "5-7-9",
    question: "Evidence supporting a proposed mechanism can include",
    options: [
      "agreement with the observed rate law and detection of a proposed intermediate",
      "the balanced equation alone",
      "the value of ΔH",
      "the color of the products"
    ],
    correctIndex: 0,
    explanation: "Spectroscopic detection of a short-lived intermediate is strong corroboration. Thermodynamic quantities say nothing about pathway."
  },
  {
    id: "5-7-10",
    question: "For the overall reaction 2A + B → C, an experimentally determined rate law of rate = k[A][B] suggests",
    options: [
      "a single-step bimolecular mechanism involving one A and one B",
      "a single-step termolecular mechanism",
      "that A is not involved",
      "that the reaction is zero order"
    ],
    correctIndex: 0,
    explanation: "The rate-determining step involves one of each, with the second A entering in a later fast step. A single termolecular step would give rate = k[A]²[B]."
  }
];
