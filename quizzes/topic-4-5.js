// quizzes/topic-4-5.js
// Topic 4.5: Measuring Public Opinion
// Registered in quizzes/index.js as "topic-4-5".

window.QUIZ_QUESTIONS = [
  {
    id: "topic-4-5-q1",
    question: "A random sample in public opinion polling refers to:",
    options: [
      "A sample drawn only from registered members of a single political party",
      "Any group of people surveyed at all, regardless of the specific selection method used",
      "A sample where every member has an equal chance of selection",
      "A sample drawn only from the pollster's own personal friends and family",
    ],
    correctIndex: 2,
    explanation: "Random sampling, where every individual in the population has an equal chance of selection, is the statistical foundation that allows a smaller sample to reliably represent a much larger population.",
  },
  {
    id: "topic-4-5-q2",
    question: "The margin of error in a poll indicates:",
    options: [
      "The total number of individual questions included in the survey",
      "The range within which the true population value likely falls",
      "The total number of people who flatly refused to answer any question",
      "The exact, precise percentage of the population that agrees with a statement",
    ],
    correctIndex: 1,
    explanation: "Margin of error reflects the statistical uncertainty inherent in surveying a sample rather than the entire population -- a poll showing 52% with a +/-3% margin means the true value is likely between 49% and 55%.",
  },
  {
    id: "topic-4-5-q3",
    question: "A larger, properly randomized sample size generally results in:",
    options: [
      "A smaller margin of error, making results more precise",
      "A larger, less precise margin of error than a smaller sample would produce",
      "Absolutely no change in accuracy whatsoever compared to a smaller sample",
      "An automatically and inevitably biased result regardless of methodology",
    ],
    correctIndex: 0,
    explanation: "All else equal, larger random samples reduce sampling error, producing a smaller (more precise) margin of error -- though sample size alone doesn't fix problems like a non-random sample.",
  },
  {
    id: "topic-4-5-q4",
    question: "A push poll is best described as:",
    options: [
      "A scientifically rigorous and completely unbiased method of survey research",
      "A specific type of exit poll conducted only immediately after voting",
      "A poll that is conducted exclusively and only through online platforms",
      "A poll disguised as research to spread negative information",
    ],
    correctIndex: 3,
    explanation: "Push polls use leading or biased questions under the guise of a survey to influence respondents' opinions -- typically spreading negative information about a candidate -- rather than genuinely measuring public opinion.",
  },
  {
    id: "topic-4-5-q5",
    question: "Question wording in a poll can significantly affect results because:",
    options: [
      "Only the order of the answer choices matters, and never the wording itself",
      "Wording only ever matters in exit polls, and in no other type of poll",
      "Subtle phrasing differences can lead to different answers",
      "Question wording never has any measurable effect on any poll's outcome",
    ],
    correctIndex: 2,
    explanation: "Well-documented research shows that even small wording changes -- like using 'estate tax' versus 'death tax' -- can shift survey responses significantly, making careful, neutral question design essential to valid polling.",
  },
  {
    id: "topic-4-5-q6",
    question: "A poll with a non-random or unrepresentative sample -- for example, only surveying people at a political rally -- suffers from:",
    options: [
      "No statistical concerns of any kind whatsoever, by strict definition",
      "Sampling bias, which makes the results unreliable",
      "A perfectly valid, fully generalizable measurement of the entire population",
      "An unusually and suspiciously small margin of error for its sample size",
    ],
    correctIndex: 1,
    explanation: "A sample drawn from a non-representative group (like rally attendees) will likely reflect that group's specific views rather than the broader population's, introducing sampling bias that undermines the poll's validity.",
  },
  {
    id: "topic-4-5-q7",
    question: "Response bias in polling can occur when:",
    options: [
      "Every single respondent answers each and every question with perfect honesty",
      "The overall sample size used in the poll is simply far too large",
      "All polls, by definition, are conducted only over the telephone",
      "Respondents don't answer truthfully on sensitive questions",
    ],
    correctIndex: 3,
    explanation: "Response bias occurs when respondents give inaccurate answers -- often due to social pressure to give a 'socially acceptable' answer rather than their true opinion -- which can skew poll results away from actual public sentiment.",
  },
  {
    id: "topic-4-5-q8",
    question: "Which of the following polling methods faces particular challenges with representativeness because certain demographic groups are less likely to participate?",
    options: [
      "A carefully weighted, methodologically rigorous national survey",
      "Exit polls conducted at a genuinely random sample of polling locations",
      "Online opt-in polls, where respondents self-select",
      "A properly conducted, truly random-digit-dial telephone poll",
    ],
    correctIndex: 2,
    explanation: "Opt-in online polls rely on self-selection rather than random sampling, which can skew results toward whichever demographic groups are more likely to seek out and complete the survey voluntarily.",
  },
  {
    id: "topic-4-5-q9",
    question: "A poll asks: \"Do you support the reckless plan to raise taxes on hardworking families?\" This question is problematic because it:",
    options: [
      "Draws on a sample size that is simply far too large for the survey's purpose",
      "Was conducted using a properly randomized, textbook sampling method",
      "Uses loaded, leading language pushing a particular answer",
      "Is a perfectly neutral, carefully and rigorously well-designed survey question",
    ],
    correctIndex: 2,
    explanation: "Words like 'reckless' and 'hardworking families' are loaded and leading, steering respondents toward opposing the policy rather than neutrally assessing their genuine opinion -- a classic example of poor, biased question wording.",
  },
  {
    id: "topic-4-5-q10",
    question: "Why is understanding polling methodology important for interpreting news coverage of political polls?",
    options: [
      "Because polls are always exactly 100% accurate no matter what method is used",
      "Because flawed sampling or biased wording can produce misleading, inaccurate results",
      "Because all polls are conducted completely identically with no methodological differences",
      "Because polling methodology has absolutely no effect on the accuracy of any result",
    ],
    correctIndex: 1,
    explanation: "Being able to critically evaluate a poll's methodology -- sample size, randomness, wording, margin of error -- is essential to distinguishing genuinely informative polling from misleading or poorly designed surveys.",
  },
];
