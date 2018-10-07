const express = require('express');

const router = express.Router();

// router.get('/login', function(req, res) {
//     res.send('login page')
// });

// router.post('/login', function(req, res) {
//     res.send('dealt with post');
// })

router.route('')
    .get(function(req, res, next) {
        // res.send('login page')
        next()
    })
    .get(function(req, res) {
        // res.send('login page')
        res.render('login')
    })
    .post(function(req, res) {
        res.send('dealt with post');
    });

// router.get('/:id', function())

module.exports = router;