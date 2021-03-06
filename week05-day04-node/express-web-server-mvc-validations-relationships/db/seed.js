// Basic seeds file.
// Poorly-executed, but does the job of creating one user, who has 2 books.
var User = require('../models/user-model');
var Book = require('../models/book-model');
var mongoose = require('mongoose');

function seedData() {
//good practice to put variables at the top, each 'new Book()' creates an instance and resets instead of both going to the same thing
  var book1 = new Book();
  var book2 = new Book();
  var user = new User();
  var booksSaved = [];

//cleaner to define the object data here before using it further down, and can be used in any function bellow
  book1.title = 'Great Expectations';
  book1.author = 'Chucky D';
  book2.title = '1984';
  book2.author = 'George Orwell';
  user.firstName = 'Freddie';
  user.lastName = 'Mercury';
  user.email = 'freddie@example.com';

//starting the nesting that follows from initDb that saves each book and the user and pushes it to the database.
// at the end it closes the connection to the data base.
  book1.save(function (err, book1Result) {
    if (err) {
      console.log('could not create book1: err:', err);
      process.exit(1);
    }
    booksSaved.push(book1Result);
    book2.save(function (err, book2Result) {
      if (err) {
        console.log('could not create book2: err:', err);
        process.exit(1);
      }
      booksSaved.push(book2Result);
      console.log('booksSaved:', booksSaved);
      user.books.push(booksSaved[0]);
      user.books.push(booksSaved[1]);
      user.save(function (err, userResult) {
        if (err) {
          console.log('could not create user: err:', err);
          process.exit(1);
        }
        console.log('userSaved:', userResult);
        mongoose.connection.close();
      });
    });
  });
}

//this function is to remove the previous user and books, as we are manually putting them in they would stack
//WARNING:::!!!! only remove/drop collection on the localhost and do not send this to production...
//
function initDb() {
  mongoose.connect('mongodb://localhost/sg-mvc', {}, function (err) {
    if (err) {
      console.log('could not connect to db: err:', err);
      process.exit(1);
    }
    console.log('connected');
    User.remove({}, function(err) {
      if (err) {
        console.log('could not drop User collection: err:', err);
        process.exit(1);
      }
      console.log('dropped users');
      Book.remove({}, function(err) {
        if (err) {
          console.log('could not drop Book collection: err:', err);
          process.exit(1);
        }
        console.log('dropped books');
        seedData();
      });
    });
  });
}

initDb();
