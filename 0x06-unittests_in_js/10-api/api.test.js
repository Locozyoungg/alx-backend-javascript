const request = require('request');
const expect = require('chai').expect;

describe('API Tests', () => {
  let server;

  before((done) => {
    // Start the server
    server = require('./api');
    done();
  });

  after((done) => {
    // Close the server after tests
    server.close(done);
  });

  describe('Index page', () => {
    it('should return status code 200 and correct message for index', (done) => {
      request.get('http://localhost:7865', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('Cart page', () => {
    it('should return status code 200 and correct message for cart with numeric id', (done) => {
      request.get('http://localhost:7865/cart/12', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return 404 for cart with non-numeric id', (done) => {
      request.get('http://localhost:7865/cart/hello', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('Available payments', () => {
    it('should return status code 200 and correct JSON structure', (done) => {
      request.get('http://localhost:7865/available_payments', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        const expected = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        expect(JSON.parse(body)).to.deep.equal(expected);
        done();
      });
    });
  });

  describe('Login page', () => {
    it('should return status code 200 and correct message for POST request', (done) => {
      request.post({
        url: 'http://localhost:7865/login',
        body: JSON.stringify({ userName: 'Betty' }),
        headers: { 'Content-Type': 'application/json' }
      }, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });
});
