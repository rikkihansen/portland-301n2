(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // D+A: How would you like to fetch your repos? Don't forget to call the callback.
    $.ajax({
      url: 'https://api.github.com/user/repos',
      type: 'GET',
      headers: {
        'Authorization': 'token ' + githubToken
      }
    })
    .done(function(data, message, xhr) {
      repos.all = data;
      console.log(message);
    })
    .fail(function(data, message, xhr) {
      console.log(message);
    })
    .then(callback);
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
