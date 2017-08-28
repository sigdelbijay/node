//replacing exports property(i.e which is an empty object
//inside module object) with a function

module.exports = function(){
    console.log('hello1');
}