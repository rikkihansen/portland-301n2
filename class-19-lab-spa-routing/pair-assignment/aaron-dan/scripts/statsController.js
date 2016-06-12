(function(module) {
  var statsController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  statsController.index = function() {
    Article.fetchAll(articleView.initAdminPage);
    console.log('hi this the stats controller :)');
    $('.tab-content').hide();
    $('#stats').show();

  };

  module.statsController = statsController;
})(window);
