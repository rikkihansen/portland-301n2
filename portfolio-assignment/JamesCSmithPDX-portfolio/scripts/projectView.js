(function(module) {

  var projectView = {};

  // create tab views of content in #projects and #about
  projectView.portfolio = function() {
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });
    projectView.createTeaser();
    $('.jumbotron').fadeTo(5000, 1);
    $('.page-content').hide();
    $('#projects').fadeIn(5000);
    projectView.scroll('#projects');
  };

  projectView.about = function() {
    $('.jumbotron').fadeTo(5000, 1);
    $('.page-content').hide();
    $('#hbAnagram').remove();
    anagram.create();
    $('#about').fadeIn(5000);
    projectView.scroll('#about');
  };


  // more and shrink function
  projectView.createTeaser = function() {
    $('.projDescription *:nth-child(n)').hide();
    $('.projDescription *:nth-child(1)').show();
    $('.shrink').hide();
    $('.read-on').on('click', function(event) {
      event.preventDefault();
      $(this).prev().find('*:nth-child(n)').slideDown(1500);
      $(this).hide();
      $(this).next().show();
    });
  };

  projectView.shrinkTeaser = function() {
    $('.shrink').on('click', function(event) {
      event.preventDefault();
      $('.projDescription *:nth-child(n)').hide();
      $('.projDescription *:nth-child(1)').show();
      $(this).hide();
      $(this).prev().show();
    });
  };

  projectView.scroll = function(tease) {
    $('html, body').animate({
      scrollTop: parseInt($(tease).offset().top)
    }, 2000);
  };

  //call the functions
  projectView.initIndexPage = function(){
    $('.page-content').hide();
    $('.jumbotron').fadeTo(5000, 0.5);
  };
  module.projectView = projectView;
})(window);
