var projectView = {};

projectView.handleNav = function() {
  console.log('handleNav runs');
  $('.navigation .tab').on('click', function() {
      var tab_id = $(this).attr('data-content');
      var selectedTab = $('#'+tab_id);


      $('.tab-content').hide();
      selectedTab.show();
      console.log('tab function runs');
  });

  $('.navigation .tab:first').click();

};


$('document').ready(function(){
projectView.handleNav();
  console.log('document loads')
});
// $(function(){
//   $('address').each(function(){
//     var val = $(this).find('address a').text();
//     //var projs = '<a href=""' + val + '">')
//   }
// )
//
// })
