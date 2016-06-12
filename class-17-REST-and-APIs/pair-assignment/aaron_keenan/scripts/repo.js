(function(module) {
  var repos = {};

  repos.all = [];


  repos.requestRepos = function(callback) {
    // DONE: How would you like to fetch your repos? Don't forget to call the callback.
    $.ajax({
      url: 'https://api.github.com/user/repos',
      type: 'GET',
      headers: {
        'Authorization' : 'token ' + githubToken
      },
      success: function(data, message, xhr){
<<<<<<< HEAD
        console.log('success');
        repos.all = data;
        console.log(repos.all);
=======
<<<<<<< HEAD
        console.log('success');
        repos.all = data;
        console.log(repos.all);
=======
        console.log('success')
        repos.all = data;
        console.log(repos.all)
>>>>>>> 03e87effd900d8eafbc21e7225b273e2ccbc29c2
>>>>>>> 5b9d4415086f9815a8ab90adcc7061be09d8609a
      },
      error: function(error){
        console.log('error');
      }
    }).then(callback);

  };


  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  // repos.withFollowers = function(attr) {
  //   console.log('inside repos.withFollowers')
  //   return repos.all.filter(function(repo) {
  //     return repo[attr];
  //   });
  // };

  module.repos = repos;
})(window);
