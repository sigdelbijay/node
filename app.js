var Emitter = require('events');
var util = require('util');

function GreetR(){
    this.greeting = 'Hello World';
}

// any object created from GreetR consturcter function get access to
// properties and methods(eg. on, emit) attached to prototype property of
// Emitter constucter function i.e GreetR.prototype = Object.create(Emitter.prototype)
// Here, greet function is attached to GreetR constructer function
// prototype property later
util.inherits(GreetR, Emitter);

GreetR.prototype.greet = function(data){
    console.log(this.greeting + ' ' + data);
    this.emit('greet', data);
    // pass the data as parameter to all the listener function in array,
    // that will be invoked
}

var greeter1 = new GreetR();

greeter1.on('greet', function(data){
    console.log('Someone greeted: ' + data);
});

greeter1.greet('bijay');

