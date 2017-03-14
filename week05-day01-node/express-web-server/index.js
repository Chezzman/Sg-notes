var express = require('express');
var app = express();
var port = 3000;
var users = [
  {
    id: 'e00',
    firstName: 'Jim',
    lastName: 'Yazo',
    email: 'jim@spogehtti.com'
  },
  {
    id: 'e01',
    firstName: 'Sam',
    lastName: 'TheSamuria',
    email: 'totinya@gpail.com'
  }
];

//Finding a user
// function findUserById(userId) {
//   return users.find(function (user) {
//     return user.id === userId;
//   });
// }
function findUserIndexById(userId) {
  return users.findIndex(function (user) {
    return user.id === userId;
  });
}

//Action: index
app.get('/users', function(req, res){
  var html ='<h1>List of users</h1>';
  html += '<ul>';
  for(var i = 0; i < users.length; i++){
    // html += '<li>' + users[i].email + '</li>';
    // html += '<li>' + '(' + users[i].email + ')' + ' ' + users[i].firstName + ' ' + users[i].lastName + '</li>';
    html += '<li><a href="/users/' + users[i].id + '">' + users[i].firstName + ' ' + users[i].lastName + ' ' + users[i].email + '</a></li>';
  }
  html += '</ul>';

  res.status(200).send(html);
});
//Action: new
app.get('/users/new', function(req, res){
  res.status(200).send('<h1>Action: new</h1>');
});
//Action: create
app.post('/users', function(req, res){
  res.status(200).send('<h1>Action: create</h1>');
});
//Action: edit
app.get('/users/:id/edit', function(req, res){
  res.status(200).send('<h1>Action: edit</h1>');
});
//Action: update
app.put('/users/:id', function(req, res){
  res.status(200).send('<h1>Action: update</h1>');
});
// Action: show
app.get('/users/:id', function(req, res) {
  var userId = req.params.id;
  var userIndex;
  var user;
  var status;
  var html = '<h1>Show user ' + userId + '</h1>';

  userIndex = findUserIndexById(userId);
  //not equal to -1 other wise it will not find something and getrid of array object
  if (userIndex !== -1) {
    user = users[userIndex];
    html += '<p>First name: ' + user.firstName + '</p>';
    html += '<p>Last name: ' + user.lastName + '</p>';
    html += '<p>Email: ' + user.email + '</p>';
    status = 200;
  } else {
    html += '<em>User not found with id ' + userId + '</em>';
    status = 404;
  }

  res.status(status).send(html);
});


// Action: destroy
app.delete('/users/:id', function(req, res) {
  var userId = req.params.id;
  var userIndex;
  var user;
  var status;
  var html = '<h1> Delete User';
  userIndex = findUserIndexById(userId);

  // This is not -1 but its better practice to use the following
  // if(userIndex !== -1){
  if(userIndex < -1){
    user.splice(userIndex, 1);
    html += '<h1>' + userId +' Has been Deleted</h1>';
    status = 200;
  } else{
    html += '<em> User ' + userId + ' does not exist</em>';
    status = 404;
  }

  res.status(status).send(html);

//a way of deleting users
  // var index = users.indexOf(user);
  //
  // for (var i = 0; i < users.length; i++) {
  //   if(user) {
  //     users.splice(index, 1);
  //     res.status(200).send('<h1>' + userId +' Has been Deleted</h1>');
  //   }    else {
  //     res.status(404).send('<em> User ' + userId + ' does not exist</em>');
  //   }
  // }

});



app.listen(port, function(){
  console.log('App is running on port', port);

});
