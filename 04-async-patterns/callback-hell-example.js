// callback hell
// to much nesting functions

const fs = require('fs');
const https = require('https');

setTimeout(function() {
    fs.readFile('url.txt', 'utf8', function(err, textInFile) {

        https.get(textInFile, function(res) {

            // deal with response

        })

    })
}, 1000);

// how do i deal with async errors
// how do deal with error outside async functions

// this is bad pattern
// it will exit the process
try {
    fs.readFile('non-existent-file', function(err, result) {
        if (err) {
            throw err;
            // deal with exception
        }
    })
}
catch(err) {

}

function readFileWithError() {
    const myEmitter = new EventEmitter();
    fs.readFile('non-existent-file', function(err, result) {
        if (err) {
            myEmitter.emit('error', err);
            // throw err;
            // deal with exception
        }
        myEmitter.emit('data', result);
    });
    return myEmitter;
}


// async hell with promises

const timerPromise = require('./ex/timer-promise');
const readFilePromise = require('./ex/read-file-promise');
const getPromise = require('./ex/http-promise');

timerPromise(1000)
    .then(() => readFilePromise('stam.txt'))
    .then(url => getPromise(url))
    .then(function(html) {
        console.log(html);
    })