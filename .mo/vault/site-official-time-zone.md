---
name: site-official-time-zone
description: Official site zone and article publish-date display
category: decisions/site
tags: []
updated: 2026-10-20
---
When displaying article publish dates, use America/New_York, the official site time zone chosen by the user on 2026-10-20. Convert stored UTC publishedAt timestamps into that zone using an explicit en-US long date, date only, with a Published prefix (for example, Published October 7, 2026). Keep the stored UTC timestamps unchanged. No time of day or zone label is shown. Nothing in the repository previously defined a site zone; this choice makes field-notes display October 7 instead of its UTC calendar date October 8. Evidence: articles.js:3 stores field-notes as 2026-10-08T03:15:00Z.
