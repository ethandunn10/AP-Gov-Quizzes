// AP Chemistry — Unit 9 (Thermodynamics and Electrochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-9-3".
// Topic 9.3 — Gibbs Free Energy and Thermodynamic Favorability

window.QUIZ_QUESTIONS = [
  {
    id: "9-3-1",
    question: "The Gibbs free energy change is given by",
    options: [
      "ΔG = ΔH + TΔS",
      "ΔG = ΔH − TΔS",
      "ΔG = TΔS − ΔH",
      "ΔG = ΔH × TΔS"
    ],
    correctIndex: 1,
    explanation: "Temperature must be in kelvins and units must match between the terms. Entropy is usually tabulated in J while enthalpy is in kJ."
  },
  {
    id: "9-3-2",
    question: "A reaction is thermodynamically favorable when",
    options: [
      "ΔG is positive",
      "ΔG is negative",
      "ΔH is negative only",
      "ΔS is positive only"
    ],
    correctIndex: 1,
    explanation: "Either enthalpy or entropy alone can be unfavorable if the other compensates. Favorability says nothing about rate."
  },
  {
    id: "9-3-3",
    question: "A reaction with ΔH < 0 and ΔS > 0 is favorable",
    options: [
      "only at high temperature",
      "only at low temperature",
      "at all temperatures",
      "at no temperature"
    ],
    correctIndex: 2,
    explanation: "Both terms push ΔG negative regardless of T. Combustion reactions typically fall into this category."
  },
  {
    id: "9-3-4",
    question: "A reaction with ΔH > 0 and ΔS > 0 is favorable",
    options: [
      "at high temperature, where TΔS outweighs ΔH",
      "at low temperature",
      "at all temperatures",
      "never"
    ],
    correctIndex: 0,
    explanation: "The entropy term grows with temperature until it dominates. Melting and evaporation follow this pattern."
  },
  {
    id: "9-3-5",
    question: "For a reaction with ΔH = −92 kJ and ΔS = −199 J/K, the temperature above which it becomes unfavorable is approximately",
    options: [
      "192 K",
      "462 K",
      "0.46 K",
      "2160 K"
    ],
    correctIndex: 1,
    explanation: "Setting ΔG = 0 gives T = ΔH/ΔS = −92,000/−199 = 462 K. Converting J to kJ consistently is essential here."
  },
  {
    id: "9-3-6",
    question: "A reaction with ΔH > 0 and ΔS < 0 is",
    options: [
      "favorable at all temperatures",
      "never thermodynamically favorable",
      "favorable at high temperature",
      "favorable at low temperature"
    ],
    correctIndex: 1,
    explanation: "Both terms make ΔG positive at every temperature. Such reactions proceed only when coupled to a favorable process."
  },
  {
    id: "9-3-7",
    question: "At the temperature where ΔG = 0, the system is",
    options: [
      "completely converted to products",
      "at equilibrium under standard conditions",
      "unable to react",
      "at absolute zero"
    ],
    correctIndex: 1,
    explanation: "Neither direction is favored at that point. A phase change at its transition temperature is the classic example."
  },
  {
    id: "9-3-8",
    question: "The term 'thermodynamically favorable' is preferred over 'spontaneous' because",
    options: [
      "spontaneous implies the reaction occurs rapidly, which favorability does not guarantee",
      "spontaneous means the reaction is impossible",
      "they mean opposite things",
      "favorable applies only to gases"
    ],
    correctIndex: 0,
    explanation: "Diamond converting to graphite is favorable yet effectively never observed. Kinetics determines whether a favorable reaction actually proceeds."
  },
  {
    id: "9-3-9",
    question: "ΔG° for a reaction can be calculated from",
    options: [
      "standard free energies of formation, products minus reactants",
      "the rate constant",
      "the activation energy",
      "the temperature alone"
    ],
    correctIndex: 0,
    explanation: "The same products-minus-reactants approach used for enthalpy applies. Elements in their standard states have ΔG°f = 0."
  },
  {
    id: "9-3-10",
    question: "Melting ice at 25 °C is thermodynamically favorable because",
    options: [
      "ΔH is negative",
      "ΔS is positive and TΔS exceeds the positive ΔH at that temperature",
      "ΔS is negative",
      "both ΔH and ΔS are negative"
    ],
    correctIndex: 1,
    explanation: "Melting absorbs energy but increases dispersal substantially. Below 0 °C the TΔS term is too small and freezing becomes favorable instead."
  }
];
