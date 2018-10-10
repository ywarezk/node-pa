const express = require('express');

const welcomeRouter = express.Router();

welcomeRouter.get('', function(req, res) {
    res.render('welcome');
})

module.exports = welcomeRouter;