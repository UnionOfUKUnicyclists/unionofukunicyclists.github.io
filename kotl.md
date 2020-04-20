---
layout: post_noimage
title: King of the Lockdown
priority: 9999
description: The UUU's lockdown unicycling competition 
image: assets/images/king_of_the_lockdown_poster.png
nav-menu: false
menu_bottom: false
show_tile: true
add_script: assets/js/fill_table_kotl.js
---
# Game in progress	
## How it works

Teams of four, organised virtually, are competing to complete tasks on a central list. Each task nets each team fixed numbers of points.

## Clip of the Week
<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftheunionofukunicyclists%2Fposts%2F2910892852336005&show_text=false&width=552&height=309&appId" width="552" height="309" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>

## Current standings

<html>
	<table id='results-table' style="width:90%">
      <tr>
        <th>Place</th>
        <th>Team</th>
        <th>Points</th>
      </tr>
    </table>
</html>

## The Teams
<div>
	{% assign sorted_teams = site.data.kotl_teams %}
	{% for team in sorted_teams %}
	<b>{{team.number}}:</b> {{team.members}}<br>
	{% endfor %}
</div>
