(function(module){
  console.log('in repoView');
  var repoView = {};

  repoView.getTemplate = function(data, callback){
    getTemplate('repo', data, callback);
  };

  repoView.index = function(){
    repos.pickRepos().map(function(repo){
      repoView.getTemplate (repo, function(html){
        $('#repo').append(html);
      });
    });
  };
  module.repoView = repoView;
})(window);
