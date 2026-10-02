// AP Chemistry — Unit 3 (Properties of Substances and Mixtures)
// Registered in quizzes-chem/index.js as "chem-topic-3-13".
// Topic 3.13 — Beer-Lambert Law

window.QUIZ_QUESTIONS = [
  {
    id: "3-13-1",
    question: "The Beer-Lambert law states that absorbance is proportional to",
    options: [
      "concentration only",
      "absorptivity, path length, and concentration",
      "transmittance",
      "only the wavelength of the incident light source used"
    ],
    correctIndex: 1,
    explanation: "A = εbc combines all three factors. In a typical experiment ε and b are constant, so absorbance tracks concentration alone."
  },
  {
    id: "3-13-2",
    question: "A solution has an absorbance of 0.40 at a given concentration. If the concentration is doubled with path length unchanged, the absorbance becomes",
    options: [
      "0.20",
      "0.40",
      "0.80",
      "1.60"
    ],
    correctIndex: 2,
    explanation: "Absorbance is directly proportional to concentration, so it doubles to 0.80. Transmittance does not scale linearly, which is why absorbance is the preferred quantity."
  },
  {
    id: "3-13-3",
    question: "To construct a calibration curve, a student should plot",
    options: [
      "concentration versus time",
      "transmittance versus the path length of the sample cell",
      "absorbance versus wavelength",
      "absorbance versus concentration of standard solutions"
    ],
    correctIndex: 3,
    explanation: "The resulting straight line lets an unknown's absorbance be converted to concentration. Wavelength is held fixed at the analyte's absorption maximum."
  },
  {
    id: "3-13-4",
    question: "Why is the wavelength of maximum absorbance chosen for a Beer's law analysis?",
    options: [
      "It gives the greatest sensitivity and least error",
      "It is the only wavelength the instrument can produce",
      "It minimizes absorbance",
      "It eliminates the need for standards"
    ],
    correctIndex: 0,
    explanation: "At a peak, the signal is largest and its slope with wavelength is near zero. Both factors reduce measurement uncertainty."
  },
  {
    id: "3-13-5",
    question: "A calibration curve has the equation A = 250 c, where c is in mol/L. A sample with A = 0.500 has a concentration of",
    options: [
      "0.500 M",
      "2.00 × 10⁻³ M",
      "125 M",
      "5.00 × 10⁻³ M"
    ],
    correctIndex: 1,
    explanation: "c = 0.500 ÷ 250 = 2.00 × 10⁻³ M. Multiplying instead of dividing gives a physically absurd 125 M."
  },
  {
    id: "3-13-6",
    question: "If the path length of the cuvette is doubled at constant concentration, absorbance",
    options: [
      "becomes zero",
      "halves",
      "doubles",
      "is unchanged"
    ],
    correctIndex: 2,
    explanation: "Light travels through twice as many absorbing particles. Standard cuvettes are 1.00 cm precisely so this term is easy to handle."
  },
  {
    id: "3-13-7",
    question: "Molar absorptivity (ε) is a property that depends on",
    options: [
      "the concentration of the particular solution measured",
      "the identity of the species and the wavelength used",
      "the volume of solution",
      "the temperature only"
    ],
    correctIndex: 1,
    explanation: "It is an intensive property characteristic of a substance at a given wavelength. A large ε makes a species detectable at very low concentration."
  },
  {
    id: "3-13-8",
    question: "A student forgets to blank the spectrophotometer with pure solvent. The measured absorbances will likely be",
    options: [
      "negative in all cases",
      "systematically offset from the true values",
      "randomly scattered above and below the true value",
      "exactly correct"
    ],
    correctIndex: 1,
    explanation: "Blanking subtracts absorbance from the cuvette and solvent, and skipping it introduces a consistent bias. Systematic errors shift every point in the same direction."
  },
  {
    id: "3-13-9",
    question: "Beer's law tends to fail at very high concentrations because",
    options: [
      "the measured absorbance value becomes negative instead",
      "solute particles interact and linearity breaks down",
      "the light source fails",
      "path length changes"
    ],
    correctIndex: 1,
    explanation: "Concentrated solutions also transmit so little light that instrument error grows. Analysts dilute samples into the linear range for this reason."
  },
  {
    id: "3-13-10",
    question: "Beer's law analysis is well suited to monitoring the rate of a reaction when",
    options: [
      "a reactant or product absorbs where others do not",
      "the reaction produces a gas only",
      "the reaction is instantaneous",
      "no species in the mixture absorbs any visible light"
    ],
    correctIndex: 0,
    explanation: "Absorbance then converts directly to concentration versus time. The crystal violet fading experiment is the standard classroom example."
  }
];
