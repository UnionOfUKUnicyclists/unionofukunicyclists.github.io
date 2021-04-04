---
layout: post
title: Clubs
priority: 6
description: The UUU clubs directory
image: assets/images/just.jpg
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
{% if club.image %}
![club image]({{club.image}} "Club Image")
{% endif %}
{% endcapture %}

{% capture titleHTML %}
{{ title | markdownify }}
{% endcapture %}

{% capture filltext %}
**Region:** {{club.region}}
{% if club.location %}
**Town/City:** {{club.location}}{% endif %}
{% if club.disciplines %}
**Disciplines:** {{club.disciplines}}{% endif %}
{% if club.facebook %}
{% if club.website %}
[![Facebook]({{'assets/images/fb.png'}} "Facebook")]({{club.facebook}})
[![Website]({{'assets/images/web.png'}} "Website")]({{club.website}})
{% else %} 
[![Facebook]({{'assets/images/fb.png'}} "Facebook")]({{club.facebook}})
{% endif %}{% comment %}{% endif %}{% endcomment %}
{% else %}
{% if club.contact.phone %}
[![Website]({{'assets/images/web.png'}} "Website")]({{club.website}})
{% endif %}{% comment %}{% endif %}{% endcomment %}
{% endif %}
{% if club.text %}
{{ club.text }} {% endif %}
{% if club.address %}
**Address available on request**
{% comment %} **Address:** [{{club.address}}](https://maps.google.co.uk/?q={{club.latitude}},{{club.longitude}}) {% endcomment %}
{% endif %}
{% if club.contact.email %}
{% if club.contact.phone %}
**Email and phone number available on request** 
{% else %} 
**Email available on request**
{% endif %} {% comment %} [{{club.contact.email}}](mailto:{{club.contact.email}}) {% endif %} {% endcomment %}
{% else %}
{% if club.contact.phone %}
**Phone number available on request** {% endif %} {% comment %} {{club.contact.phone}} {% endif %} {% endcomment %}
{% endif %}
{% endcapture %}

{% capture fillHTML %}
{{ filltext | markdownify }}
{% endcapture %}

{%include spotlights.html title=titleHTML content=fillHTML %}

{% endfor %}

</section>
