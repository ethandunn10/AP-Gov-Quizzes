# AP Gov Practice Quizzes

A free, static website with weekly AP US Government practice quizzes.
Plain HTML/CSS/JavaScript -- no build step, no framework, no backend.

## Previewing locally

Just open `index.html` in a browser (double-click it, or drag it into a
browser window). Everything, including the quiz data files, is loaded via
plain `<script>` tags, so it works straight from disk -- no local server
required.

If you'd rather run a local server (optional), any of these work from this
folder:

```
npx serve
# or
python3 -m http.server
```

## Adding a new week's quiz

Two steps, no other code to touch:

1. **Create the data file.** Copy `quizzes/week-1.js` to `quizzes/week-2.js`
   (or whatever the next number is) and replace the questions. Each
   question needs `question`, exactly 4 `options`, a `correctIndex` (0-3),
   and a short `explanation`.

2. **Register it.** Open `quizzes/index.js` and add one entry to the
   `QUIZ_LIST` array:

   ```js
   {
     id: "week-2",       // must match the file name: quizzes/week-2.js
     date: "2026-09-01", // YYYY-MM-DD, used for sorting and display
     topic: "Federalism",
   },
   ```

That's it. The homepage lists it automatically (newest first, by date),
and it's playable at `quiz.html?week=week-2`.

## How the quiz page works

`quiz.html` is a single reusable template used for every week -- it never
needs to change. It reads `?week=<id>` from the URL, looks up the matching
data file, shuffles the question order and each question's answer order,
and walks the student through one question at a time with immediate
correct/incorrect feedback. At the end it shows a score and lists exactly
which questions were missed, with the correct answers.

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
