---
layout: default
title: Projects
---
<div class="marginalize">
    <ul>
        {% for project in site.categories.projects %}
            <li>                
                <p>{{project.title}}</p>
                <p>{{site.url}}{{project.url}}</p>
            </li>
        {% endfor %}
    </ul>
</div>
