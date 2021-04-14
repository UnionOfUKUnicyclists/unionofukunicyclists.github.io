---
layout: post_noimage
title: King of the Lockdown
priority: 9999
description: UUU King of the Lockdown
image: assets/images/king_of_the_lockdown_poster.png
nav-menu: false
menu_bottom: false
show_tile: false
add_script: assets/js/fill_table_kotl.js
---
# Game complete
## How it works

Teams of four, organised virtually, are competing to complete tasks on a central list. Each task nets each team fixed numbers of points.

## Streamed watch party
<iframe width="560" height="315" src="https://www.youtube.com/embed/hJ-YQ6sD2SE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Clips of the week
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0"></script>
<div class="fb-video" style="margin-bottom:2em" data-href="https://www.facebook.com/theunionofukunicyclists/videos/246544833092702/" data-show-text="false" data-width="300"><blockquote cite="https://developers.facebook.com/theunionofukunicyclists/videos/246544833092702/" class="fb-xfbml-parse-ignore"><a href="https://developers.facebook.com/theunionofukunicyclists/videos/246544833092702/"></a>Clip of the week 4</a></blockquote></div>
<div class="fb-video" style="margin-bottom:2em" data-href="https://www.facebook.com/theunionofukunicyclists/videos/2896561930419862/" data-show-text="false" data-width="300"><blockquote cite="https://developers.facebook.com/theunionofukunicyclists/videos/2896561930419862/" class="fb-xfbml-parse-ignore"><a href="https://developers.facebook.com/theunionofukunicyclists/videos/2896561930419862/"></a>Clip of the week 3</a></blockquote></div>
<div class="fb-video" style="margin-bottom:2em" data-href="https://www.facebook.com/theunionofukunicyclists/videos/860369674475026/" data-show-text="false" data-width="300"><blockquote cite="https://developers.facebook.com/theunionofukunicyclists/videos/860369674475026/" class="fb-xfbml-parse-ignore"><a href="https://developers.facebook.com/theunionofukunicyclists/videos/860369674475026/">King of the Lockdown - Clip of the Week 2</a></blockquote></div>
<div class="fb-video" style="margin-bottom:2em" data-href="https://www.facebook.com/theunionofukunicyclists/videos/216253039636451/" data-show-text="false" data-width="300"><blockquote cite="https://developers.facebook.com/theunionofukunicyclists/videos/216253039636451/" class="fb-xfbml-parse-ignore"><a href="https://developers.facebook.com/theunionofukunicyclists/videos/216253039636451/">UUU King of the Lockdown - Clip of the week 1</a></blockquote></div>

## Final standings
<html>
	<table id='results-table' style="width:100%">
      <tr>
        <th>Place</th>
        <th>Team</th>
        <th>Points</th>
      </tr>
    </table>
</html>

## The teams
<div>
	{% assign sorted_teams = site.data.kotl_teams %}
	{% for team in sorted_teams %}
	<b>{{team.id}}:</b> {{team.members}}<br>
	{% endfor %}
</div>
