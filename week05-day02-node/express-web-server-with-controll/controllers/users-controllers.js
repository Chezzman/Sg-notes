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

function getNextUserId() {
  currentUserId++;
  return currentUserId.toString();
}

// Action: index
function indexUsers(req, res) {
  res.render('users/index', {
    title: 'User list: ',
    users: users
  });
}

// Action: new
function newUser(req, res) {
  res.render('users/new', {
    users: users,
    title: 'New user'
  });

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
  res.redirect('/users');
}

// Action: edit
function editUser(req, res) {
  var userId = req.body.id;
  res.render('users/edit',{
    title: 'Edit user' + userId ,
    users: users
  });

}

// Action: update
function updateUser(req, res) {
  res.render('users/update', {
    users: users,
    title: 'Update user'
  });
  var userId = req.params.id;
  var user;
  var json;
  var html = '<h1>Updating user with id: ' + userId + '</h1>';
  var userIndex = findUserIndexById(userId);


  if (userIndex !== -1) {
    user = users[userIndex];
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    html += '<p>User updated</p>';
    res.redirect('/users');
  } else {
    json = { error: 'Could not find user with id ' + userId};
    res.status(404).json(json);
  }
}

// Action: show
function showUser(req, res) {
  var userId = req.params.id;
  var userIndex;
  var user;
  var status;

  userIndex = findUserIndexById(userId);

  if (userIndex !== -1) {
    user = users[userIndex];
  } else {
    status = 404;
  }

  res.status(status).render('users/show', {
    title: 'Show user ' + userId,
    user: user
  });
}

// Action: destroy
function destroyUser(req, res) {
  res.render('users/delete', {
    users: users,
    title: 'Delete user'
  });
  var userId = req.params.id;
  var userIndex;
  var json;
  var html = '<h1>Delete user ' + userId + '</h1>';

  userIndex = findUserIndexById(userId);

  if (userIndex !== -1) {
    // user exists
    users.splice(userIndex, 1);
    res.redirect('/users');
    html += 'User with id ' + userId + ' deleted';
  } else {
    // trying to delete non-existent user
    json = { error: 'Could not find user with id ' + userId}
    res.status(404).json(json);
  }
}

module.exports = {
  index: indexUsers,
  new: newUser,
  create: createUser,
  edit: editUser,
  update: updateUser,
  show: showUser,
  destroy: destroyUser
};
