
// The module pattern

var feature =(function() {

// private variables and functions
var privateThing = 'secret',
    publicThing = 'not secret',

    changePrivateThing = function() {
      privateThing = 'super secret';
    },

    sayPrivateThing = function() {
      console.log(privateThing);
      changePrivateThing();
    };

// public API
return {
  publicThing : publicThing,
  sayPrivateThing : sayPrivateThing
}

})();

feature.publicThing; // 'not secret'

feature.sayPrivateThing();
// logs 'secret' and changes the value
// of privateThing
