// AP Chemistry — Unit 7 (Equilibrium)
// Registered in quizzes-chem/index.js as "chem-topic-7-9".
// Topic 7.9 — Introduction to Le Chatelier's Principle

window.QUIZ_QUESTIONS = [
  {
    id: "7-9-1",
    question: "Le Chatelier's principle states that a system at equilibrium subjected to a stress will",
    options: [
      "always shift toward the products regardless of stress",
      "stop reacting",
      "remain unchanged",
      "shift in the direction that counteracts the stress"
    ],
    correctIndex: 3,
    explanation: "The shift relieves but never fully undoes the change. This is why the principle predicts direction rather than magnitude."
  },
  {
    id: "7-9-2",
    question: "For N₂ + 3H₂ ⇌ 2NH₃, adding more N₂ causes the equilibrium to",
    options: [
      "remain unchanged",
      "change K",
      "shift toward reactants",
      "shift toward products"
    ],
    correctIndex: 3,
    explanation: "The system consumes some added N₂ by shifting right. K is unchanged since temperature did not change."
  },
  {
    id: "7-9-3",
    question: "For a gas-phase reaction, decreasing the container volume shifts the equilibrium toward",
    options: [
      "the side with fewer moles of gas",
      "neither side",
      "the side with the heavier molecules",
      "the side with more moles of gas"
    ],
    correctIndex: 0,
    explanation: "Reducing volume raises pressure, and the system relieves it by reducing particle count. If both sides have equal moles of gas, there is no shift."
  },
  {
    id: "7-9-4",
    question: "Adding an inert gas at constant volume to a gaseous equilibrium",
    options: [
      "does not shift it; partial pressures are unchanged",
      "shifts it toward reactants",
      "changes K",
      "shifts the whole equilibrium over toward the products"
    ],
    correctIndex: 0,
    explanation: "Total pressure rises but each reacting species' partial pressure stays the same. Adding inert gas at constant pressure, which expands the volume, does cause a shift."
  },
  {
    id: "7-9-5",
    question: "For an endothermic reaction, increasing the temperature",
    options: [
      "has no effect",
      "changes only the rate",
      "shifts equilibrium toward products and increases K",
      "shifts it back toward the reactants and decreases K"
    ],
    correctIndex: 2,
    explanation: "Heat acts as a reactant, so adding it drives the forward reaction. Temperature is the only stress that alters K."
  },
  {
    id: "7-9-6",
    question: "Removing a product from a reaction at equilibrium causes the system to",
    options: [
      "stop",
      "increase K",
      "shift back toward the reactants instead",
      "shift toward products to replace it"
    ],
    correctIndex: 3,
    explanation: "Continuously removing product is a common industrial strategy for driving reactions. K stays the same throughout."
  },
  {
    id: "7-9-7",
    question: "Adding a catalyst to a system at equilibrium",
    options: [
      "increases K",
      "decreases K",
      "shifts equilibrium toward products",
      "does not shift the equilibrium"
    ],
    correctIndex: 3,
    explanation: "Forward and reverse rates increase equally. The system merely reaches the same equilibrium faster."
  },
  {
    id: "7-9-8",
    question: "For the equilibrium CaCO₃(s) ⇌ CaO(s) + CO₂(g), adding more CaCO₃(s)",
    options: [
      "has no effect, since solids are not in the expression",
      "shifts it toward reactants",
      "increases the CO₂ pressure",
      "shifts the whole equilibrium over toward the products"
    ],
    correctIndex: 0,
    explanation: "The activity of a pure solid is constant regardless of quantity. Only the CO₂ pressure appears in K."
  },
  {
    id: "7-9-9",
    question: "For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), increasing the pressure by compression shifts equilibrium",
    options: [
      "not at all",
      "in a direction that cannot be predicted",
      "left, toward 3 moles of gas",
      "right, toward 2 moles of gas"
    ],
    correctIndex: 3,
    explanation: "Three moles of gas become two, relieving the pressure increase. Counting moles of gas on each side is the key step."
  },
  {
    id: "7-9-10",
    question: "Which stress changes the value of K rather than merely shifting the position of equilibrium?",
    options: [
      "Changing temperature",
      "Changing volume",
      "Adding a suitable catalyst",
      "Adding reactant"
    ],
    correctIndex: 0,
    explanation: "All other stresses leave K fixed while concentrations adjust. Recognizing this distinction is central to the topic."
  }
];
