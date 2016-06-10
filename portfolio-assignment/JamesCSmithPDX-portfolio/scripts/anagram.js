(function (module) {

  var anagram = {};

  anagram.create = function() {

    var name = 'JAMESSMITH';  //scramble my name
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

  module.anagram = anagram;
})(window);
