// AP Chemistry — Unit 9 (Thermodynamics and Electrochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-9-9".
// Topic 9.9 — Cell Potential and Free Energy

window.QUIZ_QUESTIONS = [
  {
    id: "9-9-1",
    question: "The relationship between free energy and cell potential is",
    options: [
      "ΔG° = nFE°",
      "ΔG° = −nFE°",
      "ΔG° = E°/nF",
      "ΔG° = nF/E°"
    ],
    correctIndex: 1,
    explanation: "The negative sign makes a positive cell potential correspond to a favorable reaction. F is Faraday's constant, 96,485 C/mol e⁻."
  },
  {
    id: "9-9-2",
    question: "In the expression ΔG° = −nFE°, the symbol n represents",
    options: [
      "the number of moles of reactant",
      "the number of moles of electrons transferred in the balanced reaction",
      "the number of half-cells",
      "the cell's efficiency"
    ],
    correctIndex: 1,
    explanation: "It comes from balancing the two half-reactions so electrons cancel. Using moles of reactant instead is a frequent error."
  },
  {
    id: "9-9-3",
    question: "E°cell is calculated from standard reduction potentials as",
    options: [
      "E°(cathode) − E°(anode)",
      "E°(anode) − E°(cathode)",
      "E°(cathode) + E°(anode)",
      "the average of the two"
    ],
    correctIndex: 0,
    explanation: "Both values are taken from a table of reduction potentials as listed. Reversing the anode's sign and adding gives the same result."
  },
  {
    id: "9-9-4",
    question: "Standard reduction potentials are NOT multiplied by the coefficients used to balance a reaction because",
    options: [
      "they are always small",
      "potential is an intensive property independent of the amount of substance",
      "they are measured per mole",
      "the table assumes one mole"
    ],
    correctIndex: 1,
    explanation: "ΔG is extensive and does scale, which is why n appears in the conversion. Scaling E° is one of the most common errors in this topic."
  },
  {
    id: "9-9-5",
    question: "For a cell with E° = +1.10 V and n = 2, ΔG° is approximately",
    options: [
      "−212 kJ",
      "+212 kJ",
      "−106 kJ",
      "−1.10 kJ"
    ],
    correctIndex: 0,
    explanation: "ΔG° = −(2)(96,485)(1.10) = −212,000 J, or −212 kJ. The magnitude is large because Faraday's constant is large."
  },
  {
    id: "9-9-6",
    question: "A more positive standard reduction potential indicates a species that is",
    options: [
      "a stronger reducing agent",
      "a stronger oxidizing agent, more readily reduced",
      "less reactive",
      "always a metal"
    ],
    correctIndex: 1,
    explanation: "F₂ sits at the top of the table as the strongest common oxidizing agent. Species at the bottom, like Li⁺, are hardest to reduce."
  },
  {
    id: "9-9-7",
    question: "The relationship between E° and K is",
    options: [
      "E° = −RT ln K/nF",
      "E° = (RT/nF) ln K",
      "E° = K/nF",
      "there is none"
    ],
    correctIndex: 1,
    explanation: "It follows from combining ΔG° = −nFE° with ΔG° = −RT ln K. A positive E° therefore means K is greater than 1."
  },
  {
    id: "9-9-8",
    question: "A cell reaction with E°cell = −0.45 V is",
    options: [
      "spontaneous as written",
      "nonspontaneous as written, but spontaneous in reverse",
      "at equilibrium",
      "impossible"
    ],
    correctIndex: 1,
    explanation: "Reversing the reaction changes the sign of E° to +0.45 V. Driving it forward as written would require electrolysis."
  },
  {
    id: "9-9-9",
    question: "A galvanic cell is constructed from two half-cells with E° = +0.34 V and E° = −0.76 V. The cell potential is",
    options: [
      "−0.42 V",
      "+1.10 V",
      "+0.42 V",
      "−1.10 V"
    ],
    correctIndex: 1,
    explanation: "The more positive half-reaction is the cathode: 0.34 − (−0.76) = 1.10 V. A galvanic cell is always arranged to give a positive potential."
  },
  {
    id: "9-9-10",
    question: "The standard hydrogen electrode is assigned a potential of exactly 0 V because",
    options: [
      "it produces no current",
      "it serves as an arbitrary reference point for measuring all other potentials",
      "hydrogen has no charge",
      "it cannot be oxidized"
    ],
    correctIndex: 1,
    explanation: "Only potential differences can be measured, not absolute values. The choice of reference is conventional, like sea level for altitude."
  }
];
