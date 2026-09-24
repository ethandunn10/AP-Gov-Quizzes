// AP Chemistry — Unit 5 (Kinetics)
// Registered in quizzes-chem/index.js as "chem-topic-5-3".
// Topic 5.3 — Concentration Changes Over Time

window.QUIZ_QUESTIONS = [
  {
    id: "5-3-1",
    question: "A plot of ln[A] versus time gives a straight line. The reaction is",
    options: [
      "zero order",
      "first order",
      "second order",
      "third order"
    ],
    correctIndex: 1,
    explanation: "The integrated first-order law ln[A] = −kt + ln[A]₀ is linear in ln[A]. A linear plot of [A] itself would indicate zero order."
  },
  {
    id: "5-3-2",
    question: "For a second-order reaction, which plot is linear?",
    options: [
      "[A] versus time",
      "ln[A] versus time",
      "1/[A] versus time",
      "[A]² versus time"
    ],
    correctIndex: 2,
    explanation: "The integrated law is 1/[A] = kt + 1/[A]₀. Testing all three plots is the standard way to determine order from concentration-time data."
  },
  {
    id: "5-3-3",
    question: "The half-life of a first-order reaction",
    options: [
      "depends on the initial concentration",
      "is constant, equal to 0.693/k",
      "increases as the reaction proceeds",
      "equals 1/k[A]₀"
    ],
    correctIndex: 1,
    explanation: "Constant half-life is the signature of first-order kinetics, as in radioactive decay. Second-order half-lives lengthen as concentration falls."
  },
  {
    id: "5-3-4",
    question: "A first-order reaction has a half-life of 30. s. After 90. s, the fraction of reactant remaining is",
    options: [
      "1/2",
      "1/4",
      "1/8",
      "1/3"
    ],
    correctIndex: 2,
    explanation: "Ninety seconds is three half-lives, so (1/2)³ = 1/8 remains. Dividing time by half-life gives the number of halvings."
  },
  {
    id: "5-3-5",
    question: "For a first-order reaction with k = 0.0231 s⁻¹, the half-life is approximately",
    options: [
      "15.0 s",
      "30.0 s",
      "60.0 s",
      "0.0231 s"
    ],
    correctIndex: 1,
    explanation: "t½ = 0.693/0.0231 = 30.0 s. Half-life and rate constant are inversely related for first-order kinetics."
  },
  {
    id: "5-3-6",
    question: "In the integrated rate law for a zero-order reaction, [A] versus time gives a line whose slope is",
    options: [
      "k",
      "−k",
      "1/k",
      "ln k"
    ],
    correctIndex: 1,
    explanation: "[A] = −kt + [A]₀, so the line falls with slope −k. Concentration drops at a steady rate regardless of how much remains."
  },
  {
    id: "5-3-7",
    question: "A reaction shows a constant half-life across several successive intervals. This indicates",
    options: [
      "zero order",
      "first order",
      "second order",
      "the order cannot be determined"
    ],
    correctIndex: 1,
    explanation: "Only first-order kinetics gives a half-life independent of concentration. Checking successive half-lives is a quick diagnostic."
  },
  {
    id: "5-3-8",
    question: "For a first-order reaction, if [A]₀ = 0.100 M and k = 0.0100 s⁻¹, then after 100. s the concentration is closest to",
    options: [
      "0.0368 M",
      "0.0500 M",
      "0.0100 M",
      "0.0900 M"
    ],
    correctIndex: 0,
    explanation: "[A] = 0.100e^(−1.00) = 0.100 × 0.368 = 0.0368 M. At t = 1/k, the concentration always falls to 1/e of its initial value."
  },
  {
    id: "5-3-9",
    question: "The slope of a linear ln[A] versus time plot equals",
    options: [
      "k",
      "−k",
      "1/k",
      "2k"
    ],
    correctIndex: 1,
    explanation: "Rearranging the integrated law shows the slope is −k. Reporting a negative rate constant is a sign the negative was not accounted for."
  },
  {
    id: "5-3-10",
    question: "Radioactive decay follows first-order kinetics, which means",
    options: [
      "the decay rate is constant over time",
      "a fixed fraction of the remaining sample decays per unit time",
      "the half-life depends on sample size",
      "decay stops after one half-life"
    ],
    correctIndex: 1,
    explanation: "The absolute rate falls as sample size falls, but the fractional rate stays constant. This is why carbon-14 dating uses a fixed 5730-year half-life."
  }
];
