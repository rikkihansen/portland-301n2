$(function(){

  var Project = function(title, date, img, text, skills, url) {
    this.title = title;
    this.date = date;
    this.img = img;
    this.text = text;
    this.skills = skills;
    this.url = url;
  };

  Project.prototype.toHtml = function(){
    var $projectArticle = $('.project').clone();
    //create timestamp
    $projectArticle.find('.days-ago').html('Created about ' + parseInt((new Date() - new Date(this.date))/60/60/24/1000) + ' days ago');

    //insert main categories for title, text, image, date.
    var $title = $projectArticle.find('.title');
    var $image = $projectArticle.find('.image');
    var $date = $projectArticle.find('.date');
    var $text = $projectArticle.find('.text');
    var $skillsGithub = $projectArticle.find('.skillsGithub');
    $title.html(this.title);
    $image.attr('src', this.img);
    $date.html(this.date);
    $text.html(this.text);
    $skillsGithub.find('a').attr('href', this.url);
    $projectArticle.find('.url-text').html(this.url);

    //skills appended
    $projectArticle.find('.skills').html(' ');
    this.skills.forEach(function(item){
      $projectArticle.find('.skills').append('<a data-category="' + item + '" href="#">  ' + item + '  </a>');
      //TODO make anchors fire events particular to category
    });

    //append new project to project container
    $('#project').append($projectArticle);
    $projectArticle.removeClass('project');

    //logic for styling each article so they are staggered alternating left or right.
    if($projectArticle.prev('article').find('.title-date').hasClass('text-left')){
      $projectArticle.find('.title-date').removeClass('text-left').addClass('text-right');
      $image.removeClass('image-left').addClass('image-right');
      $projectArticle.find('.demo').addClass('text-right');
      $skillsGithub.removeClass('text-right').addClass('text-left');
    }

    //logic for modal event handler
    var that = this;
    $projectArticle.find('.modal-show').on('click', function(e){
      e.preventDefault();
      $('.modal').css('display', 'block');
      $('.modal-content').append('<h1 class="header">'+that.title+'</h1><img src="' + that.img + '"/>');
      //TODO add more content to modal.
    });
  };

  //logic for hiding modal on page click
  //TODO fix logic so modal hides when clicking off of modal
  $('.modal').on('click', function(e) {
    $(this).css('display', 'none');
    $('.modal-content').empty();
  });

  //ajax call to portfolioitems.json data and Project construction and project template removal
  $.ajax({
    dataType: 'json',
    url:'js/portfolioitems.json',
    async: false,
    success:function(data){
      data.sort(function(a,b){
        return (new Date(b.date)) - (new Date(a.date));
      });
      data.forEach(function(item){
        var project = new Project(item.title, item.date, item.img, item.text, item.skills, item.url);
        project.toHtml();
      });
      $('.project').remove();
    }
  });
});
