
// Binding to widget events

var bar = $("<div></div>")
    .appendTo("body")
    .progressbar({
        complete: function(event, data) {
            alert( "Callbacks are great!" );
        }
    })
    .bind("progressbarcomplete", function(event, data) {
        alert("Events bubble and support many handlers for extreme flexibility.");
        alert("The progress bar value is " + data.value);
    });

bar.progressbar("option", "value", 100);
