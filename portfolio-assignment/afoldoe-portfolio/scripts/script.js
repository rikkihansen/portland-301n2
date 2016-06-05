(function(module) {
  Project.all = [];

  //assigns the propeties of opts be the properties of each new Project
  function Project (opts) {
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    }, this);
  }

  //compiles handlerbar template and returns the filled template so we can append to the page
  Project.prototype.toHtml = function() {
    //handlebars compiles given info into the template
    var templateScript = $('#project-template').html();
    var finalTemplate = Handlebars.compile(templateScript);
    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);//days since project was created
    this.publishStatus = this.publishedOn ? this.daysAgo + ' days ago' : '(draft)';//tells how many days since the project was published
    return finalTemplate(this);//returns the template with the project data filled in
  };

  //goes through the all the 
  Project.loadAll = function(rows) {
    Project.all = rows.map(function(ele) {
      return new Project(ele);
    });
  };

  //creates a DB table for the projects
  Project.createTable = function(callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS projects (' +
        'id INTEGER PRIMARY KEY, ' +
        'title VARCHAR(50) NOT NULL, ' +
        'author VARCHAR(50), ' +
        'projectURL VARCHAR(200), ' +
        'publishedOn DATETIME NOT NULL, ' +
        'category VARCHAR(20), ' +
        'body TEXT NOT NULL);',
        function(result) {
          if(callback) callback();
        }
    );
  };

  //deletes all the projects in the db table
  Project.truncateTable = function(callback) {
    webDB.execute(
    'DELETE FROM projects;',
    callback
    );
  };

  //inserts a project into the db table
  Project.prototype.insertProject = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO projects (title, author, projectURL, publishedOn, category, body) VALUES(?, ?, ?, ?, ?, ?);',
          'data': [this.title, this.author, this.projectURL, this.publishedOn, this.category, this.body]
        }
      ],
      callback
    );
  };

  //deletes a project from the db table
  Project.prototype.deleteProject = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'DELETE FROM projects WHERE id = ?',
          'data': [this.id]
        }
      ],
      callback
    );
  };

  //updates an project in the db table; overwrites the corresponding info in the db
  Project.prototype.updateProject = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'UPDATE projects SET (title, author, projectURL, publishedOn, category, body) VALUES(?, ?, ?, ?, ?, ?);',
          'data': [this.title, this.author, this.projectURL, this.publishedOn, this.category, this.body]
        }
      ],
      callback
    );
  };

  //Retrieves project data with ajax call if nothing is in the database table, if there is data in the table it is taken out and loaded to the index page
  Project.fetchAll = function(callback) {
    webDB.execute('SELECT * FROM projects', function(rows) {
      if(rows.length) {
        Project.loadAll(rows);
        callback();
      } else {
        $.getJSON('data/projects.json', function(projectData) {
          projectData.forEach(function(item) {
            var project = new Project(item);
            project.insertProject();
          });
          webDB.execute('SELECT * FROM projects', function(rows) {
            Project.loadAll(rows);
            callback();
          });
        });
      }
    });
  };
  module.Project = Project;
})(window);
