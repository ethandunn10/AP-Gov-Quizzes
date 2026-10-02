// AP Chemistry — Unit 5 (Kinetics)
// Registered in quizzes-chem/index.js as "chem-topic-5-10".
// Topic 5.10 — Multistep Reaction Energy Profile

window.QUIZ_QUESTIONS = [
  {
    id: "5-10-1",
    question: "On a multistep energy profile, the number of peaks equals",
    options: [
      "the number of elementary steps",
      "always two",
      "the number of products",
      "the number of intermediates formed"
    ],
    correctIndex: 0,
    explanation: "Each elementary step has its own transition state. Intermediates appear as the valleys between those peaks."
  },
  {
    id: "5-10-2",
    question: "In a two-step profile, an intermediate corresponds to",
    options: [
      "a local minimum between two peaks",
      "the starting point",
      "the final product",
      "the highest point on the whole curve"
    ],
    correctIndex: 0,
    explanation: "Sitting in a well makes it a real, if short-lived, species. A transition state occupies a maximum and cannot be isolated."
  },
  {
    id: "5-10-3",
    question: "The rate-determining step on a multistep profile is identified as the one with",
    options: [
      "the lowest product energy",
      "the deepest intermediate energy well of them all",
      "the largest climb to its transition state",
      "the smallest barrier"
    ],
    correctIndex: 2,
    explanation: "The biggest climb is the hardest to make and throttles the overall rate. Reading barriers from the right starting minimum matters."
  },
  {
    id: "5-10-4",
    question: "For a profile where the first peak is higher than the second, the mechanism has",
    options: [
      "a slow second step",
      "no rate-determining step",
      "two equal steps",
      "a slow first step"
    ],
    correctIndex: 3,
    explanation: "The taller barrier comes first, so it controls the rate. The rate law can then be read directly from the first elementary step."
  },
  {
    id: "5-10-5",
    question: "The overall ΔH for a multistep reaction is determined by",
    options: [
      "the depth of the intermediate well",
      "the sum of all of the activation energies in the steps",
      "the height of the largest peak",
      "the energy difference between reactants and products"
    ],
    correctIndex: 3,
    explanation: "Only the endpoints matter for a state function. Barriers affect rate, not the overall energy change."
  },
  {
    id: "5-10-6",
    question: "A catalyst affects a multistep profile by",
    options: [
      "raising the energy of the intermediate species formed",
      "introducing a different pathway with lower barriers",
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
      "short-lived and quickly converted onward",
      "the final product",
      "a catalyst",
      "extremely stable and very easily isolated"
    ],
    correctIndex: 0,
    explanation: "A small barrier out of the well means rapid conversion. Deep wells correspond to intermediates that may accumulate and be detected."
  },
  {
    id: "5-10-8",
    question: "For a two-step mechanism with Ea₁ = 80 kJ/mol and Ea₂ = 30 kJ/mol, the overall rate is controlled by",
    options: [
      "step 2",
      "both equally",
      "neither",
      "step 1"
    ],
    correctIndex: 3,
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
      "The rate",
      "Activation energy",
      "ΔH for the overall reaction",
      "The total number of reaction steps"
    ],
    correctIndex: 2,
    explanation: "Because ΔH is unchanged, the equilibrium constant is unchanged too. A catalyst affects how fast equilibrium is reached, not where it lies."
  }
];
