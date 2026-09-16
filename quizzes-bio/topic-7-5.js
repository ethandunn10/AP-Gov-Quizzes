// quizzes-bio/topic-7-5.js
// Unit 7: Natural Selection — Topic 7.5: Hardy-Weinberg Equilibrium
// Registered in quizzes-bio/index.js as "bio-topic-7-5".
window.QUIZ_QUESTIONS = [
  {
    id: "7.5-1",
    question: "In the Hardy-Weinberg equations, p and q represent:",
    options: ["The frequencies of the two alleles at a given gene locus in a population, where p + q = 1", "The number of individuals in a population", "The rate of mutation", "Two different species"],
    correctIndex: 0,
    explanation: "In Hardy-Weinberg analysis, p and q represent the frequencies of the two alleles (e.g., dominant and recessive) at a locus, and together they must add up to 1 (100% of alleles)."
  },
  {
    id: "7.5-2",
    question: "The Hardy-Weinberg genotype equation p² + 2pq + q² = 1 represents the expected frequencies of:",
    options: ["Homozygous dominant, heterozygous, and homozygous recessive genotypes, respectively", "Three different alleles at one locus", "Three separate populations", "Three types of mutations"],
    correctIndex: 0,
    explanation: "p² is the expected frequency of homozygous dominant individuals, 2pq is heterozygous individuals, and q² is homozygous recessive individuals, assuming the population is in Hardy-Weinberg equilibrium."
  },
  {
    id: "7.5-3",
    question: "Which of the following is NOT one of the conditions required for a population to be in true Hardy-Weinberg equilibrium?",
    options: ["No mutation occurring", "Random mating throughout the population", "Ongoing natural selection actively favoring certain alleles", "No gene flow into or out of the population"],
    correctIndex: 2,
    explanation: "Hardy-Weinberg equilibrium assumes no selection is occurring (along with no mutation, no gene flow, random mating, and a very large population size); if selection is acting, allele frequencies are expected to change, violating equilibrium."
  },
  {
    id: "7.5-4",
    question: "The Hardy-Weinberg principle is most useful to biologists as:",
    options: ["A way to guarantee no evolution ever occurs in real populations", "A theoretical null model — deviations between observed and expected genotype frequencies suggest evolutionary forces are acting", "A method for cloning genes", "A tool only used in molecular biotechnology labs"],
    correctIndex: 1,
    explanation: "Hardy-Weinberg equilibrium describes what genotype frequencies would look like if no evolution were occurring; comparing real, observed frequencies to this expectation helps detect and identify evolutionary forces at work."
  },
  {
    id: "7.5-5",
    question: "If a recessive allele has a frequency (q) of 0.2 in a population at Hardy-Weinberg equilibrium, what is the expected frequency of heterozygous individuals?",
    options: ["0.04", "0.32", "0.64", "0.2"],
    correctIndex: 1,
    explanation: "With q = 0.2, p = 1 - 0.2 = 0.8. Heterozygote frequency = 2pq = 2(0.8)(0.2) = 0.32."
  },
  {
    id: "7.5-6",
    question: "In practice, most real populations do not perfectly satisfy Hardy-Weinberg assumptions because:",
    options: ["Mutation, migration, selection, and non-random mating are common in nature", "All real populations are infinitely large", "Natural selection never actually occurs", "Mating is always completely random in every species"],
    correctIndex: 0,
    explanation: "Real populations typically experience some mutation, gene flow, natural selection, genetic drift (finite population size), or non-random mating, meaning true Hardy-Weinberg equilibrium is rarely, if ever, perfectly met in nature."
  },
  {
    id: "7.5-7",
    question: "Suppose observed genotype frequencies in a population differ significantly from those predicted by the Hardy-Weinberg equation. This is best interpreted as evidence that:",
    options: ["The population is definitely going extinct", "One or more evolutionary forces (such as selection, drift, or non-random mating) may be acting on the population", "The gene in question does not exist", "The population has zero genetic variation"],
    correctIndex: 1,
    explanation: "A mismatch between observed and Hardy-Weinberg-expected genotype frequencies suggests that assumptions of the model are being violated — commonly because an evolutionary force like selection or non-random mating is influencing the population."
  },
  {
    id: "7.5-8",
    question: "If a recessive genetic disorder occurs in 1 out of every 10,000 individuals (q² = 0.0001) in a Hardy-Weinberg population, approximately what fraction of the population are carriers (heterozygotes)?",
    options: ["About 0.01%", "About 2%", "About 50%", "About 99%"],
    correctIndex: 1,
    explanation: "q² = 0.0001, so q = 0.01 and p ≈ 0.99. Carrier frequency = 2pq ≈ 2(0.99)(0.01) ≈ 0.0198, or about 2% of the population."
  },
  {
    id: "7.5-9",
    question: "Under Hardy-Weinberg assumptions, what happens to allele frequencies from one generation to the next?",
    options: ["They remain constant, since no evolutionary forces are acting", "They always increase for the dominant allele", "They randomly fluctuate wildly", "They immediately reach 100% for one allele"],
    correctIndex: 0,
    explanation: "A key implication of Hardy-Weinberg equilibrium is that, absent evolutionary forces, allele frequencies stay constant generation after generation — meaning no evolution is occurring at that locus."
  },
  {
    id: "7.5-10",
    question: "Hardy-Weinberg calculations are commonly applied to estimate:",
    options: ["The exact number of species in an ecosystem", "The frequency of carriers for a recessive genetic disorder in a population", "The rate of photosynthesis in plants", "The structure of a cell membrane"],
    correctIndex: 1,
    explanation: "By knowing the frequency of affected (homozygous recessive) individuals for a genetic disorder, researchers can use Hardy-Weinberg equations to estimate q, p, and therefore the expected frequency of unaffected carriers in the population."
  },
];
