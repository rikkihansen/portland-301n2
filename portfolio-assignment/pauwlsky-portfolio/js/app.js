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

  Project.prototype.toHtml = function(){
    this.daysAgo = 'Created about ' + parseInt((new Date() - new Date(this.date))/60/60/24/1000) + ' days ago';
    var articleTemplate = $('#article').html();
    var compiledTemplate = Handlebars.compile(articleTemplate);
    var html = compiledTemplate(this);

    Handlebars.registerHelper('join', function(options) {
      var newSkills = '';
      var skills = options.fn(this).split(',');
      skills.forEach(function(item){
        newSkills += '<a data-category="' + item + '" href="#">  ' + item + '  </a>';
        //TODO make anchors fire events particular to category
      });
      return newSkills;
    });
    return html;
  };

  Project.prototype.alternate = function(){
    var lastArticle = $('article:last');
    if (lastArticle.prev('article').find('.title-date').hasClass('text-left')){
      lastArticle.find('.title-date').removeClass('text-left').addClass('text-right');
      lastArticle.find('.text').removeClass('text-right').addClass('text-left');
      lastArticle.find('img').removeClass('image-left').addClass('image-right');
      lastArticle.find('.skills-github').removeClass('text-right').addClass('text-left');
    };
  };


  Project.render = function(item){
    var project = new Project(item.title, item.date, item.img, item.text, item.skills, item.url);
    Project.all.push(project);
    localStorage.setItem('projects' , JSON.stringify(Project.all));
    $('#project').append(project.toHtml());
    project.alternate();
  };

  Project.fetchAll = function(callback){
    //check for local storage of objects
    if (localStorage.projects){
      var projects = localStorage.getItem('projects');
      JSON.parse(projects).map(function(item){
        Project.render(item);
      });
      $.ajax({
        type: 'HEAD',
        url:'js/portfolioitems.json',
        async: false,
        success:function(data, message, xhr){
          newEtag = xhr.getResponseHeader('eTag');
          return newEtag;
        }
      });
      var etag = localStorage.getItem('etag');
      if (etag != newEtag){
        console.log('not the same!');
        localStorage.setItem('etag' , newEtag);
        $('#project').empty();
        $.ajax({
          dataType: 'json',
          url:'js/portfolioitems.json',
          async: false,
          success:function(data){
            data.sort(function(a,b){
              return (new Date(b.date)) - (new Date(a.date));
            });
            data.map(function(item){
              Project.render(item);
            });
          }
        });
      }
      callback();
    }
    else {
      //ajax call to portfolioitems.json data and Project construction and project template removal
      $.ajax({
        dataType: 'json',
        url:'js/portfolioitems.json',
        async: false,
        success:function(data, message, xhr){
          etag = xhr.getResponseHeader('eTag');
          localStorage.setItem('etag' , etag);
          data.sort(function(a,b){
            return (new Date(b.date)) - (new Date(a.date));
          });
          data.map(function(item){
            Project.render(item);
          });
        }
      });
      callback();
    }
  }

  module.Project = Project;

})(window);
