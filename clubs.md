---
layout: post
title: Clubs
priority: 4
description: The UUU clubs directory
image: assets/images/uniclub.jpg
nav-menu: true
menu_bottom: "test"
show_tile: true
---

{% comment %} List of clubs {% endcomment %}
{% assign sorted_clubs = site.data.clubs | sort:"name" %}
<section class="spotlights">

{% for club in sorted_clubs %}

{% capture title %}
{% if club.website %}
## [{{club.name}}]({{club.website}})
{% else %}
## {{club.name}}
{% endif %}
{% endcapture %}

{% capture titleHTML %}
{{ title | markdownify }}
{% endcapture %}

{% capture filltext %}
**Address:** [{{club.address}}](https://maps.google.co.uk/?q={{club.latitude}},{{club.longitude}})
{% if club.website %}
**Website:** [{{club.website}}]({{club.website}}){% endif %}
{% if club.contact.email %}
**Email:** [{{club.contact.email}}](mailto:{{club.contact.email}}) {% endif %}
{% if club.contact.phone %}
**Phone:** {{club.contact.phone}} {% endif %}
{{ club.text }}
{% endcapture %}

{% capture fillHTML %}
{{ filltext | markdownify }}
{% endcapture %}

{%include spotlights.html title=titleHTML content=fillHTML %}

{% endfor %}

</section>
