// quizzes-ush/index.js
//
// Master list of every AP U.S. History lesson. Same shape and same role as
// quizzes/index.js (AP Gov) and quizzes-bio/index.js (AP Bio), but published
// under its OWN global -- window.USH_QUIZ_LIST -- so the subjects can all be
// loaded on the same page without clobbering each other. js/subjects.js joins
// them into window.SUBJECTS, which is what unit.js / quiz.js / insights.js
// actually read.
//
// Lesson ids are prefixed "ush-" so they never collide with an AP Gov or
// AP Bio lesson id (all three subjects have a "topic-1-1"). The prefix also
// keeps per-lesson progress in localStorage separate between subjects.
//
// APUSH follows the College Board CED: 9 units (Periods 1-9), 105 topics.
// All nine units are published below.
//
// Fields:
//   id    - globally unique lesson id, e.g. "ush-topic-1-1"
//   file  - data file to load, relative to the site root
//   date  - "YYYY-MM-DD", when the lesson was published (informational only)
//   topic - short human-readable topic name shown to students

window.USH_QUIZ_LIST = [

  { id: "ush-topic-1-1", file: "quizzes-ush/topic-1-1.js", date: "2026-09-21", topic: "Topic 1.1: Contextualizing Period 1" },
  { id: "ush-topic-1-2", file: "quizzes-ush/topic-1-2.js", date: "2026-09-21", topic: "Topic 1.2: Native American Societies Before European Contact" },
  { id: "ush-topic-1-3", file: "quizzes-ush/topic-1-3.js", date: "2026-09-21", topic: "Topic 1.3: European Exploration in the Americas" },
  { id: "ush-topic-1-4", file: "quizzes-ush/topic-1-4.js", date: "2026-09-21", topic: "Topic 1.4: Columbian Exchange, Spanish Exploration, and Conquest" },
  { id: "ush-topic-1-5", file: "quizzes-ush/topic-1-5.js", date: "2026-09-21", topic: "Topic 1.5: Labor, Slavery, and Caste in the Spanish Colonial System" },
  { id: "ush-topic-1-6", file: "quizzes-ush/topic-1-6.js", date: "2026-09-21", topic: "Topic 1.6: Cultural Interactions Between Europeans, Native Americans, and Africans" },
  { id: "ush-topic-1-7", file: "quizzes-ush/topic-1-7.js", date: "2026-09-21", topic: "Topic 1.7: Causation in Period 1" },

  { id: "ush-topic-2-1", file: "quizzes-ush/topic-2-1.js", date: "2026-09-22", topic: "Topic 2.1: Contextualizing Period 2" },
  { id: "ush-topic-2-2", file: "quizzes-ush/topic-2-2.js", date: "2026-09-22", topic: "Topic 2.2: European Colonization" },
  { id: "ush-topic-2-3", file: "quizzes-ush/topic-2-3.js", date: "2026-09-22", topic: "Topic 2.3: The Regions of the British Colonies" },
  { id: "ush-topic-2-4", file: "quizzes-ush/topic-2-4.js", date: "2026-09-22", topic: "Topic 2.4: Transatlantic Trade" },
  { id: "ush-topic-2-5", file: "quizzes-ush/topic-2-5.js", date: "2026-09-22", topic: "Topic 2.5: Interactions Between American Indians and Europeans" },
  { id: "ush-topic-2-6", file: "quizzes-ush/topic-2-6.js", date: "2026-09-22", topic: "Topic 2.6: Slavery in the British Colonies" },
  { id: "ush-topic-2-7", file: "quizzes-ush/topic-2-7.js", date: "2026-09-22", topic: "Topic 2.7: Colonial Society and Culture" },
  { id: "ush-topic-2-8", file: "quizzes-ush/topic-2-8.js", date: "2026-09-22", topic: "Topic 2.8: Comparison in Period 2" },

  { id: "ush-topic-3-1", file: "quizzes-ush/topic-3-1.js", date: "2026-09-22", topic: "Topic 3.1: Contextualizing Period 3" },
  { id: "ush-topic-3-2", file: "quizzes-ush/topic-3-2.js", date: "2026-09-22", topic: "Topic 3.2: The Seven Years' War" },
  { id: "ush-topic-3-3", file: "quizzes-ush/topic-3-3.js", date: "2026-09-22", topic: "Topic 3.3: Taxation Without Representation" },
  { id: "ush-topic-3-4", file: "quizzes-ush/topic-3-4.js", date: "2026-09-22", topic: "Topic 3.4: Philosophical Foundations of the American Revolution" },
  { id: "ush-topic-3-5", file: "quizzes-ush/topic-3-5.js", date: "2026-09-22", topic: "Topic 3.5: The American Revolution" },
  { id: "ush-topic-3-6", file: "quizzes-ush/topic-3-6.js", date: "2026-09-22", topic: "Topic 3.6: The Influence of Revolutionary Ideals" },
  { id: "ush-topic-3-7", file: "quizzes-ush/topic-3-7.js", date: "2026-09-22", topic: "Topic 3.7: The Articles of Confederation" },
  { id: "ush-topic-3-8", file: "quizzes-ush/topic-3-8.js", date: "2026-09-22", topic: "Topic 3.8: The Constitutional Convention and Debates over Ratification" },
  { id: "ush-topic-3-9", file: "quizzes-ush/topic-3-9.js", date: "2026-09-22", topic: "Topic 3.9: The Constitution" },
  { id: "ush-topic-3-10", file: "quizzes-ush/topic-3-10.js", date: "2026-09-22", topic: "Topic 3.10: Shaping a New Republic" },
  { id: "ush-topic-3-11", file: "quizzes-ush/topic-3-11.js", date: "2026-09-22", topic: "Topic 3.11: Developing an American Identity" },
  { id: "ush-topic-3-12", file: "quizzes-ush/topic-3-12.js", date: "2026-09-22", topic: "Topic 3.12: Movement in the Early Republic" },
  { id: "ush-topic-3-13", file: "quizzes-ush/topic-3-13.js", date: "2026-09-22", topic: "Topic 3.13: Continuity and Change in Period 3" },

  { id: "ush-topic-4-1", file: "quizzes-ush/topic-4-1.js", date: "2026-09-22", topic: "Topic 4.1: Contextualizing Period 4" },
  { id: "ush-topic-4-2", file: "quizzes-ush/topic-4-2.js", date: "2026-09-22", topic: "Topic 4.2: The Rise of Political Parties and the Era of Jefferson" },
  { id: "ush-topic-4-3", file: "quizzes-ush/topic-4-3.js", date: "2026-09-22", topic: "Topic 4.3: Politics and Regional Interests" },
  { id: "ush-topic-4-4", file: "quizzes-ush/topic-4-4.js", date: "2026-09-22", topic: "Topic 4.4: America on the World Stage" },
  { id: "ush-topic-4-5", file: "quizzes-ush/topic-4-5.js", date: "2026-09-22", topic: "Topic 4.5: Market Revolution: Industrialization" },
  { id: "ush-topic-4-6", file: "quizzes-ush/topic-4-6.js", date: "2026-09-22", topic: "Topic 4.6: Market Revolution: Society and Culture" },
  { id: "ush-topic-4-7", file: "quizzes-ush/topic-4-7.js", date: "2026-09-22", topic: "Topic 4.7: Expanding Democracy" },
  { id: "ush-topic-4-8", file: "quizzes-ush/topic-4-8.js", date: "2026-09-22", topic: "Topic 4.8: Jackson and Federal Power" },
  { id: "ush-topic-4-9", file: "quizzes-ush/topic-4-9.js", date: "2026-09-22", topic: "Topic 4.9: The Development of an American Culture" },
  { id: "ush-topic-4-10", file: "quizzes-ush/topic-4-10.js", date: "2026-09-22", topic: "Topic 4.10: The Second Great Awakening" },
  { id: "ush-topic-4-11", file: "quizzes-ush/topic-4-11.js", date: "2026-09-22", topic: "Topic 4.11: An Age of Reform" },
  { id: "ush-topic-4-12", file: "quizzes-ush/topic-4-12.js", date: "2026-09-22", topic: "Topic 4.12: African Americans in the Early Republic" },
  { id: "ush-topic-4-13", file: "quizzes-ush/topic-4-13.js", date: "2026-09-22", topic: "Topic 4.13: The Society of the South in the Early Republic" },
  { id: "ush-topic-4-14", file: "quizzes-ush/topic-4-14.js", date: "2026-09-22", topic: "Topic 4.14: Causation in Period 4" },

  { id: "ush-topic-5-1", file: "quizzes-ush/topic-5-1.js", date: "2026-09-22", topic: "Topic 5.1: Contextualizing Period 5" },
  { id: "ush-topic-5-2", file: "quizzes-ush/topic-5-2.js", date: "2026-09-22", topic: "Topic 5.2: Manifest Destiny" },
  { id: "ush-topic-5-3", file: "quizzes-ush/topic-5-3.js", date: "2026-09-22", topic: "Topic 5.3: The Mexican-American War" },
  { id: "ush-topic-5-4", file: "quizzes-ush/topic-5-4.js", date: "2026-09-22", topic: "Topic 5.4: The Compromise of 1850" },
  { id: "ush-topic-5-5", file: "quizzes-ush/topic-5-5.js", date: "2026-09-22", topic: "Topic 5.5: Sectional Conflict: Regional Differences" },
  { id: "ush-topic-5-6", file: "quizzes-ush/topic-5-6.js", date: "2026-09-22", topic: "Topic 5.6: Failure of Compromise" },
  { id: "ush-topic-5-7", file: "quizzes-ush/topic-5-7.js", date: "2026-09-22", topic: "Topic 5.7: Election of 1860 and Secession" },
  { id: "ush-topic-5-8", file: "quizzes-ush/topic-5-8.js", date: "2026-09-22", topic: "Topic 5.8: Military Conflict in the Civil War" },
  { id: "ush-topic-5-9", file: "quizzes-ush/topic-5-9.js", date: "2026-09-22", topic: "Topic 5.9: Government Policies During the Civil War" },
  { id: "ush-topic-5-10", file: "quizzes-ush/topic-5-10.js", date: "2026-09-22", topic: "Topic 5.10: Reconstruction" },
  { id: "ush-topic-5-11", file: "quizzes-ush/topic-5-11.js", date: "2026-09-22", topic: "Topic 5.11: Failure of Reconstruction" },
  { id: "ush-topic-5-12", file: "quizzes-ush/topic-5-12.js", date: "2026-09-22", topic: "Topic 5.12: Comparison in Period 5" },

  { id: "ush-topic-6-1", file: "quizzes-ush/topic-6-1.js", date: "2026-09-22", topic: "Topic 6.1: Contextualizing Period 6" },
  { id: "ush-topic-6-2", file: "quizzes-ush/topic-6-2.js", date: "2026-09-22", topic: "Topic 6.2: Westward Expansion: Economic Development" },
  { id: "ush-topic-6-3", file: "quizzes-ush/topic-6-3.js", date: "2026-09-22", topic: "Topic 6.3: Westward Expansion: Social and Cultural Development" },
  { id: "ush-topic-6-4", file: "quizzes-ush/topic-6-4.js", date: "2026-09-22", topic: "Topic 6.4: The \"New South\"" },
  { id: "ush-topic-6-5", file: "quizzes-ush/topic-6-5.js", date: "2026-09-22", topic: "Topic 6.5: Technological Innovation" },
  { id: "ush-topic-6-6", file: "quizzes-ush/topic-6-6.js", date: "2026-09-22", topic: "Topic 6.6: The Rise of Industrial Capitalism" },
  { id: "ush-topic-6-7", file: "quizzes-ush/topic-6-7.js", date: "2026-09-22", topic: "Topic 6.7: Labor in the Gilded Age" },
  { id: "ush-topic-6-8", file: "quizzes-ush/topic-6-8.js", date: "2026-09-22", topic: "Topic 6.8: Immigration and Migration in the Gilded Age" },
  { id: "ush-topic-6-9", file: "quizzes-ush/topic-6-9.js", date: "2026-09-22", topic: "Topic 6.9: Responses to Immigration in the Gilded Age" },
  { id: "ush-topic-6-10", file: "quizzes-ush/topic-6-10.js", date: "2026-09-22", topic: "Topic 6.10: Development of the Middle Class" },
  { id: "ush-topic-6-11", file: "quizzes-ush/topic-6-11.js", date: "2026-09-22", topic: "Topic 6.11: Reform in the Gilded Age" },
  { id: "ush-topic-6-12", file: "quizzes-ush/topic-6-12.js", date: "2026-09-22", topic: "Topic 6.12: Controversies over the Role of Government in the Gilded Age" },
  { id: "ush-topic-6-13", file: "quizzes-ush/topic-6-13.js", date: "2026-09-22", topic: "Topic 6.13: Politics in the Gilded Age" },
  { id: "ush-topic-6-14", file: "quizzes-ush/topic-6-14.js", date: "2026-09-22", topic: "Topic 6.14: Continuity and Change in Period 6" },

  { id: "ush-topic-7-1", file: "quizzes-ush/topic-7-1.js", date: "2026-09-22", topic: "Topic 7.1: Contextualizing Period 7" },
  { id: "ush-topic-7-2", file: "quizzes-ush/topic-7-2.js", date: "2026-09-22", topic: "Topic 7.2: Imperialism: Debates" },
  { id: "ush-topic-7-3", file: "quizzes-ush/topic-7-3.js", date: "2026-09-22", topic: "Topic 7.3: The Spanish-American War" },
  { id: "ush-topic-7-4", file: "quizzes-ush/topic-7-4.js", date: "2026-09-22", topic: "Topic 7.4: The Progressives" },
  { id: "ush-topic-7-5", file: "quizzes-ush/topic-7-5.js", date: "2026-09-22", topic: "Topic 7.5: World War I: Military and Diplomacy" },
  { id: "ush-topic-7-6", file: "quizzes-ush/topic-7-6.js", date: "2026-09-22", topic: "Topic 7.6: World War I: Home Front" },
  { id: "ush-topic-7-7", file: "quizzes-ush/topic-7-7.js", date: "2026-09-22", topic: "Topic 7.7: 1920s: Innovations in Communication and Technology" },
  { id: "ush-topic-7-8", file: "quizzes-ush/topic-7-8.js", date: "2026-09-22", topic: "Topic 7.8: 1920s: Cultural and Political Controversies" },
  { id: "ush-topic-7-9", file: "quizzes-ush/topic-7-9.js", date: "2026-09-22", topic: "Topic 7.9: The Great Depression" },
  { id: "ush-topic-7-10", file: "quizzes-ush/topic-7-10.js", date: "2026-09-22", topic: "Topic 7.10: The New Deal" },
  { id: "ush-topic-7-11", file: "quizzes-ush/topic-7-11.js", date: "2026-09-22", topic: "Topic 7.11: Interwar Foreign Policy" },
  { id: "ush-topic-7-12", file: "quizzes-ush/topic-7-12.js", date: "2026-09-22", topic: "Topic 7.12: World War II: Mobilization" },
  { id: "ush-topic-7-13", file: "quizzes-ush/topic-7-13.js", date: "2026-09-22", topic: "Topic 7.13: World War II: Military" },
  { id: "ush-topic-7-14", file: "quizzes-ush/topic-7-14.js", date: "2026-09-22", topic: "Topic 7.14: Postwar Diplomacy" },
  { id: "ush-topic-7-15", file: "quizzes-ush/topic-7-15.js", date: "2026-09-22", topic: "Topic 7.15: Comparison in Period 7" },

  { id: "ush-topic-8-1", file: "quizzes-ush/topic-8-1.js", date: "2026-09-22", topic: "Topic 8.1: Contextualizing Period 8" },
  { id: "ush-topic-8-2", file: "quizzes-ush/topic-8-2.js", date: "2026-09-22", topic: "Topic 8.2: The Cold War from 1945 to 1980" },
  { id: "ush-topic-8-3", file: "quizzes-ush/topic-8-3.js", date: "2026-09-22", topic: "Topic 8.3: The Red Scare" },
  { id: "ush-topic-8-4", file: "quizzes-ush/topic-8-4.js", date: "2026-09-22", topic: "Topic 8.4: Economy after 1945" },
  { id: "ush-topic-8-5", file: "quizzes-ush/topic-8-5.js", date: "2026-09-22", topic: "Topic 8.5: Culture after 1945" },
  { id: "ush-topic-8-6", file: "quizzes-ush/topic-8-6.js", date: "2026-09-22", topic: "Topic 8.6: Early Steps in the Civil Rights Movement (1940s and 1950s)" },
  { id: "ush-topic-8-7", file: "quizzes-ush/topic-8-7.js", date: "2026-09-22", topic: "Topic 8.7: America as a World Power" },
  { id: "ush-topic-8-8", file: "quizzes-ush/topic-8-8.js", date: "2026-09-22", topic: "Topic 8.8: The Vietnam War" },
  { id: "ush-topic-8-9", file: "quizzes-ush/topic-8-9.js", date: "2026-09-22", topic: "Topic 8.9: The Great Society" },
  { id: "ush-topic-8-10", file: "quizzes-ush/topic-8-10.js", date: "2026-09-22", topic: "Topic 8.10: The African American Civil Rights Movement (1960s)" },
  { id: "ush-topic-8-11", file: "quizzes-ush/topic-8-11.js", date: "2026-09-22", topic: "Topic 8.11: The Civil Rights Movement Expands" },
  { id: "ush-topic-8-12", file: "quizzes-ush/topic-8-12.js", date: "2026-09-22", topic: "Topic 8.12: Youth Culture of the 1960s" },
  { id: "ush-topic-8-13", file: "quizzes-ush/topic-8-13.js", date: "2026-09-22", topic: "Topic 8.13: The Environment and Natural Resources from 1968 to 1980" },
  { id: "ush-topic-8-14", file: "quizzes-ush/topic-8-14.js", date: "2026-09-22", topic: "Topic 8.14: Society in Transition" },
  { id: "ush-topic-8-15", file: "quizzes-ush/topic-8-15.js", date: "2026-09-22", topic: "Topic 8.15: Continuity and Change in Period 8" },

  { id: "ush-topic-9-1", file: "quizzes-ush/topic-9-1.js", date: "2026-09-22", topic: "Topic 9.1: Contextualizing Period 9" },
  { id: "ush-topic-9-2", file: "quizzes-ush/topic-9-2.js", date: "2026-09-22", topic: "Topic 9.2: Reagan and Conservatism" },
  { id: "ush-topic-9-3", file: "quizzes-ush/topic-9-3.js", date: "2026-09-22", topic: "Topic 9.3: The End of the Cold War" },
  { id: "ush-topic-9-4", file: "quizzes-ush/topic-9-4.js", date: "2026-09-22", topic: "Topic 9.4: A Changing Economy" },
  { id: "ush-topic-9-5", file: "quizzes-ush/topic-9-5.js", date: "2026-09-22", topic: "Topic 9.5: Migration and Immigration in the 1990s and 2000s" },
  { id: "ush-topic-9-6", file: "quizzes-ush/topic-9-6.js", date: "2026-09-22", topic: "Topic 9.6: Challenges of the 21st Century" },
  { id: "ush-topic-9-7", file: "quizzes-ush/topic-9-7.js", date: "2026-09-22", topic: "Topic 9.7: Causation in Period 9" },

];
