// AP Chemistry — Unit 8 (Acids and Bases)
// Registered in quizzes-chem/index.js as "chem-topic-8-3".
// Topic 8.3 — Weak Acid and Base Equilibria

window.QUIZ_QUESTIONS = [
  {
    id: "8-3-1",
    question: "For the weak acid HA, the acid dissociation constant is",
    options: [
      "Ka = [H⁺] + [A⁻]",
      "Ka = [H⁺][A⁻][HA]",
      "Ka = [HA]/([H⁺][A⁻])",
      "Ka = [H⁺][A⁻]/[HA]"
    ],
    correctIndex: 3,
    explanation: "Products over reactants, with water omitted as the solvent. A larger Ka means a stronger weak acid."
  },
  {
    id: "8-3-2",
    question: "A 0.10 M solution of a weak acid with Ka = 1.0 × 10⁻⁵ has [H⁺] of approximately",
    options: [
      "1.0 × 10⁻⁶ M",
      "1.0 × 10⁻⁵ M",
      "1.0 × 10⁻³ M",
      "0.10 M"
    ],
    correctIndex: 2,
    explanation: "x = √(Ka·C) = √(1.0 × 10⁻⁶) = 1.0 × 10⁻³ M. Since x is 1 percent of 0.10, the approximation is valid."
  },
  {
    id: "8-3-3",
    question: "The relationship between Ka and Kb for a conjugate pair is",
    options: [
      "Ka + Kb = Kw",
      "Ka × Kb = Kw",
      "Ka/Kb = Kw",
      "Ka = Kb"
    ],
    correctIndex: 1,
    explanation: "At 25 °C the product is 1.0 × 10⁻¹⁴. A strong acid therefore pairs with a vanishingly weak conjugate base."
  },
  {
    id: "8-3-4",
    question: "Percent ionization of a weak acid increases when the solution is",
    options: [
      "heated only",
      "mixed with its conjugate base",
      "concentrated",
      "diluted"
    ],
    correctIndex: 3,
    explanation: "Dilution shifts the equilibrium toward more particles, raising the fraction ionized. The absolute [H⁺] still falls, which is the counterintuitive part."
  },
  {
    id: "8-3-5",
    question: "For a weak base B, Kb is expressed as",
    options: [
      "[B][OH⁻]",
      "[BH⁺][OH⁻]/[B]",
      "[B]/([BH⁺][OH⁻])",
      "[BH⁺][H⁺]/[B]"
    ],
    correctIndex: 1,
    explanation: "The base accepts a proton from water, generating OH⁻. Water is omitted as the solvent."
  },
  {
    id: "8-3-6",
    question: "Which acid is strongest?",
    options: [
      "Ka = 4.9 × 10⁻¹⁰",
      "Ka = 1.8 × 10⁻¹⁶",
      "Ka = 1.8 × 10⁻⁵",
      "Ka = 6.8 × 10⁻⁴"
    ],
    correctIndex: 3,
    explanation: "The largest Ka corresponds to the greatest extent of ionization. Careful comparison of negative exponents matters here."
  },
  {
    id: "8-3-7",
    question: "A salt such as NaF dissolved in water produces a solution that is",
    options: [
      "neutral",
      "strongly acidic in absolutely every case",
      "acidic",
      "basic, since F⁻ is a conjugate base"
    ],
    correctIndex: 3,
    explanation: "Fluoride hydrolyzes to produce OH⁻. Na⁺ comes from a strong base and does not hydrolyze."
  },
  {
    id: "8-3-8",
    question: "NH₄Cl dissolved in water gives a solution that is",
    options: [
      "basic",
      "acidic, since NH₄⁺ donates a proton",
      "neutral",
      "strongly basic in absolutely every case"
    ],
    correctIndex: 1,
    explanation: "Ammonium is the conjugate acid of the weak base ammonia. Chloride, from a strong acid, is a spectator."
  },
  {
    id: "8-3-9",
    question: "pKa is related to Ka by",
    options: [
      "pKa = −log Ka",
      "pKa = 1/Ka",
      "pKa = 14 − Ka",
      "pKa = Ka"
    ],
    correctIndex: 0,
    explanation: "A smaller pKa means a stronger acid. Acetic acid's Ka of 1.8 × 10⁻⁵ corresponds to a pKa of about 4.74."
  },
  {
    id: "8-3-10",
    question: "For a 0.10 M solution of a weak acid that is 1.0% ionized, Ka is approximately",
    options: [
      "1.0 × 10⁻²",
      "1.0 × 10⁻⁷",
      "1.0 × 10⁻³",
      "1.0 × 10⁻⁵"
    ],
    correctIndex: 3,
    explanation: "[H⁺] = 0.010 × 0.10 = 1.0 × 10⁻³ M, so Ka ≈ (10⁻³)²/0.10 = 1.0 × 10⁻⁵. Percent ionization provides a direct route to Ka."
  }
];
