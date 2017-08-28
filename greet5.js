//revealing module pattern :)
var greeting = "hello5";

function greet(){
    console.log(greeting);
}

//only the greet funciton is exposed. So, greeting variable will not be
//accessible in the app.js file
module.exports = {
    greet: greet
}

