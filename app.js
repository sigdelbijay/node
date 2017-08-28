var greet = require('./greet1');
greet();

var greet2 = require('./greet2');
greet2.greet();
//OR
var greet2b = require('./greet2').greet;
greet2b();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "hello changed"

//when we call a require function with a filename, the returned object
//i.e module.exports is saved in cache. So, the next time you call the require
//function with the same filename it returns the object saved in cache,
//it doesnot create the new object
var greet3b = require('./greet3');
greet3b.greet();

//when we need to create the new object
var Greet4 = require('./greet4');
var greet4 = new Greet4();
greet4.greet();

var greet5 = require('./greet5');
greet5.greet();