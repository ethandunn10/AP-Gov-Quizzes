// js/icons.js
// The site's flat line-art icon set, in one place so the subject cards,
// the history page and the insights page all draw from the same marks
// rather than each inlining their own SVG.
//
// Every icon is a list of path `d` strings on a 24x24 grid, drawn with
// stroke="currentColor" and no fill -- so an icon takes its color from
// whatever it sits inside, and hover states come for free. Favicon-level
// simplicity on purpose: these sit next to text at 16-24px and should
// read instantly rather than reward close inspection.
//
// No dependencies. Load before any script that calls AllAPIcons.svg().

(function () {
  const ICONS = {
    // --- Subjects -------------------------------------------------------
    // Capitol: finial, dome, entablature, three columns, steps.
    "ap-gov": [
      "M12 2.5V4",
      "M8 10a4 4 0 0 1 8 0",
      "M6 10h12",
      "M8 10v8M12 10v8M16 10v8",
      "M5 18h14",
      "M3 21h18",
    ],
    // Leaf: outline, midrib, stem.
    "ap-bio": [
      "M5 19c0-8 6-14 14-14 0 8-6 14-14 14z",
      "M5 19 19 5",
      "M5 19l-2 2",
    ],
    // Flag on a staff: staff, waving field, one stripe.
    "ap-ush": [
      "M5 3v18",
      "M5 4.5h13l-3 3.5 3 3.5H5z",
      "M5 8h10",
    ],

    // --- UI -------------------------------------------------------------
    // Clock, for the history page and attempt timestamps.
    clock: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M12 7v5l3.5 2"],
    // Upward trend line with an arrowhead -- strengths.
    trendUp: ["M3 17l6-6 4 4 8-8", "M15 7h6v6"],
    // Downward trend line with an arrowhead -- weak spots.
    trendDown: ["M3 7l6 6 4-4 8 8", "M15 17h6v-6"],
    // Target, for "what to redo".
    target: [
      "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
      "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z",
      "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    ],
    // Rosette, for a mastered topic.
    award: ["M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", "M8.5 14 7 22l5-3 5 3-1.5-8"],
    // Bar chart, for the insights page.
    chart: ["M3 21h18", "M7 21v-7", "M12 21V6", "M17 21v-11"],
    // Circle with a slash of a check -- a completed attempt.
    check: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M8.5 12.5l2.5 2.5 4.5-5"],
    // Open book, for an untouched lesson.
    book: [
      "M3 5.5h6a3 3 0 0 1 3 3V20a2.5 2.5 0 0 0-2.5-2.5H3z",
      "M21 5.5h-6a3 3 0 0 0-3 3V20a2.5 2.5 0 0 1 2.5-2.5H21z",
    ],
  };

  // Builds an <svg> for one icon name, or null if the name is unknown.
  // `className` and `size` are optional (defaults: "icon", 24).
  function svg(name, className, size) {
    const paths = ICONS[name];
    if (!paths) return null;
    const px = String(size || 24);
    const el = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    el.setAttribute("class", className || "icon");
    el.setAttribute("width", px);
    el.setAttribute("height", px);
    el.setAttribute("viewBox", "0 0 24 24");
    el.setAttribute("fill", "none");
    el.setAttribute("stroke", "currentColor");
    el.setAttribute("stroke-width", "1.5");
    el.setAttribute("stroke-linecap", "round");
    el.setAttribute("stroke-linejoin", "round");
    // Decorative throughout -- every icon on this site sits beside text
    // that already says the same thing.
    el.setAttribute("aria-hidden", "true");
    // createElementNS rather than innerHTML so the paths land in the SVG
    // namespace in every browser, not just the lenient ones.
    paths.forEach((d) => {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", d);
      el.appendChild(path);
    });
    return el;
  }

  window.AllAPIcons = { svg, names: Object.keys(ICONS) };
})();
