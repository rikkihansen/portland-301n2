(function(module){
<<<<<<< HEAD
  var followers = {};
  followers.all = [];
=======
<<<<<<< HEAD
  var followers = {};
  followers.all = [];
=======
  var followers = {}
  followers.all = []
>>>>>>> 03e87effd900d8eafbc21e7225b273e2ccbc29c2
>>>>>>> 5b9d4415086f9815a8ab90adcc7061be09d8609a

  followers.requestFollowers = function(callback){
    $.ajax({
      url: 'https://api.github.com/users/pauwlsky/followers',
      type: 'GET',
      headers: {
        'Authorization' : 'token ' + githubToken
      },
      success: function(data, message, xhr){
<<<<<<< HEAD
        console.log('success');
        followers.all = data;
        console.log(repos.followers);
=======
<<<<<<< HEAD
        console.log('success');
        followers.all = data;
        console.log(repos.followers);
=======
        console.log('success')
        followers.all = data;
        console.log(repos.followers)
>>>>>>> 03e87effd900d8eafbc21e7225b273e2ccbc29c2
>>>>>>> 5b9d4415086f9815a8ab90adcc7061be09d8609a
      },
      error: function(error){
        console.log('error');
      }
    }).then(callback);
<<<<<<< HEAD
  };
=======
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 03e87effd900d8eafbc21e7225b273e2ccbc29c2
>>>>>>> 5b9d4415086f9815a8ab90adcc7061be09d8609a

  module.followers = followers;

})(window);
