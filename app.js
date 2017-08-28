//require function returns module.exports object which is an empty object.
var greet = require('./greet');

var greet2 = require('./greet2');
greet2.greet();
console.log(greet2);