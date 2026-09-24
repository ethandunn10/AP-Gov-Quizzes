// AP Chemistry — Unit 7 (Equilibrium)
// Registered in quizzes-chem/index.js as "chem-topic-7-6".
// Topic 7.6 — Properties of the Equilibrium Constant

window.QUIZ_QUESTIONS = [
  {
    id: "7-6-1",
    question: "If a reaction is reversed, its equilibrium constant becomes",
    options: [
      "−K",
      "1/K",
      "K²",
      "unchanged"
    ],
    correctIndex: 1,
    explanation: "Products and reactants swap positions in the expression. Compare with ΔH, which changes sign rather than inverting."
  },
  {
    id: "7-6-2",
    question: "If all coefficients of a reaction are halved, the new equilibrium constant is",
    options: [
      "K/2",
      "K^(1/2)",
      "2K",
      "K²"
    ],
    correctIndex: 1,
    explanation: "Exponents in the expression are halved, which is equivalent to taking the square root. Scaling K is exponential, not multiplicative."
  },
  {
    id: "7-6-3",
    question: "When two reactions are added, their equilibrium constants are",
    options: [
      "added",
      "multiplied",
      "subtracted",
      "divided"
    ],
    correctIndex: 1,
    explanation: "This parallels Hess's law but with multiplication instead of addition. It follows from the logarithmic relationship between K and free energy."
  },
  {
    id: "7-6-4",
    question: "Given A ⇌ B with K₁ = 4 and B ⇌ C with K₂ = 5, the constant for A ⇌ C is",
    options: [
      "9",
      "20",
      "0.8",
      "1.25"
    ],
    correctIndex: 1,
    explanation: "4 × 5 = 20 for the summed reaction. Adding the constants instead is a frequent error."
  },
  {
    id: "7-6-5",
    question: "The only factor that changes the value of K for a given reaction is",
    options: [
      "concentration",
      "temperature",
      "pressure",
      "catalyst"
    ],
    correctIndex: 1,
    explanation: "Pressure and concentration changes shift the position of equilibrium without altering K. A catalyst changes neither."
  },
  {
    id: "7-6-6",
    question: "For an exothermic reaction, increasing the temperature causes K to",
    options: [
      "increase",
      "decrease",
      "stay the same",
      "become negative"
    ],
    correctIndex: 1,
    explanation: "Heat behaves like a product, so adding it shifts the system back toward reactants. For an endothermic reaction the opposite holds."
  },
  {
    id: "7-6-7",
    question: "If a reaction is multiplied by 3, its equilibrium constant becomes",
    options: [
      "3K",
      "K³",
      "K/3",
      "K^(1/3)"
    ],
    correctIndex: 1,
    explanation: "Each exponent triples, cubing the whole expression. Small differences in the factor lead to enormous differences in K."
  },
  {
    id: "7-6-8",
    question: "Kp and Kc are equal when",
    options: [
      "the reaction involves only solids",
      "the number of moles of gas is the same on both sides",
      "the temperature is 273 K",
      "they are never equal"
    ],
    correctIndex: 1,
    explanation: "With Δn = 0, the (RT)^Δn factor equals 1. H₂ + I₂ ⇌ 2HI is a standard example."
  },
  {
    id: "7-6-9",
    question: "The equilibrium constant expression for a reaction does NOT include",
    options: [
      "aqueous species",
      "gases",
      "pure solids and pure liquids",
      "products"
    ],
    correctIndex: 2,
    explanation: "Their concentrations are fixed properties of the pure substance. Adding more solid therefore does not shift equilibrium."
  },
  {
    id: "7-6-10",
    question: "Two reactions are related by reversing and doubling. If the original K is 2, the new constant is",
    options: [
      "4",
      "0.25",
      "0.5",
      "1"
    ],
    correctIndex: 1,
    explanation: "Reversing gives 1/2, and doubling squares it to 1/4. Order of operations does not matter here since both are exponent manipulations."
  }
];
