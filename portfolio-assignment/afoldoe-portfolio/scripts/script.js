var projects = [];

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
}


projectData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

//adds each project object into an empty array
projectData.forEach(function(ele) {
  projects.push(new Project(ele));
})

//appends each project to the page
projects.forEach(function(a){
  $('#projects').append(a.toHtml())
});
