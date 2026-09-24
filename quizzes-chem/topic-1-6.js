// AP Chemistry — Unit 1 (Atomic Structure and Properties)
// Registered in quizzes-chem/index.js as "chem-topic-1-6".
// Topic 1.6 — Photoelectron Spectroscopy

window.QUIZ_QUESTIONS = [
  {
    id: "1-6-1",
    question: "In a photoelectron spectrum, the height of a peak indicates",
    options: [
      "the binding energy of the electrons",
      "the number of electrons in that subshell",
      "the mass of the atom",
      "the orbital's shape"
    ],
    correctIndex: 1,
    explanation: "Peak height is proportional to how many electrons share that energy. Binding energy is read off the horizontal axis instead."
  },
  {
    id: "1-6-2",
    question: "A PES spectrum shows peaks at 104, 6.84, and 0.50 MJ/mol with relative heights 2:2:1. The element is",
    options: [
      "Li",
      "B",
      "Na",
      "Be"
    ],
    correctIndex: 1,
    explanation: "Heights 2:2:1 give five electrons total: 1s² 2s² 2p¹, which is boron. Lithium would show 2:1 and beryllium 2:2."
  },
  {
    id: "1-6-3",
    question: "Why do 1s electrons appear at much higher binding energy than 2s electrons in the same atom?",
    options: [
      "They are farther from the nucleus",
      "They are closer to the nucleus and less shielded, so they are held more tightly",
      "They have greater spin",
      "There are more of them"
    ],
    correctIndex: 1,
    explanation: "Coulombic attraction increases as distance shrinks and as shielding decreases. The gap is typically an order of magnitude, which is why PES axes often use a log scale."
  },
  {
    id: "1-6-4",
    question: "Comparing the 1s peaks of lithium and beryllium, beryllium's appears at",
    options: [
      "lower binding energy because it has more electrons",
      "higher binding energy because its nuclear charge is greater",
      "the same binding energy because both are 1s electrons",
      "lower binding energy because its atomic radius is larger"
    ],
    correctIndex: 1,
    explanation: "Core electrons feel nearly the full nuclear charge, so Be's extra proton binds them more tightly. Core binding energies rise steadily across a period for this reason."
  },
  {
    id: "1-6-5",
    question: "A spectrum shows peaks at 151, 12.1, 7.19, and 1.09 MJ/mol with heights 2:2:6:1. This corresponds to",
    options: [
      "Na",
      "Mg",
      "Al",
      "Ne"
    ],
    correctIndex: 0,
    explanation: "The heights sum to 11 electrons in the pattern 1s² 2s² 2p⁶ 3s¹, which is sodium. Magnesium would show a final peak of height 2."
  },
  {
    id: "1-6-6",
    question: "In PES, the energy of the ejected electron is used to calculate binding energy because",
    options: [
      "photon energy equals binding energy plus the kinetic energy of the ejected electron",
      "the electron gains energy from the nucleus as it leaves",
      "all electrons are ejected with the same energy",
      "binding energy equals the photon energy exactly"
    ],
    correctIndex: 0,
    explanation: "Conservation of energy splits the incoming photon between escaping the atom and the electron's motion. Measuring kinetic energy therefore gives binding energy by subtraction."
  },
  {
    id: "1-6-7",
    question: "Why does the 2p peak in a neon spectrum have three times the height of its 2s peak?",
    options: [
      "2p electrons are held more tightly",
      "The 2p subshell holds six electrons while 2s holds two",
      "There are three 2p subshells",
      "2p electrons absorb more photons"
    ],
    correctIndex: 1,
    explanation: "Three degenerate p orbitals hold six electrons, giving a 6:2 ratio. There is one 2p subshell containing three orbitals, not three subshells."
  },
  {
    id: "1-6-8",
    question: "PES provides direct evidence against which older model of the atom?",
    options: [
      "A model in which all electrons in an atom have the same energy",
      "The nuclear model",
      "The existence of protons",
      "The idea that atoms have mass"
    ],
    correctIndex: 0,
    explanation: "Multiple distinct peaks show electrons occupy discrete energy levels rather than a single one. PES is the standard experimental support for shells and subshells."
  },
  {
    id: "1-6-9",
    question: "Two elements show 1s peaks at 6.84 and 11.5 MJ/mol. Which conclusion is best supported?",
    options: [
      "The second element has a larger atomic radius",
      "The second element has a greater nuclear charge",
      "The first element has more electrons",
      "The two elements are isotopes"
    ],
    correctIndex: 1,
    explanation: "Core binding energy tracks nuclear charge closely, since shielding of 1s electrons is minimal. Greater nuclear charge also implies a smaller radius, making the first option backwards."
  },
  {
    id: "1-6-10",
    question: "The lowest-binding-energy peak in a PES spectrum corresponds to electrons that",
    options: [
      "are in the innermost shell",
      "are valence electrons and are removed most easily",
      "have the greatest mass",
      "cannot be removed by photons"
    ],
    correctIndex: 1,
    explanation: "Valence electrons are farthest out and most shielded, so they require the least energy to eject. That peak's binding energy relates directly to first ionization energy."
  }
];
