(function(module){
  var followers = {}
  followers.all = []

  followers.requestFollowers = function(callback){
    $.ajax({
      url: 'https://api.github.com/users/pauwlsky/followers',
      type: 'GET',
      headers: {
        'Authorization' : 'token ' + githubToken
      },
      success: function(data, message, xhr){
        console.log('success')
        followers.all = data;
        console.log(repos.followers)
      },
      error: function(error){
        console.log('error');
      }
    }).then(callback);
  }

  module.followers = followers;

})(window);
