
// Returns a function that will always run in the provided scope — that is, sets
// the meaning of this inside the passed function to the second argument.

var myFunction = function() { console.log(this); };
var myObject = { foo : 'bar' };

myFunction(); // logs window object

var myProxyFunction = $.proxy(myFunction, myObject);
myProxyFunction(); // logs myObject object
