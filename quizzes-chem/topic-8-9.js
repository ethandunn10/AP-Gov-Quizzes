// AP Chemistry — Unit 8 (Acids and Bases)
// Registered in quizzes-chem/index.js as "chem-topic-8-9".
// Topic 8.9 — Henderson-Hasselbalch Equation

window.QUIZ_QUESTIONS = [
  {
    id: "8-9-1",
    question: "The Henderson-Hasselbalch equation is derived from",
    options: [
      "the ideal gas law",
      "the Ka expression, by taking the negative logarithm of both sides",
      "Hess's law",
      "the rate law"
    ],
    correctIndex: 1,
    explanation: "Rearranging Ka = [H⁺][A⁻]/[HA] and taking logs gives the familiar form. It is a restatement of the equilibrium expression, not a new principle."
  },
  {
    id: "8-9-2",
    question: "A buffer contains 0.20 M HA and 0.40 M A⁻ with pKa = 4.50. Its pH is",
    options: [
      "4.20",
      "4.50",
      "4.80",
      "5.00"
    ],
    correctIndex: 2,
    explanation: "pH = 4.50 + log(0.40/0.20) = 4.50 + 0.30 = 4.80. More conjugate base than acid always raises pH above the pKa."
  },
  {
    id: "8-9-3",
    question: "Because the equation depends on a ratio, the concentrations of the two components may be expressed in",
    options: [
      "molarity only",
      "either moles or molarity, provided both are in the same units and the same solution volume",
      "grams only",
      "percent by mass only"
    ],
    correctIndex: 1,
    explanation: "A shared volume cancels in the ratio. This is why buffer problems can often be worked in moles directly."
  },
  {
    id: "8-9-4",
    question: "To make a buffer at pH 5.00 from an acid with pKa 4.70, the required ratio [A⁻]/[HA] is approximately",
    options: [
      "0.5",
      "1.0",
      "2.0",
      "10"
    ],
    correctIndex: 2,
    explanation: "log(ratio) = 0.30, so the ratio is about 2.0. Targeting a pH above the pKa always requires more conjugate base than acid."
  },
  {
    id: "8-9-5",
    question: "The Henderson-Hasselbalch equation is valid",
    options: [
      "for all solutions",
      "for buffer solutions where both weak acid and conjugate base are present in significant amounts",
      "only for strong acids",
      "only at pH 7"
    ],
    correctIndex: 1,
    explanation: "It assumes the equilibrium shift is negligible compared with the amounts present. Applying it to a solution of the pure weak acid gives a wrong answer."
  },
  {
    id: "8-9-6",
    question: "For a buffer made of a weak base and its conjugate acid, the analogous relationship is",
    options: [
      "pOH = pKb + log([BH⁺]/[B])",
      "pOH = pKb + log([B]/[BH⁺])",
      "pH = pKb + log([B]/[BH⁺])",
      "pOH = pKa + log([B]/[BH⁺])"
    ],
    correctIndex: 0,
    explanation: "The conjugate acid takes the numerator in the base form of the equation. Converting to pH afterward uses pH = 14 − pOH."
  },
  {
    id: "8-9-7",
    question: "A buffer at pH equal to pKa has",
    options: [
      "more acid than conjugate base",
      "equal concentrations of acid and conjugate base",
      "more conjugate base than acid",
      "no conjugate base"
    ],
    correctIndex: 1,
    explanation: "The log term is zero only when the ratio is 1. This is also the point of maximum buffer capacity."
  },
  {
    id: "8-9-8",
    question: "Adding strong base to a buffer changes the pH by",
    options: [
      "converting some HA to A⁻, raising the ratio and thus the pH slightly",
      "converting A⁻ to HA",
      "changing the pKa",
      "removing the buffer entirely"
    ],
    correctIndex: 0,
    explanation: "A stoichiometry step precedes the Henderson-Hasselbalch calculation. The pKa is a property of the acid and does not change."
  },
  {
    id: "8-9-9",
    question: "A buffer contains 0.10 mol HA and 0.10 mol A⁻ in 1.0 L. After adding 0.020 mol HCl, the new ratio [A⁻]/[HA] is",
    options: [
      "0.080/0.120",
      "0.120/0.080",
      "0.10/0.10",
      "0.020/0.10"
    ],
    correctIndex: 0,
    explanation: "Added H⁺ converts 0.020 mol of A⁻ into HA, giving 0.080 and 0.120. The ratio falls below 1, so the pH drops slightly below the pKa."
  },
  {
    id: "8-9-10",
    question: "Which limitation applies to the Henderson-Hasselbalch equation?",
    options: [
      "It fails when the ratio of base to acid is extreme or concentrations are very dilute",
      "It applies only above pH 7",
      "It cannot be used with acetic acid",
      "It requires a catalyst"
    ],
    correctIndex: 0,
    explanation: "Its approximations break down when one component is scarce or when water's autoionization matters. Within typical buffer ranges it is highly accurate."
  }
];
