

const myArr = ['hello1', 'hello2', 'hello1', 'hello2', 10, {hello: 'world'}];

for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}

myArr[1]

myArr[2] = 'foo bar';

myArr.push('hello2');

myArr.splice(1, 1);

