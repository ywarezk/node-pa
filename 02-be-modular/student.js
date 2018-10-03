

// Symbol

class Person {
    
    constructor(name = 'Yariv Katz') {
        this.name = name; // does it really represent the instance? 
    }

    sayHello() {
        console.log(`hello my name is ${this.name}`);
    }

}

export class Student extends Person {

    constructor(name, grade = 100) {
        super(name);
        this.grade = grade;
    }

    sayHello() {
        super.sayHello();
        console.log(`and my grade is: ${this.grade}`);
    }

    static aboutTheClass() {
        console.log(this); // Student
    }

}

// const me = new Student(undefined, 60);
// Student.aboutTheClass();

// module.exports = Student;

// module.exports = {
//     Student, Person
// }

// module.exports = {
//     Person: class Person { ...}
// }

// exports.Student = Student;
// exports.Person = Person;


