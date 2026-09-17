# AllAP Practice Quizzes

A free, static website with AP practice quizzes. Plain HTML/CSS/JavaScript
-- no build step, no framework, no backend.

Two subjects are live:

| Subject | Data folder | Registry globals | Units / topics |
| --- | --- | --- | --- |
| AP Government | `quizzes/` | `QUIZ_LIST`, `UNITS` | 5 / 60 |
| AP Biology | `quizzes-bio/` | `BIO_QUIZ_LIST`, `BIO_UNITS` | 8 / 60 |

Each subject keeps its registries under its **own** global names so both
can load on the same page without overwriting each other.
`js/subjects.js` joins them into `window.SUBJECTS` (and the
`window.AllAPSubjects` lookups), and that is what `js/homepage.js`,
`js/unit.js`, `js/quiz.js`, and `js/insights.js` read -- none of
them reference a single subject's globals directly.

Lesson and unit ids are globally unique: every AP Bio id is `bio-`
prefixed (`bio-unit-3`, `bio-topic-3-1`). Both subjects have a "Unit 1"
and a "Topic 1.1", so the prefix is what lets one id identify its own
subject, and what keeps per-lesson progress in `js/progress.js` from
mixing the two subjects together.

## Previewing locally

Open `index.html` in a browser (double-click it, or drag it into a browser
window) -- that's the site's entry point, where a student picks a unit to
quiz on. Everything, including the quiz data files, is loaded via plain
`<script>` tags, so it works straight from disk -- no local server
required.

If you'd rather run a local server (optional), any of these work from this
folder:

```
npx serve
# or
python3 -m http.server
```

## Adding a new lesson

Three steps, no other code to touch. Work inside the folder for the
subject you're adding to -- `quizzes/` for AP Gov, `quizzes-bio/` for
AP Bio.

1. **Create the data file.** Copy an existing topic file in that folder and
   replace the questions. The file must assign its array to
   `window.QUIZ_QUESTIONS` -- that's the contract `js/quiz.js` loads
   against. Each question needs a stable unique `id` (never reused),
   `question`, exactly 4 `options`, a `correctIndex` (0-3), and a short
   `explanation`.

2. **Register it.** Open that folder's `index.js` and add one entry:

   ```js
   // quizzes/index.js -> QUIZ_LIST (AP Gov)
   {
     id: "topic-6-1",    // resolves to quizzes/topic-6-1.js
     date: "2026-09-09", // YYYY-MM-DD, informational only
     topic: "Topic 6.1: Federalism",
   },

   // quizzes-bio/index.js -> BIO_QUIZ_LIST (AP Bio). Bio entries carry an
   // explicit `file`, and ids stay "bio-" prefixed.
   {
     id: "bio-topic-9-1",
     file: "quizzes-bio/topic-9-1.js",
     date: "2026-09-15",
     topic: "Topic 9.1: Something New",
   },
   ```

3. **Add it to a unit.** Open that folder's `units.js` and add the lesson's
   id to the relevant unit's `lessons` array (or add a new unit entry if
   it's the first lesson in a new unit).

That's it -- it's now listed on that unit's page (`unit.html?unit=<id>`),
playable on its own at `quiz.html?week=week-4&mode=lesson` (10 random
questions), and included in that unit's whole-unit quiz pool.

## Adding a whole new subject

1. Create `quizzes-<subject>/` with the topic data files (each assigning
   `window.QUIZ_QUESTIONS`), plus an `index.js` and a `units.js` that
   assign to their own new globals -- never reuse another subject's.
2. Prefix every lesson and unit id so it can't collide with an existing
   subject's.
3. Add one entry to `DEFINITIONS` in `js/subjects.js`.
4. Add the two new `<script src>` tags to `index.html`, `unit.html`, and
   `quiz.html`, **above** `js/subjects.js`.

No page script needs editing -- the subject picker, unit pages, quizzes,
and review nudges all read the joined registry.

## How the quiz page works

`quiz.html` is a single reusable template used for every lesson and unit
-- it never needs to change. It reads one of three URL shapes:

- `?week=<id>` -- every question in that lesson, no cap (the original
  full-length format, still linkable directly).
- `?week=<id>&mode=lesson` -- 10 random questions from just that lesson.
- `?unit=<id>&mode=unit` -- 10 questions pooled from every lesson in that
  unit, weighted toward questions the student has previously missed on
  whole-unit quizzes (tracked locally per anonymous id -- see
  `js/progress.js`).

In every case it shuffles the question order and each question's answer
order, walks the student through one question at a time with immediate
correct/incorrect feedback, and at the end shows a score and lists exactly
which questions were missed, with the correct answers. It also records a
per-lesson score (flagging lessons scored under 70% for a "you might want
to review this again" nudge on the home page and unit page) and, for
whole-unit quizzes, which specific questions to weight back in next time.

## Navigating the site

- `index.html` -- subject picker (one card per subject).
- `index.html?subject=ap-bio` -- that subject's units.
- `unit.html?unit=bio-unit-1` -- that unit's lessons + whole-unit quiz.
- `quiz.html?week=bio-topic-1-1&mode=lesson` -- a single 10-question quiz.

## Deploying

This repo is already connected to a GitHub remote. Push to `main` and,
once it's linked to a Vercel project (Vercel auto-detects it as a plain
static site -- no build command or `vercel.json` needed), it deploys
automatically:

```
git add .
git commit -m "Add week 2 quiz"
git push
```
