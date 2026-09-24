// AP Chemistry — Unit 1 (Atomic Structure and Properties)
// Registered in quizzes-chem/index.js as "chem-topic-1-5".
// Topic 1.5 — Atomic Structure and Electron Configuration

window.QUIZ_QUESTIONS = [
  {
    id: "1-5-1",
    question: "The ground-state electron configuration of a neutral sulfur atom (Z = 16) is",
    options: [
      "1s² 2s² 2p⁶ 3s² 3p⁴",
      "1s² 2s² 2p⁶ 3s² 3p⁶",
      "1s² 2s² 2p⁶ 3s² 3p²",
      "1s² 2s² 2p⁶ 3s¹ 3p⁵"
    ],
    correctIndex: 0,
    explanation: "Sixteen electrons fill through 3p⁴. The 3p⁶ option describes argon, and the last violates the Aufbau principle by promoting a 3s electron with no reason."
  },
  {
    id: "1-5-2",
    question: "Which configuration represents an excited state of a neutral atom?",
    options: [
      "1s² 2s² 2p⁶",
      "1s² 2s² 2p⁵ 3s¹",
      "1s² 2s² 2p⁴",
      "1s² 2s¹"
    ],
    correctIndex: 1,
    explanation: "The 2p subshell is not filled yet an electron sits in 3s, so energy was absorbed to promote it. The others are legitimate ground states for Ne, O, and Li."
  },
  {
    id: "1-5-3",
    question: "Coulomb's law explains why electrons in the 1s orbital of an atom",
    options: [
      "are easier to remove than valence electrons",
      "are held most tightly because they are closest to the nucleus",
      "experience no nuclear attraction",
      "have the highest energy of any electrons"
    ],
    correctIndex: 1,
    explanation: "Attraction grows with charge and falls with distance, so core electrons are bound most strongly. This is why core-electron ionization energies are enormous compared with valence ones."
  },
  {
    id: "1-5-4",
    question: "The configuration of the Fe²⁺ ion (Fe is Z = 26) is",
    options: [
      "[Ar] 4s² 3d⁴",
      "[Ar] 3d⁶",
      "[Ar] 4s² 3d⁶",
      "[Ar] 3d⁴ 4s²"
    ],
    correctIndex: 1,
    explanation: "Transition metals lose their 4s electrons before 3d electrons when ionizing. Removing 3d electrons first is the standard misconception here."
  },
  {
    id: "1-5-5",
    question: "The Pauli exclusion principle requires that",
    options: [
      "electrons fill the lowest-energy orbitals first",
      "no two electrons in an atom share all four quantum numbers",
      "degenerate orbitals are singly occupied before pairing",
      "electrons in the same orbital have the same spin"
    ],
    correctIndex: 1,
    explanation: "In practice this limits each orbital to two electrons of opposite spin. The first and third options state the Aufbau principle and Hund's rule."
  },
  {
    id: "1-5-6",
    question: "How many unpaired electrons are in a ground-state nitrogen atom (Z = 7)?",
    options: [
      "0",
      "1",
      "3",
      "5"
    ],
    correctIndex: 2,
    explanation: "The three 2p electrons occupy separate orbitals with parallel spins by Hund's rule. Pairing two of them would raise the energy through electron-electron repulsion."
  },
  {
    id: "1-5-7",
    question: "Effective nuclear charge experienced by a valence electron is less than the full nuclear charge because",
    options: [
      "the nucleus loses protons",
      "inner electrons shield the valence electron from the nucleus",
      "valence electrons repel the nucleus",
      "the electron's own charge cancels part of the nuclear charge"
    ],
    correctIndex: 1,
    explanation: "Core electrons lie between the nucleus and valence electrons and offset part of the attraction. Z_eff is the key idea behind almost every periodic trend."
  },
  {
    id: "1-5-8",
    question: "Which atom has the ground-state configuration [Ne] 3s² 3p³?",
    options: [
      "N",
      "P",
      "As",
      "Al"
    ],
    correctIndex: 1,
    explanation: "Ten core electrons plus five valence gives Z = 15, phosphorus. Nitrogen has the same valence pattern but with a [He] core."
  },
  {
    id: "1-5-9",
    question: "Which pair of species is isoelectronic?",
    options: [
      "Na⁺ and Ne",
      "Na⁺ and Na",
      "Cl and Cl⁻",
      "Mg and Mg²⁺"
    ],
    correctIndex: 0,
    explanation: "Both have 10 electrons in the configuration 1s² 2s² 2p⁶. Isoelectronic species share electron count but differ in nuclear charge, which is why Na⁺ is smaller than Ne."
  },
  {
    id: "1-5-10",
    question: "Photoelectron spectroscopy and electron configuration are connected because the spectrum reveals",
    options: [
      "the total number of electrons only",
      "the relative energies and populations of each subshell",
      "the mass of the atom",
      "the number of neutrons"
    ],
    correctIndex: 1,
    explanation: "Each peak's position gives a subshell's binding energy and its height gives how many electrons occupy it. That makes PES direct experimental evidence for the shell model."
  }
];
