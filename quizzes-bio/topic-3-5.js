// quizzes-bio/topic-3-5.js
// Unit 3: Cellular Energetics — Topic 3.5: Cellular Respiration
// Registered in quizzes-bio/index.js as "bio-topic-3-5".
window.QUIZ_QUESTIONS = [
  {
    id: "3.5-1",
    question: "The overall process of cellular respiration converts glucose and oxygen into:",
    options: ["Carbon dioxide, water, and ATP", "Glucose and oxygen again", "Only heat with no ATP produced", "Chlorophyll and light energy"],
    correctIndex: 0,
    explanation: "Cellular respiration breaks down glucose in the presence of oxygen to produce carbon dioxide, water, and ATP: C6H12O6 + 6O2 → 6CO2 + 6H2O + ATP."
  },
  {
    id: "3.5-2",
    question: "Glycolysis, the first stage of cellular respiration, occurs in the:",
    options: ["Mitochondrial matrix", "Cytoplasm (cytosol)", "Inner mitochondrial membrane", "Nucleus"],
    correctIndex: 1,
    explanation: "Glycolysis takes place in the cytoplasm, splitting one glucose molecule into two pyruvate molecules while producing a small net gain of ATP and NADH."
  },
  {
    id: "3.5-3",
    question: "The citric acid cycle (Krebs cycle) occurs in the:",
    options: ["The cytoplasm", "Mitochondrial matrix", "Thylakoid membrane", "The cell nucleus"],
    correctIndex: 1,
    explanation: "The citric acid cycle takes place in the mitochondrial matrix, further breaking down the products of glycolysis and generating NADH, FADH2, ATP, and CO2."
  },
  {
    id: "3.5-4",
    question: "The electron transport chain and ATP synthase, responsible for the majority of ATP production in cellular respiration, are located in the:",
    options: ["Mitochondrial matrix", "Inner mitochondrial membrane", "Outer mitochondrial membrane", "Cytoplasm"],
    correctIndex: 1,
    explanation: "The electron transport chain complexes and ATP synthase are embedded in the inner mitochondrial membrane, where the proton gradient established by electron transport drives ATP synthesis via chemiosmosis."
  },
  {
    id: "3.5-5",
    question: "NADH and FADH2 produced during glycolysis and the citric acid cycle contribute to ATP production by:",
    options: ["Directly becoming ATP molecules themselves", "Donating electrons to the transport chain", "Breaking down glucose directly into ATP", "Splitting water molecules apart"],
    correctIndex: 1,
    explanation: "NADH and FADH2 carry high-energy electrons to the electron transport chain; as electrons pass along the chain, energy is used to pump protons, creating a gradient that ATP synthase uses to generate ATP (chemiosmosis)."
  },
  {
    id: "3.5-6",
    question: "Oxygen's role in cellular respiration is to:",
    options: ["Acting as the final electron acceptor", "Directly synthesizing ATP with no other steps", "Binding to glucose to start glycolysis", "Replacing NADH in the citric acid cycle"],
    correctIndex: 0,
    explanation: "Oxygen acts as the final electron acceptor in the electron transport chain, combining with electrons and protons to form water, which keeps the chain running by clearing away electrons."
  },
  {
    id: "3.5-7",
    question: "In the absence of oxygen, many cells can undergo fermentation, which primarily serves to:",
    options: ["Produce large quantities of ATP directly", "Regenerate NAD+ so glycolysis can continue", "Replace the need for glycolysis entirely", "Power the electron transport chain without O2"],
    correctIndex: 1,
    explanation: "Fermentation regenerates NAD+ from NADH (without using the electron transport chain), allowing glycolysis to continue functioning and producing a small, but vital, amount of ATP under anaerobic conditions."
  },
  {
    id: "3.5-8",
    question: "Lactic acid fermentation, which occurs in human muscle cells during intense exercise, converts pyruvate into:",
    options: ["Ethanol and carbon dioxide", "Lactate, regenerating NAD+", "Glucose and water", "Oxygen and water"],
    correctIndex: 1,
    explanation: "In lactic acid fermentation, pyruvate is reduced to lactate, a process that regenerates NAD+ needed to keep glycolysis running when oxygen is scarce, such as during intense exercise."
  },
  {
    id: "3.5-9",
    question: "Compared to fermentation alone, aerobic cellular respiration produces substantially more ATP per glucose molecule because it:",
    options: ["Skips glycolysis entirely", "It fully oxidizes glucose to CO2", "Uses only the first step of glycolysis", "Does not require oxygen at all"],
    correctIndex: 1,
    explanation: "Aerobic respiration completely breaks down glucose through the citric acid cycle and generates a large proton gradient via the electron transport chain, extracting far more energy (and thus more ATP) than the partial breakdown that occurs in fermentation."
  },
  {
    id: "3.5-10",
    question: "Cyanide poisoning is lethal because cyanide blocks a key protein complex in the electron transport chain, which would most directly result in:",
    options: ["An increase in ATP production", "Electron transport halts, ATP falls", "Immediate increase in oxygen consumption", "No effect on cellular respiration at all"],
    correctIndex: 1,
    explanation: "By blocking electron transport chain function, cyanide prevents the proton gradient from being maintained, halting ATP synthase activity and causing a life-threatening drop in cellular ATP production."
  },
];
