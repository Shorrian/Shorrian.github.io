---
layout: default
title: Projects
---
<h1 class="centered">Projects</h1>

<div class="marginalize">
    <ul id="project-grid">
        <div id="masonry-grid">
        {% for project in site.categories.projects %}
            <a href="{{project.url | prepend: site.baseurl}}">
                <li class="grid-item project" >                
                    <center>
                    <img src="/img/banner.jpg"/>
                    </center>
                    <h2 class="fancy-script centered">{{project.title}}</h2>
                    <p >{{project.excerpt}}</p>
                </li>
            </a>
        {% endfor %}
        </div>
    </ul>
</div>
