var projectView = {};

// create tab views of content in #projects and #about
projectView.handleMainNav = function() {
  $('.mainNav').on('click', 'li', function() {
    $('.page-content').hide();
    $('main').find('[id="'+$(this).attr('data-section')+'"]').show();
  });
  $('.topNav .tab:first').click();
};

// TODO: fix read more function

projectView.createTeaser = function() {
  $('.projDescription *:nth-of-type(2n+1)').hide();
  $('.shrink').hide();
  $('.read-on').on('click', function(event) {
    event.preventDefault();
    $(this).prev().find('*:nth-of-type(2n+1)').show();
    $(this).hide();
    $('.shrink').show();
  });
  $('.shrink').on('click', function(e) {
    event.preventDefault();
    $('.projDescription *:nth-of-type(2n+1)').hide();
    $('.read-on').show();
    $('.shrink').hide();
  });
};


//call the functions
$(document).ready(function() {
  projectView.handleMainNav();
  projectView.createTeaser();
});
