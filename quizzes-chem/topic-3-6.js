// AP Chemistry — Unit 3 (Properties of Substances and Mixtures)
// Registered in quizzes-chem/index.js as "chem-topic-3-6".
// Topic 3.6 — Deviation from Ideal Gas Law

window.QUIZ_QUESTIONS = [
  {
    id: "3-6-1",
    question: "Real gases deviate most from ideal behavior at",
    options: [
      "standard temperature and pressure",
      "high temperature and low pressure",
      "low temperature and high pressure",
      "high temperature and high pressure"
    ],
    correctIndex: 2,
    explanation: "Cold, compressed gases have particles close together and moving slowly, so attractions and particle volume matter. Heat and low pressure restore near-ideal conditions."
  },
  {
    id: "3-6-2",
    question: "At high pressure, the measured volume of a real gas is larger than the ideal prediction because",
    options: [
      "the gas condenses",
      "temperature increases",
      "intermolecular attractions completely dominate behavior",
      "the particles themselves occupy significant volume"
    ],
    correctIndex: 3,
    explanation: "The ideal law treats particles as points, so it underestimates volume when they are crowded. This is the correction the b term makes in the van der Waals equation."
  },
  {
    id: "3-6-3",
    question: "At moderately low temperature, the measured pressure of a real gas is lower than ideal because",
    options: [
      "attractions reduce the force of collisions with walls",
      "particles are destroyed",
      "the container shrinks",
      "the particles themselves occupy a real and finite volume"
    ],
    correctIndex: 0,
    explanation: "A particle heading for the wall is tugged back by its neighbors. The van der Waals a term corrects for this effect."
  },
  {
    id: "3-6-4",
    question: "Which gas is expected to behave most ideally at room conditions?",
    options: [
      "CO₂",
      "H₂O vapor",
      "He",
      "NH₃"
    ],
    correctIndex: 2,
    explanation: "Helium is small, nonpolar, and has minimal dispersion forces. Water and ammonia hydrogen bond strongly, which is the opposite of ideal."
  },
  {
    id: "3-6-5",
    question: "In the van der Waals equation, the constant a accounts for",
    options: [
      "particle volume",
      "intermolecular attractions",
      "random temperature fluctuations",
      "the gas constant"
    ],
    correctIndex: 1,
    explanation: "A larger a indicates stronger attractions, as for polar or hydrogen-bonding gases. The constant b accounts for excluded volume."
  },
  {
    id: "3-6-6",
    question: "Two gases have van der Waals a values of 0.034 and 5.46 L²·atm/mol². The second gas most likely",
    options: [
      "has considerably weaker intermolecular forces overall",
      "has stronger intermolecular forces and deviates more",
      "has smaller particles",
      "behaves more ideally"
    ],
    correctIndex: 1,
    explanation: "The a constant scales directly with attraction strength. Helium sits near the low end and gases like CO₂ near the high end."
  },
  {
    id: "3-6-7",
    question: "As pressure approaches zero, the behavior of a real gas",
    options: [
      "deviates far more from ideal",
      "approaches ideal behavior",
      "becomes unpredictable",
      "is identical to a liquid"
    ],
    correctIndex: 1,
    explanation: "Particles are then far apart and both correction terms become negligible. This is why the ideal gas law works well at ordinary laboratory pressures."
  },
  {
    id: "3-6-8",
    question: "Why does raising the temperature reduce deviation from ideal behavior?",
    options: [
      "The pressure decreases automatically at the same time",
      "The gas constant changes",
      "Particles become smaller",
      "Higher kinetic energy overwhelms the attractions"
    ],
    correctIndex: 3,
    explanation: "Fast-moving particles are less affected by attractions during brief encounters. Particle volume, however, does not change with temperature."
  },
  {
    id: "3-6-9",
    question: "A gas is compressed until it liquefies. This shows that",
    options: [
      "gas particles have no volume",
      "temperature has no effect on gases",
      "the ideal gas law applies at absolutely all pressures",
      "intermolecular attractions are real and significant"
    ],
    correctIndex: 3,
    explanation: "An ideal gas could never condense, since it is defined as having no attractions. Liquefaction is direct evidence that the model is an approximation."
  },
  {
    id: "3-6-10",
    question: "Under conditions where a real gas deviates from ideality, using PV = nRT to calculate moles will",
    options: [
      "always give exactly the correct answer under any conditions",
      "give an approximate answer with condition-dependent error",
      "give a result that is always too large",
      "be impossible"
    ],
    correctIndex: 1,
    explanation: "The direction of error depends on whether attractions or particle volume dominates. Near room conditions the error is usually small enough to ignore."
  }
];
