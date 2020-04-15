$.get(
    "https://docs.google.com/spreadsheets/d/1KKBhOHwaueBxhbwSs0GJic2FrJBobeqnBGoK1MqSTBk/export?format=csv&id=1KKBhOHwaueBxhbwSs0GJic2FrJBobeqnBGoK1MqSTBk", 
    function ( data ) {
        var text_entries = data.split('\r\n');
        var tbl = document.querySelector('#results-table');
        var entry;
        for (let i = 3; i <= 15; i++) {
            entry = text_entries[i].split(',').slice(3,6);
            var text = '\n<tr><td>' + entry[0] + '</td><td>' + entry[1] + '</td><td>' + entry[2] + '</td></tr>';
            tbl.innerHTML += text;
        }
    }
)

