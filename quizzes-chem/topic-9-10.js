// AP Chemistry — Unit 9 (Thermodynamics and Electrochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-9-10".
// Topic 9.10 — Cell Potential Under Nonstandard Conditions

window.QUIZ_QUESTIONS = [
  {
    id: "9-10-1",
    question: "Standard conditions for electrochemical measurements specify",
    options: [
      "1 M solutions, 1 bar gas pressure, and a stated temperature",
      "0 °C and any concentration",
      "pure water only",
      "1 g of each reactant"
    ],
    correctIndex: 0,
    explanation: "Departures from these conditions change the measured potential. The Nernst equation quantifies that change."
  },
  {
    id: "9-10-2",
    question: "According to Le Chatelier reasoning, increasing the concentration of a reactant in a galvanic cell will",
    options: [
      "decrease the cell potential",
      "increase the cell potential",
      "have no effect",
      "reverse the cell"
    ],
    correctIndex: 1,
    explanation: "More reactant pushes the cell further from equilibrium, increasing its driving force. Increasing product concentration has the opposite effect."
  },
  {
    id: "9-10-3",
    question: "As a galvanic cell operates, its potential",
    options: [
      "increases",
      "decreases toward zero as reactants are consumed and Q approaches K",
      "stays constant forever",
      "becomes negative immediately"
    ],
    correctIndex: 1,
    explanation: "A dead battery is one that has reached equilibrium. Rechargeable cells are driven back by an external source."
  },
  {
    id: "9-10-4",
    question: "In the Nernst equation, E = E° − (RT/nF) ln Q, the cell potential equals E° when",
    options: [
      "Q = 0",
      "Q = 1",
      "Q = K",
      "T = 0"
    ],
    correctIndex: 1,
    explanation: "ln 1 = 0 removes the correction term. Q = 1 corresponds to standard conditions."
  },
  {
    id: "9-10-5",
    question: "When a cell reaches equilibrium, Q equals K and the cell potential is",
    options: [
      "E°",
      "zero",
      "maximum",
      "negative"
    ],
    correctIndex: 1,
    explanation: "No further work can be extracted at equilibrium. This is the electrochemical parallel of ΔG = 0."
  },
  {
    id: "9-10-6",
    question: "A concentration cell generates a potential because",
    options: [
      "the two electrodes are different metals",
      "the same half-reaction occurs in both cells but at different ion concentrations",
      "it uses a different electrolyte",
      "it has no salt bridge"
    ],
    correctIndex: 1,
    explanation: "E° is zero since both half-cells are chemically identical. The entire potential comes from the concentration difference."
  },
  {
    id: "9-10-7",
    question: "In a concentration cell, the electrode in the more dilute solution acts as the",
    options: [
      "cathode",
      "anode, as the system moves to equalize concentrations",
      "salt bridge",
      "reference electrode"
    ],
    correctIndex: 1,
    explanation: "Oxidation there adds ions to the dilute side. Reduction removes ions from the concentrated side, driving both toward equality."
  },
  {
    id: "9-10-8",
    question: "Diluting the cathode compartment of an operating galvanic cell will",
    options: [
      "increase the cell potential",
      "decrease the cell potential, since the reactant concentration is reduced",
      "have no effect",
      "reverse the electrodes"
    ],
    correctIndex: 1,
    explanation: "Fewer available ions to reduce weakens the driving force. Q increases, and the Nernst correction term grows."
  },
  {
    id: "9-10-9",
    question: "A pH meter works on electrochemical principles because",
    options: [
      "it measures temperature",
      "the potential of its electrode depends on hydrogen ion concentration, which the Nernst equation relates to pH",
      "it counts ions directly",
      "it measures color"
    ],
    correctIndex: 1,
    explanation: "A glass electrode responds to [H⁺] with a predictable voltage. Calibration with standard buffers fixes the relationship."
  },
  {
    id: "9-10-10",
    question: "For a cell with E° = 0.80 V, if the product concentration is increased substantially, the measured E will be",
    options: [
      "greater than 0.80 V",
      "less than 0.80 V",
      "exactly 0.80 V",
      "negative necessarily"
    ],
    correctIndex: 1,
    explanation: "A larger Q makes the Nernst correction term subtract more. Whether E becomes negative depends on how extreme the shift is."
  }
];
