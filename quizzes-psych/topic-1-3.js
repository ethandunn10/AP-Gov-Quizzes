// AP Psychology — Unit 1 (Biological Bases of Behavior)
// Registered in quizzes-psych/index.js as "psych-topic-1-3".
// Topic 1.3 — The Neuron and Neural Firing

window.QUIZ_QUESTIONS = [
  {
    id: "1-3-1",
    question: "A neuron receives many excitatory signals but does not fire until the combined input crosses a critical level, and then fires at full strength. This describes",
    options: [
      "the all-or-none response following a reached threshold",
      "the refractory period that follows each action potential",
      "reuptake of neurotransmitter by the sending neuron",
      "the resting potential maintained across the membrane"
    ],
    correctIndex: 0,
    explanation: "Once threshold is crossed the action potential fires at constant intensity — stronger stimulation produces more frequent firing, not a bigger impulse. The refractory period is the brief recovery window afterward, which is a different part of the cycle."
  },
  {
    id: "1-3-2",
    question: "A toxin blocks the reuptake of serotonin at the synapse. The most likely immediate result is that serotonin",
    options: [
      "is destroyed before it can bind to any receptor site",
      "remains in the synaptic gap and keeps stimulating receptors",
      "stops being produced by the sending neuron entirely",
      "is converted into a different neurotransmitter in the gap"
    ],
    correctIndex: 1,
    explanation: "Reuptake is how the sending neuron vacuums leftover neurotransmitter out of the synapse, so blocking it prolongs the signal — the mechanism behind SSRI antidepressants. Blocking reuptake does not affect how much serotonin the neuron manufactures."
  },
  {
    id: "1-3-3",
    question: "Myelin sheath damage, as occurs in multiple sclerosis, most directly disrupts",
    options: [
      "the production of neurotransmitters in the terminal buttons",
      "the speed at which action potentials travel down the axon",
      "the neuron's ability to receive input at its dendrites",
      "the structural connection between the cell body and nucleus"
    ],
    correctIndex: 1,
    explanation: "Myelin insulates the axon and lets the impulse jump between gaps, so losing it slows or scrambles transmission — producing the coordination and vision symptoms of MS. Neurotransmitter synthesis at the axon terminal is a separate process."
  },
  {
    id: "1-3-4",
    question: "A neuron at rest has more negative charge inside than outside. This resting potential exists because",
    options: [
      "the membrane is selectively permeable and pumps sodium outward",
      "action potentials have depleted all available charged particles",
      "the axon has not yet been myelinated by surrounding glia",
      "inhibitory neurotransmitters are continuously being released"
    ],
    correctIndex: 0,
    explanation: "Selective permeability plus the sodium-potassium pump keeps positively charged sodium concentrated outside, leaving the interior relatively negative and poised to fire. Resting potential is an actively maintained state, not the exhaustion left over from previous firing."
  },
  {
    id: "1-3-5",
    question: "Curare blocks acetylcholine receptors at the junction between neurons and muscles. The predicted effect is",
    options: [
      "muscle spasms, because acetylcholine accumulates in the synapse",
      "heightened pain sensitivity in the affected limbs",
      "no observable effect, since other transmitters substitute",
      "muscle paralysis, because the muscle cannot receive the signal"
    ],
    correctIndex: 3,
    explanation: "An antagonist occupies the receptor without activating it, so the message never lands and the muscle cannot contract. Spasms would follow from an agonist or from blocked breakdown of acetylcholine — the opposite manipulation."
  },
  {
    id: "1-3-6",
    question: "A researcher observes that stronger stimulation of a sensory nerve produces a more intense sensation, even though each action potential is identical in size. The best explanation is that intensity is coded by",
    options: [
      "the rate of firing and the number of neurons firing",
      "larger action potentials traveling along thicker axons",
      "longer refractory periods between successive impulses",
      "a gradual increase in the neuron's resting potential"
    ],
    correctIndex: 0,
    explanation: "Because firing is all-or-none, the nervous system encodes intensity through how often neurons fire and how many are recruited. The size of an individual impulse cannot vary with stimulus strength, so bigger action potentials on thicker axons is ruled out."
  },
  {
    id: "1-3-7",
    question: "Endorphins are best described as neurotransmitters that",
    options: [
      "trigger the fight-or-flight response during sudden danger",
      "regulate the sleep-wake cycle through the pineal gland",
      "enable muscle contraction at the neuromuscular junction",
      "reduce the experience of pain and can produce feelings of euphoria"
    ],
    correctIndex: 3,
    explanation: "Endorphins are the body's own opiate-like painkillers, which is why opiate drugs, chemically similar to them, relieve pain so effectively. Acetylcholine handles muscle contraction and melatonin governs the sleep cycle."
  },
  {
    id: "1-3-8",
    question: "An excitatory signal and an inhibitory signal arrive at a neuron at the same moment. The neuron's response depends on",
    options: [
      "whichever signal physically arrived at the dendrite first",
      "whether the summed input reaches the firing threshold",
      "the type of myelin covering the receiving neuron's axon",
      "the total number of dendrites that particular neuron has"
    ],
    correctIndex: 1,
    explanation: "A neuron adds up excitatory and inhibitory input, and it fires only if the net result crosses threshold. Arrival order does not decide the outcome — the balance of the combined signals does."
  },
  {
    id: "1-3-9",
    question: "Degeneration of neurons that produce dopamine in a motor pathway is most associated with",
    options: [
      "the memory loss characteristic of Alzheimer's disease",
      "the demyelination seen in multiple sclerosis",
      "the tremors and movement difficulties of Parkinson's disease",
      "the mood disturbances treated with SSRI medications"
    ],
    correctIndex: 2,
    explanation: "Loss of dopamine-producing cells in the substantia nigra disrupts motor control, producing Parkinson's tremor and rigidity. Alzheimer's is more closely tied to acetylcholine loss and plaque buildup, so the two should not be confused."
  },
  {
    id: "1-3-10",
    question: "Which sequence correctly orders events in neural transmission?",
    options: [
      "Neurotransmitter released, threshold reached, receptors bind, action potential travels",
      "Action potential travels, threshold reached, receptors bind, neurotransmitter released",
      "Threshold reached, action potential travels the axon, neurotransmitter released, receptors bind",
      "Receptors bind, neurotransmitter released, action potential travels, threshold reached"
    ],
    correctIndex: 2,
    explanation: "Input sums to threshold, the impulse sweeps down the axon, vesicles at the terminal release transmitter, and it crosses the gap to receptors on the next neuron. The common error is placing release before the action potential — nothing is released until the impulse arrives at the terminal."
  }
];
