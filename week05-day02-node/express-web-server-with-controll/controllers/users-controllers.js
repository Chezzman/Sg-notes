var users = [
  {
    id: '994',
    firstName: 'Jimmy',
    lastName: 'Fallon',
    email: 'jim@example.com'
  },
  {
    id: 'e01',
    firstName: 'Bob',
    lastName: 'Geldof',
    email: 'bob@example.com'
  }
];
var currentUserId = 100;

function findUserIndexById(userId) {
  return users.findIndex(function (user) {
    return user.id === userId;
  });
}

function getNextUserId(){
  currentUserId++;

  return currentUserId.toString();
}

// Action: index
function indexUsers(req, res) {
  //res.render will search for views folder, so specifie the ejs file
  res.render('users/index', { title: 'Users list', users: users});
}
// Action: new
function newUser(req, res) {
  res.status(200).send('<h1>Action: new</h1>');
}
// Action: create
function createUser(req, res) {
  var userId = getNextUserId();
  var newUser = {
    id: userId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  };
  users.push(newUser);
  console.log('req.body: ', req.body);
  res.status(200).send('<h1>Action: create new user ' + userId + '</h1>');
}
// Action: edit
function editUser(req, res) {
  res.status(200).send('<h1>Action: edit</h1>');
}
// Action: update
function updateUser(req, res) {
  var userId = req.params.id;
  var userIndex;
  var user;
  var status;
  var html = '<h1>Updating user with id ' + userId + '</h1>';
  userIndex = findUserIndexById(userId);
  if(userIndex > -1){
    user = users[userIndex];
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    status = 200;
    html += '<p>User update</p>';
  }else{
    html += '<em>Could not find user with id ' + userId + '</em>';
    status = 404;
  }

  res.status(status).send(html);

}
// Action: show
function showUser(req, res) {
  var userId = req.params.id;
  var userIndex;
  var user;
  var status;
  var html = '<h1>Show user ' + userId + '</h1>';


  userIndex = findUserIndexById(userId);

  if (userIndex !== -1) {
    user = users[userIndex];
    status = 200;
  } else {
    status = 404;
  }

  res.status(status).render('users/show',{
    title: 'Show user' + userId,
    user: user
  });
}
// Action: destroy
function deleteUser(req, res) {
  var userId = req.params.id;
  var userIndex;
  var status;
  var html = '<h1>Delete user ' + userId + '</h1>';

  userIndex = findUserIndexById(userId);

  if (userIndex !== -1) {
    // user exists
    users.splice(userIndex, 1);
    status = 200;
    html += 'User with id ' + userId + ' deleted';
  } else {
    // trying to delete non-existent user
    status = 404;
    html += '<em>User with id ' + userId + ' does not exist; cannot delete</em>';
  }
  res.status(status).send(html);
}

module.exports = {
  index: indexUsers,
  new: newUser,
  create: createUser,
  edit: editUser,
  update: updateUser,
  show: showUser,
  destroy: deleteUser
};
