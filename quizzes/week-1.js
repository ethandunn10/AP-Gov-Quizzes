// quizzes/week-1.js
// Topics 1.3-1.4 (AMSCO AP US Government & Politics, 2026 ed.):
//   1.3 Government Power and Individual Rights (Federalist No. 10 vs. Brutus No. 1)
//   1.4 Challenges of the Articles of Confederation
// Registered in quizzes/index.js as "week-1".
//
// This is just an array of question objects. Each one has:
//   question:      the question text
//   options:       exactly 4 answer choices, in any order
//   correctIndex:  the index (0-3) into `options` that is correct
//   explanation:   a short note shown after the student answers
//
// The quiz page shuffles both the question order and each question's
// option order every time it loads, so the order you write them in here
// doesn't matter.

window.QUIZ_QUESTIONS = [
  {
    question: "Federalist No. 10 argues that the causes of faction cannot be removed without:",
    options: ["Destroying liberty itself", "Abolishing the Senate", "Banning political parties", "Increasing state power"],
    correctIndex: 0,
    explanation:
      "Madison argues that since faction stems from human nature and the unequal distribution of property, removing its causes would require destroying liberty itself -- an unacceptable cure worse than the disease.",
  },
  {
    question: "What does Madison identify as the two ways to \"cure\" the effects of faction?",
    options: [
      "Remove the causes, or control the effects",
      "Ban all elections, or hold only local ones",
      "Eliminate Congress, or expand the presidency",
      "Increase taxes, or reduce the military",
    ],
    correctIndex: 0,
    explanation:
      "Madison identifies two methods for curing the mischiefs of faction: removing its causes, or controlling its effects. Since removing the causes is impractical, the Constitution focuses on controlling the effects through a large republic.",
  },
  {
    question: "According to Federalist No. 10, in a small republic, a majority faction is:",
    options: [
      "Impossible to form",
      "Easier to form and harder to prevent from oppressing the minority",
      "Automatically checked by the courts",
      "Only a problem if it controls the presidency",
    ],
    correctIndex: 1,
    explanation:
      "Madison argues that in a small republic, it's easier for a single faction to become a majority and dominate the minority, since there are fewer competing interests to check it.",
  },
  {
    question:
      "Brutus No. 1 argues that a \"free republic\" cannot exist over territory as large as the proposed United States because:",
    options: [
      "There isn't enough money to fund it",
      "Laws and interests would be too different across such a vast, diverse population for genuine representation",
      "The military couldn't defend such a large area",
      "There weren't enough eligible voters",
    ],
    correctIndex: 1,
    explanation:
      "Brutus argued that in a country as large and diverse as the proposed United States, laws and interests would vary too much for representatives to genuinely understand and represent their constituents.",
  },
  {
    question: "Which of these is a direct point of disagreement between Federalist No. 10 and Brutus No. 1?",
    options: [
      "Whether Congress should exist at all",
      "Whether a large republic helps or harms the protection of liberty",
      "Whether states should be allowed to have governors",
      "Whether elections should be held at all",
    ],
    correctIndex: 1,
    explanation:
      "Federalist No. 10 argues a large, diverse republic protects liberty by diluting factions, while Brutus No. 1 argues a large republic endangers liberty because it can't adequately represent such a diverse population -- a direct disagreement over the effect of size on liberty.",
  },
  {
    question: "In Federalist No. 10, representation is valuable because it can:",
    options: [
      "Refine and filter public views through chosen citizens rather than acting on raw popular passion",
      "Eliminate the need for any elections",
      "Guarantee every faction gets a proportional share of power",
      "Replace the need for a judiciary",
    ],
    correctIndex: 0,
    explanation:
      "Madison argues that passing public views through a body of elected representatives can refine and enlarge them, producing wiser, more moderate policy than direct, unfiltered popular rule.",
  },
  {
    question: "Brutus No. 1's concerns are most closely associated with which broader political position at the time of ratification?",
    options: ["Federalist", "Anti-Federalist", "Federalist and Anti-Federalist equally", "Neither -- Brutus supported the Articles unchanged"],
    correctIndex: 1,
    explanation:
      "Brutus No. 1 was written under a pseudonym by an Anti-Federalist, part of a series of essays opposing ratification of the Constitution over concerns about excessive central power.",
  },
  {
    question: "Federalist No. 10's argument that a large republic dilutes faction depends on the idea that:",
    options: [
      "A bigger population automatically agrees more often",
      "A greater variety of interests makes it harder for one group to become a tyrannical majority",
      "Large republics don't need elected representatives",
      "Only large republics can have a military",
    ],
    correctIndex: 1,
    explanation:
      "Madison's logic is that a greater number and variety of interests and parties in a large republic makes it less likely that any single faction can grow into an oppressive majority.",
  },
  {
    question: "Which of the following is a criticism Brutus No. 1 raises about representatives elected from very large districts?",
    options: [
      "They would be too easy to remove from office",
      "They would lack sufficient understanding of, and connection to, the people they represent",
      "They would automatically be corrupt",
      "They would only serve one-year terms",
    ],
    correctIndex: 1,
    explanation:
      "Brutus argued that representatives elected from large, diverse districts couldn't possibly know the circumstances and interests of all their constituents well enough to represent them faithfully.",
  },
  {
    question: "The core tension explored across Topic 1.3 (government power vs. individual rights) is best described as:",
    options: [
      "Whether government should exist at all",
      "How much power a central government needs, versus how much is safe without threatening liberty",
      "Whether states should be abolished",
      "Whether elections should be annual or every four years",
    ],
    correctIndex: 1,
    explanation:
      "Topic 1.3 centers on the ongoing debate over how much power a central government should hold in order to function effectively, without that power becoming a threat to individual liberty.",
  },
  {
    question: "Under the Articles of Confederation, if a state simply refused to pay Congress's requested funds, what could Congress do?",
    options: [
      "Send federal troops to collect it",
      "Sue the state in federal court",
      "Nothing -- Congress had no enforcement power to compel payment",
      "Automatically remove the state's representatives",
    ],
    correctIndex: 2,
    explanation:
      "Congress under the Articles could only request funds from the states (requisitions) and had no power to compel payment or enforce compliance.",
  },
  {
    question: "Which of these accurately describes the executive branch under the Articles of Confederation?",
    options: ["A single president with veto power", "A committee of state governors", "There was no executive branch at all", "A rotating monarchy"],
    correctIndex: 2,
    explanation:
      "The Articles of Confederation created no separate executive branch; Congress itself handled both legislative and limited executive functions.",
  },
  {
    question: "Why was interstate commerce a problem under the Articles of Confederation?",
    options: [
      "Congress overregulated trade between states",
      "States taxed and regulated trade with each other inconsistently, with no national authority to unify it",
      "All trade was banned between states",
      "Only foreign trade was allowed",
    ],
    correctIndex: 1,
    explanation:
      "Without a national power to regulate commerce, states set their own tariffs and trade rules, creating inconsistent and often conflicting regulations that hampered interstate trade.",
  },
  {
    question: "What direct effect did multiple, differently-valued state currencies have under the Articles of Confederation?",
    options: [
      "It made interstate trade and pricing chaotic and unpredictable",
      "It had no real effect on the economy",
      "It strengthened the national bank",
      "It stabilized prices nationwide",
    ],
    correctIndex: 0,
    explanation:
      "Each state issuing its own currency, worth a different amount, made pricing and trade between states confusing and unstable, since there was no single national currency.",
  },
  {
    question: "Shays' Rebellion most directly demonstrated:",
    options: [
      "That the national government could quickly deploy an army when needed",
      "That the national government had no standing military to respond to internal unrest",
      "That state militias were illegal under the Articles",
      "That the Articles allowed for easy amendment",
    ],
    correctIndex: 1,
    explanation:
      "Shays' Rebellion (1786-87) revealed that the national government under the Articles had no standing army and had to rely on state militias to eventually put down the uprising, exposing its weakness.",
  },
  {
    question: "Amending the Articles of Confederation required:",
    options: ["A simple majority of states", "Approval from Congress only", "Unanimous consent from all thirteen states", "A national referendum"],
    correctIndex: 2,
    explanation: "Amending the Articles required unanimous consent from all thirteen states, making any reform nearly impossible to achieve.",
  },
  {
    question: "Without a national judiciary under the Articles of Confederation, disputes between states were:",
    options: [
      "Automatically sent to the British courts",
      "Resolved inconsistently, with no unified national interpretation of law",
      "Handled by the president",
      "Illegal to bring at all",
    ],
    correctIndex: 1,
    explanation: "The Articles created no national court system, so disputes between states lacked a consistent, authoritative forum for resolution.",
  },
  {
    question: "Which best describes the relationship between the Articles' weaknesses and the Constitutional Convention?",
    options: [
      "The Convention was called to slightly revise the Articles' currency rules only",
      "The Articles' structural failures directly motivated delegates to replace it with an entirely new constitution",
      "The Convention had no connection to the Articles at all",
      "The Articles were working fine and the Convention was unrelated",
    ],
    correctIndex: 1,
    explanation:
      "The Constitutional Convention of 1787 was convened specifically because the Articles' structural weaknesses (no power to tax, regulate commerce, or enforce laws) had proven unworkable.",
  },
  {
    question:
      "A state under the Articles of Confederation printing its own currency, worth a different amount than its neighbor's, is an example of which specific weakness?",
    options: ["No national judiciary", "No unified national currency", "No executive branch", "No power to tax"],
    correctIndex: 1,
    explanation: "This illustrates the Articles' lack of a single national currency, since states could each print and value their own money independently.",
  },
  {
    question: "Which statement correctly links Topics 1.3 and 1.4?",
    options: [
      "The weak national government under the Articles (1.4) is what led the framers to seek more federal power, which then sparked the 1.3 debate over how much power was safe for liberty",
      "Federalist No. 10 was written to defend the Articles of Confederation as-is",
      "Brutus No. 1 argued the Articles needed more central power, not less",
      "Topics 1.3 and 1.4 cover entirely unrelated historical periods",
    ],
    correctIndex: 0,
    explanation:
      "The weaknesses of the Articles of Confederation (1.4) directly motivated the framers to create a stronger national government, which in turn raised the central question of Topic 1.3: how much power that government should have without threatening individual liberty.",
  },
];
