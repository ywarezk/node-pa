"use strict";

// what is this



console.log(this === global); // false

function printThis() {
    console.log(this); 
    console.log(this === global); // true
}

function printThisAgain() {
    "use strict";
    console.log(this === global); // false
}

printThis();
printThisAgain();

