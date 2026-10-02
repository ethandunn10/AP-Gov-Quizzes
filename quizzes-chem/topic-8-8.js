// AP Chemistry — Unit 8 (Acids and Bases)
// Registered in quizzes-chem/index.js as "chem-topic-8-8".
// Topic 8.8 — Properties of Buffers

window.QUIZ_QUESTIONS = [
  {
    id: "8-8-1",
    question: "The pH of a buffer depends primarily on",
    options: [
      "the temperature only",
      "the absolute concentrations of the components",
      "the pKa and the ratio of base to acid",
      "the volume of the solution"
    ],
    correctIndex: 2,
    explanation: "The ratio is what enters the Henderson-Hasselbalch equation. Absolute concentrations determine capacity rather than pH."
  },
  {
    id: "8-8-2",
    question: "Adding water to a buffer",
    options: [
      "leaves the pH nearly unchanged, lowering capacity",
      "destroys the entire buffer system almost completely",
      "increases buffer capacity",
      "changes the pH substantially"
    ],
    correctIndex: 0,
    explanation: "Both components are diluted equally, preserving their ratio. Fewer moles of each means less ability to absorb added acid or base."
  },
  {
    id: "8-8-3",
    question: "Which buffer would be most effective at pH 4.7?",
    options: [
      "NH₃/NH₄⁺ (pKa 9.25 at 25 °C)",
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
      "7.00, exactly neutral",
      "the pKa of acetic acid",
      "2.87, strongly acidic",
      "9.25, distinctly basic"
    ],
    correctIndex: 1,
    explanation: "Equal concentrations give a ratio of 1 and a log term of zero. The pH of a buffer is not 7 unless the pKa happens to be 7."
  },
  {
    id: "8-8-5",
    question: "Buffer capacity increases with",
    options: [
      "greater dilution",
      "a larger difference between pH and pKa",
      "lower concentrations of buffer components",
      "higher concentrations of both components"
    ],
    correctIndex: 3,
    explanation: "More moles of each component neutralize more added acid or base. Capacity is greatest when the two are present in roughly equal amounts."
  },
  {
    id: "8-8-6",
    question: "Adding 0.010 mol of NaOH to 1.0 L of a buffer containing 0.10 mol each of HA and A⁻ produces",
    options: [
      "a small pH increase as some HA converts to A⁻",
      "no change whatsoever in the amounts of HA and A⁻",
      "complete destruction of the buffer",
      "a large pH increase"
    ],
    correctIndex: 0,
    explanation: "The ratio moves from 1.00 to 0.11/0.09, roughly 1.22, changing pH by less than 0.1 unit. That resilience is what buffers are for."
  },
  {
    id: "8-8-7",
    question: "A buffer is exhausted when",
    options: [
      "the pH finally reaches the pKa value of the weak acid",
      "the solution is diluted",
      "enough acid or base added to consume one component",
      "the temperature rises"
    ],
    correctIndex: 2,
    explanation: "Beyond that point, additional acid or base changes pH sharply. Reaching the pKa actually indicates maximum buffering."
  },
  {
    id: "8-8-8",
    question: "Which pair would NOT form a buffer?",
    options: [
      "NH₃ and NH₄Cl",
      "HNO₃ and NaNO₃",
      "H₂CO₃ and NaHCO₃",
      "HF and NaF"
    ],
    correctIndex: 1,
    explanation: "Nitric acid is strong, so nitrate has no meaningful basicity. A buffer requires a weak conjugate pair."
  },
  {
    id: "8-8-9",
    question: "To prepare a buffer of a specific pH, a chemist should first",
    options: [
      "choose a weak acid with pKa near the target pH",
      "choose the most concentrated acid that is available",
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
      "has a much lower buffer capacity",
      "is not a buffer",
      "has a higher pH",
      "has greater buffer capacity"
    ],
    correctIndex: 3,
    explanation: "Identical ratios give identical pH values. The concentrated buffer can absorb far more added acid or base before failing."
  }
];
