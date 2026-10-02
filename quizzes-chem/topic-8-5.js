// AP Chemistry — Unit 8 (Acids and Bases)
// Registered in quizzes-chem/index.js as "chem-topic-8-5".
// Topic 8.5 — Acid-Base Titrations

window.QUIZ_QUESTIONS = [
  {
    id: "8-5-1",
    question: "On a titration curve for a weak acid with a strong base, the pH at the half-equivalence point equals",
    options: [
      "the pKa of the acid",
      "the pKb of the conjugate base",
      "14",
      "7"
    ],
    correctIndex: 0,
    explanation: "Half the acid has been converted, so [HA] equals [A⁻]. The Henderson-Hasselbalch equation then reduces to pH = pKa."
  },
  {
    id: "8-5-2",
    question: "The equivalence point of a strong acid-strong base titration occurs at pH",
    options: [
      "14",
      "less than 7",
      "7",
      "greater than 7"
    ],
    correctIndex: 2,
    explanation: "Neither spectator ion hydrolyzes. Weak acid titrations give an equivalence point above 7."
  },
  {
    id: "8-5-3",
    question: "Titrating a weak base with a strong acid gives an equivalence point pH that is",
    options: [
      "above 7",
      "below 7, since the conjugate acid hydrolyzes",
      "exactly 7",
      "entirely unpredictable without further information"
    ],
    correctIndex: 1,
    explanation: "The product is the conjugate acid of a weak base, which donates protons. Methyl orange is a suitable indicator for this case."
  },
  {
    id: "8-5-4",
    question: "25.0 mL of 0.100 M NaOH is required to titrate 25.0 mL of a monoprotic acid. The acid concentration is",
    options: [
      "0.0500 M",
      "0.100 M",
      "0.200 M",
      "0.250 M"
    ],
    correctIndex: 1,
    explanation: "Equal volumes and 1:1 stoichiometry mean equal concentrations. This works for both strong and weak monoprotic acids."
  },
  {
    id: "8-5-5",
    question: "The steep portion of a titration curve corresponds to",
    options: [
      "excess titrant",
      "the buffer region",
      "the region near equivalence where pH changes sharply",
      "the very beginning stage of the entire titration process"
    ],
    correctIndex: 2,
    explanation: "The last of the analyte is consumed over a fraction of a drop. Indicator selection targets this region."
  },
  {
    id: "8-5-6",
    question: "A titration curve for a diprotic acid shows",
    options: [
      "one equivalence point",
      "two equivalence points if the Ka values differ",
      "no equivalence point",
      "three distinct equivalence points in every case"
    ],
    correctIndex: 1,
    explanation: "Each proton is removed in turn, giving a separate steep region. Sulfuric acid's two constants are too close to resolve cleanly."
  },
  {
    id: "8-5-7",
    question: "Comparing titration curves for a strong acid and a weak acid of equal concentration with the same base, the weak acid curve",
    options: [
      "starts higher and has a shorter steep region",
      "starts at a considerably lower pH than expected",
      "has no equivalence point",
      "is identical"
    ],
    correctIndex: 0,
    explanation: "Partial ionization means a higher initial pH, and buffering compresses the vertical jump. Both reach an equivalence point, just at different pH values."
  },
  {
    id: "8-5-8",
    question: "Phenolphthalein, which changes color around pH 8-10, is a suitable indicator for",
    options: [
      "a weak base titrated with a strong acid",
      "a weak acid titrated with a strong base",
      "any titration",
      "no titration"
    ],
    correctIndex: 1,
    explanation: "That equivalence point falls in the basic region, matching the indicator's range. A weak base titration would need an indicator that changes in acid."
  },
  {
    id: "8-5-9",
    question: "The endpoint of a titration differs from the equivalence point in that the endpoint is",
    options: [
      "before any titrant is added",
      "the purely theoretical stoichiometric point of the reaction",
      "the observed point where the indicator changes color",
      "always exactly equal"
    ],
    correctIndex: 2,
    explanation: "The small gap between them is called indicator error. A well-chosen indicator keeps that error negligible."
  },
  {
    id: "8-5-10",
    question: "A titration of 20.0 mL of 0.150 M H₂SO₄ requires what volume of 0.300 M NaOH to reach the second equivalence point?",
    options: [
      "10.0 mL",
      "20.0 mL",
      "30.0 mL",
      "40.0 mL"
    ],
    correctIndex: 1,
    explanation: "Moles of acid = 0.00300, requiring 0.00600 mol NaOH, which is 0.0200 L. The diprotic factor of 2 is essential here."
  }
];
