
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
// Requiring our models and passport as we've configured it
const db = require("../models");


module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the overview page
    if (req.user) {
      // res.redirect("/overview");
    }
    res.render("login");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the overview page
    if (req.user) {
      // res.redirect("/overview");
    }
    res.render("login", {loggedIn: req.user? true: false});
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the overview page
    if (req.user) {
      // res.redirect("/overview");
    }
    res.render("signup");
  });


 

 
  app.get("/bills", (req, res) => {

    // If the user already has an account send them to the overview page
   
    if (!req.user) {
      res.redirect(307, "/login");
    }
    
    db.Bill.findAll({where: {userID: req.user.id},}).then(function(dbBill) {
      // We have access to the Bills as an argument inside of the callback function
      let hbsBill = {bills: dbBill.map(bill => {return {id: bill.id, billName: bill.billName, website: bill.website, dueDate: bill.dueDate}})}
      res.render("bills", hbsBill);
     
     
    });
  });
  app.get("/overview", (req, res) => {
    // If the user already has an account send them to the overview page
    if (!req.user) {
      res.redirect(307, "/login");
    }
    
    
    db.Expense.findAll({where: {userID: req.user.id},}).then(function(dbExpense) {
      // We have access to the Bills as an argument inside of the callback function
      let hbsExp = {expenses: dbExpense.map(expense => {return {id: expense.id, expenseName: expense.expenseName, amount: expense.amount, date: expense.date, category: expense.CategorieId}})}
      res.render("overview", hbsExp);
      // console.log(hbsExpense)
      console.log("ALERT: " + db.Expense);
    });

    db.Categorie.findAll({where: {userID: req.user.id},}).then(function(dbCategory) {
      // We have access to the Bills as an argument inside of the callback function
      let hbsCat = {category: dbCategory.map(categorie => {return {id: categorie.id, categoryName: categorie.categoryName}})}
      res.render("overview", hbsCat);  
      console.log(hbsCat)


    // move to overview page
    db.Expense.findAll({
      include: [{
        model: db.Categorie
      }], 
      where: {userID: req.user.id}}).then(function(dbExpense) {
      // We have access to the Bills as an argument inside of the callback function
      let hbsTest = {expenses: dbExpense.map(expense => {
        // console.log(expense)
        // console.log(expense.categoryName)
        return {id: expense.id, expenseName: expense.expenseName, amount: expense.amount, date: expense.date, category: expense.CategorieId, categoryName: expense.Categorie.categoryName, categoryType: expense.categorie.categoryType}}
        )}
      res.render("overview", hbsTest);
      console.log(hbsTest);
      

    });
    
  });


    
  });

  // create new HTML handle bars for 1)Bills 2)pie chart
  //  In html-routes add line for /billpay and /piechart
//   category
//   for each catergory type
//   foreach catergoryname
//   foreach expense.name -- date amount

// example a bunch of lists 
// Title of card: budget
// Example expense: carfund
// example line item: carfund payment august date 8/10/2020 amount 1,000 
// delete button

  


  // app.get("/overview", (req, res) => {
  //   // If the user already has an account send them to the overview page
  //   if (!req.user) {
  //     res.redirect(307, "/login");
  //   }
  //   console.log(req.user)
  //   db.Expense.findAll({where: {userID: req.user.id},}).then(function(dbExpense) {
  //     console.log(dbBill)
  //     // We have access to the Bills as an argument inside of the callback function
  //     let hbsOb = {expenses: dbExpense.map(expense => {return {id: expense.id, expenseName: expense.expenseName, amount: expense.amount, date: expense.Date, category: expense.CategorieId}})}
  //     console.log(hbsOb)
  //     res.render("overview", hbsOb);
  //   });
  //   // res.render("overview", hbsOb);
  // });

  // app.get("/overview", (req, res) => {
  //   // If the user already has an account send them to the overview page
  //   if (!req.user) {
  //     res.redirect(307, "/login");
  //   }
    
  //   db.Categorie.findAll({where: {userID: req.user.id},}).then(function(dbCategory) {
  //     // We have access to the Bills as an argument inside of the callback function
  //     let hbsOb = {category: dbCategory.map(categorie => {return {id: categorie.id, categoryName: categorie.categoryName}})}
  //     res.render("overview", hbsOb);
  //   });
  //   // res.render("overview", hbsOb);
  // });

  // app.get("/index", (req, res) => {
  //   // If the user already has an account send them to the overview page
  //   if (req.user) {
  //     // res.redirect("/overview");
  //   }
  //   res.render("index");
  // });


  app.get("/index", (req, res) => {
    // If the user already has an account send them to the overview page
    if (!req.user) {
      res.redirect(307, "/login");
    }
    
    db.Categorie.findAll({where: {userID: req.user.id},}).then(function(dbCategory) {
      // We have access to the Bills as an argument inside of the callback function
      let hbsOb = {category: dbCategory.map(categorie => {return {id: categorie.id, categoryName: categorie.categoryName}})}
      res.render("index", hbsOb);
    });
    // res.render("overview", hbsOb);
  });

  app.get("/index", (req, res) => {
    // If the user already has an account send them to the overview page
    if (req.user) {
      // res.redirect("/overview");
    }
    res.render("index");
  });

  app.get("/bills", (req, res) => {
    // If the user already has an account send them to the overview page
    if (req.user) {
      // res.redirect("/overview");
    }
    res.render("bills");
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/overview", isAuthenticated, (req, res) => {
    res.render("overview");
  });
};
