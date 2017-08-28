//attaching newly created object using function constructer
// to the exports object

function greetR(){
    this.greeting = "hello3";
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new greetR();