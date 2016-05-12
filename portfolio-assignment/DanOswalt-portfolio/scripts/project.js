/*****
* class Project
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
  var $newProject = $('.template').clone();

  $newProject.find('.project-link').attr('href', this.url).html(this.title);
  $newProject.find('.description').html(this.description);
  $newProject.find('.details').html(this.details);
  $newProject.find('time').attr('datetime', this.publishedOn);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newProject.find('.author').html(this.publishedBy);
  $newProject.find('.code-link').attr('href', this.codeUrl);
  $newProject.find('img').attr('src', this.screenshot);
  $newProject.removeClass('template');

  return $newProject;
};

/*****
* class ProjectModule
***/

function ProjectModule(projectData) {
  //receives array of project data
  this.data = projectData;
};

ProjectModule.prototype.load = function() {

  //sort the data array
  this.data.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  //create new projects from projectData and add to html
  this.data.forEach( function(projectData) {
    var newProject = new Project(projectData);
    $('#projects-module').append(newProject.toHtml());
  });

  //hide the template
  $('.template').hide();

};

/****
 * Code to run on page load
 **/

$(function() {
  new ProjectModule(projectData).load();

  $('#nav-links').on('click', 'li.tab', function(e){
    e.preventDefault();
    var $dataContent = $(this).attr('data-content');
    console.log($dataContent);
    $('.tab-view').hide();
    $('#' + $dataContent).show();
  });

});
