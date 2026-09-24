// AP Chemistry — Unit 3 (Properties of Substances and Mixtures)
// Registered in quizzes-chem/index.js as "chem-topic-3-13".
// Topic 3.13 — Beer-Lambert Law

window.QUIZ_QUESTIONS = [
  {
    id: "3-13-1",
    question: "The Beer-Lambert law states that absorbance is proportional to",
    options: [
      "concentration only",
      "molar absorptivity, path length, and concentration",
      "transmittance",
      "the wavelength of light"
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
      "absorbance versus wavelength",
      "absorbance versus concentration of standard solutions",
      "concentration versus time",
      "transmittance versus path length"
    ],
    correctIndex: 1,
    explanation: "The resulting straight line lets an unknown's absorbance be converted to concentration. Wavelength is held fixed at the analyte's absorption maximum."
  },
  {
    id: "3-13-4",
    question: "Why is the wavelength of maximum absorbance chosen for a Beer's law analysis?",
    options: [
      "It gives the greatest sensitivity and least error from small wavelength shifts",
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
      "2.00 × 10⁻³ M",
      "125 M",
      "5.00 × 10⁻³ M",
      "0.500 M"
    ],
    correctIndex: 0,
    explanation: "c = 0.500 ÷ 250 = 2.00 × 10⁻³ M. Multiplying instead of dividing gives a physically absurd 125 M."
  },
  {
    id: "3-13-6",
    question: "If the path length of the cuvette is doubled at constant concentration, absorbance",
    options: [
      "halves",
      "doubles",
      "is unchanged",
      "becomes zero"
    ],
    correctIndex: 1,
    explanation: "Light travels through twice as many absorbing particles. Standard cuvettes are 1.00 cm precisely so this term is easy to handle."
  },
  {
    id: "3-13-7",
    question: "Molar absorptivity (ε) is a property that depends on",
    options: [
      "the concentration of the solution",
      "the identity of the absorbing species and the wavelength used",
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
      "systematically offset from the true values",
      "randomly scattered",
      "exactly correct",
      "negative in all cases"
    ],
    correctIndex: 0,
    explanation: "Blanking subtracts absorbance from the cuvette and solvent, and skipping it introduces a consistent bias. Systematic errors shift every point in the same direction."
  },
  {
    id: "3-13-9",
    question: "Beer's law tends to fail at very high concentrations because",
    options: [
      "absorbance becomes negative",
      "solute particles interact and the linear relationship breaks down",
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
      "no species absorbs visible light",
      "a reactant or product absorbs at a wavelength where others do not",
      "the reaction produces a gas only",
      "the reaction is instantaneous"
    ],
    correctIndex: 1,
    explanation: "Absorbance then converts directly to concentration versus time. The crystal violet fading experiment is the standard classroom example."
  }
];
