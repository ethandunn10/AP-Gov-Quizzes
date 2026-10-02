// AP Chemistry — Unit 5 (Kinetics)
// Registered in quizzes-chem/index.js as "chem-topic-5-7".
// Topic 5.7 — Introduction to Reaction Mechanisms

window.QUIZ_QUESTIONS = [
  {
    id: "5-7-1",
    question: "A reaction mechanism is",
    options: [
      "the balanced overall equation",
      "the sequence of elementary steps that actually occurs",
      "the rate law",
      "the total amount of energy released during the reaction"
    ],
    correctIndex: 1,
    explanation: "Most overall equations summarize several molecular events. The mechanism proposes what those events are."
  },
  {
    id: "5-7-2",
    question: "For a mechanism to be acceptable, it must",
    options: [
      "sum to the overall equation and match the rate law",
      "have no reaction intermediates present in it at all",
      "include a catalyst",
      "contain only one step"
    ],
    correctIndex: 0,
    explanation: "Both criteria must hold, and failing either rules the mechanism out. Meeting both makes it plausible but not proven."
  },
  {
    id: "5-7-3",
    question: "In the mechanism: (1) NO₂ + NO₂ → NO₃ + NO (slow), (2) NO₃ + CO → NO₂ + CO₂ (fast), the species NO₃ is",
    options: [
      "a reactant species",
      "a product",
      "a catalyst",
      "an intermediate"
    ],
    correctIndex: 3,
    explanation: "It is produced in step 1 and consumed in step 2, so it cancels overall. Intermediates never appear in the overall balanced equation."
  },
  {
    id: "5-7-4",
    question: "For the mechanism in the previous question, the predicted rate law is",
    options: [
      "rate = k[CO]",
      "rate = k[NO₂][CO]",
      "rate = k[NO₂]²",
      "rate = k[NO₃][CO]"
    ],
    correctIndex: 2,
    explanation: "The slow first step involves two NO₂ molecules and determines the rate. CO does not appear, which matches experiment for this reaction."
  },
  {
    id: "5-7-5",
    question: "A catalyst in a mechanism is a species that",
    options: [
      "is consumed early and regenerated in a later step",
      "does not appear in any step",
      "is the rate-determining reactant",
      "is produced in an early step and then consumed later"
    ],
    correctIndex: 0,
    explanation: "It appears on the reactant side first and returns unchanged by the end. This ordering is exactly the reverse of an intermediate's."
  },
  {
    id: "5-7-6",
    question: "If a mechanism's predicted rate law disagrees with the experimental rate law, the mechanism",
    options: [
      "proves the experiment wrong",
      "applies only at high temperature",
      "is still acceptable",
      "must be rejected or revised"
    ],
    correctIndex: 3,
    explanation: "Experiment is the arbiter in kinetics. A proposal that contradicts measured behavior cannot describe the real pathway."
  },
  {
    id: "5-7-7",
    question: "An intermediate should not appear in a final rate law because",
    options: [
      "it has no measurable concentration whatsoever at all",
      "its concentration is not experimentally controlled",
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
      "the slowest step, which limits the overall rate",
      "the last step always",
      "the step that involves the greatest number of reactants",
      "the first step always"
    ],
    correctIndex: 0,
    explanation: "The overall process cannot outpace its slowest stage. It is often but not always the first step."
  },
  {
    id: "5-7-9",
    question: "Evidence supporting a proposed mechanism can include",
    options: [
      "the value of ΔH",
      "the color of the products",
      "agreement with the rate law and finding an intermediate",
      "the balanced overall chemical equation taken by itself alone"
    ],
    correctIndex: 2,
    explanation: "Spectroscopic detection of a short-lived intermediate is strong corroboration. Thermodynamic quantities say nothing about pathway."
  },
  {
    id: "5-7-10",
    question: "For the overall reaction 2A + B → C, an experimentally determined rate law of rate = k[A][B] suggests",
    options: [
      "a single-step termolecular mechanism involving three species",
      "that A is not involved",
      "that the reaction is zero order",
      "a single-step bimolecular mechanism with one A and one B"
    ],
    correctIndex: 3,
    explanation: "The rate-determining step involves one of each, with the second A entering in a later fast step. A single termolecular step would give rate = k[A]²[B]."
  }
];
