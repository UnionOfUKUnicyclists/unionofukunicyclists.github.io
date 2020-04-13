---
layout: post_noimage
title: King of the Lockdown
priority: 5
description: Sign up to King of the Lockdown!
image: assets/images/king_of_the_lockdown_poster.png
nav-menu: true
menu_bottom: true
show_tile: true
---

<html>
  <head></head>
  <body>
    <script>
    function makeApiCall() {
      var params = {
        // The ID of the spreadsheet to retrieve data from.
        spreadsheetId: '1KKBhOHwaueBxhbwSs0GJic2FrJBobeqnBGoK1MqSTBk',  // TODO: Update placeholder value.

        // The A1 notation of the values to retrieve.
        range: 'LEADERBOARD',  // TODO: Update placeholder value.

        // How values should be represented in the output.
        // The default render option is ValueRenderOption.FORMATTED_VALUE.
        valueRenderOption: 'FORMATTED_VALUE',  // TODO: Update placeholder value.

        // How dates, times, and durations should be represented in the output.
        // This is ignored if value_render_option is
        // FORMATTED_VALUE.
        // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
        dateTimeRenderOption: 'FORMATTED_STRING',  // TODO: Update placeholder value.
      };

      var request = gapi.client.sheets.spreadsheets.values.get(params);
      request.then(function(response) {
        // TODO: Change code below to process the `response` object:
		// console.log(response.result) // use this to debug
		document.getElementById("first_place").innerHTML = response.result.values[3][3];
		document.getElementById("second_place").innerHTML = response.result.values[4][3];
        document.getElementById("third_place").innerHTML = response.result.values[5][3];
		document.getElementById("fourth_place").innerHTML = response.result.values[6][3];
		document.getElementById("fifth_place").innerHTML = response.result.values[7][3];
        document.getElementById("sixth_place").innerHTML = response.result.values[8][3];
		document.getElementById("seventh_place").innerHTML = response.result.values[9][3];
		document.getElementById("eighth_place").innerHTML = response.result.values[10][3];
        document.getElementById("ninth_place").innerHTML = response.result.values[11][3];
		document.getElementById("tenth_place").innerHTML = response.result.values[12][3];
		document.getElementById("eleventh_place").innerHTML = response.result.values[13][3];
        document.getElementById("twelfth_place").innerHTML = response.result.values[14][3];
		document.getElementById("thirteenth_place").innerHTML = response.result.values[15][3];
		
		document.getElementById("first_team").innerHTML = response.result.values[3][4];
		document.getElementById("second_team").innerHTML = response.result.values[4][4];
        document.getElementById("third_team").innerHTML = response.result.values[5][4];
		document.getElementById("fourth_team").innerHTML = response.result.values[6][4];
		document.getElementById("fifth_team").innerHTML = response.result.values[7][4];
        document.getElementById("sixth_team").innerHTML = response.result.values[8][4];
		document.getElementById("seventh_team").innerHTML = response.result.values[9][4];
		document.getElementById("eighth_team").innerHTML = response.result.values[10][4];
        document.getElementById("ninth_team").innerHTML = response.result.values[11][4];
		document.getElementById("tenth_team").innerHTML = response.result.values[12][4];
		document.getElementById("eleventh_team").innerHTML = response.result.values[13][4];
        document.getElementById("twelfth_team").innerHTML = response.result.values[14][4];
		document.getElementById("thirteenth_team").innerHTML = response.result.values[15][4];
		
		document.getElementById("first_score").innerHTML = response.result.values[3][5];
		document.getElementById("second_score").innerHTML = response.result.values[4][5];
		document.getElementById("third_score").innerHTML = response.result.values[5][5];
		document.getElementById("fourth_score").innerHTML = response.result.values[6][5];
		document.getElementById("fifth_score").innerHTML = response.result.values[7][5];
		document.getElementById("sixth_score").innerHTML = response.result.values[8][5];
		document.getElementById("seventh_score").innerHTML = response.result.values[9][5];
		document.getElementById("eighth_score").innerHTML = response.result.values[10][5];
		document.getElementById("ninth_score").innerHTML = response.result.values[11][5];
		document.getElementById("tenth_score").innerHTML = response.result.values[12][5];
		document.getElementById("eleventh_score").innerHTML = response.result.values[13][5];
		document.getElementById("twelfth_score").innerHTML = response.result.values[14][5];
		document.getElementById("thirteenth_score").innerHTML = response.result.values[15][5];
      }, function(reason) {
        console.error('error: ' + reason.result.error.message);
      });
    }

    function initClient() {
      var API_KEY = 'AIzaSyCh-ngUcLjtb3MwE1iyhJUwtKV98I8m_YE';  // TODO: Update placeholder with desired API key.

      var CLIENT_ID = '57028870870-60ed5b79giclf19qv6845j395d81vkr9.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.

      // TODO: Authorize using one of the following scopes:
      //   'https://www.googleapis.com/auth/drive'
      //   'https://www.googleapis.com/auth/drive.file'
      //   'https://www.googleapis.com/auth/drive.readonly'
      //   'https://www.googleapis.com/auth/spreadsheets'
      //   'https://www.googleapis.com/auth/spreadsheets.readonly'
      var SCOPE = 'https://www.googleapis.com/auth/spreadsheets.readonly';

      gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(function() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });
    }

    function handleClientLoad() {
      gapi.load('client:auth2', initClient);
    }

    function updateSignInStatus(isSignedIn) {
      if (isSignedIn) {
        makeApiCall();
      }
    }

    function handleSignInClick(event) {
      gapi.auth2.getAuthInstance().signIn();
    }

    function handleSignOutClick(event) {
      gapi.auth2.getAuthInstance().signOut();
    }
    </script>
    <script async defer src="https://apis.google.com/js/api.js"
      onload="this.onload=function(){};handleClientLoad()"
      onreadystatechange="if (this.readyState === 'complete') this.onload()">
    </script>
	
	<font color="#77f399"><h2>GAME IN PROGRESS</h2></font>
	
	<p>Welcome to King of the Lockdown!</p>
	
	<p>If you're playing the game in progress, you must complete as many challenges from the list as possible before 10th May 2020 noon.</p>

	<pr>To view the leaderboard, please sign-in to Google below<p>
	
    <button id="signin-button" onclick="handleSignInClick()">Sign in</button>
    <button id="signout-button" onclick="handleSignOutClick()">Sign out</button>
	<table style="width:100%">
      <tr>
        <th>Place</th>
        <th>Team</th>
        <th>Points</th>
      </tr>
      <tr>
        <td id="first_place"></td>
        <td id="first_team"></td>
        <td id="first_score"></td>
      </tr>
      <tr>
        <td id="second_place"></td>
        <td id="second_team"></td>
        <td id="second_score"></td>
      </tr>
	  <tr>
		<td id="third_place"></td>
		<td id="third_team"></td>
		<td id="third_score"></td>
	  </tr>
	   <tr>
        <td id="fourth_place"></td>
        <td id="fourth_team"></td>
        <td id="fourth_score"></td>
      </tr>
      <tr>
        <td id="fifth_place"></td>
        <td id="fifth_team"></td>
        <td id="fifth_score"></td>
      </tr>
	  <tr>
		<td id="sixth_place"></td>
		<td id="sixth_team"></td>
		<td id="sixth_score"></td>
	  </tr>
	   <tr>
        <td id="seventh_place"></td>
        <td id="seventh_team"></td>
        <td id="seventh_score"></td>
      </tr>
      <tr>
        <td id="eighth_place"></td>
        <td id="eighth_team"></td>
        <td id="eighth_score"></td>
      </tr>
	  <tr>
		<td id="ninth_place"></td>
		<td id="ninth_team"></td>
		<td id="ninth_score"></td>
	  </tr>
	   <tr>
        <td id="tenth_place"></td>
        <td id="tenth_team"></td>
        <td id="tenth_score"></td>
      </tr>
      <tr>
        <td id="eleventh_place"></td>
        <td id="eleventh_team"></td>
        <td id="eleventh_score"></td>
      </tr>
	  <tr>
		<td id="twelfth_place"></td>
		<td id="twelfth_team"></td>
		<td id="twelfth_score"></td>
	  </tr>
	  <tr>
		<td id="thirteenth_place"></td>
		<td id="thirteenth_team"></td>
		<td id="thirteenth_score"></td>
	  </tr>
    </table>
