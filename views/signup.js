$(document).ready(function() {
    // Getting references to the email input 
    var newUser = $("email-input");
    var signUpBtn = $("sign-up-btn");
    
    // Adding event listener to the form to create a new object
    $(signUpBtn).on("click", "#email-input", handleNewUser);
  
  
    // Getting the initial list of Users
    createNewUser();
  
    // A function to handle what happens when the form is submitted to create a new User
    function handleNewUser(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!newUser.val().trim().trim()) {
        return;
      }
      // Calling the newUser function and passing in the value of the email input
      //how does this know to go to the "User" table?
      createNewUser({
        email: newUser
          .val()
          .trim()
      });
    }
  
    // A function for creating a user. Calls createNewUser upon completion
    function createNewUser(newUser) {
      $.post("/api/signup", newUser)
        .then(createNewUser);
    }
});