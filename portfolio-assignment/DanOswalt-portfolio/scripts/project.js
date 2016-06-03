(function() {

  /*****
  * Project
  ***/

  function Project (opts) {
    this.title = opts.title;
    this.description = opts.description;
    this.details = opts.details;
    this.publishedOn = opts.publishedOn;
    this.publishedBy = opts.publishedBy;
    this.url = opts.url;
    this.codeUrl = opts.codeUrl;
    this.screenshot = opts.screenshot;
  }

  Handlebars.registerHelper('daysAgo', function(person) {
    return parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago';
  });

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
        self.loadProjects();
      } else {
        $.getJSON('data/projectJSON.json')
          .done(function(json){
            self.data = json.data;
            self.loadProjects();
            self.saveToLocalStorage(self.data);
          }).fail(function(){
            self.data = [];
          });
      }

      self.loadFooterFun({
        copyrightYear : new Date().getFullYear(),
        projectCount : self.data.length,
        last30DaysCount : self.getLast30DaysCount(),
        randomLetter: randomLetter,
        randomLetterCount : self.getRandomLetterCountFromProjects(randomLetter)
      });

    },

    loadFooterFun : function(footerData) {
      var html = ProjectModule.compileHandlebarsTemplate(footerData, '#footer-template');
      ViewHandler.attachHtmlToParent('#site-footer', html);
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
      var regex = new RegExp('[' + letter + letter.toUpperCase() + ']', 'g');
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

    /*******
     * loadProjects sorts and appends to the projects module
     ***/

    loadProjects : function() {

      this.data.sort(function(a,b) {
        return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
      });

      this.data.forEach(function(projectData) {
        var project = new Project(projectData);
        var html = ProjectModule.compileHandlebarsTemplate(project, '#project-template');
        ViewHandler.attachHtmlToParent('#projects-module', html);
      });

    },

    compileHandlebarsTemplate : function(obj, templateElementId) {
      var appTemplate = $(templateElementId).html();
      var compileTemplate = Handlebars.compile(appTemplate);
      return compileTemplate(obj);
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

/***
 * ViewHandler
 **/

  var ViewHandler = {

    init : function() {
      this.initNewProject();
      this.handleTabClicks();
      this.handleNewProjectSubmit();
      this.handleJSONSelection();
    },

    handleTabClicks : function() {
      $('#nav-links').on('click', 'li.tab', function(e){
        e.preventDefault();
        var dataContent = $(this).attr('data-content');
        $('.tab-view').fadeOut('fast');
        $('#' + dataContent).fadeIn('fast');
      });
    },

    initNewProject : function() {
      var self = this;
      $('#new-project').on('keyup', 'input, textarea', self.createProjectFromForm);
    },

    handleJSONSelection : function() {
      $('#project-json').on('focus', function() {
        this.select();
      });
    },

    attachHtmlToParent : function(parentSelector, html) {
      $(parentSelector).append(html);
    },

    createProjectFromForm : function() {
      var project, html;

      $('#project-preview').empty();
      project = new Project({
        title: $('#project-title').val(),
        description: $('#project-description').val(),
        details: $('#project-details').val(),
        publishedBy: $('#project-publishedBy').val(),
        publishedOn: new Date(),
        url: $('#project-url').val(),
        codeUrl: $('#project-codeUrl').val(),
        screenshot: ''
      });

      html = ProjectModule.compileHandlebarsTemplate(project, '#project-template');
      ViewHandler.attachHtmlToParent('#project-preview', html);
      $('#project-json').val(JSON.stringify(project));
    },

    handleNewProjectSubmit : function() {
      var self = this;

      $('#new-project-submit').on('click', function(){
        if(self.formIsNotEmpty()) {
          var newProject = JSON.parse($('#project-json').val());
          ProjectModule.data.push(newProject);
          ProjectModule.saveToLocalStorage(ProjectModule.data);
          self.clearInputFields();
          $('#project-preview').empty();
          ViewHandler.showSaveMessage('Saved!');
        } else {
          // $('.save-msg').show().html('<h2 class="msg">Form is empty!</h2>').fadeOut(800);
          ViewHandler.showSaveMessage('Form is empty!');
          console.log('form is empty!');
        }
      });
    },

    showSaveMessage : function(msg) {
      $('.save-msg').show().html('<h2 class="msg">' + msg + '</h2>').fadeOut(800);
    },

    clearInputFields : function() {
      $('#project-json').val('');
      $('#new-project :input').val('');
    },

    formIsNotEmpty : function() {
      var isNotEmpty = false;
      $('#new-project :input').each(function(){
        if($.trim($(this).val()) !== '') {
          isNotEmpty = true;
          return;
        };
      });
      return isNotEmpty;
    }
  };

/****
 * Code to run on page load
 **/

  ProjectModule.init();
  ViewHandler.init();

})();
