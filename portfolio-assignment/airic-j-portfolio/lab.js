// TODO assignment 09 - make this a real iffe
// $('document').ready(function () {
(function(module){

  // project constructor function
  function Project(x) {
    this.title = x.title;
    this.date = x.date;
    this.description = x.description;
    this.link = x.link;
    this.image = x.image;
  }

  var ProjectsModule = {

    hideAbout: function() {
      $('section').not('#about').hide();
    },

    // todo assignment 09
    toggleStickyNav: function(topOfNav) {
      var scrollTop = $(window).scrollTop();

      if (scrollTop >= topOfNav && scrollTop > 0) {
        $('nav').addClass('stickyNav').removeClass('nav');
      } else {
        $('nav').removeClass('stickyNav').addClass('nav');
      }
    },

    stickyNav: function() {
      var topOfNav = $('nav').offset().top;
      this.toggleStickyNav(topOfNav);
    },

    navClick: function() {
      // change visible tab by click on nav links
      $('nav a').on('click', function() {
        $tabClicked = $(this).data('tab');
        $(this).addClass('selected').siblings().removeClass('selected');
        $('section').hide();
        $('#' + $tabClicked).show();
      });
    },

    getWeather: function() {
      // connect page weather conditions
      var weatherAPI = 'http://api.wunderground.com/api/c57bffbbb79db788/geolookup/conditions/q/OR/Portland.json';
      var successFunction = function(data) {
        $('.weather').append((' where it is ' + Math.round(data.current_observation.temp_f) + '&deg; F') + (' and ' + data.current_observation.weather).toLowerCase());
      };//end of weather callback
      $.getJSON(weatherAPI, successFunction);
    },

    projectJSON: function() {
      // ajax call for project data, map to array and append as HTML to page
      $.getJSON('data/projectData.json', function(projectJSON){
        // put each JSON element into the projects array after making it a Project object
        console.log(projectJSON);
        projectsArray = projectJSON.map(function(project){
          return (new Project(project));
        }).forEach(function(project){
          $('#projects').append(project.toHtml());
        });
      });
    }

  };


// Project function method for project to HTML
  Project.prototype.toHtml = function() {
    // use handlebars
    var templateScript = $('#projectTemplate').html();
    var projectTemplate = Handlebars.compile(templateScript);
    var html = projectTemplate(this);
    return(html);
  };

  ProjectsModule.init = function() {
    ProjectsModule.hideAbout();
    ProjectsModule.navClick();
    ProjectsModule.getWeather();
    ProjectsModule.projectJSON();
  };

  $(window).scroll(function() {
    ProjectsModule.stickyNav();
  });

  module.ProjectsModule = ProjectsModule;

// }); // end document.ready


})(window);
