import { test } from "node:test";
import assert from "node:assert/strict";
import { articles } from "../articles.js";
import { renderIndex, renderArticle } from "../render.js";

test("index lists every article", () => {
  assert.match(renderIndex(), /A First Look at the Season/);
  assert.match(renderIndex(), /The Year in Review/);
});

test("article page shows title and body", () => {
  const html = renderArticle("field-notes");
  assert.match(html, /Field Notes from the Conference/);
  assert.match(html, /What we heard on the floor/);
});

test("unknown article returns null", () => {
  assert.equal(renderArticle("missing"), null);
});

const publishDates = {
  "first-look": "October 1, 2026",
  "field-notes": "October 7, 2026",
  "year-in-review": "October 15, 2026",
};

for (const [slug, date] of Object.entries(publishDates)) {
  test(`article ${slug} shows publish date in America/New_York between title and body`, () => {
    const { title, body } = articles.find((a) => a.slug === slug);
    assert.equal(
      renderArticle(slug),
      `<article><h1>${title}</h1><p>Published ${date}</p><p>${body}</p></article>`
    );
  });
}
