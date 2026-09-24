// AP Chemistry — Unit 7 (Equilibrium)
// Registered in quizzes-chem/index.js as "chem-topic-7-3".
// Topic 7.3 — Reaction Quotient and Equilibrium Constant

window.QUIZ_QUESTIONS = [
  {
    id: "7-3-1",
    question: "For the reaction aA + bB ⇌ cC + dD, the equilibrium expression is",
    options: [
      "([A]ᵃ[B]ᵇ)/([C]ᶜ[D]ᵈ)",
      "([C]ᶜ[D]ᵈ)/([A]ᵃ[B]ᵇ)",
      "([C] + [D])/([A] + [B])",
      "[C][D][A][B]"
    ],
    correctIndex: 1,
    explanation: "Products go on top, each raised to its coefficient. Writing it upside down is the classic error and inverts the value."
  },
  {
    id: "7-3-2",
    question: "In writing an equilibrium expression, pure solids and pure liquids are",
    options: [
      "included in the numerator",
      "omitted, because their concentrations are effectively constant",
      "included in the denominator",
      "included only if they are reactants"
    ],
    correctIndex: 1,
    explanation: "Their activities are defined as 1, so they contribute no variable term. Aqueous and gaseous species are always included."
  },
  {
    id: "7-3-3",
    question: "For CaCO₃(s) ⇌ CaO(s) + CO₂(g), the equilibrium expression is",
    options: [
      "K = [CaO][CO₂]/[CaCO₃]",
      "K = P(CO₂)",
      "K = 1/P(CO₂)",
      "K = [CaCO₃]"
    ],
    correctIndex: 1,
    explanation: "Both solids are omitted, leaving only the gas. The pressure of CO₂ above the solid is fixed at a given temperature."
  },
  {
    id: "7-3-4",
    question: "The reaction quotient Q differs from K in that Q",
    options: [
      "uses the same expression but with concentrations at any moment, not just at equilibrium",
      "uses different coefficients",
      "applies only to gases",
      "is always larger than K"
    ],
    correctIndex: 0,
    explanation: "Q equals K precisely at equilibrium. Comparing them predicts which way a system will shift."
  },
  {
    id: "7-3-5",
    question: "If Q < K, the reaction will",
    options: [
      "proceed in the forward direction to form more products",
      "proceed in the reverse direction",
      "be at equilibrium",
      "stop"
    ],
    correctIndex: 0,
    explanation: "Too few products relative to equilibrium drives the forward reaction. Q then rises until it equals K."
  },
  {
    id: "7-3-6",
    question: "If Q > K, the system contains",
    options: [
      "too few products, so it shifts forward",
      "too many products relative to equilibrium, so it shifts in reverse",
      "exactly equilibrium amounts",
      "no reactants"
    ],
    correctIndex: 1,
    explanation: "The reverse reaction consumes products until Q falls to K. Q and K are compared, never subtracted."
  },
  {
    id: "7-3-7",
    question: "Kp and Kc differ in that Kp is expressed in terms of",
    options: [
      "partial pressures rather than molar concentrations",
      "moles rather than pressures",
      "masses rather than volumes",
      "temperatures"
    ],
    correctIndex: 0,
    explanation: "They are related by Kp = Kc(RT)^Δn, where Δn is the change in moles of gas. When Δn is zero, the two are numerically equal."
  },
  {
    id: "7-3-8",
    question: "For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), Kc is",
    options: [
      "[NH₃]²/([N₂][H₂]³)",
      "[N₂][H₂]³/[NH₃]²",
      "[NH₃]/([N₂][H₂])",
      "2[NH₃]/(3[H₂] + [N₂])"
    ],
    correctIndex: 0,
    explanation: "Coefficients become exponents, not multipliers. Confusing the two produces a fundamentally different expression."
  },
  {
    id: "7-3-9",
    question: "A mixture has Q = 2.5 × 10⁻³ and K = 2.5 × 10⁻³. The system is",
    options: [
      "shifting forward",
      "at equilibrium",
      "shifting in reverse",
      "not reacting at all"
    ],
    correctIndex: 1,
    explanation: "Equal Q and K is the definition of equilibrium. Both reactions continue at equal rates."
  },
  {
    id: "7-3-10",
    question: "The units of K are conventionally",
    options: [
      "always mol/L",
      "omitted, since K is treated as a dimensionless quantity based on activities",
      "atm always",
      "J/mol"
    ],
    correctIndex: 1,
    explanation: "Activities are ratios to standard states and are dimensionless. AP problems therefore report K as a plain number."
  }
];
