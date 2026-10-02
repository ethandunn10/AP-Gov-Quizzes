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
      "included only when they happen to be the reactants",
      "included in the numerator",
      "omitted, since their concentrations stay constant",
      "included in the denominator"
    ],
    correctIndex: 2,
    explanation: "Their activities are defined as 1, so they contribute no variable term. Aqueous and gaseous species are always included."
  },
  {
    id: "7-3-3",
    question: "For CaCO₃(s) ⇌ CaO(s) + CO₂(g), the equilibrium expression is",
    options: [
      "K = P(CO₂)",
      "K = 1/P(CO₂)",
      "K = [CaCO₃]",
      "K = [CaO][CO₂]/[CaCO₃]"
    ],
    correctIndex: 0,
    explanation: "Both solids are omitted, leaving only the gas. The pressure of CO₂ above the solid is fixed at a given temperature."
  },
  {
    id: "7-3-4",
    question: "The reaction quotient Q differs from K in that Q",
    options: [
      "uses entirely different stoichiometric coefficients",
      "applies only to gases",
      "is always larger than K",
      "uses the same expression but at any moment in time"
    ],
    correctIndex: 3,
    explanation: "Q equals K precisely at equilibrium. Comparing them predicts which way a system will shift."
  },
  {
    id: "7-3-5",
    question: "If Q < K, the reaction will",
    options: [
      "be at equilibrium",
      "stop",
      "proceed forward to form more products",
      "proceed in the reverse direction to form reactants"
    ],
    correctIndex: 2,
    explanation: "Too few products relative to equilibrium drives the forward reaction. Q then rises until it equals K."
  },
  {
    id: "7-3-6",
    question: "If Q > K, the system contains",
    options: [
      "no reactants",
      "too few products, so it will shift forward instead",
      "too many products, so it shifts in reverse",
      "exactly equilibrium amounts"
    ],
    correctIndex: 2,
    explanation: "The reverse reaction consumes products until Q falls to K. Q and K are compared, never subtracted."
  },
  {
    id: "7-3-7",
    question: "Kp and Kc differ in that Kp is expressed in terms of",
    options: [
      "masses rather than volumes",
      "temperatures",
      "partial pressures rather than concentrations",
      "numbers of moles rather than partial pressures"
    ],
    correctIndex: 2,
    explanation: "They are related by Kp = Kc(RT)^Δn, where Δn is the change in moles of gas. When Δn is zero, the two are numerically equal."
  },
  {
    id: "7-3-8",
    question: "For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), Kc is",
    options: [
      "[N₂][H₂]³/[NH₃]²",
      "[NH₃]/([N₂][H₂])",
      "2[NH₃]/(3[H₂] + [N₂])",
      "[NH₃]²/([N₂][H₂]³)"
    ],
    correctIndex: 3,
    explanation: "Coefficients become exponents, not multipliers. Confusing the two produces a fundamentally different expression."
  },
  {
    id: "7-3-9",
    question: "A mixture has Q = 2.5 × 10⁻³ and K = 2.5 × 10⁻³. The system is",
    options: [
      "not reacting at all",
      "shifting forward",
      "at equilibrium",
      "shifting in reverse"
    ],
    correctIndex: 2,
    explanation: "Equal Q and K is the definition of equilibrium. Both reactions continue at equal rates."
  },
  {
    id: "7-3-10",
    question: "The units of K are conventionally",
    options: [
      "omitted, since K is treated as dimensionless",
      "atm always",
      "J/mol",
      "always expressed in units of moles per liter"
    ],
    correctIndex: 0,
    explanation: "Activities are ratios to standard states and are dimensionless. AP problems therefore report K as a plain number."
  }
];
