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
})
// $(function(){
//   $('address').each(function(){
//     var val = $(this).find('address a').text();
//     //var projs = '<a href=""' + val + '">')
//   }
// )
//
// })
