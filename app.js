//EVENT: something that has happened to our app that we can respond to.
//In node we actually talk about two different kinds of events:
//1. System Events:  Comes from C++ side of node.js core(libuv). Deals with
//the event coming from the computer system like I finish reading a file,
//the file is open, I have received data from the internet and others.
//2.Custom Events:  Comes from javascript side of node.js core. Deals with
//events that I can create for myself. Its the event emitter inside the
//javascript core.
//libuv send the events that are happening inside the computer system(lower
//level operation). When event occurs in libuv it generates a custom
//javvascript event to make easier for us to manage our code and decide what
//code should run when that event happens.
//Javascript doesnot have eventing concept, there is no event object in
//in javascript. But, we can fake it. We can create our own event libraries
//(telling the code that something is happening and responding to that)
//with the technique that node event emitter uses.

//event listener: code that responds to an event
//In javascript's case, listener will be a function
//When event happens, listener will be invoked
//we can have many listener listening to the same event
//commonly we use 'on' to add listener to event in programming(its like ->
//on this happening do this)
//commonly we use 'emit' to say that something has happened i.e event has occured.

var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('Somewhere, someone said hello');
});

emtr.on('greet', function(){
    console.log('A greeting occured');
});

console.log('hello');
emtr.emit('greet');

