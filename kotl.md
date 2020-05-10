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
# Game complete
## How it works

Teams of four, organised virtually, are competing to complete tasks on a central list. Each task nets each team fixed numbers of points.

## Clip of the week
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0"></script>

<div class="fb-video" style="margin-bottom:2em" data-href="https://www.facebook.com/theunionofukunicyclists/videos/2896561930419862/" data-show-text="false" data-width=""><blockquote cite="https://developers.facebook.com/theunionofukunicyclists/videos/2896561930419862/" class="fb-xfbml-parse-ignore"><a href="https://developers.facebook.com/theunionofukunicyclists/videos/2896561930419862/"></a>The Union of UK Unicyclists</a></blockquote></div>
### Previous clips of the week
<div class="fb-video" style="margin-bottom:2em" data-href="https://www.facebook.com/theunionofukunicyclists/videos/860369674475026/" data-show-text="false" data-width="300"><blockquote cite="https://developers.facebook.com/theunionofukunicyclists/videos/860369674475026/" class="fb-xfbml-parse-ignore"><a href="https://developers.facebook.com/theunionofukunicyclists/videos/860369674475026/">King of the Lockdown - Clip of the Week</a></blockquote></div>
<div class="fb-video" style="margin-bottom:2em" data-href="https://www.facebook.com/theunionofukunicyclists/videos/216253039636451/" data-show-text="false" data-width="300"><blockquote cite="https://developers.facebook.com/theunionofukunicyclists/videos/216253039636451/" class="fb-xfbml-parse-ignore"><a href="https://developers.facebook.com/theunionofukunicyclists/videos/216253039636451/">UUU King of the Lockdown - Clip of the week 1</a></blockquote></div>

## Current standings

Now that all of the teams have submitted their tasks, we are calculating final point totals. We'll be back to announce the UUU Kings of the Lockdown.

<!---
<html>
	<table id='results-table' style="width:100%">
      <tr>
        <th>Place</th>
        <th>Team</th>
        <th>Points</th>
      </tr>
    </table>
</html>
-->

## The Teams
<div>
	{% assign sorted_teams = site.data.kotl_teams %}
	{% for team in sorted_teams %}
	<b>{{team.id}}:</b> {{team.members}}<br>
	{% endfor %}
</div>
