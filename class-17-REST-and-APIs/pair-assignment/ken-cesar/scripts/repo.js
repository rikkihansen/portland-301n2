(function(module) {
  var repos = {};

  repos.all = [];

  // TODO: How would you like to fetch your repos? Don't forget to call the callback.
  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/kbrumer/repos' +
            '?per_page=100' +
            '&sort=updated',
      type: 'GET',
      headers: { 'Authorization': 'token ' + githubToken },
      success: function(data, message, xhr) {
        repos.all = data;
      }
    }).done(callback);
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
