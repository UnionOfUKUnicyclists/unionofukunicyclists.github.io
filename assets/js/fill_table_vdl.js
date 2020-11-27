$.get(
    "https://docs.google.com/spreadsheets/d/1qBFIcE44w9cEtGmw8ni2GM9ikraKUxHz-6uhQTUpe1c/export?format=csv&id=1qBFIcE44w9cEtGmw8ni2GM9ikraKUxHz-6uhQTUpe1c&gid=615076828", 
    function ( data ) {
        var text_entries = data.split('\r\n');
        var tbl = document.querySelector('#overall-leaderboard');
        var entry;
        for (let i = 2; i <= 26; i++) {
            entry = text_entries[i].split(',').slice(0,9);
            var text = '\n<tr><td>' + entry[0] + '</td><td>' + entry[1] + '</td><td>' + entry[2] + '</td><td>' + entry[3] + '</td><td>' + entry[4] + '</td><td>' + entry[5] + '</td><td>' + entry[6] + '</td><td>' + entry[7] + '</td><td>' + entry[8] + '</td></tr>';
            tbl.innerHTML += text;
        }
    }
)

$.get(
    "https://docs.google.com/spreadsheets/d/1qBFIcE44w9cEtGmw8ni2GM9ikraKUxHz-6uhQTUpe1c/export?format=csv&id=1qBFIcE44w9cEtGmw8ni2GM9ikraKUxHz-6uhQTUpe1c&gid=570045132", 
    function ( data ) {
        var text_entries = data.split('\r\n');
        var tbl = document.querySelector('#five');
        var entry;
        for (let i = 1; i <= 6; i++) {
            entry = text_entries[i].split(',').slice(0,5);
            var text = '\n<tr><td>' + entry[0] + '</td><td>' + entry[1] + '</td><td>' + entry[2] + '</td><td>' + entry[3] + '</td><td>' + entry[4] + '</td></tr>';
            tbl.innerHTML += text;
        }
    }
)

$.get(
    "https://docs.google.com/spreadsheets/d/1qBFIcE44w9cEtGmw8ni2GM9ikraKUxHz-6uhQTUpe1c/export?format=csv&id=1qBFIcE44w9cEtGmw8ni2GM9ikraKUxHz-6uhQTUpe1c&gid=1797755741", 
    function ( data ) {
        var text_entries = data.split('\r\n');
        var tbl = document.querySelector('#first-ten');
        var entry;
        for (let i = 1; i <= 11; i++) {
            entry = text_entries[i].split(',').slice(0,5);
            var text = '\n<tr><td>' + entry[0] + '</td><td>' + entry[1] + '</td><td>' + entry[2] + '</td><td>' + entry[3] + '</td><td>' + entry[4] + '</td></tr>';
            tbl.innerHTML += text;
        }
    }
)

$.get(
    "https://docs.google.com/spreadsheets/d/1qBFIcE44w9cEtGmw8ni2GM9ikraKUxHz-6uhQTUpe1c/export?format=csv&id=1qBFIcE44w9cEtGmw8ni2GM9ikraKUxHz-6uhQTUpe1c&gid=83438411", 
    function ( data ) {
        var text_entries = data.split('\r\n');
        var tbl = document.querySelector('#second-ten');
        var entry;
        for (let i = 1; i <= 11; i++) {
            entry = text_entries[i].split(',').slice(0,5);
            var text = '\n<tr><td>' + entry[0] + '</td><td>' + entry[1] + '</td><td>' + entry[2] + '</td><td>' + entry[3] + '</td><td>' + entry[4] + '</td></tr>';
            tbl.innerHTML += text;
        }
    }
)

$.get(
    "https://docs.google.com/spreadsheets/d/1qBFIcE44w9cEtGmw8ni2GM9ikraKUxHz-6uhQTUpe1c/export?format=csv&id=1qBFIcE44w9cEtGmw8ni2GM9ikraKUxHz-6uhQTUpe1c&gid=520056310", 
    function ( data ) {
        var text_entries = data.split('\r\n');
        var tbl = document.querySelector('#half-marathon');
        var entry;
        for (let i = 1; i <= 6; i++) {
            entry = text_entries[i].split(',').slice(0,5);
            var text = '\n<tr><td>' + entry[0] + '</td><td>' + entry[1] + '</td><td>' + entry[2] + '</td><td>' + entry[3] + '</td><td>' + entry[4] + '</td></tr>';
            tbl.innerHTML += text;
        }
    }
)