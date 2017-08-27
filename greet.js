// (function(exports, require, module, __filename, __dirname){

    var greet = function(){
        console.log('hi');
    }
    module.exports = greet;

// });

// fn(module.exports, require, module, filename, dirname);

// return module.exports;

//require is a function that you pass a path to
//module.exports is what require function returns
//this works because your code is actually wrapped in a function that is
//given these things as function parameter.