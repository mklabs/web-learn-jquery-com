
// var theQueue = $({}); // jQuery on an empty object - a perfect queue holder

$.each([1,2,3],function(i, num) {
  // lets add some really simple functions to a queue:
  theQueue.queue('alerts', function(next) {
// show something, and if they hit "yes", run the next function.
if (confirm('index:'+i+' = '+num+'\nRun the next function?')) {
  next();
}
  });
});

// create a button to run the queue:
$("<button>", {
  text: 'Run Queue',
  click: function() {
theQueue.dequeue('alerts');
  }
}).appendTo('body');

// create a button to show the length:
$("<button>", {
  text: 'Show Length',
  click: function() {
alert(theQueue.queue('alerts').length);
  }
}).appendTo('body');
