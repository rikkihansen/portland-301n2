var viewFunctions = {};

viewFunctions.handleAboutClick = function() {
  $('.tab').on('click', function(e) {
    $('section:first').toggle();
  });
};

viewFunctions.handleHomeClick = function() {
  $('.hometab').on('click', function(e) {
    $('section:first').show();
    $('.tab-content').show();
  });
};

$(document).ready(function() {
  viewFunctions.handleAboutClick();
  viewFunctions.handleHomeClick();
});


$(function(){ // Code source: https://github.com/mattboldt/typed.js/
  $('.element').typed({
    strings: ['Welcome!', 'I am Aaron Beerman', 'Aarman '],
    typeSpeed: 250
  });
});
