/**
 * testing the EmailUtils singleton
 */

const EmailUtils = require('./mail-utils');
const assert = require('assert');

describe('EmailUtils', function() {
    let emailUtilsInstance;

    // populat emailUtilsInstance with the instance of the class we are checking
    before(function() {
        emailUtilsInstance = EmailUtils.getInstance();
    });

    // if email is valid true is returned
    it('valid mail', function() {
        assert.equal(
            emailUtilsInstance.isMailValid('yariv@nerdeez.com'),
            true
        );
    });

    it('invalid mail', function() {
        assert.equal(
            emailUtilsInstance.isMailValid('yariv katz'),
            false
        );
    });
});