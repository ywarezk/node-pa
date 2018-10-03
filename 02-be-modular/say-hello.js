

function sayHello() {
    console.log('hello world');
}

function specialHello(msg) {
    console.log(msg);
}

// exports is currently pointing to {}

// exports['sayHello'] = sayHello;

// we exposed a public property called hello pointing to our function
// module.exports.hello = sayHello;
// exports.anotherHello = specialHello;



// exports = sayHello;
module.exports = sayHello;