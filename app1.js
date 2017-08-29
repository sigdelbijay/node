//using es6 class concept
//its just syntactic sugar. what's happening under the hood is the same. :)

var Emitter = require('events');

class GreetR extends Emitter{
    constructor(){
        super();
        this.greeting = 'Hello World';
    }

    greet(data){
        console.log(`${ this.greeting } ${data}`);
        this.emit('greet', data);
    }
}

var greeter1 = new GreetR();

greeter1.on('greet', function(data){
    console.log(`someone greeted: ${ data }`);
});

greeter1.greet('bijay');