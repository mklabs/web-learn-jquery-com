// Functions have access to variables defined in the same scope

var foo = 'hello';

var sayHello = function() {
  console.log(foo);
};

sayHello();         // logs 'hello'
console.log(foo);   // also logs 'hello'
