
// lets assume $elem is a jQuery object that points to some element we are animating.
// var queue = $elem.queue();
// remove the last function from the animation queue.
// var lastFunc = queue.pop();
// insert it at the beginning:    
// queue.unshift(lastFunc);
// replace queue with the first three items in the queue
$elem.queue(queue.slice(0,3));
