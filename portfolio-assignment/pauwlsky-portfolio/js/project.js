(function(module){

  var Project = function(title, date, img, text, skills, url) {
    this.title = title;
    this.date = date;
    this.img = img;
    this.text = text;
    this.skills = skills;
    this.url = url;
  };

  Project.all = [];

  Handlebars.registerHelper('join', function(options) {
    var newSkills = '';
    var skills = options.fn(this).split(',');
    skills.forEach(function(item){
      newSkills += '<a data-category="' + item + '" href="#">  ' + item + '  </a>';
    });
    return newSkills;
  });
//DONE Refactor toHtml to implement a separated hbs template. Returns to Project.create()
  Project.prototype.toHtml = function(){
    console.log('inside of toHtml');
    return getTemplate('project', this)
    .then(function(html){
      console.log('inside of getTemplate .then()');
      $('#project-container').append(html);
      Project.alternate();
    });
  };


  Project.alternate = function(){
    console.log('inside of alternate');
    var lastArticle = $('article:last');
    if (lastArticle.prev('article').find('.title-date').hasClass('text-left')){
      lastArticle.find('.title-date').removeClass('text-left').addClass('text-right');
      lastArticle.find('.text').removeClass('text-right').addClass('text-left');
      lastArticle.find('img').removeClass('image-left').addClass('image-right');
      lastArticle.find('.skills-github').removeClass('text-right').addClass('text-left');
    };
  };

//DONE refactor project.Create() to take care of all project creation tasks, passes toHtml back to fetchAll
  Project.create = function(item){
    var project = new Project(item.title, item.date, item.img, item.text, item.skills, item.url);
    project.daysAgo = 'Created about ' + parseInt((new Date() - new Date(item.date))/60/60/24/1000) + ' days ago';
    Project.all.push(project);
    localStorage.setItem('projects' , JSON.stringify(Project.all));
    return project.toHtml();
  };

//DONE refactored fetchAll to call callback during Project.create.then()
  Project.fetchAll = function(callback){
    //check for local storage of objects
    if (localStorage.projects){
      var projects = localStorage.getItem('projects');
      JSON.parse(projects).map(function(item){
        Project.create(item).then(function(){
          callback();
        });
      });
      Project.all.length = 0;
      $.ajax({
        type: 'HEAD',
        url:'js/projectItems.json'})
        .then(function(data, message, xhr){
          newEtag = xhr.getResponseHeader('eTag');
          console.log(newEtag);
          return newEtag;
        })
        .then(function(newEtag){
          var etag = localStorage.getItem('etag');
          if (etag != newEtag){
            console.log('not the same!');
            localStorage.setItem('etag' , newEtag);
            $('#project-container').empty();
            $.ajax({
              dataType: 'json',
              url:'js/projectItems.json'
            })
            .then(function(data){
              data.sort(function(a,b){
                return (new Date(b.date)) - (new Date(a.date));
              });
              data.map(function(item){
                Project.create(item)
                .then(function(){
                  callback();
                });
              });
              Project.all.length = 0;
            });
          }
        });
    }
    else {
      //ajax call to portfolioitems.json data and Project construction and project template removal
      $.ajax({
        dataType: 'json',
        url:'js/projectItems.json'
      })
      .then(function(data, message, xhr) {
        etag = xhr.getResponseHeader('eTag');
        localStorage.setItem('etag' , etag);
        data.sort(function(a,b){
          return (new Date(b.date)) - (new Date(a.date));
        });
        data.map(function(item){
          Project.create(item)
          .then(function(){
            callback();
          });
        });
        Project.all.length = 0;
      });
    }
  };

  module.Project = Project;

})(window);
