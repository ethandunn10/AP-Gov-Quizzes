// quizzes-world/index.js
//
// Master list of every AP World History: Modern lesson. Same shape and same
// role as quizzes-ush/index.js (APUSH), but published under its OWN global --
// window.WORLD_QUIZ_LIST -- so the subjects can all be loaded on the same page
// without clobbering each other. js/subjects.js joins them into
// window.SUBJECTS, which is what unit.js / quiz.js / insights.js actually read.
//
// Lesson ids are prefixed "world-" so they never collide with another
// subject's lesson id (every subject has a "topic-1-1"). The prefix also keeps
// per-lesson progress in localStorage separate between subjects.
//
// Follows the College Board CED effective Fall 2026: 9 units, 71 topics. Note
// Unit 8 carries nine topics in this framework (8.9 Causation in the Age of
// the Cold War) -- older published topic lists show only eight.
//
// Fields:
//   id    - globally unique lesson id, e.g. "world-topic-1-1"
//   file  - data file to load, relative to the site root
//   date  - "YYYY-MM-DD", when the lesson was published (informational only)
//   topic - label shown on the unit and quiz pages

window.WORLD_QUIZ_LIST = [
  // Unit 1
  { id: "world-topic-1-1", file: "quizzes-world/topic-1-1.js", date: "2026-09-23", topic: "Topic 1.1: Developments in East Asia from c. 1200 to c. 1450" },
  { id: "world-topic-1-2", file: "quizzes-world/topic-1-2.js", date: "2026-09-23", topic: "Topic 1.2: Developments in Dar al-Islam from c. 1200 to c. 1450" },
  { id: "world-topic-1-3", file: "quizzes-world/topic-1-3.js", date: "2026-09-23", topic: "Topic 1.3: Developments in South and Southeast Asia from c. 1200 to c. 1450" },
  { id: "world-topic-1-4", file: "quizzes-world/topic-1-4.js", date: "2026-09-23", topic: "Topic 1.4: State Building in the Americas" },
  { id: "world-topic-1-5", file: "quizzes-world/topic-1-5.js", date: "2026-09-23", topic: "Topic 1.5: State Building in Africa" },
  { id: "world-topic-1-6", file: "quizzes-world/topic-1-6.js", date: "2026-09-23", topic: "Topic 1.6: Developments in Europe from c. 1200 to c. 1450" },
  { id: "world-topic-1-7", file: "quizzes-world/topic-1-7.js", date: "2026-09-23", topic: "Topic 1.7: Comparison in the Period from c. 1200 to c. 1450" },

  // Unit 2
  { id: "world-topic-2-1", file: "quizzes-world/topic-2-1.js", date: "2026-09-23", topic: "Topic 2.1: The Silk Roads" },
  { id: "world-topic-2-2", file: "quizzes-world/topic-2-2.js", date: "2026-09-23", topic: "Topic 2.2: The Mongol Empire and the Making of the Modern World" },
  { id: "world-topic-2-3", file: "quizzes-world/topic-2-3.js", date: "2026-09-23", topic: "Topic 2.3: Exchange in the Indian Ocean" },
  { id: "world-topic-2-4", file: "quizzes-world/topic-2-4.js", date: "2026-09-23", topic: "Topic 2.4: Trans-Saharan Trade Routes" },
  { id: "world-topic-2-5", file: "quizzes-world/topic-2-5.js", date: "2026-09-23", topic: "Topic 2.5: Cultural Consequences of Connectivity" },
  { id: "world-topic-2-6", file: "quizzes-world/topic-2-6.js", date: "2026-09-23", topic: "Topic 2.6: Environmental Consequences of Connectivity" },
  { id: "world-topic-2-7", file: "quizzes-world/topic-2-7.js", date: "2026-09-23", topic: "Topic 2.7: Comparison of Economic Exchange" },

  // Unit 3
  { id: "world-topic-3-1", file: "quizzes-world/topic-3-1.js", date: "2026-09-23", topic: "Topic 3.1: Empires Expand" },
  { id: "world-topic-3-2", file: "quizzes-world/topic-3-2.js", date: "2026-09-23", topic: "Topic 3.2: Empires: Administration" },
  { id: "world-topic-3-3", file: "quizzes-world/topic-3-3.js", date: "2026-09-23", topic: "Topic 3.3: Empires: Belief Systems" },
  { id: "world-topic-3-4", file: "quizzes-world/topic-3-4.js", date: "2026-09-23", topic: "Topic 3.4: Comparison in Land-Based Empires" },

  // Unit 4
  { id: "world-topic-4-1", file: "quizzes-world/topic-4-1.js", date: "2026-09-23", topic: "Topic 4.1: Technological Innovations from 1450 to 1750" },
  { id: "world-topic-4-2", file: "quizzes-world/topic-4-2.js", date: "2026-09-23", topic: "Topic 4.2: Exploration: Causes and Events from 1450 to 1750" },
  { id: "world-topic-4-3", file: "quizzes-world/topic-4-3.js", date: "2026-09-23", topic: "Topic 4.3: Columbian Exchange" },
  { id: "world-topic-4-4", file: "quizzes-world/topic-4-4.js", date: "2026-09-23", topic: "Topic 4.4: Maritime Empires Established" },
  { id: "world-topic-4-5", file: "quizzes-world/topic-4-5.js", date: "2026-09-23", topic: "Topic 4.5: Maritime Empires Maintained and Developed" },
  { id: "world-topic-4-6", file: "quizzes-world/topic-4-6.js", date: "2026-09-23", topic: "Topic 4.6: Internal and External Challenges to State Power from 1450 to 1750" },
  { id: "world-topic-4-7", file: "quizzes-world/topic-4-7.js", date: "2026-09-23", topic: "Topic 4.7: Changing Social Hierarchies from 1450 to 1750" },
  { id: "world-topic-4-8", file: "quizzes-world/topic-4-8.js", date: "2026-09-23", topic: "Topic 4.8: Continuity and Change from 1450 to 1750" },

  // Unit 5
  { id: "world-topic-5-1", file: "quizzes-world/topic-5-1.js", date: "2026-09-23", topic: "Topic 5.1: The Enlightenment" },
  { id: "world-topic-5-2", file: "quizzes-world/topic-5-2.js", date: "2026-09-23", topic: "Topic 5.2: Nationalism and Revolutions in the Period from 1750 to 1900" },
  { id: "world-topic-5-3", file: "quizzes-world/topic-5-3.js", date: "2026-09-23", topic: "Topic 5.3: Industrial Revolution Begins" },
  { id: "world-topic-5-4", file: "quizzes-world/topic-5-4.js", date: "2026-09-23", topic: "Topic 5.4: Industrialization Spreads in the Period from 1750 to 1900" },
  { id: "world-topic-5-5", file: "quizzes-world/topic-5-5.js", date: "2026-09-23", topic: "Topic 5.5: Technology of the Industrial Age" },
  { id: "world-topic-5-6", file: "quizzes-world/topic-5-6.js", date: "2026-09-23", topic: "Topic 5.6: Industrialization: Government's Role from 1750 to 1900" },
  { id: "world-topic-5-7", file: "quizzes-world/topic-5-7.js", date: "2026-09-23", topic: "Topic 5.7: Economic Developments and Innovations in the Industrial Age" },
  { id: "world-topic-5-8", file: "quizzes-world/topic-5-8.js", date: "2026-09-23", topic: "Topic 5.8: Reactions to the Industrial Economy from 1750 to 1900" },
  { id: "world-topic-5-9", file: "quizzes-world/topic-5-9.js", date: "2026-09-23", topic: "Topic 5.9: Society and the Industrial Age" },
  { id: "world-topic-5-10", file: "quizzes-world/topic-5-10.js", date: "2026-09-23", topic: "Topic 5.10: Continuity and Change in the Industrial Age" },

  // Unit 6
  { id: "world-topic-6-1", file: "quizzes-world/topic-6-1.js", date: "2026-09-23", topic: "Topic 6.1: Rationales for Imperialism from 1750 to 1900" },
  { id: "world-topic-6-2", file: "quizzes-world/topic-6-2.js", date: "2026-09-23", topic: "Topic 6.2: State Expansion from 1750 to 1900" },
  { id: "world-topic-6-3", file: "quizzes-world/topic-6-3.js", date: "2026-09-23", topic: "Topic 6.3: Indigenous Responses to State Expansion from 1750 to 1900" },
  { id: "world-topic-6-4", file: "quizzes-world/topic-6-4.js", date: "2026-09-23", topic: "Topic 6.4: Global Economic Development from 1750 to 1900" },
  { id: "world-topic-6-5", file: "quizzes-world/topic-6-5.js", date: "2026-09-23", topic: "Topic 6.5: Economic Imperialism from 1750 to 1900" },
  { id: "world-topic-6-6", file: "quizzes-world/topic-6-6.js", date: "2026-09-23", topic: "Topic 6.6: Causes of Migration in an Interconnected World" },
  { id: "world-topic-6-7", file: "quizzes-world/topic-6-7.js", date: "2026-09-23", topic: "Topic 6.7: Effects of Migration" },
  { id: "world-topic-6-8", file: "quizzes-world/topic-6-8.js", date: "2026-09-23", topic: "Topic 6.8: Causation in the Imperial Age" },

  // Unit 7
  { id: "world-topic-7-1", file: "quizzes-world/topic-7-1.js", date: "2026-09-23", topic: "Topic 7.1: Shifting Power After 1900" },
  { id: "world-topic-7-2", file: "quizzes-world/topic-7-2.js", date: "2026-09-23", topic: "Topic 7.2: Causes of World War I" },
  { id: "world-topic-7-3", file: "quizzes-world/topic-7-3.js", date: "2026-09-23", topic: "Topic 7.3: Conducting World War I" },
  { id: "world-topic-7-4", file: "quizzes-world/topic-7-4.js", date: "2026-09-23", topic: "Topic 7.4: Economy in the Interwar Period" },
  { id: "world-topic-7-5", file: "quizzes-world/topic-7-5.js", date: "2026-09-23", topic: "Topic 7.5: Unresolved Tensions After World War I" },
  { id: "world-topic-7-6", file: "quizzes-world/topic-7-6.js", date: "2026-09-23", topic: "Topic 7.6: Causes of World War II" },
  { id: "world-topic-7-7", file: "quizzes-world/topic-7-7.js", date: "2026-09-23", topic: "Topic 7.7: Conducting World War II" },
  { id: "world-topic-7-8", file: "quizzes-world/topic-7-8.js", date: "2026-09-23", topic: "Topic 7.8: Mass Atrocities After 1900" },
  { id: "world-topic-7-9", file: "quizzes-world/topic-7-9.js", date: "2026-09-23", topic: "Topic 7.9: Causation in Global Conflict" },

  // Unit 8
  { id: "world-topic-8-1", file: "quizzes-world/topic-8-1.js", date: "2026-09-23", topic: "Topic 8.1: Setting the Stage for the Cold War and Decolonization" },
  { id: "world-topic-8-2", file: "quizzes-world/topic-8-2.js", date: "2026-09-23", topic: "Topic 8.2: The Cold War" },
  { id: "world-topic-8-3", file: "quizzes-world/topic-8-3.js", date: "2026-09-23", topic: "Topic 8.3: Effects of the Cold War" },
  { id: "world-topic-8-4", file: "quizzes-world/topic-8-4.js", date: "2026-09-23", topic: "Topic 8.4: Spread of Communism After 1900" },
  { id: "world-topic-8-5", file: "quizzes-world/topic-8-5.js", date: "2026-09-23", topic: "Topic 8.5: Decolonization After 1900" },
  { id: "world-topic-8-6", file: "quizzes-world/topic-8-6.js", date: "2026-09-23", topic: "Topic 8.6: Newly Independent States" },
  { id: "world-topic-8-7", file: "quizzes-world/topic-8-7.js", date: "2026-09-23", topic: "Topic 8.7: Global Resistance to Established Power Structures After 1900" },
  { id: "world-topic-8-8", file: "quizzes-world/topic-8-8.js", date: "2026-09-23", topic: "Topic 8.8: End of the Cold War" },
  { id: "world-topic-8-9", file: "quizzes-world/topic-8-9.js", date: "2026-09-23", topic: "Topic 8.9: Causation in the Age of the Cold War" },

  // Unit 9
  { id: "world-topic-9-1", file: "quizzes-world/topic-9-1.js", date: "2026-09-23", topic: "Topic 9.1: Advances in Technology and Exchange After 1900" },
  { id: "world-topic-9-2", file: "quizzes-world/topic-9-2.js", date: "2026-09-23", topic: "Topic 9.2: Technological Advances and Limitations After 1900: Disease" },
  { id: "world-topic-9-3", file: "quizzes-world/topic-9-3.js", date: "2026-09-23", topic: "Topic 9.3: Technological Advances: Debates About the Environment After 1900" },
  { id: "world-topic-9-4", file: "quizzes-world/topic-9-4.js", date: "2026-09-23", topic: "Topic 9.4: Economics in the Global Age" },
  { id: "world-topic-9-5", file: "quizzes-world/topic-9-5.js", date: "2026-09-23", topic: "Topic 9.5: Calls for Reform and Responses After 1900" },
  { id: "world-topic-9-6", file: "quizzes-world/topic-9-6.js", date: "2026-09-23", topic: "Topic 9.6: Globalized Culture After 1900" },
  { id: "world-topic-9-7", file: "quizzes-world/topic-9-7.js", date: "2026-09-23", topic: "Topic 9.7: Resistance to Globalization After 1900" },
  { id: "world-topic-9-8", file: "quizzes-world/topic-9-8.js", date: "2026-09-23", topic: "Topic 9.8: Institutions Developing in a Globalized World" },
  { id: "world-topic-9-9", file: "quizzes-world/topic-9-9.js", date: "2026-09-23", topic: "Topic 9.9: Continuity and Change in a Globalized World" },

];
