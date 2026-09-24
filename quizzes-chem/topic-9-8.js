// AP Chemistry — Unit 9 (Thermodynamics and Electrochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-9-8".
// Topic 9.8 — Galvanic (Voltaic) and Electrolytic Cells

window.QUIZ_QUESTIONS = [
  {
    id: "9-8-1",
    question: "In any electrochemical cell, oxidation occurs at the",
    options: [
      "cathode",
      "anode",
      "salt bridge",
      "external circuit"
    ],
    correctIndex: 1,
    explanation: "This holds for both galvanic and electrolytic cells. Only the sign assigned to the electrodes differs between the two."
  },
  {
    id: "9-8-2",
    question: "In a galvanic cell, the anode is labeled",
    options: [
      "positive",
      "negative",
      "neutral",
      "it varies"
    ],
    correctIndex: 1,
    explanation: "Electrons are produced there and flow outward through the circuit. In an electrolytic cell the anode is the positive terminal instead."
  },
  {
    id: "9-8-3",
    question: "The purpose of a salt bridge is to",
    options: [
      "carry electrons between half-cells",
      "maintain charge balance by allowing ion migration between half-cells",
      "supply reactants",
      "increase the voltage"
    ],
    correctIndex: 1,
    explanation: "Without it, charge buildup would halt the reaction almost immediately. Electrons travel through the wire, not the bridge."
  },
  {
    id: "9-8-4",
    question: "A galvanic cell has E°cell that is",
    options: [
      "negative, with positive ΔG",
      "positive, with negative ΔG",
      "zero",
      "undefined"
    ],
    correctIndex: 1,
    explanation: "A spontaneous cell reaction produces electrical work. ΔG = −nFE°cell ties the sign conventions together."
  },
  {
    id: "9-8-5",
    question: "An electrolytic cell differs from a galvanic cell in that it",
    options: [
      "produces electricity from a spontaneous reaction",
      "uses an external power source to drive a nonspontaneous reaction",
      "has no electrodes",
      "requires no electrolyte"
    ],
    correctIndex: 1,
    explanation: "Electroplating and aluminum production are industrial examples. The applied voltage must exceed the magnitude of the negative E°cell."
  },
  {
    id: "9-8-6",
    question: "In the cell notation Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s), the species being reduced is",
    options: [
      "Zn",
      "Zn²⁺",
      "Cu²⁺",
      "Cu"
    ],
    correctIndex: 2,
    explanation: "The right side of the double line is the cathode, where reduction occurs. Zinc metal is oxidized at the anode on the left."
  },
  {
    id: "9-8-7",
    question: "Electrons in an operating galvanic cell flow",
    options: [
      "from cathode to anode through the wire",
      "from anode to cathode through the external circuit",
      "through the salt bridge",
      "from the solution to the electrode only"
    ],
    correctIndex: 1,
    explanation: "Oxidation releases electrons at the anode, and they travel to the cathode where reduction consumes them. Anions in the salt bridge move toward the anode."
  },
  {
    id: "9-8-8",
    question: "During operation of a Zn/Cu galvanic cell, the mass of the zinc electrode",
    options: [
      "increases",
      "decreases as zinc is oxidized to Zn²⁺",
      "stays the same",
      "doubles"
    ],
    correctIndex: 1,
    explanation: "The copper cathode gains mass as Cu²⁺ plates out. Tracking electrode mass is a common way to verify which half-reaction is occurring."
  },
  {
    id: "9-8-9",
    question: "In electroplating silver onto a spoon, the spoon must be connected as the",
    options: [
      "anode, where oxidation occurs",
      "cathode, where Ag⁺ is reduced onto its surface",
      "salt bridge",
      "power source"
    ],
    correctIndex: 1,
    explanation: "Deposition requires reduction, which occurs at the cathode. A silver anode dissolves to replenish the Ag⁺ in solution."
  },
  {
    id: "9-8-10",
    question: "A galvanic cell stops producing current when",
    options: [
      "the salt bridge is removed or the reaction reaches equilibrium",
      "the temperature changes",
      "the electrodes touch the solution",
      "the wire is connected"
    ],
    correctIndex: 0,
    explanation: "At equilibrium E becomes zero and no further work can be extracted. This is what it means for a battery to be dead."
  }
];
