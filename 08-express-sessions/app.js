

const express = require('express');
const path = require('path');
const session = require('express-session');
const PgStore = require('connect-pg-simple')(session);
const RedisStore = require('connect-redis')(session);
const csurf = require('csurf');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

// sessions
// the middleware for session is called express-session
app.use(session({
    secret: 'nerdeez.com',
    store: new RedisStore({
        url: 'redis://localhost:6379'
    }),
    resave: false
}));

app.use(csurf())

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.route('/login')
    .get(function(req, res) {
        const token = req.csrfToken();
        res.render('login', {token})
    })
    .post(function(req, res) {
        const name = req.body.name;
        req.session.name = name;
        res.redirect('/welcome'); 
    });



app.get('/welcome', function(req, res) {
    // i can access the name in the login post
    const name = req.session.name;
    // delete req.session.name // delete data from session
    res.render('welcome', {name})
});



app.listen(3001, function() {
    console.log('now listening on port 3001');
})