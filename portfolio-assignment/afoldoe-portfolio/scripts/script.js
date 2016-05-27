Project.all = [];

function Project (opts) {
  this.author = opts.author;
  this.projectURL = opts.projectURL;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
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

Project.loadAll = function(projectData) {
  projectData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  //adds each project object into an empty array
  projectData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
};

//Retrieves project data with ajax call if nothing is in localStorage, if there is data in localStorage it is taken out of localStorage and loaded to the index page
Project.fetchAll = function() {
  if(localStorage.projectData) {
    //ajax call if there is data in localStorage to check for updates
    $.ajax({
      type: 'HEAD',
      url: '../data/projects.json',
      success: function(data, message, xhr) {
        var etag = xhr.getResponseHeader('Etag');
        var storedEtag = localStorage.getItem('etag');
        //compares headers in xhr to see if anything has been updated
        if (etag === storedEtag) {
        } else {
          //if there has been an update in the projects.json, the projects are reloaded to the page using an ajax request
          $('#projects').empty();
          $.ajax({
            url: '../data/projects.json',
            dataType: 'json',
            success: function(data, message, xhr) {
              var etag = xhr.getResponseHeader('Etag');
              console.log(etag);
              var data = data;
              Project.loadAll(data);//loads data from json file
              projectView.initIndexPage();//loads new projects to the index.html
              localStorage.setItem('projectData', JSON.stringify(projectData));
              localStorage.setItem('etag' , etag);
            }
          });
        }
      }
    });
    var data = JSON.parse(localStorage.getItem('projectData'));
    Project.loadAll(data);
    projectView.initIndexPage();
  } else {
    //if there is no data then an ajax request is made to get data from projects.json and the projects are loaded to index.html
    console.log('no data');
    $.ajax({
      url: '../data/projects.json',
      dataType: 'json',
      success: function(data, message, xhr) {
        var etag = xhr.getResponseHeader('Etag');
        console.log(etag);
        var projectData = data;
        Project.loadAll(projectData);
        projectView.initIndexPage();
        localStorage.setItem('projectData', JSON.stringify(projectData));
        localStorage.setItem('etag' , etag);
      }
    });
  }
};
