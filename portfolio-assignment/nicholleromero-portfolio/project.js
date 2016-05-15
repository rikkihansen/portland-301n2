var projects = [];

function Project (comps) {
  this.name = comps.name;
  this.url = comps.url;
  //this.createdOn = comps.createdOn;
  this.description = comps.description;
}

//$().hide();

Project.prototype.toHtml = function() {
  var $newProject = $('.template').clone();
  console.log($newProject);
  $newProject.find('#name a').html(this.name);
  $newProject.find('#name a').attr('href', this.url);
  $newProject.find('#desc').html(this.description);
  $newProject.append('<hr>');
  $newProject.removeClass('template');
  return $newProject;
};

// projectData.sort(function(a,b) {
//   return (new Date(b.createdOn)) - (new Date(a.createdOn));
// });

projectData.forEach(function(p) {
  projects.push(new Project(p));
  console.log(p);
  console.log("this works!");
});

projects.forEach(function(a){
$('#projects').append(a.toHtml())
console.log(a);
});
