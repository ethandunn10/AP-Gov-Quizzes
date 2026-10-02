// AP Chemistry — Unit 4 (Chemical Reactions)
// Registered in quizzes-chem/index.js as "chem-topic-4-6".
// Topic 4.6 — Introduction to Titration

window.QUIZ_QUESTIONS = [
  {
    id: "4-6-1",
    question: "The equivalence point of a titration is reached when",
    options: [
      "the titrant added exactly satisfies the stoichiometry",
      "the solution always becomes exactly neutral in every case",
      "the burette is empty",
      "the indicator changes color"
    ],
    correctIndex: 0,
    explanation: "The endpoint, where the indicator changes, is a practical approximation of it. A weak acid titrated with strong base has an equivalence point above pH 7."
  },
  {
    id: "4-6-2",
    question: "25.0 mL of HCl requires 30.0 mL of 0.100 M NaOH to reach the equivalence point. The HCl concentration is",
    options: [
      "0.120 M",
      "0.100 M",
      "0.300 M",
      "0.0833 M"
    ],
    correctIndex: 0,
    explanation: "Moles NaOH = 0.00300, and the 1:1 reaction means the same moles of HCl in 0.0250 L, giving 0.120 M. Needing more base than acid volume implies the acid is more concentrated."
  },
  {
    id: "4-6-3",
    question: "In titrating H₂SO₄ with NaOH, the mole ratio of base to acid at the equivalence point is",
    options: [
      "3:1",
      "1:1",
      "2:1",
      "1:2"
    ],
    correctIndex: 2,
    explanation: "Sulfuric acid is diprotic, so each mole needs two moles of hydroxide. Ignoring the second proton halves the calculated concentration."
  },
  {
    id: "4-6-4",
    question: "Rinsing a burette with distilled water and then filling it with titrant without rinsing with titrant will",
    options: [
      "make the titrant more concentrated",
      "make the endpoint entirely impossible to detect properly",
      "have no effect",
      "dilute the titrant, so the measured volume is too large"
    ],
    correctIndex: 3,
    explanation: "Residual water lowers the true titrant concentration below its assumed value. Rinsing glassware with the solution it will hold prevents this systematic error."
  },
  {
    id: "4-6-5",
    question: "Adding extra distilled water to the analyte flask before titrating",
    options: [
      "does not affect it; the moles of analyte are unchanged",
      "always causes an endpoint too early",
      "requires recalculating the titrant concentration",
      "changes the moles of analyte and invalidates the result"
    ],
    correctIndex: 0,
    explanation: "Titration counts moles, and dilution changes concentration but not the amount present. This is why rinsing the flask with water is acceptable."
  },
  {
    id: "4-6-6",
    question: "A good indicator for a titration is one whose color change occurs",
    options: [
      "over a pH range including the steep part of the curve",
      "right at the very beginning of the entire titration process",
      "at any pH",
      "at exactly pH 7 always"
    ],
    correctIndex: 0,
    explanation: "On the steep section, a fraction of a drop changes pH dramatically, so the endpoint is sharp. Phenolphthalein suits weak acid titrations because it changes in the basic region."
  },
  {
    id: "4-6-7",
    question: "A titration curve for a strong acid with a strong base shows",
    options: [
      "no change in pH",
      "a steady decline",
      "a gradual, perfectly linear rise throughout the titration",
      "a slow rise, a steep section near pH 7, then leveling"
    ],
    correctIndex: 3,
    explanation: "The steep region reflects the rapid consumption of the last of the acid. Buffer regions, absent here, flatten the curve in weak acid titrations."
  },
  {
    id: "4-6-8",
    question: "A 0.500 g sample of impure Na₂CO₃ is titrated and found to contain 0.00400 mol of carbonate. If the molar mass is 106 g/mol, the percent purity is",
    options: [
      "21.2%",
      "84.8%",
      "42.4%",
      "106%"
    ],
    correctIndex: 1,
    explanation: "0.00400 mol × 106 g/mol = 0.424 g, and 0.424/0.500 = 84.8%. Purity must be at or below 100%, which rules out one option immediately."
  },
  {
    id: "4-6-9",
    question: "Overshooting the endpoint by adding excess titrant causes the calculated analyte concentration to be",
    options: [
      "negative",
      "too low",
      "too high",
      "unchanged"
    ],
    correctIndex: 2,
    explanation: "A larger recorded volume implies more moles of analyte than were actually present. Adding titrant dropwise near the endpoint avoids this."
  },
  {
    id: "4-6-10",
    question: "Titration is classified as a quantitative technique because it",
    options: [
      "identifies the unknown substances that are present",
      "determines the amount using a measured reaction",
      "separates mixtures",
      "measures reaction rate"
    ],
    correctIndex: 1,
    explanation: "It answers how much rather than what. A standard solution of accurately known concentration is essential to that."
  }
];
