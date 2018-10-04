

const EventEmitter = require('events');


const myTimerEvents = new EventEmitter();

setTimeout(function() {
    myTimerEvents.emit('somethingHappened', 'this will be passed to listeners', 1, 2);
}, 1000);

myTimerEvents.on('somethingHappened', function(msg, num1, num2) {
    console.log(msg);
});

