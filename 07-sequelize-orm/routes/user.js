/**
 * Router for the rest api for the users table
 */

const express = require('express');
const sequelize = require('../db');
const path = require('path');
const userRouter = express.Router();

const User = sequelize.import(path.resolve(__dirname, '../models/user'));

userRouter.route('')
    .get(async (req, res) => {

        // Promise<User[]>
        try {
            const users = await User.findAll();
            res.json(users);
        } catch(err) {
            res.status(500).json({
                DBFAIL: 'failed to grab users from db'
            });
        }
    })
    .post(async (req, res) => {
        // {email: 'yariv@nerdeez.com'}
        try {
            const user = await User.create(req.body)
            res.json(user);
        } catch(err) {
            res.status(500).json({
                DBFAIL: err.message
            });
        }
    });

userRouter.route('/:id')
    .all(async (req, res, next) => {
        const id = req.params.id;
        let user;
        try {
            user = await User.findById(id);
        } catch(err) {
            res.json(err.message);
        }
        if (!user) {
            return res.status(404).json({
                NOTFOUND: 'user not found'
            });
        }
        req.paUser = user;
        next();
    })
    .get(async (req, res) => {
        const user = req.paUser;
        return res.json(user);
    })
    .put(async (req, res) => {
        const user = req.paUser;
        try {
            await user.update(req.body);
        } catch(err) {
            return res.status(500).json(err.message);
        }
        res.json(user);
    })
    .delete(async (req, res) => {
        const user = req.paUser;
        await user.destroy();
        res.status(204).json();
    });

 module.exports = userRouter;