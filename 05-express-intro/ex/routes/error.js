const express = require('express');

const errorRouter = express.Router();

errorRouter.get('', function(req, res) {
    res.render('error');
})

module.exports = errorRouter;