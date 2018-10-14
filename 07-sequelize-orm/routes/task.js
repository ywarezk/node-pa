
const express = require('express');
const sequelize = require('../db');
const path = require('path');
const taskRouter = express.Router();

const Task = sequelize.import(path.resolve(__dirname, '../models/task'));
const User = sequelize.import(path.resolve(__dirname, '../models/user'));

taskRouter.route('')
    .get(async (req, res) => {
        try {
            const tasks = await Task.findAll({
                include: User
            });
            res.json(tasks);
        } catch(err) {
            res.status(500).json(err);
        }
        
    })
    .post(async (req, res) => {
        try {
            const task = await Task.create(req.body);
            res.json(task);
        } catch(err) {
            res.status(500).json(err);
        }
    });

module.exports = taskRouter;