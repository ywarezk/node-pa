"use strict"
// what does this point to in js

// this === module.exports // 

 // this.Student = Student;

function printThis() {
    "use strict"
    // ths.foo = 'dfg';
    console.log(this);
    const hello = 'world';
    hello[1] = 'c';
}

printThis(); // undefined

const myObj = {hello: printThis};
myObj['hello']();

// printThis.call(myObj)

// const printThis1 = printThis.bind(myObj);


function foo() {
    // this.hello = 'stam' // cause i assume 
}

function foo2() {
    this.foo
}


class Person {
    
    constructor(name = 'Yariv Katz') {
        this.name = name; // does it really represent the instance? 
        this.age = 33;
        // this.birthday = this.birthday.bind(this);
    }

    sayHello() {
        console.log(`hello my name is ${this.name}`);
    }

    birthday() {
        console.log(this.age);
        setTimeout(() => {
            console.log('4');
            // console.log(this.age);
            this.age++;
        }, 1000);
    }

    // birthday1 = () => { // in the future

    // }
}

const person = new Person();
console.log('0');
person.birthday();
console.log('2');

const myObj2 = {a: person.birthday}
myObj2.a.call(person);

setTimeout(function() {
    console.log('5');
    console.log(person.age);
}, 2000);

console.log('3');