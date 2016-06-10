  (function(module){

    var followersView = {};

    var ui = function() {
      var $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.
      $about.find('ul').empty();
      $about.show().siblings().hide();
    };

    var render;

    render = Handlebars.compile($('#followers-template').text());

      followersView.init = function() {
      ui();
      $('#about ul').append(
        followers.all.map(render)
      );
    };

    module.followersView = followersView;

  })(window);
