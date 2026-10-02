// AP Chemistry — Unit 8 (Acids and Bases)
// Registered in quizzes-chem/index.js as "chem-topic-8-4".
// Topic 8.4 — Acid-Base Reactions and Buffers

window.QUIZ_QUESTIONS = [
  {
    id: "8-4-1",
    question: "A buffer solution consists of",
    options: [
      "a weak acid and its conjugate base together",
      "any acid in water",
      "pure water",
      "a strong acid together with any strong base at all"
    ],
    correctIndex: 0,
    explanation: "A weak base with its conjugate acid works equally well. Both components are needed to neutralize additions in either direction."
  },
  {
    id: "8-4-2",
    question: "A buffer resists pH change because",
    options: [
      "added H⁺ reacts with the base, added OH⁻ with the acid",
      "it contains an extremely high concentration of pure water",
      "it contains a catalyst",
      "it prevents any reaction"
    ],
    correctIndex: 0,
    explanation: "Each component neutralizes one type of addition. This is why both must be present in significant amounts."
  },
  {
    id: "8-4-3",
    question: "Which combination would produce a buffer?",
    options: [
      "NaOH and NaCl",
      "HCl and NaOH in equal moles",
      "HCl and NaCl",
      "CH₃COOH and CH₃COONa"
    ],
    correctIndex: 3,
    explanation: "Acetic acid with sodium acetate is the standard example. HCl with NaCl fails because chloride is not a meaningful base."
  },
  {
    id: "8-4-4",
    question: "A buffer can also be prepared by",
    options: [
      "adding salt to water",
      "mixing a weak acid with limited strong base",
      "mixing two different strong acids together in water",
      "diluting a strong base"
    ],
    correctIndex: 1,
    explanation: "Partial neutralization generates the conjugate base in situ. Using excess strong base would destroy the buffer by consuming all the weak acid."
  },
  {
    id: "8-4-5",
    question: "Adding a small amount of strong acid to a buffer causes",
    options: [
      "a small pH drop as base converts to weak acid",
      "no reaction at all",
      "the pH to rise",
      "a very large and sudden drop in the overall pH"
    ],
    correctIndex: 0,
    explanation: "The ratio of base to acid shifts slightly, changing pH only slightly. Exceeding the buffer capacity would produce a large drop."
  },
  {
    id: "8-4-6",
    question: "When a strong acid and a strong base are mixed in exactly equal moles, the resulting solution is",
    options: [
      "a buffer",
      "neutral, with pH 7 at 25 °C",
      "strongly acidic in the solution",
      "strongly basic"
    ],
    correctIndex: 1,
    explanation: "Only water and spectator ions remain. No weak conjugate pair exists, so there is no buffering."
  },
  {
    id: "8-4-7",
    question: "Titrating a weak acid with a strong base produces a buffer region",
    options: [
      "only after the equivalence point has been fully passed",
      "at the equivalence point exactly",
      "before any base is added",
      "between the start and equivalence, with both present"
    ],
    correctIndex: 3,
    explanation: "The flattest part of that region is the half-equivalence point. At the equivalence point only the conjugate base remains."
  },
  {
    id: "8-4-8",
    question: "At the equivalence point of a weak acid-strong base titration, the pH is",
    options: [
      "exactly equal to the pKa value of the weak acid used",
      "exactly 7",
      "greater than 7, since the conjugate base hydrolyzes",
      "less than 7"
    ],
    correctIndex: 2,
    explanation: "The solution contains only the conjugate base and spectator ions. The pH equals the pKa at the half-equivalence point, not at equivalence."
  },
  {
    id: "8-4-9",
    question: "Blood is buffered primarily by",
    options: [
      "the H₂CO₃/HCO₃⁻ system",
      "the NaOH/Na⁺ buffer system",
      "pure water",
      "the HCl/Cl⁻ system"
    ],
    correctIndex: 0,
    explanation: "This carbonate system holds blood pH near 7.4. Respiration regulates CO₂ and therefore the acid component."
  },
  {
    id: "8-4-10",
    question: "Diluting a buffer with water",
    options: [
      "destroys the buffer capacity almost instantly entirely",
      "always raises the pH",
      "changes the pH dramatically",
      "changes the pH very little, since the ratio holds"
    ],
    correctIndex: 3,
    explanation: "The Henderson-Hasselbalch equation depends on the ratio, not absolute concentrations. Excessive dilution does reduce buffer capacity."
  }
];
