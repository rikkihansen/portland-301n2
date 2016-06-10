(function(module) {
  var aboutController = {};

  // done-rh.js: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.index = function() {
    $('#articles').hide();
    $('#blog-stats').hide();
    $('#about').show();


  };

  module.aboutController = aboutController;
})(window);
