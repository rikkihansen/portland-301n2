portfolioView = {};

portfolioView.populateFilters=function(){
  $.ajax({
    dataType: 'json',
    url:'js/portfolioitems.json',
    success:function(data){
      data.forEach(function(item){
        var skills = item.skills;
        skills.forEach(function(item){
          var option = '<option val="' + item + '">' + item + '</option>';
          if($('#skills-select option[val="'+ item +'"]').length===0){
            $('#skills-select').append(option);
          }
        });
      });
    }
  });
};

portfolioView.showSection = function(){
  $('#about').hide();
  $('#project-li').on('click', function(e){
    e.preventDefault();
    $('#about').hide();
    $('#project').fadeIn();
  });
  $('#about-li').on('click', function(e){
    e.preventDefault();
    $('#project').hide();
    $('#about').fadeIn();
  });
};

portfolioView.filterSelected = function(){
  $('#skills-select').on('change', function(e){
    var $selectVal = $(this).val();
    if($selectVal === null){
      return;
    }
    $projectCategories = $('a[data-category="'+ $selectVal +'"]');
    $('article').hide();
    $projectCategories.parents('article').fadeIn();
    if($selectVal === 'See All Categories'){
      $('article').show();
    }
  });
};

portfolioView.showMore = function(){
  $('.text').find('p:gt(0)').hide();
  $('article').on('click', '.show-more', function(e){
    e.preventDefault();
    $(this).prev().children('p').fadeIn();
    $(this).hide();
  });
};

$(function(){
  portfolioView.populateFilters();
  portfolioView.showSection();
  portfolioView.filterSelected();
  portfolioView.showMore();
});
