# AP Gov Practice Quizzes

A free, static website with weekly AP US Government practice quizzes.
Plain HTML/CSS/JavaScript -- no build step, no framework, no backend.

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

Three steps, no other code to touch:

1. **Create the data file.** Copy `quizzes/week-1.js` to `quizzes/week-N.js`
   and replace the questions. Each question needs a stable unique `id`
   (e.g. `"week-4-q1"`, never reused), `question`, exactly 4 `options`, a
   `correctIndex` (0-3), and a short `explanation`.

2. **Register it.** Open `quizzes/index.js` and add one entry to the
   `QUIZ_LIST` array:

   ```js
   {
     id: "week-4",       // must match the file name: quizzes/week-4.js
     date: "2026-09-09", // YYYY-MM-DD, informational only
     topic: "Federalism",
   },
   ```

3. **Add it to a unit.** Open `quizzes/units.js` and add the lesson's id to
   the relevant unit's `lessons` array (or add a new unit entry if it's the
   first lesson in a new unit).

That's it -- it's now listed on that unit's page (`unit.html?unit=<id>`),
playable on its own at `quiz.html?week=week-4&mode=lesson` (10 random
questions), and included in that unit's whole-unit quiz pool.

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
