const filter = require('async/filter');
const map = require('async/map');
const fs = require('fs');
const util = require('util');


// filter
// runs in parallel
// gets async predicate function
// end function will get results with predicate equals true

filter(
    ['README.md', 'stam.txt', 'zxcvzxcv.sdfsdf'], 
    function(itemFromCollection, callback) {
        fs.readFile(itemFromCollection, function(err, result) {
            if (err) {
                callback(null, false);
            } else {
                callback(null, true);
            }
        });
    },
    function(err, result) {

    }
)

util.promisify(filter)(
    ['README.md', 'stam.txt', 'zxcvzxcv.sdfsdf'], 
    function(itemFromCollection, callback) {
    fs.readFile(itemFromCollection, function(err, result) {
        if (err) {
            callback(null, false);
        } else {
            callback(null, true);
        }
    })
}).then((result) => {
    console.log(result);
}).catch((err) => {console.log(err.message)});

// map

map(['README.md', 'stam.txt'], function(itemFromCollection, callback) {
    fs.readFile(itemFromCollection, function(err, result) {
        if (err) {
            callback(err);
        } else {
            callback(null, result.toString());
        }
    })
}, function(err, results) {
    console.log(results);
})

util.promisify(map)(
    ['README.md', 'stam.txt'],
    function(itemFromCollection, callback) {
        fs.readFile(itemFromCollection, function(err, result) {
            if (err) {
                callback(err);
            } else {
                callback(null, result.toString());
            }
        })
    }
)


const waterfall = require('async/waterfall');

util.promisify(waterfall)(
    [
        function(callback) {
            setTimeout(() => {
                callback(null, 1);
            }, 1000)
        },
        
        function(one, callback) {
            setTimeout(() => {
                callback(null, one + 10);
            }, 2000)
        }
    ]
).then((result) => {
    console.log(result);
})

const timeout = require('async/timeout');

function timerError(callback) {
    setTimeout(() => {
        callback(null, true);
    }, 3000)
}

timeout(
    timerError,
    1000
)(function(err) {
    console.log(err.message);
})