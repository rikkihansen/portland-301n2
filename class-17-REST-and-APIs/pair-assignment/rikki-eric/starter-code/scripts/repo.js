(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // done-rh.ej: How would you like to fetch your repos? Don't forget to call the callback.
    var request = $.ajax({
      type:'GET',
      url: 'https://api.github.com/user/repos',
      headers: {
        'Authorization': 'token ' + githubToken
      },
      success: function(data, message, xhr) {
        repos.all= data;
        console.log('success');
      },
      error: function(xhr, status, error) {
        console.log('error');
      }
    }); request.then(callback);


  };

  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
