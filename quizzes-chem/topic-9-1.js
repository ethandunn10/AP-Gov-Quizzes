// AP Chemistry — Unit 9 (Thermodynamics and Electrochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-9-1".
// Topic 9.1 — Introduction to Entropy

window.QUIZ_QUESTIONS = [
  {
    id: "9-1-1",
    question: "Entropy is best described as a measure of",
    options: [
      "the absolute temperature of the entire system overall",
      "the rate of a reaction",
      "the energy content of a system",
      "the dispersal of energy and matter among microstates"
    ],
    correctIndex: 3,
    explanation: "More accessible arrangements means higher entropy. Calling entropy simply 'disorder' is a rough analogy that breaks down in many cases."
  },
  {
    id: "9-1-2",
    question: "Which process has a positive ΔS?",
    options: [
      "Water evaporating",
      "A gas being compressed",
      "A precipitate forming",
      "Water freezing"
    ],
    correctIndex: 0,
    explanation: "Gas particles have far more accessible arrangements than liquid ones. The other three all increase order or reduce volume."
  },
  {
    id: "9-1-3",
    question: "For the reaction 2NH₃(g) → N₂(g) + 3H₂(g), ΔS is",
    options: [
      "zero",
      "unpredictable",
      "negative, because far fewer gas particles end up formed",
      "positive, because moles of gas increase from 2 to 4"
    ],
    correctIndex: 3,
    explanation: "Counting moles of gas is the quickest entropy check for a reaction. More gas particles means greater energy dispersal."
  },
  {
    id: "9-1-4",
    question: "Which phase of a given substance has the highest entropy?",
    options: [
      "All are equal",
      "Solid",
      "Liquid",
      "Gas"
    ],
    correctIndex: 3,
    explanation: "Gas particles are free to occupy vastly more positions and momenta. Solids, with particles fixed in a lattice, have the least."
  },
  {
    id: "9-1-5",
    question: "Dissolving NaCl in water generally increases entropy because",
    options: [
      "water molecules are destroyed",
      "the ions end up becoming considerably more ordered",
      "ions disperse, raising the number of arrangements",
      "the temperature falls"
    ],
    correctIndex: 2,
    explanation: "Ordering of water molecules around the ions offsets this somewhat. For most salts the dispersal term dominates and ΔS is positive."
  },
  {
    id: "9-1-6",
    question: "The entropy of a perfect crystal at absolute zero is",
    options: [
      "infinite",
      "zero, by the third law of thermodynamics",
      "negative",
      "exactly equal to its own total enthalpy value"
    ],
    correctIndex: 1,
    explanation: "Only one microstate is accessible in that idealized case. This gives absolute entropies a meaningful zero point, unlike enthalpy."
  },
  {
    id: "9-1-7",
    question: "Which reaction is expected to have the most negative ΔS?",
    options: [
      "2H₂(g) + O₂(g) → 2H₂O(l)",
      "CaCO₃(s) → CaO(s) + CO₂(g)",
      "H₂O(l) → H₂O(g)",
      "N₂O₄(g) → 2NO₂(g)"
    ],
    correctIndex: 0,
    explanation: "Three moles of gas become a liquid, a large decrease in dispersal. The other three all produce more gas."
  },
  {
    id: "9-1-8",
    question: "Increasing the temperature of a substance",
    options: [
      "makes entropy negative",
      "decreases its entropy",
      "increases its entropy, as more levels are accessible",
      "has absolutely no effect whatsoever on its entropy value"
    ],
    correctIndex: 2,
    explanation: "Higher temperature populates more energy states. This is why standard entropies are quoted at a specified temperature."
  },
  {
    id: "9-1-9",
    question: "Comparing CH₄(g) and C₄H₁₀(g) at the same conditions, the larger molecule has",
    options: [
      "higher entropy, from more vibrational modes",
      "the same entropy",
      "zero entropy",
      "distinctly lower entropy than the smaller one"
    ],
    correctIndex: 0,
    explanation: "More atoms means more ways to distribute energy internally. Molecular complexity generally raises molar entropy."
  },
  {
    id: "9-1-10",
    question: "The second law of thermodynamics states that for any spontaneous process,",
    options: [
      "enthalpy always decreases",
      "the entropy of the system itself always increases",
      "the total entropy of the universe increases",
      "energy is created"
    ],
    correctIndex: 2,
    explanation: "A system's entropy can decrease if the surroundings gain more. Freezing water is spontaneous below 0 °C for exactly this reason."
  }
];
