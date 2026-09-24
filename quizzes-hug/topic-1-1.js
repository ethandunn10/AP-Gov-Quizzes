// AP Human Geography — Unit 1 (Thinking Geographically)
// Registered in quizzes-hug/index.js as "hug-topic-1-1".
// Topic 1.1 — Introduction to Maps

window.QUIZ_QUESTIONS = [
  {
    id: "1-1-1",
    question: "A reference map is distinguished from a thematic map because it primarily shows",
    options: [
      "the spatial distribution of a single variable across an area",
      "locations of features such as boundaries, cities, and roads",
      "the movement of people between two or more regions",
      "statistical relationships between two unrelated variables"
    ],
    correctIndex: 1,
    explanation: "Reference maps answer 'where is it', showing physical and political features for navigation and orientation. Thematic maps answer 'how does this vary', displaying one variable's pattern."
  },
  {
    id: "1-1-2",
    question: "A choropleth map displays data by",
    options: [
      "placing dots where individual occurrences of a phenomenon are found",
      "distorting the size of areas to represent a variable's magnitude",
      "shading predefined areas according to a statistical value",
      "connecting points of equal value with continuous lines"
    ],
    correctIndex: 2,
    explanation: "Choropleth maps color counties, states, or countries by rate or density, which makes them easy to read but dependent on the units chosen. Dot density, cartogram, and isoline maps use the other methods listed."
  },
  {
    id: "1-1-3",
    question: "A cartogram distorts geographic space in order to",
    options: [
      "preserve the true shape of every landmass being represented",
      "show elevation change across a continuous surface",
      "display the shortest travel route between two locations",
      "size areas by a variable's value rather than land area"
    ],
    correctIndex: 3,
    explanation: "A population cartogram makes densely populated countries large and sparsely populated ones small, which emphasizes the data over the geography. Shape and area accuracy are deliberately sacrificed."
  },
  {
    id: "1-1-4",
    question: "All flat maps necessarily contain distortion because",
    options: [
      "a spherical surface cannot be flattened without error",
      "cartographers lack sufficiently accurate measurement instruments",
      "map projections were standardized only in the twentieth century",
      "satellite imagery cannot capture the entire earth at one time"
    ],
    correctIndex: 0,
    explanation: "Flattening a sphere inevitably distorts some combination of shape, area, distance, and direction. Every projection chooses which properties to preserve and which to sacrifice."
  },
  {
    id: "1-1-5",
    question: "The Mercator projection is useful for navigation but criticized because it",
    options: [
      "distorts direction, making compass bearings unreliable at sea",
      "greatly exaggerates the size of landmasses at high latitudes",
      "cannot represent any landmass located near the equator",
      "shows the earth's surface without any distortion at all"
    ],
    correctIndex: 1,
    explanation: "Mercator preserves direction, which is why sailors used it, but it inflates Greenland and Europe relative to equatorial regions. Critics argue that exaggeration carries political implications."
  },
  {
    id: "1-1-6",
    question: "Map scale refers to",
    options: [
      "the total geographic area that a given map covers",
      "the number of colors used to display a single variable",
      "the relationship between map distance and ground distance",
      "the projection method used in constructing the map"
    ],
    correctIndex: 2,
    explanation: "A representative fraction such as 1:24,000 states how much ground one map unit represents. Large-scale maps show small areas in detail, while small-scale maps show large areas generally."
  },
  {
    id: "1-1-7",
    question: "An isoline map is best suited for displaying",
    options: [
      "continuous data such as elevation or temperature",
      "the exact location of individual retail businesses in a city",
      "political boundaries between neighboring sovereign states",
      "the volume of trade flowing between two distant countries"
    ],
    correctIndex: 0,
    explanation: "Contour and isotherm lines connect points of equal value, which works for phenomena that vary smoothly across space. Discrete locations and flows call for dot or flow maps instead."
  },
  {
    id: "1-1-8",
    question: "A dot density map can mislead readers because",
    options: [
      "each dot always represents exactly one individual occurrence",
      "dot placement within an area may not reflect actual locations",
      "it cannot display more than one variable on a single map",
      "the dots are always distributed evenly across the mapped area"
    ],
    correctIndex: 1,
    explanation: "Dots are often scattered within an enumeration unit rather than placed at true locations, which can suggest precision that does not exist. Each dot also frequently represents many occurrences."
  },
  {
    id: "1-1-9",
    question: "A geographer studying commuting patterns between suburbs and a city center would best use",
    options: [
      "a choropleth map shading each suburb by median household income",
      "an isoline map showing elevation across the metropolitan area",
      "a cartogram sizing each suburb by its total land area",
      "a flow map with lines whose width shows the volume of movement"
    ],
    correctIndex: 3,
    explanation: "Flow maps are designed to show movement between places, with line thickness encoding volume. The other map types display distributions or surfaces rather than interaction."
  },
  {
    id: "1-1-10",
    question: "The claim that all maps are subjective rests on the argument that cartographers must",
    options: [
      "choose projection, scale, symbols, and what to include or omit",
      "deliberately falsify data in order to make maps readable",
      "avoid using any statistical information in map construction",
      "produce maps that contain no distortion of any geographic property"
    ],
    correctIndex: 0,
    explanation: "Every map reflects decisions about emphasis, categories, and framing that shape the reader's impression. Recognizing those choices is different from claiming maps are dishonest."
  }
];
