---
layout: post_noimage
title: About us
priority: 6
description: Learn about the UUU and get involved
image: assets/images/faq.jpg
nav-menu: true
show_tile: true
---

## About the UUU

The Union of UK Unicyclists (UUU) is the organising federation for unicyclists in the UK. It was formed by a group of
unicyclists in April 2001. We work with UK unicyclists and clubs in order to:

* To promote unicycling and unicycle events throughout the UK
* To share information about unicycling and unicycle events with UK riders
* To encourage participation in all aspects of unicycling in the UK and abroad by UK riders
* To further the recognition of unicycling as a sport in the UK

## Contact

You can contact the whole committee using [committee@unicycle.org](mailto:committee@unicycle.org.uk). You can also contact individual members of the committee using the addresses below.

### Specific roles

<table>
  <thead>
    <tr>
      <th>Role</th>
      <th>Name</th>
      <th>Contact</th>
    </tr>
  </thead>
{%for person in site.data.committee.named %}
  <tr>
    <td>{{person.role}}</td>
    <td>{{person.name}}</td>
    <td><a href="mailto:{{person.email}}">{{person.email}}</a></td>
  </tr>
{% endfor %}
</table>

### Other committee members
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Contact</th>
    </tr>
  </thead>
{%for person in site.data.committee.other %}
  <tr>
    <td>{{person.name}}</td>
    <td><a href="mailto:{{person.email}}">{{person.email}}</a></td>
  </tr>
{% endfor %}
</table>


## Membership

Membership is open to everyone at the rate of £1. 
