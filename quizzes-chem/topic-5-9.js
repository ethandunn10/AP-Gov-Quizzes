// AP Chemistry — Unit 5 (Kinetics)
// Registered in quizzes-chem/index.js as "chem-topic-5-9".
// Topic 5.9 — Pre-Equilibrium Approximation

window.QUIZ_QUESTIONS = [
  {
    id: "5-9-1",
    question: "The pre-equilibrium approximation applies when a mechanism has",
    options: [
      "only one step",
      "no intermediates",
      "a slow first step right at the start of the mechanism",
      "a fast reversible first step, then a slower step"
    ],
    correctIndex: 3,
    explanation: "The fast step reaches equilibrium before appreciable product forms. This lets the intermediate's concentration be expressed through K."
  },
  {
    id: "5-9-2",
    question: "In a pre-equilibrium treatment, the concentration of the intermediate is expressed using",
    options: [
      "the equilibrium constant of the fast step and reactants",
      "the overall ΔH",
      "the activation energy",
      "the rate constant of the slow step considered by itself"
    ],
    correctIndex: 0,
    explanation: "Setting forward and reverse rates equal for the fast step yields the relationship. That expression then substitutes into the slow step's rate law."
  },
  {
    id: "5-9-3",
    question: "For (1) A + B ⇌ AB (fast), (2) AB + C → D (slow), the rate law is",
    options: [
      "rate = k[AB][C] only",
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
      "They are catalysts",
      "They do not exist",
      "Their concentrations cannot be controlled directly",
      "They always have a concentration of precisely zero"
    ],
    correctIndex: 2,
    explanation: "An experimentalist can vary reactant concentrations, not fleeting intermediates. A rate law must be testable against those variables."
  },
  {
    id: "5-9-5",
    question: "In the mechanism (1) 2NO ⇌ N₂O₂ (fast), (2) N₂O₂ + O₂ → 2NO₂ (slow), the overall order is",
    options: [
      "first",
      "zero",
      "second",
      "third"
    ],
    correctIndex: 3,
    explanation: "Substituting [N₂O₂] = K[NO]² gives rate = k[NO]²[O₂], which is third order. Orders add: 2 + 1 = 3."
  },
  {
    id: "5-9-6",
    question: "A fractional reaction order such as 1/2 most often arises when",
    options: [
      "a reactant dissociates in a fast pre-equilibrium",
      "the reaction has no real mechanism of any kind at all",
      "temperature is very low",
      "the reaction is zero order"
    ],
    correctIndex: 0,
    explanation: "A dissociation like Cl₂ ⇌ 2Cl makes the intermediate proportional to the square root of the reactant. Elementary steps alone never give fractional orders."
  },
  {
    id: "5-9-7",
    question: "The pre-equilibrium approximation assumes that the reverse of the first step is",
    options: [
      "rate determining",
      "considerably slower than the second step of the mechanism",
      "much faster than the second step, keeping equilibrium",
      "irreversible"
    ],
    correctIndex: 2,
    explanation: "Equilibrium can only be maintained if the intermediate reverts faster than it moves forward. If that fails, a steady-state treatment is needed instead."
  },
  {
    id: "5-9-8",
    question: "In a pre-equilibrium mechanism, increasing the concentration of a product of the fast step will",
    options: [
      "change ΔH",
      "increase the overall reaction rate quite considerably",
      "decrease the rate by shifting equilibrium backward",
      "have no effect"
    ],
    correctIndex: 2,
    explanation: "Less intermediate means a slower rate-determining step. This kind of product inhibition is experimental evidence for the mechanism."
  },
  {
    id: "5-9-9",
    question: "The observed rate constant in a pre-equilibrium mechanism equals",
    options: [
      "k₂ only",
      "the product of the equilibrium constant and k₂",
      "k₁ only",
      "the sum of every rate constant in the mechanism"
    ],
    correctIndex: 1,
    explanation: "Substitution produces k_obs = K·k₂. Its temperature dependence therefore reflects both the equilibrium and the barrier."
  },
  {
    id: "5-9-10",
    question: "Compared with a mechanism with a slow first step, a pre-equilibrium mechanism generally produces a rate law that",
    options: [
      "is always exactly first order overall in every case",
      "contains no reactants at all in it",
      "contains an intermediate species",
      "involves reactants from both the fast and slow steps"
    ],
    correctIndex: 3,
    explanation: "Species consumed in the fast step reappear through the substitution for the intermediate. A slow first step hides later reactants entirely."
  }
];
