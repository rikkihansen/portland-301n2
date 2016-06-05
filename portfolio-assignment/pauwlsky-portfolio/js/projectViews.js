(function(module){

  var projectView = {};

  projectView.populateFilters=function(){
    $.ajax({
      dataType: 'json',
      url:'js/projectItems.json',
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


  projectView.showSection = function(){
    $('#about').hide();
    $('#project-li').on('click', function(e){
      e.preventDefault();
      $('#about').hide();
      $('#project-container').fadeIn();
    });
    $('#about-li').on('click', function(e){
      e.preventDefault();
      $('#project-container').hide();
      $('#about').fadeIn();
    });
  };

  projectView.filterSelected = function(){
    $('#skills-select').on('change', function(e){
      var $selectVal = $(this).val();
      if($selectVal === 'See Project By Skills Used'){
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

  projectView.showMore = function(){
    console.log('inside showMore');
    $('.text').find('p:gt(0)').hide();
    $('article').on('click', '.show-more', function(e){
      e.preventDefault();
      $(this).prev().children('p').fadeIn();
      $(this).hide();
    });
  };

  projectView.modalShow = function(){
    $('.modal-show').on('click', function(e){
      e.preventDefault();
      $('.modal').css('display', 'block');
      var title = $(this).parents('article').find('.title').text();
      var img = $(this).parents('article').find('.image').attr('src');
      $('.modal-content').append('<h1 class="header">'+ title +'</h1><img src="' + img + '"/>');
    });
    //logic for hiding modal on page click
    //TODO fix logic so modal hides when clicking off of modal
    $('.modal-content').on('click', function(e) {
      $('.modal').css('display', 'none');
      $('.modal-content').empty();
    });
  };

  projectView.showSkillImgs = function(){
    $('.skills').on('click', 'a', function(e){
      var that = this;
      var $skillImagesContainer = $(this).parents('article').find('.skills-images');
      var $existingImages = $(this).parents('article').find('.skills-images img');
      var term = $(this).attr('data-category');
      e.preventDefault();
      if($existingImages.attr('data-category') === term){
        return;
      };
      $existingImages.fadeOut('slow');
      //TODO refactor to exclude images.json and grab information from another source, make AJAX call to flickr free api or another source ? ?
      $.ajax({
        type: 'get',
        url: 'js/images.json',
        success: function(data){
          $skillImagesContainer.empty();
          data.images.filter(function(item){
            var regex = new RegExp(term , 'gi');
            return item.match(regex) != undefined;
          })
          .reduce(function(accum, index){
            if (accum.indexOf(index) < 0){
              accum.push(index);
            }
            return accum;
          }, [])
          .forEach(function(src){
            var image = $('<img src=' + src + ' data-category="'+ term +'">');
            $skillImagesContainer.append(image);
            $(image).hide();
          });
          $skillImagesContainer.addClass('window-grow');
          $(that).parents('article').find('.skills-images img').fadeIn('slow');
        }
      });
    });
  };

  projectView.controllerInit = function(){
    console.log('inside controllerInit');
    projectView.populateFilters();
    projectView.showSection();
    projectView.filterSelected();
    projectView.showMore();
    projectView.modalShow();
    projectView.showSkillImgs();
  };

  module.projectView = projectView;

})(window);
