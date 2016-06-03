(function(module) {
  function Article (opts) {
    // DONE: Convert property assignment to Functional Programming style. Now, ALL properties
    // of `opts` will be assigned as properies of the newly created article object.
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    },this);
  }

  Article.all = [];

  Article.prototype.toHtml = function() {
    var template = Handlebars.compile($('#article-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    this.body = marked(this.body);

    return template(this);
  };

  // DONE: Set up a DB table for articles.
  Article.createTable = function(callback) {
    webDB.execute(
      // what SQL command do we run here inside these quotes?
      'CREATE TABLE IF NOT EXISTS articles (' +
          'id INTEGER PRIMARY KEY, ' +
          'title VARCHAR(255) NOT NULL, ' +
          'author VARCHAR(255) NOT NULL, ' +
          'authorUrl VARCHAR (255), ' +
          'category VARCHAR(20), ' +
          'publishedOn DATETIME, ' +
          'body TEXT NOT NULL);',
      function(result) {
        console.log('Successfully set up the articles table.', result);
        if (callback) callback();
      }
    );
  };

  // DONE: Use correct SQL syntax to delete all records from the articles table.
  Article.truncateTable = function(callback) {
    webDB.execute(
      // <----finish the command here, inside the quotes.
      'DELETE FROM articles;',
      callback
    );
  };


  // DONE: Insert an article instance into the database:
  Article.prototype.insertRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO articles (title, author, authorUrl, category, publishedOn, body) VALUES (?, ?, ?, ?, ?, ?);',
          'data': [this.title, this.author, this.authorUrl, this.category, this.publishedOn, this.body]
        }
      ],
      callback
    );
  };

  // DONE: Delete an article instance from the database:
  Article.prototype.deleteRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'DELETE FROM articles WHERE id = ?;',
          'data': [this.id]
        }
      ],
      callback
    );
  };

  // DONE: Update an article instance, overwriting it's properties into the corresponding record in the database:
  Article.prototype.updateRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'UPDATE articles SET title = ?, author = ?, authorUrl = ?, category = ?, publishedOn = ?, body = ? WHERE id = ?;',
          'data': [this.title, this.author, this.authorUrl, this.category, this.publishedOn, this.body, this.id]
        }
      ],
      callback
    );
  };

  // DONE: Refactor to expect the raw data from the database, rather than localStorage.
  Article.loadAll = function(rows) {
    Article.all = rows.map(function(ele) {
      return new Article(ele);
    });
  };

  // DONE: Refactor this to check if the database holds any records or not. If the DB is empty,
  // we need to retrieve the JSON and process it.
  // If the DB has data already, we'll load up the data (sorted!), and then hand off control to the View.
  Article.fetchAll = function(callback) {
    // DONE: fill these quotes to 'select' our table.
    webDB.execute('SELECT * FROM articles ORDER BY publishedOn DESC', function(rows) {
      if (rows.length) {
        // DONE: Now, 1st - instanitate those rows with the .loadAll function,
        // and 2nd - pass control to the view by calling whichever function argument was passed in to fetchAll.
        console.table(rows);
        Article.loadAll(rows);
        callback();
      } else {
        $.getJSON('/data/hackerIpsum.json', function(rawData) {
          // Cache the json, so we don't need to request it next time:
          rawData.forEach(function(item) {
            // DONE: Cache the newly-instantiated article in the DB: (what can we call on each 'article'?)
            var article = new Article(item); // Instantiate an article based on item from JSON
            article.insertRecord(); // Cache the article in DB
          });
          // Now get ALL the records out the DB, with their database IDs:
          // DONE: select our now full table
          webDB.execute('SELECT * FROM articles', function(rows) {
            // DONE: Now, 1st - instanitate those rows with the .loadAll function,
            // and 2nd - pass control to the view by calling whichever function argument was passed in to fetchAll.
            Article.loadAll(rows);
            callback();
          });
        });
      }
    });
  };

  Article.allAuthors = function() {
    return Article.all
      .map(function(article) {
        return article.author;
      })
      .reduce(function(acc, name) {
        if (acc.indexOf(name) === -1) {
          acc.push(name);
        }
        return acc;
      }, []);
  };

  Article.numWordsAll = function() {
    return Article.all
      .map(function(article) {
        return article.body.match(/\b\w+/g).length;
      })
      .reduce(function(acc, words) {
        acc = acc + words;
        return acc;
      });
  };

  Article.numWordsByAuthor = function() {
    return Article.allAuthors().map(function(author) {
      return {
        name: author,
        numWords: Article.all
          .filter(function(article) {
            return article.author === author;
          })
          .map(function(article) {
            // \b is a word boundary, so \b\w+ is a word boundary followed by a word
            return article.body.match(/\b\w+/g).length
          })
          .reduce(function(acc, words) {
            acc = acc + words;
            return acc;
          })
      }
    })
  };

  Article.stats = function() {
    return {
      numArticles: Article.all.length,
      numWords: Article.numwords(),
      Authors: Article.allAuthors(),
    };
  }

  module.Article = Article;
})(window);
