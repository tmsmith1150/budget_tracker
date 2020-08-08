  $(document).ready(function() {

  var formInput = $("#form-input");
  var categorieName = $("#category-name");
  var categorieType = $("#category-type");
  var expenseName = $("#expense-name");
  var expenseAmount = $("#expense-amount");
  var dropDownBtn = $("#drop-down-tog");
  var addExpBtn = $("#btn-add-expense");
  var addExpBtn = $("#btn-add-category");
  var addBillBtn = $("#btn-add-bill");
  var formInput = $("start");
  var formOne = $(".form-1");
  var formTwo = $(".form-2");
  var formThree = $(".form-3");
  var categories = $("#form-input")
  const addBillForm = $("form.billInfo");
  const billInputName = $("input#billInputName");
  const billInputWebsite = $("input#billInputWebsite");
  const billInputDate = $("input#billInputDate");



 // When the signup button is clicked, we validate the email and password are not blank
  addBillForm.on("submit", event => {
    event.preventDefault();
    const billData = {
      billName: billInputName.val().trim(),
      website: billInputWebsite.val().trim(),
      dueDate: billInputDate.val().trim(),
    };
    // If we have an email and password, run the signUpUser function
    addBill(billData.billName, billData.website,billData.dueDate);
    billInputName.val("");
    billInputWebsite.val("");
    billInputDate.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the overview page
  // Otherwise we log any errors
  function addBill(billName, website, dueDate) {
    console.log("Add Bill")
    $.post("/api/index/postbill", {
      billName: billName,
      website: website,
      dueDate: dueDate
    })
      .then(() => {
        // window.location.replace("/overview");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }



//   $(addExpBtn).on("click", handleFormInput);


//   // Gets the part of the url that comes after the "?" (which we have if we're   updating a post)
//   var url = window.location.search;
//   var expenseId;
//   var categorieId;
//   // Sets a flag for whether or not we're updating a post to be false initially
//   var updating = false;

//   // If we have this section in our url, we pull out the post id from the url
//   // In '?post_id=1', postId is 1
//   if (url.indexOf("?expenses_id=") !== -1) {
//     expenseId = url.split("=")[1];
//     getExpData(expenseId, "expenses");
//   }
//   // Otherwise if we have an author_id in our url, preset the author select box to   be our Author
//   else if (url.indexOf("?categorie_id=") !== -1) {
//     categorieId = url.split("=")[1];
//   }

//   // Getting the authors, and their posts
//   getExpenses();



//  function handleFormInput(event) {
//      event.preventDefault();
//      // Wont submit the post if we are missing a category name, category type, exp name, or exp amount.
//     if (!categorieName.val().trim() || !categorieType.val().trim() || !expenseName.val().trim() || !expenseAmount.val()) {

//       alert("you must enter a complete form");
//         return;
//       }
     
//     // Constructing a newExpense object to hand to the database
//     var newExpense = {
//         expenseName: expenseName.val().trim(),
//         amount: expenseAmount.val().trim(),
//         categorieId: categorieSelect.val()
//       };
  
//       console.log(newExpense);
//       // If we're updating a post run updatePost to update a post
//     // Otherwise run submitPost to create a whole new post
//     // if (updating) {
//     //     newExpense.id = expenseId;
//     //     updateExpense(newExpense);
//     //   }
//     //   else {
//     //     submitExpense(newExpense);
//     //   }
//     // }
   
//     // Submits a new post and brings user to blog page upon completion
//   function submitExpense(post) {
//     $.post("/api/index", post, function() {
//       window.location.href = "/overview";
//     });
//   }

//   // Gets expense data for the current expense if we're editing, or if we're adding to a categorie's existing expenses
//   function getExpenseData(id, type) {
//     var queryUrl;
//     switch (type) {
//     case "expense":
//       queryUrl = "/api/index/" + id;
//       break;
//     case "categorie":
//       queryUrl = "/api/index/" + id;
//       break;
//     default:
//       return;
//     }

//     // a little lost here

//     $.get(queryUrl, function(data) {
//       if (data) {
//         console.log(data.ExpenseId || data.id);
//         // If this post exists, prefill our cms forms with its data
//         titleInput.val(data.title);
//         bodyInput.val(data.body);
//         authorId = data.AuthorId || data.id;
//         // If we have a post with this id, set a flag for us to know to update the post
//         // when we hit submit
//         updating = true;
//       }
//     });
//   }
//   // A function to get Expenses and then render our list of Authors
//   function getExpenses() {
//     $.get("/api/index", renderExpensesList);
//   }
// }



// formInput.addEventListener("click", )
// function startGame(){
//     console.log("Start");
//     formInput.classList.add("hide");
//     formOne.classList.remove("hide");
//     formTwo.classList.add("hide");
//     answerEl.classList.remove("hide");
//     setNextQuestion(); 
//     quizInProgress = true;
//     }
});