// AP Chemistry — Unit 8 (Acids and Bases)
// Registered in quizzes-chem/index.js as "chem-topic-8-2".
// Topic 8.2 — pH and pOH of Strong Acids and Bases

window.QUIZ_QUESTIONS = [
  {
    id: "8-2-1",
    question: "The pH of a 0.010 M HCl solution is",
    options: [
      "1.0",
      "2.0",
      "12.0",
      "0.010"
    ],
    correctIndex: 1,
    explanation: "HCl is strong, so [H⁺] = 0.010 M and pH = −log(0.010) = 2.0. The concentration itself is never the pH."
  },
  {
    id: "8-2-2",
    question: "At 25 °C, pH + pOH equals",
    options: [
      "7",
      "14",
      "1",
      "0"
    ],
    correctIndex: 1,
    explanation: "This follows from taking the negative log of Kw = 10⁻¹⁴. The relationship holds only at 25 °C."
  },
  {
    id: "8-2-3",
    question: "A 0.0010 M NaOH solution has a pH of",
    options: [
      "3.0",
      "11.0",
      "10.0",
      "14.0"
    ],
    correctIndex: 1,
    explanation: "pOH = −log(0.0010) = 3.0, so pH = 14.0 − 3.0 = 11.0. Reporting 3.0 means forgetting to convert pOH to pH."
  },
  {
    id: "8-2-4",
    question: "A solution with pH 3 compared with one at pH 6 has a hydrogen ion concentration that is",
    options: [
      "twice as large",
      "1000 times as large",
      "half as large",
      "3 times as large"
    ],
    correctIndex: 1,
    explanation: "Each pH unit is a factor of 10, and three units is 10³. The logarithmic scale is easy to underestimate."
  },
  {
    id: "8-2-5",
    question: "The pH of a 0.050 M Ca(OH)₂ solution is",
    options: [
      "1.3",
      "12.7",
      "13.0",
      "11.3"
    ],
    correctIndex: 2,
    explanation: "Each formula unit gives two OH⁻, so [OH⁻] = 0.10 M, pOH = 1.0, and pH = 13.0. Ignoring the factor of 2 gives 12.7."
  },
  {
    id: "8-2-6",
    question: "A solution with pH 7.0 at 25 °C is",
    options: [
      "acidic",
      "neutral",
      "basic",
      "impossible"
    ],
    correctIndex: 1,
    explanation: "[H⁺] and [OH⁻] are both 10⁻⁷ M. At other temperatures the neutral point shifts because Kw changes."
  },
  {
    id: "8-2-7",
    question: "Diluting a strong acid solution tenfold changes the pH by",
    options: [
      "no change",
      "an increase of 1 unit",
      "a decrease of 1 unit",
      "an increase of 10 units"
    ],
    correctIndex: 1,
    explanation: "Ten times less H⁺ raises pH by one. Extreme dilution approaches but never exceeds pH 7 for an acid."
  },
  {
    id: "8-2-8",
    question: "If [OH⁻] = 1.0 × 10⁻⁴ M, the pH is",
    options: [
      "4.0",
      "10.0",
      "7.0",
      "14.0"
    ],
    correctIndex: 1,
    explanation: "pOH = 4.0, so pH = 10.0. The solution is basic, consistent with a pH above 7."
  },
  {
    id: "8-2-9",
    question: "The pH of 1.0 × 10⁻⁸ M HCl is",
    options: [
      "8.0",
      "slightly below 7, because water's autoionization dominates",
      "exactly 7.0",
      "6.0"
    ],
    correctIndex: 1,
    explanation: "An acid can never produce a basic solution, so pH 8 is impossible. At such low concentrations, water's own H⁺ must be included."
  },
  {
    id: "8-2-10",
    question: "Two strong acid solutions, 0.10 M HCl and 0.10 M HNO₃, have",
    options: [
      "different pH values",
      "the same pH, since both ionize completely",
      "pH values differing by 1",
      "no measurable pH"
    ],
    correctIndex: 1,
    explanation: "Both give [H⁺] = 0.10 M and pH = 1.00. This is the leveling effect in action."
  }
];
