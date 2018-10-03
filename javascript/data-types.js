// data types in js

// primitives

// string

var myString = 'hel"""""lo';
var myString2 = "hel'''''lo"
var myString3 = `
sdfgsd
sdfgsd
sdfgsdfg
${myString}
`;

// myString[0] = 'g'; // this is wrong
console.log(myString[0]); // this is ok


// number

var myNumber = 10;
var myNumber2 = 10.5;
var myNumber2 = -10;

// boolean

var mybool = true;
var mybool = false;

// advanced data types

var myDict = {'hello': 'world', foo: 'bar', 'foo-bar': 'sdfgsdfg', 10: 'foo bar', 'complex': {}};
myDict['hello'] = 10;
myDict['foo'] = 10;
myDict['10'];
myDict.foo;
myDict.hello
//myDict.foo-bar;



const myConsole = {
    log: function(argToPrint) {
        // send to v8
    }
}



