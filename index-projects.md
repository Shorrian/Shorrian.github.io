---
layout: default
title: Projects
---
<div class="marginalize">
    <ul >
        {% for project in site.categories.projects %}
            <li>                
                <p>{{project.title}}</p>
                <a href="{{project.url | prepend: site.baseurl}}"><p>{{site.url}}{{project.url}}</p></a>
            </li>
        {% endfor %}
    </ul>
</div>
