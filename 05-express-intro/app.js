const express = require('express');
const httpPromise = require('./services/http-promise')
const app = express();
const loginRouter = require('./routes/login');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser());
app.use(express.static(path.resolve(__dirname, 'assets')))

app.set('views', path.resolve(__dirname, 'views')); // tell express where the directory of the templates
app.set('view engine', 'pug')



// middlewares
// function (req, res, next) {}
// adds functionality
// mostly middlewares are used to install community packages

app.use(function(req, res, next) {
    req.message = 'hello world';
    next();
});

// app.use(express.static(path to static folder))
// this will enter on request with method: get + path: /login
// app.get('/lo?gin', function(req, res) { //lgin, login
//     // res.send('hello world');
//     res.send(req.message);
// });

app.get(/[1-9]+$/, function(req, res) {
    // res.send('hello world');
    res.send(req.message);
});



// app.post('/login', function(req, res) {

// });

// app.all('/login', function(req, res) {
//     // this will be called on login post, put, delete...
// })

app.get('/todo', function(req, res) {

    httpPromise('https://nztodo.herokuapp.com/api/task/?format=json')
        .then((htmlAsString) => {
            res.send(htmlAsString);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        })
});

//todo/:id
app.get('/todo/:id/:stam/:details', function(req, res) {
    // req.body
    res.send(`${req.params.id} ${req.params.stam} ${req.params.details}`);
});



// connecting a router
app.use('/login', loginRouter)


app.listen(3001, function() {
    console.log('we are now listening on port 3001');
})