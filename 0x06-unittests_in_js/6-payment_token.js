// 6-payment_token.js

function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            // Do nothing, or reject with an error if needed
            resolve(); // No data
        }
    });
}

module.exports = getPaymentTokenFromAPI;
