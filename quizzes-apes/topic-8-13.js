// AP Environmental Science — Unit 8 (Aquatic and Terrestrial Pollution)
// Registered in quizzes-apes/index.js as "apes-topic-8-13".
// Topic 8.13 — Dose Response Curve

window.QUIZ_QUESTIONS = [
  {
    id: "8-13-1",
    question: "A dose response curve plots",
    options: [
      "the concentration of a chemical in the environment",
      "the number of chemicals tested in a single study",
      "the time elapsed since an exposure occurred",
      "the response of a population against dose received"
    ],
    correctIndex: 3,
    explanation: "Dose is plotted on the x axis and response on the y axis. LD50 is read off the curve at the 50 percent response level."
  },
  {
    id: "8-13-2",
    question: "A linear dose response curve with no threshold implies that",
    options: [
      "response decreases as the dose increases",
      "a safe exposure level exists below the threshold",
      "any exposure, however small, carries some risk",
      "the substance is harmless at all tested doses"
    ],
    correctIndex: 2,
    explanation: "Regulators often assume this model for carcinogens and radiation. It is conservative because it assumes no completely safe dose."
  },
  {
    id: "8-13-3",
    question: "A threshold dose response curve indicates that",
    options: [
      "the response is identical at every dose level",
      "effects appear immediately at the smallest dose",
      "no effect occurs until a certain dose is reached",
      "effects decline steadily as dose increases"
    ],
    correctIndex: 2,
    explanation: "Many noncarcinogenic toxins show a threshold below which the body compensates. Nutrients like selenium show this pattern clearly."
  },
  {
    id: "8-13-4",
    question: "A nonmonotonic dose response curve is one in which",
    options: [
      "the response does not change consistently with dose",
      "no response occurs at any tested dose level",
      "the curve forms a perfectly straight diagonal line",
      "response always increases as the dose increases"
    ],
    correctIndex: 0,
    explanation: "Some endocrine disruptors show effects at low doses that vanish at higher ones. This challenges the assumption that testing high doses is protective."
  },
  {
    id: "8-13-5",
    question: "Acute toxicity differs from chronic toxicity in that acute toxicity results from",
    options: [
      "natural substances rather than synthetic ones",
      "repeated low level exposure over many years",
      "a single or short term high level exposure",
      "exposure to multiple chemicals simultaneously"
    ],
    correctIndex: 2,
    explanation: "Acute effects appear quickly and are easier to study. Chronic effects like cancer emerge only after long latency periods."
  },
  {
    id: "8-13-6",
    question: "Hormesis describes a dose response pattern in which",
    options: [
      "high doses produce no measurable biological effect",
      "low doses stimulate while higher doses inhibit",
      "all doses produce identical harmful responses",
      "the substance has no effect at any dose level"
    ],
    correctIndex: 1,
    explanation: "Some essential nutrients and even certain toxins show this biphasic pattern. Whether hormesis should influence regulation is contested."
  },
  {
    id: "8-13-7",
    question: "Epidemiological studies differ from laboratory dose response studies because epidemiology",
    options: [
      "observes health outcomes in real exposed populations",
      "tests chemicals only on laboratory animal species",
      "measures responses in isolated cell cultures",
      "administers controlled doses to volunteer subjects"
    ],
    correctIndex: 0,
    explanation: "Epidemiology captures real-world exposure but cannot control confounding variables. Establishing causation from correlation is the persistent challenge."
  },
  {
    id: "8-13-8",
    question: "Synergistic effects between two chemicals occur when their combined effect is",
    options: [
      "completely absent when both are present together",
      "equal to the sum of their individual effects",
      "greater than the sum of their individual effects",
      "less than either chemical would produce alone"
    ],
    correctIndex: 2,
    explanation: "Asbestos exposure combined with smoking multiplies lung cancer risk dramatically. Most testing examines chemicals one at a time, missing these interactions."
  },
  {
    id: "8-13-9",
    question: "Regulatory agencies apply safety factors to dose response data in order to",
    options: [
      "match human limits exactly to animal test results",
      "raise the allowable exposure limit for industry",
      "account for uncertainty and sensitive subpopulations",
      "eliminate the need for any toxicity testing"
    ],
    correctIndex: 2,
    explanation: "Factors of ten are commonly applied for interspecies and intraspecies variation. Children and pregnant women are the usual sensitive groups of concern."
  },
  {
    id: "8-13-10",
    question: "Reading a dose response curve, the point where the curve begins to rise above zero represents the",
    options: [
      "lethal dose for the entire test population",
      "threshold dose at which effects first appear",
      "dose that kills half of the test organisms",
      "maximum dose that can safely be administered"
    ],
    correctIndex: 1,
    explanation: "Below this point no measurable response is detected. The steepness above it indicates how sharply risk rises with additional dose."
  }
];
