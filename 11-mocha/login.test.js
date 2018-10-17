/**
 * Testing the login routes
 */

require('./app');
const http = require('http');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const assert = require('assert');
const sinon = require('sinon');
const EmailUtils = require('./services/mail-utils');

describe('login routes', function() {

    // sinon.fake.returns(true); function that always returns true that i can replace with service
    // sinon.replace()
    // sinon.restore()

    // replace isMailValid with fake that always returns true
    function replaceIsMailValidWithTruthy() {
        const fake = sinon.fake.returns(true);
        sinon.replace(EmailUtils.prototype, 'isMailValid', fake);
    }

    // replace isMailValid with fake that always returns false
    function replaceIsMailValidWithFalsy() {
        const fake = sinon.fake.returns(false);
        sinon.replace(EmailUtils.prototype, 'isMailValid', fake);
        // sinon.replace(EmailUtils, 'prototype', fake);
    }

    afterEach(function() {
        sinon.restore();
    })

    // i want to make sure im getting a form with an email input with a name attribute equal to email
    it('login get without error', async function() {
        const html = await fetch('http://localhost:3001/login');
        const body = html.body.read().toString();
        const $ = cheerio.load(body);
        assert.equal($('form').length, 1);
        assert.equal($('input[name="email"]').length, 1);
    });

    it('login with error', async function() {
        const html = await fetch('http://localhost:3001/login?error=badmail');
        const body = html.body.read().toString();
        const $ = cheerio.load(body);
        assert.equal($('.label-danger').length, 1);
    });

    it('login with good mail', async function() {
        replaceIsMailValidWithTruthy();
        const res = await fetch('http://localhost:3001/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: 'yarivnerdeezcom'})
        });
        assert.notEqual(res.url.indexOf('/welcome'), -1);
    })

    it('login with bad mail', async function() {
        replaceIsMailValidWithFalsy();
        const res = await fetch('http://localhost:3001/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: 'yariv'})
        });
        assert.notEqual(res.url.indexOf('/login'), -1);
    });


});