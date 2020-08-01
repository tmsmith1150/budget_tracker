// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated"); //middleware that we wrote. line 27.. checking if the user is logged in.. if so, it proceeds to run. if not, it is redirected to the login page.

module.exports = function(app) { //exporting the routes

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members"); //checking if req.use is defined. if they are logged in, it will move them to members. if not, user is stuck at signup.
    }
    res.sendFile(path.join(__dirname, "../public/signup.html")); //path built in node library. in this case, it's joining the current folder (routes), to go into public signup.
  });
 //you dont need an else because after res.redirect .. it's like an "end".. so that route ends. 
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

};

//to avoid writing the same code 3 times in a row...
//you could create another middleware function, checks if they are not logged in.. if they are not.. send them to sign up. 
