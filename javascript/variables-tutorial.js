// variable in js

// const/let/var <variable-name> = <assignment>

// var

// the scope of var is functional
// var is in the function he lives
// assignment is optional

if (true) {
    var message = 'hello';
    var x;
    message = 10;
    x = 33;
}

console.log(message);

// const 

// the scope is block
// assignment is a must 
// assignment once
// not necesarly immutable


if (true) {
    const message2 = 'hello world';
    // message2 = 10 // this is wrong
}

// let
// scope is in the block
// multiple assignments

if (true) {
    message3 = 'hello';
    let message2 = 'hello world';
    message2 = 10; // this is correct
}


// this will print 0..9 once
for (var i = 0; i < 10; i++) {
    for(var i = 0; i < 10; i++) {
        console.log(i);
    }
}


// will print 0..9 X 10
for (let i = 0; i < 10; i++) {
    for(let i = 0; i < 10; i++) {
        console.log(i);
    }
}



