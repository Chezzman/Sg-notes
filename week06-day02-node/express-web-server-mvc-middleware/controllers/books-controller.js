var Book = require('../models/book-model');
var User = require('../models/user-model');
// // Action: new
// function newBook(req, res) {
//   res.render('books/new', {
//     title: 'New book'
//   });
// }

// Action: create
function createBook(req, res) {
  var newBook = new Book();
  var userId = req.body.userId;

  newBook.user = userId;
  newBook.title = req.body.title;
  newBook.author = req.body.author;

  newBook.save(function (err, savedBook) {
    var errorJson = [];

    if (err) {
      for (var path in err.errors) {
        errorJson.push({
          path: path,
          message: err.errors[path].message
        });
        console.log('Could not create new book: error:', err.errors[path].message);
      }
      res.status(400).json(errorJson);
      return;
    }

    // the new book  has been created and saved to the db
    // now we need to add the id of this new book to the 'books' array
    //of the user whos userId we have been passed in.
    //so the first step is to find that user:
    User.findOne({ _id: userId }, function (err, user) {
      if (err) {
        console.log('Could not get user to add book to:', err);
        res.status(404).send('Could not get user to add book to');
        return;
      }
      user.books.push(savedBook._id);
      user.save(function (err){
        if(err){
          console.log('Could not get user to add book to:', err);
          res.status(404).send('Could not get user to add book to');
          return;
        }
        res.redirect('/users/' + userId);

      });
    });
  });
}

// Action: edit
function editBook(req, res) {
  var bookId = req.params.id;

  Book.findOne({ _id: bookId }, function (err, book) {
    if (err) {
      console.log('Could not get book:', err);
      // ditto comment above re. keeping complexity to a minimum:
      res.status(404).send('Could not get book');
      return;
    }
    res.render('books/edit', {
      title: 'Edit Book',
      book: book
    });
  });
}

// Action: update
function updateBook(req, res) {
  var bookId = req.params.id;
  var userId = req.body.userId;
  var updatedBook = {
    title: req.body.title,
    author: req.body.author
  };

  Book.findOneAndUpdate({ _id: bookId }, updatedBook, function (err) {
    if (err) {
      console.log('Could not get existing book to update:', err.message);
      // ditto comment above re. keeping complexity to a minimum:
      res.status(404).send('Could not get existing book to update');
      return;
    }
    res.redirect('/users/' + userId);
  });
}



// Action: destroy
function destroyBook(req, res) {
  //this is req.params as its a parameter passed through the url within the router.
  var bookId = req.params.id;
  //req.body as its within the html "body"
  var userId = req.body.userId;

  Book.deleteOne({ _id: bookId }, function (err) {
    if (err) {
      console.log('Could not get book to delete:', err.message);
      // ditto comment above re. keeping complexity to a minimum:
      res.status(404).send('Could not get book to delete');
      return;
    }
    res.redirect('/users/' + userId);
  });
}

module.exports = {
  create: createBook,
  edit: editBook,
  update: updateBook,
  destroy: destroyBook
};
