// quizzes/week-3.js
// Topics 1.7-1.9 (AMSCO AP US Government & Politics, 2026 ed.):
//   1.7 Relationship Between the State and Federal Governments
//   1.8 Constitutional Interpretations of Federalism (McCulloch v. Maryland,
//       United States v. Lopez -- required SCOTUS cases)
//   1.9 Federalism in Action
// Registered in quizzes/index.js as "week-3".
//
// Same format as week-1.js: id / question / options (4) / correctIndex (0-3) / explanation.

window.QUIZ_QUESTIONS = [
  {
    id: "week-3-q1",
    question: "The 10th Amendment establishes that:",
    options: [
      "The federal government has unlimited power",
      "Powers not given to the federal government are reserved for the states or the people",
      "States cannot pass their own laws",
      "Only Congress can amend the Constitution",
    ],
    correctIndex: 1,
    explanation:
      "The 10th Amendment reserves any power not explicitly given to the federal government (and not prohibited to the states) to the states or the people -- the constitutional basis for states' reserved powers.",
  },
  {
    id: "week-3-q2",
    question: "The \"Necessary and Proper Clause\" (elastic clause) gives Congress the power to:",
    options: [
      "Only the powers explicitly listed in Article I",
      "Pass laws needed to carry out its enumerated powers, even if not explicitly listed",
      "Override any Supreme Court ruling",
      "Remove the president without impeachment",
    ],
    correctIndex: 1,
    explanation:
      "The elastic clause lets Congress pass laws that are \"necessary and proper\" for executing its enumerated powers -- the basis for Congress's implied powers, beyond what's explicitly spelled out.",
  },
  {
    id: "week-3-q3",
    question: "The Supremacy Clause establishes that:",
    options: [
      "The president is supreme over Congress",
      "Federal law, when constitutional, overrides conflicting state law",
      "State constitutions override the U.S. Constitution",
      "The Senate is more powerful than the House",
    ],
    correctIndex: 1,
    explanation:
      "The Supremacy Clause (Article VI) makes the Constitution and federal laws made under it \"the supreme Law of the Land,\" meaning valid federal law wins when it conflicts with state law.",
  },
  {
    id: "week-3-q4",
    question: "In McCulloch v. Maryland (1819), the Supreme Court ruled that:",
    options: [
      "Congress could not create a national bank",
      "Congress had implied power to create a national bank, and Maryland could not tax it",
      "States have full authority to tax any federal institution",
      "The national bank was unconstitutional",
    ],
    correctIndex: 1,
    explanation:
      "McCulloch v. Maryland upheld Congress's implied power (via the Necessary and Proper Clause) to create a national bank, and ruled Maryland could not tax it, since \"the power to tax involves the power to destroy\" and states can't interfere with legitimate federal action.",
  },
  {
    id: "week-3-q5",
    question: "McCulloch v. Maryland is significant because it established:",
    options: [
      "Judicial review",
      "Broad federal implied powers and federal supremacy over conflicting state action",
      "The right to a speedy trial",
      "Congress's power to regulate elections",
    ],
    correctIndex: 1,
    explanation:
      "The case is a foundational precedent for expansive federal power -- confirming Congress isn't limited only to its explicitly enumerated powers, and that legitimate federal law/institutions are supreme over conflicting state attempts to interfere.",
  },
  {
    id: "week-3-q6",
    question: "In United States v. Lopez (1995), the Supreme Court struck down the Gun-Free School Zones Act because:",
    options: [
      "It violated the 2nd Amendment",
      "Carrying a gun near a school was not substantially related to interstate commerce",
      "Only state governments can regulate schools",
      "Congress never actually passed the law",
    ],
    correctIndex: 1,
    explanation:
      "The Court ruled that possessing a gun near a school is not an economic activity that substantially affects interstate commerce, so Congress had overstepped the Commerce Clause -- a limit on the federal government's implied powers.",
  },
  {
    id: "week-3-q7",
    question: "United States v. Lopez is often cited as an example of the Supreme Court:",
    options: [
      "Expanding federal power with no limits",
      "Placing a limit on Congress's Commerce Clause power, reinforcing states' reserved powers",
      "Abolishing the Commerce Clause entirely",
      "Giving the president new emergency powers",
    ],
    correctIndex: 1,
    explanation:
      "Unlike McCulloch (which expanded federal power), Lopez shows the Court limiting federal power under the Commerce Clause, reinforcing that some areas (like local school safety) remain within states' reserved powers.",
  },
  {
    id: "week-3-q8",
    question: "A \"categorical grant\" from the federal government to states is best described as:",
    options: [
      "Money given with no restrictions on how it's spent",
      "Money given for a specific, narrowly defined purpose",
      "A loan states must repay",
      "Power transferred permanently to the states",
    ],
    correctIndex: 1,
    explanation:
      "Categorical grants come with specific strings attached -- states must use the money for a particular narrow purpose Congress defines, unlike block grants, which fund a broader policy area with more state discretion.",
  },
  {
    id: "week-3-q9",
    question: "A \"block grant\" differs from a categorical grant in that it:",
    options: [
      "Gives states more flexibility to spend the money within a broader policy area",
      "Can only be used for defense spending",
      "Must be repaid with interest",
      "Is given directly to individual citizens, not states",
    ],
    correctIndex: 0,
    explanation:
      "Block grants fund a broad area (like education or health) but leave states more discretion over exactly how to spend it, compared to the narrow, specific strings attached to categorical grants.",
  },
  {
    id: "week-3-q10",
    question: "\"Devolution\" in the context of federalism refers to:",
    options: [
      "The federal government taking over more state powers",
      "A trend of returning power and authority from the federal government back to the states",
      "A state seceding from the Union",
      "The elimination of the federal court system",
    ],
    correctIndex: 1,
    explanation:
      "Devolution describes policy shifting power back toward the states -- the opposite direction from the general historical trend of federal power expanding.",
  },
  {
    id: "week-3-q11",
    question: "An \"unfunded mandate\" is when the federal government:",
    options: [
      "Gives states money with no rules attached",
      "Requires states to comply with a federal law or program without providing the funding to do it",
      "Bans states from spending federal money",
      "Fully funds every state program automatically",
    ],
    correctIndex: 1,
    explanation:
      "Unfunded mandates require states to carry out a federal requirement but don't provide (enough) money to cover the cost -- a major source of tension between federal and state governments.",
  },
];
