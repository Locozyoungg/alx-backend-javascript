const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('should return 6 when inputs are 1.4 and 4.5', function() {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 7 when inputs are 3.7 and 3.2', function() {
            assert.strictEqual(calculateNumber('SUM', 3.7, 3.2), 7);
        });
    });

    describe('SUBTRACT', function() {
        it('should return -4 when inputs are 1.4 and 4.5', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return 1 when inputs are 5.5 and 4.5', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 4.5), 1);
        });
    });

    describe('DIVIDE', function() {
        it('should return 0.2 when inputs are 1.4 and 4.5', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return Error when second input rounds to 0', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });

        it('should return 2 when inputs are 5.8 and 2.4', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 5.8, 2.4), 3);
        });          
    });
});
