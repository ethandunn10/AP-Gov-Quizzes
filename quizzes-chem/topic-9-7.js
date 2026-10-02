// AP Chemistry — Unit 9 (Thermodynamics and Electrochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-9-7".
// Topic 9.7 — Coupled Reactions

window.QUIZ_QUESTIONS = [
  {
    id: "9-7-1",
    question: "Two reactions are said to be coupled when",
    options: [
      "they have identical ΔH values",
      "they occur in two entirely separate containers",
      "a favorable reaction drives an unfavorable one",
      "they have the same rate"
    ],
    correctIndex: 2,
    explanation: "The combined ΔG must be negative for the overall process. A shared species is what physically links them."
  },
  {
    id: "9-7-2",
    question: "For coupled reactions, the overall ΔG is",
    options: [
      "the average of them",
      "always zero",
      "the product of the individual ΔG values",
      "the sum of the individual ΔG values"
    ],
    correctIndex: 3,
    explanation: "Free energy is a state function, so contributions add. The corresponding equilibrium constants multiply."
  },
  {
    id: "9-7-3",
    question: "Reaction A has ΔG = +30 kJ and reaction B has ΔG = −50 kJ. Coupled, the overall ΔG is",
    options: [
      "−80 kJ",
      "+20 kJ",
      "+80 kJ",
      "−20 kJ"
    ],
    correctIndex: 3,
    explanation: "30 + (−50) = −20 kJ, so the combined process is favorable. The unfavorable step proceeds because the favorable one supplies the driving force."
  },
  {
    id: "9-7-4",
    question: "In biological systems, the most common coupling partner is",
    options: [
      "combustion of glucose directly",
      "hydrolysis of ATP to ADP",
      "photosynthesis",
      "protein folding"
    ],
    correctIndex: 1,
    explanation: "ATP hydrolysis supplies roughly −30 kJ/mol under cellular conditions. Cells use it to drive synthesis and transport."
  },
  {
    id: "9-7-5",
    question: "The extraction of iron from its oxide ore is made favorable by",
    options: [
      "heating alone",
      "coupling with the oxidation of carbon to CO or CO₂",
      "adding water",
      "electrolysis carried out at ordinary room temperature"
    ],
    correctIndex: 1,
    explanation: "Reducing Fe₂O₃ alone has a positive ΔG. Carbon's strong affinity for oxygen provides the necessary driving force in a blast furnace."
  },
  {
    id: "9-7-6",
    question: "For coupling to work physically, the two reactions must",
    options: [
      "share a species or occur at the same site",
      "occur at exactly the same temperature only",
      "have the same ΔS",
      "have equal rates"
    ],
    correctIndex: 0,
    explanation: "Simply adding ΔG values on paper is not enough. Enzymes create the shared active site that makes biological coupling possible."
  },
  {
    id: "9-7-7",
    question: "Electrolysis is a form of coupling in which",
    options: [
      "a catalyst supplies the energy",
      "an electrical input drives an unfavorable reaction",
      "two entirely separate chemical reactions are combined",
      "heat drives the reaction"
    ],
    correctIndex: 1,
    explanation: "Decomposing water has a positive ΔG and requires applied voltage. The electrical work is the favorable partner here."
  },
  {
    id: "9-7-8",
    question: "Photosynthesis is thermodynamically unfavorable on its own and is driven by",
    options: [
      "oxygen",
      "ATP alone",
      "absorbed light energy",
      "heat from the environment"
    ],
    correctIndex: 2,
    explanation: "Photon energy is captured and converted into chemical potential energy. It is the reverse of respiration in both chemistry and energetics."
  },
  {
    id: "9-7-9",
    question: "If an unfavorable reaction has ΔG = +60 kJ, coupling it with ATP hydrolysis at −30 kJ per ATP would require",
    options: [
      "at least three ATP to make ΔG negative",
      "no ATP",
      "a full sixty ATP molecules would be needed",
      "one ATP"
    ],
    correctIndex: 0,
    explanation: "Two ATP give exactly −60 kJ, leaving ΔG at zero rather than negative. Three are needed to make the sum favorable."
  },
  {
    id: "9-7-10",
    question: "Coupled reactions demonstrate that an unfavorable process",
    options: [
      "violates the most fundamental laws of thermodynamics",
      "requires no energy",
      "can never occur",
      "can occur when combined with a favorable process"
    ],
    correctIndex: 3,
    explanation: "The second law is satisfied because total entropy of the universe still increases. Life depends entirely on this principle."
  }
];
