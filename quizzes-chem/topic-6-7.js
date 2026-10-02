// AP Chemistry — Unit 6 (Thermochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-6-7".
// Topic 6.7 — Bond Enthalpies

window.QUIZ_QUESTIONS = [
  {
    id: "6-7-1",
    question: "Using bond enthalpies, ΔH for a reaction is estimated as",
    options: [
      "the strongest bond enthalpy",
      "bonds formed minus bonds broken",
      "bond enthalpies of bonds broken minus bonds formed",
      "the simple average of all of the bond enthalpy values"
    ],
    correctIndex: 2,
    explanation: "Breaking costs energy and forming releases it, so this ordering gives the correct sign. Reversing the order flips the sign of every answer."
  },
  {
    id: "6-7-2",
    question: "A reaction breaks bonds totaling 1200 kJ and forms bonds totaling 1450 kJ. ΔH is",
    options: [
      "−1450 kJ",
      "+250 kJ",
      "−250 kJ",
      "+2650 kJ"
    ],
    correctIndex: 2,
    explanation: "1200 − 1450 = −250 kJ, so the reaction is exothermic. Stronger bonds in the products is the signature of an exothermic reaction."
  },
  {
    id: "6-7-3",
    question: "Bond enthalpy values are usually reported as averages because",
    options: [
      "bonds break in pairs",
      "bonds have no fixed energy",
      "the same bond type differs slightly between molecules",
      "the measurements themselves are notoriously unreliable"
    ],
    correctIndex: 2,
    explanation: "A C-H bond in methane differs slightly from one in ethanol. This is why bond enthalpy calculations give estimates rather than exact values."
  },
  {
    id: "6-7-4",
    question: "Bond enthalpies apply strictly to species in the",
    options: [
      "liquid state",
      "solid state",
      "gas phase",
      "aqueous state"
    ],
    correctIndex: 2,
    explanation: "They refer to breaking bonds in isolated gaseous molecules. Using them for condensed phases ignores intermolecular forces and introduces error."
  },
  {
    id: "6-7-5",
    question: "Which bond has the largest bond enthalpy?",
    options: [
      "C=C",
      "C≡C",
      "All are equal",
      "C-C"
    ],
    correctIndex: 1,
    explanation: "More shared pairs means a stronger, shorter bond. Bond enthalpy is not, however, simply three times the single-bond value."
  },
  {
    id: "6-7-6",
    question: "Breaking a bond is always assigned a",
    options: [
      "positive enthalpy",
      "zero enthalpy",
      "variable sign",
      "negative enthalpy"
    ],
    correctIndex: 0,
    explanation: "Energy must be supplied to pull bonded atoms apart. Bond formation carries the opposite sign."
  },
  {
    id: "6-7-7",
    question: "For the reaction H₂ + Cl₂ → 2HCl, given H-H = 436, Cl-Cl = 243, and H-Cl = 431 kJ/mol, ΔH is",
    options: [
      "+183 kJ",
      "−248 kJ",
      "+248 kJ",
      "−183 kJ"
    ],
    correctIndex: 3,
    explanation: "Broken = 436 + 243 = 679; formed = 2 × 431 = 862; ΔH = 679 − 862 = −183 kJ. Forgetting to double the H-Cl term is the common error."
  },
  {
    id: "6-7-8",
    question: "Bond enthalpy correlates with bond length in that shorter bonds are generally",
    options: [
      "unrelated to strength",
      "always double bonds",
      "weaker",
      "stronger"
    ],
    correctIndex: 3,
    explanation: "Closer nuclei share the bonding electrons more effectively. This trend is why bond order, length, and strength move together."
  },
  {
    id: "6-7-9",
    question: "Estimating ΔH from bond enthalpies is less accurate than using enthalpies of formation because",
    options: [
      "enthalpies of formation are guessed",
      "bond enthalpies are always wrong",
      "bond enthalpies apply only to purely ionic compounds alone",
      "bond enthalpies are averages that ignore environment"
    ],
    correctIndex: 3,
    explanation: "Formation enthalpies are measured for specific compounds in specific states. Bond enthalpy estimates are nonetheless useful when tabulated formation data is unavailable."
  },
  {
    id: "6-7-10",
    question: "A reaction is exothermic when",
    options: [
      "the bonds formed are stronger than the bonds broken",
      "no bonds are broken",
      "the activation energy is small",
      "the bonds broken are stronger than the bonds formed"
    ],
    correctIndex: 0,
    explanation: "Forming stronger bonds releases more energy than breaking the originals consumed. Combustion, which forms very strong C=O and O-H bonds, is the standard example."
  }
];
