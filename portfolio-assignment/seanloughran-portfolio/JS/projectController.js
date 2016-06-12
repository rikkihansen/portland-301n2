(function(module) {
  var projectController = {};

  projectController.index = function() {
      $('#projects').show();
      $('#home').hide();

      Project.infoFetch(projectView.initPrimaryPage);
  }

  module.projectController = projectController;
}) (window);
