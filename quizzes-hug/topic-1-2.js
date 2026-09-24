// AP Human Geography — Unit 1 (Thinking Geographically)
// Registered in quizzes-hug/index.js as "hug-topic-1-2".
// Topic 1.2 — Geographic Data

window.QUIZ_QUESTIONS = [
  {
    id: "1-2-1",
    question: "Geographic Information Systems (GIS) are distinguished by their ability to",
    options: [
      "determine a user's absolute location using satellite signals",
      "capture images of the earth's surface from orbiting satellites",
      "layer and analyze multiple spatial data sets together",
      "record the personal observations of a single field researcher"
    ],
    correctIndex: 2,
    explanation: "GIS overlays data such as soils, roads, and population so that relationships between layers can be analyzed. GPS handles location and remote sensing handles imagery."
  },
  {
    id: "1-2-2",
    question: "Remote sensing refers to",
    options: [
      "collecting data about the earth from satellites or aircraft",
      "interviewing residents about their perceptions of a neighborhood",
      "calculating a location's coordinates using satellite triangulation",
      "storing and querying spatial data in a layered database"
    ],
    correctIndex: 0,
    explanation: "Sensors gather information without physical contact, which makes monitoring deforestation, urban growth, and crops practical at large scale. GPS and GIS perform different functions."
  },
  {
    id: "1-2-3",
    question: "The Global Positioning System (GPS) functions by",
    options: [
      "photographing the earth's surface at regular time intervals",
      "using signals from several satellites to fix a position",
      "combining census data with digital boundary information",
      "measuring the reflectance of different land cover types"
    ],
    correctIndex: 1,
    explanation: "Receivers calculate position from the timing of signals from several satellites at once. That absolute location can then be fed into GIS for analysis."
  },
  {
    id: "1-2-4",
    question: "Qualitative geographic data would most likely include",
    options: [
      "census counts of population by age and sex",
      "satellite measurements of average surface temperature",
      "statistical records of agricultural yield per hectare",
      "interviews and field observations about place meaning"
    ],
    correctIndex: 3,
    explanation: "Qualitative data captures experience, perception, and meaning that numbers cannot express. Quantitative data measures and counts, and most research uses both."
  },
  {
    id: "1-2-5",
    question: "A national census is a valuable geographic data source primarily because it",
    options: [
      "provides systematic population data at consistent units",
      "records the daily movements of every individual resident",
      "is collected continuously rather than at fixed intervals",
      "measures physical characteristics of the natural environment"
    ],
    correctIndex: 0,
    explanation: "Counting everyone by standardized geographic units makes comparison across places and over time possible. Its main limitations are the interval between counts and possible undercounting."
  },
  {
    id: "1-2-6",
    question: "Which is a significant limitation of census data?",
    options: [
      "It cannot be mapped or displayed using any GIS software",
      "It records only the physical geography of a country",
      "Undercounting of mobile or marginalized groups is common",
      "It is collected too frequently to allow long-term comparison"
    ],
    correctIndex: 2,
    explanation: "People without stable addresses, undocumented residents, and those distrustful of government are systematically missed. That undercount then affects funding and representation."
  },
  {
    id: "1-2-7",
    question: "Crowdsourced geographic data, such as user-contributed map edits, offers the advantage of",
    options: [
      "guaranteed accuracy verified by professional surveyors",
      "rapid, detailed updating especially in under-mapped areas",
      "complete coverage of every location on the earth's surface",
      "the elimination of any need for satellite or census data"
    ],
    correctIndex: 1,
    explanation: "Volunteers mapped Haiti after the 2010 earthquake far faster than official agencies could. The tradeoff is uneven quality and coverage biased toward areas with active contributors."
  },
  {
    id: "1-2-8",
    question: "A city planner deciding where to locate a new fire station would use GIS to",
    options: [
      "overlay road networks, response times, and population density",
      "photograph the proposed building site from a low-flying aircraft",
      "determine the precise latitude and longitude of the site",
      "interview residents about their memories of past fires"
    ],
    correctIndex: 0,
    explanation: "Combining layers reveals which locations minimize response time for the most residents. The other tools supply inputs but do not perform the spatial analysis."
  },
  {
    id: "1-2-9",
    question: "Geospatial data raises privacy concerns primarily because it can",
    options: [
      "be displayed only at very coarse levels of spatial aggregation",
      "be collected exclusively by national government agencies",
      "track individual movement and reveal patterns of daily life",
      "represent only physical features rather than human activity"
    ],
    correctIndex: 2,
    explanation: "Phone location histories can reveal home, workplace, health visits, and associations with striking precision. That capability is why data aggregation and retention rules matter."
  },
  {
    id: "1-2-10",
    question: "A researcher combining census statistics with resident interviews is using",
    options: [
      "mixed methods, pairing quantitative and qualitative work",
      "remote sensing, since both sources are gathered at a distance",
      "purely quantitative analysis of two numerical data sets",
      "an approach that cannot be represented in any GIS system"
    ],
    correctIndex: 0,
    explanation: "Numbers show what the pattern is while interviews help explain why it exists and how residents experience it. Combining both is standard practice in human geography."
  }
];
