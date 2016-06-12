(function(module) {
  var aboutController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.index = function() {
    $('#about').show().siblings().hide();
    console.log('Page defined.');
  };

  module.aboutController = aboutController;
})(window);
