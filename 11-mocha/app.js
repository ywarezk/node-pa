const express = require('express');
const path = require('path');
const EmailUtils = require('./services/mail-utils');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded());

app.route('/login')
    .get(function(req, res) {
        // request get for the login form
        const error = req.query.error;
        res.render('login', {error});
    })
    .post(function(req, res) {
        // when user posts the login form
        
        const email = req.body.email;
        if (EmailUtils.getInstance().isMailValid(email)) {
            res.redirect('/welcome');
        } else {
            res.redirect('/login?error=mail')
        }
    });

app.get('/welcome', function(req, res) {
    // if user entered valid email he will be directed here

    res.send('you are now logged in');
})

app.listen(3001, function() {
    console.log('now listening on port 3001');
})