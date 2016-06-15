(function(module) {
  var articlesController = {};

  Article.createTable();  // Ensure the database table is properly initialized

  articlesController.index = function(ctx, next) {
    articleView.index(ctx.articles);
  };

  // : What does this method do?  What is it's execution path?
  //ANSWER: loadById is a middleware function that passes context and next
  // parameters. It defines a fuction called articleData.
  // It then calls the Article.findWhere function which passes the 3 parameters
  // which are defined in article.js.
  // After everything is completed the next() callback passes the flow to
  // articlesController.index, the next function in the route path.
  // This function will load the article data by the ID that is specified.


  articlesController.loadById = function(ctx, next) {
    var articleData = function(article) {
      ctx.articles = article;
      next();
    };

    Article.findWhere('id', ctx.params.id, articleData);
  };

  // : What does this method do?  What is it's execution path?
  //ANSWER: This function has the exact behavor as the articlesController.loadById
  // function. The only difference are the 3 paremeters defined in the
  // Article.findWhere function. This function will load the articles that match the given author name.
  // it will call articlesController.index.

  articlesController.loadByAuthor = function(ctx, next) {
    var authorData = function(articlesByAuthor) {
      ctx.articles = articlesByAuthor;
      next();
    };

    Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // : What does this method do?  What is it's execution path?
  // ANSWER: This function loads the articles that match the given category.
  // This is another middleware function, so the path and behavior matches
  // loadByAuthor and loadById functions. The "next" funciton is articlesController.index.
  articlesController.loadByCategory = function(ctx, next) {
    var categoryData = function(articlesInCategory) {
      ctx.articles = articlesInCategory;
      next();
    };

    Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // : What does this method do?  What is it's execution path?
  // ANSWER: Another middleware function, except after this defines the
  // function articleData it checks if the array Article.all has any data.
  // If so, it gives that data to ctx.articles and moves on, if not
  // Articles.fetchAll is called with the callback function of articleData.
  // fetchAll is going check the sql database for the relative data. If it's
  // found it loads the data to Article.all and runs the callback. If not found
  // it does a ajax call to hackerIpsum and forEaches through that data, creating
  // new Article objects, which it caches the data in the sql database using Article.prototype.insertRecord.
  // It then pulls that data and runs the callback to pass the data to articlesController.index. 
  articlesController.loadAll = function(ctx, next) {
    var articleData = function(allArticles) {
      ctx.articles = Article.all;
      next();
    };

    if (Article.all.length) {
      ctx.articles = Article.all;
      next();
    } else {
      Article.fetchAll(articleData);
    }
  };


  module.articlesController = articlesController;
})(window);
