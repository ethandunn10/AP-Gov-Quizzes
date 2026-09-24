// AP Chemistry — Unit 2 (Compound Structure and Properties)
// Registered in quizzes-chem/index.js as "chem-topic-2-6".
// Topic 2.6 — Resonance and Formal Charge

window.QUIZ_QUESTIONS = [
  {
    id: "2-6-1",
    question: "Resonance structures for a molecule differ in",
    options: [
      "the positions of atoms",
      "the placement of electrons only",
      "the total number of valence electrons",
      "molecular formula"
    ],
    correctIndex: 1,
    explanation: "Only electron distribution differs; nuclei stay fixed. Moving an atom would produce a different compound, not a resonance form."
  },
  {
    id: "2-6-2",
    question: "Experimentally, all three S-O bonds in SO₃ are identical in length. This is best explained by",
    options: [
      "rapid interconversion between structures",
      "delocalization of electrons, with the true structure a hybrid of the resonance forms",
      "the molecule being ionic",
      "one double bond that moves around"
    ],
    correctIndex: 1,
    explanation: "The real molecule is a single averaged structure, not a flickering mixture. Each bond has an order of about 1.33."
  },
  {
    id: "2-6-3",
    question: "The formal charge on an atom is calculated as",
    options: [
      "valence electrons − (lone pair electrons + half of bonding electrons)",
      "valence electrons − total electrons around the atom",
      "bonding electrons − lone pair electrons",
      "the ionic charge of the atom"
    ],
    correctIndex: 0,
    explanation: "Bonding electrons are split evenly between the two atoms in this bookkeeping. Formal charge is a formalism, not an actual measured charge."
  },
  {
    id: "2-6-4",
    question: "In the Lewis structure of CO with a triple bond, the formal charges are",
    options: [
      "C = 0, O = 0",
      "C = −1, O = +1",
      "C = +1, O = −1",
      "C = −2, O = +2"
    ],
    correctIndex: 1,
    explanation: "Carbon has 4 − (2 + 3) = −1 and oxygen has 6 − (2 + 3) = +1. Despite the unfavorable-looking charges, this structure is preferred because it gives both atoms octets."
  },
  {
    id: "2-6-5",
    question: "When choosing among valid Lewis structures, the preferred one generally has",
    options: [
      "the largest formal charges",
      "formal charges closest to zero, with any negative formal charge on the more electronegative atom",
      "all formal charges positive",
      "no double bonds"
    ],
    correctIndex: 1,
    explanation: "Minimizing charge separation lowers energy, and electronegative atoms accommodate negative charge best. These criteria are applied in that order."
  },
  {
    id: "2-6-6",
    question: "Which species requires resonance structures to be represented accurately?",
    options: [
      "CH₄",
      "NO₃⁻",
      "H₂O",
      "NH₃"
    ],
    correctIndex: 1,
    explanation: "Nitrate's three equivalent N-O bonds cannot be shown with a single structure. Molecules with only single bonds and no delocalization need no resonance."
  },
  {
    id: "2-6-7",
    question: "The bond order of each N-O bond in the nitrate ion is approximately",
    options: [
      "1",
      "1.33",
      "1.5",
      "2"
    ],
    correctIndex: 1,
    explanation: "Four bonding pairs are distributed over three bonds in the hybrid. This intermediate value explains why the bonds are shorter than single N-O bonds but longer than double ones."
  },
  {
    id: "2-6-8",
    question: "In the benzene molecule, C₆H₆, the carbon-carbon bonds are",
    options: [
      "alternating single and double bonds of different lengths",
      "all identical, intermediate between single and double bonds",
      "all single bonds",
      "all triple bonds"
    ],
    correctIndex: 1,
    explanation: "Six pi electrons are delocalized around the ring, giving a bond order of 1.5. The alternating-bond picture is a resonance contributor, not the real structure."
  },
  {
    id: "2-6-9",
    question: "Comparing the two resonance forms of SCN⁻, formal charge analysis helps determine",
    options: [
      "which structure contributes most to the hybrid",
      "the molecular mass",
      "the melting point",
      "the number of valence electrons"
    ],
    correctIndex: 0,
    explanation: "Contributors are not necessarily equal, and the one with the most favorable formal charges dominates. Sulfur's lower electronegativity makes negative charge on nitrogen preferable."
  },
  {
    id: "2-6-10",
    question: "Delocalization of electrons across several atoms generally",
    options: [
      "raises the energy of the species",
      "lowers the energy, making the species more stable",
      "has no effect on stability",
      "converts covalent bonds to ionic bonds"
    ],
    correctIndex: 1,
    explanation: "Spreading electron density over more nuclei reduces repulsion and lowers energy. Benzene's unusual stability compared with hypothetical cyclohexatriene is the classic evidence."
  }
];
