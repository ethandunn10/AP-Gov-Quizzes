// AP Chemistry — Unit 6 (Thermochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-6-3".
// Topic 6.3 — Heat Transfer and Thermal Equilibrium

window.QUIZ_QUESTIONS = [
  {
    id: "6-3-1",
    question: "When two objects at different temperatures are placed in contact, energy flows",
    options: [
      "from the object with more mass to the one with less",
      "from the hotter object to the cooler one until their temperatures are equal",
      "from the cooler to the hotter",
      "only if they are the same substance"
    ],
    correctIndex: 1,
    explanation: "Thermal equilibrium is reached when both reach a common temperature. Mass affects how much the temperature changes, not the direction of flow."
  },
  {
    id: "6-3-2",
    question: "Temperature is a measure of",
    options: [
      "total energy in a sample",
      "average kinetic energy of the particles",
      "the amount of heat a sample contains",
      "the mass of the sample"
    ],
    correctIndex: 1,
    explanation: "A bathtub of warm water has more total energy than a cup of boiling water but a lower temperature. Heat is energy in transit, not something a sample contains."
  },
  {
    id: "6-3-3",
    question: "A hot metal block is dropped into cool water in an insulated container. At thermal equilibrium,",
    options: [
      "the metal and water have the same temperature",
      "the metal and water have the same energy",
      "the metal is still hotter",
      "no energy has transferred"
    ],
    correctIndex: 0,
    explanation: "Equal temperature is what equilibrium means. Energies differ because masses and specific heats differ."
  },
  {
    id: "6-3-4",
    question: "In an ideal insulated calorimeter, the energy lost by the hot object",
    options: [
      "is greater than that gained by the cold object",
      "equals that gained by the cold object",
      "is less than that gained by the cold object",
      "is zero"
    ],
    correctIndex: 1,
    explanation: "Energy conservation gives q_hot = −q_cold. Real calorimeters lose some energy to the environment, which is a source of error."
  },
  {
    id: "6-3-5",
    question: "Substance A has a higher specific heat capacity than substance B. For equal masses absorbing equal energy, A will",
    options: [
      "show a larger temperature increase",
      "show a smaller temperature increase",
      "show no temperature change",
      "become hotter than B in all cases"
    ],
    correctIndex: 1,
    explanation: "A higher specific heat means more energy is needed per degree. Water's high specific heat is why it moderates climate."
  },
  {
    id: "6-3-6",
    question: "Energy transferred as heat between two bodies depends on",
    options: [
      "the temperature difference, the masses, and the specific heats",
      "temperature difference only",
      "mass only",
      "the color of the objects"
    ],
    correctIndex: 0,
    explanation: "All three appear in q = mcΔT for each body. The transfer continues until the temperature difference vanishes."
  },
  {
    id: "6-3-7",
    question: "A 50.0 g sample of metal at 100. °C is added to 50.0 g of water at 20. °C. The final temperature will be",
    options: [
      "60. °C, midway between them",
      "much closer to 20. °C because water's specific heat is far greater",
      "much closer to 100. °C",
      "exactly 20. °C"
    ],
    correctIndex: 1,
    explanation: "Water's specific heat is several times that of most metals, so it resists temperature change. Equal masses do not mean equal influence on the final temperature."
  },
  {
    id: "6-3-8",
    question: "Which statement about heat and temperature is correct?",
    options: [
      "They are the same quantity",
      "Heat is energy transferred due to a temperature difference; temperature measures average particle kinetic energy",
      "Temperature is measured in joules",
      "Heat is measured in degrees"
    ],
    correctIndex: 1,
    explanation: "Heat is a process quantity measured in joules while temperature is a state property in kelvins or degrees. Conflating them leads to errors in calorimetry reasoning."
  },
  {
    id: "6-3-9",
    question: "Thermal equilibrium between a system and its surroundings means that",
    options: [
      "no particles are moving",
      "there is no net energy transfer between them",
      "the system has zero energy",
      "the temperature is 0 K"
    ],
    correctIndex: 1,
    explanation: "Energy still moves in both directions but at equal rates. Particle motion continues at any temperature above absolute zero."
  },
  {
    id: "6-3-10",
    question: "Why does a metal spoon feel colder than a wooden spoon at the same room temperature?",
    options: [
      "The metal is actually at a lower temperature",
      "Metal conducts energy away from your hand more rapidly",
      "Wood is warmer than the room",
      "Metal has a higher specific heat"
    ],
    correctIndex: 1,
    explanation: "Sensation tracks the rate of energy transfer from your skin, not the object's temperature. Both objects are at room temperature."
  }
];
