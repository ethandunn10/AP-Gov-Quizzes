// AP Chemistry — Unit 7 (Equilibrium)
// Registered in quizzes-chem/index.js as "chem-topic-7-11".
// Topic 7.11 — Introduction to Solubility Equilibria

window.QUIZ_QUESTIONS = [
  {
    id: "7-11-1",
    question: "For AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq), the solubility product expression is",
    options: [
      "Ksp = [Ag⁺][Cl⁻]/[AgCl]",
      "Ksp = [Ag⁺][Cl⁻]",
      "Ksp = [AgCl]",
      "Ksp = [Ag⁺] + [Cl⁻]"
    ],
    correctIndex: 1,
    explanation: "The pure solid is omitted from the expression. Only the dissolved ion concentrations appear."
  },
  {
    id: "7-11-2",
    question: "If the molar solubility of AgCl is s, then Ksp equals",
    options: [
      "s",
      "s²",
      "2s",
      "4s³"
    ],
    correctIndex: 1,
    explanation: "Each formula unit gives one Ag⁺ and one Cl⁻, both equal to s. The relationship between s and Ksp depends on stoichiometry."
  },
  {
    id: "7-11-3",
    question: "For a salt of type MX₂ with molar solubility s, Ksp equals",
    options: [
      "s²",
      "2s²",
      "4s³",
      "s³"
    ],
    correctIndex: 2,
    explanation: "[M²⁺] = s and [X⁻] = 2s, so Ksp = s(2s)² = 4s³. Forgetting to square the 2 is the usual mistake."
  },
  {
    id: "7-11-4",
    question: "A saturated solution is one in which",
    options: [
      "no solid remains",
      "dissolved ions are in equilibrium with undissolved solid",
      "all solid has dissolved",
      "Ksp equals zero"
    ],
    correctIndex: 1,
    explanation: "Dissolution and crystallization proceed at equal rates. This dynamic balance is what Ksp describes."
  },
  {
    id: "7-11-5",
    question: "If Q > Ksp for a solution, then",
    options: [
      "more solid will dissolve",
      "a precipitate will form until Q equals Ksp",
      "the solution is unsaturated",
      "nothing happens"
    ],
    correctIndex: 1,
    explanation: "The solution holds more ions than equilibrium allows. Precipitation removes ions until Q falls to Ksp."
  },
  {
    id: "7-11-6",
    question: "Comparing two salts of the same formula type, the one with the larger Ksp is",
    options: [
      "less soluble",
      "more soluble",
      "equally soluble",
      "insoluble"
    ],
    correctIndex: 1,
    explanation: "The comparison is valid only for salts with the same ion ratio. Comparing an MX salt with an MX₂ salt by Ksp alone can be misleading."
  },
  {
    id: "7-11-7",
    question: "Ksp for BaSO₄ is 1.1 × 10⁻¹⁰. Its molar solubility is approximately",
    options: [
      "1.0 × 10⁻⁵ M",
      "1.1 × 10⁻¹⁰ M",
      "1.0 × 10⁻³ M",
      "3.3 × 10⁻⁴ M"
    ],
    correctIndex: 0,
    explanation: "s = √(1.1 × 10⁻¹⁰) ≈ 1.0 × 10⁻⁵ M for this 1:1 salt. Its very low solubility is why barium sulfate is safe as a medical contrast agent."
  },
  {
    id: "7-11-8",
    question: "For most ionic solids, increasing temperature",
    options: [
      "decreases Ksp",
      "increases Ksp and solubility",
      "has no effect",
      "makes Ksp negative"
    ],
    correctIndex: 1,
    explanation: "Dissolution is endothermic for most salts. Ce₂(SO₄)₃ is a well-known exception with exothermic dissolution."
  },
  {
    id: "7-11-9",
    question: "Mixing solutions of Pb(NO₃)₂ and NaI will produce a precipitate if",
    options: [
      "the ion product [Pb²⁺][I⁻]² exceeds Ksp for PbI₂",
      "the solutions are the same color",
      "the temperature is low",
      "equal volumes are used"
    ],
    correctIndex: 0,
    explanation: "Precipitation depends on comparing Q with Ksp after dilution from mixing. Accounting for the volume change is an essential step."
  },
  {
    id: "7-11-10",
    question: "A solution with Q < Ksp is",
    options: [
      "saturated",
      "unsaturated, so more solid could dissolve",
      "supersaturated",
      "at equilibrium"
    ],
    correctIndex: 1,
    explanation: "It holds fewer ions than the maximum. Adding solid would dissolve it until Q rose to Ksp."
  }
];
