
// If you have an object with methods, you can pass the object and the name of a
// method to return a function that will always run in the scope of the object.

var myObject = {
    myFn : function() {
        console.log(this);
    }
};

$('#foo').click(myObject.myFn); // logs DOM element #foo
$('#foo').click($.proxy(myObject, 'myFn')); // logs myObject
