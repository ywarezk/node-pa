

const EventEmitter = require('events');


const myTimerEvents = new EventEmitter();

setTimeout(function() {
    myTimerEvents.emit('somethingHappened', 'this will be passed to listeners', 1, 2);
    // all listener will run before second emit
    myTimerEvents.emit('somethingHappened', 'this will be passed to listeners', 1, 2);
}, 1000);

setTimeout(function() {
    myTimerEvents.emit('error', 'asdfasdf');
}, 2000);

// myTimerEvents.on('somethingHappened', function(msg, num1, num2) {
//     console.log(msg);
// });


myTimerEvents.once('somethingHappened', function(msg, num1, num2) {
    console.log(msg);
});

myTimerEvents.on('error', function(msg) {
    console.log(`now the process caught the error and wont exit ${msg}`);
});


// class Http extends EventEmitter {

// }

setInterval(function heartbeat() {
    console.log('heartbeat');
}, 1000);