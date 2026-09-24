// AP Chemistry — Unit 8 (Acids and Bases)
// Registered in quizzes-chem/index.js as "chem-topic-8-8".
// Topic 8.8 — Properties of Buffers

window.QUIZ_QUESTIONS = [
  {
    id: "8-8-1",
    question: "The pH of a buffer depends primarily on",
    options: [
      "the absolute concentrations of the components",
      "the pKa of the weak acid and the ratio of conjugate base to acid",
      "the volume of the solution",
      "the temperature only"
    ],
    correctIndex: 1,
    explanation: "The ratio is what enters the Henderson-Hasselbalch equation. Absolute concentrations determine capacity rather than pH."
  },
  {
    id: "8-8-2",
    question: "Adding water to a buffer",
    options: [
      "changes the pH substantially",
      "leaves the pH nearly unchanged but reduces buffer capacity",
      "destroys the buffer completely",
      "increases buffer capacity"
    ],
    correctIndex: 1,
    explanation: "Both components are diluted equally, preserving their ratio. Fewer moles of each means less ability to absorb added acid or base."
  },
  {
    id: "8-8-3",
    question: "Which buffer would be most effective at pH 4.7?",
    options: [
      "NH₃/NH₄⁺ (pKa 9.25)",
      "CH₃COOH/CH₃COO⁻ (pKa 4.76)",
      "H₂PO₄⁻/HPO₄²⁻ (pKa 7.2)",
      "HCl/Cl⁻"
    ],
    correctIndex: 1,
    explanation: "The acetic acid system's pKa is nearly the target pH. HCl and Cl⁻ do not form a buffer at all."
  },
  {
    id: "8-8-4",
    question: "A buffer made from 0.10 M acetic acid and 0.10 M sodium acetate has a pH equal to",
    options: [
      "7.00",
      "the pKa of acetic acid, about 4.76",
      "2.87",
      "9.25"
    ],
    correctIndex: 1,
    explanation: "Equal concentrations give a ratio of 1 and a log term of zero. The pH of a buffer is not 7 unless the pKa happens to be 7."
  },
  {
    id: "8-8-5",
    question: "Buffer capacity increases with",
    options: [
      "lower concentrations of buffer components",
      "higher concentrations of both components",
      "greater dilution",
      "a larger difference between pH and pKa"
    ],
    correctIndex: 1,
    explanation: "More moles of each component neutralize more added acid or base. Capacity is greatest when the two are present in roughly equal amounts."
  },
  {
    id: "8-8-6",
    question: "Adding 0.010 mol of NaOH to 1.0 L of a buffer containing 0.10 mol each of HA and A⁻ produces",
    options: [
      "a large pH increase",
      "a small pH increase as some HA converts to A⁻",
      "no change in the amounts of HA and A⁻",
      "complete destruction of the buffer"
    ],
    correctIndex: 1,
    explanation: "The ratio moves from 1.00 to 0.11/0.09, roughly 1.22, changing pH by less than 0.1 unit. That resilience is what buffers are for."
  },
  {
    id: "8-8-7",
    question: "A buffer is exhausted when",
    options: [
      "the solution is diluted",
      "enough acid or base has been added to consume essentially one of the two components",
      "the temperature rises",
      "the pH reaches the pKa"
    ],
    correctIndex: 1,
    explanation: "Beyond that point, additional acid or base changes pH sharply. Reaching the pKa actually indicates maximum buffering."
  },
  {
    id: "8-8-8",
    question: "Which pair would NOT form a buffer?",
    options: [
      "HF and NaF",
      "NH₃ and NH₄Cl",
      "HNO₃ and NaNO₃",
      "H₂CO₃ and NaHCO₃"
    ],
    correctIndex: 2,
    explanation: "Nitric acid is strong, so nitrate has no meaningful basicity. A buffer requires a weak conjugate pair."
  },
  {
    id: "8-8-9",
    question: "To prepare a buffer of a specific pH, a chemist should first",
    options: [
      "choose a weak acid whose pKa is close to the target pH",
      "choose the most concentrated acid available",
      "use a strong acid",
      "adjust the volume"
    ],
    correctIndex: 0,
    explanation: "The ratio can then be fine-tuned with the Henderson-Hasselbalch equation. Starting from a badly mismatched pKa requires extreme ratios and weak buffering."
  },
  {
    id: "8-8-10",
    question: "Two buffers have the same pH, but one is 1.0 M and the other 0.010 M in both components. Compared with the dilute one, the concentrated buffer",
    options: [
      "has a higher pH",
      "has greater buffer capacity",
      "has lower capacity",
      "is not a buffer"
    ],
    correctIndex: 1,
    explanation: "Identical ratios give identical pH values. The concentrated buffer can absorb far more added acid or base before failing."
  }
];
