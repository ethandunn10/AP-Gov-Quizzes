// AP Chemistry — Unit 4 (Chemical Reactions)
// Registered in quizzes-chem/index.js as "chem-topic-4-6".
// Topic 4.6 — Introduction to Titration

window.QUIZ_QUESTIONS = [
  {
    id: "4-6-1",
    question: "The equivalence point of a titration is reached when",
    options: [
      "the indicator changes color",
      "the moles of titrant added exactly satisfy the stoichiometry of the reaction with the analyte",
      "the solution becomes neutral in all cases",
      "the burette is empty"
    ],
    correctIndex: 1,
    explanation: "The endpoint, where the indicator changes, is a practical approximation of it. A weak acid titrated with strong base has an equivalence point above pH 7."
  },
  {
    id: "4-6-2",
    question: "25.0 mL of HCl requires 30.0 mL of 0.100 M NaOH to reach the equivalence point. The HCl concentration is",
    options: [
      "0.0833 M",
      "0.120 M",
      "0.100 M",
      "0.300 M"
    ],
    correctIndex: 1,
    explanation: "Moles NaOH = 0.00300, and the 1:1 reaction means the same moles of HCl in 0.0250 L, giving 0.120 M. Needing more base than acid volume implies the acid is more concentrated."
  },
  {
    id: "4-6-3",
    question: "In titrating H₂SO₄ with NaOH, the mole ratio of base to acid at the equivalence point is",
    options: [
      "1:1",
      "2:1",
      "1:2",
      "3:1"
    ],
    correctIndex: 1,
    explanation: "Sulfuric acid is diprotic, so each mole needs two moles of hydroxide. Ignoring the second proton halves the calculated concentration."
  },
  {
    id: "4-6-4",
    question: "Rinsing a burette with distilled water and then filling it with titrant without rinsing with titrant will",
    options: [
      "have no effect",
      "dilute the titrant, so the measured volume is too large and the calculated analyte concentration too high",
      "make the titrant more concentrated",
      "make the endpoint impossible to detect"
    ],
    correctIndex: 1,
    explanation: "Residual water lowers the true titrant concentration below its assumed value. Rinsing glassware with the solution it will hold prevents this systematic error."
  },
  {
    id: "4-6-5",
    question: "Adding extra distilled water to the analyte flask before titrating",
    options: [
      "changes the moles of analyte and invalidates the result",
      "does not affect the result, because the moles of analyte are unchanged",
      "always causes an endpoint too early",
      "requires recalculating the titrant concentration"
    ],
    correctIndex: 1,
    explanation: "Titration counts moles, and dilution changes concentration but not the amount present. This is why rinsing the flask with water is acceptable."
  },
  {
    id: "4-6-6",
    question: "A good indicator for a titration is one whose color change occurs",
    options: [
      "at exactly pH 7 always",
      "over a pH range that includes the steep portion of the titration curve near the equivalence point",
      "at the start of the titration",
      "at any pH"
    ],
    correctIndex: 1,
    explanation: "On the steep section, a fraction of a drop changes pH dramatically, so the endpoint is sharp. Phenolphthalein suits weak acid titrations because it changes in the basic region."
  },
  {
    id: "4-6-7",
    question: "A titration curve for a strong acid with a strong base shows",
    options: [
      "a gradual linear rise",
      "a slow rise, a steep vertical section near pH 7, and then a leveling off",
      "no change in pH",
      "a steady decline"
    ],
    correctIndex: 1,
    explanation: "The steep region reflects the rapid consumption of the last of the acid. Buffer regions, absent here, flatten the curve in weak acid titrations."
  },
  {
    id: "4-6-8",
    question: "A 0.500 g sample of impure Na₂CO₃ is titrated and found to contain 0.00400 mol of carbonate. If the molar mass is 106 g/mol, the percent purity is",
    options: [
      "84.8%",
      "42.4%",
      "106%",
      "21.2%"
    ],
    correctIndex: 0,
    explanation: "0.00400 mol × 106 g/mol = 0.424 g, and 0.424/0.500 = 84.8%. Purity must be at or below 100%, which rules out one option immediately."
  },
  {
    id: "4-6-9",
    question: "Overshooting the endpoint by adding excess titrant causes the calculated analyte concentration to be",
    options: [
      "too low",
      "too high",
      "unchanged",
      "negative"
    ],
    correctIndex: 1,
    explanation: "A larger recorded volume implies more moles of analyte than were actually present. Adding titrant dropwise near the endpoint avoids this."
  },
  {
    id: "4-6-10",
    question: "Titration is classified as a quantitative technique because it",
    options: [
      "identifies unknown substances",
      "determines the amount of a substance using a measured reaction with a standard solution",
      "separates mixtures",
      "measures reaction rate"
    ],
    correctIndex: 1,
    explanation: "It answers how much rather than what. A standard solution of accurately known concentration is essential to that."
  }
];
