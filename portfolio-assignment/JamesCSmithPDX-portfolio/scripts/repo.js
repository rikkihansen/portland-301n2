(function(module){
  var repos = {};

  repos.all = [];

  console.log('In repo');

  repos.requestRepos = function(callback){
    var request = $.ajax({
      url: 'https://api.github.com/user/repos',
      type: 'GET',
      headers: {
        'Authorization': 'token ' + githubToken
      },
      success: function(data, message, xhr){
        repos.all = data;
        console.log('repos.all: ' + repos.all);
      },
      error: function(xhr, status, error){
        console.log('inside fetchAll ajax error');
        console.log('ajax error', {xhr: xhr, status: status, error: error});
      }
    });
    request.then(callback);
  };

  repos.pickRepos = function() {
    return repos.all.filter(function(repo) {
      var createdDate = Date.parse(repo['created_at']);
      var todayDate = new Date();
      var baseDate = todayDate.setMonth(todayDate.getMonth() - 3);
      var size = parseInt(repo['size']);
      var fork = repo['fork'];

      if (createdDate > baseDate && size > 100 && fork == false) {
        return repo['created_at'];
      }
    });
  };

  module.repos = repos;
})(window);
