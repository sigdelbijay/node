var Emitter = require('events');
var util = require('util');

function GreetR(){
    //to get properties and methods defined in Emitter constructer function
    //for full inheritance
    Emitter.call(this);
    this.greeting = 'Hello World';
}

// any object created from GreetR consturcter function get access to
// properties and methods(eg. on, emit) attached to prototype property of
// Emitter constucter function i.e GreetR.prototype = Object.create(Emitter.prototype)
// Here, greet function is attached to GreetR constructer function
// prototype property later
util.inherits(GreetR, Emitter);

GreetR.prototype.greet = function(){
    console.log(this.greeting);
    this.emit('greet');
}

var greeter1 = new GreetR();

greeter1.on('greet', function(){
    console.log('Someone greeted');
});

greeter1.greet();
