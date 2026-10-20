import { articles } from "./articles.js";

export function renderIndex() {
  const items = articles.map((a) => `<li><a href="/articles/${a.slug}">${a.title}</a></li>`).join("");
  return `<h1>Articles</h1><ul>${items}</ul>`;
}

const SITE_TIME_ZONE = "America/New_York";

export function renderArticle(slug) {
  const article = articles.find((a) => a.slug === slug);
  if (!article) return null;
  const published = new Intl.DateTimeFormat("en-US", {
    timeZone: SITE_TIME_ZONE,
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(article.publishedAt));
  return `<article><h1>${article.title}</h1><p>Published ${published}</p><p>${article.body}</p></article>`;
}
