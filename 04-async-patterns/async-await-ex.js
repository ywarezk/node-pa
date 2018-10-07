// async await

// async function
// function that returns a promise
// function can exit and return multiple times
// await Promise

const timerPromise = require('./ex/timer-promise');
const readFilePromise = require('./ex/read-file-promise');
const getPromise = require('./ex/http-promise');

/**
 * @returns Promise<string>
 */
async function callbackHellExample() {
    let html; 
    try {
        await timerPromise(1000); // Promise<void>
    }
    catch(err) {
        console.log(err.message);
    }   
    try {
        const fileString = await readFilePromise('stam.txt'); // Promise<string>
        html = await getPromise(fileString); // Promise<string>
    } catch(err) {

    }
    return html;

    // running in parallel
    // await Promise.all([
    //     timerPromise(1000), 
    //     readFilePromise('stam.txt').then((fileString) => getPromise(fileString))
    // ])
}

// Promise.resolve('hello')
// Promise.reject(new Error())

callbackHellExample().then((html) => console.log(html));