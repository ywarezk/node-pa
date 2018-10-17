

const express = require('express');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const PassportCustom = require('passport-custom');
const jwt = require('jsonwebtoken');
const PassportJwt = require('passport-jwt').Strategy;
const PassportJwtExtractFn = require('passport-jwt').ExtractJwt;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.resolve(__dirname, 'assets')));



app.use(session({
    secret: 'nerdeez.com'
}));

// 1. install passport middlewares
app.use(passport.initialize()); // req.userFromPassport
app.use(passport.session());

// 2. define passport to use a strategy
passport.use('helloworld', new PassportCustom(function(req, done){
    // in here we need to authenticate the user
    // done(null, {foo: 'bar'} ); // success we found the user
    // done(null, false ); // authentication fails

    if (req.headers.hello === 'world') {
        done(null, {foo: 'bar'});
    } else {
        done(null, false);
    }
}));

passport.use('jwt', new PassportJwt({
    secretOrKey: 'nerdeez.com',
    jwtFromRequest: PassportJwtExtractFn.fromAuthHeaderAsBearerToken()
}, function verify(payload, done) {
    // payload - {id: pk in user database}
    // our user {foo: 'bar'}
    // User.findById(payload.id).then((user) => done(null, user))
    done(null, payload);
}));

// what to put in the session
// i want to put the minimum amount of data
passport.serializeUser(function(user, done) {
    done(null, user);
    // done(null, user.id); // the popular way
});

// take the data from the session and convert it to our user object
passport.deserializeUser(function(whatWePutInSession, done) {
    // User.findById(whatWePutInSession).then((user) => done(null, user)) // popular
    done(null, whatWePutInSession);
})


app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/login', passport.authenticate('helloworld', {
    failureRedirect: '/error'
}), function(req, res) {
    // create the jwt token and pass it to the browser
    const token = jwt.sign(req.user, 'nerdeez.com');
    res.send(token);
});


app.get('/restricted', isLoggedInBySession, function(req, res) {
    res.render('restricted');
});

app.get('/todo', passport.authenticate('jwt', {
    session: false
}), function(req, res) {
    // req.user will contain user from database
    res.json([
        'buy grocery',
        'walk piglet',
        'play piglet'
    ]);
})

app.get('/error', function(req, res) {
    res.render('error');
});


app.listen(3001, function() {
    console.log('now listening on port 3001');
})

// is the user logged in before? 
// is the user have a valid logged in session? 
function isLoggedInBySession(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/error');
    }
}