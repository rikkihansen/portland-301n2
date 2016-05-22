var projectView = {};

// create tab views of content in #projects and #about
projectView.handleMainNav = function() {
  $('.mainNav').on('click', 'li', function() {
    $('.page-content').hide();
    $('main').find('[id="'+$(this).attr('data-section')+'"]').toggle();
    $('html, body').animate({
      scrollTop: parseInt($(this).offset().top)
    }, 2000);
  });
};

// more and shrink function
projectView.createTeaser = function() {
  $('.projDescription *:nth-child(n)').hide();
  $('.projDescription *:nth-child(1)').show();
  $('.shrink').hide();
  $('.read-on').on('click', function(event) {
    event.preventDefault();
    $(this).prev().find('*:nth-child(n)').show();
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

//call the functions
$(document).ready(function() {
  $('.page-content').hide();
  projectView.handleMainNav();
  projectView.createTeaser();
});
