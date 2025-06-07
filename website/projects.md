---
layout: single
title: "Selected Projects"
permalink: /projects/
author_profile: true
---

Here are some of my open-source projects across my focus areas:

{% for section in site.data.projects.projects %}

## {{ section.title }}

*{{ section.description }}*

<div class="grid">
    {% for project in section.items %}
    <div class="card column">
        <div class="card-title">
            <a href="{{ project.url }}" target="_blank">{{ project.name }}</a>
        </div>
        {% if project.extra %}
        <div class="card-extra">{{ project.extra }}</div>
        {% endif %}
    </div>
    {% endfor %}
</div>
{% endfor %}

---

*Last updated: {{ site.time | date: "%B %d, %Y" }}*
