// AP Chemistry — Unit 8 (Acids and Bases)
// Registered in quizzes-chem/index.js as "chem-topic-8-7".
// Topic 8.7 — pH and pKa

window.QUIZ_QUESTIONS = [
  {
    id: "8-7-1",
    question: "When the pH of a solution equals the pKa of a weak acid present, the ratio [A⁻]/[HA] is",
    options: [
      "0",
      "1",
      "10",
      "14"
    ],
    correctIndex: 1,
    explanation: "The log term in the Henderson-Hasselbalch equation vanishes when the ratio is 1. This is the half-equivalence point of a titration."
  },
  {
    id: "8-7-2",
    question: "If pH is greater than pKa, the predominant species is",
    options: [
      "the protonated acid HA",
      "the deprotonated conjugate base A⁻",
      "neither",
      "both equally"
    ],
    correctIndex: 1,
    explanation: "A higher pH means a lower H⁺ concentration, favoring proton loss. This reasoning predicts the charge state of drugs and amino acids."
  },
  {
    id: "8-7-3",
    question: "A weak acid has pKa = 4.75. In a solution at pH 2.75,",
    options: [
      "A⁻ predominates",
      "HA predominates",
      "they are equal",
      "the acid is fully ionized"
    ],
    correctIndex: 1,
    explanation: "Below the pKa, the protonated form dominates. Two pH units below gives a ratio of about 100 to 1 in favor of HA."
  },
  {
    id: "8-7-4",
    question: "The Henderson-Hasselbalch equation is written as",
    options: [
      "pH = pKa + log([HA]/[A⁻])",
      "pH = pKa + log([A⁻]/[HA])",
      "pH = pKa − [A⁻]/[HA]",
      "pH = Ka + log[A⁻]"
    ],
    correctIndex: 1,
    explanation: "Conjugate base goes in the numerator. Inverting the ratio is a common error that reverses the sign of the correction."
  },
  {
    id: "8-7-5",
    question: "An indicator changes color when",
    options: [
      "the pH equals 7",
      "the pH is near the pKa of the indicator, so the acid and base forms are comparable",
      "the titration begins",
      "the solution becomes colorless"
    ],
    correctIndex: 1,
    explanation: "The acid and base forms have different colors. The visible transition spans roughly pKa ± 1."
  },
  {
    id: "8-7-6",
    question: "Which acid, with the pKa values listed, is strongest?",
    options: [
      "pKa = 2.0",
      "pKa = 4.8",
      "pKa = 7.2",
      "pKa = 9.5"
    ],
    correctIndex: 0,
    explanation: "Lower pKa means larger Ka and a stronger acid. Because pKa is a negative logarithm, the ordering reverses relative to Ka."
  },
  {
    id: "8-7-7",
    question: "A buffer is most effective when the desired pH is",
    options: [
      "far from the pKa",
      "within about one unit of the pKa of the weak acid used",
      "exactly 7",
      "above 12"
    ],
    correctIndex: 1,
    explanation: "Outside that range one component becomes too scarce to neutralize additions. Buffer selection starts with matching pKa to target pH."
  },
  {
    id: "8-7-8",
    question: "For a buffer with [A⁻]/[HA] = 10 and pKa = 5.0, the pH is",
    options: [
      "4.0",
      "5.0",
      "6.0",
      "50"
    ],
    correctIndex: 2,
    explanation: "pH = 5.0 + log(10) = 5.0 + 1.0 = 6.0. Each tenfold change in the ratio shifts pH by one unit."
  },
  {
    id: "8-7-9",
    question: "An amino acid with a carboxyl pKa of 2.3 and an amino pKa of 9.6 exists predominantly as a zwitterion at",
    options: [
      "pH 1",
      "pH 7",
      "pH 12",
      "all pH values"
    ],
    correctIndex: 1,
    explanation: "Between the two pKa values, the carboxyl is deprotonated and the amine is protonated. Extremes of pH give a net positive or negative species."
  },
  {
    id: "8-7-10",
    question: "The relationship between pKa and pKb for a conjugate pair at 25 °C is",
    options: [
      "pKa + pKb = 14",
      "pKa − pKb = 14",
      "pKa × pKb = 14",
      "pKa = pKb"
    ],
    correctIndex: 0,
    explanation: "It follows from taking the negative log of Ka × Kb = Kw. A strong acid's conjugate base therefore has a very large pKb."
  }
];
