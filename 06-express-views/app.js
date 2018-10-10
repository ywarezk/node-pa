const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.resolve(__dirname, 'assets')));

app.get('*', function(req, res) {
    res.render('hello', {
        name: 'Yariv Katz',
        groceries: [
            'soy milk',
            'tofu',
            'saten'    
        ],
        isAdmin: false
    });
    // res.sendFile('stam.html')
})

app.listen(3001, function() {
    console.log('we are now listening to 3001');
})