# Claude Code Prompt — Generate the remaining Knotee subjects

Run `claude` in this repo and paste everything below the line.

---

Read `js/subjects.js`, `quizzes-ush/index.js`, `quizzes-ush/units.js`, and
`quizzes-ush/topic-1-1.js` first. AP U.S. History Unit 1 is already built and is
your exact template for everything below. Do not invent a different structure.

## The real conventions (verified — follow exactly)

- One folder per subject at the repo root: `quizzes/` (AP Gov), `quizzes-bio/`
  (AP Bio), `quizzes-ush/` (APUSH). New subjects get `quizzes-<slug>/`.
- Each topic file sets `window.QUIZ_QUESTIONS = [ ... ]` — exactly 10 objects,
  fields `id`, `question`, `options` (exactly 4), `correctIndex` (0-3),
  `explanation`. Loaded on demand, so the global is reused per file.
- Each subject's `index.js` sets its OWN global: `USH_QUIZ_LIST` pattern →
  `<PREFIX>_QUIZ_LIST`. Entries carry `id`, `file`, `date`, `topic`.
- Each subject's `units.js` sets `<PREFIX>_UNITS` with `id`, `name`, `lessons`.
- Lesson and unit ids are GLOBALLY unique via a subject prefix
  (`ush-topic-1-1`, `ush-unit-1`). This is what keeps localStorage progress
  from mixing subjects. Never skip the prefix.
- Register the subject in the `DEFINITIONS` array in `js/subjects.js`.
- Add two `<script>` tags for the new index.js + units.js to ALL FIVE of:
  `index.html`, `unit.html`, `quiz.html`, `history.html`, `insights.html`,
  before `js/subjects.js`.

## Step 1 — verify CED structure, then STOP and report

For each subject, pull the CURRENT College Board CED from
apcentral.collegeboard.org and report exact units, exact numbered topics, topic
count, and question count at 10/topic. Do not assume any subject mirrors
another's shape — APUSH has 105 topics vs AP Gov's 60.

| Subject | Folder | Prefix | Notes |
|---|---|---|---|
| AP U.S. History Units 2-9 | `quizzes-ush/` | `ush` | CED verified — see Appendix A. 98 topics remaining. |
| AP World History: Modern | `quizzes-world/` | `world` | verify |
| AP European History | `quizzes-euro/` | `euro` | verify |
| AP Human Geography | `quizzes-hug/` | `hug` | verify |
| AP Psychology | `quizzes-psych/` | `psych` | verify — CED revised for 2024-25, don't use an older one |
| AP Environmental Science | `quizzes-apes/` | `apes` | verify |
| AP Chemistry | `quizzes-chem/` | `chem` | verify. Use `<sub>`/`<sup>` HTML for formulas — there is NO math renderer in this app. No LaTeX. |

Wait for approval before generating.

## Step 2 — question quality bar

`quizzes-ush/topic-1-1.js` is the bar. Match it.

1. Exactly one defensibly correct option. No "all/none of the above".
2. Distractors are real student misconceptions, not filler.
3. Explanations say why the right answer is right AND why a tempting wrong one
   is wrong. Restating the answer is not an explanation.
4. AP difficulty: analysis and application, not trivia recall.
5. No copyrighted passages. Original or public-domain source text only.
6. Skill topics (e.g. APUSH `1.1 Contextualizing`, `1.7 Causation`) get
   reasoning questions — cause/effect, comparison, contextualization. Do not
   pad them with random recall.
7. Add `// REVIEW:` above any question where you are not confident in the fact.
   Never silently guess.

## Step 3 — validate before reporting done

Print per subject: unit count, lesson count, question count. Verify every file
has exactly 10 questions, every `options` has 4 entries, every `correctIndex`
is 0-3, no duplicate lesson/unit ids repo-wide, every id in units.js exists in
index.js and as a real file. List every `// REVIEW:` flag.

Do NOT commit and do NOT deploy. Leave changes uncommitted.

## Appendix A — APUSH CED (verified Sept 21 2026): 9 units, 105 topics

U1 1491-1607 (7, DONE) · U2 1607-1754 (8) · U3 1754-1800 (13) · U4 1800-1848 (14)
· U5 1844-1877 (12) · U6 1865-1898 (14) · U7 1890-1945 (15) · U8 1945-1980 (15)
· U9 1980-present (7)

**U2** 2.1 Contextualizing Period 2 · 2.2 European Colonization · 2.3 The Regions of the British Colonies · 2.4 Transatlantic Trade · 2.5 Interactions Between American Indians and Europeans · 2.6 Slavery in the British Colonies · 2.7 Colonial Society and Culture · 2.8 Comparison in Period 2

**U3** 3.1 Contextualizing Period 3 · 3.2 The Seven Years' War · 3.3 Taxation Without Representation · 3.4 Philosophical Foundations of the American Revolution · 3.5 The American Revolution · 3.6 The Influence of Revolutionary Ideals · 3.7 The Articles of Confederation · 3.8 The Constitutional Convention and Debates over Ratification · 3.9 The Constitution · 3.10 Shaping a New Republic · 3.11 Developing an American Identity · 3.12 Movement in the Early Republic · 3.13 Continuity and Change in Period 3

**U4** 4.1 Contextualizing Period 4 · 4.2 The Rise of Political Parties and the Era of Jefferson · 4.3 Politics and Regional Interests · 4.4 America on the World Stage · 4.5 Market Revolution: Industrialization · 4.6 Market Revolution: Society and Culture · 4.7 Expanding Democracy · 4.8 Jackson and Federal Power · 4.9 The Development of an American Culture · 4.10 The Second Great Awakening · 4.11 An Age of Reform · 4.12 African Americans in the Early Republic · 4.13 The Society of the South in the Early Republic · 4.14 Causation in Period 4

**U5** 5.1 Contextualizing Period 5 · 5.2 Manifest Destiny · 5.3 The Mexican-American War · 5.4 The Compromise of 1850 · 5.5 Sectional Conflict: Regional Differences · 5.6 Failure of Compromise · 5.7 Election of 1860 and Secession · 5.8 Military Conflict in the Civil War · 5.9 Government Policies During the Civil War · 5.10 Reconstruction · 5.11 Failure of Reconstruction · 5.12 Comparison in Period 5

**U6** 6.1 Contextualizing Period 6 · 6.2 Westward Expansion: Economic Development · 6.3 Westward Expansion: Social and Cultural Development · 6.4 The "New South" · 6.5 Technological Innovation · 6.6 The Rise of Industrial Capitalism · 6.7 Labor in the Gilded Age · 6.8 Immigration and Migration in the Gilded Age · 6.9 Responses to Immigration in the Gilded Age · 6.10 Development of the Middle Class · 6.11 Reform in the Gilded Age · 6.12 Controversies over the Role of Government in the Gilded Age · 6.13 Politics in the Gilded Age · 6.14 Continuity and Change in Period 6

**U7** 7.1 Contextualizing Period 7 · 7.2 Imperialism: Debates · 7.3 The Spanish-American War · 7.4 The Progressives · 7.5 World War I: Military and Diplomacy · 7.6 World War I: Home Front · 7.7 1920s: Innovations in Communication and Technology · 7.8 1920s: Cultural and Political Controversies · 7.9 The Great Depression · 7.10 The New Deal · 7.11 Interwar Foreign Policy · 7.12 World War II: Mobilization · 7.13 World War II: Military · 7.14 Postwar Diplomacy · 7.15 Comparison in Period 7

**U8** 8.1 Contextualizing Period 8 · 8.2 The Cold War from 1945 to 1980 · 8.3 The Red Scare · 8.4 Economy after 1945 · 8.5 Culture after 1945 · 8.6 Early Steps in the Civil Rights Movement (1940s and 1950s) · 8.7 America as a World Power · 8.8 The Vietnam War · 8.9 The Great Society · 8.10 The African American Civil Rights Movement (1960s) · 8.11 The Civil Rights Movement Expands · 8.12 Youth Culture of the 1960s · 8.13 The Environment and Natural Resources from 1968 to 1980 · 8.14 Society in Transition · 8.15 Continuity and Change in Period 8

**U9** 9.1 Contextualizing Period 9 · 9.2 Reagan and Conservatism · 9.3 The End of the Cold War · 9.4 A Changing Economy · 9.5 Migration and Immigration in the 1990s and 2000s · 9.6 Challenges of the 21st Century · 9.7 Causation in Period 9

## Not in this prompt
- **AP Business with Personal Finance** — brand-new CB course. Confirm a public CED exists; if the framework is still moving, skip it.
- **AP Seminar** — no content CED. Skills course: original 150-word argumentative passages + questions on claim ID, evidence quality, fallacies, source credibility, correlation vs causation. Label it in-app as skill practice; the real exam has no MCQ.
