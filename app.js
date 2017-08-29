// node event emitter relies on magic string
// magic string: string that has some special meaning in our code
// this is bad it makes it easy for a typo to cause a bug and hard for
// tool to help us find it.
// we solve this problem here using a different module for event names i.e
// the events object properties
// There are many modules in node that are built on top of event emitter. :)

var Emitter = require('events');
var eventConfig = require('./config').events;
var emtr = new Emitter();

emtr.on(eventConfig.GREET /* OR 'greet'  */, function(){
    console.log('Somewhere, someone said hello');
});

emtr.on(eventConfig.GREET, function(){
    console.log('A greeting occured');
});

console.log('hello');
emtr.emit(eventConfig.GREET);

