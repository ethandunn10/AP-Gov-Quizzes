// AP Chemistry — Unit 5 (Kinetics)
// Registered in quizzes-chem/index.js as "chem-topic-5-6".
// Topic 5.6 — Reaction Energy Profile

window.QUIZ_QUESTIONS = [
  {
    id: "5-6-1",
    question: "On a reaction energy profile, the activation energy is the difference between",
    options: [
      "reactants and products",
      "reactants and the transition state",
      "products and the transition state",
      "the two lowest points"
    ],
    correctIndex: 1,
    explanation: "It is the climb from the starting valley to the peak. The gap between products and the peak is the reverse activation energy."
  },
  {
    id: "5-6-2",
    question: "If the products lie lower in energy than the reactants, the reaction is",
    options: [
      "endothermic",
      "exothermic",
      "thermoneutral",
      "impossible"
    ],
    correctIndex: 1,
    explanation: "Energy is released as the system falls to a lower state, so ΔH is negative. The activation energy can still be large regardless."
  },
  {
    id: "5-6-3",
    question: "For a reaction with Ea(forward) = 50 kJ/mol and ΔH = −20 kJ/mol, the reverse activation energy is",
    options: [
      "30 kJ/mol",
      "70 kJ/mol",
      "20 kJ/mol",
      "50 kJ/mol"
    ],
    correctIndex: 1,
    explanation: "Ea(reverse) = Ea(forward) − ΔH = 50 − (−20) = 70 kJ/mol. The reverse barrier is always larger for an exothermic reaction."
  },
  {
    id: "5-6-4",
    question: "A catalyst changes a reaction energy profile by",
    options: [
      "lowering the energy of the products",
      "providing an alternative pathway with lower activation energy",
      "raising the energy of the reactants",
      "changing ΔH"
    ],
    correctIndex: 1,
    explanation: "Reactant and product energies are unchanged, so ΔH and K are unaffected. Only the barrier between them is lowered."
  },
  {
    id: "5-6-5",
    question: "The peak of an energy profile represents",
    options: [
      "an intermediate",
      "the transition state",
      "the product",
      "the catalyst"
    ],
    correctIndex: 1,
    explanation: "It is a maximum, not a stable species. An intermediate would appear as a dip between two peaks."
  },
  {
    id: "5-6-6",
    question: "An endothermic reaction profile shows products",
    options: [
      "lower than reactants",
      "higher than reactants",
      "at the same energy as reactants",
      "at the transition state"
    ],
    correctIndex: 1,
    explanation: "Energy is absorbed to reach the higher product state, so ΔH is positive. The reverse reaction would be exothermic."
  },
  {
    id: "5-6-7",
    question: "Two reactions have identical ΔH but different activation energies. They differ in",
    options: [
      "thermodynamic favorability",
      "rate, with the lower-Ea reaction being faster",
      "the identity of the products",
      "nothing measurable"
    ],
    correctIndex: 1,
    explanation: "Thermodynamics and kinetics are independent, which is one of the unit's central points. Identical ΔH means identical energy released."
  },
  {
    id: "5-6-8",
    question: "The energy profile for a two-step mechanism shows",
    options: [
      "one peak",
      "two peaks with a valley between them corresponding to an intermediate",
      "no peaks",
      "a straight line"
    ],
    correctIndex: 1,
    explanation: "Each elementary step contributes its own barrier. The higher of the two peaks corresponds to the rate-determining step."
  },
  {
    id: "5-6-9",
    question: "In a two-step profile, the rate-determining step is the one with",
    options: [
      "the lowest peak",
      "the highest activation energy barrier",
      "the deepest valley",
      "the shortest duration"
    ],
    correctIndex: 1,
    explanation: "The largest barrier is the hardest to cross and throttles the overall rate. Identifying it from a profile is a common exam task."
  },
  {
    id: "5-6-10",
    question: "Changing the temperature of a reaction affects the energy profile by",
    options: [
      "lowering the activation energy",
      "not changing the profile itself, but changing the fraction of molecules able to cross the barrier",
      "raising the product energy",
      "eliminating the transition state"
    ],
    correctIndex: 1,
    explanation: "The profile depicts energies of species, which temperature does not alter. Temperature enters through the Maxwell-Boltzmann distribution instead."
  }
];
