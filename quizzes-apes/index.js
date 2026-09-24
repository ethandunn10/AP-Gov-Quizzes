// quizzes-apes/index.js
//
// Master list of every AP Environmental Science lesson. Same shape and same role as
// quizzes-ush/index.js (APUSH), but published under its OWN global --
// window.APES_QUIZ_LIST -- so the subjects can all be loaded on the same page
// without clobbering each other. js/subjects.js joins them into
// window.SUBJECTS, which is what unit.js / quiz.js / insights.js actually read.
//
// Lesson ids are prefixed "apes-" so they never collide with another subject's
// lesson id. The prefix also keeps per-lesson progress in localStorage separate.
//
// Follows the College Board CED: 9 units, 99 topics.
//
// Fields:
//   id    - globally unique lesson id, e.g. "apes-topic-1-1"
//   file  - data file to load, relative to the site root
//   date  - "YYYY-MM-DD", when the lesson was published (informational only)
//   topic - label shown on the unit and quiz pages

window.APES_QUIZ_LIST = [
  // Unit 1
  { id: "apes-topic-1-1", file: "quizzes-apes/topic-1-1.js", date: "2026-09-23", topic: "Topic 1.1: Introduction to Ecosystems" },
  { id: "apes-topic-1-2", file: "quizzes-apes/topic-1-2.js", date: "2026-09-23", topic: "Topic 1.2: Terrestrial Biomes" },
  { id: "apes-topic-1-3", file: "quizzes-apes/topic-1-3.js", date: "2026-09-23", topic: "Topic 1.3: Aquatic Biomes" },
  { id: "apes-topic-1-4", file: "quizzes-apes/topic-1-4.js", date: "2026-09-23", topic: "Topic 1.4: The Carbon Cycle" },
  { id: "apes-topic-1-5", file: "quizzes-apes/topic-1-5.js", date: "2026-09-23", topic: "Topic 1.5: The Nitrogen Cycle" },
  { id: "apes-topic-1-6", file: "quizzes-apes/topic-1-6.js", date: "2026-09-23", topic: "Topic 1.6: The Phosphorus Cycle" },
  { id: "apes-topic-1-7", file: "quizzes-apes/topic-1-7.js", date: "2026-09-23", topic: "Topic 1.7: The Hydrologic (Water) Cycle" },
  { id: "apes-topic-1-8", file: "quizzes-apes/topic-1-8.js", date: "2026-09-23", topic: "Topic 1.8: Primary Productivity" },
  { id: "apes-topic-1-9", file: "quizzes-apes/topic-1-9.js", date: "2026-09-23", topic: "Topic 1.9: Trophic Levels" },
  { id: "apes-topic-1-10", file: "quizzes-apes/topic-1-10.js", date: "2026-09-23", topic: "Topic 1.10: Energy Flow and the 10% Rule" },
  { id: "apes-topic-1-11", file: "quizzes-apes/topic-1-11.js", date: "2026-09-23", topic: "Topic 1.11: Food Chains and Food Webs" },

  // Unit 2
  { id: "apes-topic-2-1", file: "quizzes-apes/topic-2-1.js", date: "2026-09-23", topic: "Topic 2.1: Introduction to Biodiversity" },
  { id: "apes-topic-2-2", file: "quizzes-apes/topic-2-2.js", date: "2026-09-23", topic: "Topic 2.2: Ecosystem Services" },
  { id: "apes-topic-2-3", file: "quizzes-apes/topic-2-3.js", date: "2026-09-23", topic: "Topic 2.3: Island Biogeography UNIT" },
  { id: "apes-topic-2-4", file: "quizzes-apes/topic-2-4.js", date: "2026-09-23", topic: "Topic 2.4: Ecological Tolerance" },
  { id: "apes-topic-2-5", file: "quizzes-apes/topic-2-5.js", date: "2026-09-23", topic: "Topic 2.5: Natural Disruptions to Ecosystems" },
  { id: "apes-topic-2-6", file: "quizzes-apes/topic-2-6.js", date: "2026-09-23", topic: "Topic 2.6: Adaptations" },
  { id: "apes-topic-2-7", file: "quizzes-apes/topic-2-7.js", date: "2026-09-23", topic: "Topic 2.7: Ecological Succession" },

  // Unit 3
  { id: "apes-topic-3-1", file: "quizzes-apes/topic-3-1.js", date: "2026-09-23", topic: "Topic 3.1: Generalist and Specialist Species" },
  { id: "apes-topic-3-2", file: "quizzes-apes/topic-3-2.js", date: "2026-09-23", topic: "Topic 3.2: K-Selected r-Selected Species" },
  { id: "apes-topic-3-3", file: "quizzes-apes/topic-3-3.js", date: "2026-09-23", topic: "Topic 3.3: Survivorship Curves" },
  { id: "apes-topic-3-4", file: "quizzes-apes/topic-3-4.js", date: "2026-09-23", topic: "Topic 3.4: Carrying Capacity UNIT" },
  { id: "apes-topic-3-5", file: "quizzes-apes/topic-3-5.js", date: "2026-09-23", topic: "Topic 3.5: Population Growth and Resource Availability" },
  { id: "apes-topic-3-6", file: "quizzes-apes/topic-3-6.js", date: "2026-09-23", topic: "Topic 3.6: Age Structure Diagrams" },
  { id: "apes-topic-3-7", file: "quizzes-apes/topic-3-7.js", date: "2026-09-23", topic: "Topic 3.7: Total Fertility Rate" },
  { id: "apes-topic-3-8", file: "quizzes-apes/topic-3-8.js", date: "2026-09-23", topic: "Topic 3.8: Human Population Dynamics" },
  { id: "apes-topic-3-9", file: "quizzes-apes/topic-3-9.js", date: "2026-09-23", topic: "Topic 3.9: Demographic Transition" },

  // Unit 4
  { id: "apes-topic-4-1", file: "quizzes-apes/topic-4-1.js", date: "2026-09-23", topic: "Topic 4.1: Plate Tectonics" },
  { id: "apes-topic-4-2", file: "quizzes-apes/topic-4-2.js", date: "2026-09-23", topic: "Topic 4.2: Soil Formation and Erosion" },
  { id: "apes-topic-4-3", file: "quizzes-apes/topic-4-3.js", date: "2026-09-23", topic: "Topic 4.3: Soil Composition and Properties UNIT" },
  { id: "apes-topic-4-4", file: "quizzes-apes/topic-4-4.js", date: "2026-09-23", topic: "Topic 4.4: Earth’s Atmosphere" },
  { id: "apes-topic-4-5", file: "quizzes-apes/topic-4-5.js", date: "2026-09-23", topic: "Topic 4.5: Global Wind Patterns" },
  { id: "apes-topic-4-6", file: "quizzes-apes/topic-4-6.js", date: "2026-09-23", topic: "Topic 4.6: Watersheds" },
  { id: "apes-topic-4-7", file: "quizzes-apes/topic-4-7.js", date: "2026-09-23", topic: "Topic 4.7: Solar Radiation and Earth’s Seasons" },
  { id: "apes-topic-4-8", file: "quizzes-apes/topic-4-8.js", date: "2026-09-23", topic: "Topic 4.8: Earth’s Geography and Climate" },
  { id: "apes-topic-4-9", file: "quizzes-apes/topic-4-9.js", date: "2026-09-23", topic: "Topic 4.9: El Niño and La Niña" },

  // Unit 5
  { id: "apes-topic-5-1", file: "quizzes-apes/topic-5-1.js", date: "2026-09-23", topic: "Topic 5.1: The Tragedy of the Commons" },
  { id: "apes-topic-5-2", file: "quizzes-apes/topic-5-2.js", date: "2026-09-23", topic: "Topic 5.2: Clearcutting" },
  { id: "apes-topic-5-3", file: "quizzes-apes/topic-5-3.js", date: "2026-09-23", topic: "Topic 5.3: The Green Revolution" },
  { id: "apes-topic-5-4", file: "quizzes-apes/topic-5-4.js", date: "2026-09-23", topic: "Topic 5.4: Impact of Agricultural Practices UNIT" },
  { id: "apes-topic-5-5", file: "quizzes-apes/topic-5-5.js", date: "2026-09-23", topic: "Topic 5.5: Irrigation Methods" },
  { id: "apes-topic-5-6", file: "quizzes-apes/topic-5-6.js", date: "2026-09-23", topic: "Topic 5.6: Pest Control Methods" },
  { id: "apes-topic-5-7", file: "quizzes-apes/topic-5-7.js", date: "2026-09-23", topic: "Topic 5.7: Meat Production Methods" },
  { id: "apes-topic-5-8", file: "quizzes-apes/topic-5-8.js", date: "2026-09-23", topic: "Topic 5.8: Impacts of Overfishing" },
  { id: "apes-topic-5-9", file: "quizzes-apes/topic-5-9.js", date: "2026-09-23", topic: "Topic 5.9: Impacts of Mining" },
  { id: "apes-topic-5-10", file: "quizzes-apes/topic-5-10.js", date: "2026-09-23", topic: "Topic 5.10: Impacts of Urbanization" },
  { id: "apes-topic-5-11", file: "quizzes-apes/topic-5-11.js", date: "2026-09-23", topic: "Topic 5.11: Ecological Footprints" },
  { id: "apes-topic-5-12", file: "quizzes-apes/topic-5-12.js", date: "2026-09-23", topic: "Topic 5.12: Introduction to Sustainability UNIT" },
  { id: "apes-topic-5-13", file: "quizzes-apes/topic-5-13.js", date: "2026-09-23", topic: "Topic 5.13: Methods to Reduce Urban Runoff" },
  { id: "apes-topic-5-14", file: "quizzes-apes/topic-5-14.js", date: "2026-09-23", topic: "Topic 5.14: Integrated Pest Management" },
  { id: "apes-topic-5-15", file: "quizzes-apes/topic-5-15.js", date: "2026-09-23", topic: "Topic 5.15: Sustainable Agriculture" },
  { id: "apes-topic-5-16", file: "quizzes-apes/topic-5-16.js", date: "2026-09-23", topic: "Topic 5.16: Aquaculture" },
  { id: "apes-topic-5-17", file: "quizzes-apes/topic-5-17.js", date: "2026-09-23", topic: "Topic 5.17: Sustainable Forestry" },

  // Unit 6
  { id: "apes-topic-6-1", file: "quizzes-apes/topic-6-1.js", date: "2026-09-23", topic: "Topic 6.1: Renewable and Nonrenewable Resources" },
  { id: "apes-topic-6-2", file: "quizzes-apes/topic-6-2.js", date: "2026-09-23", topic: "Topic 6.2: Global Energy Consumption" },
  { id: "apes-topic-6-3", file: "quizzes-apes/topic-6-3.js", date: "2026-09-23", topic: "Topic 6.3: Fuel Types and Uses UNIT" },
  { id: "apes-topic-6-4", file: "quizzes-apes/topic-6-4.js", date: "2026-09-23", topic: "Topic 6.4: Distribution of Natural Energy Resources" },
  { id: "apes-topic-6-5", file: "quizzes-apes/topic-6-5.js", date: "2026-09-23", topic: "Topic 6.5: Fossil Fuels" },
  { id: "apes-topic-6-6", file: "quizzes-apes/topic-6-6.js", date: "2026-09-23", topic: "Topic 6.6: Nuclear Power" },
  { id: "apes-topic-6-7", file: "quizzes-apes/topic-6-7.js", date: "2026-09-23", topic: "Topic 6.7: Energy from Biomass" },
  { id: "apes-topic-6-8", file: "quizzes-apes/topic-6-8.js", date: "2026-09-23", topic: "Topic 6.8: Solar Energy" },
  { id: "apes-topic-6-9", file: "quizzes-apes/topic-6-9.js", date: "2026-09-23", topic: "Topic 6.9: Hydroelectric Power" },
  { id: "apes-topic-6-10", file: "quizzes-apes/topic-6-10.js", date: "2026-09-23", topic: "Topic 6.10: Geothermal Energy" },
  { id: "apes-topic-6-11", file: "quizzes-apes/topic-6-11.js", date: "2026-09-23", topic: "Topic 6.11: Hydrogen Fuel Cell" },
  { id: "apes-topic-6-12", file: "quizzes-apes/topic-6-12.js", date: "2026-09-23", topic: "Topic 6.12: Wind Energy" },
  { id: "apes-topic-6-13", file: "quizzes-apes/topic-6-13.js", date: "2026-09-23", topic: "Topic 6.13: Energy Conservation" },

  // Unit 7
  { id: "apes-topic-7-1", file: "quizzes-apes/topic-7-1.js", date: "2026-09-23", topic: "Topic 7.1: Introduction to Air Pollution" },
  { id: "apes-topic-7-2", file: "quizzes-apes/topic-7-2.js", date: "2026-09-23", topic: "Topic 7.2: Photochemical Smog" },
  { id: "apes-topic-7-3", file: "quizzes-apes/topic-7-3.js", date: "2026-09-23", topic: "Topic 7.3: Thermal Inversion" },
  { id: "apes-topic-7-4", file: "quizzes-apes/topic-7-4.js", date: "2026-09-23", topic: "Topic 7.4: Atmospheric CO2 and Particulates" },
  { id: "apes-topic-7-5", file: "quizzes-apes/topic-7-5.js", date: "2026-09-23", topic: "Topic 7.5: Indoor Air Pollutants" },
  { id: "apes-topic-7-6", file: "quizzes-apes/topic-7-6.js", date: "2026-09-23", topic: "Topic 7.6: Reduction of Air Pollutants" },
  { id: "apes-topic-7-7", file: "quizzes-apes/topic-7-7.js", date: "2026-09-23", topic: "Topic 7.7: Acid Rain" },
  { id: "apes-topic-7-8", file: "quizzes-apes/topic-7-8.js", date: "2026-09-23", topic: "Topic 7.8: Noise Pollution" },

  // Unit 8
  { id: "apes-topic-8-1", file: "quizzes-apes/topic-8-1.js", date: "2026-09-23", topic: "Topic 8.1: Sources of Pollution" },
  { id: "apes-topic-8-2", file: "quizzes-apes/topic-8-2.js", date: "2026-09-23", topic: "Topic 8.2: Human Impacts on Ecosystems" },
  { id: "apes-topic-8-3", file: "quizzes-apes/topic-8-3.js", date: "2026-09-23", topic: "Topic 8.3: Endocrine Disruptors" },
  { id: "apes-topic-8-4", file: "quizzes-apes/topic-8-4.js", date: "2026-09-23", topic: "Topic 8.4: Human Impacts on Wetlands and Mangroves" },
  { id: "apes-topic-8-5", file: "quizzes-apes/topic-8-5.js", date: "2026-09-23", topic: "Topic 8.5: Eutrophication" },
  { id: "apes-topic-8-6", file: "quizzes-apes/topic-8-6.js", date: "2026-09-23", topic: "Topic 8.6: Thermal Pollution" },
  { id: "apes-topic-8-7", file: "quizzes-apes/topic-8-7.js", date: "2026-09-23", topic: "Topic 8.7: Persistent Organic Pollutants (POPs)" },
  { id: "apes-topic-8-8", file: "quizzes-apes/topic-8-8.js", date: "2026-09-23", topic: "Topic 8.8: Bioaccumulation and Biomagnification" },
  { id: "apes-topic-8-9", file: "quizzes-apes/topic-8-9.js", date: "2026-09-23", topic: "Topic 8.9: Solid Waste Disposal" },
  { id: "apes-topic-8-10", file: "quizzes-apes/topic-8-10.js", date: "2026-09-23", topic: "Topic 8.10: Waste Reduction Methods continued on next page" },
  { id: "apes-topic-8-11", file: "quizzes-apes/topic-8-11.js", date: "2026-09-23", topic: "Topic 8.11: Sewage Treatment" },
  { id: "apes-topic-8-12", file: "quizzes-apes/topic-8-12.js", date: "2026-09-23", topic: "Topic 8.12: Lethal Dose 50% (LD50)" },
  { id: "apes-topic-8-13", file: "quizzes-apes/topic-8-13.js", date: "2026-09-23", topic: "Topic 8.13: Dose Response Curve" },
  { id: "apes-topic-8-14", file: "quizzes-apes/topic-8-14.js", date: "2026-09-23", topic: "Topic 8.14: Pollution and Human Health" },
  { id: "apes-topic-8-15", file: "quizzes-apes/topic-8-15.js", date: "2026-09-23", topic: "Topic 8.15: Pathogens and Infectious Diseases continued on next page" },

  // Unit 9
  { id: "apes-topic-9-1", file: "quizzes-apes/topic-9-1.js", date: "2026-09-23", topic: "Topic 9.1: Stratospheric Ozone Depletion" },
  { id: "apes-topic-9-2", file: "quizzes-apes/topic-9-2.js", date: "2026-09-23", topic: "Topic 9.2: Reducing Ozone Depletion" },
  { id: "apes-topic-9-3", file: "quizzes-apes/topic-9-3.js", date: "2026-09-23", topic: "Topic 9.3: The Greenhouse Effect" },
  { id: "apes-topic-9-4", file: "quizzes-apes/topic-9-4.js", date: "2026-09-23", topic: "Topic 9.4: Increases in the Greenhouse Gases" },
  { id: "apes-topic-9-5", file: "quizzes-apes/topic-9-5.js", date: "2026-09-23", topic: "Topic 9.5: Global Climate Change" },
  { id: "apes-topic-9-6", file: "quizzes-apes/topic-9-6.js", date: "2026-09-23", topic: "Topic 9.6: Ocean Warming" },
  { id: "apes-topic-9-7", file: "quizzes-apes/topic-9-7.js", date: "2026-09-23", topic: "Topic 9.7: Ocean Acidification" },
  { id: "apes-topic-9-8", file: "quizzes-apes/topic-9-8.js", date: "2026-09-23", topic: "Topic 9.8: Invasive Species" },
  { id: "apes-topic-9-9", file: "quizzes-apes/topic-9-9.js", date: "2026-09-23", topic: "Topic 9.9: Endangered Species" },
  { id: "apes-topic-9-10", file: "quizzes-apes/topic-9-10.js", date: "2026-09-23", topic: "Topic 9.10: Human Impacts on Biodiversity" },

];
