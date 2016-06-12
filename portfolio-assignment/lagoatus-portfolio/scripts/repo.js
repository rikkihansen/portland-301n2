(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/lagoatus/repos',
      type: 'GET',
      headers: {
        'Authorization' : 'token ' + githubToken
      },
      success: function(data, message, xhr){
        console.log('success');
        repos.all = data;
        console.log(repos.all);
      },
      error: function(error){
        console.log('error');
      }
    }).then(callback);

  };
  // repos.with = function(attr) {
  //   return repos.all.filter(function(repo) {
  //     return repo[attr];
  //   });
  // };

  module.repos = repos;
})(window);
