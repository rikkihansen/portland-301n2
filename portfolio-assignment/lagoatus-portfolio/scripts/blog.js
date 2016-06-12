(function (module) { // Addition of IIFE to incapsilate functions and prevent scope issues
  Projects.all = [];

  function Projects(input) {
    this.title = input.title;
    this.role = input.role;
    this.projectUrl = input.projectUrl;
    this.completionDate = input.completionDate;
    this.DaystoComplete = input.DaystoComplete;
    this.body = input.body;
  }

  Projects.prototype.toHtml = function() {
    var articleTemplate = $('#template').html();
    var compiledTemplate = Handlebars.compile(articleTemplate);

    this.daysAgo = parseInt((new Date() - new Date(this.completionDate)) / 60 / 60 / 24 / 1000);
    this.publishStatus = this.completionDate ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

    return compiledTemplate(this);

  };

  Projects.loadAll = function(datas) {
    Projects.all = datas.map(function(i) { // Use map() to push rawData into a new array object
      return new Projects(i);
    });
  };

  Projects.fetchall = function(callBack) {

    if (localStorage.rawData) {
      Projects.loadAll(
         JSON.parse(localStorage.getItem('rawData'))
          );
      callBack();
    }
    else {
      $.getJSON('data/blogobjects.json', function(datas) {
        localStorage.setItem('rawData', JSON.stringify(datas));
        Projects.loadAll(datas);
        callBack();
      });
    }
  };

  Projects.allDays = function() {
<<<<<<< HEAD:portfolio-assignment/lagoatus-portfolio/scripts/blog.js
=======
<<<<<<< HEAD:portfolio-assignment/lagoatus-portfolio/scripts/blog.js
>>>>>>> 5b9d4415086f9815a8ab90adcc7061be09d8609a:portfolio-assignment/lagoatus-portfolio/scripts/blog.js
    return Projects.all.map(function(project) {
=======
    return Projects.all.map(function(project) { // using map functionality to
      // cycle through my projects array and return the DaystoComplete property in a new array.
>>>>>>> 03e87effd900d8eafbc21e7225b273e2ccbc29c2:portfolio-assignment/lagoatus-portfolio/blog.js
      return project.DaystoComplete;})
      .reduce(function(sum, i) { //Now that I have a new array with DaystoComplete I use
        // the reduce function to tally an total of the number of hours worked on all projects.
        return sum + i;
      });
  };

  module.Projects = Projects; // here I my Projects equal to the IIFE parameter so that
  // my functions are passed as a parameter and avaible outside the window scope.
})(window);
