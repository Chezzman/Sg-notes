/* global describe, it, beforeEach */

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
var expect = chai.expect;
var request;

chai.should();
chai.use(chaiHttp);

// We are looking for HTML that looks like this:
// <a href="/users/58cbb8e616f8b0228f71b315">
// We can the extract the user ID from the `href` attribute using a regex.
function getFirstUserIdFromUserListHTML(html) {
  var regEx = /\/users\/[0-9a-f]+/;
  var result = regEx.exec(html)[0];
  var pathElements = result.split('/');

  return pathElements[2];
}
function generateUniqueFirstName(){
  return 'firstName' + Math.random();
}

describe('Users', function () {
  beforeEach(function () {
    request = chai.request(app);
  });

  describe('GET', function () {
    it('should return error for invalid URL GET', function (done) {
      request
        .get('/invalid_url')
        .end(function (err) {
          expect(err).not.to.be.null;
          done();
        });
    });
    it('should list all users for GET /users', function (done) {
      request
        .get('/users')
        .end(function (err, res) {
          expect(err).to.be.null;
          res.should.have.status(200);
          res.should.be.html;
          res.text.should.match(/User list/);
          done();
        });
    });
  });
  describe('PUT', function () {
    it('should return error for non-existent user id', function (done) {
      request
          .put('/users/non-existent-user-id')
          .end(function (err, res) {
            res.should.have.status(404);
            done();
          });
    });
    it('should return correct result of an update existing user', function (done) {
      request
          .get('/users/')
          .end(function (err, res) {
            var userId = getFirstUserIdFromUserListHTML(res.text);

            request
              .put('/users/' + userId)
              .set('content-type', 'application/x-www-form-urlencoded')
              .send({'firstName': 'Benwa', 'lastName': 'Sir' , 'email': 'bulls@tomato.com'})
              .end(function (err, res) {
                res.should.have.status(200);
                res.text.should.match(/Benwa/);
                res.text.should.match(/Sir/);

                done();
              });
          });
    });
  });
  describe('POST', function () {
    it('should return error when firstName first name is blank', function (done) {
      request
        .post('/users')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({ email: 'testpostfirstname@err.com' })
        .end(function (err, res) {
          var jsonResponse = JSON.parse(res.text);

          res.should.have.status(400);
          expect(jsonResponse).to.be.a('array');
          expect(jsonResponse.length).to.equal(1);
          expect(jsonResponse[0].path).to.equal('firstName');
          done();
        });
    });
    it('should return error when email was blank', function (done) {
      request
        .post('/users')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({ firstName: 'testName'})
        .end(function (err, res) {
          var jsonResponse = JSON.parse(res.text);

          res.should.have.status(400);
          expect(jsonResponse).to.be.a('array');
          expect(jsonResponse.length).to.equal(1);
          expect(jsonResponse[0].path).to.equal('email');
          done();
        });
    });
    it.only('should create new user when input data is valid', function(done){
      var testFirstName = generateUniqueFirstName();
      request
        .post('/users')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({ firstName: testFirstName, email: 'testpost@example.com'})
        .end(function (err, res) {
          var firstNameRegExp = new RegExp(testFirstName);

          res.should.have.status(200);
          res.text.should.match(firstNameRegExp);

          request
            .get('/users' + );
          done();
        });
    });
  });


  describe('DELETE', function () {
    it('should return error for non-existent user id', function (done) {
      request
        .delete('/users/non-existent-user-id')
        .end(function (err, res) {
          res.should.have.status(404);
          done();
        });
    });
    it('should return correct result for existing user', function (done) {
      request
        .get('/users')
        .end(function (err, res) {
          var userId = getFirstUserIdFromUserListHTML(res.text);

          request
            .delete('/users/' + userId)
            .end(function (err, res) {
              res.should.have.status(200);
              done();
            });
        });
    });
  });
});
