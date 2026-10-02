// AP Chemistry — Unit 9 (Thermodynamics and Electrochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-9-10".
// Topic 9.10 — Cell Potential Under Nonstandard Conditions

window.QUIZ_QUESTIONS = [
  {
    id: "9-10-1",
    question: "Standard conditions for electrochemical measurements specify",
    options: [
      "1 M solutions, 1 bar gas, and a stated temperature",
      "0 °C together with absolutely any concentration at all",
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
      "increase the cell potential",
      "have no effect",
      "reverse the cell",
      "decrease the cell potential"
    ],
    correctIndex: 0,
    explanation: "More reactant pushes the cell further from equilibrium, increasing its driving force. Increasing product concentration has the opposite effect."
  },
  {
    id: "9-10-3",
    question: "As a galvanic cell operates, its potential",
    options: [
      "increases",
      "decreases toward zero as Q approaches K",
      "stays constant forever",
      "becomes negative almost immediately at once"
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
      "zero",
      "maximum",
      "negative",
      "E°"
    ],
    correctIndex: 0,
    explanation: "No further work can be extracted at equilibrium. This is the electrochemical parallel of ΔG = 0."
  },
  {
    id: "9-10-6",
    question: "A concentration cell generates a potential because",
    options: [
      "the two electrodes are made from entirely different metals",
      "the same half-reaction occurs at different concentrations",
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
      "anode, as the system equalizes concentrations",
      "salt bridge",
      "the standard reference electrode for the cell"
    ],
    correctIndex: 1,
    explanation: "Oxidation there adds ions to the dilute side. Reduction removes ions from the concentrated side, driving both toward equality."
  },
  {
    id: "9-10-8",
    question: "Diluting the cathode compartment of an operating galvanic cell will",
    options: [
      "have no effect",
      "reverse the electrodes",
      "increase the overall cell potential significantly",
      "decrease the potential, since reactant is reduced"
    ],
    correctIndex: 3,
    explanation: "Fewer available ions to reduce weakens the driving force. Q increases, and the Nernst correction term grows."
  },
  {
    id: "9-10-9",
    question: "A pH meter works on electrochemical principles because",
    options: [
      "it measures color",
      "it measures temperature",
      "its electrode potential depends on [H⁺]",
      "it counts up the individual ions directly, one by one"
    ],
    correctIndex: 2,
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
