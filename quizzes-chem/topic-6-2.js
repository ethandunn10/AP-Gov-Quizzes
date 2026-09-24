// AP Chemistry — Unit 6 (Thermochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-6-2".
// Topic 6.2 — Energy Diagrams

window.QUIZ_QUESTIONS = [
  {
    id: "6-2-1",
    question: "On an energy diagram, ΔH is represented by",
    options: [
      "the height of the activation barrier",
      "the vertical difference between reactant and product energy levels",
      "the width of the curve",
      "the position of the transition state"
    ],
    correctIndex: 1,
    explanation: "Only the endpoints determine ΔH because enthalpy is a state function. The barrier height governs rate instead."
  },
  {
    id: "6-2-2",
    question: "A reaction diagram shows reactants at 50 kJ, the transition state at 150 kJ, and products at 20 kJ. The activation energy is",
    options: [
      "30 kJ",
      "100 kJ",
      "130 kJ",
      "170 kJ"
    ],
    correctIndex: 1,
    explanation: "Ea = 150 − 50 = 100 kJ, measured from reactants to the peak. The overall ΔH is 20 − 50 = −30 kJ."
  },
  {
    id: "6-2-3",
    question: "For the diagram in the previous question, the reaction is",
    options: [
      "endothermic with ΔH = +30 kJ",
      "exothermic with ΔH = −30 kJ",
      "exothermic with ΔH = −100 kJ",
      "endothermic with ΔH = +130 kJ"
    ],
    correctIndex: 1,
    explanation: "Products sit below reactants, so energy is released. Activation energy does not enter into ΔH."
  },
  {
    id: "6-2-4",
    question: "Which change to an energy diagram represents adding a catalyst?",
    options: [
      "Lowering the product energy",
      "Lowering the peak height while leaving reactants and products unchanged",
      "Raising the reactant energy",
      "Removing the transition state entirely"
    ],
    correctIndex: 1,
    explanation: "A catalyst offers a lower-energy route between the same endpoints. Lowering the products would change ΔH, which a catalyst cannot do."
  },
  {
    id: "6-2-5",
    question: "A phase-change heating curve differs from a reaction energy diagram in that its horizontal axis represents",
    options: [
      "reaction progress",
      "heat added or time, with plateaus at phase transitions",
      "activation energy",
      "concentration"
    ],
    correctIndex: 1,
    explanation: "Flat regions on a heating curve show energy going into potential rather than kinetic energy. A reaction diagram tracks progress along a single transformation instead."
  },
  {
    id: "6-2-6",
    question: "On a heating curve for water, the longest plateau corresponds to",
    options: [
      "melting, because fusion requires the most energy",
      "boiling, because vaporization requires the most energy",
      "heating the solid",
      "heating the gas"
    ],
    correctIndex: 1,
    explanation: "Water's heat of vaporization is roughly seven times its heat of fusion. Vaporization must fully separate the hydrogen-bonded molecules."
  },
  {
    id: "6-2-7",
    question: "On a heating curve, the sloped regions represent",
    options: [
      "phase changes",
      "increases in temperature as kinetic energy rises within a single phase",
      "constant temperature",
      "chemical reactions"
    ],
    correctIndex: 1,
    explanation: "Within one phase, added energy raises the average kinetic energy. The slope depends on the specific heat capacity of that phase."
  },
  {
    id: "6-2-8",
    question: "Two reactions have the same ΔH but different Ea. Their energy diagrams differ in",
    options: [
      "the relative heights of reactants and products",
      "the height of the peak only",
      "the identity of the products",
      "nothing"
    ],
    correctIndex: 1,
    explanation: "Identical ΔH fixes the endpoints, so only the barrier can differ. This visually separates thermodynamics from kinetics."
  },
  {
    id: "6-2-9",
    question: "If a reaction's reverse activation energy is smaller than its forward activation energy, the reaction is",
    options: [
      "exothermic",
      "endothermic",
      "thermoneutral",
      "catalyzed"
    ],
    correctIndex: 1,
    explanation: "A smaller reverse barrier means products lie above reactants. ΔH = Ea(forward) − Ea(reverse) is positive in that case."
  },
  {
    id: "6-2-10",
    question: "A diagram shows a small hump, a shallow valley, and then a larger hump before the products. This indicates",
    options: [
      "a single-step reaction",
      "a two-step mechanism with an intermediate, the second step rate determining",
      "a catalyzed reaction only",
      "an impossible reaction"
    ],
    correctIndex: 1,
    explanation: "Two peaks mean two elementary steps and the valley is the intermediate. The taller barrier controls the overall rate."
  }
];
