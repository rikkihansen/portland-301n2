(function(module) {

  var adminController = {};


  adminController.index = function() {
    Article.fetchAll(articleView.initAdminPage);
    $('#about').hide();
    $('#articles').hide();
    $('#blog-stats').show();

  };

  module.adminController = adminController;
})(window);
