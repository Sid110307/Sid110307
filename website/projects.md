---
layout: single
title: "Selected Projects"
permalink: /projects/
author_profile: true
---

Here are some of my open-source projects across my focus areas:

{% for section in site.data.projects.projects %}
<h2 id="{{ section.title | slice: 2, section.title.size | slugify }}">{{ section.title }}</h2>

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
        {% if project.tech %}
        <div class="card-tags">
            {% assign tech_list = project.tech | split: "," %}
            {% for t in tech_list %}
                {% assign t_key = t | strip | downcase %}
                {% assign t_prefix = t_key | slice: 0, 2 %}
                {% if t_prefix == "fa" %}
                    <i class="fa-fw {{ t_key }}"></i>
                {% else %}
                    <img src="https://cdn.simpleicons.org/{{ t_key }}/black" alt="{{ t_key }}" class="tag-icon" />
                {% endif %}
            {% endfor %}
        </div>
        {% endif %}
    </div>
    {% endfor %}
</div>
{% endfor %}

---

*Last updated: {{ site.time | date: "%B %d, %Y" }}*
