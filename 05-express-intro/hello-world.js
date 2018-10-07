const express = require('express');
const app = express();

app.get('*', function(req, res) {
    res.send('hello world');
})

app.listen(3001, function() {
    console.log('we are now listening on port 3001');
})