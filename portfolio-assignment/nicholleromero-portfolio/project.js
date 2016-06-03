(function(window) {

function Project (comps) {
  this.name = comps.name;
  this.url = comps.url;
  this.description = comps.description;
//  this.publishedOn = comps.publishedOn;
};

Project.all = [];

Project.prototype.toHtml = function() {
  // var template = Handlebars.compile($('#project-template').text());
  //
  var template = $('#project-template').html();
  var compiledTemplate = Handlebars.compile(template);
// this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);  // 6
// this.publishStatus = this.publishedOn ? this.daysAgo + ' days ago' : '(draft)';   //6
  return compiledTemplate(this);
// return template(this); //5-28
};

Project.loadAll = function(projectData){

Project.all = projectData.map(function(p){   //new
  return new Project(p);   //new
});
    //
    // projectData.forEach(function(p) {  //new
    // Project.all.push(new Project(p));  //new
};

Project.fetchAll = function() {
  Project.getData().then(function(data){
    // debugger;
    Project.loadAll(data);
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });
    console.log("it works", data);
  })
}


Project.getData = function(){
  return $.ajax({
    method: "GET",
    url: "data/myProjects.json",
    success: function(data) {
      return data;
    },
    error: function(error){
      console.log("fail");
    }
  })
}

// -------NEW

// Project.numWordsAll = function() {
//   return Project.all.map(function(project){
//       numWords :
//
//
//       return project.description.split(" ").length; //words in project description
//     })
//     .reduce(function(accum,it){
//         return accum + it; //summing the words
//     })
// };
//

// ---------END NEW


window.Project = Project;

})(window);







// $.ajax({
//   method: "GET",
//   url: "data/myProjects.json",
//   success: function(data, message, xhr) {
//     var etagNew = xhr.getResponseHeader('ETag');
//     var etagOld = localStorage.getItem('etag');
//
//     if (!localStorage.projectData) {
//       Project.loadFromServer(execute);
//     }
//     else if (etagNew === etagOld) {
//       Project.loadFromCache(execute);
//     } else {
//       Project.loadFromServer(execute);
//     }
//     localStorage.setItem('etag', etagNew);
//   },
//   error: function(error){
//     console.log("failed",error);
//   }
// })

// Project.loadFromServer = function(execute) {
//   $.getJSON("data/myProjects.json", function(data) {
//   Project.loadAll(data);
//   localStorage.setItem("projectData", JSON.stringify(data));
//   execute();
//   })
// }

//local
// Project.loadFromCache = function(execute) {
//   var dataParsed = JSON.parse(localStorage.getItem("projectData"));
//   Project.loadAll(dataParsed);
//   execute();
//   };
