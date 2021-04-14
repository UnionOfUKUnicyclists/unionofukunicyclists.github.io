$.get(
    "https://docs.google.com/spreadsheets/d/1yGdJoPrImM4jqjYoLY9j2sBaBB3fKoYZVfyoDrADlWQ/export?format=csv&id=1yGdJoPrImM4jqjYoLY9j2sBaBB3fKoYZVfyoDrADlWQ&gid=1201503976",

    function ( data ) {
        var text_entries = data.split('\r\n');
        var tbl = document.querySelector('#overall-leaderboard');
        var entry;
        for (let i = 1; i <= 26; i++) {
            entry = text_entries[i].split(',').slice(1,10);
            var text = '\n<tr><td>' + entry[0] + '</td><td>' + entry[1] + '</td><td>' + entry[2] + '</td><td>' + entry[3] + '</td><td>' + entry[4] + '</td><td>' + entry[5] + '</td><td>' + entry[6] + '</td><td>' + entry[7] + '</td><td>' + entry[8] + '</td></tr>';
            tbl.innerHTML += text;
        }
    }
)

$.get(
    "https://docs.google.com/spreadsheets/d/1yGdJoPrImM4jqjYoLY9j2sBaBB3fKoYZVfyoDrADlWQ/export?format=csv&id=1yGdJoPrImM4jqjYoLY9j2sBaBB3fKoYZVfyoDrADlWQ",
    function ( data ) {
        var text_entries = data.split('\r\n');
        var tbl = document.querySelector('#flatland-leaderboard');
        var entry;
        for (let i = 1; i <= 12; i++) {
            entry = text_entries[i].split(',').slice(1,14);
            var text = '\n<tr><td>' + entry[0] + '</td><td>' + entry[1] + '</td><td>' + entry[2] + '</td><td>' + entry[3] + '</td><td>' + entry[4] + '</td><td>' + entry[5] + '</td><td>' + entry[6] + '</td><td>' + entry[7] + '</td><td>' + entry[8] + '</td><td>' + entry[9] + '</td><td>' + entry[10] + '</td><td>' + entry[11] + '</td><td>' + entry[12] + '</td></tr>';
            tbl.innerHTML += text;
        }
    }
)

$.get(
    "https://docs.google.com/spreadsheets/d/1yGdJoPrImM4jqjYoLY9j2sBaBB3fKoYZVfyoDrADlWQ/export?format=csv&id=1yGdJoPrImM4jqjYoLY9j2sBaBB3fKoYZVfyoDrADlWQ&gid=838514710", 
    function ( data ) {
        var text_entries = data.split('\r\n');
        var tbl = document.querySelector('#freestyle-leaderboard');
        var entry;
        for (let i = 1; i <= 5; i++) {
            entry = text_entries[i].split(',').slice(1,14);
            var text = '\n<tr><td>' + entry[0] + '</td><td>' + entry[1] + '</td><td>' + entry[2] + '</td><td>' + entry[3] + '</td><td>' + entry[4] + '</td><td>' + entry[5] + '</td><td>' + entry[6] + '</td><td>' + entry[7] + '</td><td>' + entry[8] + '</td><td>' + entry[9] + '</td><td>' + entry[10] + '</td><td>' + entry[11] + '</td><td>' + entry[12] + '</td></tr>';
            tbl.innerHTML += text;
        }
    }
)

$.get(
    "https://docs.google.com/spreadsheets/d/1yGdJoPrImM4jqjYoLY9j2sBaBB3fKoYZVfyoDrADlWQ/export?format=csv&id=1yGdJoPrImM4jqjYoLY9j2sBaBB3fKoYZVfyoDrADlWQ&gid=270367625", 
    function ( data ) {
        var text_entries = data.split('\r\n');
        var tbl = document.querySelector('#hockey-leaderboard');
        var entry;
        for (let i = 1; i <= 5; i++) {
            entry = text_entries[i].split(',').slice(1,14);
            var text = '\n<tr><td>' + entry[0] + '</td><td>' + entry[1] + '</td><td>' + entry[2] + '</td><td>' + entry[3] + '</td><td>' + entry[4] + '</td><td>' + entry[5] + '</td><td>' + entry[6] + '</td><td>' + entry[7] + '</td><td>' + entry[8] + '</td><td>' + entry[9] + '</td><td>' + entry[10] + '</td><td>' + entry[11] + '</td><td>' + entry[12] + '</td></tr>';
            tbl.innerHTML += text;
        }
    }
)

$.get(
    "https://docs.google.com/spreadsheets/d/1yGdJoPrImM4jqjYoLY9j2sBaBB3fKoYZVfyoDrADlWQ/export?format=csv&id=1yGdJoPrImM4jqjYoLY9j2sBaBB3fKoYZVfyoDrADlWQ&gid=434570863", 
    function ( data ) {
        var text_entries = data.split('\r\n');
        var tbl = document.querySelector('#muni-leaderboard');
        var entry;
        for (let i = 1; i <= 18; i++) {
            entry = text_entries[i].split(',').slice(1,14);
            var text = '\n<tr><td>' + entry[0] + '</td><td>' + entry[1] + '</td><td>' + entry[2] + '</td><td>' + entry[3] + '</td><td>' + entry[4] + '</td><td>' + entry[5] + '</td><td>' + entry[6] + '</td><td>' + entry[7] + '</td><td>' + entry[8] + '</td><td>' + entry[9] + '</td><td>' + entry[10] + '</td><td>' + entry[11] + '</td><td>' + entry[12] + '</td></tr>';
            tbl.innerHTML += text;
        }
    }
)

$.get(
    "https://docs.google.com/spreadsheets/d/1yGdJoPrImM4jqjYoLY9j2sBaBB3fKoYZVfyoDrADlWQ/export?format=csv&id=1yGdJoPrImM4jqjYoLY9j2sBaBB3fKoYZVfyoDrADlWQ&gid=2009037563", 
    function ( data ) {
        var text_entries = data.split('\r\n');
        var tbl = document.querySelector('#street-leaderboard');
        var entry;
        for (let i = 1; i <= 6; i++) {
            entry = text_entries[i].split(',').slice(1,14);
            var text = '\n<tr><td>' + entry[0] + '</td><td>' + entry[1] + '</td><td>' + entry[2] + '</td><td>' + entry[3] + '</td><td>' + entry[4] + '</td><td>' + entry[5] + '</td><td>' + entry[6] + '</td><td>' + entry[7] + '</td><td>' + entry[8] + '</td><td>' + entry[9] + '</td><td>' + entry[10] + '</td><td>' + entry[11] + '</td><td>' + entry[12] + '</td></tr>';
            tbl.innerHTML += text;
        }
    }
)

$.get(
    "https://docs.google.com/spreadsheets/d/1yGdJoPrImM4jqjYoLY9j2sBaBB3fKoYZVfyoDrADlWQ/export?format=csv&id=1yGdJoPrImM4jqjYoLY9j2sBaBB3fKoYZVfyoDrADlWQ&gid=1153228117", 
    function ( data ) {
        var text_entries = data.split('\r\n');
        var tbl = document.querySelector('#trials-leaderboard');
        var entry;
        for (let i = 1; i <= 16; i++) {
            entry = text_entries[i].split(',').slice(1,14);
            var text = '\n<tr><td>' + entry[0] + '</td><td>' + entry[1] + '</td><td>' + entry[2] + '</td><td>' + entry[3] + '</td><td>' + entry[4] + '</td><td>' + entry[5] + '</td><td>' + entry[6] + '</td><td>' + entry[7] + '</td><td>' + entry[8] + '</td><td>' + entry[9] + '</td><td>' + entry[10] + '</td><td>' + entry[11] + '</td><td>' + entry[12] + '</td></tr>';
            tbl.innerHTML += text;
        }
    }
)
