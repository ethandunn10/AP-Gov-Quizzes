// AP Chemistry — Unit 3 (Properties of Substances and Mixtures)
// Registered in quizzes-chem/index.js as "chem-topic-3-6".
// Topic 3.6 — Deviation from Ideal Gas Law

window.QUIZ_QUESTIONS = [
  {
    id: "3-6-1",
    question: "Real gases deviate most from ideal behavior at",
    options: [
      "high temperature and low pressure",
      "low temperature and high pressure",
      "high temperature and high pressure",
      "standard temperature and pressure"
    ],
    correctIndex: 1,
    explanation: "Cold, compressed gases have particles close together and moving slowly, so attractions and particle volume matter. Heat and low pressure restore near-ideal conditions."
  },
  {
    id: "3-6-2",
    question: "At high pressure, the measured volume of a real gas is larger than the ideal prediction because",
    options: [
      "intermolecular attractions dominate",
      "the particles themselves occupy a significant fraction of the container volume",
      "the gas condenses",
      "temperature increases"
    ],
    correctIndex: 1,
    explanation: "The ideal law treats particles as points, so it underestimates volume when they are crowded. This is the correction the b term makes in the van der Waals equation."
  },
  {
    id: "3-6-3",
    question: "At moderately low temperature, the measured pressure of a real gas is lower than ideal because",
    options: [
      "particles occupy volume",
      "intermolecular attractions reduce the force of collisions with the walls",
      "particles are destroyed",
      "the container shrinks"
    ],
    correctIndex: 1,
    explanation: "A particle heading for the wall is tugged back by its neighbors. The van der Waals a term corrects for this effect."
  },
  {
    id: "3-6-4",
    question: "Which gas is expected to behave most ideally at room conditions?",
    options: [
      "H₂O vapor",
      "He",
      "NH₃",
      "CO₂"
    ],
    correctIndex: 1,
    explanation: "Helium is small, nonpolar, and has minimal dispersion forces. Water and ammonia hydrogen bond strongly, which is the opposite of ideal."
  },
  {
    id: "3-6-5",
    question: "In the van der Waals equation, the constant a accounts for",
    options: [
      "particle volume",
      "intermolecular attractions",
      "temperature fluctuations",
      "the gas constant"
    ],
    correctIndex: 1,
    explanation: "A larger a indicates stronger attractions, as for polar or hydrogen-bonding gases. The constant b accounts for excluded volume."
  },
  {
    id: "3-6-6",
    question: "Two gases have van der Waals a values of 0.034 and 5.46 L²·atm/mol². The second gas most likely",
    options: [
      "has weaker intermolecular forces",
      "has stronger intermolecular forces and deviates more from ideality",
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
      "deviates more from ideal",
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
      "Particles become smaller",
      "Higher kinetic energy overwhelms intermolecular attractions",
      "Pressure decreases automatically",
      "The gas constant changes"
    ],
    correctIndex: 1,
    explanation: "Fast-moving particles are less affected by attractions during brief encounters. Particle volume, however, does not change with temperature."
  },
  {
    id: "3-6-9",
    question: "A gas is compressed until it liquefies. This shows that",
    options: [
      "the ideal gas law applies at all pressures",
      "intermolecular attractions are real and become significant at close range",
      "gas particles have no volume",
      "temperature has no effect on gases"
    ],
    correctIndex: 1,
    explanation: "An ideal gas could never condense, since it is defined as having no attractions. Liquefaction is direct evidence that the model is an approximation."
  },
  {
    id: "3-6-10",
    question: "Under conditions where a real gas deviates from ideality, using PV = nRT to calculate moles will",
    options: [
      "always give the exact answer",
      "give an approximate answer whose error depends on the conditions and the gas",
      "give a result that is always too large",
      "be impossible"
    ],
    correctIndex: 1,
    explanation: "The direction of error depends on whether attractions or particle volume dominates. Near room conditions the error is usually small enough to ignore."
  }
];
