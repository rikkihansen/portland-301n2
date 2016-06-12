(function(module) {
  var adminController = {};

  // A&C DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  adminController.index = function() {
    Article.fetchAll(articleView.initAdminPage);
    $("#admin").show().siblings().hide();
  };

  module.adminController = adminController;
})(window);
