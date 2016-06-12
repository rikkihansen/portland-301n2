(function(module){

  console.log('inside hbsTemplate');

  getTemplate = function(name, data, callback){
    return $.ajax({
      type: 'GET',
      url: './hbs/' + name + '.hbs',
      success: function (text) {
        console.log('got template');
        var template = Handlebars.compile(text);
        var html = template(data);
        callback(html);
      },
      error: function(xhr, status, error){
        console.log('inside template ajax error');
        console.log('ajax error', {xhr: xhr, status: status, error: error});
      }
    });
  };

  module.getTemplate = getTemplate;
})(window);
