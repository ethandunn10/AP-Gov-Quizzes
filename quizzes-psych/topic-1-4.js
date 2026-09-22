// AP Psychology — Unit 1 (Biological Bases of Behavior)
// Registered in quizzes-psych/index.js as "psych-topic-1-4".
// Topic 1.4 — The Brain

window.QUIZ_QUESTIONS = [
  {
    id: "1-4-1",
    question: "A patient can understand speech perfectly but produces slow, effortful, broken sentences. The damage is most likely in",
    options: [
      "Wernicke's area in the left temporal lobe",
      "the occipital lobe near the visual cortex",
      "the cerebellum at the base of the brain",
      "Broca's area in the left frontal lobe"
    ],
    correctIndex: 3,
    explanation: "Broca's area supports speech production, so damage there leaves comprehension intact while output becomes labored. Wernicke's damage produces the reverse profile — fluent but meaningless speech with poor comprehension."
  },
  {
    id: "1-4-2",
    question: "After a head injury a previously reliable employee becomes impulsive, makes poor decisions, and struggles to plan ahead, though memory and language are intact. The damage most likely involves the",
    options: [
      "hippocampus",
      "frontal lobe",
      "occipital lobe",
      "medulla"
    ],
    correctIndex: 1,
    explanation: "Executive functions — planning, judgment, and impulse control — are frontal lobe work, the pattern famously seen in Phineas Gage. Hippocampal damage would have shown up as a memory deficit, which this patient does not have."
  },
  {
    id: "1-4-3",
    question: "A researcher wants to know which brain regions are active while participants solve math problems. The most appropriate tool is",
    options: [
      "a CT scan, which produces a static structural image",
      "an fMRI, which tracks blood flow during a task",
      "a lesion study, which removes tissue and observes deficits",
      "an EEG electrode cap, which localizes activity to deep structures"
    ],
    correctIndex: 1,
    explanation: "fMRI shows function over time by tracking oxygenated blood flow, which is what a task-based question requires. CT gives structure but no activity, and EEG records electrical activity with excellent timing but poor depth localization."
  },
  {
    id: "1-4-4",
    question: "Damage to the hippocampus in patients like H.M. produces an inability to form new long-term memories while older memories remain. This shows that the hippocampus is",
    options: [
      "necessary for consolidating new memories rather than storing old ones",
      "the permanent storage site for all long-term memories",
      "responsible for retrieving memories formed before the injury",
      "involved in the emotional coloring of memories but not their formation"
    ],
    correctIndex: 0,
    explanation: "H.M. retained childhood memories but could not form new ones, so the hippocampus must handle consolidation rather than serve as the warehouse. If it were the storage site, old memories would have vanished along with the ability to form new ones."
  },
  {
    id: "1-4-5",
    question: "A brainstem injury that disrupts breathing and heart rate most likely involves the",
    options: [
      "amygdala",
      "thalamus",
      "corpus callosum",
      "medulla"
    ],
    correctIndex: 3,
    explanation: "The medulla sits atop the spinal cord and controls the vital automatic functions that keep a body alive. The thalamus is nearby but serves as a sensory relay station, so damage there would disrupt incoming sensation rather than breathing."
  },
  {
    id: "1-4-6",
    question: "In split-brain patients whose corpus callosum has been severed, an image flashed to the left visual field cannot be named aloud, though the left hand can select the matching object. This happens because",
    options: [
      "the left hemisphere received the image but lost its connection to language",
      "the surgery destroyed the visual cortex in the right hemisphere",
      "the right hemisphere processed the image but cannot access speech centers",
      "the left hand is controlled by the same hemisphere that speaks"
    ],
    correctIndex: 2,
    explanation: "Left visual field input goes to the right hemisphere, which controls the left hand but usually lacks speech, and the severed corpus callosum blocks transfer to the speaking left hemisphere. The patient's knowledge is real — it simply cannot reach the system that talks."
  },
  {
    id: "1-4-7",
    question: "A stroke patient loses feeling in the right hand. Damage is most likely in the",
    options: [
      "right somatosensory cortex of the parietal lobe",
      "left motor cortex of the frontal lobe",
      "left somatosensory cortex of the parietal lobe",
      "right auditory cortex of the temporal lobe"
    ],
    correctIndex: 2,
    explanation: "Sensory and motor pathways cross, so the left hemisphere serves the right side of the body, and touch is processed in the parietal somatosensory strip. Motor cortex damage would have impaired movement rather than sensation."
  },
  {
    id: "1-4-8",
    question: "After losing sight early in life, a person's visual cortex becomes responsive to touch and sound. This best illustrates",
    options: [
      "neuroplasticity, the brain's reorganization of function",
      "neurogenesis, the growth of entirely new neurons",
      "hemispheric specialization for different types of input",
      "the all-or-none firing pattern of cortical neurons"
    ],
    correctIndex: 0,
    explanation: "Plasticity is the reassignment of cortical territory to new uses, and it is strongest when loss occurs early. Neurogenesis refers specifically to growing new neurons, a narrower phenomenon than the rewiring described here."
  },
  {
    id: "1-4-9",
    question: "The limbic system structure most directly involved in the rapid detection of threat and the fear response is the",
    options: [
      "amygdala",
      "hypothalamus",
      "cerebellum",
      "reticular formation"
    ],
    correctIndex: 0,
    explanation: "The amygdala flags threatening stimuli and drives fear reactions, sometimes before the cortex has identified what the threat is. The hypothalamus is also limbic but regulates hunger, thirst, temperature, and hormone release through the pituitary."
  },
  {
    id: "1-4-10",
    question: "An EEG study reports that a certain brain wave pattern accompanies a task, while an fMRI study of the same task reports activity in a specific structure. The strongest reason to run both is that",
    options: [
      "EEG measures blood flow while fMRI measures electrical output",
      "EEG offers precise timing while fMRI offers precise location",
      "fMRI works only on animals while EEG works on human participants",
      "combining two correlational methods establishes a causal claim"
    ],
    correctIndex: 1,
    explanation: "The two methods have complementary strengths: EEG resolves events millisecond by millisecond but cannot pinpoint deep structures, while fMRI localizes well but lags by seconds. Stacking two correlational measures still does not demonstrate causation — only manipulation can do that."
  }
];
