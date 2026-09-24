// AP Chemistry — Unit 8 (Acids and Bases)
// Registered in quizzes-chem/index.js as "chem-topic-8-10".
// Topic 8.10 — Buffer Capacity

window.QUIZ_QUESTIONS = [
  {
    id: "8-10-1",
    question: "Buffer capacity is best described as",
    options: [
      "the pH of the buffer",
      "the amount of strong acid or base a buffer can absorb before its pH changes significantly",
      "the volume of the buffer",
      "the pKa of the weak acid"
    ],
    correctIndex: 1,
    explanation: "It is a measure of resilience, not of pH. Two buffers at the same pH can have very different capacities."
  },
  {
    id: "8-10-2",
    question: "Buffer capacity is greatest when",
    options: [
      "the ratio of conjugate base to acid is far from 1",
      "the two components are present in roughly equal and high concentrations",
      "the buffer is very dilute",
      "only one component is present"
    ],
    correctIndex: 1,
    explanation: "Equal amounts let the buffer resist additions in both directions equally. High concentrations extend how much it can absorb."
  },
  {
    id: "8-10-3",
    question: "A 1.0 M acetate buffer compared with a 0.10 M acetate buffer at the same pH has",
    options: [
      "a higher pH",
      "about ten times the capacity",
      "lower capacity",
      "a different pKa"
    ],
    correctIndex: 1,
    explanation: "Capacity scales with the moles of buffering species. pH depends on the ratio, which is identical in both."
  },
  {
    id: "8-10-4",
    question: "Adding a large excess of strong acid to a buffer results in",
    options: [
      "no pH change",
      "exhaustion of the conjugate base and a sharp pH drop",
      "an increase in pH",
      "an increase in buffer capacity"
    ],
    correctIndex: 1,
    explanation: "Once the base component is consumed, nothing neutralizes further additions. The solution then behaves like a solution of strong acid."
  },
  {
    id: "8-10-5",
    question: "The useful buffering range of a weak acid buffer is approximately",
    options: [
      "pKa ± 1 pH unit",
      "pH 0 to 14",
      "pKa ± 5 pH units",
      "only exactly at the pKa"
    ],
    correctIndex: 0,
    explanation: "Within this range the ratio stays between about 1:10 and 10:1. Outside it, one component becomes too scarce to be effective."
  },
  {
    id: "8-10-6",
    question: "Which buffer has the greatest capacity to neutralize added acid?",
    options: [
      "0.10 M HA with 0.010 M A⁻",
      "0.10 M HA with 0.10 M A⁻",
      "0.010 M HA with 0.010 M A⁻",
      "0.10 M HA alone"
    ],
    correctIndex: 1,
    explanation: "Neutralizing added acid consumes A⁻, so the most A⁻ gives the most capacity in that direction. The last option is not a buffer at all."
  },
  {
    id: "8-10-7",
    question: "Blood maintains a narrow pH range partly because its buffer system",
    options: [
      "has very low capacity",
      "is continuously regulated, with CO₂ removed by the lungs and bicarbonate by the kidneys",
      "contains a strong acid",
      "has a pKa of 14"
    ],
    correctIndex: 1,
    explanation: "Physiological regulation replenishes both components as they are used. A closed buffer would eventually exhaust itself."
  },
  {
    id: "8-10-8",
    question: "A buffer with pH 5.0 made from an acid with pKa 3.0 would be",
    options: [
      "highly effective",
      "a poor buffer, since the ratio is 100:1 and the acid component is nearly depleted",
      "unable to have that pH",
      "the best choice for pH 5.0"
    ],
    correctIndex: 1,
    explanation: "It could neutralize added base but barely any added acid. Choosing a pKa near the target pH avoids this imbalance."
  },
  {
    id: "8-10-9",
    question: "Which change increases a buffer's capacity without changing its pH?",
    options: [
      "Diluting it with water",
      "Increasing the concentrations of both components proportionally",
      "Adding strong acid",
      "Adding strong base"
    ],
    correctIndex: 1,
    explanation: "Scaling both keeps the ratio and thus the pH constant. Adding strong acid or base changes the ratio and therefore the pH."
  },
  {
    id: "8-10-10",
    question: "A titration curve's buffer region is flattest",
    options: [
      "at the equivalence point",
      "near the half-equivalence point, where buffer capacity is greatest",
      "at the start of the titration",
      "after the equivalence point"
    ],
    correctIndex: 1,
    explanation: "Equal amounts of acid and conjugate base resist change most effectively there. The curve is steepest at the equivalence point, where buffering is gone."
  }
];
