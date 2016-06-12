(function(module) {
  var aboutController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.index = function() {
    console.log('hi this the about controller :)');
    $('.tab-content').hide();
    $('#about').show();


  };

  module.aboutController = aboutController;
})(window);
