
// Calling methods on a plugin instance

var bar = $("&lt;div>&lt;/div>")
    .appendTo("body")
    .progressbar({ value: 20 });

// get the current value
alert(bar.progressbar("value"));

// update the value
bar.progressbar("value", 50);

// get the current value again
alert(bar.progressbar("value"));
