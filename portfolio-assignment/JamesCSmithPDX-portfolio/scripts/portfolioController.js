(function(module){
  portfolioController = {};

  portfolioController.index = function() {
    console.log('in portfolioController');
    Project.fetchAll(projectView.portfolio);
    ;
  };

  module.portfolioController = portfolioController;

})(window);
