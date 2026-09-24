// AP Chemistry — Unit 8 (Acids and Bases)
// Registered in quizzes-chem/index.js as "chem-topic-8-3".
// Topic 8.3 — Weak Acid and Base Equilibria

window.QUIZ_QUESTIONS = [
  {
    id: "8-3-1",
    question: "For the weak acid HA, the acid dissociation constant is",
    options: [
      "Ka = [HA]/([H⁺][A⁻])",
      "Ka = [H⁺][A⁻]/[HA]",
      "Ka = [H⁺] + [A⁻]",
      "Ka = [H⁺][A⁻][HA]"
    ],
    correctIndex: 1,
    explanation: "Products over reactants, with water omitted as the solvent. A larger Ka means a stronger weak acid."
  },
  {
    id: "8-3-2",
    question: "A 0.10 M solution of a weak acid with Ka = 1.0 × 10⁻⁵ has [H⁺] of approximately",
    options: [
      "1.0 × 10⁻⁵ M",
      "1.0 × 10⁻³ M",
      "0.10 M",
      "1.0 × 10⁻⁶ M"
    ],
    correctIndex: 1,
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
      "concentrated",
      "diluted",
      "heated only",
      "mixed with its conjugate base"
    ],
    correctIndex: 1,
    explanation: "Dilution shifts the equilibrium toward more particles, raising the fraction ionized. The absolute [H⁺] still falls, which is the counterintuitive part."
  },
  {
    id: "8-3-5",
    question: "For a weak base B, Kb is expressed as",
    options: [
      "[BH⁺][OH⁻]/[B]",
      "[B]/([BH⁺][OH⁻])",
      "[BH⁺][H⁺]/[B]",
      "[B][OH⁻]"
    ],
    correctIndex: 0,
    explanation: "The base accepts a proton from water, generating OH⁻. Water is omitted as the solvent."
  },
  {
    id: "8-3-6",
    question: "Which acid is strongest?",
    options: [
      "Ka = 1.8 × 10⁻⁵",
      "Ka = 6.8 × 10⁻⁴",
      "Ka = 4.9 × 10⁻¹⁰",
      "Ka = 1.8 × 10⁻¹⁶"
    ],
    correctIndex: 1,
    explanation: "The largest Ka corresponds to the greatest extent of ionization. Careful comparison of negative exponents matters here."
  },
  {
    id: "8-3-7",
    question: "A salt such as NaF dissolved in water produces a solution that is",
    options: [
      "acidic",
      "basic, because F⁻ is the conjugate base of a weak acid",
      "neutral",
      "strongly acidic"
    ],
    correctIndex: 1,
    explanation: "Fluoride hydrolyzes to produce OH⁻. Na⁺ comes from a strong base and does not hydrolyze."
  },
  {
    id: "8-3-8",
    question: "NH₄Cl dissolved in water gives a solution that is",
    options: [
      "basic",
      "acidic, because NH₄⁺ donates a proton to water",
      "neutral",
      "strongly basic"
    ],
    correctIndex: 1,
    explanation: "Ammonium is the conjugate acid of the weak base ammonia. Chloride, from a strong acid, is a spectator."
  },
  {
    id: "8-3-9",
    question: "pKa is related to Ka by",
    options: [
      "pKa = Ka",
      "pKa = −log Ka",
      "pKa = 1/Ka",
      "pKa = 14 − Ka"
    ],
    correctIndex: 1,
    explanation: "A smaller pKa means a stronger acid. Acetic acid's Ka of 1.8 × 10⁻⁵ corresponds to a pKa of about 4.74."
  },
  {
    id: "8-3-10",
    question: "For a 0.10 M solution of a weak acid that is 1.0% ionized, Ka is approximately",
    options: [
      "1.0 × 10⁻³",
      "1.0 × 10⁻⁵",
      "1.0 × 10⁻²",
      "1.0 × 10⁻⁷"
    ],
    correctIndex: 1,
    explanation: "[H⁺] = 0.010 × 0.10 = 1.0 × 10⁻³ M, so Ka ≈ (10⁻³)²/0.10 = 1.0 × 10⁻⁵. Percent ionization provides a direct route to Ka."
  }
];
