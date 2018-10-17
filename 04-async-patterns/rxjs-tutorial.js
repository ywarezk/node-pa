// rxjs tutorial

// install with npm

// Observers

// 
// import {Observer, Observable} from 'rxjs';

// myPromise.then(function resolve() {}, function reject())

// Promise<string>
// const myTimerPromise = new Promise(function(resolve, reject) {
//     // our async code
//     console.log('promise!!! timer calling set timeout');
    
//     setTimeout(function() {
//         console.log('promise!!! set timeout is now resolved');

//         // throw new Error();
//         resolve('hello from timer promise'); // can run resolve and reject once
//         // resolve('msg2');
//         // reject(new Error('something happened'));
//     }, 1000);
// });

const Observable = require('rxjs').Observable;

// // Observable<string>
// const myTimerObservable = Observable.create(function(observer) {
//     console.log('timer calling set timeout');
//     setTimeout(() => {
//         console.log('set timeout is now resolved');
//         observer.next('hello from timer promise');
//         observer.complete();
//     }, 1000);
// });



// // observable can have more than one data pulse
// // promise can call resolve or reject once

// // Promise<string> -> Promise<number>
// const myNumberPromise = myTimerPromise.then(function resolve(msg) {
//     return msg.length;
// }, function reject() {

// });



// // observable is cancelable
// // promise is not



// myTimerObservable.subscribe(function(msg) {

// });

// myTimerObservable.subscribe(function(msg) {

// });

// myTimerObservable.subscribe(function(msg) {

// });

// // observables are lazy - if there is no listener they won't run their async code
// // promises are not lazy


// myTimerPromise.then();
// myTimerPromise.then();
// myTimerPromise.then();

// // for observable calling X number of subscribe will run the async function X times
// // for promise calling X number of then will run the promise still only once.



// const myIntervalObservable = Observable.create(function(observer) {
//     let counter = 0;
//     const interId = setInterval(() => {
//         console.log('set interval');
//         observer.next(counter++);
//     }, 1000);

//     return function() {
//         console.log('tear down interval observable');
//         clearInterval(interId);
//     }
// });

// const intervalSubscription = myIntervalObservable.subscribe(
//     function success() {},
//     function error() {},
//     function complete() {}
// );

// setTimeout(() => {
//     intervalSubscription.unsubscribe();
// }, 3500);




const searchObservable = Observable.create(function(observer) {
    setTimeout(() => {
        observer.next('n');
    },100)

    setTimeout(() => {
        observer.next('ne');
    },200)

    setTimeout(() => {
        observer.next('nerdeez');
    },300)

    setTimeout(() => {
        observer.complete();
    },2000);
});


const debounce = require('rxjs/operators').debounceTime;
const map = require('rxjs/operators').map;


searchObservable.subscribe(function(msg) {
    console.log(`original search: ${msg}`);
})

searchObservable.pipe(
    debounce(500),
    map((msg) => msg.length)
).subscribe(function(msg) {
    console.log(`transformed observable: ${msg}`);
})
