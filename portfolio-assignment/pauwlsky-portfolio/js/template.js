(function(module){
  function getTemplate(name, data){
    console.log('inside of getTemplate');
    return $.ajax({
      type: 'GET',
      url: './templates-hbs/' + name + '.hbs'
    })
      .then(function(text){
        var template = Handlebars.compile(text);
        var html = template(data);
        return html;
      });


  }
  module.getTemplate = getTemplate;
})(window);
