// AP Chemistry — Unit 3 (Properties of Substances and Mixtures)
// Registered in quizzes-chem/index.js as "chem-topic-3-4".
// Topic 3.4 — Ideal Gas Law

window.QUIZ_QUESTIONS = [
  {
    id: "3-4-1",
    question: "A sample of gas occupies 4.00 L at 2.00 atm. At constant temperature, what volume does it occupy at 1.00 atm?",
    options: [
      "2.00 L",
      "8.00 L",
      "4.00 L",
      "0.500 L"
    ],
    correctIndex: 1,
    explanation: "Boyle's law gives P₁V₁ = P₂V₂, so V₂ = (2.00)(4.00)/1.00 = 8.00 L. Halving the pressure must increase the volume, which rules out 2.00 L immediately."
  },
  {
    id: "3-4-2",
    question: "How many moles of gas occupy 11.2 L at STP (273 K, 1.00 atm)?",
    options: [
      "0.500 mol",
      "1.00 mol",
      "2.00 mol",
      "22.4 mol"
    ],
    correctIndex: 0,
    explanation: "One mole occupies 22.4 L at STP, so 11.2 L is half a mole. The molar volume shortcut works only at those specific conditions."
  },
  {
    id: "3-4-3",
    question: "A gas at 300. K and 1.50 atm is heated to 600. K at constant volume. The new pressure is",
    options: [
      "0.750 atm",
      "1.50 atm",
      "3.00 atm",
      "6.00 atm"
    ],
    correctIndex: 2,
    explanation: "P/T is constant, and doubling absolute temperature doubles pressure. Temperature must be in kelvins for this proportionality to hold."
  },
  {
    id: "3-4-4",
    question: "What is the volume of 0.500 mol of an ideal gas at 2.00 atm and 27 °C? (R = 0.0821 L·atm/mol·K)",
    options: [
      "6.16 L",
      "12.3 L",
      "3.08 L",
      "0.164 L"
    ],
    correctIndex: 0,
    explanation: "V = nRT/P = (0.500)(0.0821)(300.)/2.00 = 6.16 L. Forgetting to convert 27 °C to 300. K is the usual source of error."
  },
  {
    id: "3-4-5",
    question: "In a mixture of gases, the partial pressure of a component equals",
    options: [
      "the total pressure divided by the number of gases",
      "the mole fraction of that gas times the total pressure",
      "the total pressure",
      "the mass fraction times the total pressure"
    ],
    correctIndex: 1,
    explanation: "Dalton's law depends on particle counts, not masses. Dividing evenly would only be correct if all components were present in equal moles."
  },
  {
    id: "3-4-6",
    question: "A container holds 2.0 mol N₂ and 3.0 mol O₂ at a total pressure of 5.0 atm. The partial pressure of N₂ is",
    options: [
      "1.0 atm",
      "2.0 atm",
      "2.5 atm",
      "3.0 atm"
    ],
    correctIndex: 1,
    explanation: "The mole fraction of N₂ is 2.0/5.0 = 0.40, so 0.40 × 5.0 atm = 2.0 atm. Molar masses are irrelevant to partial pressures."
  },
  {
    id: "3-4-7",
    question: "The density of an ideal gas increases when",
    options: [
      "temperature increases at constant pressure",
      "pressure increases at constant temperature",
      "the gas is transferred to a larger container at constant temperature and amount",
      "molar mass decreases"
    ],
    correctIndex: 1,
    explanation: "From d = PM/RT, density rises with pressure and molar mass and falls with temperature. Heating a gas at fixed pressure makes it expand and thin out."
  },
  {
    id: "3-4-8",
    question: "A 0.250 mol sample of gas occupies 5.60 L at 273 K. The pressure is closest to",
    options: [
      "1.00 atm",
      "0.500 atm",
      "2.00 atm",
      "4.00 atm"
    ],
    correctIndex: 0,
    explanation: "P = nRT/V = (0.250)(0.0821)(273)/5.60 = 1.00 atm. Note that 0.250 mol at STP would occupy 5.60 L, which confirms the result."
  },
  {
    id: "3-4-9",
    question: "Equal volumes of two different ideal gases at the same temperature and pressure contain",
    options: [
      "equal masses",
      "equal numbers of molecules",
      "equal densities",
      "equal molar masses"
    ],
    correctIndex: 1,
    explanation: "This is Avogadro's hypothesis, which follows directly from PV = nRT. Masses and densities differ whenever the molar masses differ."
  },
  {
    id: "3-4-10",
    question: "A gas sample's volume is 2.00 L at 1.00 atm and 300. K. What is its volume at 0.500 atm and 600. K?",
    options: [
      "2.00 L",
      "4.00 L",
      "8.00 L",
      "1.00 L"
    ],
    correctIndex: 2,
    explanation: "Halving the pressure doubles the volume and doubling the temperature doubles it again, giving 8.00 L. Applying the combined gas law in one step gives the same result."
  }
];
