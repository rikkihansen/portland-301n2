(function(module) {
  var adminController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  adminController.index = function() {

    Article.fetchAll(articleView.initAdminPage);
    $('#blog-stats-main').show().siblings().hide();

  };

  module.adminController = adminController;
})(window);
