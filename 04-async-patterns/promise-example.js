// Promise

// what is promise
// class that wraps async code
// promise has 3 states: 
// - pending - async code didnt return an answer
// - resolved - async code returned successfuly
// - rejected - async code returned error
// Promise<string/number/any>


// Promise<string>
const myTimerPromise = new Promise(function(resolve, reject) {
    // our async code
    
    setTimeout(function() {
        // throw new Error();
        resolve('hello from timer promise'); // can run resolve and reject once
        // resolve('msg2');
        // reject(new Error('something happened'));
    }, 1000);
});


// then will subscribe listeners to the promise
// then will return a promise Promise<number | string>
// even if promise is reject, the reject function will also cause then to return a promise
// promise chaining
// if then the success function, returns a promise<data> the next promise will Proimse<data>

const myStringPromise = myTimerPromise.then(
    function whenResolved(msg) {
        console.log('this function will run when promise is in resolve state ' + msg)
        // return msg.length;

    }, 
    function whenReject(err) {
        console.log(err.message);
        return err.message;
    }
).then(
    function(num) {

    }
)
.then(
    function() {

    }
)

// i want promise to query server
// resolve with json
// convert json to instance of my class

const myTimerFakesHttp = new Promise(function(resolve, reject) {

    // https.get('xcvxcv', function(res) {})
    // res.on('end', function() {resolve(json)})

    setTimeout(function() {
        resolve([
            {id: 1, title: 'task'},
            {id: 2, title: 'task'},
            {id: 3, title: 'task'}
        ]);
    }, 1000);

});

// Promise<Array<any>>
// Promise<Array<Todo>>

myTimerFakesHttp.then(
    function(json) {
        // const arrTodos = [];
        // for (let item of json) {
        //     arrTodos.push(new Todo(item));
        // }
        // return arrTodos;
        return json.map(item => new Todo(item));

        // return promise
    }
)
.catch(function() {
    // this will jump if one of these promises reject
    // Promise<Array<any>>
    // Promise<Todo[]>
})
.then(
    function(arrTodoInstance) {

    }
)

// catch
// short writing : then(undefined, function reject() {})

// two types of catching async errors
// - critical error - stop the async actions
// - non critical error - dont stop other async tasks

// timerAsPromise(1000) => Promise<void>
// readFileAsPromise('path to file') => Promise<string>
// httpAsPromise('url') => Promise<string>

// timerAsPromise(1000)
//     .then(function() {
//         return readFileAsPromise('path to file');
//     })
//     .catch(function onRejected(err) { //non critical error
//         console.log(err.message);
//         return readFileAsPromise('path to another file');
//     })
//     .then(function(stringAsFile) {
//         return httpAsPromise(stringAsFile);
//     })
//     .then(function(jsonString) {

//     })
//     .catch(function() {

//     });

// how do make async work in parallel




// Promise.all(
//     [timerAsPromise(1000), readFileAsPromise('path to file'), httpAsPromise('url') ]
// ).then(function resolve(arrayOfAnswersFromOtherPromises) {

// }).catch(function() {
//     // if one will send an error
// });

// Promises

// how do we want to run the async code: 
// - one after another
// - in parallel
// - combination of the two

// how do we deal with error
// - is error critical? non critical? 
// - apply catch functions accordingly




// const fsPromises = require('fs').promises;

// fsPromises.readFile('path-to-file').then(
//     function(dataOfFile) {

//     }, 
//     function(err) {

//     }
// );

