(function(module){

  /*****
  * ProjectModule
  ***/

  var ProjectModule = {

    /*******
     * init loads data either from localstorage or from file
     ***/

    init : function() {
      var self = this;
      var randomLetter = self.getRandomLetter();

      if(localStorage.data){
        self.loadFromLocalStorage('data');
        ViewHandler.loadProjects();
      } else {
        $.getJSON('data/projectJSON.json')
          .done(function(json){
            self.data = json.data;
            ViewHandler.loadProjects();
            self.saveToLocalStorage(self.data);
          }).fail(function(){
            self.data = [];
          });
      }

      ViewHandler.loadFooterFun({
        copyrightYear : new Date().getFullYear(),
        projectCount : self.data.length,
        last30DaysCount : self.getLast30DaysCount(),
        randomLetter: randomLetter,
        randomLetterCount : self.getRandomLetterCountFromProjects(randomLetter)
      });

    },

    getLast30DaysCount : function() {
      return this.data.map(function(project){
        return project.publishedOn;
      })
      .filter(this.publishedInLast30Days)
      .length;
    },

    publishedInLast30Days : function (dateString) {
      return parseInt((new Date() - new Date(dateString)) / 1000 / 60 / 60 / 24) <= 30;
    },

    getRandomLetter : function () {
      var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
      return alphabet[Math.floor(Math.random() * 26)];
    },

    getLetterCount : function(letter, str) {
      var regex = new RegExp(letter, 'ig');
      var matches = str.match(regex) || [];
      return matches.length;
    },

    getRandomLetterCountFromProjects : function(letter) {
      var self = this;
      var str = self.data.reduce( function(total, project) {
        total += project.title || '';
        total += project.description || '';
        total += project.details || '';
        return total;
      } , '');
      return self.getLetterCount(letter, str);
    },

    saveToLocalStorage : function(data) {
      console.log('save data');
      localStorage.setItem('data', JSON.stringify(data));
    },

    clearFromLocalStorage : function(data) {
      console.log('clear data');
      localStorage.removeItem(data);
    },

    loadFromLocalStorage : function(data) {
      console.log('load data');
      this.data = JSON.parse(localStorage.getItem(data));
    }
  };

  module.ProjectModule = ProjectModule;

})(window);
