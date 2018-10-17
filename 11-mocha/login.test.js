/**
 * Testing the login routes
 */

require('./app');
const http = require('http');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const assert = require('assert');

describe('login routes', function() {

    // i want to make sure im getting a form with an email input with a name attribute equal to email
    it('login get without error', async function() {
        const html = await fetch('http://localhost:3001/login');
        const $ = cheerio.load(html);
        assert.equal($('form').length, 1);
        assert.equal($('input[name="email"]').length, 1);
    });

});