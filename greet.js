//exports is the short-hand-sign of module.exports(commit: how the module works)
//However, I can only use exports in place of module.exports only if I
//mutate it. I can't use equals or overwrite it(This will cause exports
// to point to differebt spot in memory). That's the quirk in javascript.

exports = function(){
    console.log('hello');
}

console.log(exports);
console.log(module.exports);