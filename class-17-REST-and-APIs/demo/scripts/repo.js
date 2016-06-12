(function(module){
  var repos = {};
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 03e87effd900d8eafbc21e7225b273e2ccbc29c2
>>>>>>> 5b9d4415086f9815a8ab90adcc7061be09d8609a
  repos.all = [];

  // console.log(githubToken);
  repos.requestRepos = function(callback){
    $.ajax({
      url: 'https://api.github.com/user/repos',
      type: 'GET',
      headers: {
        'Authorization' : 'token ' + githubToken
      },
      success: function(data, message, xhr){
        console.log('Success');
        repos.all = data;
        console.log(repos.all);
      },
      error: function(error){
        console.log('error');
      }
    }).then(callback);
  };


  module.repos = repos;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

  repos.all = [];


  repos.requestRepos = function(callback){
    var request = $.ajax({
      url: 'https://api.github.com/user/repos',
      type: 'GET',
      headers: {
        'Authorization': 'token ' + githubToken
      },
      success: function(data, message, xhr){
        repos.all = data;
      },
      error: function(xhr, status, error){
        console.log('inside fetchAll ajax error');
        console.log('ajax error', {xhr: xhr, status: status, error: error});
      }
    });
    request.then(callback);
  };

  module.repos = repos;
>>>>>>> 12d3a951f7d27ec84ed027b0e774b9f494f93036
>>>>>>> 03e87effd900d8eafbc21e7225b273e2ccbc29c2
>>>>>>> 5b9d4415086f9815a8ab90adcc7061be09d8609a
})(window);
