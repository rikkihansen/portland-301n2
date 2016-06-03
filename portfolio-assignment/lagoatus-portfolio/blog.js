

(function (module) {
  Projects.all = [];

  function Projects(input) {
    this.title = input.title;
    this.role = input.role;
    this.projectUrl = input.projectUrl;
    this.completionDate = input.completionDate;
    this.DaystoComplete = input.DaystoComplete;
    this.body = input.body;

  }

  //test

  Projects.prototype.toHtml = function() {
  // var $newProject = $('article.template').clone();

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

  Projects.allDays = function() {   // I decided to REDUCE(); a Property,
    // which I just created and added to my Object, that contains
    //the theoretical number of class days that it took to complete all the projects.
    //This is then placed in the footer of the page.
    return Projects.all.map(function(project) {
      return project.DaystoComplete;})
      .reduce(function(sum, i) {
        return sum + i;
      });
  };


  module.Projects = Projects;
})(window);

Projects.fetchall = function() {

  if (localStorage.rawData) {
    Projects.loadAll(
       JSON.parse(localStorage.getItem('rawData'))
        );
    projectView.initIndexPage();
  }
  else {
    $.getJSON('data/blogobjects.json', function(datas) {
      localStorage.setItem('rawData', JSON.stringify(datas));
      Projects.loadAll(datas);
      projectView.initIndexPage();
    });

  }
};
