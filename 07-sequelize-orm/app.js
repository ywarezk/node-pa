const express = require('express');
const userRouter = require('./routes/user');
const taskRouter = require('./routes/task');
// const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/api/user', userRouter);
app.use('/api/task', taskRouter);

app.listen(3001, function() {
    console.log('we are now listening on port 3001');
})