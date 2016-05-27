$('document').ready(function () {

	// hide projects at initial page load
  $('section').not('#about').hide();

  projectsArray = [];

  function Project(x) {
    this.title = x.title;
    this.date = x.date;
    this.description = x.description;
    this.link = x.link;
    this.image = x.image;
  }

  Project.prototype.toHtml = function() {
    // use handlebars
    var templateScript = $('#projectTemplate').html();
    var projectTemplate = Handlebars.compile(templateScript);
    var html = projectTemplate(this);
    return(html);
  };

  $.getJSON('data/projectData.json', function(projectJSON){
    // put each JSON element into the projects array after making it a Project object
    projectJSON.forEach(function(project){
      projectsArray.push(new Project(project));
    });
    // turn each Project object into HTML, append to the projects container
    projectsArray.forEach(function(project){
      $('#projects').append(project.toHtml());
    });
  });

	//sticky nav

  var topOfNav = $('.nav').offset().top;
  var stickyNav = function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > topOfNav) {
      $('nav').addClass('stickyNav').removeClass('nav');
    } else {
      $('nav').removeClass('stickyNav').addClass('nav');
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });

  // connect page weather conditions
  var weatherAPI = 'http://api.wunderground.com/api/c57bffbbb79db788/geolookup/conditions/q/OR/Portland.json';
  var successFunction = function(data) {
    $('.weather').append((' where it is ' + Math.round(data.current_observation.temp_f) + '&deg; F') + (' and ' + data.current_observation.weather).toLowerCase());
  };//end of weather callback
  $.getJSON(weatherAPI, successFunction);


	// change visible tab by click on nav links

  $('nav a').on('click', function() {
    $tabClicked = $(this).data('tab');
    $(this).addClass('selected').siblings().removeClass('selected');
    $('section').hide();
    $('#' + $tabClicked).show();
  });

});
