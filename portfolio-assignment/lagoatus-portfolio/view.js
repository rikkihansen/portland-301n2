(function(module) { //Addition of IIFE to incapsilate functions and prevent scope issues
  Projects.all = [];
  var viewFunctions = {};
  var projectView = {};

  viewFunctions.handleAboutClick = function() {
    $('.tab').on('click', function(e) {
      $('section:first').toggle();
    });
  };

  viewFunctions.handleHomeClick = function() {
    $('.hometab').on('click', function(e) {
      $('section:first').show();
      $('.tab-content').show();
    });
  };

  projectView.initIndexPage = function() {
    $(document).ready(function() {
      Projects.all.forEach(function(a) { // we use a forEach function here to cycle through
        // each project object and place the relevent properties in the html 
        $('#projects').append(a.toHtml());
      });
      $('#stats .words').text(Projects.allDays());
    });
  };

  viewFunctions.handleAboutClick();
  viewFunctions.handleHomeClick();

  $(function(){ // Code source: https://github.com/mattboldt/typed.js/
    $('.element').typed({
      strings: ['Welcome!', 'I am Aaron Beerman', 'Aarman '],
      typeSpeed: 250
    });
  });

  module.viewFunctions = viewFunctions;
  module.projectView = projectView;
})(window);
