
Router.configure({
  layoutTemplate: 'appFrame'
});

Router.route("/", function(){
  this.render("home");
  this.layout('appFrame');
});

Router.route("/projects", function(){
  this.render("projects");
  this.layout('appFrame');
});

Router.route("/ideas", function(){
  this.render("ideas");
  this.layout('appFrame');
});

Router.route("/photography", function(){
  this.render("photography");
  this.layout('appFrame');
});

Router.route("/words", function(){
  this.render("words");
  this.layout('appFrame');
});
