(function(module) {

var projectView = {};

projectView.populateFilters = function() {
  $('project').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#title-filter').append(optionTag);
    }
  });
};

projectView.handleProjectFilter = function() {
  $('#title-filter').on('change', function() {
    if ($(this).val()) {
      $('project').hide();
      $('project[data-title= "' + $(this).val() + '"]').fadeIn(); //
    } else {
      $('project').fadeIn();
      $('project.template').hide();
    }
  });
};

projectView.handleNav = function() {
  $('.navigation li.tab').on('click', function() {
      var tab_id = $(this).attr('data-content');
      var selectedTab = $('#'+tab_id);
      $('.tab-content').hide();
      selectedTab.show();
  });
  $('.navigation .tab:first').click();
};

projectView.setTeasers = function() {
//  debugger
  $('.project-body').hide();
  $('#projects').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

//
// Image1 = new Image(600,400)
// Image1.src = "images/Nicholle_Pic.jpg"
// Image2 = new Image(600,400)
// Image2.src = "images/nicholle-portfolio.jpg"
//
//
//
// $('#nicPic').mouseover( function(){
// 		$('#niPic').attr('src', Image2.src);
// });
//
// $('#nicPic').mouseleave( function(){
// 		$('#nicPic').attr('src', Image1.src);
// });


//$(document).ready(function(){
projectView.init = function() {
  projectView.populateFilters();
  projectView.handleProjectFilter();
  projectView.handleNav();
  projectView.setTeasers();
}
//});


//-----NEW
//
// Project.numWordsAll().forEach(function(stat){
//   $('.project-stats').append(template(stat));
// })

//----END NEW


module.projectView = projectView;

})(window);
