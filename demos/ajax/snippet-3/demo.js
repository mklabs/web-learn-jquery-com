
// Using jQuery's Ajax convenience methods

// get plain text or html
$.get('/users.php', { userId : 1234 }, function(resp) {
    console.log(resp);
});

// add a script to the page, then run a function defined in it
$.getScript('/static/js/myScript.js', function() {
    functionFromMyScript();
});

// get JSON-formatted data from the server
$.getJSON('/details.php', function(resp) {
    $.each(resp, function(k, v) {
        console.log(k + ' : ' + v);
    });
});
