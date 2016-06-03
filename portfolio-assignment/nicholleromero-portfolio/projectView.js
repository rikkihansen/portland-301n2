(function(module) {

var projectView = {};

projectView.handleNav = function() {
  $('.navigation li.tab').on('click', function() {
      var tab_id = $(this).attr('data-content');
      var selectedTab = $('#'+tab_id);
      $('.tab-content').hide();
      selectedTab.show();
  });
  $('.navigation .tab:first').click();
};

$(document).ready(function(){
  projectView.handleNav();
});



//-----NEW

Project.numWordsAll().forEach(function(stat){
  $('.project-stats').append(template(stat));
})

//----END NEW



module.projectView = projectView;

})(window);
