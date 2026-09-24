// quizzes-euro/index.js
//
// Master list of every AP European History lesson. Same shape and same role as
// quizzes-ush/index.js (APUSH), but published under its OWN global --
// window.EURO_QUIZ_LIST -- so the subjects can all be loaded on the same page
// without clobbering each other. js/subjects.js joins them into
// window.SUBJECTS, which is what unit.js / quiz.js / insights.js actually read.
//
// Lesson ids are prefixed "euro-" so they never collide with another subject's
// lesson id. The prefix also keeps per-lesson progress in localStorage separate.
//
// Follows the College Board CED: 9 units, 88 topics.
//
// Fields:
//   id    - globally unique lesson id, e.g. "euro-topic-1-1"
//   file  - data file to load, relative to the site root
//   date  - "YYYY-MM-DD", when the lesson was published (informational only)
//   topic - label shown on the unit and quiz pages

window.EURO_QUIZ_LIST = [
  // Unit 1
  { id: "euro-topic-1-1", file: "quizzes-euro/topic-1-1.js", date: "2026-09-23", topic: "Topic 1.1: Contextualizing Renaissance and Discovery" },
  { id: "euro-topic-1-2", file: "quizzes-euro/topic-1-2.js", date: "2026-09-23", topic: "Topic 1.2: Italian Renaissance" },
  { id: "euro-topic-1-3", file: "quizzes-euro/topic-1-3.js", date: "2026-09-23", topic: "Topic 1.3: Northern Renaissance" },
  { id: "euro-topic-1-4", file: "quizzes-euro/topic-1-4.js", date: "2026-09-23", topic: "Topic 1.4: Printing" },
  { id: "euro-topic-1-5", file: "quizzes-euro/topic-1-5.js", date: "2026-09-23", topic: "Topic 1.5: New Monarchies" },
  { id: "euro-topic-1-6", file: "quizzes-euro/topic-1-6.js", date: "2026-09-23", topic: "Topic 1.6: Technological Advances and the Age of Exploration" },
  { id: "euro-topic-1-7", file: "quizzes-euro/topic-1-7.js", date: "2026-09-23", topic: "Topic 1.7: Rivals on the World Stage" },
  { id: "euro-topic-1-8", file: "quizzes-euro/topic-1-8.js", date: "2026-09-23", topic: "Topic 1.8: Colonial Expansion and Columbian Exchange" },
  { id: "euro-topic-1-9", file: "quizzes-euro/topic-1-9.js", date: "2026-09-23", topic: "Topic 1.9: The Slave Trade" },
  { id: "euro-topic-1-10", file: "quizzes-euro/topic-1-10.js", date: "2026-09-23", topic: "Topic 1.10: The Commercial Revolution" },
  { id: "euro-topic-1-11", file: "quizzes-euro/topic-1-11.js", date: "2026-09-23", topic: "Topic 1.11: Causation in the Renaissance and Age of Discovery" },

  // Unit 2
  { id: "euro-topic-2-1", file: "quizzes-euro/topic-2-1.js", date: "2026-09-23", topic: "Topic 2.1: Contextualizing 16th- and 17th-Century Challenges and Developments" },
  { id: "euro-topic-2-2", file: "quizzes-euro/topic-2-2.js", date: "2026-09-23", topic: "Topic 2.2: Luther and the Protestant Reformation" },
  { id: "euro-topic-2-3", file: "quizzes-euro/topic-2-3.js", date: "2026-09-23", topic: "Topic 2.3: Protestant Reform Continues" },
  { id: "euro-topic-2-4", file: "quizzes-euro/topic-2-4.js", date: "2026-09-23", topic: "Topic 2.4: Wars of Religion" },
  { id: "euro-topic-2-5", file: "quizzes-euro/topic-2-5.js", date: "2026-09-23", topic: "Topic 2.5: The Catholic Reformation" },
  { id: "euro-topic-2-6", file: "quizzes-euro/topic-2-6.js", date: "2026-09-23", topic: "Topic 2.6: 16th-Century Society and Politics" },
  { id: "euro-topic-2-7", file: "quizzes-euro/topic-2-7.js", date: "2026-09-23", topic: "Topic 2.7: Art of the 16th Century: Mannerism and Baroque Art" },
  { id: "euro-topic-2-8", file: "quizzes-euro/topic-2-8.js", date: "2026-09-23", topic: "Topic 2.8: Causation in the Age of Reformation and the Wars of Religion" },

  // Unit 3
  { id: "euro-topic-3-1", file: "quizzes-euro/topic-3-1.js", date: "2026-09-23", topic: "Topic 3.1: Contextualizing State Building" },
  { id: "euro-topic-3-2", file: "quizzes-euro/topic-3-2.js", date: "2026-09-23", topic: "Topic 3.2: The English Civil War and the Glorious Revolution" },
  { id: "euro-topic-3-3", file: "quizzes-euro/topic-3-3.js", date: "2026-09-23", topic: "Topic 3.3: Continuities and Changes to Economic Practice and Development" },
  { id: "euro-topic-3-4", file: "quizzes-euro/topic-3-4.js", date: "2026-09-23", topic: "Topic 3.4: Economic Development and Mercantilism" },
  { id: "euro-topic-3-5", file: "quizzes-euro/topic-3-5.js", date: "2026-09-23", topic: "Topic 3.5: The Dutch Golden Age" },
  { id: "euro-topic-3-6", file: "quizzes-euro/topic-3-6.js", date: "2026-09-23", topic: "Topic 3.6: Balance of Power" },
  { id: "euro-topic-3-7", file: "quizzes-euro/topic-3-7.js", date: "2026-09-23", topic: "Topic 3.7: Absolutist Approaches to Power" },
  { id: "euro-topic-3-8", file: "quizzes-euro/topic-3-8.js", date: "2026-09-23", topic: "Topic 3.8: Comparison in the Age of Absolutism and Constitutionalism" },

  // Unit 4
  { id: "euro-topic-4-1", file: "quizzes-euro/topic-4-1.js", date: "2026-09-23", topic: "Topic 4.1: Contextualizing the Scientific Revolution and the Enlightenment" },
  { id: "euro-topic-4-2", file: "quizzes-euro/topic-4-2.js", date: "2026-09-23", topic: "Topic 4.2: The Scientific Revolution" },
  { id: "euro-topic-4-3", file: "quizzes-euro/topic-4-3.js", date: "2026-09-23", topic: "Topic 4.3: The Enlightenment" },
  { id: "euro-topic-4-4", file: "quizzes-euro/topic-4-4.js", date: "2026-09-23", topic: "Topic 4.4: 18th-Century Society and Demographics" },
  { id: "euro-topic-4-5", file: "quizzes-euro/topic-4-5.js", date: "2026-09-23", topic: "Topic 4.5: 18th-Century Culture and Arts" },
  { id: "euro-topic-4-6", file: "quizzes-euro/topic-4-6.js", date: "2026-09-23", topic: "Topic 4.6: Enlightened and Other Approaches to Power" },
  { id: "euro-topic-4-7", file: "quizzes-euro/topic-4-7.js", date: "2026-09-23", topic: "Topic 4.7: Causation in the Age of the Scientific Revolution and the Enlightenment" },

  // Unit 5
  { id: "euro-topic-5-1", file: "quizzes-euro/topic-5-1.js", date: "2026-09-23", topic: "Topic 5.1: Contextualizing 18th-Century States" },
  { id: "euro-topic-5-2", file: "quizzes-euro/topic-5-2.js", date: "2026-09-23", topic: "Topic 5.2: The Rise of Global Markets" },
  { id: "euro-topic-5-3", file: "quizzes-euro/topic-5-3.js", date: "2026-09-23", topic: "Topic 5.3: Britain’s Ascendency" },
  { id: "euro-topic-5-4", file: "quizzes-euro/topic-5-4.js", date: "2026-09-23", topic: "Topic 5.4: The French Revolution" },
  { id: "euro-topic-5-5", file: "quizzes-euro/topic-5-5.js", date: "2026-09-23", topic: "Topic 5.5: The French Revolution’s Effects" },
  { id: "euro-topic-5-6", file: "quizzes-euro/topic-5-6.js", date: "2026-09-23", topic: "Topic 5.6: Napoleon’s Rise, Dominance, and Defeat" },
  { id: "euro-topic-5-7", file: "quizzes-euro/topic-5-7.js", date: "2026-09-23", topic: "Topic 5.7: The Congress of Vienna" },
  { id: "euro-topic-5-8", file: "quizzes-euro/topic-5-8.js", date: "2026-09-23", topic: "Topic 5.8: Romanticism" },
  { id: "euro-topic-5-9", file: "quizzes-euro/topic-5-9.js", date: "2026-09-23", topic: "Topic 5.9: Continuity and Change in the Age of the French Revolution" },

  // Unit 6
  { id: "euro-topic-6-1", file: "quizzes-euro/topic-6-1.js", date: "2026-09-23", topic: "Topic 6.1: Contextualizing Industrialization and Its Effects" },
  { id: "euro-topic-6-2", file: "quizzes-euro/topic-6-2.js", date: "2026-09-23", topic: "Topic 6.2: The Spread of Industry Throughout Europe" },
  { id: "euro-topic-6-3", file: "quizzes-euro/topic-6-3.js", date: "2026-09-23", topic: "Topic 6.3: Second Wave Industrialization and Its Effects" },
  { id: "euro-topic-6-4", file: "quizzes-euro/topic-6-4.js", date: "2026-09-23", topic: "Topic 6.4: Social Effects of Industrialization" },
  { id: "euro-topic-6-5", file: "quizzes-euro/topic-6-5.js", date: "2026-09-23", topic: "Topic 6.5: The Concert of Europe and European Conservatism" },
  { id: "euro-topic-6-6", file: "quizzes-euro/topic-6-6.js", date: "2026-09-23", topic: "Topic 6.6: Reactions and Revolutions" },
  { id: "euro-topic-6-7", file: "quizzes-euro/topic-6-7.js", date: "2026-09-23", topic: "Topic 6.7: Ideologies of Change and Reform Movements" },
  { id: "euro-topic-6-8", file: "quizzes-euro/topic-6-8.js", date: "2026-09-23", topic: "Topic 6.8: 19th-Century Social Reform" },
  { id: "euro-topic-6-9", file: "quizzes-euro/topic-6-9.js", date: "2026-09-23", topic: "Topic 6.9: Institutional Responses and Reform" },
  { id: "euro-topic-6-10", file: "quizzes-euro/topic-6-10.js", date: "2026-09-23", topic: "Topic 6.10: Causation in the Age of Industrialization" },

  // Unit 7
  { id: "euro-topic-7-1", file: "quizzes-euro/topic-7-1.js", date: "2026-09-23", topic: "Topic 7.1: Contextualizing 19th-Century Perspectives and Political Developments" },
  { id: "euro-topic-7-2", file: "quizzes-euro/topic-7-2.js", date: "2026-09-23", topic: "Topic 7.2: Nationalism" },
  { id: "euro-topic-7-3", file: "quizzes-euro/topic-7-3.js", date: "2026-09-23", topic: "Topic 7.3: National Unification and Diplomatic Tensions" },
  { id: "euro-topic-7-4", file: "quizzes-euro/topic-7-4.js", date: "2026-09-23", topic: "Topic 7.4: Darwinism, Social Darwinism" },
  { id: "euro-topic-7-5", file: "quizzes-euro/topic-7-5.js", date: "2026-09-23", topic: "Topic 7.5: The Age of Progress and Modernity" },
  { id: "euro-topic-7-6", file: "quizzes-euro/topic-7-6.js", date: "2026-09-23", topic: "Topic 7.6: New Imperialism: Motivations and Methods" },
  { id: "euro-topic-7-7", file: "quizzes-euro/topic-7-7.js", date: "2026-09-23", topic: "Topic 7.7: Imperialism’s Global Effects" },
  { id: "euro-topic-7-8", file: "quizzes-euro/topic-7-8.js", date: "2026-09-23", topic: "Topic 7.8: 19th-Century Culture and Arts" },
  { id: "euro-topic-7-9", file: "quizzes-euro/topic-7-9.js", date: "2026-09-23", topic: "Topic 7.9: Causation in 19th-Century Perspectives and Political Developments" },

  // Unit 8
  { id: "euro-topic-8-1", file: "quizzes-euro/topic-8-1.js", date: "2026-09-23", topic: "Topic 8.1: Contextualizing 20th-Century Global Conflicts" },
  { id: "euro-topic-8-2", file: "quizzes-euro/topic-8-2.js", date: "2026-09-23", topic: "Topic 8.2: World War I" },
  { id: "euro-topic-8-3", file: "quizzes-euro/topic-8-3.js", date: "2026-09-23", topic: "Topic 8.3: The Russian Revolution and Its Effects" },
  { id: "euro-topic-8-4", file: "quizzes-euro/topic-8-4.js", date: "2026-09-23", topic: "Topic 8.4: Versailles Conference and Peace Settlement" },
  { id: "euro-topic-8-5", file: "quizzes-euro/topic-8-5.js", date: "2026-09-23", topic: "Topic 8.5: Global Economic Crisis" },
  { id: "euro-topic-8-6", file: "quizzes-euro/topic-8-6.js", date: "2026-09-23", topic: "Topic 8.6: Fascism and Totalitarianism" },
  { id: "euro-topic-8-7", file: "quizzes-euro/topic-8-7.js", date: "2026-09-23", topic: "Topic 8.7: Europe During the Interwar Period" },
  { id: "euro-topic-8-8", file: "quizzes-euro/topic-8-8.js", date: "2026-09-23", topic: "Topic 8.8: World War II" },
  { id: "euro-topic-8-9", file: "quizzes-euro/topic-8-9.js", date: "2026-09-23", topic: "Topic 8.9: The Holocaust" },
  { id: "euro-topic-8-10", file: "quizzes-euro/topic-8-10.js", date: "2026-09-23", topic: "Topic 8.10: 20th-Century Cultural, Intellectual, and Artistic Developments" },
  { id: "euro-topic-8-11", file: "quizzes-euro/topic-8-11.js", date: "2026-09-23", topic: "Topic 8.11: Continuity and Changes in an Age of Global Conflict" },

  // Unit 9
  { id: "euro-topic-9-1", file: "quizzes-euro/topic-9-1.js", date: "2026-09-23", topic: "Topic 9.1: Contextualizing Cold War and Contemporary Europe" },
  { id: "euro-topic-9-2", file: "quizzes-euro/topic-9-2.js", date: "2026-09-23", topic: "Topic 9.2: Rebuilding Europe" },
  { id: "euro-topic-9-3", file: "quizzes-euro/topic-9-3.js", date: "2026-09-23", topic: "Topic 9.3: The Cold War" },
  { id: "euro-topic-9-4", file: "quizzes-euro/topic-9-4.js", date: "2026-09-23", topic: "Topic 9.4: Two Super Powers Emerge" },
  { id: "euro-topic-9-5", file: "quizzes-euro/topic-9-5.js", date: "2026-09-23", topic: "Topic 9.5: Postwar Nationalism, Ethnic Conflict, and Atrocities" },
  { id: "euro-topic-9-6", file: "quizzes-euro/topic-9-6.js", date: "2026-09-23", topic: "Topic 9.6: Contemporary Western Democracies" },
  { id: "euro-topic-9-7", file: "quizzes-euro/topic-9-7.js", date: "2026-09-23", topic: "Topic 9.7: The Fall of Communism" },
  { id: "euro-topic-9-8", file: "quizzes-euro/topic-9-8.js", date: "2026-09-23", topic: "Topic 9.8: 20th-Century Feminism" },
  { id: "euro-topic-9-9", file: "quizzes-euro/topic-9-9.js", date: "2026-09-23", topic: "Topic 9.9: Decolonization" },
  { id: "euro-topic-9-10", file: "quizzes-euro/topic-9-10.js", date: "2026-09-23", topic: "Topic 9.10: The European Union" },
  { id: "euro-topic-9-11", file: "quizzes-euro/topic-9-11.js", date: "2026-09-23", topic: "Topic 9.11: Migration and Immigration" },
  { id: "euro-topic-9-12", file: "quizzes-euro/topic-9-12.js", date: "2026-09-23", topic: "Topic 9.12: Technology" },
  { id: "euro-topic-9-13", file: "quizzes-euro/topic-9-13.js", date: "2026-09-23", topic: "Topic 9.13: Globalization" },
  { id: "euro-topic-9-14", file: "quizzes-euro/topic-9-14.js", date: "2026-09-23", topic: "Topic 9.14: 20th- and 21st-Century Culture, Arts, and Demographic Trends" },
  { id: "euro-topic-9-15", file: "quizzes-euro/topic-9-15.js", date: "2026-09-23", topic: "Topic 9.15: Continuity and Change in the 20th and 21st Centuries" },

];
