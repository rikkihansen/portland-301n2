(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render;
  render = Handlebars.compile($('#my_repo-template').text());

  repoView.index = function() {
    ui();
    $('#about ul').append(
      // repos.with('').map(render)
      repos.all.map(render)
    );
  };

  module.repoView = repoView;
})(window);
