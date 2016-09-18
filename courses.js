$(document).ready(function() {
  console.log("wow");
  $(window).scroll(function() {
    console.log("wow");
    if ($(window).scrollTop() > $(".course-list").scrollTop()) {
      console.log("reeeek");
    }
    $(".course-list").css("color", "red !important");
  });
});