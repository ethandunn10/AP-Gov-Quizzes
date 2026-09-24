// AP Chemistry — Unit 1 (Atomic Structure and Properties)
// Registered in quizzes-chem/index.js as "chem-topic-1-1".
// Topic 1.1 — Moles and Molar Mass
// Formulas use Unicode sub/superscripts (H₂O, SO₄²⁻); js/quiz.js renders
// with textContent, so HTML tags would display literally.

window.QUIZ_QUESTIONS = [
  {
    id: "1-1-1",
    question: "A sample of CO₂ has a mass of 22.0 g. How many moles of CO₂ are present? (M = 44.0 g/mol)",
    options: [
      "0.500 mol",
      "2.00 mol",
      "22.0 mol",
      "0.250 mol"
    ],
    correctIndex: 0,
    explanation: "n = m/M = 22.0 g ÷ 44.0 g/mol = 0.500 mol. Choosing 2.00 mol means dividing the molar mass by the mass instead of the other way around — always check that grams cancel."
  },
  {
    id: "1-1-2",
    question: "How many oxygen atoms are in 0.250 mol of Al₂(SO₄)₃?",
    options: [
      "1.51 × 10²³",
      "1.81 × 10²⁴",
      "6.02 × 10²³",
      "3.01 × 10²³"
    ],
    correctIndex: 1,
    explanation: "Each formula unit holds 12 O atoms (3 × 4), so 0.250 mol × 12 = 3.00 mol O, and 3.00 × 6.02 × 10²³ = 1.81 × 10²⁴. The common error is counting only the 4 oxygens shown inside the parentheses."
  },
  {
    id: "1-1-3",
    question: "Which sample contains the greatest number of particles?",
    options: [
      "1.0 g of H₂",
      "1.0 g of He",
      "1.0 g of O₂",
      "1.0 g of CO₂"
    ],
    correctIndex: 0,
    explanation: "At equal mass, the smallest molar mass gives the most moles, and H₂ at 2.0 g/mol is lightest. Helium is tempting because it is a single atom, but its molar mass is twice that of H₂."
  },
  {
    id: "1-1-4",
    question: "The molar mass of a compound is best described as",
    options: [
      "the mass of one molecule in grams",
      "the mass in grams of 6.022 × 10²³ formula units",
      "the number of atoms in one gram of the substance",
      "the mass of one mole of electrons in the compound"
    ],
    correctIndex: 1,
    explanation: "Molar mass connects the laboratory scale (grams) to the particle scale (Avogadro's number of units). One molecule has a mass far smaller than a gram, so the first option is off by about 10²³."
  },
  {
    id: "1-1-5",
    question: "A 5.00 g sample of an unknown metal contains 0.0896 mol of atoms. The metal is most likely",
    options: [
      "Mg (24.3 g/mol)",
      "Fe (55.8 g/mol)",
      "Cu (63.5 g/mol)",
      "Zn (65.4 g/mol)"
    ],
    correctIndex: 1,
    explanation: "M = m/n = 5.00 g ÷ 0.0896 mol = 55.8 g/mol, which is iron. Identifying an unknown from its molar mass is the standard use of this relationship, and the mass alone tells you nothing without the mole count."
  },
  {
    id: "1-1-6",
    question: "How many grams of NaCl (58.44 g/mol) are needed to obtain 1.20 mol?",
    options: [
      "48.7 g",
      "70.1 g",
      "58.4 g",
      "0.0205 g"
    ],
    correctIndex: 1,
    explanation: "m = nM = 1.20 mol × 58.44 g/mol = 70.1 g. Dividing instead of multiplying gives 48.7 g, which is smaller than one mole's mass and so cannot be right for more than a mole."
  },
  {
    id: "1-1-7",
    question: "Two samples contain the same number of moles. Which quantity must be the same for both?",
    options: [
      "Mass",
      "Volume",
      "Number of particles",
      "Density"
    ],
    correctIndex: 2,
    explanation: "The mole is a counting unit, so equal moles means equal particle counts regardless of identity. Mass differs whenever the molar masses differ."
  },
  {
    id: "1-1-8",
    question: "A student needs 0.150 mol of glucose, C₆H₁₂O₆ (180.2 g/mol). The mass required is",
    options: [
      "27.0 g",
      "1.20 × 10³ g",
      "180 g",
      "0.833 g"
    ],
    correctIndex: 0,
    explanation: "0.150 mol × 180.2 g/mol = 27.0 g. Since the amount is less than one mole, the answer must be less than 180 g — a quick sanity check that rules out two distractors."
  },
  {
    id: "1-1-9",
    question: "Which statement about Avogadro's number is correct?",
    options: [
      "It equals the mass in grams of one atom of carbon-12",
      "It is the number of particles in one mole of any substance",
      "It applies only to gases at standard conditions",
      "It changes depending on the element considered"
    ],
    correctIndex: 1,
    explanation: "One mole is 6.022 × 10²³ particles whether they are atoms, molecules, or ions. Its definition is tied to carbon-12, but the number itself is universal."
  },
  {
    id: "1-1-10",
    question: "A 1.00 mol sample of N₂ and a 1.00 mol sample of N₂O are compared. Which is true?",
    options: [
      "Both contain the same total number of nitrogen atoms",
      "N₂O contains more nitrogen atoms",
      "Both have the same mass",
      "N₂ contains more molecules"
    ],
    correctIndex: 0,
    explanation: "Each formula holds two N atoms, so 1.00 mol of either gives 2.00 mol of N. Their masses differ (28.0 g versus 44.0 g) because N₂O also carries an oxygen."
  }
];
