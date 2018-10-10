const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const loginRouter = require('./routes/login');
const welcomeRouter = require('./routes/welcome');
const errorRouter = require('./routes/error');

const app = express();

app.use(bodyParser());

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/login', loginRouter);
app.use('/welcome', welcomeRouter);
app.use('/error', errorRouter);

app.listen(3001, function() {
    console.log('now listening on port 3001');
})