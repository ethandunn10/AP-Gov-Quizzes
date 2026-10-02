// quizzes/topic-5-8.js
// Topic 5.8: Electing a President
// Registered in quizzes/index.js as "topic-5-8".

window.QUIZ_QUESTIONS = [
  {
    id: "topic-5-8-q1",
    question: "The President of the United States is formally elected by:",
    options: [
      "A direct vote taken by Congress itself",
      "A vote cast collectively by all of the fifty state governors",
      "The Electoral College, not a direct national popular vote",
      "A direct national popular vote counted alone",
    ],
    correctIndex: 2,
    explanation: "The Constitution establishes the Electoral College as the formal mechanism for electing the President -- voters in each state technically vote for a slate of electors, not the candidate directly.",
  },
  {
    id: "topic-5-8-q2",
    question: "How many total electoral votes are there, and how many are needed to win the presidency?",
    options: ["100 total, 51 to win", "50 total, 26 to win", "435 total, 218 to win", "538 total, 270 to win"],
    correctIndex: 3,
    explanation: "There are 538 total electoral votes (equal to the total members of Congress, 435 House + 100 Senate, plus 3 for D.C.), and a candidate needs a majority, 270, to win.",
  },
  {
    id: "topic-5-8-q3",
    question: "Most states award their electoral votes using which system?",
    options: [
      "A random lottery drawing held among certified electors",
      "Direct appointment of electors by the sitting governor",
      "Winner-take-all -- the statewide popular vote winner gets all electoral votes",
      "Proportional allocation matching the statewide popular vote percentages exactly",
    ],
    correctIndex: 2,
    explanation: "Except for Maine and Nebraska (which allocate some votes by congressional district), all other states use a winner-take-all system for awarding their electoral votes.",
  },
  {
    id: "topic-5-8-q4",
    question: "It is possible for a candidate to win the presidency while losing the national popular vote because:",
    options: [
      "It is state-based, so 270 can be reached without the most votes",
      "This exact scenario has never actually happened in U.S. history",
      "The national popular vote is never counted in presidential elections",
      "Only certified, registered electors are legally allowed to vote",
    ],
    correctIndex: 0,
    explanation: "Because the Electoral College aggregates state-level winner-take-all results rather than a single national count, a candidate can win the Electoral College while losing the nationwide popular vote -- this has happened multiple times in U.S. history, including in 2000 and 2016.",
  },
  {
    id: "topic-5-8-q5",
    question: "Presidential primaries and caucuses are used by parties to:",
    options: [
      "Formally confirm the President's Cabinet nominees",
      "Ratify international treaties on behalf of the Senate",
      "Select delegates who nominate the party's candidate",
      "Directly elect the President without any intermediate delegates",
    ],
    correctIndex: 2,
    explanation: "Primaries and caucuses are the process by which each party's voters select delegates pledged to support specific candidates, who then formally nominate the party's candidate at the national convention.",
  },
  {
    id: "topic-5-8-q6",
    question: "Because presidential elections are decided state-by-state, campaigns tend to focus disproportionate attention and resources on:",
    options: [
      "Only states with the smallest total populations",
      "Only the candidate's own home state district",
      "\"Swing states\" where the outcome isn't decided",
      "States that always vote reliably for the same party",
    ],
    correctIndex: 2,
    explanation: "Because winning a state's electoral votes is winner-take-all, campaigns concentrate their time, ads, and resources on competitive 'swing states' rather than states seen as safely favoring one party.",
  },
  {
    id: "topic-5-8-q7",
    question: "A \"faithless elector\" is a member of the Electoral College who:",
    options: [
      "Refuses to cast any vote at all in the Electoral College",
      "Is legally required to switch their vote every single election",
      "Formally represents a foreign country's interests",
      "Votes against the candidate they were pledged to support",
    ],
    correctIndex: 3,
    explanation: "A faithless elector breaks from their pledge to vote for the candidate who won their state, though such instances are rare and many states now have laws penalizing or preventing faithless votes.",
  },
  {
    id: "topic-5-8-q8",
    question: "Critics of the Electoral College often argue that it:",
    options: [
      "Gives every single voter in every state exactly equal influence",
      "Can produce a result that doesn't match the popular vote",
      "Perfectly reflects the national popular vote every single time",
      "Has absolutely no effect on how campaigns are ever run",
    ],
    correctIndex: 1,
    explanation: "Common criticisms include that it can diverge from the popular vote, and that (due to the +2 Senate-based electors every state gets regardless of population) individual voters in smaller states have somewhat more electoral weight per capita than voters in larger states.",
  },
  {
    id: "topic-5-8-q9",
    question: "Supporters of the Electoral College often argue that it:",
    options: [
      "Requires candidates to build geographically broad coalitions",
      "Guarantees the national popular vote winner always wins",
      "Is far easier to change than a constitutional amendment",
      "Eliminates the need for any real campaign strategy whatsoever",
    ],
    correctIndex: 0,
    explanation: "Defenders argue the Electoral College forces candidates to build support across a variety of states and regions rather than campaigning only in the highest-population urban areas, which they argue promotes broader national coalition-building.",
  },
  {
    id: "topic-5-8-q10",
    question: "Changing or abolishing the Electoral College would most likely require:",
    options: [
      "A simple majority vote in both chambers of Congress",
      "A single executive order signed by the President",
      "A Supreme Court ruling with no further action needed at all",
      "A constitutional amendment, given its basis in Article II",
    ],
    correctIndex: 3,
    explanation: "Because the Electoral College is established directly in the Constitution (Article II and the 12th Amendment), formally abolishing or restructuring it would require the difficult constitutional amendment process, not just ordinary legislation.",
  },
];
