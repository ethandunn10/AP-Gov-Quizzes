// AP Chemistry — Unit 1 (Atomic Structure and Properties)
// Registered in quizzes-chem/index.js as "chem-topic-1-2".
// Topic 1.2 — Mass Spectra of Elements

window.QUIZ_QUESTIONS = [
  {
    id: "1-2-1",
    question: "A mass spectrum of an element shows peaks at 63 amu (69.2%) and 65 amu (30.8%). The average atomic mass is closest to",
    options: [
      "63.6 amu",
      "64.0 amu",
      "64.4 amu",
      "63.0 amu"
    ],
    correctIndex: 0,
    explanation: "(63 × 0.692) + (65 × 0.308) = 43.6 + 20.0 = 63.6 amu, identifying copper. A simple average of 64.0 ignores that the lighter isotope is more than twice as abundant."
  },
  {
    id: "1-2-2",
    question: "In a mass spectrum, the position of a peak along the horizontal axis corresponds to",
    options: [
      "the abundance of the isotope",
      "the mass-to-charge ratio of the ion",
      "the ionization energy of the atom",
      "the number of electrons in the atom"
    ],
    correctIndex: 1,
    explanation: "The instrument separates ions by m/z, and since most ions carry a +1 charge the axis reads effectively as mass. Abundance is the vertical axis."
  },
  {
    id: "1-2-3",
    question: "Two isotopes of an element differ in",
    options: [
      "number of protons",
      "number of neutrons",
      "number of electrons in the neutral atom",
      "nuclear charge"
    ],
    correctIndex: 1,
    explanation: "Isotopes share the atomic number, which fixes protons, nuclear charge, and electron count in the neutral atom. Only the neutron count, and therefore the mass, varies."
  },
  {
    id: "1-2-4",
    question: "An element's average atomic mass is 24.3 amu, with isotopes at 24, 25, and 26 amu. What does this suggest?",
    options: [
      "The three isotopes are equally abundant",
      "The 24 amu isotope is by far the most abundant",
      "The 26 amu isotope is most abundant",
      "The element has no stable isotopes"
    ],
    correctIndex: 1,
    explanation: "The weighted average sits very close to 24, so that isotope must dominate. Equal abundances would place the average near 25."
  },
  {
    id: "1-2-5",
    question: "Why do isotopes of the same element have nearly identical chemical properties?",
    options: [
      "They have the same mass",
      "They have the same electron configuration",
      "They have the same number of neutrons",
      "They occupy the same position in the mass spectrum"
    ],
    correctIndex: 1,
    explanation: "Chemistry is governed by valence electrons, which are identical across isotopes. Small rate differences do appear for very light isotopes such as H and D, but the reactions are the same."
  },
  {
    id: "1-2-6",
    question: "A mass spectrum of chlorine gas shows peaks at 70, 72, and 74 amu. These correspond to",
    options: [
      "three isotopes of chlorine atoms",
      "Cl₂ molecules made from different combinations of ³⁵Cl and ³⁷Cl",
      "chlorine ions with different charges",
      "impurities in the sample"
    ],
    correctIndex: 1,
    explanation: "³⁵Cl-³⁵Cl = 70, ³⁵Cl-³⁷Cl = 72, and ³⁷Cl-³⁷Cl = 74. The 72 peak is the tallest because there are two ways to form the mixed molecule."
  },
  {
    id: "1-2-7",
    question: "An element has two isotopes with masses 10.0 and 11.0 amu and an average atomic mass of 10.8 amu. The percent abundance of the heavier isotope is approximately",
    options: [
      "20%",
      "50%",
      "80%",
      "90%"
    ],
    correctIndex: 2,
    explanation: "Let x be the fraction of the 11.0 isotope: 10(1−x) + 11x = 10.8 gives x = 0.80. The average lies much nearer 11 than 10, so the heavier isotope must dominate."
  },
  {
    id: "1-2-8",
    question: "Before separation in a mass spectrometer, the sample must first be",
    options: [
      "cooled to absolute zero",
      "ionized so that it responds to electric and magnetic fields",
      "dissolved in water",
      "converted to a solid"
    ],
    correctIndex: 1,
    explanation: "Neutral particles are unaffected by the fields that deflect the beam, so ionization is essential. The sample is also vaporized so that individual particles can travel freely."
  },
  {
    id: "1-2-9",
    question: "In a mass spectrometer, lighter ions of the same charge are deflected",
    options: [
      "less than heavier ions",
      "more than heavier ions",
      "the same amount as heavier ions",
      "in the opposite direction from heavier ions"
    ],
    correctIndex: 1,
    explanation: "For the same force, smaller mass means larger acceleration, so lighter ions curve more sharply. This is what sorts the beam by m/z."
  },
  {
    id: "1-2-10",
    question: "The atomic mass listed on the periodic table for an element is",
    options: [
      "the mass of its most abundant isotope",
      "the weighted average of its naturally occurring isotopes",
      "always a whole number",
      "the mass of one atom in grams"
    ],
    correctIndex: 1,
    explanation: "Weighting by natural abundance is why most values are not whole numbers. Chlorine's 35.45 reflects a mix of ³⁵Cl and ³⁷Cl, not an isotope of mass 35.45."
  }
];
