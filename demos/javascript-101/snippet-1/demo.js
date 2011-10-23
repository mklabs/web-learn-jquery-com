
// A function being attached to an object at runtime

var myName = 'the global object',

    sayHello = function() {
      console.log('Hi! My name is ' + this.myName);
    },

    myObject = {
      myName : 'Rebecca'
    },

    secondObject = {
      myName : 'Colin'
    };

myObject.sayHello = sayHello;
secondObject.sayHello = sayHello;

sayHello();               // logs 'Hi! My name is the global object'
myObject.sayHello();      // logs 'Hi! My name is Rebecca'
secondObject.sayHello();  // logs 'Hi! My name is Colin'
