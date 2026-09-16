// quizzes-bio/topic-6-2.js
// Unit 6: Gene Expression and Regulation — Topic 6.2: DNA Replication
// Registered in quizzes-bio/index.js as "bio-topic-6-2".
window.QUIZ_QUESTIONS = [
  {
    id: "6.2-1",
    question: "The Meselson-Stahl experiment demonstrated that DNA replicates by which mechanism?",
    options: ["Conservative copying", "Dispersive copying", "Semiconservative", "Random copying"],
    correctIndex: 2,
    explanation: "Using density-labeled nitrogen isotopes, Meselson and Stahl showed each new DNA molecule contains one original (parental) strand and one newly synthesized strand — the semiconservative model."
  },
  {
    id: "6.2-2",
    question: "Which enzyme unwinds the DNA double helix at the replication fork?",
    options: ["DNA ligase", "Helicase", "Primase", "DNA polymerase I"],
    correctIndex: 1,
    explanation: "Helicase breaks the hydrogen bonds between base pairs, unwinding the double helix and creating the replication fork."
  },
  {
    id: "6.2-3",
    question: "What is the role of primase during DNA replication?",
    options: ["It makes a short RNA primer to start", "It joins Okazaki fragments together", "It unwinds the DNA double helix", "It removes supercoiling ahead of the fork"],
    correctIndex: 0,
    explanation: "DNA polymerase cannot start a new strand from scratch; primase lays down a short RNA primer that gives DNA polymerase a 3' end to extend from."
  },
  {
    id: "6.2-4",
    question: "On the leading strand, DNA polymerase synthesizes new DNA:",
    options: ["Discontinuously, in short fragments", "Continuously, toward the moving fork", "In the 3' to 5' direction only", "Only after the lagging strand is done"],
    correctIndex: 1,
    explanation: "The leading strand is synthesized continuously in one direction as the fork opens, since it's oriented so DNA polymerase can add nucleotides in the 5' to 3' direction toward the fork."
  },
  {
    id: "6.2-5",
    question: "Why is the lagging strand synthesized in short Okazaki fragments?",
    options: ["Polymerase can only build 5' to 3'", "Because the lagging strand has no template", "Because ligase cuts the strand into pieces", "Because helicase unwinds only part at a time"],
    correctIndex: 0,
    explanation: "Since the lagging strand's template runs in the opposite orientation, DNA polymerase must repeatedly restart synthesis (each requiring a new primer) in short fragments, moving away from the fork each time."
  },
  {
    id: "6.2-6",
    question: "What happens to the RNA primers left behind after Okazaki fragment synthesis?",
    options: ["They remain permanently in the final DNA", "DNA polymerase I replaces them with DNA", "They are translated into protein", "Helicase degrades them immediately"],
    correctIndex: 1,
    explanation: "DNA polymerase I removes the RNA primers and replaces them with DNA nucleotides, after which ligase seals the remaining gaps."
  },
  {
    id: "6.2-7",
    question: "Which enzyme seals the gaps between Okazaki fragments by forming the final phosphodiester bonds?",
    options: ["DNA ligase", "Topoisomerase", "Helicase", "Primase"],
    correctIndex: 0,
    explanation: "DNA ligase joins adjacent DNA fragments by catalyzing the formation of a phosphodiester bond, creating a continuous strand."
  },
  {
    id: "6.2-8",
    question: "DNA replication in eukaryotic chromosomes typically proceeds:",
    options: ["From a single origin, in one direction", "From multiple origins, bidirectionally", "Without any origin of replication", "Only in mitosis, never in interphase"],
    correctIndex: 1,
    explanation: "Eukaryotic chromosomes have many origins of replication, and at each origin, two replication forks move outward in opposite directions, speeding up replication of the large genome."
  },
  {
    id: "6.2-9",
    question: "DNA polymerase's proofreading function primarily relies on its ability to:",
    options: ["Add random nucleotides quickly", "Remove mismatched nucleotides", "Synthesize the RNA primers", "Unwind the DNA double helix"],
    correctIndex: 1,
    explanation: "DNA polymerase checks each newly added base pair; if it detects a mismatch, its exonuclease activity removes the incorrect nucleotide before continuing synthesis, greatly increasing replication accuracy."
  },
  {
    id: "6.2-10",
    question: "Topoisomerase functions during replication to:",
    options: ["Relieve supercoiling ahead of the fork", "Add nucleotides to the growing strand", "Synthesize the RNA primer strand", "Join Okazaki fragments together"],
    correctIndex: 0,
    explanation: "As helicase unwinds the double helix, tension builds up ahead of the fork; topoisomerase cuts, relieves, and reseals the DNA to prevent it from becoming overwound or tangled."
  },
];
