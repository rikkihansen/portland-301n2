(function(module) {
  var articleController = {};

  // A&C - DONE: Create the `articles` table when the controller first loads, with the code that used to be in index.html:

  // A&C - DONE: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // A&C - DONE: Also be sure to hide all the main section elements, and reveal the #articles section:
  articleController.index = function() {
    Article.createTable();
    Article.fetchAll(articleView.initIndexPage);
    $("#articles").show().siblings().hide();
  };

  module.articleController = articleController;
})(window);
