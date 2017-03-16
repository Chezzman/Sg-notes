var mongoose = require('mongoose');

var User = mongoose.model('User', {
  firstName: {
    type: String,
    required: [true, 'Theres no name']
  },
  lastName: String,
  email: {
    type: String,
    required: [true]
  }
});

module.exports = User;
