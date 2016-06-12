(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#home').show();
    $('#projects').hide();
  }

  module.aboutController = aboutController;
}) (window);
