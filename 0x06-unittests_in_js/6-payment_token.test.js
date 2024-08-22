// 6-payment_token.test.js

const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function() {
    it('should return successful response when success is true', function(done) {
        getPaymentTokenFromAPI(true)
            .then(response => {
                try {
                    expect(response).to.deep.equal({ data: 'Successful response from the API' });
                    done(); // Notify Mocha that the test is complete
                } catch (error) {
                    done(error); // Pass the error to Mocha if the assertion fails
                }
            })
            .catch(done); // Handle promise rejection
    });

    it('should return undefined when success is false', function(done) {
        getPaymentTokenFromAPI(false)
            .then(response => {
                try {
                    expect(response).to.be.undefined;
                    done(); // Notify Mocha that the test is complete
                } catch (error) {
                    done(error); // Pass the error to Mocha if the assertion fails
                }
            })
            .catch(done); // Handle promise rejection
    });
});
