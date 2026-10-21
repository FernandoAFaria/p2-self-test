import { test } from "node:test";
import assert from "node:assert/strict";
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

test("first-look article renders exact byline and body", () => {
  assert.equal(renderArticle("first-look"), "<article><h1>A First Look at the Season</h1><p>By Dana Reyes, Senior Editor</p><p>Opening notes on the season ahead.</p></article>");
});

test("field-notes article renders exact byline and body", () => {
  assert.equal(renderArticle("field-notes"), "<article><h1>Field Notes from the Conference</h1><p>By Sam Patel, Staff Writer</p><p>What we heard on the floor.</p></article>");
});

test("year-in-review article renders exact byline and body", () => {
  assert.equal(renderArticle("year-in-review"), "<article><h1>The Year in Review</h1><p>By Lee Chen, Managing Editor</p><p>A look back at the biggest stories.</p></article>");
});
