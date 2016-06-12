(function(module){
  adminController = {};

  var template = Handlebars.compile($('#author-template').text());
  
  adminController.initAdminPage = function() {


    Article.numWordsByAuthor().forEach(function(stat) {
      $('.author-stats').append(template(stat));
    });
    $('#blog-stats .articles').text(Article.all.length);
    $('#blog-stats .words').text(Article.numWordsAll());
    $('#about').hide();
    $('#articles').hide();
  };
})(window);
