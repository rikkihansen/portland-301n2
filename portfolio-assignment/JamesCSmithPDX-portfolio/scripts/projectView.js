(function(module) {

  var projectView = {};

  // create tab views of content in #projects and #about
  projectView.handleMainNav = function() {
    $('.mainNav').on('click', 'li', function() {
      $('.jumbotron').fadeTo(5000, 1);
      $('.page-content').hide();
      $('main').find('[id="'+$(this).attr('data-section')+'"]').fadeIn(5000);
      projectView.scroll(this);
    });
  };

  // more and shrink function
  projectView.createTeaser = function() {
    $('.projDescription *:nth-child(n)').hide();
    $('.projDescription *:nth-child(1)').show();
    $('.shrink').hide();
    $('.read-on').on('click', function(event) {
      event.preventDefault();
      $(this).prev().find('*:nth-child(n)').slideDown(1500);
      $(this).hide();
      $(this).next().show();
    });
    $('.shrink').on('click', function(e) {
      event.preventDefault();
      $('.projDescription *:nth-child(n)').hide();
      $('.projDescription *:nth-child(1)').show();
      $(this).hide();
      $(this).prev().show();
    });
  };

  projectView.scroll = function(tease) {
    $('html, body').animate({
      scrollTop: parseInt($(tease).offset().top)
    }, 2000);
  };

  var anagram = {};

  anagram.create = function() {
    var name = 'JAMES SMITH';  //scramble my name
    name = name.split(''); // split name into letters
    console.log(name);
    anagram.fisherYates(name); //run the ranomd shuffle function
    console.log(name);
    // use reduce to join the random letters
    var myAnagram = name.reduce(function(prev, next, index) {
      return prev + next;
    });
    console.log(myAnagram);

    //get anagram template

    var source = $('#anagram-template').html();

    //compile the anagram
    var template = Handlebars.compile(source);
    console.log(myAnagram);
    var context = {
      hbAnagram: myAnagram
    };
    $('#anagram').append(template(context));
  };

//scrambled name function with reduce

  anagram.fisherYates = function(name) {
    var i = name.length, j, tempi, tempj;
    if ( i === 0 ) return false;
    while ( --i ) {
      j = Math.floor( Math.random() * ( i + 1 ) );
      tempi = name[i];
      tempj = name[j];
      name[i] = tempj;
      name[j] = tempi;
      console.log('fisheryates:' + name);
      return name;
    }
  };

  //call the functions
  projectView.initIndexPage = function(){
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });
    anagram.create();
    $('.page-content').hide();
    $('.jumbotron').fadeTo(15000, 0.0);
    projectView.handleMainNav();
    projectView.createTeaser();

  };
  module.projectView = projectView;
})(window);
