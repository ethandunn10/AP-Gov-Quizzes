// AP Chemistry — Unit 7 (Equilibrium)
// Registered in quizzes-chem/index.js as "chem-topic-7-12".
// Topic 7.12 — Common-Ion Effect

window.QUIZ_QUESTIONS = [
  {
    id: "7-12-1",
    question: "The common-ion effect describes the observation that the solubility of a salt",
    options: [
      "increases when a common ion is present",
      "decreases when a common ion is already present in solution",
      "is unaffected by other ions",
      "becomes zero"
    ],
    correctIndex: 1,
    explanation: "Le Chatelier's principle drives the dissolution equilibrium back toward the solid. Ksp itself is unchanged."
  },
  {
    id: "7-12-2",
    question: "AgCl is less soluble in 0.10 M NaCl than in pure water because",
    options: [
      "NaCl reacts with AgCl",
      "the added Cl⁻ shifts the dissolution equilibrium toward the solid",
      "Ksp decreases",
      "the temperature changes"
    ],
    correctIndex: 1,
    explanation: "Chloride is the common ion here. Ksp is fixed at a given temperature, so a larger [Cl⁻] forces a smaller [Ag⁺]."
  },
  {
    id: "7-12-3",
    question: "For AgCl with Ksp = 1.8 × 10⁻¹⁰ in 0.10 M NaCl, the solubility is approximately",
    options: [
      "1.8 × 10⁻⁹ M",
      "1.3 × 10⁻⁵ M",
      "1.8 × 10⁻¹¹ M",
      "0.10 M"
    ],
    correctIndex: 0,
    explanation: "s = Ksp/[Cl⁻] = 1.8 × 10⁻¹⁰/0.10 = 1.8 × 10⁻⁹ M. That is about four orders of magnitude below its solubility in pure water."
  },
  {
    id: "7-12-4",
    question: "The common-ion effect applies to weak acid equilibria as well; adding sodium acetate to acetic acid will",
    options: [
      "increase ionization of the acid",
      "suppress ionization of the acid, raising the pH",
      "have no effect",
      "make the acid strong"
    ],
    correctIndex: 1,
    explanation: "Added acetate shifts the ionization equilibrium back toward undissociated acid. This suppression is the basis of buffer behavior."
  },
  {
    id: "7-12-5",
    question: "Does the common-ion effect change Ksp?",
    options: [
      "Yes, it decreases Ksp",
      "No, Ksp depends only on temperature",
      "Yes, it increases Ksp",
      "Only for 1:1 salts"
    ],
    correctIndex: 1,
    explanation: "What changes is the distribution of ion concentrations satisfying the same Ksp. Students often mistake a solubility change for a Ksp change."
  },
  {
    id: "7-12-6",
    question: "In which solution would CaF₂ be least soluble?",
    options: [
      "Pure water",
      "0.10 M NaF",
      "0.10 M NaCl",
      "0.10 M KNO₃"
    ],
    correctIndex: 1,
    explanation: "Fluoride is the common ion, and it appears squared in the Ksp expression. NaCl and KNO₃ contribute no common ion."
  },
  {
    id: "7-12-7",
    question: "When calculating solubility in the presence of a common ion, the usual simplifying assumption is that",
    options: [
      "the common ion's concentration is essentially unchanged by the small amount dissolving",
      "the solid does not dissolve at all",
      "Ksp doubles",
      "the temperature rises"
    ],
    correctIndex: 0,
    explanation: "Solubility is typically far smaller than the added ion concentration. This lets the ICE table's x be neglected in that term."
  },
  {
    id: "7-12-8",
    question: "The common-ion effect is an application of",
    options: [
      "Hess's law",
      "Le Chatelier's principle",
      "the ideal gas law",
      "Beer's law"
    ],
    correctIndex: 1,
    explanation: "Adding a product species shifts the equilibrium back toward reactants. The same reasoning applies to buffers and solubility alike."
  },
  {
    id: "7-12-9",
    question: "Adding 0.10 M HCl to a saturated solution of AgCl will",
    options: [
      "increase the solubility of AgCl",
      "decrease the solubility of AgCl by adding chloride ions",
      "have no effect",
      "dissolve all the solid"
    ],
    correctIndex: 1,
    explanation: "HCl contributes chloride, the common ion. The identity of the accompanying cation is irrelevant here."
  },
  {
    id: "7-12-10",
    question: "Selective precipitation separates two metal ions by",
    options: [
      "adding a reagent whose salt with one ion has a much smaller Ksp, so it precipitates first",
      "heating the solution",
      "adding water",
      "filtering before any reagent is added"
    ],
    correctIndex: 0,
    explanation: "Careful control of the precipitating ion's concentration keeps Q above Ksp for one salt only. This underlies qualitative analysis schemes."
  }
];
