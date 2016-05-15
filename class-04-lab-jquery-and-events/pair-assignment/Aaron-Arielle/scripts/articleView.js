// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#author-filter').append(optionTag);
      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
          $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = function() {
  //when author option is clicked, only shows the articles with the matching author
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();//hides all articles
      var val = $(this).val();
      $('article[data-author="' + val +'"]').fadeIn();//fades in articles with the data-author that corrsponds to the value selected
      } else {
      $('article').show();//if nothing is selected, all articles show
    }
    $('#category-filter').val('');
  });
};


articleView.handleCategoryFilter = function() {
    //when category option is selected, shows only articles corrsponding with the category option selected
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();//hides all articles
        var val = $(this).val();
        $('article[data-category="' + val +'"]').fadeIn();//fades in any article with data-category of the clicked val
        } else {
        $('article').show();//shows all articles if nothing selected

        }
        $('#author-filter').val('');
    });
  };

  articleView.handleMainNav = function() {
    //shows the corrsponding tab section based on the tab clicked
    $('.main-nav').on('click', 'li', function(e) {
      var tab = $(this).attr('data-content'); //stores data-category on tab clickd
      $('.tab-content').hide();
      $('section#' + tab).show();
    });
  };

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.
  //event hander that shows more article info once clicked
  $('.read-on').on('click', function(e) {
    e.preventDefault();//stops the link firing
    $(this).hide();//hides the read-on button
    $(this).parent().find('p').show(); //shows the in depth article info

  });
};

// : Call all of the above functions, once we are sure the DOM is ready.
$(document).ready(function() {
  articleView.handleMainNav();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.populateFilters();
  articleView.setTeasers();
});
