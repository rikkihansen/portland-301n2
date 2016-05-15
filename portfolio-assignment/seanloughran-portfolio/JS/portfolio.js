// Begin Section populating project information

//project object constructor
function Project(title, ghPagesUrl, linkTitle, image, description) {
  this.title = title;
  this.ghPagesUrl = ghPagesUrl;
  this.linkTitle = linkTitle;
  this.image = image;
  this.description = description;
}

//Project obects.
var cookiestore = new Project("Portland Cookie Store Project", "http://seanloughran.github.io/cookie-store/", "Cookie Store", "Images/cookiestore.png", "<p>This project was based around the concept of a franchise of cookie store within the Portland, OR area.</p><p>The core functions used in this project were a table and form. The table was used to display the store information and sales information.</p><p>A form was created to able to add a new store to the table.");
var class201FinalProject = new Project("Bcykleta Bicycle Store - 201 Final Project", "http://seanloughran.github.io/bcykleta/", "Bcykleta", "Images/bcykleta.png", "This was the final project of my Code Fellows 201 course.</p>The primary concept was a Portland bicycle shop that would take donated bikes and sell them.</p><p>The site would also have the functionality to take information for people who wanted to volunteer for the shop.</p>");

var projectArray = [cookiestore, class201FinalProject];

//Clones project template from page, adds in information, and returns that grouped together.
Project.prototype.addProject = function(project) {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find('.project_title').html(this.title);
  $newProject.find('.project_url').attr('href', this.ghPagesUrl);
  $newProject.find('.project_picture').attr('src', this.image);
  $newProject.find('.project_description').html(this.description);
  return $newProject;
}

//Goes through project Array and appends them to the 'main' element
projectArray.forEach(function(a){
  $('main').append(a.addProject(a));
});

$('.template').hide();


// Begin Section handling navigation tabs

var projectView = {};

//Functionality for home and about me tabs.
projectView.tabNavigation = function() {
  $('nav').on('click','li',function(){
    $('.tab-content').hide();
    $('body').find('[id="'+$(this).attr('data-content')+'"]').show();
  });

  $('nav .tab:first').click();
};

projectView.showMoreDescription = function() {

};

//miscellaneous Code
projectView.addFloat = function() {
  $('.portfolio_item').on('load', function() {
    
  });
};

$(document).ready(function(){
  projectView.tabNavigation();
  projectView.showMoreDescription();
});
