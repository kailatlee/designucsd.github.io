$(document).ready(function() {

  // Hide the form and display success message
  $(".email-form").submit(function(e) {
    $(".email-form input").fadeOut();
    $(".email-form label").fadeOut();
    $(".email-form .form-success").fadeIn();
  });

  // Show the form again
  $(".form-again").click(function() {
    $(".email-form input[type='text']").val("");
    $(".email-form input[type='email']").val("");
    $(".email-form .form-success").fadeOut();
    $(".email-form label").fadeIn();
    $(".email-form input").fadeIn();
  });

  // Hide the form and display success message
  $(".signin-form").submit(function(e) {
    $(".signin-form input").fadeOut();
    $(".signin-form label").fadeOut();
    $(".signin-form .form-success").fadeIn();
  });

  // Show the form again
  $(".signin-form-again").click(function() {
    $(".signin-form input[type='text']").val("");
    $(".signin-form input[type='email']").val("");
    $(".signin-form .form-success").fadeOut();
    $(".signin-form label").fadeIn();
    $(".signin-form input").fadeIn();
  });
});