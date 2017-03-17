var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users-controller');
var bookController = require('../controllers/book-controller');

router.get('/', function (req, res) {
  res.render('index', {
    title: 'Home'
  });
});
router.route('/users')
  .get(usersController.index)
  .post(usersController.create);

router.get('/users/new', usersController.new);
router.get('/users/:id/edit', usersController.edit);

router.route('/users/:id')
  .put(usersController.update)
  .get(usersController.show)
  .delete(usersController.destroy);

router.route('/book')
  .post(bookController.new)
  .get(bookController.create);

  
module.exports = router;
