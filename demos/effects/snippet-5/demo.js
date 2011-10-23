$.fn.delay = function( time, type ) {
  time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
  type = type || "fx";

  return this.queue( type, function() {
var elem = this;
setTimeout(function() {
  jQuery.dequeue( elem, type );
}, time );
  });
};
