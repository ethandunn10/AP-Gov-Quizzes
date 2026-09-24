// AP Chemistry — Unit 5 (Kinetics)
// Registered in quizzes-chem/index.js as "chem-topic-5-10".
// Topic 5.10 — Multistep Reaction Energy Profile

window.QUIZ_QUESTIONS = [
  {
    id: "5-10-1",
    question: "On a multistep energy profile, the number of peaks equals",
    options: [
      "the number of intermediates",
      "the number of elementary steps",
      "always two",
      "the number of products"
    ],
    correctIndex: 1,
    explanation: "Each elementary step has its own transition state. Intermediates appear as the valleys between those peaks."
  },
  {
    id: "5-10-2",
    question: "In a two-step profile, an intermediate corresponds to",
    options: [
      "the highest point",
      "a local minimum between two peaks",
      "the starting point",
      "the final product"
    ],
    correctIndex: 1,
    explanation: "Sitting in a well makes it a real, if short-lived, species. A transition state occupies a maximum and cannot be isolated."
  },
  {
    id: "5-10-3",
    question: "The rate-determining step on a multistep profile is identified as the one with",
    options: [
      "the deepest intermediate well",
      "the largest energy climb from its preceding minimum to its transition state",
      "the smallest barrier",
      "the lowest product energy"
    ],
    correctIndex: 1,
    explanation: "The biggest climb is the hardest to make and throttles the overall rate. Reading barriers from the right starting minimum matters."
  },
  {
    id: "5-10-4",
    question: "For a profile where the first peak is higher than the second, the mechanism has",
    options: [
      "a slow first step",
      "a slow second step",
      "no rate-determining step",
      "two equal steps"
    ],
    correctIndex: 0,
    explanation: "The taller barrier comes first, so it controls the rate. The rate law can then be read directly from the first elementary step."
  },
  {
    id: "5-10-5",
    question: "The overall ΔH for a multistep reaction is determined by",
    options: [
      "the height of the largest peak",
      "the difference in energy between initial reactants and final products",
      "the depth of the intermediate well",
      "the sum of all activation energies"
    ],
    correctIndex: 1,
    explanation: "Only the endpoints matter for a state function. Barriers affect rate, not the overall energy change."
  },
  {
    id: "5-10-6",
    question: "A catalyst affects a multistep profile by",
    options: [
      "raising the intermediate's energy",
      "introducing a different pathway, often with more steps but lower barriers",
      "changing the reactant energy",
      "eliminating the products"
    ],
    correctIndex: 1,
    explanation: "Catalyzed routes frequently involve extra intermediates yet lower peaks. Reactant and product energies are untouched."
  },
  {
    id: "5-10-7",
    question: "If an intermediate sits in a very shallow well, it is",
    options: [
      "extremely stable and easily isolated",
      "short-lived and quickly converted to the next species",
      "the final product",
      "a catalyst"
    ],
    correctIndex: 1,
    explanation: "A small barrier out of the well means rapid conversion. Deep wells correspond to intermediates that may accumulate and be detected."
  },
  {
    id: "5-10-8",
    question: "For a two-step mechanism with Ea₁ = 80 kJ/mol and Ea₂ = 30 kJ/mol, the overall rate is controlled by",
    options: [
      "step 1",
      "step 2",
      "both equally",
      "neither"
    ],
    correctIndex: 0,
    explanation: "The larger barrier is crossed far more slowly. Its rate law is therefore the observed one."
  },
  {
    id: "5-10-9",
    question: "On the energy profile of an exothermic two-step reaction, the final products are",
    options: [
      "higher in energy than the reactants",
      "lower in energy than the reactants",
      "at the same energy as the intermediate",
      "at the highest peak"
    ],
    correctIndex: 1,
    explanation: "Net energy is released, placing products below reactants. Individual steps within the mechanism may still be endothermic."
  },
  {
    id: "5-10-10",
    question: "Comparing a catalyzed and uncatalyzed profile for the same reaction, which quantity is unchanged?",
    options: [
      "Activation energy",
      "ΔH for the overall reaction",
      "The number of steps",
      "The rate"
    ],
    correctIndex: 1,
    explanation: "Because ΔH is unchanged, the equilibrium constant is unchanged too. A catalyst affects how fast equilibrium is reached, not where it lies."
  }
];
