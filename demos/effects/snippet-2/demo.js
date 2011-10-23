
  // jQuery on an empty object, we are going to use this as our Queue
  var ajaxQueue = $({});

  $.ajaxQueue = function(ajaxOpts) {
// hold the original complete function
var oldComplete = ajaxOpts.complete;

// queue our ajax request
ajaxQueue.queue(function(next) {

  // create a complete callback to fire the next event in the queue
  ajaxOpts.complete = function() {
    // fire the original complete if it was there
    if (oldComplete) oldComplete.apply(this, arguments);

    next(); // run the next query in the queue
  };

  // run the query
  $.ajax(ajaxOpts);
});
  };

// get each item we want to copy
$("#items li").each(function(idx) {

// queue up an ajax request
$.ajaxQueue({
    url: '/ajax_html_echo/',
    data: {html : "["+idx+"] "+$(this).html()},
    type: 'POST',
    success: function(data) {
        // Write to #output
        $("#output").append($("<li>", { html: data }));
    }
});
});
