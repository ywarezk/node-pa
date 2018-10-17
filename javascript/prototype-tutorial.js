
// prototype

// what is prototype
// 1 - prototype is an object

const myFirstPrototype = {
    hello: 'world',
    foo: () => {console.log('hello')}
} 

// 2 - children from prototype will inherit the object AKA inheritance.
// Object.create(prototype) => new object 

const myPrototypeChild = Object.create(myFirstPrototype);
console.log(myPrototypeChild.hello);
myPrototypeChild.foo();


myPrototypeChild.hello = 'foo bar';


// js looking for properties
// prototype chain

// myPrototypeChild instance -> check prototype myFirstPrototype -> Object.prototype

console.log(myPrototypeChild.__proto__ === myFirstPrototype);
console.log(myPrototypeChild.__proto__.__proto__ === Object.prototype);


// if i change the parent all instances will change
myFirstPrototype.foo = () => {console.log('foo bar')}
myPrototypeChild.foo(); // foo bar

// lets look on different types
// 
const myDate = new Date();
console.log(myDate.__proto__ === Date.prototype);
console.log(myDate.__proto__.__proto__ === Object.prototype);

function stam() {}
console.log(stam.__proto__ === Function.prototype);
console.log(stam.__proto__.__proto__ === Object.prototype);

// custom types
// class / function

function Person(name) {
    this.name = name;
    this.sayHello = () => {
        console.log(this.name);
    }
}

Person.prototype.sayHello2 = () => {
    console.log(this.name);
}

const me = new Person('yariv');

// const me = Object.create(Person.prototype)
// Person.call(me, 'yariv')
const me2 = Object.create(Person.prototype)
Person.call(me2, 'yariv')

// me -> Person.prototype -> Function.prototype -> Object.prototype
console.log(me.__proto__ === Person.prototype); // Object.getProtoypeOf(me)
console.log(me.__proto__.__proto__ === Function.prototype);
console.log(me.__proto__.__proto__.__proto__ === Object.prototype);

// myObj.prototype = {}
// inheritance


function Student(grade, name) {
    this.grade = grade;
    Person.call(this, name);
}

Object.setPrototypeOf(Student, Person.prototype);

// const student = Object.create(Student.prototype);
// Student

// class

class Person2 {
    constructor(name) {
        this.name = name;
        this.sayHello = () => {
            console.log(this.name);
        }
    }

    sayHello2() {
        console.log(this.name);
    }
}

class Student2 extends Person2 {
    constructor(grade, name) {
        super(name);
    }
}


let instance; 
class MySingleTon {
    // static instance = null; // error

    static getInstance() {
        if (instance) {
            return instance
        }
        instance = new MySingleTon();
        return instance;
    }
}


const myArray = [1,2,3,4,5,6]
const [a, ...b] = myArray

const myObj = {
    hello: 'world',
    foo: 'bar'
}

const myNewObj = {...myObj, foo: 'hello world'};

// for-in, defineProperty

// const myFirstPrototype = {
//     hello: 'world',
//     foo: () => {console.log('hello')}
// } 
// const myPrototypeChild = Object.create(myFirstPrototype);

for(let key in myPrototypeChild) {
    console.log(key);
}

myFirstPrototype.marco = 'paulo';

Object.defineProperty(myFirstPrototype, 'marco', {
    enumerable: true,
    writable: true
});

myFirstPrototype.hasOwnProperty('hello'); // ? true
myFirstPrototype.hasOwnProperty('foo'); // ? true

myPrototypeChild.hasOwnProperty('hello'); // false

Object.keys(myPrototypeChild);

Object.keys(myPrototypeChild); // marco

for(let key of Object.keys(myPrototypeChild)) {

}

