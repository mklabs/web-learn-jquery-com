
// A function created using Function.bind

var myName = 'the global object',

    sayHello = function () {
      console.log('Hi! My name is ' + this.myName);
    },

    myObject = {
      myName : 'Rebecca'
    };

var myObjectHello = sayHello.bind(myObject);

sayHello();       // logs 'Hi! My name is the global object'
myObjectHello();  // logs 'Hi! My name is Rebecca'
