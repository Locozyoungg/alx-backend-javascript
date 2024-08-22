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
    it('should return status code 200 for index', (done) => {
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
});
