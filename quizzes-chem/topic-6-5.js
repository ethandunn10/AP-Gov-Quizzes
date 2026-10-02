// AP Chemistry — Unit 6 (Thermochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-6-5".
// Topic 6.5 — Energy of Phase Changes

window.QUIZ_QUESTIONS = [
  {
    id: "6-5-1",
    question: "During a phase change at constant pressure, the temperature of a pure substance",
    options: [
      "decreases steadily throughout the entire phase change",
      "fluctuates randomly",
      "increases steadily",
      "remains constant while potential energy changes"
    ],
    correctIndex: 3,
    explanation: "Energy goes into separating particles rather than speeding them up. This is why heating curves show plateaus."
  },
  {
    id: "6-5-2",
    question: "How much energy is needed to melt 36.0 g of ice at 0 °C? (ΔH_fus = 6.01 kJ/mol, M = 18.0 g/mol)",
    options: [
      "12.0 kJ",
      "216 kJ",
      "3.01 kJ",
      "6.01 kJ"
    ],
    correctIndex: 0,
    explanation: "36.0 g is 2.00 mol, so 2.00 × 6.01 = 12.0 kJ. Enthalpies of fusion are tabulated per mole, not per gram."
  },
  {
    id: "6-5-3",
    question: "The enthalpy of vaporization of water is much larger than its enthalpy of fusion because",
    options: [
      "ice has no hydrogen bonds",
      "steam is denser than water",
      "melting actually breaks apart the covalent bonds themselves",
      "vaporization overcomes all intermolecular forces"
    ],
    correctIndex: 3,
    explanation: "Melting only loosens the lattice while molecules remain in contact. Full separation into the gas phase costs far more."
  },
  {
    id: "6-5-4",
    question: "Condensation of a vapor is",
    options: [
      "thermoneutral",
      "always spontaneous at all temperatures",
      "endothermic, with positive ΔH",
      "exothermic, with negative ΔH"
    ],
    correctIndex: 3,
    explanation: "It is the reverse of vaporization, so its enthalpy has the opposite sign. This is why steam burns are so severe."
  },
  {
    id: "6-5-5",
    question: "A heating curve for water shows a plateau at 0 °C and a longer plateau at 100 °C. The second plateau is longer because",
    options: [
      "the enthalpy of vaporization exceeds the enthalpy of fusion",
      "the specific heat of steam is high",
      "less energy is required",
      "boiling simply takes place at a considerably higher temperature"
    ],
    correctIndex: 0,
    explanation: "Plateau length at constant heating rate is proportional to energy required. Water's values are about 6.01 and 40.7 kJ/mol."
  },
  {
    id: "6-5-6",
    question: "To calculate the total energy needed to convert ice at −10 °C to steam at 110 °C, you must",
    options: [
      "use ΔH_vap only",
      "use only the q = mcΔT relationship throughout the whole process",
      "sum the mcΔT terms and the ΔH values for each change",
      "use ΔH_fus only"
    ],
    correctIndex: 2,
    explanation: "Five separate calculations are needed, three sloped and two plateaus. Each phase has its own specific heat."
  },
  {
    id: "6-5-7",
    question: "Which substance would be expected to have the highest enthalpy of vaporization?",
    options: [
      "CH₄",
      "H₂O",
      "Ne",
      "N₂"
    ],
    correctIndex: 1,
    explanation: "Hydrogen bonding makes water's ΔH_vap unusually high for its molar mass. The others are held together by dispersion forces alone."
  },
  {
    id: "6-5-8",
    question: "Sublimation enthalpy is approximately equal to",
    options: [
      "zero",
      "ΔH_fus − ΔH_vap",
      "ΔH_fus + ΔH_vap",
      "ΔH_vap ÷ 2"
    ],
    correctIndex: 2,
    explanation: "Going solid to gas directly is equivalent to melting and then vaporizing. This additivity follows from enthalpy being a state function."
  },
  {
    id: "6-5-9",
    question: "When 18.0 g of water vapor condenses at 100 °C, the energy released is (ΔH_vap = 40.7 kJ/mol)",
    options: [
      "81.4 kJ",
      "20.4 kJ",
      "4.07 kJ",
      "40.7 kJ"
    ],
    correctIndex: 3,
    explanation: "18.0 g is exactly 1.00 mol, so 40.7 kJ is released. Condensation releases the same magnitude that vaporization absorbs."
  },
  {
    id: "6-5-10",
    question: "Evaporative cooling works because",
    options: [
      "water is cold",
      "the air temperature drops",
      "evaporation releases energy into the skin",
      "evaporation absorbs energy from the skin"
    ],
    correctIndex: 3,
    explanation: "The energy required for the phase change comes from the surface being cooled. Higher humidity slows evaporation and reduces the effect."
  }
];
