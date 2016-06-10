(function(module) {

  var projectView = {};

  // create tab views of content in #projects and #about
  projectView.handleMainNav = function() {
    $('.mainNav').on('click', 'li', function() {
      $('.jumbotron').fadeTo(5000, 1);
      $('.page-content').hide();
      $('#hbAnagram').remove();
      anagram.create();
      $('main').find('[id="'+$(this).attr('data-section')+'"]').fadeIn(5000);
      projectView.scroll(this);
    });
  };

  // more and shrink function
  projectView.createTeaser = function() {
    $('.projDescription *:nth-child(n)').hide();
    $('.projDescription *:nth-child(1)').show();
    $('.shrink').hide();
    $('.read-on').on('click', function(event) {
      event.preventDefault();
      $(this).prev().find('*:nth-child(n)').slideDown(1500);
      $(this).hide();
      $(this).next().show();
    });
    $('.shrink').on('click', function(e) {
      event.preventDefault();
      $('.projDescription *:nth-child(n)').hide();
      $('.projDescription *:nth-child(1)').show();
      $(this).hide();
      $(this).prev().show();
    });
  };

  projectView.scroll = function(tease) {
    $('html, body').animate({
      scrollTop: parseInt($(tease).offset().top)
    }, 2000);
  };

  //call the functions
  projectView.initIndexPage = function(){
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });
    $('.page-content').hide();
    $('.jumbotron').fadeTo(15000, 0.0);
    projectView.handleMainNav();
    projectView.createTeaser();
  };
  module.projectView = projectView;
})(window);
