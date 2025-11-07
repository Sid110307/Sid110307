---
layout: single
title: "Skills & Experience"
permalink: /experience/
author_profile: true
---

## Skills

{% for section in site.data.experience.skills %}
<h3 id="{{ section.title | slugify }}">{{ section.title }}</h3>
<div class="grid">
    {% for skill in section.items %}
    <div class="card">
        {% if skill.icon %}
        <img src="https://cdn.simpleicons.org/{{ skill.icon }}/black" title="{{ skill.name }}" alt="{{ skill.name }}" />
        {% elsif skill.icon_fa %}
        <i class="fa-fw {{ skill.icon_fa }}" title="{{ skill.name }}"></i>
        {% else %}
        <i class="fas fa-fw fa-code" title="{{ skill.name }}"></i>
        {% endif %}
        <div class="card-title">{{ skill.name }}</div>
    </div>
    {% endfor %}
</div>
{% endfor %}

## Experience

{% for entry in site.data.experience.experience %}

### {{ entry.title }}

**{{ entry.organization }}**  
*{{ entry.date }}*

<ul>
    {% for bullet in entry.bullets %}
    <li>{{ bullet }}</li>
    {% endfor %}
</ul>
{% endfor %}

---

*Last updated: {{ site.time | date: "%B %d, %Y" }}*
