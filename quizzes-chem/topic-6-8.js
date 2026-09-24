// AP Chemistry — Unit 6 (Thermochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-6-8".
// Topic 6.8 — Enthalpy of Formation

window.QUIZ_QUESTIONS = [
  {
    id: "6-8-1",
    question: "The standard enthalpy of formation of an element in its standard state is",
    options: [
      "always negative",
      "zero by definition",
      "always positive",
      "equal to its atomic mass"
    ],
    correctIndex: 1,
    explanation: "Forming an element from itself involves no change. This convention sets the reference point for all other compounds."
  },
  {
    id: "6-8-2",
    question: "ΔH°_rxn is calculated from formation enthalpies as",
    options: [
      "Σ ΔH°f(reactants) − Σ ΔH°f(products)",
      "Σ ΔH°f(products) − Σ ΔH°f(reactants)",
      "the sum of all ΔH°f values",
      "the average of all ΔH°f values"
    ],
    correctIndex: 1,
    explanation: "Products minus reactants, each weighted by its coefficient. Reversing the order is the most frequent error and flips the sign."
  },
  {
    id: "6-8-3",
    question: "Given ΔH°f: CO₂(g) = −393.5, H₂O(l) = −285.8, CH₄(g) = −74.8 kJ/mol, ΔH° for CH₄ + 2O₂ → CO₂ + 2H₂O(l) is",
    options: [
      "−890.3 kJ",
      "−604.5 kJ",
      "+890.3 kJ",
      "−1035 kJ"
    ],
    correctIndex: 0,
    explanation: "[−393.5 + 2(−285.8)] − [−74.8 + 0] = −965.1 + 74.8 = −890.3 kJ. Oxygen contributes zero as an element in its standard state."
  },
  {
    id: "6-8-4",
    question: "A formation reaction produces",
    options: [
      "any amount of a compound from any reactants",
      "exactly one mole of a compound from its elements in their standard states",
      "elements from a compound",
      "two moles of product"
    ],
    correctIndex: 1,
    explanation: "The one-mole requirement sometimes forces fractional coefficients on the reactant side. That is acceptable in a formation equation."
  },
  {
    id: "6-8-5",
    question: "Which equation correctly represents the formation of NH₃(g)?",
    options: [
      "N₂(g) + 3H₂(g) → 2NH₃(g)",
      "½N₂(g) + (3/2)H₂(g) → NH₃(g)",
      "N(g) + 3H(g) → NH₃(g)",
      "NH₃(g) → ½N₂(g) + (3/2)H₂(g)"
    ],
    correctIndex: 1,
    explanation: "Exactly one mole of product forms from elements in their standard states, which are diatomic gases. Atomic N and H are not standard states."
  },
  {
    id: "6-8-6",
    question: "A compound with a large negative ΔH°f is",
    options: [
      "unstable relative to its elements",
      "energetically stable relative to its constituent elements",
      "always a gas",
      "always reactive"
    ],
    correctIndex: 1,
    explanation: "Energy was released when it formed, so decomposing it back costs energy. Kinetic stability is a separate question."
  },
  {
    id: "6-8-7",
    question: "Standard conditions for enthalpies of formation specify",
    options: [
      "1 bar pressure and a stated temperature, commonly 298 K",
      "0 K and zero pressure",
      "any convenient conditions",
      "1 M concentration only"
    ],
    correctIndex: 0,
    explanation: "Aqueous species additionally use 1 M concentration. Without a fixed reference, tabulated values could not be combined."
  },
  {
    id: "6-8-8",
    question: "Why is ΔH°f for H₂O(l) different from ΔH°f for H₂O(g)?",
    options: [
      "They are different compounds",
      "Enthalpy depends on physical state, and condensing the vapor releases additional energy",
      "One value is incorrect",
      "Gases have no enthalpy"
    ],
    correctIndex: 1,
    explanation: "The two differ by the enthalpy of vaporization, about 44 kJ/mol at 298 K. Specifying state in thermochemical equations is therefore essential."
  },
  {
    id: "6-8-9",
    question: "Using formation enthalpies is generally more accurate than using bond enthalpies because formation values",
    options: [
      "are averages over many compounds",
      "are measured for specific compounds in specific physical states",
      "apply only to gases",
      "require no data tables"
    ],
    correctIndex: 1,
    explanation: "Bond enthalpies average across molecular environments and assume gas phase. Formation data avoids both approximations."
  },
  {
    id: "6-8-10",
    question: "For the reaction 2SO₂(g) + O₂(g) → 2SO₃(g), the calculation requires that formation enthalpies be",
    options: [
      "used without coefficients",
      "multiplied by their stoichiometric coefficients before summing",
      "averaged",
      "converted to bond enthalpies"
    ],
    correctIndex: 1,
    explanation: "Two moles of SO₃ contribute twice its ΔH°f. Omitting coefficients is a common and consequential error."
  }
];
