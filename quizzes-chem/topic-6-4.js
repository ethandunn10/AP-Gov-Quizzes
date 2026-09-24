// AP Chemistry — Unit 6 (Thermochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-6-4".
// Topic 6.4 — Heat Capacity and Calorimetry

window.QUIZ_QUESTIONS = [
  {
    id: "6-4-1",
    question: "How much energy is required to raise the temperature of 100. g of water by 20.0 °C? (c = 4.18 J/g·°C)",
    options: [
      "8360 J",
      "418 J",
      "2090 J",
      "83.6 J"
    ],
    correctIndex: 0,
    explanation: "q = mcΔT = (100.)(4.18)(20.0) = 8360 J. Dropping the mass term gives 83.6 J, an easy slip."
  },
  {
    id: "6-4-2",
    question: "Specific heat capacity is defined as the energy required to raise",
    options: [
      "one mole of a substance by 1 °C",
      "one gram of a substance by 1 °C",
      "any mass by 1 K",
      "one liter of a substance by 1 °C"
    ],
    correctIndex: 1,
    explanation: "Molar heat capacity uses moles instead, so the units differ. Because a kelvin and a Celsius degree are the same size, ΔT is numerically identical either way."
  },
  {
    id: "6-4-3",
    question: "A reaction in a coffee-cup calorimeter raises the temperature of 200. g of solution by 5.00 °C. Assuming c = 4.18 J/g·°C, the energy released by the reaction is",
    options: [
      "4180 J",
      "418 J",
      "1000 J",
      "41.8 J"
    ],
    correctIndex: 0,
    explanation: "q_solution = (200.)(4.18)(5.00) = 4180 J absorbed, so the reaction released that amount. The sign for the reaction is negative."
  },
  {
    id: "6-4-4",
    question: "A coffee-cup calorimeter operates at",
    options: [
      "constant volume, measuring ΔE",
      "constant pressure, measuring ΔH",
      "constant temperature",
      "zero pressure"
    ],
    correctIndex: 1,
    explanation: "Being open to the atmosphere fixes pressure, so q equals ΔH. A bomb calorimeter is the constant-volume alternative."
  },
  {
    id: "6-4-5",
    question: "A 25.0 g metal sample at 100.0 °C is placed in water and cools to 30.0 °C, releasing 788 J. Its specific heat is closest to",
    options: [
      "0.450 J/g·°C",
      "1.12 J/g·°C",
      "4.18 J/g·°C",
      "0.225 J/g·°C"
    ],
    correctIndex: 0,
    explanation: "c = 788 ÷ (25.0 × 70.0) = 0.450 J/g·°C, consistent with iron. Metals generally have specific heats well below water's."
  },
  {
    id: "6-4-6",
    question: "If a calorimeter loses energy to the surroundings, the calculated magnitude of ΔH for an exothermic reaction will be",
    options: [
      "too large",
      "too small",
      "unaffected",
      "positive"
    ],
    correctIndex: 1,
    explanation: "Some released energy never registers as a temperature rise. Insulation and a lid reduce this systematic error."
  },
  {
    id: "6-4-7",
    question: "Water's unusually high specific heat capacity is due to",
    options: [
      "its low molar mass",
      "extensive hydrogen bonding that absorbs energy without raising kinetic energy proportionally",
      "its ionic character",
      "its high density"
    ],
    correctIndex: 1,
    explanation: "Energy goes partly into disrupting the hydrogen bond network. This property stabilizes both climate and body temperature."
  },
  {
    id: "6-4-8",
    question: "In the expression q = mcΔT, a negative value of q indicates",
    options: [
      "energy absorbed by the substance",
      "energy released by the substance as it cools",
      "an error in calculation",
      "a phase change"
    ],
    correctIndex: 1,
    explanation: "ΔT is negative when the substance cools, making q negative. Tracking signs carefully is essential in calorimetry."
  },
  {
    id: "6-4-9",
    question: "To determine the ΔH of a reaction per mole, one must divide the measured energy by",
    options: [
      "the mass of solution",
      "the moles of the limiting reactant",
      "the temperature change",
      "the specific heat"
    ],
    correctIndex: 1,
    explanation: "Molar enthalpy needs the amount that actually reacted. Using total moles of all reactants would understate the value."
  },
  {
    id: "6-4-10",
    question: "Two samples, 10.0 g of water and 10.0 g of aluminum, absorb the same energy. Compared with the water, the aluminum will",
    options: [
      "have a smaller temperature increase",
      "have a larger temperature increase because its specific heat is lower",
      "have the same temperature increase",
      "not change temperature"
    ],
    correctIndex: 1,
    explanation: "With c around 0.90 J/g·°C, aluminum needs far less energy per degree. Temperature change is inversely proportional to specific heat at fixed mass and energy."
  }
];
