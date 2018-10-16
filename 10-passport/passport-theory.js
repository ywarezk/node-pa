

app.get('/login', function(req, res) {

})

app.get('/restricted', 
function(req, res, next) {
    // runs a certain strategy => user
    // place the user in the session
    // req.user = user    
    next()
},
function(req, res) {});

// app.all(/^\/restricted/, passport.authenticate('strategy we want to use', {options: for-passport}));


app.get('/restricted', 
passport.authenticate(['strategy we want to use', 'another-strategy'], {options: for-passport}),
function(req, res) {
    // i can use req.user
})