(function(module) {

  Project = {};
  //project object constructor
  // function Project(opts) {
  //   this.title = opts.title;
  //   this.ghPagesUrl = opts.ghPagesUrl;
  //   this.linkTitle = opts.linkTitle;
  //   this.image = opts.image;
  //   this.description = opts.description;
  // }

  Project.all = [];

  //Clones project template from page, adds in information, and returns that grouped together.
  // Project.prototype.addProject = function() {
  //   var templateScript = $('#projectTemplate').html();
  //   var compiledTemplate = Handlebars.compile(templateScript);
  //
  //   return compiledTemplate(this);
  //   console.log('Handlebars template compiled');
  //
  // };


  //Goes through projectData info and maps each created Project to the Project.all array.
  Project.localLoad = function(localSData) {
    // localSData.forEach(function(projectRawObject) {
    //   Project.all.push(new Project(projectRawObject));
    // });
    Project.all = localSData.map(function(projectRawObject) {
      console.log('Projects mapped');
      return new Project(projectRawObject);
    });
  };

  //Checks local storage for stored json data. If nothing found makes an
  // ajax call to pull JSON data from projectData.json.
  Project.infoFetch = function(callback) {
    // if (localStorage.localSData) {
    //
    //   Project.localLoad(JSON.parse(localStorage.getItem('localSData')));
    //   console.log('Local storage fetched.');
    //   projectView.initPrimaryPage();
    //
    // } else {
      $.ajax({
        type: 'GET',
        url: 'https://api.github.com/user/repos',
        headers: {
        'Authorization' : 'token ' + repoToken
        },
        success: function(data) {
          Project.all = data;
          //Project.localLoad(data);
          //localStorage.setItem('localSData', JSON.stringify(data)); // Pushes pull data to local storage.
          projectView.initPrimaryPage();
          console.log(data);
        },
        error: function(xhr, status, error) {
          console.log('ajax error');
        },
      }).then(callback);
    //   console.log('local storage created');
    // }
  };


  //$('.template').hide();
  module.Project = Project;
})(window);
