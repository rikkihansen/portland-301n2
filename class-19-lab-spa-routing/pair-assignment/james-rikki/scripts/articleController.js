(function(module) {
  var articlesController = {};

  // done-rh.js: Create the `articles` table when the controller first loads, with the code that used to be in index.html:


  // done-rh.js: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // done-rh.js: Also be sure to hide all the main section elements, and reveal the #articles section:
  articlesController.index = function() {
    Article.createTable();
    Article.fetchAll(articleView.initIndexPage);
    console.log('articlesController');

    $('#about').hide();
    $('#blog-stats').hide();
    $('#articles').show();

  };

  module.articlesController = articlesController;
})(window);
