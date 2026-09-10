// quizzes/index.js
//
// This is the master list of every lesson on the site. Each lesson is one
// AP Gov topic (1.1, 1.2, etc.), with its own 10-question quiz. To publish
// a new lesson:
//   1. Create quizzes/topic-X-Y.js with that lesson's questions (copy the
//      format used in the files below).
//   2. Add ONE entry to the QUIZ_LIST array below.
//   3. Reference that id from the relevant unit's `lessons` array in
//      quizzes/units.js.
// That's it -- unit.html, js/quiz.js, and js/recommendations.js all read
// this file, so nothing else needs to change.
//
// Fields:
//   id    - matches the data file name, e.g. "topic-1-1" -> quizzes/topic-1-1.js
//   date  - "YYYY-MM-DD", when the lesson was published (informational only)
//   topic - short human-readable topic name shown to students

window.QUIZ_LIST = [
  { id: "topic-1-1", date: "2026-09-04", topic: "Topic 1.1: Ideals of Democracy" },
  { id: "topic-1-2", date: "2026-09-04", topic: "Topic 1.2: Types of Democracy" },
  { id: "topic-1-3", date: "2026-09-04", topic: "Topic 1.3: Government Power and Individual Rights (Federalist No. 10 vs. Brutus No. 1)" },
  { id: "topic-1-4", date: "2026-09-04", topic: "Topic 1.4: Challenges of the Articles of Confederation" },
  { id: "topic-1-5", date: "2026-09-04", topic: "Topic 1.5: Ratification of the Constitution (Federalist No. 51, 70, 78)" },
  { id: "topic-1-6", date: "2026-09-04", topic: "Topic 1.6: Principles of American Government" },
  { id: "topic-1-7", date: "2026-09-04", topic: "Topic 1.7: Relationship Between States and the Federal Government" },
  { id: "topic-1-8", date: "2026-09-04", topic: "Topic 1.8: Constitutional Interpretations of Federalism (McCulloch v. Maryland)" },
  { id: "topic-1-9", date: "2026-09-04", topic: "Topic 1.9: Federalism in Action (Grants, Mandates, U.S. v. Lopez)" },

  { id: "topic-2-1", date: "2026-09-09", topic: "Topic 2.1: Congress -- The Senate and the House of Representatives" },
  { id: "topic-2-2", date: "2026-09-09", topic: "Topic 2.2: Structures, Powers, and Functions of Congress" },
  { id: "topic-2-3", date: "2026-09-09", topic: "Topic 2.3: Congressional Behavior" },
  { id: "topic-2-4", date: "2026-09-09", topic: "Topic 2.4: Roles and Powers of the President" },
  { id: "topic-2-5", date: "2026-09-09", topic: "Topic 2.5: Checks on the Presidency" },
  { id: "topic-2-6", date: "2026-09-09", topic: "Topic 2.6: Expansion of Presidential Power" },
  { id: "topic-2-7", date: "2026-09-09", topic: "Topic 2.7: Presidential Communication" },
  { id: "topic-2-8", date: "2026-09-09", topic: "Topic 2.8: The Judicial Branch" },
  { id: "topic-2-9", date: "2026-09-09", topic: "Topic 2.9: The Role of the Judicial Branch (Marbury v. Madison, Judicial Review)" },
  { id: "topic-2-10", date: "2026-09-09", topic: "Topic 2.10: The Court in Action" },
  { id: "topic-2-11", date: "2026-09-09", topic: "Topic 2.11: Checks on the Judicial Branch" },
  { id: "topic-2-12", date: "2026-09-09", topic: "Topic 2.12: The Bureaucracy" },
  { id: "topic-2-13", date: "2026-09-09", topic: "Topic 2.13: Discretionary and Rulemaking Authority" },
  { id: "topic-2-14", date: "2026-09-09", topic: "Topic 2.14: Holding the Bureaucracy Accountable" },
  { id: "topic-2-15", date: "2026-09-09", topic: "Topic 2.15: Policy and the Branches of Government" },

  { id: "topic-3-1", date: "2026-09-09", topic: "Topic 3.1: The Bill of Rights" },
  { id: "topic-3-2", date: "2026-09-09", topic: "Topic 3.2: First Amendment -- Freedom of Religion" },
  { id: "topic-3-3", date: "2026-09-09", topic: "Topic 3.3: First Amendment -- Freedom of Speech" },
  { id: "topic-3-4", date: "2026-09-09", topic: "Topic 3.4: First Amendment -- Freedom of the Press" },
  { id: "topic-3-5", date: "2026-09-09", topic: "Topic 3.5: Second Amendment -- Right to Bear Arms" },
  { id: "topic-3-6", date: "2026-09-09", topic: "Topic 3.6: Balancing Individual Freedom with Public Order and Safety" },
  { id: "topic-3-7", date: "2026-09-09", topic: "Topic 3.7: Selective Incorporation" },
  { id: "topic-3-8", date: "2026-09-09", topic: "Topic 3.8: Due Process and the Rights of the Accused" },
  { id: "topic-3-9", date: "2026-09-09", topic: "Topic 3.9: Due Process and the Right to Privacy (Roe v. Wade, Dobbs v. Jackson)" },
  { id: "topic-3-10", date: "2026-09-09", topic: "Topic 3.10: Social Movements and Equal Protection (Brown v. Board)" },
  { id: "topic-3-11", date: "2026-09-09", topic: "Topic 3.11: Government Responses to Social Movements" },
  { id: "topic-3-12", date: "2026-09-09", topic: "Topic 3.12: Balancing Minority and Majority Rights" },
  { id: "topic-3-13", date: "2026-09-09", topic: "Topic 3.13: Affirmative Action" },

  { id: "topic-4-1", date: "2026-09-09", topic: "Topic 4.1: American Attitudes About Government and Politics" },
  { id: "topic-4-2", date: "2026-09-09", topic: "Topic 4.2: Political Socialization" },
  { id: "topic-4-3", date: "2026-09-09", topic: "Topic 4.3: Changes in Ideology" },
  { id: "topic-4-4", date: "2026-09-09", topic: "Topic 4.4: Influence of Political Events on Ideology" },
  { id: "topic-4-5", date: "2026-09-09", topic: "Topic 4.5: Measuring Public Opinion" },
  { id: "topic-4-6", date: "2026-09-09", topic: "Topic 4.6: Evaluating Public Opinion Data" },
  { id: "topic-4-7", date: "2026-09-09", topic: "Topic 4.7: Ideologies of Political Parties" },
  { id: "topic-4-8", date: "2026-09-09", topic: "Topic 4.8: Ideology and Policymaking" },
  { id: "topic-4-9", date: "2026-09-09", topic: "Topic 4.9: Ideology and Economic Policy" },
  { id: "topic-4-10", date: "2026-09-09", topic: "Topic 4.10: Ideology and Social Policy" },

  { id: "topic-5-1", date: "2026-09-09", topic: "Topic 5.1: Voting Rights and Models of Voting Behavior" },
  { id: "topic-5-2", date: "2026-09-09", topic: "Topic 5.2: Voter Turnout" },
  { id: "topic-5-3", date: "2026-09-09", topic: "Topic 5.3: Political Parties" },
  { id: "topic-5-4", date: "2026-09-09", topic: "Topic 5.4: How and Why Political Parties Change and Adapt" },
  { id: "topic-5-5", date: "2026-09-09", topic: "Topic 5.5: Third-Party Politics" },
  { id: "topic-5-6", date: "2026-09-09", topic: "Topic 5.6: Interest Groups Influencing Policymaking" },
  { id: "topic-5-7", date: "2026-09-09", topic: "Topic 5.7: Groups Influencing Policy Outcomes" },
  { id: "topic-5-8", date: "2026-09-09", topic: "Topic 5.8: Electing a President (The Electoral College)" },
  { id: "topic-5-9", date: "2026-09-09", topic: "Topic 5.9: Congressional Elections" },
  { id: "topic-5-10", date: "2026-09-09", topic: "Topic 5.10: Modern Campaigns" },
  { id: "topic-5-11", date: "2026-09-09", topic: "Topic 5.11: Campaign Finance (Citizens United v. FEC)" },
  { id: "topic-5-12", date: "2026-09-09", topic: "Topic 5.12: The Media" },
  { id: "topic-5-13", date: "2026-09-09", topic: "Topic 5.13: Changing Media" },
];
