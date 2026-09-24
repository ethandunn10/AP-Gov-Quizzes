// AP Chemistry — Unit 6 (Thermochemistry)
// Registered in quizzes-chem/index.js as "chem-topic-6-6".
// Topic 6.6 — Introduction to Enthalpy of Reaction

window.QUIZ_QUESTIONS = [
  {
    id: "6-6-1",
    question: "Enthalpy change ΔH for a reaction at constant pressure equals",
    options: [
      "the work done by the system",
      "the energy transferred as heat",
      "the activation energy",
      "the change in temperature"
    ],
    correctIndex: 1,
    explanation: "At constant pressure, q equals ΔH by definition. This is why open calorimeters measure enthalpy directly."
  },
  {
    id: "6-6-2",
    question: "For the reaction 2H₂ + O₂ → 2H₂O with ΔH = −572 kJ, the enthalpy change when 1 mol of H₂O forms is",
    options: [
      "−572 kJ",
      "−286 kJ",
      "−1144 kJ",
      "+286 kJ"
    ],
    correctIndex: 1,
    explanation: "The tabulated value corresponds to 2 mol of water, so halve it. Enthalpy scales with the amount of reaction."
  },
  {
    id: "6-6-3",
    question: "If a reaction is reversed, its ΔH",
    options: [
      "remains the same",
      "changes sign but keeps the same magnitude",
      "doubles",
      "becomes zero"
    ],
    correctIndex: 1,
    explanation: "Enthalpy is a state function, so the path back costs what the forward path released. This property underlies Hess's law."
  },
  {
    id: "6-6-4",
    question: "Enthalpy is called a state function because it",
    options: [
      "depends on the path taken",
      "depends only on the initial and final states",
      "changes with time",
      "cannot be measured"
    ],
    correctIndex: 1,
    explanation: "Any route from the same reactants to the same products gives the same ΔH. This lets chemists combine known reactions to find unknown ones."
  },
  {
    id: "6-6-5",
    question: "For an exothermic reaction, ΔH is",
    options: [
      "positive",
      "negative",
      "zero",
      "equal to the activation energy"
    ],
    correctIndex: 1,
    explanation: "The system loses energy, so its enthalpy decreases. The surroundings warm correspondingly."
  },
  {
    id: "6-6-6",
    question: "Burning 0.500 mol of a fuel releases 445 kJ. The molar enthalpy of combustion is",
    options: [
      "−445 kJ/mol",
      "−890 kJ/mol",
      "−223 kJ/mol",
      "+890 kJ/mol"
    ],
    correctIndex: 1,
    explanation: "445 ÷ 0.500 = 890 kJ per mole, negative because energy is released. This matches methane's combustion enthalpy."
  },
  {
    id: "6-6-7",
    question: "Multiplying a thermochemical equation by 3 changes ΔH by a factor of",
    options: [
      "1",
      "3",
      "1/3",
      "9"
    ],
    correctIndex: 1,
    explanation: "Three times the reaction releases or absorbs three times the energy. Enthalpy is an extensive quantity."
  },
  {
    id: "6-6-8",
    question: "The standard state of an element is defined as",
    options: [
      "its gaseous form at any temperature",
      "its most stable form at 1 bar and a specified temperature, usually 298 K",
      "its liquid form",
      "its ionic form in solution"
    ],
    correctIndex: 1,
    explanation: "This is why O₂(g) and C(graphite) are the reference forms. Standard enthalpies of formation for elements in their standard states are zero."
  },
  {
    id: "6-6-9",
    question: "A thermochemical equation must include",
    options: [
      "physical states of all species, since ΔH depends on them",
      "the catalyst used",
      "the reaction rate",
      "the activation energy"
    ],
    correctIndex: 0,
    explanation: "Forming liquid water releases more energy than forming water vapor. Omitting states makes the value ambiguous."
  },
  {
    id: "6-6-10",
    question: "ΔH for a reaction is best described as",
    options: [
      "the energy needed to start the reaction",
      "the net energy difference between products and reactants under constant pressure",
      "the speed of the reaction",
      "the amount of catalyst required"
    ],
    correctIndex: 1,
    explanation: "Activation energy is what starts a reaction and is a separate quantity. A reaction can have a large Ea and a small ΔH, or vice versa."
  }
];
