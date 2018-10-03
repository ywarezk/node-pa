// import { Student } from './student';

// require
// require is used for import modules

const fromSayHello = require('./say-hello'); // {hello: function...}
// function()...

// fromSayHello.hello();
// fromSayHello.anotherHello('foo bar');


fromSayHello();

const Student = require('./student');

const audi = new Student('Udi', 61);

