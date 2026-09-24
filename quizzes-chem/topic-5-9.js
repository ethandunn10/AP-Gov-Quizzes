// AP Chemistry — Unit 5 (Kinetics)
// Registered in quizzes-chem/index.js as "chem-topic-5-9".
// Topic 5.9 — Pre-Equilibrium Approximation

window.QUIZ_QUESTIONS = [
  {
    id: "5-9-1",
    question: "The pre-equilibrium approximation applies when a mechanism has",
    options: [
      "a slow first step",
      "a fast, reversible first step followed by a slower step",
      "only one step",
      "no intermediates"
    ],
    correctIndex: 1,
    explanation: "The fast step reaches equilibrium before appreciable product forms. This lets the intermediate's concentration be expressed through K."
  },
  {
    id: "5-9-2",
    question: "In a pre-equilibrium treatment, the concentration of the intermediate is expressed using",
    options: [
      "the rate constant of the slow step",
      "the equilibrium constant of the fast reversible step and reactant concentrations",
      "the overall ΔH",
      "the activation energy"
    ],
    correctIndex: 1,
    explanation: "Setting forward and reverse rates equal for the fast step yields the relationship. That expression then substitutes into the slow step's rate law."
  },
  {
    id: "5-9-3",
    question: "For (1) A + B ⇌ AB (fast), (2) AB + C → D (slow), the rate law is",
    options: [
      "rate = k[AB][C]",
      "rate = k[A][B][C]",
      "rate = k[A][B]",
      "rate = k[C]"
    ],
    correctIndex: 1,
    explanation: "Substituting [AB] = K[A][B] into rate = k₂[AB][C] gives a third-order overall rate law. The intermediate is eliminated as required."
  },
  {
    id: "5-9-4",
    question: "Why must intermediates be removed from a final rate law?",
    options: [
      "They do not exist",
      "Their concentrations cannot be independently controlled or easily measured",
      "They have zero concentration",
      "They are catalysts"
    ],
    correctIndex: 1,
    explanation: "An experimentalist can vary reactant concentrations, not fleeting intermediates. A rate law must be testable against those variables."
  },
  {
    id: "5-9-5",
    question: "In the mechanism (1) 2NO ⇌ N₂O₂ (fast), (2) N₂O₂ + O₂ → 2NO₂ (slow), the overall order is",
    options: [
      "second",
      "third",
      "first",
      "zero"
    ],
    correctIndex: 1,
    explanation: "Substituting [N₂O₂] = K[NO]² gives rate = k[NO]²[O₂], which is third order. Orders add: 2 + 1 = 3."
  },
  {
    id: "5-9-6",
    question: "A fractional reaction order such as 1/2 most often arises when",
    options: [
      "the reaction is zero order",
      "a reactant dissociates in a fast pre-equilibrium before the rate-determining step",
      "the reaction has no mechanism",
      "temperature is very low"
    ],
    correctIndex: 1,
    explanation: "A dissociation like Cl₂ ⇌ 2Cl makes the intermediate proportional to the square root of the reactant. Elementary steps alone never give fractional orders."
  },
  {
    id: "5-9-7",
    question: "The pre-equilibrium approximation assumes that the reverse of the first step is",
    options: [
      "slower than the second step",
      "much faster than the second step, so equilibrium is maintained",
      "irreversible",
      "rate determining"
    ],
    correctIndex: 1,
    explanation: "Equilibrium can only be maintained if the intermediate reverts faster than it moves forward. If that fails, a steady-state treatment is needed instead."
  },
  {
    id: "5-9-8",
    question: "In a pre-equilibrium mechanism, increasing the concentration of a product of the fast step will",
    options: [
      "increase the rate",
      "decrease the rate by shifting the equilibrium away from the intermediate",
      "have no effect",
      "change ΔH"
    ],
    correctIndex: 1,
    explanation: "Less intermediate means a slower rate-determining step. This kind of product inhibition is experimental evidence for the mechanism."
  },
  {
    id: "5-9-9",
    question: "The observed rate constant in a pre-equilibrium mechanism equals",
    options: [
      "k₂ only",
      "the product of the equilibrium constant K and the slow step's rate constant",
      "k₁ only",
      "the sum of all rate constants"
    ],
    correctIndex: 1,
    explanation: "Substitution produces k_obs = K·k₂. Its temperature dependence therefore reflects both the equilibrium and the barrier."
  },
  {
    id: "5-9-10",
    question: "Compared with a mechanism with a slow first step, a pre-equilibrium mechanism generally produces a rate law that",
    options: [
      "contains an intermediate",
      "involves reactants from both the fast and slow steps",
      "is always first order",
      "contains no reactants"
    ],
    correctIndex: 1,
    explanation: "Species consumed in the fast step reappear through the substitution for the intermediate. A slow first step hides later reactants entirely."
  }
];
