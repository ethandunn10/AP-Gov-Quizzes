// AP Chemistry — Unit 9 (Thermodynamics and Electrochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-9-6".
// Topic 9.6 — Free Energy of Dissolution

window.QUIZ_QUESTIONS = [
  {
    id: "9-6-1",
    question: "Whether a salt dissolves spontaneously depends on",
    options: [
      "the enthalpy of solution only",
      "the sign of ΔG, which combines the enthalpy and entropy of dissolution",
      "the entropy only",
      "the molar mass of the salt"
    ],
    correctIndex: 1,
    explanation: "Endothermic dissolution can still be favorable if ΔS is sufficiently positive. Cold packs rely on exactly that combination."
  },
  {
    id: "9-6-2",
    question: "Dissolving NH₄NO₃ in water is endothermic yet occurs readily because",
    options: [
      "ΔH is negative",
      "the increase in entropy makes TΔS large enough to overcome the positive ΔH",
      "the reaction is catalyzed",
      "water is a strong acid"
    ],
    correctIndex: 1,
    explanation: "Dispersing ions through the solvent raises entropy substantially. The solution cools because energy is drawn from the surroundings."
  },
  {
    id: "9-6-3",
    question: "The enthalpy of solution is the balance between",
    options: [
      "lattice energy, which must be overcome, and hydration energy, which is released",
      "activation energy and bond energy",
      "kinetic and potential energy",
      "entropy and free energy"
    ],
    correctIndex: 0,
    explanation: "When hydration energy exceeds lattice energy, dissolution is exothermic. The two terms are usually close in magnitude, which is why ΔH_soln is often small."
  },
  {
    id: "9-6-4",
    question: "For most ionic solids, ΔS of dissolution is",
    options: [
      "negative",
      "positive, since ordered lattice ions become dispersed in solution",
      "zero",
      "undefined"
    ],
    correctIndex: 1,
    explanation: "Highly charged small ions can order surrounding water enough to reverse this. Al³⁺ salts sometimes show negative entropies of solution."
  },
  {
    id: "9-6-5",
    question: "The relationship between Ksp and ΔG° is",
    options: [
      "ΔG° = −RT ln Ksp",
      "ΔG° = RT ln Ksp",
      "ΔG° = Ksp/RT",
      "there is none"
    ],
    correctIndex: 0,
    explanation: "Dissolution is an equilibrium like any other. A small Ksp gives a positive ΔG°, meaning the solid is favored under standard conditions."
  },
  {
    id: "9-6-6",
    question: "A salt with a very small Ksp has a ΔG° of dissolution that is",
    options: [
      "large and negative",
      "positive",
      "zero",
      "equal to Ksp"
    ],
    correctIndex: 1,
    explanation: "Ksp below 1 makes ln Ksp negative and ΔG° positive. Dissolution of such salts is unfavorable under standard conditions."
  },
  {
    id: "9-6-7",
    question: "For most salts, increasing temperature increases solubility because",
    options: [
      "ΔH of solution is usually positive, so higher T makes ΔG more negative",
      "lattice energy decreases",
      "water becomes more polar",
      "Ksp is independent of temperature"
    ],
    correctIndex: 0,
    explanation: "The TΔS term grows and overcomes the endothermic enthalpy more readily. Salts with exothermic dissolution become less soluble as T rises."
  },
  {
    id: "9-6-8",
    question: "Why does CaCl₂ warm water as it dissolves?",
    options: [
      "Its dissolution is endothermic",
      "Hydration energy exceeds lattice energy, making ΔH of solution negative",
      "Its entropy decreases",
      "It reacts with water to form an acid"
    ],
    correctIndex: 1,
    explanation: "The small, doubly charged Ca²⁺ is strongly hydrated. This is why calcium chloride is used in commercial hot packs and de-icers."
  },
  {
    id: "9-6-9",
    question: "A nonpolar solute does not dissolve in water primarily because",
    options: [
      "solute-water interactions are too weak to compensate for disrupting water's hydrogen bonds",
      "the solute is too heavy",
      "water is too dense",
      "entropy always decreases"
    ],
    correctIndex: 0,
    explanation: "Water molecules also become more ordered around a nonpolar solute, an unfavorable entropy contribution. Both terms work against dissolution."
  },
  {
    id: "9-6-10",
    question: "When a saturated solution is at equilibrium with undissolved solid, ΔG for the dissolution process is",
    options: [
      "negative",
      "zero",
      "positive",
      "equal to ΔG°"
    ],
    correctIndex: 1,
    explanation: "Dissolution and crystallization proceed at equal rates with no net driving force. ΔG° is generally nonzero, which is the usual point of confusion."
  }
];
