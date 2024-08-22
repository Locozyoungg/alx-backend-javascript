// 4-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
    let stub;
    let spy;

    beforeEach(function() {
        // Stub Utils.calculateNumber to always return 10
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Spy on console.log to verify the correct message is logged
        spy = sinon.spy(console, 'log');
    });

    afterEach(function() {
        // Restore the stub and spy
        stub.restore();
        spy.restore();
    });

    it('should call Utils.calculateNumber with the correct arguments', function() {
        sendPaymentRequestToApi(100, 20);

        expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;
    });

    it('should log the correct message to the console', function() {
        sendPaymentRequestToApi(100, 20);

        expect(spy.calledOnceWith('The total is: 10')).to.be.true;
    });
});
