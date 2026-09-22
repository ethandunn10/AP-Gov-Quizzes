// AP Psychology — Unit 1 (Biological Bases of Behavior)
// Registered in quizzes-psych/index.js as "psych-topic-1-6".
// Topic 1.6 — Sensation

window.QUIZ_QUESTIONS = [
  {
    id: "1-6-1",
    question: "A student stops noticing the hum of a classroom projector after a few minutes. This illustrates",
    options: [
      "sensory adaptation to a constant stimulus",
      "a rise in the absolute threshold for sound",
      "selective attention to a competing stimulus",
      "the just-noticeable difference between two tones"
    ],
    correctIndex: 0,
    explanation: "Receptors reduce their response to unchanging input, freeing attention for changes in the environment. Selective attention is a plausible-sounding alternative, but here the decline happens at the level of the receptors themselves rather than through a deliberate shift of focus."
  },
  {
    id: "1-6-2",
    question: "The minimum intensity at which a person detects a stimulus 50% of the time is that person's",
    options: [
      "difference threshold",
      "sensory adaptation point",
      "signal detection bias",
      "absolute threshold"
    ],
    correctIndex: 3,
    explanation: "Absolute threshold is defined by that 50% detection criterion. The difference threshold is a separate measure — the smallest change between two stimuli a person can notice."
  },
  {
    id: "1-6-3",
    question: "Weber's law predicts that a person lifting a 10-pound weight needs a larger absolute increase to notice a change than someone lifting a 1-pound weight. This is because the difference threshold is",
    options: [
      "a constant proportion of the original stimulus intensity",
      "a fixed quantity regardless of the original intensity",
      "determined entirely by the person's expectations",
      "lower for heavier stimuli than for lighter ones"
    ],
    correctIndex: 0,
    explanation: "Weber's law holds that noticeable change scales with the starting magnitude, so heavier weights require bigger increments. Treating the threshold as a fixed amount is the standard misreading of the law."
  },
  {
    id: "1-6-4",
    question: "An exhausted night-shift nurse listening for a faint patient alarm is more likely to report hearing it when none sounded. Signal detection theory explains this as the influence of",
    options: [
      "a permanent lowering of the absolute threshold",
      "expectations and motivation on the decision criterion",
      "sensory adaptation to background ward noise",
      "transduction failure in the auditory receptors"
    ],
    correctIndex: 1,
    explanation: "Signal detection theory treats detection as a judgment shaped by expectation, motivation, and fatigue, not by sensitivity alone — so a motivated observer accepts weaker evidence and produces more false alarms. Thresholds are not fixed values in this model."
  },
  {
    id: "1-6-5",
    question: "Which sequence correctly describes visual transduction?",
    options: [
      "Light strikes the retina, is focused by the lens, and the optic nerve converts it to neural signals",
      "The optic nerve gathers light, the retina focuses it, and the cornea encodes brightness",
      "Light passes through the lens, strikes the retina, and rods and cones convert it to neural signals",
      "Rods and cones focus light so the lens can transduce it into neural impulses"
    ],
    correctIndex: 2,
    explanation: "Focusing happens first at the cornea and lens, and transduction — the conversion of physical energy into neural code — happens at the retina's photoreceptors. The other options scramble the order or assign transduction to structures that only focus light."
  },
  {
    id: "1-6-6",
    question: "A person can see shapes and movement in very dim light but cannot distinguish colors. This is best explained by the fact that",
    options: [
      "cones outnumber rods in the periphery of the retina",
      "the optic nerve filters out color information at night",
      "rods are more sensitive in low light but do not detect color",
      "the lens loses flexibility when pupils are fully dilated"
    ],
    correctIndex: 2,
    explanation: "Rods handle dim-light and peripheral vision without coding hue, while cones need brighter light to register color and detail. The claim that cones outnumber rods in the periphery is reversed — cones cluster in the fovea."
  },
  {
    id: "1-6-7",
    question: "After staring at a green square, a person looks at white paper and sees a red afterimage. This finding supports",
    options: [
      "opponent-process theory of color vision",
      "trichromatic theory operating at the retina",
      "place theory of pitch perception",
      "the gate-control theory of pain"
    ],
    correctIndex: 0,
    explanation: "Opponent-process theory posits paired channels — red-green, blue-yellow — so fatiguing one side produces its complement as an afterimage. Trichromatic theory explains how three cone types register wavelength, but it does not account for complementary afterimages."
  },
  {
    id: "1-6-8",
    question: "A patient with damage to the hair cells of the cochlea will most likely experience",
    options: [
      "conduction hearing loss caused by a blocked ear canal",
      "sensorineural hearing loss that hearing aids only partly help",
      "complete loss of balance with hearing left intact",
      "temporary hearing loss that resolves once cells regrow"
    ],
    correctIndex: 1,
    explanation: "Hair cell damage is sensorineural: the receptors that transduce sound are gone, and human hair cells do not regenerate, so amplification helps only so much. Conduction loss involves the mechanical path to the cochlea rather than the receptors."
  },
  {
    id: "1-6-9",
    question: "Rubbing a bumped elbow reduces the pain. Gate-control theory explains this by proposing that",
    options: [
      "endorphin production ends once the injury stops worsening",
      "the brain cannot process two sensations at the same moment",
      "pain receptors adapt faster than touch receptors do",
      "touch signals in the spinal cord can close a gate on pain signals"
    ],
    correctIndex: 3,
    explanation: "Gate-control theory places a modulating mechanism in the spinal cord where competing touch input can block pain transmission. The claim that the brain cannot handle two sensations at once is false — the gate operates below the brain, in the cord."
  },
  {
    id: "1-6-10",
    question: "Which of the following is a sensation rather than a perception?",
    options: [
      "Recognizing a friend's face across a crowded gymnasium",
      "Photoreceptors firing in response to particular wavelengths of light",
      "Hearing a familiar melody in a series of separate tones",
      "Judging that a nearby car is closer than a distant one"
    ],
    correctIndex: 1,
    explanation: "Sensation is the detection and transduction of physical energy by receptors; perception is the organization and interpretation that follows. The other three options all require the brain to assemble raw input into meaning."
  }
];
