
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the overview page
    if (req.user) {
      res.redirect("/overview");
    }
    res.render("login");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the overview page
    if (req.user) {
      res.redirect("/overview");
    }
    res.render("login");
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the overview page
    if (req.user) {
      res.redirect("/overview");
    }
    res.render("signup");
  });

  app.get("/index", (req, res) => {
    // If the user already has an account send them to the overview page
    if (req.user) {
      res.redirect("/overview");
    }
    res.render("index");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/overview", isAuthenticated, (req, res) => {
    res.render("overview");
  });
};
