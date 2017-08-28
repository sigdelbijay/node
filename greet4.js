//ataching the constructer function to the exports object

function greetR(){
    this.greeting = "hello4";
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = greetR;