// AP Chemistry — Unit 1 (Atomic Structure and Properties)
// Registered in quizzes-chem/index.js as "chem-topic-1-3".
// Topic 1.3 — Elemental Composition of Pure Substances

window.QUIZ_QUESTIONS = [
  {
    id: "1-3-1",
    question: "A compound is 40.0% C, 6.7% H, and 53.3% O by mass. Its empirical formula is",
    options: [
      "CHO",
      "CH₂O",
      "C₂H₄O₂",
      "CH₄O"
    ],
    correctIndex: 1,
    explanation: "Per 100 g: 3.33 mol C, 6.7 mol H, 3.33 mol O, dividing by 3.33 gives 1:2:1. C₂H₄O₂ has the same percentages but is a molecular formula, not the empirical one."
  },
  {
    id: "1-3-2",
    question: "A compound has empirical formula CH₂ and molar mass 42.0 g/mol. Its molecular formula is",
    options: [
      "CH₂",
      "C₂H₄",
      "C₃H₆",
      "C₄H₈"
    ],
    correctIndex: 2,
    explanation: "The empirical formula mass is 14.0, and 42.0 ÷ 14.0 = 3, so multiply subscripts by 3. Skipping this ratio step is the most common error in these problems."
  },
  {
    id: "1-3-3",
    question: "What is the mass percent of nitrogen in NH₄NO₃ (80.0 g/mol)?",
    options: [
      "17.5%",
      "35.0%",
      "28.0%",
      "50.0%"
    ],
    correctIndex: 1,
    explanation: "Two N atoms give 28.0 g per mole, and 28.0/80.0 = 35.0%. Counting only one nitrogen gives 17.5%, which is the trap in this formula."
  },
  {
    id: "1-3-4",
    question: "The law of definite proportions states that a pure compound",
    options: [
      "always contains the same elements in the same mass ratio",
      "can have variable composition depending on preparation",
      "must contain equal masses of each element",
      "has the same molar mass as its elements combined separately"
    ],
    correctIndex: 0,
    explanation: "Water from any source is 11.2% H and 88.8% O by mass. Variable composition is characteristic of mixtures, not compounds."
  },
  {
    id: "1-3-5",
    question: "A 2.50 g sample of a hydrocarbon burns to give 7.86 g CO₂ and 3.21 g H₂O. The moles of carbon in the original sample are",
    options: [
      "0.179 mol",
      "0.357 mol",
      "0.0893 mol",
      "7.86 mol"
    ],
    correctIndex: 0,
    explanation: "All carbon ends up in CO₂: 7.86 g ÷ 44.0 g/mol = 0.179 mol CO₂, and each carries one C. Hydrogen is found the same way from water, remembering two H per molecule."
  },
  {
    id: "1-3-6",
    question: "Which pair of compounds illustrates the law of multiple proportions?",
    options: [
      "H₂O and H₂O",
      "CO and CO₂",
      "NaCl and KCl",
      "O₂ and O₃"
    ],
    correctIndex: 1,
    explanation: "For a fixed mass of carbon, the oxygen masses in CO and CO₂ are in a simple 1:2 ratio. O₂ and O₃ are allotropes of a single element, not two compounds."
  },
  {
    id: "1-3-7",
    question: "The empirical formula of glucose, C₆H₁₂O₆, is",
    options: [
      "C₆H₁₂O₆",
      "CH₂O",
      "C₃H₆O₃",
      "CHO"
    ],
    correctIndex: 1,
    explanation: "Dividing all subscripts by the greatest common factor of 6 gives CH₂O. C₃H₆O₃ divides by only 2 and so is not fully reduced."
  },
  {
    id: "1-3-8",
    question: "Which measurement is required to determine a molecular formula once the empirical formula is known?",
    options: [
      "The density of the solid",
      "The molar mass of the compound",
      "The melting point",
      "The percent yield of the reaction"
    ],
    correctIndex: 1,
    explanation: "Percent composition alone cannot distinguish CH₂O from C₆H₁₂O₆, since the ratios are identical. Only the molar mass fixes the multiplier."
  },
  {
    id: "1-3-9",
    question: "A 1.00 g sample of a metal oxide contains 0.600 g of metal (M = 24.3 g/mol) and the rest oxygen. The empirical formula is",
    options: [
      "MO",
      "M₂O",
      "MO₂",
      "M₂O₃"
    ],
    correctIndex: 0,
    explanation: "0.600/24.3 = 0.0247 mol metal and 0.400/16.0 = 0.0250 mol O, a 1:1 ratio. Small rounding differences like 0.0247 versus 0.0250 should be read as equal, not as a 2:3 ratio."
  },
  {
    id: "1-3-10",
    question: "Two samples of the same pure compound from different sources are analyzed. Their percent compositions",
    options: [
      "will differ if the samples have different masses",
      "will be identical",
      "depend on the temperature of analysis",
      "depend on the physical state of the sample"
    ],
    correctIndex: 1,
    explanation: "Percent composition is an intensive property fixed by the formula. Sample size, phase, and temperature do not change the mass ratio of elements within the compound."
  }
];
