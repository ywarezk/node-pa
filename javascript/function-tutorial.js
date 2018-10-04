

// functions in js

function sayHello(arg1 = 'foo bar', arg2, arg3) {

}

const myFunc = function(arg1 = 'asdfasd', arg2 = 'zxcvxc') {

}

(function(arg1) {

})();

sayHello('hello', {'foo': 'bar'}, [1,2,3]);



sayHello(undefined, 'sdfgsd', ['sdfgsd']);

myFunc();

// lambda function
// arrow function

const lambdaFunc = (arg1, arg2, arg3) => {
    // ...
}

arg1 => {
    // ....
    return arg1 + 20;
}

arg1 => arg1 + 20;


this === module.exports
lambdaFunc('dfg', 1, []);






