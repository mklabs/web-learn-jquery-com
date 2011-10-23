
var bar = $("<div></div>")
    .appendTo("body")
    .progressbar()
    .data("progressbar" );

// call a method directly on the plugin instance
bar.option("value", 50);

// access properties on the plugin instance
alert(bar.options.value);
