// 5-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
    let spy;

    beforeEach(function() {
        // Spy on console.log
        spy = sinon.spy(console, 'log');
    });

    afterEach(function() {
        // Restore the spy
        spy.restore();
    });

    it('should log the correct message when called with 100 and 20', function() {
        sendPaymentRequestToApi(100, 20);

        expect(spy.calledOnceWith('The total is: 120')).to.be.true;
    });

    it('should log the correct message when called with 10 and 10', function() {
        sendPaymentRequestToApi(10, 10);

        expect(spy.calledOnceWith('The total is: 20')).to.be.true;
    });
});
