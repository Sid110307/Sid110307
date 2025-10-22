---
layout: single
title: "Publications"
permalink: /publications/
author_profile: true
---

## 🧠 Patents

{% for patent in site.data.publications.patents %}

### {{ patent.title }}

**Patent Number:** {{ patent.number }}  
**Date:** {{ patent.date }}  
**Authors:** {{ patent.authors | join: ", " }}
{% endfor %}

---

*Last updated: {{ site.time | date: "%B %d, %Y" }}*
