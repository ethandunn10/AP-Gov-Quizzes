// AP Chemistry — Unit 3 (Properties of Substances and Mixtures)
// Registered in quizzes-chem/index.js as "chem-topic-3-11".
// Topic 3.11 — Spectroscopy and the Electromagnetic Spectrum

window.QUIZ_QUESTIONS = [
  {
    id: "3-11-1",
    question: "Which type of electromagnetic radiation has the highest energy per photon?",
    options: [
      "Visible",
      "Ultraviolet",
      "Microwave radiation",
      "Infrared"
    ],
    correctIndex: 1,
    explanation: "Energy increases with frequency, and UV has higher frequency than visible light. Microwaves sit at the low-energy end of this list."
  },
  {
    id: "3-11-2",
    question: "Microwave radiation is absorbed by molecules and causes",
    options: [
      "molecular rotation",
      "bond breaking",
      "nuclear reactions",
      "electronic transitions"
    ],
    correctIndex: 0,
    explanation: "Rotational transitions require the least energy of the common spectroscopic transitions. Infrared excites vibrations and UV-visible excites electrons."
  },
  {
    id: "3-11-3",
    question: "Infrared spectroscopy is most useful for identifying",
    options: [
      "functional groups from bond vibrations",
      "the number of protons",
      "isotopic abundance",
      "the exact molar mass of an unknown compound"
    ],
    correctIndex: 0,
    explanation: "A C=O stretch, for instance, absorbs in a narrow and recognizable region. Mass spectrometry is what gives molar mass."
  },
  {
    id: "3-11-4",
    question: "The relationship between the energy and wavelength of a photon is",
    options: [
      "E is proportional to wavelength",
      "E is inversely proportional to wavelength",
      "E is independent of wavelength",
      "E equals the wavelength times the frequency"
    ],
    correctIndex: 1,
    explanation: "From E = hc/λ, shorter wavelengths carry more energy. The product of wavelength and frequency is the speed of light, not energy."
  },
  {
    id: "3-11-5",
    question: "A solution appears blue because it",
    options: [
      "absorbs orange light and transmits the rest",
      "absorbs blue light",
      "reflects every one of the wavelengths equally well",
      "emits blue light"
    ],
    correctIndex: 0,
    explanation: "Observed color is the complement of the absorbed color. A solution that absorbed blue would appear orange."
  },
  {
    id: "3-11-6",
    question: "Which transition requires the most energy?",
    options: [
      "All of them require equal energy",
      "Molecular rotation",
      "Molecular vibration",
      "Valence electron excitation"
    ],
    correctIndex: 3,
    explanation: "Electronic transitions need UV or visible photons, orders of magnitude above rotational energies. This hierarchy is why different regions probe different features."
  },
  {
    id: "3-11-7",
    question: "UV-visible spectroscopy is most commonly used to",
    options: [
      "count neutrons",
      "determine concentration of colored species",
      "identify isotopes",
      "measure the boiling points of various liquids"
    ],
    correctIndex: 1,
    explanation: "Absorbance at a chosen wavelength varies with concentration through Beer's law. Colorless species can often be derivatized to absorb."
  },
  {
    id: "3-11-8",
    question: "A photon with a frequency of 6.0 × 10¹⁴ Hz has an energy of approximately (h = 6.63 × 10⁻³⁴ J·s)",
    options: [
      "9.0 × 10⁷ J",
      "4.0 × 10⁻¹⁹ J",
      "4.0 × 10⁻²⁰ J",
      "1.1 × 10⁻²⁰ J"
    ],
    correctIndex: 1,
    explanation: "E = hν = (6.63 × 10⁻³⁴)(6.0 × 10¹⁴) = 4.0 × 10⁻¹⁹ J. That magnitude is typical for a visible photon."
  },
  {
    id: "3-11-9",
    question: "Why can microwave ovens heat water efficiently?",
    options: [
      "Water absorbs ultraviolet radiation",
      "Water molecules are ionic",
      "Water's dipole rotates with the field, producing heat",
      "Microwaves break apart the covalent bonds within water"
    ],
    correctIndex: 2,
    explanation: "The polarity of the molecule is what couples it to the field. Nonpolar substances heat far less efficiently in a microwave."
  },
  {
    id: "3-11-10",
    question: "Arranged from longest to shortest wavelength, the correct order is",
    options: [
      "Ultraviolet, visible, infrared, microwave, radio",
      "Visible, ultraviolet, radio, microwave, infrared",
      "Infrared, radio, visible, microwave, ultraviolet",
      "Radio, microwave, infrared, visible, ultraviolet"
    ],
    correctIndex: 3,
    explanation: "This ordering also runs from lowest to highest energy. Knowing the sequence lets you reason about which transitions a given region can excite."
  }
];
