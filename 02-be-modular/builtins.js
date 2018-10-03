
const fileSystem = require('fs');

const stam = fileSystem.readFileSync('stam.txt');
console.log(stam.toString());