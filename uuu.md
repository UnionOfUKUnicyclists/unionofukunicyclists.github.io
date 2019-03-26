---
layout: post_noimage
title: Get involved
description: The UUU
image: assets/images/faq.jpg
nav-menu: false
show_tile: false
---
## About the UUU

The Union of UK Unicyclists (UUU) is the organising federation for unicyclists in the UK. It was formed by a group of
unicyclists in April 2001. We work with UK unicyclists and clubs in order to:

* Promote unicycling and unicycle events throughout the UK
* Share information about unicycling and unicycle events with UK riders
* Encourage participation in all aspects of unicycling in the UK and abroad by UK riders
* Further the recognition of unicycling as a sport in the UK

## Contact

You can contact us at [contact@unicycle.org](mailto:contact@unicycle.org.uk). You can also contact individual members of the committee using the addresses below.

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

Membership is currently under review. More details will be available here in April 2019.
