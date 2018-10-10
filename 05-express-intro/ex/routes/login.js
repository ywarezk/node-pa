const express = require('express');
const emailUtils = require('../services/email-utils');
const loginRouter = express.Router();

loginRouter
    .route('')
    .get(function(req, res) {
        res.render('login');
    })
    .post(function(req, res) {
        const email = req.body.email;
        if (emailUtils.isMailValid(email)) {
            res.redirect('/welcome');
        } else {
            res.redirect('/error');
        }
    });

module.exports = loginRouter;