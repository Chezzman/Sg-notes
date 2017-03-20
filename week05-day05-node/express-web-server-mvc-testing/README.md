#Automative testing

##Why automate testing

. new ode might break existing functionality - referred to as regression
. to catch bugs before production
. quicker (and cheaper) than manual testing
. can be scheduled to run without human input
. helps you to think about your code structure - makes it more readable for tests and thus makes it better
. gives you more confidence in your code - WHICH IS MEGA!
. fix bug, write tests for it - makes the process more fluent - TDD




##things with AT
- CI - continuous integration
- TDD - Test Driven Development - test drives the development, find a bug, write the test, fix the bug, have a test for future issue.

- cost of finding fixing bugs - it can push back the release of a patch and thus can hold of potential...

test are only good as the person creating them
making test that are fit for purpose

key to know the most effective way to test the important functionality





  // describe('PUT', function () {
  //   it('should return error for non-existent user id', function (done) {
  //     request
  //       .put('/users/non-existent-user-id')
  //       .end(function (err, res) {
  //         res.should.have.status(404);
  //         done();
  //       });
  //   });
  //   it('should return correct result of an update existing user', function (done) {
  //     request
  //       .get('/users/')
  //       .end(function (err, res) {
  //         var userId = getFirstUserIdFromUserListHTML(res.text);
  //
  //         request
  //           .put('/users/' + userId)
  //           .set('content-type', 'application/x-www-form-urlencoded')
  //           .send({'firstName': 'Benwa', 'lastName': 'Sir' , 'email': 'bulls@tomato.com'})
  //           .end(function (err, res) {
  //             res.should.have.status(200);
  //             res.text.should.match(/Benwa/);
  //             res.text.should.match(/Sir/);
  //
  //             done();
  //           });
  //       });
  //   });
  // });
