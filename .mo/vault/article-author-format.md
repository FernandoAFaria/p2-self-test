---
name: article-author-format
description: Standard article author byline format and placement
category: decisions/site
tags: []
updated: 2026-10-20
---
When rendering an article page, show the author as "By <authorName>, <authorTitle>" in its own paragraph after the publish date line and before the body. This is the user decision of 2026-10-20: the repository previously defined no standard author format. When no publish date is rendered, the byline follows the heading. Evidence: render.js, renderArticle.
