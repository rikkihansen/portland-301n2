(function(module) {
  var aboutController = {};

  // A&C DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.index = function() {
    $("#about").show().siblings().hide();
  };

  module.aboutController = aboutController;
})(window);
