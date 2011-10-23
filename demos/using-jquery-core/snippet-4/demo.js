
// Changes the properties of the first object using the properties of subsequent objects.

var firstObject = { foo : 'bar', a : 'b' };
var secondObject = { foo : 'baz' };

var newObject = $.extend(firstObject, secondObject);
console.log(firstObject.foo); // 'baz'
console.log(newObject.foo);   // 'baz'
