(function(module) {
  function Person (opts) {
    // DONE: Convert property assignment to Functional Programming style. Now, ALL properties
    // of `opts` will be assigned as properies of the newly created article object.
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    }, this);
    this.dob = new Date(this.dob);
  }

  Person.all = [];

  Person.initPage = function() {
    Person.all.forEach(function(person){
     $('#people').append(person.toHtml())
    });
  }

  Person.prototype.toHtml = function() {
    var template = Handlebars.compile($('#person-template').text());
    return template(this);
  };

  // DONE: Set up a DB table for articles.
  Person.createTable = function(callback) {
    webDB.execute(
      // what SQL command do we run here inside these quotes?
      'CREATE TABLE IF NOT EXISTS people (' +
          'id INTEGER PRIMARY KEY, ' +
          'first VARCHAR(255) NOT NULL, ' +
          'middle VARCHAR(255), ' +
          'last VARCHAR(255) NOT NULL, ' +
          'dob DATETIME, ' +
          'bio TEXT NOT NULL);',
      function(result) {
        console.log('Successfully set up the person table.', result);
        if (callback) callback();
      }
    );
  };

  // DONE: Use correct SQL syntax to delete all records from the articles table.
  Person.truncateTable = function(callback) {
    webDB.execute(
      // <----finish the command here, inside the quotes.
      callback
    );
  };


  // DONE: Insert an article instance into the database:
  Person.prototype.insertRecord = function(callback) {
<<<<<<< HEAD
    webDB.execute(
      [
        {
          sql:'INSERT INTO people (id, first, middle, last, dob, bio) VALUES ( ? ,?, ?, ? , ? , ?);',
          data:[this.id, this.first, this.middle, this.last, this.dob, this.bio]
        }
      ],
      callback
    );
=======
    console.log("******** insert Record *******");
    webDB.execute (
        [
            {
              sql: 'INSERT INTO people (id, first, middle, last, dob, bio) VALUES (?, ?, ?, ?, ?, ?);',
              data: [this.id, this.first, this.middle, this.last, this.dob, this.bio]
            }
        ],
    callback);
>>>>>>> 1cf04d6c85350afdb0e584f49ddddcb3712a2b9d
  };

  // DONE: Refactor to expect the raw data from the database, rather than localStorage.
  Person.loadAll = function(rows) {
    Person.all = rows.map(function(ele) {
      return new Person(ele);
    });
  };

  Person.fetchAll = function(callback) {
    webDB.execute('SELECT * FROM people', function(rows){
<<<<<<< HEAD
      if(rows.length !== 0){
        console.log(rows);
        Person.loadAll(rows);
        callback();
    } else {
      console.log("no data");
      $.getJSON('../data/people.json', function(data){
        var person = new Person(data);
        person.insertRecord();
      });
      Person.loadAll(person);
      callback();
    }
  });
}
=======
      if (rows.length !== 0){
        console.log(rows);
        Person.loadAll(rows);
        callback();
      } else {
        $.getJSON('./data/people.json', function(rawData){
          console.log('why it');
          var people = rawData.map(function(item){
            var person = new Person(item);
            person.insertRecord();
            return person;
          });
          Person.loadAll(people);
          callback();
        });
      }
    });
  };
>>>>>>> 1cf04d6c85350afdb0e584f49ddddcb3712a2b9d


  module.Person = Person;
})(window);
