// AP Chemistry — Unit 4 (Chemical Reactions)
// Registered in quizzes-chem/index.js as "chem-topic-4-5".
// Topic 4.5 — Stoichiometry

window.QUIZ_QUESTIONS = [
  {
    id: "4-5-1",
    question: "For 2H₂ + O₂ → 2H₂O, how many moles of H₂O form from 3.0 mol of H₂ with excess O₂?",
    options: [
      "1.5 mol",
      "3.0 mol",
      "6.0 mol",
      "2.0 mol"
    ],
    correctIndex: 1,
    explanation: "The H₂ to H₂O ratio is 2:2, or 1:1. Using the O₂ coefficient by mistake gives the incorrect 1.5 mol."
  },
  {
    id: "4-5-2",
    question: "N₂ + 3H₂ → 2NH₃. Starting with 2.0 mol N₂ and 3.0 mol H₂, the limiting reactant is",
    options: [
      "N₂",
      "H₂",
      "Neither; they are stoichiometric",
      "Cannot be determined"
    ],
    correctIndex: 1,
    explanation: "2.0 mol N₂ would require 6.0 mol H₂, but only 3.0 mol is available. Hydrogen runs out first and limits the yield to 2.0 mol NH₃."
  },
  {
    id: "4-5-3",
    question: "If 0.500 mol of Al reacts completely by 4Al + 3O₂ → 2Al₂O₃, the moles of Al₂O₃ produced are",
    options: [
      "0.250 mol",
      "0.500 mol",
      "1.00 mol",
      "0.125 mol"
    ],
    correctIndex: 0,
    explanation: "The ratio of Al to Al₂O₃ is 4:2, so 0.500 × (2/4) = 0.250 mol. Inverting the ratio gives 1.00 mol, a common slip."
  },
  {
    id: "4-5-4",
    question: "Percent yield is calculated as",
    options: [
      "(theoretical yield ÷ actual yield) × 100",
      "(actual yield ÷ theoretical yield) × 100",
      "actual yield − theoretical yield",
      "theoretical yield × 100"
    ],
    correctIndex: 1,
    explanation: "Actual yield is always the numerator, so results above 100% indicate impurity or error. Losses during transfer and side reactions lower it."
  },
  {
    id: "4-5-5",
    question: "A reaction has a theoretical yield of 12.0 g and an actual yield of 9.60 g. The percent yield is",
    options: [
      "80.0%",
      "125%",
      "20.0%",
      "2.40%"
    ],
    correctIndex: 0,
    explanation: "9.60/12.0 × 100 = 80.0%. Since the actual is less than the theoretical, the answer must be below 100%."
  },
  {
    id: "4-5-6",
    question: "How many grams of CO₂ (44.0 g/mol) form when 0.250 mol of CH₄ burns completely?",
    options: [
      "11.0 g",
      "22.0 g",
      "5.50 g",
      "44.0 g"
    ],
    correctIndex: 0,
    explanation: "CH₄ + 2O₂ → CO₂ + 2H₂O gives 0.250 mol CO₂, or 11.0 g. The 1:1 carbon relationship makes this quick."
  },
  {
    id: "4-5-7",
    question: "In a reaction where reactant A is in excess, increasing the amount of A will",
    options: [
      "increase the theoretical yield",
      "not change the theoretical yield, which is set by the limiting reactant",
      "decrease the yield",
      "change the limiting reactant to A"
    ],
    correctIndex: 1,
    explanation: "Only the limiting reactant controls how much product can form. Adding more of the excess reagent simply leaves more unreacted."
  },
  {
    id: "4-5-8",
    question: "2.00 mol of Fe reacts with 2.00 mol of S by Fe + S → FeS. After complete reaction,",
    options: [
      "1.00 mol FeS forms with Fe left over",
      "2.00 mol FeS forms with neither reactant left over",
      "4.00 mol FeS forms",
      "2.00 mol FeS forms with 1.00 mol S left over"
    ],
    correctIndex: 1,
    explanation: "The 1:1 stoichiometry means equal moles react exactly. Neither reactant is limiting when they are supplied in the stoichiometric ratio."
  },
  {
    id: "4-5-9",
    question: "A student needs 0.100 mol of product from a reaction with 75.0% yield. The moles of limiting reactant needed (1:1 stoichiometry) are",
    options: [
      "0.0750 mol",
      "0.133 mol",
      "0.100 mol",
      "0.175 mol"
    ],
    correctIndex: 1,
    explanation: "0.100 ÷ 0.750 = 0.133 mol must be used to account for losses. Multiplying by 0.75 instead gives too little material."
  },
  {
    id: "4-5-10",
    question: "Stoichiometric calculations always require that the equation first be",
    options: [
      "written with phases",
      "balanced, so mole ratios are correct",
      "reversed",
      "converted to a net ionic equation"
    ],
    correctIndex: 1,
    explanation: "Coefficients from an unbalanced equation give wrong ratios and wrong answers. Balancing is the mandatory first step."
  }
];
