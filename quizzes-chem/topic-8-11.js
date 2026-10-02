// AP Chemistry — Unit 8 (Acids and Bases)
// Registered in quizzes-chem/index.js as "chem-topic-8-11".
// Topic 8.11 — pH and Solubility

window.QUIZ_QUESTIONS = [
  {
    id: "8-11-1",
    question: "The solubility of a salt increases in acidic solution when its anion is",
    options: [
      "a halide",
      "a nitrate",
      "the conjugate base of a strong acid",
      "the conjugate base of a weak acid"
    ],
    correctIndex: 3,
    explanation: "Added H⁺ removes the anion by protonating it, pulling the dissolution equilibrium forward. Conjugate bases of strong acids, like Cl⁻ and NO₃⁻, do not react with H⁺."
  },
  {
    id: "8-11-2",
    question: "CaCO₃ dissolves more readily in acidic solution because",
    options: [
      "Ksp increases",
      "the temperature rises",
      "the Ca²⁺ ion reacts directly with all the added H⁺",
      "carbonate is protonated to HCO₃⁻ and then to CO₂"
    ],
    correctIndex: 3,
    explanation: "Removing carbonate shifts the equilibrium toward dissolution. This is why acid rain damages limestone and marble."
  },
  {
    id: "8-11-3",
    question: "The solubility of AgCl is essentially unaffected by pH because",
    options: [
      "AgCl is a very strong electrolyte in water",
      "AgCl is very soluble",
      "Cl⁻ is a strong acid's conjugate base",
      "Ag⁺ is a base"
    ],
    correctIndex: 2,
    explanation: "A negligible base is not removed by adding acid. Salts of weak-acid anions behave very differently."
  },
  {
    id: "8-11-4",
    question: "Metal hydroxides such as Mg(OH)₂ become more soluble as pH",
    options: [
      "reaches 14",
      "increases",
      "decreases",
      "stays constant"
    ],
    correctIndex: 2,
    explanation: "Added H⁺ consumes OH⁻, shifting dissolution forward. Raising pH adds the common ion OH⁻ and suppresses solubility."
  },
  {
    id: "8-11-5",
    question: "Which salt's solubility would be most increased by lowering the pH?",
    options: [
      "KNO₃",
      "AgBr",
      "NaCl",
      "CaF₂"
    ],
    correctIndex: 3,
    explanation: "Fluoride is the conjugate base of weak HF and is protonated by acid. The other anions come from strong acids or are already very soluble salts."
  },
  {
    id: "8-11-6",
    question: "Tooth enamel, largely hydroxyapatite, is damaged by acid because",
    options: [
      "H⁺ removes hydroxide and phosphate, shifting equilibrium",
      "acid lowers the temperature",
      "acid increases Ksp",
      "the acid physically scratches away at the whole enamel surface"
    ],
    correctIndex: 0,
    explanation: "Both anions in the mineral are basic and react with acid. Fluoride treatments substitute a less acid-soluble mineral."
  },
  {
    id: "8-11-7",
    question: "Adding NaOH to a saturated solution of Mg(OH)₂ will",
    options: [
      "decrease solubility by the common-ion effect",
      "not change solubility",
      "increase Ksp",
      "greatly increase the solubility quite substantially"
    ],
    correctIndex: 0,
    explanation: "Additional OH⁻ pushes the equilibrium back toward the solid. Ksp remains constant at fixed temperature."
  },
  {
    id: "8-11-8",
    question: "For the equilibrium MA(s) ⇌ M⁺(aq) + A⁻(aq), where A⁻ is basic, adding acid",
    options: [
      "precipitates a great deal more of the solid phase",
      "increases [A⁻]",
      "decreases [A⁻], causing more solid to dissolve",
      "has no effect"
    ],
    correctIndex: 2,
    explanation: "Le Chatelier's principle governs the response to removing a product. The overall effect couples two equilibria."
  },
  {
    id: "8-11-9",
    question: "Which of the following would NOT affect the solubility of Ca₃(PO₄)₂?",
    options: [
      "Adding Na₃PO₄",
      "Adding CaCl₂",
      "Adding HCl",
      "Adding NaNO₃"
    ],
    correctIndex: 3,
    explanation: "Neither sodium nor nitrate participates in the equilibrium. The other three either protonate phosphate or add a common ion."
  },
  {
    id: "8-11-10",
    question: "Kidney stones composed of calcium oxalate form more readily when urine",
    options: [
      "has high calcium or oxalate, so Q exceeds Ksp",
      "contains no ions",
      "is very dilute",
      "is strongly acidic rather than being at all basic"
    ],
    correctIndex: 0,
    explanation: "Precipitation begins when the ion product exceeds Ksp. Increasing fluid intake lowers concentrations and keeps Q below Ksp."
  }
];
