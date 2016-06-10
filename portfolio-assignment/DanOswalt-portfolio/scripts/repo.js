(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      type: 'GET',
      headers: { 'Authorization': 'token ' + githubToken },
      success: function(data, message, xhr) {
        console.log(message);
        repos.all = data;
      },
      error: function(data, message, xhr) {
        console.log(message);
      }
    }).then(callback);
  };

  module.repos = repos;
})(window);
