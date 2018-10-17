/**
 * test file for the user rest api
 */

require('../app');
const fetch = require('node-fetch');
const assert = require('assert');
const sequelize = require('../db');
const path = require('path');
const User = sequelize.import(path.resolve(__dirname, '../models/user'));

describe('User Rest API', function() {

    // delete all the users table
    beforeEach(async function() {
        await User.destroy({
            where: {}
        });
    });

    // insert 3 constant users in users table
    beforeEach(async function() {
        await User.bulkCreate([
            {email: 'yariv@nerdeez.com'},
            {email: 'yariv2@nerdeez.com'},
            {email: 'yariv3@nerdeez.com'},
        ]);
    });

    it('test get all users', async function() {
        const res = await fetch('http://localhost:3001/api/user');
        const json = await res.json();
        assert.equal(json.length, 3);
    });

    it('test get all users', async function() {
        const res = await fetch('http://localhost:3001/api/user', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'stam@gmail.com'
            })
        });
        const json = await res.json();
        assert.equal(json.email, 'stam@gmail.com');
    });

});