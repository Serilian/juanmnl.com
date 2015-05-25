
Router.route("/", function(){
  this.render("home");
});

Router.route("/projects", function(){
  this.render("projects");
});

Router.route("/ideas", function(){
  this.render("ideas");
});

Router.route("/photography", function(){
  this.render("photography");
});

Router.route("/words", function(){
  this.render("words");
});
