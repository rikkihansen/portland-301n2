(function(module) {

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

  module.Project = Project;

})(window);
