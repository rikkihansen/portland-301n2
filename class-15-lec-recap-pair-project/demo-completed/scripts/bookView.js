(function(module) {
  function BookView (opts) {
    // DONE: Convert property assignment to Functional Programming style. Now, ALL properties
    // of `opts` will be assigned as properies of the newly created article object.
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    }, this);
  }

  BookView.initPage = function(allBooks, page) {
    console.log('inside initPage');
    var bookData = {
      books: allBooks
    };

    var paginatonData = {
      page: page,
      hasPrevPage: (page > 1),
      prevPage: page - 1,
      nextPage: page + 1
    };

    getTemplate('pagination', paginatonData, function(html){
      $('#book-pagination').append(html);
    }).then(function(){
      console.log('pagination returned')
    });

    getTemplate('books', bookData, function(html){
      $('#books').append(html);
    }).then(function(){
        console.log('books are returned');
    });
  }


  module.BookView = BookView;
})(window);
