(function(module) {
  function Book (opts) {
    // DONE: Convert property assignment to Functional Programming style. Now, ALL properties
    // of `opts` will be assigned as properies of the newly created article object.
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    }, this);
  }

  Book.all = [];

  Book.initPage = function() {
    var template = Handlebars.compile($('#book-template').text());
    var data = {
      books: Book.all,
      page: page,
      hasPrevPage: (page > 1),
      prevPage: page - 1,
      nextPage: page + 1
    };
    var html = template(data);
    $('#books').append(html);
  }

  // DONE: Set up a DB table for articles.
  Book.createTable = function(callback) {
    webDB.execute(
      // what SQL command do we run here inside these quotes?
      'CREATE TABLE IF NOT EXISTS books (' +
          'id INTEGER PRIMARY KEY, ' +
          'title VARCHAR(255) NOT NULL, ' +
          'author VARCHAR(255), ' +
          'year INTEGER NOT NULL);',
      function(result) {
        console.log('Successfully set up the book table.', result);
        if (callback) callback();
      }
    );
  };

  // DONE: Use correct SQL syntax to delete all records from the articles table.
  Book.truncateTable = function(callback) {
    webDB.execute(
      // <----finish the command here, inside the quotes.
      callback
    );
  };


  // DONE: Insert an article instance into the database:
  Book.prototype.insertRecord = function(callback) {
    webDB.execute (
        [
            {
              sql: 'INSERT INTO books (id, title, author, year) VALUES (?, ?, ?, ?);',
              data: [this.id, this.title, this.author, this.year]
            }
        ],
    callback);
  };

  // DONE: Refactor to expect the raw data from the database, rather than localStorage.
  Book.loadAll = function(rows) {
    Book.all = rows.map(function(ele) {
      return new Book(ele);
    });
  };

  Book.loadPage = function(callback) {
    var limit = pageSize;
    var offset = (page - 1) * pageSize;

    webDB.execute (
        [
            {
              sql: 'SELECT * FROM books LIMIT ? OFFSET ?;',
              data: [pageSize, offset]
            }
        ],
    function(rows){
      Book.all = rows.map(function(ele) {
        return new Book(ele);
      });
      callback();
    });
  };

  Book.fetchAll = function(callback) {
    webDB.execute('DELETE FROM books', function(rows){});
    webDB.execute('SELECT * FROM books LIMIT 1', function(rows){
      if (rows.length !== 0){
        Book.loadPage(callback);
      } else {
        $.ajax({
          type: 'GET',
          url: './data/books.json',
          success: function (rawData) {
            rawData.forEach(function(item){
              new Book(item).insertRecord();
            });
            Book.loadPage(callback);
          },
          error: function(xhr, status, error){
            console.log('ajax error', {xhr: xhr, status: status, error: error});
          }
        });
      }
    });
  };

  module.Book = Book;
})(window);
