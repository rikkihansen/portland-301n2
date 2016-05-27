var projectView = {};

//when tabs are selected in the nav menu, on the section pertanining to that tab is shown
projectView.handleMainNav = function() {
  $('.nav').on('click', 'li', function(e) {//click event on list items in the nav
    e.preventDefault();//prevents click event from firing
    var tab = $(this).attr('data-content'); //gets the attr value from the li clicked on
    $('.tab-content').hide();//hides the content
    $('section#' + tab).show();//passes in the li attr value into a ID that matches to show that section
  });
};


projectView.setTeasers = function() {
  $('.project-body *:nth-of-type(n+1)').hide(); // Hide elements beyond the first in any artcile body.
  //event hander that shows more article info once clicked
  $('.read-on').on('click', function(e) {
    e.preventDefault();//stops the link firing
    $(this).hide();//hides the read-on button
    $(this).parent().find('p').show(); //shows the in depth project info

  });
};

//toggles nav menu on and off screen when menu icon clicked.
projectView.showNav = function() {
  $('#nav-trigger').on('click', function() {
    $('nav').toggle();
  });
};

projectView.initIndexPage = function() {
  //appends each project to the page
  Project.all.forEach(function(a){
    $('#projects').append(a.toHtml());
  });
  projectView.handleMainNav();
  projectView.setTeasers();
  projectView.showNav();
};
