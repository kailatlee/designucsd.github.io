$(document).ready(function() {

  // Hide the form and display success message
  $(".email-form").submit(function(e) {
    $(".email-form input").fadeOut();
    $(".email-form .form-success").fadeIn();
  });

  // Show the form again
  $(".form-again").click(function() {
    $(".email-form .form-success").fadeOut();
    $(".email-form input").fadeIn();
  });
});