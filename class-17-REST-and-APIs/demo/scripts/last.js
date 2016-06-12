(function(module){
  var aboutController = {};

  aboutController.index = function(){
    repos.requestRepos(repoView.index);
  };
  
})(window);
