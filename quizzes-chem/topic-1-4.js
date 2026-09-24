// AP Chemistry — Unit 1 (Atomic Structure and Properties)
// Registered in quizzes-chem/index.js as "chem-topic-1-4".
// Topic 1.4 — Composition of Mixtures

window.QUIZ_QUESTIONS = [
  {
    id: "1-4-1",
    question: "Which of the following is a homogeneous mixture?",
    options: [
      "Sand in water",
      "Salt water",
      "Oil and vinegar",
      "Granite"
    ],
    correctIndex: 1,
    explanation: "A homogeneous mixture has uniform composition throughout, which dissolved NaCl in water does. Granite looks solid but shows visibly distinct mineral grains."
  },
  {
    id: "1-4-2",
    question: "A 10.0 g mixture of NaCl and KCl is analyzed and found to contain 2.00 g of Na. What mass of NaCl is present? (Na = 23.0, Cl = 35.5)",
    options: [
      "2.00 g",
      "5.09 g",
      "3.09 g",
      "8.00 g"
    ],
    correctIndex: 1,
    explanation: "2.00 g Na is 0.0870 mol, which requires 0.0870 mol NaCl = 0.0870 × 58.5 = 5.09 g. Reporting 2.00 g counts only the sodium and ignores its chloride partner."
  },
  {
    id: "1-4-3",
    question: "Why can the composition of a mixture vary while that of a compound cannot?",
    options: [
      "Mixtures are always solids",
      "Components of a mixture are not chemically bonded in fixed ratios",
      "Compounds contain only one element",
      "Mixtures cannot be separated"
    ],
    correctIndex: 1,
    explanation: "Physical combination places no constraint on proportions, so you can make salt water of any concentration. Chemical bonding in a compound fixes the ratio."
  },
  {
    id: "1-4-4",
    question: "A gravimetric analysis precipitates all the chloride in a sample as AgCl. This works because",
    options: [
      "AgCl is highly soluble in water",
      "AgCl is insoluble, so essentially all chloride is captured in a weighable solid",
      "silver reacts with the solvent",
      "AgCl decomposes on heating"
    ],
    correctIndex: 1,
    explanation: "Quantitative precipitation requires a product that does not appreciably redissolve. Its measured mass is then converted back to moles of chloride."
  },
  {
    id: "1-4-5",
    question: "A solution is prepared by dissolving 5.85 g NaCl (58.5 g/mol) in enough water to make 500. mL. Its molarity is",
    options: [
      "0.100 M",
      "0.200 M",
      "0.0500 M",
      "2.00 M"
    ],
    correctIndex: 1,
    explanation: "n = 0.100 mol and M = 0.100 mol ÷ 0.500 L = 0.200 M. Dividing by 1 L instead of 0.500 L is the usual slip and gives 0.100 M."
  },
  {
    id: "1-4-6",
    question: "Which separation technique relies on differences in boiling point?",
    options: [
      "Filtration",
      "Distillation",
      "Chromatography",
      "Magnetic separation"
    ],
    correctIndex: 1,
    explanation: "Distillation vaporizes the more volatile component and recondenses it. Filtration separates by particle size and chromatography by intermolecular attraction."
  },
  {
    id: "1-4-7",
    question: "A 4.00 g mixture contains only CaCO₃ and inert sand. On heating, all CaCO₃ decomposes to CaO and CO₂, and 0.880 g of CO₂ escapes. The moles of CaCO₃ originally present were",
    options: [
      "0.0200 mol",
      "0.0400 mol",
      "0.0100 mol",
      "0.880 mol"
    ],
    correctIndex: 0,
    explanation: "0.880 g ÷ 44.0 g/mol = 0.0200 mol CO₂, and the balanced decomposition releases one CO₂ per CaCO₃. Mass lost is the measurable handle on an otherwise hidden component."
  },
  {
    id: "1-4-8",
    question: "Which statement distinguishes a solution from a pure substance?",
    options: [
      "A solution always contains water",
      "A solution's components retain their identities and can be present in variable proportions",
      "A solution cannot be transparent",
      "A solution must contain a solid dissolved in a liquid"
    ],
    correctIndex: 1,
    explanation: "Alloys and air are solutions with no water and no liquid at all. Variable proportion is the defining feature."
  },
  {
    id: "1-4-9",
    question: "Diluting 25.0 mL of 2.00 M HCl to a total volume of 100.0 mL gives a concentration of",
    options: [
      "0.500 M",
      "8.00 M",
      "0.200 M",
      "2.00 M"
    ],
    correctIndex: 0,
    explanation: "M₁V₁ = M₂V₂ gives (2.00)(25.0) = M₂(100.0), so M₂ = 0.500 M. Moles of solute are unchanged by dilution — only the volume grows."
  },
  {
    id: "1-4-10",
    question: "A student must determine the percent of KCl in an impure sample. Which approach is most appropriate?",
    options: [
      "Measure the sample's color intensity",
      "Precipitate the chloride as AgCl, weigh it, and work back to KCl",
      "Measure the sample's melting point",
      "Compare the sample's volume to a pure standard"
    ],
    correctIndex: 1,
    explanation: "Gravimetric analysis converts an unknown amount into a weighable, well-defined solid. Melting point identifies substances but does not quantify a mixture."
  }
];
