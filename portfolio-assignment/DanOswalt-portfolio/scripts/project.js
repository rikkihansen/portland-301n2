/*****
* Project
***/

function Project (opts) {
  this.title = opts.title;
  this.description = opts.description;
  this.details = opts.details;
  this.publishedOn = opts.publishedOn;
  this.publishedBy = opts.publishedBy;
  this.url = opts.url;
  this.codeUrl = opts.codeUrl;
  this.screenshot = opts.screenshot;
}

Project.prototype.toHtml = function() {
  var appTemplate = $('#project-template').html();
  var compileTemplate = Handlebars.compile(appTemplate);
  return compileTemplate(this);
};

Handlebars.registerHelper('daysAgo', function(person) {
  return parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago';
});

/*****
* ProjectModule
***/

var ProjectModule = {};

ProjectModule.init = function() {
  var self = this;

  if(localStorage.data){
    self.loadFromLocalStorage('data');
    console.log('fetched from local storage:');
    console.log(self.data);
    self.loadProjects();
  } else {
    $.getJSON('data/projectJSON.json')
      .done(function(json){
        self.data = json.data;
        self.loadProjects();
        self.saveToLocalStorage(self.data);
        console.log('JSON loaded');
      }).fail(function(){
        self.data = [];
        console.log('JSON did not load');
      });
  }
};

ProjectModule.loadProjects = function() {
  //sort the data array
  this.data.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  //create new projects from projectData and add to html
  this.data.forEach(function(projectData) {
    var newProject = new Project(projectData);
    $('#projects-module').append(newProject.toHtml());
  });

};

ProjectModule.saveToLocalStorage = function(data) {
  console.log('save data');
  localStorage.setItem('data', JSON.stringify(data));
};

ProjectModule.clearFromLocalStorage = function(data) {
  console.log('clear data');
  localStorage.removeItem(data);
};

ProjectModule.loadFromLocalStorage = function(data) {
  console.log('load data');
  this.data = JSON.parse(localStorage.getItem(data));
};

/***
 * ViewHandler
 **/

var ViewHandler = {};

ViewHandler.handleTabClicks = function() {
  $('#nav-links').on('click', 'li.tab', function(e){
    e.preventDefault();
    var dataContent = $(this).attr('data-content');
    $('.tab-view').fadeOut('fast');
    $('#' + dataContent).fadeIn('fast');
  });
};

ViewHandler.initNewProject = function() {
  var self = this;
  $('#new-project').on('keyup', 'input, textarea', self.createProjectFromForm);
};

ViewHandler.handleJSONSelection = function() {
  $('#project-json').on('focus', function() {
    this.select();
  });
};

ViewHandler.createProjectFromForm = function() {
  var project;

  $('#project-preview').empty();
  project = new Project({
    title: $('#project-title').val(),
    description: $('#project-description').val(),
    details: $('#project-details').val(),
    publishedBy: $('#project-publishedBy').val(),
    publishedOn: new Date(),
    url: $('#project-url').val(),
    codeUrl: $('#project-codeUrl').val(),
    screenshot: ''
  });

  $('#project-preview').append(project.toHtml());
  $('#project-json').val(JSON.stringify(project));
};

ViewHandler.handleNewProjectSubmit = function() {
  var self = this;
  var $projectJSON = $('#project-json').val();

  $('#new-project-submit').on('click', function(){
    if(self.formIsNotEmpty()) {
      var newData = $projectJSON;
      ProjectModule.data.push[newData];
      ProjectModule.saveToLocalStorage('data');
      self.clearInputFields();
    } else {
      //don't do anything
      //error msg?
    }
  });
};

ViewHandler.clearInputFields = function() {
  $projectJSON.val('');
  $('#new-project :input').val('');
};

//TODO: run this on change also, so json field and preview are cleared if empty
ViewHandler.formIsNotEmpty = function() {
  //check if any inputs have characters
  var isNotEmpty = false;
  $('#new-project :input').each(function(){
    //if the trimmed input is a character, immediately break out and set to false
    if($.trim($(this).val()) !== '') {
      isNotEmpty = true;
      return;
    };
  });
  return isNotEmpty;
};

ViewHandler.init = function() {
  this.initNewProject();
  this.handleTabClicks();
  this.handleNewProjectSubmit();
  this.handleJSONSelection();
};

/****
 * Code to run on page load
 **/

$(function() {
  ProjectModule.init();
  ViewHandler.init();
  // ProjectModule.clearFromLocalStorage('data');
});
