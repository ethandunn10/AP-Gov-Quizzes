// AP Chemistry — Unit 5 (Kinetics)
// Registered in quizzes-chem/index.js as "chem-topic-5-1".
// Topic 5.1 — Reaction Rates

window.QUIZ_QUESTIONS = [
  {
    id: "5-1-1",
    question: "For the reaction 2N₂O₅ → 4NO₂ + O₂, the rate of formation of NO₂ compared with the rate of disappearance of N₂O₅ is",
    options: [
      "equal",
      "twice as fast",
      "half as fast",
      "four times as fast"
    ],
    correctIndex: 1,
    explanation: "Rates relate through the coefficients: 4 NO₂ form for every 2 N₂O₅ consumed. Dividing each rate by its coefficient gives one common reaction rate."
  },
  {
    id: "5-1-2",
    question: "The average rate of a reaction over an interval is calculated as",
    options: [
      "the change in concentration divided by the change in time",
      "the concentration at the end of the interval",
      "the slope of the tangent at a single point",
      "the total amount of product formed"
    ],
    correctIndex: 0,
    explanation: "A tangent slope gives the instantaneous rate instead. Average rates over long intervals can hide substantial changes in speed."
  },
  {
    id: "5-1-3",
    question: "Why does the rate of most reactions decrease as the reaction proceeds?",
    options: [
      "The temperature drops",
      "Reactant concentrations fall, so collisions become less frequent",
      "The activation energy increases",
      "Products are destroyed"
    ],
    correctIndex: 1,
    explanation: "Fewer reactant particles per volume means fewer effective collisions per second. Zero-order reactions are the exception, since their rate is concentration independent."
  },
  {
    id: "5-1-4",
    question: "Which method would be suitable for monitoring the rate of a reaction that produces a gas?",
    options: [
      "Measuring the volume of gas collected over time",
      "Measuring the color of the solid reactant",
      "Weighing the container before the reaction only",
      "Measuring the melting point"
    ],
    correctIndex: 0,
    explanation: "Gas volume or the mass lost by the vessel both track extent of reaction over time. A single initial measurement gives no rate information."
  },
  {
    id: "5-1-5",
    question: "For A → B, [A] falls from 0.500 M to 0.400 M in 20.0 s. The average rate of disappearance of A is",
    options: [
      "0.00500 M/s",
      "0.0200 M/s",
      "0.100 M/s",
      "5.00 M/s"
    ],
    correctIndex: 0,
    explanation: "0.100 M ÷ 20.0 s = 0.00500 M/s. Rates are reported as positive numbers even though the reactant concentration decreases."
  },
  {
    id: "5-1-6",
    question: "The instantaneous rate at time zero is called the",
    options: [
      "average rate",
      "initial rate",
      "equilibrium rate",
      "final rate"
    ],
    correctIndex: 1,
    explanation: "Initial rates are preferred experimentally because no appreciable product has built up to complicate matters. The method of initial rates uses them to find reaction order."
  },
  {
    id: "5-1-7",
    question: "Which factor does NOT generally affect the rate of a reaction?",
    options: [
      "Temperature",
      "Concentration of reactants",
      "The overall enthalpy change of the reaction",
      "Presence of a catalyst"
    ],
    correctIndex: 2,
    explanation: "Thermodynamics tells you whether a reaction is favorable, not how fast it goes. Diamond converting to graphite is favorable yet immeasurably slow."
  },
  {
    id: "5-1-8",
    question: "Increasing the surface area of a solid reactant increases the rate because",
    options: [
      "the activation energy is lowered",
      "more reactant particles are exposed and available for collisions",
      "the temperature rises",
      "the reaction becomes exothermic"
    ],
    correctIndex: 1,
    explanation: "Reaction occurs only at the solid's surface, so subdividing it exposes more sites. Powdered materials can react explosively for this reason."
  },
  {
    id: "5-1-9",
    question: "On a graph of [reactant] versus time, the reaction rate at any moment is given by",
    options: [
      "the y-intercept",
      "the magnitude of the slope of the tangent at that point",
      "the area under the curve",
      "the x-intercept"
    ],
    correctIndex: 1,
    explanation: "A steeper tangent means a faster reaction. The curve flattens over time as the reaction slows."
  },
  {
    id: "5-1-10",
    question: "For the reaction N₂ + 3H₂ → 2NH₃, if H₂ disappears at 0.030 M/s, NH₃ forms at",
    options: [
      "0.010 M/s",
      "0.020 M/s",
      "0.030 M/s",
      "0.090 M/s"
    ],
    correctIndex: 1,
    explanation: "The H₂ to NH₃ ratio is 3:2, so 0.030 × (2/3) = 0.020 M/s. Inverting the ratio gives 0.045 M/s, which is not among the options but is the usual error."
  }
];
