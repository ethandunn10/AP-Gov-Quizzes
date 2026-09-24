// AP Chemistry — Unit 9 (Thermodynamics and Electrochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-9-11".
// Topic 9.11 — Electrolysis and Faraday's Law

window.QUIZ_QUESTIONS = [
  {
    id: "9-11-1",
    question: "Faraday's constant, 96,485 C/mol, represents the charge carried by",
    options: [
      "one electron",
      "one mole of electrons",
      "one mole of any ion",
      "one coulomb"
    ],
    correctIndex: 1,
    explanation: "It is the elementary charge multiplied by Avogadro's number. It converts between charge passed and moles of electrons."
  },
  {
    id: "9-11-2",
    question: "The total charge passed during electrolysis is calculated as",
    options: [
      "q = I/t",
      "q = I × t, current times time in seconds",
      "q = t/I",
      "q = I + t"
    ],
    correctIndex: 1,
    explanation: "One ampere is one coulomb per second. Time must be converted to seconds before use."
  },
  {
    id: "9-11-3",
    question: "A current of 2.00 A flows for 1930 s. The moles of electrons passed are",
    options: [
      "0.0400 mol",
      "0.0200 mol",
      "2.00 mol",
      "0.100 mol"
    ],
    correctIndex: 0,
    explanation: "q = (2.00)(1930) = 3860 C, and 3860/96,485 = 0.0400 mol e⁻. The two-step conversion is the core of every Faraday's law problem."
  },
  {
    id: "9-11-4",
    question: "Depositing one mole of Cu from Cu²⁺ requires",
    options: [
      "1 mole of electrons",
      "2 moles of electrons",
      "3 moles of electrons",
      "0.5 mole of electrons"
    ],
    correctIndex: 1,
    explanation: "The half-reaction Cu²⁺ + 2e⁻ → Cu sets the ratio. The ionic charge determines the electron requirement."
  },
  {
    id: "9-11-5",
    question: "How many grams of Ag (107.9 g/mol) are deposited by 0.0400 mol of electrons from Ag⁺?",
    options: [
      "4.32 g",
      "2.16 g",
      "8.63 g",
      "107.9 g"
    ],
    correctIndex: 0,
    explanation: "Ag⁺ + e⁻ → Ag is a 1:1 ratio, so 0.0400 × 107.9 = 4.32 g. Silver requires half as many electrons per mole as copper."
  },
  {
    id: "9-11-6",
    question: "In the electrolysis of molten NaCl, the product at the cathode is",
    options: [
      "Cl₂ gas",
      "sodium metal",
      "oxygen gas",
      "hydrogen gas"
    ],
    correctIndex: 1,
    explanation: "Reduction of Na⁺ occurs at the cathode. Chlorine gas is produced by oxidation at the anode."
  },
  {
    id: "9-11-7",
    question: "In the electrolysis of aqueous NaCl, hydrogen gas rather than sodium metal is produced at the cathode because",
    options: [
      "sodium is not present",
      "water is more easily reduced than Na⁺",
      "the current is too low",
      "sodium dissolves"
    ],
    correctIndex: 1,
    explanation: "Competing half-reactions mean the one that is easier to drive wins. This is why sodium metal must be produced from the molten salt."
  },
  {
    id: "9-11-8",
    question: "To deposit the same number of moles of metal, an M³⁺ ion requires how many times the charge of an M⁺ ion?",
    options: [
      "1",
      "2",
      "3",
      "1/3"
    ],
    correctIndex: 2,
    explanation: "Three electrons per atom rather than one. This scaling is why aluminum production is so energy intensive."
  },
  {
    id: "9-11-9",
    question: "Increasing the current in an electrolysis cell at constant time will",
    options: [
      "deposit less metal",
      "deposit proportionally more metal",
      "have no effect",
      "reverse the reaction"
    ],
    correctIndex: 1,
    explanation: "Charge is the product of current and time. Doubling either quantity doubles the amount deposited."
  },
  {
    id: "9-11-10",
    question: "The industrial production of aluminum by the Hall-Héroult process is energy intensive largely because",
    options: [
      "aluminum has a low melting point",
      "Al³⁺ requires three electrons per atom and the oxide must be kept molten",
      "aluminum is rare",
      "the reaction is spontaneous"
    ],
    correctIndex: 1,
    explanation: "Cryolite is added to lower the melting point of alumina, which cuts the energy needed. Recycling aluminum uses a small fraction of the energy of primary production."
  }
];
