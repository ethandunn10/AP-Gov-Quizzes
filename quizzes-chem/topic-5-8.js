// AP Chemistry — Unit 5 (Kinetics)
// Registered in quizzes-chem/index.js as "chem-topic-5-8".
// Topic 5.8 — Reaction Mechanism and Rate Law

window.QUIZ_QUESTIONS = [
  {
    id: "5-8-1",
    question: "When the first step of a mechanism is rate determining, the rate law is written",
    options: [
      "from the overall equation",
      "directly from the stoichiometry of that first elementary step",
      "from the last step",
      "from the sum of all steps"
    ],
    correctIndex: 1,
    explanation: "Elementary steps allow coefficients to be read as exponents. No substitution for intermediates is needed in this case."
  },
  {
    id: "5-8-2",
    question: "Mechanism: (1) A ⇌ B (fast equilibrium), (2) B + C → D (slow). The rate law in terms of measurable species is",
    options: [
      "rate = k[B][C]",
      "rate = k[A][C]",
      "rate = k[A]",
      "rate = k[C]"
    ],
    correctIndex: 1,
    explanation: "The slow step gives rate = k₂[B][C], and the fast equilibrium makes [B] proportional to [A]. Substituting removes the intermediate."
  },
  {
    id: "5-8-3",
    question: "For the mechanism (1) 2NO ⇌ N₂O₂ (fast), (2) N₂O₂ + H₂ → N₂O + H₂O (slow), the predicted rate law is",
    options: [
      "rate = k[NO][H₂]",
      "rate = k[NO]²[H₂]",
      "rate = k[N₂O₂][H₂]",
      "rate = k[H₂]"
    ],
    correctIndex: 1,
    explanation: "[N₂O₂] is proportional to [NO]² from the fast equilibrium, and substituting gives second order in NO. The experimental rate law for this reaction matches."
  },
  {
    id: "5-8-4",
    question: "An experimental rate law of rate = k[A]²[B] for the reaction 2A + B → products is consistent with",
    options: [
      "a mechanism whose rate-determining step involves two A and one B, directly or through a preceding equilibrium",
      "only a mechanism with a fast first step",
      "no possible mechanism",
      "a zero-order process"
    ],
    correctIndex: 0,
    explanation: "Matching orders can arise from a single termolecular step or from a fast equilibrium feeding a slow step. Kinetics alone cannot distinguish them."
  },
  {
    id: "5-8-5",
    question: "If the rate law contains a reactant that appears only in a step after the rate-determining step, that reactant's order is",
    options: [
      "equal to its coefficient",
      "zero, since it does not affect the rate",
      "always one",
      "always two"
    ],
    correctIndex: 1,
    explanation: "Anything after the bottleneck cannot speed up the overall process. This is why some reactants are absent from the rate law."
  },
  {
    id: "5-8-6",
    question: "The overall rate constant k in a substituted rate law is",
    options: [
      "always equal to the rate constant of the slow step",
      "a combination of rate constants from the slow step and any preceding equilibria",
      "independent of temperature",
      "equal to the equilibrium constant"
    ],
    correctIndex: 1,
    explanation: "Substituting a pre-equilibrium expression folds K into the observed constant. Its temperature dependence therefore reflects several processes."
  },
  {
    id: "5-8-7",
    question: "A proposed mechanism predicts rate = k[A][B] but experiment shows rate = k[A]². The correct conclusion is that",
    options: [
      "the experiment was done incorrectly",
      "the proposed mechanism is inconsistent with the data and must be revised",
      "the mechanism is valid at other temperatures",
      "both rate laws are correct"
    ],
    correctIndex: 1,
    explanation: "Consistency with the measured rate law is a requirement, not an option. Revising usually means reconsidering which step is slow."
  },
  {
    id: "5-8-8",
    question: "In the mechanism (1) Cl₂ ⇌ 2Cl (fast), (2) Cl + CHCl₃ → HCl + CCl₃ (slow), the rate law's dependence on [Cl₂] is",
    options: [
      "first order",
      "one-half order",
      "second order",
      "zero order"
    ],
    correctIndex: 1,
    explanation: "[Cl] is proportional to [Cl₂]^(1/2) from the equilibrium of the dissociation. Fractional orders are a strong hint of a dissociative pre-equilibrium."
  },
  {
    id: "5-8-9",
    question: "Which observation would most strongly suggest a multistep mechanism?",
    options: [
      "The rate law exponents match the balanced equation coefficients",
      "The rate law exponents differ from the coefficients, or a fractional order appears",
      "The reaction is exothermic",
      "The reaction is fast"
    ],
    correctIndex: 1,
    explanation: "A single elementary step would reproduce the coefficients exactly. Fractional and zero orders cannot arise from a single step."
  },
  {
    id: "5-8-10",
    question: "For a mechanism with a fast equilibrium followed by a slow step, adding more of a product of the fast step would",
    options: [
      "have no effect",
      "shift the equilibrium back and slow the overall reaction",
      "always speed up the reaction",
      "change the activation energy"
    ],
    correctIndex: 1,
    explanation: "Le Chatelier's principle applies to the pre-equilibrium, reducing the intermediate's concentration. Observing such inhibition supports the proposed mechanism."
  }
];
