const assert = require('assert');

describe('my-first-test', function() {
    this.timeout(10000);

    // this // points to mocha object
   
    before(function() {
        // will run once before first test
    });

    beforeEach(function() {
        // will run before each test - 4 times
    });

    beforeEach(function(done) {
        
        setTimeout(() => {
            done();
        }, 2000);
    })

    // beforeEach(async function() {
    //     await somePromise;
    // })

    after(function() {
        // will run once after last test
    })

    afterEach(function() {
        // after each test - 4 times
    })


    it('testing true equal true', function() {
        assert.equal(true, true);
    });

    it('testing true equal true2', function() {
        assert.equal(true, true);
    });

    it('testing true equal true3', function() {
        assert.equal(true, true);
    });

    it('async test', function(done) {
        setTimeout(() => {
            assert.equal(true, true);
            done();
        }, 1000);
    });


});