(function(module){
  aboutController = {};

  aboutController.index = function() {
    console.log('in aboutController');
    projectView.about();
  };

  module.aboutController = aboutController;

})(window);
